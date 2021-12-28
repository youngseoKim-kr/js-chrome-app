const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");    //길이가 2보다 작으면 앞에 0을 추가해서 출력 
    const minutes = String(date.getMinutes()).padStart(2,"0");  //padStart는 string에 사용가능하기 때문에 string으로 변환해준다.
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;  //시간 분 초를 clock에 넣어준다.
}

getClock();    //시간을 1초뒤에 보여주는게 아니고 웹사이트가 로딩되면 바로 보여주기 위함
setInterval(getClock,1000); //getClock 함수를 1초마다 반복실행