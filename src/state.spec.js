import {createGrid, generateField} from './state.js'

describe("generateField",() => {
  it("should not mutate an existing grid", () => {
    const currentState = [[0,0,0],
                          [1,1,1],
                          [0,0,0]]
    const newState = generateField(currentState)
    expect(currentState).toEqual([[0,0,0],
                                  [1,1,1],
                                  [0,0,0]])
    expect(newState).not.toBe(currentState)
  })

  it("should create a grid of the same dimensions as given", () => {
    const currentState = createGrid(9, 5)
    const newState = generateField(currentState)
    expect(newState.length).toBe(currentState.length)
    expect(newState[0].length).toBe(currentState[0].length)
  })

  describe("should randomly populate a grid with 0's and 1's", () => {
    it("should not put anything but 1's or 0's ", () => {
      const currentState = createGrid(9, 9)
      const newState = generateField(currentState)
      const noOtherValues = newState
      .reduce((acc, row) => 
        row.reduce( (acc, cell) =>  
          acc && (cell === 1 || cell === 0), 
          true), 
        true )
      expect(noOtherValues).toBe(true)
    })

    it("it should put at least one '1' in a reasonably sized field",  () => {
      const currentState = createGrid(9, 9)
      const newState = generateField(currentState)
      const anyOnes = newState.some(row => row.some(cell => cell === 1))
      expect(anyOnes).toBe(true)
    })
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
    expect( grid[0][0] ).toBe(0)
    expect( grid[6][4] ).toBe(0)
  })
})