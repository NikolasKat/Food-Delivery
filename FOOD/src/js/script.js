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




//     const modalBtn = document.querySelector("button.btn.btn_white"),
//           modalBlock = document.querySelector(".modal"),
//           modalClose = document.querySelector(".modal__close");

//     modalBtn.addEventListener("click", () => {

//         modalBlock.style.display = "block";
//     });

//     modalClose.addEventListener("click", () => {
//         modalBlock.style.display = "none";

//     });
    
//     console.log(typeof(Infinity));
// });

 setInterval(function() {
    console.log("hello");
 },500);

 function worldWord() {
    console.log("world");
 }

 worldWord();