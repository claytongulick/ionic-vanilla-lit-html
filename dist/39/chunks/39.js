(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js":
/*!************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_refresher, ion_refresher_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher", function() { return Refresher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher_content", function() { return RefresherContent; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3476b023.js */ "../node_modules/@ionic/core/dist/esm/index-3476b023.js");




const Refresher = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        /**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */
        this.state = 1 /* Inactive */;
        /**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state.
         */
        this.pullMin = 60;
        /**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         */
        this.pullMax = this.pullMin + 60;
        /**
         * Time it takes to close the refresher.
         */
        this.closeDuration = '280ms';
        /**
         * Time it takes the refresher to to snap back to the `refreshing` state.
         */
        this.snapbackDuration = '280ms';
        /**
         * How much to multiply the pull speed by. To slow the pull animation down,
         * pass a number less than `1`. To speed up the pull, pass a number greater
         * than `1`. The default value is `1` which is equal to the speed of the cursor.
         * If a negative value is passed in, the factor will be `1` instead.
         *
         * For example: If the value passed is `1.2` and the content is dragged by
         * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
         * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
         * will be `8` pixels, less than the amount the cursor has moved.
         */
        this.pullFactor = 1;
        /**
         * If `true`, the refresher will be hidden.
         */
        this.disabled = false;
        this.ionRefresh = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRefresh", 7);
        this.ionPull = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPull", 7);
        this.ionStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStart", 7);
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async connectedCallback() {
        if (this.el.getAttribute('slot') !== 'fixed') {
            console.error('Make sure you use: <ion-refresher slot="fixed">');
            return;
        }
        const contentEl = this.el.closest('ion-content');
        if (!contentEl) {
            console.error('<ion-refresher> must be used inside an <ion-content>');
            return;
        }
        this.scrollEl = await contentEl.getScrollElement();
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: contentEl,
            gestureName: 'refresher',
            gesturePriority: 10,
            direction: 'y',
            threshold: 20,
            passive: false,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: () => this.onEnd(),
        });
        this.disabledChanged();
    }
    disconnectedCallback() {
        this.scrollEl = undefined;
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    /**
     * Call `complete()` when your async operation has completed.
     * For example, the `refreshing` state is while the app is performing
     * an asynchronous operation, such as receiving more data from an
     * AJAX request. Once the data has been received, you then call this
     * method to signify that the refreshing has completed and to close
     * the refresher. This method also changes the refresher's state from
     * `refreshing` to `completing`.
     */
    async complete() {
        this.close(32 /* Completing */, '120ms');
    }
    /**
     * Changes the refresher's state from `refreshing` to `cancelling`.
     */
    async cancel() {
        this.close(16 /* Cancelling */, '');
    }
    /**
     * A number representing how far down the user has pulled.
     * The number `0` represents the user hasn't pulled down at all. The
     * number `1`, and anything greater than `1`, represents that the user
     * has pulled far enough down that when they let go then the refresh will
     * happen. If they let go and the number is less than `1`, then the
     * refresh will not happen, and the content will return to it's original
     * position.
     */
    getProgress() {
        return Promise.resolve(this.progress);
    }
    canStart() {
        if (!this.scrollEl) {
            return false;
        }
        if (this.state !== 1 /* Inactive */) {
            return false;
        }
        // if the scrollTop is greater than zero then it's
        // not possible to pull the content down yet
        if (this.scrollEl.scrollTop > 0) {
            return false;
        }
        return true;
    }
    onStart() {
        this.progress = 0;
        this.state = 1 /* Inactive */;
    }
    onMove(detail) {
        if (!this.scrollEl) {
            return;
        }
        // this method can get called like a bazillion times per second,
        // so it's built to be as efficient as possible, and does its
        // best to do any DOM read/writes only when absolutely necessary
        // if multi-touch then get out immediately
        const ev = detail.event;
        if (ev.touches && ev.touches.length > 1) {
            return;
        }
        // do nothing if it's actively refreshing
        // or it's in the way of closing
        // or this was never a startY
        if ((this.state & 56 /* _BUSY_ */) !== 0) {
            return;
        }
        const pullFactor = (Number.isNaN(this.pullFactor) || this.pullFactor < 0) ? 1 : this.pullFactor;
        const deltaY = detail.deltaY * pullFactor;
        // don't bother if they're scrolling up
        // and have not already started dragging
        if (deltaY <= 0) {
            // the current Y is higher than the starting Y
            // so they scrolled up enough to be ignored
            this.progress = 0;
            this.state = 1 /* Inactive */;
            if (this.appliedStyles) {
                // reset the styles only if they were applied
                this.setCss(0, '', false, '');
                return;
            }
            return;
        }
        if (this.state === 1 /* Inactive */) {
            // this refresh is not already actively pulling down
            // get the content's scrollTop
            const scrollHostScrollTop = this.scrollEl.scrollTop;
            // if the scrollTop is greater than zero then it's
            // not possible to pull the content down yet
            if (scrollHostScrollTop > 0) {
                this.progress = 0;
                return;
            }
            // content scrolled all the way to the top, and dragging down
            this.state = 2 /* Pulling */;
        }
        // prevent native scroll events
        if (ev.cancelable) {
            ev.preventDefault();
        }
        // the refresher is actively pulling at this point
        // move the scroll element within the content element
        this.setCss(deltaY, '0ms', true, '');
        if (deltaY === 0) {
            // don't continue if there's no delta yet
            this.progress = 0;
            return;
        }
        const pullMin = this.pullMin;
        // set pull progress
        this.progress = deltaY / pullMin;
        // emit "start" if it hasn't started yet
        if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
        }
        // emit "pulling" on every move
        this.ionPull.emit();
        // do nothing if the delta is less than the pull threshold
        if (deltaY < pullMin) {
            // ensure it stays in the pulling state, cuz its not ready yet
            this.state = 2 /* Pulling */;
            return;
        }
        if (deltaY > this.pullMax) {
            // they pulled farther than the max, so kick off the refresh
            this.beginRefresh();
            return;
        }
        // pulled farther than the pull min!!
        // it is now in the `ready` state!!
        // if they let go then it'll refresh, kerpow!!
        this.state = 4 /* Ready */;
        return;
    }
    onEnd() {
        // only run in a zone when absolutely necessary
        if (this.state === 4 /* Ready */) {
            // they pulled down far enough, so it's ready to refresh
            this.beginRefresh();
        }
        else if (this.state === 2 /* Pulling */) {
            // they were pulling down, but didn't pull down far enough
            // set the content back to it's original location
            // and close the refresher
            // set that the refresh is actively cancelling
            this.cancel();
        }
    }
    beginRefresh() {
        // assumes we're already back in a zone
        // they pulled down far enough, so it's ready to refresh
        this.state = 8 /* Refreshing */;
        // place the content in a hangout position while it thinks
        this.setCss(this.pullMin, this.snapbackDuration, true, '');
        // emit "refresh" because it was pulled down far enough
        // and they let go to begin refreshing
        this.ionRefresh.emit({
            complete: this.complete.bind(this)
        });
    }
    close(state, delay) {
        // create fallback timer incase something goes wrong with transitionEnd event
        setTimeout(() => {
            this.state = 1 /* Inactive */;
            this.progress = 0;
            this.didStart = false;
            this.setCss(0, '0ms', false, '');
        }, 600);
        // reset set the styles on the scroll element
        // set that the refresh is actively cancelling/completing
        this.state = state;
        this.setCss(0, this.closeDuration, true, delay);
        // TODO: stop gesture
    }
    setCss(y, duration, overflowVisible, delay) {
        this.appliedStyles = (y > 0);
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            if (this.scrollEl) {
                const style = this.scrollEl.style;
                style.transform = ((y > 0) ? `translateY(${y}px) translateZ(0px)` : 'translateZ(0px)');
                style.transitionDuration = duration;
                style.transitionDelay = delay;
                style.overflow = (overflowVisible ? 'hidden' : '');
            }
        });
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { slot: "fixed", class: {
                [mode]: true,
                // Used internally for styling
                [`refresher-${mode}`]: true,
                'refresher-active': this.state !== 1 /* Inactive */,
                'refresher-pulling': this.state === 2 /* Pulling */,
                'refresher-ready': this.state === 4 /* Ready */,
                'refresher-refreshing': this.state === 8 /* Refreshing */,
                'refresher-cancelling': this.state === 16 /* Cancelling */,
                'refresher-completing': this.state === 32 /* Completing */
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; }
};

