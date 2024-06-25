const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
// 각각의 article 효소가 회전할 각도
const deg = 45;
const len = lists.length - 1;
let i = 0;

// article의 갯수 만큼 반복
for (let el of lists) {
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    i++;
}