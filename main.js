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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/css-loader!./src/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"table{\\r\\n    border-collapse: collapse;\\r\\n    background:  #000000;\\r\\n  }\\r\\n  td{\\r\\n    box-sizing: border-box;\\r\\n    text-align: center;\\r\\n    width:15px;\\r\\n    height: 15px;\\r\\n    border: 1px dotted rgba(0,0,0,.2);\\r\\n    transition: background-color .6s;\\r\\n    will-change: background-color;\\r\\n  }\\r\\n  td:hover{\\r\\n    background: red;\\r\\n  }\\r\\n  .game-controls > *{\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n  label{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n  .subtitle {\\r\\n    font-style: italic;\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n  .game__slider--speed{\\r\\n    direction: rtl;\\r\\n  }\\r\\n  td.cell--alive{\\r\\n    background: #faa900;\\r\\n  }\\r\\n  button{\\r\\n    background: transparent;\\r\\n    border: 1px solid #003355;\\r\\n    padding:10px 0;\\r\\n    font-size: 1rem;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  button:hover{\\r\\n    background: #003355;\\r\\n    color: white;\\r\\n  }\\r\\n  .game {\\r\\n    display: grid;\\r\\n    grid-gap: 20px;\\r\\n    grid-template-columns: max-content minmax(500px, auto);\\r\\n    grid-auto-rows: auto;\\r\\n  }\\r\\n  .game-controls {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/Controller/Controller.ts":
/*!**************************************!*\
  !*** ./src/Controller/Controller.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Messages_1 = __webpack_require__(/*! ../Utilities/Messages */ \"./src/Utilities/Messages.ts\");\r\nclass Controller {\r\n    constructor(model, view) {\r\n        view.addObserver(Messages_1.default.UPDATE, () => {\r\n            model.broadcast(Messages_1.default.UPDATE);\r\n        });\r\n        model.addObserver(Messages_1.default.REDRAW, (grid) => {\r\n            view.broadcast(Messages_1.default.REDRAW, grid);\r\n        });\r\n        view.addObserver(Messages_1.default.WIDTH, (width) => {\r\n            model.broadcast(Messages_1.default.WIDTH, width);\r\n        });\r\n        model.addObserver(Messages_1.default.GAMESTATUS, (stability) => {\r\n            view.broadcast(Messages_1.default.GAMESTATUS, stability);\r\n        });\r\n        view.addObserver(Messages_1.default.TOGGLE, (coordinates) => {\r\n            model.broadcast(Messages_1.default.TOGGLE, coordinates);\r\n        });\r\n        view.addObserver(Messages_1.default.HEIGHT, (height) => {\r\n            model.broadcast(Messages_1.default.HEIGHT, height);\r\n        });\r\n        view.addObserver(Messages_1.default.RESET, () => {\r\n            model.broadcast(Messages_1.default.RESET);\r\n        });\r\n    }\r\n}\r\nexports.default = Controller;\r\n\n\n//# sourceURL=webpack:///./src/Controller/Controller.ts?");

/***/ }),

/***/ "./src/Model/Logic.ts":
/*!****************************!*\
  !*** ./src/Model/Logic.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utils_1 = __webpack_require__(/*! ../Utilities/utils */ \"./src/Utilities/utils.ts\");\r\nclass Logic {\r\n    gameUpdate(state) {\r\n        return utils_1.deepClone(state);\r\n    }\r\n    getCellState(state, x, y) {\r\n        if (state[y - 1] === undefined || state[y - 1][x - 1] === undefined)\r\n            return 0;\r\n        return +state[y - 1][x - 1];\r\n    }\r\n    getAliveNeighbours(state, x, y) {\r\n        const cell = utils_1.partial(this.getCellState, state);\r\n        return cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1)\r\n            + cell(x - 1, y) + cell(x + 1, y)\r\n            + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);\r\n    }\r\n    changeCellState(value, grid, x, y) {\r\n        const newGrid = utils_1.deepClone(grid);\r\n        newGrid[y - 1][x - 1] = value;\r\n        return newGrid;\r\n    }\r\n    reviveCell(grid, x, y) {\r\n        return this.changeCellState(1, grid, x, y);\r\n    }\r\n    killCell(grid, x, y) {\r\n        return this.changeCellState(0, grid, x, y);\r\n    }\r\n    toggleCell(grid, x, y) {\r\n        return this.getCellState(grid, x, y) ? this.killCell(grid, x, y) : this.reviveCell(grid, x, y);\r\n    }\r\n    updateState(grid) {\r\n        return grid\r\n            .map((row, y) => row.map((el, x) => {\r\n            const neigboursCount = this.getAliveNeighbours(grid, x + 1, y + 1);\r\n            const isAlive = this.getCellState(grid, x + 1, y + 1) === 1;\r\n            if (isAlive) {\r\n                return (neigboursCount > 3) || (neigboursCount < 2) ? 0 : 1;\r\n            }\r\n            return (neigboursCount === 3) ? 1 : 0;\r\n        }));\r\n    }\r\n}\r\nexports.default = Logic;\r\n\n\n//# sourceURL=webpack:///./src/Model/Logic.ts?");

