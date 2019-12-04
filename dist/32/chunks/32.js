(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js ***!
  \*********************************************************************/
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
    static get style() { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1zZWxlY3RfMy1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vd2F0Y2gtb3B0aW9ucy0yYWY5NjAxMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDcUQ7QUFDOEM7QUFDMUU7QUFDWTs7QUFFbkU7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLGtDQUFrQyxZQUFZO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQyx1QkFBdUIsMkRBQVc7QUFDbEMsd0JBQXdCLDJEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0VB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dUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdEIiwiZmlsZSI6IjMyXFxjaHVua3NcXDMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kSXRlbUxhYmVsLCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgcG9wb3ZlckNvbnRyb2xsZXIsIGIgYXMgYWN0aW9uU2hlZXRDb250cm9sbGVyLCBhIGFzIGFsZXJ0Q29udHJvbGxlciwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgdyBhcyB3YXRjaEZvck9wdGlvbnMgfSBmcm9tICcuL3dhdGNoLW9wdGlvbnMtMmFmOTYwMTEuanMnO1xuXG5jb25zdCBTZWxlY3QgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlucHV0SWQgPSBgaW9uLXNlbC0ke3NlbGVjdElkcysrfWA7XG4gICAgICAgIHRoaXMuZGlkSW5pdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlbGVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbmNlbFRleHQgPSAnQ2FuY2VsJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIG9rIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2tUZXh0ID0gJ09LJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0IGNhbiBhY2NlcHQgbXVsdGlwbGUgdmFsdWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGludGVyZmFjZSB0aGUgc2VsZWN0IHNob3VsZCB1c2U6IGBhY3Rpb24tc2hlZXRgLCBgcG9wb3ZlcmAgb3IgYGFsZXJ0YC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFueSBhZGRpdGlvbmFsIG9wdGlvbnMgdGhhdCB0aGUgYGFsZXJ0YCwgYGFjdGlvbi1zaGVldGAgb3IgYHBvcG92ZXJgIGludGVyZmFjZVxuICAgICAgICAgKiBjYW4gdGFrZS4gU2VlIHRoZSBbQWxlcnRDb250cm9sbGVyIEFQSSBkb2NzXSguLi8uLi9hbGVydC9BbGVydENvbnRyb2xsZXIvI2NyZWF0ZSksIHRoZVxuICAgICAgICAgKiBbQWN0aW9uU2hlZXRDb250cm9sbGVyIEFQSSBkb2NzXSguLi8uLi9hY3Rpb24tc2hlZXQvQWN0aW9uU2hlZXRDb250cm9sbGVyLyNjcmVhdGUpIGFuZCB0aGVcbiAgICAgICAgICogW1BvcG92ZXJDb250cm9sbGVyIEFQSSBkb2NzXSguLi8uLi9wb3BvdmVyL1BvcG92ZXJDb250cm9sbGVyLyNjcmVhdGUpIGZvciB0aGVcbiAgICAgICAgICogY3JlYXRlIG9wdGlvbnMgZm9yIGVhY2ggaW50ZXJmYWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnRlcmZhY2VPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMub25DbGljayA9IChldikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5vcGVuKGV2KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25DYW5jZWwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNhbmNlbFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgdmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgaWYgKHRoaXMuZGlkSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gdmFsdWVzIHNldCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICAgICAgLy8gc28gY2hlY2sgdG8gc2VlIHdobyBzaG91bGQgYmUgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5jaGlsZE9wdHMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGNoZWNrZWQubWFwKG8gPT4gZ2V0T3B0aW9uVmFsdWUobykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuY2hpbGRPcHRzLmZpbmQobyA9PiBvLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZ2V0T3B0aW9uVmFsdWUoY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PID0gd2F0Y2hGb3JPcHRpb25zKHRoaXMuZWwsICdpb24tc2VsZWN0LW9wdGlvbicsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uTykge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgdGhpcy5kaWRJbml0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgc2VsZWN0IG92ZXJsYXkuIFRoZSBvdmVybGF5IGlzIGVpdGhlciBhbiBhbGVydCwgYWN0aW9uIHNoZWV0LCBvciBwb3BvdmVyLFxuICAgICAqIGRlcGVuZGluZyBvbiB0aGUgYGludGVyZmFjZWAgcHJvcGVydHkgb24gdGhlIGBpb24tc2VsZWN0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBUaGUgdXNlciBpbnRlcmZhY2UgZXZlbnQgdGhhdCBjYWxsZWQgdGhlIG9wZW4uXG4gICAgICovXG4gICAgYXN5bmMgb3BlbihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMub3ZlcmxheSA9IGF3YWl0IHRoaXMuY3JlYXRlT3ZlcmxheShldmVudCk7XG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgIG92ZXJsYXkub25EaWREaXNtaXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IG92ZXJsYXkucHJlc2VudCgpO1xuICAgICAgICByZXR1cm4gb3ZlcmxheTtcbiAgICB9XG4gICAgY3JlYXRlT3ZlcmxheShldikge1xuICAgICAgICBsZXQgc2VsZWN0SW50ZXJmYWNlID0gdGhpcy5pbnRlcmZhY2U7XG4gICAgICAgIGlmICgoc2VsZWN0SW50ZXJmYWNlID09PSAnYWN0aW9uLXNoZWV0JyB8fCBzZWxlY3RJbnRlcmZhY2UgPT09ICdwb3BvdmVyJykgJiYgdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTZWxlY3QgaW50ZXJmYWNlIGNhbm5vdCBiZSBcIiR7c2VsZWN0SW50ZXJmYWNlfVwiIHdpdGggYSBtdWx0aS12YWx1ZSBzZWxlY3QuIFVzaW5nIHRoZSBcImFsZXJ0XCIgaW50ZXJmYWNlIGluc3RlYWQuYCk7XG4gICAgICAgICAgICBzZWxlY3RJbnRlcmZhY2UgPSAnYWxlcnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdwb3BvdmVyJyAmJiAhZXYpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2VsZWN0IGludGVyZmFjZSBjYW5ub3QgYmUgYSBcInBvcG92ZXJcIiB3aXRob3V0IHBhc3NpbmcgYW4gZXZlbnQuIFVzaW5nIHRoZSBcImFsZXJ0XCIgaW50ZXJmYWNlIGluc3RlYWQuJyk7XG4gICAgICAgICAgICBzZWxlY3RJbnRlcmZhY2UgPSAnYWxlcnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdwb3BvdmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlblBvcG92ZXIoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdhY3Rpb24tc2hlZXQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuQWN0aW9uU2hlZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuQWxlcnQoKTtcbiAgICB9XG4gICAgdXBkYXRlT3ZlcmxheU9wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLm92ZXJsYXk7XG4gICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkT3B0cyA9IHRoaXMuY2hpbGRPcHRzO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaW50ZXJmYWNlKSB7XG4gICAgICAgICAgICBjYXNlICdhY3Rpb24tc2hlZXQnOlxuICAgICAgICAgICAgICAgIG92ZXJsYXkuYnV0dG9ucyA9IHRoaXMuY3JlYXRlQWN0aW9uU2hlZXRCdXR0b25zKGNoaWxkT3B0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3BvdmVyJzpcbiAgICAgICAgICAgICAgICBjb25zdCBwb3BvdmVyID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCdpb24tc2VsZWN0LXBvcG92ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAocG9wb3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyLm9wdGlvbnMgPSB0aGlzLmNyZWF0ZVBvcG92ZXJPcHRpb25zKGNoaWxkT3B0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxlcnQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICh0aGlzLm11bHRpcGxlID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpO1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuaW5wdXRzID0gdGhpcy5jcmVhdGVBbGVydElucHV0cyhjaGlsZE9wdHMsIGlucHV0VHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQWN0aW9uU2hlZXRCdXR0b25zKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uU2hlZXRCdXR0b25zID0gZGF0YS5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcm9sZTogKG9wdGlvbi5zZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJyksXG4gICAgICAgICAgICAgICAgdGV4dDogb3B0aW9uLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGdldE9wdGlvblZhbHVlKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFkZCBcImNhbmNlbFwiIGJ1dHRvblxuICAgICAgICBhY3Rpb25TaGVldEJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmNhbmNlbFRleHQsXG4gICAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWN0aW9uU2hlZXRCdXR0b25zO1xuICAgIH1cbiAgICBjcmVhdGVBbGVydElucHV0cyhkYXRhLCBpbnB1dFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKG8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBpbnB1dFR5cGUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IG8udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGdldE9wdGlvblZhbHVlKG8pLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG8uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IG8uZGlzYWJsZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVQb3BvdmVyT3B0aW9ucyhkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm1hcChvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0T3B0aW9uVmFsdWUobyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IG8udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogby5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogby5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBvcGVuUG9wb3Zlcihldikge1xuICAgICAgICBjb25zdCBpbnRlcmZhY2VPcHRpb25zID0gdGhpcy5pbnRlcmZhY2VPcHRpb25zO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgcG9wb3Zlck9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBtb2RlIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7IGNvbXBvbmVudDogJ2lvbi1zZWxlY3QtcG9wb3ZlcicsIGNzc0NsYXNzOiBbJ3NlbGVjdC1wb3BvdmVyJywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc10sIGV2ZW50OiBldiwgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGludGVyZmFjZU9wdGlvbnMuaGVhZGVyLFxuICAgICAgICAgICAgICAgIHN1YkhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5zdWJIZWFkZXIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogaW50ZXJmYWNlT3B0aW9ucy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuY3JlYXRlUG9wb3Zlck9wdGlvbnModGhpcy5jaGlsZE9wdHMpXG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICByZXR1cm4gcG9wb3ZlckNvbnRyb2xsZXIuY3JlYXRlKHBvcG92ZXJPcHRzKTtcbiAgICB9XG4gICAgYXN5bmMgb3BlbkFjdGlvblNoZWV0KCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICAgICAgY29uc3QgYWN0aW9uU2hlZXRPcHRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgbW9kZSB9LCBpbnRlcmZhY2VPcHRpb25zKSwgeyBidXR0b25zOiB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyh0aGlzLmNoaWxkT3B0cyksIGNzc0NsYXNzOiBbJ3NlbGVjdC1hY3Rpb24tc2hlZXQnLCBpbnRlcmZhY2VPcHRpb25zLmNzc0NsYXNzXSB9KTtcbiAgICAgICAgcmV0dXJuIGFjdGlvblNoZWV0Q29udHJvbGxlci5jcmVhdGUoYWN0aW9uU2hlZXRPcHRzKTtcbiAgICB9XG4gICAgYXN5bmMgb3BlbkFsZXJ0KCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAgICAgY29uc3QgbGFiZWxUZXh0ID0gKGxhYmVsKSA/IGxhYmVsLnRleHRDb250ZW50IDogbnVsbDtcbiAgICAgICAgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gKHRoaXMubXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJyk7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBhbGVydE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBtb2RlIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7IGhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIgPyBpbnRlcmZhY2VPcHRpb25zLmhlYWRlciA6IGxhYmVsVGV4dCwgaW5wdXRzOiB0aGlzLmNyZWF0ZUFsZXJ0SW5wdXRzKHRoaXMuY2hpbGRPcHRzLCBpbnB1dFR5cGUpLCBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNhbmNlbFRleHQsXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5va1RleHQsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IChzZWxlY3RlZFZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkVmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSwgY3NzQ2xhc3M6IFsnc2VsZWN0LWFsZXJ0JywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzcyxcbiAgICAgICAgICAgICAgICAodGhpcy5tdWx0aXBsZSA/ICdtdWx0aXBsZS1zZWxlY3QtYWxlcnQnIDogJ3NpbmdsZS1zZWxlY3QtYWxlcnQnKV0gfSk7XG4gICAgICAgIHJldHVybiBhbGVydENvbnRyb2xsZXIuY3JlYXRlKGFsZXJ0T3B0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBzZWxlY3QgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICAvLyBUT0RPIGNoZWNrICF0aGlzLm92ZXJsYXkgfHwgIXRoaXMuaXNGb2N1cygpXG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5LmRpc21pc3MoKTtcbiAgICB9XG4gICAgdXBkYXRlT3B0aW9ucygpIHtcbiAgICAgICAgLy8gaXRlcmF0ZSBhbGwgb3B0aW9ucywgdXBkYXRpbmcgdGhlIHNlbGVjdGVkIHByb3BcbiAgICAgICAgbGV0IGNhblNlbGVjdCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGNoaWxkT3B0cywgY29tcGFyZVdpdGgsIG11bHRpcGxlIH0gPSB0aGlzO1xuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdE9wdGlvbiBvZiBjaGlsZE9wdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdFZhbHVlID0gZ2V0T3B0aW9uVmFsdWUoc2VsZWN0T3B0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gY2FuU2VsZWN0ICYmIGlzT3B0aW9uU2VsZWN0ZWQodmFsdWUsIG9wdFZhbHVlLCBjb21wYXJlV2l0aCk7XG4gICAgICAgICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgb3B0aW9uIGlzIHNlbGVjdGVkIGFuZCBzZWxlY3QgaXMgc2luZ2xlLW9wdGlvbiwgd2UgY2FuJ3Qgc2VsZWN0XG4gICAgICAgICAgICAvLyBhbnkgb3B0aW9uIG1vcmVcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiAhbXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjYW5TZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRJdGVtTGFiZWwodGhpcy5lbCk7XG4gICAgfVxuICAgIGhhc1ZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXh0KCkgIT09ICcnO1xuICAgIH1cbiAgICBnZXQgY2hpbGRPcHRzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWxlY3Qtb3B0aW9uJykpO1xuICAgIH1cbiAgICBnZXRUZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSB0aGlzLnNlbGVjdGVkVGV4dDtcbiAgICAgICAgaWYgKHNlbGVjdGVkVGV4dCAhPSBudWxsICYmIHNlbGVjdGVkVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlVGV4dCh0aGlzLmNoaWxkT3B0cywgdGhpcy52YWx1ZSwgdGhpcy5jb21wYXJlV2l0aCk7XG4gICAgfVxuICAgIHNldEZvY3VzKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25FbCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25FbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZSc6IHRydWUsXG4gICAgICAgICAgICAnc2VsZWN0JzogdHJ1ZSxcbiAgICAgICAgICAgICdoYXMtcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyICE9IG51bGwsXG4gICAgICAgICAgICAnaGFzLXZhbHVlJzogdGhpcy5oYXNWYWx1ZSgpLFxuICAgICAgICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICdzZWxlY3QtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGxhY2Vob2xkZXIsIG5hbWUsIGRpc2FibGVkLCBpc0V4cGFuZGVkLCB2YWx1ZSwgZWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBsYWJlbElkID0gdGhpcy5pbnB1dElkICsgJy1sYmwnO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGZpbmRJdGVtTGFiZWwoZWwpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gbGFiZWxJZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWRkUGxhY2Vob2xkZXJDbGFzcyA9IGZhbHNlO1xuICAgICAgICBsZXQgc2VsZWN0VGV4dCA9IHRoaXMuZ2V0VGV4dCgpO1xuICAgICAgICBpZiAoc2VsZWN0VGV4dCA9PT0gJycgJiYgcGxhY2Vob2xkZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZWN0VGV4dCA9IHBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgYWRkUGxhY2Vob2xkZXJDbGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIG5hbWUsIHBhcnNlVmFsdWUodmFsdWUpLCBkaXNhYmxlZCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFRleHRDbGFzc2VzID0ge1xuICAgICAgICAgICAgJ3NlbGVjdC10ZXh0JzogdHJ1ZSxcbiAgICAgICAgICAgICdzZWxlY3QtcGxhY2Vob2xkZXInOiBhZGRQbGFjZWhvbGRlckNsYXNzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgcm9sZTogXCJjb21ib2JveFwiLCBcImFyaWEtaGFzcG9wdXBcIjogXCJkaWFsb2dcIiwgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgXCJhcmlhLWV4cGFuZGVkXCI6IGAke2lzRXhwYW5kZWR9YCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgJ2luLWl0ZW0nOiBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCksXG4gICAgICAgICAgICAgICAgJ3NlbGVjdC1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHNlbGVjdFRleHRDbGFzc2VzIH0sIHNlbGVjdFRleHQpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VsZWN0LWljb25cIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VsZWN0LWljb24taW5uZXJcIiB9KSksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiBkaXNhYmxlZCwgcmVmOiAoYnRuRWwgPT4gdGhpcy5idXR0b25FbCA9IGJ0bkVsKSB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6Mn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fTpob3N0KC5pbi1pdGVtKXtwb3NpdGlvbjpzdGF0aWM7bWF4LXdpZHRoOjQ1JX06aG9zdCguc2VsZWN0LWRpc2FibGVkKXtvcGFjaXR5Oi40O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmlvbi1mb2N1c2VkKSBidXR0b257Ym9yZGVyOjJweCBzb2xpZCAjNWU5ZWQ2fS5zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6Y3VycmVudENvbG9yO29wYWNpdHk6LjMzfWJ1dHRvbntsZWZ0OjA7dG9wOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7b3V0bGluZTpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBidXR0b24sW2Rpcj1ydGxdIGJ1dHRvbntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zZWxlY3QtaWNvbntwb3NpdGlvbjpyZWxhdGl2ZX0uc2VsZWN0LXRleHR7LW1zLWZsZXg6MTtmbGV4OjE7bWluLXdpZHRoOjE2cHg7Zm9udC1zaXplOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5zZWxlY3QtaWNvbi1pbm5lcntsZWZ0OjVweDt0b3A6NTAlO21hcmdpbi10b3A6LTNweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowO2hlaWdodDowO2JvcmRlci10b3A6NXB4IHNvbGlkO2JvcmRlci1yaWdodDo1cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkIHRyYW5zcGFyZW50O2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4zMztwb2ludGVyLWV2ZW50czpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2VsZWN0LWljb24taW5uZXIsW2Rpcj1ydGxdIC5zZWxlY3QtaWNvbi1pbm5lcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjVweH06aG9zdHstLXBhZGRpbmctdG9wOjEwcHg7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MTFweDstLXBhZGRpbmctc3RhcnQ6MTZweH0uc2VsZWN0LWljb257d2lkdGg6MTlweDtoZWlnaHQ6MTlweH1cIjsgfVxufTtcbmNvbnN0IGdldE9wdGlvblZhbHVlID0gKGVsKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlbC52YWx1ZTtcbiAgICByZXR1cm4gKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgID8gZWwudGV4dENvbnRlbnQgfHwgJydcbiAgICAgICAgOiB2YWx1ZTtcbn07XG5jb25zdCBwYXJzZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5qb2luKCcsJyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufTtcbmNvbnN0IGlzT3B0aW9uU2VsZWN0ZWQgPSAoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlLnNvbWUodmFsID0+IGNvbXBhcmVPcHRpb25zKHZhbCwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVPcHRpb25zKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCk7XG4gICAgfVxufTtcbmNvbnN0IGNvbXBhcmVPcHRpb25zID0gKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY29tcGFyZVdpdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVXaXRoKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbXBhcmVXaXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlW2NvbXBhcmVXaXRoXSA9PT0gY29tcGFyZVZhbHVlW2NvbXBhcmVXaXRoXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgPT09IGNvbXBhcmVWYWx1ZTtcbiAgICB9XG59O1xuY29uc3QgZ2VuZXJhdGVUZXh0ID0gKG9wdHMsIHZhbHVlLCBjb21wYXJlV2l0aCkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgLm1hcCh2ID0+IHRleHRGb3JWYWx1ZShvcHRzLCB2LCBjb21wYXJlV2l0aCkpXG4gICAgICAgICAgICAuZmlsdGVyKG9wdCA9PiBvcHQgIT09IG51bGwpXG4gICAgICAgICAgICAuam9pbignLCAnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZXh0Rm9yVmFsdWUob3B0cywgdmFsdWUsIGNvbXBhcmVXaXRoKSB8fCAnJztcbiAgICB9XG59O1xuY29uc3QgdGV4dEZvclZhbHVlID0gKG9wdHMsIHZhbHVlLCBjb21wYXJlV2l0aCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdE9wdCA9IG9wdHMuZmluZChvcHQgPT4ge1xuICAgICAgICByZXR1cm4gY29tcGFyZU9wdGlvbnMoZ2V0T3B0aW9uVmFsdWUob3B0KSwgdmFsdWUsIGNvbXBhcmVXaXRoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0T3B0XG4gICAgICAgID8gc2VsZWN0T3B0LnRleHRDb250ZW50XG4gICAgICAgIDogbnVsbDtcbn07XG5sZXQgc2VsZWN0SWRzID0gMDtcblxuY29uc3QgU2VsZWN0T3B0aW9uID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gYGlvbi1zZWxvcHQtJHtzZWxlY3RPcHRpb25JZHMrK31gO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgc2VsZWN0IG9wdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGVsZW1lbnQgaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJvcHRpb25cIiwgaWQ6IHRoaXMuaW5wdXRJZCwgY2xhc3M6IGdldElvbk1vZGUodGhpcykgfSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTpub25lfVwiOyB9XG59O1xubGV0IHNlbGVjdE9wdGlvbklkcyA9IDA7XG5cbmNvbnN0IFNlbGVjdFBvcG92ZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQXJyYXkgb2Ygb3B0aW9ucyBmb3IgdGhlIHBvcG92ZXIgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgfVxuICAgIG9uU2VsZWN0KGV2KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMub3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgc2FmZUNhbGwob3B0aW9uLmhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IGdldElvbk1vZGUodGhpcykgfSwgaChcImlvbi1saXN0XCIsIG51bGwsIHRoaXMuaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgaChcImlvbi1saXN0LWhlYWRlclwiLCBudWxsLCB0aGlzLmhlYWRlciksICh0aGlzLnN1YkhlYWRlciAhPT0gdW5kZWZpbmVkIHx8IHRoaXMubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICAgaChcImlvbi1pdGVtXCIsIG51bGwsIGgoXCJpb24tbGFiZWxcIiwgeyBjbGFzczogXCJpb24tdGV4dC13cmFwXCIgfSwgdGhpcy5zdWJIZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBoKFwiaDNcIiwgbnVsbCwgdGhpcy5zdWJIZWFkZXIpLCB0aGlzLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCAmJiBoKFwicFwiLCBudWxsLCB0aGlzLm1lc3NhZ2UpKSksIGgoXCJpb24tcmFkaW8tZ3JvdXBcIiwgbnVsbCwgdGhpcy5vcHRpb25zLm1hcChvcHRpb24gPT4gaChcImlvbi1pdGVtXCIsIG51bGwsIGgoXCJpb24tbGFiZWxcIiwgbnVsbCwgb3B0aW9uLnRleHQpLCBoKFwiaW9uLXJhZGlvXCIsIHsgY2hlY2tlZDogb3B0aW9uLmNoZWNrZWQsIHZhbHVlOiBvcHRpb24udmFsdWUsIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQgfSkpKSkpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tc2VsZWN0LXBvcG92ZXItaCBpb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOi0xcHg7bWFyZ2luLWJvdHRvbTotMXB4fS5zYy1pb24tc2VsZWN0LXBvcG92ZXItaCBpb24tbGFiZWwuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLCAuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWggaW9uLWxpc3QtaGVhZGVyLnNjLWlvbi1zZWxlY3QtcG9wb3ZlcnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XCI7IH1cbn07XG5cbmV4cG9ydCB7IFNlbGVjdCBhcyBpb25fc2VsZWN0LCBTZWxlY3RPcHRpb24gYXMgaW9uX3NlbGVjdF9vcHRpb24sIFNlbGVjdFBvcG92ZXIgYXMgaW9uX3NlbGVjdF9wb3BvdmVyIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iLCJjb25zdCB3YXRjaEZvck9wdGlvbnMgPSAoY29udGFpbmVyRWwsIHRhZ05hbWUsIG9uQ2hhbmdlKSA9PiB7XHJcbiAgICBjb25zdCBtdXRhdGlvbiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uTGlzdCA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UoZ2V0U2VsZWN0ZWRPcHRpb24obXV0YXRpb25MaXN0LCB0YWdOYW1lKSk7XHJcbiAgICB9KTtcclxuICAgIG11dGF0aW9uLm9ic2VydmUoY29udGFpbmVyRWwsIHtcclxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbXV0YXRpb247XHJcbn07XHJcbmNvbnN0IGdldFNlbGVjdGVkT3B0aW9uID0gKG11dGF0aW9uTGlzdCwgdGFnTmFtZSkgPT4ge1xyXG4gICAgbGV0IG5ld09wdGlvbjtcclxuICAgIG11dGF0aW9uTGlzdC5mb3JFYWNoKG11dCA9PiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXQuYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXdPcHRpb24gPSBmaW5kQ2hlY2tlZE9wdGlvbihtdXQuYWRkZWROb2Rlc1tpXSwgdGFnTmFtZSkgfHwgbmV3T3B0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ld09wdGlvbjtcclxufTtcclxuY29uc3QgZmluZENoZWNrZWRPcHRpb24gPSAoZWwsIHRhZ05hbWUpID0+IHtcclxuICAgIGlmIChlbC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpb25zID0gKGVsLnRhZ05hbWUgPT09IHRhZ05hbWUudG9VcHBlckNhc2UoKSlcclxuICAgICAgICA/IFtlbF1cclxuICAgICAgICA6IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5maW5kKChvKSA9PiBvLmNoZWNrZWQgPT09IHRydWUpO1xyXG59O1xuXG5leHBvcnQgeyBmaW5kQ2hlY2tlZE9wdGlvbiBhcyBmLCB3YXRjaEZvck9wdGlvbnMgYXMgdyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==