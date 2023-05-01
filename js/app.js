/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > 250) {\n      document.getElementById('navbar_top').classList.add('fixed-top'); // add padding top to show content behind navbar\n\n      navbar_height = document.querySelector('.navbar').offsetHeight;\n      document.body.style.paddingTop = \"\".concat(navbar_height, \"px\");\n    } else {\n      document.getElementById('navbar_top').classList.remove('fixed-top'); // remove padding top from body\n\n      document.body.style.paddingTop = '0';\n    }\n  });\n  var dateSelect = $('#flight-datepicker');\n  var dateDepart = $('#start-date');\n  var dateReturn = $('#end-date');\n  var spanDepart = $('.date-depart');\n  var spanReturn = $('.date-return');\n  var spanDateFormat = 'ddd, MMMM D yyyy';\n  dateSelect.datepicker({\n    autoclose: true,\n    format: 'D, MM dd',\n    maxViewMode: 0,\n    startDate: 'now'\n  }).on('change', function () {\n    var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);\n    var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);\n    spanDepart.text(start);\n    spanReturn.text(end);\n  });\n});\nvar popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"popover\"]'));\nvar popoverList = popoverTriggerList.map(function (popoverTriggerEl) {\n  return new bootstrap.Popover(popoverTriggerEl);\n});\nvar popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {\n  trigger: 'focus'\n});\n\n//# sourceURL=webpack://@weareathlon/frontend-webpack-boilerplate/./src/js/app.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@weareathlon/frontend-webpack-boilerplate/./src/scss/app.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;