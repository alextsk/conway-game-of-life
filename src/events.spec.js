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
      cancelable: true,
    });
    var cancelled = !el.dispatchEvent(click);
    expect(x).toEqual(2)
  })
})

describe("handlers", () => {
  var el, body, clickEvent, changeEvent, model = null
  beforeEach(() => {

    clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    changeEvent = new Event('change', {
      bubbles:true,
      cancelable: true
    })
    model = {
      setGrid: (grid) => {},
      getGrid: () => [[1,0],[0,1]],
      broadcast: () => {},
      resetGrid: () => {},
      setWidth: () => {},
      running: false
    }
    
  })
  describe("cellClickHandler", () => {
    beforeEach(()=> {
      el = document.createElement("div")
      el.classList.add('js-cell')
      el.setAttribute("data-x", 1)
      el.setAttribute("data-y", 2)
      body = document.body
      body.appendChild(el)
    })

    it("should change the cell state", () => {
      spyOn(model, "setGrid")
      el.addEventListener("click", cellClickHandler(model))
      el.dispatchEvent(clickEvent)
      expect(model.setGrid).toHaveBeenCalledWith([[1,0],[1,1]])
    })

    it("should signal model to redraw", (done) => {
      spyOn(model, "broadcast")
      el.addEventListener("click", cellClickHandler(model))
      el.dispatchEvent(clickEvent)
      setTimeout(() => {
        expect(model.broadcast).toHaveBeenCalledWith('redraw')
        done()
      }, 100) 
    })
  })

  describe("resetHandler", () => {
    beforeEach(()=> {
      el = document.createElement("buton")
      body = document.body
      body.appendChild(el)
    })
    it("should reset model", () => {
      spyOn(model, "resetGrid")
      el.addEventListener("click", resetHandler(model))
      el.dispatchEvent(clickEvent)
      expect(model.resetGrid).toHaveBeenCalled()
    })
  })

  describe("playHandler", () => {
    beforeEach(()=> {
      el = document.createElement("button")
      body = document.body
      body.appendChild(el)
    })
    it("should toggle model running", () => {
      spyOn(model, "resetGrid")
      el.addEventListener("click", playHandler(model))
      el.dispatchEvent(clickEvent)
      expect(model.running).toBe(true)
      el.dispatchEvent(clickEvent)
      expect(model.running).toBe(false)
    })
  })

  describe("widthHandler", () => {
    beforeEach(()=> {
      el = document.createElement("input")
      el.value = 11
      body = document.body
      body.appendChild(el)
    })
    it("should set model width", () => {
      spyOn(model, "setWidth")
      el.addEventListener("change", widthHandler(model))
      el.dispatchEvent(changeEvent)
      expect(model.setWidth).toHaveBeenCalledWith('11')
    })
    it("should make model signal of change Width", () => {
      spyOn(model, "broadcast")
      el.addEventListener("change", widthHandler(model))
      el.dispatchEvent(changeEvent)
      expect(model.broadcast).toHaveBeenCalledWith('Width', '11')
    })
  })
})
