/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/recourses/glutenfri.png":
/*!*************************************!*\
  !*** ./src/recourses/glutenfri.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9aca5d599ecc44432828.png";

/***/ }),

/***/ "./src/recourses/herothaid.jpg":
/*!*************************************!*\
  !*** ./src/recourses/herothaid.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89c71db3b353137ec166.jpg";

/***/ }),

/***/ "./src/recourses/icon_calendar.png":
/*!*****************************************!*\
  !*** ./src/recourses/icon_calendar.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c207c2b5dd770655207.png";

/***/ }),

/***/ "./src/recourses/icon_menu.png":
/*!*************************************!*\
  !*** ./src/recourses/icon_menu.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ace9683356527512b4a.png";

/***/ }),

/***/ "./src/recourses/icon_pizza.png":
/*!**************************************!*\
  !*** ./src/recourses/icon_pizza.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20785d8b042db4c47192.png";

/***/ }),

/***/ "./src/recourses/ledig.jpg":
/*!*********************************!*\
  !*** ./src/recourses/ledig.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf12021d6e7c193d92df.jpg";

/***/ }),

/***/ "./src/recourses/logo.png":
/*!********************************!*\
  !*** ./src/recourses/logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "752ef2e2ce3c1697d3b5.png";

/***/ }),

/***/ "./src/recourses/news.png":
/*!********************************!*\
  !*** ./src/recourses/news.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db9890080c1541dc6df8.png";

/***/ }),

/***/ "./src/recourses/student.gif":
/*!***********************************!*\
  !*** ./src/recourses/student.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d49d778241c3e2c097ff.gif";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recourses_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recourses/logo.png */ "./src/recourses/logo.png");
/* harmony import */ var _recourses_herothaid_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recourses/herothaid.jpg */ "./src/recourses/herothaid.jpg");
/* harmony import */ var _recourses_icon_pizza_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recourses/icon_pizza.png */ "./src/recourses/icon_pizza.png");
/* harmony import */ var _recourses_icon_calendar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recourses/icon_calendar.png */ "./src/recourses/icon_calendar.png");
/* harmony import */ var _recourses_icon_menu_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recourses/icon_menu.png */ "./src/recourses/icon_menu.png");
/* harmony import */ var _recourses_glutenfri_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recourses/glutenfri.png */ "./src/recourses/glutenfri.png");
/* harmony import */ var _recourses_ledig_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recourses/ledig.jpg */ "./src/recourses/ledig.jpg");
/* harmony import */ var _recourses_student_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recourses/student.gif */ "./src/recourses/student.gif");
/* harmony import */ var _recourses_news_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recourses/news.png */ "./src/recourses/news.png");










