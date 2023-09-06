const board = document.getElementById("board");
const allBoxes = [];
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
    let type = "normal";
    let star = false;
    const div = document.createElement("div");
    if (i >= 0 && i <= 5 && j >= 0 && j < 6) {
      div.classList.add("red-home");
      div.innerText = "";
      type = "red-home";
    }
    if (i >= 1 && i <= 4 && j >= 1 && j < 5) {
      div.classList.add("red-home-inner");
    }
    if (i == 2 && j == 2) {
      div.classList.add("red-home-coin");
      div.classList.add("transform-nw");
    }
    if (i == 3 && j == 2) {
      div.classList.add("red-home-coin");
      div.classList.add("transform-ne");
    }
    if (i == 2 && j == 3) {
      div.classList.add("red-home-coin");
      div.classList.add("transform-sw");
    }
    if (i == 3 && j == 3) {
      div.classList.add("red-home-coin");
      div.classList.add("transform-se");
    }
    if (i >= 0 && i <= 5 && j >= 9 && j < 15) {
      div.classList.add("green-home");
      div.innerText = "";
      type = "green-home";
    }
    if (i >= 1 && i <= 4 && j >= 10 && j < 14) {
      div.classList.add("green-home-inner");
    }
    if (i == 2 && j == 11) {
      div.classList.add("green-home-coin");
      div.classList.add("transform-nw");
    }
    if (i == 3 && j == 11) {
      div.classList.add("green-home-coin");
      div.classList.add("transform-ne");
    }
    if (i == 2 && j == 12) {
      div.classList.add("green-home-coin");
      div.classList.add("transform-sw");
    }
    if (i == 3 && j == 12) {
      div.classList.add("green-home-coin");
      div.classList.add("transform-se");
    }
    if (i >= 9 && i <= 14 && j >= 0 && j < 6) {
      div.classList.add("blue-home");
      div.innerText = "";
      type = "blue-home";
    }
    if (i >= 10 && i <= 13 && j >= 1 && j < 5) {
      div.classList.add("blue-home-inner");
    }
    if (i == 11 && j == 2) {
      div.classList.add("blue-home-coin");
      div.classList.add("transform-nw");
    }
    if (i == 11 && j == 3) {
      div.classList.add("blue-home-coin");
      div.classList.add("transform-sw");
    }
    if (i == 12 && j == 2) {
      div.classList.add("blue-home-coin");
      div.classList.add("transform-ne");
    }
    if (i == 12 && j == 3) {
      div.classList.add("blue-home-coin");
      div.classList.add("transform-se");
    }
    if (i >= 9 && i <= 14 && j >= 9 && j < 15) {
      div.classList.add("yellow-home");
      div.innerText = "";
      type = "yellow-home";
    }
    if (i >= 10 && i <= 13 && j >= 10 && j < 14) {
      div.classList.add("yellow-home-inner");
    }
    if (i == 11 && j == 11) {
      div.classList.add("yellow-home-coin");
      div.classList.add("transform-nw");
    }
    if (i == 12 && j == 11) {
      div.classList.add("yellow-home-coin");
      div.classList.add("transform-ne");
    }
    if (i == 11 && j == 12) {
      div.classList.add("yellow-home-coin");
      div.classList.add("transform-sw");
    }
    if (i == 12 && j == 12) {
      div.classList.add("yellow-home-coin");
      div.classList.add("transform-se");
    }

    if (i >= 6 && i <= 8 && j >= 6 && j < 9) {
      div.classList.add("home");
      div.innerText = "";
      type = "home";
    }
    if (i == 13 && j == 6) {
      div.classList.add("blue-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    if (i >= 9 && i <= 13 && j == 7) {
      div.classList.add("blue-safe");
      type = "blue-safe";
    }
    if (i == 1 && j == 8) {
      div.classList.add("green-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    if (i >= 1 && i <= 5 && j == 7) {
      div.classList.add("green-safe");
      type = "green-safe";
    }
    if (i == 6 && j == 1) {
      div.classList.add("red-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    if (j >= 1 && j <= 5 && i == 7) {
      div.classList.add("red-safe");
      type = "red-safe";
    }
    if (i == 8 && j == 13) {
      div.classList.add("yellow-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    if (j >= 9 && j <= 13 && i == 7) {
      div.classList.add("yellow-safe");
      type = "yellow-safe";
    }
    if (i == 8 && j == 2) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    if (i == 2 && j == 6) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    if (i == 6 && j == 12) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    if (i == 12 && j == 8) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
      star = true;
    }
    div.innerText = i + "," + j;
    div.classList.add("box");
    div.dataset.i = i;
    div.dataset.j = j;
    board.append(div);
    allBoxes.push({
      i,
      j,
      type,
      star,
    });
  }
}

const validMovesArr = allBoxes.filter((e) => e.type == "normal");

const bl = validMovesArr
  .filter((e) => e.i >= 9 && e.i <= 14 && e.j == 6)
  .sort((a, b) => b.i - a.i);
const br = validMovesArr
  .filter((e) => e.i >= 9 && e.i <= 14 && e.j == 8)
  .sort((a, b) => a.i - b.i);
const lb = validMovesArr
  .filter((e) => e.j >= 0 && e.j <= 5 && e.i == 8)
  .sort((a, b) => b.j - a.j);
const lt = validMovesArr
  .filter((e) => e.j >= 0 && e.j <= 5 && e.i == 6)
  .sort((a, b) => a.j - b.j);
const tl = validMovesArr
  .filter((e) => e.i >= 0 && e.i <= 5 && e.j == 6)
  .sort((a, b) => a.i - b.i);
const tr = validMovesArr
  .filter((e) => e.i >= 0 && e.i <= 5 && e.j == 8)
  .sort((a, b) => b.i - a.i);
const rt = validMovesArr
  .filter((e) => e.j >= 9 && e.j <= 14 && e.i == 6)
  .sort((a, b) => a.j - b.j);
const rb = validMovesArr
  .filter((e) => e.j >= 9 && e.j <= 14 && e.i == 8)
  .sort((a, b) => b.j - a.j);

const index70 = validMovesArr.findIndex((e) => e.i == 7 && e.j == 0);
const index07 = validMovesArr.findIndex((e) => e.i == 0 && e.j == 7);
const index714 = validMovesArr.findIndex((e) => e.i == 7 && e.j == 14);
const index147 = validMovesArr.findIndex((e) => e.i == 14 && e.j == 7);

const movesArr = [
  ...bl,
  ...lb,
  validMovesArr[index70],
  ...lt,
  ...tl,
  validMovesArr[index07],
  ...tr,
  ...rt,
  validMovesArr[index714],
  ...rb,
  ...br,
  validMovesArr[index147],
];

class Coin {
  constructor(code, color, currenti, currentj) {
    this.code = code;
    this.color = color;
    this.currenti = currenti;
    this.currentj = currentj;
    this.safe = false;
  }
  move = (diceOutput) => {
    const currentIndex = movesArr.findIndex(
      (e) => e.i == this.currenti && e.j == this.currentj
    );
    let newIndex = currentIndex + diceOutput;
    if (newIndex >= movesArr.length) newIndex = newIndex - movesArr.length - 1;
    const box = movesArr[newIndex];
    this.currenti = box.i;
    this.currentj = box.j;
  };
}

class Player {
  constructor(color, name, coins, turn, safeStart, safeArr) {
    this.color = color;
    this.name = name;
    this.locked = 4;
    this.passesd = 0;
    this.coins = coins;
    this.turn = turn;
    this.safeStart = safeStart;
    this.safeArr = safeArr;
  }
}

const players = [];

const blueSafeIndex = movesArr.findIndex((e) => e.i == 14 && e.j == 7);
const blueSafeArr = validMovesArr
  .filter((e) => e.type == "blue-safe")
  .sort((a, b) => a.i - b.i);
const redSafeIndex = movesArr.findIndex((e) => e.i == 7 && e.j == 0);
const redSafeArr = validMovesArr
  .filter((e) => e.type == "red-safe")
  .sort((a, b) => a.j - b.j);
const greenSafeIndex = movesArr.findIndex((e) => e.i == 0 && e.j == 7);
const greenSafeArr = validMovesArr
  .filter((e) => e.type == "green-safe")
  .sort((a, b) => b.i - a.i);
const yellowSafeIndex = movesArr.findIndex((e) => e.i == 7 && e.j == 14);
const yellowSafeArr = validMovesArr
  .filter((e) => e.type == "yellow-safe")
  .sort((a, b) => b.j - a.j);

const playerNum = prompt("Select total players max 4");

for (let i = 0; i < parseInt(playerNum) && i < 4; i++) {
  const coins = [];
  for (let j = 0; j < 4; j++) {
    coins.push(new Coin(`b${j}`, "blue", 0, 0));
  }
  const bluePlayer = new Player(
    "blue",
    "bluePlayer",
    [...coins],
    true,
    blueSafeIndex,
    blueSafeArr
  );
  coins.length = 0;
  for (let j = 0; j < 4; j++) {
    coins.push(new Coin(`g${j}`, "green", 0, 0));
  }
  const greenPlayer = new Player(
    "green",
    "greenPlayer",
    [...coins],
    false,
    greenSafeIndex,
    greenSafeArr
  );
  coins.length = 0;
  for (let j = 0; j < 4; j++) {
    coins.push(new Coin(`r${j}`, "red", 0, 0));
  }
  const redPlayer = new Player(
    "red",
    "redPlayer",
    [...coins],
    false,
    redSafeIndex,
    redSafeArr
  );
  coins.length = 0;
  for (let j = 0; j < 4; j++) {
    coins.push(new Coin(`y${j}`, "yellow", 0, 0));
  }
  const yellowPlayer = new Player(
    "yellow",
    "yellowPlayer",
    [...coins],
    false,
    yellowSafeIndex,
    yellowSafeArr
  );
  coins.length = 0;
  if (parseInt(playerNum) == 2) {
    let temp = true;
    while (temp) {
      const color = prompt("Select Color");
      switch (color) {
        case "blue":
          players.push(bluePlayer);
          players.push(greenPlayer);
          temp = false;
          break;
        case "red":
          players.push(redPlayer);
          players.push(yellowPlayer);
          temp = false;
          break;
        case "green":
          players.push(greenPlayer);
          players.push(bluePlayer);
          temp = false;
          break;
        case "yellow":
          players.push(yellowPlayer);
          players.push(redPlayer);
          temp = false;
          break;
        default: alert("select a valid color")
      }
    }
    break;
  }
  const color = prompt("select color");
  switch (color) {
    case "red": {
      players.push(redPlayer);
      break;
    }
    case "blue": {
      players.push(bluePlayer);
      break;
    }
    case "green": {
      players.push(greenPlayer);
      break;
    }
    case "yellow": {
      players.push(yellowPlayer);
      break;
    }
    default: {
      i--;
      alert("select a valid color");
    }
  }
}
