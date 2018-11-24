import { EventEmitter } from 'events';
let _ = require('lodash');

export default class MotionService extends EventEmitter {
	constructor() {
		super();
		this.lastAlpha = 0;
		this.lastBeta = 0;
		this.lastGamma = 0;
		this.lastAbsolute = 0;
		this.statusEl = document.getElementById('status');
		this.statusEl.innerHTML = "Hello World";
		window.addEventListener('deviceorientation', _.throttle(this.onDeviceMotion.bind(this), 1000));
	}

	onDeviceMotion(event) {
		let alphaDelta = this.lastAlpha - event.alpha;
		let betaDelta = this.lastBeta - event.beta;
		let gammaDelta = this.lastGamma - event.gamma;
		let absoluteDelta = this.lastAbsolute - event.absolute;

		if(alphaDelta > 30) {
			alert("Up");
		} else if(alphaDelta < -30) {
			alert("Down");
		} else if(gammaDelta > 30) {
			alert("Left");
		} else if(gammaDelta < -30) {
			alert("Right");
		}

		this.lastAlpha = event.alpha;
		this.lastBeta = event.beta;
		this.lastGamma = event.gamma;
		this.lastAbsolute = event.absolute;

		this.statusEl.innerHTML = ` <h1>
			alphaDelta: ${alphaDelta}
			betaDelta: ${betaDelta}
			gammaDelta: ${gammaDelta}
			absoluteDelta: ${absoluteDelta}
			</h1> 
		`;
	}
}