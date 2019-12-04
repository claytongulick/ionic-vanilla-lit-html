(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js ***!
  \***********************************************************************/
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
    static get style() { return ":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--color:var(--ion-tab-bar-color,var(--ion-color-step-450,#8c8c8c));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:50px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb,255,255,255),0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb),.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}}"; }
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
    static get style() { return ":host{--ripple-color:var(--color-selected);-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background);color:var(--color)}:host,a{height:100%;outline:none}a{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;border:0;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){a{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-focused){background:var(--background-focused)}\@media (any-hover:hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none!important}:host(.tab-disabled){pointer-events:none;opacity:.4}::slotted(ion-icon),::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}::slotted(ion-badge){padding-left:6px;padding-right:6px;padding-top:1px;padding-bottom:1px;left:calc(50% + 6px);top:4px;height:auto;font-size:12px;line-height:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}:host-context([dir=rtl]) ::slotted(ion-badge),[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-icon){margin-top:4px;font-size:30px}::slotted(ion-icon:before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-end) ::slotted(ion-badge),:host(.tab-layout-icon-start) ::slotted(ion-badge){left:calc(50% + 35px);top:10px}:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}:host(.tab-has-label-only) ::slotted(ion-badge),:host(.tab-layout-icon-hide) ::slotted(ion-badge){left:calc(50% + 30px);top:10px}:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}:host(.tab-has-icon-only) ::slotted(ion-badge),:host(.tab-layout-label-hide) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10YWItYmFyXzItaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMxRTtBQUNXOztBQUU5RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkRBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBc0M7QUFDckQscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsdUdBQXVHLEVBQUUsNERBQWtCLFdBQVcsc0ZBQXNGLEdBQUcsRUFBRSwyREFBQztBQUMzUDtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBLE1BQU07QUFDTix3QkFBd0IsZUFBZSx1Q0FBdUMseUNBQXlDLG9CQUFvQixhQUFhLHNCQUFzQixtQkFBbUIscUJBQXFCLHVCQUF1QixXQUFXLDZDQUE2Qyx5QkFBeUIsNkJBQTZCLG1CQUFtQixrQkFBa0IsZUFBZSx5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsV0FBVyx5Q0FBeUMsaUNBQWlDLDZGQUE2RixNQUFNLG1CQUFtQixvQkFBb0IsZ0RBQWdELCtDQUErQywrQ0FBK0MsK0NBQStDLDRDQUE0Qyw0Q0FBNEMsMkNBQTJDLDJDQUEyQyxnQ0FBZ0MsOERBQThELDZDQUE2QyxpQ0FBaUMsMEhBQTBILHFD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QkFBMkIsbUJBQW1CLHFCQUFxQixhQUFhLGtCQUFrQixnQkFBZ0Isc0pBQXNKLGVBQWUsa0JBQWtCLGVBQWUsZ0JBQWdCLGtHQUFrRyxlQUFlLFlBQVksZUFBZSxrQkFBa0IsZUFBZSxvREFBb0Qsc0JBQXNCLGlKQUFpSixXQUFXLFlBQVksdUJBQXVCLG1EQUFtRCxhQUFhLGtCQUFrQixvREFBb0QsZUFBZSxvR0FBb0csc0JBQXNCLFNBQVMsMFJBQTBSLFdBQVcsWUFBWSx1QkFBdUIsa0dBQWtHLHNCQUFzQixTQUFTLHNSQUFzUixXQUFXLFlBQVksdUJBQXVCLGtHQUFrRyxTQUFTLGtEQUFrRCxjQUFjLGVBQWUsYUFBYSxnQkFBZ0IsRUFBRTtBQUMxMEs7O0FBRThEOzs7Ozs7Ozs7Ozs7O0FDbEk5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjcxXFxjaHVua3NcXDcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCB7IGIgYXMgY29uZmlnIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcblxuY29uc3QgVGFiQmFyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHRhYiBiYXIgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvblRhYkJhckNoYW5nZWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRhYkJhckNoYW5nZWRcIiwgNyk7XG4gICAgfVxuICAgIHNlbGVjdGVkVGFiQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pb25UYWJCYXJDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHRhYjogdGhpcy5zZWxlY3RlZFRhYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25LZXlib2FyZFdpbGxIaWRlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMua2V5Ym9hcmRWaXNpYmxlID0gZmFsc2UsIDUwKTtcbiAgICB9XG4gICAgb25LZXlib2FyZFdpbGxTaG93KCkge1xuICAgICAgICBpZiAodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSAhPT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYkNoYW5nZWQoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yLCB0cmFuc2x1Y2VudCwga2V5Ym9hcmRWaXNpYmxlIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJ0YWJsaXN0XCIsIFwiYXJpYS1oaWRkZW5cIjoga2V5Ym9hcmRWaXNpYmxlID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCAndGFiLWJhci10cmFuc2x1Y2VudCc6IHRyYW5zbHVjZW50LCAndGFiLWJhci1oaWRkZW4nOiBrZXlib2FyZFZpc2libGUgfSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwic2VsZWN0ZWRUYWJcIjogW1wic2VsZWN0ZWRUYWJDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e3BhZGRpbmctbGVmdDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOmF1dG87cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sMCk7Ym9yZGVyLXRvcDp2YXIoLS1ib3JkZXIpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO3RleHQtYWxpZ246Y2VudGVyO2NvbnRhaW46c3RyaWN0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnR9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9fTpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZChpb24tdGFiLWJ1dHRvbil7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKTstLWNvbG9yLXNlbGVjdGVkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKC50YWItc2VsZWN0ZWQpe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvciksOmhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uKXtjb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLC43KTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWNvbG9yKSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24uaW9uLWZvY3VzZWQpLDpob3N0KC50YWItYmFyLXRyYW5zbHVjZW50KSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24uaW9uLWZvY3VzZWQpe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKX06aG9zdCgudGFiLWJhci10cmFuc2x1Y2VudCkgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uKXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KFtzbG90PXRvcF0pe3BhZGRpbmctYm90dG9tOjA7Ym9yZGVyLXRvcDowO2JvcmRlci1ib3R0b206dmFyKC0tYm9yZGVyKX06aG9zdCgudGFiLWJhci1oaWRkZW4pe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10YWItYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi10YWItYmFyLWJhY2tncm91bmQtZm9jdXNlZCwjZTBlMGUwKTstLWJvcmRlcjowLjU1cHggc29saWQgdmFyKC0taW9uLXRhYi1iYXItYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMCwwLDAsMC4yKSkpKTstLWNvbG9yOnZhcigtLWlvbi10YWItYmFyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQ1MCwjOGM4YzhjKSk7LS1jb2xvci1zZWxlY3RlZDp2YXIoLS1pb24tdGFiLWJhci1jb2xvci1hY3RpdmF0ZWQsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpO2hlaWdodDo1MHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7Omhvc3QoLnRhYi1iYXItdHJhbnNsdWNlbnQpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksMC44KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgyMTAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgyMTAlKSBibHVyKDIwcHgpfTpob3N0KC5pb24tY29sb3IudGFiLWJhci10cmFuc2x1Y2VudCl7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjgpfTpob3N0KC50YWItYmFyLXRyYW5zbHVjZW50KSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24uaW9uLWZvY3VzZWQpe2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC42KX19XCI7IH1cbn07XG5cbmNvbnN0IFRhYkJ1dHRvbiA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSB0YWIgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNlbGVjdGVkIHRhYiBjb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbktleVVwID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXYua2V5ID09PSAnRW50ZXInIHx8IGV2LmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWIoZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKGV2KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25UYWJCdXR0b25DbGljayA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVGFiQnV0dG9uQ2xpY2tcIiwgNyk7XG4gICAgfVxuICAgIG9uVGFiQmFyQ2hhbmdlZChldikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YWIgPT09IGV2LmRldGFpbC50YWI7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQgPSBjb25maWcuZ2V0KCd0YWJCdXR0b25MYXlvdXQnLCAnaWNvbi10b3AnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3RUYWIoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMudGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW9uVGFiQnV0dG9uQ2xpY2suZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHRhYjogdGhpcy50YWIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGhhc0xhYmVsKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuICAgIH1cbiAgICBnZXQgaGFzSWNvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpO1xuICAgIH1cbiAgICBnZXQgdGFiSW5kZXgoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFzVGFiSW5kZXggPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgaWYgKGhhc1RhYkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgaGFzSWNvbiwgaGFzTGFiZWwsIHRhYkluZGV4LCBocmVmLCByZWwsIHRhcmdldCwgbGF5b3V0LCBzZWxlY3RlZCwgdGFiIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgICByZWwsXG4gICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBvbktleXVwOiB0aGlzLm9uS2V5VXAsIHJvbGU6IFwidGFiXCIsIHRhYmluZGV4OiB0YWJJbmRleCwgXCJhcmlhLXNlbGVjdGVkXCI6IHNlbGVjdGVkID8gJ3RydWUnIDogbnVsbCwgaWQ6IHRhYiAhPT0gdW5kZWZpbmVkID8gYHRhYi1idXR0b24tJHt0YWJ9YCA6IG51bGwsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICd0YWItc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAndGFiLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgJ3RhYi1oYXMtbGFiZWwnOiBoYXNMYWJlbCxcbiAgICAgICAgICAgICAgICAndGFiLWhhcy1pY29uJzogaGFzSWNvbixcbiAgICAgICAgICAgICAgICAndGFiLWhhcy1sYWJlbC1vbmx5JzogaGFzTGFiZWwgJiYgIWhhc0ljb24sXG4gICAgICAgICAgICAgICAgJ3RhYi1oYXMtaWNvbi1vbmx5JzogaGFzSWNvbiAmJiAhaGFzTGFiZWwsXG4gICAgICAgICAgICAgICAgW2B0YWItbGF5b3V0LSR7bGF5b3V0fWBdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tc2VsZWN0YWJsZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlXG4gICAgICAgICAgICB9IH0sIGgoXCJhXCIsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB7IHRhYkluZGV4OiAtMSB9KSwgaChcInNsb3RcIiwgbnVsbCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIHsgdHlwZTogXCJ1bmJvdW5kZWRcIiB9KSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tcmlwcGxlLWNvbG9yOnZhcigtLWNvbG9yLXNlbGVjdGVkKTstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QsYXtoZWlnaHQ6MTAwJTtvdXRsaW5lOm5vbmV9YXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7ZmxleC1kaXJlY3Rpb246aW5oZXJpdDstbXMtZmxleC1hbGlnbjppbmhlcml0O2FsaWduLWl0ZW1zOmluaGVyaXQ7LW1zLWZsZXgtcGFjazppbmhlcml0O2p1c3RpZnktY29udGVudDppbmhlcml0O3dpZHRoOjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdXNlci1kcmFnOm5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApe2F7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fTpob3N0KC5pb24tZm9jdXNlZCl7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpe2E6aG92ZXJ7Y29sb3I6dmFyKC0tY29sb3Itc2VsZWN0ZWQpfX06aG9zdCgudGFiLXNlbGVjdGVkKXtjb2xvcjp2YXIoLS1jb2xvci1zZWxlY3RlZCl9Omhvc3QoLnRhYi1oaWRkZW4pe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9Omhvc3QoLnRhYi1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5Oi40fTo6c2xvdHRlZChpb24taWNvbiksOjpzbG90dGVkKGlvbi1sYWJlbCl7ZGlzcGxheTpibG9jazstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjttYXgtd2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fTo6c2xvdHRlZChpb24tbGFiZWwpey1tcy1mbGV4LW9yZGVyOjA7b3JkZXI6MH06OnNsb3R0ZWQoaW9uLWljb24pey1tcy1mbGV4LW9yZGVyOi0xO29yZGVyOi0xO2hlaWdodDoxZW19Omhvc3QoLnRhYi1oYXMtbGFiZWwtb25seSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7d2hpdGUtc3BhY2U6bm9ybWFsfTo6c2xvdHRlZChpb24tYmFkZ2Upey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjF9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1zdGFydCl7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1lbmQpey1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdCgudGFiLWxheW91dC1pY29uLWJvdHRvbSl7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlfTpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1pY29uKSw6aG9zdCgudGFiLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXtkaXNwbGF5Om5vbmV9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX06aG9zdHstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDoycHg7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDoycHg7bWF4LXdpZHRoOjI0MHB4O2ZvbnQtc2l6ZToxMHB4fTpob3N0KC50YWItaGFzLWxhYmVsLW9ubHkpIDo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjEycHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS4xfTo6c2xvdHRlZChpb24tYmFkZ2Upe3BhZGRpbmctbGVmdDo2cHg7cGFkZGluZy1yaWdodDo2cHg7cGFkZGluZy10b3A6MXB4O3BhZGRpbmctYm90dG9tOjFweDtsZWZ0OmNhbGMoNTAlICsgNnB4KTt0b3A6NHB4O2hlaWdodDphdXRvO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChpb24tYmFkZ2Upe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6NnB4O3BhZGRpbmctaW5saW5lLWVuZDo2cHh9fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSxbZGlyPXJ0bF0gOjpzbG90dGVkKGlvbi1iYWRnZSl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDpjYWxjKDUwJSArIDZweCl9OjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tdG9wOjRweDtmb250LXNpemU6MzBweH06OnNsb3R0ZWQoaW9uLWljb246YmVmb3JlKXt2ZXJ0aWNhbC1hbGlnbjp0b3B9OjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXB4O21pbi1oZWlnaHQ6MTFweH06aG9zdCgudGFiLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1sYWJlbCksOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKSw6aG9zdCgudGFiLWxheW91dC1pY29uLXN0YXJ0KSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjF9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1lbmQpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1pY29uKXttaW4td2lkdGg6MjRweDtoZWlnaHQ6MjZweDttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjFweDtmb250LXNpemU6MjRweH06aG9zdCgudGFiLWxheW91dC1pY29uLWJvdHRvbSkgOjpzbG90dGVkKGlvbi1iYWRnZSl7bGVmdDpjYWxjKDUwJSArIDEycHgpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24tYm90dG9tIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC50YWItbGF5b3V0LWljb24tYm90dG9tKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OmNhbGMoNTAlICsgMTJweCl9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXB4fTpob3N0KC50YWItbGF5b3V0LWljb24tYm90dG9tKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tdG9wOjRweH06aG9zdCgudGFiLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1iYWRnZSl7bGVmdDpjYWxjKDUwJSArIDM1cHgpO3RvcDoxMHB4fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24tZW5kIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24tc3RhcnQgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1lbmQpIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC50YWItbGF5b3V0LWljb24tc3RhcnQpIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6Y2FsYyg1MCUgKyAzNXB4KX06aG9zdCgudGFiLWhhcy1sYWJlbC1vbmx5KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6Y2FsYyg1MCUgKyAzMHB4KTt0b3A6MTBweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWhhcy1sYWJlbC1vbmx5IDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24taGlkZSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWhhcy1sYWJlbC1vbmx5KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6Y2FsYyg1MCUgKyAzMHB4KX06aG9zdCgudGFiLWhhcy1pY29uLW9ubHkpIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0KC50YWItbGF5b3V0LWxhYmVsLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2Upe3RvcDoxMHB4fTpob3N0KC50YWItbGF5b3V0LWxhYmVsLWhpZGUpIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVwiOyB9XG59O1xuXG5leHBvcnQgeyBUYWJCYXIgYXMgaW9uX3RhYl9iYXIsIFRhYkJ1dHRvbiBhcyBpb25fdGFiX2J1dHRvbiB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==