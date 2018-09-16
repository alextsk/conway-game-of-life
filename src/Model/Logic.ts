import { partial, deepClone } from '../Utilities/utils';

class Logic {
  gameUpdate(state) {
    return deepClone(state);
  }

  getCellState(state, x, y) {
    if (state[y - 1] === undefined || state[y - 1][x - 1] === undefined) return 0;
    return +state[y - 1][x - 1];
  }

  getAliveNeighbours(state, x, y) {
    const cell = partial(this.getCellState, state);
    return cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1)
      + cell(x - 1, y) + cell(x + 1, y)
      + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);
  }

  changeCellState(value, grid, x, y) {
    const newGrid = deepClone(grid);
    newGrid[y - 1][x - 1] = value;
    return newGrid;
  }

  reviveCell(grid, x, y) {
    return this.changeCellState(1, grid, x, y);
  }

  killCell(grid, x, y) {
    return this.changeCellState(0, grid, x, y);
  }

  toggleCell(grid, x, y) {
    return this.getCellState(grid, x, y) ? this.killCell(grid, x, y) : this.reviveCell(grid, x, y);
  }

  updateState(grid) {
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
