import {cellClickHandler, resetHandler, widthHandler, heightHandler, speedHandler, playHandler, initField, initControls} from "./events.js"
import MSG from './messages';
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
      broadcast: () => {}
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
      spyOn(model, "broadcast")
      el.addEventListener("click", cellClickHandler(model))
      el.dispatchEvent(clickEvent)
      expect(model.broadcast).toHaveBeenCalledWith(MSG.TOGGLE, jasmine.any(Object) )
    })

    it("should signal model to differentiate", (done) => {
      spyOn(model, "broadcast")
      el.addEventListener("click", cellClickHandler(model))
      el.dispatchEvent(clickEvent)
      setTimeout(() => {
        expect(model.broadcast).toHaveBeenCalledWith(MSG.DIFF)
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
      spyOn(model, "broadcast")
      el.addEventListener("click", resetHandler(model))
      el.dispatchEvent(clickEvent)
      expect(model.broadcast).toHaveBeenCalledWith(MSG.RESET)
    })
  })

  describe("playHandler", () => {
    beforeEach(()=> {
      el = document.createElement("button")
      body = document.body
      body.appendChild(el)
    })
    it("should send a signal to play / pause", () => {
      spyOn(model, "broadcast")
      el.addEventListener("click", playHandler(model))
      el.dispatchEvent(clickEvent)
      expect(model.broadcast).toHaveBeenCalledWith(MSG.PLAYPAUSE, jasmine.any(Object))
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
      spyOn(model, "broadcast")
      el.addEventListener("change", widthHandler(model))
      el.dispatchEvent(changeEvent)
      expect(model.broadcast).toHaveBeenCalledWith(MSG.REDRAW)
    })
    it("should make model signal of change Width", () => {
      spyOn(model, "broadcast")
      el.addEventListener("change", widthHandler(model))
      el.dispatchEvent(changeEvent)
      expect(model.broadcast).toHaveBeenCalledWith(MSG.WIDTH, '11')
    })
  })

  describe("heightHandler", () => {
    beforeEach(()=> {
      el = document.createElement("input")
      el.value = 11
      body = document.body
      body.appendChild(el)
    })
    it("should set signal to redraw", () => {
      spyOn(model, "broadcast")
      el.addEventListener("change", heightHandler(model))
      el.dispatchEvent(changeEvent)
      expect(model.broadcast).toHaveBeenCalledWith(MSG.REDRAW)
    })
    it("should make model signal of change Height", () => {
      spyOn(model, "broadcast")
      el.addEventListener("change", heightHandler(model))
      el.dispatchEvent(changeEvent)
      expect(model.broadcast).toHaveBeenCalledWith(MSG.HEIGHT, '11')
    })
  })
})
