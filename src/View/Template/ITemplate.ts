import { Grid } from '../../Utilities/Types';

interface ITemplate {
  makeTable(grid: Grid): string;
  makeButton(opts: {}): string;
  makeSlider(opts: {}): string;
  makeMessage(opts: {}): string;
  renderField(grid: Grid): string;
  renderControls(): string;
}

export default ITemplate;
