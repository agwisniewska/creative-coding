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


const colorsAll = [
  '#EDE342ff',
  '#F2BF6Cff',
  '#F69A97ff',
  '#FB76C1ff',
  '#FF51EBff'
]
const sketch = () => {
  return ({ context, width, height }) => {
    var step = 25;
    var lines = [];
    let randomFromRange;
    // Create the lines
    for(var i = step + 50; i < height - step - 50; i += step) {
      let singleLine = [];

      for(var j = step + 50; j < width - step - 50; j+= step) {
        let distanceToCenter = Math.abs(j - width/2);
        let widthToShrinkLinesVariation = 250
        let variance = Math.max(width / 2 - widthToShrinkLinesVariation - distanceToCenter, 0);

        let random = Math.random() * variance * (-0.5);

        let point = {x: j, y: i + random};

        singleLine.push(point);
      }

      randomFromRange = floor(random(0, 5));

      lines.push({line: singleLine});
    }
    // Do the drawing

    for(var i = 2; i < lines.length; i++) {  
      beginShape();

      context.moveTo(lines[i].line[0].x, lines[i].line[0].y)

      for(var j = 0; j < lines[i].line.length; j++) {


        var xc;
        var yc;

        if (lines[i].line[j+1] !== undefined) {
          xc =  (lines[i].line[j].x + lines[i].line[j + 1].x) / 2;
          yc = (lines[i].line[j].y + lines[i].line[j + 1].y) / 2;
        };
        context.quadraticCurveTo(lines[i].line[j].x, lines[i].line[j].y, xc, yc);
      }


      context.save();
      context.globalCompositeOperation = 'destination-out';
      context.fill();
      context.restore();

      context.lineWidth = 2;

      context.stroke();
    }

    }
  };

canvasSketch(sketch, settings);



