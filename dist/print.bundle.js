/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pageLoad() {
  let content = document.querySelector("#content");
  //header
  let header = document.createElement("section");
  header.classList = "header";
  let headerImg = document.createElement("img");
  headerImg.src = "/recourses/logo.png";
  headerImg.alt = "logo";

  header.appendChild(headerImg);

  //main
  let main = document.createElement("section");

  //featured
  let featured = document.createElement("div");
  featured.classList = featured;
  let featuredImg = document.createElement("img");
  featuredImg.src = "/recourses/herothaid.jpg";
  featuredImg.alt = "herothaipizza";
  featured.appendChild(featuredImg);

  //actionOptions
  let actionOption = document.createElement("div");
  actionOption.classList = actionOption;

  //Option1
  let option = document.createElement("div");
  option.classList = "option";
  let optionImg = document.createElement("img");
  optionImg.src = "/recourses/icon_pizza.png";
  optionImg.alt = "icon of pizza";
  let text = document.createElement("p");
  text.innerHTML = "Order pizza";
  option.appendChild(optionImg);
  option.appendChild(text);
  actionOption.appendChild(option);

  //Option2
  option.removeChild(optionImg);
  option.removeChild(text);
  optionImg.src = "/recourses/icon_calendar.png";
  optionImg.alt = "icon of calendar";
  text.innerHTML = "Order table";
  option.appendChild(optionImg);
  option.appendChild(text);
  actionOption.appendChild(option);

  //Option3
  option.removeChild(optionImg);
  option.removeChild(text);
  optionImg.src = "/recourses/icon_menu.png";
  optionImg.alt = "icon of menu";
  text.innerHTML = "Resturant";
  option.appendChild(optionImg);
  option.appendChild(text);
  actionOption.appendChild(option);

  //news
  let news = document.createElement("div");
  news.classList = "news";

  //news element 1
  let newsElement = document.createElement("div");
  newsElement.classList = "newsElement";
  let newsImg = document.createElement("img");
  newsImg.src = "/recourses/glutenfri.png";
  newsImg.alt = "glutenfree choice";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 2
  newsElement.removeChild(newsImg);
  newsImg.src = "/recourses/ledig.jpg";
  newsImg.alt = "job offer";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 3
  newsElement.removeChild(newsImg);
  newsImg.src = "/recourses/student.gif";
  newsImg.alt = "student offer";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  //news element 4
  newsElement.removeChild(newsImg);
  newsImg.src = "/recourses/news.png";
  newsImg.alt = "news letter";
  newsElement.appendChild(newsImg);
  news.appendChild(newsElement);

  main.appendChild(featured);
  main.appendChild(actionOption);
  main.appendChild(news);

  content.appendChild(header);
  content.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIC8vaGVhZGVyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdCA9IFwiaGVhZGVyXCI7XG4gIGxldCBoZWFkZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBoZWFkZXJJbWcuc3JjID0gXCIvcmVjb3Vyc2VzL2xvZ28ucG5nXCI7XG4gIGhlYWRlckltZy5hbHQgPSBcImxvZ29cIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySW1nKTtcblxuICAvL21haW5cbiAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAvL2ZlYXR1cmVkXG4gIGxldCBmZWF0dXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlYXR1cmVkLmNsYXNzTGlzdCA9IGZlYXR1cmVkO1xuICBsZXQgZmVhdHVyZWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmZWF0dXJlZEltZy5zcmMgPSBcIi9yZWNvdXJzZXMvaGVyb3RoYWlkLmpwZ1wiO1xuICBmZWF0dXJlZEltZy5hbHQgPSBcImhlcm90aGFpcGl6emFcIjtcbiAgZmVhdHVyZWQuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWcpO1xuXG4gIC8vYWN0aW9uT3B0aW9uc1xuICBsZXQgYWN0aW9uT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWN0aW9uT3B0aW9uLmNsYXNzTGlzdCA9IGFjdGlvbk9wdGlvbjtcblxuICAvL09wdGlvbjFcbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9wdGlvbi5jbGFzc0xpc3QgPSBcIm9wdGlvblwiO1xuICBsZXQgb3B0aW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgb3B0aW9uSW1nLnNyYyA9IFwiL3JlY291cnNlcy9pY29uX3BpenphLnBuZ1wiO1xuICBvcHRpb25JbWcuYWx0ID0gXCJpY29uIG9mIHBpenphXCI7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHQuaW5uZXJIVE1MID0gXCJPcmRlciBwaXp6YVwiO1xuICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uSW1nKTtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICBhY3Rpb25PcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAvL09wdGlvbjJcbiAgb3B0aW9uLnJlbW92ZUNoaWxkKG9wdGlvbkltZyk7XG4gIG9wdGlvbi5yZW1vdmVDaGlsZCh0ZXh0KTtcbiAgb3B0aW9uSW1nLnNyYyA9IFwiL3JlY291cnNlcy9pY29uX2NhbGVuZGFyLnBuZ1wiO1xuICBvcHRpb25JbWcuYWx0ID0gXCJpY29uIG9mIGNhbGVuZGFyXCI7XG4gIHRleHQuaW5uZXJIVE1MID0gXCJPcmRlciB0YWJsZVwiO1xuICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uSW1nKTtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICBhY3Rpb25PcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAvL09wdGlvbjNcbiAgb3B0aW9uLnJlbW92ZUNoaWxkKG9wdGlvbkltZyk7XG4gIG9wdGlvbi5yZW1vdmVDaGlsZCh0ZXh0KTtcbiAgb3B0aW9uSW1nLnNyYyA9IFwiL3JlY291cnNlcy9pY29uX21lbnUucG5nXCI7XG4gIG9wdGlvbkltZy5hbHQgPSBcImljb24gb2YgbWVudVwiO1xuICB0ZXh0LmlubmVySFRNTCA9IFwiUmVzdHVyYW50XCI7XG4gIG9wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25JbWcpO1xuICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGFjdGlvbk9wdGlvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gIC8vbmV3c1xuICBsZXQgbmV3cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld3MuY2xhc3NMaXN0ID0gXCJuZXdzXCI7XG5cbiAgLy9uZXdzIGVsZW1lbnQgMVxuICBsZXQgbmV3c0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdzRWxlbWVudC5jbGFzc0xpc3QgPSBcIm5ld3NFbGVtZW50XCI7XG4gIGxldCBuZXdzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbmV3c0ltZy5zcmMgPSBcIi9yZWNvdXJzZXMvZ2x1dGVuZnJpLnBuZ1wiO1xuICBuZXdzSW1nLmFsdCA9IFwiZ2x1dGVuZnJlZSBjaG9pY2VcIjtcbiAgbmV3c0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3c0ltZyk7XG4gIG5ld3MuYXBwZW5kQ2hpbGQobmV3c0VsZW1lbnQpO1xuXG4gIC8vbmV3cyBlbGVtZW50IDJcbiAgbmV3c0VsZW1lbnQucmVtb3ZlQ2hpbGQobmV3c0ltZyk7XG4gIG5ld3NJbWcuc3JjID0gXCIvcmVjb3Vyc2VzL2xlZGlnLmpwZ1wiO1xuICBuZXdzSW1nLmFsdCA9IFwiam9iIG9mZmVyXCI7XG4gIG5ld3NFbGVtZW50LmFwcGVuZENoaWxkKG5ld3NJbWcpO1xuICBuZXdzLmFwcGVuZENoaWxkKG5ld3NFbGVtZW50KTtcblxuICAvL25ld3MgZWxlbWVudCAzXG4gIG5ld3NFbGVtZW50LnJlbW92ZUNoaWxkKG5ld3NJbWcpO1xuICBuZXdzSW1nLnNyYyA9IFwiL3JlY291cnNlcy9zdHVkZW50LmdpZlwiO1xuICBuZXdzSW1nLmFsdCA9IFwic3R1ZGVudCBvZmZlclwiO1xuICBuZXdzRWxlbWVudC5hcHBlbmRDaGlsZChuZXdzSW1nKTtcbiAgbmV3cy5hcHBlbmRDaGlsZChuZXdzRWxlbWVudCk7XG5cbiAgLy9uZXdzIGVsZW1lbnQgNFxuICBuZXdzRWxlbWVudC5yZW1vdmVDaGlsZChuZXdzSW1nKTtcbiAgbmV3c0ltZy5zcmMgPSBcIi9yZWNvdXJzZXMvbmV3cy5wbmdcIjtcbiAgbmV3c0ltZy5hbHQgPSBcIm5ld3MgbGV0dGVyXCI7XG4gIG5ld3NFbGVtZW50LmFwcGVuZENoaWxkKG5ld3NJbWcpO1xuICBuZXdzLmFwcGVuZENoaWxkKG5ld3NFbGVtZW50KTtcblxuICBtYWluLmFwcGVuZENoaWxkKGZlYXR1cmVkKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChhY3Rpb25PcHRpb24pO1xuICBtYWluLmFwcGVuZENoaWxkKG5ld3MpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==