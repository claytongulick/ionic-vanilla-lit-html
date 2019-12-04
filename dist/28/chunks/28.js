(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js ***!
  \******************************************************************/
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
    static get style() { return ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}\@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXRvYXN0LW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsbUJBQW1CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjI4XFxjaHVua3NcXDI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xyXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZURPTVN0cmluZyA9ICh1bnRydXN0ZWRTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcclxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcclxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xyXG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcclxuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChibG9ja2VkVGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxyXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcclxuICAgICAgICBjb25zdCBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcclxuICAgICAgICBjb25zdCBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxyXG4gICAgICAgIGNvbnN0IGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcclxuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cclxuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xyXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXHJcbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXHJcbiAqL1xyXG5jb25zdCBnZXRFbGVtZW50Q2hpbGRyZW4gPSAoZWwpID0+IHtcclxuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XHJcbn07XHJcbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcclxuY29uc3QgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuXG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCB7IGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kLCBpIGFzIGlzQ2FuY2VsLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwLCBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xuXG4vKipcclxuICogaU9TIFRvYXN0IEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgaG9zdEVsID0gYmFzZUVsLmhvc3QgfHwgYmFzZUVsO1xyXG4gICAgY29uc3Qgd3JhcHBlckVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBib3R0b20gPSBgY2FsYygtMTBweCAtIHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwcHgpKWA7XHJcbiAgICBjb25zdCB0b3AgPSBgY2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDBweCkpYDtcclxuICAgIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgtMTAwJSknLCBgdHJhbnNsYXRlWSgke3RvcH0pYCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gTWF0aC5mbG9vcihob3N0RWwuY2xpZW50SGVpZ2h0IC8gMiAtIHdyYXBwZXJFbC5jbGllbnRIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgd3JhcHBlckVsLnN0eWxlLnRvcCA9IGAke3RvcFBvc2l0aW9ufXB4YDtcclxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDEwMCUpJywgYHRyYW5zbGF0ZVkoJHtib3R0b219KWApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoaG9zdEVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiknKVxyXG4gICAgICAgIC5kdXJhdGlvbig0MDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcclxufTtcblxuLyoqXHJcbiAqIGlPUyBUb2FzdCBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCwgcG9zaXRpb24pID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGhvc3RFbCA9IGJhc2VFbC5ob3N0IHx8IGJhc2VFbDtcclxuICAgIGNvbnN0IHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xyXG4gICAgY29uc3QgYm90dG9tID0gYGNhbGMoLTEwcHggLSB2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwgMHB4KSlgO1xyXG4gICAgY29uc3QgdG9wID0gYGNhbGMoMTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwcHgpKWA7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKTtcclxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0b3B9KWAsICd0cmFuc2xhdGVZKC0xMDAlKScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHtib3R0b219KWAsICd0cmFuc2xhdGVZKDEwMCUpJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChob3N0RWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24od3JhcHBlckFuaW1hdGlvbik7XHJcbn07XG5cbi8qKlxyXG4gKiBNRCBUb2FzdCBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgaG9zdEVsID0gYmFzZUVsLmhvc3QgfHwgYmFzZUVsO1xyXG4gICAgY29uc3Qgd3JhcHBlckVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBib3R0b20gPSBgY2FsYyg4cHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwgMHB4KSlgO1xyXG4gICAgY29uc3QgdG9wID0gYGNhbGMoOHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDBweCkpYDtcclxuICAgIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zdHlsZS50b3AgPSB0b3A7XHJcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gTWF0aC5mbG9vcihob3N0RWwuY2xpZW50SGVpZ2h0IC8gMiAtIHdyYXBwZXJFbC5jbGllbnRIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgd3JhcHBlckVsLnN0eWxlLnRvcCA9IGAke3RvcFBvc2l0aW9ufXB4YDtcclxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgd3JhcHBlckVsLnN0eWxlLmJvdHRvbSA9IGJvdHRvbTtcclxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGhvc3RFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxyXG4gICAgICAgIC5kdXJhdGlvbig0MDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcclxufTtcblxuLyoqXHJcbiAqIG1kIFRvYXN0IExlYXZlIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGhvc3RFbCA9IGJhc2VFbC5ob3N0IHx8IGJhc2VFbDtcclxuICAgIGNvbnN0IHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KHdyYXBwZXJFbClcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGhvc3RFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxyXG4gICAgICAgIC5kdXJhdGlvbigzMDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcclxufTtcblxuY29uc3QgVG9hc3QgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IG1hbnkgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGhpZGluZyB0aGUgdG9hc3QuIEJ5IGRlZmF1bHQsIGl0IHdpbGwgc2hvd1xuICAgICAgICAgKiB1bnRpbCBgZGlzbWlzcygpYCBpcyBjYWxsZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdG9hc3Qgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgYnV0dG9uc2AgaW5zdGVhZC4gSWYgYHRydWVgLCB0aGUgY2xvc2UgYnV0dG9uIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG93Q2xvc2VCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHRvYXN0IHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHRvYXN0IHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Ub2FzdERpZFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRvYXN0V2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRvYXN0V2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVG9hc3REaWREaXNtaXNzXCIsIDcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IHRoZSB0b2FzdCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICAgICAgYXdhaXQgcHJlc2VudCh0aGlzLCAndG9hc3RFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgJ3RpbWVvdXQnKSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgdG9hc3Qgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIHRvYXN0LlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSB0b2FzdC5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICovXG4gICAgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZHVyYXRpb25UaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAndG9hc3RMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB0b2FzdCBkaWQgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBvbkRpZERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uVG9hc3REaWREaXNtaXNzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdG9hc3Qgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uV2lsbERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uVG9hc3RXaWxsRGlzbWlzcycpO1xuICAgIH1cbiAgICBnZXRCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zXG4gICAgICAgICAgICA/IHRoaXMuYnV0dG9ucy5tYXAoYiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgID8geyB0ZXh0OiBiIH1cbiAgICAgICAgICAgICAgICAgICAgOiBiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgICAgaWYgKHRoaXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNsb3NlQnV0dG9uVGV4dCB8fCAnQ2xvc2UnLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsICdjYW5jZWwnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XG4gICAgfVxuICAgIGFzeW5jIGJ1dHRvbkNsaWNrKGJ1dHRvbikge1xuICAgICAgICBjb25zdCByb2xlID0gYnV0dG9uLnJvbGU7XG4gICAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIHJvbGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZERpc21pc3MgPSBhd2FpdCB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbik7XG4gICAgICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgYnV0dG9uLnJvbGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgYXN5bmMgY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uKSB7XG4gICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLmhhbmRsZXIpIHtcbiAgICAgICAgICAgIC8vIGEgaGFuZGxlciBoYXMgYmVlbiBwcm92aWRlZCwgZXhlY3V0ZSBpdFxuICAgICAgICAgICAgLy8gcGFzcyB0aGUgaGFuZGxlciB0aGUgdmFsdWVzIGZyb20gdGhlIGlucHV0c1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBydG4gPSBhd2FpdCBzYWZlQ2FsbChidXR0b24uaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgaWYgKHJ0biA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgaGFuZGxlciBpcyBmYWxzZSB0aGVuIGRvIG5vdCBkaXNtaXNzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlbmRlckJ1dHRvbnMoYnV0dG9ucywgc2lkZSkge1xuICAgICAgICBpZiAoYnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgYnV0dG9uR3JvdXBzQ2xhc3NlcyA9IHtcbiAgICAgICAgICAgICd0b2FzdC1idXR0b24tZ3JvdXAnOiB0cnVlLFxuICAgICAgICAgICAgW2B0b2FzdC1idXR0b24tZ3JvdXAtJHtzaWRlfWBdOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBidXR0b25Hcm91cHNDbGFzc2VzIH0sIGJ1dHRvbnMubWFwKGIgPT4gaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzOiBidXR0b25DbGFzcyhiKSwgdGFiSW5kZXg6IDAsIG9uQ2xpY2s6ICgpID0+IHRoaXMuYnV0dG9uQ2xpY2soYikgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvYXN0LWJ1dHRvbi1pbm5lclwiIH0sIGIuaWNvbiAmJlxuICAgICAgICAgICAgaChcImlvbi1pY29uXCIsIHsgaWNvbjogYi5pY29uLCBzbG90OiBiLnRleHQgPT09IHVuZGVmaW5lZCA/ICdpY29uLW9ubHknIDogdW5kZWZpbmVkLCBjbGFzczogXCJ0b2FzdC1pY29uXCIgfSksIGIudGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIHsgdHlwZTogYi5pY29uICE9PSB1bmRlZmluZWQgJiYgYi50ZXh0ID09PSB1bmRlZmluZWQgPyAndW5ib3VuZGVkJyA6ICdib3VuZGVkJyB9KSkpKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYWxsQnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbnMgPSBhbGxCdXR0b25zLmZpbHRlcihiID0+IGIuc2lkZSA9PT0gJ3N0YXJ0Jyk7XG4gICAgICAgIGNvbnN0IGVuZEJ1dHRvbnMgPSBhbGxCdXR0b25zLmZpbHRlcihiID0+IGIuc2lkZSAhPT0gJ3N0YXJ0Jyk7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSB7XG4gICAgICAgICAgICAndG9hc3Qtd3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICBbYHRvYXN0LSR7dGhpcy5wb3NpdGlvbn1gXTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7NjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gLFxuICAgICAgICAgICAgfSwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgW21vZGVdOiB0cnVlIH0sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgeyAndG9hc3QtdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50IH0pIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogd3JhcHBlckNsYXNzIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2FzdC1jb250YWluZXJcIiB9LCB0aGlzLnJlbmRlckJ1dHRvbnMoc3RhcnRCdXR0b25zLCAnc3RhcnQnKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvYXN0LWNvbnRlbnRcIiB9LCB0aGlzLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9hc3QtaGVhZGVyXCIgfSwgdGhpcy5oZWFkZXIpLCB0aGlzLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvYXN0LW1lc3NhZ2VcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLm1lc3NhZ2UpIH0pKSwgdGhpcy5yZW5kZXJCdXR0b25zKGVuZEJ1dHRvbnMsICdlbmQnKSkpKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6aW5pdGlhbDstLWJveC1zaGFkb3c6bm9uZTstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvO2xlZnQ6MDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOnN0cmljdDt6LWluZGV4OjEwMDE7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfTpob3N0KC5vdmVybGF5LWhpZGRlbil7ZGlzcGxheTpub25lfTpob3N0KC5pb24tY29sb3Ipey0tYnV0dG9uLWNvbG9yOmluaGVyaXQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW9uLWNvbG9yKSAudG9hc3Qtd3JhcHBlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9hc3Qtd3JhcHBlcntib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2xlZnQ6dmFyKC0tc3RhcnQpO3JpZ2h0OnZhcigtLWVuZCk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAudG9hc3Qtd3JhcHBlcixbZGlyPXJ0bF0gLnRvYXN0LXdyYXBwZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtsZWZ0OnZhcigtLWVuZCk7cmlnaHQ6dmFyKC0tc3RhcnQpfS50b2FzdC1jb250YWluZXJ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwb2ludGVyLWV2ZW50czphdXRvO2NvbnRhaW46Y29udGVudH0udG9hc3QtY29udGFpbmVyLC50b2FzdC1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS50b2FzdC1jb250ZW50ey1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnRvYXN0LW1lc3NhZ2V7LW1zLWZsZXg6MTtmbGV4OjE7d2hpdGUtc3BhY2U6cHJlLXdyYXB9LnRvYXN0LWJ1dHRvbi1ncm91cHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udG9hc3QtYnV0dG9ue2JvcmRlcjowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1idXR0b24tY29sb3IpO3otaW5kZXg6MH0udG9hc3QtaWNvbntmb250LXNpemU6MS40ZW19LnRvYXN0LWJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9fTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC04MDAsIzMzMyk7LS1ib3JkZXItcmFkaXVzOjRweDstLWJveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLDAuMTIpOy0tYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2YyZjJmMik7LS1tYXgtd2lkdGg6NzAwcHg7LS1zdGFydDo4cHg7LS1lbmQ6OHB4O2ZvbnQtc2l6ZToxNHB4fS50b2FzdC13cmFwcGVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bztkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6LjAxO3otaW5kZXg6MTB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey50b2FzdC13cmFwcGVye21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvfX0udG9hc3QtY29udGVudHtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6MTRweDtwYWRkaW5nLWJvdHRvbToxNHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtY29udGVudHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19LnRvYXN0LWhlYWRlcnttYXJnaW4tYm90dG9tOjJweDtmb250LXdlaWdodDo1MDB9LnRvYXN0LWhlYWRlciwudG9hc3QtbWVzc2FnZXtsaW5lLWhlaWdodDoyMHB4fS50b2FzdC1idXR0b24tZ3JvdXAtc3RhcnR7bWFyZ2luLWxlZnQ6OHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtYnV0dG9uLWdyb3VwLXN0YXJ0e21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjhweDttYXJnaW4taW5saW5lLXN0YXJ0OjhweH19LnRvYXN0LWJ1dHRvbi1ncm91cC1lbmR7bWFyZ2luLXJpZ2h0OjhweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnRvYXN0LWJ1dHRvbi1ncm91cC1lbmR7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4fX0udG9hc3QtYnV0dG9ue3BhZGRpbmctbGVmdDoxNXB4O3BhZGRpbmctcmlnaHQ6MTVweDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzouODRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtYnV0dG9ue3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxNXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE1cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNXB4O3BhZGRpbmctaW5saW5lLWVuZDoxNXB4fX0udG9hc3QtYnV0dG9uLWNhbmNlbHtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsI2U2ZTZlNil9LnRvYXN0LWJ1dHRvbi1pY29uLW9ubHl7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZy1sZWZ0OjlweDtwYWRkaW5nLXJpZ2h0OjlweDtwYWRkaW5nLXRvcDo5cHg7cGFkZGluZy1ib3R0b206OXB4O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey50b2FzdC1idXR0b24taWNvbi1vbmx5e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo5cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OXB4O3BhZGRpbmctaW5saW5lLWVuZDo5cHh9fVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwuMDgpfS50b2FzdC1idXR0b24tY2FuY2VsOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC4wOCl9fVwiOyB9XG59O1xuY29uc3QgYnV0dG9uQ2xhc3MgPSAoYnV0dG9uKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAndG9hc3QtYnV0dG9uJzogdHJ1ZSwgJ3RvYXN0LWJ1dHRvbi1pY29uLW9ubHknOiBidXR0b24uaWNvbiAhPT0gdW5kZWZpbmVkICYmIGJ1dHRvbi50ZXh0ID09PSB1bmRlZmluZWQsIFtgdG9hc3QtYnV0dG9uLSR7YnV0dG9uLnJvbGV9YF06IGJ1dHRvbi5yb2xlICE9PSB1bmRlZmluZWQsICdpb24tZm9jdXNhYmxlJzogdHJ1ZSwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUgfSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xuXG5leHBvcnQgeyBUb2FzdCBhcyBpb25fdG9hc3QgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=