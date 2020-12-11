/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */


var now = function () {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_songs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/songs */ "./src/scripts/songs.js");




var canvas = document.getElementById('game-board');
var ctx = canvas.getContext("2d");
var theme = document.getElementById('theme');
var cover = document.getElementById('open-modal-background');
cover.addEventListener("click", function () {
  cover.classList.add("hidden");
  theme.play();
});

function drawBox() {
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.strokeRect(1, canvas.height - 109, canvas.width - 2, 103);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var rowY = y; // TODO change this to for loop to exit early?

  game.board.rows.forEach(function (row) {
    // only draw the rows on the grid, can optimize with a for loop and break?
    if (rowY > -103 && rowY < canvas.height) {
      !started ? row.bounceNotes(rowY) : row.drawRow(rowY, true);
    }

    rowY -= 103;
  }); // 103 / 8 to make sure we hit the 103

  y += 12.875;
  if (!game.gameOver()) drawBox();

  if ((y - 321 - 12.875) % 103 !== 0) {
    requestAnimationFrame(draw);
  }
}

var paused = false;

var makeMove = function makeMove(keysDown) {
  keysDown = parseInt(keysDown.join(""), 2);

  if (game.checkMove(keysDown)) {
    if (!started) {
      game.startTimer();
      started = true;
    }

    playTone();
    draw();
  } else {
    if (!started) return;
    game.flashErrors(game.board.currentMove() ^ keysDown);
    playError();
    paused = true;
    setTimeout(function () {
      paused = false;
      if (!game.gameOver()) drawBox();
    }, 2500);
  }
};

var debouncedMakeMove = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(makeMove, 40);
var keyElements = document.querySelectorAll('.player-key');
var keys = {
  'a': 0,
  's': 1,
  'd': 2,
  'f': 3,
  'g': 4
};
var keysDown = [0, 0, 0, 0, 0];
document.addEventListener('keydown', function (e) {
  if (paused || game.gameOver()) return;
  var idx = keys[e.key];
  if (idx === undefined || keysDown[idx] === 1) return;
  keysDown[idx] = 1;
  keyElements[idx].classList.add("selected");
  debouncedMakeMove(keysDown);
});
document.addEventListener('keyup', function (e) {
  keysDown = Array(5).fill(0);
  keyElements[keys[e.key]].classList.remove("selected");
});
var menu = document.getElementById("menu-background");
var startButton = document.getElementById("play-button");
var quit = document.getElementById("quit");
var song, level;
var audioCtx = new AudioContext();
var errorSource, noteSource;
var i = 0;
var started;
var y;
var game;
startButton.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('hidden');
  song = document.querySelector('input[name="song"]:checked').value;
  level = document.querySelector('input[name="level"]:checked').value;
  i = 0;
  loadNextNote(_scripts_songs__WEBPACK_IMPORTED_MODULE_3__["default"][song][i]);
  loadNextNote('wrong', true);
  game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](_scripts_songs__WEBPACK_IMPORTED_MODULE_3__["default"][song].length, level, ctx);
  started = false;
  y = canvas.height - 99;
  draw();
  theme.pause();
});

function loadNextNote(str, error) {
  var source = audioCtx.createBufferSource();
  fetch("./src/assets/notes/".concat(str, ".mp3")).then(function (response) {
    return response.arrayBuffer();
  }).then(function (arrayBuffer) {
    return audioCtx.decodeAudioData(arrayBuffer);
  }).then(function (buffer) {
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    error ? errorSource = source : noteSource = source;
  });
}

function playTone() {
  noteSource.start();
  i++;

  if (i !== game.board.length) {
    loadNextNote(_scripts_songs__WEBPACK_IMPORTED_MODULE_3__["default"][song][i]);
  }
}

function playError() {
  errorSource.start();
  loadNextNote('wrong', true);
}

quit.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.remove('hidden');
  game.quit();
  theme.currentTime = 0;
  theme.play();
});
window.addEventListener('blur', function (e) {
  e.preventDefault();
  theme.pause();
});

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move */ "./src/scripts/move.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // holds all of the rows 

