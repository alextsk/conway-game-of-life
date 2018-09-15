import Logic from './Logic';
import State from './State';
import Messages from './Messages';
import Observer from './Observer';

class Model extends Observer{
  state: any;

  constructor() {
    super();
    const state = new State();
    const logic = new Logic();

    state.addObserver(Messages.TOGGLE, (data) => {
      state.setGrid(logic.toggleCell(state.getGrid(), data.x, data.y), true);
      state.isStable = false;
    });

    this.addObserver(Messages.UPDATE, () => {
      console.log('Update in Model');
      state.setGrid(logic.updateState(state.getGrid()), true);
      this.broadcast(Messages.REDRAW, state.getGrid());
    });

    // state.addObserver(Messages.GAMESTATUS, (message) => {
    //   gameMessageContainer[0].innerHTML = message;
    // });
    //
    // state.addObserver(Messages.DIFF, () => {
    //   state.nextState((diff) => {
    //     const element = gameContainer.querySelector(`#x${diff.x + 1}y${diff.y + 1}`);
    //     element.classList.toggle('alive');
    //   });
    // });

    this.addObserver(Messages.WIDTH, (value) => {
      state.setWidth(value);
      this.broadcast(Messages.REDRAW, state.getGrid());
    });

    this.addObserver(Messages.HEIGHT, (value) => {
      state.setHeight(value);
      this.broadcast(Messages.REDRAW, state.getGrid());
    });

    this.addObserver(Messages.RESET, () => {
      state.resetGrid();
      this.broadcast(Messages.REDRAW, state.getGrid());
    });

  /*  state.addObserver(Messages.PLAYPAUSE, (value) => {
      state.setRunning(!state.isRunning());
      const target = value;
      target.innerHTML = state.isRunning() ? 'Pause' : 'Run';
    });*/
  }
}
export default Model;
