import State from './State';

describe('generateField', () => {
  it('should not mutate an existing grid', () => {
    const currentState = [[0, 0, 0],
                          [1, 1, 1],
                          [0, 0, 0]];
    const newState = new State(3, 3, 3);
    newState.setGrid(currentState); 
    expect(currentState).toEqual([[0, 0, 0],
                                  [1, 1, 1],
                                  [0, 0, 0]]);
    expect(newState.getGrid()).not.toBe(currentState);
  });

  it('should create a grid of the same dimensions as given', () => {
    const currentState = (new State(9, 5, 3)).getGrid();
    const newState = (new State(3, 3, 3)).setGrid(currentState);
    expect(newState.length).toBe(currentState.length);
    expect(newState[0].length).toBe(currentState[0].length);
  });

  describe("should randomly populate a grid with 0's and 1's", () => {
    it("should not put anything but 1's or 0's ", () => {
      const newState = (new State(9, 9, 3)).getGrid();
      const noOtherValues = newState
      .reduce(
        (acc, row) => {
          return row.reduce(
            (acc, cell) => (
                acc && (cell === 1 || cell === 0)
            ),
            true);
        },
        true);
      expect(noOtherValues).toBe(true);
    });

    it("it should put at least one '1' in a reasonably sized field",  () => {
      const newState = (new State(9, 9, 3)).getGrid(); 
      const anyOnes = newState.some(row => row.some(cell => cell === 1));
      expect(anyOnes).toBe(true);
    });
  });
  
});

xdescribe('size', () => {
  it('should create a grid of given size', () => {
    const grid = (new State(5, 7, 3)).getGrid(); 
    expect(grid.length).toBe(7);
    expect(grid[6].length).toBe(5);
  });

  it("should populate created grid with 0's", () => {
    const grid = (new State(5, 7, 3)).createGrid(); 
    expect(grid[0][0]).toBe(0);
    expect(grid[6][4]).toBe(0);
  });
});
