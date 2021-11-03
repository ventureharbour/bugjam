export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.image('bug', 'assets/img/bug.png')
  }

  create() {
    console.log("loading!")
    this.scene.start('MainScene')
  }
}
