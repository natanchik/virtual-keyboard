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

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./js/board.js":
/*!*********************!*\
  !*** ./js/board.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"board\": () => (/* binding */ board),\n/* harmony export */   \"digits\": () => (/* binding */ digits),\n/* harmony export */   \"letters\": () => (/* binding */ letters)\n/* harmony export */ });\n/* harmony import */ var _create_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_buttons */ \"./js/create_buttons.js\");\n\r\n\r\nlet board = document.createElement(\"div\");\r\nboard.classList.add(\"board\"); \r\ndocument.body.appendChild(board);\r\n\r\nfunction createRow() {\r\n  let row = document.createElement(\"div\");\r\n  row.classList.add(\"row\");  \r\n  return row;\r\n};\r\n\r\nlet symbol_rows = [\r\n  [\"`\", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, \"-\", \"=\", \"Backspace\"],\r\n  [\"Tab\", ...\"QWERTYUIOP[]\", \"\\\\\", \"Del\"],\r\n  [\"CapsLock\", ...\"ASDFGHJKL;'\", \"Enter\"],\r\n  [\"Shift\", ...\"ZXCVBNM,./\", \"▲\", \"Shift\"],\r\n  [\"Ctrl\", \"Win\", \"Alt\", \" \", \"Alt\", \"◄\", \"▼\", \"►\", \"Ctrl\"],\r\n];\r\n\r\nfor (let symbol_row of symbol_rows) {\r\n  let row = createRow();\r\n  board.appendChild(row);\r\n  for (let symbol of symbol_row) {\r\n    row.appendChild((0,_create_buttons__WEBPACK_IMPORTED_MODULE_0__.createButton)(symbol));    \r\n  }\r\n}\r\n\r\nlet shiftButtons = Array.from(document.querySelectorAll(\"#Shift\"));\r\nshiftButtons[0].setAttribute(\"id\", \"ShiftLeft\");\r\nshiftButtons[1].setAttribute(\"id\", \"ShiftRight\");\r\n\r\nlet ctrlButtons = Array.from(document.querySelectorAll(\"#Ctrl\"));\r\nctrlButtons[0].setAttribute(\"id\", \"ControlLeft\");\r\nctrlButtons[1].setAttribute(\"id\", \"ControlRight\");\r\n\r\nlet altButtons = Array.from(document.querySelectorAll(\"#Alt\"));\r\naltButtons[0].setAttribute(\"id\", \"AltLeft\");\r\naltButtons[1].setAttribute(\"id\", \"AltRight\");\r\n\r\nlet letters = Array.from(document.querySelectorAll(\".letters\"));\r\nlet digits = Array.from(document.querySelectorAll(\".digits\"));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/board.js?");

/***/ }),

/***/ "./js/change_case.js":
/*!***************************!*\
  !*** ./js/change_case.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCase\": () => (/* binding */ changeCase),\n/* harmony export */   \"isCapsLock\": () => (/* binding */ isCapsLock)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./js/board.js\");\n\r\n\r\nlet isCapsLock = true;\r\n\r\nfunction changeCase() {\r\n  isCapsLock = !isCapsLock;  \r\n  isCapsLock ? document.getElementById(\"CapsLock\").classList.add(\"active\") : document.getElementById(\"CapsLock\").classList.remove(\"active\");\r\n  for (let letter of _board__WEBPACK_IMPORTED_MODULE_0__.letters) {\r\n    letter.innerText = isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase(); \r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/change_case.js?");

/***/ }),

/***/ "./js/change_lang.js":
/*!***************************!*\
  !*** ./js/change_lang.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeLang\": () => (/* binding */ changeLang),\n/* harmony export */   \"isEng\": () => (/* binding */ isEng)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./js/board.js\");\n/* harmony import */ var _change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change_case */ \"./js/change_case.js\");\n\r\n\r\n\r\nlet isEng = true;\r\n\r\nfunction changeLang() {\r\n  isEng = !isEng;  \r\n  let engLetters = [...\"QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,.`/\"];\r\n  let rusLetters = [...\"ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ.\"];   \r\n  for (let letter of _board__WEBPACK_IMPORTED_MODULE_0__.letters) {\r\n    if (!isEng) {\r\n      letter.innerText = rusLetters[engLetters.indexOf(letter.innerText.toUpperCase())];\r\n    } else {\r\n      letter.innerText = engLetters[rusLetters.indexOf(letter.innerText.toUpperCase())]; \r\n    }    \r\n    letter.innerText = _change_case__WEBPACK_IMPORTED_MODULE_1__.isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase();    \r\n  }  \r\n}\n\n//# sourceURL=webpack:///./js/change_lang.js?");

/***/ }),

