const canvasSketch = require('canvas-sketch');
const pallets = require('nice-color-palettes');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();


// $corn: #EDE342ff;
// $maximum-yellow-red: #F2BF6Cff;
// $pastel-pink: #F69A97ff;
// $persian-pink: #FB76C1ff;
// $purple-pizzazz: #FF51EBff;
const colors = [
  '#EDE342ff',
  '#F2BF6Cff',
  '#F69A97ff',
  '#FB76C1ff',
  '#FF51EBff'
]

const settings = {
  p5: true,
  dimensions: [1080, 1080],
};

let margin = 25;
let w, h;
let c, r;
let cellWidth, cellHeight;
let foreground;


const generateBackground = () => {
  let steps = 40;
  let step = (width/steps);
  for (let i = 0 + 100; i < width - 100; i += 20) {
    for (let j = 0 + 100; j < height - 100; j += 20) {
      stroke('#000');
      fill('#fff');
      rect(i, j, step, step);
    }
  }
}

const generateRandomStyle = (start, end) => {

  const fillRandomVal = floor(random(0, 5));
  const generatedColor = colors[fillRandomVal]

  const strokeRandomVal = floor(random(0, 5));
  const strokeColor = colors[strokeRandomVal];
  
  foreground.stroke('#000')
  foreground.fill(generatedColor);

}

const generateForeground = () => {
  for (let i = 0; i <= r; i++) {
    for (let j = 0; j <= c; j++) {
      renderCell(i, j);
    }
  }
}


const renderRandomShape = (shapeX, shapeY) => {
  let start = random(0,  360);
  let stop = random(0, 360);

  generateRandomStyle(start, stop);
  if (abs(stop - start < 90)) {
    stop = random(0, 360);
  }

  let ran = random(0, 10);
  let shape = (ran < 5) ? CHORD : PIE;
  foreground.arc(shapeX, shapeY, cellWidth - 50, cellHeight - 50, start, stop, shape);
}

const renderCell = (row, column) => {
  let x = margin+cellWidth*row + cellWidth/2;
  let y = margin+cellHeight*column + cellWidth/2
  renderRandomShape(x, y)
}

const sketch = () => {
  w = width - 2*margin;
  h = height - 2*margin;
  c = 4;
  r = 4;
  cellWidth = w/c;
  cellHeight = h/r;

  foreground = createGraphics(width, height);


  return ({ context, width, height }) => {
    foreground.strokeWeight(3);


    generateForeground();
  

    generateBackground();

    image(foreground, 0, 0);


  };
};

canvasSketch(sketch, settings);