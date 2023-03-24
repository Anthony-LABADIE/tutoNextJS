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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./lib/posts.tsx":
/*!***********************!*\
  !*** ./lib/posts.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostIds\": () => (/* binding */ getAllPostIds),\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData),\n/* harmony export */   \"getSortedPostsData\": () => (/* binding */ getSortedPostsData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"posts\");\nfunction getSortedPostsData() {\n    // Get file names under /posts\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    const allPostsData = fileNames.map((fileName)=>{\n        // Remove \".md\" from file name to get id\n        const id = fileName.replace(/\\.md$/, \"\");\n        // Read markdown file as string\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n        // Use gray-matter to parse the post metadata section\n        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        // Combine the data with the id\n        return {\n            id,\n            ...matterResult.data\n        };\n    });\n    // Sort posts by date\n    return allPostsData.sort((a, b)=>{\n        if (a.date < b.date) {\n            return 1;\n        } else {\n            return -1;\n        }\n    });\n}\nfunction getAllPostIds() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    // Returns an array that looks like this:\n    // [\n    //   {\n    //     params: {\n    //       id: 'ssg-ssr'\n    //     }\n    //   },\n    //   {\n    //     params: {\n    //       id: 'pre-rendering'\n    //     }\n    //   }\n    // ]\n    return fileNames.map((fileName)=>{\n        return {\n            params: {\n                id: fileName.replace(/\\.md$/, \"\")\n            }\n        };\n    });\n}\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n    // Use gray-matter to parse the post metadata section\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    // Use remark to convert markdown into HTML string\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(matterResult.content);\n    const contentHtml = processedContent.toString();\n    // Combine the data with the id and contentHtml\n    return {\n        id,\n        contentHtml,\n        ...matterResult.data\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFDUztBQUNBO0FBQ0Q7QUFFL0IsTUFBTUssaUJBQWlCSixnREFBUyxDQUFDTSxRQUFRQyxHQUFHLElBQUk7QUFFekMsU0FBU0MscUJBQXFCO0lBQ2pDLDhCQUE4QjtJQUM5QixNQUFNQyxZQUFZVixxREFBYyxDQUFDSztJQUVqQyxNQUFNTyxlQUFlRixVQUFVRyxHQUFHLENBQUMsQ0FBQ0MsV0FBYTtRQUM3Qyx3Q0FBd0M7UUFDeEMsTUFBTUMsS0FBS0QsU0FBU0UsT0FBTyxDQUFDLFNBQVM7UUFFckMsK0JBQStCO1FBQy9CLE1BQU1DLFdBQVdoQixnREFBUyxDQUFDSSxnQkFBZ0JTO1FBQzNDLE1BQU1JLGVBQWVsQixzREFBZSxDQUFDaUIsVUFBVTtRQUUvQyxxREFBcUQ7UUFDckQsTUFBTUcsZUFBZWxCLGtEQUFNQSxDQUFDZ0I7UUFFNUIsK0JBQStCO1FBQy9CLE9BQU87WUFDSEg7WUFDQSxHQUFHSyxhQUFhQyxJQUFJO1FBQ3hCO0lBQ0o7SUFDQSxxQkFBcUI7SUFDckIsT0FBT1QsYUFBYVUsSUFBSSxDQUFDLENBQUNDLEdBQVFDLElBQVc7UUFDekMsSUFBSUQsRUFBRUUsSUFBSSxHQUFHRCxFQUFFQyxJQUFJLEVBQUU7WUFDakIsT0FBTztRQUNYLE9BQU87WUFDSCxPQUFPLENBQUM7UUFDWixDQUFDO0lBQ0w7QUFFSixDQUFDO0FBRU0sU0FBU0MsZ0JBQWdCO0lBQzVCLE1BQU1oQixZQUFZVixxREFBYyxDQUFDSztJQUVqQyx5Q0FBeUM7SUFDekMsSUFBSTtJQUNKLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixPQUFPO0lBQ1AsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLE1BQU07SUFDTixJQUFJO0lBQ0osT0FBT0ssVUFBVUcsR0FBRyxDQUFDLENBQUNDLFdBQWE7UUFDL0IsT0FBTztZQUNIYSxRQUFRO2dCQUNKWixJQUFJRCxTQUFTRSxPQUFPLENBQUMsU0FBUztZQUNsQztRQUNKO0lBQ0o7QUFDSixDQUFDO0FBRU0sZUFBZVksWUFBWWIsRUFBRSxFQUFFO0lBQ2xDLE1BQU1FLFdBQVdoQixnREFBUyxDQUFDSSxnQkFBZ0IsQ0FBQyxFQUFFVSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxNQUFNRyxlQUFlbEIsc0RBQWUsQ0FBQ2lCLFVBQVU7SUFFL0MscURBQXFEO0lBQ3JELE1BQU1HLGVBQWVsQixrREFBTUEsQ0FBQ2dCO0lBRTVCLGtEQUFrRDtJQUNsRCxNQUFNVyxtQkFBbUIsTUFBTTFCLDhDQUFNQSxHQUNoQzJCLEdBQUcsQ0FBQzFCLG1EQUFJQSxFQUNSRyxPQUFPLENBQUNhLGFBQWFXLE9BQU87SUFDakMsTUFBTUMsY0FBY0gsaUJBQWlCSSxRQUFRO0lBRTdDLCtDQUErQztJQUMvQyxPQUFPO1FBQ0hsQjtRQUNBaUI7UUFDQSxHQUFHWixhQUFhQyxJQUFJO0lBQ3hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2xpYi9wb3N0cy50c3g/MmIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gJ3JlbWFyayc7XG5pbXBvcnQgaHRtbCBmcm9tICdyZW1hcmstaHRtbCc7XG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwb3N0cycpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0ZWRQb3N0c0RhdGEoKSB7XG4gICAgLy8gR2V0IGZpbGUgbmFtZXMgdW5kZXIgL3Bvc3RzXG4gICAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xuXG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZmlsZU5hbWVzLm1hcCgoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIFwiLm1kXCIgZnJvbSBmaWxlIG5hbWUgdG8gZ2V0IGlkXG4gICAgICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpO1xuXG4gICAgICAgIC8vIFJlYWQgbWFya2Rvd24gZmlsZSBhcyBzdHJpbmdcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKTtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xuXG4gICAgICAgIC8vIFVzZSBncmF5LW1hdHRlciB0byBwYXJzZSB0aGUgcG9zdCBtZXRhZGF0YSBzZWN0aW9uXG4gICAgICAgIGNvbnN0IG1hdHRlclJlc3VsdCA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xuXG4gICAgICAgIC8vIENvbWJpbmUgdGhlIGRhdGEgd2l0aCB0aGUgaWRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgLi4ubWF0dGVyUmVzdWx0LmRhdGEsXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gU29ydCBwb3N0cyBieSBkYXRlXG4gICAgcmV0dXJuIGFsbFBvc3RzRGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICBpZiAoYS5kYXRlIDwgYi5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0SWRzKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcblxuICAgIC8vIFJldHVybnMgYW4gYXJyYXkgdGhhdCBsb29rcyBsaWtlIHRoaXM6XG4gICAgLy8gW1xuICAgIC8vICAge1xuICAgIC8vICAgICBwYXJhbXM6IHtcbiAgICAvLyAgICAgICBpZDogJ3NzZy1zc3InXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHBhcmFtczoge1xuICAgIC8vICAgICAgIGlkOiAncHJlLXJlbmRlcmluZydcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgICByZXR1cm4gZmlsZU5hbWVzLm1hcCgoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWQpIHtcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7aWR9Lm1kYCk7XG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xuXG4gICAgLy8gVXNlIGdyYXktbWF0dGVyIHRvIHBhcnNlIHRoZSBwb3N0IG1ldGFkYXRhIHNlY3Rpb25cbiAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICAgIC8vIFVzZSByZW1hcmsgdG8gY29udmVydCBtYXJrZG93biBpbnRvIEhUTUwgc3RyaW5nXG4gICAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpXG4gICAgICAgIC51c2UoaHRtbClcbiAgICAgICAgLnByb2Nlc3MobWF0dGVyUmVzdWx0LmNvbnRlbnQpO1xuICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuXG4gICAgLy8gQ29tYmluZSB0aGUgZGF0YSB3aXRoIHRoZSBpZCBhbmQgY29udGVudEh0bWxcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgY29udGVudEh0bWwsXG4gICAgICAgIC4uLm1hdHRlclJlc3VsdC5kYXRhLFxuICAgIH07XG59Il0sIm5hbWVzIjpbImZzIiwicGF0aCIsIm1hdHRlciIsInJlbWFyayIsImh0bWwiLCJwb3N0c0RpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0U29ydGVkUG9zdHNEYXRhIiwiZmlsZU5hbWVzIiwicmVhZGRpclN5bmMiLCJhbGxQb3N0c0RhdGEiLCJtYXAiLCJmaWxlTmFtZSIsImlkIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwibWF0dGVyUmVzdWx0IiwiZGF0YSIsInNvcnQiLCJhIiwiYiIsImRhdGUiLCJnZXRBbGxQb3N0SWRzIiwicGFyYW1zIiwiZ2V0UG9zdERhdGEiLCJwcm9jZXNzZWRDb250ZW50IiwidXNlIiwiY29udGVudCIsImNvbnRlbnRIdG1sIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/posts.tsx\n");

