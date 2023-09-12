const board = document.getElementById("board");
const dice = document.getElementById("dice-btn");
let diceValue = null;
let ctr = 0;
const allBoxes = [];
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
    let type = "normal";
    let star = false;
    const div = document.createElement("div");
    div.dataset.code = "";
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
      div.classList.add("safe");
      star = true;
    }
    if (i >= 9 && i <= 13 && j == 7) {
      div.classList.add("blue-safe");
      type = "blue-safe";
    }
    if (i == 1 && j == 8) {
      div.classList.add("green-star");
      div.classList.add("safe");
      star = true;
    }
    if (i >= 1 && i <= 5 && j == 7) {
      div.classList.add("green-safe");
      type = "green-safe";
    }
    if (i == 6 && j == 1) {
      div.classList.add("red-star");
      div.classList.add("safe");
      star = true;
    }
    if (j >= 1 && j <= 5 && i == 7) {
      div.classList.add("red-safe");
      type = "red-safe";
    }
    if (i == 8 && j == 13) {
      div.classList.add("yellow-star");
      div.classList.add("safe");
      star = true;
    }
    if (j >= 9 && j <= 13 && i == 7) {
      div.classList.add("yellow-safe");
      type = "yellow-safe";
    }
    if (i == 8 && j == 2) {
      div.classList.add("safe");
      star = true;
    }
    if (i == 2 && j == 6) {
      div.classList.add("safe");
      star = true;
    }
    if (i == 6 && j == 12) {
      div.classList.add("safe");
      star = true;
    }
    if (i == 12 && j == 8) {
      div.classList.add("safe");
      star = true;
    }
    // div.innerText = i + "," + j;
    div.classList.add("box");
    div.dataset.coords = i + "," + j;
    board.append(div);
    allBoxes.push({
      i,
      j,
      type,
      star,
    });
    div.addEventListener("click", (e) => handleClick(e));
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
  .sort((a, b) => b.i - a.i);
const tr = validMovesArr
  .filter((e) => e.i >= 0 && e.i <= 5 && e.j == 8)
  .sort((a, b) => a.i - b.i);
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

const players = [];

class Coin {
  constructor(code, color, currenti, currentj, img) {
    this.code = code;
    this.color = color;
    this.currenti = currenti;
    this.currentj = currentj;
    this.safe = false;
    this.safePath = false;
    this.open = false;
    this.img = img;
  }
  move = (diceOutput, player) => {
    if (!this.open) {
      if (diceOutput == 6) {
        this.open = true;
        const box = movesArr[player.startIndex];
        this.currenti = box.i;
        this.currentj = box.j;
        // displayCoins(players);
        moveCoin(this);
        // this.updateBoard();
        // Player.changeTurn();
        return;
      }
      Player.changeTurn();
      return;
    }
    if (this.safePath) {
      const currentIndex = player.safeArr.findIndex(
        (e) => e.i == this.currenti && e.j == this.currentj
      );
      let newIndex = currentIndex + diceOutput;
      if (newIndex > player.safeArr.length) {
        // change turn
        ctr = 2;
        Player.changeTurn();
        return;
      }
      if (newIndex < player.safeArr.length) {
        this.currenti = player.safeArr[newIndex].i;
        this.currentj = player.safeArr[newIndex].j;
        // displayCoins(players);
        // this.updateBoard();
        moveCoin(this);
        return;
      }
      if (newIndex == player.safeArr.length) {
        this.currenti = 100;
        this.currentj = 100;
        const tempPlayer = players.find((e) => e.name == player.name);
        const updatedCoins = tempPlayer.coins.filter(
          (e) => e.code !== this.code
        );
        tempPlayer.coins = updatedCoins;
        const updatedPlayersArr = players.map((e) => {
          if (e.name == this.name) {
            return tempPlayer;
          }
          return e;
        });
        players.length = 0;
        updatedPlayersArr.forEach((e) => players.push(e));
        // displayCoins(updatedPlayersArr);
        // this.updateBoard();
        moveCoin(this);
        // Player.changeTurn();
        return;
      }
    }
    let currentIndex = movesArr.findIndex(
      (e) => e.i == this.currenti && e.j == this.currentj
    );
    let newIndex = currentIndex + parseInt(diceOutput);
    if (
      newIndex > player.safeStart + 1 &&
      player.safeStart + 1 > currentIndex
    ) {
      const tempIndex = newIndex - player.safeStart - 1;
      this.currenti = player.safeArr[tempIndex].i;
      this.currentj = player.safeArr[tempIndex].j;
      this.safePath = true;
      // displayCoins(players);
      // this.updateBoard();
      moveCoin(this);
      // Player.changeTurn();
      return;
    }
    if (newIndex >= movesArr.length) newIndex = newIndex - movesArr.length - 1;
    const box = movesArr[newIndex];
    console.log(box, movesArr, newIndex, currentIndex, diceOutput);
    this.currenti = box.i;
    this.currentj = box.j;
    // displayCoins(players);
    // this.updateBoard();
    moveCoin(this);
    // Player.changeTurn();
  };

