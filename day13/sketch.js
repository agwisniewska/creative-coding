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

const sketch = () => {

  return ({ context, width, height }) => {

    function drawTriangle(pointA, pointB, pointC) {
      context.beginPath();
      context.moveTo(pointA.x, pointA.y);
      context.lineTo(pointB.x, pointB.y);
      context.lineTo(pointC.x, pointC.y);
      context.lineTo(pointA.x, pointA.y);
      context.closePath();
      var gray = Math.floor(Math.random()*25).toString(25);
      context.fillStyle = '#' + gray + gray + gray;
      context.fill();
      context.stroke();
    }

    var line, dot,
    odd = false,
    lines = [],
    gap = width / 8;

    for(var y = gap / 2 + 150; y <= height - 150; y+= gap) {
      odd = !odd;
      line = [];
      for(var x = gap / 4 + 150; x <= width - 150; x+= gap) {
        dot = {x: x + (odd ? gap/2 : 0), y: y};
        line.push({ 
          x: x + (Math.random()*.5 - .25) * gap  + (odd ? gap/2 : 0),
          y: y + (Math.random()*.5 - .25) * gap
        });
      }
      lines.push(line);

    }
      var dotLine;
      odd = true;

      for(var y = 0; y < lines.length - 1; y++) {
        odd = !odd;
        dotLine = [];
        for(var i = 0; i < lines[y].length; i++) {
          dotLine.push(odd ? lines[y][i]   : lines[y+1][i]);
          dotLine.push(odd ? lines[y+1][i] : lines[y][i]);
        }
        for(var i = 0; i < dotLine.length - 2; i++) {
          drawTriangle(dotLine[i], dotLine[i+1], dotLine[i+2]);
        }
      }


    }
  };

canvasSketch(sketch, settings);