/***/ }),

/***/ "./src/components/Date.tsx":
/*!*********************************!*\
  !*** ./src/components/Date.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Date)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Date({ dateString  }) {\n    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n        dateTime: dateString,\n        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, \"LLLL d, yyyy\")\n    }, void 0, false, {\n        fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/components/Date.tsx\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFFN0IsU0FBU0UsS0FBSyxFQUFFQyxXQUFVLEVBQUUsRUFBRTtJQUN6QyxNQUFNQyxPQUFPSixrREFBUUEsQ0FBQ0c7SUFDdEIscUJBQU8sOERBQUNFO1FBQUtDLFVBQVVIO2tCQUFhRixnREFBTUEsQ0FBQ0csTUFBTTs7Ozs7O0FBQ3JELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29tcG9uZW50cy9EYXRlLnRzeD9kNzY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGUoeyBkYXRlU3RyaW5nIH0pIHtcbiAgICBjb25zdCBkYXRlID0gcGFyc2VJU08oZGF0ZVN0cmluZyk7XG4gICAgcmV0dXJuIDx0aW1lIGRhdGVUaW1lPXtkYXRlU3RyaW5nfT57Zm9ybWF0KGRhdGUsICdMTExMIGQsIHl5eXknKX08L3RpbWU+O1xufSJdLCJuYW1lcyI6WyJwYXJzZUlTTyIsImZvcm1hdCIsIkRhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInRpbWUiLCJkYXRlVGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Date.tsx\n");

/***/ }),

