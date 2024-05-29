const buttons = document.querySelectorAll("button");
console.log(buttons[1].nextElementSibling);

buttons.forEach(function(button) {
    button.addEventListener("click", () => {
        if (button.innerHTML === "Open tab"){
            button.nextElementSibling.style.display = "block";
            button.innerHTML = "Close tab";
        } else if (button.innerHTML === "Close tab"){
            button.nextElementSibling.style.display = "none";
            button.innerHTML = "Open tab";
        }
    });
});