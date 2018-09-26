import Logic from './Logic';

const logic = new Logic();

describe('updateGrid', () => {
  it('takes an array and outputs new array', () => {

    const currentGrid =
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];
    expect(logic.updateGrid(currentGrid)).not.toBe(currentGrid);
  });

  it('makes a simple oscillator', () => {

    const currentGrid =
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];
    const nextGrid =
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
    expect(logic.updateGrid(currentGrid)).toEqual(nextGrid);
    expect(logic.updateGrid(nextGrid)).toEqual(currentGrid);
  });
});

describe('toggleCellState', () => {
  it('reverts the state of a given cell in a given grid', () => {
    const currentGrid =
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];
    const nextGrid =
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];
    expect(logic.toggleCellState(currentGrid, 3, 3)).toEqual(nextGrid);
    expect(logic.toggleCellState(nextGrid, 3, 3)).toEqual(currentGrid);
  });
});
