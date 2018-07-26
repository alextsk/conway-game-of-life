import './styles.css';
import { renderField, renderControls } from './html-renderer';
import {
  cellClickHandler,
  resetHandler,
  widthHandler,
  heightHandler,
  speedHandler,
  playHandler,
  initField,
  initControls,
} from './events';
import { modelInit, updateState, toggleCell } from './state';


function main(fieldWidth, fieldHeight) {
  const gameContainer = document.querySelector('#game-field');
  const model = modelInit(fieldWidth, fieldHeight, 700, gameContainer);
  const controlsContainer = document.querySelector('#game-controls');

  model.addObserver('toggle', (data) => {
    model.setGrid(toggleCell(model.getGrid(), data.x, data.y));
  });

  model.addObserver('update', () => {
    model.setGrid(updateState(model.getGrid()));
  });

  model.addObserver('redraw', () => {
    gameContainer.innerHTML = renderField(model.getGrid(), () => 'js-cell');
  });

  model.addObserver('diff', () => {
    const modelDiff = model.diff();
    modelDiff.forEach((diff) => {
      const element = gameContainer.querySelector(`#x${diff.x + 1}y${diff.y + 1}`);
      element.classList.toggle('alive');
    });
  });

  model.addObserver('controls', (components) => {
    controlsContainer.innerHTML = renderControls(components);
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
