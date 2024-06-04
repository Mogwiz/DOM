const game = document.querySelector("#game");
const board = document.querySelector("#board");
const grid = document.createElement("p");
const restart = document.querySelector("button");
const turn = document.getElementById("turn");
let circleTurn = true;
let gameOver = false;

for (let i = 0; i < 9; i++) {
const cell = document.createElement("p");
cell.classList.add("cell");
board.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");

const winCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

const x = document.getElementById("x");
const o = document.getElementById("o");
const begin = document.getElementById("begin");

o.addEventListener("click", () => {
begin.style.display = "none";
turn.style.display = "block";
turn.innerText = `Player O's turn`;
circleTurn = true;
board.style.display = "grid";
});

x.addEventListener("click", () => {
begin.style.display = "none";
turn.style.display = "block";
turn.innerText = `Player X's turn`;
circleTurn = false;
board.style.display = "grid";
});

cells.forEach(cell => {
cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
const cell = e.target;
if (cell.innerText !== "") return;

cell.innerText = circleTurn ? "O" : "X";
circleTurn = !circleTurn;

const winner = checkWinner(cell.innerText);
if (winner) {
displayWinner(winner);
gameOver = true;
return;
}

const isDraw = checkDraw();
if (isDraw) {
displayDraw();
gameOver = true;
return;
}

turn.innerText = `Player ${circleTurn ? "O's" : "X's"} turn`;
}

function checkWinner(symbol) {
for (const combination of winCombinations) {
    if (
    cells[combination[0]].innerText === symbol &&
    cells[combination[1]].innerText === symbol &&
    cells[combination[2]].innerText === symbol
    ) {
    return symbol;
    }
}
return null;
}

function checkDraw() {
    for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {
        return false;
    }
    }
    return true;
}

function displayWinner(winner) {
turn.innerText = `Player ${winner} wins!`;
cells.forEach(cell => cell.removeEventListener("click", handleClick));
}

function displayDraw() {
    turn.innerText = "It's a Draw!";
}

restart.addEventListener("click", () => {
begin.style.display = "block";
turn.style.display = "none";
gameOver = false;
cells.forEach(cell => {
    cell.innerText = "";
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
    board.style.display = "none";
});
});