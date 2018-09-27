import Template from './Template';
import Config from '../Config';

describe('template creation tests', () => {
  const config = Config('.test');

  describe('makeTable', () => {
    it('should make a table ', () => {
      const currentState = [[0]];
      const test =
          `<table class="test__field">
              <tbody><tr><td class="test__cell js-test__cell test__cell--dead" 
              data-x=1 data-y=1></td></tr></tbody>
          </table>`;
      const result = (new Template(config)).makeTable(currentState);
      expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''));
    });
  });

  describe('button', () => {
    it('should render a button', () => {
      const result = (new Template(config))
        .makeButton(config.controls.components.play);
      const test = `<button class="test__button test__button--run js-test__button--run">
            Pause </button>`;
      expect(result.replace(/\s+/g, '')).toEqual(test.replace(/\s+/g, ''));
    });
  });

  describe('slider', () => {
    it('should render a slider with given range', () => {
      const result = (new Template(config))
        .makeSlider(config.controls.components.speed);
      const testEl = document.createElement('div');
      testEl.innerHTML = result;
      expect(testEl.querySelector('input[type=range]')
        .getAttribute('min')).toBe(`${config.controls.components.speed.minVal}`);
      expect(testEl.querySelector('input[type=range]')
        .getAttribute('max')).toBe(`${config.controls.components.speed.maxVal}`);
    });
  });
});
