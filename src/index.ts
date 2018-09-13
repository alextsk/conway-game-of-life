import './styles.css';
import Template from './Template';
import Logic from './Logic';
import Events from './Events';
import Messages from './Messages';
import State from './State';

function main(fieldWidth:number, fieldHeight:number) : void {
  const gameContainer = document.querySelector('#game-field');
  const controlsContainer = document.querySelector('#game-controls');
  const gameMessageContainer = document.getElementsByClassName('js-game__message');
  const model = new State(fieldWidth, fieldHeight, 500);
  const logic = new Logic();
  const events = new Events();
  const renderer = new Template(logic.getCellState);

  model.addObserver(Messages.TOGGLE, (data) => {
    model.setGrid(logic.toggleCell(model.getGrid(), data.x, data.y), true);
    model.isStable = false;
  });

  model.addObserver(Messages.UPDATE, () => {
    model.setGrid(logic.updateState(model.getGrid()), true);
  });

  model.addObserver(Messages.REDRAW, () => {
    gameContainer.innerHTML = renderer.renderField(model.getGrid());
  });

  model.addObserver(Messages.GAMESTATUS, (message) => {
    gameMessageContainer[0].innerHTML = message;
  });

  model.addObserver(Messages.DIFF, () => {
    model.nextState((diff) => {
      const element = gameContainer.querySelector(`#x${diff.x + 1}y${diff.y + 1}`);
      element.classList.toggle('alive');
    });
  });

  model.addObserver(Messages.CONTROLS, (components) => {
    controlsContainer.innerHTML = renderer.renderControls(components);
  });

  model.addObserver(Messages.WIDTH, (value) => {
    model.setWidth(value);
  });

  model.addObserver(Messages.HEIGHT, (value) => {
    model.setHeight(value);
  });

  model.addObserver(Messages.SPEED, (value) => {
    model.setSpeed(value);
  });

  model.addObserver(Messages.RESET, () => {
    model.resetGrid();
  });

  model.addObserver(Messages.PLAYPAUSE, (value) => {
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
        handler: events.resetHandler,
        title: 'Reset',
      },
      play: {
        selector: '#run',
        handler: events.playHandler,
        title: 'Pause',
      },
      speed: {
        selector: '#speed',
        auxSelector: '#speed-number',
        title: 'Speed',
        handler: events.speedHandler,
        reporter: val => `${(1000 / val).toFixed(2)} renders/sec`,
        minVal: 100,
        maxVal: 2000,
        initVal: model.getSpeed(),
        message: Messages.SPEED,
      },
      width: {
        selector: '#width',
        auxSelector: '#width-number',
        title: 'Width',
        handler: events.widthHandler,
        reporter: val => `${val} cells`,
        minVal: 5,
        maxVal: 100,
        initVal: model.getWidth(),
        message: Messages.WIDTH,
      },
      height: {
        selector: '#height',
        auxSelector: '#height-number',
        title: 'Height',
        handler: events.heightHandler,
        reporter: val => `${val} cells`,
        minVal: 5,
        maxVal: 100,
        initVal: model.getHeight(),
        message: Messages.HEIGHT,
      },
    },
  };

  events.initControls(config);

  events.initField({
    model,
    container: gameContainer,
    handler: events.cellClickHandler,
  });
}

main(10, 10);
