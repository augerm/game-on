import MotionService from './services/motion-service.js'
import SpellService from './services/spell-service.js';
import Spells from './enums/Spells.js';

export default class Wizard {
  constructor(name,color){
    this.name = name || "Wizard";
    this.color = color || "blue";
    this.level = 1;
    this.isOpponent = false;
    this.element = this.makeElement();
    this.img = this.makeImage();
    this.motionService = new MotionService();
    this.spellService = new SpellService(this.motionService);
    this.spellService.on("spell", (spell) => {
      this.cast(spell);
    });
  }
  makeElement(){
    let wizard = document.createElement("DIV");
    document.body.appendChild(wizard);
    return wizard;
  }
  makeImage(){
    let image = document.createElement("IMG");
    image.src = "./img/"+this.color+".png";
    this.element.appendChild(image);
    return image;
  }
  cast(spell){
    let label = document.createElement("DIV");
    label.innerHTML = "spell";
    label.style.color = this.color;
    this.img.src = "./img/"+this.color+"_cast.gif";
    this.element.appendChild(label);
  }
  render(){
    if(this.isOpponent){
      this.img.style.transform = "scale(-1,1)";
    }
    if(!this.isOpponent){
    }
  }
  delete(){
    this.element.parentNode.removeChild(this.element);
  }
}
