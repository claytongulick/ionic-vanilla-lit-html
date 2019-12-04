(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_range", function() { return Range; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const Range = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.noUpdate = false;
        this.hasFocus = false;
        this.ratioA = 0;
        this.ratioB = 0;
        /**
         * How long, in milliseconds, to wait to trigger the
         * `ionChange` event after each change in the range value.
         */
        this.debounce = 0;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        /**
         * Show two knobs.
         */
        this.dualKnobs = false;
        /**
         * Minimum integer value of the range.
         */
        this.min = 0;
        /**
         * Maximum integer value of the range.
         */
        this.max = 100;
        /**
         * If `true`, a pin with integer value is shown when the knob
         * is pressed.
         */
        this.pin = false;
        /**
         * If `true`, the knob snaps to tick marks evenly spaced based
         * on the step property value.
         */
        this.snaps = false;
        /**
         * Specifies the value granularity.
         */
        this.step = 1;
        /**
         * If `true`, tick marks are displayed based on the step value.
         * Only applies when `snaps` is `true`.
         */
        this.ticks = true;
        /**
         * If `true`, the user cannot interact with the range.
         */
        this.disabled = false;
        /**
         * the value of the range.
         */
        this.value = 0;
        this.clampBounds = (value) => {
            return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.min, value, this.max);
        };
        this.ensureValueInBounds = (value) => {
            if (this.dualKnobs) {
                return {
                    lower: this.clampBounds(value.lower),
                    upper: this.clampBounds(value.upper)
                };
            }
            else {
                return this.clampBounds(value);
            }
        };
        this.handleKeyboard = (knob, isIncrease) => {
            let step = this.step;
            step = step > 0 ? step : 1;
            step = step / (this.max - this.min);
            if (!isIncrease) {
                step *= -1;
            }
            if (knob === 'A') {
                this.ratioA = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, this.ratioA + step, 1);
            }
            else {
                this.ratioB = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, this.ratioB + step, 1);
            }
            this.updateValue();
        };
        this.onBlur = () => {
            if (this.hasFocus) {
                this.hasFocus = false;
                this.ionBlur.emit();
                this.emitStyle();
            }
        };
        this.onFocus = () => {
            if (!this.hasFocus) {
                this.hasFocus = true;
                this.ionFocus.emit();
                this.emitStyle();
            }
        };
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
    }
    debounceChanged() {
        this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
    }
    minChanged() {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    }
    maxChanged() {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
        this.emitStyle();
    }
    valueChanged(value) {
        if (!this.noUpdate) {
            this.updateRatio();
        }
        value = this.ensureValueInBounds(value);
        this.ionChange.emit({ value });
    }
    connectedCallback() {
        this.updateRatio();
        this.debounceChanged();
        this.disabledChanged();
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    async componentDidLoad() {
        const rangeSlider = this.rangeSlider;
        if (rangeSlider) {
            this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
                el: rangeSlider,
                gestureName: 'range',
                gesturePriority: 100,
                threshold: 0,
                onStart: ev => this.onStart(ev),
                onMove: ev => this.onMove(ev),
                onEnd: ev => this.onEnd(ev),
            });
            this.gesture.setDisabled(this.disabled);
        }
    }
    getValue() {
        const value = this.value || 0;
        if (this.dualKnobs) {
            if (typeof value === 'object') {
                return value;
            }
            return {
                lower: 0,
                upper: value
            };
        }
        else {
            if (typeof value === 'object') {
                return value.upper;
            }
            return value;
        }
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'interactive-disabled': this.disabled
        });
    }
    onStart(detail) {
        const rect = this.rect = this.rangeSlider.getBoundingClientRect();
        const currentX = detail.currentX;
        // figure out which knob they started closer to
        let ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, (currentX - rect.left) / rect.width, 1);
        if (document.dir === 'rtl') {
            ratio = 1 - ratio;
        }
        this.pressedKnob =
            !this.dualKnobs ||
                Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
                ? 'A'
                : 'B';
        this.setFocus(this.pressedKnob);
        // update the active knob's position
        this.update(currentX);
    }
    onMove(detail) {
        this.update(detail.currentX);
    }
    onEnd(detail) {
        this.update(detail.currentX);
        this.pressedKnob = undefined;
    }
    update(currentX) {
        // figure out where the pointer is currently at
        // update the knob being interacted with
        const rect = this.rect;
        let ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, (currentX - rect.left) / rect.width, 1);
        if (document.dir === 'rtl') {
            ratio = 1 - ratio;
        }
        if (this.snaps) {
            // snaps the ratio to the current value
            ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
        }
        // update which knob is pressed
        if (this.pressedKnob === 'A') {
            this.ratioA = ratio;
        }
        else {
            this.ratioB = ratio;
        }
        // Update input value
        this.updateValue();
    }
    get valA() {
        return ratioToValue(this.ratioA, this.min, this.max, this.step);
    }
    get valB() {
        return ratioToValue(this.ratioB, this.min, this.max, this.step);
    }
    get ratioLower() {
        if (this.dualKnobs) {
            return Math.min(this.ratioA, this.ratioB);
        }
        return 0;
    }
    get ratioUpper() {
        if (this.dualKnobs) {
            return Math.max(this.ratioA, this.ratioB);
        }
        return this.ratioA;
    }
    updateRatio() {
        const value = this.getValue();
        const { min, max } = this;
        if (this.dualKnobs) {
            this.ratioA = valueToRatio(value.lower, min, max);
            this.ratioB = valueToRatio(value.upper, min, max);
        }
        else {
            this.ratioA = valueToRatio(value, min, max);
        }
    }
    updateValue() {
        this.noUpdate = true;
        const { valA, valB } = this;
        this.value = !this.dualKnobs
            ? valA
            : {
                lower: Math.min(valA, valB),
                upper: Math.max(valA, valB)
            };
        this.noUpdate = false;
    }
    setFocus(knob) {
        if (this.el.shadowRoot) {
            const knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
            if (knobEl) {
                knobEl.focus();
            }
        }
    }
    render() {
        const { min, max, step, el, handleKeyboard, pressedKnob, disabled, pin, ratioLower, ratioUpper } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const barStart = `${ratioLower * 100}%`;
        const barEnd = `${100 - ratioUpper * 100}%`;
        const doc = document;
        const isRTL = doc.dir === 'rtl';
        const start = isRTL ? 'right' : 'left';
        const end = isRTL ? 'left' : 'right';
        const tickStyle = (tick) => {
            return {
                [start]: tick[start]
            };
        };
        const barStyle = {
            [start]: barStart,
            [end]: barEnd
        };
        const ticks = [];
        if (this.snaps && this.ticks) {
            for (let value = min; value <= max; value += step) {
                const ratio = valueToRatio(value, min, max);
                const tick = {
                    ratio,
                    active: ratio >= ratioLower && ratio <= ratioUpper,
                };
                tick[start] = `${ratio * 100}%`;
                ticks.push(tick);
            }
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, JSON.stringify(this.getValue()), disabled);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onFocusin: this.onFocus, onFocusout: this.onBlur, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true, 'in-item': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), 'range-disabled': disabled, 'range-pressed': pressedKnob !== undefined, 'range-has-pin': pin }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-slider", ref: rangeEl => this.rangeSlider = rangeEl }, ticks.map(tick => (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: tickStyle(tick), role: "presentation", class: {
                'range-tick': true,
                'range-tick-active': tick.active
            } }))), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-bar", role: "presentation" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-bar range-bar-active", role: "presentation", style: barStyle }), renderKnob(isRTL, {
            knob: 'A',
            pressed: pressedKnob === 'A',
            value: this.valA,
            ratio: this.ratioA,
            pin,
            disabled,
            handleKeyboard,
            min,
            max
        }), this.dualKnobs && renderKnob(isRTL, {
            knob: 'B',
            pressed: pressedKnob === 'B',
            value: this.valB,
            ratio: this.ratioB,
            pin,
            disabled,
            handleKeyboard,
            min,
            max
        })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "debounce": ["debounceChanged"],
        "min": ["minChanged"],
        "max": ["maxChanged"],
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
    }; }
    static get style() { return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#fff;--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb,0,0,0),.1);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"; }
};
const renderKnob = (isRTL, { knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard }) => {
    const start = isRTL ? 'right' : 'left';
    const knobStyle = () => {
        const style = {};
        style[start] = `${ratio * 100}%`;
        return style;
    };
    return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onKeyDown: (ev) => {
            const key = ev.key;
            if (key === 'ArrowLeft' || key === 'ArrowDown') {
                handleKeyboard(knob, false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (key === 'ArrowRight' || key === 'ArrowUp') {
                handleKeyboard(knob, true);
                ev.preventDefault();
                ev.stopPropagation();
            }
        }, class: {
            'range-knob-handle': true,
            'range-knob-a': knob === 'A',
            'range-knob-b': knob === 'B',
            'range-knob-pressed': pressed,
            'range-knob-min': value === min,
            'range-knob-max': value === max
        }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value }, pin && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-pin", role: "presentation" }, Math.round(value)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-knob", role: "presentation" })));
};
const ratioToValue = (ratio, min, max, step) => {
    let value = (max - min) * ratio;
    if (step > 0) {
        value = Math.round(value / step) * step + min;
    }
    return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(min, value, max);
};
const valueToRatio = (value, min, max) => {
    return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, (value - min) / (max - min), 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yYW5nZS1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ2lFO0FBQ2Y7O0FBRWhGO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOERBQUs7QUFDbkM7QUFDQTtBQUNBLDhCQUE4Qiw4REFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQyx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQSx5QkFBeUIsOERB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aW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYyBhcyBjbGFtcCwgZCBhcyBkZWJvdW5jZUV2ZW50LCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5cbmNvbnN0IFJhbmdlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5ub1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmF0aW9BID0gMDtcbiAgICAgICAgdGhpcy5yYXRpb0IgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IGxvbmcsIGluIG1pbGxpc2Vjb25kcywgdG8gd2FpdCB0byB0cmlnZ2VyIHRoZVxuICAgICAgICAgKiBgaW9uQ2hhbmdlYCBldmVudCBhZnRlciBlYWNoIGNoYW5nZSBpbiB0aGUgcmFuZ2UgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlYm91bmNlID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHR3byBrbm9icy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHVhbEtub2JzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaW5pbXVtIGludGVnZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5taW4gPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogTWF4aW11bSBpbnRlZ2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWF4ID0gMTAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIHBpbiB3aXRoIGludGVnZXIgdmFsdWUgaXMgc2hvd24gd2hlbiB0aGUga25vYlxuICAgICAgICAgKiBpcyBwcmVzc2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5waW4gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtub2Igc25hcHMgdG8gdGljayBtYXJrcyBldmVubHkgc3BhY2VkIGJhc2VkXG4gICAgICAgICAqIG9uIHRoZSBzdGVwIHByb3BlcnR5IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zbmFwcyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmaWVzIHRoZSB2YWx1ZSBncmFudWxhcml0eS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRpY2sgbWFya3MgYXJlIGRpc3BsYXllZCBiYXNlZCBvbiB0aGUgc3RlcCB2YWx1ZS5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gYHNuYXBzYCBpcyBgdHJ1ZWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRpY2tzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHJhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLmNsYW1wQm91bmRzID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2xhbXAodGhpcy5taW4sIHZhbHVlLCB0aGlzLm1heCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5zdXJlVmFsdWVJbkJvdW5kcyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXI6IHRoaXMuY2xhbXBCb3VuZHModmFsdWUubG93ZXIpLFxuICAgICAgICAgICAgICAgICAgICB1cHBlcjogdGhpcy5jbGFtcEJvdW5kcyh2YWx1ZS51cHBlcilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhbXBCb3VuZHModmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUtleWJvYXJkID0gKGtub2IsIGlzSW5jcmVhc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBzdGVwID0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgc3RlcCA9IHN0ZXAgPiAwID8gc3RlcCA6IDE7XG4gICAgICAgICAgICBzdGVwID0gc3RlcCAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcbiAgICAgICAgICAgIGlmICghaXNJbmNyZWFzZSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgKj0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa25vYiA9PT0gJ0EnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYXRpb0EgPSBjbGFtcCgwLCB0aGlzLnJhdGlvQSArIHN0ZXAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYXRpb0IgPSBjbGFtcCgwLCB0aGlzLnJhdGlvQiArIHN0ZXAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgfVxuICAgIGRlYm91bmNlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBkZWJvdW5jZUV2ZW50KHRoaXMuaW9uQ2hhbmdlLCB0aGlzLmRlYm91bmNlKTtcbiAgICB9XG4gICAgbWluQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF4Q2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgdmFsdWVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gdGhpcy5lbnN1cmVWYWx1ZUluQm91bmRzKHZhbHVlKTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgICAgICB0aGlzLmRlYm91bmNlQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICBjb25zdCByYW5nZVNsaWRlciA9IHRoaXMucmFuZ2VTbGlkZXI7XG4gICAgICAgIGlmIChyYW5nZVNsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgICAgICBlbDogcmFuZ2VTbGlkZXIsXG4gICAgICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdyYW5nZScsXG4gICAgICAgICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGV2ID0+IHRoaXMub25TdGFydChldiksXG4gICAgICAgICAgICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICAgICAgICAgICAgb25FbmQ6IGV2ID0+IHRoaXMub25FbmQoZXYpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSB8fCAwO1xuICAgICAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb3dlcjogMCxcbiAgICAgICAgICAgICAgICB1cHBlcjogdmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS51cHBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdGFydChkZXRhaWwpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMucmVjdCA9IHRoaXMucmFuZ2VTbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgICAgICAvLyBmaWd1cmUgb3V0IHdoaWNoIGtub2IgdGhleSBzdGFydGVkIGNsb3NlciB0b1xuICAgICAgICBsZXQgcmF0aW8gPSBjbGFtcCgwLCAoY3VycmVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCwgMSk7XG4gICAgICAgIGlmIChkb2N1bWVudC5kaXIgPT09ICdydGwnKSB7XG4gICAgICAgICAgICByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXNzZWRLbm9iID1cbiAgICAgICAgICAgICF0aGlzLmR1YWxLbm9icyB8fFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHRoaXMucmF0aW9BIC0gcmF0aW8pIDwgTWF0aC5hYnModGhpcy5yYXRpb0IgLSByYXRpbylcbiAgICAgICAgICAgICAgICA/ICdBJ1xuICAgICAgICAgICAgICAgIDogJ0InO1xuICAgICAgICB0aGlzLnNldEZvY3VzKHRoaXMucHJlc3NlZEtub2IpO1xuICAgICAgICAvLyB1cGRhdGUgdGhlIGFjdGl2ZSBrbm9iJ3MgcG9zaXRpb25cbiAgICAgICAgdGhpcy51cGRhdGUoY3VycmVudFgpO1xuICAgIH1cbiAgICBvbk1vdmUoZGV0YWlsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKGRldGFpbC5jdXJyZW50WCk7XG4gICAgfVxuICAgIG9uRW5kKGRldGFpbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZShkZXRhaWwuY3VycmVudFgpO1xuICAgICAgICB0aGlzLnByZXNzZWRLbm9iID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB1cGRhdGUoY3VycmVudFgpIHtcbiAgICAgICAgLy8gZmlndXJlIG91dCB3aGVyZSB0aGUgcG9pbnRlciBpcyBjdXJyZW50bHkgYXRcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBrbm9iIGJlaW5nIGludGVyYWN0ZWQgd2l0aFxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5yZWN0O1xuICAgICAgICBsZXQgcmF0aW8gPSBjbGFtcCgwLCAoY3VycmVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCwgMSk7XG4gICAgICAgIGlmIChkb2N1bWVudC5kaXIgPT09ICdydGwnKSB7XG4gICAgICAgICAgICByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zbmFwcykge1xuICAgICAgICAgICAgLy8gc25hcHMgdGhlIHJhdGlvIHRvIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICByYXRpbyA9IHZhbHVlVG9SYXRpbyhyYXRpb1RvVmFsdWUocmF0aW8sIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5zdGVwKSwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgd2hpY2gga25vYiBpcyBwcmVzc2VkXG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRLbm9iID09PSAnQScpIHtcbiAgICAgICAgICAgIHRoaXMucmF0aW9BID0gcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhdGlvQiA9IHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSBpbnB1dCB2YWx1ZVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICAgIGdldCB2YWxBKCkge1xuICAgICAgICByZXR1cm4gcmF0aW9Ub1ZhbHVlKHRoaXMucmF0aW9BLCB0aGlzLm1pbiwgdGhpcy5tYXgsIHRoaXMuc3RlcCk7XG4gICAgfVxuICAgIGdldCB2YWxCKCkge1xuICAgICAgICByZXR1cm4gcmF0aW9Ub1ZhbHVlKHRoaXMucmF0aW9CLCB0aGlzLm1pbiwgdGhpcy5tYXgsIHRoaXMuc3RlcCk7XG4gICAgfVxuICAgIGdldCByYXRpb0xvd2VyKCkge1xuICAgICAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnJhdGlvQSwgdGhpcy5yYXRpb0IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXQgcmF0aW9VcHBlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5yYXRpb0EsIHRoaXMucmF0aW9CKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yYXRpb0E7XG4gICAgfVxuICAgIHVwZGF0ZVJhdGlvKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICAgICAgICB0aGlzLnJhdGlvQSA9IHZhbHVlVG9SYXRpbyh2YWx1ZS5sb3dlciwgbWluLCBtYXgpO1xuICAgICAgICAgICAgdGhpcy5yYXRpb0IgPSB2YWx1ZVRvUmF0aW8odmFsdWUudXBwZXIsIG1pbiwgbWF4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmF0aW9BID0gdmFsdWVUb1JhdGlvKHZhbHVlLCBtaW4sIG1heCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlVmFsdWUoKSB7XG4gICAgICAgIHRoaXMubm9VcGRhdGUgPSB0cnVlO1xuICAgICAgICBjb25zdCB7IHZhbEEsIHZhbEIgfSA9IHRoaXM7XG4gICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy5kdWFsS25vYnNcbiAgICAgICAgICAgID8gdmFsQVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbG93ZXI6IE1hdGgubWluKHZhbEEsIHZhbEIpLFxuICAgICAgICAgICAgICAgIHVwcGVyOiBNYXRoLm1heCh2YWxBLCB2YWxCKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ub1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRGb2N1cyhrbm9iKSB7XG4gICAgICAgIGlmICh0aGlzLmVsLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGtub2JFbCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGtub2IgPT09ICdBJyA/ICcucmFuZ2Uta25vYi1hJyA6ICcucmFuZ2Uta25vYi1iJyk7XG4gICAgICAgICAgICBpZiAoa25vYkVsKSB7XG4gICAgICAgICAgICAgICAga25vYkVsLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwLCBlbCwgaGFuZGxlS2V5Ym9hcmQsIHByZXNzZWRLbm9iLCBkaXNhYmxlZCwgcGluLCByYXRpb0xvd2VyLCByYXRpb1VwcGVyIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgYmFyU3RhcnQgPSBgJHtyYXRpb0xvd2VyICogMTAwfSVgO1xuICAgICAgICBjb25zdCBiYXJFbmQgPSBgJHsxMDAgLSByYXRpb1VwcGVyICogMTAwfSVgO1xuICAgICAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcbiAgICAgICAgY29uc3QgaXNSVEwgPSBkb2MuZGlyID09PSAncnRsJztcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIGNvbnN0IGVuZCA9IGlzUlRMID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgdGlja1N0eWxlID0gKHRpY2spID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW3N0YXJ0XTogdGlja1tzdGFydF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJhclN0eWxlID0ge1xuICAgICAgICAgICAgW3N0YXJ0XTogYmFyU3RhcnQsXG4gICAgICAgICAgICBbZW5kXTogYmFyRW5kXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRpY2tzID0gW107XG4gICAgICAgIGlmICh0aGlzLnNuYXBzICYmIHRoaXMudGlja3MpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlID0gbWluOyB2YWx1ZSA8PSBtYXg7IHZhbHVlICs9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbyA9IHZhbHVlVG9SYXRpbyh2YWx1ZSwgbWluLCBtYXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2sgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJhdGlvID49IHJhdGlvTG93ZXIgJiYgcmF0aW8gPD0gcmF0aW9VcHBlcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRpY2tbc3RhcnRdID0gYCR7cmF0aW8gKiAxMDB9JWA7XG4gICAgICAgICAgICAgICAgdGlja3MucHVzaCh0aWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgdGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpLCBkaXNhYmxlZCk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uRm9jdXNpbjogdGhpcy5vbkZvY3VzLCBvbkZvY3Vzb3V0OiB0aGlzLm9uQmx1ciwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUsICdpbi1pdGVtJzogaG9zdENvbnRleHQoJ2lvbi1pdGVtJywgZWwpLCAncmFuZ2UtZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ3JhbmdlLXByZXNzZWQnOiBwcmVzc2VkS25vYiAhPT0gdW5kZWZpbmVkLCAncmFuZ2UtaGFzLXBpbic6IHBpbiB9KSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic3RhcnRcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhbmdlLXNsaWRlclwiLCByZWY6IHJhbmdlRWwgPT4gdGhpcy5yYW5nZVNsaWRlciA9IHJhbmdlRWwgfSwgdGlja3MubWFwKHRpY2sgPT4gKGgoXCJkaXZcIiwgeyBzdHlsZTogdGlja1N0eWxlKHRpY2spLCByb2xlOiBcInByZXNlbnRhdGlvblwiLCBjbGFzczoge1xuICAgICAgICAgICAgICAgICdyYW5nZS10aWNrJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAncmFuZ2UtdGljay1hY3RpdmUnOiB0aWNrLmFjdGl2ZVxuICAgICAgICAgICAgfSB9KSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFuZ2UtYmFyXCIsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYW5nZS1iYXIgcmFuZ2UtYmFyLWFjdGl2ZVwiLCByb2xlOiBcInByZXNlbnRhdGlvblwiLCBzdHlsZTogYmFyU3R5bGUgfSksIHJlbmRlcktub2IoaXNSVEwsIHtcbiAgICAgICAgICAgIGtub2I6ICdBJyxcbiAgICAgICAgICAgIHByZXNzZWQ6IHByZXNzZWRLbm9iID09PSAnQScsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWxBLFxuICAgICAgICAgICAgcmF0aW86IHRoaXMucmF0aW9BLFxuICAgICAgICAgICAgcGluLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBoYW5kbGVLZXlib2FyZCxcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heFxuICAgICAgICB9KSwgdGhpcy5kdWFsS25vYnMgJiYgcmVuZGVyS25vYihpc1JUTCwge1xuICAgICAgICAgICAga25vYjogJ0InLFxuICAgICAgICAgICAgcHJlc3NlZDogcHJlc3NlZEtub2IgPT09ICdCJyxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbEIsXG4gICAgICAgICAgICByYXRpbzogdGhpcy5yYXRpb0IsXG4gICAgICAgICAgICBwaW4sXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIGhhbmRsZUtleWJvYXJkLFxuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4XG4gICAgICAgIH0pKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImVuZFwiIH0pKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcImRlYm91bmNlXCI6IFtcImRlYm91bmNlQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJtaW5cIjogW1wibWluQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJtYXhcIjogW1wibWF4Q2hhbmdlZFwiXSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0ta25vYi1oYW5kbGUtc2l6ZTpjYWxjKHZhcigtLWtub2Itc2l6ZSkgKiAyKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDozO2ZsZXg6MzstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoyfTpob3N0KC5yYW5nZS1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLWxhYmVsKXstbXMtZmxleDppbml0aWFsO2ZsZXg6aW5pdGlhbH06OnNsb3R0ZWQoaW9uLWljb25bc2xvdF0pe2ZvbnQtc2l6ZToyNHB4fS5yYW5nZS1zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTtjb250YWluOnNpemUgbGF5b3V0IHN0eWxlO2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOmdyYWI7LW1zLXRvdWNoLWFjdGlvbjpwYW4teTt0b3VjaC1hY3Rpb246cGFuLXl9Omhvc3QoLnJhbmdlLXByZXNzZWQpIC5yYW5nZS1zbGlkZXJ7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5yYW5nZS1waW57cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnJhbmdlLWtub2ItaGFuZGxle2xlZnQ6MDt0b3A6Y2FsYygodmFyKC0taGVpZ2h0KSAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpKSAvIDIpO21hcmdpbi1sZWZ0OmNhbGMoMHB4IC0gdmFyKC0ta25vYi1oYW5kbGUtc2l6ZSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS1rbm9iLWhhbmRsZS1zaXplKTtoZWlnaHQ6dmFyKC0ta25vYi1oYW5kbGUtc2l6ZSk7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1rbm9iLWhhbmRsZSxbZGlyPXJ0bF0gLnJhbmdlLWtub2ItaGFuZGxle3JpZ2h0OnVuc2V0O3JpZ2h0OjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5yYW5nZS1rbm9iLWhhbmRsZXttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMik7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMil9fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYi1oYW5kbGUsW2Rpcj1ydGxdIC5yYW5nZS1rbm9iLWhhbmRsZXtsZWZ0OnVuc2V0fS5yYW5nZS1rbm9iLWhhbmRsZTphY3RpdmUsLnJhbmdlLWtub2ItaGFuZGxlOmZvY3Vze291dGxpbmU6bm9uZX0ucmFuZ2UtYmFye2JvcmRlci1yYWRpdXM6dmFyKC0tYmFyLWJvcmRlci1yYWRpdXMpO2xlZnQ6MDt0b3A6Y2FsYygodmFyKC0taGVpZ2h0KSAtIHZhcigtLWJhci1oZWlnaHQpKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWJhci1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQpO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1iYXIsW2Rpcj1ydGxdIC5yYW5nZS1iYXJ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MDtsZWZ0OnVuc2V0fS5yYW5nZS1rbm9ie2JvcmRlci1yYWRpdXM6dmFyKC0ta25vYi1ib3JkZXItcmFkaXVzKTtsZWZ0OmNhbGMoNTAlIC0gdmFyKC0ta25vYi1zaXplKSAvIDIpO3RvcDpjYWxjKDUwJSAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS1rbm9iLXNpemUpO2hlaWdodDp2YXIoLS1rbm9iLXNpemUpO2JhY2tncm91bmQ6dmFyKC0ta25vYi1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0ta25vYi1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWtub2ItYm94LXNoYWRvdyk7ei1pbmRleDoyO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1rbm9iLFtkaXI9cnRsXSAucmFuZ2Uta25vYntyaWdodDp1bnNldDtyaWdodDpjYWxjKDUwJSAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKTtsZWZ0OnVuc2V0fTpob3N0KC5yYW5nZS1wcmVzc2VkKSAucmFuZ2UtYmFyLWFjdGl2ZXt3aWxsLWNoYW5nZTpsZWZ0LHJpZ2h0fTpob3N0KC5pbi1pdGVtKXt3aWR0aDoxMDAlfTpob3N0KC5pbi1pdGVtKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcn06aG9zdHstLWtub2ItYm9yZGVyLXJhZGl1czo1MCU7LS1rbm9iLWJhY2tncm91bmQ6I2ZmZjstLWtub2ItYm94LXNoYWRvdzowIDNweCAxcHggcmdiYSgwLDAsMCwwLjEpLDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTMpLDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDIpOy0ta25vYi1zaXplOjI4cHg7LS1iYXItaGVpZ2h0OjJweDstLWJhci1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwwLjEpOy0tYmFyLWJhY2tncm91bmQtYWN0aXZlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tYmFyLWJvcmRlci1yYWRpdXM6MDstLWhlaWdodDo0MnB4O3BhZGRpbmctbGVmdDoxNnB4O3BhZGRpbmctcmlnaHQ6MTZweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19Omhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWJhci1hY3RpdmUsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLXRpY2stYWN0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHh9fTo6c2xvdHRlZChbc2xvdD1lbmRdKXttYXJnaW4tbGVmdDoxNnB4O21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChbc2xvdD1lbmRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH19Omhvc3QoLnJhbmdlLWhhcy1waW4pe3BhZGRpbmctdG9wOjIwcHh9LnJhbmdlLWJhci1hY3RpdmV7Ym90dG9tOjA7d2lkdGg6YXV0bztiYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSl9LnJhbmdlLXRpY2t7bWFyZ2luLWxlZnQ6LTFweDtib3JkZXItcmFkaXVzOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE4cHg7d2lkdGg6MnB4O2hlaWdodDo4cHg7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjEpO3BvaW50ZXItZXZlbnRzOm5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5yYW5nZS10aWNre21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0Oi0xcHg7bWFyZ2luLWlubGluZS1zdGFydDotMXB4fX0ucmFuZ2UtdGljay1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5yYW5nZS1waW57LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyOHB4LDApIHNjYWxlKC4wMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjhweCwwKSBzY2FsZSguMDEpO3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTIwcHg7bWluLXdpZHRoOjI4cHg7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4xMnMgZWFzZTt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4xMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMTJzIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjEycyBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIC4xMnMgZWFzZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO2ZvbnQtc2l6ZToxMnB4O3RleHQtYWxpZ246Y2VudGVyfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucmFuZ2UtcGlue3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHh9fS5yYW5nZS1rbm9iLXByZXNzZWQgLnJhbmdlLXBpbnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlKDEpfTpob3N0KC5yYW5nZS1kaXNhYmxlZCl7b3BhY2l0eTouNX1cIjsgfVxufTtcbmNvbnN0IHJlbmRlcktub2IgPSAoaXNSVEwsIHsga25vYiwgdmFsdWUsIHJhdGlvLCBtaW4sIG1heCwgZGlzYWJsZWQsIHByZXNzZWQsIHBpbiwgaGFuZGxlS2V5Ym9hcmQgfSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIGNvbnN0IGtub2JTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICAgICAgc3R5bGVbc3RhcnRdID0gYCR7cmF0aW8gKiAxMDB9JWA7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9O1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IG9uS2V5RG93bjogKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBldi5rZXk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlS2V5Ym9hcmQoa25vYiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZUtleWJvYXJkKGtub2IsIHRydWUpO1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGNsYXNzOiB7XG4gICAgICAgICAgICAncmFuZ2Uta25vYi1oYW5kbGUnOiB0cnVlLFxuICAgICAgICAgICAgJ3JhbmdlLWtub2ItYSc6IGtub2IgPT09ICdBJyxcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLWInOiBrbm9iID09PSAnQicsXG4gICAgICAgICAgICAncmFuZ2Uta25vYi1wcmVzc2VkJzogcHJlc3NlZCxcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLW1pbic6IHZhbHVlID09PSBtaW4sXG4gICAgICAgICAgICAncmFuZ2Uta25vYi1tYXgnOiB2YWx1ZSA9PT0gbWF4XG4gICAgICAgIH0sIHN0eWxlOiBrbm9iU3R5bGUoKSwgcm9sZTogXCJzbGlkZXJcIiwgdGFiaW5kZXg6IGRpc2FibGVkID8gLTEgOiAwLCBcImFyaWEtdmFsdWVtaW5cIjogbWluLCBcImFyaWEtdmFsdWVtYXhcIjogbWF4LCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUgfSwgcGluICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYW5nZS1waW5cIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9LCBNYXRoLnJvdW5kKHZhbHVlKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYW5nZS1rbm9iXCIsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSkpKTtcbn07XG5jb25zdCByYXRpb1RvVmFsdWUgPSAocmF0aW8sIG1pbiwgbWF4LCBzdGVwKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gKG1heCAtIG1pbikgKiByYXRpbztcbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwICsgbWluO1xuICAgIH1cbiAgICByZXR1cm4gY2xhbXAobWluLCB2YWx1ZSwgbWF4KTtcbn07XG5jb25zdCB2YWx1ZVRvUmF0aW8gPSAodmFsdWUsIG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIGNsYW1wKDAsICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSwgMSk7XG59O1xuXG5leHBvcnQgeyBSYW5nZSBhcyBpb25fcmFuZ2UgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=