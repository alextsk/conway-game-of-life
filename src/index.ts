import './styles.css';

import Messages from './Model/Messages';
import Model from './Model/Model';
import View from './View/View';

class Controller {
  constructor(model: Model, view: View) {
    const events = view.getEventsObject();

    events.addObserver(Messages.UPDATE, () => {
      console.log('events.addObserver(Messages.UPDATE) in index ');
      model.broadcast(Messages.UPDATE);
    });

    model.addObserver(Messages.REDRAW, (payload) => {
      console.log('model.addObserver(Messages.REDRAW: payload', payload);
      events.broadcast(Messages.REDRAW, payload);
    });

    events.addObserver(Messages.RESET, () => {
      model.broadcast(Messages.RESET);
    });
  }
}

const controller = new Controller(new Model(), new View('.game'));

/*

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



  events.initControls(config);

  events.initField({
    model,
    container: gameContainer,
    handler: events.cellClickHandler,
  });
}
*/