/***/ }),

/***/ "./src/Model/Model.ts":
/*!****************************!*\
  !*** ./src/Model/Model.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst State_1 = __webpack_require__(/*! ./State */ \"./src/Model/State.ts\");\r\nconst Messages_1 = __webpack_require__(/*! ../Utilities/Messages */ \"./src/Utilities/Messages.ts\");\r\nconst Observer_1 = __webpack_require__(/*! ../Utilities/Observer */ \"./src/Utilities/Observer.ts\");\r\nclass Model extends Observer_1.default {\r\n    constructor() {\r\n        super();\r\n        const state = new State_1.default();\r\n        this.addObserver(Messages_1.default.TOGGLE, (data) => {\r\n            state.toggleCell(data.x, data.y);\r\n            state.isStable = false;\r\n            this.broadcast(Messages_1.default.REDRAW, state.getGrid());\r\n        });\r\n        this.addObserver(Messages_1.default.UPDATE, () => {\r\n            const stability = state.getNextState();\r\n            this.broadcast(Messages_1.default.GAMESTATUS, stability);\r\n            this.broadcast(Messages_1.default.REDRAW, state.getGrid());\r\n        });\r\n        this.addObserver(Messages_1.default.WIDTH, (value) => {\r\n            state.setWidth(value);\r\n            this.broadcast(Messages_1.default.REDRAW, state.getGrid());\r\n        });\r\n        this.addObserver(Messages_1.default.HEIGHT, (value) => {\r\n            state.setHeight(value);\r\n            this.broadcast(Messages_1.default.REDRAW, state.getGrid());\r\n        });\r\n        this.addObserver(Messages_1.default.RESET, () => {\r\n            state.resetGrid();\r\n            this.broadcast(Messages_1.default.REDRAW, state.getGrid());\r\n        });\r\n    }\r\n}\r\nexports.default = Model;\r\n\n\n//# sourceURL=webpack:///./src/Model/Model.ts?");

/***/ }),

