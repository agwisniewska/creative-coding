const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const pallets = require('nice-color-palettes');

// Grab P5.js from npm
const p5 = require('p5');

// Attach p5.js it to global scope
new p5();

const settings = {
  p5: true,
  dimensions: [512, 512],
};

let margin = 25;
let marginX = 25;
let marginY = 25;
let w, h;
let c, r;
let arcX;
let arcY;
let cellWidth, cellHeight;

const renderCell = (row, column) => {
  rectMode(CORNER);

  let x = margin+cellWidth*row;
  let y = margin+cellHeight*column;

  rect(x, y, cellWidth, cellHeight)
}

const renderRandomShape = (shapeX, shapeY) => {
  rectMode(CENTER);

  let newArcX = (marginX + shapeX) / 2;
  let newArcY = (marginY + shapeY) / 2;

  rect(newArcX, newArcY, cellWidth/2, cellHeight/2);

  marginX += (cellWidth / 4)
  marginY += (cellHeight / 4);

}

const generateRandomStyle = () => {

}

const sketch = () => {
  w = width - 2*margin;
  h = height - 2*margin;
  c = 4;
  r = 4;
  cellWidth = w/c;
  cellHeight = h/r;
  return ({ context, width, height }) => {


    for (let i = 0; i < r; i++) {

      for (let j = 0; j < c; j++) {
        renderRandomShape(cellWidth * (i+1), cellHeight *(j+1));
      }
    }

  };
};

canvasSketch(sketch, settings);