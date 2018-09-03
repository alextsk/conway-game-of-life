import './styles.css';
import { renderField, renderControls } from './html-renderer';
import { getCell } from './logic';
import {
  cellClickHandler,
  resetHandler,
  widthHandler,
  heightHandler,
  speedHandler,
  playHandler,
  initField,
  initControls,
} from './events.ts';
import  MSG from './messages.ts';

import { State, updateState, toggleCell } from './state.ts';

function main(fieldWidth:number, fieldHeight:number) {
  const gameContainer = document.querySelector('#game-field');
  const model = new State(fieldWidth, fieldHeight, 700);
  const controlsContainer = document.querySelector('#game-controls');

  model.addObserver(MSG.TOGGLE, (data) => {
    model.setGrid(toggleCell(model.getGrid(), data.x, data.y));
  });

  model.addObserver(MSG.UPDATE, () => {
    model.setGrid(updateState(model.getGrid()));
  });

  model.addObserver(MSG.REDRAW, () => {
    gameContainer.innerHTML = renderField(model.getGrid(), getCell);
  });

  model.addObserver(MSG.DIFF, () => {
    const modelDiff = model.diff();
    modelDiff.forEach((diff) => {
      const element = gameContainer.querySelector(`#x${diff.x + 1}y${diff.y + 1}`);
      element.classList.toggle('alive');
    });
  });

  model.addObserver(MSG.CONTROLS, (components) => {
    controlsContainer.innerHTML = renderControls(components);
  });

  model.addObserver(MSG.WIDTH, (value) => {
    model.setWidth(value);
  });

  model.addObserver(MSG.HEIGHT, (value) => {
    model.setHeight(value);
  });

  model.addObserver(MSG.SPEED, (value) => {
    model.setSpeed(value);
  });

  model.addObserver(MSG.RESET, () => {
    model.resetGrid();
  });

  model.addObserver(MSG.PLAYPAUSE, (value) => {
    model.setRunning(!model.isRunning());
    const target = value;
    target.innerHTML = model.isRunning() ? 'Pause' : 'Run';
  });

  const config = {
    model,
    container: controlsContainer,
    components: {
      reset: {
        selector: '#reset',
        handler: resetHandler,
        title: 'Reset',
      },
      play: {
        selector: '#run',
        handler: playHandler,
        title: 'Pause',
      },
      speed: {
        selector: '#speed',
        auxSelector: '#speed-number',
        title: 'Speed',
        handler: speedHandler,
        reporter: val => `${(1000 / val).toFixed(2)} renders/sec`,
        minVal: 100,
        maxVal: 2000,
        initVal: model.getSpeed(),
        message: MSG.SPEED,
      },
      width: {
        selector: '#width',
        auxSelector: '#width-number',
        title: 'Width',
        handler: widthHandler,
        reporter: val => `${val} cells`,
        minVal: 10,
        maxVal: 200,
        initVal: model.getWidth(),
        message: MSG.WIDTH,
      },
      height: {
        selector: '#height',
        auxSelector: '#height-number',
        title: 'Height',
        handler: heightHandler,
        reporter: val => `${val} cells`,
        minVal: 10,
        maxVal: 200,
        initVal: model.getHeight(),
        message: MSG.HEIGHT,
      },
    },
  };

  initControls(config);

  initField({
    model,
    container: gameContainer,
    handler: cellClickHandler,
  });
}

main(50, 50);
