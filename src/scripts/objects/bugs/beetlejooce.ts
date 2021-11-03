import Bug from "./bug";

export default class Beetlejooce extends Bug {
	constructor(init: {scene: Phaser.Scene, x: number, y: number, sprite: string}, speed: number) {
		super(init, speed)
	}
}
