"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cart";
exports.ids = ["pages/api/cart"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxJQUFJRCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9SLHVEQUFnQixDQUFDSztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b3JldGVtcGxhdGVfZnJvbnRlbmQvLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9uZ29vc2VDb25uZWN0KCkge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHVyaSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibW9uZ29vc2VDb25uZWN0IiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJhc1Byb21pc2UiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        required: true\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    },\n    properties: {\n        type: Object\n    }\n}, {\n    timestamps: true\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUQ7QUFFekQsTUFBTUksZ0JBQWdCLElBQUlGLDRDQUFNQSxDQUFDO0lBQy9CRyxPQUFPO1FBQUNDLE1BQUtDO1FBQVFDLFVBQVMsSUFBSTtJQUFBO0lBQ2xDQyxhQUFhRjtJQUNiRyxPQUFPO1FBQUNKLE1BQU1LO1FBQVFILFVBQVUsSUFBSTtJQUFBO0lBQ3BDSSxRQUFRO1FBQUM7WUFBQ04sTUFBS0M7UUFBTTtLQUFFO0lBQ3ZCTSxVQUFVO1FBQUNQLE1BQUtOLGdFQUF1QjtRQUFFZ0IsS0FBSTtJQUFVO0lBQ3ZEQyxZQUFZO1FBQUNYLE1BQUtZO0lBQU07QUFDMUIsR0FBRztJQUNEQyxZQUFZLElBQUk7QUFDbEI7QUFFTyxNQUFNQyxVQUFVakIsb0RBQWMsSUFBSUYsK0NBQUtBLENBQUMsV0FBV0csZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b3JldGVtcGxhdGVfZnJvbnRlbmQvLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwge21vZGVsLCBTY2hlbWEsIG1vZGVsc30gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdGl0bGU6IHt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuICBwcmljZToge3R5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWV9LFxyXG4gIGltYWdlczogW3t0eXBlOlN0cmluZ31dLFxyXG4gIGNhdGVnb3J5OiB7dHlwZTptb25nb29zZS5UeXBlcy5PYmplY3RJZCwgcmVmOidDYXRlZ29yeSd9LFxyXG4gIHByb3BlcnRpZXM6IHt0eXBlOk9iamVjdH0sXHJcbn0sIHtcclxuICB0aW1lc3RhbXBzOiB0cnVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW9kZWxzLlByb2R1Y3QgfHwgbW9kZWwoJ1Byb2R1Y3QnLCBQcm9kdWN0U2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb2RlbCIsIlNjaGVtYSIsIm1vZGVscyIsIlByb2R1Y3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZXMiLCJjYXRlZ29yeSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwidGltZXN0YW1wcyIsIlByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/cart.js":
/*!***************************!*\
  !*** ./pages/api/cart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function handle(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    const ids = req.body.ids;\n    res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.find({\n        _id: ids\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFDTjtBQUUxQixlQUFlRSxPQUFPQyxHQUFHLEVBQUNDLEdBQUcsRUFBRTtJQUM1QyxNQUFNSiw4REFBZUE7SUFDckIsTUFBTUssTUFBTUYsSUFBSUcsSUFBSSxDQUFDRCxHQUFHO0lBQ3hCRCxJQUFJRyxJQUFJLENBQUMsTUFBTU4seURBQVksQ0FBQztRQUFDUSxLQUFJSjtJQUFHO0FBQ3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yZXRlbXBsYXRlX2Zyb250ZW5kLy4vcGFnZXMvYXBpL2NhcnQuanM/ZDZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vbmdvb3NlQ29ubmVjdH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIkAvbW9kZWxzL1Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEscmVzKSB7XHJcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcbiAgY29uc3QgaWRzID0gcmVxLmJvZHkuaWRzO1xyXG4gIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZCh7X2lkOmlkc30pKTtcclxufSJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlIiwicmVxIiwicmVzIiwiaWRzIiwiYm9keSIsImpzb24iLCJmaW5kIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/cart.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cart.js"));
module.exports = __webpack_exports__;

})();