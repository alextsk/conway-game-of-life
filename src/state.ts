export { updateState, toggleCell } from './logic';

import Observer from './observer.ts';
enum CellState {Dead, ALive} 
type Grid = CellState[][];




class State extends Observer{

  private prevGrid : Grid = [];
  private running : boolean = true;
  private grid : Grid = this.resetGrid();

  constructor(public width:number, public height:number, public speed:number) {
    super()
    this.getSpeed = this.getSpeed.bind(this)
    this.setSpeed = this.setSpeed.bind(this)
  }

  generateField(grid) : Grid {
    return grid.map(row => row.map(() => this.makeRandomCell()));
  }
  
  makeRandomCell(){
    return Math.random() > .5 ? CellState.ALive : CellState.Dead
  }

  createGrid(x, y) : Grid {
    return (new Array(y)).fill('').map(() => (new Array(x)).fill(CellState.Dead));
  } 

  getGrid() : Grid {
    return this.grid;
  }

  setGrid(newGrid) {
    this.prevGrid = this.grid || [];
    this.grid = newGrid;
    return this.grid;
  }

  resetGrid() : Grid {
    return this.setGrid(this.generateField(this.createGrid(this.width, this.height)));
  } 
  
  getWidth () : number {
    return this.width;
  } 

  setWidth (newWidth: number) : void {
    this.width = +newWidth;
    const newrow = Array(+newWidth).fill(0);
    const newGrid = this.getGrid().map(row => newrow.map((el, i) => row[i] || el));
    this.setGrid(newGrid);
  };

  diffP(old, newGrid) {
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

  diff() {
    return this.diffP(this.prevGrid, this.grid);
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

  getSpeed() {
    return this.speed;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  setRunning(val: boolean) {
    this.running = val;
  }

  isRunning() {
    return !!this.running;
  }
}

export { State };
