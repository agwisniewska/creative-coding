const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
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
 
  const COUNT = 50;
  const MARGIN = 100;
  const BORDER = 0.45;

  const pallet = random.pick(pallets)

  const createGrid = () => {
    let points = [];
    for (let x = 0; x <= COUNT; x++) {
      for (let y = 0; y <= COUNT; y++) {
        let u = x / COUNT;
        let v = y / COUNT;
        let noisedRadius = Math.abs(random.noise2D(u, v)) * 0.1;

        points.push({
          rotation: random.noise2D(u, v),
          color: random.pick(pallet),
          radius: noisedRadius,
          position: [u, v]
        })
      }
    }

    return points;
  }


const dots = createGrid().filter(() => random.value() > BORDER)
  return ({ context, width, height }) => {
    noStroke();
    fill('white');
    rect(0, 0, width, height)
    dots.forEach(dot => {
      console.log(dot)
      let {radius, position, color,rotation} = dot;
      let [u, v] = position;
      const pointX = lerp(MARGIN, width - MARGIN, u);
      const pointY = lerp(MARGIN, width - MARGIN, v);
      

      context.save();
      context.fillStyle = color;
      context.font = `${radius * width}px Open Sans`;

      context.translate(pointX, pointY);
      context.rotate(rotation);
      context.fillText('life', 0, 0);

      context.restore();
    })
 

  };
};

canvasSketch(sketch, settings);
