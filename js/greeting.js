const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string 값은 반복적으로 사용하는 경우 변수를 지정하여 사용해주는 것이 좋다.
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event) {

    event.preventDefault();  //event의 기본동작을 막아준다.
    loginForm.classList.add(HIDDEN_CLASSNAME);  //loginForm에 hidden이라는 클래스 이름을 넣어준다.
    const username = loginInput.value;      //username에 value값을 넣어준다.
    localStorage.setItem(USERNAME_KEY, username);  //localStorage에 username의 키를 가진 usernamse변수값을 넣어준다.
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;    //greeting에 text를 넣어준다.
    greeting.classList.remove(HIDDEN_CLASSNAME);   //class이름을 삭제해준다.
}





const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername=== null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    //show the greeting
    paintGreetings(savedUsername);  //반복되는 문장 함수사용
}