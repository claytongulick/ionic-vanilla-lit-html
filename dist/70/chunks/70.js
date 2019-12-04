(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-spinner.entry.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-spinner.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_spinner", function() { return Spinner; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");




const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 44,
                cy: 44,
                fill: 'none',
                viewBox: '22 22 44 44',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;

const Spinner = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */
        this.paused = false;
    }
    getName() {
        const spinnerName = this.name || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner');
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        if (spinnerName) {
            return spinnerName;
        }
        return (mode === 'ios') ? 'lines' : 'circular';
    }
    render() {
        const self = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(self);
        const spinnerName = self.getName();
        const spinner = SPINNERS[spinnerName] || SPINNERS['lines'];
        const duration = (typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur);
        const svgs = [];
        if (spinner.circles !== undefined) {
            for (let i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines !== undefined) {
            for (let i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(self.color)), { [mode]: true, [`spinner-${spinnerName}`]: true, 'spinner-paused': !!self.paused || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing') }), role: "progressbar", style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} }, svgs));
    }
    static get style() { return ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:3.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}\@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}"; }
};
const buildCircle = (spinner, duration, index, total) => {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { transform: data.transform || 'translate(32,32)', cx: data.cx, cy: data.cy, r: data.r, style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} })));
};
const buildLine = (spinner, duration, index, total) => {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!**************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \**************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1zcGlubmVyLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDdkM7QUFDVzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0QkFBNEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9CO0FBQ2xELCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtQkFBbUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9CO0FBQ2xELCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzQ0FBc0M7QUFDOUUsc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msc0NBQXNDO0FBQzlF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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiI3MFxcY2h1bmtzXFw3MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBzcGlubmVycyA9IHtcclxuICAgICdidWJibGVzJzoge1xyXG4gICAgICAgIGR1cjogMTAwMCxcclxuICAgICAgICBjaXJjbGVzOiA5LFxyXG4gICAgICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXggLyB0b3RhbCkgLSBkdXJ9bXNgO1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogaW5kZXggLyB0b3RhbDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHI6IDUsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiBgJHs5ICogTWF0aC5zaW4oYW5nbGUpfXB4YCxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IGAkezkgKiBNYXRoLmNvcyhhbmdsZSl9cHhgLFxyXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ2NpcmNsZXMnOiB7XHJcbiAgICAgICAgZHVyOiAxMDAwLFxyXG4gICAgICAgIGNpcmNsZXM6IDgsXHJcbiAgICAgICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gaW5kZXggLyB0b3RhbDtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogc3RlcCkgLSBkdXJ9bXNgO1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogc3RlcDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHI6IDUsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiBgJHs5ICogTWF0aC5zaW4oYW5nbGUpfXB4YCxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IGAkezkgKiBNYXRoLmNvcyhhbmdsZSl9cHhgLFxyXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ2NpcmN1bGFyJzoge1xyXG4gICAgICAgIGR1cjogMTQwMCxcclxuICAgICAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaXJjbGVzOiAxLFxyXG4gICAgICAgIGZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByOiAyMCxcclxuICAgICAgICAgICAgICAgIGN4OiA0NCxcclxuICAgICAgICAgICAgICAgIGN5OiA0NCxcclxuICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g6ICcyMiAyMiA0NCA0NCcsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge31cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ2NyZXNjZW50Jzoge1xyXG4gICAgICAgIGR1cjogNzUwLFxyXG4gICAgICAgIGNpcmNsZXM6IDEsXHJcbiAgICAgICAgZm46ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHI6IDI2LFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICdkb3RzJzoge1xyXG4gICAgICAgIGR1cjogNzUwLFxyXG4gICAgICAgIGNpcmNsZXM6IDMsXHJcbiAgICAgICAgZm46IChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IC0oMTEwICogaW5kZXgpICsgJ21zJztcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHI6IDYsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogYCR7OSAtICg5ICogaW5kZXgpfXB4YCxcclxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICdsaW5lcyc6IHtcclxuICAgICAgICBkdXI6IDEwMDAsXHJcbiAgICAgICAgbGluZXM6IDEyLFxyXG4gICAgICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4IC8gdG90YWwpIC0gZHVyfW1zYDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHkxOiAxNyxcclxuICAgICAgICAgICAgICAgIHkyOiAyOSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICdsaW5lcy1zbWFsbCc6IHtcclxuICAgICAgICBkdXI6IDEwMDAsXHJcbiAgICAgICAgbGluZXM6IDEyLFxyXG4gICAgICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4IC8gdG90YWwpIC0gZHVyfW1zYDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHkxOiAxMixcclxuICAgICAgICAgICAgICAgIHkyOiAyMCxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRyYW5zZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5jb25zdCBTUElOTkVSUyA9IHNwaW5uZXJzO1xuXG5jb25zdCBTcGlubmVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHNwaW5uZXIncyBhbmltYXRpb24gd2lsbCBiZSBwYXVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICBjb25zdCBzcGlubmVyTmFtZSA9IHRoaXMubmFtZSB8fCBjb25maWcuZ2V0KCdzcGlubmVyJyk7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBpZiAoc3Bpbm5lck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGlubmVyTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgPT09ICdpb3MnKSA/ICdsaW5lcycgOiAnY2lyY3VsYXInO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZShzZWxmKTtcbiAgICAgICAgY29uc3Qgc3Bpbm5lck5hbWUgPSBzZWxmLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3Qgc3Bpbm5lciA9IFNQSU5ORVJTW3NwaW5uZXJOYW1lXSB8fCBTUElOTkVSU1snbGluZXMnXTtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAodHlwZW9mIHNlbGYuZHVyYXRpb24gPT09ICdudW1iZXInICYmIHNlbGYuZHVyYXRpb24gPiAxMCA/IHNlbGYuZHVyYXRpb24gOiBzcGlubmVyLmR1cik7XG4gICAgICAgIGNvbnN0IHN2Z3MgPSBbXTtcbiAgICAgICAgaWYgKHNwaW5uZXIuY2lyY2xlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaW5uZXIuY2lyY2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Zncy5wdXNoKGJ1aWxkQ2lyY2xlKHNwaW5uZXIsIGR1cmF0aW9uLCBpLCBzcGlubmVyLmNpcmNsZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcGlubmVyLmxpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bpbm5lci5saW5lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Zncy5wdXNoKGJ1aWxkTGluZShzcGlubmVyLCBkdXJhdGlvbiwgaSwgc3Bpbm5lci5saW5lcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3NlcyhzZWxmLmNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCBbYHNwaW5uZXItJHtzcGlubmVyTmFtZX1gXTogdHJ1ZSwgJ3NwaW5uZXItcGF1c2VkJzogISFzZWxmLnBhdXNlZCB8fCBjb25maWcuZ2V0Qm9vbGVhbignX3Rlc3RpbmcnKSB9KSwgcm9sZTogXCJwcm9ncmVzc2JhclwiLCBzdHlsZTogc3Bpbm5lci5lbG1EdXJhdGlvbiA/IHsgYW5pbWF0aW9uRHVyYXRpb246IGR1cmF0aW9uICsgJ21zJyB9IDoge30gfSwgc3ZncykpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2NvbG9yOnZhcigtLWNvbG9yKTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfXN2Z3tsZWZ0OjA7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHN2ZyxbZGlyPXJ0bF0gc3Zne2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9Omhvc3QoLnNwaW5uZXItbGluZXMpIGxpbmUsOmhvc3QoLnNwaW5uZXItbGluZXMtc21hbGwpIGxpbmV7c3Ryb2tlLXdpZHRoOjRweDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2U6Y3VycmVudENvbG9yfTpob3N0KC5zcGlubmVyLWxpbmVzKSBzdmcsOmhvc3QoLnNwaW5uZXItbGluZXMtc21hbGwpIHN2Z3std2Via2l0LWFuaW1hdGlvbjpzcGlubmVyLWZhZGUtb3V0IDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3Bpbm5lci1mYWRlLW91dCAxcyBsaW5lYXIgaW5maW5pdGV9Omhvc3QoLnNwaW5uZXItYnViYmxlcykgc3Zney13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItc2NhbGUtb3V0IDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3Bpbm5lci1zY2FsZS1vdXQgMXMgbGluZWFyIGluZmluaXRlO2ZpbGw6Y3VycmVudENvbG9yfTpob3N0KC5zcGlubmVyLWNpcmNsZXMpIHN2Z3std2Via2l0LWFuaW1hdGlvbjpzcGlubmVyLWZhZGUtb3V0IDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3Bpbm5lci1mYWRlLW91dCAxcyBsaW5lYXIgaW5maW5pdGU7ZmlsbDpjdXJyZW50Q29sb3J9Omhvc3QoLnNwaW5uZXItY3Jlc2NlbnQpIGNpcmNsZXtmaWxsOnRyYW5zcGFyZW50O3N0cm9rZS13aWR0aDo0cHg7c3Ryb2tlLWRhc2hhcnJheToxMjhweDtzdHJva2UtZGFzaG9mZnNldDo4MnB4O3N0cm9rZTpjdXJyZW50Q29sb3J9Omhvc3QoLnNwaW5uZXItY3Jlc2NlbnQpIHN2Z3std2Via2l0LWFuaW1hdGlvbjpzcGlubmVyLXJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW5uZXItcm90YXRlIDFzIGxpbmVhciBpbmZpbml0ZX06aG9zdCguc3Bpbm5lci1kb3RzKSBjaXJjbGV7c3Ryb2tlLXdpZHRoOjA7ZmlsbDpjdXJyZW50Q29sb3J9Omhvc3QoLnNwaW5uZXItZG90cykgc3Zney13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItZG90cyAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW5uZXItZG90cyAxcyBsaW5lYXIgaW5maW5pdGV9Omhvc3QoLnNwaW5uZXItY2lyY3VsYXIpey13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItY2lyY3VsYXIgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLWNpcmN1bGFyIGxpbmVhciBpbmZpbml0ZX06aG9zdCguc3Bpbm5lci1jaXJjdWxhcikgY2lyY2xley13ZWJraXQtYW5pbWF0aW9uOnNwaW5uZXItY2lyY3VsYXItaW5uZXIgZWFzZS1pbi1vdXQgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW5uZXItY2lyY3VsYXItaW5uZXIgZWFzZS1pbi1vdXQgaW5maW5pdGU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2UtZGFzaGFycmF5OjgwcHgsMjAwcHg7c3Ryb2tlLWRhc2hvZmZzZXQ6MHB4O3N0cm9rZS13aWR0aDozLjY7ZmlsbDpub25lfTpob3N0KC5zcGlubmVyLXBhdXNlZCksOmhvc3QoLnNwaW5uZXItcGF1c2VkKSBjaXJjbGUsOmhvc3QoLnNwaW5uZXItcGF1c2VkKSBzdmd7LXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfVxcQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItZmFkZS1vdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MH19XFxAa2V5ZnJhbWVzIHNwaW5uZXItZmFkZS1vdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MH19XFxALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1zY2FsZS1vdXR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19XFxAa2V5ZnJhbWVzIHNwaW5uZXItc2NhbGUtb3V0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fVxcQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItcm90YXRlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fVxcQGtleWZyYW1lcyBzcGlubmVyLXJvdGF0ZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1cXEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLWRvdHN7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6Ljl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6LjN9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6Ljl9fVxcQGtleWZyYW1lcyBzcGlubmVyLWRvdHN7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6Ljl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6LjN9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6Ljl9fVxcQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItY2lyY3VsYXJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19XFxAa2V5ZnJhbWVzIHNwaW5uZXItY2lyY3VsYXJ7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19XFxALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1jaXJjdWxhci1pbm5lcnswJXtzdHJva2UtZGFzaGFycmF5OjFweCwyMDBweDtzdHJva2UtZGFzaG9mZnNldDowcHh9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTAwcHgsMjAwcHg7c3Ryb2tlLWRhc2hvZmZzZXQ6LTE1cHh9dG97c3Ryb2tlLWRhc2hhcnJheToxMDBweCwyMDBweDtzdHJva2UtZGFzaG9mZnNldDotMTI1cHh9fVxcQGtleWZyYW1lcyBzcGlubmVyLWNpcmN1bGFyLWlubmVyezAle3N0cm9rZS1kYXNoYXJyYXk6MXB4LDIwMHB4O3N0cm9rZS1kYXNob2Zmc2V0OjBweH01MCV7c3Ryb2tlLWRhc2hhcnJheToxMDBweCwyMDBweDtzdHJva2UtZGFzaG9mZnNldDotMTVweH10b3tzdHJva2UtZGFzaGFycmF5OjEwMHB4LDIwMHB4O3N0cm9rZS1kYXNob2Zmc2V0Oi0xMjVweH19XCI7IH1cbn07XG5jb25zdCBidWlsZENpcmNsZSA9IChzcGlubmVyLCBkdXJhdGlvbiwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHNwaW5uZXIuZm4oZHVyYXRpb24sIGluZGV4LCB0b3RhbCk7XG4gICAgZGF0YS5zdHlsZVsnYW5pbWF0aW9uLWR1cmF0aW9uJ10gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgcmV0dXJuIChoKFwic3ZnXCIsIHsgdmlld0JveDogZGF0YS52aWV3Qm94IHx8ICcwIDAgNjQgNjQnLCBzdHlsZTogZGF0YS5zdHlsZSB9LCBoKFwiY2lyY2xlXCIsIHsgdHJhbnNmb3JtOiBkYXRhLnRyYW5zZm9ybSB8fCAndHJhbnNsYXRlKDMyLDMyKScsIGN4OiBkYXRhLmN4LCBjeTogZGF0YS5jeSwgcjogZGF0YS5yLCBzdHlsZTogc3Bpbm5lci5lbG1EdXJhdGlvbiA/IHsgYW5pbWF0aW9uRHVyYXRpb246IGR1cmF0aW9uICsgJ21zJyB9IDoge30gfSkpKTtcbn07XG5jb25zdCBidWlsZExpbmUgPSAoc3Bpbm5lciwgZHVyYXRpb24sIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzcGlubmVyLmZuKGR1cmF0aW9uLCBpbmRleCwgdG90YWwpO1xuICAgIGRhdGEuc3R5bGVbJ2FuaW1hdGlvbi1kdXJhdGlvbiddID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHJldHVybiAoaChcInN2Z1wiLCB7IHZpZXdCb3g6IGRhdGEudmlld0JveCB8fCAnMCAwIDY0IDY0Jywgc3R5bGU6IGRhdGEuc3R5bGUgfSwgaChcImxpbmVcIiwgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDMyLDMyKVwiLCB5MTogZGF0YS55MSwgeTI6IGRhdGEueTIgfSkpKTtcbn07XG5cbmV4cG9ydCB7IFNwaW5uZXIgYXMgaW9uX3NwaW5uZXIgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=