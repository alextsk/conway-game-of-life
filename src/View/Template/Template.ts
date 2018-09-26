import ITemplate from './ITemplate';

class Template implements ITemplate {
  constructor(private config) {
  }

  makeTableCell(grid, x, y) {
    const cellClass = this.config.field.cellSelector.slice(1);
    const stateOfCell = (grid[y - 1][x - 1]) ? 'alive' : 'dead';
    return (
    `<td class="
            ${cellClass} 
            js-${cellClass} 
            ${cellClass}--${stateOfCell}
            " 
         data-x=${x} data-y=${y}></td>`// tslint:disable-line
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
    <table class="${this.config.field.selector.slice(1)}">
      <tbody>
        ${grid.map((row, y) => this.makeTableRow(grid, y)).join('')}
      </tbody>
    </table>
    `;
  }
  
  button(opts) {
    return `
      <button class="
        ${opts.selector.slice(1)} 
        ${opts.selector.slice(1)}--${opts.modifier}
        js-${opts.selector.slice(1)}--${opts.modifier}
        ">
        ${opts.title}</button>
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
  
  slider(opts) {
    const selAux = opts.auxSelector.slice(1);
    return `
    <div>
      <label class="${opts.labelSelector.slice(1)}">${opts.title || 'unknown'}: 
        <input 
          type="range" 
          min="${opts.minVal}" 
          max="${opts.maxVal}" 
          class="
                ${opts.selector.slice(1)} 
                ${opts.selector.slice(1)}--${opts.modifier}
                js-${opts.selector.slice(1)}--${opts.modifier}
                "
        />
      </label>  
      <div class="
            ${opts.auxSelector.slice(1)} 
            ${opts.auxSelector.slice(1)}--${opts.modifier}
            js-${opts.auxSelector.slice(1)}--${opts.modifier}">
      </div>
    </div>
    `;
  }

  message(opts) {
    return `
      <div class="
        ${opts.selector.slice(1)} 
        js-${opts.selector.slice(1)}">
        "
        >${opts.textUnstable}</div>
    `;
  }
  
  renderField(grid= [[1]]) {
    return `
      <div class="${this.config.field.wrapperSelector.slice(1)}">
        ${this.makeTable(grid)}
      </div>
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
