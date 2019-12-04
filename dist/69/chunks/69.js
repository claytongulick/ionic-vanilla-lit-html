(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_segment, ion_segment_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_segment", function() { return Segment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_segment_button", function() { return SegmentButton; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");




const Segment = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.didInit = false;
        /**
         * If `true`, the user cannot interact with the segment.
         */
        this.disabled = false;
        /**
         * If `true`, the segment buttons will overflow and the user can swipe to see them.
         */
        this.scrollable = false;
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
    }
    valueChanged(value) {
        if (this.didInit) {
            this.updateButtons();
            this.ionChange.emit({ value });
        }
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    connectedCallback() {
        if (this.value === undefined) {
            const checked = this.getButtons().find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.updateButtons();
        this.didInit = true;
    }
    emitStyle() {
        this.ionStyle.emit({
            'segment': true
        });
    }
    updateButtons() {
        const value = this.value;
        for (const button of this.getButtons()) {
            button.checked = (button.value === value);
        }
    }
    getButtons() {
        return Array.from(this.el.querySelectorAll('ion-segment-button'));
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true, 'segment-disabled': this.disabled, 'segment-scrollable': this.scrollable }) }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return ".sc-ion-segment-md-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-md-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-md-h{pointer-events:none}.segment-scrollable.sc-ion-segment-md-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar{display:none}.sc-ion-segment-md-h{--background:none;--background-checked:none;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--color-checked-disabled:var(--color-checked);--indicator-color:transparent}.segment-disabled.sc-ion-segment-md-h{opacity:.3}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button{--background-activated:rgba(var(--ion-color-base-rgb),0.16);--ripple-color:var(--ion-color-base);background:transparent;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-color-base);color:var(--ion-color-base)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated{color:var(--ion-color-base)}\@media (any-hover:hover){.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button:hover{background:rgba(var(--ion-color-base-rgb),.04)}}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-toolbar-color-checked,var(--color-checked));color:var(--ion-toolbar-color-checked,var(--color-checked))}.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{--background-hover:rgba(var(--ion-color-contrast-rgb),0.04);--background-activated:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb),0.6);--color-checked:var(--ion-color-contrast);--indicator-color-checked:var(--ion-color-contrast)}"; }
};

