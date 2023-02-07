import pageLoad from "./page-load.js";
import menuLoad from "./menu-load.js";
import "./style.css";

// Main page
document.body.appendChild(pageLoad);

// Menu page
//document.body.appendChild(menuLoad);

document.querySelector("#menuCaller").onclick = function () {
  document.body.removeChild(document.querySelector(".content"));
  document.body.appendChild(menuLoad);

  document.querySelector("#homeButton").onclick = function () {
    document.body.removeChild(document.querySelector(".menu"));
    document.body.appendChild(pageLoad);
  };
};
