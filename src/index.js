import {generateField} from "./logic.js"
import {renderHtml} from "./html-renderer.js"

const draw = (container, render, grid) => {
  container.innerHtml = render(grid)
}



function main() {
  const g = generateField(createGrid(5,5))
  const gameContainer = document.querySelector("#game")
  const drawApplied = partial(draw, gameContainer, renderHtml)
  setTimeout( () => drawApplied(g), 1000)
  
}

