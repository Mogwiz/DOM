const buttonOne = document.querySelector("#playerOne");
const buttonTwo = document.querySelector("#playerTwo");
const resetName = document.querySelector("#resetName");
const resetButton = document.querySelector("#reset");
const scoreOne = document.querySelector("#first");
const scoreTwo = document.querySelector("#second");
let score = buttonOne.parentElement.previousElementSibling;
let countOne = 0;
let countTwo = 0;
const a = 1;

/* let playerOne = prompt(`What is the name of the first player ?`);
let playerTwo = prompt(`What is the name of the second player ?`);

buttonOne.innerText = playerOne + " +1";
buttonTwo.innerText = playerTwo + " +1";

if(playerOne === null){
    playerOne = "Player 1";
}

if(playerTwo === null){
    playerTwo = "Player 2";
}

resetName.addEventListener("click", () => {
    playerOne = prompt(`What is the name of the first player ?`);
    playerTwo = prompt(`What is the name of the second player ?`);
    if(playerOne === null){
        playerOne = "Player 1";
    }
    
    if(playerTwo === null){
        playerTwo = "Player 2";
    }
    buttonOne.innerText = playerOne + " +1";
    buttonTwo.innerText = playerTwo + " +1";
}); */

score.innerHTML = `<span id="first">${countOne}</span> to <span id="second">${countTwo}</span>`;

resetButton.addEventListener("click", (e) => {
    e.stopPropagation;
    countOne = 0;
    countTwo = 0;
    score.innerHTML = `<span id="first">${countOne}</span> to <span id="second">${countTwo}</span>`;
});

buttonOne.addEventListener("click", (e) => {
    e.stopPropagation;
    countOne++;
    score.innerHTML = `<span id="first">${countOne}</span> to <span id="second">${countTwo}</span>`;
});

buttonTwo.addEventListener("click", (e) => {
    e.stopPropagation;
    countTwo++;
    score.innerHTML = `<span id="first">${countOne}</span> to <span id="second">${countTwo}</span>`;
});