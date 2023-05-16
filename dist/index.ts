/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: #e5e5e5;\n  max-width: 100vw;\n  max-height: 100vh;\n  overflow-y: hidden;\n  display: grid;\n  grid-template-columns: 20% 70% 10%;\n}\n\n.main-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  border-left: 1px solid rgba(66, 86, 122, 0.1);\n  border-right: 1px solid rgba(66, 86, 122, 0.1);\n  position: relative;\n}\n.main-block .main-block__vector {\n  position: absolute;\n  left: -1px;\n  top: 15%;\n}\n.main-block .main-block__title {\n  position: absolute;\n  width: 25%;\n  height: 15%;\n  left: 5%;\n  top: 15%;\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 54px;\n  line-height: 120%;\n  color: #42567a;\n}\n.main-block .main-block__years {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  gap: 7%;\n  width: 100%;\n  height: 15%;\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 700;\n  line-height: 160px;\n  text-align: center;\n  letter-spacing: -0.02em;\n  color: #5d5fef;\n  animation: fadeInFromNone 1s ease-in-out;\n}\n.main-block .main-block__years .main-block__years1,\n.main-block .main-block__years .main-block__years2 {\n  font-size: 198px;\n}\n.main-block .main-block__years .main-block__years2 {\n  color: #ef5da8;\n}\n.main-block .main-block__middleVerticalLine {\n  position: absolute;\n  height: 100%;\n  opacity: 0.1;\n  border: 1px solid #42567a;\n}\n.main-block .main-block__middleHorizontalLine {\n  position: absolute;\n  width: 100%;\n  opacity: 0.1;\n  border: 1px solid #42567a;\n}\n.main-block .circle {\n  box-sizing: border-box;\n  position: absolute;\n  width: 530px;\n  height: 530px;\n  border: 1px solid rgba(66, 86, 122, 0.2);\n  border-radius: 50%;\n}\n.main-block .circle .circle__number {\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19.8px;\n  line-height: 30px;\n  color: #42567a;\n}\n.main-block .circle .circle__points {\n  position: relative;\n  top: 50%;\n  left: 50%;\n}\n.main-block .circle .circle__wrapper-el1 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  bottom: 201.49px;\n  left: -160.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__wrapper-el1:focus .circle__el1 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__el1 {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el1:hover .circle__el1 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el1:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el2 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  left: -293px;\n  top: -28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el2 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el2:hover .circle__el2 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el2:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el3 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  top: 201.49px;\n  left: -160.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el3 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el3:hover .circle__el3 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el3:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el4 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  top: 201.49px;\n  left: 104.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el4 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el4:hover .circle__el4 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el4:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el5 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  left: 237px;\n  top: -28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el5 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el5:hover .circle__el5 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el5:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el6 {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  bottom: 201.49px;\n  left: 104.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .circle .circle__el6 {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #42567a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n}\n.main-block .circle .circle__wrapper-el6:hover .circle__el6 {\n  width: 56px;\n  height: 56px;\n  background: #f4f5f9;\n  transition: 1s;\n  z-index: 100;\n  border: 1px solid rgba(48, 62, 88, 0.5);\n}\n.main-block .circle .circle__wrapper-el6:hover .circle__number {\n  display: inline;\n  transition: 1s;\n}\n.main-block .main-block__bigNavigation {\n  position: absolute;\n  left: 5%;\n  top: 70%;\n  display: flex;\n  flex-direction: column;\n  width: 120px;\n  height: 88px;\n  justify-content: space-between;\n}\n.main-block .main-block__pagination {\n  width: 36px;\n  height: 18px;\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14.4px;\n  line-height: 18px;\n  color: #42567a;\n}\n.main-block .main-block__buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main-block .main-block__prev,\n.main-block .main-block__next {\n  background: #e5e5e5;\n  width: 50px;\n  height: 50px;\n  border: 1px solid rgba(66, 86, 122, 0.5);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-block .main-block__prev:hover,\n.main-block .main-block__next:hover {\n  background: #fff;\n  transition: 0.8s;\n}\n.main-block .main-block__png {\n  rotate: 180deg;\n}\n.main-block .main-block__nav-1 {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 135px;\n  top: 80%;\n  animation: fadeInFromNone 1s ease-in-out;\n}\n.main-block .main-block__nav-6 {\n  position: absolute;\n  width: 100%;\n  height: 135px;\n  top: 80%;\n  animation: fadeInFromNone 1s ease-in-out;\n}\n.main-block .swiper-button-disabled {\n  display: none;\n}\n.main-block .swiper {\n  width: 100%;\n  height: 100%;\n}\n.main-block .swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.main-block .swiper-title {\n  width: 320px;\n  height: 30px;\n  text-align: left;\n  font-family: \"Bebas Neue\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 25.2px;\n  line-height: 120%;\n  text-transform: uppercase;\n  color: #3877ee;\n}\n.main-block .swiper-page {\n  width: 320px;\n  height: 90px;\n  text-align: left;\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19.8px;\n  line-height: 30px;\n  color: #42567a;\n}\n.main-block .swiper-slide {\n  width: 320px;\n  height: 135px;\n}\n.main-block .swiper-button-next,\n.main-block .swiper-button-prev {\n  background: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n}\n.main-block .swiper-button-next::after,\n.main-block .swiper-button-prev::after {\n  font-size: 9.9px;\n  font-weight: 900;\n}\n.main-block :root {\n  --swiper-navigation-size: 10px;\n  --swiper-theme-color: #3877ee;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n  1% {\n    display: block;\n    opacity: 0;\n  }\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 600px) {\n  body {\n    display: block;\n  }\n  .main-block {\n    border: none;\n  }\n  .main-block .main-block__vector {\n    display: none;\n  }\n  .main-block .main-block__title {\n    font-size: 54px;\n  }\n  .main-block .main-block__years {\n    top: 30%;\n  }\n  .main-block .main-block__years .main-block__years1,\n  .main-block .main-block__years .main-block__years2 {\n    font-size: 54px;\n  }\n  .main-block .circle {\n    display: none;\n  }\n  .main-block .main-block__middleVerticalLine {\n    display: none;\n  }\n  .main-block .main-block__middleHorizontalLine {\n    width: 90%;\n  }\n  .main-block .main-block__bigNavigation {\n    width: 60px;\n    height: 50px;\n    top: 80%;\n  }\n  .main-block .main-block__pagination {\n    font-size: 14.4px;\n    width: 100%;\n    height: 100%;\n  }\n  .main-block .main-block__prev,\n  .main-block .main-block__next {\n    width: 25px;\n    height: 25px;\n  }\n  .main-block .main-block__nav-1 {\n    top: 55%;\n    left: 5%;\n  }\n  .main-block .main-block__nav-6 {\n    top: 55%;\n    left: 5%;\n  }\n  .main-block .swiper {\n    width: 100%;\n    height: 100%;\n  }\n  .main-block .swiper-slide {\n    text-align: center;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main-block .swiper-title {\n    width: 160px;\n    height: 30px;\n    text-align: left;\n    font-family: \"Bebas Neue\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 25.2px;\n    line-height: 120%;\n    text-transform: uppercase;\n    color: #3877ee;\n  }\n  .main-block .swiper-page {\n    width: 160px;\n    height: 90px;\n    text-align: left;\n    font-family: \"PT Sans\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 19.8px;\n    line-height: 30px;\n    color: #42567a;\n  }\n  .main-block .swiper-slide {\n    width: 160px;\n    height: 135px;\n  }\n  .main-block .swiper-button-next,\n  .main-block .swiper-button-prev {\n    display: none;\n  }\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/css/style.scss","webpack://./src/css/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ 537:
/***/ ((module) => {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


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

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ 589:
/***/ ((module) => {

"use strict";


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

/***/ 41:
/***/ (() => {

var rot = 60;
var cir = document.querySelector(".circle");
var _loop_1 = function (i) {
    var btn = document.querySelector(".circle__wrapper-el".concat(i));
    btn.addEventListener("click", function (e) {
        var one = document.querySelector(".main-block__one");
        one.innerHTML = String(i);
        cir.style.rotate = "".concat(rot * i, "deg");
        cir.style.transition = "1s";
        for (var j = 1; j <= 6; j++) {
            var btn_j = document.querySelector(".circle__wrapper-el".concat(j));
            btn_j.style.rotate = "".concat(-rot * i, "deg");
            btn_j.style.transition = "1s";
        }
    });
};
for (var i = 1; i <= 6; i++) {
    _loop_1(i);
}
var prev = document.querySelector(".main-block__prev");
var next = document.querySelector(".main-block__next");
prev.addEventListener("click", function () {
    var onePr = document.querySelector(".main-block__one");
    if (Number(onePr.innerHTML) == 1)
        return;
    var inner = Number(onePr.innerHTML);
    var cirWrap = document.querySelector(".circle__wrapper-el".concat(--inner));
    cirWrap.click();
});
next.addEventListener("click", function () {
    var oneNxt = document.querySelector(".main-block__one");
    if (Number(oneNxt.innerHTML) == 6)
        return;
    var inner = Number(oneNxt.innerHTML);
    var cirWrap = document.querySelector(".circle__wrapper-el".concat(++inner));
    cirWrap.click();
});


/***/ }),

/***/ 318:
/***/ (() => {

var nav_1 = document.querySelector(".main-block__nav-1");
var nav_6 = document.querySelector(".main-block__nav-6");
var ye1 = document.querySelector(".main-block__years1");
var ye2 = document.querySelector(".main-block__years2");
document
    .querySelector(".circle__wrapper-el1")
    .addEventListener("click", function () {
    nav_1.style.display = "block";
    nav_1.style.transition = "1s";
    nav_6.style.display = "none";
    nav_6.style.transition = "1s";
    ye1.innerHTML = "1999";
    ye2.innerHTML = "2004";
});
document
    .querySelector(".circle__wrapper-el6")
    .addEventListener("click", function () {
    nav_1.style.display = "none";
    nav_1.style.transition = "1s";
    nav_6.style.display = "block";
    nav_6.style.transition = "1s";
    ye1.innerHTML = "2015";
    ye2.innerHTML = "2020";
});


/***/ }),

/***/ 639:
/***/ (() => {

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    653: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/script.js
var script = __webpack_require__(639);
// EXTERNAL MODULE: ./src/js/switchYears.ts
var switchYears = __webpack_require__(318);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/style.css
var style = __webpack_require__(402);
;// CONCATENATED MODULE: ./src/css/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const css_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/js/animation_circle.ts
var animation_circle = __webpack_require__(41);
;// CONCATENATED MODULE: ./src/images/Vector.svg
/* harmony default export */ const Vector = (__webpack_require__.p + "./images/Vector.svg");
;// CONCATENATED MODULE: ./src/images/prev.png
/* harmony default export */ const prev = (__webpack_require__.p + "./images/prev.png");
;// CONCATENATED MODULE: ./src/index.ts







})();

/******/ })()
;