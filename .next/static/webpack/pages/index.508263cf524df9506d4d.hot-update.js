webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, darken, lighten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return decomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return recomposeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return getContrastRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return emphasize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : undefined);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/*! exports provided: keys, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBreakpoints; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMixins; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: Theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, breakpoints.up('sm'), Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMuiStrictModeTheme; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__["default"].apply(void 0, [Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = Object(_createPalette__WEBPACK_IMPORTED_MODULE_5__["default"])(paletteInput);
  var breakpoints = Object(_createBreakpoints__WEBPACK_IMPORTED_MODULE_3__["default"])(breakpointsInput);
  var spacing = Object(_createSpacing__WEBPACK_IMPORTED_MODULE_9__["default"])(spacingInput);
  var muiTheme = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: Object(_createMixins__WEBPACK_IMPORTED_MODULE_4__["default"])(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__["default"],
    typography: Object(_createTypography__WEBPACK_IMPORTED_MODULE_6__["default"])(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_8__["default"],
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__["default"],
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

/* harmony default export */ __webpack_exports__["default"] = (createMuiTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/*! exports provided: light, dark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPalette; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"][50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"][800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"].white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["lighten"])(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["darken"])(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__["default"][700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_6__["default"].A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_7__["default"][700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_8__["default"][300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_8__["default"][500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_8__["default"][700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_9__["default"][700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_10__["default"][300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_10__["default"][500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_10__["default"][700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["getContrastRatio"])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = Object(_colorManipulator__WEBPACK_IMPORTED_MODULE_11__["getContrastRatio"])(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : undefined);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createMuiTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createMuiTheme({ palette: {\n  primary: { main: green[500] },\n} });") : undefined);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__["default"],
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__["default"],
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSpacing; });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/system/esm/index.js");

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = Object(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["createUnarySpacing"])({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTypography; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: round,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/*! exports provided: isUnitless, getUnit, toUnitless, convertLength, alignProperty, fontGrid, responsiveProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnitless", function() { return isUnitless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnit", function() { return getUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnitless", function() { return toUnitless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertLength", function() { return convertLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignProperty", function() { return alignProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontGrid", function() { return fontGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveProperty", function() { return responsiveProperty; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");

var defaultTheme = Object(_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, darken, lighten, createMuiTheme, unstable_createMuiStrictModeTheme, createStyles, makeStyles, responsiveFontSizes, styled, easing, duration, useTheme, withStyles, withTheme, createGenerateClassName, jssPreset, ServerStyleSheets, StylesProvider, MuiThemeProvider, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["decomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["recomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getContrastRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getLuminance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["emphasize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["fade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["darken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["lighten"]; });

/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMuiTheme", function() { return _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_createMuiStrictModeTheme", function() { return _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsiveFontSizes", function() { return _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _transitions__WEBPACK_IMPORTED_MODULE_7__["easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return _transitions__WEBPACK_IMPORTED_MODULE_7__["duration"]; });

/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["createGenerateClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["jssPreset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ServerStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["StylesProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiThemeProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"]; });


 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return responsiveFontSizes; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, themeInput);

  theme.typography = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["convertLength"])(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["isUnitless"])(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : undefined);
    }

    if (!Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["isUnitless"])(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["alignProperty"])({
          size: value,
          grid: Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["fontGrid"])({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["responsiveProperty"])({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(Component);
  return function (style, options) {
    return componentCreator(style, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, options));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/*! exports provided: easing, duration, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["useTheme"])() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"])({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerStyleSheets; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");








var ServerStyleSheets = /*#__PURE__*/function () {
  function ServerStyleSheets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ServerStyleSheets);

    this.options = options;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ServerStyleSheets, [{
    key: "collect",
    value: function collect(children) {
      // This is needed in order to deduplicate the injection of CSS in the page.
      var sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

      this.sheetsRegistry = new jss__WEBPACK_IMPORTED_MODULE_4__["SheetsRegistry"](); // A new class name generator

      var generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__["default"])();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StylesProvider__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        sheetsManager: sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('style', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        id: 'jss-server-side',
        key: 'jss-server-side',
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);

  return ServerStyleSheets;
}();



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js ***!
  \*******************************************************************************/
/*! exports provided: sheetsManager, StylesContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return sheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return StylesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StylesProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jssPreset */ "./node_modules/@material-ui/styles/esm/jssPreset/index.js");







 // Default JSS instance.

var jss = Object(jss__WEBPACK_IMPORTED_MODULE_6__["create"])(Object(_jssPreset__WEBPACK_IMPORTED_MODULE_7__["default"])()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = Object(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Exported for test purposes

var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(defaultOptions);

if (true) {
  StylesContext.displayName = 'StylesContext';
}

var injectFirstNode;
function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(StylesContext);

  var context = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);

  if (true) {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('Material-UI: You need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: You cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = Object(jss__WEBPACK_IMPORTED_MODULE_6__["create"])({
      plugins: Object(_jssPreset__WEBPACK_IMPORTED_MODULE_7__["default"])().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StylesContext.Provider, {
    value: context
  }, children);
}
 true ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * JSS's instance.
   */
  jss: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  serverGenerateClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;

if (true) {
   true ? StylesProvider.propTypes = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["exactProp"])(StylesProvider.propTypes) : undefined;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/StylesProvider/index.js ***!
  \**********************************************************************/
/*! exports provided: default, sheetsManager, StylesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__["StylesContext"]; });




/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTheme/ThemeContext */ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested */ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");






 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    if (true) {
      if (!mergedTheme) {
        console.error(['Material-UI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();

  if (true) {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['Material-UI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  var theme = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[_nested__WEBPACK_IMPORTED_MODULE_6__["default"]] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: theme
  }, children);
}

 true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired
} : undefined;

if (true) {
   true ? ThemeProvider.propTypes = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["exactProp"])(ThemeProvider.propTypes) : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ThemeProvider/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ __webpack_exports__["default"] = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGenerateClassName; });
/* harmony import */ var _ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ThemeProvider/nested */ "./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;

  var getNextCounterId = function getNextCounterId() {
    ruleCounter += 1;

    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: You might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    return ruleCounter;
  };

  return function (rule, styleSheet) {
    var name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[_ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__["default"]] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(getNextCounterId());
    }

    if (false) {}

    var suffix = "".concat(rule.key, "-").concat(getNextCounterId()); // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }

    return "".concat(seedPrefix).concat(suffix);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createStyles/createStyles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createStyles/createStyles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/createStyles/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/createStyles/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/styles/esm/createStyles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStylesCreator; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _noopTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noopTheme */ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");




function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  if (true) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(stylesOrCreator) !== 'object' && !themingEnabled) {
      console.error(['Material-UI: The `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === _noopTheme__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            // TODO: prepend error message/name instead
            console.error(['Material-UI: The `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles);

      Object.keys(overrides).forEach(function (key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: You are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
          }
        }

        stylesWithOverrides[key] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["deepmerge"])(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getStylesCreator/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStylesCreator */ "./node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};
/* harmony default export */ __webpack_exports__["default"] = (noopTheme);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getThemeProps; });
/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/getThemeProps/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/index.js ***!
  \*******************************************************/
/*! exports provided: createGenerateClassName, createStyles, getThemeProps, jssPreset, makeStyles, mergeClasses, ServerStyleSheets, styled, StylesProvider, sheetsManager, StylesContext, ThemeProvider, useTheme, withStyles, withTheme, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/styles/esm/createStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemeProps", function() { return _getThemeProps__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/styles/esm/jssPreset/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeClasses", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/styles/esm/styled/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheetsManager", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["sheetsManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesContext", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_9__["StylesContext"]; });

/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/styles/esm/ThemeProvider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/styles/esm/withTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_13__["withThemeCreator"]; });

/** @license Material-UI v4.11.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable import/export */

/* Warning if there are several instances of @material-ui/styles */

if ( true && typeof window !== 'undefined') {
  _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] = _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] || 0;

  if (_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] === 1) {
    console.warn(['It looks like there are several instances of `@material-ui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://material-ui.com/r/styles-instance-warning for more info.'].join('\n'));
  }

  _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["ponyfillGlobal"]['__@material-ui/styles-init__'] += 1;
}




























/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/jssPreset/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jssPreset; });
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-global */ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-nested */ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js");






 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [Object(jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__["default"])(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : Object(jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__["default"])()]
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js ***!
  \*************************************************************************/
/*! exports provided: increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (true) {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mergeClasses */ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js");
/* harmony import */ var _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiKeyStore */ "./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _indexCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indexCounter */ "./node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js");
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../getStylesCreator */ "./node_modules/@material-ui/styles/esm/getStylesCreator/index.js");
/* harmony import */ var _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../getStylesCreator/noopTheme */ "./node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");












function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_4__["default"])({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stylesCreator.options, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = Object(jss__WEBPACK_IMPORTED_MODULE_3__["getDynamicStyles"])(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = Object(_mergeClasses__WEBPACK_IMPORTED_MODULE_4__["default"])({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef([]);
  var output; // Store "generation" key. Just returns a new object every time

  var currentKey = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {};
  }, values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_10__["default"] : _options$defaultTheme,
      stylesOptions2 = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = Object(_getStylesCreator__WEBPACK_IMPORTED_MODULE_9__["default"])(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: Object(_indexCounter__WEBPACK_IMPORTED_MODULE_8__["increment"])(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };

  var useStyles = function useStyles() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])() || defaultTheme;

    var stylesOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_StylesProvider__WEBPACK_IMPORTED_MODULE_7__["StylesContext"]), stylesOptions2);

    var instance = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
    var shouldUpdate = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);

    if (true) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      react__WEBPACK_IMPORTED_MODULE_2___default.a.useDebugValue(classes);
    }

    return classes;
  };

  return useStyles;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Used https://github.com/thinkloop/multi-key-cache as inspiration
var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (multiKeyStore);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/mergeClasses/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _mergeClasses__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClasses; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");


function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseClasses);

  if (true) {
    if (typeof newClasses === 'string') {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(function (key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/styled/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/styled/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/styles/esm/styled/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _styled__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/styled/styled.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/styled/styled.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return styled; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");









function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["name"]);

    if ( true && Component === undefined) {
      throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FinalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: ref,
        className: className
      }, spread), children);
    });
     true ? StyledComponent.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      /**
       * A render function or node.
       */
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),

      /**
       * @ignore
       */
      className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

      /**
       * If `true`, the component will recycle it's children HTML element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, function (props) {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }

        return null;
      }),

      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
      /* @typescript-to-proptypes-ignore */
      .elementType
    }, propTypes) : undefined;

    if (true) {
      StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ThemeContext.displayName = 'ThemeContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/useTheme/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/useTheme/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/useTheme/useTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");


function useTheme() {
  var theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withStyles/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withStyles/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withStyles/withStyles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withStyles/withStyles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getThemeProps */ "./node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");








 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(options, ["defaultTheme", "withTheme", "name"]);

    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var useStyles = Object(_makeStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.


      var classes = useStyles(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Component.defaultProps, props));
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_8__["default"])() || defaultTheme;

        if (name) {
          more = Object(_getThemeProps__WEBPACK_IMPORTED_MODULE_7__["default"])({
            theme: theme,
            name: name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });
     true ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return null; // return new Error(
        //   'Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' +
        //     'Refs are now automatically forwarded to the inner component.',
        // );
      })
    } : undefined;

    if (true) {
      WithStyles.displayName = "WithStyles(".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }

    return WithStyles;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withTheme/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withTheme/index.js ***!
  \*****************************************************************/
/*! exports provided: default, withThemeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/styles/esm/withTheme/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"]; });




/***/ }),

/***/ "./node_modules/@material-ui/styles/esm/withTheme/withTheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/esm/withTheme/withTheme.js ***!
  \*********************************************************************/
/*! exports provided: withThemeCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withThemeCreator", function() { return withThemeCreator; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/styles/esm/useTheme/index.js");







function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = options.defaultTheme;

  var withTheme = function withTheme(Component) {
    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var WithTheme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function WithTheme(props, ref) {
      var innerRef = props.innerRef,
          other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["innerRef"]);

      var theme = Object(_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])() || defaultTheme;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        theme: theme,
        ref: innerRef || ref
      }, other));
    });
     true ? WithTheme.propTypes = {
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return new Error('Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' + 'Refs are now automatically forwarded to the inner component.');
      })
    } : undefined;

    if (true) {
      WithTheme.displayName = "WithTheme(".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

var withTheme = withThemeCreator();
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/borders.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/borders.js ***!
  \*********************************************************/
/*! exports provided: border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ __webpack_exports__["default"] = (borders);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/breakpoints.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/breakpoints.js ***!
  \*************************************************************/
/*! exports provided: handleBreakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleBreakpoints", function() { return handleBreakpoints; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/esm/merge.js");




 // The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.

var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (true) {
    if (!props.theme) {
      console.error('Material-UI: You are calling a style function without a theme value.');
    }
  }

  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function (acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(propValue) === 'object') {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

    return Object.keys(propValue).reduce(function (acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  var output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var base = styleFunction(props);
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    var extended = themeBreakpoints.keys.reduce(function (acc, key) {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          theme: props.theme
        }, props[key]));
      }

      return acc;
    }, null);
    return Object(_merge__WEBPACK_IMPORTED_MODULE_4__["default"])(base, extended);
  };

  newStyleFunction.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styleFunction.propTypes, {
    xs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    sm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    md: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    lg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    xl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  }) : undefined;
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(styleFunction.filterProps));
  return newStyleFunction;
}

/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/compose.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/compose.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/esm/merge.js");



function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return Object(_merge__WEBPACK_IMPORTED_MODULE_1__["default"])(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  true ? styles.reduce(function (acc, style) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(acc, style.propTypes);
  }, {}) : undefined;
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

/* harmony default export */ __webpack_exports__["default"] = (compose);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/css.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/esm/merge.js");





function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_merge__WEBPACK_IMPORTED_MODULE_3__["default"])(output, styleFunction(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styleFunction.propTypes, {
    css: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  }) : undefined;
  newStyleFunction.filterProps = ['css'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(styleFunction.filterProps));
  return newStyleFunction;
}

/* harmony default export */ __webpack_exports__["default"] = (css);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/display.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/display.js ***!
  \*********************************************************/
/*! exports provided: displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPrint", function() { return displayPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRaw", function() { return displayRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textOverflow", function() { return textOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteSpace", function() { return whiteSpace; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");


var displayPrint = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'display'
});
var overflow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'overflow'
});
var textOverflow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'textOverflow'
});
var visibility = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'visibility'
});
var whiteSpace = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'whiteSpace'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/flexbox.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/flexbox.js ***!
  \*********************************************************/
/*! exports provided: flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return flexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return flexShrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");


var flexBasis = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexBasis'
});
var flexDirection = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexDirection'
});
var flexWrap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexWrap'
});
var justifyContent = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifyContent'
});
var alignItems = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignItems'
});
var alignContent = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignContent'
});
var order = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'order'
});
var flex = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flex'
});
var flexGrow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexGrow'
});
var flexShrink = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'flexShrink'
});
var alignSelf = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'alignSelf'
});
var justifyItems = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifyItems'
});
var justifySelf = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'justifySelf'
});
var flexbox = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/grid.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/grid.js ***!
  \******************************************************/
/*! exports provided: gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");


var gridGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridGap'
});
var gridColumnGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridColumnGap'
});
var gridRowGap = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridRowGap'
});
var gridColumn = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridColumn'
});
var gridRow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridRow'
});
var gridAutoFlow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoColumns'
});
var gridAutoRows = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridTemplateAreas'
});
var gridArea = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'gridArea'
});
var grid = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ __webpack_exports__["default"] = (grid);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/index.js ***!
  \*******************************************************/
/*! exports provided: borders, border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius, breakpoints, compose, css, display, flexbox, flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf, grid, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, palette, color, bgcolor, positions, position, zIndex, top, right, bottom, left, shadows, sizing, width, maxWidth, minWidth, height, maxHeight, minHeight, sizeWidth, sizeHeight, boxSizing, spacing, createUnarySpacing, style, typography, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borders */ "./node_modules/@material-ui/system/esm/borders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["border"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return _borders__WEBPACK_IMPORTED_MODULE_0__["borderRadius"]; });

/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/system/esm/breakpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css */ "./node_modules/@material-ui/system/esm/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./node_modules/@material-ui/system/esm/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "display", function() { return _display__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _flexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flexbox */ "./node_modules/@material-ui/system/esm/flexbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifyContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "order", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["order"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexGrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["flexShrink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["alignSelf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifyItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return _flexbox__WEBPACK_IMPORTED_MODULE_5__["justifySelf"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid */ "./node_modules/@material-ui/system/esm/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridColumnGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridRowGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoFlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridAutoRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridTemplateAreas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return _grid__WEBPACK_IMPORTED_MODULE_6__["gridArea"]; });

/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./palette */ "./node_modules/@material-ui/system/esm/palette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgcolor", function() { return _palette__WEBPACK_IMPORTED_MODULE_7__["bgcolor"]; });

/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./positions */ "./node_modules/@material-ui/system/esm/positions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positions", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["zIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _positions__WEBPACK_IMPORTED_MODULE_8__["left"]; });

/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/system/esm/shadows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return _shadows__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sizing */ "./node_modules/@material-ui/system/esm/sizing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizing", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "width", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["width"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["maxWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["minWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "height", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["height"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["maxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["minHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeWidth", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["sizeWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeHeight", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["sizeHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxSizing", function() { return _sizing__WEBPACK_IMPORTED_MODULE_10__["boxSizing"]; });

/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spacing */ "./node_modules/@material-ui/system/esm/spacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUnarySpacing", function() { return _spacing__WEBPACK_IMPORTED_MODULE_11__["createUnarySpacing"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _style__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typography */ "./node_modules/@material-ui/system/esm/typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontFamily"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["fontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["letterSpacing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["lineHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return _typography__WEBPACK_IMPORTED_MODULE_13__["textAlign"]; });

/** @license Material-UI v4.11.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */























/***/ }),

/***/ "./node_modules/@material-ui/system/esm/memoize.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/memoize.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/merge.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/merge.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");


function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

/* harmony default export */ __webpack_exports__["default"] = (merge);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/palette.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/palette.js ***!
  \*********************************************************/
/*! exports provided: color, bgcolor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgcolor", function() { return bgcolor; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");


var color = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(color, bgcolor);
/* harmony default export */ __webpack_exports__["default"] = (palette);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/positions.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/positions.js ***!
  \***********************************************************/
/*! exports provided: position, zIndex, top, right, bottom, left, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");


var position = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'position'
});
var zIndex = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var top = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'top'
});
var right = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'right'
});
var bottom = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'bottom'
});
var left = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'left'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(position, zIndex, top, right, bottom, left));

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/responsivePropType.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/responsivePropType.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var responsivePropType =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (responsivePropType);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/shadows.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/shadows.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");

var boxShadow = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ __webpack_exports__["default"] = (boxShadow);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/sizing.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/sizing.js ***!
  \********************************************************/
/*! exports provided: width, maxWidth, minWidth, height, maxHeight, minHeight, sizeWidth, sizeHeight, boxSizing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeWidth", function() { return sizeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeHeight", function() { return sizeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxSizing", function() { return boxSizing; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");



function transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'width',
  transform: transform
});
var maxWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'maxWidth',
  transform: transform
});
var minWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'minWidth',
  transform: transform
});
var height = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'height',
  transform: transform
});
var maxHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'maxHeight',
  transform: transform
});
var minHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'minHeight',
  transform: transform
});
var sizeWidth = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'size',
  cssProperty: 'width',
  transform: transform
});
var sizeHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'size',
  cssProperty: 'height',
  transform: transform
});
var boxSizing = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'boxSizing'
});
var sizing = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ __webpack_exports__["default"] = (sizing);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/spacing.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/spacing.js ***!
  \*********************************************************/
/*! exports provided: createUnarySpacing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnarySpacing", function() { return createUnarySpacing; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _responsivePropType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsivePropType */ "./node_modules/@material-ui/system/esm/responsivePropType.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/system/esm/breakpoints.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/esm/merge.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memoize */ "./node_modules/@material-ui/system/esm/memoize.js");





var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

var getCssProperties = Object(_memoize__WEBPACK_IMPORTED_MODULE_4__["default"])(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  var _prop$split = prop.split(''),
      _prop$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return function (abs) {
      if (true) {
        if (typeof abs !== 'number') {
          console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs, "."));
        }
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return function (abs) {
      if (true) {
        if (abs > themeSpacing.length - 1) {
          console.error(["Material-UI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n'));
        }
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (true) {
    console.error(["Material-UI: The `theme.spacing` value (".concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n'));
  }

  return function () {
    return undefined;
  };
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  var abs = Math.abs(propValue);
  var transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return "-".concat(transformed);
}

function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}

function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function (prop) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_2__["handleBreakpoints"])(props, propValue, styleFromPropValue);
  }).reduce(_merge__WEBPACK_IMPORTED_MODULE_3__["default"], {});
}

spacing.propTypes =  true ? spacingKeys.reduce(function (obj, key) {
  obj[key] = _responsivePropType__WEBPACK_IMPORTED_MODULE_1__["default"];
  return obj;
}, {}) : undefined;
spacing.filterProps = spacingKeys;
/* harmony default export */ __webpack_exports__["default"] = (spacing);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/style.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/style.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _responsivePropType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsivePropType */ "./node_modules/@material-ui/system/esm/responsivePropType.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/system/esm/breakpoints.js");




function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, value);
    };

    return Object(_breakpoints__WEBPACK_IMPORTED_MODULE_2__["handleBreakpoints"])(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  true ? Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prop, _responsivePropType__WEBPACK_IMPORTED_MODULE_1__["default"]) : undefined;
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./node_modules/@material-ui/system/esm/typography.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/system/esm/typography.js ***!
  \************************************************************/
/*! exports provided: fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/esm/style.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/esm/compose.js");


var fontFamily = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'letterSpacing'
});
var lineHeight = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'lineHeight'
});
var textAlign = Object(_style__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prop: 'textAlign'
});
var typography = Object(_compose__WEBPACK_IMPORTED_MODULE_1__["default"])(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ __webpack_exports__["default"] = (typography);

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/HTMLElementType.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/HTMLElementType.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLElementType; });
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/chainPropTypes.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/chainPropTypes.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chainPropTypes; });
function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/deepmerge.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/deepmerge.js ***!
  \**********************************************************/
/*! exports provided: isPlainObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepmerge; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


function isPlainObject(item) {
  return item && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(item) === 'object' && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/elementAcceptingRef.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  var element = props[propName];
  var safePropName = propFullName || propName;

  if (element == null) {
    return null;
  }

  var warningHint;
  var elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

var elementAcceptingRef = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element, acceptingRef);
elementAcceptingRef.isRequired = Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element.isRequired, acceptingRef);
/* harmony default export */ __webpack_exports__["default"] = (elementAcceptingRef);

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  var warningHint;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof propValue === 'function' && !isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_chainPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["elementType"], elementTypeAcceptingRef));

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/exactProp.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/exactProp.js ***!
  \**********************************************************/
/*! exports provided: specialProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialProperty", function() { return specialProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exactProp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (false) {}

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, propTypes, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatMuiErrorMessage; });
/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  var url = 'https://material-ui.com/production-error/?code=' + code;

  for (var i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/getDisplayName.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/getDisplayName.js ***!
  \***************************************************************/
/*! exports provided: getFunctionName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDisplayName; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);

 // Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */

function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(Component) === 'object') {
    switch (Component.$$typeof) {
      case react_is__WEBPACK_IMPORTED_MODULE_1__["ForwardRef"]:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case react_is__WEBPACK_IMPORTED_MODULE_1__["Memo"]:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/index.js ***!
  \******************************************************/
/*! exports provided: chainPropTypes, deepmerge, elementAcceptingRef, elementTypeAcceptingRef, exactProp, formatMuiErrorMessage, getDisplayName, HTMLElementType, ponyfillGlobal, refType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainPropTypes", function() { return _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepmerge */ "./node_modules/@material-ui/utils/esm/deepmerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepmerge", function() { return _deepmerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementAcceptingRef */ "./node_modules/@material-ui/utils/esm/elementAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAcceptingRef", function() { return _elementAcceptingRef__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementTypeAcceptingRef */ "./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementTypeAcceptingRef", function() { return _elementTypeAcceptingRef__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _exactProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exactProp */ "./node_modules/@material-ui/utils/esm/exactProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exactProp", function() { return _exactProp__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatMuiErrorMessage */ "./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMuiErrorMessage", function() { return _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDisplayName */ "./node_modules/@material-ui/utils/esm/getDisplayName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return _getDisplayName__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTMLElementType */ "./node_modules/@material-ui/utils/esm/HTMLElementType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLElementType", function() { return _HTMLElementType__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ponyfillGlobal */ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return _ponyfillGlobal__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _refType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refType */ "./node_modules/@material-ui/utils/esm/refType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refType", function() { return _refType__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/** @license Material-UI v4.11.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */











/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/ponyfillGlobal.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/ponyfillGlobal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
/* harmony default export */ __webpack_exports__["default"] = (typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')());

/***/ }),

/***/ "./node_modules/@material-ui/utils/esm/refType.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/utils/esm/refType.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var refType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]);
/* harmony default export */ __webpack_exports__["default"] = (refType);

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/dist/css-vendor.esm.js ***!
  \********************************************************/
/*! exports provided: prefix, supportedKeyframes, supportedProperty, supportedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedKeyframes", function() { return supportedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedProperty", function() { return supportedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedValue", function() { return supportedValue; });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"] && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(p.noPrefill));
  return a;
}, []);

var el;
var cache = {};

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (camelCase);


/***/ }),

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ }),

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss__WEBPACK_IMPORTED_MODULE_1__["RuleList"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssGlobal);


/***/ }),

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");



var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : undefined;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevOptions, {
      index: prevOptions.index + 1 // $FlowFixMe[prop-missing]

    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe[incompatible-use]
        // $FlowFixMe[prop-missing]
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssNested);


/***/ }),

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ }),

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_1__["createRule"])(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe[prop-missing]


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule; // $FlowFixMe[prop-missing]

      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
               true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, '[JSS] Function values inside function rules are not supported.') : undefined;
              break;
            }
          }
        }
      } // $FlowFixMe[prop-missing]


      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (functionPlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/dist/css-vendor.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedKeyframes"])(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedProperty"])(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(supportedProp, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(prop, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssVendorPrefixer);


/***/ }),

/***/ "./node_modules/jss/dist/jss.esm.js":
/*!******************************************!*\
  !*** ./node_modules/jss/dist/jss.esm.js ***!
  \******************************************/
/*! exports provided: default, RuleList, SheetsManager, SheetsRegistry, create, createGenerateId, createRule, getDynamicStyles, hasCSSTOMSupport, sheets, toCssValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleList", function() { return RuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsManager", function() { return SheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return SheetsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return createGenerateId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRule", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDynamicStyles", function() { return getDynamicStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCSSTOMSupport", function() { return hasCSSTOMSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheets", function() { return registry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCssValue", function() { return toCssValue; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown rule " + name) : undefined;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : undefined;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Bad keyframes name " + key) : undefined;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : undefined;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe[prop-missing]
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown hook \"" + name + "\".") : undefined;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var registry = new SheetsRegistry();

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : undefined;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

/**
 * Get a style property value.
 */
var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};

/**
 * Set a style property.
 */
var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};

/**
 * Remove a style property.
 */
var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : undefined;
  }
};

/**
 * Set the selector.
 */
var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry$1 = registry.registry;

  if (registry$1.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : undefined;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Insertion point is not in the DOM.') : undefined;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] " + err.message) : undefined;
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    this.cssRules = [];
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) registry.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index] = cssRule;
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.5.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__["default"] ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = registry.index === 0 ? 0 : registry.index + 1;
    }

    var sheet = new StyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    registry.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      // $FlowFixMe[incompatible-call]
      return this.createRule(undefined, name, style);
    } // $FlowFixMe[incompatible-type]


    var ruleOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var jss = create();

/* harmony default export */ __webpack_exports__["default"] = (jss);



/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./src/components/includes/header.jsx":
/*!********************************************!*\
  !*** ./src/components/includes/header.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



var _jsxFileName = "C:\\Users\\max\\WebstormProjects\\empyrean-site\\src\\components\\includes\\header.jsx",
    _this = undefined;





var Header = function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "\u54C1\u724C\u4EE3\u7406"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "\u652F\u63F4\u670D\u52D9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "\u4F55\u8655\u8CFC\u8CB7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "\u611B\u514B\u8CFD\u4E8B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "5hm1\u8CFC\u7269\u4E2D\u5FC3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2dyZXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2luZGlnby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvb3JhbmdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9waW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9yZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVNaXhpbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTXVpVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVBhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2RlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYWRvd3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3RyYW5zaXRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9TZXJ2ZXJTdHlsZVNoZWV0cy9TZXJ2ZXJTdHlsZVNoZWV0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1NlcnZlclN0eWxlU2hlZXRzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vU3R5bGVzUHJvdmlkZXIvU3R5bGVzUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9TdHlsZXNQcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1RoZW1lUHJvdmlkZXIvVGhlbWVQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1RoZW1lUHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9UaGVtZVByb3ZpZGVyL25lc3RlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9jcmVhdGVTdHlsZXMvY3JlYXRlU3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vY3JlYXRlU3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vZ2V0U3R5bGVzQ3JlYXRvci9nZXRTdHlsZXNDcmVhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vZ2V0U3R5bGVzQ3JlYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vZ2V0VGhlbWVQcm9wcy9nZXRUaGVtZVByb3BzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vZ2V0VGhlbWVQcm9wcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vanNzUHJlc2V0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vanNzUHJlc2V0L2pzc1ByZXNldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21ha2VTdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9tYWtlU3R5bGVzL2luZGV4Q291bnRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21ha2VTdHlsZXMvbWFrZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21ha2VTdHlsZXMvbXVsdGlLZXlTdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21lcmdlQ2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21lcmdlQ2xhc3Nlcy9tZXJnZUNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9zdHlsZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9zdHlsZWQvc3R5bGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vdXNlVGhlbWUvVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vdXNlVGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS91c2VUaGVtZS91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL3dpdGhTdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS93aXRoU3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS93aXRoVGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS93aXRoVGhlbWUvd2l0aFRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vYm9yZGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL2JyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vY29tcG9zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL2Nzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS9mbGV4Ym94LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vZ3JpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL21lcmdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL3Jlc3BvbnNpdmVQcm9wVHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zeXN0ZW0vZXNtL3NoYWRvd3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS9zaXppbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS9zcGFjaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3lzdGVtL2VzbS90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9IVE1MRWxlbWVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2NoYWluUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9kZWVwbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2VsZW1lbnRBY2NlcHRpbmdSZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2VsZW1lbnRUeXBlQWNjZXB0aW5nUmVmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9leGFjdFByb3AuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2Zvcm1hdE11aUVycm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9wb255ZmlsbEdsb2JhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lc20vcmVmVHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jc3MtdmVuZG9yL2Rpc3QvY3NzLXZlbmRvci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXMtaW4tYnJvd3Nlci9kaXN0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tY2FtZWwtY2FzZS9kaXN0L2pzcy1wbHVnaW4tY2FtZWwtY2FzZS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWRlZmF1bHQtdW5pdC9kaXN0L2pzcy1wbHVnaW4tZGVmYXVsdC11bml0LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tZ2xvYmFsL2Rpc3QvanNzLXBsdWdpbi1nbG9iYWwuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1uZXN0ZWQvZGlzdC9qc3MtcGx1Z2luLW5lc3RlZC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXByb3BzLXNvcnQvZGlzdC9qc3MtcGx1Z2luLXByb3BzLXNvcnQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uL2Rpc3QvanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyL2Rpc3QvanNzLXBsdWdpbi12ZW5kb3ItcHJlZml4ZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNzL2Rpc3QvanNzLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZXMvaGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBMkU7QUFDNUQ7QUFDZixpQ0FBaUMsMkZBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0M7QUFDckI7QUFDNkI7QUFDUjtBQUNSO0FBQ1E7QUFDQTtBQUNyQjtBQUNlO0FBQ2xCO0FBQ3dCO0FBQ3JCO0FBQ3lCO0FBQ3ZCO0FBQ21CO0FBQ0Y7QUFDcEI7QUFDc0I7QUFDckI7QUFDaUI7QUFDVTs7Ozs7Ozs7Ozs7OztBQ3pCckQ7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hQM0I7QUFBQTtBQUFBO0FBQTBEO0FBQzNCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBUSxDQUFDLGtGQUFRLEdBQUc7QUFDekM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QiwyQkFBMkI7QUFDcEQsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixrRkFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZTtBQUNwQjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQ7O0FBRTlELDhEQUE4RDs7QUFFOUQ7QUFDQSxLQUFLO0FBQ0wsOERBQThEOztBQUU5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtGQUFRLEdBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsd0NBQXdDO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ2QjtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxzQkFDYjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURhO0FBQUEsQ0FBZjs7S0FBTUEsTTtBQVlTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MDgyNjNjZjUyNGRmOTUwNmQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwidmFyIGJsdWUgPSB7XG4gIDUwOiAnI2UzZjJmZCcsXG4gIDEwMDogJyNiYmRlZmInLFxuICAyMDA6ICcjOTBjYWY5JyxcbiAgMzAwOiAnIzY0YjVmNicsXG4gIDQwMDogJyM0MmE1ZjUnLFxuICA1MDA6ICcjMjE5NmYzJyxcbiAgNjAwOiAnIzFlODhlNScsXG4gIDcwMDogJyMxOTc2ZDInLFxuICA4MDA6ICcjMTU2NWMwJyxcbiAgOTAwOiAnIzBkNDdhMScsXG4gIEExMDA6ICcjODJiMWZmJyxcbiAgQTIwMDogJyM0NDhhZmYnLFxuICBBNDAwOiAnIzI5NzlmZicsXG4gIEE3MDA6ICcjMjk2MmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGJsdWU7IiwidmFyIGNvbW1vbiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjZmZmJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJ2YXIgZ3JlZW4gPSB7XG4gIDUwOiAnI2U4ZjVlOScsXG4gIDEwMDogJyNjOGU2YzknLFxuICAyMDA6ICcjYTVkNmE3JyxcbiAgMzAwOiAnIzgxYzc4NCcsXG4gIDQwMDogJyM2NmJiNmEnLFxuICA1MDA6ICcjNGNhZjUwJyxcbiAgNjAwOiAnIzQzYTA0NycsXG4gIDcwMDogJyMzODhlM2MnLFxuICA4MDA6ICcjMmU3ZDMyJyxcbiAgOTAwOiAnIzFiNWUyMCcsXG4gIEExMDA6ICcjYjlmNmNhJyxcbiAgQTIwMDogJyM2OWYwYWUnLFxuICBBNDAwOiAnIzAwZTY3NicsXG4gIEE3MDA6ICcjMDBjODUzJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZWVuOyIsInZhciBncmV5ID0ge1xuICA1MDogJyNmYWZhZmEnLFxuICAxMDA6ICcjZjVmNWY1JyxcbiAgMjAwOiAnI2VlZWVlZScsXG4gIDMwMDogJyNlMGUwZTAnLFxuICA0MDA6ICcjYmRiZGJkJyxcbiAgNTAwOiAnIzllOWU5ZScsXG4gIDYwMDogJyM3NTc1NzUnLFxuICA3MDA6ICcjNjE2MTYxJyxcbiAgODAwOiAnIzQyNDI0MicsXG4gIDkwMDogJyMyMTIxMjEnLFxuICBBMTAwOiAnI2Q1ZDVkNScsXG4gIEEyMDA6ICcjYWFhYWFhJyxcbiAgQTQwMDogJyMzMDMwMzAnLFxuICBBNzAwOiAnIzYxNjE2MSdcbn07XG5leHBvcnQgZGVmYXVsdCBncmV5OyIsInZhciBpbmRpZ28gPSB7XG4gIDUwOiAnI2U4ZWFmNicsXG4gIDEwMDogJyNjNWNhZTknLFxuICAyMDA6ICcjOWZhOGRhJyxcbiAgMzAwOiAnIzc5ODZjYicsXG4gIDQwMDogJyM1YzZiYzAnLFxuICA1MDA6ICcjM2Y1MWI1JyxcbiAgNjAwOiAnIzM5NDlhYicsXG4gIDcwMDogJyMzMDNmOWYnLFxuICA4MDA6ICcjMjgzNTkzJyxcbiAgOTAwOiAnIzFhMjM3ZScsXG4gIEExMDA6ICcjOGM5ZWZmJyxcbiAgQTIwMDogJyM1MzZkZmUnLFxuICBBNDAwOiAnIzNkNWFmZScsXG4gIEE3MDA6ICcjMzA0ZmZlJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGluZGlnbzsiLCJ2YXIgb3JhbmdlID0ge1xuICA1MDogJyNmZmYzZTAnLFxuICAxMDA6ICcjZmZlMGIyJyxcbiAgMjAwOiAnI2ZmY2M4MCcsXG4gIDMwMDogJyNmZmI3NGQnLFxuICA0MDA6ICcjZmZhNzI2JyxcbiAgNTAwOiAnI2ZmOTgwMCcsXG4gIDYwMDogJyNmYjhjMDAnLFxuICA3MDA6ICcjZjU3YzAwJyxcbiAgODAwOiAnI2VmNmMwMCcsXG4gIDkwMDogJyNlNjUxMDAnLFxuICBBMTAwOiAnI2ZmZDE4MCcsXG4gIEEyMDA6ICcjZmZhYjQwJyxcbiAgQTQwMDogJyNmZjkxMDAnLFxuICBBNzAwOiAnI2ZmNmQwMCdcbn07XG5leHBvcnQgZGVmYXVsdCBvcmFuZ2U7IiwidmFyIHBpbmsgPSB7XG4gIDUwOiAnI2ZjZTRlYycsXG4gIDEwMDogJyNmOGJiZDAnLFxuICAyMDA6ICcjZjQ4ZmIxJyxcbiAgMzAwOiAnI2YwNjI5MicsXG4gIDQwMDogJyNlYzQwN2EnLFxuICA1MDA6ICcjZTkxZTYzJyxcbiAgNjAwOiAnI2Q4MWI2MCcsXG4gIDcwMDogJyNjMjE4NWInLFxuICA4MDA6ICcjYWQxNDU3JyxcbiAgOTAwOiAnIzg4MGU0ZicsXG4gIEExMDA6ICcjZmY4MGFiJyxcbiAgQTIwMDogJyNmZjQwODEnLFxuICBBNDAwOiAnI2Y1MDA1NycsXG4gIEE3MDA6ICcjYzUxMTYyJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHBpbms7IiwidmFyIHJlZCA9IHtcbiAgNTA6ICcjZmZlYmVlJyxcbiAgMTAwOiAnI2ZmY2RkMicsXG4gIDIwMDogJyNlZjlhOWEnLFxuICAzMDA6ICcjZTU3MzczJyxcbiAgNDAwOiAnI2VmNTM1MCcsXG4gIDUwMDogJyNmNDQzMzYnLFxuICA2MDA6ICcjZTUzOTM1JyxcbiAgNzAwOiAnI2QzMmYyZicsXG4gIDgwMDogJyNjNjI4MjgnLFxuICA5MDA6ICcjYjcxYzFjJyxcbiAgQTEwMDogJyNmZjhhODAnLFxuICBBMjAwOiAnI2ZmNTI1MicsXG4gIEE0MDA6ICcjZmYxNzQ0JyxcbiAgQTcwMDogJyNkNTAwMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkOyIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCBcIi5jb25jYXQodmFsdWUsIFwiIGlzIG91dCBvZiByYW5nZSBbXCIpLmNvbmNhdChtaW4sIFwiLCBcIikuY29uY2F0KG1heCwgXCJdLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSGV4IGNvbG9yLCBpLmUuICNubm4gb3IgI25ubm5ublxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3Iuc3Vic3RyKDEpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiLnsxLFwiLmNvbmNhdChjb2xvci5sZW5ndGggPj0gNiA/IDIgOiAxLCBcIn1cIiksICdnJyk7XG4gIHZhciBjb2xvcnMgPSBjb2xvci5tYXRjaChyZSk7XG5cbiAgaWYgKGNvbG9ycyAmJiBjb2xvcnNbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4gKyBuO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9ycyA/IFwicmdiXCIuY29uY2F0KGNvbG9ycy5sZW5ndGggPT09IDQgPyAnYScgOiAnJywgXCIoXCIpLmNvbmNhdChjb2xvcnMubWFwKGZ1bmN0aW9uIChuLCBpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IDMgPyBwYXJzZUludChuLCAxNikgOiBNYXRoLnJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSAqIDEwMDApIC8gMTAwMDtcbiAgfSkuam9pbignLCAnKSwgXCIpXCIpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGludFRvSGV4KGludCkge1xuICB2YXIgaGV4ID0gaW50LnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIi5jb25jYXQoaGV4KSA6IGhleDtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyByZ2IgZm9ybWF0IHRvIENTUyBoZXggZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIFJHQiBjb2xvciwgaS5lLiByZ2IobiwgbiwgbilcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmcsIGkuZS4gI25ubm5ublxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHZhciBfZGVjb21wb3NlQ29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvciksXG4gICAgICB2YWx1ZXMgPSBfZGVjb21wb3NlQ29sb3IudmFsdWVzO1xuXG4gIHJldHVybiBcIiNcIi5jb25jYXQodmFsdWVzLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBpbnRUb0hleChuKTtcbiAgfSkuam9pbignJykpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gaHNsIGZvcm1hdCB0byByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhTTCBjb2xvciB2YWx1ZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHJnYiBjb2xvciB2YWx1ZXNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciBfY29sb3IgPSBjb2xvcixcbiAgICAgIHZhbHVlcyA9IF9jb2xvci52YWx1ZXM7XG4gIHZhciBoID0gdmFsdWVzWzBdO1xuICB2YXIgcyA9IHZhbHVlc1sxXSAvIDEwMDtcbiAgdmFyIGwgPSB2YWx1ZXNbMl0gLyAxMDA7XG4gIHZhciBhID0gcyAqIE1hdGgubWluKGwsIDEgLSBsKTtcblxuICB2YXIgZiA9IGZ1bmN0aW9uIGYobikge1xuICAgIHZhciBrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAobiArIGggLyAzMCkgJSAxMjtcbiAgICByZXR1cm4gbCAtIGEgKiBNYXRoLm1heChNYXRoLm1pbihrIC0gMywgOSAtIGssIDEpLCAtMSk7XG4gIH07XG5cbiAgdmFyIHR5cGUgPSAncmdiJztcbiAgdmFyIHJnYiA9IFtNYXRoLnJvdW5kKGYoMCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoOCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoNCkgKiAyNTUpXTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ2hzbGEnKSB7XG4gICAgdHlwZSArPSAnYSc7XG4gICAgcmdiLnB1c2godmFsdWVzWzNdKTtcbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcih7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHJnYlxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBhbmQgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogTm90ZTogRG9lcyBub3Qgc3VwcG9ydCByZ2IgJSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge29iamVjdH0gLSBBIE1VSSBjb2xvciBvYmplY3Q6IHt0eXBlOiBzdHJpbmcsIHZhbHVlczogbnVtYmVyW119XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLnR5cGUpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlQ29sb3IoaGV4VG9SZ2IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG5cbiAgaWYgKFsncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBgXCIuY29uY2F0KGNvbG9yLCBcImAgY29sb3IuXFxuV2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKCkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgzLCBjb2xvcikpO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnN1YnN0cmluZyhtYXJrZXIgKyAxLCBjb2xvci5sZW5ndGggLSAxKS5zcGxpdCgnLCcpO1xuICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHZhbHVlc1xuICB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZjogJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xuICogQHBhcmFtIHthcnJheX0gY29sb3IudmFsdWVzIC0gW24sbixuXSBvciBbbixuLG4sbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGU7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHJldHVybiBpIDwgMyA/IHBhcnNlSW50KG4sIDEwKSA6IG47XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICB2YWx1ZXNbMV0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMV0sIFwiJVwiKTtcbiAgICB2YWx1ZXNbMl0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMl0sIFwiJVwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0eXBlLCBcIihcIikuY29uY2F0KHZhbHVlcy5qb2luKCcsICcpLCBcIilcIik7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycy5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JlZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIGNvbnRyYXN0IHJhdGlvIHZhbHVlIGluIHRoZSByYW5nZSAwIC0gMjEuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHJldHVybiAoTWF0aC5tYXgobHVtQSwgbHVtQikgKyAwLjA1KSAvIChNYXRoLm1pbihsdW1BLCBsdW1CKSArIDAuMDUpO1xufVxuLyoqXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcbiAqIG5vcm1hbGl6ZWQgdG8gMCBmb3IgZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiB0aGUgY29sb3IgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIHJnYiA9IGNvbG9yLnR5cGUgPT09ICdoc2wnID8gZGVjb21wb3NlQ29sb3IoaHNsVG9SZ2IoY29sb3IpKS52YWx1ZXMgOiBjb2xvci52YWx1ZXM7XG4gIHJnYiA9IHJnYi5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhbCAvPSAyNTU7IC8vIG5vcm1hbGl6ZWRcblxuICAgIHJldHVybiB2YWwgPD0gMC4wMzkyOCA/IHZhbCAvIDEyLjkyIDogTWF0aC5wb3coKHZhbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KTsgLy8gVHJ1bmNhdGUgYXQgMyBkaWdpdHNcblxuICByZXR1cm4gTnVtYmVyKCgwLjIxMjYgKiByZ2JbMF0gKyAwLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl0pLnRvRml4ZWQoMykpO1xufVxuLyoqXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG9yLCBkZXBlbmRpbmcgb24gaXRzIGx1bWluYW5jZS5cbiAqIExpZ2h0IGNvbG9ycyBhcmUgZGFya2VuZWQsIGRhcmsgY29sb3JzIGFyZSBsaWdodGVuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50PTAuMTUgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1waGFzaXplKGNvbG9yKSB7XG4gIHZhciBjb2VmZmljaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC4xNTtcbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cbi8qKlxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZXMgYXJlIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMCAtMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmFkZShjb2xvciwgdmFsdWUpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAncmdiJyB8fCBjb2xvci50eXBlID09PSAnaHNsJykge1xuICAgIGNvbG9yLnR5cGUgKz0gJ2EnO1xuICB9XG5cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIERhcmtlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICo9IDEgLSBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKz0gKDEwMCAtIGNvbG9yLnZhbHVlc1syXSkgKiBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKz0gKDI1NSAtIGNvbG9yLnZhbHVlc1tpXSkgKiBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIFNvcnRlZCBBU0MgYnkgc2l6ZS4gVGhhdCdzIGltcG9ydGFudC5cbi8vIEl0IGNhbid0IGJlIGNvbmZpZ3VyZWQgYXMgaXQncyB1c2VkIHN0YXRpY2FsbHkgZm9yIHByb3BUeXBlcy5cbmV4cG9ydCB2YXIga2V5cyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXTsgLy8gS2VlcCBpbiBtaW5kIHRoYXQgQG1lZGlhIGlzIGluY2x1c2l2ZSBieSB0aGUgQ1NTIHNwZWNpZmljYXRpb24uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzKSB7XG4gIHZhciBfYnJlYWtwb2ludHMkdmFsdWVzID0gYnJlYWtwb2ludHMudmFsdWVzLFxuICAgICAgdmFsdWVzID0gX2JyZWFrcG9pbnRzJHZhbHVlcyA9PT0gdm9pZCAwID8ge1xuICAgIHhzOiAwLFxuICAgIHNtOiA2MDAsXG4gICAgbWQ6IDk2MCxcbiAgICBsZzogMTI4MCxcbiAgICB4bDogMTkyMFxuICB9IDogX2JyZWFrcG9pbnRzJHZhbHVlcyxcbiAgICAgIF9icmVha3BvaW50cyR1bml0ID0gYnJlYWtwb2ludHMudW5pdCxcbiAgICAgIHVuaXQgPSBfYnJlYWtwb2ludHMkdW5pdCA9PT0gdm9pZCAwID8gJ3B4JyA6IF9icmVha3BvaW50cyR1bml0LFxuICAgICAgX2JyZWFrcG9pbnRzJHN0ZXAgPSBicmVha3BvaW50cy5zdGVwLFxuICAgICAgc3RlcCA9IF9icmVha3BvaW50cyRzdGVwID09PSB2b2lkIDAgPyA1IDogX2JyZWFrcG9pbnRzJHN0ZXAsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhicmVha3BvaW50cywgW1widmFsdWVzXCIsIFwidW5pdFwiLCBcInN0ZXBcIl0pO1xuXG4gIGZ1bmN0aW9uIHVwKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB2YWx1ZXNba2V5XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5XSA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodmFsdWUpLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKGtleSkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpICsgMTtcbiAgICB2YXIgdXBwZXJib3VuZCA9IHZhbHVlc1trZXlzW2VuZEluZGV4XV07XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAvLyB4bCBkb3duIGFwcGxpZXMgdG8gYWxsIHNpemVzXG4gICAgICByZXR1cm4gdXAoJ3hzJyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHVwcGVyYm91bmQgPT09ICdudW1iZXInICYmIGVuZEluZGV4ID4gMCA/IHVwcGVyYm91bmQgOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtYXgtd2lkdGg6XCIuY29uY2F0KHZhbHVlIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4oc3RhcnQsIGVuZCkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihlbmQpO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB1cChzdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHR5cGVvZiB2YWx1ZXNbc3RhcnRdID09PSAnbnVtYmVyJyA/IHZhbHVlc1tzdGFydF0gOiBzdGFydCkuY29uY2F0KHVuaXQsIFwiKSBhbmQgXCIpICsgXCIobWF4LXdpZHRoOlwiLmNvbmNhdCgoZW5kSW5kZXggIT09IC0xICYmIHR5cGVvZiB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA6IGVuZCkgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25seShrZXkpIHtcbiAgICByZXR1cm4gYmV0d2VlbihrZXksIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiB3aWR0aChrZXkpIHtcbiAgICByZXR1cm4gdmFsdWVzW2tleV07XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGtleXM6IGtleXMsXG4gICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgdXA6IHVwLFxuICAgIGRvd246IGRvd24sXG4gICAgYmV0d2VlbjogYmV0d2VlbixcbiAgICBvbmx5OiBvbmx5LFxuICAgIHdpZHRoOiB3aWR0aFxuICB9LCBvdGhlcik7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnMpIHtcbiAgdmFyIF90b29sYmFyO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgZ3V0dGVyczogZnVuY3Rpb24gZ3V0dGVycygpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgLy8gVG8gZGVwcmVjYXRlIGluIHY0LjFcbiAgICAgIC8vICAgICAgIHdhcm5pbmcoXG4gICAgICAvLyAgICAgICAgIGZhbHNlLFxuICAgICAgLy8gICAgICAgICBbXG4gICAgICAvLyAgICAgICAgICAgJ01hdGVyaWFsLVVJOiBUaGVtZS5taXhpbnMuZ3V0dGVycygpIGlzIGRlcHJlY2F0ZWQuJyxcbiAgICAgIC8vICAgICAgICAgICAnWW91IGNhbiB1c2UgdGhlIHNvdXJjZSBvZiB0aGUgbWl4aW4gZGlyZWN0bHk6JyxcbiAgICAgIC8vICAgICAgICAgICBgXG4gICAgICAvLyBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIC8vIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIC8vIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIC8vICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAvLyAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIC8vIH0sXG4gICAgICAvLyBgLFxuICAgICAgLy8gICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgLy8gICAgICAgKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDIpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMilcbiAgICAgIH0sIHN0eWxlcywgX2RlZmluZVByb3BlcnR5KHt9LCBicmVha3BvaW50cy51cCgnc20nKSwgX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygzKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDMpXG4gICAgICB9LCBzdHlsZXNbYnJlYWtwb2ludHMudXAoJ3NtJyldKSkpO1xuICAgIH0sXG4gICAgdG9vbGJhcjogKF90b29sYmFyID0ge1xuICAgICAgbWluSGVpZ2h0OiA1NlxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgXCJcIi5jb25jYXQoYnJlYWtwb2ludHMudXAoJ3hzJyksIFwiIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIiksIHtcbiAgICAgIG1pbkhlaWdodDogNDhcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF90b29sYmFyLCBicmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluSGVpZ2h0OiA2NFxuICAgIH0pLCBfdG9vbGJhcilcbiAgfSwgbWl4aW5zKTtcbn0iLCJpbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZU11aVRoZW1lIGZyb20gJy4vY3JlYXRlTXVpVGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZU11aVRoZW1lLmFwcGx5KHZvaWQgMCwgW2RlZXBtZXJnZSh7XG4gICAgdW5zdGFibGVfc3RyaWN0TW9kZTogdHJ1ZVxuICB9LCBvcHRpb25zKV0uY29uY2F0KGFyZ3MpKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnLi9jcmVhdGVCcmVha3BvaW50cyc7XG5pbXBvcnQgY3JlYXRlTWl4aW5zIGZyb20gJy4vY3JlYXRlTWl4aW5zJztcbmltcG9ydCBjcmVhdGVQYWxldHRlIGZyb20gJy4vY3JlYXRlUGFsZXR0ZSc7XG5pbXBvcnQgY3JlYXRlVHlwb2dyYXBoeSBmcm9tICcuL2NyZWF0ZVR5cG9ncmFwaHknO1xuaW1wb3J0IHNoYWRvd3MgZnJvbSAnLi9zaGFkb3dzJztcbmltcG9ydCBzaGFwZSBmcm9tICcuL3NoYXBlJztcbmltcG9ydCBjcmVhdGVTcGFjaW5nIGZyb20gJy4vY3JlYXRlU3BhY2luZyc7XG5pbXBvcnQgdHJhbnNpdGlvbnMgZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5pbXBvcnQgekluZGV4IGZyb20gJy4vekluZGV4JztcblxuZnVuY3Rpb24gY3JlYXRlTXVpVGhlbWUoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHNJbnB1dCA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkbWl4aW5zID0gb3B0aW9ucy5taXhpbnMsXG4gICAgICBtaXhpbnNJbnB1dCA9IF9vcHRpb25zJG1peGlucyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRtaXhpbnMsXG4gICAgICBfb3B0aW9ucyRwYWxldHRlID0gb3B0aW9ucy5wYWxldHRlLFxuICAgICAgcGFsZXR0ZUlucHV0ID0gX29wdGlvbnMkcGFsZXR0ZSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRwYWxldHRlLFxuICAgICAgc3BhY2luZ0lucHV0ID0gb3B0aW9ucy5zcGFjaW5nLFxuICAgICAgX29wdGlvbnMkdHlwb2dyYXBoeSA9IG9wdGlvbnMudHlwb2dyYXBoeSxcbiAgICAgIHR5cG9ncmFwaHlJbnB1dCA9IF9vcHRpb25zJHR5cG9ncmFwaHkgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkdHlwb2dyYXBoeSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImJyZWFrcG9pbnRzXCIsIFwibWl4aW5zXCIsIFwicGFsZXR0ZVwiLCBcInNwYWNpbmdcIiwgXCJ0eXBvZ3JhcGh5XCJdKTtcblxuICB2YXIgcGFsZXR0ZSA9IGNyZWF0ZVBhbGV0dGUocGFsZXR0ZUlucHV0KTtcbiAgdmFyIGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoYnJlYWtwb2ludHNJbnB1dCk7XG4gIHZhciBzcGFjaW5nID0gY3JlYXRlU3BhY2luZyhzcGFjaW5nSW5wdXQpO1xuICB2YXIgbXVpVGhlbWUgPSBkZWVwbWVyZ2Uoe1xuICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIG1peGluczogY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnNJbnB1dCksXG4gICAgb3ZlcnJpZGVzOiB7fSxcbiAgICAvLyBJbmplY3QgY3VzdG9tIHN0eWxlc1xuICAgIHBhbGV0dGU6IHBhbGV0dGUsXG4gICAgcHJvcHM6IHt9LFxuICAgIC8vIFByb3ZpZGUgZGVmYXVsdCBwcm9wc1xuICAgIHNoYWRvd3M6IHNoYWRvd3MsXG4gICAgdHlwb2dyYXBoeTogY3JlYXRlVHlwb2dyYXBoeShwYWxldHRlLCB0eXBvZ3JhcGh5SW5wdXQpLFxuICAgIHNwYWNpbmc6IHNwYWNpbmcsXG4gICAgc2hhcGU6IHNoYXBlLFxuICAgIHRyYW5zaXRpb25zOiB0cmFuc2l0aW9ucyxcbiAgICB6SW5kZXg6IHpJbmRleFxuICB9LCBvdGhlcik7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgbXVpVGhlbWUgPSBhcmdzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhcmd1bWVudCkge1xuICAgIHJldHVybiBkZWVwbWVyZ2UoYWNjLCBhcmd1bWVudCk7XG4gIH0sIG11aVRoZW1lKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBwc2V1ZG9DbGFzc2VzID0gWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZvY3VzZWQnLCAnZm9jdXNWaXNpYmxlJywgJ3JlcXVpcmVkJywgJ2V4cGFuZGVkJywgJ3NlbGVjdGVkJ107XG5cbiAgICB2YXIgdHJhdmVyc2UgPSBmdW5jdGlvbiB0cmF2ZXJzZShub2RlLCBwYXJlbnRLZXkpIHtcbiAgICAgIHZhciBkZXB0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcbiAgICAgIHZhciBrZXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cbiAgICAgIGZvciAoa2V5IGluIG5vZGUpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtrZXldO1xuXG4gICAgICAgIGlmIChkZXB0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignTXVpJykgPT09IDAgJiYgY2hpbGQpIHtcbiAgICAgICAgICAgIHRyYXZlcnNlKGNoaWxkLCBrZXksIGRlcHRoICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBzZXVkb0NsYXNzZXMuaW5kZXhPZihrZXkpICE9PSAtMSAmJiBPYmplY3Qua2V5cyhjaGlsZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgYFwiLmNvbmNhdChwYXJlbnRLZXksIFwiYCBjb21wb25lbnQgaW5jcmVhc2VzIFwiKSArIFwidGhlIENTUyBzcGVjaWZpY2l0eSBvZiB0aGUgYFwiLmNvbmNhdChrZXksIFwiYCBpbnRlcm5hbCBzdGF0ZS5cIiksICdZb3UgY2FuIG5vdCBvdmVycmlkZSBpdCBsaWtlIHRoaXM6ICcsIEpTT04uc3RyaW5naWZ5KG5vZGUsIG51bGwsIDIpLCAnJywgJ0luc3RlYWQsIHlvdSBuZWVkIHRvIHVzZSB0aGUgJHJ1bGVOYW1lIHN5bnRheDonLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHJvb3Q6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCImJFwiLmNvbmNhdChrZXkpLCBjaGlsZClcbiAgICAgICAgICAgIH0sIG51bGwsIDIpLCAnJywgJ2h0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvcHNldWRvLWNsYXNzZXMtZ3VpZGUnXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfSAvLyBSZW1vdmUgdGhlIHN0eWxlIHRvIHByZXZlbnQgZ2xvYmFsIGNvbmZsaWN0cy5cblxuXG4gICAgICAgICAgbm9kZVtrZXldID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJhdmVyc2UobXVpVGhlbWUub3ZlcnJpZGVzKTtcbiAgfVxuXG4gIHJldHVybiBtdWlUaGVtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTXVpVGhlbWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb2xvcnMvY29tbW9uJztcbmltcG9ydCBncmV5IGZyb20gJy4uL2NvbG9ycy9ncmV5JztcbmltcG9ydCBpbmRpZ28gZnJvbSAnLi4vY29sb3JzL2luZGlnbyc7XG5pbXBvcnQgcGluayBmcm9tICcuLi9jb2xvcnMvcGluayc7XG5pbXBvcnQgcmVkIGZyb20gJy4uL2NvbG9ycy9yZWQnO1xuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi9jb2xvcnMvb3JhbmdlJztcbmltcG9ydCBibHVlIGZyb20gJy4uL2NvbG9ycy9ibHVlJztcbmltcG9ydCBncmVlbiBmcm9tICcuLi9jb2xvcnMvZ3JlZW4nO1xuaW1wb3J0IHsgZGFya2VuLCBnZXRDb250cmFzdFJhdGlvLCBsaWdodGVuIH0gZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB2YXIgbGlnaHQgPSB7XG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgdGV4dC5cbiAgdGV4dDoge1xuICAgIC8vIFRoZSBtb3N0IGltcG9ydGFudCB0ZXh0LlxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICAvLyBTZWNvbmRhcnkgdGV4dC5cbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBEaXNhYmxlZCB0ZXh0IGhhdmUgZXZlbiBsb3dlciB2aXN1YWwgcHJvbWluZW5jZS5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIC8vIFRleHQgaGludHMuXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH0sXG4gIC8vIFRoZSBjb2xvciB1c2VkIHRvIGRpdmlkZSBkaWZmZXJlbnQgZWxlbWVudHMuXG4gIGRpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHN1cmZhY2VzLlxuICAvLyBDb25zaXN0ZW5jeSBiZXR3ZWVuIHRoZXNlIHZhbHVlcyBpcyBpbXBvcnRhbnQuXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogY29tbW9uLndoaXRlLFxuICAgIGRlZmF1bHQ6IGdyZXlbNTBdXG4gIH0sXG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgYWN0aW9uIGVsZW1lbnRzLlxuICBhY3Rpb246IHtcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gYWN0aXZlIGFjdGlvbiBsaWtlIGFuIGljb24gYnV0dG9uLlxuICAgIGFjdGl2ZTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBob3ZlcmVkIGFjdGlvbi5cbiAgICBob3ZlcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wNCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBzZWxlY3RlZCBhY3Rpb24uXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMDgsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gICAgLy8gVGhlIGJhY2tncm91bmQgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMTJcbiAgfVxufTtcbmV4cG9ydCB2YXIgZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IGNvbW1vbi53aGl0ZSxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9LFxuICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogZ3JleVs4MDBdLFxuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJ1xuICB9LFxuICBhY3Rpb246IHtcbiAgICBhY3RpdmU6IGNvbW1vbi53aGl0ZSxcbiAgICBob3ZlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wOCxcbiAgICBzZWxlY3RlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4xNixcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMjRcbiAgfVxufTtcblxuZnVuY3Rpb24gYWRkTGlnaHRPckRhcmsoaW50ZW50LCBkaXJlY3Rpb24sIHNoYWRlLCB0b25hbE9mZnNldCkge1xuICB2YXIgdG9uYWxPZmZzZXRMaWdodCA9IHRvbmFsT2Zmc2V0LmxpZ2h0IHx8IHRvbmFsT2Zmc2V0O1xuICB2YXIgdG9uYWxPZmZzZXREYXJrID0gdG9uYWxPZmZzZXQuZGFyayB8fCB0b25hbE9mZnNldCAqIDEuNTtcblxuICBpZiAoIWludGVudFtkaXJlY3Rpb25dKSB7XG4gICAgaWYgKGludGVudC5oYXNPd25Qcm9wZXJ0eShzaGFkZSkpIHtcbiAgICAgIGludGVudFtkaXJlY3Rpb25dID0gaW50ZW50W3NoYWRlXTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xpZ2h0Jykge1xuICAgICAgaW50ZW50LmxpZ2h0ID0gbGlnaHRlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXRMaWdodCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgICAgaW50ZW50LmRhcmsgPSBkYXJrZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0RGFyayk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUocGFsZXR0ZSkge1xuICB2YXIgX3BhbGV0dGUkcHJpbWFyeSA9IHBhbGV0dGUucHJpbWFyeSxcbiAgICAgIHByaW1hcnkgPSBfcGFsZXR0ZSRwcmltYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGluZGlnb1szMDBdLFxuICAgIG1haW46IGluZGlnb1s1MDBdLFxuICAgIGRhcms6IGluZGlnb1s3MDBdXG4gIH0gOiBfcGFsZXR0ZSRwcmltYXJ5LFxuICAgICAgX3BhbGV0dGUkc2Vjb25kYXJ5ID0gcGFsZXR0ZS5zZWNvbmRhcnksXG4gICAgICBzZWNvbmRhcnkgPSBfcGFsZXR0ZSRzZWNvbmRhcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcGluay5BMjAwLFxuICAgIG1haW46IHBpbmsuQTQwMCxcbiAgICBkYXJrOiBwaW5rLkE3MDBcbiAgfSA6IF9wYWxldHRlJHNlY29uZGFyeSxcbiAgICAgIF9wYWxldHRlJGVycm9yID0gcGFsZXR0ZS5lcnJvcixcbiAgICAgIGVycm9yID0gX3BhbGV0dGUkZXJyb3IgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcmVkWzMwMF0sXG4gICAgbWFpbjogcmVkWzUwMF0sXG4gICAgZGFyazogcmVkWzcwMF1cbiAgfSA6IF9wYWxldHRlJGVycm9yLFxuICAgICAgX3BhbGV0dGUkd2FybmluZyA9IHBhbGV0dGUud2FybmluZyxcbiAgICAgIHdhcm5pbmcgPSBfcGFsZXR0ZSR3YXJuaW5nID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IG9yYW5nZVszMDBdLFxuICAgIG1haW46IG9yYW5nZVs1MDBdLFxuICAgIGRhcms6IG9yYW5nZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSR3YXJuaW5nLFxuICAgICAgX3BhbGV0dGUkaW5mbyA9IHBhbGV0dGUuaW5mbyxcbiAgICAgIGluZm8gPSBfcGFsZXR0ZSRpbmZvID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGJsdWVbMzAwXSxcbiAgICBtYWluOiBibHVlWzUwMF0sXG4gICAgZGFyazogYmx1ZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRpbmZvLFxuICAgICAgX3BhbGV0dGUkc3VjY2VzcyA9IHBhbGV0dGUuc3VjY2VzcyxcbiAgICAgIHN1Y2Nlc3MgPSBfcGFsZXR0ZSRzdWNjZXNzID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGdyZWVuWzMwMF0sXG4gICAgbWFpbjogZ3JlZW5bNTAwXSxcbiAgICBkYXJrOiBncmVlbls3MDBdXG4gIH0gOiBfcGFsZXR0ZSRzdWNjZXNzLFxuICAgICAgX3BhbGV0dGUkdHlwZSA9IHBhbGV0dGUudHlwZSxcbiAgICAgIHR5cGUgPSBfcGFsZXR0ZSR0eXBlID09PSB2b2lkIDAgPyAnbGlnaHQnIDogX3BhbGV0dGUkdHlwZSxcbiAgICAgIF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9IHBhbGV0dGUuY29udHJhc3RUaHJlc2hvbGQsXG4gICAgICBjb250cmFzdFRocmVzaG9sZCA9IF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9PT0gdm9pZCAwID8gMyA6IF9wYWxldHRlJGNvbnRyYXN0VGhyZSxcbiAgICAgIF9wYWxldHRlJHRvbmFsT2Zmc2V0ID0gcGFsZXR0ZS50b25hbE9mZnNldCxcbiAgICAgIHRvbmFsT2Zmc2V0ID0gX3BhbGV0dGUkdG9uYWxPZmZzZXQgPT09IHZvaWQgMCA/IDAuMiA6IF9wYWxldHRlJHRvbmFsT2Zmc2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGFsZXR0ZSwgW1wicHJpbWFyeVwiLCBcInNlY29uZGFyeVwiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwidHlwZVwiLCBcImNvbnRyYXN0VGhyZXNob2xkXCIsIFwidG9uYWxPZmZzZXRcIl0pOyAvLyBVc2UgdGhlIHNhbWUgbG9naWMgYXNcbiAgLy8gQm9vdHN0cmFwOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8xZDZlMzcxMGRkNDQ3ZGUxYTIwMGYyOWU4ZmE1MjFmOGEwOTA4ZjcwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzI0w1OVxuICAvLyBhbmQgbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9hYzQ2Yjg4NjNjNGRhYjlmYzIyYzRjNjYyZGM2YmQxYjY1ZGQ2NTJmL3BhY2thZ2VzL21kYy10aGVtZS9fZnVuY3Rpb25zLnNjc3MjTDU0XG5cblxuICBmdW5jdGlvbiBnZXRDb250cmFzdFRleHQoYmFja2dyb3VuZCkge1xuICAgIHZhciBjb250cmFzdFRleHQgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGRhcmsudGV4dC5wcmltYXJ5KSA+PSBjb250cmFzdFRocmVzaG9sZCA/IGRhcmsudGV4dC5wcmltYXJ5IDogbGlnaHQudGV4dC5wcmltYXJ5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBjb250cmFzdCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgY29udHJhc3RUZXh0KTtcblxuICAgICAgaWYgKGNvbnRyYXN0IDwgMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgY29udHJhc3QgcmF0aW8gb2YgXCIuY29uY2F0KGNvbnRyYXN0LCBcIjoxIGZvciBcIikuY29uY2F0KGNvbnRyYXN0VGV4dCwgXCIgb24gXCIpLmNvbmNhdChiYWNrZ3JvdW5kKSwgJ2ZhbGxzIGJlbG93IHRoZSBXQ0FHIHJlY29tbWVuZGVkIGFic29sdXRlIG1pbmltdW0gY29udHJhc3QgcmF0aW8gb2YgMzoxLicsICdodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3QnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0VGV4dDtcbiAgfVxuXG4gIHZhciBhdWdtZW50Q29sb3IgPSBmdW5jdGlvbiBhdWdtZW50Q29sb3IoY29sb3IpIHtcbiAgICB2YXIgbWFpblNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgdmFyIGxpZ2h0U2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMwMDtcbiAgICB2YXIgZGFya1NoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiA3MDA7XG4gICAgY29sb3IgPSBfZXh0ZW5kcyh7fSwgY29sb3IpO1xuXG4gICAgaWYgKCFjb2xvci5tYWluICYmIGNvbG9yW21haW5TaGFkZV0pIHtcbiAgICAgIGNvbG9yLm1haW4gPSBjb2xvclttYWluU2hhZGVdO1xuICAgIH1cblxuICAgIGlmICghY29sb3IubWFpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuVGhlIGNvbG9yIG9iamVjdCBuZWVkcyB0byBoYXZlIGEgYG1haW5gIHByb3BlcnR5IG9yIGEgYFwiLmNvbmNhdChtYWluU2hhZGUsIFwiYCBwcm9wZXJ0eS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDQsIG1haW5TaGFkZSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IubWFpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcbmBjb2xvci5tYWluYCBzaG91bGQgYmUgYSBzdHJpbmcsIGJ1dCBgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pLCBcImAgd2FzIHByb3ZpZGVkIGluc3RlYWQuXFxuXFxuRGlkIHlvdSBpbnRlbmQgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoZXM/XFxuXFxuaW1wb3J0IHtcXHhBMGdyZWVuIH0gZnJvbSBcXFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXFxcIjtcXG5cXG5jb25zdCB0aGVtZTEgPSBjcmVhdGVNdWlUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IGdyZWVuLFxcbn0gfSk7XFxuXFxuY29uc3QgdGhlbWUyID0gY3JlYXRlTXVpVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiB7IG1haW46IGdyZWVuWzUwMF0gfSxcXG59IH0pO1wiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNSwgSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbikpKTtcbiAgICB9XG5cbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2xpZ2h0JywgbGlnaHRTaGFkZSwgdG9uYWxPZmZzZXQpO1xuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnZGFyaycsIGRhcmtTaGFkZSwgdG9uYWxPZmZzZXQpO1xuXG4gICAgaWYgKCFjb2xvci5jb250cmFzdFRleHQpIHtcbiAgICAgIGNvbG9yLmNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0VGV4dChjb2xvci5tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH07XG5cbiAgdmFyIHR5cGVzID0ge1xuICAgIGRhcms6IGRhcmssXG4gICAgbGlnaHQ6IGxpZ2h0XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXR5cGVzW3R5cGVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBwYWxldHRlIHR5cGUgYFwiLmNvbmNhdCh0eXBlLCBcImAgaXMgbm90IHN1cHBvcnRlZC5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYWxldHRlT3V0cHV0ID0gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgY29tbW9uIGNvbG9ycy5cbiAgICBjb21tb246IGNvbW1vbixcbiAgICAvLyBUaGUgcGFsZXR0ZSB0eXBlLCBjYW4gYmUgbGlnaHQgb3IgZGFyay5cbiAgICB0eXBlOiB0eXBlLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcHJpbWFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBwcmltYXJ5OiBhdWdtZW50Q29sb3IocHJpbWFyeSksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBzZWNvbmRhcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgc2Vjb25kYXJ5OiBhdWdtZW50Q29sb3Ioc2Vjb25kYXJ5LCAnQTQwMCcsICdBMjAwJywgJ0E3MDAnKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHRoZSB1c2VyIHNob3VsZCBiZSBtYWRlIGF3YXJlIG9mLlxuICAgIGVycm9yOiBhdWdtZW50Q29sb3IoZXJyb3IpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGFjdGlvbnMgb3IgaW1wb3J0YW50IG1lc3NhZ2VzLlxuICAgIHdhcm5pbmc6IGF1Z21lbnRDb2xvcih3YXJuaW5nKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcHJlc2VudCBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB0aGF0IGlzIG5ldXRyYWwgYW5kIG5vdCBuZWNlc3NhcmlseSBpbXBvcnRhbnQuXG4gICAgaW5mbzogYXVnbWVudENvbG9yKGluZm8pLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIGFuIGFjdGlvbiB0aGF0IHVzZXIgdHJpZ2dlcmVkLlxuICAgIHN1Y2Nlc3M6IGF1Z21lbnRDb2xvcihzdWNjZXNzKSxcbiAgICAvLyBUaGUgZ3JleSBjb2xvcnMuXG4gICAgZ3JleTogZ3JleSxcbiAgICAvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW5cbiAgICAvLyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQuXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IGNvbnRyYXN0VGhyZXNob2xkLFxuICAgIC8vIFRha2VzIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgcmV0dXJucyB0aGUgdGV4dCBjb2xvciB0aGF0IG1heGltaXplcyB0aGUgY29udHJhc3QuXG4gICAgZ2V0Q29udHJhc3RUZXh0OiBnZXRDb250cmFzdFRleHQsXG4gICAgLy8gR2VuZXJhdGUgYSByaWNoIGNvbG9yIG9iamVjdC5cbiAgICBhdWdtZW50Q29sb3I6IGF1Z21lbnRDb2xvcixcbiAgICAvLyBVc2VkIGJ5IHRoZSBmdW5jdGlvbnMgYmVsb3cgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxuICAgIC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXG4gICAgdG9uYWxPZmZzZXQ6IHRvbmFsT2Zmc2V0XG4gIH0sIHR5cGVzW3R5cGVdKSwgb3RoZXIpO1xuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVbmFyeVNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcbnZhciB3YXJuT25jZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNpbmcoKSB7XG4gIHZhciBzcGFjaW5nSW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDg7XG5cbiAgLy8gQWxyZWFkeSB0cmFuc2Zvcm1lZC5cbiAgaWYgKHNwYWNpbmdJbnB1dC5tdWkpIHtcbiAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICB9IC8vIE1hdGVyaWFsIERlc2lnbiBsYXlvdXRzIGFyZSB2aXN1YWxseSBiYWxhbmNlZC4gTW9zdCBtZWFzdXJlbWVudHMgYWxpZ24gdG8gYW4gOGRwIGdyaWQgYXBwbGllZCwgd2hpY2ggYWxpZ25zIGJvdGggc3BhY2luZyBhbmQgdGhlIG92ZXJhbGwgbGF5b3V0LlxuICAvLyBTbWFsbGVyIGNvbXBvbmVudHMsIHN1Y2ggYXMgaWNvbnMgYW5kIHR5cGUsIGNhbiBhbGlnbiB0byBhIDRkcCBncmlkLlxuICAvLyBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9sYXlvdXQvdW5kZXJzdGFuZGluZy1sYXlvdXQuaHRtbCN1c2FnZVxuXG5cbiAgdmFyIHRyYW5zZm9ybSA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh7XG4gICAgc3BhY2luZzogc3BhY2luZ0lucHV0XG4gIH0pO1xuXG4gIHZhciBzcGFjaW5nID0gZnVuY3Rpb24gc3BhY2luZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGFyZ3MubGVuZ3RoIDw9IDQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLCBleHBlY3RlZCBiZXR3ZWVuIDAgYW5kIDQsIGdvdCBcIi5jb25jYXQoYXJncy5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oMSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFyZ3NbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dHB1dCA9IHRyYW5zZm9ybShhcmd1bWVudCk7XG4gICAgICByZXR1cm4gdHlwZW9mIG91dHB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChvdXRwdXQsIFwicHhcIikgOiBvdXRwdXQ7XG4gICAgfSkuam9pbignICcpO1xuICB9OyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0byByZW1vdmUgaW4gdjUuXG5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3BhY2luZywgJ3VuaXQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXdhcm5PbmNlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLnNwYWNpbmcudW5pdCB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLicsICdJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuJywgJ1lvdSBjYW4gcmVwbGFjZSBgdGhlbWUuc3BhY2luZy51bml0ICogeWAgd2l0aCBgdGhlbWUuc3BhY2luZyh5KWAuJywgJycsICdZb3UgY2FuIHVzZSB0aGUgYGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpLWNvZGVtb2QvUkVBRE1FLm1kI3RoZW1lLXNwYWNpbmctYXBpYCBtaWdyYXRpb24gaGVscGVyIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fybk9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICAgIH1cbiAgfSk7XG4gIHNwYWNpbmcubXVpID0gdHJ1ZTtcbiAgcmV0dXJuIHNwYWNpbmc7XG59IiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVzIGFzIGNyZWF0ZVN0eWxlc09yaWdpbmFsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7IC8vIGxldCB3YXJuT25jZSA9IGZhbHNlO1xuLy8gVG8gcmVtb3ZlIGluIHY1XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgLy8gd2FybmluZyhcbiAgLy8gICB3YXJuT25jZSxcbiAgLy8gICBbXG4gIC8vICAgICAnTWF0ZXJpYWwtVUk6IGNyZWF0ZVN0eWxlcyBmcm9tIEBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyBpcyBkZXByZWNhdGVkLicsXG4gIC8vICAgICAnUGxlYXNlIHVzZSBAbWF0ZXJpYWwtdWkvc3R5bGVzL2NyZWF0ZVN0eWxlcycsXG4gIC8vICAgXS5qb2luKCdcXG4nKSxcbiAgLy8gKTtcbiAgLy8gd2Fybk9uY2UgPSB0cnVlO1xuICByZXR1cm4gY3JlYXRlU3R5bGVzT3JpZ2luYWwoc3R5bGVzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuXG5mdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDFlNSkgLyAxZTU7XG59XG5cbnZhciBjYXNlQWxsQ2FwcyA9IHtcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbn07XG52YXIgZGVmYXVsdEZvbnRGYW1pbHkgPSAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJztcbi8qKlxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3RoZS10eXBlLXN5c3RlbS5odG1sfVxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3VuZGVyc3RhbmRpbmctdHlwb2dyYXBoeS5odG1sfVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeSkge1xuICB2YXIgX3JlZiA9IHR5cGVvZiB0eXBvZ3JhcGh5ID09PSAnZnVuY3Rpb24nID8gdHlwb2dyYXBoeShwYWxldHRlKSA6IHR5cG9ncmFwaHksXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9udEZhbWlseSA6IF9yZWYkZm9udEZhbWlseSxcbiAgICAgIF9yZWYkZm9udFNpemUgPSBfcmVmLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcmVmJGZvbnRTaXplID09PSB2b2lkIDAgPyAxNCA6IF9yZWYkZm9udFNpemUsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRMaWdodCA9IF9yZWYuZm9udFdlaWdodExpZ2h0LFxuICAgICAgZm9udFdlaWdodExpZ2h0ID0gX3JlZiRmb250V2VpZ2h0TGlnaHQgPT09IHZvaWQgMCA/IDMwMCA6IF9yZWYkZm9udFdlaWdodExpZ2h0LFxuICAgICAgX3JlZiRmb250V2VpZ2h0UmVndWxhID0gX3JlZi5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRXZWlnaHRSZWd1bGFyID0gX3JlZiRmb250V2VpZ2h0UmVndWxhID09PSB2b2lkIDAgPyA0MDAgOiBfcmVmJGZvbnRXZWlnaHRSZWd1bGEsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmLmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0TWVkaXVtID0gX3JlZiRmb250V2VpZ2h0TWVkaXVtID09PSB2b2lkIDAgPyA1MDAgOiBfcmVmJGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBfcmVmJGZvbnRXZWlnaHRCb2xkID0gX3JlZi5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIGZvbnRXZWlnaHRCb2xkID0gX3JlZiRmb250V2VpZ2h0Qm9sZCA9PT0gdm9pZCAwID8gNzAwIDogX3JlZiRmb250V2VpZ2h0Qm9sZCxcbiAgICAgIF9yZWYkaHRtbEZvbnRTaXplID0gX3JlZi5odG1sRm9udFNpemUsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmJGh0bWxGb250U2l6ZSA9PT0gdm9pZCAwID8gMTYgOiBfcmVmJGh0bWxGb250U2l6ZSxcbiAgICAgIGFsbFZhcmlhbnRzID0gX3JlZi5hbGxWYXJpYW50cyxcbiAgICAgIHB4VG9SZW0yID0gX3JlZi5weFRvUmVtLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwiZm9udFdlaWdodExpZ2h0XCIsIFwiZm9udFdlaWdodFJlZ3VsYXJcIiwgXCJmb250V2VpZ2h0TWVkaXVtXCIsIFwiZm9udFdlaWdodEJvbGRcIiwgXCJodG1sRm9udFNpemVcIiwgXCJhbGxWYXJpYW50c1wiLCBcInB4VG9SZW1cIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBmb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgZm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaHRtbEZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBodG1sRm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb2VmID0gZm9udFNpemUgLyAxNDtcblxuICB2YXIgcHhUb1JlbSA9IHB4VG9SZW0yIHx8IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNpemUgLyBodG1sRm9udFNpemUgKiBjb2VmLCBcInJlbVwiKTtcbiAgfTtcblxuICB2YXIgYnVpbGRWYXJpYW50ID0gZnVuY3Rpb24gYnVpbGRWYXJpYW50KGZvbnRXZWlnaHQsIHNpemUsIGxpbmVIZWlnaHQsIGxldHRlclNwYWNpbmcsIGNhc2luZykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKHNpemUpLFxuICAgICAgLy8gVW5pdGxlc3MgZm9sbG93aW5nIGh0dHBzOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdGhvdWdodHMvMjAwNi8wMi8wOC91bml0bGVzcy1saW5lLWhlaWdodHMvXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0XG4gICAgfSwgZm9udEZhbWlseSA9PT0gZGVmYXVsdEZvbnRGYW1pbHkgPyB7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIlwiLmNvbmNhdChyb3VuZChsZXR0ZXJTcGFjaW5nIC8gc2l6ZSksIFwiZW1cIilcbiAgICB9IDoge30sIGNhc2luZywgYWxsVmFyaWFudHMpO1xuICB9O1xuXG4gIHZhciB2YXJpYW50cyA9IHtcbiAgICBoMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgOTYsIDEuMTY3LCAtMS41KSxcbiAgICBoMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgNjAsIDEuMiwgLTAuNSksXG4gICAgaDM6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgNDgsIDEuMTY3LCAwKSxcbiAgICBoNDogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAzNCwgMS4yMzUsIDAuMjUpLFxuICAgIGg1OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDI0LCAxLjMzNCwgMCksXG4gICAgaDY6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAyMCwgMS42LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNzUsIDAuMTUpLFxuICAgIHN1YnRpdGxlMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjU3LCAwLjEpLFxuICAgIGJvZHkxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjUsIDAuMTUpLFxuICAgIGJvZHkyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE0LCAxLjQzLCAwLjE1KSxcbiAgICBidXR0b246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS43NSwgMC40LCBjYXNlQWxsQ2FwcyksXG4gICAgY2FwdGlvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMS42NiwgMC40KSxcbiAgICBvdmVybGluZTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMi42NiwgMSwgY2FzZUFsbENhcHMpXG4gIH07XG4gIHJldHVybiBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIGh0bWxGb250U2l6ZTogaHRtbEZvbnRTaXplLFxuICAgIHB4VG9SZW06IHB4VG9SZW0sXG4gICAgcm91bmQ6IHJvdW5kLFxuICAgIC8vIFRPRE8gdjU6IHJlbW92ZVxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHRMaWdodDogZm9udFdlaWdodExpZ2h0LFxuICAgIGZvbnRXZWlnaHRSZWd1bGFyOiBmb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250V2VpZ2h0TWVkaXVtOiBmb250V2VpZ2h0TWVkaXVtLFxuICAgIGZvbnRXZWlnaHRCb2xkOiBmb250V2VpZ2h0Qm9sZFxuICB9LCB2YXJpYW50cyksIG90aGVyLCB7XG4gICAgY2xvbmU6IGZhbHNlIC8vIE5vIG5lZWQgdG8gY2xvbmUgZGVlcFxuXG4gIH0pO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gaXNVbml0bGVzcyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpKS5sZW5ndGggPT09IFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufSAvLyBQb3J0ZWQgZnJvbSBDb21wYXNzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vQ29tcGFzcy9jb21wYXNzL2Jsb2IvbWFzdGVyL2NvcmUvc3R5bGVzaGVldHMvY29tcGFzcy90eXBvZ3JhcGh5L191bml0cy5zY3NzXG4vLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQpLm1hdGNoKC9bXFxkLlxcLStdKlxccyooLiopLylbMV0gfHwgJyc7XG59IC8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0bGVzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXRsZXNzKGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChsZW5ndGgpO1xufSAvLyBDb252ZXJ0IGFueSBDU1MgPGxlbmd0aD4gb3IgPHBlcmNlbnRhZ2U+IHZhbHVlIHRvIGFueSBhbm90aGVyLlxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vS3lsZUFNYXRoZXdzL2NvbnZlcnQtY3NzLWxlbmd0aFxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlbmd0aChiYXNlRm9udFNpemUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChsZW5ndGgsIHRvVW5pdCkge1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQobGVuZ3RoKTsgLy8gT3B0aW1pemUgZm9yIGNhc2VzIHdoZXJlIGBmcm9tYCBhbmQgYHRvYCB1bml0cyBhcmUgYWNjaWRlbnRhbGx5IHRoZSBzYW1lLlxuXG4gICAgaWYgKGZyb21Vbml0ID09PSB0b1VuaXQpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSAvLyBDb252ZXJ0IGlucHV0IGxlbmd0aCB0byBwaXhlbHMuXG5cblxuICAgIHZhciBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKTtcblxuICAgIGlmIChmcm9tVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKGZyb21Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChmcm9tVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfSAvLyBDb252ZXJ0IGxlbmd0aCBpbiBwaXhlbHMgdG8gdGhlIG91dHB1dCB1bml0XG5cblxuICAgIHZhciBvdXRwdXRMZW5ndGggPSBweExlbmd0aDtcblxuICAgIGlmICh0b1VuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmICh0b1VuaXQgPT09ICdlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG91dHB1dExlbmd0aC50b0ZpeGVkKDUpKSArIHRvVW5pdDtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbGlnblByb3BlcnR5KF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBncmlkID0gX3JlZi5ncmlkO1xuICB2YXIgc2l6ZUJlbG93ID0gc2l6ZSAtIHNpemUgJSBncmlkO1xuICB2YXIgc2l6ZUFib3ZlID0gc2l6ZUJlbG93ICsgZ3JpZDtcbiAgcmV0dXJuIHNpemUgLSBzaXplQmVsb3cgPCBzaXplQWJvdmUgLSBzaXplID8gc2l6ZUJlbG93IDogc2l6ZUFib3ZlO1xufSAvLyBmb250R3JpZCBmaW5kcyBhIG1pbmltYWwgZ3JpZCAoaW4gcmVtKSBmb3IgdGhlIGZvbnRTaXplIHZhbHVlcyBzbyB0aGF0IHRoZVxuLy8gbGluZUhlaWdodCBmYWxscyB1bmRlciBhIHggcGl4ZWxzIGdyaWQsIDRweCBpbiB0aGUgY2FzZSBvZiBNYXRlcmlhbCBEZXNpZ24sXG4vLyB3aXRob3V0IGNoYW5naW5nIHRoZSByZWxhdGl2ZSBsaW5lIGhlaWdodFxuXG5leHBvcnQgZnVuY3Rpb24gZm9udEdyaWQoX3JlZjIpIHtcbiAgdmFyIGxpbmVIZWlnaHQgPSBfcmVmMi5saW5lSGVpZ2h0LFxuICAgICAgcGl4ZWxzID0gX3JlZjIucGl4ZWxzLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZjIuaHRtbEZvbnRTaXplO1xuICByZXR1cm4gcGl4ZWxzIC8gKGxpbmVIZWlnaHQgKiBodG1sRm9udFNpemUpO1xufVxuLyoqXG4gKiBnZW5lcmF0ZSBhIHJlc3BvbnNpdmUgdmVyc2lvbiBvZiBhIGdpdmVuIENTUyBwcm9wZXJ0eVxuICogQGV4YW1wbGVcbiAqIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gKiAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICogICBtaW46IDE1LFxuICogICBtYXg6IDIwLFxuICogICB1bml0OiAncHgnLFxuICogICBicmVha3BvaW50czogWzMwMCwgNjAwXSxcbiAqIH0pXG4gKlxuICogLy8gdGhpcyByZXR1cm5zXG4gKlxuICoge1xuICogICBmb250U2l6ZTogJzE1cHgnLFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMTcuNXB4JyxcbiAqICAgfSxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjYwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzIwcHgnLFxuICogICB9LFxuICogfVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzUHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IHRvIGJlIG1hZGUgcmVzcG9uc2l2ZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5taW4gLSBUaGUgc21hbGxlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5tYXggLSBUaGUgbGFyZ2VzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy51bml0XSAtIFRoZSB1bml0IHRvIGJlIHVzZWQgZm9yIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7QXJyYXkubnVtYmVyfSBbcGFyYW1zLmJyZWFrcG9pbnRzXSAgLSBBbiBhcnJheSBvZiBicmVha3BvaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuYWxpZ25TdGVwXSAtIFJvdW5kIHNjYWxlZCB2YWx1ZSB0byBmYWxsIHVuZGVyIHRoaXMgZ3JpZFxuICogQHJldHVybnMge09iamVjdH0gcmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHtwYXJhbXMuY3NzUHJvcGVydHl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wZXJ0eShfcmVmMykge1xuICB2YXIgY3NzUHJvcGVydHkgPSBfcmVmMy5jc3NQcm9wZXJ0eSxcbiAgICAgIG1pbiA9IF9yZWYzLm1pbixcbiAgICAgIG1heCA9IF9yZWYzLm1heCxcbiAgICAgIF9yZWYzJHVuaXQgPSBfcmVmMy51bml0LFxuICAgICAgdW5pdCA9IF9yZWYzJHVuaXQgPT09IHZvaWQgMCA/ICdyZW0nIDogX3JlZjMkdW5pdCxcbiAgICAgIF9yZWYzJGJyZWFrcG9pbnRzID0gX3JlZjMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9yZWYzJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbNjAwLCA5NjAsIDEyODBdIDogX3JlZjMkYnJlYWtwb2ludHMsXG4gICAgICBfcmVmMyR0cmFuc2Zvcm0gPSBfcmVmMy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmMyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyR0cmFuc2Zvcm07XG5cbiAgdmFyIG91dHB1dCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KG1pbikuY29uY2F0KHVuaXQpKTtcblxuICB2YXIgZmFjdG9yID0gKG1heCAtIG1pbikgLyBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcbiAgYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgIHZhciB2YWx1ZSA9IG1pbiArIGZhY3RvciAqIGJyZWFrcG9pbnQ7XG5cbiAgICBpZiAodHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb3V0cHV0W1wiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KGJyZWFrcG9pbnQsIFwicHgpXCIpXSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KE1hdGgucm91bmQodmFsdWUgKiAxMDAwMCkgLyAxMDAwMCkuY29uY2F0KHVuaXQpKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiaW1wb3J0IGNyZWF0ZU11aVRoZW1lIGZyb20gJy4vY3JlYXRlTXVpVGhlbWUnO1xudmFyIGRlZmF1bHRUaGVtZSA9IGNyZWF0ZU11aVRoZW1lKCk7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VGhlbWU7IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVRoZW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSB9IGZyb20gJy4vY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3R5bGVzIH0gZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYWtlU3R5bGVzIH0gZnJvbSAnLi9tYWtlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gJy4vcmVzcG9uc2l2ZUZvbnRTaXplcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlZCB9IGZyb20gJy4vc3R5bGVkJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaGVtZSB9IGZyb20gJy4vdXNlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoU3R5bGVzIH0gZnJvbSAnLi93aXRoU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFRoZW1lIH0gZnJvbSAnLi93aXRoVGhlbWUnO1xuZXhwb3J0IHsgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUsIGpzc1ByZXNldCwgU2VydmVyU3R5bGVTaGVldHMsIFN0eWxlc1Byb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIGFzIE11aVRoZW1lUHJvdmlkZXIsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgYXMgbWFrZVN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICByZXR1cm4gbWFrZVN0eWxlc1dpdGhvdXREZWZhdWx0KHN0eWxlc09yQ3JlYXRvciwgX2V4dGVuZHMoe1xuICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlczsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0IHsgaXNVbml0bGVzcywgY29udmVydExlbmd0aCwgcmVzcG9uc2l2ZVByb3BlcnR5LCBhbGlnblByb3BlcnR5LCBmb250R3JpZCB9IGZyb20gJy4vY3NzVXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZUlucHV0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzID0gX29wdGlvbnMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IFsnc20nLCAnbWQnLCAnbGcnXSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkZGlzYWJsZUFsaWduID0gb3B0aW9ucy5kaXNhYmxlQWxpZ24sXG4gICAgICBkaXNhYmxlQWxpZ24gPSBfb3B0aW9ucyRkaXNhYmxlQWxpZ24gPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZGlzYWJsZUFsaWduLFxuICAgICAgX29wdGlvbnMkZmFjdG9yID0gb3B0aW9ucy5mYWN0b3IsXG4gICAgICBmYWN0b3IgPSBfb3B0aW9ucyRmYWN0b3IgPT09IHZvaWQgMCA/IDIgOiBfb3B0aW9ucyRmYWN0b3IsXG4gICAgICBfb3B0aW9ucyR2YXJpYW50cyA9IG9wdGlvbnMudmFyaWFudHMsXG4gICAgICB2YXJpYW50cyA9IF9vcHRpb25zJHZhcmlhbnRzID09PSB2b2lkIDAgPyBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInLCAnY2FwdGlvbicsICdidXR0b24nLCAnb3ZlcmxpbmUnXSA6IF9vcHRpb25zJHZhcmlhbnRzO1xuXG4gIHZhciB0aGVtZSA9IF9leHRlbmRzKHt9LCB0aGVtZUlucHV0KTtcblxuICB0aGVtZS50eXBvZ3JhcGh5ID0gX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkpO1xuICB2YXIgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7IC8vIENvbnZlcnQgYmV0d2VlbiBjc3MgbGVuZ3RocyBlLmcuIGVtLT5weCBvciBweC0+cmVtXG4gIC8vIFNldCB0aGUgYmFzZUZvbnRTaXplIGZvciB5b3VyIHByb2plY3QuIERlZmF1bHRzIHRvIDE2cHggKGFsc28gdGhlIGJyb3dzZXIgZGVmYXVsdCkuXG5cbiAgdmFyIGNvbnZlcnQgPSBjb252ZXJ0TGVuZ3RoKHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplKTtcbiAgdmFyIGJyZWFrcG9pbnRWYWx1ZXMgPSBicmVha3BvaW50cy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzW3hdO1xuICB9KTtcbiAgdmFyaWFudHMuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFudCkge1xuICAgIHZhciBzdHlsZSA9IHR5cG9ncmFwaHlbdmFyaWFudF07XG4gICAgdmFyIHJlbUZvbnRTaXplID0gcGFyc2VGbG9hdChjb252ZXJ0KHN0eWxlLmZvbnRTaXplLCAncmVtJykpO1xuXG4gICAgaWYgKHJlbUZvbnRTaXplIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF4Rm9udFNpemUgPSByZW1Gb250U2l6ZTtcbiAgICB2YXIgbWluRm9udFNpemUgPSAxICsgKG1heEZvbnRTaXplIC0gMSkgLyBmYWN0b3I7XG4gICAgdmFyIGxpbmVIZWlnaHQgPSBzdHlsZS5saW5lSGVpZ2h0O1xuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpICYmICFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBub24tdW5pdGxlc3MgbGluZSBoZWlnaHQgd2l0aCBncmlkIGFsaWdubWVudC5cXG5Vc2UgdW5pdGxlc3MgbGluZSBoZWlnaHRzIGluc3RlYWQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDYpKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkpIHtcbiAgICAgIC8vIG1ha2UgaXQgdW5pdGxlc3NcbiAgICAgIGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbnZlcnQobGluZUhlaWdodCwgJ3JlbScpKSAvIHBhcnNlRmxvYXQocmVtRm9udFNpemUpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgaWYgKCFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYWxpZ25Qcm9wZXJ0eSh7XG4gICAgICAgICAgc2l6ZTogdmFsdWUsXG4gICAgICAgICAgZ3JpZDogZm9udEdyaWQoe1xuICAgICAgICAgICAgcGl4ZWxzOiA0LFxuICAgICAgICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodCxcbiAgICAgICAgICAgIGh0bWxGb250U2l6ZTogdHlwb2dyYXBoeS5odG1sRm9udFNpemVcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdHlwb2dyYXBoeVt2YXJpYW50XSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAgICAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICAgICAgbWluOiBtaW5Gb250U2l6ZSxcbiAgICAgIG1heDogbWF4Rm9udFNpemUsXG4gICAgICB1bml0OiAncmVtJyxcbiAgICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50VmFsdWVzLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gdGhlbWU7XG59IiwidmFyIHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbnZhciBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xudmFyIHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZG93KCkge1xuICByZXR1cm4gW1wiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1szXSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5VW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s0XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s1XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s2XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s3XSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s4XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s5XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTBdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxMV0sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5LCBcIilcIildLmpvaW4oJywnKTtcbn0gLy8gVmFsdWVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9iZTg3NDdmOTQ1NzQ2NjljYjVlN2FkZDFhN2M1NGZhNDFhODljZWM3L3BhY2thZ2VzL21kYy1lbGV2YXRpb24vX3ZhcmlhYmxlcy5zY3NzXG5cblxudmFyIHNoYWRvd3MgPSBbJ25vbmUnLCBjcmVhdGVTaGFkb3coMCwgMiwgMSwgLTEsIDAsIDEsIDEsIDAsIDAsIDEsIDMsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMSwgLTIsIDAsIDIsIDIsIDAsIDAsIDEsIDUsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMywgLTIsIDAsIDMsIDQsIDAsIDAsIDEsIDgsIDApLCBjcmVhdGVTaGFkb3coMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDEpLCBjcmVhdGVTaGFkb3coMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMiksIGNyZWF0ZVNoYWRvdygwLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyKSwgY3JlYXRlU2hhZG93KDAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzKSwgY3JlYXRlU2hhZG93KDAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzKSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0KSwgY3JlYXRlU2hhZG93KDAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDUpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2KSwgY3JlYXRlU2hhZG93KDAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNiksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDgpXTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvd3M7IiwidmFyIHNoYXBlID0ge1xuICBib3JkZXJSYWRpdXM6IDRcbn07XG5leHBvcnQgZGVmYXVsdCBzaGFwZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHN0eWxlZCBhcyBzdHlsZWRXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbnZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQoQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnRDcmVhdG9yID0gc3R5bGVkV2l0aG91dERlZmF1bHQoQ29tcG9uZW50KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHlsZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21wb25lbnRDcmVhdG9yKHN0eWxlLCBfZXh0ZW5kcyh7XG4gICAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICAgIH0sIG9wdGlvbnMpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZDsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuLy8gRm9sbG93IGh0dHBzOi8vbWF0ZXJpYWwuZ29vZ2xlLmNvbS9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLW5hdHVyYWwtZWFzaW5nLWN1cnZlc1xuLy8gdG8gbGVhcm4gdGhlIGNvbnRleHQgaW4gd2hpY2ggZWFjaCBlYXNpbmcgc2hvdWxkIGJlIHVzZWQuXG5leHBvcnQgdmFyIGVhc2luZyA9IHtcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBjb21tb24gZWFzaW5nIGN1cnZlLlxuICBlYXNlSW5PdXQ6ICdjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBlbnRlciB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkgZnJvbSBvZmYtc2NyZWVuIGFuZFxuICAvLyBzbG93bHkgZGVjZWxlcmF0ZSB0byBhIHJlc3RpbmcgcG9pbnQuXG4gIGVhc2VPdXQ6ICdjdWJpYy1iZXppZXIoMC4wLCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBsZWF2ZSB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkuIFRoZXkgZG8gbm90IGRlY2VsZXJhdGUgd2hlbiBvZmYtc2NyZWVuLlxuICBlYXNlSW46ICdjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKScsXG4gIC8vIFRoZSBzaGFycCBjdXJ2ZSBpcyB1c2VkIGJ5IG9iamVjdHMgdGhhdCBtYXkgcmV0dXJuIHRvIHRoZSBzY3JlZW4gYXQgYW55IHRpbWUuXG4gIHNoYXJwOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSdcbn07IC8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1jb21tb24tZHVyYXRpb25zXG4vLyB0byBsZWFybiB3aGVuIHVzZSB3aGF0IHRpbWluZ1xuXG5leHBvcnQgdmFyIGR1cmF0aW9uID0ge1xuICBzaG9ydGVzdDogMTUwLFxuICBzaG9ydGVyOiAyMDAsXG4gIHNob3J0OiAyNTAsXG4gIC8vIG1vc3QgYmFzaWMgcmVjb21tZW5kZWQgdGltaW5nXG4gIHN0YW5kYXJkOiAzMDAsXG4gIC8vIHRoaXMgaXMgdG8gYmUgdXNlZCBpbiBjb21wbGV4IGFuaW1hdGlvbnNcbiAgY29tcGxleDogMzc1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBlbnRlcmluZyBzY3JlZW5cbiAgZW50ZXJpbmdTY3JlZW46IDIyNSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgbGVhdmluZyBzY3JlZW5cbiAgbGVhdmluZ1NjcmVlbjogMTk1XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRNcyhtaWxsaXNlY29uZHMpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KE1hdGgucm91bmQobWlsbGlzZWNvbmRzKSwgXCJtc1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5wcm9wXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZHVyYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbS5kZWxheVxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNpbmc6IGVhc2luZyxcbiAgZHVyYXRpb246IGR1cmF0aW9uLFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnYWxsJ107XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgZHVyYXRpb25PcHRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdm9pZCAwID8gZHVyYXRpb24uc3RhbmRhcmQgOiBfb3B0aW9ucyRkdXJhdGlvbixcbiAgICAgICAgX29wdGlvbnMkZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIGVhc2luZ09wdGlvbiA9IF9vcHRpb25zJGVhc2luZyA9PT0gdm9pZCAwID8gZWFzaW5nLmVhc2VJbk91dCA6IF9vcHRpb25zJGVhc2luZyxcbiAgICAgICAgX29wdGlvbnMkZGVsYXkgPSBvcHRpb25zLmRlbGF5LFxuICAgICAgICBkZWxheSA9IF9vcHRpb25zJGRlbGF5ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkZGVsYXksXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImR1cmF0aW9uXCIsIFwiZWFzaW5nXCIsIFwiZGVsYXlcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgICAgfTtcblxuICAgICAgdmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKHByb3BzKSAmJiAhQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwicHJvcHNcIiBtdXN0IGJlIGEgc3RyaW5nIG9yIEFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGR1cmF0aW9uT3B0aW9uKSAmJiAhaXNTdHJpbmcoZHVyYXRpb25PcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogQXJndW1lbnQgXFxcImR1cmF0aW9uXFxcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nIGJ1dCBmb3VuZCBcIi5jb25jYXQoZHVyYXRpb25PcHRpb24sIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTdHJpbmcoZWFzaW5nT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJlYXNpbmdcIiBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGRlbGF5KSAmJiAhaXNTdHJpbmcoZGVsYXkpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImRlbGF5XCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKG90aGVyKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBVbnJlY29nbml6ZWQgYXJndW1lbnQocykgW1wiLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlcikuam9pbignLCcpLCBcIl0uXCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkocHJvcHMpID8gcHJvcHMgOiBbcHJvcHNdKS5tYXAoZnVuY3Rpb24gKGFuaW1hdGVkUHJvcCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGFuaW1hdGVkUHJvcCwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZHVyYXRpb25PcHRpb24gPT09ICdzdHJpbmcnID8gZHVyYXRpb25PcHRpb24gOiBmb3JtYXRNcyhkdXJhdGlvbk9wdGlvbiksIFwiIFwiKS5jb25jYXQoZWFzaW5nT3B0aW9uLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkZWxheSA9PT0gJ3N0cmluZycgPyBkZWxheSA6IGZvcm1hdE1zKGRlbGF5KSk7XG4gICAgfSkuam9pbignLCcpO1xuICB9LFxuICBnZXRBdXRvSGVpZ2h0RHVyYXRpb246IGZ1bmN0aW9uIGdldEF1dG9IZWlnaHREdXJhdGlvbihoZWlnaHQpIHtcbiAgICBpZiAoIWhlaWdodCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGNvbnN0YW50ID0gaGVpZ2h0IC8gMzY7IC8vIGh0dHBzOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9KDQrJTJCKzE1KyorKHgrJTJGKzM2KykrKiorMC4yNSslMkIrKHgrJTJGKzM2KSslMkYrNSkrKisxMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKDQgKyAxNSAqIE1hdGgucG93KGNvbnN0YW50LCAwLjI1KSArIGNvbnN0YW50IC8gNSkgKiAxMCk7XG4gIH1cbn07IiwiaW1wb3J0IHsgdXNlVGhlbWUgYXMgdXNlVGhlbWVXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lV2l0aG91dERlZmF1bHQoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgYXMgd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiaW1wb3J0IHsgd2l0aFRoZW1lQ3JlYXRvciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG52YXIgd2l0aFRoZW1lID0gd2l0aFRoZW1lQ3JlYXRvcih7XG4gIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZTsiLCIvLyBXZSBuZWVkIHRvIGNlbnRyYWxpemUgdGhlIHpJbmRleCBkZWZpbml0aW9ucyBhcyB0aGV5IHdvcmtcbi8vIGxpa2UgZ2xvYmFsIHZhbHVlcyBpbiB0aGUgYnJvd3Nlci5cbnZhciB6SW5kZXggPSB7XG4gIG1vYmlsZVN0ZXBwZXI6IDEwMDAsXG4gIHNwZWVkRGlhbDogMTA1MCxcbiAgYXBwQmFyOiAxMTAwLFxuICBkcmF3ZXI6IDEyMDAsXG4gIG1vZGFsOiAxMzAwLFxuICBzbmFja2JhcjogMTQwMCxcbiAgdG9vbHRpcDogMTUwMFxufTtcbmV4cG9ydCBkZWZhdWx0IHpJbmRleDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoZWV0c1JlZ2lzdHJ5IH0gZnJvbSAnanNzJztcbmltcG9ydCBTdHlsZXNQcm92aWRlciBmcm9tICcuLi9TdHlsZXNQcm92aWRlcic7XG5pbXBvcnQgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgZnJvbSAnLi4vY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnO1xuXG52YXIgU2VydmVyU3R5bGVTaGVldHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJTdHlsZVNoZWV0cygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyU3R5bGVTaGVldHMpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZXJ2ZXJTdHlsZVNoZWV0cywgW3tcbiAgICBrZXk6IFwiY29sbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb2xsZWN0KGNoaWxkcmVuKSB7XG4gICAgICAvLyBUaGlzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBkZWR1cGxpY2F0ZSB0aGUgaW5qZWN0aW9uIG9mIENTUyBpbiB0aGUgcGFnZS5cbiAgICAgIHZhciBzaGVldHNNYW5hZ2VyID0gbmV3IE1hcCgpOyAvLyBUaGlzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBpbmplY3QgdGhlIGNyaXRpY2FsIENTUy5cblxuICAgICAgdGhpcy5zaGVldHNSZWdpc3RyeSA9IG5ldyBTaGVldHNSZWdpc3RyeSgpOyAvLyBBIG5ldyBjbGFzcyBuYW1lIGdlbmVyYXRvclxuXG4gICAgICB2YXIgZ2VuZXJhdGVDbGFzc05hbWUgPSBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSgpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlc1Byb3ZpZGVyLCBfZXh0ZW5kcyh7XG4gICAgICAgIHNoZWV0c01hbmFnZXI6IHNoZWV0c01hbmFnZXIsXG4gICAgICAgIHNlcnZlckdlbmVyYXRlQ2xhc3NOYW1lOiBnZW5lcmF0ZUNsYXNzTmFtZSxcbiAgICAgICAgc2hlZXRzUmVnaXN0cnk6IHRoaXMuc2hlZXRzUmVnaXN0cnlcbiAgICAgIH0sIHRoaXMub3B0aW9ucyksIGNoaWxkcmVuKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaGVldHNSZWdpc3RyeSA/IHRoaXMuc2hlZXRzUmVnaXN0cnkudG9TdHJpbmcoKSA6ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdHlsZUVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3R5bGVFbGVtZW50KHByb3BzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgX2V4dGVuZHMoe1xuICAgICAgICBpZDogJ2pzcy1zZXJ2ZXItc2lkZScsXG4gICAgICAgIGtleTogJ2pzcy1zZXJ2ZXItc2lkZScsXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgX19odG1sOiB0aGlzLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgfSwgcHJvcHMpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VydmVyU3R5bGVTaGVldHM7XG59KCk7XG5cbmV4cG9ydCB7IFNlcnZlclN0eWxlU2hlZXRzIGFzIGRlZmF1bHQgfTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZXJ2ZXJTdHlsZVNoZWV0cyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lIGZyb20gJy4uL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lJztcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2pzcyc7XG5pbXBvcnQganNzUHJlc2V0IGZyb20gJy4uL2pzc1ByZXNldCc7IC8vIERlZmF1bHQgSlNTIGluc3RhbmNlLlxuXG52YXIganNzID0gY3JlYXRlKGpzc1ByZXNldCgpKTsgLy8gVXNlIGEgc2luZ2xldG9uIG9yIHRoZSBwcm92aWRlZCBvbmUgYnkgdGhlIGNvbnRleHQuXG4vL1xuLy8gVGhlIGNvdW50ZXItYmFzZWQgYXBwcm9hY2ggZG9lc24ndCB0b2xlcmF0ZSBhbnkgbWlzdGFrZS5cbi8vIEl0J3MgbXVjaCBzYWZlciB0byB1c2UgdGhlIHNhbWUgY291bnRlciBldmVyeXdoZXJlLlxuXG52YXIgZ2VuZXJhdGVDbGFzc05hbWUgPSBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSgpOyAvLyBFeHBvcnRlZCBmb3IgdGVzdCBwdXJwb3Nlc1xuXG5leHBvcnQgdmFyIHNoZWV0c01hbmFnZXIgPSBuZXcgTWFwKCk7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRpc2FibGVHZW5lcmF0aW9uOiBmYWxzZSxcbiAgZ2VuZXJhdGVDbGFzc05hbWU6IGdlbmVyYXRlQ2xhc3NOYW1lLFxuICBqc3M6IGpzcyxcbiAgc2hlZXRzQ2FjaGU6IG51bGwsXG4gIHNoZWV0c01hbmFnZXI6IHNoZWV0c01hbmFnZXIsXG4gIHNoZWV0c1JlZ2lzdHJ5OiBudWxsXG59O1xuZXhwb3J0IHZhciBTdHlsZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0T3B0aW9ucyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFN0eWxlc0NvbnRleHQuZGlzcGxheU5hbWUgPSAnU3R5bGVzQ29udGV4dCc7XG59XG5cbnZhciBpbmplY3RGaXJzdE5vZGU7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHlsZXNQcm92aWRlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRpbmplY3RGaXJzdCA9IHByb3BzLmluamVjdEZpcnN0LFxuICAgICAgaW5qZWN0Rmlyc3QgPSBfcHJvcHMkaW5qZWN0Rmlyc3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGluamVjdEZpcnN0LFxuICAgICAgX3Byb3BzJGRpc2FibGVHZW5lcmF0ID0gcHJvcHMuZGlzYWJsZUdlbmVyYXRpb24sXG4gICAgICBkaXNhYmxlR2VuZXJhdGlvbiA9IF9wcm9wcyRkaXNhYmxlR2VuZXJhdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUdlbmVyYXQsXG4gICAgICBsb2NhbE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiaW5qZWN0Rmlyc3RcIiwgXCJkaXNhYmxlR2VuZXJhdGlvblwiXSk7XG5cbiAgdmFyIG91dGVyT3B0aW9ucyA9IFJlYWN0LnVzZUNvbnRleHQoU3R5bGVzQ29udGV4dCk7XG5cbiAgdmFyIGNvbnRleHQgPSBfZXh0ZW5kcyh7fSwgb3V0ZXJPcHRpb25zLCB7XG4gICAgZGlzYWJsZUdlbmVyYXRpb246IGRpc2FibGVHZW5lcmF0aW9uXG4gIH0sIGxvY2FsT3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgIWNvbnRleHQuc2hlZXRzTWFuYWdlcikge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBuZWVkIHRvIHVzZSB0aGUgU2VydmVyU3R5bGVTaGVldHMgQVBJIHdoZW4gcmVuZGVyaW5nIG9uIHRoZSBzZXJ2ZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoY29udGV4dC5qc3Mub3B0aW9ucy5pbnNlcnRpb25Qb2ludCAmJiBpbmplY3RGaXJzdCkge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBjYW5ub3QgdXNlIGEgY3VzdG9tIGluc2VydGlvblBvaW50IGFuZCA8U3R5bGVzQ29udGV4dCBpbmplY3RGaXJzdD4gYXQgdGhlIHNhbWUgdGltZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpbmplY3RGaXJzdCAmJiBsb2NhbE9wdGlvbnMuanNzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IGNhbm5vdCB1c2UgdGhlIGpzcyBhbmQgaW5qZWN0Rmlyc3QgcHJvcHMgYXQgdGhlIHNhbWUgdGltZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRleHQuanNzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgJiYgaW5qZWN0Rmlyc3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoIWluamVjdEZpcnN0Tm9kZSkge1xuICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkO1xuICAgICAgaW5qZWN0Rmlyc3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbXVpLWluamVjdC1maXJzdCcpO1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoaW5qZWN0Rmlyc3ROb2RlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnRleHQuanNzID0gY3JlYXRlKHtcbiAgICAgIHBsdWdpbnM6IGpzc1ByZXNldCgpLnBsdWdpbnMsXG4gICAgICBpbnNlcnRpb25Qb2ludDogaW5qZWN0Rmlyc3ROb2RlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVzQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0XG4gIH0sIGNoaWxkcmVuKTtcbn1cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFN0eWxlc1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFlvdXIgY29tcG9uZW50IHRyZWUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogWW91IGNhbiBkaXNhYmxlIHRoZSBnZW5lcmF0aW9uIG9mIHRoZSBzdHlsZXMgd2l0aCB0aGlzIG9wdGlvbi5cbiAgICogSXQgY2FuIGJlIHVzZWZ1bCB3aGVuIHRyYXZlcnNpbmcgdGhlIFJlYWN0IHRyZWUgb3V0c2lkZSBvZiB0aGUgSFRNTFxuICAgKiByZW5kZXJpbmcgc3RlcCBvbiB0aGUgc2VydmVyLlxuICAgKiBMZXQncyBzYXkgeW91IGFyZSB1c2luZyByZWFjdC1hcG9sbG8gdG8gZXh0cmFjdCBhbGxcbiAgICogdGhlIHF1ZXJpZXMgbWFkZSBieSB0aGUgaW50ZXJmYWNlIHNlcnZlci1zaWRlIC0geW91IGNhbiBzaWduaWZpY2FudGx5IHNwZWVkIHVwIHRoZSB0cmF2ZXJzYWwgd2l0aCB0aGlzIHByb3AuXG4gICAqL1xuICBkaXNhYmxlR2VuZXJhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEpTUydzIGNsYXNzIG5hbWUgZ2VuZXJhdG9yLlxuICAgKi9cbiAgZ2VuZXJhdGVDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBsYXN0IGluIHRoZSA8aGVhZD4gZWxlbWVudCBvZiB0aGUgcGFnZS5cbiAgICogQXMgYSByZXN1bHQsIHRoZXkgZ2FpbiBtb3JlIHNwZWNpZmljaXR5IHRoYW4gYW55IG90aGVyIHN0eWxlIHNoZWV0LlxuICAgKiBJZiB5b3Ugd2FudCB0byBvdmVycmlkZSBNYXRlcmlhbC1VSSdzIHN0eWxlcywgc2V0IHRoaXMgcHJvcC5cbiAgICovXG4gIGluamVjdEZpcnN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSlNTJ3MgaW5zdGFuY2UuXG4gICAqL1xuICBqc3M6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNlcnZlckdlbmVyYXRlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBCZXRhIGZlYXR1cmUuXG4gICAqXG4gICAqIENhY2hlIGZvciB0aGUgc2hlZXRzLlxuICAgKi9cbiAgc2hlZXRzQ2FjaGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogVGhlIHNoZWV0c01hbmFnZXIgaXMgdXNlZCB0byBkZWR1cGxpY2F0ZSBzdHlsZSBzaGVldCBpbmplY3Rpb24gaW4gdGhlIHBhZ2UuXG4gICAqIEl0J3MgZGVkdXBsaWNhdGluZyB1c2luZyB0aGUgKHRoZW1lLCBzdHlsZXMpIGNvdXBsZS5cbiAgICogT24gdGhlIHNlcnZlciwgeW91IHNob3VsZCBwcm92aWRlIGEgbmV3IGluc3RhbmNlIGZvciBlYWNoIHJlcXVlc3QuXG4gICAqL1xuICBzaGVldHNNYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIENvbGxlY3QgdGhlIHNoZWV0cy5cbiAgICovXG4gIHNoZWV0c1JlZ2lzdHJ5OiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdHlsZXNQcm92aWRlci5wcm9wVHlwZXMgPSBleGFjdFByb3AoU3R5bGVzUHJvdmlkZXIucHJvcFR5cGVzKSA6IHZvaWQgMDtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdHlsZXNQcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL1N0eWxlc1Byb3ZpZGVyJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZXhhY3RQcm9wIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi4vdXNlVGhlbWUvVGhlbWVDb250ZXh0JztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7XG5pbXBvcnQgbmVzdGVkIGZyb20gJy4vbmVzdGVkJzsgLy8gVG8gc3VwcG9ydCBjb21wb3NpdGlvbiBvZiB0aGVtZS5cblxuZnVuY3Rpb24gbWVyZ2VPdXRlckxvY2FsVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxUaGVtZSkge1xuICBpZiAodHlwZW9mIGxvY2FsVGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSBsb2NhbFRoZW1lKG91dGVyVGhlbWUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghbWVyZ2VkVGhlbWUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3Ugc2hvdWxkIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIHRoZW1lIGZ1bmN0aW9uLCBpLmUuJywgJzxUaGVtZVByb3ZpZGVyIHRoZW1lPXsoKSA9PiAoe30pfSAvPiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIGxvY2FsVGhlbWUpO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCB0YWtlcyBhIGB0aGVtZWAgcHJvcC5cbiAqIEl0IG1ha2VzIHRoZSBgdGhlbWVgIGF2YWlsYWJsZSBkb3duIHRoZSBSZWFjdCB0cmVlIHRoYW5rcyB0byBSZWFjdCBjb250ZXh0LlxuICogVGhpcyBjb21wb25lbnQgc2hvdWxkIHByZWZlcmFibHkgYmUgdXNlZCBhdCAqKnRoZSByb290IG9mIHlvdXIgY29tcG9uZW50IHRyZWUqKi5cbiAqL1xuXG5cbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBsb2NhbFRoZW1lID0gcHJvcHMudGhlbWU7XG4gIHZhciBvdXRlclRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChvdXRlclRoZW1lID09PSBudWxsICYmIHR5cGVvZiBsb2NhbFRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFlvdSBhcmUgcHJvdmlkaW5nIGEgdGhlbWUgZnVuY3Rpb24gcHJvcCB0byB0aGUgVGhlbWVQcm92aWRlciBjb21wb25lbnQ6JywgJzxUaGVtZVByb3ZpZGVyIHRoZW1lPXtvdXRlclRoZW1lID0+IG91dGVyVGhlbWV9IC8+JywgJycsICdIb3dldmVyLCBubyBvdXRlciB0aGVtZSBpcyBwcmVzZW50LicsICdNYWtlIHN1cmUgYSB0aGVtZSBpcyBhbHJlYWR5IGluamVjdGVkIGhpZ2hlciBpbiB0aGUgUmVhY3QgdHJlZSAnICsgJ29yIHByb3ZpZGUgYSB0aGVtZSBvYmplY3QuJ10uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0aGVtZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBvdXRwdXQgPSBvdXRlclRoZW1lID09PSBudWxsID8gbG9jYWxUaGVtZSA6IG1lcmdlT3V0ZXJMb2NhbFRoZW1lKG91dGVyVGhlbWUsIGxvY2FsVGhlbWUpO1xuXG4gICAgaWYgKG91dHB1dCAhPSBudWxsKSB7XG4gICAgICBvdXRwdXRbbmVzdGVkXSA9IG91dGVyVGhlbWUgIT09IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfSwgW2xvY2FsVGhlbWUsIG91dGVyVGhlbWVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBjaGlsZHJlbik7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRoZW1lUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogWW91ciBjb21wb25lbnQgdHJlZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBBIHRoZW1lIG9iamVjdC4gWW91IGNhbiBwcm92aWRlIGEgZnVuY3Rpb24gdG8gZXh0ZW5kIHRoZSBvdXRlciB0aGVtZS5cbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRoZW1lUHJvdmlkZXIucHJvcFR5cGVzID0gZXhhY3RQcm9wKFRoZW1lUHJvdmlkZXIucHJvcFR5cGVzKSA6IHZvaWQgMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVQcm92aWRlcjsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJzsiLCJ2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuZXhwb3J0IGRlZmF1bHQgaGFzU3ltYm9sID8gU3ltYm9sLmZvcignbXVpLm5lc3RlZCcpIDogJ19fVEhFTUVfTkVTVEVEX18nOyIsImltcG9ydCBuZXN0ZWQgZnJvbSAnLi4vVGhlbWVQcm92aWRlci9uZXN0ZWQnO1xuLyoqXG4gKiBUaGlzIGlzIHRoZSBsaXN0IG9mIHRoZSBzdHlsZSBydWxlIG5hbWUgd2UgdXNlIGFzIGRyb3AgaW4gcmVwbGFjZW1lbnQgZm9yIHRoZSBidWlsdC1pblxuICogcHNldWRvIGNsYXNzZXMgKDpjaGVja2VkLCA6ZGlzYWJsZWQsIDpmb2N1c2VkLCBldGMuKS5cbiAqXG4gKiBXaHkgZG8gdGhleSBleGlzdCBpbiB0aGUgZmlyc3QgcGxhY2U/XG4gKiBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIGF0IGEgc3BlY2lmaWNpdHkgb2YgMi5cbiAqIEl0IGFsbG93cyB0aGVtIHRvIG92ZXJyaWRlIHByZXZpb3VzbHkgZGVmaW5pZWQgc3R5bGVzIGFzIHdlbGwgYXNcbiAqIGJlaW5nIHVudG91Y2hlZCBieSBzaW1wbGUgdXNlciBvdmVycmlkZXMuXG4gKi9cblxudmFyIHBzZXVkb0NsYXNzZXMgPSBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZm9jdXNlZCcsICdmb2N1c1Zpc2libGUnLCAncmVxdWlyZWQnLCAnZXhwYW5kZWQnLCAnc2VsZWN0ZWQnXTsgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4vLyBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0LlxuLy8gV2UgbmVlZCB0byByZXNldCB0aGUgcnVsZSBjb3VudGVyIGZvciBTU1IgZm9yIGVhY2ggcmVxdWVzdC5cbi8vXG4vLyBJdCdzIGluc3BpcmVkIGJ5XG4vLyBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvYmxvYi80ZTZhMDVkZDNmN2I2NTcyZmRkM2FiMjE2ODYxZDllNDQ2YzIwMzMxL3NyYy91dGlscy9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZS5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX29wdGlvbnMkZGlzYWJsZUdsb2JhID0gb3B0aW9ucy5kaXNhYmxlR2xvYmFsLFxuICAgICAgZGlzYWJsZUdsb2JhbCA9IF9vcHRpb25zJGRpc2FibGVHbG9iYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRkaXNhYmxlR2xvYmEsXG4gICAgICBfb3B0aW9ucyRwcm9kdWN0aW9uUHIgPSBvcHRpb25zLnByb2R1Y3Rpb25QcmVmaXgsXG4gICAgICBwcm9kdWN0aW9uUHJlZml4ID0gX29wdGlvbnMkcHJvZHVjdGlvblByID09PSB2b2lkIDAgPyAnanNzJyA6IF9vcHRpb25zJHByb2R1Y3Rpb25QcixcbiAgICAgIF9vcHRpb25zJHNlZWQgPSBvcHRpb25zLnNlZWQsXG4gICAgICBzZWVkID0gX29wdGlvbnMkc2VlZCA9PT0gdm9pZCAwID8gJycgOiBfb3B0aW9ucyRzZWVkO1xuICB2YXIgc2VlZFByZWZpeCA9IHNlZWQgPT09ICcnID8gJycgOiBcIlwiLmNvbmNhdChzZWVkLCBcIi1cIik7XG4gIHZhciBydWxlQ291bnRlciA9IDA7XG5cbiAgdmFyIGdldE5leHRDb3VudGVySWQgPSBmdW5jdGlvbiBnZXROZXh0Q291bnRlcklkKCkge1xuICAgIHJ1bGVDb3VudGVyICs9IDE7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJ1bGVDb3VudGVyID49IDFlMTApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFlvdSBtaWdodCBoYXZlIGEgbWVtb3J5IGxlYWsuJywgJ1RoZSBydWxlQ291bnRlciBpcyBub3Qgc3VwcG9zZWQgdG8gZ3JvdyB0aGF0IG11Y2guJ10uam9pbignJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlQ291bnRlcjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJ1bGUsIHN0eWxlU2hlZXQpIHtcbiAgICB2YXIgbmFtZSA9IHN0eWxlU2hlZXQub3B0aW9ucy5uYW1lOyAvLyBJcyBhIGdsb2JhbCBzdGF0aWMgTVVJIHN0eWxlP1xuXG4gICAgaWYgKG5hbWUgJiYgbmFtZS5pbmRleE9mKCdNdWknKSA9PT0gMCAmJiAhc3R5bGVTaGVldC5vcHRpb25zLmxpbmsgJiYgIWRpc2FibGVHbG9iYWwpIHtcbiAgICAgIC8vIFdlIGNhbiB1c2UgYSBzaG9ydGhhbmQgY2xhc3MgbmFtZSwgd2UgbmV2ZXIgdXNlIHRoZSBrZXlzIHRvIHN0eWxlIHRoZSBjb21wb25lbnRzLlxuICAgICAgaWYgKHBzZXVkb0NsYXNzZXMuaW5kZXhPZihydWxlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBcIk11aS1cIi5jb25jYXQocnVsZS5rZXkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJlZml4ID0gXCJcIi5jb25jYXQoc2VlZFByZWZpeCkuY29uY2F0KG5hbWUsIFwiLVwiKS5jb25jYXQocnVsZS5rZXkpO1xuXG4gICAgICBpZiAoIXN0eWxlU2hlZXQub3B0aW9ucy50aGVtZVtuZXN0ZWRdIHx8IHNlZWQgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoZ2V0TmV4dENvdW50ZXJJZCgpKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlZWRQcmVmaXgpLmNvbmNhdChwcm9kdWN0aW9uUHJlZml4KS5jb25jYXQoZ2V0TmV4dENvdW50ZXJJZCgpKTtcbiAgICB9XG5cbiAgICB2YXIgc3VmZml4ID0gXCJcIi5jb25jYXQocnVsZS5rZXksIFwiLVwiKS5jb25jYXQoZ2V0TmV4dENvdW50ZXJJZCgpKTsgLy8gSGVscCB3aXRoIGRlYnVnZ2FiaWxpdHkuXG5cbiAgICBpZiAoc3R5bGVTaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlZWRQcmVmaXgpLmNvbmNhdChzdHlsZVNoZWV0Lm9wdGlvbnMuY2xhc3NOYW1lUHJlZml4LCBcIi1cIikuY29uY2F0KHN1ZmZpeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlZWRQcmVmaXgpLmNvbmNhdChzdWZmaXgpO1xuICB9O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lJzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIHJldHVybiBzdHlsZXM7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vY3JlYXRlU3R5bGVzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgbm9vcFRoZW1lIGZyb20gJy4vbm9vcFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0eWxlc0NyZWF0b3Ioc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciB0aGVtaW5nRW5hYmxlZCA9IHR5cGVvZiBzdHlsZXNPckNyZWF0b3IgPT09ICdmdW5jdGlvbic7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoX3R5cGVvZihzdHlsZXNPckNyZWF0b3IpICE9PSAnb2JqZWN0JyAmJiAhdGhlbWluZ0VuYWJsZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBzdHlsZXNgIGFyZ3VtZW50IHByb3ZpZGVkIGlzIGludmFsaWQuJywgJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBmdW5jdGlvbiBnZW5lcmF0aW5nIHRoZSBzdHlsZXMgb3IgYSBzdHlsZXMgb2JqZWN0LiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKHRoZW1lLCBuYW1lKSB7XG4gICAgICB2YXIgc3R5bGVzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzdHlsZXMgPSB0aGVtaW5nRW5hYmxlZCA/IHN0eWxlc09yQ3JlYXRvcih0aGVtZSkgOiBzdHlsZXNPckNyZWF0b3I7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAodGhlbWluZ0VuYWJsZWQgPT09IHRydWUgJiYgdGhlbWUgPT09IG5vb3BUaGVtZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogcHJlcGVuZCBlcnJvciBtZXNzYWdlL25hbWUgaW5zdGVhZFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYHN0eWxlc2AgYXJndW1lbnQgcHJvdmlkZWQgaXMgaW52YWxpZC4nLCAnWW91IGFyZSBwcm92aWRpbmcgYSBmdW5jdGlvbiB3aXRob3V0IGEgdGhlbWUgaW4gdGhlIGNvbnRleHQuJywgJ09uZSBvZiB0aGUgcGFyZW50IGVsZW1lbnRzIG5lZWRzIHRvIHVzZSBhIFRoZW1lUHJvdmlkZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFuYW1lIHx8ICF0aGVtZS5vdmVycmlkZXMgfHwgIXRoZW1lLm92ZXJyaWRlc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3ZlcnJpZGVzID0gdGhlbWUub3ZlcnJpZGVzW25hbWVdO1xuXG4gICAgICB2YXIgc3R5bGVzV2l0aE92ZXJyaWRlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhvdmVycmlkZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmICghc3R5bGVzV2l0aE92ZXJyaWRlc1trZXldKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogWW91IGFyZSB0cnlpbmcgdG8gb3ZlcnJpZGUgYSBzdHlsZSB0aGF0IGRvZXMgbm90IGV4aXN0LicsIFwiRml4IHRoZSBgXCIuY29uY2F0KGtleSwgXCJgIGtleSBvZiBgdGhlbWUub3ZlcnJpZGVzLlwiKS5jb25jYXQobmFtZSwgXCJgLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlc1dpdGhPdmVycmlkZXNba2V5XSA9IGRlZXBtZXJnZShzdHlsZXNXaXRoT3ZlcnJpZGVzW2tleV0sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0eWxlc1dpdGhPdmVycmlkZXM7XG4gICAgfSxcbiAgICBvcHRpb25zOiB7fVxuICB9O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2dldFN0eWxlc0NyZWF0b3InOyIsIi8vIFdlIHVzZSB0aGUgc2FtZSBlbXB0eSBvYmplY3QgdG8gcmVmIGNvdW50IHRoZSBzdHlsZXMgdGhhdCBkb24ndCBuZWVkIGEgdGhlbWUgb2JqZWN0LlxudmFyIG5vb3BUaGVtZSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbm9vcFRoZW1lOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZVByb3BzKHBhcmFtcykge1xuICB2YXIgdGhlbWUgPSBwYXJhbXMudGhlbWUsXG4gICAgICBuYW1lID0gcGFyYW1zLm5hbWUsXG4gICAgICBwcm9wcyA9IHBhcmFtcy5wcm9wcztcblxuICBpZiAoIXRoZW1lIHx8ICF0aGVtZS5wcm9wcyB8fCAhdGhlbWUucHJvcHNbbmFtZV0pIHtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzLCBjb2RlIGJvcnJvdyBmcm9tIFJlYWN0IHNvdXJjZS5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMTVhOGYwMzE4MzhhNTUzZTQxYzBiNjZlYjFiY2YxZGE4NDQ4MTA0ZC9wYWNrYWdlcy9yZWFjdC9zcmMvUmVhY3RFbGVtZW50LmpzI0wyMjFcblxuXG4gIHZhciBkZWZhdWx0UHJvcHMgPSB0aGVtZS5wcm9wc1tuYW1lXTtcbiAgdmFyIHByb3BOYW1lO1xuXG4gIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9nZXRUaGVtZVByb3BzJzsiLCIvKiogQGxpY2Vuc2UgTWF0ZXJpYWwtVUkgdjQuMTEuMlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXhwb3J0ICovXG5pbXBvcnQgeyBwb255ZmlsbEdsb2JhbCB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG4vKiBXYXJuaW5nIGlmIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiBAbWF0ZXJpYWwtdWkvc3R5bGVzICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcG9ueWZpbGxHbG9iYWxbJ19fQG1hdGVyaWFsLXVpL3N0eWxlcy1pbml0X18nXSA9IHBvbnlmaWxsR2xvYmFsWydfX0BtYXRlcmlhbC11aS9zdHlsZXMtaW5pdF9fJ10gfHwgMDtcblxuICBpZiAocG9ueWZpbGxHbG9iYWxbJ19fQG1hdGVyaWFsLXVpL3N0eWxlcy1pbml0X18nXSA9PT0gMSkge1xuICAgIGNvbnNvbGUud2FybihbJ0l0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mIGBAbWF0ZXJpYWwtdWkvc3R5bGVzYCBpbml0aWFsaXplZCBpbiB0aGlzIGFwcGxpY2F0aW9uLicsICdUaGlzIG1heSBjYXVzZSB0aGVtZSBwcm9wYWdhdGlvbiBpc3N1ZXMsIGJyb2tlbiBjbGFzcyBuYW1lcywgJyArICdzcGVjaWZpY2l0eSBpc3N1ZXMsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGEgZ29vZCByZWFzb24uJywgJycsICdTZWUgaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9zdHlsZXMtaW5zdGFuY2Utd2FybmluZyBmb3IgbW9yZSBpbmZvLiddLmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIHBvbnlmaWxsR2xvYmFsWydfX0BtYXRlcmlhbC11aS9zdHlsZXMtaW5pdF9fJ10gKz0gMTtcbn1cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSB9IGZyb20gJy4vY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVN0eWxlcyB9IGZyb20gJy4vY3JlYXRlU3R5bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0VGhlbWVQcm9wcyB9IGZyb20gJy4vZ2V0VGhlbWVQcm9wcyc7XG5leHBvcnQgKiBmcm9tICcuL2dldFRoZW1lUHJvcHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBqc3NQcmVzZXQgfSBmcm9tICcuL2pzc1ByZXNldCc7XG5leHBvcnQgKiBmcm9tICcuL2pzc1ByZXNldCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ha2VTdHlsZXMgfSBmcm9tICcuL21ha2VTdHlsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYWtlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VDbGFzc2VzIH0gZnJvbSAnLi9tZXJnZUNsYXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXJnZUNsYXNzZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXJ2ZXJTdHlsZVNoZWV0cyB9IGZyb20gJy4vU2VydmVyU3R5bGVTaGVldHMnO1xuZXhwb3J0ICogZnJvbSAnLi9TZXJ2ZXJTdHlsZVNoZWV0cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlZCB9IGZyb20gJy4vc3R5bGVkJztcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICcuL1N0eWxlc1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vU3R5bGVzUHJvdmlkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vVGhlbWVQcm92aWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSAnLi91c2VUaGVtZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFN0eWxlcyB9IGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL3dpdGhUaGVtZSc7XG5leHBvcnQgKiBmcm9tICcuL3dpdGhUaGVtZSc7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vanNzUHJlc2V0JzsiLCJpbXBvcnQgZnVuY3Rpb25zIGZyb20gJ2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbic7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJ2pzcy1wbHVnaW4tZ2xvYmFsJztcbmltcG9ydCBuZXN0ZWQgZnJvbSAnanNzLXBsdWdpbi1uZXN0ZWQnO1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdqc3MtcGx1Z2luLWNhbWVsLWNhc2UnO1xuaW1wb3J0IGRlZmF1bHRVbml0IGZyb20gJ2pzcy1wbHVnaW4tZGVmYXVsdC11bml0JztcbmltcG9ydCB2ZW5kb3JQcmVmaXhlciBmcm9tICdqc3MtcGx1Z2luLXZlbmRvci1wcmVmaXhlcic7XG5pbXBvcnQgcHJvcHNTb3J0IGZyb20gJ2pzcy1wbHVnaW4tcHJvcHMtc29ydCc7IC8vIFN1YnNldCBvZiBqc3MtcHJlc2V0LWRlZmF1bHQgd2l0aCBvbmx5IHRoZSBwbHVnaW5zIHRoZSBNYXRlcmlhbC1VSSBjb21wb25lbnRzIGFyZSB1c2luZy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ganNzUHJlc2V0KCkge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtmdW5jdGlvbnMoKSwgZ2xvYmFsKCksIG5lc3RlZCgpLCBjYW1lbENhc2UoKSwgZGVmYXVsdFVuaXQoKSwgLy8gRGlzYWJsZSB0aGUgdmVuZG9yIHByZWZpeGVyIHNlcnZlci1zaWRlLCBpdCBkb2VzIG5vdGhpbmcuXG4gICAgLy8gVGhpcyB3YXksIHdlIGNhbiBnZXQgYSBwZXJmb3JtYW5jZSBib29zdC5cbiAgICAvLyBJbiB0aGUgZG9jdW1lbnRhdGlvbiwgd2UgYXJlIHVzaW5nIGBhdXRvcHJlZml4ZXJgIHRvIHNvbHZlIHRoaXMgcHJvYmxlbS5cbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB2ZW5kb3JQcmVmaXhlcigpLCBwcm9wc1NvcnQoKV1cbiAgfTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9tYWtlU3R5bGVzJzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vLyBHbG9iYWwgaW5kZXggY291bnRlciB0byBwcmVzZXJ2ZSBzb3VyY2Ugb3JkZXIuXG4vLyBXZSBjcmVhdGUgdGhlIHN0eWxlIHNoZWV0IGR1cmluZyB0aGUgY3JlYXRpb24gb2YgdGhlIGNvbXBvbmVudCxcbi8vIGNoaWxkcmVuIGFyZSBoYW5kbGVkIGFmdGVyIHRoZSBwYXJlbnRzLCBzbyB0aGUgb3JkZXIgb2Ygc3R5bGUgZWxlbWVudHMgd291bGQgYmUgcGFyZW50LT5jaGlsZC5cbi8vIEl0IGlzIGEgcHJvYmxlbSB0aG91Z2ggd2hlbiBhIHBhcmVudCBwYXNzZXMgYSBjbGFzc05hbWVcbi8vIHdoaWNoIG5lZWRzIHRvIG92ZXJyaWRlIGFueSBjaGlsZCdzIHN0eWxlcy5cbi8vIFN0eWxlU2hlZXQgb2YgdGhlIGNoaWxkIGhhcyBhIGhpZ2hlciBzcGVjaWZpY2l0eSwgYmVjYXVzZSBvZiB0aGUgc291cmNlIG9yZGVyLlxuLy8gU28gb3VyIHNvbHV0aW9uIGlzIHRvIHJlbmRlciBzaGVldHMgdGhlbSBpbiB0aGUgcmV2ZXJzZSBvcmRlciBjaGlsZC0+c2hlZXQsIHNvXG4vLyB0aGF0IHBhcmVudCBoYXMgYSBoaWdoZXIgc3BlY2lmaWNpdHkuXG52YXIgaW5kZXhDb3VudGVyID0gLTFlOTtcbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIGluZGV4Q291bnRlciArPSAxO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGluZGV4Q291bnRlciA+PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogWW91IG1pZ2h0IGhhdmUgYSBtZW1vcnkgbGVhay4nLCAnVGhlIGluZGV4Q291bnRlciBpcyBub3Qgc3VwcG9zZWQgdG8gZ3JvdyB0aGF0IG11Y2guJ10uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleENvdW50ZXI7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldER5bmFtaWNTdHlsZXMgfSBmcm9tICdqc3MnO1xuaW1wb3J0IG1lcmdlQ2xhc3NlcyBmcm9tICcuLi9tZXJnZUNsYXNzZXMnO1xuaW1wb3J0IG11bHRpS2V5U3RvcmUgZnJvbSAnLi9tdWx0aUtleVN0b3JlJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7XG5pbXBvcnQgeyBTdHlsZXNDb250ZXh0IH0gZnJvbSAnLi4vU3R5bGVzUHJvdmlkZXInO1xuaW1wb3J0IHsgaW5jcmVtZW50IH0gZnJvbSAnLi9pbmRleENvdW50ZXInO1xuaW1wb3J0IGdldFN0eWxlc0NyZWF0b3IgZnJvbSAnLi4vZ2V0U3R5bGVzQ3JlYXRvcic7XG5pbXBvcnQgbm9vcFRoZW1lIGZyb20gJy4uL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lJztcblxuZnVuY3Rpb24gZ2V0Q2xhc3NlcyhfcmVmLCBjbGFzc2VzLCBDb21wb25lbnQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIHN0eWxlc09wdGlvbnMgPSBfcmVmLnN0eWxlc09wdGlvbnM7XG5cbiAgaWYgKHN0eWxlc09wdGlvbnMuZGlzYWJsZUdlbmVyYXRpb24pIHtcbiAgICByZXR1cm4gY2xhc3NlcyB8fCB7fTtcbiAgfVxuXG4gIGlmICghc3RhdGUuY2FjaGVDbGFzc2VzKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzID0ge1xuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBmaW5hbGl6ZWQgY2xhc3NlcyB2YWx1ZS5cbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBsYXN0IHVzZWQgY2xhc3NlcyBwcm9wIHBvaW50ZXIuXG4gICAgICBsYXN0UHJvcDogbnVsbCxcbiAgICAgIC8vIENhY2hlIGZvciB0aGUgbGFzdCB1c2VkIHJlbmRlcmVkIGNsYXNzZXMgcG9pbnRlci5cbiAgICAgIGxhc3RKU1M6IHt9XG4gICAgfTtcbiAgfSAvLyBUcmFja3MgaWYgZWl0aGVyIHRoZSByZW5kZXJlZCBjbGFzc2VzIG9yIGNsYXNzZXMgcHJvcCBoYXMgY2hhbmdlZCxcbiAgLy8gcmVxdWlyaW5nIHRoZSBnZW5lcmF0aW9uIG9mIGEgbmV3IGZpbmFsaXplZCBjbGFzc2VzIG9iamVjdC5cblxuXG4gIHZhciBnZW5lcmF0ZSA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5jbGFzc2VzICE9PSBzdGF0ZS5jYWNoZUNsYXNzZXMubGFzdEpTUykge1xuICAgIHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTID0gc3RhdGUuY2xhc3NlcztcbiAgICBnZW5lcmF0ZSA9IHRydWU7XG4gIH1cblxuICBpZiAoY2xhc3NlcyAhPT0gc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RQcm9wKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RQcm9wID0gY2xhc3NlcztcbiAgICBnZW5lcmF0ZSA9IHRydWU7XG4gIH1cblxuICBpZiAoZ2VuZXJhdGUpIHtcbiAgICBzdGF0ZS5jYWNoZUNsYXNzZXMudmFsdWUgPSBtZXJnZUNsYXNzZXMoe1xuICAgICAgYmFzZUNsYXNzZXM6IHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTLFxuICAgICAgbmV3Q2xhc3NlczogY2xhc3NlcyxcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGUuY2FjaGVDbGFzc2VzLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBhdHRhY2goX3JlZjIsIHByb3BzKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIHN0eWxlc09wdGlvbnMgPSBfcmVmMi5zdHlsZXNPcHRpb25zLFxuICAgICAgc3R5bGVzQ3JlYXRvciA9IF9yZWYyLnN0eWxlc0NyZWF0b3IsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcblxuICBpZiAoc3R5bGVzT3B0aW9ucy5kaXNhYmxlR2VuZXJhdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzaGVldE1hbmFnZXIgPSBtdWx0aUtleVN0b3JlLmdldChzdHlsZXNPcHRpb25zLnNoZWV0c01hbmFnZXIsIHN0eWxlc0NyZWF0b3IsIHRoZW1lKTtcblxuICBpZiAoIXNoZWV0TWFuYWdlcikge1xuICAgIHNoZWV0TWFuYWdlciA9IHtcbiAgICAgIHJlZnM6IDAsXG4gICAgICBzdGF0aWNTaGVldDogbnVsbCxcbiAgICAgIGR5bmFtaWNTdHlsZXM6IG51bGxcbiAgICB9O1xuICAgIG11bHRpS2V5U3RvcmUuc2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUsIHNoZWV0TWFuYWdlcik7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBzdHlsZXNDcmVhdG9yLm9wdGlvbnMsIHN0eWxlc09wdGlvbnMsIHtcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgZmxpcDogdHlwZW9mIHN0eWxlc09wdGlvbnMuZmxpcCA9PT0gJ2Jvb2xlYW4nID8gc3R5bGVzT3B0aW9ucy5mbGlwIDogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJ1xuICB9KTtcblxuICBvcHRpb25zLmdlbmVyYXRlSWQgPSBvcHRpb25zLnNlcnZlckdlbmVyYXRlQ2xhc3NOYW1lIHx8IG9wdGlvbnMuZ2VuZXJhdGVDbGFzc05hbWU7XG4gIHZhciBzaGVldHNSZWdpc3RyeSA9IHN0eWxlc09wdGlvbnMuc2hlZXRzUmVnaXN0cnk7XG5cbiAgaWYgKHNoZWV0TWFuYWdlci5yZWZzID09PSAwKSB7XG4gICAgdmFyIHN0YXRpY1NoZWV0O1xuXG4gICAgaWYgKHN0eWxlc09wdGlvbnMuc2hlZXRzQ2FjaGUpIHtcbiAgICAgIHN0YXRpY1NoZWV0ID0gbXVsdGlLZXlTdG9yZS5nZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICAgIH1cblxuICAgIHZhciBzdHlsZXMgPSBzdHlsZXNDcmVhdG9yLmNyZWF0ZSh0aGVtZSwgbmFtZSk7XG5cbiAgICBpZiAoIXN0YXRpY1NoZWV0KSB7XG4gICAgICBzdGF0aWNTaGVldCA9IHN0eWxlc09wdGlvbnMuanNzLmNyZWF0ZVN0eWxlU2hlZXQoc3R5bGVzLCBfZXh0ZW5kcyh7XG4gICAgICAgIGxpbms6IGZhbHNlXG4gICAgICB9LCBvcHRpb25zKSk7XG4gICAgICBzdGF0aWNTaGVldC5hdHRhY2goKTtcblxuICAgICAgaWYgKHN0eWxlc09wdGlvbnMuc2hlZXRzQ2FjaGUpIHtcbiAgICAgICAgbXVsdGlLZXlTdG9yZS5zZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSwgc3R5bGVzQ3JlYXRvciwgdGhlbWUsIHN0YXRpY1NoZWV0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hlZXRzUmVnaXN0cnkpIHtcbiAgICAgIHNoZWV0c1JlZ2lzdHJ5LmFkZChzdGF0aWNTaGVldCk7XG4gICAgfVxuXG4gICAgc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0ID0gc3RhdGljU2hlZXQ7XG4gICAgc2hlZXRNYW5hZ2VyLmR5bmFtaWNTdHlsZXMgPSBnZXREeW5hbWljU3R5bGVzKHN0eWxlcyk7XG4gIH1cblxuICBpZiAoc2hlZXRNYW5hZ2VyLmR5bmFtaWNTdHlsZXMpIHtcbiAgICB2YXIgZHluYW1pY1NoZWV0ID0gc3R5bGVzT3B0aW9ucy5qc3MuY3JlYXRlU3R5bGVTaGVldChzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcywgX2V4dGVuZHMoe1xuICAgICAgbGluazogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpKTtcbiAgICBkeW5hbWljU2hlZXQudXBkYXRlKHByb3BzKTtcbiAgICBkeW5hbWljU2hlZXQuYXR0YWNoKCk7XG4gICAgc3RhdGUuZHluYW1pY1NoZWV0ID0gZHluYW1pY1NoZWV0O1xuICAgIHN0YXRlLmNsYXNzZXMgPSBtZXJnZUNsYXNzZXMoe1xuICAgICAgYmFzZUNsYXNzZXM6IHNoZWV0TWFuYWdlci5zdGF0aWNTaGVldC5jbGFzc2VzLFxuICAgICAgbmV3Q2xhc3NlczogZHluYW1pY1NoZWV0LmNsYXNzZXNcbiAgICB9KTtcblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkuYWRkKGR5bmFtaWNTaGVldCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0YXRlLmNsYXNzZXMgPSBzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQuY2xhc3NlcztcbiAgfVxuXG4gIHNoZWV0TWFuYWdlci5yZWZzICs9IDE7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShfcmVmMywgcHJvcHMpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjMuc3RhdGU7XG5cbiAgaWYgKHN0YXRlLmR5bmFtaWNTaGVldCkge1xuICAgIHN0YXRlLmR5bmFtaWNTaGVldC51cGRhdGUocHJvcHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFjaChfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIHRoZW1lID0gX3JlZjQudGhlbWUsXG4gICAgICBzdHlsZXNPcHRpb25zID0gX3JlZjQuc3R5bGVzT3B0aW9ucyxcbiAgICAgIHN0eWxlc0NyZWF0b3IgPSBfcmVmNC5zdHlsZXNDcmVhdG9yO1xuXG4gIGlmIChzdHlsZXNPcHRpb25zLmRpc2FibGVHZW5lcmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNoZWV0TWFuYWdlciA9IG11bHRpS2V5U3RvcmUuZ2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICBzaGVldE1hbmFnZXIucmVmcyAtPSAxO1xuICB2YXIgc2hlZXRzUmVnaXN0cnkgPSBzdHlsZXNPcHRpb25zLnNoZWV0c1JlZ2lzdHJ5O1xuXG4gIGlmIChzaGVldE1hbmFnZXIucmVmcyA9PT0gMCkge1xuICAgIG11bHRpS2V5U3RvcmUuZGVsZXRlKHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICAgIHN0eWxlc09wdGlvbnMuanNzLnJlbW92ZVN0eWxlU2hlZXQoc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0KTtcblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkucmVtb3ZlKHNoZWV0TWFuYWdlci5zdGF0aWNTaGVldCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmR5bmFtaWNTaGVldCkge1xuICAgIHN0eWxlc09wdGlvbnMuanNzLnJlbW92ZVN0eWxlU2hlZXQoc3RhdGUuZHluYW1pY1NoZWV0KTtcblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkucmVtb3ZlKHN0YXRlLmR5bmFtaWNTaGVldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVN5bmNocm9ub3VzRWZmZWN0KGZ1bmMsIHZhbHVlcykge1xuICB2YXIga2V5ID0gUmVhY3QudXNlUmVmKFtdKTtcbiAgdmFyIG91dHB1dDsgLy8gU3RvcmUgXCJnZW5lcmF0aW9uXCIga2V5LiBKdXN0IHJldHVybnMgYSBuZXcgb2JqZWN0IGV2ZXJ5IHRpbWVcblxuICB2YXIgY3VycmVudEtleSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSwgdmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgLy8gXCJ0aGUgZmlyc3QgcmVuZGVyXCIsIG9yIFwibWVtbyBkcm9wcGVkIHRoZSB2YWx1ZVwiXG5cbiAgaWYgKGtleS5jdXJyZW50ICE9PSBjdXJyZW50S2V5KSB7XG4gICAga2V5LmN1cnJlbnQgPSBjdXJyZW50S2V5O1xuICAgIG91dHB1dCA9IGZ1bmMoKTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgb3V0cHV0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2N1cnJlbnRLZXldIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSxcbiAgICAgIGNsYXNzTmFtZVByZWZpeE9wdGlvbiA9IG9wdGlvbnMuY2xhc3NOYW1lUHJlZml4LFxuICAgICAgQ29tcG9uZW50ID0gb3B0aW9ucy5Db21wb25lbnQsXG4gICAgICBfb3B0aW9ucyRkZWZhdWx0VGhlbWUgPSBvcHRpb25zLmRlZmF1bHRUaGVtZSxcbiAgICAgIGRlZmF1bHRUaGVtZSA9IF9vcHRpb25zJGRlZmF1bHRUaGVtZSA9PT0gdm9pZCAwID8gbm9vcFRoZW1lIDogX29wdGlvbnMkZGVmYXVsdFRoZW1lLFxuICAgICAgc3R5bGVzT3B0aW9uczIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wibmFtZVwiLCBcImNsYXNzTmFtZVByZWZpeFwiLCBcIkNvbXBvbmVudFwiLCBcImRlZmF1bHRUaGVtZVwiXSk7XG5cbiAgdmFyIHN0eWxlc0NyZWF0b3IgPSBnZXRTdHlsZXNDcmVhdG9yKHN0eWxlc09yQ3JlYXRvcik7XG4gIHZhciBjbGFzc05hbWVQcmVmaXggPSBuYW1lIHx8IGNsYXNzTmFtZVByZWZpeE9wdGlvbiB8fCAnbWFrZVN0eWxlcyc7XG4gIHN0eWxlc0NyZWF0b3Iub3B0aW9ucyA9IHtcbiAgICBpbmRleDogaW5jcmVtZW50KCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBtZXRhOiBjbGFzc05hbWVQcmVmaXgsXG4gICAgY2xhc3NOYW1lUHJlZml4OiBjbGFzc05hbWVQcmVmaXhcbiAgfTtcblxuICB2YXIgdXNlU3R5bGVzID0gZnVuY3Rpb24gdXNlU3R5bGVzKCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgICB2YXIgc3R5bGVzT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBSZWFjdC51c2VDb250ZXh0KFN0eWxlc0NvbnRleHQpLCBzdHlsZXNPcHRpb25zMik7XG5cbiAgICB2YXIgaW5zdGFuY2UgPSBSZWFjdC51c2VSZWYoKTtcbiAgICB2YXIgc2hvdWxkVXBkYXRlID0gUmVhY3QudXNlUmVmKCk7XG4gICAgdXNlU3luY2hyb25vdXNFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHN0YXRlOiB7fSxcbiAgICAgICAgc3R5bGVzQ3JlYXRvcjogc3R5bGVzQ3JlYXRvcixcbiAgICAgICAgc3R5bGVzT3B0aW9uczogc3R5bGVzT3B0aW9ucyxcbiAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICB9O1xuICAgICAgYXR0YWNoKGN1cnJlbnQsIHByb3BzKTtcbiAgICAgIHNob3VsZFVwZGF0ZS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBpbnN0YW5jZS5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRldGFjaChjdXJyZW50KTtcbiAgICAgIH07XG4gICAgfSwgW3RoZW1lLCBzdHlsZXNDcmVhdG9yXSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzaG91bGRVcGRhdGUuY3VycmVudCkge1xuICAgICAgICB1cGRhdGUoaW5zdGFuY2UuY3VycmVudCwgcHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBzaG91bGRVcGRhdGUuY3VycmVudCA9IHRydWU7XG4gICAgfSk7XG4gICAgdmFyIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGluc3RhbmNlLmN1cnJlbnQsIHByb3BzLmNsYXNzZXMsIENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKGNsYXNzZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9O1xuXG4gIHJldHVybiB1c2VTdHlsZXM7XG59IiwiLy8gVXNlZCBodHRwczovL2dpdGh1Yi5jb20vdGhpbmtsb29wL211bHRpLWtleS1jYWNoZSBhcyBpbnNwaXJhdGlvblxudmFyIG11bHRpS2V5U3RvcmUgPSB7XG4gIHNldDogZnVuY3Rpb24gc2V0KGNhY2hlLCBrZXkxLCBrZXkyLCB2YWx1ZSkge1xuICAgIHZhciBzdWJDYWNoZSA9IGNhY2hlLmdldChrZXkxKTtcblxuICAgIGlmICghc3ViQ2FjaGUpIHtcbiAgICAgIHN1YkNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgY2FjaGUuc2V0KGtleTEsIHN1YkNhY2hlKTtcbiAgICB9XG5cbiAgICBzdWJDYWNoZS5zZXQoa2V5MiwgdmFsdWUpO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uIGdldChjYWNoZSwga2V5MSwga2V5Mikge1xuICAgIHZhciBzdWJDYWNoZSA9IGNhY2hlLmdldChrZXkxKTtcbiAgICByZXR1cm4gc3ViQ2FjaGUgPyBzdWJDYWNoZS5nZXQoa2V5MikgOiB1bmRlZmluZWQ7XG4gIH0sXG4gIGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShjYWNoZSwga2V5MSwga2V5Mikge1xuICAgIHZhciBzdWJDYWNoZSA9IGNhY2hlLmdldChrZXkxKTtcbiAgICBzdWJDYWNoZS5kZWxldGUoa2V5Mik7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBtdWx0aUtleVN0b3JlOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL21lcmdlQ2xhc3Nlcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNsYXNzZXMoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGJhc2VDbGFzc2VzID0gb3B0aW9ucy5iYXNlQ2xhc3NlcyxcbiAgICAgIG5ld0NsYXNzZXMgPSBvcHRpb25zLm5ld0NsYXNzZXMsXG4gICAgICBDb21wb25lbnQgPSBvcHRpb25zLkNvbXBvbmVudDtcblxuICBpZiAoIW5ld0NsYXNzZXMpIHtcbiAgICByZXR1cm4gYmFzZUNsYXNzZXM7XG4gIH1cblxuICB2YXIgbmV4dENsYXNzZXMgPSBfZXh0ZW5kcyh7fSwgYmFzZUNsYXNzZXMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDbGFzc2VzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIGBcIi5jb25jYXQobmV3Q2xhc3NlcywgXCJgIFwiKSArIFwicHJvdmlkZWQgdG8gdGhlIGNsYXNzZXMgcHJvcCBvZiBcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIgaXMgaW5jb3JyZWN0LlwiKSwgJ1lvdSBtaWdodCB3YW50IHRvIHVzZSB0aGUgY2xhc3NOYW1lIHByb3AgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICByZXR1cm4gYmFzZUNsYXNzZXM7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMobmV3Q2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghYmFzZUNsYXNzZXNba2V5XSAmJiBuZXdDbGFzc2VzW2tleV0pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGtleSBgXCIuY29uY2F0KGtleSwgXCJgIFwiKSArIFwicHJvdmlkZWQgdG8gdGhlIGNsYXNzZXMgcHJvcCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gXCIuY29uY2F0KGdldERpc3BsYXlOYW1lKENvbXBvbmVudCksIFwiLlwiKSwgXCJZb3UgY2FuIG9ubHkgb3ZlcnJpZGUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFwiLmNvbmNhdChPYmplY3Qua2V5cyhiYXNlQ2xhc3Nlcykuam9pbignLCcpLCBcIi5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0NsYXNzZXNba2V5XSAmJiB0eXBlb2YgbmV3Q2xhc3Nlc1trZXldICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUga2V5IGBcIi5jb25jYXQoa2V5LCBcImAgXCIpICsgXCJwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wIGlzIG5vdCB2YWxpZCBmb3IgXCIuY29uY2F0KGdldERpc3BsYXlOYW1lKENvbXBvbmVudCksIFwiLlwiKSwgXCJZb3UgbmVlZCB0byBwcm92aWRlIGEgbm9uIGVtcHR5IHN0cmluZyBpbnN0ZWFkIG9mOiBcIi5jb25jYXQobmV3Q2xhc3Nlc1trZXldLCBcIi5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3Q2xhc3Nlc1trZXldKSB7XG4gICAgICBuZXh0Q2xhc3Nlc1trZXldID0gXCJcIi5jb25jYXQoYmFzZUNsYXNzZXNba2V5XSwgXCIgXCIpLmNvbmNhdChuZXdDbGFzc2VzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXh0Q2xhc3Nlcztcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9zdHlsZWQnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcywgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJy4uL21ha2VTdHlsZXMnO1xuXG5mdW5jdGlvbiBvbWl0KGlucHV0LCBmaWVsZHMpIHtcbiAgdmFyIG91dHB1dCA9IHt9O1xuICBPYmplY3Qua2V5cyhpbnB1dCkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIGlmIChmaWVsZHMuaW5kZXhPZihwcm9wKSA9PT0gLTEpIHtcbiAgICAgIG91dHB1dFtwcm9wXSA9IGlucHV0W3Byb3BdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IC8vIHN0eWxlZC1jb21wb25lbnRzJ3MgQVBJIHJlbW92ZXMgdGhlIG1hcHBpbmcgYmV0d2VlbiBjb21wb25lbnRzIGFuZCBzdHlsZXMuXG4vLyBVc2luZyBjb21wb25lbnRzIGFzIGEgbG93LWxldmVsIHN0eWxpbmcgY29uc3RydWN0IGNhbiBiZSBzaW1wbGVyLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlZChDb21wb25lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENyZWF0b3IgPSBmdW5jdGlvbiBjb21wb25lbnRDcmVhdG9yKHN0eWxlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUsXG4gICAgICAgIHN0eWxlc09wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wibmFtZVwiXSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBDb21wb25lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFsnWW91IGFyZSBjYWxsaW5nIHN0eWxlZChDb21wb25lbnQpKHN0eWxlKSB3aXRoIGFuIHVuZGVmaW5lZCBjb21wb25lbnQuJywgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lUHJlZml4ID0gbmFtZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgLy8gUHJvdmlkZSBhIGJldHRlciBEWCBvdXRzaWRlIHByb2R1Y3Rpb24uXG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKENvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGRpc3BsYXlOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjbGFzc05hbWVQcmVmaXggPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdHlsZXNPckNyZWF0b3IgPSB0eXBlb2Ygc3R5bGUgPT09ICdmdW5jdGlvbicgPyBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvb3Q6IGZ1bmN0aW9uIHJvb3QocHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gc3R5bGUoX2V4dGVuZHMoe1xuICAgICAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICAgICAgfSwgcHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IDoge1xuICAgICAgcm9vdDogc3R5bGVcbiAgICB9O1xuICAgIHZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlc09yQ3JlYXRvciwgX2V4dGVuZHMoe1xuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICBuYW1lOiBuYW1lIHx8IENvbXBvbmVudC5kaXNwbGF5TmFtZSxcbiAgICAgIGNsYXNzTmFtZVByZWZpeDogY2xhc3NOYW1lUHJlZml4XG4gICAgfSwgc3R5bGVzT3B0aW9ucykpO1xuICAgIHZhciBmaWx0ZXJQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzID0ge307XG5cbiAgICBpZiAoc3R5bGUuZmlsdGVyUHJvcHMpIHtcbiAgICAgIGZpbHRlclByb3BzID0gc3R5bGUuZmlsdGVyUHJvcHM7XG4gICAgICBkZWxldGUgc3R5bGUuZmlsdGVyUHJvcHM7XG4gICAgfVxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1mb3JlaWduLXByb3AtdHlwZXMgKi9cblxuXG4gICAgaWYgKHN0eWxlLnByb3BUeXBlcykge1xuICAgICAgcHJvcFR5cGVzID0gc3R5bGUucHJvcFR5cGVzO1xuICAgICAgZGVsZXRlIHN0eWxlLnByb3BUeXBlcztcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9mb3JiaWQtZm9yZWlnbi1wcm9wLXR5cGVzICovXG5cblxuICAgIHZhciBTdHlsZWRDb21wb25lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTdHlsZWRDb21wb25lbnQocHJvcHMsIHJlZikge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lUHJvcCA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbG9uZSA9IHByb3BzLmNsb25lLFxuICAgICAgICAgIENvbXBvbmVudFByb3AgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xvbmVcIiwgXCJjb21wb25lbnRcIl0pO1xuXG4gICAgICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZVByb3ApO1xuICAgICAgdmFyIHNwcmVhZCA9IG90aGVyO1xuXG4gICAgICBpZiAoZmlsdGVyUHJvcHMpIHtcbiAgICAgICAgc3ByZWFkID0gb21pdChzcHJlYWQsIGZpbHRlclByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsb25lKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKVxuICAgICAgICB9LCBzcHJlYWQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0sIHNwcmVhZCkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgRmluYWxDb21wb25lbnQgPSBDb21wb25lbnRQcm9wIHx8IENvbXBvbmVudDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGaW5hbENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgIH0sIHNwcmVhZCksIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdHlsZWRDb21wb25lbnQucHJvcFR5cGVzID0gX2V4dGVuZHMoe1xuICAgICAgLyoqXG4gICAgICAgKiBBIHJlbmRlciBmdW5jdGlvbiBvciBub2RlLlxuICAgICAgICovXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAgIC8qKlxuICAgICAgICogQGlnbm9yZVxuICAgICAgICovXG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgcmVjeWNsZSBpdCdzIGNoaWxkcmVuIEhUTUwgZWxlbWVudC5cbiAgICAgICAqIEl0J3MgdXNpbmcgYFJlYWN0LmNsb25lRWxlbWVudGAgaW50ZXJuYWxseS5cbiAgICAgICAqXG4gICAgICAgKiBUaGlzIHByb3Agd2lsbCBiZSBkZXByZWNhdGVkIGFuZCByZW1vdmVkIGluIHY1XG4gICAgICAgKi9cbiAgICAgIGNsb25lOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMuYm9vbCwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5jbG9uZSAmJiBwcm9wcy5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgY2FuIG5vdCB1c2UgdGhlIGNsb25lIGFuZCBjb21wb25lbnQgcHJvcCBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAgICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAgICAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAgICAgLmVsZW1lbnRUeXBlXG4gICAgfSwgcHJvcFR5cGVzKSA6IHZvaWQgMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBTdHlsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIlN0eWxlZChcIi5jb25jYXQoY2xhc3NOYW1lUHJlZml4LCBcIilcIik7XG4gICAgfVxuXG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoU3R5bGVkQ29tcG9uZW50LCBDb21wb25lbnQpO1xuICAgIHJldHVybiBTdHlsZWRDb21wb25lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIGNvbXBvbmVudENyZWF0b3I7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBUaGVtZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnVGhlbWVDb250ZXh0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVDb250ZXh0OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3VzZVRoZW1lJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuL1RoZW1lQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgdmFyIHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vd2l0aFN0eWxlcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJy4uL21ha2VTdHlsZXMnO1xuaW1wb3J0IGdldFRoZW1lUHJvcHMgZnJvbSAnLi4vZ2V0VGhlbWVQcm9wcyc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vdXNlVGhlbWUnOyAvLyBMaW5rIGEgc3R5bGUgc2hlZXQgd2l0aCBhIGNvbXBvbmVudC5cbi8vIEl0IGRvZXMgbm90IG1vZGlmeSB0aGUgY29tcG9uZW50IHBhc3NlZCB0byBpdDtcbi8vIGluc3RlYWQsIGl0IHJldHVybnMgYSBuZXcgY29tcG9uZW50LCB3aXRoIGEgYGNsYXNzZXNgIHByb3BlcnR5LlxuXG52YXIgd2l0aFN0eWxlcyA9IGZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICB2YXIgZGVmYXVsdFRoZW1lID0gb3B0aW9ucy5kZWZhdWx0VGhlbWUsXG4gICAgICAgIF9vcHRpb25zJHdpdGhUaGVtZSA9IG9wdGlvbnMud2l0aFRoZW1lLFxuICAgICAgICB3aXRoVGhlbWUgPSBfb3B0aW9ucyR3aXRoVGhlbWUgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkd2l0aFRoZW1lLFxuICAgICAgICBuYW1lID0gb3B0aW9ucy5uYW1lLFxuICAgICAgICBzdHlsZXNPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImRlZmF1bHRUaGVtZVwiLCBcIndpdGhUaGVtZVwiLCBcIm5hbWVcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChDb21wb25lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoWydZb3UgYXJlIGNhbGxpbmcgd2l0aFN0eWxlcyhzdHlsZXMpKENvbXBvbmVudCkgd2l0aCBhbiB1bmRlZmluZWQgY29tcG9uZW50LicsICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIGltcG9ydCBpdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZVByZWZpeCA9IG5hbWU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIC8vIFByb3ZpZGUgYSBiZXR0ZXIgRFggb3V0c2lkZSBwcm9kdWN0aW9uLlxuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChkaXNwbGF5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2xhc3NOYW1lUHJlZml4ID0gZGlzcGxheU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lLFxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICBuYW1lOiBuYW1lIHx8IENvbXBvbmVudC5kaXNwbGF5TmFtZSxcbiAgICAgIGNsYXNzTmFtZVByZWZpeDogY2xhc3NOYW1lUHJlZml4XG4gICAgfSwgc3R5bGVzT3B0aW9ucykpO1xuICAgIHZhciBXaXRoU3R5bGVzID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gV2l0aFN0eWxlcyhwcm9wcywgcmVmKSB7XG4gICAgICB2YXIgY2xhc3Nlc1Byb3AgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJpbm5lclJlZlwiXSk7IC8vIFRoZSB3cmFwcGVyIHJlY2VpdmVzIG9ubHkgdXNlciBzdXBwbGllZCBwcm9wcywgd2hpY2ggY291bGQgYmUgYSBzdWJzZXQgb2ZcbiAgICAgIC8vIHRoZSBhY3R1YWwgcHJvcHMgQ29tcG9uZW50IG1pZ2h0IHJlY2VpdmUgZHVlIHRvIG1lcmdpbmcgd2l0aCBkZWZhdWx0UHJvcHMuXG4gICAgICAvLyBTbyBjb3B5aW5nIGl0IGhlcmUgd291bGQgZ2l2ZSB1cyB0aGUgc2FtZSByZXN1bHQgaW4gdGhlIHdyYXBwZXIgYXMgd2VsbC5cblxuXG4gICAgICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyhfZXh0ZW5kcyh7fSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcywgcHJvcHMpKTtcbiAgICAgIHZhciB0aGVtZTtcbiAgICAgIHZhciBtb3JlID0gb3RoZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgfHwgd2l0aFRoZW1lKSB7XG4gICAgICAgIC8vIG5hbWUgYW5kIHdpdGhUaGVtZSBhcmUgaW52YXJpYW50IGluIHRoZSBvdXRlciBzY29wZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgdGhlbWUgPSB1c2VUaGVtZSgpIHx8IGRlZmF1bHRUaGVtZTtcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIG1vcmUgPSBnZXRUaGVtZVByb3BzKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBwcm9wczogb3RoZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBQcm92aWRlIHRoZSB0aGVtZSB0byB0aGUgd3JhcHBlZCBjb21wb25lbnQuXG4gICAgICAgIC8vIFNvIHdlIGRvbid0IGhhdmUgdG8gdXNlIHRoZSBgd2l0aFRoZW1lKClgIEhpZ2hlci1vcmRlciBDb21wb25lbnQuXG5cblxuICAgICAgICBpZiAod2l0aFRoZW1lICYmICFtb3JlLnRoZW1lKSB7XG4gICAgICAgICAgbW9yZS50aGVtZSA9IHRoZW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiBpbm5lclJlZiB8fCByZWYsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgIH0sIG1vcmUpKTtcbiAgICB9KTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBXaXRoU3R5bGVzLnByb3BUeXBlcyA9IHtcbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgICAvKipcbiAgICAgICAqIFVzZSB0aGF0IHByb3AgdG8gcGFzcyBhIHJlZiB0byB0aGUgZGVjb3JhdGVkIGNvbXBvbmVudC5cbiAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgKi9cbiAgICAgIGlubmVyUmVmOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmlubmVyUmVmID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsOyAvLyByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAvLyAgICdNYXRlcmlhbC1VSTogVGhlIGBpbm5lclJlZmAgcHJvcCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuICcgK1xuICAgICAgICAvLyAgICAgJ1JlZnMgYXJlIG5vdyBhdXRvbWF0aWNhbGx5IGZvcndhcmRlZCB0byB0aGUgaW5uZXIgY29tcG9uZW50LicsXG4gICAgICAgIC8vICk7XG4gICAgICB9KVxuICAgIH0gOiB2b2lkIDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgV2l0aFN0eWxlcy5kaXNwbGF5TmFtZSA9IFwiV2l0aFN0eWxlcyhcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIpXCIpO1xuICAgIH1cblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhTdHlsZXMsIENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gRXhwb3NlZCBmb3IgdGVzdCBwdXJwb3Nlcy5cbiAgICAgIFdpdGhTdHlsZXMuTmFrZWQgPSBDb21wb25lbnQ7XG4gICAgICBXaXRoU3R5bGVzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgV2l0aFN0eWxlcy51c2VTdHlsZXMgPSB1c2VTdHlsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhTdHlsZXM7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3dpdGhUaGVtZSc7XG5leHBvcnQgKiBmcm9tICcuL3dpdGhUaGVtZSc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7XG5leHBvcnQgZnVuY3Rpb24gd2l0aFRoZW1lQ3JlYXRvcigpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZGVmYXVsdFRoZW1lID0gb3B0aW9ucy5kZWZhdWx0VGhlbWU7XG5cbiAgdmFyIHdpdGhUaGVtZSA9IGZ1bmN0aW9uIHdpdGhUaGVtZShDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKENvbXBvbmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihbJ1lvdSBhcmUgY2FsbGluZyB3aXRoVGhlbWUoQ29tcG9uZW50KSB3aXRoIGFuIHVuZGVmaW5lZCBjb21wb25lbnQuJywgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gV2l0aFRoZW1lKHByb3BzLCByZWYpIHtcbiAgICAgIHZhciBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIHZhciB0aGVtZSA9IHVzZVRoZW1lKCkgfHwgZGVmYXVsdFRoZW1lO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIHJlZjogaW5uZXJSZWYgfHwgcmVmXG4gICAgICB9LCBvdGhlcikpO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFdpdGhUaGVtZS5wcm9wVHlwZXMgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFVzZSB0aGF0IHByb3AgdG8gcGFzcyBhIHJlZiB0byB0aGUgZGVjb3JhdGVkIGNvbXBvbmVudC5cbiAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgKi9cbiAgICAgIGlubmVyUmVmOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmlubmVyUmVmID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ01hdGVyaWFsLVVJOiBUaGUgYGlubmVyUmVmYCBwcm9wIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS4gJyArICdSZWZzIGFyZSBub3cgYXV0b21hdGljYWxseSBmb3J3YXJkZWQgdG8gdGhlIGlubmVyIGNvbXBvbmVudC4nKTtcbiAgICAgIH0pXG4gICAgfSA6IHZvaWQgMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBXaXRoVGhlbWUuZGlzcGxheU5hbWUgPSBcIldpdGhUaGVtZShcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIpXCIpO1xuICAgIH1cblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBFeHBvc2VkIGZvciB0ZXN0IHB1cnBvc2VzLlxuICAgICAgV2l0aFRoZW1lLk5ha2VkID0gQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoVGhlbWU7XG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUaGVtZTtcbn0gLy8gUHJvdmlkZSB0aGUgdGhlbWUgb2JqZWN0IGFzIGEgcHJvcCB0byB0aGUgaW5wdXQgY29tcG9uZW50LlxuLy8gSXQncyBhbiBhbHRlcm5hdGl2ZSBBUEkgdG8gdXNlVGhlbWUoKS5cbi8vIFdlIGVuY291cmFnZSB0aGUgdXNhZ2Ugb2YgdXNlVGhlbWUoKSB3aGVyZSBwb3NzaWJsZS5cblxudmFyIHdpdGhUaGVtZSA9IHdpdGhUaGVtZUNyZWF0b3IoKTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZTsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuXG5mdW5jdGlvbiBnZXRCb3JkZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUsIFwicHggc29saWRcIik7XG59XG5cbmV4cG9ydCB2YXIgYm9yZGVyID0gc3R5bGUoe1xuICBwcm9wOiAnYm9yZGVyJyxcbiAgdGhlbWVLZXk6ICdib3JkZXJzJyxcbiAgdHJhbnNmb3JtOiBnZXRCb3JkZXJcbn0pO1xuZXhwb3J0IHZhciBib3JkZXJUb3AgPSBzdHlsZSh7XG4gIHByb3A6ICdib3JkZXJUb3AnLFxuICB0aGVtZUtleTogJ2JvcmRlcnMnLFxuICB0cmFuc2Zvcm06IGdldEJvcmRlclxufSk7XG5leHBvcnQgdmFyIGJvcmRlclJpZ2h0ID0gc3R5bGUoe1xuICBwcm9wOiAnYm9yZGVyUmlnaHQnLFxuICB0aGVtZUtleTogJ2JvcmRlcnMnLFxuICB0cmFuc2Zvcm06IGdldEJvcmRlclxufSk7XG5leHBvcnQgdmFyIGJvcmRlckJvdHRvbSA9IHN0eWxlKHtcbiAgcHJvcDogJ2JvcmRlckJvdHRvbScsXG4gIHRoZW1lS2V5OiAnYm9yZGVycycsXG4gIHRyYW5zZm9ybTogZ2V0Qm9yZGVyXG59KTtcbmV4cG9ydCB2YXIgYm9yZGVyTGVmdCA9IHN0eWxlKHtcbiAgcHJvcDogJ2JvcmRlckxlZnQnLFxuICB0aGVtZUtleTogJ2JvcmRlcnMnLFxuICB0cmFuc2Zvcm06IGdldEJvcmRlclxufSk7XG5leHBvcnQgdmFyIGJvcmRlckNvbG9yID0gc3R5bGUoe1xuICBwcm9wOiAnYm9yZGVyQ29sb3InLFxuICB0aGVtZUtleTogJ3BhbGV0dGUnXG59KTtcbmV4cG9ydCB2YXIgYm9yZGVyUmFkaXVzID0gc3R5bGUoe1xuICBwcm9wOiAnYm9yZGVyUmFkaXVzJyxcbiAgdGhlbWVLZXk6ICdzaGFwZSdcbn0pO1xudmFyIGJvcmRlcnMgPSBjb21wb3NlKGJvcmRlciwgYm9yZGVyVG9wLCBib3JkZXJSaWdodCwgYm9yZGVyQm90dG9tLCBib3JkZXJMZWZ0LCBib3JkZXJDb2xvciwgYm9yZGVyUmFkaXVzKTtcbmV4cG9ydCBkZWZhdWx0IGJvcmRlcnM7IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJzsgLy8gVGhlIGJyZWFrcG9pbnQgKipzdGFydCoqIGF0IHRoaXMgdmFsdWUuXG4vLyBGb3IgaW5zdGFuY2Ugd2l0aCB0aGUgZmlyc3QgYnJlYWtwb2ludCB4czogW3hzLCBzbVsuXG5cbnZhciB2YWx1ZXMgPSB7XG4gIHhzOiAwLFxuICBzbTogNjAwLFxuICBtZDogOTYwLFxuICBsZzogMTI4MCxcbiAgeGw6IDE5MjBcbn07XG52YXIgZGVmYXVsdEJyZWFrcG9pbnRzID0ge1xuICAvLyBTb3J0ZWQgQVNDIGJ5IHNpemUuIFRoYXQncyBpbXBvcnRhbnQuXG4gIC8vIEl0IGNhbid0IGJlIGNvbmZpZ3VyZWQgYXMgaXQncyB1c2VkIHN0YXRpY2FsbHkgZm9yIHByb3BUeXBlcy5cbiAga2V5czogWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddLFxuICB1cDogZnVuY3Rpb24gdXAoa2V5KSB7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHZhbHVlc1trZXldLCBcInB4KVwiKTtcbiAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVCcmVha3BvaW50cyhwcm9wcywgcHJvcFZhbHVlLCBzdHlsZUZyb21Qcm9wVmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLnRoZW1lKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IGFyZSBjYWxsaW5nIGEgc3R5bGUgZnVuY3Rpb24gd2l0aG91dCBhIHRoZW1lIHZhbHVlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICB2YXIgdGhlbWVCcmVha3BvaW50cyA9IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzIHx8IGRlZmF1bHRCcmVha3BvaW50cztcbiAgICByZXR1cm4gcHJvcFZhbHVlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtLCBpbmRleCkge1xuICAgICAgYWNjW3RoZW1lQnJlYWtwb2ludHMudXAodGhlbWVCcmVha3BvaW50cy5rZXlzW2luZGV4XSldID0gc3R5bGVGcm9tUHJvcFZhbHVlKHByb3BWYWx1ZVtpbmRleF0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICBpZiAoX3R5cGVvZihwcm9wVmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBfdGhlbWVCcmVha3BvaW50cyA9IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzIHx8IGRlZmF1bHRCcmVha3BvaW50cztcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wVmFsdWUpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBicmVha3BvaW50KSB7XG4gICAgICBhY2NbX3RoZW1lQnJlYWtwb2ludHMudXAoYnJlYWtwb2ludCldID0gc3R5bGVGcm9tUHJvcFZhbHVlKHByb3BWYWx1ZVticmVha3BvaW50XSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHZhciBvdXRwdXQgPSBzdHlsZUZyb21Qcm9wVmFsdWUocHJvcFZhbHVlKTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gYnJlYWtwb2ludHMoc3R5bGVGdW5jdGlvbikge1xuICB2YXIgbmV3U3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIG5ld1N0eWxlRnVuY3Rpb24ocHJvcHMpIHtcbiAgICB2YXIgYmFzZSA9IHN0eWxlRnVuY3Rpb24ocHJvcHMpO1xuICAgIHZhciB0aGVtZUJyZWFrcG9pbnRzID0gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMgfHwgZGVmYXVsdEJyZWFrcG9pbnRzO1xuICAgIHZhciBleHRlbmRlZCA9IHRoZW1lQnJlYWtwb2ludHMua2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICBpZiAocHJvcHNba2V5XSkge1xuICAgICAgICBhY2MgPSBhY2MgfHwge307XG4gICAgICAgIGFjY1t0aGVtZUJyZWFrcG9pbnRzLnVwKGtleSldID0gc3R5bGVGdW5jdGlvbihfZXh0ZW5kcyh7XG4gICAgICAgICAgdGhlbWU6IHByb3BzLnRoZW1lXG4gICAgICAgIH0sIHByb3BzW2tleV0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBudWxsKTtcbiAgICByZXR1cm4gbWVyZ2UoYmFzZSwgZXh0ZW5kZWQpO1xuICB9O1xuXG4gIG5ld1N0eWxlRnVuY3Rpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9leHRlbmRzKHt9LCBzdHlsZUZ1bmN0aW9uLnByb3BUeXBlcywge1xuICAgIHhzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1kOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxnOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHhsOiBQcm9wVHlwZXMub2JqZWN0XG4gIH0pIDoge307XG4gIG5ld1N0eWxlRnVuY3Rpb24uZmlsdGVyUHJvcHMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdHlsZUZ1bmN0aW9uLmZpbHRlclByb3BzKSk7XG4gIHJldHVybiBuZXdTdHlsZUZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBicmVha3BvaW50czsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJztcblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0eWxlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdHlsZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgZm4gPSBmdW5jdGlvbiBmbihwcm9wcykge1xuICAgIHJldHVybiBzdHlsZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgICB2YXIgb3V0cHV0ID0gc3R5bGUocHJvcHMpO1xuXG4gICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgIHJldHVybiBtZXJnZShhY2MsIG91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9OyAvLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCB0aGF0IGRvZXNuJ3QgeWllbGQgYW55IHBlcmZvcm1hbmNlIGdhaW4uXG4gIC8vIGNvbnN0IGhhbmRsZXJzID0gc3R5bGVzLnJlZHVjZSgoYWNjLCBzdHlsZSkgPT4ge1xuICAvLyAgIHN0eWxlLmZpbHRlclByb3BzLmZvckVhY2gocHJvcCA9PiB7XG4gIC8vICAgICBhY2NbcHJvcF0gPSBzdHlsZTtcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4gYWNjO1xuICAvLyB9LCB7fSk7XG4gIC8vIGNvbnN0IGZuID0gcHJvcHMgPT4ge1xuICAvLyAgIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgLy8gICAgIGlmIChoYW5kbGVyc1twcm9wXSkge1xuICAvLyAgICAgICByZXR1cm4gbWVyZ2UoYWNjLCBoYW5kbGVyc1twcm9wXShwcm9wcykpO1xuICAvLyAgICAgfVxuICAvLyAgICAgcmV0dXJuIGFjYztcbiAgLy8gICB9LCB7fSk7XG4gIC8vIH07XG5cblxuICBmbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gc3R5bGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyhhY2MsIHN0eWxlLnByb3BUeXBlcyk7XG4gIH0sIHt9KSA6IHt9O1xuICBmbi5maWx0ZXJQcm9wcyA9IHN0eWxlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGUpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChzdHlsZS5maWx0ZXJQcm9wcyk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlOyIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnLi9tZXJnZSc7XG5cbmZ1bmN0aW9uIG9taXQoaW5wdXQsIGZpZWxkcykge1xuICB2YXIgb3V0cHV0ID0ge307XG4gIE9iamVjdC5rZXlzKGlucHV0KS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKGZpZWxkcy5pbmRleE9mKHByb3ApID09PSAtMSkge1xuICAgICAgb3V0cHV0W3Byb3BdID0gaW5wdXRbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gY3NzKHN0eWxlRnVuY3Rpb24pIHtcbiAgdmFyIG5ld1N0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbiBuZXdTdHlsZUZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdmFyIG91dHB1dCA9IHN0eWxlRnVuY3Rpb24ocHJvcHMpO1xuXG4gICAgaWYgKHByb3BzLmNzcykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBtZXJnZShvdXRwdXQsIHN0eWxlRnVuY3Rpb24oX2V4dGVuZHMoe1xuICAgICAgICB0aGVtZTogcHJvcHMudGhlbWVcbiAgICAgIH0sIHByb3BzLmNzcykpKSwgb21pdChwcm9wcy5jc3MsIFtzdHlsZUZ1bmN0aW9uLmZpbHRlclByb3BzXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgbmV3U3R5bGVGdW5jdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2V4dGVuZHMoe30sIHN0eWxlRnVuY3Rpb24ucHJvcFR5cGVzLCB7XG4gICAgY3NzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH0pIDoge307XG4gIG5ld1N0eWxlRnVuY3Rpb24uZmlsdGVyUHJvcHMgPSBbJ2NzcyddLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3R5bGVGdW5jdGlvbi5maWx0ZXJQcm9wcykpO1xuICByZXR1cm4gbmV3U3R5bGVGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3NzOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5leHBvcnQgdmFyIGRpc3BsYXlQcmludCA9IHN0eWxlKHtcbiAgcHJvcDogJ2Rpc3BsYXlQcmludCcsXG4gIGNzc1Byb3BlcnR5OiBmYWxzZSxcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0BtZWRpYSBwcmludCc6IHtcbiAgICAgICAgZGlzcGxheTogdmFsdWVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59KTtcbmV4cG9ydCB2YXIgZGlzcGxheVJhdyA9IHN0eWxlKHtcbiAgcHJvcDogJ2Rpc3BsYXknXG59KTtcbmV4cG9ydCB2YXIgb3ZlcmZsb3cgPSBzdHlsZSh7XG4gIHByb3A6ICdvdmVyZmxvdydcbn0pO1xuZXhwb3J0IHZhciB0ZXh0T3ZlcmZsb3cgPSBzdHlsZSh7XG4gIHByb3A6ICd0ZXh0T3ZlcmZsb3cnXG59KTtcbmV4cG9ydCB2YXIgdmlzaWJpbGl0eSA9IHN0eWxlKHtcbiAgcHJvcDogJ3Zpc2liaWxpdHknXG59KTtcbmV4cG9ydCB2YXIgd2hpdGVTcGFjZSA9IHN0eWxlKHtcbiAgcHJvcDogJ3doaXRlU3BhY2UnXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoZGlzcGxheVByaW50LCBkaXNwbGF5UmF3LCBvdmVyZmxvdywgdGV4dE92ZXJmbG93LCB2aXNpYmlsaXR5LCB3aGl0ZVNwYWNlKTsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuZXhwb3J0IHZhciBmbGV4QmFzaXMgPSBzdHlsZSh7XG4gIHByb3A6ICdmbGV4QmFzaXMnXG59KTtcbmV4cG9ydCB2YXIgZmxleERpcmVjdGlvbiA9IHN0eWxlKHtcbiAgcHJvcDogJ2ZsZXhEaXJlY3Rpb24nXG59KTtcbmV4cG9ydCB2YXIgZmxleFdyYXAgPSBzdHlsZSh7XG4gIHByb3A6ICdmbGV4V3JhcCdcbn0pO1xuZXhwb3J0IHZhciBqdXN0aWZ5Q29udGVudCA9IHN0eWxlKHtcbiAgcHJvcDogJ2p1c3RpZnlDb250ZW50J1xufSk7XG5leHBvcnQgdmFyIGFsaWduSXRlbXMgPSBzdHlsZSh7XG4gIHByb3A6ICdhbGlnbkl0ZW1zJ1xufSk7XG5leHBvcnQgdmFyIGFsaWduQ29udGVudCA9IHN0eWxlKHtcbiAgcHJvcDogJ2FsaWduQ29udGVudCdcbn0pO1xuZXhwb3J0IHZhciBvcmRlciA9IHN0eWxlKHtcbiAgcHJvcDogJ29yZGVyJ1xufSk7XG5leHBvcnQgdmFyIGZsZXggPSBzdHlsZSh7XG4gIHByb3A6ICdmbGV4J1xufSk7XG5leHBvcnQgdmFyIGZsZXhHcm93ID0gc3R5bGUoe1xuICBwcm9wOiAnZmxleEdyb3cnXG59KTtcbmV4cG9ydCB2YXIgZmxleFNocmluayA9IHN0eWxlKHtcbiAgcHJvcDogJ2ZsZXhTaHJpbmsnXG59KTtcbmV4cG9ydCB2YXIgYWxpZ25TZWxmID0gc3R5bGUoe1xuICBwcm9wOiAnYWxpZ25TZWxmJ1xufSk7XG5leHBvcnQgdmFyIGp1c3RpZnlJdGVtcyA9IHN0eWxlKHtcbiAgcHJvcDogJ2p1c3RpZnlJdGVtcydcbn0pO1xuZXhwb3J0IHZhciBqdXN0aWZ5U2VsZiA9IHN0eWxlKHtcbiAgcHJvcDogJ2p1c3RpZnlTZWxmJ1xufSk7XG52YXIgZmxleGJveCA9IGNvbXBvc2UoZmxleEJhc2lzLCBmbGV4RGlyZWN0aW9uLCBmbGV4V3JhcCwganVzdGlmeUNvbnRlbnQsIGFsaWduSXRlbXMsIGFsaWduQ29udGVudCwgb3JkZXIsIGZsZXgsIGZsZXhHcm93LCBmbGV4U2hyaW5rLCBhbGlnblNlbGYsIGp1c3RpZnlJdGVtcywganVzdGlmeVNlbGYpO1xuZXhwb3J0IGRlZmF1bHQgZmxleGJveDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuZXhwb3J0IHZhciBncmlkR2FwID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZEdhcCdcbn0pO1xuZXhwb3J0IHZhciBncmlkQ29sdW1uR2FwID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZENvbHVtbkdhcCdcbn0pO1xuZXhwb3J0IHZhciBncmlkUm93R2FwID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZFJvd0dhcCdcbn0pO1xuZXhwb3J0IHZhciBncmlkQ29sdW1uID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZENvbHVtbidcbn0pO1xuZXhwb3J0IHZhciBncmlkUm93ID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZFJvdydcbn0pO1xuZXhwb3J0IHZhciBncmlkQXV0b0Zsb3cgPSBzdHlsZSh7XG4gIHByb3A6ICdncmlkQXV0b0Zsb3cnXG59KTtcbmV4cG9ydCB2YXIgZ3JpZEF1dG9Db2x1bW5zID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZEF1dG9Db2x1bW5zJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRBdXRvUm93cyA9IHN0eWxlKHtcbiAgcHJvcDogJ2dyaWRBdXRvUm93cydcbn0pO1xuZXhwb3J0IHZhciBncmlkVGVtcGxhdGVDb2x1bW5zID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZFRlbXBsYXRlQ29sdW1ucydcbn0pO1xuZXhwb3J0IHZhciBncmlkVGVtcGxhdGVSb3dzID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZFRlbXBsYXRlUm93cydcbn0pO1xuZXhwb3J0IHZhciBncmlkVGVtcGxhdGVBcmVhcyA9IHN0eWxlKHtcbiAgcHJvcDogJ2dyaWRUZW1wbGF0ZUFyZWFzJ1xufSk7XG5leHBvcnQgdmFyIGdyaWRBcmVhID0gc3R5bGUoe1xuICBwcm9wOiAnZ3JpZEFyZWEnXG59KTtcbnZhciBncmlkID0gY29tcG9zZShncmlkR2FwLCBncmlkQ29sdW1uR2FwLCBncmlkUm93R2FwLCBncmlkQ29sdW1uLCBncmlkUm93LCBncmlkQXV0b0Zsb3csIGdyaWRBdXRvQ29sdW1ucywgZ3JpZEF1dG9Sb3dzLCBncmlkVGVtcGxhdGVDb2x1bW5zLCBncmlkVGVtcGxhdGVSb3dzLCBncmlkVGVtcGxhdGVBcmVhcywgZ3JpZEFyZWEpO1xuZXhwb3J0IGRlZmF1bHQgZ3JpZDsiLCIvKiogQGxpY2Vuc2UgTWF0ZXJpYWwtVUkgdjQuMTEuMlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvcmRlcnMgfSBmcm9tICcuL2JvcmRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9ib3JkZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnJlYWtwb2ludHMgfSBmcm9tICcuL2JyZWFrcG9pbnRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZSB9IGZyb20gJy4vY29tcG9zZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzcyB9IGZyb20gJy4vY3NzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZsZXhib3ggfSBmcm9tICcuL2ZsZXhib3gnO1xuZXhwb3J0ICogZnJvbSAnLi9mbGV4Ym94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JpZCB9IGZyb20gJy4vZ3JpZCc7XG5leHBvcnQgKiBmcm9tICcuL2dyaWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYWxldHRlIH0gZnJvbSAnLi9wYWxldHRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFsZXR0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvc2l0aW9ucyB9IGZyb20gJy4vcG9zaXRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vcG9zaXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2hhZG93cyB9IGZyb20gJy4vc2hhZG93cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNpemluZyB9IGZyb20gJy4vc2l6aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vc2l6aW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3BhY2luZyB9IGZyb20gJy4vc3BhY2luZyc7XG5leHBvcnQgKiBmcm9tICcuL3NwYWNpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZSB9IGZyb20gJy4vc3R5bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBvZ3JhcGh5IH0gZnJvbSAnLi90eXBvZ3JhcGh5JztcbmV4cG9ydCAqIGZyb20gJy4vdHlwb2dyYXBoeSc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuXG5mdW5jdGlvbiBtZXJnZShhY2MsIGl0ZW0pIHtcbiAgaWYgKCFpdGVtKSB7XG4gICAgcmV0dXJuIGFjYztcbiAgfVxuXG4gIHJldHVybiBkZWVwbWVyZ2UoYWNjLCBpdGVtLCB7XG4gICAgY2xvbmU6IGZhbHNlIC8vIE5vIG5lZWQgdG8gY2xvbmUgZGVlcCwgaXQncyB3YXkgZmFzdGVyLlxuXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuZXhwb3J0IHZhciBjb2xvciA9IHN0eWxlKHtcbiAgcHJvcDogJ2NvbG9yJyxcbiAgdGhlbWVLZXk6ICdwYWxldHRlJ1xufSk7XG5leHBvcnQgdmFyIGJnY29sb3IgPSBzdHlsZSh7XG4gIHByb3A6ICdiZ2NvbG9yJyxcbiAgY3NzUHJvcGVydHk6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICB0aGVtZUtleTogJ3BhbGV0dGUnXG59KTtcbnZhciBwYWxldHRlID0gY29tcG9zZShjb2xvciwgYmdjb2xvcik7XG5leHBvcnQgZGVmYXVsdCBwYWxldHRlOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5leHBvcnQgdmFyIHBvc2l0aW9uID0gc3R5bGUoe1xuICBwcm9wOiAncG9zaXRpb24nXG59KTtcbmV4cG9ydCB2YXIgekluZGV4ID0gc3R5bGUoe1xuICBwcm9wOiAnekluZGV4JyxcbiAgdGhlbWVLZXk6ICd6SW5kZXgnXG59KTtcbmV4cG9ydCB2YXIgdG9wID0gc3R5bGUoe1xuICBwcm9wOiAndG9wJ1xufSk7XG5leHBvcnQgdmFyIHJpZ2h0ID0gc3R5bGUoe1xuICBwcm9wOiAncmlnaHQnXG59KTtcbmV4cG9ydCB2YXIgYm90dG9tID0gc3R5bGUoe1xuICBwcm9wOiAnYm90dG9tJ1xufSk7XG5leHBvcnQgdmFyIGxlZnQgPSBzdHlsZSh7XG4gIHByb3A6ICdsZWZ0J1xufSk7XG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKHBvc2l0aW9uLCB6SW5kZXgsIHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCk7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbnZhciByZXNwb25zaXZlUHJvcFR5cGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSkgOiB7fTtcbmV4cG9ydCBkZWZhdWx0IHJlc3BvbnNpdmVQcm9wVHlwZTsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG52YXIgYm94U2hhZG93ID0gc3R5bGUoe1xuICBwcm9wOiAnYm94U2hhZG93JyxcbiAgdGhlbWVLZXk6ICdzaGFkb3dzJ1xufSk7XG5leHBvcnQgZGVmYXVsdCBib3hTaGFkb3c7IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcblxuZnVuY3Rpb24gdHJhbnNmb3JtKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8PSAxID8gXCJcIi5jb25jYXQodmFsdWUgKiAxMDAsIFwiJVwiKSA6IHZhbHVlO1xufVxuXG5leHBvcnQgdmFyIHdpZHRoID0gc3R5bGUoe1xuICBwcm9wOiAnd2lkdGgnLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufSk7XG5leHBvcnQgdmFyIG1heFdpZHRoID0gc3R5bGUoe1xuICBwcm9wOiAnbWF4V2lkdGgnLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufSk7XG5leHBvcnQgdmFyIG1pbldpZHRoID0gc3R5bGUoe1xuICBwcm9wOiAnbWluV2lkdGgnLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufSk7XG5leHBvcnQgdmFyIGhlaWdodCA9IHN0eWxlKHtcbiAgcHJvcDogJ2hlaWdodCcsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59KTtcbmV4cG9ydCB2YXIgbWF4SGVpZ2h0ID0gc3R5bGUoe1xuICBwcm9wOiAnbWF4SGVpZ2h0JyxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbn0pO1xuZXhwb3J0IHZhciBtaW5IZWlnaHQgPSBzdHlsZSh7XG4gIHByb3A6ICdtaW5IZWlnaHQnLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxufSk7XG5leHBvcnQgdmFyIHNpemVXaWR0aCA9IHN0eWxlKHtcbiAgcHJvcDogJ3NpemUnLFxuICBjc3NQcm9wZXJ0eTogJ3dpZHRoJyxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbn0pO1xuZXhwb3J0IHZhciBzaXplSGVpZ2h0ID0gc3R5bGUoe1xuICBwcm9wOiAnc2l6ZScsXG4gIGNzc1Byb3BlcnR5OiAnaGVpZ2h0JyxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbn0pO1xuZXhwb3J0IHZhciBib3hTaXppbmcgPSBzdHlsZSh7XG4gIHByb3A6ICdib3hTaXppbmcnXG59KTtcbnZhciBzaXppbmcgPSBjb21wb3NlKHdpZHRoLCBtYXhXaWR0aCwgbWluV2lkdGgsIGhlaWdodCwgbWF4SGVpZ2h0LCBtaW5IZWlnaHQsIGJveFNpemluZyk7XG5leHBvcnQgZGVmYXVsdCBzaXppbmc7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgcmVzcG9uc2l2ZVByb3BUeXBlIGZyb20gJy4vcmVzcG9uc2l2ZVByb3BUeXBlJztcbmltcG9ydCB7IGhhbmRsZUJyZWFrcG9pbnRzIH0gZnJvbSAnLi9icmVha3BvaW50cyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnLi9tZXJnZSc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICcuL21lbW9pemUnO1xudmFyIHByb3BlcnRpZXMgPSB7XG4gIG06ICdtYXJnaW4nLFxuICBwOiAncGFkZGluZydcbn07XG52YXIgZGlyZWN0aW9ucyA9IHtcbiAgdDogJ1RvcCcsXG4gIHI6ICdSaWdodCcsXG4gIGI6ICdCb3R0b20nLFxuICBsOiAnTGVmdCcsXG4gIHg6IFsnTGVmdCcsICdSaWdodCddLFxuICB5OiBbJ1RvcCcsICdCb3R0b20nXVxufTtcbnZhciBhbGlhc2VzID0ge1xuICBtYXJnaW5YOiAnbXgnLFxuICBtYXJnaW5ZOiAnbXknLFxuICBwYWRkaW5nWDogJ3B4JyxcbiAgcGFkZGluZ1k6ICdweSdcbn07IC8vIG1lbW9pemUoKSBpbXBhY3Q6XG4vLyBGcm9tIDMwMCwwMDAgb3BzL3NlY1xuLy8gVG8gMzUwLDAwMCBvcHMvc2VjXG5cbnZhciBnZXRDc3NQcm9wZXJ0aWVzID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICAvLyBJdCdzIG5vdCBhIHNob3J0aGFuZCBub3RhdGlvbi5cbiAgaWYgKHByb3AubGVuZ3RoID4gMikge1xuICAgIGlmIChhbGlhc2VzW3Byb3BdKSB7XG4gICAgICBwcm9wID0gYWxpYXNlc1twcm9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtwcm9wXTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3Akc3BsaXQgPSBwcm9wLnNwbGl0KCcnKSxcbiAgICAgIF9wcm9wJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF9wcm9wJHNwbGl0LCAyKSxcbiAgICAgIGEgPSBfcHJvcCRzcGxpdDJbMF0sXG4gICAgICBiID0gX3Byb3Akc3BsaXQyWzFdO1xuXG4gIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbYV07XG4gIHZhciBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zW2JdIHx8ICcnO1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShkaXJlY3Rpb24pID8gZGlyZWN0aW9uLm1hcChmdW5jdGlvbiAoZGlyKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5ICsgZGlyO1xuICB9KSA6IFtwcm9wZXJ0eSArIGRpcmVjdGlvbl07XG59KTtcbnZhciBzcGFjaW5nS2V5cyA9IFsnbScsICdtdCcsICdtcicsICdtYicsICdtbCcsICdteCcsICdteScsICdwJywgJ3B0JywgJ3ByJywgJ3BiJywgJ3BsJywgJ3B4JywgJ3B5JywgJ21hcmdpbicsICdtYXJnaW5Ub3AnLCAnbWFyZ2luUmlnaHQnLCAnbWFyZ2luQm90dG9tJywgJ21hcmdpbkxlZnQnLCAnbWFyZ2luWCcsICdtYXJnaW5ZJywgJ3BhZGRpbmcnLCAncGFkZGluZ1RvcCcsICdwYWRkaW5nUmlnaHQnLCAncGFkZGluZ0JvdHRvbScsICdwYWRkaW5nTGVmdCcsICdwYWRkaW5nWCcsICdwYWRkaW5nWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVuYXJ5U3BhY2luZyh0aGVtZSkge1xuICB2YXIgdGhlbWVTcGFjaW5nID0gdGhlbWUuc3BhY2luZyB8fCA4O1xuXG4gIGlmICh0eXBlb2YgdGhlbWVTcGFjaW5nID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYWJzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodHlwZW9mIGFicyAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IEV4cGVjdGVkIHNwYWNpbmcgYXJndW1lbnQgdG8gYmUgYSBudW1iZXIsIGdvdCBcIi5jb25jYXQoYWJzLCBcIi5cIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVtZVNwYWNpbmcgKiBhYnM7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHRoZW1lU3BhY2luZykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFicykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFicyA+IHRoZW1lU3BhY2luZy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIHByb3ZpZGVkIChcIi5jb25jYXQoYWJzLCBcIikgb3ZlcmZsb3dzLlwiKSwgXCJUaGUgc3VwcG9ydGVkIHZhbHVlcyBhcmU6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh0aGVtZVNwYWNpbmcpLCBcIi5cIiksIFwiXCIuY29uY2F0KGFicywgXCIgPiBcIikuY29uY2F0KHRoZW1lU3BhY2luZy5sZW5ndGggLSAxLCBcIiwgeW91IG5lZWQgdG8gYWRkIHRoZSBtaXNzaW5nIHZhbHVlcy5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbWVTcGFjaW5nW2Fic107XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGhlbWVTcGFjaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRoZW1lU3BhY2luZztcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS5zcGFjaW5nYCB2YWx1ZSAoXCIuY29uY2F0KHRoZW1lU3BhY2luZywgXCIpIGlzIGludmFsaWQuXCIpLCAnSXQgc2hvdWxkIGJlIGEgbnVtYmVyLCBhbiBhcnJheSBvciBhIGZ1bmN0aW9uLiddLmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWUodHJhbnNmb3JtZXIsIHByb3BWYWx1ZSkge1xuICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlO1xuICB9XG5cbiAgdmFyIGFicyA9IE1hdGguYWJzKHByb3BWYWx1ZSk7XG4gIHZhciB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVyKGFicyk7XG5cbiAgaWYgKHByb3BWYWx1ZSA+PSAwKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1lZCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gLXRyYW5zZm9ybWVkO1xuICB9XG5cbiAgcmV0dXJuIFwiLVwiLmNvbmNhdCh0cmFuc2Zvcm1lZCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlRnJvbVByb3BWYWx1ZShjc3NQcm9wZXJ0aWVzLCB0cmFuc2Zvcm1lcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BWYWx1ZSkge1xuICAgIHJldHVybiBjc3NQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjc3NQcm9wZXJ0eSkge1xuICAgICAgYWNjW2Nzc1Byb3BlcnR5XSA9IGdldFZhbHVlKHRyYW5zZm9ybWVyLCBwcm9wVmFsdWUpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNwYWNpbmcocHJvcHMpIHtcbiAgdmFyIHRoZW1lID0gcHJvcHMudGhlbWU7XG4gIHZhciB0cmFuc2Zvcm1lciA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh0aGVtZSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcykubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgLy8gVXNpbmcgYSBoYXNoIGNvbXB1dGF0aW9uIG92ZXIgYW4gYXJyYXkgaXRlcmF0aW9uIGNvdWxkIGJlIGZhc3RlciwgYnV0IHdpdGggb25seSAyOCBpdGVtcyxcbiAgICAvLyBpdCdzIGRvZXNuJ3Qgd29ydGggdGhlIGJ1bmRsZSBzaXplLlxuICAgIGlmIChzcGFjaW5nS2V5cy5pbmRleE9mKHByb3ApID09PSAtMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNzc1Byb3BlcnRpZXMgPSBnZXRDc3NQcm9wZXJ0aWVzKHByb3ApO1xuICAgIHZhciBzdHlsZUZyb21Qcm9wVmFsdWUgPSBnZXRTdHlsZUZyb21Qcm9wVmFsdWUoY3NzUHJvcGVydGllcywgdHJhbnNmb3JtZXIpO1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wXTtcbiAgICByZXR1cm4gaGFuZGxlQnJlYWtwb2ludHMocHJvcHMsIHByb3BWYWx1ZSwgc3R5bGVGcm9tUHJvcFZhbHVlKTtcbiAgfSkucmVkdWNlKG1lcmdlLCB7fSk7XG59XG5cbnNwYWNpbmcucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHNwYWNpbmdLZXlzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgb2JqW2tleV0gPSByZXNwb25zaXZlUHJvcFR5cGU7XG4gIHJldHVybiBvYmo7XG59LCB7fSkgOiB7fTtcbnNwYWNpbmcuZmlsdGVyUHJvcHMgPSBzcGFjaW5nS2V5cztcbmV4cG9ydCBkZWZhdWx0IHNwYWNpbmc7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCByZXNwb25zaXZlUHJvcFR5cGUgZnJvbSAnLi9yZXNwb25zaXZlUHJvcFR5cGUnO1xuaW1wb3J0IHsgaGFuZGxlQnJlYWtwb2ludHMgfSBmcm9tICcuL2JyZWFrcG9pbnRzJztcblxuZnVuY3Rpb24gZ2V0UGF0aChvYmosIHBhdGgpIHtcbiAgaWYgKCFwYXRoIHx8IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSkge1xuICAgIHJldHVybiBhY2MgJiYgYWNjW2l0ZW1dID8gYWNjW2l0ZW1dIDogbnVsbDtcbiAgfSwgb2JqKTtcbn1cblxuZnVuY3Rpb24gc3R5bGUob3B0aW9ucykge1xuICB2YXIgcHJvcCA9IG9wdGlvbnMucHJvcCxcbiAgICAgIF9vcHRpb25zJGNzc1Byb3BlcnR5ID0gb3B0aW9ucy5jc3NQcm9wZXJ0eSxcbiAgICAgIGNzc1Byb3BlcnR5ID0gX29wdGlvbnMkY3NzUHJvcGVydHkgPT09IHZvaWQgMCA/IG9wdGlvbnMucHJvcCA6IF9vcHRpb25zJGNzc1Byb3BlcnR5LFxuICAgICAgdGhlbWVLZXkgPSBvcHRpb25zLnRoZW1lS2V5LFxuICAgICAgdHJhbnNmb3JtID0gb3B0aW9ucy50cmFuc2Zvcm07XG5cbiAgdmFyIGZuID0gZnVuY3Rpb24gZm4ocHJvcHMpIHtcbiAgICBpZiAocHJvcHNbcHJvcF0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgIHZhciB0aGVtZSA9IHByb3BzLnRoZW1lO1xuICAgIHZhciB0aGVtZU1hcHBpbmcgPSBnZXRQYXRoKHRoZW1lLCB0aGVtZUtleSkgfHwge307XG5cbiAgICB2YXIgc3R5bGVGcm9tUHJvcFZhbHVlID0gZnVuY3Rpb24gc3R5bGVGcm9tUHJvcFZhbHVlKHByb3BWYWx1ZUZpbmFsKSB7XG4gICAgICB2YXIgdmFsdWU7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhlbWVNYXBwaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gdGhlbWVNYXBwaW5nKHByb3BWYWx1ZUZpbmFsKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGVtZU1hcHBpbmcpKSB7XG4gICAgICAgIHZhbHVlID0gdGhlbWVNYXBwaW5nW3Byb3BWYWx1ZUZpbmFsXSB8fCBwcm9wVmFsdWVGaW5hbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZ2V0UGF0aCh0aGVtZU1hcHBpbmcsIHByb3BWYWx1ZUZpbmFsKSB8fCBwcm9wVmFsdWVGaW5hbDtcblxuICAgICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgICAgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjc3NQcm9wZXJ0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBjc3NQcm9wZXJ0eSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gaGFuZGxlQnJlYWtwb2ludHMocHJvcHMsIHByb3BWYWx1ZSwgc3R5bGVGcm9tUHJvcFZhbHVlKTtcbiAgfTtcblxuICBmbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wLCByZXNwb25zaXZlUHJvcFR5cGUpIDoge307XG4gIGZuLmZpbHRlclByb3BzID0gW3Byb3BdO1xuICByZXR1cm4gZm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlOyIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5leHBvcnQgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZSh7XG4gIHByb3A6ICdmb250RmFtaWx5JyxcbiAgdGhlbWVLZXk6ICd0eXBvZ3JhcGh5J1xufSk7XG5leHBvcnQgdmFyIGZvbnRTaXplID0gc3R5bGUoe1xuICBwcm9wOiAnZm9udFNpemUnLFxuICB0aGVtZUtleTogJ3R5cG9ncmFwaHknXG59KTtcbmV4cG9ydCB2YXIgZm9udFN0eWxlID0gc3R5bGUoe1xuICBwcm9wOiAnZm9udFN0eWxlJyxcbiAgdGhlbWVLZXk6ICd0eXBvZ3JhcGh5J1xufSk7XG5leHBvcnQgdmFyIGZvbnRXZWlnaHQgPSBzdHlsZSh7XG4gIHByb3A6ICdmb250V2VpZ2h0JyxcbiAgdGhlbWVLZXk6ICd0eXBvZ3JhcGh5J1xufSk7XG5leHBvcnQgdmFyIGxldHRlclNwYWNpbmcgPSBzdHlsZSh7XG4gIHByb3A6ICdsZXR0ZXJTcGFjaW5nJ1xufSk7XG5leHBvcnQgdmFyIGxpbmVIZWlnaHQgPSBzdHlsZSh7XG4gIHByb3A6ICdsaW5lSGVpZ2h0J1xufSk7XG5leHBvcnQgdmFyIHRleHRBbGlnbiA9IHN0eWxlKHtcbiAgcHJvcDogJ3RleHRBbGlnbidcbn0pO1xudmFyIHR5cG9ncmFwaHkgPSBjb21wb3NlKGZvbnRGYW1pbHksIGZvbnRTaXplLCBmb250U3R5bGUsIGZvbnRXZWlnaHQsIGxldHRlclNwYWNpbmcsIGxpbmVIZWlnaHQsIHRleHRBbGlnbik7XG5leHBvcnQgZGVmYXVsdCB0eXBvZ3JhcGh5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhUTUxFbGVtZW50VHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBzYWZlUHJvcE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocHJvcFZhbHVlICYmIHByb3BWYWx1ZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIFwiLmNvbmNhdChsb2NhdGlvbiwgXCIgYFwiKS5jb25jYXQoc2FmZVByb3BOYW1lLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLiBcIikgKyBcIkV4cGVjdGVkIGFuIEhUTUxFbGVtZW50LlwiKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYWluUHJvcFR5cGVzKHByb3BUeXBlMSwgcHJvcFR5cGUyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHByb3BUeXBlMS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykgfHwgcHJvcFR5cGUyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW0gJiYgX3R5cGVvZihpdGVtKSA9PT0gJ29iamVjdCcgJiYgaXRlbS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgY2xvbmU6IHRydWVcbiAgfTtcbiAgdmFyIG91dHB1dCA9IG9wdGlvbnMuY2xvbmUgPyBfZXh0ZW5kcyh7fSwgdGFyZ2V0KSA6IHRhcmdldDtcblxuICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIGlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBBdm9pZCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNoYWluUHJvcFR5cGVzIGZyb20gJy4vY2hhaW5Qcm9wVHlwZXMnO1xuXG5mdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGVsZW1lbnRUeXBlKSB7XG4gIC8vIGVsZW1lbnRUeXBlLnByb3RvdHlwZT8uaXNSZWFjdENvbXBvbmVudFxuICB2YXIgX2VsZW1lbnRUeXBlJHByb3RvdHlwID0gZWxlbWVudFR5cGUucHJvdG90eXBlLFxuICAgICAgcHJvdG90eXBlID0gX2VsZW1lbnRUeXBlJHByb3RvdHlwID09PSB2b2lkIDAgPyB7fSA6IF9lbGVtZW50VHlwZSRwcm90b3R5cDtcbiAgcmV0dXJuIEJvb2xlYW4ocHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBhY2NlcHRpbmdSZWYocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBlbGVtZW50ID0gcHJvcHNbcHJvcE5hbWVdO1xuICB2YXIgc2FmZVByb3BOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB3YXJuaW5nSGludDtcbiAgdmFyIGVsZW1lbnRUeXBlID0gZWxlbWVudC50eXBlO1xuICAvKipcbiAgICogQmxhY2tsaXN0aW5nIGluc3RlYWQgb2Ygd2hpdGVsaXN0aW5nXG4gICAqXG4gICAqIEJsYWNrbGlzdGluZyB3aWxsIG1pc3Mgc29tZSBjb21wb25lbnRzLCBzdWNoIGFzIFJlYWN0LkZyYWdtZW50LiBUaG9zZSB3aWxsIGF0IGxlYXN0XG4gICAqIHRyaWdnZXIgYSB3YXJuaW5nIGluIFJlYWN0LlxuICAgKiBXZSBjYW4ndCB3aGl0ZWxpc3QgYmVjYXVzZSB0aGVyZSBpcyBubyBzYWZlIHdheSB0byBkZXRlY3QgUmVhY3QuZm9yd2FyZFJlZlxuICAgKiBvciBjbGFzcyBjb21wb25lbnRzLiBcIlNhZmVcIiBtZWFucyB0aGVyZSdzIG5vIHB1YmxpYyBBUEkuXG4gICAqXG4gICAqL1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdmdW5jdGlvbicgJiYgIWlzQ2xhc3NDb21wb25lbnQoZWxlbWVudFR5cGUpKSB7XG4gICAgd2FybmluZ0hpbnQgPSAnRGlkIHlvdSBhY2NpZGVudGFsbHkgdXNlIGEgcGxhaW4gZnVuY3Rpb24gY29tcG9uZW50IGZvciBhbiBlbGVtZW50IGluc3RlYWQ/JztcbiAgfVxuXG4gIGlmICh3YXJuaW5nSGludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgXCIuY29uY2F0KGxvY2F0aW9uLCBcIiBgXCIpLmNvbmNhdChzYWZlUHJvcE5hbWUsIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAuIFwiKSArIFwiRXhwZWN0ZWQgYW4gZWxlbWVudCB0aGF0IGNhbiBob2xkIGEgcmVmLiBcIi5jb25jYXQod2FybmluZ0hpbnQsIFwiIFwiKSArICdGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9jYXZlYXQtd2l0aC1yZWZzLWd1aWRlJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGVsZW1lbnRBY2NlcHRpbmdSZWYgPSBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMuZWxlbWVudCwgYWNjZXB0aW5nUmVmKTtcbmVsZW1lbnRBY2NlcHRpbmdSZWYuaXNSZXF1aXJlZCA9IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsIGFjY2VwdGluZ1JlZik7XG5leHBvcnQgZGVmYXVsdCBlbGVtZW50QWNjZXB0aW5nUmVmOyIsImltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjaGFpblByb3BUeXBlcyBmcm9tICcuL2NoYWluUHJvcFR5cGVzJztcblxuZnVuY3Rpb24gaXNDbGFzc0NvbXBvbmVudChlbGVtZW50VHlwZSkge1xuICAvLyBlbGVtZW50VHlwZS5wcm90b3R5cGU/LmlzUmVhY3RDb21wb25lbnRcbiAgdmFyIF9lbGVtZW50VHlwZSRwcm90b3R5cCA9IGVsZW1lbnRUeXBlLnByb3RvdHlwZSxcbiAgICAgIHByb3RvdHlwZSA9IF9lbGVtZW50VHlwZSRwcm90b3R5cCA9PT0gdm9pZCAwID8ge30gOiBfZWxlbWVudFR5cGUkcHJvdG90eXA7XG4gIHJldHVybiBCb29sZWFuKHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBzYWZlUHJvcE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgd2FybmluZ0hpbnQ7XG4gIC8qKlxuICAgKiBCbGFja2xpc3RpbmcgaW5zdGVhZCBvZiB3aGl0ZWxpc3RpbmdcbiAgICpcbiAgICogQmxhY2tsaXN0aW5nIHdpbGwgbWlzcyBzb21lIGNvbXBvbmVudHMsIHN1Y2ggYXMgUmVhY3QuRnJhZ21lbnQuIFRob3NlIHdpbGwgYXQgbGVhc3RcbiAgICogdHJpZ2dlciBhIHdhcm5pbmcgaW4gUmVhY3QuXG4gICAqIFdlIGNhbid0IHdoaXRlbGlzdCBiZWNhdXNlIHRoZXJlIGlzIG5vIHNhZmUgd2F5IHRvIGRldGVjdCBSZWFjdC5mb3J3YXJkUmVmXG4gICAqIG9yIGNsYXNzIGNvbXBvbmVudHMuIFwiU2FmZVwiIG1lYW5zIHRoZXJlJ3Mgbm8gcHVibGljIEFQSS5cbiAgICpcbiAgICovXG5cbiAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIWlzQ2xhc3NDb21wb25lbnQocHJvcFZhbHVlKSkge1xuICAgIHdhcm5pbmdIaW50ID0gJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHByb3ZpZGUgYSBwbGFpbiBmdW5jdGlvbiBjb21wb25lbnQgaW5zdGVhZD8nO1xuICB9XG5cbiAgaWYgKHdhcm5pbmdIaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBcIi5jb25jYXQobG9jYXRpb24sIFwiIGBcIikuY29uY2F0KHNhZmVQcm9wTmFtZSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYC4gXCIpICsgXCJFeHBlY3RlZCBhbiBlbGVtZW50IHR5cGUgdGhhdCBjYW4gaG9sZCBhIHJlZi4gXCIuY29uY2F0KHdhcm5pbmdIaW50LCBcIiBcIikgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvY2F2ZWF0LXdpdGgtcmVmcy1ndWlkZScpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5lbGVtZW50VHlwZSwgZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYpOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbi8vIFRoaXMgbW9kdWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9haXJibmIvcHJvcC10eXBlcy1leGFjdCByZXBvc2l0b3J5LlxuLy8gSG93ZXZlciwgaW4gb3JkZXIgdG8gcmVkdWNlIHRoZSBudW1iZXIgb2YgZGVwZW5kZW5jaWVzIGFuZCB0byByZW1vdmUgc29tZSBleHRyYSBzYWZlIGNoZWNrc1xuLy8gdGhlIG1vZHVsZSB3YXMgZm9ya2VkLlxuLy8gT25seSBleHBvcnRlZCBmb3IgdGVzdCBwdXJwb3Nlcy5cbmV4cG9ydCB2YXIgc3BlY2lhbFByb3BlcnR5ID0gXCJleGFjdC1wcm9wOiBcXHUyMDBCXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGFjdFByb3AocHJvcFR5cGVzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIHByb3BUeXBlcztcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcFR5cGVzLCBfZGVmaW5lUHJvcGVydHkoe30sIHNwZWNpYWxQcm9wZXJ0eSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIHVuc3VwcG9ydGVkUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gIXByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKTtcbiAgICB9KTtcblxuICAgIGlmICh1bnN1cHBvcnRlZFByb3BzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgZm9sbG93aW5nIHByb3BzIGFyZSBub3Qgc3VwcG9ydGVkOiBcIi5jb25jYXQodW5zdXBwb3J0ZWRQcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIFwiYFwiLmNvbmNhdChwcm9wLCBcImBcIik7XG4gICAgICB9KS5qb2luKCcsICcpLCBcIi4gUGxlYXNlIHJlbW92ZSB0aGVtLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pKTtcbn0iLCIvKipcbiAqIFdBUk5JTkc6IERvbid0IGltcG9ydCB0aGlzIGRpcmVjdGx5LlxuICogVXNlIGBNdWlFcnJvcmAgZnJvbSBgQG1hdGVyaWFsLXVpL3V0aWxzL21hY3Jvcy9NdWlFcnJvci5tYWNyb2AgaW5zdGVhZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE11aUVycm9yTWVzc2FnZShjb2RlKSB7XG4gIC8vIEFwcGx5IGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tdGVtcGxhdGUtbGl0ZXJhbHMgaW4gbG9vc2UgbW9kZVxuICAvLyBsb29zZSBtb2RlIGlzIHNhZmUgaWZmIHdlJ3JlIGNvbmNhdGVuYXRpbmcgcHJpbWl0aXZlc1xuICAvLyBzZWUgaHR0cHM6Ly9iYWJlbGpzLmlvL2RvY3MvZW4vYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS10ZW1wbGF0ZS1saXRlcmFscyNsb29zZVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHByZWZlci10ZW1wbGF0ZSAqL1xuICB2YXIgdXJsID0gJ2h0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3Byb2R1Y3Rpb24tZXJyb3IvP2NvZGU9JyArIGNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyByZXN0IHBhcmFtcyBvdmVyLXRyYW5zcGlsZSBmb3IgdGhpcyBjYXNlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHVybCArPSAnJmFyZ3NbXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4gJ01pbmlmaWVkIE1hdGVyaWFsLVVJIGVycm9yICMnICsgY29kZSArICc7IHZpc2l0ICcgKyB1cmwgKyAnIGZvciB0aGUgZnVsbCBtZXNzYWdlLic7XG4gIC8qIGVzbGludC1lbmFibGUgcHJlZmVyLXRlbXBsYXRlICovXG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgRm9yd2FyZFJlZiwgTWVtbyB9IGZyb20gJ3JlYWN0LWlzJzsgLy8gU2ltcGxpZmllZCBwb2x5ZmlsbCBmb3IgSUUgMTEgc3VwcG9ydFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9GdW5jdGlvbi5uYW1lL2Jsb2IvNThiMzE0ZDRhOTgzMTEwYzM2ODJmMTIyOGY4NDVkMzljY2NhMTgxNy9GdW5jdGlvbi5uYW1lLmpzI0wzXG5cbnZhciBmbk5hbWVNYXRjaFJlZ2V4ID0gL15cXHMqZnVuY3Rpb24oPzpcXHN8XFxzKlxcL1xcKi4qXFwqXFwvXFxzKikrKFteKFxccy9dKilcXHMqLztcbmV4cG9ydCBmdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWUoZm4pIHtcbiAgdmFyIG1hdGNoID0gXCJcIi5jb25jYXQoZm4pLm1hdGNoKGZuTmFtZU1hdGNoUmVnZXgpO1xuICB2YXIgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICByZXR1cm4gbmFtZSB8fCAnJztcbn1cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gQ29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZmFsbGJhY2tcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25Db21wb25lbnROYW1lKENvbXBvbmVudCkge1xuICB2YXIgZmFsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8IGdldEZ1bmN0aW9uTmFtZShDb21wb25lbnQpIHx8IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uQ29tcG9uZW50TmFtZShpbm5lclR5cGUpO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gXCJcIi5jb25jYXQod3JhcHBlck5hbWUsIFwiKFwiKS5jb25jYXQoZnVuY3Rpb25OYW1lLCBcIilcIikgOiB3cmFwcGVyTmFtZSk7XG59XG4vKipcbiAqIGNoZXJyeS1waWNrIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzc2OWIxZjI3MGUxMjUxZDlkYmRjZTBmY2JkOWU5MmU1MDJkMDU5YjgvcGFja2FnZXMvc2hhcmVkL2dldENvbXBvbmVudE5hbWUuanNcbiAqIG9yaWdpbmFsbHkgZm9ya2VkIGZyb20gcmVjb21wb3NlL2dldERpc3BsYXlOYW1lIHdpdGggYWRkZWQgSUUgMTEgc3VwcG9ydFxuICpcbiAqIEBwYXJhbSB7UmVhY3QuUmVhY3RUeXBlfSBDb21wb25lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgaWYgKENvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnZXRGdW5jdGlvbkNvbXBvbmVudE5hbWUoQ29tcG9uZW50LCAnQ29tcG9uZW50Jyk7XG4gIH1cblxuICBpZiAoX3R5cGVvZihDb21wb25lbnQpID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAoQ29tcG9uZW50LiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIEZvcndhcmRSZWY6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZShDb21wb25lbnQsIENvbXBvbmVudC5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgTWVtbzpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKENvbXBvbmVudCwgQ29tcG9uZW50LnR5cGUsICdtZW1vJyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCIvKiogQGxpY2Vuc2UgTWF0ZXJpYWwtVUkgdjQuMTEuMlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYWluUHJvcFR5cGVzIH0gZnJvbSAnLi9jaGFpblByb3BUeXBlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZXBtZXJnZSB9IGZyb20gJy4vZGVlcG1lcmdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWxlbWVudEFjY2VwdGluZ1JlZiB9IGZyb20gJy4vZWxlbWVudEFjY2VwdGluZ1JlZic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmIH0gZnJvbSAnLi9lbGVtZW50VHlwZUFjY2VwdGluZ1JlZic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4YWN0UHJvcCB9IGZyb20gJy4vZXhhY3RQcm9wJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9mb3JtYXRNdWlFcnJvck1lc3NhZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJy4vZ2V0RGlzcGxheU5hbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICcuL0hUTUxFbGVtZW50VHlwZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvbnlmaWxsR2xvYmFsIH0gZnJvbSAnLi9wb255ZmlsbEdsb2JhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZlR5cGUgfSBmcm9tICcuL3JlZlR5cGUnOyIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xudmFyIHJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgcmVmVHlwZTsiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXknO1xuXG4vLyBFeHBvcnQgamF2YXNjcmlwdCBzdHlsZSBhbmQgY3NzIHN0eWxlIHZlbmRvciBwcmVmaXhlcy5cbnZhciBqcyA9ICcnO1xudmFyIGNzcyA9ICcnO1xudmFyIHZlbmRvciA9ICcnO1xudmFyIGJyb3dzZXIgPSAnJztcbnZhciBpc1RvdWNoID0gaXNJbkJyb3dzZXIgJiYgJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBXZSBzaG91bGQgbm90IGRvIGFueXRoaW5nIGlmIHJlcXVpcmVkIHNlcnZlcnNpZGUuXG5cbmlmIChpc0luQnJvd3Nlcikge1xuICAvLyBPcmRlciBtYXR0ZXJzLiBXZSBuZWVkIHRvIGNoZWNrIFdlYmtpdCB0aGUgbGFzdCBvbmUgYmVjYXVzZVxuICAvLyBvdGhlciB2ZW5kb3JzIHVzZSB0byBhZGQgV2Via2l0IHByZWZpeGVzIHRvIHNvbWUgcHJvcGVydGllc1xuICB2YXIganNDc3NNYXAgPSB7XG4gICAgTW96OiAnLW1vei0nLFxuICAgIG1zOiAnLW1zLScsXG4gICAgTzogJy1vLScsXG4gICAgV2Via2l0OiAnLXdlYmtpdC0nXG4gIH07XG5cbiAgdmFyIF9kb2N1bWVudCRjcmVhdGVFbGVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgIHN0eWxlID0gX2RvY3VtZW50JGNyZWF0ZUVsZW1lLnN0eWxlO1xuXG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAganMgPSBrZXk7XG4gICAgICBjc3MgPSBqc0Nzc01hcFtrZXldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IC8vIENvcnJlY3RseSBkZXRlY3QgdGhlIEVkZ2UgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJ21zSHlwaGVucycgaW4gc3R5bGUpIHtcbiAgICBqcyA9ICdtcyc7XG4gICAgY3NzID0ganNDc3NNYXAubXM7XG4gICAgYnJvd3NlciA9ICdlZGdlJztcbiAgfSAvLyBDb3JyZWN0bHkgZGV0ZWN0IHRoZSBTYWZhcmkgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJy1hcHBsZS10cmFpbGluZy13b3JkJyBpbiBzdHlsZSkge1xuICAgIHZlbmRvciA9ICdhcHBsZSc7XG4gIH1cbn1cbi8qKlxuICogVmVuZG9yIHByZWZpeCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKlxuICogQHR5cGUge3tqczogU3RyaW5nLCBjc3M6IFN0cmluZywgdmVuZG9yOiBTdHJpbmcsIGJyb3dzZXI6IFN0cmluZ319XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxudmFyIHByZWZpeCA9IHtcbiAganM6IGpzLFxuICBjc3M6IGNzcyxcbiAgdmVuZG9yOiB2ZW5kb3IsXG4gIGJyb3dzZXI6IGJyb3dzZXIsXG4gIGlzVG91Y2g6IGlzVG91Y2hcbn07XG5cbi8qKlxuICogVGVzdCBpZiBhIGtleWZyYW1lIGF0LXJ1bGUgc2hvdWxkIGJlIHByZWZpeGVkIG9yIG5vdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2ZW5kb3IgcHJlZml4IHN0cmluZyBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydGVkS2V5ZnJhbWVzKGtleSkge1xuICAvLyBLZXlmcmFtZXMgaXMgYWxyZWFkeSBwcmVmaXhlZC4gZS5nLiBrZXkgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGEnXG4gIGlmIChrZXlbMV0gPT09ICctJykgcmV0dXJuIGtleTsgLy8gTm8gbmVlZCB0byBwcmVmaXggSUUvRWRnZS4gT2xkZXIgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdW5zdXBwb3J0ZWQgcnVsZXMuXG4gIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1rZXlmcmFtZXNcblxuICBpZiAocHJlZml4LmpzID09PSAnbXMnKSByZXR1cm4ga2V5O1xuICByZXR1cm4gXCJAXCIgKyBwcmVmaXguY3NzICsgXCJrZXlmcmFtZXNcIiArIGtleS5zdWJzdHIoMTApO1xufVxuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9YXBwZWFyYW5jZVxuXG52YXIgYXBwZWFyZW5jZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ2FwcGVhcmFuY2UnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ2FwcGVhcmFuY2UnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y29sb3ItYWRqdXN0XG5cbnZhciBjb2xvckFkanVzdCA9IHtcbiAgbm9QcmVmaWxsOiBbJ2NvbG9yLWFkanVzdCddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnY29sb3ItYWRqdXN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSByZXR1cm4gcHJlZml4LmNzcyArIFwicHJpbnQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG52YXIgcmVnRXhwID0gL1stXFxzXSsoLik/L2c7XG4vKipcbiAqIFJlcGxhY2VzIHRoZSBsZXR0ZXIgd2l0aCB0aGUgY2FwaXRhbCBsZXR0ZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBjXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b1VwcGVyKG1hdGNoLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7XG59XG4vKipcbiAqIENvbnZlcnQgZGFzaCBzZXBhcmF0ZWQgc3RyaW5ncyB0byBjYW1lbC1jYXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnRXhwLCB0b1VwcGVyKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRhc2ggc2VwYXJhdGVkIHN0cmluZ3MgdG8gcGFzY2FsIGNhc2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhc2NhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIGNhbWVsaXplKFwiLVwiICsgc3RyKTtcbn1cblxuLy8gYnV0IHdlIGNhbiB1c2UgYSBsb25naGFuZCBwcm9wZXJ0eSBpbnN0ZWFkLlxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW1hc2tcblxudmFyIG1hc2sgPSB7XG4gIG5vUHJlZmlsbDogWydtYXNrJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15tYXNrLy50ZXN0KHByb3ApKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0Jykge1xuICAgICAgdmFyIGxvbmdoYW5kID0gJ21hc2staW1hZ2UnO1xuXG4gICAgICBpZiAoY2FtZWxpemUobG9uZ2hhbmQpIGluIHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJlZml4LmpzICsgcGFzY2FsaXplKGxvbmdoYW5kKSBpbiBzdHlsZSkge1xuICAgICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10ZXh0LW9yaWVudGF0aW9uXG5cbnZhciB0ZXh0T3JpZW50YXRpb24gPSB7XG4gIG5vUHJlZmlsbDogWyd0ZXh0LW9yaWVudGF0aW9uJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICd0ZXh0LW9yaWVudGF0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScgJiYgIXByZWZpeC5pc1RvdWNoKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10cmFuc2Zvcm1cblxudmFyIHRyYW5zZm9ybSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zZm9ybSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvcCAhPT0gJ3RyYW5zZm9ybScpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLnRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dHJhbnNpdGlvblxuXG52YXIgdHJhbnNpdGlvbiA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zaXRpb24nXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb3AgIT09ICd0cmFuc2l0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9d3JpdGluZy1tb2RlXG5cbnZhciB3cml0aW5nTW9kZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3dyaXRpbmctbW9kZSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnd3JpdGluZy1tb2RlJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ1dlYmtpdCcgfHwgcHJlZml4LmpzID09PSAnbXMnICYmIHByZWZpeC5icm93c2VyICE9PSAnZWRnZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXVzZXItc2VsZWN0XG5cbnZhciB1c2VyU2VsZWN0ID0ge1xuICBub1ByZWZpbGw6IFsndXNlci1zZWxlY3QnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ3VzZXItc2VsZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicgfHwgcHJlZml4LmpzID09PSAnbXMnIHx8IHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW11bHRpY29sdW1uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzQ5MVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy8xNzdcblxudmFyIGJyZWFrUHJvcHNPbGQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15icmVhay0vLnRlc3QocHJvcCkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSB7XG4gICAgICB2YXIganNQcm9wID0gXCJXZWJraXRDb2x1bW5cIiArIHBhc2NhbGl6ZShwcm9wKTtcbiAgICAgIHJldHVybiBqc1Byb3AgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgXCJjb2x1bW4tXCIgKyBwcm9wIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicpIHtcbiAgICAgIHZhciBfanNQcm9wID0gXCJwYWdlXCIgKyBwYXNjYWxpemUocHJvcCk7XG5cbiAgICAgIHJldHVybiBfanNQcm9wIGluIHN0eWxlID8gXCJwYWdlLVwiICsgcHJvcCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvMzI0LlxuXG52YXIgaW5saW5lTG9naWNhbE9sZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgaWYgKCEvXihib3JkZXJ8bWFyZ2lufHBhZGRpbmcpLWlubGluZS8udGVzdChwcm9wKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onKSByZXR1cm4gcHJvcDtcbiAgICB2YXIgbmV3UHJvcCA9IHByb3AucmVwbGFjZSgnLWlubGluZScsICcnKTtcbiAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgfVxufTtcblxuLy8gQ2FtZWxpemF0aW9uIGlzIHJlcXVpcmVkIGJlY2F1c2Ugd2UgY2FuJ3QgdGVzdCB1c2luZy5cbi8vIENTUyBzeW50YXggZm9yIGUuZy4gaW4gRkYuXG5cbnZhciB1bnByZWZpeGVkID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICByZXR1cm4gY2FtZWxpemUocHJvcCkgaW4gc3R5bGUgPyBwcm9wIDogZmFsc2U7XG4gIH1cbn07XG5cbnZhciBwcmVmaXhlZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIHBhc2NhbGl6ZWQgPSBwYXNjYWxpemUocHJvcCk7IC8vIFJldHVybiBjdXN0b20gQ1NTIHZhcmlhYmxlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJykgcmV0dXJuIHByb3A7IC8vIFJldHVybiBhbHJlYWR5IHByZWZpeGVkIHZhbHVlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJyAmJiBwcm9wWzFdID09PSAnLScpIHJldHVybiBwcm9wO1xuICAgIGlmIChwcmVmaXguanMgKyBwYXNjYWxpemVkIGluIHN0eWxlKSByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7IC8vIFRyeSB3ZWJraXQgZmFsbGJhY2suXG5cbiAgICBpZiAocHJlZml4LmpzICE9PSAnV2Via2l0JyAmJiBcIldlYmtpdFwiICsgcGFzY2FsaXplZCBpbiBzdHlsZSkgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2Nyb2xsLXNuYXBcblxudmFyIHNjcm9sbFNuYXAgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3Auc3Vic3RyaW5nKDAsIDExKSAhPT0gJ3Njcm9sbC1zbmFwJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIFwiXCIgKyBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW92ZXJzY3JvbGwtYmVoYXZpb3JcblxudmFyIG92ZXJzY3JvbGxCZWhhdmlvciA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ292ZXJzY3JvbGwtYmVoYXZpb3InKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnbXMnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIFwic2Nyb2xsLWNoYWluaW5nXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnZhciBwcm9wTWFwID0ge1xuICAnZmxleC1ncm93JzogJ2ZsZXgtcG9zaXRpdmUnLFxuICAnZmxleC1zaHJpbmsnOiAnZmxleC1uZWdhdGl2ZScsXG4gICdmbGV4LWJhc2lzJzogJ2ZsZXgtcHJlZmVycmVkLXNpemUnLFxuICAnanVzdGlmeS1jb250ZW50JzogJ2ZsZXgtcGFjaycsXG4gIG9yZGVyOiAnZmxleC1vcmRlcicsXG4gICdhbGlnbi1pdGVtcyc6ICdmbGV4LWFsaWduJyxcbiAgJ2FsaWduLWNvbnRlbnQnOiAnZmxleC1saW5lLXBhY2snIC8vICdhbGlnbi1zZWxmJyBpcyBoYW5kbGVkIGJ5ICdhbGlnbi1zZWxmJyBwbHVnaW4uXG5cbn07IC8vIFN1cHBvcnQgb2xkIGZsZXggc3BlYyBmcm9tIDIwMTIuXG5cbnZhciBmbGV4MjAxMiA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIG5ld1Byb3AgPSBwcm9wTWFwW3Byb3BdO1xuICAgIGlmICghbmV3UHJvcCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcHJvcE1hcCQxID0ge1xuICBmbGV4OiAnYm94LWZsZXgnLFxuICAnZmxleC1ncm93JzogJ2JveC1mbGV4JyxcbiAgJ2ZsZXgtZGlyZWN0aW9uJzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgb3JkZXI6ICdib3gtb3JkaW5hbC1ncm91cCcsXG4gICdhbGlnbi1pdGVtcyc6ICdib3gtYWxpZ24nLFxuICAnZmxleC1mbG93JzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgJ2p1c3RpZnktY29udGVudCc6ICdib3gtcGFjaydcbn07XG52YXIgcHJvcEtleXMgPSBPYmplY3Qua2V5cyhwcm9wTWFwJDEpO1xuXG52YXIgcHJlZml4Q3NzID0gZnVuY3Rpb24gcHJlZml4Q3NzKHApIHtcbiAgcmV0dXJuIHByZWZpeC5jc3MgKyBwO1xufTsgLy8gU3VwcG9ydCBvbGQgZmxleCBzcGVjIGZyb20gMjAwOS5cblxuXG52YXIgZmxleDIwMDkgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSwgX3JlZikge1xuICAgIHZhciBtdWx0aXBsZSA9IF9yZWYubXVsdGlwbGU7XG5cbiAgICBpZiAocHJvcEtleXMuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICB2YXIgbmV3UHJvcCA9IHByb3BNYXAkMVtwcm9wXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5ld1Byb3ApKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW11bHRpcGxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3UHJvcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIShwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcFswXSkgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdQcm9wLm1hcChwcmVmaXhDc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gcGx1Z2lucyA9IFtcbi8vICAgLi4ucGx1Z2lucyxcbi8vICAgIGJyZWFrUHJvcHNPbGQsXG4vLyAgICBpbmxpbmVMb2dpY2FsT2xkLFxuLy8gICAgdW5wcmVmaXhlZCxcbi8vICAgIHByZWZpeGVkLFxuLy8gICAgc2Nyb2xsU25hcCxcbi8vICAgIGZsZXgyMDEyLFxuLy8gICAgZmxleDIwMDlcbi8vIF1cbi8vIFBsdWdpbnMgd2l0aG91dCAnbm9QcmVmaWxsJyB2YWx1ZSwgZ29pbmcgbGFzdC5cbi8vICdmbGV4LSonIHBsdWdpbnMgc2hvdWxkIGJlIGF0IHRoZSBib3R0b20uXG4vLyAnZmxleDIwMDknIGdvaW5nIGFmdGVyICdmbGV4MjAxMicuXG4vLyAncHJlZml4ZWQnIGdvaW5nIGFmdGVyICd1bnByZWZpeGVkJ1xuXG52YXIgcGx1Z2lucyA9IFthcHBlYXJlbmNlLCBjb2xvckFkanVzdCwgbWFzaywgdGV4dE9yaWVudGF0aW9uLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIHdyaXRpbmdNb2RlLCB1c2VyU2VsZWN0LCBicmVha1Byb3BzT2xkLCBpbmxpbmVMb2dpY2FsT2xkLCB1bnByZWZpeGVkLCBwcmVmaXhlZCwgc2Nyb2xsU25hcCwgb3ZlcnNjcm9sbEJlaGF2aW9yLCBmbGV4MjAxMiwgZmxleDIwMDldO1xudmFyIHByb3BlcnR5RGV0ZWN0b3JzID0gcGx1Z2lucy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KTtcbnZhciBub1ByZWZpbGwgPSBwbHVnaW5zLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5ub1ByZWZpbGw7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIHApIHtcbiAgYS5wdXNoLmFwcGx5KGEsIF90b0NvbnN1bWFibGVBcnJheShwLm5vUHJlZmlsbCkpO1xuICByZXR1cm4gYTtcbn0sIFtdKTtcblxudmFyIGVsO1xudmFyIGNhY2hlID0ge307XG5cbmlmIChpc0luQnJvd3Nlcikge1xuICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gV2UgdGVzdCBldmVyeSBwcm9wZXJ0eSBvbiB2ZW5kb3IgcHJlZml4IHJlcXVpcmVtZW50LlxuICAvLyBPbmNlIHRlc3RlZCwgcmVzdWx0IGlzIGNhY2hlZC4gSXQgZ2l2ZXMgdXMgdXAgdG8gNzAlIHBlcmYgYm9vc3QuXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2VsZW1lbnQtc3R5bGUtb2JqZWN0LWFjY2Vzcy12cy1wbGFpbi1vYmplY3RcbiAgLy9cbiAgLy8gUHJlZmlsbCBjYWNoZSB3aXRoIGtub3duIGNzcyBwcm9wZXJ0aWVzIHRvIHJlZHVjZSBhbW91bnQgb2ZcbiAgLy8gcHJvcGVydGllcyB3ZSBuZWVkIHRvIGZlYXR1cmUgdGVzdCBhdCBydW50aW1lLlxuICAvLyBodHRwOi8vZGF2aWR3YWxzaC5uYW1lL3ZlbmRvci1wcmVmaXhcblxuICB2YXIgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICcnKTtcblxuICBmb3IgKHZhciBrZXkkMSBpbiBjb21wdXRlZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBpZiAoIWlzTmFOKGtleSQxKSkgY2FjaGVbY29tcHV0ZWRba2V5JDFdXSA9IGNvbXB1dGVkW2tleSQxXTtcbiAgfSAvLyBQcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNvcnJlY3RseSBkZXRlY3RlZCB1c2luZyB0aGVcbiAgLy8gY2FjaGUgcHJlZmlsbCBtZXRob2QuXG5cblxuICBub1ByZWZpbGwuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBkZWxldGUgY2FjaGVbeF07XG4gIH0pO1xufVxuLyoqXG4gKiBUZXN0IGlmIGEgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCByZXR1cm5zIHN1cHBvcnRlZCBwcm9wZXJ0eSB3aXRoIHZlbmRvclxuICogcHJlZml4IGlmIHJlcXVpcmVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcCBkYXNoIHNlcGFyYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgLy8gRm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgaWYgKCFlbCkgcmV0dXJuIHByb3A7IC8vIFJlbW92ZSBjYWNoZSBmb3IgYmVuY2htYXJrIHRlc3RzIG9yIHJldHVybiBwcm9wZXJ0eSBmcm9tIHRoZSBjYWNoZS5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdiZW5jaG1hcmsnICYmIGNhY2hlW3Byb3BdICE9IG51bGwpIHtcbiAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gIH0gLy8gQ2hlY2sgaWYgJ3RyYW5zaXRpb24nIG9yICd0cmFuc2Zvcm0nIG5hdGl2ZWx5IHN1cHBvcnRlZCBpbiBicm93c2VyLlxuXG5cbiAgaWYgKHByb3AgPT09ICd0cmFuc2l0aW9uJyB8fCBwcm9wID09PSAndHJhbnNmb3JtJykge1xuICAgIG9wdGlvbnNbcHJvcF0gPSBwcm9wIGluIGVsLnN0eWxlO1xuICB9IC8vIEZpbmQgYSBwbHVnaW4gZm9yIGN1cnJlbnQgcHJlZml4IHByb3BlcnR5LlxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eURldGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW3Byb3BdID0gcHJvcGVydHlEZXRlY3RvcnNbaV0ocHJvcCwgZWwuc3R5bGUsIG9wdGlvbnMpOyAvLyBCcmVhayBsb29wLCBpZiB2YWx1ZSBmb3VuZC5cblxuICAgIGlmIChjYWNoZVtwcm9wXSkgYnJlYWs7XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuICAvLyBGaXJlZm94IGNhbiBldmVuIHRocm93IGFuIGVycm9yIGZvciBpbnZhbGlkIHByb3BlcnRpZXMsIGUuZy4sIFwiMFwiLlxuXG5cbiAgdHJ5IHtcbiAgICBlbC5zdHlsZVtwcm9wXSA9ICcnO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FjaGVbcHJvcF07XG59XG5cbnZhciBjYWNoZSQxID0ge307XG52YXIgdHJhbnNpdGlvblByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IDEsXG4gICd0cmFuc2l0aW9uLXByb3BlcnR5JzogMSxcbiAgJy13ZWJraXQtdHJhbnNpdGlvbic6IDEsXG4gICctd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHknOiAxXG59O1xudmFyIHRyYW5zUHJvcHNSZWdFeHAgPSAvKF5cXHMqW1xcdy1dKyl8LCAoXFxzKltcXHctXSspKD8hW14oKV0qXFwpKS9nO1xudmFyIGVsJDE7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgdHJhbnNpdGlvbi90cmFuc2Zvcm0gaWYgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYXRjaFxuICogQHBhcmFtIHtTdHJpbmd9IHAxXG4gKiBAcGFyYW0ge1N0cmluZ30gcDJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHByZWZpeFRyYW5zaXRpb25DYWxsYmFjayhtYXRjaCwgcDEsIHAyKSB7XG4gIGlmIChwMSA9PT0gJ3ZhcicpIHJldHVybiAndmFyJztcbiAgaWYgKHAxID09PSAnYWxsJykgcmV0dXJuICdhbGwnO1xuICBpZiAocDIgPT09ICdhbGwnKSByZXR1cm4gJywgYWxsJztcbiAgdmFyIHByZWZpeGVkVmFsdWUgPSBwMSA/IHN1cHBvcnRlZFByb3BlcnR5KHAxKSA6IFwiLCBcIiArIHN1cHBvcnRlZFByb3BlcnR5KHAyKTtcbiAgaWYgKCFwcmVmaXhlZFZhbHVlKSByZXR1cm4gcDEgfHwgcDI7XG4gIHJldHVybiBwcmVmaXhlZFZhbHVlO1xufVxuXG5pZiAoaXNJbkJyb3dzZXIpIGVsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgaWYgbmVlZGVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgdmFsdWUgaXMgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSkge1xuICAvLyBGb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxuICB2YXIgcHJlZml4ZWRWYWx1ZSA9IHZhbHVlO1xuICBpZiAoIWVsJDEgfHwgcHJvcGVydHkgPT09ICdjb250ZW50JykgcmV0dXJuIHZhbHVlOyAvLyBJdCBpcyBhIHN0cmluZyBvciBhIG51bWJlciBhcyBhIHN0cmluZyBsaWtlICcxJy5cbiAgLy8gV2Ugd2FudCBvbmx5IHByZWZpeGFibGUgdmFsdWVzIGhlcmUuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcblxuICBpZiAodHlwZW9mIHByZWZpeGVkVmFsdWUgIT09ICdzdHJpbmcnIHx8ICFpc05hTihwYXJzZUludChwcmVmaXhlZFZhbHVlLCAxMCkpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVkVmFsdWU7XG4gIH0gLy8gQ3JlYXRlIGNhY2hlIGtleSBmb3IgY3VycmVudCB2YWx1ZS5cblxuXG4gIHZhciBjYWNoZUtleSA9IHByb3BlcnR5ICsgcHJlZml4ZWRWYWx1ZTsgLy8gUmVtb3ZlIGNhY2hlIGZvciBiZW5jaG1hcmsgdGVzdHMgb3IgcmV0dXJuIHZhbHVlIGZyb20gY2FjaGUuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnYmVuY2htYXJrJyAmJiBjYWNoZSQxW2NhY2hlS2V5XSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlJDFbY2FjaGVLZXldO1xuICB9IC8vIElFIGNhbiBldmVuIHRocm93IGFuIGVycm9yIGluIHNvbWUgY2FzZXMsIGZvciBlLmcuIHN0eWxlLmNvbnRlbnQgPSAnYmFyJy5cblxuXG4gIHRyeSB7XG4gICAgLy8gVGVzdCB2YWx1ZSBhcyBpdCBpcy5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuICAgIGNhY2hlJDFbY2FjaGVLZXldID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmICd0cmFuc2l0aW9uJyBvciAndHJhbnNpdGlvbi1wcm9wZXJ0eScgcHJvcGVydHkuXG5cblxuICBpZiAodHJhbnNpdGlvblByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgcHJlZml4ZWRWYWx1ZSA9IHByZWZpeGVkVmFsdWUucmVwbGFjZSh0cmFuc1Byb3BzUmVnRXhwLCBwcmVmaXhUcmFuc2l0aW9uQ2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgIC8vIFZhbHVlIHdpdGggYSB2ZW5kb3IgcHJlZml4LlxuICAgIHByZWZpeGVkVmFsdWUgPSBwcmVmaXguY3NzICsgcHJlZml4ZWRWYWx1ZTsgLy8gSGFyZGNvZGUgdGVzdCB0byBjb252ZXJ0IFwiZmxleFwiIHRvIFwiLW1zLWZsZXhib3hcIiBmb3IgSUUxMC5cblxuICAgIGlmIChwcmVmaXhlZFZhbHVlID09PSAnLW1zLWZsZXgnKSBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9ICctbXMtZmxleGJveCc7IC8vIFRlc3QgcHJlZml4ZWQgdmFsdWUuXG5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7IC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuXG4gICAgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgICAgY2FjaGUkMVtjYWNoZUtleV0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuXG5cbiAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSAnJzsgLy8gV3JpdGUgY3VycmVudCB2YWx1ZSB0byBjYWNoZS5cblxuICBjYWNoZSQxW2NhY2hlS2V5XSA9IHByZWZpeGVkVmFsdWU7XG4gIHJldHVybiBjYWNoZSQxW2NhY2hlS2V5XTtcbn1cblxuZXhwb3J0IHsgcHJlZml4LCBzdXBwb3J0ZWRLZXlmcmFtZXMsIHN1cHBvcnRlZFByb3BlcnR5LCBzdXBwb3J0ZWRWYWx1ZSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIsIHByZWZlci10ZW1wbGF0ZSAqL1xudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZ1xudmFyIG1zUGF0dGVybiA9IC9ebXMtL1xudmFyIGNhY2hlID0ge31cblxuZnVuY3Rpb24gdG9IeXBoZW5Mb3dlcihtYXRjaCkge1xuICByZXR1cm4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICByZXR1cm4gY2FjaGVbbmFtZV1cbiAgfVxuXG4gIHZhciBoTmFtZSA9IG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCB0b0h5cGhlbkxvd2VyKVxuICByZXR1cm4gKGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gJy0nICsgaE5hbWUgOiBoTmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHlwaGVuYXRlU3R5bGVOYW1lXG4iLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydCB2YXIgaXNCcm93c2VyID0gKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSA9PT0gXCJvYmplY3RcIiAmJiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZG9jdW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgZG9jdW1lbnQubm9kZVR5cGUgPT09IDk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnJvd3NlcjtcbiIsImltcG9ydCBoeXBoZW5hdGUgZnJvbSAnaHlwaGVuYXRlLXN0eWxlLW5hbWUnO1xuXG4vKipcbiAqIENvbnZlcnQgY2FtZWwgY2FzZWQgcHJvcGVydHkgbmFtZXMgdG8gZGFzaCBzZXBhcmF0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gY29udmVydENhc2Uoc3R5bGUpIHtcbiAgdmFyIGNvbnZlcnRlZCA9IHt9O1xuXG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICB2YXIga2V5ID0gcHJvcC5pbmRleE9mKCctLScpID09PSAwID8gcHJvcCA6IGh5cGhlbmF0ZShwcm9wKTtcbiAgICBjb252ZXJ0ZWRba2V5XSA9IHN0eWxlW3Byb3BdO1xuICB9XG5cbiAgaWYgKHN0eWxlLmZhbGxiYWNrcykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlLmZhbGxiYWNrcykpIGNvbnZlcnRlZC5mYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3MubWFwKGNvbnZlcnRDYXNlKTtlbHNlIGNvbnZlcnRlZC5mYWxsYmFja3MgPSBjb252ZXJ0Q2FzZShzdHlsZS5mYWxsYmFja3MpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnZlcnRlZDtcbn1cbi8qKlxuICogQWxsb3cgY2FtZWwgY2FzZWQgcHJvcGVydHkgbmFtZXMgYnkgY29udmVydGluZyB0aGVtIGJhY2sgdG8gZGFzaGVyaXplZC5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZSgpIHtcbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIC8vIEhhbmRsZSBydWxlcyBsaWtlIEBmb250LWZhY2UsIHdoaWNoIGNhbiBoYXZlIG11bHRpcGxlIHN0eWxlcyBpbiBhbiBhcnJheVxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHlsZVtpbmRleF0gPSBjb252ZXJ0Q2FzZShzdHlsZVtpbmRleF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnZlcnRDYXNlKHN0eWxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgICBpZiAocHJvcC5pbmRleE9mKCctLScpID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGh5cGhlbmF0ZWRQcm9wID0gaHlwaGVuYXRlKHByb3ApOyAvLyBUaGVyZSB3YXMgbm8gY2FtZWwgY2FzZSBpbiBwbGFjZVxuXG4gICAgaWYgKHByb3AgPT09IGh5cGhlbmF0ZWRQcm9wKSByZXR1cm4gdmFsdWU7XG4gICAgcnVsZS5wcm9wKGh5cGhlbmF0ZWRQcm9wLCB2YWx1ZSk7IC8vIENvcmUgd2lsbCBpZ25vcmUgdGhhdCBwcm9wZXJ0eSB2YWx1ZSB3ZSBzZXQgdGhlIHByb3BlciBvbmUgYWJvdmUuXG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FtZWxDYXNlO1xuIiwiaW1wb3J0IHsgaGFzQ1NTVE9NU3VwcG9ydCB9IGZyb20gJ2pzcyc7XG5cbnZhciBweCA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLnB4IDogJ3B4JztcbnZhciBtcyA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLm1zIDogJ21zJztcbnZhciBwZXJjZW50ID0gaGFzQ1NTVE9NU3VwcG9ydCAmJiBDU1MgPyBDU1MucGVyY2VudCA6ICclJztcbi8qKlxuICogR2VuZXJhdGVkIGpzcy1wbHVnaW4tZGVmYXVsdC11bml0IENTUyBwcm9wZXJ0eSB1bml0c1xuICpcbiAqIEB0eXBlIG9iamVjdFxuICovXG5cbnZhciBkZWZhdWx0VW5pdHMgPSB7XG4gIC8vIEFuaW1hdGlvbiBwcm9wZXJ0aWVzXG4gICdhbmltYXRpb24tZGVsYXknOiBtcyxcbiAgJ2FuaW1hdGlvbi1kdXJhdGlvbic6IG1zLFxuICAvLyBCYWNrZ3JvdW5kIHByb3BlcnRpZXNcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBweCxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IHB4LFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogcHgsXG4gICdiYWNrZ3JvdW5kLXNpemUnOiBweCxcbiAgLy8gQm9yZGVyIFByb3BlcnRpZXNcbiAgYm9yZGVyOiBweCxcbiAgJ2JvcmRlci1ib3R0b20nOiBweCxcbiAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItYm90dG9tLXdpZHRoJzogcHgsXG4gICdib3JkZXItbGVmdCc6IHB4LFxuICAnYm9yZGVyLWxlZnQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1yaWdodCc6IHB4LFxuICAnYm9yZGVyLXJpZ2h0LXdpZHRoJzogcHgsXG4gICdib3JkZXItdG9wJzogcHgsXG4gICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXRvcC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXdpZHRoJzogcHgsXG4gICdib3JkZXItYmxvY2snOiBweCxcbiAgJ2JvcmRlci1ibG9jay1lbmQnOiBweCxcbiAgJ2JvcmRlci1ibG9jay1lbmQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1ibG9jay1zdGFydCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoJzogcHgsXG4gICdib3JkZXItYmxvY2std2lkdGgnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtZW5kJzogcHgsXG4gICdib3JkZXItaW5saW5lLWVuZC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWlubGluZS1zdGFydCc6IHB4LFxuICAnYm9yZGVyLWlubGluZS1zdGFydC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWlubGluZS13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItZW5kLWVuZC1yYWRpdXMnOiBweCxcbiAgLy8gTWFyZ2luIHByb3BlcnRpZXNcbiAgbWFyZ2luOiBweCxcbiAgJ21hcmdpbi1ib3R0b20nOiBweCxcbiAgJ21hcmdpbi1sZWZ0JzogcHgsXG4gICdtYXJnaW4tcmlnaHQnOiBweCxcbiAgJ21hcmdpbi10b3AnOiBweCxcbiAgJ21hcmdpbi1ibG9jayc6IHB4LFxuICAnbWFyZ2luLWJsb2NrLWVuZCc6IHB4LFxuICAnbWFyZ2luLWJsb2NrLXN0YXJ0JzogcHgsXG4gICdtYXJnaW4taW5saW5lJzogcHgsXG4gICdtYXJnaW4taW5saW5lLWVuZCc6IHB4LFxuICAnbWFyZ2luLWlubGluZS1zdGFydCc6IHB4LFxuICAvLyBQYWRkaW5nIHByb3BlcnRpZXNcbiAgcGFkZGluZzogcHgsXG4gICdwYWRkaW5nLWJvdHRvbSc6IHB4LFxuICAncGFkZGluZy1sZWZ0JzogcHgsXG4gICdwYWRkaW5nLXJpZ2h0JzogcHgsXG4gICdwYWRkaW5nLXRvcCc6IHB4LFxuICAncGFkZGluZy1ibG9jayc6IHB4LFxuICAncGFkZGluZy1ibG9jay1lbmQnOiBweCxcbiAgJ3BhZGRpbmctYmxvY2stc3RhcnQnOiBweCxcbiAgJ3BhZGRpbmctaW5saW5lJzogcHgsXG4gICdwYWRkaW5nLWlubGluZS1lbmQnOiBweCxcbiAgJ3BhZGRpbmctaW5saW5lLXN0YXJ0JzogcHgsXG4gIC8vIE1hc2sgcHJvcGVydGllc1xuICAnbWFzay1wb3NpdGlvbi14JzogcHgsXG4gICdtYXNrLXBvc2l0aW9uLXknOiBweCxcbiAgJ21hc2stc2l6ZSc6IHB4LFxuICAvLyBXaWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAgaGVpZ2h0OiBweCxcbiAgd2lkdGg6IHB4LFxuICAnbWluLWhlaWdodCc6IHB4LFxuICAnbWF4LWhlaWdodCc6IHB4LFxuICAnbWluLXdpZHRoJzogcHgsXG4gICdtYXgtd2lkdGgnOiBweCxcbiAgLy8gUG9zaXRpb24gcHJvcGVydGllc1xuICBib3R0b206IHB4LFxuICBsZWZ0OiBweCxcbiAgdG9wOiBweCxcbiAgcmlnaHQ6IHB4LFxuICBpbnNldDogcHgsXG4gICdpbnNldC1ibG9jayc6IHB4LFxuICAnaW5zZXQtYmxvY2stZW5kJzogcHgsXG4gICdpbnNldC1ibG9jay1zdGFydCc6IHB4LFxuICAnaW5zZXQtaW5saW5lJzogcHgsXG4gICdpbnNldC1pbmxpbmUtZW5kJzogcHgsXG4gICdpbnNldC1pbmxpbmUtc3RhcnQnOiBweCxcbiAgLy8gU2hhZG93IHByb3BlcnRpZXNcbiAgJ2JveC1zaGFkb3cnOiBweCxcbiAgJ3RleHQtc2hhZG93JzogcHgsXG4gIC8vIENvbHVtbiBwcm9wZXJ0aWVzXG4gICdjb2x1bW4tZ2FwJzogcHgsXG4gICdjb2x1bW4tcnVsZSc6IHB4LFxuICAnY29sdW1uLXJ1bGUtd2lkdGgnOiBweCxcbiAgJ2NvbHVtbi13aWR0aCc6IHB4LFxuICAvLyBGb250IGFuZCB0ZXh0IHByb3BlcnRpZXNcbiAgJ2ZvbnQtc2l6ZSc6IHB4LFxuICAnZm9udC1zaXplLWRlbHRhJzogcHgsXG4gICdsZXR0ZXItc3BhY2luZyc6IHB4LFxuICAndGV4dC1pbmRlbnQnOiBweCxcbiAgJ3RleHQtc3Ryb2tlJzogcHgsXG4gICd0ZXh0LXN0cm9rZS13aWR0aCc6IHB4LFxuICAnd29yZC1zcGFjaW5nJzogcHgsXG4gIC8vIE1vdGlvbiBwcm9wZXJ0aWVzXG4gIG1vdGlvbjogcHgsXG4gICdtb3Rpb24tb2Zmc2V0JzogcHgsXG4gIC8vIE91dGxpbmUgcHJvcGVydGllc1xuICBvdXRsaW5lOiBweCxcbiAgJ291dGxpbmUtb2Zmc2V0JzogcHgsXG4gICdvdXRsaW5lLXdpZHRoJzogcHgsXG4gIC8vIFBlcnNwZWN0aXZlIHByb3BlcnRpZXNcbiAgcGVyc3BlY3RpdmU6IHB4LFxuICAncGVyc3BlY3RpdmUtb3JpZ2luLXgnOiBwZXJjZW50LFxuICAncGVyc3BlY3RpdmUtb3JpZ2luLXknOiBwZXJjZW50LFxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAndHJhbnNmb3JtLW9yaWdpbic6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXgnOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi15JzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teic6IHBlcmNlbnQsXG4gIC8vIFRyYW5zaXRpb24gcHJvcGVydGllc1xuICAndHJhbnNpdGlvbi1kZWxheSc6IG1zLFxuICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IG1zLFxuICAvLyBBbGlnbm1lbnQgcHJvcGVydGllc1xuICAndmVydGljYWwtYWxpZ24nOiBweCxcbiAgJ2ZsZXgtYmFzaXMnOiBweCxcbiAgLy8gU29tZSByYW5kb20gcHJvcGVydGllc1xuICAnc2hhcGUtbWFyZ2luJzogcHgsXG4gIHNpemU6IHB4LFxuICBnYXA6IHB4LFxuICAvLyBHcmlkIHByb3BlcnRpZXNcbiAgZ3JpZDogcHgsXG4gICdncmlkLWdhcCc6IHB4LFxuICAnZ3JpZC1yb3ctZ2FwJzogcHgsXG4gICdncmlkLWNvbHVtbi1nYXAnOiBweCxcbiAgJ2dyaWQtdGVtcGxhdGUtcm93cyc6IHB4LFxuICAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJzogcHgsXG4gICdncmlkLWF1dG8tcm93cyc6IHB4LFxuICAnZ3JpZC1hdXRvLWNvbHVtbnMnOiBweCxcbiAgLy8gTm90IGV4aXN0aW5nIHByb3BlcnRpZXMuXG4gIC8vIFVzZWQgdG8gYXZvaWQgaXNzdWVzIHdpdGgganNzLXBsdWdpbi1leHBhbmQgaW50ZWdyYXRpb24uXG4gICdib3gtc2hhZG93LXgnOiBweCxcbiAgJ2JveC1zaGFkb3cteSc6IHB4LFxuICAnYm94LXNoYWRvdy1ibHVyJzogcHgsXG4gICdib3gtc2hhZG93LXNwcmVhZCc6IHB4LFxuICAnZm9udC1saW5lLWhlaWdodCc6IHB4LFxuICAndGV4dC1zaGFkb3cteCc6IHB4LFxuICAndGV4dC1zaGFkb3cteSc6IHB4LFxuICAndGV4dC1zaGFkb3ctYmx1cic6IHB4XG59O1xuXG4vKipcbiAqIENsb25lcyB0aGUgb2JqZWN0IGFuZCBhZGRzIGEgY2FtZWwgY2FzZWQgcHJvcGVydHkgdmVyc2lvbi5cbiAqL1xuZnVuY3Rpb24gYWRkQ2FtZWxDYXNlZFZlcnNpb24ob2JqKSB7XG4gIHZhciByZWdFeHAgPSAvKC1bYS16XSkvZztcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0clsxXS50b1VwcGVyQ2FzZSgpO1xuICB9O1xuXG4gIHZhciBuZXdPYmogPSB7fTtcblxuICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgIG5ld09ialtfa2V5XSA9IG9ialtfa2V5XTtcbiAgICBuZXdPYmpbX2tleS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZSldID0gb2JqW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxudmFyIHVuaXRzID0gYWRkQ2FtZWxDYXNlZFZlcnNpb24oZGVmYXVsdFVuaXRzKTtcbi8qKlxuICogUmVjdXJzaXZlIGRlZXAgc3R5bGUgcGFzc2luZyBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGl0ZXJhdGUocHJvcCwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB2YWx1ZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZVtpXSA9IGl0ZXJhdGUocHJvcCwgdmFsdWVbaV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb3AgPT09ICdmYWxsYmFja3MnKSB7XG4gICAgICBmb3IgKHZhciBpbm5lclByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWVbaW5uZXJQcm9wXSA9IGl0ZXJhdGUoaW5uZXJQcm9wLCB2YWx1ZVtpbm5lclByb3BdLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2lubmVyUHJvcCBpbiB2YWx1ZSkge1xuICAgICAgICB2YWx1ZVtfaW5uZXJQcm9wXSA9IGl0ZXJhdGUocHJvcCArIFwiLVwiICsgX2lubmVyUHJvcCwgdmFsdWVbX2lubmVyUHJvcF0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIHVuaXQgPSBvcHRpb25zW3Byb3BdIHx8IHVuaXRzW3Byb3BdOyAvLyBBZGQgdGhlIHVuaXQgaWYgYXZhaWxhYmxlLCBleGNlcHQgZm9yIHRoZSBzcGVjaWFsIGNhc2Ugb2YgMHB4LlxuXG4gICAgaWYgKHVuaXQgJiYgISh2YWx1ZSA9PT0gMCAmJiB1bml0ID09PSBweCkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdW5pdCA9PT0gJ2Z1bmN0aW9uJyA/IHVuaXQodmFsdWUpLnRvU3RyaW5nKCkgOiBcIlwiICsgdmFsdWUgKyB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBZGQgdW5pdCB0byBudW1lcmljIHZhbHVlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGRlZmF1bHRVbml0KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBjYW1lbENhc2VkT3B0aW9ucyA9IGFkZENhbWVsQ2FzZWRWZXJzaW9uKG9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgc3R5bGVbcHJvcF0gPSBpdGVyYXRlKHByb3AsIHN0eWxlW3Byb3BdLCBjYW1lbENhc2VkT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWx1ZSwgcHJvcCkge1xuICAgIHJldHVybiBpdGVyYXRlKHByb3AsIHZhbHVlLCBjYW1lbENhc2VkT3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSxcbiAgICBvbkNoYW5nZVZhbHVlOiBvbkNoYW5nZVZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRVbml0O1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsgUnVsZUxpc3QgfSBmcm9tICdqc3MnO1xuXG52YXIgYXQgPSAnQGdsb2JhbCc7XG52YXIgYXRQcmVmaXggPSAnQGdsb2JhbCAnO1xuXG52YXIgR2xvYmFsQ29udGFpbmVyUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdsb2JhbENvbnRhaW5lclJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnZ2xvYmFsJztcbiAgICB0aGlzLmF0ID0gYXQ7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgc2VsZWN0b3IgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzLmFkZChzZWxlY3Rvciwgc3R5bGVzW3NlbGVjdG9yXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEdsb2JhbENvbnRhaW5lclJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSdWxlID0gZnVuY3Rpb24gZ2V0UnVsZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuZ2V0KG5hbWUpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUsIHJ1biBwbHVnaW5zLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlID0gZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIGlmIChydWxlKSB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMudG9TdHJpbmcoKTtcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsQ29udGFpbmVyUnVsZTtcbn0oKTtcblxudmFyIEdsb2JhbFByZWZpeGVkUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdsb2JhbFByZWZpeGVkUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ2dsb2JhbCc7XG4gICAgdGhpcy5hdCA9IGF0O1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLnJ1bGUgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdmFyIHNlbGVjdG9yID0ga2V5LnN1YnN0cihhdFByZWZpeC5sZW5ndGgpO1xuICAgIHRoaXMucnVsZSA9IG9wdGlvbnMuanNzLmNyZWF0ZVJ1bGUoc2VsZWN0b3IsIHN0eWxlLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBHbG9iYWxQcmVmaXhlZFJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90bzIudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZSA/IHRoaXMucnVsZS50b1N0cmluZyhvcHRpb25zKSA6ICcnO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxQcmVmaXhlZFJ1bGU7XG59KCk7XG5cbnZhciBzZXBhcmF0b3JSZWdFeHAgPSAvXFxzKixcXHMqL2c7XG5cbmZ1bmN0aW9uIGFkZFNjb3BlKHNlbGVjdG9yLCBzY29wZSkge1xuICB2YXIgcGFydHMgPSBzZWxlY3Rvci5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuICB2YXIgc2NvcGVkID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHNjb3BlZCArPSBzY29wZSArIFwiIFwiICsgcGFydHNbaV0udHJpbSgpO1xuICAgIGlmIChwYXJ0c1tpICsgMV0pIHNjb3BlZCArPSAnLCAnO1xuICB9XG5cbiAgcmV0dXJuIHNjb3BlZDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTmVzdGVkR2xvYmFsQ29udGFpbmVyUnVsZShydWxlLCBzaGVldCkge1xuICB2YXIgb3B0aW9ucyA9IHJ1bGUub3B0aW9ucyxcbiAgICAgIHN0eWxlID0gcnVsZS5zdHlsZTtcbiAgdmFyIHJ1bGVzID0gc3R5bGUgPyBzdHlsZVthdF0gOiBudWxsO1xuICBpZiAoIXJ1bGVzKSByZXR1cm47XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBydWxlcykge1xuICAgIHNoZWV0LmFkZFJ1bGUobmFtZSwgcnVsZXNbbmFtZV0sIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzZWxlY3RvcjogYWRkU2NvcGUobmFtZSwgcnVsZS5zZWxlY3RvcilcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGUgc3R5bGVbYXRdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmVmaXhlZEdsb2JhbFJ1bGUocnVsZSwgc2hlZXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBydWxlLm9wdGlvbnMsXG4gICAgICBzdHlsZSA9IHJ1bGUuc3R5bGU7XG5cbiAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgIGlmIChwcm9wWzBdICE9PSAnQCcgfHwgcHJvcC5zdWJzdHIoMCwgYXQubGVuZ3RoKSAhPT0gYXQpIGNvbnRpbnVlO1xuICAgIHZhciBzZWxlY3RvciA9IGFkZFNjb3BlKHByb3Auc3Vic3RyKGF0Lmxlbmd0aCksIHJ1bGUuc2VsZWN0b3IpO1xuICAgIHNoZWV0LmFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgfSkpO1xuICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgfVxufVxuLyoqXG4gKiBDb252ZXJ0IG5lc3RlZCBydWxlcyB0byBzZXBhcmF0ZSwgcmVtb3ZlIHRoZW0gZnJvbSBvcmlnaW5hbCBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24ganNzR2xvYmFsKCkge1xuICBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChuYW1lID09PSBhdCkge1xuICAgICAgcmV0dXJuIG5ldyBHbG9iYWxDb250YWluZXJSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVbMF0gPT09ICdAJyAmJiBuYW1lLnN1YnN0cigwLCBhdFByZWZpeC5sZW5ndGgpID09PSBhdFByZWZpeCkge1xuICAgICAgcmV0dXJuIG5ldyBHbG9iYWxQcmVmaXhlZFJ1bGUobmFtZSwgc3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LnR5cGUgPT09ICdnbG9iYWwnIHx8IHBhcmVudC5vcHRpb25zLnBhcmVudCAmJiBwYXJlbnQub3B0aW9ucy5wYXJlbnQudHlwZSA9PT0gJ2dsb2JhbCcpIHtcbiAgICAgICAgb3B0aW9ucy5zY29wZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zY29wZWQgPT09IGZhbHNlKSB7XG4gICAgICBvcHRpb25zLnNlbGVjdG9yID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSwgc2hlZXQpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnIHx8ICFzaGVldCkgcmV0dXJuO1xuICAgIGhhbmRsZU5lc3RlZEdsb2JhbENvbnRhaW5lclJ1bGUocnVsZSwgc2hlZXQpO1xuICAgIGhhbmRsZVByZWZpeGVkR2xvYmFsUnVsZShydWxlLCBzaGVldCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uQ3JlYXRlUnVsZTogb25DcmVhdGVSdWxlLFxuICAgIG9uUHJvY2Vzc1J1bGU6IG9uUHJvY2Vzc1J1bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzR2xvYmFsO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcblxudmFyIHNlcGFyYXRvclJlZ0V4cCA9IC9cXHMqLFxccyovZztcbnZhciBwYXJlbnRSZWdFeHAgPSAvJi9nO1xudmFyIHJlZlJlZ0V4cCA9IC9cXCQoW1xcdy1dKykvZztcbi8qKlxuICogQ29udmVydCBuZXN0ZWQgcnVsZXMgdG8gc2VwYXJhdGUsIHJlbW92ZSB0aGVtIGZyb20gb3JpZ2luYWwgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBqc3NOZXN0ZWQoKSB7XG4gIC8vIEdldCBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yICRyZWYgcmVwbGFjZW1lbnQuXG4gIGZ1bmN0aW9uIGdldFJlcGxhY2VSZWYoY29udGFpbmVyLCBzaGVldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGtleSkge1xuICAgICAgdmFyIHJ1bGUgPSBjb250YWluZXIuZ2V0UnVsZShrZXkpIHx8IHNoZWV0ICYmIHNoZWV0LmdldFJ1bGUoa2V5KTtcblxuICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgcnVsZSA9IHJ1bGU7XG4gICAgICAgIHJldHVybiBydWxlLnNlbGVjdG9yO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIENvdWxkIG5vdCBmaW5kIHRoZSByZWZlcmVuY2VkIHJ1bGUgXFxcIlwiICsga2V5ICsgXCJcXFwiIGluIFxcXCJcIiArIChjb250YWluZXIub3B0aW9ucy5tZXRhIHx8IGNvbnRhaW5lci50b1N0cmluZygpKSArIFwiXFxcIi5cIikgOiB2b2lkIDA7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlUGFyZW50UmVmcyhuZXN0ZWRQcm9wLCBwYXJlbnRQcm9wKSB7XG4gICAgdmFyIHBhcmVudFNlbGVjdG9ycyA9IHBhcmVudFByb3Auc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgICB2YXIgbmVzdGVkU2VsZWN0b3JzID0gbmVzdGVkUHJvcC5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50U2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFyZW50ID0gcGFyZW50U2VsZWN0b3JzW2ldO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5lc3RlZFNlbGVjdG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbmVzdGVkID0gbmVzdGVkU2VsZWN0b3JzW2pdO1xuICAgICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJywgJzsgLy8gUmVwbGFjZSBhbGwgJiBieSB0aGUgcGFyZW50IG9yIHByZWZpeCAmIHdpdGggdGhlIHBhcmVudC5cblxuICAgICAgICByZXN1bHQgKz0gbmVzdGVkLmluZGV4T2YoJyYnKSAhPT0gLTEgPyBuZXN0ZWQucmVwbGFjZShwYXJlbnRSZWdFeHAsIHBhcmVudCkgOiBwYXJlbnQgKyBcIiBcIiArIG5lc3RlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhydWxlLCBjb250YWluZXIsIHByZXZPcHRpb25zKSB7XG4gICAgLy8gT3B0aW9ucyBoYXMgYmVlbiBhbHJlYWR5IGNyZWF0ZWQsIG5vdyB3ZSBvbmx5IGluY3JlYXNlIGluZGV4LlxuICAgIGlmIChwcmV2T3B0aW9ucykgcmV0dXJuIF9leHRlbmRzKHt9LCBwcmV2T3B0aW9ucywge1xuICAgICAgaW5kZXg6IHByZXZPcHRpb25zLmluZGV4ICsgMSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgIH0pO1xuICAgIHZhciBuZXN0aW5nTGV2ZWwgPSBydWxlLm9wdGlvbnMubmVzdGluZ0xldmVsO1xuICAgIG5lc3RpbmdMZXZlbCA9IG5lc3RpbmdMZXZlbCA9PT0gdW5kZWZpbmVkID8gMSA6IG5lc3RpbmdMZXZlbCArIDE7XG5cbiAgICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBydWxlLm9wdGlvbnMsIHtcbiAgICAgIG5lc3RpbmdMZXZlbDogbmVzdGluZ0xldmVsLFxuICAgICAgaW5kZXg6IGNvbnRhaW5lci5pbmRleE9mKHJ1bGUpICsgMSAvLyBXZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgbmFtZSB0byBiZSBzZXQgb3B0aW9ucyBmb3IgY2hsaWQuXG5cbiAgICB9KTtcblxuICAgIGRlbGV0ZSBvcHRpb25zLm5hbWU7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgdmFyIHN0eWxlUnVsZSA9IHJ1bGU7XG4gICAgdmFyIGNvbnRhaW5lciA9IHN0eWxlUnVsZS5vcHRpb25zLnBhcmVudDtcbiAgICB2YXIgb3B0aW9ucztcbiAgICB2YXIgcmVwbGFjZVJlZjtcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZhciBpc05lc3RlZCA9IHByb3AuaW5kZXhPZignJicpICE9PSAtMTtcbiAgICAgIHZhciBpc05lc3RlZENvbmRpdGlvbmFsID0gcHJvcFswXSA9PT0gJ0AnO1xuICAgICAgaWYgKCFpc05lc3RlZCAmJiAhaXNOZXN0ZWRDb25kaXRpb25hbCkgY29udGludWU7XG4gICAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhzdHlsZVJ1bGUsIGNvbnRhaW5lciwgb3B0aW9ucyk7XG5cbiAgICAgIGlmIChpc05lc3RlZCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSByZXBsYWNlUGFyZW50UmVmcyhwcm9wLCBzdHlsZVJ1bGUuc2VsZWN0b3IpOyAvLyBMYXppbHkgY3JlYXRlIHRoZSByZWYgcmVwbGFjZXIgZnVuY3Rpb24ganVzdCBvbmNlIGZvclxuICAgICAgICAvLyBhbGwgbmVzdGVkIHJ1bGVzIHdpdGhpbiB0aGUgc2hlZXQuXG5cbiAgICAgICAgaWYgKCFyZXBsYWNlUmVmKSByZXBsYWNlUmVmID0gZ2V0UmVwbGFjZVJlZihjb250YWluZXIsIHNoZWV0KTsgLy8gUmVwbGFjZSBhbGwgJHJlZnMuXG5cbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKHJlZlJlZ0V4cCwgcmVwbGFjZVJlZik7XG4gICAgICAgIGNvbnRhaW5lci5hZGRSdWxlKHNlbGVjdG9yLCBzdHlsZVtwcm9wXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmIChpc05lc3RlZENvbmRpdGlvbmFsKSB7XG4gICAgICAgIC8vIFBsYWNlIGNvbmRpdGlvbmFsIHJpZ2h0IGFmdGVyIHRoZSBwYXJlbnQgcnVsZSB0byBlbnN1cmUgcmlnaHQgb3JkZXJpbmcuXG4gICAgICAgIGNvbnRhaW5lci5hZGRSdWxlKHByb3AsIHt9LCBvcHRpb25zKSAvLyBGbG93IGV4cGVjdHMgbW9yZSBvcHRpb25zIGJ1dCB0aGV5IGFyZW4ndCByZXF1aXJlZFxuICAgICAgICAvLyBBbmQgZmxvdyBkb2Vzbid0IGtub3cgdGhpcyB3aWxsIGFsd2F5cyBiZSBhIFN0eWxlUnVsZSB3aGljaCBoYXMgdGhlIGFkZFJ1bGUgbWV0aG9kXG4gICAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXVzZV1cbiAgICAgICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICAgIC5hZGRSdWxlKHN0eWxlUnVsZS5rZXksIHN0eWxlW3Byb3BdLCB7XG4gICAgICAgICAgc2VsZWN0b3I6IHN0eWxlUnVsZS5zZWxlY3RvclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc05lc3RlZDtcbiIsIi8qKlxuICogU29ydCBwcm9wcyBieSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGpzc1Byb3BzU29ydCgpIHtcbiAgdmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KHByb3AwLCBwcm9wMSkge1xuICAgIGlmIChwcm9wMC5sZW5ndGggPT09IHByb3AxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHByb3AwID4gcHJvcDEgPyAxIDogLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3AwLmxlbmd0aCAtIHByb3AxLmxlbmd0aDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgICAgdmFyIG5ld1N0eWxlID0ge307XG4gICAgICB2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZSkuc29ydChzb3J0KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdTdHlsZVtwcm9wc1tpXV0gPSBzdHlsZVtwcm9wc1tpXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdHlsZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc1Byb3BzU29ydDtcbiIsImltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgeyBjcmVhdGVSdWxlIH0gZnJvbSAnanNzJztcblxudmFyIG5vdyA9IERhdGUubm93KCk7XG52YXIgZm5WYWx1ZXNOcyA9IFwiZm5WYWx1ZXNcIiArIG5vdztcbnZhciBmblJ1bGVOcyA9IFwiZm5TdHlsZVwiICsgKytub3c7XG5cbnZhciBmdW5jdGlvblBsdWdpbiA9IGZ1bmN0aW9uIGZ1bmN0aW9uUGx1Z2luKCkge1xuICByZXR1cm4ge1xuICAgIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVjbCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUobmFtZSwge30sIG9wdGlvbnMpO1xuICAgICAgcnVsZVtmblJ1bGVOc10gPSBkZWNsO1xuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfSxcbiAgICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gZXh0cmFjdCBmdW5jdGlvbiB2YWx1ZXMgZnJvbSB0aGUgZGVjbGFyYXRpb24sIHNvIHRoYXQgd2UgY2FuIGtlZXAgY29yZSB1bmF3YXJlIG9mIHRoZW0uXG4gICAgICAvLyBXZSBuZWVkIHRvIGRvIHRoYXQgb25seSBvbmNlLlxuICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBleHRyYWN0IGZ1bmN0aW9ucyBvbiBlYWNoIHN0eWxlIHVwZGF0ZSwgc2luY2UgdGhpcyBjYW4gaGFwcGVuIG9ubHkgb25jZS5cbiAgICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgZnVuY3Rpb24gdmFsdWVzIGluc2lkZSBvZiBmdW5jdGlvbiBydWxlcy5cbiAgICAgIGlmIChmblZhbHVlc05zIGluIHJ1bGUgfHwgZm5SdWxlTnMgaW4gcnVsZSkgcmV0dXJuIHN0eWxlO1xuICAgICAgdmFyIGZuVmFsdWVzID0ge307XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xuICAgICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICAgIGZuVmFsdWVzW3Byb3BdID0gdmFsdWU7XG4gICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG5cbiAgICAgIHJ1bGVbZm5WYWx1ZXNOc10gPSBmblZhbHVlcztcbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LFxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucykge1xuICAgICAgdmFyIHN0eWxlUnVsZSA9IHJ1bGU7IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB2YXIgZm5SdWxlID0gc3R5bGVSdWxlW2ZuUnVsZU5zXTsgLy8gSWYgd2UgaGF2ZSBhIHN0eWxlIGZ1bmN0aW9uLCB0aGUgZW50aXJlIHJ1bGUgaXMgZHluYW1pYyBhbmQgc3R5bGUgb2JqZWN0XG4gICAgICAvLyB3aWxsIGJlIHJldHVybmVkIGZyb20gdGhhdCBmdW5jdGlvbi5cblxuICAgICAgaWYgKGZuUnVsZSkge1xuICAgICAgICAvLyBFbXB0eSBvYmplY3Qgd2lsbCByZW1vdmUgYWxsIGN1cnJlbnRseSBkZWZpbmVkIHByb3BzXG4gICAgICAgIC8vIGluIGNhc2UgZnVuY3Rpb24gcnVsZSByZXR1cm5zIGEgZmFsc3kgdmFsdWUuXG4gICAgICAgIHN0eWxlUnVsZS5zdHlsZSA9IGZuUnVsZShkYXRhKSB8fCB7fTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlUnVsZS5zdHlsZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVJ1bGUuc3R5bGVbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ1tKU1NdIEZ1bmN0aW9uIHZhbHVlcyBpbnNpZGUgZnVuY3Rpb24gcnVsZXMgYXJlIG5vdCBzdXBwb3J0ZWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuXG4gICAgICB2YXIgZm5WYWx1ZXMgPSBzdHlsZVJ1bGVbZm5WYWx1ZXNOc107IC8vIElmIHdlIGhhdmUgYSBmbiB2YWx1ZXMgbWFwLCBpdCBpcyBhIHJ1bGUgd2l0aCBmdW5jdGlvbiB2YWx1ZXMuXG5cbiAgICAgIGlmIChmblZhbHVlcykge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBmblZhbHVlcykge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKF9wcm9wLCBmblZhbHVlc1tfcHJvcF0oZGF0YSksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb25QbHVnaW47XG4iLCJpbXBvcnQgeyBzdXBwb3J0ZWRLZXlmcmFtZXMsIHN1cHBvcnRlZFZhbHVlLCBzdXBwb3J0ZWRQcm9wZXJ0eSB9IGZyb20gJ2Nzcy12ZW5kb3InO1xuaW1wb3J0IHsgdG9Dc3NWYWx1ZSB9IGZyb20gJ2pzcyc7XG5cbi8qKlxuICogQWRkIHZlbmRvciBwcmVmaXggdG8gYSBwcm9wZXJ0eSBuYW1lIHdoZW4gbmVlZGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24ganNzVmVuZG9yUHJlZml4ZXIoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICB2YXIgYXRSdWxlID0gcnVsZTtcbiAgICAgIGF0UnVsZS5hdCA9IHN1cHBvcnRlZEtleWZyYW1lcyhhdFJ1bGUuYXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeFN0eWxlKHN0eWxlKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJyAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBzdHlsZVtwcm9wXSA9IHZhbHVlLm1hcChwcmVmaXhTdHlsZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlUHJvcCA9IGZhbHNlO1xuICAgICAgdmFyIHN1cHBvcnRlZFByb3AgPSBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRQcm9wICYmIHN1cHBvcnRlZFByb3AgIT09IHByb3ApIGNoYW5nZVByb3AgPSB0cnVlO1xuICAgICAgdmFyIGNoYW5nZVZhbHVlID0gZmFsc2U7XG4gICAgICB2YXIgc3VwcG9ydGVkVmFsdWUkMSA9IHN1cHBvcnRlZFZhbHVlKHN1cHBvcnRlZFByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKTtcbiAgICAgIGlmIChzdXBwb3J0ZWRWYWx1ZSQxICYmIHN1cHBvcnRlZFZhbHVlJDEgIT09IHZhbHVlKSBjaGFuZ2VWYWx1ZSA9IHRydWU7XG5cbiAgICAgIGlmIChjaGFuZ2VQcm9wIHx8IGNoYW5nZVZhbHVlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VQcm9wKSBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICAgIHN0eWxlW3N1cHBvcnRlZFByb3AgfHwgcHJvcF0gPSBzdXBwb3J0ZWRWYWx1ZSQxIHx8IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgIHJldHVybiBwcmVmaXhTdHlsZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRlZFZhbHVlKHByb3AsIHRvQ3NzVmFsdWUodmFsdWUpKSB8fCB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzUnVsZTogb25Qcm9jZXNzUnVsZSxcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NWZW5kb3JQcmVmaXhlcjtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5cbnZhciBwbGFpbk9iamVjdENvbnN0cnVyY3RvciA9IHt9LmNvbnN0cnVjdG9yO1xuZnVuY3Rpb24gY2xvbmVTdHlsZShzdHlsZSkge1xuICBpZiAoc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2Ygc3R5bGUgIT09ICdvYmplY3QnKSByZXR1cm4gc3R5bGU7XG4gIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkgcmV0dXJuIHN0eWxlLm1hcChjbG9uZVN0eWxlKTtcbiAgaWYgKHN0eWxlLmNvbnN0cnVjdG9yICE9PSBwbGFpbk9iamVjdENvbnN0cnVyY3RvcikgcmV0dXJuIHN0eWxlO1xuICB2YXIgbmV3U3R5bGUgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIHN0eWxlKSB7XG4gICAgbmV3U3R5bGVbbmFtZV0gPSBjbG9uZVN0eWxlKHN0eWxlW25hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdHlsZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBydWxlIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgbmFtZSA9ICd1bm5hbWVkJztcbiAgfVxuXG4gIHZhciBqc3MgPSBvcHRpb25zLmpzcztcbiAgdmFyIGRlY2xDb3B5ID0gY2xvbmVTdHlsZShkZWNsKTtcbiAgdmFyIHJ1bGUgPSBqc3MucGx1Z2lucy5vbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbENvcHksIG9wdGlvbnMpO1xuICBpZiAocnVsZSkgcmV0dXJuIHJ1bGU7IC8vIEl0IGlzIGFuIGF0LXJ1bGUgYW5kIGl0IGhhcyBubyBpbnN0YW5jZS5cblxuICBpZiAobmFtZVswXSA9PT0gJ0AnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBVbmtub3duIHJ1bGUgXCIgKyBuYW1lKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgam9pbiA9IGZ1bmN0aW9uIGpvaW4odmFsdWUsIGJ5KSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gUmVtb3ZlICFpbXBvcnRhbnQgZnJvbSB0aGUgdmFsdWUsIGl0IHdpbGwgYmUgcmVhZGRlZCBsYXRlci5cbiAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGJ5O1xuICAgIHJlc3VsdCArPSB2YWx1ZVtpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFycmF5IHZhbHVlcyB0byBzdHJpbmcuXG4gKlxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXV1gID4gYG1hcmdpbjogNXB4IDEwcHg7YFxuICogYGJvcmRlcjogWycxcHgnLCAnMnB4J11gID4gYGJvcmRlcjogMXB4LCAycHg7YFxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXSwgJyFpbXBvcnRhbnQnXWAgPiBgbWFyZ2luOiA1cHggMTBweCAhaW1wb3J0YW50O2BcbiAqIGBjb2xvcjogWydyZWQnLCAhaW1wb3J0YW50XWAgPiBgY29sb3I6IHJlZCAhaW1wb3J0YW50O2BcbiAqL1xudmFyIHRvQ3NzVmFsdWUgPSBmdW5jdGlvbiB0b0Nzc1ZhbHVlKHZhbHVlLCBpZ25vcmVJbXBvcnRhbnQpIHtcbiAgaWYgKGlnbm9yZUltcG9ydGFudCA9PT0gdm9pZCAwKSB7XG4gICAgaWdub3JlSW1wb3J0YW50ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gIHZhciBjc3NWYWx1ZSA9ICcnOyAvLyBTdXBwb3J0IHNwYWNlIHNlcGFyYXRlZCB2YWx1ZXMgdmlhIGBbWyc1cHgnLCAnMTBweCddXWAuXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldID09PSAnIWltcG9ydGFudCcpIGJyZWFrO1xuICAgICAgaWYgKGNzc1ZhbHVlKSBjc3NWYWx1ZSArPSAnLCAnO1xuICAgICAgY3NzVmFsdWUgKz0gam9pbih2YWx1ZVtpXSwgJyAnKTtcbiAgICB9XG4gIH0gZWxzZSBjc3NWYWx1ZSA9IGpvaW4odmFsdWUsICcsICcpOyAvLyBBZGQgIWltcG9ydGFudCwgYmVjYXVzZSBpdCB3YXMgaWdub3JlZC5cblxuXG4gIGlmICghaWdub3JlSW1wb3J0YW50ICYmIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnIWltcG9ydGFudCcpIHtcbiAgICBjc3NWYWx1ZSArPSAnICFpbXBvcnRhbnQnO1xuICB9XG5cbiAgcmV0dXJuIGNzc1ZhbHVlO1xufTtcblxuLyoqXG4gKiBJbmRlbnQgYSBzdHJpbmcuXG4gKiBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1qb2luLXZzLWZvclxuICovXG5mdW5jdGlvbiBpbmRlbnRTdHIoc3RyLCBpbmRlbnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBpbmRlbnQ7IGluZGV4KyspIHtcbiAgICByZXN1bHQgKz0gJyAgJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzdHI7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgUnVsZSB0byBDU1Mgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gdG9Dc3Moc2VsZWN0b3IsIHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICghc3R5bGUpIHJldHVybiByZXN1bHQ7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRpbmRlbnQgPSBfb3B0aW9ucy5pbmRlbnQsXG4gICAgICBpbmRlbnQgPSBfb3B0aW9ucyRpbmRlbnQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRpbmRlbnQ7XG4gIHZhciBmYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3M7XG4gIGlmIChzZWxlY3RvcikgaW5kZW50Kys7IC8vIEFwcGx5IGZhbGxiYWNrcyBmaXJzdC5cblxuICBpZiAoZmFsbGJhY2tzKSB7XG4gICAgLy8gQXJyYXkgc3ludGF4IHtmYWxsYmFja3M6IFt7cHJvcDogdmFsdWV9XX1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmYWxsYmFja3MpKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZmFsbGJhY2tzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZmFsbGJhY2sgPSBmYWxsYmFja3NbaW5kZXhdO1xuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gZmFsbGJhY2spIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBmYWxsYmFja1twcm9wXTtcblxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCJcIiArIGluZGVudFN0cihwcm9wICsgXCI6IFwiICsgdG9Dc3NWYWx1ZSh2YWx1ZSkgKyBcIjtcIiwgaW5kZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0IHN5bnRheCB7ZmFsbGJhY2tzOiB7cHJvcDogdmFsdWV9fVxuICAgICAgZm9yICh2YXIgX3Byb3AgaW4gZmFsbGJhY2tzKSB7XG4gICAgICAgIHZhciBfdmFsdWUgPSBmYWxsYmFja3NbX3Byb3BdO1xuXG4gICAgICAgIGlmIChfdmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnXFxuJztcbiAgICAgICAgICByZXN1bHQgKz0gXCJcIiArIGluZGVudFN0cihfcHJvcCArIFwiOiBcIiArIHRvQ3NzVmFsdWUoX3ZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX3Byb3AyIGluIHN0eWxlKSB7XG4gICAgdmFyIF92YWx1ZTIgPSBzdHlsZVtfcHJvcDJdO1xuXG4gICAgaWYgKF92YWx1ZTIgIT0gbnVsbCAmJiBfcHJvcDIgIT09ICdmYWxsYmFja3MnKSB7XG4gICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJ1xcbic7XG4gICAgICByZXN1bHQgKz0gXCJcIiArIGluZGVudFN0cihfcHJvcDIgKyBcIjogXCIgKyB0b0Nzc1ZhbHVlKF92YWx1ZTIpICsgXCI7XCIsIGluZGVudCk7XG4gICAgfVxuICB9IC8vIEFsbG93IGVtcHR5IHN0eWxlIGluIHRoaXMgY2FzZSwgYmVjYXVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWRkZWQgZHluYW1pY2FsbHkuXG5cblxuICBpZiAoIXJlc3VsdCAmJiAhb3B0aW9ucy5hbGxvd0VtcHR5KSByZXR1cm4gcmVzdWx0OyAvLyBXaGVuIHJ1bGUgaXMgYmVpbmcgc3RyaW5naWZpZWQgYmVmb3JlIHNlbGVjdG9yIHdhcyBkZWZpbmVkLlxuXG4gIGlmICghc2VsZWN0b3IpIHJldHVybiByZXN1bHQ7XG4gIGluZGVudC0tO1xuICBpZiAocmVzdWx0KSByZXN1bHQgPSBcIlxcblwiICsgcmVzdWx0ICsgXCJcXG5cIjtcbiAgcmV0dXJuIGluZGVudFN0cihzZWxlY3RvciArIFwiIHtcIiArIHJlc3VsdCwgaW5kZW50KSArIGluZGVudFN0cignfScsIGluZGVudCk7XG59XG5cbnZhciBlc2NhcGVSZWdleCA9IC8oW1tcXF0uIyokPjwrfj18XjooKSxcIidgXFxzXSkvZztcbnZhciBuYXRpdmVFc2NhcGUgPSB0eXBlb2YgQ1NTICE9PSAndW5kZWZpbmVkJyAmJiBDU1MuZXNjYXBlO1xudmFyIGVzY2FwZSA9IChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBuYXRpdmVFc2NhcGUgPyBuYXRpdmVFc2NhcGUoc3RyKSA6IHN0ci5yZXBsYWNlKGVzY2FwZVJlZ2V4LCAnXFxcXCQxJyk7XG59KTtcblxudmFyIEJhc2VTdHlsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBCYXNlU3R5bGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnc3R5bGUnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0eWxlID0gdm9pZCAwO1xuICAgIHRoaXMucmVuZGVyZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB2YXIgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBSZW5kZXJlciA9IG9wdGlvbnMuUmVuZGVyZXI7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgaWYgKHNoZWV0KSB0aGlzLnJlbmRlcmVyID0gc2hlZXQucmVuZGVyZXI7ZWxzZSBpZiAoUmVuZGVyZXIpIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IG9yIHNldCBhIHN0eWxlIHByb3BlcnR5LlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBCYXNlU3R5bGVSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucHJvcCA9IGZ1bmN0aW9uIHByb3AobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAvLyBJdCdzIGEgZ2V0dGVyLlxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5zdHlsZVtuYW1lXTsgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgdGhlIHZhbHVlIGhhcyBub3QgY2hhbmdlZC5cblxuICAgIHZhciBmb3JjZSA9IG9wdGlvbnMgPyBvcHRpb25zLmZvcmNlIDogZmFsc2U7XG4gICAgaWYgKCFmb3JjZSAmJiB0aGlzLnN0eWxlW25hbWVdID09PSB2YWx1ZSkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5ld1ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5wcm9jZXNzICE9PSBmYWxzZSkge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25DaGFuZ2VWYWx1ZSh2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIGlzRW1wdHkgPSBuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZTtcbiAgICB2YXIgaXNEZWZpbmVkID0gbmFtZSBpbiB0aGlzLnN0eWxlOyAvLyBWYWx1ZSBpcyBlbXB0eSBhbmQgd2Fzbid0IGRlZmluZWQgYmVmb3JlLlxuXG4gICAgaWYgKGlzRW1wdHkgJiYgIWlzRGVmaW5lZCAmJiAhZm9yY2UpIHJldHVybiB0aGlzOyAvLyBXZSBhcmUgZ29pbmcgdG8gcmVtb3ZlIHRoaXMgdmFsdWUuXG5cbiAgICB2YXIgcmVtb3ZlID0gaXNFbXB0eSAmJiBpc0RlZmluZWQ7XG4gICAgaWYgKHJlbW92ZSkgZGVsZXRlIHRoaXMuc3R5bGVbbmFtZV07ZWxzZSB0aGlzLnN0eWxlW25hbWVdID0gbmV3VmFsdWU7IC8vIFJlbmRlcmFibGUgaXMgZGVmaW5lZCBpZiBTdHlsZVNoZWV0IG9wdGlvbiBgbGlua2AgaXMgdHJ1ZS5cblxuICAgIGlmICh0aGlzLnJlbmRlcmFibGUgJiYgdGhpcy5yZW5kZXJlcikge1xuICAgICAgaWYgKHJlbW92ZSkgdGhpcy5yZW5kZXJlci5yZW1vdmVQcm9wZXJ0eSh0aGlzLnJlbmRlcmFibGUsIG5hbWUpO2Vsc2UgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLnJlbmRlcmFibGUsIG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5hdHRhY2hlZCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ1tKU1NdIFJ1bGUgaXMgbm90IGxpbmtlZC4gTWlzc2luZyBzaGVldCBvcHRpb24gXCJsaW5rOiB0cnVlXCIuJykgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VTdHlsZVJ1bGU7XG59KCk7XG52YXIgU3R5bGVSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVN0eWxlUnVsZSkge1xuICBfaW5oZXJpdHNMb29zZShTdHlsZVJ1bGUsIF9CYXNlU3R5bGVSdWxlKTtcblxuICBmdW5jdGlvbiBTdHlsZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0Jhc2VTdHlsZVJ1bGUuY2FsbCh0aGlzLCBrZXksIHN0eWxlLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IHZvaWQgMDtcbiAgICBfdGhpcy5pZCA9IHZvaWQgMDtcbiAgICBfdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHZhciBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IsXG4gICAgICAgIHNjb3BlZCA9IG9wdGlvbnMuc2NvcGVkLFxuICAgICAgICBzaGVldCA9IG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBvcHRpb25zLmdlbmVyYXRlSWQ7XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yO1xuICAgIH0gZWxzZSBpZiAoc2NvcGVkICE9PSBmYWxzZSkge1xuICAgICAgX3RoaXMuaWQgPSBnZW5lcmF0ZUlkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBzaGVldCk7XG4gICAgICBfdGhpcy5zZWxlY3RvclRleHQgPSBcIi5cIiArIGVzY2FwZShfdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0b3Igc3RyaW5nLlxuICAgKiBBdHRlbnRpb246IHVzZSB0aGlzIHdpdGggY2F1dGlvbi4gTW9zdCBicm93c2VycyBkaWRuJ3QgaW1wbGVtZW50XG4gICAqIHNlbGVjdG9yVGV4dCBzZXR0ZXIsIHNvIHRoaXMgbWF5IHJlc3VsdCBpbiByZXJlbmRlcmluZyBvZiBlbnRpcmUgU3R5bGUgU2hlZXQuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90bzIgPSBTdHlsZVJ1bGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBBcHBseSBydWxlIHRvIGFuIGVsZW1lbnQgaW5saW5lLlxuICAgKi9cbiAgX3Byb3RvMi5hcHBseVRvID0gZnVuY3Rpb24gYXBwbHlUbyhyZW5kZXJhYmxlKSB7XG4gICAgdmFyIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcblxuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgdmFyIGpzb24gPSB0aGlzLnRvSlNPTigpO1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIGpzb24pIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0UHJvcGVydHkocmVuZGVyYWJsZSwgcHJvcCwganNvbltwcm9wXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgcnVsZS5cbiAgICogRmFsbGJhY2tzIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgKiBVc2VmdWwgZm9yIGlubGluZSBzdHlsZXMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvMi50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgdmFyIGpzb24gPSB7fTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdHlsZVtwcm9wXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSBqc29uW3Byb3BdID0gdmFsdWU7ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGpzb25bcHJvcF0gPSB0b0Nzc1ZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8yLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcbiAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG4gICAgdmFyIG9wdHMgPSBsaW5rID8gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGFsbG93RW1wdHk6IHRydWVcbiAgICB9KSA6IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMuc2VsZWN0b3JUZXh0LCB0aGlzLnN0eWxlLCBvcHRzKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVSdWxlLCBbe1xuICAgIGtleTogXCJzZWxlY3RvclwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHNlbGVjdG9yKSB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IHRoaXMuc2VsZWN0b3JUZXh0KSByZXR1cm47XG4gICAgICB0aGlzLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yO1xuICAgICAgdmFyIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcixcbiAgICAgICAgICByZW5kZXJhYmxlID0gdGhpcy5yZW5kZXJhYmxlO1xuICAgICAgaWYgKCFyZW5kZXJhYmxlIHx8ICFyZW5kZXJlcikgcmV0dXJuO1xuICAgICAgdmFyIGhhc0NoYW5nZWQgPSByZW5kZXJlci5zZXRTZWxlY3RvcihyZW5kZXJhYmxlLCBzZWxlY3Rvcik7IC8vIElmIHNlbGVjdG9yIHNldHRlciBpcyBub3QgaW1wbGVtZW50ZWQsIHJlcmVuZGVyIHRoZSBydWxlLlxuXG4gICAgICBpZiAoIWhhc0NoYW5nZWQpIHtcbiAgICAgICAgcmVuZGVyZXIucmVwbGFjZVJ1bGUocmVuZGVyYWJsZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RvciBzdHJpbmcuXG4gICAgICovXG4gICAgLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JUZXh0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpblN0eWxlUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAobmFtZVswXSA9PT0gJ0AnIHx8IG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFN0eWxlUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0VG9TdHJpbmdPcHRpb25zID0ge1xuICBpbmRlbnQ6IDEsXG4gIGNoaWxkcmVuOiB0cnVlXG59O1xudmFyIGF0UmVnRXhwID0gL0AoW1xcdy1dKykvO1xuLyoqXG4gKiBDb25kaXRpb25hbCBydWxlIGZvciBAbWVkaWEsIEBzdXBwb3J0c1xuICovXG5cbnZhciBDb25kaXRpb25hbFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25kaXRpb25hbFJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnY29uZGl0aW9uYWwnO1xuICAgIHRoaXMuYXQgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5xdWVyeSA9IHZvaWQgMDtcbiAgICB0aGlzLnJ1bGVzID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHZhciBhdE1hdGNoID0ga2V5Lm1hdGNoKGF0UmVnRXhwKTtcbiAgICB0aGlzLmF0ID0gYXRNYXRjaCA/IGF0TWF0Y2hbMV0gOiAndW5rbm93bic7IC8vIEtleSBtaWdodCBjb250YWluIGEgdW5pcXVlIHN1ZmZpeCBpbiBjYXNlIHRoZSBgbmFtZWAgcGFzc2VkIGJ5IHVzZXIgd2FzIGR1cGxpY2F0ZS5cblxuICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLm5hbWUgfHwgXCJAXCIgKyB0aGlzLmF0O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IENvbmRpdGlvbmFsUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUsIHJ1biBwbHVnaW5zLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlID0gZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmluZGVudCA9PSBudWxsKSBvcHRpb25zLmluZGVudCA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMuaW5kZW50O1xuICAgIGlmIChvcHRpb25zLmNoaWxkcmVuID09IG51bGwpIG9wdGlvbnMuY2hpbGRyZW4gPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWVyeSArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICByZXR1cm4gY2hpbGRyZW4gPyB0aGlzLnF1ZXJ5ICsgXCIge1xcblwiICsgY2hpbGRyZW4gKyBcIlxcbn1cIiA6ICcnO1xuICB9O1xuXG4gIHJldHVybiBDb25kaXRpb25hbFJ1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwID0gL0BtZWRpYXxAc3VwcG9ydHNcXHMrLztcbnZhciBwbHVnaW5Db25kaXRpb25hbFJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleVJlZ0V4cC50ZXN0KGtleSkgPyBuZXcgQ29uZGl0aW9uYWxSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDEgPSB7XG4gIGluZGVudDogMSxcbiAgY2hpbGRyZW46IHRydWVcbn07XG52YXIgbmFtZVJlZ0V4cCA9IC9Aa2V5ZnJhbWVzXFxzKyhbXFx3LV0rKS87XG4vKipcbiAqIFJ1bGUgZm9yIEBrZXlmcmFtZXNcbiAqL1xuXG52YXIgS2V5ZnJhbWVzUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAna2V5ZnJhbWVzJztcbiAgICB0aGlzLmF0ID0gJ0BrZXlmcmFtZXMnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZSA9IHZvaWQgMDtcbiAgICB0aGlzLmlkID0gdm9pZCAwO1xuICAgIHRoaXMucnVsZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdmFyIG5hbWVNYXRjaCA9IGtleS5tYXRjaChuYW1lUmVnRXhwKTtcblxuICAgIGlmIChuYW1lTWF0Y2ggJiYgbmFtZU1hdGNoWzFdKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lTWF0Y2hbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmFtZSA9ICdub25hbWUnO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBCYWQga2V5ZnJhbWVzIG5hbWUgXCIgKyBrZXkpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIHRoaXMua2V5ID0gdGhpcy50eXBlICsgXCItXCIgKyB0aGlzLm5hbWU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB2YXIgc2NvcGVkID0gb3B0aW9ucy5zY29wZWQsXG4gICAgICAgIHNoZWV0ID0gb3B0aW9ucy5zaGVldCxcbiAgICAgICAgZ2VuZXJhdGVJZCA9IG9wdGlvbnMuZ2VuZXJhdGVJZDtcbiAgICB0aGlzLmlkID0gc2NvcGVkID09PSBmYWxzZSA/IHRoaXMubmFtZSA6IGVzY2FwZShnZW5lcmF0ZUlkKHRoaXMsIHNoZWV0KSk7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBmcmFtZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIGZyYW1lc1tuYW1lXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEtleWZyYW1lc1J1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmluZGVudCA9PSBudWxsKSBvcHRpb25zLmluZGVudCA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMkMS5pbmRlbnQ7XG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT0gbnVsbCkgb3B0aW9ucy5jaGlsZHJlbiA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMkMS5jaGlsZHJlbjtcblxuICAgIGlmIChvcHRpb25zLmNoaWxkcmVuID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXQgKyBcIiBcIiArIHRoaXMuaWQgKyBcIiB7fVwiO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgaWYgKGNoaWxkcmVuKSBjaGlsZHJlbiA9IFwiXFxuXCIgKyBjaGlsZHJlbiArIFwiXFxuXCI7XG4gICAgcmV0dXJuIHRoaXMuYXQgKyBcIiBcIiArIHRoaXMuaWQgKyBcIiB7XCIgKyBjaGlsZHJlbiArIFwifVwiO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZXNSdWxlO1xufSgpO1xudmFyIGtleVJlZ0V4cCQxID0gL0BrZXlmcmFtZXNcXHMrLztcbnZhciByZWZSZWdFeHAgPSAvXFwkKFtcXHctXSspL2c7XG5cbnZhciBmaW5kUmVmZXJlbmNlZEtleWZyYW1lID0gZnVuY3Rpb24gZmluZFJlZmVyZW5jZWRLZXlmcmFtZSh2YWwsIGtleWZyYW1lcykge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsLnJlcGxhY2UocmVmUmVnRXhwLCBmdW5jdGlvbiAobWF0Y2gsIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lIGluIGtleWZyYW1lcykge1xuICAgICAgICByZXR1cm4ga2V5ZnJhbWVzW25hbWVdO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFJlZmVyZW5jZWQga2V5ZnJhbWVzIHJ1bGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZC5cIikgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcbi8qKlxuICogUmVwbGFjZSB0aGUgcmVmZXJlbmNlIGZvciBhIGFuaW1hdGlvbiBuYW1lLlxuICovXG5cblxudmFyIHJlcGxhY2VSZWYgPSBmdW5jdGlvbiByZXBsYWNlUmVmKHN0eWxlLCBwcm9wLCBrZXlmcmFtZXMpIHtcbiAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG4gIHZhciByZWZLZXlmcmFtZSA9IGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsdWUsIGtleWZyYW1lcyk7XG5cbiAgaWYgKHJlZktleWZyYW1lICE9PSB2YWx1ZSkge1xuICAgIHN0eWxlW3Byb3BdID0gcmVmS2V5ZnJhbWU7XG4gIH1cbn07XG5cbnZhciBwbHVnaW4gPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgZnJhbWVzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleVJlZ0V4cCQxLnRlc3Qoa2V5KSA/IG5ldyBLZXlmcmFtZXNSdWxlKGtleSwgZnJhbWVzLCBvcHRpb25zKSA6IG51bGw7XG4gIH0sXG4gIC8vIEFuaW1hdGlvbiBuYW1lIHJlZiByZXBsYWNlci5cbiAgb25Qcm9jZXNzU3R5bGU6IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScgfHwgIXNoZWV0KSByZXR1cm4gc3R5bGU7XG4gICAgaWYgKCdhbmltYXRpb24tbmFtZScgaW4gc3R5bGUpIHJlcGxhY2VSZWYoc3R5bGUsICdhbmltYXRpb24tbmFtZScsIHNoZWV0LmtleWZyYW1lcyk7XG4gICAgaWYgKCdhbmltYXRpb24nIGluIHN0eWxlKSByZXBsYWNlUmVmKHN0eWxlLCAnYW5pbWF0aW9uJywgc2hlZXQua2V5ZnJhbWVzKTtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH0sXG4gIG9uQ2hhbmdlVmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsLCBwcm9wLCBydWxlKSB7XG4gICAgdmFyIHNoZWV0ID0gcnVsZS5vcHRpb25zLnNoZWV0O1xuXG4gICAgaWYgKCFzaGVldCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgIHJldHVybiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwgc2hlZXQua2V5ZnJhbWVzKTtcblxuICAgICAgY2FzZSAnYW5pbWF0aW9uLW5hbWUnOlxuICAgICAgICByZXR1cm4gZmluZFJlZmVyZW5jZWRLZXlmcmFtZSh2YWwsIHNoZWV0LmtleWZyYW1lcyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICB9XG59O1xuXG52YXIgS2V5ZnJhbWVSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVN0eWxlUnVsZSkge1xuICBfaW5oZXJpdHNMb29zZShLZXlmcmFtZVJ1bGUsIF9CYXNlU3R5bGVSdWxlKTtcblxuICBmdW5jdGlvbiBLZXlmcmFtZVJ1bGUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX0Jhc2VTdHlsZVJ1bGUuY2FsbC5hcHBseShfQmFzZVN0eWxlUnVsZSwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBLZXlmcmFtZVJ1bGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcbiAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG4gICAgdmFyIG9wdHMgPSBsaW5rID8gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGFsbG93RW1wdHk6IHRydWVcbiAgICB9KSA6IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMua2V5LCB0aGlzLnN0eWxlLCBvcHRzKTtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVSdWxlO1xufShCYXNlU3R5bGVSdWxlKTtcbnZhciBwbHVnaW5LZXlmcmFtZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQudHlwZSA9PT0gJ2tleWZyYW1lcycpIHtcbiAgICAgIHJldHVybiBuZXcgS2V5ZnJhbWVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG52YXIgRm9udEZhY2VSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRm9udEZhY2VSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnZm9udC1mYWNlJztcbiAgICB0aGlzLmF0ID0gJ0Bmb250LWZhY2UnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuc3R5bGUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEZvbnRGYWNlUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc3R5bGUpKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHIgKz0gdG9Dc3ModGhpcy5hdCwgdGhpcy5zdHlsZVtpbmRleF0pO1xuICAgICAgICBpZiAodGhpcy5zdHlsZVtpbmRleCArIDFdKSBzdHIgKz0gJ1xcbic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMuYXQsIHRoaXMuc3R5bGUsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBGb250RmFjZVJ1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwJDIgPSAvQGZvbnQtZmFjZS87XG52YXIgcGx1Z2luRm9udEZhY2VSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleVJlZ0V4cCQyLnRlc3Qoa2V5KSA/IG5ldyBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgVmlld3BvcnRSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmlld3BvcnRSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAndmlld3BvcnQnO1xuICAgIHRoaXMuYXQgPSAnQHZpZXdwb3J0JztcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLnN0eWxlID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBWaWV3cG9ydFJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5rZXksIHRoaXMuc3R5bGUsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBWaWV3cG9ydFJ1bGU7XG59KCk7XG52YXIgcGx1Z2luVmlld3BvcnRSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleSA9PT0gJ0B2aWV3cG9ydCcgfHwga2V5ID09PSAnQC1tcy12aWV3cG9ydCcgPyBuZXcgVmlld3BvcnRSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIDogbnVsbDtcbiAgfVxufTtcblxudmFyIFNpbXBsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaW1wbGVSdWxlKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnc2ltcGxlJztcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLnZhbHVlID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICB2YXIgX3Byb3RvID0gU2ltcGxlUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHIgKz0gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWVbaW5kZXhdICsgXCI7XCI7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlW2luZGV4ICsgMV0pIHN0ciArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWUgKyBcIjtcIjtcbiAgfTtcblxuICByZXR1cm4gU2ltcGxlUnVsZTtcbn0oKTtcbnZhciBrZXlzTWFwID0ge1xuICAnQGNoYXJzZXQnOiB0cnVlLFxuICAnQGltcG9ydCc6IHRydWUsXG4gICdAbmFtZXNwYWNlJzogdHJ1ZVxufTtcbnZhciBwbHVnaW5TaW1wbGVSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleSBpbiBrZXlzTWFwID8gbmV3IFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgcGx1Z2lucyA9IFtwbHVnaW5TdHlsZVJ1bGUsIHBsdWdpbkNvbmRpdGlvbmFsUnVsZSwgcGx1Z2luLCBwbHVnaW5LZXlmcmFtZVJ1bGUsIHBsdWdpbkZvbnRGYWNlUnVsZSwgcGx1Z2luVmlld3BvcnRSdWxlLCBwbHVnaW5TaW1wbGVSdWxlXTtcblxudmFyIGRlZmF1bHRVcGRhdGVPcHRpb25zID0ge1xuICBwcm9jZXNzOiB0cnVlXG59O1xudmFyIGZvcmNlVXBkYXRlT3B0aW9ucyA9IHtcbiAgZm9yY2U6IHRydWUsXG4gIHByb2Nlc3M6IHRydWVcbiAgLyoqXG4gICAqIENvbnRhaW5zIHJ1bGVzIG9iamVjdHMgYW5kIGFsbG93cyBhZGRpbmcvcmVtb3ZpbmcgZXRjLlxuICAgKiBJcyB1c2VkIGZvciBlLmcuIGJ5IGBTdHlsZVNoZWV0YCBvciBgQ29uZGl0aW9uYWxSdWxlYC5cbiAgICovXG5cbn07XG5cbnZhciBSdWxlTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8vIFJ1bGVzIHJlZ2lzdHJ5IGZvciBhY2Nlc3MgYnkgLmdldCgpIG1ldGhvZC5cbiAgLy8gSXQgY29udGFpbnMgdGhlIHNhbWUgcnVsZSByZWdpc3RlcmVkIGJ5IG5hbWUgYW5kIGJ5IHNlbGVjdG9yLlxuICAvLyBPcmlnaW5hbCBzdHlsZXMgb2JqZWN0LlxuICAvLyBVc2VkIHRvIGVuc3VyZSBjb3JyZWN0IHJ1bGVzIG9yZGVyLlxuICBmdW5jdGlvbiBSdWxlTGlzdChvcHRpb25zKSB7XG4gICAgdGhpcy5tYXAgPSB7fTtcbiAgICB0aGlzLnJhdyA9IHt9O1xuICAgIHRoaXMuaW5kZXggPSBbXTtcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmNsYXNzZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXM7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSBvcHRpb25zLmtleWZyYW1lcztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuZCByZWdpc3RlciBydWxlLlxuICAgKlxuICAgKiBXaWxsIG5vdCByZW5kZXIgYWZ0ZXIgU3R5bGUgU2hlZXQgd2FzIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBSdWxlTGlzdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChuYW1lLCBkZWNsLCBydWxlT3B0aW9ucykge1xuICAgIHZhciBfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBwYXJlbnQgPSBfdGhpcyRvcHRpb25zLnBhcmVudCxcbiAgICAgICAgc2hlZXQgPSBfdGhpcyRvcHRpb25zLnNoZWV0LFxuICAgICAgICBqc3MgPSBfdGhpcyRvcHRpb25zLmpzcyxcbiAgICAgICAgUmVuZGVyZXIgPSBfdGhpcyRvcHRpb25zLlJlbmRlcmVyLFxuICAgICAgICBnZW5lcmF0ZUlkID0gX3RoaXMkb3B0aW9ucy5nZW5lcmF0ZUlkLFxuICAgICAgICBzY29wZWQgPSBfdGhpcyRvcHRpb25zLnNjb3BlZDtcblxuICAgIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe1xuICAgICAgY2xhc3NlczogdGhpcy5jbGFzc2VzLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzaGVldDogc2hlZXQsXG4gICAgICBqc3M6IGpzcyxcbiAgICAgIFJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgIGdlbmVyYXRlSWQ6IGdlbmVyYXRlSWQsXG4gICAgICBzY29wZWQ6IHNjb3BlZCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBrZXlmcmFtZXM6IHRoaXMua2V5ZnJhbWVzLFxuICAgICAgc2VsZWN0b3I6IHVuZGVmaW5lZFxuICAgIH0sIHJ1bGVPcHRpb25zKTsgLy8gV2hlbiB1c2VyIHVzZXMgLmNyZWF0ZVN0eWxlU2hlZXQoKSwgZHVwbGljYXRlIG5hbWVzIGFyZSBub3QgcG9zc2libGUsIGJ1dFxuICAgIC8vIGBzaGVldC5hZGRSdWxlKClgIG9wZW5zIHRoZSBkb29yIGZvciBhbnkgZHVwbGljYXRlIHJ1bGUgbmFtZS4gV2hlbiB0aGlzIGhhcHBlbnNcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2UgdGhlIGtleSB1bmlxdWUgd2l0aGluIHRoaXMgUnVsZUxpc3QgaW5zdGFuY2Ugc2NvcGUuXG5cblxuICAgIHZhciBrZXkgPSBuYW1lO1xuXG4gICAgaWYgKG5hbWUgaW4gdGhpcy5yYXcpIHtcbiAgICAgIGtleSA9IG5hbWUgKyBcIi1kXCIgKyB0aGlzLmNvdW50ZXIrKztcbiAgICB9IC8vIFdlIG5lZWQgdG8gc2F2ZSB0aGUgb3JpZ2luYWwgZGVjbCBiZWZvcmUgY3JlYXRpbmcgdGhlIHJ1bGVcbiAgICAvLyBiZWNhdXNlIGNhY2hlIHBsdWdpbiBuZWVkcyB0byB1c2UgaXQgYXMgYSBrZXkgdG8gcmV0dXJuIGEgY2FjaGVkIHJ1bGUuXG5cblxuICAgIHRoaXMucmF3W2tleV0gPSBkZWNsO1xuXG4gICAgaWYgKGtleSBpbiB0aGlzLmNsYXNzZXMpIHtcbiAgICAgIC8vIEUuZy4gcnVsZXMgaW5zaWRlIG9mIEBtZWRpYSBjb250YWluZXJcbiAgICAgIG9wdGlvbnMuc2VsZWN0b3IgPSBcIi5cIiArIGVzY2FwZSh0aGlzLmNsYXNzZXNba2V5XSk7XG4gICAgfVxuXG4gICAgdmFyIHJ1bGUgPSBjcmVhdGVSdWxlKGtleSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgaWYgKCFydWxlKSByZXR1cm4gbnVsbDtcbiAgICB0aGlzLnJlZ2lzdGVyKHJ1bGUpO1xuICAgIHZhciBpbmRleCA9IG9wdGlvbnMuaW5kZXggPT09IHVuZGVmaW5lZCA/IHRoaXMuaW5kZXgubGVuZ3RoIDogb3B0aW9ucy5pbmRleDtcbiAgICB0aGlzLmluZGV4LnNwbGljZShpbmRleCwgMCwgcnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwW25hbWVdO1xuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocnVsZSkge1xuICAgIHRoaXMudW5yZWdpc3RlcihydWxlKTtcbiAgICBkZWxldGUgdGhpcy5yYXdbcnVsZS5rZXldO1xuICAgIHRoaXMuaW5kZXguc3BsaWNlKHRoaXMuaW5kZXguaW5kZXhPZihydWxlKSwgMSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleC5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBSdW4gYG9uUHJvY2Vzc1J1bGUoKWAgcGx1Z2lucyBvbiBldmVyeSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wcm9jZXNzID0gZnVuY3Rpb24gcHJvY2VzcygpIHtcbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMub3B0aW9ucy5qc3MucGx1Z2luczsgLy8gV2UgbmVlZCB0byBjbG9uZSBhcnJheSBiZWNhdXNlIGlmIHdlIG1vZGlmeSB0aGUgaW5kZXggc29tZXdoZXJlIGVsc2UgZHVyaW5nIGEgbG9vcFxuICAgIC8vIHdlIGVuZCB1cCB3aXRoIHZlcnkgaGFyZC10by10cmFjay1kb3duIHNpZGUgZWZmZWN0cy5cblxuICAgIHRoaXMuaW5kZXguc2xpY2UoMCkuZm9yRWFjaChwbHVnaW5zLm9uUHJvY2Vzc1J1bGUsIHBsdWdpbnMpO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIHJ1bGUgaW4gYC5tYXBgLCBgLmNsYXNzZXNgIGFuZCBgLmtleWZyYW1lc2AgbWFwcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlcihydWxlKSB7XG4gICAgdGhpcy5tYXBbcnVsZS5rZXldID0gcnVsZTtcblxuICAgIGlmIChydWxlIGluc3RhbmNlb2YgU3R5bGVSdWxlKSB7XG4gICAgICB0aGlzLm1hcFtydWxlLnNlbGVjdG9yXSA9IHJ1bGU7XG4gICAgICBpZiAocnVsZS5pZCkgdGhpcy5jbGFzc2VzW3J1bGUua2V5XSA9IHJ1bGUuaWQ7XG4gICAgfSBlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgS2V5ZnJhbWVzUnVsZSAmJiB0aGlzLmtleWZyYW1lcykge1xuICAgICAgdGhpcy5rZXlmcmFtZXNbcnVsZS5uYW1lXSA9IHJ1bGUuaWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udW5yZWdpc3RlciA9IGZ1bmN0aW9uIHVucmVnaXN0ZXIocnVsZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtydWxlLmtleV07XG5cbiAgICBpZiAocnVsZSBpbnN0YW5jZW9mIFN0eWxlUnVsZSkge1xuICAgICAgZGVsZXRlIHRoaXMubWFwW3J1bGUuc2VsZWN0b3JdO1xuICAgICAgZGVsZXRlIHRoaXMuY2xhc3Nlc1tydWxlLmtleV07XG4gICAgfSBlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgS2V5ZnJhbWVzUnVsZSkge1xuICAgICAgZGVsZXRlIHRoaXMua2V5ZnJhbWVzW3J1bGUubmFtZV07XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGZ1bmN0aW9uIHZhbHVlcyB3aXRoIGEgbmV3IGRhdGEuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgbmFtZTtcbiAgICB2YXIgZGF0YTtcbiAgICB2YXIgb3B0aW9ucztcblxuICAgIGlmICh0eXBlb2YgKGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdOyAvLyAkRmxvd0ZpeE1lW2ludmFsaWQtdHVwbGUtaW5kZXhdXG5cbiAgICAgIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07IC8vICRGbG93Rml4TWVbaW52YWxpZC10dXBsZS1pbmRleF1cblxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTsgLy8gJEZsb3dGaXhNZVtpbnZhbGlkLXR1cGxlLWluZGV4XVxuXG4gICAgICBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgICAgbmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHRoaXMudXBkYXRlT25lKHRoaXMubWFwW25hbWVdLCBkYXRhLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW5kZXgubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT25lKHRoaXMuaW5kZXhbaW5kZXhdLCBkYXRhLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEV4ZWN1dGUgcGx1Z2lucywgdXBkYXRlIHJ1bGUgcHJvcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZU9uZSA9IGZ1bmN0aW9uIHVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRVcGRhdGVPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRvcHRpb25zMiA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgcGx1Z2lucyA9IF90aGlzJG9wdGlvbnMyLmpzcy5wbHVnaW5zLFxuICAgICAgICBzaGVldCA9IF90aGlzJG9wdGlvbnMyLnNoZWV0OyAvLyBJdCBpcyBhIHJ1bGVzIGNvbnRhaW5lciBsaWtlIGZvciBlLmcuIENvbmRpdGlvbmFsUnVsZS5cblxuICAgIGlmIChydWxlLnJ1bGVzIGluc3RhbmNlb2YgUnVsZUxpc3QpIHtcbiAgICAgIHJ1bGUucnVsZXMudXBkYXRlKGRhdGEsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzdHlsZVJ1bGUgPSBydWxlO1xuICAgIHZhciBzdHlsZSA9IHN0eWxlUnVsZS5zdHlsZTtcbiAgICBwbHVnaW5zLm9uVXBkYXRlKGRhdGEsIHJ1bGUsIHNoZWV0LCBvcHRpb25zKTsgLy8gV2UgcmVseSBvbiBhIG5ldyBgc3R5bGVgIHJlZiBpbiBjYXNlIGl0IHdhcyBtdXRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLlxuXG4gICAgaWYgKG9wdGlvbnMucHJvY2VzcyAmJiBzdHlsZSAmJiBzdHlsZSAhPT0gc3R5bGVSdWxlLnN0eWxlKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHJ1biB0aGUgcGx1Z2lucyBpbiBjYXNlIG5ldyBgc3R5bGVgIHJlbGllcyBvbiBzeW50YXggcGx1Z2lucy5cbiAgICAgIHBsdWdpbnMub25Qcm9jZXNzU3R5bGUoc3R5bGVSdWxlLnN0eWxlLCBzdHlsZVJ1bGUsIHNoZWV0KTsgLy8gVXBkYXRlIGFuZCBhZGQgcHJvcHMuXG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVSdWxlLnN0eWxlKSB7XG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSBzdHlsZVJ1bGUuc3R5bGVbcHJvcF07XG4gICAgICAgIHZhciBwcmV2VmFsdWUgPSBzdHlsZVtwcm9wXTsgLy8gV2UgbmVlZCB0byB1c2UgYGZvcmNlOiB0cnVlYCBiZWNhdXNlIGBydWxlLnN0eWxlYCBoYXMgYmVlbiB1cGRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLCBzbyBgcnVsZS5wcm9wKClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgQ1NTT00gcnVsZS5cbiAgICAgICAgLy8gV2UgZG8gdGhpcyBjb21wYXJpc29uIHRvIGF2b2lkIHVubmVlZGVkIGBydWxlLnByb3AoKWAgY2FsbHMsIHNpbmNlIHdlIGhhdmUgdGhlIG9sZCBgc3R5bGVgIG9iamVjdCBoZXJlLlxuXG4gICAgICAgIGlmIChuZXh0VmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKHByb3AsIG5leHRWYWx1ZSwgZm9yY2VVcGRhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZW1vdmUgcHJvcHMuXG5cblxuICAgICAgZm9yICh2YXIgX3Byb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgdmFyIF9uZXh0VmFsdWUgPSBzdHlsZVJ1bGUuc3R5bGVbX3Byb3BdO1xuICAgICAgICB2YXIgX3ByZXZWYWx1ZSA9IHN0eWxlW19wcm9wXTsgLy8gV2UgbmVlZCB0byB1c2UgYGZvcmNlOiB0cnVlYCBiZWNhdXNlIGBydWxlLnN0eWxlYCBoYXMgYmVlbiB1cGRhdGVkIGR1cmluZyBvblVwZGF0ZSBob29rLCBzbyBgcnVsZS5wcm9wKClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgQ1NTT00gcnVsZS5cbiAgICAgICAgLy8gV2UgZG8gdGhpcyBjb21wYXJpc29uIHRvIGF2b2lkIHVubmVlZGVkIGBydWxlLnByb3AoKWAgY2FsbHMsIHNpbmNlIHdlIGhhdmUgdGhlIG9sZCBgc3R5bGVgIG9iamVjdCBoZXJlLlxuXG4gICAgICAgIGlmIChfbmV4dFZhbHVlID09IG51bGwgJiYgX25leHRWYWx1ZSAhPT0gX3ByZXZWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKF9wcm9wLCBudWxsLCBmb3JjZVVwZGF0ZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IHJ1bGVzIHRvIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcbiAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRleC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5pbmRleFtpbmRleF07XG4gICAgICB2YXIgY3NzID0gcnVsZS50b1N0cmluZyhvcHRpb25zKTsgLy8gTm8gbmVlZCB0byByZW5kZXIgYW4gZW1wdHkgcnVsZS5cblxuICAgICAgaWYgKCFjc3MgJiYgIWxpbmspIGNvbnRpbnVlO1xuICAgICAgaWYgKHN0cikgc3RyICs9ICdcXG4nO1xuICAgICAgc3RyICs9IGNzcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiBSdWxlTGlzdDtcbn0oKTtcblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmRlcGxveWVkID0gdm9pZCAwO1xuICAgIHRoaXMuYXR0YWNoZWQgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLnJlbmRlcmVyID0gdm9pZCAwO1xuICAgIHRoaXMuY2xhc3NlcyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleWZyYW1lcyA9IHZvaWQgMDtcbiAgICB0aGlzLnF1ZXVlID0gdm9pZCAwO1xuICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcGxveWVkID0gZmFsc2U7XG4gICAgdGhpcy5jbGFzc2VzID0ge307XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgc2hlZXQ6IHRoaXMsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBrZXlmcmFtZXM6IHRoaXMua2V5ZnJhbWVzXG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy5SZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBvcHRpb25zLlJlbmRlcmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QodGhpcy5vcHRpb25zKTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZXNbbmFtZV0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBdHRhY2ggcmVuZGVyYWJsZSB0byB0aGUgcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHJldHVybiB0aGlzO1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLmF0dGFjaCgpO1xuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlOyAvLyBPcmRlciBpcyBpbXBvcnRhbnQsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGluc2VydFJ1bGUgQVBJIGlmIHN0eWxlIGVsZW1lbnQgaXMgbm90IGF0dGFjaGVkLlxuXG4gICAgaWYgKCF0aGlzLmRlcGxveWVkKSB0aGlzLmRlcGxveSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgcmVuZGVyYWJsZSBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5kZXRhY2goKTtcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHJ1bGUgdG8gdGhlIGN1cnJlbnQgc3R5bGVzaGVldC5cbiAgICogV2lsbCBpbnNlcnQgYSBydWxlIGFsc28gYWZ0ZXIgdGhlIHN0eWxlc2hlZXQgaGFzIGJlZW4gcmVuZGVyZWQgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWU7IC8vIFBsdWdpbnMgY2FuIGNyZWF0ZSBydWxlcy5cbiAgICAvLyBJbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgcmlnaHQgb3JkZXIsIHdlIG5lZWQgdG8gcXVldWUgYWxsIGAuYWRkUnVsZWAgY2FsbHMsXG4gICAgLy8gd2hpY2ggaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCBgcnVsZXMuYWRkKClgIGNhbGwuXG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCAmJiAhcXVldWUpIHRoaXMucXVldWUgPSBbXTtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgaWYgKCF0aGlzLmRlcGxveWVkKSByZXR1cm4gcnVsZTsgLy8gRG9uJ3QgaW5zZXJ0IHJ1bGUgZGlyZWN0bHkgaWYgdGhlcmUgaXMgbm8gc3RyaW5naWZpZWQgdmVyc2lvbiB5ZXQuXG4gICAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuXG4gICAgICBpZiAocXVldWUpIHF1ZXVlLnB1c2gocnVsZSk7ZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShydWxlKTtcblxuICAgICAgICBpZiAodGhpcy5xdWV1ZSkge1xuICAgICAgICAgIHRoaXMucXVldWUuZm9yRWFjaCh0aGlzLmluc2VydFJ1bGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0gLy8gV2UgY2FuJ3QgYWRkIHJ1bGVzIHRvIGEgZGV0YWNoZWQgc3R5bGUgbm9kZS5cbiAgICAvLyBXZSB3aWxsIHJlZGVwbG95IHRoZSBzaGVldCBvbmNlIHVzZXIgd2lsbCBhdHRhY2ggaXQuXG5cblxuICAgIHRoaXMuZGVwbG95ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IHJ1bGUgaW50byB0aGUgU3R5bGVTaGVldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYWRkIHJ1bGVzLlxuICAgKiBXaWxsIHJlbmRlciBhbHNvIGFmdGVyIFN0eWxlIFNoZWV0IHdhcyByZW5kZXJlZCB0aGUgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZXMgPSBmdW5jdGlvbiBhZGRSdWxlcyhzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWRkZWQgPSBbXTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuYWRkUnVsZShuYW1lLCBzdHlsZXNbbmFtZV0sIG9wdGlvbnMpO1xuICAgICAgaWYgKHJ1bGUpIGFkZGVkLnB1c2gocnVsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZGVkO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlIGJ5IG5hbWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUgYnkgbmFtZS5cbiAgICogUmV0dXJucyBgdHJ1ZWA6IGlmIHJ1bGUgaGFzIGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBET00uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKG5hbWUpIHtcbiAgICB2YXIgcnVsZSA9IHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyA/IG5hbWUgOiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcblxuICAgIGlmICghcnVsZSB8fCAvLyBTdHlsZSBzaGVldCB3YXMgY3JlYXRlZCB3aXRob3V0IGxpbms6IHRydWUgYW5kIGF0dGFjaGVkLCBpbiB0aGlzIGNhc2Ugd2VcbiAgICAvLyB3b24ndCBiZSBhYmxlIHRvIHJlbW92ZSB0aGUgQ1NTIHJ1bGUgZnJvbSB0aGUgRE9NLlxuICAgIHRoaXMuYXR0YWNoZWQgJiYgIXJ1bGUucmVuZGVyYWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucmVtb3ZlKHJ1bGUpO1xuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQgJiYgcnVsZS5yZW5kZXJhYmxlICYmIHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmRlbGV0ZVJ1bGUocnVsZS5yZW5kZXJhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlcGxveSBwdXJlIENTUyBzdHJpbmcgdG8gYSByZW5kZXJhYmxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXBsb3kgPSBmdW5jdGlvbiBkZXBsb3koKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHRoaXMucmVuZGVyZXIuZGVwbG95KCk7XG4gICAgdGhpcy5kZXBsb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfdGhpcyRydWxlcztcblxuICAgIChfdGhpcyRydWxlcyA9IHRoaXMucnVsZXMpLnVwZGF0ZS5hcHBseShfdGhpcyRydWxlcywgYXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgc2luZ2xlIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZU9uZSA9IGZ1bmN0aW9uIHVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdGhpcy5ydWxlcy51cGRhdGVPbmUocnVsZSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgcnVsZXMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxudmFyIFBsdWdpbnNSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdWdpbnNSZWdpc3RyeSgpIHtcbiAgICB0aGlzLnBsdWdpbnMgPSB7XG4gICAgICBpbnRlcm5hbDogW10sXG4gICAgICBleHRlcm5hbDogW11cbiAgICB9O1xuICAgIHRoaXMucmVnaXN0cnkgPSB2b2lkIDA7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUGx1Z2luc1JlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQ2FsbCBgb25DcmVhdGVSdWxlYCBob29rcyBhbmQgcmV0dXJuIGFuIG9iamVjdCBpZiByZXR1cm5lZCBieSBhIGhvb2suXG4gICAqL1xuICBfcHJvdG8ub25DcmVhdGVSdWxlID0gZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25DcmVhdGVSdWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMucmVnaXN0cnkub25DcmVhdGVSdWxlW2ldKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJ1bGUpIHJldHVybiBydWxlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblByb2Nlc3NSdWxlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzUnVsZSA9IGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLmlzUHJvY2Vzc2VkKSByZXR1cm47XG4gICAgdmFyIHNoZWV0ID0gcnVsZS5vcHRpb25zLnNoZWV0O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1J1bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVnaXN0cnkub25Qcm9jZXNzUnVsZVtpXShydWxlLCBzaGVldCk7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUuc3R5bGUpIHRoaXMub25Qcm9jZXNzU3R5bGUocnVsZS5zdHlsZSwgcnVsZSwgc2hlZXQpO1xuICAgIHJ1bGUuaXNQcm9jZXNzZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblByb2Nlc3NTdHlsZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uUHJvY2Vzc1N0eWxlID0gZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1N0eWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIHJ1bGUuc3R5bGUgPSB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1N0eWxlW2ldKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1NoZWV0YCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU2hlZXQgPSBmdW5jdGlvbiBvblByb2Nlc3NTaGVldChzaGVldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldFtpXShzaGVldCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblVwZGF0ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVnaXN0cnkub25VcGRhdGVbaV0oZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25DaGFuZ2VWYWx1ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25DaGFuZ2VWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvY2Vzc2VkVmFsdWUgPSB0aGlzLnJlZ2lzdHJ5Lm9uQ2hhbmdlVmFsdWVbaV0ocHJvY2Vzc2VkVmFsdWUsIHByb3AsIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWRWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVzZSA9IGZ1bmN0aW9uIHVzZShuZXdQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBxdWV1ZTogJ2V4dGVybmFsJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMucGx1Z2luc1tvcHRpb25zLnF1ZXVlXTsgLy8gQXZvaWRzIGFwcGx5aW5nIHNhbWUgcGx1Z2luIHR3aWNlLCBhdCBsZWFzdCBiYXNlZCBvbiByZWYuXG5cbiAgICBpZiAocGx1Z2lucy5pbmRleE9mKG5ld1BsdWdpbikgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGx1Z2lucy5wdXNoKG5ld1BsdWdpbik7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdLmNvbmNhdCh0aGlzLnBsdWdpbnMuZXh0ZXJuYWwsIHRoaXMucGx1Z2lucy5pbnRlcm5hbCkucmVkdWNlKGZ1bmN0aW9uIChyZWdpc3RyeSwgcGx1Z2luKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbikge1xuICAgICAgICBpZiAobmFtZSBpbiByZWdpc3RyeSkge1xuICAgICAgICAgIHJlZ2lzdHJ5W25hbWVdLnB1c2gocGx1Z2luW25hbWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFVua25vd24gaG9vayBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVnaXN0cnk7XG4gICAgfSwge1xuICAgICAgb25DcmVhdGVSdWxlOiBbXSxcbiAgICAgIG9uUHJvY2Vzc1J1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU3R5bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU2hlZXQ6IFtdLFxuICAgICAgb25DaGFuZ2VWYWx1ZTogW10sXG4gICAgICBvblVwZGF0ZTogW11cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUGx1Z2luc1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFNoZWV0cyByZWdpc3RyeSB0byBhY2Nlc3MgdGhlbSBhbGwgYXQgb25lIHBsYWNlLlxuICovXG52YXIgU2hlZXRzUmVnaXN0cnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaGVldHNSZWdpc3RyeSgpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2hlZXRzUmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIFN0eWxlIFNoZWV0LlxuICAgKi9cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChzaGVldCkge1xuICAgIHZhciByZWdpc3RyeSA9IHRoaXMucmVnaXN0cnk7XG4gICAgdmFyIGluZGV4ID0gc2hlZXQub3B0aW9ucy5pbmRleDtcbiAgICBpZiAocmVnaXN0cnkuaW5kZXhPZihzaGVldCkgIT09IC0xKSByZXR1cm47XG5cbiAgICBpZiAocmVnaXN0cnkubGVuZ3RoID09PSAwIHx8IGluZGV4ID49IHRoaXMuaW5kZXgpIHtcbiAgICAgIHJlZ2lzdHJ5LnB1c2goc2hlZXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmluZCBhIHBvc2l0aW9uLlxuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVnaXN0cnlbaV0ub3B0aW9ucy5pbmRleCA+IGluZGV4KSB7XG4gICAgICAgIHJlZ2lzdHJ5LnNwbGljZShpLCAwLCBzaGVldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSByZWdpc3RyeS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gW107XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhIFN0eWxlIFNoZWV0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoc2hlZXQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnJlZ2lzdHJ5LmluZGV4T2Yoc2hlZXQpO1xuICAgIHRoaXMucmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBhbGwgYXR0YWNoZWQgc2hlZXRzIHRvIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIGF0dGFjaGVkID0gX3JlZi5hdHRhY2hlZCxcbiAgICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImF0dGFjaGVkXCJdKTtcblxuICAgIHZhciBjc3MgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5yZWdpc3RyeVtpXTtcblxuICAgICAgaWYgKGF0dGFjaGVkICE9IG51bGwgJiYgc2hlZXQuYXR0YWNoZWQgIT09IGF0dGFjaGVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3NzKSBjc3MgKz0gJ1xcbic7XG4gICAgICBjc3MgKz0gc2hlZXQudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU2hlZXRzUmVnaXN0cnksIFt7XG4gICAga2V5OiBcImluZGV4XCIsXG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGhpZ2hlc3QgaW5kZXggbnVtYmVyLlxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnkubGVuZ3RoID09PSAwID8gMCA6IHRoaXMucmVnaXN0cnlbdGhpcy5yZWdpc3RyeS5sZW5ndGggLSAxXS5vcHRpb25zLmluZGV4O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTaGVldHNSZWdpc3RyeTtcbn0oKTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgZ2xvYmFsIHNoZWV0cyByZWdpc3RyeS4gT25seSBEb21SZW5kZXJlciB3aWxsIGFkZCBzaGVldHMgdG8gaXQuXG4gKiBPbiB0aGUgc2VydmVyIG9uZSBzaG91bGQgdXNlIGFuIG93biBTaGVldHNSZWdpc3RyeSBpbnN0YW5jZSBhbmQgYWRkIHRoZVxuICogc2hlZXRzIHRvIGl0LCBiZWNhdXNlIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgcmVnaXN0cnkgZm9yXG4gKiBlYWNoIHJlcXVlc3QgaW4gb3JkZXIgdG8gbm90IGxlYWsgc2hlZXRzIGFjcm9zcyByZXF1ZXN0cy5cbiAqL1xuXG52YXIgcmVnaXN0cnkgPSBuZXcgU2hlZXRzUmVnaXN0cnkoKTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsVGhpcyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aCA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbnZhciBucyA9ICcyZjFhY2M2YzNhNjA2YjA4MmU1ZWVmNWU1NDQxNGZmYic7XG5pZiAoZ2xvYmFsVGhpc1tuc10gPT0gbnVsbCkgZ2xvYmFsVGhpc1tuc10gPSAwOyAvLyBCdW5kbGUgbWF5IGNvbnRhaW4gbXVsdGlwbGUgSlNTIHZlcnNpb25zIGF0IHRoZSBzYW1lIHRpbWUuIEluIG9yZGVyIHRvIGlkZW50aWZ5XG4vLyB0aGUgY3VycmVudCB2ZXJzaW9uIHdpdGgganVzdCBvbmUgc2hvcnQgbnVtYmVyIGFuZCB1c2UgaXQgZm9yIGNsYXNzZXMgZ2VuZXJhdGlvblxuLy8gd2UgdXNlIGEgY291bnRlci4gQWxzbyBpdCBpcyBtb3JlIGFjY3VyYXRlLCBiZWNhdXNlIHVzZXIgY2FuIG1hbnVhbGx5IHJlZXZhbHVhdGVcbi8vIHRoZSBtb2R1bGUuXG5cbnZhciBtb2R1bGVJZCA9IGdsb2JhbFRoaXNbbnNdKys7XG5cbnZhciBtYXhSdWxlcyA9IDFlMTA7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4gKiBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0ZWQuXG4gKiBXZSBuZWVkIHRvIHJlc2V0IHRoZSBydWxlIGNvdW50ZXIgZm9yIFNTUiBmb3IgZWFjaCByZXF1ZXN0LlxuICovXG52YXIgY3JlYXRlR2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYXRlSWQob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIHJ1bGVDb3VudGVyID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChydWxlLCBzaGVldCkge1xuICAgIHJ1bGVDb3VudGVyICs9IDE7XG5cbiAgICBpZiAocnVsZUNvdW50ZXIgPiBtYXhSdWxlcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLiBSdWxlIGNvdW50ZXIgaXMgYXQgXCIgKyBydWxlQ291bnRlciArIFwiLlwiKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICB2YXIganNzSWQgPSAnJztcbiAgICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgICBpZiAoc2hlZXQpIHtcbiAgICAgIGlmIChzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgICBwcmVmaXggPSBzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoZWV0Lm9wdGlvbnMuanNzLmlkICE9IG51bGwpIHtcbiAgICAgICAganNzSWQgPSBTdHJpbmcoc2hlZXQub3B0aW9ucy5qc3MuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1pbmlmeSkge1xuICAgICAgLy8gVXNpbmcgXCJjXCIgYmVjYXVzZSBhIG51bWJlciBjYW4ndCBiZSB0aGUgZmlyc3QgY2hhciBpbiBhIGNsYXNzIG5hbWUuXG4gICAgICByZXR1cm4gXCJcIiArIChwcmVmaXggfHwgJ2MnKSArIG1vZHVsZUlkICsganNzSWQgKyBydWxlQ291bnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ICsgcnVsZS5rZXkgKyBcIi1cIiArIG1vZHVsZUlkICsgKGpzc0lkID8gXCItXCIgKyBqc3NJZCA6ICcnKSArIFwiLVwiICsgcnVsZUNvdW50ZXI7XG4gIH07XG59O1xuXG4vKipcbiAqIENhY2hlIHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCB0aW1lIGEgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICovXG52YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIHZhbHVlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdmFsdWUpIHZhbHVlID0gZm4oKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEdldCBhIHN0eWxlIHByb3BlcnR5IHZhbHVlLlxuICovXG52YXIgZ2V0UHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoY3NzUnVsZSwgcHJvcCkge1xuICB0cnkge1xuICAgIC8vIFN1cHBvcnQgQ1NTVE9NLlxuICAgIGlmIChjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwKSB7XG4gICAgICByZXR1cm4gY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcC5nZXQocHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc1J1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSUUgbWF5IHRocm93IGlmIHByb3BlcnR5IGlzIHVua25vd24uXG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCBhIHN0eWxlIHByb3BlcnR5LlxuICovXG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiBzZXRQcm9wZXJ0eShjc3NSdWxlLCBwcm9wLCB2YWx1ZSkge1xuICB0cnkge1xuICAgIHZhciBjc3NWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjc3NWYWx1ZSA9IHRvQ3NzVmFsdWUodmFsdWUsIHRydWUpO1xuXG4gICAgICBpZiAodmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICchaW1wb3J0YW50Jykge1xuICAgICAgICBjc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIGNzc1ZhbHVlLCAnaW1wb3J0YW50Jyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gLy8gU3VwcG9ydCBDU1NUT00uXG5cblxuICAgIGlmIChjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwKSB7XG4gICAgICBjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwLnNldChwcm9wLCBjc3NWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzc1J1bGUuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgY3NzVmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSUUgbWF5IHRocm93IGlmIHByb3BlcnR5IGlzIHVua25vd24uXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIHN0eWxlIHByb3BlcnR5LlxuICovXG52YXIgcmVtb3ZlUHJvcGVydHkgPSBmdW5jdGlvbiByZW1vdmVQcm9wZXJ0eShjc3NSdWxlLCBwcm9wKSB7XG4gIHRyeSB7XG4gICAgLy8gU3VwcG9ydCBDU1NUT00uXG4gICAgaWYgKGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXApIHtcbiAgICAgIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuZGVsZXRlKHByb3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3NSdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBET01FeGNlcHRpb24gXFxcIlwiICsgZXJyLm1lc3NhZ2UgKyBcIlxcXCIgd2FzIHRocm93bi4gVHJpZWQgdG8gcmVtb3ZlIHByb3BlcnR5IFxcXCJcIiArIHByb3AgKyBcIlxcXCIuXCIpIDogdm9pZCAwO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0aGUgc2VsZWN0b3IuXG4gKi9cbnZhciBzZXRTZWxlY3RvciA9IGZ1bmN0aW9uIHNldFNlbGVjdG9yKGNzc1J1bGUsIHNlbGVjdG9yVGV4dCkge1xuICBjc3NSdWxlLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yVGV4dDsgLy8gUmV0dXJuIGZhbHNlIGlmIHNldHRlciB3YXMgbm90IHN1Y2Nlc3NmdWwuXG4gIC8vIEN1cnJlbnRseSB3b3JrcyBpbiBjaHJvbWUgb25seS5cblxuICByZXR1cm4gY3NzUnVsZS5zZWxlY3RvclRleHQgPT09IHNlbGVjdG9yVGV4dDtcbn07XG4vKipcbiAqIEdldHMgdGhlIGBoZWFkYCBlbGVtZW50IHVwb24gdGhlIGZpcnN0IGNhbGwgYW5kIGNhY2hlcyBpdC5cbiAqIFdlIGFzc3VtZSBpdCBjYW4ndCBiZSBudWxsLlxuICovXG5cblxudmFyIGdldEhlYWQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbn0pO1xuLyoqXG4gKiBGaW5kIGF0dGFjaGVkIHNoZWV0IHdpdGggYW4gaW5kZXggaGlnaGVyIHRoYW4gdGhlIHBhc3NlZCBvbmUuXG4gKi9cblxuZnVuY3Rpb24gZmluZEhpZ2hlclNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2hlZXQgPSByZWdpc3RyeVtpXTtcblxuICAgIGlmIChzaGVldC5hdHRhY2hlZCAmJiBzaGVldC5vcHRpb25zLmluZGV4ID4gb3B0aW9ucy5pbmRleCAmJiBzaGVldC5vcHRpb25zLmluc2VydGlvblBvaW50ID09PSBvcHRpb25zLmluc2VydGlvblBvaW50KSB7XG4gICAgICByZXR1cm4gc2hlZXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEZpbmQgYXR0YWNoZWQgc2hlZXQgd2l0aCB0aGUgaGlnaGVzdCBpbmRleC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXN0U2hlZXQocmVnaXN0cnksIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IHJlZ2lzdHJ5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHNoZWV0ID0gcmVnaXN0cnlbaV07XG5cbiAgICBpZiAoc2hlZXQuYXR0YWNoZWQgJiYgc2hlZXQub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9PT0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgcmV0dXJuIHNoZWV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBGaW5kIGEgY29tbWVudCB3aXRoIFwianNzXCIgaW5zaWRlLlxuICovXG5cblxuZnVuY3Rpb24gZmluZENvbW1lbnROb2RlKHRleHQpIHtcbiAgdmFyIGhlYWQgPSBnZXRIZWFkKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGhlYWQuY2hpbGROb2Rlc1tpXTtcblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4ICYmIG5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRmluZCBhIG5vZGUgYmVmb3JlIHdoaWNoIHdlIGNhbiBpbnNlcnQgdGhlIHNoZWV0LlxuICovXG5mdW5jdGlvbiBmaW5kUHJldk5vZGUob3B0aW9ucykge1xuICB2YXIgcmVnaXN0cnkkMSA9IHJlZ2lzdHJ5LnJlZ2lzdHJ5O1xuXG4gIGlmIChyZWdpc3RyeSQxLmxlbmd0aCA+IDApIHtcbiAgICAvLyBUcnkgdG8gaW5zZXJ0IGJlZm9yZSB0aGUgbmV4dCBoaWdoZXIgc2hlZXQuXG4gICAgdmFyIHNoZWV0ID0gZmluZEhpZ2hlclNoZWV0KHJlZ2lzdHJ5JDEsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LnJlbmRlcmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJlbnQ6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgbm9kZTogc2hlZXQucmVuZGVyZXIuZWxlbWVudFxuICAgICAgfTtcbiAgICB9IC8vIE90aGVyd2lzZSBpbnNlcnQgYWZ0ZXIgdGhlIGxhc3QgYXR0YWNoZWQuXG5cblxuICAgIHNoZWV0ID0gZmluZEhpZ2hlc3RTaGVldChyZWdpc3RyeSQxLCBvcHRpb25zKTtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyZW50OiBzaGVldC5yZW5kZXJlci5lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIG5vZGU6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnQubmV4dFNpYmxpbmdcbiAgICAgIH07XG4gICAgfVxuICB9IC8vIFRyeSB0byBmaW5kIGEgY29tbWVudCBwbGFjZWhvbGRlciBpZiByZWdpc3RyeSBpcyBlbXB0eS5cblxuXG4gIHZhciBpbnNlcnRpb25Qb2ludCA9IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQ7XG5cbiAgaWYgKGluc2VydGlvblBvaW50ICYmIHR5cGVvZiBpbnNlcnRpb25Qb2ludCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgY29tbWVudCA9IGZpbmRDb21tZW50Tm9kZShpbnNlcnRpb25Qb2ludCk7XG5cbiAgICBpZiAoY29tbWVudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyZW50OiBjb21tZW50LnBhcmVudE5vZGUsXG4gICAgICAgIG5vZGU6IGNvbW1lbnQubmV4dFNpYmxpbmdcbiAgICAgIH07XG4gICAgfSAvLyBJZiB1c2VyIHNwZWNpZmllcyBhbiBpbnNlcnRpb24gcG9pbnQgYW5kIGl0IGNhbid0IGJlIGZvdW5kIGluIHRoZSBkb2N1bWVudCAtXG4gICAgLy8gYmFkIHNwZWNpZmljaXR5IGlzc3VlcyBtYXkgYXBwZWFyLlxuXG5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIEluc2VydGlvbiBwb2ludCBcXFwiXCIgKyBpbnNlcnRpb25Qb2ludCArIFwiXFxcIiBub3QgZm91bmQuXCIpIDogdm9pZCAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBJbnNlcnQgc3R5bGUgZWxlbWVudCBpbnRvIHRoZSBET00uXG4gKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZShzdHlsZSwgb3B0aW9ucykge1xuICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuICB2YXIgbmV4dE5vZGUgPSBmaW5kUHJldk5vZGUob3B0aW9ucyk7XG5cbiAgaWYgKG5leHROb2RlICE9PSBmYWxzZSAmJiBuZXh0Tm9kZS5wYXJlbnQpIHtcbiAgICBuZXh0Tm9kZS5wYXJlbnQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0Tm9kZS5ub2RlKTtcbiAgICByZXR1cm47XG4gIH0gLy8gV29ya3Mgd2l0aCBpZnJhbWVzIGFuZCBhbnkgbm9kZSB0eXBlcy5cblxuXG4gIGlmIChpbnNlcnRpb25Qb2ludCAmJiB0eXBlb2YgaW5zZXJ0aW9uUG9pbnQubm9kZVR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDEzMjg3MjgvZm9yY2UtY2FzdGluZy1pbi1mbG93XG4gICAgdmFyIGluc2VydGlvblBvaW50RWxlbWVudCA9IGluc2VydGlvblBvaW50O1xuICAgIHZhciBwYXJlbnROb2RlID0gaW5zZXJ0aW9uUG9pbnRFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlLCBpbnNlcnRpb25Qb2ludEVsZW1lbnQubmV4dFNpYmxpbmcpO2Vsc2UgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgJ1tKU1NdIEluc2VydGlvbiBwb2ludCBpcyBub3QgaW4gdGhlIERPTS4nKSA6IHZvaWQgMDtcbiAgICByZXR1cm47XG4gIH1cblxuICBnZXRIZWFkKCkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuLyoqXG4gKiBSZWFkIGpzcyBub25jZSBzZXR0aW5nIGZyb20gdGhlIHBhZ2UgaWYgdGhlIHVzZXIgaGFzIHNldCBpdC5cbiAqL1xuXG5cbnZhciBnZXROb25jZSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJjc3Atbm9uY2VcIl0nKTtcbiAgcmV0dXJuIG5vZGUgPyBub2RlLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIDogbnVsbDtcbn0pO1xuXG52YXIgX2luc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKGNvbnRhaW5lciwgcnVsZSwgaW5kZXgpIHtcbiAgdHJ5IHtcbiAgICBpZiAoJ2luc2VydFJ1bGUnIGluIGNvbnRhaW5lcikge1xuICAgICAgdmFyIGMgPSBjb250YWluZXI7XG4gICAgICBjLmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgIH0gLy8gS2V5ZnJhbWVzIHJ1bGUuXG4gICAgZWxzZSBpZiAoJ2FwcGVuZFJ1bGUnIGluIGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgX2MgPSBjb250YWluZXI7XG5cbiAgICAgICAgX2MuYXBwZW5kUnVsZShydWxlKTtcbiAgICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBcIiArIGVyci5tZXNzYWdlKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyLmNzc1J1bGVzW2luZGV4XTtcbn07XG5cbnZhciBnZXRWYWxpZFJ1bGVJbnNlcnRpb25JbmRleCA9IGZ1bmN0aW9uIGdldFZhbGlkUnVsZUluc2VydGlvbkluZGV4KGNvbnRhaW5lciwgaW5kZXgpIHtcbiAgdmFyIG1heEluZGV4ID0gY29udGFpbmVyLmNzc1J1bGVzLmxlbmd0aDsgLy8gSW4gY2FzZSBwcmV2aW91cyBpbnNlcnRpb24gZmFpbHMsIHBhc3NlZCBpbmRleCBtaWdodCBiZSB3cm9uZ1xuXG4gIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID4gbWF4SW5kZXgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByZXR1cm4gbWF4SW5kZXg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59O1xuXG52YXIgY3JlYXRlU3R5bGUgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZSgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTsgLy8gV2l0aG91dCBpdCwgSUUgd2lsbCBoYXZlIGEgYnJva2VuIHNvdXJjZSBvcmRlciBzcGVjaWZpY2l0eSBpZiB3ZVxuICAvLyBpbnNlcnQgcnVsZXMgYWZ0ZXIgd2UgaW5zZXJ0IHRoZSBzdHlsZSB0YWcuXG4gIC8vIEl0IHNlZW1zIHRvIGtpY2stb2ZmIHRoZSBzb3VyY2Ugb3JkZXIgc3BlY2lmaWNpdHkgYWxnb3JpdGhtLlxuXG4gIGVsLnRleHRDb250ZW50ID0gJ1xcbic7XG4gIHJldHVybiBlbDtcbn07XG5cbnZhciBEb21SZW5kZXJlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8vIEhUTUxTdHlsZUVsZW1lbnQgbmVlZHMgZml4aW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8yNjk2XG4gIC8vIFdpbGwgYmUgZW1wdHkgaWYgbGluazogdHJ1ZSBvcHRpb24gaXMgbm90IHNldCwgYmVjYXVzZVxuICAvLyBpdCBpcyBvbmx5IGZvciB1c2UgdG9nZXRoZXIgd2l0aCBpbnNlcnRSdWxlIEFQSS5cbiAgZnVuY3Rpb24gRG9tUmVuZGVyZXIoc2hlZXQpIHtcbiAgICB0aGlzLmdldFByb3BlcnR5VmFsdWUgPSBnZXRQcm9wZXJ0eVZhbHVlO1xuICAgIHRoaXMuc2V0UHJvcGVydHkgPSBzZXRQcm9wZXJ0eTtcbiAgICB0aGlzLnJlbW92ZVByb3BlcnR5ID0gcmVtb3ZlUHJvcGVydHk7XG4gICAgdGhpcy5zZXRTZWxlY3RvciA9IHNldFNlbGVjdG9yO1xuICAgIHRoaXMuZWxlbWVudCA9IHZvaWQgMDtcbiAgICB0aGlzLnNoZWV0ID0gdm9pZCAwO1xuICAgIHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyA9IGZhbHNlO1xuICAgIHRoaXMuY3NzUnVsZXMgPSBbXTtcbiAgICAvLyBUaGVyZSBpcyBubyBzaGVldCB3aGVuIHRoZSByZW5kZXJlciBpcyB1c2VkIGZyb20gYSBzdGFuZGFsb25lIFN0eWxlUnVsZS5cbiAgICBpZiAoc2hlZXQpIHJlZ2lzdHJ5LmFkZChzaGVldCk7XG4gICAgdGhpcy5zaGVldCA9IHNoZWV0O1xuXG4gICAgdmFyIF9yZWYgPSB0aGlzLnNoZWV0ID8gdGhpcy5zaGVldC5vcHRpb25zIDoge30sXG4gICAgICAgIG1lZGlhID0gX3JlZi5tZWRpYSxcbiAgICAgICAgbWV0YSA9IF9yZWYubWV0YSxcbiAgICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQgfHwgY3JlYXRlU3R5bGUoKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWpzcycsICcnKTtcbiAgICBpZiAobWVkaWEpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIGlmIChtZXRhKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW1ldGEnLCBtZXRhKTtcbiAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICAgIGlmIChub25jZSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBzdHlsZSBlbGVtZW50IGludG8gcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IERvbVJlbmRlcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoKCkge1xuICAgIC8vIEluIHRoZSBjYXNlIHRoZSBlbGVtZW50IG5vZGUgaXMgZXh0ZXJuYWwgYW5kIGl0IGlzIGFscmVhZHkgaW4gdGhlIERPTS5cbiAgICBpZiAodGhpcy5lbGVtZW50LnBhcmVudE5vZGUgfHwgIXRoaXMuc2hlZXQpIHJldHVybjtcbiAgICBpbnNlcnRTdHlsZSh0aGlzLmVsZW1lbnQsIHRoaXMuc2hlZXQub3B0aW9ucyk7IC8vIFdoZW4gcnVsZXMgYXJlIGluc2VydGVkIHVzaW5nIGBpbnNlcnRSdWxlYCBBUEksIGFmdGVyIGBzaGVldC5kZXRhY2goKS5hdHRhY2goKWBcbiAgICAvLyBtb3N0IGJyb3dzZXJzIGNyZWF0ZSBhIG5ldyBDU1NTdHlsZVNoZWV0LCBleGNlcHQgb2YgYWxsIElFcy5cblxuICAgIHZhciBkZXBsb3llZCA9IEJvb2xlYW4odGhpcy5zaGVldCAmJiB0aGlzLnNoZWV0LmRlcGxveWVkKTtcblxuICAgIGlmICh0aGlzLmhhc0luc2VydGVkUnVsZXMgJiYgZGVwbG95ZWQpIHtcbiAgICAgIHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyA9IGZhbHNlO1xuICAgICAgdGhpcy5kZXBsb3koKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBzdHlsZSBlbGVtZW50IGZyb20gcmVuZGVyIHRyZWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICBpZiAoIXRoaXMuc2hlZXQpIHJldHVybjtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7IC8vIEluIHRoZSBtb3N0IGJyb3dzZXJzLCBydWxlcyBpbnNlcnRlZCB1c2luZyBpbnNlcnRSdWxlKCkgQVBJIHdpbGwgYmUgbG9zdCB3aGVuIHN0eWxlIGVsZW1lbnQgaXMgcmVtb3ZlZC5cbiAgICAvLyBUaG91Z2ggSUUgd2lsbCBrZWVwIHRoZW0gYW5kIHdlIG5lZWQgYSBjb25zaXN0ZW50IGJlaGF2aW9yLlxuXG4gICAgaWYgKHRoaXMuc2hlZXQub3B0aW9ucy5saW5rKSB7XG4gICAgICB0aGlzLmNzc1J1bGVzID0gW107XG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnXFxuJztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEluamVjdCBDU1Mgc3RyaW5nIGludG8gZWxlbWVudC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVwbG95ID0gZnVuY3Rpb24gZGVwbG95KCkge1xuICAgIHZhciBzaGVldCA9IHRoaXMuc2hlZXQ7XG4gICAgaWYgKCFzaGVldCkgcmV0dXJuO1xuXG4gICAgaWYgKHNoZWV0Lm9wdGlvbnMubGluaykge1xuICAgICAgdGhpcy5pbnNlcnRSdWxlcyhzaGVldC5ydWxlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gXCJcXG5cIiArIHNoZWV0LnRvU3RyaW5nKCkgKyBcIlxcblwiO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgUnVsZUxpc3QgaW50byBhbiBlbGVtZW50LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlcyA9IGZ1bmN0aW9uIGluc2VydFJ1bGVzKHJ1bGVzLCBuYXRpdmVQYXJlbnQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmluc2VydFJ1bGUocnVsZXMuaW5kZXhbaV0sIGksIG5hdGl2ZVBhcmVudCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgYSBydWxlIGludG8gZWxlbWVudC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgsIG5hdGl2ZVBhcmVudCkge1xuICAgIGlmIChuYXRpdmVQYXJlbnQgPT09IHZvaWQgMCkge1xuICAgICAgbmF0aXZlUGFyZW50ID0gdGhpcy5lbGVtZW50LnNoZWV0O1xuICAgIH1cblxuICAgIGlmIChydWxlLnJ1bGVzKSB7XG4gICAgICB2YXIgcGFyZW50ID0gcnVsZTtcbiAgICAgIHZhciBsYXRlc3ROYXRpdmVQYXJlbnQgPSBuYXRpdmVQYXJlbnQ7XG5cbiAgICAgIGlmIChydWxlLnR5cGUgPT09ICdjb25kaXRpb25hbCcgfHwgcnVsZS50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgICB2YXIgX2luc2VydGlvbkluZGV4ID0gZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXgobmF0aXZlUGFyZW50LCBpbmRleCk7IC8vIFdlIG5lZWQgdG8gcmVuZGVyIHRoZSBjb250YWluZXIgd2l0aG91dCBjaGlsZHJlbiBmaXJzdC5cblxuXG4gICAgICAgIGxhdGVzdE5hdGl2ZVBhcmVudCA9IF9pbnNlcnRSdWxlKG5hdGl2ZVBhcmVudCwgcGFyZW50LnRvU3RyaW5nKHtcbiAgICAgICAgICBjaGlsZHJlbjogZmFsc2VcbiAgICAgICAgfSksIF9pbnNlcnRpb25JbmRleCk7XG5cbiAgICAgICAgaWYgKGxhdGVzdE5hdGl2ZVBhcmVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZkNzc1J1bGUocnVsZSwgX2luc2VydGlvbkluZGV4LCBsYXRlc3ROYXRpdmVQYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc2VydFJ1bGVzKHBhcmVudC5ydWxlcywgbGF0ZXN0TmF0aXZlUGFyZW50KTtcbiAgICAgIHJldHVybiBsYXRlc3ROYXRpdmVQYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVTdHIgPSBydWxlLnRvU3RyaW5nKCk7XG4gICAgaWYgKCFydWxlU3RyKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGluc2VydGlvbkluZGV4ID0gZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXgobmF0aXZlUGFyZW50LCBpbmRleCk7XG5cbiAgICB2YXIgbmF0aXZlUnVsZSA9IF9pbnNlcnRSdWxlKG5hdGl2ZVBhcmVudCwgcnVsZVN0ciwgaW5zZXJ0aW9uSW5kZXgpO1xuXG4gICAgaWYgKG5hdGl2ZVJ1bGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNJbnNlcnRlZFJ1bGVzID0gdHJ1ZTtcbiAgICB0aGlzLnJlZkNzc1J1bGUocnVsZSwgaW5zZXJ0aW9uSW5kZXgsIG5hdGl2ZVJ1bGUpO1xuICAgIHJldHVybiBuYXRpdmVSdWxlO1xuICB9O1xuXG4gIF9wcm90by5yZWZDc3NSdWxlID0gZnVuY3Rpb24gcmVmQ3NzUnVsZShydWxlLCBpbmRleCwgY3NzUnVsZSkge1xuICAgIHJ1bGUucmVuZGVyYWJsZSA9IGNzc1J1bGU7IC8vIFdlIG9ubHkgd2FudCB0byByZWZlcmVuY2UgdGhlIHRvcCBsZXZlbCBydWxlcywgZGVsZXRlUnVsZSBBUEkgZG9lc24ndCBzdXBwb3J0IHJlbW92aW5nIG5lc3RlZCBydWxlc1xuICAgIC8vIGxpa2UgcnVsZXMgaW5zaWRlIG1lZGlhIHF1ZXJpZXMgb3Iga2V5ZnJhbWVzXG5cbiAgICBpZiAocnVsZS5vcHRpb25zLnBhcmVudCBpbnN0YW5jZW9mIFN0eWxlU2hlZXQpIHtcbiAgICAgIHRoaXMuY3NzUnVsZXNbaW5kZXhdID0gY3NzUnVsZTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGNzc1J1bGUpIHtcbiAgICB2YXIgc2hlZXQgPSB0aGlzLmVsZW1lbnQuc2hlZXQ7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKGNzc1J1bGUpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIENTUyBSdWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihjc3NSdWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzUnVsZXMuaW5kZXhPZihjc3NSdWxlKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGUgYSBuZXcgQ1NTIHJ1bGUgYW5kIHJlcGxhY2UgdGhlIGV4aXN0aW5nIG9uZS5cbiAgICpcbiAgICogT25seSB1c2VkIGZvciBzb21lIG9sZCBicm93c2VycyBiZWNhdXNlIHRoZXkgY2FuJ3Qgc2V0IGEgc2VsZWN0b3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlcGxhY2VSdWxlID0gZnVuY3Rpb24gcmVwbGFjZVJ1bGUoY3NzUnVsZSwgcnVsZSkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihjc3NSdWxlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50LnNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgfVxuICAvKipcbiAgICogR2V0IGFsbCBydWxlcyBlbGVtZW50cy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnNoZWV0LmNzc1J1bGVzO1xuICB9O1xuXG4gIHJldHVybiBEb21SZW5kZXJlcjtcbn0oKTtcblxudmFyIGluc3RhbmNlQ291bnRlciA9IDA7XG5cbnZhciBKc3MgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBKc3Mob3B0aW9ucykge1xuICAgIHRoaXMuaWQgPSBpbnN0YW5jZUNvdW50ZXIrKztcbiAgICB0aGlzLnZlcnNpb24gPSBcIjEwLjUuMFwiO1xuICAgIHRoaXMucGx1Z2lucyA9IG5ldyBQbHVnaW5zUmVnaXN0cnkoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpZDoge1xuICAgICAgICBtaW5pZnk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgY3JlYXRlR2VuZXJhdGVJZDogY3JlYXRlR2VuZXJhdGVJZCxcbiAgICAgIFJlbmRlcmVyOiBpc0luQnJvd3NlciA/IERvbVJlbmRlcmVyIDogbnVsbCxcbiAgICAgIHBsdWdpbnM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmdlbmVyYXRlSWQgPSBjcmVhdGVHZW5lcmF0ZUlkKHtcbiAgICAgIG1pbmlmeTogZmFsc2VcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbHVnaW5zLnVzZShwbHVnaW5zW2ldLCB7XG4gICAgICAgIHF1ZXVlOiAnaW50ZXJuYWwnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBQcmVwYXJlcyB2YXJpb3VzIG9wdGlvbnMsIGFwcGxpZXMgcGx1Z2lucy5cbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIHR3aWNlIG9uIHRoZSBzYW1lIGluc3RhbmNlLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHBsdWdpbnNcbiAgICogZGVkdXBsaWNhdGlvbiBsb2dpYy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gSnNzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0dXAgPSBmdW5jdGlvbiBzZXR1cChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkID0gb3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRpb25zLmlkLCBvcHRpb25zLmlkKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkIHx8IG9wdGlvbnMuaWQpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVJZCA9IHRoaXMub3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkKHRoaXMub3B0aW9ucy5pZCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgIT0gbnVsbCkgdGhpcy5vcHRpb25zLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcblxuICAgIGlmICgnUmVuZGVyZXInIGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5SZW5kZXJlciA9IG9wdGlvbnMuUmVuZGVyZXI7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuXG5cbiAgICBpZiAob3B0aW9ucy5wbHVnaW5zKSB0aGlzLnVzZS5hcHBseSh0aGlzLCBvcHRpb25zLnBsdWdpbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBTdHlsZSBTaGVldC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlU3R5bGVTaGVldCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQoc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIGluZGV4ID0gX29wdGlvbnMuaW5kZXg7XG5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSByZWdpc3RyeS5pbmRleCA9PT0gMCA/IDAgOiByZWdpc3RyeS5pbmRleCArIDE7XG4gICAgfVxuXG4gICAgdmFyIHNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoc3R5bGVzLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAganNzOiB0aGlzLFxuICAgICAgZ2VuZXJhdGVJZDogb3B0aW9ucy5nZW5lcmF0ZUlkIHx8IHRoaXMuZ2VuZXJhdGVJZCxcbiAgICAgIGluc2VydGlvblBvaW50OiB0aGlzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQsXG4gICAgICBSZW5kZXJlcjogdGhpcy5vcHRpb25zLlJlbmRlcmVyLFxuICAgICAgaW5kZXg6IGluZGV4XG4gICAgfSkpO1xuICAgIHRoaXMucGx1Z2lucy5vblByb2Nlc3NTaGVldChzaGVldCk7XG4gICAgcmV0dXJuIHNoZWV0O1xuICB9XG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIFN0eWxlIFNoZWV0IGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgcmVnaXN0cnkuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZVN0eWxlU2hlZXQgPSBmdW5jdGlvbiByZW1vdmVTdHlsZVNoZWV0KHNoZWV0KSB7XG4gICAgc2hlZXQuZGV0YWNoKCk7XG4gICAgcmVnaXN0cnkucmVtb3ZlKHNoZWV0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgcnVsZSB3aXRob3V0IGEgU3R5bGUgU2hlZXQuXG4gICAqIFtEZXByZWNhdGVkXSB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlUnVsZSA9IGZ1bmN0aW9uIGNyZWF0ZVJ1bGUkMShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChzdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdHlsZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBFbmFibGUgcnVsZSB3aXRob3V0IG5hbWUgZm9yIGlubGluZSBzdHlsZXMuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF1cbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJ1bGUodW5kZWZpbmVkLCBuYW1lLCBzdHlsZSk7XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuXG5cbiAgICB2YXIgcnVsZU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGpzczogdGhpcyxcbiAgICAgIFJlbmRlcmVyOiB0aGlzLm9wdGlvbnMuUmVuZGVyZXJcbiAgICB9KTtcblxuICAgIGlmICghcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCkgcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCA9IHRoaXMuZ2VuZXJhdGVJZDtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmNsYXNzZXMpIHJ1bGVPcHRpb25zLmNsYXNzZXMgPSB7fTtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmtleWZyYW1lcykgcnVsZU9wdGlvbnMua2V5ZnJhbWVzID0ge307XG5cbiAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUobmFtZSwgc3R5bGUsIHJ1bGVPcHRpb25zKTtcblxuICAgIGlmIChydWxlKSB0aGlzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgcGx1Z2luLiBQYXNzZWQgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBydWxlIGluc3RhbmNlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51c2UgPSBmdW5jdGlvbiB1c2UoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgX3RoaXMucGx1Z2lucy51c2UocGx1Z2luKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gSnNzO1xufSgpO1xuXG4vKipcbiAqIEV4dHJhY3RzIGEgc3R5bGVzIG9iamVjdCB3aXRoIG9ubHkgcHJvcHMgdGhhdCBjb250YWluIGZ1bmN0aW9uIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0RHluYW1pY1N0eWxlcyhzdHlsZXMpIHtcbiAgdmFyIHRvID0gbnVsbDtcblxuICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKCF0bykgdG8gPSB7fTtcbiAgICAgIHRvW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFyIGV4dHJhY3RlZCA9IGdldER5bmFtaWNTdHlsZXModmFsdWUpO1xuXG4gICAgICBpZiAoZXh0cmFjdGVkKSB7XG4gICAgICAgIGlmICghdG8pIHRvID0ge307XG4gICAgICAgIHRvW2tleV0gPSBleHRyYWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIFNoZWV0c01hbmFnZXIgaXMgbGlrZSBhIFdlYWtNYXAgd2hpY2ggaXMgZGVzaWduZWQgdG8gY291bnQgU3R5bGVTaGVldFxuICogaW5zdGFuY2VzIGFuZCBhdHRhY2gvZGV0YWNoIGF1dG9tYXRpY2FsbHkuXG4gKi9cbnZhciBTaGVldHNNYW5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2hlZXRzTWFuYWdlcigpIHtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zaGVldHMgPSBuZXcgV2Vha01hcCgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNoZWV0c01hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnNoZWV0O1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCBzaGVldCkge1xuICAgIGlmICh0aGlzLnNoZWV0cy5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubGVuZ3RoKys7XG4gICAgdGhpcy5zaGVldHMuc2V0KGtleSwge1xuICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgcmVmczogMFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2UgPSBmdW5jdGlvbiBtYW5hZ2Uoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG5cbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGlmIChlbnRyeS5yZWZzID09PSAwKSB7XG4gICAgICAgIGVudHJ5LnNoZWV0LmF0dGFjaCgpO1xuICAgICAgfVxuXG4gICAgICBlbnRyeS5yZWZzKys7XG4gICAgICByZXR1cm4gZW50cnkuc2hlZXQ7XG4gICAgfVxuXG4gICAgd2FybmluZyhmYWxzZSwgXCJbSlNTXSBTaGVldHNNYW5hZ2VyOiBjYW4ndCBmaW5kIHNoZWV0IHRvIG1hbmFnZVwiKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by51bm1hbmFnZSA9IGZ1bmN0aW9uIHVubWFuYWdlKGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuXG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBpZiAoZW50cnkucmVmcyA+IDApIHtcbiAgICAgICAgZW50cnkucmVmcy0tO1xuICAgICAgICBpZiAoZW50cnkucmVmcyA9PT0gMCkgZW50cnkuc2hlZXQuZGV0YWNoKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiU2hlZXRzTWFuYWdlcjogY2FuJ3QgZmluZCBzaGVldCB0byB1bm1hbmFnZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFNoZWV0c01hbmFnZXIsIFt7XG4gICAga2V5OiBcInNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2hlZXRzTWFuYWdlcjtcbn0oKTtcblxuLyoqXG4gKiBBIGJldHRlciBhYnN0cmFjdGlvbiBvdmVyIENTUy5cbiAqXG4gKiBAY29weXJpZ2h0IE9sZWcgSXNvbmVuIChTbG9ib2Rza29pKSAvIElzb25lbiAyMDE0LXByZXNlbnRcbiAqIEB3ZWJzaXRlIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuLyoqXG4gKiBFeHBvcnQgYSBjb25zdGFudCBpbmRpY2F0aW5nIGlmIHRoaXMgYnJvd3NlciBoYXMgQ1NTVE9NIHN1cHBvcnQuXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE4LzAzL2Nzc29tXG4gKi9cbnZhciBoYXNDU1NUT01TdXBwb3J0ID0gdHlwZW9mIENTUyA9PT0gJ29iamVjdCcgJiYgQ1NTICE9IG51bGwgJiYgJ251bWJlcicgaW4gQ1NTO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEpzcy5cbiAqL1xuXG52YXIgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBKc3Mob3B0aW9ucyk7XG59O1xuLyoqXG4gKiBBIGdsb2JhbCBKc3MgaW5zdGFuY2UuXG4gKi9cblxudmFyIGpzcyA9IGNyZWF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBqc3M7XG5leHBvcnQgeyBSdWxlTGlzdCwgU2hlZXRzTWFuYWdlciwgU2hlZXRzUmVnaXN0cnksIGNyZWF0ZSwgY3JlYXRlR2VuZXJhdGVJZCwgY3JlYXRlUnVsZSwgZ2V0RHluYW1pY1N0eWxlcywgaGFzQ1NTVE9NU3VwcG9ydCwgcmVnaXN0cnkgYXMgc2hlZXRzLCB0b0Nzc1ZhbHVlIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IFwiV2FybmluZzogXCIgKyBtZXNzYWdlO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKHRleHQpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aHJvdyBFcnJvcih0ZXh0KTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhcm5pbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PihcclxuICA8PlxyXG4gICAgPG5hdj5cclxuICAgICAgPExpbmsgaHJlZj0nLyc+PGE+5ZOB54mM5Luj55CGPC9hPjwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj0nLyc+PGE+5pSv5o+05pyN5YuZPC9hPjwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj0nLyc+PGE+5L2V6JmV6LO86LK3PC9hPjwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj0nLyc+PGE+5oSb5YWL6LO95LqLPC9hPjwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj0nLyc+PGE+NWhtMeizvOeJqeS4reW/gzwvYT48L0xpbms+XHJcbiAgICA8L25hdj5cclxuICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==