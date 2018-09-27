import State from './State/State';
import Messages from '../Messages';
import Observer from '../Utilities/Observer';
import IModel from './IModel';
import bindDecorator from 'bind-decorator';

class Model extends Observer implements IModel{
  state: State;

  constructor() {
    super();
    this.state = new State();
    this.initObservers();
  }

  private initObservers() {
    this.addObserver(Messages.TOGGLE_CELL, this.onToggle);
    this.addObserver(Messages.UPDATE_STATE, this.onUpdateState);
    this.addObserver(Messages.UPDATE_WIDTH, this.onUpdateWidth);
    this.addObserver(Messages.UPDATE_HEIGHT, this.onUpdateHeight);
    this.addObserver(Messages.RESET, this.onReset);
  }

  @bindDecorator
  private onToggle(cellCoordinates: {x:number, y:number}): void {
    this.state.toggleCell(cellCoordinates.x, cellCoordinates.y);
    this.state.isStable = false;
    this.broadcast(Messages.STATE_UPDATED, this.state.getGrid());
  }

  @bindDecorator
  private onUpdateState(): void {
    const stability = this.state.getNextState();
    this.broadcast(Messages.STATUS_CHANGED, stability);
    this.broadcast(Messages.STATE_UPDATED, this.state.getGrid());
  }

  @bindDecorator
  private onUpdateHeight(height: number): void {
    this.state.setHeight(height);
    this.broadcast(Messages.STATE_UPDATED, this.state.getGrid());
  }

  @bindDecorator
  private onUpdateWidth(width: number): void {
    this.state.setWidth(width);
    this.broadcast(Messages.STATE_UPDATED, this.state.getGrid());
  }

  @bindDecorator
  private onReset(): void {
    this.state.resetGrid();
    this.broadcast(Messages.STATE_UPDATED, this.state.getGrid());
  }
}
export default Model;
