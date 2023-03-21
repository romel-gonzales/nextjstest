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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\app_temp\\nextjstest\\pages\\index.js";




var __N_SSP = true;
function Home(data) {
  var _this = this;

  //console.log(data.products)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      spacing: 5,
      children: data.products.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          item: true,
          md: 2,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Card, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/product/".concat(product.id),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.CardActionArea, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {
                  component: "img",
                  image: product.thumbnail,
                  title: product.title,
                  height: "120"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 9
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    children: product.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 10
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 9
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 8
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.CardActions, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                children: ["$", product.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                size: "small",
                color: "primary",
                children: "Agregar a carrito"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, _this)
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2IyZDdjYmJlNGJlYzRmNTVlOGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTVSxJQUFULENBQWNDLElBQWQsRUFBbUI7QUFBQTs7QUFDakM7QUFDQSxzQkFBTyw4REFBQyx1REFBRDtBQUFBLDRCQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE0sZUFFTiw4REFBQyxtREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSxnQkFFRUEsSUFBSSxDQUFDQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsT0FBTztBQUFBLDRCQUN4Qiw4REFBQyxtREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0MsOERBQUMsbURBQUQ7QUFBQSxvQ0FDQyw4REFBQyxrREFBRDtBQUFVLGtCQUFJLHFCQUFjQSxPQUFPLENBQUNDLEVBQXRCLENBQWQ7QUFBQSxxQ0FDQSw4REFBQyw2REFBRDtBQUFBLHdDQUNDLDhEQUFDLHdEQUFEO0FBQ0MsMkJBQVMsRUFBQyxLQURYO0FBRUMsdUJBQUssRUFBRUQsT0FBTyxDQUFDRSxTQUZoQjtBQUdDLHVCQUFLLEVBQUVGLE9BQU8sQ0FBQ0csS0FIaEI7QUFJQyx3QkFBTSxFQUFFO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxlQVFDLDhEQUFDLDBEQUFEO0FBQUEseUNBQ0MsOERBQUMseURBQUQ7QUFBQSw4QkFBYUgsT0FBTyxDQUFDRztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBZUMsOERBQUMsMERBQUQ7QUFBQSxzQ0FDQyw4REFBQyx5REFBRDtBQUFBLGdDQUFjSCxPQUFPLENBQUNJLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDLDhEQUFDLHFEQUFEO0FBQVEsb0JBQUksRUFBQyxPQUFiO0FBQXFCLHFCQUFLLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELFdBQXVCSixPQUFPLENBQUNDLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBekI7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFnQ0E7S0FsQ3VCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQge0dyaWQsIENhcmQsIENhcmRBY3Rpb25BcmVhLCBDYXJkTWVkaWEsIENhcmRDb250ZW50LFR5cG9ncmFwaHksIENhcmRBY3Rpb25zLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShkYXRhKXtcclxuXHQvL2NvbnNvbGUubG9nKGRhdGEucHJvZHVjdHMpXHJcblx0cmV0dXJuIDxMYXlvdXQ+XHJcblx0XHQ8aDE+UHJvZHVjdHM8L2gxPlxyXG5cdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGF0YS5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXsyfSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdFx0XHQ8TmV4dExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZEFjdGlvbkFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZE1lZGlhXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD1cImltZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGltYWdlPXtwcm9kdWN0LnRodW1ibmFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Byb2R1Y3QudGl0bGV9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PSBcIjEyMFwiXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkTWVkaWE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5Pntwcm9kdWN0LnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkQWN0aW9uQXJlYT5cclxuXHRcdFx0XHRcdFx0XHQ8L05leHRMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PiR7cHJvZHVjdC5wcmljZX08L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPkFncmVnYXIgYSBjYXJyaXRvPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdCkpXHJcblx0XHRcdH1cclxuXHRcdDwvR3JpZD5cclxuXHRcdFxyXG5cdDwvTGF5b3V0PlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cycpXHJcblx0Y29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cHJvZHVjdHM6IHByb2R1Y3RzLnByb2R1Y3RzXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJHcmlkIiwiQ2FyZCIsIkNhcmRBY3Rpb25BcmVhIiwiQ2FyZE1lZGlhIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiQ2FyZEFjdGlvbnMiLCJCdXR0b24iLCJOZXh0TGluayIsIkhvbWUiLCJkYXRhIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==