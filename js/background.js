const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");   //img태그를 만든다.

bgImage.className="background";  //css를 위해 background이미지에 class 추가

bgImage.src=`img/${chosenImage}`;     //img 경로에 랜덤함수로 만든 값을 넣어준다.

document.body.appendChild(bgImage);      //body안에 자식으로 bgImage를 넣어준다.