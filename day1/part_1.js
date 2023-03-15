const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const elves = input.split("\n");

const values = [];
let i = 0;

for (const elve of elves) {
  if (elve == "") {
    i++;
    continue;
  }
  if (values[i]) {
    values[i] = values[i] + parseInt(elve);
  } else {
    values[i] = parseInt(elve);
  }
}

const sortedValues = values.sort((a, b) => b - a);
const slicedSorted = sortedValues.slice(0, 3);
const maxValue = Math.max(...slicedSorted);

console.log("Part 1: Max Value: ", maxValue);
console.log(
  "Part 2: Top 3 Values sum: ",
  slicedSorted.reduce((a, b) => a + b, 0)
);
