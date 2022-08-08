/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  color: inherit;\n  font-family: \"Roboto\", sans-serif;\n}\n\n::-webkit-scrollbar {\n  appearance: none;\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #222;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #777;\n}\n\nbody {\n  background: #333;\n  display: grid;\n  grid-template: 4rem 32px 1fr 32px/32px 25% 32px 1fr 32px;\n  height: 100vh;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nheader {\n  background-color: #222;\n  color: #fff;\n  padding: 16px 32px;\n  grid-area: 1/1/1/6;\n}\nheader h1 {\n  font-size: 2rem;\n}\n\nnav {\n  background-color: #666;\n  color: #fff;\n  padding: 16px;\n  grid-area: 3/2/3/2;\n  border-radius: 10px;\n  overflow-y: scroll;\n}\nnav h2,\nnav hr,\nnav form {\n  margin-bottom: 10px;\n}\nnav ul {\n  list-style: none;\n}\nnav ul li {\n  font-size: 1.2rem;\n  cursor: pointer;\n  margin-bottom: 10px;\n  border: 1px solid #fff;\n  padding: 5px 15px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\nnav ul li:hover, nav ul li.active {\n  background: #fff;\n  color: #666;\n}\nnav form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\nnav input {\n  color: #222;\n  padding: 5px;\n  flex: 80%;\n  font-size: 1.1rem;\n}\nnav button {\n  width: 32px;\n  height: 32px;\n  background: #5cd85c;\n  border: 0;\n  color: #fff;\n  font-weight: bold;\n  border-radius: 50%;\n  font-size: 1.2rem;\n}\n\nmain {\n  grid-area: 3/4/3/4;\n  color: #fff;\n  position: relative;\n}\nmain #allTodos {\n  padding: 5px 10px;\n  border: 2px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.2s, color 0.2s;\n}\nmain #allTodos:hover, main #allTodos.active {\n  background-color: #fff;\n  color: #333;\n}\nmain hr {\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\nmain #todos {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 10px;\n}\nmain .todo {\n  background: #555;\n  width: 100%;\n  height: 40px;\n  border-radius: 999px;\n  padding: 5px 10px 5px 15px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\nmain .todo .title {\n  flex: 70%;\n}\nmain .todo.checked .title {\n  text-decoration: line-through;\n}\nmain .todo.checked .check {\n  background: #5cd85c;\n}\nmain .todo button {\n  border-radius: 50%;\n  aspect-ratio: 1/1;\n  height: 100%;\n  border: 2px solid #fff;\n  background: transparent;\n  color: #fff;\n}\nmain .todo .delete:hover {\n  background: #f00;\n}\n\n#addTodo {\n  padding: 0.5rem;\n  background: #5cd85c;\n  color: #222;\n  border: 0;\n  border-radius: 0 10px 0 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-weight: bold;\n  display: none;\n  z-index: 11;\n}\n#addTodo:hover {\n  color: #fff;\n}\n\n#newTodo {\n  background-color: #777;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 300px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  border-radius: 10px;\n  display: none;\n  z-index: 10;\n}\n#newTodo label {\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n#newTodo input,\n#newTodo textarea {\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n}\n#newTodo input {\n  text-align: center;\n  padding: 5px;\n}\n#newTodo textarea {\n  padding: 10px;\n}\n#newTodo button {\n  border-radius: 10px;\n  border: 0;\n  background: #5cd85c;\n  padding: 5px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAAF;;AAGA;EACE,cAAA;EACA,iCAAA;AAAF;;AAGA;EACE,gBAAA;EACA,WAAA;AAAF;;AAGA;EACE,gBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;EACE,gBAAA;EACA,aAAA;EACA,wDAAA;EACA,aAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;AAAF;AAEE;EACE,eAAA;AAAJ;;AAIA;EACE,sBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AADF;AAGE;;;EAGE,mBAAA;AADJ;AAIE;EACE,gBAAA;AAFJ;AAII;EACE,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,oBAAA;EACA,mBAAA;AAFN;AAIM;EAEE,gBAAA;EACA,WAAA;AAHR;AAQE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;AANJ;AASE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;AAPJ;AAUE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;AARJ;;AAYA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;AATF;AAWE;EACE,iBAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,6CAAA;AATJ;AAWI;EAEE,sBAAA;EACA,WAAA;AAVN;AAcE;EACE,mBAAA;EACA,gBAAA;AAZJ;AAeE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,SAAA;AAbJ;AAgBE;EACE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,0BAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;AAdJ;AAgBI;EACE,SAAA;AAdN;AAiBI;EACE,6BAAA;AAfN;AAkBI;EACE,mBAAA;AAhBN;AAmBI;EACE,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;AAjBN;AAmBI;EACE,gBAAA;AAjBN;;AAsBA;EACE,eAAA;EACA,mBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,iBAAA;EACA,aAAA;EACA,WAAA;AAnBF;AAqBE;EACE,WAAA;AAnBJ;;AAuBA;EACE,sBAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;AApBF;AAsBE;EACE,kBAAA;EACA,iBAAA;EACA,qBAAA;AApBJ;AAuBE;;EAEE,mBAAA;EACA,iBAAA;AArBJ;AAwBE;EACE,kBAAA;EACA,YAAA;AAtBJ;AAyBE;EACE,aAAA;AAvBJ;AA0BE;EACE,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,YAAA;AAxBJ","sourcesContent":["@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  color: inherit;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  appearance: none;\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #222;\r\n  border-radius: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #777;\r\n}\r\n\r\nbody {\r\n  background: #333;\r\n  display: grid;\r\n  grid-template: 4rem 32px 1fr 32px / 32px 25% 32px 1fr 32px;\r\n  height: 100vh;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nheader {\r\n  background-color: #222;\r\n  color: #fff;\r\n  padding: 16px 32px;\r\n  grid-area: 1 / 1 / 1 / 6;\r\n\r\n  h1 {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\nnav {\r\n  background-color: #666;\r\n  color: #fff;\r\n  padding: 16px;\r\n  grid-area: 3 / 2 / 3 / 2;\r\n  border-radius: 10px;\r\n  overflow-y: scroll;\r\n\r\n  h2,\r\n  hr,\r\n  form {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  ul {\r\n    list-style: none;\r\n\r\n    li {\r\n      font-size: 1.2rem;\r\n      cursor: pointer;\r\n      margin-bottom: 10px;\r\n      border: 1px solid #fff;\r\n      padding: 5px 15px;\r\n      border-radius: 999px;\r\n      white-space: nowrap;\r\n\r\n      &:hover,\r\n      &.active {\r\n        background: #fff;\r\n        color: #666;\r\n      }\r\n    }\r\n  }\r\n\r\n  form {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  input {\r\n    color: #222;\r\n    padding: 5px;\r\n    flex: 80%;\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  button {\r\n    width: 32px;\r\n    height: 32px;\r\n    background: #5cd85c;\r\n    border: 0;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    border-radius: 50%;\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\nmain {\r\n  grid-area: 3 / 4 / 3 / 4;\r\n  color: #fff;\r\n  position: relative;\r\n\r\n  #allTodos {\r\n    padding: 5px 10px;\r\n    border: 2px solid #fff;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s, color 0.2s;\r\n\r\n    &:hover,\r\n    &.active {\r\n      background-color: #fff;\r\n      color: #333;\r\n    }\r\n  }\r\n\r\n  hr {\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  #todos {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    gap: 10px;\r\n  }\r\n\r\n  .todo {\r\n    background: #555;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 999px;\r\n    padding: 5px 10px 5px 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    .title {\r\n      flex: 70%;\r\n    }\r\n\r\n    &.checked .title {\r\n      text-decoration: line-through;\r\n    }\r\n\r\n    &.checked .check {\r\n      background: #5cd85c;\r\n    }\r\n\r\n    button {\r\n      border-radius: 50%;\r\n      aspect-ratio: 1 / 1;\r\n      height: 100%;\r\n      border: 2px solid #fff;\r\n      background: transparent;\r\n      color: #fff;\r\n    }\r\n    .delete:hover {\r\n      background: #f00;\r\n    }\r\n  }\r\n}\r\n\r\n#addTodo {\r\n  padding: 0.5rem;\r\n  background: #5cd85c;\r\n  color: #222;\r\n  border: 0;\r\n  border-radius: 0 10px 0 10px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  font-weight: bold;\r\n  display: none;\r\n  z-index: 11;\r\n\r\n  &:hover {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n#newTodo {\r\n  background-color: #777;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 300px;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  display: none;\r\n  z-index: 10;\r\n\r\n  label {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n  input,\r\n  textarea {\r\n    margin-bottom: 1rem;\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  input {\r\n    text-align: center;\r\n    padding: 5px;\r\n  }\r\n\r\n  textarea {\r\n    padding: 10px;\r\n  }\r\n\r\n  button {\r\n    border-radius: 10px;\r\n    border: 0;\r\n    background: #5cd85c;\r\n    padding: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/modules/EventController.js":
/*!****************************************!*\
  !*** ./src/modules/EventController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIController */ "./src/modules/UIController.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



const EventController = (() => {
  document.querySelector('#allTodos').onclick = function () {
    const todos = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getAllTodos();
    _UIController__WEBPACK_IMPORTED_MODULE_0__["default"].onProjectClick('allTodos', '', todos);
  };

  const addLinkEvent = (project) => {
    document.querySelector(`[data-id="${project.id}"]`).onclick = function () {
      const todos = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(project.id)?.getTodos() ?? [];
      _UIController__WEBPACK_IMPORTED_MODULE_0__["default"].onProjectClick(project.id, project.title, todos);
      _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(project.id);
      todos.forEach((todo) => addTodoEvent(todo));
    };
  };

  const addTodoEvent = (todo) => {
    const todoElement = document.querySelector(`[data-id="${todo.id}"]`);
    // todoElement.onclick = function(){

    // }

    todoElement.children[2].onclick = () => {
      let parentId = todo.parentProject;
      _UIController__WEBPACK_IMPORTED_MODULE_0__["default"].removeTodo(todo.id);
      _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].removeTodo(todo.id, parentId);
    };

    todoElement.children[3].onclick = () => {
      todo.changeStatus();
      _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(todo.parentProject)
        .getTodos()
        .filter((t) => t.id === todo.id)[0].status = todo.getStatus();
      todoElement.classList.toggle('checked');
      _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjects();
    };
  };

  return { addLinkEvent, addTodoEvent };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventController);


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ "./src/modules/createTodo.js");



