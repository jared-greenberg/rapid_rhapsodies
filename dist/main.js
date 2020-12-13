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
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_songs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/songs */ "./src/scripts/songs.js");
/* harmony import */ var _scripts_soundeffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/soundeffect */ "./src/scripts/soundeffect.js");





var canvas = document.getElementById('game-board');
var ctx = canvas.getContext("2d");
var theme = document.getElementById('theme');
theme.volume = 0.2;
var splash = document.getElementById('splash-modal-background');
var soundControl = document.getElementById('sound-control');
var musicOn = true;
splash.addEventListener("click", function () {
  splash.classList.add("hidden");

  if (musicOn) {
    theme.play();
  }

  ;
});
window.addEventListener('blur', function (e) {
  e.preventDefault();
  theme.pause();
});
window.addEventListener('focus', function (e) {
  e.preventDefault();

  if (musicOn && !menuModal.classList.contains("hidden")) {
    theme.play();
  }

  ;
});
soundControl.addEventListener('click', function (e) {
  e.preventDefault();
  toggleMusic();
});

var toggleMusic = function toggleMusic() {
  soundControl.classList.toggle("fa-volume-mute");
  soundControl.classList.toggle("fa-volume-up");
  musicOn ? theme.pause() : theme.play();
  musicOn = !musicOn;
};

var menuModal = document.getElementById("menu-background");
var startGame = document.getElementById("play-button");
var exitGame = document.getElementById("quit");
var songTitle, level;
var audioCtx = new AudioContext();
var notePlayer, errorPlayer;
var game;
startGame.addEventListener('click', function (e) {
  e.preventDefault();
  menuModal.classList.add('hidden');
  songTitle = document.querySelector('input[name="song"]:checked').value;
  level = document.querySelector('input[name="level"]:checked').value;
  notePlayer = new _scripts_soundeffect__WEBPACK_IMPORTED_MODULE_4__["NotePlayer"](audioCtx, songTitle);
  errorPlayer = new _scripts_soundeffect__WEBPACK_IMPORTED_MODULE_4__["SoundEffect"](audioCtx, 'wrong');
  game = new _scripts_game__WEBPACK_IMPORTED_MODULE_2__["default"](_scripts_songs__WEBPACK_IMPORTED_MODULE_3__["default"][songTitle].length, level, ctx);
  theme.pause();
  initializeKeyListeners();
});
exitGame.addEventListener('click', function (e) {
  e.preventDefault();
  menuModal.classList.remove('hidden');
  game.quit();
  theme.currentTime = 0;

  if (musicOn) {
    theme.play();
  }

  ;
});
var keyElements = document.querySelectorAll('.player-key');
var keys = {
  'a': 0,
  's': 1,
  'd': 2,
  'f': 3,
  'g': 4
};
var keysDown = [0, 0, 0, 0, 0];

var initializeKeyListeners = function initializeKeyListeners() {
  document.addEventListener('keydown', function (e) {
    // don't do anything on error delay or game over
    if (paused || game.gameOver()) return;
    var idx = keys[e.key];
    if (idx === undefined || keysDown[idx] === 1) return;
    keysDown[idx] = 1;
    keyElements[idx].classList.add("selected");
    debouncedMakeMove(keysDown);
  });
  document.addEventListener('keyup', function (e) {
    keysDown = Array(5).fill(0);

    if (keys[e.key] !== undefined) {
      keyElements[keys[e.key]].classList.remove("selected");
    }
  });
};

var paused = false;

var makeMove = function makeMove(keysDown) {
  keysDown = parseInt(keysDown.join(""), 2);
  var goodMove = game.checkMove(keysDown);

  if (goodMove === true) {
    notePlayer.playSound();
  } else if (goodMove === false) {
    errorPlayer.playSound();
    paused = true;
    setTimeout(function () {
      paused = false;
      if (!game.gameOver()) game.drawBox();
    }, 2500);
  }
};

