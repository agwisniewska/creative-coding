const canvasSketch = require('canvas-sketch');
const pallets = require('nice-color-palettes');
const random = require('canvas-sketch-util/random');

// Grab P5.js from npm
const p5 = require('p5');
const { XML } = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  webgl: true,
  dimensions: [512, 512],
};


const sketch = () => {
  let lineNo = 0;
  let color = random.pick(pallets);
  let x = (width/4);
  let y = (height/4);
  let variation;

  
  return ({ context, width, height }) => {
    strokeWeight(1);
    background(255);


    while (lineNo < 10) {
      color = random.pick(pallets);
      variation = Math.floor(random.createRandom().range(20, 100));

      console.log((lineNo % 3 !== 0));

      (lineNo % 3 !== 0) ? strokeWeight(5) : strokeWeight(1);

      stroke(random.pick(color));
      if (x <= (width * 0.75) && y <= (height * 0.75)) {
        y += (128/5)
        x += (128/5);
        line(128+variation, y, x-variation, 128)
      }
     
      lineNo++;
    }

  };
};

canvasSketch(sketch, settings);
