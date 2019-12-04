(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js ***!
  \**************************************************************************/
/*! exports provided: ion_action_sheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_action_sheet", function() { return ActionSheet; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");







/**
 * iOS Action Sheet Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.4);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Action Sheet Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.4, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const ActionSheet = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * An array of buttons for the action sheet.
         */
        this.buttons = [];
        /**
         * If `true`, the action sheet will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the action sheet will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the action sheet will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
        };
        this.dispatchCancelHandler = (ev) => {
            const role = ev.detail.role;
            if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
                const cancelButton = this.getButtons().find(b => b.role === 'cancel');
                this.callButtonHandler(cancelButton);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetDidPresent", 7);
        this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetWillPresent", 7);
        this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetWillDismiss", 7);
        this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetDidDismiss", 7);
    }
    /**
     * Present the action sheet overlay after it has been created.
     */
    present() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
    }
    /**
     * Dismiss the action sheet overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the action sheet did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionActionSheetDidDismiss');
    }
    /**
     * Returns a promise that resolves when the action sheet will dismiss.
     *
     */
    onWillDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionActionSheetWillDismiss');
    }
    async buttonClick(button) {
        const role = button.role;
        if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
            return this.dismiss(undefined, role);
        }
        const shouldDismiss = await this.callButtonHandler(button);
        if (shouldDismiss) {
            return this.dismiss(undefined, button.role);
        }
        return Promise.resolve();
    }
    async callButtonHandler(button) {
        if (button) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            const rtn = await Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler);
            if (rtn === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
        }
        return true;
    }
    getButtons() {
        return this.buttons.map(b => {
            return (typeof b === 'string')
                ? { text: b }
                : b;
        });
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const allButtons = this.getButtons();
        const cancelButton = allButtons.find(b => b.role === 'cancel');
        const buttons = allButtons.filter(b => b.role !== 'cancel');
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "dialog", "aria-modal": "true", style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, class: Object.assign(Object.assign({ [mode]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), { 'action-sheet-translucent': this.translucent }), onIonActionSheetWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { tappable: this.backdropDismiss }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "action-sheet-wrapper", role: "dialog" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "action-sheet-container" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "action-sheet-group" }, this.header !== undefined &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "action-sheet-title" }, this.header, this.subHeader && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "action-sheet-sub-title" }, this.subHeader)), buttons.map(b => Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", "ion-activatable": true, class: buttonClass(b), onClick: () => this.buttonClick(b) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "action-sheet-button-inner" }, b.icon && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }), b.text), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)))), cancelButton &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "action-sheet-group action-sheet-group-cancel" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClass(cancelButton), onClick: () => this.buttonClick(cancelButton) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "action-sheet-button-inner" }, cancelButton.icon &&
                Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }), cancelButton.text)))))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ".sc-ion-action-sheet-ios-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-ios{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--background-selected:var(--ion-background-color,#fff);--background-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.08);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected)}}.action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent));background-image:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;color:var(--color,var(--ion-color-primary,#3880ff));font-size:20px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:700}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:600}"; }
};
const buttonClass = (button) => {
    return Object.assign({ 'action-sheet-button': true, 'ion-activatable': true, [`action-sheet-${button.role}`]: button.role !== undefined }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1hY3Rpb24tc2hlZXQtaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDQztBQUNnQztBQUN5RjtBQUNqRzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekMsOEJBQThCLGdFQUFlO0FBQzdDLDZCQUE2QixnRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekMsOEJBQThCLGdFQUFlO0FBQzdDLDZCQUE2QixnRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekMsOEJBQThCLGdFQUFlO0FBQzdDLDZCQUE2QixnRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekMsOEJBQThCLGdFQUFlO0FBQzdDLDZCQUE2QixnRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0Esb0JBQW9CLDJEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdURBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBYztBQUN0QiwwQkFBMEIsMkRBQVc7QUFDckMsMkJBQTJCLDJEQUFXO0FBQ3RDLDJCQUEyQiwyREFBVztBQUN0QywwQkFBMEIsMkRBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekIsMkJBQTJCLDBCQUEwQjtBQUNyRCxhQUFhLHNDQUFzQyxlQUFlLEVBQUUsNERBQVcsbUJBQW1CLCtDQUErQyxrR0FBa0csRUFBRSwyREFBQyxrQkFBa0IsaUNBQWlDLEdBQUcsMkRBQUMsU0FBUyxnREFBZ0QsRUFBRSwyREFBQyxTQUFTLGtDQUFrQyxFQUFFLDJEQUFDLFNBQVMsOEJBQThCO0FBQzliLFlBQVksMkRBQUMsU0FBUyw4QkFBOEIsaUNBQWlDLDJEQUFDLFNBQVMsa0NBQWtDLHFDQUFxQywyREFBQyxZQUFZLHFHQUFxRyxFQUFFLDJEQUFDLFVBQVUscUNBQXFDLFlBQVksMkRBQUMsY0FBYyx3REFBd0QsNkJBQTZCLDJEQUFDO0FBQzNiLFlBQVksMkRBQUMsU0FBUyx3REFBd0QsRUFBRSwyREFBQyxZQUFZLGtHQUFrRyxFQUFFLDJEQUFDLFVBQVUscUNBQXFDO0FBQ2pQLGdCQUFnQiwyREFBQyxjQUFjLG1FQUFtRTtBQUNsRztBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLHdCQUF3QixvQ0FBb0MsZ0JBQWdCLGlCQUFpQixhQUFhLGtCQUFrQixrQkFBa0IsY0FBYyxrQkFBa0Isa0NBQWtDLG1DQUFtQyxPQUFPLFFBQVEsTUFBTSxTQUFTLGNBQWMsZUFBZSwyQ0FBMkMsc0JBQXNCLGtCQUFrQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsYUFBYSwwQ0FBMEMsYUFBYSw4Q0FBOEMsT0FBTyxRQUFRLFNBQVMsZ0JBQWdCLG1CQUFtQix3Q0FBd0MsZ0NBQWdDLGNBQWMsa0JBQWtCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLHFCQUFxQiw2QkFBNkIsNkJBQTZCLFdBQVcsb0JBQW9CLDZDQUE2QyxjQUFjLFdBQVcsU0FBUyxhQUFhLG9CQUFvQix1REFBdUQsdUNBQXVDLG1EQUFtRCxvQkFBb0IsYUFBYSx5QkFBeUIscUJBQXFCLG9CQUFvQixjQUFjLHNCQUFzQixtQkFBbUIscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksZ0RBQWdELG9CQUFvQixhQUFhLHFCQUFxQixpQkFBaUIsa0JBQWtCLHlCQUF5QixZQUFZLGdCQUFnQiw0Q0FBNEMsb0JBQW9CLGNBQWMsOEJBQThCLGdCQUFnQixpQ0FBaUMsbUJBQW1CLDZCQUE2QiwrREFBK0QsYUFBYSxtREFBbUQsb0JBQW9CLGNBQWMsZ0JBQWdCLDJCQUEyQixtRkFBbUYsdURBQXVELGtFQUFrRSxrQkFBa0IsOENBQThDLGlCQUFpQixrQkFBa0Isc0NBQXNDLDRDQUE0Qyw2RkFBNkYsOENBQThDLGtCQUFrQixtQkFBbUIsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLGdEQUFnRCxpQkFBaUIsa0JBQWtCLGNBQWMsaUJBQWlCLDZGQUE2RixnREFBZ0QsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLHdCQUF3Qix3QkFBd0IsNENBQTRDLG1CQUFtQixrQkFBa0IsZ0JBQWdCLHdEQUF3RCxnQkFBZ0IsdURBQXVELG1CQUFtQiw0RUFBNEUsZ0dBQWdHLDZCQUE2QixrREFBa0QsMENBQTBDLGtNQUFrTSw2QkFBNkIsc2FBQXNhLGlWQUFpViw0QkFBNEIsK0JBQStCLCtDQUErQyx1Q0FBdUMsK0JBQStCLDJHQUEyRyxzRUFBc0Usc0JBQXNCLGlHQUFpRyx1Q0FBdUMsMEZBQTBGLDZCQUE2QixxTUFBcU0sNklBQTZJLDRCQUE0QiwyQkFBMkIseUJBQXlCLDRDQUE0QyxrQkFBa0IsbUJBQW1CLGlCQUFpQixvQkFBb0Isa0RBQWtELGVBQWUsZ0JBQWdCLGtCQUFrQiw2RkFBNkYsNENBQTRDLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQix5QkFBeUIseUJBQXlCLGdEQUFnRCxlQUFlLGdCQUFnQixpQkFBaUIsaUJBQWlCLGVBQWUsNkNBQTZDLGtCQUFrQixtQkFBbUIsaUJBQWlCLG9CQUFvQixZQUFZLG9EQUFvRCxlQUFlLGVBQWUsNkZBQTZGLDZDQUE2QyxtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5Qix3RkFBd0Ysa0JBQWtCLGVBQWUsNkZBQTZGLHdGQUF3RixtQkFBbUIsd0JBQXdCLHdCQUF3Qix3REFBd0Qsc0JBQXNCLCtDQUErQyxzQ0FBc0MsZ0JBQWdCLGtEQUFrRCxzQ0FBc0MsNkNBQTZDLHNDQUFzQyxnQkFBZ0IsRUFBRTtBQUN4ek87QUFDQTtBQUNBLDBCQUEwQix3RUFBd0UsWUFBWSwrQkFBK0IsRUFBRSw0REFBVztBQUMxSjs7QUFFMkM7Ozs7Ozs7Ozs7Ozs7QUNsTjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiNDFcXGNodW5rc1xcNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCB7IEIgYXMgQkFDS0RST1AsIGkgYXMgaXNDYW5jZWwsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5cbi8qKlxyXG4gKiBpT1MgQWN0aW9uIFNoZWV0IEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuNCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24tc2hlZXQtd3JhcHBlcicpKVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDEwMCUpJywgJ3RyYW5zbGF0ZVkoMCUpJyk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxyXG4gICAgICAgIC5kdXJhdGlvbig0MDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIGlPUyBBY3Rpb24gU2hlZXQgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJywgJ3RyYW5zbGF0ZVkoMTAwJSknKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDQ1MClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogTUQgQWN0aW9uIFNoZWV0IEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24tc2hlZXQtd3JhcHBlcicpKVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDEwMCUpJywgJ3RyYW5zbGF0ZVkoMCUpJyk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxyXG4gICAgICAgIC5kdXJhdGlvbig0MDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1EIEFjdGlvbiBTaGVldCBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMzIsIDApO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSlcclxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCAndHJhbnNsYXRlWSgxMDAlKScpO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oNDUwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbmNvbnN0IEFjdGlvblNoZWV0ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgYnV0dG9ucyBmb3IgdGhlIGFjdGlvbiBzaGVldC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWN0aW9uIHNoZWV0IHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhY3Rpb24gc2hlZXQgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWN0aW9uIHNoZWV0IHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb2xlID0gZXYuZGV0YWlsLnJvbGU7XG4gICAgICAgICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0aGlzLmdldEJ1dHRvbnMoKS5maW5kKGIgPT4gYi5yb2xlID09PSAnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihjYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BY3Rpb25TaGVldERpZFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0V2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0V2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWN0aW9uU2hlZXREaWREaXNtaXNzXCIsIDcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IHRoZSBhY3Rpb24gc2hlZXQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIHByZXNlbnQoKSB7XG4gICAgICAgIHJldHVybiBwcmVzZW50KHRoaXMsICdhY3Rpb25TaGVldEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBhY3Rpb24gc2hlZXQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIGFjdGlvbiBzaGVldC5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgYWN0aW9uIHNoZWV0LlxuICAgICAqIFNvbWUgZXhhbXBsZXMgaW5jbHVkZTogYGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIFwic2VsZWN0ZWRcImAsIGFuZCBgXCJiYWNrZHJvcFwiYC5cbiAgICAgKi9cbiAgICBkaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ2FjdGlvblNoZWV0TGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWN0aW9uIHNoZWV0IGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uRGlkRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BY3Rpb25TaGVldERpZERpc21pc3MnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhY3Rpb24gc2hlZXQgd2lsbCBkaXNtaXNzLlxuICAgICAqXG4gICAgICovXG4gICAgb25XaWxsRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BY3Rpb25TaGVldFdpbGxEaXNtaXNzJyk7XG4gICAgfVxuICAgIGFzeW5jIGJ1dHRvbkNsaWNrKGJ1dHRvbikge1xuICAgICAgICBjb25zdCByb2xlID0gYnV0dG9uLnJvbGU7XG4gICAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIHJvbGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZERpc21pc3MgPSBhd2FpdCB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbik7XG4gICAgICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgYnV0dG9uLnJvbGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgYXN5bmMgY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uKSB7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIC8vIGEgaGFuZGxlciBoYXMgYmVlbiBwcm92aWRlZCwgZXhlY3V0ZSBpdFxuICAgICAgICAgICAgLy8gcGFzcyB0aGUgaGFuZGxlciB0aGUgdmFsdWVzIGZyb20gdGhlIGlucHV0c1xuICAgICAgICAgICAgY29uc3QgcnRuID0gYXdhaXQgc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKHJ0biA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBoYW5kbGVyIGlzIGZhbHNlIHRoZW4gZG8gbm90IGRpc21pc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldEJ1dHRvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnMubWFwKGIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgPyB7IHRleHQ6IGIgfVxuICAgICAgICAgICAgICAgIDogYjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGFsbEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gYWxsQnV0dG9ucy5maW5kKGIgPT4gYi5yb2xlID09PSAnY2FuY2VsJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBhbGxCdXR0b25zLmZpbHRlcihiID0+IGIucm9sZSAhPT0gJ2NhbmNlbCcpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImRpYWxvZ1wiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgekluZGV4OiBgJHsyMDAwMCArIHRoaXMub3ZlcmxheUluZGV4fWAsXG4gICAgICAgICAgICB9LCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgW21vZGVdOiB0cnVlIH0sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgeyAnYWN0aW9uLXNoZWV0LXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCB9KSwgb25Jb25BY3Rpb25TaGVldFdpbGxEaXNtaXNzOiB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciwgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtd3JhcHBlclwiLCByb2xlOiBcImRpYWxvZ1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtY29udGFpbmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1ncm91cFwiIH0sIHRoaXMuaGVhZGVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtdGl0bGVcIiB9LCB0aGlzLmhlYWRlciwgdGhpcy5zdWJIZWFkZXIgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1zdWItdGl0bGVcIiB9LCB0aGlzLnN1YkhlYWRlcikpLCBidXR0b25zLm1hcChiID0+IGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBcImlvbi1hY3RpdmF0YWJsZVwiOiB0cnVlLCBjbGFzczogYnV0dG9uQ2xhc3MoYiksIG9uQ2xpY2s6ICgpID0+IHRoaXMuYnV0dG9uQ2xpY2soYikgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyXCIgfSwgYi5pY29uICYmIGgoXCJpb24taWNvblwiLCB7IGljb246IGIuaWNvbiwgbGF6eTogZmFsc2UsIGNsYXNzOiBcImFjdGlvbi1zaGVldC1pY29uXCIgfSksIGIudGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSkpLCBjYW5jZWxCdXR0b24gJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtZ3JvdXAgYWN0aW9uLXNoZWV0LWdyb3VwLWNhbmNlbFwiIH0sIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzczogYnV0dG9uQ2xhc3MoY2FuY2VsQnV0dG9uKSwgb25DbGljazogKCkgPT4gdGhpcy5idXR0b25DbGljayhjYW5jZWxCdXR0b24pIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lclwiIH0sIGNhbmNlbEJ1dHRvbi5pY29uICYmXG4gICAgICAgICAgICAgICAgaChcImlvbi1pY29uXCIsIHsgaWNvbjogY2FuY2VsQnV0dG9uLmljb24sIGxhenk6IGZhbHNlLCBjbGFzczogXCJhY3Rpb24tc2hlZXQtaWNvblwiIH0pLCBjYW5jZWxCdXR0b24udGV4dCkpKSkpKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaHstLWNvbG9yOmluaXRpYWw7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOjEwMCU7LS1tYXgtd2lkdGg6NTAwcHg7LS1taW4taGVpZ2h0OmF1dG87LS1oZWlnaHQ6MTAwJTstLW1heC1oZWlnaHQ6MTAwJTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaHtkaXNwbGF5Om5vbmV9LmFjdGlvbi1zaGVldC13cmFwcGVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OmluaGVyaXR9LmFjdGlvbi1zaGVldC1idXR0b24uYWN0aXZhdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpfS5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDoxMDAlfS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7LW1zLWZsZXgtbmVnYXRpdmU6MjtmbGV4LXNocmluazoyO292ZXJzY3JvbGwtYmVoYXZpb3IteTpjb250YWluO292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtwb2ludGVyLWV2ZW50czphbGw7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKX0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9LmFjdGlvbi1zaGVldC1ncm91cC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO292ZXJmbG93OmhpZGRlbn0uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsI2Y5ZjlmOSkpOy0tYmFja2dyb3VuZC1zZWxlY3RlZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwwLjA4KTt0ZXh0LWFsaWduOmNlbnRlcn0uYWN0aW9uLXNoZWV0LXdyYXBwZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tdG9wOnZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLDApO21hcmdpbi1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sMCl9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtd3JhcHBlci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3ttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0b319LmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHh9fS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7Ym9yZGVyLXJhZGl1czoxM3B4O21hcmdpbi1ib3R0b206OHB4O292ZXJmbG93OmhpZGRlbn0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MTBweH0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbToxMHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7LmFjdGlvbi1zaGVldC10cmFuc2x1Y2VudC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgyODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgyODAlKSBibHVyKDIwcHgpfS5hY3Rpb24tc2hlZXQtdHJhbnNsdWNlbnQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcywgLmFjdGlvbi1zaGVldC10cmFuc2x1Y2VudC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgYm90dG9tLGxlZnQgdG9wLGZyb20ocmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSksdG8ocmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSkpLC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgYm90dG9tLGxlZnQgdG9wLGZyb20ocmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC40KSksY29sb3Itc3RvcCg1MCUscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC40KSksY29sb3Itc3RvcCg1MCUscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSxyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpIDEwMCUpLGxpbmVhci1ncmFkaWVudCgwZGVnLHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuNCkscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC40KSA1MCUscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSAwKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3AsYm90dG9tO2JhY2tncm91bmQtc2l6ZToxMDAlIGNhbGMoMTAwJSAtIDFweCksMTAwJSAxcHg7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTIwJSk7YmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDEyMCUpfS5hY3Rpb24tc2hlZXQtdHJhbnNsdWNlbnQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjcpO2JhY2tncm91bmQtaW1hZ2U6bm9uZX0uYWN0aW9uLXNoZWV0LXRyYW5zbHVjZW50LnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLWggLmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLXNlbGVjdGVkKX19LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MsIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgYm90dG9tLGxlZnQgdG9wLGZyb20ocmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4wOCkpLGNvbG9yLXN0b3AoNTAlLHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMDgpKSxjb2xvci1zdG9wKDUwJSx0cmFuc3BhcmVudCkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4wOCkscmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4wOCkgNTAlLHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbTtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxcHh9LmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3twYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy10b3A6MTRweDtwYWRkaW5nLWJvdHRvbToxM3B4O2NvbG9yOnZhcigtLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246Y2VudGVyfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMHB4O3BhZGRpbmctaW5saW5lLWVuZDoxMHB4fX0uYWN0aW9uLXNoZWV0LXN1Yi10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3twYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MTVweDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZToxMnB4fS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze3BhZGRpbmctbGVmdDoxOHB4O3BhZGRpbmctcmlnaHQ6MThweDtwYWRkaW5nLXRvcDoxOHB4O3BhZGRpbmctYm90dG9tOjE4cHg7aGVpZ2h0OjU2cHg7Y29sb3I6dmFyKC0tY29sb3IsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpO2ZvbnQtc2l6ZToyMHB4O2NvbnRhaW46c3RyaWN0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MThweDtwYWRkaW5nLWlubGluZS1zdGFydDoxOHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MThweDtwYWRkaW5nLWlubGluZS1lbmQ6MThweH19LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MgLmFjdGlvbi1zaGVldC1pY29uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze21hcmdpbi1yaWdodDouMWVtO2ZvbnQtc2l6ZToyOHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyAuYWN0aW9uLXNoZWV0LWljb24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDouMWVtO21hcmdpbi1pbmxpbmUtZW5kOi4xZW19fS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7YmFja2dyb3VuZC1pbWFnZTpub25lfS5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLXNlbGVjdGVkKTtmb250LXdlaWdodDo3MDB9LmFjdGlvbi1zaGVldC1kZXN0cnVjdGl2ZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCNmMDQxNDEpfS5hY3Rpb24tc2hlZXQtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1zZWxlY3RlZCk7Zm9udC13ZWlnaHQ6NjAwfVwiOyB9XG59O1xuY29uc3QgYnV0dG9uQ2xhc3MgPSAoYnV0dG9uKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAnYWN0aW9uLXNoZWV0LWJ1dHRvbic6IHRydWUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLCBbYGFjdGlvbi1zaGVldC0ke2J1dHRvbi5yb2xlfWBdOiBidXR0b24ucm9sZSAhPT0gdW5kZWZpbmVkIH0sIGdldENsYXNzTWFwKGJ1dHRvbi5jc3NDbGFzcykpO1xufTtcblxuZXhwb3J0IHsgQWN0aW9uU2hlZXQgYXMgaW9uX2FjdGlvbl9zaGVldCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==