export default class MotionService {
	constructor() {
		console.log("Hello Motion Service");
		window.addEventListener('devicemotion', (evt) => { this.onDeviceMotion(evt) });
	}

	onDeviceMotion(evt) {
		console.log(event.acceleration.x);
	}
}