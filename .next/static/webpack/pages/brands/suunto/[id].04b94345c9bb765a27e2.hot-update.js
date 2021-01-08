webpackHotUpdate_N_E("pages/brands/suunto/[id]",{

/***/ "./src/components/ui/header.jsx":
/*!**************************************!*\
  !*** ./src/components/ui/header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrimarySearchAppBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");

var _jsxFileName = "C:\\Users\\max\\WebstormProjects\\empyrean-site\\src\\components\\ui\\header.jsx";






function PrimarySearchAppBar() {
  var _s = $RefreshSig$();

  function ElevationScroll(props) {
    _s();

    var children = props.children,
        window = props.window; // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.

    var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"])({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

  _s(ElevationScroll, "EC2GbbZl9x3XKoXLVx1H89cOBi0=", false, function () {
    return [_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"]];
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/images/Empyrean-logo.svg",
        alt: "Empyrean"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }, this);
}
_c = PrimarySearchAppBar;

var _c;

$RefreshReg$(_c, "PrimarySearchAppBar");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvaGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJQcmltYXJ5U2VhcmNoQXBwQmFyIiwiRWxldmF0aW9uU2Nyb2xsIiwicHJvcHMiLCJjaGlsZHJlbiIsIndpbmRvdyIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImVsZXZhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFFNUMsV0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFBQSxRQUN0QkMsUUFEc0IsR0FDREQsS0FEQyxDQUN0QkMsUUFEc0I7QUFBQSxRQUNaQyxNQURZLEdBQ0RGLEtBREMsQ0FDWkUsTUFEWSxFQUU5QjtBQUNBO0FBQ0E7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxrRkFBZ0IsQ0FBQztBQUMvQkMsdUJBQWlCLEVBQUUsSUFEWTtBQUUvQkMsZUFBUyxFQUFFLENBRm9CO0FBRy9CQyxZQUFNLEVBQUVMLE1BQU0sR0FBR0EsTUFBTSxFQUFULEdBQWNNO0FBSEcsS0FBRCxDQUFoQztBQU1BLHdCQUFPQyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CVCxRQUFuQixFQUE2QjtBQUNsQ1UsZUFBUyxFQUFFUixPQUFPLEdBQUcsQ0FBSCxHQUFPO0FBRFMsS0FBN0IsQ0FBUDtBQUdEOztBQWhCMkMsS0FFbkNKLGVBRm1DO0FBQUEsWUFPMUJLLDBFQVAwQjtBQUFBOztBQW1CNUMsc0JBRUkscUVBQUMsZ0VBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDLDJCQUFUO0FBQXFDLFdBQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQVNEO0tBNUJ1Qk4sbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJhbmRzL3N1dW50by9baWRdLjA0Yjk0MzQ1YzliYjc2NWEyN2UyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXInO1xyXG5cclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaW1hcnlTZWFyY2hBcHBCYXIoKSB7XHJcblxyXG4gIGZ1bmN0aW9uIEVsZXZhdGlvblNjcm9sbChwcm9wcykge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgd2luZG93IH0gPSBwcm9wcztcclxuICAgIC8vIE5vdGUgdGhhdCB5b3Ugbm9ybWFsbHkgd29uJ3QgbmVlZCB0byBzZXQgdGhlIHdpbmRvdyByZWYgYXMgdXNlU2Nyb2xsVHJpZ2dlclxyXG4gICAgLy8gd2lsbCBkZWZhdWx0IHRvIHdpbmRvdy5cclxuICAgIC8vIFRoaXMgaXMgb25seSBiZWluZyBzZXQgaGVyZSBiZWNhdXNlIHRoZSBkZW1vIGlzIGluIGFuIGlmcmFtZS5cclxuICAgIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICAgIHRocmVzaG9sZDogMCxcclxuICAgICAgdGFyZ2V0OiB3aW5kb3cgPyB3aW5kb3coKSA6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgICAgZWxldmF0aW9uOiB0cmlnZ2VyID8gNCA6IDAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0VtcHlyZWFuLWxvZ28uc3ZnXCIgYWx0PVwiRW1weXJlYW5cIi8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuXHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9