/***/ "./src/pages/posts/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/posts/[id].tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Date */ \"./src/components/Date.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/posts */ \"./lib/posts.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Post({ postData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Date__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                dateString: postData.date\n            }, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthonylabadie/Anthony/Project/nextJS/src/pages/posts/[id].tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticPaths() {\n    const paths = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__.getAllPostIds)();\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    // Add the \"await\" keyword like this:\n    const postData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__.getPostData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNxQztBQUNSO0FBQ21DO0FBRWpELFNBQVNJLEtBQUssRUFBRUMsU0FBUSxFQUFFLEVBQUU7SUFDekMscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0wsa0RBQUlBOzBCQUNILDRFQUFDTTs4QkFBT0YsU0FBU0UsS0FBSzs7Ozs7Ozs7Ozs7WUFFdkJGLFNBQVNFLEtBQUs7MEJBQ2YsOERBQUNDOzs7OztZQUNBSCxTQUFTSSxFQUFFOzBCQUNaLDhEQUFDRDs7Ozs7MEJBQ0QsOERBQUNSLHdEQUFJQTtnQkFBQ1UsWUFBWUwsU0FBU00sSUFBSTs7Ozs7OzBCQUMvQiw4REFBQ0w7Z0JBQUlNLHlCQUF5QjtvQkFBRUMsUUFBUVIsU0FBU1MsV0FBVztnQkFBQzs7Ozs7Ozs7Ozs7O0FBR25FLENBQUM7QUFDTSxlQUFlQyxpQkFBaUI7SUFDckMsTUFBTUMsUUFBUWQseURBQWFBO0lBQzNCLE9BQU87UUFDTGM7UUFDQUMsVUFBVSxLQUFLO0lBQ2pCO0FBQ0YsQ0FBQztBQUNNLGVBQWVDLGVBQWUsRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDL0MscUNBQXFDO0lBQ3JDLE1BQU1kLFdBQVcsTUFBTUYsdURBQVdBLENBQUNnQixPQUFPVixFQUFFO0lBRTVDLE9BQU87UUFDTFcsT0FBTztZQUNMZjtRQUNGO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL3Bvc3RzL1tpZF0udHN4PzgyMTgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRGF0ZSBmcm9tICdAL2NvbXBvbmVudHMvRGF0ZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi8uLi9saWIvcG9zdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdERhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge3Bvc3REYXRhLnRpdGxlfVxuICAgICAgPGJyIC8+XG4gICAgICB7cG9zdERhdGEuaWR9XG4gICAgICA8YnIgLz5cbiAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3REYXRhLmRhdGV9IC8+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0SWRzKCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gQWRkIHRoZSBcImF3YWl0XCIga2V5d29yZCBsaWtlIHRoaXM6XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufSJdLCJuYW1lcyI6WyJEYXRlIiwiSGVhZCIsImdldEFsbFBvc3RJZHMiLCJnZXRQb3N0RGF0YSIsIlBvc3QiLCJwb3N0RGF0YSIsImRpdiIsInRpdGxlIiwiYnIiLCJpZCIsImRhdGVTdHJpbmciLCJkYXRlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50SHRtbCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].tsx\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();