"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n\\r\\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\r\\n\\r\\n:root{\\r\\n  --icons-color: #4c5773;\\r\\n  --icons-light-color: #4c577341;\\r\\n  --icons-bg-color: #e2e6e9;\\r\\n  --shadow-dark-color: #d3dae7;\\r\\n  --bg-shadow-dark-color: #d3dae745;\\r\\n  --shadow-light-color: #fff;\\r\\n  --main-bg-color: #ecf0f3;\\r\\n\\r\\n  --box-shadow: 1rem 1rem 1rem var(--shadow-dark-color),\\r\\n  -1rem -1rem 1rem var(--shadow-light-color);\\r\\n\\r\\n  --box-shadow-2: 0rem 0rem 0rem var(--shadow-dark-color),\\r\\n  -.3rem -.3rem 1rem var(--shadow-dark-color)\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    --background-start-rgb: 0, 0, 0;\\r\\n    --background-end-rgb: 0, 0, 0;\\r\\n\\r\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\r\\n    --secondary-glow: linear-gradient(\\r\\n      to bottom right,\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0.3)\\r\\n    );\\r\\n\\r\\n    --tile-start-rgb: 2, 13, 46;\\r\\n    --tile-end-rgb: 2, 5, 19;\\r\\n    --tile-border: conic-gradient(\\r\\n      #ffffff80,\\r\\n      #ffffff40,\\r\\n      #ffffff30,\\r\\n      #ffffff20,\\r\\n      #ffffff10,\\r\\n      #ffffff10,\\r\\n      #ffffff80\\r\\n    );\\r\\n\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  -webkit-tap-highlight-color: none;\\r\\n  /* padding: 0;\\r\\n  margin: 0; */\\r\\n\\r\\n  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\r\\n\\r\\n  :root{\\r\\n    --icons-color: #4c5773;\\r\\n    --icons-light-color: #4c577341;\\r\\n    --icons-bg-color: #e2e6e9;\\r\\n    --shadow-dark-color: #d3dae7;\\r\\n    --shadow-light-color: #fff;\\r\\n    --main-bg-color: #ecf0f3;\\r\\n  \\r\\n    --box-shadow: 1rem 1rem 1rem var(--shadow-dark-color),\\r\\n    -1rem -1rem 1rem var(--shadow-light-color);\\r\\n  \\r\\n    --box-shadow-2: 0rem 0rem 0rem var(--shadow-dark-color),\\r\\n    -.3rem -.3rem 1rem var(--shadow-dark-color)\\r\\n  \\r\\n  }\\r\\n  \\r\\n  html,\\r\\n  body {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n    font-size: 14px;\\r\\n    background-color: var(--main-bg-color);\\r\\n    color: var(--icons-color);\\r\\n\\r\\n    \\r\\n    max-width: 100%;\\r\\n    overflow-x: hidden;\\r\\n  }\\r\\n  \\r\\n  a {\\r\\n    color: inherit;\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  * {\\r\\n    box-sizing: border-box;\\r\\n    -webkit-tap-highlight-color: none;\\r\\n  }\\r\\n  \\r\\n  ::selection{\\r\\n    color: var(--shadow-dark-color);\\r\\n    background: var(--icons-color);\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar{\\r\\n    width: 1rem;\\r\\n    border: 1px solid var(--main-bg-color);\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar-track{\\r\\n    border-radius: 0;\\r\\n    background-color: var(--main-bg-color);\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar-thumb{\\r\\n    border-radius: 2rem;\\r\\n    background:  var(--icons-color);\\r\\n    width: .5rem;\\r\\n  }\\r\\n  @media (prefers-color-scheme: dark) {\\r\\n    html {\\r\\n      color-scheme: dark;\\r\\n    }\\r\\n    body {\\r\\n      color: white;\\r\\n      background: black;\\r\\n    }\\r\\n  }\\r\\n}}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\";;AAEA,kMAAkM;;AAElM;EACE,sBAAsB;EACtB,8BAA8B;EAC9B,yBAAyB;EACzB,4BAA4B;EAC5B,iCAAiC;EACjC,0BAA0B;EAC1B,wBAAwB;;EAExB;4CAC0C;;EAE1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAiHD\",\"sourcesContent\":[\"\\r\\n\\r\\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\r\\n\\r\\n:root{\\r\\n  --icons-color: #4c5773;\\r\\n  --icons-light-color: #4c577341;\\r\\n  --icons-bg-color: #e2e6e9;\\r\\n  --shadow-dark-color: #d3dae7;\\r\\n  --bg-shadow-dark-color: #d3dae745;\\r\\n  --shadow-light-color: #fff;\\r\\n  --main-bg-color: #ecf0f3;\\r\\n\\r\\n  --box-shadow: 1rem 1rem 1rem var(--shadow-dark-color),\\r\\n  -1rem -1rem 1rem var(--shadow-light-color);\\r\\n\\r\\n  --box-shadow-2: 0rem 0rem 0rem var(--shadow-dark-color),\\r\\n  -.3rem -.3rem 1rem var(--shadow-dark-color)\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    --background-start-rgb: 0, 0, 0;\\r\\n    --background-end-rgb: 0, 0, 0;\\r\\n\\r\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\r\\n    --secondary-glow: linear-gradient(\\r\\n      to bottom right,\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0),\\r\\n      rgba(1, 65, 255, 0.3)\\r\\n    );\\r\\n\\r\\n    --tile-start-rgb: 2, 13, 46;\\r\\n    --tile-end-rgb: 2, 5, 19;\\r\\n    --tile-border: conic-gradient(\\r\\n      #ffffff80,\\r\\n      #ffffff40,\\r\\n      #ffffff30,\\r\\n      #ffffff20,\\r\\n      #ffffff10,\\r\\n      #ffffff10,\\r\\n      #ffffff80\\r\\n    );\\r\\n\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  -webkit-tap-highlight-color: none;\\r\\n  /* padding: 0;\\r\\n  margin: 0; */\\r\\n\\r\\n  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\r\\n\\r\\n  :root{\\r\\n    --icons-color: #4c5773;\\r\\n    --icons-light-color: #4c577341;\\r\\n    --icons-bg-color: #e2e6e9;\\r\\n    --shadow-dark-color: #d3dae7;\\r\\n    --shadow-light-color: #fff;\\r\\n    --main-bg-color: #ecf0f3;\\r\\n  \\r\\n    --box-shadow: 1rem 1rem 1rem var(--shadow-dark-color),\\r\\n    -1rem -1rem 1rem var(--shadow-light-color);\\r\\n  \\r\\n    --box-shadow-2: 0rem 0rem 0rem var(--shadow-dark-color),\\r\\n    -.3rem -.3rem 1rem var(--shadow-dark-color)\\r\\n  \\r\\n  }\\r\\n  \\r\\n  html,\\r\\n  body {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n    font-size: 14px;\\r\\n    background-color: var(--main-bg-color);\\r\\n    color: var(--icons-color);\\r\\n\\r\\n    \\r\\n    max-width: 100%;\\r\\n    overflow-x: hidden;\\r\\n  }\\r\\n  \\r\\n  a {\\r\\n    color: inherit;\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  * {\\r\\n    box-sizing: border-box;\\r\\n    -webkit-tap-highlight-color: none;\\r\\n  }\\r\\n  \\r\\n  ::selection{\\r\\n    color: var(--shadow-dark-color);\\r\\n    background: var(--icons-color);\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar{\\r\\n    width: 1rem;\\r\\n    border: 1px solid var(--main-bg-color);\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar-track{\\r\\n    border-radius: 0;\\r\\n    background-color: var(--main-bg-color);\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar-thumb{\\r\\n    border-radius: 2rem;\\r\\n    background:  var(--icons-color);\\r\\n    width: .5rem;\\r\\n  }\\r\\n  @media (prefers-color-scheme: dark) {\\r\\n    html {\\r\\n      color-scheme: dark;\\r\\n    }\\r\\n    body {\\r\\n      color: white;\\r\\n      background: black;\\r\\n    }\\r\\n  }\\r\\n}}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdJQUFnSSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixjQUFjLDZCQUE2QixxQ0FBcUMsZ0NBQWdDLG1DQUFtQyx3Q0FBd0MsaUNBQWlDLCtCQUErQixpSEFBaUgsZ0tBQWdLLGFBQWEsd0NBQXdDLHdDQUF3QyxzQ0FBc0Msd0ZBQXdGLHlLQUF5Syx3Q0FBd0MsaUNBQWlDLDJMQUEyTCxzQ0FBc0MsNENBQTRDLGtDQUFrQyx5Q0FBeUMsT0FBTyxLQUFLLFdBQVcsNkJBQTZCLHdDQUF3QyxvQkFBb0IsaUJBQWlCLDBGQUEwRixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixnQkFBZ0IsK0JBQStCLHVDQUF1QyxrQ0FBa0MscUNBQXFDLG1DQUFtQyxpQ0FBaUMsdUhBQXVILHNJQUFzSSw2QkFBNkIsbUJBQW1CLGtCQUFrQiwyQ0FBMkMsd0JBQXdCLCtDQUErQyxrQ0FBa0Msb0NBQW9DLDJCQUEyQixPQUFPLGVBQWUsdUJBQXVCLDhCQUE4QixPQUFPLGVBQWUsK0JBQStCLDBDQUEwQyxPQUFPLHdCQUF3Qix3Q0FBd0MsdUNBQXVDLE9BQU8sZ0NBQWdDLG9CQUFvQiwrQ0FBK0MsT0FBTyxzQ0FBc0MseUJBQXlCLCtDQUErQyxPQUFPLHNDQUFzQyw0QkFBNEIsd0NBQXdDLHFCQUFxQixPQUFPLDJDQUEyQyxjQUFjLDZCQUE2QixTQUFTLGNBQWMsdUJBQXVCLDRCQUE0QixTQUFTLE9BQU8sTUFBTSxPQUFPLGdGQUFnRixhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFFBQVEsc0hBQXNILGdIQUFnSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixjQUFjLDZCQUE2QixxQ0FBcUMsZ0NBQWdDLG1DQUFtQyx3Q0FBd0MsaUNBQWlDLCtCQUErQixpSEFBaUgsZ0tBQWdLLGFBQWEsd0NBQXdDLHdDQUF3QyxzQ0FBc0Msd0ZBQXdGLHlLQUF5Syx3Q0FBd0MsaUNBQWlDLDJMQUEyTCxzQ0FBc0MsNENBQTRDLGtDQUFrQyx5Q0FBeUMsT0FBTyxLQUFLLFdBQVcsNkJBQTZCLHdDQUF3QyxvQkFBb0IsaUJBQWlCLDBGQUEwRixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixnQkFBZ0IsK0JBQStCLHVDQUF1QyxrQ0FBa0MscUNBQXFDLG1DQUFtQyxpQ0FBaUMsdUhBQXVILHNJQUFzSSw2QkFBNkIsbUJBQW1CLGtCQUFrQiwyQ0FBMkMsd0JBQXdCLCtDQUErQyxrQ0FBa0Msb0NBQW9DLDJCQUEyQixPQUFPLGVBQWUsdUJBQXVCLDhCQUE4QixPQUFPLGVBQWUsK0JBQStCLDBDQUEwQyxPQUFPLHdCQUF3Qix3Q0FBd0MsdUNBQXVDLE9BQU8sZ0NBQWdDLG9CQUFvQiwrQ0FBK0MsT0FBTyxzQ0FBc0MseUJBQXlCLCtDQUErQyxPQUFPLHNDQUFzQyw0QkFBNEIsd0NBQXdDLHFCQUFxQixPQUFPLDJDQUEyQyxjQUFjLDZCQUE2QixTQUFTLGNBQWMsdUJBQXVCLDRCQUE0QixTQUFTLE9BQU8sTUFBTSxtQkFBbUI7QUFDbHBPO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2RiOTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgLS1pY29ucy1jb2xvcjogIzRjNTc3MztcXHJcXG4gIC0taWNvbnMtbGlnaHQtY29sb3I6ICM0YzU3NzM0MTtcXHJcXG4gIC0taWNvbnMtYmctY29sb3I6ICNlMmU2ZTk7XFxyXFxuICAtLXNoYWRvdy1kYXJrLWNvbG9yOiAjZDNkYWU3O1xcclxcbiAgLS1iZy1zaGFkb3ctZGFyay1jb2xvcjogI2QzZGFlNzQ1O1xcclxcbiAgLS1zaGFkb3ctbGlnaHQtY29sb3I6ICNmZmY7XFxyXFxuICAtLW1haW4tYmctY29sb3I6ICNlY2YwZjM7XFxyXFxuXFxyXFxuICAtLWJveC1zaGFkb3c6IDFyZW0gMXJlbSAxcmVtIHZhcigtLXNoYWRvdy1kYXJrLWNvbG9yKSxcXHJcXG4gIC0xcmVtIC0xcmVtIDFyZW0gdmFyKC0tc2hhZG93LWxpZ2h0LWNvbG9yKTtcXHJcXG5cXHJcXG4gIC0tYm94LXNoYWRvdy0yOiAwcmVtIDByZW0gMHJlbSB2YXIoLS1zaGFkb3ctZGFyay1jb2xvciksXFxyXFxuICAtLjNyZW0gLS4zcmVtIDFyZW0gdmFyKC0tc2hhZG93LWRhcmstY29sb3IpXFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgOnJvb3Qge1xcclxcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcclxcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcclxcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXHJcXG5cXHJcXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcclxcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcclxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxyXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXHJcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcclxcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxyXFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcclxcbiAgICAgICNmZmZmZmY4MCxcXHJcXG4gICAgICAjZmZmZmZmNDAsXFxyXFxuICAgICAgI2ZmZmZmZjMwLFxcclxcbiAgICAgICNmZmZmZmYyMCxcXHJcXG4gICAgICAjZmZmZmZmMTAsXFxyXFxuICAgICAgI2ZmZmZmZjEwLFxcclxcbiAgICAgICNmZmZmZmY4MFxcclxcbiAgICApO1xcclxcblxcclxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcclxcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXHJcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXHJcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZTtcXHJcXG4gIC8qIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7ICovXFxyXFxuXFxyXFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4gIDpyb290e1xcclxcbiAgICAtLWljb25zLWNvbG9yOiAjNGM1NzczO1xcclxcbiAgICAtLWljb25zLWxpZ2h0LWNvbG9yOiAjNGM1NzczNDE7XFxyXFxuICAgIC0taWNvbnMtYmctY29sb3I6ICNlMmU2ZTk7XFxyXFxuICAgIC0tc2hhZG93LWRhcmstY29sb3I6ICNkM2RhZTc7XFxyXFxuICAgIC0tc2hhZG93LWxpZ2h0LWNvbG9yOiAjZmZmO1xcclxcbiAgICAtLW1haW4tYmctY29sb3I6ICNlY2YwZjM7XFxyXFxuICBcXHJcXG4gICAgLS1ib3gtc2hhZG93OiAxcmVtIDFyZW0gMXJlbSB2YXIoLS1zaGFkb3ctZGFyay1jb2xvciksXFxyXFxuICAgIC0xcmVtIC0xcmVtIDFyZW0gdmFyKC0tc2hhZG93LWxpZ2h0LWNvbG9yKTtcXHJcXG4gIFxcclxcbiAgICAtLWJveC1zaGFkb3ctMjogMHJlbSAwcmVtIDByZW0gdmFyKC0tc2hhZG93LWRhcmstY29sb3IpLFxcclxcbiAgICAtLjNyZW0gLS4zcmVtIDFyZW0gdmFyKC0tc2hhZG93LWRhcmstY29sb3IpXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaHRtbCxcXHJcXG4gIGJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICoge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6c2VsZWN0aW9ue1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2hhZG93LWRhcmstY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuICAgIHdpZHRoOiAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gICAgaHRtbCB7XFxyXFxuICAgICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbiAgICB9XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn19XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBLGtNQUFrTTs7QUFFbE07RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQix3QkFBd0I7O0VBRXhCOzRDQUMwQzs7RUFFMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUhEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgLS1pY29ucy1jb2xvcjogIzRjNTc3MztcXHJcXG4gIC0taWNvbnMtbGlnaHQtY29sb3I6ICM0YzU3NzM0MTtcXHJcXG4gIC0taWNvbnMtYmctY29sb3I6ICNlMmU2ZTk7XFxyXFxuICAtLXNoYWRvdy1kYXJrLWNvbG9yOiAjZDNkYWU3O1xcclxcbiAgLS1iZy1zaGFkb3ctZGFyay1jb2xvcjogI2QzZGFlNzQ1O1xcclxcbiAgLS1zaGFkb3ctbGlnaHQtY29sb3I6ICNmZmY7XFxyXFxuICAtLW1haW4tYmctY29sb3I6ICNlY2YwZjM7XFxyXFxuXFxyXFxuICAtLWJveC1zaGFkb3c6IDFyZW0gMXJlbSAxcmVtIHZhcigtLXNoYWRvdy1kYXJrLWNvbG9yKSxcXHJcXG4gIC0xcmVtIC0xcmVtIDFyZW0gdmFyKC0tc2hhZG93LWxpZ2h0LWNvbG9yKTtcXHJcXG5cXHJcXG4gIC0tYm94LXNoYWRvdy0yOiAwcmVtIDByZW0gMHJlbSB2YXIoLS1zaGFkb3ctZGFyay1jb2xvciksXFxyXFxuICAtLjNyZW0gLS4zcmVtIDFyZW0gdmFyKC0tc2hhZG93LWRhcmstY29sb3IpXFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgOnJvb3Qge1xcclxcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcclxcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcclxcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXHJcXG5cXHJcXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcclxcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcclxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxyXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXHJcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcclxcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxyXFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcclxcbiAgICAgICNmZmZmZmY4MCxcXHJcXG4gICAgICAjZmZmZmZmNDAsXFxyXFxuICAgICAgI2ZmZmZmZjMwLFxcclxcbiAgICAgICNmZmZmZmYyMCxcXHJcXG4gICAgICAjZmZmZmZmMTAsXFxyXFxuICAgICAgI2ZmZmZmZjEwLFxcclxcbiAgICAgICNmZmZmZmY4MFxcclxcbiAgICApO1xcclxcblxcclxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcclxcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXHJcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXHJcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZTtcXHJcXG4gIC8qIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7ICovXFxyXFxuXFxyXFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4gIDpyb290e1xcclxcbiAgICAtLWljb25zLWNvbG9yOiAjNGM1NzczO1xcclxcbiAgICAtLWljb25zLWxpZ2h0LWNvbG9yOiAjNGM1NzczNDE7XFxyXFxuICAgIC0taWNvbnMtYmctY29sb3I6ICNlMmU2ZTk7XFxyXFxuICAgIC0tc2hhZG93LWRhcmstY29sb3I6ICNkM2RhZTc7XFxyXFxuICAgIC0tc2hhZG93LWxpZ2h0LWNvbG9yOiAjZmZmO1xcclxcbiAgICAtLW1haW4tYmctY29sb3I6ICNlY2YwZjM7XFxyXFxuICBcXHJcXG4gICAgLS1ib3gtc2hhZG93OiAxcmVtIDFyZW0gMXJlbSB2YXIoLS1zaGFkb3ctZGFyay1jb2xvciksXFxyXFxuICAgIC0xcmVtIC0xcmVtIDFyZW0gdmFyKC0tc2hhZG93LWxpZ2h0LWNvbG9yKTtcXHJcXG4gIFxcclxcbiAgICAtLWJveC1zaGFkb3ctMjogMHJlbSAwcmVtIDByZW0gdmFyKC0tc2hhZG93LWRhcmstY29sb3IpLFxcclxcbiAgICAtLjNyZW0gLS4zcmVtIDFyZW0gdmFyKC0tc2hhZG93LWRhcmstY29sb3IpXFxyXFxuICBcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaHRtbCxcXHJcXG4gIGJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICoge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6c2VsZWN0aW9ue1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2hhZG93LWRhcmstY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICB2YXIoLS1pY29ucy1jb2xvcik7XFxyXFxuICAgIHdpZHRoOiAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gICAgaHRtbCB7XFxyXFxuICAgICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbiAgICB9XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn19XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});