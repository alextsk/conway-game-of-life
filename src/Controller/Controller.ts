import Messages from '../Utilities/Messages';
import Model from '../Model/Model';
import View from '../View/View';

class Controller {
  private views = [];
  private models = [];
  
  resetObservers() {
    this.views.forEach((view) => {
      [Messages.UPDATE_STATE, 
        Messages.UPDATE_WIDTH,
        Messages.TOGGLE_CELL,
        Messages.UPDATE_HEIGHT,
        Messages.RESET,
      ].forEach(message => 
        view.addObserver(message, payload => 
          this.models.forEach(model => model.broadcast(message, payload)),
        ),
        );
    });

    this.models.forEach((model) => {
      [Messages.STATE_UPDATED, 
        Messages.STATUS_CHANGED]
      .forEach(message =>
        model.addObserver(message, (payload) => {
          this.views.forEach(view => view.broadcast(message, payload));
        })
      );
      // model.addObserver(Messages.STATE_UPDATED, (grid) => {
      //   this.views.forEach(view => view.broadcast(Messages.STATE_UPDATED, grid));
      // });
  
      // model.addObserver(Messages.STATUS_CHANGED, (stability) => {
      //   this.views.forEach(view => view.broadcast(Messages.STATUS_CHANGED, stability));
      // });
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
