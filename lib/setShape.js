const questions = require('./questions')

let shape;
if (shapeType === 'Circle') {
  shape = new Circle();
} else if (shapeType === 'Triangle') {
  shape = new Triangle();
} else if (shapeType === 'Square') {
  shape = new Square();
}