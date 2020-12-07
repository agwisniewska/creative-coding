const canvasSketch = require('canvas-sketch');
const pallets = require('nice-color-palettes');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
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
  let randomDisplacement = 15;
  let rotateMultiplier = 20;
  let offset = 10;

  let squareSize = 100;
  return ({ context, width, height }) => {
    for(var i = squareSize*3; i < width - squareSize - squareSize; i += squareSize) {
      for(var j = squareSize*3; j < height - squareSize - squareSize; j+= squareSize) {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        var rotateAmt = j / width * 0.010 * plusOrMinus * rotateMultiplier;
        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        var translateAmt = j / width * plusOrMinus * randomDisplacement;
        
        context.save();
        context.translate(i + translateAmt, j + offset);
        context.rotate(rotateAmt);
        context.beginPath();
      
        context.rect(-squareSize/2, -squareSize/2, squareSize, squareSize);

        var randomFromRange = floor(random(0, 5));

        context.shadowBlur = 20;
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
        context.shadowColor = colors[randomFromRange];

        context.fill();
        context.stroke();
        context.restore();
      }
      }
    }
  };


canvasSketch(sketch, settings);