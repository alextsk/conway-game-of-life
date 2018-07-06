function makeTableCell (grid, x, y) {
  return `
    <td>${getCell(grid, x, y)}</td>
  `
}
function makeTableRow (row, y) {
  return ` 
    <tr>
      ${row.map((cell, x) => makeTableCell(cell, x, y)).join("")}
    </tr>
    `
}
function makeTable (grid) {
  return ` 
  <table onclick=delegatedHandler>
    ${grid.map(row => makeTableRow(row)).join("")}
  </table>
  `
}

function renderHtml(grid, kill, revive) {
  return `
    <div>
      ${makeTable(grid)}
    </div>
    `
}