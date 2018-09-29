import Messages from '../Messages';
import { ConfigT, ComponentT } from '../Types';

const config: (selector: string) => ConfigT = selector => ({
  selector,
  controls: {
    selector: `${selector}__controls`,
    components: {
      reset: {
        selector: `${selector}__button`,
        modifier: 'reset',
        title: 'Reset',
      },
      play: {
        selector: `${selector}__button`,
        modifier:'run',
        title: 'Pause',
        titlePaused : 'Run',
      },
      speed: {
        selector: `${selector}__slider`,
        class:`${selector}__slider`,
        modifier: 'speed',
        auxSelector: `${selector}__subtitle`,
        labelSelector:`${selector}__label`,
        title: 'Speed',
        reporter: val => `${(1000 / val).toFixed(2)} renders/sec`,
        minVal: 50,
        maxVal: 700,
        initVal: 700,
        message: Messages.UPDATE_SPEED,
      },
      width: {
        selector: `${selector}__slider`,
        modifier: 'width',
        auxSelector: `${selector}__subtitle`,
        labelSelector:`${selector}__label`,
        title: 'Width',
        reporter: val => `${val} cells`,
        minVal: 5,
        maxVal: 50,
        initVal: 10,
        message: Messages.UPDATE_WIDTH,
      },
      height: {
        selector: `${selector}__slider`,
        modifier: 'height',
        labelSelector:`${selector}__label`,
        auxSelector: `${selector}__subtitle`,
        title: 'Height',
        reporter: val => `${val} cells`,
        minVal: 5,
        maxVal: 50,
        initVal: 10,
        message: Messages.UPDATE_HEIGHT,
      },
      message: {
        selector: `${selector}__message`,
        title: 'Stability',
        textStable: 'Game is stable',
        textUnstable: 'Game is playing',
      },
    },
  },
  field:{
    wrapperSelector:`${selector}__wrapper`,
    selector: `${selector}__field`,
    cellSelector: `${selector}__cell`,
  },

});
export default config;
