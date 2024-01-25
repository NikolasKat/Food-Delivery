"use strict";

// window.addEventListener("DOMContentLoaded", () => {
//     const tabs = document.querySelectorAll(".tabheader__item"),
//           tabsWrapper = document.querySelector(".tabheader__items"),
//           tabContent = document.querySelectorAll(".tabcontent");

//     function hiddenElements() {

//         // Здесь мы удаляем блоки с инфой
//         tabContent.forEach(item => {
//             item.style.display = "none";
//         });

//         // Здесь мы удаляем класс активности у всех табов
//         tabs.forEach(item => {
//             item.classList.remove("tabheader__item_active");
//         });
//     }

//     function showElements(i = 0) {

//         // Показываем определённый блок
//         tabContent[i].style.display = "block";

//         // Добавляем определённому табу класс активности 
//         tabs[i].classList.add("tabheader__item_active");
//     }

//     hiddenElements();
//     showElements();

//     tabsWrapper.addEventListener("click", (event) => {
//         const target = event.target;

//         if (target && !target.classList.contains("tabheader__item_active")) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hiddenElements();
//                     showElements(i);
//                 }
//             });
//         }
//     });




//     const modalBtn = document.querySelectorAll('[data-btn="modal"]'),
//           modalBlock = document.querySelector(".modal"),
//           modalClose = document.querySelector(".modal__close");

//     function clickOnBtn() {
//         modalBtn.forEach(item => {
//             item.addEventListener("click", () => {
//                 modalBlock.style.display = "block";
//             });
//         });
//     }

//     function closeMidal() {
//         modalClose.addEventListener("click", () => {
//             modalBlock.style.display = "none";
    
//         });
//     }

//     clickOnBtn();
//     closeMidal();
// });

// =======================================================MAP
// const obj1 = {
//     name: "Alex",
//     age: 28,
//     gender: "Man",
//     say: function() {
//         console.log("Hello world!");
//     },
//     languages: ["JS", "EN", "UA", "RU"]
// };

// Object.defineProperty(obj1, "say", {
//     enumerable: false
// });
// const myMap = new Map(Object.entries(obj1));

// for (let [key, element] of myMap) {
//     console.log(key, element);
// }

// for (let key of myMap.keys()) console.log(key);

// for (let value of myMap.values()) console.log(value);

// myMap.forEach((key, value, m) => {
//     console.log(`${key} and ${value} and ${m}`);
// });

// const newObj1 = Object.fromEntries(myMap);
// console.log(Object.keys(newObj1).length);


// ===============================================SET

// const arr = [1,2,4,3,5,6,7,8,8,5,9,0,9,9,2,1,4];

// const newSet = new Set(arr);

// newSet.add(12);
// newSet.add(152);
// newSet.delete(2);
// console.log(newSet);

// for (let item of newSet) {
//     if (item % 2 != 0) continue;
//     else {
//         console.log(item);
//     }
// }

// function sort(a, b) {
//     return a - b;
// }

// function SetArr(data) {
//     const newData = [...new Set(data)];
//     return newData.sort(sort);
// }


// console.log(SetArr(arr));

// =========================================

// function isPangram(string) {
//     const newSet = new Set(string.toLowerCase().split(""));
//     newSet.delete(" ");
//     return newSet.size === 26;

// Second solution option (второй вариант решения)
//     // newSet.delete(' ');
//     // if (newSet.size == 26) {
//     //     return true
//     // } else {
//     //     return false
    // }

// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));// => true
// console.log(isPangram("Hello world"));// => false
// console.log(isPangram("Abcdefghijklmnopqrstuvwxyz")); // => true
// ======================================================


const user = {
    email: "nikakotov2005@gmail.com",
    nickname: "Kasatka76",
    user_Online: true,
    games: ["The last of us: PART 1","RDR2","GTA6","Far Cry 4","The last of us: PART 2"],
    writeMassage: function(massage) {
        console.log(massage);
    }
};

let {email, nickname, user_Online, games, writeMassage} = user;


Object.defineProperties(user, {
    writeMassage: {writable: true, enumerable: false},
    email: {writable: false, enumerable: true, configurable: false},
    nickname: {writable: true, enumerable: true},
    user_Online: {writable: true, enumerable: false}
});

const newMap = new Map();

newMap.set(games[0], {gameProgress: 100})
      .set(games[1], {gameProgress: 100})
      .set(games[2], {gameProgress: 30})
      .set(games[3], {gameProgress: 80})
      .set(games[4], {gameProgress: 20})

function sortArray(a, b) {
    return a - b;
}
// console.log(newMap);
let gameArray = [];
for (let elem of Array.from(newMap)) {
    gameArray.push(elem);
}
// console.log(gameArray.sort());

// writeMassage("Hello world");