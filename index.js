// Require external files needed to run index.js
const fs = require("fs")
const inquirer = require('requirer')
const questions = require('./lib/questions')
const setShape = require(`./lib/setShape`)
let SVG = require("./examples/logo.svg")

let example = new SVG()