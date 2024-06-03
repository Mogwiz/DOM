const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("form");
const usernameError = username.nextElementSibling;
const emailError = email.nextElementSibling;
const passwordError = password.nextElementSibling;
const confirmPasswordError = confirmPassword.nextElementSibling;

form.addEventListener("submit", (e) =>{
        e.preventDefault();
    if (username.value === "" || username.value === null || username.value.length < 5 || username.value.length > 10 || !username.value.match(/^[a-z]+$/)){
        usernameError.style.display = "block";
        username.style.color = "red";
    }
    if (username.value.length > 5 && username.value.length < 10 || username.value.match(/^[a-z]+$/)){
        usernameError.style.display = "none";
        username.style.color = "green";
    }
    
    if (password.value === "" || password.value === null || password.value.length < 8 || password.value.length > 15){
        passwordError.style.display = "block";
        password.style.color = "red";
    }
    if (password.value.length > 8 && password.value.length < 15){
        passwordError.style.display = "none";
        password.style.color = "green";
    }

    if(!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.style.display = "block";
        email.style.color = "red";
    }
    if(email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.style.display = "none";
        email.style.color = "green";
    }

    if (confirmPassword.value !== password.value){
        confirmPasswordError.style.display = "block";
        confirmPassword.style.color = "red";
    }
    if (confirmPassword.value === password.value){
        confirmPasswordError.style.display = "none";
        confirmPassword.style.color = "green";
    }

    if (confirmPassword.style.color === "green" 
    && email.style.color === "green"
    && password.style.color === "green"
    && username.style.color === "green"){
        console.log(username.value);
        console.log(email.value);
        console.log(password.value);
        console.log(confirmPassword.value);
    }
})