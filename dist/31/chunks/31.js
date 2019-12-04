(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_select, ion_select_option, ion_select_popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_option", function() { return SelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_popover", function() { return SelectPopover; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watch-options-2af96011.js */ "../node_modules/@ionic/core/dist/esm/watch-options-2af96011.js");







const Select = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-sel-${selectIds++}`;
        this.didInit = false;
        this.isExpanded = false;
        /**
         * If `true`, the user cannot interact with the select.
         */
        this.disabled = false;
        /**
         * The text to display on the cancel button.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display on the ok button.
         */
        this.okText = 'OK';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the select can accept multiple values.
         */
        this.multiple = false;
        /**
         * The interface the select should use: `action-sheet`, `popover` or `alert`.
         */
        this.interface = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
         * [PopoverController API docs](../../popover/PopoverController/#create) for the
         * create options for each interface.
         */
        this.interfaceOptions = {};
        this.onClick = (ev) => {
            this.setFocus();
            this.open(ev);
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionCancel = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        this.updateOptions();
        this.emitStyle();
        if (this.didInit) {
            this.ionChange.emit({
                value: this.value,
            });
        }
    }
    async connectedCallback() {
        if (this.value === undefined) {
            if (this.multiple) {
                // there are no values set at this point
                // so check to see who should be selected
                const checked = this.childOpts.filter(o => o.selected);
                this.value = checked.map(o => getOptionValue(o));
            }
            else {
                const checked = this.childOpts.find(o => o.selected);
                if (checked) {
                    this.value = getOptionValue(checked);
                }
            }
        }
        this.updateOptions();
        this.updateOverlayOptions();
        this.emitStyle();
        this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__["w"])(this.el, 'ion-select-option', async () => {
            this.updateOptions();
            this.updateOverlayOptions();
        });
    }
    disconnectedCallback() {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    }
    componentDidLoad() {
        this.didInit = true;
    }
    /**
     * Open the select overlay. The overlay is either an alert, action sheet, or popover,
     * depending on the `interface` property on the `ion-select`.
     *
     * @param event The user interface event that called the open.
     */
    async open(event) {
        if (this.disabled || this.isExpanded) {
            return undefined;
        }
        const overlay = this.overlay = await this.createOverlay(event);
        this.isExpanded = true;
        overlay.onDidDismiss().then(() => {
            this.overlay = undefined;
            this.isExpanded = false;
            this.setFocus();
        });
        await overlay.present();
        return overlay;
    }
    createOverlay(ev) {
        let selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        return this.openAlert();
    }
    updateOverlayOptions() {
        const overlay = this.overlay;
        if (!overlay) {
            return;
        }
        const childOpts = this.childOpts;
        switch (this.interface) {
            case 'action-sheet':
                overlay.buttons = this.createActionSheetButtons(childOpts);
                break;
            case 'popover':
                const popover = overlay.querySelector('ion-select-popover');
                if (popover) {
                    popover.options = this.createPopoverOptions(childOpts);
                }
                break;
            case 'alert':
                const inputType = (this.multiple ? 'checkbox' : 'radio');
                overlay.inputs = this.createAlertInputs(childOpts, inputType);
                break;
        }
    }
    createActionSheetButtons(data) {
        const actionSheetButtons = data.map(option => {
            return {
                role: (option.selected ? 'selected' : ''),
                text: option.textContent,
                handler: () => {
                    this.value = getOptionValue(option);
                }
            };
        });
        // Add "cancel" button
        actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: () => {
                this.ionCancel.emit();
            }
        });
        return actionSheetButtons;
    }
    createAlertInputs(data, inputType) {
        return data.map(o => {
            return {
                type: inputType,
                label: o.textContent,
                value: getOptionValue(o),
                checked: o.selected,
                disabled: o.disabled
            };
        });
    }
    createPopoverOptions(data) {
        return data.map(o => {
            const value = getOptionValue(o);
            return {
                text: o.textContent,
                value,
                checked: o.selected,
                disabled: o.disabled,
                handler: () => {
                    this.value = value;
                    this.close();
                }
            };
        });
    }
    async openPopover(ev) {
        const interfaceOptions = this.interfaceOptions;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const popoverOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                header: interfaceOptions.header,
                subHeader: interfaceOptions.subHeader,
                message: interfaceOptions.message,
                value: this.value,
                options: this.createPopoverOptions(this.childOpts)
            } });
        return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["c"].create(popoverOpts);
    }
    async openActionSheet() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const interfaceOptions = this.interfaceOptions;
        const actionSheetOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
        return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["b"].create(actionSheetOpts);
    }
    async openAlert() {
        const label = this.getLabel();
        const labelText = (label) ? label.textContent : null;
        const interfaceOptions = this.interfaceOptions;
        const inputType = (this.multiple ? 'checkbox' : 'radio');
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const alertOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType), buttons: [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: () => {
                        this.ionCancel.emit();
                    }
                },
                {
                    text: this.okText,
                    handler: (selectedValues) => {
                        this.value = selectedValues;
                    }
                }
            ], cssClass: ['select-alert', interfaceOptions.cssClass,
                (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
        return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["a"].create(alertOpts);
    }
    /**
     * Close the select interface.
     */
    close() {
        // TODO check !this.overlay || !this.isFocus()
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        return this.overlay.dismiss();
    }
    updateOptions() {
        // iterate all options, updating the selected prop
        let canSelect = true;
        const { value, childOpts, compareWith, multiple } = this;
        for (const selectOption of childOpts) {
            const optValue = getOptionValue(selectOption);
            const selected = canSelect && isOptionSelected(value, optValue, compareWith);
            selectOption.selected = selected;
            // if current option is selected and select is single-option, we can't select
            // any option more
            if (selected && !multiple) {
                canSelect = false;
            }
        }
    }
    getLabel() {
        return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el);
    }
    hasValue() {
        return this.getText() !== '';
    }
    get childOpts() {
        return Array.from(this.el.querySelectorAll('ion-select-option'));
    }
    getText() {
        const selectedText = this.selectedText;
        if (selectedText != null && selectedText !== '') {
            return selectedText;
        }
        return generateText(this.childOpts, this.value, this.compareWith);
    }
    setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'select': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
            'select-disabled': this.disabled
        });
    }
    render() {
        const { placeholder, name, disabled, isExpanded, value, el } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const labelId = this.inputId + '-lbl';
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        let addPlaceholderClass = false;
        let selectText = this.getText();
        if (selectText === '' && placeholder != null) {
            selectText = placeholder;
            addPlaceholderClass = true;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, name, parseValue(value), disabled);
        const selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "combobox", "aria-haspopup": "dialog", "aria-disabled": disabled ? 'true' : null, "aria-expanded": `${isExpanded}`, "aria-labelledby": labelId, class: {
                [mode]: true,
                'in-item': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el),
                'select-disabled': disabled,
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: selectTextClasses }, selectText), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-icon", role: "presentation" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-icon-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: (btnEl => this.buttonEl = btnEl) })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "placeholder": ["disabledChanged"],
        "value": ["valueChanged"]
    }; }
    static get style() { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}"; }
};
const getOptionValue = (el) => {
    const value = el.value;
    return (value === undefined)
        ? el.textContent || ''
        : value;
};
const parseValue = (value) => {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value.toString();
};
const isOptionSelected = (currentValue, compareValue, compareWith) => {
    if (currentValue === undefined) {
        return false;
    }
    if (Array.isArray(currentValue)) {
        return currentValue.some(val => compareOptions(val, compareValue, compareWith));
    }
    else {
        return compareOptions(currentValue, compareValue, compareWith);
    }
};
const compareOptions = (currentValue, compareValue, compareWith) => {
    if (typeof compareWith === 'function') {
        return compareWith(currentValue, compareValue);
    }
    else if (typeof compareWith === 'string') {
        return currentValue[compareWith] === compareValue[compareWith];
    }
    else {
        return currentValue === compareValue;
    }
};
const generateText = (opts, value, compareWith) => {
    if (value === undefined) {
        return '';
    }
    if (Array.isArray(value)) {
        return value
            .map(v => textForValue(opts, v, compareWith))
            .filter(opt => opt !== null)
            .join(', ');
    }
    else {
        return textForValue(opts, value, compareWith) || '';
    }
};
const textForValue = (opts, value, compareWith) => {
    const selectOpt = opts.find(opt => {
        return compareOptions(getOptionValue(opt), value, compareWith);
    });
    return selectOpt
        ? selectOpt.textContent
        : null;
};
let selectIds = 0;

const SelectOption = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        /**
         * If `true`, the user cannot interact with the select option.
         */
        this.disabled = false;
        /**
         * If `true`, the element is selected.
         */
        this.selected = false;
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "option", id: this.inputId, class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{display:none}"; }
};
let selectOptionIds = 0;

const SelectPopover = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Array of options for the popover */
        this.options = [];
    }
    onSelect(ev) {
        const option = this.options.find(o => o.value === ev.target.value);
        if (option) {
            Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["s"])(option.handler);
        }
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list", null, this.header !== undefined && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.message))), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio-group", null, this.options.map(option => Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", null, option.text), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled })))))));
    }
    static get style() { return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"; }
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




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \**********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1zZWxlY3RfMy1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3dhdGNoLW9wdGlvbnMtMmFmOTYwMTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ3FEO0FBQzhDO0FBQzFFO0FBQ1k7O0FBRW5FO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QixrQ0FBa0MsWUFBWTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHlCQUF5QiwyREFBVztBQUNwQyx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9F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LHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3RCIsImZpbGUiOiIzMVxcY2h1bmtzXFwzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGYgYXMgZmluZEl0ZW1MYWJlbCwgYSBhcyByZW5kZXJIaWRkZW5JbnB1dCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIHBvcG92ZXJDb250cm9sbGVyLCBiIGFzIGFjdGlvblNoZWV0Q29udHJvbGxlciwgYSBhcyBhbGVydENvbnRyb2xsZXIsIHMgYXMgc2FmZUNhbGwgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IGggYXMgaG9zdENvbnRleHQgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IHcgYXMgd2F0Y2hGb3JPcHRpb25zIH0gZnJvbSAnLi93YXRjaC1vcHRpb25zLTJhZjk2MDExLmpzJztcblxuY29uc3QgU2VsZWN0ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gYGlvbi1zZWwtJHtzZWxlY3RJZHMrK31gO1xuICAgICAgICB0aGlzLmRpZEluaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBzZWxlY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYW5jZWxUZXh0ID0gJ0NhbmNlbCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBvayBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9rVGV4dCA9ICdPSyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCBjYW4gYWNjZXB0IG11bHRpcGxlIHZhbHVlcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbnRlcmZhY2UgdGhlIHNlbGVjdCBzaG91bGQgdXNlOiBgYWN0aW9uLXNoZWV0YCwgYHBvcG92ZXJgIG9yIGBhbGVydGAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmludGVyZmFjZSA9ICdhbGVydCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbnkgYWRkaXRpb25hbCBvcHRpb25zIHRoYXQgdGhlIGBhbGVydGAsIGBhY3Rpb24tc2hlZXRgIG9yIGBwb3BvdmVyYCBpbnRlcmZhY2VcbiAgICAgICAgICogY2FuIHRha2UuIFNlZSB0aGUgW0FsZXJ0Q29udHJvbGxlciBBUEkgZG9jc10oLi4vLi4vYWxlcnQvQWxlcnRDb250cm9sbGVyLyNjcmVhdGUpLCB0aGVcbiAgICAgICAgICogW0FjdGlvblNoZWV0Q29udHJvbGxlciBBUEkgZG9jc10oLi4vLi4vYWN0aW9uLXNoZWV0L0FjdGlvblNoZWV0Q29udHJvbGxlci8jY3JlYXRlKSBhbmQgdGhlXG4gICAgICAgICAqIFtQb3BvdmVyQ29udHJvbGxlciBBUEkgZG9jc10oLi4vLi4vcG9wb3Zlci9Qb3BvdmVyQ29udHJvbGxlci8jY3JlYXRlKSBmb3IgdGhlXG4gICAgICAgICAqIGNyZWF0ZSBvcHRpb25zIGZvciBlYWNoIGludGVyZmFjZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMub3Blbihldik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgIGlmICh0aGlzLmRpZEluaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG5vIHZhbHVlcyBzZXQgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgIC8vIHNvIGNoZWNrIHRvIHNlZSB3aG8gc2hvdWxkIGJlIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuY2hpbGRPcHRzLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBjaGVja2VkLm1hcChvID0+IGdldE9wdGlvblZhbHVlKG8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmNoaWxkT3B0cy5maW5kKG8gPT4gby5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGdldE9wdGlvblZhbHVlKGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICB0aGlzLm11dGF0aW9uTyA9IHdhdGNoRm9yT3B0aW9ucyh0aGlzLmVsLCAnaW9uLXNlbGVjdC1vcHRpb24nLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheU9wdGlvbnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbk8pIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgICAgIHRoaXMuZGlkSW5pdCA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIHNlbGVjdCBvdmVybGF5LiBUaGUgb3ZlcmxheSBpcyBlaXRoZXIgYW4gYWxlcnQsIGFjdGlvbiBzaGVldCwgb3IgcG9wb3ZlcixcbiAgICAgKiBkZXBlbmRpbmcgb24gdGhlIGBpbnRlcmZhY2VgIHByb3BlcnR5IG9uIHRoZSBgaW9uLXNlbGVjdGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIHVzZXIgaW50ZXJmYWNlIGV2ZW50IHRoYXQgY2FsbGVkIHRoZSBvcGVuLlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW4oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLm92ZXJsYXkgPSBhd2FpdCB0aGlzLmNyZWF0ZU92ZXJsYXkoZXZlbnQpO1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICBvdmVybGF5Lm9uRGlkRGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBvdmVybGF5LnByZXNlbnQoKTtcbiAgICAgICAgcmV0dXJuIG92ZXJsYXk7XG4gICAgfVxuICAgIGNyZWF0ZU92ZXJsYXkoZXYpIHtcbiAgICAgICAgbGV0IHNlbGVjdEludGVyZmFjZSA9IHRoaXMuaW50ZXJmYWNlO1xuICAgICAgICBpZiAoKHNlbGVjdEludGVyZmFjZSA9PT0gJ2FjdGlvbi1zaGVldCcgfHwgc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicpICYmIHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgU2VsZWN0IGludGVyZmFjZSBjYW5ub3QgYmUgXCIke3NlbGVjdEludGVyZmFjZX1cIiB3aXRoIGEgbXVsdGktdmFsdWUgc2VsZWN0LiBVc2luZyB0aGUgXCJhbGVydFwiIGludGVyZmFjZSBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgc2VsZWN0SW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicgJiYgIWV2KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlbGVjdCBpbnRlcmZhY2UgY2Fubm90IGJlIGEgXCJwb3BvdmVyXCIgd2l0aG91dCBwYXNzaW5nIGFuIGV2ZW50LiBVc2luZyB0aGUgXCJhbGVydFwiIGludGVyZmFjZSBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgc2VsZWN0SW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW5Qb3BvdmVyKGV2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAnYWN0aW9uLXNoZWV0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkFjdGlvblNoZWV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbkFsZXJ0KCk7XG4gICAgfVxuICAgIHVwZGF0ZU92ZXJsYXlPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gdGhpcy5vdmVybGF5O1xuICAgICAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZE9wdHMgPSB0aGlzLmNoaWxkT3B0cztcbiAgICAgICAgc3dpdGNoICh0aGlzLmludGVyZmFjZSkge1xuICAgICAgICAgICAgY2FzZSAnYWN0aW9uLXNoZWV0JzpcbiAgICAgICAgICAgICAgICBvdmVybGF5LmJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyhjaGlsZE9wdHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9wb3Zlcic6XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wb3ZlciA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignaW9uLXNlbGVjdC1wb3BvdmVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvcG92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wb3Zlci5vcHRpb25zID0gdGhpcy5jcmVhdGVQb3BvdmVyT3B0aW9ucyhjaGlsZE9wdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FsZXJ0JzpcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAodGhpcy5tdWx0aXBsZSA/ICdjaGVja2JveCcgOiAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmlucHV0cyA9IHRoaXMuY3JlYXRlQWxlcnRJbnB1dHMoY2hpbGRPcHRzLCBpbnB1dFR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvblNoZWV0QnV0dG9ucyA9IGRhdGEubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvbGU6IChvcHRpb24uc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJycpLFxuICAgICAgICAgICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgXCJjYW5jZWxcIiBidXR0b25cbiAgICAgICAgYWN0aW9uU2hlZXRCdXR0b25zLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogdGhpcy5jYW5jZWxUZXh0LFxuICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25DYW5jZWwuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjdGlvblNoZWV0QnV0dG9ucztcbiAgICB9XG4gICAgY3JlYXRlQWxlcnRJbnB1dHMoZGF0YSwgaW5wdXRUeXBlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm1hcChvID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogaW5wdXRUeXBlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBvLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRPcHRpb25WYWx1ZShvKSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBvLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBvLmRpc2FibGVkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlUG9wb3Zlck9wdGlvbnMoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5tYXAobyA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldE9wdGlvblZhbHVlKG8pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBvLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG8uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IG8uZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgb3BlblBvcG92ZXIoZXYpIHtcbiAgICAgICAgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJPcHRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgbW9kZSB9LCBpbnRlcmZhY2VPcHRpb25zKSwgeyBjb21wb25lbnQ6ICdpb24tc2VsZWN0LXBvcG92ZXInLCBjc3NDbGFzczogWydzZWxlY3QtcG9wb3ZlcicsIGludGVyZmFjZU9wdGlvbnMuY3NzQ2xhc3NdLCBldmVudDogZXYsIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBpbnRlcmZhY2VPcHRpb25zLmhlYWRlcixcbiAgICAgICAgICAgICAgICBzdWJIZWFkZXI6IGludGVyZmFjZU9wdGlvbnMuc3ViSGVhZGVyLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGludGVyZmFjZU9wdGlvbnMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLmNyZWF0ZVBvcG92ZXJPcHRpb25zKHRoaXMuY2hpbGRPcHRzKVxuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgcmV0dXJuIHBvcG92ZXJDb250cm9sbGVyLmNyZWF0ZShwb3BvdmVyT3B0cyk7XG4gICAgfVxuICAgIGFzeW5jIG9wZW5BY3Rpb25TaGVldCgpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGludGVyZmFjZU9wdGlvbnMgPSB0aGlzLmludGVyZmFjZU9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGFjdGlvblNoZWV0T3B0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG1vZGUgfSwgaW50ZXJmYWNlT3B0aW9ucyksIHsgYnV0dG9uczogdGhpcy5jcmVhdGVBY3Rpb25TaGVldEJ1dHRvbnModGhpcy5jaGlsZE9wdHMpLCBjc3NDbGFzczogWydzZWxlY3QtYWN0aW9uLXNoZWV0JywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc10gfSk7XG4gICAgICAgIHJldHVybiBhY3Rpb25TaGVldENvbnRyb2xsZXIuY3JlYXRlKGFjdGlvblNoZWV0T3B0cyk7XG4gICAgfVxuICAgIGFzeW5jIG9wZW5BbGVydCgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCk7XG4gICAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IChsYWJlbCkgPyBsYWJlbC50ZXh0Q29udGVudCA6IG51bGw7XG4gICAgICAgIGNvbnN0IGludGVyZmFjZU9wdGlvbnMgPSB0aGlzLmludGVyZmFjZU9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICh0aGlzLm11bHRpcGxlID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgYWxlcnRPcHRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgbW9kZSB9LCBpbnRlcmZhY2VPcHRpb25zKSwgeyBoZWFkZXI6IGludGVyZmFjZU9wdGlvbnMuaGVhZGVyID8gaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIgOiBsYWJlbFRleHQsIGlucHV0czogdGhpcy5jcmVhdGVBbGVydElucHV0cyh0aGlzLmNoaWxkT3B0cywgaW5wdXRUeXBlKSwgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jYW5jZWxUZXh0LFxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pb25DYW5jZWwuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMub2tUZXh0LFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoc2VsZWN0ZWRWYWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZFZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sIGNzc0NsYXNzOiBbJ3NlbGVjdC1hbGVydCcsIGludGVyZmFjZU9wdGlvbnMuY3NzQ2xhc3MsXG4gICAgICAgICAgICAgICAgKHRoaXMubXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWFsZXJ0JyA6ICdzaW5nbGUtc2VsZWN0LWFsZXJ0JyldIH0pO1xuICAgICAgICByZXR1cm4gYWxlcnRDb250cm9sbGVyLmNyZWF0ZShhbGVydE9wdHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgc2VsZWN0IGludGVyZmFjZS5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgLy8gVE9ETyBjaGVjayAhdGhpcy5vdmVybGF5IHx8ICF0aGlzLmlzRm9jdXMoKVxuICAgICAgICBpZiAoIXRoaXMub3ZlcmxheSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5kaXNtaXNzKCk7XG4gICAgfVxuICAgIHVwZGF0ZU9wdGlvbnMoKSB7XG4gICAgICAgIC8vIGl0ZXJhdGUgYWxsIG9wdGlvbnMsIHVwZGF0aW5nIHRoZSBzZWxlY3RlZCBwcm9wXG4gICAgICAgIGxldCBjYW5TZWxlY3QgPSB0cnVlO1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBjaGlsZE9wdHMsIGNvbXBhcmVXaXRoLCBtdWx0aXBsZSB9ID0gdGhpcztcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RPcHRpb24gb2YgY2hpbGRPcHRzKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRWYWx1ZSA9IGdldE9wdGlvblZhbHVlKHNlbGVjdE9wdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGNhblNlbGVjdCAmJiBpc09wdGlvblNlbGVjdGVkKHZhbHVlLCBvcHRWYWx1ZSwgY29tcGFyZVdpdGgpO1xuICAgICAgICAgICAgc2VsZWN0T3B0aW9uLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAvLyBpZiBjdXJyZW50IG9wdGlvbiBpcyBzZWxlY3RlZCBhbmQgc2VsZWN0IGlzIHNpbmdsZS1vcHRpb24sIHdlIGNhbid0IHNlbGVjdFxuICAgICAgICAgICAgLy8gYW55IG9wdGlvbiBtb3JlXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIW11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY2FuU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TGFiZWwoKSB7XG4gICAgICAgIHJldHVybiBmaW5kSXRlbUxhYmVsKHRoaXMuZWwpO1xuICAgIH1cbiAgICBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCgpICE9PSAnJztcbiAgICB9XG4gICAgZ2V0IGNoaWxkT3B0cygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tc2VsZWN0LW9wdGlvbicpKTtcbiAgICB9XG4gICAgZ2V0VGV4dCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gdGhpcy5zZWxlY3RlZFRleHQ7XG4gICAgICAgIGlmIChzZWxlY3RlZFRleHQgIT0gbnVsbCAmJiBzZWxlY3RlZFRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVRleHQodGhpcy5jaGlsZE9wdHMsIHRoaXMudmFsdWUsIHRoaXMuY29tcGFyZVdpdGgpO1xuICAgIH1cbiAgICBzZXRGb2N1cygpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRWwpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ3NlbGVjdCc6IHRydWUsXG4gICAgICAgICAgICAnaGFzLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlciAhPSBudWxsLFxuICAgICAgICAgICAgJ2hhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAnc2VsZWN0LWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBuYW1lLCBkaXNhYmxlZCwgaXNFeHBhbmRlZCwgdmFsdWUsIGVsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IHRoaXMuaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKGVsKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkZFBsYWNlaG9sZGVyQ2xhc3MgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNlbGVjdFRleHQgPSB0aGlzLmdldFRleHQoKTtcbiAgICAgICAgaWYgKHNlbGVjdFRleHQgPT09ICcnICYmIHBsYWNlaG9sZGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGVjdFRleHQgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIGFkZFBsYWNlaG9sZGVyQ2xhc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCBuYW1lLCBwYXJzZVZhbHVlKHZhbHVlKSwgZGlzYWJsZWQpO1xuICAgICAgICBjb25zdCBzZWxlY3RUZXh0Q2xhc3NlcyA9IHtcbiAgICAgICAgICAgICdzZWxlY3QtdGV4dCc6IHRydWUsXG4gICAgICAgICAgICAnc2VsZWN0LXBsYWNlaG9sZGVyJzogYWRkUGxhY2Vob2xkZXJDbGFzc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIHJvbGU6IFwiY29tYm9ib3hcIiwgXCJhcmlhLWhhc3BvcHVwXCI6IFwiZGlhbG9nXCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1leHBhbmRlZFwiOiBgJHtpc0V4cGFuZGVkfWAsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpbi1pdGVtJzogaG9zdENvbnRleHQoJ2lvbi1pdGVtJywgZWwpLFxuICAgICAgICAgICAgICAgICdzZWxlY3QtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBzZWxlY3RUZXh0Q2xhc3NlcyB9LCBzZWxlY3RUZXh0KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInNlbGVjdC1pY29uXCIsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInNlbGVjdC1pY29uLWlubmVyXCIgfSkpLCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbkJsdXI6IHRoaXMub25CbHVyLCBkaXNhYmxlZDogZGlzYWJsZWQsIHJlZjogKGJ0bkVsID0+IHRoaXMuYnV0dG9uRWwgPSBidG5FbCkgfSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUNoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX06aG9zdCguaW4taXRlbSl7cG9zaXRpb246c3RhdGljO21heC13aWR0aDo0NSV9Omhvc3QoLnNlbGVjdC1kaXNhYmxlZCl7b3BhY2l0eTouNDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pb24tZm9jdXNlZCkgYnV0dG9ue2JvcmRlcjoycHggc29saWQgIzVlOWVkNn0uc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4zM31idXR0b257bGVmdDowO3RvcDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO291dGxpbmU6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgYnV0dG9uLFtkaXI9cnRsXSBidXR0b257bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc2VsZWN0LWljb257cG9zaXRpb246cmVsYXRpdmV9LnNlbGVjdC10ZXh0ey1tcy1mbGV4OjE7ZmxleDoxO21pbi13aWR0aDoxNnB4O2ZvbnQtc2l6ZTppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn0uc2VsZWN0LWljb24taW5uZXJ7bGVmdDo1cHg7dG9wOjUwJTttYXJnaW4tdG9wOi0zcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItdG9wOjVweCBzb2xpZDtib3JkZXItcmlnaHQ6NXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjVweCBzb2xpZCB0cmFuc3BhcmVudDtjb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTouMzM7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNlbGVjdC1pY29uLWlubmVyLFtkaXI9cnRsXSAuc2VsZWN0LWljb24taW5uZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDo1cHh9Omhvc3R7LS1wYWRkaW5nLXRvcDoxMHB4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tcGFkZGluZy1ib3R0b206MTBweDstLXBhZGRpbmctc3RhcnQ6MTZweH0uc2VsZWN0LWljb257d2lkdGg6MTJweDtoZWlnaHQ6MThweH1cIjsgfVxufTtcbmNvbnN0IGdldE9wdGlvblZhbHVlID0gKGVsKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlbC52YWx1ZTtcbiAgICByZXR1cm4gKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgID8gZWwudGV4dENvbnRlbnQgfHwgJydcbiAgICAgICAgOiB2YWx1ZTtcbn07XG5jb25zdCBwYXJzZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5qb2luKCcsJyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufTtcbmNvbnN0IGlzT3B0aW9uU2VsZWN0ZWQgPSAoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlLnNvbWUodmFsID0+IGNvbXBhcmVPcHRpb25zKHZhbCwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVPcHRpb25zKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCk7XG4gICAgfVxufTtcbmNvbnN0IGNvbXBhcmVPcHRpb25zID0gKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY29tcGFyZVdpdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVXaXRoKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbXBhcmVXaXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlW2NvbXBhcmVXaXRoXSA9PT0gY29tcGFyZVZhbHVlW2NvbXBhcmVXaXRoXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgPT09IGNvbXBhcmVWYWx1ZTtcbiAgICB9XG59O1xuY29uc3QgZ2VuZXJhdGVUZXh0ID0gKG9wdHMsIHZhbHVlLCBjb21wYXJlV2l0aCkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgLm1hcCh2ID0+IHRleHRGb3JWYWx1ZShvcHRzLCB2LCBjb21wYXJlV2l0aCkpXG4gICAgICAgICAgICAuZmlsdGVyKG9wdCA9PiBvcHQgIT09IG51bGwpXG4gICAgICAgICAgICAuam9pbignLCAnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZXh0Rm9yVmFsdWUob3B0cywgdmFsdWUsIGNvbXBhcmVXaXRoKSB8fCAnJztcbiAgICB9XG59O1xuY29uc3QgdGV4dEZvclZhbHVlID0gKG9wdHMsIHZhbHVlLCBjb21wYXJlV2l0aCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdE9wdCA9IG9wdHMuZmluZChvcHQgPT4ge1xuICAgICAgICByZXR1cm4gY29tcGFyZU9wdGlvbnMoZ2V0T3B0aW9uVmFsdWUob3B0KSwgdmFsdWUsIGNvbXBhcmVXaXRoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0T3B0XG4gICAgICAgID8gc2VsZWN0T3B0LnRleHRDb250ZW50XG4gICAgICAgIDogbnVsbDtcbn07XG5sZXQgc2VsZWN0SWRzID0gMDtcblxuY29uc3QgU2VsZWN0T3B0aW9uID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gYGlvbi1zZWxvcHQtJHtzZWxlY3RPcHRpb25JZHMrK31gO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgc2VsZWN0IG9wdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGVsZW1lbnQgaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJvcHRpb25cIiwgaWQ6IHRoaXMuaW5wdXRJZCwgY2xhc3M6IGdldElvbk1vZGUodGhpcykgfSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTpub25lfVwiOyB9XG59O1xubGV0IHNlbGVjdE9wdGlvbklkcyA9IDA7XG5cbmNvbnN0IFNlbGVjdFBvcG92ZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQXJyYXkgb2Ygb3B0aW9ucyBmb3IgdGhlIHBvcG92ZXIgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgfVxuICAgIG9uU2VsZWN0KGV2KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgc2FmZUNhbGwob3B0aW9uLmhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IGdldElvbk1vZGUodGhpcykgfSwgaChcImlvbi1saXN0XCIsIG51bGwsIHRoaXMuaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgaChcImlvbi1saXN0LWhlYWRlclwiLCBudWxsLCB0aGlzLmhlYWRlciksICh0aGlzLnN1YkhlYWRlciAhPT0gdW5kZWZpbmVkIHx8IHRoaXMubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICAgaChcImlvbi1pdGVtXCIsIG51bGwsIGgoXCJpb24tbGFiZWxcIiwgeyBjbGFzczogXCJpb24tdGV4dC13cmFwXCIgfSwgdGhpcy5zdWJIZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBoKFwiaDNcIiwgbnVsbCwgdGhpcy5zdWJIZWFkZXIpLCB0aGlzLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCAmJiBoKFwicFwiLCBudWxsLCB0aGlzLm1lc3NhZ2UpKSksIGgoXCJpb24tcmFkaW8tZ3JvdXBcIiwgbnVsbCwgdGhpcy5vcHRpb25zLm1hcChvcHRpb24gPT4gaChcImlvbi1pdGVtXCIsIG51bGwsIGgoXCJpb24tbGFiZWxcIiwgbnVsbCwgb3B0aW9uLnRleHQpLCBoKFwiaW9uLXJhZGlvXCIsIHsgY2hlY2tlZDogb3B0aW9uLmNoZWNrZWQsIHZhbHVlOiBvcHRpb24udmFsdWUsIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQgfSkpKSkpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tc2VsZWN0LXBvcG92ZXItaCBpb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOi0xcHg7bWFyZ2luLWJvdHRvbTotMXB4fS5zYy1pb24tc2VsZWN0LXBvcG92ZXItaCBpb24tbGFiZWwuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLCAuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWggaW9uLWxpc3QtaGVhZGVyLnNjLWlvbi1zZWxlY3QtcG9wb3ZlcnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XCI7IH1cbn07XG5cbmV4cG9ydCB7IFNlbGVjdCBhcyBpb25fc2VsZWN0LCBTZWxlY3RPcHRpb24gYXMgaW9uX3NlbGVjdF9vcHRpb24sIFNlbGVjdFBvcG92ZXIgYXMgaW9uX3NlbGVjdF9wb3BvdmVyIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iLCJjb25zdCB3YXRjaEZvck9wdGlvbnMgPSAoY29udGFpbmVyRWwsIHRhZ05hbWUsIG9uQ2hhbmdlKSA9PiB7XHJcbiAgICBjb25zdCBtdXRhdGlvbiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uTGlzdCA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UoZ2V0U2VsZWN0ZWRPcHRpb24obXV0YXRpb25MaXN0LCB0YWdOYW1lKSk7XHJcbiAgICB9KTtcclxuICAgIG11dGF0aW9uLm9ic2VydmUoY29udGFpbmVyRWwsIHtcclxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbXV0YXRpb247XHJcbn07XHJcbmNvbnN0IGdldFNlbGVjdGVkT3B0aW9uID0gKG11dGF0aW9uTGlzdCwgdGFnTmFtZSkgPT4ge1xyXG4gICAgbGV0IG5ld09wdGlvbjtcclxuICAgIG11dGF0aW9uTGlzdC5mb3JFYWNoKG11dCA9PiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXQuYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXdPcHRpb24gPSBmaW5kQ2hlY2tlZE9wdGlvbihtdXQuYWRkZWROb2Rlc1tpXSwgdGFnTmFtZSkgfHwgbmV3T3B0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ld09wdGlvbjtcclxufTtcclxuY29uc3QgZmluZENoZWNrZWRPcHRpb24gPSAoZWwsIHRhZ05hbWUpID0+IHtcclxuICAgIGlmIChlbC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpb25zID0gKGVsLnRhZ05hbWUgPT09IHRhZ05hbWUudG9VcHBlckNhc2UoKSlcclxuICAgICAgICA/IFtlbF1cclxuICAgICAgICA6IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5maW5kKChvKSA9PiBvLmNoZWNrZWQgPT09IHRydWUpO1xyXG59O1xuXG5leHBvcnQgeyBmaW5kQ2hlY2tlZE9wdGlvbiBhcyBmLCB3YXRjaEZvck9wdGlvbnMgYXMgdyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==