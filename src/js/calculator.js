"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".calculating__result span"),
        paramWrap = document.querySelector(".calculating__choose_medium");
  let height, weight, age, ratio, sex;

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

      } else {
        ratio = e.target.getAttribute("data-ratio");
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

  function getDynemicGata(paramWrap) {
	paramWrap.addEventListener("input", e => {
		// console.log(e.target.getAttribute("id"));
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

  getDynemicGata(paramWrap);

});
