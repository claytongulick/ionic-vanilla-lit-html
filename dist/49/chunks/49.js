(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js":
/*!********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js ***!
  \********************************************************************/
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
    static get style() { return ".sc-ion-card-ios-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-ios-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-ios-h, .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-header , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-ios-s  img {display:block;width:100%}.sc-ion-card-ios-s  ion-list {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.card-disabled.sc-ion-card-ios-h{cursor:default;opacity:.3;pointer-events:none}.card-native.sc-ion-card-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background)}.card-native.sc-ion-card-ios::-moz-focus-inner{border:0}a.sc-ion-card-ios, button.sc-ion-card-ios{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect.sc-ion-card-ios{color:var(--ripple-color)}.sc-ion-card-ios-h{--background:var(--ion-item-background,transparent);--color:var(--ion-color-step-600,#666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1),-webkit-transform .5s cubic-bezier(.12,.72,.29,1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.12);box-shadow:0 4px 16px rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.activated.sc-ion-card-ios-h{-webkit-transform:scale3d(.97,.97,1);transform:scale3d(.97,.97,1)}"; }
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
    static get style() { return "ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}"; }
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
    static get style() { return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}"; }
};

const CardSubtitle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "3", class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600,#666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}"; }
};

const CardTitle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "2", class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color,#000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1jYXJkXzUtaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUM1RDtBQUM4Qzs7QUFFNUU7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQywwQkFBMEIsVUFBVSxpRUFBaUUsNERBQU8sNkJBQTZCLEdBQUcsMkRBQUMsOENBQThDLDJEQUFDO0FBQzdNO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxxQ0FBcUMsZUFBZSxFQUFFLDREQUFrQixnQkFBZ0Isd0VBQXdFLEdBQUc7QUFDNUw7QUFDQSx3QkFBd0IsNEJBQTRCLHlCQUF5QiwwQkFBMEIsa0NBQWtDLG1DQUFtQyxjQUFjLGtCQUFrQiw2QkFBNkIsbUJBQW1CLDJDQUEyQyxnQkFBZ0IsNkJBQTZCLGlDQUFpQyxvT0FBb08sZ0NBQWdDLHlCQUF5QixjQUFjLFdBQVcsOEJBQThCLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixpQ0FBaUMsZUFBZSxXQUFXLG9CQUFvQiw2QkFBNkIsb0JBQW9C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QWEsZ0JBQWdCLGVBQWUsZ0JBQWdCLGNBQWMsaUJBQWlCLGVBQWUsZ0JBQWdCLGdCQUFnQixFQUFFO0FBQzFWOztBQUU0Sjs7Ozs7Ozs7Ozs7OztBQzVHNUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiI0OVxcY2h1bmtzXFw0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZCBhcyBnZXRJb25Nb2RlLCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBvIGFzIG9wZW5VUkwsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5cbmNvbnN0IENhcmQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGJ1dHRvbiB0YWcgd2lsbCBiZSByZW5kZXJlZCBhbmQgdGhlIGNhcmQgd2lsbCBiZSB0YXBwYWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLiBPbmx5IHVzZWQgd2hlbiBhbiBgb25jbGlja2Agb3IgYGJ1dHRvbmAgcHJvcGVydHkgaXMgcHJlc2VudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgY2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdXNpbmcgYSByb3V0ZXIsIGl0IHNwZWNpZmllcyB0aGUgdHJhbnNpdGlvbiBkaXJlY3Rpb24gd2hlbiBuYXZpZ2F0aW5nIHRvXG4gICAgICAgICAqIGFub3RoZXIgcGFnZSB1c2luZyBgaHJlZmAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICB9XG4gICAgaXNDbGlja2FibGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ocmVmICE9PSB1bmRlZmluZWQgfHwgdGhpcy5idXR0b24pO1xuICAgIH1cbiAgICByZW5kZXJDYXJkKG1vZGUpIHtcbiAgICAgICAgY29uc3QgY2xpY2thYmxlID0gdGhpcy5pc0NsaWNrYWJsZSgpO1xuICAgICAgICBpZiAoIWNsaWNrYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBoKFwic2xvdFwiLCBudWxsKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGhyZWYsIHJvdXRlckRpcmVjdGlvbiB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgVGFnVHlwZSA9IGNsaWNrYWJsZSA/IChocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJykgOiAnZGl2JztcbiAgICAgICAgY29uc3QgYXR0cnMgPSAoVGFnVHlwZSA9PT0gJ2J1dHRvbicpXG4gICAgICAgICAgICA/IHsgdHlwZTogdGhpcy50eXBlIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGRvd25sb2FkOiB0aGlzLmRvd25sb2FkLFxuICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgICAgICByZWw6IHRoaXMucmVsLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXRcbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjbGFzczogXCJjYXJkLW5hdGl2ZVwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgb25DbGljazogKGV2KSA9PiBvcGVuVVJMKGhyZWYsIGV2LCByb3V0ZXJEaXJlY3Rpb24pIH0pLCBoKFwic2xvdFwiLCBudWxsKSwgY2xpY2thYmxlICYmIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBbbW9kZV06IHRydWUgfSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyAnY2FyZC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsICdpb24tYWN0aXZhdGFibGUnOiB0aGlzLmlzQ2xpY2thYmxlKCkgfSkgfSwgdGhpcy5yZW5kZXJDYXJkKG1vZGUpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tY2FyZC1pb3MtaHstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHg7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtvdmVyZmxvdzpoaWRkZW59Lmlvbi1jb2xvci5zYy1pb24tY2FyZC1pb3MtaHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uaW9uLWNvbG9yLnNjLWlvbi1jYXJkLWlvcy1oLCAuc2MtaW9uLWNhcmQtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1jYXJkLWlvcy1zICBpb24tY2FyZC1oZWFkZXIgLCAuc2MtaW9uLWNhcmQtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1jYXJkLWlvcy1zICBpb24tY2FyZC1zdWJ0aXRsZSAsIC5zYy1pb24tY2FyZC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLWNhcmQtaW9zLXMgIGlvbi1jYXJkLXRpdGxlIHtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tY2FyZC1pb3MtcyAgaW1nIHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9LnNjLWlvbi1jYXJkLWlvcy1zICBpb24tbGlzdCB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5jYXJkLWRpc2FibGVkLnNjLWlvbi1jYXJkLWlvcy1oe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjM7cG9pbnRlci1ldmVudHM6bm9uZX0uY2FyZC1uYXRpdmUuc2MtaW9uLWNhcmQtaW9ze2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpOy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpfS5jYXJkLW5hdGl2ZS5zYy1pb24tY2FyZC1pb3M6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9YS5zYy1pb24tY2FyZC1pb3MsIGJ1dHRvbi5zYy1pb24tY2FyZC1pb3N7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1kcmFnOm5vbmV9aW9uLXJpcHBsZS1lZmZlY3Quc2MtaW9uLWNhcmQtaW9ze2NvbG9yOnZhcigtLXJpcHBsZS1jb2xvcil9LnNjLWlvbi1jYXJkLWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHRyYW5zcGFyZW50KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KTttYXJnaW4tbGVmdDoxNnB4O21hcmdpbi1yaWdodDoxNnB4O21hcmdpbi10b3A6MjRweDttYXJnaW4tYm90dG9tOjI0cHg7Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMTIsLjcyLC4yOSwxKTt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjEyLC43MiwuMjksMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMTIsLjcyLC4yOSwxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4xMiwuNzIsLjI5LDEpLC13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjEyLC43MiwuMjksMSk7Zm9udC1zaXplOjE0cHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpO2JveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMil9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zYy1pb24tY2FyZC1pb3MtaHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweH19LmFjdGl2YXRlZC5zYy1pb24tY2FyZC1pb3MtaHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywxKX1cIjsgfVxufTtcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBbYGNhcmQtY29udGVudC0ke21vZGV9YF06IHRydWVcbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJpb24tY2FyZC1jb250ZW50e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LmNhcmQtY29udGVudC1pb3N7cGFkZGluZy1sZWZ0OjIwcHg7cGFkZGluZy1yaWdodDoyMHB4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MjBweDtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoxLjR9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5jYXJkLWNvbnRlbnQtaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4fX0uY2FyZC1jb250ZW50LWlvcyBoMXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo0MDB9LmNhcmQtY29udGVudC1pb3MgaDJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDB9LmNhcmQtY29udGVudC1pb3MgaDMsLmNhcmQtY29udGVudC1pb3MgaDQsLmNhcmQtY29udGVudC1pb3MgaDUsLmNhcmQtY29udGVudC1pb3MgaDZ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9LmNhcmQtY29udGVudC1pb3MgcHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjJweDtmb250LXNpemU6MTRweH1cIjsgfVxufTtcblxuY29uc3QgQ2FyZEhlYWRlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjYXJkIGhlYWRlciB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIHsgJ2NhcmQtaGVhZGVyLXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCwgW21vZGVdOiB0cnVlIH0pIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QoLmlvbi1jb2xvcil7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW9uLWNvbG9yKSA6OnNsb3R0ZWQoaW9uLWNhcmQtc3VidGl0bGUpLDpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZChpb24tY2FyZC10aXRsZSl7Y29sb3I6Y3VycmVudENvbG9yfTpob3N0e3BhZGRpbmctbGVmdDoyMHB4O3BhZGRpbmctcmlnaHQ6MjBweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjE2cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4fX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkpezpob3N0KC5jYXJkLWhlYWRlci10cmFuc2x1Y2VudCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjkpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCk7YmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMzBweCl9fVwiOyB9XG59O1xuXG5jb25zdCBDYXJkU3VidGl0bGUgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImhlYWRpbmdcIiwgXCJhcmlhLWxldmVsXCI6IFwiM1wiLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCB7IFttb2RlXTogdHJ1ZSB9KSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nik7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo0cHg7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6LjRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9XCI7IH1cbn07XG5cbmNvbnN0IENhcmRUaXRsZSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwiaGVhZGluZ1wiLCBcImFyaWEtbGV2ZWxcIjogXCIyXCIsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIHsgW21vZGVdOiB0cnVlIH0pIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdHstLWNvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZToyOHB4O2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxLjJ9XCI7IH1cbn07XG5cbmV4cG9ydCB7IENhcmQgYXMgaW9uX2NhcmQsIENhcmRDb250ZW50IGFzIGlvbl9jYXJkX2NvbnRlbnQsIENhcmRIZWFkZXIgYXMgaW9uX2NhcmRfaGVhZGVyLCBDYXJkU3VidGl0bGUgYXMgaW9uX2NhcmRfc3VidGl0bGUsIENhcmRUaXRsZSBhcyBpb25fY2FyZF90aXRsZSB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==