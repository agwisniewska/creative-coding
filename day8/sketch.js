const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const pallets = require('nice-color-palettes');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  dimensions: [1080, 1080],
};

const sketch = () => {

  background(255);
  return ({ context, width, height }) => {
    for (var x = 100; x <= width - 100; x+= 10) {

      for (var y = 100; y <= height - 100; y += 10) {
          stroke('#F69A97');
          line(x, y, 200, 200);
        }
      } 
  };
};

canvasSketch(sketch, settings);