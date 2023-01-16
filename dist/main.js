/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContactPage() {
  const main = document.getElementById('main');
  main.innerHTML = `<div class="contact" id="contact">
  <img src="images/konoha.jpeg" alt="Location: The hidden leaf village">
  <p class="contactInfo">Visit us at The Hidden Leaf Village (Konohagakure) or order online!</p>
  </div>`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHomePage() {
  const main = document.getElementById('main');
  main.innerHTML = `<div class="home" id="home"><p>Best Ramen in the hidden leaf </p>
    <p>Made with passion since the first great ninja war!</p>
    <img src="images/teuchi.png" alt="Sage of six bowls">
    <p>Order online or visit us!</p></div>`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenuPage() {
  const main = document.getElementById('main');
  main.innerHTML = `<div class="menu" id="menu">
  <div class="menuItem">
            <img src="images/ramen1.jpeg" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="images/ramen2.webp" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="images/ramen3.png" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="images/ramen4.jpeg" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div>
        <div class="menuItem">
            <img src="images/ramen5.jpeg" alt="" class="foodImg">
            <p class="foodInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
        </div></div>`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);


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
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', _homepage__WEBPACK_IMPORTED_MODULE_0__["default"]);

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_1__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFnQixlQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQ1JqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZ0IsWUFBWSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUNSOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFnQixZQUFZLEVBQUU7Ozs7Ozs7VUN6QjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNFO0FBQ047O0FBRWxDLHFEQUFZOztBQUVaO0FBQ0Esa0NBQWtDLGlEQUFZOztBQUU5QztBQUNBLGtDQUFrQyw2Q0FBWTs7QUFFOUM7QUFDQSxxQ0FBcUMsZ0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjb250YWN0XCIgaWQ9XCJjb250YWN0XCI+XG4gIDxpbWcgc3JjPVwiaW1hZ2VzL2tvbm9oYS5qcGVnXCIgYWx0PVwiTG9jYXRpb246IFRoZSBoaWRkZW4gbGVhZiB2aWxsYWdlXCI+XG4gIDxwIGNsYXNzPVwiY29udGFjdEluZm9cIj5WaXNpdCB1cyBhdCBUaGUgSGlkZGVuIExlYWYgVmlsbGFnZSAoS29ub2hhZ2FrdXJlKSBvciBvcmRlciBvbmxpbmUhPC9wPlxuICA8L2Rpdj5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCAobG9hZENvbnRhY3RQYWdlKTtcbiIsImZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJob21lXCIgaWQ9XCJob21lXCI+PHA+QmVzdCBSYW1lbiBpbiB0aGUgaGlkZGVuIGxlYWYgPC9wPlxuICAgIDxwPk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIHRoZSBmaXJzdCBncmVhdCBuaW5qYSB3YXIhPC9wPlxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3RldWNoaS5wbmdcIiBhbHQ9XCJTYWdlIG9mIHNpeCBib3dsc1wiPlxuICAgIDxwPk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyE8L3A+PC9kaXY+YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGxvYWRIb21lUGFnZSk7XG4iLCJmdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibWVudVwiIGlkPVwibWVudVwiPlxuICA8ZGl2IGNsYXNzPVwibWVudUl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3JhbWVuMS5qcGVnXCIgYWx0PVwiXCIgY2xhc3M9XCJmb29kSW1nXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RJbmZvXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudUl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3JhbWVuMi53ZWJwXCIgYWx0PVwiXCIgY2xhc3M9XCJmb29kSW1nXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RJbmZvXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudUl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3JhbWVuMy5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImZvb2RJbWdcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZEluZm9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvcmFtZW40LmpwZWdcIiBhbHQ9XCJcIiBjbGFzcz1cImZvb2RJbWdcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZEluZm9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51SXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvcmFtZW41LmpwZWdcIiBhbHQ9XCJcIiBjbGFzcz1cImZvb2RJbWdcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZEluZm9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lLjwvcD5cbiAgICAgICAgPC9kaXY+PC9kaXY+YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGxvYWRNZW51UGFnZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZVBhZ2UgZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gJy4vbWVudSc7XG5cbmxvYWRIb21lUGFnZSgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZVBhZ2UpO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVCdG4nKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudVBhZ2UpO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RCdG4nKTtcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdFBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9