const canvasSketch = require('canvas-sketch');
const pallets = require('nice-color-palettes');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();


const colors = [
  '#EF476F',
  '#FFD166',
  '#06D6A0',
  '#118AB2',
  '#073B4C'
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
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      stroke('#fff');
      fill('#118AB2');
      rect(i, j, 20, 20);
    }
  }
}

const generateRandomStyle = (start, end) => {

  const fillRandomVal = floor(random(0, 5));
  const generatedColor = colors[fillRandomVal]

  foreground.stroke('#073B4C')
  foreground.strokeWeight(4);
  foreground.fill(generatedColor);

}

const generateForeground = () => {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
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
  
  foreground.blendMode(REMOVE);
  foreground.arc(shapeX, shapeY, cellWidth - 25, cellHeight - 25, start, stop, shape);

  foreground.blendMode(BLEND);

  if ((ran < 5)) {
    foreground.noFill();
  }
  foreground.arc(shapeX, shapeY, cellWidth - 25, cellHeight - 25, start, stop, shape);

 
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
    foreground.background('#073B4C');
    foreground.strokeWeight(3);


    generateForeground();
  

    generateBackground();

    image(foreground, 0, 0);


  };
};

canvasSketch(sketch, settings);