var Board = /*#__PURE__*/function () {
  function Board(songLength, level, ctx) {
    _classCallCheck(this, Board);

    this.ctx = ctx;
    this.rows = Board.initializeBoard(songLength, level, ctx);
    this.length = this.rows.length;
    this.position = 0;
    this.angry = document.getElementById("angry");
  }

  _createClass(Board, [{
    key: "currentMove",
    value: function currentMove() {
      return parseInt(this.rows[this.position].row.join(""), 2);
    }
  }, {
    key: "drawErrors",
    value: function drawErrors(xOr) {
      for (var box = 0; box < 5; box++) {
        if ((xOr & Math.pow(2, box)) === Math.pow(2, box)) {
          if ((this.currentMove() & Math.pow(2, box)) === 0) {
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(357 - 70 * box, 420 - 98, 67, 86);
          } else {
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(357 - 70 * box, 420 - 98, 67, 86);
            this.ctx.drawImage(this.angry, 0, 0, 50, 50, 402 - 70 * box, 315, 50, 50);
            this.rows[this.position].drawMusicNotes(320);
          }
        }
      }
    } // stopBounces(){
    //   this.rows.forEach(row => row.stopBouncing())
    // }

  }, {
    key: "clearErrors",
    value: function clearErrors() {
      this.ctx.clearRect(0, 310, 500, 109);
    }
  }, {
    key: "nextMove",
    value: function nextMove() {
      this.position++;
    }
  }], [{
    key: "initializeBoard",
    value: function initializeBoard(songLength, level, ctx) {
      var rows = [];

      for (var i = 0; i < songLength; i++) {
        rows.push(new _move__WEBPACK_IMPORTED_MODULE_0__["default"](level, ctx));
      }

      return rows;
    }
  }]);

  return Board;
}();

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(songLength, level, ctx) {
    _classCallCheck(this, Game);

    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](songLength, level, ctx);
    this.score = 0;
    this.seconds = 29;
    this.scoreElement = document.getElementById("score");
    this.showScore();
    this.timerElement = document.getElementById("timer");
  } // keeps track of time


  _createClass(Game, [{
    key: "startTimer",
    value: function startTimer() {
      var _this = this;

      this.showTime();
      this.interval = setInterval(function () {
        _this.seconds--;

        if (_this.seconds === -1) {
          _this.timerElement.style.color = "red";

          _this.timerElement.classList.add("flashing");

          _this.board.clearErrors();

          _this.board.rows[_this.board.position].drawRow(420 - 99);

          _this.showTime("Time's Up!");

          clearInterval(_this.interval);
        } else {
          _this.showTime();
        }
      }, 1000);
    }
  }, {
    key: "showTime",
    value: function showTime(text) {
      var display = text ? text : this.seconds;
      this.timerElement.innerHTML = display;
    }
  }, {
    key: "showScore",
    value: function showScore() {
      this.scoreElement.innerHTML = "".concat(this.score, " / ").concat(this.board.length);
    }
  }, {
    key: "checkMove",
    value: function checkMove(playerMove) {
      var xOr = this.board.currentMove() ^ playerMove;

      if (xOr === 0) {
        this.board.nextMove();
        this.score++;
        this.showScore();

        if (this.score === this.board.length) {
          clearInterval(this.interval);
          this.showTime("Perfect Score!");
        }

        return true;
      } else {
        return false;
      }
    } // organizes errors flashing

  }, {
    key: "flashErrors",
    value: function flashErrors(xOr) {
      var _this2 = this;

      var count = 0;
      this.board.clearErrors();
      this.board.rows[this.board.position].drawRow(420 - 99);
      this.board.drawErrors(xOr);
      var flash = setInterval(function () {
        if (count === 5) {
          clearInterval(flash);
        } else if (count % 2 !== 0) {
          _this2.board.drawErrors(xOr);
        } else {
          _this2.board.clearErrors();

          _this2.board.rows[_this2.board.position].drawRow(420 - 99, true);
        }

        count++;
      }, 500);
    }
  }, {
    key: "quit",
    value: function quit() {
      clearInterval(this.interval);
      this.timerElement.style.color = "white";
      this.timerElement.innerHTML = 30;
      this.timerElement.classList.remove("flashing");
      this.scoreElement.innerHTML = 0;
      this.seconds = -1;
      this.board.rows.forEach(function (row) {
        return clearInterval(row.bouncing);
      });
    } // game ends when there are no more moves or the timer runs out.

  }, {
    key: "gameOver",
    value: function gameOver() {
      return this.board.position === this.board.length || this.seconds === -1 || this.score === this.board.length;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/scripts/move.js":
/*!*****************************!*\
  !*** ./src/scripts/move.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Creates each row of the board
var Move = /*#__PURE__*/function () {
  function Move(level, ctx) {
    _classCallCheck(this, Move);

    this.row = Move.createRow(level);
    this.ctx = ctx;
    this.blue = document.getElementById("blue");
    this.pos = 0;
    this.bouncing;
    this.i = 0; // this.bounced = false;
  }

  _createClass(Move, [{
    key: "drawRow",
    value: function drawRow(y, stop) {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#51514D";
      this.ctx.strokeStyle = "black";
      this.ctx.lineWidth = 2;
      this.ctx.fillRect(75, y, 350, 88);
      this.ctx.strokeRect(75, y, 70, 88);
      this.ctx.strokeRect(145, y, 70, 88);
      this.ctx.strokeRect(215, y, 70, 88);
      this.ctx.strokeRect(285, y, 70, 88);
      this.ctx.strokeRect(355, y, 70, 88);
      this.ctx.closePath();
      this.ctx.save();
      this.ctx.lineWidth = 4;
      this.ctx.moveTo(76, y - 3);
      this.ctx.lineTo(429, y - 3);
      this.ctx.lineTo(429, y + 88);
      this.ctx.strokeStyle = '#353430';
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = "black";
      this.ctx.moveTo(425, y);
      this.ctx.lineTo(431, y - 6);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.fillStyle = "black";
      this.ctx.moveTo(75, y);
      this.ctx.lineTo(81, y - 6);
      this.ctx.lineTo(75, y - 6);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.moveTo(425, y + 88);
      this.ctx.lineTo(431, y + 82);
      this.ctx.lineTo(431, y + 88);
      this.ctx.fill();
      this.ctx.restore();

      if (stop) {
        clearInterval(this.bouncing);
        this.drawMusicNotes(y);
      }
    }
  }, {
    key: "drawMusicNotes",
    value: function drawMusicNotes(y) {
      var _this = this;

      var colors = ['#33FCFF', '#AF33FF', '#E5FE15', '#FF8D33', '#AFFF33'];
      this.row.forEach(function (slot, i) {
        if (slot === 1) {
          var startX = i * 70 + 109.5;
          var startY = y + 55;

          _this.ctx.beginPath();

          _this.ctx.arc(startX, startY, 11, 0, Math.PI * 2);

          _this.ctx.fillStyle = colors[i];

          _this.ctx.fill();

          _this.ctx.beginPath();

          _this.ctx.strokeStyle = "white";

          _this.ctx.arc(startX, startY, 8, 3 * Math.PI / 2, 0);

          _this.ctx.stroke();

          _this.ctx.beginPath();

          _this.ctx.strokeStyle = colors[i];

          _this.ctx.moveTo(startX + 10, startY);

          _this.ctx.lineTo(startX + 10, startY - 30);

          _this.ctx.stroke();

          _this.ctx.closePath();
        }
      });
    }
  }, {
    key: "bounceNotes",
    value: function bounceNotes(y) {
      var _this2 = this;

      var diff = [2, 4, 6, 8, 10, 8, 6, 4, 2, 0];
      this.bouncing = setInterval(function () {
        _this2.drawRow(y);

        _this2.drawMusicNotes(y - diff[_this2.i % 10]);

        _this2.i++;
      }, 100);
      this.bounced = true;
    }
  }], [{
    key: "createRow",
    value: function createRow(level) {
      var row = Array(5).fill(0);
      var indices = [0, 1, 2, 3, 4]; // shuffle using Fisher-Yates

      for (var i = 0; i < indices.length; i++) {
        var j = Math.floor(Math.random() * (indices.length - i) + i);
        var _ref = [indices[j], indices[i]];
        indices[i] = _ref[0];
        indices[j] = _ref[1];
      }

      var randomNum = Math.floor(Math.random() * level + 1);
      indices.slice(0, randomNum).forEach(function (idx) {
        return row[idx] = 1;
      });
      return row;
    }
  }]);

  return Move;
}();

/* harmony default export */ __webpack_exports__["default"] = (Move);

/***/ }),

/***/ "./src/scripts/songs.js":
/*!******************************!*\
  !*** ./src/scripts/songs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var odeToJoy = ['e5', 'e5', 'f5', 'g5', 'g5', 'f5', 'e5', 'd5', 'c5', 'c5', 'd5', 'e5', 'e5', 'd5', 'd5', 'e5', 'e5', 'f5', 'g5', 'g5', 'f5', 'e5', 'd5', 'c5', 'c5', 'd5', 'e5', 'd5', 'c5', 'c5', 'd5', 'd5', 'e5', 'c5', 'd5', 'e5', 'f5', 'e5', 'c5', 'd5', 'e5', 'f5', 'e5', 'd5', 'c5', 'd5', 'g4', 'e5', 'e5', 'f5', 'g5', 'g5', 'f5', 'e5', 'd5', 'c5', 'c5', 'd5', 'e5', 'd5', 'c5', 'c5'];
var minuetInG = ['d5', 'g4', 'a4', 'b4', 'c5', 'd5', 'g4', 'g4', 'e5', 'c5', 'd5', 'e5', 'fs5', 'g5', 'g4', 'g4', 'c5', 'd5', 'c5', 'b4', 'a4', 'b4', 'c5', 'b4', 'a4', 'g4', 'fs4', 'g4', 'a4', 'b4', 'g4', 'b4', 'a4', 'd5', 'g4', 'a4', 'b4', 'c5', 'd5', 'g4', 'g4', 'e5', 'c5', 'd5', 'e5', 'fs5', 'g5', 'g4', 'g4', 'c5', 'd5', 'c5', 'b4', 'a4', 'b4', 'c5', 'b4', 'a4', 'g4', 'a4', 'b4', 'a4', 'g4', 'fs4', 'g4'];
var furElise = ['e5', 'ds5', 'e5', 'ds5', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'gs4', 'b4', 'c5', 'e4', 'e5', 'ds5', 'e5', 'ds5', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'c5', 'b4', 'a4', 'b4', 'c5', 'd5', 'e5', 'g4', 'f5', 'e5', 'd5', 'f4', 'e5', 'd5', 'c5', 'e4', 'd5', 'c5', 'b4', 'e5', 'ds5', 'e5', 'ds5', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'gs4', 'b4', 'c5', 'e4', 'e5', 'ds5', 'e5', 'ds5', 'e5', 'b4', 'd5', 'c5', 'a4', 'c4', 'e4', 'a4', 'b4', 'e4', 'c5', 'b4', 'a4'];
/* harmony default export */ __webpack_exports__["default"] = ({
  odeToJoy: odeToJoy,
  minuetInG: minuetInG,
  furElise: furElise
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zb25ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZTRhYSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInRoZW1lIiwiY292ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicGxheSIsImRyYXdCb3giLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVJlY3QiLCJoZWlnaHQiLCJ3aWR0aCIsImRyYXciLCJjbGVhclJlY3QiLCJyb3dZIiwieSIsImdhbWUiLCJib2FyZCIsInJvd3MiLCJmb3JFYWNoIiwicm93Iiwic3RhcnRlZCIsImJvdW5jZU5vdGVzIiwiZHJhd1JvdyIsImdhbWVPdmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF1c2VkIiwibWFrZU1vdmUiLCJrZXlzRG93biIsInBhcnNlSW50Iiwiam9pbiIsImNoZWNrTW92ZSIsInN0YXJ0VGltZXIiLCJwbGF5VG9uZSIsImZsYXNoRXJyb3JzIiwiY3VycmVudE1vdmUiLCJwbGF5RXJyb3IiLCJzZXRUaW1lb3V0IiwiZGVib3VuY2VkTWFrZU1vdmUiLCJkZWJvdW5jZSIsImtleUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImtleXMiLCJlIiwiaWR4Iiwia2V5IiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmaWxsIiwicmVtb3ZlIiwibWVudSIsInN0YXJ0QnV0dG9uIiwicXVpdCIsInNvbmciLCJsZXZlbCIsImF1ZGlvQ3R4IiwiQXVkaW9Db250ZXh0IiwiZXJyb3JTb3VyY2UiLCJub3RlU291cmNlIiwiaSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwibG9hZE5leHROb3RlIiwiU29uZ3MiLCJHYW1lIiwibGVuZ3RoIiwicGF1c2UiLCJzdHIiLCJlcnJvciIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiYXJyYXlCdWZmZXIiLCJkZWNvZGVBdWRpb0RhdGEiLCJidWZmZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJzdGFydCIsImN1cnJlbnRUaW1lIiwid2luZG93IiwiQm9hcmQiLCJzb25nTGVuZ3RoIiwiaW5pdGlhbGl6ZUJvYXJkIiwicG9zaXRpb24iLCJhbmdyeSIsInhPciIsImJveCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwiZHJhd011c2ljTm90ZXMiLCJwdXNoIiwiTW92ZSIsInNjb3JlIiwic2Vjb25kcyIsInNjb3JlRWxlbWVudCIsInNob3dTY29yZSIsInRpbWVyRWxlbWVudCIsInNob3dUaW1lIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0eWxlIiwiY29sb3IiLCJjbGVhckVycm9ycyIsImNsZWFySW50ZXJ2YWwiLCJ0ZXh0IiwiZGlzcGxheSIsImlubmVySFRNTCIsInBsYXllck1vdmUiLCJuZXh0TW92ZSIsImNvdW50IiwiZHJhd0Vycm9ycyIsImZsYXNoIiwiYm91bmNpbmciLCJjcmVhdGVSb3ciLCJibHVlIiwicG9zIiwic3RvcCIsImJlZ2luUGF0aCIsImNsb3NlUGF0aCIsInNhdmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJyZXN0b3JlIiwiY29sb3JzIiwic2xvdCIsInN0YXJ0WCIsInN0YXJ0WSIsImFyYyIsIk1hdGgiLCJQSSIsImRpZmYiLCJib3VuY2VkIiwiaW5kaWNlcyIsImoiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbU51bSIsInNsaWNlIiwib2RlVG9Kb3kiLCJtaW51ZXRJbkciLCJmdXJFbGlzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FB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YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG5cblxudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7IiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cblxuXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xuXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG5cbiAgcmV0dXJuIHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkgPyBnZXRSYXdUYWcodmFsdWUpIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7IiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDsiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG5cblxudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cblxudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cblxudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7IiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cblxudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7IiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xuXG5cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG5cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xubW9kdWxlLmV4cG9ydHMgPSByb290OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xuXG5cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG5cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG5cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG5cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7IC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpOyAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cblxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lOyAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuXG4gICAgcmV0dXJuIGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8IHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQgfHwgdGltZVNpbmNlTGFzdENhbGwgPCAwIHx8IG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQ7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcblxuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfSAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cblxuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDsgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cblxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlOyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG5cblxudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHwgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG5cblxudmFyIG5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xuXG5cbnZhciBOQU4gPSAwIC8gMDtcbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG5cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cblxudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IG90aGVyICsgJycgOiBvdGhlcjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOCkgOiByZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyOyIsInZhciBnOyAvLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuXG5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn0oKTtcblxudHJ5IHtcbiAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gIGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG4gIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufSAvLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZzsiLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgU29uZ3MgZnJvbSAnLi9zY3JpcHRzL3NvbmdzJztcblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1ib2FyZCcpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IHRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJyk7XG5cblxuY29uc3QgY292ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2RhbC1iYWNrZ3JvdW5kJyk7XG5jb3Zlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb3Zlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB0aGVtZS5wbGF5KCk7XG59KVxuXG5cbmZ1bmN0aW9uIGRyYXdCb3goKXtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICBjdHgubGluZVdpZHRoID0gMjtcbiAgY3R4LnN0cm9rZVJlY3QoMSwgY2FudmFzLmhlaWdodCAtIDEwOSwgY2FudmFzLndpZHRoLTIsIDEwMylcbn1cblxuZnVuY3Rpb24gZHJhdygpe1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGxldCByb3dZID0geTtcbiAgLy8gVE9ETyBjaGFuZ2UgdGhpcyB0byBmb3IgbG9vcCB0byBleGl0IGVhcmx5P1xuICBnYW1lLmJvYXJkLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgIC8vIG9ubHkgZHJhdyB0aGUgcm93cyBvbiB0aGUgZ3JpZCwgY2FuIG9wdGltaXplIHdpdGggYSBmb3IgbG9vcCBhbmQgYnJlYWs/XG4gICAgaWYgKHJvd1kgPiAtMTAzICYmIHJvd1kgPCBjYW52YXMuaGVpZ2h0KXtcbiAgICAgICFzdGFydGVkID8gcm93LmJvdW5jZU5vdGVzKHJvd1kpIDogcm93LmRyYXdSb3cocm93WSwgdHJ1ZSk7XG4gICAgfVxuICAgIHJvd1kgLT0gMTAzO1xuICB9KVxuICAvLyAxMDMgLyA4IHRvIG1ha2Ugc3VyZSB3ZSBoaXQgdGhlIDEwM1xuICB5ICs9IDEyLjg3NSBcbiAgaWYgKCFnYW1lLmdhbWVPdmVyKCkpIGRyYXdCb3goKTtcblxuICBpZiAoKHkgLSAzMjEgLSAxMi44NzUpICUgMTAzICE9PSAwKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICB9IFxuIFxufVxuXG5cbmxldCBwYXVzZWQgPSBmYWxzZTtcblxuY29uc3QgbWFrZU1vdmUgPSBrZXlzRG93biA9PiB7XG4gIGtleXNEb3duID0gcGFyc2VJbnQoa2V5c0Rvd24uam9pbihcIlwiKSwgMik7XG4gIGlmIChnYW1lLmNoZWNrTW92ZShrZXlzRG93bikpe1xuICAgIGlmICghc3RhcnRlZCl7XG4gICAgZ2FtZS5zdGFydFRpbWVyKCk7XG4gICAgc3RhcnRlZCA9IHRydWU7XG4gIH1cbiAgICBwbGF5VG9uZSgpO1xuICAgIGRyYXcoKTsgIFxufVxuICBlbHNlIHtcbiAgICBpZiAoIXN0YXJ0ZWQpIHJldHVybjtcbiAgICBnYW1lLmZsYXNoRXJyb3JzKGdhbWUuYm9hcmQuY3VycmVudE1vdmUoKSBeIGtleXNEb3duKTtcbiAgICBwbGF5RXJyb3IoKTtcbiAgICBwYXVzZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIHBhdXNlZCA9IGZhbHNlXG4gICAgICBpZiAoIWdhbWUuZ2FtZU92ZXIoKSkgZHJhd0JveCgpO1xuICAgICB9LCAyNTAwKVxuICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZE1ha2VNb3ZlID0gZGVib3VuY2UobWFrZU1vdmUsIDQwKTtcblxuY29uc3Qga2V5RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWtleScpO1xuY29uc3Qga2V5cyA9IHsnYSc6IDAsICdzJzogMSwgJ2QnOiAyLCAnZic6IDMsICdnJzogNH1cbmxldCBrZXlzRG93biA9IFswLCAwLCAwLCAwLCAwXTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKHBhdXNlZCB8fCBnYW1lLmdhbWVPdmVyKCkpIHJldHVybjtcbiAgY29uc3QgaWR4ID0ga2V5c1tlLmtleV1cbiAgaWYgKGlkeCA9PT0gdW5kZWZpbmVkIHx8IGtleXNEb3duW2lkeF0gPT09IDEpIHJldHVybjtcbiAga2V5c0Rvd25baWR4XSA9IDE7XG4gIGtleUVsZW1lbnRzW2lkeF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBkZWJvdW5jZWRNYWtlTW92ZShrZXlzRG93bik7XG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7IFxuICBrZXlzRG93biA9IEFycmF5KDUpLmZpbGwoMCk7XG4gIGtleUVsZW1lbnRzW2tleXNbZS5rZXldXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59KVxuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJhY2tncm91bmRcIik7XG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idXR0b25cIik7XG5jb25zdCBxdWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl0XCIpO1xubGV0IHNvbmcsIGxldmVsO1xuY29uc3QgYXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5sZXQgZXJyb3JTb3VyY2UsIG5vdGVTb3VyY2U7XG5sZXQgaSA9IDA7XG5sZXQgc3RhcnRlZDtcbmxldCB5O1xubGV0IGdhbWU7XG5cblxuXG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBzb25nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNvbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBsZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsZXZlbFwiXTpjaGVja2VkJykudmFsdWU7XG4gIGkgPSAwO1xuICBsb2FkTmV4dE5vdGUoU29uZ3Nbc29uZ11baV0pO1xuICBsb2FkTmV4dE5vdGUoJ3dyb25nJywgdHJ1ZSk7ICBcbiAgZ2FtZSA9IG5ldyBHYW1lKFNvbmdzW3NvbmddLmxlbmd0aCwgbGV2ZWwsIGN0eCk7XG4gIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgeSA9IGNhbnZhcy5oZWlnaHQgLSA5OTtcbiAgZHJhdygpO1xuICB0aGVtZS5wYXVzZSgpO1xufSlcblxuXG5mdW5jdGlvbiBsb2FkTmV4dE5vdGUoc3RyLCBlcnJvcil7XG4gIGxldCBzb3VyY2UgPSBhdWRpb0N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgZmV0Y2goYC4vc3JjL2Fzc2V0cy9ub3Rlcy8ke3N0cn0ubXAzYClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgIC50aGVuKGFycmF5QnVmZmVyID0+IGF1ZGlvQ3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZmZlcikpXG4gICAgLnRoZW4oYnVmZmVyID0+IHtcbiAgICAgIHNvdXJjZS5idWZmZXIgPSBidWZmZXI7XG4gICAgICBzb3VyY2UuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG4gICAgICBlcnJvciA/IGVycm9yU291cmNlID0gc291cmNlIDogbm90ZVNvdXJjZSA9IHNvdXJjZTtcbiAgICB9IClcbn1cblxuZnVuY3Rpb24gcGxheVRvbmUoKXtcbiAgbm90ZVNvdXJjZS5zdGFydCgpO1xuICBpKys7XG4gIGlmIChpICE9PSBnYW1lLmJvYXJkLmxlbmd0aCl7XG4gIGxvYWROZXh0Tm90ZShTb25nc1tzb25nXVtpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheUVycm9yKCl7XG4gIGVycm9yU291cmNlLnN0YXJ0KCk7XG4gIGxvYWROZXh0Tm90ZSgnd3JvbmcnLCB0cnVlKTtcbn1cblxucXVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZ2FtZS5xdWl0KCk7XG4gIHRoZW1lLmN1cnJlbnRUaW1lID0gMDsgIFxuICB0aGVtZS5wbGF5KCk7XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdGhlbWUucGF1c2UoKTtcbn0pXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IE1vdmUgZnJvbSAnLi9tb3ZlJztcblxuXG4vLyBob2xkcyBhbGwgb2YgdGhlIHJvd3MgXG5jbGFzcyBCb2FyZCB7XG5cbiAgY29uc3RydWN0b3Ioc29uZ0xlbmd0aCwgbGV2ZWwsIGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucm93cyA9IEJvYXJkLmluaXRpYWxpemVCb2FyZChzb25nTGVuZ3RoLCBsZXZlbCwgY3R4KTtcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMucm93cy5sZW5ndGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5hbmdyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5ncnlcIik7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbGl6ZUJvYXJkKHNvbmdMZW5ndGgsIGxldmVsLCBjdHgpIHtcbiAgICBjb25zdCByb3dzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nTGVuZ3RoOyBpKyspe1xuICAgICAgcm93cy5wdXNoKG5ldyBNb3ZlKGxldmVsLCBjdHgpKVxuICAgIH1cbiAgICByZXR1cm4gcm93cztcbiAgfVxuXG4gIGN1cnJlbnRNb3ZlKCl7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRoaXMucm93c1t0aGlzLnBvc2l0aW9uXS5yb3cuam9pbihcIlwiKSwgMik7XG4gIH1cblxuICBkcmF3RXJyb3JzKHhPcil7XG4gIFxuICBcbiAgZm9yIChsZXQgYm94ID0gMDsgYm94IDwgNTsgYm94Kyspe1xuICAgIFxuICAgIGlmICgoeE9yICYgKDIgKiogYm94KSkgPT09ICgyICoqIGJveCkpIHtcbiAgICAgIFxuICAgICAgaWYgKCh0aGlzLmN1cnJlbnRNb3ZlKCkgJiAoMiAqKiAgYm94KSkgPT09IDApe1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgzNTcgLSAoNzAgKiBib3gpLCA0MjAgLSA5OCwgNjcsIDg2KTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMzU3IC0gKDcwICogYm94KSwgNDIwIC0gOTgsIDY3LCA4Nik7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmFuZ3J5LCAwLCAwLCA1MCwgNTAsIDQwMiAtICg3MCAqIGJveCksIDMxNSwgNTAsIDUwKVxuICAgICAgICB0aGlzLnJvd3NbdGhpcy5wb3NpdGlvbl0uZHJhd011c2ljTm90ZXMoMzIwKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuICB9XG5cbiAgLy8gc3RvcEJvdW5jZXMoKXtcbiAgLy8gICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4gcm93LnN0b3BCb3VuY2luZygpKVxuICAvLyB9XG4gIFxuICBjbGVhckVycm9ycygpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAzMTAsIDUwMCwgMTA5KTtcbiAgfVxuXG4gIG5leHRNb3ZlKCl7XG4gICAgdGhpcy5wb3NpdGlvbisrO1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cbmNsYXNzIEdhbWUge1xuICBcbiAgY29uc3RydWN0b3Ioc29uZ0xlbmd0aCwgbGV2ZWwsIGN0eCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoc29uZ0xlbmd0aCwgbGV2ZWwsIGN0eClcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNlY29uZHMgPSAyOTtcbiAgICB0aGlzLnNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgdGhpcy5zaG93U2NvcmUoKTtcbiAgICB0aGlzLnRpbWVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXJcIik7XG4gIH1cblxuXG4gIC8vIGtlZXBzIHRyYWNrIG9mIHRpbWVcbiAgc3RhcnRUaW1lcigpe1xuICAgIHRoaXMuc2hvd1RpbWUoKTtcbiAgXG4gICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnNlY29uZHMtLTtcbiAgICAgIGlmICh0aGlzLnNlY29uZHMgPT09IC0xKSB7XG4gICAgICAgIHRoaXMudGltZXJFbGVtZW50LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgdGhpcy50aW1lckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZsYXNoaW5nXCIpO1xuICAgICAgICB0aGlzLmJvYXJkLmNsZWFyRXJyb3JzKCk7XG4gICAgICAgIHRoaXMuYm9hcmQucm93c1t0aGlzLmJvYXJkLnBvc2l0aW9uXS5kcmF3Um93KDQyMC05OSk7XG4gICAgICAgIHRoaXMuc2hvd1RpbWUoXCJUaW1lJ3MgVXAhXCIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBzaG93VGltZSh0ZXh0KXtcbiAgICBsZXQgZGlzcGxheSA9IHRleHQgPyB0ZXh0IDogdGhpcy5zZWNvbmRzO1xuICAgIHRoaXMudGltZXJFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXk7XG4gIH1cblxuICBzaG93U2NvcmUoKXtcbiAgICB0aGlzLnNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSBgJHt0aGlzLnNjb3JlfSAvICR7dGhpcy5ib2FyZC5sZW5ndGh9YFxuICB9XG4gIFxuXG4gIGNoZWNrTW92ZShwbGF5ZXJNb3ZlKXtcbiAgICBjb25zdCB4T3IgPSB0aGlzLmJvYXJkLmN1cnJlbnRNb3ZlKCkgXiBwbGF5ZXJNb3ZlO1xuICAgIGlmICh4T3IgPT09IDApe1xuICAgICAgdGhpcy5ib2FyZC5uZXh0TW92ZSgpO1xuICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgdGhpcy5zaG93U2NvcmUoKTtcbiAgICAgIGlmICh0aGlzLnNjb3JlID09PSB0aGlzLmJvYXJkLmxlbmd0aCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgICAgIHRoaXMuc2hvd1RpbWUoXCJQZXJmZWN0IFNjb3JlIVwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBvcmdhbml6ZXMgZXJyb3JzIGZsYXNoaW5nXG4gIGZsYXNoRXJyb3JzKHhPcil7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICB0aGlzLmJvYXJkLmNsZWFyRXJyb3JzKCk7XG4gICAgdGhpcy5ib2FyZC5yb3dzW3RoaXMuYm9hcmQucG9zaXRpb25dLmRyYXdSb3coNDIwIC0gOTkpO1xuICAgIHRoaXMuYm9hcmQuZHJhd0Vycm9ycyh4T3IpXG4gICAgY29uc3QgZmxhc2ggPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnQgPT09IDUpe1xuICAgICAgICBjbGVhckludGVydmFsKGZsYXNoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNvdW50ICUgMiAhPT0gMCl7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0Vycm9ycyh4T3IpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZC5jbGVhckVycm9ycygpO1xuICAgICAgICB0aGlzLmJvYXJkLnJvd3NbdGhpcy5ib2FyZC5wb3NpdGlvbl0uZHJhd1Jvdyg0MjAgLSA5OSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBjb3VudCsrXG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHF1aXQoKXtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIHRoaXMudGltZXJFbGVtZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMudGltZXJFbGVtZW50LmlubmVySFRNTCA9IDMwO1xuICAgIHRoaXMudGltZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmbGFzaGluZ1wiKTtcbiAgICB0aGlzLnNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSAwO1xuICAgIHRoaXMuc2Vjb25kcyA9IC0xO1xuICAgIHRoaXMuYm9hcmQucm93cy5mb3JFYWNoIChyb3cgPT4gY2xlYXJJbnRlcnZhbChyb3cuYm91bmNpbmcpKVxuICAgIFxuICB9XG5cbiAgLy8gZ2FtZSBlbmRzIHdoZW4gdGhlcmUgYXJlIG5vIG1vcmUgbW92ZXMgb3IgdGhlIHRpbWVyIHJ1bnMgb3V0LlxuICBnYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5wb3NpdGlvbiA9PT0gdGhpcy5ib2FyZC5sZW5ndGggfHwgdGhpcy5zZWNvbmRzID09PSAtMSB8fCB0aGlzLnNjb3JlID09PSB0aGlzLmJvYXJkLmxlbmd0aFxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiLy8gQ3JlYXRlcyBlYWNoIHJvdyBvZiB0aGUgYm9hcmRcbmNsYXNzIE1vdmUge1xuXG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgpe1xuICAgIHRoaXMucm93ID0gTW92ZS5jcmVhdGVSb3cobGV2ZWwpO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYmx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmx1ZVwiKVxuICAgIHRoaXMucG9zID0gMDtcbiAgICB0aGlzLmJvdW5jaW5nO1xuICAgIHRoaXMuaSA9IDA7XG4gICAgLy8gdGhpcy5ib3VuY2VkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlUm93KGxldmVsKXtcbiAgICBjb25zdCByb3cgPSBBcnJheSg1KS5maWxsKDApXG4gICAgY29uc3QgaW5kaWNlcyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICBcbiAgICAvLyBzaHVmZmxlIHVzaW5nIEZpc2hlci1ZYXRlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpbmRpY2VzLmxlbmd0aCAtIGkpICsgaSk7XG4gICAgICBbaW5kaWNlc1tpXSwgaW5kaWNlc1tqXV0gPSBbaW5kaWNlc1tqXSwgaW5kaWNlc1tpXV1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXZlbCArIDEpO1xuXG4gICAgaW5kaWNlcy5zbGljZSgwLCByYW5kb21OdW0pLmZvckVhY2goaWR4ID0+IHJvd1tpZHhdID0gMSlcbiAgICByZXR1cm4gcm93O1xuICB9XG5cbiAgZHJhd1Jvdyh5LCBzdG9wKXtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiM1MTUxNERcIjtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDc1LCB5LCAzNTAsIDg4KTtcbiAgICB0aGlzLmN0eC5zdHJva2VSZWN0KDc1LCB5LCA3MCwgODgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoMTQ1LCB5LCA3MCwgODgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoMjE1LCB5LCA3MCwgODgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoMjg1LCB5LCA3MCwgODgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoMzU1LCB5LCA3MCwgODgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIFxuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA0O1xuICAgIHRoaXMuY3R4Lm1vdmVUbyg3NiwgeS0zKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oNDI5LCB5LTMpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyg0MjksIHkgKyA4OClcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMzUzNDMwJztcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jdHgubW92ZVRvKDQyNSwgeSk7XG4gICAgdGhpcy5jdHgubGluZVRvKDQzMSwgeS02KTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICBcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jdHgubW92ZVRvKDc1LCB5KTtcbiAgICB0aGlzLmN0eC5saW5lVG8oODEsIHktNik7XG4gICAgdGhpcy5jdHgubGluZVRvKDc1LCB5LTYpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgXG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oNDI1LCB5Kzg4KTtcbiAgICB0aGlzLmN0eC5saW5lVG8oNDMxLCB5KzgyKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oNDMxLCB5Kzg4KTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIFxuICAgIGlmIChzdG9wKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYm91bmNpbmcpXG4gICAgICB0aGlzLmRyYXdNdXNpY05vdGVzKHkpO1xuICAgXG4gICAgfVxuICAgXG4gIH1cblxuICBcblxuICBkcmF3TXVzaWNOb3Rlcyh5KXtcbiAgICBjb25zdCBjb2xvcnMgPSBbJyMzM0ZDRkYnLCAnI0FGMzNGRicsICcjRTVGRTE1JywgJyNGRjhEMzMnLCAnI0FGRkYzMyddXG4gICAgdGhpcy5yb3cuZm9yRWFjaCgoc2xvdCwgaSkgPT4ge1xuICAgICAgaWYgKHNsb3QgPT09IDEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gaSAqIDcwICsgMTA5LjU7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IHkgKyA1NVxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHN0YXJ0WCwgc3RhcnRZLCAxMSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoc3RhcnRYLCBzdGFydFksIDgsIDMgKiBNYXRoLlBJIC8gMiwgMCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbaV07XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhzdGFydFggKyAxMCwgc3RhcnRZKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHN0YXJ0WCArIDEwLCBzdGFydFkgLSAzMCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICBib3VuY2VOb3Rlcyh5KXtcbiAgIGNvbnN0IGRpZmYgPSBbMiwgNCwgNiwgOCwgMTAsIDgsIDYsIDQsIDIsIDBdO1xuICAgIHRoaXMuYm91bmNpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdSb3coeSlcbiAgICAgIHRoaXMuZHJhd011c2ljTm90ZXMoeSAtIGRpZmZbdGhpcy5pICUgMTBdKTtcbiAgICAgIHRoaXMuaSsrO1xuICAgIH0sIDEwMCk7XG4gICAgdGhpcy5ib3VuY2VkID0gdHJ1ZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmU7IiwiY29uc3Qgb2RlVG9Kb3kgPSBbJ2U1JywgJ2U1JywnZjUnLCdnNScsJ2c1JywnZjUnLCdlNScsJ2Q1JywnYzUnLCdjNScsJ2Q1JywnZTUnLCdlNScsJ2Q1JywnZDUnLCdlNScsXG4gICdlNScsJ2Y1JywnZzUnLCdnNScsJ2Y1JywnZTUnLCdkNScsJ2M1JywnYzUnLCdkNScsJ2U1JywnZDUnLCdjNScsJ2M1JywnZDUnLCdkNScsJ2U1JywnYzUnLCdkNScsJ2U1JyxcbiAgJ2Y1JywnZTUnLCdjNScsJ2Q1JywnZTUnLCdmNScsJ2U1JywnZDUnLCdjNScsJ2Q1JywnZzQnLCdlNScsJ2U1JywnZjUnLCdnNScsJ2c1JywnZjUnLCdlNScsJ2Q1JywnYzUnLFxuICAnYzUnLCdkNScsJ2U1JywnZDUnLCdjNScsJ2M1J107XG5cbmNvbnN0IG1pbnVldEluRyA9IFsgJ2Q1JywnZzQnLCdhNCcsJ2I0JywnYzUnLCdkNScsJ2c0JywnZzQnLCdlNScsJ2M1JywnZDUnLCdlNScsJ2ZzNScsJ2c1JywnZzQnLCdnNCcsJ2M1JyxcbiAgJ2Q1JywnYzUnLCdiNCcsJ2E0JywnYjQnLCdjNScsJ2I0JywnYTQnLCdnNCcsJ2ZzNCcsJ2c0JywnYTQnLCdiNCcsJ2c0JywnYjQnLCdhNCcsJ2Q1JywnZzQnLCdhNCcsJ2I0JywnYzUnLFxuICAnZDUnLCdnNCcsJ2c0JywnZTUnLCdjNScsJ2Q1JywnZTUnLCdmczUnLCdnNScsJ2c0JywnZzQnLCdjNScsJ2Q1JywnYzUnLCdiNCcsJ2E0JywnYjQnLCdjNScsJ2I0JywnYTQnLCdnNCcsJ2E0JyxcbiAgJ2I0JywnYTQnLCdnNCcsJ2ZzNCcsJ2c0JyBdO1xuXG5jb25zdCBmdXJFbGlzZSA9IFsnZTUnLCAnZHM1JywgJ2U1JywgJ2RzNScsICdlNScsICdiNCcsICdkNScsICdjNScsICdhNCcsICdjNCcsICdlNCcsICdhNCcsICdiNCcsICdlNCcsICdnczQnLCAnYjQnLCAnYzUnLCAnZTQnLFxuICAnZTUnLCAnZHM1JywgJ2U1JywgJ2RzNScsICdlNScsICdiNCcsICdkNScsICdjNScsICdhNCcsICdjNCcsICdlNCcsICdhNCcsICdiNCcsICdlNCcsICdjNScsICdiNCcsICdhNCcsICdiNCcsICdjNScsICdkNScsICdlNScsXG4gICdnNCcsICdmNScsICdlNScsICdkNScsICdmNCcsICdlNScsICdkNScsICdjNScsICdlNCcsICdkNScsICdjNScsICdiNCcsICdlNScsICdkczUnLCAnZTUnLCAnZHM1JywgJ2U1JywgJ2I0JywgJ2Q1JywgJ2M1JywgJ2E0JywgXG4gICdjNCcsICdlNCcsICdhNCcsICdiNCcsICdlNCcsICdnczQnLCAnYjQnLCAnYzUnLCAnZTQnLCdlNScsICdkczUnLCAnZTUnLCAnZHM1JywgJ2U1JywgJ2I0JywgJ2Q1JywgJ2M1JywgJ2E0JywgJ2M0JywgJ2U0JywgJ2E0JywgXG4gICdiNCcsICdlNCcsICdjNScsICdiNCcsICdhNCddO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtvZGVUb0pveSwgbWludWV0SW5HLCBmdXJFbGlzZX0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9