const init = () => 5
const deepClone = array => JSON.parse(JSON.stringify(array))
const gameUpdate = (state) => {
  return deepClone(state)
}

const getCell = (state, x, y) => {
  if (state[y-1] == undefined || state[y-1][x-1] == undefined) return 0
  return +state[y-1][x-1]
}

const getAliveNeighbours = (state, x, y) => {
  return getCell(state, x-1, y-1) + getCell(state, x, y-1) + getCell(state, x+1, y-1) +
         getCell(state, x-1, y)  +                    getCell(state, x+1, y) + 
         getCell(state, x-1, y+1) + getCell(state, x, y+1) + getCell(state, x+1, y+1) 
}

const createGrid = (x, y) => (new Array(y)).fill("").map(() => (new Array(x)).fill(0))

const changeCellState = (value, grid, x, y) => {
  const newGrid  = deepClone(grid)
  newGrid[y-1][x-1] = value
  return newGrid
}
const reviveCell = (grid, x, y) => changeCellState(1, grid, x, y)
const killCell = (grid, x, y) => changeCellState(0, grid, x, y)
const updateState = (grid) => {

  const newGrid = grid
  .map( (row, y) => 
    row.map( (el, x) => {
      const neigboursCount = getAliveNeighbours(grid, x+1, y+1)
      if ( (neigboursCount > 3) || (neigboursCount < 2) ) return 0 
      return 1
    })
  ) 
  return newGrid
} 
export {
  init, 
  gameUpdate, 
  getCell, 
  getAliveNeighbours, 
  createGrid,
  reviveCell,
  killCell,
  updateState
 }