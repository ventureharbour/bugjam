import {BugGame} from "../../game";

export interface BugInitialise {
	scene: Phaser.Scene,
	x: number,
	y: number,
	sprite: string
}

export default abstract class Bug extends Phaser.Physics.Arcade.Sprite {
	public speed: number;

	constructor(init: BugInitialise, speed: number) {
		super(init.scene, init.x, init.y, init.sprite)
		init.scene.add.existing(this)
		init.scene.physics.add.existing(this)

		this.speed = speed;

		this.setCollideWorldBounds(true)
			.setBounce(0.1)
	}

	private lookAtAngle(rel_x: number, rel_y: number): number {
		return ((180 / Math.PI) * -Math.atan2(rel_x, rel_y)) - 180
	}

	public update(mouseX: number, mouseY: number, click: boolean) {
		this.setAngle(this.lookAtAngle(mouseX - this.x, mouseY - this.y))
		if (click) {
			if (mouseX !== this.x && mouseY !== this.y) {
				this.setVelocity(
					this.speed * Math.sin(this.angle * Math.PI / 180),
					this.speed * Math.cos((this.angle - 180) * Math.PI / 180),
				)
			}
		} else {
			this.setVelocity(0, 0)
		}
	}
}
