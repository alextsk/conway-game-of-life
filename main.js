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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/html-renderer.js":
/*!******************************!*\
  !*** ./src/html-renderer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.makeTable = exports.makeTableRow = exports.makeTableCell = undefined;\n\nvar _logic = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\nfunction makeTableCell(grid, x, y) {\n  return \"<td>\" + (0, _logic.getCell)(grid, x, y) + \"</td>\";\n}\n\nfunction makeTableRow(grid, y) {\n  return \"<tr>\\n      \" + grid.map(function (cell, x) {\n    return makeTableCell(grid, x + 1, y);\n  }).join(\"\") + \"\\n    </tr>\";\n}\n\nfunction makeTable(grid) {\n  return \" \\n  <table onclick=delegatedHandler>\\n    \" + grid.map(function (row) {\n    return makeTableRow(row);\n  }).join(\"\") + \"\\n  </table>\\n  \";\n}\n\nfunction renderHtml(grid, kill, revive) {\n  return \"\\n    <div>\\n      \" + makeTable(grid) + \"\\n    </div>\\n    \";\n}\n\nexports.makeTableCell = makeTableCell;\nexports.makeTableRow = makeTableRow;\nexports.makeTable = makeTable;\n\n//# sourceURL=webpack:///./src/html-renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _logic = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\nvar _htmlRenderer = __webpack_require__(/*! ./html-renderer.js */ \"./src/html-renderer.js\");\n\nvar draw = function draw(container, render, grid) {\n  container.innerHtml = render(grid);\n};\n\nfunction main() {\n  var g = (0, _logic.generateField)(createGrid(5, 5));\n  console.log(g);\n  var gameContainer = document.querySelector(\"#game\");\n  var drawApplied = partial(draw, gameContainer, _htmlRenderer.renderHtml);\n  setTimeout(function () {\n    return drawApplied(g);\n  }, 1000);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.generateField = exports.updateState = exports.killCell = exports.reviveCell = exports.createGrid = exports.getAliveNeighbours = exports.getCell = exports.gameUpdate = exports.partial = undefined;\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nvar gameUpdate = function gameUpdate(state) {\n  return (0, _utils.deepClone)(state);\n};\n\nvar getCell = function getCell(state, x, y) {\n  if (state[y - 1] == undefined || state[y - 1][x - 1] == undefined) return 0;\n  return +state[y - 1][x - 1];\n};\n\nvar getAliveNeighbours = function getAliveNeighbours(state, x, y) {\n  var cell = (0, _utils.partial)(getCell, state);\n  return cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1) + cell(x - 1, y) + cell(x + 1, y) + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);\n};\n\nvar createGrid = function createGrid(x, y) {\n  return new Array(y).fill(\"\").map(function () {\n    return new Array(x).fill(0);\n  });\n};\n\nvar changeCellState = function changeCellState(value, grid, x, y) {\n  var newGrid = (0, _utils.deepClone)(grid);\n  newGrid[y - 1][x - 1] = value;\n  return newGrid;\n};\n\nvar reviveCell = function reviveCell(grid, x, y) {\n  return changeCellState(1, grid, x, y);\n};\nvar killCell = function killCell(grid, x, y) {\n  return changeCellState(0, grid, x, y);\n};\nvar updateState = function updateState(grid) {\n  return grid.map(function (row, y) {\n    return row.map(function (el, x) {\n      var neigboursCount = getAliveNeighbours(grid, x + 1, y + 1);\n      if (neigboursCount > 3 || neigboursCount < 2) return 0;\n      return 1;\n    });\n  });\n};\n\nvar generateField = function generateField(grid) {\n  return grid.map(function (row) {\n    return row.map(function (cell) {\n      return Math.round(Math.random());\n    });\n  });\n};\n\nexports.partial = _utils.partial;\nexports.gameUpdate = gameUpdate;\nexports.getCell = getCell;\nexports.getAliveNeighbours = getAliveNeighbours;\nexports.createGrid = createGrid;\nexports.reviveCell = reviveCell;\nexports.killCell = killCell;\nexports.updateState = updateState;\nexports.generateField = generateField;\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n\nvar partial = function partial(fn) {\n  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      rest[_key2] = arguments[_key2];\n    }\n\n    return fn.apply(undefined, args.concat(rest));\n  };\n};\n\nvar deepClone = function deepClone(array) {\n  return JSON.parse(JSON.stringify(array));\n};\n\nexports.partial = partial;\nexports.deepClone = deepClone;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });