const ver = navigator.userAgent;
console.log(ver);

// 정규 표현식으로 IE 여부 확인
const isIE = /trident/i.test(ver);
console.log(isIE);

if (isIE) {
    alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
}