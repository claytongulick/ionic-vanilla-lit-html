/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "\\chunks\\" + chunkId + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!******************************************************************************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		40
	],
	"./ion-action-sheet-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		41
	],
	"./ion-action-sheet-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		42
	],
	"./ion-alert-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		21
	],
	"./ion-alert-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		22
	],
	"./ion-app_8-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		8
	],
	"./ion-app_8-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		9
	],
	"./ion-avatar_3-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		43
	],
	"./ion-avatar_3-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		44
	],
	"./ion-back-button-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		45
	],
	"./ion-back-button-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		46
	],
	"./ion-backdrop-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		78
	],
	"./ion-backdrop-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		79
	],
	"./ion-button_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		47
	],
	"./ion-button_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		48
	],
	"./ion-card_5-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		49
	],
	"./ion-card_5-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		50
	],
	"./ion-checkbox-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		51
	],
	"./ion-checkbox-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		52
	],
	"./ion-chip-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		53
	],
	"./ion-chip-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		54
	],
	"./ion-col_3.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		80
	],
	"./ion-datetime_3-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		17
	],
	"./ion-datetime_3-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		18
	],
	"./ion-fab_3-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		55
	],
	"./ion-fab_3-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		56
	],
	"./ion-img.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		81
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		36
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		37
	],
	"./ion-input-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		57
	],
	"./ion-input-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		58
	],
	"./ion-item-option_3-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		59
	],
	"./ion-item-option_3-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		60
	],
	"./ion-item_8-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		61
	],
	"./ion-item_8-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		62
	],
	"./ion-loading-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		23
	],
	"./ion-loading-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		24
	],
	"./ion-menu_4-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		15
	],
	"./ion-menu_4-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		16
	],
	"./ion-modal-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		11
	],
	"./ion-modal-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		12
	],
	"./ion-nav_5.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		10
	],
	"./ion-popover-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		13
	],
	"./ion-popover-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		14
	],
	"./ion-progress-bar-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		63
	],
	"./ion-progress-bar-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		64
	],
	"./ion-radio_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		29
	],
	"./ion-radio_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		30
	],
	"./ion-range-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		65
	],
	"./ion-range-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		66
	],
	"./ion-refresher_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		38
	],
	"./ion-refresher_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		39
	],
	"./ion-reorder_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		34
	],
	"./ion-reorder_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		35
	],
	"./ion-ripple-effect.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		82
	],
	"./ion-route_4.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		67
	],
	"./ion-searchbar-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		25
	],
	"./ion-searchbar-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		26
	],
	"./ion-segment_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		68
	],
	"./ion-segment_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		69
	],
	"./ion-select_3-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		31
	],
	"./ion-select_3-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		32
	],
	"./ion-slide_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		83
	],
	"./ion-slide_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		84
	],
	"./ion-spinner.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		70
	],
	"./ion-split-pane-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		85
	],
	"./ion-split-pane-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		86
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		71
	],
	"./ion-tab-bar_2-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		72
	],
	"./ion-tab_2.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		33
	],
	"./ion-text.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		73
	],
	"./ion-textarea-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		74
	],
	"./ion-textarea-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		75
	],
	"./ion-toast-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		27
	],
	"./ion-toast-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		28
	],
	"./ion-toggle-ios.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		19
	],
	"./ion-toggle-md.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		20
	],
	"./ion-virtual-scroll.entry.js": [
		"../node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		87
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/animation-af478fe9.js ***!
  \******************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createAnimation; });
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");


const setStyleProperty = (element, propertyName, value) => {
    element.style.setProperty(propertyName, value);
};
const removeStyleProperty = (element, propertyName) => {
    element.style.removeProperty(propertyName);
};
const animationEnd = (el, callback) => {
    let unRegTrans;
    const opts = { passive: true };
    const unregister = () => {
        if (unRegTrans) {
            unRegTrans();
        }
    };
    const onTransitionEnd = (ev) => {
        if (el === ev.target) {
            unregister();
            callback(ev);
        }
    };
    if (el) {
        el.addEventListener('webkitAnimationEnd', onTransitionEnd, opts);
        el.addEventListener('animationend', onTransitionEnd, opts);
        unRegTrans = () => {
            el.removeEventListener('webkitAnimationEnd', onTransitionEnd, opts);
            el.removeEventListener('animationend', onTransitionEnd, opts);
        };
    }
    return unregister;
};
const generateKeyframeRules = (keyframes = []) => {
    return keyframes.map(keyframe => {
        const offset = keyframe.offset;
        const frameString = [];
        for (const property in keyframe) {
            if (keyframe.hasOwnProperty(property) && property !== 'offset') {
                frameString.push(`${property}: ${keyframe[property]};`);
            }
        }
        return `${offset * 100}% { ${frameString.join(' ')} }`;
    }).join(' ');
};
const keyframeIds = [];
const generateKeyframeName = (keyframeRules) => {
    let index = keyframeIds.indexOf(keyframeRules);
    if (index < 0) {
        index = (keyframeIds.push(keyframeRules) - 1);
    }
    return `ion-animation-${index}`;
};
const getStyleContainer = (element) => {
    const rootNode = element.getRootNode();
    return (rootNode.head || rootNode);
};
const createKeyframeStylesheet = (keyframeName, keyframeRules, element) => {
    const styleContainer = getStyleContainer(element);
    const existingStylesheet = styleContainer.querySelector('#' + keyframeName);
    if (existingStylesheet) {
        return existingStylesheet;
    }
    const stylesheet = (element.ownerDocument || document).createElement('style');
    stylesheet.id = keyframeName;
    stylesheet.textContent = `@keyframes ${keyframeName} { ${keyframeRules} } @keyframes ${keyframeName}-alt { ${keyframeRules} }`;
    styleContainer.appendChild(stylesheet);
    return stylesheet;
};
const addClassToArray = (classes = [], className) => {
    if (className !== undefined) {
        const classNameToAppend = (Array.isArray(className)) ? className : [className];
        return [...classes, ...classNameToAppend];
    }
    return classes;
};

// TODO: Add more tests. until then, be sure to manually test menu and swipe to go back/routing transitions
const createAnimation = () => {
    let _delay;
    let _duration;
    let _easing;
    let _iterations;
    let _fill;
    let _direction;
    let _keyframes = [];
    let beforeAddClasses = [];
    let beforeRemoveClasses = [];
    let initialized = false;
    let parentAnimation;
    let beforeStylesValue = {};
    let afterAddClasses = [];
    let afterRemoveClasses = [];
    let afterStylesValue = {};
    let numAnimationsRunning = 0;
    let shouldForceLinearEasing = false;
    let shouldForceSyncPlayback = false;
    let cssAnimationsTimerFallback;
    let forceDirectionValue;
    let forceDurationValue;
    let forceDelayValue;
    let willComplete = true;
    let finished = false;
    let shouldCalculateNumAnimations = true;
    let keyframeName;
    let ani;
    const onFinishCallbacks = [];
    const onFinishOneTimeCallbacks = [];
    const elements = [];
    const childAnimations = [];
    const stylesheets = [];
    const _beforeAddReadFunctions = [];
    const _beforeAddWriteFunctions = [];
    const _afterAddReadFunctions = [];
    const _afterAddWriteFunctions = [];
    const webAnimations = [];
    const supportsAnimationEffect = (typeof AnimationEffect === 'function' || typeof window.AnimationEffect === 'function');
    const supportsWebAnimations = (typeof Element === 'function') && (typeof Element.prototype.animate === 'function') && supportsAnimationEffect;
    const ANIMATION_END_FALLBACK_PADDING_MS = 100;
    const getWebAnimations = () => {
        return webAnimations;
    };
    const destroy = () => {
        childAnimations.forEach(childAnimation => {
            childAnimation.destroy();
        });
        cleanUp();
        elements.length = 0;
        childAnimations.length = 0;
        _keyframes.length = 0;
        clearOnFinish();
        initialized = false;
        shouldCalculateNumAnimations = true;
        return ani;
    };
    /**
     * Cancels any Web Animations, removes
     * any animation properties from the
     * animation's elements, and removes the
     * animation's stylesheets from the DOM.
     */
    const cleanUp = () => {
        cleanUpElements();
        cleanUpStyleSheets();
    };
    const onFinish = (callback, opts) => {
        const callbacks = (opts && opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
        callbacks.push({ c: callback, o: opts });
        return ani;
    };
    const clearOnFinish = () => {
        onFinishCallbacks.length = 0;
        onFinishOneTimeCallbacks.length = 0;
        return ani;
    };
    /**
     * Cancels any Web Animations and removes
     * any animation properties from the
     * the animation's elements.
     */
    const cleanUpElements = () => {
        if (supportsWebAnimations) {
            webAnimations.forEach(animation => {
                animation.cancel();
            });
            webAnimations.length = 0;
        }
        else {
            const elementsArray = elements.slice();
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
                elementsArray.forEach(element => {
                    removeStyleProperty(element, 'animation-name');
                    removeStyleProperty(element, 'animation-duration');
                    removeStyleProperty(element, 'animation-timing-function');
                    removeStyleProperty(element, 'animation-iteration-count');
                    removeStyleProperty(element, 'animation-delay');
                    removeStyleProperty(element, 'animation-play-state');
                    removeStyleProperty(element, 'animation-fill-mode');
                    removeStyleProperty(element, 'animation-direction');
                });
            });
        }
    };
    /**
     * Removes the animation's stylesheets
     * from the DOM.
     */
    const cleanUpStyleSheets = () => {
        stylesheets.forEach(stylesheet => {
            /**
             * When sharing stylesheets, it's possible
             * for another animation to have already
             * cleaned up a particular stylesheet
             */
            if (stylesheet && stylesheet.parentNode) {
                stylesheet.parentNode.removeChild(stylesheet);
            }
        });
        stylesheets.length = 0;
    };
    const beforeAddRead = (readFn) => {
        _beforeAddReadFunctions.push(readFn);
        return ani;
    };
    const beforeAddWrite = (writeFn) => {
        _beforeAddWriteFunctions.push(writeFn);
        return ani;
    };
    const afterAddRead = (readFn) => {
        _afterAddReadFunctions.push(readFn);
        return ani;
    };
    const afterAddWrite = (writeFn) => {
        _afterAddWriteFunctions.push(writeFn);
        return ani;
    };
    const beforeAddClass = (className) => {
        beforeAddClasses = addClassToArray(beforeAddClasses, className);
        return ani;
    };
    const beforeRemoveClass = (className) => {
        beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
        return ani;
    };
    /**
     * Set CSS inline styles to the animation's
     * elements before the animation begins.
     */
    const beforeStyles = (styles = {}) => {
        beforeStylesValue = styles;
        return ani;
    };
    /**
     * Clear CSS inline styles from the animation's
     * elements before the animation begins.
     */
    const beforeClearStyles = (propertyNames = []) => {
        for (const property of propertyNames) {
            beforeStylesValue[property] = '';
        }
        return ani;
    };
    const afterAddClass = (className) => {
        afterAddClasses = addClassToArray(afterAddClasses, className);
        return ani;
    };
    const afterRemoveClass = (className) => {
        afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
        return ani;
    };
    const afterStyles = (styles = {}) => {
        afterStylesValue = styles;
        return ani;
    };
    const afterClearStyles = (propertyNames = []) => {
        for (const property of propertyNames) {
            afterStylesValue[property] = '';
        }
        return ani;
    };
    const getFill = () => {
        if (_fill !== undefined) {
            return _fill;
        }
        if (parentAnimation) {
            return parentAnimation.getFill();
        }
        return 'both';
    };
    const getDirection = () => {
        if (forceDirectionValue !== undefined) {
            return forceDirectionValue;
        }
        if (_direction !== undefined) {
            return _direction;
        }
        if (parentAnimation) {
            return parentAnimation.getDirection();
        }
        return 'normal';
    };
    const getEasing = () => {
        if (shouldForceLinearEasing) {
            return 'linear';
        }
        if (_easing !== undefined) {
            return _easing;
        }
        if (parentAnimation) {
            return parentAnimation.getEasing();
        }
        return 'linear';
    };
    const getDuration = () => {
        if (shouldForceSyncPlayback) {
            return 0;
        }
        if (forceDurationValue !== undefined) {
            return forceDurationValue;
        }
        if (_duration !== undefined) {
            return _duration;
        }
        if (parentAnimation) {
            return parentAnimation.getDuration();
        }
        return 0;
    };
    const getIterations = () => {
        if (_iterations !== undefined) {
            return _iterations;
        }
        if (parentAnimation) {
            return parentAnimation.getIterations();
        }
        return 1;
    };
    const getDelay = () => {
        if (forceDelayValue !== undefined) {
            return forceDelayValue;
        }
        if (_delay !== undefined) {
            return _delay;
        }
        if (parentAnimation) {
            return parentAnimation.getDelay();
        }
        return 0;
    };
    const getKeyframes = () => {
        return _keyframes;
    };
    const direction = (animationDirection) => {
        _direction = animationDirection;
        update(true);
        return ani;
    };
    const fill = (animationFill) => {
        _fill = animationFill;
        update(true);
        return ani;
    };
    const delay = (animationDelay) => {
        _delay = animationDelay;
        update(true);
        return ani;
    };
    const easing = (animationEasing) => {
        _easing = animationEasing;
        update(true);
        return ani;
    };
    const duration = (animationDuration) => {
        /**
         * CSS Animation Durations of 0ms work fine on Chrome
         * but do not run on Safari, so force it to 1ms to
         * get it to run on both platforms.
         */
        if (!supportsWebAnimations && animationDuration === 0) {
            animationDuration = 1;
        }
        _duration = animationDuration;
        update(true);
        return ani;
    };
    const iterations = (animationIterations) => {
        _iterations = animationIterations;
        update(true);
        return ani;
    };
    const parent = (animation) => {
        parentAnimation = animation;
        return ani;
    };
    const addElement = (el) => {
        if (el != null) {
            if (el.nodeType === 1) {
                elements.push(el);
            }
            else if (el.length >= 0) {
                for (let i = 0; i < el.length; i++) {
                    elements.push(el[i]);
                }
            }
            else {
                console.error('Invalid addElement value');
            }
        }
        return ani;
    };
    const addAnimation = (animationToAdd) => {
        if (animationToAdd != null) {
            if (Array.isArray(animationToAdd)) {
                for (const animation of animationToAdd) {
                    animation.parent(ani);
                    childAnimations.push(animation);
                }
            }
            else {
                animationToAdd.parent(ani);
                childAnimations.push(animationToAdd);
            }
        }
        return ani;
    };
    const keyframes = (keyframeValues) => {
        _keyframes = keyframeValues;
        return ani;
    };
    /**
     * Runs all before read callbacks
     */
    const runBeforeRead = () => {
        _beforeAddReadFunctions.forEach(callback => {
            callback();
        });
    };
    /**
     * Runs all before write callbacks
     */
    const runBeforeWrite = () => {
        _beforeAddWriteFunctions.forEach(callback => {
            callback();
        });
    };
    /**
     * Updates styles and classes before animation runs
     */
    const runBeforeStyles = () => {
        const addClasses = beforeAddClasses;
        const removeClasses = beforeRemoveClasses;
        const styles = beforeStylesValue;
        elements.forEach(el => {
            const elementClassList = el.classList;
            addClasses.forEach(c => elementClassList.add(c));
            removeClasses.forEach(c => elementClassList.remove(c));
            for (const property in styles) {
                if (styles.hasOwnProperty(property)) {
                    setStyleProperty(el, property, styles[property]);
                }
            }
        });
    };
    /**
     * Run all "before" animation hooks.
     */
    const beforeAnimation = () => {
        runBeforeRead();
        runBeforeWrite();
        runBeforeStyles();
    };
    /**
     * Runs all after read callbacks
     */
    const runAfterRead = () => {
        _afterAddReadFunctions.forEach(callback => {
            callback();
        });
    };
    /**
     * Runs all after write callbacks
     */
    const runAfterWrite = () => {
        _afterAddWriteFunctions.forEach(callback => {
            callback();
        });
    };
    /**
     * Updates styles and classes before animation ends
     */
    const runAfterStyles = () => {
        const addClasses = afterAddClasses;
        const removeClasses = afterRemoveClasses;
        const styles = afterStylesValue;
        elements.forEach(el => {
            const elementClassList = el.classList;
            addClasses.forEach(c => elementClassList.add(c));
            removeClasses.forEach(c => elementClassList.remove(c));
            for (const property in styles) {
                if (styles.hasOwnProperty(property)) {
                    setStyleProperty(el, property, styles[property]);
                }
            }
        });
    };
    /**
     * Run all "after" animation hooks.
     */
    const afterAnimation = () => {
        clearCSSAnimationsTimeout();
        runAfterRead();
        runAfterWrite();
        runAfterStyles();
        const currentStep = willComplete ? 1 : 0;
        onFinishCallbacks.forEach(onFinishCallback => {
            return onFinishCallback.c(currentStep, ani);
        });
        onFinishOneTimeCallbacks.forEach(onFinishCallback => {
            return onFinishCallback.c(currentStep, ani);
        });
        onFinishOneTimeCallbacks.length = 0;
        shouldCalculateNumAnimations = true;
        finished = true;
    };
    const animationFinish = () => {
        if (numAnimationsRunning === 0) {
            return;
        }
        numAnimationsRunning--;
        if (numAnimationsRunning === 0) {
            afterAnimation();
            if (parentAnimation) {
                parentAnimation.animationFinish();
            }
        }
    };
    const initializeCSSAnimation = (toggleAnimationName = true) => {
        cleanUpStyleSheets();
        elements.forEach(element => {
            if (_keyframes.length > 0) {
                const keyframeRules = generateKeyframeRules(_keyframes);
                keyframeName = generateKeyframeName(keyframeRules);
                const stylesheet = createKeyframeStylesheet(keyframeName, keyframeRules, element);
                stylesheets.push(stylesheet);
                setStyleProperty(element, 'animation-duration', `${getDuration()}ms`);
                setStyleProperty(element, 'animation-timing-function', getEasing());
                setStyleProperty(element, 'animation-delay', `${getDelay()}ms`);
                setStyleProperty(element, 'animation-fill-mode', getFill());
                setStyleProperty(element, 'animation-direction', getDirection());
                const iterationsCount = (getIterations() === Infinity)
                    ? 'infinite'
                    : getIterations().toString();
                setStyleProperty(element, 'animation-iteration-count', iterationsCount);
                setStyleProperty(element, 'animation-play-state', 'paused');
                if (toggleAnimationName) {
                    setStyleProperty(element, 'animation-name', `${stylesheet.id}-alt`);
                }
                Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
                    setStyleProperty(element, 'animation-name', stylesheet.id || null);
                });
            }
        });
    };
    const initializeWebAnimation = () => {
        elements.forEach(element => {
            const animation = element.animate(_keyframes, {
                delay: getDelay(),
                duration: getDuration(),
                easing: getEasing(),
                iterations: getIterations(),
                fill: getFill(),
                direction: getDirection()
            });
            animation.pause();
            webAnimations.push(animation);
        });
        if (webAnimations.length > 0) {
            webAnimations[0].onfinish = () => {
                animationFinish();
            };
        }
    };
    const initializeAnimation = (toggleAnimationName = true) => {
        beforeAnimation();
        if (_keyframes.length > 0) {
            if (supportsWebAnimations) {
                initializeWebAnimation();
            }
            else {
                initializeCSSAnimation(toggleAnimationName);
            }
        }
        initialized = true;
    };
    const setAnimationStep = (step) => {
        step = Math.min(Math.max(step, 0), 0.999);
        if (supportsWebAnimations) {
            webAnimations.forEach(animation => {
                animation.currentTime = animation.effect.getComputedTiming().delay + (getDuration() * step);
                animation.pause();
            });
        }
        else {
            const animationDelay = getDelay() || 0;
            const animationDuration = `-${animationDelay + (getDuration() * step)}ms`;
            elements.forEach(element => {
                if (_keyframes.length > 0) {
                    setStyleProperty(element, 'animation-delay', animationDuration);
                    setStyleProperty(element, 'animation-play-state', 'paused');
                }
            });
        }
    };
    const updateWebAnimation = () => {
        webAnimations.forEach(animation => {
            animation.effect.updateTiming({
                delay: getDelay(),
                duration: getDuration(),
                easing: getEasing(),
                iterations: getIterations(),
                fill: getFill(),
                direction: getDirection()
            });
        });
    };
    const updateCSSAnimation = (toggleAnimationName = true) => {
        elements.forEach(element => {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
                setStyleProperty(element, 'animation-name', keyframeName || null);
                setStyleProperty(element, 'animation-duration', `${getDuration()}ms`);
                setStyleProperty(element, 'animation-timing-function', getEasing());
                setStyleProperty(element, 'animation-delay', `${getDelay()}ms`);
                setStyleProperty(element, 'animation-fill-mode', getFill() || null);
                setStyleProperty(element, 'animation-direction', getDirection() || null);
                const iterationsCount = (getIterations() === Infinity)
                    ? 'infinite'
                    : getIterations().toString();
                setStyleProperty(element, 'animation-iteration-count', iterationsCount);
                if (toggleAnimationName) {
                    setStyleProperty(element, 'animation-name', `${keyframeName}-alt`);
                }
                Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
                    setStyleProperty(element, 'animation-name', keyframeName || null);
                });
            });
        });
    };
    const update = (deep = false, toggleAnimationName = true) => {
        if (deep) {
            childAnimations.forEach(animation => {
                animation.update(deep);
            });
        }
        if (supportsWebAnimations) {
            updateWebAnimation();
        }
        else {
            updateCSSAnimation(toggleAnimationName);
        }
        return ani;
    };
    const progressStart = (forceLinearEasing = false) => {
        childAnimations.forEach(animation => {
            animation.progressStart(forceLinearEasing);
        });
        pauseAnimation();
        shouldForceLinearEasing = forceLinearEasing;
        if (!initialized) {
            initializeAnimation();
        }
        else {
            update();
            setAnimationStep(0);
        }
        return ani;
    };
    const progressStep = (step) => {
        childAnimations.forEach(animation => {
            animation.progressStep(step);
        });
        setAnimationStep(step);
        return ani;
    };
    const progressEnd = (playTo, step, dur) => {
        shouldForceLinearEasing = false;
        childAnimations.forEach(animation => {
            animation.progressEnd(playTo, step, dur);
        });
        if (dur !== undefined) {
            forceDurationValue = dur;
        }
        finished = false;
        willComplete = playTo === 1;
        if (!willComplete) {
            forceDirectionValue = (getDirection() === 'reverse') ? 'normal' : 'reverse';
            if (supportsWebAnimations) {
                update();
                setAnimationStep(1 - step);
            }
            else {
                forceDelayValue = ((1 - step) * getDuration()) * -1;
                update(false, false);
            }
        }
        else {
            if (!supportsWebAnimations) {
                forceDelayValue = (step * getDuration()) * -1;
                update(false, false);
            }
        }
        onFinish(() => {
            willComplete = true;
            forceDurationValue = undefined;
            forceDirectionValue = undefined;
            forceDelayValue = undefined;
        }, {
            oneTimeCallback: true
        });
        if (!parentAnimation) {
            play();
        }
        return ani;
    };
    const pauseAnimation = () => {
        if (initialized) {
            if (supportsWebAnimations) {
                webAnimations.forEach(animation => {
                    animation.pause();
                });
            }
            else {
                elements.forEach(element => {
                    setStyleProperty(element, 'animation-play-state', 'paused');
                });
            }
        }
    };
    const pause = () => {
        childAnimations.forEach(animation => {
            animation.pause();
        });
        pauseAnimation();
        return ani;
    };
    const playAsync = () => {
        return play();
    };
    const playSync = () => {
        play({ sync: true });
        return ani;
    };
    const onAnimationEndFallback = () => {
        cssAnimationsTimerFallback = undefined;
        animationFinish();
    };
    const clearCSSAnimationsTimeout = () => {
        if (cssAnimationsTimerFallback) {
            clearTimeout(cssAnimationsTimerFallback);
        }
    };
    const playCSSAnimations = () => {
        clearCSSAnimationsTimeout();
        elements.forEach(element => {
            if (_keyframes.length > 0) {
                Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
                    setStyleProperty(element, 'animation-play-state', 'running');
                });
            }
        });
        if (_keyframes.length === 0 || elements.length === 0) {
            animationFinish();
        }
        else {
            /**
             * This is a catchall in the event that a CSS Animation did not finish.
             * The Web Animations API has mechanisms in place for preventing this.
             * CSS Animations will not fire an `animationend` event
             * for elements with `display: none`. The Web Animations API
             * accounts for this, but using raw CSS Animations requires
             * this workaround.
             */
            const animationDelay = getDelay() || 0;
            const animationDuration = getDuration() || 0;
            const animationIterations = getIterations() || 1;
            cssAnimationsTimerFallback = setTimeout(onAnimationEndFallback, animationDelay + (animationDuration * animationIterations) + ANIMATION_END_FALLBACK_PADDING_MS);
            animationEnd(elements[0], () => {
                clearCSSAnimationsTimeout();
                /**
                 * Ensure that clean up
                 * is always done a frame
                 * before the onFinish handlers
                 * are fired. Otherwise, there
                 * may be flickering if a new
                 * animation is started on the same
                 * element too quickly
                 *
                 * TODO: Is there a cleaner way to do this?
                 */
                Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(() => {
                    clearCSSAnimationPlayState();
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["r"])(animationFinish);
                });
            });
        }
    };
    const clearCSSAnimationPlayState = () => {
        elements.forEach(element => {
            removeStyleProperty(element, 'animation-duration');
            removeStyleProperty(element, 'animation-delay');
            removeStyleProperty(element, 'animation-play-state');
        });
    };
    const playWebAnimations = () => {
        webAnimations.forEach(animation => {
            animation.play();
        });
        if (_keyframes.length === 0 || elements.length === 0) {
            animationFinish();
        }
    };
    const resetAnimation = () => {
        if (supportsWebAnimations) {
            setAnimationStep(0);
        }
        else {
            updateCSSAnimation();
        }
    };
    const play = (opts) => {
        return new Promise(resolve => {
            if (opts && opts.sync) {
                shouldForceSyncPlayback = true;
                onFinish(() => shouldForceSyncPlayback = false, { oneTimeCallback: true });
            }
            if (!initialized) {
                initializeAnimation();
            }
            if (finished) {
                resetAnimation();
                finished = false;
            }
            if (shouldCalculateNumAnimations) {
                numAnimationsRunning = childAnimations.length + 1;
                shouldCalculateNumAnimations = false;
            }
            onFinish(() => resolve(), { oneTimeCallback: true });
            childAnimations.forEach(animation => {
                animation.play();
            });
            if (supportsWebAnimations) {
                playWebAnimations();
            }
            else {
                playCSSAnimations();
            }
        });
    };
    const stop = () => {
        childAnimations.forEach(animation => {
            animation.stop();
        });
        if (initialized) {
            cleanUpElements();
            initialized = false;
        }
    };
    const from = (property, value) => {
        const firstFrame = _keyframes[0];
        if (firstFrame !== undefined && firstFrame.offset === 0) {
            firstFrame[property] = value;
        }
        else {
            _keyframes = [
                { offset: 0, [property]: value },
                ..._keyframes
            ];
        }
        return ani;
    };
    const to = (property, value) => {
        const lastFrame = _keyframes[_keyframes.length - 1];
        if (lastFrame !== undefined && lastFrame.offset === 1) {
            lastFrame[property] = value;
        }
        else {
            _keyframes = [
                ..._keyframes,
                { offset: 1, [property]: value }
            ];
        }
        return ani;
    };
    const fromTo = (property, fromValue, toValue) => {
        return from(property, fromValue).to(property, toValue);
    };
    return ani = {
        parentAnimation,
        elements,
        childAnimations,
        animationFinish,
        from,
        to,
        fromTo,
        parent,
        play,
        playAsync,
        playSync,
        pause,
        stop,
        destroy,
        keyframes,
        addAnimation,
        addElement,
        update,
        fill,
        direction,
        iterations,
        duration,
        easing,
        delay,
        getWebAnimations,
        getKeyframes,
        getFill,
        getDirection,
        getDelay,
        getIterations,
        getEasing,
        getDuration,
        afterAddRead,
        afterAddWrite,
        afterClearStyles,
        afterStyles,
        afterRemoveClass,
        afterAddClass,
        beforeAddRead,
        beforeAddWrite,
        beforeClearStyles,
        beforeStyles,
        beforeRemoveClass,
        beforeAddClass,
        onFinish,
        progressStart,
        progressStep,
        progressEnd
    };
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js":
/*!***************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/config-3c7f3790.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, d, g, i, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configFromURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return configFromSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setupPlatforms; });
const getPlatforms = (win) => setupPlatforms(win);
const isPlatform = (winOrPlatform, platform) => {
    if (typeof winOrPlatform === 'string') {
        platform = winOrPlatform;
        winOrPlatform = undefined;
    }
    return getPlatforms(winOrPlatform).includes(platform);
};
const setupPlatforms = (win = window) => {
    win.Ionic = win.Ionic || {};
    let platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
    }
    return platforms;
};
const detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
const isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
const isIpad = (win) => {
    // iOS 12 and below
    if (testUserAgent(win, /iPad/i)) {
        return true;
    }
    // iOS 13+
    if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
        return true;
    }
    return false;
};
const isIphone = (win) => testUserAgent(win, /iPhone/i);
const isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = (win) => testUserAgent(win, /android|sink/i);
const isAndroidTablet = (win) => {
    return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
};
const isTablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (isIpad(win) ||
        isAndroidTablet(win) ||
        ((smallest > 460 && smallest < 820) &&
            (largest > 780 && largest < 1400)));
};
const isMobile = (win) => matchMedia(win, '(any-pointer:coarse)');
const isDesktop = (win) => !isMobile(win);
const isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
const isCordova = (win) => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = (win) => {
    const capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
};
const isElectron = (win) => testUserAgent(win, /electron/i);
const isPWA = (win) => !!(win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone);
const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => win.matchMedia(query).matches;
const PLATFORMS_MAP = {
    'ipad': isIpad,
    'iphone': isIphone,
    'ios': isIOS,
    'android': isAndroid,
    'phablet': isPhablet,
    'tablet': isTablet,
    'cordova': isCordova,
    'capacitor': isCapacitorNative,
    'electron': isElectron,
    'pwa': isPWA,
    'mobile': isMobile,
    'mobileweb': isMobileWeb,
    'desktop': isDesktop,
    'hybrid': isHybrid
};

class Config {
    constructor() {
        this.m = new Map();
    }
    reset(configObj) {
        this.m = new Map(Object.entries(configObj));
    }
    get(key, fallback) {
        const value = this.m.get(key);
        return (value !== undefined) ? value : fallback;
    }
    getBoolean(key, fallback = false) {
        const val = this.m.get(key);
        if (val === undefined) {
            return fallback;
        }
        if (typeof val === 'string') {
            return val === 'true';
        }
        return !!val;
    }
    getNumber(key, fallback) {
        const val = parseFloat(this.m.get(key));
        return isNaN(val) ? (fallback !== undefined ? fallback : NaN) : val;
    }
    set(key, value) {
        this.m.set(key, value);
    }
}
const config = /*@__PURE__*/ new Config();
const configFromSession = (win) => {
    try {
        const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
        return configStr !== null ? JSON.parse(configStr) : {};
    }
    catch (e) {
        return {};
    }
};
const saveConfig = (win, c) => {
    try {
        win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
    }
    catch (e) {
        return;
    }
};
const configFromURL = (win) => {
    const configObj = {};
    win.location.search.slice(1)
        .split('&')
        .map(entry => entry.split('='))
        .map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)])
        .filter(([key]) => startsWith(key, IONIC_PREFIX))
        .map(([key, value]) => [key.slice(IONIC_PREFIX.length), value])
        .forEach(([key, value]) => {
        configObj[key] = value;
    });
    return configObj;
};
const startsWith = (input, search) => {
    return input.substr(0, search.length) === search;
};
const IONIC_PREFIX = 'ionic:';
const IONIC_SESSION_KEY = 'ionic-persist-config';




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js ***!
  \******************************************************************/
/*! exports provided: L, a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_WILL_UNLOAD; });
const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js":
/*!*************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/core-ca0488fc.js ***!
  \*************************************************************/
/*! exports provided: H, a, b, c, d, e, f, g, h, i, j, p, r, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getIonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return readTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getAssetPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return writeTask; });
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");


const NAMESPACE = 'ionic';

let queueCongestion = 0;
let queuePending = false;
let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
const win = window;
const doc = document;
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
};
const supportsShadowDom =  /*@__PURE__*/ (() => !!doc.documentElement.attachShadow)() ;
const supportsListenerOptions = /*@__PURE__*/ (() => {
    let supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get() { supportsListenerOptions = true; }
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
const supportsConstructibleStylesheets =  /*@__PURE__*/ (() => {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})() ;
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $instanceValues$: new Map()
    };
    {
        hostRef.$onInstancePromise$ = new Promise(r => hostRef.$onInstanceResolve$ = r);
    }
    {
        hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e) => console.error(e);
const moduleCache = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = (( typeof cmpMeta.$lazyBundleIds$ !== 'string')
        ? cmpMeta.$lazyBundleIds$[hostRef.$modeName$]
        : cmpMeta.$lazyBundleIds$);
    const module =  moduleCache.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js`).then(importedModule => {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = new Map();
const queueDomReads = [];
const queueDomWrites = [];
const queueDomWritesLow = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const consumeTimeout = (queue, timeout) => {
    let i = 0;
    let ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
const flush = () => {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    const timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push(...queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
const nextTick = /*@__PURE__*/ (cb) => Promise.resolve().then(cb);
const readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
const getDynamicImportFunction = (namespace) => {
    return `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
};
const patchEsm = () => {
    // @ts-ignore
    if ( !(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 76).then(__webpack_require__.t.bind(null, /*! ./css-shim-206ea950-3169f23e.js */ "../node_modules/@ionic/core/dist/esm/css-shim-206ea950-3169f23e.js", 7)).then(() => {
            plt.$cssShim$ = win.__stencil_cssshim;
            if (plt.$cssShim$) {
                return plt.$cssShim$.initShim();
            }
        });
    }
    return Promise.resolve();
};
const patchBrowser = async () => {
    {
        plt.$cssShim$ = win.__stencil_cssshim;
    }
    // @ts-ignore
    const importMeta = "";
    const regex = new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`);
    const scriptElm = Array.from(doc.querySelectorAll('script')).find(s => (regex.test(s.src) ||
        s.getAttribute('data-stencil-namespace') === NAMESPACE));
    const opts = scriptElm['data-opts'];
    if (importMeta !== '') {
        return Object.assign(Object.assign({}, opts), { resourcesUrl: new URL('.', importMeta).href });
    }
    else {
        const resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
        patchDynamicImport(resourcesUrl.href);
        if (!window.customElements) {
            // @ts-ignore
            await __webpack_require__.e(/*! import() */ 77).then(__webpack_require__.t.bind(null, /*! ./dom-96781eef-a2fb04dd.js */ "../node_modules/@ionic/core/dist/esm/dom-96781eef-a2fb04dd.js", 7));
        }
        return Object.assign(Object.assign({}, opts), { resourcesUrl: resourcesUrl.href });
    }
};
const patchDynamicImport = (base) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/v8/issues/detail?id=9558 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if ( propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if ( propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if ( propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATED_CLASS = 'hydrated';
const HYDRATE_ID = 's-id';
const HYDRATE_CHILD_ID = 'c-id';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId =  getScopeId(cmpMeta.$tagName$, mode) ;
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if ( !style) {
        scopeId = getScopeId(cmpMeta.$tagName$);
        style = styles.get(scopeId);
    }
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                if ( styleContainerNode.host && (styleElm = styleContainerNode.firstElementChild) && styleElm.tagName === 'STYLE') {
                    // This is only happening on native shadow-dom, do not needs CSS var shim
                    styleElm.innerHTML = style;
                }
                else {
                    if ( plt.$cssShim$) {
                        styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        const newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.setAttribute('data-styles', '');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if ( !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [
                ...styleContainerNode.adoptedStyleSheets,
                style
            ];
        }
    }
    return scopeId;
};
const attachStyles = (elm, cmpMeta, mode) => {
    const scopeId = addStyle(( supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if ( cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if ( cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
};
const getScopeId = (tagName, mode) => 'sc-' + (( mode) ? tagName + '-' + mode : tagName);
const convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{');
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if ( vnodeData.key) {
            key = vnodeData.key;
        }
        if ( vnodeData.name) {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class = typeof classData !== 'object'
                    ? classData
                    : Object.keys(classData)
                        .filter(k => classData[k])
                        .join(' ');
            }
        }
    }
    if ( typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => {
    return node && node.$tag$ === Host;
};
const vdomFnUtils = {
    'forEach': (children, cb) => children.map(convertToPublic).forEach(cb),
    'map': (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
const convertToPublic = (node) => {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
const convertToPrivate = (node) => {
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue === newValue) {
        return;
    }
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if ( memberName === 'class') {
        const classList = elm.classList;
        const oldClasses = parseClassList(oldValue);
        const newClasses = parseClassList(newValue);
        classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
        classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
    }
    else if ( memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (const prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if ( prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (const prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if ( prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if ( memberName === 'key')
        ;
    else if ( memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if ( !isProp && memberName[0] === 'o' && memberName[1] === 'n') {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (memberName[2] === '-') {
            // on- prefixed events
            // allows to be explicit about the dom event to listen without any magic
            // under the hood:
            // <my-cmp on-click> // listens for "click"
            // <my-cmp on-Click> // listens for "Click"
            // <my-cmp on-ionChange> // listens for "ionChange"
            // <my-cmp on-EVENTS> // listens for "EVENTS"
            memberName = memberName.slice(3);
        }
        else if (isMemberInElement(win, ln)) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the window's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = ln.slice(2);
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = ln[2] + memberName.slice(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        const isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                if (!elm.tagName.includes('-')) {
                    let n = newValue == null ? '' : newValue;
                    // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                    // tslint:disable-next-line: triple-equals
                    if (oldValue == null || elm[memberName] != n) {
                        elm[memberName] = n;
                    }
                }
                else {
                    elm[memberName] = newValue;
                }
            }
            catch (e) { }
        }
        /**
         * Need to manually update attribute if:
         * - memberName is not an attribute
         * - if we are rendering the host element in order to reflect attribute
         * - if it's a SVG, since properties might not work in <svg>
         * - if the newValue is null/undefined or 'false'.
         */
        let xlink = false;
        {
            if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                memberName = ln;
                xlink = true;
            }
        }
        if (newValue == null || newValue === false) {
            if ( xlink) {
                elm.removeAttributeNS(XLINK_NS, memberName);
            }
            else {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue;
            if ( xlink) {
                elm.setAttributeNS(XLINK_NS, memberName, newValue);
            }
            else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value) ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if ( !useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= (newVNode.$children$)
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                ? 2 /* isSlotFallback */
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                : 1 /* isSlotReference */;
        }
    }
    if ( newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if ( newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =  doc.createTextNode('');
    }
    else {
        if ( !isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = ( doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, ( newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$)
            );
        if ( isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if ( isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = (( parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if ( containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode,  referenceNode(before) );
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnode = vnodes[startIdx]) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ( (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ( (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if ( idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if ( newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if ( vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
const patch = (oldVNode, newVNode) => {
    const elm = newVNode.$elm$ = oldVNode.$elm$;
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    let defaultHolder;
    {
        // test if we're rendering an svg element, or still rendering nodes inside of one
        // only add this to the when the compiler sees we're using an svg somewhere
        isSvgMode = elm && elm.parentNode &&
            elm.ownerSVGElement !== undefined;
        isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
    }
    if ( newVNode.$text$ === null) {
        // element node
        {
            if ( newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if ( oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if ( oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if ( oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ( (defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if ( oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = newVNode.$text$;
    }
    if ( isSvgMode && newVNode.$tag$ === 'svg') {
        isSvgMode = false;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNodes = elm.childNodes;
    let ilen = childNodes.length;
    let i = 0;
    let j = 0;
    let nodeType = 0;
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(r => r.$nodeToRelocate$ === node)) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.forEach(callNodeRefs);
    }
};
const renderVdom = (hostElm, hostRef, cmpMeta, renderFnResults) => {
    hostTagName = hostElm.tagName;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    if ( cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = ( hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            for (let i = 0; i < relocateNodes.length; i++) {
                const relocateNode = relocateNodes[i];
                if (!relocateNode.$nodeToRelocate$['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    const orgLocationNode =  doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.$nodeToRelocate$;
                    relocateNode.$nodeToRelocate$.parentNode.insertBefore((relocateNode.$nodeToRelocate$['s-ol'] = orgLocationNode), relocateNode.$nodeToRelocate$);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (let i = 0; i < relocateNodes.length; i++) {
                const relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                const parentNodeRef = relocateNode.$slotRefNode$.parentNode;
                let insertBeforeNode = relocateNode.$slotRefNode$.nextSibling;
                let orgLocationNode = relocateNode.$nodeToRelocate$['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    let refNode = orgLocationNode['s-nr'];
                    if (refNode &&
                        refNode['s-sn'] === relocateNode.$nodeToRelocate$['s-sn'] &&
                        parentNodeRef === refNode.parentNode) {
                        refNode = refNode.nextSibling;
                        if (!refNode || !refNode['s-nr']) {
                            insertBeforeNode = refNode;
                            break;
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.$nodeToRelocate$.parentNode) ||
                    (relocateNode.$nodeToRelocate$.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.$nodeToRelocate$ !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.$nodeToRelocate$, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if ( ancestorComponent && !hostRef.$onRenderResolve$) {
        ancestorComponent['s-p'].push(new Promise(r => hostRef.$onRenderResolve$ = r));
    }
};
const scheduleUpdate = (elm, hostRef, cmpMeta, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if ( hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    const ancestorComponent = hostRef.$ancestorComponent$;
    const instance =  hostRef.$lazyInstance$ ;
    const update = () => updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad);
    const rc = elm['s-rc'];
    attachToAncestor(hostRef, ancestorComponent);
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.forEach(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    if ( rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.forEach(cb => cb());
        elm['s-rc'] = undefined;
    }
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    return then(promise,  () => writeTask(update)
        );
};
const updateComponent = (elm, hostRef, cmpMeta, instance, isInitialLoad) => {
    // updateComponent
    if ( isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta,  (instance.render && instance.render()));
            }
            catch (e) {
                consoleError(e);
            }
        }
    }
    if ( plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(elm, hostRef, cmpMeta);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const postUpdateComponent = (elm, hostRef, cmpMeta) => {
    const instance =  hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            // add the css class that this element has officially hydrated
            elm.classList.add(HYDRATED_CLASS);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        {
            // we've already loaded this component
            // fire off the user's componentDidUpdate method (if one was provided)
            // componentDidUpdate runs AFTER render() has been called
            // and all child components have finished updating
            safeCall(instance, 'componentDidUpdate');
        }
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(elm, hostRef, cmpMeta, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (elm, cmpMeta) => {
    {
        const hostRef = getHostRef(elm);
        if ((hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
const appDidLoad = () => {
    // on appload
    // we have finish the first big initial render
    {
        doc.documentElement.classList.add(HYDRATED_CLASS);
    }
    {
        plt.$flags$ |= 2 /* appLoaded */;
    }
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm =  hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance =  hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && ( !(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if ( instance) {
            // get an array of method names of watch functions to call
            if ( cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(watchMethodName => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ( (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if ( cmpMeta.$members$) {
        if ( Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.forEach(([memberName, [memberFlags]]) => {
            if ( ((memberFlags & 31 /* Prop */) ||
                (( flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if ( (flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    }
                });
            }
        });
        if ( ( flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    this[propName] = newValue === null && typeof this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if ( m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const addEventListeners = (elm, hostRef, listeners) => {
    hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || [];
    const removeFns = listeners.map(([flags, name, method]) => {
        const target = ( getHostListenerTarget(elm, flags) );
        const handler = hostListenerProxy(hostRef, method);
        const opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return () => plt.rel(target, name, handler, opts);
    });
    return () => removeFns.forEach(fn => fn());
};
const hostListenerProxy = (hostRef, methodName) => {
    return (ev) => {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                hostRef.$queuedListeners$.push([methodName, ev]);
            }
        }
    };
};
const getHostListenerTarget = (elm, flags) => {
    if ( flags & 4 /* TargetDocument */)
        return doc;
    if ( flags & 8 /* TargetWindow */)
        return win;
    if ( flags & 32 /* TargetBody */)
        return doc.body;
    if ( flags & 16 /* TargetParent */)
        return elm.parentElement;
    return elm;
};
const hostListenerOpts = (flags) => supportsListenerOptions ?
    {
        'passive': (flags & 1 /* Passive */) !== 0,
        'capture': (flags & 2 /* Capture */) !== 0,
    }
    : (flags & 2 /* Capture */) !== 0;
const initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
    const shadowRoot = hostElm.shadowRoot;
    const childRenderNodes = [];
    const slotNodes = [];
    const shadowRootNodes = ( shadowRoot ? [] : null);
    const vnode = hostRef.$vnode$ = newVNode(tagName, null);
    if (!plt.$orgLocNodes$) {
        initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = new Map());
    }
    hostElm[HYDRATE_ID] = hostId;
    hostElm.removeAttribute(HYDRATE_ID);
    clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
    childRenderNodes.forEach(c => {
        const orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
        const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
        const node = c.$elm$;
        if (orgLocationNode && (orgLocationNode['s-sd'] || c.$hostId$ === '0')) {
            orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
        }
        if (!shadowRoot) {
            node['s-hn'] = tagName;
            if (orgLocationNode) {
                node['s-ol'] = orgLocationNode;
                node['s-ol']['s-nr'] = node;
            }
        }
        plt.$orgLocNodes$.delete(orgLocationId);
    });
    if ( shadowRoot) {
        shadowRootNodes.forEach(shadowRootNode => {
            if (shadowRootNode) {
                shadowRoot.appendChild(shadowRootNode);
            }
        });
    }
};
const clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
    let childNodeType;
    let childIdSplt;
    let childVNode;
    let i;
    if (node.nodeType === 1 /* ElementNode */) {
        childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
        if (childNodeType) {
            // got the node data from the element's attribute
            // `${hostId}.${nodeId}.${depth}.${index}`
            childIdSplt = childNodeType.split('.');
            if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                childVNode = {
                    $flags$: 0,
                    $hostId$: childIdSplt[0],
                    $nodeId$: childIdSplt[1],
                    $depth$: childIdSplt[2],
                    $index$: childIdSplt[3],
                    $tag$: node.tagName.toLowerCase(),
                    $elm$: node,
                    $attrs$: null,
                    $children$: null,
                    $key$: null,
                    $name$: null,
                    $text$: null
                };
                childRenderNodes.push(childVNode);
                node.removeAttribute(HYDRATE_CHILD_ID);
                // this is a new child vnode
                // so ensure its parent vnode has the vchildren array
                if (!parentVNode.$children$) {
                    parentVNode.$children$ = [];
                }
                // add our child vnode to a specific index of the vnode's children
                parentVNode.$children$[childVNode.$index$] = childVNode;
                // this is now the new parent vnode for all the next child checks
                parentVNode = childVNode;
                if (shadowRootNodes && childVNode.$depth$ === '0') {
                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                }
            }
        }
        // recursively drill down, end to start so we can remove nodes
        for (i = node.childNodes.length - 1; i >= 0; i--) {
            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
        }
        if (node.shadowRoot) {
            // keep drilling down through the shadow root nodes
            for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
        childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
            // comment node for either the host id or a 0 host id
            childNodeType = childIdSplt[0];
            childVNode = {
                $flags$: 0,
                $hostId$: childIdSplt[1],
                $nodeId$: childIdSplt[2],
                $depth$: childIdSplt[3],
                $index$: childIdSplt[4],
                $elm$: node,
                $attrs$: null,
                $children$: null,
                $key$: null,
                $name$: null,
                $tag$: null,
                $text$: null
            };
            if (childNodeType === TEXT_NODE_ID) {
                childVNode.$elm$ = node.nextSibling;
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
                    childVNode.$text$ = childVNode.$elm$.textContent;
                    childRenderNodes.push(childVNode);
                    // remove the text comment since it's no longer needed
                    node.remove();
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                    if (shadowRootNodes && childVNode.$depth$ === '0') {
                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                    }
                }
            }
            else if (childVNode.$hostId$ === hostId) {
                // this comment node is specifcally for this host id
                if (childNodeType === SLOT_NODE_ID) {
                    // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                    childVNode.$tag$ = 'slot';
                    if (childIdSplt[5]) {
                        node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                    }
                    else {
                        node['s-sn'] = '';
                    }
                    node['s-sr'] = true;
                    if ( shadowRootNodes) {
                        // browser support shadowRoot and this is a shadow dom component
                        // create an actual slot element
                        childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                        if (childVNode.$name$) {
                            // add the slot name attribute
                            childVNode.$elm$.setAttribute('name', childVNode.$name$);
                        }
                        // insert the new slot element before the slot comment
                        node.parentNode.insertBefore(childVNode.$elm$, node);
                        // remove the slot comment since it's not needed for shadow
                        node.remove();
                        if (childVNode.$depth$ === '0') {
                            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                        }
                    }
                    slotNodes.push(childVNode);
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                }
                else if (childNodeType === CONTENT_REF_ID) {
                    // `${CONTENT_REF_ID}.${hostId}`;
                    if ( shadowRootNodes) {
                        // remove the content ref comment since it's not needed for shadow
                        node.remove();
                    }
                    else {
                        hostElm['s-cr'] = node;
                        node['s-cn'] = true;
                    }
                }
            }
        }
    }
    else if (parentVNode && parentVNode.$tag$ === 'style') {
        const vnode = newVNode(null, node.textContent);
        vnode.$elm$ = node;
        vnode.$index$ = '0';
        parentVNode.$children$ = [vnode];
    }
};
const initializeDocumentHydrate = (node, orgLocNodes) => {
    if (node.nodeType === 1 /* ElementNode */) {
        let i = 0;
        for (; i < node.childNodes.length; i++) {
            initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
        }
        if (node.shadowRoot) {
            for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
                initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        const childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[0] === ORG_LOCATION_ID) {
            orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
            node.nodeValue = '';
            // useful to know if the original location is
            // the root light-dom of a shadow dom component
            node['s-sd'] = (childIdSplt[3] === '');
        }
    }
};
const modeResolutionChain = [];
const computeMode = (elm) => modeResolutionChain.map(h => h(elm)).find(m => !!m);
// Public
const setMode = (handler) => modeResolutionChain.push(handler);
const getMode = (ref) => getHostRef(ref).$modeName$;
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ( (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        // we haven't initialized this element yet
        hostRef.$flags$ |= 32 /* hasInitializedComponent */;
        if ( hostRef.$modeName$ == null) {
            // initializeComponent
            // looks like mode wasn't set as a property directly yet
            // first check if there's an attribute
            // next check the app's global
            hostRef.$modeName$ = typeof cmpMeta.$lazyBundleIds$ !== 'string' ? computeMode(elm) : '';
        }
        {
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta, hostRef);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                Cstr = await Cstr;
            }
            if ( !Cstr.isProxied) {
                // we'eve never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        const scopeId =  getScopeId(cmpMeta.$tagName$, hostRef.$modeName$) ;
        if ( !styles.has(scopeId) && Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            if ( typeof style !== 'string') {
                style = style[hostRef.$modeName$];
            }
            if ( cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
                style = await __webpack_require__.e(/*! import() */ 90).then(__webpack_require__.bind(null, /*! ./shadow-css-4889ae62-23996f3f.js */ "../node_modules/@ionic/core/dist/esm/shadow-css-4889ae62-23996f3f.js")).then(m => m.scopeCss(style, scopeId, false));
            }
            registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(elm, hostRef, cmpMeta, true);
    if ( ancestorComponent && ancestorComponent['s-rc']) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm, cmpMeta) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        const hostRef = getHostRef(elm);
        if ( cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef.$rmListeners$ = addEventListeners(elm, hostRef, cmpMeta.$listeners$);
        }
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            let hostId;
            {
                hostId = elm.getAttribute(HYDRATE_ID);
                if (hostId) {
                    if ( supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        const scopeId =  addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode')) ;
                        elm.classList.remove(scopeId + '-h');
                        elm.classList.remove(scopeId + '-s');
                    }
                    initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
                }
            }
            if ( !hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if (
                    ( cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                    ( cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (( ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id')) ||
                        (ancestorComponent['s-p'])) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if ( cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const crName =  '';
    const contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance =  hostRef.$lazyInstance$ ;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$();
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if ( plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
        {
            safeCall(instance, 'componentDidUnload');
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const cmpTags = [];
    const exclude = options.exclude || [];
    const head = doc.head;
    const customElements = win.customElements;
    const y = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    let appLoadFallback;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    {
        // If the app is already hydrated there is not point to disable the
        // async queue. This will improve the first input delay
        plt.$flags$ |= 2 /* appLoaded */;
    }
    {
        const styles = doc.querySelectorAll('style[s-id]');
        let globalStyles = '';
        let i = 0;
        for (; i < styles.length; i++) {
            globalStyles += styles[i].innerHTML;
        }
        for (i = 0; i < styles.length; i++) {
            const styleElm = styles[i];
            registerStyle(styleElm.getAttribute(HYDRATE_ID), globalStyles + convertScopedToShadow(styleElm.innerHTML), true);
        }
    }
    lazyBundles.forEach(lazyBundle => lazyBundle[1].forEach(compactMeta => {
        const cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$members$ = compactMeta[2];
        }
        {
            cmpMeta.$listeners$ = compactMeta[3];
        }
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if ( !supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        const tagName = cmpMeta.$tagName$;
        const HostElement = class extends HTMLElement {
            // StencilLazyHost
            constructor(self) {
                // @ts-ignore
                super(self);
                self = this;
                registerHost(self);
                if ( cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if ( !('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
            }
            connectedCallback() {
                if (appLoadFallback) {
                    clearTimeout(appLoadFallback);
                    appLoadFallback = null;
                }
                plt.jmp(() => connectedCallback(this, cmpMeta));
            }
            disconnectedCallback() {
                plt.jmp(() => disconnectedCallback(this));
            }
            's-hmr'(hmrVersionId) {
            }
            forceUpdate() {
                forceUpdate(this, cmpMeta);
            }
            componentOnReady() {
                return getHostRef(this).$onReadyPromise$;
            }
        };
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }));
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
    // Fallback appLoad event
    plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
};
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return elm.dispatchEvent(new ( CustomEvent)(name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail
            }));
        }
    };
};
const getAssetPath = (path) => {
    const assetUrl = new URL(path, plt.$resourcesUrl$);
    return (assetUrl.origin !== win.location.origin)
        ? assetUrl.href
        : assetUrl.pathname;
};
const getElement = (ref) =>  getHostRef(ref).$hostElement$ ;

let mode;
const getIonMode = (ref) => {
    return (ref && getMode(ref)) || mode;
};
const global0 = () => {
    const doc = document;
    const win = window;
    const Ionic = win.Ionic = win.Ionic || {};
    // Setup platforms
    Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["s"])(win);
    // create the Ionic.config from raw config object (if it exists)
    // and convert Ionic.config into a ConfigApi that has a get() fn
    const configObj = Object.assign(Object.assign(Object.assign(Object.assign({}, Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["c"])(win)), { persistConfig: false }), Ionic.config), Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["a"])(win));
    _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].reset(configObj);
    if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].getBoolean('persistConfig')) {
        Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["d"])(win, configObj);
    }
    // first see if the mode was set as an attribute on <html>
    // which could have been set by the user, or by prerendering
    // otherwise get the mode via config settings, and fallback to md
    Ionic.config = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"];
    Ionic.mode = mode = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].get('mode', (doc.documentElement.getAttribute('mode')) || (Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["i"])(win, 'ios') ? 'ios' : 'md'));
    _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].set('mode', mode);
    doc.documentElement.setAttribute('mode', mode);
    doc.documentElement.classList.add(mode);
    if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].getBoolean('_testing')) {
        _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].set('animated', false);
    }
    setMode((elm) => elm.mode = elm.mode || elm.getAttribute('mode') || mode);
};

const global1 = () => {
    setMode((el) => el.tagName === 'ION-ICON' ? el.mode || el.getAttribute('mode') : null);
};

const globals = () => {
  global0();
  global1();
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js":
/*!****************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js ***!
  \****************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return raf; });
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
const raf = (h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};
const hasShadowDom = (el) => {
    return !!el.shadowRoot && !!el.attachShadow;
};
const findItemLabel = (componentEl) => {
    const itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
const renderHiddenInput = (always, container, name, value, disabled) => {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
const clamp = (min, n, max) => {
    return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
const now = (ev) => {
    return ev.timeStamp || Date.now();
};
const pointerCoord = (ev) => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
const isEndSide = (side) => {
    const isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
    }
};
const debounceEvent = (event, wait) => {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/index-1e5940d5.js":
/*!**************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/index-1e5940d5.js ***!
  \**************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuController; });
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");


/**
 * baseAnimation
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
const baseAnimation = () => {
    // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
    // "Apply the sharp curve to items temporarily leaving the screen that may return
    // from the same exit point. When they return, use the deceleration curve. On mobile,
    // this transition typically occurs over 300ms" -- MD Motion Guide
    return Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .easing('cubic-bezier(0.0, 0.0, 0.2, 1)') // Deceleration curve (Entering the screen)
        .duration(300);
};

/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
const menuOverlayAnimation = (menu) => {
    let closedX;
    let openedX;
    const BOX_SHADOW_WIDTH = 8;
    const width = menu.width + BOX_SHADOW_WIDTH;
    const menuAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
    if (menu.isEndSide) {
        // right side
        closedX = width + 'px';
        openedX = '0px';
    }
    else {
        // left side
        closedX = -width + 'px';
        openedX = '0px';
    }
    menuAnimation
        .addElement(menu.menuInnerEl)
        .fromTo('transform', `translateX(${closedX})`, `translateX(${openedX})`);
    backdropAnimation
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation().addAnimation([menuAnimation, backdropAnimation]);
};

/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
const menuPushAnimation = (menu) => {
    let contentOpenedX;
    let menuClosedX;
    const width = menu.width;
    if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    const menuAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.menuInnerEl)
        .fromTo('transform', `translateX(${menuClosedX})`, 'translateX(0px)');
    const contentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.contentEl)
        .fromTo('transform', 'translateX(0px)', `translateX(${contentOpenedX})`);
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.32);
    return baseAnimation().addAnimation([menuAnimation, backdropAnimation, contentAnimation]);
};

/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
const menuRevealAnimation = (menu) => {
    const openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
    const contentOpen = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        .addElement(menu.contentEl) // REVIEW
        .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);
    return baseAnimation().addAnimation(contentOpen);
};

const createMenuController = () => {
    const menuAnimations = new Map();
    const menus = [];
    const open = async (menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            return menuEl.open();
        }
        return false;
    };
    const close = async (menu) => {
        const menuEl = await (menu !== undefined ? get(menu) : getOpen());
        if (menuEl !== undefined) {
            return menuEl.close();
        }
        return false;
    };
    const toggle = async (menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            return menuEl.toggle();
        }
        return false;
    };
    const enable = async (shouldEnable, menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            menuEl.disabled = !shouldEnable;
        }
        return menuEl;
    };
    const swipeGesture = async (shouldEnable, menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            menuEl.swipeGesture = shouldEnable;
        }
        return menuEl;
    };
    const isOpen = async (menu) => {
        if (menu != null) {
            const menuEl = await get(menu);
            return (menuEl !== undefined && menuEl.isOpen());
        }
        else {
            const menuEl = await getOpen();
            return menuEl !== undefined;
        }
    };
    const isEnabled = async (menu) => {
        const menuEl = await get(menu);
        if (menuEl) {
            return !menuEl.disabled;
        }
        return false;
    };
    const get = async (menu) => {
        await waitUntilReady();
        if (menu === 'start' || menu === 'end') {
            // there could be more than one menu on the same side
            // so first try to get the enabled one
            const menuRef = find(m => m.side === menu && !m.disabled);
            if (menuRef) {
                return menuRef;
            }
            // didn't find a menu side that is enabled
            // so try to get the first menu side found
            return find(m => m.side === menu);
        }
        else if (menu != null) {
            // the menuId was not left or right
            // so try to get the menu by its "id"
            return find(m => m.menuId === menu);
        }
        // return the first enabled menu
        const menuEl = find(m => !m.disabled);
        if (menuEl) {
            return menuEl;
        }
        // get the first menu in the array, if one exists
        return menus.length > 0 ? menus[0].el : undefined;
    };
    /**
     * Get the instance of the opened menu. Returns `null` if a menu is not found.
     */
    const getOpen = async () => {
        await waitUntilReady();
        return _getOpenSync();
    };
    /**
     * Get all menu instances.
     */
    const getMenus = async () => {
        await waitUntilReady();
        return getMenusSync();
    };
    /**
     * Get whether or not a menu is animating. Returns `true` if any
     * menu is currently animating.
     */
    const isAnimating = async () => {
        await waitUntilReady();
        return isAnimatingSync();
    };
    const registerAnimation = (name, animation) => {
        menuAnimations.set(name, animation);
    };
    const _register = (menu) => {
        if (menus.indexOf(menu) < 0) {
            if (!menu.disabled) {
                _setActiveMenu(menu);
            }
            menus.push(menu);
        }
    };
    const _unregister = (menu) => {
        const index = menus.indexOf(menu);
        if (index > -1) {
            menus.splice(index, 1);
        }
    };
    const _setActiveMenu = (menu) => {
        // if this menu should be enabled
        // then find all the other menus on this same side
        // and automatically disable other same side menus
        const side = menu.side;
        menus
            .filter(m => m.side === side && m !== menu)
            .forEach(m => m.disabled = true);
    };
    const _setOpen = async (menu, shouldOpen, animated) => {
        if (isAnimatingSync()) {
            return false;
        }
        if (shouldOpen) {
            const openedMenu = await getOpen();
            if (openedMenu && menu.el !== openedMenu) {
                await openedMenu.setOpen(false, false);
            }
        }
        return menu._setOpen(shouldOpen, animated);
    };
    const _createAnimation = (type, menuCmp) => {
        const animationBuilder = menuAnimations.get(type);
        if (!animationBuilder) {
            throw new Error('animation not registered');
        }
        const animation = animationBuilder(menuCmp);
        return animation;
    };
    const _getOpenSync = () => {
        return find(m => m._isOpen);
    };
    const getMenusSync = () => {
        return menus.map(menu => menu.el);
    };
    const isAnimatingSync = () => {
        return menus.some(menu => menu.isAnimating);
    };
    const find = (predicate) => {
        const instance = menus.find(predicate);
        if (instance !== undefined) {
            return instance.el;
        }
        return undefined;
    };
    const waitUntilReady = () => {
        return Promise.all(Array.from(document.querySelectorAll('ion-menu'))
            .map(menu => menu.componentOnReady()));
    };
    registerAnimation('reveal', menuRevealAnimation);
    registerAnimation('push', menuPushAnimation);
    registerAnimation('overlay', menuOverlayAnimation);
    return {
        registerAnimation,
        get,
        getMenus,
        getOpen,
        isEnabled,
        swipeGesture,
        isAnimating,
        isOpen,
        enable,
        toggle,
        close,
        open,
        _getOpenSync,
        _createAnimation,
        _register,
        _unregister,
        _setOpen,
        _setActiveMenu,
    };
};
const menuController = /*@__PURE__*/ createMenuController();




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/index-624eea58.js":
/*!**************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/index-624eea58.js ***!
  \**************************************************************/
/*! exports provided: GESTURE_CONTROLLER, createGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GESTURE_CONTROLLER", function() { return GESTURE_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return createGesture; });
class GestureController {
    constructor() {
        this.gestureId = 0;
        this.requestedStart = new Map();
        this.disabledGestures = new Map();
        this.disabledScroll = new Set();
    }
    /**
     * Creates a gesture delegate based on the GestureConfig passed
     */
    createGesture(config) {
        return new GestureDelegate(this, this.newID(), config.name, config.priority || 0, !!config.disableScroll);
    }
    /**
     * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
     */
    createBlocker(opts = {}) {
        return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            this.requestedStart.delete(id);
            return false;
        }
        this.requestedStart.set(id, priority);
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        const requestedStart = this.requestedStart;
        let maxPriority = -10000;
        requestedStart.forEach(value => {
            maxPriority = Math.max(maxPriority, value);
        });
        if (maxPriority === priority) {
            this.capturedId = id;
            requestedStart.clear();
            const event = new CustomEvent('ionGestureCaptured', { detail: { gestureName } });
            document.dispatchEvent(event);
            return true;
        }
        requestedStart.delete(id);
        return false;
    }
    release(id) {
        this.requestedStart.delete(id);
        if (this.capturedId === id) {
            this.capturedId = undefined;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures.get(gestureName);
        if (set === undefined) {
            set = new Set();
            this.disabledGestures.set(gestureName, set);
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        const set = this.disabledGestures.get(gestureName);
        if (set !== undefined) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        this.disabledScroll.add(id);
        if (this.disabledScroll.size === 1) {
            document.body.classList.add(BACKDROP_NO_SCROLL);
        }
    }
    enableScroll(id) {
        this.disabledScroll.delete(id);
        if (this.disabledScroll.size === 0) {
            document.body.classList.remove(BACKDROP_NO_SCROLL);
        }
    }
    canStart(gestureName) {
        if (this.capturedId !== undefined) {
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    }
    isCaptured() {
        return this.capturedId !== undefined;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        const disabled = this.disabledGestures.get(gestureName);
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    }
    newID() {
        this.gestureId++;
        return this.gestureId;
    }
}
class GestureDelegate {
    constructor(ctrl, id, name, priority, disableScroll) {
        this.id = id;
        this.name = name;
        this.disableScroll = disableScroll;
        this.priority = priority * 1000000 + id;
        this.ctrl = ctrl;
    }
    canStart() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    }
    start() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.id, this.priority);
    }
    capture() {
        if (!this.ctrl) {
            return false;
        }
        const captured = this.ctrl.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
        return captured;
    }
    release() {
        if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
            }
        }
    }
    destroy() {
        this.release();
        this.ctrl = undefined;
    }
}
class BlockerDelegate {
    constructor(ctrl, id, disable, disableScroll) {
        this.id = id;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    block() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.disableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
    }
    unblock() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.enableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
        }
    }
    destroy() {
        this.unblock();
        this.ctrl = undefined;
    }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const GESTURE_CONTROLLER = new GestureController();

const addEventListener = (el, eventName, callback, opts) => {
    // use event listener options when supported
    // otherwise it's just a boolean for the "capture" arg
    const listenerOpts = supportsPassive(el) ? {
        'capture': !!opts.capture,
        'passive': !!opts.passive,
    } : !!opts.capture;
    let add;
    let remove;
    if (el['__zone_symbol__addEventListener']) {
        add = '__zone_symbol__addEventListener';
        remove = '__zone_symbol__removeEventListener';
    }
    else {
        add = 'addEventListener';
        remove = 'removeEventListener';
    }
    el[add](eventName, callback, listenerOpts);
    return () => {
        el[remove](eventName, callback, listenerOpts);
    };
};
const supportsPassive = (node) => {
    if (_sPassive === undefined) {
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    _sPassive = true;
                }
            });
            node.addEventListener('optsTest', () => { return; }, opts);
        }
        catch (e) {
            _sPassive = false;
        }
    }
    return !!_sPassive;
};
let _sPassive;

const MOUSE_WAIT = 2000;
const createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
    let rmTouchStart;
    let rmTouchMove;
    let rmTouchEnd;
    let rmTouchCancel;
    let rmMouseStart;
    let rmMouseMove;
    let rmMouseUp;
    let lastTouchEvent = 0;
    const handleTouchStart = (ev) => {
        lastTouchEvent = Date.now() + MOUSE_WAIT;
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmTouchMove && pointerMove) {
            rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
        }
        if (!rmTouchEnd) {
            rmTouchEnd = addEventListener(el, 'touchend', handleTouchEnd, options);
        }
        if (!rmTouchCancel) {
            rmTouchCancel = addEventListener(el, 'touchcancel', handleTouchEnd, options);
        }
    };
    const handleMouseDown = (ev) => {
        if (lastTouchEvent > Date.now()) {
            return;
        }
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmMouseMove && pointerMove) {
            rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
        }
        if (!rmMouseUp) {
            rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
        }
    };
    const handleTouchEnd = (ev) => {
        stopTouch();
        if (pointerUp) {
            pointerUp(ev);
        }
    };
    const handleMouseUp = (ev) => {
        stopMouse();
        if (pointerUp) {
            pointerUp(ev);
        }
    };
    const stopTouch = () => {
        if (rmTouchMove) {
            rmTouchMove();
        }
        if (rmTouchEnd) {
            rmTouchEnd();
        }
        if (rmTouchCancel) {
            rmTouchCancel();
        }
        rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
    };
    const stopMouse = () => {
        if (rmMouseMove) {
            rmMouseMove();
        }
        if (rmMouseUp) {
            rmMouseUp();
        }
        rmMouseMove = rmMouseUp = undefined;
    };
    const stop = () => {
        stopTouch();
        stopMouse();
    };
    const setDisabled = (disabled) => {
        if (disabled) {
            if (rmTouchStart) {
                rmTouchStart();
            }
            if (rmMouseStart) {
                rmMouseStart();
            }
            rmTouchStart = rmMouseStart = undefined;
            stop();
        }
        else {
            if (!rmTouchStart) {
                rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
            }
            if (!rmMouseStart) {
                rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
            }
        }
    };
    const destroy = () => {
        setDisabled(true);
        pointerUp = pointerMove = pointerDown = undefined;
    };
    return {
        setDisabled,
        stop,
        destroy
    };
};
const getDocument = (node) => {
    return node instanceof Document ? node : node.ownerDocument;
};

const createPanRecognizer = (direction, thresh, maxAngle) => {
    const radians = maxAngle * (Math.PI / 180);
    const isDirX = direction === 'x';
    const maxCosine = Math.cos(radians);
    const threshold = thresh * thresh;
    let startX = 0;
    let startY = 0;
    let dirty = false;
    let isPan = 0;
    return {
        start(x, y) {
            startX = x;
            startY = y;
            isPan = 0;
            dirty = true;
        },
        detect(x, y) {
            if (!dirty) {
                return false;
            }
            const deltaX = (x - startX);
            const deltaY = (y - startY);
            const distance = deltaX * deltaX + deltaY * deltaY;
            if (distance < threshold) {
                return false;
            }
            const hypotenuse = Math.sqrt(distance);
            const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
            if (cosine > maxCosine) {
                isPan = 1;
            }
            else if (cosine < -maxCosine) {
                isPan = -1;
            }
            else {
                isPan = 0;
            }
            dirty = false;
            return true;
        },
        isGesture() {
            return isPan !== 0;
        },
        getDirection() {
            return isPan;
        }
    };
};

const createGesture = (config) => {
    let hasCapturedPan = false;
    let hasStartedPan = false;
    let hasFiredStart = true;
    let isMoveQueued = false;
    const finalConfig = Object.assign({ disableScroll: false, direction: 'x', gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, config);
    const canStart = finalConfig.canStart;
    const onWillStart = finalConfig.onWillStart;
    const onStart = finalConfig.onStart;
    const onEnd = finalConfig.onEnd;
    const notCaptured = finalConfig.notCaptured;
    const onMove = finalConfig.onMove;
    const threshold = finalConfig.threshold;
    const detail = {
        type: 'pan',
        startX: 0,
        startY: 0,
        startTimeStamp: 0,
        currentX: 0,
        currentY: 0,
        velocityX: 0,
        velocityY: 0,
        deltaX: 0,
        deltaY: 0,
        timeStamp: 0,
        event: undefined,
        data: undefined
    };
    const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
    const gesture = GESTURE_CONTROLLER.createGesture({
        name: config.gestureName,
        priority: config.gesturePriority,
        disableScroll: config.disableScroll
    });
    const pointerDown = (ev) => {
        const timeStamp = now(ev);
        if (hasStartedPan || !hasFiredStart) {
            return false;
        }
        updateDetail(ev, detail);
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp = timeStamp;
        detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
        detail.event = ev;
        // Check if gesture can start
        if (canStart && canStart(detail) === false) {
            return false;
        }
        // Release fallback
        gesture.release();
        // Start gesture
        if (!gesture.start()) {
            return false;
        }
        hasStartedPan = true;
        if (threshold === 0) {
            return tryToCapturePan();
        }
        pan.start(detail.startX, detail.startY);
        return true;
    };
    const pointerMove = (ev) => {
        // fast path, if gesture is currently captured
        // do minimum job to get user-land even dispatched
        if (hasCapturedPan) {
            if (!isMoveQueued && hasFiredStart) {
                isMoveQueued = true;
                calcGestureData(detail, ev);
                requestAnimationFrame(fireOnMove);
            }
            return;
        }
        // gesture is currently being detected
        calcGestureData(detail, ev);
        if (pan.detect(detail.currentX, detail.currentY)) {
            if (!pan.isGesture() || !tryToCapturePan()) {
                abortGesture();
            }
        }
    };
    const fireOnMove = () => {
        // Since fireOnMove is called inside a RAF, onEnd() might be called,
        // we must double check hasCapturedPan
        if (!hasCapturedPan) {
            return;
        }
        isMoveQueued = false;
        if (onMove) {
            onMove(detail);
        }
    };
    const tryToCapturePan = () => {
        if (gesture && !gesture.capture()) {
            return false;
        }
        hasCapturedPan = true;
        hasFiredStart = false;
        // reset start position since the real user-land event starts here
        // If the pan detector threshold is big, not resetting the start position
        // will cause a jump in the animation equal to the detector threshold.
        // the array of positions used to calculate the gesture velocity does not
        // need to be cleaned, more points in the positions array always results in a
        // more accurate value of the velocity.
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp;
        if (onWillStart) {
            onWillStart(detail).then(fireOnStart);
        }
        else {
            fireOnStart();
        }
        return true;
    };
    const fireOnStart = () => {
        if (onStart) {
            onStart(detail);
        }
        hasFiredStart = true;
    };
    const reset = () => {
        hasCapturedPan = false;
        hasStartedPan = false;
        isMoveQueued = false;
        hasFiredStart = true;
        gesture.release();
    };
    // END *************************
    const pointerUp = (ev) => {
        const tmpHasCaptured = hasCapturedPan;
        const tmpHasFiredStart = hasFiredStart;
        reset();
        if (!tmpHasFiredStart) {
            return;
        }
        calcGestureData(detail, ev);
        // Try to capture press
        if (tmpHasCaptured) {
            if (onEnd) {
                onEnd(detail);
            }
            return;
        }
        // Not captured any event
        if (notCaptured) {
            notCaptured(detail);
        }
    };
    const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
        capture: false,
    });
    const abortGesture = () => {
        reset();
        pointerEvents.stop();
        if (notCaptured) {
            notCaptured(detail);
        }
    };
    return {
        setDisabled(disabled) {
            if (disabled && hasCapturedPan) {
                pointerUp(undefined);
            }
            pointerEvents.setDisabled(disabled);
        },
        destroy() {
            gesture.destroy();
            pointerEvents.destroy();
        }
    };
};
const calcGestureData = (detail, ev) => {
    if (!ev) {
        return;
    }
    const prevX = detail.currentX;
    const prevY = detail.currentY;
    const prevT = detail.timeStamp;
    updateDetail(ev, detail);
    const currentX = detail.currentX;
    const currentY = detail.currentY;
    const timestamp = detail.timeStamp = now(ev);
    const timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        const velocityX = (currentX - prevX) / timeDelta;
        const velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    detail.event = ev;
};
const updateDetail = (ev, detail) => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    let x = 0;
    let y = 0;
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
};
const now = (ev) => {
    return ev.timeStamp || Date.now();
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/index.mjs":
/*!******************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/index.mjs ***!
  \******************************************************/
/*! exports provided: getPlatforms, isPlatform, createAnimation, createGesture, LIFECYCLE_DID_ENTER, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_WILL_UNLOAD, menuController, actionSheetController, alertController, loadingController, modalController, pickerController, popoverController, toastController, getMode, setupConfig */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMode", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupConfig", function() { return setupConfig; });
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlatforms", function() { return _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlatform", function() { return _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__["createGesture"]; });

/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_DID_ENTER", function() { return _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_DID_LEAVE", function() { return _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_WILL_ENTER", function() { return _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_WILL_LEAVE", function() { return _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_WILL_UNLOAD", function() { return _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["d"]; });

/* harmony import */ var _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-1e5940d5.js */ "../node_modules/@ionic/core/dist/esm/index-1e5940d5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menuController", function() { return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]; });

/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionSheetController", function() { return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alertController", function() { return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadingController", function() { return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modalController", function() { return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickerController", function() { return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popoverController", function() { return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toastController", function() { return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["t"]; });









const setupConfig = (config) => {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
const getMode = () => {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/loader.mjs":
/*!*******************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/loader.mjs ***!
  \*******************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");



const defineCustomElements = (win, options) => {
  return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(() => {
    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["g"])();
    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["b"])(JSON.parse("[[{\"ios\":\"ion-select_3-ios\",\"md\":\"ion-select_3-md\"},[[2,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"options\":[16]},[[0,\"ionSelect\",\"onSelect\"]]],[1,\"ion-select\",{\"disabled\":[4],\"cancelText\":[1,\"cancel-text\"],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"name\":[1],\"selectedText\":[1,\"selected-text\"],\"multiple\":[4],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"compareWith\":[1,\"compare-with\"],\"value\":[1032],\"isExpanded\":[32],\"open\":[64]}],[1,\"ion-select-option\",{\"disabled\":[4],\"selected\":[4],\"value\":[8]}]]],[{\"ios\":\"ion-menu_4-ios\",\"md\":\"ion-menu_4-md\"},[[1,\"ion-menu-button\",{\"color\":[1],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[1,\"ion-menu\",{\"contentId\":[1,\"content-id\"],\"menuId\":[1,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[32,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]]],[0,\"ion-menu-controller\",{\"open\":[64],\"close\":[64],\"toggle\":[64],\"enable\":[64],\"swipeGesture\":[64],\"isOpen\":[64],\"isEnabled\":[64],\"get\":[64],\"getOpen\":[64],\"getMenus\":[64],\"isAnimating\":[64],\"registerAnimation\":[64]}],[1,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[{\"ios\":\"ion-action-sheet-ios\",\"md\":\"ion-action-sheet-md\"},[[2,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-fab_3-ios\",\"md\":\"ion-fab_3-md\"},[[1,\"ion-fab-button\",{\"color\":[1],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1]}],[1,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64]}],[1,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]}]]],[{\"ios\":\"ion-refresher_2-ios\",\"md\":\"ion-refresher_2-md\"},[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[0,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]}]]],[{\"ios\":\"ion-backdrop-ios\",\"md\":\"ion-backdrop-md\"},[[1,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"touchstart\",\"onTouchStart\"],[2,\"click\",\"onMouseDown\"],[2,\"mousedown\",\"onMouseDown\"]]]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[{\"ios\":\"ion-alert-ios\",\"md\":\"ion-alert-md\"},[[2,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-back-button-ios\",\"md\":\"ion-back-button-md\"},[[2,\"ion-back-button\",{\"color\":[1],\"defaultHref\":[1,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1]}]]],[{\"ios\":\"ion-loading-ios\",\"md\":\"ion-loading-md\"},[[2,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-toast-ios\",\"md\":\"ion-toast-md\"},[[1,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"color\":[1],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"showCloseButton\":[4,\"show-close-button\"],\"closeButtonText\":[1,\"close-button-text\"],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-card_5-ios\",\"md\":\"ion-card_5-md\"},[[6,\"ion-card\",{\"color\":[1],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1]}],[0,\"ion-card-content\"],[1,\"ion-card-header\",{\"color\":[1],\"translucent\":[4]}],[1,\"ion-card-subtitle\",{\"color\":[1]}],[1,\"ion-card-title\",{\"color\":[1]}]]],[{\"ios\":\"ion-item-option_3-ios\",\"md\":\"ion-item-option_3-md\"},[[1,\"ion-item-option\",{\"color\":[1],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[0,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]}]]],[{\"ios\":\"ion-infinite-scroll_2-ios\",\"md\":\"ion-infinite-scroll_2-md\"},[[0,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]}]]],[{\"ios\":\"ion-reorder_2-ios\",\"md\":\"ion-reorder_2-md\"},[[1,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]}]]],[{\"ios\":\"ion-segment_2-ios\",\"md\":\"ion-segment_2-md\"},[[1,\"ion-segment-button\",{\"checked\":[1028],\"disabled\":[4],\"layout\":[1],\"type\":[1],\"value\":[1]}],[2,\"ion-segment\",{\"color\":[1],\"disabled\":[4],\"scrollable\":[4],\"value\":[1025]},[[0,\"ionSelect\",\"segmentClick\"]]]]],[{\"ios\":\"ion-tab-bar_2-ios\",\"md\":\"ion-tab-bar_2-md\"},[[1,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[16,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[1,\"ion-tab-bar\",{\"color\":[1],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},[[8,\"keyboardWillHide\",\"onKeyboardWillHide\"],[8,\"keyboardWillShow\",\"onKeyboardWillShow\"]]]]],[{\"ios\":\"ion-chip-ios\",\"md\":\"ion-chip-md\"},[[1,\"ion-chip\",{\"color\":[1],\"outline\":[4]}]]],[{\"ios\":\"ion-modal-ios\",\"md\":\"ion-modal-md\"},[[2,\"ion-modal\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-popover-ios\",\"md\":\"ion-popover-md\"},[[2,\"ion-popover\",{\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-searchbar-ios\",\"md\":\"ion-searchbar-md\"},[[2,\"ion-searchbar\",{\"color\":[1],\"animated\":[4],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[8,\"show-cancel-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[\"ion-action-sheet-controller_8\",[[0,\"ion-action-sheet-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-alert-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[1,\"ion-anchor\",{\"color\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"]}],[0,\"ion-loading-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-modal-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-picker-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-popover-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-toast-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}]]],[{\"ios\":\"ion-app_8-ios\",\"md\":\"ion-app_8-md\"},[[0,\"ion-app\"],[2,\"ion-buttons\",{\"collapse\":[4]}],[1,\"ion-content\",{\"color\":[1],\"fullscreen\":[4],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"getScrollElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[2,\"click\",\"onClick\"]]],[0,\"ion-footer\",{\"translucent\":[4]}],[0,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}],[1,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}],[1,\"ion-title\",{\"color\":[1],\"size\":[1]}],[1,\"ion-toolbar\",{\"color\":[1]},[[0,\"ionStyle\",\"childrenStyle\"]]]]],[\"ion-nav_5\",[[1,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64]}],[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"]}],[0,\"ion-nav-pop\"],[0,\"ion-nav-push\",{\"component\":[1],\"componentProps\":[16]}],[0,\"ion-nav-set-root\",{\"component\":[1],\"componentProps\":[16]}]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[1,\"ion-router-link\",{\"color\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1]}]]],[{\"ios\":\"ion-avatar_3-ios\",\"md\":\"ion-avatar_3-md\"},[[1,\"ion-avatar\"],[1,\"ion-badge\",{\"color\":[1]}],[1,\"ion-thumbnail\"]]],[\"ion-col_3\",[[1,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[1,\"ion-grid\",{\"fixed\":[4]}],[1,\"ion-row\"]]],[{\"ios\":\"ion-slide_2-ios\",\"md\":\"ion-slide_2-md\"},[[0,\"ion-slide\"],[4,\"ion-slides\",{\"options\":[8],\"pager\":[4],\"scrollbar\":[4],\"update\":[64],\"updateAutoHeight\":[64],\"slideTo\":[64],\"slideNext\":[64],\"slidePrev\":[64],\"getActiveIndex\":[64],\"getPreviousIndex\":[64],\"length\":[64],\"isEnd\":[64],\"isBeginning\":[64],\"startAutoplay\":[64],\"stopAutoplay\":[64],\"lockSwipeToNext\":[64],\"lockSwipeToPrev\":[64],\"lockSwipes\":[64],\"getSwiper\":[64]}]]],[\"ion-tab_2\",[[1,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]}],[1,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[{\"ios\":\"ion-checkbox-ios\",\"md\":\"ion-checkbox-md\"},[[1,\"ion-checkbox\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"value\":[1]}]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]}]]],[{\"ios\":\"ion-input-ios\",\"md\":\"ion-input-md\"},[[2,\"ion-input\",{\"color\":[1],\"accept\":[1],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"max\":[1],\"maxlength\":[2],\"min\":[1],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"step\":[1],\"size\":[2],\"type\":[1],\"value\":[1025],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[{\"ios\":\"ion-progress-bar-ios\",\"md\":\"ion-progress-bar-md\"},[[1,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[1]}]]],[{\"ios\":\"ion-range-ios\",\"md\":\"ion-range-md\"},[[1,\"ion-range\",{\"color\":[1],\"debounce\":[2],\"name\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"disabled\":[4],\"value\":[1026],\"ratioA\":[32],\"ratioB\":[32],\"pressedKnob\":[32]}]]],[{\"ios\":\"ion-split-pane-ios\",\"md\":\"ion-split-pane-md\"},[[0,\"ion-split-pane\",{\"contentId\":[1,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32]}]]],[\"ion-text\",[[1,\"ion-text\",{\"color\":[1]}]]],[{\"ios\":\"ion-textarea-ios\",\"md\":\"ion-textarea-md\"},[[2,\"ion-textarea\",{\"color\":[1],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[1028,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"cols\":[2],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[4,\"auto-grow\"],\"value\":[1025],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[{\"ios\":\"ion-toggle-ios\",\"md\":\"ion-toggle-md\"},[[1,\"ion-toggle\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"value\":[1],\"activated\":[32]}]]],[\"ion-virtual-scroll\",[[0,\"ion-virtual-scroll\",{\"approxItemHeight\":[2,\"approx-item-height\"],\"approxHeaderHeight\":[2,\"approx-header-height\"],\"approxFooterHeight\":[2,\"approx-footer-height\"],\"headerFn\":[16],\"footerFn\":[16],\"items\":[16],\"itemHeight\":[16],\"headerHeight\":[16],\"footerHeight\":[16],\"renderItem\":[16],\"renderHeader\":[16],\"renderFooter\":[16],\"nodeRender\":[16],\"domRender\":[16],\"totalHeight\":[32],\"positionForItem\":[64],\"checkRange\":[64],\"checkEnd\":[64]},[[9,\"resize\",\"onResize\"]]]]],[{\"ios\":\"ion-datetime_3-ios\",\"md\":\"ion-datetime_3-md\"},[[2,\"ion-picker\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]}],[1,\"ion-datetime\",{\"name\":[1],\"disabled\":[4],\"readonly\":[4],\"min\":[1025],\"max\":[1025],\"displayFormat\":[1,\"display-format\"],\"pickerFormat\":[1,\"picker-format\"],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"monthNames\":[1,\"month-names\"],\"monthShortNames\":[1,\"month-short-names\"],\"dayNames\":[1,\"day-names\"],\"dayShortNames\":[1,\"day-short-names\"],\"pickerOptions\":[16],\"placeholder\":[1],\"value\":[1025],\"isExpanded\":[32],\"open\":[64]}],[0,\"ion-picker-column\",{\"col\":[16]}]]],[{\"ios\":\"ion-radio_2-ios\",\"md\":\"ion-radio_2-md\"},[[1,\"ion-radio\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"checked\":[1028],\"value\":[1032]}],[0,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"name\":[1],\"value\":[1032]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[1],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[{\"ios\":\"ion-button_2-ios\",\"md\":\"ion-button_2-md\"},[[1,\"ion-button\",{\"color\":[1],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1]}],[1,\"ion-icon\",{\"color\":[1],\"ariaLabel\":[1537,\"aria-label\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[1],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"svgContent\":[32],\"isVisible\":[32]}]]],[{\"ios\":\"ion-item_8-ios\",\"md\":\"ion-item_8-md\"},[[1,\"ion-item-divider\",{\"color\":[1],\"sticky\":[4]}],[0,\"ion-item-group\"],[1,\"ion-note\",{\"color\":[1]}],[1,\"ion-skeleton-text\",{\"animated\":[4],\"width\":[1]}],[1,\"ion-item\",{\"color\":[1],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32]},[[0,\"ionStyle\",\"itemStyle\"]]],[2,\"ion-label\",{\"color\":[1],\"position\":[1],\"noAnimate\":[32]}],[0,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}],[1,\"ion-list-header\",{\"color\":[1]}]]]]"), options);
  });
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/overlays-10640d86.js ***!
  \*****************************************************************/
/*! exports provided: B, a, b, c, d, e, f, g, h, i, j, k, l, m, p, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alertController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionSheetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return popoverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return prepareOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return present; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return modalController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pickerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return safeCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toastController; });
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");


let lastId = 0;
const createController = (tagName) => {
    return {
        create(options) {
            return createOverlay(tagName, options);
        },
        dismiss(data, role, id) {
            return dismissOverlay(document, data, role, tagName, id);
        },
        async getTop() {
            return getOverlay(document, tagName);
        }
    };
};
const alertController = /*@__PURE__*/ createController('ion-alert');
const actionSheetController = /*@__PURE__*/ createController('ion-action-sheet');
const loadingController = /*@__PURE__*/ createController('ion-loading');
const modalController = /*@__PURE__*/ createController('ion-modal');
const pickerController = /*@__PURE__*/ createController('ion-picker');
const popoverController = /*@__PURE__*/ createController('ion-popover');
const toastController = /*@__PURE__*/ createController('ion-toast');
const prepareOverlay = (el) => {
    const doc = document;
    connectListeners(doc);
    const overlayIndex = lastId++;
    el.overlayIndex = overlayIndex;
    if (!el.hasAttribute('id')) {
        el.id = `ion-overlay-${overlayIndex}`;
    }
};
const createOverlay = (tagName, opts) => {
    return customElements.whenDefined(tagName).then(() => {
        const doc = document;
        const element = doc.createElement(tagName);
        element.classList.add('overlay-hidden');
        // convert the passed in overlay options into props
        // that get passed down into the new overlay
        Object.assign(element, opts);
        // append the overlay element to the document body
        getAppRoot(doc).appendChild(element);
        return element.componentOnReady();
    });
};
const connectListeners = (doc) => {
    if (lastId === 0) {
        lastId = 1;
        // trap focus inside overlays
        doc.addEventListener('focusin', ev => {
            const lastOverlay = getOverlay(doc);
            if (lastOverlay && lastOverlay.backdropDismiss && !isDescendant(lastOverlay, ev.target)) {
                const firstInput = lastOverlay.querySelector('input,button');
                if (firstInput) {
                    firstInput.focus();
                }
            }
        });
        // handle back-button click
        doc.addEventListener('ionBackButton', ev => {
            const lastOverlay = getOverlay(doc);
            if (lastOverlay && lastOverlay.backdropDismiss) {
                ev.detail.register(100, () => {
                    return lastOverlay.dismiss(undefined, BACKDROP);
                });
            }
        });
        // handle ESC to close overlay
        doc.addEventListener('keyup', ev => {
            if (ev.key === 'Escape') {
                const lastOverlay = getOverlay(doc);
                if (lastOverlay && lastOverlay.backdropDismiss) {
                    lastOverlay.dismiss(undefined, BACKDROP);
                }
            }
        });
    }
};
const dismissOverlay = (doc, data, role, overlayTag, id) => {
    const overlay = getOverlay(doc, overlayTag, id);
    if (!overlay) {
        return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
};
const getOverlays = (doc, selector) => {
    if (selector === undefined) {
        selector = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast';
    }
    return Array.from(doc.querySelectorAll(selector))
        .filter(c => c.overlayIndex > 0);
};
const getOverlay = (doc, overlayTag, id) => {
    const overlays = getOverlays(doc, overlayTag);
    return (id === undefined)
        ? overlays[overlays.length - 1]
        : overlays.find(o => o.id === id);
};
const present = async (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) => {
    if (overlay.presented) {
        return;
    }
    overlay.presented = true;
    overlay.willPresent.emit();
    // get the user's animation fn if one was provided
    const animationBuilder = (overlay.enterAnimation)
        ? overlay.enterAnimation
        : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].get(name, overlay.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
    const completed = await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    if (completed) {
        overlay.didPresent.emit();
    }
};
const dismiss = async (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) => {
    if (!overlay.presented) {
        return false;
    }
    overlay.presented = false;
    try {
        overlay.willDismiss.emit({ data, role });
        const animationBuilder = (overlay.leaveAnimation)
            ? overlay.leaveAnimation
            : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].get(name, overlay.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
        overlay.didDismiss.emit({ data, role });
    }
    catch (err) {
        console.error(err);
    }
    overlay.el.remove();
    return true;
};
const getAppRoot = (doc) => {
    return doc.querySelector('ion-app') || doc.body;
};
const overlayAnimation = async (overlay, animationBuilder, baseEl, opts) => {
    if (overlay.animation) {
        overlay.animation.destroy();
        overlay.animation = undefined;
        return false;
    }
    // Make overlay visible in case it's hidden
    baseEl.classList.remove('overlay-hidden');
    const aniRoot = baseEl.shadowRoot || overlay.el;
    /**
     * TODO: Remove AnimationBuilder
     */
    let animation;
    let isAnimationBuilder = true;
    try {
        const mod = await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "../node_modules/@ionic/core/dist/esm/index-69c37885.js"));
        animation = await mod.create(animationBuilder, aniRoot, opts);
    }
    catch (err) {
        animation = animationBuilder(aniRoot, opts);
        animation.fill('both');
        isAnimationBuilder = false;
    }
    overlay.animation = animation;
    if (!overlay.animated || !_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].getBoolean('animated', true)) {
        animation.duration(0);
    }
    if (overlay.keyboardClose) {
        animation.beforeAddWrite(() => {
            const activeElement = baseEl.ownerDocument.activeElement;
            if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
                activeElement.blur();
            }
        });
    }
    const animationResult = await animation.playAsync();
    /**
     * TODO: Remove AnimationBuilder
     */
    const hasCompleted = (typeof animationResult === 'undefined') ? true : animation.hasCompleted;
    if (isAnimationBuilder) {
        animation.destroy();
    }
    overlay.animation = undefined;
    return hasCompleted;
};
const eventMethod = (element, eventName) => {
    let resolve;
    const promise = new Promise(r => resolve = r);
    onceEvent(element, eventName, (event) => {
        resolve(event.detail);
    });
    return promise;
};
const onceEvent = (element, eventName, callback) => {
    const handler = (ev) => {
        element.removeEventListener(eventName, handler);
        callback(ev);
    };
    element.addEventListener(eventName, handler);
};
const isCancel = (role) => {
    return role === 'cancel' || role === BACKDROP;
};
const isDescendant = (parent, child) => {
    while (child) {
        if (child === parent) {
            return true;
        }
        child = child.parentElement;
    }
    return false;
};
const defaultGate = (h) => h();
const safeCall = (handler, arg) => {
    if (typeof handler === 'function') {
        const jmp = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_0__["b"].get('_zoneGate', defaultGate);
        return jmp(() => {
            try {
                return handler(arg);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    return undefined;
};
const BACKDROP = 'backdrop';




/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/core.css":
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/core.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/display.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/display.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ion-hide {\n  display: none !important;\n}\n\n.ion-hide-up {\n  display: none !important;\n}\n\n@media (max-width: 575px) {\n  .ion-hide-down {\n    display: none !important;\n  }\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n.ion-hide-xl-down {\n  display: none !important;\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/flex-utils.css":
/*!*********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/flex-utils.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ion-align-self-start,\n[align-self-start] {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end,\n[align-self-end] {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center,\n[align-self-center] {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch,\n[align-self-stretch] {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline,\n[align-self-baseline] {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto,\n[align-self-auto] {\n  align-self: auto !important;\n}\n\n.ion-wrap,\n[wrap] {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap,\n[nowrap] {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse,\n[wrap-reverse] {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start,\n[justify-content-start] {\n  justify-content: flex-start !important;\n}\n\n.ion-justify-content-center,\n[justify-content-center] {\n  justify-content: center !important;\n}\n\n.ion-justify-content-end,\n[justify-content-end] {\n  justify-content: flex-end !important;\n}\n\n.ion-justify-content-around,\n[justify-content-around] {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between,\n[justify-content-between] {\n  justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly,\n[justify-content-evenly] {\n  justify-content: space-evenly !important;\n}\n\n.ion-align-items-start,\n[align-items-start] {\n  align-items: flex-start !important;\n}\n\n.ion-align-items-center,\n[align-items-center] {\n  align-items: center !important;\n}\n\n.ion-align-items-end,\n[align-items-end] {\n  align-items: flex-end !important;\n}\n\n.ion-align-items-stretch,\n[align-items-stretch] {\n  align-items: stretch !important;\n}\n\n.ion-align-items-baseline,\n[align-items-baseline] {\n  align-items: baseline !important;\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/float-elements.css":
/*!*************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/float-elements.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ion-float-left,\n[float-left] {\n  float: left !important;\n}\n\n.ion-float-right,\n[float-right] {\n  float: right !important;\n}\n\n.ion-float-start,\n[float-start] {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\n  float: right !important;\n}\n\n.ion-float-end,\n[float-end] {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left,\n[float-sm-left] {\n    float: left !important;\n  }\n\n  .ion-float-sm-right,\n[float-sm-right] {\n    float: right !important;\n  }\n\n  .ion-float-sm-start,\n[float-sm-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\n    float: right !important;\n  }\n\n  .ion-float-sm-end,\n[float-sm-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left,\n[float-md-left] {\n    float: left !important;\n  }\n\n  .ion-float-md-right,\n[float-md-right] {\n    float: right !important;\n  }\n\n  .ion-float-md-start,\n[float-md-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\n    float: right !important;\n  }\n\n  .ion-float-md-end,\n[float-md-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left,\n[float-lg-left] {\n    float: left !important;\n  }\n\n  .ion-float-lg-right,\n[float-lg-right] {\n    float: right !important;\n  }\n\n  .ion-float-lg-start,\n[float-lg-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\n    float: right !important;\n  }\n\n  .ion-float-lg-end,\n[float-lg-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left,\n[float-xl-left] {\n    float: left !important;\n  }\n\n  .ion-float-xl-right,\n[float-xl-right] {\n    float: right !important;\n  }\n\n  .ion-float-xl-start,\n[float-xl-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\n    float: right !important;\n  }\n\n  .ion-float-xl-end,\n[float-xl-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\n    float: left !important;\n  }\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/normalize.css":
/*!********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/normalize.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "audio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/padding.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/padding.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ion-no-padding,\n[no-padding] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding,\n[padding] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding,\n[padding] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top,\n[padding-top] {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start,\n[padding-start] {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start,\n[padding-start] {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end,\n[padding-end] {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end,\n[padding-end] {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom,\n[padding-bottom] {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical,\n[padding-vertical] {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal,\n[padding-horizontal] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal,\n[padding-horizontal] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin,\n[no-margin] {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin,\n[margin] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin,\n[margin] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top,\n[margin-top] {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start,\n[margin-start] {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start,\n[margin-start] {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end,\n[margin-end] {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end,\n[margin-end] {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom,\n[margin-bottom] {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical,\n[margin-vertical] {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal,\n[margin-horizontal] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal,\n[margin-horizontal] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/structure.css":
/*!********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/structure.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  text-size-adjust: none;\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/text-alignment.css":
/*!*************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/text-alignment.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ion-text-center,\n[text-center] {\n  text-align: center !important;\n}\n\n.ion-text-justify,\n[text-justify] {\n  text-align: justify !important;\n}\n\n.ion-text-start,\n[text-start] {\n  text-align: start !important;\n}\n\n.ion-text-end,\n[text-end] {\n  text-align: end !important;\n}\n\n.ion-text-left,\n[text-left] {\n  text-align: left !important;\n}\n\n.ion-text-right,\n[text-right] {\n  text-align: right !important;\n}\n\n.ion-text-nowrap,\n[text-nowrap] {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap,\n[text-wrap] {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center,\n[text-sm-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify,\n[text-sm-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start,\n[text-sm-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end,\n[text-sm-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left,\n[text-sm-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right,\n[text-sm-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap,\n[text-sm-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap,\n[text-sm-wrap] {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center,\n[text-md-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify,\n[text-md-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start,\n[text-md-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end,\n[text-md-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left,\n[text-md-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right,\n[text-md-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap,\n[text-md-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap,\n[text-md-wrap] {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center,\n[text-lg-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify,\n[text-lg-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start,\n[text-lg-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end,\n[text-lg-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left,\n[text-lg-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right,\n[text-lg-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap,\n[text-lg-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap,\n[text-lg-wrap] {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center,\n[text-xl-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify,\n[text-xl-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start,\n[text-xl-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end,\n[text-xl-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left,\n[text-xl-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right,\n[text-xl-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap,\n[text-xl-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap,\n[text-xl-wrap] {\n    white-space: normal !important;\n  }\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/text-transformation.css":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/text-transformation.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ion-text-uppercase,\n[text-uppercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase,\n[text-lowercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize,\n[text-capitalize] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase,\n[text-sm-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase,\n[text-sm-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize,\n[text-sm-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase,\n[text-md-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase,\n[text-md-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize,\n[text-md-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase,\n[text-lg-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase,\n[text-lg-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize,\n[text-lg-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase,\n[text-xl-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase,\n[text-xl-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize,\n[text-xl-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/typography.css":
/*!*********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/typography.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/theme.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/theme.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/core.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/core.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/normalize.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/normalize.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/structure.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/structure.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/typography.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/typography.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/padding.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/padding.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/float-elements.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/float-elements.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/text-alignment.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/text-alignment.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/text-transformation.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/text-transformation.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/flex-utils.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/flex-utils.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!@ionic/core/css/display.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/@ionic/core/css/display.css"), "");
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Thin.woff2 */ "./css/fonts/roboto/Roboto-Thin.woff2"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Thin.woff */ "./css/fonts/roboto/Roboto-Thin.woff"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Light.woff2 */ "./css/fonts/roboto/Roboto-Light.woff2"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Light.woff */ "./css/fonts/roboto/Roboto-Light.woff"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Regular.woff2 */ "./css/fonts/roboto/Roboto-Regular.woff2"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Regular.woff */ "./css/fonts/roboto/Roboto-Regular.woff"));
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Medium.woff2 */ "./css/fonts/roboto/Roboto-Medium.woff2"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Medium.woff */ "./css/fonts/roboto/Roboto-Medium.woff"));
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Bold.woff2 */ "./css/fonts/roboto/Roboto-Bold.woff2"));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ./fonts/roboto/Roboto-Bold.woff */ "./css/fonts/roboto/Roboto-Bold.woff"));
// Module
exports.push([module.i, "/* Core CSS required for Ionic components to work properly */\r\n\r\n/* Basic CSS for apps built with Ionic */\r\n\r\n/* Optional CSS utils that can be commented out */\r\n\r\n:root {\r\n  --ion-color-primary: #00a79d;\r\n  --ion-color-primary-rgb: 0,167,157;\r\n  --ion-color-primary-contrast: #ffffff;\r\n  --ion-color-primary-contrast-rgb: 255,255,255;\r\n  --ion-color-primary-shade: #00938a;\r\n  --ion-color-primary-tint: #1ab0a7;\r\n\r\n\r\n  --ion-color-secondary: #0cd1e8;\r\n  --ion-color-secondary-rgb: 12,209,232;\r\n  --ion-color-secondary-contrast: #ffffff;\r\n  --ion-color-secondary-contrast-rgb: 255,255,255;\r\n  --ion-color-secondary-shade: #0bb8cc;\r\n  --ion-color-secondary-tint: #24d6ea;\r\n\r\n  --ion-color-tertiary: #7044ff;\r\n  --ion-color-tertiary-rgb: 112,68,255;\r\n  --ion-color-tertiary-contrast: #ffffff;\r\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\r\n  --ion-color-tertiary-shade: #633ce0;\r\n  --ion-color-tertiary-tint: #7e57ff;\r\n\r\n  --ion-color-success: #10dc60;\r\n  --ion-color-success-rgb: 16,220,96;\r\n  --ion-color-success-contrast: #ffffff;\r\n  --ion-color-success-contrast-rgb: 255,255,255;\r\n  --ion-color-success-shade: #0ec254;\r\n  --ion-color-success-tint: #28e070;\r\n\r\n  --ion-color-warning: #ffce00;\r\n  --ion-color-warning-rgb: 255,206,0;\r\n  --ion-color-warning-contrast: #ffffff;\r\n  --ion-color-warning-contrast-rgb: 255,255,255;\r\n  --ion-color-warning-shade: #e0b500;\r\n  --ion-color-warning-tint: #ffd31a;\r\n\r\n  --ion-color-danger: #f04141;\r\n  --ion-color-danger-rgb: 245,61,61;\r\n  --ion-color-danger-contrast: #ffffff;\r\n  --ion-color-danger-contrast-rgb: 255,255,255;\r\n  --ion-color-danger-shade: #d33939;\r\n  --ion-color-danger-tint: #f25454;\r\n\r\n  --ion-color-dark: #222428;\r\n  --ion-color-dark-rgb: 34,34,34;\r\n  --ion-color-dark-contrast: #ffffff;\r\n  --ion-color-dark-contrast-rgb: 255,255,255;\r\n  --ion-color-dark-shade: #1e2023;\r\n  --ion-color-dark-tint: #383a3e;\r\n\r\n  --ion-color-medium: #989aa2;\r\n  --ion-color-medium-rgb: 152,154,162;\r\n  --ion-color-medium-contrast: #ffffff;\r\n  --ion-color-medium-contrast-rgb: 255,255,255;\r\n  --ion-color-medium-shade: #86888f;\r\n  --ion-color-medium-tint: #a2a4ab;\r\n\r\n  --ion-color-light: #f4f5f8;\r\n  --ion-color-light-rgb: 244,244,244;\r\n  --ion-color-light-contrast: #000000;\r\n  --ion-color-light-contrast-rgb: 0,0,0;\r\n  --ion-color-light-shade: #d7d8da;\r\n  --ion-color-light-tint: #f5f6f9;\r\n}\r\n\r\n\r\n@font-face {\r\n  font-family: \"Roboto\";\r\n  src: local(Roboto Thin), url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\");\r\n  font-weight: 100;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto\";\r\n  src: local(Roboto Light), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\");\r\n  font-weight: 300;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto\";\r\n  src: local(Roboto Regular), url(" + ___CSS_LOADER_URL___4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"woff\");\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto\";\r\n  src: local(Roboto Medium), url(" + ___CSS_LOADER_URL___6___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"woff\");\r\n  font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto\";\r\n  src: local(Roboto Bold), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\");\r\n  font-weight: 700;\r\n}", ""]);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/lit-html/lib/default-template-processor.js":
/*!******************************************************************!*\
  !*** ../node_modules/lit-html/lib/default-template-processor.js ***!
  \******************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "../node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/directive.js":
/*!*************************************************!*\
  !*** ../node_modules/lit-html/lib/directive.js ***!
  \*************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/dom.js":
/*!*******************************************!*\
  !*** ../node_modules/lit-html/lib/dom.js ***!
  \*******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/part.js":
/*!********************************************!*\
  !*** ../node_modules/lit-html/lib/part.js ***!
  \********************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/parts.js":
/*!*********************************************!*\
  !*** ../node_modules/lit-html/lib/parts.js ***!
  \*********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "../node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "../node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "../node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "../node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "../node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "../node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // tslint:disable-next-line:no-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/render.js":
/*!**********************************************!*\
  !*** ../node_modules/lit-html/lib/render.js ***!
  \**********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "../node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "../node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/template-factory.js":
/*!********************************************************!*\
  !*** ../node_modules/lit-html/lib/template-factory.js ***!
  \********************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "../node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/template-instance.js":
/*!*********************************************************!*\
  !*** ../node_modules/lit-html/lib/template-instance.js ***!
  \*********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "../node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari dooes not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/template-result.js":
/*!*******************************************************!*\
  !*** ../node_modules/lit-html/lib/template-result.js ***!
  \*******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "../node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment poisition.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceeding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceeding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "../node_modules/lit-html/lib/template.js":
/*!************************************************!*\
  !*** ../node_modules/lit-html/lib/template.js ***!
  \************************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "../node_modules/lit-html/lit-html.js":
/*!********************************************!*\
  !*** ../node_modules/lit-html/lit-html.js ***!
  \********************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "../node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "../node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "../node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "../node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "../node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "../node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "../node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "../node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "../node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "../node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.2');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_core_dist_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/core/dist/esm */ "../node_modules/@ionic/core/dist/esm/index.mjs");
/* harmony import */ var _ionic_core_dist_esm_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/core/dist/esm/loader */ "../node_modules/@ionic/core/dist/esm/loader.mjs");
/* harmony import */ var _view_components_app_component_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/components/app/component-main */ "./view/components/app/component-main.js");
/**
 * app.js
 *
 * This is the entry point for the application.
 *
 * @author Clay Gulick
 * @email claytongulick@gmail.com
 */

//global scripts



//the main application component


(
    async () => {
        await Object(_ionic_core_dist_esm_loader__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"])();
        //create the main component and kick off application
        let body = document.querySelector('body');
        body.style.overflowY='auto';
        body.appendChild(new _view_components_app_component_main__WEBPACK_IMPORTED_MODULE_2__["default"]());
    }
)();

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Bold.woff":
/*!*******************************************!*\
  !*** ./css/fonts/roboto/Roboto-Bold.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Bold.woff");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Bold.woff2":
/*!********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Bold.woff2 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Bold.woff2");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Light.woff":
/*!********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Light.woff ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Light.woff");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Light.woff2":
/*!*********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Light.woff2 ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Light.woff2");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Medium.woff":
/*!*********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Medium.woff ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Medium.woff");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Medium.woff2":
/*!**********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Medium.woff2 ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Medium.woff2");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Regular.woff":
/*!**********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Regular.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Regular.woff");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Regular.woff2":
/*!***********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Regular.woff2 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Regular.woff2");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Thin.woff":
/*!*******************************************!*\
  !*** ./css/fonts/roboto/Roboto-Thin.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Thin.woff");

/***/ }),

/***/ "./css/fonts/roboto/Roboto-Thin.woff2":
/*!********************************************!*\
  !*** ./css/fonts/roboto/Roboto-Thin.woff2 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css/fonts/roboto/Roboto-Thin.woff2");

/***/ }),

/***/ "./css/theme.css":
/*!***********************!*\
  !*** ./css/theme.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./theme.css */ "../node_modules/css-loader/dist/cjs.js!./css/theme.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./view/components/app/component-main.js":
/*!***********************************************!*\
  !*** ./view/components/app/component-main.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/theme.css */ "./css/theme.css");
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_theme_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "../node_modules/lit-html/lit-html.js");
/* harmony import */ var _scene_scene_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene/scene-home */ "./view/components/scene/scene-home.js");
/* harmony import */ var _scene_scene_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene/scene-profile */ "./view/components/scene/scene-profile.js");
/* harmony import */ var _scene_scene_contact_us__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene/scene-contact-us */ "./view/components/scene/scene-contact-us.js");
/* harmony import */ var _scene_scene_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scene/scene-settings */ "./view/components/scene/scene-settings.js");
/* harmony import */ var _scene_scene_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scene_scene_settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scene_scene_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scene/scene-about */ "./view/components/scene/scene-about.js");










/**
 * This is the main application class
 */
class ComponentMain extends HTMLElement {

    constructor() {
        super();
        this.version = "1.0.0";
        this.environment = "local";
        console.log(`Starting Application v${this.version} in ${this.environment} environment.`)

        this.menu_state = {
            disable_home: false,
            disable_profile: false,
            disable_contact_us: false,
            disable_settings: false,
            disable_about: false,
        };

        this.my_sitters = [];
    }

    get ready() {
        return this._ready_promise;
    }

    connectedCallback() {
        this.template = () => lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <ion-app style="overflow-y: auto">
            <ion-router @ionRouteDidChange=${(e) => this.handleRouteChange(e)}>
                <ion-route url='/' component='scene-home'></ion-route>
                <ion-route url='/home' component='scene-home'></ion-route>
                <ion-route url='/profile' component='scene-profile'>
                    <ion-route url='/profile' component='tab-profile'></ion-route>
                    <ion-route url='/users' component='tab-users'></ion-route>
                    <ion-route url='/schedule' component='tab-schedule'></ion-route>
                    <ion-route url='/billing' component='tab-billing'></ion-route>
                    <ion-route component='tab-profile'></ion-route>
                </ion-route>
                <ion-route url='/contact-us' component='scene-contact-us'></ion-route>
                <ion-route url='/settings' component='scene-settings'></ion-route>
                <ion-route url='/about' component='scene-about'></ion-route>
            </ion-router>
            
            <ion-menu content-id="app_content">
                <ion-content>
                    <ion-list id="left_menu_list" lines="none">
                        <ion-menu-toggle auto-hide="false">
                            <ion-item button href="" disabled="${this.menu_state.disable_home}">
                                <ion-icon slot="start" name='home'></ion-icon>
                                <ion-label>
                                    Home
                                </ion-label>
                            </ion-item>
                            <ion-item button href="profile" disabled="${this.menu_state.disable_profile}">
                                <ion-icon slot="start" name='people'></ion-icon>
                                <ion-label>
                                    Profile
                                </ion-label>
                            </ion-item>
                            <ion-item button href="contact-us" disabled="${this.menu_state.disable_contact_us}">
                                <ion-icon slot="start" name='mail'></ion-icon>
                                <ion-label>
                                    Contact Us
                                </ion-label>
                            </ion-item>
                            <ion-item-divider></ion-item-divider>
                            <ion-item button href="settings" disabled="${this.menu_state.disable_setting}">
                                <ion-icon slot="start" name='settings'></ion-icon>
                                <ion-label>
                                    Settings
                                </ion-label>
                            </ion-item>
                            <ion-item button href="about" disabled="${this.menu_state.disable_about}">
                                <ion-icon slot="start" name='information-circle'></ion-icon>
                                <ion-label>
                                    About SmartSitting
                                </ion-label>
                            </ion-item>
                        </ion-menu-toggle>
                    </ion-list>
                </ion-content>
            </ion-menu>
            <ion-nav id="app_content" animated="true"></ion-nav>

            <ion-loading-controller></ion-loading-controller>
            <ion-modal-controller></ion-modal-controller>
            <ion-picker-controller></ion-picker-controller>
            <ion-alert-controller></ion-alert-controller>
            <ion-toast-controller></ion-toast-controller>
            <ion-progress-bar style="opacity:0; transition: opacity 0.25s linear;" color="warning" type="indeterminate" value="0"></ion-progress-bar>
        </ion-app>
        `;
        this.render();
        this.init();
        
        broker.addEventListener('loading', this.handleLoading.bind(this));
        broker.addEventListener('loading_complete', this.handleLoadingComplete.bind(this));
        this.progress_bar = this.querySelector('ion-progress-bar');
    }

    async init() {
        let ion_app = this.querySelector("ion-app");
        //wait for ionic to load
        let loading_interval = setInterval(
            async () => {
                if(!ion_app.componentOnReady) {
                    console.warn("ionic not loaded, delaying 10ms...");
                    return;
                }

                clearInterval(loading_interval);

                await ion_app.componentOnReady();
                this._ready_resolve();
                await this.loaded();
            }, 10
        );

        await this.refreshData();
    }

    /**
     * There's some data that's core the the family app that we go ahead and load at startup time
     */
    async refreshData() {
        let loading_controller = document.querySelector('ion-loading-controller');
        let loading = await loading_controller.create({
            message: "Loading..."
        });
        await loading.present();
        //pretend we're loading data here
        setTimeout(async () => {
            await loading_controller.dismiss();
            this.render();

        }, 2000)
    }

    handleRouteChange(e) {
        let data = e.detail;
        gtag('event','screen_view', {
            app_version: "local" + ": " + "1.0.0",
            screen_name: data.to,
        });
    }

    render() {
        Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["render"])(this.template({}), this);
    }

    async handleLoading() {
        this.progress_bar.style.opacity = 1;
    }

    handleLoadingComplete() {
        this.progress_bar.style.opacity = 0;
    }

}

customElements.define("component-main", ComponentMain);
/* harmony default export */ __webpack_exports__["default"] = (ComponentMain);

/***/ }),

/***/ "./view/components/scene/scene-about.js":
/*!**********************************************!*\
  !*** ./view/components/scene/scene-about.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "../node_modules/lit-html/lit-html.js");


class SceneAbout extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {
        this.template = (data) => lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <style>
                :host {
                    justify-content: flex-start !important;
                    position: relative;
                    background-color: #f0f0f0;
                }
                #content {
                    --padding-top: 1vh;
                    --padding-bottom: 1vh;
                    --padding-start: 1vw;
                    --padding-end: 1vw;
                    --background: var(--light);
                }
            </style>

            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title id="title">About Us</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content id="content" style="background-color: white">
                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>Making every moment count</ion-card-subtitle>
                        <ion-card-title>Welcome To Our Company!</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h3 style="font-weight: bold">We are awesome!</h3>
                        <br>
                        <p>We've done so many cool things, you should give us money.</p>
                        <br>
                        <p style="font-weight: bold;color:#00A79D;"><em>Our mission is to be the best of the best of the best, Sir!</em></p>
                    </ion-card-content>
                </ion-card>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>
                            Our Promise To You
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <p>We're really nice, and we'll do good things.</p>
                    </ion-card-content>
                </ion-card>
            </ion-content>
        `;

        this.render();

    }

    async render() {
        Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(this.template({}), this);
    }

}
customElements.define('scene-about', SceneAbout);
/* harmony default export */ __webpack_exports__["default"] = (SceneAbout);

/***/ }),

/***/ "./view/components/scene/scene-contact-us.js":
/*!***************************************************!*\
  !*** ./view/components/scene/scene-contact-us.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "../node_modules/lit-html/lit-html.js");


class SceneContactUs extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {
        this.template = (data) => lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <style>
                :host {
                    justify-content: flex-start !important;
                    position: relative;
                    background-color: #f0f0f0;
                }
                #content {
                    --padding-top: 1vh;
                    --padding-bottom: 1vh;
                    --padding-start: 1vw;
                    --padding-end: 1vw;
                    --background: var(--light);
                }
            </style>

            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title id="title">ContactUs Us</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content id="content" style="background-color: white">
                <p>Call us to talk about things</p>
            </ion-content>
        `;

        this.render();

    }

    async render() {
        Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(this.template({}), this);
    }

}
customElements.define('scene-contact-us', SceneContactUs);
/* harmony default export */ __webpack_exports__["default"] = (SceneContactUs);

/***/ }),

/***/ "./view/components/scene/scene-home.js":
/*!*********************************************!*\
  !*** ./view/components/scene/scene-home.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "../node_modules/lit-html/lit-html.js");


class SceneHome extends HTMLElement {
    connectedCallback() {
        this.template = (data) => lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <style>
                :host {
                }

                ion-col {
                    margin-top: 3vh;
                }
            </style>

            <ion-content style="text-align: center;" color="primary">
                <ion-toolbar style="--background: transparent; position: absolute;">
                    <ion-buttons slot="start">
                        <ion-menu-toggle>
                            <ion-button>
                                <ion-icon slot="icon-only" name="menu"></ion-icon>
                            </ion-button>
                        </ion-menu-toggle>
                    </ion-buttons>
                </ion-toolbar>
                <p>This is a very fancy home page, with a hero image and inspiring styling.</p>
                <p>Or not.</p>
            </ion-content>
        `;

        Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(this.template({}), this);
    }


}
customElements.define('scene-home', SceneHome);
/* harmony default export */ __webpack_exports__["default"] = (SceneHome);

/***/ }),

/***/ "./view/components/scene/scene-profile.js":
/*!************************************************!*\
  !*** ./view/components/scene/scene-profile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "../node_modules/lit-html/lit-html.js");


class SceneProfile extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = '<slot></slot>';
        this.template = (family) => lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <style>
                :host {
                    justify-content: flex-start !important;
                    position: relative;
                    background-color: #f0f0f0;
                }
                #scene_profile_content {
                    --padding-top: 1vh;
                    --padding-bottom: 1vh;
                    --padding-start: 1vw;
                    --padding-end: 1vw;
                }
        </style>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/families"></ion-back-button>
                </ion-buttons>
                <ion-title id="title">${family.family_name}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="scene_profile_content">
            <ion-tabs id="family_tabs" style="background-color: var(--ion-color-light)">
                <ion-tab tab="tab-profile"> 
                </ion-tab>

                <ion-tab tab="tab-users">
                    <!--<ion-nav></ion-nav>-->
                </ion-tab>

                <ion-tab tab="tab-schedule">
                    <!--<ion-nav></ion-nav>-->
                </ion-tab>

                <ion-tab tab="tab-billing">
                    <!--<ion-nav></ion-nav>-->
                </ion-tab>

                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="tab-profile">
                        <ion-icon name="information-circle"></ion-icon>
                        <ion-label>Profile</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tab-users">
                        <ion-icon name="people"></ion-icon>
                        <ion-label>Users</ion-label>
                    </ion-tab-button>


                    <ion-tab-button tab="tab-schedule">
                        <ion-icon name="calendar"></ion-icon>
                        <ion-label>Schedule</ion-label>
                        <ion-badge>6</ion-badge>
                    </ion-tab-button>

                    <ion-tab-button tab="tab-billing">
                        <ion-icon name="cash"></ion-icon>
                        <ion-label>Billing</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        </ion-content>
        `;

        this.render();
        this.init();

    }

    render() {
        Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(this.template(this.family), this);
    }

    async init() {
        await this.loadFamily();

    }
}

customElements.define('scene-profile', SceneProfile);
/* harmony default export */ __webpack_exports__["default"] = (SceneProfile);

/***/ }),

/***/ "./view/components/scene/scene-settings.js":
/*!*************************************************!*\
  !*** ./view/components/scene/scene-settings.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbSBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMkIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9hbmltYXRpb24tYWY0NzhmZTkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9jb25maWctM2M3ZjM3OTAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9jb25zdGFudHMtM2MzZTEwOTkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9jb3JlLWNhMDQ4OGZjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaGVscGVycy00NmY0YTI2Mi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTFlNTk0MGQ1LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtNjI0ZWVhNTguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9sb2FkZXIubWpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vb3ZlcmxheXMtMTA2NDBkODYuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvY29yZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvZGlzcGxheS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvZmxleC11dGlscy5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvcGFkZGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3Mvc3RydWN0dXJlLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jc3MvdHlwb2dyYXBoeS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3RoZW1lLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZG9tLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcmVuZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtcmVzdWx0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tQm9sZC53b2ZmIiwid2VicGFjazovLy8uL2Nzcy9mb250cy9yb2JvdG8vUm9ib3RvLUJvbGQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tTGlnaHQud29mZiIsIndlYnBhY2s6Ly8vLi9jc3MvZm9udHMvcm9ib3RvL1JvYm90by1MaWdodC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9jc3MvZm9udHMvcm9ib3RvL1JvYm90by1NZWRpdW0ud29mZiIsIndlYnBhY2s6Ly8vLi9jc3MvZm9udHMvcm9ib3RvL1JvYm90by1NZWRpdW0ud29mZjIiLCJ3ZWJwYWNrOi8vLy4vY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL2Nzcy9mb250cy9yb2JvdG8vUm9ib3RvLVJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tVGhpbi53b2ZmIiwid2VicGFjazovLy8uL2Nzcy9mb250cy9yb2JvdG8vUm9ib3RvLVRoaW4ud29mZjIiLCJ3ZWJwYWNrOi8vLy4vY3NzL3RoZW1lLmNzcz8xMDBhIiwid2VicGFjazovLy8uL3ZpZXcvY29tcG9uZW50cy9hcHAvY29tcG9uZW50LW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmlldy9jb21wb25lbnRzL3NjZW5lL3NjZW5lLWFib3V0LmpzIiwid2VicGFjazovLy8uL3ZpZXcvY29tcG9uZW50cy9zY2VuZS9zY2VuZS1jb250YWN0LXVzLmpzIiwid2VicGFjazovLy8uL3ZpZXcvY29tcG9uZW50cy9zY2VuZS9zY2VuZS1ob21lLmpzIiwid2VicGFjazovLy8uL3ZpZXcvY29tcG9uZW50cy9zY2VuZS9zY2VuZS1wcm9maWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EsMENBQTBDO1FBQzFDOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQSxpQ0FBaUM7O1FBRWpDO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx3QkFBd0Isa0NBQWtDO1FBQzFELE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQSwwQ0FBMEMsb0JBQW9CLFdBQVc7O1FBRXpFO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDNVVBO0FBQUE7QUFBQTtBQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUyxJQUFJLG9CQUFvQjtBQUNyRTtBQUNBO0FBQ0Esa0JBQWtCLGFBQWEsR0FBRyxHQUFHLHNCQUFzQixFQUFFO0FBQzdELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWEsRUFBRSxHQUFHLGNBQWMsRUFBRSxjQUFjLGFBQWEsTUFBTSxHQUFHLGNBQWMsRUFBRTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsY0FBYztBQUNqRjtBQUNBLGdFQUFnRSxXQUFXO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsY0FBYztBQUNqRjtBQUNBLGdCQUFnQiw4REFBRztBQUNuQjtBQUNBLGlCQUFp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QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7QUM5NUJoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0xBQTJDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LGdFQUFlO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6Qyw4QkFBOEIsZ0VBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVEsa0JBQWtCLFFBQVE7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdFQUFlO0FBQ3pDO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQsNkJBQTZCLGdFQUFlO0FBQzVDO0FBQ0EsOERBQThELGVBQWU7QUFDN0UsOEJBQThCLGdFQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFlO0FBQ3ZDO0FBQ0EsOERBQThELFFBQVE7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7OztBQy9SL0I7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxVQUFVLGNBQWMsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHFEQUFxRCxRQUFRLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx1R0FBdUc7QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QXlDLCtCQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNCQUFzQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0M7Ozs7Ozs7Ozs7OztBQ3BOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0Esb0NBQW9DLDZDQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsUUFBUSx1REFBTTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNlLDJFQUFZLEUiLCJmaWxlIjoibWFpblxcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCJcXFxcY2h1bmtzXFxcXFwiICsgY2h1bmtJZCArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAuanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyXzguZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcl84LmVudHJ5LmpzXCIsXG5cdFx0NDBcblx0XSxcblx0XCIuL2lvbi1hY3Rpb24tc2hlZXQtaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYWN0aW9uLXNoZWV0LWlvcy5lbnRyeS5qc1wiLFxuXHRcdDQxXG5cdF0sXG5cdFwiLi9pb24tYWN0aW9uLXNoZWV0LW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYWN0aW9uLXNoZWV0LW1kLmVudHJ5LmpzXCIsXG5cdFx0NDJcblx0XSxcblx0XCIuL2lvbi1hbGVydC1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1hbGVydC1pb3MuZW50cnkuanNcIixcblx0XHQyMVxuXHRdLFxuXHRcIi4vaW9uLWFsZXJ0LW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYWxlcnQtbWQuZW50cnkuanNcIixcblx0XHQyMlxuXHRdLFxuXHRcIi4vaW9uLWFwcF84LWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWFwcF84LWlvcy5lbnRyeS5qc1wiLFxuXHRcdDhcblx0XSxcblx0XCIuL2lvbi1hcHBfOC1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWFwcF84LW1kLmVudHJ5LmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vaW9uLWF2YXRhcl8zLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWF2YXRhcl8zLWlvcy5lbnRyeS5qc1wiLFxuXHRcdDQzXG5cdF0sXG5cdFwiLi9pb24tYXZhdGFyXzMtbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1hdmF0YXJfMy1tZC5lbnRyeS5qc1wiLFxuXHRcdDQ0XG5cdF0sXG5cdFwiLi9pb24tYmFjay1idXR0b24taW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYmFjay1idXR0b24taW9zLmVudHJ5LmpzXCIsXG5cdFx0NDVcblx0XSxcblx0XCIuL2lvbi1iYWNrLWJ1dHRvbi1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWJhY2stYnV0dG9uLW1kLmVudHJ5LmpzXCIsXG5cdFx0NDZcblx0XSxcblx0XCIuL2lvbi1iYWNrZHJvcC1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1iYWNrZHJvcC1pb3MuZW50cnkuanNcIixcblx0XHQ3OFxuXHRdLFxuXHRcIi4vaW9uLWJhY2tkcm9wLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYmFja2Ryb3AtbWQuZW50cnkuanNcIixcblx0XHQ3OVxuXHRdLFxuXHRcIi4vaW9uLWJ1dHRvbl8yLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWJ1dHRvbl8yLWlvcy5lbnRyeS5qc1wiLFxuXHRcdDQ3XG5cdF0sXG5cdFwiLi9pb24tYnV0dG9uXzItbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1idXR0b25fMi1tZC5lbnRyeS5qc1wiLFxuXHRcdDQ4XG5cdF0sXG5cdFwiLi9pb24tY2FyZF81LWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWNhcmRfNS1pb3MuZW50cnkuanNcIixcblx0XHQ0OVxuXHRdLFxuXHRcIi4vaW9uLWNhcmRfNS1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWNhcmRfNS1tZC5lbnRyeS5qc1wiLFxuXHRcdDUwXG5cdF0sXG5cdFwiLi9pb24tY2hlY2tib3gtaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tY2hlY2tib3gtaW9zLmVudHJ5LmpzXCIsXG5cdFx0NTFcblx0XSxcblx0XCIuL2lvbi1jaGVja2JveC1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWNoZWNrYm94LW1kLmVudHJ5LmpzXCIsXG5cdFx0NTJcblx0XSxcblx0XCIuL2lvbi1jaGlwLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWNoaXAtaW9zLmVudHJ5LmpzXCIsXG5cdFx0NTNcblx0XSxcblx0XCIuL2lvbi1jaGlwLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tY2hpcC1tZC5lbnRyeS5qc1wiLFxuXHRcdDU0XG5cdF0sXG5cdFwiLi9pb24tY29sXzMuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1jb2xfMy5lbnRyeS5qc1wiLFxuXHRcdDgwXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWVfMy1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1kYXRldGltZV8zLWlvcy5lbnRyeS5qc1wiLFxuXHRcdDE3XG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWVfMy1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWRhdGV0aW1lXzMtbWQuZW50cnkuanNcIixcblx0XHQxOFxuXHRdLFxuXHRcIi4vaW9uLWZhYl8zLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWZhYl8zLWlvcy5lbnRyeS5qc1wiLFxuXHRcdDU1XG5cdF0sXG5cdFwiLi9pb24tZmFiXzMtbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1mYWJfMy1tZC5lbnRyeS5qc1wiLFxuXHRcdDU2XG5cdF0sXG5cdFwiLi9pb24taW1nLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW1nLmVudHJ5LmpzXCIsXG5cdFx0ODFcblx0XSxcblx0XCIuL2lvbi1pbmZpbml0ZS1zY3JvbGxfMi1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pbmZpbml0ZS1zY3JvbGxfMi1pb3MuZW50cnkuanNcIixcblx0XHQzNlxuXHRdLFxuXHRcIi4vaW9uLWluZmluaXRlLXNjcm9sbF8yLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW5maW5pdGUtc2Nyb2xsXzItbWQuZW50cnkuanNcIixcblx0XHQzN1xuXHRdLFxuXHRcIi4vaW9uLWlucHV0LWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWlucHV0LWlvcy5lbnRyeS5qc1wiLFxuXHRcdDU3XG5cdF0sXG5cdFwiLi9pb24taW5wdXQtbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pbnB1dC1tZC5lbnRyeS5qc1wiLFxuXHRcdDU4XG5cdF0sXG5cdFwiLi9pb24taXRlbS1vcHRpb25fMy1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pdGVtLW9wdGlvbl8zLWlvcy5lbnRyeS5qc1wiLFxuXHRcdDU5XG5cdF0sXG5cdFwiLi9pb24taXRlbS1vcHRpb25fMy1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWl0ZW0tb3B0aW9uXzMtbWQuZW50cnkuanNcIixcblx0XHQ2MFxuXHRdLFxuXHRcIi4vaW9uLWl0ZW1fOC1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pdGVtXzgtaW9zLmVudHJ5LmpzXCIsXG5cdFx0NjFcblx0XSxcblx0XCIuL2lvbi1pdGVtXzgtbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pdGVtXzgtbWQuZW50cnkuanNcIixcblx0XHQ2MlxuXHRdLFxuXHRcIi4vaW9uLWxvYWRpbmctaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbG9hZGluZy1pb3MuZW50cnkuanNcIixcblx0XHQyM1xuXHRdLFxuXHRcIi4vaW9uLWxvYWRpbmctbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1sb2FkaW5nLW1kLmVudHJ5LmpzXCIsXG5cdFx0MjRcblx0XSxcblx0XCIuL2lvbi1tZW51XzQtaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbWVudV80LWlvcy5lbnRyeS5qc1wiLFxuXHRcdDE1XG5cdF0sXG5cdFwiLi9pb24tbWVudV80LW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbWVudV80LW1kLmVudHJ5LmpzXCIsXG5cdFx0MTZcblx0XSxcblx0XCIuL2lvbi1tb2RhbC1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1tb2RhbC1pb3MuZW50cnkuanNcIixcblx0XHQxMVxuXHRdLFxuXHRcIi4vaW9uLW1vZGFsLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbW9kYWwtbWQuZW50cnkuanNcIixcblx0XHQxMlxuXHRdLFxuXHRcIi4vaW9uLW5hdl81LmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbmF2XzUuZW50cnkuanNcIixcblx0XHQxMFxuXHRdLFxuXHRcIi4vaW9uLXBvcG92ZXItaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcG9wb3Zlci1pb3MuZW50cnkuanNcIixcblx0XHQxM1xuXHRdLFxuXHRcIi4vaW9uLXBvcG92ZXItbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1wb3BvdmVyLW1kLmVudHJ5LmpzXCIsXG5cdFx0MTRcblx0XSxcblx0XCIuL2lvbi1wcm9ncmVzcy1iYXItaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcHJvZ3Jlc3MtYmFyLWlvcy5lbnRyeS5qc1wiLFxuXHRcdDYzXG5cdF0sXG5cdFwiLi9pb24tcHJvZ3Jlc3MtYmFyLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcHJvZ3Jlc3MtYmFyLW1kLmVudHJ5LmpzXCIsXG5cdFx0NjRcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXJhZGlvXzItaW9zLmVudHJ5LmpzXCIsXG5cdFx0Mjlcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmFkaW9fMi1tZC5lbnRyeS5qc1wiLFxuXHRcdDMwXG5cdF0sXG5cdFwiLi9pb24tcmFuZ2UtaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmFuZ2UtaW9zLmVudHJ5LmpzXCIsXG5cdFx0NjVcblx0XSxcblx0XCIuL2lvbi1yYW5nZS1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXJhbmdlLW1kLmVudHJ5LmpzXCIsXG5cdFx0NjZcblx0XSxcblx0XCIuL2lvbi1yZWZyZXNoZXJfMi1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yZWZyZXNoZXJfMi1pb3MuZW50cnkuanNcIixcblx0XHQzOFxuXHRdLFxuXHRcIi4vaW9uLXJlZnJlc2hlcl8yLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmVmcmVzaGVyXzItbWQuZW50cnkuanNcIixcblx0XHQzOVxuXHRdLFxuXHRcIi4vaW9uLXJlb3JkZXJfMi1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yZW9yZGVyXzItaW9zLmVudHJ5LmpzXCIsXG5cdFx0MzRcblx0XSxcblx0XCIuL2lvbi1yZW9yZGVyXzItbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yZW9yZGVyXzItbWQuZW50cnkuanNcIixcblx0XHQzNVxuXHRdLFxuXHRcIi4vaW9uLXJpcHBsZS1lZmZlY3QuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yaXBwbGUtZWZmZWN0LmVudHJ5LmpzXCIsXG5cdFx0ODJcblx0XSxcblx0XCIuL2lvbi1yb3V0ZV80LmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcm91dGVfNC5lbnRyeS5qc1wiLFxuXHRcdDY3XG5cdF0sXG5cdFwiLi9pb24tc2VhcmNoYmFyLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNlYXJjaGJhci1pb3MuZW50cnkuanNcIixcblx0XHQyNVxuXHRdLFxuXHRcIi4vaW9uLXNlYXJjaGJhci1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNlYXJjaGJhci1tZC5lbnRyeS5qc1wiLFxuXHRcdDI2XG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudF8yLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNlZ21lbnRfMi1pb3MuZW50cnkuanNcIixcblx0XHQ2OFxuXHRdLFxuXHRcIi4vaW9uLXNlZ21lbnRfMi1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNlZ21lbnRfMi1tZC5lbnRyeS5qc1wiLFxuXHRcdDY5XG5cdF0sXG5cdFwiLi9pb24tc2VsZWN0XzMtaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VsZWN0XzMtaW9zLmVudHJ5LmpzXCIsXG5cdFx0MzFcblx0XSxcblx0XCIuL2lvbi1zZWxlY3RfMy1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNlbGVjdF8zLW1kLmVudHJ5LmpzXCIsXG5cdFx0MzJcblx0XSxcblx0XCIuL2lvbi1zbGlkZV8yLWlvcy5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNsaWRlXzItaW9zLmVudHJ5LmpzXCIsXG5cdFx0ODNcblx0XSxcblx0XCIuL2lvbi1zbGlkZV8yLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2xpZGVfMi1tZC5lbnRyeS5qc1wiLFxuXHRcdDg0XG5cdF0sXG5cdFwiLi9pb24tc3Bpbm5lci5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNwaW5uZXIuZW50cnkuanNcIixcblx0XHQ3MFxuXHRdLFxuXHRcIi4vaW9uLXNwbGl0LXBhbmUtaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc3BsaXQtcGFuZS1pb3MuZW50cnkuanNcIixcblx0XHQ4NVxuXHRdLFxuXHRcIi4vaW9uLXNwbGl0LXBhbmUtbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1zcGxpdC1wYW5lLW1kLmVudHJ5LmpzXCIsXG5cdFx0ODZcblx0XSxcblx0XCIuL2lvbi10YWItYmFyXzItaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdGFiLWJhcl8yLWlvcy5lbnRyeS5qc1wiLFxuXHRcdDcxXG5cdF0sXG5cdFwiLi9pb24tdGFiLWJhcl8yLW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdGFiLWJhcl8yLW1kLmVudHJ5LmpzXCIsXG5cdFx0NzJcblx0XSxcblx0XCIuL2lvbi10YWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXRhYl8yLmVudHJ5LmpzXCIsXG5cdFx0MzNcblx0XSxcblx0XCIuL2lvbi10ZXh0LmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdGV4dC5lbnRyeS5qc1wiLFxuXHRcdDczXG5cdF0sXG5cdFwiLi9pb24tdGV4dGFyZWEtaW9zLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdGV4dGFyZWEtaW9zLmVudHJ5LmpzXCIsXG5cdFx0NzRcblx0XSxcblx0XCIuL2lvbi10ZXh0YXJlYS1tZC5lbnRyeS5qc1wiOiBbXG5cdFx0XCIuLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXRleHRhcmVhLW1kLmVudHJ5LmpzXCIsXG5cdFx0NzVcblx0XSxcblx0XCIuL2lvbi10b2FzdC1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10b2FzdC1pb3MuZW50cnkuanNcIixcblx0XHQyN1xuXHRdLFxuXHRcIi4vaW9uLXRvYXN0LW1kLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdG9hc3QtbWQuZW50cnkuanNcIixcblx0XHQyOFxuXHRdLFxuXHRcIi4vaW9uLXRvZ2dsZS1pb3MuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10b2dnbGUtaW9zLmVudHJ5LmpzXCIsXG5cdFx0MTlcblx0XSxcblx0XCIuL2lvbi10b2dnbGUtbWQuZW50cnkuanNcIjogW1xuXHRcdFwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10b2dnbGUtbWQuZW50cnkuanNcIixcblx0XHQyMFxuXHRdLFxuXHRcIi4vaW9uLXZpcnR1YWwtc2Nyb2xsLmVudHJ5LmpzXCI6IFtcblx0XHRcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdmlydHVhbC1zY3JvbGwuZW50cnkuanNcIixcblx0XHQ4N1xuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbSBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMkIGluY2x1ZGU6IFxcXFwuZW50cnlcXFxcLmpzJCBleGNsdWRlOiBcXFxcLnN5c3RlbVxcXFwuZW50cnlcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCB7IHIgYXMgcmFmIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcblxuY29uc3Qgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50LCBwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpO1xyXG59O1xyXG5jb25zdCByZW1vdmVTdHlsZVByb3BlcnR5ID0gKGVsZW1lbnQsIHByb3BlcnR5TmFtZSkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpO1xyXG59O1xyXG5jb25zdCBhbmltYXRpb25FbmQgPSAoZWwsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBsZXQgdW5SZWdUcmFucztcclxuICAgIGNvbnN0IG9wdHMgPSB7IHBhc3NpdmU6IHRydWUgfTtcclxuICAgIGNvbnN0IHVucmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVuUmVnVHJhbnMpIHtcclxuICAgICAgICAgICAgdW5SZWdUcmFucygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSAoZXYpID0+IHtcclxuICAgICAgICBpZiAoZWwgPT09IGV2LnRhcmdldCkge1xyXG4gICAgICAgICAgICB1bnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0QW5pbWF0aW9uRW5kJywgb25UcmFuc2l0aW9uRW5kLCBvcHRzKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvblRyYW5zaXRpb25FbmQsIG9wdHMpO1xyXG4gICAgICAgIHVuUmVnVHJhbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdEFuaW1hdGlvbkVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgb3B0cyk7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgb3B0cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bnJlZ2lzdGVyO1xyXG59O1xyXG5jb25zdCBnZW5lcmF0ZUtleWZyYW1lUnVsZXMgPSAoa2V5ZnJhbWVzID0gW10pID0+IHtcclxuICAgIHJldHVybiBrZXlmcmFtZXMubWFwKGtleWZyYW1lID0+IHtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBrZXlmcmFtZS5vZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGtleWZyYW1lKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlmcmFtZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgcHJvcGVydHkgIT09ICdvZmZzZXQnKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZVN0cmluZy5wdXNoKGAke3Byb3BlcnR5fTogJHtrZXlmcmFtZVtwcm9wZXJ0eV19O2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHtvZmZzZXQgKiAxMDB9JSB7ICR7ZnJhbWVTdHJpbmcuam9pbignICcpfSB9YDtcclxuICAgIH0pLmpvaW4oJyAnKTtcclxufTtcclxuY29uc3Qga2V5ZnJhbWVJZHMgPSBbXTtcclxuY29uc3QgZ2VuZXJhdGVLZXlmcmFtZU5hbWUgPSAoa2V5ZnJhbWVSdWxlcykgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0ga2V5ZnJhbWVJZHMuaW5kZXhPZihrZXlmcmFtZVJ1bGVzKTtcclxuICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICBpbmRleCA9IChrZXlmcmFtZUlkcy5wdXNoKGtleWZyYW1lUnVsZXMpIC0gMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYGlvbi1hbmltYXRpb24tJHtpbmRleH1gO1xyXG59O1xyXG5jb25zdCBnZXRTdHlsZUNvbnRhaW5lciA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCByb290Tm9kZSA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcclxuICAgIHJldHVybiAocm9vdE5vZGUuaGVhZCB8fCByb290Tm9kZSk7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUtleWZyYW1lU3R5bGVzaGVldCA9IChrZXlmcmFtZU5hbWUsIGtleWZyYW1lUnVsZXMsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHN0eWxlQ29udGFpbmVyID0gZ2V0U3R5bGVDb250YWluZXIoZWxlbWVudCk7XHJcbiAgICBjb25zdCBleGlzdGluZ1N0eWxlc2hlZXQgPSBzdHlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjJyArIGtleWZyYW1lTmFtZSk7XHJcbiAgICBpZiAoZXhpc3RpbmdTdHlsZXNoZWV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nU3R5bGVzaGVldDtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlc2hlZXQgPSAoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgc3R5bGVzaGVldC5pZCA9IGtleWZyYW1lTmFtZTtcclxuICAgIHN0eWxlc2hlZXQudGV4dENvbnRlbnQgPSBgQGtleWZyYW1lcyAke2tleWZyYW1lTmFtZX0geyAke2tleWZyYW1lUnVsZXN9IH0gQGtleWZyYW1lcyAke2tleWZyYW1lTmFtZX0tYWx0IHsgJHtrZXlmcmFtZVJ1bGVzfSB9YDtcclxuICAgIHN0eWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xyXG4gICAgcmV0dXJuIHN0eWxlc2hlZXQ7XHJcbn07XHJcbmNvbnN0IGFkZENsYXNzVG9BcnJheSA9IChjbGFzc2VzID0gW10sIGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lVG9BcHBlbmQgPSAoQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKSA/IGNsYXNzTmFtZSA6IFtjbGFzc05hbWVdO1xyXG4gICAgICAgIHJldHVybiBbLi4uY2xhc3NlcywgLi4uY2xhc3NOYW1lVG9BcHBlbmRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbn07XG5cbi8vIFRPRE86IEFkZCBtb3JlIHRlc3RzLiB1bnRpbCB0aGVuLCBiZSBzdXJlIHRvIG1hbnVhbGx5IHRlc3QgbWVudSBhbmQgc3dpcGUgdG8gZ28gYmFjay9yb3V0aW5nIHRyYW5zaXRpb25zXHJcbmNvbnN0IGNyZWF0ZUFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgIGxldCBfZGVsYXk7XHJcbiAgICBsZXQgX2R1cmF0aW9uO1xyXG4gICAgbGV0IF9lYXNpbmc7XHJcbiAgICBsZXQgX2l0ZXJhdGlvbnM7XHJcbiAgICBsZXQgX2ZpbGw7XHJcbiAgICBsZXQgX2RpcmVjdGlvbjtcclxuICAgIGxldCBfa2V5ZnJhbWVzID0gW107XHJcbiAgICBsZXQgYmVmb3JlQWRkQ2xhc3NlcyA9IFtdO1xyXG4gICAgbGV0IGJlZm9yZVJlbW92ZUNsYXNzZXMgPSBbXTtcclxuICAgIGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgbGV0IHBhcmVudEFuaW1hdGlvbjtcclxuICAgIGxldCBiZWZvcmVTdHlsZXNWYWx1ZSA9IHt9O1xyXG4gICAgbGV0IGFmdGVyQWRkQ2xhc3NlcyA9IFtdO1xyXG4gICAgbGV0IGFmdGVyUmVtb3ZlQ2xhc3NlcyA9IFtdO1xyXG4gICAgbGV0IGFmdGVyU3R5bGVzVmFsdWUgPSB7fTtcclxuICAgIGxldCBudW1BbmltYXRpb25zUnVubmluZyA9IDA7XHJcbiAgICBsZXQgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZTtcclxuICAgIGxldCBzaG91bGRGb3JjZVN5bmNQbGF5YmFjayA9IGZhbHNlO1xyXG4gICAgbGV0IGNzc0FuaW1hdGlvbnNUaW1lckZhbGxiYWNrO1xyXG4gICAgbGV0IGZvcmNlRGlyZWN0aW9uVmFsdWU7XHJcbiAgICBsZXQgZm9yY2VEdXJhdGlvblZhbHVlO1xyXG4gICAgbGV0IGZvcmNlRGVsYXlWYWx1ZTtcclxuICAgIGxldCB3aWxsQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICBsZXQgc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucyA9IHRydWU7XHJcbiAgICBsZXQga2V5ZnJhbWVOYW1lO1xyXG4gICAgbGV0IGFuaTtcclxuICAgIGNvbnN0IG9uRmluaXNoQ2FsbGJhY2tzID0gW107XHJcbiAgICBjb25zdCBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MgPSBbXTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgICBjb25zdCBjaGlsZEFuaW1hdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IHN0eWxlc2hlZXRzID0gW107XHJcbiAgICBjb25zdCBfYmVmb3JlQWRkUmVhZEZ1bmN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgX2JlZm9yZUFkZFdyaXRlRnVuY3Rpb25zID0gW107XHJcbiAgICBjb25zdCBfYWZ0ZXJBZGRSZWFkRnVuY3Rpb25zID0gW107XHJcbiAgICBjb25zdCBfYWZ0ZXJBZGRXcml0ZUZ1bmN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3Qgd2ViQW5pbWF0aW9ucyA9IFtdO1xyXG4gICAgY29uc3Qgc3VwcG9ydHNBbmltYXRpb25FZmZlY3QgPSAodHlwZW9mIEFuaW1hdGlvbkVmZmVjdCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2Ygd2luZG93LkFuaW1hdGlvbkVmZmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XHJcbiAgICBjb25zdCBzdXBwb3J0c1dlYkFuaW1hdGlvbnMgPSAodHlwZW9mIEVsZW1lbnQgPT09ICdmdW5jdGlvbicpICYmICh0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZSA9PT0gJ2Z1bmN0aW9uJykgJiYgc3VwcG9ydHNBbmltYXRpb25FZmZlY3Q7XHJcbiAgICBjb25zdCBBTklNQVRJT05fRU5EX0ZBTExCQUNLX1BBRERJTkdfTVMgPSAxMDA7XHJcbiAgICBjb25zdCBnZXRXZWJBbmltYXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB3ZWJBbmltYXRpb25zO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goY2hpbGRBbmltYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBjaGlsZEFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgIGVsZW1lbnRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgY2hpbGRBbmltYXRpb25zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgX2tleWZyYW1lcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGNsZWFyT25GaW5pc2goKTtcclxuICAgICAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWxzIGFueSBXZWIgQW5pbWF0aW9ucywgcmVtb3Zlc1xyXG4gICAgICogYW55IGFuaW1hdGlvbiBwcm9wZXJ0aWVzIGZyb20gdGhlXHJcbiAgICAgKiBhbmltYXRpb24ncyBlbGVtZW50cywgYW5kIHJlbW92ZXMgdGhlXHJcbiAgICAgKiBhbmltYXRpb24ncyBzdHlsZXNoZWV0cyBmcm9tIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNsZWFuVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYW5VcEVsZW1lbnRzKCk7XHJcbiAgICAgICAgY2xlYW5VcFN0eWxlU2hlZXRzKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25GaW5pc2ggPSAoY2FsbGJhY2ssIG9wdHMpID0+IHtcclxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAob3B0cyAmJiBvcHRzLm9uZVRpbWVDYWxsYmFjaykgPyBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MgOiBvbkZpbmlzaENhbGxiYWNrcztcclxuICAgICAgICBjYWxsYmFja3MucHVzaCh7IGM6IGNhbGxiYWNrLCBvOiBvcHRzIH0pO1xyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xlYXJPbkZpbmlzaCA9ICgpID0+IHtcclxuICAgICAgICBvbkZpbmlzaENhbGxiYWNrcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIG9uRmluaXNoT25lVGltZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWxzIGFueSBXZWIgQW5pbWF0aW9ucyBhbmQgcmVtb3Zlc1xyXG4gICAgICogYW55IGFuaW1hdGlvbiBwcm9wZXJ0aWVzIGZyb20gdGhlXHJcbiAgICAgKiB0aGUgYW5pbWF0aW9uJ3MgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNsZWFuVXBFbGVtZW50cyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2ViQW5pbWF0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHNBcnJheSA9IGVsZW1lbnRzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHJhZigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1kZWxheScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLWZpbGwtbW9kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1kaXJlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBhbmltYXRpb24ncyBzdHlsZXNoZWV0c1xyXG4gICAgICogZnJvbSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBjbGVhblVwU3R5bGVTaGVldHMgPSAoKSA9PiB7XHJcbiAgICAgICAgc3R5bGVzaGVldHMuZm9yRWFjaChzdHlsZXNoZWV0ID0+IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFdoZW4gc2hhcmluZyBzdHlsZXNoZWV0cywgaXQncyBwb3NzaWJsZVxyXG4gICAgICAgICAgICAgKiBmb3IgYW5vdGhlciBhbmltYXRpb24gdG8gaGF2ZSBhbHJlYWR5XHJcbiAgICAgICAgICAgICAqIGNsZWFuZWQgdXAgYSBwYXJ0aWN1bGFyIHN0eWxlc2hlZXRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmIChzdHlsZXNoZWV0ICYmIHN0eWxlc2hlZXQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlc2hlZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3R5bGVzaGVldHMubGVuZ3RoID0gMDtcclxuICAgIH07XHJcbiAgICBjb25zdCBiZWZvcmVBZGRSZWFkID0gKHJlYWRGbikgPT4ge1xyXG4gICAgICAgIF9iZWZvcmVBZGRSZWFkRnVuY3Rpb25zLnB1c2gocmVhZEZuKTtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGJlZm9yZUFkZFdyaXRlID0gKHdyaXRlRm4pID0+IHtcclxuICAgICAgICBfYmVmb3JlQWRkV3JpdGVGdW5jdGlvbnMucHVzaCh3cml0ZUZuKTtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFmdGVyQWRkUmVhZCA9IChyZWFkRm4pID0+IHtcclxuICAgICAgICBfYWZ0ZXJBZGRSZWFkRnVuY3Rpb25zLnB1c2gocmVhZEZuKTtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFmdGVyQWRkV3JpdGUgPSAod3JpdGVGbikgPT4ge1xyXG4gICAgICAgIF9hZnRlckFkZFdyaXRlRnVuY3Rpb25zLnB1c2god3JpdGVGbik7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBiZWZvcmVBZGRDbGFzcyA9IChjbGFzc05hbWUpID0+IHtcclxuICAgICAgICBiZWZvcmVBZGRDbGFzc2VzID0gYWRkQ2xhc3NUb0FycmF5KGJlZm9yZUFkZENsYXNzZXMsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBiZWZvcmVSZW1vdmVDbGFzcyA9IChjbGFzc05hbWUpID0+IHtcclxuICAgICAgICBiZWZvcmVSZW1vdmVDbGFzc2VzID0gYWRkQ2xhc3NUb0FycmF5KGJlZm9yZVJlbW92ZUNsYXNzZXMsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldCBDU1MgaW5saW5lIHN0eWxlcyB0byB0aGUgYW5pbWF0aW9uJ3NcclxuICAgICAqIGVsZW1lbnRzIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGJlZ2lucy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYmVmb3JlU3R5bGVzID0gKHN0eWxlcyA9IHt9KSA9PiB7XHJcbiAgICAgICAgYmVmb3JlU3R5bGVzVmFsdWUgPSBzdHlsZXM7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIENTUyBpbmxpbmUgc3R5bGVzIGZyb20gdGhlIGFuaW1hdGlvbidzXHJcbiAgICAgKiBlbGVtZW50cyBiZWZvcmUgdGhlIGFuaW1hdGlvbiBiZWdpbnMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJlZm9yZUNsZWFyU3R5bGVzID0gKHByb3BlcnR5TmFtZXMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydHlOYW1lcykge1xyXG4gICAgICAgICAgICBiZWZvcmVTdHlsZXNWYWx1ZVtwcm9wZXJ0eV0gPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZnRlckFkZENsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgICAgIGFmdGVyQWRkQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShhZnRlckFkZENsYXNzZXMsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZnRlclJlbW92ZUNsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgICAgIGFmdGVyUmVtb3ZlQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShhZnRlclJlbW92ZUNsYXNzZXMsIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZnRlclN0eWxlcyA9IChzdHlsZXMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGFmdGVyU3R5bGVzVmFsdWUgPSBzdHlsZXM7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhZnRlckNsZWFyU3R5bGVzID0gKHByb3BlcnR5TmFtZXMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydHlOYW1lcykge1xyXG4gICAgICAgICAgICBhZnRlclN0eWxlc1ZhbHVlW3Byb3BlcnR5XSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldEZpbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKF9maWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9maWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2JvdGgnO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldERpcmVjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZm9yY2VEaXJlY3Rpb25WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JjZURpcmVjdGlvblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2RpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnbm9ybWFsJztcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRFYXNpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3VsZEZvcmNlTGluZWFyRWFzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbGluZWFyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9lYXNpbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2Vhc2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldEVhc2luZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2xpbmVhcic7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RHVyYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3VsZEZvcmNlU3luY1BsYXliYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm9yY2VEdXJhdGlvblZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcmNlRHVyYXRpb25WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXREdXJhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRJdGVyYXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChfaXRlcmF0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfaXRlcmF0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldEl0ZXJhdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0RGVsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcmNlRGVsYXlWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JjZURlbGF5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfZGVsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2RlbGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RGVsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0S2V5ZnJhbWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfa2V5ZnJhbWVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IChhbmltYXRpb25EaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBfZGlyZWN0aW9uID0gYW5pbWF0aW9uRGlyZWN0aW9uO1xyXG4gICAgICAgIHVwZGF0ZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGwgPSAoYW5pbWF0aW9uRmlsbCkgPT4ge1xyXG4gICAgICAgIF9maWxsID0gYW5pbWF0aW9uRmlsbDtcclxuICAgICAgICB1cGRhdGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBkZWxheSA9IChhbmltYXRpb25EZWxheSkgPT4ge1xyXG4gICAgICAgIF9kZWxheSA9IGFuaW1hdGlvbkRlbGF5O1xyXG4gICAgICAgIHVwZGF0ZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGVhc2luZyA9IChhbmltYXRpb25FYXNpbmcpID0+IHtcclxuICAgICAgICBfZWFzaW5nID0gYW5pbWF0aW9uRWFzaW5nO1xyXG4gICAgICAgIHVwZGF0ZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gKGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ1NTIEFuaW1hdGlvbiBEdXJhdGlvbnMgb2YgMG1zIHdvcmsgZmluZSBvbiBDaHJvbWVcclxuICAgICAgICAgKiBidXQgZG8gbm90IHJ1biBvbiBTYWZhcmksIHNvIGZvcmNlIGl0IHRvIDFtcyB0b1xyXG4gICAgICAgICAqIGdldCBpdCB0byBydW4gb24gYm90aCBwbGF0Zm9ybXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCFzdXBwb3J0c1dlYkFuaW1hdGlvbnMgJiYgYW5pbWF0aW9uRHVyYXRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfZHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbjtcclxuICAgICAgICB1cGRhdGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpdGVyYXRpb25zID0gKGFuaW1hdGlvbkl0ZXJhdGlvbnMpID0+IHtcclxuICAgICAgICBfaXRlcmF0aW9ucyA9IGFuaW1hdGlvbkl0ZXJhdGlvbnM7XHJcbiAgICAgICAgdXBkYXRlKHRydWUpO1xyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGFyZW50ID0gKGFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgIHBhcmVudEFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZEVsZW1lbnQgPSAoZWwpID0+IHtcclxuICAgICAgICBpZiAoZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVsLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGFkZEVsZW1lbnQgdmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZEFuaW1hdGlvbiA9IChhbmltYXRpb25Ub0FkZCkgPT4ge1xyXG4gICAgICAgIGlmIChhbmltYXRpb25Ub0FkZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFuaW1hdGlvblRvQWRkKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgYW5pbWF0aW9uVG9BZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ucGFyZW50KGFuaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRBbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblRvQWRkLnBhcmVudChhbmkpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGRBbmltYXRpb25zLnB1c2goYW5pbWF0aW9uVG9BZGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qga2V5ZnJhbWVzID0gKGtleWZyYW1lVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgX2tleWZyYW1lcyA9IGtleWZyYW1lVmFsdWVzO1xyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSdW5zIGFsbCBiZWZvcmUgcmVhZCBjYWxsYmFja3NcclxuICAgICAqL1xyXG4gICAgY29uc3QgcnVuQmVmb3JlUmVhZCA9ICgpID0+IHtcclxuICAgICAgICBfYmVmb3JlQWRkUmVhZEZ1bmN0aW9ucy5mb3JFYWNoKGNhbGxiYWNrID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgYWxsIGJlZm9yZSB3cml0ZSBjYWxsYmFja3NcclxuICAgICAqL1xyXG4gICAgY29uc3QgcnVuQmVmb3JlV3JpdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgX2JlZm9yZUFkZFdyaXRlRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBzdHlsZXMgYW5kIGNsYXNzZXMgYmVmb3JlIGFuaW1hdGlvbiBydW5zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHJ1bkJlZm9yZVN0eWxlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRDbGFzc2VzID0gYmVmb3JlQWRkQ2xhc3NlcztcclxuICAgICAgICBjb25zdCByZW1vdmVDbGFzc2VzID0gYmVmb3JlUmVtb3ZlQ2xhc3NlcztcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBiZWZvcmVTdHlsZXNWYWx1ZTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcclxuICAgICAgICAgICAgYWRkQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWxlbWVudENsYXNzTGlzdC5hZGQoYykpO1xyXG4gICAgICAgICAgICByZW1vdmVDbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50Q2xhc3NMaXN0LnJlbW92ZShjKSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3BlcnR5LCBzdHlsZXNbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUnVuIGFsbCBcImJlZm9yZVwiIGFuaW1hdGlvbiBob29rcy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYmVmb3JlQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJ1bkJlZm9yZVJlYWQoKTtcclxuICAgICAgICBydW5CZWZvcmVXcml0ZSgpO1xyXG4gICAgICAgIHJ1bkJlZm9yZVN0eWxlcygpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUnVucyBhbGwgYWZ0ZXIgcmVhZCBjYWxsYmFja3NcclxuICAgICAqL1xyXG4gICAgY29uc3QgcnVuQWZ0ZXJSZWFkID0gKCkgPT4ge1xyXG4gICAgICAgIF9hZnRlckFkZFJlYWRGdW5jdGlvbnMuZm9yRWFjaChjYWxsYmFjayA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSdW5zIGFsbCBhZnRlciB3cml0ZSBjYWxsYmFja3NcclxuICAgICAqL1xyXG4gICAgY29uc3QgcnVuQWZ0ZXJXcml0ZSA9ICgpID0+IHtcclxuICAgICAgICBfYWZ0ZXJBZGRXcml0ZUZ1bmN0aW9ucy5mb3JFYWNoKGNhbGxiYWNrID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgc3R5bGVzIGFuZCBjbGFzc2VzIGJlZm9yZSBhbmltYXRpb24gZW5kc1xyXG4gICAgICovXHJcbiAgICBjb25zdCBydW5BZnRlclN0eWxlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRDbGFzc2VzID0gYWZ0ZXJBZGRDbGFzc2VzO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUNsYXNzZXMgPSBhZnRlclJlbW92ZUNsYXNzZXM7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gYWZ0ZXJTdHlsZXNWYWx1ZTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcclxuICAgICAgICAgICAgYWRkQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWxlbWVudENsYXNzTGlzdC5hZGQoYykpO1xyXG4gICAgICAgICAgICByZW1vdmVDbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50Q2xhc3NMaXN0LnJlbW92ZShjKSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3BlcnR5LCBzdHlsZXNbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUnVuIGFsbCBcImFmdGVyXCIgYW5pbWF0aW9uIGhvb2tzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBhZnRlckFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckNTU0FuaW1hdGlvbnNUaW1lb3V0KCk7XHJcbiAgICAgICAgcnVuQWZ0ZXJSZWFkKCk7XHJcbiAgICAgICAgcnVuQWZ0ZXJXcml0ZSgpO1xyXG4gICAgICAgIHJ1bkFmdGVyU3R5bGVzKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFN0ZXAgPSB3aWxsQ29tcGxldGUgPyAxIDogMDtcclxuICAgICAgICBvbkZpbmlzaENhbGxiYWNrcy5mb3JFYWNoKG9uRmluaXNoQ2FsbGJhY2sgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gb25GaW5pc2hDYWxsYmFjay5jKGN1cnJlbnRTdGVwLCBhbmkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9uRmluaXNoT25lVGltZUNhbGxiYWNrcy5mb3JFYWNoKG9uRmluaXNoQ2FsbGJhY2sgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gb25GaW5pc2hDYWxsYmFjay5jKGN1cnJlbnRTdGVwLCBhbmkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9uRmluaXNoT25lVGltZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhbmltYXRpb25GaW5pc2ggPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG51bUFuaW1hdGlvbnNSdW5uaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbnVtQW5pbWF0aW9uc1J1bm5pbmctLTtcclxuICAgICAgICBpZiAobnVtQW5pbWF0aW9uc1J1bm5pbmcgPT09IDApIHtcclxuICAgICAgICAgICAgYWZ0ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50QW5pbWF0aW9uLmFuaW1hdGlvbkZpbmlzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGluaXRpYWxpemVDU1NBbmltYXRpb24gPSAodG9nZ2xlQW5pbWF0aW9uTmFtZSA9IHRydWUpID0+IHtcclxuICAgICAgICBjbGVhblVwU3R5bGVTaGVldHMoKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2tleWZyYW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlmcmFtZVJ1bGVzID0gZ2VuZXJhdGVLZXlmcmFtZVJ1bGVzKF9rZXlmcmFtZXMpO1xyXG4gICAgICAgICAgICAgICAga2V5ZnJhbWVOYW1lID0gZ2VuZXJhdGVLZXlmcmFtZU5hbWUoa2V5ZnJhbWVSdWxlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXNoZWV0ID0gY3JlYXRlS2V5ZnJhbWVTdHlsZXNoZWV0KGtleWZyYW1lTmFtZSwga2V5ZnJhbWVSdWxlcywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0cy5wdXNoKHN0eWxlc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLWR1cmF0aW9uJywgYCR7Z2V0RHVyYXRpb24oKX1tc2ApO1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbicsIGdldEVhc2luZygpKTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1kZWxheScsIGAke2dldERlbGF5KCl9bXNgKTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1maWxsLW1vZGUnLCBnZXRGaWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLWRpcmVjdGlvbicsIGdldERpcmVjdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZXJhdGlvbnNDb3VudCA9IChnZXRJdGVyYXRpb25zKCkgPT09IEluZmluaXR5KVxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2luZmluaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogZ2V0SXRlcmF0aW9ucygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24taXRlcmF0aW9uLWNvdW50JywgaXRlcmF0aW9uc0NvdW50KTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJywgJ3BhdXNlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tbmFtZScsIGAke3N0eWxlc2hlZXQuaWR9LWFsdGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmFmKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tbmFtZScsIHN0eWxlc2hlZXQuaWQgfHwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGluaXRpYWxpemVXZWJBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gZWxlbWVudC5hbmltYXRlKF9rZXlmcmFtZXMsIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBnZXREZWxheSgpLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGdldER1cmF0aW9uKCksXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGdldEVhc2luZygpLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogZ2V0SXRlcmF0aW9ucygpLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZ2V0RmlsbCgpLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBnZXREaXJlY3Rpb24oKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHdlYkFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh3ZWJBbmltYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd2ViQW5pbWF0aW9uc1swXS5vbmZpbmlzaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkZpbmlzaCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBpbml0aWFsaXplQW5pbWF0aW9uID0gKHRvZ2dsZUFuaW1hdGlvbk5hbWUgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgYmVmb3JlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgaWYgKF9rZXlmcmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplV2ViQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplQ1NTQW5pbWF0aW9uKHRvZ2dsZUFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRBbmltYXRpb25TdGVwID0gKHN0ZXApID0+IHtcclxuICAgICAgICBzdGVwID0gTWF0aC5taW4oTWF0aC5tYXgoc3RlcCwgMCksIDAuOTk5KTtcclxuICAgICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gYW5pbWF0aW9uLmVmZmVjdC5nZXRDb21wdXRlZFRpbWluZygpLmRlbGF5ICsgKGdldER1cmF0aW9uKCkgKiBzdGVwKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gZ2V0RGVsYXkoKSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IGAtJHthbmltYXRpb25EZWxheSArIChnZXREdXJhdGlvbigpICogc3RlcCl9bXNgO1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9rZXlmcmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1kZWxheScsIGFuaW1hdGlvbkR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tcGxheS1zdGF0ZScsICdwYXVzZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZVdlYkFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmVmZmVjdC51cGRhdGVUaW1pbmcoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IGdldERlbGF5KCksXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZ2V0RHVyYXRpb24oKSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogZ2V0RWFzaW5nKCksXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBnZXRJdGVyYXRpb25zKCksXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBnZXRGaWxsKCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGdldERpcmVjdGlvbigpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZUNTU0FuaW1hdGlvbiA9ICh0b2dnbGVBbmltYXRpb25OYW1lID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJhZigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tbmFtZScsIGtleWZyYW1lTmFtZSB8fCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1kdXJhdGlvbicsIGAke2dldER1cmF0aW9uKCl9bXNgKTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nLCBnZXRFYXNpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tZGVsYXknLCBgJHtnZXREZWxheSgpfW1zYCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tZmlsbC1tb2RlJywgZ2V0RmlsbCgpIHx8IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLWRpcmVjdGlvbicsIGdldERpcmVjdGlvbigpIHx8IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlcmF0aW9uc0NvdW50ID0gKGdldEl0ZXJhdGlvbnMoKSA9PT0gSW5maW5pdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnaW5maW5pdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBnZXRJdGVyYXRpb25zKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnLCBpdGVyYXRpb25zQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tbmFtZScsIGAke2tleWZyYW1lTmFtZX0tYWx0YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYWYoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1uYW1lJywga2V5ZnJhbWVOYW1lIHx8IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZSA9IChkZWVwID0gZmFsc2UsIHRvZ2dsZUFuaW1hdGlvbk5hbWUgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgaWYgKGRlZXApIHtcclxuICAgICAgICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi51cGRhdGUoZGVlcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVdlYkFuaW1hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdXBkYXRlQ1NTQW5pbWF0aW9uKHRvZ2dsZUFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2dyZXNzU3RhcnQgPSAoZm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KGZvcmNlTGluZWFyRWFzaW5nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXVzZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIHNob3VsZEZvcmNlTGluZWFyRWFzaW5nID0gZm9yY2VMaW5lYXJFYXNpbmc7XHJcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICBpbml0aWFsaXplQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uU3RlcCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcm9ncmVzc1N0ZXAgPSAoc3RlcCkgPT4ge1xyXG4gICAgICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAoc3RlcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0QW5pbWF0aW9uU3RlcChzdGVwKTtcclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2dyZXNzRW5kID0gKHBsYXlUbywgc3RlcCwgZHVyKSA9PiB7XHJcbiAgICAgICAgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZTtcclxuICAgICAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBhbmltYXRpb24ucHJvZ3Jlc3NFbmQocGxheVRvLCBzdGVwLCBkdXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkdXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3JjZUR1cmF0aW9uVmFsdWUgPSBkdXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgICAgd2lsbENvbXBsZXRlID0gcGxheVRvID09PSAxO1xyXG4gICAgICAgIGlmICghd2lsbENvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSAoZ2V0RGlyZWN0aW9uKCkgPT09ICdyZXZlcnNlJykgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcclxuICAgICAgICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRBbmltYXRpb25TdGVwKDEgLSBzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcmNlRGVsYXlWYWx1ZSA9ICgoMSAtIHN0ZXApICogZ2V0RHVyYXRpb24oKSkgKiAtMTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZShmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yY2VEZWxheVZhbHVlID0gKHN0ZXAgKiBnZXREdXJhdGlvbigpKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25GaW5pc2goKCkgPT4ge1xyXG4gICAgICAgICAgICB3aWxsQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3JjZUR1cmF0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZvcmNlRGVsYXlWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghcGFyZW50QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwYXVzZUFuaW1hdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgd2ViQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLCAncGF1c2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBwYXVzZSA9ICgpID0+IHtcclxuICAgICAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBhbmltYXRpb24ucGF1c2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXVzZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGxheUFzeW5jID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwbGF5KCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGxheVN5bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgcGxheSh7IHN5bmM6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFuaTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkFuaW1hdGlvbkVuZEZhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNzc0FuaW1hdGlvbnNUaW1lckZhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGFuaW1hdGlvbkZpbmlzaCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFyQ1NTQW5pbWF0aW9uc1RpbWVvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNzc0FuaW1hdGlvbnNUaW1lckZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjc3NBbmltYXRpb25zVGltZXJGYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHBsYXlDU1NBbmltYXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyQ1NTQW5pbWF0aW9uc1RpbWVvdXQoKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoX2tleWZyYW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByYWYoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJywgJ3J1bm5pbmcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKF9rZXlmcmFtZXMubGVuZ3RoID09PSAwIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25GaW5pc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGlzIGlzIGEgY2F0Y2hhbGwgaW4gdGhlIGV2ZW50IHRoYXQgYSBDU1MgQW5pbWF0aW9uIGRpZCBub3QgZmluaXNoLlxyXG4gICAgICAgICAgICAgKiBUaGUgV2ViIEFuaW1hdGlvbnMgQVBJIGhhcyBtZWNoYW5pc21zIGluIHBsYWNlIGZvciBwcmV2ZW50aW5nIHRoaXMuXHJcbiAgICAgICAgICAgICAqIENTUyBBbmltYXRpb25zIHdpbGwgbm90IGZpcmUgYW4gYGFuaW1hdGlvbmVuZGAgZXZlbnRcclxuICAgICAgICAgICAgICogZm9yIGVsZW1lbnRzIHdpdGggYGRpc3BsYXk6IG5vbmVgLiBUaGUgV2ViIEFuaW1hdGlvbnMgQVBJXHJcbiAgICAgICAgICAgICAqIGFjY291bnRzIGZvciB0aGlzLCBidXQgdXNpbmcgcmF3IENTUyBBbmltYXRpb25zIHJlcXVpcmVzXHJcbiAgICAgICAgICAgICAqIHRoaXMgd29ya2Fyb3VuZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gZ2V0RGVsYXkoKSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IGdldER1cmF0aW9uKCkgfHwgMDtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSXRlcmF0aW9ucyA9IGdldEl0ZXJhdGlvbnMoKSB8fCAxO1xyXG4gICAgICAgICAgICBjc3NBbmltYXRpb25zVGltZXJGYWxsYmFjayA9IHNldFRpbWVvdXQob25BbmltYXRpb25FbmRGYWxsYmFjaywgYW5pbWF0aW9uRGVsYXkgKyAoYW5pbWF0aW9uRHVyYXRpb24gKiBhbmltYXRpb25JdGVyYXRpb25zKSArIEFOSU1BVElPTl9FTkRfRkFMTEJBQ0tfUEFERElOR19NUyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkVuZChlbGVtZW50c1swXSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJDU1NBbmltYXRpb25zVGltZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBFbnN1cmUgdGhhdCBjbGVhbiB1cFxyXG4gICAgICAgICAgICAgICAgICogaXMgYWx3YXlzIGRvbmUgYSBmcmFtZVxyXG4gICAgICAgICAgICAgICAgICogYmVmb3JlIHRoZSBvbkZpbmlzaCBoYW5kbGVyc1xyXG4gICAgICAgICAgICAgICAgICogYXJlIGZpcmVkLiBPdGhlcndpc2UsIHRoZXJlXHJcbiAgICAgICAgICAgICAgICAgKiBtYXkgYmUgZmxpY2tlcmluZyBpZiBhIG5ld1xyXG4gICAgICAgICAgICAgICAgICogYW5pbWF0aW9uIGlzIHN0YXJ0ZWQgb24gdGhlIHNhbWVcclxuICAgICAgICAgICAgICAgICAqIGVsZW1lbnQgdG9vIHF1aWNrbHlcclxuICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgKiBUT0RPOiBJcyB0aGVyZSBhIGNsZWFuZXIgd2F5IHRvIGRvIHRoaXM/XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJhZigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJDU1NBbmltYXRpb25QbGF5U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWYoYW5pbWF0aW9uRmluaXNoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xlYXJDU1NBbmltYXRpb25QbGF5U3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoZWxlbWVudCwgJ2FuaW1hdGlvbi1kZWxheScpO1xyXG4gICAgICAgICAgICByZW1vdmVTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tcGxheS1zdGF0ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHBsYXlXZWJBbmltYXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBhbmltYXRpb24ucGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChfa2V5ZnJhbWVzLmxlbmd0aCA9PT0gMCB8fCBlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uRmluaXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0QW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uU3RlcCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNTU0FuaW1hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBwbGF5ID0gKG9wdHMpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRzICYmIG9wdHMuc3luYykge1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb25GaW5pc2goKCkgPT4gc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSBmYWxzZSwgeyBvbmVUaW1lQ2FsbGJhY2s6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIG51bUFuaW1hdGlvbnNSdW5uaW5nID0gY2hpbGRBbmltYXRpb25zLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25GaW5pc2goKCkgPT4gcmVzb2x2ZSgpLCB7IG9uZVRpbWVDYWxsYmFjazogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5V2ViQW5pbWF0aW9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheUNTU0FuaW1hdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgY2xlYW5VcEVsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZyb20gPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RGcmFtZSA9IF9rZXlmcmFtZXNbMF07XHJcbiAgICAgICAgaWYgKGZpcnN0RnJhbWUgIT09IHVuZGVmaW5lZCAmJiBmaXJzdEZyYW1lLm9mZnNldCA9PT0gMCkge1xyXG4gICAgICAgICAgICBmaXJzdEZyYW1lW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX2tleWZyYW1lcyA9IFtcclxuICAgICAgICAgICAgICAgIHsgb2Zmc2V0OiAwLCBbcHJvcGVydHldOiB2YWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgLi4uX2tleWZyYW1lc1xyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHRvID0gKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RGcmFtZSA9IF9rZXlmcmFtZXNbX2tleWZyYW1lcy5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobGFzdEZyYW1lICE9PSB1bmRlZmluZWQgJiYgbGFzdEZyYW1lLm9mZnNldCA9PT0gMSkge1xyXG4gICAgICAgICAgICBsYXN0RnJhbWVbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfa2V5ZnJhbWVzID0gW1xyXG4gICAgICAgICAgICAgICAgLi4uX2tleWZyYW1lcyxcclxuICAgICAgICAgICAgICAgIHsgb2Zmc2V0OiAxLCBbcHJvcGVydHldOiB2YWx1ZSB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbmk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZnJvbVRvID0gKHByb3BlcnR5LCBmcm9tVmFsdWUsIHRvVmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gZnJvbShwcm9wZXJ0eSwgZnJvbVZhbHVlKS50byhwcm9wZXJ0eSwgdG9WYWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGFuaSA9IHtcclxuICAgICAgICBwYXJlbnRBbmltYXRpb24sXHJcbiAgICAgICAgZWxlbWVudHMsXHJcbiAgICAgICAgY2hpbGRBbmltYXRpb25zLFxyXG4gICAgICAgIGFuaW1hdGlvbkZpbmlzaCxcclxuICAgICAgICBmcm9tLFxyXG4gICAgICAgIHRvLFxyXG4gICAgICAgIGZyb21UbyxcclxuICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgcGxheSxcclxuICAgICAgICBwbGF5QXN5bmMsXHJcbiAgICAgICAgcGxheVN5bmMsXHJcbiAgICAgICAgcGF1c2UsXHJcbiAgICAgICAgc3RvcCxcclxuICAgICAgICBkZXN0cm95LFxyXG4gICAgICAgIGtleWZyYW1lcyxcclxuICAgICAgICBhZGRBbmltYXRpb24sXHJcbiAgICAgICAgYWRkRWxlbWVudCxcclxuICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgZmlsbCxcclxuICAgICAgICBkaXJlY3Rpb24sXHJcbiAgICAgICAgaXRlcmF0aW9ucyxcclxuICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgZGVsYXksXHJcbiAgICAgICAgZ2V0V2ViQW5pbWF0aW9ucyxcclxuICAgICAgICBnZXRLZXlmcmFtZXMsXHJcbiAgICAgICAgZ2V0RmlsbCxcclxuICAgICAgICBnZXREaXJlY3Rpb24sXHJcbiAgICAgICAgZ2V0RGVsYXksXHJcbiAgICAgICAgZ2V0SXRlcmF0aW9ucyxcclxuICAgICAgICBnZXRFYXNpbmcsXHJcbiAgICAgICAgZ2V0RHVyYXRpb24sXHJcbiAgICAgICAgYWZ0ZXJBZGRSZWFkLFxyXG4gICAgICAgIGFmdGVyQWRkV3JpdGUsXHJcbiAgICAgICAgYWZ0ZXJDbGVhclN0eWxlcyxcclxuICAgICAgICBhZnRlclN0eWxlcyxcclxuICAgICAgICBhZnRlclJlbW92ZUNsYXNzLFxyXG4gICAgICAgIGFmdGVyQWRkQ2xhc3MsXHJcbiAgICAgICAgYmVmb3JlQWRkUmVhZCxcclxuICAgICAgICBiZWZvcmVBZGRXcml0ZSxcclxuICAgICAgICBiZWZvcmVDbGVhclN0eWxlcyxcclxuICAgICAgICBiZWZvcmVTdHlsZXMsXHJcbiAgICAgICAgYmVmb3JlUmVtb3ZlQ2xhc3MsXHJcbiAgICAgICAgYmVmb3JlQWRkQ2xhc3MsXHJcbiAgICAgICAgb25GaW5pc2gsXHJcbiAgICAgICAgcHJvZ3Jlc3NTdGFydCxcclxuICAgICAgICBwcm9ncmVzc1N0ZXAsXHJcbiAgICAgICAgcHJvZ3Jlc3NFbmRcclxuICAgIH07XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUFuaW1hdGlvbiBhcyBjIH07XG4iLCJjb25zdCBnZXRQbGF0Zm9ybXMgPSAod2luKSA9PiBzZXR1cFBsYXRmb3Jtcyh3aW4pO1xyXG5jb25zdCBpc1BsYXRmb3JtID0gKHdpbk9yUGxhdGZvcm0sIHBsYXRmb3JtKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbk9yUGxhdGZvcm0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcGxhdGZvcm0gPSB3aW5PclBsYXRmb3JtO1xyXG4gICAgICAgIHdpbk9yUGxhdGZvcm0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0UGxhdGZvcm1zKHdpbk9yUGxhdGZvcm0pLmluY2x1ZGVzKHBsYXRmb3JtKTtcclxufTtcclxuY29uc3Qgc2V0dXBQbGF0Zm9ybXMgPSAod2luID0gd2luZG93KSA9PiB7XHJcbiAgICB3aW4uSW9uaWMgPSB3aW4uSW9uaWMgfHwge307XHJcbiAgICBsZXQgcGxhdGZvcm1zID0gd2luLklvbmljLnBsYXRmb3JtcztcclxuICAgIGlmIChwbGF0Zm9ybXMgPT0gbnVsbCkge1xyXG4gICAgICAgIHBsYXRmb3JtcyA9IHdpbi5Jb25pYy5wbGF0Zm9ybXMgPSBkZXRlY3RQbGF0Zm9ybXMod2luKTtcclxuICAgICAgICBwbGF0Zm9ybXMuZm9yRWFjaChwID0+IHdpbi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcGx0LSR7cH1gKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGxhdGZvcm1zO1xyXG59O1xyXG5jb25zdCBkZXRlY3RQbGF0Zm9ybXMgPSAod2luKSA9PiBPYmplY3Qua2V5cyhQTEFURk9STVNfTUFQKS5maWx0ZXIocCA9PiBQTEFURk9STVNfTUFQW3BdKHdpbikpO1xyXG5jb25zdCBpc01vYmlsZVdlYiA9ICh3aW4pID0+IGlzTW9iaWxlKHdpbikgJiYgIWlzSHlicmlkKHdpbik7XHJcbmNvbnN0IGlzSXBhZCA9ICh3aW4pID0+IHtcclxuICAgIC8vIGlPUyAxMiBhbmQgYmVsb3dcclxuICAgIGlmICh0ZXN0VXNlckFnZW50KHdpbiwgL2lQYWQvaSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGlPUyAxMytcclxuICAgIGlmICh0ZXN0VXNlckFnZW50KHdpbiwgL01hY2ludG9zaC9pKSAmJiBpc01vYmlsZSh3aW4pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbmNvbnN0IGlzSXBob25lID0gKHdpbikgPT4gdGVzdFVzZXJBZ2VudCh3aW4sIC9pUGhvbmUvaSk7XHJcbmNvbnN0IGlzSU9TID0gKHdpbikgPT4gdGVzdFVzZXJBZ2VudCh3aW4sIC9pUGhvbmV8aVBvZC9pKSB8fCBpc0lwYWQod2luKTtcclxuY29uc3QgaXNBbmRyb2lkID0gKHdpbikgPT4gdGVzdFVzZXJBZ2VudCh3aW4sIC9hbmRyb2lkfHNpbmsvaSk7XHJcbmNvbnN0IGlzQW5kcm9pZFRhYmxldCA9ICh3aW4pID0+IHtcclxuICAgIHJldHVybiBpc0FuZHJvaWQod2luKSAmJiAhdGVzdFVzZXJBZ2VudCh3aW4sIC9tb2JpbGUvaSk7XHJcbn07XHJcbmNvbnN0IGlzUGhhYmxldCA9ICh3aW4pID0+IHtcclxuICAgIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBzbWFsbGVzdCA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgbGFyZ2VzdCA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgcmV0dXJuIChzbWFsbGVzdCA+IDM5MCAmJiBzbWFsbGVzdCA8IDUyMCkgJiZcclxuICAgICAgICAobGFyZ2VzdCA+IDYyMCAmJiBsYXJnZXN0IDwgODAwKTtcclxufTtcclxuY29uc3QgaXNUYWJsZXQgPSAod2luKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3Qgc21hbGxlc3QgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiAoaXNJcGFkKHdpbikgfHxcclxuICAgICAgICBpc0FuZHJvaWRUYWJsZXQod2luKSB8fFxyXG4gICAgICAgICgoc21hbGxlc3QgPiA0NjAgJiYgc21hbGxlc3QgPCA4MjApICYmXHJcbiAgICAgICAgICAgIChsYXJnZXN0ID4gNzgwICYmIGxhcmdlc3QgPCAxNDAwKSkpO1xyXG59O1xyXG5jb25zdCBpc01vYmlsZSA9ICh3aW4pID0+IG1hdGNoTWVkaWEod2luLCAnKGFueS1wb2ludGVyOmNvYXJzZSknKTtcclxuY29uc3QgaXNEZXNrdG9wID0gKHdpbikgPT4gIWlzTW9iaWxlKHdpbik7XHJcbmNvbnN0IGlzSHlicmlkID0gKHdpbikgPT4gaXNDb3Jkb3ZhKHdpbikgfHwgaXNDYXBhY2l0b3JOYXRpdmUod2luKTtcclxuY29uc3QgaXNDb3Jkb3ZhID0gKHdpbikgPT4gISEod2luWydjb3Jkb3ZhJ10gfHwgd2luWydwaG9uZWdhcCddIHx8IHdpblsnUGhvbmVHYXAnXSk7XHJcbmNvbnN0IGlzQ2FwYWNpdG9yTmF0aXZlID0gKHdpbikgPT4ge1xyXG4gICAgY29uc3QgY2FwYWNpdG9yID0gd2luWydDYXBhY2l0b3InXTtcclxuICAgIHJldHVybiAhIShjYXBhY2l0b3IgJiYgY2FwYWNpdG9yLmlzTmF0aXZlKTtcclxufTtcclxuY29uc3QgaXNFbGVjdHJvbiA9ICh3aW4pID0+IHRlc3RVc2VyQWdlbnQod2luLCAvZWxlY3Ryb24vaSk7XHJcbmNvbnN0IGlzUFdBID0gKHdpbikgPT4gISEod2luLm1hdGNoTWVkaWEoJyhkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpJykubWF0Y2hlcyB8fCB3aW4ubmF2aWdhdG9yLnN0YW5kYWxvbmUpO1xyXG5jb25zdCB0ZXN0VXNlckFnZW50ID0gKHdpbiwgZXhwcikgPT4gZXhwci50ZXN0KHdpbi5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuY29uc3QgbWF0Y2hNZWRpYSA9ICh3aW4sIHF1ZXJ5KSA9PiB3aW4ubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcclxuY29uc3QgUExBVEZPUk1TX01BUCA9IHtcclxuICAgICdpcGFkJzogaXNJcGFkLFxyXG4gICAgJ2lwaG9uZSc6IGlzSXBob25lLFxyXG4gICAgJ2lvcyc6IGlzSU9TLFxyXG4gICAgJ2FuZHJvaWQnOiBpc0FuZHJvaWQsXHJcbiAgICAncGhhYmxldCc6IGlzUGhhYmxldCxcclxuICAgICd0YWJsZXQnOiBpc1RhYmxldCxcclxuICAgICdjb3Jkb3ZhJzogaXNDb3Jkb3ZhLFxyXG4gICAgJ2NhcGFjaXRvcic6IGlzQ2FwYWNpdG9yTmF0aXZlLFxyXG4gICAgJ2VsZWN0cm9uJzogaXNFbGVjdHJvbixcclxuICAgICdwd2EnOiBpc1BXQSxcclxuICAgICdtb2JpbGUnOiBpc01vYmlsZSxcclxuICAgICdtb2JpbGV3ZWInOiBpc01vYmlsZVdlYixcclxuICAgICdkZXNrdG9wJzogaXNEZXNrdG9wLFxyXG4gICAgJ2h5YnJpZCc6IGlzSHlicmlkXHJcbn07XG5cbmNsYXNzIENvbmZpZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm0gPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICByZXNldChjb25maWdPYmopIHtcclxuICAgICAgICB0aGlzLm0gPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGNvbmZpZ09iaikpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGtleSwgZmFsbGJhY2spIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubS5nZXQoa2V5KTtcclxuICAgICAgICByZXR1cm4gKHZhbHVlICE9PSB1bmRlZmluZWQpID8gdmFsdWUgOiBmYWxsYmFjaztcclxuICAgIH1cclxuICAgIGdldEJvb2xlYW4oa2V5LCBmYWxsYmFjayA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy5tLmdldChrZXkpO1xyXG4gICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsbGJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsID09PSAndHJ1ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhIXZhbDtcclxuICAgIH1cclxuICAgIGdldE51bWJlcihrZXksIGZhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gcGFyc2VGbG9hdCh0aGlzLm0uZ2V0KGtleSkpO1xyXG4gICAgICAgIHJldHVybiBpc05hTih2YWwpID8gKGZhbGxiYWNrICE9PSB1bmRlZmluZWQgPyBmYWxsYmFjayA6IE5hTikgOiB2YWw7XHJcbiAgICB9XHJcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgY29uZmlnID0gLypAX19QVVJFX18qLyBuZXcgQ29uZmlnKCk7XHJcbmNvbnN0IGNvbmZpZ0Zyb21TZXNzaW9uID0gKHdpbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25maWdTdHIgPSB3aW4uc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShJT05JQ19TRVNTSU9OX0tFWSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ1N0ciAhPT0gbnVsbCA/IEpTT04ucGFyc2UoY29uZmlnU3RyKSA6IHt9O1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNhdmVDb25maWcgPSAod2luLCBjKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdpbi5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKElPTklDX1NFU1NJT05fS0VZLCBKU09OLnN0cmluZ2lmeShjKSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufTtcclxuY29uc3QgY29uZmlnRnJvbVVSTCA9ICh3aW4pID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZ09iaiA9IHt9O1xyXG4gICAgd2luLmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKVxyXG4gICAgICAgIC5zcGxpdCgnJicpXHJcbiAgICAgICAgLm1hcChlbnRyeSA9PiBlbnRyeS5zcGxpdCgnPScpKVxyXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2RlY29kZVVSSUNvbXBvbmVudChrZXkpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpXSlcclxuICAgICAgICAuZmlsdGVyKChba2V5XSkgPT4gc3RhcnRzV2l0aChrZXksIElPTklDX1BSRUZJWCkpXHJcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LnNsaWNlKElPTklDX1BSRUZJWC5sZW5ndGgpLCB2YWx1ZV0pXHJcbiAgICAgICAgLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGNvbmZpZ09ialtrZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb25maWdPYmo7XHJcbn07XHJcbmNvbnN0IHN0YXJ0c1dpdGggPSAoaW5wdXQsIHNlYXJjaCkgPT4ge1xyXG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cigwLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xyXG59O1xyXG5jb25zdCBJT05JQ19QUkVGSVggPSAnaW9uaWM6JztcclxuY29uc3QgSU9OSUNfU0VTU0lPTl9LRVkgPSAnaW9uaWMtcGVyc2lzdC1jb25maWcnO1xuXG5leHBvcnQgeyBjb25maWdGcm9tVVJMIGFzIGEsIGNvbmZpZyBhcyBiLCBjb25maWdGcm9tU2Vzc2lvbiBhcyBjLCBzYXZlQ29uZmlnIGFzIGQsIGdldFBsYXRmb3JtcyBhcyBnLCBpc1BsYXRmb3JtIGFzIGksIHNldHVwUGxhdGZvcm1zIGFzIHMgfTtcbiIsImNvbnN0IExJRkVDWUNMRV9XSUxMX0VOVEVSID0gJ2lvblZpZXdXaWxsRW50ZXInO1xyXG5jb25zdCBMSUZFQ1lDTEVfRElEX0VOVEVSID0gJ2lvblZpZXdEaWRFbnRlcic7XHJcbmNvbnN0IExJRkVDWUNMRV9XSUxMX0xFQVZFID0gJ2lvblZpZXdXaWxsTGVhdmUnO1xyXG5jb25zdCBMSUZFQ1lDTEVfRElEX0xFQVZFID0gJ2lvblZpZXdEaWRMZWF2ZSc7XHJcbmNvbnN0IExJRkVDWUNMRV9XSUxMX1VOTE9BRCA9ICdpb25WaWV3V2lsbFVubG9hZCc7XG5cbmV4cG9ydCB7IExJRkVDWUNMRV9XSUxMX0VOVEVSIGFzIEwsIExJRkVDWUNMRV9ESURfRU5URVIgYXMgYSwgTElGRUNZQ0xFX1dJTExfTEVBVkUgYXMgYiwgTElGRUNZQ0xFX0RJRF9MRUFWRSBhcyBjLCBMSUZFQ1lDTEVfV0lMTF9VTkxPQUQgYXMgZCB9O1xuIiwiaW1wb3J0IHsgcyBhcyBzZXR1cFBsYXRmb3JtcywgYyBhcyBjb25maWdGcm9tU2Vzc2lvbiwgYSBhcyBjb25maWdGcm9tVVJMLCBiIGFzIGNvbmZpZywgZCBhcyBzYXZlQ29uZmlnLCBpIGFzIGlzUGxhdGZvcm0gfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5cbmNvbnN0IE5BTUVTUEFDRSA9ICdpb25pYyc7XG5cbmxldCBxdWV1ZUNvbmdlc3Rpb24gPSAwO1xubGV0IHF1ZXVlUGVuZGluZyA9IGZhbHNlO1xubGV0IHNjb3BlSWQ7XG5sZXQgY29udGVudFJlZjtcbmxldCBob3N0VGFnTmFtZTtcbmxldCB1c2VOYXRpdmVTaGFkb3dEb20gPSBmYWxzZTtcbmxldCBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSBmYWxzZTtcbmxldCBjaGVja1Nsb3RSZWxvY2F0ZSA9IGZhbHNlO1xubGV0IGlzU3ZnTW9kZSA9IGZhbHNlO1xuY29uc3Qgd2luID0gd2luZG93O1xuY29uc3QgZG9jID0gZG9jdW1lbnQ7XG5jb25zdCBwbHQgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkcmVzb3VyY2VzVXJsJDogJycsXG4gICAgam1wOiAoaCkgPT4gaCgpLFxuICAgIHJhZjogKGgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShoKSxcbiAgICBhZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgICByZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbn07XG5jb25zdCBzdXBwb3J0c1NoYWRvd0RvbSA9ICAvKkBfX1BVUkVfXyovICgoKSA9PiAhIWRvYy5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSgpIDtcbmNvbnN0IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID0gLypAX19QVVJFX18qLyAoKCkgPT4ge1xuICAgIGxldCBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdlJywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgIGdldCgpIHsgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMgPSB0cnVlOyB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHsgfVxuICAgIHJldHVybiBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucztcbn0pKCk7XG5jb25zdCBzdXBwb3J0c0NvbnN0cnVjdGlibGVTdHlsZXNoZWV0cyA9ICAvKkBfX1BVUkVfXyovICgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbiAgICByZXR1cm4gZmFsc2U7XG59KSgpIDtcbmNvbnN0IGhvc3RSZWZzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGdldEhvc3RSZWYgPSAocmVmKSA9PiBob3N0UmVmcy5nZXQocmVmKTtcbmNvbnN0IHJlZ2lzdGVySW5zdGFuY2UgPSAobGF6eUluc3RhbmNlLCBob3N0UmVmKSA9PiBob3N0UmVmcy5zZXQoaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA9IGxhenlJbnN0YW5jZSwgaG9zdFJlZik7XG5jb25zdCByZWdpc3Rlckhvc3QgPSAoZWxtKSA9PiB7XG4gICAgY29uc3QgaG9zdFJlZiA9IHtcbiAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgJGhvc3RFbGVtZW50JDogZWxtLFxuICAgICAgICAkaW5zdGFuY2VWYWx1ZXMkOiBuZXcgTWFwKClcbiAgICB9O1xuICAgIHtcbiAgICAgICAgaG9zdFJlZi4kb25JbnN0YW5jZVByb21pc2UkID0gbmV3IFByb21pc2UociA9PiBob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQgPSByKTtcbiAgICB9XG4gICAge1xuICAgICAgICBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQgPSBuZXcgUHJvbWlzZShyID0+IGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCA9IHIpO1xuICAgICAgICBlbG1bJ3MtcCddID0gW107XG4gICAgICAgIGVsbVsncy1yYyddID0gW107XG4gICAgfVxuICAgIHJldHVybiBob3N0UmVmcy5zZXQoZWxtLCBob3N0UmVmKTtcbn07XG5jb25zdCBpc01lbWJlckluRWxlbWVudCA9IChlbG0sIG1lbWJlck5hbWUpID0+IG1lbWJlck5hbWUgaW4gZWxtO1xuY29uc3QgY29uc29sZUVycm9yID0gKGUpID0+IGNvbnNvbGUuZXJyb3IoZSk7XG5jb25zdCBtb2R1bGVDYWNoZSA9IC8qQF9fUFVSRV9fKi8gbmV3IE1hcCgpO1xuY29uc3QgbG9hZE1vZHVsZSA9IChjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgICAvLyBsb2FkTW9kdWxlSW1wb3J0XG4gICAgY29uc3QgZXhwb3J0TmFtZSA9IGNtcE1ldGEuJHRhZ05hbWUkLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgICBjb25zdCBidW5kbGVJZCA9ICgoIHR5cGVvZiBjbXBNZXRhLiRsYXp5QnVuZGxlSWRzJCAhPT0gJ3N0cmluZycpXG4gICAgICAgID8gY21wTWV0YS4kbGF6eUJ1bmRsZUlkcyRbaG9zdFJlZi4kbW9kZU5hbWUkXVxuICAgICAgICA6IGNtcE1ldGEuJGxhenlCdW5kbGVJZHMkKTtcbiAgICBjb25zdCBtb2R1bGUgPSAgbW9kdWxlQ2FjaGUuZ2V0KGJ1bmRsZUlkKSA7XG4gICAgaWYgKG1vZHVsZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlW2V4cG9ydE5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwuZW50cnlcXC5qcyQvICovXG4gICAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICBgLi8ke2J1bmRsZUlkfS5lbnRyeS5qcyR7ICcnfWApLnRoZW4oaW1wb3J0ZWRNb2R1bGUgPT4ge1xuICAgICAgICB7XG4gICAgICAgICAgICBtb2R1bGVDYWNoZS5zZXQoYnVuZGxlSWQsIGltcG9ydGVkTW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfSwgY29uc29sZUVycm9yKTtcbn07XG5jb25zdCBzdHlsZXMgPSBuZXcgTWFwKCk7XG5jb25zdCBxdWV1ZURvbVJlYWRzID0gW107XG5jb25zdCBxdWV1ZURvbVdyaXRlcyA9IFtdO1xuY29uc3QgcXVldWVEb21Xcml0ZXNMb3cgPSBbXTtcbmNvbnN0IHF1ZXVlVGFzayA9IChxdWV1ZSwgd3JpdGUpID0+IChjYikgPT4ge1xuICAgIHF1ZXVlLnB1c2goY2IpO1xuICAgIGlmICghcXVldWVQZW5kaW5nKSB7XG4gICAgICAgIHF1ZXVlUGVuZGluZyA9IHRydWU7XG4gICAgICAgIGlmICh3cml0ZSAmJiBwbHQuJGZsYWdzJCAmIDQgLyogcXVldWVTeW5jICovKSB7XG4gICAgICAgICAgICBuZXh0VGljayhmbHVzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBjb25zdW1lID0gKHF1ZXVlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcXVldWVbaV0ocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbn07XG5jb25zdCBjb25zdW1lVGltZW91dCA9IChxdWV1ZSwgdGltZW91dCkgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgdHMgPSAwO1xuICAgIHdoaWxlIChpIDwgcXVldWUubGVuZ3RoICYmICh0cyA9IHBlcmZvcm1hbmNlLm5vdygpKSA8IHRpbWVvdXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHF1ZXVlW2krK10odHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPT09IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpKTtcbiAgICB9XG59O1xuY29uc3QgZmx1c2ggPSAoKSA9PiB7XG4gICAgcXVldWVDb25nZXN0aW9uKys7XG4gICAgLy8gYWx3YXlzIGZvcmNlIGEgYnVuY2ggb2YgbWVkaXVtIGNhbGxiYWNrcyB0byBydW4sIGJ1dCBzdGlsbCBoYXZlXG4gICAgLy8gYSB0aHJvdHRsZSBvbiBob3cgbWFueSBjYW4gcnVuIGluIGEgY2VydGFpbiB0aW1lXG4gICAgLy8gRE9NIFJFQURTISEhXG4gICAgY29uc3VtZShxdWV1ZURvbVJlYWRzKTtcbiAgICBjb25zdCB0aW1lb3V0ID0gKHBsdC4kZmxhZ3MkICYgNiAvKiBxdWV1ZU1hc2sgKi8pID09PSAyIC8qIGFwcExvYWRlZCAqL1xuICAgICAgICA/IHBlcmZvcm1hbmNlLm5vdygpICsgKDEwICogTWF0aC5jZWlsKHF1ZXVlQ29uZ2VzdGlvbiAqICgxLjAgLyAyMi4wKSkpXG4gICAgICAgIDogSW5maW5pdHk7XG4gICAgLy8gRE9NIFdSSVRFUyEhIVxuICAgIGNvbnN1bWVUaW1lb3V0KHF1ZXVlRG9tV3JpdGVzLCB0aW1lb3V0KTtcbiAgICBjb25zdW1lVGltZW91dChxdWV1ZURvbVdyaXRlc0xvdywgdGltZW91dCk7XG4gICAgaWYgKHF1ZXVlRG9tV3JpdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcXVldWVEb21Xcml0ZXNMb3cucHVzaCguLi5xdWV1ZURvbVdyaXRlcyk7XG4gICAgICAgIHF1ZXVlRG9tV3JpdGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIGlmIChxdWV1ZVBlbmRpbmcgPSAoKHF1ZXVlRG9tUmVhZHMubGVuZ3RoICsgcXVldWVEb21Xcml0ZXMubGVuZ3RoICsgcXVldWVEb21Xcml0ZXNMb3cubGVuZ3RoKSA+IDApKSB7XG4gICAgICAgIC8vIHN0aWxsIG1vcmUgdG8gZG8geWV0LCBidXQgd2UndmUgcnVuIG91dCBvZiB0aW1lXG4gICAgICAgIC8vIGxldCdzIGxldCB0aGlzIHRoaW5nIGNvb2wgb2ZmIGFuZCB0cnkgYWdhaW4gaW4gdGhlIG5leHQgdGlja1xuICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHF1ZXVlQ29uZ2VzdGlvbiA9IDA7XG4gICAgfVxufTtcbmNvbnN0IG5leHRUaWNrID0gLypAX19QVVJFX18qLyAoY2IpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oY2IpO1xuY29uc3QgcmVhZFRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVJlYWRzLCBmYWxzZSk7XG5jb25zdCB3cml0ZVRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcywgdHJ1ZSk7XG4vKipcbiAqIERlZmF1bHQgc3R5bGUgbW9kZSBpZFxuICovXG4vKipcbiAqIFJldXNhYmxlIGVtcHR5IG9iai9hcnJheVxuICogRG9uJ3QgYWRkIHZhbHVlcyB0byB0aGVzZSEhXG4gKi9cbmNvbnN0IEVNUFRZX09CSiA9IHt9O1xuLyoqXG4gKiBOYW1lc3BhY2VzXG4gKi9cbmNvbnN0IFNWR19OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5jb25zdCBIVE1MX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuY29uc3QgaXNEZWYgPSAodikgPT4gdiAhPSBudWxsO1xuY29uc3QgaXNDb21wbGV4VHlwZSA9IChvKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL3R5cGVvZi1mbi1vYmplY3QvNVxuICAgIG8gPSB0eXBlb2YgbztcbiAgICByZXR1cm4gbyA9PT0gJ29iamVjdCcgfHwgbyA9PT0gJ2Z1bmN0aW9uJztcbn07XG5jb25zdCBnZXREeW5hbWljSW1wb3J0RnVuY3Rpb24gPSAobmFtZXNwYWNlKSA9PiB7XG4gICAgcmV0dXJuIGBfX3NjX2ltcG9ydF8ke25hbWVzcGFjZS5yZXBsYWNlKC9cXHN8LS9nLCAnXycpfWA7XG59O1xuY29uc3QgcGF0Y2hFc20gPSAoKSA9PiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICggISh3aW4uQ1NTICYmIHdpbi5DU1Muc3VwcG9ydHMgJiYgd2luLkNTUy5zdXBwb3J0cygnY29sb3InLCAndmFyKC0tYyknKSkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gaW1wb3J0KCcuL2Nzcy1zaGltLTIwNmVhOTUwLTMxNjlmMjNlLmpzJykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwbHQuJGNzc1NoaW0kID0gd2luLl9fc3RlbmNpbF9jc3NzaGltO1xuICAgICAgICAgICAgaWYgKHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx0LiRjc3NTaGltJC5pbml0U2hpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcbmNvbnN0IHBhdGNoQnJvd3NlciA9IGFzeW5jICgpID0+IHtcbiAgICB7XG4gICAgICAgIHBsdC4kY3NzU2hpbSQgPSB3aW4uX19zdGVuY2lsX2Nzc3NoaW07XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBpbXBvcnRNZXRhID0gXCJcIjtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYFxcLyR7TkFNRVNQQUNFfShcXFxcLmVzbSk/XFxcXC5qcygkfFxcXFw/fCMpYCk7XG4gICAgY29uc3Qgc2NyaXB0RWxtID0gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykpLmZpbmQocyA9PiAocmVnZXgudGVzdChzLnNyYykgfHxcbiAgICAgICAgcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RlbmNpbC1uYW1lc3BhY2UnKSA9PT0gTkFNRVNQQUNFKSk7XG4gICAgY29uc3Qgb3B0cyA9IHNjcmlwdEVsbVsnZGF0YS1vcHRzJ107XG4gICAgaWYgKGltcG9ydE1ldGEgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdHMpLCB7IHJlc291cmNlc1VybDogbmV3IFVSTCgnLicsIGltcG9ydE1ldGEpLmhyZWYgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCByZXNvdXJjZXNVcmwgPSBuZXcgVVJMKCcuJywgbmV3IFVSTChzY3JpcHRFbG0uZ2V0QXR0cmlidXRlKCdkYXRhLXJlc291cmNlcy11cmwnKSB8fCBzY3JpcHRFbG0uc3JjLCB3aW4ubG9jYXRpb24uaHJlZikpO1xuICAgICAgICBwYXRjaER5bmFtaWNJbXBvcnQocmVzb3VyY2VzVXJsLmhyZWYpO1xuICAgICAgICBpZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYXdhaXQgaW1wb3J0KCcuL2RvbS05Njc4MWVlZi1hMmZiMDRkZC5qcycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdHMpLCB7IHJlc291cmNlc1VybDogcmVzb3VyY2VzVXJsLmhyZWYgfSk7XG4gICAgfVxufTtcbmNvbnN0IHBhdGNoRHluYW1pY0ltcG9ydCA9IChiYXNlKSA9PiB7XG4gICAgY29uc3QgaW1wb3J0RnVuY3Rpb25OYW1lID0gZ2V0RHluYW1pY0ltcG9ydEZ1bmN0aW9uKE5BTUVTUEFDRSk7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gVGhlcmUgaXMgYSBjYWNoaW5nIGlzc3VlIGluIFY4LCB0aGF0IGJyZWFrcyB1c2luZyBpbXBvcnQoKSBpbiBGdW5jdGlvblxuICAgICAgICAvLyBCeSBnZW5lcmF0aW5nIGEgcmFuZG9tIHN0cmluZywgd2UgY2FuIHdvcmthcm91bmQgaXRcbiAgICAgICAgLy8gQ2hlY2sgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9OTU1OCBmb3IgbW9yZSBpbmZvXG4gICAgICAgIHdpbltpbXBvcnRGdW5jdGlvbk5hbWVdID0gbmV3IEZ1bmN0aW9uKCd3JywgYHJldHVybiBpbXBvcnQodyk7Ly8ke01hdGgucmFuZG9tKCl9YCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgd2luW2ltcG9ydEZ1bmN0aW9uTmFtZV0gPSAoc3JjKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNyYywgYmFzZSkuaHJlZjtcbiAgICAgICAgICAgIGxldCBtb2QgPSBtb2R1bGVNYXAuZ2V0KHVybCk7XG4gICAgICAgICAgICBpZiAoIW1vZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtgaW1wb3J0ICogYXMgbSBmcm9tICcke3VybH0nOyB3aW5kb3cuJHtpbXBvcnRGdW5jdGlvbk5hbWV9Lm0gPSBtO2BdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyB9KSk7XG4gICAgICAgICAgICAgICAgbW9kID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbltpbXBvcnRGdW5jdGlvbk5hbWVdLm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1vZHVsZU1hcC5zZXQodXJsLCBtb2QpO1xuICAgICAgICAgICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbW9kO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBwYXJzZVByb3BlcnR5VmFsdWUgPSAocHJvcFZhbHVlLCBwcm9wVHlwZSkgPT4ge1xuICAgIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIGlmICggcHJvcFR5cGUgJiA0IC8qIEJvb2xlYW4gKi8pIHtcbiAgICAgICAgICAgIC8vIHBlciB0aGUgSFRNTCBzcGVjLCBhbnkgc3RyaW5nIHZhbHVlIG1lYW5zIGl0IGlzIGEgYm9vbGVhbiB0cnVlIHZhbHVlXG4gICAgICAgICAgICAvLyBidXQgd2UnbGwgY2hlYXQgaGVyZSBhbmQgc2F5IHRoYXQgdGhlIHN0cmluZyBcImZhbHNlXCIgaXMgdGhlIGJvb2xlYW4gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiAocHJvcFZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiBwcm9wVmFsdWUgPT09ICcnIHx8ICEhcHJvcFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHByb3BUeXBlICYgMiAvKiBOdW1iZXIgKi8pIHtcbiAgICAgICAgICAgIC8vIGZvcmNlIGl0IHRvIGJlIGEgbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggcHJvcFR5cGUgJiAxIC8qIFN0cmluZyAqLykge1xuICAgICAgICAgICAgLy8gY291bGQgaGF2ZSBiZWVuIHBhc3NlZCBhcyBhIG51bWJlciBvciBib29sZWFuXG4gICAgICAgICAgICAvLyBidXQgd2Ugc3RpbGwgd2FudCBpdCBhcyBhIHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlZHVuZGFudCByZXR1cm4gaGVyZSBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuICAgICAgICByZXR1cm4gcHJvcFZhbHVlO1xuICAgIH1cbiAgICAvLyBub3Qgc3VyZSBleGFjdGx5IHdoYXQgdHlwZSB3ZSB3YW50XG4gICAgLy8gc28gbm8gbmVlZCB0byBjaGFuZ2UgdG8gYSBkaWZmZXJlbnQgdHlwZVxuICAgIHJldHVybiBwcm9wVmFsdWU7XG59O1xuY29uc3QgQ09OVEVOVF9SRUZfSUQgPSAncic7XG5jb25zdCBPUkdfTE9DQVRJT05fSUQgPSAnbyc7XG5jb25zdCBTTE9UX05PREVfSUQgPSAncyc7XG5jb25zdCBURVhUX05PREVfSUQgPSAndCc7XG5jb25zdCBIWURSQVRFRF9DTEFTUyA9ICdoeWRyYXRlZCc7XG5jb25zdCBIWURSQVRFX0lEID0gJ3MtaWQnO1xuY29uc3QgSFlEUkFURV9DSElMRF9JRCA9ICdjLWlkJztcbmNvbnN0IFhMSU5LX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuY29uc3Qgcm9vdEFwcGxpZWRTdHlsZXMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmVnaXN0ZXJTdHlsZSA9IChzY29wZUlkLCBjc3NUZXh0LCBhbGxvd0NTKSA9PiB7XG4gICAgbGV0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkKTtcbiAgICBpZiAoc3VwcG9ydHNDb25zdHJ1Y3RpYmxlU3R5bGVzaGVldHMgJiYgYWxsb3dDUykge1xuICAgICAgICBzdHlsZSA9IChzdHlsZSB8fCBuZXcgQ1NTU3R5bGVTaGVldCgpKTtcbiAgICAgICAgc3R5bGUucmVwbGFjZShjc3NUZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0eWxlID0gY3NzVGV4dDtcbiAgICB9XG4gICAgc3R5bGVzLnNldChzY29wZUlkLCBzdHlsZSk7XG59O1xuY29uc3QgYWRkU3R5bGUgPSAoc3R5bGVDb250YWluZXJOb2RlLCBjbXBNZXRhLCBtb2RlLCBob3N0RWxtKSA9PiB7XG4gICAgbGV0IHNjb3BlSWQgPSAgZ2V0U2NvcGVJZChjbXBNZXRhLiR0YWdOYW1lJCwgbW9kZSkgO1xuICAgIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgLy8gaWYgYW4gZWxlbWVudCBpcyBOT1QgY29ubmVjdGVkIHRoZW4gZ2V0Um9vdE5vZGUoKSB3aWxsIHJldHVybiB0aGUgd3Jvbmcgcm9vdCBub2RlXG4gICAgLy8gc28gdGhlIGZhbGxiYWNrIGlzIHRvIGFsd2F5cyB1c2UgdGhlIGRvY3VtZW50IGZvciB0aGUgcm9vdCBub2RlIGluIHRob3NlIGNhc2VzXG4gICAgc3R5bGVDb250YWluZXJOb2RlID0gKHN0eWxlQ29udGFpbmVyTm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogRG9jdW1lbnRGcmFnbWVudCAqLyA/IHN0eWxlQ29udGFpbmVyTm9kZSA6IGRvYyk7XG4gICAgaWYgKCAhc3R5bGUpIHtcbiAgICAgICAgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgfVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlID0gc3R5bGVDb250YWluZXJOb2RlLmhlYWQgfHwgc3R5bGVDb250YWluZXJOb2RlO1xuICAgICAgICAgICAgbGV0IGFwcGxpZWRTdHlsZXMgPSByb290QXBwbGllZFN0eWxlcy5nZXQoc3R5bGVDb250YWluZXJOb2RlKTtcbiAgICAgICAgICAgIGxldCBzdHlsZUVsbTtcbiAgICAgICAgICAgIGlmICghYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgIHJvb3RBcHBsaWVkU3R5bGVzLnNldChzdHlsZUNvbnRhaW5lck5vZGUsIGFwcGxpZWRTdHlsZXMgPSBuZXcgU2V0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgIGlmICggc3R5bGVDb250YWluZXJOb2RlLmhvc3QgJiYgKHN0eWxlRWxtID0gc3R5bGVDb250YWluZXJOb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiBzdHlsZUVsbS50YWdOYW1lID09PSAnU1RZTEUnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgb25seSBoYXBwZW5pbmcgb24gbmF0aXZlIHNoYWRvdy1kb20sIGRvIG5vdCBuZWVkcyBDU1MgdmFyIHNoaW1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtID0gcGx0LiRjc3NTaGltJC5jcmVhdGVIb3N0U3R5bGUoaG9zdEVsbSwgc2NvcGVJZCwgc3R5bGUsICEhKGNtcE1ldGEuJGZsYWdzJCAmIDEwIC8qIG5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2NvcGVJZCA9IHN0eWxlRWxtWydzLXNjJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2NvcGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlSWQgPSBuZXdTY29wZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gYWRkIHRoaXMgc3R5bGVJRCB0byB0aGUgYXBwbGllZFN0eWxlcyBTZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgY3NzVmFyU2hpbSBtaWdodCBuZWVkIHRvIGFwcGx5IHNldmVyYWwgZGlmZmVyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGVzaGVldHMgZm9yIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTdHlsZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbS5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWxtLCBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcignbGluaycpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGllZFN0eWxlcy5hZGQoc2NvcGVJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCAhc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbXG4gICAgICAgICAgICAgICAgLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBzdHlsZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NvcGVJZDtcbn07XG5jb25zdCBhdHRhY2hTdHlsZXMgPSAoZWxtLCBjbXBNZXRhLCBtb2RlKSA9PiB7XG4gICAgY29uc3Qgc2NvcGVJZCA9IGFkZFN0eWxlKCggc3VwcG9ydHNTaGFkb3dEb20gJiYgZWxtLnNoYWRvd1Jvb3QpXG4gICAgICAgID8gZWxtLnNoYWRvd1Jvb3RcbiAgICAgICAgOiBlbG0uZ2V0Um9vdE5vZGUoKSwgY21wTWV0YSwgbW9kZSwgZWxtKTtcbiAgICBpZiAoIGNtcE1ldGEuJGZsYWdzJCAmIDEwIC8qIG5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgICAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAgICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgICAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAgICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICAgICAgLy8gRE9NIFdSSVRFISFcbiAgICAgICAgZWxtWydzLXNjJ10gPSBzY29wZUlkO1xuICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1oJyk7XG4gICAgICAgIGlmICggY21wTWV0YS4kZmxhZ3MkICYgMiAvKiBzY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1zJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZ2V0U2NvcGVJZCA9ICh0YWdOYW1lLCBtb2RlKSA9PiAnc2MtJyArICgoIG1vZGUpID8gdGFnTmFtZSArICctJyArIG1vZGUgOiB0YWdOYW1lKTtcbmNvbnN0IGNvbnZlcnRTY29wZWRUb1NoYWRvdyA9IChjc3MpID0+IGNzcy5yZXBsYWNlKC9cXC9cXCohQChbXlxcL10rKVxcKlxcL1teXFx7XStcXHsvZywgJyQxeycpO1xuLyoqXG4gKiBQcm9kdWN0aW9uIGgoKSBmdW5jdGlvbiBiYXNlZCBvbiBQcmVhY3QgYnlcbiAqIEphc29uIE1pbGxlciAoQGRldmVsb3BpdClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgY29tcGlsZXIgYW5kIHZkb21cbiAqL1xuLy8gY29uc3Qgc3RhY2s6IGFueVtdID0gW107XG4vLyBleHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZTogc3RyaW5nIHwgZC5GdW5jdGlvbmFsQ29tcG9uZW50LCB2bm9kZURhdGE6IGQuUHJvcHNUeXBlLCBjaGlsZD86IGQuQ2hpbGRUeXBlKTogZC5WTm9kZTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBoKG5vZGVOYW1lOiBzdHJpbmcgfCBkLkZ1bmN0aW9uYWxDb21wb25lbnQsIHZub2RlRGF0YTogZC5Qcm9wc1R5cGUsIC4uLmNoaWxkcmVuOiBkLkNoaWxkVHlwZVtdKTogZC5WTm9kZTtcbmNvbnN0IGggPSAobm9kZU5hbWUsIHZub2RlRGF0YSwgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBsZXQgY2hpbGQgPSBudWxsO1xuICAgIGxldCBrZXkgPSBudWxsO1xuICAgIGxldCBzbG90TmFtZSA9IG51bGw7XG4gICAgbGV0IHNpbXBsZSA9IGZhbHNlO1xuICAgIGxldCBsYXN0U2ltcGxlID0gZmFsc2U7XG4gICAgbGV0IHZOb2RlQ2hpbGRyZW4gPSBbXTtcbiAgICBjb25zdCB3YWxrID0gKGMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZCA9IGNbaV07XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB3YWxrKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2ltcGxlID0gdHlwZW9mIG5vZGVOYW1lICE9PSAnZnVuY3Rpb24nICYmICFpc0NvbXBsZXhUeXBlKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgY2hpbGQgd2FzIHNpbXBsZSAoc3RyaW5nKSwgd2UgbWVyZ2UgYm90aFxuICAgICAgICAgICAgICAgICAgICB2Tm9kZUNoaWxkcmVuW3ZOb2RlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uJHRleHQkICs9IGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwZW5kIGEgbmV3IHZOb2RlLCBpZiBpdCdzIHRleHQsIHdlIGNyZWF0ZSBhIHRleHQgdk5vZGVcbiAgICAgICAgICAgICAgICAgICAgdk5vZGVDaGlsZHJlbi5wdXNoKHNpbXBsZSA/IG5ld1ZOb2RlKG51bGwsIGNoaWxkKSA6IGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdFNpbXBsZSA9IHNpbXBsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgd2FsayhjaGlsZHJlbik7XG4gICAgaWYgKHZub2RlRGF0YSkge1xuICAgICAgICAvLyBub3JtYWxpemUgY2xhc3MgLyBjbGFzc25hbWUgYXR0cmlidXRlc1xuICAgICAgICBpZiAoIHZub2RlRGF0YS5rZXkpIHtcbiAgICAgICAgICAgIGtleSA9IHZub2RlRGF0YS5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB2bm9kZURhdGEubmFtZSkge1xuICAgICAgICAgICAgc2xvdE5hbWUgPSB2bm9kZURhdGEubmFtZTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgICAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2bm9kZURhdGEuY2xhc3MgPSB0eXBlb2YgY2xhc3NEYXRhICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICA/IGNsYXNzRGF0YVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKGNsYXNzRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoayA9PiBjbGFzc0RhdGFba10pXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICggdHlwZW9mIG5vZGVOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vZGVOYW1lIGlzIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgICAgICAgcmV0dXJuIG5vZGVOYW1lKHZub2RlRGF0YSwgdk5vZGVDaGlsZHJlbiwgdmRvbUZuVXRpbHMpO1xuICAgIH1cbiAgICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG5vZGVOYW1lLCBudWxsKTtcbiAgICB2bm9kZS4kYXR0cnMkID0gdm5vZGVEYXRhO1xuICAgIGlmICh2Tm9kZUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdm5vZGUuJGNoaWxkcmVuJCA9IHZOb2RlQ2hpbGRyZW47XG4gICAgfVxuICAgIHtcbiAgICAgICAgdm5vZGUuJGtleSQgPSBrZXk7XG4gICAgfVxuICAgIHtcbiAgICAgICAgdm5vZGUuJG5hbWUkID0gc2xvdE5hbWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZTtcbn07XG5jb25zdCBuZXdWTm9kZSA9ICh0YWcsIHRleHQpID0+IHtcbiAgICBjb25zdCB2bm9kZSA9IHtcbiAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgJHRhZyQ6IHRhZyxcbiAgICAgICAgJHRleHQkOiB0ZXh0LFxuICAgICAgICAkZWxtJDogbnVsbCxcbiAgICAgICAgJGNoaWxkcmVuJDogbnVsbFxuICAgIH07XG4gICAge1xuICAgICAgICB2bm9kZS4kYXR0cnMkID0gbnVsbDtcbiAgICB9XG4gICAge1xuICAgICAgICB2bm9kZS4ka2V5JCA9IG51bGw7XG4gICAgfVxuICAgIHtcbiAgICAgICAgdm5vZGUuJG5hbWUkID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlO1xufTtcbmNvbnN0IEhvc3QgPSB7fTtcbmNvbnN0IGlzSG9zdCA9IChub2RlKSA9PiB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS4kdGFnJCA9PT0gSG9zdDtcbn07XG5jb25zdCB2ZG9tRm5VdGlscyA9IHtcbiAgICAnZm9yRWFjaCc6IChjaGlsZHJlbiwgY2IpID0+IGNoaWxkcmVuLm1hcChjb252ZXJ0VG9QdWJsaWMpLmZvckVhY2goY2IpLFxuICAgICdtYXAnOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5tYXAoY2IpLm1hcChjb252ZXJ0VG9Qcml2YXRlKVxufTtcbmNvbnN0IGNvbnZlcnRUb1B1YmxpYyA9IChub2RlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmF0dHJzOiBub2RlLiRhdHRycyQsXG4gICAgICAgIHZjaGlsZHJlbjogbm9kZS4kY2hpbGRyZW4kLFxuICAgICAgICB2a2V5OiBub2RlLiRrZXkkLFxuICAgICAgICB2bmFtZTogbm9kZS4kbmFtZSQsXG4gICAgICAgIHZ0YWc6IG5vZGUuJHRhZyQsXG4gICAgICAgIHZ0ZXh0OiBub2RlLiR0ZXh0JFxuICAgIH07XG59O1xuY29uc3QgY29udmVydFRvUHJpdmF0ZSA9IChub2RlKSA9PiB7XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICAgIHZub2RlLiRhdHRycyQgPSBub2RlLnZhdHRycztcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gbm9kZS52Y2hpbGRyZW47XG4gICAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gICAgdm5vZGUuJG5hbWUkID0gbm9kZS52bmFtZTtcbiAgICByZXR1cm4gdm5vZGU7XG59O1xuLyoqXG4gKiBQcm9kdWN0aW9uIHNldEFjY2Vzc29yKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbmNvbnN0IHNldEFjY2Vzc29yID0gKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpc1N2ZywgZmxhZ3MpID0+IHtcbiAgICBpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGlzUHJvcCA9IGlzTWVtYmVySW5FbGVtZW50KGVsbSwgbWVtYmVyTmFtZSk7XG4gICAgbGV0IGxuID0gbWVtYmVyTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICggbWVtYmVyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbG0uY2xhc3NMaXN0O1xuICAgICAgICBjb25zdCBvbGRDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3Qob2xkVmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3QobmV3VmFsdWUpO1xuICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLm9sZENsYXNzZXMuZmlsdGVyKGMgPT4gYyAmJiAhbmV3Q2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgICBjbGFzc0xpc3QuYWRkKC4uLm5ld0NsYXNzZXMuZmlsdGVyKGMgPT4gYyAmJiAhb2xkQ2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmICggbWVtYmVyTmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAvLyB1cGRhdGUgc3R5bGUgYXR0cmlidXRlLCBjc3MgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHByb3AuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIW9sZFZhbHVlIHx8IG5ld1ZhbHVlW3Byb3BdICE9PSBvbGRWYWx1ZVtwcm9wXSkge1xuICAgICAgICAgICAgICAgIGlmICggcHJvcC5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBuZXdWYWx1ZVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSBuZXdWYWx1ZVtwcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoIG1lbWJlck5hbWUgPT09ICdrZXknKVxuICAgICAgICA7XG4gICAgZWxzZSBpZiAoIG1lbWJlck5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIC8vIG1pbmlmaWVyIHdpbGwgY2xlYW4gdGhpcyB1cFxuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlKGVsbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoICFpc1Byb3AgJiYgbWVtYmVyTmFtZVswXSA9PT0gJ28nICYmIG1lbWJlck5hbWVbMV0gPT09ICduJykge1xuICAgICAgICAvLyBFdmVudCBIYW5kbGVyc1xuICAgICAgICAvLyBzbyBpZiB0aGUgbWVtYmVyIG5hbWUgc3RhcnRzIHdpdGggXCJvblwiIGFuZCB0aGUgM3JkIGNoYXJhY3RlcnMgaXNcbiAgICAgICAgLy8gYSBjYXBpdGFsIGxldHRlciwgYW5kIGl0J3Mgbm90IGFscmVhZHkgYSBtZW1iZXIgb24gdGhlIGVsZW1lbnQsXG4gICAgICAgIC8vIHRoZW4gd2UncmUgYXNzdW1pbmcgaXQncyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICBpZiAobWVtYmVyTmFtZVsyXSA9PT0gJy0nKSB7XG4gICAgICAgICAgICAvLyBvbi0gcHJlZml4ZWQgZXZlbnRzXG4gICAgICAgICAgICAvLyBhbGxvd3MgdG8gYmUgZXhwbGljaXQgYWJvdXQgdGhlIGRvbSBldmVudCB0byBsaXN0ZW4gd2l0aG91dCBhbnkgbWFnaWNcbiAgICAgICAgICAgIC8vIHVuZGVyIHRoZSBob29kOlxuICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1jbGljaz4gLy8gbGlzdGVucyBmb3IgXCJjbGlja1wiXG4gICAgICAgICAgICAvLyA8bXktY21wIG9uLUNsaWNrPiAvLyBsaXN0ZW5zIGZvciBcIkNsaWNrXCJcbiAgICAgICAgICAgIC8vIDxteS1jbXAgb24taW9uQ2hhbmdlPiAvLyBsaXN0ZW5zIGZvciBcImlvbkNoYW5nZVwiXG4gICAgICAgICAgICAvLyA8bXktY21wIG9uLUVWRU5UUz4gLy8gbGlzdGVucyBmb3IgXCJFVkVOVFNcIlxuICAgICAgICAgICAgbWVtYmVyTmFtZSA9IG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNNZW1iZXJJbkVsZW1lbnQod2luLCBsbikpIHtcbiAgICAgICAgICAgIC8vIHN0YW5kYXJkIGV2ZW50XG4gICAgICAgICAgICAvLyB0aGUgSlNYIGF0dHJpYnV0ZSBjb3VsZCBoYXZlIGJlZW4gXCJvbk1vdXNlT3ZlclwiIGFuZCB0aGVcbiAgICAgICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgICAgICAvLyBzbyBsZXQncyBhZGQgdGhlIGxpc3RlbmVyIFwibW91c2VvdmVyXCIsIHdoaWNoIGlzIGFsbCBsb3dlcmNhc2VkXG4gICAgICAgICAgICBtZW1iZXJOYW1lID0gbG4uc2xpY2UoMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjdXN0b20gZXZlbnRcbiAgICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgICAvLyBzbyBsZXQncyB0cmltIG9mZiB0aGUgXCJvblwiIHByZWZpeCBhbmQgbG93ZXJjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgICAgIC8vIGFuZCBhZGQgdGhlIGxpc3RlbmVyIFwibXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuWzJdICsgbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHBsdC5yZWwoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcGx0LmFlbChlbG0sIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFNldCBwcm9wZXJ0eSBpZiBpdCBleGlzdHMgYW5kIGl0J3Mgbm90IGEgU1ZHXG4gICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IGlzQ29tcGxleFR5cGUobmV3VmFsdWUpO1xuICAgICAgICBpZiAoKGlzUHJvcCB8fCAoaXNDb21wbGV4ICYmIG5ld1ZhbHVlICE9PSBudWxsKSkgJiYgIWlzU3ZnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghZWxtLnRhZ05hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbiA9IG5ld1ZhbHVlID09IG51bGwgPyAnJyA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBTYWZhcmksIG1vdmluZyB0aGUgPGlucHV0PiBjYXJldCB3aGVuIHJlLWFzc2lnbmluZyB0aGUgc2FtZSB2YWx1ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsIHx8IGVsbVttZW1iZXJOYW1lXSAhPSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSBuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lZWQgdG8gbWFudWFsbHkgdXBkYXRlIGF0dHJpYnV0ZSBpZjpcbiAgICAgICAgICogLSBtZW1iZXJOYW1lIGlzIG5vdCBhbiBhdHRyaWJ1dGVcbiAgICAgICAgICogLSBpZiB3ZSBhcmUgcmVuZGVyaW5nIHRoZSBob3N0IGVsZW1lbnQgaW4gb3JkZXIgdG8gcmVmbGVjdCBhdHRyaWJ1dGVcbiAgICAgICAgICogLSBpZiBpdCdzIGEgU1ZHLCBzaW5jZSBwcm9wZXJ0aWVzIG1pZ2h0IG5vdCB3b3JrIGluIDxzdmc+XG4gICAgICAgICAqIC0gaWYgdGhlIG5ld1ZhbHVlIGlzIG51bGwvdW5kZWZpbmVkIG9yICdmYWxzZScuXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgeGxpbmsgPSBmYWxzZTtcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGxuICE9PSAobG4gPSBsbi5yZXBsYWNlKC9eeGxpbmtcXDo/LywgJycpKSkge1xuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsbjtcbiAgICAgICAgICAgICAgICB4bGluayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoIHhsaW5rKSB7XG4gICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKFhMSU5LX05TLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUobWVtYmVyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKCFpc1Byb3AgfHwgKGZsYWdzICYgNCAvKiBpc0hvc3QgKi8pIHx8IGlzU3ZnKSAmJiAhaXNDb21wbGV4KSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlID09PSB0cnVlID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGlmICggeGxpbmspIHtcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoWExJTktfTlMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHBhcnNlQ2xhc3NMaXN0UmVnZXggPSAvXFxzLztcbmNvbnN0IHBhcnNlQ2xhc3NMaXN0ID0gKHZhbHVlKSA9PiAoIXZhbHVlKSA/IFtdIDogdmFsdWUuc3BsaXQocGFyc2VDbGFzc0xpc3RSZWdleCk7XG5jb25zdCB1cGRhdGVFbGVtZW50ID0gKG9sZFZub2RlLCBuZXdWbm9kZSwgaXNTdmdNb2RlLCBtZW1iZXJOYW1lKSA9PiB7XG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgcGFzc2VkIGluIGlzIGEgc2hhZG93IHJvb3QsIHdoaWNoIGlzIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAvLyB0aGVuIHdlIHdhbnQgdG8gYmUgYWRkaW5nIGF0dHJzL3Byb3BzIHRvIHRoZSBzaGFkb3cgcm9vdCdzIFwiaG9zdFwiIGVsZW1lbnRcbiAgICAvLyBpZiBpdCdzIG5vdCBhIHNoYWRvdyByb290LCB0aGVuIHdlIGFkZCBhdHRycy9wcm9wcyB0byB0aGUgc2FtZSBlbGVtZW50XG4gICAgY29uc3QgZWxtID0gKG5ld1Zub2RlLiRlbG0kLm5vZGVUeXBlID09PSAxMSAvKiBEb2N1bWVudEZyYWdtZW50ICovICYmIG5ld1Zub2RlLiRlbG0kLmhvc3QpID8gbmV3Vm5vZGUuJGVsbSQuaG9zdCA6IG5ld1Zub2RlLiRlbG0kO1xuICAgIGNvbnN0IG9sZFZub2RlQXR0cnMgPSAob2xkVm5vZGUgJiYgb2xkVm5vZGUuJGF0dHJzJCkgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IG5ld1Zub2RlQXR0cnMgPSBuZXdWbm9kZS4kYXR0cnMkIHx8IEVNUFRZX09CSjtcbiAgICB7XG4gICAgICAgIC8vIHJlbW92ZSBhdHRyaWJ1dGVzIG5vIGxvbmdlciBwcmVzZW50IG9uIHRoZSB2bm9kZSBieSBzZXR0aW5nIHRoZW0gdG8gdW5kZWZpbmVkXG4gICAgICAgIGZvciAobWVtYmVyTmFtZSBpbiBvbGRWbm9kZUF0dHJzKSB7XG4gICAgICAgICAgICBpZiAoIShtZW1iZXJOYW1lIGluIG5ld1Zub2RlQXR0cnMpKSB7XG4gICAgICAgICAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCB1bmRlZmluZWQsIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIG5ldyAmIHVwZGF0ZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICBmb3IgKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykge1xuICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIG5ld1Zub2RlQXR0cnNbbWVtYmVyTmFtZV0sIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgfVxufTtcbmNvbnN0IGNyZWF0ZUVsbSA9IChvbGRQYXJlbnRWTm9kZSwgbmV3UGFyZW50Vk5vZGUsIGNoaWxkSW5kZXgsIHBhcmVudEVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgbGV0IG5ld1ZOb2RlID0gbmV3UGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZEluZGV4XTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGVsbTtcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGxldCBvbGRWTm9kZTtcbiAgICBpZiAoICF1c2VOYXRpdmVTaGFkb3dEb20pIHtcbiAgICAgICAgLy8gcmVtZW1iZXIgZm9yIGxhdGVyIHdlIG5lZWQgdG8gY2hlY2sgdG8gcmVsb2NhdGUgbm9kZXNcbiAgICAgICAgY2hlY2tTbG90UmVsb2NhdGUgPSB0cnVlO1xuICAgICAgICBpZiAobmV3Vk5vZGUuJHRhZyQgPT09ICdzbG90Jykge1xuICAgICAgICAgICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgICAgICAgICAvLyBzY29wZWQgY3NzIG5lZWRzIHRvIGFkZCBpdHMgc2NvcGVkIGlkIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgIHBhcmVudEVsbS5jbGFzc0xpc3QuYWRkKHNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZOb2RlLiRmbGFncyQgfD0gKG5ld1ZOb2RlLiRjaGlsZHJlbiQpXG4gICAgICAgICAgICAgICAgLy8gc2xvdCBlbGVtZW50IGhhcyBmYWxsYmFjayBjb250ZW50XG4gICAgICAgICAgICAgICAgLy8gc3RpbGwgY3JlYXRlIGFuIGVsZW1lbnQgdGhhdCBcIm1vY2tzXCIgdGhlIHNsb3QgZWxlbWVudFxuICAgICAgICAgICAgICAgID8gMiAvKiBpc1Nsb3RGYWxsYmFjayAqL1xuICAgICAgICAgICAgICAgIC8vIHNsb3QgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGZhbGxiYWNrIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gaHRtbCBjb21tZW50IHdlJ2xsIHVzZSB0byBhbHdheXMgcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgLy8gd2hlcmUgYWN0dWFsIHNsb3QgY29udGVudCBzaG91bGQgc2l0IG5leHQgdG9cbiAgICAgICAgICAgICAgICA6IDEgLyogaXNTbG90UmVmZXJlbmNlICovO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICggbmV3Vk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGVcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSBkb2MuY3JlYXRlVGV4dE5vZGUobmV3Vk5vZGUuJHRleHQkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIG5ld1ZOb2RlLiRmbGFncyQgJiAxIC8qIGlzU2xvdFJlZmVyZW5jZSAqLykge1xuICAgICAgICAvLyBjcmVhdGUgYSBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID0gIGRvYy5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoICFpc1N2Z01vZGUpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgICAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9ICggZG9jLmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCAoIG5ld1ZOb2RlLiRmbGFncyQgJiAyIC8qIGlzU2xvdEZhbGxiYWNrICovKSA/ICdzbG90LWZiJyA6IG5ld1ZOb2RlLiR0YWckKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgaWYgKCBpc1N2Z01vZGUgJiYgbmV3Vk5vZGUuJHRhZyQgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGNzcyBjbGFzc2VzLCBhdHRycywgcHJvcHMsIGxpc3RlbmVycywgZXRjLlxuICAgICAgICB7XG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50KG51bGwsIG5ld1ZOb2RlLCBpc1N2Z01vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggaXNEZWYoc2NvcGVJZCkgJiYgZWxtWydzLXNpJ10gIT09IHNjb3BlSWQpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc2NvcGVJZCBhbmQgdGhpcyBpcyB0aGUgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0J3MgYWRkIHRoZSBzY29wZUlkIGFzIGEgY3NzIGNsYXNzXG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZCgoZWxtWydzLXNpJ10gPSBzY29wZUlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXdWTm9kZS4kY2hpbGRyZW4kLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBub2RlXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG9sZFBhcmVudFZOb2RlLCBuZXdWTm9kZSwgaSwgZWxtKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9kZSBjb3VsZCBoYXZlIGJlZW4gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIG91ciBuZXcgbm9kZVxuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIFNWRyBjb250ZXh0IHdoZW4gd2UncmUgZXhpdGluZyA8c3ZnPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbG0udGFnTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVlbnRlciBTVkcgY29udGV4dCB3aGVuIHdlJ3JlIGV4aXRpbmcgPGZvcmVpZ25PYmplY3Q+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpc1N2Z01vZGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHtcbiAgICAgICAgZWxtWydzLWhuJ10gPSBob3N0VGFnTmFtZTtcbiAgICAgICAgaWYgKG5ld1ZOb2RlLiRmbGFncyQgJiAoMiAvKiBpc1Nsb3RGYWxsYmFjayAqLyB8IDEgLyogaXNTbG90UmVmZXJlbmNlICovKSkge1xuICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIGNvbnRlbnQgcmVmZXJlbmNlIGNvbW1lbnRcbiAgICAgICAgICAgIGVsbVsncy1zciddID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoZSBjb250ZW50IHJlZmVyZW5jZSBjb21tZW50XG4gICAgICAgICAgICBlbG1bJ3MtY3InXSA9IGNvbnRlbnRSZWY7XG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgc2xvdCBuYW1lLCBvciBlbXB0eSBzdHJpbmcgZm9yIGRlZmF1bHQgc2xvdFxuICAgICAgICAgICAgZWxtWydzLXNuJ10gPSBuZXdWTm9kZS4kbmFtZSQgfHwgJyc7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBnb3QgYW4gb2xkIHZub2RlIGZvciB0aGlzIHNsb3RcbiAgICAgICAgICAgIG9sZFZOb2RlID0gb2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuJGNoaWxkcmVuJCAmJiBvbGRQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgICAgICAgICAgaWYgKG9sZFZOb2RlICYmIG9sZFZOb2RlLiR0YWckID09PSBuZXdWTm9kZS4kdGFnJCAmJiBvbGRQYXJlbnRWTm9kZS4kZWxtJCkge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIGdvdCBhbiBvbGQgc2xvdCB2bm9kZSBhbmQgdGhlIHdyYXBwZXIgaXMgYmVpbmcgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyBtb3ZlIHRoZSBvbGQgc2xvdCBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkUGFyZW50Vk5vZGUuJGVsbSQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxtO1xufTtcbmNvbnN0IHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24gPSAocGFyZW50RWxtLCByZWN1cnNpdmUpID0+IHtcbiAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgIGNvbnN0IG9sZFNsb3RDaGlsZE5vZGVzID0gcGFyZW50RWxtLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgaSA9IG9sZFNsb3RDaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IG9sZFNsb3RDaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLWhuJ10gIT09IGhvc3RUYWdOYW1lICYmIGNoaWxkTm9kZVsncy1vbCddKSB7XG4gICAgICAgICAgICAvLyAvLyB0aGlzIGNoaWxkIG5vZGUgaW4gdGhlIG9sZCBlbGVtZW50IGlzIGZyb20gYW5vdGhlciBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIC8vIHJlbW92ZSB0aGlzIG5vZGUgZnJvbSB0aGUgb2xkIHNsb3QncyBwYXJlbnRcbiAgICAgICAgICAgIC8vIGNoaWxkTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIGFuZCByZWxvY2F0ZSBpdCBiYWNrIHRvIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgIHBhcmVudFJlZmVyZW5jZU5vZGUoY2hpbGROb2RlKS5pbnNlcnRCZWZvcmUoY2hpbGROb2RlLCByZWZlcmVuY2VOb2RlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvbGQgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudCBlbnRpcmVseVxuICAgICAgICAgICAgLy8gbGF0ZXIgb24gdGhlIHBhdGNoIGZ1bmN0aW9uIHdpbGwga25vdyB3aGF0IHRvIGRvXG4gICAgICAgICAgICAvLyBhbmQgbW92ZSB0aGlzIHRvIHRoZSBjb3JyZWN0IHNwb3QgaW4gbmVlZCBiZVxuICAgICAgICAgICAgY2hpbGROb2RlWydzLW9sJ10ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjaGlsZE5vZGVbJ3Mtb2wnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdXJzaXZlKSB7XG4gICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGNoaWxkTm9kZSwgcmVjdXJzaXZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLztcbn07XG5jb25zdCBhZGRWbm9kZXMgPSAocGFyZW50RWxtLCBiZWZvcmUsIHBhcmVudFZOb2RlLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyRWxtID0gKCggcGFyZW50RWxtWydzLWNyJ10gJiYgcGFyZW50RWxtWydzLWNyJ10ucGFyZW50Tm9kZSkgfHwgcGFyZW50RWxtKTtcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGlmICggY29udGFpbmVyRWxtLnNoYWRvd1Jvb3QgJiYgY29udGFpbmVyRWxtLnRhZ05hbWUgPT09IGhvc3RUYWdOYW1lKSB7XG4gICAgICAgIGNvbnRhaW5lckVsbSA9IGNvbnRhaW5lckVsbS5zaGFkb3dSb290O1xuICAgIH1cbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICAgIGlmICh2bm9kZXNbc3RhcnRJZHhdKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0obnVsbCwgcGFyZW50Vk5vZGUsIHN0YXJ0SWR4LCBwYXJlbnRFbG0pO1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIHZub2Rlc1tzdGFydElkeF0uJGVsbSQgPSBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyRWxtLmluc2VydEJlZm9yZShjaGlsZE5vZGUsICByZWZlcmVuY2VOb2RlKGJlZm9yZSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCByZW1vdmVWbm9kZXMgPSAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCB2bm9kZSwgZWxtKSA9PiB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBpZiAodm5vZGUgPSB2bm9kZXNbc3RhcnRJZHhdKSB7XG4gICAgICAgICAgICBlbG0gPSB2bm9kZS4kZWxtJDtcbiAgICAgICAgICAgIGNhbGxOb2RlUmVmcyh2bm9kZSk7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgcmVtb3ZpbmcgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gc28gaXQncyBwb3NzaWJsZSB3ZSBuZWVkIHRvIHNob3cgc2xvdCBmYWxsYmFjayBjb250ZW50IG5vd1xuICAgICAgICAgICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGVsbVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudFxuICAgICAgICAgICAgICAgICAgICBlbG1bJ3Mtb2wnXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBjaGlsZCBub2RlcyBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0J3MgYmVpbmcgcmVtb3ZlZCBhcmUgc2xvdCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGVsbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB2bm9kZSdzIGVsZW1lbnQgZnJvbSB0aGUgZG9tXG4gICAgICAgICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgdXBkYXRlQ2hpbGRyZW4gPSAocGFyZW50RWxtLCBvbGRDaCwgbmV3Vk5vZGUsIG5ld0NoKSA9PiB7XG4gICAgbGV0IG9sZFN0YXJ0SWR4ID0gMDtcbiAgICBsZXQgbmV3U3RhcnRJZHggPSAwO1xuICAgIGxldCBpZHhJbk9sZCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICAgIGxldCBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgbGV0IG9sZEVuZFZub2RlID0gb2xkQ2hbb2xkRW5kSWR4XTtcbiAgICBsZXQgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgICBsZXQgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgIGxldCBuZXdFbmRWbm9kZSA9IG5ld0NoW25ld0VuZElkeF07XG4gICAgbGV0IG5vZGU7XG4gICAgbGV0IGVsbVRvTW92ZTtcbiAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICBpZiAob2xkU3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBWbm9kZSBtaWdodCBoYXZlIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9sZEVuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1N0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIFZub2RlIG1vdmVkIHJpZ2h0XG4gICAgICAgICAgICBpZiAoIChvbGRTdGFydFZub2RlLiR0YWckID09PSAnc2xvdCcgfHwgbmV3RW5kVm5vZGUuJHRhZyQgPT09ICdzbG90JykpIHtcbiAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKG9sZFN0YXJ0Vm5vZGUuJGVsbSQucGFyZW50Tm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLCBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIFZub2RlIG1vdmVkIGxlZnRcbiAgICAgICAgICAgIGlmICggKG9sZFN0YXJ0Vm5vZGUuJHRhZyQgPT09ICdzbG90JyB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKSkge1xuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkRW5kVm5vZGUuJGVsbSQucGFyZW50Tm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpO1xuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRFbmRWbm9kZS4kZWxtJCwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZUtleVRvT2xkSWR4XG4gICAgICAgICAgICBpZHhJbk9sZCA9IC0xO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IG9sZFN0YXJ0SWR4OyBpIDw9IG9sZEVuZElkeDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRDaFtpXSAmJiBvbGRDaFtpXS4ka2V5JCAhPT0gbnVsbCAmJiBvbGRDaFtpXS4ka2V5JCA9PT0gbmV3U3RhcnRWbm9kZS4ka2V5JCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4SW5PbGQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIGlkeEluT2xkID49IDApIHtcbiAgICAgICAgICAgICAgICBlbG1Ub01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgICAgICAgICAgaWYgKGVsbVRvTW92ZS4kdGFnJCAhPT0gbmV3U3RhcnRWbm9kZS4kdGFnJCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUsIGlkeEluT2xkLCBwYXJlbnRFbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2goZWxtVG9Nb3ZlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZWxtVG9Nb3ZlLiRlbG0kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBuZXcgZWxlbWVudFxuICAgICAgICAgICAgICAgIG5vZGUgPSBjcmVhdGVFbG0ob2xkQ2ggJiYgb2xkQ2hbbmV3U3RhcnRJZHhdLCBuZXdWTm9kZSwgbmV3U3RhcnRJZHgsIHBhcmVudEVsbSk7XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFJlZmVyZW5jZU5vZGUob2xkU3RhcnRWbm9kZS4kZWxtJCkuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZmVyZW5jZU5vZGUob2xkU3RhcnRWbm9kZS4kZWxtJCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgKG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uJGVsbSQpLCBuZXdWTm9kZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgpO1xuICAgIH1cbiAgICBlbHNlIGlmICggbmV3U3RhcnRJZHggPiBuZXdFbmRJZHgpIHtcbiAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICB9XG59O1xuY29uc3QgaXNTYW1lVm5vZGUgPSAodm5vZGUxLCB2bm9kZTIpID0+IHtcbiAgICAvLyBjb21wYXJlIGlmIHR3byB2bm9kZSB0byBzZWUgaWYgdGhleSdyZSBcInRlY2huaWNhbGx5XCIgdGhlIHNhbWVcbiAgICAvLyBuZWVkIHRvIGhhdmUgdGhlIHNhbWUgZWxlbWVudCB0YWcsIGFuZCBzYW1lIGtleSB0byBiZSB0aGUgc2FtZVxuICAgIGlmICh2bm9kZTEuJHRhZyQgPT09IHZub2RlMi4kdGFnJCkge1xuICAgICAgICBpZiAoIHZub2RlMS4kdGFnJCA9PT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdm5vZGUxLiRuYW1lJCA9PT0gdm5vZGUyLiRuYW1lJDtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdm5vZGUxLiRrZXkkID09PSB2bm9kZTIuJGtleSQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCByZWZlcmVuY2VOb2RlID0gKG5vZGUpID0+IHtcbiAgICAvLyB0aGlzIG5vZGUgd2FzIHJlbG9jYXRlZCB0byBhIG5ldyBsb2NhdGlvbiBpbiB0aGUgZG9tXG4gICAgLy8gYmVjYXVzZSBvZiBzb21lIG90aGVyIGNvbXBvbmVudCdzIHNsb3RcbiAgICAvLyBidXQgd2Ugc3RpbGwgaGF2ZSBhbiBodG1sIGNvbW1lbnQgaW4gcGxhY2Ugb2Ygd2hlcmVcbiAgICAvLyBpdCdzIG9yaWdpbmFsIGxvY2F0aW9uIHdhcyBhY2NvcmRpbmcgdG8gaXQncyBvcmlnaW5hbCB2ZG9tXG4gICAgcmV0dXJuIChub2RlICYmIG5vZGVbJ3Mtb2wnXSkgfHwgbm9kZTtcbn07XG5jb25zdCBwYXJlbnRSZWZlcmVuY2VOb2RlID0gKG5vZGUpID0+IChub2RlWydzLW9sJ10gPyBub2RlWydzLW9sJ10gOiBub2RlKS5wYXJlbnROb2RlO1xuY29uc3QgcGF0Y2ggPSAob2xkVk5vZGUsIG5ld1ZOb2RlKSA9PiB7XG4gICAgY29uc3QgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJDtcbiAgICBjb25zdCBvbGRDaGlsZHJlbiA9IG9sZFZOb2RlLiRjaGlsZHJlbiQ7XG4gICAgY29uc3QgbmV3Q2hpbGRyZW4gPSBuZXdWTm9kZS4kY2hpbGRyZW4kO1xuICAgIGxldCBkZWZhdWx0SG9sZGVyO1xuICAgIHtcbiAgICAgICAgLy8gdGVzdCBpZiB3ZSdyZSByZW5kZXJpbmcgYW4gc3ZnIGVsZW1lbnQsIG9yIHN0aWxsIHJlbmRlcmluZyBub2RlcyBpbnNpZGUgb2Ygb25lXG4gICAgICAgIC8vIG9ubHkgYWRkIHRoaXMgdG8gdGhlIHdoZW4gdGhlIGNvbXBpbGVyIHNlZXMgd2UncmUgdXNpbmcgYW4gc3ZnIHNvbWV3aGVyZVxuICAgICAgICBpc1N2Z01vZGUgPSBlbG0gJiYgZWxtLnBhcmVudE5vZGUgJiZcbiAgICAgICAgICAgIGVsbS5vd25lclNWR0VsZW1lbnQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgaXNTdmdNb2RlID0gbmV3Vk5vZGUuJHRhZyQgPT09ICdzdmcnID8gdHJ1ZSA6IChuZXdWTm9kZS4kdGFnJCA9PT0gJ2ZvcmVpZ25PYmplY3QnID8gZmFsc2UgOiBpc1N2Z01vZGUpO1xuICAgIH1cbiAgICBpZiAoIG5ld1ZOb2RlLiR0ZXh0JCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBlbGVtZW50IG5vZGVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCBuZXdWTm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCByZW5kZXIgb2YgYW4gZWxlbWVudCBPUiBpdCdzIGFuIHVwZGF0ZVxuICAgICAgICAgICAgICAgIC8vIEFORCB3ZSBhbHJlYWR5IGtub3cgaXQncyBwb3NzaWJsZSBpdCBjb3VsZCBoYXZlIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHVwZGF0ZXMgdGhlIGVsZW1lbnQncyBjc3MgY2xhc3NlcywgYXR0cnMsIHByb3BzLCBsaXN0ZW5lcnMsIGV0Yy5cbiAgICAgICAgICAgICAgICB1cGRhdGVFbGVtZW50KG9sZFZOb2RlLCBuZXdWTm9kZSwgaXNTdmdNb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIG9sZENoaWxkcmVuICE9PSBudWxsICYmIG5ld0NoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBsb29rcyBsaWtlIHRoZXJlJ3MgY2hpbGQgdm5vZGVzIGZvciBib3RoIHRoZSBvbGQgYW5kIG5ldyB2bm9kZXNcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2hpbGRyZW4sIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIG9sZCBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgbmV3IGNoaWxkIHZub2RlcyB0byBhZGRcbiAgICAgICAgICAgIGlmICggb2xkVk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2bm9kZSB3YXMgdGV4dCwgc28gYmUgc3VyZSB0byBjbGVhciBpdCBvdXRcbiAgICAgICAgICAgICAgICBlbG0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbmV3IHZub2RlIGNoaWxkcmVuXG4gICAgICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBuZXdWTm9kZSwgbmV3Q2hpbGRyZW4sIDAsIG5ld0NoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBvbGRDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm8gbmV3IGNoaWxkIHZub2RlcywgYnV0IHRoZXJlIGFyZSBvbGQgY2hpbGQgdm5vZGVzIHRvIHJlbW92ZVxuICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoaWxkcmVuLCAwLCBvbGRDaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICggKGRlZmF1bHRIb2xkZXIgPSBlbG1bJ3MtY3InXSkpIHtcbiAgICAgICAgLy8gdGhpcyBlbGVtZW50IGhhcyBzbG90dGVkIGNvbnRlbnRcbiAgICAgICAgZGVmYXVsdEhvbGRlci5wYXJlbnROb2RlLnRleHRDb250ZW50ID0gbmV3Vk5vZGUuJHRleHQkO1xuICAgIH1cbiAgICBlbHNlIGlmICggb2xkVk5vZGUuJHRleHQkICE9PSBuZXdWTm9kZS4kdGV4dCQpIHtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSB0ZXh0IG9ubHkgdm5vZGVcbiAgICAgICAgLy8gYW5kIGFsc28gb25seSBpZiB0aGUgdGV4dCBpcyBkaWZmZXJlbnQgdGhhbiBiZWZvcmVcbiAgICAgICAgZWxtLmRhdGEgPSBuZXdWTm9kZS4kdGV4dCQ7XG4gICAgfVxuICAgIGlmICggaXNTdmdNb2RlICYmIG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJykge1xuICAgICAgICBpc1N2Z01vZGUgPSBmYWxzZTtcbiAgICB9XG59O1xuY29uc3QgdXBkYXRlRmFsbGJhY2tTbG90VmlzaWJpbGl0eSA9IChlbG0pID0+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxuICAgIGxldCBjaGlsZE5vZGVzID0gZWxtLmNoaWxkTm9kZXM7XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBsZXQgaWxlbjtcbiAgICBsZXQgajtcbiAgICBsZXQgc2xvdE5hbWVBdHRyO1xuICAgIGxldCBub2RlVHlwZTtcbiAgICBmb3IgKGkgPSAwLCBpbGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBpbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBFbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZVsncy1zciddKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIHNsb3QgZmFsbGJhY2sgbm9kZVxuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgc2xvdCBuYW1lIGZvciB0aGlzIHNsb3QgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgICAgICAgICBzbG90TmFtZUF0dHIgPSBjaGlsZE5vZGVbJ3Mtc24nXTtcbiAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0IGFsd2F5cyBzaG93IGEgZmFsbGJhY2sgc2xvdCBub2RlXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBoaWRlIGl0IGlmIHRoZXJlIGFyZSBvdGhlciBzbG90cyBpbiB0aGUgbGlnaHQgZG9tXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpbGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal1bJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2libGluZyBub2RlIGlzIGZyb20gYSBkaWZmZXJlbnQgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVHlwZSA9IGNoaWxkTm9kZXNbal0ubm9kZVR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdE5hbWVBdHRyICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBuYW1lZCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8gJiYgc2xvdE5hbWVBdHRyID09PSBjaGlsZE5vZGVzW2pdLmdldEF0dHJpYnV0ZSgnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgZGVmYXVsdCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbnkgZWxlbWVudCBvciB0ZXh0IG5vZGUgKHdpdGggY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgaGlkZSB0aGUgZGVmYXVsdCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8gfHwgKG5vZGVUeXBlID09PSAzIC8qIFRleHROb2RlICovICYmIGNoaWxkTm9kZXNbal0udGV4dENvbnRlbnQudHJpbSgpICE9PSAnJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGtlZXAgZHJpbGxpbmcgZG93blxuICAgICAgICAgICAgdXBkYXRlRmFsbGJhY2tTbG90VmlzaWJpbGl0eShjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHJlbG9jYXRlTm9kZXMgPSBbXTtcbmNvbnN0IHJlbG9jYXRlU2xvdENvbnRlbnQgPSAoZWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBsZXQgY2hpbGROb2RlcyA9IGVsbS5jaGlsZE5vZGVzO1xuICAgIGxldCBpbGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcbiAgICBsZXQgbm9kZVR5cGUgPSAwO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgbGV0IG5vZGU7XG4gICAgbGV0IGhvc3RDb250ZW50Tm9kZXM7XG4gICAgbGV0IHNsb3ROYW1lQXR0cjtcbiAgICBmb3IgKGlsZW4gPSBjaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGlsZW47IGkrKykge1xuICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLXNyJ10gJiYgKG5vZGUgPSBjaGlsZE5vZGVbJ3MtY3InXSkpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGdvdCB0aGUgY29udGVudCByZWZlcmVuY2UgY29tbWVudCBub2RlXG4gICAgICAgICAgICAvLyB0aGVuIHdlIGdvdCBpdCdzIHBhcmVudCwgd2hpY2ggaXMgd2hlcmUgYWxsIHRoZSBob3N0IGNvbnRlbnQgaXMgaW4gbm93XG4gICAgICAgICAgICBob3N0Q29udGVudE5vZGVzID0gbm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBzbG90TmFtZUF0dHIgPSBjaGlsZE5vZGVbJ3Mtc24nXTtcbiAgICAgICAgICAgIGZvciAoaiA9IGhvc3RDb250ZW50Tm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBub2RlID0gaG9zdENvbnRlbnROb2Rlc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVbJ3MtY24nXSAmJiAhbm9kZVsncy1uciddICYmIG5vZGVbJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgZG8gc29tZSByZWxvY2F0aW5nIHRvIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgbmV2ZXIgcmVsb2NhdGUgYSBjb250ZW50IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgaXMgc3VwcG9zZSB0byBhbHdheXMgcmVwcmVzZW50IHRoZSBvcmlnaW5hbCBjb250ZW50IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIG5vZGVUeXBlID0gbm9kZS5ub2RlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgobm9kZVR5cGUgPT09IDMgLyogVGV4dE5vZGUgKi8gfHwgbm9kZVR5cGUgPT09IDggLyogQ29tbWVudE5vZGUgKi8pICYmIHNsb3ROYW1lQXR0ciA9PT0gJycpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAobm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8gJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSA9PT0gbnVsbCAmJiBzbG90TmFtZUF0dHIgPT09ICcnKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdzbG90JykgPT09IHNsb3ROYW1lQXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgd2UndmUgYWxyZWFkeSBkZWNpZGVkIHRvIHJlbG9jYXRlIHRoaXMgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWxvY2F0ZU5vZGVzLnNvbWUociA9PiByLiRub2RlVG9SZWxvY2F0ZSQgPT09IG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFkZSBzb21lIGNoYW5nZXMgdG8gc2xvdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQncyBtYWtlIHN1cmUgd2UgYWxzbyBkb3VibGUgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFja3MgYXJlIGNvcnJlY3RseSBoaWRkZW4gb3Igc2hvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9IHNsb3ROYW1lQXR0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gb3VyIGxpc3Qgb2Ygbm9kZXMgdG8gcmVsb2NhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xvdFJlZk5vZGUkOiBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRub2RlVG9SZWxvY2F0ZSQ6IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICByZWxvY2F0ZVNsb3RDb250ZW50KGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY2FsbE5vZGVSZWZzID0gKHZOb2RlKSA9PiB7XG4gICAge1xuICAgICAgICB2Tm9kZS4kYXR0cnMkICYmIHZOb2RlLiRhdHRycyQucmVmICYmIHZOb2RlLiRhdHRycyQucmVmKG51bGwpO1xuICAgICAgICB2Tm9kZS4kY2hpbGRyZW4kICYmIHZOb2RlLiRjaGlsZHJlbiQuZm9yRWFjaChjYWxsTm9kZVJlZnMpO1xuICAgIH1cbn07XG5jb25zdCByZW5kZXJWZG9tID0gKGhvc3RFbG0sIGhvc3RSZWYsIGNtcE1ldGEsIHJlbmRlckZuUmVzdWx0cykgPT4ge1xuICAgIGhvc3RUYWdOYW1lID0gaG9zdEVsbS50YWdOYW1lO1xuICAgIGNvbnN0IG9sZFZOb2RlID0gaG9zdFJlZi4kdm5vZGUkIHx8IG5ld1ZOb2RlKG51bGwsIG51bGwpO1xuICAgIGNvbnN0IHJvb3RWbm9kZSA9IGlzSG9zdChyZW5kZXJGblJlc3VsdHMpXG4gICAgICAgID8gcmVuZGVyRm5SZXN1bHRzXG4gICAgICAgIDogaChudWxsLCBudWxsLCByZW5kZXJGblJlc3VsdHMpO1xuICAgIGlmICggY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkKSB7XG4gICAgICAgIHJvb3RWbm9kZS4kYXR0cnMkID0gcm9vdFZub2RlLiRhdHRycyQgfHwge307XG4gICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JC5mb3JFYWNoKChbcHJvcE5hbWUsIGF0dHJpYnV0ZV0pID0+IHJvb3RWbm9kZS4kYXR0cnMkW2F0dHJpYnV0ZV0gPSBob3N0RWxtW3Byb3BOYW1lXSk7XG4gICAgfVxuICAgIHJvb3RWbm9kZS4kdGFnJCA9IG51bGw7XG4gICAgcm9vdFZub2RlLiRmbGFncyQgfD0gNCAvKiBpc0hvc3QgKi87XG4gICAgaG9zdFJlZi4kdm5vZGUkID0gcm9vdFZub2RlO1xuICAgIHJvb3RWbm9kZS4kZWxtJCA9IG9sZFZOb2RlLiRlbG0kID0gKCBob3N0RWxtLnNoYWRvd1Jvb3QgfHwgaG9zdEVsbSApO1xuICAgIHtcbiAgICAgICAgc2NvcGVJZCA9IGhvc3RFbG1bJ3Mtc2MnXTtcbiAgICB9XG4gICAge1xuICAgICAgICBjb250ZW50UmVmID0gaG9zdEVsbVsncy1jciddO1xuICAgICAgICB1c2VOYXRpdmVTaGFkb3dEb20gPSBzdXBwb3J0c1NoYWRvd0RvbSAmJiAoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSAhPT0gMDtcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0XG4gICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHN5bmNocm9ub3VzIHBhdGNoXG4gICAgcGF0Y2gob2xkVk5vZGUsIHJvb3RWbm9kZSk7XG4gICAge1xuICAgICAgICBpZiAoY2hlY2tTbG90UmVsb2NhdGUpIHtcbiAgICAgICAgICAgIHJlbG9jYXRlU2xvdENvbnRlbnQocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVsb2NhdGVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbG9jYXRlTm9kZSA9IHJlbG9jYXRlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFyZWxvY2F0ZU5vZGUuJG5vZGVUb1JlbG9jYXRlJFsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBhIHJlZmVyZW5jZSBub2RlIG1hcmtpbmcgdGhpcyBub2RlJ3Mgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGlzIG5vZGUgZm9yIGxhdGVyIGxvb2t1cHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlID0gIGRvYy5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZVsncy1uciddID0gcmVsb2NhdGVOb2RlLiRub2RlVG9SZWxvY2F0ZSQ7XG4gICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZS4kbm9kZVRvUmVsb2NhdGUkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKChyZWxvY2F0ZU5vZGUuJG5vZGVUb1JlbG9jYXRlJFsncy1vbCddID0gb3JnTG9jYXRpb25Ob2RlKSwgcmVsb2NhdGVOb2RlLiRub2RlVG9SZWxvY2F0ZSQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHdoaWxlIHdlJ3JlIG1vdmluZyBub2RlcyBhcm91bmQgZXhpc3Rpbmcgbm9kZXMsIHRlbXBvcmFyaWx5IGRpc2FibGVcbiAgICAgICAgICAgIC8vIHRoZSBkaXNjb25uZWN0Q2FsbGJhY2sgZnJvbSB3b3JraW5nXG4gICAgICAgICAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWxvY2F0ZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVsb2NhdGVOb2RlID0gcmVsb2NhdGVOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0IHdlJ3JlIGp1c3QgZ29pbmcgdG8gaW5zZXJ0IGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNsb3QgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlUmVmID0gcmVsb2NhdGVOb2RlLiRzbG90UmVmTm9kZSQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZSA9IHJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGxldCBvcmdMb2NhdGlvbk5vZGUgPSByZWxvY2F0ZU5vZGUuJG5vZGVUb1JlbG9jYXRlJFsncy1vbCddO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvcmdMb2NhdGlvbk5vZGUgPSBvcmdMb2NhdGlvbk5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWZOb2RlID0gb3JnTG9jYXRpb25Ob2RlWydzLW5yJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWZOb2RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZOb2RlWydzLXNuJ10gPT09IHJlbG9jYXRlTm9kZS4kbm9kZVRvUmVsb2NhdGUkWydzLXNuJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGVSZWYgPT09IHJlZk5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTm9kZSA9IHJlZk5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZk5vZGUgfHwgIXJlZk5vZGVbJ3MtbnInXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWZOb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoIWluc2VydEJlZm9yZU5vZGUgJiYgcGFyZW50Tm9kZVJlZiAhPT0gcmVsb2NhdGVOb2RlLiRub2RlVG9SZWxvY2F0ZSQucGFyZW50Tm9kZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJlbG9jYXRlTm9kZS4kbm9kZVRvUmVsb2NhdGUkLm5leHRTaWJsaW5nICE9PSBpbnNlcnRCZWZvcmVOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSd2ZSBjaGVja2VkIHRoYXQgaXQncyB3b3J0aCB3aGlsZSB0byByZWxvY2F0ZVxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGF0IHRoZSBub2RlIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhcyBhIGRpZmZlcmVudCBuZXh0IHNpYmxpbmcgb3IgcGFyZW50IHJlbG9jYXRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsb2NhdGVOb2RlLiRub2RlVG9SZWxvY2F0ZSQgIT09IGluc2VydEJlZm9yZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpdCBiYWNrIHRvIHRoZSBkb20gYnV0IGluIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZVJlZi5pbnNlcnRCZWZvcmUocmVsb2NhdGVOb2RlLiRub2RlVG9SZWxvY2F0ZSQsIGluc2VydEJlZm9yZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZG9uZSBtb3Zpbmcgbm9kZXMgYXJvdW5kXG4gICAgICAgICAgICAvLyBhbGxvdyB0aGUgZGlzY29ubmVjdCBjYWxsYmFjayB0byB3b3JrIGFnYWluXG4gICAgICAgICAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICB1cGRhdGVGYWxsYmFja1Nsb3RWaXNpYmlsaXR5KHJvb3RWbm9kZS4kZWxtJCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0XG4gICAgICAgIHJlbG9jYXRlTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG59O1xuY29uc3QgYXR0YWNoVG9BbmNlc3RvciA9IChob3N0UmVmLCBhbmNlc3RvckNvbXBvbmVudCkgPT4ge1xuICAgIGlmICggYW5jZXN0b3JDb21wb25lbnQgJiYgIWhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQpIHtcbiAgICAgICAgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddLnB1c2gobmV3IFByb21pc2UociA9PiBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gcikpO1xuICAgIH1cbn07XG5jb25zdCBzY2hlZHVsZVVwZGF0ZSA9IChlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICB9XG4gICAgaWYgKCBob3N0UmVmLiRmbGFncyQgJiA0IC8qIGlzV2FpdGluZ0ZvckNoaWxkcmVuICovKSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA1MTIgLyogbmVlZHNSZXJlbmRlciAqLztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbmNlc3RvckNvbXBvbmVudCA9IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JDtcbiAgICBjb25zdCBpbnN0YW5jZSA9ICBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDtcbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB1cGRhdGVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCk7XG4gICAgY29uc3QgcmMgPSBlbG1bJ3MtcmMnXTtcbiAgICBhdHRhY2hUb0FuY2VzdG9yKGhvc3RSZWYsIGFuY2VzdG9yQ29tcG9uZW50KTtcbiAgICBsZXQgcHJvbWlzZTtcbiAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjU2IC8qIGlzTGlzdGVuUmVhZHkgKi87XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCkge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQuZm9yRWFjaCgoW21ldGhvZE5hbWUsIGV2ZW50XSkgPT4gc2FmZUNhbGwoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50V2lsbExvYWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB7XG4gICAgICAgIHByb21pc2UgPSB0aGVuKHByb21pc2UsICgpID0+IHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50V2lsbFJlbmRlcicpKTtcbiAgICB9XG4gICAgaWYgKCByYykge1xuICAgICAgICAvLyBvaywgc28gdHVybnMgb3V0IHRoZXJlIGFyZSBzb21lIGNoaWxkIGhvc3QgZWxlbWVudHNcbiAgICAgICAgLy8gd2FpdGluZyBvbiB0aGlzIHBhcmVudCBlbGVtZW50IHRvIGxvYWRcbiAgICAgICAgLy8gbGV0J3MgZmlyZSBvZmYgYWxsIHVwZGF0ZSBjYWxsYmFja3Mgd2FpdGluZ1xuICAgICAgICByYy5mb3JFYWNoKGNiID0+IGNiKCkpO1xuICAgICAgICBlbG1bJ3MtcmMnXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gdGhlcmUgaXMgbm8gYW5jZXN0b3JjIG9tcG9uZW50IG9yIHRoZSBhbmNlc3RvciBjb21wb25lbnRcbiAgICAvLyBoYXMgYWxyZWFkeSBmaXJlZCBvZmYgaXRzIGxpZmVjeWNsZSB1cGRhdGUgdGhlblxuICAgIC8vIGZpcmUgb2ZmIHRoZSBpbml0aWFsIHVwZGF0ZVxuICAgIHJldHVybiB0aGVuKHByb21pc2UsICAoKSA9PiB3cml0ZVRhc2sodXBkYXRlKVxuICAgICAgICApO1xufTtcbmNvbnN0IHVwZGF0ZUNvbXBvbmVudCA9IChlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgLy8gdXBkYXRlQ29tcG9uZW50XG4gICAgaWYgKCBpc0luaXRpYWxMb2FkKSB7XG4gICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgYXR0YWNoU3R5bGVzKGVsbSwgY21wTWV0YSwgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgICB9XG4gICAge1xuICAgICAgICB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGxvb2tzIGxpa2Ugd2UndmUgZ290IGNoaWxkIG5vZGVzIHRvIHJlbmRlciBpbnRvIHRoaXMgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gb3Igd2UgbmVlZCB0byB1cGRhdGUgdGhlIGNzcyBjbGFzcy9hdHRycyBvbiB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgICAgICAgICAgIHJlbmRlclZkb20oZWxtLCBob3N0UmVmLCBjbXBNZXRhLCAgKGluc3RhbmNlLnJlbmRlciAmJiBpbnN0YW5jZS5yZW5kZXIoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCBwbHQuJGNzc1NoaW0kKSB7XG4gICAgICAgIHBsdC4kY3NzU2hpbSQudXBkYXRlSG9zdChlbG0pO1xuICAgIH1cbiAgICB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gICAgfVxuICAgIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDIgLyogaGFzUmVuZGVyZWQgKi87XG4gICAgfVxuICAgIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Qcm9taXNlcyA9IGVsbVsncy1wJ107XG4gICAgICAgIGNvbnN0IHBvc3RVcGRhdGUgPSAoKSA9PiBwb3N0VXBkYXRlQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICAgIGlmIChjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcG9zdFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY2hpbGRyZW5Qcm9taXNlcykudGhlbihwb3N0VXBkYXRlKTtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA0IC8qIGlzV2FpdGluZ0ZvckNoaWxkcmVuICovO1xuICAgICAgICAgICAgY2hpbGRyZW5Qcm9taXNlcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHBvc3RVcGRhdGVDb21wb25lbnQgPSAoZWxtLCBob3N0UmVmLCBjbXBNZXRhKSA9PiB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSAgaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA7XG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgNjQgLyogaGFzTG9hZGVkQ29tcG9uZW50ICovKSkge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gNjQgLyogaGFzTG9hZGVkQ29tcG9uZW50ICovO1xuICAgICAgICB7XG4gICAgICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGNzcyBjbGFzcyB0aGF0IHRoaXMgZWxlbWVudCBoYXMgb2ZmaWNpYWxseSBoeWRyYXRlZFxuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoSFlEUkFURURfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkTG9hZCcpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJChlbG0pO1xuICAgICAgICAgICAgaWYgKCFhbmNlc3RvckNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGFwcERpZExvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gd2UndmUgYWxyZWFkeSBsb2FkZWQgdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIGZpcmUgb2ZmIHRoZSB1c2VyJ3MgY29tcG9uZW50RGlkVXBkYXRlIG1ldGhvZCAoaWYgb25lIHdhcyBwcm92aWRlZClcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSBydW5zIEFGVEVSIHJlbmRlcigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICAgICAgLy8gYW5kIGFsbCBjaGlsZCBjb21wb25lbnRzIGhhdmUgZmluaXNoZWQgdXBkYXRpbmdcbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAge1xuICAgICAgICBob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQoZWxtKTtcbiAgICB9XG4gICAgLy8gbG9hZCBldmVudHMgZmlyZSBmcm9tIGJvdHRvbSB0byB0b3BcbiAgICAvLyB0aGUgZGVlcGVzdCBlbGVtZW50cyBsb2FkIGZpcnN0IHRoZW4gYnViYmxlcyB1cFxuICAgIHtcbiAgICAgICAgaWYgKGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQoKTtcbiAgICAgICAgICAgIGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDUxMiAvKiBuZWVkc1JlcmVuZGVyICovKSB7XG4gICAgICAgICAgICBuZXh0VGljaygoKSA9PiBzY2hlZHVsZVVwZGF0ZShlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4oNCAvKiBpc1dhaXRpbmdGb3JDaGlsZHJlbiAqLyB8IDUxMiAvKiBuZWVkc1JlcmVuZGVyICovKTtcbiAgICB9XG4gICAgLy8gKCDigKJf4oCiKVxuICAgIC8vICgg4oCiX+KAoik+4oyQ4pagLeKWoFxuICAgIC8vICjijJDilqBf4pagKVxufTtcbmNvbnN0IGZvcmNlVXBkYXRlID0gKGVsbSwgY21wTWV0YSkgPT4ge1xuICAgIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAgICAgaWYgKChob3N0UmVmLiRmbGFncyQgJiAoMiAvKiBoYXNSZW5kZXJlZCAqLyB8IDE2IC8qIGlzUXVldWVkRm9yVXBkYXRlICovKSkgPT09IDIgLyogaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGFwcERpZExvYWQgPSAoKSA9PiB7XG4gICAgLy8gb24gYXBwbG9hZFxuICAgIC8vIHdlIGhhdmUgZmluaXNoIHRoZSBmaXJzdCBiaWcgaW5pdGlhbCByZW5kZXJcbiAgICB7XG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChIWURSQVRFRF9DTEFTUyk7XG4gICAgfVxuICAgIHtcbiAgICAgICAgcGx0LiRmbGFncyQgfD0gMiAvKiBhcHBMb2FkZWQgKi87XG4gICAgfVxufTtcbmNvbnN0IHNhZmVDYWxsID0gKGluc3RhbmNlLCBtZXRob2QsIGFyZykgPT4ge1xuICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVttZXRob2RdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbbWV0aG9kXShhcmcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCB0aGVuID0gKHByb21pc2UsIHRoZW5GbikgPT4ge1xuICAgIHJldHVybiBwcm9taXNlICYmIHByb21pc2UudGhlbiA/IHByb21pc2UudGhlbih0aGVuRm4pIDogdGhlbkZuKCk7XG59O1xuY29uc3QgZ2V0VmFsdWUgPSAocmVmLCBwcm9wTmFtZSkgPT4gZ2V0SG9zdFJlZihyZWYpLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbmNvbnN0IHNldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUsIG5ld1ZhbCwgY21wTWV0YSkgPT4ge1xuICAgIC8vIGNoZWNrIG91ciBuZXcgcHJvcGVydHkgdmFsdWUgYWdhaW5zdCBvdXIgaW50ZXJuYWwgdmFsdWVcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGNvbnN0IGVsbSA9ICBob3N0UmVmLiRob3N0RWxlbWVudCQgO1xuICAgIGNvbnN0IG9sZFZhbCA9IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xuICAgIGNvbnN0IGZsYWdzID0gaG9zdFJlZi4kZmxhZ3MkO1xuICAgIGNvbnN0IGluc3RhbmNlID0gIGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgO1xuICAgIG5ld1ZhbCA9IHBhcnNlUHJvcGVydHlWYWx1ZShuZXdWYWwsIGNtcE1ldGEuJG1lbWJlcnMkW3Byb3BOYW1lXVswXSk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsICYmICggIShmbGFncyAmIDggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgfHwgb2xkVmFsID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIC8vIGdhZHpvb2tzISB0aGUgcHJvcGVydHkncyB2YWx1ZSBoYXMgY2hhbmdlZCEhXG4gICAgICAgIC8vIHNldCBvdXIgbmV3IHZhbHVlIVxuICAgICAgICBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KHByb3BOYW1lLCBuZXdWYWwpO1xuICAgICAgICBpZiAoIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gYXJyYXkgb2YgbWV0aG9kIG5hbWVzIG9mIHdhdGNoIGZ1bmN0aW9ucyB0byBjYWxsXG4gICAgICAgICAgICBpZiAoIGNtcE1ldGEuJHdhdGNoZXJzJCAmJiBmbGFncyAmIDEyOCAvKiBpc1dhdGNoUmVhZHkgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YXRjaE1ldGhvZHMgPSBjbXBNZXRhLiR3YXRjaGVycyRbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh3YXRjaE1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpbnN0YW5jZSBpcyB3YXRjaGluZyBmb3Igd2hlbiB0aGlzIHByb3BlcnR5IGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hNZXRob2RzLmZvckVhY2god2F0Y2hNZXRob2ROYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyZSBvZmYgZWFjaCBvZiB0aGUgd2F0Y2ggbWV0aG9kcyB0aGF0IGFyZSB3YXRjaGluZyB0aGlzIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Vbd2F0Y2hNZXRob2ROYW1lXShuZXdWYWwsIG9sZFZhbCwgcHJvcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggKGZsYWdzICYgKDIgLyogaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIGhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGlzIHZhbHVlIGFjdHVhbGx5IGNoYW5nZWQsIHNvIHdlJ3ZlIGdvdCB3b3JrIHRvIGRvIVxuICAgICAgICAgICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQsIG90aGVyd2lzZSBqdXN0IGNoaWxsIG91dFxuICAgICAgICAgICAgICAgIC8vIHF1ZXVlIHRoYXQgd2UgbmVlZCB0byBkbyBhbiB1cGRhdGUsIGJ1dCBkb24ndCB3b3JyeSBhYm91dCBxdWV1aW5nXG4gICAgICAgICAgICAgICAgLy8gdXAgbWlsbGlvbnMgY3V6IHRoaXMgZnVuY3Rpb24gZW5zdXJlcyBpdCBvbmx5IHJ1bnMgb25jZVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHByb3h5Q29tcG9uZW50ID0gKENzdHIsIGNtcE1ldGEsIGZsYWdzKSA9PiB7XG4gICAgaWYgKCBjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICBpZiAoIENzdHIud2F0Y2hlcnMpIHtcbiAgICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBiZXR0ZXIgdG8gaGF2ZSBhIGNvbnN0IHRoYW4gdHdvIE9iamVjdC5lbnRyaWVzKClcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IE9iamVjdC5lbnRyaWVzKGNtcE1ldGEuJG1lbWJlcnMkKTtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gQ3N0ci5wcm90b3R5cGU7XG4gICAgICAgIG1lbWJlcnMuZm9yRWFjaCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICBpZiAoICgobWVtYmVyRmxhZ3MgJiAzMSAvKiBQcm9wICovKSB8fFxuICAgICAgICAgICAgICAgICgoIGZsYWdzICYgMiAvKiBwcm94eVN0YXRlICovKSAmJlxuICAgICAgICAgICAgICAgICAgICAobWVtYmVyRmxhZ3MgJiAzMiAvKiBTdGF0ZSAqLykpKSkge1xuICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gcHJvcFxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIGdldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXQobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50LCBzZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICggKGZsYWdzICYgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykgJiYgKG1lbWJlckZsYWdzICYgNjQgLyogTWV0aG9kICovKSkge1xuICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gbWV0aG9kXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZi4kb25JbnN0YW5jZVByb21pc2UkLnRoZW4oKCkgPT4gcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCAoIGZsYWdzICYgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lVG9Qcm9wTmFtZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBhdHRyTmFtZVRvUHJvcE5hbWUuZ2V0KGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBuZXdWYWx1ZSA9PT0gbnVsbCAmJiB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgYXR0cmlidXRlcyB0byBvYnNlcnZlXG4gICAgICAgICAgICAvLyBhbmQgYWxzbyBjcmVhdGUgYSBtYXAgb2YgaHRtbCBhdHRyaWJ1dGUgbmFtZSB0byBqcyBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICAgICBDc3RyLm9ic2VydmVkQXR0cmlidXRlcyA9IG1lbWJlcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChbXywgbV0pID0+IG1bMF0gJiAxNSAvKiBIYXNBdHRyaWJ1dGUgKi8pIC8vIGZpbHRlciB0byBvbmx5IGtlZXAgcHJvcHMgdGhhdCBzaG91bGQgbWF0Y2ggYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIC5tYXAoKFtwcm9wTmFtZSwgbV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG1bMV0gfHwgcHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgYXR0ck5hbWVUb1Byb3BOYW1lLnNldChhdHRyTmFtZSwgcHJvcE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICggbVswXSAmIDUxMiAvKiBSZWZsZWN0QXR0ciAqLykge1xuICAgICAgICAgICAgICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQucHVzaChbcHJvcE5hbWUsIGF0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyTmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBDc3RyO1xufTtcbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKGVsbSwgaG9zdFJlZiwgbGlzdGVuZXJzKSA9PiB7XG4gICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgfHwgW107XG4gICAgY29uc3QgcmVtb3ZlRm5zID0gbGlzdGVuZXJzLm1hcCgoW2ZsYWdzLCBuYW1lLCBtZXRob2RdKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICggZ2V0SG9zdExpc3RlbmVyVGFyZ2V0KGVsbSwgZmxhZ3MpICk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBob3N0TGlzdGVuZXJQcm94eShob3N0UmVmLCBtZXRob2QpO1xuICAgICAgICBjb25zdCBvcHRzID0gaG9zdExpc3RlbmVyT3B0cyhmbGFncyk7XG4gICAgICAgIHBsdC5hZWwodGFyZ2V0LCBuYW1lLCBoYW5kbGVyLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHBsdC5yZWwodGFyZ2V0LCBuYW1lLCBoYW5kbGVyLCBvcHRzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gcmVtb3ZlRm5zLmZvckVhY2goZm4gPT4gZm4oKSk7XG59O1xuY29uc3QgaG9zdExpc3RlbmVyUHJveHkgPSAoaG9zdFJlZiwgbWV0aG9kTmFtZSkgPT4ge1xuICAgIHJldHVybiAoZXYpID0+IHtcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDI1NiAvKiBpc0xpc3RlblJlYWR5ICovKSB7XG4gICAgICAgICAgICAgICAgLy8gaW5zdGFuY2UgaXMgcmVhZHksIGxldCdzIGNhbGwgaXQncyBtZW1iZXIgbWV0aG9kIGZvciB0aGlzIGV2ZW50XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kbGF6eUluc3RhbmNlJFttZXRob2ROYW1lXShldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkLnB1c2goW21ldGhvZE5hbWUsIGV2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmNvbnN0IGdldEhvc3RMaXN0ZW5lclRhcmdldCA9IChlbG0sIGZsYWdzKSA9PiB7XG4gICAgaWYgKCBmbGFncyAmIDQgLyogVGFyZ2V0RG9jdW1lbnQgKi8pXG4gICAgICAgIHJldHVybiBkb2M7XG4gICAgaWYgKCBmbGFncyAmIDggLyogVGFyZ2V0V2luZG93ICovKVxuICAgICAgICByZXR1cm4gd2luO1xuICAgIGlmICggZmxhZ3MgJiAzMiAvKiBUYXJnZXRCb2R5ICovKVxuICAgICAgICByZXR1cm4gZG9jLmJvZHk7XG4gICAgaWYgKCBmbGFncyAmIDE2IC8qIFRhcmdldFBhcmVudCAqLylcbiAgICAgICAgcmV0dXJuIGVsbS5wYXJlbnRFbGVtZW50O1xuICAgIHJldHVybiBlbG07XG59O1xuY29uc3QgaG9zdExpc3RlbmVyT3B0cyA9IChmbGFncykgPT4gc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMgP1xuICAgIHtcbiAgICAgICAgJ3Bhc3NpdmUnOiAoZmxhZ3MgJiAxIC8qIFBhc3NpdmUgKi8pICE9PSAwLFxuICAgICAgICAnY2FwdHVyZSc6IChmbGFncyAmIDIgLyogQ2FwdHVyZSAqLykgIT09IDAsXG4gICAgfVxuICAgIDogKGZsYWdzICYgMiAvKiBDYXB0dXJlICovKSAhPT0gMDtcbmNvbnN0IGluaXRpYWxpemVDbGllbnRIeWRyYXRlID0gKGhvc3RFbG0sIHRhZ05hbWUsIGhvc3RJZCwgaG9zdFJlZikgPT4ge1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBob3N0RWxtLnNoYWRvd1Jvb3Q7XG4gICAgY29uc3QgY2hpbGRSZW5kZXJOb2RlcyA9IFtdO1xuICAgIGNvbnN0IHNsb3ROb2RlcyA9IFtdO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3ROb2RlcyA9ICggc2hhZG93Um9vdCA/IFtdIDogbnVsbCk7XG4gICAgY29uc3Qgdm5vZGUgPSBob3N0UmVmLiR2bm9kZSQgPSBuZXdWTm9kZSh0YWdOYW1lLCBudWxsKTtcbiAgICBpZiAoIXBsdC4kb3JnTG9jTm9kZXMkKSB7XG4gICAgICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUoZG9jLmJvZHksIHBsdC4kb3JnTG9jTm9kZXMkID0gbmV3IE1hcCgpKTtcbiAgICB9XG4gICAgaG9zdEVsbVtIWURSQVRFX0lEXSA9IGhvc3RJZDtcbiAgICBob3N0RWxtLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0lEKTtcbiAgICBjbGllbnRIeWRyYXRlKHZub2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgaG9zdEVsbSwgaG9zdElkKTtcbiAgICBjaGlsZFJlbmRlck5vZGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uSWQgPSBjLiRob3N0SWQkICsgJy4nICsgYy4kbm9kZUlkJDtcbiAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlID0gcGx0LiRvcmdMb2NOb2RlcyQuZ2V0KG9yZ0xvY2F0aW9uSWQpO1xuICAgICAgICBjb25zdCBub2RlID0gYy4kZWxtJDtcbiAgICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAmJiAob3JnTG9jYXRpb25Ob2RlWydzLXNkJ10gfHwgYy4kaG9zdElkJCA9PT0gJzAnKSkge1xuICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG9yZ0xvY2F0aW9uTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICBub2RlWydzLWhuJ10gPSB0YWdOYW1lO1xuICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGVbJ3Mtb2wnXSA9IG9yZ0xvY2F0aW9uTm9kZTtcbiAgICAgICAgICAgICAgICBub2RlWydzLW9sJ11bJ3MtbnInXSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGx0LiRvcmdMb2NOb2RlcyQuZGVsZXRlKG9yZ0xvY2F0aW9uSWQpO1xuICAgIH0pO1xuICAgIGlmICggc2hhZG93Um9vdCkge1xuICAgICAgICBzaGFkb3dSb290Tm9kZXMuZm9yRWFjaChzaGFkb3dSb290Tm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hhZG93Um9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKHNoYWRvd1Jvb3ROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGNsaWVudEh5ZHJhdGUgPSAocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLCBob3N0SWQpID0+IHtcbiAgICBsZXQgY2hpbGROb2RlVHlwZTtcbiAgICBsZXQgY2hpbGRJZFNwbHQ7XG4gICAgbGV0IGNoaWxkVk5vZGU7XG4gICAgbGV0IGk7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY2hpbGROb2RlVHlwZSA9IG5vZGUuZ2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQpO1xuICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSkge1xuICAgICAgICAgICAgLy8gZ290IHRoZSBub2RlIGRhdGEgZnJvbSB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gYCR7aG9zdElkfS4ke25vZGVJZH0uJHtkZXB0aH0uJHtpbmRleH1gXG4gICAgICAgICAgICBjaGlsZElkU3BsdCA9IGNoaWxkTm9kZVR5cGUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmIChjaGlsZElkU3BsdFswXSA9PT0gaG9zdElkIHx8IGNoaWxkSWRTcGx0WzBdID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFZOb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAgICAgICAgICAgICAkaG9zdElkJDogY2hpbGRJZFNwbHRbMF0sXG4gICAgICAgICAgICAgICAgICAgICRub2RlSWQkOiBjaGlsZElkU3BsdFsxXSxcbiAgICAgICAgICAgICAgICAgICAgJGRlcHRoJDogY2hpbGRJZFNwbHRbMl0sXG4gICAgICAgICAgICAgICAgICAgICRpbmRleCQ6IGNoaWxkSWRTcGx0WzNdLFxuICAgICAgICAgICAgICAgICAgICAkdGFnJDogbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICRlbG0kOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAkYXR0cnMkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAka2V5JDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJG5hbWUkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkdGV4dCQ6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgbmV3IGNoaWxkIHZub2RlXG4gICAgICAgICAgICAgICAgLy8gc28gZW5zdXJlIGl0cyBwYXJlbnQgdm5vZGUgaGFzIHRoZSB2Y2hpbGRyZW4gYXJyYXlcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhZGQgb3VyIGNoaWxkIHZub2RlIHRvIGEgc3BlY2lmaWMgaW5kZXggb2YgdGhlIHZub2RlJ3MgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbm93IHRoZSBuZXcgcGFyZW50IHZub2RlIGZvciBhbGwgdGhlIG5leHQgY2hpbGQgY2hlY2tzXG4gICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUgPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdE5vZGVzW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZWN1cnNpdmVseSBkcmlsbCBkb3duLCBlbmQgdG8gc3RhcnQgc28gd2UgY2FuIHJlbW92ZSBub2Rlc1xuICAgICAgICBmb3IgKGkgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLmNoaWxkTm9kZXNbaV0sIGhvc3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgLy8ga2VlcCBkcmlsbGluZyBkb3duIHRocm91Z2ggdGhlIHNoYWRvdyByb290IG5vZGVzXG4gICAgICAgICAgICBmb3IgKGkgPSBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1tpXSwgaG9zdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIENvbW1lbnROb2RlICovKSB7XG4gICAgICAgIC8vIGAke0NPTU1FTlRfVFlQRX0uJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fWBcbiAgICAgICAgY2hpbGRJZFNwbHQgPSBub2RlLm5vZGVWYWx1ZS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoY2hpbGRJZFNwbHRbMV0gPT09IGhvc3RJZCB8fCBjaGlsZElkU3BsdFsxXSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAvLyBjb21tZW50IG5vZGUgZm9yIGVpdGhlciB0aGUgaG9zdCBpZCBvciBhIDAgaG9zdCBpZFxuICAgICAgICAgICAgY2hpbGROb2RlVHlwZSA9IGNoaWxkSWRTcGx0WzBdO1xuICAgICAgICAgICAgY2hpbGRWTm9kZSA9IHtcbiAgICAgICAgICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAgICAgICAgICRob3N0SWQkOiBjaGlsZElkU3BsdFsxXSxcbiAgICAgICAgICAgICAgICAkbm9kZUlkJDogY2hpbGRJZFNwbHRbMl0sXG4gICAgICAgICAgICAgICAgJGRlcHRoJDogY2hpbGRJZFNwbHRbM10sXG4gICAgICAgICAgICAgICAgJGluZGV4JDogY2hpbGRJZFNwbHRbNF0sXG4gICAgICAgICAgICAgICAgJGVsbSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgJGF0dHJzJDogbnVsbCxcbiAgICAgICAgICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgICAgICAgICAgICAgICRrZXkkOiBudWxsLFxuICAgICAgICAgICAgICAgICRuYW1lJDogbnVsbCxcbiAgICAgICAgICAgICAgICAkdGFnJDogbnVsbCxcbiAgICAgICAgICAgICAgICAkdGV4dCQ6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSA9PT0gVEVYVF9OT0RFX0lEKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkVk5vZGUuJGVsbSQgJiYgY2hpbGRWTm9kZS4kZWxtJC5ub2RlVHlwZSA9PT0gMyAvKiBUZXh0Tm9kZSAqLykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiR0ZXh0JCA9IGNoaWxkVk5vZGUuJGVsbSQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB0ZXh0IGNvbW1lbnQgc2luY2UgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkVk5vZGUuJGhvc3RJZCQgPT09IGhvc3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tbWVudCBub2RlIGlzIHNwZWNpZmNhbGx5IGZvciB0aGlzIGhvc3QgaWRcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSA9PT0gU0xPVF9OT0RFX0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGAke1NMT1RfTk9ERV9JRH0uJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fS4ke3Nsb3ROYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJHRhZyQgPSAnc2xvdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZElkU3BsdFs1XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1zbiddID0gY2hpbGRWTm9kZS4kbmFtZSQgPSBjaGlsZElkU3BsdFs1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc3InXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICggc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBicm93c2VyIHN1cHBvcnQgc2hhZG93Um9vdCBhbmQgdGhpcyBpcyBhIHNoYWRvdyBkb20gY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYWN0dWFsIHNsb3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJCA9IGRvYy5jcmVhdGVFbGVtZW50KGNoaWxkVk5vZGUuJHRhZyQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVk5vZGUuJG5hbWUkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbG90IG5hbWUgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjaGlsZFZOb2RlLiRuYW1lJCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGhlIG5ldyBzbG90IGVsZW1lbnQgYmVmb3JlIHRoZSBzbG90IGNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGRWTm9kZS4kZWxtJCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHNsb3QgY29tbWVudCBzaW5jZSBpdCdzIG5vdCBuZWVkZWQgZm9yIHNoYWRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFZOb2RlLiRkZXB0aCQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROb2RlVHlwZSA9PT0gQ09OVEVOVF9SRUZfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYCR7Q09OVEVOVF9SRUZfSUR9LiR7aG9zdElkfWA7XG4gICAgICAgICAgICAgICAgICAgIGlmICggc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQgcmVmIGNvbW1lbnQgc2luY2UgaXQncyBub3QgbmVlZGVkIGZvciBzaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0RWxtWydzLWNyJ10gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1jbiddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnRWTm9kZSAmJiBwYXJlbnRWTm9kZS4kdGFnJCA9PT0gJ3N0eWxlJykge1xuICAgICAgICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG51bGwsIG5vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICB2bm9kZS4kZWxtJCA9IG5vZGU7XG4gICAgICAgIHZub2RlLiRpbmRleCQgPSAnMCc7XG4gICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbdm5vZGVdO1xuICAgIH1cbn07XG5jb25zdCBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlID0gKG5vZGUsIG9yZ0xvY05vZGVzKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZURvY3VtZW50SHlkcmF0ZShub2RlLmNoaWxkTm9kZXNbaV0sIG9yZ0xvY05vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzW2ldLCBvcmdMb2NOb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBDb21tZW50Tm9kZSAqLykge1xuICAgICAgICBjb25zdCBjaGlsZElkU3BsdCA9IG5vZGUubm9kZVZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICAgIGlmIChjaGlsZElkU3BsdFswXSA9PT0gT1JHX0xPQ0FUSU9OX0lEKSB7XG4gICAgICAgICAgICBvcmdMb2NOb2Rlcy5zZXQoY2hpbGRJZFNwbHRbMV0gKyAnLicgKyBjaGlsZElkU3BsdFsyXSwgbm9kZSk7XG4gICAgICAgICAgICBub2RlLm5vZGVWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgLy8gdXNlZnVsIHRvIGtub3cgaWYgdGhlIG9yaWdpbmFsIGxvY2F0aW9uIGlzXG4gICAgICAgICAgICAvLyB0aGUgcm9vdCBsaWdodC1kb20gb2YgYSBzaGFkb3cgZG9tIGNvbXBvbmVudFxuICAgICAgICAgICAgbm9kZVsncy1zZCddID0gKGNoaWxkSWRTcGx0WzNdID09PSAnJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgbW9kZVJlc29sdXRpb25DaGFpbiA9IFtdO1xuY29uc3QgY29tcHV0ZU1vZGUgPSAoZWxtKSA9PiBtb2RlUmVzb2x1dGlvbkNoYWluLm1hcChoID0+IGgoZWxtKSkuZmluZChtID0+ICEhbSk7XG4vLyBQdWJsaWNcbmNvbnN0IHNldE1vZGUgPSAoaGFuZGxlcikgPT4gbW9kZVJlc29sdXRpb25DaGFpbi5wdXNoKGhhbmRsZXIpO1xuY29uc3QgZ2V0TW9kZSA9IChyZWYpID0+IGdldEhvc3RSZWYocmVmKS4kbW9kZU5hbWUkO1xuY29uc3QgaW5pdGlhbGl6ZUNvbXBvbmVudCA9IGFzeW5jIChlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGhtclZlcnNpb25JZCwgQ3N0cikgPT4ge1xuICAgIC8vIGluaXRpYWxpemVDb21wb25lbnRcbiAgICBpZiAoIChob3N0UmVmLiRmbGFncyQgJiAzMiAvKiBoYXNJbml0aWFsaXplZENvbXBvbmVudCAqLykgPT09IDApIHtcbiAgICAgICAgLy8gd2UgaGF2ZW4ndCBpbml0aWFsaXplZCB0aGlzIGVsZW1lbnQgeWV0XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAzMiAvKiBoYXNJbml0aWFsaXplZENvbXBvbmVudCAqLztcbiAgICAgICAgaWYgKCBob3N0UmVmLiRtb2RlTmFtZSQgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZUNvbXBvbmVudFxuICAgICAgICAgICAgLy8gbG9va3MgbGlrZSBtb2RlIHdhc24ndCBzZXQgYXMgYSBwcm9wZXJ0eSBkaXJlY3RseSB5ZXRcbiAgICAgICAgICAgIC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlJ3MgYW4gYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBuZXh0IGNoZWNrIHRoZSBhcHAncyBnbG9iYWxcbiAgICAgICAgICAgIGhvc3RSZWYuJG1vZGVOYW1lJCA9IHR5cGVvZiBjbXBNZXRhLiRsYXp5QnVuZGxlSWRzJCAhPT0gJ3N0cmluZycgPyBjb21wdXRlTW9kZShlbG0pIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgLy8gbGF6eSBsb2FkZWQgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gcmVxdWVzdCB0aGUgY29tcG9uZW50J3MgaW1wbGVtZW50YXRpb24gdG8gYmVcbiAgICAgICAgICAgIC8vIHdpcmVkIHVwIHdpdGggdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgQ3N0ciA9IGxvYWRNb2R1bGUoY21wTWV0YSwgaG9zdFJlZik7XG4gICAgICAgICAgICBpZiAoQ3N0ci50aGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gQXdhaXQgY3JlYXRlcyBhIG1pY3JvLXRhc2sgYXZvaWQgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgICBDc3RyID0gYXdhaXQgQ3N0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggIUNzdHIuaXNQcm94aWVkKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UnZXZlIG5ldmVyIHByb3hpZWQgdGhpcyBDb25zdHJ1Y3RvciBiZWZvcmVcbiAgICAgICAgICAgICAgICAvLyBsZXQncyBhZGQgdGhlIGdldHRlcnMvc2V0dGVycyB0byBpdHMgcHJvdG90eXBlIGJlZm9yZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCB0aW1lIHdlIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3h5Q29tcG9uZW50KENzdHIsIGNtcE1ldGEsIDIgLyogcHJveHlTdGF0ZSAqLyk7XG4gICAgICAgICAgICAgICAgQ3N0ci5pc1Byb3hpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb2ssIHRpbWUgdG8gY29uc3RydWN0IHRoZSBpbnN0YW5jZVxuICAgICAgICAgICAgLy8gYnV0IGxldCdzIGtlZXAgdHJhY2sgb2Ygd2hlbiB3ZSBzdGFydCBhbmQgc3RvcFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGUgZ2V0dGVycy9zZXR0ZXJzIGRvbid0IGluY29ycmVjdGx5IHN0ZXAgb24gZGF0YVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgdGhlIGxhenktbG9hZGVkIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgaG9zdFJlZiBpcyB2ZXJ5IGltcG9ydGFudCBkdXJpbmdcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBpbiBvcmRlciB0byBkaXJlY3RseSB3aXJlIHRvZ2V0aGVyIHRoZVxuICAgICAgICAgICAgLy8gaG9zdCBlbGVtZW50IGFuZCB0aGUgbGF6eS1sb2FkZWQgaW5zdGFuY2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IENzdHIoaG9zdFJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTI4IC8qIGlzV2F0Y2hSZWFkeSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpcmVDb25uZWN0ZWRDYWxsYmFjayhob3N0UmVmLiRsYXp5SW5zdGFuY2UkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY29wZUlkID0gIGdldFNjb3BlSWQoY21wTWV0YS4kdGFnTmFtZSQsIGhvc3RSZWYuJG1vZGVOYW1lJCkgO1xuICAgICAgICBpZiAoICFzdHlsZXMuaGFzKHNjb3BlSWQpICYmIENzdHIuc3R5bGUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGhhcyBzdHlsZXMgYnV0IHdlIGhhdmVuJ3QgcmVnaXN0ZXJlZCB0aGVtIHlldFxuICAgICAgICAgICAgbGV0IHN0eWxlID0gQ3N0ci5zdHlsZTtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVbaG9zdFJlZi4kbW9kZU5hbWUkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggY21wTWV0YS4kZmxhZ3MkICYgOCAvKiBuZWVkc1NoYWRvd0RvbVNoaW0gKi8pIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGF3YWl0IGltcG9ydCgnLi9zaGFkb3ctY3NzLTQ4ODlhZTYyLTIzOTk2ZjNmLmpzJykudGhlbihtID0+IG0uc2NvcGVDc3Moc3R5bGUsIHNjb3BlSWQsIGZhbHNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWdpc3RlclN0eWxlKHNjb3BlSWQsIHN0eWxlLCAhIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3ZSd2ZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhIGxhenkgaW5zdGFuY2VcbiAgICBjb25zdCBhbmNlc3RvckNvbXBvbmVudCA9IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JDtcbiAgICBjb25zdCBzY2hlZHVsZSA9ICgpID0+IHNjaGVkdWxlVXBkYXRlKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgdHJ1ZSk7XG4gICAgaWYgKCBhbmNlc3RvckNvbXBvbmVudCAmJiBhbmNlc3RvckNvbXBvbmVudFsncy1yYyddKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIGludGlhbCBsb2FkIGFuZCB0aGlzIGNvbXBvbmVudCBpdCBoYXMgYW4gYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGJ1dCB0aGUgYW5jZXN0b3IgY29tcG9uZW50IGhhcyBOT1QgZmlyZWQgaXRzIHdpbGwgdXBkYXRlIGxpZmVjeWNsZSB5ZXRcbiAgICAgICAgLy8gc28gbGV0J3MganVzdCBjb29sIG91ciBqZXRzIGFuZCB3YWl0IGZvciB0aGUgYW5jZXN0b3IgdG8gY29udGludWUgZmlyc3RcbiAgICAgICAgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvZmYgd2hlbiB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGZpbmFsbHkgZ2V0cyBhcm91bmQgdG8gcmVuZGVyaW5nIGl0cyBsYXp5IHNlbGZcbiAgICAgICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10ucHVzaChzY2hlZHVsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzY2hlZHVsZSgpO1xuICAgIH1cbn07XG5jb25zdCBmaXJlQ29ubmVjdGVkQ2FsbGJhY2sgPSAoaW5zdGFuY2UpID0+IHtcbiAgICB7XG4gICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICB9XG59O1xuY29uc3QgY29ubmVjdGVkQ2FsbGJhY2sgPSAoZWxtLCBjbXBNZXRhKSA9PiB7XG4gICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgICAgIGlmICggY21wTWV0YS4kbGlzdGVuZXJzJCkge1xuICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSBvdXIgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHdlIGRvIHRoaXMgbm93IHNvIHRoYXQgd2UgY2FuIGxpc3RlbmluZyB0byBldmVudHMgdGhhdCBtYXlcbiAgICAgICAgICAgIC8vIGhhdmUgZmlyZWQgZXZlbiBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIHJlYWR5XG4gICAgICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQgPSBhZGRFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDEgLyogaGFzQ29ubmVjdGVkICovKSkge1xuICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGlzIGNvbXBvbmVudCBoYXMgY29ubmVjdGVkXG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMSAvKiBoYXNDb25uZWN0ZWQgKi87XG4gICAgICAgICAgICBsZXQgaG9zdElkO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhvc3RJZCA9IGVsbS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHN1cHBvcnRzU2hhZG93RG9tICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9ICBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSwgZWxtLmdldEF0dHJpYnV0ZSgncy1tb2RlJykpIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKHNjb3BlSWQgKyAnLWgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKHNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplQ2xpZW50SHlkcmF0ZShlbG0sIGNtcE1ldGEuJHRhZ05hbWUkLCBob3N0SWQsIGhvc3RSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggIWhvc3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIGluaXRVcGRhdGVcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc2xvdCBwb2x5ZmlsbCBpcyByZXF1aXJlZCB3ZSdsbCBuZWVkIHRvIHB1dCBzb21lIG5vZGVzXG4gICAgICAgICAgICAgICAgLy8gaW4gaGVyZSB0byBhY3QgYXMgb3JpZ2luYWwgY29udGVudCBhbmNob3JzIGFzIHdlIG1vdmUgbm9kZXMgYXJvdW5kXG4gICAgICAgICAgICAgICAgLy8gaG9zdCBlbGVtZW50IGhhcyBiZWVuIGNvbm5lY3RlZCB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoIGNtcE1ldGEuJGZsYWdzJCAmIDQgLyogaGFzU2xvdFJlbG9jYXRpb24gKi8pIHx8XG4gICAgICAgICAgICAgICAgICAgICggY21wTWV0YS4kZmxhZ3MkICYgOCAvKiBuZWVkc1NoYWRvd0RvbVNoaW0gKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRSZWZlcmVuY2UoZWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgYW5jZXN0b3IgY29tcG9uZW50IChpZiB0aGVyZSBpcyBvbmUpIGFuZCByZWdpc3RlclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGFzIG9uZSBvZiB0aGUgYWN0aXZlbHkgbG9hZGluZyBjaGlsZCBjb21wb25lbnRzIGZvciBpdHMgYW5jZXN0b3JcbiAgICAgICAgICAgICAgICBsZXQgYW5jZXN0b3JDb21wb25lbnQgPSBlbG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKChhbmNlc3RvckNvbXBvbmVudCA9IChhbmNlc3RvckNvbXBvbmVudC5wYXJlbnROb2RlIHx8IGFuY2VzdG9yQ29tcG9uZW50Lmhvc3QpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgYW5jZXN0b3JzIGxvb2tpbmcgZm9yIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wb25lbnQgdGhhdCBoYXNuJ3QgZmluaXNoZWQgaXRzIGxpZmVjeWNsZSB1cGRhdGUgeWV0XG4gICAgICAgICAgICAgICAgICAgIGlmICgoIGFuY2VzdG9yQ29tcG9uZW50Lm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovICYmIGFuY2VzdG9yQ29tcG9uZW50Lmhhc0F0dHJpYnV0ZSgncy1pZCcpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIHRoaXMgY29tcG9uZW50cyBmaXJzdCBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBjb21wb25lbnQncyBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgKGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCA9IGFuY2VzdG9yQ29tcG9uZW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExhenkgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9iZXN0LXByYWN0aWNlcyNsYXp5LXByb3BlcnRpZXNcbiAgICAgICAgICAgIGlmICggY21wTWV0YS4kbWVtYmVycyQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCkuZm9yRWFjaCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gJiYgZWxtLmhhc093blByb3BlcnR5KG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrLCB0YXNrUXVldWUsIGluaXRpYWxMb2FkXG4gICAgICAgICAgICAgICAgLy8gYW5ndWxhciBzZXRzIGF0dHJpYnV0ZSBBRlRFUiBjb25uZWN0Q2FsbGJhY2tcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODkwOVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE5OTQwXG4gICAgICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4gaW5pdGlhbGl6ZUNvbXBvbmVudChlbG0sIGhvc3RSZWYsIGNtcE1ldGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaXJlQ29ubmVjdGVkQ2FsbGJhY2soaG9zdFJlZi4kbGF6eUluc3RhbmNlJCk7XG4gICAgfVxufTtcbmNvbnN0IHNldENvbnRlbnRSZWZlcmVuY2UgPSAoZWxtKSA9PiB7XG4gICAgLy8gb25seSByZXF1aXJlZCB3aGVuIHdlJ3JlIE5PVCB1c2luZyBuYXRpdmUgc2hhZG93IGRvbSAoc2xvdClcbiAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgLy8gYW5kIHRoaXMgaG9zdCBlbGVtZW50IHdhcyBOT1QgY3JlYXRlZCB3aXRoIFNTUlxuICAgIC8vIGxldCdzIHBpY2sgb3V0IHRoZSBpbm5lciBjb250ZW50IGZvciBzbG90IHByb2plY3Rpb25cbiAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAvLyBjb250ZW50IHdhcyBmaXJzdCBwbGFjZWQsIHdoaWNoIGlzIHVzZWZ1bCBsYXRlciBvblxuICAgIGNvbnN0IGNyTmFtZSA9ICAnJztcbiAgICBjb25zdCBjb250ZW50UmVmRWxtID0gZWxtWydzLWNyJ10gPSBkb2MuY3JlYXRlQ29tbWVudChjck5hbWUpO1xuICAgIGNvbnRlbnRSZWZFbG1bJ3MtY24nXSA9IHRydWU7XG4gICAgZWxtLmluc2VydEJlZm9yZShjb250ZW50UmVmRWxtLCBlbG0uZmlyc3RDaGlsZCk7XG59O1xuY29uc3QgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSAoZWxtKSA9PiB7XG4gICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gIGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgO1xuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kcm1MaXN0ZW5lcnMkKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkKCk7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFyIENTUyB2YXItc2hpbSB0cmFja2luZ1xuICAgICAgICBpZiAoIHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgICAgIHBsdC4kY3NzU2hpbSQucmVtb3ZlSG9zdChlbG0pO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnZGlzY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFVubG9hZCcpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGNtcFRhZ3MgPSBbXTtcbiAgICBjb25zdCBleGNsdWRlID0gb3B0aW9ucy5leGNsdWRlIHx8IFtdO1xuICAgIGNvbnN0IGhlYWQgPSBkb2MuaGVhZDtcbiAgICBjb25zdCBjdXN0b21FbGVtZW50cyA9IHdpbi5jdXN0b21FbGVtZW50cztcbiAgICBjb25zdCB5ID0gLypAX19QVVJFX18qLyBoZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbY2hhcnNldF0nKTtcbiAgICBjb25zdCB2aXNpYmlsaXR5U3R5bGUgPSAvKkBfX1BVUkVfXyovIGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gICAgT2JqZWN0LmFzc2lnbihwbHQsIG9wdGlvbnMpO1xuICAgIHBsdC4kcmVzb3VyY2VzVXJsJCA9IG5ldyBVUkwob3B0aW9ucy5yZXNvdXJjZXNVcmwgfHwgJy4vJywgZG9jLmJhc2VVUkkpLmhyZWY7XG4gICAgaWYgKG9wdGlvbnMuc3luY1F1ZXVlKSB7XG4gICAgICAgIHBsdC4kZmxhZ3MkIHw9IDQgLyogcXVldWVTeW5jICovO1xuICAgIH1cbiAgICB7XG4gICAgICAgIC8vIElmIHRoZSBhcHAgaXMgYWxyZWFkeSBoeWRyYXRlZCB0aGVyZSBpcyBub3QgcG9pbnQgdG8gZGlzYWJsZSB0aGVcbiAgICAgICAgLy8gYXN5bmMgcXVldWUuIFRoaXMgd2lsbCBpbXByb3ZlIHRoZSBmaXJzdCBpbnB1dCBkZWxheVxuICAgICAgICBwbHQuJGZsYWdzJCB8PSAyIC8qIGFwcExvYWRlZCAqLztcbiAgICB9XG4gICAge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnc3R5bGVbcy1pZF0nKTtcbiAgICAgICAgbGV0IGdsb2JhbFN0eWxlcyA9ICcnO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBnbG9iYWxTdHlsZXMgKz0gc3R5bGVzW2ldLmlubmVySFRNTDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZUVsbSA9IHN0eWxlc1tpXTtcbiAgICAgICAgICAgIHJlZ2lzdGVyU3R5bGUoc3R5bGVFbG0uZ2V0QXR0cmlidXRlKEhZRFJBVEVfSUQpLCBnbG9iYWxTdHlsZXMgKyBjb252ZXJ0U2NvcGVkVG9TaGFkb3coc3R5bGVFbG0uaW5uZXJIVE1MKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGF6eUJ1bmRsZXMuZm9yRWFjaChsYXp5QnVuZGxlID0+IGxhenlCdW5kbGVbMV0uZm9yRWFjaChjb21wYWN0TWV0YSA9PiB7XG4gICAgICAgIGNvbnN0IGNtcE1ldGEgPSB7XG4gICAgICAgICAgICAkZmxhZ3MkOiBjb21wYWN0TWV0YVswXSxcbiAgICAgICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgICAgICAgICAkbWVtYmVycyQ6IGNvbXBhY3RNZXRhWzJdLFxuICAgICAgICAgICAgJGxpc3RlbmVycyQ6IGNvbXBhY3RNZXRhWzNdLFxuICAgICAgICB9O1xuICAgICAgICB7XG4gICAgICAgICAgICBjbXBNZXRhLiRtZW1iZXJzJCA9IGNvbXBhY3RNZXRhWzJdO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNtcE1ldGEuJGxpc3RlbmVycyQgPSBjb21wYWN0TWV0YVszXTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFzdXBwb3J0c1NoYWRvd0RvbSAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgIGNtcE1ldGEuJGZsYWdzJCB8PSA4IC8qIG5lZWRzU2hhZG93RG9tU2hpbSAqLztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YWdOYW1lID0gY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgICAgIGNvbnN0IEhvc3RFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgICAgICAvLyBTdGVuY2lsTGF6eUhvc3RcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHNlbGYpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgc3VwZXIoc2VsZik7XG4gICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJIb3N0KHNlbGYpO1xuICAgICAgICAgICAgICAgIGlmICggY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGlzIHVzaW5nIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgcmVhZC1vbmx5IHByb3BlcnR5IFwic2hhZG93Um9vdFwiIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzU2hhZG93RG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7ICdtb2RlJzogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAhKCdzaGFkb3dSb290JyBpbiBzZWxmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaGFkb3dSb290ID0gc2VsZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmIChhcHBMb2FkRmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFwcExvYWRGYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGFwcExvYWRGYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gY29ubmVjdGVkQ2FsbGJhY2sodGhpcywgY21wTWV0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgcGx0LmptcCgoKSA9PiBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAncy1obXInKGhtclZlcnNpb25JZCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUodGhpcywgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnRPblJlYWR5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIb3N0UmVmKHRoaXMpLiRvblJlYWR5UHJvbWlzZSQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNtcE1ldGEuJGxhenlCdW5kbGVJZHMkID0gbGF6eUJ1bmRsZVswXTtcbiAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKHRhZ05hbWUpICYmICFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIGNtcFRhZ3MucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBwcm94eUNvbXBvbmVudChIb3N0RWxlbWVudCwgY21wTWV0YSwgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIC8vIHZpc2liaWxpdHlTdHlsZS5pbm5lckhUTUwgPSBjbXBUYWdzLm1hcCh0ID0+IGAke3R9Om5vdCguaHlkcmF0ZWQpYCkgKyAne2Rpc3BsYXk6bm9uZX0nO1xuICAgIHZpc2liaWxpdHlTdHlsZS5pbm5lckhUTUwgPSBjbXBUYWdzICsgJ3t2aXNpYmlsaXR5OmhpZGRlbn0uaHlkcmF0ZWR7dmlzaWJpbGl0eTppbmhlcml0fSc7XG4gICAgdmlzaWJpbGl0eVN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgaGVhZC5pbnNlcnRCZWZvcmUodmlzaWJpbGl0eVN0eWxlLCB5ID8geS5uZXh0U2libGluZyA6IGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgLy8gRmFsbGJhY2sgYXBwTG9hZCBldmVudFxuICAgIHBsdC5qbXAoKCkgPT4gYXBwTG9hZEZhbGxiYWNrID0gc2V0VGltZW91dChhcHBEaWRMb2FkLCAzMCkpO1xufTtcbmNvbnN0IGNyZWF0ZUV2ZW50ID0gKHJlZiwgbmFtZSwgZmxhZ3MpID0+IHtcbiAgICBjb25zdCBlbG0gPSBnZXRFbGVtZW50KHJlZik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1pdDogKGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsbS5kaXNwYXRjaEV2ZW50KG5ldyAoIEN1c3RvbUV2ZW50KShuYW1lLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogISEoZmxhZ3MgJiA0IC8qIEJ1YmJsZXMgKi8pLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAhIShmbGFncyAmIDIgLyogQ29tcG9zZWQgKi8pLFxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEhKGZsYWdzICYgMSAvKiBDYW5jZWxsYWJsZSAqLyksXG4gICAgICAgICAgICAgICAgZGV0YWlsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmNvbnN0IGdldEFzc2V0UGF0aCA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgYXNzZXRVcmwgPSBuZXcgVVJMKHBhdGgsIHBsdC4kcmVzb3VyY2VzVXJsJCk7XG4gICAgcmV0dXJuIChhc3NldFVybC5vcmlnaW4gIT09IHdpbi5sb2NhdGlvbi5vcmlnaW4pXG4gICAgICAgID8gYXNzZXRVcmwuaHJlZlxuICAgICAgICA6IGFzc2V0VXJsLnBhdGhuYW1lO1xufTtcbmNvbnN0IGdldEVsZW1lbnQgPSAocmVmKSA9PiAgZ2V0SG9zdFJlZihyZWYpLiRob3N0RWxlbWVudCQgO1xuXG5sZXQgbW9kZTtcclxuY29uc3QgZ2V0SW9uTW9kZSA9IChyZWYpID0+IHtcclxuICAgIHJldHVybiAocmVmICYmIGdldE1vZGUocmVmKSkgfHwgbW9kZTtcclxufTtcclxuY29uc3QgZ2xvYmFsMCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xyXG4gICAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gICAgY29uc3QgSW9uaWMgPSB3aW4uSW9uaWMgPSB3aW4uSW9uaWMgfHwge307XHJcbiAgICAvLyBTZXR1cCBwbGF0Zm9ybXNcclxuICAgIHNldHVwUGxhdGZvcm1zKHdpbik7XHJcbiAgICAvLyBjcmVhdGUgdGhlIElvbmljLmNvbmZpZyBmcm9tIHJhdyBjb25maWcgb2JqZWN0IChpZiBpdCBleGlzdHMpXHJcbiAgICAvLyBhbmQgY29udmVydCBJb25pYy5jb25maWcgaW50byBhIENvbmZpZ0FwaSB0aGF0IGhhcyBhIGdldCgpIGZuXHJcbiAgICBjb25zdCBjb25maWdPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWdGcm9tU2Vzc2lvbih3aW4pKSwgeyBwZXJzaXN0Q29uZmlnOiBmYWxzZSB9KSwgSW9uaWMuY29uZmlnKSwgY29uZmlnRnJvbVVSTCh3aW4pKTtcclxuICAgIGNvbmZpZy5yZXNldChjb25maWdPYmopO1xyXG4gICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdwZXJzaXN0Q29uZmlnJykpIHtcclxuICAgICAgICBzYXZlQ29uZmlnKHdpbiwgY29uZmlnT2JqKTtcclxuICAgIH1cclxuICAgIC8vIGZpcnN0IHNlZSBpZiB0aGUgbW9kZSB3YXMgc2V0IGFzIGFuIGF0dHJpYnV0ZSBvbiA8aHRtbD5cclxuICAgIC8vIHdoaWNoIGNvdWxkIGhhdmUgYmVlbiBzZXQgYnkgdGhlIHVzZXIsIG9yIGJ5IHByZXJlbmRlcmluZ1xyXG4gICAgLy8gb3RoZXJ3aXNlIGdldCB0aGUgbW9kZSB2aWEgY29uZmlnIHNldHRpbmdzLCBhbmQgZmFsbGJhY2sgdG8gbWRcclxuICAgIElvbmljLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIElvbmljLm1vZGUgPSBtb2RlID0gY29uZmlnLmdldCgnbW9kZScsIChkb2MuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbW9kZScpKSB8fCAoaXNQbGF0Zm9ybSh3aW4sICdpb3MnKSA/ICdpb3MnIDogJ21kJykpO1xyXG4gICAgY29uZmlnLnNldCgnbW9kZScsIG1vZGUpO1xyXG4gICAgZG9jLmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21vZGUnLCBtb2RlKTtcclxuICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChtb2RlKTtcclxuICAgIGlmIChjb25maWcuZ2V0Qm9vbGVhbignX3Rlc3RpbmcnKSkge1xyXG4gICAgICAgIGNvbmZpZy5zZXQoJ2FuaW1hdGVkJywgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TW9kZSgoZWxtKSA9PiBlbG0ubW9kZSA9IGVsbS5tb2RlIHx8IGVsbS5nZXRBdHRyaWJ1dGUoJ21vZGUnKSB8fCBtb2RlKTtcclxufTtcblxuY29uc3QgZ2xvYmFsMSA9ICgpID0+IHtcclxuICAgIHNldE1vZGUoKGVsKSA9PiBlbC50YWdOYW1lID09PSAnSU9OLUlDT04nID8gZWwubW9kZSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ21vZGUnKSA6IG51bGwpO1xyXG59O1xuXG5jb25zdCBnbG9iYWxzID0gKCkgPT4ge1xuICBnbG9iYWwwKCk7XG4gIGdsb2JhbDEoKTtcbn07XG5cbmV4cG9ydCB7IEhvc3QgYXMgSCwgcGF0Y2hFc20gYXMgYSwgYm9vdHN0cmFwTGF6eSBhcyBiLCBjcmVhdGVFdmVudCBhcyBjLCBnZXRJb25Nb2RlIGFzIGQsIGdldEVsZW1lbnQgYXMgZSwgcmVhZFRhc2sgYXMgZiwgZ2xvYmFscyBhcyBnLCBoLCBnZXRBc3NldFBhdGggYXMgaSwgZ2V0TW9kZSBhcyBqLCBwYXRjaEJyb3dzZXIgYXMgcCwgcmVnaXN0ZXJJbnN0YW5jZSBhcyByLCB3cml0ZVRhc2sgYXMgdyB9O1xuIiwiLyoqXHJcbiAqIFBhdGNoZWQgdmVyc2lvbiBvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGhhdCBhdm9pZHMgbmd6b25lXHJcbiAqIFVzZSBvbmx5IHdoZW4geW91IGtub3cgbmd6b25lIHNob3VsZCBub3QgcnVuXHJcbiAqL1xyXG5jb25zdCByYWYgPSAoaCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gX196b25lX3N5bWJvbF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoaCk7XHJcbn07XHJcbmNvbnN0IGhhc1NoYWRvd0RvbSA9IChlbCkgPT4ge1xyXG4gICAgcmV0dXJuICEhZWwuc2hhZG93Um9vdCAmJiAhIWVsLmF0dGFjaFNoYWRvdztcclxufTtcclxuY29uc3QgZmluZEl0ZW1MYWJlbCA9IChjb21wb25lbnRFbCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbUVsID0gY29tcG9uZW50RWwuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcclxuICAgIGlmIChpdGVtRWwpIHtcclxuICAgICAgICByZXR1cm4gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmNvbnN0IHJlbmRlckhpZGRlbklucHV0ID0gKGFsd2F5cywgY29udGFpbmVyLCBuYW1lLCB2YWx1ZSwgZGlzYWJsZWQpID0+IHtcclxuICAgIGlmIChhbHdheXMgfHwgaGFzU2hhZG93RG9tKGNvbnRhaW5lcikpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQuYXV4LWlucHV0Jyk7XHJcbiAgICAgICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICAgICAgICBpbnB1dCA9IGNvbnRhaW5lci5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYXV4LWlucHV0Jyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICAgICAgaW5wdXQubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgIH1cclxufTtcclxuY29uc3QgY2xhbXAgPSAobWluLCBuLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG4sIG1heCkpO1xyXG59O1xyXG5jb25zdCBhc3NlcnQgPSAoYWN0dWFsLCByZWFzb24pID0+IHtcclxuICAgIGlmICghYWN0dWFsKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdBU1NFUlQ6ICcgKyByZWFzb247XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICBkZWJ1Z2dlcjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgbm93ID0gKGV2KSA9PiB7XHJcbiAgICByZXR1cm4gZXYudGltZVN0YW1wIHx8IERhdGUubm93KCk7XHJcbn07XHJcbmNvbnN0IHBvaW50ZXJDb29yZCA9IChldikgPT4ge1xyXG4gICAgLy8gZ2V0IFggY29vcmRpbmF0ZXMgZm9yIGVpdGhlciBhIG1vdXNlIGNsaWNrXHJcbiAgICAvLyBvciBhIHRvdWNoIGRlcGVuZGluZyBvbiB0aGUgZ2l2ZW4gZXZlbnRcclxuICAgIGlmIChldikge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXYuY2hhbmdlZFRvdWNoZXM7XHJcbiAgICAgICAgaWYgKGNoYW5nZWRUb3VjaGVzICYmIGNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBjaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgeDogdG91Y2guY2xpZW50WCwgeTogdG91Y2guY2xpZW50WSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXYucGFnZVggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB4OiBldi5wYWdlWCwgeTogZXYucGFnZVkgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XHJcbn07XHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIEdpdmVuIGEgc2lkZSwgcmV0dXJuIGlmIGl0IHNob3VsZCBiZSBvbiB0aGUgZW5kXHJcbiAqIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBkaXJcclxuICogQHBhcmFtIHNpZGUgdGhlIHNpZGVcclxuICogQHBhcmFtIGlzUlRMIHdoZXRoZXIgdGhlIGFwcGxpY2F0aW9uIGRpciBpcyBydGxcclxuICovXHJcbmNvbnN0IGlzRW5kU2lkZSA9IChzaWRlKSA9PiB7XHJcbiAgICBjb25zdCBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XHJcbiAgICBzd2l0Y2ggKHNpZGUpIHtcclxuICAgICAgICBjYXNlICdzdGFydCc6IHJldHVybiBpc1JUTDtcclxuICAgICAgICBjYXNlICdlbmQnOiByZXR1cm4gIWlzUlRMO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3NpZGV9XCIgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIFtzaWRlXS4gVXNlIFwic3RhcnRcIiBvciBcImVuZFwiIGluc3RlYWQuYCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGRlYm91bmNlRXZlbnQgPSAoZXZlbnQsIHdhaXQpID0+IHtcclxuICAgIGNvbnN0IG9yaWdpbmFsID0gZXZlbnQuX29yaWdpbmFsIHx8IGV2ZW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfb3JpZ2luYWw6IGV2ZW50LFxyXG4gICAgICAgIGVtaXQ6IGRlYm91bmNlKG9yaWdpbmFsLmVtaXQuYmluZChvcmlnaW5hbCksIHdhaXQpXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0ID0gMCkgPT4ge1xyXG4gICAgbGV0IHRpbWVyO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgd2FpdCwgLi4uYXJncyk7XHJcbiAgICB9O1xyXG59O1xuXG5leHBvcnQgeyByZW5kZXJIaWRkZW5JbnB1dCBhcyBhLCBhc3NlcnQgYXMgYiwgY2xhbXAgYXMgYywgZGVib3VuY2VFdmVudCBhcyBkLCBkZWJvdW5jZSBhcyBlLCBmaW5kSXRlbUxhYmVsIGFzIGYsIGhhc1NoYWRvd0RvbSBhcyBoLCBpc0VuZFNpZGUgYXMgaSwgbm93IGFzIG4sIHBvaW50ZXJDb29yZCBhcyBwLCByYWYgYXMgciB9O1xuIiwiaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5cbi8qKlxyXG4gKiBiYXNlQW5pbWF0aW9uXHJcbiAqIEJhc2UgY2xhc3Mgd2hpY2ggaXMgZXh0ZW5kZWQgYnkgdGhlIHZhcmlvdXMgdHlwZXMuIEVhY2hcclxuICogdHlwZSB3aWxsIHByb3ZpZGUgdGhlaXIgb3duIGFuaW1hdGlvbnMgZm9yIG9wZW4gYW5kIGNsb3NlXHJcbiAqIGFuZCByZWdpc3RlcnMgaXRzZWxmIHdpdGggTWVudS5cclxuICovXHJcbmNvbnN0IGJhc2VBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL21vdmVtZW50Lmh0bWwjbW92ZW1lbnQtbW92ZW1lbnQtaW4tb3V0LW9mLXNjcmVlbi1ib3VuZHNcclxuICAgIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLW5hdHVyYWwtZWFzaW5nLWN1cnZlc1xyXG4gICAgLy8gXCJBcHBseSB0aGUgc2hhcnAgY3VydmUgdG8gaXRlbXMgdGVtcG9yYXJpbHkgbGVhdmluZyB0aGUgc2NyZWVuIHRoYXQgbWF5IHJldHVyblxyXG4gICAgLy8gZnJvbSB0aGUgc2FtZSBleGl0IHBvaW50LiBXaGVuIHRoZXkgcmV0dXJuLCB1c2UgdGhlIGRlY2VsZXJhdGlvbiBjdXJ2ZS4gT24gbW9iaWxlLFxyXG4gICAgLy8gdGhpcyB0cmFuc2l0aW9uIHR5cGljYWxseSBvY2N1cnMgb3ZlciAzMDBtc1wiIC0tIE1EIE1vdGlvbiBHdWlkZVxyXG4gICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpJykgLy8gRGVjZWxlcmF0aW9uIGN1cnZlIChFbnRlcmluZyB0aGUgc2NyZWVuKVxyXG4gICAgICAgIC5kdXJhdGlvbigzMDApO1xyXG59O1xuXG4vKipcclxuICogTWVudSBPdmVybGF5IFR5cGVcclxuICogVGhlIG1lbnUgc2xpZGVzIG92ZXIgdGhlIGNvbnRlbnQuIFRoZSBjb250ZW50XHJcbiAqIGl0c2VsZiwgd2hpY2ggaXMgdW5kZXIgdGhlIG1lbnUsIGRvZXMgbm90IG1vdmUuXHJcbiAqL1xyXG5jb25zdCBtZW51T3ZlcmxheUFuaW1hdGlvbiA9IChtZW51KSA9PiB7XHJcbiAgICBsZXQgY2xvc2VkWDtcclxuICAgIGxldCBvcGVuZWRYO1xyXG4gICAgY29uc3QgQk9YX1NIQURPV19XSURUSCA9IDg7XHJcbiAgICBjb25zdCB3aWR0aCA9IG1lbnUud2lkdGggKyBCT1hfU0hBRE9XX1dJRFRIO1xyXG4gICAgY29uc3QgbWVudUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGlmIChtZW51LmlzRW5kU2lkZSkge1xyXG4gICAgICAgIC8vIHJpZ2h0IHNpZGVcclxuICAgICAgICBjbG9zZWRYID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIG9wZW5lZFggPSAnMHB4JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIGxlZnQgc2lkZVxyXG4gICAgICAgIGNsb3NlZFggPSAtd2lkdGggKyAncHgnO1xyXG4gICAgICAgIG9wZW5lZFggPSAnMHB4JztcclxuICAgIH1cclxuICAgIG1lbnVBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChtZW51Lm1lbnVJbm5lckVsKVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Y2xvc2VkWH0pYCwgYHRyYW5zbGF0ZVgoJHtvcGVuZWRYfSlgKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQobWVudS5iYWNrZHJvcEVsKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMyKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uKCkuYWRkQW5pbWF0aW9uKFttZW51QW5pbWF0aW9uLCBiYWNrZHJvcEFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogTWVudSBQdXNoIFR5cGVcclxuICogVGhlIGNvbnRlbnQgc2xpZGVzIG92ZXIgdG8gcmV2ZWFsIHRoZSBtZW51IHVuZGVybmVhdGguXHJcbiAqIFRoZSBtZW51IGl0c2VsZiBhbHNvIHNsaWRlcyBvdmVyIHRvIHJldmVhbCBpdHMgYmFkIHNlbGYuXHJcbiAqL1xyXG5jb25zdCBtZW51UHVzaEFuaW1hdGlvbiA9IChtZW51KSA9PiB7XHJcbiAgICBsZXQgY29udGVudE9wZW5lZFg7XHJcbiAgICBsZXQgbWVudUNsb3NlZFg7XHJcbiAgICBjb25zdCB3aWR0aCA9IG1lbnUud2lkdGg7XHJcbiAgICBpZiAobWVudS5pc0VuZFNpZGUpIHtcclxuICAgICAgICBjb250ZW50T3BlbmVkWCA9IC13aWR0aCArICdweCc7XHJcbiAgICAgICAgbWVudUNsb3NlZFggPSB3aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb250ZW50T3BlbmVkWCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgICBtZW51Q2xvc2VkWCA9IC13aWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZW51QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKClcclxuICAgICAgICAuYWRkRWxlbWVudChtZW51Lm1lbnVJbm5lckVsKVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7bWVudUNsb3NlZFh9KWAsICd0cmFuc2xhdGVYKDBweCknKTtcclxuICAgIGNvbnN0IGNvbnRlbnRBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKVxyXG4gICAgICAgIC5hZGRFbGVtZW50KG1lbnUuY29udGVudEVsKVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDBweCknLCBgdHJhbnNsYXRlWCgke2NvbnRlbnRPcGVuZWRYfSlgKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKClcclxuICAgICAgICAuYWRkRWxlbWVudChtZW51LmJhY2tkcm9wRWwpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMzIpO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb24oKS5hZGRBbmltYXRpb24oW21lbnVBbmltYXRpb24sIGJhY2tkcm9wQW5pbWF0aW9uLCBjb250ZW50QW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBNZW51IFJldmVhbCBUeXBlXHJcbiAqIFRoZSBjb250ZW50IHNsaWRlcyBvdmVyIHRvIHJldmVhbCB0aGUgbWVudSB1bmRlcm5lYXRoLlxyXG4gKiBUaGUgbWVudSBpdHNlbGYsIHdoaWNoIGlzIHVuZGVyIHRoZSBjb250ZW50LCBkb2VzIG5vdCBtb3ZlLlxyXG4gKi9cclxuY29uc3QgbWVudVJldmVhbEFuaW1hdGlvbiA9IChtZW51KSA9PiB7XHJcbiAgICBjb25zdCBvcGVuZWRYID0gKG1lbnUud2lkdGggKiAobWVudS5pc0VuZFNpZGUgPyAtMSA6IDEpKSArICdweCc7XHJcbiAgICBjb25zdCBjb250ZW50T3BlbiA9IGNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICAgICAgLmFkZEVsZW1lbnQobWVudS5jb250ZW50RWwpIC8vIFJFVklFV1xyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDBweCknLCBgdHJhbnNsYXRlWCgke29wZW5lZFh9KWApO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb24oKS5hZGRBbmltYXRpb24oY29udGVudE9wZW4pO1xyXG59O1xuXG5jb25zdCBjcmVhdGVNZW51Q29udHJvbGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVBbmltYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgbWVudXMgPSBbXTtcclxuICAgIGNvbnN0IG9wZW4gPSBhc3luYyAobWVudSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVFbCA9IGF3YWl0IGdldChtZW51KTtcclxuICAgICAgICBpZiAobWVudUVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW51RWwub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xvc2UgPSBhc3luYyAobWVudSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVFbCA9IGF3YWl0IChtZW51ICE9PSB1bmRlZmluZWQgPyBnZXQobWVudSkgOiBnZXRPcGVuKCkpO1xyXG4gICAgICAgIGlmIChtZW51RWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVudUVsLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBjb25zdCB0b2dnbGUgPSBhc3luYyAobWVudSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVFbCA9IGF3YWl0IGdldChtZW51KTtcclxuICAgICAgICBpZiAobWVudUVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW51RWwudG9nZ2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBlbmFibGUgPSBhc3luYyAoc2hvdWxkRW5hYmxlLCBtZW51KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVudUVsID0gYXdhaXQgZ2V0KG1lbnUpO1xyXG4gICAgICAgIGlmIChtZW51RWwpIHtcclxuICAgICAgICAgICAgbWVudUVsLmRpc2FibGVkID0gIXNob3VsZEVuYWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lbnVFbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBzd2lwZUdlc3R1cmUgPSBhc3luYyAoc2hvdWxkRW5hYmxlLCBtZW51KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVudUVsID0gYXdhaXQgZ2V0KG1lbnUpO1xyXG4gICAgICAgIGlmIChtZW51RWwpIHtcclxuICAgICAgICAgICAgbWVudUVsLnN3aXBlR2VzdHVyZSA9IHNob3VsZEVuYWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lbnVFbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBpc09wZW4gPSBhc3luYyAobWVudSkgPT4ge1xyXG4gICAgICAgIGlmIChtZW51ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVudUVsID0gYXdhaXQgZ2V0KG1lbnUpO1xyXG4gICAgICAgICAgICByZXR1cm4gKG1lbnVFbCAhPT0gdW5kZWZpbmVkICYmIG1lbnVFbC5pc09wZW4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51RWwgPSBhd2FpdCBnZXRPcGVuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW51RWwgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaXNFbmFibGVkID0gYXN5bmMgKG1lbnUpID0+IHtcclxuICAgICAgICBjb25zdCBtZW51RWwgPSBhd2FpdCBnZXQobWVudSk7XHJcbiAgICAgICAgaWYgKG1lbnVFbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIW1lbnVFbC5kaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldCA9IGFzeW5jIChtZW51KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgd2FpdFVudGlsUmVhZHkoKTtcclxuICAgICAgICBpZiAobWVudSA9PT0gJ3N0YXJ0JyB8fCBtZW51ID09PSAnZW5kJykge1xyXG4gICAgICAgICAgICAvLyB0aGVyZSBjb3VsZCBiZSBtb3JlIHRoYW4gb25lIG1lbnUgb24gdGhlIHNhbWUgc2lkZVxyXG4gICAgICAgICAgICAvLyBzbyBmaXJzdCB0cnkgdG8gZ2V0IHRoZSBlbmFibGVkIG9uZVxyXG4gICAgICAgICAgICBjb25zdCBtZW51UmVmID0gZmluZChtID0+IG0uc2lkZSA9PT0gbWVudSAmJiAhbS5kaXNhYmxlZCk7XHJcbiAgICAgICAgICAgIGlmIChtZW51UmVmKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVudVJlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkaWRuJ3QgZmluZCBhIG1lbnUgc2lkZSB0aGF0IGlzIGVuYWJsZWRcclxuICAgICAgICAgICAgLy8gc28gdHJ5IHRvIGdldCB0aGUgZmlyc3QgbWVudSBzaWRlIGZvdW5kXHJcbiAgICAgICAgICAgIHJldHVybiBmaW5kKG0gPT4gbS5zaWRlID09PSBtZW51KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobWVudSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBtZW51SWQgd2FzIG5vdCBsZWZ0IG9yIHJpZ2h0XHJcbiAgICAgICAgICAgIC8vIHNvIHRyeSB0byBnZXQgdGhlIG1lbnUgYnkgaXRzIFwiaWRcIlxyXG4gICAgICAgICAgICByZXR1cm4gZmluZChtID0+IG0ubWVudUlkID09PSBtZW51KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCBlbmFibGVkIG1lbnVcclxuICAgICAgICBjb25zdCBtZW51RWwgPSBmaW5kKG0gPT4gIW0uZGlzYWJsZWQpO1xyXG4gICAgICAgIGlmIChtZW51RWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbnVFbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBmaXJzdCBtZW51IGluIHRoZSBhcnJheSwgaWYgb25lIGV4aXN0c1xyXG4gICAgICAgIHJldHVybiBtZW51cy5sZW5ndGggPiAwID8gbWVudXNbMF0uZWwgOiB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBvcGVuZWQgbWVudS4gUmV0dXJucyBgbnVsbGAgaWYgYSBtZW51IGlzIG5vdCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgZ2V0T3BlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB3YWl0VW50aWxSZWFkeSgpO1xyXG4gICAgICAgIHJldHVybiBfZ2V0T3BlblN5bmMoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgbWVudSBpbnN0YW5jZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGdldE1lbnVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XHJcbiAgICAgICAgcmV0dXJuIGdldE1lbnVzU3luYygpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHdoZXRoZXIgb3Igbm90IGEgbWVudSBpcyBhbmltYXRpbmcuIFJldHVybnMgYHRydWVgIGlmIGFueVxyXG4gICAgICogbWVudSBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBpc0FuaW1hdGluZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB3YWl0VW50aWxSZWFkeSgpO1xyXG4gICAgICAgIHJldHVybiBpc0FuaW1hdGluZ1N5bmMoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlckFuaW1hdGlvbiA9IChuYW1lLCBhbmltYXRpb24pID0+IHtcclxuICAgICAgICBtZW51QW5pbWF0aW9ucy5zZXQobmFtZSwgYW5pbWF0aW9uKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBfcmVnaXN0ZXIgPSAobWVudSkgPT4ge1xyXG4gICAgICAgIGlmIChtZW51cy5pbmRleE9mKG1lbnUpIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoIW1lbnUuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIF9zZXRBY3RpdmVNZW51KG1lbnUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lbnVzLnB1c2gobWVudSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IF91bnJlZ2lzdGVyID0gKG1lbnUpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IG1lbnVzLmluZGV4T2YobWVudSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgbWVudXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3NldEFjdGl2ZU1lbnUgPSAobWVudSkgPT4ge1xyXG4gICAgICAgIC8vIGlmIHRoaXMgbWVudSBzaG91bGQgYmUgZW5hYmxlZFxyXG4gICAgICAgIC8vIHRoZW4gZmluZCBhbGwgdGhlIG90aGVyIG1lbnVzIG9uIHRoaXMgc2FtZSBzaWRlXHJcbiAgICAgICAgLy8gYW5kIGF1dG9tYXRpY2FsbHkgZGlzYWJsZSBvdGhlciBzYW1lIHNpZGUgbWVudXNcclxuICAgICAgICBjb25zdCBzaWRlID0gbWVudS5zaWRlO1xyXG4gICAgICAgIG1lbnVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiBtLnNpZGUgPT09IHNpZGUgJiYgbSAhPT0gbWVudSlcclxuICAgICAgICAgICAgLmZvckVhY2gobSA9PiBtLmRpc2FibGVkID0gdHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3NldE9wZW4gPSBhc3luYyAobWVudSwgc2hvdWxkT3BlbiwgYW5pbWF0ZWQpID0+IHtcclxuICAgICAgICBpZiAoaXNBbmltYXRpbmdTeW5jKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkT3Blbikge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVuZWRNZW51ID0gYXdhaXQgZ2V0T3BlbigpO1xyXG4gICAgICAgICAgICBpZiAob3BlbmVkTWVudSAmJiBtZW51LmVsICE9PSBvcGVuZWRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBvcGVuZWRNZW51LnNldE9wZW4oZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVudS5fc2V0T3BlbihzaG91bGRPcGVuLCBhbmltYXRlZCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2NyZWF0ZUFuaW1hdGlvbiA9ICh0eXBlLCBtZW51Q21wKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IG1lbnVBbmltYXRpb25zLmdldCh0eXBlKTtcclxuICAgICAgICBpZiAoIWFuaW1hdGlvbkJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbmltYXRpb24gbm90IHJlZ2lzdGVyZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gYW5pbWF0aW9uQnVpbGRlcihtZW51Q21wKTtcclxuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IF9nZXRPcGVuU3luYyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZmluZChtID0+IG0uX2lzT3Blbik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2V0TWVudXNTeW5jID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtZW51cy5tYXAobWVudSA9PiBtZW51LmVsKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpc0FuaW1hdGluZ1N5bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1lbnVzLnNvbWUobWVudSA9PiBtZW51LmlzQW5pbWF0aW5nKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBmaW5kID0gKHByZWRpY2F0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbWVudXMuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5lbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH07XHJcbiAgICBjb25zdCB3YWl0VW50aWxSZWFkeSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tbWVudScpKVxyXG4gICAgICAgICAgICAubWFwKG1lbnUgPT4gbWVudS5jb21wb25lbnRPblJlYWR5KCkpKTtcclxuICAgIH07XHJcbiAgICByZWdpc3RlckFuaW1hdGlvbigncmV2ZWFsJywgbWVudVJldmVhbEFuaW1hdGlvbik7XHJcbiAgICByZWdpc3RlckFuaW1hdGlvbigncHVzaCcsIG1lbnVQdXNoQW5pbWF0aW9uKTtcclxuICAgIHJlZ2lzdGVyQW5pbWF0aW9uKCdvdmVybGF5JywgbWVudU92ZXJsYXlBbmltYXRpb24pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpc3RlckFuaW1hdGlvbixcclxuICAgICAgICBnZXQsXHJcbiAgICAgICAgZ2V0TWVudXMsXHJcbiAgICAgICAgZ2V0T3BlbixcclxuICAgICAgICBpc0VuYWJsZWQsXHJcbiAgICAgICAgc3dpcGVHZXN0dXJlLFxyXG4gICAgICAgIGlzQW5pbWF0aW5nLFxyXG4gICAgICAgIGlzT3BlbixcclxuICAgICAgICBlbmFibGUsXHJcbiAgICAgICAgdG9nZ2xlLFxyXG4gICAgICAgIGNsb3NlLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgX2dldE9wZW5TeW5jLFxyXG4gICAgICAgIF9jcmVhdGVBbmltYXRpb24sXHJcbiAgICAgICAgX3JlZ2lzdGVyLFxyXG4gICAgICAgIF91bnJlZ2lzdGVyLFxyXG4gICAgICAgIF9zZXRPcGVuLFxyXG4gICAgICAgIF9zZXRBY3RpdmVNZW51LFxyXG4gICAgfTtcclxufTtcclxuY29uc3QgbWVudUNvbnRyb2xsZXIgPSAvKkBfX1BVUkVfXyovIGNyZWF0ZU1lbnVDb250cm9sbGVyKCk7XG5cbmV4cG9ydCB7IG1lbnVDb250cm9sbGVyIGFzIG0gfTtcbiIsImNsYXNzIEdlc3R1cmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2VzdHVyZUlkID0gMDtcclxuICAgICAgICB0aGlzLnJlcXVlc3RlZFN0YXJ0ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWRHZXN0dXJlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkU2Nyb2xsID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZ2VzdHVyZSBkZWxlZ2F0ZSBiYXNlZCBvbiB0aGUgR2VzdHVyZUNvbmZpZyBwYXNzZWRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlR2VzdHVyZShjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdlc3R1cmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLm5ld0lEKCksIGNvbmZpZy5uYW1lLCBjb25maWcucHJpb3JpdHkgfHwgMCwgISFjb25maWcuZGlzYWJsZVNjcm9sbCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBibG9ja2VyIHRoYXQgd2lsbCBibG9jayBhbnkgb3RoZXIgZ2VzdHVyZSBldmVudHMgZnJvbSBmaXJpbmcuIFNldCBpbiB0aGUgaW9uLWdlc3R1cmUgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVCbG9ja2VyKG9wdHMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmxvY2tlckRlbGVnYXRlKHRoaXMsIHRoaXMubmV3SUQoKSwgb3B0cy5kaXNhYmxlLCAhIW9wdHMuZGlzYWJsZVNjcm9sbCk7XHJcbiAgICB9XHJcbiAgICBzdGFydChnZXN0dXJlTmFtZSwgaWQsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN0YXJ0KGdlc3R1cmVOYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RlZFN0YXJ0LmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0ZWRTdGFydC5zZXQoaWQsIHByaW9yaXR5KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhcHR1cmUoZ2VzdHVyZU5hbWUsIGlkLCBwcmlvcml0eSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFydChnZXN0dXJlTmFtZSwgaWQsIHByaW9yaXR5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZFN0YXJ0ID0gdGhpcy5yZXF1ZXN0ZWRTdGFydDtcclxuICAgICAgICBsZXQgbWF4UHJpb3JpdHkgPSAtMTAwMDA7XHJcbiAgICAgICAgcmVxdWVzdGVkU3RhcnQuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIG1heFByaW9yaXR5ID0gTWF0aC5tYXgobWF4UHJpb3JpdHksIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobWF4UHJpb3JpdHkgPT09IHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRJZCA9IGlkO1xyXG4gICAgICAgICAgICByZXF1ZXN0ZWRTdGFydC5jbGVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnaW9uR2VzdHVyZUNhcHR1cmVkJywgeyBkZXRhaWw6IHsgZ2VzdHVyZU5hbWUgfSB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0ZWRTdGFydC5kZWxldGUoaWQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlbGVhc2UoaWQpIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3RlZFN0YXJ0LmRlbGV0ZShpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FwdHVyZWRJZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlZElkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc2FibGVHZXN0dXJlKGdlc3R1cmVOYW1lLCBpZCkge1xyXG4gICAgICAgIGxldCBzZXQgPSB0aGlzLmRpc2FibGVkR2VzdHVyZXMuZ2V0KGdlc3R1cmVOYW1lKTtcclxuICAgICAgICBpZiAoc2V0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkR2VzdHVyZXMuc2V0KGdlc3R1cmVOYW1lLCBzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQuYWRkKGlkKTtcclxuICAgIH1cclxuICAgIGVuYWJsZUdlc3R1cmUoZ2VzdHVyZU5hbWUsIGlkKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0ID0gdGhpcy5kaXNhYmxlZEdlc3R1cmVzLmdldChnZXN0dXJlTmFtZSk7XHJcbiAgICAgICAgaWYgKHNldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldC5kZWxldGUoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc2FibGVTY3JvbGwoaWQpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkU2Nyb2xsLmFkZChpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRTY3JvbGwuc2l6ZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQkFDS0RST1BfTk9fU0NST0xMKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbmFibGVTY3JvbGwoaWQpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkU2Nyb2xsLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRTY3JvbGwuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQkFDS0RST1BfTk9fU0NST0xMKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYW5TdGFydChnZXN0dXJlTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcHR1cmVkSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBhIGdlc3R1cmUgYWxyZWFkeSBjYXB0dXJlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoZ2VzdHVyZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpc0NhcHR1cmVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcHR1cmVkSWQgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlzU2Nyb2xsRGlzYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRTY3JvbGwuc2l6ZSA+IDA7XHJcbiAgICB9XHJcbiAgICBpc0Rpc2FibGVkKGdlc3R1cmVOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkR2VzdHVyZXMuZ2V0KGdlc3R1cmVOYW1lKTtcclxuICAgICAgICBpZiAoZGlzYWJsZWQgJiYgZGlzYWJsZWQuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIG5ld0lEKCkge1xyXG4gICAgICAgIHRoaXMuZ2VzdHVyZUlkKys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VzdHVyZUlkO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEdlc3R1cmVEZWxlZ2F0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHJsLCBpZCwgbmFtZSwgcHJpb3JpdHksIGRpc2FibGVTY3JvbGwpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVTY3JvbGwgPSBkaXNhYmxlU2Nyb2xsO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSAqIDEwMDAwMDAgKyBpZDtcclxuICAgICAgICB0aGlzLmN0cmwgPSBjdHJsO1xyXG4gICAgfVxyXG4gICAgY2FuU3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN0cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jdHJsLmNhblN0YXJ0KHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3RybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmN0cmwuc3RhcnQodGhpcy5uYW1lLCB0aGlzLmlkLCB0aGlzLnByaW9yaXR5KTtcclxuICAgIH1cclxuICAgIGNhcHR1cmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN0cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXB0dXJlZCA9IHRoaXMuY3RybC5jYXB0dXJlKHRoaXMubmFtZSwgdGhpcy5pZCwgdGhpcy5wcmlvcml0eSk7XHJcbiAgICAgICAgaWYgKGNhcHR1cmVkICYmIHRoaXMuZGlzYWJsZVNjcm9sbCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0cmwuZGlzYWJsZVNjcm9sbCh0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhcHR1cmVkO1xyXG4gICAgfVxyXG4gICAgcmVsZWFzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdHJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3RybC5yZWxlYXNlKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0cmwuZW5hYmxlU2Nyb2xsKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgICAgICB0aGlzLmN0cmwgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQmxvY2tlckRlbGVnYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0cmwsIGlkLCBkaXNhYmxlLCBkaXNhYmxlU2Nyb2xsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZSA9IGRpc2FibGU7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlU2Nyb2xsID0gZGlzYWJsZVNjcm9sbDtcclxuICAgICAgICB0aGlzLmN0cmwgPSBjdHJsO1xyXG4gICAgfVxyXG4gICAgYmxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN0cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ2VzdHVyZSBvZiB0aGlzLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3RybC5kaXNhYmxlR2VzdHVyZShnZXN0dXJlLCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3RybC5kaXNhYmxlU2Nyb2xsKHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVuYmxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN0cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ2VzdHVyZSBvZiB0aGlzLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3RybC5lbmFibGVHZXN0dXJlKGdlc3R1cmUsIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHJsLmVuYWJsZVNjcm9sbCh0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudW5ibG9jaygpO1xyXG4gICAgICAgIHRoaXMuY3RybCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5jb25zdCBCQUNLRFJPUF9OT19TQ1JPTEwgPSAnYmFja2Ryb3Atbm8tc2Nyb2xsJztcclxuY29uc3QgR0VTVFVSRV9DT05UUk9MTEVSID0gbmV3IEdlc3R1cmVDb250cm9sbGVyKCk7XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSAoZWwsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdHMpID0+IHtcclxuICAgIC8vIHVzZSBldmVudCBsaXN0ZW5lciBvcHRpb25zIHdoZW4gc3VwcG9ydGVkXHJcbiAgICAvLyBvdGhlcndpc2UgaXQncyBqdXN0IGEgYm9vbGVhbiBmb3IgdGhlIFwiY2FwdHVyZVwiIGFyZ1xyXG4gICAgY29uc3QgbGlzdGVuZXJPcHRzID0gc3VwcG9ydHNQYXNzaXZlKGVsKSA/IHtcclxuICAgICAgICAnY2FwdHVyZSc6ICEhb3B0cy5jYXB0dXJlLFxyXG4gICAgICAgICdwYXNzaXZlJzogISFvcHRzLnBhc3NpdmUsXHJcbiAgICB9IDogISFvcHRzLmNhcHR1cmU7XHJcbiAgICBsZXQgYWRkO1xyXG4gICAgbGV0IHJlbW92ZTtcclxuICAgIGlmIChlbFsnX196b25lX3N5bWJvbF9fYWRkRXZlbnRMaXN0ZW5lciddKSB7XHJcbiAgICAgICAgYWRkID0gJ19fem9uZV9zeW1ib2xfX2FkZEV2ZW50TGlzdGVuZXInO1xyXG4gICAgICAgIHJlbW92ZSA9ICdfX3pvbmVfc3ltYm9sX19yZW1vdmVFdmVudExpc3RlbmVyJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFkZCA9ICdhZGRFdmVudExpc3RlbmVyJztcclxuICAgICAgICByZW1vdmUgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XHJcbiAgICB9XHJcbiAgICBlbFthZGRdKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGxpc3RlbmVyT3B0cyk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGVsW3JlbW92ZV0oZXZlbnROYW1lLCBjYWxsYmFjaywgbGlzdGVuZXJPcHRzKTtcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IHN1cHBvcnRzUGFzc2l2ZSA9IChub2RlKSA9PiB7XHJcbiAgICBpZiAoX3NQYXNzaXZlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgICAgICAgICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zUGFzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ29wdHNUZXN0JywgKCkgPT4geyByZXR1cm47IH0sIG9wdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBfc1Bhc3NpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISFfc1Bhc3NpdmU7XHJcbn07XHJcbmxldCBfc1Bhc3NpdmU7XG5cbmNvbnN0IE1PVVNFX1dBSVQgPSAyMDAwO1xyXG5jb25zdCBjcmVhdGVQb2ludGVyRXZlbnRzID0gKGVsLCBwb2ludGVyRG93biwgcG9pbnRlck1vdmUsIHBvaW50ZXJVcCwgb3B0aW9ucykgPT4ge1xyXG4gICAgbGV0IHJtVG91Y2hTdGFydDtcclxuICAgIGxldCBybVRvdWNoTW92ZTtcclxuICAgIGxldCBybVRvdWNoRW5kO1xyXG4gICAgbGV0IHJtVG91Y2hDYW5jZWw7XHJcbiAgICBsZXQgcm1Nb3VzZVN0YXJ0O1xyXG4gICAgbGV0IHJtTW91c2VNb3ZlO1xyXG4gICAgbGV0IHJtTW91c2VVcDtcclxuICAgIGxldCBsYXN0VG91Y2hFdmVudCA9IDA7XHJcbiAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gKGV2KSA9PiB7XHJcbiAgICAgICAgbGFzdFRvdWNoRXZlbnQgPSBEYXRlLm5vdygpICsgTU9VU0VfV0FJVDtcclxuICAgICAgICBpZiAoIXBvaW50ZXJEb3duKGV2KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm1Ub3VjaE1vdmUgJiYgcG9pbnRlck1vdmUpIHtcclxuICAgICAgICAgICAgcm1Ub3VjaE1vdmUgPSBhZGRFdmVudExpc3RlbmVyKGVsLCAndG91Y2htb3ZlJywgcG9pbnRlck1vdmUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJtVG91Y2hFbmQpIHtcclxuICAgICAgICAgICAgcm1Ub3VjaEVuZCA9IGFkZEV2ZW50TGlzdGVuZXIoZWwsICd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFybVRvdWNoQ2FuY2VsKSB7XHJcbiAgICAgICAgICAgIHJtVG91Y2hDYW5jZWwgPSBhZGRFdmVudExpc3RlbmVyKGVsLCAndG91Y2hjYW5jZWwnLCBoYW5kbGVUb3VjaEVuZCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChldikgPT4ge1xyXG4gICAgICAgIGlmIChsYXN0VG91Y2hFdmVudCA+IERhdGUubm93KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBvaW50ZXJEb3duKGV2KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm1Nb3VzZU1vdmUgJiYgcG9pbnRlck1vdmUpIHtcclxuICAgICAgICAgICAgcm1Nb3VzZU1vdmUgPSBhZGRFdmVudExpc3RlbmVyKGdldERvY3VtZW50KGVsKSwgJ21vdXNlbW92ZScsIHBvaW50ZXJNb3ZlLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFybU1vdXNlVXApIHtcclxuICAgICAgICAgICAgcm1Nb3VzZVVwID0gYWRkRXZlbnRMaXN0ZW5lcihnZXREb2N1bWVudChlbCksICdtb3VzZXVwJywgaGFuZGxlTW91c2VVcCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVRvdWNoRW5kID0gKGV2KSA9PiB7XHJcbiAgICAgICAgc3RvcFRvdWNoKCk7XHJcbiAgICAgICAgaWYgKHBvaW50ZXJVcCkge1xyXG4gICAgICAgICAgICBwb2ludGVyVXAoZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGV2KSA9PiB7XHJcbiAgICAgICAgc3RvcE1vdXNlKCk7XHJcbiAgICAgICAgaWYgKHBvaW50ZXJVcCkge1xyXG4gICAgICAgICAgICBwb2ludGVyVXAoZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzdG9wVG91Y2ggPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJtVG91Y2hNb3ZlKSB7XHJcbiAgICAgICAgICAgIHJtVG91Y2hNb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChybVRvdWNoRW5kKSB7XHJcbiAgICAgICAgICAgIHJtVG91Y2hFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJtVG91Y2hDYW5jZWwpIHtcclxuICAgICAgICAgICAgcm1Ub3VjaENhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBybVRvdWNoTW92ZSA9IHJtVG91Y2hFbmQgPSBybVRvdWNoQ2FuY2VsID0gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0b3BNb3VzZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocm1Nb3VzZU1vdmUpIHtcclxuICAgICAgICAgICAgcm1Nb3VzZU1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJtTW91c2VVcCkge1xyXG4gICAgICAgICAgICBybU1vdXNlVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm1Nb3VzZU1vdmUgPSBybU1vdXNlVXAgPSB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICBzdG9wVG91Y2goKTtcclxuICAgICAgICBzdG9wTW91c2UoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXREaXNhYmxlZCA9IChkaXNhYmxlZCkgPT4ge1xyXG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBpZiAocm1Ub3VjaFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBybVRvdWNoU3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocm1Nb3VzZVN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBybU1vdXNlU3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBybVRvdWNoU3RhcnQgPSBybU1vdXNlU3RhcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghcm1Ub3VjaFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBybVRvdWNoU3RhcnQgPSBhZGRFdmVudExpc3RlbmVyKGVsLCAndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcm1Nb3VzZVN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBybU1vdXNlU3RhcnQgPSBhZGRFdmVudExpc3RlbmVyKGVsLCAnbW91c2Vkb3duJywgaGFuZGxlTW91c2VEb3duLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgIHBvaW50ZXJVcCA9IHBvaW50ZXJNb3ZlID0gcG9pbnRlckRvd24gPSB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXREaXNhYmxlZCxcclxuICAgICAgICBzdG9wLFxyXG4gICAgICAgIGRlc3Ryb3lcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IGdldERvY3VtZW50ID0gKG5vZGUpID0+IHtcclxuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgRG9jdW1lbnQgPyBub2RlIDogbm9kZS5vd25lckRvY3VtZW50O1xyXG59O1xuXG5jb25zdCBjcmVhdGVQYW5SZWNvZ25pemVyID0gKGRpcmVjdGlvbiwgdGhyZXNoLCBtYXhBbmdsZSkgPT4ge1xyXG4gICAgY29uc3QgcmFkaWFucyA9IG1heEFuZ2xlICogKE1hdGguUEkgLyAxODApO1xyXG4gICAgY29uc3QgaXNEaXJYID0gZGlyZWN0aW9uID09PSAneCc7XHJcbiAgICBjb25zdCBtYXhDb3NpbmUgPSBNYXRoLmNvcyhyYWRpYW5zKTtcclxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRocmVzaCAqIHRocmVzaDtcclxuICAgIGxldCBzdGFydFggPSAwO1xyXG4gICAgbGV0IHN0YXJ0WSA9IDA7XHJcbiAgICBsZXQgZGlydHkgPSBmYWxzZTtcclxuICAgIGxldCBpc1BhbiA9IDA7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXJ0KHgsIHkpIHtcclxuICAgICAgICAgICAgc3RhcnRYID0geDtcclxuICAgICAgICAgICAgc3RhcnRZID0geTtcclxuICAgICAgICAgICAgaXNQYW4gPSAwO1xyXG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXRlY3QoeCwgeSkge1xyXG4gICAgICAgICAgICBpZiAoIWRpcnR5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gKHggLSBzdGFydFgpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSAoeSAtIHN0YXJ0WSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgY29uc3QgY29zaW5lID0gKGlzRGlyWCA/IGRlbHRhWCA6IGRlbHRhWSkgLyBoeXBvdGVudXNlO1xyXG4gICAgICAgICAgICBpZiAoY29zaW5lID4gbWF4Q29zaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBpc1BhbiA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29zaW5lIDwgLW1heENvc2luZSkge1xyXG4gICAgICAgICAgICAgICAgaXNQYW4gPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlzUGFuID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzR2VzdHVyZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzUGFuICE9PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RGlyZWN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNQYW47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcblxuY29uc3QgY3JlYXRlR2VzdHVyZSA9IChjb25maWcpID0+IHtcclxuICAgIGxldCBoYXNDYXB0dXJlZFBhbiA9IGZhbHNlO1xyXG4gICAgbGV0IGhhc1N0YXJ0ZWRQYW4gPSBmYWxzZTtcclxuICAgIGxldCBoYXNGaXJlZFN0YXJ0ID0gdHJ1ZTtcclxuICAgIGxldCBpc01vdmVRdWV1ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGZpbmFsQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7IGRpc2FibGVTY3JvbGw6IGZhbHNlLCBkaXJlY3Rpb246ICd4JywgZ2VzdHVyZVByaW9yaXR5OiAwLCBwYXNzaXZlOiB0cnVlLCBtYXhBbmdsZTogNDAsIHRocmVzaG9sZDogMTAgfSwgY29uZmlnKTtcclxuICAgIGNvbnN0IGNhblN0YXJ0ID0gZmluYWxDb25maWcuY2FuU3RhcnQ7XHJcbiAgICBjb25zdCBvbldpbGxTdGFydCA9IGZpbmFsQ29uZmlnLm9uV2lsbFN0YXJ0O1xyXG4gICAgY29uc3Qgb25TdGFydCA9IGZpbmFsQ29uZmlnLm9uU3RhcnQ7XHJcbiAgICBjb25zdCBvbkVuZCA9IGZpbmFsQ29uZmlnLm9uRW5kO1xyXG4gICAgY29uc3Qgbm90Q2FwdHVyZWQgPSBmaW5hbENvbmZpZy5ub3RDYXB0dXJlZDtcclxuICAgIGNvbnN0IG9uTW92ZSA9IGZpbmFsQ29uZmlnLm9uTW92ZTtcclxuICAgIGNvbnN0IHRocmVzaG9sZCA9IGZpbmFsQ29uZmlnLnRocmVzaG9sZDtcclxuICAgIGNvbnN0IGRldGFpbCA9IHtcclxuICAgICAgICB0eXBlOiAncGFuJyxcclxuICAgICAgICBzdGFydFg6IDAsXHJcbiAgICAgICAgc3RhcnRZOiAwLFxyXG4gICAgICAgIHN0YXJ0VGltZVN0YW1wOiAwLFxyXG4gICAgICAgIGN1cnJlbnRYOiAwLFxyXG4gICAgICAgIGN1cnJlbnRZOiAwLFxyXG4gICAgICAgIHZlbG9jaXR5WDogMCxcclxuICAgICAgICB2ZWxvY2l0eVk6IDAsXHJcbiAgICAgICAgZGVsdGFYOiAwLFxyXG4gICAgICAgIGRlbHRhWTogMCxcclxuICAgICAgICB0aW1lU3RhbXA6IDAsXHJcbiAgICAgICAgZXZlbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBkYXRhOiB1bmRlZmluZWRcclxuICAgIH07XHJcbiAgICBjb25zdCBwYW4gPSBjcmVhdGVQYW5SZWNvZ25pemVyKGZpbmFsQ29uZmlnLmRpcmVjdGlvbiwgZmluYWxDb25maWcudGhyZXNob2xkLCBmaW5hbENvbmZpZy5tYXhBbmdsZSk7XHJcbiAgICBjb25zdCBnZXN0dXJlID0gR0VTVFVSRV9DT05UUk9MTEVSLmNyZWF0ZUdlc3R1cmUoe1xyXG4gICAgICAgIG5hbWU6IGNvbmZpZy5nZXN0dXJlTmFtZSxcclxuICAgICAgICBwcmlvcml0eTogY29uZmlnLmdlc3R1cmVQcmlvcml0eSxcclxuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBjb25maWcuZGlzYWJsZVNjcm9sbFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwb2ludGVyRG93biA9IChldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVTdGFtcCA9IG5vdyhldik7XHJcbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWRQYW4gfHwgIWhhc0ZpcmVkU3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVEZXRhaWwoZXYsIGRldGFpbCk7XHJcbiAgICAgICAgZGV0YWlsLnN0YXJ0WCA9IGRldGFpbC5jdXJyZW50WDtcclxuICAgICAgICBkZXRhaWwuc3RhcnRZID0gZGV0YWlsLmN1cnJlbnRZO1xyXG4gICAgICAgIGRldGFpbC5zdGFydFRpbWVTdGFtcCA9IGRldGFpbC50aW1lU3RhbXAgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgZGV0YWlsLnZlbG9jaXR5WCA9IGRldGFpbC52ZWxvY2l0eVkgPSBkZXRhaWwuZGVsdGFYID0gZGV0YWlsLmRlbHRhWSA9IDA7XHJcbiAgICAgICAgZGV0YWlsLmV2ZW50ID0gZXY7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgZ2VzdHVyZSBjYW4gc3RhcnRcclxuICAgICAgICBpZiAoY2FuU3RhcnQgJiYgY2FuU3RhcnQoZGV0YWlsKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxlYXNlIGZhbGxiYWNrXHJcbiAgICAgICAgZ2VzdHVyZS5yZWxlYXNlKCk7XHJcbiAgICAgICAgLy8gU3RhcnQgZ2VzdHVyZVxyXG4gICAgICAgIGlmICghZ2VzdHVyZS5zdGFydCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFzU3RhcnRlZFBhbiA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRocmVzaG9sZCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ5VG9DYXB0dXJlUGFuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhbi5zdGFydChkZXRhaWwuc3RhcnRYLCBkZXRhaWwuc3RhcnRZKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwb2ludGVyTW92ZSA9IChldikgPT4ge1xyXG4gICAgICAgIC8vIGZhc3QgcGF0aCwgaWYgZ2VzdHVyZSBpcyBjdXJyZW50bHkgY2FwdHVyZWRcclxuICAgICAgICAvLyBkbyBtaW5pbXVtIGpvYiB0byBnZXQgdXNlci1sYW5kIGV2ZW4gZGlzcGF0Y2hlZFxyXG4gICAgICAgIGlmIChoYXNDYXB0dXJlZFBhbikge1xyXG4gICAgICAgICAgICBpZiAoIWlzTW92ZVF1ZXVlZCAmJiBoYXNGaXJlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpc01vdmVRdWV1ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2FsY0dlc3R1cmVEYXRhKGRldGFpbCwgZXYpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpcmVPbk1vdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2VzdHVyZSBpcyBjdXJyZW50bHkgYmVpbmcgZGV0ZWN0ZWRcclxuICAgICAgICBjYWxjR2VzdHVyZURhdGEoZGV0YWlsLCBldik7XHJcbiAgICAgICAgaWYgKHBhbi5kZXRlY3QoZGV0YWlsLmN1cnJlbnRYLCBkZXRhaWwuY3VycmVudFkpKSB7XHJcbiAgICAgICAgICAgIGlmICghcGFuLmlzR2VzdHVyZSgpIHx8ICF0cnlUb0NhcHR1cmVQYW4oKSkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRHZXN0dXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlyZU9uTW92ZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBTaW5jZSBmaXJlT25Nb3ZlIGlzIGNhbGxlZCBpbnNpZGUgYSBSQUYsIG9uRW5kKCkgbWlnaHQgYmUgY2FsbGVkLFxyXG4gICAgICAgIC8vIHdlIG11c3QgZG91YmxlIGNoZWNrIGhhc0NhcHR1cmVkUGFuXHJcbiAgICAgICAgaWYgKCFoYXNDYXB0dXJlZFBhbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzTW92ZVF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChvbk1vdmUpIHtcclxuICAgICAgICAgICAgb25Nb3ZlKGRldGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRyeVRvQ2FwdHVyZVBhbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZ2VzdHVyZSAmJiAhZ2VzdHVyZS5jYXB0dXJlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYXNDYXB0dXJlZFBhbiA9IHRydWU7XHJcbiAgICAgICAgaGFzRmlyZWRTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHJlc2V0IHN0YXJ0IHBvc2l0aW9uIHNpbmNlIHRoZSByZWFsIHVzZXItbGFuZCBldmVudCBzdGFydHMgaGVyZVxyXG4gICAgICAgIC8vIElmIHRoZSBwYW4gZGV0ZWN0b3IgdGhyZXNob2xkIGlzIGJpZywgbm90IHJlc2V0dGluZyB0aGUgc3RhcnQgcG9zaXRpb25cclxuICAgICAgICAvLyB3aWxsIGNhdXNlIGEganVtcCBpbiB0aGUgYW5pbWF0aW9uIGVxdWFsIHRvIHRoZSBkZXRlY3RvciB0aHJlc2hvbGQuXHJcbiAgICAgICAgLy8gdGhlIGFycmF5IG9mIHBvc2l0aW9ucyB1c2VkIHRvIGNhbGN1bGF0ZSB0aGUgZ2VzdHVyZSB2ZWxvY2l0eSBkb2VzIG5vdFxyXG4gICAgICAgIC8vIG5lZWQgdG8gYmUgY2xlYW5lZCwgbW9yZSBwb2ludHMgaW4gdGhlIHBvc2l0aW9ucyBhcnJheSBhbHdheXMgcmVzdWx0cyBpbiBhXHJcbiAgICAgICAgLy8gbW9yZSBhY2N1cmF0ZSB2YWx1ZSBvZiB0aGUgdmVsb2NpdHkuXHJcbiAgICAgICAgZGV0YWlsLnN0YXJ0WCA9IGRldGFpbC5jdXJyZW50WDtcclxuICAgICAgICBkZXRhaWwuc3RhcnRZID0gZGV0YWlsLmN1cnJlbnRZO1xyXG4gICAgICAgIGRldGFpbC5zdGFydFRpbWVTdGFtcCA9IGRldGFpbC50aW1lU3RhbXA7XHJcbiAgICAgICAgaWYgKG9uV2lsbFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIG9uV2lsbFN0YXJ0KGRldGFpbCkudGhlbihmaXJlT25TdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJlT25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBmaXJlT25TdGFydCA9ICgpID0+IHtcclxuICAgICAgICBpZiAob25TdGFydCkge1xyXG4gICAgICAgICAgICBvblN0YXJ0KGRldGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhc0ZpcmVkU3RhcnQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGhhc0NhcHR1cmVkUGFuID0gZmFsc2U7XHJcbiAgICAgICAgaGFzU3RhcnRlZFBhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlzTW92ZVF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICAgIGhhc0ZpcmVkU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIGdlc3R1cmUucmVsZWFzZSgpO1xyXG4gICAgfTtcclxuICAgIC8vIEVORCAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBjb25zdCBwb2ludGVyVXAgPSAoZXYpID0+IHtcclxuICAgICAgICBjb25zdCB0bXBIYXNDYXB0dXJlZCA9IGhhc0NhcHR1cmVkUGFuO1xyXG4gICAgICAgIGNvbnN0IHRtcEhhc0ZpcmVkU3RhcnQgPSBoYXNGaXJlZFN0YXJ0O1xyXG4gICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgaWYgKCF0bXBIYXNGaXJlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsY0dlc3R1cmVEYXRhKGRldGFpbCwgZXYpO1xyXG4gICAgICAgIC8vIFRyeSB0byBjYXB0dXJlIHByZXNzXHJcbiAgICAgICAgaWYgKHRtcEhhc0NhcHR1cmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChvbkVuZCkge1xyXG4gICAgICAgICAgICAgICAgb25FbmQoZGV0YWlsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdCBjYXB0dXJlZCBhbnkgZXZlbnRcclxuICAgICAgICBpZiAobm90Q2FwdHVyZWQpIHtcclxuICAgICAgICAgICAgbm90Q2FwdHVyZWQoZGV0YWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcG9pbnRlckV2ZW50cyA9IGNyZWF0ZVBvaW50ZXJFdmVudHMoZmluYWxDb25maWcuZWwsIHBvaW50ZXJEb3duLCBwb2ludGVyTW92ZSwgcG9pbnRlclVwLCB7XHJcbiAgICAgICAgY2FwdHVyZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFib3J0R2VzdHVyZSA9ICgpID0+IHtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIHBvaW50ZXJFdmVudHMuc3RvcCgpO1xyXG4gICAgICAgIGlmIChub3RDYXB0dXJlZCkge1xyXG4gICAgICAgICAgICBub3RDYXB0dXJlZChkZXRhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldERpc2FibGVkKGRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCAmJiBoYXNDYXB0dXJlZFBhbikge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlclVwKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICBnZXN0dXJlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuY29uc3QgY2FsY0dlc3R1cmVEYXRhID0gKGRldGFpbCwgZXYpID0+IHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmV2WCA9IGRldGFpbC5jdXJyZW50WDtcclxuICAgIGNvbnN0IHByZXZZID0gZGV0YWlsLmN1cnJlbnRZO1xyXG4gICAgY29uc3QgcHJldlQgPSBkZXRhaWwudGltZVN0YW1wO1xyXG4gICAgdXBkYXRlRGV0YWlsKGV2LCBkZXRhaWwpO1xyXG4gICAgY29uc3QgY3VycmVudFggPSBkZXRhaWwuY3VycmVudFg7XHJcbiAgICBjb25zdCBjdXJyZW50WSA9IGRldGFpbC5jdXJyZW50WTtcclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRldGFpbC50aW1lU3RhbXAgPSBub3coZXYpO1xyXG4gICAgY29uc3QgdGltZURlbHRhID0gdGltZXN0YW1wIC0gcHJldlQ7XHJcbiAgICBpZiAodGltZURlbHRhID4gMCAmJiB0aW1lRGVsdGEgPCAxMDApIHtcclxuICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoY3VycmVudFggLSBwcmV2WCkgLyB0aW1lRGVsdGE7XHJcbiAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKGN1cnJlbnRZIC0gcHJldlkpIC8gdGltZURlbHRhO1xyXG4gICAgICAgIGRldGFpbC52ZWxvY2l0eVggPSB2ZWxvY2l0eVggKiAwLjcgKyBkZXRhaWwudmVsb2NpdHlYICogMC4zO1xyXG4gICAgICAgIGRldGFpbC52ZWxvY2l0eVkgPSB2ZWxvY2l0eVkgKiAwLjcgKyBkZXRhaWwudmVsb2NpdHlZICogMC4zO1xyXG4gICAgfVxyXG4gICAgZGV0YWlsLmRlbHRhWCA9IGN1cnJlbnRYIC0gZGV0YWlsLnN0YXJ0WDtcclxuICAgIGRldGFpbC5kZWx0YVkgPSBjdXJyZW50WSAtIGRldGFpbC5zdGFydFk7XHJcbiAgICBkZXRhaWwuZXZlbnQgPSBldjtcclxufTtcclxuY29uc3QgdXBkYXRlRGV0YWlsID0gKGV2LCBkZXRhaWwpID0+IHtcclxuICAgIC8vIGdldCBYIGNvb3JkaW5hdGVzIGZvciBlaXRoZXIgYSBtb3VzZSBjbGlja1xyXG4gICAgLy8gb3IgYSB0b3VjaCBkZXBlbmRpbmcgb24gdGhlIGdpdmVuIGV2ZW50XHJcbiAgICBsZXQgeCA9IDA7XHJcbiAgICBsZXQgeSA9IDA7XHJcbiAgICBpZiAoZXYpIHtcclxuICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2LmNoYW5nZWRUb3VjaGVzO1xyXG4gICAgICAgIGlmIChjaGFuZ2VkVG91Y2hlcyAmJiBjaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIHggPSB0b3VjaC5jbGllbnRYO1xyXG4gICAgICAgICAgICB5ID0gdG91Y2guY2xpZW50WTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXYucGFnZVggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB4ID0gZXYucGFnZVg7XHJcbiAgICAgICAgICAgIHkgPSBldi5wYWdlWTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZXRhaWwuY3VycmVudFggPSB4O1xyXG4gICAgZGV0YWlsLmN1cnJlbnRZID0geTtcclxufTtcclxuY29uc3Qgbm93ID0gKGV2KSA9PiB7XHJcbiAgICByZXR1cm4gZXYudGltZVN0YW1wIHx8IERhdGUubm93KCk7XHJcbn07XG5cbmV4cG9ydCB7IEdFU1RVUkVfQ09OVFJPTExFUiwgY3JlYXRlR2VzdHVyZSB9O1xuIiwiZXhwb3J0IHsgZyBhcyBnZXRQbGF0Zm9ybXMsIGkgYXMgaXNQbGF0Zm9ybSB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmV4cG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuZXhwb3J0IHsgY3JlYXRlR2VzdHVyZSB9IGZyb20gJy4vaW5kZXgtNjI0ZWVhNTguanMnO1xuZXhwb3J0IHsgYSBhcyBMSUZFQ1lDTEVfRElEX0VOVEVSLCBjIGFzIExJRkVDWUNMRV9ESURfTEVBVkUsIEwgYXMgTElGRUNZQ0xFX1dJTExfRU5URVIsIGIgYXMgTElGRUNZQ0xFX1dJTExfTEVBVkUsIGQgYXMgTElGRUNZQ0xFX1dJTExfVU5MT0FEIH0gZnJvbSAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xuZXhwb3J0IHsgbSBhcyBtZW51Q29udHJvbGxlciB9IGZyb20gJy4vaW5kZXgtMWU1OTQwZDUuanMnO1xuZXhwb3J0IHsgYiBhcyBhY3Rpb25TaGVldENvbnRyb2xsZXIsIGEgYXMgYWxlcnRDb250cm9sbGVyLCBsIGFzIGxvYWRpbmdDb250cm9sbGVyLCBtIGFzIG1vZGFsQ29udHJvbGxlciwgcCBhcyBwaWNrZXJDb250cm9sbGVyLCBjIGFzIHBvcG92ZXJDb250cm9sbGVyLCB0IGFzIHRvYXN0Q29udHJvbGxlciB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuXG5jb25zdCBzZXR1cENvbmZpZyA9IChjb25maWcpID0+IHtcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICAgIGNvbnN0IElvbmljID0gd2luLklvbmljO1xyXG4gICAgaWYgKElvbmljICYmIElvbmljLmNvbmZpZyAmJiBJb25pYy5jb25maWcuY29uc3RydWN0b3IubmFtZSAhPT0gJ09iamVjdCcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdpb25pYyBjb25maWcgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW4uSW9uaWMgPSB3aW4uSW9uaWMgfHwge307XHJcbiAgICB3aW4uSW9uaWMuY29uZmlnID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3aW4uSW9uaWMuY29uZmlnKSwgY29uZmlnKTtcclxuICAgIHJldHVybiB3aW4uSW9uaWMuY29uZmlnO1xyXG59O1xyXG5jb25zdCBnZXRNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gICAgY29uc3QgY29uZmlnID0gd2luICYmIHdpbi5Jb25pYyAmJiB3aW4uSW9uaWMuY29uZmlnO1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgIGlmIChjb25maWcubW9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLm1vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLmdldCgnbW9kZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnbWQnO1xyXG59O1xuXG5leHBvcnQgeyBnZXRNb2RlLCBzZXR1cENvbmZpZyB9O1xuIiwiaW1wb3J0IHsgYSBhcyBwYXRjaEVzbSwgZyBhcyBnbG9iYWxzLCBiIGFzIGJvb3RzdHJhcExhenkgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5cbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnRzID0gKHdpbiwgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gcGF0Y2hFc20oKS50aGVuKCgpID0+IHtcbiAgICBnbG9iYWxzKCk7XG4gICAgYm9vdHN0cmFwTGF6eShKU09OLnBhcnNlKFwiW1t7XFxcImlvc1xcXCI6XFxcImlvbi1zZWxlY3RfMy1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1zZWxlY3RfMy1tZFxcXCJ9LFtbMixcXFwiaW9uLXNlbGVjdC1wb3BvdmVyXFxcIix7XFxcImhlYWRlclxcXCI6WzFdLFxcXCJzdWJIZWFkZXJcXFwiOlsxLFxcXCJzdWItaGVhZGVyXFxcIl0sXFxcIm1lc3NhZ2VcXFwiOlsxXSxcXFwib3B0aW9uc1xcXCI6WzE2XX0sW1swLFxcXCJpb25TZWxlY3RcXFwiLFxcXCJvblNlbGVjdFxcXCJdXV0sWzEsXFxcImlvbi1zZWxlY3RcXFwiLHtcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwiY2FuY2VsVGV4dFxcXCI6WzEsXFxcImNhbmNlbC10ZXh0XFxcIl0sXFxcIm9rVGV4dFxcXCI6WzEsXFxcIm9rLXRleHRcXFwiXSxcXFwicGxhY2Vob2xkZXJcXFwiOlsxXSxcXFwibmFtZVxcXCI6WzFdLFxcXCJzZWxlY3RlZFRleHRcXFwiOlsxLFxcXCJzZWxlY3RlZC10ZXh0XFxcIl0sXFxcIm11bHRpcGxlXFxcIjpbNF0sXFxcImludGVyZmFjZVxcXCI6WzFdLFxcXCJpbnRlcmZhY2VPcHRpb25zXFxcIjpbOCxcXFwiaW50ZXJmYWNlLW9wdGlvbnNcXFwiXSxcXFwiY29tcGFyZVdpdGhcXFwiOlsxLFxcXCJjb21wYXJlLXdpdGhcXFwiXSxcXFwidmFsdWVcXFwiOlsxMDMyXSxcXFwiaXNFeHBhbmRlZFxcXCI6WzMyXSxcXFwib3BlblxcXCI6WzY0XX1dLFsxLFxcXCJpb24tc2VsZWN0LW9wdGlvblxcXCIse1xcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJzZWxlY3RlZFxcXCI6WzRdLFxcXCJ2YWx1ZVxcXCI6WzhdfV1dXSxbe1xcXCJpb3NcXFwiOlxcXCJpb24tbWVudV80LWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLW1lbnVfNC1tZFxcXCJ9LFtbMSxcXFwiaW9uLW1lbnUtYnV0dG9uXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcIm1lbnVcXFwiOlsxXSxcXFwiYXV0b0hpZGVcXFwiOls0LFxcXCJhdXRvLWhpZGVcXFwiXSxcXFwidHlwZVxcXCI6WzFdLFxcXCJ2aXNpYmxlXFxcIjpbMzJdfSxbWzMyLFxcXCJpb25NZW51Q2hhbmdlXFxcIixcXFwidmlzaWJpbGl0eUNoYW5nZWRcXFwiXSxbMzIsXFxcImlvblNwbGl0UGFuZVZpc2libGVcXFwiLFxcXCJ2aXNpYmlsaXR5Q2hhbmdlZFxcXCJdXV0sWzEsXFxcImlvbi1tZW51XFxcIix7XFxcImNvbnRlbnRJZFxcXCI6WzEsXFxcImNvbnRlbnQtaWRcXFwiXSxcXFwibWVudUlkXFxcIjpbMSxcXFwibWVudS1pZFxcXCJdLFxcXCJ0eXBlXFxcIjpbMTAyNV0sXFxcImRpc2FibGVkXFxcIjpbMTAyOF0sXFxcInNpZGVcXFwiOls1MTNdLFxcXCJzd2lwZUdlc3R1cmVcXFwiOls0LFxcXCJzd2lwZS1nZXN0dXJlXFxcIl0sXFxcIm1heEVkZ2VTdGFydFxcXCI6WzIsXFxcIm1heC1lZGdlLXN0YXJ0XFxcIl0sXFxcImlzUGFuZVZpc2libGVcXFwiOlszMl0sXFxcImlzRW5kU2lkZVxcXCI6WzMyXSxcXFwiaXNPcGVuXFxcIjpbNjRdLFxcXCJpc0FjdGl2ZVxcXCI6WzY0XSxcXFwib3BlblxcXCI6WzY0XSxcXFwiY2xvc2VcXFwiOls2NF0sXFxcInRvZ2dsZVxcXCI6WzY0XSxcXFwic2V0T3BlblxcXCI6WzY0XX0sW1szMixcXFwiaW9uU3BsaXRQYW5lVmlzaWJsZVxcXCIsXFxcIm9uU3BsaXRQYW5lQ2hhbmdlZFxcXCJdLFsyLFxcXCJjbGlja1xcXCIsXFxcIm9uQmFja2Ryb3BDbGlja1xcXCJdXV0sWzAsXFxcImlvbi1tZW51LWNvbnRyb2xsZXJcXFwiLHtcXFwib3BlblxcXCI6WzY0XSxcXFwiY2xvc2VcXFwiOls2NF0sXFxcInRvZ2dsZVxcXCI6WzY0XSxcXFwiZW5hYmxlXFxcIjpbNjRdLFxcXCJzd2lwZUdlc3R1cmVcXFwiOls2NF0sXFxcImlzT3BlblxcXCI6WzY0XSxcXFwiaXNFbmFibGVkXFxcIjpbNjRdLFxcXCJnZXRcXFwiOls2NF0sXFxcImdldE9wZW5cXFwiOls2NF0sXFxcImdldE1lbnVzXFxcIjpbNjRdLFxcXCJpc0FuaW1hdGluZ1xcXCI6WzY0XSxcXFwicmVnaXN0ZXJBbmltYXRpb25cXFwiOls2NF19XSxbMSxcXFwiaW9uLW1lbnUtdG9nZ2xlXFxcIix7XFxcIm1lbnVcXFwiOlsxXSxcXFwiYXV0b0hpZGVcXFwiOls0LFxcXCJhdXRvLWhpZGVcXFwiXSxcXFwidmlzaWJsZVxcXCI6WzMyXX0sW1szMixcXFwiaW9uTWVudUNoYW5nZVxcXCIsXFxcInZpc2liaWxpdHlDaGFuZ2VkXFxcIl0sWzMyLFxcXCJpb25TcGxpdFBhbmVWaXNpYmxlXFxcIixcXFwidmlzaWJpbGl0eUNoYW5nZWRcXFwiXV1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLWFjdGlvbi1zaGVldC1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1hY3Rpb24tc2hlZXQtbWRcXFwifSxbWzIsXFxcImlvbi1hY3Rpb24tc2hlZXRcXFwiLHtcXFwib3ZlcmxheUluZGV4XFxcIjpbMixcXFwib3ZlcmxheS1pbmRleFxcXCJdLFxcXCJrZXlib2FyZENsb3NlXFxcIjpbNCxcXFwia2V5Ym9hcmQtY2xvc2VcXFwiXSxcXFwiZW50ZXJBbmltYXRpb25cXFwiOlsxNl0sXFxcImxlYXZlQW5pbWF0aW9uXFxcIjpbMTZdLFxcXCJidXR0b25zXFxcIjpbMTZdLFxcXCJjc3NDbGFzc1xcXCI6WzEsXFxcImNzcy1jbGFzc1xcXCJdLFxcXCJiYWNrZHJvcERpc21pc3NcXFwiOls0LFxcXCJiYWNrZHJvcC1kaXNtaXNzXFxcIl0sXFxcImhlYWRlclxcXCI6WzFdLFxcXCJzdWJIZWFkZXJcXFwiOlsxLFxcXCJzdWItaGVhZGVyXFxcIl0sXFxcInRyYW5zbHVjZW50XFxcIjpbNF0sXFxcImFuaW1hdGVkXFxcIjpbNF0sXFxcInByZXNlbnRcXFwiOls2NF0sXFxcImRpc21pc3NcXFwiOls2NF0sXFxcIm9uRGlkRGlzbWlzc1xcXCI6WzY0XSxcXFwib25XaWxsRGlzbWlzc1xcXCI6WzY0XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLWZhYl8zLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLWZhYl8zLW1kXFxcIn0sW1sxLFxcXCJpb24tZmFiLWJ1dHRvblxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJhY3RpdmF0ZWRcXFwiOls0XSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwiZG93bmxvYWRcXFwiOlsxXSxcXFwiaHJlZlxcXCI6WzFdLFxcXCJyZWxcXFwiOlsxXSxcXFwicm91dGVyRGlyZWN0aW9uXFxcIjpbMSxcXFwicm91dGVyLWRpcmVjdGlvblxcXCJdLFxcXCJ0YXJnZXRcXFwiOlsxXSxcXFwic2hvd1xcXCI6WzRdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJ0eXBlXFxcIjpbMV0sXFxcInNpemVcXFwiOlsxXX1dLFsxLFxcXCJpb24tZmFiXFxcIix7XFxcImhvcml6b250YWxcXFwiOlsxXSxcXFwidmVydGljYWxcXFwiOlsxXSxcXFwiZWRnZVxcXCI6WzRdLFxcXCJhY3RpdmF0ZWRcXFwiOlsxMDI4XSxcXFwiY2xvc2VcXFwiOls2NF19XSxbMSxcXFwiaW9uLWZhYi1saXN0XFxcIix7XFxcImFjdGl2YXRlZFxcXCI6WzRdLFxcXCJzaWRlXFxcIjpbMV19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1yZWZyZXNoZXJfMi1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1yZWZyZXNoZXJfMi1tZFxcXCJ9LFtbMCxcXFwiaW9uLXJlZnJlc2hlci1jb250ZW50XFxcIix7XFxcInB1bGxpbmdJY29uXFxcIjpbMTAyNSxcXFwicHVsbGluZy1pY29uXFxcIl0sXFxcInB1bGxpbmdUZXh0XFxcIjpbMSxcXFwicHVsbGluZy10ZXh0XFxcIl0sXFxcInJlZnJlc2hpbmdTcGlubmVyXFxcIjpbMTAyNSxcXFwicmVmcmVzaGluZy1zcGlubmVyXFxcIl0sXFxcInJlZnJlc2hpbmdUZXh0XFxcIjpbMSxcXFwicmVmcmVzaGluZy10ZXh0XFxcIl19XSxbMCxcXFwiaW9uLXJlZnJlc2hlclxcXCIse1xcXCJwdWxsTWluXFxcIjpbMixcXFwicHVsbC1taW5cXFwiXSxcXFwicHVsbE1heFxcXCI6WzIsXFxcInB1bGwtbWF4XFxcIl0sXFxcImNsb3NlRHVyYXRpb25cXFwiOlsxLFxcXCJjbG9zZS1kdXJhdGlvblxcXCJdLFxcXCJzbmFwYmFja0R1cmF0aW9uXFxcIjpbMSxcXFwic25hcGJhY2stZHVyYXRpb25cXFwiXSxcXFwicHVsbEZhY3RvclxcXCI6WzIsXFxcInB1bGwtZmFjdG9yXFxcIl0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcInN0YXRlXFxcIjpbMzJdLFxcXCJjb21wbGV0ZVxcXCI6WzY0XSxcXFwiY2FuY2VsXFxcIjpbNjRdLFxcXCJnZXRQcm9ncmVzc1xcXCI6WzY0XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLWJhY2tkcm9wLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLWJhY2tkcm9wLW1kXFxcIn0sW1sxLFxcXCJpb24tYmFja2Ryb3BcXFwiLHtcXFwidmlzaWJsZVxcXCI6WzRdLFxcXCJ0YXBwYWJsZVxcXCI6WzRdLFxcXCJzdG9wUHJvcGFnYXRpb25cXFwiOls0LFxcXCJzdG9wLXByb3BhZ2F0aW9uXFxcIl19LFtbMixcXFwidG91Y2hzdGFydFxcXCIsXFxcIm9uVG91Y2hTdGFydFxcXCJdLFsyLFxcXCJjbGlja1xcXCIsXFxcIm9uTW91c2VEb3duXFxcIl0sWzIsXFxcIm1vdXNlZG93blxcXCIsXFxcIm9uTW91c2VEb3duXFxcIl1dXV1dLFtcXFwiaW9uLXJpcHBsZS1lZmZlY3RcXFwiLFtbMSxcXFwiaW9uLXJpcHBsZS1lZmZlY3RcXFwiLHtcXFwidHlwZVxcXCI6WzFdLFxcXCJhZGRSaXBwbGVcXFwiOls2NF19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1hbGVydC1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1hbGVydC1tZFxcXCJ9LFtbMixcXFwiaW9uLWFsZXJ0XFxcIix7XFxcIm92ZXJsYXlJbmRleFxcXCI6WzIsXFxcIm92ZXJsYXktaW5kZXhcXFwiXSxcXFwia2V5Ym9hcmRDbG9zZVxcXCI6WzQsXFxcImtleWJvYXJkLWNsb3NlXFxcIl0sXFxcImVudGVyQW5pbWF0aW9uXFxcIjpbMTZdLFxcXCJsZWF2ZUFuaW1hdGlvblxcXCI6WzE2XSxcXFwiY3NzQ2xhc3NcXFwiOlsxLFxcXCJjc3MtY2xhc3NcXFwiXSxcXFwiaGVhZGVyXFxcIjpbMV0sXFxcInN1YkhlYWRlclxcXCI6WzEsXFxcInN1Yi1oZWFkZXJcXFwiXSxcXFwibWVzc2FnZVxcXCI6WzFdLFxcXCJidXR0b25zXFxcIjpbMTZdLFxcXCJpbnB1dHNcXFwiOlsxMDQwXSxcXFwiYmFja2Ryb3BEaXNtaXNzXFxcIjpbNCxcXFwiYmFja2Ryb3AtZGlzbWlzc1xcXCJdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJhbmltYXRlZFxcXCI6WzRdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1iYWNrLWJ1dHRvbi1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1iYWNrLWJ1dHRvbi1tZFxcXCJ9LFtbMixcXFwiaW9uLWJhY2stYnV0dG9uXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcImRlZmF1bHRIcmVmXFxcIjpbMSxcXFwiZGVmYXVsdC1ocmVmXFxcIl0sXFxcImRpc2FibGVkXFxcIjpbNTE2XSxcXFwiaWNvblxcXCI6WzFdLFxcXCJ0ZXh0XFxcIjpbMV0sXFxcInR5cGVcXFwiOlsxXX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLWxvYWRpbmctaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tbG9hZGluZy1tZFxcXCJ9LFtbMixcXFwiaW9uLWxvYWRpbmdcXFwiLHtcXFwib3ZlcmxheUluZGV4XFxcIjpbMixcXFwib3ZlcmxheS1pbmRleFxcXCJdLFxcXCJrZXlib2FyZENsb3NlXFxcIjpbNCxcXFwia2V5Ym9hcmQtY2xvc2VcXFwiXSxcXFwiZW50ZXJBbmltYXRpb25cXFwiOlsxNl0sXFxcImxlYXZlQW5pbWF0aW9uXFxcIjpbMTZdLFxcXCJtZXNzYWdlXFxcIjpbMV0sXFxcImNzc0NsYXNzXFxcIjpbMSxcXFwiY3NzLWNsYXNzXFxcIl0sXFxcImR1cmF0aW9uXFxcIjpbMl0sXFxcImJhY2tkcm9wRGlzbWlzc1xcXCI6WzQsXFxcImJhY2tkcm9wLWRpc21pc3NcXFwiXSxcXFwic2hvd0JhY2tkcm9wXFxcIjpbNCxcXFwic2hvdy1iYWNrZHJvcFxcXCJdLFxcXCJzcGlubmVyXFxcIjpbMTAyNV0sXFxcInRyYW5zbHVjZW50XFxcIjpbNF0sXFxcImFuaW1hdGVkXFxcIjpbNF0sXFxcInByZXNlbnRcXFwiOls2NF0sXFxcImRpc21pc3NcXFwiOls2NF0sXFxcIm9uRGlkRGlzbWlzc1xcXCI6WzY0XSxcXFwib25XaWxsRGlzbWlzc1xcXCI6WzY0XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLXRvYXN0LWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLXRvYXN0LW1kXFxcIn0sW1sxLFxcXCJpb24tdG9hc3RcXFwiLHtcXFwib3ZlcmxheUluZGV4XFxcIjpbMixcXFwib3ZlcmxheS1pbmRleFxcXCJdLFxcXCJjb2xvclxcXCI6WzFdLFxcXCJlbnRlckFuaW1hdGlvblxcXCI6WzE2XSxcXFwibGVhdmVBbmltYXRpb25cXFwiOlsxNl0sXFxcImNzc0NsYXNzXFxcIjpbMSxcXFwiY3NzLWNsYXNzXFxcIl0sXFxcImR1cmF0aW9uXFxcIjpbMl0sXFxcImhlYWRlclxcXCI6WzFdLFxcXCJtZXNzYWdlXFxcIjpbMV0sXFxcImtleWJvYXJkQ2xvc2VcXFwiOls0LFxcXCJrZXlib2FyZC1jbG9zZVxcXCJdLFxcXCJwb3NpdGlvblxcXCI6WzFdLFxcXCJzaG93Q2xvc2VCdXR0b25cXFwiOls0LFxcXCJzaG93LWNsb3NlLWJ1dHRvblxcXCJdLFxcXCJjbG9zZUJ1dHRvblRleHRcXFwiOlsxLFxcXCJjbG9zZS1idXR0b24tdGV4dFxcXCJdLFxcXCJidXR0b25zXFxcIjpbMTZdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJhbmltYXRlZFxcXCI6WzRdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1jYXJkXzUtaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tY2FyZF81LW1kXFxcIn0sW1s2LFxcXCJpb24tY2FyZFxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJidXR0b25cXFwiOls0XSxcXFwidHlwZVxcXCI6WzFdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJkb3dubG9hZFxcXCI6WzFdLFxcXCJocmVmXFxcIjpbMV0sXFxcInJlbFxcXCI6WzFdLFxcXCJyb3V0ZXJEaXJlY3Rpb25cXFwiOlsxLFxcXCJyb3V0ZXItZGlyZWN0aW9uXFxcIl0sXFxcInRhcmdldFxcXCI6WzFdfV0sWzAsXFxcImlvbi1jYXJkLWNvbnRlbnRcXFwiXSxbMSxcXFwiaW9uLWNhcmQtaGVhZGVyXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcInRyYW5zbHVjZW50XFxcIjpbNF19XSxbMSxcXFwiaW9uLWNhcmQtc3VidGl0bGVcXFwiLHtcXFwiY29sb3JcXFwiOlsxXX1dLFsxLFxcXCJpb24tY2FyZC10aXRsZVxcXCIse1xcXCJjb2xvclxcXCI6WzFdfV1dXSxbe1xcXCJpb3NcXFwiOlxcXCJpb24taXRlbS1vcHRpb25fMy1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1pdGVtLW9wdGlvbl8zLW1kXFxcIn0sW1sxLFxcXCJpb24taXRlbS1vcHRpb25cXFwiLHtcXFwiY29sb3JcXFwiOlsxXSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwiZG93bmxvYWRcXFwiOlsxXSxcXFwiZXhwYW5kYWJsZVxcXCI6WzRdLFxcXCJocmVmXFxcIjpbMV0sXFxcInJlbFxcXCI6WzFdLFxcXCJ0YXJnZXRcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdfV0sWzAsXFxcImlvbi1pdGVtLW9wdGlvbnNcXFwiLHtcXFwic2lkZVxcXCI6WzFdLFxcXCJmaXJlU3dpcGVFdmVudFxcXCI6WzY0XX1dLFswLFxcXCJpb24taXRlbS1zbGlkaW5nXFxcIix7XFxcImRpc2FibGVkXFxcIjpbNF0sXFxcInN0YXRlXFxcIjpbMzJdLFxcXCJnZXRPcGVuQW1vdW50XFxcIjpbNjRdLFxcXCJnZXRTbGlkaW5nUmF0aW9cXFwiOls2NF0sXFxcIm9wZW5cXFwiOls2NF0sXFxcImNsb3NlXFxcIjpbNjRdLFxcXCJjbG9zZU9wZW5lZFxcXCI6WzY0XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLWluZmluaXRlLXNjcm9sbF8yLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLWluZmluaXRlLXNjcm9sbF8yLW1kXFxcIn0sW1swLFxcXCJpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnRcXFwiLHtcXFwibG9hZGluZ1NwaW5uZXJcXFwiOlsxMDI1LFxcXCJsb2FkaW5nLXNwaW5uZXJcXFwiXSxcXFwibG9hZGluZ1RleHRcXFwiOlsxLFxcXCJsb2FkaW5nLXRleHRcXFwiXX1dLFswLFxcXCJpb24taW5maW5pdGUtc2Nyb2xsXFxcIix7XFxcInRocmVzaG9sZFxcXCI6WzFdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJwb3NpdGlvblxcXCI6WzFdLFxcXCJpc0xvYWRpbmdcXFwiOlszMl0sXFxcImNvbXBsZXRlXFxcIjpbNjRdfV1dXSxbe1xcXCJpb3NcXFwiOlxcXCJpb24tcmVvcmRlcl8yLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLXJlb3JkZXJfMi1tZFxcXCJ9LFtbMSxcXFwiaW9uLXJlb3JkZXJcXFwiLG51bGwsW1syLFxcXCJjbGlja1xcXCIsXFxcIm9uQ2xpY2tcXFwiXV1dLFswLFxcXCJpb24tcmVvcmRlci1ncm91cFxcXCIse1xcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJzdGF0ZVxcXCI6WzMyXSxcXFwiY29tcGxldGVcXFwiOls2NF19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1zZWdtZW50XzItaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tc2VnbWVudF8yLW1kXFxcIn0sW1sxLFxcXCJpb24tc2VnbWVudC1idXR0b25cXFwiLHtcXFwiY2hlY2tlZFxcXCI6WzEwMjhdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJsYXlvdXRcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdLFxcXCJ2YWx1ZVxcXCI6WzFdfV0sWzIsXFxcImlvbi1zZWdtZW50XFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcInNjcm9sbGFibGVcXFwiOls0XSxcXFwidmFsdWVcXFwiOlsxMDI1XX0sW1swLFxcXCJpb25TZWxlY3RcXFwiLFxcXCJzZWdtZW50Q2xpY2tcXFwiXV1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLXRhYi1iYXJfMi1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi10YWItYmFyXzItbWRcXFwifSxbWzEsXFxcImlvbi10YWItYnV0dG9uXFxcIix7XFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImRvd25sb2FkXFxcIjpbMV0sXFxcImhyZWZcXFwiOlsxXSxcXFwicmVsXFxcIjpbMV0sXFxcImxheW91dFxcXCI6WzEwMjVdLFxcXCJzZWxlY3RlZFxcXCI6WzEwMjhdLFxcXCJ0YWJcXFwiOlsxXSxcXFwidGFyZ2V0XFxcIjpbMV19LFtbMTYsXFxcImlvblRhYkJhckNoYW5nZWRcXFwiLFxcXCJvblRhYkJhckNoYW5nZWRcXFwiXV1dLFsxLFxcXCJpb24tdGFiLWJhclxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJzZWxlY3RlZFRhYlxcXCI6WzEsXFxcInNlbGVjdGVkLXRhYlxcXCJdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJrZXlib2FyZFZpc2libGVcXFwiOlszMl19LFtbOCxcXFwia2V5Ym9hcmRXaWxsSGlkZVxcXCIsXFxcIm9uS2V5Ym9hcmRXaWxsSGlkZVxcXCJdLFs4LFxcXCJrZXlib2FyZFdpbGxTaG93XFxcIixcXFwib25LZXlib2FyZFdpbGxTaG93XFxcIl1dXV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1jaGlwLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLWNoaXAtbWRcXFwifSxbWzEsXFxcImlvbi1jaGlwXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcIm91dGxpbmVcXFwiOls0XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLW1vZGFsLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLW1vZGFsLW1kXFxcIn0sW1syLFxcXCJpb24tbW9kYWxcXFwiLHtcXFwib3ZlcmxheUluZGV4XFxcIjpbMixcXFwib3ZlcmxheS1pbmRleFxcXCJdLFxcXCJkZWxlZ2F0ZVxcXCI6WzE2XSxcXFwia2V5Ym9hcmRDbG9zZVxcXCI6WzQsXFxcImtleWJvYXJkLWNsb3NlXFxcIl0sXFxcImVudGVyQW5pbWF0aW9uXFxcIjpbMTZdLFxcXCJsZWF2ZUFuaW1hdGlvblxcXCI6WzE2XSxcXFwiY29tcG9uZW50XFxcIjpbMV0sXFxcImNvbXBvbmVudFByb3BzXFxcIjpbMTZdLFxcXCJjc3NDbGFzc1xcXCI6WzEsXFxcImNzcy1jbGFzc1xcXCJdLFxcXCJiYWNrZHJvcERpc21pc3NcXFwiOls0LFxcXCJiYWNrZHJvcC1kaXNtaXNzXFxcIl0sXFxcInNob3dCYWNrZHJvcFxcXCI6WzQsXFxcInNob3ctYmFja2Ryb3BcXFwiXSxcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwicHJlc2VudFxcXCI6WzY0XSxcXFwiZGlzbWlzc1xcXCI6WzY0XSxcXFwib25EaWREaXNtaXNzXFxcIjpbNjRdLFxcXCJvbldpbGxEaXNtaXNzXFxcIjpbNjRdfV1dXSxbe1xcXCJpb3NcXFwiOlxcXCJpb24tcG9wb3Zlci1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1wb3BvdmVyLW1kXFxcIn0sW1syLFxcXCJpb24tcG9wb3ZlclxcXCIse1xcXCJkZWxlZ2F0ZVxcXCI6WzE2XSxcXFwib3ZlcmxheUluZGV4XFxcIjpbMixcXFwib3ZlcmxheS1pbmRleFxcXCJdLFxcXCJlbnRlckFuaW1hdGlvblxcXCI6WzE2XSxcXFwibGVhdmVBbmltYXRpb25cXFwiOlsxNl0sXFxcImNvbXBvbmVudFxcXCI6WzFdLFxcXCJjb21wb25lbnRQcm9wc1xcXCI6WzE2XSxcXFwia2V5Ym9hcmRDbG9zZVxcXCI6WzQsXFxcImtleWJvYXJkLWNsb3NlXFxcIl0sXFxcImNzc0NsYXNzXFxcIjpbMSxcXFwiY3NzLWNsYXNzXFxcIl0sXFxcImJhY2tkcm9wRGlzbWlzc1xcXCI6WzQsXFxcImJhY2tkcm9wLWRpc21pc3NcXFwiXSxcXFwiZXZlbnRcXFwiOls4XSxcXFwic2hvd0JhY2tkcm9wXFxcIjpbNCxcXFwic2hvdy1iYWNrZHJvcFxcXCJdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJhbmltYXRlZFxcXCI6WzRdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1zZWFyY2hiYXItaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tc2VhcmNoYmFyLW1kXFxcIn0sW1syLFxcXCJpb24tc2VhcmNoYmFyXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcImFuaW1hdGVkXFxcIjpbNF0sXFxcImF1dG9jb21wbGV0ZVxcXCI6WzFdLFxcXCJhdXRvY29ycmVjdFxcXCI6WzFdLFxcXCJjYW5jZWxCdXR0b25JY29uXFxcIjpbMSxcXFwiY2FuY2VsLWJ1dHRvbi1pY29uXFxcIl0sXFxcImNhbmNlbEJ1dHRvblRleHRcXFwiOlsxLFxcXCJjYW5jZWwtYnV0dG9uLXRleHRcXFwiXSxcXFwiY2xlYXJJY29uXFxcIjpbMSxcXFwiY2xlYXItaWNvblxcXCJdLFxcXCJkZWJvdW5jZVxcXCI6WzJdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJpbnB1dG1vZGVcXFwiOlsxXSxcXFwicGxhY2Vob2xkZXJcXFwiOlsxXSxcXFwic2VhcmNoSWNvblxcXCI6WzEsXFxcInNlYXJjaC1pY29uXFxcIl0sXFxcInNob3dDYW5jZWxCdXR0b25cXFwiOls4LFxcXCJzaG93LWNhbmNlbC1idXR0b25cXFwiXSxcXFwic3BlbGxjaGVja1xcXCI6WzRdLFxcXCJ0eXBlXFxcIjpbMV0sXFxcInZhbHVlXFxcIjpbMTAyNV0sXFxcImZvY3VzZWRcXFwiOlszMl0sXFxcIm5vQW5pbWF0ZVxcXCI6WzMyXSxcXFwic2V0Rm9jdXNcXFwiOls2NF0sXFxcImdldElucHV0RWxlbWVudFxcXCI6WzY0XX1dXV0sW1xcXCJpb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXJfOFxcXCIsW1swLFxcXCJpb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXJcXFwiLHtcXFwiY3JlYXRlXFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJnZXRUb3BcXFwiOls2NF19XSxbMCxcXFwiaW9uLWFsZXJ0LWNvbnRyb2xsZXJcXFwiLHtcXFwiY3JlYXRlXFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJnZXRUb3BcXFwiOls2NF19XSxbMSxcXFwiaW9uLWFuY2hvclxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJocmVmXFxcIjpbMV0sXFxcInJlbFxcXCI6WzFdLFxcXCJyb3V0ZXJEaXJlY3Rpb25cXFwiOlsxLFxcXCJyb3V0ZXItZGlyZWN0aW9uXFxcIl19XSxbMCxcXFwiaW9uLWxvYWRpbmctY29udHJvbGxlclxcXCIse1xcXCJjcmVhdGVcXFwiOls2NF0sXFxcImRpc21pc3NcXFwiOls2NF0sXFxcImdldFRvcFxcXCI6WzY0XX1dLFswLFxcXCJpb24tbW9kYWwtY29udHJvbGxlclxcXCIse1xcXCJjcmVhdGVcXFwiOls2NF0sXFxcImRpc21pc3NcXFwiOls2NF0sXFxcImdldFRvcFxcXCI6WzY0XX1dLFswLFxcXCJpb24tcGlja2VyLWNvbnRyb2xsZXJcXFwiLHtcXFwiY3JlYXRlXFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJnZXRUb3BcXFwiOls2NF19XSxbMCxcXFwiaW9uLXBvcG92ZXItY29udHJvbGxlclxcXCIse1xcXCJjcmVhdGVcXFwiOls2NF0sXFxcImRpc21pc3NcXFwiOls2NF0sXFxcImdldFRvcFxcXCI6WzY0XX1dLFswLFxcXCJpb24tdG9hc3QtY29udHJvbGxlclxcXCIse1xcXCJjcmVhdGVcXFwiOls2NF0sXFxcImRpc21pc3NcXFwiOls2NF0sXFxcImdldFRvcFxcXCI6WzY0XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLWFwcF84LWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLWFwcF84LW1kXFxcIn0sW1swLFxcXCJpb24tYXBwXFxcIl0sWzIsXFxcImlvbi1idXR0b25zXFxcIix7XFxcImNvbGxhcHNlXFxcIjpbNF19XSxbMSxcXFwiaW9uLWNvbnRlbnRcXFwiLHtcXFwiY29sb3JcXFwiOlsxXSxcXFwiZnVsbHNjcmVlblxcXCI6WzRdLFxcXCJmb3JjZU92ZXJzY3JvbGxcXFwiOlsxMDI4LFxcXCJmb3JjZS1vdmVyc2Nyb2xsXFxcIl0sXFxcInNjcm9sbFhcXFwiOls0LFxcXCJzY3JvbGwteFxcXCJdLFxcXCJzY3JvbGxZXFxcIjpbNCxcXFwic2Nyb2xsLXlcXFwiXSxcXFwic2Nyb2xsRXZlbnRzXFxcIjpbNCxcXFwic2Nyb2xsLWV2ZW50c1xcXCJdLFxcXCJnZXRTY3JvbGxFbGVtZW50XFxcIjpbNjRdLFxcXCJzY3JvbGxUb1RvcFxcXCI6WzY0XSxcXFwic2Nyb2xsVG9Cb3R0b21cXFwiOls2NF0sXFxcInNjcm9sbEJ5UG9pbnRcXFwiOls2NF0sXFxcInNjcm9sbFRvUG9pbnRcXFwiOls2NF19LFtbMixcXFwiY2xpY2tcXFwiLFxcXCJvbkNsaWNrXFxcIl1dXSxbMCxcXFwiaW9uLWZvb3RlclxcXCIse1xcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdfV0sWzAsXFxcImlvbi1oZWFkZXJcXFwiLHtcXFwiY29sbGFwc2VcXFwiOlsxXSxcXFwidHJhbnNsdWNlbnRcXFwiOls0XX1dLFsxLFxcXCJpb24tcm91dGVyLW91dGxldFxcXCIse1xcXCJtb2RlXFxcIjpbMTAyNV0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJhbmltYXRlZFxcXCI6WzRdLFxcXCJhbmltYXRpb25cXFwiOlsxNl0sXFxcInN3aXBlSGFuZGxlclxcXCI6WzE2XSxcXFwiY29tbWl0XFxcIjpbNjRdLFxcXCJzZXRSb3V0ZUlkXFxcIjpbNjRdLFxcXCJnZXRSb3V0ZUlkXFxcIjpbNjRdfV0sWzEsXFxcImlvbi10aXRsZVxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJzaXplXFxcIjpbMV19XSxbMSxcXFwiaW9uLXRvb2xiYXJcXFwiLHtcXFwiY29sb3JcXFwiOlsxXX0sW1swLFxcXCJpb25TdHlsZVxcXCIsXFxcImNoaWxkcmVuU3R5bGVcXFwiXV1dXV0sW1xcXCJpb24tbmF2XzVcXFwiLFtbMSxcXFwiaW9uLW5hdlxcXCIse1xcXCJkZWxlZ2F0ZVxcXCI6WzE2XSxcXFwic3dpcGVHZXN0dXJlXFxcIjpbMTAyOCxcXFwic3dpcGUtZ2VzdHVyZVxcXCJdLFxcXCJhbmltYXRlZFxcXCI6WzRdLFxcXCJhbmltYXRpb25cXFwiOlsxNl0sXFxcInJvb3RQYXJhbXNcXFwiOlsxNl0sXFxcInJvb3RcXFwiOlsxXSxcXFwicHVzaFxcXCI6WzY0XSxcXFwiaW5zZXJ0XFxcIjpbNjRdLFxcXCJpbnNlcnRQYWdlc1xcXCI6WzY0XSxcXFwicG9wXFxcIjpbNjRdLFxcXCJwb3BUb1xcXCI6WzY0XSxcXFwicG9wVG9Sb290XFxcIjpbNjRdLFxcXCJyZW1vdmVJbmRleFxcXCI6WzY0XSxcXFwic2V0Um9vdFxcXCI6WzY0XSxcXFwic2V0UGFnZXNcXFwiOls2NF0sXFxcInNldFJvdXRlSWRcXFwiOls2NF0sXFxcImdldFJvdXRlSWRcXFwiOls2NF0sXFxcImdldEFjdGl2ZVxcXCI6WzY0XSxcXFwiZ2V0QnlJbmRleFxcXCI6WzY0XSxcXFwiY2FuR29CYWNrXFxcIjpbNjRdLFxcXCJnZXRQcmV2aW91c1xcXCI6WzY0XX1dLFswLFxcXCJpb24tbmF2LWxpbmtcXFwiLHtcXFwiY29tcG9uZW50XFxcIjpbMV0sXFxcImNvbXBvbmVudFByb3BzXFxcIjpbMTZdLFxcXCJyb3V0ZXJEaXJlY3Rpb25cXFwiOlsxLFxcXCJyb3V0ZXItZGlyZWN0aW9uXFxcIl19XSxbMCxcXFwiaW9uLW5hdi1wb3BcXFwiXSxbMCxcXFwiaW9uLW5hdi1wdXNoXFxcIix7XFxcImNvbXBvbmVudFxcXCI6WzFdLFxcXCJjb21wb25lbnRQcm9wc1xcXCI6WzE2XX1dLFswLFxcXCJpb24tbmF2LXNldC1yb290XFxcIix7XFxcImNvbXBvbmVudFxcXCI6WzFdLFxcXCJjb21wb25lbnRQcm9wc1xcXCI6WzE2XX1dXV0sW1xcXCJpb24tcm91dGVfNFxcXCIsW1swLFxcXCJpb24tcm91dGVcXFwiLHtcXFwidXJsXFxcIjpbMV0sXFxcImNvbXBvbmVudFxcXCI6WzFdLFxcXCJjb21wb25lbnRQcm9wc1xcXCI6WzE2XX1dLFswLFxcXCJpb24tcm91dGUtcmVkaXJlY3RcXFwiLHtcXFwiZnJvbVxcXCI6WzFdLFxcXCJ0b1xcXCI6WzFdfV0sWzAsXFxcImlvbi1yb3V0ZXJcXFwiLHtcXFwicm9vdFxcXCI6WzFdLFxcXCJ1c2VIYXNoXFxcIjpbNCxcXFwidXNlLWhhc2hcXFwiXSxcXFwicHVzaFxcXCI6WzY0XSxcXFwiYmFja1xcXCI6WzY0XSxcXFwicHJpbnREZWJ1Z1xcXCI6WzY0XSxcXFwibmF2Q2hhbmdlZFxcXCI6WzY0XX0sW1s4LFxcXCJwb3BzdGF0ZVxcXCIsXFxcIm9uUG9wU3RhdGVcXFwiXSxbNCxcXFwiaW9uQmFja0J1dHRvblxcXCIsXFxcIm9uQmFja0J1dHRvblxcXCJdXV0sWzEsXFxcImlvbi1yb3V0ZXItbGlua1xcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJocmVmXFxcIjpbMV0sXFxcInJlbFxcXCI6WzFdLFxcXCJyb3V0ZXJEaXJlY3Rpb25cXFwiOlsxLFxcXCJyb3V0ZXItZGlyZWN0aW9uXFxcIl0sXFxcInRhcmdldFxcXCI6WzFdfV1dXSxbe1xcXCJpb3NcXFwiOlxcXCJpb24tYXZhdGFyXzMtaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tYXZhdGFyXzMtbWRcXFwifSxbWzEsXFxcImlvbi1hdmF0YXJcXFwiXSxbMSxcXFwiaW9uLWJhZGdlXFxcIix7XFxcImNvbG9yXFxcIjpbMV19XSxbMSxcXFwiaW9uLXRodW1ibmFpbFxcXCJdXV0sW1xcXCJpb24tY29sXzNcXFwiLFtbMSxcXFwiaW9uLWNvbFxcXCIse1xcXCJvZmZzZXRcXFwiOlsxXSxcXFwib2Zmc2V0WHNcXFwiOlsxLFxcXCJvZmZzZXQteHNcXFwiXSxcXFwib2Zmc2V0U21cXFwiOlsxLFxcXCJvZmZzZXQtc21cXFwiXSxcXFwib2Zmc2V0TWRcXFwiOlsxLFxcXCJvZmZzZXQtbWRcXFwiXSxcXFwib2Zmc2V0TGdcXFwiOlsxLFxcXCJvZmZzZXQtbGdcXFwiXSxcXFwib2Zmc2V0WGxcXFwiOlsxLFxcXCJvZmZzZXQteGxcXFwiXSxcXFwicHVsbFxcXCI6WzFdLFxcXCJwdWxsWHNcXFwiOlsxLFxcXCJwdWxsLXhzXFxcIl0sXFxcInB1bGxTbVxcXCI6WzEsXFxcInB1bGwtc21cXFwiXSxcXFwicHVsbE1kXFxcIjpbMSxcXFwicHVsbC1tZFxcXCJdLFxcXCJwdWxsTGdcXFwiOlsxLFxcXCJwdWxsLWxnXFxcIl0sXFxcInB1bGxYbFxcXCI6WzEsXFxcInB1bGwteGxcXFwiXSxcXFwicHVzaFxcXCI6WzFdLFxcXCJwdXNoWHNcXFwiOlsxLFxcXCJwdXNoLXhzXFxcIl0sXFxcInB1c2hTbVxcXCI6WzEsXFxcInB1c2gtc21cXFwiXSxcXFwicHVzaE1kXFxcIjpbMSxcXFwicHVzaC1tZFxcXCJdLFxcXCJwdXNoTGdcXFwiOlsxLFxcXCJwdXNoLWxnXFxcIl0sXFxcInB1c2hYbFxcXCI6WzEsXFxcInB1c2gteGxcXFwiXSxcXFwic2l6ZVxcXCI6WzFdLFxcXCJzaXplWHNcXFwiOlsxLFxcXCJzaXplLXhzXFxcIl0sXFxcInNpemVTbVxcXCI6WzEsXFxcInNpemUtc21cXFwiXSxcXFwic2l6ZU1kXFxcIjpbMSxcXFwic2l6ZS1tZFxcXCJdLFxcXCJzaXplTGdcXFwiOlsxLFxcXCJzaXplLWxnXFxcIl0sXFxcInNpemVYbFxcXCI6WzEsXFxcInNpemUteGxcXFwiXX0sW1s5LFxcXCJyZXNpemVcXFwiLFxcXCJvblJlc2l6ZVxcXCJdXV0sWzEsXFxcImlvbi1ncmlkXFxcIix7XFxcImZpeGVkXFxcIjpbNF19XSxbMSxcXFwiaW9uLXJvd1xcXCJdXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLXNsaWRlXzItaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tc2xpZGVfMi1tZFxcXCJ9LFtbMCxcXFwiaW9uLXNsaWRlXFxcIl0sWzQsXFxcImlvbi1zbGlkZXNcXFwiLHtcXFwib3B0aW9uc1xcXCI6WzhdLFxcXCJwYWdlclxcXCI6WzRdLFxcXCJzY3JvbGxiYXJcXFwiOls0XSxcXFwidXBkYXRlXFxcIjpbNjRdLFxcXCJ1cGRhdGVBdXRvSGVpZ2h0XFxcIjpbNjRdLFxcXCJzbGlkZVRvXFxcIjpbNjRdLFxcXCJzbGlkZU5leHRcXFwiOls2NF0sXFxcInNsaWRlUHJldlxcXCI6WzY0XSxcXFwiZ2V0QWN0aXZlSW5kZXhcXFwiOls2NF0sXFxcImdldFByZXZpb3VzSW5kZXhcXFwiOls2NF0sXFxcImxlbmd0aFxcXCI6WzY0XSxcXFwiaXNFbmRcXFwiOls2NF0sXFxcImlzQmVnaW5uaW5nXFxcIjpbNjRdLFxcXCJzdGFydEF1dG9wbGF5XFxcIjpbNjRdLFxcXCJzdG9wQXV0b3BsYXlcXFwiOls2NF0sXFxcImxvY2tTd2lwZVRvTmV4dFxcXCI6WzY0XSxcXFwibG9ja1N3aXBlVG9QcmV2XFxcIjpbNjRdLFxcXCJsb2NrU3dpcGVzXFxcIjpbNjRdLFxcXCJnZXRTd2lwZXJcXFwiOls2NF19XV1dLFtcXFwiaW9uLXRhYl8yXFxcIixbWzEsXFxcImlvbi10YWJcXFwiLHtcXFwiYWN0aXZlXFxcIjpbMTAyOF0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJ0YWJcXFwiOlsxXSxcXFwiY29tcG9uZW50XFxcIjpbMV0sXFxcInNldEFjdGl2ZVxcXCI6WzY0XX1dLFsxLFxcXCJpb24tdGFic1xcXCIse1xcXCJ1c2VSb3V0ZXJcXFwiOlsxMDI4LFxcXCJ1c2Utcm91dGVyXFxcIl0sXFxcInNlbGVjdGVkVGFiXFxcIjpbMzJdLFxcXCJzZWxlY3RcXFwiOls2NF0sXFxcImdldFRhYlxcXCI6WzY0XSxcXFwiZ2V0U2VsZWN0ZWRcXFwiOls2NF0sXFxcInNldFJvdXRlSWRcXFwiOls2NF0sXFxcImdldFJvdXRlSWRcXFwiOls2NF19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1jaGVja2JveC1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1jaGVja2JveC1tZFxcXCJ9LFtbMSxcXFwiaW9uLWNoZWNrYm94XFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcIm5hbWVcXFwiOlsxXSxcXFwiY2hlY2tlZFxcXCI6WzEwMjhdLFxcXCJpbmRldGVybWluYXRlXFxcIjpbMTAyOF0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcInZhbHVlXFxcIjpbMV19XV1dLFtcXFwiaW9uLWltZ1xcXCIsW1sxLFxcXCJpb24taW1nXFxcIix7XFxcImFsdFxcXCI6WzFdLFxcXCJzcmNcXFwiOlsxXSxcXFwibG9hZFNyY1xcXCI6WzMyXSxcXFwibG9hZEVycm9yXFxcIjpbMzJdfV1dXSxbe1xcXCJpb3NcXFwiOlxcXCJpb24taW5wdXQtaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24taW5wdXQtbWRcXFwifSxbWzIsXFxcImlvbi1pbnB1dFxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJhY2NlcHRcXFwiOlsxXSxcXFwiYXV0b2NhcGl0YWxpemVcXFwiOlsxXSxcXFwiYXV0b2NvbXBsZXRlXFxcIjpbMV0sXFxcImF1dG9jb3JyZWN0XFxcIjpbMV0sXFxcImF1dG9mb2N1c1xcXCI6WzRdLFxcXCJjbGVhcklucHV0XFxcIjpbNCxcXFwiY2xlYXItaW5wdXRcXFwiXSxcXFwiY2xlYXJPbkVkaXRcXFwiOls0LFxcXCJjbGVhci1vbi1lZGl0XFxcIl0sXFxcImRlYm91bmNlXFxcIjpbMl0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImlucHV0bW9kZVxcXCI6WzFdLFxcXCJtYXhcXFwiOlsxXSxcXFwibWF4bGVuZ3RoXFxcIjpbMl0sXFxcIm1pblxcXCI6WzFdLFxcXCJtaW5sZW5ndGhcXFwiOlsyXSxcXFwibXVsdGlwbGVcXFwiOls0XSxcXFwibmFtZVxcXCI6WzFdLFxcXCJwYXR0ZXJuXFxcIjpbMV0sXFxcInBsYWNlaG9sZGVyXFxcIjpbMV0sXFxcInJlYWRvbmx5XFxcIjpbNF0sXFxcInJlcXVpcmVkXFxcIjpbNF0sXFxcInNwZWxsY2hlY2tcXFwiOls0XSxcXFwic3RlcFxcXCI6WzFdLFxcXCJzaXplXFxcIjpbMl0sXFxcInR5cGVcXFwiOlsxXSxcXFwidmFsdWVcXFwiOlsxMDI1XSxcXFwiaGFzRm9jdXNcXFwiOlszMl0sXFxcInNldEZvY3VzXFxcIjpbNjRdLFxcXCJnZXRJbnB1dEVsZW1lbnRcXFwiOls2NF19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1wcm9ncmVzcy1iYXItaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tcHJvZ3Jlc3MtYmFyLW1kXFxcIn0sW1sxLFxcXCJpb24tcHJvZ3Jlc3MtYmFyXFxcIix7XFxcInR5cGVcXFwiOlsxXSxcXFwicmV2ZXJzZWRcXFwiOls0XSxcXFwidmFsdWVcXFwiOlsyXSxcXFwiYnVmZmVyXFxcIjpbMl0sXFxcImNvbG9yXFxcIjpbMV19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1yYW5nZS1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi1yYW5nZS1tZFxcXCJ9LFtbMSxcXFwiaW9uLXJhbmdlXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcImRlYm91bmNlXFxcIjpbMl0sXFxcIm5hbWVcXFwiOlsxXSxcXFwiZHVhbEtub2JzXFxcIjpbNCxcXFwiZHVhbC1rbm9ic1xcXCJdLFxcXCJtaW5cXFwiOlsyXSxcXFwibWF4XFxcIjpbMl0sXFxcInBpblxcXCI6WzRdLFxcXCJzbmFwc1xcXCI6WzRdLFxcXCJzdGVwXFxcIjpbMl0sXFxcInRpY2tzXFxcIjpbNF0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcInZhbHVlXFxcIjpbMTAyNl0sXFxcInJhdGlvQVxcXCI6WzMyXSxcXFwicmF0aW9CXFxcIjpbMzJdLFxcXCJwcmVzc2VkS25vYlxcXCI6WzMyXX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLXNwbGl0LXBhbmUtaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tc3BsaXQtcGFuZS1tZFxcXCJ9LFtbMCxcXFwiaW9uLXNwbGl0LXBhbmVcXFwiLHtcXFwiY29udGVudElkXFxcIjpbMSxcXFwiY29udGVudC1pZFxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJ3aGVuXFxcIjpbOF0sXFxcInZpc2libGVcXFwiOlszMl19XV1dLFtcXFwiaW9uLXRleHRcXFwiLFtbMSxcXFwiaW9uLXRleHRcXFwiLHtcXFwiY29sb3JcXFwiOlsxXX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLXRleHRhcmVhLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLXRleHRhcmVhLW1kXFxcIn0sW1syLFxcXCJpb24tdGV4dGFyZWFcXFwiLHtcXFwiY29sb3JcXFwiOlsxXSxcXFwiYXV0b2NhcGl0YWxpemVcXFwiOlsxXSxcXFwiYXV0b2ZvY3VzXFxcIjpbNF0sXFxcImNsZWFyT25FZGl0XFxcIjpbMTAyOCxcXFwiY2xlYXItb24tZWRpdFxcXCJdLFxcXCJkZWJvdW5jZVxcXCI6WzJdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJtYXhsZW5ndGhcXFwiOlsyXSxcXFwibWlubGVuZ3RoXFxcIjpbMl0sXFxcIm5hbWVcXFwiOlsxXSxcXFwicGxhY2Vob2xkZXJcXFwiOlsxXSxcXFwicmVhZG9ubHlcXFwiOls0XSxcXFwicmVxdWlyZWRcXFwiOls0XSxcXFwic3BlbGxjaGVja1xcXCI6WzRdLFxcXCJjb2xzXFxcIjpbMl0sXFxcInJvd3NcXFwiOlsyXSxcXFwid3JhcFxcXCI6WzFdLFxcXCJhdXRvR3Jvd1xcXCI6WzQsXFxcImF1dG8tZ3Jvd1xcXCJdLFxcXCJ2YWx1ZVxcXCI6WzEwMjVdLFxcXCJoYXNGb2N1c1xcXCI6WzMyXSxcXFwic2V0Rm9jdXNcXFwiOls2NF0sXFxcImdldElucHV0RWxlbWVudFxcXCI6WzY0XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLXRvZ2dsZS1pb3NcXFwiLFxcXCJtZFxcXCI6XFxcImlvbi10b2dnbGUtbWRcXFwifSxbWzEsXFxcImlvbi10b2dnbGVcXFwiLHtcXFwiY29sb3JcXFwiOlsxXSxcXFwibmFtZVxcXCI6WzFdLFxcXCJjaGVja2VkXFxcIjpbMTAyOF0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcInZhbHVlXFxcIjpbMV0sXFxcImFjdGl2YXRlZFxcXCI6WzMyXX1dXV0sW1xcXCJpb24tdmlydHVhbC1zY3JvbGxcXFwiLFtbMCxcXFwiaW9uLXZpcnR1YWwtc2Nyb2xsXFxcIix7XFxcImFwcHJveEl0ZW1IZWlnaHRcXFwiOlsyLFxcXCJhcHByb3gtaXRlbS1oZWlnaHRcXFwiXSxcXFwiYXBwcm94SGVhZGVySGVpZ2h0XFxcIjpbMixcXFwiYXBwcm94LWhlYWRlci1oZWlnaHRcXFwiXSxcXFwiYXBwcm94Rm9vdGVySGVpZ2h0XFxcIjpbMixcXFwiYXBwcm94LWZvb3Rlci1oZWlnaHRcXFwiXSxcXFwiaGVhZGVyRm5cXFwiOlsxNl0sXFxcImZvb3RlckZuXFxcIjpbMTZdLFxcXCJpdGVtc1xcXCI6WzE2XSxcXFwiaXRlbUhlaWdodFxcXCI6WzE2XSxcXFwiaGVhZGVySGVpZ2h0XFxcIjpbMTZdLFxcXCJmb290ZXJIZWlnaHRcXFwiOlsxNl0sXFxcInJlbmRlckl0ZW1cXFwiOlsxNl0sXFxcInJlbmRlckhlYWRlclxcXCI6WzE2XSxcXFwicmVuZGVyRm9vdGVyXFxcIjpbMTZdLFxcXCJub2RlUmVuZGVyXFxcIjpbMTZdLFxcXCJkb21SZW5kZXJcXFwiOlsxNl0sXFxcInRvdGFsSGVpZ2h0XFxcIjpbMzJdLFxcXCJwb3NpdGlvbkZvckl0ZW1cXFwiOls2NF0sXFxcImNoZWNrUmFuZ2VcXFwiOls2NF0sXFxcImNoZWNrRW5kXFxcIjpbNjRdfSxbWzksXFxcInJlc2l6ZVxcXCIsXFxcIm9uUmVzaXplXFxcIl1dXV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1kYXRldGltZV8zLWlvc1xcXCIsXFxcIm1kXFxcIjpcXFwiaW9uLWRhdGV0aW1lXzMtbWRcXFwifSxbWzIsXFxcImlvbi1waWNrZXJcXFwiLHtcXFwib3ZlcmxheUluZGV4XFxcIjpbMixcXFwib3ZlcmxheS1pbmRleFxcXCJdLFxcXCJrZXlib2FyZENsb3NlXFxcIjpbNCxcXFwia2V5Ym9hcmQtY2xvc2VcXFwiXSxcXFwiZW50ZXJBbmltYXRpb25cXFwiOlsxNl0sXFxcImxlYXZlQW5pbWF0aW9uXFxcIjpbMTZdLFxcXCJidXR0b25zXFxcIjpbMTZdLFxcXCJjb2x1bW5zXFxcIjpbMTZdLFxcXCJjc3NDbGFzc1xcXCI6WzEsXFxcImNzcy1jbGFzc1xcXCJdLFxcXCJkdXJhdGlvblxcXCI6WzJdLFxcXCJzaG93QmFja2Ryb3BcXFwiOls0LFxcXCJzaG93LWJhY2tkcm9wXFxcIl0sXFxcImJhY2tkcm9wRGlzbWlzc1xcXCI6WzQsXFxcImJhY2tkcm9wLWRpc21pc3NcXFwiXSxcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwicHJlc2VudGVkXFxcIjpbMzJdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF0sXFxcImdldENvbHVtblxcXCI6WzY0XX1dLFsxLFxcXCJpb24tZGF0ZXRpbWVcXFwiLHtcXFwibmFtZVxcXCI6WzFdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJyZWFkb25seVxcXCI6WzRdLFxcXCJtaW5cXFwiOlsxMDI1XSxcXFwibWF4XFxcIjpbMTAyNV0sXFxcImRpc3BsYXlGb3JtYXRcXFwiOlsxLFxcXCJkaXNwbGF5LWZvcm1hdFxcXCJdLFxcXCJwaWNrZXJGb3JtYXRcXFwiOlsxLFxcXCJwaWNrZXItZm9ybWF0XFxcIl0sXFxcImNhbmNlbFRleHRcXFwiOlsxLFxcXCJjYW5jZWwtdGV4dFxcXCJdLFxcXCJkb25lVGV4dFxcXCI6WzEsXFxcImRvbmUtdGV4dFxcXCJdLFxcXCJ5ZWFyVmFsdWVzXFxcIjpbOCxcXFwieWVhci12YWx1ZXNcXFwiXSxcXFwibW9udGhWYWx1ZXNcXFwiOls4LFxcXCJtb250aC12YWx1ZXNcXFwiXSxcXFwiZGF5VmFsdWVzXFxcIjpbOCxcXFwiZGF5LXZhbHVlc1xcXCJdLFxcXCJob3VyVmFsdWVzXFxcIjpbOCxcXFwiaG91ci12YWx1ZXNcXFwiXSxcXFwibWludXRlVmFsdWVzXFxcIjpbOCxcXFwibWludXRlLXZhbHVlc1xcXCJdLFxcXCJtb250aE5hbWVzXFxcIjpbMSxcXFwibW9udGgtbmFtZXNcXFwiXSxcXFwibW9udGhTaG9ydE5hbWVzXFxcIjpbMSxcXFwibW9udGgtc2hvcnQtbmFtZXNcXFwiXSxcXFwiZGF5TmFtZXNcXFwiOlsxLFxcXCJkYXktbmFtZXNcXFwiXSxcXFwiZGF5U2hvcnROYW1lc1xcXCI6WzEsXFxcImRheS1zaG9ydC1uYW1lc1xcXCJdLFxcXCJwaWNrZXJPcHRpb25zXFxcIjpbMTZdLFxcXCJwbGFjZWhvbGRlclxcXCI6WzFdLFxcXCJ2YWx1ZVxcXCI6WzEwMjVdLFxcXCJpc0V4cGFuZGVkXFxcIjpbMzJdLFxcXCJvcGVuXFxcIjpbNjRdfV0sWzAsXFxcImlvbi1waWNrZXItY29sdW1uXFxcIix7XFxcImNvbFxcXCI6WzE2XX1dXV0sW3tcXFwiaW9zXFxcIjpcXFwiaW9uLXJhZGlvXzItaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tcmFkaW9fMi1tZFxcXCJ9LFtbMSxcXFwiaW9uLXJhZGlvXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcIm5hbWVcXFwiOlsxXSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwiY2hlY2tlZFxcXCI6WzEwMjhdLFxcXCJ2YWx1ZVxcXCI6WzEwMzJdfV0sWzAsXFxcImlvbi1yYWRpby1ncm91cFxcXCIse1xcXCJhbGxvd0VtcHR5U2VsZWN0aW9uXFxcIjpbNCxcXFwiYWxsb3ctZW1wdHktc2VsZWN0aW9uXFxcIl0sXFxcIm5hbWVcXFwiOlsxXSxcXFwidmFsdWVcXFwiOlsxMDMyXX1dXV0sW1xcXCJpb24tc3Bpbm5lclxcXCIsW1sxLFxcXCJpb24tc3Bpbm5lclxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJkdXJhdGlvblxcXCI6WzJdLFxcXCJuYW1lXFxcIjpbMV0sXFxcInBhdXNlZFxcXCI6WzRdfV1dXSxbe1xcXCJpb3NcXFwiOlxcXCJpb24tYnV0dG9uXzItaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24tYnV0dG9uXzItbWRcXFwifSxbWzEsXFxcImlvbi1idXR0b25cXFwiLHtcXFwiY29sb3JcXFwiOlsxXSxcXFwiYnV0dG9uVHlwZVxcXCI6WzEwMjUsXFxcImJ1dHRvbi10eXBlXFxcIl0sXFxcImRpc2FibGVkXFxcIjpbNTE2XSxcXFwiZXhwYW5kXFxcIjpbNTEzXSxcXFwiZmlsbFxcXCI6WzE1MzddLFxcXCJyb3V0ZXJEaXJlY3Rpb25cXFwiOlsxLFxcXCJyb3V0ZXItZGlyZWN0aW9uXFxcIl0sXFxcImRvd25sb2FkXFxcIjpbMV0sXFxcImhyZWZcXFwiOlsxXSxcXFwicmVsXFxcIjpbMV0sXFxcInNoYXBlXFxcIjpbNTEzXSxcXFwic2l6ZVxcXCI6WzUxM10sXFxcInN0cm9uZ1xcXCI6WzRdLFxcXCJ0YXJnZXRcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdfV0sWzEsXFxcImlvbi1pY29uXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcImFyaWFMYWJlbFxcXCI6WzE1MzcsXFxcImFyaWEtbGFiZWxcXFwiXSxcXFwiaW9zXFxcIjpbMV0sXFxcIm1kXFxcIjpbMV0sXFxcImZsaXBSdGxcXFwiOls0LFxcXCJmbGlwLXJ0bFxcXCJdLFxcXCJuYW1lXFxcIjpbMV0sXFxcInNyY1xcXCI6WzFdLFxcXCJpY29uXFxcIjpbOF0sXFxcInNpemVcXFwiOlsxXSxcXFwibGF6eVxcXCI6WzRdLFxcXCJzdmdDb250ZW50XFxcIjpbMzJdLFxcXCJpc1Zpc2libGVcXFwiOlszMl19XV1dLFt7XFxcImlvc1xcXCI6XFxcImlvbi1pdGVtXzgtaW9zXFxcIixcXFwibWRcXFwiOlxcXCJpb24taXRlbV84LW1kXFxcIn0sW1sxLFxcXCJpb24taXRlbS1kaXZpZGVyXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcInN0aWNreVxcXCI6WzRdfV0sWzAsXFxcImlvbi1pdGVtLWdyb3VwXFxcIl0sWzEsXFxcImlvbi1ub3RlXFxcIix7XFxcImNvbG9yXFxcIjpbMV19XSxbMSxcXFwiaW9uLXNrZWxldG9uLXRleHRcXFwiLHtcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwid2lkdGhcXFwiOlsxXX1dLFsxLFxcXCJpb24taXRlbVxcXCIse1xcXCJjb2xvclxcXCI6WzFdLFxcXCJidXR0b25cXFwiOls0XSxcXFwiZGV0YWlsXFxcIjpbNF0sXFxcImRldGFpbEljb25cXFwiOlsxLFxcXCJkZXRhaWwtaWNvblxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJkb3dubG9hZFxcXCI6WzFdLFxcXCJocmVmXFxcIjpbMV0sXFxcInJlbFxcXCI6WzFdLFxcXCJsaW5lc1xcXCI6WzFdLFxcXCJyb3V0ZXJEaXJlY3Rpb25cXFwiOlsxLFxcXCJyb3V0ZXItZGlyZWN0aW9uXFxcIl0sXFxcInRhcmdldFxcXCI6WzFdLFxcXCJ0eXBlXFxcIjpbMV0sXFxcIm11bHRpcGxlSW5wdXRzXFxcIjpbMzJdfSxbWzAsXFxcImlvblN0eWxlXFxcIixcXFwiaXRlbVN0eWxlXFxcIl1dXSxbMixcXFwiaW9uLWxhYmVsXFxcIix7XFxcImNvbG9yXFxcIjpbMV0sXFxcInBvc2l0aW9uXFxcIjpbMV0sXFxcIm5vQW5pbWF0ZVxcXCI6WzMyXX1dLFswLFxcXCJpb24tbGlzdFxcXCIse1xcXCJsaW5lc1xcXCI6WzFdLFxcXCJpbnNldFxcXCI6WzRdLFxcXCJjbG9zZVNsaWRpbmdJdGVtc1xcXCI6WzY0XX1dLFsxLFxcXCJpb24tbGlzdC1oZWFkZXJcXFwiLHtcXFwiY29sb3JcXFwiOlsxXX1dXV1dXCIpLCBvcHRpb25zKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9O1xuIiwiaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5cbmxldCBsYXN0SWQgPSAwO1xyXG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gKHRhZ05hbWUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU92ZXJsYXkodGFnTmFtZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNtaXNzKGRhdGEsIHJvbGUsIGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNtaXNzT3ZlcmxheShkb2N1bWVudCwgZGF0YSwgcm9sZSwgdGFnTmFtZSwgaWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZ2V0VG9wKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3ZlcmxheShkb2N1bWVudCwgdGFnTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuY29uc3QgYWxlcnRDb250cm9sbGVyID0gLypAX19QVVJFX18qLyBjcmVhdGVDb250cm9sbGVyKCdpb24tYWxlcnQnKTtcclxuY29uc3QgYWN0aW9uU2hlZXRDb250cm9sbGVyID0gLypAX19QVVJFX18qLyBjcmVhdGVDb250cm9sbGVyKCdpb24tYWN0aW9uLXNoZWV0Jyk7XHJcbmNvbnN0IGxvYWRpbmdDb250cm9sbGVyID0gLypAX19QVVJFX18qLyBjcmVhdGVDb250cm9sbGVyKCdpb24tbG9hZGluZycpO1xyXG5jb25zdCBtb2RhbENvbnRyb2xsZXIgPSAvKkBfX1BVUkVfXyovIGNyZWF0ZUNvbnRyb2xsZXIoJ2lvbi1tb2RhbCcpO1xyXG5jb25zdCBwaWNrZXJDb250cm9sbGVyID0gLypAX19QVVJFX18qLyBjcmVhdGVDb250cm9sbGVyKCdpb24tcGlja2VyJyk7XHJcbmNvbnN0IHBvcG92ZXJDb250cm9sbGVyID0gLypAX19QVVJFX18qLyBjcmVhdGVDb250cm9sbGVyKCdpb24tcG9wb3ZlcicpO1xyXG5jb25zdCB0b2FzdENvbnRyb2xsZXIgPSAvKkBfX1BVUkVfXyovIGNyZWF0ZUNvbnRyb2xsZXIoJ2lvbi10b2FzdCcpO1xyXG5jb25zdCBwcmVwYXJlT3ZlcmxheSA9IChlbCkgPT4ge1xyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XHJcbiAgICBjb25uZWN0TGlzdGVuZXJzKGRvYyk7XHJcbiAgICBjb25zdCBvdmVybGF5SW5kZXggPSBsYXN0SWQrKztcclxuICAgIGVsLm92ZXJsYXlJbmRleCA9IG92ZXJsYXlJbmRleDtcclxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdpZCcpKSB7XHJcbiAgICAgICAgZWwuaWQgPSBgaW9uLW92ZXJsYXktJHtvdmVybGF5SW5kZXh9YDtcclxuICAgIH1cclxufTtcclxuY29uc3QgY3JlYXRlT3ZlcmxheSA9ICh0YWdOYW1lLCBvcHRzKSA9PiB7XHJcbiAgICByZXR1cm4gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnTmFtZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1oaWRkZW4nKTtcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBwYXNzZWQgaW4gb3ZlcmxheSBvcHRpb25zIGludG8gcHJvcHNcclxuICAgICAgICAvLyB0aGF0IGdldCBwYXNzZWQgZG93biBpbnRvIHRoZSBuZXcgb3ZlcmxheVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudCwgb3B0cyk7XHJcbiAgICAgICAgLy8gYXBwZW5kIHRoZSBvdmVybGF5IGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50IGJvZHlcclxuICAgICAgICBnZXRBcHBSb290KGRvYykuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGNvbm5lY3RMaXN0ZW5lcnMgPSAoZG9jKSA9PiB7XHJcbiAgICBpZiAobGFzdElkID09PSAwKSB7XHJcbiAgICAgICAgbGFzdElkID0gMTtcclxuICAgICAgICAvLyB0cmFwIGZvY3VzIGluc2lkZSBvdmVybGF5c1xyXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZXYgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3ZlcmxheSA9IGdldE92ZXJsYXkoZG9jKTtcclxuICAgICAgICAgICAgaWYgKGxhc3RPdmVybGF5ICYmIGxhc3RPdmVybGF5LmJhY2tkcm9wRGlzbWlzcyAmJiAhaXNEZXNjZW5kYW50KGxhc3RPdmVybGF5LCBldi50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdElucHV0ID0gbGFzdE92ZXJsYXkucXVlcnlTZWxlY3RvcignaW5wdXQsYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0SW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGhhbmRsZSBiYWNrLWJ1dHRvbiBjbGlja1xyXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25CYWNrQnV0dG9uJywgZXYgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3ZlcmxheSA9IGdldE92ZXJsYXkoZG9jKTtcclxuICAgICAgICAgICAgaWYgKGxhc3RPdmVybGF5ICYmIGxhc3RPdmVybGF5LmJhY2tkcm9wRGlzbWlzcykge1xyXG4gICAgICAgICAgICAgICAgZXYuZGV0YWlsLnJlZ2lzdGVyKDEwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0T3ZlcmxheS5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBoYW5kbGUgRVNDIHRvIGNsb3NlIG92ZXJsYXlcclxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldi5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0T3ZlcmxheSA9IGdldE92ZXJsYXkoZG9jKTtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0T3ZlcmxheSAmJiBsYXN0T3ZlcmxheS5iYWNrZHJvcERpc21pc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T3ZlcmxheS5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGRpc21pc3NPdmVybGF5ID0gKGRvYywgZGF0YSwgcm9sZSwgb3ZlcmxheVRhZywgaWQpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBnZXRPdmVybGF5KGRvYywgb3ZlcmxheVRhZywgaWQpO1xyXG4gICAgaWYgKCFvdmVybGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdvdmVybGF5IGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3ZlcmxheS5kaXNtaXNzKGRhdGEsIHJvbGUpO1xyXG59O1xyXG5jb25zdCBnZXRPdmVybGF5cyA9IChkb2MsIHNlbGVjdG9yKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNlbGVjdG9yID0gJ2lvbi1hbGVydCxpb24tYWN0aW9uLXNoZWV0LGlvbi1sb2FkaW5nLGlvbi1tb2RhbCxpb24tcGlja2VyLGlvbi1wb3BvdmVyLGlvbi10b2FzdCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXHJcbiAgICAgICAgLmZpbHRlcihjID0+IGMub3ZlcmxheUluZGV4ID4gMCk7XHJcbn07XHJcbmNvbnN0IGdldE92ZXJsYXkgPSAoZG9jLCBvdmVybGF5VGFnLCBpZCkgPT4ge1xyXG4gICAgY29uc3Qgb3ZlcmxheXMgPSBnZXRPdmVybGF5cyhkb2MsIG92ZXJsYXlUYWcpO1xyXG4gICAgcmV0dXJuIChpZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgID8gb3ZlcmxheXNbb3ZlcmxheXMubGVuZ3RoIC0gMV1cclxuICAgICAgICA6IG92ZXJsYXlzLmZpbmQobyA9PiBvLmlkID09PSBpZCk7XHJcbn07XHJcbmNvbnN0IHByZXNlbnQgPSBhc3luYyAob3ZlcmxheSwgbmFtZSwgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24sIG9wdHMpID0+IHtcclxuICAgIGlmIChvdmVybGF5LnByZXNlbnRlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG92ZXJsYXkucHJlc2VudGVkID0gdHJ1ZTtcclxuICAgIG92ZXJsYXkud2lsbFByZXNlbnQuZW1pdCgpO1xyXG4gICAgLy8gZ2V0IHRoZSB1c2VyJ3MgYW5pbWF0aW9uIGZuIGlmIG9uZSB3YXMgcHJvdmlkZWRcclxuICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSAob3ZlcmxheS5lbnRlckFuaW1hdGlvbilcclxuICAgICAgICA/IG92ZXJsYXkuZW50ZXJBbmltYXRpb25cclxuICAgICAgICA6IGNvbmZpZy5nZXQobmFtZSwgb3ZlcmxheS5tb2RlID09PSAnaW9zJyA/IGlvc0VudGVyQW5pbWF0aW9uIDogbWRFbnRlckFuaW1hdGlvbik7XHJcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBhd2FpdCBvdmVybGF5QW5pbWF0aW9uKG92ZXJsYXksIGFuaW1hdGlvbkJ1aWxkZXIsIG92ZXJsYXkuZWwsIG9wdHMpO1xyXG4gICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICAgIG92ZXJsYXkuZGlkUHJlc2VudC5lbWl0KCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGRpc21pc3MgPSBhc3luYyAob3ZlcmxheSwgZGF0YSwgcm9sZSwgbmFtZSwgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24sIG9wdHMpID0+IHtcclxuICAgIGlmICghb3ZlcmxheS5wcmVzZW50ZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBvdmVybGF5LnByZXNlbnRlZCA9IGZhbHNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBvdmVybGF5LndpbGxEaXNtaXNzLmVtaXQoeyBkYXRhLCByb2xlIH0pO1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSAob3ZlcmxheS5sZWF2ZUFuaW1hdGlvbilcclxuICAgICAgICAgICAgPyBvdmVybGF5LmxlYXZlQW5pbWF0aW9uXHJcbiAgICAgICAgICAgIDogY29uZmlnLmdldChuYW1lLCBvdmVybGF5Lm1vZGUgPT09ICdpb3MnID8gaW9zTGVhdmVBbmltYXRpb24gOiBtZExlYXZlQW5pbWF0aW9uKTtcclxuICAgICAgICBhd2FpdCBvdmVybGF5QW5pbWF0aW9uKG92ZXJsYXksIGFuaW1hdGlvbkJ1aWxkZXIsIG92ZXJsYXkuZWwsIG9wdHMpO1xyXG4gICAgICAgIG92ZXJsYXkuZGlkRGlzbWlzcy5lbWl0KHsgZGF0YSwgcm9sZSB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgICBvdmVybGF5LmVsLnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcbmNvbnN0IGdldEFwcFJvb3QgPSAoZG9jKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hcHAnKSB8fCBkb2MuYm9keTtcclxufTtcclxuY29uc3Qgb3ZlcmxheUFuaW1hdGlvbiA9IGFzeW5jIChvdmVybGF5LCBhbmltYXRpb25CdWlsZGVyLCBiYXNlRWwsIG9wdHMpID0+IHtcclxuICAgIGlmIChvdmVybGF5LmFuaW1hdGlvbikge1xyXG4gICAgICAgIG92ZXJsYXkuYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICBvdmVybGF5LmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBNYWtlIG92ZXJsYXkgdmlzaWJsZSBpbiBjYXNlIGl0J3MgaGlkZGVuXHJcbiAgICBiYXNlRWwuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1oaWRkZW4nKTtcclxuICAgIGNvbnN0IGFuaVJvb3QgPSBiYXNlRWwuc2hhZG93Um9vdCB8fCBvdmVybGF5LmVsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPOiBSZW1vdmUgQW5pbWF0aW9uQnVpbGRlclxyXG4gICAgICovXHJcbiAgICBsZXQgYW5pbWF0aW9uO1xyXG4gICAgbGV0IGlzQW5pbWF0aW9uQnVpbGRlciA9IHRydWU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydCgnLi9pbmRleC02OWMzNzg4NS5qcycpO1xyXG4gICAgICAgIGFuaW1hdGlvbiA9IGF3YWl0IG1vZC5jcmVhdGUoYW5pbWF0aW9uQnVpbGRlciwgYW5pUm9vdCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uQnVpbGRlcihhbmlSb290LCBvcHRzKTtcclxuICAgICAgICBhbmltYXRpb24uZmlsbCgnYm90aCcpO1xyXG4gICAgICAgIGlzQW5pbWF0aW9uQnVpbGRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgb3ZlcmxheS5hbmltYXRpb24gPSBhbmltYXRpb247XHJcbiAgICBpZiAoIW92ZXJsYXkuYW5pbWF0ZWQgfHwgIWNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLmR1cmF0aW9uKDApO1xyXG4gICAgfVxyXG4gICAgaWYgKG92ZXJsYXkua2V5Ym9hcmRDbG9zZSkge1xyXG4gICAgICAgIGFuaW1hdGlvbi5iZWZvcmVBZGRXcml0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBiYXNlRWwub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCBpb24taW5wdXQsIGlvbi10ZXh0YXJlYScpKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYW5pbWF0aW9uUmVzdWx0ID0gYXdhaXQgYW5pbWF0aW9uLnBsYXlBc3luYygpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUT0RPOiBSZW1vdmUgQW5pbWF0aW9uQnVpbGRlclxyXG4gICAgICovXHJcbiAgICBjb25zdCBoYXNDb21wbGV0ZWQgPSAodHlwZW9mIGFuaW1hdGlvblJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpID8gdHJ1ZSA6IGFuaW1hdGlvbi5oYXNDb21wbGV0ZWQ7XHJcbiAgICBpZiAoaXNBbmltYXRpb25CdWlsZGVyKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIG92ZXJsYXkuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIGhhc0NvbXBsZXRlZDtcclxufTtcclxuY29uc3QgZXZlbnRNZXRob2QgPSAoZWxlbWVudCwgZXZlbnROYW1lKSA9PiB7XHJcbiAgICBsZXQgcmVzb2x2ZTtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyID0+IHJlc29sdmUgPSByKTtcclxuICAgIG9uY2VFdmVudChlbGVtZW50LCBldmVudE5hbWUsIChldmVudCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoZXZlbnQuZGV0YWlsKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbn07XHJcbmNvbnN0IG9uY2VFdmVudCA9IChlbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgY2FsbGJhY2soZXYpO1xyXG4gICAgfTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xyXG59O1xyXG5jb25zdCBpc0NhbmNlbCA9IChyb2xlKSA9PiB7XHJcbiAgICByZXR1cm4gcm9sZSA9PT0gJ2NhbmNlbCcgfHwgcm9sZSA9PT0gQkFDS0RST1A7XHJcbn07XHJcbmNvbnN0IGlzRGVzY2VuZGFudCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XHJcbiAgICB3aGlsZSAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5jb25zdCBkZWZhdWx0R2F0ZSA9IChoKSA9PiBoKCk7XHJcbmNvbnN0IHNhZmVDYWxsID0gKGhhbmRsZXIsIGFyZykgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29uc3Qgam1wID0gY29uZmlnLmdldCgnX3pvbmVHYXRlJywgZGVmYXVsdEdhdGUpO1xyXG4gICAgICAgIHJldHVybiBqbXAoKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIoYXJnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgQkFDS0RST1AgPSAnYmFja2Ryb3AnO1xuXG5leHBvcnQgeyBCQUNLRFJPUCBhcyBCLCBhbGVydENvbnRyb2xsZXIgYXMgYSwgYWN0aW9uU2hlZXRDb250cm9sbGVyIGFzIGIsIHBvcG92ZXJDb250cm9sbGVyIGFzIGMsIHByZXBhcmVPdmVybGF5IGFzIGQsIHByZXNlbnQgYXMgZSwgZGlzbWlzcyBhcyBmLCBldmVudE1ldGhvZCBhcyBnLCBjcmVhdGVPdmVybGF5IGFzIGgsIGlzQ2FuY2VsIGFzIGksIGRpc21pc3NPdmVybGF5IGFzIGosIGdldE92ZXJsYXkgYXMgaywgbG9hZGluZ0NvbnRyb2xsZXIgYXMgbCwgbW9kYWxDb250cm9sbGVyIGFzIG0sIHBpY2tlckNvbnRyb2xsZXIgYXMgcCwgc2FmZUNhbGwgYXMgcywgdG9hc3RDb250cm9sbGVyIGFzIHQgfTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLmlvcyB7XFxuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwubWQge1xcbiAgLS1pb24tZGVmYXVsdC1mb250OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICAtLWlvbi1mb250LWZhbWlseTogdmFyKC0taW9uLWRlZmF1bHQtZm9udCk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW9uLWNvbG9yLXByaW1hcnkge1xcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tY29sb3Itc2Vjb25kYXJ5IHtcXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMwY2QxZTgpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDEyLCAyMDksIDIzMikgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMGJiOGNjKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjMjRkNmVhKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWNvbG9yLXRlcnRpYXJ5IHtcXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwgIzcwNDRmZikgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCAxMTIsIDY4LCAyNTUpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSwgIzYzM2NlMCkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjN2U1N2ZmKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWNvbG9yLXN1Y2Nlc3Mge1xcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMxMGRjNjApICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCAxNiwgMjIwLCA5NikgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMGVjMjU0KSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzI4ZTA3MCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1jb2xvci13YXJuaW5nIHtcXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjZTAwKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAyMDYsIDApICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYjUwMCkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmQzMWEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tY29sb3ItZGFuZ2VyIHtcXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMDQxNDEpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDI0MCwgNjUsIDY1KSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNkMzM5MzkpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNmMjU0NTQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tY29sb3ItbGlnaHQge1xcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWNvbG9yLW1lZGl1bSB7XFxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTg5YWEyKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNTIsIDE1NCwgMTYyKSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4Njg4OGYpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNhMmE0YWIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tY29sb3ItZGFyayB7XFxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XFxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tcGFnZSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbmlvbi1yb3V0ZSxcXG5pb24tcm91dGUtcmVkaXJlY3QsXFxuaW9uLXJvdXRlcixcXG5pb24tc2VsZWN0LW9wdGlvbixcXG5pb24tbmF2LWNvbnRyb2xsZXIsXFxuaW9uLW1lbnUtY29udHJvbGxlcixcXG5pb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsXFxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcXG5pb24tbW9kYWwtY29udHJvbGxlcixcXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcXG5pb24tdG9hc3QtY29udHJvbGxlcixcXG4uaW9uLXBhZ2UtaGlkZGVuLFxcbltoaWRkZW5dIHtcXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1wYWdlLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xcbiAgLS1pb24tc3RhdHVzYmFyLXBhZGRpbmc6IDIwcHg7XFxufVxcblxcbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpIHtcXG4gIGh0bWwge1xcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xcbiAgfVxcbn1cXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xcbiAgaHRtbCB7XFxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcXG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcXG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xcbiAgfVxcbn1cXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcXG4gIGh0bWwge1xcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XFxuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcXG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XFxuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XFxuICB9XFxufVxcbi5tZW51LWNvbnRlbnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAgMCwgIDApO1xcbn1cXG5cXG4ubWVudS1jb250ZW50LW9wZW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XFxuICBib3gtc2hhZG93OiAtOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbn1cXG5cXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcXG4gIGJveC1zaGFkb3c6IDhweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuXFxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIycHggMCByZ2JhKDAsIDAsIDAsIDAuMDkpLCA0cHggMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG59XFxuXFxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XFxuICBib3gtc2hhZG93OiAwIDJweCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KSwgNHB4IDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmlvbi1oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1oaWRlLXVwIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XFxuICAuaW9uLWhpZGUtZG93biB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAuaW9uLWhpZGUtc20tdXAge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmlvbi1oaWRlLXNtLWRvd24ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmlvbi1oaWRlLW1kLXVwIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5pb24taGlkZS1tZC1kb3duIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5pb24taGlkZS1sZy11cCB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgLmlvbi1oaWRlLWxnLWRvd24ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5pb24taGlkZS14bC11cCB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLmlvbi1oaWRlLXhsLWRvd24ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pb24tYWxpZ24tc2VsZi1zdGFydCxcXG5bYWxpZ24tc2VsZi1zdGFydF0ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWFsaWduLXNlbGYtZW5kLFxcblthbGlnbi1zZWxmLWVuZF0ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlcixcXG5bYWxpZ24tc2VsZi1jZW50ZXJdIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWFsaWduLXNlbGYtc3RyZXRjaCxcXG5bYWxpZ24tc2VsZi1zdHJldGNoXSB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSxcXG5bYWxpZ24tc2VsZi1iYXNlbGluZV0ge1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1hbGlnbi1zZWxmLWF1dG8sXFxuW2FsaWduLXNlbGYtYXV0b10ge1xcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLXdyYXAsXFxuW3dyYXBdIHtcXG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLW5vd3JhcCxcXG5bbm93cmFwXSB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLXdyYXAtcmV2ZXJzZSxcXG5bd3JhcC1yZXZlcnNlXSB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCxcXG5banVzdGlmeS1jb250ZW50LXN0YXJ0XSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyLFxcbltqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQsXFxuW2p1c3RpZnktY29udGVudC1lbmRdIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kLFxcbltqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuLFxcbltqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tanVzdGlmeS1jb250ZW50LWV2ZW5seSxcXG5banVzdGlmeS1jb250ZW50LWV2ZW5seV0ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCxcXG5bYWxpZ24taXRlbXMtc3RhcnRdIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tYWxpZ24taXRlbXMtY2VudGVyLFxcblthbGlnbi1pdGVtcy1jZW50ZXJdIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1hbGlnbi1pdGVtcy1lbmQsXFxuW2FsaWduLWl0ZW1zLWVuZF0ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCxcXG5bYWxpZ24taXRlbXMtc3RyZXRjaF0ge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1hbGlnbi1pdGVtcy1iYXNlbGluZSxcXG5bYWxpZ24taXRlbXMtYmFzZWxpbmVdIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pb24tZmxvYXQtbGVmdCxcXG5bZmxvYXQtbGVmdF0ge1xcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi1mbG9hdC1yaWdodCxcXG5bZmxvYXQtcmlnaHRdIHtcXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLWZsb2F0LXN0YXJ0LFxcbltmbG9hdC1zdGFydF0ge1xcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG59XFxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXN0YXJ0LCBbZGlyPXJ0bF0gW2Zsb2F0LXN0YXJ0XSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zdGFydF0ge1xcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tZmxvYXQtZW5kLFxcbltmbG9hdC1lbmRdIHtcXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbn1cXG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWVuZCwgW2Rpcj1ydGxdIFtmbG9hdC1lbmRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWVuZF0ge1xcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAuaW9uLWZsb2F0LXNtLWxlZnQsXFxuW2Zsb2F0LXNtLWxlZnRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tZmxvYXQtc20tcmlnaHQsXFxuW2Zsb2F0LXNtLXJpZ2h0XSB7XFxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi1mbG9hdC1zbS1zdGFydCxcXG5bZmxvYXQtc20tc3RhcnRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC1zbS1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tc3RhcnRdIHtcXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLWZsb2F0LXNtLWVuZCxcXG5bZmxvYXQtc20tZW5kXSB7XFxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1lbmQsIFtkaXI9cnRsXSBbZmxvYXQtc20tZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zbS1lbmRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaW9uLWZsb2F0LW1kLWxlZnQsXFxuW2Zsb2F0LW1kLWxlZnRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tZmxvYXQtbWQtcmlnaHQsXFxuW2Zsb2F0LW1kLXJpZ2h0XSB7XFxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi1mbG9hdC1tZC1zdGFydCxcXG5bZmxvYXQtbWQtc3RhcnRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC1tZC1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtc3RhcnRdIHtcXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLWZsb2F0LW1kLWVuZCxcXG5bZmxvYXQtbWQtZW5kXSB7XFxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQsIFtkaXI9cnRsXSBbZmxvYXQtbWQtZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1tZC1lbmRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuaW9uLWZsb2F0LWxnLWxlZnQsXFxuW2Zsb2F0LWxnLWxlZnRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tZmxvYXQtbGctcmlnaHQsXFxuW2Zsb2F0LWxnLXJpZ2h0XSB7XFxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi1mbG9hdC1sZy1zdGFydCxcXG5bZmxvYXQtbGctc3RhcnRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC1sZy1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctc3RhcnRdIHtcXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLWZsb2F0LWxnLWVuZCxcXG5bZmxvYXQtbGctZW5kXSB7XFxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1lbmQsIFtkaXI9cnRsXSBbZmxvYXQtbGctZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1sZy1lbmRdIHtcXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmlvbi1mbG9hdC14bC1sZWZ0LFxcbltmbG9hdC14bC1sZWZ0XSB7XFxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLWZsb2F0LXhsLXJpZ2h0LFxcbltmbG9hdC14bC1yaWdodF0ge1xcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tZmxvYXQteGwtc3RhcnQsXFxuW2Zsb2F0LXhsLXN0YXJ0XSB7XFxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtc3RhcnQsIFtkaXI9cnRsXSBbZmxvYXQteGwtc3RhcnRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLXN0YXJ0XSB7XFxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi1mbG9hdC14bC1lbmQsXFxuW2Zsb2F0LXhsLWVuZF0ge1xcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcXG4gIH1cXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtZW5kLCBbZGlyPXJ0bF0gW2Zsb2F0LXhsLWVuZF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQteGwtZW5kXSB7XFxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxubGFiZWwsXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXG59XFxuXFxuZm9ybSxcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcXG5pbnB1dFt0eXBlPXJlc2V0XSxcXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbmEsXFxuYSBkaXYsXFxuYSBzcGFuLFxcbmEgaW9uLWljb24sXFxuYSBpb24tbGFiZWwsXFxuYnV0dG9uLFxcbmJ1dHRvbiBkaXYsXFxuYnV0dG9uIHNwYW4sXFxuYnV0dG9uIGlvbi1pY29uLFxcbmJ1dHRvbiBpb24tbGFiZWwsXFxuLmlvbi10YXBwYWJsZSxcXG5bdGFwcGFibGVdLFxcblt0YXBwYWJsZV0gZGl2LFxcblt0YXBwYWJsZV0gc3BhbixcXG5bdGFwcGFibGVdIGlvbi1pY29uLFxcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG5hIGlvbi1sYWJlbCxcXG5idXR0b24gaW9uLWxhYmVsIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuW3RhcHBhYmxlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmFbZGlzYWJsZWRdLFxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0sXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pb24tbm8tcGFkZGluZyxcXG5bbm8tcGFkZGluZ10ge1xcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xcbiAgLS1wYWRkaW5nLWVuZDogMDtcXG4gIC0tcGFkZGluZy10b3A6IDA7XFxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi5pb24tcGFkZGluZyxcXG5bcGFkZGluZ10ge1xcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbn1cXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xcbiAgLmlvbi1wYWRkaW5nLFxcbltwYWRkaW5nXSB7XFxuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gIH1cXG59XFxuXFxuLmlvbi1wYWRkaW5nLXRvcCxcXG5bcGFkZGluZy10b3BdIHtcXG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxufVxcbi5pb24tcGFkZGluZy1zdGFydCxcXG5bcGFkZGluZy1zdGFydF0ge1xcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG59XFxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcXG4gIC5pb24tcGFkZGluZy1zdGFydCxcXG5bcGFkZGluZy1zdGFydF0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gIH1cXG59XFxuXFxuLmlvbi1wYWRkaW5nLWVuZCxcXG5bcGFkZGluZy1lbmRdIHtcXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG59XFxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcXG4gIC5pb24tcGFkZGluZy1lbmQsXFxuW3BhZGRpbmctZW5kXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbiAgfVxcbn1cXG5cXG4uaW9uLXBhZGRpbmctYm90dG9tLFxcbltwYWRkaW5nLWJvdHRvbV0ge1xcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG59XFxuLmlvbi1wYWRkaW5nLXZlcnRpY2FsLFxcbltwYWRkaW5nLXZlcnRpY2FsXSB7XFxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG59XFxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwsXFxuW3BhZGRpbmctaG9yaXpvbnRhbF0ge1xcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcXG59XFxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcXG4gIC5pb24tcGFkZGluZy1ob3Jpem9udGFsLFxcbltwYWRkaW5nLWhvcml6b250YWxdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XFxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xcbiAgfVxcbn1cXG5cXG4uaW9uLW5vLW1hcmdpbixcXG5bbm8tbWFyZ2luXSB7XFxuICAtLW1hcmdpbi1zdGFydDogMDtcXG4gIC0tbWFyZ2luLWVuZDogMDtcXG4gIC0tbWFyZ2luLXRvcDogMDtcXG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5pb24tbWFyZ2luLFxcblttYXJnaW5dIHtcXG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbn1cXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xcbiAgLmlvbi1tYXJnaW4sXFxuW21hcmdpbl0ge1xcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XFxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XFxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIH1cXG59XFxuXFxuLmlvbi1tYXJnaW4tdG9wLFxcblttYXJnaW4tdG9wXSB7XFxuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxufVxcbi5pb24tbWFyZ2luLXN0YXJ0LFxcblttYXJnaW4tc3RhcnRdIHtcXG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG59XFxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcXG4gIC5pb24tbWFyZ2luLXN0YXJ0LFxcblttYXJnaW4tc3RhcnRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbiAgfVxcbn1cXG5cXG4uaW9uLW1hcmdpbi1lbmQsXFxuW21hcmdpbi1lbmRdIHtcXG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbn1cXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xcbiAgLmlvbi1tYXJnaW4tZW5kLFxcblttYXJnaW4tZW5kXSB7XFxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XFxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIH1cXG59XFxuXFxuLmlvbi1tYXJnaW4tYm90dG9tLFxcblttYXJnaW4tYm90dG9tXSB7XFxuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxufVxcbi5pb24tbWFyZ2luLXZlcnRpY2FsLFxcblttYXJnaW4tdmVydGljYWxdIHtcXG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG59XFxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCxcXG5bbWFyZ2luLWhvcml6b250YWxdIHtcXG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcXG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbn1cXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xcbiAgLmlvbi1tYXJnaW4taG9yaXpvbnRhbCxcXG5bbWFyZ2luLWhvcml6b250YWxdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sLnBsdC1wd2Ege1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW9uLXRleHQtY2VudGVyLFxcblt0ZXh0LWNlbnRlcl0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tdGV4dC1qdXN0aWZ5LFxcblt0ZXh0LWp1c3RpZnldIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi10ZXh0LXN0YXJ0LFxcblt0ZXh0LXN0YXJ0XSB7XFxuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLXRleHQtZW5kLFxcblt0ZXh0LWVuZF0ge1xcbiAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tdGV4dC1sZWZ0LFxcblt0ZXh0LWxlZnRdIHtcXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG59XFxuXFxuLmlvbi10ZXh0LXJpZ2h0LFxcblt0ZXh0LXJpZ2h0XSB7XFxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLXRleHQtbm93cmFwLFxcblt0ZXh0LW5vd3JhcF0ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW9uLXRleHQtd3JhcCxcXG5bdGV4dC13cmFwXSB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmlvbi10ZXh0LXNtLWNlbnRlcixcXG5bdGV4dC1zbS1jZW50ZXJdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtc20tanVzdGlmeSxcXG5bdGV4dC1zbS1qdXN0aWZ5XSB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1zbS1zdGFydCxcXG5bdGV4dC1zbS1zdGFydF0ge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LXNtLWVuZCxcXG5bdGV4dC1zbS1lbmRdIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtc20tbGVmdCxcXG5bdGV4dC1zbS1sZWZ0XSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1zbS1yaWdodCxcXG5bdGV4dC1zbS1yaWdodF0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LXNtLW5vd3JhcCxcXG5bdGV4dC1zbS1ub3dyYXBdIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LXNtLXdyYXAsXFxuW3RleHQtc20td3JhcF0ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmlvbi10ZXh0LW1kLWNlbnRlcixcXG5bdGV4dC1tZC1jZW50ZXJdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtbWQtanVzdGlmeSxcXG5bdGV4dC1tZC1qdXN0aWZ5XSB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1tZC1zdGFydCxcXG5bdGV4dC1tZC1zdGFydF0ge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LW1kLWVuZCxcXG5bdGV4dC1tZC1lbmRdIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtbWQtbGVmdCxcXG5bdGV4dC1tZC1sZWZ0XSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1tZC1yaWdodCxcXG5bdGV4dC1tZC1yaWdodF0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LW1kLW5vd3JhcCxcXG5bdGV4dC1tZC1ub3dyYXBdIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LW1kLXdyYXAsXFxuW3RleHQtbWQtd3JhcF0ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmlvbi10ZXh0LWxnLWNlbnRlcixcXG5bdGV4dC1sZy1jZW50ZXJdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtbGctanVzdGlmeSxcXG5bdGV4dC1sZy1qdXN0aWZ5XSB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1sZy1zdGFydCxcXG5bdGV4dC1sZy1zdGFydF0ge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LWxnLWVuZCxcXG5bdGV4dC1sZy1lbmRdIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtbGctbGVmdCxcXG5bdGV4dC1sZy1sZWZ0XSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1sZy1yaWdodCxcXG5bdGV4dC1sZy1yaWdodF0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LWxnLW5vd3JhcCxcXG5bdGV4dC1sZy1ub3dyYXBdIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LWxnLXdyYXAsXFxuW3RleHQtbGctd3JhcF0ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5pb24tdGV4dC14bC1jZW50ZXIsXFxuW3RleHQteGwtY2VudGVyXSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LXhsLWp1c3RpZnksXFxuW3RleHQteGwtanVzdGlmeV0ge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQteGwtc3RhcnQsXFxuW3RleHQteGwtc3RhcnRdIHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC14bC1lbmQsXFxuW3RleHQteGwtZW5kXSB7XFxuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LXhsLWxlZnQsXFxuW3RleHQteGwtbGVmdF0ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQteGwtcmlnaHQsXFxuW3RleHQteGwtcmlnaHRdIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC14bC1ub3dyYXAsXFxuW3RleHQteGwtbm93cmFwXSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC14bC13cmFwLFxcblt0ZXh0LXhsLXdyYXBdIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pb24tdGV4dC11cHBlcmNhc2UsXFxuW3RleHQtdXBwZXJjYXNlXSB7XFxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tdGV4dC1sb3dlcmNhc2UsXFxuW3RleHQtbG93ZXJjYXNlXSB7XFxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pb24tdGV4dC1jYXBpdGFsaXplLFxcblt0ZXh0LWNhcGl0YWxpemVdIHtcXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmlvbi10ZXh0LXNtLXVwcGVyY2FzZSxcXG5bdGV4dC1zbS11cHBlcmNhc2VdIHtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtc20tbG93ZXJjYXNlLFxcblt0ZXh0LXNtLWxvd2VyY2FzZV0ge1xcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1zbS1jYXBpdGFsaXplLFxcblt0ZXh0LXNtLWNhcGl0YWxpemVdIHtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5pb24tdGV4dC1tZC11cHBlcmNhc2UsXFxuW3RleHQtbWQtdXBwZXJjYXNlXSB7XFxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LW1kLWxvd2VyY2FzZSxcXG5bdGV4dC1tZC1sb3dlcmNhc2VdIHtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQtbWQtY2FwaXRhbGl6ZSxcXG5bdGV4dC1tZC1jYXBpdGFsaXplXSB7XFxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuaW9uLXRleHQtbGctdXBwZXJjYXNlLFxcblt0ZXh0LWxnLXVwcGVyY2FzZV0ge1xcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pb24tdGV4dC1sZy1sb3dlcmNhc2UsXFxuW3RleHQtbGctbG93ZXJjYXNlXSB7XFxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LWxnLWNhcGl0YWxpemUsXFxuW3RleHQtbGctY2FwaXRhbGl6ZV0ge1xcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5pb24tdGV4dC14bC11cHBlcmNhc2UsXFxuW3RleHQteGwtdXBwZXJjYXNlXSB7XFxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmlvbi10ZXh0LXhsLWxvd2VyY2FzZSxcXG5bdGV4dC14bC1sb3dlcmNhc2VdIHtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW9uLXRleHQteGwtY2FwaXRhbGl6ZSxcXG5bdGV4dC14bC1jYXBpdGFsaXplXSB7XFxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xcbn1cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuaDIge1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuaDYge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuc3ViLFxcbnN1cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhQGlvbmljL2NvcmUvY3NzL2NvcmUuY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFAaW9uaWMvY29yZS9jc3Mvbm9ybWFsaXplLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhQGlvbmljL2NvcmUvY3NzL3N0cnVjdHVyZS5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIUBpb25pYy9jb3JlL2Nzcy90eXBvZ3JhcGh5LmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhQGlvbmljL2NvcmUvY3NzL3BhZGRpbmcuY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFAaW9uaWMvY29yZS9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFAaW9uaWMvY29yZS9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFAaW9uaWMvY29yZS9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIUBpb25pYy9jb3JlL2Nzcy9mbGV4LXV0aWxzLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhQGlvbmljL2NvcmUvY3NzL2Rpc3BsYXkuY3NzXCIpLCBcIlwiKTtcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vZm9udHMvcm9ib3RvL1JvYm90by1UaGluLndvZmYyXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vZm9udHMvcm9ib3RvL1JvYm90by1UaGluLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9mb250cy9yb2JvdG8vUm9ib3RvLUxpZ2h0LndvZmYyXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vZm9udHMvcm9ib3RvL1JvYm90by1MaWdodC53b2ZmXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vZm9udHMvcm9ib3RvL1JvYm90by1SZWd1bGFyLndvZmYyXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vZm9udHMvcm9ib3RvL1JvYm90by1SZWd1bGFyLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9mb250cy9yb2JvdG8vUm9ib3RvLU1lZGl1bS53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX183X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuL2ZvbnRzL3JvYm90by9Sb2JvdG8tTWVkaXVtLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9mb250cy9yb2JvdG8vUm9ib3RvLUJvbGQud29mZjJcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9mb250cy9yb2JvdG8vUm9ib3RvLUJvbGQud29mZlwiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cXHJcXG5cXHJcXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xcclxcblxcclxcbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzAwYTc5ZDtcXHJcXG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAwLDE2NywxNTc7XFxyXFxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xcclxcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xcclxcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzAwOTM4YTtcXHJcXG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzFhYjBhNztcXHJcXG5cXHJcXG5cXHJcXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcXHJcXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDEyLDIwOSwyMzI7XFxyXFxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XFxyXFxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcXHJcXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBiYjhjYztcXHJcXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjRkNmVhO1xcclxcblxcclxcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3MDQ0ZmY7XFxyXFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiw2OCwyNTU7XFxyXFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcXHJcXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XFxyXFxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzYzM2NlMDtcXHJcXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XFxyXFxuXFxyXFxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xcclxcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDE2LDIyMCw5NjtcXHJcXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XFxyXFxuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XFxyXFxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xcclxcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMjhlMDcwO1xcclxcblxcclxcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmY2UwMDtcXHJcXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjA2LDA7XFxyXFxuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmZmZmO1xcclxcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xcclxcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcXHJcXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcXHJcXG5cXHJcXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcXHJcXG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSw2MSw2MTtcXHJcXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcXHJcXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xcclxcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZDMzOTM5O1xcclxcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XFxyXFxuXFxyXFxuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xcclxcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LDM0LDM0O1xcclxcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcXHJcXG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcXHJcXG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XFxyXFxuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XFxyXFxuXFxyXFxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XFxyXFxuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsMTU0LDE2MjtcXHJcXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcXHJcXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xcclxcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xcclxcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XFxyXFxuXFxyXFxuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcXHJcXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LDI0NCwyNDQ7XFxyXFxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcXHJcXG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwwLDA7XFxyXFxuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcXHJcXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgc3JjOiBsb2NhbChSb2JvdG8gVGhpbiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgc3JjOiBsb2NhbChSb2JvdG8gTGlnaHQpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gIHNyYzogbG9jYWwoUm9ib3RvIFJlZ3VsYXIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gIHNyYzogbG9jYWwoUm9ib3RvIE1lZGl1bSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fN19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgc3JjOiBsb2NhbChSb2JvdG8gQm9sZCksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgQXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIgfSBmcm9tICcuL3BhcnRzLmpzJztcbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgICAqIG5hbWUsIGFuZCBzdHJpbmcgbGl0ZXJhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAgICogQHBhcmFtIG5hbWUgIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgICAgICBpZiAocHJlZml4ID09PSAnLicpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBQcm9wZXJ0eUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKTtcbiAgICAgICAgICAgIHJldHVybiBjb21taXR0ZXIucGFydHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJ0AnKSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBFdmVudFBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgb3B0aW9ucy5ldmVudENvbnRleHQpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4ID09PSAnPycpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgQXR0cmlidXRlQ29tbWl0dGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUZhY3RvcnlcbiAgICAgKi9cbiAgICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHRoYXQgbGl0LWh0bWwgd2lsbCBjYWxsXG4gKiB0aGUgZnVuY3Rpb24gZHVyaW5nIHRlbXBsYXRlIHJlbmRlcmluZywgcmF0aGVyIHRoYW4gcGFzc2luZyBhcyBhIHZhbHVlLlxuICpcbiAqIEEgX2RpcmVjdGl2ZV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgUGFydCBhcyBhbiBhcmd1bWVudC4gSXQgaGFzIHRoZVxuICogc2lnbmF0dXJlOiBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLlxuICpcbiAqIEEgZGlyZWN0aXZlIF9mYWN0b3J5XyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYXJndW1lbnRzIGZvciBkYXRhIGFuZFxuICogY29uZmlndXJhdGlvbiBhbmQgcmV0dXJucyBhIGRpcmVjdGl2ZS4gVXNlcnMgb2YgZGlyZWN0aXZlIHVzdWFsbHkgcmVmZXIgdG9cbiAqIHRoZSBkaXJlY3RpdmUgZmFjdG9yeSBhcyB0aGUgZGlyZWN0aXZlLiBGb3IgZXhhbXBsZSwgXCJUaGUgcmVwZWF0IGRpcmVjdGl2ZVwiLlxuICpcbiAqIFVzdWFsbHkgYSB0ZW1wbGF0ZSBhdXRob3Igd2lsbCBpbnZva2UgYSBkaXJlY3RpdmUgZmFjdG9yeSBpbiB0aGVpciB0ZW1wbGF0ZVxuICogd2l0aCByZWxldmFudCBhcmd1bWVudHMsIHdoaWNoIHdpbGwgdGhlbiByZXR1cm4gYSBkaXJlY3RpdmUgZnVuY3Rpb24uXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgb2YgdXNpbmcgdGhlIGByZXBlYXQoKWAgZGlyZWN0aXZlIGZhY3RvcnkgdGhhdCB0YWtlcyBhblxuICogYXJyYXkgYW5kIGEgZnVuY3Rpb24gdG8gcmVuZGVyIGFuIGl0ZW06XG4gKlxuICogYGBganNcbiAqIGh0bWxgPHVsPjwke3JlcGVhdChpdGVtcywgKGl0ZW0pID0+IGh0bWxgPGxpPiR7aXRlbX08L2xpPmApfTwvdWw+YFxuICogYGBgXG4gKlxuICogV2hlbiBgcmVwZWF0YCBpcyBpbnZva2VkLCBpdCByZXR1cm5zIGEgZGlyZWN0aXZlIGZ1bmN0aW9uIHRoYXQgY2xvc2VzIG92ZXJcbiAqIGBpdGVtc2AgYW5kIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi4gV2hlbiB0aGUgb3V0ZXIgdGVtcGxhdGUgaXMgcmVuZGVyZWQsIHRoZVxuICogcmV0dXJuIGRpcmVjdGl2ZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgUGFydCBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKiBgcmVwZWF0YCB0aGVuIHBlcmZvcm1zIGl0J3MgY3VzdG9tIGxvZ2ljIHRvIHJlbmRlciBtdWx0aXBsZSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtkaXJlY3RpdmUsIGh0bWx9IGZyb20gJ2xpdC1odG1sJztcbiAqXG4gKiBjb25zdCBpbW11dGFibGUgPSBkaXJlY3RpdmUoKHYpID0+IChwYXJ0KSA9PiB7XG4gKiAgIGlmIChwYXJ0LnZhbHVlICE9PSB2KSB7XG4gKiAgICAgcGFydC5zZXRWYWx1ZSh2KVxuICogICB9XG4gKiB9KTtcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChmKSA9PiAoKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBkID0gZiguLi5hcmdzKTtcbiAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICByZXR1cm4gZDtcbn0pO1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0aXZlID0gKG8pID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcbi8qKlxuICogUmVwYXJlbnRzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydGAgKGluY2x1c2l2ZSkgdG8gYGVuZGAgKGV4Y2x1c2l2ZSksXG4gKiBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmUgYGJlZm9yZWAuIElmXG4gKiBgYmVmb3JlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGUgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsLCBiZWZvcmUgPSBudWxsKSA9PiB7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBiZWZvcmUpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLCBmcm9tXG4gKiBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnQsIGVuZCA9IG51bGwpID0+IHtcbiAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGFydCk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIE5vZGVQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFydC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IG5vQ2hhbmdlLCBub3RoaW5nIH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7IFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWFya2VyIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gKHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG5leHBvcnQgY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICEhKHZhbHVlICYmIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pO1xufTtcbi8qKlxuICogV3JpdGVzIGF0dHJpYnV0ZSB2YWx1ZXMgdG8gdGhlIERPTSBmb3IgYSBncm91cCBvZiBBdHRyaWJ1dGVQYXJ0cyBib3VuZCB0byBhXG4gKiBzaW5nbGUgYXR0aWJ1dGUuIFRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzXG4gKiBmb3IgYW4gYXR0cmlidXRlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFydHNbaV0gPSB0aGlzLl9jcmVhdGVQYXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNpbmdsZSBwYXJ0LiBPdmVycmlkZSB0aGlzIHRvIGNyZWF0ZSBhIGRpZmZlcm50IHR5cGUgb2YgcGFydC5cbiAgICAgKi9cbiAgICBfY3JlYXRlUGFydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KHRoaXMpO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpXTtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gcGFydC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmltaXRpdmUodikgfHwgIWlzSXRlcmFibGUodikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHQgPT09ICdzdHJpbmcnID8gdCA6IFN0cmluZyh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGFsbCBvciBwYXJ0IG9mIGFuIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGNvbW1pdHRlcikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNvbW1pdHRlciA9IGNvbW1pdHRlcjtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSAmJiAoIWlzUHJpbWl0aXZlKHZhbHVlKSB8fCB2YWx1ZSAhPT0gdGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIG5vdCBhIGRpcmVjdGl2ZSwgZGlydHkgdGhlIGNvbW1pdHRlciBzbyB0aGF0IGl0J2xsXG4gICAgICAgICAgICAvLyBjYWxsIHNldEF0dHJpYnV0ZS4gSWYgdGhlIHZhbHVlIGlzIGEgZGlyZWN0aXZlLCBpdCdsbCBkaXJ0eSB0aGVcbiAgICAgICAgICAgIC8vIGNvbW1pdHRlciBpZiBpdCBjYWxscyBzZXRWYWx1ZSgpLlxuICAgICAgICAgICAgaWYgKCFpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gICAgfVxufVxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhIGxvY2F0aW9uIHdpdGhpbiBhIE5vZGUgdHJlZS4gTGlrZSBhIFJhbmdlLCBOb2RlUGFydFxuICogaGFzIHN0YXJ0IGFuZCBlbmQgbG9jYXRpb25zIGFuZCBjYW4gc2V0IGFuZCB1cGRhdGUgdGhlIE5vZGVzIGJldHdlZW4gdGhvc2VcbiAqIGxvY2F0aW9ucy5cbiAqXG4gKiBOb2RlUGFydHMgc3VwcG9ydCBzZXZlcmFsIHZhbHVlIHR5cGVzOiBwcmltaXRpdmVzLCBOb2RlcywgVGVtcGxhdGVSZXN1bHRzLFxuICogYXMgd2VsbCBhcyBhcnJheXMgYW5kIGl0ZXJhYmxlcyBvZiB0aG9zZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBhcHBlbmRJbnRvKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhpcyBwYXJ0IGFmdGVyIHRoZSBgcmVmYCBub2RlIChiZXR3ZWVuIGByZWZgIGFuZCBgcmVmYCdzIG5leHRcbiAgICAgKiBzaWJsaW5nKS4gQm90aCBgcmVmYCBhbmQgaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2Rlc1xuICAgICAqIHN1Y2ggYXMgdGhvc2UgdGhhdCBhcHBlYXIgaW4gYSBsaXRlcmFsIHNlY3Rpb24gb2YgYSB0ZW1wbGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGluc2VydEFmdGVyTm9kZShyZWYpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSByZWY7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgYXBwZW5kSW50b1BhcnQocGFydCkge1xuICAgICAgICBwYXJ0Ll9faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICBwYXJ0Ll9faW5zZXJ0KHRoaXMuZW5kTm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIHBhcnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBpbnNlcnRBZnRlclBhcnQocmVmKSB7XG4gICAgICAgIHJlZi5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gcmVmLmVuZE5vZGU7XG4gICAgICAgIHJlZi5lbmROb2RlID0gdGhpcy5zdGFydE5vZGU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX19jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX2luc2VydChub2RlKSB7XG4gICAgICAgIHRoaXMuZW5kTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICAgIH1cbiAgICBfX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfX2NvbW1pdFRleHQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICAvLyBJZiBgdmFsdWVgIGlzbid0IGFscmVhZHkgYSBzdHJpbmcsIHdlIGV4cGxpY2l0bHkgY29udmVydCBpdCBoZXJlIGluIGNhc2VcbiAgICAgICAgLy8gaXQgY2FuJ3QgYmUgaW1wbGljaXRseSBjb252ZXJ0ZWQgLSBpLmUuIGl0J3MgYSBzeW1ib2wuXG4gICAgICAgIGNvbnN0IHZhbHVlQXNTdHJpbmcgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5lbmROb2RlLnByZXZpb3VzU2libGluZyAmJlxuICAgICAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgdGhpcy52YWx1ZSBpcyBwcmltaXRpdmU/XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWVBc1N0cmluZykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX19jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZhY3RvcnkodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgJiZcbiAgICAgICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHByb3BhZ2F0ZSB0aGUgdGVtcGxhdGUgcHJvY2Vzc29yIGZyb20gdGhlIFRlbXBsYXRlUmVzdWx0XG4gICAgICAgICAgICAvLyBzbyB0aGF0IHdlIHVzZSBpdHMgc3ludGF4IGV4dGVuc2lvbiwgZXRjLiBUaGUgdGVtcGxhdGUgZmFjdG9yeSBjb21lc1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9wdGlvbnMgc28gdGhhdCBpdCBjYW4gY29udHJvbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gY2FjaGluZyBhbmQgcHJlcHJvY2Vzc2luZy5cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIF92YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgX3ZhbHVlIHdpbGwgY29udGFpbiB0aGUgTm9kZVBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgX3ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgaXRlbVBhcnQ7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICBpZiAoaXRlbVBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcnQuYXBwZW5kSW50b1BhcnQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtUGFydC5pbnNlcnRBZnRlclBhcnQoaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtUGFydC5zZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIGl0ZW1QYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKGl0ZW1QYXJ0ICYmIGl0ZW1QYXJ0LmVuZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyKHN0YXJ0Tm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUsIHN0YXJ0Tm9kZS5uZXh0U2libGluZywgdGhpcy5lbmROb2RlKTtcbiAgICB9XG59XG4vKipcbiAqIEltcGxlbWVudHMgYSBib29sZWFuIGF0dHJpYnV0ZSwgcm91Z2hseSBhcyBkZWZpbmVkIGluIHRoZSBIVE1MXG4gKiBzcGVjaWZpY2F0aW9uLlxuICpcbiAqIElmIHRoZSB2YWx1ZSBpcyB0cnV0aHksIHRoZW4gdGhlIGF0dHJpYnV0ZSBpcyBwcmVzZW50IHdpdGggYSB2YWx1ZSBvZlxuICogJycuIElmIHRoZSB2YWx1ZSBpcyBmYWxzZXksIHRoZSBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCAhPT0gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9ICEhdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgUHJvcGVydHlQYXJ0cywgc28gdGhhdCB0aGUgdmFsdWUgaXMgb25seSBzZXQgb25jZVxuICogZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHMgZm9yIGEgcHJvcGVydHkuXG4gKlxuICogSWYgYW4gZXhwcmVzc2lvbiBjb250cm9scyB0aGUgd2hvbGUgcHJvcGVydHkgdmFsdWUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogYXNzaWduZWQgdG8gdGhlIHByb3BlcnR5IHVuZGVyIGNvbnRyb2wuIElmIHRoZXJlIGFyZSBzdHJpbmcgbGl0ZXJhbHMgb3JcbiAqIG11bHRpcGxlIGV4cHJlc3Npb25zLCB0aGVuIHRoZSBzdHJpbmdzIGFyZSBleHByZXNzaW9ucyBhcmUgaW50ZXJwb2xhdGVkIGludG9cbiAqIGEgc3RyaW5nIGZpcnN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlDb21taXR0ZXIgZXh0ZW5kcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgICAgIHRoaXMuc2luZ2xlID1cbiAgICAgICAgICAgIChzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJiBzdHJpbmdzWzBdID09PSAnJyAmJiBzdHJpbmdzWzFdID09PSAnJyk7XG4gICAgfVxuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydCh0aGlzKTtcbiAgICB9XG4gICAgX2dldFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5zaW5nbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRzWzBdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5fZ2V0VmFsdWUoKTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB0aGlzLl9nZXRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xufVxuLy8gRGV0ZWN0IGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgc3VwcG9ydC4gSWYgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eSBpcyByZWFkXG4vLyBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCwgdGhlbiBvcHRpb25zIGFyZSBzdXBwb3J0ZWQuIElmIG5vdCwgdGhlbiB0aGUgdGhyaWRcbi8vIGFyZ3VtZW50IHRvIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyIGlzIGludGVycHJldGVkIGFzIHRoZSBib29sZWFuIGNhcHR1cmVcbi8vIHZhbHVlIHNvIHdlIHNob3VsZCBvbmx5IHBhc3MgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eS5cbmxldCBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcbnRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZ2V0IGNhcHR1cmUoKSB7XG4gICAgICAgICAgICBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbn1cbmNhdGNoIChfZSkge1xufVxuZXhwb3J0IGNsYXNzIEV2ZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZXZlbnROYW1lLCBldmVudENvbnRleHQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgIHRoaXMuZXZlbnRDb250ZXh0ID0gZXZlbnRDb250ZXh0O1xuICAgICAgICB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCA9IChlKSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgICAgIG9sZExpc3RlbmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAobmV3TGlzdGVuZXIuY2FwdHVyZSAhPT0gb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09IG9sZExpc3RlbmVyLnBhc3NpdmUpO1xuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9IG51bGwgJiYgKG9sZExpc3RlbmVyID09IG51bGwgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuY2FsbCh0aGlzLmV2ZW50Q29udGV4dCB8fCB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobykgPT4gbyAmJlxuICAgIChldmVudE9wdGlvbnNTdXBwb3J0ZWQgP1xuICAgICAgICB7IGNhcHR1cmU6IG8uY2FwdHVyZSwgcGFzc2l2ZTogby5wYXNzaXZlLCBvbmNlOiBvLm9uY2UgfSA6XG4gICAgICAgIG8uY2FwdHVyZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBOb2RlUGFydCB9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHsgdGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmV4cG9ydCBjb25zdCBwYXJ0cyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSByZXN1bHQgb3Igb3RoZXIgdmFsdWUgdG8gYSBjb250YWluZXIuXG4gKlxuICogVG8gdXBkYXRlIGEgY29udGFpbmVyIHdpdGggbmV3IHZhbHVlcywgcmVldmFsdWF0ZSB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBhbmRcbiAqIGNhbGwgYHJlbmRlcmAgd2l0aCB0aGUgbmV3IHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gcmVzdWx0IEFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IE5vZGVQYXJ0IC0gdHlwaWNhbGx5IGEgVGVtcGxhdGVSZXN1bHRcbiAqICAgICBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZSBgaHRtbGAgb3IgYHN2Z2AuXG4gKiBAcGFyYW0gY29udGFpbmVyIEEgRE9NIHBhcmVudCB0byByZW5kZXIgdG8uIFRoZSBlbnRpcmUgY29udGVudHMgYXJlIGVpdGhlclxuICogICAgIHJlcGxhY2VkLCBvciBlZmZpY2llbnRseSB1cGRhdGVkIGlmIHRoZSBzYW1lIHJlc3VsdCB0eXBlIHdhcyBwcmV2aW91c1xuICogICAgIHJlbmRlcmVkIHRoZXJlLlxuICogQHBhcmFtIG9wdGlvbnMgUmVuZGVyT3B0aW9ucyBmb3IgdGhlIGVudGlyZSByZW5kZXIgdHJlZSByZW5kZXJlZCB0byB0aGlzXG4gKiAgICAgY29udGFpbmVyLiBSZW5kZXIgb3B0aW9ucyBtdXN0ICpub3QqIGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMgdG8gdGhlIHNhbWVcbiAqICAgICBjb250YWluZXIsIGFzIHRob3NlIGNoYW5nZXMgd2lsbCBub3QgZWZmZWN0IHByZXZpb3VzbHkgcmVuZGVyZWQgRE9NLlxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHJlc3VsdCwgY29udGFpbmVyLCBvcHRpb25zKSA9PiB7XG4gICAgbGV0IHBhcnQgPSBwYXJ0cy5nZXQoY29udGFpbmVyKTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0ID0gbmV3IE5vZGVQYXJ0KE9iamVjdC5hc3NpZ24oeyB0ZW1wbGF0ZUZhY3RvcnkgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgcGFydC5hcHBlbmRJbnRvKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIHBhcnQuc2V0VmFsdWUocmVzdWx0KTtcbiAgICBwYXJ0LmNvbW1pdCgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBtYXJrZXIsIFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG4vKipcbiAqIFRoZSBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeSB3aGljaCBjYWNoZXMgVGVtcGxhdGVzIGtleWVkIG9uXG4gKiByZXN1bHQudHlwZSBhbmQgcmVzdWx0LnN0cmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUZhY3RvcnkocmVzdWx0KSB7XG4gICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocmVzdWx0LnR5cGUpO1xuICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXAoKSxcbiAgICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChyZXN1bHQudHlwZSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gICAgLy8gVGhpcyBrZXkgaXMgc2hhcmVkIGJldHdlZW4gYWxsIHRlbXBsYXRlcyB3aXRoIGlkZW50aWNhbCBjb250ZW50XG4gICAgY29uc3Qga2V5ID0gcmVzdWx0LnN0cmluZ3Muam9pbihtYXJrZXIpO1xuICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgICAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIHJlc3VsdC5nZXRUZW1wbGF0ZUVsZW1lbnQoKSk7XG4gICAgICAgIC8vIENhY2hlIHRoZSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICAgIH1cbiAgICAvLyBDYWNoZSBhbGwgZnV0dXJlIHF1ZXJpZXMgZm9yIHRoaXMgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAgICB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYWNoZXMgPSBuZXcgTWFwKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1mYWN0b3J5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyBpc0NFUG9seWZpbGwgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUGFydEFjdGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHByb2Nlc3Nvciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9fcGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX19wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Nsb25lKCkge1xuICAgICAgICAvLyBUaGVyZSBhcmUgYSBudW1iZXIgb2Ygc3RlcHMgaW4gdGhlIGxpZmVjeWNsZSBvZiBhIHRlbXBsYXRlIGluc3RhbmNlJ3NcbiAgICAgICAgLy8gRE9NIGZyYWdtZW50OlxuICAgICAgICAvLyAgMS4gQ2xvbmUgLSBjcmVhdGUgdGhlIGluc3RhbmNlIGZyYWdtZW50XG4gICAgICAgIC8vICAyLiBBZG9wdCAtIGFkb3B0IGludG8gdGhlIG1haW4gZG9jdW1lbnRcbiAgICAgICAgLy8gIDMuIFByb2Nlc3MgLSBmaW5kIHBhcnQgbWFya2VycyBhbmQgY3JlYXRlIHBhcnRzXG4gICAgICAgIC8vICA0LiBVcGdyYWRlIC0gdXBncmFkZSBjdXN0b20gZWxlbWVudHNcbiAgICAgICAgLy8gIDUuIFVwZGF0ZSAtIHNldCBub2RlLCBhdHRyaWJ1dGUsIHByb3BlcnR5LCBldGMuLCB2YWx1ZXNcbiAgICAgICAgLy8gIDYuIENvbm5lY3QgLSBjb25uZWN0IHRvIHRoZSBkb2N1bWVudC4gT3B0aW9uYWwgYW5kIG91dHNpZGUgb2YgdGhpc1xuICAgICAgICAvLyAgICAgbWV0aG9kLlxuICAgICAgICAvL1xuICAgICAgICAvLyBXZSBoYXZlIGEgZmV3IGNvbnN0cmFpbnRzIG9uIHRoZSBvcmRlcmluZyBvZiB0aGVzZSBzdGVwczpcbiAgICAgICAgLy8gICogV2UgbmVlZCB0byB1cGdyYWRlIGJlZm9yZSB1cGRhdGluZywgc28gdGhhdCBwcm9wZXJ0eSB2YWx1ZXMgd2lsbCBwYXNzXG4gICAgICAgIC8vICAgIHRocm91Z2ggYW55IHByb3BlcnR5IHNldHRlcnMuXG4gICAgICAgIC8vICAqIFdlIHdvdWxkIGxpa2UgdG8gcHJvY2VzcyBiZWZvcmUgdXBncmFkaW5nIHNvIHRoYXQgd2UncmUgc3VyZSB0aGF0IHRoZVxuICAgICAgICAvLyAgICBjbG9uZWQgZnJhZ21lbnQgaXMgaW5lcnQgYW5kIG5vdCBkaXN0dXJiZWQgYnkgc2VsZi1tb2RpZnlpbmcgRE9NLlxuICAgICAgICAvLyAgKiBXZSB3YW50IGN1c3RvbSBlbGVtZW50cyB0byB1cGdyYWRlIGV2ZW4gaW4gZGlzY29ubmVjdGVkIGZyYWdtZW50cy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gR2l2ZW4gdGhlc2UgY29uc3RyYWludHMsIHdpdGggZnVsbCBjdXN0b20gZWxlbWVudHMgc3VwcG9ydCB3ZSB3b3VsZFxuICAgICAgICAvLyBwcmVmZXIgdGhlIG9yZGVyOiBDbG9uZSwgUHJvY2VzcywgQWRvcHQsIFVwZ3JhZGUsIFVwZGF0ZSwgQ29ubmVjdFxuICAgICAgICAvL1xuICAgICAgICAvLyBCdXQgU2FmYXJpIGRvb2VzIG5vdCBpbXBsZW1lbnQgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5I3VwZ3JhZGUsIHNvIHdlXG4gICAgICAgIC8vIGNhbiBub3QgaW1wbGVtZW50IHRoYXQgb3JkZXIgYW5kIHN0aWxsIGhhdmUgdXBncmFkZS1iZWZvcmUtdXBkYXRlIGFuZFxuICAgICAgICAvLyB1cGdyYWRlIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuIFNvIHdlIGluc3RlYWQgc2FjcmlmaWNlIHRoZVxuICAgICAgICAvLyBwcm9jZXNzLWJlZm9yZS11cGdyYWRlIGNvbnN0cmFpbnQsIHNpbmNlIGluIEN1c3RvbSBFbGVtZW50cyB2MSBlbGVtZW50c1xuICAgICAgICAvLyBtdXN0IG5vdCBtb2RpZnkgdGhlaXIgbGlnaHQgRE9NIGluIHRoZSBjb25zdHJ1Y3Rvci4gV2Ugc3RpbGwgaGF2ZSBpc3N1ZXNcbiAgICAgICAgLy8gd2hlbiBjby1leGlzdGluZyB3aXRoIENFdjAgZWxlbWVudHMgbGlrZSBQb2x5bWVyIDEsIGFuZCB3aXRoIHBvbHlmaWxsc1xuICAgICAgICAvLyB0aGF0IGRvbid0IHN0cmljdGx5IGFkaGVyZSB0byB0aGUgbm8tbW9kaWZpY2F0aW9uIHJ1bGUgYmVjYXVzZSBzaGFkb3dcbiAgICAgICAgLy8gRE9NLCB3aGljaCBtYXkgYmUgY3JlYXRlZCBpbiB0aGUgY29uc3RydWN0b3IsIGlzIGVtdWxhdGVkIGJ5IGJlaW5nIHBsYWNlZFxuICAgICAgICAvLyBpbiB0aGUgbGlnaHQgRE9NLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcmVzdWx0aW5nIG9yZGVyIGlzIG9uIG5hdGl2ZSBpczogQ2xvbmUsIEFkb3B0LCBVcGdyYWRlLCBQcm9jZXNzLFxuICAgICAgICAvLyBVcGRhdGUsIENvbm5lY3QuIGRvY3VtZW50LmltcG9ydE5vZGUoKSBwZXJmb3JtcyBDbG9uZSwgQWRvcHQsIGFuZCBVcGdyYWRlXG4gICAgICAgIC8vIGluIG9uZSBzdGVwLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgQ3VzdG9tIEVsZW1lbnRzIHYxIHBvbHlmaWxsIHN1cHBvcnRzIHVwZ3JhZGUoKSwgc28gdGhlIG9yZGVyIHdoZW5cbiAgICAgICAgLy8gcG9seWZpbGxlZCBpcyB0aGUgbW9yZSBpZGVhbDogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsXG4gICAgICAgIC8vIENvbm5lY3QuXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaXNDRVBvbHlmaWxsID9cbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSA6XG4gICAgICAgICAgICBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihmcmFnbWVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhcnQ7XG4gICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG5vZGVzIGFuZCBwYXJ0cyBvZiBhIHRlbXBsYXRlXG4gICAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcm9ncmVzcyB0aGUgdHJlZSB3YWxrZXIgdW50aWwgd2UgZmluZCBvdXIgbmV4dCBwYXJ0J3Mgbm9kZS5cbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBtdWx0aXBsZSBwYXJ0cyBtYXkgc2hhcmUgdGhlIHNhbWUgbm9kZSAoYXR0cmlidXRlIHBhcnRzXG4gICAgICAgICAgICAvLyBvbiBhIHNpbmdsZSBlbGVtZW50KSwgc28gdGhpcyBsb29wIG1heSBub3QgcnVuIGF0IGFsbC5cbiAgICAgICAgICAgIHdoaWxlIChub2RlSW5kZXggPCBwYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gbm9kZS5jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UndmUgZXhoYXVzdGVkIHRoZSBjb250ZW50IGluc2lkZSBhIG5lc3RlZCB0ZW1wbGF0ZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gVGhlcmUgaXMgYSB0ZW1wbGF0ZSBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBUaGUgd2Fsa2VyIHdpbGwgZmluZCBhIG5leHROb2RlIG91dHNpZGUgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UndmUgYXJyaXZlZCBhdCBvdXIgcGFydCdzIG5vZGUuXG4gICAgICAgICAgICBpZiAocGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBwYXJ0Lmluc2VydEFmdGVyTm9kZShub2RlLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydHMucHVzaCguLi50aGlzLnByb2Nlc3Nvci5oYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhub2RlLCBwYXJ0Lm5hbWUsIHBhcnQuc3RyaW5ncywgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLWluc3RhbmNlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYm91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuY29uc3QgY29tbWVudE1hcmtlciA9IGAgJHttYXJrZXJ9IGA7XG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHN0cmluZ3MsIHZhbHVlcywgdHlwZSwgcHJvY2Vzc29yKSB7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHVzZWQgdG8gY3JlYXRlIGEgYDx0ZW1wbGF0ZT5gIGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0SFRNTCgpIHtcbiAgICAgICAgY29uc3QgbCA9IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaHRtbCA9ICcnO1xuICAgICAgICBsZXQgaXNDb21tZW50QmluZGluZyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGJpbmRpbmcgd2Ugd2FudCB0byBkZXRlcm1pbmUgdGhlIGtpbmQgb2YgbWFya2VyIHRvIGluc2VydFxuICAgICAgICAgICAgLy8gaW50byB0aGUgdGVtcGxhdGUgc291cmNlIGJlZm9yZSBpdCdzIHBhcnNlZCBieSB0aGUgYnJvd3NlcidzIEhUTUxcbiAgICAgICAgICAgIC8vIHBhcnNlci4gVGhlIG1hcmtlciB0eXBlIGlzIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGV4cHJlc3Npb24gaXMgaW4gYW5cbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSwgdGV4dCwgb3IgY29tbWVudCBwb2lzaXRpb24uXG4gICAgICAgICAgICAvLyAgICogRm9yIG5vZGUtcG9zaXRpb24gYmluZGluZ3Mgd2UgaW5zZXJ0IGEgY29tbWVudCB3aXRoIHRoZSBtYXJrZXJcbiAgICAgICAgICAgIC8vICAgICBzZW50aW5lbCBhcyBpdHMgdGV4dCBjb250ZW50LCBsaWtlIDwhLS17e2xpdC1ndWlkfX0tLT4uXG4gICAgICAgICAgICAvLyAgICogRm9yIGF0dHJpYnV0ZSBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIGZvciB0aGVcbiAgICAgICAgICAgIC8vICAgICBmaXJzdCBiaW5kaW5nLCBzbyB0aGF0IHdlIHN1cHBvcnQgdW5xdW90ZWQgYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgICAgICAgICAgLy8gICAgIFN1YnNlcXVlbnQgYmluZGluZ3MgY2FuIHVzZSBhIGNvbW1lbnQgbWFya2VyIGJlY2F1c2UgbXVsdGktYmluZGluZ1xuICAgICAgICAgICAgLy8gICAgIGF0dHJpYnV0ZXMgbXVzdCBiZSBxdW90ZWQuXG4gICAgICAgICAgICAvLyAgICogRm9yIGNvbW1lbnQgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBzbyB3ZSBkb24ndFxuICAgICAgICAgICAgLy8gICAgIGNsb3NlIHRoZSBjb21tZW50LlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc291cmNlLCBidXQgaXMgKm5vdCogYW4gSFRNTFxuICAgICAgICAgICAgLy8gcGFyc2VyLiBXZSBkb24ndCBuZWVkIHRvIHRyYWNrIHRoZSB0cmVlIHN0cnVjdHVyZSBvZiB0aGUgSFRNTCwgb25seVxuICAgICAgICAgICAgLy8gd2hldGhlciBhIGJpbmRpbmcgaXMgaW5zaWRlIGEgY29tbWVudCwgYW5kIGlmIG5vdCwgaWYgaXQgYXBwZWFycyB0byBiZVxuICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGJpbmRpbmcgaW4gYW4gYXR0cmlidXRlLlxuICAgICAgICAgICAgY29uc3QgY29tbWVudE9wZW4gPSBzLmxhc3RJbmRleE9mKCc8IS0tJyk7XG4gICAgICAgICAgICAvLyBXZSdyZSBpbiBjb21tZW50IHBvc2l0aW9uIGlmIHdlIGhhdmUgYSBjb21tZW50IG9wZW4gd2l0aCBubyBmb2xsb3dpbmdcbiAgICAgICAgICAgIC8vIGNvbW1lbnQgY2xvc2UuIEJlY2F1c2UgPC0tIGNhbiBhcHBlYXIgaW4gYW4gYXR0cmlidXRlIHZhbHVlIHRoZXJlIGNhblxuICAgICAgICAgICAgLy8gYmUgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgICAgICAgaXNDb21tZW50QmluZGluZyA9IChjb21tZW50T3BlbiA+IC0xIHx8IGlzQ29tbWVudEJpbmRpbmcpICYmXG4gICAgICAgICAgICAgICAgcy5pbmRleE9mKCctLT4nLCBjb21tZW50T3BlbiArIDEpID09PSAtMTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlIHByZWNlZWRpbmcgdGhlXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uLiBUaGlzIGNhbiBtYXRjaCBcIm5hbWU9dmFsdWVcIiBsaWtlIHN0cnVjdHVyZXMgaW4gdGV4dCxcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzLCBhbmQgYXR0cmlidXRlIHZhbHVlcywgc28gdGhlcmUgY2FuIGJlIGZhbHNlLXBvc2l0aXZlcy5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZU1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU1hdGNoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UncmUgb25seSBpbiB0aGlzIGJyYW5jaCBpZiB3ZSBkb24ndCBoYXZlIGEgYXR0cmlidXRlLWxpa2VcbiAgICAgICAgICAgICAgICAvLyBwcmVjZWVkaW5nIHNlcXVlbmNlLiBGb3IgY29tbWVudHMsIHRoaXMgZ3VhcmRzIGFnYWluc3QgdW51c3VhbFxuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZXMgbGlrZSA8ZGl2IGZvbz1cIjwhLS0keydiYXInfVwiPi4gQ2FzZXMgbGlrZVxuICAgICAgICAgICAgICAgIC8vIDwhLS0gZm9vPSR7J2Jhcid9LS0+IGFyZSBoYW5kbGVkIGNvcnJlY3RseSBpbiB0aGUgYXR0cmlidXRlIGJyYW5jaFxuICAgICAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gcyArIChpc0NvbW1lbnRCaW5kaW5nID8gY29tbWVudE1hcmtlciA6IG5vZGVNYXJrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGF0dHJpYnV0ZXMgd2UgdXNlIGp1c3QgYSBtYXJrZXIgc2VudGluZWwsIGFuZCBhbHNvIGFwcGVuZCBhXG4gICAgICAgICAgICAgICAgLy8gJGxpdCQgc3VmZml4IHRvIHRoZSBuYW1lIHRvIG9wdC1vdXQgb2YgYXR0cmlidXRlLXNwZWNpZmljIHBhcnNpbmdcbiAgICAgICAgICAgICAgICAvLyB0aGF0IElFIGFuZCBFZGdlIGRvIGZvciBzdHlsZSBhbmQgY2VydGFpbiBTVkcgYXR0cmlidXRlcy5cbiAgICAgICAgICAgICAgICBodG1sICs9IHMuc3Vic3RyKDAsIGF0dHJpYnV0ZU1hdGNoLmluZGV4KSArIGF0dHJpYnV0ZU1hdGNoWzFdICtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTWF0Y2hbMl0gKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArIGF0dHJpYnV0ZU1hdGNoWzNdICtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gdGhpcy5zdHJpbmdzW2xdO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNTCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBnZXRIVE1MKCkge1xuICAgICAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtcmVzdWx0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlcywgYW5kXG4gKiBhdHRyaWJ1dGVzIHdpdGggbWFya3VwLWxpa2UgdGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgbm9kZXNUb1JlbW92ZSA9IFtdO1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LmNvbnRlbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbGFzdCBpbmRleCBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0LiBXZSB0cnkgdG8gZGVsZXRlXG4gICAgICAgIC8vIHVubmVjZXNzYXJ5IG5vZGVzLCBidXQgd2UgbmV2ZXIgd2FudCB0byBhc3NvY2lhdGUgdHdvIGRpZmZlcmVudCBwYXJ0c1xuICAgICAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgICAgIGxldCBsYXN0UGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCB7IHN0cmluZ3MsIHZhbHVlczogeyBsZW5ndGggfSB9ID0gcmVzdWx0O1xuICAgICAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgICAgICAgICAgLy8gLSBUaGVyZSBpcyBhIHRlbXBsYXRlIGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBhdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgICAgICAgICAgIC8vIGFzc3VtZSBhIGNvcnJlc3BvbmRlbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHNlY3Rpb24gbGVhZGluZyB1cCB0byB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaW4gdGhpcyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSBzdHJpbmdzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzdHJpbmdGb3JQYXJ0KVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgYm91bmRBdHRyaWJ1dGVTdWZmaXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0aWNzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IHN0YXRpY3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBkYXRhLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc2VydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCA9IGNyZWF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHMuc2xpY2UoMCwgbWF0Y2guaW5kZXgpICsgbWF0Y2hbMV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0uc2xpY2UoMCwgLWJvdW5kQXR0cmlidXRlU3VmZml4Lmxlbmd0aCkgKyBtYXRjaFszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4OiArK2luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gdGV4dCwgd2UgbXVzdCBpbnNlcnQgYSBjb21tZW50IHRvIG1hcmsgb3VyIHBsYWNlLlxuICAgICAgICAgICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRhdGEgPT09IG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAvLyAgKiBXZSBkb24ndCBoYXZlIGEgcHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vICAqIFRoZSBwcmV2aW91c1NpYmxpbmcgaXMgYWxyZWFkeSB0aGUgc3RhcnQgb2YgYSBwcmV2aW91cyBwYXJ0XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhc3RQYXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHJlbW92ZSBpdCB0byBzYXZlIGZ1dHVyZSBjb3N0cy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6IC0xIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzdWZmaXgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoO1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG4vLyBBbGxvd3MgYGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpYCB0byBiZSByZW5hbWVkIGZvciBhXG4vLyBzbWFsbCBtYW51YWwgc2l6ZS1zYXZpbmdzLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJzXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycywgd2hpY2ggaW5jbHVkZXMgZXZlcnlcbiAqIHNwYWNlIGNoYXJhY3RlciBleGNlcHQgXCIgXCIuXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPSAvKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICpcbiAqIE1haW4gbGl0LWh0bWwgbW9kdWxlLlxuICpcbiAqIE1haW4gZXhwb3J0czpcbiAqXG4gKiAtICBbW2h0bWxdXVxuICogLSAgW1tzdmddXVxuICogLSAgW1tyZW5kZXJdXVxuICpcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqIEBwcmVmZXJyZWRcbiAqL1xuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHsgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIH0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHsgU1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciwgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIH0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHsgZGlyZWN0aXZlLCBpc0RpcmVjdGl2ZSB9IGZyb20gJy4vbGliL2RpcmVjdGl2ZS5qcyc7XG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbGluZSB3aGVuIHdlIGdldCBOb2RlUGFydCBtb3ZpbmcgbWV0aG9kc1xuZXhwb3J0IHsgcmVtb3ZlTm9kZXMsIHJlcGFyZW50Tm9kZXMgfSBmcm9tICcuL2xpYi9kb20uanMnO1xuZXhwb3J0IHsgbm9DaGFuZ2UsIG5vdGhpbmcgfSBmcm9tICcuL2xpYi9wYXJ0LmpzJztcbmV4cG9ydCB7IEF0dHJpYnV0ZUNvbW1pdHRlciwgQXR0cmlidXRlUGFydCwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgaXNJdGVyYWJsZSwgaXNQcmltaXRpdmUsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciwgUHJvcGVydHlQYXJ0IH0gZnJvbSAnLi9saWIvcGFydHMuanMnO1xuZXhwb3J0IHsgcGFydHMsIHJlbmRlciB9IGZyb20gJy4vbGliL3JlbmRlci5qcyc7XG5leHBvcnQgeyB0ZW1wbGF0ZUNhY2hlcywgdGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQgeyBUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuZXhwb3J0IHsgU1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7IGNyZWF0ZU1hcmtlciwgaXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlIH0gZnJvbSAnLi9saWIvdGVtcGxhdGUuanMnO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4od2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4xLjInKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFNWR1RlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ3N2ZycsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCIvKipcclxuICogYXBwLmpzXHJcbiAqXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciB0aGUgYXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIEBhdXRob3IgQ2xheSBHdWxpY2tcclxuICogQGVtYWlsIGNsYXl0b25ndWxpY2tAZ21haWwuY29tXHJcbiAqL1xyXG5cclxuLy9nbG9iYWwgc2NyaXB0c1xyXG5pbXBvcnQgJ0Bpb25pYy9jb3JlL2Rpc3QvZXNtJztcclxuaW1wb3J0IHtkZWZpbmVDdXN0b21FbGVtZW50c30gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9lc20vbG9hZGVyJztcclxuXHJcbi8vdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50XHJcbmltcG9ydCBNYWluIGZyb20gJy4vdmlldy9jb21wb25lbnRzL2FwcC9jb21wb25lbnQtbWFpbic7XHJcblxyXG4oXHJcbiAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZGVmaW5lQ3VzdG9tRWxlbWVudHMoKTtcclxuICAgICAgICAvL2NyZWF0ZSB0aGUgbWFpbiBjb21wb25lbnQgYW5kIGtpY2sgb2ZmIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9J2F1dG8nO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmV3IE1haW4oKSk7XHJcbiAgICB9XHJcbikoKTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tQm9sZC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNzcy9mb250cy9yb2JvdG8vUm9ib3RvLUJvbGQud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tTGlnaHQud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjc3MvZm9udHMvcm9ib3RvL1JvYm90by1MaWdodC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjc3MvZm9udHMvcm9ib3RvL1JvYm90by1NZWRpdW0ud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjc3MvZm9udHMvcm9ib3RvL1JvYm90by1NZWRpdW0ud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tUmVndWxhci53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNzcy9mb250cy9yb2JvdG8vUm9ib3RvLVJlZ3VsYXIud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY3NzL2ZvbnRzL3JvYm90by9Sb2JvdG8tVGhpbi53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNzcy9mb250cy9yb2JvdG8vUm9ib3RvLVRoaW4ud29mZjJcIjsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGhlbWUuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCAnLi4vLi4vLi4vY3NzL3RoZW1lLmNzcyc7XHJcblxyXG5pbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuaW1wb3J0IFNjZW5lSG9tZSBmcm9tICcuLi9zY2VuZS9zY2VuZS1ob21lJztcclxuaW1wb3J0IFNjZW5lUHJvZmlsZSBmcm9tICcuLi9zY2VuZS9zY2VuZS1wcm9maWxlJztcclxuaW1wb3J0IFNjZW5lQ29udGFjdFVzIGZyb20gJy4uL3NjZW5lL3NjZW5lLWNvbnRhY3QtdXMnO1xyXG5pbXBvcnQgU2NlbmVTZXR0aW5ncyBmcm9tICcuLi9zY2VuZS9zY2VuZS1zZXR0aW5ncyc7XHJcbmltcG9ydCBTY2VuZUFib3V0IGZyb20gJy4uL3NjZW5lL3NjZW5lLWFib3V0JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNsYXNzXHJcbiAqL1xyXG5jbGFzcyBDb21wb25lbnRNYWluIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTjtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gTk9ERV9FTlY7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFN0YXJ0aW5nIEFwcGxpY2F0aW9uIHYke3RoaXMudmVyc2lvbn0gaW4gJHt0aGlzLmVudmlyb25tZW50fSBlbnZpcm9ubWVudC5gKVxyXG5cclxuICAgICAgICB0aGlzLm1lbnVfc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpc2FibGVfaG9tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVfcHJvZmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVfY29udGFjdF91czogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVfc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNhYmxlX2Fib3V0OiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm15X3NpdHRlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVhZHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5X3Byb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICgpID0+IGh0bWxgXHJcbiAgICAgICAgPGlvbi1hcHAgc3R5bGU9XCJvdmVyZmxvdy15OiBhdXRvXCI+XHJcbiAgICAgICAgICAgIDxpb24tcm91dGVyIEBpb25Sb3V0ZURpZENoYW5nZT0keyhlKSA9PiB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdlKGUpfT5cclxuICAgICAgICAgICAgICAgIDxpb24tcm91dGUgdXJsPScvJyBjb21wb25lbnQ9J3NjZW5lLWhvbWUnPjwvaW9uLXJvdXRlPlxyXG4gICAgICAgICAgICAgICAgPGlvbi1yb3V0ZSB1cmw9Jy9ob21lJyBjb21wb25lbnQ9J3NjZW5lLWhvbWUnPjwvaW9uLXJvdXRlPlxyXG4gICAgICAgICAgICAgICAgPGlvbi1yb3V0ZSB1cmw9Jy9wcm9maWxlJyBjb21wb25lbnQ9J3NjZW5lLXByb2ZpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tcm91dGUgdXJsPScvcHJvZmlsZScgY29tcG9uZW50PSd0YWItcHJvZmlsZSc+PC9pb24tcm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi1yb3V0ZSB1cmw9Jy91c2VycycgY29tcG9uZW50PSd0YWItdXNlcnMnPjwvaW9uLXJvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tcm91dGUgdXJsPScvc2NoZWR1bGUnIGNvbXBvbmVudD0ndGFiLXNjaGVkdWxlJz48L2lvbi1yb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8aW9uLXJvdXRlIHVybD0nL2JpbGxpbmcnIGNvbXBvbmVudD0ndGFiLWJpbGxpbmcnPjwvaW9uLXJvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tcm91dGUgY29tcG9uZW50PSd0YWItcHJvZmlsZSc+PC9pb24tcm91dGU+XHJcbiAgICAgICAgICAgICAgICA8L2lvbi1yb3V0ZT5cclxuICAgICAgICAgICAgICAgIDxpb24tcm91dGUgdXJsPScvY29udGFjdC11cycgY29tcG9uZW50PSdzY2VuZS1jb250YWN0LXVzJz48L2lvbi1yb3V0ZT5cclxuICAgICAgICAgICAgICAgIDxpb24tcm91dGUgdXJsPScvc2V0dGluZ3MnIGNvbXBvbmVudD0nc2NlbmUtc2V0dGluZ3MnPjwvaW9uLXJvdXRlPlxyXG4gICAgICAgICAgICAgICAgPGlvbi1yb3V0ZSB1cmw9Jy9hYm91dCcgY29tcG9uZW50PSdzY2VuZS1hYm91dCc+PC9pb24tcm91dGU+XHJcbiAgICAgICAgICAgIDwvaW9uLXJvdXRlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpb24tbWVudSBjb250ZW50LWlkPVwiYXBwX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpb24tY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aW9uLWxpc3QgaWQ9XCJsZWZ0X21lbnVfbGlzdFwiIGxpbmVzPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLW1lbnUtdG9nZ2xlIGF1dG8taGlkZT1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gYnV0dG9uIGhyZWY9XCJcIiBkaXNhYmxlZD1cIiR7dGhpcy5tZW51X3N0YXRlLmRpc2FibGVfaG9tZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT0naG9tZSc+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtIGJ1dHRvbiBocmVmPVwicHJvZmlsZVwiIGRpc2FibGVkPVwiJHt0aGlzLm1lbnVfc3RhdGUuZGlzYWJsZV9wcm9maWxlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPSdwZW9wbGUnPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taXRlbSBidXR0b24gaHJlZj1cImNvbnRhY3QtdXNcIiBkaXNhYmxlZD1cIiR7dGhpcy5tZW51X3N0YXRlLmRpc2FibGVfY29udGFjdF91c31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT0nbWFpbCc+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXI+PC9pb24taXRlbS1kaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtIGJ1dHRvbiBocmVmPVwic2V0dGluZ3NcIiBkaXNhYmxlZD1cIiR7dGhpcy5tZW51X3N0YXRlLmRpc2FibGVfc2V0dGluZ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT0nc2V0dGluZ3MnPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gYnV0dG9uIGhyZWY9XCJhYm91dFwiIGRpc2FibGVkPVwiJHt0aGlzLm1lbnVfc3RhdGUuZGlzYWJsZV9hYm91dH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT0naW5mb3JtYXRpb24tY2lyY2xlJz48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFNtYXJ0U2l0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tbWVudS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9pb24tbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvaW9uLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvaW9uLW1lbnU+XHJcbiAgICAgICAgICAgIDxpb24tbmF2IGlkPVwiYXBwX2NvbnRlbnRcIiBhbmltYXRlZD1cInRydWVcIj48L2lvbi1uYXY+XHJcblxyXG4gICAgICAgICAgICA8aW9uLWxvYWRpbmctY29udHJvbGxlcj48L2lvbi1sb2FkaW5nLWNvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgIDxpb24tbW9kYWwtY29udHJvbGxlcj48L2lvbi1tb2RhbC1jb250cm9sbGVyPlxyXG4gICAgICAgICAgICA8aW9uLXBpY2tlci1jb250cm9sbGVyPjwvaW9uLXBpY2tlci1jb250cm9sbGVyPlxyXG4gICAgICAgICAgICA8aW9uLWFsZXJ0LWNvbnRyb2xsZXI+PC9pb24tYWxlcnQtY29udHJvbGxlcj5cclxuICAgICAgICAgICAgPGlvbi10b2FzdC1jb250cm9sbGVyPjwvaW9uLXRvYXN0LWNvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgIDxpb24tcHJvZ3Jlc3MtYmFyIHN0eWxlPVwib3BhY2l0eTowOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGxpbmVhcjtcIiBjb2xvcj1cIndhcm5pbmdcIiB0eXBlPVwiaW5kZXRlcm1pbmF0ZVwiIHZhbHVlPVwiMFwiPjwvaW9uLXByb2dyZXNzLWJhcj5cclxuICAgICAgICA8L2lvbi1hcHA+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJyb2tlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkaW5nJywgdGhpcy5oYW5kbGVMb2FkaW5nLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGJyb2tlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkaW5nX2NvbXBsZXRlJywgdGhpcy5oYW5kbGVMb2FkaW5nQ29tcGxldGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc19iYXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1wcm9ncmVzcy1iYXInKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGxldCBpb25fYXBwID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaW9uLWFwcFwiKTtcclxuICAgICAgICAvL3dhaXQgZm9yIGlvbmljIHRvIGxvYWRcclxuICAgICAgICBsZXQgbG9hZGluZ19pbnRlcnZhbCA9IHNldEludGVydmFsKFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighaW9uX2FwcC5jb21wb25lbnRPblJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiaW9uaWMgbm90IGxvYWRlZCwgZGVsYXlpbmcgMTBtcy4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb2FkaW5nX2ludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBpb25fYXBwLmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlYWR5X3Jlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH0sIDEwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlcmUncyBzb21lIGRhdGEgdGhhdCdzIGNvcmUgdGhlIHRoZSBmYW1pbHkgYXBwIHRoYXQgd2UgZ28gYWhlYWQgYW5kIGxvYWQgYXQgc3RhcnR1cCB0aW1lXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlZnJlc2hEYXRhKCkge1xyXG4gICAgICAgIGxldCBsb2FkaW5nX2NvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tbG9hZGluZy1jb250cm9sbGVyJyk7XHJcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBhd2FpdCBsb2FkaW5nX2NvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2FkaW5nLi4uXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKTtcclxuICAgICAgICAvL3ByZXRlbmQgd2UncmUgbG9hZGluZyBkYXRhIGhlcmVcclxuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgbG9hZGluZ19jb250cm9sbGVyLmRpc21pc3MoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSb3V0ZUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBlLmRldGFpbDtcclxuICAgICAgICBndGFnKCdldmVudCcsJ3NjcmVlbl92aWV3Jywge1xyXG4gICAgICAgICAgICBhcHBfdmVyc2lvbjogTk9ERV9FTlYgKyBcIjogXCIgKyBWRVJTSU9OLFxyXG4gICAgICAgICAgICBzY3JlZW5fbmFtZTogZGF0YS50byxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmVuZGVyKHRoaXMudGVtcGxhdGUoe30pLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NfYmFyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvYWRpbmdDb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzX2Jhci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNvbXBvbmVudC1tYWluXCIsIENvbXBvbmVudE1haW4pO1xyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRNYWluOyIsImltcG9ydCB7aHRtbCwgcmVuZGVyfSBmcm9tICdsaXQtaHRtbCc7XHJcblxyXG5jbGFzcyBTY2VuZUFib3V0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWxgXHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNjb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDF2dztcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxpb24taGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlvbi10b29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1iYWNrLWJ1dHRvbj48L2lvbi1iYWNrLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1idXR0b25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tdGl0bGUgaWQ9XCJ0aXRsZVwiPkFib3V0IFVzPC9pb24tdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L2lvbi10b29sYmFyPlxyXG4gICAgICAgICAgICA8L2lvbi1oZWFkZXI+XHJcbiAgICAgICAgICAgIDxpb24tY29udGVudCBpZD1cImNvbnRlbnRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW9uLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1jYXJkLXN1YnRpdGxlPk1ha2luZyBldmVyeSBtb21lbnQgY291bnQ8L2lvbi1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWNhcmQtdGl0bGU+V2VsY29tZSBUbyBPdXIgQ29tcGFueSE8L2lvbi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZFwiPldlIGFyZSBhd2Vzb21lITwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UndmUgZG9uZSBzbyBtYW55IGNvb2wgdGhpbmdzLCB5b3Ugc2hvdWxkIGdpdmUgdXMgbW9uZXkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6IzAwQTc5RDtcIj48ZW0+T3VyIG1pc3Npb24gaXMgdG8gYmUgdGhlIGJlc3Qgb2YgdGhlIGJlc3Qgb2YgdGhlIGJlc3QsIFNpciE8L2VtPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L2lvbi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPGlvbi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBQcm9taXNlIFRvIFlvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSdyZSByZWFsbHkgbmljZSwgYW5kIHdlJ2xsIGRvIGdvb2QgdGhpbmdzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L2lvbi1jYXJkPlxyXG4gICAgICAgICAgICA8L2lvbi1jb250ZW50PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbmRlcigpIHtcclxuICAgICAgICByZW5kZXIodGhpcy50ZW1wbGF0ZSh7fSksIHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NjZW5lLWFib3V0JywgU2NlbmVBYm91dCk7XHJcbmV4cG9ydCBkZWZhdWx0IFNjZW5lQWJvdXQ7IiwiaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdC1odG1sJztcclxuXHJcbmNsYXNzIFNjZW5lQ29udGFjdFVzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWxgXHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNjb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDF2dztcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxpb24taGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGlvbi10b29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1iYWNrLWJ1dHRvbj48L2lvbi1iYWNrLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1idXR0b25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tdGl0bGUgaWQ9XCJ0aXRsZVwiPkNvbnRhY3RVcyBVczwvaW9uLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9pb24tdG9vbGJhcj5cclxuICAgICAgICAgICAgPC9pb24taGVhZGVyPlxyXG4gICAgICAgICAgICA8aW9uLWNvbnRlbnQgaWQ9XCJjb250ZW50XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2FsbCB1cyB0byB0YWxrIGFib3V0IHRoaW5nczwvcD5cclxuICAgICAgICAgICAgPC9pb24tY29udGVudD5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmVuZGVyKHRoaXMudGVtcGxhdGUoe30pLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzY2VuZS1jb250YWN0LXVzJywgU2NlbmVDb250YWN0VXMpO1xyXG5leHBvcnQgZGVmYXVsdCBTY2VuZUNvbnRhY3RVczsiLCJpbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuY2xhc3MgU2NlbmVIb21lIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IChkYXRhKSA9PiBodG1sYFxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGlvbi1jb250ZW50IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGlvbi10b29sYmFyIHN0eWxlPVwiLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgcG9zaXRpb246IGFic29sdXRlO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1tZW51LXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cIm1lbnVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1idXR0b25zPlxyXG4gICAgICAgICAgICAgICAgPC9pb24tdG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgYSB2ZXJ5IGZhbmN5IGhvbWUgcGFnZSwgd2l0aCBhIGhlcm8gaW1hZ2UgYW5kIGluc3BpcmluZyBzdHlsaW5nLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPk9yIG5vdC48L3A+XHJcbiAgICAgICAgICAgIDwvaW9uLWNvbnRlbnQ+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmVuZGVyKHRoaXMudGVtcGxhdGUoe30pLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2NlbmUtaG9tZScsIFNjZW5lSG9tZSk7XHJcbmV4cG9ydCBkZWZhdWx0IFNjZW5lSG9tZTsiLCJpbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuY2xhc3MgU2NlbmVQcm9maWxlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6J29wZW4nfSk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmlubmVySFRNTCA9ICc8c2xvdD48L3Nsb3Q+JztcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gKGZhbWlseSkgPT4gaHRtbGBcclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjc2NlbmVfcHJvZmlsZV9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDF2dztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxpb24taGVhZGVyPlxyXG4gICAgICAgICAgICA8aW9uLXRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi1iYWNrLWJ1dHRvbiBkZWZhdWx0LWhyZWY9XCIvZmFtaWxpZXNcIj48L2lvbi1iYWNrLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbnM+XHJcbiAgICAgICAgICAgICAgICA8aW9uLXRpdGxlIGlkPVwidGl0bGVcIj4ke2ZhbWlseS5mYW1pbHlfbmFtZX08L2lvbi10aXRsZT5cclxuICAgICAgICAgICAgPC9pb24tdG9vbGJhcj5cclxuICAgICAgICA8L2lvbi1oZWFkZXI+XHJcbiAgICAgICAgPGlvbi1jb250ZW50IGlkPVwic2NlbmVfcHJvZmlsZV9jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxpb24tdGFicyBpZD1cImZhbWlseV90YWJzXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpXCI+XHJcbiAgICAgICAgICAgICAgICA8aW9uLXRhYiB0YWI9XCJ0YWItcHJvZmlsZVwiPiBcclxuICAgICAgICAgICAgICAgIDwvaW9uLXRhYj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW9uLXRhYiB0YWI9XCJ0YWItdXNlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlvbi1uYXY+PC9pb24tbmF2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9pb24tdGFiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpb24tdGFiIHRhYj1cInRhYi1zY2hlZHVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW9uLW5hdj48L2lvbi1uYXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8L2lvbi10YWI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlvbi10YWIgdGFiPVwidGFiLWJpbGxpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlvbi1uYXY+PC9pb24tbmF2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9pb24tdGFiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpb24tdGFiLWJhciBzbG90PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi10YWItYnV0dG9uIHRhYj1cInRhYi1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5Qcm9maWxlPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9pb24tdGFiLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi10YWItYnV0dG9uIHRhYj1cInRhYi11c2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlb3BsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+VXNlcnM8L2lvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2lvbi10YWItYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGlvbi10YWItYnV0dG9uIHRhYj1cInRhYi1zY2hlZHVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNhbGVuZGFyXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5TY2hlZHVsZTwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWJhZGdlPjY8L2lvbi1iYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2lvbi10YWItYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW9uLXRhYi1idXR0b24gdGFiPVwidGFiLWJpbGxpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjYXNoXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5CaWxsaW5nPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9pb24tdGFiLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvaW9uLXRhYi1iYXI+XHJcbiAgICAgICAgICAgIDwvaW9uLXRhYnM+XHJcbiAgICAgICAgPC9pb24tY29udGVudD5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmVuZGVyKHRoaXMudGVtcGxhdGUodGhpcy5mYW1pbHkpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEZhbWlseSgpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzY2VuZS1wcm9maWxlJywgU2NlbmVQcm9maWxlKTtcclxuZXhwb3J0IGRlZmF1bHQgU2NlbmVQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=