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

function button(opts) {
  const selectorType = opts.selector[0] == '.' ? "class" : "id"   
  return `
    <button ${selectorType}="${opts.selector.slice(1)}">${opts.title}</button>
  `
}

function renderField(hfac, grid) {
  return `
    <div>
      ${makeTable(grid, hfac)}
    </div>
    `
}

function renderControls({speed, play, reset}) {
  return `
    ${button(play)}
    ${button(reset)}
    <label>speed: 
    <input type="range" min="${speed.minSpeed}" max="${speed.maxSpeed}" id="${speed.selector.slice(1)}"/>
    <br />
    <span id="speed-number"></span>
    </label>

  `
}

export {makeTableCell, makeTableRow, makeTable, renderField, renderControls}