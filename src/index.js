import {partial} from "./utils.js"
import {generateField, createGrid, updateState, getCell, toggleCell} from "./logic.js"
import {renderField, renderControls} from "./html-renderer.js"


function classFactory (x, y) {
  return `js-cell`
}


let lastCall = 0;
const draw = (container, render, model) => {
  requestAnimationFrame( (delta) => {
    if (delta - lastCall > model.getSpeed()) {
      lastCall = delta
      if (model.running) {
        model.setGrid(updateState(model.getGrid()))
        container.innerHTML = render(classFactory, model.getGrid())
      }
    }
    draw(container, render, model)
  })
}

function modelInit (grid, speed) {
  return {
    getGrid: () => grid, 
    setGrid: newGrid => grid = newGrid,
    getSpeed: () => speed,
    setSpeed: newSpeed => speed = newSpeed,
    running: true,
  } 
}

function reportSpeed (value) {
  return (1000 / value).toFixed(2)  + " steps per second"
}

function main() {
  const fieldWidth = 50
  const fieldHeight = 50
  const grid = generateField(createGrid(fieldWidth, fieldHeight))
  const model = modelInit(grid, 700)
  const gameContainer = document.querySelector("#game-field")
  const controlsContainer = document.querySelector("#game-controls")
  const drawHtmlInContainer = partial(draw, gameContainer, renderField)
  
  controlsContainer.innerHTML = renderControls({minSpeed: 100, maxSpeed: 2000})
  const speed = controlsContainer.querySelector("#speed")
  const speedNumber = controlsContainer.querySelector("#speed-number")
  speedNumber.innerHTML = reportSpeed(model.getSpeed())
  const playBtn = controlsContainer.querySelector("#run")
  const resetBtn = controlsContainer.querySelector("#reset")
  playBtn.addEventListener('click', (e) => model.running = !model.running)

  speed.addEventListener('change', (e) => { 
    model.setSpeed(e.target.value)
    speedNumber.innerHTML =  reportSpeed(e.target.value) 
  })

  resetBtn.addEventListener('click', e => {
    model.setGrid(generateField(createGrid(fieldWidth, fieldHeight)))
  })

  document.addEventListener("click", e => {
    if (e.target.classList.contains('js-cell')) {
      const data = e.target.dataset
      model.setGrid(toggleCell(model.getGrid(), data.x, data.y))
      requestAnimationFrame(() => {
        gameContainer.innerHTML = renderField(classFactory, model.getGrid())
      })
    } 
  })

  drawHtmlInContainer(model)
}

main()


