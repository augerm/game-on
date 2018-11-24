import Wizard from './wizard.js';
import MotionService from './services/motion-service.js';
import SpellService from './services/spell-service.js';

let motionService = new MotionService();
let spellService = new SpellService(motionService);
let wizard = new Wizard("Mark",1,[],"blue");
let opponent = new Wizard("Michael",1,[],"red");
opponent.isOpponent = true;
opponent.render();
