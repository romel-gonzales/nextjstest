"use strict";
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case "GET":
      const resp = await fetch('https://dummyjson.com/products');
      const data = await resp.json();
      return res.json(data);

    default:
      return res.send('No se proporciono un metodo!!');
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQWUsMENBQWdCQSxHQUFoQixFQUFxQkMsR0FBckIsRUFBeUI7QUFDcEMsUUFBTTtBQUFDQyxJQUFBQTtBQUFELE1BQVdGLEdBQWpCOztBQUVBLFVBQVFFLE1BQVI7QUFDSSxTQUFLLEtBQUw7QUFDSSxZQUFNQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGdDQUFELENBQXhCO0FBQ0EsWUFBTUMsSUFBSSxHQUFHLE1BQU1GLElBQUksQ0FBQ0csSUFBTCxFQUFuQjtBQUNBLGFBQU9MLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxJQUFULENBQVA7O0FBQ0o7QUFDSSxhQUFPSixHQUFHLENBQUNNLElBQUosQ0FBUywrQkFBVCxDQUFQO0FBTlI7QUFRSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpe1xyXG4gICAgY29uc3Qge21ldGhvZH0gPSByZXFcclxuICAgIFxyXG4gICAgc3dpdGNoIChtZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMnKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKCdObyBzZSBwcm9wb3JjaW9ubyB1biBtZXRvZG8hIScpXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc3AiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=