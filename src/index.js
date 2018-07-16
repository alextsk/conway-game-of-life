import {partial} from "./utils.js"
import {renderField, renderControls} from "./html-renderer.js"
import {cellClickHandler, resetHandler, widthHandler, heightHandler, speedHandler, playHandler, initField, initControls} from "./events.js"
import {modelInit} from "./model.js"



function main(fieldWidth, fieldHeight) {
  const gameContainer = document.querySelector("#game-field")
  const model = modelInit(30, 50, 700, gameContainer)
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
          minVal: 100,
          maxVal: 2000
        },
        width: {
          selector: "#width",
          auxSelector: "#width-number",
          title: "Width",
          handler: widthHandler,
          minVal: 10,
          maxVal: 200
        },
        height: {
          selector: "#height",
          auxSelector: "#height-number",
          title: "Height",
          handler: heightHandler,
          minVal: 10,
          maxVal: 200
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


