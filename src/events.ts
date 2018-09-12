import Messages from './Messages';

class Events {
  animate(fn, delay, ...args) {
    let lastCall = 0;
    return (function animatep(fnP, delayP, ...argsP) {
      requestAnimationFrame((delta) => {
        if (delta - lastCall > delayP()) {
          lastCall = delta;
          fnP(...argsP);
        }
        animatep(fnP, delay, ...argsP);
      });
    }(fn, delay, ...args));
  }
  
  draw(model) {
    if (model.isStable) {
      model.broadcast(Messages.GAMESTATUS, 'Game is stable.');
    } else {
      model.broadcast(Messages.GAMESTATUS, 'Game is running.');
    }
    if (model.isRunning()) {
      model.broadcast(Messages.UPDATE);
      model.broadcast(Messages.DIFF);
      // model.broadcast(Messages.REDRAW);
    }
  }
  
  cellClickHandler(model) {
    return function h(event) {
      if (event.target.classList.contains('js-cell')) {
        const data = event.target.dataset;
        model.broadcast(Messages.TOGGLE, data);
        requestAnimationFrame(() => {
          model.broadcast(Messages.DIFF);
        });
      }
    };
  }

  resetHandler(model) {
    return function h() {
      model.broadcast(Messages.RESET);
      model.broadcast(Messages.REDRAW);
    };
  }

  speedHandler(model) {
    return function h(event) {
      model.broadcast(Messages.SPEED, event.target.value);
    };
  }

  widthHandler(model) {
    return function h(event) {
      model.broadcast(Messages.WIDTH, event.target.value);
      model.broadcast(Messages.REDRAW);
    };
  }
  
  heightHandler(model) {
    return function h(event) {
      model.broadcast(Messages.HEIGHT, event.target.value);
      model.broadcast(Messages.REDRAW);
    };
  }
  
  playHandler(model) {
    return function h(e) {
      model.broadcast(Messages.PLAYPAUSE, e.target);
    };
  }

  setSliderEvents(model, container, opts) {
    const sel = container.querySelector(opts.selector);
    sel.value = opts.initVal;
    const auxSel = container.querySelector(opts.auxSelector);
    model.addObserver(opts.message, (value) => {
      auxSel.innerHTML = opts.reporter(value);
      return auxSel.innerHTML;
    });
    model.broadcast(opts.message, sel.value);
    sel.addEventListener('change', opts.handler(model));
  }
  
  initControls({ model, container, components }) {
    model.broadcast(Messages.CONTROLS, components);
  
    this.setSliderEvents(model, container, components.speed);
    this.setSliderEvents(model, container, components.width);
    this.setSliderEvents(model, container, components.height);
  
    const playBtn = container.querySelector(components.play.selector);
    playBtn.addEventListener('click', components.play.handler(model));
  
    const resetBtn = container.querySelector(components.reset.selector);
    resetBtn.addEventListener('click', components.reset.handler(model));
  }

  initField({ model, container, handler }) {
    model.broadcast(Messages.REDRAW);
    container.addEventListener('click', handler(model));
    this.animate(this.draw, model.getSpeed, model);
  }
}

export default Events;
