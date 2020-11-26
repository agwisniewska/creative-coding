const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const pallets = require('nice-color-palettes');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  dimensions: [512, 512],
};

const sketch = () => {

  background(255);
  return ({ context, width, height }) => {
    for (var x = 0; x <= width; x+= 8) {

      for (var y = 0; y <= height; y += 8) {
          line(x, y, 100, 100);
        }
      } 
  };
};

canvasSketch(sketch, settings);