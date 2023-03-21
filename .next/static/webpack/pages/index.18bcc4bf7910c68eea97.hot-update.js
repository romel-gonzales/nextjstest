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
            sx: {
              maxWidth: 80
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActionArea, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
                component: "img",
                image: product.imagen,
                title: product.title,
                height: "50"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  children: product.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActions, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                children: ["$", product.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMThiY2M0YmY3OTEwYzY4ZWVhOTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7OztBQUVlLFNBQVNTLElBQVQsQ0FBY0MsSUFBZCxFQUFtQjtBQUFBOztBQUNqQztBQUNBLHNCQUFPLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxlQUVOLDhEQUFDLG1EQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLGdCQUVFQSxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxPQUFPO0FBQUEsNEJBQ3hCLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBQSxpQ0FDQyw4REFBQyxtREFBRDtBQUNDLGNBQUUsRUFBRTtBQUNIQyxjQUFBQSxRQUFRLEVBQUU7QUFEUCxhQURMO0FBQUEsb0NBS0MsOERBQUMsNkRBQUQ7QUFBQSxzQ0FDQyw4REFBQyx3REFBRDtBQUNDLHlCQUFTLEVBQUMsS0FEWDtBQUVDLHFCQUFLLEVBQUVELE9BQU8sQ0FBQ0UsTUFGaEI7QUFHQyxxQkFBSyxFQUFFRixPQUFPLENBQUNHLEtBSGhCO0FBSUMsc0JBQU0sRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFRQyw4REFBQywwREFBRDtBQUFBLHVDQUNDLDhEQUFDLHlEQUFEO0FBQUEsNEJBQWFILE9BQU8sQ0FBQ0c7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxELGVBaUJDLDhEQUFDLDBEQUFEO0FBQUEscUNBQ0MsOERBQUMseURBQUQ7QUFBQSxnQ0FBY0gsT0FBTyxDQUFDSSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxXQUF1QkosT0FBTyxDQUFDSyxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR3QjtBQUFBLE9BQXpCO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBa0NBO0tBcEN1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQge0dyaWQsIENhcmQsIENhcmRBY3Rpb25BcmVhLCBDYXJkTWVkaWEsIENhcmRDb250ZW50LFR5cG9ncmFwaHksIENhcmRBY3Rpb25zLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShkYXRhKXtcclxuXHQvL2NvbnNvbGUubG9nKGRhdGEucHJvZHVjdHMpXHJcblx0cmV0dXJuIDxMYXlvdXQ+XHJcblx0XHQ8aDE+UHJvZHVjdHM8L2gxPlxyXG5cdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGF0YS5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs0fSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdFx0XHRcdHN4PXt7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogODBcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmRNZWRpYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9XCJpbWdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWFnZT17cHJvZHVjdC5pbWFnZW59XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtwcm9kdWN0LnRpdGxlfVx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCI1MFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmRNZWRpYT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+e3Byb2R1Y3QudGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PiR7cHJvZHVjdC5wcmljZX08L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQpKVxyXG5cdFx0XHR9XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHRcclxuXHQ8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHMnKVxyXG5cdGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblx0Y29uc3QgZGF0YSA9IHByb2R1Y3RzLm1hcCh4ID0+IHhbXCJpbWFnZW5cIl09ICdodHRwczovL2Nkbi5sb3JlbS5zcGFjZS9pbWFnZXMvd2F0Y2gvLmNhY2hlLzY0MHg0ODAvZGFuaWVsLWtvcnBhaS1vT2xQUi1Gd2Q3QS11bnNwbGFzaC5qcGcnKVxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRwcm9kdWN0c1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiR3JpZCIsIkNhcmQiLCJDYXJkQWN0aW9uQXJlYSIsIkNhcmRNZWRpYSIsIkNhcmRDb250ZW50IiwiVHlwb2dyYXBoeSIsIkNhcmRBY3Rpb25zIiwiQnV0dG9uIiwiSG9tZSIsImRhdGEiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJtYXhXaWR0aCIsImltYWdlbiIsInRpdGxlIiwicHJpY2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=