/***/ "./src/Model/State.ts":
/*!****************************!*\
  !*** ./src/Model/State.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Observer_1 = __webpack_require__(/*! ../Utilities/Observer */ \"./src/Utilities/Observer.ts\");\r\nconst utils_1 = __webpack_require__(/*! ../Utilities/utils */ \"./src/Utilities/utils.ts\");\r\nconst Logic_1 = __webpack_require__(/*! ./Logic */ \"./src/Model/Logic.ts\");\r\nvar CellState;\r\n(function (CellState) {\r\n    CellState[CellState[\"Dead\"] = 0] = \"Dead\";\r\n    CellState[CellState[\"Alive\"] = 1] = \"Alive\";\r\n})(CellState || (CellState = {}));\r\nexports.CellState = CellState;\r\nclass State extends Observer_1.default {\r\n    constructor(width = 10, height = 10) {\r\n        super();\r\n        this.width = width;\r\n        this.height = height;\r\n        this.prevGrids = [];\r\n        this.running = true;\r\n        this.grid = this.createGrid(this.width, this.height);\r\n        this.isStable = false;\r\n        this.logic = new Logic_1.default();\r\n        this.resetGrid();\r\n    }\r\n    generateField(grid) {\r\n        this.isStable = false;\r\n        this.prevGrids = [];\r\n        return grid.map(row => row.map(() => this.makeRandomCell()));\r\n    }\r\n    makeRandomCell() {\r\n        return Math.random() > .5 ? CellState.Alive : CellState.Dead;\r\n    }\r\n    createGrid(x = this.width, y = this.height) {\r\n        return (new Array(y)).fill('').map(() => (new Array(x)).fill(CellState.Dead)); // tslint:disable-line\r\n    }\r\n    getGrid() {\r\n        return this.grid;\r\n    }\r\n    setGrid(newGrid, changeHistory = false) {\r\n        changeHistory && this.prevGrids.push(utils_1.deepClone(this.grid));\r\n        this.grid = utils_1.deepClone(newGrid);\r\n        return this.grid;\r\n    }\r\n    toggleCell(x, y) {\r\n        this.setGrid(this.logic.toggleCell(this.getGrid(), x, y), true);\r\n    }\r\n    getNextState() {\r\n        this.setGrid(this.logic.updateState(this.getGrid()), true);\r\n        return this.isRepeatingState();\r\n    }\r\n    resetGrid() {\r\n        this.setGrid(this.generateField(this.createGrid(this.width, this.height)));\r\n    }\r\n    getWidth() {\r\n        return this.width;\r\n    }\r\n    setWidth(newWidth) {\r\n        this.width = +newWidth;\r\n        const newrow = Array(+newWidth).fill(0);\r\n        const newGrid = this.getGrid().map(row => newrow.map((el, i) => row[i] || el));\r\n        this.setGrid(newGrid);\r\n    }\r\n    isRepeatingState() {\r\n        return this.prevGrids.some((grid) => {\r\n            if (grid.length === 0)\r\n                return false;\r\n            if (grid.length !== this.grid.length ||\r\n                grid[0].length !== this.grid[0].length) {\r\n                return false;\r\n            }\r\n            return (State.diff(grid, this.grid)).length === 0;\r\n        });\r\n    }\r\n    static diff(old, newGrid) {\r\n        const result = [];\r\n        for (let i = 0; i < old.length; i += 1) {\r\n            for (let j = 0; j < old[i].length; j += 1) {\r\n                if (old[i][j] !== newGrid[i][j]) {\r\n                    result.push({ y: i, x: j });\r\n                }\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n    getDiffOfNextState(fn) {\r\n        if (this.prevGrids.length > 0) {\r\n            this.isStable = this.isRepeatingState();\r\n            this.getRecentChanges().forEach(fn);\r\n        }\r\n    }\r\n    getRecentChanges() {\r\n        return State.diff(this.prevGrids[this.prevGrids.length - 1], this.grid);\r\n    }\r\n    getHeight() {\r\n        return this.height;\r\n    }\r\n    setHeight(newHeight) {\r\n        this.height = +newHeight;\r\n        const newGrid = Array(+newHeight).fill('');\r\n        const res = newGrid.map((row, i) => this.getGrid()[i] || Array(this.width).fill(0));\r\n        this.setGrid(res);\r\n    }\r\n    setRunning(val) {\r\n        this.running = val;\r\n    }\r\n    isRunning() {\r\n        return !!this.running;\r\n    }\r\n}\r\nexports.default = State;\r\n\n\n//# sourceURL=webpack:///./src/Model/State.ts?");

/***/ }),

/***/ "./src/Utilities/Messages.ts":
/*!***********************************!*\
  !*** ./src/Utilities/Messages.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Messages;\r\n(function (Messages) {\r\n    Messages[\"TOGGLE\"] = \"toggle\";\r\n    Messages[\"UPDATE\"] = \"update\";\r\n    Messages[\"REDRAW\"] = \"redraw\";\r\n    Messages[\"CONTROLS\"] = \"controls\";\r\n    Messages[\"DIFF\"] = \"diff\";\r\n    Messages[\"SPEED\"] = \"speedupdated\";\r\n    Messages[\"WIDTH\"] = \"width\";\r\n    Messages[\"HEIGHT\"] = \"height\";\r\n    Messages[\"RESET\"] = \"reset\";\r\n    Messages[\"RUNSTATUS\"] = \"running\";\r\n    Messages[\"GAMESTATUS\"] = \"gamestatus\";\r\n})(Messages || (Messages = {}));\r\nexports.default = Messages;\r\n\n\n//# sourceURL=webpack:///./src/Utilities/Messages.ts?");

/***/ }),

