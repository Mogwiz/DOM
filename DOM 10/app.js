const buttonOne = document.querySelector("#playerOne");
const buttonTwo = document.querySelector("#playerTwo");
const resetName = document.querySelector("#resetName");
const resetButton = document.querySelector("#reset");
let score = buttonOne.parentElement.previousElementSibling;
let countOne = 0;
let countTwo = 0;
let scoreOne = document.querySelector("#first");
let scoreTwo = document.querySelector("#second");

let playerOne = prompt(`What is the name of the first player ?`);
let playerTwo = prompt(`What is the name of the second player ?`);

if(playerOne === null){
    playerOne = "Player 1";
}

if(playerTwo === null){
    playerTwo = "Player 2";
}

buttonOne.textContent = playerOne + " +1";
buttonTwo.textContent = playerTwo + " +1";

resetName.addEventListener("click", () => {
    playerOne = prompt(`What is the name of the first player ?`);
    playerTwo = prompt(`What is the name of the second player ?`);
    if(playerOne === null){
        playerOne = "Player 1";
    }
    
    if(playerTwo === null){
        playerTwo = "Player 2";
    }
    buttonOne.textContent = playerOne + " +1";
    buttonTwo.textContent = playerTwo + " +1";
});

scoreOne.textContent = countOne;
scoreTwo.textContent = countTwo;

resetButton.addEventListener("click", (e) => {
    e.stopPropagation;
    countOne = 0;
    countTwo = 0;
    scoreOne.textContent = countOne;
    scoreTwo.textContent = countTwo;
    scoreOne.style.color = "black";
    scoreTwo.style.color = "black";
    buttonOne.style.display = "inline-block";
    buttonTwo.style.display = "inline-block";
});

buttonOne.addEventListener("click", (e) => {
    e.stopPropagation;
    countOne++;
    scoreOne.textContent = countOne;
    if(countOne + countTwo === 5){
        buttonOne.style.display = "none";
        buttonTwo.style.display = "none";
    if(countOne > countTwo){
        scoreOne.style.color = "green";
        scoreTwo.style.color = "red";
    } else if (countOne < countTwo){
        scoreOne.style.color = "red";
        scoreTwo.style.color = "green";
    }
}
});

buttonTwo.addEventListener("click", (e) => {
    e.stopPropagation;
    countTwo++;
    scoreTwo.textContent = countTwo;
    if(countOne + countTwo === 5){
        buttonOne.style.display = "none";
        buttonTwo.style.display = "none";
        if(countOne > countTwo){
            scoreOne.style.color = "green";
            scoreTwo.style.color = "red";
        } else if (countOne < countTwo){
            scoreOne.style.color = "red";
            scoreTwo.style.color = "green";
        }
    }
});