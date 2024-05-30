const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("button was clicked");
});

p.addEventListener("click", () => {
    alert("paragraph was clicked");
});