export default class Wizard {
  constructor(name,level,spells,color){
    this.name = name || "Wizard";
    this.level = level || 1;
    this.spells = spells || [];
    this.color = color || "blue";
    this.isOpponent = false;
    this.element = this.makeElement();
  }
  makeElement(){
    let element = document.createElement("IMG");
    element.src = "./img/"+this.color+".png";
    document.body.appendChild(element);
    return element;
  }
  render(){
    if(this.isOpponent){
      this.element.style.transform = "scale(-1,1)";
    }
    if(!this.isOpponent){
    }
  }
  delete(){

  }
}
