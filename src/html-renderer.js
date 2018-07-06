import {getCell} from "./logic.js"

function makeTableCell (grid, x, y) {
  return  `<td>${getCell(grid, x, y)}</td>`
}

function makeTableRow (grid, y) {
  return ( 
    `<tr>
      ${ grid.map((cell, x) => makeTableCell(grid, x+1, y)).join("") }
    </tr>`
    )
}

function makeTable (grid) {
  return ` 
  <table>
    <tbody>
      ${grid.map((row, y) => makeTableRow(grid, y+1)).join("")}
    </tbody>
  </table>
  `
}

function renderHtml(grid) {
  return `
    <div>
      ${makeTable(grid)}
    </div>
    `
}

export {makeTableCell, makeTableRow, makeTable, renderHtml}