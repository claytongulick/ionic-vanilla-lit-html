(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js ***!
  \***************************************************************************/
/*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_option", function() { return ItemOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_options", function() { return ItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function() { return ItemSliding; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const ItemOption = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the item option.
         */
        this.disabled = false;
        /**
         * If `true`, the option will expand to take up the available width and cover any other options.
         */
        this.expandable = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = (ev) => {
            const el = ev.target.closest('ion-item-option');
            if (el) {
                ev.preventDefault();
            }
        };
    }
    render() {
        const { disabled, expandable, href } = this;
        const TagType = href === undefined ? 'button' : 'a';
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                target: this.target
            };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true, 'item-option-disabled': disabled, 'item-option-expandable': expandable, 'ion-activatable': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "top" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "horizontal-wrapper" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon-only" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "bottom" })), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner,.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper{-ms-flex-flow:row nowrap;flex-flow:row nowrap}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host{font-size:16px}:host(.activated){background:var(--ion-color-primary-shade,#3171e0)}:host(.ion-color.activated){background:var(--ion-color-shade)}"; }
};

const ItemOptions = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
         *
         */
        this.side = 'end';
        this.ionSwipe = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSwipe", 7);
    }
    /** @internal */
    async fireSwipeEvent() {
        this.ionSwipe.emit({
            side: this.side
        });
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const isEnd = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                // Used internally for styling
                [`item-options-${mode}`]: true,
                'item-options-start': !isEnd,
                'item-options-end': isEnd
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"; }
};

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
let openSlidingItem;
const ItemSliding = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0 /* None */;
        this.optsDirty = true;
        this.state = 2 /* Disabled */;
        /**
         * If `true`, the user cannot interact with the sliding item.
         */
        this.disabled = false;
        this.ionDrag = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDrag", 7);
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async connectedCallback() {
        this.item = this.el.querySelector('ion-item');
        await this.updateOptions();
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: this.el,
            gestureName: 'item-swipe',
            gesturePriority: 100,
            threshold: 5,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.item = null;
        this.leftOptions = this.rightOptions = undefined;
        if (openSlidingItem === this.el) {
            openSlidingItem = undefined;
        }
    }
    /**
     * Get the amount the item is open in pixels.
     */
    getOpenAmount() {
        return Promise.resolve(this.openAmount);
    }
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */
    getSlidingRatio() {
        return Promise.resolve(this.getSlidingRatioSync());
    }
    /**
     * Open the sliding item.
     *
     * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
     */
    async open(side) {
        if (this.item === null) {
            return;
        }
        const optionsToOpen = this.getOptions(side);
        if (!optionsToOpen) {
            return;
        }
        /**
         * If side is not set, we need to infer the side
         * so we know which direction to move the options
         */
        if (side === undefined) {
            side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
        }
        // In RTL we want to switch the sides
        side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(side) ? 'end' : 'start';
        const isStartOpen = this.openAmount < 0;
        const isEndOpen = this.openAmount > 0;
        /**
         * If a side is open and a user tries to
         * re-open the same side, we should not do anything
         */
        if (isStartOpen && optionsToOpen === this.leftOptions) {
            return;
        }
        if (isEndOpen && optionsToOpen === this.rightOptions) {
            return;
        }
        this.closeOpened();
        this.state = 4 /* Enabled */;
        requestAnimationFrame(() => {
            this.calculateOptsWidth();
            const width = (side === 'end') ? this.optsWidthRightSide : -this.optsWidthLeftSide;
            openSlidingItem = this.el;
            this.setOpenAmount(width, false);
            this.state = (side === 'end') ? 8 /* End */ : 16 /* Start */;
        });
    }
    /**
     * Close the sliding item. Items can also be closed from the [List](../../list/List).
     */
    async close() {
        this.setOpenAmount(0, true);
    }
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
     */
    async closeOpened() {
        if (openSlidingItem !== undefined) {
            openSlidingItem.close();
            openSlidingItem = undefined;
            return true;
        }
        return false;
    }
    /**
     * Given an optional side, return the ion-item-options element.
     *
     * @param side This side of the options to get. If a side is not provided it will
     * return the first one available.
     */
    getOptions(side) {
        if (side === undefined) {
            return this.leftOptions || this.rightOptions;
        }
        else if (side === 'start') {
            return this.leftOptions;
        }
        else {
            return this.rightOptions;
        }
    }
    async updateOptions() {
        const options = this.el.querySelectorAll('ion-item-options');
        let sides = 0;
        // Reset left and right options in case they were removed
        this.leftOptions = this.rightOptions = undefined;
        for (let i = 0; i < options.length; i++) {
            const option = await options.item(i).componentOnReady();
            const side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(option.side) ? 'end' : 'start';
            if (side === 'start') {
                this.leftOptions = option;
                sides |= 1 /* Start */;
            }
            else {
                this.rightOptions = option;
                sides |= 2 /* End */;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart() {
        const selected = openSlidingItem;
        if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
        }
        return !!(this.rightOptions || this.leftOptions);
    }
    onStart() {
        openSlidingItem = this.el;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4 /* Enabled */;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = 'none';
        }
    }
    onMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2 /* End */:
                openAmount = Math.max(0, openAmount);
                break;
            case 1 /* Start */:
                openAmount = Math.min(0, openAmount);
                break;
            case 3 /* Both */: break;
            case 0 /* None */: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        const state = this.state;
        this.setOpenAmount(restingPoint, true);
        if ((state & 32 /* SwipeEnd */) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if ((state & 64 /* SwipeStart */) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.rightOptions.style.display = 'flex';
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
            this.rightOptions.style.display = '';
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.leftOptions.style.display = 'flex';
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
            this.leftOptions.style.display = '';
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 /* End */ | 32 /* SwipeEnd */
                : 8 /* End */;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 /* Start */ | 64 /* SwipeStart */
                : 16 /* Start */;
        }
        else {
            this.tmr = setTimeout(() => {
                this.state = 2 /* Disabled */;
                this.tmr = undefined;
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
        });
    }
    getSlidingRatioSync() {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                'item-sliding-active-slide': (this.state !== 2 /* Disabled */),
                'item-sliding-active-options-end': (this.state & 8 /* End */) !== 0,
                'item-sliding-active-options-start': (this.state & 16 /* Start */) !== 0,
                'item-sliding-active-swipe-end': (this.state & 32 /* SwipeEnd */) !== 0,
                'item-sliding-active-swipe-start': (this.state & 64 /* SwipeStart */) !== 0
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"; }
};
const swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isResetDirection | isMovingFast | isOnResetZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pdGVtLW9wdGlvbl8zLWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ3lCO0FBQ087O0FBRTlEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0I7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsNkRBQTZELEVBQUUsNERBQWtCLGdCQUFnQixnSEFBZ0gsR0FBRyxFQUFFLDJEQUFDLDBCQUEwQixVQUFVLDZDQUE2QyxHQUFHLDJEQUFDLFVBQVUsd0JBQXdCLEVBQUUsMkRBQUMsVUFBVSxjQUFjLEdBQUcsMkRBQUMsU0FBUyw4QkFBOEIsRUFBRSwyREFBQyxVQUFVLGdCQUFnQixHQUFHLDJEQUFDLFVBQVUsb0JBQW9CLEdBQUcsMkRBQUMsZ0JBQWdCLDJEQUFDLFVBQVUsY0FBYyxJQUFJLDJEQUFDLFVBQVUsaUJBQWlCLHFCQUFxQiwyREFBQztBQUMva0I7QUFDQSxjQUFjLFFBQVEsMkRBQVUsT0FBTztBQUN2Qyx3QkFBd0IsZUFBZSw4Q0FBOEMsK0NBQStDLDZCQUE2QixtQkFBbUIsMkNBQTJDLDRDQUE0QyxzREFBc0QsNkZBQTZGLDRDQUE0QyxvQkFBb0IsNERBQTRELDREQUE0RCwrQ0FBK0Msb0RBQW9ELDZGQUE2RiwrQ0FBK0MsbUJBQW1CLDZEQUE2RCw2REFBNkQsa0JBQWtCLGlDQUFpQyxnQ0FBZ0MsZUFBZSxvQkFBb0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHdCQUF3QixzQkFBc0IsdUJBQXVCLG1CQUFtQixvQkFBb0IsY0FBYyxrQkFBa0IsbUJBQW1CLGNBQWMsaUJBQWlCLHFCQUFxQixrQkFBa0IsV0FBVyxZQUFZLFNBQVMsYUFBYSx1QkFBdUIsZUFBZSx3QkFBd0IscUJBQXFCLGdCQUFnQiw4QkFBOEIsc0JBQXNCLDZGQUE2RixlQUFlLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQix5QkFBeUIseUJBQXlCLGNBQWMsNEJBQTRCLHdCQUF3QixZQUFZLGtDQUFrQyxvQkFBb0IsYUFBYSxvQkFBb0IsY0FBYyxzQkFBc0IsbUJBQW1CLHFCQUFxQix1QkFBdUIsV0FBVyxvQkFBb0IseUJBQXlCLHFCQUFxQixhQUFhLG9CQUFvQixjQUFjLHdCQUF3QixjQUFjLGlCQUFpQixhQUFhLGdCQUFnQiw2RkFBNkYsd0JBQXdCLGtCQUFrQixtQkFBbUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHNCQUFzQixnQkFBZ0IsZUFBZSxhQUFhLGdCQUFnQiw2RkFBNkYsc0JBQXNCLGtCQUFrQixtQkFBbUIseUJBQXlCLHdCQUF3QixxQkFBcUIscUJBQXFCLDRCQUE0QixlQUFlLGdCQUFnQixjQUFjLGlCQUFpQixpQkFBaUIsa0JBQWtCLGFBQWEsZ0JBQWdCLGVBQWUsZ0JBQWdCLDZGQUE2Riw0QkFBNEIsa0JBQWtCLG1CQUFtQiwwQkFBMEIseUJBQXlCLHdCQUF3Qix3QkFBd0IsK0JBQStCLG9CQUFvQixjQUFjLDhCQUE4QixzQkFBc0IsaUNBQWlDLHlCQUF5QiwrREFBK0QsdURBQXVELDZCQUE2QixvQkFBb0IsNENBQTRDLGVBQWUsV0FBVyxvQkFBb0IsTUFBTSxlQUFlLGtCQUFrQixrREFBa0QsNEJBQTRCLGtDQUFrQyxFQUFFO0FBQ2gxSDs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0Isc0JBQXNCLDhEQUFTO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekI7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLHdCQUF3QiwwQkFBMEIsTUFBTSxRQUFRLGtCQUFrQix5QkFBeUIsYUFBYSxrQkFBa0IsWUFBWSxlQUFlLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixVQUFVLHFFQUFxRSxvQkFBb0IsMkJBQTJCLG1IQUFtSCxXQUFXLE9BQU8sa0JBQWtCLHlCQUF5QixvQkFBb0IsV0FBVyxPQUFPLG9CQUFvQiwyQkFBMkIsMkVBQTJFLGtCQUFrQix5QkFBeUIsZ0RBQWdELHdDQUF3Qyw2RkFBNkYsZ0RBQWdELG9CQUFvQiw4Q0FBOEMsOENBQThDLDZDQUE2Qyx5Q0FBeUMsNkZBQTZGLDZDQUE2QyxvQkFBb0IsK0NBQStDLCtDQUErQyw2T0FBNk8sV0FBVyxtQkFBbUIsNENBQTRDLG9CQUFvQixhQUFhLGtCQUFrQixzTEFBc0wsV0FBVyxtQkFBbUIsa0JBQWtCLHNCQUFzQiwwQkFBMEIsMkdBQTJHLG1DQUFtQywwQkFBMEIsdUNBQXVDLHNCQUFzQixnR0FBZ0csMEJBQTBCLEVBQUU7QUFDMzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBKQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0EseUJBQXlCLDhEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBLE1BQU07QUFDTix3QkFBd0IsMEJBQTBCLGNBQWMsa0JBQWtCLFdBQVcsZ0JBQWdCLHdDQUF3Qyx5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsaUNBQWlDLGtCQUFrQixxRUFBcUUsNkRBQTZELHFEQUFxRCx1R0FBdUcsVUFBVSxVQUFVLG9CQUFvQixzQkFBc0IseUVBQXlFLGtCQUFrQixpQkFBaUIsUUFBUSxnQ0FBZ0Msd0JBQXdCLHlDQUF5QyxpQ0FBaUMscUxBQXFMLGtCQUFrQixTQUFTLDZFQUE2RSxtQkFBbUIsa0JBQWtCLFNBQVMsZ0NBQWdDLHdCQUF3QiwwQ0FBMEMsa0NBQWtDLDZMQUE2TCxpQkFBaUIsUUFBUSxFQUFFO0FBQ3RoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJHOzs7Ozs7Ozs7Ozs7O0FDN1ozRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjU5XFxjaHVua3NcXDU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50LCBjIGFzIGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0VuZFNpZGUgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcblxuY29uc3QgSXRlbU9wdGlvbiA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBpdGVtIG9wdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG9wdGlvbiB3aWxsIGV4cGFuZCB0byB0YWtlIHVwIHRoZSBhdmFpbGFibGUgd2lkdGggYW5kIGNvdmVyIGFueSBvdGhlciBvcHRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5leHBhbmRhYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMub25DbGljayA9IChldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBldi50YXJnZXQuY2xvc2VzdCgnaW9uLWl0ZW0tb3B0aW9uJyk7XG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIGV4cGFuZGFibGUsIGhyZWYgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IFRhZ1R5cGUgPSBocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGF0dHJzID0gKFRhZ1R5cGUgPT09ICdidXR0b24nKVxuICAgICAgICAgICAgPyB7IHR5cGU6IHRoaXMudHlwZSB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCB7IFttb2RlXTogdHJ1ZSwgJ2l0ZW0tb3B0aW9uLWRpc2FibGVkJzogZGlzYWJsZWQsICdpdGVtLW9wdGlvbi1leHBhbmRhYmxlJzogZXhwYW5kYWJsZSwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUgfSkgfSwgaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjbGFzczogXCJidXR0b24tbmF0aXZlXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJidXR0b24taW5uZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwidG9wXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJob3Jpem9udGFsLXdyYXBwZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic3RhcnRcIiB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImljb24tb25seVwiIH0pLCBoKFwic2xvdFwiLCBudWxsKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImVuZFwiIH0pKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImJvdHRvbVwiIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCl9Omhvc3QoLmluLWxpc3QuaXRlbS1vcHRpb25zLWVuZDpsYXN0LWNoaWxkKXtwYWRkaW5nLXJpZ2h0OmNhbGMoLjdlbSArIHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpKX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLmluLWxpc3QuaXRlbS1vcHRpb25zLWVuZDpsYXN0LWNoaWxkKXtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1lbmQ6Y2FsYyguN2VtICsgdmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkpO3BhZGRpbmctaW5saW5lLWVuZDpjYWxjKC43ZW0gKyB2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSl9fTpob3N0KC5pbi1saXN0Lml0ZW0tb3B0aW9ucy1zdGFydDpmaXJzdC1jaGlsZCl7cGFkZGluZy1sZWZ0OmNhbGMoLjdlbSArIHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkpfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguaW4tbGlzdC5pdGVtLW9wdGlvbnMtc3RhcnQ6Zmlyc3QtY2hpbGQpe3BhZGRpbmctbGVmdDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6Y2FsYyguN2VtICsgdmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6Y2FsYyguN2VtICsgdmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSl9fTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LmJ1dHRvbi1uYXRpdmV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7cGFkZGluZy1sZWZ0Oi43ZW07cGFkZGluZy1yaWdodDouN2VtO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5idXR0b24tbmF0aXZle3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDouN2VtO3BhZGRpbmctaW5saW5lLXN0YXJ0Oi43ZW07LXdlYmtpdC1wYWRkaW5nLWVuZDouN2VtO3BhZGRpbmctaW5saW5lLWVuZDouN2VtfX0uYnV0dG9uLWlubmVyey1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtoZWlnaHQ6MTAwJX0uYnV0dG9uLWlubmVyLC5ob3Jpem9udGFsLXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlfS5ob3Jpem9udGFsLXdyYXBwZXJ7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwfTo6c2xvdHRlZCgqKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6NXB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChbc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6NXB4O21hcmdpbi1pbmxpbmUtZW5kOjVweH19OjpzbG90dGVkKFtzbG90PWVuZF0pe21hcmdpbi1sZWZ0OjVweDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjVweDttYXJnaW4taW5saW5lLXN0YXJ0OjVweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowfX06OnNsb3R0ZWQoW3Nsb3Q9aWNvbi1vbmx5XSl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDoxMHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7bWluLXdpZHRoOi45ZW07Zm9udC1zaXplOjEuOGVtfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoW3Nsb3Q9aWNvbi1vbmx5XSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjEwcHg7bWFyZ2luLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxMHB4O21hcmdpbi1pbmxpbmUtZW5kOjEwcHh9fTpob3N0KC5pdGVtLW9wdGlvbi1leHBhbmRhYmxlKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjA7dHJhbnNpdGlvbi1kdXJhdGlvbjowOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpub25lO3RyYW5zaXRpb24tcHJvcGVydHk6bm9uZTstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNjUsLjA1LC4zNiwxKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjY1LC4wNSwuMzYsMSl9Omhvc3QoLml0ZW0tb3B0aW9uLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pdGVtLW9wdGlvbi1kaXNhYmxlZCkgLmJ1dHRvbi1uYXRpdmV7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2ZvbnQtc2l6ZToxNnB4fTpob3N0KC5hY3RpdmF0ZWQpe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsIzMxNzFlMCl9Omhvc3QoLmlvbi1jb2xvci5hY3RpdmF0ZWQpe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKX1cIjsgfVxufTtcblxuY29uc3QgSXRlbU9wdGlvbnMgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNpZGUgdGhlIG9wdGlvbiBidXR0b24gc2hvdWxkIGJlIG9uLiBQb3NzaWJsZSB2YWx1ZXM6IGBcInN0YXJ0XCJgIGFuZCBgXCJlbmRcImAuIElmIHlvdSBoYXZlIG11bHRpcGxlIGBpb24taXRlbS1vcHRpb25zYCwgYSBzaWRlIG11c3QgYmUgcHJvdmlkZWQgZm9yIGVhY2guXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpZGUgPSAnZW5kJztcbiAgICAgICAgdGhpcy5pb25Td2lwZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3dpcGVcIiwgNyk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhc3luYyBmaXJlU3dpcGVFdmVudCgpIHtcbiAgICAgICAgdGhpcy5pb25Td2lwZS5lbWl0KHtcbiAgICAgICAgICAgIHNpZGU6IHRoaXMuc2lkZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgaXNFbmQgPSBpc0VuZFNpZGUodGhpcy5zaWRlKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgW2BpdGVtLW9wdGlvbnMtJHttb2RlfWBdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpdGVtLW9wdGlvbnMtc3RhcnQnOiAhaXNFbmQsXG4gICAgICAgICAgICAgICAgJ2l0ZW0tb3B0aW9ucy1lbmQnOiBpc0VuZFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJpb24taXRlbS1vcHRpb25ze3RvcDowO3JpZ2h0OjA7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTRweDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBpb24taXRlbS1vcHRpb25zLFtkaXI9cnRsXSBpb24taXRlbS1vcHRpb25zey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1pdGVtLW9wdGlvbnM6bm90KC5pdGVtLW9wdGlvbnMtZW5kKSxbZGlyPXJ0bF0gaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uaXRlbS1vcHRpb25zLXN0YXJ0e3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pdGVtLW9wdGlvbnMtc3RhcnQsW2Rpcj1ydGxdIC5pdGVtLW9wdGlvbnMtc3RhcnR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5pdGVtLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uOmZpcnN0LWNoaWxke3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Lml0ZW0tb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb246Zmlyc3QtY2hpbGR7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCl9fS5pdGVtLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbjpsYXN0LWNoaWxke3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5pdGVtLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbjpsYXN0LWNoaWxke3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpLFtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIGlvbi1pdGVtLW9wdGlvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7dmlzaWJpbGl0eTpoaWRkZW59Lml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLWVuZCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLXN0YXJ0KSwuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9ucy1zdGFydHt3aWR0aDoxMDAlO3Zpc2liaWxpdHk6dmlzaWJsZX0uaXRlbS1vcHRpb25zLWlvc3tib3JkZXItYm90dG9tLXdpZHRoOjA7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwjYzhjN2NjKSkpfS5pdGVtLW9wdGlvbnMtaW9zLml0ZW0tb3B0aW9ucy1lbmR7Ym9yZGVyLWJvdHRvbS13aWR0aDouNTVweH0ubGlzdC1pb3MtbGluZXMtbm9uZSAuaXRlbS1vcHRpb25zLWlvc3tib3JkZXItYm90dG9tLXdpZHRoOjB9Lmxpc3QtaW9zLWxpbmVzLWZ1bGwgLml0ZW0tb3B0aW9ucy1pb3MsLmxpc3QtaW9zLWxpbmVzLWluc2V0IC5pdGVtLW9wdGlvbnMtaW9zLml0ZW0tb3B0aW9ucy1lbmR7Ym9yZGVyLWJvdHRvbS13aWR0aDouNTVweH1cIjsgfVxufTtcblxuY29uc3QgU1dJUEVfTUFSR0lOID0gMzA7XG5jb25zdCBFTEFTVElDX0ZBQ1RPUiA9IDAuNTU7XG5sZXQgb3BlblNsaWRpbmdJdGVtO1xuY29uc3QgSXRlbVNsaWRpbmcgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLml0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLm9wZW5BbW91bnQgPSAwO1xuICAgICAgICB0aGlzLmluaXRpYWxPcGVuQW1vdW50ID0gMDtcbiAgICAgICAgdGhpcy5vcHRzV2lkdGhSaWdodFNpZGUgPSAwO1xuICAgICAgICB0aGlzLm9wdHNXaWR0aExlZnRTaWRlID0gMDtcbiAgICAgICAgdGhpcy5zaWRlcyA9IDAgLyogTm9uZSAqLztcbiAgICAgICAgdGhpcy5vcHRzRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBEaXNhYmxlZCAqLztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNsaWRpbmcgaXRlbS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pb25EcmFnID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25EcmFnXCIsIDcpO1xuICAgIH1cbiAgICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24taXRlbScpO1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgIGVsOiB0aGlzLmVsLFxuICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdpdGVtLXN3aXBlJyxcbiAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgICAgdGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgY2FuU3RhcnQ6ICgpID0+IHRoaXMuY2FuU3RhcnQoKSxcbiAgICAgICAgICAgIG9uU3RhcnQ6ICgpID0+IHRoaXMub25TdGFydCgpLFxuICAgICAgICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICAgICAgICBvbkVuZDogZXYgPT4gdGhpcy5vbkVuZChldiksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRPcHRpb25zID0gdGhpcy5yaWdodE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChvcGVuU2xpZGluZ0l0ZW0gPT09IHRoaXMuZWwpIHtcbiAgICAgICAgICAgIG9wZW5TbGlkaW5nSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFtb3VudCB0aGUgaXRlbSBpcyBvcGVuIGluIHBpeGVscy5cbiAgICAgKi9cbiAgICBnZXRPcGVuQW1vdW50KCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMub3BlbkFtb3VudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcmF0aW8gb2YgdGhlIG9wZW4gYW1vdW50IG9mIHRoZSBpdGVtIGNvbXBhcmVkIHRvIHRoZSB3aWR0aCBvZiB0aGUgb3B0aW9ucy5cbiAgICAgKiBJZiB0aGUgbnVtYmVyIHJldHVybmVkIGlzIHBvc2l0aXZlLCB0aGVuIHRoZSBvcHRpb25zIG9uIHRoZSByaWdodCBzaWRlIGFyZSBvcGVuLlxuICAgICAqIElmIHRoZSBudW1iZXIgcmV0dXJuZWQgaXMgbmVnYXRpdmUsIHRoZW4gdGhlIG9wdGlvbnMgb24gdGhlIGxlZnQgc2lkZSBhcmUgb3Blbi5cbiAgICAgKiBJZiB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgdGhlIG51bWJlciBpcyBncmVhdGVyIHRoYW4gMSwgdGhlIGl0ZW0gaXMgb3BlbiBtb3JlIHRoYW5cbiAgICAgKiB0aGUgd2lkdGggb2YgdGhlIG9wdGlvbnMuXG4gICAgICovXG4gICAgZ2V0U2xpZGluZ1JhdGlvKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0U2xpZGluZ1JhdGlvU3luYygpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgc2xpZGluZyBpdGVtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNpZGUgVGhlIHNpZGUgb2YgdGhlIG9wdGlvbnMgdG8gb3Blbi4gSWYgYSBzaWRlIGlzIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBvcGVuIHRoZSBmaXJzdCBzZXQgb2Ygb3B0aW9ucyBpdCBmaW5kcyB3aXRoaW4gdGhlIGl0ZW0uXG4gICAgICovXG4gICAgYXN5bmMgb3BlbihzaWRlKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcHRpb25zVG9PcGVuID0gdGhpcy5nZXRPcHRpb25zKHNpZGUpO1xuICAgICAgICBpZiAoIW9wdGlvbnNUb09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2lkZSBpcyBub3Qgc2V0LCB3ZSBuZWVkIHRvIGluZmVyIHRoZSBzaWRlXG4gICAgICAgICAqIHNvIHdlIGtub3cgd2hpY2ggZGlyZWN0aW9uIHRvIG1vdmUgdGhlIG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGlmIChzaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNpZGUgPSAob3B0aW9uc1RvT3BlbiA9PT0gdGhpcy5sZWZ0T3B0aW9ucykgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW4gUlRMIHdlIHdhbnQgdG8gc3dpdGNoIHRoZSBzaWRlc1xuICAgICAgICBzaWRlID0gaXNFbmRTaWRlKHNpZGUpID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgICBjb25zdCBpc1N0YXJ0T3BlbiA9IHRoaXMub3BlbkFtb3VudCA8IDA7XG4gICAgICAgIGNvbnN0IGlzRW5kT3BlbiA9IHRoaXMub3BlbkFtb3VudCA+IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIHNpZGUgaXMgb3BlbiBhbmQgYSB1c2VyIHRyaWVzIHRvXG4gICAgICAgICAqIHJlLW9wZW4gdGhlIHNhbWUgc2lkZSwgd2Ugc2hvdWxkIG5vdCBkbyBhbnl0aGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGlzU3RhcnRPcGVuICYmIG9wdGlvbnNUb09wZW4gPT09IHRoaXMubGVmdE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNFbmRPcGVuICYmIG9wdGlvbnNUb09wZW4gPT09IHRoaXMucmlnaHRPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZU9wZW5lZCgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gNCAvKiBFbmFibGVkICovO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVPcHRzV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gKHNpZGUgPT09ICdlbmQnKSA/IHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlIDogLXRoaXMub3B0c1dpZHRoTGVmdFNpZGU7XG4gICAgICAgICAgICBvcGVuU2xpZGluZ0l0ZW0gPSB0aGlzLmVsO1xuICAgICAgICAgICAgdGhpcy5zZXRPcGVuQW1vdW50KHdpZHRoLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gKHNpZGUgPT09ICdlbmQnKSA/IDggLyogRW5kICovIDogMTYgLyogU3RhcnQgKi87XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgc2xpZGluZyBpdGVtLiBJdGVtcyBjYW4gYWxzbyBiZSBjbG9zZWQgZnJvbSB0aGUgW0xpc3RdKC4uLy4uL2xpc3QvTGlzdCkuXG4gICAgICovXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0T3BlbkFtb3VudCgwLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgYWxsIG9mIHRoZSBzbGlkaW5nIGl0ZW1zIGluIHRoZSBsaXN0LiBJdGVtcyBjYW4gYWxzbyBiZSBjbG9zZWQgZnJvbSB0aGUgW0xpc3RdKC4uLy4uL2xpc3QvTGlzdCkuXG4gICAgICovXG4gICAgYXN5bmMgY2xvc2VPcGVuZWQoKSB7XG4gICAgICAgIGlmIChvcGVuU2xpZGluZ0l0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3BlblNsaWRpbmdJdGVtLmNsb3NlKCk7XG4gICAgICAgICAgICBvcGVuU2xpZGluZ0l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIG9wdGlvbmFsIHNpZGUsIHJldHVybiB0aGUgaW9uLWl0ZW0tb3B0aW9ucyBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNpZGUgVGhpcyBzaWRlIG9mIHRoZSBvcHRpb25zIHRvIGdldC4gSWYgYSBzaWRlIGlzIG5vdCBwcm92aWRlZCBpdCB3aWxsXG4gICAgICogcmV0dXJuIHRoZSBmaXJzdCBvbmUgYXZhaWxhYmxlLlxuICAgICAqL1xuICAgIGdldE9wdGlvbnMoc2lkZSkge1xuICAgICAgICBpZiAoc2lkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0T3B0aW9ucyB8fCB0aGlzLnJpZ2h0T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaWRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJpZ2h0T3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyB1cGRhdGVPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24taXRlbS1vcHRpb25zJyk7XG4gICAgICAgIGxldCBzaWRlcyA9IDA7XG4gICAgICAgIC8vIFJlc2V0IGxlZnQgYW5kIHJpZ2h0IG9wdGlvbnMgaW4gY2FzZSB0aGV5IHdlcmUgcmVtb3ZlZFxuICAgICAgICB0aGlzLmxlZnRPcHRpb25zID0gdGhpcy5yaWdodE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gYXdhaXQgb3B0aW9ucy5pdGVtKGkpLmNvbXBvbmVudE9uUmVhZHkoKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZGUgPSBpc0VuZFNpZGUob3B0aW9uLnNpZGUpID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgICAgICAgaWYgKHNpZGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRPcHRpb25zID0gb3B0aW9uO1xuICAgICAgICAgICAgICAgIHNpZGVzIHw9IDEgLyogU3RhcnQgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0T3B0aW9ucyA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgICBzaWRlcyB8PSAyIC8qIEVuZCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdHNEaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2lkZXMgPSBzaWRlcztcbiAgICB9XG4gICAgY2FuU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gb3BlblNsaWRpbmdJdGVtO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgIT09IHRoaXMuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VPcGVuZWQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISEodGhpcy5yaWdodE9wdGlvbnMgfHwgdGhpcy5sZWZ0T3B0aW9ucyk7XG4gICAgfVxuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIG9wZW5TbGlkaW5nSXRlbSA9IHRoaXMuZWw7XG4gICAgICAgIGlmICh0aGlzLnRtciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50bXIpO1xuICAgICAgICAgICAgdGhpcy50bXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3BlbkFtb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vcHRzRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDQgLyogRW5hYmxlZCAqLztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxPcGVuQW1vdW50ID0gdGhpcy5vcGVuQW1vdW50O1xuICAgICAgICBpZiAodGhpcy5pdGVtKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW0uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk1vdmUoZ2VzdHVyZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlT3B0c1dpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wZW5BbW91bnQgPSB0aGlzLmluaXRpYWxPcGVuQW1vdW50IC0gZ2VzdHVyZS5kZWx0YVg7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zaWRlcykge1xuICAgICAgICAgICAgY2FzZSAyIC8qIEVuZCAqLzpcbiAgICAgICAgICAgICAgICBvcGVuQW1vdW50ID0gTWF0aC5tYXgoMCwgb3BlbkFtb3VudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEgLyogU3RhcnQgKi86XG4gICAgICAgICAgICAgICAgb3BlbkFtb3VudCA9IE1hdGgubWluKDAsIG9wZW5BbW91bnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzIC8qIEJvdGggKi86IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAwIC8qIE5vbmUgKi86IHJldHVybjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdpbnZhbGlkIEl0ZW1TaWRlRmxhZ3MgdmFsdWUnLCB0aGlzLnNpZGVzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3B0c1dpZHRoO1xuICAgICAgICBpZiAob3BlbkFtb3VudCA+IHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlKSB7XG4gICAgICAgICAgICBvcHRzV2lkdGggPSB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZTtcbiAgICAgICAgICAgIG9wZW5BbW91bnQgPSBvcHRzV2lkdGggKyAob3BlbkFtb3VudCAtIG9wdHNXaWR0aCkgKiBFTEFTVElDX0ZBQ1RPUjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcGVuQW1vdW50IDwgLXRoaXMub3B0c1dpZHRoTGVmdFNpZGUpIHtcbiAgICAgICAgICAgIG9wdHNXaWR0aCA9IC10aGlzLm9wdHNXaWR0aExlZnRTaWRlO1xuICAgICAgICAgICAgb3BlbkFtb3VudCA9IG9wdHNXaWR0aCArIChvcGVuQW1vdW50IC0gb3B0c1dpZHRoKSAqIEVMQVNUSUNfRkFDVE9SO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T3BlbkFtb3VudChvcGVuQW1vdW50LCBmYWxzZSk7XG4gICAgfVxuICAgIG9uRW5kKGdlc3R1cmUpIHtcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBnZXN0dXJlLnZlbG9jaXR5WDtcbiAgICAgICAgbGV0IHJlc3RpbmdQb2ludCA9ICh0aGlzLm9wZW5BbW91bnQgPiAwKVxuICAgICAgICAgICAgPyB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZVxuICAgICAgICAgICAgOiAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRyYWcgZGlkbid0IGNsZWFyIHRoZSBidXR0b25zIG1pZC1wb2ludFxuICAgICAgICAvLyBhbmQgd2UgYXJlbid0IG1vdmluZyBmYXN0IGVub3VnaCB0byBzd2lwZSBvcGVuXG4gICAgICAgIGNvbnN0IGlzUmVzZXREaXJlY3Rpb24gPSAodGhpcy5vcGVuQW1vdW50ID4gMCkgPT09ICEodmVsb2NpdHkgPCAwKTtcbiAgICAgICAgY29uc3QgaXNNb3ZpbmdGYXN0ID0gTWF0aC5hYnModmVsb2NpdHkpID4gMC4zO1xuICAgICAgICBjb25zdCBpc09uQ2xvc2Vab25lID0gTWF0aC5hYnModGhpcy5vcGVuQW1vdW50KSA8IE1hdGguYWJzKHJlc3RpbmdQb2ludCAvIDIpO1xuICAgICAgICBpZiAoc3dpcGVTaG91bGRSZXNldChpc1Jlc2V0RGlyZWN0aW9uLCBpc01vdmluZ0Zhc3QsIGlzT25DbG9zZVpvbmUpKSB7XG4gICAgICAgICAgICByZXN0aW5nUG9pbnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRPcGVuQW1vdW50KHJlc3RpbmdQb2ludCwgdHJ1ZSk7XG4gICAgICAgIGlmICgoc3RhdGUgJiAzMiAvKiBTd2lwZUVuZCAqLykgIT09IDAgJiYgdGhpcy5yaWdodE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRPcHRpb25zLmZpcmVTd2lwZUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHN0YXRlICYgNjQgLyogU3dpcGVTdGFydCAqLykgIT09IDAgJiYgdGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5sZWZ0T3B0aW9ucy5maXJlU3dpcGVFdmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhbGN1bGF0ZU9wdHNXaWR0aCgpIHtcbiAgICAgICAgdGhpcy5vcHRzV2lkdGhSaWdodFNpZGUgPSAwO1xuICAgICAgICBpZiAodGhpcy5yaWdodE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA9IHRoaXMucmlnaHRPcHRpb25zLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5yaWdodE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0c1dpZHRoTGVmdFNpZGUgPSAwO1xuICAgICAgICBpZiAodGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5sZWZ0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSA9IHRoaXMubGVmdE9wdGlvbnMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmxlZnRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdHNEaXJ0eSA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRPcGVuQW1vdW50KG9wZW5BbW91bnQsIGlzRmluYWwpIHtcbiAgICAgICAgaWYgKHRoaXMudG1yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRtcik7XG4gICAgICAgICAgICB0aGlzLnRtciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pdGVtLnN0eWxlO1xuICAgICAgICB0aGlzLm9wZW5BbW91bnQgPSBvcGVuQW1vdW50O1xuICAgICAgICBpZiAoaXNGaW5hbCkge1xuICAgICAgICAgICAgc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcGVuQW1vdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IChvcGVuQW1vdW50ID49ICh0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSArIFNXSVBFX01BUkdJTikpXG4gICAgICAgICAgICAgICAgPyA4IC8qIEVuZCAqLyB8IDMyIC8qIFN3aXBlRW5kICovXG4gICAgICAgICAgICAgICAgOiA4IC8qIEVuZCAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcGVuQW1vdW50IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IChvcGVuQW1vdW50IDw9ICgtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSAtIFNXSVBFX01BUkdJTikpXG4gICAgICAgICAgICAgICAgPyAxNiAvKiBTdGFydCAqLyB8IDY0IC8qIFN3aXBlU3RhcnQgKi9cbiAgICAgICAgICAgICAgICA6IDE2IC8qIFN0YXJ0ICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50bXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBEaXNhYmxlZCAqLztcbiAgICAgICAgICAgICAgICB0aGlzLnRtciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICBvcGVuU2xpZGluZ0l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHstb3BlbkFtb3VudH1weCwwLDApYDtcbiAgICAgICAgdGhpcy5pb25EcmFnLmVtaXQoe1xuICAgICAgICAgICAgYW1vdW50OiBvcGVuQW1vdW50LFxuICAgICAgICAgICAgcmF0aW86IHRoaXMuZ2V0U2xpZGluZ1JhdGlvU3luYygpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRTbGlkaW5nUmF0aW9TeW5jKCkge1xuICAgICAgICBpZiAodGhpcy5vcGVuQW1vdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkFtb3VudCAvIHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3BlbkFtb3VudCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW5BbW91bnQgLyB0aGlzLm9wdHNXaWR0aExlZnRTaWRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUnOiAodGhpcy5zdGF0ZSAhPT0gMiAvKiBEaXNhYmxlZCAqLyksXG4gICAgICAgICAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1lbmQnOiAodGhpcy5zdGF0ZSAmIDggLyogRW5kICovKSAhPT0gMCxcbiAgICAgICAgICAgICAgICAnaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLXN0YXJ0JzogKHRoaXMuc3RhdGUgJiAxNiAvKiBTdGFydCAqLykgIT09IDAsXG4gICAgICAgICAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtZW5kJzogKHRoaXMuc3RhdGUgJiAzMiAvKiBTd2lwZUVuZCAqLykgIT09IDAsXG4gICAgICAgICAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtc3RhcnQnOiAodGhpcy5zdGF0ZSAmIDY0IC8qIFN3aXBlU3RhcnQgKi8pICE9PSAwXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcImlvbi1pdGVtLXNsaWRpbmd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbn1pb24taXRlbS1zbGlkaW5nLGlvbi1pdGVtLXNsaWRpbmcgLml0ZW17LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIC5pdGVte3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSksLXdlYmtpdC10cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTtvcGFjaXR5OjE7ei1pbmRleDoyO3BvaW50ZXItZXZlbnRzOm5vbmU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLWVuZCAuaXRlbS1vcHRpb25zLWVuZCAuaXRlbS1vcHRpb24tZXhwYW5kYWJsZXtwYWRkaW5nLWxlZnQ6MTAwJTstbXMtZmxleC1vcmRlcjoxO29yZGVyOjE7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOi42czt0cmFuc2l0aW9uLWR1cmF0aW9uOi42czstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1sZWZ0O3RyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1sZWZ0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGUsW2Rpcj1ydGxdIC5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLWVuZCAuaXRlbS1vcHRpb25zLWVuZCAuaXRlbS1vcHRpb24tZXhwYW5kYWJsZXstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMX0uaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1zdGFydCAuaXRlbS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbi1leHBhbmRhYmxle3BhZGRpbmctcmlnaHQ6MTAwJTstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246LjZzO3RyYW5zaXRpb24tZHVyYXRpb246LjZzOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpwYWRkaW5nLXJpZ2h0O3RyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1yaWdodH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLml0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtc3RhcnQgLml0ZW0tb3B0aW9ucy1zdGFydCAuaXRlbS1vcHRpb24tZXhwYW5kYWJsZSxbZGlyPXJ0bF0gLml0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtc3RhcnQgLml0ZW0tb3B0aW9ucy1zdGFydCAuaXRlbS1vcHRpb24tZXhwYW5kYWJsZXstbXMtZmxleC1vcmRlcjoxO29yZGVyOjF9XCI7IH1cbn07XG5jb25zdCBzd2lwZVNob3VsZFJlc2V0ID0gKGlzUmVzZXREaXJlY3Rpb24sIGlzTW92aW5nRmFzdCwgaXNPblJlc2V0Wm9uZSkgPT4ge1xuICAgIC8vIFRoZSBsb2dpYyByZXF1aXJlZCB0byBrbm93IHdoZW4gdGhlIHNsaWRpbmcgaXRlbSBzaG91bGQgY2xvc2UgKG9wZW5BbW91bnQ9MClcbiAgICAvLyBkZXBlbmRzIG9uIHRocmVlIGJvb2xlYW5zIChpc1Jlc2V0RGlyZWN0aW9uLCBpc01vdmluZ0Zhc3QsIGlzT25SZXNldFpvbmUpXG4gICAgLy8gYW5kIGl0IGVuZGVkIHVwIGJlaW5nIHRvbyBjb21wbGljYXRlZCB0byBiZSB3cml0dGVuIG1hbnVhbGx5IHdpdGhvdXQgZXJyb3JzXG4gICAgLy8gc28gdGhlIHRydXRoIHRhYmxlIGlzIGF0dGFjaGVkIGJlbG93OiAoMD1mYWxzZSwgMT10cnVlKVxuICAgIC8vIGlzUmVzZXREaXJlY3Rpb24gfCBpc01vdmluZ0Zhc3QgfCBpc09uUmVzZXRab25lIHx8IHNob3VsZENsb3NlXG4gICAgLy8gICAgICAgICAwICAgICAgICB8ICAgICAgIDAgICAgICB8ICAgICAgIDAgICAgICAgfHwgICAgMFxuICAgIC8vICAgICAgICAgMCAgICAgICAgfCAgICAgICAwICAgICAgfCAgICAgICAxICAgICAgIHx8ICAgIDFcbiAgICAvLyAgICAgICAgIDAgICAgICAgIHwgICAgICAgMSAgICAgIHwgICAgICAgMCAgICAgICB8fCAgICAwXG4gICAgLy8gICAgICAgICAwICAgICAgICB8ICAgICAgIDEgICAgICB8ICAgICAgIDEgICAgICAgfHwgICAgMFxuICAgIC8vICAgICAgICAgMSAgICAgICAgfCAgICAgICAwICAgICAgfCAgICAgICAwICAgICAgIHx8ICAgIDBcbiAgICAvLyAgICAgICAgIDEgICAgICAgIHwgICAgICAgMCAgICAgIHwgICAgICAgMSAgICAgICB8fCAgICAxXG4gICAgLy8gICAgICAgICAxICAgICAgICB8ICAgICAgIDEgICAgICB8ICAgICAgIDAgICAgICAgfHwgICAgMVxuICAgIC8vICAgICAgICAgMSAgICAgICAgfCAgICAgICAxICAgICAgfCAgICAgICAxICAgICAgIHx8ICAgIDFcbiAgICAvLyBUaGUgcmVzdWx0aW5nIGV4cHJlc3Npb24gd2FzIGdlbmVyYXRlZCBieSByZXNvbHZpbmcgdGhlIEstbWFwIChLYXJuYXVnaCBtYXApOlxuICAgIHJldHVybiAoIWlzTW92aW5nRmFzdCAmJiBpc09uUmVzZXRab25lKSB8fCAoaXNSZXNldERpcmVjdGlvbiAmJiBpc01vdmluZ0Zhc3QpO1xufTtcblxuZXhwb3J0IHsgSXRlbU9wdGlvbiBhcyBpb25faXRlbV9vcHRpb24sIEl0ZW1PcHRpb25zIGFzIGlvbl9pdGVtX29wdGlvbnMsIEl0ZW1TbGlkaW5nIGFzIGlvbl9pdGVtX3NsaWRpbmcgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=