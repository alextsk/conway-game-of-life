import { partial, deepClone } from '../../Utilities/utils';
import { CellState, Grid } from '../../Utilities/Types';
import ILogic from './ILogic';

class Logic implements ILogic {

  public toggleCellState(grid: Grid, x: number, y: number): Grid {
    const revertedState = this.getCellState(grid, x, y) === CellState.Alive ?
      CellState.Dead :
      CellState.Alive;
    return this.changeCellState(revertedState, grid, x, y);
  }

  public updateGrid(grid: Grid): Grid {
    return grid
      .map((row, y) => row.map((el, x) => {
        const neigboursCount = this.getAliveNeighbours(grid, x + 1, y + 1);
        const isAlive = this.getCellState(grid, x + 1, y + 1) === CellState.Alive;
        if (isAlive) {
          return (neigboursCount > 3) || (neigboursCount < 2) ? CellState.Dead : CellState.Alive;
        }
        return (neigboursCount === 3) ? CellState.Alive : CellState.Dead;
      }));
  }

  private getCellState(grid: Grid, x: number, y: number): CellState {
    const cellExists = !(grid[y - 1] === undefined || grid[y - 1][x - 1] === undefined);
    return cellExists ? grid[y - 1][x - 1] : CellState.Dead;
  }

  private getAliveNeighbours(state: Grid, x:number, y:number): number {
    const cell = partial(this.getCellState, state);
    return cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1)
      + cell(x - 1, y) + cell(x + 1, y)
      + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);
  }

  private changeCellState(value:CellState, grid: Grid, x:number, y:number): Grid {
    const newGrid = deepClone(grid);
    newGrid[y - 1][x - 1] = value;
    return newGrid;
  }
}

export default Logic;