let ids = 0;
const SegmentButton = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the segment button is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the segment button.
         */
        this.disabled = false;
        /**
         * Set the layout of the text and icon in the segment.
         */
        this.layout = 'icon-top';
        /**
         * The type of the button.
         */
        this.type = 'button';
        /**
         * The value of the segment button.
         */
        this.value = 'ion-sb-' + (ids++);
        this.onClick = () => {
            this.checked = true;
        };
        this.ionSelect = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSelect", 7);
    }
    checkedChanged(checked, prev) {
        if (checked && !prev) {
            this.ionSelect.emit();
        }
    }
    get hasLabel() {
        return !!this.el.querySelector('ion-label');
    }
    get hasIcon() {
        return !!this.el.querySelector('ion-icon');
    }
    render() {
        const { checked, type, disabled, hasIcon, hasLabel, layout } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, class: {
                [mode]: true,
                'segment-button-has-label': hasLabel,
                'segment-button-has-icon': hasIcon,
                'segment-button-has-label-only': hasLabel && !hasIcon,
                'segment-button-has-icon-only': hasIcon && !hasLabel,
                'segment-button-disabled': disabled,
                'segment-button-checked': checked,
                [`segment-button-layout-${layout}`]: true,
                'ion-activatable': true,
                'ion-activatable-instant': true,
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: type, "aria-pressed": checked ? 'true' : null, class: "button-native", disabled: disabled }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "segment-button-indicator" })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"]
    }; }
    static get style() { return ":host{--padding-start:0;--padding-end:0;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;height:auto;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type){border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host-context([dir=rtl]):first-of-type,:host-context([dir=rtl]):host(:first-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host(:not(:first-of-type)){border-left-width:0}:host-context([dir=rtl]):host(:not(:first-of-type)),:host-context([dir=rtl]):not(:first-of-type){border-right-width:0;border-left-width:var(--border-width)}:host(:last-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host-context([dir=rtl]):host(:last-of-type),:host-context([dir=rtl]):last-of-type{border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.button-native{border-radius:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.segment-button-indicator{-ms-flex-item-align:end;align-self:flex-end;width:100%;height:2px;background-color:var(--indicator-color);opacity:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-checked) .segment-button-indicator{background-color:var(--indicator-color-checked,var(--color-checked))}:host(.activated){color:var(--color-activated,var(--color))}:host(.segment-button-disabled){color:var(--color-disabled)}:host(.segment-button-disabled.segment-button-checked){color:var(--color-checked-disabled)}::slotted(ion-icon){-ms-flex-order:-1;order:-1}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}:host{--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s,opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;font-size:14px;font-weight:500;letter-spacing:.06em;line-height:40px;text-transform:uppercase}:host(.activated),:host(.segment-button-checked){--border-color:var(--ion-color-primary,#3880ff);opacity:1}:host(.segment-button-disabled){opacity:.3}::slotted(ion-icon){font-size:24px}::slotted(ion-icon),::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon),:host(.segment-button-layout-icon-top) ::slotted(ion-label){margin-top:0}:host(.segment-button-layout-icon-bottom) ::slotted(ion-label),:host(.segment-button-layout-icon-top) ::slotted(ion-icon){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon),:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-checked.activated){color:var(--color-checked)}\@media (any-hover:hover){:host(:hover){background:var(--background-hover)}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1zZWdtZW50XzItbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ2dDOztBQUU5RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxzQ0FBc0MsRUFBRSw0REFBa0IsZ0JBQWdCLHlGQUF5RixHQUFHO0FBQy9MO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0EsTUFBTTtBQUNOLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLDRCQUE0QiwwQkFBMEIsa0NBQWtDLG1DQUFtQyxvQkFBb0IsYUFBYSx1QkFBdUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsV0FBVywyQ0FBMkMsa0JBQWtCLHVGQUF1RixvQkFBb0Isd0NBQXdDLG9CQUFvQixzQkFBc0IsV0FBVyxrQkFBa0IsMkRBQTJELGFBQWEs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QUFtQixxQkFBcUIsMkRBQTJELGVBQWUsZ0JBQWdCLGdCQUFnQixlQUFlLGdCQUFnQixxQkFBcUIsaUJBQWlCLHlCQUF5QixpREFBaUQsZ0RBQWdELFVBQVUsZ0NBQWdDLFdBQVcsb0JBQW9CLGVBQWUseUNBQXlDLGdCQUFnQixtQkFBbUIsMEhBQTBILGFBQWEsMEhBQTBILGdCQUFnQiw4REFBOEQsZ0JBQWdCLGVBQWUsNkZBQTZGLDhEQUE4RCxrQkFBa0IsbUJBQW1CLHlCQUF5Qix3QkFBd0IscUJBQXFCLHFCQUFxQiw0REFBNEQsY0FBYyxpQkFBaUIsNkZBQTZGLDREQUE0RCxrQkFBa0IsbUJBQW1CLHVCQUF1QixzQkFBc0IsdUJBQXVCLHVCQUF1QixvSEFBb0gsZ0JBQWdCLG1CQUFtQix5Q0FBeUMsMkJBQTJCLDBCQUEwQixjQUFjLG9DQUFvQyxFQUFFO0FBQ3hnTTs7QUFFdUU7Ozs7Ozs7Ozs7Ozs7QUNsSXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiNjlcXGNodW5rc1xcNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBTZWdtZW50ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5kaWRJbml0ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBzZWdtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc2VnbWVudCBidXR0b25zIHdpbGwgb3ZlcmZsb3cgYW5kIHRoZSB1c2VyIGNhbiBzd2lwZSB0byBzZWUgdGhlbS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgdmFsdWVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRpZEluaXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xuICAgICAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlZ21lbnRDbGljayhldikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEJ1dHRvbiA9IGV2LnRhcmdldDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkQnV0dG9uLnZhbHVlO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuZ2V0QnV0dG9ucygpLmZpbmQoYiA9PiBiLmNoZWNrZWQpO1xuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5kaWRJbml0ID0gdHJ1ZTtcbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ3NlZ21lbnQnOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVCdXR0b25zKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIHRoaXMuZ2V0QnV0dG9ucygpKSB7XG4gICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IChidXR0b24udmFsdWUgPT09IHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRCdXR0b25zKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWdtZW50LWJ1dHRvbicpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUsICdzZWdtZW50LWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCwgJ3NlZ21lbnQtc2Nyb2xsYWJsZSc6IHRoaXMuc2Nyb2xsYWJsZSB9KSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLXNlZ21lbnQtbWQtaHstLWluZGljYXRvci1jb2xvci1jaGVja2VkOmluaXRpYWw7LS1yaXBwbGUtY29sb3I6Y3VycmVudENvbG9yOy0tY29sb3ItYWN0aXZhdGVkOmluaXRpYWw7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7dGV4dC1hbGlnbjpjZW50ZXJ9LnNjLWlvbi1zZWdtZW50LW1kLXMgPiAuc2VnbWVudC1idXR0b24tZGlzYWJsZWQsIC5zZWdtZW50LWRpc2FibGVkLnNjLWlvbi1zZWdtZW50LW1kLWh7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VnbWVudC1zY3JvbGxhYmxlLnNjLWlvbi1zZWdtZW50LW1kLWh7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7d2lkdGg6YXV0bztvdmVyZmxvdy14OnNjcm9sbH0uc2VnbWVudC1zY3JvbGxhYmxlLnNjLWlvbi1zZWdtZW50LW1kLWg6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc2MtaW9uLXNlZ21lbnQtbWQtaHstLWJhY2tncm91bmQ6bm9uZTstLWJhY2tncm91bmQtY2hlY2tlZDpub25lOy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjA0KTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMTYpOy0tY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuNik7LS1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZDp2YXIoLS1jb2xvci1jaGVja2VkKTstLWluZGljYXRvci1jb2xvcjp0cmFuc3BhcmVudH0uc2VnbWVudC1kaXNhYmxlZC5zYy1pb24tc2VnbWVudC1tZC1oe29wYWNpdHk6LjN9LnNjLWlvbi1zZWdtZW50LW1kLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b257LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksMC4xNik7LS1yaXBwbGUtY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC42KX0uc2MtaW9uLXNlZ21lbnQtbWQtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2Vkey0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uc2MtaW9uLXNlZ21lbnQtbWQtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLmFjdGl2YXRlZHtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7LnNjLWlvbi1zZWdtZW50LW1kLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b246aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjA0KX19LnNjLWlvbi1zZWdtZW50LW1kLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSAuc2MtaW9uLXNlZ21lbnQtbWQtaDpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbntjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvci11bmNoZWNrZWQsdmFyKC0tY29sb3IpKX0uc2MtaW9uLXNlZ21lbnQtbWQtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLCBpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikgLnNjLWlvbi1zZWdtZW50LW1kLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LW1kLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZHstLWluZGljYXRvci1jb2xvci1jaGVja2VkOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLWNoZWNrZWQsdmFyKC0tY29sb3ItY2hlY2tlZCkpO2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLWNoZWNrZWQsdmFyKC0tY29sb3ItY2hlY2tlZCkpfS5zYy1pb24tc2VnbWVudC1tZC1oaW9uLXRvb2xiYXIuaW9uLWNvbG9yOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1tZC1zID4gaW9uLXNlZ21lbnQtYnV0dG9uLCBpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWdtZW50LW1kLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b257LS1iYWNrZ3JvdW5kLWhvdmVyOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC4wNCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLDAuNik7LS1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfVwiOyB9XG59O1xuXG5sZXQgaWRzID0gMDtcbmNvbnN0IFNlZ21lbnRCdXR0b24gPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc2VnbWVudCBidXR0b24gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlZ21lbnQgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBsYXlvdXQgb2YgdGhlIHRleHQgYW5kIGljb24gaW4gdGhlIHNlZ21lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxheW91dCA9ICdpY29uLXRvcCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHNlZ21lbnQgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdpb24tc2ItJyArIChpZHMrKyk7XG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TZWxlY3RcIiwgNyk7XG4gICAgfVxuICAgIGNoZWNrZWRDaGFuZ2VkKGNoZWNrZWQsIHByZXYpIHtcbiAgICAgICAgaWYgKGNoZWNrZWQgJiYgIXByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuaW9uU2VsZWN0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaGFzTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgfVxuICAgIGdldCBoYXNJY29uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGVja2VkLCB0eXBlLCBkaXNhYmxlZCwgaGFzSWNvbiwgaGFzTGFiZWwsIGxheW91dCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgJ3NlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbCc6IGhhc0xhYmVsLFxuICAgICAgICAgICAgICAgICdzZWdtZW50LWJ1dHRvbi1oYXMtaWNvbic6IGhhc0ljb24sXG4gICAgICAgICAgICAgICAgJ3NlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5JzogaGFzTGFiZWwgJiYgIWhhc0ljb24sXG4gICAgICAgICAgICAgICAgJ3NlZ21lbnQtYnV0dG9uLWhhcy1pY29uLW9ubHknOiBoYXNJY29uICYmICFoYXNMYWJlbCxcbiAgICAgICAgICAgICAgICAnc2VnbWVudC1idXR0b24tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAnc2VnbWVudC1idXR0b24tY2hlY2tlZCc6IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgW2BzZWdtZW50LWJ1dHRvbi1sYXlvdXQtJHtsYXlvdXR9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2lvbi1hY3RpdmF0YWJsZS1pbnN0YW50JzogdHJ1ZSxcbiAgICAgICAgICAgIH0gfSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IHR5cGUsIFwiYXJpYS1wcmVzc2VkXCI6IGNoZWNrZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogXCJidXR0b24tbmF0aXZlXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBoKFwic2xvdFwiLCBudWxsKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VnbWVudC1idXR0b24taW5kaWNhdG9yXCIgfSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiY2hlY2tlZFwiOiBbXCJjaGVja2VkQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLXBhZGRpbmctc3RhcnQ6MDstLXBhZGRpbmctZW5kOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MSAwIGF1dG87ZmxleDoxIDAgYXV0bzstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtoZWlnaHQ6YXV0bztib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX06aG9zdCg6Zmlyc3Qtb2YtdHlwZSl7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6Zmlyc3Qtb2YtdHlwZSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCg6Zmlyc3Qtb2YtdHlwZSl7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH06aG9zdCg6bm90KDpmaXJzdC1vZi10eXBlKSl7Ym9yZGVyLWxlZnQtd2lkdGg6MH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCg6bm90KDpmaXJzdC1vZi10eXBlKSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOm5vdCg6Zmlyc3Qtb2YtdHlwZSl7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKX06aG9zdCg6bGFzdC1vZi10eXBlKXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KDpsYXN0LW9mLXR5cGUpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpsYXN0LW9mLXR5cGV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKX0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOmluaGVyaXQ7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7bWFyZ2luLWxlZnQ6dmFyKC0tbWFyZ2luLXN0YXJ0KTttYXJnaW4tcmlnaHQ6dmFyKC0tbWFyZ2luLWVuZCk7bWFyZ2luLXRvcDp2YXIoLS1tYXJnaW4tdG9wKTttYXJnaW4tYm90dG9tOnZhcigtLW1hcmdpbi1ib3R0b20pO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWRpcmVjdGlvbjppbmhlcml0O2ZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttaW4td2lkdGg6aW5oZXJpdDttYXgtd2lkdGg6aW5oZXJpdDtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OmluaGVyaXQ7bWF4LWhlaWdodDppbmhlcml0Oy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlcjpub25lO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbnRhaW46Y29udGVudDtjdXJzb3I6cG9pbnRlcn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmJ1dHRvbi1uYXRpdmV7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1tYXJnaW4tc3RhcnQpOy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcnstbXMtZmxleC1pdGVtLWFsaWduOmVuZDthbGlnbi1zZWxmOmZsZXgtZW5kO3dpZHRoOjEwMCU7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWluZGljYXRvci1jb2xvcik7b3BhY2l0eToxfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtY2hlY2tlZCk7Y29sb3I6dmFyKC0tY29sb3ItY2hlY2tlZCl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIC5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3J7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZCx2YXIoLS1jb2xvci1jaGVja2VkKSl9Omhvc3QoLmFjdGl2YXRlZCl7Y29sb3I6dmFyKC0tY29sb3ItYWN0aXZhdGVkLHZhcigtLWNvbG9yKSl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWRpc2FibGVkKXtjb2xvcjp2YXIoLS1jb2xvci1kaXNhYmxlZCl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWRpc2FibGVkLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpe2NvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQpfTo6c2xvdHRlZChpb24taWNvbil7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9OjpzbG90dGVkKGlvbi1sYWJlbCl7ZGlzcGxheTpibG9jazstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjtsaW5lLWhlaWdodDoyMnB4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tc3RhcnQpIC5idXR0b24tbmF0aXZley1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1lbmQpIC5idXR0b24tbmF0aXZley1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tYm90dG9tKSAuYnV0dG9uLW5hdGl2ZXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXtkaXNwbGF5Om5vbmV9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yLHZhcigtLWNvbG9yLWNoZWNrZWQpKX06aG9zdHstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDoxNnB4Oy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MTZweDstLXRyYW5zaXRpb246Y29sb3IgMC4xNXMgbGluZWFyIDBzLG9wYWNpdHkgMC4xNXMgbGluZWFyIDBzO21pbi13aWR0aDo5MHB4O21heC13aWR0aDozNjBweDttaW4taGVpZ2h0OjQ4cHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wNmVtO2xpbmUtaGVpZ2h0OjQwcHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTpob3N0KC5hY3RpdmF0ZWQpLDpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKXstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTtvcGFjaXR5OjF9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWRpc2FibGVkKXtvcGFjaXR5Oi4zfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjI0cHh9OjpzbG90dGVkKGlvbi1pY29uKSw6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tdG9wOjEycHg7bWFyZ2luLWJvdHRvbToxMnB4fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24tbGFiZWwpLDpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3ApIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLWxlZnQ6OHB4O21hcmdpbi1yaWdodDowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tc3RhcnQpIDo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo4cHg7bWFyZ2luLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH19Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6OHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHh9fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1oYXMtaWNvbi1vbmx5KSA6OnNsb3R0ZWQoaW9uLWljb24pLDpob3N0KC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwtb25seSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDoxMnB4O21hcmdpbi1ib3R0b206MTJweH06aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZC5hY3RpdmF0ZWQpe2NvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQpfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KDpob3Zlcil7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKX19XCI7IH1cbn07XG5cbmV4cG9ydCB7IFNlZ21lbnQgYXMgaW9uX3NlZ21lbnQsIFNlZ21lbnRCdXR0b24gYXMgaW9uX3NlZ21lbnRfYnV0dG9uIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9