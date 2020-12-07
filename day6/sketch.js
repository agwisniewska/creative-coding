const canvasSketch = require('canvas-sketch');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  dimensions: [1080, 1080],
};

const eye = () => {
  strokeWeight(2);

  const points = {
    first: {
      x: (width  + 20 )* 0.35,
      y: height / 2
    },
    second: {
      x: (width + 20)/2,
      y:height/2 + 25
    },
    third: {
      x: (width + 20) * 0.65,
      y: height /2,
    },
    fourth: {
      x: (width + 20)/2,
      y: height/2 - 28
    },
  }

  beginShape();
  curveVertex(points.first.x, points.first.y);
  curveVertex(points.first.x, points.first.y);

  curveVertex(points.second.x, points.second.y);

  curveVertex(points.third.x, points.third.y);


  curveVertex(points.fourth.x, points.fourth.y);
  curveVertex(points.fourth.x, points.fourth.y);

  endShape();
  fill(0);
  ellipse(width/2 + 15, height/2, 50, 50);
  fill(255);
  ellipse(width/2 + 23, height/2 + 8, 10, 10);

}


const drop = () => {
  strokeWeight(2);
  beginShape();

  vertex((width + 20) * 0.65, 266);

  bezierVertex(532 * 0.65, 266, 532 * 0.67, 296, 532 * 0.64, 290);
  endShape(CLOSE);
}
const sketch = () => {
  return (({context, height, width}) => {
      fill(255);
      strokeWeight(0);

      rect(0, 0, width, height);

      eye();

      drop();
  })
};

canvasSketch(sketch, settings);
