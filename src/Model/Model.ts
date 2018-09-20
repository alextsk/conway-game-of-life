
import State from './State/State';
import Messages from '../Utilities/Messages';
import Observer from '../Utilities/Observer';
import IModel from './IModel';

class Model extends Observer implements IModel{

  constructor() {
    super();
    const state = new State();

    this.addObserver(Messages.TOGGLE_CELL, (data) => {
      state.toggleCell(data.x, data.y);
      console.log(data);
      state.isStable = false;
      this.broadcast(Messages.STATE_UPDATED, state.getGrid());
    });

    this.addObserver(Messages.UPDATE_STATE, () => {
      const stability = state.getNextState();
      this.broadcast(Messages.STATUS_CHANGED, stability);
      this.broadcast(Messages.STATE_UPDATED, state.getGrid());
    });

    this.addObserver(Messages.UPDATE_WIDTH, (value) => {
      state.setWidth(value);
      this.broadcast(Messages.STATE_UPDATED, state.getGrid());
    });

    this.addObserver(Messages.UPDATE_HEIGHT, (value) => {
      state.setHeight(value);
      this.broadcast(Messages.STATE_UPDATED, state.getGrid());
    });

    this.addObserver(Messages.RESET, () => {
      state.resetGrid();
      this.broadcast(Messages.STATE_UPDATED, state.getGrid());
    });
  }
}
export default Model;
