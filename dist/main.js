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

/***/ "./js/create_buttons.js":
/*!******************************!*\
  !*** ./js/create_buttons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButton\": () => (/* binding */ createButton)\n/* harmony export */ });\n// Create and add buttons on the keyboard\r\nlet keyNames = new Map(Object.entries({\"[\": \"BracketLeft\", \"]\": \"BracketRight\", \r\n    \"\\\\\": \"Backslash\", \"`\": \"Backquote\", '/': \"Slash\", \"'\": \"Quote\", \";\": \"Semicolon\", \r\n    \",\": \"Comma\", \".\": \"Period\", \"-\": \"Minus\", \"=\": \"Equal\", \"Del\": \"Delete\", \" \": \"Space\", \r\n    \"◄\": \"ArrowLeft\", \"▼\": \"ArrowDown\", \"►\": \"ArrowRight\", \"▲\": \"ArrowUp\", \"Win\": \"MetaLeft\"}));  \r\n\r\nfunction createButton(text) {\r\n  let button = document.createElement(\"div\");\r\n  button.classList.add(\"button\");  \r\n  if (text.length > 4) {\r\n    button.style.width = \"86px\";\r\n  } else if (text === \" \") {\r\n    button.style.width = \"316px\";\r\n  }  \r\n  if (\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".includes(text)) {\r\n    button.setAttribute(\"id\", `Key${text}`); \r\n    button.classList.add(\"letters\"); \r\n  } else if (\"0123456789\".includes(text)) {\r\n    button.setAttribute(\"id\", `Digit${text}`); \r\n    button.classList.add(\"digits\");  \r\n  } else if (keyNames.has(text)) {\r\n    button.setAttribute(\"id\", keyNames.get(text));\r\n    if (text.length === 1 && text !== \"◄\" && text !== \"▼\" && text !==  \"►\" && text !== \"▲\") {\r\n      if (text === \"-\" || text === \"=\" || text === \"\\\\\") {\r\n        button.classList.add(\"digits\");  \r\n      } else if (text === \" \") {\r\n        button.classList.add(\"funcButtons\");\r\n      }else {\r\n        button.classList.add(\"letters\");  \r\n      }     \r\n    } else {\r\n      button.classList.add(\"funcButtons\");  \r\n    }\r\n  } else {\r\n    button.setAttribute(\"id\", text);\r\n    button.classList.add(\"funcButtons\");  \r\n  }  \r\n  button.innerText = text;\r\n  return button;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/create_buttons.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_create_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/create_buttons */ \"./js/create_buttons.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\r\n\r\n\r\n\r\n// Add elements on the page\r\n\r\nlet header = document.createElement(\"h1\");\r\nheader.classList.add(\"header\");  \r\nheader.innerText = \"Virtual Keyboard\";\r\ndocument.body.appendChild(header);\r\n\r\nlet textarea = document.createElement(\"textarea\");\r\ntextarea.classList.add(\"textarea\"); \r\ntextarea.setAttribute(\"rows\", \"5\");\r\ntextarea.setAttribute(\"cols\", \"50\");\r\ntextarea.setAttribute(\"autofocus\", \"autofocus\");\r\ndocument.body.appendChild(textarea);\r\n\r\nlet board = document.createElement(\"div\");\r\nboard.classList.add(\"board\"); \r\ndocument.body.appendChild(board);\r\n\r\nfunction createRow() {\r\n  let row = document.createElement(\"div\");\r\n  row.classList.add(\"row\");  \r\n  return row;\r\n};\r\n\r\nlet symbol_rows = [\r\n  [\"`\", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, \"-\", \"=\", \"Backspace\"],\r\n  [\"Tab\", ...\"QWERTYUIOP[]\", \"\\\\\", \"Del\"],\r\n  [\"CapsLock\", ...\"ASDFGHJKL;'\", \"Enter\"],\r\n  [\"Shift\", ...\"ZXCVBNM,./\", \"▲\", \"Shift\"],\r\n  [\"Ctrl\", \"Win\", \"Alt\", \" \", \"Alt\", \"◄\", \"▼\", \"►\", \"Ctrl\"],\r\n];\r\n\r\nfor (let symbol_row of symbol_rows) {\r\n  let row = createRow();\r\n  board.appendChild(row);\r\n  for (let symbol of symbol_row) {\r\n    row.appendChild((0,_js_create_buttons__WEBPACK_IMPORTED_MODULE_0__.createButton)(symbol));    \r\n  }\r\n}\r\n\r\nlet shiftButtons = Array.from(document.querySelectorAll(\"#Shift\"));\r\nshiftButtons[0].setAttribute(\"id\", \"ShiftLeft\");\r\nshiftButtons[1].setAttribute(\"id\", \"ShiftRight\");\r\n\r\nlet ctrlButtons = Array.from(document.querySelectorAll(\"#Ctrl\"));\r\nctrlButtons[0].setAttribute(\"id\", \"ControlLeft\");\r\nctrlButtons[1].setAttribute(\"id\", \"ControlRight\");\r\n\r\nlet altButtons = Array.from(document.querySelectorAll(\"#Alt\"));\r\naltButtons[0].setAttribute(\"id\", \"AltLeft\");\r\naltButtons[1].setAttribute(\"id\", \"AltRight\");\r\n\r\nlet capsButton = document.getElementById(\"CapsLock\");\r\n\r\nlet allButtons = Array.from(document.querySelectorAll(\".button\"));\r\nlet letters = Array.from(document.querySelectorAll(\".letters\"));\r\nlet digits = Array.from(document.querySelectorAll(\".digits\"));\r\n\r\nlet isCapsLock = true;\r\nlet isEng = true;\r\n\r\n// Add interactive\r\n\r\nfunction changeCase() {\r\n  isCapsLock = !isCapsLock;  \r\n  isCapsLock ? capsButton.classList.add(\"active\") : capsButton.classList.remove(\"active\");\r\n  for (let letter of letters) {\r\n    letter.innerText = isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase(); \r\n  }\r\n}\r\n\r\nchangeCase()\r\n\r\nfunction changeLang() {\r\n  isEng = !isEng;  \r\n  let engLetters = [...\"QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,.`/\"];\r\n  let rusLetters = [...\"ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ.\"]; \r\n  console.log(letters)\r\n  for (let letter of letters) {\r\n    if (!isEng) {\r\n      letter.innerText = rusLetters[engLetters.indexOf(letter.innerText.toUpperCase())];\r\n    } else {\r\n      letter.innerText = engLetters[rusLetters.indexOf(letter.innerText.toUpperCase())]; \r\n    }    \r\n    letter.innerText = isCapsLock ? letter.innerText.toUpperCase() : letter.innerText.toLowerCase();    \r\n  }  \r\n}\r\n\r\nfunction inputText(target) {\r\n  let text = \"\";  \r\n  if (target.innerText.length === 1) {\r\n    text = target.innerText;\r\n  } else if (target.innerText == \"Enter\") {\r\n    text = \"\\n\"\r\n  } else if (target.innerText == \"Tab\") {\r\n    text = \"\\t\"\r\n  } else if (target.innerText == \"Space\") {\r\n    text = \" \"\r\n  } \r\n  textarea.textContent += text; \r\n}\r\n\r\nboard.onmousedown = function(event) {\r\n  let target = event.target;\r\n  if (target.classList.contains('button')) {\r\n    target.classList.add(\"active\");        \r\n    if (event.code === \"CapsLock\") {\r\n      changeCase();      \r\n    } else if (event.altKey && event.shiftKey) {\r\n      changeLang();      \r\n    } else if (event.shiftKey) {      \r\n      allButtons.classList.add(\"shift\");\r\n    } else {\r\n      inputText(target);     \r\n    } \r\n    console.log(target.innerText);   \r\n  }\r\n  \r\n}\r\n\r\nboard.onmouseup = function(event) {\r\n  let target = event.target;\r\n  if (target.classList.contains('button')) {\r\n    if (target.innerText === \"CapsLock\") {\r\n      changeCase();\r\n    } else {\r\n      target.classList.remove(\"active\");                \r\n    }  \r\n    if (event.shiftKey) {      \r\n      allButtons.classList.remove(\"shift\");\r\n    }    \r\n  }  \r\n}  \r\n\r\ndocument.addEventListener('keydown', function(event) {   \r\n  // event.preventDefault();\r\n  if (event.altKey && event.shiftKey) {\r\n    changeLang();\r\n  } else if (event.code === \"CapsLock\") {\r\n    changeCase(); \r\n  }\r\n  let button = document.getElementById(event.code);  \r\n  button.classList.add(\"active\");\r\n  console.log(button, button.innerText);\r\n  inputText(button);  \r\n});\r\n\r\ndocument.addEventListener('keyup', function(event) {  \r\n  let button = document.getElementById(event.code);  \r\n  button.classList.remove(\"active\");        \r\n});\r\n\r\n// Description in the end of document\r\n\r\nlet description = document.createElement(\"div\");\r\ndescription.classList.add(\"decription\");\r\n\r\nlet paragraph = document.createElement(\"p\");\r\nparagraph.classList.add(\"paragraph\");\r\nparagraph.innerText = `Клавиатура создана в операционной системе Windows\\n\r\nДля переключения языка комбинация: левыe shift + alt`;\r\n\r\ndocument.body.appendChild(description);\r\ndescription.appendChild(paragraph);\r\n\n\n//# sourceURL=webpack:///./main.js?");

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