import Template from './Template';
import { CellState } from '../../Utilities/Types';

describe('render tests', () => {
  describe('makeTableCell', () => {
    it('should make a table cell', () => {
      const currentState = [[0, 1, 0],
                            [0, 0, 0],
                            [0, 0, 0]];
      const html1 = (new Template((x, y, z) => CellState.Alive)).makeTableCell(currentState, 2, 1);
      expect(html1).toBe('<td class="js-cell alive" id="x2y1" data-x=2 data-y=1></td>');    
                     
    });
  });

  describe('makeTableRow', () => {
    it('should make a table row', () => {
      const currentState = [[1]];
      const html = (new Template((x, y, z) => CellState.Alive)).makeTableRow(currentState, 0);
      const test = '<tr><td class="js-cell alive" id="x1y1" data-x=1 data-y=1></td></tr>';
      expect(html.replace(/\s+/g, '').trim())
        .toEqual(test.replace(/\s+/g, ''));
    });
  });

  describe('makeTable', () => {
    it('should make a table ', () => {
      const currentState = [[0]];
      const test =
          `<table>
              <tbody><tr><td class="js-cell dead" id="x1y1" data-x=1 data-y=1></td></tr></tbody>
          </table>`;
      const result = (new Template((x, y, z) => CellState.Dead)).makeTable(currentState);
      expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''));         
    });
  });

  describe('button', () => {
    it('should render a button with id', () => {
      const result = (new Template((x, y, z) => CellState.Alive))
        .button({ selector:'#id', title: 'Button1' });
      const test = '<button id="id"> Button1 </button>';
      expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''));
    });
    it('should render a button with class', () => {
      const result = (new Template((x, y, z) => CellState.Alive))
        .button({ selector:'.class', title: 'Button1' });
      const test = '<button class="class"> Button1 </button>';
      expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''));
    });
  });

  describe('slider', () => {
    it('should render a slider with max and min values', () => {
      const result = (new Template((x, y, z) => CellState.Alive))
        .slider({
          minVal:10,
          maxVal:20,
          selector:'.slider',
          auxSelector:'.slider-n',
          title: 'AAAA' });
      const testEl = document.createElement('div');
      testEl.innerHTML = result;

      expect(testEl.querySelector('input[type=range]').getAttribute('min')).toBe('10');
      expect(testEl.querySelector('input[type=range]').getAttribute('max')).toBe('20');
    });
    it('should render a slider with correct selectors', () => {
      const result = (new Template((x, y, z) => CellState.Alive))
        .slider({ minVal:10, maxVal:20, selector:'.slider', auxSelector:'.slider-n' });
      const testEl = document.createElement('div');
      testEl.innerHTML = result;

      expect(testEl.querySelector('input[type=range]').classList.contains('slider')).toBe(true);
      expect(testEl.querySelector('.subtitle').classList.contains('slider-n')).toBe(true);
    });
  });
});
