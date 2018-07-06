import {partial} from "./utils.js"
import {generateField, createGrid, updateState} from "./logic.js"
import {renderHtml} from "./html-renderer.js"

const draw = (container, render, grid) => {
  container.innerHTML = render(grid)
}


main()

function main() {
  let grid = generateField(createGrid(10,10))
  const gameContainer = document.querySelector("#game")
  const drawHtmlInContainer = partial(draw, gameContainer, renderHtml)
  drawHtmlInContainer(grid)
  setInterval( () => {
    const ngrid = updateState(grid)
    drawHtmlInContainer(ngrid)
    grid = ngrid
  }, 1000)
}


