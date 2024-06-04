const game = document.querySelector("#game");
const board = document.querySelector("#board");
const grid = document.createElement("p");
const restart = document.querySelector("button");
const turn = document.getElementById("turn");
let circleTurn = true;

for (let i = 0; i < 9; i++) {
const cell = document.createElement("p");
cell.classList.add("cell");
board.appendChild(cell);
}

const arrBoard = board.children;
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

let clickCount = 0;

const x = document.getElementById("x");
const o = document.getElementById("o");
const begin = document.getElementById("begin");

o.addEventListener("click", () => {
begin.style.display = "none";
turn.style.display = "block";
turn.innerText = `Player O's turn`;
circleTurn = true;
});

x.addEventListener("click", () => {
begin.style.display = "none";
turn.style.display = "block";
turn.innerText = `Player X's turn`;
circleTurn = false;
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
return;
}

turn.innerText = `Player ${circleTurn ? "O's" : "X's"} turn`;

clickCount++;
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

function displayWinner(winner) {
turn.innerText = `Player ${winner} wins!`;
}

restart.addEventListener("click", () => {
begin.style.display = "block";
turn.style.display = "none";
clickCount = 0;
cells.forEach(cell => {
    cell.innerText = "";
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
});
});