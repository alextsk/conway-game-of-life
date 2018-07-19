import {toggleCell, updateState} from "./logic.js"

function animate(fn, delay, ...args) {
  let lastCall = 0
  return (function animatep(fn, delay, ...args) {
    requestAnimationFrame( (delta) => {
      if (delta - lastCall > delay()){
        lastCall = delta
        fn(...args)
      }
      animatep(fn, delay, ...args)
    })
  })(fn, delay, ...args)
}

function draw(model) {
  if (model.running) {
    model.setGrid(updateState(model.getGrid()))
    model.broadcast("redraw")
  }
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
    model.resetGrid()
  }
}

function speedHandler(model) {
  return function (e) {
    model.setSpeed(e.target.value)
    model.broadcast("Speed", e.target.value)
  }
}

function widthHandler(model) {
  return function (e) {
    model.setWidth(e.target.value)
    model.broadcast("Width", e.target.value)
    model.broadcast("redraw")
  }
}

function heightHandler(model) {
  return function (e) {
    model.setHeight(e.target.value)
    model.broadcast("Height", e.target.value)
    model.broadcast("redraw")
  }
}

function playHandler(model) {
  return function (e) {
    model.running = !model.running
    e.target.innerHTML = model.running ? "Pause" : "Run"
  }
}

function setSliderEvents(model, container, opts) {
  const sel = container.querySelector(opts.selector)
  sel.value = opts.initVal
  const auxSel = container.querySelector(opts.auxSelector)
  model.addObserver(opts.title, (value) => auxSel.innerHTML = opts.reporter(value))
  model.broadcast(opts.title, sel.value)
  sel.addEventListener('change', opts.handler(model))
}

function initControls({model, container, components}) {
  model.broadcast("controls", components)
  
  setSliderEvents(model, container, components.speed)
  setSliderEvents(model, container, components.width)
  setSliderEvents(model, container, components.height)

  const playBtn = container.querySelector(components.play.selector)
  playBtn.addEventListener('click', components.play.handler(model))
  
  const resetBtn = container.querySelector(components.reset.selector)
  resetBtn.addEventListener('click', components.reset.handler(model))
}


function initField({model, container, handler}) {
    model.broadcast("redraw") 
    document.addEventListener("click", handler(model))
    animate(draw, model.getSpeed, model)
}

export {
  cellClickHandler, 
  resetHandler, 
  speedHandler, 
  widthHandler,
  heightHandler, 
  playHandler, 
  initField, 
  initControls
}