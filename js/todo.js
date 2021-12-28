const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//application에 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));  //JSON.stringify를 이용해서 toDos에 값을 string 저장
}

//리스트 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;  //클릭한 이벤트안에 target안에 요소를 보면 li태그가 특정되고
    li.remove();   //특정된 li 태그를 삭제해준다.
    toDos = toDos.filter(toDo => toDo.id !==parseInt(li.id));  //toDo는 toDos안에 있는 요소로 todo.id는 number li.id는 string이다.
    saveToDos(); //다시 저장해준다.
}

//li 태그 만들고 그리기
function paintToDo(newTodo) {      
    const li = document.createElement("li");  //li 태그 생성
    li.id=newTodo.id;
    const span = document.createElement("span");  //span 태그 생성
    span.innerText = newTodo.text;   //입력한 값을 받아와서 span태그 안에 작성
    const button = document.createElement("button"); 
    button.innerText = "✘";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);   //li안에 span을 넣기
    li.appendChild(button);
    toDoList.appendChild(li);   //todolist는 id값이 todolist인 태그를 가져왔고 그 태그 자식으로 li태그를 넣어준다.
}

function handleToDoSubmit(event) {
    event.preventDefault();   //기본동작을 막는다. 새로고침 실행 x
    const newTodo = toDoInput.value;  //현재 value값을 새로운 변수에 저장
    toDoInput.value="";     //newTodo 변수와 상관없이 toDoinput 의 값은 비워진다.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),   //랜덤한 값(1000분의 1초)가 id로 입력
    };
    toDos.push(newTodoObj);  //newtodoobj 객체를 todos 배열에 삽입
    paintToDo(newTodoObj);     //입력한 value값을 paintodo 함수로 전달
    saveToDos(); //saveToDos함수 실행
}
toDoForm.addEventListener("submit", handleToDoSubmit);  //input박스가 제출되면

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null) {  //(saveToDos) 같은
    const parsedToDos = JSON.parse(savedToDos);   //string을 array로 변환
    toDos = parsedToDos;      //toDos가 새로고침하면 빈배열이 되는걸 방지
    parsedToDos.forEach(paintToDo);  //foreach로 array 값에 하나하나 접근해서 paintToDo로 그려준다.
}