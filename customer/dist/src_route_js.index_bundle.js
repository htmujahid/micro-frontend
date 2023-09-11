/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcustomer"] = self["webpackChunkcustomer"] || []).push([["src_route_js"],{

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { currentUrlPath } = __webpack_require__(/*! ./utils/url */ \"./src/utils/url.js\");\r\n\r\nswitch(currentUrlPath()){\r\n    case \"/login\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_login_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/login */ \"./src/pages/login.js\", 23));\r\n        break;\r\n    case \"/register\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_register_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/register */ \"./src/pages/register.js\", 23));\r\n        break;\r\n    case \"/profile\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_profile_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/profile */ \"./src/pages/profile.js\", 23));\r\n        break;\r\n    case \"/orders\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_orders_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/orders */ \"./src/pages/orders.js\", 23));\r\n        break;\r\n    case \"/payments\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_payments_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/payments */ \"./src/pages/payments.js\", 23));\r\n        break;\r\n    case \"/security\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_security_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/security */ \"./src/pages/security.js\", 23));\r\n        break;\r\n}\n\n//# sourceURL=webpack://customer/./src/route.js?");

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* binding */ currentUrlPath)\n/* harmony export */ });\nfunction currentUrlPath(){\r\n    return window.location.pathname;\r\n}\n\n//# sourceURL=webpack://customer/./src/utils/url.js?");

/***/ })

}]);