const Storage = (() => {
  const saveProjects = () => {
    localStorage.setItem(
      'projects',
      JSON.stringify(
        projects.map((project) => {
          return {
            id: project.id,
            title: project.title,
            todos: project.getTodos(),
          };
        })
      )
    );
  };
  const getSavedProjects = () =>
    JSON.parse(localStorage.getItem('projects')) ?? [];

  let projects = [];
  let currentProject = '';

  const setup = (() => {
    projects = getSavedProjects().map((project) =>
      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__["default"])(
        project.id,
        project.title,
        project.todos.map((todo) => (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(todo))
      )
    );
  })();

  const getCurrentProject = () => currentProject;
  const setCurrentProject = (projectId) => (currentProject = projectId);
  const getProject = (projectId = getCurrentProject()) =>
    projects.filter((project) => project.id === projectId)[0];
  const addProject = (newProject) => {
    projects.push(
      (0,_createProject__WEBPACK_IMPORTED_MODULE_0__["default"])(newProject.id, newProject.title, newProject.todos)
    );
    saveProjects();
  };
  const getProjects = () => projects;

  const addTodo = (newTodo) => {
    getProject().addTodo((0,_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(newTodo));
    saveProjects();
  };
  const removeTodo = (todoId, parentId) => {
    let project = getProject(parentId);
    project.removeTodo(todoId);
    saveProjects();
  };
  const getAllTodos = () => {
    let allTodos = [];
    projects.forEach((project) => {
      allTodos = allTodos.concat([...project.getTodos()]);
    });
    return allTodos;
  };

  return {
    getCurrentProject,
    saveProjects,
    getProjects,
    addProject,
    addTodo,
    removeTodo,
    getAllTodos,
    getProject,
    setCurrentProject,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/modules/UIController.js":
/*!*************************************!*\
  !*** ./src/modules/UIController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UIController = (() => {
  const projectDisplay = document.querySelector('#projects');
  const todoDisplay = document.querySelector('#todos');
  const addTodoBtn = document.querySelector('#addTodo');

  const displayProjectTitle = (title) => {
    document.querySelector('#projectTitle').textContent = title
      ? `> ${title}`
      : '';
  };

  const highlightElement = (projectId) => {
    document
      .querySelectorAll('.active')
      .forEach((element) => element.classList.toggle('active'));
    document.querySelector(`[data-id="${projectId}"]`).classList.add('active');
  };

  const renderProject = (project, projectsNum) => {
    if (projectsNum < 2) projectDisplay.textContent = '';
    let li = document.createElement('li');
    li.textContent = project.title;
    li.setAttribute('data-id', project.id);

    projectDisplay.append(li);
  };

  const renderProjectList = (projects) => {
    if (!projects.length) {
      projectDisplay.textContent = 'No projects yet.';
      return;
    }

    projects.forEach((project) => renderProject(project));
  };

  const renderTodos = (todos) => {
    if (!todos.length) {
      todoDisplay.textContent = "This project doesn't have any todos";
      return;
    }
    todoDisplay.innerHTML = '';
    todos.forEach((todo) => {
      todoDisplay.innerHTML += `<div class="todo${
        todo.getStatus() ? ' checked' : ''
      }" data-id="${todo.id}">
        <p class="title">${todo.title}</p>
        <p class="dueDate">Due: ${todo.dueDate}</p>
        <button class="delete">X</button>
        <button class="check">&check;</button>
        </div>`;
    });
  };

  const removeTodo = (id) => {
    document.querySelector(`[data-id="${id}"]`).remove();
    if (!todoDisplay.textContent)
      todoDisplay.textContent = "This project doesn't have any todos";
  };

  const onProjectClick = (projectId, projectTitle, todos) => {
    displayProjectTitle(projectTitle);
    highlightElement(projectId);
    renderTodos(todos);
    if (projectTitle) addTodoBtn.style.display = 'block';
    else addTodoBtn.style.display = 'none';
  };

  return {
    onProjectClick,
    renderProject,
    renderProjectList,
    renderTodos,
    removeTodo,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIController);


/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (id, title, todos) => {
  const addTodo = (newTodo) => {
    todos.push(newTodo);
  };
  const getTodos = () => todos;
  const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  return { id, title, getTodos, addTodo, removeTodo };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTodo = ({ id, title, dueDate, notes, parentProject, status }) => {
  const changeStatus = () => {
    status = !status;
  };

  const getStatus = () => status;

  return {
    id,
    title,
    dueDate,
    notes,
    parentProject,
    changeStatus,
    getStatus,
    status,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _modules_UIController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UIController */ "./src/modules/UIController.js");
/* harmony import */ var _modules_EventController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/EventController */ "./src/modules/EventController.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");






const app = (() => {
  const projectForm = document.querySelector('#newProject'),
    todoForm = document.querySelector('#newTodo'),
    addTodoBtn = document.querySelector('#addTodo');

  projectForm.onsubmit = function (ev) {
    ev.preventDefault();
    const newProject = { id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(), title: this.title.value, todos: [] };
    if (
      !_modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects().filter(
        (project) => project.title === newProject.title
      ).length
    ) {
      addProject(newProject);
      this.reset();
    } else {
      this.title.setCustomValidity(
        "There can't be 2 projects with the same name."
      );
    }
  };

  todoForm.onsubmit = function (ev) {
    ev.preventDefault();
    const newTodo = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      title: this.title.value,
      dueDate: this.dueDate.value,
      notes: this.notes.value,
      parentProject: _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject(),
      status: false,
    };
    addTodo(newTodo);
    this.reset();
    this.style.display = 'none';
  };

  addTodoBtn.onclick = () => {
    todoForm.style.display =
      todoForm.style.display === 'flex' ? 'none' : 'flex';

    if (todoForm.style.display === 'flex') todoForm.title.focus();
  };

  const addProject = (newProject) => {
    _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(newProject);
    _modules_UIController__WEBPACK_IMPORTED_MODULE_1__["default"].renderProject(newProject, _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects().length);
    _modules_EventController__WEBPACK_IMPORTED_MODULE_2__["default"].addLinkEvent(newProject);
  };

  const addTodo = (newTodo) => {
    _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects((project) => project);
    _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTodo(newTodo);
    _modules_UIController__WEBPACK_IMPORTED_MODULE_1__["default"].renderTodos(_modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProject().getTodos());
    _modules_EventController__WEBPACK_IMPORTED_MODULE_2__["default"].addTodoEvent(newTodo);
  };

  const setup = (() => {
    const allTodos = _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getAllTodos();
    _modules_UIController__WEBPACK_IMPORTED_MODULE_1__["default"].renderProjectList(_modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects());
    _modules_UIController__WEBPACK_IMPORTED_MODULE_1__["default"].renderTodos(allTodos);
    _modules_Storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects().forEach((project) =>
      _modules_EventController__WEBPACK_IMPORTED_MODULE_2__["default"].addLinkEvent(project)
    );
    allTodos.forEach((todo) => _modules_EventController__WEBPACK_IMPORTED_MODULE_2__["default"].addTodoEvent(todo));
  })();
})();

})();

/******/ })()
;
//# sourceMappingURL=bundle.cb8919718132dd471755.js.map