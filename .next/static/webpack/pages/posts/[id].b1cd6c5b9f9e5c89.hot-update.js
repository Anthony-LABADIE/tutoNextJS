"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./src/pages/posts/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/posts/[id].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/date */ \"./src/components/date.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { postData  } = param;\n    console.log(postData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                dateString: postData.date\n            }, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUM7QUFDUjs7QUFTZCxTQUFTRSxLQUFLLEtBQWlCLEVBQUU7UUFBbkIsRUFBRUMsU0FBUSxFQUFPLEdBQWpCO0lBQzNCQyxRQUFRQyxHQUFHLENBQUNGO0lBRVoscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0wsa0RBQUlBOzBCQUNILDRFQUFDTTs4QkFBT0osU0FBU0ksS0FBSzs7Ozs7Ozs7Ozs7WUFFdkJKLFNBQVNJLEtBQUs7MEJBQ2YsOERBQUNDOzs7OztZQUNBTCxTQUFTTSxFQUFFOzBCQUNaLDhEQUFDRDs7Ozs7MEJBQ0QsOERBQUNSLHdEQUFJQTtnQkFBQ1UsWUFBWVAsU0FBU1EsSUFBSTs7Ozs7OzBCQUMvQiw4REFBQ0w7Z0JBQUlNLHlCQUF5QjtvQkFBRUMsUUFBUVYsU0FBU1csV0FBVztnQkFBQzs7Ozs7Ozs7Ozs7O0FBR25FLENBQUM7S0FoQnVCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS50c3g/ODIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBEYXRlIGZyb20gJ0AvY29tcG9uZW50cy9kYXRlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBnZXRBbGxQb3N0SWRzLCBnZXRQb3N0RGF0YSB9IGZyb20gJy4uLy4uLy4uL2xpYi9wb3N0cyc7XG5cbmludGVyZmFjZSBJUG9zdGRhdGEge1xuICBjb250ZW50SHRtbDogc3RyaW5nO1xuICBkYXRlOiBudW1iZXI7XG4gIGlkOiBzO1xuICB0aXRsZTogc3RyaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH06IGFueSkge1xuICBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge3Bvc3REYXRhLnRpdGxlfVxuICAgICAgPGJyIC8+XG4gICAgICB7cG9zdERhdGEuaWR9XG4gICAgICA8YnIgLz5cbiAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3REYXRhLmRhdGV9IC8+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0SWRzKCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IGFueSkge1xuICAvLyBBZGQgdGhlIFwiYXdhaXRcIiBrZXl3b3JkIGxpa2UgdGhpczpcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3REYXRhLFxuICAgIH0sXG4gIH07XG59Il0sIm5hbWVzIjpbIkRhdGUiLCJIZWFkIiwiUG9zdCIsInBvc3REYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwiYnIiLCJpZCIsImRhdGVTdHJpbmciLCJkYXRlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50SHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].tsx\n"));

/***/ })

});