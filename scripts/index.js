import { navbar } from "/components/navbar.js";

let nav = document.getElementById("nav");
nav.innerHTML = navbar();

window.onscroll = function () {
  myFunction();
};

var navShow = document.getElementById("navDetails");
var sticky = navShow.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navShow.classList.add("sticky");
    navShow.style.backgroundColor = "white";
  } else {
    navShow.classList.remove("sticky");
  }
}
let user = document.createElement("div")

