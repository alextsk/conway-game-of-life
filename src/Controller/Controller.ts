import Messages from '../Utilities/Messages';
import Model from '../Model/Model';
import View from '../View/View';

class Controller {
  constructor(model: Model, view: View) {

    view.addObserver(Messages.UPDATE, () => {
      model.broadcast(Messages.UPDATE);
    });

    model.addObserver(Messages.REDRAW, (grid) => {
      view.broadcast(Messages.REDRAW, grid);
    });

    view.addObserver(Messages.WIDTH, (width) => {
      model.broadcast(Messages.WIDTH, width);
    });

    model.addObserver(Messages.GAMESTATUS, (stability) => {
      view.broadcast(Messages.GAMESTATUS, stability);
    });

    view.addObserver(Messages.TOGGLE, (coordinates) => {
      model.broadcast(Messages.TOGGLE, coordinates);
    });

    view.addObserver(Messages.HEIGHT, (height) => {
      model.broadcast(Messages.HEIGHT, height);
    });

    view.addObserver(Messages.RESET, () => {
      model.broadcast(Messages.RESET);
    });
  }
}
export default Controller;