function pageLoad() {
  let content = document.createElement("div");
  content.classList = "content";
  //header
  let header = document.createElement("section");
  header.classList = "header";
  let headerImg = document.createElement("img");
  headerImg.src = _recourses_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  headerImg.alt = "logo";

  header.appendChild(headerImg);

  //main
  let main = document.createElement("section");

  //featured
  let featured = document.createElement("div");
  featured.classList = "featured";
  let featuredImg = document.createElement("img");
  featuredImg.src = _recourses_herothaid_jpg__WEBPACK_IMPORTED_MODULE_1__;
  featuredImg.alt = "herothaipizza";
  featured.appendChild(featuredImg);

  //actionOptions
  let actionOption = document.createElement("div");
  actionOption.classList = "actionOption";

  let options = [
    {
      src: _recourses_icon_pizza_png__WEBPACK_IMPORTED_MODULE_2__,
      alt: "icon of pizza",
      pText: "Order pizza",
      imgId: "menuCaller",
    },
    {
      src: _recourses_icon_calendar_png__WEBPACK_IMPORTED_MODULE_3__,
      alt: "icon of calendar",
      pText: "Order table",
    },
    {
      src: _recourses_icon_menu_png__WEBPACK_IMPORTED_MODULE_4__,
      alt: "icon of menu",
      pText: "Resturant",
    },
  ];
  let optionDivs = [];
  for (let i = 0; i < options.length; i++) {
    optionDivs[i] = document.createElement("div");
    optionDivs[i].classList = "option";
    let optionImg = document.createElement("img");
    optionImg.id = options[i].imgId;
    optionImg.classList = "optionImage";

    let text = document.createElement("p");

    optionImg.src = options[i].src;
    optionImg.alt = options[i].alt;
    text.innerHTML = options[i].pText;
    optionDivs[i].appendChild(optionImg);
    optionDivs[i].appendChild(text);
    actionOption.appendChild(optionDivs[i]);
  }

  //news
  let news = document.createElement("div");
  news.classList = "news";

  //news elements
  let newsElements = [
    {
      src: _recourses_glutenfri_png__WEBPACK_IMPORTED_MODULE_5__,
      alt: "glutenfree choice",
    },
    {
      src: _recourses_ledig_jpg__WEBPACK_IMPORTED_MODULE_6__,
      alt: "job offer",
    },
    {
      src: _recourses_student_gif__WEBPACK_IMPORTED_MODULE_7__,
      alt: "student offer",
    },
    {
      src: _recourses_news_png__WEBPACK_IMPORTED_MODULE_8__,
      alt: "news letter",
    },
  ];

  for (let i = 0; i < newsElements.length; i++) {
    let newsElement = document.createElement("div");
    newsElement.classList = "newsElement";
    let newsImg = document.createElement("img");
    newsImg.src = newsElements[i].src;
    newsImg.alt = newsElements[i].alt;
    newsElement.appendChild(newsImg);
    news.appendChild(newsElement);
  }

  main.appendChild(featured);
  main.appendChild(actionOption);
  main.appendChild(news);

  content.appendChild(header);
  content.appendChild(main);

  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3QztBQUNXO0FBQ0E7QUFDTTtBQUNSO0FBQ0M7QUFDTDtBQUNNO0FBQ0w7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFJO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsc0RBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyx5REFBWTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxxREFBUTtBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQVM7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLGlEQUFRO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxtREFBWTtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsZ0RBQVU7QUFDckI7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBMb2dvIGZyb20gXCIuL3JlY291cnNlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IEZlYXR1cmVJbWcgZnJvbSBcIi4vcmVjb3Vyc2VzL2hlcm90aGFpZC5qcGdcIjtcbmltcG9ydCBQaXp6YUljb24gZnJvbSBcIi4vcmVjb3Vyc2VzL2ljb25fcGl6emEucG5nXCI7XG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gXCIuL3JlY291cnNlcy9pY29uX2NhbGVuZGFyLnBuZ1wiO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gXCIuL3JlY291cnNlcy9pY29uX21lbnUucG5nXCI7XG5pbXBvcnQgR2x1dGVuRnJpIGZyb20gXCIuL3JlY291cnNlcy9nbHV0ZW5mcmkucG5nXCI7XG5pbXBvcnQgSm9iT2ZmZXIgZnJvbSBcIi4vcmVjb3Vyc2VzL2xlZGlnLmpwZ1wiO1xuaW1wb3J0IFN0dWRlbnRPZmZlciBmcm9tIFwiLi9yZWNvdXJzZXMvc3R1ZGVudC5naWZcIjtcbmltcG9ydCBOZXdzTGV0dGVyIGZyb20gXCIuL3JlY291cnNlcy9uZXdzLnBuZ1wiO1xuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdCA9IFwiY29udGVudFwiO1xuICAvL2hlYWRlclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGhlYWRlci5jbGFzc0xpc3QgPSBcImhlYWRlclwiO1xuICBsZXQgaGVhZGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaGVhZGVySW1nLnNyYyA9IExvZ287XG4gIGhlYWRlckltZy5hbHQgPSBcImxvZ29cIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySW1nKTtcblxuICAvL21haW5cbiAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICAvL2ZlYXR1cmVkXG4gIGxldCBmZWF0dXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlYXR1cmVkLmNsYXNzTGlzdCA9IFwiZmVhdHVyZWRcIjtcbiAgbGV0IGZlYXR1cmVkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZmVhdHVyZWRJbWcuc3JjID0gRmVhdHVyZUltZztcbiAgZmVhdHVyZWRJbWcuYWx0ID0gXCJoZXJvdGhhaXBpenphXCI7XG4gIGZlYXR1cmVkLmFwcGVuZENoaWxkKGZlYXR1cmVkSW1nKTtcblxuICAvL2FjdGlvbk9wdGlvbnNcbiAgbGV0IGFjdGlvbk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFjdGlvbk9wdGlvbi5jbGFzc0xpc3QgPSBcImFjdGlvbk9wdGlvblwiO1xuXG4gIGxldCBvcHRpb25zID0gW1xuICAgIHtcbiAgICAgIHNyYzogUGl6emFJY29uLFxuICAgICAgYWx0OiBcImljb24gb2YgcGl6emFcIixcbiAgICAgIHBUZXh0OiBcIk9yZGVyIHBpenphXCIsXG4gICAgICBpbWdJZDogXCJtZW51Q2FsbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IENhbGVuZGFySWNvbixcbiAgICAgIGFsdDogXCJpY29uIG9mIGNhbGVuZGFyXCIsXG4gICAgICBwVGV4dDogXCJPcmRlciB0YWJsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBNZW51SWNvbixcbiAgICAgIGFsdDogXCJpY29uIG9mIG1lbnVcIixcbiAgICAgIHBUZXh0OiBcIlJlc3R1cmFudFwiLFxuICAgIH0sXG4gIF07XG4gIGxldCBvcHRpb25EaXZzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIG9wdGlvbkRpdnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wdGlvbkRpdnNbaV0uY2xhc3NMaXN0ID0gXCJvcHRpb25cIjtcbiAgICBsZXQgb3B0aW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBvcHRpb25JbWcuaWQgPSBvcHRpb25zW2ldLmltZ0lkO1xuICAgIG9wdGlvbkltZy5jbGFzc0xpc3QgPSBcIm9wdGlvbkltYWdlXCI7XG5cbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgb3B0aW9uSW1nLnNyYyA9IG9wdGlvbnNbaV0uc3JjO1xuICAgIG9wdGlvbkltZy5hbHQgPSBvcHRpb25zW2ldLmFsdDtcbiAgICB0ZXh0LmlubmVySFRNTCA9IG9wdGlvbnNbaV0ucFRleHQ7XG4gICAgb3B0aW9uRGl2c1tpXS5hcHBlbmRDaGlsZChvcHRpb25JbWcpO1xuICAgIG9wdGlvbkRpdnNbaV0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgYWN0aW9uT3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbkRpdnNbaV0pO1xuICB9XG5cbiAgLy9uZXdzXG4gIGxldCBuZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3cy5jbGFzc0xpc3QgPSBcIm5ld3NcIjtcblxuICAvL25ld3MgZWxlbWVudHNcbiAgbGV0IG5ld3NFbGVtZW50cyA9IFtcbiAgICB7XG4gICAgICBzcmM6IEdsdXRlbkZyaSxcbiAgICAgIGFsdDogXCJnbHV0ZW5mcmVlIGNob2ljZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBKb2JPZmZlcixcbiAgICAgIGFsdDogXCJqb2Igb2ZmZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogU3R1ZGVudE9mZmVyLFxuICAgICAgYWx0OiBcInN0dWRlbnQgb2ZmZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogTmV3c0xldHRlcixcbiAgICAgIGFsdDogXCJuZXdzIGxldHRlclwiLFxuICAgIH0sXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbmV3c0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld3NFbGVtZW50LmNsYXNzTGlzdCA9IFwibmV3c0VsZW1lbnRcIjtcbiAgICBsZXQgbmV3c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3c0ltZy5zcmMgPSBuZXdzRWxlbWVudHNbaV0uc3JjO1xuICAgIG5ld3NJbWcuYWx0ID0gbmV3c0VsZW1lbnRzW2ldLmFsdDtcbiAgICBuZXdzRWxlbWVudC5hcHBlbmRDaGlsZChuZXdzSW1nKTtcbiAgICBuZXdzLmFwcGVuZENoaWxkKG5ld3NFbGVtZW50KTtcbiAgfVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoZmVhdHVyZWQpO1xuICBtYWluLmFwcGVuZENoaWxkKGFjdGlvbk9wdGlvbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQobmV3cyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9