(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js ***!
  \******************************************************************/
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
    static get style() { return ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-top:0}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar, .alert-message.sc-ion-alert-md::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-right:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md, .alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md, .alert-input-disabled.sc-ion-alert-md, .alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md, .alert-checkbox.sc-ion-alert-md, .alert-input.sc-ion-alert-md, .alert-radio.sc-ion-alert-md{outline:none}.alert-checkbox-icon.sc-ion-alert-md, .alert-checkbox-inner.sc-ion-alert-md, .alert-radio-icon.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--max-width:280px;font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.alert-head.sc-ion-alert-md{padding-left:23px;padding-right:23px;padding-top:20px;padding-bottom:15px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px}}.alert-title.sc-ion-alert-md{font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{color:var(--ion-text-color,#000)}.alert-sub-title.sc-ion-alert-md{font-size:16px}.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:24px;padding-right:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550,#737373)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.alert-message.sc-ion-alert-md{max-height:240px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md + .alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);color:var(--ion-text-color,#000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary,#3880ff)}.alert-checkbox-group.sc-ion-alert-md, .alert-radio-group.sc-ion-alert-md{position:relative;max-height:240px;border-top:1px solid var(--ion-color-step-150,#d9d9d9);border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding-left:52px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373)}[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850,#262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scaleX(1);transform:scaleX(1)}.alert-checkbox-label.sc-ion-alert-md{padding-left:53px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373);contain:strict}[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast,#fff)}[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}.alert-button-group.sc-ion-alert-md{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.alert-button.sc-ion-alert-md{border-radius:2px;margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button.sc-ion-alert-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWFsZXJ0LW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsbUJBQW1CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDhDQUE4QyxrREFBa0QsMEVBQTBFLFNBQVMsTUFBTSxrQkFBa0IsVUFBVSxZQUFZLGdDQUFnQyx3QkFBd0IsaUJBQWlCLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9EQUFvRCxtVEFBbVQsV0FBVyxZQUFZLFVBQVUsb0NBQW9DLGlCQUFpQixrQkFBa0IsZ0JBQWdCLG1CQUFtQiw4QkFBOEIsc0JBQXNCLDJCQUEyQix1QkFBdUIsa0JBQWtCLHlCQUF5Qiw2RkFBNkYsb0NBQW9DLG1CQUFtQixvQkFBb0IsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLDhCQUE4QixrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSxnQkFBZ0Isa0JBQWtCLG1CQUFtQixpQkFBaUIsb0JBQW9CLGtCQUFrQiw2QkFBNkIsdUNBQXVDLGdCQUFnQixlQUFlLHlCQUF5QixnQkFBZ0IsNkZBQTZGLDhCQUE4QixrQkFBa0IsbUJBQW1CLHVCQUF1QixzQkFBc0IsdUJBQXVCLHNCQUFzQixtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5QixvQ0FBb0Msa0JBQWtCLHlCQUF5QixFQUFFO0FBQ3grVztBQUNBO0FBQ0EsMEJBQTBCLHVFQUF1RSxFQUFFLDREQUFXO0FBQzlHOztBQUU4Qjs7Ozs7Ozs7Ozs7OztBQ3BXOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiIyMlxcY2h1bmtzXFwyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEb2VzIGEgc2ltcGxlIHNhbml0aXphdGlvbiBvZiBhbGwgZWxlbWVudHNcclxuICogaW4gYW4gdW50cnVzdGVkIHN0cmluZ1xyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVET01TdHJpbmcgPSAodW50cnVzdGVkU3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdW50cnVzdGVkU3RyaW5nICE9PSAnc3RyaW5nJyB8fCB1bnRydXN0ZWRTdHJpbmcgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bnRydXN0ZWRTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XHJcbiAgICAgICAgICogc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiBET00sXHJcbiAgICAgICAgICogY3JlYXRlIGEgZGl2IHRvIGRvIG91ciB3b3JrIGluXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCB3b3JraW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZCh3b3JraW5nRGl2KTtcclxuICAgICAgICB3b3JraW5nRGl2LmlubmVySFRNTCA9IHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmUgYW55IGVsZW1lbnRzXHJcbiAgICAgICAgICogdGhhdCBhcmUgYmxvY2tlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2NrZWRUYWdzLmZvckVhY2goYmxvY2tlZFRhZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldEVsZW1lbnRzVG9SZW1vdmUgPSBkb2N1bWVudEZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYmxvY2tlZFRhZyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnRJbmRleCA9IGdldEVsZW1lbnRzVG9SZW1vdmUubGVuZ3RoIC0gMTsgZWxlbWVudEluZGV4ID49IDA7IGVsZW1lbnRJbmRleC0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudHNUb1JlbW92ZVtlbGVtZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50RnJhZ21lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdlIHN0aWxsIG5lZWQgdG8gc2FuaXRpemVcclxuICAgICAgICAgICAgICAgICAqIHRoZSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAqIGFzIHRoZXkgYXJlIGxlZnQgYmVoaW5kXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2NoaWxkSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdvIHRocm91Z2ggcmVtYWluaW5nIGVsZW1lbnRzIGFuZCByZW1vdmVcclxuICAgICAgICAgKiBub24tYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gSUUgZG9lcyBub3Qgc3VwcG9ydCAuY2hpbGRyZW4gb24gZG9jdW1lbnQgZnJhZ21lbnRzLCBvbmx5IC5jaGlsZE5vZGVzXHJcbiAgICAgICAgY29uc3QgZGZDaGlsZHJlbiA9IGdldEVsZW1lbnRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50KTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGRmQ2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcclxuICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGRmQ2hpbGRyZW5bY2hpbGRJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBcHBlbmQgZG9jdW1lbnQgZnJhZ21lbnQgdG8gZGl2XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmcmFnbWVudERpdi5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcclxuICAgICAgICAvLyBGaXJzdCBjaGlsZCBpcyBhbHdheXMgdGhlIGRpdiB3ZSBkaWQgb3VyIHdvcmsgaW5cclxuICAgICAgICBjb25zdCBnZXRJbm5lckRpdiA9IGZyYWdtZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xyXG4gICAgICAgIHJldHVybiAoZ2V0SW5uZXJEaXYgIT09IG51bGwpID8gZ2V0SW5uZXJEaXYuaW5uZXJIVE1MIDogZnJhZ21lbnREaXYuaW5uZXJIVE1MO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBDbGVhbiB1cCBjdXJyZW50IGVsZW1lbnQgYmFzZWQgb24gYWxsb3dlZCBhdHRyaWJ1dGVzXHJcbiAqIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IGRpZyBkb3duIGludG8gYW55IGNoaWxkIGVsZW1lbnRzIHRvXHJcbiAqIGNsZWFuIHRob3NlIHVwIGFzIHdlbGxcclxuICovXHJcbmNvbnN0IHNhbml0aXplRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyBJRSB1c2VzIGNoaWxkTm9kZXMsIHNvIGlnbm9yZSBub2RlcyB0aGF0IGFyZSBub3QgZWxlbWVudHNcclxuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oaSk7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xyXG4gICAgICAgIC8vIHJlbW92ZSBub24tYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2xlYW4gdXAgYW55IGFsbG93ZWQgYXR0cmlic1xyXG4gICAgICAgIC8vIHRoYXQgYXR0ZW1wdCB0byBkbyBhbnkgSlMgZnVubnktYnVzaW5lc3NcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgIT0gbnVsbCAmJiBhdHRyaWJ1dGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdqYXZhc2NyaXB0OicpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2FuaXRpemUgYW55IG5lc3RlZCBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tpXSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBJRSBkb2Vzbid0IGFsd2F5cyBzdXBwb3J0IC5jaGlsZHJlblxyXG4gKiBzbyB3ZSByZXZlcnQgdG8gLmNoaWxkTm9kZXMgaW5zdGVhZFxyXG4gKi9cclxuY29uc3QgZ2V0RWxlbWVudENoaWxkcmVuID0gKGVsKSA9PiB7XHJcbiAgICByZXR1cm4gKGVsLmNoaWxkcmVuICE9IG51bGwpID8gZWwuY2hpbGRyZW4gOiBlbC5jaGlsZE5vZGVzO1xyXG59O1xyXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFsnY2xhc3MnLCAnaWQnLCAnaHJlZicsICdzcmMnLCAnbmFtZScsICdzbG90J107XHJcbmNvbnN0IGJsb2NrZWRUYWdzID0gWydzY3JpcHQnLCAnc3R5bGUnLCAnaWZyYW1lJywgJ21ldGEnLCAnbGluaycsICdvYmplY3QnLCAnZW1iZWQnXTtcblxuZXhwb3J0IHsgc2FuaXRpemVET01TdHJpbmcgYXMgcyB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGdldElvbk1vZGUsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBCIGFzIEJBQ0tEUk9QLCBpIGFzIGlzQ2FuY2VsLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xuXG4vKipcclxuICogaU9TIEFsZXJ0IEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMyk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXHJcbiAgICAgICAgLmtleWZyYW1lcyhbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6ICcwLjAxJywgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdlYXNlLWluLW91dCcpXHJcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogaU9TIEFsZXJ0IExlYXZlIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMywgMCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXHJcbiAgICAgICAgLmtleWZyYW1lcyhbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDAuOTksIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9LFxyXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcclxuICAgICAgICAuZHVyYXRpb24oMjAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBNZCBBbGVydCBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMzIpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtd3JhcHBlcicpKVxyXG4gICAgICAgIC5rZXlmcmFtZXMoW1xyXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAnMC4wMScsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH1cclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnZWFzZS1pbi1vdXQnKVxyXG4gICAgICAgIC5kdXJhdGlvbigxNTApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1kIEFsZXJ0IExlYXZlIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4zMiwgMCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnZWFzZS1pbi1vdXQnKVxyXG4gICAgICAgIC5kdXJhdGlvbigxNTApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuY29uc3QgQWxlcnQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZElucHV0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgYnV0dG9ucyB0byBiZSBhZGRlZCB0byB0aGUgYWxlcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGlucHV0IHRvIHNob3cgaW4gdGhlIGFsZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnB1dHMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGFsZXJ0IHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciA9IChldikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm9sZSA9IGV2LmRldGFpbC5yb2xlO1xuICAgICAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gdGhpcy5wcm9jZXNzZWRCdXR0b25zLmZpbmQoYiA9PiBiLnJvbGUgPT09ICdjYW5jZWwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByZXBhcmVPdmVybGF5KHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0RGlkUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWxlcnRXaWxsUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWxlcnRXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICAgICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydERpZERpc21pc3NcIiwgNyk7XG4gICAgfVxuICAgIGJ1dHRvbnNDaGFuZ2VkKCkge1xuICAgICAgICBjb25zdCBidXR0b25zID0gdGhpcy5idXR0b25zO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMgPSBidXR0b25zLm1hcChidG4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgYnRuID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICA/IHsgdGV4dDogYnRuLCByb2xlOiBidG4udG9Mb3dlckNhc2UoKSA9PT0gJ2NhbmNlbCcgPyAnY2FuY2VsJyA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgICAgICAgOiBidG47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnB1dHNDaGFuZ2VkKCkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmlucHV0cztcbiAgICAgICAgLy8gQW4gYWxlcnQgY2FuIGJlIGNyZWF0ZWQgd2l0aCBzZXZlcmFsIGRpZmZlcmVudCBpbnB1dHMuIFJhZGlvcyxcbiAgICAgICAgLy8gY2hlY2tib3hlcyBhbmQgaW5wdXRzIGFyZSBhbGwgYWNjZXB0ZWQsIGJ1dCB0aGV5IGNhbm5vdCBiZSBtaXhlZC5cbiAgICAgICAgY29uc3QgaW5wdXRUeXBlcyA9IG5ldyBTZXQoaW5wdXRzLm1hcChpID0+IGkudHlwZSkpO1xuICAgICAgICBpZiAoaW5wdXRUeXBlcy5oYXMoJ2NoZWNrYm94JykgJiYgaW5wdXRUeXBlcy5oYXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQWxlcnQgY2Fubm90IG1peCBpbnB1dCB0eXBlczogJHsoQXJyYXkuZnJvbShpbnB1dFR5cGVzLnZhbHVlcygpKS5qb2luKCcvJykpfS4gUGxlYXNlIHNlZSBhbGVydCBkb2NzIGZvciBtb3JlIGluZm8uYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBpbnB1dFR5cGVzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRJbnB1dHMgPSBpbnB1dHMubWFwKChpLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIHR5cGU6IGkudHlwZSB8fCAndGV4dCcsXG4gICAgICAgICAgICBuYW1lOiBpLm5hbWUgfHwgYCR7aW5kZXh9YCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpLnBsYWNlaG9sZGVyIHx8ICcnLFxuICAgICAgICAgICAgdmFsdWU6IGkudmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogaS5sYWJlbCxcbiAgICAgICAgICAgIGNoZWNrZWQ6ICEhaS5jaGVja2VkLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICEhaS5kaXNhYmxlZCxcbiAgICAgICAgICAgIGlkOiBpLmlkIHx8IGBhbGVydC1pbnB1dC0ke3RoaXMub3ZlcmxheUluZGV4fS0ke2luZGV4fWAsXG4gICAgICAgICAgICBoYW5kbGVyOiBpLmhhbmRsZXIsXG4gICAgICAgICAgICBtaW46IGkubWluLFxuICAgICAgICAgICAgbWF4OiBpLm1heFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICB0aGlzLmlucHV0c0NoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5idXR0b25zQ2hhbmdlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IHRoZSBhbGVydCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHJlc2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHByZXNlbnQodGhpcywgJ2FsZXJ0RW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIGFsZXJ0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBhbGVydC5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgYWxlcnQuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqL1xuICAgIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgICAgICByZXR1cm4gZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAnYWxlcnRMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbGVydCBkaWQgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBvbkRpZERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWxlcnREaWREaXNtaXNzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWxlcnQgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uV2lsbERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWxlcnRXaWxsRGlzbWlzcycpO1xuICAgIH1cbiAgICByYkNsaWNrKHNlbGVjdGVkSW5wdXQpIHtcbiAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiB0aGlzLnByb2Nlc3NlZElucHV0cykge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGlucHV0ID09PSBzZWxlY3RlZElucHV0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlSWQgPSBzZWxlY3RlZElucHV0LmlkO1xuICAgICAgICBzYWZlQ2FsbChzZWxlY3RlZElucHV0LmhhbmRsZXIsIHNlbGVjdGVkSW5wdXQpO1xuICAgICAgICB0aGlzLmVsLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuICAgIGNiQ2xpY2soc2VsZWN0ZWRJbnB1dCkge1xuICAgICAgICBzZWxlY3RlZElucHV0LmNoZWNrZWQgPSAhc2VsZWN0ZWRJbnB1dC5jaGVja2VkO1xuICAgICAgICBzYWZlQ2FsbChzZWxlY3RlZElucHV0LmhhbmRsZXIsIHNlbGVjdGVkSW5wdXQpO1xuICAgICAgICB0aGlzLmVsLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuICAgIGJ1dHRvbkNsaWNrKGJ1dHRvbikge1xuICAgICAgICBjb25zdCByb2xlID0gYnV0dG9uLnJvbGU7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh7IHZhbHVlcyB9LCByb2xlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXR1cm5EYXRhID0gdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24sIHZhbHVlcyk7XG4gICAgICAgIGlmIChyZXR1cm5EYXRhICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyhPYmplY3QuYXNzaWduKHsgdmFsdWVzIH0sIHJldHVybkRhdGEpLCBidXR0b24ucm9sZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICAgIGNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbiwgZGF0YSkge1xuICAgICAgICBpZiAoYnV0dG9uICYmIGJ1dHRvbi5oYW5kbGVyKSB7XG4gICAgICAgICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgICAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgICAgICAgIGNvbnN0IHJldHVybkRhdGEgPSBzYWZlQ2FsbChidXR0b24uaGFuZGxlciwgZGF0YSk7XG4gICAgICAgICAgICBpZiAocmV0dXJuRGF0YSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBoYW5kbGVyIGlzIGZhbHNlIHRoZW4gZG8gbm90IGRpc21pc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldHVybkRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBnZXRWYWx1ZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NlZElucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aG91dCBhbnkgb3B0aW9ucy9pbnB1dHMgYXQgYWxsXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRoIHJhZGlvIGJ1dHRvbnMgKHNpbmdsZSB2YWx1ZSBzZWxlY3QpXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIG9uZSB2YWx1ZSB3aGljaCBpcyBjaGVja2VkLCBvdGhlcndpc2UgdW5kZWZpbmVkXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkSW5wdXQgPSB0aGlzLnByb2Nlc3NlZElucHV0cy5maW5kKGkgPT4gISFpLmNoZWNrZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWRJbnB1dCA/IGNoZWNrZWRJbnB1dC52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aCBjaGVja2JveGVzIChtdWx0aXBsZSB2YWx1ZSBzZWxlY3QpXG4gICAgICAgICAgICAvLyByZXR1cm4gYW4gYXJyYXkgb2YgYWxsIHRoZSBjaGVja2VkIHZhbHVlc1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZpbHRlcihpID0+IGkuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRoIHRleHQgaW5wdXRzXG4gICAgICAgIC8vIHJldHVybiBhbiBvYmplY3Qgb2YgYWxsIHRoZSB2YWx1ZXMgd2l0aCB0aGUgaW5wdXQgbmFtZSBhcyB0aGUga2V5XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnByb2Nlc3NlZElucHV0cy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2kubmFtZV0gPSBpLnZhbHVlIHx8ICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG4gICAgcmVuZGVyQWxlcnRJbnB1dHMobGFiZWxsZWRCeSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaW5wdXRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6IHJldHVybiB0aGlzLnJlbmRlckNoZWNrYm94KGxhYmVsbGVkQnkpO1xuICAgICAgICAgICAgY2FzZSAncmFkaW8nOiByZXR1cm4gdGhpcy5yZW5kZXJSYWRpbyhsYWJlbGxlZEJ5KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiB0aGlzLnJlbmRlcklucHV0KGxhYmVsbGVkQnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlckNoZWNrYm94KGxhYmVsbGVkYnkpIHtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtY2hlY2tib3gtZ3JvdXBcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxsZWRieSB9LCBpbnB1dHMubWFwKGkgPT4gKGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmNiQ2xpY2soaSksIFwiYXJpYS1jaGVja2VkXCI6IGAke2kuY2hlY2tlZH1gLCBpZDogaS5pZCwgZGlzYWJsZWQ6IGkuZGlzYWJsZWQsIHRhYkluZGV4OiAwLCByb2xlOiBcImNoZWNrYm94XCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2FsZXJ0LXRhcHBhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtY2hlY2tib3gnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1jaGVja2JveC1idXR0b24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtY2hlY2tib3gtYnV0dG9uLWRpc2FibGVkJzogaS5kaXNhYmxlZCB8fCBmYWxzZVxuICAgICAgICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtYnV0dG9uLWlubmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWljb25cIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtY2hlY2tib3gtaW5uZXJcIiB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1jaGVja2JveC1sYWJlbFwiIH0sIGkubGFiZWwpKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpKSkpKTtcbiAgICB9XG4gICAgcmVuZGVyUmFkaW8obGFiZWxsZWRieSkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LXJhZGlvLWdyb3VwXCIsIHJvbGU6IFwicmFkaW9ncm91cFwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbGxlZGJ5LCBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOiB0aGlzLmFjdGl2ZUlkIH0sIGlucHV0cy5tYXAoaSA9PiAoaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMucmJDbGljayhpKSwgXCJhcmlhLWNoZWNrZWRcIjogYCR7aS5jaGVja2VkfWAsIGRpc2FibGVkOiBpLmRpc2FibGVkLCBpZDogaS5pZCwgdGFiSW5kZXg6IDAsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2FsZXJ0LXJhZGlvLWJ1dHRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsZXJ0LXRhcHBhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtcmFkaW8nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtcmFkaW8tYnV0dG9uLWRpc2FibGVkJzogaS5kaXNhYmxlZCB8fCBmYWxzZVxuICAgICAgICAgICAgfSwgcm9sZTogXCJyYWRpb1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1idXR0b24taW5uZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtcmFkaW8taWNvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1yYWRpby1pbm5lclwiIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LXJhZGlvLWxhYmVsXCIgfSwgaS5sYWJlbCkpKSkpKSk7XG4gICAgfVxuICAgIHJlbmRlcklucHV0KGxhYmVsbGVkYnkpIHtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7XG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1pbnB1dC1ncm91cFwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbGxlZGJ5IH0sIGlucHV0cy5tYXAoaSA9PiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWlucHV0LXdyYXBwZXJcIiB9LCBoKFwiaW5wdXRcIiwgeyBwbGFjZWhvbGRlcjogaS5wbGFjZWhvbGRlciwgdmFsdWU6IGkudmFsdWUsIHR5cGU6IGkudHlwZSwgbWluOiBpLm1pbiwgbWF4OiBpLm1heCwgb25JbnB1dDogZSA9PiBpLnZhbHVlID0gZS50YXJnZXQudmFsdWUsIGlkOiBpLmlkLCBkaXNhYmxlZDogaS5kaXNhYmxlZCwgdGFiSW5kZXg6IDAsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2FsZXJ0LWlucHV0JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtaW5wdXQtZGlzYWJsZWQnOiBpLmRpc2FibGVkIHx8IGZhbHNlXG4gICAgICAgICAgICB9IH0pKSkpKSk7XG4gICAgfVxuICAgIHJlbmRlckFsZXJ0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJvY2Vzc2VkQnV0dG9ucztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGFsZXJ0QnV0dG9uR3JvdXBDbGFzcyA9IHtcbiAgICAgICAgICAgICdhbGVydC1idXR0b24tZ3JvdXAnOiB0cnVlLFxuICAgICAgICAgICAgJ2FsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbCc6IGJ1dHRvbnMubGVuZ3RoID4gMlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogYWxlcnRCdXR0b25Hcm91cENsYXNzIH0sIGJ1dHRvbnMubWFwKGJ1dHRvbiA9PiBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3M6IGJ1dHRvbkNsYXNzKGJ1dHRvbiksIHRhYkluZGV4OiAwLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmJ1dHRvbkNsaWNrKGJ1dHRvbikgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJhbGVydC1idXR0b24taW5uZXJcIiB9LCBidXR0b24udGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSkpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG92ZXJsYXlJbmRleCwgaGVhZGVyLCBzdWJIZWFkZXIgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBoZHJJZCA9IGBhbGVydC0ke292ZXJsYXlJbmRleH0taGRyYDtcbiAgICAgICAgY29uc3Qgc3ViSGRySWQgPSBgYWxlcnQtJHtvdmVybGF5SW5kZXh9LXN1Yi1oZHJgO1xuICAgICAgICBjb25zdCBtc2dJZCA9IGBhbGVydC0ke292ZXJsYXlJbmRleH0tbXNnYDtcbiAgICAgICAgbGV0IGxhYmVsbGVkQnlJZDtcbiAgICAgICAgaWYgKGhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYWJlbGxlZEJ5SWQgPSBoZHJJZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdWJIZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGFiZWxsZWRCeUlkID0gc3ViSGRySWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJkaWFsb2dcIiwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7MjAwMDAgKyBvdmVybGF5SW5kZXh9YCxcbiAgICAgICAgICAgIH0sIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgeyBbbW9kZV06IHRydWUsICdhbGVydC10cmFuc2x1Y2VudCc6IHRoaXMudHJhbnNsdWNlbnQgfSksIG9uSW9uQWxlcnRXaWxsRGlzbWlzczogdGhpcy5kaXNwYXRjaENhbmNlbEhhbmRsZXIsIG9uSW9uQmFja2Ryb3BUYXA6IHRoaXMub25CYWNrZHJvcFRhcCB9LCBoKFwiaW9uLWJhY2tkcm9wXCIsIHsgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtd3JhcHBlclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1oZWFkXCIgfSwgaGVhZGVyICYmIGgoXCJoMlwiLCB7IGlkOiBoZHJJZCwgY2xhc3M6IFwiYWxlcnQtdGl0bGVcIiB9LCBoZWFkZXIpLCBzdWJIZWFkZXIgJiYgaChcImgyXCIsIHsgaWQ6IHN1YkhkcklkLCBjbGFzczogXCJhbGVydC1zdWItdGl0bGVcIiB9LCBzdWJIZWFkZXIpKSwgaChcImRpdlwiLCB7IGlkOiBtc2dJZCwgY2xhc3M6IFwiYWxlcnQtbWVzc2FnZVwiLCBpbm5lckhUTUw6IHNhbml0aXplRE9NU3RyaW5nKHRoaXMubWVzc2FnZSkgfSksIHRoaXMucmVuZGVyQWxlcnRJbnB1dHMobGFiZWxsZWRCeUlkKSwgdGhpcy5yZW5kZXJBbGVydEJ1dHRvbnMoKSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiYnV0dG9uc1wiOiBbXCJidXR0b25zQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJpbnB1dHNcIjogW1wiaW5wdXRzQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLWFsZXJ0LW1kLWh7LS1taW4td2lkdGg6MjUwcHg7LS13aWR0aDphdXRvOy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OjkwJTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO2NvbnRhaW46c3RyaWN0Oy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tYWxlcnQtbWQtaHtkaXNwbGF5Om5vbmV9LmFsZXJ0LXRvcC5zYy1pb24tYWxlcnQtbWQtaHtwYWRkaW5nLXRvcDo1MHB4Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOmNvbnRlbnQ7b3BhY2l0eTowO3otaW5kZXg6MTB9LmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tdG9wOjB9LmFsZXJ0LXN1Yi10aXRsZS5zYy1pb24tYWxlcnQtbWQsIC5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tdG9wOjVweDtmb250LXdlaWdodDo0MDB9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtvdmVyZmxvdy15OmF1dG87b3ZlcnNjcm9sbC1iZWhhdmlvci15OmNvbnRhaW59LmFsZXJ0LWNoZWNrYm94LWdyb3VwLnNjLWlvbi1hbGVydC1tZDo6LXdlYmtpdC1zY3JvbGxiYXIsIC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZDo6LXdlYmtpdC1zY3JvbGxiYXIsIC5hbGVydC1yYWRpby1ncm91cC5zYy1pb24tYWxlcnQtbWQ6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1ke3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7d2lkdGg6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udDppbmhlcml0Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzt3aWR0aDoxMDAlfS5hbGVydC1idXR0b24tZ3JvdXAtdmVydGljYWwuc2MtaW9uLWFsZXJ0LW1key1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXdyYXA6bm93cmFwO2ZsZXgtd3JhcDpub3dyYXB9LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7bWFyZ2luLXJpZ2h0OjA7ZGlzcGxheTpibG9jaztib3JkZXI6MDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMHB4O3otaW5kZXg6MH0uYWxlcnQtYnV0dG9uLmlvbi1mb2N1c2VkLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LXRhcHBhYmxlLmlvbi1mb2N1c2VkLnNjLWlvbi1hbGVydC1tZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwjZTZlNmU2KX0uYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5hbGVydC1jaGVja2JveC1idXR0b24tZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtaW5wdXQtZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtcmFkaW8tYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZHtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9LmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246c3RhcnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2NvbnRhaW46c3RyaWN0fS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtY2hlY2tib3guc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtcmFkaW8uc2MtaW9uLWFsZXJ0LW1ke291dGxpbmU6bm9uZX0uYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtbWQsIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtbWQsIC5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNjLWlvbi1hbGVydC1tZC1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLW1heC13aWR0aDoyODBweDtmb250LXNpemU6MTRweH0uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWR7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMik7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6MjNweDtwYWRkaW5nLXJpZ2h0OjIzcHg7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToxNXB4O3RleHQtYWxpZ246c3RhcnR9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MjNweDtwYWRkaW5nLWlubGluZS1zdGFydDoyM3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjNweDtwYWRkaW5nLWlubGluZS1lbmQ6MjNweH19LmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZHtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo1MDB9LmFsZXJ0LXN1Yi10aXRsZS5zYy1pb24tYWxlcnQtbWQsIC5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWR7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCl9LmFsZXJ0LXN1Yi10aXRsZS5zYy1pb24tYWxlcnQtbWR7Zm9udC1zaXplOjE2cHh9LmFsZXJ0LWlucHV0LWdyb3VwLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1ke3BhZGRpbmctbGVmdDoyNHB4O3BhZGRpbmctcmlnaHQ6MjRweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjIwcHg7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjI0cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjRweDstd2Via2l0LXBhZGRpbmctZW5kOjI0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjI0cHh9fS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZHttYXgtaGVpZ2h0OjI0MHB4O2ZvbnQtc2l6ZToxNnB4fS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZDplbXB0eXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1tZCArIC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLXRvcDowfS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjVweDttYXJnaW4tYm90dG9tOjVweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Q5ZDlkOSk7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCl9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDpmb2N1c3ttYXJnaW4tYm90dG9tOjRweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX0uYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1ke3Bvc2l0aW9uOnJlbGF0aXZlO21heC1oZWlnaHQ6MjQwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNkOWQ5ZDkpO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZDlkOWQ5KTtvdmVyZmxvdzphdXRvfS5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWR7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjQ4cHg7b3ZlcmZsb3c6aGlkZGVufS5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OjUycHg7cGFkZGluZy1yaWdodDoyNnB4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDstbXMtZmxleDoxO2ZsZXg6MTtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIzI2MjYyNik7Zm9udC1zaXplOjE2cHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1ke3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo1MnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjUycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyNnB4O3BhZGRpbmctaW5saW5lLWVuZDoyNnB4fX0uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWR7bGVmdDoyNnB4O3RvcDowO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3JkZXItd2lkdGg6MnB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtbWQtaCAuYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWQsIFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LW1kLWggLmFsZXJ0LXJhZGlvLWljb24uc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjI2cHh9LmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1tZHtsZWZ0OjNweDt0b3A6M3B4O2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI4cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yOHMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSksLXdlYmtpdC10cmFuc2Zvcm0gLjI4cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtbWQtaCAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1tZC1oIC5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtbWQsIFtkaXI9cnRsXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjNweH1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1ke2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjMjYyNjI2KX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWR7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtbWR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9LmFsZXJ0LWNoZWNrYm94LWxhYmVsLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6NTNweDtwYWRkaW5nLXJpZ2h0OjI2cHg7cGFkZGluZy10b3A6MTNweDtwYWRkaW5nLWJvdHRvbToxM3B4Oy1tcy1mbGV4OjE7ZmxleDoxO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjMjYyNjI2KTtmb250LXNpemU6MTZweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjUzcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NTNweDstd2Via2l0LXBhZGRpbmctZW5kOjI2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjI2cHh9fS5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZHtsZWZ0OjI2cHg7dG9wOjA7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItd2lkdGg6MnB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO2NvbnRhaW46c3RyaWN0fVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtbWQtaCAuYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtbWQsIFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LW1kLWggLmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjI2cHh9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1ke2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtbWR7bGVmdDozcHg7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NnB4O2hlaWdodDoxMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtbWQtaCBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1tZC1oIFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtbWQsIFtkaXI9cnRsXS5zYy1pb24tYWxlcnQtbWQgW2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjNweH0uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy1tcy1mbGV4LXdyYXA6d3JhcC1yZXZlcnNlO2ZsZXgtd3JhcDp3cmFwLXJldmVyc2U7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4fX0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDo4cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7Zm9udC13ZWlnaHQ6NTAwO3RleHQtYWxpZ246ZW5kO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtvdmVyZmxvdzpoaWRkZW59XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6OHB4O21hcmdpbi1pbmxpbmUtZW5kOjhweDtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTBweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTBweDtwYWRkaW5nLWlubGluZS1lbmQ6MTBweH19LmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVwiOyB9XG59O1xuY29uc3QgYnV0dG9uQ2xhc3MgPSAoYnV0dG9uKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAnYWxlcnQtYnV0dG9uJzogdHJ1ZSwgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLCAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSB9LCBnZXRDbGFzc01hcChidXR0b24uY3NzQ2xhc3MpKTtcbn07XG5cbmV4cG9ydCB7IEFsZXJ0IGFzIGlvbl9hbGVydCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==