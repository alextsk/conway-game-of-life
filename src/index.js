import  "./styles.css"
import {partial} from "./utils.js"
import {renderField, renderControls} from "./html-renderer.js"
import {cellClickHandler, resetHandler, widthHandler, heightHandler, speedHandler, playHandler, initField, initControls} from "./events.js"
import {modelInit, updateState, toggleCell} from "./state.js"



function main(fieldWidth, fieldHeight) {
  const gameContainer = document.querySelector("#game-field")
  const model = modelInit(fieldWidth, fieldHeight, 700, gameContainer)
  const controlsContainer = document.querySelector("#game-controls")
  
  model.addObserver('toggle', (data) => { 
    model.setGrid(toggleCell(model.getGrid(), data.x, data.y))
  })  
  model.addObserver('update', (data) => { 
    model.setGrid(updateState(model.getGrid()))
  })
  model.addObserver('redraw', (data) => { 
    gameContainer.innerHTML = renderField(model.getGrid(), () => "js-cell")
  })

  model.addObserver("diff", (data) => {
    const diff = model.diff()
    diff.map(diff => {
      let element = gameContainer.querySelector(`#x${diff.x+1}y${diff.y+1}`)
      element.classList.toggle('alive')
    })
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

main(200, 200)