  updateBoard = () => {
    const position = document.querySelector(
      `[data-coords="${this.currenti},${this.currentj}"]`
    );
    position.dataset.code += "," + this.code;
  };
}

class Player {
  constructor(color, name, coins, turn, safeStart, safeArr, startIndex) {
    this.color = color;
    this.name = name;
    this.locked = 4;
    this.passesd = 0;
    this.coins = coins;
    this.turn = turn;
    this.safeStart = safeStart;
    this.safeArr = safeArr;
    this.startIndex = startIndex;
    this.initialMove = false;
  }
  static changeTurn = () => {
    if (ctr < 2) return;
    const currentTurnIndex = players.findIndex((e) => e.turn);
    if (currentTurnIndex == players.length - 1) {
      players[0].turn = true;
      players[currentTurnIndex].turn = false;
      board.dataset.dice = 0;
      return;
    }
    players[currentTurnIndex].turn = false;
    players[currentTurnIndex + 1].turn = true;
    board.dataset.dice = 0;
  };
}

const blueSafeIndex = movesArr.findIndex((e) => e.i == 14 && e.j == 7);
const blueSafeArr = allBoxes
  .filter((e) => e.type == "blue-safe")
  .sort((a, b) => a.i - b.i);
const redSafeIndex = movesArr.findIndex((e) => e.i == 7 && e.j == 0);
const redSafeArr = allBoxes
  .filter((e) => e.type == "red-safe")
  .sort((a, b) => a.j - b.j);
const greenSafeIndex = movesArr.findIndex((e) => e.i == 0 && e.j == 7);
const greenSafeArr = allBoxes
  .filter((e) => e.type == "green-safe")
  .sort((a, b) => b.i - a.i);
const yellowSafeIndex = movesArr.findIndex((e) => e.i == 7 && e.j == 14);
const yellowSafeArr = allBoxes
  .filter((e) => e.type == "yellow-safe")
  .sort((a, b) => b.j - a.j);
const blueStartIndex = movesArr.findIndex((e) => e.i == 13 && e.j == 6);
const redStartIndex = movesArr.findIndex((e) => e.i == 6 && e.j == 1);
const greenStartIndex = movesArr.findIndex((e) => e.i == 1 && e.j == 8);
const yellowStartIndex = movesArr.findIndex((e) => e.i == 8 && e.j == 13);

const playerNum = prompt("Select total players max 4");

for (let i = 0; i < parseInt(playerNum) && i < 4; i++) {
  const coins = [];
  coins.push(new Coin(`b0`, "blue", 11, 2, "./blue.png"));
  coins.push(new Coin(`b1`, "blue", 11, 3, "./blue.png"));
  coins.push(new Coin(`b2`, "blue", 12, 2, "./blue.png"));
  coins.push(new Coin(`b3`, "blue", 12, 3, "./blue.png"));
  const bluePlayer = new Player(
    "blue",
    "bluePlayer",
    [...coins],
    true,
    blueSafeIndex,
    blueSafeArr,
    blueStartIndex
  );
  coins.length = 0;
  // for (let j = 0; j < 4; j++) {
  coins.push(new Coin(`g0`, "green", 2, 11, "./green.png"));
  coins.push(new Coin(`g1`, "green", 2, 12, "./green.png"));
  coins.push(new Coin(`g2`, "green", 3, 11, "./green.png"));
  coins.push(new Coin(`g3`, "green", 3, 12, "./green.png"));
  // }
  const greenPlayer = new Player(
    "green",
    "greenPlayer",
    [...coins],
    false,
    greenSafeIndex,
    greenSafeArr,
    greenStartIndex
  );
  coins.length = 0;
  coins.push(new Coin(`r0`, "red", 2, 2, "./red.png"));
  coins.push(new Coin(`r1`, "red", 2, 3, "./red.png"));
  coins.push(new Coin(`r2`, "red", 3, 2, "./red.png"));
  coins.push(new Coin(`r3`, "red", 3, 3, "./red.png"));
  const redPlayer = new Player(
    "red",
    "redPlayer",
    [...coins],
    false,
    redSafeIndex,
    redSafeArr,
    redStartIndex
  );
  coins.length = 0;
  coins.push(new Coin(`y0`, "yellow", 11, 11, "./yellow.png"));
  coins.push(new Coin(`y1`, "yellow", 11, 12, "./yellow.png"));
  coins.push(new Coin(`y2`, "yellow", 12, 11, "./yellow.png"));
  coins.push(new Coin(`y3`, "yellow", 12, 12, "./yellow.png"));
  const yellowPlayer = new Player(
    "yellow",
    "yellowPlayer",
    [...coins],
    false,
    yellowSafeIndex,
    yellowSafeArr,
    yellowStartIndex
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
        default:
          alert("select a valid color");
      }
    }
    break;
  }
  const color = prompt("select color");
  const tempPlayer = players.find((e) => e.color == color);
  if (tempPlayer) {
    i--;
    alert("color already selected");
    continue;
  }
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

