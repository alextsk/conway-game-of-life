import View from '../View/View';
import Model from '../Model/Model';

interface IController {
  addView(view: View): View;
  removeView(view: View): void;
  addModel(model: Model): Model;
  removeModel(model: Model): void;
}

export default IController;