/***/ "./src/Utilities/Observer.ts":
/*!***********************************!*\
  !*** ./src/Utilities/Observer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Observer {\r\n    constructor() {\r\n        this.observers = [];\r\n    }\r\n    broadcast(type, data) {\r\n        this.observers.forEach(observer => observer.type === type && observer.handler(data));\r\n    }\r\n    addObserver(type, handler) {\r\n        this.observers.push({ type, handler });\r\n    }\r\n    removeObserver(handler) {\r\n        const index = this.observers.findIndex(obj => obj.handler === handler);\r\n        this.observers.splice(index, 1);\r\n    }\r\n}\r\nexports.default = Observer;\r\n\n\n//# sourceURL=webpack:///./src/Utilities/Observer.ts?");

/***/ }),

/***/ "./src/Utilities/utils.ts":
/*!********************************!*\
  !*** ./src/Utilities/utils.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst partial = (fn, ...args) => (...rest) => fn(...args, ...rest);\r\nexports.partial = partial;\r\nconst deepClone = array => JSON.parse(JSON.stringify(array));\r\nexports.deepClone = deepClone;\r\n\n\n//# sourceURL=webpack:///./src/Utilities/utils.ts?");

/***/ }),

/***/ "./src/View/Config.ts":
/*!****************************!*\
  !*** ./src/View/Config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Messages_1 = __webpack_require__(/*! ../Utilities/Messages */ \"./src/Utilities/Messages.ts\");\r\nconst config = selector => ({\r\n    selector,\r\n    controls: {\r\n        selector: `${selector}__controls`,\r\n        components: {\r\n            reset: {\r\n                selector: `${selector}__button--reset`,\r\n                title: 'Reset',\r\n            },\r\n            play: {\r\n                selector: `${selector}__button--run`,\r\n                title: 'Pause',\r\n                titlePaused: 'Run',\r\n            },\r\n            speed: {\r\n                selector: `${selector}__slider--speed`,\r\n                class: `${selector}__slider`,\r\n                modifier: '--speed',\r\n                auxSelector: '#speed-number',\r\n                title: 'Speed',\r\n                reporter: val => `${(1000 / val).toFixed(2)} renders/sec`,\r\n                minVal: 100,\r\n                maxVal: 2000,\r\n                initVal: 700,\r\n                message: Messages_1.default.SPEED,\r\n            },\r\n            width: {\r\n                selector: `${selector}__slider--width`,\r\n                auxSelector: '#width-number',\r\n                title: 'Width',\r\n                reporter: val => `${val} cells`,\r\n                minVal: 5,\r\n                maxVal: 100,\r\n                initVal: 10,\r\n                message: Messages_1.default.WIDTH,\r\n            },\r\n            height: {\r\n                selector: `${selector}__slider--height`,\r\n                auxSelector: '#height-number',\r\n                title: 'Height',\r\n                reporter: val => `${val} cells`,\r\n                minVal: 5,\r\n                maxVal: 100,\r\n                initVal: 10,\r\n                message: Messages_1.default.HEIGHT,\r\n            },\r\n            message: {\r\n                selector: `${selector}__slider--message`,\r\n                textStable: 'Game is stable',\r\n                textUnstable: 'Game is playing',\r\n            },\r\n        },\r\n    },\r\n    field: {\r\n        selector: `${selector}__field`,\r\n    },\r\n});\r\nexports.default = config;\r\n\n\n//# sourceURL=webpack:///./src/View/Config.ts?");

/***/ }),

