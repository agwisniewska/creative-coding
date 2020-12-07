const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

// Grab P5.js from npm
const p5 = require('p5');
const { XML } = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  webgl: true,
  dimensions: [1080, 1080],
};


const colors = [
  '#EDE342ff',
  '#F2BF6Cff',
  '#F69A97ff',
  '#FB76C1ff',
  '#FF51EBff'
]

const sketch = () => {
  let lineNo = 0;
  let x = (width/4);
  let y = (height/4);
  let variation;

  
  return ({ context, width, height }) => {
    strokeWeight(1);
    background(255);


    while (lineNo < 10) {
      color = colors[floor(random.range(0, 5))];
      variation = Math.floor(random.createRandom().range(20, 200));

      console.log((lineNo % 3 !== 0));

      (lineNo % 3 !== 0) ? strokeWeight(5) : strokeWeight(1);

      stroke(color);
      if (x <= width && y <= height) {
        y += ((height / 4)/5)
        x += ((width / 4)/5);
        line((width/4)+variation, y, x-variation, (height/4))
      }
     
      lineNo++;
    }

  };
};

canvasSketch(sketch, settings);
