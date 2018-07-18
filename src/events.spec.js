import {cellClickHandler, resetHandler, widthHandler, heightHandler, speedHandler, playHandler, initField, initControls} from "./events.js"

describe("browser events", () => {
  it("should know about browser events", () => {
    let x = 0
    let el = document.createElement("div")
    el.addEventListener("click", () => x = 2)
    let body = document.body
    body.appendChild(el)
    var click = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    var cancelled = !el.dispatchEvent(click);
    expect(x).toEqual(2)
  })
})
describe("handlers", () => {
  var el, body, event, model = null
  beforeEach(() => {
    el = document.createElement("div")
    el.classList.add('js-cell')
    el.setAttribute("data-x", 1)
    el.setAttribute("data-y", 2)
    body = document.body
    body.appendChild(el)
    event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    model = {
      setGrid: (grid) => {},
      getGrid: () => [[1,0],[0,1]],
      broadcast: () => {}
    }
    el.addEventListener("click", cellClickHandler(model))
  })
  describe("cellClickHandler", () => {


  it("should change the cell state", () => {
    spyOn(model, "setGrid")
    el.dispatchEvent(event)
    expect(model.setGrid).toHaveBeenCalledWith([[1,0],[1,1]])
  })

  it("should signal model to redraw", (done) => {
    spyOn(model, "broadcast")
    el.dispatchEvent(event)
    setTimeout(() => {
      expect(model.broadcast).toHaveBeenCalledWith('redraw')
      done()
    }, 100) 
  })
})
})
