import State from './State';

describe('resetGrid', () => {

  it('should create a grid of the same dimensions as given', () => {
    const newState = new State(3, 3);
    const dimensions = { width: newState.getGrid().length, height: newState.getGrid()[0].length };
    newState.resetGrid();
    expect(newState.getGrid().length).toBe(dimensions.width);
    expect(newState.getGrid()[0].length).toBe(dimensions.height);
  });

  describe("should randomly populate a grid with 0's and 1's", () => {
    it("should not put anything but 1's or 0's ", () => {
      const newState = (new State(9, 9)).getGrid();
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
      const newState = (new State(9, 9)).getGrid();
      const anyOnes = newState.some(row => row.some(cell => cell === 1));
      expect(anyOnes).toBe(true);
    });
  });
});

describe('size', () => {
  it('should create a grid of given size', () => {
    const grid = (new State(5, 7)).getGrid();
    expect(grid.length).toBe(7);
    expect(grid[6].length).toBe(5);
  });
});
