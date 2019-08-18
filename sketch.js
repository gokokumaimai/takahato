// タカハトゲームのシミュレータ
const STEP = 30;
const R = 50;
const MAX_WAIT = 30;
const MOVE = 10;

let creature;
let creatures = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  creature = new Creature();
  creatures.push(new Creature());
  creatures.push(new Creature());
  creatures.push(new Creature());
  creatures.push(new Creature());
  creatures.push(new Creature());
  creatures.push(new Creature());
}

function draw() {
  background(10);
  creature.move();
  creature.draw();
  background(100);
  for (const creature of creatures) {
    creature.move();
    creature.draw();
  }
}