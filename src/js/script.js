"use strict";

window.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {

        if (window.scrollY + document.documentElement.clientHeight >= 3000) {
            scroll_block.style.display = "block";

        } else {
            scroll_block.style.display = "none";
        }
    });

// variables
    const modalBtn      = document.querySelectorAll('[data-btn="modal"]'),
          modalWindow   = document.querySelector(".modal"),
          modalCloseBtn = document.querySelector(".modal__close"),
          tabContent    = document.querySelectorAll(".tabcontent"),
          tabWrapper    = document.querySelector(".tabheader__items"),
          tabs          = document.querySelectorAll(".tabheader__item"),
          sliderWrap    = document.querySelector(".offer__slider-wrapper"),
          sliderField   = document.querySelector(".offer__slider-inner"),
          block_IMG     = document.querySelectorAll(".offer__slide"),
          slidePrev     = document.querySelector(".offer__slider-prev"),
          slideNext     = document.querySelector(".offer__slider-next"),
          slider = document.querySelector(".offer__slider"),
          currentNumb   = document.querySelector("#current"),
          drop_modal    = document.querySelector("[data-drop]"),
          scroll_block  = document.querySelector(".scrollTop"),
          scrollBtn     = document.querySelector(".scrollTop__block"),
          width = window.getComputedStyle(sliderWrap).width,
          arrOfDots = [];
    let mainI = 0,
        offset = 0;

    sliderField.style.width = 100 * block_IMG.length + "%";
    sliderField.style.display = "flex";
    sliderField.style.transition = "0.5s all";

    sliderWrap.style.overflow = "hidden";

    block_IMG.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = "relative";

    const indicatorsWrap = document.createElement("ol");
    indicatorsWrap.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicatorsWrap);

    for (let i = 0; i < block_IMG.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i+1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        indicatorsWrap.append(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        }

        arrOfDots.push(dot);
    }
    console.log(arrOfDots);
    slideNext.addEventListener("click", () => {
        if (offset == +width.slice(0, width.length - 2) * (block_IMG.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        currentNumb.textContent = `0${mainI+1}`;


    });

    slidePrev.addEventListener("click", () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (block_IMG.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        sliderField.style.transform = `translateX(-${offset}px)`;
    });


// functions 
    function opasityOff() {
        arrOfDots.forEach(item => {
            item.style.opacity = .5;
        });
    }

    function opacityOn(i = 0) {
        arrOfDots[i].style.opacity = 1;
    }

    function showModalWindow() { // Табы
        modalWindow.style.display = "block";
        clearTimeout(timeoutModal);
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

    hideAllContentForTabs();     // Табы
    showAllContentForTabs();     // Табы
    opasityOff();
    opacityOn(mainI);

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

        if (target && mainI < 3) {
            mainI++;
            currentNumb.textContent = `0${mainI+1}`;
            opasityOff();
            opacityOn(mainI);
        } else {
            mainI = 0;
            currentNumb.textContent = `0${mainI+1}`;
            opasityOff();
            opacityOn(mainI);
        }

        return mainI;

    });

    slidePrev.addEventListener("click", (event) => { // Слайдер
        const target = event.target;

        if (target && mainI > 0) {
            mainI--;
            currentNumb.textContent = `0${mainI+1}`;
            opasityOff();
            opacityOn(mainI);
        } else {
            mainI = 3;
            currentNumb.textContent = `0${mainI+1}`;
            opasityOff();
            opacityOn(mainI);
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo(0,0);
    });


    const deadline = "2024-05-20";

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

    const timeoutModal = setTimeout(showModalWindow, 5000);



    class CreateMenuCards {
        constructor(title, subtitle, price, img, alt, parentElement, ...restClasses) {
            this.title = title;
            this.subtitle = subtitle;
            this.img = img;
            this.price = price;
            this.alt = alt;
            this.parent = document.querySelector(parentElement);
            this.exchangeRate = 38;
            this.classes = restClasses;
            this.convertToUAH();
        }

        convertToUAH() { // Доп. функционал
            this.price = +this.price * this.exchangeRate; // Доп. функционал
        } // Доп. функционал

        render() {
            const element = document.createElement("div");

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(classNanes => element.classList.add(classNanes));

                element.classList.add("menu__item");
            }

            element.innerHTML = `
                <img src="${this.img}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                <div class="menu__item-descr">${this.subtitle}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;

            this.parent.append(element);
        }
    }

    new CreateMenuCards(
        "Фитнес", 
        "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!", 
        10, 
        "img/tabs/vegy.jpg", 
        "vegy", 
        ".menu .container",
        "big"
    ).render();

    new CreateMenuCards(
        "Премиум", 
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!", 
        50, 
        "img/tabs/elite.jpg", 
        "elite", 
        ".menu .container"
    ).render();

    new CreateMenuCards(
        "Постное", 
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.", 
        20, 
        "img/tabs/post.jpg", 
        "post", 
        ".menu .container",
        "big",
        "red"
    ).render();
});