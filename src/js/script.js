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
          drop_modal    = document.querySelector("[data-drop]");
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
            document.body.style.overflow = "hidden";
        });
    });

    drop_modal.addEventListener("click", () => {
        showModalWindow();
        document.body.style.overflow = "hidden";
    });

    modalWindow.addEventListener("click", (e) => { // Модальное окно
        if (e.target === modalWindow) closeModalWindow();
    });

    modalCloseBtn.addEventListener("click", () => { // Модальное окно
        closeModalWindow();
        document.body.style.overflow = "";
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
            currentNumb.textContent = `0${mainI+1}`;
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

    });

    slidePrev.addEventListener("click", () => {
        console.log(mainI+1);
        currentNumb.textContent = `0${mainI+1}`;
    });




    const deadline = "2024-02-01";

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());
        const timeBlock = document.querySelector('.timer');
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
            const block = document.createElement("div");
            block.id = "hover-block";
            block.textContent = "Акция закончилась!"
            timeBlock.appendChild(block);
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }
              
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer        = document.querySelector(selector),
              days         = document.querySelector('#days'),
              hours        = document.querySelector('#hours'),
              minutes      = document.querySelector('#minutes'),
              seconds      = document.querySelector('#seconds'),
              timeinterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            

            if (t.total <= 0) clearInterval(timeinterval);
        }

    }

    setClock('.timer', deadline);
});

