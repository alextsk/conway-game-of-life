export { updateState, toggleCell } from './logic';

const createGrid = (x, y) => (new Array(y)).fill('').map(() => (new Array(x)).fill(0));

const generateField = grid => grid.map(row => row.map(() => Math.round(Math.random())));

function modelInit(width, height, speed) {
  const observers = [];
  let xwidth = width;
  let xheight = height;
  let prevGrid = [];
  let running = true;
  let grid = [];
  let xspeed = speed;
  function broadcast(type, data) {
    observers.forEach(observer => observer.type === type && observer.handler(data));
  }

  function addObserver(type, handler) {
    observers.push({ type, handler });
  }

  function getGrid() {
    return grid;
  }

  function setGrid(newGrid) {
    prevGrid = grid;
    grid = newGrid;
    return grid;
  }

  const resetGrid = () => setGrid(generateField(createGrid(xwidth, xheight)));
  grid = resetGrid();

  const getWidth = () => xwidth;
  const setWidth = (newWidth) => {
    xwidth = +newWidth;
    const newrow = Array(+newWidth).fill(0);
    const newGrid = getGrid().map(row => newrow.map((el, i) => row[i] || el));
    setGrid(newGrid);
  };

  function diffP(old, newGrid) {
    const result = [];
    for (let i = 0; i < old.length; i += 1) {
      for (let j = 0; j < old[i].length; j += 1) {
        if (old[i][j] !== newGrid[i][j]) {
          result.push({ y: i, x: j });
        }
      }
    }
    return result;
  }

  function diff() {
    return diffP(prevGrid, grid);
  }

  const getHeight = () => xheight;
  const setHeight = (newHeight) => {
    xheight = +newHeight;
    const newGrid = Array(+newHeight).fill('');
    const res = newGrid.map((row, i) => getGrid()[i] || Array(width).fill(0));
    setGrid(res);
  };

  function getSpeed() {
    return xspeed;
  }

  function setSpeed(newSpeed) {
    xspeed = newSpeed;
  }

  function setRunning(val) {
    running = val;
  }

  function isRunning() {
    return !!running;
  }

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
