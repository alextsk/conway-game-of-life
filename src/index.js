import {partial} from "./utils.js"
import {generateField, createGrid} from "./logic.js"
import {renderField, renderControls} from "./html-renderer.js"
import {cellClickHandler, resetHandler, speedHandler, playHandler, initField, initControls} from "./events.js"
import {modelInit} from "./model.js"



function main(fieldWidth, fieldHeight) {
  const grid = generateField(createGrid(fieldWidth, fieldHeight))
  const model = modelInit(grid, 700)
  const gameContainer = document.querySelector("#game-field")
  const controlsContainer = document.querySelector("#game-controls")
  model.addObserver('redraw', (data) => {
    gameContainer.innerHTML = renderField(model.getGrid(), () => "js-cell")
  })
  model.addObserver('controls', (components) => {
    controlsContainer.innerHTML = renderControls(components)
  })
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
          auxSelector: "#speed-number",
          title: "Speed",
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