/***/ "./js/create_buttons.js":
/*!******************************!*\
  !*** ./js/create_buttons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButton\": () => (/* binding */ createButton)\n/* harmony export */ });\n// Create and add buttons on the keyboard\r\nlet keyNames = new Map(Object.entries({\"[\": \"BracketLeft\", \"]\": \"BracketRight\", \r\n    \"\\\\\": \"Backslash\", \"`\": \"Backquote\", '/': \"Slash\", \"'\": \"Quote\", \";\": \"Semicolon\", \r\n    \",\": \"Comma\", \".\": \"Period\", \"-\": \"Minus\", \"=\": \"Equal\", \"Del\": \"Delete\", \" \": \"Space\", \r\n    \"◄\": \"ArrowLeft\", \"▼\": \"ArrowDown\", \"►\": \"ArrowRight\", \"▲\": \"ArrowUp\", \"Win\": \"MetaLeft\"}));  \r\n\r\nfunction createButton(text) {\r\n  let button = document.createElement(\"div\");\r\n  button.classList.add(\"button\");  \r\n  if (text.length > 4) {\r\n    button.style.width = \"86px\";\r\n  } else if (text === \" \") {\r\n    button.style.width = \"316px\";\r\n  }  \r\n  if (\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".includes(text)) {\r\n    button.setAttribute(\"id\", `Key${text}`); \r\n    button.classList.add(\"letters\"); \r\n  } else if (\"0123456789\".includes(text)) {\r\n    button.setAttribute(\"id\", `Digit${text}`); \r\n    button.classList.add(\"digits\");  \r\n  } else if (keyNames.has(text)) {\r\n    button.setAttribute(\"id\", keyNames.get(text));\r\n    if (text.length === 1 && text !== \"◄\" && text !== \"▼\" && text !==  \"►\" && text !== \"▲\") {\r\n      if (text === \"-\" || text === \"=\" || text === \"\\\\\") {\r\n        button.classList.add(\"digits\");  \r\n      } else if (text === \" \") {\r\n        button.classList.add(\"funcButtons\");\r\n      }else {\r\n        button.classList.add(\"letters\");  \r\n      }     \r\n    } else {\r\n      button.classList.add(\"funcButtons\");  \r\n    }\r\n  } else {\r\n    button.setAttribute(\"id\", text);\r\n    button.classList.add(\"funcButtons\");  \r\n  }  \r\n  button.innerText = text;\r\n  return button;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/create_buttons.js?");

/***/ }),

/***/ "./js/description.js":
/*!***************************!*\
  !*** ./js/description.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"description\": () => (/* binding */ description)\n/* harmony export */ });\n// Description in the end of document\r\n\r\nlet description = document.createElement(\"div\");\r\ndescription.classList.add(\"decription\");\r\n\r\nlet paragraph = document.createElement(\"p\");\r\nparagraph.classList.add(\"paragraph\");\r\nparagraph.innerText = `Клавиатура создана в операционной системе Windows\\n\r\nДля переключения языка комбинация: левыe shift + alt`;\r\n\r\ndescription.appendChild(paragraph);\r\n\r\n\n\n//# sourceURL=webpack:///./js/description.js?");

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nlet header = document.createElement(\"h1\");\r\nheader.classList.add(\"header\");  \r\nheader.innerText = \"Virtual Keyboard\";\n\n//# sourceURL=webpack:///./js/header.js?");

/***/ }),

/***/ "./js/input_text.js":
/*!**************************!*\
  !*** ./js/input_text.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputText\": () => (/* binding */ inputText)\n/* harmony export */ });\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea */ \"./js/textarea.js\");\n\r\n\r\nfunction inputText(target) {\r\n  let text = \"\";  \r\n  if (target.innerText && target.innerText.length === 1) {\r\n    text = target.innerText;\r\n  } else if (target.innerText == \"Enter\") {\r\n    text = \"\\n\"\r\n  } else if (target.innerText == \"Tab\") {\r\n    text = \"\\t\"\r\n  } else if (target.innerText == \"Space\") {\r\n    text = \" \"\r\n  }\r\n  _textarea__WEBPACK_IMPORTED_MODULE_0__.textarea.textContent += text; \r\n  if (target.innerText == \"Backspace\") {\r\n    // target.dispatchEvent(new KeyboardEvent(\"keydown\", {code: \"Backspace\"}));\r\n    _textarea__WEBPACK_IMPORTED_MODULE_0__.textarea.textContent = _textarea__WEBPACK_IMPORTED_MODULE_0__.textarea.textContent.slice(0, -1);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/input_text.js?");

/***/ }),

/***/ "./js/keyboard_events.js":
/*!*******************************!*\
  !*** ./js/keyboard_events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyDown\": () => (/* binding */ keyDown),\n/* harmony export */   \"keyUp\": () => (/* binding */ keyUp)\n/* harmony export */ });\n/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input_text */ \"./js/input_text.js\");\n/* harmony import */ var _change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change_case */ \"./js/change_case.js\");\n/* harmony import */ var _change_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change_lang */ \"./js/change_lang.js\");\n\r\n\r\n\r\n\r\nfunction keyDown(event) {\r\n  let button = document.getElementById(event.code);  \r\n  if (button) {    \r\n    button.classList.add(\"active\");  \r\n    if (event.altKey && event.shiftKey) {\r\n      (0,_change_lang__WEBPACK_IMPORTED_MODULE_2__.changeLang)();\r\n    } else if (event.code === \"CapsLock\") {\r\n      (0,_change_case__WEBPACK_IMPORTED_MODULE_1__.changeCase)();   \r\n    } else {  \r\n      event.preventDefault();\r\n      (0,_input_text__WEBPACK_IMPORTED_MODULE_0__.inputText)(button); \r\n    }  \r\n  } \r\n}   \r\n\r\nfunction keyUp(event) {  \r\n  let button = document.getElementById(event.code);\r\n  if (button) {    \r\n    button.classList.remove(\"active\"); \r\n  } \r\n}\n\n//# sourceURL=webpack:///./js/keyboard_events.js?");

