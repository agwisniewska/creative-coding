const canvasSketch = require('canvas-sketch');
// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  dimensions: [1080, 1080],
};

/* SCSS HEX  pallete */ 
// $cyber-grape: #564787ff;
// $languid-lavender: #dbcbd8ff;
// $azure-x-11-web-color: #f2fdffff;
// $powder-blue: #9ad4d6ff;
// $oxford-blue: #101935ff;

const sketch = () => {

  let steps = 40;
  let step = (width/steps);
  strokeWeight(5);
  noLoop();

  return ({ context, width, height }) => {
      background('#FFFFFF');

      for (var i = 3*step; i <= width -  4*step; i += step) {
        for (var j = 3*step; j <= height - 4*step; j += step) {
          let ran = floor(random(0, 2));
          switch (ran) {
            case 0:
              console.log('here');
              stroke('#FB76C1');
              break;
            case 1: 
              stroke('#F69A97')
              break;
          }
          if (floor(random(0, 1) > 0.5)) {
            line(i, j, (i + step), (j + step));
          } else {
            line((i + step), j, i, (j + step));
          }
        }
      }
    };
}

canvasSketch(sketch, settings);



