import { EventEmitter } from 'events';
import Spells from '../enums/Spells.js';
import Motions from '../enums/Motions.js';

export default class SpellService extends EventEmitter {
	constructor(motionService) {
		super();
		this.motionHistory = [];
		this.spells = [
			{
				name: "Expelliarmus",
				pattern: [Motions.Left]
			}
		];
		motionService.on("motion", (direction) => {
			this.onMovement(direction)
		});
	}

	onMovement(direction) {
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
		this.emit("spell", Spells.Expelliarmus);
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
