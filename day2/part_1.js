const fs = require("fs");

const rounds = fs.readFileSync("./input.txt").toString().split("\n");

const POSSIBLE_VALUES_BY_RESULT = {
  loss: 0,
  draw: 3,
  win: 6,
};

const POSSIBLE_VALUES = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const MapValues = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

let score = 0;
for (const round of rounds) {
  const oponentChoice = round[0];
  const myChoice = round[2];

  const isADraw = MapValues[oponentChoice] == MapValues[myChoice];

  const isAWin =
    POSSIBLE_VALUES[MapValues[oponentChoice]] -
      POSSIBLE_VALUES[MapValues[myChoice]] ==
      -1 ||
    POSSIBLE_VALUES[MapValues[oponentChoice]] -
      POSSIBLE_VALUES[MapValues[myChoice]] ==
      2;

  score += POSSIBLE_VALUES[MapValues[myChoice]];
  if (isADraw) {
    score += POSSIBLE_VALUES_BY_RESULT.draw;
  }
  if (isAWin) {
    score += POSSIBLE_VALUES_BY_RESULT.win;
  }
}

console.log({ score });
