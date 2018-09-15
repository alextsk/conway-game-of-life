import Events from './Events';
import Messages from '../Model/Messages';

class View {
  config;
  constructor(selector) {
    const controlsSelector = `${selector}__controls`;
    const fieldSelector = `${selector}__field`;
    this.config = {
      selector,
      controls:{
        selector: controlsSelector,
        components: {
          reset: {
            selector: `${selector}__button--reset`,
            title: 'Reset',
          },
          play: {
            selector: `${selector}__button--run`,
            title: 'Pause',
          },
          speed: {
            selector: `${selector}__slider--speed`,
            class:`${selector}__slider`,
            modifier: '--speed',
            auxSelector: '#speed-number',
            title: 'Speed',
            reporter: val => `${(1000 / val).toFixed(2)} renders/sec`,
            minVal: 100,
            maxVal: 2000,
            initVal: 700,
            message: Messages.SPEED,
          },
          width: {
            selector: `${selector}__slider--width`,
            auxSelector: '#width-number',
            title: 'Width',
            reporter: val => `${val} cells`,
            minVal: 5,
            maxVal: 100,
            initVal: 10,
            message: Messages.WIDTH,
          },
          height: {
            selector: `${selector}__slider--height`,
            auxSelector: '#height-number',
            title: 'Height',
            reporter: val => `${val} cells`,
            minVal: 5,
            maxVal: 100,
            initVal: 10,
            message: Messages.HEIGHT,
          },
        },
      },
      field:{
        selector: fieldSelector,
      },

    };

  }
  getEventsObject() {
    return new Events(this.config);
  }
}

export default View;
