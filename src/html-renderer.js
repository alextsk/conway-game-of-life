import {getCell} from "./logic.js"

function makeTableCell (grid, x, y, hfac) {
  return  `<td class="${hfac(x,y)} ${getCell(grid,x,y) ? 'alive' : 'dead'}" id="x${x}y${y}" data-x=${x} data-y=${y}></td>`
}

function makeTableRow (grid, y,  hfac) {
  return ( 
    `<tr>
      ${ grid[y].map((cell, x) => makeTableCell(grid, x+1, y+1, hfac)).join("") }
    </tr>`
    )
}

function makeTable (grid, hfac = () => "") {
  return ` 
  <table>
    <tbody>
      ${grid.map((row, y) => makeTableRow(grid, y, hfac)).join("")}
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

function selType (sel) {
  switch (sel[0]) {
    case '.':
      return 'class'
    case '#':
      return 'id'
  }
   
} 
function renderField(grid, hfac) {
  return `
    <div>
      ${makeTable(grid, hfac)}
    </div>
    `
}
function slider(opts) {
  let selTypeAux = selType(opts.auxSelector)
  let selAux = opts.auxSelector.slice(1)
  return `
  <div>
    <label>${opts.title || "unknown"}: 
      <input 
        type="range" 
        min="${opts.minVal}" 
        max="${opts.maxVal}" 
        ${selType(opts.selector)}="${opts.selector.slice(1)}"
      />
    </label>  
    <div class="subtitle ${selTypeAux == 'class' ? selAux : ''}" ${selType(opts.auxSelector)}="${selAux}"></div>
  </div>
    `
}
function renderControls({speed, play, reset, width, height}) {
  return `
    ${button(play)}
    ${button(reset)}
    ${slider(speed)}
    ${slider(width)}
    ${slider(height)}
  `
}

export {renderField, renderControls, makeTableCell, makeTableRow, makeTable, button, slider}