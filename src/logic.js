import { partial, deepClone } from './utils';

const gameUpdate = state => deepClone(state);

const getCell = (state, x, y) => {
  if (state[y - 1] === undefined || state[y - 1][x - 1] === undefined) return 0;
  return +state[y - 1][x - 1];
};

const getAliveNeighbours = (state, x, y) => {
  const cell = partial(getCell, state);
  return cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1)
         + cell(x - 1, y) + cell(x + 1, y)
         + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);
};

const changeCellState = (value, grid, x, y) => {
  const newGrid = deepClone(grid);
  newGrid[y - 1][x - 1] = value;
  return newGrid;
};

const reviveCell = (grid, x, y) => changeCellState(1, grid, x, y);

const killCell = (grid, x, y) => changeCellState(0, grid, x, y);

const toggleCell = (grid, x, y) => (
  getCell(grid, x, y) ? killCell(grid, x, y) : reviveCell(grid, x, y)
);

const updateState = grid => grid
  .map((row, y) => row.map((el, x) => {
    const neigboursCount = getAliveNeighbours(grid, x + 1, y + 1);
    const isAlive = getCell(grid, x + 1, y + 1) === 1;
    if (isAlive) {
      return (neigboursCount > 3) || (neigboursCount < 2) ? 0 : 1;
    }
    return (neigboursCount === 3) ? 1 : 0;
  }));


export {
  partial,
  gameUpdate,
  getCell,
  getAliveNeighbours,
  reviveCell,
  killCell,
  updateState,
  toggleCell,
};
