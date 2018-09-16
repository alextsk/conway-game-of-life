
class Template {
  constructor(private config) {
  }

  makeTableCell(grid, x, y) {
    const stateOfCell = (grid[y - 1][x - 1]) ? 'alive' : 'dead';
    return (
    `<td class="js-cell cell--${stateOfCell}" id="x${x}y${y}" data-x=${x} data-y=${y}></td>`// tslint:disable-line
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
    return `
      <button class="${opts.selector.slice(1)}">${opts.title}</button>
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
  
  renderField(grid= [[1]]) {
    return `
      <div class="${this.config.field.selector.slice(1)}">
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

  message(opts) {
    return `
      <div class=${opts.selector.slice(1)}>${opts.textUnstable}</div>
    `;
  }

  renderControls() {
    return `
      <div class="${this.config.controls.selector.slice(1)}">
        ${this.message(this.config.controls.components.message)}
        <hr>        
        ${this.button(this.config.controls.components.play)}
        ${this.button(this.config.controls.components.reset)}
        ${this.slider(this.config.controls.components.speed)}
        ${this.slider(this.config.controls.components.width)}
        ${this.slider(this.config.controls.components.height)}
      </div>
    `;
  }
}

export default Template;
