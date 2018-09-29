import View from './View';
import Messages from '../Messages';

describe('browser events', () => {
  it('should know about browser events', () => {
    let x = 0;
    const el = document.createElement('div');
    el.addEventListener('click', () => x = 2);
    const body = document.body;
    body.appendChild(el);
    const click = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    const cancelled = !el.dispatchEvent(click);
    expect(x).toEqual(2);
  });
});

describe('handlers', () => {
  let el;
  let body;
  let clickEvent;
  let changeEvent;
  let view;
  beforeEach(() => {

    clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    changeEvent = new Event('change', {
      bubbles:true,
      cancelable: true,
    });
    body = document.body;
    body.classList.add('test');
    view = new View('.test');
  });

  describe('click on reset', () => {

    it('should send RESET signal', () => {
      const dummy = {
        spied: () => {},
      };
      spyOn(dummy, 'spied');
      view.addObserver(Messages.RESET, dummy.spied);
      el = document.querySelector('.test__button--reset');
      el.dispatchEvent(clickEvent);
      expect(dummy.spied).toHaveBeenCalled();
    });
  });
  describe('click on cell', () => {
    it('should send signal to toggle cell state', () => {
      const dummy = {
        spied: () => {},
      };
      spyOn(dummy, 'spied');
      view.addObserver(Messages.TOGGLE_CELL, dummy.spied);
      view.broadcast(Messages.STATE_UPDATED, [[0, 1], [1, 0]]);
      el = document.querySelector('.js-test__cell');
      el.dispatchEvent(clickEvent);
      expect(dummy.spied).toHaveBeenCalled();
    });
  });
  describe('click on play', () => {
    it('should send RUNNING_CHANGED signal', () => {
      const dummy = {
        spied: () => {},
      };
      spyOn(dummy, 'spied');
      view.addObserver(Messages.RUNNING_CHANGED, dummy.spied);
      el = document.querySelector('.test__button--run');
      el.dispatchEvent(clickEvent);
      expect(dummy.spied).toHaveBeenCalled();
    });
  });

  describe('change of speed ', () => {
    it('should send signal to update speed', () => {
      const dummy = {
        spied: () => {},
      };
      spyOn(dummy, 'spied');
      view.addObserver(Messages.UPDATE_SPEED, dummy.spied);
      el = document.querySelector('.test__slider--speed');
      el.dispatchEvent(changeEvent);
      expect(dummy.spied).toHaveBeenCalled();
    });
  });

  describe('change of width slider', () => {
    it('should send signal to update width', () => {
      const dummy = {
        spied: () => {},
      };
      spyOn(dummy, 'spied');
      view.addObserver(Messages.UPDATE_WIDTH, dummy.spied);
      el = document.querySelector('.test__slider--width');
      el.dispatchEvent(changeEvent);
      expect(dummy.spied).toHaveBeenCalled();
    });
  });

  describe('change of height slider ', () => {
    it('should send signal to update height', () => {
      const dummy = {
        spied: () => {},
      };
      spyOn(dummy, 'spied');
      view.addObserver(Messages.UPDATE_HEIGHT, dummy.spied);
      el = document.querySelector('.test__slider--height');
      el.dispatchEvent(changeEvent);
      expect(dummy.spied).toHaveBeenCalled();
    });
  });
});
