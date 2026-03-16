// main.js

// Game Initialization
const Game = {
    canvas: document.getElementById("gameCanvas"),
    context: canvas.getContext("2d"),
    scenes: {},
    currentScene: null,

    init: function() {
        this.loadAssets();
        this.setupScenes();
        this.switchToScene("loading");
    },

    loadAssets: function() {
        // Load game assets such as images and sounds.
        console.log("Loading assets...");
    },

    setupScenes: function() {
        this.scenes.loading = new LoadingScene(this);
        this.scenes.mainMenu = new MainMenuScene(this);
        this.scenes.gameplay = new GameplayScene(this);
        // Add more scenes as needed
    },

    switchToScene: function(sceneName) {
        if (this.currentScene) {
            this.currentScene.unload();
        }
        this.currentScene = this.scenes[sceneName];
        if (this.currentScene) {
            this.currentScene.load();
        }
    },

    gameLoop: function() {
        requestAnimationFrame(this.gameLoop.bind(this));
        if (this.currentScene) {
            this.currentScene.update();
            this.currentScene.render();
        }
    }
};

// Start the game
window.onload = () => {
    Game.init();
    Game.gameLoop();
};
