import Logic from './Logic';
import State from '../State/State';

const model = new State(3, 3);
const logic = new Logic();

describe('gameUpdate', () => {
  it('takes an array and outputs another array of the same size', () => {
    const rows = new Array(5);
    rows.fill(1);
    const currentState = new Array(5);
    currentState.fill(rows);
    expect(logic.gameUpdate(currentState)).not.toBe(currentState);
    expect(logic.gameUpdate(currentState)[3][3]).toBe(1);
  });
});

describe('getCell', () => {
  it('should return cell value at given coordinates starting from 1', () => {
    const currentState = [[0, 1, 0],
                          [0, 0, 0],
                          [0, 0, 0]];
    expect(logic.getCellState(currentState, 2, 1)).toBe(1);
  });
  it('should return 0 if requested coordinates are undefined', () => {
    const currentState = [[0, 1, 0],
                          [1, 0, 0],
                          [0, 0, 0]];
    expect(logic.getCellState(currentState, 4, 4)).toBe(0);
  });
});

describe('reviveCell', () => {
  it('should return new grid', () => {
    const grid1 = model.createGrid(5, 7);
    const grid2 = logic.reviveCell(grid1, 5, 4);
    expect(grid1).not.toEqual(grid2);
  });
  it('should make cell alive at given grid and coordinates', () => {
    const grid = model.createGrid(5, 7);
    const newGrid = logic.reviveCell(grid, 4, 4);
    expect(logic.getCellState(newGrid, 4, 4)).toBe(1);
  });
});

describe('getAliveNeighbours', () => {
  it('returns right amount of living neighbours', () => {
    const livingTwo = [[0, 1, 0],
                       [1, 0, 0],
                       [0, 0, 0]];
    expect(logic.getAliveNeighbours(livingTwo, 2, 2)).toBe(2);

    const livingEight = [[1, 1, 1],
                         [1, 0, 1],
                         [1, 1, 1]];
    expect(logic.getAliveNeighbours(livingEight, 2, 2)).toBe(8); 
    const currentState = [[1, 1, 0],
                          [0, 0, 0],
                          [0, 0, 0]];
    expect(logic.getAliveNeighbours(currentState, 2, 2)).toBe(2); 
    const livingZero = [[0, 0, 0],
                        [0, 1, 0],
                        [0, 0, 0]]; 
    expect(logic.getAliveNeighbours(livingZero, 2, 2)).toBe(0); 
    const cornerCase = [[0, 0, 1],
                        [0, 1, 0],
                        [0, 0, 0]]; 
    expect(logic.getAliveNeighbours(cornerCase, 1, 3))
      .toBe(1);
  });

  it('covers the corner cells', () => {
    const currentState = [[1, 1, 0],
                          [0, 0, 0],
                          [0, 0, 0]];
    expect(logic.getAliveNeighbours(currentState, 3, 3)).toBe(0);
    expect(logic.getAliveNeighbours(currentState, 1, 1)).toBe(1);
    expect(logic.getAliveNeighbours(currentState, 1, 3)).toBe(0);
    expect(logic.getAliveNeighbours(currentState, 3, 1)).toBe(1);
  });
});

describe('updateState', () => {
  it('should return a new grid of the same size', () => {
    const grid = model.createGrid(5, 7);
    const newGrid = logic.updateState(grid);
    expect(grid).not.toBe(newGrid);
    expect(grid[0]).not.toBe(newGrid[0]);
  });

  it('should pass a dead cell with 2 neighbours', () => {
    const currentState = [[1, 1, 0],
                          [0, 0, 0],
                          [0, 0, 0]];
    const newState = logic.updateState(currentState);
    expect(logic.getCellState(newState, 2, 2)).toBe(0);                     
  });

  it('should revive a cell with 3 neighbours', () => {
    const currentState = [[1, 1, 0],
                          [1, 0, 0],
                          [0, 0, 0]];
    const newState = logic.updateState(currentState);
    expect(logic.getCellState(newState, 2, 2)).toBe(1);                     
  });

  it('should kill a cell with more than 3 neighbours', () => {
    const currentState = [[1, 1, 0],
                          [1, 0, 1],
                          [0, 0, 0]];
    const newState = logic.updateState(currentState);
    expect(logic.getCellState(newState, 2, 2)).toBe(0); 
    const currentState2 = [[1, 1, 1],
                           [1, 1, 1],
                           [1, 0, 0]];
    const newState2 = logic.updateState(currentState2);
    expect(logic.getCellState(newState2, 2, 1)).toBe(0);                     
    expect(logic.getCellState(newState2, 2, 3)).toBe(0);                     
  });
  
  it('should work with blinker', () => {
    const blinker = 
      [[0, 0, 0, 0, 0],
              [0, 0, 1, 0, 0],
              [0, 0, 1, 0, 0],
              [0, 0, 1, 0, 0],
              [0, 0, 0, 0, 0], 
      ];
    const blinkerSecond =  
      [[0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 1, 1, 1, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0], 
      ];
    const newState = logic.updateState(blinker);
    expect(newState).toEqual(blinkerSecond);   
  });

  it('should kill a cell with less than 2 neighbours', () => {
    const currentState = [[1, 0, 0],
                          [0, 0, 0],
                          [0, 0, 0]];
    const newState = logic.updateState(currentState);
    expect(logic.getCellState(newState, 1, 1)).toBe(0);                     
  });

  it('should consider corner cells', () => {
    const currentState = [[0, 1, 0],
                          [1, 1, 1],
                          [0, 1, 0]];
    const newState = logic.updateState(currentState);
    expect(logic.getCellState(newState, 1, 1)).toBe(1);                     
    expect(logic.getCellState(newState, 1, 3)).toBe(1);                     
    expect(logic.getCellState(newState, 3, 1)).toBe(1);                     
    expect(logic.getCellState(newState, 3, 3)).toBe(1);                     
  });
});
