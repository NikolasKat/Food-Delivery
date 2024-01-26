"use strict";

window.addEventListener("DOMContentLoaded", () => {

// variables
    const modalBtn      = document.querySelectorAll('[data-btn="modal"]'),
          modalWindow   = document.querySelector(".modal"),
          modalCloseBtn = document.querySelector(".modal__close"),
          tabContent    = document.querySelectorAll(".tabcontent"),
          tabWrapper    = document.querySelector(".tabheader__items"),
          tabs          = document.querySelectorAll(".tabheader__item"),
          block_IMG     = document.querySelectorAll(".offer__slide"),
          slidePrev     = document.querySelector(".offer__slider-prev"),
          slideNext     = document.querySelector(".offer__slider-next"),
          currentNumb   = document.querySelector("#current"),
          totalNumb     = document.querySelector("#total");
    let mainI = 0;


// functions 
    function showModalWindow() { // Табы
        modalWindow.style.display = "block";
    }

    function closeModalWindow() { // Табы
        modalWindow.style.display = "none";
    }

    function hideAllContentForTabs() { // Табы

        tabContent.forEach(block => {
            block.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showAllContentForTabs(i = 0) { // Табы

        tabContent[i].style.display = "block";

        tabs[i].classList.add("tabheader__item_active");
    };

    function hideIMG() { // Слайдер
        block_IMG.forEach(item => {
            item.style.display = "none";
        });
    }

    function showIMG(i) { // Слайдер
        if (i > 3) {
            mainI = 0;
            block_IMG[0].style.display = "block";
        } else {
            block_IMG[i].style.display = "block";
        }
    }

    hideAllContentForTabs();     // Табы
    showAllContentForTabs();     // Табы
    hideIMG();                   // Слайдер
    showIMG(mainI);              // Слайдер


// EventListeners
    modalBtn.forEach((btn) => { // Модальное окно
        btn.addEventListener("click", () => {
            showModalWindow();
        });
    });

    modalCloseBtn.addEventListener("click", () => { // Модальное окно
        closeModalWindow();
    });

    tabWrapper.addEventListener("click", (event) => { // Табы
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideAllContentForTabs();
                    showAllContentForTabs(i);
                }
            });
        }
    });

    slideNext.addEventListener("click", (event) => { // Слайдер
        const target = event.target;

        if (target) {
            mainI++;
            hideIMG();
            showIMG(mainI);
        }

        return mainI;
    });

    slidePrev.addEventListener("click", (event) => { // Слайдер
        const target = event.target;

        if (target && mainI > 0) {
            mainI--;
            hideIMG();
            showIMG(mainI);
        } else {
            mainI = 3;
            hideIMG();
            showIMG(mainI);
        }

        return mainI;
    });

});
