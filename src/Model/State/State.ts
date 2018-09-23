import { deepClone } from '../../Utilities/utils';
import { CellState, Grid } from '../../Utilities/Types';
import Logic from '../Logic/Logic';
import IState from './IState';

class State implements IState{
  private prevGrids : Grid[] = [];
  private running : boolean = true;
  private grid : Grid = this.createGrid(this.width, this.height);
  public isStable = false;
  private logic: Logic;

  constructor(public width:number = 10, public height:number = 10) {
    this.logic = new Logic();
    this.resetGrid();
  }

  public getGrid() : Grid {
    return this.grid;
  }

  public toggleCell(x: number, y: number): void {
    this.updateHistory(this.logic.toggleCellState(this.grid, x, y));
  }

  public getNextState(): boolean {
    this.updateHistory(this.logic.updateGrid(this.grid));
    return this.isRepeatingState();
  }

  public resetGrid(): void {
    this.isStable = false;
    this.prevGrids = [];
    this.createGrid(this.width, this.height);
    this.setGrid(this.generateRandomGrid());
  }

  public setWidth (newWidth: number): void {
    this.width = newWidth;
    const newrow = Array(newWidth).fill(null);
    const newGrid = this.grid.map(row => newrow.map((el, i) => row[i] || el));
    this.setGrid(newGrid);
  }

  public setHeight(newHeight: number): void {
    this.height = newHeight;
    const newGrid = Array(newHeight).fill(null);
    const res = newGrid.map((row, i) =>
      this.grid[i] || Array(this.width).fill(CellState.Dead));
    this.setGrid(res);
  }
  private generateRandomGrid(): Grid {
    return this.grid.map(row => row.map(() => this.makeRandomCell()));
  }
  
  private makeRandomCell(): CellState {
    return Math.random() > .5 ? CellState.Alive : CellState.Dead;
  }

  private createGrid(x: number = this.width, y: number = this.height) : Grid {
    return (new Array(y)).fill(null).map(() => (new Array(x)).fill(CellState.Dead));// tslint:disable-line
  } 

  private setGrid(newGrid: Grid): void {
    this.grid = deepClone(newGrid);
  }

  private updateHistory(newGrid: Grid): void {
    this.prevGrids.push(deepClone(this.grid));
    this.setGrid(newGrid);
  }

  private isRepeatingState(): boolean {
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

  private static diff(old, newGrid) : {x: number, y: number}[] {
    const result = [];
    old.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell !== newGrid[i][j]) {
          result.push({ y: i, x: j });
        }
      });
    });
    return result;
  }
}

export default State;
