let width = 800;
let height = 800;

let stars = [];
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 300; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  speed = map(mouseX, 0, width, 0, 4);
  translate(windowWidth / 2, windowHeight / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}