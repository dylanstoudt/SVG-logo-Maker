const questions = require('./questions')
const { Circle, Square, Triangle } = require('./shapes')

function setShape(response) {
  if (response.shapeType === 'Circle') {
    shape = new Circle(response.shapeColor, response.text, response.textColor);
  } else if (response.shapeType === 'Triangle') {
    shape = new Triangle(response.shapeColor, response.text, response.textColor);
  } else if (response.shapeType === 'Square') {
    shape = new Square(response.shapeColor, response.text, response.textColor);
  }
  return shape
}

module.exports = setShape