(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js ***!
  \*******************************************************************/
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
    static get style() { return ".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h button.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h input.sc-ion-input-ios{pointer-events:auto}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-input-ios-h, .item-label-floating .sc-ion-input-ios-h, .item-label-stacked.sc-ion-input-ios-h, .item-label-stacked .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><path%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20d=\'M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z\'/></svg>\");width:30px;height:30px;background-size:18px}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pbnB1dC1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ2lEO0FBQ2pCOztBQUU5RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFXO0FBQ25DLHlCQUF5QiwyREFBVztBQUNwQyx1QkFBdUIsMkRBQVc7QUFDbEMsd0JBQXdCLDJEQUFXO0FBQ25DLCtCQUErQiwyREFBVztBQUMxQyxpQ0FB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QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjU3XFxjaHVua3NcXDU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZUV2ZW50LCBmIGFzIGZpbmRJdGVtTGFiZWwgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcblxuY29uc3QgSW5wdXQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlucHV0SWQgPSBgaW9uLWlucHV0LSR7aW5wdXRJZHMrK31gO1xuICAgICAgICB0aGlzLmRpZEJsdXJBZnRlckVkaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgYW5kIGhvdyB0aGUgdGV4dCB2YWx1ZSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBjYXBpdGFsaXplZCBhcyBpdCBpcyBlbnRlcmVkL2VkaXRlZCBieSB0aGUgdXNlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2NhcGl0YWxpemUgPSAnb2ZmJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjYW4gYmUgYXV0b21hdGljYWxseSBjb21wbGV0ZWQgYnkgdGhlIGJyb3dzZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciBhdXRvIGNvcnJlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQgd2hlbiB0aGUgdXNlciBpcyBlbnRlcmluZy9lZGl0aW5nIHRoZSB0ZXh0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvY29ycmVjdCA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBCb29sZWFuIGF0dHJpYnV0ZSBsZXRzIHlvdSBzcGVjaWZ5IHRoYXQgYSBmb3JtIGNvbnRyb2wgc2hvdWxkIGhhdmUgaW5wdXQgZm9jdXMgd2hlbiB0aGUgcGFnZSBsb2Fkcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgY2xlYXIgaWNvbiB3aWxsIGFwcGVhciBpbiB0aGUgaW5wdXQgd2hlbiB0aGVyZSBpcyBhIHZhbHVlLiBDbGlja2luZyBpdCBjbGVhcnMgdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGVhcklucHV0ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gdHJpZ2dlciB0aGUgYGlvbkNoYW5nZWAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlYm91bmNlID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBtb2RpZnkgdGhlIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBtdXN0IGZpbGwgaW4gYSB2YWx1ZSBiZWZvcmUgc3VibWl0dGluZyBhIGZvcm0uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBpdHMgc3BlbGxpbmcgYW5kIGdyYW1tYXIgY2hlY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3BlbGxjaGVjayA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5LiBUaGUgZGVmYXVsdCB0eXBlIGlzIHRleHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uSW5wdXQgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pb25JbnB1dC5lbWl0KGV2KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0NoYW5nZWQoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbktleWRvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDbGVhck9uRWRpdCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gRGlkIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2UgYWZ0ZXIgaXQgd2FzIGJsdXJyZWQgYW5kIGVkaXRlZD9cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWRCbHVyQWZ0ZXJFZGl0ICYmIHRoaXMuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhclRleHRJbnB1dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgZmxhZ1xuICAgICAgICAgICAgICAgIHRoaXMuZGlkQmx1ckFmdGVyRWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFyVGV4dElucHV0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhcklucHV0ICYmICF0aGlzLnJlYWRvbmx5ICYmICF0aGlzLmRpc2FibGVkICYmIGV2KSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyBpcyBuZWVkZWQgZm9yIGNsZWFyT25FZGl0XG4gICAgICAgICAgICAgKiBPdGhlcndpc2UgdGhlIHZhbHVlIHdpbGwgbm90IGJlIGNsZWFyZWRcbiAgICAgICAgICAgICAqIGlmIHVzZXIgaXMgaW5zaWRlIHRoZSBpbnB1dFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25JbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uSW5wdXREaWRMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbnB1dERpZExvYWRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uSW5wdXREaWRVbmxvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbklucHV0RGlkVW5sb2FkXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgZGVib3VuY2VDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGRlYm91bmNlRXZlbnQodGhpcy5pb25DaGFuZ2UsIHRoaXMuZGVib3VuY2UpO1xuICAgIH1cbiAgICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuICAgICAqL1xuICAgIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZUNoYW5nZWQoKTtcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW9uSW5wdXREaWRMb2FkJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDogdGhpcy5lbFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW9uSW5wdXREaWRVbmxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmVsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBmb2N1cyBvbiB0aGUgc3BlY2lmaWVkIGBpb24taW5wdXRgLiBVc2UgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiB0aGUgZ2xvYmFsXG4gICAgICogYGlucHV0LmZvY3VzKClgLlxuICAgICAqL1xuICAgIGFzeW5jIHNldEZvY3VzKCkge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVJbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hdGl2ZSBgPGlucHV0PmAgZWxlbWVudCB1c2VkIHVuZGVyIHRoZSBob29kLlxuICAgICAqL1xuICAgIGdldElucHV0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm5hdGl2ZUlucHV0KTtcbiAgICB9XG4gICAgc2hvdWxkQ2xlYXJPbkVkaXQoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY2xlYXJPbkVkaXQgfSA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoY2xlYXJPbkVkaXQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgID8gdHlwZSA9PT0gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgOiBjbGVhck9uRWRpdDtcbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlIHx8ICcnO1xuICAgIH1cbiAgICBlbWl0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ2lucHV0JzogdHJ1ZSxcbiAgICAgICAgICAgICdoYXMtcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyICE9IG51bGwsXG4gICAgICAgICAgICAnaGFzLXZhbHVlJzogdGhpcy5oYXNWYWx1ZSgpLFxuICAgICAgICAgICAgJ2hhcy1mb2N1cyc6IHRoaXMuaGFzRm9jdXMsXG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9jdXNDaGFuZ2VkKCkge1xuICAgICAgICAvLyBJZiBjbGVhck9uRWRpdCBpcyBlbmFibGVkIGFuZCB0aGUgaW5wdXQgYmx1cnJlZCBidXQgaGFzIGEgdmFsdWUsIHNldCBhIGZsYWdcbiAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzICYmIHRoaXMuc2hvdWxkQ2xlYXJPbkVkaXQoKSAmJiB0aGlzLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlkQmx1ckFmdGVyRWRpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFzVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGxhYmVsSWQgPSB0aGlzLmlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZmluZEl0ZW1MYWJlbCh0aGlzLmVsKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCB7IFttb2RlXTogdHJ1ZSwgJ2hhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSwgJ2hhcy1mb2N1cyc6IHRoaXMuaGFzRm9jdXMgfSkgfSwgaChcImlucHV0XCIsIHsgY2xhc3M6IFwibmF0aXZlLWlucHV0XCIsIHJlZjogaW5wdXQgPT4gdGhpcy5uYXRpdmVJbnB1dCA9IGlucHV0LCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgYWNjZXB0OiB0aGlzLmFjY2VwdCwgYXV0b0NhcGl0YWxpemU6IHRoaXMuYXV0b2NhcGl0YWxpemUsIGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9Db3JyZWN0OiB0aGlzLmF1dG9jb3JyZWN0LCBhdXRvRm9jdXM6IHRoaXMuYXV0b2ZvY3VzLCBpbnB1dE1vZGU6IHRoaXMuaW5wdXRtb2RlLCBtaW46IHRoaXMubWluLCBtYXg6IHRoaXMubWF4LCBtaW5MZW5ndGg6IHRoaXMubWlubGVuZ3RoLCBtYXhMZW5ndGg6IHRoaXMubWF4bGVuZ3RoLCBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZSwgbmFtZTogdGhpcy5uYW1lLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8ICcnLCByZWFkT25seTogdGhpcy5yZWFkb25seSwgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsIHNwZWxsQ2hlY2s6IHRoaXMuc3BlbGxjaGVjaywgc3RlcDogdGhpcy5zdGVwLCBzaXplOiB0aGlzLnNpemUsIHR5cGU6IHRoaXMudHlwZSwgdmFsdWU6IHZhbHVlLCBvbklucHV0OiB0aGlzLm9uSW5wdXQsIG9uQmx1cjogdGhpcy5vbkJsdXIsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgb25LZXlEb3duOiB0aGlzLm9uS2V5ZG93biB9KSwgKHRoaXMuY2xlYXJJbnB1dCAmJiAhdGhpcy5yZWFkb25seSAmJiAhdGhpcy5kaXNhYmxlZCkgJiYgaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzOiBcImlucHV0LWNsZWFyLWljb25cIiwgdGFiaW5kZXg6IFwiLTFcIiwgb25Ub3VjaFN0YXJ0OiB0aGlzLmNsZWFyVGV4dElucHV0LCBvbk1vdXNlRG93bjogdGhpcy5jbGVhclRleHRJbnB1dCB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJkZWJvdW5jZVwiOiBbXCJkZWJvdW5jZUNoYW5nZWRcIl0sXG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLWlucHV0LWlvcy1oey0tcGxhY2Vob2xkZXItY29sb3I6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OmluaXRpYWw7LS1wbGFjZWhvbGRlci1vcGFjaXR5Oi41Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLWJvdHRvbTowOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOmluaXRpYWw7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO3BhZGRpbmc6MCFpbXBvcnRhbnQ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO3otaW5kZXg6Mn1pb24taXRlbS5zYy1pb24taW5wdXQtaW9zLWg6bm90KC5pdGVtLWxhYmVsKSwgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLWlucHV0LWlvcy1oey0tcGFkZGluZy1zdGFydDowfS5pb24tY29sb3Iuc2MtaW9uLWlucHV0LWlvcy1oe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3N7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmlubGluZS1ibG9jazstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvczo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvczo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvczotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvczo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6LXdlYmtpdC1hdXRvZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvczppbnZhbGlkey13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9Lm5hdGl2ZS1pbnB1dFtkaXNhYmxlZF0uc2MtaW9uLWlucHV0LWlvc3tvcGFjaXR5Oi40fS5jbG9uZWQtaW5wdXQuc2MtaW9uLWlucHV0LWlvc3tsZWZ0OjA7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZX1bZGlyPXJ0bF0uc2MtaW9uLWlucHV0LWlvcy1oIC5jbG9uZWQtaW5wdXQuc2MtaW9uLWlucHV0LWlvcywgW2Rpcj1ydGxdIC5zYy1pb24taW5wdXQtaW9zLWggLmNsb25lZC1pbnB1dC5zYy1pb24taW5wdXQtaW9zLCBbZGlyPXJ0bF0uc2MtaW9uLWlucHV0LWlvcyAuY2xvbmVkLWlucHV0LnNjLWlvbi1pbnB1dC1pb3N7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfS5pbnB1dC1jbGVhci1pY29uLnNjLWlvbi1pbnB1dC1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uaGFzLWZvY3VzLmhhcy12YWx1ZS5zYy1pb24taW5wdXQtaW9zLWggLmlucHV0LWNsZWFyLWljb24uc2MtaW9uLWlucHV0LWlvc3t2aXNpYmlsaXR5OnZpc2libGV9Lmhhcy1mb2N1cy5zYy1pb24taW5wdXQtaW9zLWh7cG9pbnRlci1ldmVudHM6bm9uZX0uaGFzLWZvY3VzLnNjLWlvbi1pbnB1dC1pb3MtaCBhLnNjLWlvbi1pbnB1dC1pb3MsIC5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LWlvcy1oIGJ1dHRvbi5zYy1pb24taW5wdXQtaW9zLCAuaGFzLWZvY3VzLnNjLWlvbi1pbnB1dC1pb3MtaCBpbnB1dC5zYy1pb24taW5wdXQtaW9ze3BvaW50ZXItZXZlbnRzOmF1dG99LnNjLWlvbi1pbnB1dC1pb3MtaHstLXBhZGRpbmctdG9wOjEwcHg7LS1wYWRkaW5nLWVuZDo4cHg7LS1wYWRkaW5nLWJvdHRvbToxMHB4Oy0tcGFkZGluZy1zdGFydDowO2ZvbnQtc2l6ZTppbmhlcml0fS5pdGVtLWxhYmVsLWZsb2F0aW5nLnNjLWlvbi1pbnB1dC1pb3MtaCwgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNjLWlvbi1pbnB1dC1pb3MtaCwgLml0ZW0tbGFiZWwtc3RhY2tlZC5zYy1pb24taW5wdXQtaW9zLWgsIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNjLWlvbi1pbnB1dC1pb3MtaHstLXBhZGRpbmctdG9wOjhweDstLXBhZGRpbmctYm90dG9tOjhweDstLXBhZGRpbmctc3RhcnQ6MHB4fS5pbnB1dC1jbGVhci1pY29uLnNjLWlvbi1pbnB1dC1pb3N7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LDxzdmclMjB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyUyMHZpZXdCb3g9XFwnMCUyMDAlMjA1MTIlMjA1MTJcXCc+PHBhdGglMjBmaWxsPVxcJ3ZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwlMjAlMjM2NjY2NjYpXFwnJTIwZD1cXCdNNDAzLjEsMTA4LjljLTgxLjItODEuMi0yMTIuOS04MS4yLTI5NC4yLDBzLTgxLjIsMjEyLjksMCwyOTQuMmM4MS4yLDgxLjIsMjEyLjksODEuMiwyOTQuMiwwUzQ4NC4zLDE5MC4xLDQwMy4xLDEwOC45eiUyME0zNTIsMzQwLjJMMzQwLjIsMzUybC04NC40LTg0LjJsLTg0LDgzLjhMMTYwLDMzOS44bDg0LTgzLjhsLTg0LTgzLjhsMTEuOC0xMS44bDg0LDgzLjhsODQuNC04NC4ybDExLjgsMTEuOEwyNjcuNiwyNTZMMzUyLDM0MC4yelxcJy8+PC9zdmc+XFxcIik7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLXNpemU6MThweH1cIjsgfVxufTtcbmxldCBpbnB1dElkcyA9IDA7XG5cbmV4cG9ydCB7IElucHV0IGFzIGlvbl9pbnB1dCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==