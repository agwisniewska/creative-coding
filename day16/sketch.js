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
];

const sketch = () => {

  return ({ context, width, height }) => {

    var circles = [];
    var minRadius = 2;
    var maxRadius = 100;
    var totalCircles = 500;
    var margin = 100;
    var createCircleAttempts = 100;
 
    function createAndDrawCircle() {
      const strokeRandomVal = floor(random(0, 5));
      const strokeColor = colors[strokeRandomVal];

      var newCircle;
      var circleSafeToDraw = false;
      for(var tries = 0; tries < createCircleAttempts; tries++) {
        newCircle = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          radius: minRadius,
          color: strokeColor,
        }
        
        if(doesCircleCollide(newCircle)) {
          continue;
        } else {
          circleSafeToDraw = true;
          break;
        }
      }
    
      if(!circleSafeToDraw) {
        return;
      }


      for(var radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
        newCircle.radius = radiusSize;
        if(doesCircleCollide(newCircle)){
          newCircle.radius--;
          break;
        } 
      }
    

      circles.push(newCircle);

      context.fillStyle = newCircle.color;
      context.beginPath();
      context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2 * Math.PI);
      context.fill();
    }

    function doesCircleCollide(circle) {
      if (circles.length > 0) {
  
        for (var i = 0; i < circles.length; i++) {
          var otherCircle = circles[i];
          var a = circle.radius + otherCircle.radius;
          var x = circle.x - otherCircle.x;
          var y = circle.y - otherCircle.y;
  
          if (a >= Math.sqrt((x*x) + (y*y))) {
            return true;
          }

          if(circle.x + circle.radius >= (width - margin) ||
            circle.x - circle.radius <= margin) {
           return true;
         }
           
         if(circle.y + circle.radius >= (height - margin) ||
             circle.y - circle.radius <= margin) {
           return true;
         }
        }

        
      }

      return false;
    }


    for (var i = 0; i <= totalCircles; i++) {
      createAndDrawCircle();
    }
  };
}

canvasSketch(sketch, settings);