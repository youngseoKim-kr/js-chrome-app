const quotes = [
    {
        quote:"Follow your heart.",
        author : "마음이 원하는 대로 따르세요.",
    },
    {
        quote:"Seize the day.",
        author : "오늘을 즐기세요.",
    },
    {
        quote:"you only live once",
        author : "인생은 한 번 뿐이에요.",
    },
    {
        quote:"Don't dwell on the past.",
        author : "과거에 연연하지 마세요.",
    },
    {
        quote:"Believe in yourself.",
        author : "자기 자신을 믿으세요.",
    },
    {
        quote:"Past is just past.",
        author : "과거는 과거입니다.",
    },
    {
        quote:"Love yourself.",
        author : "자기 자신을 사랑하세요.",
    },
    {
        quote:"Where there is a will there is a way.",
        author : "뜻이 있는 곳엔 길이 있다.",
    },
    {
        quote:"Don't beat yourself up.",
        author : "자책하지 마세요.",
    },
    {
        quote:"Life is a journey.",
        author : "인생은 여정이다.",
    },
];

const quote = document.querySelector("#quote span:first-child"); //quote라는 id값을 가지는 첫번째 값
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];   //math.random은 0~9까지 랜덤한 값이 나온다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;