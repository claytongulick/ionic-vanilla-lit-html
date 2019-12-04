(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js ***!
  \**********************************************************************/
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
    static get style() { return ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-md-h{--clear-button-color:initial;--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);--background:var(--ion-background-color,#fff);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXNlYXJjaGJhci1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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b1JBQW9SLGFBQWEsc0VBQXNFLGlCQUFpQixrQkFBa0IsZ0JBQWdCLG1CQUFtQiw2RkFBNkYsc0VBQXNFLG1CQUFtQixvQkFBb0IsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLEVBQUU7QUFDOW9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7QUNsV3RDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiMjZcXGNodW5rc1xcMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRG9lcyBhIHNpbXBsZSBzYW5pdGl6YXRpb24gb2YgYWxsIGVsZW1lbnRzXHJcbiAqIGluIGFuIHVudHJ1c3RlZCBzdHJpbmdcclxuICovXHJcbmNvbnN0IHNhbml0aXplRE9NU3RyaW5nID0gKHVudHJ1c3RlZFN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIHVudHJ1c3RlZFN0cmluZyAhPT0gJ3N0cmluZycgfHwgdW50cnVzdGVkU3RyaW5nID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudFxyXG4gICAgICAgICAqIHNlcGFyYXRlIGZyb20gdGhlIG1haW4gRE9NLFxyXG4gICAgICAgICAqIGNyZWF0ZSBhIGRpdiB0byBkbyBvdXIgd29yayBpblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3Qgd29ya2luZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQod29ya2luZ0Rpdik7XHJcbiAgICAgICAgd29ya2luZ0Rpdi5pbm5lckhUTUwgPSB1bnRydXN0ZWRTdHJpbmc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlIGFueSBlbGVtZW50c1xyXG4gICAgICAgICAqIHRoYXQgYXJlIGJsb2NrZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBibG9ja2VkVGFncy5mb3JFYWNoKGJsb2NrZWRUYWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRFbGVtZW50c1RvUmVtb3ZlID0gZG9jdW1lbnRGcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKGJsb2NrZWRUYWcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50SW5kZXggPSBnZXRFbGVtZW50c1RvUmVtb3ZlLmxlbmd0aCAtIDE7IGVsZW1lbnRJbmRleCA+PSAwOyBlbGVtZW50SW5kZXgtLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnRzVG9SZW1vdmVbZWxlbWVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudEZyYWdtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXZSBzdGlsbCBuZWVkIHRvIHNhbml0aXplXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgKiBhcyB0aGV5IGFyZSBsZWZ0IGJlaGluZFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHbyB0aHJvdWdoIHJlbWFpbmluZyBlbGVtZW50cyBhbmQgcmVtb3ZlXHJcbiAgICAgICAgICogbm9uLWFsbG93ZWQgYXR0cmlic1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIElFIGRvZXMgbm90IHN1cHBvcnQgLmNoaWxkcmVuIG9uIGRvY3VtZW50IGZyYWdtZW50cywgb25seSAuY2hpbGROb2Rlc1xyXG4gICAgICAgIGNvbnN0IGRmQ2hpbGRyZW4gPSBnZXRFbGVtZW50Q2hpbGRyZW4oZG9jdW1lbnRGcmFnbWVudCk7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBkZkNoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChkZkNoaWxkcmVuW2NoaWxkSW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXBwZW5kIGRvY3VtZW50IGZyYWdtZW50IHRvIGRpdlxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZnJhZ21lbnREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudCk7XHJcbiAgICAgICAgLy8gRmlyc3QgY2hpbGQgaXMgYWx3YXlzIHRoZSBkaXYgd2UgZGlkIG91ciB3b3JrIGluXHJcbiAgICAgICAgY29uc3QgZ2V0SW5uZXJEaXYgPSBmcmFnbWVudERpdi5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcclxuICAgICAgICByZXR1cm4gKGdldElubmVyRGl2ICE9PSBudWxsKSA/IGdldElubmVyRGl2LmlubmVySFRNTCA6IGZyYWdtZW50RGl2LmlubmVySFRNTDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogQ2xlYW4gdXAgY3VycmVudCBlbGVtZW50IGJhc2VkIG9uIGFsbG93ZWQgYXR0cmlidXRlc1xyXG4gKiBhbmQgdGhlbiByZWN1cnNpdmVseSBkaWcgZG93biBpbnRvIGFueSBjaGlsZCBlbGVtZW50cyB0b1xyXG4gKiBjbGVhbiB0aG9zZSB1cCBhcyB3ZWxsXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gSUUgdXNlcyBjaGlsZE5vZGVzLCBzbyBpZ25vcmUgbm9kZXMgdGhhdCBhcmUgbm90IGVsZW1lbnRzXHJcbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKGkpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubmFtZTtcclxuICAgICAgICAvLyByZW1vdmUgbm9uLWFsbG93ZWQgYXR0cmlic1xyXG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNsZWFuIHVwIGFueSBhbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAvLyB0aGF0IGF0dGVtcHQgdG8gZG8gYW55IEpTIGZ1bm55LWJ1c2luZXNzXHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWU7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9IG51bGwgJiYgYXR0cmlidXRlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnamF2YXNjcmlwdDonKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNhbml0aXplIGFueSBuZXN0ZWQgY2hpbGRyZW5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbaV0pO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogSUUgZG9lc24ndCBhbHdheXMgc3VwcG9ydCAuY2hpbGRyZW5cclxuICogc28gd2UgcmV2ZXJ0IHRvIC5jaGlsZE5vZGVzIGluc3RlYWRcclxuICovXHJcbmNvbnN0IGdldEVsZW1lbnRDaGlsZHJlbiA9IChlbCkgPT4ge1xyXG4gICAgcmV0dXJuIChlbC5jaGlsZHJlbiAhPSBudWxsKSA/IGVsLmNoaWxkcmVuIDogZWwuY2hpbGROb2RlcztcclxufTtcclxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbJ2NsYXNzJywgJ2lkJywgJ2hyZWYnLCAnc3JjJywgJ25hbWUnLCAnc2xvdCddO1xyXG5jb25zdCBibG9ja2VkVGFncyA9IFsnc2NyaXB0JywgJ3N0eWxlJywgJ2lmcmFtZScsICdtZXRhJywgJ2xpbmsnLCAnb2JqZWN0JywgJ2VtYmVkJ107XG5cbmV4cG9ydCB7IHNhbml0aXplRE9NU3RyaW5nIGFzIHMgfTtcbiIsImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2VFdmVudCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xuXG5jb25zdCBTZWFyY2hiYXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlzQ2FuY2VsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3VsZEFsaWduTGVmdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vQW5pbWF0ZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGVuYWJsZSBzZWFyY2hiYXIgYW5pbWF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBpbnB1dCdzIGF1dG9jb21wbGV0ZSBwcm9wZXJ0eS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGlucHV0J3MgYXV0b2NvcnJlY3QgcHJvcGVydHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jb3JyZWN0ID0gJ29mZic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGNhbmNlbCBidXR0b24gaWNvbi4gT25seSBhcHBsaWVzIHRvIGBtZGAgbW9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uSWNvbiA9ICdtZC1hcnJvdy1iYWNrJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgdGhlIGNhbmNlbCBidXR0b24gdGV4dC4gT25seSBhcHBsaWVzIHRvIGBpb3NgIG1vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvblRleHQgPSAnQ2FuY2VsJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdG8gd2FpdCB0byB0cmlnZ2VyIHRoZSBgaW9uQ2hhbmdlYCBldmVudCBhZnRlciBlYWNoIGtleXN0cm9rZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGVib3VuY2UgPSAyNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgaGludCB0byB0aGUgYnJvd3NlciBmb3Igd2hpY2gga2V5Ym9hcmQgdG8gZGlzcGxheS5cbiAgICAgICAgICogUG9zc2libGUgdmFsdWVzOiBgXCJub25lXCJgLCBgXCJ0ZXh0XCJgLCBgXCJ0ZWxcImAsIGBcInVybFwiYCxcbiAgICAgICAgICogYFwiZW1haWxcImAsIGBcIm51bWVyaWNcImAsIGBcImRlY2ltYWxcImAsIGFuZCBgXCJzZWFyY2hcImAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlucHV0bW9kZSA9ICdzZWFyY2gnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBpbnB1dCdzIHBsYWNlaG9sZGVyLlxuICAgICAgICAgKiBgcGxhY2Vob2xkZXJgIGNhbiBhY2NlcHQgZWl0aGVyIHBsYWludGV4dCBvciBIVE1MIGFzIGEgc3RyaW5nLlxuICAgICAgICAgKiBUbyBkaXNwbGF5IGNoYXJhY3RlcnMgbm9ybWFsbHkgcmVzZXJ2ZWQgZm9yIEhUTUwsIHRoZXlcbiAgICAgICAgICogbXVzdCBiZSBlc2NhcGVkLiBGb3IgZXhhbXBsZSBgPElvbmljPmAgd291bGQgYmVjb21lXG4gICAgICAgICAqIGAmbHQ7SW9uaWMmZ3Q7YFxuICAgICAgICAgKlxuICAgICAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbjogW1NlY3VyaXR5IERvY3VtZW50YXRpb25dKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvZmFxL3NlY3VyaXR5KVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGljb24gdG8gdXNlIGFzIHRoZSBzZWFyY2ggaWNvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VhcmNoSWNvbiA9ICdzZWFyY2gnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYmVoYXZpb3IgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLiBEZWZhdWx0cyB0byBgXCJuZXZlclwiYC5cbiAgICAgICAgICogU2V0dGluZyB0byBgXCJmb2N1c1wiYCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiBvbiBmb2N1cy5cbiAgICAgICAgICogU2V0dGluZyB0byBgXCJuZXZlclwiYCBoaWRlcyB0aGUgY2FuY2VsIGJ1dHRvbi5cbiAgICAgICAgICogU2V0dGluZyB0byBgXCJhbHdheXNcImAgc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gcmVnYXJkbGVzc1xuICAgICAgICAgKiBvZiBmb2N1cyBzdGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9ICduZXZlcic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGVuYWJsZSBzcGVsbGNoZWNrIG9uIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3BlbGxjaGVjayA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSB0eXBlIG9mIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdzZWFyY2gnO1xuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIHZhbHVlIG9mIHRoZSBzZWFyY2hiYXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhcnMgdGhlIGlucHV0IGZpZWxkIGFuZCB0cmlnZ2VycyB0aGUgY29udHJvbCBjaGFuZ2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uQ2xlYXJJbnB1dCA9IChldikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25DbGVhci5lbWl0KCk7XG4gICAgICAgICAgICBpZiAoZXYpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgpIGZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljL2lzc3Vlcy83NTI3XG4gICAgICAgICAgICAvLyB3YWl0IGZvciA0IGZyYW1lc1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW9uSW5wdXQuZW1pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE2ICogNCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhcnMgdGhlIGlucHV0IGZpZWxkIGFuZCB0ZWxscyB0aGUgaW5wdXQgdG8gYmx1ciBzaW5jZVxuICAgICAgICAgKiB0aGUgY2xlYXJJbnB1dCBmdW5jdGlvbiBkb2Vzbid0IHdhbnQgdGhlIGlucHV0IHRvIGJsdXJcbiAgICAgICAgICogdGhlbiBjYWxscyB0aGUgY3VzdG9tIGNhbmNlbCBmdW5jdGlvbiBpZiB0aGUgdXNlciBwYXNzZWQgb25lIGluLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkNhbmNlbFNlYXJjaGJhciA9IChldikgPT4ge1xuICAgICAgICAgICAgaWYgKGV2KSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMub25DbGVhcklucHV0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlSW5wdXQuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRoZSBTZWFyY2hiYXIgaW5wdXQgdmFsdWUgd2hlbiB0aGUgaW5wdXQgY2hhbmdlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbklucHV0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW9uSW5wdXQuZW1pdChldik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBTZWFyY2hiYXIgdG8gbm90IGZvY3VzZWQgYW5kIGNoZWNrcyBpZiBpdCBzaG91bGQgYWxpZ24gbGVmdFxuICAgICAgICAgKiBiYXNlZCBvbiB3aGV0aGVyIHRoZXJlIGlzIGEgdmFsdWUgaW4gdGhlIHNlYXJjaGJhciBvciBub3QuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgU2VhcmNoYmFyIHRvIGZvY3VzZWQgYW5kIGFjdGl2ZSBvbiBpbnB1dCBmb2N1cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbnB1dFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25DYW5jZWwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNhbmNlbFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25DbGVhciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2xlYXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBkZWJvdW5jZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gZGVib3VuY2VFdmVudCh0aGlzLmlvbkNoYW5nZSwgdGhpcy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgY29uc3QgaW5wdXRFbCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICBpZiAoaW5wdXRFbCAmJiBpbnB1dEVsLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgaW5wdXRFbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoeyB2YWx1ZSB9KTtcbiAgICB9XG4gICAgc2hvd0NhbmNlbEJ1dHRvbkNoYW5nZWQoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93Q2FuY2VsQnV0dG9uID09PSAnZmFsc2UnIHx8IHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGJvb2xlYW4gdmFsdWVzIG9mIHNob3dDYW5jZWxCdXR0b24gYXJlIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJuZXZlclwiIGluc3RlYWQgb2YgXCJmYWxzZVwiLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09ICcnIHx8IHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ3RydWUnIHx8IHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgYm9vbGVhbiB2YWx1ZXMgb2Ygc2hvd0NhbmNlbEJ1dHRvbiBhcmUgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBcImZvY3VzXCIgaW5zdGVhZCBvZiBcInRydWVcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZUNoYW5nZWQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cbiAgICBlbWl0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnc2VhcmNoYmFyJzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBmb2N1cyBvbiB0aGUgc3BlY2lmaWVkIGBpb24tc2VhcmNoYmFyYC4gVXNlIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgdGhlIGdsb2JhbFxuICAgICAqIGBpbnB1dC5mb2N1cygpYC5cbiAgICAgKi9cbiAgICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYXRpdmUgYDxpbnB1dD5gIGVsZW1lbnQgdXNlZCB1bmRlciB0aGUgaG9vZC5cbiAgICAgKi9cbiAgICBnZXRJbnB1dEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5uYXRpdmVJbnB1dCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9ucyB0aGUgaW5wdXQgc2VhcmNoIGljb24sIHBsYWNlaG9sZGVyLCBhbmQgdGhlIGNhbmNlbCBidXR0b25cbiAgICAgKiBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWUgYW5kIGlmIGl0IGlzIGZvY3VzZWQuIChpb3Mgb25seSlcbiAgICAgKi9cbiAgICBwb3NpdGlvbkVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgcHJldkFsaWduTGVmdCA9IHRoaXMuc2hvdWxkQWxpZ25MZWZ0O1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWxpZ25MZWZ0ID0gKCF0aGlzLmFuaW1hdGVkIHx8IHZhbHVlLnRyaW0oKSAhPT0gJycgfHwgISF0aGlzLmZvY3VzZWQpO1xuICAgICAgICB0aGlzLnNob3VsZEFsaWduTGVmdCA9IHNob3VsZEFsaWduTGVmdDtcbiAgICAgICAgaWYgKG1vZGUgIT09ICdpb3MnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZBbGlnbkxlZnQgIT09IHNob3VsZEFsaWduTGVmdCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblBsYWNlaG9sZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25DYW5jZWxCdXR0b24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIGlucHV0IHBsYWNlaG9sZGVyXG4gICAgICovXG4gICAgcG9zaXRpb25QbGFjZWhvbGRlcigpIHtcbiAgICAgICAgY29uc3QgaW5wdXRFbCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgICAgIGlmICghaW5wdXRFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzUlRMID0gZG9jdW1lbnQuZGlyID09PSAncnRsJztcbiAgICAgICAgY29uc3QgaWNvbkVsID0gKHRoaXMuZWwuc2hhZG93Um9vdCB8fCB0aGlzLmVsKS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoYmFyLXNlYXJjaC1pY29uJyk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEFsaWduTGVmdCkge1xuICAgICAgICAgICAgaW5wdXRFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBpY29uRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgZHVtbXkgc3BhbiB0byBnZXQgdGhlIHBsYWNlaG9sZGVyIHdpZHRoXG4gICAgICAgICAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBTcGFuID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRlbXBTcGFuLmlubmVySFRNTCA9IHNhbml0aXplRE9NU3RyaW5nKHRoaXMucGxhY2Vob2xkZXIpIHx8ICcnO1xuICAgICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQodGVtcFNwYW4pO1xuICAgICAgICAgICAgLy8gR2V0IHRoZSB3aWR0aCBvZiB0aGUgc3BhbiB0aGVuIHJlbW92ZSBpdFxuICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gdGVtcFNwYW4ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0ZW1wU3Bhbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaW5wdXQgcGFkZGluZ1xuICAgICAgICAgICAgY29uc3QgaW5wdXRMZWZ0ID0gJ2NhbGMoNTAlIC0gJyArICh0ZXh0V2lkdGggLyAyKSArICdweCknO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBpY29uIG1hcmdpblxuICAgICAgICAgICAgY29uc3QgaWNvbkxlZnQgPSAnY2FsYyg1MCUgLSAnICsgKCh0ZXh0V2lkdGggLyAyKSArIDMwKSArICdweCknO1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBpbnB1dCBwYWRkaW5nIHN0YXJ0IGFuZCBpY29uIG1hcmdpbiBzdGFydFxuICAgICAgICAgICAgaWYgKGlzUlRMKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBpbnB1dExlZnQ7XG4gICAgICAgICAgICAgICAgaWNvbkVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gaWNvbkxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gaW5wdXRMZWZ0O1xuICAgICAgICAgICAgICAgIGljb25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gaWNvbkxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgaU9TIENhbmNlbCBidXR0b24gb24gZm9jdXMsIGhpZGUgaXQgb2Zmc2NyZWVuIG90aGVyd2lzZVxuICAgICAqL1xuICAgIHBvc2l0aW9uQ2FuY2VsQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9ICh0aGlzLmVsLnNoYWRvd1Jvb3QgfHwgdGhpcy5lbCkucXVlcnlTZWxlY3RvcignLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHNob3VsZFNob3dDYW5jZWwgPSB0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKTtcbiAgICAgICAgaWYgKGNhbmNlbEJ1dHRvbiAmJiBzaG91bGRTaG93Q2FuY2VsICE9PSB0aGlzLmlzQ2FuY2VsVmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsU3R5bGUgPSBjYW5jZWxCdXR0b24uc3R5bGU7XG4gICAgICAgICAgICB0aGlzLmlzQ2FuY2VsVmlzaWJsZSA9IHNob3VsZFNob3dDYW5jZWw7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU2hvd0NhbmNlbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxTdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luUmlnaHQgPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2FuY2VsQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luTGVmdCA9IC1vZmZzZXQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luUmlnaHQgPSAtb2Zmc2V0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgJyc7XG4gICAgfVxuICAgIGhhc1ZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpICE9PSAnJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgY2FuY2VsIGJ1dHRvbiBzaG91bGQgYmUgdmlzaWJsZSBvbnNjcmVlbi5cbiAgICAgKiBDYW5jZWwgYnV0dG9uIHNob3VsZCBiZSBzaG93biBpZiBvbmUgb2YgdHdvIGNvbmRpdGlvbnMgYXBwbGllczpcbiAgICAgKiAxLiBgc2hvd0NhbmNlbEJ1dHRvbmAgaXMgc2V0IHRvIGBhbHdheXNgLlxuICAgICAqIDIuIGBzaG93Q2FuY2VsQnV0dG9uYCBpcyBzZXQgdG8gYGZvY3VzYCwgYW5kIHRoZSBzZWFyY2hiYXIgaGFzIGJlZW4gZm9jdXNlZC5cbiAgICAgKi9cbiAgICBzaG91bGRTaG93Q2FuY2VsQnV0dG9uKCkge1xuICAgICAgICBpZiAoaXNDYW5jZWxCdXR0b25TZXRUb05ldmVyKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgfHxcbiAgICAgICAgICAgIChpc0NhbmNlbEJ1dHRvblNldFRvRm9jdXModGhpcy5zaG93Q2FuY2VsQnV0dG9uKSAmJiAhdGhpcy5mb2N1c2VkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGVkID0gdGhpcy5hbmltYXRlZCAmJiBjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKTtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNsZWFySWNvbiA9IHRoaXMuY2xlYXJJY29uIHx8IChtb2RlID09PSAnaW9zJyA/ICdpb3MtY2xvc2UtY2lyY2xlJyA6ICdtZC1jbG9zZScpO1xuICAgICAgICBjb25zdCBzZWFyY2hJY29uID0gdGhpcy5zZWFyY2hJY29uO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSAhaXNDYW5jZWxCdXR0b25TZXRUb05ldmVyKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgJiYgKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogXCJjYW5jZWxcIiwgdHlwZTogXCJidXR0b25cIiwgdGFiSW5kZXg6IG1vZGUgPT09ICdpb3MnICYmICF0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKSA/IC0xIDogdW5kZWZpbmVkLCBvbk1vdXNlRG93bjogdGhpcy5vbkNhbmNlbFNlYXJjaGJhciwgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uQ2FuY2VsU2VhcmNoYmFyLCBjbGFzczogXCJzZWFyY2hiYXItY2FuY2VsLWJ1dHRvblwiIH0sIGgoXCJkaXZcIiwgbnVsbCwgbW9kZSA9PT0gJ21kJ1xuICAgICAgICAgICAgPyBoKFwiaW9uLWljb25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBtb2RlOiBtb2RlLCBpY29uOiB0aGlzLmNhbmNlbEJ1dHRvbkljb24sIGxhenk6IGZhbHNlIH0pXG4gICAgICAgICAgICA6IHRoaXMuY2FuY2VsQnV0dG9uVGV4dCkpKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJzZWFyY2hcIiwgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCB7IFttb2RlXTogdHJ1ZSwgJ3NlYXJjaGJhci1hbmltYXRlZCc6IGFuaW1hdGVkLCAnc2VhcmNoYmFyLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCwgJ3NlYXJjaGJhci1uby1hbmltYXRlJzogYW5pbWF0ZWQgJiYgdGhpcy5ub0FuaW1hdGUsICdzZWFyY2hiYXItaGFzLXZhbHVlJzogdGhpcy5oYXNWYWx1ZSgpLCAnc2VhcmNoYmFyLWxlZnQtYWxpZ25lZCc6IHRoaXMuc2hvdWxkQWxpZ25MZWZ0LCAnc2VhcmNoYmFyLWhhcy1mb2N1cyc6IHRoaXMuZm9jdXNlZCwgJ3NlYXJjaGJhci1zaG91bGQtc2hvdy1jYW5jZWwnOiB0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKSB9KSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lclwiIH0sIGgoXCJpbnB1dFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaCB0ZXh0XCIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCByZWY6IGVsID0+IHRoaXMubmF0aXZlSW5wdXQgPSBlbCwgY2xhc3M6IFwic2VhcmNoYmFyLWlucHV0XCIsIGlucHV0TW9kZTogdGhpcy5pbnB1dG1vZGUsIG9uSW5wdXQ6IHRoaXMub25JbnB1dCwgb25CbHVyOiB0aGlzLm9uQmx1ciwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciwgdHlwZTogdGhpcy50eXBlLCB2YWx1ZTogdGhpcy5nZXRWYWx1ZSgpLCBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b2NvbXBsZXRlLCBhdXRvQ29ycmVjdDogdGhpcy5hdXRvY29ycmVjdCwgc3BlbGxDaGVjazogdGhpcy5zcGVsbGNoZWNrIH0pLCBtb2RlID09PSAnbWQnICYmIGNhbmNlbEJ1dHRvbiwgaChcImlvbi1pY29uXCIsIHsgbW9kZTogbW9kZSwgaWNvbjogc2VhcmNoSWNvbiwgbGF6eTogZmFsc2UsIGNsYXNzOiBcInNlYXJjaGJhci1zZWFyY2gtaWNvblwiIH0pLCBoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwicmVzZXRcIiwgdHlwZTogXCJidXR0b25cIiwgXCJuby1ibHVyXCI6IHRydWUsIGNsYXNzOiBcInNlYXJjaGJhci1jbGVhci1idXR0b25cIiwgb25Nb3VzZURvd246IHRoaXMub25DbGVhcklucHV0LCBvblRvdWNoU3RhcnQ6IHRoaXMub25DbGVhcklucHV0IH0sIGgoXCJpb24taWNvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIG1vZGU6IG1vZGUsIGljb246IGNsZWFySWNvbiwgbGF6eTogZmFsc2UsIGNsYXNzOiBcInNlYXJjaGJhci1jbGVhci1pY29uXCIgfSkpKSwgbW9kZSA9PT0gJ2lvcycgJiYgY2FuY2VsQnV0dG9uKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcImRlYm91bmNlXCI6IFtcImRlYm91bmNlQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUNoYW5nZWRcIl0sXG4gICAgICAgIFwic2hvd0NhbmNlbEJ1dHRvblwiOiBbXCJzaG93Q2FuY2VsQnV0dG9uQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLXNlYXJjaGJhci1tZC1oey0tcGxhY2Vob2xkZXItY29sb3I6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OmluaXRpYWw7LS1wbGFjZWhvbGRlci1vcGFjaXR5Oi41Oy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaHtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwgLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwgLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2NvbG9yOmluaGVyaXR9LnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2NvbG9yOnZhcigtLWljb24tY29sb3IpO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIuc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTt3aWR0aDoxMDAlfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtmb250LWZhbWlseTppbmhlcml0Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kOjotbXMtY2xlYXIsIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbntkaXNwbGF5Om5vbmV9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kID4gZGl2LnNjLWlvbi1zZWFyY2hiYXItbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpub25lO21pbi1oZWlnaHQ6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2xlYXItYnV0dG9uLWNvbG9yKTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1oYXMtdmFsdWUuc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5OmJsb2NrfS5zZWFyY2hiYXItZGlzYWJsZWQuc2MtaW9uLXNlYXJjaGJhci1tZC1oe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjQ7cG9pbnRlci1ldmVudHM6bm9uZX0uc2MtaW9uLXNlYXJjaGJhci1tZC1oey0tY2xlYXItYnV0dG9uLWNvbG9yOmluaXRpYWw7LS1jYW5jZWwtYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTkwMCwjMWExYTFhKTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwjMjYyNjI2KTstLWljb24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCM2NjYpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7YmFja2dyb3VuZDppbmhlcml0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2MtaW9uLXNlYXJjaGJhci1tZC1oe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHh9fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHtsZWZ0OjE2cHg7dG9wOjExcHg7d2lkdGg6MjFweDtoZWlnaHQ6MjFweH1bZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCBbZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDoxNnB4fS5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2xlZnQ6NXB4O3RvcDowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOjEuNmVtfVtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWQsIFtkaXI9cnRsXSAuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCBbZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjVweH0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwgLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke3Bvc2l0aW9uOmFic29sdXRlfS5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLXNlYXJjaGJhci1tZCwgLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5hY3RpdmF0ZWQuc2MtaW9uLXNlYXJjaGJhci1tZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtwYWRkaW5nLWxlZnQ6NTVweDtwYWRkaW5nLXJpZ2h0OjU1cHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweDtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgOHB4IGNlbnRlcjtoZWlnaHQ6YXV0bztmb250LXNpemU6MTZweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MzBweDstd2Via2l0LWJveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6NTVweDtwYWRkaW5nLWlubGluZS1zdGFydDo1NXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6NTVweDtwYWRkaW5nLWlubGluZS1lbmQ6NTVweH19W2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQsIFtkaXI9cnRsXSAuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCwgW2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgOHB4IGNlbnRlcn0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke3JpZ2h0OjEzcHg7dG9wOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fVtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwgW2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O2xlZnQ6MTNweH0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLXNlYXJjaGJhci1tZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5zZWFyY2hiYXItY2xlYXItaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke3dpZHRoOjIycHg7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1oYXMtZm9jdXMuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCAuc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCAuc2VhcmNoYmFyLXNob3VsZC1zaG93LWNhbmNlbC5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7ZGlzcGxheTpibG9ja30uc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWQgKyAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQsIC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCArIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5Om5vbmV9aW9uLXRvb2xiYXIuc2MtaW9uLXNlYXJjaGJhci1tZC1oLCBpb24tdG9vbGJhciAuc2MtaW9uLXNlYXJjaGJhci1tZC1oe3BhZGRpbmctbGVmdDo3cHg7cGFkZGluZy1yaWdodDo3cHg7cGFkZGluZy10b3A6M3B4O3BhZGRpbmctYm90dG9tOjNweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7aW9uLXRvb2xiYXIuc2MtaW9uLXNlYXJjaGJhci1tZC1oLCBpb24tdG9vbGJhciAuc2MtaW9uLXNlYXJjaGJhci1tZC1oe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo3cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6N3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6N3B4O3BhZGRpbmctaW5saW5lLWVuZDo3cHh9fVwiOyB9XG59O1xuLyoqXG4gKiBDaGVjayBpZiB0aGUgY2FuY2VsIGJ1dHRvbiBzaG91bGQgbmV2ZXIgYmUgc2hvd24uXG4gKlxuICogVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiB0aGUgYHRydWVgIGFuZCBgZmFsc2VgXG4gKiBvcHRpb25zIGFyZSByZW1vdmVkLlxuICovXG5jb25zdCBpc0NhbmNlbEJ1dHRvblNldFRvTmV2ZXIgPSAoc2hvd0NhbmNlbEJ1dHRvbikgPT4ge1xuICAgIHJldHVybiAoc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ25ldmVyJyB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSAnZmFsc2UnIHx8XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24gPT09IGZhbHNlKTtcbn07XG4vKipcbiAqIENoZWNrIGlmIHRoZSBjYW5jZWwgYnV0dG9uIHNob3VsZCBiZSBzaG93biBvbiBmb2N1cy5cbiAqXG4gKiBUT0RPOiBSZW1vdmUgdGhpcyB3aGVuIHRoZSBgdHJ1ZWAgYW5kIGBmYWxzZWBcbiAqIG9wdGlvbnMgYXJlIHJlbW92ZWQuXG4gKi9cbmNvbnN0IGlzQ2FuY2VsQnV0dG9uU2V0VG9Gb2N1cyA9IChzaG93Q2FuY2VsQnV0dG9uKSA9PiB7XG4gICAgcmV0dXJuIChzaG93Q2FuY2VsQnV0dG9uID09PSAnZm9jdXMnIHx8XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24gPT09ICd0cnVlJyB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSB0cnVlIHx8XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24gPT09ICcnKTtcbn07XG5cbmV4cG9ydCB7IFNlYXJjaGJhciBhcyBpb25fc2VhcmNoYmFyIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9