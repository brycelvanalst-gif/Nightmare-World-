// gameConfig.js

const gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: function() {
            // Load assets here
        },
        create: function() {
            // Create game elements here
        },
        update: function() {
            // Update game logic here
        }
    }
};

export default gameConfig;