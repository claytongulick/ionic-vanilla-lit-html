(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_tab_bar, ion_tab_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab_bar", function() { return TabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab_button", function() { return TabButton; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");




const TabBar = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.keyboardVisible = false;
        /**
         * If `true`, the tab bar will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        this.ionTabBarChanged = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabBarChanged", 7);
    }
    selectedTabChanged() {
        if (this.selectedTab !== undefined) {
            this.ionTabBarChanged.emit({
                tab: this.selectedTab
            });
        }
    }
    onKeyboardWillHide() {
        setTimeout(() => this.keyboardVisible = false, 50);
    }
    onKeyboardWillShow() {
        if (this.el.getAttribute('slot') !== 'top') {
            this.keyboardVisible = true;
        }
    }
    componentWillLoad() {
        this.selectedTabChanged();
    }
    render() {
        const { color, translucent, keyboardVisible } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "tablist", "aria-hidden": keyboardVisible ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), { [mode]: true, 'tab-bar-translucent': translucent, 'tab-bar-hidden': keyboardVisible }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "selectedTab": ["selectedTabChanged"]
    }; }
    static get style() { return ":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:1px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.07))));--color:var(--ion-tab-bar-color,var(--ion-color-step-600,#666));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:56px}"; }
};

const TabButton = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the tab button.
         */
        this.disabled = false;
        /**
         * The selected tab component
         */
        this.selected = false;
        this.onKeyUp = (ev) => {
            if (ev.key === 'Enter' || ev.key === ' ') {
                this.selectTab(ev);
            }
        };
        this.onClick = (ev) => {
            this.selectTab(ev);
        };
        this.ionTabButtonClick = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabButtonClick", 7);
    }
    onTabBarChanged(ev) {
        this.selected = this.tab === ev.detail.tab;
    }
    componentWillLoad() {
        if (this.layout === undefined) {
            this.layout = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('tabButtonLayout', 'icon-top');
        }
    }
    selectTab(ev) {
        if (this.tab !== undefined) {
            if (!this.disabled) {
                this.ionTabButtonClick.emit({
                    tab: this.tab,
                    href: this.href,
                    selected: this.selected
                });
            }
            ev.preventDefault();
        }
    }
    get hasLabel() {
        return !!this.el.querySelector('ion-label');
    }
    get hasIcon() {
        return !!this.el.querySelector('ion-icon');
    }
    get tabIndex() {
        if (this.disabled) {
            return -1;
        }
        const hasTabIndex = this.el.hasAttribute('tabindex');
        if (hasTabIndex) {
            return this.el.getAttribute('tabindex');
        }
        return 0;
    }
    render() {
        const { disabled, hasIcon, hasLabel, tabIndex, href, rel, target, layout, selected, tab } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const attrs = {
            download: this.download,
            href,
            rel,
            target
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, onKeyup: this.onKeyUp, role: "tab", tabindex: tabIndex, "aria-selected": selected ? 'true' : null, id: tab !== undefined ? `tab-button-${tab}` : null, class: {
                [mode]: true,
                'tab-selected': selected,
                'tab-disabled': disabled,
                'tab-has-label': hasLabel,
                'tab-has-icon': hasIcon,
                'tab-has-label-only': hasLabel && !hasIcon,
                'tab-has-icon-only': hasIcon && !hasLabel,
                [`tab-layout-${layout}`]: true,
                'ion-activatable': true,
                'ion-selectable': true,
                'ion-focusable': true
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs, { tabIndex: -1 }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: "unbounded" }))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{--ripple-color:var(--color-selected);-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background);color:var(--color)}:host,a{height:100%;outline:none}a{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;border:0;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){a{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-focused){background:var(--background-focused)}\@media (any-hover:hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none!important}:host(.tab-disabled){pointer-events:none;opacity:.4}::slotted(ion-icon),::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:400;letter-spacing:.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon),[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}::slotted(ion-badge){border-radius:8px;padding-left:2px;padding-right:2px;padding-top:3px;padding-bottom:2px;left:calc(50% + 6px);top:8px;min-width:12px;font-size:8px;font-weight:400}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}:host-context([dir=rtl]) ::slotted(ion-badge),[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%;top:8px}:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:unset;right:unset;right:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-end) ::slotted(ion-badge),:host(.tab-layout-icon-start) ::slotted(ion-badge){left:80%;top:16px}:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge){left:unset;right:unset;right:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){margin-right:6px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.tab-layout-icon-start) ::slotted(ion-icon){margin-right:unset;-webkit-margin-end:6px;margin-inline-end:6px}}:host(.tab-layout-icon-end) ::slotted(ion-icon){margin-left:6px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.tab-layout-icon-end) ::slotted(ion-icon){margin-left:unset;-webkit-margin-start:6px;margin-inline-start:6px}}:host(.tab-has-label-only) ::slotted(ion-badge),:host(.tab-layout-icon-hide) ::slotted(ion-badge){left:70%;top:16px}:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge){left:unset;right:unset;right:70%}:host(.tab-has-label-only) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-has-icon-only) ::slotted(ion-badge),:host(.tab-layout-label-hide) ::slotted(ion-badge){top:16px}:host(.tab-has-icon-only) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10YWItYmFyXzItbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQzFFO0FBQ1c7O0FBRTlEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyREFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNDQUFzQztBQUNyRCxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyx1R0FBdUcsRUFBRSw0REFBa0IsV0FBVyxzRkFBc0YsR0FBRyxFQUFFLDJEQUFDO0FBQzNQO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixlQUFlLHVDQUF1Qyx5Q0FBeUMsb0JBQW9CLGFBQWEsc0JBQXNCLG1CQUFtQixxQkFBcUIsdUJBQXVCLFdBQVcsNkNBQTZDLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLGtCQUFrQixlQUFlLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixXQUFXLHlDQUF5QyxpQ0FBaUMsNkZBQTZGLE1BQU0sbUJBQW1CLG9CQUFvQixnREFBZ0QsK0NBQStDLCtDQUErQywrQ0FBK0MsNENBQTRDLDRDQUE0QywyQ0FBMkMsMkNBQTJDLGdDQUFnQyw4REFBOEQsNkNBQTZDLGlDQUFpQywwSEFBMEgscUNB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MkJBQTJCLGNBQWMsY0FBYyxXQUFXLGdEQUFnRCxlQUFlLGtCQUFrQixpREFBaUQsYUFBYSxrQkFBa0Isb0RBQW9ELFNBQVMsUUFBUSxpSkFBaUosV0FBVyxZQUFZLFVBQVUsbURBQW1ELGFBQWEsa0JBQWtCLG9EQUFvRCxlQUFlLGdCQUFnQixvR0FBb0csU0FBUyxTQUFTLDBSQUEwUixXQUFXLFlBQVksVUFBVSxrREFBa0QsaUJBQWlCLDZGQUE2RixrREFBa0QsbUJBQW1CLHVCQUF1Qix1QkFBdUIsZ0RBQWdELGdCQUFnQiw2RkFBNkYsZ0RBQWdELGtCQUFrQix5QkFBeUIseUJBQXlCLGtHQUFrRyxTQUFTLFNBQVMsc1JBQXNSLFdBQVcsWUFBWSxVQUFVLGtHQUFrRyxhQUFhLGdCQUFnQixrR0FBa0csU0FBUyxnR0FBZ0csYUFBYSxnQkFBZ0IsZUFBZSxFQUFFO0FBQzUrTDs7QUFFOEQ7Ozs7Ozs7Ozs7Ozs7QUNsSTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiNzJcXGNodW5rc1xcNzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBUYWJCYXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmtleWJvYXJkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdGFiIGJhciB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uVGFiQmFyQ2hhbmdlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVGFiQmFyQ2hhbmdlZFwiLCA3KTtcbiAgICB9XG4gICAgc2VsZWN0ZWRUYWJDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlvblRhYkJhckNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgdGFiOiB0aGlzLnNlbGVjdGVkVGFiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbktleWJvYXJkV2lsbEhpZGUoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5rZXlib2FyZFZpc2libGUgPSBmYWxzZSwgNTApO1xuICAgIH1cbiAgICBvbktleWJvYXJkV2lsbFNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2xvdCcpICE9PSAndG9wJykge1xuICAgICAgICAgICAgdGhpcy5rZXlib2FyZFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiQ2hhbmdlZCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3IsIHRyYW5zbHVjZW50LCBrZXlib2FyZFZpc2libGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcInRhYmxpc3RcIiwgXCJhcmlhLWhpZGRlblwiOiBrZXlib2FyZFZpc2libGUgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IpKSwgeyBbbW9kZV06IHRydWUsICd0YWItYmFyLXRyYW5zbHVjZW50JzogdHJhbnNsdWNlbnQsICd0YWItYmFyLWhpZGRlbic6IGtleWJvYXJkVmlzaWJsZSB9KSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJzZWxlY3RlZFRhYlwiOiBbXCJzZWxlY3RlZFRhYkNoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6YXV0bztwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwwKTtib3JkZXItdG9wOnZhcigtLWJvcmRlcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7dGV4dC1hbGlnbjpjZW50ZXI7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTA7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94IWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94IWltcG9ydGFudH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KX19Omhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uKXstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpOy0tY29sb3Itc2VsZWN0ZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW9uLWNvbG9yKSA6OnNsb3R0ZWQoLnRhYi1zZWxlY3RlZCl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW9uLWNvbG9yKSw6aG9zdCguaW9uLWNvbG9yKSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24pe2NvbG9yOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksLjcpO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZChpb24tdGFiLWJ1dHRvbi5pb24tZm9jdXNlZCksOmhvc3QoLnRhYi1iYXItdHJhbnNsdWNlbnQpIDo6c2xvdHRlZChpb24tdGFiLWJ1dHRvbi5pb24tZm9jdXNlZCl7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpfTpob3N0KC50YWItYmFyLXRyYW5zbHVjZW50KSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24pe2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoW3Nsb3Q9dG9wXSl7cGFkZGluZy1ib3R0b206MDtib3JkZXItdG9wOjA7Ym9yZGVyLWJvdHRvbTp2YXIoLS1ib3JkZXIpfTpob3N0KC50YWItYmFyLWhpZGRlbil7ZGlzcGxheTpub25lIWltcG9ydGFudH06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLXRhYi1iYXItYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLXRhYi1iYXItYmFja2dyb3VuZC1mb2N1c2VkLCNlMGUwZTApOy0tYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tdGFiLWJhci1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgwLDAsMCwwLjA3KSkpKTstLWNvbG9yOnZhcigtLWlvbi10YWItYmFyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KSk7LS1jb2xvci1zZWxlY3RlZDp2YXIoLS1pb24tdGFiLWJhci1jb2xvci1hY3RpdmF0ZWQsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpO2hlaWdodDo1NnB4fVwiOyB9XG59O1xuXG5jb25zdCBUYWJCdXR0b24gPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgdGFiIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzZWxlY3RlZCB0YWIgY29tcG9uZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25LZXlVcCA9IChldikgPT4ge1xuICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gJ0VudGVyJyB8fCBldi5rZXkgPT09ICcgJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gKGV2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFRhYihldik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uVGFiQnV0dG9uQ2xpY2sgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRhYkJ1dHRvbkNsaWNrXCIsIDcpO1xuICAgIH1cbiAgICBvblRhYkJhckNoYW5nZWQoZXYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFiID09PSBldi5kZXRhaWwudGFiO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0ID0gY29uZmlnLmdldCgndGFiQnV0dG9uTGF5b3V0JywgJ2ljb24tdG9wJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0VGFiKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLnRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlvblRhYkJ1dHRvbkNsaWNrLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICB0YWI6IHRoaXMudGFiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBoYXNMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcbiAgICB9XG4gICAgZ2V0IGhhc0ljb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLWljb24nKTtcbiAgICB9XG4gICAgZ2V0IHRhYkluZGV4KCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc1RhYkluZGV4ID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGlmIChoYXNUYWJJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIGhhc0ljb24sIGhhc0xhYmVsLCB0YWJJbmRleCwgaHJlZiwgcmVsLCB0YXJnZXQsIGxheW91dCwgc2VsZWN0ZWQsIHRhYiB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgICAgZG93bmxvYWQ6IHRoaXMuZG93bmxvYWQsXG4gICAgICAgICAgICBocmVmLFxuICAgICAgICAgICAgcmVsLFxuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgb25LZXl1cDogdGhpcy5vbktleVVwLCByb2xlOiBcInRhYlwiLCB0YWJpbmRleDogdGFiSW5kZXgsIFwiYXJpYS1zZWxlY3RlZFwiOiBzZWxlY3RlZCA/ICd0cnVlJyA6IG51bGwsIGlkOiB0YWIgIT09IHVuZGVmaW5lZCA/IGB0YWItYnV0dG9uLSR7dGFifWAgOiBudWxsLCBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAndGFiLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgJ3RhYi1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICd0YWItaGFzLWxhYmVsJzogaGFzTGFiZWwsXG4gICAgICAgICAgICAgICAgJ3RhYi1oYXMtaWNvbic6IGhhc0ljb24sXG4gICAgICAgICAgICAgICAgJ3RhYi1oYXMtbGFiZWwtb25seSc6IGhhc0xhYmVsICYmICFoYXNJY29uLFxuICAgICAgICAgICAgICAgICd0YWItaGFzLWljb24tb25seSc6IGhhc0ljb24gJiYgIWhhc0xhYmVsLFxuICAgICAgICAgICAgICAgIFtgdGFiLWxheW91dC0ke2xheW91dH1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnaW9uLXNlbGVjdGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZVxuICAgICAgICAgICAgfSB9LCBoKFwiYVwiLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyB0YWJJbmRleDogLTEgfSksIGgoXCJzbG90XCIsIG51bGwpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IFwidW5ib3VuZGVkXCIgfSkpKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLXJpcHBsZS1jb2xvcjp2YXIoLS1jb2xvci1zZWxlY3RlZCk7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0LGF7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lfWF7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWRpcmVjdGlvbjppbmhlcml0O2ZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7LW1zLWZsZXgtYWxpZ246aW5oZXJpdDthbGlnbi1pdGVtczppbmhlcml0Oy1tcy1mbGV4LXBhY2s6aW5oZXJpdDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXVzZXItZHJhZzpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXthe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX06aG9zdCguaW9uLWZvY3VzZWQpe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKX1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXthOmhvdmVye2NvbG9yOnZhcigtLWNvbG9yLXNlbGVjdGVkKX19Omhvc3QoLnRhYi1zZWxlY3RlZCl7Y29sb3I6dmFyKC0tY29sb3Itc2VsZWN0ZWQpfTpob3N0KC50YWItaGlkZGVuKXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fTpob3N0KC50YWItZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTouNH06OnNsb3R0ZWQoaW9uLWljb24pLDo6c2xvdHRlZChpb24tbGFiZWwpe2Rpc3BsYXk6YmxvY2s7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7bWF4LXdpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06OnNsb3R0ZWQoaW9uLWxhYmVsKXstbXMtZmxleC1vcmRlcjowO29yZGVyOjB9OjpzbG90dGVkKGlvbi1pY29uKXstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTtoZWlnaHQ6MWVtfTpob3N0KC50YWItaGFzLWxhYmVsLW9ubHkpIDo6c2xvdHRlZChpb24tbGFiZWwpe3doaXRlLXNwYWNlOm5vcm1hbH06OnNsb3R0ZWQoaW9uLWJhZGdlKXstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxfTpob3N0KC50YWItbGF5b3V0LWljb24tc3RhcnQpey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KC50YWItbGF5b3V0LWljb24tZW5kKXstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20pey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX06aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnRhYi1sYXlvdXQtbGFiZWwtaGlkZSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7ZGlzcGxheTpub25lfWlvbi1yaXBwbGUtZWZmZWN0e2NvbG9yOnZhcigtLXJpcHBsZS1jb2xvcil9Omhvc3R7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1lbmQ6MTJweDstLXBhZGRpbmctYm90dG9tOjA7LS1wYWRkaW5nLXN0YXJ0OjEycHg7bWF4LXdpZHRoOjE2OHB4O2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjQwMDtsZXR0ZXItc3BhY2luZzouMDNlbX06OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MnB4O21hcmdpbi1ib3R0b206MnB4O3RleHQtdHJhbnNmb3JtOm5vbmV9OjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO2ZvbnQtc2l6ZToyMnB4fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSA6OnNsb3R0ZWQoaW9uLWljb24pLFtkaXI9cnRsXSA6OnNsb3R0ZWQoaW9uLWljb24pey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgY2VudGVyfTo6c2xvdHRlZChpb24tYmFkZ2Upe2JvcmRlci1yYWRpdXM6OHB4O3BhZGRpbmctbGVmdDoycHg7cGFkZGluZy1yaWdodDoycHg7cGFkZGluZy10b3A6M3B4O3BhZGRpbmctYm90dG9tOjJweDtsZWZ0OmNhbGMoNTAlICsgNnB4KTt0b3A6OHB4O21pbi13aWR0aDoxMnB4O2ZvbnQtc2l6ZTo4cHg7Zm9udC13ZWlnaHQ6NDAwfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoaW9uLWJhZGdlKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjJweDstd2Via2l0LXBhZGRpbmctZW5kOjJweDtwYWRkaW5nLWlubGluZS1lbmQ6MnB4fX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgOjpzbG90dGVkKGlvbi1iYWRnZSksW2Rpcj1ydGxdIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6Y2FsYyg1MCUgKyA2cHgpfTo6c2xvdHRlZChpb24tYmFkZ2U6ZW1wdHkpe2Rpc3BsYXk6YmxvY2s7bWluLXdpZHRoOjhweDtoZWlnaHQ6OHB4fTpob3N0KC50YWItbGF5b3V0LWljb24tdG9wKSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi10b3A6NnB4O21hcmdpbi1ib3R0b206MnB4fTpob3N0KC50YWItbGF5b3V0LWljb24tdG9wKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo2cHh9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6NzAlO3RvcDo4cHh9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20gOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6NzAlfTpob3N0KC50YWItbGF5b3V0LWljb24tYm90dG9tKSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjZweH06aG9zdCgudGFiLWxheW91dC1pY29uLWJvdHRvbSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDo2cHg7bWFyZ2luLWJvdHRvbTowfTpob3N0KC50YWItbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdCgudGFiLWxheW91dC1pY29uLXN0YXJ0KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OjgwJTt0b3A6MTZweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWVuZCA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLXN0YXJ0IDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC50YWItbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWxheW91dC1pY29uLXN0YXJ0KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjgwJX06aG9zdCgudGFiLWxheW91dC1pY29uLXN0YXJ0KSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi1yaWdodDo2cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50YWItbGF5b3V0LWljb24tc3RhcnQpIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDo2cHg7bWFyZ2luLWlubGluZS1lbmQ6NnB4fX06aG9zdCgudGFiLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tbGVmdDo2cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50YWItbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjZweDttYXJnaW4taW5saW5lLXN0YXJ0OjZweH19Omhvc3QoLnRhYi1oYXMtbGFiZWwtb25seSkgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OjcwJTt0b3A6MTZweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWhhcy1sYWJlbC1vbmx5IDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24taGlkZSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWhhcy1sYWJlbC1vbmx5KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6NzAlfTpob3N0KC50YWItaGFzLWxhYmVsLW9ubHkpIDo6c2xvdHRlZChpb24tbGFiZWwpLDpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCgudGFiLWhhcy1pY29uLW9ubHkpIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0KC50YWItbGF5b3V0LWxhYmVsLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2Upe3RvcDoxNnB4fTpob3N0KC50YWItaGFzLWljb24tb25seSkgOjpzbG90dGVkKGlvbi1pY29uKSw6aG9zdCgudGFiLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Zm9udC1zaXplOjI0cHh9XCI7IH1cbn07XG5cbmV4cG9ydCB7IFRhYkJhciBhcyBpb25fdGFiX2JhciwgVGFiQnV0dG9uIGFzIGlvbl90YWJfYnV0dG9uIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9