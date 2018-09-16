import Observer from '../Utilities/Observer';
import { deepClone } from '../Utilities/utils';
import Logic from './Logic';

enum CellState {Dead, Alive} 
type Grid = CellState[][];

class State extends Observer{
  private prevGrids : Grid[] = [];
  private running : boolean = true;
  private grid : Grid = this.createGrid(this.width, this.height);
  public isStable = false;
  private logic;

  constructor(public width:number = 10, public height:number = 10) {
    super();
    this.logic = new Logic();
    this.resetGrid();
  }

  generateField(grid) : Grid {
    this.isStable = false;
    this.prevGrids = [];
    return grid.map(row => row.map(() => this.makeRandomCell()));
  }
  
  makeRandomCell() {
    return Math.random() > .5 ? CellState.Alive : CellState.Dead;
  }

  createGrid(x: number = this.width, y: number = this.height) : Grid {
    return <any[]>(new Array(y)).fill('').map(() => (new Array(x)).fill(CellState.Dead));// tslint:disable-line
  } 

  getGrid() : Grid {
    return this.grid;
  }

  setGrid(newGrid, changeHistory: boolean = false) {
    changeHistory && this.prevGrids.push(deepClone(this.grid));
    this.grid = deepClone(newGrid);
    return this.grid;
  }

  toggleCell(x, y) {
    this.setGrid(this.logic.toggleCell(this.getGrid(), x, y), true);
  }

  getNextState() {
    this.setGrid(this.logic.updateState(this.getGrid()), true);
    return this.isRepeatingState();
  }
  
  resetGrid() : void {
    this.setGrid(this.generateField(this.createGrid(this.width, this.height)));
  } 
  
  getWidth () : number {
    return this.width;
  } 

  setWidth (newWidth: number) : void {
    this.width = +newWidth;
    const newrow = Array(+newWidth).fill(0);
    const newGrid = this.getGrid().map(row => newrow.map((el, i) => row[i] || el));
    this.setGrid(newGrid);
  }

  isRepeatingState(): boolean {
    return this.prevGrids.some(
      (grid) => {
        if (grid.length === 0) return false;
        if (grid.length !== this.grid.length ||
            grid[0].length !== this.grid[0].length) {
          return false;
        }
        return (State.diff(grid, this.grid)).length === 0;
      });
  }

  static diff(old, newGrid) : {x:number, y: number}[] {
    const result = [];
    for (let i = 0; i < old.length; i += 1) {
      for (let j = 0; j < old[i].length; j += 1) {
        if (old[i][j] !== newGrid[i][j]) {
          result.push({ y: i, x: j });
        }
      }
    }
    return result;
  }

  getDiffOfNextState(fn: (difference: {x: number, y: number}) => void) {
    if (this.prevGrids.length > 0) {
      this.isStable = this.isRepeatingState();
      this.getRecentChanges().forEach(fn);
    }
  }

  getRecentChanges() {
    return State.diff(this.prevGrids[this.prevGrids.length - 1], this.grid);
  }

  getHeight() {
    return this.height;
  }

  setHeight(newHeight) {
    this.height = +newHeight;
    const newGrid = Array(+newHeight).fill('');
    const res = newGrid.map((row, i) => this.getGrid()[i] || Array(this.width).fill(0));
    this.setGrid(res);
  }

  setRunning(val: boolean) {
    this.running = val;
  }

  isRunning() {
    return !!this.running;
  }
}

export default State;
export { CellState };
