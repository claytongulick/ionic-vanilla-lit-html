(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js ***!
  \*************************************************************************/
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
    static get style() { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXJlZnJlc2hlcl8yLWlvcy5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7O0FDL0dsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkk7QUFDMUY7QUFDVTs7QUFFN0Q7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFXO0FBQ3JDLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwSkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFTO0FBQ2pCO0FBQ0E7QUFDQSwyREFBMkQsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekI7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0EsTUFBTTtBQUNOLHdCQUF3Qix1QkFBdUIsT0FBTyxNQUFNLGFBQWEsa0JBQWtCLFdBQVcsWUFBWSxXQUFXLCtEQUErRCxXQUFXLFlBQVksUUFBUSwrQkFBK0IsY0FBYyxzQkFBc0Isb0JBQW9CLGFBQWEsMEJBQTBCLHNCQUFzQixxQkFBcUIsdUJBQXVCLFlBQVkseUNBQXlDLGFBQWEsV0FBVyxtREFBbUQsZ0NBQWdDLHdCQUF3Qix1QkFBdUIsZUFBZSxlQUFlLGtCQUFrQiw0S0FBNEssNkNBQTZDLHFDQUFxQyxtREFBbUQsZUFBZSxrQkFBa0Isc0hBQXNILGNBQWMsK0RBQStELGlDQUFpQyx5QkFBeUIsaUlBQWlJLGNBQWMsb0VBQW9FLDJCQUEyQixtQkFBbUIsa0VBQWtFLGNBQWMsdUVBQXVFLDJCQUEyQixtQkFBbUIsa0tBQWtLLGlDQUFpQyw4TEFBOEwsa0NBQWtDLG9MQUFvTCxnQ0FBZ0MsRUFBRTtBQUN4eUU7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBTTtBQUNyQztBQUNBO0FBQ0EseUJBQXlCLDJEQUFVO0FBQ25DLHFDQUFxQyxxREFBTSwwQkFBMEIscURBQU07QUFDM0U7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxRQUFRLDJEQUFVLFFBQVEsRUFBRSwyREFBQyxTQUFTLDZCQUE2QjtBQUM1RixZQUFZLDJEQUFDLFNBQVMsa0NBQWtDLEVBQUUsMkRBQUMsY0FBYyxzQ0FBc0M7QUFDL0csWUFBWSwyREFBQyxTQUFTLDZDQUE2Qyw0REFBaUIsb0JBQW9CLElBQUksMkRBQUMsU0FBUyxnQ0FBZ0M7QUFDdEosWUFBWSwyREFBQyxTQUFTLHFDQUFxQyxFQUFFLDJEQUFDLGlCQUFpQiwrQkFBK0I7QUFDOUcsWUFBWSwyREFBQyxTQUFTLGdEQUFnRCw0REFBaUIsdUJBQXVCO0FBQzlHO0FBQ0E7O0FBRWlGIiwiZmlsZSI6IjM4XFxjaHVua3NcXDM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xyXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZURPTVN0cmluZyA9ICh1bnRydXN0ZWRTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcclxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcclxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xyXG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcclxuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChibG9ja2VkVGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxyXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcclxuICAgICAgICBjb25zdCBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcclxuICAgICAgICBjb25zdCBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxyXG4gICAgICAgIGNvbnN0IGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcclxuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cclxuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xyXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXHJcbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXHJcbiAqL1xyXG5jb25zdCBnZXRFbGVtZW50Q2hpbGRyZW4gPSAoZWwpID0+IHtcclxuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XHJcbn07XHJcbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcclxuY29uc3QgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuXG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIHcgYXMgd3JpdGVUYXNrLCBkIGFzIGdldElvbk1vZGUsIGgsIGUgYXMgZ2V0RWxlbWVudCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCB7IGIgYXMgY29uZmlnIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xuXG5jb25zdCBSZWZyZXNoZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmFwcGxpZWRTdHlsZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaWRTdGFydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIHdoaWNoIHRoZSByZWZyZXNoZXIgaXMgaW4uIFRoZSByZWZyZXNoZXIncyBzdGF0ZXMgaW5jbHVkZTpcbiAgICAgICAgICpcbiAgICAgICAgICogLSBgaW5hY3RpdmVgIC0gVGhlIHJlZnJlc2hlciBpcyBub3QgYmVpbmcgcHVsbGVkIGRvd24gb3IgcmVmcmVzaGluZyBhbmQgaXMgY3VycmVudGx5IGhpZGRlbi5cbiAgICAgICAgICogLSBgcHVsbGluZ2AgLSBUaGUgdXNlciBpcyBhY3RpdmVseSBwdWxsaW5nIGRvd24gdGhlIHJlZnJlc2hlciwgYnV0IGhhcyBub3QgcmVhY2hlZCB0aGUgcG9pbnQgeWV0IHRoYXQgaWYgdGhlIHVzZXIgbGV0cyBnbywgaXQnbGwgcmVmcmVzaC5cbiAgICAgICAgICogLSBgY2FuY2VsbGluZ2AgLSBUaGUgdXNlciBwdWxsZWQgZG93biB0aGUgcmVmcmVzaGVyIGFuZCBsZXQgZ28sIGJ1dCBkaWQgbm90IHB1bGwgZG93biBmYXIgZW5vdWdoIHRvIGtpY2sgb2ZmIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuIEFmdGVyIGxldHRpbmcgZ28sIHRoZSByZWZyZXNoZXIgaXMgaW4gdGhlIGBjYW5jZWxsaW5nYCBzdGF0ZSB3aGlsZSBpdCBpcyBjbG9zaW5nLCBhbmQgd2lsbCBnbyBiYWNrIHRvIHRoZSBgaW5hY3RpdmVgIHN0YXRlIG9uY2UgY2xvc2VkLlxuICAgICAgICAgKiAtIGByZWFkeWAgLSBUaGUgdXNlciBoYXMgcHVsbGVkIGRvd24gdGhlIHJlZnJlc2hlciBmYXIgZW5vdWdoIHRoYXQgaWYgdGhleSBsZXQgZ28sIGl0J2xsIGJlZ2luIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICAgICAqIC0gYHJlZnJlc2hpbmdgIC0gVGhlIHJlZnJlc2hlciBpcyBhY3RpdmVseSB3YWl0aW5nIG9uIHRoZSBhc3luYyBvcGVyYXRpb24gdG8gZW5kLiBPbmNlIHRoZSByZWZyZXNoIGhhbmRsZXIgY2FsbHMgYGNvbXBsZXRlKClgIGl0IHdpbGwgYmVnaW4gdGhlIGBjb21wbGV0aW5nYCBzdGF0ZS5cbiAgICAgICAgICogLSBgY29tcGxldGluZ2AgLSBUaGUgYHJlZnJlc2hpbmdgIHN0YXRlIGhhcyBmaW5pc2hlZCBhbmQgdGhlIHJlZnJlc2hlciBpcyBpbiB0aGUgd2F5IG9mIGNsb3NpbmcgaXRzZWxmLiBPbmNlIGNsb3NlZCwgdGhlIHJlZnJlc2hlciB3aWxsIGdvIGJhY2sgdG8gdGhlIGBpbmFjdGl2ZWAgc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0gMSAvKiBJbmFjdGl2ZSAqLztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIHRoZSB1c2VyIG11c3QgcHVsbCBkb3duIHVudGlsIHRoZVxuICAgICAgICAgKiByZWZyZXNoZXIgd2lsbCBnbyBpbnRvIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnB1bGxNaW4gPSA2MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIGRpc3RhbmNlIG9mIHRoZSBwdWxsIHVudGlsIHRoZSByZWZyZXNoZXJcbiAgICAgICAgICogd2lsbCBhdXRvbWF0aWNhbGx5IGdvIGludG8gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgICAgICogRGVmYXVsdHMgdG8gdGhlIHJlc3VsdCBvZiBgcHVsbE1pbiArIDYwYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHVsbE1heCA9IHRoaXMucHVsbE1pbiArIDYwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSBpdCB0YWtlcyB0byBjbG9zZSB0aGUgcmVmcmVzaGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbG9zZUR1cmF0aW9uID0gJzI4MG1zJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgaXQgdGFrZXMgdGhlIHJlZnJlc2hlciB0byB0byBzbmFwIGJhY2sgdG8gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc25hcGJhY2tEdXJhdGlvbiA9ICcyODBtcyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb3cgbXVjaCB0byBtdWx0aXBseSB0aGUgcHVsbCBzcGVlZCBieS4gVG8gc2xvdyB0aGUgcHVsbCBhbmltYXRpb24gZG93bixcbiAgICAgICAgICogcGFzcyBhIG51bWJlciBsZXNzIHRoYW4gYDFgLiBUbyBzcGVlZCB1cCB0aGUgcHVsbCwgcGFzcyBhIG51bWJlciBncmVhdGVyXG4gICAgICAgICAqIHRoYW4gYDFgLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgMWAgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIHNwZWVkIG9mIHRoZSBjdXJzb3IuXG4gICAgICAgICAqIElmIGEgbmVnYXRpdmUgdmFsdWUgaXMgcGFzc2VkIGluLCB0aGUgZmFjdG9yIHdpbGwgYmUgYDFgIGluc3RlYWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEZvciBleGFtcGxlOiBJZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGAxLjJgIGFuZCB0aGUgY29udGVudCBpcyBkcmFnZ2VkIGJ5XG4gICAgICAgICAqIGAxMGAgcGl4ZWxzLCBpbnN0ZWFkIG9mIGAxMGAgcGl4ZWxzIHRoZSBjb250ZW50IHdpbGwgYmUgcHVsbGVkIGJ5IGAxMmAgcGl4ZWxzXG4gICAgICAgICAqIChhbiBpbmNyZWFzZSBvZiAyMCBwZXJjZW50KS4gSWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBgMC44YCwgdGhlIGRyYWdnZWQgYW1vdW50XG4gICAgICAgICAqIHdpbGwgYmUgYDhgIHBpeGVscywgbGVzcyB0aGFuIHRoZSBhbW91bnQgdGhlIGN1cnNvciBoYXMgbW92ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnB1bGxGYWN0b3IgPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcmVmcmVzaGVyIHdpbGwgYmUgaGlkZGVuLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvblJlZnJlc2ggPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJlZnJlc2hcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uUHVsbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUHVsbFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3RhcnRcIiwgNyk7XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFrZSBzdXJlIHlvdSB1c2U6IDxpb24tcmVmcmVzaGVyIHNsb3Q9XCJmaXhlZFwiPicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFjb250ZW50RWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJzxpb24tcmVmcmVzaGVyPiBtdXN0IGJlIHVzZWQgaW5zaWRlIGFuIDxpb24tY29udGVudD4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbEVsID0gYXdhaXQgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgIGVsOiBjb250ZW50RWwsXG4gICAgICAgICAgICBnZXN0dXJlTmFtZTogJ3JlZnJlc2hlcicsXG4gICAgICAgICAgICBnZXN0dXJlUHJpb3JpdHk6IDEwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAneScsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBjYW5TdGFydDogKCkgPT4gdGhpcy5jYW5TdGFydCgpLFxuICAgICAgICAgICAgb25TdGFydDogKCkgPT4gdGhpcy5vblN0YXJ0KCksXG4gICAgICAgICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgICAgICAgIG9uRW5kOiAoKSA9PiB0aGlzLm9uRW5kKCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxFbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIGBjb21wbGV0ZSgpYCB3aGVuIHlvdXIgYXN5bmMgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICogRm9yIGV4YW1wbGUsIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUgaXMgd2hpbGUgdGhlIGFwcCBpcyBwZXJmb3JtaW5nXG4gICAgICogYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbiwgc3VjaCBhcyByZWNlaXZpbmcgbW9yZSBkYXRhIGZyb20gYW5cbiAgICAgKiBBSkFYIHJlcXVlc3QuIE9uY2UgdGhlIGRhdGEgaGFzIGJlZW4gcmVjZWl2ZWQsIHlvdSB0aGVuIGNhbGwgdGhpc1xuICAgICAqIG1ldGhvZCB0byBzaWduaWZ5IHRoYXQgdGhlIHJlZnJlc2hpbmcgaGFzIGNvbXBsZXRlZCBhbmQgdG8gY2xvc2VcbiAgICAgKiB0aGUgcmVmcmVzaGVyLiBUaGlzIG1ldGhvZCBhbHNvIGNoYW5nZXMgdGhlIHJlZnJlc2hlcidzIHN0YXRlIGZyb21cbiAgICAgKiBgcmVmcmVzaGluZ2AgdG8gYGNvbXBsZXRpbmdgLlxuICAgICAqL1xuICAgIGFzeW5jIGNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNsb3NlKDMyIC8qIENvbXBsZXRpbmcgKi8sICcxMjBtcycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSByZWZyZXNoZXIncyBzdGF0ZSBmcm9tIGByZWZyZXNoaW5nYCB0byBgY2FuY2VsbGluZ2AuXG4gICAgICovXG4gICAgYXN5bmMgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmNsb3NlKDE2IC8qIENhbmNlbGxpbmcgKi8sICcnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBudW1iZXIgcmVwcmVzZW50aW5nIGhvdyBmYXIgZG93biB0aGUgdXNlciBoYXMgcHVsbGVkLlxuICAgICAqIFRoZSBudW1iZXIgYDBgIHJlcHJlc2VudHMgdGhlIHVzZXIgaGFzbid0IHB1bGxlZCBkb3duIGF0IGFsbC4gVGhlXG4gICAgICogbnVtYmVyIGAxYCwgYW5kIGFueXRoaW5nIGdyZWF0ZXIgdGhhbiBgMWAsIHJlcHJlc2VudHMgdGhhdCB0aGUgdXNlclxuICAgICAqIGhhcyBwdWxsZWQgZmFyIGVub3VnaCBkb3duIHRoYXQgd2hlbiB0aGV5IGxldCBnbyB0aGVuIHRoZSByZWZyZXNoIHdpbGxcbiAgICAgKiBoYXBwZW4uIElmIHRoZXkgbGV0IGdvIGFuZCB0aGUgbnVtYmVyIGlzIGxlc3MgdGhhbiBgMWAsIHRoZW4gdGhlXG4gICAgICogcmVmcmVzaCB3aWxsIG5vdCBoYXBwZW4sIGFuZCB0aGUgY29udGVudCB3aWxsIHJldHVybiB0byBpdCdzIG9yaWdpbmFsXG4gICAgICogcG9zaXRpb24uXG4gICAgICovXG4gICAgZ2V0UHJvZ3Jlc3MoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9ncmVzcyk7XG4gICAgfVxuICAgIGNhblN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMSAvKiBJbmFjdGl2ZSAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBzY3JvbGxUb3AgaXMgZ3JlYXRlciB0aGFuIHplcm8gdGhlbiBpdCdzXG4gICAgICAgIC8vIG5vdCBwb3NzaWJsZSB0byBwdWxsIHRoZSBjb250ZW50IGRvd24geWV0XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAxIC8qIEluYWN0aXZlICovO1xuICAgIH1cbiAgICBvbk1vdmUoZGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGNhbiBnZXQgY2FsbGVkIGxpa2UgYSBiYXppbGxpb24gdGltZXMgcGVyIHNlY29uZCxcbiAgICAgICAgLy8gc28gaXQncyBidWlsdCB0byBiZSBhcyBlZmZpY2llbnQgYXMgcG9zc2libGUsIGFuZCBkb2VzIGl0c1xuICAgICAgICAvLyBiZXN0IHRvIGRvIGFueSBET00gcmVhZC93cml0ZXMgb25seSB3aGVuIGFic29sdXRlbHkgbmVjZXNzYXJ5XG4gICAgICAgIC8vIGlmIG11bHRpLXRvdWNoIHRoZW4gZ2V0IG91dCBpbW1lZGlhdGVseVxuICAgICAgICBjb25zdCBldiA9IGRldGFpbC5ldmVudDtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMgJiYgZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiBpdCdzIGFjdGl2ZWx5IHJlZnJlc2hpbmdcbiAgICAgICAgLy8gb3IgaXQncyBpbiB0aGUgd2F5IG9mIGNsb3NpbmdcbiAgICAgICAgLy8gb3IgdGhpcyB3YXMgbmV2ZXIgYSBzdGFydFlcbiAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgNTYgLyogX0JVU1lfICovKSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHB1bGxGYWN0b3IgPSAoTnVtYmVyLmlzTmFOKHRoaXMucHVsbEZhY3RvcikgfHwgdGhpcy5wdWxsRmFjdG9yIDwgMCkgPyAxIDogdGhpcy5wdWxsRmFjdG9yO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBkZXRhaWwuZGVsdGFZICogcHVsbEZhY3RvcjtcbiAgICAgICAgLy8gZG9uJ3QgYm90aGVyIGlmIHRoZXkncmUgc2Nyb2xsaW5nIHVwXG4gICAgICAgIC8vIGFuZCBoYXZlIG5vdCBhbHJlYWR5IHN0YXJ0ZWQgZHJhZ2dpbmdcbiAgICAgICAgaWYgKGRlbHRhWSA8PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGUgY3VycmVudCBZIGlzIGhpZ2hlciB0aGFuIHRoZSBzdGFydGluZyBZXG4gICAgICAgICAgICAvLyBzbyB0aGV5IHNjcm9sbGVkIHVwIGVub3VnaCB0byBiZSBpZ25vcmVkXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAxIC8qIEluYWN0aXZlICovO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBzdHlsZXMgb25seSBpZiB0aGV5IHdlcmUgYXBwbGllZFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3NzKDAsICcnLCBmYWxzZSwgJycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gMSAvKiBJbmFjdGl2ZSAqLykge1xuICAgICAgICAgICAgLy8gdGhpcyByZWZyZXNoIGlzIG5vdCBhbHJlYWR5IGFjdGl2ZWx5IHB1bGxpbmcgZG93blxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjb250ZW50J3Mgc2Nyb2xsVG9wXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIb3N0U2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc2Nyb2xsVG9wIGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIHRoZW4gaXQnc1xuICAgICAgICAgICAgLy8gbm90IHBvc3NpYmxlIHRvIHB1bGwgdGhlIGNvbnRlbnQgZG93biB5ZXRcbiAgICAgICAgICAgIGlmIChzY3JvbGxIb3N0U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRlbnQgc2Nyb2xsZWQgYWxsIHRoZSB3YXkgdG8gdGhlIHRvcCwgYW5kIGRyYWdnaW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIFB1bGxpbmcgKi87XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJldmVudCBuYXRpdmUgc2Nyb2xsIGV2ZW50c1xuICAgICAgICBpZiAoZXYuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGUgcmVmcmVzaGVyIGlzIGFjdGl2ZWx5IHB1bGxpbmcgYXQgdGhpcyBwb2ludFxuICAgICAgICAvLyBtb3ZlIHRoZSBzY3JvbGwgZWxlbWVudCB3aXRoaW4gdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICB0aGlzLnNldENzcyhkZWx0YVksICcwbXMnLCB0cnVlLCAnJyk7XG4gICAgICAgIGlmIChkZWx0YVkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRvbid0IGNvbnRpbnVlIGlmIHRoZXJlJ3Mgbm8gZGVsdGEgeWV0XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwdWxsTWluID0gdGhpcy5wdWxsTWluO1xuICAgICAgICAvLyBzZXQgcHVsbCBwcm9ncmVzc1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gZGVsdGFZIC8gcHVsbE1pbjtcbiAgICAgICAgLy8gZW1pdCBcInN0YXJ0XCIgaWYgaXQgaGFzbid0IHN0YXJ0ZWQgeWV0XG4gICAgICAgIGlmICghdGhpcy5kaWRTdGFydCkge1xuICAgICAgICAgICAgdGhpcy5kaWRTdGFydCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlvblN0YXJ0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbWl0IFwicHVsbGluZ1wiIG9uIGV2ZXJ5IG1vdmVcbiAgICAgICAgdGhpcy5pb25QdWxsLmVtaXQoKTtcbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiB0aGUgZGVsdGEgaXMgbGVzcyB0aGFuIHRoZSBwdWxsIHRocmVzaG9sZFxuICAgICAgICBpZiAoZGVsdGFZIDwgcHVsbE1pbikge1xuICAgICAgICAgICAgLy8gZW5zdXJlIGl0IHN0YXlzIGluIHRoZSBwdWxsaW5nIHN0YXRlLCBjdXogaXRzIG5vdCByZWFkeSB5ZXRcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIFB1bGxpbmcgKi87XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbHRhWSA+IHRoaXMucHVsbE1heCkge1xuICAgICAgICAgICAgLy8gdGhleSBwdWxsZWQgZmFydGhlciB0aGFuIHRoZSBtYXgsIHNvIGtpY2sgb2ZmIHRoZSByZWZyZXNoXG4gICAgICAgICAgICB0aGlzLmJlZ2luUmVmcmVzaCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHB1bGxlZCBmYXJ0aGVyIHRoYW4gdGhlIHB1bGwgbWluISFcbiAgICAgICAgLy8gaXQgaXMgbm93IGluIHRoZSBgcmVhZHlgIHN0YXRlISFcbiAgICAgICAgLy8gaWYgdGhleSBsZXQgZ28gdGhlbiBpdCdsbCByZWZyZXNoLCBrZXJwb3chIVxuICAgICAgICB0aGlzLnN0YXRlID0gNCAvKiBSZWFkeSAqLztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkVuZCgpIHtcbiAgICAgICAgLy8gb25seSBydW4gaW4gYSB6b25lIHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IDQgLyogUmVhZHkgKi8pIHtcbiAgICAgICAgICAgIC8vIHRoZXkgcHVsbGVkIGRvd24gZmFyIGVub3VnaCwgc28gaXQncyByZWFkeSB0byByZWZyZXNoXG4gICAgICAgICAgICB0aGlzLmJlZ2luUmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IDIgLyogUHVsbGluZyAqLykge1xuICAgICAgICAgICAgLy8gdGhleSB3ZXJlIHB1bGxpbmcgZG93biwgYnV0IGRpZG4ndCBwdWxsIGRvd24gZmFyIGVub3VnaFxuICAgICAgICAgICAgLy8gc2V0IHRoZSBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgLy8gYW5kIGNsb3NlIHRoZSByZWZyZXNoZXJcbiAgICAgICAgICAgIC8vIHNldCB0aGF0IHRoZSByZWZyZXNoIGlzIGFjdGl2ZWx5IGNhbmNlbGxpbmdcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmVnaW5SZWZyZXNoKCkge1xuICAgICAgICAvLyBhc3N1bWVzIHdlJ3JlIGFscmVhZHkgYmFjayBpbiBhIHpvbmVcbiAgICAgICAgLy8gdGhleSBwdWxsZWQgZG93biBmYXIgZW5vdWdoLCBzbyBpdCdzIHJlYWR5IHRvIHJlZnJlc2hcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDggLyogUmVmcmVzaGluZyAqLztcbiAgICAgICAgLy8gcGxhY2UgdGhlIGNvbnRlbnQgaW4gYSBoYW5nb3V0IHBvc2l0aW9uIHdoaWxlIGl0IHRoaW5rc1xuICAgICAgICB0aGlzLnNldENzcyh0aGlzLnB1bGxNaW4sIHRoaXMuc25hcGJhY2tEdXJhdGlvbiwgdHJ1ZSwgJycpO1xuICAgICAgICAvLyBlbWl0IFwicmVmcmVzaFwiIGJlY2F1c2UgaXQgd2FzIHB1bGxlZCBkb3duIGZhciBlbm91Z2hcbiAgICAgICAgLy8gYW5kIHRoZXkgbGV0IGdvIHRvIGJlZ2luIHJlZnJlc2hpbmdcbiAgICAgICAgdGhpcy5pb25SZWZyZXNoLmVtaXQoe1xuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGUuYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2Uoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIC8vIGNyZWF0ZSBmYWxsYmFjayB0aW1lciBpbmNhc2Ugc29tZXRoaW5nIGdvZXMgd3Jvbmcgd2l0aCB0cmFuc2l0aW9uRW5kIGV2ZW50XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogSW5hY3RpdmUgKi87XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGlkU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3NzKDAsICcwbXMnLCBmYWxzZSwgJycpO1xuICAgICAgICB9LCA2MDApO1xuICAgICAgICAvLyByZXNldCBzZXQgdGhlIHN0eWxlcyBvbiB0aGUgc2Nyb2xsIGVsZW1lbnRcbiAgICAgICAgLy8gc2V0IHRoYXQgdGhlIHJlZnJlc2ggaXMgYWN0aXZlbHkgY2FuY2VsbGluZy9jb21wbGV0aW5nXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRDc3MoMCwgdGhpcy5jbG9zZUR1cmF0aW9uLCB0cnVlLCBkZWxheSk7XG4gICAgICAgIC8vIFRPRE86IHN0b3AgZ2VzdHVyZVxuICAgIH1cbiAgICBzZXRDc3MoeSwgZHVyYXRpb24sIG92ZXJmbG93VmlzaWJsZSwgZGVsYXkpIHtcbiAgICAgICAgdGhpcy5hcHBsaWVkU3R5bGVzID0gKHkgPiAwKTtcbiAgICAgICAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLnNjcm9sbEVsLnN0eWxlO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9ICgoeSA+IDApID8gYHRyYW5zbGF0ZVkoJHt5fXB4KSB0cmFuc2xhdGVaKDBweClgIDogJ3RyYW5zbGF0ZVooMHB4KScpO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGRlbGF5O1xuICAgICAgICAgICAgICAgIHN0eWxlLm92ZXJmbG93ID0gKG92ZXJmbG93VmlzaWJsZSA/ICdoaWRkZW4nIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgc2xvdDogXCJmaXhlZFwiLCBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBbYHJlZnJlc2hlci0ke21vZGV9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgJ3JlZnJlc2hlci1hY3RpdmUnOiB0aGlzLnN0YXRlICE9PSAxIC8qIEluYWN0aXZlICovLFxuICAgICAgICAgICAgICAgICdyZWZyZXNoZXItcHVsbGluZyc6IHRoaXMuc3RhdGUgPT09IDIgLyogUHVsbGluZyAqLyxcbiAgICAgICAgICAgICAgICAncmVmcmVzaGVyLXJlYWR5JzogdGhpcy5zdGF0ZSA9PT0gNCAvKiBSZWFkeSAqLyxcbiAgICAgICAgICAgICAgICAncmVmcmVzaGVyLXJlZnJlc2hpbmcnOiB0aGlzLnN0YXRlID09PSA4IC8qIFJlZnJlc2hpbmcgKi8sXG4gICAgICAgICAgICAgICAgJ3JlZnJlc2hlci1jYW5jZWxsaW5nJzogdGhpcy5zdGF0ZSA9PT0gMTYgLyogQ2FuY2VsbGluZyAqLyxcbiAgICAgICAgICAgICAgICAncmVmcmVzaGVyLWNvbXBsZXRpbmcnOiB0aGlzLnN0YXRlID09PSAzMiAvKiBDb21wbGV0aW5nICovXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcImlvbi1yZWZyZXNoZXJ7bGVmdDowO3RvcDowO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo2MHB4O3otaW5kZXg6LTF9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1yZWZyZXNoZXIsW2Rpcj1ydGxdIGlvbi1yZWZyZXNoZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLWFjdGl2ZXtkaXNwbGF5OmJsb2NrfWlvbi1yZWZyZXNoZXItY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlfS5yZWZyZXNoZXItcHVsbGluZywucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpub25lO3dpZHRoOjEwMCV9LnJlZnJlc2hlci1wdWxsaW5nLWljb24sLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246LjJzO3RyYW5zaXRpb246LjJzO2ZvbnQtc2l6ZTozMHB4O3RleHQtYWxpZ246Y2VudGVyfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmVmcmVzaGVyLXB1bGxpbmctaWNvbiw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb24sW2Rpcj1ydGxdIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLFtkaXI9cnRsXSAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9LnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7Zm9udC1zaXplOjE2cHg7dGV4dC1hbGlnbjpjZW50ZXJ9LnJlZnJlc2hlci1wdWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmcsLnJlZnJlc2hlci1yZWFkeSBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1yZWFkeSBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5yZWZyZXNoZXItY2FuY2VsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1jYW5jZWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9LnJlZnJlc2hlci1jb21wbGV0aW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLWNvbXBsZXRpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0ucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXB1bGxpbmctaWNvbiwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbiwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dHtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKX0ucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY3Jlc2NlbnQgY2lyY2xlLC5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1saW5lcy1pb3MgbGluZSwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItbGluZXMtc21hbGwtaW9zIGxpbmV7c3Ryb2tlOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApfS5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1idWJibGVzIGNpcmNsZSwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY2lyY2xlcyBjaXJjbGUsLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWRvdHMgY2lyY2xle2ZpbGw6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCl9XCI7IH1cbn07XG5cbmNvbnN0IFJlZnJlc2hlckNvbnRlbnQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHVsbGluZ0ljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wdWxsaW5nSWNvbiA9IGNvbmZpZy5nZXQoJ3JlZnJlc2hpbmdJY29uJywgJ2Fycm93LWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWZyZXNoaW5nU3Bpbm5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaGluZ1NwaW5uZXIgPSBjb25maWcuZ2V0KCdyZWZyZXNoaW5nU3Bpbm5lcicsIGNvbmZpZy5nZXQoJ3NwaW5uZXInLCBtb2RlID09PSAnaW9zJyA/ICdsaW5lcycgOiAnY3Jlc2NlbnQnKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmVmcmVzaGVyLXB1bGxpbmdcIiB9LCB0aGlzLnB1bGxpbmdJY29uICYmXG4gICAgICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmVmcmVzaGVyLXB1bGxpbmctaWNvblwiIH0sIGgoXCJpb24taWNvblwiLCB7IGljb246IHRoaXMucHVsbGluZ0ljb24sIGxhenk6IGZhbHNlIH0pKSwgdGhpcy5wdWxsaW5nVGV4dCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1wdWxsaW5nLXRleHRcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLnB1bGxpbmdUZXh0KSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZ1wiIH0sIHRoaXMucmVmcmVzaGluZ1NwaW5uZXIgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy1pY29uXCIgfSwgaChcImlvbi1zcGlubmVyXCIsIHsgbmFtZTogdGhpcy5yZWZyZXNoaW5nU3Bpbm5lciB9KSksIHRoaXMucmVmcmVzaGluZ1RleHQgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0XCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5yZWZyZXNoaW5nVGV4dCkgfSkpKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgUmVmcmVzaGVyIGFzIGlvbl9yZWZyZXNoZXIsIFJlZnJlc2hlckNvbnRlbnQgYXMgaW9uX3JlZnJlc2hlcl9jb250ZW50IH07XG4iXSwic291cmNlUm9vdCI6IiJ9