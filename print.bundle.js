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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3QztBQUNXO0FBQ0E7QUFDTTtBQUNSO0FBQ0M7QUFDTDtBQUNNO0FBQ0w7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFJO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsc0RBQVM7QUFDcEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcseURBQVk7QUFDdkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcscURBQVE7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBUztBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsaURBQVE7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLG1EQUFZO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxnREFBVTtBQUNyQjtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IExvZ28gZnJvbSBcIi4vcmVjb3Vyc2VzL2xvZ28ucG5nXCI7XG5pbXBvcnQgRmVhdHVyZUltZyBmcm9tIFwiLi9yZWNvdXJzZXMvaGVyb3RoYWlkLmpwZ1wiO1xuaW1wb3J0IFBpenphSWNvbiBmcm9tIFwiLi9yZWNvdXJzZXMvaWNvbl9waXp6YS5wbmdcIjtcbmltcG9ydCBDYWxlbmRhckljb24gZnJvbSBcIi4vcmVjb3Vyc2VzL2ljb25fY2FsZW5kYXIucG5nXCI7XG5pbXBvcnQgTWVudUljb24gZnJvbSBcIi4vcmVjb3Vyc2VzL2ljb25fbWVudS5wbmdcIjtcbmltcG9ydCBHbHV0ZW5GcmkgZnJvbSBcIi4vcmVjb3Vyc2VzL2dsdXRlbmZyaS5wbmdcIjtcbmltcG9ydCBKb2JPZmZlciBmcm9tIFwiLi9yZWNvdXJzZXMvbGVkaWcuanBnXCI7XG5pbXBvcnQgU3R1ZGVudE9mZmVyIGZyb20gXCIuL3JlY291cnNlcy9zdHVkZW50LmdpZlwiO1xuaW1wb3J0IE5ld3NMZXR0ZXIgZnJvbSBcIi4vcmVjb3Vyc2VzL25ld3MucG5nXCI7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0ID0gXCJjb250ZW50XCI7XG4gIC8vaGVhZGVyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdCA9IFwiaGVhZGVyXCI7XG4gIGxldCBoZWFkZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBoZWFkZXJJbWcuc3JjID0gTG9nbztcbiAgaGVhZGVySW1nLmFsdCA9IFwibG9nb1wiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbWcpO1xuXG4gIC8vbWFpblxuICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gIC8vZmVhdHVyZWRcbiAgbGV0IGZlYXR1cmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVhdHVyZWQuY2xhc3NMaXN0ID0gXCJmZWF0dXJlZFwiO1xuICBsZXQgZmVhdHVyZWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmZWF0dXJlZEltZy5zcmMgPSBGZWF0dXJlSW1nO1xuICBmZWF0dXJlZEltZy5hbHQgPSBcImhlcm90aGFpcGl6emFcIjtcbiAgZmVhdHVyZWQuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWcpO1xuXG4gIC8vYWN0aW9uT3B0aW9uc1xuICBsZXQgYWN0aW9uT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWN0aW9uT3B0aW9uLmNsYXNzTGlzdCA9IFwiYWN0aW9uT3B0aW9uXCI7XG5cbiAgbGV0IG9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgc3JjOiBQaXp6YUljb24sXG4gICAgICBhbHQ6IFwiaWNvbiBvZiBwaXp6YVwiLFxuICAgICAgcFRleHQ6IFwiT3JkZXIgcGl6emFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogQ2FsZW5kYXJJY29uLFxuICAgICAgYWx0OiBcImljb24gb2YgY2FsZW5kYXJcIixcbiAgICAgIHBUZXh0OiBcIk9yZGVyIHRhYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IE1lbnVJY29uLFxuICAgICAgYWx0OiBcImljb24gb2YgbWVudVwiLFxuICAgICAgcFRleHQ6IFwiUmVzdHVyYW50XCIsXG4gICAgfSxcbiAgXTtcbiAgbGV0IG9wdGlvbkRpdnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgb3B0aW9uRGl2c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3B0aW9uRGl2c1tpXS5jbGFzc0xpc3QgPSBcIm9wdGlvblwiO1xuICAgIGxldCBvcHRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBvcHRpb25JbWcuc3JjID0gb3B0aW9uc1tpXS5zcmM7XG4gICAgb3B0aW9uSW1nLmFsdCA9IG9wdGlvbnNbaV0uYWx0O1xuICAgIHRleHQuaW5uZXJIVE1MID0gb3B0aW9uc1tpXS5wVGV4dDtcbiAgICBvcHRpb25EaXZzW2ldLmFwcGVuZENoaWxkKG9wdGlvbkltZyk7XG4gICAgb3B0aW9uRGl2c1tpXS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBhY3Rpb25PcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uRGl2c1tpXSk7XG4gIH1cblxuICAvL25ld3NcbiAgbGV0IG5ld3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdzLmNsYXNzTGlzdCA9IFwibmV3c1wiO1xuXG4gIC8vbmV3cyBlbGVtZW50c1xuICBsZXQgbmV3c0VsZW1lbnRzID0gW1xuICAgIHtcbiAgICAgIHNyYzogR2x1dGVuRnJpLFxuICAgICAgYWx0OiBcImdsdXRlbmZyZWUgY2hvaWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IEpvYk9mZmVyLFxuICAgICAgYWx0OiBcImpvYiBvZmZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBTdHVkZW50T2ZmZXIsXG4gICAgICBhbHQ6IFwic3R1ZGVudCBvZmZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBOZXdzTGV0dGVyLFxuICAgICAgYWx0OiBcIm5ld3MgbGV0dGVyXCIsXG4gICAgfSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld3NFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuZXdzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3c0VsZW1lbnQuY2xhc3NMaXN0ID0gXCJuZXdzRWxlbWVudFwiO1xuICAgIGxldCBuZXdzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdzSW1nLnNyYyA9IG5ld3NFbGVtZW50c1tpXS5zcmM7XG4gICAgbmV3c0ltZy5hbHQgPSBuZXdzRWxlbWVudHNbaV0uYWx0O1xuICAgIG5ld3NFbGVtZW50LmFwcGVuZENoaWxkKG5ld3NJbWcpO1xuICAgIG5ld3MuYXBwZW5kQ2hpbGQobmV3c0VsZW1lbnQpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChmZWF0dXJlZCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYWN0aW9uT3B0aW9uKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChuZXdzKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=