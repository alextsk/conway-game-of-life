import Messages from '../Utilities/Messages';
import Config from './Config';
import Observer from '../Utilities/Observer';
import Template from './Template/Template';
import IView from './IView';
import bind from 'bind-decorator';
import Animate from '../Utilities/Animate';

class View extends Observer implements IView{
  private stable: boolean;
  private running : boolean = true;
  private template: Template;
  private statusMessage: HTMLElement;
  private controlsContainer: HTMLElement;
  private fieldContainer :HTMLElement;
  private playButton: HTMLElement;
  private config;
  private animation: Animate;

  constructor(rootSelector) {
    super();
    this.config = Config(rootSelector);
    this.animation = new Animate(this.config.controls.components.speed.initVal);
    this.initHTML();
    this.initObservers();
    this.initControls();
    this.initField();
  }

  private initHTML(): void {
    this.template = new Template(this.config);
    const gameContainer = document.querySelector(this.config.selector);
    gameContainer.innerHTML = (this.template.renderControls()) + (this.template.renderField());
    this.controlsContainer = gameContainer.querySelector(this.config.controls.selector);
    this.fieldContainer = gameContainer.querySelector(this.config.field.selector);
    this.statusMessage = gameContainer.querySelector(this.config.controls.components.message.selector);/*tslint:disable-line */
  }

  private initObservers(): void {
    this.addObserver(Messages.UPDATE_SPEED, (value) => { 
      this.animation.changeSpeed(value);
    });

    this.addObserver(Messages.STATE_UPDATED, (grid) => { 
      this.fieldContainer.innerHTML = this.template.renderField(grid);
    });

    this.addObserver(Messages.STATUS_CHANGED, (stability) => {
      this.stable = stability;
    });
  }

  private initControls(): void {
    const components = this.config.controls.components;
    this.setSliderEvents(this.controlsContainer, components.speed, this.handleSpeedSliderChange);
    this.setSliderEvents(this.controlsContainer, components.width, this.handleWidthSliderChange);
    this.setSliderEvents(this.controlsContainer, components.height, this.handleHeightSliderChange);

    this.playButton = this.controlsContainer.querySelector(components.play.selector);
    this.playButton.addEventListener('click', this.handlePlayButtonClick);

    const resetBtn = this.controlsContainer.querySelector(components.reset.selector);
    resetBtn.addEventListener('click', this.handleResetButtonClick);
  }
  
  private initField(): void {
    this.broadcast(Messages.UPDATE_STATE);
    this.fieldContainer.addEventListener('click', this.handleCellClick);
    this.animation.run(this.draw);
  }

  private setSliderEvents(container, opts, handler): void {
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

  @bind
  private draw(): void {
    if (this.running) {
      const messageConfig = this.config.controls.components.message;
      this.statusMessage.innerHTML = messageConfig[this.stable ? 'textStable' : 'textUnstable'];
      this.broadcast(Messages.UPDATE_STATE);
    }
  }

  @bind
  private handleCellClick(event): void {
    if (event.target.classList.contains(`js-${this.config.field.cellSelector}`)) {
      const data = event.target.dataset;
      this.broadcast(Messages.TOGGLE_CELL, data);
    }
  }

  @bind
  private handleResetButtonClick(): void {
    this.broadcast(Messages.RESET);
    this.broadcast(Messages.UPDATE_STATE);
  }

  @bind
  private handleSpeedSliderChange(event): void {
    this.broadcast(Messages.UPDATE_SPEED, event.target.value);
  }

  @bind
  private handleWidthSliderChange(event): void {
    this.broadcast(Messages.UPDATE_WIDTH, event.target.value);
  }

  @bind
  private handleHeightSliderChange(event): void {
    this.broadcast(Messages.UPDATE_HEIGHT, event.target.value);
  }

  @bind
  private handlePlayButtonClick(): void {
    this.running = !this.running;
    const playConfig = this.config.controls.components.play;
    this.playButton.innerHTML = playConfig[this.running ? 'title' : 'titlePaused'];
  }
}

export default View;
