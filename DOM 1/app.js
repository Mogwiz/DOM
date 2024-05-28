const mainHeading = document.getElementById("main-heading");
const listItem = document.getElementsByClassName("list-item");
const list = document.getElementsByTagName("li");
const container = document.querySelector(".container");
const listAll = document.querySelectorAll("li");


document.querySelector("#main-heading").style.fontSize = "5rem";
document.querySelector("#main-heading").style.fontWeight = "250";
mainHeading.style.color = "red";

/* On crée une variable pour sélectionner un endroit et 
une deuxième variable pour choisir ce que l'on veut créer, 
ensuite on fait la commande "endroitvar1.appendChild(ajoutvar2)" */
const myList = document.querySelector("ul");
const myItem = document.createElement("li");

myList.appendChild(myItem);
myItem.remove();


console.log(mainHeading);
console.log(listItem);
console.log(list);
console.log(container);
console.log(listAll);