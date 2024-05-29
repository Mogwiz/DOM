const hello = document.querySelector("button");
const goodbye = hello.nextElementSibling;

hello.addEventListener("click", () => {
    alert(`Oh my God ! You again !!!`);
});

goodbye.addEventListener("click", () => {
    alert(`Thank God ! I thought you'd' never leave !`);
});