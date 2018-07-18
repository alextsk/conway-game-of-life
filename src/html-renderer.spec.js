import {makeTableCell, makeTableRow, makeTable, button, slider } from "./html-renderer.js"

describe("makeTableCell", () => {
  it ("should make a table cell", () => {
    const currentState = [[0,1,0],
                          [0,0,0],
                          [0,0,0]]
    const html1 = makeTableCell(currentState, 2, 1, () => 'js-cell' )
    expect(html1).toBe(`<td class="js-cell alive" data-x=2 data-y=1></td>`)    
                   
  })
})

describe("makeTableRow", () => {
  it ("should make a table row", () => {
    const currentState = [[1]]
    const html = makeTableRow(currentState, 0, () => '')
    const test = `<tr><td class="alive" data-x=1 data-y=1></td></tr>`
    expect(html.replace(/\s+/g, '').trim()).toEqual(test.replace(/\s+/g, ''))                       
  })
})

describe("makeTable", () => {
  it ("should make a table ", () => {
    const currentState = [[0]]
    let test = `<table><tbody><tr><td class="dead" data-x=1 data-y=1></td></tr></tbody></table>`
    const result =  makeTable(currentState)
    expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''))                       
  })
})


describe("button", () => {
  it("should render a button with id", () => {
    const result = button({selector:"#id", title: "Button1"})
    const test = `<button id="id"> Button1 </button>`
    expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''))
  })
  it("should render a button with class", () => {
    const result = button({selector:".class", title: "Button1"})
    const test = `<button class="class"> Button1 </button>`
    expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''))
  })
})
describe("slider", () => {

  it("should render a slider with max and min values", () => {
    const result = slider({minVal:10, maxVal:20, selector:".slider", auxSelector:".slider-n", title: "AAAA"})
    const testEl = document.createElement("div")
    testEl.innerHTML = result

    expect(testEl.querySelector("input[type=range]").getAttribute('min')).toBe('10')
    expect(testEl.querySelector("input[type=range]").getAttribute('max')).toBe('20')
    //expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''))
  })

  it("should render a slider with correct selectors", () => {
    const result = slider({minVal:10, maxVal:20, selector:".slider", auxSelector:".slider-n"})
    const testEl = document.createElement("div")
    testEl.innerHTML = result

    expect(testEl.querySelector("input[type=range]").classList.contains('slider')).toBe(true)
    expect(testEl.querySelector(".subtitle").classList.contains('slider-n')).toBe(true)
  })
})