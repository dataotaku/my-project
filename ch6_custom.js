const ver = navigator.userAgent;
console.log(ver);

// const link = document.querySelector("a");
// const link_href = link.getAttribute("href")
// console.log(link_href)

// const btns = document.querySelectorAll(".btns li");
// const boxs = document.querySelectorAll("section article");

// // 버튼의 갯수만큼 반복하며 클릭이벤트 연결
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", e => {
//         // 각 인수로 순서값과 버튼, 박스 그룹을 넣어서
//         // activation 함수 호출
//         activation(i, btns);
//         activation(i, boxs)
//     })
// }

// function activation(index, list) {
//     for (let el of list) {
//         el.classList.remove("onn");
//     }
//     list[index].classList.add("on")
// }

// const btnPlus = document.querySelector(".btnPlus");
// const btnMinus = document.querySelector(".btnMinus");

// let num = 0;

// btnPlus.addEventListener("click", e => {
//     e.preventDefault();
//     num++;
//     console.log(num);
// })

// btnMinus.addEventListener("click", e => {
//     e.preventDefault();
//     num--;
//     console.log(num);
// })

// const list = document.querySelectorAll(".list li")

// for (let el of list) {
//     el.addEventListener("click", e => {
//         e.preventDefault();
//         console.log(e.currentTarget.innerText);
//     })
// }

// const link = document.querySelector("a");

// link.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("링크를 클릭했습니다.!")
// })

// const box = document.querySelector("#box");

// box.style.width = "10%";
// box.style.height = "300px";
// box.style.backgroundColor = "hotpink";
// box.style.border = "none";
// box.style.transform = "rotate(10deg)";



// const items2 = document.querySelectorAll("#wrap article");
// // console.log(frame);

// for (let item of items2) {
//     console.log(item);
// }

// for (let i = 0; i < items2.length; i++) {
//     console.log(items2[i]);
// }

// const list = document.querySelector(".list")
// const items = list.children

// console.log(items);
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);

// const li = document.querySelector("li");
// console.log(li.closest("main"));