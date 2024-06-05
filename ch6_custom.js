const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");

let num = 0;

btnPlus.addEventListener("click", e => {
    e.preventDefault();
    num++;
    console.log(num);
})

btnMinus.addEventListener("click", e => {
    e.preventDefault();
    num--;
    console.log(num);
})

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