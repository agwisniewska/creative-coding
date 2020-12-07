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

const DEFAULT_VALUE = 0.5;

const sketch = () => {
  const pallet = random.pick(pallets)


  const createGrid = () => {
    let points = [];
    for (let y = 40; y <= height - 40; y+= 10) {
      for (let x = 40; x <= width - 40; x+= 10) {
        points.push({position: [x, y], color: random.pick(pallet) })
      }
    }

    return points;
  }

  const dots = createGrid().filter(() =>  {
    const value = random.value();
    return value > DEFAULT_VALUE
  });


  return ({ context, width, height }) => {
    fill(0);
    rect(0, 0, width, height);

    background(0);
   
    dots.forEach(dot => {
      const {position, color} = dot;
      const [u, v] = position;

      fill(color)
      console.log(dot);
      ellipse(u, v, 5, 5);

      stroke(100);

      line(40, v, v, 256)
      
      line(256, 256, width - 40, v)
    })
  };
};

canvasSketch(sketch, settings);