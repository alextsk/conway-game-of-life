import Messages from '../Model/Messages';

const config = selector => ({
  controls:{
    selector: `${selector}__controls`,
    components: {
      reset: {
        selector: '#reset',
        title: 'Reset',
      },
      play: {
        selector: '#run',
        title: 'Pause',
      },
      speed: {
        selector: '#speed',
        auxSelector: '#speed-number',
        title: 'Speed',
        reporter: val => `${(1000 / val).toFixed(2)} renders/sec`,
        minVal: 100,
        maxVal: 2000,
        initVal: 7000,
        message: Messages.SPEED,
      },
      width: {
        selector: '#width',
        auxSelector: '#width-number',
        title: 'Width',
        reporter: val => `${val} cells`,
        minVal: 5,
        maxVal: 100,
        initVal: 10,
        message: Messages.WIDTH,
      },
      height: {
        selector: '#height',
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
    selector: `${selector}__field`,
  },

});
export default config;
