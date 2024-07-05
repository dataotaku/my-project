const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
// 각각의 article 효소가 회전할 각도
const deg = 45;
const len = lists.length - 1;
let num = 0;
let active = 0;
let i = 0;

function activation(index, lists) {
    for (let el of lists) {
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}

// article의 갯수 만큼 반복
for (let el of lists) {
    let pic = el.querySelector(".pic");
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    // 배경이미지 추가
    pic.style.backgroundImage = `url(../img/member12_${i + 1}.jpg)`;
    i++;

    //각 article요소 안쪽의 재생, 정지, 처음부터 재생 버튼을 변수에 저장
    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    //재생 버튼 클릭시
    play.addEventListener("click", e => {
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        e.currentTarget.closest("article").querySelector(".audio").play();
    });

    //정지 버튼 클릭시
    pause.addEventListener("click", e => {
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
        e.currentTarget.closest("article").querySelector(".audio").pause();
    });

    //load 버튼 클릭시
    load.addEventListener("click", e => {
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        e.currentTarget.closest("article").querySelector(".audio").load();
        e.currentTarget.closest("article").querySelector(".audio").play();
    });
}

prev.addEventListener("click", () => {
    num++;
    frame.style.transform = `rotate(${num * deg}deg)`;
});
next.addEventListener("click", () => {
    num--;
    frame.style.transform = `rotate(${num * deg}deg)`;
});



