// Require external files needed to run index.js
const fs = require("fs")
const inquirer = require('requirer')

const questions = require('./lib/question')
const setShape = require(`./lib/setShape`)
let SVG = require("./examples/logo.svg")
const { colorKeywords } = require("./lib/colorKeywords")

let example = new SVG()

// function to create new svg file using inquirer response and file system
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(SVG, svg, ()=> console.log('Generated logo.svg'));
}
// initialize, ask questions then createLogo using responses, catch any errors
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();