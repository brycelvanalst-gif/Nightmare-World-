// GameData.js

class GameData {
    constructor() {
        this.playerData = {};
        this.gameState = 'initial';
    }

    // Method to update player data
    updatePlayerData(playerId, data) {
        this.playerData[playerId] = { ...this.playerData[playerId], ...data };
    }

    // Method to get player data
    getPlayerData(playerId) {
        return this.playerData[playerId] || {};
    }

    // Method to update game state
    updateGameState(newState) {
        this.gameState = newState;
    }

    // Method to get game state
    getGameState() {
        return this.gameState;
    }
}

// Export the GameData class
module.exports = GameData;