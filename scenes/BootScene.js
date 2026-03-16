import { Scene, Loader } from 'phaser';

export default class BootScene extends Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load assets here
        this.load.image('exampleImage', 'assets/example-image.png');
        // Add more asset loading lines as needed
    }

    create() {
        this.scene.start('MainScene'); // Start the main scene after loading
    }
}