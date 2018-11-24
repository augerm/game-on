import MotionService from './services/motion-service.js';
import Wizard from './wizard.js';

let motionService = new MotionService();
let wizard = new Wizard("Mark",1,[],"blue");
let opponent = new Wizard("Michael",1,[],"red");
opponent.isOpponent = true;
opponent.render();
