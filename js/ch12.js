const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = document.querySelectorAll("audio");

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
    lists[index].classList.add("on");
}

//article의 개수만큼 반복 
for (let el of lists) {
    let pic = el.querySelector(".pic");

    //각 article 요소를 45도씩 회전하고 아래로 배치
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(../img/member12_${i + 1}.jpg)`;
    i++;

    //각 article 요소 안쪽의 재생, 정지, 처음부터 재생 버튼을 변수에 저장
    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    //play버튼 클릭 시, 
    play.addEventListener("click", e => {
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if (isActive) {
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });

    //pause버튼 클릭 시
    pause.addEventListener("click", e => {
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if (isActive) {
            e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
            e.currentTarget.closest("article").querySelector("audio").pause();
        }

    });

    //load버튼 클릭 시
    load.addEventListener("click", e => {
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if (isActive) {
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            e.currentTarget.closest("article").querySelector("audio").load();
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });
}

function initMusic() {
    for (let el of audio) {
        el.pause();
        el.load();
        el.parentElement.previousElementSibling.classList.remove("on");
    }
}

// prev 버튼 클릭시
prev.addEventListener("click", () => {
    initMusic();
    num++;
    frame.style.transform = `rotate(${num * deg}deg)`;

    (active == 0) ? active = len : active--;
    activation(active, lists);
});

// next 버튼 클릭시
next.addEventListener("click", () => {
    initMusic();
    num--;
    frame.style.transform = `rotate(${num * deg}deg)`;

    (active == len) ? active = 0 : active++;
    activation(active, lists);
});

play.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
});
