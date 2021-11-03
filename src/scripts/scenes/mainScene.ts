import Bug from "../objects/bugs/bug";
import Beetlejooce from "../objects/bugs/beetlejooce";

export default class MainScene extends Phaser.Scene {
  private player: Bug;

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.player = new Beetlejooce({
      scene: this,
      x: this.cameras.main.width / 2,
      y: this.cameras.main.height / 2,
      sprite: 'bug'}, 500).setScale(0.1, 0.1);

    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)
  }

  update() {
    this.player.update(this.game.input.mousePointer.x, this.game.input.mousePointer.y, this.game.input.mousePointer.leftButtonDown())
  }
}
