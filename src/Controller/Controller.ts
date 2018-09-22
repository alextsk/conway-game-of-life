import {viewMessages, modelMessages} from '../Utilities/Messages';
import Model from '../Model/Model';
import View from '../View/View';

class Controller{
  private views = [];
  private models = [];

  private subcribeModelsToView(view: View): void {
    viewMessages.forEach(message => 
      view.addObserver(message, (payload) => 
        this.models.forEach(model => 
          model.broadcast(message, payload)
        )
      )
    )
  }

  private subscribeViewsToModel(model: Model): void {
    modelMessages.forEach(message => 
      model.addObserver(message, (payload) => 
        this.views.forEach(view => 
          view.broadcast(message, payload)
        )
      )
    )
  }

  public addView(view: View): View {
    this.views.push(view);
    this.subcribeModelsToView(view);
    return view;
  }

  public removeView(viewToRemove : View): void {
    this.views = this.views.filter(view => view !== viewToRemove);
  }

  public addModel(model: Model): Model {
    this.models.push(model);
    this.subscribeViewsToModel(model);
    return model;
  }

  public removeModel(modelToRemove: Model): void {
    this.models = this.models.filter(model => model !== modelToRemove);
  }
}

export default Controller;
