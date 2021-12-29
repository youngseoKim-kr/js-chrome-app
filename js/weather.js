
const API_KEY ="9eee8256358a2ea1f62600a640017ee8";

function onGeoOk(position) {
    //좌표
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  //api url
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText =data.name;                                            //살고있는 좌표의 도시이름
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;   //날씨정보와 온도
    });
}
function onGeoError() {
    alert("Can't find you. No weather fot you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  //사는곳 좌표받아오는 함수  성공,실패 인자를 넣어준다.