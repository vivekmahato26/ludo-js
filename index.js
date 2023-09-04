const board = document.getElementById("board");
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
    const div = document.createElement("div");
    if (i >= 0 && i <= 5 && j >= 0 && j < 6) {
      div.classList.add("red-home");
      div.innerText = "";
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
    }
    if (i == 13 && j == 6) {
      div.classList.add("blue-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    if (i >= 9 && i <= 13 && j == 7) {
      div.classList.add("blue-safe");
    }
    if (i == 1 && j == 8) {
      div.classList.add("green-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    if (i >= 1 && i <= 5 && j == 7) {
      div.classList.add("green-safe");
    }
    if (i == 6 && j == 1) {
      div.classList.add("red-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    if (j >= 1 && j <= 5 && i == 7) {
      div.classList.add("red-safe");
    }
    if (i == 8 && j == 13) {
      div.classList.add("yellow-star");
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    if (j >= 9 && j <= 13 && i == 7) {
      div.classList.add("yellow-safe");
    }
    if (i == 8 && j == 2) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    if (i == 2 && j == 6) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    if (i == 6 && j == 12) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    if (i == 12 && j == 8) {
      const img = document.createElement("img");
      img.setAttribute("src", "star.svg");
      div.innerText = "";
      div.append(img);
    }
    // div.innerText = i + "," + j;
    div.classList.add("box");
    div.dataset.i = i;
    div.dataset.j = j;
    board.append(div);
  }
}
