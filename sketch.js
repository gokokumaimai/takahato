// タカハトゲームのシミュレータ
const STEP = 30;
const R = 50;

let plants = new Plants();

function setup() {
  createCanvas(windowWidth, windowHeight);
  const p = createVector(windowWidth, windowHeight).div(2); // 画面中央
  const plant = new Plant(p);
  plants.add(plant);
}

function draw() {
  background('skyblue');
  creature.update();
  creature.move();
  creature.draw();
}
