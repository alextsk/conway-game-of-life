import Messages from '../Utilities/Messages';
import Config from './Config';
import Observer from '../Utilities/Observer';
import Template from './Template/Template';
import IView from './IView';

class View extends Observer implements IView{
  isStable : () => boolean = () => this.stable;
  setStable = (arg: boolean) => this.stable = arg;
  stable: boolean;
  isRunning : () => boolean = () => this.running;
  setRunning = arg => this.running = arg;
  running : boolean = true;
  speed : number = 700;
  template: any;
  statusMessage;
  controlsContainer;
  fieldContainer;
  playButton;
  config;

  constructor(selector) {
    super();
    this.config = Config(selector);
    this.template = new Template(this.config);
    const gameContainer = document.querySelector(this.config.selector);
    gameContainer.innerHTML = (this.template.renderControls()) + (this.template.renderField());
    this.controlsContainer = gameContainer.querySelector(this.config.controls.selector);
    this.fieldContainer = gameContainer.querySelector(this.config.field.selector);
    this.statusMessage = gameContainer.querySelector(this.config.controls.components.message.selector);/*tslint:disable-line */
    
    this.addObserver(Messages.UPDATE_SPEED, (value) => {
      this.speed = value;
    });

    this.addObserver(Messages.STATE_UPDATED, (grid) => {
      this.fieldContainer.innerHTML = this.template.renderField(grid);
    });

    this.addObserver(Messages.STATUS_CHANGED, stability =>
      this.setStable(stability)                       //tslint:disable-line
    );

    this.initControls();
    this.initField();
  }
  
  private animate(fn, ...args) {
    let lastCall = 0;
    const that = this; // tslint:disable-line
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

  private draw() {
    if (this.isRunning()) {
      const messageConfig = this.config.controls.components.message;
      this.statusMessage.innerHTML = messageConfig[this.isStable() ? 'textStable' : 'textUnstable'];
      this.broadcast(Messages.UPDATE_STATE);
    }
  }

  private cellClickHandler(event) {
    if (event.target.classList.contains('js-cell')) {
      const data = event.target.dataset;
      this.broadcast(Messages.TOGGLE_CELL, data);
    }
  }

  private resetHandler() {
    this.broadcast(Messages.RESET);
    this.broadcast(Messages.UPDATE_STATE);
  }

  private speedHandler(event) {
    this.broadcast(Messages.UPDATE_SPEED, event.target.value);
  }

  private widthHandler(event) {
    this.broadcast(Messages.UPDATE_WIDTH, event.target.value);
  }

  private heightHandler(event) {
    this.broadcast(Messages.UPDATE_HEIGHT, event.target.value);
  }

  private playHandler() {
    this.setRunning(!this.isRunning());
    const playConfig = this.config.controls.components.play;
    this.playButton.innerHTML = playConfig[this.isRunning() ? 'title' : 'titlePaused'];
  }

  private setSliderEvents(container, opts, handler) {
    const sel = container.querySelector(opts.selector);
    sel.value = opts.initVal;
    const auxSel = container.querySelector(opts.auxSelector);
    this.addObserver(opts.message, (value) => {
      auxSel.innerHTML = opts.reporter(value);
      return auxSel.innerHTML;
    });
    this.broadcast(opts.message, sel.value);
    sel.addEventListener('change', handler);
  }

  private initControls() {
    const components = this.config.controls.components;
    this.setSliderEvents(this.controlsContainer, components.speed, this.speedHandler.bind(this));
    this.setSliderEvents(this.controlsContainer, components.width, this.widthHandler.bind(this));
    this.setSliderEvents(this.controlsContainer, components.height, this.heightHandler.bind(this));

    this.playButton = this.controlsContainer.querySelector(components.play.selector);
    this.playButton.addEventListener('click', this.playHandler.bind(this));

    const resetBtn = this.controlsContainer.querySelector(components.reset.selector);
    resetBtn.addEventListener('click', this.resetHandler.bind(this));
  }

  private initField() {
    this.broadcast(Messages.UPDATE_STATE);
    this.fieldContainer.addEventListener('click', this.cellClickHandler.bind(this));
    this.animate(this.draw.bind(this));
  }
}

export default View;
