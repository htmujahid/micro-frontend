/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/Store */ \"webpack/container/remote/store/Store\");\n/* harmony import */ var store_Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(store_Store__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var customer_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! customer/Customer */ \"webpack/container/remote/customer/Customer\");\n/* harmony import */ var customer_Customer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(customer_Customer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var order_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! order/Order */ \"webpack/container/remote/order/Order\");\n/* harmony import */ var order_Order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(order_Order__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var content_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! content/Content */ \"webpack/container/remote/content/Content\");\n/* harmony import */ var content_Content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(content_Content__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ \"./src/route.js\");\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_route__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://container/./src/bootstrap.js?");

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { currentUrlPath } = __webpack_require__(/*! ./utils/url */ \"./src/utils/url.js\");\r\n\r\nswitch(currentUrlPath()){\r\n    case \"/\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_home_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/home */ \"./src/pages/home.js\", 23));\r\n        break;\r\n}\r\n\r\nsetTimeout(() => {\r\n    const app = document.querySelector('#app');\r\n    if (app.innerHTML === '') {\r\n        __webpack_require__.e(/*! import() */ \"src_pages_not-found_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/not-found */ \"./src/pages/not-found.js\", 23));\r\n    }\r\n}, 100);\n\n//# sourceURL=webpack://container/./src/route.js?");

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* binding */ currentUrlPath)\n/* harmony export */ });\nfunction currentUrlPath(){\r\n    return window.location.pathname;\r\n}\n\n//# sourceURL=webpack://container/./src/utils/url.js?");

/***/ })

}]);