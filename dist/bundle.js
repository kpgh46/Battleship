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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n\\twidth: 1100px;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\t/* border: 1px solid purple; */\\n\\theight: 1000px;\\n\\tmargin-left: 2%;\\n\\tposition: relative;\\n\\tborder: 1px solid black;\\n\\talign-items: center;\\n\\tborder-radius: 10px;\\n}\\n\\nh1 {\\n\\ttext-align: center;\\n}\\n\\n#top {\\n\\theight: 100px;\\n\\twidth: 1000px;\\n\\t/* border: 1px solid black; */\\n\\ttext-align: center;\\n}\\n\\n#top .direction {\\n\\tmargin-top: 0px;\\n}\\n\\n#middle {\\n\\tmargin-top: 50px;\\n\\theight: 670px;\\n\\twidth: 1090px;\\n\\t/* border: 1px solid green; */\\n\\n\\t/* border: 1px solid green; */\\n}\\n\\n#board {\\n\\theight: 500px;\\n\\twidth: 1000px;\\n\\tdisplay: flex;\\n\\tmargin-left: 40px;\\n}\\n\\n#horizontal-numbers {\\n\\theight: 20px;\\n\\twidth: 500px;\\n\\tdisplay: flex;\\n\\t/* margin-left: 24px; */\\n\\t/* justify-content: space-around; */\\n}\\n\\n#vertical-numbers {\\n\\tposition: absolute;\\n\\t/* border: 1px solid green; */\\n\\twidth: fit-content;\\n\\twidth: 20px;\\n\\tmargin-left: 500px;\\n}\\n\\n#horizontal-numbers .block {\\n\\tborder-color: white;\\n\\theight: fit-content;\\n\\tjustify-content: center;\\n\\tcolor: lightslategray;\\n\\t/* border-color: green; */\\n}\\n\\n#vertical-numbers .block {\\n\\talign-items: center;\\n\\tjustify-content: left;\\n\\tborder-color: white;\\n\\twidth: fit-content;\\n\\tcolor: lightslategray;\\n}\\n\\n#name-tags {\\n\\theight: 55px;\\n\\twidth: 1000px;\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\tmargin-bottom: 10px;\\n\\tborder: 1px solid green;\\n\\talign-items: flex-end;\\n}\\n\\ndiv#name-tags {\\n\\tcolor: blue;\\n}\\n\\n#player-board {\\n\\theight: 400px;\\n\\twidth: 500px;\\n\\t/* border: 1px solid green; */\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n}\\n\\n#computer-board {\\n\\theight: 400px;\\n\\twidth: 500px;\\n\\t/* border: 1px solid green; */\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tmargin-left: 20px;\\n}\\n\\n.block {\\n\\theight: 48px;\\n\\twidth: 47px;\\n\\tborder: 1px solid black;\\n\\tdisplay: flex;\\n}\\n\\n.placement {\\n\\tposition: absolute;\\n\\ttop: 13%;\\n\\tleft: 50%;\\n\\tmargin-right: -50%;\\n\\ttransform: translate(-50%, -50%);\\n\\tborder: 1px solid black;\\n\\theight: 45px;\\n\\twidth: 260px;\\n\\tborder-radius: 10px;\\n\\tbackground-color: lightsteelblue;\\n\\ttext-align: center;\\n\\tvisibility: visible;\\n\\tpadding-top: 6px;\\n}\\n\\n.hidden {\\n\\tvisibility: hidden;\\n}\\n\\ninput {\\n\\twidth: 20px;\\n}\\n\\n.on {\\n\\tcolor: red;\\n}\\n\\nform {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tpadding: 20px;\\n}\\n\\n#name-container {\\n\\tjustify-content: left;\\n}\\n\\nbutton {\\n\\talign-self: center;\\n\\tmargin-top: 10px;\\n}\\n\\n#submitcarrier {\\n\\tborder-width: 1px;\\n}\\n\\n.hit {\\n\\tbackground-color: green;\\n\\tborder: 1px solid blue;\\n}\\n\\n.miss {\\n\\tbackground-color: yellow;\\n\\tborder: 1px solid purple;\\n}\\n\\n.ship {\\n\\tbackground-color: grey;\\n}\\n\\n.ship[data-name=\\\"computer\\\"] {\\n\\tbackground-color: blue;\\n}\\n\\n#feedback {\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\tmargin-left: 20px;\\n\\talign-items: center;\\n}\\n\\n#feedback #error {\\n\\tcolor: red;\\n}\\n\\n#gameover {\\n\\theight: 80px;\\n\\twidth: 220px;\\n\\tborder: 1px solid black;\\n\\tbackground-color: lightsteelblue;\\n\\tborder-radius: 10px;\\n\\tdisplay: flex;\\n\\tjustify-content: flex-end;\\n\\ttext-align: center;\\n\\tflex-direction: column;\\n\\tvisibility: hidden;\\n}\\n\\n#confirmgameover {\\n\\tmargin-bottom: 10px;\\n}\\n\\n.visible {\\n\\tvisibility: visible;\\n}\\n\\n.placement-feedback {\\n\\tcolor: red;\\n\\tfont-size: small;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?../../node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nlet dom = (userBoard) => {\n\tlet gameboard = document.querySelector(`#${userBoard.name}-board`);\n\n\tlet renderBoard = () => {\n\t\tshowSunkShips();\n\t\tif (gameboard != null) {\n\t\t\tclearBoard(gameboard);\n\t\t}\n\n\t\tlet count = 0;\n\n\t\tuserBoard.board.forEach((cell) => {\n\t\t\tcell.forEach((item) => {\n\t\t\t\tlet block = document.createElement(\"div\");\n\t\t\t\tblock.classList.add(\"block\");\n\t\t\t\tif (count < 10) {\n\t\t\t\t\tblock.dataset.id = count.toString().padStart(2, \"0\");\n\t\t\t\t\tblock.dataset.name = userBoard.name;\n\t\t\t\t\t// block.textContent = count;\n\t\t\t\t\tcount += 1;\n\t\t\t\t} else {\n\t\t\t\t\tblock.dataset.id = count.toString();\n\t\t\t\t\tblock.dataset.name = userBoard.name;\n\t\t\t\t\tcount += 1;\n\t\t\t\t}\n\n\t\t\t\tif (Number.isInteger(item)) {\n\t\t\t\t\tblock.classList.add(\"ship\");\n\t\t\t\t}\n\n\t\t\t\tif (item === \"X\") {\n\t\t\t\t\tblock.classList.add(\"hit\");\n\t\t\t\t}\n\t\t\t\tif (item === \"O\") {\n\t\t\t\t\tblock.classList.add(\"miss\");\n\t\t\t\t}\n\n\t\t\t\tgameboard.appendChild(block);\n\t\t\t});\n\t\t});\n\t};\n\n\tlet capitalize = (string) => {\n\t\treturn string.charAt(0).toUpperCase() + string.slice(1);\n\t};\n\n\tlet showSunkShips = () => {\n\t\tlet sunkShips = userBoard.shipsOutPlay;\n\t\tlet container = document.getElementById(`${userBoard.name}-sunk-ships`);\n\n\t\tclearBoard(container);\n\n\t\tsunkShips.forEach((ship) => {\n\t\t\tlet div = document.createElement(\"div\");\n\t\t\tlet name = capitalize(ship.name);\n\t\t\tdiv.textContent = name;\n\t\t\tcontainer.appendChild(div);\n\t\t});\n\t};\n\n\tlet clearBoard = (section) => {\n\t\twhile (section.firstChild) {\n\t\t\tsection.removeChild(section.firstChild);\n\t\t}\n\t};\n\n\treturn { renderBoard };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboards\": () => (/* binding */ gameboards)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\nlet newShip = __webpack_require__(/*! ./shipConstructor */ \"./src/shipConstructor.js\");\n\n\nlet gameboards = (name) => {\n\tlet shipCount = 0;\n\n\tlet board = [\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t\t[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \"],\n\t];\n\n\tlet shipTypes = [\n\t\t{\n\t\t\tname: \"carrier\",\n\t\t\tlen: 5,\n\t\t\tx: 0,\n\t\t\ty: 1,\n\t\t},\n\t\t{\n\t\t\tname: \"battleship\",\n\t\t\tlen: 4,\n\t\t\tx: 2,\n\t\t\ty: 6,\n\t\t},\n\t\t{\n\t\t\tname: \"cruiser\",\n\t\t\tlen: 3,\n\t\t\tx: 4,\n\t\t\ty: 4,\n\t\t},\n\t\t{\n\t\t\tname: \"submarine\",\n\t\t\tlen: 3,\n\t\t\tx: 7,\n\t\t\ty: 0,\n\t\t},\n\t\t{\n\t\t\tname: \"destroyer\",\n\t\t\tlen: 2,\n\t\t\tx: 8,\n\t\t\ty: 6,\n\t\t},\n\t];\n\n\tlet shipsNotPlaced = [];\n\tlet shipsInPlay = [];\n\tlet shipsOutPlay = [];\n\tlet horizontal = true;\n\n\tlet toggleDirection = () => {\n\t\tdocument.querySelector(\".direction\").addEventListener(\"click\", (e) => {\n\t\t\te.target.innerHTML === \"Vertical\"\n\t\t\t\t? (e.target.innerHTML = \"Horizontal\")\n\t\t\t\t: (e.target.innerHTML = \"Vertical\");\n\n\t\t\thorizontal = !horizontal;\n\t\t\tconsole.log(horizontal);\n\t\t});\n\t};\n\n\t//create ships and add to \"shipsNotPlaced\"\n\tlet generateShips = (typesOfShips) => {\n\t\ttypesOfShips.forEach((shiptype) => {\n\t\t\tlet ship = newShip(\n\t\t\t\tshiptype.len,\n\t\t\t\tshiptype.name,\n\t\t\t\tshiptype.x,\n\t\t\t\tshiptype.y\n\t\t\t);\n\t\t\tshipsNotPlaced.push(ship);\n\t\t});\n\t};\n\n\tlet createGameShips = () => generateShips(shipTypes);\n\n\t//check this:\n\tlet checkGameOver = () => {\n\t\tif (shipsInPlay.length === shipsOutPlay.length) {\n\t\t\treturn true;\n\t\t}\n\t};\n\n\tlet removeFromPlay = (index) => {\n\t\tshipsOutPlay.push(shipsInPlay[index]);\n\t};\n\n\tlet gameOver = () => {\n\t\tlet winningDiv = document.querySelector(\"#gameover\");\n\t\tlet message = document.querySelector(\"#winning-message\");\n\t\twinningDiv.style.visibility = \"visible\";\n\n\t\tmessage.innerHTML = `All of ${name}'s ships are sunk!`;\n\t};\n\n\t//revieve attack and evaluate if hit\n\tlet receieveAttack = (x, y) => {\n\t\tlet attack = board[x][y];\n\n\t\tif (Number.isInteger(attack)) {\n\t\t\tboard[x][y] = \"X\";\n\t\t\tshipsInPlay[attack].hit();\n\n\t\t\tif (shipsInPlay[attack].isSunk()) {\n\t\t\t\tremoveFromPlay(attack);\n\t\t\t\tif (checkGameOver()) {\n\t\t\t\t\tgameOver();\n\t\t\t\t}\n\t\t\t}\n\t\t} else {\n\t\t\tboard[x][y] = \"O\";\n\t\t}\n\t};\n\n\t//updates coords from GameSetup UI:\n\tlet updateCoordinates = (xcoord, ycoord) => {\n\t\tshipsNotPlaced[0].x = xcoord;\n\t\tshipsNotPlaced[0].y = ycoord;\n\t};\n\n\t//validates coordinates do not go exceed board limit\n\tlet validateLength = (coordinate, len) => {\n\t\tlet max = 10 - len;\n\t\tif (coordinate > max) {\n\t\t\treturn false;\n\t\t} else {\n\t\t\treturn true;\n\t\t}\n\t};\n\n\tlet invalidLengthFeedback = (name) => {\n\t\tlet invalid = document.querySelector(`#${name} .placement-feedback`);\n\t\tinvalid.textContent = \"Ship exceeds board. Enter new coordinates\";\n\n\t\tsetTimeout(() => {\n\t\t\tinvalid.textContent = \" \";\n\t\t}, 4000);\n\t};\n\n\tlet invalidOverlapFeedback = (name) => {\n\t\tlet invalid = document.querySelector(`#${name} .placement-feedback`);\n\t\tinvalid.textContent = \"Overlaps another ship.  Enter new coordinates\";\n\n\t\tsetTimeout(() => {\n\t\t\tinvalid.textContent = \" \";\n\t\t}, 4000);\n\t};\n\n\t//validates ship coords do not overlap another ship\n\tlet validateOverlap = (x, y, len) => {\n\t\tlet arr = [];\n\n\t\tif (horizontal) {\n\t\t\tfor (let i = 0; i < len; i++) {\n\t\t\t\tarr.push(board[x][y + i]);\n\t\t\t}\n\t\t}\n\n\t\tif (!horizontal) {\n\t\t\tfor (let i = 0; i < len; i++) {\n\t\t\t\tarr.push(board[x + i][y]);\n\t\t\t}\n\t\t}\n\n\t\tlet result = arr.every((space) => {\n\t\t\treturn space === \" \";\n\t\t});\n\n\t\treturn result;\n\t};\n\n\t//places ships on board and adds to \"ShipsInPlay\"\n\tlet placeShips = () => {\n\t\tlet ship = shipsNotPlaced[0];\n\t\tlet x = parseInt(ship.x);\n\t\tlet y = parseInt(ship.y);\n\t\tlet len = shipsNotPlaced[0].len;\n\t\tlet validateHorizontal = validateLength(y, len);\n\t\tlet validateVertical = validateLength(x, len);\n\t\tlet random = Math.round(Math.random());\n\n\t\tif (name === \"computer\") {\n\t\t\tif (random === 1) {\n\t\t\t\thorizontal = true;\n\t\t\t}\n\n\t\t\tif (random === 0) {\n\t\t\t\thorizontal = false;\n\t\t\t}\n\t\t}\n\n\t\t//if horizontal, check if y coord is too large OR if it overlaps.  If either return false, exit the function.\n\t\tif (horizontal) {\n\t\t\tif (!validateHorizontal) {\n\t\t\t\tinvalidLengthFeedback(ship.name);\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\tif (!horizontal) {\n\t\t\tif (!validateVertical) {\n\t\t\t\tinvalidLengthFeedback(ship.name);\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\t\t//validate the current ship coordinates do not extend into another ship already on the board\n\t\tif (!validateOverlap(x, y, len)) {\n\t\t\tinvalidOverlapFeedback(ship.name);\n\t\t\treturn;\n\t\t}\n\t\t//if above is validated, place ship on board and hide the coordinate html box\n\t\tfor (let i = 0; i < ship.len; i++) {\n\t\t\tif (horizontal) {\n\t\t\t\tboard[x][y + i] = shipCount;\n\t\t\t\tif (document.getElementById(`${ship.name}`) != null) {\n\t\t\t\t\tdocument\n\t\t\t\t\t\t.getElementById(`${ship.name}`)\n\t\t\t\t\t\t.classList.add(\"hidden\");\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (!horizontal) {\n\t\t\t\tboard[x + i][y] = shipCount;\n\t\t\t\tif (document.getElementById(`${ship.name}`) != null) {\n\t\t\t\t\tdocument\n\t\t\t\t\t\t.getElementById(`${ship.name}`)\n\t\t\t\t\t\t.classList.add(\"hidden\");\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t//once ship is placed on board, remove from shipsNotPlaced and add too shipsInPlay. increment index (shipCount++)\n\t\tshipsNotPlaced.splice(0, 1);\n\t\tshipsInPlay.push(ship);\n\t\tshipCount++;\n\t};\n\n\tcreateGameShips();\n\ttoggleDirection();\n\n\treturn {\n\t\tboard,\n\t\treceieveAttack,\n\t\tplaceShips,\n\t\tshipsNotPlaced,\n\t\tshipsInPlay,\n\t\tshipsOutPlay,\n\t\tupdateCoordinates,\n\t\ttoggleDirection,\n\t\tname,\n\t};\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _setupGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setupGame */ \"./src/setupGame.js\");\n\nlet newShip = __webpack_require__(/*! ./shipConstructor */ \"./src/shipConstructor.js\");\n\n\n\n\n(0,_setupGame__WEBPACK_IMPORTED_MODULE_3__.playerSetup)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computer\": () => (/* binding */ computer),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nlet player = (name, enemyBoard) => {\n\tlet attack = (x, y) => {\n\t\tif (enemyBoard.board[x][y] === \"X\" || enemyBoard.board[x][y] === \"O\") {\n\t\t\tdocument.getElementById(\"error\").textContent =\n\t\t\t\t\"Space is already taken\";\n\t\t\tsetTimeout(() => {\n\t\t\t\tdocument.getElementById(\"error\").textContent = \" \";\n\t\t\t}, 1250);\n\n\t\t\tattack();\n\t\t} else {\n\t\t\tenemyBoard.receieveAttack(x, y);\n\t\t}\n\t};\n\n\treturn { attack, name };\n};\n\nlet computer = (name, enemyBoard) => {\n\tlet attack = () => {\n\t\tlet x = Math.floor(Math.random() * 10);\n\t\tlet y = Math.floor(Math.random() * 10);\n\n\t\tif (enemyBoard.board[x][y] === \"X\" || enemyBoard.board[x][y] === \"O\") {\n\t\t\tconsole.log(\"this space is already taken\");\n\t\t} else {\n\t\t\tenemyBoard.receieveAttack(x, y);\n\t\t}\n\t};\n\n\treturn { name, attack };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/setupGame.js":
/*!**************************!*\
  !*** ./src/setupGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerSetup\": () => (/* binding */ playerSetup)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\nlet playerSetup = () => {\n\tlet submitCoordsArr = [\n\t\t\"carrier\",\n\t\t\"battleship\",\n\t\t\"submarine\",\n\t\t\"cruiser\",\n\t\t\"destroyer\",\n\t];\n\n\t//initiate player gameboard\n\tlet playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboards)(\"player\");\n\t(0,_dom__WEBPACK_IMPORTED_MODULE_2__.dom)(playerGameBoard).renderBoard();\n\n\tlet ifAllShipsPlaced = () => {\n\t\tif (playerGameBoard.shipsInPlay.length === submitCoordsArr.length) {\n\t\t\tconsole.log(\"ready!\");\n\t\t\tcomputerSetup(playerGameBoard);\n\t\t}\n\t};\n\n\t//event listeners to capture player coordinates.\n\tsubmitCoordsArr.forEach((ship) => {\n\t\tlet submitButton = document.getElementById(`submit${ship}`);\n\t\tlet shipX = document.getElementById(`${ship}x`);\n\t\tlet shipY = document.getElementById(`${ship}y`);\n\n\t\tsubmitButton.addEventListener(\"click\", () => {\n\t\t\tplayerGameBoard.updateCoordinates(\n\t\t\t\tparseInt(shipX.value),\n\t\t\t\tparseInt(shipY.value)\n\t\t\t);\n\t\t\tplayerGameBoard.placeShips();\n\t\t\tconsole.log(playerGameBoard.horizontal);\n\t\t\t(0,_dom__WEBPACK_IMPORTED_MODULE_2__.dom)(playerGameBoard).renderBoard();\n\t\t\tifAllShipsPlaced();\n\t\t});\n\t});\n\n\treturn { playerGameBoard };\n};\n\n// create computer gameboard and add ships.\nlet computerSetup = (playerboard) => {\n\tlet computerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboards)(\"computer\");\n\n\tfor (let i = 0; i < 5; i++) {\n\t\tcomputerGameBoard.placeShips();\n\t}\n\n\t(0,_dom__WEBPACK_IMPORTED_MODULE_2__.dom)(computerGameBoard).renderBoard();\n\n\tplayRound(playerboard, computerGameBoard);\n\n\treturn { computerGameBoard };\n};\n\nlet playRound = (playerboard, computerboard) => {\n\t//game control\n\tlet turn = 0;\n\tlet players = [];\n\tlet active = players[0];\n\tlet boards = [computerboard, playerboard];\n\n\t//generate players with respective enemy boards\n\tlet playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(\"Kevin\", computerboard);\n\tlet computerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__.computer)(\"Watson\", playerboard);\n\tplayers.push(playerOne, computerOne);\n\n\t//not sure I need this???*******\n\tlet toggleTurn = () => {\n\t\tturn = turn === 0 ? 1 : 0;\n\n\t\tactive = players[turn];\n\n\t\tif (active === players[1]) {\n\t\t\tcomputerSelection();\n\t\t}\n\t};\n\n\tlet updateGame = () => {\n\t\t(0,_dom__WEBPACK_IMPORTED_MODULE_2__.dom)(boards[turn]).renderBoard();\n\t\ttoggleTurn();\n\t};\n\n\tlet computerSelection = () => {\n\t\tsetTimeout(() => {\n\t\t\tcomputerOne.attack();\n\t\t\tupdateGame();\n\t\t}, 750);\n\t};\n\n\tlet playRound = () => {\n\t\tdocument.addEventListener(\"click\", (e) => {\n\t\t\tif (e.target.dataset.name === \"computer\") {\n\t\t\t\tlet coord = e.target.dataset.id;\n\n\t\t\t\tlet x = parseInt(coord.split(\"\")[0]);\n\t\t\t\tlet y = parseInt(coord.split(\"\")[1]);\n\n\t\t\t\tplayerOne.attack(x, y);\n\n\t\t\t\tupdateGame();\n\t\t\t}\n\t\t});\n\t};\n\n\tplayRound();\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/setupGame.js?");

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