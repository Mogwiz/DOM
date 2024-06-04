const game = document.querySelector("#game");
const board = document.querySelector("#board");
const grid = document.createElement("p");
const restart = document.querySelector("button");
const turn = document.getElementById("turn");
let circleTurn;

for (i = 0 ; i < 9 ; i++){
    const grid = document.createElement("p");
    board.appendChild(grid);
}

const arrBoard = board.children;
    for(const element of arrBoard){
        element.classList.add("cell");
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

    let arr = ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"];
    let clickCount = 1;
    let turnCount = arr[clickCount];
    const x = document.getElementById("x");
    const o = document.getElementById("o");
    const begin = document.getElementById("begin")  

    o.addEventListener("click", () =>{
        begin.style.display = "none";
        turn.style.display = "block";
        turn.innerText = `Player O's turn`;
    })

    x.addEventListener("click", () =>{
        begin.style.display = "none";
        turn.style.display = "block";
        turn.innerText = `Player X's turn`;
        clickCount++;
    })

    cells.forEach(cell => {
        cell.addEventListener("click", handleClick, { once: true})
    })

    function handleClick(e) {
        const cell = e.target;
        let turnCount = arr[clickCount];
        cell.innerText = `${arr[clickCount - 1]}`;
        if (clickCount === 1 || clickCount === 3 || clickCount === 5 || clickCount === 7|| clickCount === 9){
            turn.innerText = `Player ${arr[clickCount]}'s turn`;
        }
        if (clickCount === 2 || clickCount === 4 || clickCount === 6 || clickCount === 8|| clickCount === 10){
            turn.innerText = `Player ${arr[clickCount]}'s turn`;
        }
        if (clickCount === 1 || clickCount === 3 || clickCount === 5 || clickCount === 7|| clickCount === 9){
            cell.classList.add("o_class");
        }
        if (clickCount === 2 || clickCount === 4 || clickCount === 6 || clickCount === 8|| clickCount === 10){
            cell.classList.add("x_class");
        }
        clickCount++;
        /*if(checkWin(currentClass)) {
            console.log("winner");
        }*/
    }

    /*function checkWin(currentClass) {
        return winCombinations.some(combination => {
            return combination.every(index => {
                return cells[index].classList.contains(currentClass);
            })
        })
    }*/

    restart.addEventListener("click", () =>{
        begin.style.display = "block";
        turn.style.display = "none";
        clickCount = 1;
        cells.forEach(cell => {
            cell.innerText = "";
        })
    })


