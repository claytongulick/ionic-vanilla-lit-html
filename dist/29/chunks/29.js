(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_radio, ion_radio_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio_group", function() { return RadioGroup; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watch-options-2af96011.js */ "../node_modules/@ionic/core/dist/esm/watch-options-2af96011.js");






const Radio = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-rb-${radioButtonIds++}`;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot interact with the radio.
         */
        this.disabled = false;
        /**
         * If `true`, the radio is selected.
         */
        this.checked = false;
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.onClick = () => {
            if (this.checked) {
                this.ionDeselect.emit();
            }
            else {
                this.checked = true;
            }
        };
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        this.ionSelect = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSelect", 7);
        this.ionDeselect = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDeselect", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
    }
    colorChanged() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        if (isChecked) {
            this.ionSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    }
    disabledChanged() {
        this.emitStyle();
    }
    componentWillLoad() {
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    }
    render() {
        const { inputId, disabled, checked, color, el } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const labelId = inputId + '-lbl';
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "radio", "aria-disabled": disabled ? 'true' : null, "aria-checked": `${checked}`, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), { [mode]: true, 'in-item': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), 'interactive': true, 'radio-checked': checked, 'radio-disabled': disabled }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "radio-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "radio-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "color": ["colorChanged"],
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"; }
};
let radioButtonIds = 0;

const RadioGroup = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-rg-${radioGroupIds++}`;
        this.labelId = `${this.inputId}-lbl`;
        /**
         * If `true`, the radios can be deselected.
         */
        this.allowEmptySelection = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        this.onSelect = (ev) => {
            const selectedRadio = ev.target;
            if (selectedRadio) {
                this.value = selectedRadio.value;
            }
        };
        this.onDeselect = (ev) => {
            const selectedRadio = ev.target;
            if (selectedRadio) {
                selectedRadio.checked = false;
                this.value = undefined;
            }
        };
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
    }
    valueChanged(value) {
        this.updateRadios();
        this.ionChange.emit({ value });
    }
    async connectedCallback() {
        // Get the list header if it exists and set the id
        // this is used to set aria-labelledby
        const el = this.el;
        const header = el.querySelector('ion-list-header') || el.querySelector('ion-item-divider');
        if (header) {
            const label = header.querySelector('ion-label');
            if (label) {
                this.labelId = label.id = this.name + '-lbl';
            }
        }
        if (this.value === undefined) {
            const radio = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_4__["f"])(el, 'ion-radio');
            if (radio !== undefined) {
                await radio.componentOnReady();
                if (this.value === undefined) {
                    this.value = radio.value;
                }
            }
        }
        this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_4__["w"])(el, 'ion-radio', newOption => {
            if (newOption !== undefined) {
                newOption.componentOnReady().then(() => {
                    this.value = newOption.value;
                });
            }
            else {
                this.updateRadios();
            }
        });
        this.updateRadios();
    }
    disconnectedCallback() {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    }
    async updateRadios() {
        /**
         * Make sure we get all radios first
         * so values are up to date prior
         * to caching the radio group value
         */
        const radios = await this.getRadios();
        const { value } = this;
        let hasChecked = false;
        // Walk the DOM in reverse order, since the last selected one wins!
        for (const radio of radios) {
            if (!hasChecked && radio.value === value) {
                // correct value for this radio
                // but this radio isn't checked yet
                // and we haven't found a checked yet
                hasChecked = true;
                radio.checked = true;
            }
            else {
                // this radio doesn't have the correct value
                // or the radio group has been already checked
                radio.checked = false;
            }
        }
        // Reset value if
        if (!hasChecked) {
            this.value = undefined;
        }
    }
    getRadios() {
        return Promise.all(Array
            .from(this.el.querySelectorAll('ion-radio'))
            .map(r => r.componentOnReady()));
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "radiogroup", "aria-labelledby": this.labelId, onIonSelect: this.onSelect, onIonDeselect: this.allowEmptySelection ? this.onDeselect : undefined, class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
let radioGroupIds = 0;




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




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \**********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yYWRpb18yLWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vd2F0Y2gtb3B0aW9ucy0yYWY5NjAxMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMvRjtBQUM2QjtBQUNxQjtBQUNXOztBQUUzRjtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFXO0FBQ25DLHlCQUF5QiwyREFBVztBQUNwQywyQkFBMkIsMkRBQVc7QUFDdEMsd0JBQXdCLDJEQUFXO0FBQ25DLHVCQUF1QiwyREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsd0NBQXdDO0FBQ3ZELHFCQUFxQiwyREFBVTtBQUMvQjtBQUNBLHNCQUFzQiw4REFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHFHQUFxRyxRQUFRLG9F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QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGOzs7Ozs7Ozs7Ozs7O0FDekNyRjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3RCIsImZpbGUiOiIyOVxcY2h1bmtzXFwyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGYgYXMgZmluZEl0ZW1MYWJlbCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kQ2hlY2tlZE9wdGlvbiwgdyBhcyB3YXRjaEZvck9wdGlvbnMgfSBmcm9tICcuL3dhdGNoLW9wdGlvbnMtMmFmOTYwMTEuanMnO1xuXG5jb25zdCBSYWRpbyA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IGBpb24tcmItJHtyYWRpb0J1dHRvbklkcysrfWA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHJhZGlvLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcmFkaW8gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW9uRGVzZWxlY3QuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TZWxlY3RcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRGVzZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkRlc2VsZWN0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIH1cbiAgICBjb2xvckNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIGNoZWNrZWRDaGFuZ2VkKGlzQ2hlY2tlZCkge1xuICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlvblNlbGVjdC5lbWl0KHtcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbnB1dElkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIGVtaXRTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdyYWRpby1jaGVja2VkJzogdGhpcy5jaGVja2VkLFxuICAgICAgICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpbnB1dElkLCBkaXNhYmxlZCwgY2hlY2tlZCwgY29sb3IsIGVsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IGlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZmluZEl0ZW1MYWJlbChlbCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgcm9sZTogXCJyYWRpb1wiLCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtY2hlY2tlZFwiOiBgJHtjaGVja2VkfWAsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvcikpLCB7IFttb2RlXTogdHJ1ZSwgJ2luLWl0ZW0nOiBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCksICdpbnRlcmFjdGl2ZSc6IHRydWUsICdyYWRpby1jaGVja2VkJzogY2hlY2tlZCwgJ3JhZGlvLWRpc2FibGVkJzogZGlzYWJsZWQgfSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhZGlvLWljb25cIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFkaW8taW5uZXJcIiB9KSksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiBkaXNhYmxlZCB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJjb2xvclwiOiBbXCJjb2xvckNoYW5nZWRcIl0sXG4gICAgICAgIFwiY2hlY2tlZFwiOiBbXCJjaGVja2VkQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjJ9Omhvc3QoLnJhZGlvLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfS5yYWRpby1pY29ue2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjb250YWluOmxheW91dCBzaXplIHN0eWxlfS5yYWRpby1pY29uLGJ1dHRvbnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfWJ1dHRvbntsZWZ0OjA7dG9wOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO291dGxpbmU6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgYnV0dG9uLFtkaXI9cnRsXSBidXR0b257bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0ucmFkaW8taWNvbiwucmFkaW8taW5uZXJ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0ey0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTt3aWR0aDoxNXB4O2hlaWdodDoyNHB4fTpob3N0KC5pb24tY29sb3IucmFkaW8tY2hlY2tlZCkgLnJhZGlvLWlubmVye2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lml0ZW0tcmFkaW8uaXRlbS1pb3MgaW9uLWxhYmVse21hcmdpbi1sZWZ0OjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5pdGVtLXJhZGlvLml0ZW0taW9zIGlvbi1sYWJlbHttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MH19LnJhZGlvLWlubmVye3dpZHRoOjMzJTtoZWlnaHQ6NTAlfTpob3N0KC5yYWRpby1jaGVja2VkKSAucmFkaW8taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItd2lkdGg6MnB4O2JvcmRlci10b3Atd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY29sb3ItY2hlY2tlZCl9Omhvc3QoLnJhZGlvLWRpc2FibGVkKXtvcGFjaXR5Oi4zfTpob3N0KC5pb24tZm9jdXNlZCkgLnJhZGlvLWljb246YWZ0ZXJ7Ym9yZGVyLXJhZGl1czo1MCU7bGVmdDotOXB4O3RvcDotOHB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzZweDtoZWlnaHQ6MzZweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsIzRjOGRmZik7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5Oi4yfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5pb24tZm9jdXNlZCAucmFkaW8taWNvbjphZnRlciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguaW9uLWZvY3VzZWQpIC5yYWRpby1pY29uOmFmdGVye2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6LTlweH06aG9zdCguaW4taXRlbSl7bWFyZ2luLWxlZnQ6OHB4O21hcmdpbi1yaWdodDoxMXB4O21hcmdpbi10b3A6OHB4O21hcmdpbi1ib3R0b206OHB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246c3RhdGljfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguaW4taXRlbSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjhweDttYXJnaW4taW5saW5lLXN0YXJ0OjhweDstd2Via2l0LW1hcmdpbi1lbmQ6MTFweDttYXJnaW4taW5saW5lLWVuZDoxMXB4fX06aG9zdCguaW4taXRlbVtzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6M3B4O21hcmdpbi1yaWdodDoyMXB4O21hcmdpbi10b3A6OHB4O21hcmdpbi1ib3R0b206OHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguaW4taXRlbVtzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjNweDttYXJnaW4taW5saW5lLXN0YXJ0OjNweDstd2Via2l0LW1hcmdpbi1lbmQ6MjFweDttYXJnaW4taW5saW5lLWVuZDoyMXB4fX1cIjsgfVxufTtcbmxldCByYWRpb0J1dHRvbklkcyA9IDA7XG5cbmNvbnN0IFJhZGlvR3JvdXAgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlucHV0SWQgPSBgaW9uLXJnLSR7cmFkaW9Hcm91cElkcysrfWA7XG4gICAgICAgIHRoaXMubGFiZWxJZCA9IGAke3RoaXMuaW5wdXRJZH0tbGJsYDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHJhZGlvcyBjYW4gYmUgZGVzZWxlY3RlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWxsb3dFbXB0eVNlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIHRoaXMub25TZWxlY3QgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUmFkaW8gPSBldi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRSYWRpbykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZFJhZGlvLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRGVzZWxlY3QgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUmFkaW8gPSBldi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRSYWRpbykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgfVxuICAgIHZhbHVlQ2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVJhZGlvcygpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHsgdmFsdWUgfSk7XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAvLyBHZXQgdGhlIGxpc3QgaGVhZGVyIGlmIGl0IGV4aXN0cyBhbmQgc2V0IHRoZSBpZFxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gc2V0IGFyaWEtbGFiZWxsZWRieVxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1saXN0LWhlYWRlcicpIHx8IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLWRpdmlkZXInKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsSWQgPSBsYWJlbC5pZCA9IHRoaXMubmFtZSArICctbGJsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCByYWRpbyA9IGZpbmRDaGVja2VkT3B0aW9uKGVsLCAnaW9uLXJhZGlvJyk7XG4gICAgICAgICAgICBpZiAocmFkaW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHJhZGlvLmNvbXBvbmVudE9uUmVhZHkoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSByYWRpby52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdXRhdGlvbk8gPSB3YXRjaEZvck9wdGlvbnMoZWwsICdpb24tcmFkaW8nLCBuZXdPcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG5ld09wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uLmNvbXBvbmVudE9uUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld09wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmFkaW9zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhZGlvcygpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25PKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uTy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uTyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyB1cGRhdGVSYWRpb3MoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHN1cmUgd2UgZ2V0IGFsbCByYWRpb3MgZmlyc3RcbiAgICAgICAgICogc28gdmFsdWVzIGFyZSB1cCB0byBkYXRlIHByaW9yXG4gICAgICAgICAqIHRvIGNhY2hpbmcgdGhlIHJhZGlvIGdyb3VwIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCByYWRpb3MgPSBhd2FpdCB0aGlzLmdldFJhZGlvcygpO1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzO1xuICAgICAgICBsZXQgaGFzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAvLyBXYWxrIHRoZSBET00gaW4gcmV2ZXJzZSBvcmRlciwgc2luY2UgdGhlIGxhc3Qgc2VsZWN0ZWQgb25lIHdpbnMhXG4gICAgICAgIGZvciAoY29uc3QgcmFkaW8gb2YgcmFkaW9zKSB7XG4gICAgICAgICAgICBpZiAoIWhhc0NoZWNrZWQgJiYgcmFkaW8udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCB2YWx1ZSBmb3IgdGhpcyByYWRpb1xuICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGlzIHJhZGlvIGlzbid0IGNoZWNrZWQgeWV0XG4gICAgICAgICAgICAgICAgLy8gYW5kIHdlIGhhdmVuJ3QgZm91bmQgYSBjaGVja2VkIHlldFxuICAgICAgICAgICAgICAgIGhhc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyByYWRpbyBkb2Vzbid0IGhhdmUgdGhlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgICAgICAgICAvLyBvciB0aGUgcmFkaW8gZ3JvdXAgaGFzIGJlZW4gYWxyZWFkeSBjaGVja2VkXG4gICAgICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHZhbHVlIGlmXG4gICAgICAgIGlmICghaGFzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSYWRpb3MoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChBcnJheVxuICAgICAgICAgICAgLmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcmFkaW8nKSlcbiAgICAgICAgICAgIC5tYXAociA9PiByLmNvbXBvbmVudE9uUmVhZHkoKSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwicmFkaW9ncm91cFwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiB0aGlzLmxhYmVsSWQsIG9uSW9uU2VsZWN0OiB0aGlzLm9uU2VsZWN0LCBvbklvbkRlc2VsZWN0OiB0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24gPyB0aGlzLm9uRGVzZWxlY3QgOiB1bmRlZmluZWQsIGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0pKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgfTsgfVxufTtcbmxldCByYWRpb0dyb3VwSWRzID0gMDtcblxuZXhwb3J0IHsgUmFkaW8gYXMgaW9uX3JhZGlvLCBSYWRpb0dyb3VwIGFzIGlvbl9yYWRpb19ncm91cCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIiwiY29uc3Qgd2F0Y2hGb3JPcHRpb25zID0gKGNvbnRhaW5lckVsLCB0YWdOYW1lLCBvbkNoYW5nZSkgPT4ge1xyXG4gICAgY29uc3QgbXV0YXRpb24gPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbkxpc3QgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKGdldFNlbGVjdGVkT3B0aW9uKG11dGF0aW9uTGlzdCwgdGFnTmFtZSkpO1xyXG4gICAgfSk7XHJcbiAgICBtdXRhdGlvbi5vYnNlcnZlKGNvbnRhaW5lckVsLCB7XHJcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG11dGF0aW9uO1xyXG59O1xyXG5jb25zdCBnZXRTZWxlY3RlZE9wdGlvbiA9IChtdXRhdGlvbkxpc3QsIHRhZ05hbWUpID0+IHtcclxuICAgIGxldCBuZXdPcHRpb247XHJcbiAgICBtdXRhdGlvbkxpc3QuZm9yRWFjaChtdXQgPT4ge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0LmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3T3B0aW9uID0gZmluZENoZWNrZWRPcHRpb24obXV0LmFkZGVkTm9kZXNbaV0sIHRhZ05hbWUpIHx8IG5ld09wdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXdPcHRpb247XHJcbn07XHJcbmNvbnN0IGZpbmRDaGVja2VkT3B0aW9uID0gKGVsLCB0YWdOYW1lKSA9PiB7XHJcbiAgICBpZiAoZWwubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IChlbC50YWdOYW1lID09PSB0YWdOYW1lLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgPyBbZWxdXHJcbiAgICAgICAgOiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwodGFnTmFtZSkpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuZmluZCgobykgPT4gby5jaGVja2VkID09PSB0cnVlKTtcclxufTtcblxuZXhwb3J0IHsgZmluZENoZWNrZWRPcHRpb24gYXMgZiwgd2F0Y2hGb3JPcHRpb25zIGFzIHcgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=