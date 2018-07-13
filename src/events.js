import {partial} from "./utils.js"
import {toggleCell, updateState} from "./logic.js"


let lastCall = 0;
const draw = (model) => {
  requestAnimationFrame( (delta) => {
    if (delta - lastCall > model.getSpeed()) {
      lastCall = delta
      if (model.running) {
        model.setGrid(updateState(model.getGrid()))
        model.broadcast("redraw")
      }
    }
    draw(model)
  })
}

function cellClickHandler(model) {
  return function(e) {
    if (e.target.classList.contains('js-cell')) {
      const data = e.target.dataset
      model.setGrid(toggleCell(model.getGrid(), data.x, data.y))
      requestAnimationFrame(() => {
        model.broadcast("redraw")
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
    model.broadcast("speed", e.target.value);
  }
}

function playHandler(model) {
  return function (e) {
    model.running = !model.running
  }
}

function initControls({model, container, components}) {
  model.broadcast("controls", components)

  const speed = container.querySelector(components.speed.selector)
  const speedNumber = container.querySelector(components.speed.auxSelector)
  model.addObserver('speed', (value) => speedNumber.innerHTML = reportSpeed(value))
  model.broadcast('speed', speed.value )
  speed.addEventListener('change', components.speed.handler(model))

  const playBtn = container.querySelector(components.play.selector)
  playBtn.addEventListener('click', components.play.handler(model))
  
  const resetBtn = container.querySelector(components.reset.selector)
  resetBtn.addEventListener('click', components.reset.handler(model))
}


function initField({model, container, handler}) {
    model.broadcast("redraw") 
    document.addEventListener("click", handler(model))
    draw(model)
}

function reportSpeed (value) {
  return (1000 / value).toFixed(2)  + "/sec"
}

export {cellClickHandler, resetHandler, speedHandler, playHandler, initField, initControls}