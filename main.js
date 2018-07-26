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

/***/ "./node_modules/css-loader/index.js!./src/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/css-loader!./src/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"table{\\r\\n    border-collapse: collapse;\\r\\n    background:  #000000;\\r\\n  }\\r\\n  td{\\r\\n    box-sizing: border-box;\\r\\n    text-align: center;\\r\\n    width:15px;\\r\\n    height: 15px;\\r\\n    border: 1px dotted rgba(0,0,0,.2);\\r\\n    transition: background-color .6s;\\r\\n    will-change: background-color;\\r\\n  }\\r\\n  td:hover{\\r\\n    background: red;\\r\\n  }\\r\\n  .game-controls > *{\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n  label{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n  .subtitle {\\r\\n    font-style: italic;\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n  #speed{\\r\\n    direction: rtl;\\r\\n  }\\r\\n  td.alive{\\r\\n    background: #faa900;\\r\\n  }\\r\\n  button{\\r\\n    background: transparent;\\r\\n    border: 1px solid #003355;\\r\\n    padding:10px 0;\\r\\n    font-size: 1rem;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  button:hover{\\r\\n    background: #003355;\\r\\n    color: white;\\r\\n  }\\r\\n  .game {\\r\\n    display: grid;\\r\\n    grid-gap: 20px;\\r\\n    grid-template-columns: max-content minmax(500px, auto);\\r\\n    grid-auto-rows: auto;\\r\\n  }\\r\\n  .game-controls {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader");

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

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction animate(fn, delay) {\n  var lastCall = 0;\n\n  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  return function animatep(fnP, delayP) {\n    for (var _len2 = arguments.length, argsP = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n      argsP[_key2 - 2] = arguments[_key2];\n    }\n\n    requestAnimationFrame(function (delta) {\n      if (delta - lastCall > delayP()) {\n        lastCall = delta;\n        fnP.apply(undefined, argsP);\n      }\n      animatep.apply(undefined, [fnP, delay].concat(argsP));\n    });\n  }.apply(undefined, [fn, delay].concat(args));\n}\n\nfunction draw(model) {\n  if (model.isRunning()) {\n    model.broadcast('update');\n    // model.broadcast(\"redraw\")\n    model.broadcast('diff');\n  }\n}\n\nfunction cellClickHandler(model) {\n  return function h(e) {\n    if (e.target.classList.contains('js-cell')) {\n      var data = e.target.dataset;\n      model.broadcast('toggle', data);\n      requestAnimationFrame(function () {\n        model.broadcast('diff');\n      });\n    }\n  };\n}\n\nfunction resetHandler(model) {\n  return function h() {\n    model.resetGrid();\n    model.broadcast('redraw');\n  };\n}\n\nfunction speedHandler(model) {\n  return function h(e) {\n    model.setSpeed(e.target.value);\n    model.broadcast('Speed', e.target.value);\n  };\n}\n\nfunction widthHandler(model) {\n  return function h(e) {\n    model.setWidth(e.target.value);\n    model.broadcast('Width', e.target.value);\n    model.broadcast('redraw');\n  };\n}\n\nfunction heightHandler(model) {\n  return function h(e) {\n    model.setHeight(e.target.value);\n    model.broadcast('Height', e.target.value);\n    model.broadcast('redraw');\n  };\n}\n\nfunction playHandler(model) {\n  return function h(e) {\n    model.setRunning(!model.isRunning());\n    e.target.innerHTML = model.isRunning() ? 'Pause' : 'Run';\n  };\n}\n\nfunction setSliderEvents(model, container, opts) {\n  var sel = container.querySelector(opts.selector);\n  sel.value = opts.initVal;\n  var auxSel = container.querySelector(opts.auxSelector);\n  model.addObserver(opts.title, function (value) {\n    auxSel.innerHTML = opts.reporter(value);\n    return auxSel.innerHTML;\n  });\n  model.broadcast(opts.title, sel.value);\n  sel.addEventListener('change', opts.handler(model));\n}\n\nfunction initControls(_ref) {\n  var model = _ref.model,\n      container = _ref.container,\n      components = _ref.components;\n\n  model.broadcast('controls', components);\n\n  setSliderEvents(model, container, components.speed);\n  setSliderEvents(model, container, components.width);\n  setSliderEvents(model, container, components.height);\n\n  var playBtn = container.querySelector(components.play.selector);\n  playBtn.addEventListener('click', components.play.handler(model));\n\n  var resetBtn = container.querySelector(components.reset.selector);\n  resetBtn.addEventListener('click', components.reset.handler(model));\n}\n\nfunction initField(_ref2) {\n  var model = _ref2.model,\n      container = _ref2.container,\n      handler = _ref2.handler;\n\n  model.broadcast('redraw');\n  container.addEventListener('click', handler(model));\n  animate(draw, model.getSpeed, model);\n}\n\nexports.cellClickHandler = cellClickHandler;\nexports.resetHandler = resetHandler;\nexports.speedHandler = speedHandler;\nexports.widthHandler = widthHandler;\nexports.heightHandler = heightHandler;\nexports.playHandler = playHandler;\nexports.initField = initField;\nexports.initControls = initControls;\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/html-renderer.js":
/*!******************************!*\
  !*** ./src/html-renderer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.slider = exports.button = exports.makeTable = exports.makeTableRow = exports.makeTableCell = exports.renderControls = exports.renderField = undefined;\n\nvar _logic = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\nfunction makeTableCell(grid, x, y, hfac) {\n  return '<td class=\"' + hfac(x, y) + ' ' + ((0, _logic.getCell)(grid, x, y) ? 'alive' : 'dead') + '\" id=\"x' + x + 'y' + y + '\" data-x=' + x + ' data-y=' + y + '></td>';\n}\n\nfunction makeTableRow(grid, y, hfac) {\n  return '<tr>\\n      ' + grid[y].map(function (cell, x) {\n    return makeTableCell(grid, x + 1, y + 1, hfac);\n  }).join('') + '\\n    </tr>';\n}\n\nfunction makeTable(grid) {\n  var hfac = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {\n    return '';\n  };\n\n  return ' \\n  <table>\\n    <tbody>\\n      ' + grid.map(function (row, y) {\n    return makeTableRow(grid, y, hfac);\n  }).join('') + '\\n    </tbody>\\n  </table>\\n  ';\n}\n\nfunction button(opts) {\n  var selectorType = opts.selector[0] === '.' ? 'class' : 'id';\n  return '\\n    <button ' + selectorType + '=\"' + opts.selector.slice(1) + '\">' + opts.title + '</button>\\n  ';\n}\n\nfunction selType(sel) {\n  switch (sel[0]) {\n    case '.':\n      return 'class';\n    case '#':\n      return 'id';\n    default:\n      return 'class';\n  }\n}\n\nfunction renderField(grid, hfac) {\n  return '\\n    <div>\\n      ' + makeTable(grid, hfac) + '\\n    </div>\\n    ';\n}\nfunction slider(opts) {\n  var selTypeAux = selType(opts.auxSelector);\n  var selAux = opts.auxSelector.slice(1);\n  return '\\n  <div>\\n    <label>' + (opts.title || 'unknown') + ': \\n      <input \\n        type=\"range\" \\n        min=\"' + opts.minVal + '\" \\n        max=\"' + opts.maxVal + '\" \\n        ' + selType(opts.selector) + '=\"' + opts.selector.slice(1) + '\"\\n      />\\n    </label>  \\n    <div class=\"subtitle ' + (selTypeAux === 'class' ? selAux : '') + '\" ' + selType(opts.auxSelector) + '=\"' + selAux + '\"></div>\\n  </div>\\n    ';\n}\nfunction renderControls(_ref) {\n  var speed = _ref.speed,\n      play = _ref.play,\n      reset = _ref.reset,\n      width = _ref.width,\n      height = _ref.height;\n\n  return '\\n    ' + button(play) + '\\n    ' + button(reset) + '\\n    ' + slider(speed) + '\\n    ' + slider(width) + '\\n    ' + slider(height) + '\\n  ';\n}\n\nexports.renderField = renderField;\nexports.renderControls = renderControls;\nexports.makeTableCell = makeTableCell;\nexports.makeTableRow = makeTableRow;\nexports.makeTable = makeTable;\nexports.button = button;\nexports.slider = slider;\n\n//# sourceURL=webpack:///./src/html-renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nvar _htmlRenderer = __webpack_require__(/*! ./html-renderer */ \"./src/html-renderer.js\");\n\nvar _events = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\nvar _state = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\nfunction main(fieldWidth, fieldHeight) {\n  var gameContainer = document.querySelector('#game-field');\n  var model = (0, _state.modelInit)(fieldWidth, fieldHeight, 700, gameContainer);\n  var controlsContainer = document.querySelector('#game-controls');\n\n  model.addObserver('toggle', function (data) {\n    model.setGrid((0, _state.toggleCell)(model.getGrid(), data.x, data.y));\n  });\n\n  model.addObserver('update', function () {\n    model.setGrid((0, _state.updateState)(model.getGrid()));\n  });\n\n  model.addObserver('redraw', function () {\n    gameContainer.innerHTML = (0, _htmlRenderer.renderField)(model.getGrid(), function () {\n      return 'js-cell';\n    });\n  });\n\n  model.addObserver('diff', function () {\n    var modelDiff = model.diff();\n    modelDiff.forEach(function (diff) {\n      var element = gameContainer.querySelector('#x' + (diff.x + 1) + 'y' + (diff.y + 1));\n      element.classList.toggle('alive');\n    });\n  });\n\n  model.addObserver('controls', function (components) {\n    controlsContainer.innerHTML = (0, _htmlRenderer.renderControls)(components);\n  });\n  var config = {\n    model: model,\n    container: controlsContainer,\n    components: {\n      reset: {\n        selector: '#reset',\n        handler: _events.resetHandler,\n        title: 'Reset'\n      },\n      play: {\n        selector: '#run',\n        handler: _events.playHandler,\n        title: 'Pause'\n      },\n      speed: {\n        selector: '#speed',\n        auxSelector: '#speed-number',\n        title: 'Speed',\n        handler: _events.speedHandler,\n        reporter: function reporter(val) {\n          return (1000 / val).toFixed(2) + ' renders/sec';\n        },\n        minVal: 100,\n        maxVal: 2000,\n        initVal: model.getSpeed()\n      },\n      width: {\n        selector: '#width',\n        auxSelector: '#width-number',\n        title: 'Width',\n        handler: _events.widthHandler,\n        reporter: function reporter(val) {\n          return val + ' cells';\n        },\n        minVal: 10,\n        maxVal: 200,\n        initVal: model.getWidth()\n      },\n      height: {\n        selector: '#height',\n        auxSelector: '#height-number',\n        title: 'Height',\n        handler: _events.heightHandler,\n        reporter: function reporter(val) {\n          return val + ' cells';\n        },\n        minVal: 10,\n        maxVal: 200,\n        initVal: model.getHeight()\n      }\n    }\n  };\n\n  (0, _events.initControls)(config);\n\n  (0, _events.initField)({\n    model: model,\n    container: gameContainer,\n    handler: _events.cellClickHandler\n  });\n}\n\nmain(50, 50);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.toggleCell = exports.updateState = exports.killCell = exports.reviveCell = exports.getAliveNeighbours = exports.getCell = exports.gameUpdate = exports.partial = undefined;\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar gameUpdate = function gameUpdate(state) {\n  return (0, _utils.deepClone)(state);\n};\n\nvar getCell = function getCell(state, x, y) {\n  if (state[y - 1] === undefined || state[y - 1][x - 1] === undefined) return 0;\n  return +state[y - 1][x - 1];\n};\n\nvar getAliveNeighbours = function getAliveNeighbours(state, x, y) {\n  var cell = (0, _utils.partial)(getCell, state);\n  return cell(x - 1, y - 1) + cell(x, y - 1) + cell(x + 1, y - 1) + cell(x - 1, y) + cell(x + 1, y) + cell(x - 1, y + 1) + cell(x, y + 1) + cell(x + 1, y + 1);\n};\n\nvar changeCellState = function changeCellState(value, grid, x, y) {\n  var newGrid = (0, _utils.deepClone)(grid);\n  newGrid[y - 1][x - 1] = value;\n  return newGrid;\n};\n\nvar reviveCell = function reviveCell(grid, x, y) {\n  return changeCellState(1, grid, x, y);\n};\n\nvar killCell = function killCell(grid, x, y) {\n  return changeCellState(0, grid, x, y);\n};\n\nvar toggleCell = function toggleCell(grid, x, y) {\n  return getCell(grid, x, y) ? killCell(grid, x, y) : reviveCell(grid, x, y);\n};\n\nvar updateState = function updateState(grid) {\n  return grid.map(function (row, y) {\n    return row.map(function (el, x) {\n      var neigboursCount = getAliveNeighbours(grid, x + 1, y + 1);\n      var isAlive = getCell(grid, x + 1, y + 1) === 1;\n      if (isAlive) {\n        return neigboursCount > 3 || neigboursCount < 2 ? 0 : 1;\n      }\n      return neigboursCount === 3 ? 1 : 0;\n    });\n  });\n};\n\nexports.partial = _utils.partial;\nexports.gameUpdate = gameUpdate;\nexports.getCell = getCell;\nexports.getAliveNeighbours = getAliveNeighbours;\nexports.reviveCell = reviveCell;\nexports.killCell = killCell;\nexports.updateState = updateState;\nexports.toggleCell = toggleCell;\n\n//# sourceURL=webpack:///./src/logic.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _logic = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\nObject.defineProperty(exports, 'updateState', {\n  enumerable: true,\n  get: function get() {\n    return _logic.updateState;\n  }\n});\nObject.defineProperty(exports, 'toggleCell', {\n  enumerable: true,\n  get: function get() {\n    return _logic.toggleCell;\n  }\n});\n\n\nvar createGrid = function createGrid(x, y) {\n  return new Array(y).fill('').map(function () {\n    return new Array(x).fill(0);\n  });\n};\n\nvar generateField = function generateField(grid) {\n  return grid.map(function (row) {\n    return row.map(function () {\n      return Math.round(Math.random());\n    });\n  });\n};\n\nfunction modelInit(width, height, speed) {\n  var observers = [];\n  var xwidth = width;\n  var xheight = height;\n  var prevGrid = [];\n  var running = true;\n  var grid = [];\n  var xspeed = speed;\n  function broadcast(type, data) {\n    observers.forEach(function (observer) {\n      return observer.type === type && observer.handler(data);\n    });\n  }\n\n  function addObserver(type, handler) {\n    observers.push({ type: type, handler: handler });\n  }\n\n  function getGrid() {\n    return grid;\n  }\n\n  function setGrid(newGrid) {\n    prevGrid = grid;\n    grid = newGrid;\n    return grid;\n  }\n\n  var resetGrid = function resetGrid() {\n    return setGrid(generateField(createGrid(xwidth, xheight)));\n  };\n  grid = resetGrid();\n\n  var getWidth = function getWidth() {\n    return xwidth;\n  };\n  var setWidth = function setWidth(newWidth) {\n    xwidth = +newWidth;\n    var newrow = Array(+newWidth).fill(0);\n    var newGrid = getGrid().map(function (row) {\n      return newrow.map(function (el, i) {\n        return row[i] || el;\n      });\n    });\n    setGrid(newGrid);\n  };\n\n  function diffP(old, newGrid) {\n    var result = [];\n    for (var i = 0; i < old.length; i += 1) {\n      for (var j = 0; j < old[i].length; j += 1) {\n        if (old[i][j] !== newGrid[i][j]) {\n          result.push({ y: i, x: j });\n        }\n      }\n    }\n    return result;\n  }\n\n  function diff() {\n    return diffP(prevGrid, grid);\n  }\n\n  var getHeight = function getHeight() {\n    return xheight;\n  };\n  var setHeight = function setHeight(newHeight) {\n    xheight = +newHeight;\n    var newGrid = Array(+newHeight).fill('');\n    var res = newGrid.map(function (row, i) {\n      return getGrid()[i] || Array(width).fill(0);\n    });\n    setGrid(res);\n  };\n\n  function getSpeed() {\n    return xspeed;\n  }\n\n  function setSpeed(newSpeed) {\n    xspeed = newSpeed;\n  }\n\n  function setRunning(val) {\n    running = val;\n  }\n\n  function isRunning() {\n    return !!running;\n  }\n\n  return {\n    getGrid: getGrid,\n    setGrid: setGrid,\n    resetGrid: resetGrid,\n    getSpeed: getSpeed,\n    setSpeed: setSpeed,\n    getWidth: getWidth,\n    setWidth: setWidth,\n    getHeight: getHeight,\n    setHeight: setHeight,\n    addObserver: addObserver,\n    broadcast: broadcast,\n    diff: diff,\n    setRunning: setRunning,\n    isRunning: isRunning\n  };\n}\n\nexports.modelInit = modelInit;\nexports.generateField = generateField;\nexports.createGrid = createGrid;\n\n//# sourceURL=webpack:///./src/state.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./styles.css */ \"./node_modules/css-loader/index.js!./src/styles.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles.css?");

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