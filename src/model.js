import {generateField, createGrid} from "./logic.js"

function modelInit (width, height, speed) {
  const observers = []
  function broadcast(type, data) {
    observers.forEach(observer => observer.type == type && observer.handler(data))
  }

  function addObserver(type, handler) {
    observers.push({type, handler})
  }
  const getGrid = () => grid
  const setGrid = newGrid => grid = newGrid
  
  const resetGrid = () => setGrid(generateField(createGrid(width, height)))
  let grid = resetGrid()
  return {
    getGrid,
    setGrid,
    resetGrid,
    getSpeed: () => speed,
    setSpeed: newSpeed => speed = newSpeed,
    getWidth: () => width,
    setWidth: newWidth => {
      width = +newWidth
      let newrow = Array(+newWidth).fill(0) 
      let newGrid  = getGrid().map(row => {
        return newrow.map((el, i) => row[i] || el)
      } )
      setGrid(newGrid)
    },
     getHeight: () => height,
     setHeight: newHeight => {
      height = +newHeight
      let newGrid = Array(+newHeight).fill('') 
      let res =  newGrid.map((row, i) => {
        return getGrid()[i] || Array(width).fill(0)
      })
      console.log('res', res)
      setGrid(res)
     },
    addObserver,
    broadcast,
    running: true,
  } 
}

export {modelInit}