/***/ "./src/View/Template.ts":
/*!******************************!*\
  !*** ./src/View/Template.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Template {\r\n    constructor(config) {\r\n        this.config = config;\r\n    }\r\n    makeTableCell(grid, x, y) {\r\n        const stateOfCell = (grid[y - 1][x - 1]) ? 'alive' : 'dead';\r\n        return (`<td class=\"js-cell cell--${stateOfCell}\" id=\"x${x}y${y}\" data-x=${x} data-y=${y}></td>` // tslint:disable-line\r\n        );\r\n    }\r\n    makeTableRow(grid, y) {\r\n        return (`<tr>\r\n        ${grid[y].map((cell, x) => this.makeTableCell(grid, x + 1, y + 1)).join('')}\r\n      </tr>`);\r\n    }\r\n    makeTable(grid) {\r\n        return ` \r\n    <table>\r\n      <tbody>\r\n        ${grid.map((row, y) => this.makeTableRow(grid, y)).join('')}\r\n      </tbody>\r\n    </table>\r\n    `;\r\n    }\r\n    button(opts) {\r\n        return `\r\n      <button class=\"${opts.selector.slice(1)}\">${opts.title}</button>\r\n    `;\r\n    }\r\n    selType(sel) {\r\n        switch (sel[0]) {\r\n            case '.':\r\n                return 'class';\r\n            case '#':\r\n                return 'id';\r\n            default:\r\n                return 'class';\r\n        }\r\n    }\r\n    renderField(grid = [[1]]) {\r\n        return `\r\n      <div class=\"${this.config.field.selector.slice(1)}\">\r\n        ${this.makeTable(grid)}\r\n      </div>\r\n      `;\r\n    }\r\n    slider(opts) {\r\n        const selTypeAux = this.selType(opts.auxSelector);\r\n        const selAux = opts.auxSelector.slice(1);\r\n        return `\r\n    <div>\r\n      <label>${opts.title || 'unknown'}: \r\n        <input \r\n          type=\"range\" \r\n          min=\"${opts.minVal}\" \r\n          max=\"${opts.maxVal}\" \r\n          ${this.selType(opts.selector)}=\"${opts.selector.slice(1)}\"\r\n        />\r\n      </label>  \r\n      <div class=\"subtitle ${selTypeAux === 'class' ? selAux : ''}\" \r\n           ${this.selType(opts.auxSelector)}=\"${selAux}\">\r\n      </div>\r\n    </div>\r\n    `;\r\n    }\r\n    message(opts) {\r\n        return `\r\n      <div class=${opts.selector.slice(1)}>${opts.textUnstable}</div>\r\n    `;\r\n    }\r\n    renderControls() {\r\n        return `\r\n      <div class=\"${this.config.controls.selector.slice(1)}\">\r\n        ${this.message(this.config.controls.components.message)}\r\n        <hr>        \r\n        ${this.button(this.config.controls.components.play)}\r\n        ${this.button(this.config.controls.components.reset)}\r\n        ${this.slider(this.config.controls.components.speed)}\r\n        ${this.slider(this.config.controls.components.width)}\r\n        ${this.slider(this.config.controls.components.height)}\r\n      </div>\r\n    `;\r\n    }\r\n}\r\nexports.default = Template;\r\n\n\n//# sourceURL=webpack:///./src/View/Template.ts?");

/***/ }),

