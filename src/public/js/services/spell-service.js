import Motions from '../enums/Motions.js';

export default class SpellService {
	constructor(motionService) {
		this.motionHistory = [];
		this.spells = [
			{
				name: "Expelliarmus",
				pattern: [Motions.Left]
			}
		];
		motionService.on('left', (velocity) => { this.onMovement(Motions.Left, velocity) });
		motionService.on('right', (velocity) => { this.onMovement(Motions.Right, velocity) });
		motionService.on('up', (velocity) => { this.onMovement(Motions.Up, velocity) });
		motionService.on('down', (velocity) => { this.onMovement(Motions.Down, velocity) });
	}

	onMovement(direction, velocity) {
		switch(direction) {
			case Motions.Left:
				this.onLeft();
				break;
			case Motions.Right:
				this.onRight();
				break;
			case Motions.Up:
				this.onUp();
				break;
			case Motions.Down:
				this.onDown();
				break;
		}

		let spell = this.getSpell();
	}

	onLeft(velocity) {
		this.motionHistory.push(Motions.Left);
		alert("Expelliarmus");
	}

	onRight(velocity) {
		this.motionHistory.push(Motions.Right);
	}

	onUp(velocity) {
		this.motionHistory.push(Motions.Up);
	}

	onDown(velocity) {
		this.motionHistory.push(Motions.Down);
	}

	getSpell() {

		this.motionHistory.splice(0)
	}
}