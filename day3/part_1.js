const fs = require("fs");

const rucksacks = fs.readFileSync("./input.txt").toString().split("\n");
let i = 1;
const ENUM = {
  a: i++,
  b: i++,
  c: i++,
  d: i++,
  e: i++,
  f: i++,
  g: i++,
  h: i++,
  i: i++,
  j: i++,
  k: i++,
  l: i++,
  m: i++,
  n: i++,
  o: i++,
  p: i++,
  q: i++,
  r: i++,
  s: i++,
  t: i++,
  u: i++,
  v: i++,
  w: i++,
  x: i++,
  y: i++,
  z: i++,
  A: i++,
  B: i++,
  C: i++,
  D: i++,
  E: i++,
  F: i++,
  G: i++,
  H: i++,
  I: i++,
  J: i++,
  K: i++,
  L: i++,
  M: i++,
  N: i++,
  O: i++,
  P: i++,
  Q: i++,
  R: i++,
  S: i++,
  T: i++,
  U: i++,
  V: i++,
  W: i++,
  X: i++,
  Y: i++,
  Z: i++,
};

let sum = 0;
for (const rucksack of rucksacks) {
  const firstCompartment = rucksack.slice(0, rucksack.length / 2);
  const secondCompartment = rucksack.slice(rucksack.length / 2);

  const firstCompartmentArray = firstCompartment.split("");
  let correspondent = "";
  for (const letter of firstCompartmentArray) {
    if (secondCompartment.indexOf(letter) >= 0) {
      correspondent = letter;
      break;
    }
  }
  sum += ENUM[correspondent];
}
console.log(sum);
