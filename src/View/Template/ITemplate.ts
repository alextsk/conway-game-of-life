import { Grid, CellState } from '../../Utilities/Types';

interface ITemplate {
  makeTableCell(grid: Grid, x: number, y: number): string;
  makeTableRow(grid: Grid, y: number): string;
  makeTable(grid: Grid): string;
  button(opts: {}): string;
  selType(sel: string): string;
  slider(opts: {}): string;
  message(opts: {}): string;
  renderField(grid: Grid): string;
  renderControls(): string;
}

export default ITemplate;
