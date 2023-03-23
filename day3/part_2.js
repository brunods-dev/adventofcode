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

function findCommonCharacter(str1, str2, str3) {
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  const set3 = new Set(str3);

  for (const char of set1) {
    if (set2.has(char) && set3.has(char)) {
      return char;
    }
  }

  return null;
}

let sum = 0;

let group = [];
for (const rucksack of rucksacks) {
  group.push(rucksack);

  if (group.length === 3) {
    groupChar = findCommonCharacter(group[0], group[1], group[2]);
    sum += ENUM[groupChar];
    group = [];
  }
}
console.log(sum);
