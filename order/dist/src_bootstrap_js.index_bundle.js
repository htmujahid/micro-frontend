"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkorder"] = self["webpackChunkorder"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ \"./src/route.js\");\n\r\n\r\nfunction mount(el){\r\n  const content = (0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  if (typeof content === 'string') {\r\n    el.innerHTML = content;\r\n  }\r\n}\r\n\r\nif (true) {\r\n  const el = document.querySelector('#dev-order');\r\n  if (el) {\r\n    mount(el);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ mount, routePaths: _route__WEBPACK_IMPORTED_MODULE_0__.routePaths });\n\n//# sourceURL=webpack://order/./src/bootstrap.js?");

/***/ }),

/***/ "./src/pages/cart.js":
/*!***************************!*\
  !*** ./src/pages/cart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render() {\r\n  return `<h1>Cart</h1>`\r\n}\n\n//# sourceURL=webpack://order/./src/pages/cart.js?");

/***/ }),

/***/ "./src/pages/product-order.js":
/*!************************************!*\
  !*** ./src/pages/product-order.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render() {\r\n  return `<h1>Orders</h1>`\r\n}\n\n//# sourceURL=webpack://order/./src/pages/product-order.js?");

/***/ }),

/***/ "./src/pages/product-payment.js":
/*!**************************************!*\
  !*** ./src/pages/product-payment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render() {\r\n  return `<h1>Payment</h1>`\r\n}\n\n//# sourceURL=webpack://order/./src/pages/product-payment.js?");

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init),\n/* harmony export */   routePaths: () => (/* binding */ routePaths)\n/* harmony export */ });\n/* harmony import */ var _pages_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/cart */ \"./src/pages/cart.js\");\n/* harmony import */ var _pages_product_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/product-order */ \"./src/pages/product-order.js\");\n/* harmony import */ var _pages_product_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product-payment */ \"./src/pages/product-payment.js\");\nconst { currentUrlPath } = __webpack_require__(/*! ./utils/url */ \"./src/utils/url.js\");\r\n\r\n\r\n\r\n\r\nconst routes = [\r\n    {\r\n        path: \"/cart\",\r\n        component: _pages_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    },\r\n    {\r\n        path: \"/product-order\",\r\n        component: _pages_product_order__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    },\r\n    {\r\n        path: \"/product-payment\",\r\n        component: _pages_product_payment__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    },\r\n]\r\n\r\nfunction init() {\r\n    for (const route of routes) {\r\n        if (route.path === currentUrlPath()) {\r\n            return route.component();\r\n        }\r\n    }\r\n}\r\n\r\nconst routePaths = routes.map((route) => route.path);\r\n\r\n\n\n//# sourceURL=webpack://order/./src/route.js?");

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* binding */ currentUrlPath)\n/* harmony export */ });\nfunction currentUrlPath(){\r\n    return window.location.pathname;\r\n}\n\n//# sourceURL=webpack://order/./src/utils/url.js?");

/***/ })

}]);