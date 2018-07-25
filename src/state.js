export { updateState, toggleCell } from './logic.js';

const createGrid = (x, y) => (new Array(y)).fill('').map(() => (new Array(x)).fill(0));

const generateField = grid => grid.map(row => row.map(cell => Math.round(Math.random())));


function modelInit(width, height, speed) {
  const observers = [];
  let prevGrid = [];
  let running = true;
  function broadcast(type, data) {
    observers.forEach(observer => observer.type == type && observer.handler(data));
  }

  function addObserver(type, handler) {
    observers.push({ type, handler });
  }

  const getWidth = () => width;
  const setWidth = (newWidth) => {
    width = +newWidth;
    const newrow = Array(+newWidth).fill(0);
    const newGrid = getGrid().map(row => newrow.map((el, i) => row[i] || el));
    setGrid(newGrid);
  };

  function diff_(old, newGrid) {
    const result = [];
    for (let i = 0; i < old.length; i++) {
      for (let j = 0; j < old[i].length; j++) {
        if (old[i][j] !== newGrid[i][j]) {
          result.push({ y: i, x: j });
        }
      }
    }
    return result;
  }

  function diff() {
    return diff_(prevGrid, grid);
  }

  const getHeight = () => height;
  const setHeight = (newHeight) => {
    height = +newHeight;
    const newGrid = Array(+newHeight).fill('');
    const res = newGrid.map((row, i) => getGrid()[i] || Array(width).fill(0));
    setGrid(res);
  };

  const getSpeed = () => speed;
  const setSpeed = newSpeed => speed = newSpeed;

  const getGrid = () => grid;
  const setGrid = (newGrid) => {
    prevGrid = grid;
    return grid = newGrid;
  };

  function setRunning(isRunning) {
    running = isRunning;
  }

  function isRunning() {
    return !!running;
  }

  const resetGrid = () => setGrid(generateField(createGrid(width, height)));
  var grid = resetGrid();

  return {
    getGrid,
    setGrid,
    resetGrid,
    getSpeed,
    setSpeed,
    getWidth,
    setWidth,
    getHeight,
    setHeight,
    addObserver,
    broadcast,
    diff,
    setRunning,
    isRunning,
  };
}

export { modelInit, generateField, createGrid };
