/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstore"] = self["webpackChunkstore"] || []).push([["src_route_js"],{

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { currentUrlPath } = __webpack_require__(/*! ./utils/url */ \"./src/utils/url.js\");\r\n\r\nswitch(currentUrlPath()){\r\n    case \"/products\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_products_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/products */ \"./src/pages/products.js\", 23));\r\n        break;\r\n    case \"/products-info\":\r\n        __webpack_require__.e(/*! import() */ \"src_pages_product-info_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./pages/product-info */ \"./src/pages/product-info.js\", 23));\r\n        break;\r\n}\n\n//# sourceURL=webpack://store/./src/route.js?");

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* binding */ currentUrlPath)\n/* harmony export */ });\nfunction currentUrlPath(){\r\n    return window.location.pathname;\r\n}\n\n//# sourceURL=webpack://store/./src/utils/url.js?");

/***/ })

}]);