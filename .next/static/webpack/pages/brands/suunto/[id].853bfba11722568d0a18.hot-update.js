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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");

var _jsxFileName = "C:\\Users\\max\\WebstormProjects\\empyrean-site\\src\\components\\ui\\header.jsx";





function PrimarySearchAppBar() {
  var _s = $RefreshSig$();

  function ElevationScroll(props) {
    _s();

    var children = props.children,
        window = props.window; // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.

    var trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

  _s(ElevationScroll, "EC2GbbZl9x3XKoXLVx1H89cOBi0=", true);

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,

    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "static",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/images/Empyrean-logo.svg",
        alt: "Empyrean"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvaGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJQcmltYXJ5U2VhcmNoQXBwQmFyIiwiRWxldmF0aW9uU2Nyb2xsIiwicHJvcHMiLCJjaGlsZHJlbiIsIndpbmRvdyIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImVsZXZhdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFFNUMsV0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFBQSxRQUN0QkMsUUFEc0IsR0FDREQsS0FEQyxDQUN0QkMsUUFEc0I7QUFBQSxRQUNaQyxNQURZLEdBQ0RGLEtBREMsQ0FDWkUsTUFEWSxFQUU5QjtBQUNBO0FBQ0E7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxnQkFBZ0IsQ0FBQztBQUMvQkMsdUJBQWlCLEVBQUUsSUFEWTtBQUUvQkMsZUFBUyxFQUFFLENBRm9CO0FBRy9CQyxZQUFNLEVBQUVMLE1BQU0sR0FBR0EsTUFBTSxFQUFULEdBQWNNO0FBSEcsS0FBRCxDQUFoQztBQU1BLHdCQUFPQyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CVCxRQUFuQixFQUE2QjtBQUNsQ1UsZUFBUyxFQUFFUixPQUFPLEdBQUcsQ0FBSCxHQUFPO0FBRFMsS0FBN0IsQ0FBUDtBQUdEOztBQWhCMkMsS0FFbkNKLGVBRm1DOztBQWtCNUNBLGlCQUFlLENBQUNhLFNBQWhCLEdBQTRCO0FBQzFCWCxZQUFRLEVBQUVZLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsVUFERjs7QUFFMUI7QUFDSjtBQUNBO0FBQ0E7QUFDSWIsVUFBTSxFQUFFVyxTQUFTLENBQUNHO0FBTlEsR0FBNUI7QUFTQSxzQkFFSSxxRUFBQyxnRUFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMsMkJBQVQ7QUFBcUMsV0FBRyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBU0Q7S0FwQ3VCbEIsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnJhbmRzL3N1dW50by9baWRdLjg1M2JmYmExMTcyMjU2OGQwYTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmltYXJ5U2VhcmNoQXBwQmFyKCkge1xyXG5cclxuICBmdW5jdGlvbiBFbGV2YXRpb25TY3JvbGwocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHdpbmRvdyB9ID0gcHJvcHM7XHJcbiAgICAvLyBOb3RlIHRoYXQgeW91IG5vcm1hbGx5IHdvbid0IG5lZWQgdG8gc2V0IHRoZSB3aW5kb3cgcmVmIGFzIHVzZVNjcm9sbFRyaWdnZXJcclxuICAgIC8vIHdpbGwgZGVmYXVsdCB0byB3aW5kb3cuXHJcbiAgICAvLyBUaGlzIGlzIG9ubHkgYmVpbmcgc2V0IGhlcmUgYmVjYXVzZSB0aGUgZGVtbyBpcyBpbiBhbiBpZnJhbWUuXHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XHJcbiAgICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBFbGV2YXRpb25TY3JvbGwucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbiAgICAvKipcclxuICAgICAqIEluamVjdGVkIGJ5IHRoZSBkb2N1bWVudGF0aW9uIHRvIHdvcmsgaW4gYW4gaWZyYW1lLlxyXG4gICAgICogWW91IHdvbid0IG5lZWQgaXQgb24geW91ciBwcm9qZWN0LlxyXG4gICAgICovXHJcbiAgICB3aW5kb3c6IFByb3BUeXBlcy5mdW5jLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRW1weXJlYW4tbG9nby5zdmdcIiBhbHQ9XCJFbXB5cmVhblwiLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=