(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js ***!
  \*********************************************************************/
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
    static get style() { return ":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1jaGVja2JveC1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDcUQ7QUFDSDs7QUFFaEY7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhEQUE4RDtBQUM3RTtBQUNBLHFCQUFxQiwyREFBVTtBQUMvQixzQkFBc0IsOERBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBaUI7QUFDekI7QUFDQSxjQUFjLDJEQUFDLFVBQVUsbUJBQW1CO0FBQzVDLGNBQWMsMkRBQUMsVUFBVSxpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBLGtCQUFrQiwyREFBQyxVQUFVLGdCQUFnQjtBQUM3QyxrQkFBa0IsMkRBQUMsVUFBVSx3Q0FBd0M7QUFDckU7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHdHQUF3RyxRQUFRLG9FQUFvRSxFQUFFLDREQUFrQixXQUFXLDBCQUEwQiw0REFBVyw0SUFBNEksR0FBRyxFQUFFLDJEQUFDLFNBQVMsK0NBQStDLFNBQVMsMkRBQUMsWUFBWSwySEFBMkg7QUFDNW1CO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLGVBQWUsc0RBQXNELHdEQUF3RCx5REFBeUQsa0JBQWtCLHFCQUFxQixrQkFBa0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLFVBQVUsa0JBQWtCLDJDQUEyQyw2Q0FBNkMsNENBQTRDLE9BQU8sT0FBTyxNQUFNLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixrQkFBa0IsV0FBVyxZQUFZLFNBQVMsdUJBQXVCLGVBQWUsd0JBQXdCLHFCQUFxQixnQkFBZ0IsYUFBYSxpREFBaUQsV0FBVyxZQUFZLFFBQVEseUJBQXlCLFNBQVMsZUFBZSxtQ0FBbUMsY0FBYyxrQkFBa0IsV0FBVyxZQUFZLHFDQUFxQyw2QkFBNkIsaUNBQWlDLGlDQUFpQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixzQkFBc0Isb0JBQW9CLFVBQVUsOEJBQThCLGVBQWUsVUFBVSxzRkFBc0YseUNBQXlDLHFDQUFxQyxnR0FBZ0csVUFBVSwwQkFBMEIsb0JBQW9CLE1BQU0seUNBQXlDLG1CQUFtQixxQkFBcUIsMERBQTBELHlFQUF5RSx3REFBd0QsWUFBWSxrQkFBa0IsbUJBQW1CLG9CQUFvQixvQkFBb0IscUJBQXFCLGVBQWUsZ0dBQWdHLG9CQUFvQixzREFBc0QsOENBQThDLDBCQUEwQixXQUFXLGdCQUFnQixjQUFjLGVBQWUsZ0JBQWdCLG1CQUFtQixjQUFjLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLDZGQUE2Riw0QkFBNEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsd0JBQXdCLHdCQUF3Qix3QkFBd0IsRUFBRTtBQUMxcUY7QUFDQTs7QUFFb0M7Ozs7Ozs7Ozs7Ozs7QUNyR3BDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiNTJcXGNodW5rc1xcNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRJdGVtTGFiZWwsIGEgYXMgcmVuZGVySGlkZGVuSW5wdXQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMsIGggYXMgaG9zdENvbnRleHQgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcblxuY29uc3QgQ2hlY2tib3ggPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlucHV0SWQgPSBgaW9uLWNiLSR7Y2hlY2tib3hJZHMrK31gO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCBpcyBzZWxlY3RlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgY2hlY2tib3ggd2lsbCB2aXN1YWxseSBhcHBlYXIgYXMgaW5kZXRlcm1pbmF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgY2hlY2tib3guXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHRvZ2dsZSBkb2VzIG5vdCBtZWFuIGlmIGl0J3MgY2hlY2tlZCBvciBub3QsIHVzZSB0aGUgYGNoZWNrZWRgXG4gICAgICAgICAqIHByb3BlcnR5IGZvciB0aGF0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgYSB0b2dnbGUgaXMgYW5hbG9nb3VzIHRvIHRoZSB2YWx1ZSBvZiBhIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCxcbiAgICAgICAgICogaXQncyBvbmx5IHVzZWQgd2hlbiB0aGUgdG9nZ2xlIHBhcnRpY2lwYXRlcyBpbiBhIG5hdGl2ZSBgPGZvcm0+YC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFsdWUgPSAnb24nO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgY2hlY2tlZENoYW5nZWQoaXNDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgY2hlY2tlZDogaXNDaGVja2VkLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ2NoZWNrYm94LWNoZWNrZWQnOiB0aGlzLmNoZWNrZWQsXG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0Rm9jdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVsKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlucHV0SWQsIGluZGV0ZXJtaW5hdGUsIGRpc2FibGVkLCBjaGVja2VkLCB2YWx1ZSwgY29sb3IsIGVsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBsYWJlbElkID0gaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZmluZEl0ZW1MYWJlbChlbCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCB0aGlzLm5hbWUsIChjaGVja2VkID8gdmFsdWUgOiAnJyksIGRpc2FibGVkKTtcbiAgICAgICAgbGV0IHBhdGggPSBpbmRldGVybWluYXRlXG4gICAgICAgICAgICA/IGgoXCJwYXRoXCIsIHsgZDogXCJNNiAxMkwxOCAxMlwiIH0pXG4gICAgICAgICAgICA6IGgoXCJwYXRoXCIsIHsgZDogXCJNNS45LDEyLjVsMy44LDMuOGw4LjgtOC44XCIgfSk7XG4gICAgICAgIGlmIChtb2RlID09PSAnbWQnKSB7XG4gICAgICAgICAgICBwYXRoID0gaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICAgID8gaChcInBhdGhcIiwgeyBkOiBcIk0yIDEySDIyXCIgfSlcbiAgICAgICAgICAgICAgICA6IGgoXCJwYXRoXCIsIHsgZDogXCJNMS43MywxMi45MSA4LjEsMTkuMjggMjIuNzksNC41OVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgcm9sZTogXCJjaGVja2JveFwiLCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtY2hlY2tlZFwiOiBgJHtjaGVja2VkfWAsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvcikpLCB7IFttb2RlXTogdHJ1ZSwgJ2luLWl0ZW0nOiBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCksICdjaGVja2JveC1jaGVja2VkJzogY2hlY2tlZCwgJ2NoZWNrYm94LWRpc2FibGVkJzogZGlzYWJsZWQsICdjaGVja2JveC1pbmRldGVybWluYXRlJzogaW5kZXRlcm1pbmF0ZSwgJ2ludGVyYWN0aXZlJzogdHJ1ZSB9KSB9LCBoKFwic3ZnXCIsIHsgY2xhc3M6IFwiY2hlY2tib3gtaWNvblwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiIH0sIHBhdGgpLCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbkJsdXI6IHRoaXMub25CbHVyLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgcmVmOiBidG5FbCA9PiB0aGlzLmJ1dHRvbkVsID0gYnRuRWwgfSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiY2hlY2tlZFwiOiBbXCJjaGVja2VkQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7LS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1ib3JkZXItY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWNoZWNrbWFyay1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKTstLXRyYW5zaXRpb246bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoyfTpob3N0KC5pb24tY29sb3Ipey0tYmFja2dyb3VuZC1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1iYXNlKTstLWJvcmRlci1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1iYXNlKTstLWNoZWNrbWFyay1jb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfWJ1dHRvbntsZWZ0OjA7dG9wOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7b3V0bGluZTpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBidXR0b24sW2Rpcj1ydGxdIGJ1dHRvbntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5jaGVja2JveC1pY29ue2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5jaGVja2JveC1pY29uIHBhdGh7ZmlsbDpub25lO3N0cm9rZTp2YXIoLS1jaGVja21hcmstY29sb3IpO3N0cm9rZS13aWR0aDoxO29wYWNpdHk6MH06aG9zdCguY2hlY2tib3gtY2hlY2tlZCkgLmNoZWNrYm94LWljb24sOmhvc3QoLmNoZWNrYm94LWluZGV0ZXJtaW5hdGUpIC5jaGVja2JveC1pY29ue2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3ItY2hlY2tlZCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWNoZWNrZWQpfTpob3N0KC5jaGVja2JveC1jaGVja2VkKSAuY2hlY2tib3gtaWNvbiBwYXRoLDpob3N0KC5jaGVja2JveC1pbmRldGVybWluYXRlKSAuY2hlY2tib3gtaWNvbiBwYXRoe29wYWNpdHk6MX06aG9zdCguY2hlY2tib3gtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7LS1ib3JkZXItcmFkaXVzOmNhbGModmFyKC0tc2l6ZSkgKiAuMTI1KTstLWJvcmRlci13aWR0aDoycHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3JkZXItY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuNTEpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLXRyYW5zaXRpb246YmFja2dyb3VuZCAxODBtcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpOy0tc2l6ZToxOHB4O3dpZHRoOnZhcigtLXNpemUpO2hlaWdodDp2YXIoLS1zaXplKX0uY2hlY2tib3gtaWNvbiBwYXRoe3N0cm9rZS1kYXNoYXJyYXk6MzA7c3Ryb2tlLWRhc2hvZmZzZXQ6MzA7c3Ryb2tlLXdpZHRoOjN9Omhvc3QoLmNoZWNrYm94LWNoZWNrZWQpIC5jaGVja2JveC1pY29uIHBhdGgsOmhvc3QoLmNoZWNrYm94LWluZGV0ZXJtaW5hdGUpIC5jaGVja2JveC1pY29uIHBhdGh7c3Ryb2tlLWRhc2hvZmZzZXQ6MDstd2Via2l0LXRyYW5zaXRpb246c3Ryb2tlLWRhc2hvZmZzZXQgOTBtcyBsaW5lYXIgOTBtczt0cmFuc2l0aW9uOnN0cm9rZS1kYXNob2Zmc2V0IDkwbXMgbGluZWFyIDkwbXN9Omhvc3QoLmNoZWNrYm94LWRpc2FibGVkKXtvcGFjaXR5Oi4zfTpob3N0KC5pbi1pdGVtKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MThweDttYXJnaW4tYm90dG9tOjE4cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpzdGF0aWN9Omhvc3QoLmluLWl0ZW1bc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OjRweDttYXJnaW4tcmlnaHQ6MzZweDttYXJnaW4tdG9wOjE4cHg7bWFyZ2luLWJvdHRvbToxOHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguaW4taXRlbVtzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjRweDttYXJnaW4taW5saW5lLXN0YXJ0OjRweDstd2Via2l0LW1hcmdpbi1lbmQ6MzZweDttYXJnaW4taW5saW5lLWVuZDozNnB4fX1cIjsgfVxufTtcbmxldCBjaGVja2JveElkcyA9IDA7XG5cbmV4cG9ydCB7IENoZWNrYm94IGFzIGlvbl9jaGVja2JveCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==