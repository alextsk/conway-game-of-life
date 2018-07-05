const init = () => 5

const gameUpdate = (state) => {
  return state.slice()
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
const makeAlive = (grid, x, y) => {
  const newGrid  = (grid.slice()).map(row => row.slice())
  newGrid[y-1][x-1] = 1
  return newGrid
}

export {
  init, 
  gameUpdate, 
  getCell, 
  getAliveNeighbours, 
  createGrid,
  makeAlive
 }