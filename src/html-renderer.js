import {getCell} from "./logic.js"

function makeTableCell (grid, x, y, hfac) {
  return  `<td class="${hfac(x,y)} ${getCell(grid,x,y) ? 'alive' : 'dead'}" data-x=${x} data-y=${y}></td>`
}

function makeTableRow (grid, y, hfac) {
  return ( 
    `<tr>
      ${ grid.map((cell, x) => makeTableCell(grid, x+1, y, hfac)).join("") }
    </tr>`
    )
}

function makeTable (grid, hfac) {
  return ` 
  <table>
    <tbody>
      ${grid.map((row, y) => makeTableRow(grid, y+1, hfac)).join("")}
    </tbody>
  </table>
  `
}

function renderHtml(hfac, grid) {
  return `
    <div>
      ${makeTable(grid, hfac)}
    </div>
    `
}

export {makeTableCell, makeTableRow, makeTable, renderHtml}