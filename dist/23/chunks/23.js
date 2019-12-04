(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading", function() { return Loading; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-3476b023.js */ "../node_modules/@ionic/core/dist/esm/index-3476b023.js");








/**
 * iOS Loading Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.3);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Loading Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.3, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Loading Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Loading Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Loading = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Number of milliseconds to wait before dismissing the loading indicator.
         */
        this.duration = 0;
        /**
         * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = false;
        /**
         * If `true`, a backdrop will be displayed behind the loading indicator.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the loading indicator will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the loading indicator will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingDidPresent", 7);
        this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingWillPresent", 7);
        this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingWillDismiss", 7);
        this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingDidDismiss", 7);
    }
    componentWillLoad() {
        if (this.spinner === undefined) {
            const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            this.spinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('loadingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    }
    /**
     * Present the loading overlay after it has been created.
     */
    async present() {
        await Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration + 10);
        }
    }
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionLoadingDidDismiss');
    }
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */
    onWillDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionLoadingWillDismiss');
    }
    render() {
        const { message, spinner } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onIonBackdropTap: this.onBackdropTap, style: {
                zIndex: `${40000 + this.overlayIndex}`
            }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), { [mode]: true, 'loading-translucent': this.translucent }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-wrapper", role: "dialog" }, spinner && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-spinner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: spinner }))), message && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-content", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__["s"])(message) }))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWxvYWRpbmctaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsbUJBQW1CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QixhQUFhLGVBQWUsc0JBQXNCLG1CQUFtQixxQkFBcUIsdUJBQXVCLDJDQUEyQyxlQUFlLHNCQUFzQixrQkFBa0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLGFBQWEscUNBQXFDLGFBQWEsb0NBQW9DLG9CQUFvQixhQUFhLHVCQUF1QixvQkFBb0Isc0JBQXNCLHdCQUF3QixtQkFBbUIsMkJBQTJCLDJCQUEyQixxQkFBcUIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsVUFBVSxXQUFXLDZOQUE2TiwyQkFBMkIsc0JBQXNCLG1GQUFtRixrQkFBa0IsaUJBQWlCLCtDQUErQyxpQ0FBaUMsZUFBZSxvQ0FBb0Msa0JBQWtCLGtCQUFrQixtQkFBbUIsaUJBQWlCLG9CQUFvQiw2RkFBNkYsb0NBQW9DLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQix5QkFBeUIseUJBQXlCLDRFQUE0RSw4RUFBOEUsc0VBQXNFLGtEQUFrRCwyQ0FBMkMsb0NBQW9DLGdCQUFnQiwwRUFBMEUsaUJBQWlCLDZGQUE2RiwwRUFBMEUsa0JBQWtCLDBCQUEwQiwwQkFBMEIsRUFBRTtBQUN4K0U7O0FBRWtDOzs7Ozs7Ozs7Ozs7O0FDak1sQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjIzXFxjaHVua3NcXDIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xyXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZURPTVN0cmluZyA9ICh1bnRydXN0ZWRTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcclxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcclxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xyXG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcclxuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChibG9ja2VkVGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxyXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcclxuICAgICAgICBjb25zdCBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcclxuICAgICAgICBjb25zdCBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxyXG4gICAgICAgIGNvbnN0IGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcclxuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cclxuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xyXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXHJcbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXHJcbiAqL1xyXG5jb25zdCBnZXRFbGVtZW50Q2hpbGRyZW4gPSAoZWwpID0+IHtcclxuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XHJcbn07XHJcbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcclxuY29uc3QgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuXG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCB7IEIgYXMgQkFDS0RST1AsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9pbmRleC0zNDc2YjAyMy5qcyc7XG5cbi8qKlxyXG4gKiBpT1MgTG9hZGluZyBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy13cmFwcGVyJykpXHJcbiAgICAgICAgLmtleWZyYW1lcyhbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDAuMDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSknIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcclxuICAgICAgICAuZHVyYXRpb24oMjAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBpT1MgTG9hZGluZyBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMsIDApO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy13cmFwcGVyJykpXHJcbiAgICAgICAgLmtleWZyYW1lcyhbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDAuOTksIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9LFxyXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcclxuICAgICAgICAuZHVyYXRpb24oMjAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBNZCBMb2FkaW5nIEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXdyYXBwZXInKSlcclxuICAgICAgICAua2V5ZnJhbWVzKFtcclxuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMC4wMSwgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH1cclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnZWFzZS1pbi1vdXQnKVxyXG4gICAgICAgIC5kdXJhdGlvbigyMDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1kIExvYWRpbmcgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZExlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMyLCAwKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmxvYWRpbmctd3JhcHBlcicpKVxyXG4gICAgICAgIC5rZXlmcmFtZXMoW1xyXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLjk5LCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC45KScgfVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdlYXNlLWluLW91dCcpXHJcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG5jb25zdCBMb2FkaW5nID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBkaXNtaXNzaW5nIHRoZSBsb2FkaW5nIGluZGljYXRvci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgYmFja2Ryb3Agd2lsbCBiZSBkaXNwbGF5ZWQgYmVoaW5kIHRoZSBsb2FkaW5nIGluZGljYXRvci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHByZXBhcmVPdmVybGF5KHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkxvYWRpbmdEaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Mb2FkaW5nV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkxvYWRpbmdXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICAgICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Mb2FkaW5nRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIgPSBjb25maWcuZ2V0KCdsb2FkaW5nU3Bpbm5lcicsIGNvbmZpZy5nZXQoJ3NwaW5uZXInLCBtb2RlID09PSAnaW9zJyA/ICdsaW5lcycgOiAnY3Jlc2NlbnQnKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgbG9hZGluZyBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICAgICAgYXdhaXQgcHJlc2VudCh0aGlzLCAnbG9hZGluZ0VudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24sIHVuZGVmaW5lZCk7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzbWlzcygpLCB0aGlzLmR1cmF0aW9uICsgMTApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIGxvYWRpbmcgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIGxvYWRpbmcuXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIGxvYWRpbmcuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqL1xuICAgIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgICAgICBpZiAodGhpcy5kdXJhdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR1cmF0aW9uVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ2xvYWRpbmdMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkaW5nIGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uRGlkRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Mb2FkaW5nRGlkRGlzbWlzcycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWRpbmcgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uV2lsbERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uTG9hZGluZ1dpbGxEaXNtaXNzJyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlLCBzcGlubmVyIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7NDAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gXG4gICAgICAgICAgICB9LCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksIHsgW21vZGVdOiB0cnVlLCAnbG9hZGluZy10cmFuc2x1Y2VudCc6IHRoaXMudHJhbnNsdWNlbnQgfSkgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLCB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJsb2FkaW5nLXdyYXBwZXJcIiwgcm9sZTogXCJkaWFsb2dcIiB9LCBzcGlubmVyICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGluZy1zcGlubmVyXCIgfSwgaChcImlvbi1zcGlubmVyXCIsIHsgbmFtZTogc3Bpbm5lciB9KSkpLCBtZXNzYWdlICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJsb2FkaW5nLWNvbnRlbnRcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyhtZXNzYWdlKSB9KSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tbG9hZGluZy1pb3MtaHstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1sb2FkaW5nLWlvcy1oe2Rpc3BsYXk6bm9uZX0ubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjppbmhlcml0O2FsaWduLWl0ZW1zOmluaGVyaXQ7LW1zLWZsZXgtcGFjazppbmhlcml0O2p1c3RpZnktY29udGVudDppbmhlcml0O3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtvcGFjaXR5OjA7ei1pbmRleDoxMH0uc3Bpbm5lci1idWJibGVzLnNjLWlvbi1sb2FkaW5nLWlvcywgLnNwaW5uZXItY2lyY2xlcy5zYy1pb24tbG9hZGluZy1pb3MsIC5zcGlubmVyLWNyZXNjZW50LnNjLWlvbi1sb2FkaW5nLWlvcywgLnNwaW5uZXItZG90cy5zYy1pb24tbG9hZGluZy1pb3MsIC5zcGlubmVyLWxpbmVzLnNjLWlvbi1sb2FkaW5nLWlvcywgLnNwaW5uZXItbGluZXMtc21hbGwuc2MtaW9uLWxvYWRpbmctaW9ze2NvbG9yOnZhcigtLXNwaW5uZXItY29sb3IpfS5zYy1pb24tbG9hZGluZy1pb3MtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsI2Y5ZjlmOSkpOy0tbWF4LXdpZHRoOjI3MHB4Oy0tbWF4LWhlaWdodDo5MCU7LS1zcGlubmVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KTtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtmb250LXNpemU6MTRweH0ubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLWlvc3tib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nLWxlZnQ6MzRweDtwYWRkaW5nLXJpZ2h0OjM0cHg7cGFkZGluZy10b3A6MjRweDtwYWRkaW5nLWJvdHRvbToyNHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MzRweDtwYWRkaW5nLWlubGluZS1zdGFydDozNHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MzRweDtwYWRkaW5nLWlubGluZS1lbmQ6MzRweH19XFxAc3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpKXsubG9hZGluZy10cmFuc2x1Y2VudC5zYy1pb24tbG9hZGluZy1pb3MtaCAubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLWlvc3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX19LmxvYWRpbmctY29udGVudC5zYy1pb24tbG9hZGluZy1pb3N7Zm9udC13ZWlnaHQ6NzAwfS5sb2FkaW5nLXNwaW5uZXIuc2MtaW9uLWxvYWRpbmctaW9zICsgLmxvYWRpbmctY29udGVudC5zYy1pb24tbG9hZGluZy1pb3N7bWFyZ2luLWxlZnQ6MTZweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmxvYWRpbmctc3Bpbm5lci5zYy1pb24tbG9hZGluZy1pb3MgKyAubG9hZGluZy1jb250ZW50LnNjLWlvbi1sb2FkaW5nLWlvc3ttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweH19XCI7IH1cbn07XG5cbmV4cG9ydCB7IExvYWRpbmcgYXMgaW9uX2xvYWRpbmcgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=