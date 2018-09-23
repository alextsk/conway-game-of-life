import { deepClone, partial } from './utils';

describe('partial', () => {
  it('partially applies a function once', () => {
    const add = (x, y) => x + y;
    const add2 = partial(add, 2);
    expect(add2(3)).toBe(5);
  });
});

describe('deepClone', () => {
  it('should clone the array, containing JSON data', () => {
    const arr = [1, 2, 3, 4];
    const arr2 = deepClone(arr);
    expect(arr).not.toBe(arr2);
    expect(arr[1]).toEqual(arr2[1]);
  });
  it('should not mutate original array', () => {
    const arr = [1, [6, 7], 3, 4];
    const arr2 = deepClone(arr);
    arr2[1][0] = 8;
    expect(arr[1][0]).toEqual(6);
    expect(arr2[1][0]).toEqual(8);
  });
});
