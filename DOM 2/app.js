const text = document.querySelector("li");
console.log(text.innerText);

const myList = document.querySelector("ul");
const myItem = document.createElement("li");
myList.appendChild(myItem);

myItem.innerText = text.innerText;

const list = document.querySelectorAll("li");
myList.style.color = "purple";
/* ou list.forEach(listItem => listItem.style.color = "purple"); */

myItem.style.color = "gold";

const hall = myList.children[3];
console.log(hall);
const hallArr = hall.innerText.split(' ');
console.log(hallArr);
hall.innerHTML = hallArr[0]+ " <span>"+hallArr[1]+"</span>";

const changeColor = document.querySelector("span");
changeColor.style.color = "red";