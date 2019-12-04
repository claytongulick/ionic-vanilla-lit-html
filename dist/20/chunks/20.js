(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!***************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toggle", function() { return Toggle; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js");






const Toggle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-tg-${toggleIds++}`;
        this.lastDrag = 0;
        this.activated = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the toggle is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the toggle.
         */
        this.disabled = false;
        /**
         * The value of the toggle does not mean if it's checked or not, use the `checked`
         * property for that.
         *
         * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
         * it's only used when the toggle participates in a native `<form>`.
         */
        this.value = 'on';
        this.onClick = () => {
            if (this.lastDrag + 300 < Date.now()) {
                this.checked = !this.checked;
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.emitStyle();
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async connectedCallback() {
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: this.el,
            gestureName: 'toggle',
            gesturePriority: 100,
            threshold: 5,
            passive: false,
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    componentWillLoad() {
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled,
        });
    }
    onStart() {
        this.activated = true;
        // touch-action does not work in iOS
        this.setFocus();
    }
    onMove(detail) {
        if (shouldToggle(document, this.checked, detail.deltaX, -10)) {
            this.checked = !this.checked;
            Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_4__["h"])();
        }
    }
    onEnd(ev) {
        this.activated = false;
        this.lastDrag = Date.now();
        ev.event.preventDefault();
        ev.event.stopImmediatePropagation();
    }
    getValue() {
        return this.value || '';
    }
    setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }
    render() {
        const { inputId, disabled, checked, activated, color, el } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const labelId = inputId + '-lbl';
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
        const value = this.getValue();
        if (label) {
            label.id = labelId;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, (checked ? value : ''), disabled);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "checkbox", "aria-disabled": disabled ? 'true' : null, "aria-checked": `${checked}`, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), { [mode]: true, 'in-item': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), 'toggle-activated': activated, 'toggle-checked': checked, 'toggle-disabled': disabled, 'interactive': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toggle-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toggle-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: btnEl => this.buttonEl = btnEl })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"; }
};
const shouldToggle = (doc, checked, deltaX, margin) => {
    const isRTL = doc.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
};
let toggleIds = 0;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10b2dnbGUtbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUg7Ozs7Ozs7Ozs7Ozs7QUMzQ2pIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ3FEO0FBQ0g7QUFDcEI7O0FBRTVEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QixpQ0FBaUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFD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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiIyMFxcY2h1bmtzXFwyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDaGVjayB0byBzZWUgaWYgdGhlIEhhcHRpYyBQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcclxuICovXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcclxuICogKG5vdCBmb3IgZ2VzdHVyZXMpXHJcbiAqL1xyXG5jb25zdCBoYXB0aWNTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xyXG4gICAgaWYgKGVuZ2luZSkge1xyXG4gICAgICAgIGVuZ2luZS5zZWxlY3Rpb24oKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cclxuICovXHJcbmNvbnN0IGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XHJcbiAgICBpZiAoZW5naW5lKSB7XHJcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXHJcbiAqIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xyXG4gICAgfVxyXG59O1xuXG5leHBvcnQgeyBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBjLCBoYXB0aWNTZWxlY3Rpb24gYXMgaCB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kSXRlbUxhYmVsLCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBoIGFzIGhhcHRpY1NlbGVjdGlvbiB9IGZyb20gJy4vaGFwdGljLWM4ZjE0NzNlLmpzJztcblxuY29uc3QgVG9nZ2xlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gYGlvbi10Zy0ke3RvZ2dsZUlkcysrfWA7XG4gICAgICAgIHRoaXMubGFzdERyYWcgPSAwO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b2dnbGUgaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHRvZ2dsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgdG9nZ2xlIGRvZXMgbm90IG1lYW4gaWYgaXQncyBjaGVja2VkIG9yIG5vdCwgdXNlIHRoZSBgY2hlY2tlZGBcbiAgICAgICAgICogcHJvcGVydHkgZm9yIHRoYXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBhIHRvZ2dsZSBpcyBhbmFsb2dvdXMgdG8gdGhlIHZhbHVlIG9mIGEgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gLFxuICAgICAgICAgKiBpdCdzIG9ubHkgdXNlZCB3aGVuIHRoZSB0b2dnbGUgcGFydGljaXBhdGVzIGluIGEgbmF0aXZlIGA8Zm9ybT5gLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3REcmFnICsgMzAwIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBjaGVja2VkQ2hhbmdlZChpc0NoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBjaGVja2VkOiBpc0NoZWNrZWQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgICBlbDogdGhpcy5lbCxcbiAgICAgICAgICAgIGdlc3R1cmVOYW1lOiAndG9nZ2xlJyxcbiAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgICAgdGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBvblN0YXJ0OiAoKSA9PiB0aGlzLm9uU3RhcnQoKSxcbiAgICAgICAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgICAgICAgb25FbmQ6IGV2ID0+IHRoaXMub25FbmQoZXYpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIGVtaXRTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIC8vIHRvdWNoLWFjdGlvbiBkb2VzIG5vdCB3b3JrIGluIGlPU1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuICAgIG9uTW92ZShkZXRhaWwpIHtcbiAgICAgICAgaWYgKHNob3VsZFRvZ2dsZShkb2N1bWVudCwgdGhpcy5jaGVja2VkLCBkZXRhaWwuZGVsdGFYLCAtMTApKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICAgICAgaGFwdGljU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25FbmQoZXYpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0RHJhZyA9IERhdGUubm93KCk7XG4gICAgICAgIGV2LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2LmV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgJyc7XG4gICAgfVxuICAgIHNldEZvY3VzKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25FbCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25FbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpbnB1dElkLCBkaXNhYmxlZCwgY2hlY2tlZCwgYWN0aXZhdGVkLCBjb2xvciwgZWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBsYWJlbElkID0gaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKGVsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCB0aGlzLm5hbWUsIChjaGVja2VkID8gdmFsdWUgOiAnJyksIGRpc2FibGVkKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCByb2xlOiBcImNoZWNrYm94XCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1jaGVja2VkXCI6IGAke2NoZWNrZWR9YCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCAnaW4taXRlbSc6IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKSwgJ3RvZ2dsZS1hY3RpdmF0ZWQnOiBhY3RpdmF0ZWQsICd0b2dnbGUtY2hlY2tlZCc6IGNoZWNrZWQsICd0b2dnbGUtZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ2ludGVyYWN0aXZlJzogdHJ1ZSB9KSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9nZ2xlLWljb25cIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9nZ2xlLWlubmVyXCIgfSkpLCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbkJsdXI6IHRoaXMub25CbHVyLCBkaXNhYmxlZDogZGlzYWJsZWQsIHJlZjogYnRuRWwgPT4gdGhpcy5idXR0b25FbCA9IGJ0bkVsIH0pKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcImNoZWNrZWRcIjogW1wiY2hlY2tlZENoYW5nZWRcIl0sXG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3V0bGluZTpub25lO2NvbnRhaW46Y29udGVudDtjdXJzb3I6cG9pbnRlcjstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mn06aG9zdCguaW9uLWZvY3VzZWQpIGlucHV0e2JvcmRlcjoycHggc29saWQgIzVlOWVkNn06aG9zdCgudG9nZ2xlLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfWJ1dHRvbntsZWZ0OjA7dG9wOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7b3V0bGluZTpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBidXR0b24sW2Rpcj1ydGxdIGJ1dHRvbntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfTpob3N0ey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC4zKTstLWJhY2tncm91bmQtY2hlY2tlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjUpOy0taGFuZGxlLWJhY2tncm91bmQ6I2ZmZjstLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDozNnB4O2hlaWdodDoxNHB4O2NvbnRhaW46c3RyaWN0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTJweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTJweDtwYWRkaW5nLWlubGluZS1lbmQ6MTJweH19Omhvc3QoLmlvbi1jb2xvci50b2dnbGUtY2hlY2tlZCkgLnRvZ2dsZS1pY29ue2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC41KX06aG9zdCguaW9uLWNvbG9yLnRvZ2dsZS1jaGVja2VkKSAudG9nZ2xlLWlubmVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS50b2dnbGUtaWNvbntib3JkZXItcmFkaXVzOjE0cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xNnM7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xNnM7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtwb2ludGVyLWV2ZW50czpub25lfS50b2dnbGUtaW5uZXJ7bGVmdDowO3RvcDotM3B4O2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOi4xNnM7dHJhbnNpdGlvbi1kdXJhdGlvbjouMTZzOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvciwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxiYWNrZ3JvdW5kLWNvbG9yO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGJhY2tncm91bmQtY29sb3IsLXdlYmtpdC10cmFuc2Zvcm07LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtiYWNrZ3JvdW5kOnZhcigtLWhhbmRsZS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLGJhY2tncm91bmQtY29sb3I7Y29udGFpbjpzdHJpY3R9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC50b2dnbGUtaW5uZXIsW2Rpcj1ydGxdIC50b2dnbGUtaW5uZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfTpob3N0KC50b2dnbGUtY2hlY2tlZCkgLnRvZ2dsZS1pY29ue2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1jaGVja2VkKX06aG9zdCgudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTZweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxNnB4LDAsMCk7YmFja2dyb3VuZDp2YXIoLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudG9nZ2xlLWNoZWNrZWQgLnRvZ2dsZS1pbm5lciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoY2FsYygtMSAqIDE2cHgpLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAxNnB4KSwwLDApfTpob3N0KC50b2dnbGUtZGlzYWJsZWQpe29wYWNpdHk6LjN9Omhvc3QoLmluLWl0ZW1bc2xvdF0pe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O2N1cnNvcjpwb2ludGVyfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguaW4taXRlbVtzbG90XSl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjA7cGFkZGluZy1pbmxpbmUtZW5kOjB9fTpob3N0KC5pbi1pdGVtW3Nsb3Q9c3RhcnRdKXtwYWRkaW5nLWxlZnQ6MnB4O3BhZGRpbmctcmlnaHQ6MThweDtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5pbi1pdGVtW3Nsb3Q9c3RhcnRdKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjJweDstd2Via2l0LXBhZGRpbmctZW5kOjE4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE4cHh9fVwiOyB9XG59O1xuY29uc3Qgc2hvdWxkVG9nZ2xlID0gKGRvYywgY2hlY2tlZCwgZGVsdGFYLCBtYXJnaW4pID0+IHtcbiAgICBjb25zdCBpc1JUTCA9IGRvYy5kaXIgPT09ICdydGwnO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgIHJldHVybiAoIWlzUlRMICYmIChtYXJnaW4gPiBkZWx0YVgpKSB8fFxuICAgICAgICAgICAgKGlzUlRMICYmICgtbWFyZ2luIDwgZGVsdGFYKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKCFpc1JUTCAmJiAoLW1hcmdpbiA8IGRlbHRhWCkpIHx8XG4gICAgICAgICAgICAoaXNSVEwgJiYgKG1hcmdpbiA+IGRlbHRhWCkpO1xuICAgIH1cbn07XG5sZXQgdG9nZ2xlSWRzID0gMDtcblxuZXhwb3J0IHsgVG9nZ2xlIGFzIGlvbl90b2dnbGUgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=