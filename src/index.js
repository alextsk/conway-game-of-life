import  "./styles.css"
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
          title: "Pause"
        },
        speed: {
          selector: "#speed",
          auxSelector: "#speed-number",
          title: "Speed",
          handler: speedHandler,
          reporter: val => (1000 / val).toFixed(2)  + " renders/sec",
          minVal: 100,
          maxVal: 2000,
          initVal: model.getSpeed()
        },
        width: {
          selector: "#width",
          auxSelector: "#width-number",
          title: "Width",
          handler: widthHandler,
          reporter: val => val + " cells", 
          minVal: 10,
          maxVal: 200,
          initVal: model.getWidth()
        },
        height: {
          selector: "#height",
          auxSelector: "#height-number",
          title: "Height",
          handler: heightHandler,
          reporter: val => val + " cells",
          minVal: 10,
          maxVal: 200,
          initVal: model.getHeight()
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


