import { partial, deepClone } from '../../Utilities/utils';
import { CellState, Grid } from '../../Utilities/Types';
import ILogic from './ILogic';

class Logic implements ILogic {
  private gameUpdate(state: Grid): Grid {
    return deepClone(state);
  }

  private getCellState(state: Grid, x:number, y:number): CellState {
    if (state[y - 1] === undefined || state[y - 1][x - 1] === undefined) return 0;
    return +state[y - 1][x - 1];
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

  private reviveCell(grid: Grid, x: number, y: number): Grid {
    return this.changeCellState(1, grid, x, y);
  }

  private killCell(grid: Grid, x: number, y: number): Grid {
    return this.changeCellState(0, grid, x, y);
  }

  toggleCell(grid: Grid, x: number, y: number): Grid {
    return this.getCellState(grid, x, y) ? this.killCell(grid, x, y) : this.reviveCell(grid, x, y);
  }

  updateState(grid: Grid): Grid {
    return grid
      .map((row, y) => row.map((el, x) => {
        const neigboursCount = this.getAliveNeighbours(grid, x + 1, y + 1);
        const isAlive = this.getCellState(grid, x + 1, y + 1) === 1;
        if (isAlive) {
          return (neigboursCount > 3) || (neigboursCount < 2) ? 0 : 1;
        }
        return (neigboursCount === 3) ? 1 : 0;
      }));
  }
}

export default Logic;