var debouncedMakeMove = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(makeMove, 40);

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./src/scripts/row.js");
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
    this.position = 0; // graphic for missed notes

    this.angry = document.getElementById("angry");
  }

  _createClass(Board, [{
    key: "nextMove",
    value: function nextMove() {
      this.position++;
    }
  }, {
    key: "currentMoveValue",
    value: function currentMoveValue() {
      return parseInt(this.rows[this.position].arr.join(""), 2);
    }
  }, {
    key: "drawErrors",
    value: function drawErrors(xOr) {
      for (var box = 0; box < 5; box++) {
        if ((xOr & Math.pow(2, box)) === Math.pow(2, box)) {
          if ((this.currentMoveValue() & Math.pow(2, box)) === 0) {
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(357 - 70 * box, 420 - 98, 67, 86);
          } else {
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(357 - 70 * box, 420 - 98, 67, 86);
            this.ctx.drawImage(this.angry, 0, 0, 50, 50, 402 - 70 * box, 315, 50, 50);
            this.rows[this.position].drawMusicNotes(321);
          }
        }
      }
    }
  }, {
    key: "flashErrors",
    value: function flashErrors(xOr) {
      var _this = this;

      var count = 0;
      this.clearCurrentRow();
      this.rows[this.position].drawRow(420 - 99, true);
      this.drawErrors(xOr);
      var flash = setInterval(function () {
        if (count === 5) {
          clearInterval(flash);
        } else if (count % 2 !== 0) {
          _this.drawErrors(xOr);
        } else {
          _this.clearCurrentRow();

          _this.rows[_this.position].drawRow(420 - 99, true);
        }

        count++;
      }, 500);
    }
  }, {
    key: "clearCurrentRow",
    value: function clearCurrentRow() {
      this.ctx.clearRect(0, 310, 500, 109);
    }
  }], [{
    key: "initializeBoard",
    value: function initializeBoard(songLength, level, ctx) {
      var rows = [];

      for (var i = 0; i < songLength; i++) {
        rows.push(new _row__WEBPACK_IMPORTED_MODULE_0__["default"](level, ctx));
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


var canvasHeight = 420;
var canvasWidth = 500;

var Game = /*#__PURE__*/function () {
  function Game(songLength, level, ctx) {
    _classCallCheck(this, Game);

    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](songLength, level, ctx);
    this.score = 0;
    this.seconds = 29;
    this.scoreElement = document.getElementById("score");
    this.timerElement = document.getElementById("timer");
    this.y = canvasHeight - 99;
    this.showScore();
    this.ctx = ctx;
    this.draw();
  } // keeps track of time


  _createClass(Game, [{
    key: "startTimer",
    value: function startTimer() {
      var _this = this;

      this.showTime();
      this.interval = setInterval(function () {
        _this.seconds--;

        if (_this.seconds === -1) {
          _this.showTimesUp();

          clearInterval(_this.interval);
        } else {
          _this.showTime();
        }
      }, 1000);
    }
  }, {
    key: "showTimesUp",
    value: function showTimesUp() {
      this.timerElement.style.color = "red";
      this.timerElement.classList.add("flashing");
      this.showTime("Time's Up!"); // to remove the green box

      this.board.clearCurrentRow();
      this.board.rows[this.board.position].drawRow(420 - 99, true);
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
      var xOr = this.board.currentMoveValue() ^ playerMove;

      if (xOr === 0) {
        if (!this.interval) {
          this.startTimer();
        }

        ;
        this.board.nextMove();
        this.draw();
        this.score++;
        this.showScore();

        if (this.score === this.board.length) {
          clearInterval(this.interval);
          this.showTime("Perfect Score!");
        }

        return true;
      } else {
        if (!this.interval) return;
        this.board.flashErrors(xOr);
        return false;
      }
    }
  }, {
    key: "drawBox",
    value: function drawBox() {
      this.ctx.strokeStyle = "green";
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(1, canvasHeight - 109, canvasWidth - 2, 103);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      var rowTop = this.y; // TODO change this to for loop to exit early?

      this.board.rows.forEach(function (row) {
        // only draw the rows on the grid, can optimize with a for loop and break?
        if (rowTop > -103 && rowTop < canvasHeight) {
          !_this2.interval ? row.bounceNotes(rowTop) : row.drawRow(rowTop, true);
        }

        rowTop -= 103;
      }); // 103 / 8 to make sure we hit the 103

      this.y += 12.875;
      if (!this.gameOver()) this.drawBox();

      if ((this.y - 321 - 12.875) % 103 !== 0) {
        requestAnimationFrame(this.draw.bind(this));
      }
    }
  }, {
    key: "quit",
    value: function quit() {
      // stop timer
      clearInterval(this.interval);
      this.timerElement.style.color = "white";
      this.timerElement.innerHTML = 30;
      this.timerElement.classList.remove("flashing");
      this.seconds = -1; // stop bouncing if user quits before starting

      this.board.rows.forEach(function (row) {
        return clearInterval(row.bouncing);
      });
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      return this.seconds === -1 || this.score === this.board.length;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/scripts/row.js":
/*!****************************!*\
  !*** ./src/scripts/row.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Row = /*#__PURE__*/function () {
  function Row(level, ctx) {
    _classCallCheck(this, Row);

    this.arr = Row.createRow(level);
    this.ctx = ctx;
    this.bouncing;
  }

  _createClass(Row, [{
    key: "drawRow",
    value: function drawRow(y, noBounce) {
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

      if (noBounce) {
        debugger;
        clearInterval(this.bouncing);
        this.drawMusicNotes(y);
      }
    }
  }, {
    key: "drawMusicNotes",
    value: function drawMusicNotes(y) {
      var _this = this;

      var colors = ['#33FCFF', '#AF33FF', '#E5FE15', '#FF8D33', '#AFFF33'];
      this.arr.forEach(function (slot, i) {
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
      var i = 0;
      this.bouncing = setInterval(function () {
        _this2.drawRow(y);

        _this2.drawMusicNotes(y - diff[i % 10]);

        i++;
      }, 100);
    }
  }], [{
    key: "createRow",
    value: function createRow(level) {
      var arr = Array(5).fill(0);
      var indices = [0, 1, 2, 3, 4]; // shuffle using Fisher-Yates

      for (var i = 0; i < indices.length; i++) {
        var j = Math.floor(Math.random() * (indices.length - i) + i);
        var _ref = [indices[j], indices[i]];
        indices[i] = _ref[0];
        indices[j] = _ref[1];
      }

      var randomNum = Math.floor(Math.random() * level + 1);
      indices.slice(0, randomNum).forEach(function (idx) {
        return arr[idx] = 1;
      });
      return arr;
    }
  }]);

  return Row;
}();

/* harmony default export */ __webpack_exports__["default"] = (Row);

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

/***/ "./src/scripts/soundeffect.js":
/*!************************************!*\
  !*** ./src/scripts/soundeffect.js ***!
  \************************************/
/*! exports provided: SoundEffect, NotePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundEffect", function() { return SoundEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePlayer", function() { return NotePlayer; });
/* harmony import */ var _songs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs */ "./src/scripts/songs.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SoundEffect = /*#__PURE__*/function () {
  function SoundEffect(audioCtx, fileName) {
    _classCallCheck(this, SoundEffect);

    this.audioCtx = audioCtx;
    this.fileName = fileName;
    this.loadSound(fileName);
    this.volume = audioCtx.createGain();
    this.volume.gain.value = 0.075;
    this.volume.connect(audioCtx.destination);
  }

  _createClass(SoundEffect, [{
    key: "loadSound",
    value: function loadSound(fileName) {
      var _this = this;

      this.source = this.audioCtx.createBufferSource();
      fetch("./src/assets/notes/".concat(fileName, ".mp3")).then(function (response) {
        return response.arrayBuffer();
      }).then(function (arrayBuffer) {
        return _this.audioCtx.decodeAudioData(arrayBuffer);
      }).then(function (buffer) {
        _this.source.buffer = buffer;

        _this.source.connect(_this.volume);
      });
    }
  }, {
    key: "playSound",
    value: function playSound() {
      this.source.start();
      this.loadSound(this.fileName);
    }
  }]);

  return SoundEffect;
}();

var NotePlayer = /*#__PURE__*/function (_SoundEffect) {
  _inherits(NotePlayer, _SoundEffect);

  var _super = _createSuper(NotePlayer);

  function NotePlayer(audioCtx, songTitle) {
    var _this2;

    _classCallCheck(this, NotePlayer);

    _this2 = _super.call(this, audioCtx, _songs__WEBPACK_IMPORTED_MODULE_0__["default"][songTitle][0]);
    _this2.length = _songs__WEBPACK_IMPORTED_MODULE_0__["default"][songTitle].length;
    _this2.songTitle = songTitle;
    _this2.position = 0;
    return _this2;
  }

  _createClass(NotePlayer, [{
    key: "playSound",
    value: function playSound() {
      this.source.start();

      if (++this.position < this.length) {
        this.loadSound(_songs__WEBPACK_IMPORTED_MODULE_0__["default"][this.songTitle][this.position]);
      }
    }
  }]);

  return NotePlayer;
}(SoundEffect);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NvbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NvdW5kZWZmZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9lNGFhIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwidGhlbWUiLCJ2b2x1bWUiLCJzcGxhc2giLCJzb3VuZENvbnRyb2wiLCJtdXNpY09uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInBsYXkiLCJ3aW5kb3ciLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXVzZSIsIm1lbnVNb2RhbCIsImNvbnRhaW5zIiwidG9nZ2xlTXVzaWMiLCJ0b2dnbGUiLCJzdGFydEdhbWUiLCJleGl0R2FtZSIsInNvbmdUaXRsZSIsImxldmVsIiwiYXVkaW9DdHgiLCJBdWRpb0NvbnRleHQiLCJub3RlUGxheWVyIiwiZXJyb3JQbGF5ZXIiLCJnYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiTm90ZVBsYXllciIsIlNvdW5kRWZmZWN0IiwiR2FtZSIsIlNvbmdzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUtleUxpc3RlbmVycyIsInJlbW92ZSIsInF1aXQiLCJjdXJyZW50VGltZSIsImtleUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImtleXMiLCJrZXlzRG93biIsInBhdXNlZCIsImdhbWVPdmVyIiwiaWR4Iiwia2V5IiwidW5kZWZpbmVkIiwiZGVib3VuY2VkTWFrZU1vdmUiLCJBcnJheSIsImZpbGwiLCJtYWtlTW92ZSIsInBhcnNlSW50Iiwiam9pbiIsImdvb2RNb3ZlIiwiY2hlY2tNb3ZlIiwicGxheVNvdW5kIiwic2V0VGltZW91dCIsImRyYXdCb3giLCJkZWJvdW5jZSIsIkJvYXJkIiwic29uZ0xlbmd0aCIsInJvd3MiLCJpbml0aWFsaXplQm9hcmQiLCJwb3NpdGlvbiIsImFuZ3J5IiwiYXJyIiwieE9yIiwiYm94IiwiY3VycmVudE1vdmVWYWx1ZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwiZHJhd011c2ljTm90ZXMiLCJjb3VudCIsImNsZWFyQ3VycmVudFJvdyIsImRyYXdSb3ciLCJkcmF3RXJyb3JzIiwiZmxhc2giLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclJlY3QiLCJpIiwicHVzaCIsIlJvdyIsImNhbnZhc0hlaWdodCIsImNhbnZhc1dpZHRoIiwiYm9hcmQiLCJzY29yZSIsInNlY29uZHMiLCJzY29yZUVsZW1lbnQiLCJ0aW1lckVsZW1lbnQiLCJ5Iiwic2hvd1Njb3JlIiwiZHJhdyIsInNob3dUaW1lIiwiaW50ZXJ2YWwiLCJzaG93VGltZXNVcCIsInN0eWxlIiwiY29sb3IiLCJ0ZXh0IiwiZGlzcGxheSIsImlubmVySFRNTCIsInBsYXllck1vdmUiLCJzdGFydFRpbWVyIiwibmV4dE1vdmUiLCJmbGFzaEVycm9ycyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlUmVjdCIsInJvd1RvcCIsImZvckVhY2giLCJyb3ciLCJib3VuY2VOb3RlcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJib3VuY2luZyIsImNyZWF0ZVJvdyIsIm5vQm91bmNlIiwiYmVnaW5QYXRoIiwiY2xvc2VQYXRoIiwic2F2ZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInJlc3RvcmUiLCJjb2xvcnMiLCJzbG90Iiwic3RhcnRYIiwic3RhcnRZIiwiYXJjIiwiTWF0aCIsIlBJIiwiZGlmZiIsImluZGljZXMiLCJqIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21OdW0iLCJzbGljZSIsIm9kZVRvSm95IiwibWludWV0SW5HIiwiZnVyRWxpc2UiLCJmaWxlTmFtZSIsImxvYWRTb3VuZCIsImNyZWF0ZUdhaW4iLCJnYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJhcnJheUJ1ZmZlciIsImRlY29kZUF1ZGlvRGF0YSIsImJ1ZmZlciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNB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UCxRQUFaLEVBQXNCRixTQUF0QixFQUFnQztBQUFBOztBQUFBOztBQUM5QiwrQkFBTUUsUUFBTixFQUFnQlUsOENBQUssQ0FBQ1osU0FBRCxDQUFMLENBQWlCLENBQWpCLENBQWhCO0FBRUEsV0FBS2EsTUFBTCxHQUFjRCw4Q0FBSyxDQUFDWixTQUFELENBQUwsQ0FBaUJhLE1BQS9CO0FBQ0EsV0FBS2IsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxXQUFLMkMsUUFBTCxHQUFnQixDQUFoQjtBQUw4QjtBQU0vQjs7OztnQ0FFVTtBQUNULFdBQUtxRixNQUFMLENBQVlRLEtBQVo7O0FBRUEsVUFBSSxFQUFFLEtBQUs3RixRQUFQLEdBQWtCLEtBQUs5QixNQUEzQixFQUFrQztBQUNoQyxhQUFLOEcsU0FBTCxDQUFlL0csOENBQUssQ0FBQyxLQUFLWixTQUFOLENBQUwsQ0FBc0IsS0FBSzJDLFFBQTNCLENBQWY7QUFDRDtBQUNGOzs7O0VBaEJzQmpDLFc7Ozs7Ozs7Ozs7Ozs7O0FDakN6QjtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG5cblxudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7IiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cblxuXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xuXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG5cbiAgcmV0dXJuIHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkgPyBnZXRSYXdUYWcodmFsdWUpIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7IiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDsiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG5cblxudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cblxudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cblxudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7IiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cblxudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7IiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xuXG5cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG5cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xubW9kdWxlLmV4cG9ydHMgPSByb290OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xuXG5cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG5cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG5cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG5cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7IC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpOyAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cblxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lOyAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuXG4gICAgcmV0dXJuIGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8IHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQgfHwgdGltZVNpbmNlTGFzdENhbGwgPCAwIHx8IG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQ7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcblxuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfSAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cblxuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDsgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cblxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlOyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG5cblxudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHwgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG5cblxudmFyIG5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xuXG5cbnZhciBOQU4gPSAwIC8gMDtcbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG5cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG5cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cblxudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IG90aGVyICsgJycgOiBvdGhlcjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOCkgOiByZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyOyIsInZhciBnOyAvLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuXG5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn0oKTtcblxudHJ5IHtcbiAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gIGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG4gIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufSAvLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZzsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgU29uZ3MgZnJvbSAnLi9zY3JpcHRzL3NvbmdzJztcbmltcG9ydCB7IFNvdW5kRWZmZWN0LCBOb3RlUGxheWVyIH0gZnJvbSAnLi9zY3JpcHRzL3NvdW5kZWZmZWN0JztcblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1ib2FyZCcpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG5jb25zdCB0aGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZScpO1xudGhlbWUudm9sdW1lID0gMC4yO1xuY29uc3Qgc3BsYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwbGFzaC1tb2RhbC1iYWNrZ3JvdW5kJyk7XG5jb25zdCBzb3VuZENvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291bmQtY29udHJvbCcpO1xubGV0IG11c2ljT24gPSB0cnVlO1xuXG5zcGxhc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3BsYXNoLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGlmIChtdXNpY09uKSB7dGhlbWUucGxheSgpfTtcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0aGVtZS5wYXVzZSgpO1xufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAobXVzaWNPbiAmJiAhbWVudU1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge3RoZW1lLnBsYXkoKX07XG59KVxuXG5zb3VuZENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZU11c2ljKCk7XG59KVxuXG5jb25zdCB0b2dnbGVNdXNpYyA9ICgpID0+e1xuICBzb3VuZENvbnRyb2wuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS1tdXRlXCIpO1xuICBzb3VuZENvbnRyb2wuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS11cFwiKTtcbiAgbXVzaWNPbiA/IHRoZW1lLnBhdXNlKCkgOiB0aGVtZS5wbGF5KCk7XG4gIG11c2ljT24gPSAhbXVzaWNPbjtcbn1cblxuXG5jb25zdCBtZW51TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYmFja2dyb3VuZFwiKTtcbmNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idXR0b25cIik7XG5jb25zdCBleGl0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpdFwiKTtcbmxldCBzb25nVGl0bGUsIGxldmVsO1xuY29uc3QgYXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5sZXQgbm90ZVBsYXllciwgZXJyb3JQbGF5ZXI7XG5sZXQgZ2FtZTtcblxuXG5zdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1lbnVNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc29uZ1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNvbmdcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBsZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsZXZlbFwiXTpjaGVja2VkJykudmFsdWU7XG4gIG5vdGVQbGF5ZXIgPSBuZXcgTm90ZVBsYXllcihhdWRpb0N0eCwgc29uZ1RpdGxlKTtcbiAgZXJyb3JQbGF5ZXIgPSBuZXcgU291bmRFZmZlY3QoYXVkaW9DdHgsICd3cm9uZycpO1xuICBnYW1lID0gbmV3IEdhbWUoU29uZ3Nbc29uZ1RpdGxlXS5sZW5ndGgsIGxldmVsLCBjdHgpO1xuICB0aGVtZS5wYXVzZSgpO1xuICBpbml0aWFsaXplS2V5TGlzdGVuZXJzKCk7XG59KVxuXG5cbmV4aXRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtZW51TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGdhbWUucXVpdCgpO1xuICB0aGVtZS5jdXJyZW50VGltZSA9IDA7ICBcbiAgaWYgKG11c2ljT24pIHt0aGVtZS5wbGF5KCl9O1xufSlcblxuXG5jb25zdCBrZXlFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIta2V5Jyk7XG5jb25zdCBrZXlzID0geydhJzogMCwgJ3MnOiAxLCAnZCc6IDIsICdmJzogMywgJ2cnOiA0fVxubGV0IGtleXNEb3duID0gWzAsIDAsIDAsIDAsIDBdO1xuXG5jb25zdCBpbml0aWFsaXplS2V5TGlzdGVuZXJzID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAvLyBkb24ndCBkbyBhbnl0aGluZyBvbiBlcnJvciBkZWxheSBvciBnYW1lIG92ZXJcbiAgICBpZiAocGF1c2VkIHx8IGdhbWUuZ2FtZU92ZXIoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGlkeCA9IGtleXNbZS5rZXldXG5cbiAgICBpZiAoaWR4ID09PSB1bmRlZmluZWQgfHwga2V5c0Rvd25baWR4XSA9PT0gMSkgcmV0dXJuO1xuICAgIFxuICAgIGtleXNEb3duW2lkeF0gPSAxO1xuICAgIGtleUVsZW1lbnRzW2lkeF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGRlYm91bmNlZE1ha2VNb3ZlKGtleXNEb3duKTtcbiAgfSlcblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHsgXG4gICAga2V5c0Rvd24gPSBBcnJheSg1KS5maWxsKDApO1xuICAgIGlmIChrZXlzW2Uua2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXlFbGVtZW50c1trZXlzW2Uua2V5XV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuXG5sZXQgcGF1c2VkID0gZmFsc2U7XG5cbmNvbnN0IG1ha2VNb3ZlID0ga2V5c0Rvd24gPT4ge1xuICBrZXlzRG93biA9IHBhcnNlSW50KGtleXNEb3duLmpvaW4oXCJcIiksIDIpO1xuICBsZXQgZ29vZE1vdmUgPSBnYW1lLmNoZWNrTW92ZShrZXlzRG93bik7XG4gIGlmIChnb29kTW92ZSA9PT0gdHJ1ZSl7XG4gICAgbm90ZVBsYXllci5wbGF5U291bmQoKTsgXG4gIH1cbiAgZWxzZSBpZiAoZ29vZE1vdmUgPT09IGZhbHNlKSB7XG4gICAgZXJyb3JQbGF5ZXIucGxheVNvdW5kKCk7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBwYXVzZWQgPSBmYWxzZVxuICAgICAgaWYgKCFnYW1lLmdhbWVPdmVyKCkpIGdhbWUuZHJhd0JveCgpO1xuICAgICB9LCAyNTAwKVxuICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZE1ha2VNb3ZlID0gZGVib3VuY2UobWFrZU1vdmUsIDQwKTtcblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgUm93IGZyb20gJy4vcm93JztcblxuXG4vLyBob2xkcyBhbGwgb2YgdGhlIHJvd3MgXG5jbGFzcyBCb2FyZCB7XG5cbiAgY29uc3RydWN0b3Ioc29uZ0xlbmd0aCwgbGV2ZWwsIGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucm93cyA9IEJvYXJkLmluaXRpYWxpemVCb2FyZChzb25nTGVuZ3RoLCBsZXZlbCwgY3R4KTtcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMucm93cy5sZW5ndGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgLy8gZ3JhcGhpYyBmb3IgbWlzc2VkIG5vdGVzXG4gICAgdGhpcy5hbmdyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5ncnlcIik7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbGl6ZUJvYXJkKHNvbmdMZW5ndGgsIGxldmVsLCBjdHgpIHtcbiAgICBjb25zdCByb3dzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nTGVuZ3RoOyBpKyspe1xuICAgICAgcm93cy5wdXNoKG5ldyBSb3cobGV2ZWwsIGN0eCkpXG4gICAgfVxuICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgbmV4dE1vdmUoKXtcbiAgICB0aGlzLnBvc2l0aW9uKys7XG4gIH1cblxuXG4gIGN1cnJlbnRNb3ZlVmFsdWUoKXtcbiAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5yb3dzW3RoaXMucG9zaXRpb25dLmFyci5qb2luKFwiXCIpLCAyKTtcbiAgfVxuXG5cbiAgZHJhd0Vycm9ycyh4T3Ipe1xuICAgIGZvciAobGV0IGJveCA9IDA7IGJveCA8IDU7IGJveCsrKXtcbiAgICAgIFxuICAgICAgaWYgKCh4T3IgJiAoMiAqKiBib3gpKSA9PT0gKDIgKiogYm94KSkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRNb3ZlVmFsdWUoKSAmICgyICoqICBib3gpKSA9PT0gMCl7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgzNTcgLSAoNzAgKiBib3gpLCA0MjAgLSA5OCwgNjcsIDg2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgzNTcgLSAoNzAgKiBib3gpLCA0MjAgLSA5OCwgNjcsIDg2KTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hbmdyeSwgMCwgMCwgNTAsIDUwLCA0MDIgLSAoNzAgKiBib3gpLCAzMTUsIDUwLCA1MClcbiAgICAgICAgICB0aGlzLnJvd3NbdGhpcy5wb3NpdGlvbl0uZHJhd011c2ljTm90ZXMoMzIxKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gICBmbGFzaEVycm9ycyh4T3Ipe1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgdGhpcy5jbGVhckN1cnJlbnRSb3coKTtcbiAgICB0aGlzLnJvd3NbdGhpcy5wb3NpdGlvbl0uZHJhd1Jvdyg0MjAgLSA5OSwgdHJ1ZSk7XG4gICAgdGhpcy5kcmF3RXJyb3JzKHhPcilcbiAgICBjb25zdCBmbGFzaCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gNSl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZmxhc2gpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY291bnQgJSAyICE9PSAwKXtcbiAgICAgICAgdGhpcy5kcmF3RXJyb3JzKHhPcilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyQ3VycmVudFJvdygpO1xuICAgICAgICB0aGlzLnJvd3NbdGhpcy5wb3NpdGlvbl0uZHJhd1Jvdyg0MjAgLSA5OSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBjb3VudCsrXG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGNsZWFyQ3VycmVudFJvdygpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAzMTAsIDUwMCwgMTA5KTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7IiwiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuXG5jb25zdCBjYW52YXNIZWlnaHQgPSA0MjA7IFxuY29uc3QgY2FudmFzV2lkdGggPSA1MDA7XG5cbmNsYXNzIEdhbWUge1xuICBcbiAgY29uc3RydWN0b3Ioc29uZ0xlbmd0aCwgbGV2ZWwsIGN0eCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoc29uZ0xlbmd0aCwgbGV2ZWwsIGN0eClcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNlY29uZHMgPSAyOTtcbiAgICB0aGlzLnNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgdGhpcy50aW1lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVyXCIpO1xuICAgIHRoaXMueSA9IGNhbnZhc0hlaWdodCAtIDk5O1xuICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuXG4gIC8vIGtlZXBzIHRyYWNrIG9mIHRpbWVcbiAgc3RhcnRUaW1lcigpe1xuICAgIHRoaXMuc2hvd1RpbWUoKTtcbiAgXG4gICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnNlY29uZHMtLTtcbiAgICAgIGlmICh0aGlzLnNlY29uZHMgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2hvd1RpbWVzVXAoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBzaG93VGltZXNVcCgpe1xuICAgICAgICB0aGlzLnRpbWVyRWxlbWVudC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMudGltZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmbGFzaGluZ1wiKTtcbiAgICAgICAgdGhpcy5zaG93VGltZShcIlRpbWUncyBVcCFcIik7XG5cbiAgICAgICAgLy8gdG8gcmVtb3ZlIHRoZSBncmVlbiBib3hcbiAgICAgICAgdGhpcy5ib2FyZC5jbGVhckN1cnJlbnRSb3coKTtcbiAgICAgICAgdGhpcy5ib2FyZC5yb3dzW3RoaXMuYm9hcmQucG9zaXRpb25dLmRyYXdSb3coNDIwLTk5LCB0cnVlKTsgXG4gIH1cblxuICBzaG93VGltZSh0ZXh0KXtcbiAgICBsZXQgZGlzcGxheSA9IHRleHQgPyB0ZXh0IDogdGhpcy5zZWNvbmRzO1xuICAgIHRoaXMudGltZXJFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXk7XG4gIH1cblxuICBzaG93U2NvcmUoKXtcbiAgICB0aGlzLnNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSBgJHt0aGlzLnNjb3JlfSAvICR7dGhpcy5ib2FyZC5sZW5ndGh9YFxuICB9XG4gIFxuXG4gIGNoZWNrTW92ZShwbGF5ZXJNb3ZlKXtcbiAgICBjb25zdCB4T3IgPSB0aGlzLmJvYXJkLmN1cnJlbnRNb3ZlVmFsdWUoKSBeIHBsYXllck1vdmU7XG4gICAgXG4gICAgaWYgKHhPciA9PT0gMCl7XG5cbiAgICAgIGlmICghdGhpcy5pbnRlcnZhbCkge3RoaXMuc3RhcnRUaW1lcigpfTtcblxuICAgICAgdGhpcy5ib2FyZC5uZXh0TW92ZSgpO1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB0aGlzLnNjb3JlKys7XG4gICAgICB0aGlzLnNob3dTY29yZSgpO1xuXG4gICAgICBpZiAodGhpcy5zY29yZSA9PT0gdGhpcy5ib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICB0aGlzLnNob3dUaW1lKFwiUGVyZmVjdCBTY29yZSFcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmludGVydmFsKSByZXR1cm47XG4gICAgICB0aGlzLmJvYXJkLmZsYXNoRXJyb3JzKHhPcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZHJhd0JveCgpe1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgdGhpcy5jdHguc3Ryb2tlUmVjdCgxLCBjYW52YXNIZWlnaHQgLSAxMDksIGNhbnZhc1dpZHRoLTIsIDEwMylcbiAgfVxuXG4gIGRyYXcoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gICAgbGV0IHJvd1RvcCA9IHRoaXMueTtcbiAgICAvLyBUT0RPIGNoYW5nZSB0aGlzIHRvIGZvciBsb29wIHRvIGV4aXQgZWFybHk/XG4gICAgdGhpcy5ib2FyZC5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIC8vIG9ubHkgZHJhdyB0aGUgcm93cyBvbiB0aGUgZ3JpZCwgY2FuIG9wdGltaXplIHdpdGggYSBmb3IgbG9vcCBhbmQgYnJlYWs/XG4gICAgICBpZiAocm93VG9wID4gLTEwMyAmJiByb3dUb3AgPCBjYW52YXNIZWlnaHQpe1xuICAgICAgIFxuICAgICAgICAoIXRoaXMuaW50ZXJ2YWwpID8gcm93LmJvdW5jZU5vdGVzKHJvd1RvcCkgOiByb3cuZHJhd1Jvdyhyb3dUb3AsIHRydWUpO1xuICAgICAgfVxuICAgICAgcm93VG9wIC09IDEwMztcbiAgICB9KVxuICAgIC8vIDEwMyAvIDggdG8gbWFrZSBzdXJlIHdlIGhpdCB0aGUgMTAzXG4gICAgdGhpcy55ICs9IDEyLjg3NSBcblxuICAgIGlmICghdGhpcy5nYW1lT3ZlcigpKSB0aGlzLmRyYXdCb3goKTtcblxuICAgIGlmICgodGhpcy55IC0gMzIxIC0gMTIuODc1KSAlIDEwMyAhPT0gMCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcbiAgICB9IFxuICBcbiAgfVxuXG5cbiAgcXVpdCgpe1xuICAgIC8vIHN0b3AgdGltZXJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIHRoaXMudGltZXJFbGVtZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMudGltZXJFbGVtZW50LmlubmVySFRNTCA9IDMwO1xuICAgIHRoaXMudGltZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmbGFzaGluZ1wiKTtcbiAgICB0aGlzLnNlY29uZHMgPSAtMTtcbiAgICAvLyBzdG9wIGJvdW5jaW5nIGlmIHVzZXIgcXVpdHMgYmVmb3JlIHN0YXJ0aW5nXG4gICAgdGhpcy5ib2FyZC5yb3dzLmZvckVhY2gocm93ID0+IGNsZWFySW50ZXJ2YWwocm93LmJvdW5jaW5nKSlcbiAgfVxuXG4gIGdhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLnNlY29uZHMgPT09IC0xIHx8IHRoaXMuc2NvcmUgPT09IHRoaXMuYm9hcmQubGVuZ3RoXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJcbmNsYXNzIFJvdyB7XG5cbiAgY29uc3RydWN0b3IobGV2ZWwsIGN0eCl7XG4gICAgdGhpcy5hcnIgPSBSb3cuY3JlYXRlUm93KGxldmVsKTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmJvdW5jaW5nO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVJvdyhsZXZlbCl7XG4gICAgY29uc3QgYXJyID0gQXJyYXkoNSkuZmlsbCgwKVxuICAgIGNvbnN0IGluZGljZXMgPSBbMCwgMSwgMiwgMywgNF07XG4gICAgXG4gICAgLy8gc2h1ZmZsZSB1c2luZyBGaXNoZXItWWF0ZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW5kaWNlcy5sZW5ndGggLSBpKSArIGkpO1xuICAgICAgW2luZGljZXNbaV0sIGluZGljZXNbal1dID0gW2luZGljZXNbal0sIGluZGljZXNbaV1dXG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGV2ZWwgKyAxKTtcblxuICAgIGluZGljZXMuc2xpY2UoMCwgcmFuZG9tTnVtKS5mb3JFYWNoKGlkeCA9PiBhcnJbaWR4XSA9IDEpXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGRyYXdSb3coeSwgbm9Cb3VuY2Upe1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzUxNTE0RFwiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoNzUsIHksIDM1MCwgODgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoNzUsIHksIDcwLCA4OCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlUmVjdCgxNDUsIHksIDcwLCA4OCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlUmVjdCgyMTUsIHksIDcwLCA4OCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlUmVjdCgyODUsIHksIDcwLCA4OCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlUmVjdCgzNTUsIHksIDcwLCA4OCk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgXG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgdGhpcy5jdHgubW92ZVRvKDc2LCB5LTMpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyg0MjksIHktMyk7XG4gICAgdGhpcy5jdHgubGluZVRvKDQyOSwgeSArIDg4KVxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyMzNTM0MzAnO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oNDI1LCB5KTtcbiAgICB0aGlzLmN0eC5saW5lVG8oNDMxLCB5LTYpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oNzUsIHkpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyg4MSwgeS02KTtcbiAgICB0aGlzLmN0eC5saW5lVG8oNzUsIHktNik7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICBcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyg0MjUsIHkrODgpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyg0MzEsIHkrODIpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyg0MzEsIHkrODgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgXG4gICAgaWYgKG5vQm91bmNlKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJvdW5jaW5nKVxuICAgICAgdGhpcy5kcmF3TXVzaWNOb3Rlcyh5KTtcbiAgICB9XG4gICBcbiAgfVxuXG4gIGRyYXdNdXNpY05vdGVzKHkpe1xuICAgIGNvbnN0IGNvbG9ycyA9IFsnIzMzRkNGRicsICcjQUYzM0ZGJywgJyNFNUZFMTUnLCAnI0ZGOEQzMycsICcjQUZGRjMzJ11cbiAgICB0aGlzLmFyci5mb3JFYWNoKChzbG90LCBpKSA9PiB7XG4gICAgICBpZiAoc2xvdCA9PT0gMSkge1xuICAgICAgICBjb25zdCBzdGFydFggPSBpICogNzAgKyAxMDkuNTtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0geSArIDU1XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmMoc3RhcnRYLCBzdGFydFksIDExLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tpXTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhzdGFydFgsIHN0YXJ0WSwgOCwgMyAqIE1hdGguUEkgLyAyLCAwKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tpXTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHN0YXJ0WCArIDEwLCBzdGFydFkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oc3RhcnRYICsgMTAsIHN0YXJ0WSAtIDMwKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIGJvdW5jZU5vdGVzKHkpe1xuICAgIGNvbnN0IGRpZmYgPSBbMiwgNCwgNiwgOCwgMTAsIDgsIDYsIDQsIDIsIDBdO1xuICAgIGxldCBpID0gMDtcblxuICAgIHRoaXMuYm91bmNpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdSb3coeSlcbiAgICAgIHRoaXMuZHJhd011c2ljTm90ZXMoeSAtIGRpZmZbaSAlIDEwXSk7XG4gICAgICBpKys7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdzsiLCJjb25zdCBvZGVUb0pveSA9IFsnZTUnLCAnZTUnLCdmNScsJ2c1JywnZzUnLCdmNScsJ2U1JywnZDUnLCdjNScsJ2M1JywnZDUnLCdlNScsJ2U1JywnZDUnLCdkNScsJ2U1JyxcbiAgJ2U1JywnZjUnLCdnNScsJ2c1JywnZjUnLCdlNScsJ2Q1JywnYzUnLCdjNScsJ2Q1JywnZTUnLCdkNScsJ2M1JywnYzUnLCdkNScsJ2Q1JywnZTUnLCdjNScsJ2Q1JywnZTUnLFxuICAnZjUnLCdlNScsJ2M1JywnZDUnLCdlNScsJ2Y1JywnZTUnLCdkNScsJ2M1JywnZDUnLCdnNCcsJ2U1JywnZTUnLCdmNScsJ2c1JywnZzUnLCdmNScsJ2U1JywnZDUnLCdjNScsXG4gICdjNScsJ2Q1JywnZTUnLCdkNScsJ2M1JywnYzUnXTtcblxuY29uc3QgbWludWV0SW5HID0gWyAnZDUnLCdnNCcsJ2E0JywnYjQnLCdjNScsJ2Q1JywnZzQnLCdnNCcsJ2U1JywnYzUnLCdkNScsJ2U1JywnZnM1JywnZzUnLCdnNCcsJ2c0JywnYzUnLFxuICAnZDUnLCdjNScsJ2I0JywnYTQnLCdiNCcsJ2M1JywnYjQnLCdhNCcsJ2c0JywnZnM0JywnZzQnLCdhNCcsJ2I0JywnZzQnLCdiNCcsJ2E0JywnZDUnLCdnNCcsJ2E0JywnYjQnLCdjNScsXG4gICdkNScsJ2c0JywnZzQnLCdlNScsJ2M1JywnZDUnLCdlNScsJ2ZzNScsJ2c1JywnZzQnLCdnNCcsJ2M1JywnZDUnLCdjNScsJ2I0JywnYTQnLCdiNCcsJ2M1JywnYjQnLCdhNCcsJ2c0JywnYTQnLFxuICAnYjQnLCdhNCcsJ2c0JywnZnM0JywnZzQnIF07XG5cbmNvbnN0IGZ1ckVsaXNlID0gWydlNScsICdkczUnLCAnZTUnLCAnZHM1JywgJ2U1JywgJ2I0JywgJ2Q1JywgJ2M1JywgJ2E0JywgJ2M0JywgJ2U0JywgJ2E0JywgJ2I0JywgJ2U0JywgJ2dzNCcsICdiNCcsICdjNScsICdlNCcsXG4gICdlNScsICdkczUnLCAnZTUnLCAnZHM1JywgJ2U1JywgJ2I0JywgJ2Q1JywgJ2M1JywgJ2E0JywgJ2M0JywgJ2U0JywgJ2E0JywgJ2I0JywgJ2U0JywgJ2M1JywgJ2I0JywgJ2E0JywgJ2I0JywgJ2M1JywgJ2Q1JywgJ2U1JyxcbiAgJ2c0JywgJ2Y1JywgJ2U1JywgJ2Q1JywgJ2Y0JywgJ2U1JywgJ2Q1JywgJ2M1JywgJ2U0JywgJ2Q1JywgJ2M1JywgJ2I0JywgJ2U1JywgJ2RzNScsICdlNScsICdkczUnLCAnZTUnLCAnYjQnLCAnZDUnLCAnYzUnLCAnYTQnLCBcbiAgJ2M0JywgJ2U0JywgJ2E0JywgJ2I0JywgJ2U0JywgJ2dzNCcsICdiNCcsICdjNScsICdlNCcsJ2U1JywgJ2RzNScsICdlNScsICdkczUnLCAnZTUnLCAnYjQnLCAnZDUnLCAnYzUnLCAnYTQnLCAnYzQnLCAnZTQnLCAnYTQnLCBcbiAgJ2I0JywgJ2U0JywgJ2M1JywgJ2I0JywgJ2E0J107XG5cbiAgZXhwb3J0IGRlZmF1bHQge29kZVRvSm95LCBtaW51ZXRJbkcsIGZ1ckVsaXNlfSIsImltcG9ydCBTb25ncyBmcm9tICcuL3NvbmdzJztcblxuY2xhc3MgU291bmRFZmZlY3Qge1xuXG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ3R4LCBmaWxlTmFtZSkge1xuICAgIHRoaXMuYXVkaW9DdHggPSBhdWRpb0N0eDtcbiAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgdGhpcy5sb2FkU291bmQoZmlsZU5hbWUpO1xuICAgIFxuICAgIHRoaXMudm9sdW1lID0gYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuICAgIHRoaXMudm9sdW1lLmdhaW4udmFsdWUgPSAwLjA3NTtcbiAgICB0aGlzLnZvbHVtZS5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIGxvYWRTb3VuZChmaWxlTmFtZSl7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICBmZXRjaChgLi9zcmMvYXNzZXRzL25vdGVzLyR7ZmlsZU5hbWV9Lm1wM2ApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4gdGhpcy5hdWRpb0N0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIpKVxuICAgICAgLnRoZW4oYnVmZmVyID0+IHtcbiAgICAgICAgdGhpcy5zb3VyY2UuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMudm9sdW1lKTtcbiAgICAgIH0gKVxuICB9XG5cbiAgcGxheVNvdW5kKCl7XG4gICAgdGhpcy5zb3VyY2Uuc3RhcnQoKTtcbiAgICB0aGlzLmxvYWRTb3VuZCh0aGlzLmZpbGVOYW1lKVxuICB9XG5cbn1cblxuXG5jbGFzcyBOb3RlUGxheWVyIGV4dGVuZHMgU291bmRFZmZlY3Qge1xuICBcbiAgY29uc3RydWN0b3IoYXVkaW9DdHgsIHNvbmdUaXRsZSl7XG4gICAgc3VwZXIoYXVkaW9DdHgsIFNvbmdzW3NvbmdUaXRsZV1bMF0pO1xuXG4gICAgdGhpcy5sZW5ndGggPSBTb25nc1tzb25nVGl0bGVdLmxlbmd0aDtcbiAgICB0aGlzLnNvbmdUaXRsZSA9IHNvbmdUaXRsZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgfVxuXG4gIHBsYXlTb3VuZCgpe1xuICAgIHRoaXMuc291cmNlLnN0YXJ0KCk7XG5cbiAgICBpZiAoKyt0aGlzLnBvc2l0aW9uIDwgdGhpcy5sZW5ndGgpe1xuICAgICAgdGhpcy5sb2FkU291bmQoU29uZ3NbdGhpcy5zb25nVGl0bGVdW3RoaXMucG9zaXRpb25dKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuZXhwb3J0IHtTb3VuZEVmZmVjdCwgTm90ZVBsYXllcn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=