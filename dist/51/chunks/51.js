(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_checkbox", function() { return Checkbox; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const Checkbox = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-cb-${checkboxIds++}`;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If `true`, the checkbox will visually appear as indeterminate.
         */
        this.indeterminate = false;
        /**
         * If `true`, the user cannot interact with the checkbox.
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
            this.setFocus();
            this.checked = !this.checked;
            this.indeterminate = false;
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
    componentWillLoad() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }
    disabledChanged() {
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    }
    setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }
    render() {
        const { inputId, indeterminate, disabled, checked, value, color, el } = this;
        const labelId = inputId + '-lbl';
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, (checked ? value : ''), disabled);
        let path = indeterminate
            ? Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M6 12L18 12" })
            : Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8" });
        if (mode === 'md') {
            path = indeterminate
                ? Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M2 12H22" })
                : Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M1.73,12.91 8.1,19.28 22.79,4.59" });
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "checkbox", "aria-disabled": disabled ? 'true' : null, "aria-checked": `${checked}`, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), { [mode]: true, 'in-item': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), 'checkbox-checked': checked, 'checkbox-disabled': disabled, 'checkbox-indeterminate': indeterminate, 'interactive': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "checkbox-icon", viewBox: "0 0 24 24" }, path), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: btnEl => this.buttonEl = btnEl })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"; }
};
let checkboxIds = 0;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1jaGVja2JveC1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ3FEO0FBQ0g7O0FBRWhGO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QixpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQyx1QkFBdUIsMkRBQVc7QUFDbEMsd0JBQXdCLDJEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4REFBOEQ7QUFDN0U7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0Isc0JBQXNCLDhEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWlCO0FBQ3pCO0FBQ0EsY0FBYywyREFBQyxVQUFVLG1CQUFtQjtBQUM1QyxjQUFjLDJEQUFDLFVBQVUsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQUMsVUFBVSxnQkFBZ0I7QUFDN0Msa0JBQWtCLDJEQUFDLFVBQVUsd0NBQXdDO0FBQ3JFO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyx3R0FBd0csUUFBUSxvRUFBb0UsRUFBRSw0REFBa0IsV0FBVywwQkFBMEIsNERBQVcsNElBQTRJLEdBQUcsRUFBRSwyREFBQyxTQUFTLCtDQUErQyxTQUFTLDJEQUFDLFlBQVksMkhBQTJIO0FBQzVtQjtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixlQUFlLHNEQUFzRCx3REFBd0QseURBQXlELGtCQUFrQixxQkFBcUIsa0JBQWtCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixVQUFVLGtCQUFrQiwyQ0FBMkMsNkNBQTZDLDRDQUE0QyxPQUFPLE9BQU8sTUFBTSxjQUFjLGVBQWUsYUFBYSxnQkFBZ0Isa0JBQWtCLFdBQVcsWUFBWSxTQUFTLHVCQUF1QixlQUFlLHdCQUF3QixxQkFBcUIsZ0JBQWdCLGFBQWEsaURBQWlELFdBQVcsWUFBWSxRQUFRLHlCQUF5QixTQUFTLGVBQWUsbUNBQW1DLGNBQWMsa0JBQWtCLFdBQVcsWUFBWSxxQ0FBcUMsNkJBQTZCLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLG9CQUFvQixVQUFVLDhCQUE4QixlQUFlLFVBQVUsc0ZBQXNGLHlDQUF5QyxxQ0FBcUMsZ0dBQWdHLFVBQVUsMEJBQTBCLG9CQUFvQixNQUFNLG9CQUFvQixtQkFBbUIscUJBQXFCLDBEQUEwRCx5RUFBeUUsWUFBWSxrQkFBa0IsbUJBQW1CLDBCQUEwQixXQUFXLGdCQUFnQixjQUFjLGlCQUFpQixnQkFBZ0Isa0JBQWtCLGNBQWMsZ0JBQWdCLDZGQUE2RixnQkFBZ0Isa0JBQWtCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsNEJBQTRCLGdCQUFnQixrQkFBa0IsZUFBZSxrQkFBa0IsNkZBQTZGLDRCQUE0QixrQkFBa0IsbUJBQW1CLHlCQUF5Qix3QkFBd0Isd0JBQXdCLHdCQUF3QixFQUFFO0FBQ3JpRjtBQUNBOztBQUVvQzs7Ozs7Ozs7Ozs7OztBQ3JHcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiI1MVxcY2h1bmtzXFw1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGYgYXMgZmluZEl0ZW1MYWJlbCwgYSBhcyByZW5kZXJIaWRkZW5JbnB1dCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBDaGVja2JveCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IGBpb24tY2ItJHtjaGVja2JveElkcysrfWA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGNoZWNrYm94IGlzIHNlbGVjdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCB3aWxsIHZpc3VhbGx5IGFwcGVhciBhcyBpbmRldGVybWluYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBjaGVja2JveC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgdG9nZ2xlIGRvZXMgbm90IG1lYW4gaWYgaXQncyBjaGVja2VkIG9yIG5vdCwgdXNlIHRoZSBgY2hlY2tlZGBcbiAgICAgICAgICogcHJvcGVydHkgZm9yIHRoYXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBhIHRvZ2dsZSBpcyBhbmFsb2dvdXMgdG8gdGhlIHZhbHVlIG9mIGEgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gLFxuICAgICAgICAgKiBpdCdzIG9ubHkgdXNlZCB3aGVuIHRoZSB0b2dnbGUgcGFydGljaXBhdGVzIGluIGEgbmF0aXZlIGA8Zm9ybT5gLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBjaGVja2VkQ2hhbmdlZChpc0NoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBjaGVja2VkOiBpc0NoZWNrZWQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBlbWl0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnY2hlY2tib3gtY2hlY2tlZCc6IHRoaXMuY2hlY2tlZCxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRGb2N1cygpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRWwpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXRJZCwgaW5kZXRlcm1pbmF0ZSwgZGlzYWJsZWQsIGNoZWNrZWQsIHZhbHVlLCBjb2xvciwgZWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGxhYmVsSWQgPSBpbnB1dElkICsgJy1sYmwnO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKGVsKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIHRoaXMubmFtZSwgKGNoZWNrZWQgPyB2YWx1ZSA6ICcnKSwgZGlzYWJsZWQpO1xuICAgICAgICBsZXQgcGF0aCA9IGluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgID8gaChcInBhdGhcIiwgeyBkOiBcIk02IDEyTDE4IDEyXCIgfSlcbiAgICAgICAgICAgIDogaChcInBhdGhcIiwgeyBkOiBcIk01LjksMTIuNWwzLjgsMy44bDguOC04LjhcIiB9KTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdtZCcpIHtcbiAgICAgICAgICAgIHBhdGggPSBpbmRldGVybWluYXRlXG4gICAgICAgICAgICAgICAgPyBoKFwicGF0aFwiLCB7IGQ6IFwiTTIgMTJIMjJcIiB9KVxuICAgICAgICAgICAgICAgIDogaChcInBhdGhcIiwgeyBkOiBcIk0xLjczLDEyLjkxIDguMSwxOS4yOCAyMi43OSw0LjU5XCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCByb2xlOiBcImNoZWNrYm94XCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1jaGVja2VkXCI6IGAke2NoZWNrZWR9YCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCAnaW4taXRlbSc6IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKSwgJ2NoZWNrYm94LWNoZWNrZWQnOiBjaGVja2VkLCAnY2hlY2tib3gtZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ2NoZWNrYm94LWluZGV0ZXJtaW5hdGUnOiBpbmRldGVybWluYXRlLCAnaW50ZXJhY3RpdmUnOiB0cnVlIH0pIH0sIGgoXCJzdmdcIiwgeyBjbGFzczogXCJjaGVja2JveC1pY29uXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIgfSwgcGF0aCksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCByZWY6IGJ0bkVsID0+IHRoaXMuYnV0dG9uRWwgPSBidG5FbCB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJjaGVja2VkXCI6IFtcImNoZWNrZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQtY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJvcmRlci1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY2hlY2ttYXJrLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpOy0tdHJhbnNpdGlvbjpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjJ9Omhvc3QoLmlvbi1jb2xvcil7LS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY2hlY2ttYXJrLWNvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9YnV0dG9ue2xlZnQ6MDt0b3A6MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtvdXRsaW5lOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGJ1dHRvbixbZGlyPXJ0bF0gYnV0dG9ue2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LmNoZWNrYm94LWljb257Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmNoZWNrYm94LWljb24gcGF0aHtmaWxsOm5vbmU7c3Ryb2tlOnZhcigtLWNoZWNrbWFyay1jb2xvcik7c3Ryb2tlLXdpZHRoOjE7b3BhY2l0eTowfTpob3N0KC5jaGVja2JveC1jaGVja2VkKSAuY2hlY2tib3gtaWNvbiw6aG9zdCguY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSkgLmNoZWNrYm94LWljb257Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvci1jaGVja2VkKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtY2hlY2tlZCl9Omhvc3QoLmNoZWNrYm94LWNoZWNrZWQpIC5jaGVja2JveC1pY29uIHBhdGgsOmhvc3QoLmNoZWNrYm94LWluZGV0ZXJtaW5hdGUpIC5jaGVja2JveC1pY29uIHBhdGh7b3BhY2l0eToxfTpob3N0KC5jaGVja2JveC1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHstLWJvcmRlci1yYWRpdXM6NTAlOy0tYm9yZGVyLXdpZHRoOjFweDstLWJvcmRlci1zdHlsZTpzb2xpZDstLWJvcmRlci1jb2xvcjpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC4yMyk7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpOy0tc2l6ZToyNnB4O3dpZHRoOnZhcigtLXNpemUpO2hlaWdodDp2YXIoLS1zaXplKX06aG9zdCguY2hlY2tib3gtZGlzYWJsZWQpe29wYWNpdHk6LjN9Omhvc3QoLmluLWl0ZW0pe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjhweDttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbTo5cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpzdGF0aWN9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5pbi1pdGVtKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHh9fTpob3N0KC5pbi1pdGVtW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDoycHg7bWFyZ2luLXJpZ2h0OjE2cHg7bWFyZ2luLXRvcDo4cHg7bWFyZ2luLWJvdHRvbTo4cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5pbi1pdGVtW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHh9fVwiOyB9XG59O1xubGV0IGNoZWNrYm94SWRzID0gMDtcblxuZXhwb3J0IHsgQ2hlY2tib3ggYXMgaW9uX2NoZWNrYm94IH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9