"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/Store */ \"webpack/container/remote/store/Store\");\n/* harmony import */ var store_Store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(store_Store__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var customer_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! customer/Customer */ \"webpack/container/remote/customer/Customer\");\n/* harmony import */ var customer_Customer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(customer_Customer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var order_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! order/Order */ \"webpack/container/remote/order/Order\");\n/* harmony import */ var order_Order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(order_Order__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var content_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! content/Content */ \"webpack/container/remote/content/Content\");\n/* harmony import */ var content_Content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(content_Content__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ \"./src/route.js\");\n/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils */ \"../core/utils/index.js\");\n/* harmony import */ var _pages_not_found__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found */ \"./src/pages/not-found.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst apps = [\r\n  (store_Store__WEBPACK_IMPORTED_MODULE_0___default()),\r\n  (customer_Customer__WEBPACK_IMPORTED_MODULE_1___default()),\r\n  (order_Order__WEBPACK_IMPORTED_MODULE_2___default()),\r\n  (content_Content__WEBPACK_IMPORTED_MODULE_3___default()),\r\n];\r\n\r\nfunction mount(el){\r\n  if (!(0,_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()) {\r\n    return;\r\n  }\r\n  (0,_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().style && (0,_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().style();\r\n  const content = (0,_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().default();\r\n  if (typeof content === 'string') {\r\n    el.innerHTML = content;\r\n  }\r\n  (0,_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().script && (0,_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().script();\r\n}\r\n\r\nif (true) {\r\n  const el = document.querySelector('#app');\r\n  if (el) {\r\n    mount(el);\r\n    apps.forEach((app) => {\r\n      app.mount(el);\r\n    });\r\n  }\r\n  \r\n  const routesList = [\r\n    ..._route__WEBPACK_IMPORTED_MODULE_4__.routePaths,\r\n    ...apps.map((app) => app.routePaths).flat(),\r\n  ]\r\n\r\n  if (!routesList.includes((0,_core_utils__WEBPACK_IMPORTED_MODULE_5__.currentUrlPath)())) {\r\n    el.innerHTML = (0,_pages_not_found__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://container/./src/bootstrap.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render),\n/* harmony export */   script: () => (/* binding */ script),\n/* harmony export */   style: () => (/* binding */ style)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"../core/index.js\");\n\r\n\r\nlet counter = 0;\r\n\r\nasync function script() {\r\n  const btn = document.querySelector('#btn-1');\r\n  btn.addEventListener('click', () => {\r\n    counter++;\r\n    btn.innerHTML = `click me ${counter}`\r\n  });\r\n}\r\n\r\nfunction render(){\r\n\r\n  return (0,_core__WEBPACK_IMPORTED_MODULE_0__.html)`\r\n  <div>\r\n    <h1>Home</h1>\r\n    <button id=\"btn-1\">click me ${counter}</button>\r\n  </div>`;\r\n}\r\n\r\nfunction style(){\r\n  (0,_core__WEBPACK_IMPORTED_MODULE_0__.css)`\r\n  h1 {\r\n    color: red;\r\n    }\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://container/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/not-found.js":
/*!********************************!*\
  !*** ./src/pages/not-found.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render(){\r\n  return `<h1>Not Found</h1>`\r\n}\n\n//# sourceURL=webpack://container/./src/pages/not-found.js?");

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init),\n/* harmony export */   routePaths: () => (/* binding */ routePaths)\n/* harmony export */ });\n/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils */ \"../core/utils/index.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\r\n\r\n\r\nconst routes = [\r\n    {\r\n        path: \"/\",\r\n        component: _pages_home__WEBPACK_IMPORTED_MODULE_1__,\r\n    },\r\n]\r\n\r\nfunction init() {\r\n    for (const route of routes) {\r\n        if (route.path === (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.currentUrlPath)()) {\r\n            return route.component;\r\n        }\r\n    }\r\n}\r\n\r\nconst routePaths = routes.map((route) => route.path);\r\n\r\n\n\n//# sourceURL=webpack://container/./src/route.js?");

/***/ }),

/***/ "../core/html.js":
/*!***********************!*\
  !*** ../core/html.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   html: () => (/* binding */ html)\n/* harmony export */ });\nfunction html(strings, ...values) {\r\n  let result = '';\r\n  strings.forEach((string, i) => {\r\n    result += string;\r\n    if (i < values.length) {\r\n      result += values[i];\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://container/../core/html.js?");

/***/ }),

/***/ "../core/index.js":
/*!************************!*\
  !*** ../core/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   css: () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_1__.css),\n/* harmony export */   html: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__.html),\n/* harmony export */   inlineScript: () => (/* reexport safe */ _script__WEBPACK_IMPORTED_MODULE_2__.inlineScript)\n/* harmony export */ });\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ \"../core/html.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"../core/style.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ \"../core/script.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://container/../core/index.js?");

/***/ }),

/***/ "../core/script.js":
/*!*************************!*\
  !*** ../core/script.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inlineScript: () => (/* binding */ inlineScript)\n/* harmony export */ });\nfunction inlineScript(code) {\r\n    return `<script>${code}</script>`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://container/../core/script.js?");

/***/ }),

/***/ "../core/style.js":
/*!************************!*\
  !*** ../core/style.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   css: () => (/* binding */ css)\n/* harmony export */ });\nfunction css(styles) {\r\n  const style = document.createElement('style');\r\n\r\n  style.innerHTML = styles;\r\n\r\n  document.head.appendChild(style);\r\n}\n\n//# sourceURL=webpack://container/../core/style.js?");

/***/ }),

/***/ "../core/utils/index.js":
/*!******************************!*\
  !*** ../core/utils/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_0__.currentUrlPath)\n/* harmony export */ });\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"../core/utils/url.js\");\n\n\n//# sourceURL=webpack://container/../core/utils/index.js?");

/***/ }),

/***/ "../core/utils/url.js":
/*!****************************!*\
  !*** ../core/utils/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* binding */ currentUrlPath)\n/* harmony export */ });\nfunction currentUrlPath(){\r\n    return window.location.pathname;\r\n}\n\n//# sourceURL=webpack://container/../core/utils/url.js?");

/***/ })

}]);