const tempPlayers = players.map((e) => {
  if (e.color == "blue") {
    e.playOrder = 1;
  }
  if (e.color == "red") {
    e.playOrder = 2;
  }
  if (e.color == "green") {
    e.playOrder = 3;
  }
  if (e.color == "yellow") {
    e.playOrder = 4;
  }
  return e;
});

players.length = 0;

tempPlayers
  .sort((a, b) => a.playOrder - b.playOrder)
  .forEach((e) => {
    players.push(e);
  });

players[0].turn = true;

const handleClick = (event) => {
  ctr++;
  let targetDiv = event.target;
  // console.log(event);
  if (!board.dataset.dice) {
    alert("Roll the dice first");
    return;
  }
  const currentPlayerIndex = players.findIndex((e) => e.turn);
  if (targetDiv.tagName == "IMG") targetDiv = targetDiv.parentElement;
  // console.log(targetDiv);
  const code = targetDiv.dataset.code;
  // console.log(code);
  if (code) {
    temp = false;
  } else {
    alert("select a coin");
    return;
  }
  const coinIndex = players[currentPlayerIndex].coins.findIndex((e) =>
    code.includes(e.code)
  );
  console.log(coinIndex);
  if (coinIndex == -1) {
    alert("select valid coin");
    return;
  }
  if (players[currentPlayerIndex].coins[coinIndex].open) {
    players[currentPlayerIndex].coins[coinIndex].move(
      board.dataset.dice,
      players[currentPlayerIndex]
    );
    if (board.dataset.dice != 6) Player.changeTurn();
  } else if (board.dataset.dice == 6) {
    players[currentPlayerIndex].coins[coinIndex].move(
      board.dataset.dice,
      players[currentPlayerIndex]
    );
  } else {
    const openCoins = players[currentPlayerIndex].coins.filter((e) => e.open);
    if (openCoins.length) {
      alert("select a valid Coin");
      return;
    } else {
      ctr = 2;
      Player.changeTurn();
      return;
    }
  }
};

dice.addEventListener("click", (e) => {
  ctr++;
  const possibleValues = [1, 2, 3, 4, 5, 6];
  const diceOutput = possibleValues[Math.floor(Math.random() * 6)];
  board.dataset.dice = 6;
  console.log(diceOutput);
  // if(parseInt(diceOutput) !== 6 )Player.changeTurn()
  // dice.setAttribute("disabled",true)
});

const displayCoins = (players) => {
  const coins = players.map((e) => [...e.coins]).flat();
  console.log(coins);
  coins.forEach((e) => {
    if (e.open) return;
    const box = document.querySelector(
      `[data-coords^="${e.currenti},${e.currentj}"]`
    );

    const img = document.createElement("img");
    img.setAttribute("src", e.img);
    img.dataset.code = "coin-" + e.code;
    img.dataset.initi = e.currenti;
    img.dataset.initj = e.currentj;
    box.append(img);
    box.dataset.code += "," + e.code;
  });
};

displayCoins(players);

const moveCoin = (coin) => {
  const coinEle = document.querySelector(`[data-code="coin-${coin.code}"]`);
  const parentBox = coinEle.parentElement;
  const coinCodes = parentBox.dataset.code;
  const codesArr = coinCodes.split(",");
  const newCodesArr = codesArr.filter((e) => e !== coin.code);
  parentBox.dataset.code = newCodesArr.join(",");
  const { initi, initj } = coinEle.dataset;
  coinEle.remove();
  const box = document.querySelector(
    `[data-coords^="${coin.currenti},${coin.currentj}"]`
  );
  const boxCode = box.dataset.code;
  const boxArr = boxCode.split(",");
  // const newboxArr = boxArr.filter((e) => e !== coin.code);
  // parentBox.dataset.code = newboxArr.join(",");
  if(boxArr.length == 2) {
    if(coin.code[0] !== boxArr[1][0]) {
      const {initi,initj,code} = box.firstChild.dataset;
      box.firstChild.remove();
      box.dataset.code = ",";
      const tempPlayers = players.map(e => {
        return {
          ...e,
          coins: e.coins.map(coin => {
            if(coinCodes.code == code.split("-")[1]) {
              return {
                ...coin,
                currenti: initi,
                currentj: initj
              }
            }
            return coin;
          })
        }
      })
      players.length = 0;
      tempPlayers.forEach(e => players.push(e));
    }
  } 

  const img = document.createElement("img");
  img.setAttribute("src", coin.img);
  img.dataset.code = "coin-" + coin.code;
  img.dataset.initi = initi;
  img.dataset.initj = initj;
  box.append(img);
  box.dataset.code += "," + coin.code;
  if (board.dataset.dice != 6) Player.changeTurn();
};
