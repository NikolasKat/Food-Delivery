"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".calculating__result span"),
        paramWrap = document.querySelector(".calculating__choose_medium");

  let height, weight, age, ratio, sex;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female";
    localStorage.setItem("sex", "female");
  }

  if (localStorage.getItem("ratio")) {
    sex = localStorage.getItem("sex");
  } else {
    ratio = 1.375;
    localStorage.setItem("sex", 1.375);
  }

  function initLocalSettings(selector, activeClass) {
	const elements = document.querySelectorAll(selector);

	elements.forEach(elem => {
		elem.classList.remove(activeClass);
		if (elem.getAttribute("id") === localStorage.getItem("sex")) {
			elem.classList.add(activeClass);
		}

		if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
			elem.classList.add(activeClass);
		}
	});
  }

  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(".calculating__choose_big div", "calculating__choose-item_active");

  function calcTotal() {
    if (!height || !weight || !age || !ratio || !sex) {
      result.style.fontSize = "15px";
	  
      result.textContent = "Недостаточно данных!";
      return;
    }

    if (sex === "female") {
      result.textContent = (
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) *
        ratio
      ).toFixed(2);
    } else {
      result.textContent = (
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) *
        ratio
      ).toFixed(2);
    }
  }

  calcTotal();

  function getStaticData(parentElement, active) {
    const elem = document.querySelector(parentElement);
	  const elemes = document.querySelectorAll(`${parentElement} div`);

    elem.addEventListener("click", (e) => {

      if (elem.getAttribute("id") === "gender") {
        sex = e.target.getAttribute("id");
        localStorage.setItem("sex", e.target.getAttribute("id"));
      } else {
        ratio = e.target.getAttribute("data-ratio");
        localStorage.setItem("ratio", e.target.getAttribute("data-ratio"));
      }

      elemes.forEach(item => {
        item.classList.remove(active);
      });

      e.target.classList.add(active);

      calcTotal();
    });
  }

  getStaticData("#gender", "calculating__choose-item_active");
  getStaticData(".calculating__choose_big", "calculating__choose-item_active");

  function getDynemicGata(paramWrap, selector) {

    const input = document.querySelector(selector);
    
    paramWrap.addEventListener("input", e => {

      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }

      const idData = e.target.getAttribute("id");
      switch (idData) {
        case "height": 
          height = e.target.value;
          break;
        case "weight": 
          weight = e.target.value;
          break;
        case "age": 
          age = e.target.value;
          break;
      }
      
      calcTotal();
	})
  }

  getDynemicGata(paramWrap, '#height');
  getDynemicGata(paramWrap, '#weight');
  getDynemicGata(paramWrap, '#age');


});
