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

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initControls = exports.initField = exports.playHandler = exports.heightHandler = exports.widthHandler = exports.speedHandler = exports.resetHandler = exports.cellClickHandler = undefined;\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nvar _logic = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\nvar lastCall = 0;\nvar draw = function draw(model) {\n  requestAnimationFrame(function (delta) {\n    if (delta - lastCall > model.getSpeed()) {\n      lastCall = delta;\n      if (model.running) {\n        model.setGrid((0, _logic.updateState)(model.getGrid()));\n        model.broadcast(\"redraw\");\n      }\n    }\n    draw(model);\n  });\n};\n\nfunction cellClickHandler(model) {\n  return function (e) {\n    if (e.target.classList.contains('js-cell')) {\n      var data = e.target.dataset;\n      model.setGrid((0, _logic.toggleCell)(model.getGrid(), data.x, data.y));\n      requestAnimationFrame(function () {\n        model.broadcast(\"redraw\");\n      });\n    }\n  };\n}\n\nfunction resetHandler(model) {\n  return function (e) {\n    model.resetGrid();\n  };\n}\n\nfunction speedHandler(model) {\n  return function (e) {\n    model.setSpeed(e.target.value);\n    model.broadcast(\"Speed\", e.target.value);\n  };\n}\n\nfunction widthHandler(model) {\n  return function (e) {\n    model.setWidth(e.target.value);\n    model.broadcast(\"Width\", e.target.value);\n  };\n}\n\nfunction heightHandler(model) {\n  return function (e) {\n    model.setHeight(e.target.value);\n    model.broadcast(\"Height\", e.target.value);\n  };\n}\n\nfunction playHandler(model) {\n  return function (e) {\n    model.running = !model.running;\n  };\n}\n\nfunction setSliderEvents(model, container, opts) {\n  var sel = container.querySelector(opts.selector);\n  var auxSel = container.querySelector(opts.auxSelector);\n  model.addObserver(opts.title, function (value) {\n    return auxSel.innerHTML = value;\n  });\n  model.broadcast(opts.title, sel.value);\n  sel.addEventListener('change', opts.handler(model));\n}\n\nfunction initControls(_ref) {\n  var model = _ref.model,\n      container = _ref.container,\n      components = _ref.components;\n\n  model.broadcast(\"controls\", components);\n\n  setSliderEvents(model, container, components.speed);\n  setSliderEvents(model, container, components.width);\n  setSliderEvents(model, container, components.height);\n\n  var playBtn = container.querySelector(components.play.selector);\n  playBtn.addEventListener('click', components.play.handler(model));\n\n  var resetBtn = container.querySelector(components.reset.selector);\n  resetBtn.addEventListener('click', components.reset.handler(model));\n}\n\nfunction initField(_ref2) {\n  var model = _ref2.model,\n      container = _ref2.container,\n      handler = _ref2.handler;\n\n  model.broadcast(\"redraw\");\n  document.addEventListener(\"click\", handler(model));\n  draw(model);\n}\n\nfunction reportSpeed(value) {\n  return (1000 / value).toFixed(2) + \"/sec\";\n}\n\nexports.cellClickHandler = cellClickHandler;\nexports.resetHandler = resetHandler;\nexports.speedHandler = speedHandler;\nexports.widthHandler = widthHandler;\nexports.heightHandler = heightHandler;\nexports.playHandler = playHandler;\nexports.initField = initField;\nexports.initControls = initControls;\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/html-renderer.js":
/*!******************************!*\
  !*** ./src/html-renderer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.renderControls = exports.renderField = exports.makeTable = exports.makeTableRow = exports.makeTableCell = undefined;\n\nvar _logic = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\nfunction makeTableCell(grid, x, y, hfac) {\n  return '<td class=\"' + hfac(x, y) + ' ' + ((0, _logic.getCell)(grid, x, y) ? 'alive' : 'dead') + '\" data-x=' + x + ' data-y=' + y + '></td>';\n}\n\nfunction makeTableRow(grid, y, row, hfac) {\n  return '<tr>\\n      ' + row.map(function (cell, x) {\n    return makeTableCell(grid, x + 1, y, hfac);\n  }).join(\"\") + '\\n    </tr>';\n}\n\nfunction makeTable(grid, hfac) {\n  return ' \\n  <table>\\n    <tbody>\\n      ' + grid.map(function (row, y) {\n    return makeTableRow(grid, y + 1, row, hfac);\n  }).join(\"\") + '\\n    </tbody>\\n  </table>\\n  ';\n}\n\nfunction button(opts) {\n  var selectorType = opts.selector[0] == '.' ? \"class\" : \"id\";\n  return '\\n    <button ' + selectorType + '=\"' + opts.selector.slice(1) + '\">' + opts.title + '</button>\\n  ';\n}\n\nfunction selType(sel) {\n  switch (sel[0]) {\n    case '.':\n      return 'class';\n    case '#':\n      return 'id';\n  }\n}\nfunction renderField(grid, hfac) {\n  return '\\n    <div>\\n      ' + makeTable(grid, hfac) + '\\n    </div>\\n    ';\n}\nfunction slider(opts) {\n  return '\\n    <label>' + opts.title + ': \\n      <input \\n        type=\"range\" \\n        min=\"' + opts.minVal + '\" \\n        max=\"' + opts.maxVal + '\" \\n        ' + selType(opts.selector) + '=\"' + opts.selector.slice(1) + '\"\\n      />\\n      <br />\\n      <span ' + selType(opts.auxSelector) + '=\"' + opts.auxSelector.slice(1) + '\"></span>\\n    </label>';\n}\nfunction renderControls(_ref) {\n  var speed = _ref.speed,\n      play = _ref.play,\n      reset = _ref.reset,\n      width = _ref.width,\n      height = _ref.height;\n\n  return '\\n    ' + button(play) + '\\n    ' + button(reset) + '\\n    ' + slider(speed) + '\\n    ' + slider(width) + '\\n    ' + slider(height) + '\\n  ';\n}\n\nexports.makeTableCell = makeTableCell;\nexports.makeTableRow = makeTableRow;\nexports.makeTable = makeTable;\nexports.renderField = renderField;\nexports.renderControls = renderControls;\n\n//# sourceURL=webpack:///./src/html-renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nvar _htmlRenderer = __webpack_require__(/*! ./html-renderer.js */ \"./src/html-renderer.js\");\n\nvar _events = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\nvar _model = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n\nfunction main(fieldWidth, fieldHeight) {\n  var gameContainer = document.querySelector(\"#game-field\");\n  var model = (0, _model.modelInit)(30, 50, 700, gameContainer);\n  var controlsContainer = document.querySelector(\"#game-controls\");\n  model.addObserver('redraw', function (data) {\n\n    gameContainer.innerHTML = (0, _htmlRenderer.renderField)(model.getGrid(), function () {\n      return \"js-cell\";\n    });\n  });\n  model.addObserver('controls', function (components) {\n    controlsContainer.innerHTML = (0, _htmlRenderer.renderControls)(components);\n  });\n  (0, _events.initControls)({\n    model: model,\n    container: controlsContainer,\n    components: {\n      reset: {\n        selector: \"#reset\",\n        handler: _events.resetHandler,\n        title: \"Reset\"\n      },\n      play: {\n        selector: \"#run\",\n        handler: _events.playHandler,\n        title: \"Run\"\n      },\n      speed: {\n        selector: \"#speed\",\n        auxSelector: \"#speed-number\",\n        title: \"Speed\",\n        handler: _events.speedHandler,\n        minVal: 100,\n        maxVal: 2000\n      },\n      width: {\n        selector: \"#width\",\n        auxSelector: \"#width-number\",\n        title: \"Width\",\n        handler: _events.widthHandler,\n        minVal: 10,\n        maxVal: 200\n      },\n      height: {\n        selector: \"#height\",\n        auxSelector: \"#height-number\",\n        title: \"Height\",\n        handler: _events.heightHandler,\n        minVal: 10,\n        maxVal: 200\n      }\n    }\n  });\n\n  (0, _events.initField)({\n    model: model,\n    container: gameContainer,\n    handler: _events.cellClickHandler\n  });\n}\n\nmain(50, 50);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.toggleCell = exports.generateField = exports.updateState = exports.killCell = exports.reviveCell = exports.createGrid = exports.getAliveNeighbours = exports.getCell = exports.gameUpdate = exports.partial = undefined;\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nvar gameUpdate = function gameUpdate(state) {\n  return (0, _utils.deepClone)(state);\n};\n\nvar getCell = function getCell(state, x, y) {\n  if (state[y - 1] == undefined || state[y - 1][x - 1] == undefined) return 0;\n  return +state[y - 1][x - 1];\n};\n\nvar getAliveNeighbours = function getAliveNeighbours(state, x, y) {\n  var cell = (0, _utils.partial)(getCell, state);\n  return cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1) + cell(x - 1, y) + cell(x + 1, y) + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);\n};\n\nvar createGrid = function createGrid(x, y) {\n  return new Array(y).fill(\"\").map(function () {\n    return new Array(x).fill(0);\n  });\n};\n\nvar changeCellState = function changeCellState(value, grid, x, y) {\n  var newGrid = (0, _utils.deepClone)(grid);\n  newGrid[y - 1][x - 1] = value;\n  return newGrid;\n};\n\nvar reviveCell = function reviveCell(grid, x, y) {\n  return changeCellState(1, grid, x, y);\n};\nvar killCell = function killCell(grid, x, y) {\n  return changeCellState(0, grid, x, y);\n};\nvar toggleCell = function toggleCell(grid, x, y) {\n  return getCell(grid, x, y) ? killCell(grid, x, y) : reviveCell(grid, x, y);\n};\nvar updateState = function updateState(grid) {\n  return grid.map(function (row, y) {\n    return row.map(function (el, x) {\n      var neigboursCount = getAliveNeighbours(grid, x + 1, y + 1);\n      var isAlive = getCell(grid, x + 1, y + 1) === 1;\n      return isAlive ? neigboursCount > 3 || neigboursCount < 2 ? 0 : 1 : neigboursCount == 3 ? 1 : 0;\n    });\n  });\n};\n\nvar generateField = function generateField(grid) {\n  return grid.map(function (row) {\n    return row.map(function (cell) {\n      return Math.round(Math.random());\n    });\n  });\n};\n\nexports.partial = _utils.partial;\nexports.gameUpdate = gameUpdate;\nexports.getCell = getCell;\nexports.getAliveNeighbours = getAliveNeighbours;\nexports.createGrid = createGrid;\nexports.reviveCell = reviveCell;\nexports.killCell = killCell;\nexports.updateState = updateState;\nexports.generateField = generateField;\nexports.toggleCell = toggleCell;\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.modelInit = undefined;\n\nvar _logic = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\nfunction modelInit(width, height, speed, rootElement) {\n  var observers = [];\n  function broadcast(type, data) {\n    observers.forEach(function (observer) {\n      return observer.type == type && observer.handler(data);\n    });\n  }\n\n  function addObserver(type, handler) {\n    observers.push({ type: type, handler: handler });\n  }\n  var getGrid = function getGrid() {\n    return grid;\n  };\n  var setGrid = function setGrid(newGrid) {\n    return grid = newGrid;\n  };\n  var resetGrid = function resetGrid() {\n    return setGrid((0, _logic.generateField)((0, _logic.createGrid)(width, height)));\n  };\n  var grid = resetGrid();\n  return {\n    getGrid: getGrid,\n    setGrid: setGrid,\n    resetGrid: resetGrid,\n    getSpeed: function getSpeed() {\n      return speed;\n    },\n    setSpeed: function setSpeed(newSpeed) {\n      return speed = newSpeed;\n    },\n    getWidth: function getWidth() {\n      return width;\n    },\n    setWidth: function setWidth(newWidth) {\n      width = +newWidth;\n      var newrow = Array(+newWidth).fill(0);\n      var newGrid = getGrid().map(function (row) {\n        return newrow.map(function (el, i) {\n          return row[i] || el;\n        });\n      });\n      setGrid(newGrid);\n    },\n    getHeight: function getHeight() {\n      return height;\n    },\n    setHeight: function setHeight(newHeight) {\n      height = +newHeight;\n      var newGrid = Array(+newHeight).fill('');\n      var res = newGrid.map(function (row, i) {\n        return getGrid()[i] || Array(width).fill(0);\n      });\n      console.log('res', res);\n      setGrid(res);\n    },\n    addObserver: addObserver,\n    broadcast: broadcast,\n    rootElement: rootElement,\n    running: true\n  };\n}\n\nexports.modelInit = modelInit;\n\n//# sourceURL=webpack:///./src/model.js?");

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