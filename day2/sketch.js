const canvasSketch = require('canvas-sketch');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  webgl: true,
  dimensions: [512, 512],
};

const head = () => {
  noStroke();
  fill(0);
  ellipse(256, 256, 70, 70);
  fill(255);
  ellipse(270, 250, 20, 20);

  fill(0);
  ellipse(275, 250, 10, 10);

  fill(150);
  ellipse(255, 250, 7, 7);
  ellipse(270, 265, 7, 7);
  ellipse(270, 235, 5, 5);

  stroke('black');
  strokeWeight(1);
  line(220, 220, 270, 280);
  line(290, 255, 300, 260);
  line(270, 200, 260, 250);
};

const neck = () => {
  stroke('black');
  line(260, 280, 260, 330);
  line(265, 280, 265, 330);
  line(255, 280, 255, 330);
};

const body = () => {
  fill(100);
  noStroke();
  ellipse(250, 390, 40, 40);
  fill(0);
  noStroke();
  rect(225, 320, 50, 70);

  stroke(255);
  strokeWeight(2);
  line(220, 330, 280, 330);
};

const sketch = () => {
  strokeWeight(2);
  background(255);

  return ({ context, width, height }) => {
    head();
    neck();
    body();
  };
};

canvasSketch(sketch, settings);
