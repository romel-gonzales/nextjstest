"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\app_temp\\nextjstest\\pages\\index.js";



var __N_SSP = true;
function Home(data) {
  var _this = this;

  //console.log(data.products)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      spacing: 3,
      children: data.products.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          item: true,
          md: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActionArea, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
                component: "img",
                image: product.imagen,
                title: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  children: product.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActions, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                children: ["$", product.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 7
          }, _this)
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTgxZWM2NjM2NTRmODI2MDEwOGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7OztBQUVlLFNBQVNTLElBQVQsQ0FBY0MsSUFBZCxFQUFtQjtBQUFBOztBQUNqQztBQUNBLHNCQUFPLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxlQUVOLDhEQUFDLG1EQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLGdCQUVFQSxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxPQUFPO0FBQUEsNEJBQ3hCLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDQyw4REFBQyxtREFBRDtBQUFBLG9DQUNDLDhEQUFDLDZEQUFEO0FBQUEsc0NBQ0MsOERBQUMsd0RBQUQ7QUFDQyx5QkFBUyxFQUFDLEtBRFg7QUFFQyxxQkFBSyxFQUFFQSxPQUFPLENBQUNDLE1BRmhCO0FBR0MscUJBQUssRUFBRUQsT0FBTyxDQUFDRTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBT0MsOERBQUMsMERBQUQ7QUFBQSx1Q0FDQyw4REFBQyx5REFBRDtBQUFBLDRCQUFhRixPQUFPLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQVlDLDhEQUFDLDBEQUFEO0FBQUEscUNBQ0MsOERBQUMseURBQUQ7QUFBQSxnQ0FBY0YsT0FBTyxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELFdBQXVCSCxPQUFPLENBQUNJLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBekI7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUE2QkE7S0EvQnVCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7R3JpZCwgQ2FyZCwgQ2FyZEFjdGlvbkFyZWEsIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQsVHlwb2dyYXBoeSwgQ2FyZEFjdGlvbnMsIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKGRhdGEpe1xyXG5cdC8vY29uc29sZS5sb2coZGF0YS5wcm9kdWN0cylcclxuXHRyZXR1cm4gPExheW91dD5cclxuXHRcdDxoMT5Qcm9kdWN0czwvaDE+XHJcblx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRkYXRhLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezR9IGtleT17cHJvZHVjdC5pZH0+XHJcblx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkQWN0aW9uQXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkTWVkaWFcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PVwiaW1nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2U9e3Byb2R1Y3QuaW1hZ2VufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQ2FyZE1lZGlhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT57cHJvZHVjdC50aXRsZX08L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZEFjdGlvbkFyZWE+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+JHtwcm9kdWN0LnByaWNlfTwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdCkpXHJcblx0XHRcdH1cclxuXHRcdDwvR3JpZD5cclxuXHRcdFxyXG5cdDwvTGF5b3V0PlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cycpXHJcblx0Y29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHRjb25zdCBkYXRhID0gcHJvZHVjdHMubWFwKHggPT4geFtcImltYWdlblwiXT0gJ2h0dHBzOi8vY2RuLmxvcmVtLnNwYWNlL2ltYWdlcy93YXRjaC8uY2FjaGUvNjQweDQ4MC9kYW5pZWwta29ycGFpLW9PbFBSLUZ3ZDdBLXVuc3BsYXNoLmpwZycpXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGRhdGFcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkdyaWQiLCJDYXJkIiwiQ2FyZEFjdGlvbkFyZWEiLCJDYXJkTWVkaWEiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJDYXJkQWN0aW9ucyIsIkJ1dHRvbiIsIkhvbWUiLCJkYXRhIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaW1hZ2VuIiwidGl0bGUiLCJwcmljZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==