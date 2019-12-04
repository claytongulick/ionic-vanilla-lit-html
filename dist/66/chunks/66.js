(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-range-md.entry.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-range-md.entry.js ***!
  \******************************************************************/
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
    static get style() { return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:\"\";z-index:-1}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin:before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yYW5nZS1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDaUU7QUFDZjs7QUFFaEY7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOERBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4REFBSztBQUNuQztBQUNBO0FBQ0EsOEJBQThCLDhEQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHdCQUF3QiwyREFBVztBQUNuQyx1QkFBdUIsMkRBQVc7QUFDbEM7QUFDQTtBQUNBLHlCQUF5Qiw4REFB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QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiI2NlxcY2h1bmtzXFw2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY2xhbXAsIGQgYXMgZGVib3VuY2VFdmVudCwgYSBhcyByZW5kZXJIaWRkZW5JbnB1dCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBSYW5nZSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubm9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJhdGlvQSA9IDA7XG4gICAgICAgIHRoaXMucmF0aW9CID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvdyBsb25nLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gdHJpZ2dlciB0aGVcbiAgICAgICAgICogYGlvbkNoYW5nZWAgZXZlbnQgYWZ0ZXIgZWFjaCBjaGFuZ2UgaW4gdGhlIHJhbmdlIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZWJvdW5jZSA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0d28ga25vYnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR1YWxLbm9icyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogTWluaW11bSBpbnRlZ2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWluID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1heGltdW0gaW50ZWdlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1heCA9IDEwMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgYSBwaW4gd2l0aCBpbnRlZ2VyIHZhbHVlIGlzIHNob3duIHdoZW4gdGhlIGtub2JcbiAgICAgICAgICogaXMgcHJlc3NlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGluID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrbm9iIHNuYXBzIHRvIHRpY2sgbWFya3MgZXZlbmx5IHNwYWNlZCBiYXNlZFxuICAgICAgICAgKiBvbiB0aGUgc3RlcCBwcm9wZXJ0eSB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc25hcHMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZmllcyB0aGUgdmFsdWUgZ3JhbnVsYXJpdHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aWNrIG1hcmtzIGFyZSBkaXNwbGF5ZWQgYmFzZWQgb24gdGhlIHN0ZXAgdmFsdWUuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIGBzbmFwc2AgaXMgYHRydWVgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50aWNrcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSByYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5jbGFtcEJvdW5kcyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNsYW1wKHRoaXMubWluLCB2YWx1ZSwgdGhpcy5tYXgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuc3VyZVZhbHVlSW5Cb3VuZHMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VyOiB0aGlzLmNsYW1wQm91bmRzKHZhbHVlLmxvd2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdXBwZXI6IHRoaXMuY2xhbXBCb3VuZHModmFsdWUudXBwZXIpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYW1wQm91bmRzKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlib2FyZCA9IChrbm9iLCBpc0luY3JlYXNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RlcCA9IHRoaXMuc3RlcDtcbiAgICAgICAgICAgIHN0ZXAgPSBzdGVwID4gMCA/IHN0ZXAgOiAxO1xuICAgICAgICAgICAgc3RlcCA9IHN0ZXAgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XG4gICAgICAgICAgICBpZiAoIWlzSW5jcmVhc2UpIHtcbiAgICAgICAgICAgICAgICBzdGVwICo9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGtub2IgPT09ICdBJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmF0aW9BID0gY2xhbXAoMCwgdGhpcy5yYXRpb0EgKyBzdGVwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmF0aW9CID0gY2xhbXAoMCwgdGhpcy5yYXRpb0IgKyBzdGVwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIH1cbiAgICBkZWJvdW5jZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gZGVib3VuY2VFdmVudCh0aGlzLmlvbkNoYW5nZSwgdGhpcy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIG1pbkNoYW5nZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1heENoYW5nZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIHZhbHVlQ2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMubm9VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHRoaXMuZW5zdXJlVmFsdWVJbkJvdW5kcyh2YWx1ZSk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoeyB2YWx1ZSB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZUNoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgY29uc3QgcmFuZ2VTbGlkZXIgPSB0aGlzLnJhbmdlU2xpZGVyO1xuICAgICAgICBpZiAocmFuZ2VTbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgICAgICAgZWw6IHJhbmdlU2xpZGVyLFxuICAgICAgICAgICAgICAgIGdlc3R1cmVOYW1lOiAncmFuZ2UnLFxuICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgICAgICBvblN0YXJ0OiBldiA9PiB0aGlzLm9uU3RhcnQoZXYpLFxuICAgICAgICAgICAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgICAgICAgICAgIG9uRW5kOiBldiA9PiB0aGlzLm9uRW5kKGV2KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUgfHwgMDtcbiAgICAgICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG93ZXI6IDAsXG4gICAgICAgICAgICAgICAgdXBwZXI6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudXBwZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ2ludGVyYWN0aXZlJzogdHJ1ZSxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3RhcnQoZGV0YWlsKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3QgPSB0aGlzLnJhbmdlU2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50WCA9IGRldGFpbC5jdXJyZW50WDtcbiAgICAgICAgLy8gZmlndXJlIG91dCB3aGljaCBrbm9iIHRoZXkgc3RhcnRlZCBjbG9zZXIgdG9cbiAgICAgICAgbGV0IHJhdGlvID0gY2xhbXAoMCwgKGN1cnJlbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgsIDEpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGlyID09PSAncnRsJykge1xuICAgICAgICAgICAgcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVzc2VkS25vYiA9XG4gICAgICAgICAgICAhdGhpcy5kdWFsS25vYnMgfHxcbiAgICAgICAgICAgICAgICBNYXRoLmFicyh0aGlzLnJhdGlvQSAtIHJhdGlvKSA8IE1hdGguYWJzKHRoaXMucmF0aW9CIC0gcmF0aW8pXG4gICAgICAgICAgICAgICAgPyAnQSdcbiAgICAgICAgICAgICAgICA6ICdCJztcbiAgICAgICAgdGhpcy5zZXRGb2N1cyh0aGlzLnByZXNzZWRLbm9iKTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBhY3RpdmUga25vYidzIHBvc2l0aW9uXG4gICAgICAgIHRoaXMudXBkYXRlKGN1cnJlbnRYKTtcbiAgICB9XG4gICAgb25Nb3ZlKGRldGFpbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZShkZXRhaWwuY3VycmVudFgpO1xuICAgIH1cbiAgICBvbkVuZChkZXRhaWwpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoZGV0YWlsLmN1cnJlbnRYKTtcbiAgICAgICAgdGhpcy5wcmVzc2VkS25vYiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdXBkYXRlKGN1cnJlbnRYKSB7XG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgd2hlcmUgdGhlIHBvaW50ZXIgaXMgY3VycmVudGx5IGF0XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUga25vYiBiZWluZyBpbnRlcmFjdGVkIHdpdGhcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMucmVjdDtcbiAgICAgICAgbGV0IHJhdGlvID0gY2xhbXAoMCwgKGN1cnJlbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgsIDEpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGlyID09PSAncnRsJykge1xuICAgICAgICAgICAgcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc25hcHMpIHtcbiAgICAgICAgICAgIC8vIHNuYXBzIHRoZSByYXRpbyB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgcmF0aW8gPSB2YWx1ZVRvUmF0aW8ocmF0aW9Ub1ZhbHVlKHJhdGlvLCB0aGlzLm1pbiwgdGhpcy5tYXgsIHRoaXMuc3RlcCksIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIHdoaWNoIGtub2IgaXMgcHJlc3NlZFxuICAgICAgICBpZiAodGhpcy5wcmVzc2VkS25vYiA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB0aGlzLnJhdGlvQSA9IHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYXRpb0IgPSByYXRpbztcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgaW5wdXQgdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIH1cbiAgICBnZXQgdmFsQSgpIHtcbiAgICAgICAgcmV0dXJuIHJhdGlvVG9WYWx1ZSh0aGlzLnJhdGlvQSwgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLnN0ZXApO1xuICAgIH1cbiAgICBnZXQgdmFsQigpIHtcbiAgICAgICAgcmV0dXJuIHJhdGlvVG9WYWx1ZSh0aGlzLnJhdGlvQiwgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLnN0ZXApO1xuICAgIH1cbiAgICBnZXQgcmF0aW9Mb3dlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5yYXRpb0EsIHRoaXMucmF0aW9CKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZ2V0IHJhdGlvVXBwZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMucmF0aW9BLCB0aGlzLnJhdGlvQik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmF0aW9BO1xuICAgIH1cbiAgICB1cGRhdGVSYXRpbygpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgICAgICAgdGhpcy5yYXRpb0EgPSB2YWx1ZVRvUmF0aW8odmFsdWUubG93ZXIsIG1pbiwgbWF4KTtcbiAgICAgICAgICAgIHRoaXMucmF0aW9CID0gdmFsdWVUb1JhdGlvKHZhbHVlLnVwcGVyLCBtaW4sIG1heCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhdGlvQSA9IHZhbHVlVG9SYXRpbyh2YWx1ZSwgbWluLCBtYXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgICB0aGlzLm5vVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgeyB2YWxBLCB2YWxCIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLnZhbHVlID0gIXRoaXMuZHVhbEtub2JzXG4gICAgICAgICAgICA/IHZhbEFcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGxvd2VyOiBNYXRoLm1pbih2YWxBLCB2YWxCKSxcbiAgICAgICAgICAgICAgICB1cHBlcjogTWF0aC5tYXgodmFsQSwgdmFsQilcbiAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMubm9VcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0Rm9jdXMoa25vYikge1xuICAgICAgICBpZiAodGhpcy5lbC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBjb25zdCBrbm9iRWwgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcihrbm9iID09PSAnQScgPyAnLnJhbmdlLWtub2ItYScgOiAnLnJhbmdlLWtub2ItYicpO1xuICAgICAgICAgICAgaWYgKGtub2JFbCkge1xuICAgICAgICAgICAgICAgIGtub2JFbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCwgZWwsIGhhbmRsZUtleWJvYXJkLCBwcmVzc2VkS25vYiwgZGlzYWJsZWQsIHBpbiwgcmF0aW9Mb3dlciwgcmF0aW9VcHBlciB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGJhclN0YXJ0ID0gYCR7cmF0aW9Mb3dlciAqIDEwMH0lYDtcbiAgICAgICAgY29uc3QgYmFyRW5kID0gYCR7MTAwIC0gcmF0aW9VcHBlciAqIDEwMH0lYDtcbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IGlzUlRMID0gZG9jLmRpciA9PT0gJ3J0bCc7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBjb25zdCBlbmQgPSBpc1JUTCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IHRpY2tTdHlsZSA9ICh0aWNrKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFtzdGFydF06IHRpY2tbc3RhcnRdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBiYXJTdHlsZSA9IHtcbiAgICAgICAgICAgIFtzdGFydF06IGJhclN0YXJ0LFxuICAgICAgICAgICAgW2VuZF06IGJhckVuZFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0aWNrcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zbmFwcyAmJiB0aGlzLnRpY2tzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSA9IG1pbjsgdmFsdWUgPD0gbWF4OyB2YWx1ZSArPSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmF0aW8gPSB2YWx1ZVRvUmF0aW8odmFsdWUsIG1pbiwgbWF4KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrID0ge1xuICAgICAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiByYXRpbyA+PSByYXRpb0xvd2VyICYmIHJhdGlvIDw9IHJhdGlvVXBwZXIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aWNrW3N0YXJ0XSA9IGAke3JhdGlvICogMTAwfSVgO1xuICAgICAgICAgICAgICAgIHRpY2tzLnB1c2godGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKSwgZGlzYWJsZWQpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkZvY3VzaW46IHRoaXMub25Gb2N1cywgb25Gb2N1c291dDogdGhpcy5vbkJsdXIsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCAnaW4taXRlbSc6IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKSwgJ3JhbmdlLWRpc2FibGVkJzogZGlzYWJsZWQsICdyYW5nZS1wcmVzc2VkJzogcHJlc3NlZEtub2IgIT09IHVuZGVmaW5lZCwgJ3JhbmdlLWhhcy1waW4nOiBwaW4gfSkgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInN0YXJ0XCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYW5nZS1zbGlkZXJcIiwgcmVmOiByYW5nZUVsID0+IHRoaXMucmFuZ2VTbGlkZXIgPSByYW5nZUVsIH0sIHRpY2tzLm1hcCh0aWNrID0+IChoKFwiZGl2XCIsIHsgc3R5bGU6IHRpY2tTdHlsZSh0aWNrKSwgcm9sZTogXCJwcmVzZW50YXRpb25cIiwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAncmFuZ2UtdGljayc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3JhbmdlLXRpY2stYWN0aXZlJzogdGljay5hY3RpdmVcbiAgICAgICAgICAgIH0gfSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhbmdlLWJhclwiLCByb2xlOiBcInByZXNlbnRhdGlvblwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFuZ2UtYmFyIHJhbmdlLWJhci1hY3RpdmVcIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiwgc3R5bGU6IGJhclN0eWxlIH0pLCByZW5kZXJLbm9iKGlzUlRMLCB7XG4gICAgICAgICAgICBrbm9iOiAnQScsXG4gICAgICAgICAgICBwcmVzc2VkOiBwcmVzc2VkS25vYiA9PT0gJ0EnLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsQSxcbiAgICAgICAgICAgIHJhdGlvOiB0aGlzLnJhdGlvQSxcbiAgICAgICAgICAgIHBpbixcbiAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgaGFuZGxlS2V5Ym9hcmQsXG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXhcbiAgICAgICAgfSksIHRoaXMuZHVhbEtub2JzICYmIHJlbmRlcktub2IoaXNSVEwsIHtcbiAgICAgICAgICAgIGtub2I6ICdCJyxcbiAgICAgICAgICAgIHByZXNzZWQ6IHByZXNzZWRLbm9iID09PSAnQicsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWxCLFxuICAgICAgICAgICAgcmF0aW86IHRoaXMucmF0aW9CLFxuICAgICAgICAgICAgcGluLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBoYW5kbGVLZXlib2FyZCxcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heFxuICAgICAgICB9KSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJlbmRcIiB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJkZWJvdW5jZVwiOiBbXCJkZWJvdW5jZUNoYW5nZWRcIl0sXG4gICAgICAgIFwibWluXCI6IFtcIm1pbkNoYW5nZWRcIl0sXG4gICAgICAgIFwibWF4XCI6IFtcIm1heENoYW5nZWRcIl0sXG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWtub2ItaGFuZGxlLXNpemU6Y2FsYyh2YXIoLS1rbm9iLXNpemUpICogMik7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MztmbGV4OjM7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mn06aG9zdCgucmFuZ2UtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9OjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXg6aW5pdGlhbDtmbGV4OmluaXRpYWx9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3RdKXtmb250LXNpemU6MjRweH0ucmFuZ2Utc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWhlaWdodCk7Y29udGFpbjpzaXplIGxheW91dCBzdHlsZTtjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjpncmFiOy1tcy10b3VjaC1hY3Rpb246cGFuLXk7dG91Y2gtYWN0aW9uOnBhbi15fTpob3N0KC5yYW5nZS1wcmVzc2VkKSAucmFuZ2Utc2xpZGVye2N1cnNvcjotd2Via2l0LWdyYWJiaW5nO2N1cnNvcjpncmFiYmluZ30ucmFuZ2UtcGlue3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5yYW5nZS1rbm9iLWhhbmRsZXtsZWZ0OjA7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSkgLyAyKTttYXJnaW4tbGVmdDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0ta25vYi1oYW5kbGUtc2l6ZSk7aGVpZ2h0OnZhcigtLWtub2ItaGFuZGxlLXNpemUpO3RleHQtYWxpZ246Y2VudGVyfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYi1oYW5kbGUsW2Rpcj1ydGxdIC5yYW5nZS1rbm9iLWhhbmRsZXtyaWdodDp1bnNldDtyaWdodDowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucmFuZ2Uta25vYi1oYW5kbGV7bWFyZ2luLWxlZnQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6Y2FsYygwcHggLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSAvIDIpO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYygwcHggLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSAvIDIpfX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLWtub2ItaGFuZGxlLFtkaXI9cnRsXSAucmFuZ2Uta25vYi1oYW5kbGV7bGVmdDp1bnNldH0ucmFuZ2Uta25vYi1oYW5kbGU6YWN0aXZlLC5yYW5nZS1rbm9iLWhhbmRsZTpmb2N1c3tvdXRsaW5lOm5vbmV9LnJhbmdlLWJhcntib3JkZXItcmFkaXVzOnZhcigtLWJhci1ib3JkZXItcmFkaXVzKTtsZWZ0OjA7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1iYXItaGVpZ2h0KSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1iYXItaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kKTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2UtYmFyLFtkaXI9cnRsXSAucmFuZ2UtYmFye3JpZ2h0OnVuc2V0O3JpZ2h0OjA7bGVmdDp1bnNldH0ucmFuZ2Uta25vYntib3JkZXItcmFkaXVzOnZhcigtLWtub2ItYm9yZGVyLXJhZGl1cyk7bGVmdDpjYWxjKDUwJSAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKTt0b3A6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0ta25vYi1zaXplKTtoZWlnaHQ6dmFyKC0ta25vYi1zaXplKTtiYWNrZ3JvdW5kOnZhcigtLWtub2ItYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWtub2ItYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1rbm9iLWJveC1zaGFkb3cpO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1rbm9iLFtkaXI9cnRsXSAucmFuZ2Uta25vYntyaWdodDp1bnNldDtyaWdodDpjYWxjKDUwJSAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKTtsZWZ0OnVuc2V0fTpob3N0KC5yYW5nZS1wcmVzc2VkKSAucmFuZ2UtYmFyLWFjdGl2ZXt3aWxsLWNoYW5nZTpsZWZ0LHJpZ2h0fTpob3N0KC5pbi1pdGVtKXt3aWR0aDoxMDAlfTpob3N0KC5pbi1pdGVtKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcn06aG9zdHstLWtub2ItYm9yZGVyLXJhZGl1czo1MCU7LS1rbm9iLWJhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQtYWN0aXZlKTstLWtub2ItYm94LXNoYWRvdzpub25lOy0ta25vYi1zaXplOjE4cHg7LS1iYXItaGVpZ2h0OjJweDstLWJhci1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMjYpOy0tYmFyLWJhY2tncm91bmQtYWN0aXZlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tYmFyLWJvcmRlci1yYWRpdXM6MDstLWhlaWdodDo0MnB4Oy0tcGluLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1waW4tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7cGFkZGluZy1sZWZ0OjE0cHg7cGFkZGluZy1yaWdodDoxNHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7Zm9udC1zaXplOjEycHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxNHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNHB4O3BhZGRpbmctaW5saW5lLWVuZDoxNHB4fX06aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtYmFye2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4yNil9Omhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWJhci1hY3RpdmUsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWtub2IsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLXBpbiw6aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtcGluOmJlZm9yZSw6aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtdGlja3tiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE0cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNHB4O21hcmdpbi1pbmxpbmUtZW5kOjE0cHh9fTo6c2xvdHRlZChbc2xvdD1lbmRdKXttYXJnaW4tbGVmdDoxNHB4O21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChbc2xvdD1lbmRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTRweDttYXJnaW4taW5saW5lLXN0YXJ0OjE0cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH19Omhvc3QoLnJhbmdlLWhhcy1waW4pe3BhZGRpbmctdG9wOjI4cHh9LnJhbmdlLWJhci1hY3RpdmV7Ym90dG9tOjA7d2lkdGg6YXV0bztiYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSl9LnJhbmdlLWtub2J7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY3KTt0cmFuc2Zvcm06c2NhbGUoLjY3KTstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246LjEyczt0cmFuc2l0aW9uLWR1cmF0aW9uOi4xMnM7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsYm9yZGVyLC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcixib3JkZXIsLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sYmFja2dyb3VuZC1jb2xvcixib3JkZXI7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sYmFja2dyb3VuZC1jb2xvcixib3JkZXIsLXdlYmtpdC10cmFuc2Zvcm07LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2U7ei1pbmRleDoyfS5yYW5nZS10aWNre3Bvc2l0aW9uOmFic29sdXRlO3RvcDpjYWxjKCh2YXIoLS1oZWlnaHQpIC0gdmFyKC0tYmFyLWhlaWdodCkpIC8gMik7d2lkdGg6dmFyKC0tYmFyLWhlaWdodCk7aGVpZ2h0OnZhcigtLWJhci1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQtYWN0aXZlKTt6LWluZGV4OjE7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2UtdGljay1hY3RpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ucmFuZ2UtcGlue3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgc2NhbGUoLjAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSguMDEpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21pbi13aWR0aDoyOHB4O2hlaWdodDoyOHB4Oy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4xMnMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMTJzIGVhc2U7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4xMnMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMTJzIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjEycyBlYXNlLGJhY2tncm91bmQgLjEycyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xMnMgZWFzZSxiYWNrZ3JvdW5kIC4xMnMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMTJzIGVhc2U7Y29sb3I6dmFyKC0tcGluLWNvbG9yKTt0ZXh0LWFsaWduOmNlbnRlcn0ucmFuZ2UtcGluLC5yYW5nZS1waW46YmVmb3Jle2JhY2tncm91bmQ6dmFyKC0tcGluLWJhY2tncm91bmQpfS5yYW5nZS1waW46YmVmb3Jle2xlZnQ6NTAlO3RvcDozcHg7bWFyZ2luLWxlZnQ6LTEzcHg7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDUwJSAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI2cHg7aGVpZ2h0OjI2cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4xMnMgZWFzZTt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjEycyBlYXNlO2NvbnRlbnQ6XFxcIlxcXCI7ei1pbmRleDotMX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLXBpbjpiZWZvcmUsW2Rpcj1ydGxdIC5yYW5nZS1waW46YmVmb3Jle3JpZ2h0OnVuc2V0O3JpZ2h0OjUwJX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnJhbmdlLXBpbjpiZWZvcmV7bWFyZ2luLWxlZnQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LTEzcHg7bWFyZ2luLWlubGluZS1zdGFydDotMTNweH19Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1waW46YmVmb3JlLFtkaXI9cnRsXSAucmFuZ2UtcGluOmJlZm9yZXtsZWZ0OnVuc2V0fS5yYW5nZS1rbm9iLXByZXNzZWQgLnJhbmdlLXBpbnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yNHB4LDApIHNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yNHB4LDApIHNjYWxlKDEpfTpob3N0KDpub3QoLnJhbmdlLWhhcy1waW4pKSAucmFuZ2Uta25vYi1wcmVzc2VkIC5yYW5nZS1rbm9iey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX06aG9zdCgucmFuZ2UtZGlzYWJsZWQpIC5yYW5nZS1iYXIsOmhvc3QoLnJhbmdlLWRpc2FibGVkKSAucmFuZ2UtYmFyLWFjdGl2ZSw6aG9zdCgucmFuZ2UtZGlzYWJsZWQpIC5yYW5nZS1rbm9iLDpob3N0KC5yYW5nZS1kaXNhYmxlZCkgLnJhbmdlLXRpY2t7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsI2JmYmZiZil9Omhvc3QoLnJhbmdlLWRpc2FibGVkKSAucmFuZ2Uta25vYnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNTUpO3RyYW5zZm9ybTpzY2FsZSguNTUpO291dGxpbmU6NXB4IHNvbGlkICNmZmZ9XCI7IH1cbn07XG5jb25zdCByZW5kZXJLbm9iID0gKGlzUlRMLCB7IGtub2IsIHZhbHVlLCByYXRpbywgbWluLCBtYXgsIGRpc2FibGVkLCBwcmVzc2VkLCBwaW4sIGhhbmRsZUtleWJvYXJkIH0pID0+IHtcbiAgICBjb25zdCBzdGFydCA9IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICBjb25zdCBrbm9iU3R5bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge307XG4gICAgICAgIHN0eWxlW3N0YXJ0XSA9IGAke3JhdGlvICogMTAwfSVgO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBvbktleURvd246IChldikgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZXYua2V5O1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZUtleWJvYXJkKGtub2IsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcgfHwga2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVLZXlib2FyZChrbm9iLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBjbGFzczoge1xuICAgICAgICAgICAgJ3JhbmdlLWtub2ItaGFuZGxlJzogdHJ1ZSxcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLWEnOiBrbm9iID09PSAnQScsXG4gICAgICAgICAgICAncmFuZ2Uta25vYi1iJzoga25vYiA9PT0gJ0InLFxuICAgICAgICAgICAgJ3JhbmdlLWtub2ItcHJlc3NlZCc6IHByZXNzZWQsXG4gICAgICAgICAgICAncmFuZ2Uta25vYi1taW4nOiB2YWx1ZSA9PT0gbWluLFxuICAgICAgICAgICAgJ3JhbmdlLWtub2ItbWF4JzogdmFsdWUgPT09IG1heFxuICAgICAgICB9LCBzdHlsZToga25vYlN0eWxlKCksIHJvbGU6IFwic2xpZGVyXCIsIHRhYmluZGV4OiBkaXNhYmxlZCA/IC0xIDogMCwgXCJhcmlhLXZhbHVlbWluXCI6IG1pbiwgXCJhcmlhLXZhbHVlbWF4XCI6IG1heCwgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlIH0sIHBpbiAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFuZ2UtcGluXCIsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSwgTWF0aC5yb3VuZCh2YWx1ZSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFuZ2Uta25vYlwiLCByb2xlOiBcInByZXNlbnRhdGlvblwiIH0pKSk7XG59O1xuY29uc3QgcmF0aW9Ub1ZhbHVlID0gKHJhdGlvLCBtaW4sIG1heCwgc3RlcCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IChtYXggLSBtaW4pICogcmF0aW87XG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcCArIG1pbjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYW1wKG1pbiwgdmFsdWUsIG1heCk7XG59O1xuY29uc3QgdmFsdWVUb1JhdGlvID0gKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBjbGFtcCgwLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbiksIDEpO1xufTtcblxuZXhwb3J0IHsgUmFuZ2UgYXMgaW9uX3JhbmdlIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9