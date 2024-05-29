const container = document.querySelector(".container");

const title = document.querySelector("h1");
setTimeout(function change() {title.innerHTML = "There are a lot of buttons here !";}, 2000);
setTimeout(function create() {for (i = 1 ; i < 101 ; i++){
    const text = document.createTextNode(`I am button ${i}`);
    const button = document.createElement("button");
    container.appendChild(button);
    button.appendChild(text);
}}, 2000);