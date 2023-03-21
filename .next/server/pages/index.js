"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/styles */ "./utils/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\app_temp\\nextjstest\\components\\Layout.js";



function Layout({
  children
}) {
  const classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.AppBar, {
      position: "relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Toolbar, {
        className: classes.navbar,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          children: "AMAZONA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: classes.main,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: classes.footer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: "Copyright Amazona.com, Inc. o sus afiliados"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\app_temp\\nextjstest\\pages\\index.js";



function Home(data) {
  //console.log(data.products)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
      container: true,
      spacing: 5,
      children: data.products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        md: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActionArea, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {
              component: "img",
              image: product.thumbnail,
              title: product.title,
              height: "120"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
              children: ["$", product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
              size: "small",
              color: "primary",
              variant: "contained",
              children: "Agregar a carrito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 7
        }, this)
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }, this))
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
async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
  return {
    props: {
      products: products.products
    }
  };
}

/***/ }),

/***/ "./utils/styles.js":
/*!*************************!*\
  !*** ./utils/styles.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  navbar: {
    backgroundColor: '#232f3e',
    '& a': {
      color: '#ffffff',
      marginLeft: 10
    }
  },
  footer: {
    marginTop: 10,
    textAlign: 'center'
  },
  main: {
    minHeight: '80vh'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q05DLElBQUFBLEtBQUssRUFBRTtBQUNOWCxNQUFBQSxRQUFRLEVBQUVBLFFBQVEsQ0FBQ0E7QUFEYjtBQURELEdBQVA7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlDRDtBQUVBLE1BQU1oQixTQUFTLEdBQUc0Qiw2REFBVSxDQUFDO0FBQ3pCeEIsRUFBQUEsTUFBTSxFQUFFO0FBQ0p5QixJQUFBQSxlQUFlLEVBQUUsU0FEYjtBQUVKLFdBQVE7QUFDSkMsTUFBQUEsS0FBSyxFQUFFLFNBREg7QUFFSkMsTUFBQUEsVUFBVSxFQUFFO0FBRlI7QUFGSixHQURpQjtBQVF6QnpCLEVBQUFBLE1BQU0sRUFBRTtBQUNKMEIsSUFBQUEsU0FBUyxFQUFFLEVBRFA7QUFFSkMsSUFBQUEsU0FBUyxFQUFFO0FBRlAsR0FSaUI7QUFZekI1QixFQUFBQSxJQUFJLEVBQUU7QUFDRjZCLElBQUFBLFNBQVMsRUFBRTtBQURUO0FBWm1CLENBQUQsQ0FBNUI7QUFpQkEsaUVBQWVsQyxTQUFmOzs7Ozs7Ozs7O0FDcEJBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFRvb2xiYXIsIEFwcEJhciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4uL3V0aWxzL3N0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCAoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblx0ICA8QXBwQmFyIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuXHRcdDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeT5BTUFaT05BPC9UeXBvZ3JhcGh5PlxyXG5cdFx0PC9Ub29sYmFyPlxyXG5cdCAgPC9BcHBCYXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICA8aDM+Q29weXJpZ2h0IEFtYXpvbmEuY29tLCBJbmMuIG8gc3VzIGFmaWxpYWRvczwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iLCJcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7R3JpZCwgQ2FyZCwgQ2FyZEFjdGlvbkFyZWEsIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQsVHlwb2dyYXBoeSwgQ2FyZEFjdGlvbnMsIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKGRhdGEpe1xyXG5cdC8vY29uc29sZS5sb2coZGF0YS5wcm9kdWN0cylcclxuXHRyZXR1cm4gPExheW91dD5cclxuXHRcdDxoMT5Qcm9kdWN0czwvaDE+XHJcblx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRkYXRhLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezJ9IGtleT17cHJvZHVjdC5pZH0+XHJcblx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkQWN0aW9uQXJlYT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkTWVkaWFcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PVwiaW1nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2U9e3Byb2R1Y3QudGh1bWJuYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17cHJvZHVjdC50aXRsZX1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9IFwiMTIwXCJcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmRNZWRpYT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+e3Byb2R1Y3QudGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmRBY3Rpb25BcmVhPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PiR7cHJvZHVjdC5wcmljZX08L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5BZ3JlZ2FyIGEgY2Fycml0bzwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQpKVxyXG5cdFx0XHR9XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHRcclxuXHQ8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHMnKVxyXG5cdGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHByb2R1Y3RzOiBwcm9kdWN0cy5wcm9kdWN0c1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbmF2YmFyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIzMmYzZScsXHJcbiAgICAgICAgJyYgYScgOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSwgXHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiAnODB2aCdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiVG9vbGJhciIsIkFwcEJhciIsIlR5cG9ncmFwaHkiLCJ1c2VTdHlsZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJuYXZiYXIiLCJtYWluIiwiZm9vdGVyIiwiR3JpZCIsIkNhcmQiLCJDYXJkQWN0aW9uQXJlYSIsIkNhcmRNZWRpYSIsIkNhcmRDb250ZW50IiwiQ2FyZEFjdGlvbnMiLCJCdXR0b24iLCJIb21lIiwiZGF0YSIsInByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsInRodW1ibmFpbCIsInRpdGxlIiwicHJpY2UiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJtYWtlU3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==