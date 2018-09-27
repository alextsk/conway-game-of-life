import ITemplate from './ITemplate';
import { Grid, ConfigT, ComponentT  } from '../../Types';

class Template implements ITemplate {
  constructor(private config: ConfigT) {
  }

  private makeTableCell(grid: Grid, x: number, y: number) {
    const { field: { cellSelector } } = this.config;
    const cellKlass = cellSelector.slice(1);
    const stateOfCell = (grid[y - 1][x - 1]) ? 'alive' : 'dead';
    return (
    `<td class="
            ${ cellKlass } 
            js-${ cellKlass } 
            ${ cellKlass }--${ stateOfCell }
            " 
         data-x=${x} data-y=${y}></td>`
    );
  }
  
  private makeTableRow(grid: Grid, y: number) {
    return (
      `<tr>
        ${grid[y].map((cell, x) => this.makeTableCell(grid, x + 1, y + 1)).join('')}
      </tr>`
    );
  }
  
  public makeTable(grid: Grid) {
    const { field: { selector } } = this.config;
    const klass = selector.slice(1);
    return ` 
    <table class="${ klass }">
      <tbody>
        ${grid.map((row, y) => this.makeTableRow(grid, y)).join('')}
      </tbody>
    </table>
    `;
  }
  
  public makeButton({ selector, modifier, title }: ComponentT) {
    const klass = selector.slice(1);
    return `
      <button class="
        ${klass} 
        ${klass}--${modifier}
        js-${klass}--${modifier}
        ">
        ${title}</button>
    `;
  }
  
  public makeSlider(
    { selector, labelSelector, auxSelector, title, modifier, minVal, maxVal }: ComponentT) {
    const subKlass = auxSelector.slice(1);
    const klass = selector.slice(1);
    const labelKlass = labelSelector.slice(1);
    return `
    <div>
      <label class="${ labelKlass }">${title || 'unknown'}: 
        <input 
          type="range" 
          min="${minVal}" 
          max="${maxVal}" 
          class="
                ${klass} 
                ${klass}--${modifier}
                js-${klass}--${modifier}
                "
        />
      </label>  
      <div class="
            ${ subKlass } 
            ${ subKlass }--${modifier}
            js-${ subKlass }--${modifier}">
      </div>
    </div>
    `;
  }

  public makeMessage({ selector, textUnstable }: ComponentT) {
    const klass = selector.slice(1);
    return `
      <div class="
        ${klass} 
        js-${klass}">
        "
        >${textUnstable}</div>
    `;
  }
  
  public renderField(grid= [[1]]) {
    const { field:{ wrapperSelector } } = this.config;
    const wrapperKlass = wrapperSelector.slice(1);
    return `
      <div class="${ wrapperKlass }">
        ${this.makeTable(grid)}
      </div>
      `;
  }

  public renderControls() {
    const {
      controls: {
        components: { message, play, reset, speed, width, height },
        selector,
      },
    } = this.config;
    const klass = selector.slice(1);
    return `
      <div class="${ klass }">
        ${ this.makeMessage(message) }
        <hr>        
        ${ this.makeButton(play) }
        ${ this.makeButton(reset) }
        ${ this.makeSlider(speed) }
        ${ this.makeSlider(width) }
        ${ this.makeSlider(height) }
      </div>
    `;
  }
}

export default Template;