const RefresherContent = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentWillLoad() {
        if (this.pullingIcon === undefined) {
            this.pullingIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingIcon', 'arrow-down');
        }
        if (this.refreshingSpinner === undefined) {
            const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            this.refreshingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling" }, this.pullingIcon &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.pullingText) })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.refreshingText) }))));
    }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXJlZnJlc2hlcl8yLW1kLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7QUMvR2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2STtBQUMxRjtBQUNVOztBQUU3RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQVc7QUFDckMsdUJBQXVCLDJEQUFXO0FBQ2xDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBKQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVM7QUFDakI7QUFDQTtBQUNBLDJEQUEyRCxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQSxjQUFjLFFBQVEsMkRBQVUsT0FBTztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLHVCQUF1QixPQUFPLE1BQU0sYUFBYSxrQkFBa0IsV0FBVyxZQUFZLFdBQVcsK0RBQStELFdBQVcsWUFBWSxRQUFRLCtCQUErQixjQUFjLHNCQUFzQixvQkFBb0IsYUFBYSwwQkFBMEIsc0JBQXNCLHFCQUFxQix1QkFBdUIsWUFBWSx5Q0FBeUMsYUFBYSxXQUFXLG1EQUFtRCxnQ0FBZ0Msd0JBQXdCLHVCQUF1QixlQUFlLGVBQWUsa0JBQWtCLDRLQUE0Syw2Q0FBNkMscUNBQXFDLG1EQUFtRCxlQUFlLGtCQUFrQixzSEFBc0gsY0FBYywrREFBK0QsaUNBQWlDLHlCQUF5QixpSUFBaUksY0FBYyxvRUFBb0UsMkJBQTJCLG1CQUFtQixrRUFBa0UsY0FBYyx1RUFBdUUsMkJBQTJCLG1CQUFtQiw4SkFBOEosaUNBQWlDLHlMQUF5TCxrQ0FBa0MsaUxBQWlMLGdDQUFnQyxFQUFFO0FBQzV4RTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFNO0FBQ3JDO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVU7QUFDbkMscUNBQXFDLHFEQUFNLDBCQUEwQixxREFBTTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLFFBQVEsMkRBQVUsUUFBUSxFQUFFLDJEQUFDLFNBQVMsNkJBQTZCO0FBQzVGLFlBQVksMkRBQUMsU0FBUyxrQ0FBa0MsRUFBRSwyREFBQyxjQUFjLHNDQUFzQztBQUMvRyxZQUFZLDJEQUFDLFNBQVMsNkNBQTZDLDREQUFpQixvQkFBb0IsSUFBSSwyREFBQyxTQUFTLGdDQUFnQztBQUN0SixZQUFZLDJEQUFDLFNBQVMscUNBQXFDLEVBQUUsMkRBQUMsaUJBQWlCLCtCQUErQjtBQUM5RyxZQUFZLDJEQUFDLFNBQVMsZ0RBQWdELDREQUFpQix1QkFBdUI7QUFDOUc7QUFDQTs7QUFFaUYiLCJmaWxlIjoiMzlcXGNodW5rc1xcMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRG9lcyBhIHNpbXBsZSBzYW5pdGl6YXRpb24gb2YgYWxsIGVsZW1lbnRzXHJcbiAqIGluIGFuIHVudHJ1c3RlZCBzdHJpbmdcclxuICovXHJcbmNvbnN0IHNhbml0aXplRE9NU3RyaW5nID0gKHVudHJ1c3RlZFN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIHVudHJ1c3RlZFN0cmluZyAhPT0gJ3N0cmluZycgfHwgdW50cnVzdGVkU3RyaW5nID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudFxyXG4gICAgICAgICAqIHNlcGFyYXRlIGZyb20gdGhlIG1haW4gRE9NLFxyXG4gICAgICAgICAqIGNyZWF0ZSBhIGRpdiB0byBkbyBvdXIgd29yayBpblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3Qgd29ya2luZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQod29ya2luZ0Rpdik7XHJcbiAgICAgICAgd29ya2luZ0Rpdi5pbm5lckhUTUwgPSB1bnRydXN0ZWRTdHJpbmc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlIGFueSBlbGVtZW50c1xyXG4gICAgICAgICAqIHRoYXQgYXJlIGJsb2NrZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBibG9ja2VkVGFncy5mb3JFYWNoKGJsb2NrZWRUYWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRFbGVtZW50c1RvUmVtb3ZlID0gZG9jdW1lbnRGcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKGJsb2NrZWRUYWcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50SW5kZXggPSBnZXRFbGVtZW50c1RvUmVtb3ZlLmxlbmd0aCAtIDE7IGVsZW1lbnRJbmRleCA+PSAwOyBlbGVtZW50SW5kZXgtLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnRzVG9SZW1vdmVbZWxlbWVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudEZyYWdtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXZSBzdGlsbCBuZWVkIHRvIHNhbml0aXplXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgKiBhcyB0aGV5IGFyZSBsZWZ0IGJlaGluZFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHbyB0aHJvdWdoIHJlbWFpbmluZyBlbGVtZW50cyBhbmQgcmVtb3ZlXHJcbiAgICAgICAgICogbm9uLWFsbG93ZWQgYXR0cmlic1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIElFIGRvZXMgbm90IHN1cHBvcnQgLmNoaWxkcmVuIG9uIGRvY3VtZW50IGZyYWdtZW50cywgb25seSAuY2hpbGROb2Rlc1xyXG4gICAgICAgIGNvbnN0IGRmQ2hpbGRyZW4gPSBnZXRFbGVtZW50Q2hpbGRyZW4oZG9jdW1lbnRGcmFnbWVudCk7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBkZkNoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChkZkNoaWxkcmVuW2NoaWxkSW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXBwZW5kIGRvY3VtZW50IGZyYWdtZW50IHRvIGRpdlxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZnJhZ21lbnREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudCk7XHJcbiAgICAgICAgLy8gRmlyc3QgY2hpbGQgaXMgYWx3YXlzIHRoZSBkaXYgd2UgZGlkIG91ciB3b3JrIGluXHJcbiAgICAgICAgY29uc3QgZ2V0SW5uZXJEaXYgPSBmcmFnbWVudERpdi5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcclxuICAgICAgICByZXR1cm4gKGdldElubmVyRGl2ICE9PSBudWxsKSA/IGdldElubmVyRGl2LmlubmVySFRNTCA6IGZyYWdtZW50RGl2LmlubmVySFRNTDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogQ2xlYW4gdXAgY3VycmVudCBlbGVtZW50IGJhc2VkIG9uIGFsbG93ZWQgYXR0cmlidXRlc1xyXG4gKiBhbmQgdGhlbiByZWN1cnNpdmVseSBkaWcgZG93biBpbnRvIGFueSBjaGlsZCBlbGVtZW50cyB0b1xyXG4gKiBjbGVhbiB0aG9zZSB1cCBhcyB3ZWxsXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gSUUgdXNlcyBjaGlsZE5vZGVzLCBzbyBpZ25vcmUgbm9kZXMgdGhhdCBhcmUgbm90IGVsZW1lbnRzXHJcbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKGkpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubmFtZTtcclxuICAgICAgICAvLyByZW1vdmUgbm9uLWFsbG93ZWQgYXR0cmlic1xyXG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNsZWFuIHVwIGFueSBhbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAvLyB0aGF0IGF0dGVtcHQgdG8gZG8gYW55IEpTIGZ1bm55LWJ1c2luZXNzXHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWU7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9IG51bGwgJiYgYXR0cmlidXRlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnamF2YXNjcmlwdDonKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNhbml0aXplIGFueSBuZXN0ZWQgY2hpbGRyZW5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbaV0pO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogSUUgZG9lc24ndCBhbHdheXMgc3VwcG9ydCAuY2hpbGRyZW5cclxuICogc28gd2UgcmV2ZXJ0IHRvIC5jaGlsZE5vZGVzIGluc3RlYWRcclxuICovXHJcbmNvbnN0IGdldEVsZW1lbnRDaGlsZHJlbiA9IChlbCkgPT4ge1xyXG4gICAgcmV0dXJuIChlbC5jaGlsZHJlbiAhPSBudWxsKSA/IGVsLmNoaWxkcmVuIDogZWwuY2hpbGROb2RlcztcclxufTtcclxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbJ2NsYXNzJywgJ2lkJywgJ2hyZWYnLCAnc3JjJywgJ25hbWUnLCAnc2xvdCddO1xyXG5jb25zdCBibG9ja2VkVGFncyA9IFsnc2NyaXB0JywgJ3N0eWxlJywgJ2lmcmFtZScsICdtZXRhJywgJ2xpbmsnLCAnb2JqZWN0JywgJ2VtYmVkJ107XG5cbmV4cG9ydCB7IHNhbml0aXplRE9NU3RyaW5nIGFzIHMgfTtcbiIsImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgdyBhcyB3cml0ZVRhc2ssIGQgYXMgZ2V0SW9uTW9kZSwgaCwgZSBhcyBnZXRFbGVtZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9pbmRleC0zNDc2YjAyMy5qcyc7XG5cbmNvbnN0IFJlZnJlc2hlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuYXBwbGllZFN0eWxlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpZFN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnQgc3RhdGUgd2hpY2ggdGhlIHJlZnJlc2hlciBpcyBpbi4gVGhlIHJlZnJlc2hlcidzIHN0YXRlcyBpbmNsdWRlOlxuICAgICAgICAgKlxuICAgICAgICAgKiAtIGBpbmFjdGl2ZWAgLSBUaGUgcmVmcmVzaGVyIGlzIG5vdCBiZWluZyBwdWxsZWQgZG93biBvciByZWZyZXNoaW5nIGFuZCBpcyBjdXJyZW50bHkgaGlkZGVuLlxuICAgICAgICAgKiAtIGBwdWxsaW5nYCAtIFRoZSB1c2VyIGlzIGFjdGl2ZWx5IHB1bGxpbmcgZG93biB0aGUgcmVmcmVzaGVyLCBidXQgaGFzIG5vdCByZWFjaGVkIHRoZSBwb2ludCB5ZXQgdGhhdCBpZiB0aGUgdXNlciBsZXRzIGdvLCBpdCdsbCByZWZyZXNoLlxuICAgICAgICAgKiAtIGBjYW5jZWxsaW5nYCAtIFRoZSB1c2VyIHB1bGxlZCBkb3duIHRoZSByZWZyZXNoZXIgYW5kIGxldCBnbywgYnV0IGRpZCBub3QgcHVsbCBkb3duIGZhciBlbm91Z2ggdG8ga2ljayBvZmYgdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS4gQWZ0ZXIgbGV0dGluZyBnbywgdGhlIHJlZnJlc2hlciBpcyBpbiB0aGUgYGNhbmNlbGxpbmdgIHN0YXRlIHdoaWxlIGl0IGlzIGNsb3NpbmcsIGFuZCB3aWxsIGdvIGJhY2sgdG8gdGhlIGBpbmFjdGl2ZWAgc3RhdGUgb25jZSBjbG9zZWQuXG4gICAgICAgICAqIC0gYHJlYWR5YCAtIFRoZSB1c2VyIGhhcyBwdWxsZWQgZG93biB0aGUgcmVmcmVzaGVyIGZhciBlbm91Z2ggdGhhdCBpZiB0aGV5IGxldCBnbywgaXQnbGwgYmVnaW4gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgICAgICogLSBgcmVmcmVzaGluZ2AgLSBUaGUgcmVmcmVzaGVyIGlzIGFjdGl2ZWx5IHdhaXRpbmcgb24gdGhlIGFzeW5jIG9wZXJhdGlvbiB0byBlbmQuIE9uY2UgdGhlIHJlZnJlc2ggaGFuZGxlciBjYWxscyBgY29tcGxldGUoKWAgaXQgd2lsbCBiZWdpbiB0aGUgYGNvbXBsZXRpbmdgIHN0YXRlLlxuICAgICAgICAgKiAtIGBjb21wbGV0aW5nYCAtIFRoZSBgcmVmcmVzaGluZ2Agc3RhdGUgaGFzIGZpbmlzaGVkIGFuZCB0aGUgcmVmcmVzaGVyIGlzIGluIHRoZSB3YXkgb2YgY2xvc2luZyBpdHNlbGYuIE9uY2UgY2xvc2VkLCB0aGUgcmVmcmVzaGVyIHdpbGwgZ28gYmFjayB0byB0aGUgYGluYWN0aXZlYCBzdGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSAxIC8qIEluYWN0aXZlICovO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1pbmltdW0gZGlzdGFuY2UgdGhlIHVzZXIgbXVzdCBwdWxsIGRvd24gdW50aWwgdGhlXG4gICAgICAgICAqIHJlZnJlc2hlciB3aWxsIGdvIGludG8gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHVsbE1pbiA9IDYwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gZGlzdGFuY2Ugb2YgdGhlIHB1bGwgdW50aWwgdGhlIHJlZnJlc2hlclxuICAgICAgICAgKiB3aWxsIGF1dG9tYXRpY2FsbHkgZ28gaW50byB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlLlxuICAgICAgICAgKiBEZWZhdWx0cyB0byB0aGUgcmVzdWx0IG9mIGBwdWxsTWluICsgNjBgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wdWxsTWF4ID0gdGhpcy5wdWxsTWluICsgNjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIGl0IHRha2VzIHRvIGNsb3NlIHRoZSByZWZyZXNoZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsb3NlRHVyYXRpb24gPSAnMjgwbXMnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSBpdCB0YWtlcyB0aGUgcmVmcmVzaGVyIHRvIHRvIHNuYXAgYmFjayB0byB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zbmFwYmFja0R1cmF0aW9uID0gJzI4MG1zJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvdyBtdWNoIHRvIG11bHRpcGx5IHRoZSBwdWxsIHNwZWVkIGJ5LiBUbyBzbG93IHRoZSBwdWxsIGFuaW1hdGlvbiBkb3duLFxuICAgICAgICAgKiBwYXNzIGEgbnVtYmVyIGxlc3MgdGhhbiBgMWAuIFRvIHNwZWVkIHVwIHRoZSBwdWxsLCBwYXNzIGEgbnVtYmVyIGdyZWF0ZXJcbiAgICAgICAgICogdGhhbiBgMWAuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGAxYCB3aGljaCBpcyBlcXVhbCB0byB0aGUgc3BlZWQgb2YgdGhlIGN1cnNvci5cbiAgICAgICAgICogSWYgYSBuZWdhdGl2ZSB2YWx1ZSBpcyBwYXNzZWQgaW4sIHRoZSBmYWN0b3Igd2lsbCBiZSBgMWAgaW5zdGVhZC5cbiAgICAgICAgICpcbiAgICAgICAgICogRm9yIGV4YW1wbGU6IElmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYDEuMmAgYW5kIHRoZSBjb250ZW50IGlzIGRyYWdnZWQgYnlcbiAgICAgICAgICogYDEwYCBwaXhlbHMsIGluc3RlYWQgb2YgYDEwYCBwaXhlbHMgdGhlIGNvbnRlbnQgd2lsbCBiZSBwdWxsZWQgYnkgYDEyYCBwaXhlbHNcbiAgICAgICAgICogKGFuIGluY3JlYXNlIG9mIDIwIHBlcmNlbnQpLiBJZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGAwLjhgLCB0aGUgZHJhZ2dlZCBhbW91bnRcbiAgICAgICAgICogd2lsbCBiZSBgOGAgcGl4ZWxzLCBsZXNzIHRoYW4gdGhlIGFtb3VudCB0aGUgY3Vyc29yIGhhcyBtb3ZlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHVsbEZhY3RvciA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByZWZyZXNoZXIgd2lsbCBiZSBoaWRkZW4uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uUmVmcmVzaCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUmVmcmVzaFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25QdWxsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QdWxsXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0YXJ0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdGFydFwiLCA3KTtcbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2xvdCcpICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNYWtlIHN1cmUgeW91IHVzZTogPGlvbi1yZWZyZXNoZXIgc2xvdD1cImZpeGVkXCI+Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudEVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tY29udGVudCcpO1xuICAgICAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignPGlvbi1yZWZyZXNoZXI+IG11c3QgYmUgdXNlZCBpbnNpZGUgYW4gPGlvbi1jb250ZW50PicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwgPSBhd2FpdCBjb250ZW50RWwuZ2V0U2Nyb2xsRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LTYyNGVlYTU4LmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICAgICAgZWw6IGNvbnRlbnRFbCxcbiAgICAgICAgICAgIGdlc3R1cmVOYW1lOiAncmVmcmVzaGVyJyxcbiAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd5JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGNhblN0YXJ0OiAoKSA9PiB0aGlzLmNhblN0YXJ0KCksXG4gICAgICAgICAgICBvblN0YXJ0OiAoKSA9PiB0aGlzLm9uU3RhcnQoKSxcbiAgICAgICAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IHRoaXMub25FbmQoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnNjcm9sbEVsID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGwgYGNvbXBsZXRlKClgIHdoZW4geW91ciBhc3luYyBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIGByZWZyZXNoaW5nYCBzdGF0ZSBpcyB3aGlsZSB0aGUgYXBwIGlzIHBlcmZvcm1pbmdcbiAgICAgKiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCBzdWNoIGFzIHJlY2VpdmluZyBtb3JlIGRhdGEgZnJvbSBhblxuICAgICAqIEFKQVggcmVxdWVzdC4gT25jZSB0aGUgZGF0YSBoYXMgYmVlbiByZWNlaXZlZCwgeW91IHRoZW4gY2FsbCB0aGlzXG4gICAgICogbWV0aG9kIHRvIHNpZ25pZnkgdGhhdCB0aGUgcmVmcmVzaGluZyBoYXMgY29tcGxldGVkIGFuZCB0byBjbG9zZVxuICAgICAqIHRoZSByZWZyZXNoZXIuIFRoaXMgbWV0aG9kIGFsc28gY2hhbmdlcyB0aGUgcmVmcmVzaGVyJ3Mgc3RhdGUgZnJvbVxuICAgICAqIGByZWZyZXNoaW5nYCB0byBgY29tcGxldGluZ2AuXG4gICAgICovXG4gICAgYXN5bmMgY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoMzIgLyogQ29tcGxldGluZyAqLywgJzEyMG1zJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHJlZnJlc2hlcidzIHN0YXRlIGZyb20gYHJlZnJlc2hpbmdgIHRvIGBjYW5jZWxsaW5nYC5cbiAgICAgKi9cbiAgICBhc3luYyBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoMTYgLyogQ2FuY2VsbGluZyAqLywgJycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgaG93IGZhciBkb3duIHRoZSB1c2VyIGhhcyBwdWxsZWQuXG4gICAgICogVGhlIG51bWJlciBgMGAgcmVwcmVzZW50cyB0aGUgdXNlciBoYXNuJ3QgcHVsbGVkIGRvd24gYXQgYWxsLiBUaGVcbiAgICAgKiBudW1iZXIgYDFgLCBhbmQgYW55dGhpbmcgZ3JlYXRlciB0aGFuIGAxYCwgcmVwcmVzZW50cyB0aGF0IHRoZSB1c2VyXG4gICAgICogaGFzIHB1bGxlZCBmYXIgZW5vdWdoIGRvd24gdGhhdCB3aGVuIHRoZXkgbGV0IGdvIHRoZW4gdGhlIHJlZnJlc2ggd2lsbFxuICAgICAqIGhhcHBlbi4gSWYgdGhleSBsZXQgZ28gYW5kIHRoZSBudW1iZXIgaXMgbGVzcyB0aGFuIGAxYCwgdGhlbiB0aGVcbiAgICAgKiByZWZyZXNoIHdpbGwgbm90IGhhcHBlbiwgYW5kIHRoZSBjb250ZW50IHdpbGwgcmV0dXJuIHRvIGl0J3Mgb3JpZ2luYWxcbiAgICAgKiBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBnZXRQcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnByb2dyZXNzKTtcbiAgICB9XG4gICAgY2FuU3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAxIC8qIEluYWN0aXZlICovKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIHNjcm9sbFRvcCBpcyBncmVhdGVyIHRoYW4gemVybyB0aGVuIGl0J3NcbiAgICAgICAgLy8gbm90IHBvc3NpYmxlIHRvIHB1bGwgdGhlIGNvbnRlbnQgZG93biB5ZXRcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogSW5hY3RpdmUgKi87XG4gICAgfVxuICAgIG9uTW92ZShkZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBtZXRob2QgY2FuIGdldCBjYWxsZWQgbGlrZSBhIGJhemlsbGlvbiB0aW1lcyBwZXIgc2Vjb25kLFxuICAgICAgICAvLyBzbyBpdCdzIGJ1aWx0IHRvIGJlIGFzIGVmZmljaWVudCBhcyBwb3NzaWJsZSwgYW5kIGRvZXMgaXRzXG4gICAgICAgIC8vIGJlc3QgdG8gZG8gYW55IERPTSByZWFkL3dyaXRlcyBvbmx5IHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnlcbiAgICAgICAgLy8gaWYgbXVsdGktdG91Y2ggdGhlbiBnZXQgb3V0IGltbWVkaWF0ZWx5XG4gICAgICAgIGNvbnN0IGV2ID0gZGV0YWlsLmV2ZW50O1xuICAgICAgICBpZiAoZXYudG91Y2hlcyAmJiBldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBkbyBub3RoaW5nIGlmIGl0J3MgYWN0aXZlbHkgcmVmcmVzaGluZ1xuICAgICAgICAvLyBvciBpdCdzIGluIHRoZSB3YXkgb2YgY2xvc2luZ1xuICAgICAgICAvLyBvciB0aGlzIHdhcyBuZXZlciBhIHN0YXJ0WVxuICAgICAgICBpZiAoKHRoaXMuc3RhdGUgJiA1NiAvKiBfQlVTWV8gKi8pICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHVsbEZhY3RvciA9IChOdW1iZXIuaXNOYU4odGhpcy5wdWxsRmFjdG9yKSB8fCB0aGlzLnB1bGxGYWN0b3IgPCAwKSA/IDEgOiB0aGlzLnB1bGxGYWN0b3I7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGRldGFpbC5kZWx0YVkgKiBwdWxsRmFjdG9yO1xuICAgICAgICAvLyBkb24ndCBib3RoZXIgaWYgdGhleSdyZSBzY3JvbGxpbmcgdXBcbiAgICAgICAgLy8gYW5kIGhhdmUgbm90IGFscmVhZHkgc3RhcnRlZCBkcmFnZ2luZ1xuICAgICAgICBpZiAoZGVsdGFZIDw9IDApIHtcbiAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IFkgaXMgaGlnaGVyIHRoYW4gdGhlIHN0YXJ0aW5nIFlcbiAgICAgICAgICAgIC8vIHNvIHRoZXkgc2Nyb2xsZWQgdXAgZW5vdWdoIHRvIGJlIGlnbm9yZWRcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogSW5hY3RpdmUgKi87XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgdGhlIHN0eWxlcyBvbmx5IGlmIHRoZXkgd2VyZSBhcHBsaWVkXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDc3MoMCwgJycsIGZhbHNlLCAnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAxIC8qIEluYWN0aXZlICovKSB7XG4gICAgICAgICAgICAvLyB0aGlzIHJlZnJlc2ggaXMgbm90IGFscmVhZHkgYWN0aXZlbHkgcHVsbGluZyBkb3duXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGNvbnRlbnQncyBzY3JvbGxUb3BcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhvc3RTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzY3JvbGxUb3AgaXMgZ3JlYXRlciB0aGFuIHplcm8gdGhlbiBpdCdzXG4gICAgICAgICAgICAvLyBub3QgcG9zc2libGUgdG8gcHVsbCB0aGUgY29udGVudCBkb3duIHlldFxuICAgICAgICAgICAgaWYgKHNjcm9sbEhvc3RTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGVudCBzY3JvbGxlZCBhbGwgdGhlIHdheSB0byB0aGUgdG9wLCBhbmQgZHJhZ2dpbmcgZG93blxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDIgLyogUHVsbGluZyAqLztcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2ZW50IG5hdGl2ZSBzY3JvbGwgZXZlbnRzXG4gICAgICAgIGlmIChldi5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoZSByZWZyZXNoZXIgaXMgYWN0aXZlbHkgcHVsbGluZyBhdCB0aGlzIHBvaW50XG4gICAgICAgIC8vIG1vdmUgdGhlIHNjcm9sbCBlbGVtZW50IHdpdGhpbiB0aGUgY29udGVudCBlbGVtZW50XG4gICAgICAgIHRoaXMuc2V0Q3NzKGRlbHRhWSwgJzBtcycsIHRydWUsICcnKTtcbiAgICAgICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZG9uJ3QgY29udGludWUgaWYgdGhlcmUncyBubyBkZWx0YSB5ZXRcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHB1bGxNaW4gPSB0aGlzLnB1bGxNaW47XG4gICAgICAgIC8vIHNldCBwdWxsIHByb2dyZXNzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBkZWx0YVkgLyBwdWxsTWluO1xuICAgICAgICAvLyBlbWl0IFwic3RhcnRcIiBpZiBpdCBoYXNuJ3Qgc3RhcnRlZCB5ZXRcbiAgICAgICAgaWYgKCF0aGlzLmRpZFN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW9uU3RhcnQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVtaXQgXCJwdWxsaW5nXCIgb24gZXZlcnkgbW92ZVxuICAgICAgICB0aGlzLmlvblB1bGwuZW1pdCgpO1xuICAgICAgICAvLyBkbyBub3RoaW5nIGlmIHRoZSBkZWx0YSBpcyBsZXNzIHRoYW4gdGhlIHB1bGwgdGhyZXNob2xkXG4gICAgICAgIGlmIChkZWx0YVkgPCBwdWxsTWluKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgaXQgc3RheXMgaW4gdGhlIHB1bGxpbmcgc3RhdGUsIGN1eiBpdHMgbm90IHJlYWR5IHlldFxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDIgLyogUHVsbGluZyAqLztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsdGFZID4gdGhpcy5wdWxsTWF4KSB7XG4gICAgICAgICAgICAvLyB0aGV5IHB1bGxlZCBmYXJ0aGVyIHRoYW4gdGhlIG1heCwgc28ga2ljayBvZmYgdGhlIHJlZnJlc2hcbiAgICAgICAgICAgIHRoaXMuYmVnaW5SZWZyZXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHVsbGVkIGZhcnRoZXIgdGhhbiB0aGUgcHVsbCBtaW4hIVxuICAgICAgICAvLyBpdCBpcyBub3cgaW4gdGhlIGByZWFkeWAgc3RhdGUhIVxuICAgICAgICAvLyBpZiB0aGV5IGxldCBnbyB0aGVuIGl0J2xsIHJlZnJlc2gsIGtlcnBvdyEhXG4gICAgICAgIHRoaXMuc3RhdGUgPSA0IC8qIFJlYWR5ICovO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uRW5kKCkge1xuICAgICAgICAvLyBvbmx5IHJ1biBpbiBhIHpvbmUgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gNCAvKiBSZWFkeSAqLykge1xuICAgICAgICAgICAgLy8gdGhleSBwdWxsZWQgZG93biBmYXIgZW5vdWdoLCBzbyBpdCdzIHJlYWR5IHRvIHJlZnJlc2hcbiAgICAgICAgICAgIHRoaXMuYmVnaW5SZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gMiAvKiBQdWxsaW5nICovKSB7XG4gICAgICAgICAgICAvLyB0aGV5IHdlcmUgcHVsbGluZyBkb3duLCBidXQgZGlkbid0IHB1bGwgZG93biBmYXIgZW5vdWdoXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGNvbnRlbnQgYmFjayB0byBpdCdzIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICAvLyBhbmQgY2xvc2UgdGhlIHJlZnJlc2hlclxuICAgICAgICAgICAgLy8gc2V0IHRoYXQgdGhlIHJlZnJlc2ggaXMgYWN0aXZlbHkgY2FuY2VsbGluZ1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiZWdpblJlZnJlc2goKSB7XG4gICAgICAgIC8vIGFzc3VtZXMgd2UncmUgYWxyZWFkeSBiYWNrIGluIGEgem9uZVxuICAgICAgICAvLyB0aGV5IHB1bGxlZCBkb3duIGZhciBlbm91Z2gsIHNvIGl0J3MgcmVhZHkgdG8gcmVmcmVzaFxuICAgICAgICB0aGlzLnN0YXRlID0gOCAvKiBSZWZyZXNoaW5nICovO1xuICAgICAgICAvLyBwbGFjZSB0aGUgY29udGVudCBpbiBhIGhhbmdvdXQgcG9zaXRpb24gd2hpbGUgaXQgdGhpbmtzXG4gICAgICAgIHRoaXMuc2V0Q3NzKHRoaXMucHVsbE1pbiwgdGhpcy5zbmFwYmFja0R1cmF0aW9uLCB0cnVlLCAnJyk7XG4gICAgICAgIC8vIGVtaXQgXCJyZWZyZXNoXCIgYmVjYXVzZSBpdCB3YXMgcHVsbGVkIGRvd24gZmFyIGVub3VnaFxuICAgICAgICAvLyBhbmQgdGhleSBsZXQgZ28gdG8gYmVnaW4gcmVmcmVzaGluZ1xuICAgICAgICB0aGlzLmlvblJlZnJlc2guZW1pdCh7XG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbG9zZShzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgLy8gY3JlYXRlIGZhbGxiYWNrIHRpbWVyIGluY2FzZSBzb21ldGhpbmcgZ29lcyB3cm9uZyB3aXRoIHRyYW5zaXRpb25FbmQgZXZlbnRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMSAvKiBJbmFjdGl2ZSAqLztcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgdGhpcy5kaWRTdGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRDc3MoMCwgJzBtcycsIGZhbHNlLCAnJyk7XG4gICAgICAgIH0sIDYwMCk7XG4gICAgICAgIC8vIHJlc2V0IHNldCB0aGUgc3R5bGVzIG9uIHRoZSBzY3JvbGwgZWxlbWVudFxuICAgICAgICAvLyBzZXQgdGhhdCB0aGUgcmVmcmVzaCBpcyBhY3RpdmVseSBjYW5jZWxsaW5nL2NvbXBsZXRpbmdcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnNldENzcygwLCB0aGlzLmNsb3NlRHVyYXRpb24sIHRydWUsIGRlbGF5KTtcbiAgICAgICAgLy8gVE9ETzogc3RvcCBnZXN0dXJlXG4gICAgfVxuICAgIHNldENzcyh5LCBkdXJhdGlvbiwgb3ZlcmZsb3dWaXNpYmxlLCBkZWxheSkge1xuICAgICAgICB0aGlzLmFwcGxpZWRTdHlsZXMgPSAoeSA+IDApO1xuICAgICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuc2Nyb2xsRWwuc3R5bGU7XG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gKCh5ID4gMCkgPyBgdHJhbnNsYXRlWSgke3l9cHgpIHRyYW5zbGF0ZVooMHB4KWAgOiAndHJhbnNsYXRlWigwcHgpJyk7XG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gZGVsYXk7XG4gICAgICAgICAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSAob3ZlcmZsb3dWaXNpYmxlID8gJ2hpZGRlbicgOiAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBzbG90OiBcImZpeGVkXCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIFtgcmVmcmVzaGVyLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAncmVmcmVzaGVyLWFjdGl2ZSc6IHRoaXMuc3RhdGUgIT09IDEgLyogSW5hY3RpdmUgKi8sXG4gICAgICAgICAgICAgICAgJ3JlZnJlc2hlci1wdWxsaW5nJzogdGhpcy5zdGF0ZSA9PT0gMiAvKiBQdWxsaW5nICovLFxuICAgICAgICAgICAgICAgICdyZWZyZXNoZXItcmVhZHknOiB0aGlzLnN0YXRlID09PSA0IC8qIFJlYWR5ICovLFxuICAgICAgICAgICAgICAgICdyZWZyZXNoZXItcmVmcmVzaGluZyc6IHRoaXMuc3RhdGUgPT09IDggLyogUmVmcmVzaGluZyAqLyxcbiAgICAgICAgICAgICAgICAncmVmcmVzaGVyLWNhbmNlbGxpbmcnOiB0aGlzLnN0YXRlID09PSAxNiAvKiBDYW5jZWxsaW5nICovLFxuICAgICAgICAgICAgICAgICdyZWZyZXNoZXItY29tcGxldGluZyc6IHRoaXMuc3RhdGUgPT09IDMyIC8qIENvbXBsZXRpbmcgKi9cbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiaW9uLXJlZnJlc2hlcntsZWZ0OjA7dG9wOjA7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjYwcHg7ei1pbmRleDotMX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgaW9uLXJlZnJlc2hlcixbZGlyPXJ0bF0gaW9uLXJlZnJlc2hlcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItYWN0aXZle2Rpc3BsYXk6YmxvY2t9aW9uLXJlZnJlc2hlci1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCV9LnJlZnJlc2hlci1wdWxsaW5nLC5yZWZyZXNoZXItcmVmcmVzaGluZ3tkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJX0ucmVmcmVzaGVyLXB1bGxpbmctaWNvbiwucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjouMnM7dHJhbnNpdGlvbjouMnM7Zm9udC1zaXplOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbixbZGlyPXJ0bF0gLnJlZnJlc2hlci1wdWxsaW5nLWljb24sW2Rpcj1ydGxdIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKX0ucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dHtmb250LXNpemU6MTZweDt0ZXh0LWFsaWduOmNlbnRlcn0ucmVmcmVzaGVyLXB1bGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZywucmVmcmVzaGVyLXJlYWR5IGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLXJlYWR5IGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnJlZnJlc2hlci1jYW5jZWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmcsLnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLWNhbmNlbGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0ucmVmcmVzaGVyLWNvbXBsZXRpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItY29tcGxldGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfS5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1wdWxsaW5nLWljb24sLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uLC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCl9LnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY3Jlc2NlbnQgY2lyY2xlLC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWxpbmVzLW1kIGxpbmUsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItbGluZXMtc21hbGwtbWQgbGluZXtzdHJva2U6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCl9LnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItYnViYmxlcyBjaXJjbGUsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY2lyY2xlcyBjaXJjbGUsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItZG90cyBjaXJjbGV7ZmlsbDp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKX1cIjsgfVxufTtcblxuY29uc3QgUmVmcmVzaGVyQ29udGVudCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5wdWxsaW5nSWNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1bGxpbmdJY29uID0gY29uZmlnLmdldCgncmVmcmVzaGluZ0ljb24nLCAnYXJyb3ctZG93bicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hpbmdTcGlubmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoaW5nU3Bpbm5lciA9IGNvbmZpZy5nZXQoJ3JlZnJlc2hpbmdTcGlubmVyJywgY29uZmlnLmdldCgnc3Bpbm5lcicsIG1vZGUgPT09ICdpb3MnID8gJ2xpbmVzJyA6ICdjcmVzY2VudCcpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZ1wiIH0sIHRoaXMucHVsbGluZ0ljb24gJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy1pY29uXCIgfSwgaChcImlvbi1pY29uXCIsIHsgaWNvbjogdGhpcy5wdWxsaW5nSWNvbiwgbGF6eTogZmFsc2UgfSkpLCB0aGlzLnB1bGxpbmdUZXh0ICYmXG4gICAgICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmVmcmVzaGVyLXB1bGxpbmctdGV4dFwiLCBpbm5lckhUTUw6IHNhbml0aXplRE9NU3RyaW5nKHRoaXMucHVsbGluZ1RleHQpIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nXCIgfSwgdGhpcy5yZWZyZXNoaW5nU3Bpbm5lciAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nLWljb25cIiB9LCBoKFwiaW9uLXNwaW5uZXJcIiwgeyBuYW1lOiB0aGlzLnJlZnJlc2hpbmdTcGlubmVyIH0pKSwgdGhpcy5yZWZyZXNoaW5nVGV4dCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHRcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLnJlZnJlc2hpbmdUZXh0KSB9KSkpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBSZWZyZXNoZXIgYXMgaW9uX3JlZnJlc2hlciwgUmVmcmVzaGVyQ29udGVudCBhcyBpb25fcmVmcmVzaGVyX2NvbnRlbnQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=