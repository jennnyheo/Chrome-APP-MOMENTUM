const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const showinput = document.getElementById("todo-form");
const tosolist = document.getElementById("todolist");
const USERNAME_KEY = "username";

function onLoginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    paintGreetings(username);
    localStorage.setItem(USERNAME_KEY, username);
    showinput.classList.remove("hidden");
    tosolist.classList.remove("hidden");
}


function paintGreetings(username){
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello   ${username}` ;
}


const saveUsername = localStorage.getItem(USERNAME_KEY);
    if(saveUsername !== null){
        paintGreetings(saveUsername);
    }else{
        loginForm.addEventListener("submit", onLoginSubmit);
    }
