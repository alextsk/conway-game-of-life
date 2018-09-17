import Messages from '../Utilities/Messages';
import Model from '../Model/Model';
import View from '../View/View';

class Controller {
  private views = [];
  private models = [];
  
  resetObservers() {
    this.views.forEach((view) => {
      view.addObserver(Messages.UPDATE, () => {
        this.models.forEach(model => model.broadcast(Messages.UPDATE));
      });

      view.addObserver(Messages.WIDTH, (width) => {
        this.models.forEach(model => model.broadcast(Messages.WIDTH, width));
      });

      view.addObserver(Messages.TOGGLE, (coordinates) => {
        this.models.forEach(model => model.broadcast(Messages.TOGGLE, coordinates));
      });
  
      view.addObserver(Messages.HEIGHT, (height) => {
        this.models.forEach(model => model.broadcast(Messages.HEIGHT, height));
      });
  
      view.addObserver(Messages.RESET, () => {
        this.models.forEach(model => model.broadcast(Messages.RESET));
      });
    });

    this.models.forEach((model) => {
      model.addObserver(Messages.REDRAW, (grid) => {
        this.views.forEach(view => view.broadcast(Messages.REDRAW, grid));
      });
  
      model.addObserver(Messages.GAMESTATUS, (stability) => {
        this.views.forEach(view => view.broadcast(Messages.GAMESTATUS, stability));
      });
    });
  }

  addView(view) {
    this.views.push(view);
    this.resetObservers();
    return view;
  }

  removeView(viewToRemove) {
    this.views = this.views.filter(view => view !== viewToRemove);
    this.resetObservers();
  }

  addModel(model) {
    this.models.push(model);
    this.resetObservers();
    return model;
  }

  removeModel(modelToRemove) {
    this.models = this.models.filter(model => model !== modelToRemove);
    this.resetObservers();
  }

}
export default Controller;
