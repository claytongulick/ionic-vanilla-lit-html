(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js ***!
  \******************************************************************************/
/*! exports provided: ion_infinite_scroll, ion_infinite_scroll_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll", function() { return InfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll_content", function() { return InfiniteScrollContent; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3476b023.js */ "../node_modules/@ionic/core/dist/esm/index-3476b023.js");




const InfiniteScroll = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.thrPx = 0;
        this.thrPc = 0;
        this.didFire = false;
        this.isBusy = false;
        this.isLoading = false;
        /**
         * The threshold distance from the bottom
         * of the content to call the `infinite` output event when scrolled.
         * The threshold value can be either a percent, or
         * in pixels. For example, use the value of `10%` for the `infinite`
         * output event to get called when the user has scrolled 10%
         * from the bottom of the page. Use the value `100px` when the
         * scroll is within 100 pixels from the bottom of the page.
         */
        this.threshold = '15%';
        /**
         * If `true`, the infinite scroll will be hidden and scroll event listeners
         * will be removed.
         *
         * Set this to true to disable the infinite scroll from actively
         * trying to receive new data while scrolling. This is useful
         * when it is known that there is no more data that can be added, and
         * the infinite scroll is no longer needed.
         */
        this.disabled = false;
        /**
         * The position of the infinite scroll element.
         * The value can be either `top` or `bottom`.
         */
        this.position = 'bottom';
        this.onScroll = () => {
            const scrollEl = this.scrollEl;
            if (!scrollEl || !this.canStart()) {
                return 1;
            }
            const infiniteHeight = this.el.offsetHeight;
            if (infiniteHeight === 0) {
                // if there is no height of this element then do nothing
                return 2;
            }
            const scrollTop = scrollEl.scrollTop;
            const scrollHeight = scrollEl.scrollHeight;
            const height = scrollEl.offsetHeight;
            const threshold = this.thrPc !== 0 ? (height * this.thrPc) : this.thrPx;
            const distanceFromInfinite = (this.position === 'bottom')
                ? scrollHeight - infiniteHeight - scrollTop - threshold - height
                : scrollTop - infiniteHeight - threshold;
            if (distanceFromInfinite < 0) {
                if (!this.didFire) {
                    this.isLoading = true;
                    this.didFire = true;
                    this.ionInfinite.emit();
                    return 3;
                }
            }
            else {
                this.didFire = false;
            }
            return 4;
        };
        this.ionInfinite = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInfinite", 7);
    }
    thresholdChanged() {
        const val = this.threshold;
        if (val.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(val) / 100);
        }
        else {
            this.thrPx = parseFloat(val);
            this.thrPc = 0;
        }
    }
    disabledChanged() {
        const disabled = this.disabled;
        if (disabled) {
            this.isLoading = false;
            this.isBusy = false;
        }
        this.enableScrollEvents(!disabled);
    }
    async connectedCallback() {
        const contentEl = this.el.closest('ion-content');
        if (!contentEl) {
            console.error('<ion-infinite-scroll> must be used inside an <ion-content>');
            return;
        }
        this.scrollEl = await contentEl.getScrollElement();
        this.thresholdChanged();
        this.disabledChanged();
        if (this.position === 'top') {
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
                if (this.scrollEl) {
                    this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
                }
            });
        }
    }
    disconnectedCallback() {
        this.enableScrollEvents(false);
        this.scrollEl = undefined;
    }
    /**
     * Call `complete()` within the `ionInfinite` output event handler when
     * your async operation has completed. For example, the `loading`
     * state is while the app is performing an asynchronous operation,
     * such as receiving more data from an AJAX request to add more items
     * to a data list. Once the data has been received and UI updated, you
     * then call this method to signify that the loading has completed.
     * This method will change the infinite scroll's state from `loading`
     * to `enabled`.
     */
    async complete() {
        const scrollEl = this.scrollEl;
        if (!this.isLoading || !scrollEl) {
            return;
        }
        this.isLoading = false;
        if (this.position === 'top') {
            /**
             * New content is being added at the top, but the scrollTop position stays the same,
             * which causes a scroll jump visually. This algorithm makes sure to prevent this.
             * (Frame 1)
             *    - complete() is called, but the UI hasn't had time to update yet.
             *    - Save the current content dimensions.
             *    - Wait for the next frame using _dom.read, so the UI will be updated.
             * (Frame 2)
             *    - Read the new content dimensions.
             *    - Calculate the height difference and the new scroll position.
             *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
             * (Still frame 2, if I'm correct)
             *    - Change the scroll position (= visually maintain the scroll position).
             *    - Change the state to re-enable the InfiniteScroll.
             *    - This should be after changing the scroll position, or it could
             *    cause the InfiniteScroll to be triggered again immediately.
             * (Frame 3)
             *    Done.
             */
            this.isBusy = true;
            // ******** DOM READ ****************
            // Save the current content dimensions before the UI updates
            const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
            // ******** DOM READ ****************
            requestAnimationFrame(() => {
                Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
                    // UI has updated, save the new content dimensions
                    const scrollHeight = scrollEl.scrollHeight;
                    // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
                    const newScrollTop = scrollHeight - prev;
                    // ******** DOM WRITE ****************
                    requestAnimationFrame(() => {
                        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
                            scrollEl.scrollTop = newScrollTop;
                            this.isBusy = false;
                        });
                    });
                });
            });
        }
    }
    canStart() {
        return (!this.disabled &&
            !this.isBusy &&
            !!this.scrollEl &&
            !this.isLoading);
    }
    enableScrollEvents(shouldListen) {
        if (this.scrollEl) {
            if (shouldListen) {
                this.scrollEl.addEventListener('scroll', this.onScroll);
            }
            else {
                this.scrollEl.removeEventListener('scroll', this.onScroll);
            }
        }
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const disabled = this.disabled;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                'infinite-scroll-loading': this.isLoading,
                'infinite-scroll-enabled': !disabled
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "threshold": ["thresholdChanged"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"; }
};

const InfiniteScrollContent = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentDidLoad() {
        if (this.loadingSpinner === undefined) {
            const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            this.loadingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('infiniteLoadingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                // Used internally for styling
                [`infinite-scroll-content-${mode}`]: true
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading" }, this.loadingSpinner && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading-spinner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.loadingText) })))));
    }
    static get style() { return "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"; }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWluZmluaXRlLXNjcm9sbF8yLW1kLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7QUMvR2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFxQywrT0FBK08sc0NBQXNDLHVPQUF1TyxvQ0FBb0MsRUFBRTtBQUM1N0M7O0FBRXVHIiwiZmlsZSI6IjM3XFxjaHVua3NcXDM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xyXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBzYW5pdGl6ZURPTVN0cmluZyA9ICh1bnRydXN0ZWRTdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcclxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcclxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xyXG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcclxuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChibG9ja2VkVGFnID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxyXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcclxuICAgICAgICBjb25zdCBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcclxuICAgICAgICBjb25zdCBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxyXG4gICAgICAgIGNvbnN0IGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcclxuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cclxuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xyXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XHJcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcclxuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXHJcbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXHJcbiAqL1xyXG5jb25zdCBnZXRFbGVtZW50Q2hpbGRyZW4gPSAoZWwpID0+IHtcclxuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XHJcbn07XHJcbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcclxuY29uc3QgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuXG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIHcgYXMgd3JpdGVUYXNrLCBmIGFzIHJlYWRUYXNrLCBkIGFzIGdldElvbk1vZGUsIGgsIGUgYXMgZ2V0RWxlbWVudCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCB7IGIgYXMgY29uZmlnIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xuXG5jb25zdCBJbmZpbml0ZVNjcm9sbCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMudGhyUHggPSAwO1xuICAgICAgICB0aGlzLnRoclBjID0gMDtcbiAgICAgICAgdGhpcy5kaWRGaXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGhyZXNob2xkIGRpc3RhbmNlIGZyb20gdGhlIGJvdHRvbVxuICAgICAgICAgKiBvZiB0aGUgY29udGVudCB0byBjYWxsIHRoZSBgaW5maW5pdGVgIG91dHB1dCBldmVudCB3aGVuIHNjcm9sbGVkLlxuICAgICAgICAgKiBUaGUgdGhyZXNob2xkIHZhbHVlIGNhbiBiZSBlaXRoZXIgYSBwZXJjZW50LCBvclxuICAgICAgICAgKiBpbiBwaXhlbHMuIEZvciBleGFtcGxlLCB1c2UgdGhlIHZhbHVlIG9mIGAxMCVgIGZvciB0aGUgYGluZmluaXRlYFxuICAgICAgICAgKiBvdXRwdXQgZXZlbnQgdG8gZ2V0IGNhbGxlZCB3aGVuIHRoZSB1c2VyIGhhcyBzY3JvbGxlZCAxMCVcbiAgICAgICAgICogZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLiBVc2UgdGhlIHZhbHVlIGAxMDBweGAgd2hlbiB0aGVcbiAgICAgICAgICogc2Nyb2xsIGlzIHdpdGhpbiAxMDAgcGl4ZWxzIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gJzE1JSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbmZpbml0ZSBzY3JvbGwgd2lsbCBiZSBoaWRkZW4gYW5kIHNjcm9sbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICogd2lsbCBiZSByZW1vdmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGluZmluaXRlIHNjcm9sbCBmcm9tIGFjdGl2ZWx5XG4gICAgICAgICAqIHRyeWluZyB0byByZWNlaXZlIG5ldyBkYXRhIHdoaWxlIHNjcm9sbGluZy4gVGhpcyBpcyB1c2VmdWxcbiAgICAgICAgICogd2hlbiBpdCBpcyBrbm93biB0aGF0IHRoZXJlIGlzIG5vIG1vcmUgZGF0YSB0aGF0IGNhbiBiZSBhZGRlZCwgYW5kXG4gICAgICAgICAqIHRoZSBpbmZpbml0ZSBzY3JvbGwgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgaW5maW5pdGUgc2Nyb2xsIGVsZW1lbnQuXG4gICAgICAgICAqIFRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGB0b3BgIG9yIGBib3R0b21gLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICB0aGlzLm9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgICAgICAgICAgaWYgKCFzY3JvbGxFbCB8fCAhdGhpcy5jYW5TdGFydCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbmZpbml0ZUhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGluZmluaXRlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gaGVpZ2h0IG9mIHRoaXMgZWxlbWVudCB0aGVuIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHNjcm9sbEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMudGhyUGMgIT09IDAgPyAoaGVpZ2h0ICogdGhpcy50aHJQYykgOiB0aGlzLnRoclB4O1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VGcm9tSW5maW5pdGUgPSAodGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScpXG4gICAgICAgICAgICAgICAgPyBzY3JvbGxIZWlnaHQgLSBpbmZpbml0ZUhlaWdodCAtIHNjcm9sbFRvcCAtIHRocmVzaG9sZCAtIGhlaWdodFxuICAgICAgICAgICAgICAgIDogc2Nyb2xsVG9wIC0gaW5maW5pdGVIZWlnaHQgLSB0aHJlc2hvbGQ7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VGcm9tSW5maW5pdGUgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpZEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpZEZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlvbkluZmluaXRlLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWRGaXJlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25JbmZpbml0ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5maW5pdGVcIiwgNyk7XG4gICAgfVxuICAgIHRocmVzaG9sZENoYW5nZWQoKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMudGhyZXNob2xkO1xuICAgICAgICBpZiAodmFsLmxhc3RJbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy50aHJQeCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRoclBjID0gKHBhcnNlRmxvYXQodmFsKSAvIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRoclB4ID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgICAgICAgdGhpcy50aHJQYyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVTY3JvbGxFdmVudHMoIWRpc2FibGVkKTtcbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFjb250ZW50RWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJzxpb24taW5maW5pdGUtc2Nyb2xsPiBtdXN0IGJlIHVzZWQgaW5zaWRlIGFuIDxpb24tY29udGVudD4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbEVsID0gYXdhaXQgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy50aHJlc2hvbGRDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5zY3JvbGxFbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsRXZlbnRzKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxFbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbCBgY29tcGxldGUoKWAgd2l0aGluIHRoZSBgaW9uSW5maW5pdGVgIG91dHB1dCBldmVudCBoYW5kbGVyIHdoZW5cbiAgICAgKiB5b3VyIGFzeW5jIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLiBGb3IgZXhhbXBsZSwgdGhlIGBsb2FkaW5nYFxuICAgICAqIHN0YXRlIGlzIHdoaWxlIHRoZSBhcHAgaXMgcGVyZm9ybWluZyBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLFxuICAgICAqIHN1Y2ggYXMgcmVjZWl2aW5nIG1vcmUgZGF0YSBmcm9tIGFuIEFKQVggcmVxdWVzdCB0byBhZGQgbW9yZSBpdGVtc1xuICAgICAqIHRvIGEgZGF0YSBsaXN0LiBPbmNlIHRoZSBkYXRhIGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBVSSB1cGRhdGVkLCB5b3VcbiAgICAgKiB0aGVuIGNhbGwgdGhpcyBtZXRob2QgdG8gc2lnbmlmeSB0aGF0IHRoZSBsb2FkaW5nIGhhcyBjb21wbGV0ZWQuXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGluZmluaXRlIHNjcm9sbCdzIHN0YXRlIGZyb20gYGxvYWRpbmdgXG4gICAgICogdG8gYGVuYWJsZWRgLlxuICAgICAqL1xuICAgIGFzeW5jIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxFbCA9IHRoaXMuc2Nyb2xsRWw7XG4gICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmcgfHwgIXNjcm9sbEVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE5ldyBjb250ZW50IGlzIGJlaW5nIGFkZGVkIGF0IHRoZSB0b3AsIGJ1dCB0aGUgc2Nyb2xsVG9wIHBvc2l0aW9uIHN0YXlzIHRoZSBzYW1lLFxuICAgICAgICAgICAgICogd2hpY2ggY2F1c2VzIGEgc2Nyb2xsIGp1bXAgdmlzdWFsbHkuIFRoaXMgYWxnb3JpdGhtIG1ha2VzIHN1cmUgdG8gcHJldmVudCB0aGlzLlxuICAgICAgICAgICAgICogKEZyYW1lIDEpXG4gICAgICAgICAgICAgKiAgICAtIGNvbXBsZXRlKCkgaXMgY2FsbGVkLCBidXQgdGhlIFVJIGhhc24ndCBoYWQgdGltZSB0byB1cGRhdGUgeWV0LlxuICAgICAgICAgICAgICogICAgLSBTYXZlIHRoZSBjdXJyZW50IGNvbnRlbnQgZGltZW5zaW9ucy5cbiAgICAgICAgICAgICAqICAgIC0gV2FpdCBmb3IgdGhlIG5leHQgZnJhbWUgdXNpbmcgX2RvbS5yZWFkLCBzbyB0aGUgVUkgd2lsbCBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgICogKEZyYW1lIDIpXG4gICAgICAgICAgICAgKiAgICAtIFJlYWQgdGhlIG5ldyBjb250ZW50IGRpbWVuc2lvbnMuXG4gICAgICAgICAgICAgKiAgICAtIENhbGN1bGF0ZSB0aGUgaGVpZ2h0IGRpZmZlcmVuY2UgYW5kIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICogICAgLSBEZWxheSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGNoYW5nZSB1bnRpbCBvdGhlciBwb3NzaWJsZSBkb20gcmVhZHMgYXJlIGRvbmUgdXNpbmcgX2RvbS53cml0ZSB0byBiZSBwZXJmb3JtYW50LlxuICAgICAgICAgICAgICogKFN0aWxsIGZyYW1lIDIsIGlmIEknbSBjb3JyZWN0KVxuICAgICAgICAgICAgICogICAgLSBDaGFuZ2UgdGhlIHNjcm9sbCBwb3NpdGlvbiAoPSB2aXN1YWxseSBtYWludGFpbiB0aGUgc2Nyb2xsIHBvc2l0aW9uKS5cbiAgICAgICAgICAgICAqICAgIC0gQ2hhbmdlIHRoZSBzdGF0ZSB0byByZS1lbmFibGUgdGhlIEluZmluaXRlU2Nyb2xsLlxuICAgICAgICAgICAgICogICAgLSBUaGlzIHNob3VsZCBiZSBhZnRlciBjaGFuZ2luZyB0aGUgc2Nyb2xsIHBvc2l0aW9uLCBvciBpdCBjb3VsZFxuICAgICAgICAgICAgICogICAgY2F1c2UgdGhlIEluZmluaXRlU2Nyb2xsIHRvIGJlIHRyaWdnZXJlZCBhZ2FpbiBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgICAqIChGcmFtZSAzKVxuICAgICAgICAgICAgICogICAgRG9uZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBjb250ZW50IGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBVSSB1cGRhdGVzXG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWFkVGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVJIGhhcyB1cGRhdGVkLCBzYXZlIHRoZSBuZXcgY29udGVudCBkaW1lbnNpb25zXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgLy8gTmV3IGNvbnRlbnQgd2FzIGFkZGVkIG9uIHRvcCwgc28gdGhlIHNjcm9sbCBwb3NpdGlvbiBzaG91bGQgYmUgY2hhbmdlZCBpbW1lZGlhdGVseSB0byBwcmV2ZW50IGl0IGZyb20ganVtcGluZyBhcm91bmRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0IC0gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYW5TdGFydCgpIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5kaXNhYmxlZCAmJlxuICAgICAgICAgICAgIXRoaXMuaXNCdXN5ICYmXG4gICAgICAgICAgICAhIXRoaXMuc2Nyb2xsRWwgJiZcbiAgICAgICAgICAgICF0aGlzLmlzTG9hZGluZyk7XG4gICAgfVxuICAgIGVuYWJsZVNjcm9sbEV2ZW50cyhzaG91bGRMaXN0ZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRMaXN0ZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpbmZpbml0ZS1zY3JvbGwtbG9hZGluZyc6IHRoaXMuaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICdpbmZpbml0ZS1zY3JvbGwtZW5hYmxlZCc6ICFkaXNhYmxlZFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcInRocmVzaG9sZFwiOiBbXCJ0aHJlc2hvbGRDaGFuZ2VkXCJdLFxuICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJpb24taW5maW5pdGUtc2Nyb2xse2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlfS5pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZHtkaXNwbGF5OmJsb2NrfVwiOyB9XG59O1xuXG5jb25zdCBJbmZpbml0ZVNjcm9sbENvbnRlbnQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nU3Bpbm5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NwaW5uZXIgPSBjb25maWcuZ2V0KCdpbmZpbml0ZUxvYWRpbmdTcGlubmVyJywgY29uZmlnLmdldCgnc3Bpbm5lcicsIG1vZGUgPT09ICdpb3MnID8gJ2xpbmVzJyA6ICdjcmVzY2VudCcpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBbYGluZmluaXRlLXNjcm9sbC1jb250ZW50LSR7bW9kZX1gXTogdHJ1ZVxuICAgICAgICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5maW5pdGUtbG9hZGluZ1wiIH0sIHRoaXMubG9hZGluZ1NwaW5uZXIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXJcIiB9LCBoKFwiaW9uLXNwaW5uZXJcIiwgeyBuYW1lOiB0aGlzLmxvYWRpbmdTcGlubmVyIH0pKSksIHRoaXMubG9hZGluZ1RleHQgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbmZpbml0ZS1sb2FkaW5nLXRleHRcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLmxvYWRpbmdUZXh0KSB9KSkpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcImlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21pbi1oZWlnaHQ6ODRweDt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmluZmluaXRlLWxvYWRpbmd7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTozMnB4O2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlfS5pbmZpbml0ZS1sb2FkaW5nLXRleHR7bWFyZ2luLWxlZnQ6MzJweDttYXJnaW4tcmlnaHQ6MzJweDttYXJnaW4tdG9wOjRweDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5pbmZpbml0ZS1sb2FkaW5nLXRleHR7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjMycHg7bWFyZ2luLWlubGluZS1zdGFydDozMnB4Oy13ZWJraXQtbWFyZ2luLWVuZDozMnB4O21hcmdpbi1pbmxpbmUtZW5kOjMycHh9fS5pbmZpbml0ZS1zY3JvbGwtbG9hZGluZyBpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQ+LmluZmluaXRlLWxvYWRpbmd7ZGlzcGxheTpibG9ja30uaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtbWQgLmluZmluaXRlLWxvYWRpbmctdGV4dHtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nil9LmluZmluaXRlLXNjcm9sbC1jb250ZW50LW1kIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItY3Jlc2NlbnQgY2lyY2xlLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWxpbmVzLW1kIGxpbmUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LW1kIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItbGluZXMtc21hbGwtbWQgbGluZXtzdHJva2U6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCM2NjYpfS5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWJ1YmJsZXMgY2lyY2xlLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWNpcmNsZXMgY2lyY2xlLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWRvdHMgY2lyY2xle2ZpbGw6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCM2NjYpfVwiOyB9XG59O1xuXG5leHBvcnQgeyBJbmZpbml0ZVNjcm9sbCBhcyBpb25faW5maW5pdGVfc2Nyb2xsLCBJbmZpbml0ZVNjcm9sbENvbnRlbnQgYXMgaW9uX2luZmluaXRlX3Njcm9sbF9jb250ZW50IH07XG4iXSwic291cmNlUm9vdCI6IiJ9