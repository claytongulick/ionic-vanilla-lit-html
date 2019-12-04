(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js ***!
  \**********************************************************************/
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
    static get style() { return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yZW9yZGVyXzItbWQuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlIOzs7Ozs7Ozs7Ozs7O0FDM0NqSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDeUY7O0FBRXZIO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLFFBQVEsMkRBQVUsUUFBUSxFQUFFLDJEQUFDLGVBQWUsMkRBQUMsY0FBYyxzREFBc0Q7QUFDMUk7QUFDQSx3QkFBd0IsdUJBQXVCLGFBQWEsY0FBYyxZQUFZLGNBQWMsY0FBYyxlQUFlLGVBQWUsV0FBVyxFQUFFO0FBQzdKOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwSkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxRQUFRLDZEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBVTtBQUMvQixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixnQ0FBZ0MseUNBQXlDLGlDQUFpQyx5QkFBeUIsK0NBQStDLHNCQUFzQixpQkFBaUIseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLDZCQUE2QixjQUFjLG9CQUFvQixZQUFZLG1CQUFtQixzQkFBc0Isa0JBQWtCLGdEQUFnRCx3QkFBd0IsZ0JBQWdCLGtCQUFrQixrQkFBa0Isa0NBQWtDLDBCQUEwQiwyQ0FBMkMsbUNBQW1DLFdBQVcsWUFBWSwyQ0FBMkMsZ0NBQWdDLHdCQUF3QixFQUFFO0FBQzkwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFFIiwiZmlsZSI6IjM1XFxjaHVua3NcXDM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcclxuICogQHJldHVybiBSZXR1cm5zIGB0cnVlYCBvciBmYWxzZSBpZiB0aGUgcGx1Z2luIGlzIGF2YWlsYWJsZVxyXG4gKi9cclxuLyoqXHJcbiAqIFRyaWdnZXIgYSBzZWxlY3Rpb24gY2hhbmdlZCBoYXB0aWMgZXZlbnQuIEdvb2QgZm9yIG9uZS10aW1lIGV2ZW50c1xyXG4gKiAobm90IGZvciBnZXN0dXJlcylcclxuICovXHJcbmNvbnN0IGhhcHRpY1NlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XHJcbiAgICBpZiAoZW5naW5lKSB7XHJcbiAgICAgICAgZW5naW5lLnNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xyXG4gICAgaWYgKGVuZ2luZSkge1xyXG4gICAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uU3RhcnQoKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXHJcbiAqL1xyXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgd2UgYXJlIGRvbmUgd2l0aCBhIGdlc3R1cmUuIFRoaXMgbmVlZHMgdG8gYmVcclxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXHJcbiAqL1xyXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25FbmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xyXG4gICAgaWYgKGVuZ2luZSkge1xyXG4gICAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uRW5kKCk7XHJcbiAgICB9XHJcbn07XG5cbmV4cG9ydCB7IGhhcHRpY1NlbGVjdGlvblN0YXJ0IGFzIGEsIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYiwgaGFwdGljU2VsZWN0aW9uRW5kIGFzIGMsIGhhcHRpY1NlbGVjdGlvbiBhcyBoIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGQgYXMgZ2V0SW9uTW9kZSwgSCBhcyBIb3N0LCBjIGFzIGNyZWF0ZUV2ZW50LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBhIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0LCBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQsIGMgYXMgaGFwdGljU2VsZWN0aW9uRW5kIH0gZnJvbSAnLi9oYXB0aWMtYzhmMTQ3M2UuanMnO1xuXG5jb25zdCBSZW9yZGVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgb25DbGljayhldikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKSB9LCBoKFwic2xvdFwiLCBudWxsLCBoKFwiaW9uLWljb25cIiwgeyBuYW1lOiBcInJlb3JkZXJcIiwgbGF6eTogZmFsc2UsIGNsYXNzOiBcInJlb3JkZXItaWNvblwiIH0pKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdChbc2xvdF0pe2Rpc3BsYXk6bm9uZTtsaW5lLWhlaWdodDowO3otaW5kZXg6MTAwfS5yZW9yZGVyLWljb257ZGlzcGxheTpibG9jaztmb250LXNpemU6MjJweDtmb250LXNpemU6MzFweDtvcGFjaXR5Oi4zfVwiOyB9XG59O1xuXG5jb25zdCBSZW9yZGVyR3JvdXAgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmxhc3RUb0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuY2FjaGVkSGVpZ2h0cyA9IFtdO1xuICAgICAgICB0aGlzLnNjcm9sbEVsVG9wID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxFbEJvdHRvbSA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWxJbml0aWFsID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXJUb3AgPSAwO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAwIC8qIElkbGUgKi87XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByZW9yZGVyIHdpbGwgYmUgaGlkZGVuLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uSXRlbVJlb3JkZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkl0ZW1SZW9yZGVyXCIsIDcpO1xuICAgIH1cbiAgICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc3QgY29udGVudEVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tY29udGVudCcpO1xuICAgICAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsID0gYXdhaXQgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LTYyNGVlYTU4LmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICAgICAgICBnZXN0dXJlTmFtZTogJ3Jlb3JkZXInLFxuICAgICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMTAsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd5JyxcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgICAgY2FuU3RhcnQ6IGRldGFpbCA9PiB0aGlzLmNhblN0YXJ0KGRldGFpbCksXG4gICAgICAgICAgICBvblN0YXJ0OiBldiA9PiB0aGlzLm9uU3RhcnQoZXYpLFxuICAgICAgICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICAgICAgICBvbkVuZDogKCkgPT4gdGhpcy5vbkVuZCgpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMub25FbmQoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wbGV0ZXMgdGhlIHJlb3JkZXIgb3BlcmF0aW9uLiBNdXN0IGJlIGNhbGxlZCBieSB0aGUgYGlvbkl0ZW1SZW9yZGVyYCBldmVudC5cbiAgICAgKlxuICAgICAqIElmIGEgbGlzdCBvZiBpdGVtcyBpcyBwYXNzZWQsIHRoZSBsaXN0IHdpbGwgYmUgcmVvcmRlcmVkIGFuZCByZXR1cm5lZCBpbiB0aGVcbiAgICAgKiBwcm9wZXIgb3JkZXIuXG4gICAgICpcbiAgICAgKiBJZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgb3IgaWYgYHRydWVgIGlzIHBhc3NlZCBpbiwgdGhlIHJlb3JkZXIgd2lsbCBjb21wbGV0ZVxuICAgICAqIGFuZCB0aGUgaXRlbSB3aWxsIHJlbWFpbiBpbiB0aGUgcG9zaXRpb24gaXQgd2FzIGRyYWdnZWQgdG8uIElmIGBmYWxzZWAgaXMgcGFzc2VkLFxuICAgICAqIHRoZSByZW9yZGVyIHdpbGwgY29tcGxldGUgYW5kIHRoZSBpdGVtIHdpbGwgYm91bmNlIGJhY2sgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RPclJlb3JkZXIgQSBsaXN0IG9mIGl0ZW1zIHRvIGJlIHNvcnRlZCBhbmQgcmV0dXJuZWQgaW4gdGhlIG5ldyBvcmRlciBvciBhXG4gICAgICogYm9vbGVhbiBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcmVvcmRlciBzaG91bGQgcmVwb3NpdGlvbiB0aGUgaXRlbS5cbiAgICAgKi9cbiAgICBjb21wbGV0ZShsaXN0T3JSZW9yZGVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jb21wbGV0ZVN5bmMobGlzdE9yUmVvcmRlcikpO1xuICAgIH1cbiAgICBjYW5TdGFydChldikge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1FbCB8fCB0aGlzLnN0YXRlICE9PSAwIC8qIElkbGUgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldi5ldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHJlb3JkZXJFbCA9IHRhcmdldC5jbG9zZXN0KCdpb24tcmVvcmRlcicpO1xuICAgICAgICBpZiAoIXJlb3JkZXJFbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBmaW5kUmVvcmRlckl0ZW0ocmVvcmRlckVsLCB0aGlzLmVsKTtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZXYuZGF0YSA9IGl0ZW07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN0YXJ0KGV2KSB7XG4gICAgICAgIGV2LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbUVsID0gZXYuZGF0YTtcbiAgICAgICAgY29uc3QgaGVpZ2h0cyA9IHRoaXMuY2FjaGVkSGVpZ2h0cztcbiAgICAgICAgaGVpZ2h0cy5sZW5ndGggPSAwO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBzdW0gKz0gY2hpbGQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgaGVpZ2h0cy5wdXNoKHN1bSk7XG4gICAgICAgICAgICBjaGlsZC4kaW9uSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lclRvcCA9IGJveC50b3A7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm90dG9tID0gYm94LmJvdHRvbTtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJveCA9IHRoaXMuc2Nyb2xsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsSW5pdGlhbCA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IHNjcm9sbEJveC50b3AgKyBBVVRPX1NDUk9MTF9NQVJHSU47XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsQm90dG9tID0gc2Nyb2xsQm94LmJvdHRvbSAtIEFVVE9fU0NST0xMX01BUkdJTjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxJbml0aWFsID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxUb3AgPSAwO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbEJvdHRvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0VG9JbmRleCA9IGluZGV4Rm9ySXRlbShpdGVtKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1IZWlnaHQgPSBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogQWN0aXZlICovO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoSVRFTV9SRU9SREVSX1NFTEVDVEVEKTtcbiAgICAgICAgaGFwdGljU2VsZWN0aW9uU3RhcnQoKTtcbiAgICB9XG4gICAgb25Nb3ZlKGV2KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgICAgIGlmICghc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2Nyb2xsIGlmIHdlIHJlYWNoIHRoZSBzY3JvbGwgbWFyZ2luc1xuICAgICAgICBjb25zdCBzY3JvbGwgPSB0aGlzLmF1dG9zY3JvbGwoZXYuY3VycmVudFkpO1xuICAgICAgICAvLyAvLyBHZXQgY29vcmRpbmF0ZVxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmNvbnRhaW5lclRvcCAtIHNjcm9sbDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5jb250YWluZXJCb3R0b20gLSBzY3JvbGw7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRZID0gTWF0aC5tYXgodG9wLCBNYXRoLm1pbihldi5jdXJyZW50WSwgYm90dG9tKSk7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IHNjcm9sbCArIGN1cnJlbnRZIC0gZXYuc3RhcnRZO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkWSA9IGN1cnJlbnRZIC0gdG9wO1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gdGhpcy5pdGVtSW5kZXhGb3JUb3Aobm9ybWFsaXplZFkpO1xuICAgICAgICBpZiAodG9JbmRleCAhPT0gdGhpcy5sYXN0VG9JbmRleCkge1xuICAgICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RUb0luZGV4ID0gdG9JbmRleDtcbiAgICAgICAgICAgIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgICAgICAgIHRoaXMucmVvcmRlck1vdmUoZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgaXRlbSBwb3NpdGlvblxuICAgICAgICBzZWxlY3RlZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtkZWx0YVl9cHgpYDtcbiAgICB9XG4gICAgb25FbmQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbUVsID0gdGhpcy5zZWxlY3RlZEl0ZW1FbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDIgLyogQ29tcGxldGUgKi87XG4gICAgICAgIGlmICghc2VsZWN0ZWRJdGVtRWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAwIC8qIElkbGUgKi87XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9JbmRleCA9IHRoaXMubGFzdFRvSW5kZXg7XG4gICAgICAgIGNvbnN0IGZyb21JbmRleCA9IGluZGV4Rm9ySXRlbShzZWxlY3RlZEl0ZW1FbCk7XG4gICAgICAgIGlmICh0b0luZGV4ID09PSBmcm9tSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVTeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlvbkl0ZW1SZW9yZGVyLmVtaXQoe1xuICAgICAgICAgICAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgICAgICAgICAgICB0bzogdG9JbmRleCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZVN5bmMuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFwdGljU2VsZWN0aW9uRW5kKCk7XG4gICAgfVxuICAgIGNvbXBsZXRlU3luYyhsaXN0T3JSZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbUVsID0gdGhpcy5zZWxlY3RlZEl0ZW1FbDtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUVsICYmIHRoaXMuc3RhdGUgPT09IDIgLyogQ29tcGxldGUgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHRvSW5kZXggPSB0aGlzLmxhc3RUb0luZGV4O1xuICAgICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbUVsKTtcbiAgICAgICAgICAgIGlmICh0b0luZGV4ICE9PSBmcm9tSW5kZXggJiYgKCFsaXN0T3JSZW9yZGVyIHx8IGxpc3RPclJlb3JkZXIgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gKGZyb21JbmRleCA8IHRvSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW5bdG9JbmRleCArIDFdXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW5bdG9JbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRJdGVtRWwsIHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0T3JSZW9yZGVyKSkge1xuICAgICAgICAgICAgICAgIGxpc3RPclJlb3JkZXIgPSByZW9yZGVyQXJyYXkobGlzdE9yUmVvcmRlciwgZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5zdHlsZVsndHJhbnNmb3JtJ10gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbUVsLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoSVRFTV9SRU9SREVSX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMCAvKiBJZGxlICovO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0T3JSZW9yZGVyO1xuICAgIH1cbiAgICBpdGVtSW5kZXhGb3JUb3AoZGVsdGFZKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSB0aGlzLmNhY2hlZEhlaWdodHM7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gVE9ETzogc2luY2UgaGVpZ2h0cyBpcyBhIHNvcnRlZCBhcnJheSBvZiBpbnRlZ2Vycywgd2UgY2FuIGRvXG4gICAgICAgIC8vIHNwZWVkIHVwIHRoZSBzZWFyY2ggdXNpbmcgYmluYXJ5IHNlYXJjaC4gUmVtZW1iZXIgdGhhdCBsaW5lYXItc2VhcmNoIGlzIHN0aWxsXG4gICAgICAgIC8vIGZhc3RlciB0aGFuIGJpbmFyeS1zZWFyY2ggZm9yIHNtYWxsIGFycmF5cyAoPDY0KSBkdWUgQ1BVIGJyYW5jaCBtaXNwcmVkaWN0aW9uLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGVpZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhlaWdodHNbaV0gPiBkZWx0YVkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgLyoqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqICovXG4gICAgcmVvcmRlck1vdmUoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB0aGlzLnNlbGVjdGVkSXRlbUhlaWdodDtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGNoaWxkcmVuW2ldLnN0eWxlO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gJyc7XG4gICAgICAgICAgICBpZiAoaSA+IGZyb21JbmRleCAmJiBpIDw9IHRvSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGB0cmFuc2xhdGVZKCR7LWl0ZW1IZWlnaHR9cHgpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCBmcm9tSW5kZXggJiYgaSA+PSB0b0luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgdHJhbnNsYXRlWSgke2l0ZW1IZWlnaHR9cHgpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlWyd0cmFuc2Zvcm0nXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF1dG9zY3JvbGwocG9zWSkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhbW91bnQgPSAwO1xuICAgICAgICBpZiAocG9zWSA8IHRoaXMuc2Nyb2xsRWxUb3ApIHtcbiAgICAgICAgICAgIGFtb3VudCA9IC1TQ1JPTExfSlVNUDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwb3NZID4gdGhpcy5zY3JvbGxFbEJvdHRvbSkge1xuICAgICAgICAgICAgYW1vdW50ID0gU0NST0xMX0pVTVA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFtb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbC5zY3JvbGxCeSgwLCBhbW91bnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCAtIHRoaXMuc2Nyb2xsRWxJbml0aWFsO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAncmVvcmRlci1lbmFibGVkJzogIXRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgJ3Jlb3JkZXItbGlzdC1hY3RpdmUnOiB0aGlzLnN0YXRlICE9PSAwIC8qIElkbGUgKi8sXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5yZW9yZGVyLWxpc3QtYWN0aXZlPip7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLC13ZWJraXQtdHJhbnNmb3JtIC4zczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnJlb3JkZXItZW5hYmxlZHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnJlb3JkZXItZW5hYmxlZCBpb24tcmVvcmRlcntkaXNwbGF5OmJsb2NrO2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOmdyYWI7cG9pbnRlci1ldmVudHM6YWxsOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZX0ucmVvcmRlci1zZWxlY3RlZCwucmVvcmRlci1zZWxlY3RlZCBpb24tcmVvcmRlcntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LnJlb3JkZXItc2VsZWN0ZWR7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpO2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuNCk7b3BhY2l0eTouODt6LWluZGV4OjEwMH0ucmVvcmRlci12aXNpYmxlIGlvbi1yZW9yZGVyIC5yZW9yZGVyLWljb257LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX1cIjsgfVxufTtcbmNvbnN0IGluZGV4Rm9ySXRlbSA9IChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnRbJyRpb25JbmRleCddO1xufTtcbmNvbnN0IGZpbmRSZW9yZGVySXRlbSA9IChub2RlLCBjb250YWluZXIpID0+IHtcbiAgICBsZXQgcGFyZW50O1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gY29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gcGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IEFVVE9fU0NST0xMX01BUkdJTiA9IDYwO1xuY29uc3QgU0NST0xMX0pVTVAgPSAxMDtcbmNvbnN0IElURU1fUkVPUkRFUl9TRUxFQ1RFRCA9ICdyZW9yZGVyLXNlbGVjdGVkJztcbmNvbnN0IHJlb3JkZXJBcnJheSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbZnJvbV07XG4gICAgYXJyYXkuc3BsaWNlKGZyb20sIDEpO1xuICAgIGFycmF5LnNwbGljZSh0bywgMCwgZWxlbWVudCk7XG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKCk7XG59O1xuXG5leHBvcnQgeyBSZW9yZGVyIGFzIGlvbl9yZW9yZGVyLCBSZW9yZGVyR3JvdXAgYXMgaW9uX3Jlb3JkZXJfZ3JvdXAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=