import Messages from '../Utilities/Messages';
import Config from './Config';
import Observer from '../Utilities/Observer';
import Template from './Template/Template';
import IView from './IView';
import bindDecorator from 'bind-decorator';
import Animate from '../Utilities/Animate';
import { ComponentT, ConfigT } from '../Utilities/Types';

class View extends Observer implements IView{
  private stable: boolean;
  private running : boolean = true;
  private template: Template;
  private statusMessage: HTMLElement;
  private controlsContainer: HTMLElement;
  private fieldContainer :HTMLElement;
  private playButton: HTMLElement;
  private config: ConfigT;
  private animation: Animate;

  constructor(rootSelector: string) {
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
    const {
      selector,
      controls: {
        selector: controlsSelector,
        components: {
          message: {
            selector: messageSelector,
          },
        },
      },
      field: { wrapperSelector },
    } = this.config;
    const gameContainer = document.querySelector(selector);
    gameContainer.innerHTML = `${(this.template.renderControls())}${(this.template.renderField())}`;
    this.controlsContainer = gameContainer.querySelector(controlsSelector);
    this.fieldContainer = gameContainer.querySelector(wrapperSelector);
    this.statusMessage = gameContainer.querySelector(messageSelector);
  }

  private initObservers(): void {
    this.addObserver(Messages.UPDATE_SPEED, this.onUpdateSpeed);
    this.addObserver(Messages.STATE_UPDATED, this.onStateUpdated);
    this.addObserver(Messages.STATUS_CHANGED, this.onStatusChanged);
    this.addObserver(Messages.RUNNING_CHANGED, this.onRunningChanged);
  }
  
  @bindDecorator
  private onRunningChanged() {
    this.running = !this.running;
    const playConfig = this.config.controls.components.play;
    this.playButton.innerHTML = playConfig[this.running ? 'title' : 'titlePaused'];
  }

  @bindDecorator
  private onStatusChanged(stability) {
    this.stable = stability;
  }

  @bindDecorator
  private onStateUpdated(grid)  {
    this.fieldContainer.innerHTML = this.template.makeTable(grid);
  }

  @bindDecorator
  private onUpdateSpeed(value) {
    this.animation.changeSpeed(value);
  }
  
  private initControls(): void {
    const { controls: { components: { speed, width, height, play, reset } } } = this.config;
    this.setSliderEvents(this.controlsContainer, speed, this.handleSpeedSliderChange);
    this.setSliderEvents(this.controlsContainer, width, this.handleWidthSliderChange);
    this.setSliderEvents(this.controlsContainer, height, this.handleHeightSliderChange);

    this.playButton = this.controlsContainer.querySelector(`${play.selector}--${play.modifier}`);
    this.playButton.addEventListener('click', this.handlePlayButtonClick);

    const resetBtn = this.controlsContainer.querySelector(`${reset.selector}--${reset.modifier}`);
    resetBtn.addEventListener('click', this.handleResetButtonClick);
  }
  
  private initField(): void {
    this.broadcast(Messages.UPDATE_STATE);
    this.fieldContainer.addEventListener('click', this.handleCellClick);
    this.animation.run(this.draw);
  }

  private setSliderEvents(
      container: HTMLElement,
      { auxSelector, selector, modifier, reporter, message, initVal }: ComponentT,
      handler: (event: MouseEvent) => void): void {
    const inputNode: HTMLInputElement = container.querySelector(`${selector}--${modifier}`);
    inputNode.value = `${initVal}`;
    const subtitleNode = container.querySelector(`${auxSelector}--${modifier}`);
    this.addObserver(message, (value) => {
      subtitleNode.innerHTML = reporter(value);
      return subtitleNode.innerHTML;
    });
    this.broadcast(message, inputNode.value);
    inputNode.addEventListener('change', handler);
  }

  @bindDecorator
  private draw(): void {
    if (this.running) {
      const messageConfig = this.config.controls.components.message;
      this.statusMessage.innerHTML = messageConfig[this.stable ? 'textStable' : 'textUnstable'];
      this.broadcast(Messages.UPDATE_STATE);
    }
  }

  @bindDecorator
  private handleCellClick(event: MouseEvent): void {
    if ((<HTMLInputElement>event.target).classList
      .contains(`js-${this.config.field.cellSelector.slice(1)}`)) {
      const data = (<HTMLInputElement>event.target).dataset;
      this.broadcast(Messages.TOGGLE_CELL, data);
    }
  }

  @bindDecorator
  private handleResetButtonClick(): void {
    this.broadcast(Messages.RESET);
    this.broadcast(Messages.UPDATE_STATE);
  }

  @bindDecorator
  private handleSpeedSliderChange(event): void {
    this.broadcast(Messages.UPDATE_SPEED, +event.target.value);
  }

  @bindDecorator
  private handleWidthSliderChange(event): void {
    this.broadcast(Messages.UPDATE_WIDTH, +event.target.value);
  }

  @bindDecorator
  private handleHeightSliderChange(event): void {
    this.broadcast(Messages.UPDATE_HEIGHT, +event.target.value);
  }

  @bindDecorator
  private handlePlayButtonClick(): void {
    this.broadcast(Messages.RUNNING_CHANGED);
  }
}

export default View;
