
import State from './State';
import Messages from '../Utilities/Messages';
import Observer from '../Utilities/Observer';

class Model extends Observer{
  state: any;

  constructor() {
    super();
    const state = new State();

    this.addObserver(Messages.TOGGLE, (data) => {
      state.toggleCell(data.x, data.y);
      state.isStable = false;
      this.broadcast(Messages.REDRAW, state.getGrid());
    });

    this.addObserver(Messages.UPDATE, () => {
      const stability =  state.getNextState();
      this.broadcast(Messages.GAMESTATUS, stability);
      this.broadcast(Messages.REDRAW, state.getGrid());
    });

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
  }
}
export default Model;
