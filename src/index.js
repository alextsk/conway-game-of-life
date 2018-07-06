import {partial} from "./utils.js"
import {generateField, createGrid, updateState} from "./logic.js"
import {renderHtml} from "./html-renderer.js"

const draw = (container, render, grid) => {
  container.innerHTML = render(grid)
}



function main() {
  let grid = generateField(createGrid(10,10))
  /*let grid = [[0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,1,1,1,0],
              [0,1,1,1,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0]
              ]*/
  const gameContainer = document.querySelector("#game")

  const drawHtmlInContainer = partial(draw, gameContainer, renderHtml)
  drawHtmlInContainer(grid)
    //setTimeout( () => drawHtmlInContainer(updateState(grid)), 2000)

  
  setInterval( () => {
    const ngrid = updateState(grid)
    drawHtmlInContainer(ngrid)
    grid = ngrid
  }, 1000)
}
main()

