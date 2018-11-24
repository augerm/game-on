import { EventEmitter } from 'events';

export default class MotionService extends EventEmitter {
	constructor() {
		super();
		this.statusEl = document.getElementById('status');
		this.statusEl.innerHTML = "Hello World";
		this.initialized = false;
		window.addEventListener('devicemotion', (event) => { this.onDeviceMotion(event) });
	}

	onDeviceMotion(event) {
		if(event.accelerationIncludingGravity.y > 10) {
			alert("Expelliarmus");
		}
		this.emit('left', event.accelerationIncludingGravity.x);

		this.statusEl.innerHTML = ` <h1>
			x: ${Math.round(event.accelerationIncludingGravity.x)}
			y: ${Math.round(event.accelerationIncludingGravity.y)}
			z: ${Math.round(event.accelerationIncludingGravity.z)}
			</h1> 
		`;
	}
}