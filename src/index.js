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
    width: grid.length,
    height: grid[0].length,
    running: true,
  } 
}

function reportSpeed (value) {
  return (1000 / value).toFixed(2)  + " steps per second"
}


function initControls({model, container, components}) {
  container.innerHTML = renderControls(components)

  const speed = container.querySelector(components.speed.selector)
  //const speedNumber = container.querySelector("#speed-number")
  //speedNumber.innerHTML = reportSpeed(model.getSpeed())
  speed.addEventListener('change', speedHandler(model))

  const playBtn = container.querySelector(components.play.selector)
  playBtn.addEventListener('click', playHandler(model))
  
  const resetBtn = container.querySelector(components.reset.selector)
  resetBtn.addEventListener('click', components.reset.handler(model))
}

function cellClickHandler(model, container) {
  return function(e) {
    if (e.target.classList.contains('js-cell')) {
      const data = e.target.dataset
      model.setGrid(toggleCell(model.getGrid(), data.x, data.y))
      requestAnimationFrame(() => {
        container.innerHTML = renderField(classFactory, model.getGrid())
      })
    } 
  }
}

function resetHandler(model) {
  return function (e) {
    model.setGrid(generateField(createGrid(model.width, model.height)))
  }
}

function speedHandler(model) {
  return function (e) {
    model.setSpeed(e.target.value)
   // speedNumber.innerHTML = reportSpeed(e.target.value) 
  }
}

function playHandler(model) {
  return function (e) {
    model.running = !model.running
  }
}

function initField({model, container, handler}) {
    document.addEventListener("click", handler(model, container))
    const drawHtmlInContainer = partial(draw, container, renderField)
    drawHtmlInContainer(model)
}

function main(fieldWidth, fieldHeight) {
  const grid = generateField(createGrid(fieldWidth, fieldHeight))
  const model = modelInit(grid, 700)
  const gameContainer = document.querySelector("#game-field")
  const controlsContainer = document.querySelector("#game-controls")

  initControls(
    {
      model: model,
      container: controlsContainer,
      components: {
        reset: {
          selector: "#reset",
          handler: resetHandler,
          title: "Reset"
        },
        play: {
          selector: "#run",
          handler: playHandler,
          title: "Run"
        },
        speed: {
          selector: "#speed",
          handler: speedHandler,
          minSpeed: 100,
          maxSpeed: 2000
        }
      }
    }
  )

  initField({
    model: model,
    container: gameContainer,
    handler: cellClickHandler
  })
}

main(50, 50)


