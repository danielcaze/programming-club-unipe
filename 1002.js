var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let radius = parseFloat(lines.shift());
let n = 3.14159;
let area = n * Math.pow(radius, 2);

console.log("A=" + area.toFixed(4));