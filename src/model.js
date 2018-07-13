function modelInit (grid, speed) {
  const observers = []
  
  function broadcast(type, data) {
    observers.forEach(observer => observer.type == type && observer.handler(data))
  }

  function addObserver(type, handler) {
    observers.push({type, handler})
  }

  return {
    getGrid: () => grid, 
    setGrid: newGrid => grid = newGrid,
    getSpeed: () => speed,
    setSpeed: newSpeed => speed = newSpeed,
    addObserver: addObserver,
    broadcast: broadcast,
    width: grid.length,
    height: grid[0].length,
    running: true,
  } 
}

export {modelInit}