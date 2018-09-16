import './styles.css';

import Messages from './Utilities/Messages';
import Model from './Model/Model';
import View from './View/View';
import Controller from './Controller/Controller';

new Controller(new Model(), new View('.game'));
