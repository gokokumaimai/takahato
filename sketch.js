// タカハトゲームのシミュレータ
const STEP = 30;
const R = 50;

let creature;

function setup() {
  createCanvas(windowWidth, windowHeight);
  creature = new Creature();
}

function draw() {
  background('skyblue');
  creature.update();
  creature.move();
  creature.draw();
}
