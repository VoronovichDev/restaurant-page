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

/***/ "./src/Footer.js":
/*!***********************!*\
  !*** ./src/Footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\nfunction Footer() {\r\n   const footer = document.createElement('footer')\r\n   footer.innerText = `Made by VoronovichDev`\r\n   return footer\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/Footer.js?");

/***/ }),

/***/ "./src/History.js":
/*!************************!*\
  !*** ./src/History.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ History)\n/* harmony export */ });\nfunction History() {\r\n   const history = document.createElement('main')\r\n   history.innerHTML = `<h2>INSPIRING HEADLINE</h2>\r\n   <hr class=\"about__us\">\r\n   <p class=\"history__text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsa ut quod quo et amet\r\n      beatae, ex cum autem, animi nobis laborum quidem neque vitae commodi aperiam quibusdam minima ipsam.</p>\r\n   <p class=\"quote\"><i>Some wise quote</i></p>`\r\n   return history\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/History.js?");

/***/ }),

/***/ "./src/MainContent.js":
/*!****************************!*\
  !*** ./src/MainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainContent)\n/* harmony export */ });\nfunction MainContent() {\r\n   const mainContent = document.createElement('main')\r\n   mainContent.innerHTML = `<h1>MEAT LINE</h1>\r\n<p class=\"home__description\">Some text about how awesome this restaurant is</p>\r\n<button type=\"button\" id=\"to_menu\">Go to menu</button>`\r\n   return mainContent\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/MainContent.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\nfunction Menu() {\r\n   const menu = document.createElement('main')\r\n   menu.classList.add('menu')\r\n   menu.innerHTML = `<h1>Main Menu</h1>\r\n<div class=\"dishes\">\r\n   <div class=\"dish\">\r\n      <h2 class=\"dish__name\">Chicken</h2>\r\n      <p class=\"description\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore explicabo\r\n         earum, fugiat repudiandae voluptatem temporibus cum rerum impedit</p>\r\n      <div class=\"image\"></div>\r\n      <p class=\"price\">15$</p>\r\n   </div>\r\n   <hr>\r\n   <div class=\"dish\">\r\n      <h2 class=\"dish__name\">Pork</h2>\r\n      <p class=\"description\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore explicabo\r\n         earum, fugiat repudiandae voluptatem temporibus cum rerum impedit</p>\r\n      <div class=\"image\"></div>\r\n      <p class=\"price\">20$</p>\r\n   </div>\r\n   <hr>\r\n   <div class=\"dish\">\r\n      <h2 class=\"dish__name\">Beef</h2>\r\n      <p class=\"description\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore explicabo\r\n         earum, fugiat repudiandae voluptatem temporibus cum rerum impedit</p>\r\n      <div class=\"image\"></div>\r\n      <p class=\"price\">25$</p>\r\n   </div>\r\n</div>`\r\n   return menu\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/Navigation.js":
/*!***************************!*\
  !*** ./src/Navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\nfunction Navigation() {\r\n   const navigation = document.createElement('nav')\r\n   navigation.innerHTML = `<ul class=\"navigation\">\r\n<div class=\"nav__link\"><a id=\"home\">HOMEPAGE</a></div>\r\n<div class=\"nav__link\"><a id=\"menu\">MENU</a></div>\r\n<div class=\"nav__link\"><a id=\"history\">HISTORY</a></div>\r\n</ul>`;\r\n   return navigation\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/Navigation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./src/Footer.js\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ \"./src/Navigation.js\");\n/* harmony import */ var _MainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainContent */ \"./src/MainContent.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./History */ \"./src/History.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector('#content')\r\n\r\nconst renderHomePage = () => {\r\n   content.innerHTML = ''\r\n   content.appendChild((0,_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\r\n   content.appendChild((0,_MainContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\r\n   content.appendChild((0,_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n}\r\n\r\nconst renderMenuPage = () => {\r\n   content.innerHTML = ''\r\n   content.appendChild((0,_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\r\n   content.appendChild((0,_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\r\n   content.appendChild((0,_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n}\r\nconst renderHistoryPage = () => {\r\n   content.innerHTML = ''\r\n   content.appendChild((0,_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\r\n   content.appendChild((0,_History__WEBPACK_IMPORTED_MODULE_4__[\"default\"])())\r\n   content.appendChild((0,_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n}\r\n\r\ndocument.addEventListener(\"click\", (e) => {\r\n   const link = e.target.id;\r\n\r\n   switch (link) {\r\n      case 'home': renderHomePage();\r\n         break\r\n      case 'menu':\r\n      case 'to_menu':\r\n         renderMenuPage();\r\n         break\r\n      case 'history':\r\n         renderHistoryPage()\r\n         break\r\n   }\r\n});\r\n\r\nrenderHomePage()\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;