/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");


_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNwRzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAvL2hlYWRlclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGhlYWRlci5jbGFzc0xpc3QgPSBcImhlYWRlclwiO1xuICBsZXQgaGVhZGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaGVhZGVySW1nLnNyYyA9IFwiL3JlY291cnNlcy9sb2dvLnBuZ1wiO1xuICBoZWFkZXJJbWcuYWx0ID0gXCJsb2dvXCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckltZyk7XG5cbiAgLy9tYWluXG4gIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgLy9mZWF0dXJlZFxuICBsZXQgZmVhdHVyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmZWF0dXJlZC5jbGFzc0xpc3QgPSBmZWF0dXJlZDtcbiAgbGV0IGZlYXR1cmVkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZmVhdHVyZWRJbWcuc3JjID0gXCIvcmVjb3Vyc2VzL2hlcm90aGFpZC5qcGdcIjtcbiAgZmVhdHVyZWRJbWcuYWx0ID0gXCJoZXJvdGhhaXBpenphXCI7XG4gIGZlYXR1cmVkLmFwcGVuZENoaWxkKGZlYXR1cmVkSW1nKTtcblxuICAvL2FjdGlvbk9wdGlvbnNcbiAgbGV0IGFjdGlvbk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFjdGlvbk9wdGlvbi5jbGFzc0xpc3QgPSBhY3Rpb25PcHRpb247XG5cbiAgLy9PcHRpb24xXG4gIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb24uY2xhc3NMaXN0ID0gXCJvcHRpb25cIjtcbiAgbGV0IG9wdGlvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG9wdGlvbkltZy5zcmMgPSBcIi9yZWNvdXJzZXMvaWNvbl9waXp6YS5wbmdcIjtcbiAgb3B0aW9uSW1nLmFsdCA9IFwiaWNvbiBvZiBwaXp6YVwiO1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LmlubmVySFRNTCA9IFwiT3JkZXIgcGl6emFcIjtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbkltZyk7XG4gIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgYWN0aW9uT3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgLy9PcHRpb24yXG4gIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb25JbWcpO1xuICBvcHRpb24ucmVtb3ZlQ2hpbGQodGV4dCk7XG4gIG9wdGlvbkltZy5zcmMgPSBcIi9yZWNvdXJzZXMvaWNvbl9jYWxlbmRhci5wbmdcIjtcbiAgb3B0aW9uSW1nLmFsdCA9IFwiaWNvbiBvZiBjYWxlbmRhclwiO1xuICB0ZXh0LmlubmVySFRNTCA9IFwiT3JkZXIgdGFibGVcIjtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbkltZyk7XG4gIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgYWN0aW9uT3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgLy9PcHRpb24zXG4gIG9wdGlvbi5yZW1vdmVDaGlsZChvcHRpb25JbWcpO1xuICBvcHRpb24ucmVtb3ZlQ2hpbGQodGV4dCk7XG4gIG9wdGlvbkltZy5zcmMgPSBcIi9yZWNvdXJzZXMvaWNvbl9tZW51LnBuZ1wiO1xuICBvcHRpb25JbWcuYWx0ID0gXCJpY29uIG9mIG1lbnVcIjtcbiAgdGV4dC5pbm5lckhUTUwgPSBcIlJlc3R1cmFudFwiO1xuICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uSW1nKTtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICBhY3Rpb25PcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAvL25ld3NcbiAgbGV0IG5ld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdzLmNsYXNzTGlzdCA9IFwibmV3c1wiO1xuXG4gIC8vbmV3cyBlbGVtZW50IDFcbiAgbGV0IG5ld3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3c0VsZW1lbnQuY2xhc3NMaXN0ID0gXCJuZXdzRWxlbWVudFwiO1xuICBsZXQgbmV3c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5ld3NJbWcuc3JjID0gXCIvcmVjb3Vyc2VzL2dsdXRlbmZyaS5wbmdcIjtcbiAgbmV3c0ltZy5hbHQgPSBcImdsdXRlbmZyZWUgY2hvaWNlXCI7XG4gIG5ld3NFbGVtZW50LmFwcGVuZENoaWxkKG5ld3NJbWcpO1xuICBuZXdzLmFwcGVuZENoaWxkKG5ld3NFbGVtZW50KTtcblxuICAvL25ld3MgZWxlbWVudCAyXG4gIG5ld3NFbGVtZW50LnJlbW92ZUNoaWxkKG5ld3NJbWcpO1xuICBuZXdzSW1nLnNyYyA9IFwiL3JlY291cnNlcy9sZWRpZy5qcGdcIjtcbiAgbmV3c0ltZy5hbHQgPSBcImpvYiBvZmZlclwiO1xuICBuZXdzRWxlbWVudC5hcHBlbmRDaGlsZChuZXdzSW1nKTtcbiAgbmV3cy5hcHBlbmRDaGlsZChuZXdzRWxlbWVudCk7XG5cbiAgLy9uZXdzIGVsZW1lbnQgM1xuICBuZXdzRWxlbWVudC5yZW1vdmVDaGlsZChuZXdzSW1nKTtcbiAgbmV3c0ltZy5zcmMgPSBcIi9yZWNvdXJzZXMvc3R1ZGVudC5naWZcIjtcbiAgbmV3c0ltZy5hbHQgPSBcInN0dWRlbnQgb2ZmZXJcIjtcbiAgbmV3c0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3c0ltZyk7XG4gIG5ld3MuYXBwZW5kQ2hpbGQobmV3c0VsZW1lbnQpO1xuXG4gIC8vbmV3cyBlbGVtZW50IDRcbiAgbmV3c0VsZW1lbnQucmVtb3ZlQ2hpbGQobmV3c0ltZyk7XG4gIG5ld3NJbWcuc3JjID0gXCIvcmVjb3Vyc2VzL25ld3MucG5nXCI7XG4gIG5ld3NJbWcuYWx0ID0gXCJuZXdzIGxldHRlclwiO1xuICBuZXdzRWxlbWVudC5hcHBlbmRDaGlsZChuZXdzSW1nKTtcbiAgbmV3cy5hcHBlbmRDaGlsZChuZXdzRWxlbWVudCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChmZWF0dXJlZCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYWN0aW9uT3B0aW9uKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChuZXdzKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlLWxvYWQuanNcIjtcblxucGFnZUxvYWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=