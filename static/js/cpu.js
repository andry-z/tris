let sprite1;
let sprite2;
let partitaTerminata = false;
let spritePunteggio1;
let spritePunteggio2;
let result_display = document.getElementById("winner");
let winner = document.getElementById("trophy");
let celleOccupate = 0;
let punteggio1html = document.querySelector(".punteggio1");
let punteggio2html = document.querySelector(".punteggio2");
let punteggio1 = 0;
let punteggio2 = 0;

punteggio1html.innerHTML = punteggio1;
punteggio2html.innerHTML = punteggio2;

function assignSprite() {
  let randomSprite1 = Math.random();
  let randomSprite2 = Math.random();

  if (randomSprite1 < 0.33) {
    sprite1 = "nes-charmander";
  } else if (randomSprite1 < 0.66) {
    sprite1 = "nes-squirtle";
  } else {
    sprite1 = "nes-bulbasaur";
  }

  if (randomSprite2 < 0.33) {
    sprite2 = "nes-charmander";
  } else if (randomSprite2 < 0.66) {
    sprite2 = "nes-squirtle";
  } else {
    sprite2 = "nes-bulbasaur";
  }

  while (sprite1 === sprite2) {
    randomSprite1 = Math.random();
    randomSprite2 = Math.random();
    if (randomSprite1 < 0.33) {
      sprite1 = "nes-charmander";
    } else if (randomSprite1 < 0.66) {
      sprite1 = "nes-squirtle";
    } else {
      sprite1 = "nes-bulbasaur";
    }

    if (randomSprite2 < 0.33) {
      sprite2 = "nes-charmander";
    } else if (randomSprite2 < 0.66) {
      sprite2 = "nes-squirtle";
    } else {
      sprite2 = "nes-bulbasaur";
    }
  }
}

assignSprite();

spritePunteggio1 = document.getElementById("sprite1");
spritePunteggio2 = document.getElementById("sprite2");

spritePunteggio1.classList.toggle(sprite1);
spritePunteggio2.classList.toggle(sprite2);

let celle = document.querySelectorAll(".button"),
  currentPlayer = 1,
  cellIsOccupied = true;

let vincitore;

function checkVictory() {
  if (
    celle[0].classList.contains(sprite1) &&
    celle[1].classList.contains(sprite1) &&
    celle[2].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[0].classList.contains(sprite2) &&
    celle[1].classList.contains(sprite2) &&
    celle[2].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  } else if (
    celle[3].classList.contains(sprite1) &&
    celle[4].classList.contains(sprite1) &&
    celle[5].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[3].classList.contains(sprite2) &&
    celle[4].classList.contains(sprite2) &&
    celle[5].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  } else if (
    celle[6].classList.contains(sprite1) &&
    celle[7].classList.contains(sprite1) &&
    celle[8].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[6].classList.contains(sprite2) &&
    celle[7].classList.contains(sprite2) &&
    celle[8].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  } else if (
    celle[0].classList.contains(sprite1) &&
    celle[4].classList.contains(sprite1) &&
    celle[8].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[0].classList.contains(sprite2) &&
    celle[4].classList.contains(sprite2) &&
    celle[8].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  } else if (
    celle[2].classList.contains(sprite1) &&
    celle[4].classList.contains(sprite1) &&
    celle[6].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[2].classList.contains(sprite2) &&
    celle[4].classList.contains(sprite2) &&
    celle[6].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  } else if (
    celle[0].classList.contains(sprite1) &&
    celle[3].classList.contains(sprite1) &&
    celle[6].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[0].classList.contains(sprite2) &&
    celle[3].classList.contains(sprite2) &&
    celle[6].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  } else if (
    celle[1].classList.contains(sprite1) &&
    celle[4].classList.contains(sprite1) &&
    celle[7].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[1].classList.contains(sprite2) &&
    celle[4].classList.contains(sprite2) &&
    celle[7].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  } else if (
    celle[2].classList.contains(sprite1) &&
    celle[5].classList.contains(sprite1) &&
    celle[8].classList.contains(sprite1)
  ) {
    console.log("vince player1");
    partitaTerminata = true;
    vincitore = 1;
    punteggio1 = punteggio1 + 1;
  } else if (
    celle[2].classList.contains(sprite2) &&
    celle[5].classList.contains(sprite2) &&
    celle[8].classList.contains(sprite2)
  ) {
    console.log("vince player2");
    partitaTerminata = true;
    vincitore = 2;
    punteggio2 = punteggio2 + 1;
  }
  punteggio1html.innerHTML = punteggio1;
  punteggio2html.innerHTML = punteggio2;
  currentPlayer++;
  celleOccupate = celleOccupate + 1;
  if (celleOccupate == 9) {
    result_display.innerHTML = "Pareggio";
  }
  if (partitaTerminata === true) {
    result_display.innerHTML = "Il vincitore è giocatore " + vincitore;
    trophy.classList.add("nes-icon");
    trophy.classList.add("trophy");
    trophy.classList.add("is-large");
  }
}

let grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let lastMove = null;

for (let i = 0; i < celle.length; i++) {
  let link = celle[i];
  link.addEventListener("click", function (e) {
    e.preventDefault();
    casella = e.currentTarget;
    cellIsOccupied =
      e.currentTarget.classList.contains(sprite2) ||
      e.currentTarget.classList.contains(sprite1);
    console.log(cellIsOccupied);
    if (!cellIsOccupied && partitaTerminata === false) {
      e.currentTarget.classList.toggle(sprite1);
      grid[casella.dataset.row][casella.dataset.col] = "X";
      lastMove = "X";
      checkVictory();
      if (lastMove === "X" && partitaTerminata === false) {
        setTimeout(function () {
          getBestMove(grid);
        }, 500);
        lastMove = "O";
        setTimeout(checkVictory, 501);
      }
    }
  });
}

function reset() {
  for (let i = 0; i < celle.length; i++) {
    celle[i].classList.remove(sprite1);
    celle[i].classList.remove(sprite2);
  }
  result_display.innerHTML = "";
  partitaTerminata = false;
  celleOccupate = 0;
  grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  trophy.classList.remove("nes-icon");
  trophy.classList.remove("trophy");
  trophy.classList.remove("is-large");
}

function getEmptyCells(board) {
  let emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        emptyCells.push([i, j]);
      }
    }
  }
  return emptyCells;
}

function getBestMove(board) {
  let emptyCells = getEmptyCells(board);
  let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  board[randomCell[0]][randomCell[1]] = "O";
  let box = document.querySelector(
    '[data-row="' + randomCell[0] + '"][data-col="' + randomCell[1] + '"]'
  );
  box.classList.toggle(sprite2);
  return randomCell;
}
