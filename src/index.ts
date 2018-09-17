import './styles.css';

import Messages from './Utilities/Messages';
import Model from './Model/Model';
import View from './View/View';
import Controller from './Controller/Controller';

const ctrl = new Controller();
ctrl.addModel(new Model());
ctrl.addView(new View('.game'));
