(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "../node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!**************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \**************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast", function() { return Toast; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-3476b023.js */ "../node_modules/@ionic/core/dist/esm/index-3476b023.js");








/**
 * iOS Toast Enter Animation
 */
const iosEnterAnimation = (baseEl, position) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('transform', 'translateY(-100%)', `translateY(${top})`);
            break;
        case 'middle':
            const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('transform', 'translateY(100%)', `translateY(${bottom})`);
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .addAnimation(wrapperAnimation);
};

/**
 * iOS Toast Leave Animation
 */
const iosLeaveAnimation = (baseEl, position) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('transform', `translateY(${top})`, 'translateY(-100%)');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('transform', `translateY(${bottom})`, 'translateY(100%)');
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .addAnimation(wrapperAnimation);
};

/**
 * MD Toast Enter Animation
 */
const mdEnterAnimation = (baseEl, position) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(8px + var(--ion-safe-area-top, 0px))`;
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperEl.style.top = top;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        case 'middle':
            const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperEl.style.bottom = bottom;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation(wrapperAnimation);
};

/**
 * md Toast Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation
        .addElement(wrapperEl)
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .addAnimation(wrapperAnimation);
};

const Toast = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * How many milliseconds to wait before hiding the toast. By default, it will show
         * until `dismiss()` is called.
         */
        this.duration = 0;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = false;
        /**
         * The position of the toast on the screen.
         */
        this.position = 'bottom';
        /**
         * @deprecated Use `buttons` instead. If `true`, the close button will be displayed.
         */
        this.showCloseButton = false;
        /**
         * If `true`, the toast will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the toast will animate.
         */
        this.animated = true;
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionToastDidPresent", 7);
        this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionToastWillPresent", 7);
        this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionToastWillDismiss", 7);
        this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionToastDidDismiss", 7);
    }
    /**
     * Present the toast overlay after it has been created.
     */
    async present() {
        await Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
        }
    }
    /**
     * Dismiss the toast overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the toast.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    }
    /**
     * Returns a promise that resolves when the toast did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionToastDidDismiss');
    }
    /**
     * Returns a promise that resolves when the toast will dismiss.
     */
    onWillDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionToastWillDismiss');
    }
    getButtons() {
        const buttons = this.buttons
            ? this.buttons.map(b => {
                return (typeof b === 'string')
                    ? { text: b }
                    : b;
            })
            : [];
        // tslint:disable-next-line: deprecation
        if (this.showCloseButton) {
            buttons.push({
                // tslint:disable-next-line: deprecation
                text: this.closeButtonText || 'Close',
                handler: () => this.dismiss(undefined, 'cancel')
            });
        }
        return buttons;
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
        if (button && button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            try {
                const rtn = await Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler);
                if (rtn === false) {
                    // if the return value of the handler is false then do not dismiss
                    return false;
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    renderButtons(buttons, side) {
        if (buttons.length === 0) {
            return;
        }
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const buttonGroupsClasses = {
            'toast-button-group': true,
            [`toast-button-group-${side}`]: true
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: buttonGroupsClasses }, buttons.map(b => Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClass(b), tabIndex: 0, onClick: () => this.buttonClick(b) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-button-inner" }, b.icon &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: b.icon, slot: b.text === undefined ? 'icon-only' : undefined, class: "toast-icon" }), b.text), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded' })))));
    }
    render() {
        const allButtons = this.getButtons();
        const startButtons = allButtons.filter(b => b.side === 'start');
        const endButtons = allButtons.filter(b => b.side !== 'start');
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const wrapperClass = {
            'toast-wrapper': true,
            [`toast-${this.position}`]: true
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { style: {
                zIndex: `${60000 + this.overlayIndex}`,
            }, class: Object.assign(Object.assign(Object.assign({ [mode]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this.color)), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), { 'toast-translucent': this.translucent }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: wrapperClass }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-container" }, this.renderButtons(startButtons, 'start'), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-content" }, this.header !== undefined &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-header" }, this.header), this.message !== undefined &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-message", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__["s"])(this.message) })), this.renderButtons(endButtons, 'end')))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated{opacity:.4}\@media (any-hover:hover){.toast-button:hover{opacity:.6}}"; }
};
const buttonClass = (button) => {
    return Object.assign({ 'toast-button': true, 'toast-button-icon-only': button.icon !== undefined && button.text === undefined, [`toast-button-${button.role}`]: button.role !== undefined, 'ion-focusable': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXRvYXN0LWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiIyN1xcY2h1bmtzXFwyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEb2VzIGEgc2ltcGxlIHNhbml0aXphdGlvbiBvZiBhbGwgZWxlbWVudHNcclxuICogaW4gYW4gdW50cnVzdGVkIHN0cmluZ1xyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVET01TdHJpbmcgPSAodW50cnVzdGVkU3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdW50cnVzdGVkU3RyaW5nICE9PSAnc3RyaW5nJyB8fCB1bnRydXN0ZWRTdHJpbmcgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bnRydXN0ZWRTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XHJcbiAgICAgICAgICogc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiBET00sXHJcbiAgICAgICAgICogY3JlYXRlIGEgZGl2IHRvIGRvIG91ciB3b3JrIGluXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCB3b3JraW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZCh3b3JraW5nRGl2KTtcclxuICAgICAgICB3b3JraW5nRGl2LmlubmVySFRNTCA9IHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmUgYW55IGVsZW1lbnRzXHJcbiAgICAgICAgICogdGhhdCBhcmUgYmxvY2tlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2NrZWRUYWdzLmZvckVhY2goYmxvY2tlZFRhZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldEVsZW1lbnRzVG9SZW1vdmUgPSBkb2N1bWVudEZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYmxvY2tlZFRhZyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnRJbmRleCA9IGdldEVsZW1lbnRzVG9SZW1vdmUubGVuZ3RoIC0gMTsgZWxlbWVudEluZGV4ID49IDA7IGVsZW1lbnRJbmRleC0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudHNUb1JlbW92ZVtlbGVtZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50RnJhZ21lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdlIHN0aWxsIG5lZWQgdG8gc2FuaXRpemVcclxuICAgICAgICAgICAgICAgICAqIHRoZSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAqIGFzIHRoZXkgYXJlIGxlZnQgYmVoaW5kXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2NoaWxkSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdvIHRocm91Z2ggcmVtYWluaW5nIGVsZW1lbnRzIGFuZCByZW1vdmVcclxuICAgICAgICAgKiBub24tYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gSUUgZG9lcyBub3Qgc3VwcG9ydCAuY2hpbGRyZW4gb24gZG9jdW1lbnQgZnJhZ21lbnRzLCBvbmx5IC5jaGlsZE5vZGVzXHJcbiAgICAgICAgY29uc3QgZGZDaGlsZHJlbiA9IGdldEVsZW1lbnRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50KTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGRmQ2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcclxuICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGRmQ2hpbGRyZW5bY2hpbGRJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBcHBlbmQgZG9jdW1lbnQgZnJhZ21lbnQgdG8gZGl2XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmcmFnbWVudERpdi5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcclxuICAgICAgICAvLyBGaXJzdCBjaGlsZCBpcyBhbHdheXMgdGhlIGRpdiB3ZSBkaWQgb3VyIHdvcmsgaW5cclxuICAgICAgICBjb25zdCBnZXRJbm5lckRpdiA9IGZyYWdtZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xyXG4gICAgICAgIHJldHVybiAoZ2V0SW5uZXJEaXYgIT09IG51bGwpID8gZ2V0SW5uZXJEaXYuaW5uZXJIVE1MIDogZnJhZ21lbnREaXYuaW5uZXJIVE1MO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBDbGVhbiB1cCBjdXJyZW50IGVsZW1lbnQgYmFzZWQgb24gYWxsb3dlZCBhdHRyaWJ1dGVzXHJcbiAqIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IGRpZyBkb3duIGludG8gYW55IGNoaWxkIGVsZW1lbnRzIHRvXHJcbiAqIGNsZWFuIHRob3NlIHVwIGFzIHdlbGxcclxuICovXHJcbmNvbnN0IHNhbml0aXplRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyBJRSB1c2VzIGNoaWxkTm9kZXMsIHNvIGlnbm9yZSBub2RlcyB0aGF0IGFyZSBub3QgZWxlbWVudHNcclxuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oaSk7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xyXG4gICAgICAgIC8vIHJlbW92ZSBub24tYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2xlYW4gdXAgYW55IGFsbG93ZWQgYXR0cmlic1xyXG4gICAgICAgIC8vIHRoYXQgYXR0ZW1wdCB0byBkbyBhbnkgSlMgZnVubnktYnVzaW5lc3NcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgIT0gbnVsbCAmJiBhdHRyaWJ1dGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdqYXZhc2NyaXB0OicpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2FuaXRpemUgYW55IG5lc3RlZCBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tpXSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBJRSBkb2Vzbid0IGFsd2F5cyBzdXBwb3J0IC5jaGlsZHJlblxyXG4gKiBzbyB3ZSByZXZlcnQgdG8gLmNoaWxkTm9kZXMgaW5zdGVhZFxyXG4gKi9cclxuY29uc3QgZ2V0RWxlbWVudENoaWxkcmVuID0gKGVsKSA9PiB7XHJcbiAgICByZXR1cm4gKGVsLmNoaWxkcmVuICE9IG51bGwpID8gZWwuY2hpbGRyZW4gOiBlbC5jaGlsZE5vZGVzO1xyXG59O1xyXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFsnY2xhc3MnLCAnaWQnLCAnaHJlZicsICdzcmMnLCAnbmFtZScsICdzbG90J107XHJcbmNvbnN0IGJsb2NrZWRUYWdzID0gWydzY3JpcHQnLCAnc3R5bGUnLCAnaWZyYW1lJywgJ21ldGEnLCAnbGluaycsICdvYmplY3QnLCAnZW1iZWQnXTtcblxuZXhwb3J0IHsgc2FuaXRpemVET01TdHJpbmcgYXMgcyB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGdldElvbk1vZGUsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCwgaSBhcyBpc0NhbmNlbCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IHMgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2luZGV4LTM0NzZiMDIzLmpzJztcblxuLyoqXHJcbiAqIGlPUyBUb2FzdCBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gKGJhc2VFbCwgcG9zaXRpb24pID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGhvc3RFbCA9IGJhc2VFbC5ob3N0IHx8IGJhc2VFbDtcclxuICAgIGNvbnN0IHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xyXG4gICAgY29uc3QgYm90dG9tID0gYGNhbGMoLTEwcHggLSB2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwgMHB4KSlgO1xyXG4gICAgY29uc3QgdG9wID0gYGNhbGMoMTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwcHgpKWA7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKTtcclxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoLTEwMCUpJywgYHRyYW5zbGF0ZVkoJHt0b3B9KWApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICBjb25zdCB0b3BQb3NpdGlvbiA9IE1hdGguZmxvb3IoaG9zdEVsLmNsaWVudEhlaWdodCAvIDIgLSB3cmFwcGVyRWwuY2xpZW50SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zdHlsZS50b3AgPSBgJHt0b3BQb3NpdGlvbn1weGA7XHJcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsIGB0cmFuc2xhdGVZKCR7Ym90dG9tfSlgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGhvc3RFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpJylcclxuICAgICAgICAuZHVyYXRpb24oNDAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24od3JhcHBlckFuaW1hdGlvbik7XHJcbn07XG5cbi8qKlxyXG4gKiBpT1MgVG9hc3QgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBob3N0RWwgPSBiYXNlRWwuaG9zdCB8fCBiYXNlRWw7XHJcbiAgICBjb25zdCB3cmFwcGVyRWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLnRvYXN0LXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGJvdHRvbSA9IGBjYWxjKC0xMHB4IC0gdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDBweCkpYDtcclxuICAgIGNvbnN0IHRvcCA9IGBjYWxjKDEwcHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMHB4KSlgO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KHdyYXBwZXJFbCk7XHJcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7dG9wfSlgLCAndHJhbnNsYXRlWSgtMTAwJSknKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7Ym90dG9tfSlgLCAndHJhbnNsYXRlWSgxMDAlKScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoaG9zdEVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKHdyYXBwZXJBbmltYXRpb24pO1xyXG59O1xuXG4vKipcclxuICogTUQgVG9hc3QgRW50ZXIgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZEVudGVyQW5pbWF0aW9uID0gKGJhc2VFbCwgcG9zaXRpb24pID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGhvc3RFbCA9IGJhc2VFbC5ob3N0IHx8IGJhc2VFbDtcclxuICAgIGNvbnN0IHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xyXG4gICAgY29uc3QgYm90dG9tID0gYGNhbGMoOHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDBweCkpYDtcclxuICAgIGNvbnN0IHRvcCA9IGBjYWxjKDhweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwcHgpKWA7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKTtcclxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICB3cmFwcGVyRWwuc3R5bGUudG9wID0gdG9wO1xyXG4gICAgICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICBjb25zdCB0b3BQb3NpdGlvbiA9IE1hdGguZmxvb3IoaG9zdEVsLmNsaWVudEhlaWdodCAvIDIgLSB3cmFwcGVyRWwuY2xpZW50SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zdHlsZS50b3AgPSBgJHt0b3BQb3NpdGlvbn1weGA7XHJcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zdHlsZS5ib3R0b20gPSBib3R0b207XHJcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChob3N0RWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oNDAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24od3JhcHBlckFuaW1hdGlvbik7XHJcbn07XG5cbi8qKlxyXG4gKiBtZCBUb2FzdCBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBob3N0RWwgPSBiYXNlRWwuaG9zdCB8fCBiYXNlRWw7XHJcbiAgICBjb25zdCB3cmFwcGVyRWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLnRvYXN0LXdyYXBwZXInKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudCh3cmFwcGVyRWwpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChob3N0RWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24od3JhcHBlckFuaW1hdGlvbik7XHJcbn07XG5cbmNvbnN0IFRvYXN0ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvdyBtYW55IG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBoaWRpbmcgdGhlIHRvYXN0LiBCeSBkZWZhdWx0LCBpdCB3aWxsIHNob3dcbiAgICAgICAgICogdW50aWwgYGRpc21pc3MoKWAgaXMgY2FsbGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIHRvYXN0IG9uIHRoZSBzY3JlZW4uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYGJ1dHRvbnNgIGluc3RlYWQuIElmIGB0cnVlYCwgdGhlIGNsb3NlIGJ1dHRvbiB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0Nsb3NlQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b2FzdCB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b2FzdCB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVG9hc3REaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Ub2FzdFdpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Ub2FzdFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRvYXN0RGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgdG9hc3Qgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIGFzeW5jIHByZXNlbnQoKSB7XG4gICAgICAgIGF3YWl0IHByZXNlbnQodGhpcywgJ3RvYXN0RW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsICd0aW1lb3V0JyksIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIHRvYXN0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSB0b2FzdC5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgdG9hc3QuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqL1xuICAgIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgICAgICBpZiAodGhpcy5kdXJhdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR1cmF0aW9uVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ3RvYXN0TGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdG9hc3QgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgb25EaWREaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblRvYXN0RGlkRGlzbWlzcycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHRvYXN0IHdpbGwgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBvbldpbGxEaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblRvYXN0V2lsbERpc21pc3MnKTtcbiAgICB9XG4gICAgZ2V0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9uc1xuICAgICAgICAgICAgPyB0aGlzLmJ1dHRvbnMubWFwKGIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICA/IHsgdGV4dDogYiB9XG4gICAgICAgICAgICAgICAgICAgIDogYjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICAgIGlmICh0aGlzLnNob3dDbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jbG9zZUJ1dHRvblRleHQgfHwgJ0Nsb3NlJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCAnY2FuY2VsJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidXR0b25zO1xuICAgIH1cbiAgICBhc3luYyBidXR0b25DbGljayhidXR0b24pIHtcbiAgICAgICAgY29uc3Qgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCByb2xlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGREaXNtaXNzID0gYXdhaXQgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24pO1xuICAgICAgICBpZiAoc2hvdWxkRGlzbWlzcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIGJ1dHRvbi5yb2xlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIGFzeW5jIGNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbikge1xuICAgICAgICBpZiAoYnV0dG9uICYmIGJ1dHRvbi5oYW5kbGVyKSB7XG4gICAgICAgICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgICAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnRuID0gYXdhaXQgc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIGlmIChydG4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZW5kZXJCdXR0b25zKGJ1dHRvbnMsIHNpZGUpIHtcbiAgICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkdyb3Vwc0NsYXNzZXMgPSB7XG4gICAgICAgICAgICAndG9hc3QtYnV0dG9uLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgICAgIFtgdG9hc3QtYnV0dG9uLWdyb3VwLSR7c2lkZX1gXTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogYnV0dG9uR3JvdXBzQ2xhc3NlcyB9LCBidXR0b25zLm1hcChiID0+IGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzczogYnV0dG9uQ2xhc3MoYiksIHRhYkluZGV4OiAwLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmJ1dHRvbkNsaWNrKGIpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2FzdC1idXR0b24taW5uZXJcIiB9LCBiLmljb24gJiZcbiAgICAgICAgICAgIGgoXCJpb24taWNvblwiLCB7IGljb246IGIuaWNvbiwgc2xvdDogYi50ZXh0ID09PSB1bmRlZmluZWQgPyAnaWNvbi1vbmx5JyA6IHVuZGVmaW5lZCwgY2xhc3M6IFwidG9hc3QtaWNvblwiIH0pLCBiLnRleHQpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IGIuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGIudGV4dCA9PT0gdW5kZWZpbmVkID8gJ3VuYm91bmRlZCcgOiAnYm91bmRlZCcgfSkpKSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGFsbEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b25zID0gYWxsQnV0dG9ucy5maWx0ZXIoYiA9PiBiLnNpZGUgPT09ICdzdGFydCcpO1xuICAgICAgICBjb25zdCBlbmRCdXR0b25zID0gYWxsQnV0dG9ucy5maWx0ZXIoYiA9PiBiLnNpZGUgIT09ICdzdGFydCcpO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlckNsYXNzID0ge1xuICAgICAgICAgICAgJ3RvYXN0LXdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgW2B0b2FzdC0ke3RoaXMucG9zaXRpb259YF06IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IGAkezYwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YCxcbiAgICAgICAgICAgIH0sIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSB9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksIHsgJ3RvYXN0LXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCB9KSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHdyYXBwZXJDbGFzcyB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9hc3QtY29udGFpbmVyXCIgfSwgdGhpcy5yZW5kZXJCdXR0b25zKHN0YXJ0QnV0dG9ucywgJ3N0YXJ0JyksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2FzdC1jb250ZW50XCIgfSwgdGhpcy5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvYXN0LWhlYWRlclwiIH0sIHRoaXMuaGVhZGVyKSwgdGhpcy5tZXNzYWdlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2FzdC1tZXNzYWdlXCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5tZXNzYWdlKSB9KSksIHRoaXMucmVuZGVyQnV0dG9ucyhlbmRCdXR0b25zLCAnZW5kJykpKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1zdHlsZTpub25lOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1ib3gtc2hhZG93Om5vbmU7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOmF1dG87LS1taW4taGVpZ2h0OmF1dG87LS1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bztsZWZ0OjA7dG9wOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7ei1pbmRleDoxMDAxO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH06aG9zdCgub3ZlcmxheS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX06aG9zdCguaW9uLWNvbG9yKXstLWJ1dHRvbi1jb2xvcjppbmhlcml0O2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgLnRvYXN0LXdyYXBwZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvYXN0LXdyYXBwZXJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtsZWZ0OnZhcigtLXN0YXJ0KTtyaWdodDp2YXIoLS1lbmQpO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnRvYXN0LXdyYXBwZXIsW2Rpcj1ydGxdIC50b2FzdC13cmFwcGVye2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7bGVmdDp2YXIoLS1lbmQpO3JpZ2h0OnZhcigtLXN0YXJ0KX0udG9hc3QtY29udGFpbmVyey1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9pbnRlci1ldmVudHM6YXV0bztjb250YWluOmNvbnRlbnR9LnRvYXN0LWNvbnRhaW5lciwudG9hc3QtY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udG9hc3QtY29udGVudHstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS50b2FzdC1tZXNzYWdley1tcy1mbGV4OjE7ZmxleDoxO3doaXRlLXNwYWNlOnByZS13cmFwfS50b2FzdC1idXR0b24tZ3JvdXB7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LnRvYXN0LWJ1dHRvbntvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTt6LWluZGV4OjB9LnRvYXN0LWljb257Zm9udC1zaXplOjEuNGVtfS50b2FzdC1idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXsudG9hc3QtYnV0dG9uOmhvdmVye2N1cnNvcjpwb2ludGVyfX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2YyZjJmMik7LS1ib3JkZXItcmFkaXVzOjE0cHg7LS1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIzI2MjYyNik7LS1tYXgtd2lkdGg6NzAwcHg7LS1zdGFydDoxMHB4Oy0tZW5kOjEwcHg7Zm9udC1zaXplOjE0cHh9LnRvYXN0LXdyYXBwZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnRvYXN0LXdyYXBwZXJ7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG99fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7Omhvc3QoLnRvYXN0LXRyYW5zbHVjZW50KSAudG9hc3Qtd3JhcHBlcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX19LnRvYXN0LXdyYXBwZXIudG9hc3QtdG9wey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dG9wOjB9LnRvYXN0LXdyYXBwZXIudG9hc3QtbWlkZGxle29wYWNpdHk6LjAxfS50b2FzdC13cmFwcGVyLnRvYXN0LWJvdHRvbXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtib3R0b206MH0udG9hc3QtY29udGVudHtwYWRkaW5nLWxlZnQ6MTVweDtwYWRkaW5nLXJpZ2h0OjE1cHg7cGFkZGluZy10b3A6MTVweDtwYWRkaW5nLWJvdHRvbToxNXB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtY29udGVudHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTVweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTVweDtwYWRkaW5nLWlubGluZS1lbmQ6MTVweH19LnRvYXN0LWhlYWRlcnttYXJnaW4tYm90dG9tOjJweDtmb250LXdlaWdodDo1MDB9LnRvYXN0LWJ1dHRvbntwYWRkaW5nLWxlZnQ6MTVweDtwYWRkaW5nLXJpZ2h0OjE1cHg7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O2hlaWdodDo0NHB4Oy13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yLG9wYWNpdHkgLjFzIGxpbmVhcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSAuMXMgbGluZWFyO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KTtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo1MDA7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtYnV0dG9ue3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxNXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE1cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNXB4O3BhZGRpbmctaW5saW5lLWVuZDoxNXB4fX0udG9hc3QtYnV0dG9uLmFjdGl2YXRlZHtvcGFjaXR5Oi40fVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7b3BhY2l0eTouNn19XCI7IH1cbn07XG5jb25zdCBidXR0b25DbGFzcyA9IChidXR0b24pID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ICd0b2FzdC1idXR0b24nOiB0cnVlLCAndG9hc3QtYnV0dG9uLWljb24tb25seSc6IGJ1dHRvbi5pY29uICE9PSB1bmRlZmluZWQgJiYgYnV0dG9uLnRleHQgPT09IHVuZGVmaW5lZCwgW2B0b2FzdC1idXR0b24tJHtidXR0b24ucm9sZX1gXTogYnV0dG9uLnJvbGUgIT09IHVuZGVmaW5lZCwgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLCAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSB9LCBnZXRDbGFzc01hcChidXR0b24uY3NzQ2xhc3MpKTtcbn07XG5cbmV4cG9ydCB7IFRvYXN0IGFzIGlvbl90b2FzdCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==