function easing(x) {
  return sqrt(1 - (x - 1) ** 2);
  return x;
  // return 4 * (x - 0.5) ** 3 + 0.5;
}

class Creature {
  constructor() {
    // 画面中央
    this.p = createVector(windowWidth / 5, windowHeight / 2);
    this.path = [];
    this.wait = [];
  }
  move() {
    if (this.path.length > 10) {
      // １フレーム移動
      this.p = this.path.shift();
      this.wait.push(this.p);
    } else if (this.wait.length > 0) {
      // その場で待つ
      this.wait.shift();
    } else {
      // STEPフレームの移動を決める
      // 等速運動
      const x = random(R, windowHeight - R);
      const y = random(R, windowWidth  - R);
      const q = createVector(x, y);
      //const STEP = int(this.p.dist(q) / MOVE);
      for (let i = 5; i <= STEP; i++) {
        const x = i / STEP;
        this.path.push(p5.Vector.lerp(this.p, q, easing(x)));
      }
    }
  }
  draw() {
    for (const w of this.wait) {
      circle(w.x, w.y, 10);
    }
    fill('#8B0000');
    circle(this.p.x, this.p.y, 100);
  }
}