/***/ }),

/***/ "./js/mouse_events.js":
/*!****************************!*\
  !*** ./js/mouse_events.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mouseDown\": () => (/* binding */ mouseDown),\n/* harmony export */   \"mouseUp\": () => (/* binding */ mouseUp)\n/* harmony export */ });\n/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input_text */ \"./js/input_text.js\");\n/* harmony import */ var _change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change_case */ \"./js/change_case.js\");\n/* harmony import */ var _change_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change_lang */ \"./js/change_lang.js\");\n\r\n\r\n\r\n\r\nfunction mouseDown(event) {\r\n  let target = event.target;\r\n  if (target.classList.contains('button')) {\r\n    target.classList.add(\"active\");        \r\n    if (event.code === \"CapsLock\") {\r\n      (0,_change_case__WEBPACK_IMPORTED_MODULE_1__.changeCase)();      \r\n    } else if (event.altKey && event.shiftKey) {\r\n      (0,_change_lang__WEBPACK_IMPORTED_MODULE_2__.changeLang)();      \r\n    } else {\r\n      (0,_input_text__WEBPACK_IMPORTED_MODULE_0__.inputText)(target);     \r\n    }   \r\n  }  \r\n}\r\n\r\nfunction mouseUp(event) {\r\n  let target = event.target;\r\n  if (target.classList.contains('button')) {\r\n    if (target.innerText === \"CapsLock\") {\r\n      (0,_change_case__WEBPACK_IMPORTED_MODULE_1__.changeCase)();\r\n    } else {\r\n      target.classList.remove(\"active\");                \r\n    }          \r\n  }\r\n}  \n\n//# sourceURL=webpack:///./js/mouse_events.js?");

/***/ }),

/***/ "./js/textarea.js":
/*!************************!*\
  !*** ./js/textarea.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textarea\": () => (/* binding */ textarea)\n/* harmony export */ });\nlet textarea = document.createElement(\"textarea\");\r\ntextarea.classList.add(\"textarea\"); \r\ntextarea.setAttribute(\"rows\", \"5\");\r\ntextarea.setAttribute(\"cols\", \"50\");\n\n//# sourceURL=webpack:///./js/textarea.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header */ \"./js/header.js\");\n/* harmony import */ var _js_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/textarea */ \"./js/textarea.js\");\n/* harmony import */ var _js_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/board */ \"./js/board.js\");\n/* harmony import */ var _js_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/description */ \"./js/description.js\");\n/* harmony import */ var _js_change_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/change_case */ \"./js/change_case.js\");\n/* harmony import */ var _js_mouse_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/mouse_events */ \"./js/mouse_events.js\");\n/* harmony import */ var _js_keyboard_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/keyboard_events */ \"./js/keyboard_events.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Add elements on the page\r\n\r\ndocument.body.appendChild(_js_header__WEBPACK_IMPORTED_MODULE_0__.header);\r\n\r\ndocument.body.appendChild(_js_textarea__WEBPACK_IMPORTED_MODULE_1__.textarea);\r\n\r\ndocument.body.appendChild(_js_board__WEBPACK_IMPORTED_MODULE_2__.board);\r\n\r\ndocument.body.appendChild(_js_description__WEBPACK_IMPORTED_MODULE_3__.description);\r\n\r\n// Add interactive\r\n\r\n(0,_js_change_case__WEBPACK_IMPORTED_MODULE_4__.changeCase)()\r\n\r\n_js_board__WEBPACK_IMPORTED_MODULE_2__.board.onmousedown = function(event) { ;(0,_js_mouse_events__WEBPACK_IMPORTED_MODULE_5__.mouseDown)(event)};\r\n\r\n_js_board__WEBPACK_IMPORTED_MODULE_2__.board.onmouseup = function(event) { (0,_js_mouse_events__WEBPACK_IMPORTED_MODULE_5__.mouseUp)(event) };\r\n\r\ndocument.addEventListener('keydown', function(event) { (0,_js_keyboard_events__WEBPACK_IMPORTED_MODULE_6__.keyDown)(event) });\r\n\r\ndocument.addEventListener('keyup', function(event) { (0,_js_keyboard_events__WEBPACK_IMPORTED_MODULE_6__.keyUp)(event) });\r\n\n\n//# sourceURL=webpack:///./main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;