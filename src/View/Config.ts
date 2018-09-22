import Messages from '../Utilities/Messages';

const config = selector => ({
  selector,
  controls:{
    selector: `${selector}__controls`,
    components: {
      reset: {
        selector: `${selector}__button--reset`,
        title: 'Reset',
      },
      play: {
        selector: `${selector}__button--run`,
        title: 'Pause',
        titlePaused : 'Run',
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
        message: Messages.UPDATE_SPEED,
      },
      width: {
        selector: `${selector}__slider--width`,
        auxSelector: '#width-number',
        title: 'Width',
        reporter: val => `${val} cells`,
        minVal: 5,
        maxVal: 100,
        initVal: 10,
        message: Messages.UPDATE_WIDTH,
      },
      height: {
        selector: `${selector}__slider--height`,
        auxSelector: '#height-number',
        title: 'Height',
        reporter: val => `${val} cells`,
        minVal: 5,
        maxVal: 100,
        initVal: 10,
        message: Messages.UPDATE_HEIGHT,
      },
      message: {
        selector: `${selector}__slider--message`,
        textStable: 'Game is stable',
        textUnstable: 'Game is playing',
      },
    },
  },
  field:{
    selector: `${selector}__field`,
    cellSelector: `${selector}__cell`,
  },

});
export default config;
