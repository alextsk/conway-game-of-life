
class Template {
  constructor(private getCell? : (grid: number[][], x: number, y: number) => number) {
  }

  makeTableCell(grid, x, y) {
    return (
    `<td class="js-cell ${this.getCell(grid, x, y) ? 'alive' : 'dead'}" id="x${x}y${y}" data-x=${x} data-y=${y}></td>`// tslint:disable-line
    );
  }
  
  makeTableRow(grid, y) {
    return (
      `<tr>
        ${grid[y].map((cell, x) => this.makeTableCell(grid, x + 1, y + 1)).join('')}
      </tr>`
    );
  }
  
  makeTable(grid) {
    return ` 
    <table>
      <tbody>
        ${grid.map((row, y) => this.makeTableRow(grid, y)).join('')}
      </tbody>
    </table>
    `;
  }
  
  button(opts) {
    const selectorType = opts.selector[0] === '.' ? 'class' : 'id';
    return `
      <button ${selectorType}="${opts.selector.slice(1)}">${opts.title}</button>
    `;
  }
  
  selType(sel) {
    switch (sel[0]) {
      case '.':
        return 'class';
      case '#':
        return 'id';
      default:
        return 'class';
    }
  }
  
  renderField(grid) {
    return `
      <div>
        ${this.makeTable(grid)}
      </div>
      `;
  }
  
  slider(opts) {
    const selTypeAux = this.selType(opts.auxSelector);
    const selAux = opts.auxSelector.slice(1);
    return `
    <div>
      <label>${opts.title || 'unknown'}: 
        <input 
          type="range" 
          min="${opts.minVal}" 
          max="${opts.maxVal}" 
          ${this.selType(opts.selector)}="${opts.selector.slice(1)}"
        />
      </label>  
      <div class="subtitle ${selTypeAux === 'class' ? selAux : ''}" 
           ${this.selType(opts.auxSelector)}="${selAux}">
      </div>
    </div>
    `;
  }

  renderControls({
    speed, play, reset, width, height,
  }) {
    return `
      ${this.button(play)}
      ${this.button(reset)}
      ${this.slider(speed)}
      ${this.slider(width)}
      ${this.slider(height)}
      <div class="game__message js-game__message"></div>
    `;
  }
}

export default Template;
