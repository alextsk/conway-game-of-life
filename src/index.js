import {partial} from "./utils.js"
import {generateField, createGrid, updateState, getCell, toggleCell} from "./logic.js"
import {renderHtml} from "./html-renderer.js"


function classFactory (x, y) {
  return `js-cell`
}


let lastCall = 0;
const draw = (container, render, model) => {
  requestAnimationFrame( (delta) => {
    if (delta - lastCall > 700) {
      lastCall = delta
      model.setGrid(updateState(model.getGrid()))
      container.innerHTML = render(handlersFactory, model.getGrid())
    }
    draw(container, render, model)
  })
}

function modelInit (grid) {
  return {getGrid: () => grid, setGrid: newGrid => grid = newGrid} 
}

function main() {
  let grid = generateField(createGrid(50, 50))
  const model = modelInit(grid)
  const gameContainer = document.querySelector("#game")
  const drawHtmlInContainer = partial(draw, gameContainer, renderHtml)
  document.addEventListener("click", e => {
    if (e.target.classList.contains('js-cell')) {
      const data = e.target.dataset
      model.setGrid(toggleCell(model.getGrid(), data.x, data.y))
      requestAnimationFrame(() => {
        gameContainer.innerHTML = renderHtml(classFactory, model.getGrid())
      })
    } 
  })

  drawHtmlInContainer(model)
}

main()


