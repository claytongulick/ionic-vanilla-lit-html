(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_searchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_searchbar", function() { return Searchbar; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-3476b023.js */ "../node_modules/@ionic/core/dist/esm/index-3476b023.js");






const Searchbar = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        this.noAnimate = true;
        /**
         * If `true`, enable searchbar animation.
         */
        this.animated = false;
        /**
         * Set the input's autocomplete property.
         */
        this.autocomplete = 'off';
        /**
         * Set the input's autocorrect property.
         */
        this.autocorrect = 'off';
        /**
         * Set the cancel button icon. Only applies to `md` mode.
         */
        this.cancelButtonIcon = 'md-arrow-back';
        /**
         * Set the the cancel button text. Only applies to `ios` mode.
         */
        this.cancelButtonText = 'Cancel';
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 250;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * A hint to the browser for which keyboard to display.
         * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
         * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        this.inputmode = 'search';
        /**
         * Set the input's placeholder.
         * `placeholder` can accept either plaintext or HTML as a string.
         * To display characters normally reserved for HTML, they
         * must be escaped. For example `<Ionic>` would become
         * `&lt;Ionic&gt;`
         *
         * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
         */
        this.placeholder = 'Search';
        /**
         * The icon to use as the search icon.
         */
        this.searchIcon = 'search';
        /**
         * Sets the behavior for the cancel button. Defaults to `"never"`.
         * Setting to `"focus"` shows the cancel button on focus.
         * Setting to `"never"` hides the cancel button.
         * Setting to `"always"` shows the cancel button regardless
         * of focus state.
         */
        this.showCancelButton = 'never';
        /**
         * If `true`, enable spellcheck on the input.
         */
        this.spellcheck = false;
        /**
         * Set the type of the input.
         */
        this.type = 'search';
        /**
         * the value of the searchbar.
         */
        this.value = '';
        /**
         * Clears the input field and triggers the control change.
         */
        this.onClearInput = (ev) => {
            this.ionClear.emit();
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
            // wait for 4 frames
            setTimeout(() => {
                const value = this.getValue();
                if (value !== '') {
                    this.value = '';
                    this.ionInput.emit();
                }
            }, 16 * 4);
        };
        /**
         * Clears the input field and tells the input to blur since
         * the clearInput function doesn't want the input to blur
         * then calls the custom cancel function if the user passed one in.
         */
        this.onCancelSearchbar = (ev) => {
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.ionCancel.emit();
            this.onClearInput();
            if (this.nativeInput) {
                this.nativeInput.blur();
            }
        };
        /**
         * Update the Searchbar input value when the input changes
         */
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value;
            }
            this.ionInput.emit(ev);
        };
        /**
         * Sets the Searchbar to not focused and checks if it should align left
         * based on whether there is a value in the searchbar or not.
         */
        this.onBlur = () => {
            this.focused = false;
            this.ionBlur.emit();
            this.positionElements();
        };
        /**
         * Sets the Searchbar to focused and active on input focus.
         */
        this.onFocus = () => {
            this.focused = true;
            this.ionFocus.emit();
            this.positionElements();
        };
        this.ionInput = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInput", 7);
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionCancel = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
        this.ionClear = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionClear", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
    }
    debounceChanged() {
        this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
    }
    valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.getValue();
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.ionChange.emit({ value });
    }
    showCancelButtonChanged() {
        requestAnimationFrame(() => {
            this.positionElements();
            this.el.forceUpdate();
        });
    }
    connectedCallback() {
        this.emitStyle();
    }
    componentDidLoad() {
        if (this.showCancelButton === 'false' || this.showCancelButton === false) {
            console.warn('The boolean values of showCancelButton are deprecated. Please use "never" instead of "false".');
        }
        if (this.showCancelButton === '' || this.showCancelButton === 'true' || this.showCancelButton === true) {
            console.warn('The boolean values of showCancelButton are deprecated. Please use "focus" instead of "true".');
        }
        this.positionElements();
        this.debounceChanged();
        setTimeout(() => {
            this.noAnimate = false;
        }, 300);
    }
    emitStyle() {
        this.ionStyle.emit({
            'searchbar': true
        });
    }
    /**
     * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
     * `input.focus()`.
     */
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    /**
     * Returns the native `<input>` element used under the hood.
     */
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    /**
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    positionElements() {
        const value = this.getValue();
        const prevAlignLeft = this.shouldAlignLeft;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
        this.shouldAlignLeft = shouldAlignLeft;
        if (mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    }
    /**
     * Positions the input placeholder
     */
    positionPlaceholder() {
        const inputEl = this.nativeInput;
        if (!inputEl) {
            return;
        }
        const isRTL = document.dir === 'rtl';
        const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute('style');
            iconEl.removeAttribute('style');
        }
        else {
            // Create a dummy span to get the placeholder width
            const doc = document;
            const tempSpan = doc.createElement('span');
            tempSpan.innerHTML = Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__["s"])(this.placeholder) || '';
            doc.body.appendChild(tempSpan);
            // Get the width of the span then remove it
            const textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            // Calculate the input padding
            const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            // Calculate the icon margin
            const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            // Set the input padding start and icon margin start
            if (isRTL) {
                inputEl.style.paddingRight = inputLeft;
                iconEl.style.marginRight = iconLeft;
            }
            else {
                inputEl.style.paddingLeft = inputLeft;
                iconEl.style.marginLeft = iconLeft;
            }
        }
    }
    /**
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    positionCancelButton() {
        const isRTL = document.dir === 'rtl';
        const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
        const shouldShowCancel = this.shouldShowCancelButton();
        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            const cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = '0';
                }
                else {
                    cancelStyle.marginRight = '0';
                }
            }
            else {
                const offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + 'px';
                    }
                    else {
                        cancelStyle.marginRight = -offset + 'px';
                    }
                }
            }
        }
    }
    getValue() {
        return this.value || '';
    }
    hasValue() {
        return this.getValue() !== '';
    }
    /**
     * Determines whether or not the cancel button should be visible onscreen.
     * Cancel button should be shown if one of two conditions applies:
     * 1. `showCancelButton` is set to `always`.
     * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
     */
    shouldShowCancelButton() {
        if (isCancelButtonSetToNever(this.showCancelButton) ||
            (isCancelButtonSetToFocus(this.showCancelButton) && !this.focused)) {
            return false;
        }
        return true;
    }
    render() {
        const animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true);
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const clearIcon = this.clearIcon || (mode === 'ios' ? 'ios-close-circle' : 'md-close');
        const searchIcon = this.searchIcon;
        const cancelButton = !isCancelButtonSetToNever(this.showCancelButton) && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": "cancel", type: "button", tabIndex: mode === 'ios' && !this.shouldShowCancelButton() ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, mode === 'md'
            ? Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: this.cancelButtonIcon, lazy: false })
            : this.cancelButtonText)));
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "search", "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true, 'searchbar-animated': animated, 'searchbar-disabled': this.disabled, 'searchbar-no-animate': animated && this.noAnimate, 'searchbar-has-value': this.hasValue(), 'searchbar-left-aligned': this.shouldAlignLeft, 'searchbar-has-focus': this.focused, 'searchbar-should-show-cancel': this.shouldShowCancelButton() }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "searchbar-input-container" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { "aria-label": "search text", disabled: this.disabled, ref: el => this.nativeInput = el, class: "searchbar-input", inputMode: this.inputmode, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), mode === 'md' && cancelButton, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { mode: mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": "reset", type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))), mode === 'ios' && cancelButton));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "debounce": ["debounceChanged"],
        "value": ["valueChanged"],
        "showCancelButton": ["showCancelButtonChanged"]
    }; }
    static get style() { return ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-clear, .searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios > div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-ios-h{--clear-button-color:var(--ion-color-step-600,#666);--cancel-button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-text-color,#000);--icon-color:var(--ion-color-step-600,#666);--background:rgba(var(--ion-text-color-rgb,0,0,0),0.07);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:5px;top:0;position:absolute;width:22px;height:100%;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;border-radius:10px;height:100%;font-size:17px;font-weight:400;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:50%;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}\@media (any-hover:hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h, ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color), ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}"; }
};
/**
 * Check if the cancel button should never be shown.
 *
 * TODO: Remove this when the `true` and `false`
 * options are removed.
 */
const isCancelButtonSetToNever = (showCancelButton) => {
    return (showCancelButton === 'never' ||
        showCancelButton === 'false' ||
        showCancelButton === false);
};
/**
 * Check if the cancel button should be shown on focus.
 *
 * TODO: Remove this when the `true` and `false`
 * options are removed.
 */
const isCancelButtonSetToFocus = (showCancelButton) => {
    return (showCancelButton === 'focus' ||
        showCancelButton === 'true' ||
        showCancelButton === true ||
        showCancelButton === '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNlYXJjaGJhci1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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OlsiLyoqXHJcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xyXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZURPTVN0cmluZyA9ICh1bnRydXN0ZWRTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcclxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcclxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xyXG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcclxuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChibG9ja2VkVGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxyXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcclxuICAgICAgICBjb25zdCBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcclxuICAgICAgICBjb25zdCBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxyXG4gICAgICAgIGNvbnN0IGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcclxuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cclxuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xyXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXHJcbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXHJcbiAqL1xyXG5jb25zdCBnZXRFbGVtZW50Q2hpbGRyZW4gPSAoZWwpID0+IHtcclxuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XHJcbn07XHJcbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcclxuY29uc3QgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuXG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IHMgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2luZGV4LTM0NzZiMDIzLmpzJztcblxuY29uc3QgU2VhcmNoYmFyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pc0NhbmNlbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG91bGRBbGlnbkxlZnQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub0FuaW1hdGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBlbmFibGUgc2VhcmNoYmFyIGFuaW1hdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgaW5wdXQncyBhdXRvY29tcGxldGUgcHJvcGVydHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBpbnB1dCdzIGF1dG9jb3JyZWN0IHByb3BlcnR5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvY29ycmVjdCA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBjYW5jZWwgYnV0dG9uIGljb24uIE9ubHkgYXBwbGllcyB0byBgbWRgIG1vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbkljb24gPSAnbWQtYXJyb3ctYmFjayc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIHRoZSBjYW5jZWwgYnV0dG9uIHRleHQuIE9ubHkgYXBwbGllcyB0byBgaW9zYCBtb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b25UZXh0ID0gJ0NhbmNlbCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gdHJpZ2dlciB0aGUgYGlvbkNoYW5nZWAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlYm91bmNlID0gMjUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGhpbnQgdG8gdGhlIGJyb3dzZXIgZm9yIHdoaWNoIGtleWJvYXJkIHRvIGRpc3BsYXkuXG4gICAgICAgICAqIFBvc3NpYmxlIHZhbHVlczogYFwibm9uZVwiYCwgYFwidGV4dFwiYCwgYFwidGVsXCJgLCBgXCJ1cmxcImAsXG4gICAgICAgICAqIGBcImVtYWlsXCJgLCBgXCJudW1lcmljXCJgLCBgXCJkZWNpbWFsXCJgLCBhbmQgYFwic2VhcmNoXCJgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnB1dG1vZGUgPSAnc2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgaW5wdXQncyBwbGFjZWhvbGRlci5cbiAgICAgICAgICogYHBsYWNlaG9sZGVyYCBjYW4gYWNjZXB0IGVpdGhlciBwbGFpbnRleHQgb3IgSFRNTCBhcyBhIHN0cmluZy5cbiAgICAgICAgICogVG8gZGlzcGxheSBjaGFyYWN0ZXJzIG5vcm1hbGx5IHJlc2VydmVkIGZvciBIVE1MLCB0aGV5XG4gICAgICAgICAqIG11c3QgYmUgZXNjYXBlZC4gRm9yIGV4YW1wbGUgYDxJb25pYz5gIHdvdWxkIGJlY29tZVxuICAgICAgICAgKiBgJmx0O0lvbmljJmd0O2BcbiAgICAgICAgICpcbiAgICAgICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb246IFtTZWN1cml0eSBEb2N1bWVudGF0aW9uXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2ZhcS9zZWN1cml0eSlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpY29uIHRvIHVzZSBhcyB0aGUgc2VhcmNoIGljb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlYXJjaEljb24gPSAnc2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGJlaGF2aW9yIGZvciB0aGUgY2FuY2VsIGJ1dHRvbi4gRGVmYXVsdHMgdG8gYFwibmV2ZXJcImAuXG4gICAgICAgICAqIFNldHRpbmcgdG8gYFwiZm9jdXNcImAgc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gb24gZm9jdXMuXG4gICAgICAgICAqIFNldHRpbmcgdG8gYFwibmV2ZXJcImAgaGlkZXMgdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICAgICAqIFNldHRpbmcgdG8gYFwiYWx3YXlzXCJgIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIHJlZ2FyZGxlc3NcbiAgICAgICAgICogb2YgZm9jdXMgc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dDYW5jZWxCdXR0b24gPSAnbmV2ZXInO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBlbmFibGUgc3BlbGxjaGVjayBvbiB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgdHlwZSBvZiB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAnc2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgc2VhcmNoYmFyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIHRoZSBpbnB1dCBmaWVsZCBhbmQgdHJpZ2dlcnMgdGhlIGNvbnRyb2wgY2hhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkNsZWFySW5wdXQgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uQ2xlYXIuZW1pdCgpO1xuICAgICAgICAgICAgaWYgKGV2KSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKSBmaXhlcyBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy9pc3N1ZXMvNzUyN1xuICAgICAgICAgICAgLy8gd2FpdCBmb3IgNCBmcmFtZXNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlvbklucHV0LmVtaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxNiAqIDQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIHRoZSBpbnB1dCBmaWVsZCBhbmQgdGVsbHMgdGhlIGlucHV0IHRvIGJsdXIgc2luY2VcbiAgICAgICAgICogdGhlIGNsZWFySW5wdXQgZnVuY3Rpb24gZG9lc24ndCB3YW50IHRoZSBpbnB1dCB0byBibHVyXG4gICAgICAgICAqIHRoZW4gY2FsbHMgdGhlIGN1c3RvbSBjYW5jZWwgZnVuY3Rpb24gaWYgdGhlIHVzZXIgcGFzc2VkIG9uZSBpbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25DYW5jZWxTZWFyY2hiYXIgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmIChldikge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUlucHV0LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgU2VhcmNoYmFyIGlucHV0IHZhbHVlIHdoZW4gdGhlIGlucHV0IGNoYW5nZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25JbnB1dCA9IChldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlvbklucHV0LmVtaXQoZXYpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgU2VhcmNoYmFyIHRvIG5vdCBmb2N1c2VkIGFuZCBjaGVja3MgaWYgaXQgc2hvdWxkIGFsaWduIGxlZnRcbiAgICAgICAgICogYmFzZWQgb24gd2hldGhlciB0aGVyZSBpcyBhIHZhbHVlIGluIHRoZSBzZWFyY2hiYXIgb3Igbm90LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkJsdXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIFNlYXJjaGJhciB0byBmb2N1c2VkIGFuZCBhY3RpdmUgb24gaW5wdXQgZm9jdXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25JbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2xlYXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNsZWFyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgZGVib3VuY2VDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGRlYm91bmNlRXZlbnQodGhpcy5pb25DaGFuZ2UsIHRoaXMuZGVib3VuY2UpO1xuICAgIH1cbiAgICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLm5hdGl2ZUlucHV0O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKGlucHV0RWwgJiYgaW5wdXRFbC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlucHV0RWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHsgdmFsdWUgfSk7XG4gICAgfVxuICAgIHNob3dDYW5jZWxCdXR0b25DaGFuZ2VkKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmVsLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ2ZhbHNlJyB8fCB0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBib29sZWFuIHZhbHVlcyBvZiBzaG93Q2FuY2VsQnV0dG9uIGFyZSBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIFwibmV2ZXJcIiBpbnN0ZWFkIG9mIFwiZmFsc2VcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG93Q2FuY2VsQnV0dG9uID09PSAnJyB8fCB0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09ICd0cnVlJyB8fCB0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGJvb2xlYW4gdmFsdWVzIG9mIHNob3dDYW5jZWxCdXR0b24gYXJlIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJmb2N1c1wiIGluc3RlYWQgb2YgXCJ0cnVlXCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VDaGFuZ2VkKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub0FuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ3NlYXJjaGJhcic6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgZm9jdXMgb24gdGhlIHNwZWNpZmllZCBgaW9uLXNlYXJjaGJhcmAuIFVzZSB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBnbG9iYWxcbiAgICAgKiBgaW5wdXQuZm9jdXMoKWAuXG4gICAgICovXG4gICAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50IHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAgICovXG4gICAgZ2V0SW5wdXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMubmF0aXZlSW5wdXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIGlucHV0IHNlYXJjaCBpY29uLCBwbGFjZWhvbGRlciwgYW5kIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAgICogYmFzZWQgb24gdGhlIGlucHV0IHZhbHVlIGFuZCBpZiBpdCBpcyBmb2N1c2VkLiAoaW9zIG9ubHkpXG4gICAgICovXG4gICAgcG9zaXRpb25FbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IHByZXZBbGlnbkxlZnQgPSB0aGlzLnNob3VsZEFsaWduTGVmdDtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHNob3VsZEFsaWduTGVmdCA9ICghdGhpcy5hbmltYXRlZCB8fCB2YWx1ZS50cmltKCkgIT09ICcnIHx8ICEhdGhpcy5mb2N1c2VkKTtcbiAgICAgICAgdGhpcy5zaG91bGRBbGlnbkxlZnQgPSBzaG91bGRBbGlnbkxlZnQ7XG4gICAgICAgIGlmIChtb2RlICE9PSAnaW9zJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2QWxpZ25MZWZ0ICE9PSBzaG91bGRBbGlnbkxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25QbGFjZWhvbGRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQ2FuY2VsQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUG9zaXRpb25zIHRoZSBpbnB1dCBwbGFjZWhvbGRlclxuICAgICAqL1xuICAgIHBvc2l0aW9uUGxhY2Vob2xkZXIoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLm5hdGl2ZUlucHV0O1xuICAgICAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XG4gICAgICAgIGNvbnN0IGljb25FbCA9ICh0aGlzLmVsLnNoYWRvd1Jvb3QgfHwgdGhpcy5lbCkucXVlcnlTZWxlY3RvcignLnNlYXJjaGJhci1zZWFyY2gtaWNvbicpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRBbGlnbkxlZnQpIHtcbiAgICAgICAgICAgIGlucHV0RWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgaWNvbkVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGR1bW15IHNwYW4gdG8gZ2V0IHRoZSBwbGFjZWhvbGRlciB3aWR0aFxuICAgICAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB0ZW1wU3BhbiA9IGRvYy5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0ZW1wU3Bhbi5pbm5lckhUTUwgPSBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLnBsYWNlaG9sZGVyKSB8fCAnJztcbiAgICAgICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHRlbXBTcGFuKTtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgd2lkdGggb2YgdGhlIHNwYW4gdGhlbiByZW1vdmUgaXRcbiAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IHRlbXBTcGFuLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdGVtcFNwYW4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGlucHV0IHBhZGRpbmdcbiAgICAgICAgICAgIGNvbnN0IGlucHV0TGVmdCA9ICdjYWxjKDUwJSAtICcgKyAodGV4dFdpZHRoIC8gMikgKyAncHgpJztcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaWNvbiBtYXJnaW5cbiAgICAgICAgICAgIGNvbnN0IGljb25MZWZ0ID0gJ2NhbGMoNTAlIC0gJyArICgodGV4dFdpZHRoIC8gMikgKyAzMCkgKyAncHgpJztcbiAgICAgICAgICAgIC8vIFNldCB0aGUgaW5wdXQgcGFkZGluZyBzdGFydCBhbmQgaWNvbiBtYXJnaW4gc3RhcnRcbiAgICAgICAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gaW5wdXRMZWZ0O1xuICAgICAgICAgICAgICAgIGljb25FbC5zdHlsZS5tYXJnaW5SaWdodCA9IGljb25MZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGlucHV0TGVmdDtcbiAgICAgICAgICAgICAgICBpY29uRWwuc3R5bGUubWFyZ2luTGVmdCA9IGljb25MZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNob3cgdGhlIGlPUyBDYW5jZWwgYnV0dG9uIG9uIGZvY3VzLCBoaWRlIGl0IG9mZnNjcmVlbiBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBwb3NpdGlvbkNhbmNlbEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgaXNSVEwgPSBkb2N1bWVudC5kaXIgPT09ICdydGwnO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSAodGhpcy5lbC5zaGFkb3dSb290IHx8IHRoaXMuZWwpLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBzaG91bGRTaG93Q2FuY2VsID0gdGhpcy5zaG91bGRTaG93Q2FuY2VsQnV0dG9uKCk7XG4gICAgICAgIGlmIChjYW5jZWxCdXR0b24gJiYgc2hvdWxkU2hvd0NhbmNlbCAhPT0gdGhpcy5pc0NhbmNlbFZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbFN0eWxlID0gY2FuY2VsQnV0dG9uLnN0eWxlO1xuICAgICAgICAgICAgdGhpcy5pc0NhbmNlbFZpc2libGUgPSBzaG91bGRTaG93Q2FuY2VsO1xuICAgICAgICAgICAgaWYgKHNob3VsZFNob3dDYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luTGVmdCA9ICcwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpblJpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGNhbmNlbEJ1dHRvbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpbkxlZnQgPSAtb2Zmc2V0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpblJpZ2h0ID0gLW9mZnNldCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlIHx8ICcnO1xuICAgIH1cbiAgICBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKSAhPT0gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGNhbmNlbCBidXR0b24gc2hvdWxkIGJlIHZpc2libGUgb25zY3JlZW4uXG4gICAgICogQ2FuY2VsIGJ1dHRvbiBzaG91bGQgYmUgc2hvd24gaWYgb25lIG9mIHR3byBjb25kaXRpb25zIGFwcGxpZXM6XG4gICAgICogMS4gYHNob3dDYW5jZWxCdXR0b25gIGlzIHNldCB0byBgYWx3YXlzYC5cbiAgICAgKiAyLiBgc2hvd0NhbmNlbEJ1dHRvbmAgaXMgc2V0IHRvIGBmb2N1c2AsIGFuZCB0aGUgc2VhcmNoYmFyIGhhcyBiZWVuIGZvY3VzZWQuXG4gICAgICovXG4gICAgc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbigpIHtcbiAgICAgICAgaWYgKGlzQ2FuY2VsQnV0dG9uU2V0VG9OZXZlcih0aGlzLnNob3dDYW5jZWxCdXR0b24pIHx8XG4gICAgICAgICAgICAoaXNDYW5jZWxCdXR0b25TZXRUb0ZvY3VzKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgJiYgIXRoaXMuZm9jdXNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBhbmltYXRlZCA9IHRoaXMuYW5pbWF0ZWQgJiYgY29uZmlnLmdldEJvb2xlYW4oJ2FuaW1hdGVkJywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBjbGVhckljb24gPSB0aGlzLmNsZWFySWNvbiB8fCAobW9kZSA9PT0gJ2lvcycgPyAnaW9zLWNsb3NlLWNpcmNsZScgOiAnbWQtY2xvc2UnKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoSWNvbiA9IHRoaXMuc2VhcmNoSWNvbjtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gIWlzQ2FuY2VsQnV0dG9uU2V0VG9OZXZlcih0aGlzLnNob3dDYW5jZWxCdXR0b24pICYmIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwiY2FuY2VsXCIsIHR5cGU6IFwiYnV0dG9uXCIsIHRhYkluZGV4OiBtb2RlID09PSAnaW9zJyAmJiAhdGhpcy5zaG91bGRTaG93Q2FuY2VsQnV0dG9uKCkgPyAtMSA6IHVuZGVmaW5lZCwgb25Nb3VzZURvd246IHRoaXMub25DYW5jZWxTZWFyY2hiYXIsIG9uVG91Y2hTdGFydDogdGhpcy5vbkNhbmNlbFNlYXJjaGJhciwgY2xhc3M6IFwic2VhcmNoYmFyLWNhbmNlbC1idXR0b25cIiB9LCBoKFwiZGl2XCIsIG51bGwsIG1vZGUgPT09ICdtZCdcbiAgICAgICAgICAgID8gaChcImlvbi1pY29uXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgbW9kZTogbW9kZSwgaWNvbjogdGhpcy5jYW5jZWxCdXR0b25JY29uLCBsYXp5OiBmYWxzZSB9KVxuICAgICAgICAgICAgOiB0aGlzLmNhbmNlbEJ1dHRvblRleHQpKSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwic2VhcmNoXCIsIFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUsICdzZWFyY2hiYXItYW5pbWF0ZWQnOiBhbmltYXRlZCwgJ3NlYXJjaGJhci1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsICdzZWFyY2hiYXItbm8tYW5pbWF0ZSc6IGFuaW1hdGVkICYmIHRoaXMubm9BbmltYXRlLCAnc2VhcmNoYmFyLWhhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSwgJ3NlYXJjaGJhci1sZWZ0LWFsaWduZWQnOiB0aGlzLnNob3VsZEFsaWduTGVmdCwgJ3NlYXJjaGJhci1oYXMtZm9jdXMnOiB0aGlzLmZvY3VzZWQsICdzZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsJzogdGhpcy5zaG91bGRTaG93Q2FuY2VsQnV0dG9uKCkgfSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInNlYXJjaGJhci1pbnB1dC1jb250YWluZXJcIiB9LCBoKFwiaW5wdXRcIiwgeyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2ggdGV4dFwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgcmVmOiBlbCA9PiB0aGlzLm5hdGl2ZUlucHV0ID0gZWwsIGNsYXNzOiBcInNlYXJjaGJhci1pbnB1dFwiLCBpbnB1dE1vZGU6IHRoaXMuaW5wdXRtb2RlLCBvbklucHV0OiB0aGlzLm9uSW5wdXQsIG9uQmx1cjogdGhpcy5vbkJsdXIsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsIHR5cGU6IHRoaXMudHlwZSwgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKSwgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9jb21wbGV0ZSwgYXV0b0NvcnJlY3Q6IHRoaXMuYXV0b2NvcnJlY3QsIHNwZWxsQ2hlY2s6IHRoaXMuc3BlbGxjaGVjayB9KSwgbW9kZSA9PT0gJ21kJyAmJiBjYW5jZWxCdXR0b24sIGgoXCJpb24taWNvblwiLCB7IG1vZGU6IG1vZGUsIGljb246IHNlYXJjaEljb24sIGxhenk6IGZhbHNlLCBjbGFzczogXCJzZWFyY2hiYXItc2VhcmNoLWljb25cIiB9KSwgaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiBcInJlc2V0XCIsIHR5cGU6IFwiYnV0dG9uXCIsIFwibm8tYmx1clwiOiB0cnVlLCBjbGFzczogXCJzZWFyY2hiYXItY2xlYXItYnV0dG9uXCIsIG9uTW91c2VEb3duOiB0aGlzLm9uQ2xlYXJJbnB1dCwgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uQ2xlYXJJbnB1dCB9LCBoKFwiaW9uLWljb25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBtb2RlOiBtb2RlLCBpY29uOiBjbGVhckljb24sIGxhenk6IGZhbHNlLCBjbGFzczogXCJzZWFyY2hiYXItY2xlYXItaWNvblwiIH0pKSksIG1vZGUgPT09ICdpb3MnICYmIGNhbmNlbEJ1dHRvbikpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJkZWJvdW5jZVwiOiBbXCJkZWJvdW5jZUNoYW5nZWRcIl0sXG4gICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdLFxuICAgICAgICBcInNob3dDYW5jZWxCdXR0b25cIjogW1wic2hvd0NhbmNlbEJ1dHRvbkNoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7LS1wbGFjZWhvbGRlci1jb2xvcjppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6aW5pdGlhbDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6LjU7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaHtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsIC5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6aW5oZXJpdH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2NvbG9yOnZhcigtLWljb24tY29sb3IpO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIuc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjE7d2lkdGg6MTAwJX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi1tcy1jbGVhciwgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbntkaXNwbGF5Om5vbmV9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Om5vbmU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWNhbmNlbC1idXR0b24tY29sb3IpO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MgPiBkaXYuc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTpub25lO21pbi1oZWlnaHQ6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2xlYXItYnV0dG9uLWNvbG9yKTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1oYXMtdmFsdWUuc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2Rpc3BsYXk6YmxvY2t9LnNlYXJjaGJhci1kaXNhYmxlZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjQ7cG9pbnRlci1ldmVudHM6bm9uZX0uc2MtaW9uLXNlYXJjaGJhci1pb3MtaHstLWNsZWFyLWJ1dHRvbi1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nik7LS1jYW5jZWwtYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7LS1pY29uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KTstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMDcpO3BhZGRpbmctbGVmdDoxMnB4O3BhZGRpbmctcmlnaHQ6MTJweDtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHg7aGVpZ2h0OjYwcHg7Y29udGFpbjpzdHJpY3R9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zYy1pb24tc2VhcmNoYmFyLWlvcy1oe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxMnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMnB4O3BhZGRpbmctaW5saW5lLWVuZDoxMnB4fX0uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLWlvc3toZWlnaHQ6MzZweDtjb250YWluOnN0cmljdH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze21hcmdpbi1sZWZ0OmNhbGMoNTAlIC0gNjBweCk7bGVmdDo1cHg7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjJweDtoZWlnaHQ6MTAwJTtjb250YWluOnN0cmljdH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3ttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDpjYWxjKDUwJSAtIDYwcHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYyg1MCUgLSA2MHB4KX19W2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgW2Rpcj1ydGxdIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3MsIFtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLWlvcyAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6NXB4fS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7cGFkZGluZy1sZWZ0OjI4cHg7cGFkZGluZy1yaWdodDoyOHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtib3JkZXItcmFkaXVzOjEwcHg7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjE3cHg7Zm9udC13ZWlnaHQ6NDAwO2NvbnRhaW46c3RyaWN0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoyOHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjI4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyOHB4O3BhZGRpbmctaW5saW5lLWVuZDoyOHB4fX0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tyaWdodDowO3RvcDowO2JhY2tncm91bmQtcG9zaXRpb246NTAlO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMwcHg7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1bZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgW2Rpcj1ydGxdIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCBbZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1pb3MgLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bGVmdDp1bnNldDtyaWdodDp1bnNldDtsZWZ0OjB9LnNlYXJjaGJhci1jbGVhci1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze3dpZHRoOjE4cHg7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6MTZweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MDtwYWRkaW5nLWlubGluZS1lbmQ6MH19LnNlYXJjaGJhci1sZWZ0LWFsaWduZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze21hcmdpbi1sZWZ0OjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zZWFyY2hiYXItbGVmdC1hbGlnbmVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3ttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MH19LnNlYXJjaGJhci1sZWZ0LWFsaWduZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze3BhZGRpbmctbGVmdDozMHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2VhcmNoYmFyLWxlZnQtYWxpZ25lZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDozMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjMwcHh9fS5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsIC5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCAuc2VhcmNoYmFyLXNob3VsZC1zaG93LWNhbmNlbC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tkaXNwbGF5OmJsb2NrfS5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zLCAuc2VhcmNoYmFyLWFuaW1hdGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LXRyYW5zaXRpb246YWxsIC4zcyBlYXNlO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlfS5zZWFyY2hiYXItYW5pbWF0ZWQuc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgLnNlYXJjaGJhci1hbmltYXRlZC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLXJpZ2h0Oi0xMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNlYXJjaGJhci1hbmltYXRlZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3ttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tZW5kOi0xMDAlO21hcmdpbi1pbmxpbmUtZW5kOi0xMDAlfX0uc2VhcmNoYmFyLW5vLWFuaW1hdGUuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsIC5zZWFyY2hiYXItbm8tYW5pbWF0ZS5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3MsIC5zZWFyY2hiYXItbm8tYW5pbWF0ZS5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjBtczt0cmFuc2l0aW9uLWR1cmF0aW9uOjBtc30uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXsuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zOmhvdmVye2NvbG9yOnZhcigtLWlvbi1jb2xvci10aW50KX19aW9uLXRvb2xiYXIuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCwgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7cGFkZGluZy10b3A6MXB4O3BhZGRpbmctYm90dG9tOjE1cHg7aGVpZ2h0OjUycHh9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpLCBpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3Ipe2NvbG9yOmluaGVyaXR9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgaW9uLXRvb2xiYXIuaW9uLWNvbG9yIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6Y3VycmVudENvbG9yfWlvbi10b29sYmFyLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3MsIGlvbi10b29sYmFyLmlvbi1jb2xvciAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi41fWlvbi10b29sYmFyLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zLCBpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLC4wNyk7Y29sb3I6Y3VycmVudENvbG9yfWlvbi10b29sYmFyLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgaW9uLXRvb2xiYXIuaW9uLWNvbG9yIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTouNX1cIjsgfVxufTtcbi8qKlxuICogQ2hlY2sgaWYgdGhlIGNhbmNlbCBidXR0b24gc2hvdWxkIG5ldmVyIGJlIHNob3duLlxuICpcbiAqIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gdGhlIGB0cnVlYCBhbmQgYGZhbHNlYFxuICogb3B0aW9ucyBhcmUgcmVtb3ZlZC5cbiAqL1xuY29uc3QgaXNDYW5jZWxCdXR0b25TZXRUb05ldmVyID0gKHNob3dDYW5jZWxCdXR0b24pID0+IHtcbiAgICByZXR1cm4gKHNob3dDYW5jZWxCdXR0b24gPT09ICduZXZlcicgfHxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ2ZhbHNlJyB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSBmYWxzZSk7XG59O1xuLyoqXG4gKiBDaGVjayBpZiB0aGUgY2FuY2VsIGJ1dHRvbiBzaG91bGQgYmUgc2hvd24gb24gZm9jdXMuXG4gKlxuICogVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiB0aGUgYHRydWVgIGFuZCBgZmFsc2VgXG4gKiBvcHRpb25zIGFyZSByZW1vdmVkLlxuICovXG5jb25zdCBpc0NhbmNlbEJ1dHRvblNldFRvRm9jdXMgPSAoc2hvd0NhbmNlbEJ1dHRvbikgPT4ge1xuICAgIHJldHVybiAoc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ2ZvY3VzJyB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSAndHJ1ZScgfHxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbiA9PT0gdHJ1ZSB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSAnJyk7XG59O1xuXG5leHBvcnQgeyBTZWFyY2hiYXIgYXMgaW9uX3NlYXJjaGJhciB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==