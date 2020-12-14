const canvasSketch = require('canvas-sketch');

// Grab P5.js from npm

// Attach p5.js it to global scope

const settings = {

  dimensions: [1080, 1080],
};

const colorsAll = [
  '#EDE342ff',
  '#F2BF6Cff',
  '#F69A97ff',
  '#FB76C1ff',
  '#FF51EBff'
]

const sketch = () => {
 
  return ({ context, width, height }) => {
    context.lineWidth = 4;
    context.lineCap = 'round';
    
    var step = 40;
    var aThirdOfHeight = height/3;

    function draw(x, y, width, height, positions, color) {
      context.save();
      context.translate(x + width/2, y + height/2);
      context.rotate(Math.random() * 2);
      context.translate(-width/2, -height/2);

     
      for(var i = 0; i <= positions.length; i++) {
        context.beginPath();
        context.moveTo(positions[i] * width, 0);
        context.lineTo(positions[i] * width, height);
        context.strokeStyle = color;
        context.strokeWeight = 4;
        context.stroke();
      }

      context.restore();
    }


    for(var y = step + 100; y < height - step - 100; y += step) {
      for(var x = step + 100; x < width - step - 100; x+= step) {
        if(y < aThirdOfHeight) {
          draw(x, y, step, step, [0.5], colorsAll[0]);   
        } else if(y < aThirdOfHeight * 2) {
          draw(x, y, step, step, [0.2, 0.8], colorsAll[1]);      
        } else {
          draw(x, y, step, step, [0.1, 0.5, 0.9], colorsAll[2]);      
        }
      }
    }
  }
};


canvasSketch(sketch, settings);