(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!***************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_reorder, ion_reorder_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder", function() { return Reorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function() { return ReorderGroup; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js");




const Reorder = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    onClick(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { name: "reorder", lazy: false, class: "reorder-icon" }))));
    }
    static get style() { return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"; }
};

const ReorderGroup = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastToIndex = -1;
        this.cachedHeights = [];
        this.scrollElTop = 0;
        this.scrollElBottom = 0;
        this.scrollElInitial = 0;
        this.containerTop = 0;
        this.containerBottom = 0;
        this.state = 0 /* Idle */;
        /**
         * If `true`, the reorder will be hidden.
         */
        this.disabled = true;
        this.ionItemReorder = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionItemReorder", 7);
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async connectedCallback() {
        const contentEl = this.el.closest('ion-content');
        if (contentEl) {
            this.scrollEl = await contentEl.getScrollElement();
        }
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: this.el,
            gestureName: 'reorder',
            gesturePriority: 110,
            threshold: 0,
            direction: 'y',
            passive: false,
            canStart: detail => this.canStart(detail),
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: () => this.onEnd(),
        });
        this.disabledChanged();
    }
    disconnectedCallback() {
        this.onEnd();
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    /**
     * Completes the reorder operation. Must be called by the `ionItemReorder` event.
     *
     * If a list of items is passed, the list will be reordered and returned in the
     * proper order.
     *
     * If no parameters are passed or if `true` is passed in, the reorder will complete
     * and the item will remain in the position it was dragged to. If `false` is passed,
     * the reorder will complete and the item will bounce back to its original position.
     *
     * @param listOrReorder A list of items to be sorted and returned in the new order or a
     * boolean of whether or not the reorder should reposition the item.
     */
    complete(listOrReorder) {
        return Promise.resolve(this.completeSync(listOrReorder));
    }
    canStart(ev) {
        if (this.selectedItemEl || this.state !== 0 /* Idle */) {
            return false;
        }
        const target = ev.event.target;
        const reorderEl = target.closest('ion-reorder');
        if (!reorderEl) {
            return false;
        }
        const item = findReorderItem(reorderEl, this.el);
        if (!item) {
            return false;
        }
        ev.data = item;
        return true;
    }
    onStart(ev) {
        ev.event.preventDefault();
        const item = this.selectedItemEl = ev.data;
        const heights = this.cachedHeights;
        heights.length = 0;
        const el = this.el;
        const children = el.children;
        if (!children || children.length === 0) {
            return;
        }
        let sum = 0;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
        }
        const box = el.getBoundingClientRect();
        this.containerTop = box.top;
        this.containerBottom = box.bottom;
        if (this.scrollEl) {
            const scrollBox = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
            this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
        }
        else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
        }
        this.lastToIndex = indexForItem(item);
        this.selectedItemHeight = item.offsetHeight;
        this.state = 1 /* Active */;
        item.classList.add(ITEM_REORDER_SELECTED);
        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__["a"])();
    }
    onMove(ev) {
        const selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        // Scroll if we reach the scroll margins
        const scroll = this.autoscroll(ev.currentY);
        // // Get coordinate
        const top = this.containerTop - scroll;
        const bottom = this.containerBottom - scroll;
        const currentY = Math.max(top, Math.min(ev.currentY, bottom));
        const deltaY = scroll + currentY - ev.startY;
        const normalizedY = currentY - top;
        const toIndex = this.itemIndexForTop(normalizedY);
        if (toIndex !== this.lastToIndex) {
            const fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__["b"])();
            this.reorderMove(fromIndex, toIndex);
        }
        // Update selected item position
        selectedItem.style.transform = `translateY(${deltaY}px)`;
    }
    onEnd() {
        const selectedItemEl = this.selectedItemEl;
        this.state = 2 /* Complete */;
        if (!selectedItemEl) {
            this.state = 0 /* Idle */;
            return;
        }
        const toIndex = this.lastToIndex;
        const fromIndex = indexForItem(selectedItemEl);
        if (toIndex === fromIndex) {
            this.completeSync();
        }
        else {
            this.ionItemReorder.emit({
                from: fromIndex,
                to: toIndex,
                complete: this.completeSync.bind(this)
            });
        }
        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
    }
    completeSync(listOrReorder) {
        const selectedItemEl = this.selectedItemEl;
        if (selectedItemEl && this.state === 2 /* Complete */) {
            const children = this.el.children;
            const len = children.length;
            const toIndex = this.lastToIndex;
            const fromIndex = indexForItem(selectedItemEl);
            if (toIndex !== fromIndex && (!listOrReorder || listOrReorder === true)) {
                const ref = (fromIndex < toIndex)
                    ? children[toIndex + 1]
                    : children[toIndex];
                this.el.insertBefore(selectedItemEl, ref);
            }
            if (Array.isArray(listOrReorder)) {
                listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
            }
            for (let i = 0; i < len; i++) {
                children[i].style['transform'] = '';
            }
            selectedItemEl.style.transition = '';
            selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
            this.selectedItemEl = undefined;
            this.state = 0 /* Idle */;
        }
        return listOrReorder;
    }
    itemIndexForTop(deltaY) {
        const heights = this.cachedHeights;
        let i = 0;
        // TODO: since heights is a sorted array of integers, we can do
        // speed up the search using binary search. Remember that linear-search is still
        // faster than binary-search for small arrays (<64) due CPU branch misprediction.
        for (i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
                break;
            }
        }
        return i;
    }
    /********* DOM WRITE ********* */
    reorderMove(fromIndex, toIndex) {
        const itemHeight = this.selectedItemHeight;
        const children = this.el.children;
        for (let i = 0; i < children.length; i++) {
            const style = children[i].style;
            let value = '';
            if (i > fromIndex && i <= toIndex) {
                value = `translateY(${-itemHeight}px)`;
            }
            else if (i < fromIndex && i >= toIndex) {
                value = `translateY(${itemHeight}px)`;
            }
            style['transform'] = value;
        }
    }
    autoscroll(posY) {
        if (!this.scrollEl) {
            return 0;
        }
        let amount = 0;
        if (posY < this.scrollElTop) {
            amount = -SCROLL_JUMP;
        }
        else if (posY > this.scrollElBottom) {
            amount = SCROLL_JUMP;
        }
        if (amount !== 0) {
            this.scrollEl.scrollBy(0, amount);
        }
        return this.scrollEl.scrollTop - this.scrollElInitial;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                'reorder-enabled': !this.disabled,
                'reorder-list-active': this.state !== 0 /* Idle */,
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"; }
};
const indexForItem = (element) => {
    return element['$ionIndex'];
};
const findReorderItem = (node, container) => {
    let parent;
    while (node) {
        parent = node.parentElement;
        if (parent === container) {
            return node;
        }
        node = parent;
    }
    return undefined;
};
const AUTO_SCROLL_MARGIN = 60;
const SCROLL_JUMP = 10;
const ITEM_REORDER_SELECTED = 'reorder-selected';
const reorderArray = (array, from, to) => {
    const element = array[from];
    array.splice(from, 1);
    array.splice(to, 0, element);
    return array.slice();
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yZW9yZGVyXzItaW9zLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpSDs7Ozs7Ozs7Ozs7OztBQzNDakg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ3lGOztBQUV2SDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxRQUFRLDJEQUFVLFFBQVEsRUFBRSwyREFBQyxlQUFlLDJEQUFDLGNBQWMsc0RBQXNEO0FBQzFJO0FBQ0Esd0JBQXdCLHVCQUF1QixhQUFhLGNBQWMsWUFBWSxjQUFjLGNBQWMsZUFBZSxlQUFlLFdBQVcsRUFBRTtBQUM3Sjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMEpBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EscURBQXFELE9BQU87QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsUUFBUSw2REFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBLE1BQU07QUFDTix3QkFBd0IsZ0NBQWdDLHlDQUF5QyxpQ0FBaUMseUJBQXlCLCtDQUErQyxzQkFBc0IsaUJBQWlCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQiw2QkFBNkIsY0FBYyxvQkFBb0IsWUFBWSxtQkFBbUIsc0JBQXNCLGtCQUFrQixnREFBZ0Qsd0JBQXdCLGdCQUFnQixrQkFBa0Isa0JBQWtCLGtDQUFrQywwQkFBMEIsMkNBQTJDLG1DQUFtQyxXQUFXLFlBQVksMkNBQTJDLGdDQUFnQyx3QkFBd0IsRUFBRTtBQUM5MEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRSIsImZpbGUiOiIzNFxcY2h1bmtzXFwzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDaGVjayB0byBzZWUgaWYgdGhlIEhhcHRpYyBQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcclxuICovXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcclxuICogKG5vdCBmb3IgZ2VzdHVyZXMpXHJcbiAqL1xyXG5jb25zdCBoYXB0aWNTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xyXG4gICAgaWYgKGVuZ2luZSkge1xyXG4gICAgICAgIGVuZ2luZS5zZWxlY3Rpb24oKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cclxuICovXHJcbmNvbnN0IGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XHJcbiAgICBpZiAoZW5naW5lKSB7XHJcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXHJcbiAqIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xyXG4gICAgfVxyXG59O1xuXG5leHBvcnQgeyBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBjLCBoYXB0aWNTZWxlY3Rpb24gYXMgaCB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBkIGFzIGdldElvbk1vZGUsIEggYXMgSG9zdCwgYyBhcyBjcmVhdGVFdmVudCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYSBhcyBoYXB0aWNTZWxlY3Rpb25TdGFydCwgYiBhcyBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkLCBjIGFzIGhhcHRpY1NlbGVjdGlvbkVuZCB9IGZyb20gJy4vaGFwdGljLWM4ZjE0NzNlLmpzJztcblxuY29uc3QgUmVvcmRlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIG9uQ2xpY2soZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IGdldElvbk1vZGUodGhpcykgfSwgaChcInNsb3RcIiwgbnVsbCwgaChcImlvbi1pY29uXCIsIHsgbmFtZTogXCJyZW9yZGVyXCIsIGxhenk6IGZhbHNlLCBjbGFzczogXCJyZW9yZGVyLWljb25cIiB9KSkpKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3QoW3Nsb3RdKXtkaXNwbGF5Om5vbmU7bGluZS1oZWlnaHQ6MDt6LWluZGV4OjEwMH0ucmVvcmRlci1pY29ue2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjIycHg7Zm9udC1zaXplOjM0cHg7b3BhY2l0eTouNH1cIjsgfVxufTtcblxuY29uc3QgUmVvcmRlckdyb3VwID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5sYXN0VG9JbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmNhY2hlZEhlaWdodHMgPSBbXTtcbiAgICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWxCb3R0b20gPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbEVsSW5pdGlhbCA9IDA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyVG9wID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3R0b20gPSAwO1xuICAgICAgICB0aGlzLnN0YXRlID0gMCAvKiBJZGxlICovO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcmVvcmRlciB3aWxsIGJlIGhpZGRlbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbkl0ZW1SZW9yZGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JdGVtUmVvcmRlclwiLCA3KTtcbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbCA9IGF3YWl0IGNvbnRlbnRFbC5nZXRTY3JvbGxFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgIGVsOiB0aGlzLmVsLFxuICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdyZW9yZGVyJyxcbiAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTEwLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAneScsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGNhblN0YXJ0OiBkZXRhaWwgPT4gdGhpcy5jYW5TdGFydChkZXRhaWwpLFxuICAgICAgICAgICAgb25TdGFydDogZXYgPT4gdGhpcy5vblN0YXJ0KGV2KSxcbiAgICAgICAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IHRoaXMub25FbmQoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcGxldGVzIHRoZSByZW9yZGVyIG9wZXJhdGlvbi4gTXVzdCBiZSBjYWxsZWQgYnkgdGhlIGBpb25JdGVtUmVvcmRlcmAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBJZiBhIGxpc3Qgb2YgaXRlbXMgaXMgcGFzc2VkLCB0aGUgbGlzdCB3aWxsIGJlIHJlb3JkZXJlZCBhbmQgcmV0dXJuZWQgaW4gdGhlXG4gICAgICogcHJvcGVyIG9yZGVyLlxuICAgICAqXG4gICAgICogSWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkIG9yIGlmIGB0cnVlYCBpcyBwYXNzZWQgaW4sIHRoZSByZW9yZGVyIHdpbGwgY29tcGxldGVcbiAgICAgKiBhbmQgdGhlIGl0ZW0gd2lsbCByZW1haW4gaW4gdGhlIHBvc2l0aW9uIGl0IHdhcyBkcmFnZ2VkIHRvLiBJZiBgZmFsc2VgIGlzIHBhc3NlZCxcbiAgICAgKiB0aGUgcmVvcmRlciB3aWxsIGNvbXBsZXRlIGFuZCB0aGUgaXRlbSB3aWxsIGJvdW5jZSBiYWNrIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0T3JSZW9yZGVyIEEgbGlzdCBvZiBpdGVtcyB0byBiZSBzb3J0ZWQgYW5kIHJldHVybmVkIGluIHRoZSBuZXcgb3JkZXIgb3IgYVxuICAgICAqIGJvb2xlYW4gb2Ygd2hldGhlciBvciBub3QgdGhlIHJlb3JkZXIgc2hvdWxkIHJlcG9zaXRpb24gdGhlIGl0ZW0uXG4gICAgICovXG4gICAgY29tcGxldGUobGlzdE9yUmVvcmRlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcGxldGVTeW5jKGxpc3RPclJlb3JkZXIpKTtcbiAgICB9XG4gICAgY2FuU3RhcnQoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtRWwgfHwgdGhpcy5zdGF0ZSAhPT0gMCAvKiBJZGxlICovKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXYuZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCByZW9yZGVyRWwgPSB0YXJnZXQuY2xvc2VzdCgnaW9uLXJlb3JkZXInKTtcbiAgICAgICAgaWYgKCFyZW9yZGVyRWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0gZmluZFJlb3JkZXJJdGVtKHJlb3JkZXJFbCwgdGhpcy5lbCk7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGV2LmRhdGEgPSBpdGVtO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdGFydChldikge1xuICAgICAgICBldi5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW1FbCA9IGV2LmRhdGE7XG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSB0aGlzLmNhY2hlZEhlaWdodHM7XG4gICAgICAgIGhlaWdodHMubGVuZ3RoID0gMDtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgc3VtICs9IGNoaWxkLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodHMucHVzaChzdW0pO1xuICAgICAgICAgICAgY2hpbGQuJGlvbkluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJUb3AgPSBib3gudG9wO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IGJveC5ib3R0b207XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3ggPSB0aGlzLnNjcm9sbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbEluaXRpYWwgPSB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxUb3AgPSBzY3JvbGxCb3gudG9wICsgQVVUT19TQ1JPTExfTUFSR0lOO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbEJvdHRvbSA9IHNjcm9sbEJveC5ib3R0b20gLSBBVVRPX1NDUk9MTF9NQVJHSU47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsSW5pdGlhbCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxCb3R0b20gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRvSW5kZXggPSBpbmRleEZvckl0ZW0oaXRlbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAxIC8qIEFjdGl2ZSAqLztcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKElURU1fUkVPUkRFUl9TRUxFQ1RFRCk7XG4gICAgICAgIGhhcHRpY1NlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxuICAgIG9uTW92ZShldikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbUVsO1xuICAgICAgICBpZiAoIXNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNjcm9sbCBpZiB3ZSByZWFjaCB0aGUgc2Nyb2xsIG1hcmdpbnNcbiAgICAgICAgY29uc3Qgc2Nyb2xsID0gdGhpcy5hdXRvc2Nyb2xsKGV2LmN1cnJlbnRZKTtcbiAgICAgICAgLy8gLy8gR2V0IGNvb3JkaW5hdGVcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5jb250YWluZXJUb3AgLSBzY3JvbGw7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuY29udGFpbmVyQm90dG9tIC0gc2Nyb2xsO1xuICAgICAgICBjb25zdCBjdXJyZW50WSA9IE1hdGgubWF4KHRvcCwgTWF0aC5taW4oZXYuY3VycmVudFksIGJvdHRvbSkpO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBzY3JvbGwgKyBjdXJyZW50WSAtIGV2LnN0YXJ0WTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFkgPSBjdXJyZW50WSAtIHRvcDtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IHRoaXMuaXRlbUluZGV4Rm9yVG9wKG5vcm1hbGl6ZWRZKTtcbiAgICAgICAgaWYgKHRvSW5kZXggIT09IHRoaXMubGFzdFRvSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb21JbmRleCA9IGluZGV4Rm9ySXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5sYXN0VG9JbmRleCA9IHRvSW5kZXg7XG4gICAgICAgICAgICBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJNb3ZlKGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkIGl0ZW0gcG9zaXRpb25cbiAgICAgICAgc2VsZWN0ZWRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7ZGVsdGFZfXB4KWA7XG4gICAgfVxuICAgIG9uRW5kKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1FbCA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIENvbXBsZXRlICovO1xuICAgICAgICBpZiAoIXNlbGVjdGVkSXRlbUVsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMCAvKiBJZGxlICovO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSB0aGlzLmxhc3RUb0luZGV4O1xuICAgICAgICBjb25zdCBmcm9tSW5kZXggPSBpbmRleEZvckl0ZW0oc2VsZWN0ZWRJdGVtRWwpO1xuICAgICAgICBpZiAodG9JbmRleCA9PT0gZnJvbUluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pb25JdGVtUmVvcmRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICAgICAgICAgICAgdG86IHRvSW5kZXgsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGVTeW5jLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICAgIH1cbiAgICBjb21wbGV0ZVN5bmMobGlzdE9yUmVvcmRlcikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1FbCA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW1FbCAmJiB0aGlzLnN0YXRlID09PSAyIC8qIENvbXBsZXRlICovKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB0b0luZGV4ID0gdGhpcy5sYXN0VG9JbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGZyb21JbmRleCA9IGluZGV4Rm9ySXRlbShzZWxlY3RlZEl0ZW1FbCk7XG4gICAgICAgICAgICBpZiAodG9JbmRleCAhPT0gZnJvbUluZGV4ICYmICghbGlzdE9yUmVvcmRlciB8fCBsaXN0T3JSZW9yZGVyID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IChmcm9tSW5kZXggPCB0b0luZGV4KVxuICAgICAgICAgICAgICAgICAgICA/IGNoaWxkcmVuW3RvSW5kZXggKyAxXVxuICAgICAgICAgICAgICAgICAgICA6IGNoaWxkcmVuW3RvSW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKHNlbGVjdGVkSXRlbUVsLCByZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdE9yUmVvcmRlcikpIHtcbiAgICAgICAgICAgICAgICBsaXN0T3JSZW9yZGVyID0gcmVvcmRlckFycmF5KGxpc3RPclJlb3JkZXIsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0uc3R5bGVbJ3RyYW5zZm9ybSddID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1FbC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1FbC5jbGFzc0xpc3QucmVtb3ZlKElURU1fUkVPUkRFUl9TRUxFQ1RFRCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDAgLyogSWRsZSAqLztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdE9yUmVvcmRlcjtcbiAgICB9XG4gICAgaXRlbUluZGV4Rm9yVG9wKGRlbHRhWSkge1xuICAgICAgICBjb25zdCBoZWlnaHRzID0gdGhpcy5jYWNoZWRIZWlnaHRzO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIFRPRE86IHNpbmNlIGhlaWdodHMgaXMgYSBzb3J0ZWQgYXJyYXkgb2YgaW50ZWdlcnMsIHdlIGNhbiBkb1xuICAgICAgICAvLyBzcGVlZCB1cCB0aGUgc2VhcmNoIHVzaW5nIGJpbmFyeSBzZWFyY2guIFJlbWVtYmVyIHRoYXQgbGluZWFyLXNlYXJjaCBpcyBzdGlsbFxuICAgICAgICAvLyBmYXN0ZXIgdGhhbiBiaW5hcnktc2VhcmNoIGZvciBzbWFsbCBhcnJheXMgKDw2NCkgZHVlIENQVSBicmFuY2ggbWlzcHJlZGljdGlvbi5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGhlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoZWlnaHRzW2ldID4gZGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIC8qKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKiAqL1xuICAgIHJlb3JkZXJNb3ZlKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5zZWxlY3RlZEl0ZW1IZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBjaGlsZHJlbltpXS5zdHlsZTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGkgPiBmcm9tSW5kZXggJiYgaSA8PSB0b0luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgdHJhbnNsYXRlWSgkey1pdGVtSGVpZ2h0fXB4KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgZnJvbUluZGV4ICYmIGkgPj0gdG9JbmRleCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYHRyYW5zbGF0ZVkoJHtpdGVtSGVpZ2h0fXB4KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZVsndHJhbnNmb3JtJ10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhdXRvc2Nyb2xsKHBvc1kpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYW1vdW50ID0gMDtcbiAgICAgICAgaWYgKHBvc1kgPCB0aGlzLnNjcm9sbEVsVG9wKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAtU0NST0xMX0pVTVA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9zWSA+IHRoaXMuc2Nyb2xsRWxCb3R0b20pIHtcbiAgICAgICAgICAgIGFtb3VudCA9IFNDUk9MTF9KVU1QO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbW91bnQgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsQnkoMCwgYW1vdW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AgLSB0aGlzLnNjcm9sbEVsSW5pdGlhbDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgJ3Jlb3JkZXItZW5hYmxlZCc6ICF0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICdyZW9yZGVyLWxpc3QtYWN0aXZlJzogdGhpcy5zdGF0ZSAhPT0gMCAvKiBJZGxlICovLFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIucmVvcmRlci1saXN0LWFjdGl2ZT4qey13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtd2Via2l0LXRyYW5zZm9ybSAuM3M7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5yZW9yZGVyLWVuYWJsZWR7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5yZW9yZGVyLWVuYWJsZWQgaW9uLXJlb3JkZXJ7ZGlzcGxheTpibG9jaztjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjpncmFiO3BvaW50ZXItZXZlbnRzOmFsbDstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmV9LnJlb3JkZXItc2VsZWN0ZWQsLnJlb3JkZXItc2VsZWN0ZWQgaW9uLXJlb3JkZXJ7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5yZW9yZGVyLXNlbGVjdGVke3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjpub25lIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC40KTtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpO29wYWNpdHk6Ljg7ei1pbmRleDoxMDB9LnJlb3JkZXItdmlzaWJsZSBpb24tcmVvcmRlciAucmVvcmRlci1pY29uey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9XCI7IH1cbn07XG5jb25zdCBpbmRleEZvckl0ZW0gPSAoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50WyckaW9uSW5kZXgnXTtcbn07XG5jb25zdCBmaW5kUmVvcmRlckl0ZW0gPSAobm9kZSwgY29udGFpbmVyKSA9PiB7XG4gICAgbGV0IHBhcmVudDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IGNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCBBVVRPX1NDUk9MTF9NQVJHSU4gPSA2MDtcbmNvbnN0IFNDUk9MTF9KVU1QID0gMTA7XG5jb25zdCBJVEVNX1JFT1JERVJfU0VMRUNURUQgPSAncmVvcmRlci1zZWxlY3RlZCc7XG5jb25zdCByZW9yZGVyQXJyYXkgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2Zyb21dO1xuICAgIGFycmF5LnNwbGljZShmcm9tLCAxKTtcbiAgICBhcnJheS5zcGxpY2UodG8sIDAsIGVsZW1lbnQpO1xuICAgIHJldHVybiBhcnJheS5zbGljZSgpO1xufTtcblxuZXhwb3J0IHsgUmVvcmRlciBhcyBpb25fcmVvcmRlciwgUmVvcmRlckdyb3VwIGFzIGlvbl9yZW9yZGVyX2dyb3VwIH07XG4iXSwic291cmNlUm9vdCI6IiJ9