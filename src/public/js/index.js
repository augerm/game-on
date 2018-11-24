import Wizard from './wizard.js';
import MotionService from './services/motion-service.js';
import SpellService from './services/spell-service.js';

let wizard = new Wizard();
let motionService = new MotionService();
let spellService = new SpellService(motionService);
