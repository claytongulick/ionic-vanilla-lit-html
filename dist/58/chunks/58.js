(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-input-md.entry.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-input-md.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_input", function() { return Input; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const Input = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-input-${inputIds++}`;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        /**
         * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        this.autocapitalize = 'off';
        /**
         * Indicates whether the value of the control can be automatically completed by the browser.
         */
        this.autocomplete = 'off';
        /**
         * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        this.autocorrect = 'off';
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        this.clearInput = false;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.readonly = false;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * If `true`, the element will have its spelling and grammar checked.
         */
        this.spellcheck = false;
        /**
         * The type of control to display. The default type is text.
         */
        this.type = 'text';
        /**
         * The value of the input.
         */
        this.value = '';
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.ionInput.emit(ev);
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.focusChanged();
            this.emitStyle();
            this.ionBlur.emit();
        };
        this.onFocus = () => {
            this.hasFocus = true;
            this.focusChanged();
            this.emitStyle();
            this.ionFocus.emit();
        };
        this.onKeydown = () => {
            if (this.shouldClearOnEdit()) {
                // Did the input value change after it was blurred and edited?
                if (this.didBlurAfterEdit && this.hasValue()) {
                    // Clear the input
                    this.clearTextInput();
                }
                // Reset the flag
                this.didBlurAfterEdit = false;
            }
        };
        this.clearTextInput = (ev) => {
            if (this.clearInput && !this.readonly && !this.disabled && ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.value = '';
            /**
             * This is needed for clearOnEdit
             * Otherwise the value will not be cleared
             * if user is inside the input
             */
            if (this.nativeInput) {
                this.nativeInput.value = '';
            }
        };
        this.ionInput = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInput", 7);
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionInputDidLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInputDidLoad", 7);
        this.ionInputDidUnload = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInputDidUnload", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
    }
    debounceChanged() {
        this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
    }
    disabledChanged() {
        this.emitStyle();
    }
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        this.emitStyle();
        this.ionChange.emit({ value: this.value });
    }
    connectedCallback() {
        this.emitStyle();
        this.debounceChanged();
        {
            this.el.dispatchEvent(new CustomEvent('ionInputDidLoad', {
                detail: this.el
            }));
        }
    }
    disconnectedCallback() {
        {
            document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
                detail: this.el
            }));
        }
    }
    /**
     * Sets focus on the specified `ion-input`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    /**
     * Returns the native `<input>` element used under the hood.
     */
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    shouldClearOnEdit() {
        const { type, clearOnEdit } = this;
        return (clearOnEdit === undefined)
            ? type === 'password'
            : clearOnEdit;
    }
    getValue() {
        return this.value || '';
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'input': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus,
            'interactive-disabled': this.disabled,
        });
    }
    focusChanged() {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    }
    hasValue() {
        return this.getValue().length > 0;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const value = this.getValue();
        const labelId = this.inputId + '-lbl';
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el);
        if (label) {
            label.id = labelId;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true, 'has-value': this.hasValue(), 'has-focus': this.hasFocus }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: "native-input", ref: input => this.nativeInput = input, "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }), (this.clearInput && !this.readonly && !this.disabled) && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "debounce": ["debounceChanged"],
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
    }; }
    static get style() { return ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h a.sc-ion-input-md, .has-focus.sc-ion-input-md-h button.sc-ion-input-md, .has-focus.sc-ion-input-md-h input.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-floating.sc-ion-input-md-h, .item-label-floating .sc-ion-input-md-h, .item-label-stacked.sc-ion-input-md-h, .item-label-stacked .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><polygon%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20points=\'405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256\'/></svg>\");width:30px;height:30px;background-size:22px}"; }
};
let inputIds = 0;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pbnB1dC1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDaUQ7QUFDakI7O0FBRTlEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QixvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVc7QUFDbkMseUJBQXlCLDJEQUFXO0FBQ3BDLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkMsK0JBQStCLDJEQUFXO0FBQzFDLGlDQUFp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QUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiNThcXGNodW5rc1xcNTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlRXZlbnQsIGYgYXMgZmluZEl0ZW1MYWJlbCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBJbnB1dCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IGBpb24taW5wdXQtJHtpbnB1dElkcysrfWA7XG4gICAgICAgIHRoaXMuZGlkQmx1ckFmdGVyRWRpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbmQgaG93IHRoZSB0ZXh0IHZhbHVlIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGNhcGl0YWxpemVkIGFzIGl0IGlzIGVudGVyZWQvZWRpdGVkIGJ5IHRoZSB1c2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvY2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNhbiBiZSBhdXRvbWF0aWNhbGx5IGNvbXBsZXRlZCBieSB0aGUgYnJvd3Nlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIGF1dG8gY29ycmVjdGlvbiBzaG91bGQgYmUgZW5hYmxlZCB3aGVuIHRoZSB1c2VyIGlzIGVudGVyaW5nL2VkaXRpbmcgdGhlIHRleHQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jb3JyZWN0ID0gJ29mZic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIEJvb2xlYW4gYXR0cmlidXRlIGxldHMgeW91IHNwZWNpZnkgdGhhdCBhIGZvcm0gY29udHJvbCBzaG91bGQgaGF2ZSBpbnB1dCBmb2N1cyB3aGVuIHRoZSBwYWdlIGxvYWRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgYSBjbGVhciBpY29uIHdpbGwgYXBwZWFyIGluIHRoZSBpbnB1dCB3aGVuIHRoZXJlIGlzIGEgdmFsdWUuIENsaWNraW5nIGl0IGNsZWFycyB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsZWFySW5wdXQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdG8gd2FpdCB0byB0cmlnZ2VyIHRoZSBgaW9uQ2hhbmdlYCBldmVudCBhZnRlciBlYWNoIGtleXN0cm9rZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGVib3VuY2UgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IG1vZGlmeSB0aGUgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIG11c3QgZmlsbCBpbiBhIHZhbHVlIGJlZm9yZSBzdWJtaXR0aW5nIGEgZm9ybS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGl0cyBzcGVsbGluZyBhbmQgZ3JhbW1hciBjaGVja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zcGVsbGNoZWNrID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiBjb250cm9sIHRvIGRpc3BsYXkuIFRoZSBkZWZhdWx0IHR5cGUgaXMgdGV4dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMub25JbnB1dCA9IChldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlvbklucHV0LmVtaXQoZXYpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNDaGFuZ2VkKCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uS2V5ZG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZENsZWFyT25FZGl0KCkpIHtcbiAgICAgICAgICAgICAgICAvLyBEaWQgdGhlIGlucHV0IHZhbHVlIGNoYW5nZSBhZnRlciBpdCB3YXMgYmx1cnJlZCBhbmQgZWRpdGVkP1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpZEJsdXJBZnRlckVkaXQgJiYgdGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyVGV4dElucHV0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBmbGFnXG4gICAgICAgICAgICAgICAgdGhpcy5kaWRCbHVyQWZ0ZXJFZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXJUZXh0SW5wdXQgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFySW5wdXQgJiYgIXRoaXMucmVhZG9ubHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgZXYpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGlzIGlzIG5lZWRlZCBmb3IgY2xlYXJPbkVkaXRcbiAgICAgICAgICAgICAqIE90aGVyd2lzZSB0aGUgdmFsdWUgd2lsbCBub3QgYmUgY2xlYXJlZFxuICAgICAgICAgICAgICogaWYgdXNlciBpcyBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLm5hdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbnB1dFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25JbnB1dERpZExvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbklucHV0RGlkTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25JbnB1dERpZFVubG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXREaWRVbmxvYWRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBkZWJvdW5jZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gZGVib3VuY2VFdmVudCh0aGlzLmlvbkNoYW5nZSwgdGhpcy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgdmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICB0aGlzLmRlYm91bmNlQ2hhbmdlZCgpO1xuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpb25JbnB1dERpZExvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmVsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpb25JbnB1dERpZFVubG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuZWxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBzcGVjaWZpZWQgYGlvbi1pbnB1dGAuIFVzZSB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBnbG9iYWxcbiAgICAgKiBgaW5wdXQuZm9jdXMoKWAuXG4gICAgICovXG4gICAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50IHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAgICovXG4gICAgZ2V0SW5wdXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMubmF0aXZlSW5wdXQpO1xuICAgIH1cbiAgICBzaG91bGRDbGVhck9uRWRpdCgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBjbGVhck9uRWRpdCB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChjbGVhck9uRWRpdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgPyB0eXBlID09PSAncGFzc3dvcmQnXG4gICAgICAgICAgICA6IGNsZWFyT25FZGl0O1xuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgJyc7XG4gICAgfVxuICAgIGVtaXRTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZSc6IHRydWUsXG4gICAgICAgICAgICAnaW5wdXQnOiB0cnVlLFxuICAgICAgICAgICAgJ2hhcy1wbGFjZWhvbGRlcic6IHRoaXMucGxhY2Vob2xkZXIgIT0gbnVsbCxcbiAgICAgICAgICAgICdoYXMtdmFsdWUnOiB0aGlzLmhhc1ZhbHVlKCksXG4gICAgICAgICAgICAnaGFzLWZvY3VzJzogdGhpcy5oYXNGb2N1cyxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb2N1c0NoYW5nZWQoKSB7XG4gICAgICAgIC8vIElmIGNsZWFyT25FZGl0IGlzIGVuYWJsZWQgYW5kIHRoZSBpbnB1dCBibHVycmVkIGJ1dCBoYXMgYSB2YWx1ZSwgc2V0IGEgZmxhZ1xuICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMgJiYgdGhpcy5zaG91bGRDbGVhck9uRWRpdCgpICYmIHRoaXMuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgdGhpcy5kaWRCbHVyQWZ0ZXJFZGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGggPiAwO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IHRoaXMuaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKHRoaXMuZWwpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gbGFiZWxJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCAnaGFzLXZhbHVlJzogdGhpcy5oYXNWYWx1ZSgpLCAnaGFzLWZvY3VzJzogdGhpcy5oYXNGb2N1cyB9KSB9LCBoKFwiaW5wdXRcIiwgeyBjbGFzczogXCJuYXRpdmUtaW5wdXRcIiwgcmVmOiBpbnB1dCA9PiB0aGlzLm5hdGl2ZUlucHV0ID0gaW5wdXQsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBhY2NlcHQ6IHRoaXMuYWNjZXB0LCBhdXRvQ2FwaXRhbGl6ZTogdGhpcy5hdXRvY2FwaXRhbGl6ZSwgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9jb21wbGV0ZSwgYXV0b0NvcnJlY3Q6IHRoaXMuYXV0b2NvcnJlY3QsIGF1dG9Gb2N1czogdGhpcy5hdXRvZm9jdXMsIGlucHV0TW9kZTogdGhpcy5pbnB1dG1vZGUsIG1pbjogdGhpcy5taW4sIG1heDogdGhpcy5tYXgsIG1pbkxlbmd0aDogdGhpcy5taW5sZW5ndGgsIG1heExlbmd0aDogdGhpcy5tYXhsZW5ndGgsIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlLCBuYW1lOiB0aGlzLm5hbWUsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgJycsIHJlYWRPbmx5OiB0aGlzLnJlYWRvbmx5LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCwgc3BlbGxDaGVjazogdGhpcy5zcGVsbGNoZWNrLCBzdGVwOiB0aGlzLnN0ZXAsIHNpemU6IHRoaXMuc2l6ZSwgdHlwZTogdGhpcy50eXBlLCB2YWx1ZTogdmFsdWUsIG9uSW5wdXQ6IHRoaXMub25JbnB1dCwgb25CbHVyOiB0aGlzLm9uQmx1ciwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbktleURvd246IHRoaXMub25LZXlkb3duIH0pLCAodGhpcy5jbGVhcklucHV0ICYmICF0aGlzLnJlYWRvbmx5ICYmICF0aGlzLmRpc2FibGVkKSAmJiBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3M6IFwiaW5wdXQtY2xlYXItaWNvblwiLCB0YWJpbmRleDogXCItMVwiLCBvblRvdWNoU3RhcnQ6IHRoaXMuY2xlYXJUZXh0SW5wdXQsIG9uTW91c2VEb3duOiB0aGlzLmNsZWFyVGV4dElucHV0IH0pKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcImRlYm91bmNlXCI6IFtcImRlYm91bmNlQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24taW5wdXQtbWQtaHstLXBsYWNlaG9sZGVyLWNvbG9yOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXN0eWxlOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXdlaWdodDppbml0aWFsOy0tcGxhY2Vob2xkZXItb3BhY2l0eTouNTstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDowOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOmluaXRpYWw7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO3BhZGRpbmc6MCFpbXBvcnRhbnQ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO3otaW5kZXg6Mn1pb24taXRlbS5zYy1pb24taW5wdXQtbWQtaDpub3QoLml0ZW0tbGFiZWwpLCBpb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24taW5wdXQtbWQtaHstLXBhZGRpbmctc3RhcnQ6MH0uaW9uLWNvbG9yLnNjLWlvbi1pbnB1dC1tZC1oe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6aW5saW5lLWJsb2NrOy1tcy1mbGV4OjE7ZmxleDoxO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1ke3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kOi13ZWJraXQtYXV0b2ZpbGx7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZDppbnZhbGlkey13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZDo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0ubmF0aXZlLWlucHV0W2Rpc2FibGVkXS5zYy1pb24taW5wdXQtbWR7b3BhY2l0eTouNH0uY2xvbmVkLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtsZWZ0OjA7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZX1bZGlyPXJ0bF0uc2MtaW9uLWlucHV0LW1kLWggLmNsb25lZC1pbnB1dC5zYy1pb24taW5wdXQtbWQsIFtkaXI9cnRsXSAuc2MtaW9uLWlucHV0LW1kLWggLmNsb25lZC1pbnB1dC5zYy1pb24taW5wdXQtbWQsIFtkaXI9cnRsXS5zYy1pb24taW5wdXQtbWQgLmNsb25lZC1pbnB1dC5zYy1pb24taW5wdXQtbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfS5pbnB1dC1jbGVhci1pY29uLnNjLWlvbi1pbnB1dC1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5oYXMtZm9jdXMuaGFzLXZhbHVlLnNjLWlvbi1pbnB1dC1tZC1oIC5pbnB1dC1jbGVhci1pY29uLnNjLWlvbi1pbnB1dC1tZHt2aXNpYmlsaXR5OnZpc2libGV9Lmhhcy1mb2N1cy5zYy1pb24taW5wdXQtbWQtaHtwb2ludGVyLWV2ZW50czpub25lfS5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW1kLWggYS5zYy1pb24taW5wdXQtbWQsIC5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW1kLWggYnV0dG9uLnNjLWlvbi1pbnB1dC1tZCwgLmhhcy1mb2N1cy5zYy1pb24taW5wdXQtbWQtaCBpbnB1dC5zYy1pb24taW5wdXQtbWR7cG9pbnRlci1ldmVudHM6YXV0b30uc2MtaW9uLWlucHV0LW1kLWh7LS1wYWRkaW5nLXRvcDoxMHB4Oy0tcGFkZGluZy1lbmQ6MDstLXBhZGRpbmctYm90dG9tOjEwcHg7LS1wYWRkaW5nLXN0YXJ0OjhweDtmb250LXNpemU6aW5oZXJpdH0uaXRlbS1sYWJlbC1mbG9hdGluZy5zYy1pb24taW5wdXQtbWQtaCwgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNjLWlvbi1pbnB1dC1tZC1oLCAuaXRlbS1sYWJlbC1zdGFja2VkLnNjLWlvbi1pbnB1dC1tZC1oLCAuaXRlbS1sYWJlbC1zdGFja2VkIC5zYy1pb24taW5wdXQtbWQtaHstLXBhZGRpbmctdG9wOjhweDstLXBhZGRpbmctYm90dG9tOjhweDstLXBhZGRpbmctc3RhcnQ6MH0uaW5wdXQtY2xlYXItaWNvbi5zYy1pb24taW5wdXQtbWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LDxzdmclMjB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyUyMHZpZXdCb3g9XFwnMCUyMDAlMjA1MTIlMjA1MTJcXCc+PHBvbHlnb24lMjBmaWxsPVxcJ3ZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwlMjAlMjM2NjY2NjYpXFwnJTIwcG9pbnRzPVxcJzQwNSwxMzYuNzk4JTIwMzc1LjIwMiwxMDclMjAyNTYsMjI2LjIwMiUyMDEzNi43OTgsMTA3JTIwMTA3LDEzNi43OTglMjAyMjYuMjAyLDI1NiUyMDEwNywzNzUuMjAyJTIwMTM2Ljc5OCw0MDUlMjAyNTYsMjg1Ljc5OCUyMDM3NS4yMDIsNDA1JTIwNDA1LDM3NS4yMDIlMjAyODUuNzk4LDI1NlxcJy8+PC9zdmc+XFxcIik7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLXNpemU6MjJweH1cIjsgfVxufTtcbmxldCBpbnB1dElkcyA9IDA7XG5cbmV4cG9ydCB7IElucHV0IGFzIGlvbl9pbnB1dCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==