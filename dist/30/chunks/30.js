(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js":
/*!********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js ***!
  \********************************************************************/
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
    static get style() { return ":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400,#999);--color-checked:var(--ion-color-primary,#3880ff);--border-width:2px;--border-style:solid;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:50%;width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yYWRpb18yLW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS93YXRjaC1vcHRpb25zLTJhZjk2MDExLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQzZCO0FBQ3FCO0FBQ1c7O0FBRTNGO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QixpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVc7QUFDbkMseUJBQXlCLDJEQUFXO0FBQ3BDLDJCQUEyQiwyREFBVztBQUN0Qyx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZSx3Q0FBd0M7QUFDdkQscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0Esc0JBQXNCLDhEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcscUdBQXFHLFFBQVEsb0VB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUY7Ozs7Ozs7Ozs7Ozs7QUN6Q3JGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdEIiwiZmlsZSI6IjMwXFxjaHVua3NcXDMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kSXRlbUxhYmVsIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRDaGVja2VkT3B0aW9uLCB3IGFzIHdhdGNoRm9yT3B0aW9ucyB9IGZyb20gJy4vd2F0Y2gtb3B0aW9ucy0yYWY5NjAxMS5qcyc7XG5cbmNvbnN0IFJhZGlvID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gYGlvbi1yYi0ke3JhZGlvQnV0dG9uSWRzKyt9YDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgcmFkaW8uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByYWRpbyBpcyBzZWxlY3RlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25EZXNlbGVjdC5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNlbGVjdFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25EZXNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGVzZWxlY3RcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgfVxuICAgIGNvbG9yQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgY2hlY2tlZENoYW5nZWQoaXNDaGVja2VkKSB7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW9uU2VsZWN0LmVtaXQoe1xuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ3JhZGlvLWNoZWNrZWQnOiB0aGlzLmNoZWNrZWQsXG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlucHV0SWQsIGRpc2FibGVkLCBjaGVja2VkLCBjb2xvciwgZWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBsYWJlbElkID0gaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKGVsKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCByb2xlOiBcInJhZGlvXCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1jaGVja2VkXCI6IGAke2NoZWNrZWR9YCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCAnaW4taXRlbSc6IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKSwgJ2ludGVyYWN0aXZlJzogdHJ1ZSwgJ3JhZGlvLWNoZWNrZWQnOiBjaGVja2VkLCAncmFkaW8tZGlzYWJsZWQnOiBkaXNhYmxlZCB9KSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFkaW8taWNvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYWRpby1pbm5lclwiIH0pKSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgb25CbHVyOiB0aGlzLm9uQmx1ciwgZGlzYWJsZWQ6IGRpc2FibGVkIH0pKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcImNvbG9yXCI6IFtcImNvbG9yQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJjaGVja2VkXCI6IFtcImNoZWNrZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mn06aG9zdCgucmFkaW8tZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9LnJhZGlvLWljb257ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGV9LnJhZGlvLWljb24sYnV0dG9ue3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9YnV0dG9ue2xlZnQ6MDt0b3A6MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7b3V0bGluZTpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBidXR0b24sW2Rpcj1ydGxdIGJ1dHRvbntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5yYWRpby1pY29uLC5yYWRpby1pbm5lcnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIzk5OSk7LS1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tYm9yZGVyLXdpZHRoOjJweDstLWJvcmRlci1zdHlsZTpzb2xpZDt3aWR0aDoyMHB4O2hlaWdodDoyMHB4fTpob3N0KC5pb24tY29sb3IpIC5yYWRpby1pbm5lcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWNvbG9yLnJhZGlvLWNoZWNrZWQpIC5yYWRpby1pY29ue2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnJhZGlvLWljb257bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1jb2xvcil9LnJhZGlvLWlubmVye2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOmNhbGMoNTAlICsgdmFyKC0tYm9yZGVyLXdpZHRoKSk7aGVpZ2h0OmNhbGMoNTAlICsgdmFyKC0tYm9yZGVyLXdpZHRoKSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI4cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yOHMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSksLXdlYmtpdC10cmFuc2Zvcm0gLjI4cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLWNoZWNrZWQpfTpob3N0KC5yYWRpby1jaGVja2VkKSAucmFkaW8taWNvbntib3JkZXItY29sb3I6dmFyKC0tY29sb3ItY2hlY2tlZCl9Omhvc3QoLnJhZGlvLWNoZWNrZWQpIC5yYWRpby1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX06aG9zdCgucmFkaW8tZGlzYWJsZWQpe29wYWNpdHk6LjN9Omhvc3QoLmlvbi1mb2N1c2VkKSAucmFkaW8taWNvbjphZnRlcntib3JkZXItcmFkaXVzOjUwJTtsZWZ0Oi0xMnB4O3RvcDotMTJweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCM0YzhkZmYpO2NvbnRlbnQ6XFxcIlxcXCI7b3BhY2l0eTouMn06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuaW9uLWZvY3VzZWQgLnJhZGlvLWljb246YWZ0ZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmlvbi1mb2N1c2VkKSAucmFkaW8taWNvbjphZnRlcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0Oi0xMnB4fTpob3N0KC5pbi1pdGVtKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6OXB4O21hcmdpbi1ib3R0b206OXB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246c3RhdGljfTpob3N0KC5pbi1pdGVtW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDo0cHg7bWFyZ2luLXJpZ2h0OjM2cHg7bWFyZ2luLXRvcDoxMXB4O21hcmdpbi1ib3R0b206MTBweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLmluLWl0ZW1bc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo0cHg7bWFyZ2luLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjM2cHg7bWFyZ2luLWlubGluZS1lbmQ6MzZweH19XCI7IH1cbn07XG5sZXQgcmFkaW9CdXR0b25JZHMgPSAwO1xuXG5jb25zdCBSYWRpb0dyb3VwID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gYGlvbi1yZy0ke3JhZGlvR3JvdXBJZHMrK31gO1xuICAgICAgICB0aGlzLmxhYmVsSWQgPSBgJHt0aGlzLmlucHV0SWR9LWxibGA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByYWRpb3MgY2FuIGJlIGRlc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFJhZGlvID0gZXYudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkUmFkaW8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRSYWRpby52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkRlc2VsZWN0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFJhZGlvID0gZXYudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkUmFkaW8pIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgIH1cbiAgICB2YWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSYWRpb3MoKTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlIH0pO1xuICAgIH1cbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBsaXN0IGhlYWRlciBpZiBpdCBleGlzdHMgYW5kIHNldCB0aGUgaWRcbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIHNldCBhcmlhLWxhYmVsbGVkYnlcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCdpb24tbGlzdC1oZWFkZXInKSB8fCBlbC5xdWVyeVNlbGVjdG9yKCdpb24taXRlbS1kaXZpZGVyJyk7XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbElkID0gbGFiZWwuaWQgPSB0aGlzLm5hbWUgKyAnLWxibCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgcmFkaW8gPSBmaW5kQ2hlY2tlZE9wdGlvbihlbCwgJ2lvbi1yYWRpbycpO1xuICAgICAgICAgICAgaWYgKHJhZGlvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCByYWRpby5jb21wb25lbnRPblJlYWR5KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gcmFkaW8udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubXV0YXRpb25PID0gd2F0Y2hGb3JPcHRpb25zKGVsLCAnaW9uLXJhZGlvJywgbmV3T3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChuZXdPcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5ld09wdGlvbi5jb21wb25lbnRPblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdPcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJhZGlvcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYWRpb3MoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uTykge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgdXBkYXRlUmFkaW9zKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSBzdXJlIHdlIGdldCBhbGwgcmFkaW9zIGZpcnN0XG4gICAgICAgICAqIHNvIHZhbHVlcyBhcmUgdXAgdG8gZGF0ZSBwcmlvclxuICAgICAgICAgKiB0byBjYWNoaW5nIHRoZSByYWRpbyBncm91cCB2YWx1ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcmFkaW9zID0gYXdhaXQgdGhpcy5nZXRSYWRpb3MoKTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcbiAgICAgICAgbGV0IGhhc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gV2FsayB0aGUgRE9NIGluIHJldmVyc2Ugb3JkZXIsIHNpbmNlIHRoZSBsYXN0IHNlbGVjdGVkIG9uZSB3aW5zIVxuICAgICAgICBmb3IgKGNvbnN0IHJhZGlvIG9mIHJhZGlvcykge1xuICAgICAgICAgICAgaWYgKCFoYXNDaGVja2VkICYmIHJhZGlvLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgdmFsdWUgZm9yIHRoaXMgcmFkaW9cbiAgICAgICAgICAgICAgICAvLyBidXQgdGhpcyByYWRpbyBpc24ndCBjaGVja2VkIHlldFxuICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBoYXZlbid0IGZvdW5kIGEgY2hlY2tlZCB5ZXRcbiAgICAgICAgICAgICAgICBoYXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgcmFkaW8gZG9lc24ndCBoYXZlIHRoZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgICAgICAgICAgLy8gb3IgdGhlIHJhZGlvIGdyb3VwIGhhcyBiZWVuIGFscmVhZHkgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZSBpZlxuICAgICAgICBpZiAoIWhhc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UmFkaW9zKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoQXJyYXlcbiAgICAgICAgICAgIC5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLXJhZGlvJykpXG4gICAgICAgICAgICAubWFwKHIgPT4gci5jb21wb25lbnRPblJlYWR5KCkpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcInJhZGlvZ3JvdXBcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIjogdGhpcy5sYWJlbElkLCBvbklvblNlbGVjdDogdGhpcy5vblNlbGVjdCwgb25Jb25EZXNlbGVjdDogdGhpcy5hbGxvd0VtcHR5U2VsZWN0aW9uID8gdGhpcy5vbkRlc2VsZWN0IDogdW5kZWZpbmVkLCBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07IH1cbn07XG5sZXQgcmFkaW9Hcm91cElkcyA9IDA7XG5cbmV4cG9ydCB7IFJhZGlvIGFzIGlvbl9yYWRpbywgUmFkaW9Hcm91cCBhcyBpb25fcmFkaW9fZ3JvdXAgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiIsImNvbnN0IHdhdGNoRm9yT3B0aW9ucyA9IChjb250YWluZXJFbCwgdGFnTmFtZSwgb25DaGFuZ2UpID0+IHtcclxuICAgIGNvbnN0IG11dGF0aW9uID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25MaXN0ID0+IHtcclxuICAgICAgICBvbkNoYW5nZShnZXRTZWxlY3RlZE9wdGlvbihtdXRhdGlvbkxpc3QsIHRhZ05hbWUpKTtcclxuICAgIH0pO1xyXG4gICAgbXV0YXRpb24ub2JzZXJ2ZShjb250YWluZXJFbCwge1xyXG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtdXRhdGlvbjtcclxufTtcclxuY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb24gPSAobXV0YXRpb25MaXN0LCB0YWdOYW1lKSA9PiB7XHJcbiAgICBsZXQgbmV3T3B0aW9uO1xyXG4gICAgbXV0YXRpb25MaXN0LmZvckVhY2gobXV0ID0+IHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dC5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld09wdGlvbiA9IGZpbmRDaGVja2VkT3B0aW9uKG11dC5hZGRlZE5vZGVzW2ldLCB0YWdOYW1lKSB8fCBuZXdPcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3T3B0aW9uO1xyXG59O1xyXG5jb25zdCBmaW5kQ2hlY2tlZE9wdGlvbiA9IChlbCwgdGFnTmFtZSkgPT4ge1xyXG4gICAgaWYgKGVsLm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG9wdGlvbnMgPSAoZWwudGFnTmFtZSA9PT0gdGFnTmFtZS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAgID8gW2VsXVxyXG4gICAgICAgIDogQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpKTtcclxuICAgIHJldHVybiBvcHRpb25zLmZpbmQoKG8pID0+IG8uY2hlY2tlZCA9PT0gdHJ1ZSk7XHJcbn07XG5cbmV4cG9ydCB7IGZpbmRDaGVja2VkT3B0aW9uIGFzIGYsIHdhdGNoRm9yT3B0aW9ucyBhcyB3IH07XG4iXSwic291cmNlUm9vdCI6IiJ9