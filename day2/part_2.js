const fs = require("fs");

const rounds = fs.readFileSync("./input.txt").toString().split("\n");

const POSSIBLE_VALUES_BY_RESULT = {
  loss: 0,
  draw: 3,
  win: 6,
};

const MapValues = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
  1: "X",
  2: "Y",
  3: "Z",
};

let score = 0;
for (const round of rounds) {
  const oponentChoice = round[0];
  let myChoice = round[2];

  let newChoiceValue = oponentChoice;
  if (myChoice === "X") {
    let newChoiceValue = MapValues[oponentChoice] - 1;
    if (newChoiceValue < 1) {
      newChoiceValue = 3;
    }
  }
  if (myChoice === "Z") {
    let newChoiceValue = MapValues[oponentChoice] + 1;
    if (newChoiceValue > 3) {
      newChoiceValue = 1;
    }
  }
  myChoice = MapValues[newChoiceValue];

  const isADraw = MapValues[oponentChoice] == MapValues[myChoice];

  const isAWin =
    MapValues[oponentChoice] - MapValues[myChoice] == -1 ||
    MapValues[oponentChoice] - MapValues[myChoice] == 2;

  score += MapValues[myChoice];
  if (isADraw) {
    score += POSSIBLE_VALUES_BY_RESULT.draw;
  }
  if (isAWin) {
    score += POSSIBLE_VALUES_BY_RESULT.win;
  }
}

console.log({ score });
