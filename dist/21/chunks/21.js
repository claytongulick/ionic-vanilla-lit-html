(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert", function() { return Alert; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-3476b023.js */ "../node_modules/@ionic/core/dist/esm/index-3476b023.js");








/**
 * iOS Alert Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.3);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: '0.01', transform: 'scale(1.1)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Alert Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.3, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
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
 * Md Alert Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: '0.01', transform: 'scale(0.9)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Alert Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Alert = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.processedInputs = [];
        this.processedButtons = [];
        this.presented = false;
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Array of buttons to be added to the alert.
         */
        this.buttons = [];
        /**
         * Array of input to show in the alert.
         */
        this.inputs = [];
        /**
         * If `true`, the alert will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the alert will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the alert will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
        };
        this.dispatchCancelHandler = (ev) => {
            const role = ev.detail.role;
            if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
                const cancelButton = this.processedButtons.find(b => b.role === 'cancel');
                this.callButtonHandler(cancelButton);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertDidPresent", 7);
        this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertWillPresent", 7);
        this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertWillDismiss", 7);
        this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertDidDismiss", 7);
    }
    buttonsChanged() {
        const buttons = this.buttons;
        this.processedButtons = buttons.map(btn => {
            return (typeof btn === 'string')
                ? { text: btn, role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined }
                : btn;
        });
    }
    inputsChanged() {
        const inputs = this.inputs;
        // An alert can be created with several different inputs. Radios,
        // checkboxes and inputs are all accepted, but they cannot be mixed.
        const inputTypes = new Set(inputs.map(i => i.type));
        if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
            console.warn(`Alert cannot mix input types: ${(Array.from(inputTypes.values()).join('/'))}. Please see alert docs for more info.`);
        }
        this.inputType = inputTypes.values().next().value;
        this.processedInputs = inputs.map((i, index) => ({
            type: i.type || 'text',
            name: i.name || `${index}`,
            placeholder: i.placeholder || '',
            value: i.value,
            label: i.label,
            checked: !!i.checked,
            disabled: !!i.disabled,
            id: i.id || `alert-input-${this.overlayIndex}-${index}`,
            handler: i.handler,
            min: i.min,
            max: i.max
        }));
    }
    componentWillLoad() {
        this.inputsChanged();
        this.buttonsChanged();
    }
    /**
     * Present the alert overlay after it has been created.
     */
    present() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
    }
    /**
     * Dismiss the alert overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the alert did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertDidDismiss');
    }
    /**
     * Returns a promise that resolves when the alert will dismiss.
     */
    onWillDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertWillDismiss');
    }
    rbClick(selectedInput) {
        for (const input of this.processedInputs) {
            input.checked = input === selectedInput;
        }
        this.activeId = selectedInput.id;
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
        this.el.forceUpdate();
    }
    cbClick(selectedInput) {
        selectedInput.checked = !selectedInput.checked;
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
        this.el.forceUpdate();
    }
    buttonClick(button) {
        const role = button.role;
        const values = this.getValues();
        if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
            return this.dismiss({ values }, role);
        }
        const returnData = this.callButtonHandler(button, values);
        if (returnData !== false) {
            return this.dismiss(Object.assign({ values }, returnData), button.role);
        }
        return Promise.resolve(false);
    }
    callButtonHandler(button, data) {
        if (button && button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            const returnData = Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler, data);
            if (returnData === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
            if (typeof returnData === 'object') {
                return returnData;
            }
        }
        return {};
    }
    getValues() {
        if (this.processedInputs.length === 0) {
            // this is an alert without any options/inputs at all
            return undefined;
        }
        if (this.inputType === 'radio') {
            // this is an alert with radio buttons (single value select)
            // return the one value which is checked, otherwise undefined
            const checkedInput = this.processedInputs.find(i => !!i.checked);
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === 'checkbox') {
            // this is an alert with checkboxes (multiple value select)
            // return an array of all the checked values
            return this.processedInputs.filter(i => i.checked).map(i => i.value);
        }
        // this is an alert with text inputs
        // return an object of all the values with the input name as the key
        const values = {};
        this.processedInputs.forEach(i => {
            values[i.name] = i.value || '';
        });
        return values;
    }
    renderAlertInputs(labelledBy) {
        switch (this.inputType) {
            case 'checkbox': return this.renderCheckbox(labelledBy);
            case 'radio': return this.renderRadio(labelledBy);
            default: return this.renderInput(labelledBy);
        }
    }
    renderCheckbox(labelledby) {
        const inputs = this.processedInputs;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-group", "aria-labelledby": labelledby }, inputs.map(i => (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: () => this.cbClick(i), "aria-checked": `${i.checked}`, id: i.id, disabled: i.disabled, tabIndex: 0, role: "checkbox", class: {
                'alert-tappable': true,
                'alert-checkbox': true,
                'alert-checkbox-button': true,
                'ion-focusable': true,
                'alert-checkbox-button-disabled': i.disabled || false
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-label" }, i.label)), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))))));
    }
    renderRadio(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-group", role: "radiogroup", "aria-labelledby": labelledby, "aria-activedescendant": this.activeId }, inputs.map(i => (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: () => this.rbClick(i), "aria-checked": `${i.checked}`, disabled: i.disabled, id: i.id, tabIndex: 0, class: {
                'alert-radio-button': true,
                'alert-tappable': true,
                'alert-radio': true,
                'ion-focusable': true,
                'alert-radio-button-disabled': i.disabled || false
            }, role: "radio" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-label" }, i.label)))))));
    }
    renderInput(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-group", "aria-labelledby": labelledby }, inputs.map(i => (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-wrapper" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, onInput: e => i.value = e.target.value, id: i.id, disabled: i.disabled, tabIndex: 0, class: {
                'alert-input': true,
                'alert-input-disabled': i.disabled || false
            } }))))));
    }
    renderAlertButtons() {
        const buttons = this.processedButtons;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const alertButtonGroupClass = {
            'alert-button-group': true,
            'alert-button-group-vertical': buttons.length > 2
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: alertButtonGroupClass }, buttons.map(button => Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClass(button), tabIndex: 0, onClick: () => this.buttonClick(button) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "alert-button-inner" }, button.text), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)))));
    }
    render() {
        const { overlayIndex, header, subHeader } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const hdrId = `alert-${overlayIndex}-hdr`;
        const subHdrId = `alert-${overlayIndex}-sub-hdr`;
        const msgId = `alert-${overlayIndex}-msg`;
        let labelledById;
        if (header !== undefined) {
            labelledById = hdrId;
        }
        else if (subHeader !== undefined) {
            labelledById = subHdrId;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "dialog", "aria-modal": "true", style: {
                zIndex: `${20000 + overlayIndex}`,
            }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), { [mode]: true, 'alert-translucent': this.translucent }), onIonAlertWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { tappable: this.backdropDismiss }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-wrapper" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-head" }, header && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: hdrId, class: "alert-title" }, header), subHeader && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: subHdrId, class: "alert-sub-title" }, subHeader)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: msgId, class: "alert-message", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__["s"])(this.message) }), this.renderAlertInputs(labelledById), this.renderAlertButtons())));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "buttons": ["buttonsChanged"],
        "inputs": ["inputsChanged"]
    }; }
    static get style() { return ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-top:0}.alert-sub-title.sc-ion-alert-ios, .alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar, .alert-message.sc-ion-alert-ios::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios, .alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios, .alert-input-disabled.sc-ion-alert-ios, .alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios, .alert-checkbox.sc-ion-alert-ios, .alert-input.sc-ion-alert-ios, .alert-radio.sc-ion-alert-ios{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-.55px;margin-inline-end:-.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2)}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"; }
};
const buttonClass = (button) => {
    return Object.assign({ 'alert-button': true, 'ion-focusable': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWFsZXJ0LWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LGVBQWUsNkZBQTZGLHNDQUFzQyxrQkFBa0IsbUJBQW1CLDBCQUEwQix5QkFBeUIsdUJBQXVCLHVCQUF1QiwyRUFBMkUsOENBQThDLGtEQUFrRCw0RUFBNEUsU0FBUyxRQUFRLGtCQUFrQixVQUFVLFlBQVksZ0NBQWdDLHdCQUF3QixpQkFBaUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsOENBQThDLDRUQUE0VCxXQUFXLFlBQVksVUFBVSxxQ0FBcUMsb0JBQW9CLG1CQUFtQixlQUFlLDZGQUE2RixxQ0FBcUMsbUJBQW1CLDBCQUEwQiwwQkFBMEIsK0JBQStCLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixnQkFBZ0Isa0JBQWtCLGNBQWMsY0FBYyxZQUFZLGdFQUFnRSxrRUFBa0UsNkJBQTZCLHVDQUF1QyxlQUFlLGdCQUFnQix5TkFBeU4sZUFBZSwwQ0FBMEMsZUFBZSxnQkFBZ0Isc05BQXNOLGtFQUFrRSx5Q0FBeUMsMERBQTBELEVBQUU7QUFDajlXO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQXVFLEVBQUUsNERBQVc7QUFDOUc7O0FBRThCOzs7Ozs7Ozs7Ozs7O0FDcFc5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjIxXFxjaHVua3NcXDIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xyXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZURPTVN0cmluZyA9ICh1bnRydXN0ZWRTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcclxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcclxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xyXG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcclxuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChibG9ja2VkVGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxyXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcclxuICAgICAgICBjb25zdCBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcclxuICAgICAgICBjb25zdCBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxyXG4gICAgICAgIGNvbnN0IGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcclxuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cclxuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xyXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXHJcbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXHJcbiAqL1xyXG5jb25zdCBnZXRFbGVtZW50Q2hpbGRyZW4gPSAoZWwpID0+IHtcclxuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XHJcbn07XHJcbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcclxuY29uc3QgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuXG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCB7IEIgYXMgQkFDS0RST1AsIGkgYXMgaXNDYW5jZWwsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9pbmRleC0zNDc2YjAyMy5qcyc7XG5cbi8qKlxyXG4gKiBpT1MgQWxlcnQgRW50ZXIgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBpb3NFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSlcclxuICAgICAgICAua2V5ZnJhbWVzKFtcclxuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogJzAuMDEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyB9LFxyXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcclxuICAgICAgICAuZHVyYXRpb24oMjAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBpT1MgQWxlcnQgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4zLCAwKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSlcclxuICAgICAgICAua2V5ZnJhbWVzKFtcclxuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMC45OSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknIH1cclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnZWFzZS1pbi1vdXQnKVxyXG4gICAgICAgIC5kdXJhdGlvbigyMDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1kIEFsZXJ0IEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXHJcbiAgICAgICAgLmtleWZyYW1lcyhbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6ICcwLjAxJywgdHJhbnNmb3JtOiAnc2NhbGUoMC45KScgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdlYXNlLWluLW91dCcpXHJcbiAgICAgICAgLmR1cmF0aW9uKDE1MClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogTWQgQWxlcnQgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZExlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMyLCAwKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdlYXNlLWluLW91dCcpXHJcbiAgICAgICAgLmR1cmF0aW9uKDE1MClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG5jb25zdCBBbGVydCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkSW5wdXRzID0gW107XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkQnV0dG9ucyA9IFtdO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUga2V5Ym9hcmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSBvdmVybGF5IGlzIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBidXR0b25zIHRvIGJlIGFkZGVkIHRvIHRoZSBhbGVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgaW5wdXQgdG8gc2hvdyBpbiB0aGUgYWxlcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlucHV0cyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWxlcnQgd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGFsZXJ0IHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGFsZXJ0IHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb2xlID0gZXYuZGV0YWlsLnJvbGU7XG4gICAgICAgICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWxlcnREaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydFdpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0RGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgYnV0dG9uc0NoYW5nZWQoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnM7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkQnV0dG9ucyA9IGJ1dHRvbnMubWFwKGJ0biA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBidG4gPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgID8geyB0ZXh0OiBidG4sIHJvbGU6IGJ0bi50b0xvd2VyQ2FzZSgpID09PSAnY2FuY2VsJyA/ICdjYW5jZWwnIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgICAgICA6IGJ0bjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlucHV0c0NoYW5nZWQoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuaW5wdXRzO1xuICAgICAgICAvLyBBbiBhbGVydCBjYW4gYmUgY3JlYXRlZCB3aXRoIHNldmVyYWwgZGlmZmVyZW50IGlucHV0cy4gUmFkaW9zLFxuICAgICAgICAvLyBjaGVja2JveGVzIGFuZCBpbnB1dHMgYXJlIGFsbCBhY2NlcHRlZCwgYnV0IHRoZXkgY2Fubm90IGJlIG1peGVkLlxuICAgICAgICBjb25zdCBpbnB1dFR5cGVzID0gbmV3IFNldChpbnB1dHMubWFwKGkgPT4gaS50eXBlKSk7XG4gICAgICAgIGlmIChpbnB1dFR5cGVzLmhhcygnY2hlY2tib3gnKSAmJiBpbnB1dFR5cGVzLmhhcygncmFkaW8nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBBbGVydCBjYW5ub3QgbWl4IGlucHV0IHR5cGVzOiAkeyhBcnJheS5mcm9tKGlucHV0VHlwZXMudmFsdWVzKCkpLmpvaW4oJy8nKSl9LiBQbGVhc2Ugc2VlIGFsZXJ0IGRvY3MgZm9yIG1vcmUgaW5mby5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IGlucHV0VHlwZXMudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZElucHV0cyA9IGlucHV0cy5tYXAoKGksIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgdHlwZTogaS50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICAgIG5hbWU6IGkubmFtZSB8fCBgJHtpbmRleH1gLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGkucGxhY2Vob2xkZXIgfHwgJycsXG4gICAgICAgICAgICB2YWx1ZTogaS52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBpLmxhYmVsLFxuICAgICAgICAgICAgY2hlY2tlZDogISFpLmNoZWNrZWQsXG4gICAgICAgICAgICBkaXNhYmxlZDogISFpLmRpc2FibGVkLFxuICAgICAgICAgICAgaWQ6IGkuaWQgfHwgYGFsZXJ0LWlucHV0LSR7dGhpcy5vdmVybGF5SW5kZXh9LSR7aW5kZXh9YCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGkuaGFuZGxlcixcbiAgICAgICAgICAgIG1pbjogaS5taW4sXG4gICAgICAgICAgICBtYXg6IGkubWF4XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIGFsZXJ0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwcmVzZW50KCkge1xuICAgICAgICByZXR1cm4gcHJlc2VudCh0aGlzLCAnYWxlcnRFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgYWxlcnQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIGFsZXJ0LlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBhbGVydC5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICovXG4gICAgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdhbGVydExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFsZXJ0IGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uRGlkRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BbGVydERpZERpc21pc3MnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbGVydCB3aWxsIGRpc21pc3MuXG4gICAgICovXG4gICAgb25XaWxsRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BbGVydFdpbGxEaXNtaXNzJyk7XG4gICAgfVxuICAgIHJiQ2xpY2soc2VsZWN0ZWRJbnB1dCkge1xuICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMucHJvY2Vzc2VkSW5wdXRzKSB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gaW5wdXQgPT09IHNlbGVjdGVkSW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVJZCA9IHNlbGVjdGVkSW5wdXQuaWQ7XG4gICAgICAgIHNhZmVDYWxsKHNlbGVjdGVkSW5wdXQuaGFuZGxlciwgc2VsZWN0ZWRJbnB1dCk7XG4gICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gICAgY2JDbGljayhzZWxlY3RlZElucHV0KSB7XG4gICAgICAgIHNlbGVjdGVkSW5wdXQuY2hlY2tlZCA9ICFzZWxlY3RlZElucHV0LmNoZWNrZWQ7XG4gICAgICAgIHNhZmVDYWxsKHNlbGVjdGVkSW5wdXQuaGFuZGxlciwgc2VsZWN0ZWRJbnB1dCk7XG4gICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gICAgYnV0dG9uQ2xpY2soYnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBidXR0b24ucm9sZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHsgdmFsdWVzIH0sIHJvbGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldHVybkRhdGEgPSB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbiwgdmFsdWVzKTtcbiAgICAgICAgaWYgKHJldHVybkRhdGEgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKE9iamVjdC5hc3NpZ24oeyB2YWx1ZXMgfSwgcmV0dXJuRGF0YSksIGJ1dHRvbi5yb2xlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG4gICAgY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uLCBkYXRhKSB7XG4gICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLmhhbmRsZXIpIHtcbiAgICAgICAgICAgIC8vIGEgaGFuZGxlciBoYXMgYmVlbiBwcm92aWRlZCwgZXhlY3V0ZSBpdFxuICAgICAgICAgICAgLy8gcGFzcyB0aGUgaGFuZGxlciB0aGUgdmFsdWVzIGZyb20gdGhlIGlucHV0c1xuICAgICAgICAgICAgY29uc3QgcmV0dXJuRGF0YSA9IHNhZmVDYWxsKGJ1dHRvbi5oYW5kbGVyLCBkYXRhKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5EYXRhID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0dXJuRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGdldFZhbHVlcygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2VkSW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRob3V0IGFueSBvcHRpb25zL2lucHV0cyBhdCBhbGxcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFuIGFsZXJ0IHdpdGggcmFkaW8gYnV0dG9ucyAoc2luZ2xlIHZhbHVlIHNlbGVjdClcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgb25lIHZhbHVlIHdoaWNoIGlzIGNoZWNrZWQsIG90aGVyd2lzZSB1bmRlZmluZWRcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRJbnB1dCA9IHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZpbmQoaSA9PiAhIWkuY2hlY2tlZCk7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZElucHV0ID8gY2hlY2tlZElucHV0LnZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRoIGNoZWNrYm94ZXMgKG11bHRpcGxlIHZhbHVlIHNlbGVjdClcbiAgICAgICAgICAgIC8vIHJldHVybiBhbiBhcnJheSBvZiBhbGwgdGhlIGNoZWNrZWQgdmFsdWVzXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzZWRJbnB1dHMuZmlsdGVyKGkgPT4gaS5jaGVja2VkKS5tYXAoaSA9PiBpLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzIGlzIGFuIGFsZXJ0IHdpdGggdGV4dCBpbnB1dHNcbiAgICAgICAgLy8gcmV0dXJuIGFuIG9iamVjdCBvZiBhbGwgdGhlIHZhbHVlcyB3aXRoIHRoZSBpbnB1dCBuYW1lIGFzIHRoZSBrZXlcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaS5uYW1lXSA9IGkudmFsdWUgfHwgJyc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgICByZW5kZXJBbGVydElucHV0cyhsYWJlbGxlZEJ5KSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5pbnB1dFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzogcmV0dXJuIHRoaXMucmVuZGVyQ2hlY2tib3gobGFiZWxsZWRCeSk7XG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6IHJldHVybiB0aGlzLnJlbmRlclJhZGlvKGxhYmVsbGVkQnkpO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHRoaXMucmVuZGVySW5wdXQobGFiZWxsZWRCeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyQ2hlY2tib3gobGFiZWxsZWRieSkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1jaGVja2JveC1ncm91cFwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbGxlZGJ5IH0sIGlucHV0cy5tYXAoaSA9PiAoaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2JDbGljayhpKSwgXCJhcmlhLWNoZWNrZWRcIjogYCR7aS5jaGVja2VkfWAsIGlkOiBpLmlkLCBkaXNhYmxlZDogaS5kaXNhYmxlZCwgdGFiSW5kZXg6IDAsIHJvbGU6IFwiY2hlY2tib3hcIiwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnYWxlcnQtdGFwcGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1jaGVja2JveCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsZXJ0LWNoZWNrYm94LWJ1dHRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1jaGVja2JveC1idXR0b24tZGlzYWJsZWQnOiBpLmRpc2FibGVkIHx8IGZhbHNlXG4gICAgICAgICAgICB9IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1idXR0b24taW5uZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtY2hlY2tib3gtaWNvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1jaGVja2JveC1pbm5lclwiIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWxhYmVsXCIgfSwgaS5sYWJlbCkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSkpKSkpO1xuICAgIH1cbiAgICByZW5kZXJSYWRpbyhsYWJlbGxlZGJ5KSB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRoaXMucHJvY2Vzc2VkSW5wdXRzO1xuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtcmFkaW8tZ3JvdXBcIiwgcm9sZTogXCJyYWRpb2dyb3VwXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsbGVkYnksIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6IHRoaXMuYWN0aXZlSWQgfSwgaW5wdXRzLm1hcChpID0+IChoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gdGhpcy5yYkNsaWNrKGkpLCBcImFyaWEtY2hlY2tlZFwiOiBgJHtpLmNoZWNrZWR9YCwgZGlzYWJsZWQ6IGkuZGlzYWJsZWQsIGlkOiBpLmlkLCB0YWJJbmRleDogMCwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnYWxlcnQtcmFkaW8tYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtdGFwcGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1yYWRpbyc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1yYWRpby1idXR0b24tZGlzYWJsZWQnOiBpLmRpc2FibGVkIHx8IGZhbHNlXG4gICAgICAgICAgICB9LCByb2xlOiBcInJhZGlvXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWJ1dHRvbi1pbm5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1yYWRpby1pY29uXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LXJhZGlvLWlubmVyXCIgfSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtcmFkaW8tbGFiZWxcIiB9LCBpLmxhYmVsKSkpKSkpKTtcbiAgICB9XG4gICAgcmVuZGVySW5wdXQobGFiZWxsZWRieSkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWlucHV0LWdyb3VwXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsbGVkYnkgfSwgaW5wdXRzLm1hcChpID0+IChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtaW5wdXQtd3JhcHBlclwiIH0sIGgoXCJpbnB1dFwiLCB7IHBsYWNlaG9sZGVyOiBpLnBsYWNlaG9sZGVyLCB2YWx1ZTogaS52YWx1ZSwgdHlwZTogaS50eXBlLCBtaW46IGkubWluLCBtYXg6IGkubWF4LCBvbklucHV0OiBlID0+IGkudmFsdWUgPSBlLnRhcmdldC52YWx1ZSwgaWQ6IGkuaWQsIGRpc2FibGVkOiBpLmRpc2FibGVkLCB0YWJJbmRleDogMCwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnYWxlcnQtaW5wdXQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1pbnB1dC1kaXNhYmxlZCc6IGkuZGlzYWJsZWQgfHwgZmFsc2VcbiAgICAgICAgICAgIH0gfSkpKSkpKTtcbiAgICB9XG4gICAgcmVuZGVyQWxlcnRCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5wcm9jZXNzZWRCdXR0b25zO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgYWxlcnRCdXR0b25Hcm91cENsYXNzID0ge1xuICAgICAgICAgICAgJ2FsZXJ0LWJ1dHRvbi1ncm91cCc6IHRydWUsXG4gICAgICAgICAgICAnYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsJzogYnV0dG9ucy5sZW5ndGggPiAyXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBhbGVydEJ1dHRvbkdyb3VwQ2xhc3MgfSwgYnV0dG9ucy5tYXAoYnV0dG9uID0+IGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzczogYnV0dG9uQ2xhc3MoYnV0dG9uKSwgdGFiSW5kZXg6IDAsIG9uQ2xpY2s6ICgpID0+IHRoaXMuYnV0dG9uQ2xpY2soYnV0dG9uKSB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImFsZXJ0LWJ1dHRvbi1pbm5lclwiIH0sIGJ1dHRvbi50ZXh0KSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpKSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgb3ZlcmxheUluZGV4LCBoZWFkZXIsIHN1YkhlYWRlciB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGhkcklkID0gYGFsZXJ0LSR7b3ZlcmxheUluZGV4fS1oZHJgO1xuICAgICAgICBjb25zdCBzdWJIZHJJZCA9IGBhbGVydC0ke292ZXJsYXlJbmRleH0tc3ViLWhkcmA7XG4gICAgICAgIGNvbnN0IG1zZ0lkID0gYGFsZXJ0LSR7b3ZlcmxheUluZGV4fS1tc2dgO1xuICAgICAgICBsZXQgbGFiZWxsZWRCeUlkO1xuICAgICAgICBpZiAoaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsbGVkQnlJZCA9IGhkcklkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN1YkhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYWJlbGxlZEJ5SWQgPSBzdWJIZHJJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImRpYWxvZ1wiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgekluZGV4OiBgJHsyMDAwMCArIG92ZXJsYXlJbmRleH1gLFxuICAgICAgICAgICAgfSwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCB7IFttb2RlXTogdHJ1ZSwgJ2FsZXJ0LXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCB9KSwgb25Jb25BbGVydFdpbGxEaXNtaXNzOiB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciwgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC13cmFwcGVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWhlYWRcIiB9LCBoZWFkZXIgJiYgaChcImgyXCIsIHsgaWQ6IGhkcklkLCBjbGFzczogXCJhbGVydC10aXRsZVwiIH0sIGhlYWRlciksIHN1YkhlYWRlciAmJiBoKFwiaDJcIiwgeyBpZDogc3ViSGRySWQsIGNsYXNzOiBcImFsZXJ0LXN1Yi10aXRsZVwiIH0sIHN1YkhlYWRlcikpLCBoKFwiZGl2XCIsIHsgaWQ6IG1zZ0lkLCBjbGFzczogXCJhbGVydC1tZXNzYWdlXCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5tZXNzYWdlKSB9KSwgdGhpcy5yZW5kZXJBbGVydElucHV0cyhsYWJlbGxlZEJ5SWQpLCB0aGlzLnJlbmRlckFsZXJ0QnV0dG9ucygpKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJidXR0b25zXCI6IFtcImJ1dHRvbnNDaGFuZ2VkXCJdLFxuICAgICAgICBcImlucHV0c1wiOiBbXCJpbnB1dHNDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tYWxlcnQtaW9zLWh7LS1taW4td2lkdGg6MjUwcHg7LS13aWR0aDphdXRvOy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OjkwJTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO2NvbnRhaW46c3RyaWN0Oy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tYWxlcnQtaW9zLWh7ZGlzcGxheTpub25lfS5hbGVydC10b3Auc2MtaW9uLWFsZXJ0LWlvcy1oe3BhZGRpbmctdG9wOjUwcHg7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOmNvbnRlbnQ7b3BhY2l0eTowO3otaW5kZXg6MTB9LmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLXRvcDowfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LWlvcywgLmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLXRvcDo1cHg7Zm9udC13ZWlnaHQ6NDAwfS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO292ZXJmbG93LXk6YXV0bztvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6Y29udGFpbn0uYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvczo6LXdlYmtpdC1zY3JvbGxiYXIsIC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFyLCAuYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvczo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9ze3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7d2lkdGg6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udDppbmhlcml0Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7d2lkdGg6MTAwJX0uYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsLnNjLWlvbi1hbGVydC1pb3N7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtd3JhcDpub3dyYXA7ZmxleC13cmFwOm5vd3JhcH0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7ZGlzcGxheTpibG9jaztib3JkZXI6MDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMHB4O3otaW5kZXg6MH0uYWxlcnQtYnV0dG9uLmlvbi1mb2N1c2VkLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC10YXBwYWJsZS5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtaW9ze2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCNlNmU2ZTYpfS5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5hbGVydC1jaGVja2JveC1idXR0b24tZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1pbnB1dC1kaXNhYmxlZC5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtcmFkaW8tYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9ze2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX0uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2NvbnRhaW46c3RyaWN0fS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcywgLmFsZXJ0LWNoZWNrYm94LnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtcmFkaW8uc2MtaW9uLWFsZXJ0LWlvc3tvdXRsaW5lOm5vbmV9LmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LWlvcywgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5zYy1pb24tYWxlcnQtaW9zLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCNmOWY5ZjkpKTstLW1heC13aWR0aDoyNzBweDtmb250LXNpemU6MTRweH0uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yYWRpdXM6MTNweDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7LmFsZXJ0LXRyYW5zbHVjZW50LnNjLWlvbi1hbGVydC1pb3MtaCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC45KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfX0uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze3BhZGRpbmctbGVmdDoxNnB4O3BhZGRpbmctcmlnaHQ6MTZweDtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjdweDt0ZXh0LWFsaWduOmNlbnRlcn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19LmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLXRvcDo4cHg7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7Zm9udC1zaXplOjE3cHg7Zm9udC13ZWlnaHQ6NjAwfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LWlvc3tjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nik7Zm9udC1zaXplOjE0cHh9LmFsZXJ0LWlucHV0LWdyb3VwLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MjFweDtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtmb250LXNpemU6MTNweDt0ZXh0LWFsaWduOmNlbnRlcn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LWlucHV0LWdyb3VwLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3N7bWF4LWhlaWdodDoyNDBweH0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9zOmVtcHR5e3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjEycHh9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3N7Ym9yZGVyLXJhZGl1czo0cHg7bWFyZ2luLXRvcDoxMHB4O3BhZGRpbmctbGVmdDo2cHg7cGFkZGluZy1yaWdodDo2cHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweDtib3JkZXI6LjU1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCNiZmJmYmYpO2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6NnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjZweDstd2Via2l0LXBhZGRpbmctZW5kOjZweDtwYWRkaW5nLWlubGluZS1lbmQ6NnB4fX0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvczo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIzk5OSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvczo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0uYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcywgLmFsZXJ0LXJhZGlvLWdyb3VwLnNjLWlvbi1hbGVydC1pb3N7LW1zLXNjcm9sbC1jaGFpbmluZzpub25lO292ZXJzY3JvbGwtYmVoYXZpb3I6Y29udGFpbjttYXgtaGVpZ2h0OjI0MHB4O2JvcmRlci10b3A6LjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKTtvdmVyZmxvdy15OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9LmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1pb3N7aGVpZ2h0OjQ0cHh9LmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OjEzcHg7cGFkZGluZy1yaWdodDoxM3B4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1vcmRlcjowO29yZGVyOjA7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTNweDtwYWRkaW5nLWlubGluZS1zdGFydDoxM3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTNweDtwYWRkaW5nLWlubGluZS1lbmQ6MTNweH19W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9ze2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfS5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1pb3N7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO21pbi13aWR0aDozMHB4fVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tsZWZ0OjdweDt0b3A6LTdweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2cHg7aGVpZ2h0OjEycHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItd2lkdGg6MnB4O2JvcmRlci10b3Atd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9W2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MtaCBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3MsIFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LWlvcy1oIFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcywgW2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MgW2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtaW9ze2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6N3B4fS5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtaW9ze3BhZGRpbmctbGVmdDoxM3B4O3BhZGRpbmctcmlnaHQ6MTNweDtwYWRkaW5nLXRvcDoxM3B4O3BhZGRpbmctYm90dG9tOjEzcHg7LW1zLWZsZXg6MTtmbGV4OjE7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtY2hlY2tib3gtbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTNweDtwYWRkaW5nLWlubGluZS1zdGFydDoxM3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTNweDtwYWRkaW5nLWlubGluZS1lbmQ6MTNweH19LmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LWlvc3tib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDoxNnB4O21hcmdpbi1yaWdodDo2cHg7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsI2M4YzdjYykpKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpO2NvbnRhaW46c3RyaWN0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6NnB4O21hcmdpbi1pbmxpbmUtZW5kOjZweH19W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3N7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpO2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtaW9ze2xlZnQ6OXB4O3RvcDo0cHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NXB4O2hlaWdodDoxMnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggW2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtaW9zLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1pb3MtaCBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1pb3MsIFtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zIFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjlweH0uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLXJpZ2h0Oi0uNTVweDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tZW5kOi0uNTVweDttYXJnaW4taW5saW5lLWVuZDotLjU1cHh9fS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Ym9yZGVyLXJhZGl1czowOy1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjUwJTtoZWlnaHQ6NDRweDtib3JkZXItdG9wOi41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMik7Ym9yZGVyLXJpZ2h0Oi41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTtmb250LXNpemU6MTdweDtvdmVyZmxvdzpoaWRkZW59W2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MtaCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6Zmlyc3QtY2hpbGQsIFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LWlvcy1oIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpmaXJzdC1jaGlsZCwgW2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmZpcnN0LWNoaWxke2JvcmRlci1yaWdodDowfS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpsYXN0LWNoaWxke2JvcmRlci1yaWdodDowO2ZvbnQtd2VpZ2h0OjcwMH1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LWlvcy1oIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpsYXN0LWNoaWxkLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1pb3MtaCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZCwgW2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0Oi41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMil9LmFsZXJ0LWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLWFsZXJ0LWlvc3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMSl9XCI7IH1cbn07XG5jb25zdCBidXR0b25DbGFzcyA9IChidXR0b24pID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ICdhbGVydC1idXR0b24nOiB0cnVlLCAnaW9uLWZvY3VzYWJsZSc6IHRydWUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlIH0sIGdldENsYXNzTWFwKGJ1dHRvbi5jc3NDbGFzcykpO1xufTtcblxuZXhwb3J0IHsgQWxlcnQgYXMgaW9uX2FsZXJ0IH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9