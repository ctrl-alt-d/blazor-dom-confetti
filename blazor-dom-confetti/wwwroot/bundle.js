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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dom-confetti/lib/main.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-confetti/lib/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.confetti = confetti;\nvar defaultColors = [\"#a864fd\", \"#29cdff\", \"#78ff44\", \"#ff718d\", \"#fdff6a\"];\n\nfunction createElements(root, elementCount, colors, width, height) {\n  return Array.from({ length: elementCount }).map(function (_, index) {\n    var element = document.createElement(\"div\");\n    var color = colors[index % colors.length];\n    element.style[\"background-color\"] = color; // eslint-disable-line space-infix-ops\n    element.style.width = width;\n    element.style.height = height;\n    element.style.position = \"absolute\";\n    element.style.willChange = \"transform, opacity\";\n    element.style.visibility = \"hidden\";\n    root.appendChild(element);\n    return element;\n  });\n}\n\nfunction randomPhysics(angle, spread, startVelocity, random) {\n  var radAngle = angle * (Math.PI / 180);\n  var radSpread = spread * (Math.PI / 180);\n  return {\n    x: 0,\n    y: 0,\n    wobble: random() * 10,\n    wobbleSpeed: 0.1 + random() * 0.1,\n    velocity: startVelocity * 0.5 + random() * startVelocity,\n    angle2D: -radAngle + (0.5 * radSpread - random() * radSpread),\n    angle3D: -(Math.PI / 4) + random() * (Math.PI / 2),\n    tiltAngle: random() * Math.PI,\n    tiltAngleSpeed: 0.1 + random() * 0.3\n  };\n}\n\nfunction updateFetti(fetti, progress, dragFriction, decay) {\n  /* eslint-disable no-param-reassign */\n  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;\n  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;\n  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;\n  fetti.physics.wobble += fetti.physics.wobbleSpeed;\n  // Backward compatibility\n  if (decay) {\n    fetti.physics.velocity *= decay;\n  } else {\n    fetti.physics.velocity -= fetti.physics.velocity * dragFriction;\n  }\n  fetti.physics.y += 3;\n  fetti.physics.tiltAngle += fetti.physics.tiltAngleSpeed;\n\n  var _fetti$physics = fetti.physics,\n      x = _fetti$physics.x,\n      y = _fetti$physics.y,\n      tiltAngle = _fetti$physics.tiltAngle,\n      wobble = _fetti$physics.wobble;\n\n  var wobbleX = x + 10 * Math.cos(wobble);\n  var wobbleY = y + 10 * Math.sin(wobble);\n  var transform = \"translate3d(\" + wobbleX + \"px, \" + wobbleY + \"px, 0) rotate3d(1, 1, 1, \" + tiltAngle + \"rad)\";\n\n  fetti.element.style.visibility = \"visible\";\n  fetti.element.style.transform = transform;\n  fetti.element.style.opacity = 1 - progress;\n\n  /* eslint-enable */\n}\n\nfunction animate(root, fettis, dragFriction, decay, duration, stagger) {\n  var startTime = void 0;\n\n  return new Promise(function (resolve) {\n    function update(time) {\n      if (!startTime) startTime = time;\n      var elapsed = time - startTime;\n      var progress = startTime === time ? 0 : (time - startTime) / duration;\n      fettis.slice(0, Math.ceil(elapsed / stagger)).forEach(function (fetti) {\n        updateFetti(fetti, progress, dragFriction, decay);\n      });\n\n      if (time - startTime < duration) {\n        requestAnimationFrame(update);\n      } else {\n        fettis.forEach(function (fetti) {\n          if (fetti.element.parentNode === root) {\n            return root.removeChild(fetti.element);\n          }\n        });\n        resolve();\n      }\n    }\n\n    requestAnimationFrame(update);\n  });\n}\n\nvar defaults = {\n  angle: 90,\n  spread: 45,\n  startVelocity: 45,\n  elementCount: 50,\n  width: \"10px\",\n  height: \"10px\",\n  colors: defaultColors,\n  duration: 3000,\n  stagger: 0,\n  dragFriction: 0.1,\n  random: Math.random\n};\n\nfunction backwardPatch(config) {\n  if (!config.stagger && config.delay) {\n    config.stagger = config.delay;\n  }\n  return config;\n}\n\nfunction confetti(root) {\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  var _Object$assign = Object.assign({}, defaults, backwardPatch(config)),\n      elementCount = _Object$assign.elementCount,\n      colors = _Object$assign.colors,\n      width = _Object$assign.width,\n      height = _Object$assign.height,\n      angle = _Object$assign.angle,\n      spread = _Object$assign.spread,\n      startVelocity = _Object$assign.startVelocity,\n      decay = _Object$assign.decay,\n      dragFriction = _Object$assign.dragFriction,\n      duration = _Object$assign.duration,\n      stagger = _Object$assign.stagger,\n      random = _Object$assign.random;\n\n  var elements = createElements(root, elementCount, colors, width, height);\n  var fettis = elements.map(function (element) {\n    return {\n      element: element,\n      physics: randomPhysics(angle, spread, startVelocity, random)\n    };\n  });\n\n  return animate(root, fettis, dragFriction, decay, duration, stagger);\n}\n\n//# sourceURL=webpack:///./node_modules/dom-confetti/lib/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-confetti */ \"./node_modules/dom-confetti/lib/main.js\");\n/* harmony import */ var dom_confetti__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_confetti__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction blafettis_raise_confetti(ref)\n{\n    Object(dom_confetti__WEBPACK_IMPORTED_MODULE_0__[\"confetti\"])(ref);\n}\n\nfunction pepe() {alert(\"hola\");}\n\nwindow.blafettis_raise_confetti = blafettis_raise_confetti;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });