"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcustomer"] = self["webpackChunkcustomer"] || []).push([["src_bootstrap_js"],{

/***/ "../core/html.js":
/*!***********************!*\
  !*** ../core/html.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   html: () => (/* binding */ html)\n/* harmony export */ });\nfunction html(strings, ...values) {\r\n  let result = '';\r\n  strings.forEach((string, i) => {\r\n    result += string;\r\n    if (i < values.length) {\r\n      result += values[i];\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://customer/../core/html.js?");

/***/ }),

/***/ "../core/index.js":
/*!************************!*\
  !*** ../core/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   css: () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_1__.css),\n/* harmony export */   html: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__.html),\n/* harmony export */   inlineScript: () => (/* reexport safe */ _script__WEBPACK_IMPORTED_MODULE_2__.inlineScript)\n/* harmony export */ });\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ \"../core/html.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"../core/style.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ \"../core/script.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://customer/../core/index.js?");

/***/ }),

/***/ "../core/script.js":
/*!*************************!*\
  !*** ../core/script.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inlineScript: () => (/* binding */ inlineScript)\n/* harmony export */ });\nfunction inlineScript(code) {\r\n    return `<script>${code}</script>`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://customer/../core/script.js?");

/***/ }),

/***/ "../core/style.js":
/*!************************!*\
  !*** ../core/style.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   css: () => (/* binding */ css)\n/* harmony export */ });\nfunction css(styles) {\r\n  const style = document.createElement('style');\r\n\r\n  style.innerHTML = styles;\r\n\r\n  document.head.appendChild(style);\r\n}\n\n//# sourceURL=webpack://customer/../core/style.js?");

/***/ }),

/***/ "../core/utils/index.js":
/*!******************************!*\
  !*** ../core/utils/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_0__.currentUrlPath)\n/* harmony export */ });\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"../core/utils/url.js\");\n\n\n//# sourceURL=webpack://customer/../core/utils/index.js?");

/***/ }),

/***/ "../core/utils/url.js":
/*!****************************!*\
  !*** ../core/utils/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentUrlPath: () => (/* binding */ currentUrlPath)\n/* harmony export */ });\nfunction currentUrlPath(){\r\n    return window.location.pathname;\r\n}\n\n//# sourceURL=webpack://customer/../core/utils/url.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ \"./src/route.js\");\n\r\n\r\nfunction mount(el){\r\n  if (!(0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n    return;\r\n  }\r\n  (0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().style && (0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().style()\r\n  const content = (0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()?.default && (0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().default()\r\n  if (typeof content === 'string') {\r\n    el.innerHTML = content;\r\n  }\r\n  (0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().script && (0,_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().script()\r\n}\r\n\r\nif (true) {\r\n  const el = document.querySelector('#dev-customer');\r\n  if (el) {\r\n    mount(el);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ mount, routePaths: _route__WEBPACK_IMPORTED_MODULE_0__.routePaths });\n\n//# sourceURL=webpack://customer/./src/bootstrap.js?");

/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"../core/index.js\");\n\r\n\r\nfunction render() {\r\n  return (0,_core__WEBPACK_IMPORTED_MODULE_0__.html)`<h1>Login</h1>`\r\n}\n\n//# sourceURL=webpack://customer/./src/pages/login.js?");

/***/ }),

/***/ "./src/pages/orders.js":
/*!*****************************!*\
  !*** ./src/pages/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"../core/index.js\");\n\r\n\r\nfunction render() {\r\n  return (0,_core__WEBPACK_IMPORTED_MODULE_0__.html)`<h1>Orders</h1>`\r\n}\n\n//# sourceURL=webpack://customer/./src/pages/orders.js?");

/***/ }),

/***/ "./src/pages/payments.js":
/*!*******************************!*\
  !*** ./src/pages/payments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"../core/index.js\");\n\r\n\r\nfunction render() {\r\n  return (0,_core__WEBPACK_IMPORTED_MODULE_0__.html)`<h1>Payment</h1>`\r\n}\n\n//# sourceURL=webpack://customer/./src/pages/payments.js?");

/***/ }),

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"../core/index.js\");\n\r\n\r\nfunction render() {\r\n  return (0,_core__WEBPACK_IMPORTED_MODULE_0__.html)`<h1>Profile</h1>`\r\n}\n\n//# sourceURL=webpack://customer/./src/pages/profile.js?");

/***/ }),

/***/ "./src/pages/register.js":
/*!*******************************!*\
  !*** ./src/pages/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"../core/index.js\");\n\r\n\r\nfunction render() {\r\n  return (0,_core__WEBPACK_IMPORTED_MODULE_0__.html)`<h1>Register</h1>`\r\n}\n\n//# sourceURL=webpack://customer/./src/pages/register.js?");

/***/ }),

/***/ "./src/pages/security.js":
/*!*******************************!*\
  !*** ./src/pages/security.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"../core/index.js\");\n\r\n\r\nfunction render() {\r\n  return (0,_core__WEBPACK_IMPORTED_MODULE_0__.html)`<h1>Security</h1>`\r\n}\n\n//# sourceURL=webpack://customer/./src/pages/security.js?");

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init),\n/* harmony export */   routePaths: () => (/* binding */ routePaths)\n/* harmony export */ });\n/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils */ \"../core/utils/index.js\");\n/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login */ \"./src/pages/login.js\");\n/* harmony import */ var _pages_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register */ \"./src/pages/register.js\");\n/* harmony import */ var _pages_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile */ \"./src/pages/profile.js\");\n/* harmony import */ var _pages_orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/orders */ \"./src/pages/orders.js\");\n/* harmony import */ var _pages_payments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/payments */ \"./src/pages/payments.js\");\n/* harmony import */ var _pages_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/security */ \"./src/pages/security.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst routes = [\r\n    {\r\n        path: \"/login\",\r\n        component: _pages_login__WEBPACK_IMPORTED_MODULE_1__,\r\n    },\r\n    {\r\n        path: \"/register\",\r\n        component: _pages_register__WEBPACK_IMPORTED_MODULE_2__,\r\n    },\r\n    {\r\n        path: \"/profile\",\r\n        component: _pages_profile__WEBPACK_IMPORTED_MODULE_3__,\r\n    },\r\n    {\r\n        path: \"/orders\",\r\n        component: _pages_orders__WEBPACK_IMPORTED_MODULE_4__,\r\n    },\r\n    {\r\n        path: \"/payments\",\r\n        component: _pages_payments__WEBPACK_IMPORTED_MODULE_5__,\r\n    },\r\n    {\r\n        path: \"/security\",\r\n        component: _pages_security__WEBPACK_IMPORTED_MODULE_6__,\r\n    },\r\n]\r\n\r\nfunction init() {\r\n    for (const route of routes) {\r\n        if (route.path === (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.currentUrlPath)()) {\r\n            return route.component;\r\n        }\r\n    }\r\n}\r\n\r\nconst routePaths = routes.map((route) => route.path);\r\n\r\n\n\n//# sourceURL=webpack://customer/./src/route.js?");

/***/ })

}]);