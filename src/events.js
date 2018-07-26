import MSG from './messages';

function animate(fn, delay, ...args) {
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

function draw(model) {
  if (model.isRunning()) {
    model.broadcast(MSG.UPDATE);
    model.broadcast('diff');
  }
}

function cellClickHandler(model) {
  return function h(event) {
    if (event.target.classList.contains('js-cell')) {
      const data = event.target.dataset;
      model.broadcast(MSG.TOGGLE, data);
      requestAnimationFrame(() => {
        model.broadcast(MSG.DIFF);
      });
    }
  };
}

function resetHandler(model) {
  return function h() {
    model.resetGrid();
    model.broadcast(MSG.REDRAW);
  };
}

function speedHandler(model) {
  return function h(event) {
    model.setSpeed(event.target.value);
    model.broadcast('Speed', event.target.value);
  };
}

function widthHandler(model) {
  return function h(event) {
    model.setWidth(event.target.value);
    model.broadcast('Width', event.target.value);
    model.broadcast(MSG.REDRAW);
  };
}

function heightHandler(model) {
  return function h(event) {
    model.setHeight(event.target.value);
    model.broadcast('Height', event.target.value);
    model.broadcast(MSG.REDRAW);
  };
}

function playHandler(model) {
  return function h(e) {
    model.setRunning(!model.isRunning());
    e.target.innerHTML = model.isRunning() ? 'Pause' : 'Run';
  };
}

function setSliderEvents(model, container, opts) {
  const sel = container.querySelector(opts.selector);
  sel.value = opts.initVal;
  const auxSel = container.querySelector(opts.auxSelector);
  model.addObserver(opts.title, (value) => {
    auxSel.innerHTML = opts.reporter(value);
    return auxSel.innerHTML;
  });
  model.broadcast(opts.title, sel.value);
  sel.addEventListener('change', opts.handler(model));
}

function initControls({ model, container, components }) {
  model.broadcast(MSG.CONTROLS, components);

  setSliderEvents(model, container, components.speed);
  setSliderEvents(model, container, components.width);
  setSliderEvents(model, container, components.height);

  const playBtn = container.querySelector(components.play.selector);
  playBtn.addEventListener('click', components.play.handler(model));

  const resetBtn = container.querySelector(components.reset.selector);
  resetBtn.addEventListener('click', components.reset.handler(model));
}


function initField({ model, container, handler }) {
  model.broadcast(MSG.REDRAW);
  container.addEventListener('click', handler(model));
  animate(draw, model.getSpeed, model);
}

export {
  cellClickHandler,
  resetHandler,
  speedHandler,
  widthHandler,
  heightHandler,
  playHandler,
  initField,
  initControls,
};
