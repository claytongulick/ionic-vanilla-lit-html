(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_card, ion_card_content, ion_card_header, ion_card_subtitle, ion_card_title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_content", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_header", function() { return CardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_subtitle", function() { return CardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_title", function() { return CardTitle; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");




const Card = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, a button tag will be rendered and the card will be tappable.
         */
        this.button = false;
        /**
         * The type of the button. Only used when an `onclick` or `button` property is present.
         */
        this.type = 'button';
        /**
         * If `true`, the user cannot interact with the card.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    renderCard(mode) {
        const clickable = this.isClickable();
        if (!clickable) {
            return [
                Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)
            ];
        }
        const { href, routerDirection } = this;
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                rel: this.rel,
                target: this.target
            };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled, onClick: (ev) => Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["o"])(href, ev, routerDirection) }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), clickable && mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({ [mode]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { 'card-disabled': this.disabled, 'ion-activatable': this.isClickable() }) }, this.renderCard(mode)));
    }
    static get style() { return ".sc-ion-card-md-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-md-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-md-h, .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-header , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-subtitle , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-md-s  img {display:block;width:100%}.sc-ion-card-md-s  ion-list {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.card-disabled.sc-ion-card-md-h{cursor:default;opacity:.3;pointer-events:none}.card-native.sc-ion-card-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background)}.card-native.sc-ion-card-md::-moz-focus-inner{border:0}a.sc-ion-card-md, button.sc-ion-card-md{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect.sc-ion-card-md{color:var(--ripple-color)}.sc-ion-card-md-h{--background:var(--ion-item-background,transparent);--color:var(--ion-color-step-550,#737373);margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}"; }
};

const CardContent = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                // Used internally for styling
                [`card-content-${mode}`]: true
            } }));
    }
    static get style() { return "ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:400;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}"; }
};

const CardHeader = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the card header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { 'card-header-translucent': this.translucent, [mode]: true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}"; }
};

const CardSubtitle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "3", class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550,#737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}"; }
};

const CardTitle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "2", class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1jYXJkXzUtbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQzVEO0FBQzhDOztBQUU1RTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUM7QUFDakI7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLDBCQUEwQixVQUFVLGlFQUFpRSw0REFBTyw2QkFBNkIsR0FBRywyREFBQyw4Q0FBOEMsMkRBQUM7QUFDN007QUFDQTtBQUNBLHFCQUFxQiwyREFBVTtBQUMvQixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHFDQUFxQyxlQUFlLEVBQUUsNERBQWtCLGdCQUFnQix3RUFBd0UsR0FBRztBQUM1TDtBQUNBLHdCQUF3QiwyQkFBMkIseUJBQXlCLDBCQUEwQixrQ0FBa0MsbUNBQW1DLGNBQWMsa0JBQWtCLDZCQUE2QixtQkFBbUIsMkNBQTJDLGdCQUFnQiw0QkFBNEIsaUNBQWlDLDZOQUE2TixnQ0FBZ0Msd0JBQXdCLGNBQWMsV0FBVyw2QkFBNkIsY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLGdDQUFnQyxlQUFlLFdBQVcsb0JBQW9CLDRCQUE0QixvQkFBb0Is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Ozs7Ozs7OztBQzVHNUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiI1MFxcY2h1bmtzXFw1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZCBhcyBnZXRJb25Nb2RlLCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBvIGFzIG9wZW5VUkwsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5cbmNvbnN0IENhcmQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGJ1dHRvbiB0YWcgd2lsbCBiZSByZW5kZXJlZCBhbmQgdGhlIGNhcmQgd2lsbCBiZSB0YXBwYWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLiBPbmx5IHVzZWQgd2hlbiBhbiBgb25jbGlja2Agb3IgYGJ1dHRvbmAgcHJvcGVydHkgaXMgcHJlc2VudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgY2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdXNpbmcgYSByb3V0ZXIsIGl0IHNwZWNpZmllcyB0aGUgdHJhbnNpdGlvbiBkaXJlY3Rpb24gd2hlbiBuYXZpZ2F0aW5nIHRvXG4gICAgICAgICAqIGFub3RoZXIgcGFnZSB1c2luZyBgaHJlZmAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICB9XG4gICAgaXNDbGlja2FibGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ocmVmICE9PSB1bmRlZmluZWQgfHwgdGhpcy5idXR0b24pO1xuICAgIH1cbiAgICByZW5kZXJDYXJkKG1vZGUpIHtcbiAgICAgICAgY29uc3QgY2xpY2thYmxlID0gdGhpcy5pc0NsaWNrYWJsZSgpO1xuICAgICAgICBpZiAoIWNsaWNrYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBoKFwic2xvdFwiLCBudWxsKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGhyZWYsIHJvdXRlckRpcmVjdGlvbiB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgVGFnVHlwZSA9IGNsaWNrYWJsZSA/IChocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJykgOiAnZGl2JztcbiAgICAgICAgY29uc3QgYXR0cnMgPSAoVGFnVHlwZSA9PT0gJ2J1dHRvbicpXG4gICAgICAgICAgICA/IHsgdHlwZTogdGhpcy50eXBlIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGRvd25sb2FkOiB0aGlzLmRvd25sb2FkLFxuICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgICAgICByZWw6IHRoaXMucmVsLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXRcbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjbGFzczogXCJjYXJkLW5hdGl2ZVwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgb25DbGljazogKGV2KSA9PiBvcGVuVVJMKGhyZWYsIGV2LCByb3V0ZXJEaXJlY3Rpb24pIH0pLCBoKFwic2xvdFwiLCBudWxsKSwgY2xpY2thYmxlICYmIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBbbW9kZV06IHRydWUgfSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyAnY2FyZC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsICdpb24tYWN0aXZhdGFibGUnOiB0aGlzLmlzQ2xpY2thYmxlKCkgfSkgfSwgdGhpcy5yZW5kZXJDYXJkKG1vZGUpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tY2FyZC1tZC1oey0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4Oy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO292ZXJmbG93OmhpZGRlbn0uaW9uLWNvbG9yLnNjLWlvbi1jYXJkLW1kLWh7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lmlvbi1jb2xvci5zYy1pb24tY2FyZC1tZC1oLCAuc2MtaW9uLWNhcmQtbWQtaC5pb24tY29sb3Iuc2MtaW9uLWNhcmQtbWQtcyAgaW9uLWNhcmQtaGVhZGVyICwgLnNjLWlvbi1jYXJkLW1kLWguaW9uLWNvbG9yLnNjLWlvbi1jYXJkLW1kLXMgIGlvbi1jYXJkLXN1YnRpdGxlICwgLnNjLWlvbi1jYXJkLW1kLWguaW9uLWNvbG9yLnNjLWlvbi1jYXJkLW1kLXMgIGlvbi1jYXJkLXRpdGxlIHtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tY2FyZC1tZC1zICBpbWcge2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uc2MtaW9uLWNhcmQtbWQtcyAgaW9uLWxpc3Qge21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uY2FyZC1kaXNhYmxlZC5zYy1pb24tY2FyZC1tZC1oe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjM7cG9pbnRlci1ldmVudHM6bm9uZX0uY2FyZC1uYXRpdmUuc2MtaW9uLWNhcmQtbWR7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCl9LmNhcmQtbmF0aXZlLnNjLWlvbi1jYXJkLW1kOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWEuc2MtaW9uLWNhcmQtbWQsIGJ1dHRvbi5zYy1pb24tY2FyZC1tZHtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLWRyYWc6bm9uZX1pb24tcmlwcGxlLWVmZmVjdC5zYy1pb24tY2FyZC1tZHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IpfS5zYy1pb24tY2FyZC1tZC1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDoxMHB4O21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjEwcHg7Ym9yZGVyLXJhZGl1czo0cHg7Zm9udC1zaXplOjE0cHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7Ym94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2MtaW9uLWNhcmQtbWQtaHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTBweDttYXJnaW4taW5saW5lLXN0YXJ0OjEwcHg7LXdlYmtpdC1tYXJnaW4tZW5kOjEwcHg7bWFyZ2luLWlubGluZS1lbmQ6MTBweH19XCI7IH1cbn07XG5cbmNvbnN0IENhcmRDb250ZW50ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgW2BjYXJkLWNvbnRlbnQtJHttb2RlfWBdOiB0cnVlXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiaW9uLWNhcmQtY29udGVudHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJkLWNvbnRlbnQtbWR7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5jYXJkLWNvbnRlbnQtbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fS5jYXJkLWNvbnRlbnQtbWQgaDF7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NDAwfS5jYXJkLWNvbnRlbnQtbWQgaDJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDB9LmNhcmQtY29udGVudC1tZCBoMywuY2FyZC1jb250ZW50LW1kIGg0LC5jYXJkLWNvbnRlbnQtbWQgaDUsLmNhcmQtY29udGVudC1tZCBoNnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MnB4O21hcmdpbi1ib3R0b206MnB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0uY2FyZC1jb250ZW50LW1kIHB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNX1pb24tY2FyZC1oZWFkZXIrLmNhcmQtY29udGVudC1tZHtwYWRkaW5nLXRvcDowfVwiOyB9XG59O1xuXG5jb25zdCBDYXJkSGVhZGVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGNhcmQgaGVhZGVyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyAnY2FyZC1oZWFkZXItdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50LCBbbW9kZV06IHRydWUgfSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZChpb24tY2FyZC1zdWJ0aXRsZSksOmhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKGlvbi1jYXJkLXRpdGxlKXtjb2xvcjpjdXJyZW50Q29sb3J9Omhvc3R7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MTZweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fTo6c2xvdHRlZChpb24tY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSksOjpzbG90dGVkKGlvbi1jYXJkLXRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpKXttYXJnaW4tdG9wOjhweH1cIjsgfVxufTtcblxuY29uc3QgQ2FyZFN1YnRpdGxlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJoZWFkaW5nXCIsIFwiYXJpYS1sZXZlbFwiOiBcIjNcIiwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUgfSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0ey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH1cIjsgfVxufTtcblxuY29uc3QgQ2FyZFRpdGxlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJoZWFkaW5nXCIsIFwiYXJpYS1sZXZlbFwiOiBcIjJcIiwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUgfSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0ey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCMyNjI2MjYpO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxLjJ9XCI7IH1cbn07XG5cbmV4cG9ydCB7IENhcmQgYXMgaW9uX2NhcmQsIENhcmRDb250ZW50IGFzIGlvbl9jYXJkX2NvbnRlbnQsIENhcmRIZWFkZXIgYXMgaW9uX2NhcmRfaGVhZGVyLCBDYXJkU3VidGl0bGUgYXMgaW9uX2NhcmRfc3VidGl0bGUsIENhcmRUaXRsZSBhcyBpb25fY2FyZF90aXRsZSB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==