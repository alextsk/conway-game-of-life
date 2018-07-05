import {init} from "./index.js"
import {gameUpdate, getAliveNeighbours, getCell, createGrid, makeAlive} from "./index.js"

describe("test", () => {
  it("executes imported function", () => {
    expect(init()).toBe(5)
  })
})

describe("game logic", () => {
  it('takes an array and outputs another array of the same size', () =>{
    const currentState = Array(5).fill(Array(5).fill(1))
    expect(gameUpdate(currentState)).not.toBe(currentState)
    expect(gameUpdate(currentState)[3][3]).toBe(1)
  })
})

describe("getCell", () => {
  it('should return cell value at given coordinates starting from 1', () => {
    const currentState = [[0,1,0],
                          [0,0,0],
                          [0,0,0]]
    expect(getCell(currentState, 2,1)).toBe(1)
  })
  it("should return 0 if requested coordinates are undefined", () => {
    const currentState = [[0,1,0],
                          [1,0,0],
                          [0,0,0]]
    expect(getCell(currentState, 4,4)).toBe(0)
  })
})

describe("createGrid", () => {
  it("should create a grid of given size", () => {
    const grid = createGrid(5,7)
    expect(grid.length).toBe(7)
    expect(grid[6].length).toBe(5)
  })

  it("should populate created grid with 0's", () => {
    const grid = createGrid(5,7)
    console.log(grid)
    expect( getCell(grid, 1, 1) ).toBe(0)
    expect( getCell(grid, 5, 7) ).toBe(0)
  })
})

describe("makeAlive", () => {
  it("should return new grid", () => {
    const grid1 = createGrid(5,7)
    const grid2 = makeAlive(grid1, 5, 4)
    expect(grid1).not.toEqual(grid2)
  })
  it("should make cell alive at given grid and coordinates", () => {
    const grid = createGrid(5,7)
    const newGrid = makeAlive(grid, 4, 4)
    expect(getCell(newGrid, 4, 4)).toBe(1)
  })
})

describe("getAliveNeighbours", () => {
  it('returns right amount of living neighbours', () => {
    const livingTwo = [[0,1,0],
                       [1,0,0],
                       [0,0,0]]
    expect(getAliveNeighbours(livingTwo, 2,2)).toBe(2)

    const livingEight = [[1,1,1],
                         [1,0,1],
                         [1,1,1]]
    expect(getAliveNeighbours(livingEight, 2,2)).toBe(8) 

    const livingZero = [[0,0,0],
                        [0,1,0],
                        [0,0,0]] 
    expect(getAliveNeighbours(livingZero, 2,2)).toBe(0)                                      
  })

  it('covers the corner cells',() => {
    const currentState = [[1,1,0],
                          [0,0,0],
                          [0,0,0]]
    expect(getAliveNeighbours(currentState, 3,3)).toBe(0)
    expect(getAliveNeighbours(currentState, 1,1)).toBe(1)
    expect(getAliveNeighbours(currentState, 1,3)).toBe(0)
    expect(getAliveNeighbours(currentState, 3,1)).toBe(1)
  })
})

