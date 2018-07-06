import {makeTableCell, makeTableRow, makeTable} from "./html-renderer.js"

describe("makeTableCell", () => {
  it ("should make a table cell", () => {
    const currentState = [[0,1,0],
                          [0,0,0],
                          [0,0,0]]
    const html1 = makeTableCell(currentState, 2, 1)
    expect(html1).toBe("<td>1</td>")    
    const html2 = makeTableCell(currentState, 1, 1)
    expect(html2).toBe("<td>0</td>")                     
  })
})

describe("makeTableRow", () => {
  it ("should make a table row", () => {
    const currentState = [[0,1,0],
                          [0,0,0],
                          [0,0,0]]
    const html = makeTableRow(currentState, 1)
    expect(html.replace(/\s+/g, '').trim()).toBe("<tr><td>0</td><td>1</td><td>0</td></tr>")                       
  })
})

describe("makeTable", () => {
  it ("should make a table ", () => {
    const currentState = [[0,1,0],
                          [1,0,1],
                          [0,1,0]]
    const test =  
      `<table>
        <tbody>
          <tr><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>0</td><td>1</td><td>0</td></tr>
        </tbody>
      </table>`
    const result =  makeTable(currentState)

    expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''))                       
  })
})