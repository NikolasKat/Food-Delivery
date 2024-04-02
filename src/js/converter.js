"use strict"

window.addEventListener("DOMContentLoaded", () => {
    const usd = document.querySelector("#usd"),
          uah = document.querySelector("#uah"),
          eur = document.querySelector("#eur");

    uah.addEventListener("input", () => {
        let res = uah.value;

        const req = new XMLHttpRequest();
        req.open("GET", "js/current.json");
        req.setRequestHeader("Content-type", "application-json; charset=utf-8");
        req.send();
    
        req.addEventListener("load", () => {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.response);

                if (res < 0) {
                    // console.log("Penis");
                    uah.style.border = "1px solid red";
                    usd.value = "";
                    eur.value = "";
                } else {
                    usd.value = (res / data.current.usd[1]).toFixed(2);
                    eur.value = (res / data.current.eur[1]).toFixed(2);
                    uah.style.border = "none";
                }
            }
        });
    });

    usd.addEventListener("input", e => {
        let res = usd.value;

        const req = new XMLHttpRequest();
        req.open("GET", "js/current.json");
        req.setRequestHeader("Content-type", "application-json; charset=utf-8");
        req.send();
    
        req.addEventListener("load", () => {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.response);

                if (res < 0) {
                    // console.log("Penis");
                    usd.style.border = "1px solid red";
                    uah.value = "";
                    eur.value = "";
                } else {
                    uah.value = (res * data.current.usd[0]).toFixed(2);
                    eur.value = (res / 0.93).toFixed(2);
                    usd.style.border = "none";
                }
            }
        });
    });

    eur.addEventListener("input", e => {
        let res = eur.value;

        const req = new XMLHttpRequest();
        req.open("GET", "js/current.json");
        req.setRequestHeader("Content-type", "application-json; charset=utf-8");
        req.send();
    
        req.addEventListener("load", () => {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.response);

                if (res < 0) {
                    // console.log("Penis");
                    eur.style.border = "1px solid red";
                    usd.value = "";
                    uah.value = "";
                } else {
                    usd.value = (res * 0.93).toFixed(2);
                    uah.value = (res * data.current.eur[1]).toFixed(2);
                    eur.style.border = "none";
                }
            }
        });
    });
});