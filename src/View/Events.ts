import Messages from '../Model/Messages';
import Observer from '../Model/Observer';
import Template from './Template';

class Events extends Observer {
  isStable : () => boolean = () => this.stable;
  changeStable = (arg: boolean) => this.stable = arg;
  stable: boolean;
  isRunning : () => boolean = () => this.running;
  running : boolean = true;
  changeRunning = arg => this.running = arg;
  speed : number = 700;
  template: any;
  controlsContainer;
  fieldContainer;

  constructor(private config) {
    super();
    this.template = new Template(config);
    const gameContainer = document.querySelector(config.selector);
    gameContainer.innerHTML = (this.template.renderControls()) + (this.template.renderField());
    this.controlsContainer = gameContainer.querySelector(config.controls.selector);
    this.fieldContainer = gameContainer.querySelector(config.field.selector);

    this.addObserver(Messages.SPEED, (value) => {
      console.log('speed changes on this', value);
      this.speed = value;
    });

    this.addObserver(Messages.REDRAW, (grid) => {
      console.log('Messages.REDRAW inside events, grid:', grid);
      this.fieldContainer.innerHTML = this.template.renderField(grid);
    });

    this.initControls();
    this.initField();
  }

  animate(fn, ...args) {
    let lastCall = 0;
    let that = this;
    return (function animatep(fnP, ...argsP) {
      requestAnimationFrame((delta) => {
        if (delta - lastCall > that.speed) {
          lastCall = delta;
          fnP(...argsP);
        }
        animatep(fnP,  ...argsP);
      });
    }(fn, ...args));
  }
  
  draw() {
    console.log('is drawing');
    if (this.isStable()) {
      this.broadcast(Messages.GAMESTATUS, 'Game is stable.');
    } else {
      this.broadcast(Messages.GAMESTATUS, 'Game is running.');
    }
    if (this.isRunning()) {
      this.broadcast(Messages.UPDATE);
      // this.broadcast(Messages.DIFF);
    }
  }
  
  cellClickHandler(event) {
    if (event.target.classList.contains('js-cell')) {
      const data = event.target.dataset;
      this.broadcast(Messages.TOGGLE, data);
      requestAnimationFrame(() => {
        this.broadcast(Messages.DIFF);
      });
    }
  }

  resetHandler() {
    this.broadcast(Messages.RESET);
    this.broadcast(Messages.UPDATE);
  }

  speedHandler(event) {
    this.broadcast(Messages.SPEED, event.target.value);
  }

  widthHandler(event) {
    this.broadcast(Messages.WIDTH, event.target.value);
    this.broadcast(Messages.UPDATE);
  }
  
  heightHandler(event) {
    this.broadcast(Messages.HEIGHT, event.target.value);
    this.broadcast(Messages.UPDATE);
  }
  
  playHandler() {
    return function h(e) {
      this.broadcast(Messages.PLAYPAUSE, e.target);
    };
  }

  setSliderEvents(container, opts, handler) {
    const sel = container.querySelector(opts.selector);
    sel.value = opts.initVal;
    const auxSel = container.querySelector(opts.auxSelector);
    this.addObserver(opts.message, (value) => {
      console.log('aux sel', auxSel )
      auxSel.innerHTML = opts.reporter(value);
      return auxSel.innerHTML;
    });
    this.broadcast(opts.message, sel.value);
    sel.addEventListener('change', handler);
  }
  
  initControls() {
    const components = this.config.controls.components;
    this.setSliderEvents(this.controlsContainer, components.speed, this.speedHandler.bind(this));
    this.setSliderEvents(this.controlsContainer, components.width, this.widthHandler.bind(this));
    this.setSliderEvents(this.controlsContainer, components.height, this.heightHandler.bind(this));

    const playBtn = this.controlsContainer.querySelector(components.play.selector);
    playBtn.addEventListener('click', this.playHandler.bind(this));
  
    const resetBtn = this.controlsContainer.querySelector(components.reset.selector);
    resetBtn.addEventListener('click', this.resetHandler.bind(this));
  }

  initField() {
    this.broadcast(Messages.UPDATE);
    this.fieldContainer.addEventListener('click', this.cellClickHandler.bind(this));
    this.animate(this.draw.bind(this));
  }
}

export default Events;
