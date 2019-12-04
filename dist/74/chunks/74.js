(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_textarea", function() { return Textarea; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const Textarea = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-input-${textareaIds++}`;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        /**
         * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        this.autocapitalize = 'none';
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        this.clearOnEdit = false;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * If `true`, the user cannot interact with the textarea.
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
         * If `true`, the element height will increase based on the value.
         */
        this.autoGrow = false;
        /**
         * The value of the textarea.
         */
        this.value = '';
        this.onInput = (ev) => {
            if (this.nativeInput) {
                this.value = this.nativeInput.value;
            }
            this.emitStyle();
            this.ionInput.emit(ev);
        };
        this.onFocus = () => {
            this.hasFocus = true;
            this.focusChange();
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.focusChange();
            this.ionBlur.emit();
        };
        this.onKeyDown = () => {
            this.checkClearOnEdit();
        };
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionInput = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInput", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
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
        const nativeInput = this.nativeInput;
        const value = this.getValue();
        if (nativeInput && nativeInput.value !== value) {
            nativeInput.value = value;
        }
        this.runAutoGrow();
        this.emitStyle();
        this.ionChange.emit({ value });
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
    componentDidLoad() {
        this.runAutoGrow();
    }
    // TODO: performance hit, this cause layout thrashing
    runAutoGrow() {
        const nativeInput = this.nativeInput;
        if (nativeInput && this.autoGrow) {
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
                nativeInput.style.height = 'inherit';
                nativeInput.style.height = nativeInput.scrollHeight + 'px';
            });
        }
    }
    /**
     * Sets focus on the specified `ion-textarea`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    /**
     * Returns the native `<textarea>` element used under the hood.
     */
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'textarea': true,
            'input': true,
            'interactive-disabled': this.disabled,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus
        });
    }
    /**
     * Check if we need to clear the text input if clearOnEdit is enabled
     */
    checkClearOnEdit() {
        if (!this.clearOnEdit) {
            return;
        }
        // Did the input value change after it was blurred and edited?
        if (this.didBlurAfterEdit && this.hasValue()) {
            // Clear the input
            this.value = '';
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
    }
    focusChange() {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
        this.emitStyle();
    }
    hasValue() {
        return this.getValue() !== '';
    }
    getValue() {
        return this.value || '';
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const value = this.getValue();
        const labelId = this.inputId + '-lbl';
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el);
        if (label) {
            label.id = labelId;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", { class: "native-textarea", ref: el => this.nativeInput = el, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown }, value)));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "debounce": ["debounceChanged"],
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
    }; }
    static get style() { return ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"; }
};
let textareaIds = 0;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10ZXh0YXJlYS1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRJO0FBQzlHO0FBQ2lEO0FBQ2pCOztBQUU5RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQyx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0EseUJBQXlCLDhEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNi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bnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBmIGFzIHJlYWRUYXNrLCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZUV2ZW50LCBmIGFzIGZpbmRJdGVtTGFiZWwgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcblxuY29uc3QgVGV4dGFyZWEgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlucHV0SWQgPSBgaW9uLWlucHV0LSR7dGV4dGFyZWFJZHMrK31gO1xuICAgICAgICB0aGlzLmRpZEJsdXJBZnRlckVkaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgYW5kIGhvdyB0aGUgdGV4dCB2YWx1ZSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBjYXBpdGFsaXplZCBhcyBpdCBpcyBlbnRlcmVkL2VkaXRlZCBieSB0aGUgdXNlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2NhcGl0YWxpemUgPSAnbm9uZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIEJvb2xlYW4gYXR0cmlidXRlIGxldHMgeW91IHNwZWNpZnkgdGhhdCBhIGZvcm0gY29udHJvbCBzaG91bGQgaGF2ZSBpbnB1dCBmb2N1cyB3aGVuIHRoZSBwYWdlIGxvYWRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHZhbHVlIHdpbGwgYmUgY2xlYXJlZCBhZnRlciBmb2N1cyB1cG9uIGVkaXQuIERlZmF1bHRzIHRvIGB0cnVlYCB3aGVuIGB0eXBlYCBpcyBgXCJwYXNzd29yZFwiYCwgYGZhbHNlYCBmb3IgYWxsIG90aGVyIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGVhck9uRWRpdCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIHRyaWdnZXIgdGhlIGBpb25DaGFuZ2VgIGV2ZW50IGFmdGVyIGVhY2gga2V5c3Ryb2tlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZWJvdW5jZSA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSB0ZXh0YXJlYS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgbW9kaWZ5IHRoZSB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgbXVzdCBmaWxsIGluIGEgdmFsdWUgYmVmb3JlIHN1Ym1pdHRpbmcgYSBmb3JtLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZWxlbWVudCB3aWxsIGhhdmUgaXRzIHNwZWxsaW5nIGFuZCBncmFtbWFyIGNoZWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGVsZW1lbnQgaGVpZ2h0IHdpbGwgaW5jcmVhc2UgYmFzZWQgb24gdGhlIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvR3JvdyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIG9mIHRoZSB0ZXh0YXJlYS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vbklucHV0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5hdGl2ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIHRoaXMuaW9uSW5wdXQuZW1pdChldik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0NoYW5nZSgpO1xuICAgICAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0NoYW5nZSgpO1xuICAgICAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbktleURvd24gPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ2xlYXJPbkVkaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25JbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgIH1cbiAgICBkZWJvdW5jZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gZGVib3VuY2VFdmVudCh0aGlzLmlvbkNoYW5nZSwgdGhpcy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgdmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBjb25zdCBuYXRpdmVJbnB1dCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICBpZiAobmF0aXZlSW5wdXQgJiYgbmF0aXZlSW5wdXQudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBuYXRpdmVJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucnVuQXV0b0dyb3coKTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZUNoYW5nZWQoKTtcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW9uSW5wdXREaWRMb2FkJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDogdGhpcy5lbFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW9uSW5wdXREaWRVbmxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmVsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ydW5BdXRvR3JvdygpO1xuICAgIH1cbiAgICAvLyBUT0RPOiBwZXJmb3JtYW5jZSBoaXQsIHRoaXMgY2F1c2UgbGF5b3V0IHRocmFzaGluZ1xuICAgIHJ1bkF1dG9Hcm93KCkge1xuICAgICAgICBjb25zdCBuYXRpdmVJbnB1dCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgICAgIGlmIChuYXRpdmVJbnB1dCAmJiB0aGlzLmF1dG9Hcm93KSB7XG4gICAgICAgICAgICByZWFkVGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF0aXZlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gJ2luaGVyaXQnO1xuICAgICAgICAgICAgICAgIG5hdGl2ZUlucHV0LnN0eWxlLmhlaWdodCA9IG5hdGl2ZUlucHV0LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBzcGVjaWZpZWQgYGlvbi10ZXh0YXJlYWAuIFVzZSB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBnbG9iYWxcbiAgICAgKiBgaW5wdXQuZm9jdXMoKWAuXG4gICAgICovXG4gICAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlIGA8dGV4dGFyZWE+YCBlbGVtZW50IHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAgICovXG4gICAgZ2V0SW5wdXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMubmF0aXZlSW5wdXQpO1xuICAgIH1cbiAgICBlbWl0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ3RleHRhcmVhJzogdHJ1ZSxcbiAgICAgICAgICAgICdpbnB1dCc6IHRydWUsXG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgJ2hhcy1wbGFjZWhvbGRlcic6IHRoaXMucGxhY2Vob2xkZXIgIT0gbnVsbCxcbiAgICAgICAgICAgICdoYXMtdmFsdWUnOiB0aGlzLmhhc1ZhbHVlKCksXG4gICAgICAgICAgICAnaGFzLWZvY3VzJzogdGhpcy5oYXNGb2N1c1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBjbGVhciB0aGUgdGV4dCBpbnB1dCBpZiBjbGVhck9uRWRpdCBpcyBlbmFibGVkXG4gICAgICovXG4gICAgY2hlY2tDbGVhck9uRWRpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsZWFyT25FZGl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlkIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2UgYWZ0ZXIgaXQgd2FzIGJsdXJyZWQgYW5kIGVkaXRlZD9cbiAgICAgICAgaWYgKHRoaXMuZGlkQmx1ckFmdGVyRWRpdCAmJiB0aGlzLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBpbnB1dFxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHRoZSBmbGFnXG4gICAgICAgIHRoaXMuZGlkQmx1ckFmdGVyRWRpdCA9IGZhbHNlO1xuICAgIH1cbiAgICBmb2N1c0NoYW5nZSgpIHtcbiAgICAgICAgLy8gSWYgY2xlYXJPbkVkaXQgaXMgZW5hYmxlZCBhbmQgdGhlIGlucHV0IGJsdXJyZWQgYnV0IGhhcyBhIHZhbHVlLCBzZXQgYSBmbGFnXG4gICAgICAgIGlmICh0aGlzLmNsZWFyT25FZGl0ICYmICF0aGlzLmhhc0ZvY3VzICYmIHRoaXMuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgdGhpcy5kaWRCbHVyQWZ0ZXJFZGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKSAhPT0gJyc7XG4gICAgfVxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCAnJztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGxhYmVsSWQgPSB0aGlzLmlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZmluZEl0ZW1MYWJlbCh0aGlzLmVsKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCB7IFttb2RlXTogdHJ1ZSB9KSB9LCBoKFwidGV4dGFyZWFcIiwgeyBjbGFzczogXCJuYXRpdmUtdGV4dGFyZWFcIiwgcmVmOiBlbCA9PiB0aGlzLm5hdGl2ZUlucHV0ID0gZWwsIGF1dG9DYXBpdGFsaXplOiB0aGlzLmF1dG9jYXBpdGFsaXplLCBhdXRvRm9jdXM6IHRoaXMuYXV0b2ZvY3VzLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgbWF4TGVuZ3RoOiB0aGlzLm1heGxlbmd0aCwgbWluTGVuZ3RoOiB0aGlzLm1pbmxlbmd0aCwgbmFtZTogdGhpcy5uYW1lLCBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB8fCAnJywgcmVhZE9ubHk6IHRoaXMucmVhZG9ubHksIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkLCBzcGVsbENoZWNrOiB0aGlzLnNwZWxsY2hlY2ssIGNvbHM6IHRoaXMuY29scywgcm93czogdGhpcy5yb3dzLCB3cmFwOiB0aGlzLndyYXAsIG9uSW5wdXQ6IHRoaXMub25JbnB1dCwgb25CbHVyOiB0aGlzLm9uQmx1ciwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbktleURvd246IHRoaXMub25LZXlEb3duIH0sIHZhbHVlKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJkZWJvdW5jZVwiOiBbXCJkZWJvdW5jZUNoYW5nZWRcIl0sXG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLXRleHRhcmVhLWlvcy1oey0tYmFja2dyb3VuZDppbml0aWFsOy0tY29sb3I6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWNvbG9yOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXN0eWxlOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXdlaWdodDppbml0aWFsOy0tcGxhY2Vob2xkZXItb3BhY2l0eTouNTstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MDstLWJvcmRlci1yYWRpdXM6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3dpZHRoOjEwMCU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt3aGl0ZS1zcGFjZTpwcmUtd3JhcDt6LWluZGV4OjJ9Lmlvbi1jb2xvci5zYy1pb24tdGV4dGFyZWEtaW9zLWh7YmFja2dyb3VuZDppbml0aWFsO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX1pb24taXRlbS5zYy1pb24tdGV4dGFyZWEtaW9zLWgsIGlvbi1pdGVtIC5zYy1pb24tdGV4dGFyZWEtaW9zLWh7LW1zLWZsZXgtaXRlbS1hbGlnbjpiYXNlbGluZTthbGlnbi1zZWxmOmJhc2VsaW5lfWlvbi1pdGVtLnNjLWlvbi10ZXh0YXJlYS1pb3MtaDpub3QoLml0ZW0tbGFiZWwpLCBpb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24tdGV4dGFyZWEtaW9zLWh7LS1wYWRkaW5nLXN0YXJ0OjB9Lm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtaW9ze2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Jlc2l6ZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Lm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0ubmF0aXZlLXRleHRhcmVhLnNjLWlvbi10ZXh0YXJlYS1pb3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLXRleHRhcmVhLnNjLWlvbi10ZXh0YXJlYS1pb3M6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLXRleHRhcmVhLnNjLWlvbi10ZXh0YXJlYS1pb3M6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtaW9zOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLXRleHRhcmVhLnNjLWlvbi10ZXh0YXJlYS1pb3M6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS10ZXh0YXJlYVtkaXNhYmxlZF0uc2MtaW9uLXRleHRhcmVhLWlvc3tvcGFjaXR5Oi40fS5jbG9uZWQtaW5wdXQuc2MtaW9uLXRleHRhcmVhLWlvc3tsZWZ0OjA7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZX1bZGlyPXJ0bF0uc2MtaW9uLXRleHRhcmVhLWlvcy1oIC5jbG9uZWQtaW5wdXQuc2MtaW9uLXRleHRhcmVhLWlvcywgW2Rpcj1ydGxdIC5zYy1pb24tdGV4dGFyZWEtaW9zLWggLmNsb25lZC1pbnB1dC5zYy1pb24tdGV4dGFyZWEtaW9zLCBbZGlyPXJ0bF0uc2MtaW9uLXRleHRhcmVhLWlvcyAuY2xvbmVkLWlucHV0LnNjLWlvbi10ZXh0YXJlYS1pb3N7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfS5zYy1pb24tdGV4dGFyZWEtaW9zLWh7LS1wYWRkaW5nLXRvcDoxMHB4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tcGFkZGluZy1ib3R0b206MTBweDstLXBhZGRpbmctc3RhcnQ6MDtmb250LXNpemU6aW5oZXJpdH0uaXRlbS1sYWJlbC1mbG9hdGluZy5zYy1pb24tdGV4dGFyZWEtaW9zLWgsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zYy1pb24tdGV4dGFyZWEtaW9zLWgsIC5pdGVtLWxhYmVsLXN0YWNrZWQuc2MtaW9uLXRleHRhcmVhLWlvcy1oLCAuaXRlbS1sYWJlbC1zdGFja2VkIC5zYy1pb24tdGV4dGFyZWEtaW9zLWh7LS1wYWRkaW5nLXRvcDo4cHg7LS1wYWRkaW5nLWJvdHRvbTo4cHg7LS1wYWRkaW5nLXN0YXJ0OjBweH1cIjsgfVxufTtcbmxldCB0ZXh0YXJlYUlkcyA9IDA7XG5cbmV4cG9ydCB7IFRleHRhcmVhIGFzIGlvbl90ZXh0YXJlYSB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==