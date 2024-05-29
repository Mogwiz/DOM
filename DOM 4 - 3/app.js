const myList = document.querySelectorAll("ul li")

for(const element of myList){
    element.classList.toggle("highlight");
}
