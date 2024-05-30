parent.addEventListener("click", (e) => {
    if (e.target.innerText === "One") {
        alert("You clicked the first button");
    }

    if (e.target.innerText === "Two") {
        alert("Elodie loves cats");
    }

    if (e.target.innerText === "Three") {
        alert("I am so happy !");
    }
    // etc...
});

/* document.addEventListener("click", (e) => {
    if (e.target.matches(".my-class")) {
    // Handle clicks on the elements with "my-class" class
}
    if (e.target.matches("li")) {
    // Handle clicks on all li in the page
}
  // etc
}); */


/* To remove an event :
const myFunc = () => {
    console.log("clicked");
};

element.addEventListener("click", myFunc);

// Then you can later remove the event listener specifying that it should remove the "click" event to this specific function.

element.removeEventListener("click", myFunc); */