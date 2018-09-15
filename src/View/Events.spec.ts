import Events from './Events';
import Messages from '../Model/Messages';

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
  let model = null;
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
    model = {
      broadcast: () => {},
    };
    
  });
  describe('cellClickHandler', () => {
    beforeEach(() => {
      el = document.createElement('div');
      el.classList.add('js-cell');
      el.setAttribute('data-x', 1);
      el.setAttribute('data-y', 2);
      body = document.body;
      body.appendChild(el);
    });

    it('should change the cell state', () => {
      spyOn(model, 'broadcast');
      el.addEventListener('click', (new Events()).cellClickHandler(model));
      el.dispatchEvent(clickEvent);
      expect(model.broadcast).toHaveBeenCalledWith(Messages.TOGGLE, jasmine.any(Object));
    });

    it('should signal model to differentiate', (done) => {
      spyOn(model, 'broadcast');
      el.addEventListener('click', (new Events()).cellClickHandler(model));
      el.dispatchEvent(clickEvent);
      setTimeout(() => {
        expect(model.broadcast).toHaveBeenCalledWith(Messages.DIFF);
        done();
      },         100); 
    });
  });

  describe('resetHandler', () => {
    beforeEach(() => {
      el = document.createElement('buton');
      body = document.body;
      body.appendChild(el);
    });
    it('should reset model', () => {
      spyOn(model, 'broadcast');
      el.addEventListener('click', (new Events()).resetHandler(model));
      el.dispatchEvent(clickEvent);
      expect(model.broadcast).toHaveBeenCalledWith(Messages.RESET);
    });
  });

  describe('playHandler', () => {
    beforeEach(() => {
      el = document.createElement('button');
      body = document.body;
      body.appendChild(el);
    });
    it('should send a signal to play / pause', () => {
      spyOn(model, 'broadcast');
      el.addEventListener('click', (new Events()).playHandler(model));
      el.dispatchEvent(clickEvent);
      expect(model.broadcast).toHaveBeenCalledWith(Messages.PLAYPAUSE, jasmine.any(Object));
    });
  });

  describe('widthHandler', () => {
    beforeEach(() => {
      el = document.createElement('input');
      el.value = 11;
      body = document.body;
      body.appendChild(el);
    });
    it('should set model width', () => {
      spyOn(model, 'broadcast');
      el.addEventListener('change', (new Events()).widthHandler(model));
      el.dispatchEvent(changeEvent);
      expect(model.broadcast).toHaveBeenCalledWith(Messages.REDRAW);
    });
    it('should make model signal of change Width', () => {
      spyOn(model, 'broadcast');
      el.addEventListener('change', (new Events()).widthHandler(model));
      el.dispatchEvent(changeEvent);
      expect(model.broadcast).toHaveBeenCalledWith(Messages.WIDTH, '11');
    });
  });

  describe('heightHandler', () => {
    beforeEach(() => {
      el = document.createElement('input');
      el.value = 11;
      body = document.body;
      body.appendChild(el);
    });
    it('should set signal to redraw', () => {
      spyOn(model, 'broadcast');
      el.addEventListener('change', (new Events()).heightHandler(model));
      el.dispatchEvent(changeEvent);
      expect(model.broadcast).toHaveBeenCalledWith(Messages.REDRAW);
    });
    it('should make model signal of change Height', () => {
      spyOn(model, 'broadcast');
      el.addEventListener('change', (new Events()).heightHandler(model));
      el.dispatchEvent(changeEvent);
      expect(model.broadcast).toHaveBeenCalledWith(Messages.HEIGHT, '11');
    });
  });
});
