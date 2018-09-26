import Template from './Template';
import Config from '../Config';
import { CellState } from '../../Utilities/Types';

describe('template creation tests', () => {
  const config = Config('.test');

  describe('makeTableCell', () => {
    it('should make a table cell', () => {
      const currentState = [[0, 1, 0],
                            [0, 0, 0],
                            [0, 0, 0]];
      const html1 = (new Template(config)).makeTableCell(currentState, 2, 1);
      const test = '<td class="test__cell js-test__cell test__cell--alive" data-x=2 data-y=1></td>';
      expect(html1.replace(/\s+/g, '').trim()).toBe(test.replace(/\s+/g, '').trim());
    });
  });

  describe('makeTableRow', () => {
    it('should make a table row', () => {
      const currentState = [[1]];
      const html = (new Template(config)).makeTableRow(currentState, 0);
      const test = '<tr><td class="test__cell js-test__cell test__cell--alive" data-x=1 data-y=1></td></tr>';
      expect(html.replace(/\s+/g, '').trim())
        .toEqual(test.replace(/\s+/g, ''));
    });
  });

  describe('makeTable', () => {
    it('should make a table ', () => {
      const currentState = [[0]];
      const test =
          `<table class="test__field">
              <tbody><tr><td class="test__cell js-test__cell test__cell--dead" data-x=1 data-y=1></td></tr></tbody>
          </table>`;
      const result = (new Template(config)).makeTable(currentState);
      expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''));
    });
  });

  describe('button', () => {
    it('should render a button', () => {
      const result = (new Template(config))
        .button(config.controls.components.play);
      const test = '<button class="test__button test__button--run js-test__button--run"> Pause </button>';
      expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''));
    });
  });

  describe('slider', () => {
    it('should render a slider with given range', () => {
      const result = (new Template((x, y, z) => CellState.Alive))
        .slider(config.controls.components.speed);
      const testEl = document.createElement('div');
      testEl.innerHTML = result;
      expect(testEl.querySelector('input[type=range]')
        .getAttribute('min')).toBe(`${config.controls.components.speed.minVal}`);
      expect(testEl.querySelector('input[type=range]')
        .getAttribute('max')).toBe(`${config.controls.components.speed.maxVal}`);
    });
  });
});
