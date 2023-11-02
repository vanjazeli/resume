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

/***/ "./src/js/chunks/documentLoaded.js":
/*!*****************************************!*\
  !*** ./src/js/chunks/documentLoaded.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst documentLoaded = {\r\n\tinit: function () {\r\n\t\tthis.loadDetection();\r\n\t},\r\n\r\n\tloadDetection: function () {\r\n\t\twindow.addEventListener('load', () => {\r\n\t\t\tconst html = document.querySelector('html');\r\n\t\t\thtml.classList.add('loaded');\r\n\t\t});\r\n\t},\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documentLoaded);\r\n\n\n//# sourceURL=webpack://gulp-vanilla-starter/./src/js/chunks/documentLoaded.js?");

/***/ }),

/***/ "./src/js/chunks/helpers.js":
/*!**********************************!*\
  !*** ./src/js/chunks/helpers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst helpers = {\r\n\tdisableScroll: function () {\r\n\t\tconst html = document.querySelector('html');\r\n\t\thtml.style.overflow = 'hidden';\r\n\t},\r\n\r\n\tenableScroll: function () {\r\n\t\tconst html = document.querySelector('html');\r\n\t\thtml.style.overflow = '';\r\n\t},\r\n\r\n\tstrToBool: function (string) {\r\n\t\tif (string === 'true') {\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\tif (string === 'false') {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t},\r\n\r\n\tisInView: function (element) {\r\n\t\tconst rect = element.getBoundingClientRect();\r\n\t\treturn rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0 && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.right >= 0;\r\n\t},\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helpers);\r\n\n\n//# sourceURL=webpack://gulp-vanilla-starter/./src/js/chunks/helpers.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunks_documentLoaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/documentLoaded */ \"./src/js/chunks/documentLoaded.js\");\n\r\n\r\n_chunks_documentLoaded__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n\n\n//# sourceURL=webpack://gulp-vanilla-starter/./src/js/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/chunks/documentLoaded.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/chunks/helpers.js");
/******/ 	
/******/ })()
;