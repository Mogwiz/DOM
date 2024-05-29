const body = document.querySelector("body");
const title = document.querySelector("h1");
const button = document.querySelector("button");
const randomOne = Math.floor(Math.random() * 254 + 1);
const randomTwo = Math.floor(Math.random() * 254 + 1);
const randomThree = Math.floor(Math.random() * 254 + 1);

button.addEventListener("click", () => {
    body.style.backgroundColor = `rgb(${randomOne}, ${randomTwo}, ${randomThree})`;
    title.innerHTML = `RGB (${randomOne}, ${randomTwo}, ${randomThree})`;
});


