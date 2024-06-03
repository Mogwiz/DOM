const game = document.querySelector("#game");
const board = document.querySelector("#board");
const grid = document.createElement("p");
const restart = document.querySelector("button");
const turn = document.getElementById("turn");

for (i = 0 ; i < 9 ; i++){
    const grid = document.createElement("p");
    board.appendChild(grid);
}

const arrBoard = board.children;
    for(const element of arrBoard){
        element.classList.add("cell");
    }
const grids = document.querySelectorAll(".cell");

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

    let arr = ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"];
    let clickCount = 0;
    const x = document.getElementById("x");
    const o = document.getElementById("o");
    const begin = document.getElementById("begin")

    if (clickCount === 0 || clickCount === 2 || clickCount === 4 || clickCount === 6|| clickCount === 8){
        turn.innerText = `Player O's turn`;
    }
    if (clickCount === 1 || clickCount === 3 || clickCount === 5 || clickCount === 7|| clickCount === 9){
        turn.innerText = `Player X's turn`;
    }    

    o.addEventListener("click", () =>{
        begin.style.display = "none";
        turn.style.display = "block";
        if (clickCount === 0 || clickCount === 2 || clickCount === 4 || clickCount === 6|| clickCount === 8){
            turn.innerText = `Player O's turn`;
        }
    })

    x.addEventListener("click", () =>{
        begin.style.display = "none";
        turn.style.display = "block";
        let clickCount = 1;
        if (clickCount === 1 || clickCount === 3 || clickCount === 5 || clickCount === 7|| clickCount === 9){
            turn.innerText = `Player X's turn`;
        }
    })

    restart.addEventListener("click", () =>{
        begin.style.display = "block";
        turn.style.display = "none";
    })


