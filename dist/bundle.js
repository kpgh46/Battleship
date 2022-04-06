/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"h1 {\\n\\ttext-align: center;\\n}\\n\\n#top {\\n\\theight: 120px;\\n\\twidth: 100%;\\n\\tborder: 1px solid black;\\n}\\n\\n#middle {\\n\\tmargin-top: 50px;\\n\\theight: 470px;\\n\\twidth: 900px;\\n\\t/* border: 1px solid green; */\\n\\tmargin-left: 5%;\\n\\tmargin-right: 5%;\\n}\\n\\n#player-board {\\n\\theight: 400px;\\n\\twidth: 500px;\\n\\t/* border: 1px solid green; */\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n}\\n\\n.block {\\n\\theight: 45px;\\n\\twidth: 45px;\\n\\tborder: 1px solid red;\\n}\\n\\n.placement {\\n\\tposition: absolute;\\n\\ttop: 50%;\\n\\tleft: 50%;\\n\\tmargin-right: -50%;\\n\\ttransform: translate(-50%, -50%);\\n\\tborder: 1px solid black;\\n\\theight: 45px;\\n\\twidth: 260px;\\n\\tborder-radius: 10px;\\n\\tbackground-color: lightsteelblue;\\n\\tvisibility: visible;\\n}\\n\\n.hidden {\\n\\tvisibility: hidden;\\n}\\n\\ninput {\\n\\twidth: 20px;\\n}\\n\\n.on {\\n\\tcolor: red;\\n}\\n\\nform {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tpadding: 20px;\\n}\\n\\n#name-container {\\n\\tjustify-content: left;\\n}\\n\\nbutton {\\n\\talign-self: center;\\n\\tmargin-top: 10px;\\n}\\n\\n.hit {\\n\\tbackground-color: green;\\n\\tborder: 1px solid blue;\\n}\\n\\n.miss {\\n\\tbackground-color: yellow;\\n\\tborder: 1px solid purple;\\n}\\n\\n.ship {\\n\\tbackground-color: grey;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboards\": () => (/* binding */ gameboards)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\nlet newShip = __webpack_require__(/*! ./shipConstructor */ \"./src/shipConstructor.js\");\n\n\nlet gameboards = (name) => {\n\tlet boardName = name;\n\tlet shipCount = 0;\n\n\tlet board = [\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t];\n\n\tlet shipTypes = [\n\t\t{\n\t\t\tname: \"carrier\",\n\t\t\tlen: 5,\n\t\t\tx: 0,\n\t\t\ty: 1,\n\t\t},\n\t\t{\n\t\t\tname: \"battleship\",\n\t\t\tlen: 4,\n\t\t\tx: 2,\n\t\t\ty: 6,\n\t\t},\n\t\t{\n\t\t\tname: \"cruiser\",\n\t\t\tlen: 3,\n\t\t\tx: 4,\n\t\t\ty: 4,\n\t\t},\n\t\t{\n\t\t\tname: \"submarine\",\n\t\t\tlen: 3,\n\t\t\tx: 7,\n\t\t\ty: 0,\n\t\t},\n\t\t{\n\t\t\tname: \"destroyer\",\n\t\t\tlen: 2,\n\t\t\tx: 8,\n\t\t\ty: 6,\n\t\t},\n\t];\n\n\tlet shipsNotPlaced = [];\n\tlet shipsInPlay = [];\n\tlet shipsOutPlay = [];\n\tlet horizontal = true;\n\n\tlet toggleDirection = () => {\n\t\tdocument.querySelector(\".direction\").addEventListener(\"click\", (e) => {\n\t\t\te.target.innerHTML === \"Vertical\"\n\t\t\t\t? (e.target.innerHTML = \"Horizontal\")\n\t\t\t\t: (e.target.innerHTML = \"Vertical\");\n\n\t\t\thorizontal = !horizontal;\n\t\t});\n\t};\n\n\t//create ships and add to \"shipsInPlay\"\n\tlet generateShips = (typesOfShips) => {\n\t\ttypesOfShips.forEach((shiptype) => {\n\t\t\tlet ship = newShip(\n\t\t\t\tshiptype.len,\n\t\t\t\tshiptype.name,\n\t\t\t\tshiptype.x,\n\t\t\t\tshiptype.y\n\t\t\t);\n\t\t\tshipsNotPlaced.push(ship);\n\t\t});\n\t};\n\n\tlet createGameShips = () => generateShips(shipTypes);\n\n\t//check this:\n\tlet checkGameOver = () => {\n\t\tif (shipsInPlay.length === shipsOutPlay.length) {\n\t\t\tconsole.log(\"game over\");\n\t\t}\n\t};\n\n\tlet removeFromPlay = (index) => {\n\t\tshipsOutPlay.push(shipsInPlay[index]);\n\t};\n\n\t//revieve attack and evaluate if hit\n\tlet receieveAttack = (x, y) => {\n\t\tlet attack = board[x][y];\n\n\t\tif (Number.isInteger(attack)) {\n\t\t\tboard[x][y] = \"X\";\n\t\t\tshipsInPlay[attack].hit();\n\n\t\t\tif (shipsInPlay[attack].isSunk()) {\n\t\t\t\tremoveFromPlay(attack);\n\t\t\t\tcheckGameOver();\n\t\t\t}\n\t\t} else {\n\t\t\tboard[x][y] = \"O\";\n\t\t}\n\t};\n\n\t//updates coords from GameSetup UI:\n\tlet updateCoordinates = (xcoord, ycoord) => {\n\t\tshipsNotPlaced[0].x = xcoord;\n\t\tshipsNotPlaced[0].y = ycoord;\n\t};\n\n\t//validates coordinates do not go exceed board limit\n\tlet validateLength = (coordinate, len) => {\n\t\tlet max = 10 - len;\n\t\tif (coordinate > max) {\n\t\t\treturn false;\n\t\t} else {\n\t\t\treturn true;\n\t\t}\n\t};\n\n\t//validates ship coords do not overlap another ship\n\tlet validateOverlap = (x, y, len) => {\n\t\tlet arr = [];\n\n\t\tif (horizontal) {\n\t\t\tfor (let i = 0; i < len; i++) {\n\t\t\t\tarr.push(board[x][y + i]);\n\t\t\t}\n\t\t}\n\n\t\tif (!horizontal) {\n\t\t\tfor (let i = 0; i < len; i++) {\n\t\t\t\tarr.push(board[x + i][y]);\n\t\t\t}\n\t\t}\n\n\t\tlet result = arr.every((space) => {\n\t\t\treturn space === \" \";\n\t\t});\n\n\t\treturn result;\n\t};\n\n\t//places ships on board and adds to \"ShipsInPlay\"\n\tlet placeShips = () => {\n\t\tlet ship = shipsNotPlaced[0];\n\t\tlet x = parseInt(ship.x);\n\t\tlet y = parseInt(ship.y);\n\t\tlet len = shipsNotPlaced[0].len;\n\t\tlet validateHorizontal = validateLength(y, len);\n\t\tlet validateVertical = validateLength(x, len);\n\n\t\t//if horizontal, check if y coord is too large OR if it overlaps.  If either return false, exit the function.\n\t\tif (horizontal) {\n\t\t\tif (!validateHorizontal) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\tif (!horizontal) {\n\t\t\tif (!validateVertical) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\t\t//validate the current ship coordinates do not extend into another ship already on the board\n\t\tif (!validateOverlap(x, y, len)) {\n\t\t\treturn;\n\t\t}\n\t\t//if above is validated, place ship on board and hide the coordinate html box\n\t\tfor (let i = 0; i < ship.len; i++) {\n\t\t\tif (horizontal) {\n\t\t\t\tboard[x][y + i] = shipCount;\n\t\t\t\tdocument.getElementById(`${ship.name}`).classList.add(\"hidden\");\n\t\t\t}\n\t\t\tif (!horizontal) {\n\t\t\t\tboard[x + i][y] = shipCount;\n\t\t\t\tdocument.getElementById(`${ship.name}`).classList.add(\"hidden\");\n\t\t\t}\n\t\t}\n\n\t\t//once ship is placed on board, remove from shipsNotPlaced and add too shipsInPlay. increment index (shipCount++)\n\t\tshipsNotPlaced.splice(0, 1);\n\t\tshipsInPlay.push(ship);\n\t\tshipCount++;\n\t};\n\n\tcreateGameShips();\n\ttoggleDirection();\n\n\treturn {\n\t\tboard,\n\t\treceieveAttack,\n\t\tcreateGameShips,\n\t\tboardName,\n\t\tshipTypes,\n\t\tplaceShips,\n\t\tshipsNotPlaced,\n\t\tshipsInPlay,\n\t\tupdateCoordinates,\n\t\ttoggleDirection,\n\t};\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _setupGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setupGame */ \"./src/setupGame.js\");\n\nlet newShip = __webpack_require__(/*! ./shipConstructor */ \"./src/shipConstructor.js\");\n\n\n\n\n(0,_setupGame__WEBPACK_IMPORTED_MODULE_3__.gameSetup)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computer\": () => (/* binding */ computer),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nlet player = (name) => {\n\tlet attack = (x, y) => {\n\t\tif (_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboards.board[x][y] === \"X\" || _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboards.board[x][y] === \"O\") {\n\t\t\tconsole.log(\"this space is already taken\");\n\t\t} else {\n\t\t\t_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboards.receieveAttack(x, y);\n\t\t}\n\t};\n\n\treturn { attack, name };\n};\n\nlet computer = () => {\n\tlet attack = (x) => {\n\t\tx = Math.floor(Math.random() * 11);\n\n\t\tif (_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboards.board[x][y] === \"X\" || _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboards.board[x][y] === \"O\") {\n\t\t\tconsole.log(\"this space is already taken\");\n\t\t} else {\n\t\t\t_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboards.receieveAttack(x, x);\n\t\t}\n\t};\n\n\treturn { attack };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/setupGame.js":
/*!**************************!*\
  !*** ./src/setupGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameSetup\": () => (/* binding */ gameSetup)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\nlet gameSetup = () => {\n\tlet submitCoordsArr = [\n\t\t\"carrier\",\n\t\t\"battleship\",\n\t\t// \"submarine\",\n\t\t// \"cruiser\",\n\t\t// \"destroyer\",\n\t];\n\n\tlet playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(\"Kevin\");\n\tlet computerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__.computer)();\n\n\tlet playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboards)(playerOne.name);\n\n\tlet readyToPlay = () => {\n\t\tif ((playerGameBoard.shipsInPlay.length = 2)) {\n\t\t\tconsole.log(\"ready!\");\n\t\t}\n\t};\n\n\tsubmitCoordsArr.forEach((ship) => {\n\t\tlet submitButton = document.getElementById(`submit${ship}`);\n\t\tlet shipX = document.getElementById(`${ship}x`);\n\t\tlet shipY = document.getElementById(`${ship}y`);\n\n\t\tsubmitButton.addEventListener(\"click\", () => {\n\t\t\tplayerGameBoard.updateCoordinates(\n\t\t\t\tparseInt(shipX.value),\n\t\t\t\tparseInt(shipY.value)\n\t\t\t);\n\t\t\tplayerGameBoard.placeShips();\n\n\t\t\tconsole.log(playerGameBoard);\n\t\t\tconsole.log(playerGameBoard.shipsNotPlaced);\n\t\t\tconsole.log(playerGameBoard.shipsInPlay.length);\n\t\t});\n\t});\n\n\treadyToPlay();\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/setupGame.js?");

/***/ }),

/***/ "./src/shipConstructor.js":
/*!********************************!*\
  !*** ./src/shipConstructor.js ***!
  \********************************/
/***/ ((module) => {

eval("let newShip = (numberSize, name, x, y) => {\n\tlet len = numberSize;\n\tlet numberHit = 0;\n\n\tlet isSunk = () => {\n\t\tif (numberHit === len) {\n\t\t\tconsole.log(`${name} has sunk!`);\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tlet hit = () => {\n\t\tnumberHit++;\n\t\tisSunk();\n\t};\n\n\treturn { len, hit, name, isSunk, x, y };\n};\n\nmodule.exports = newShip;\n\n\n//# sourceURL=webpack://battleship/./src/shipConstructor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;