export default class SoundPlayer {
    audio: HTMLAudioElement;

    constructor(file: string) {
        this.audio = new Audio(file);
    }

    play() {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.currentTime = 0
        }
    }
}
