import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import {Game} from "phaser";

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  }
}

window.addEventListener('load', () => {
  const game = BugGame.getInstance()
})

export class BugGame {
  private static instance: Game;

  public static getInstance() {
    if (!BugGame.instance) {
      BugGame.instance = new Phaser.Game(config)
    }
    return BugGame.instance
  }
}
