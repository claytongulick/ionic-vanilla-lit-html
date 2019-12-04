(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js ***!
  \*******************************************************************************/
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
    static get style() { return "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"; }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWluZmluaXRlLXNjcm9sbF8yLWlvcy5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7O0FDL0dsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEo7QUFDekc7QUFDVTs7QUFFN0Q7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyREFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFTO0FBQ2pDO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0I7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLDZCQUE2QixhQUFhLFdBQVcseUJBQXlCLGNBQWMsRUFBRTtBQUN0SDs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFVO0FBQ25DLGtDQUFrQyxxREFBTSwrQkFBK0IscURBQU07QUFDN0U7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekI7QUFDQTtBQUNBLDRDQUE0QyxLQUFLO0FBQ2pELGFBQWEsRUFBRSxFQUFFLDJEQUFDLFNBQVMsNEJBQTRCLDBCQUEwQiwyREFBQyxTQUFTLG9DQUFvQyxFQUFFLDJEQUFDLGlCQUFpQiw0QkFBNEIsMEJBQTBCLDJEQUFDLFNBQVMsNENBQTRDLDREQUFpQixvQkFBb0I7QUFDcFM7QUFDQSx3QkFBd0IscUNBQXFDLG9CQUFvQixhQUFhLDBCQUEwQixzQkFBc0IscUJBQXFCLHVCQUF1QixnQkFBZ0Isa0JBQWtCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixrQkFBa0IsY0FBYyxlQUFlLGFBQWEsbUJBQW1CLGFBQWEsV0FBVyx1QkFBdUIsaUJBQWlCLGtCQUFrQixlQUFlLGdCQUFnQiw2RkFBNkYsdUJBQXVCLGtCQUFrQixtQkFBbUIsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLHVFQUF1RSxjQUFjLG9EQUFvRCxxQ0FBcUMsb1BBQW9QLHNDQUFzQywwT0FBME8sb0NBQW9DLEVBQUU7QUFDcjhDOztBQUV1RyIsImZpbGUiOiIzNlxcY2h1bmtzXFwzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEb2VzIGEgc2ltcGxlIHNhbml0aXphdGlvbiBvZiBhbGwgZWxlbWVudHNcclxuICogaW4gYW4gdW50cnVzdGVkIHN0cmluZ1xyXG4gKi9cclxuY29uc3Qgc2FuaXRpemVET01TdHJpbmcgPSAodW50cnVzdGVkU3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdW50cnVzdGVkU3RyaW5nICE9PSAnc3RyaW5nJyB8fCB1bnRydXN0ZWRTdHJpbmcgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bnRydXN0ZWRTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XHJcbiAgICAgICAgICogc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiBET00sXHJcbiAgICAgICAgICogY3JlYXRlIGEgZGl2IHRvIGRvIG91ciB3b3JrIGluXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCB3b3JraW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZCh3b3JraW5nRGl2KTtcclxuICAgICAgICB3b3JraW5nRGl2LmlubmVySFRNTCA9IHVudHJ1c3RlZFN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmUgYW55IGVsZW1lbnRzXHJcbiAgICAgICAgICogdGhhdCBhcmUgYmxvY2tlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2NrZWRUYWdzLmZvckVhY2goYmxvY2tlZFRhZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldEVsZW1lbnRzVG9SZW1vdmUgPSBkb2N1bWVudEZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYmxvY2tlZFRhZyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnRJbmRleCA9IGdldEVsZW1lbnRzVG9SZW1vdmUubGVuZ3RoIC0gMTsgZWxlbWVudEluZGV4ID49IDA7IGVsZW1lbnRJbmRleC0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudHNUb1JlbW92ZVtlbGVtZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50RnJhZ21lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdlIHN0aWxsIG5lZWQgdG8gc2FuaXRpemVcclxuICAgICAgICAgICAgICAgICAqIHRoZSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAqIGFzIHRoZXkgYXJlIGxlZnQgYmVoaW5kXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2NoaWxkSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdvIHRocm91Z2ggcmVtYWluaW5nIGVsZW1lbnRzIGFuZCByZW1vdmVcclxuICAgICAgICAgKiBub24tYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gSUUgZG9lcyBub3Qgc3VwcG9ydCAuY2hpbGRyZW4gb24gZG9jdW1lbnQgZnJhZ21lbnRzLCBvbmx5IC5jaGlsZE5vZGVzXHJcbiAgICAgICAgY29uc3QgZGZDaGlsZHJlbiA9IGdldEVsZW1lbnRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50KTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGRmQ2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcclxuICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGRmQ2hpbGRyZW5bY2hpbGRJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBcHBlbmQgZG9jdW1lbnQgZnJhZ21lbnQgdG8gZGl2XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmcmFnbWVudERpdi5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcclxuICAgICAgICAvLyBGaXJzdCBjaGlsZCBpcyBhbHdheXMgdGhlIGRpdiB3ZSBkaWQgb3VyIHdvcmsgaW5cclxuICAgICAgICBjb25zdCBnZXRJbm5lckRpdiA9IGZyYWdtZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xyXG4gICAgICAgIHJldHVybiAoZ2V0SW5uZXJEaXYgIT09IG51bGwpID8gZ2V0SW5uZXJEaXYuaW5uZXJIVE1MIDogZnJhZ21lbnREaXYuaW5uZXJIVE1MO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBDbGVhbiB1cCBjdXJyZW50IGVsZW1lbnQgYmFzZWQgb24gYWxsb3dlZCBhdHRyaWJ1dGVzXHJcbiAqIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IGRpZyBkb3duIGludG8gYW55IGNoaWxkIGVsZW1lbnRzIHRvXHJcbiAqIGNsZWFuIHRob3NlIHVwIGFzIHdlbGxcclxuICovXHJcbmNvbnN0IHNhbml0aXplRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyBJRSB1c2VzIGNoaWxkTm9kZXMsIHNvIGlnbm9yZSBub2RlcyB0aGF0IGFyZSBub3QgZWxlbWVudHNcclxuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oaSk7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xyXG4gICAgICAgIC8vIHJlbW92ZSBub24tYWxsb3dlZCBhdHRyaWJzXHJcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2xlYW4gdXAgYW55IGFsbG93ZWQgYXR0cmlic1xyXG4gICAgICAgIC8vIHRoYXQgYXR0ZW1wdCB0byBkbyBhbnkgSlMgZnVubnktYnVzaW5lc3NcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgIT0gbnVsbCAmJiBhdHRyaWJ1dGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdqYXZhc2NyaXB0OicpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2FuaXRpemUgYW55IG5lc3RlZCBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tpXSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBJRSBkb2Vzbid0IGFsd2F5cyBzdXBwb3J0IC5jaGlsZHJlblxyXG4gKiBzbyB3ZSByZXZlcnQgdG8gLmNoaWxkTm9kZXMgaW5zdGVhZFxyXG4gKi9cclxuY29uc3QgZ2V0RWxlbWVudENoaWxkcmVuID0gKGVsKSA9PiB7XHJcbiAgICByZXR1cm4gKGVsLmNoaWxkcmVuICE9IG51bGwpID8gZWwuY2hpbGRyZW4gOiBlbC5jaGlsZE5vZGVzO1xyXG59O1xyXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFsnY2xhc3MnLCAnaWQnLCAnaHJlZicsICdzcmMnLCAnbmFtZScsICdzbG90J107XHJcbmNvbnN0IGJsb2NrZWRUYWdzID0gWydzY3JpcHQnLCAnc3R5bGUnLCAnaWZyYW1lJywgJ21ldGEnLCAnbGluaycsICdvYmplY3QnLCAnZW1iZWQnXTtcblxuZXhwb3J0IHsgc2FuaXRpemVET01TdHJpbmcgYXMgcyB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCB3IGFzIHdyaXRlVGFzaywgZiBhcyByZWFkVGFzaywgZCBhcyBnZXRJb25Nb2RlLCBoLCBlIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IHMgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2luZGV4LTM0NzZiMDIzLmpzJztcblxuY29uc3QgSW5maW5pdGVTY3JvbGwgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnRoclB4ID0gMDtcbiAgICAgICAgdGhpcy50aHJQYyA9IDA7XG4gICAgICAgIHRoaXMuZGlkRmlyZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRocmVzaG9sZCBkaXN0YW5jZSBmcm9tIHRoZSBib3R0b21cbiAgICAgICAgICogb2YgdGhlIGNvbnRlbnQgdG8gY2FsbCB0aGUgYGluZmluaXRlYCBvdXRwdXQgZXZlbnQgd2hlbiBzY3JvbGxlZC5cbiAgICAgICAgICogVGhlIHRocmVzaG9sZCB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgcGVyY2VudCwgb3JcbiAgICAgICAgICogaW4gcGl4ZWxzLiBGb3IgZXhhbXBsZSwgdXNlIHRoZSB2YWx1ZSBvZiBgMTAlYCBmb3IgdGhlIGBpbmZpbml0ZWBcbiAgICAgICAgICogb3V0cHV0IGV2ZW50IHRvIGdldCBjYWxsZWQgd2hlbiB0aGUgdXNlciBoYXMgc2Nyb2xsZWQgMTAlXG4gICAgICAgICAqIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS4gVXNlIHRoZSB2YWx1ZSBgMTAwcHhgIHdoZW4gdGhlXG4gICAgICAgICAqIHNjcm9sbCBpcyB3aXRoaW4gMTAwIHBpeGVscyBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRocmVzaG9sZCA9ICcxNSUnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgaW5maW5pdGUgc2Nyb2xsIHdpbGwgYmUgaGlkZGVuIGFuZCBzY3JvbGwgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAqIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBpbmZpbml0ZSBzY3JvbGwgZnJvbSBhY3RpdmVseVxuICAgICAgICAgKiB0cnlpbmcgdG8gcmVjZWl2ZSBuZXcgZGF0YSB3aGlsZSBzY3JvbGxpbmcuIFRoaXMgaXMgdXNlZnVsXG4gICAgICAgICAqIHdoZW4gaXQgaXMga25vd24gdGhhdCB0aGVyZSBpcyBubyBtb3JlIGRhdGEgdGhhdCBjYW4gYmUgYWRkZWQsIGFuZFxuICAgICAgICAgKiB0aGUgaW5maW5pdGUgc2Nyb2xsIGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGluZmluaXRlIHNjcm9sbCBlbGVtZW50LlxuICAgICAgICAgKiBUaGUgdmFsdWUgY2FuIGJlIGVpdGhlciBgdG9wYCBvciBgYm90dG9tYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgICAgdGhpcy5vblNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEVsID0gdGhpcy5zY3JvbGxFbDtcbiAgICAgICAgICAgIGlmICghc2Nyb2xsRWwgfHwgIXRoaXMuY2FuU3RhcnQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5maW5pdGVIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGlmIChpbmZpbml0ZUhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGhlaWdodCBvZiB0aGlzIGVsZW1lbnQgdGhlbiBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxFbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBzY3JvbGxFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnRoclBjICE9PSAwID8gKGhlaWdodCAqIHRoaXMudGhyUGMpIDogdGhpcy50aHJQeDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlRnJvbUluZmluaXRlID0gKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKVxuICAgICAgICAgICAgICAgID8gc2Nyb2xsSGVpZ2h0IC0gaW5maW5pdGVIZWlnaHQgLSBzY3JvbGxUb3AgLSB0aHJlc2hvbGQgLSBoZWlnaHRcbiAgICAgICAgICAgICAgICA6IHNjcm9sbFRvcCAtIGluZmluaXRlSGVpZ2h0IC0gdGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlRnJvbUluZmluaXRlIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kaWRGaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWRGaXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pb25JbmZpbml0ZS5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlkRmlyZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uSW5maW5pdGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkluZmluaXRlXCIsIDcpO1xuICAgIH1cbiAgICB0aHJlc2hvbGRDaGFuZ2VkKCkge1xuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnRocmVzaG9sZDtcbiAgICAgICAgaWYgKHZhbC5sYXN0SW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGhyUHggPSAwO1xuICAgICAgICAgICAgdGhpcy50aHJQYyA9IChwYXJzZUZsb2F0KHZhbCkgLyAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJQeCA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgIHRoaXMudGhyUGMgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsRXZlbnRzKCFkaXNhYmxlZCk7XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgICAgIGlmICghY29udGVudEVsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCc8aW9uLWluZmluaXRlLXNjcm9sbD4gbXVzdCBiZSB1c2VkIGluc2lkZSBhbiA8aW9uLWNvbnRlbnQ+Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxFbCA9IGF3YWl0IGNvbnRlbnRFbC5nZXRTY3JvbGxFbGVtZW50KCk7XG4gICAgICAgIHRoaXMudGhyZXNob2xkQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHRoaXMuc2Nyb2xsRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmVuYWJsZVNjcm9sbEV2ZW50cyhmYWxzZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGwgYGNvbXBsZXRlKClgIHdpdGhpbiB0aGUgYGlvbkluZmluaXRlYCBvdXRwdXQgZXZlbnQgaGFuZGxlciB3aGVuXG4gICAgICogeW91ciBhc3luYyBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC4gRm9yIGV4YW1wbGUsIHRoZSBgbG9hZGluZ2BcbiAgICAgKiBzdGF0ZSBpcyB3aGlsZSB0aGUgYXBwIGlzIHBlcmZvcm1pbmcgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbixcbiAgICAgKiBzdWNoIGFzIHJlY2VpdmluZyBtb3JlIGRhdGEgZnJvbSBhbiBBSkFYIHJlcXVlc3QgdG8gYWRkIG1vcmUgaXRlbXNcbiAgICAgKiB0byBhIGRhdGEgbGlzdC4gT25jZSB0aGUgZGF0YSBoYXMgYmVlbiByZWNlaXZlZCBhbmQgVUkgdXBkYXRlZCwgeW91XG4gICAgICogdGhlbiBjYWxsIHRoaXMgbWV0aG9kIHRvIHNpZ25pZnkgdGhhdCB0aGUgbG9hZGluZyBoYXMgY29tcGxldGVkLlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgY2hhbmdlIHRoZSBpbmZpbml0ZSBzY3JvbGwncyBzdGF0ZSBmcm9tIGBsb2FkaW5nYFxuICAgICAqIHRvIGBlbmFibGVkYC5cbiAgICAgKi9cbiAgICBhc3luYyBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nIHx8ICFzY3JvbGxFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBOZXcgY29udGVudCBpcyBiZWluZyBhZGRlZCBhdCB0aGUgdG9wLCBidXQgdGhlIHNjcm9sbFRvcCBwb3NpdGlvbiBzdGF5cyB0aGUgc2FtZSxcbiAgICAgICAgICAgICAqIHdoaWNoIGNhdXNlcyBhIHNjcm9sbCBqdW1wIHZpc3VhbGx5LiBUaGlzIGFsZ29yaXRobSBtYWtlcyBzdXJlIHRvIHByZXZlbnQgdGhpcy5cbiAgICAgICAgICAgICAqIChGcmFtZSAxKVxuICAgICAgICAgICAgICogICAgLSBjb21wbGV0ZSgpIGlzIGNhbGxlZCwgYnV0IHRoZSBVSSBoYXNuJ3QgaGFkIHRpbWUgdG8gdXBkYXRlIHlldC5cbiAgICAgICAgICAgICAqICAgIC0gU2F2ZSB0aGUgY3VycmVudCBjb250ZW50IGRpbWVuc2lvbnMuXG4gICAgICAgICAgICAgKiAgICAtIFdhaXQgZm9yIHRoZSBuZXh0IGZyYW1lIHVzaW5nIF9kb20ucmVhZCwgc28gdGhlIFVJIHdpbGwgYmUgdXBkYXRlZC5cbiAgICAgICAgICAgICAqIChGcmFtZSAyKVxuICAgICAgICAgICAgICogICAgLSBSZWFkIHRoZSBuZXcgY29udGVudCBkaW1lbnNpb25zLlxuICAgICAgICAgICAgICogICAgLSBDYWxjdWxhdGUgdGhlIGhlaWdodCBkaWZmZXJlbmNlIGFuZCB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgICAgICAgICAqICAgIC0gRGVsYXkgdGhlIHNjcm9sbCBwb3NpdGlvbiBjaGFuZ2UgdW50aWwgb3RoZXIgcG9zc2libGUgZG9tIHJlYWRzIGFyZSBkb25lIHVzaW5nIF9kb20ud3JpdGUgdG8gYmUgcGVyZm9ybWFudC5cbiAgICAgICAgICAgICAqIChTdGlsbCBmcmFtZSAyLCBpZiBJJ20gY29ycmVjdClcbiAgICAgICAgICAgICAqICAgIC0gQ2hhbmdlIHRoZSBzY3JvbGwgcG9zaXRpb24gKD0gdmlzdWFsbHkgbWFpbnRhaW4gdGhlIHNjcm9sbCBwb3NpdGlvbikuXG4gICAgICAgICAgICAgKiAgICAtIENoYW5nZSB0aGUgc3RhdGUgdG8gcmUtZW5hYmxlIHRoZSBJbmZpbml0ZVNjcm9sbC5cbiAgICAgICAgICAgICAqICAgIC0gVGhpcyBzaG91bGQgYmUgYWZ0ZXIgY2hhbmdpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiwgb3IgaXQgY291bGRcbiAgICAgICAgICAgICAqICAgIGNhdXNlIHRoZSBJbmZpbml0ZVNjcm9sbCB0byBiZSB0cmlnZ2VyZWQgYWdhaW4gaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgKiAoRnJhbWUgMylcbiAgICAgICAgICAgICAqICAgIERvbmUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuaXNCdXN5ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBSRUFEICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgY29udGVudCBkaW1lbnNpb25zIGJlZm9yZSB0aGUgVUkgdXBkYXRlc1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBSRUFEICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVhZFRhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBVSSBoYXMgdXBkYXRlZCwgc2F2ZSB0aGUgbmV3IGNvbnRlbnQgZGltZW5zaW9uc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5ldyBjb250ZW50IHdhcyBhZGRlZCBvbiB0b3AsIHNvIHRoZSBzY3JvbGwgcG9zaXRpb24gc2hvdWxkIGJlIGNoYW5nZWQgaW1tZWRpYXRlbHkgdG8gcHJldmVudCBpdCBmcm9tIGp1bXBpbmcgYXJvdW5kXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Njcm9sbFRvcCA9IHNjcm9sbEhlaWdodCAtIHByZXY7XG4gICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FuU3RhcnQoKSB7XG4gICAgICAgIHJldHVybiAoIXRoaXMuZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICF0aGlzLmlzQnVzeSAmJlxuICAgICAgICAgICAgISF0aGlzLnNjcm9sbEVsICYmXG4gICAgICAgICAgICAhdGhpcy5pc0xvYWRpbmcpO1xuICAgIH1cbiAgICBlbmFibGVTY3JvbGxFdmVudHMoc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnaW5maW5pdGUtc2Nyb2xsLWxvYWRpbmcnOiB0aGlzLmlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICAnaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWQnOiAhZGlzYWJsZWRcbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJ0aHJlc2hvbGRcIjogW1widGhyZXNob2xkQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiaW9uLWluZmluaXRlLXNjcm9sbHtkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJX0uaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWR7ZGlzcGxheTpibG9ja31cIjsgfVxufTtcblxuY29uc3QgSW5maW5pdGVTY3JvbGxDb250ZW50ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1NwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTcGlubmVyID0gY29uZmlnLmdldCgnaW5maW5pdGVMb2FkaW5nU3Bpbm5lcicsIGNvbmZpZy5nZXQoJ3NwaW5uZXInLCBtb2RlID09PSAnaW9zJyA/ICdsaW5lcycgOiAnY3Jlc2NlbnQnKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgW2BpbmZpbml0ZS1zY3JvbGwtY29udGVudC0ke21vZGV9YF06IHRydWVcbiAgICAgICAgICAgIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImluZmluaXRlLWxvYWRpbmdcIiB9LCB0aGlzLmxvYWRpbmdTcGlubmVyICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5maW5pdGUtbG9hZGluZy1zcGlubmVyXCIgfSwgaChcImlvbi1zcGlubmVyXCIsIHsgbmFtZTogdGhpcy5sb2FkaW5nU3Bpbm5lciB9KSkpLCB0aGlzLmxvYWRpbmdUZXh0ICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5maW5pdGUtbG9hZGluZy10ZXh0XCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5sb2FkaW5nVGV4dCkgfSkpKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4taGVpZ2h0Ojg0cHg7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5pbmZpbml0ZS1sb2FkaW5ne21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MzJweDtkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJX0uaW5maW5pdGUtbG9hZGluZy10ZXh0e21hcmdpbi1sZWZ0OjMycHg7bWFyZ2luLXJpZ2h0OjMycHg7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuaW5maW5pdGUtbG9hZGluZy10ZXh0e21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDozMnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MzJweDstd2Via2l0LW1hcmdpbi1lbmQ6MzJweDttYXJnaW4taW5saW5lLWVuZDozMnB4fX0uaW5maW5pdGUtc2Nyb2xsLWxvYWRpbmcgaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50Pi5pbmZpbml0ZS1sb2FkaW5ne2Rpc3BsYXk6YmxvY2t9LmluZmluaXRlLXNjcm9sbC1jb250ZW50LWlvcyAuaW5maW5pdGUtbG9hZGluZy10ZXh0e2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KX0uaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItY3Jlc2NlbnQgY2lyY2xlLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1pb3MgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1saW5lcy1pb3MgbGluZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItbGluZXMtc21hbGwtaW9zIGxpbmV7c3Ryb2tlOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KX0uaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItYnViYmxlcyBjaXJjbGUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LWlvcyAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWNpcmNsZXMgY2lyY2xlLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1pb3MgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1kb3RzIGNpcmNsZXtmaWxsOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KX1cIjsgfVxufTtcblxuZXhwb3J0IHsgSW5maW5pdGVTY3JvbGwgYXMgaW9uX2luZmluaXRlX3Njcm9sbCwgSW5maW5pdGVTY3JvbGxDb250ZW50IGFzIGlvbl9pbmZpbml0ZV9zY3JvbGxfY29udGVudCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==