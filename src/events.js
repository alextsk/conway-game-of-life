
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
  if (model.running) {
    model.broadcast('update');
    // model.broadcast("redraw")
    model.broadcast('diff');
  }
}

function cellClickHandler(model) {
  return function h(e) {
    if (e.target.classList.contains('js-cell')) {
      const data = e.target.dataset;
      model.broadcast('toggle', data);
      requestAnimationFrame(() => {
        model.broadcast('diff');
      });
    }
  };
}

function resetHandler(model) {
  return function h() {
    model.resetGrid();
    model.broadcast('redraw');
  };
}

function speedHandler(model) {
  return function h(e) {
    model.setSpeed(e.target.value);
    model.broadcast('Speed', e.target.value);
  };
}

function widthHandler(model) {
  return function h(e) {
    model.setWidth(e.target.value);
    model.broadcast('Width', e.target.value);
    model.broadcast('redraw');
  };
}

function heightHandler(model) {
  return function h(e) {
    model.setHeight(e.target.value);
    model.broadcast('Height', e.target.value);
    model.broadcast('redraw');
  };
}

function playHandler(model) {
  return function h(e) {
    model.setRunning(!model.running);
    e.target.innerHTML = model.running ? 'Pause' : 'Run';
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
  model.broadcast('controls', components);

  setSliderEvents(model, container, components.speed);
  setSliderEvents(model, container, components.width);
  setSliderEvents(model, container, components.height);

  const playBtn = container.querySelector(components.play.selector);
  playBtn.addEventListener('click', components.play.handler(model));

  const resetBtn = container.querySelector(components.reset.selector);
  resetBtn.addEventListener('click', components.reset.handler(model));
}


function initField({ model, container, handler }) {
  model.broadcast('redraw');
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
