(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js ***!
  \*************************************************************************/
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
    static get style() { return ".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1hY3Rpb24tc2hlZXQtbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMvRjtBQUNDO0FBQ2dDO0FBQ3lGO0FBQ2pHOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6Qyw4QkFBOEIsZ0VBQWU7QUFDN0MsNkJBQTZCLGdFQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6Qyw4QkFBOEIsZ0VBQWU7QUFDN0MsNkJBQTZCLGdFQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6Qyw4QkFBOEIsZ0VBQWU7QUFDN0MsNkJBQTZCLGdFQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6Qyw4QkFBOEIsZ0VBQWU7QUFDN0MsNkJBQTZCLGdFQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQSxvQkFBb0IsMkRBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1REFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFjO0FBQ3RCLDBCQUEwQiwyREFBVztBQUNyQywyQkFBMkIsMkRBQVc7QUFDdEMsMkJBQTJCLDJEQUFXO0FBQ3RDLDBCQUEwQiwyREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtEQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QiwyQkFBMkIsMEJBQTBCO0FBQ3JELGFBQWEsc0NBQXNDLGVBQWUsRUFBRSw0REFBVyxtQkFBbUIsK0NBQStDLGtHQUFrRyxFQUFFLDJEQUFDLGtCQUFrQixpQ0FBaUMsR0FBRywyREFBQyxTQUFTLGdEQUFnRCxFQUFFLDJEQUFDLFNBQVMsa0NBQWtDLEVBQUUsMkRBQUMsU0FBUyw4QkFBOEI7QUFDOWIsWUFBWSwyREFBQyxTQUFTLDhCQUE4QixpQ0FBaUMsMkRBQUMsU0FBUyxrQ0FBa0MscUNBQXFDLDJEQUFDLFlBQVkscUdBQXFHLEVBQUUsMkRBQUMsVUFBVSxxQ0FBcUMsWUFBWSwyREFBQyxjQUFjLHdEQUF3RCw2QkFBNkIsMkRBQUM7QUFDM2IsWUFBWSwyREFBQyxTQUFTLHdEQUF3RCxFQUFFLDJEQUFDLFlBQVksa0dBQWtHLEVBQUUsMkRBQUMsVUFBVSxxQ0FBcUM7QUFDalAsZ0JBQWdCLDJEQUFDLGNBQWMsbUVBQW1FO0FBQ2xHO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsd0JBQXdCLG1DQUFtQyxnQkFBZ0IsaUJBQWlCLGFBQWEsa0JBQWtCLGtCQUFrQixjQUFjLGtCQUFrQixrQ0FBa0MsbUNBQW1DLE9BQU8sUUFBUSxNQUFNLFNBQVMsY0FBYyxlQUFlLDJDQUEyQyxzQkFBc0Isa0JBQWtCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixhQUFhLHlDQUF5QyxhQUFhLDZDQUE2QyxPQUFPLFFBQVEsU0FBUyxpQkFBaUIsa0JBQWtCLGdCQUFnQixtQkFBbUIsd0NBQXdDLGdDQUFnQyxjQUFjLGtCQUFrQixtQkFBbUIsMkJBQTJCLDJCQUEyQixxQkFBcUIsNkJBQTZCLDZCQUE2QixXQUFXLG9CQUFvQiw2RkFBNkYsNkNBQTZDLGtCQUFrQixtQkFBbUIsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLDRDQUE0QyxjQUFjLFdBQVcsU0FBUyxhQUFhLG9CQUFvQixzREFBc0QsdUNBQXVDLGtEQUFrRCxvQkFBb0IsYUFBYSx5QkFBeUIscUJBQXFCLG9CQUFvQixjQUFjLHNCQUFzQixtQkFBbUIscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksK0NBQStDLG9CQUFvQixhQUFhLHFCQUFxQixpQkFBaUIsa0JBQWtCLHlCQUF5QixZQUFZLGdCQUFnQiwyQ0FBMkMsb0JBQW9CLGNBQWMsOEJBQThCLGdCQUFnQixpQ0FBaUMsbUJBQW1CLDZCQUE2Qiw4REFBOEQsYUFBYSxrREFBa0Qsb0JBQW9CLGNBQWMsZ0JBQWdCLDhDQUE4QyxzQ0FBc0MsMEJBQTBCLGtGQUFrRix5Q0FBeUMseUNBQXlDLDJDQUEyQyxrQkFBa0IsbUJBQW1CLGlCQUFpQixvQkFBb0IsWUFBWSw2REFBNkQsZUFBZSxpQkFBaUIsNkZBQTZGLDJDQUEyQyxtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5QiwrQ0FBK0MsZUFBZSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixlQUFlLHVEQUF1RCxjQUFjLHNEQUFzRCxpQkFBaUIsNENBQTRDLGtCQUFrQixtQkFBbUIsY0FBYyxpQkFBaUIsa0JBQWtCLFlBQVksdUJBQXVCLHFEQUFxRCxlQUFlLGlCQUFpQixlQUFlLGdCQUFnQiw2RkFBNkYsNENBQTRDLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQix5QkFBeUIseUJBQXlCLDBDQUEwQyxtQkFBbUIsY0FBYyxrQkFBa0IsYUFBYSxnQkFBZ0IsNkRBQTZELGVBQWUsNkZBQTZGLDBDQUEwQyxrQkFBa0IsbUJBQW1CLHVCQUF1QixzQkFBc0Isd0JBQXdCLHdCQUF3QixrREFBa0Qsb0JBQW9CLDJCQUEyQiw4Q0FBOEMsZ0JBQWdCLEVBQUU7QUFDeDVJO0FBQ0E7QUFDQSwwQkFBMEIsd0VBQXdFLFlBQVksK0JBQStCLEVBQUUsNERBQVc7QUFDMUo7O0FBRTJDOzs7Ozs7Ozs7Ozs7O0FDbE4zQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjQyXFxjaHVua3NcXDQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGdldElvbk1vZGUsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBCIGFzIEJBQ0tEUk9QLCBpIGFzIGlzQ2FuY2VsLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG4vKipcclxuICogaU9TIEFjdGlvbiBTaGVldCBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjQpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSlcclxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsICd0cmFuc2xhdGVZKDAlKScpO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oNDAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBpT1MgQWN0aW9uIFNoZWV0IExlYXZlIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuNCwgMCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24tc2hlZXQtd3JhcHBlcicpKVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDAlKScsICd0cmFuc2xhdGVZKDEwMCUpJyk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxyXG4gICAgICAgIC5kdXJhdGlvbig0NTApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1EIEFjdGlvbiBTaGVldCBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMzIpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSlcclxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsICd0cmFuc2xhdGVZKDAlKScpO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oNDAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBNRCBBY3Rpb24gU2hlZXQgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZExlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMyLCAwKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJywgJ3RyYW5zbGF0ZVkoMTAwJSknKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDQ1MClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG5jb25zdCBBY3Rpb25TaGVldCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGJ1dHRvbnMgZm9yIHRoZSBhY3Rpb24gc2hlZXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGFjdGlvbiBzaGVldCB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWN0aW9uIHNoZWV0IHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGFjdGlvbiBzaGVldCB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciA9IChldikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm9sZSA9IGV2LmRldGFpbC5yb2xlO1xuICAgICAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gdGhpcy5nZXRCdXR0b25zKCkuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWN0aW9uU2hlZXREaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BY3Rpb25TaGVldFdpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BY3Rpb25TaGVldFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0RGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgYWN0aW9uIHNoZWV0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwcmVzZW50KCkge1xuICAgICAgICByZXR1cm4gcHJlc2VudCh0aGlzLCAnYWN0aW9uU2hlZXRFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgYWN0aW9uIHNoZWV0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBhY3Rpb24gc2hlZXQuXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIGFjdGlvbiBzaGVldC5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICovXG4gICAgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdhY3Rpb25TaGVldExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFjdGlvbiBzaGVldCBkaWQgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBvbkRpZERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWN0aW9uU2hlZXREaWREaXNtaXNzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWN0aW9uIHNoZWV0IHdpbGwgZGlzbWlzcy5cbiAgICAgKlxuICAgICAqL1xuICAgIG9uV2lsbERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWN0aW9uU2hlZXRXaWxsRGlzbWlzcycpO1xuICAgIH1cbiAgICBhc3luYyBidXR0b25DbGljayhidXR0b24pIHtcbiAgICAgICAgY29uc3Qgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCByb2xlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGREaXNtaXNzID0gYXdhaXQgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24pO1xuICAgICAgICBpZiAoc2hvdWxkRGlzbWlzcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIGJ1dHRvbi5yb2xlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIGFzeW5jIGNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbikge1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgICAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgICAgICAgIGNvbnN0IHJ0biA9IGF3YWl0IHNhZmVDYWxsKGJ1dHRvbi5oYW5kbGVyKTtcbiAgICAgICAgICAgIGlmIChydG4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgaGFuZGxlciBpcyBmYWxzZSB0aGVuIGRvIG5vdCBkaXNtaXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXRCdXR0b25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idXR0b25zLm1hcChiID0+IHtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgID8geyB0ZXh0OiBiIH1cbiAgICAgICAgICAgICAgICA6IGI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBhbGxCdXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGFsbEJ1dHRvbnMuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgICAgICBjb25zdCBidXR0b25zID0gYWxsQnV0dG9ucy5maWx0ZXIoYiA9PiBiLnJvbGUgIT09ICdjYW5jZWwnKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJkaWFsb2dcIiwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7MjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gLFxuICAgICAgICAgICAgfSwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSB9LCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksIHsgJ2FjdGlvbi1zaGVldC10cmFuc2x1Y2VudCc6IHRoaXMudHJhbnNsdWNlbnQgfSksIG9uSW9uQWN0aW9uU2hlZXRXaWxsRGlzbWlzczogdGhpcy5kaXNwYXRjaENhbmNlbEhhbmRsZXIsIG9uSW9uQmFja2Ryb3BUYXA6IHRoaXMub25CYWNrZHJvcFRhcCB9LCBoKFwiaW9uLWJhY2tkcm9wXCIsIHsgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LXdyYXBwZXJcIiwgcm9sZTogXCJkaWFsb2dcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWNvbnRhaW5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtZ3JvdXBcIiB9LCB0aGlzLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LXRpdGxlXCIgfSwgdGhpcy5oZWFkZXIsIHRoaXMuc3ViSGVhZGVyICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtc3ViLXRpdGxlXCIgfSwgdGhpcy5zdWJIZWFkZXIpKSwgYnV0dG9ucy5tYXAoYiA9PiBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgXCJpb24tYWN0aXZhdGFibGVcIjogdHJ1ZSwgY2xhc3M6IGJ1dHRvbkNsYXNzKGIpLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmJ1dHRvbkNsaWNrKGIpIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lclwiIH0sIGIuaWNvbiAmJiBoKFwiaW9uLWljb25cIiwgeyBpY29uOiBiLmljb24sIGxhenk6IGZhbHNlLCBjbGFzczogXCJhY3Rpb24tc2hlZXQtaWNvblwiIH0pLCBiLnRleHQpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSkpKSwgY2FuY2VsQnV0dG9uICYmXG4gICAgICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWdyb3VwIGFjdGlvbi1zaGVldC1ncm91cC1jYW5jZWxcIiB9LCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3M6IGJ1dHRvbkNsYXNzKGNhbmNlbEJ1dHRvbiksIG9uQ2xpY2s6ICgpID0+IHRoaXMuYnV0dG9uQ2xpY2soY2FuY2VsQnV0dG9uKSB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1idXR0b24taW5uZXJcIiB9LCBjYW5jZWxCdXR0b24uaWNvbiAmJlxuICAgICAgICAgICAgICAgIGgoXCJpb24taWNvblwiLCB7IGljb246IGNhbmNlbEJ1dHRvbi5pY29uLCBsYXp5OiBmYWxzZSwgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWljb25cIiB9KSwgY2FuY2VsQnV0dG9uLnRleHQpKSkpKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaHstLWNvbG9yOmluaXRpYWw7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOjEwMCU7LS1tYXgtd2lkdGg6NTAwcHg7LS1taW4taGVpZ2h0OmF1dG87LS1oZWlnaHQ6MTAwJTstLW1heC1oZWlnaHQ6MTAwJTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oe2Rpc3BsYXk6bm9uZX0uYWN0aW9uLXNoZWV0LXdyYXBwZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFjdGlvbi1zaGVldC13cmFwcGVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG99fS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtmb250LWZhbWlseTppbmhlcml0fS5hY3Rpb24tc2hlZXQtYnV0dG9uLmFjdGl2YXRlZC5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpfS5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2hlaWdodDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7LW1zLWZsZXgtbmVnYXRpdmU6MjtmbGV4LXNocmluazoyO292ZXJzY3JvbGwtYmVoYXZpb3IteTpjb250YWluO292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtwb2ludGVyLWV2ZW50czphbGw7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKX0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQ6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uYWN0aW9uLXNoZWV0LWdyb3VwLWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LW1key1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtvdmVyZmxvdzpoaWRkZW59LmFjdGlvbi1zaGVldC1zZWxlY3RlZC5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1zZWxlY3RlZCl9LnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSk7LS1iYWNrZ3JvdW5kLXNlbGVjdGVkOnZhcigtLWJhY2tncm91bmQsKTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWJhY2tncm91bmQpfS5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToxN3B4O2hlaWdodDo2MHB4O2NvbG9yOnZhcigtLWNvbG9yLHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuNTQpKTtmb250LXNpemU6MTZweDt0ZXh0LWFsaWduOnN0YXJ0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fS5hY3Rpb24tc2hlZXQtc3ViLXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MTRweH0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQ6Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6MH0uYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQ6bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbTowfS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NTJweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjMjYyNjI2KSk7Zm9udC1zaXplOjE2cHg7dGV4dC1hbGlnbjpzdGFydDtjb250YWluOnN0cmljdDtvdmVyZmxvdzpoaWRkZW59XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fS5hY3Rpb24tc2hlZXQtaWNvbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke3BhZGRpbmctYm90dG9tOjRweDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDozMnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Y29sb3I6dmFyKC0tY29sb3IscmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC41NCkpO2ZvbnQtc2l6ZToyNHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWN0aW9uLXNoZWV0LWljb24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjMycHg7bWFyZ2luLWlubGluZS1lbmQ6MzJweH19LmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtmb250LXdlaWdodDo3MDB9XCI7IH1cbn07XG5jb25zdCBidXR0b25DbGFzcyA9IChidXR0b24pID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ICdhY3Rpb24tc2hlZXQtYnV0dG9uJzogdHJ1ZSwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUsIFtgYWN0aW9uLXNoZWV0LSR7YnV0dG9uLnJvbGV9YF06IGJ1dHRvbi5yb2xlICE9PSB1bmRlZmluZWQgfSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xuXG5leHBvcnQgeyBBY3Rpb25TaGVldCBhcyBpb25fYWN0aW9uX3NoZWV0IH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9