/***/ "./src/View/View.ts":
/*!**************************!*\
  !*** ./src/View/View.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Messages_1 = __webpack_require__(/*! ../Utilities/Messages */ \"./src/Utilities/Messages.ts\");\r\nconst Config_1 = __webpack_require__(/*! ./Config */ \"./src/View/Config.ts\");\r\nconst Observer_1 = __webpack_require__(/*! ../Utilities/Observer */ \"./src/Utilities/Observer.ts\");\r\nconst Template_1 = __webpack_require__(/*! ./Template */ \"./src/View/Template.ts\");\r\nclass View extends Observer_1.default {\r\n    constructor(selector) {\r\n        super();\r\n        this.isStable = () => this.stable;\r\n        this.setStable = (arg) => this.stable = arg;\r\n        this.isRunning = () => this.running;\r\n        this.setRunning = arg => this.running = arg;\r\n        this.running = true;\r\n        this.speed = 700;\r\n        this.config = Config_1.default(selector);\r\n        this.template = new Template_1.default(this.config);\r\n        const gameContainer = document.querySelector(this.config.selector);\r\n        gameContainer.innerHTML = (this.template.renderControls()) + (this.template.renderField());\r\n        this.controlsContainer = gameContainer.querySelector(this.config.controls.selector);\r\n        this.fieldContainer = gameContainer.querySelector(this.config.field.selector);\r\n        this.statusMessage = gameContainer.querySelector(this.config.controls.components.message.selector);\r\n        this.addObserver(Messages_1.default.SPEED, (value) => {\r\n            this.speed = value;\r\n        });\r\n        this.addObserver(Messages_1.default.REDRAW, (grid) => {\r\n            this.fieldContainer.innerHTML = this.template.renderField(grid);\r\n        });\r\n        this.addObserver(Messages_1.default.GAMESTATUS, stability => this.setStable(stability));\r\n        this.initControls();\r\n        this.initField();\r\n    }\r\n    animate(fn, ...args) {\r\n        let lastCall = 0;\r\n        const that = this; // tslint:disable-line\r\n        return (function animatep(fnP, ...argsP) {\r\n            requestAnimationFrame((delta) => {\r\n                if (delta - lastCall > that.speed) {\r\n                    lastCall = delta;\r\n                    fnP(...argsP);\r\n                }\r\n                animatep(fnP, ...argsP);\r\n            });\r\n        }(fn, ...args));\r\n    }\r\n    draw() {\r\n        if (this.isRunning()) {\r\n            const messageConfig = this.config.controls.components.message;\r\n            this.statusMessage.innerHTML = messageConfig[this.isStable() ? 'textStable' : 'textUnstable'];\r\n            this.broadcast(Messages_1.default.UPDATE);\r\n        }\r\n    }\r\n    cellClickHandler(event) {\r\n        if (event.target.classList.contains('js-cell')) {\r\n            const data = event.target.dataset;\r\n            this.broadcast(Messages_1.default.TOGGLE, data);\r\n            console.log('click', data);\r\n            requestAnimationFrame(() => {\r\n                this.broadcast(Messages_1.default.DIFF);\r\n            });\r\n        }\r\n    }\r\n    resetHandler() {\r\n        this.broadcast(Messages_1.default.RESET);\r\n        this.broadcast(Messages_1.default.UPDATE);\r\n    }\r\n    speedHandler(event) {\r\n        this.broadcast(Messages_1.default.SPEED, event.target.value);\r\n    }\r\n    widthHandler(event) {\r\n        this.broadcast(Messages_1.default.WIDTH, event.target.value);\r\n        this.broadcast(Messages_1.default.UPDATE);\r\n    }\r\n    heightHandler(event) {\r\n        this.broadcast(Messages_1.default.HEIGHT, event.target.value);\r\n        this.broadcast(Messages_1.default.UPDATE);\r\n    }\r\n    playHandler() {\r\n        this.setRunning(!this.isRunning());\r\n        const playConfig = this.config.controls.components.play;\r\n        this.playButton.innerHTML = playConfig[this.isRunning() ? 'title' : 'titlePaused'];\r\n    }\r\n    setSliderEvents(container, opts, handler) {\r\n        const sel = container.querySelector(opts.selector);\r\n        sel.value = opts.initVal;\r\n        const auxSel = container.querySelector(opts.auxSelector);\r\n        this.addObserver(opts.message, (value) => {\r\n            auxSel.innerHTML = opts.reporter(value);\r\n            return auxSel.innerHTML;\r\n        });\r\n        this.broadcast(opts.message, sel.value);\r\n        sel.addEventListener('change', handler);\r\n    }\r\n    initControls() {\r\n        const components = this.config.controls.components;\r\n        this.setSliderEvents(this.controlsContainer, components.speed, this.speedHandler.bind(this));\r\n        this.setSliderEvents(this.controlsContainer, components.width, this.widthHandler.bind(this));\r\n        this.setSliderEvents(this.controlsContainer, components.height, this.heightHandler.bind(this));\r\n        this.playButton = this.controlsContainer.querySelector(components.play.selector);\r\n        this.playButton.addEventListener('click', this.playHandler.bind(this));\r\n        const resetBtn = this.controlsContainer.querySelector(components.reset.selector);\r\n        resetBtn.addEventListener('click', this.resetHandler.bind(this));\r\n    }\r\n    initField() {\r\n        this.broadcast(Messages_1.default.UPDATE);\r\n        this.fieldContainer.addEventListener('click', this.cellClickHandler.bind(this));\r\n        this.animate(this.draw.bind(this));\r\n    }\r\n}\r\nexports.default = View;\r\n\n\n//# sourceURL=webpack:///./src/View/View.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\r\nconst Model_1 = __webpack_require__(/*! ./Model/Model */ \"./src/Model/Model.ts\");\r\nconst View_1 = __webpack_require__(/*! ./View/View */ \"./src/View/View.ts\");\r\nconst Controller_1 = __webpack_require__(/*! ./Controller/Controller */ \"./src/Controller/Controller.ts\");\r\nnew Controller_1.default(new Model_1.default(), new View_1.default('.game'));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./styles.css */ \"./node_modules/css-loader/index.js!./src/styles.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });