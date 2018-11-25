export default class SpeechService {
	constructor() {

	}

	speak() {
		const synth = window.speechSynthesis;
		const utterThis = new SpeechSynthesisUtterance("Expelliarmus");
		utterThis.pitch = 1;
		utterThis.rate = 1;
		synth.speak(utterThis);
	}
}