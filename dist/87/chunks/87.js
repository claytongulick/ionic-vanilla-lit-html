(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js":
/*!************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_virtual_scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_virtual_scroll", function() { return VirtualScroll; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");



const CELL_TYPE_ITEM = 'item';
const CELL_TYPE_HEADER = 'header';
const CELL_TYPE_FOOTER = 'footer';
const NODE_CHANGE_NONE = 0;
const NODE_CHANGE_POSITION = 1;
const NODE_CHANGE_CELL = 2;

const MIN_READS = 2;
const updateVDom = (dom, heightIndex, cells, range) => {
    // reset dom
    for (const node of dom) {
        node.change = NODE_CHANGE_NONE;
        node.d = true;
    }
    // try to match into exisiting dom
    const toMutate = [];
    const end = range.offset + range.length;
    for (let i = range.offset; i < end; i++) {
        const cell = cells[i];
        const node = dom.find(n => n.d && n.cell === cell);
        if (node) {
            const top = heightIndex[i];
            if (top !== node.top) {
                node.top = top;
                node.change = NODE_CHANGE_POSITION;
            }
            node.d = false;
        }
        else {
            toMutate.push(cell);
        }
    }
    // needs to append
    const pool = dom.filter(n => n.d);
    for (const cell of toMutate) {
        const node = pool.find(n => n.d && n.cell.type === cell.type);
        const index = cell.i;
        if (node) {
            node.d = false;
            node.change = NODE_CHANGE_CELL;
            node.cell = cell;
            node.top = heightIndex[index];
        }
        else {
            dom.push({
                d: false,
                cell,
                visible: true,
                change: NODE_CHANGE_CELL,
                top: heightIndex[index],
            });
        }
    }
    dom
        .filter(n => n.d && n.top !== -9999)
        .forEach(n => {
        n.change = NODE_CHANGE_POSITION;
        n.top = -9999;
    });
};
const doRender = (el, nodeRender, dom, updateCellHeight) => {
    const children = Array.from(el.children).filter(n => n.tagName !== 'TEMPLATE');
    const childrenNu = children.length;
    let child;
    for (let i = 0; i < dom.length; i++) {
        const node = dom[i];
        const cell = node.cell;
        // the cell change, the content must be updated
        if (node.change === NODE_CHANGE_CELL) {
            if (i < childrenNu) {
                child = children[i];
                nodeRender(child, cell, i);
            }
            else {
                const newChild = createNode(el, cell.type);
                child = nodeRender(newChild, cell, i) || newChild;
                child.classList.add('virtual-item');
                el.appendChild(child);
            }
            child['$ionCell'] = cell;
        }
        else {
            child = children[i];
        }
        // only update position when it changes
        if (node.change !== NODE_CHANGE_NONE) {
            child.style.transform = `translate3d(0,${node.top}px,0)`;
        }
        // update visibility
        const visible = cell.visible;
        if (node.visible !== visible) {
            if (visible) {
                child.classList.remove('virtual-loading');
            }
            else {
                child.classList.add('virtual-loading');
            }
            node.visible = visible;
        }
        // dynamic height
        if (cell.reads > 0) {
            updateCellHeight(cell, child);
            cell.reads--;
        }
    }
};
const createNode = (el, type) => {
    const template = getTemplate(el, type);
    if (template && el.ownerDocument) {
        return el.ownerDocument.importNode(template.content, true).children[0];
    }
    return null;
};
const getTemplate = (el, type) => {
    switch (type) {
        case CELL_TYPE_ITEM: return el.querySelector('template:not([name])');
        case CELL_TYPE_HEADER: return el.querySelector('template[name=header]');
        case CELL_TYPE_FOOTER: return el.querySelector('template[name=footer]');
    }
};
const getViewport = (scrollTop, vierportHeight, margin) => {
    return {
        top: Math.max(scrollTop - margin, 0),
        bottom: scrollTop + vierportHeight + margin
    };
};
const getRange = (heightIndex, viewport, buffer) => {
    const topPos = viewport.top;
    const bottomPos = viewport.bottom;
    // find top index
    let i = 0;
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] > topPos) {
            break;
        }
    }
    const offset = Math.max(i - buffer - 1, 0);
    // find bottom index
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] >= bottomPos) {
            break;
        }
    }
    const end = Math.min(i + buffer, heightIndex.length);
    const length = end - offset;
    return { offset, length };
};
const getShouldUpdate = (dirtyIndex, currentRange, range) => {
    const end = range.offset + range.length;
    return (dirtyIndex <= end ||
        currentRange.offset !== range.offset ||
        currentRange.length !== range.length);
};
const findCellIndex = (cells, index) => {
    const max = cells.length > 0 ? cells[cells.length - 1].index : 0;
    if (index === 0) {
        return 0;
    }
    else if (index === max + 1) {
        return cells.length;
    }
    else {
        return cells.findIndex(c => c.index === index);
    }
};
const inplaceUpdate = (dst, src, offset) => {
    if (offset === 0 && src.length >= dst.length) {
        return src;
    }
    for (let i = 0; i < src.length; i++) {
        dst[i + offset] = src[i];
    }
    return dst;
};
const calcCells = (items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) => {
    const cells = [];
    const end = len + offset;
    for (let i = offset; i < end; i++) {
        const item = items[i];
        if (headerFn) {
            const value = headerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: CELL_TYPE_HEADER,
                    value,
                    index: i,
                    height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
                    reads: headerHeight ? 0 : MIN_READS,
                    visible: !!headerHeight,
                });
            }
        }
        cells.push({
            i: j++,
            type: CELL_TYPE_ITEM,
            value: item,
            index: i,
            height: itemHeight ? itemHeight(item, i) : approxItemHeight,
            reads: itemHeight ? 0 : MIN_READS,
            visible: !!itemHeight,
        });
        if (footerFn) {
            const value = footerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: CELL_TYPE_FOOTER,
                    value,
                    index: i,
                    height: footerHeight ? footerHeight(value, i) : approxFooterHeight,
                    reads: footerHeight ? 0 : MIN_READS,
                    visible: !!footerHeight,
                });
            }
        }
    }
    return cells;
};
const calcHeightIndex = (buf, cells, index) => {
    let acum = buf[index];
    for (let i = index; i < buf.length; i++) {
        buf[i] = acum;
        acum += cells[i].height;
    }
    return acum;
};
const resizeBuffer = (buf, len) => {
    if (!buf) {
        return new Uint32Array(len);
    }
    if (buf.length === len) {
        return buf;
    }
    else if (len > buf.length) {
        const newBuf = new Uint32Array(len);
        newBuf.set(buf);
        return newBuf;
    }
    else {
        return buf.subarray(0, len);
    }
};
const positionForIndex = (index, cells, heightIndex) => {
    const cell = cells.find(c => c.type === CELL_TYPE_ITEM && c.index === index);
    if (cell) {
        return heightIndex[cell.i];
    }
    return -1;
};

const VirtualScroll = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.range = { offset: 0, length: 0 };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        /**
         * It is important to provide this
         * if virtual item height will be significantly larger than the default
         * The approximate height of each virtual item template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */
        this.approxItemHeight = 45;
        /**
         * The approximate height of each header template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */
        this.approxHeaderHeight = 30;
        /**
         * The approximate width of each footer template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */
        this.approxFooterHeight = 30;
        this.onScroll = () => {
            this.updateVirtualScroll();
        };
    }
    itemsChanged() {
        this.calcCells();
        this.updateVirtualScroll();
    }
    async connectedCallback() {
        const contentEl = this.el.closest('ion-content');
        if (!contentEl) {
            console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
            return;
        }
        this.scrollEl = await contentEl.getScrollElement();
        this.contentEl = contentEl;
        this.calcCells();
        this.updateState();
    }
    componentDidUpdate() {
        this.updateState();
    }
    disconnectedCallback() {
        this.scrollEl = undefined;
    }
    onResize() {
        this.calcCells();
        this.updateVirtualScroll();
    }
    /**
     * Returns the position of the virtual item at the given index.
     */
    positionForItem(index) {
        return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
    }
    /**
     * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
     * dirty any time the content or their style changes.
     *
     * The subset of items to be updated can are specifing by an offset and a length.
     */
    async checkRange(offset, len = -1) {
        // TODO: kind of hacky how we do in-place updated of the cells
        // array. this part needs a complete refactor
        if (!this.items) {
            return;
        }
        const length = (len === -1)
            ? this.items.length - offset
            : len;
        const cellIndex = findCellIndex(this.cells, offset);
        const cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
        this.cells = inplaceUpdate(this.cells, cells, cellIndex);
        this.lastItemLen = this.items.length;
        this.indexDirty = Math.max(offset - 1, 0);
        this.scheduleUpdate();
    }
    /**
     * This method marks the tail the items array as dirty, so they can be re-rendered.
     *
     * It's equivalent to calling:
     *
     * ```js
     * virtualScroll.checkRange(lastItemLen);
     * ```
     */
    async checkEnd() {
        if (this.items) {
            this.checkRange(this.lastItemLen);
        }
    }
    updateVirtualScroll() {
        // do nothing if virtual-scroll is disabled
        if (!this.isEnabled || !this.scrollEl) {
            return;
        }
        // unschedule future updates
        if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = undefined;
        }
        // schedule DOM operations into the stencil queue
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.readVS.bind(this));
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(this.writeVS.bind(this));
    }
    readVS() {
        const { contentEl, scrollEl, el } = this;
        let topOffset = 0;
        let node = el;
        while (node && node !== contentEl) {
            topOffset += node.offsetTop;
            node = node.parentElement;
        }
        this.viewportOffset = topOffset;
        if (scrollEl) {
            this.viewportHeight = scrollEl.offsetHeight;
            this.currentScrollTop = scrollEl.scrollTop;
        }
    }
    writeVS() {
        const dirtyIndex = this.indexDirty;
        // get visible viewport
        const scrollTop = this.currentScrollTop - this.viewportOffset;
        const viewport = getViewport(scrollTop, this.viewportHeight, 100);
        // compute lazily the height index
        const heightIndex = this.getHeightIndex();
        // get array bounds of visible cells base in the viewport
        const range = getRange(heightIndex, viewport, 2);
        // fast path, do nothing
        const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
        if (!shouldUpdate) {
            return;
        }
        this.range = range;
        // in place mutation of the virtual DOM
        updateVDom(this.virtualDom, heightIndex, this.cells, range);
        // Write DOM
        // Different code paths taken depending of the render API used
        if (this.nodeRender) {
            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
        }
        else if (this.domRender) {
            this.domRender(this.virtualDom);
        }
        else if (this.renderItem) {
            this.el.forceUpdate();
        }
    }
    updateCellHeight(cell, node) {
        const update = () => {
            if (node['$ionCell'] === cell) {
                const style = window.getComputedStyle(node);
                const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
                this.setCellHeight(cell, height);
            }
        };
        if (node && node.componentOnReady) {
            node.componentOnReady().then(update);
        }
        else {
            update();
        }
    }
    setCellHeight(cell, height) {
        const index = cell.i;
        // the cell might changed since the height update was scheduled
        if (cell !== this.cells[index]) {
            return;
        }
        if (cell.height !== height || cell.visible !== true) {
            cell.visible = true;
            cell.height = height;
            this.indexDirty = Math.min(this.indexDirty, index);
            this.scheduleUpdate();
        }
    }
    scheduleUpdate() {
        clearTimeout(this.timerUpdate);
        this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
    }
    updateState() {
        const shouldEnable = !!(this.scrollEl &&
            this.cells);
        if (shouldEnable !== this.isEnabled) {
            this.enableScrollEvents(shouldEnable);
            if (shouldEnable) {
                this.updateVirtualScroll();
            }
        }
    }
    calcCells() {
        if (!this.items) {
            return;
        }
        this.lastItemLen = this.items.length;
        this.cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
        this.indexDirty = 0;
    }
    getHeightIndex() {
        if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
        }
        return this.heightIndex;
    }
    calcHeightIndex(index = 0) {
        // TODO: optimize, we don't need to calculate all the cells
        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
        this.indexDirty = Infinity;
    }
    enableScrollEvents(shouldListen) {
        if (this.rmEvent) {
            this.rmEvent();
            this.rmEvent = undefined;
        }
        const scrollEl = this.scrollEl;
        if (scrollEl) {
            this.isEnabled = shouldListen;
            scrollEl.addEventListener('scroll', this.onScroll);
            this.rmEvent = () => {
                scrollEl.removeEventListener('scroll', this.onScroll);
            };
        }
    }
    renderVirtualNode(node) {
        const { type, value, index } = node.cell;
        switch (type) {
            case CELL_TYPE_ITEM: return this.renderItem(value, index);
            case CELL_TYPE_HEADER: return this.renderHeader(value, index);
            case CELL_TYPE_FOOTER: return this.renderFooter(value, index);
        }
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { style: {
                height: `${this.totalHeight}px`
            } }, this.renderItem && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(node => this.renderVirtualNode(node))))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "itemHeight": ["itemsChanged"],
        "headerHeight": ["itemsChanged"],
        "footerHeight": ["itemsChanged"],
        "items": ["itemsChanged"]
    }; }
    static get style() { return "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"; }
};
const VirtualProxy = ({ dom }, children, utils) => {
    return utils.map(children, (child, i) => {
        const node = dom[i];
        const vattrs = child.vattrs || {};
        let classes = vattrs.class || '';
        classes += 'virtual-item ';
        if (!node.visible) {
            classes += 'virtual-loading';
        }
        return Object.assign(Object.assign({}, child), { vattrs: Object.assign(Object.assign({}, vattrs), { class: classes, style: Object.assign(Object.assign({}, vattrs.style), { transform: `translate3d(0,${node.top}px,0)` }) }) });
    });
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi12aXJ0dWFsLXNjcm9sbC5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUg7QUFDM0Y7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFNBQVM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0JBQXdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0JBQXdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVE7QUFDaEIsUUFBUSwyREFBUztBQUNqQjtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekIsMkJBQTJCLGlCQUFpQjtBQUM1QyxhQUFhLEVBQUUsc0JBQXNCLDJEQUFDLGdCQUFnQix1QkFBdUI7QUFDN0U7QUFDQSxjQUFjLFFBQVEsMkRBQVUsT0FBTztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLDRCQUE0QixjQUFjLGtCQUFrQixXQUFXLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLG9DQUFvQyxVQUFVLGlDQUFpQyw0QkFBNEIsZ0JBQWdCLGtCQUFrQixpQkFBaUIsZ0NBQWdDLHdCQUF3QixzQkFBc0IsRUFBRTtBQUNqYjtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVyx1Q0FBdUMsWUFBWSxzREFBc0Qsa0JBQWtCLDZCQUE2QixTQUFTLFFBQVEsR0FBRyxHQUFHO0FBQ3ZPLEtBQUs7QUFDTDs7QUFFK0MiLCJmaWxlIjoiODdcXGNodW5rc1xcODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGYgYXMgcmVhZFRhc2ssIHcgYXMgd3JpdGVUYXNrLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcblxuY29uc3QgQ0VMTF9UWVBFX0lURU0gPSAnaXRlbSc7XHJcbmNvbnN0IENFTExfVFlQRV9IRUFERVIgPSAnaGVhZGVyJztcclxuY29uc3QgQ0VMTF9UWVBFX0ZPT1RFUiA9ICdmb290ZXInO1xyXG5jb25zdCBOT0RFX0NIQU5HRV9OT05FID0gMDtcclxuY29uc3QgTk9ERV9DSEFOR0VfUE9TSVRJT04gPSAxO1xyXG5jb25zdCBOT0RFX0NIQU5HRV9DRUxMID0gMjtcblxuY29uc3QgTUlOX1JFQURTID0gMjtcclxuY29uc3QgdXBkYXRlVkRvbSA9IChkb20sIGhlaWdodEluZGV4LCBjZWxscywgcmFuZ2UpID0+IHtcclxuICAgIC8vIHJlc2V0IGRvbVxyXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGRvbSkge1xyXG4gICAgICAgIG5vZGUuY2hhbmdlID0gTk9ERV9DSEFOR0VfTk9ORTtcclxuICAgICAgICBub2RlLmQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gdHJ5IHRvIG1hdGNoIGludG8gZXhpc2l0aW5nIGRvbVxyXG4gICAgY29uc3QgdG9NdXRhdGUgPSBbXTtcclxuICAgIGNvbnN0IGVuZCA9IHJhbmdlLm9mZnNldCArIHJhbmdlLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSByYW5nZS5vZmZzZXQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1tpXTtcclxuICAgICAgICBjb25zdCBub2RlID0gZG9tLmZpbmQobiA9PiBuLmQgJiYgbi5jZWxsID09PSBjZWxsKTtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBoZWlnaHRJbmRleFtpXTtcclxuICAgICAgICAgICAgaWYgKHRvcCAhPT0gbm9kZS50b3ApIHtcclxuICAgICAgICAgICAgICAgIG5vZGUudG9wID0gdG9wO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jaGFuZ2UgPSBOT0RFX0NIQU5HRV9QT1NJVElPTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlLmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvTXV0YXRlLnB1c2goY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbmVlZHMgdG8gYXBwZW5kXHJcbiAgICBjb25zdCBwb29sID0gZG9tLmZpbHRlcihuID0+IG4uZCk7XHJcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdG9NdXRhdGUpIHtcclxuICAgICAgICBjb25zdCBub2RlID0gcG9vbC5maW5kKG4gPT4gbi5kICYmIG4uY2VsbC50eXBlID09PSBjZWxsLnR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2VsbC5pO1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLmNoYW5nZSA9IE5PREVfQ0hBTkdFX0NFTEw7XHJcbiAgICAgICAgICAgIG5vZGUuY2VsbCA9IGNlbGw7XHJcbiAgICAgICAgICAgIG5vZGUudG9wID0gaGVpZ2h0SW5kZXhbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9tLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZWxsLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZTogTk9ERV9DSEFOR0VfQ0VMTCxcclxuICAgICAgICAgICAgICAgIHRvcDogaGVpZ2h0SW5kZXhbaW5kZXhdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb21cclxuICAgICAgICAuZmlsdGVyKG4gPT4gbi5kICYmIG4udG9wICE9PSAtOTk5OSlcclxuICAgICAgICAuZm9yRWFjaChuID0+IHtcclxuICAgICAgICBuLmNoYW5nZSA9IE5PREVfQ0hBTkdFX1BPU0lUSU9OO1xyXG4gICAgICAgIG4udG9wID0gLTk5OTk7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZG9SZW5kZXIgPSAoZWwsIG5vZGVSZW5kZXIsIGRvbSwgdXBkYXRlQ2VsbEhlaWdodCkgPT4ge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGVsLmNoaWxkcmVuKS5maWx0ZXIobiA9PiBuLnRhZ05hbWUgIT09ICdURU1QTEFURScpO1xyXG4gICAgY29uc3QgY2hpbGRyZW5OdSA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGxldCBjaGlsZDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9tLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvbVtpXTtcclxuICAgICAgICBjb25zdCBjZWxsID0gbm9kZS5jZWxsO1xyXG4gICAgICAgIC8vIHRoZSBjZWxsIGNoYW5nZSwgdGhlIGNvbnRlbnQgbXVzdCBiZSB1cGRhdGVkXHJcbiAgICAgICAgaWYgKG5vZGUuY2hhbmdlID09PSBOT0RFX0NIQU5HRV9DRUxMKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgY2hpbGRyZW5OdSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIG5vZGVSZW5kZXIoY2hpbGQsIGNlbGwsIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q2hpbGQgPSBjcmVhdGVOb2RlKGVsLCBjZWxsLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQgPSBub2RlUmVuZGVyKG5ld0NoaWxkLCBjZWxsLCBpKSB8fCBuZXdDaGlsZDtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3ZpcnR1YWwtaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkWyckaW9uQ2VsbCddID0gY2VsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG9ubHkgdXBkYXRlIHBvc2l0aW9uIHdoZW4gaXQgY2hhbmdlc1xyXG4gICAgICAgIGlmIChub2RlLmNoYW5nZSAhPT0gTk9ERV9DSEFOR0VfTk9ORSkge1xyXG4gICAgICAgICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwke25vZGUudG9wfXB4LDApYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXBkYXRlIHZpc2liaWxpdHlcclxuICAgICAgICBjb25zdCB2aXNpYmxlID0gY2VsbC52aXNpYmxlO1xyXG4gICAgICAgIGlmIChub2RlLnZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3ZpcnR1YWwtbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgndmlydHVhbC1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZHluYW1pYyBoZWlnaHRcclxuICAgICAgICBpZiAoY2VsbC5yZWFkcyA+IDApIHtcclxuICAgICAgICAgICAgdXBkYXRlQ2VsbEhlaWdodChjZWxsLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIGNlbGwucmVhZHMtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGNyZWF0ZU5vZGUgPSAoZWwsIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZ2V0VGVtcGxhdGUoZWwsIHR5cGUpO1xyXG4gICAgaWYgKHRlbXBsYXRlICYmIGVsLm93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWwub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkcmVuWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmNvbnN0IGdldFRlbXBsYXRlID0gKGVsLCB0eXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIENFTExfVFlQRV9JVEVNOiByZXR1cm4gZWwucXVlcnlTZWxlY3RvcigndGVtcGxhdGU6bm90KFtuYW1lXSknKTtcclxuICAgICAgICBjYXNlIENFTExfVFlQRV9IRUFERVI6IHJldHVybiBlbC5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZVtuYW1lPWhlYWRlcl0nKTtcclxuICAgICAgICBjYXNlIENFTExfVFlQRV9GT09URVI6IHJldHVybiBlbC5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZVtuYW1lPWZvb3Rlcl0nKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgZ2V0Vmlld3BvcnQgPSAoc2Nyb2xsVG9wLCB2aWVycG9ydEhlaWdodCwgbWFyZ2luKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogTWF0aC5tYXgoc2Nyb2xsVG9wIC0gbWFyZ2luLCAwKSxcclxuICAgICAgICBib3R0b206IHNjcm9sbFRvcCArIHZpZXJwb3J0SGVpZ2h0ICsgbWFyZ2luXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCBnZXRSYW5nZSA9IChoZWlnaHRJbmRleCwgdmlld3BvcnQsIGJ1ZmZlcikgPT4ge1xyXG4gICAgY29uc3QgdG9wUG9zID0gdmlld3BvcnQudG9wO1xyXG4gICAgY29uc3QgYm90dG9tUG9zID0gdmlld3BvcnQuYm90dG9tO1xyXG4gICAgLy8gZmluZCB0b3AgaW5kZXhcclxuICAgIGxldCBpID0gMDtcclxuICAgIGZvciAoOyBpIDwgaGVpZ2h0SW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaGVpZ2h0SW5kZXhbaV0gPiB0b3BQb3MpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgoaSAtIGJ1ZmZlciAtIDEsIDApO1xyXG4gICAgLy8gZmluZCBib3R0b20gaW5kZXhcclxuICAgIGZvciAoOyBpIDwgaGVpZ2h0SW5kZXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaGVpZ2h0SW5kZXhbaV0gPj0gYm90dG9tUG9zKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKGkgKyBidWZmZXIsIGhlaWdodEluZGV4Lmxlbmd0aCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSBlbmQgLSBvZmZzZXQ7XHJcbiAgICByZXR1cm4geyBvZmZzZXQsIGxlbmd0aCB9O1xyXG59O1xyXG5jb25zdCBnZXRTaG91bGRVcGRhdGUgPSAoZGlydHlJbmRleCwgY3VycmVudFJhbmdlLCByYW5nZSkgPT4ge1xyXG4gICAgY29uc3QgZW5kID0gcmFuZ2Uub2Zmc2V0ICsgcmFuZ2UubGVuZ3RoO1xyXG4gICAgcmV0dXJuIChkaXJ0eUluZGV4IDw9IGVuZCB8fFxyXG4gICAgICAgIGN1cnJlbnRSYW5nZS5vZmZzZXQgIT09IHJhbmdlLm9mZnNldCB8fFxyXG4gICAgICAgIGN1cnJlbnRSYW5nZS5sZW5ndGggIT09IHJhbmdlLmxlbmd0aCk7XHJcbn07XHJcbmNvbnN0IGZpbmRDZWxsSW5kZXggPSAoY2VsbHMsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBtYXggPSBjZWxscy5sZW5ndGggPiAwID8gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV0uaW5kZXggOiAwO1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpbmRleCA9PT0gbWF4ICsgMSkge1xyXG4gICAgICAgIHJldHVybiBjZWxscy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY2VsbHMuZmluZEluZGV4KGMgPT4gYy5pbmRleCA9PT0gaW5kZXgpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBpbnBsYWNlVXBkYXRlID0gKGRzdCwgc3JjLCBvZmZzZXQpID0+IHtcclxuICAgIGlmIChvZmZzZXQgPT09IDAgJiYgc3JjLmxlbmd0aCA+PSBkc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNyYztcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRzdDtcclxufTtcclxuY29uc3QgY2FsY0NlbGxzID0gKGl0ZW1zLCBpdGVtSGVpZ2h0LCBoZWFkZXJIZWlnaHQsIGZvb3RlckhlaWdodCwgaGVhZGVyRm4sIGZvb3RlckZuLCBhcHByb3hIZWFkZXJIZWlnaHQsIGFwcHJveEZvb3RlckhlaWdodCwgYXBwcm94SXRlbUhlaWdodCwgaiwgb2Zmc2V0LCBsZW4pID0+IHtcclxuICAgIGNvbnN0IGNlbGxzID0gW107XHJcbiAgICBjb25zdCBlbmQgPSBsZW4gKyBvZmZzZXQ7XHJcbiAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgaWYgKGhlYWRlckZuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaGVhZGVyRm4oaXRlbSwgaSwgaXRlbXMpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaTogaisrLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENFTExfVFlQRV9IRUFERVIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgPyBoZWFkZXJIZWlnaHQodmFsdWUsIGkpIDogYXBwcm94SGVhZGVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRzOiBoZWFkZXJIZWlnaHQgPyAwIDogTUlOX1JFQURTLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6ICEhaGVhZGVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2VsbHMucHVzaCh7XHJcbiAgICAgICAgICAgIGk6IGorKyxcclxuICAgICAgICAgICAgdHlwZTogQ0VMTF9UWVBFX0lURU0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLFxyXG4gICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBpdGVtSGVpZ2h0ID8gaXRlbUhlaWdodChpdGVtLCBpKSA6IGFwcHJveEl0ZW1IZWlnaHQsXHJcbiAgICAgICAgICAgIHJlYWRzOiBpdGVtSGVpZ2h0ID8gMCA6IE1JTl9SRUFEUyxcclxuICAgICAgICAgICAgdmlzaWJsZTogISFpdGVtSGVpZ2h0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChmb290ZXJGbikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvb3RlckZuKGl0ZW0sIGksIGl0ZW1zKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGk6IGorKyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDRUxMX1RZUEVfRk9PVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZm9vdGVySGVpZ2h0ID8gZm9vdGVySGVpZ2h0KHZhbHVlLCBpKSA6IGFwcHJveEZvb3RlckhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICByZWFkczogZm9vdGVySGVpZ2h0ID8gMCA6IE1JTl9SRUFEUyxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiAhIWZvb3RlckhlaWdodCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNlbGxzO1xyXG59O1xyXG5jb25zdCBjYWxjSGVpZ2h0SW5kZXggPSAoYnVmLCBjZWxscywgaW5kZXgpID0+IHtcclxuICAgIGxldCBhY3VtID0gYnVmW2luZGV4XTtcclxuICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGJ1Zi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJ1ZltpXSA9IGFjdW07XHJcbiAgICAgICAgYWN1bSArPSBjZWxsc1tpXS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWN1bTtcclxufTtcclxuY29uc3QgcmVzaXplQnVmZmVyID0gKGJ1ZiwgbGVuKSA9PiB7XHJcbiAgICBpZiAoIWJ1Zikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkobGVuKTtcclxuICAgIH1cclxuICAgIGlmIChidWYubGVuZ3RoID09PSBsZW4pIHtcclxuICAgICAgICByZXR1cm4gYnVmO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGVuID4gYnVmLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG5ld0J1ZiA9IG5ldyBVaW50MzJBcnJheShsZW4pO1xyXG4gICAgICAgIG5ld0J1Zi5zZXQoYnVmKTtcclxuICAgICAgICByZXR1cm4gbmV3QnVmO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1Zi5zdWJhcnJheSgwLCBsZW4pO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBwb3NpdGlvbkZvckluZGV4ID0gKGluZGV4LCBjZWxscywgaGVpZ2h0SW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBjZWxscy5maW5kKGMgPT4gYy50eXBlID09PSBDRUxMX1RZUEVfSVRFTSAmJiBjLmluZGV4ID09PSBpbmRleCk7XHJcbiAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgIHJldHVybiBoZWlnaHRJbmRleFtjZWxsLmldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG59O1xuXG5jb25zdCBWaXJ0dWFsU2Nyb2xsID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5yYW5nZSA9IHsgb2Zmc2V0OiAwLCBsZW5ndGg6IDAgfTtcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICAgICAgdGhpcy52aXJ0dWFsRG9tID0gW107XG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlld3BvcnRPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGxUb3AgPSAwO1xuICAgICAgICB0aGlzLmluZGV4RGlydHkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RJdGVtTGVuID0gMDtcbiAgICAgICAgdGhpcy50b3RhbEhlaWdodCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdCBpcyBpbXBvcnRhbnQgdG8gcHJvdmlkZSB0aGlzXG4gICAgICAgICAqIGlmIHZpcnR1YWwgaXRlbSBoZWlnaHQgd2lsbCBiZSBzaWduaWZpY2FudGx5IGxhcmdlciB0aGFuIHRoZSBkZWZhdWx0XG4gICAgICAgICAqIFRoZSBhcHByb3hpbWF0ZSBoZWlnaHQgb2YgZWFjaCB2aXJ0dWFsIGl0ZW0gdGVtcGxhdGUncyBjZWxsLlxuICAgICAgICAgKiBUaGlzIGRpbWVuc2lvbiBpcyB1c2VkIHRvIGhlbHAgZGV0ZXJtaW5lIGhvdyBtYW55IGNlbGxzIHNob3VsZFxuICAgICAgICAgKiBiZSBjcmVhdGVkIHdoZW4gaW5pdGlhbGl6ZWQsIGFuZCB0byBoZWxwIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mXG4gICAgICAgICAqIHRoZSBzY3JvbGxhYmxlIGFyZWEuIFRoaXMgaGVpZ2h0IHZhbHVlIGNhbiBvbmx5IHVzZSBgcHhgIHVuaXRzLlxuICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGFjdHVhbCByZW5kZXJlZCBzaXplIG9mIGVhY2ggY2VsbCBjb21lcyBmcm9tIHRoZVxuICAgICAgICAgKiBhcHAncyBDU1MsIHdoZXJlYXMgdGhpcyBhcHByb3hpbWF0aW9uIGlzIHVzZWQgdG8gaGVscCBjYWxjdWxhdGVcbiAgICAgICAgICogaW5pdGlhbCBkaW1lbnNpb25zIGJlZm9yZSB0aGUgaXRlbSBoYXMgYmVlbiByZW5kZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXBwcm94SXRlbUhlaWdodCA9IDQ1O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFwcHJveGltYXRlIGhlaWdodCBvZiBlYWNoIGhlYWRlciB0ZW1wbGF0ZSdzIGNlbGwuXG4gICAgICAgICAqIFRoaXMgZGltZW5zaW9uIGlzIHVzZWQgdG8gaGVscCBkZXRlcm1pbmUgaG93IG1hbnkgY2VsbHMgc2hvdWxkXG4gICAgICAgICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICAgICAgICogdGhlIHNjcm9sbGFibGUgYXJlYS4gVGhpcyBoZWlnaHQgdmFsdWUgY2FuIG9ubHkgdXNlIGBweGAgdW5pdHMuXG4gICAgICAgICAqIE5vdGUgdGhhdCB0aGUgYWN0dWFsIHJlbmRlcmVkIHNpemUgb2YgZWFjaCBjZWxsIGNvbWVzIGZyb20gdGhlXG4gICAgICAgICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgICAgICAgKiBpbml0aWFsIGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBpdGVtIGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hcHByb3hIZWFkZXJIZWlnaHQgPSAzMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhcHByb3hpbWF0ZSB3aWR0aCBvZiBlYWNoIGZvb3RlciB0ZW1wbGF0ZSdzIGNlbGwuXG4gICAgICAgICAqIFRoaXMgZGltZW5zaW9uIGlzIHVzZWQgdG8gaGVscCBkZXRlcm1pbmUgaG93IG1hbnkgY2VsbHMgc2hvdWxkXG4gICAgICAgICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICAgICAgICogdGhlIHNjcm9sbGFibGUgYXJlYS4gVGhpcyBoZWlnaHQgdmFsdWUgY2FuIG9ubHkgdXNlIGBweGAgdW5pdHMuXG4gICAgICAgICAqIE5vdGUgdGhhdCB0aGUgYWN0dWFsIHJlbmRlcmVkIHNpemUgb2YgZWFjaCBjZWxsIGNvbWVzIGZyb20gdGhlXG4gICAgICAgICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgICAgICAgKiBpbml0aWFsIGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBpdGVtIGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hcHByb3hGb290ZXJIZWlnaHQgPSAzMDtcbiAgICAgICAgdGhpcy5vblNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlydHVhbFNjcm9sbCgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuY2FsY0NlbGxzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlydHVhbFNjcm9sbCgpO1xuICAgIH1cbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc3QgY29udGVudEVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tY29udGVudCcpO1xuICAgICAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignPGlvbi12aXJ0dWFsLXNjcm9sbD4gbXVzdCBiZSB1c2VkIGluc2lkZSBhbiA8aW9uLWNvbnRlbnQ+Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxFbCA9IGF3YWl0IGNvbnRlbnRFbC5nZXRTY3JvbGxFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuY29udGVudEVsID0gY29udGVudEVsO1xuICAgICAgICB0aGlzLmNhbGNDZWxscygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxFbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMuY2FsY0NlbGxzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlydHVhbFNjcm9sbCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgdmlydHVhbCBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKi9cbiAgICBwb3NpdGlvbkZvckl0ZW0oaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3NpdGlvbkZvckluZGV4KGluZGV4LCB0aGlzLmNlbGxzLCB0aGlzLmdldEhlaWdodEluZGV4KCkpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgbWFya3MgYSBzdWJzZXQgb2YgaXRlbXMgYXMgZGlydHksIHNvIHRoZXkgY2FuIGJlIHJlLXJlbmRlcmVkLiBJdGVtcyBzaG91bGQgYmUgbWFya2VkIGFzXG4gICAgICogZGlydHkgYW55IHRpbWUgdGhlIGNvbnRlbnQgb3IgdGhlaXIgc3R5bGUgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIFRoZSBzdWJzZXQgb2YgaXRlbXMgdG8gYmUgdXBkYXRlZCBjYW4gYXJlIHNwZWNpZmluZyBieSBhbiBvZmZzZXQgYW5kIGEgbGVuZ3RoLlxuICAgICAqL1xuICAgIGFzeW5jIGNoZWNrUmFuZ2Uob2Zmc2V0LCBsZW4gPSAtMSkge1xuICAgICAgICAvLyBUT0RPOiBraW5kIG9mIGhhY2t5IGhvdyB3ZSBkbyBpbi1wbGFjZSB1cGRhdGVkIG9mIHRoZSBjZWxsc1xuICAgICAgICAvLyBhcnJheS4gdGhpcyBwYXJ0IG5lZWRzIGEgY29tcGxldGUgcmVmYWN0b3JcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gKGxlbiA9PT0gLTEpXG4gICAgICAgICAgICA/IHRoaXMuaXRlbXMubGVuZ3RoIC0gb2Zmc2V0XG4gICAgICAgICAgICA6IGxlbjtcbiAgICAgICAgY29uc3QgY2VsbEluZGV4ID0gZmluZENlbGxJbmRleCh0aGlzLmNlbGxzLCBvZmZzZXQpO1xuICAgICAgICBjb25zdCBjZWxscyA9IGNhbGNDZWxscyh0aGlzLml0ZW1zLCB0aGlzLml0ZW1IZWlnaHQsIHRoaXMuaGVhZGVySGVpZ2h0LCB0aGlzLmZvb3RlckhlaWdodCwgdGhpcy5oZWFkZXJGbiwgdGhpcy5mb290ZXJGbiwgdGhpcy5hcHByb3hIZWFkZXJIZWlnaHQsIHRoaXMuYXBwcm94Rm9vdGVySGVpZ2h0LCB0aGlzLmFwcHJveEl0ZW1IZWlnaHQsIGNlbGxJbmRleCwgb2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgICB0aGlzLmNlbGxzID0gaW5wbGFjZVVwZGF0ZSh0aGlzLmNlbGxzLCBjZWxscywgY2VsbEluZGV4KTtcbiAgICAgICAgdGhpcy5sYXN0SXRlbUxlbiA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmluZGV4RGlydHkgPSBNYXRoLm1heChvZmZzZXQgLSAxLCAwKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXJrcyB0aGUgdGFpbCB0aGUgaXRlbXMgYXJyYXkgYXMgZGlydHksIHNvIHRoZXkgY2FuIGJlIHJlLXJlbmRlcmVkLlxuICAgICAqXG4gICAgICogSXQncyBlcXVpdmFsZW50IHRvIGNhbGxpbmc6XG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqIHZpcnR1YWxTY3JvbGwuY2hlY2tSYW5nZShsYXN0SXRlbUxlbik7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYXN5bmMgY2hlY2tFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUmFuZ2UodGhpcy5sYXN0SXRlbUxlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlVmlydHVhbFNjcm9sbCgpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiB2aXJ0dWFsLXNjcm9sbCBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGVkIHx8ICF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdW5zY2hlZHVsZSBmdXR1cmUgdXBkYXRlc1xuICAgICAgICBpZiAodGhpcy50aW1lclVwZGF0ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy50aW1lclVwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBzY2hlZHVsZSBET00gb3BlcmF0aW9ucyBpbnRvIHRoZSBzdGVuY2lsIHF1ZXVlXG4gICAgICAgIHJlYWRUYXNrKHRoaXMucmVhZFZTLmJpbmQodGhpcykpO1xuICAgICAgICB3cml0ZVRhc2sodGhpcy53cml0ZVZTLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZWFkVlMoKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGVudEVsLCBzY3JvbGxFbCwgZWwgfSA9IHRoaXM7XG4gICAgICAgIGxldCB0b3BPZmZzZXQgPSAwO1xuICAgICAgICBsZXQgbm9kZSA9IGVsO1xuICAgICAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBjb250ZW50RWwpIHtcbiAgICAgICAgICAgIHRvcE9mZnNldCArPSBub2RlLm9mZnNldFRvcDtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3cG9ydE9mZnNldCA9IHRvcE9mZnNldDtcbiAgICAgICAgaWYgKHNjcm9sbEVsKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gc2Nyb2xsRWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdyaXRlVlMoKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5SW5kZXggPSB0aGlzLmluZGV4RGlydHk7XG4gICAgICAgIC8vIGdldCB2aXNpYmxlIHZpZXdwb3J0XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuY3VycmVudFNjcm9sbFRvcCAtIHRoaXMudmlld3BvcnRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gZ2V0Vmlld3BvcnQoc2Nyb2xsVG9wLCB0aGlzLnZpZXdwb3J0SGVpZ2h0LCAxMDApO1xuICAgICAgICAvLyBjb21wdXRlIGxhemlseSB0aGUgaGVpZ2h0IGluZGV4XG4gICAgICAgIGNvbnN0IGhlaWdodEluZGV4ID0gdGhpcy5nZXRIZWlnaHRJbmRleCgpO1xuICAgICAgICAvLyBnZXQgYXJyYXkgYm91bmRzIG9mIHZpc2libGUgY2VsbHMgYmFzZSBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBnZXRSYW5nZShoZWlnaHRJbmRleCwgdmlld3BvcnQsIDIpO1xuICAgICAgICAvLyBmYXN0IHBhdGgsIGRvIG5vdGhpbmdcbiAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gZ2V0U2hvdWxkVXBkYXRlKGRpcnR5SW5kZXgsIHRoaXMucmFuZ2UsIHJhbmdlKTtcbiAgICAgICAgaWYgKCFzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XG4gICAgICAgIC8vIGluIHBsYWNlIG11dGF0aW9uIG9mIHRoZSB2aXJ0dWFsIERPTVxuICAgICAgICB1cGRhdGVWRG9tKHRoaXMudmlydHVhbERvbSwgaGVpZ2h0SW5kZXgsIHRoaXMuY2VsbHMsIHJhbmdlKTtcbiAgICAgICAgLy8gV3JpdGUgRE9NXG4gICAgICAgIC8vIERpZmZlcmVudCBjb2RlIHBhdGhzIHRha2VuIGRlcGVuZGluZyBvZiB0aGUgcmVuZGVyIEFQSSB1c2VkXG4gICAgICAgIGlmICh0aGlzLm5vZGVSZW5kZXIpIHtcbiAgICAgICAgICAgIGRvUmVuZGVyKHRoaXMuZWwsIHRoaXMubm9kZVJlbmRlciwgdGhpcy52aXJ0dWFsRG9tLCB0aGlzLnVwZGF0ZUNlbGxIZWlnaHQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kb21SZW5kZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tUmVuZGVyKHRoaXMudmlydHVhbERvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZW5kZXJJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlQ2VsbEhlaWdodChjZWxsLCBub2RlKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlWyckaW9uQ2VsbCddID09PSBjZWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodCArIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxIZWlnaHQoY2VsbCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5jb21wb25lbnRPblJlYWR5KSB7XG4gICAgICAgICAgICBub2RlLmNvbXBvbmVudE9uUmVhZHkoKS50aGVuKHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRDZWxsSGVpZ2h0KGNlbGwsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGNlbGwuaTtcbiAgICAgICAgLy8gdGhlIGNlbGwgbWlnaHQgY2hhbmdlZCBzaW5jZSB0aGUgaGVpZ2h0IHVwZGF0ZSB3YXMgc2NoZWR1bGVkXG4gICAgICAgIGlmIChjZWxsICE9PSB0aGlzLmNlbGxzW2luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsLmhlaWdodCAhPT0gaGVpZ2h0IHx8IGNlbGwudmlzaWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2VsbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNlbGwuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5pbmRleERpcnR5ID0gTWF0aC5taW4odGhpcy5pbmRleERpcnR5LCBpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2NoZWR1bGVVcGRhdGUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyVXBkYXRlKTtcbiAgICAgICAgdGhpcy50aW1lclVwZGF0ZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVWaXJ0dWFsU2Nyb2xsKCksIDEwMCk7XG4gICAgfVxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBzaG91bGRFbmFibGUgPSAhISh0aGlzLnNjcm9sbEVsICYmXG4gICAgICAgICAgICB0aGlzLmNlbGxzKTtcbiAgICAgICAgaWYgKHNob3VsZEVuYWJsZSAhPT0gdGhpcy5pc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsRXZlbnRzKHNob3VsZEVuYWJsZSk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkRW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXJ0dWFsU2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FsY0NlbGxzKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RJdGVtTGVuID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2VsbHMgPSBjYWxjQ2VsbHModGhpcy5pdGVtcywgdGhpcy5pdGVtSGVpZ2h0LCB0aGlzLmhlYWRlckhlaWdodCwgdGhpcy5mb290ZXJIZWlnaHQsIHRoaXMuaGVhZGVyRm4sIHRoaXMuZm9vdGVyRm4sIHRoaXMuYXBwcm94SGVhZGVySGVpZ2h0LCB0aGlzLmFwcHJveEZvb3RlckhlaWdodCwgdGhpcy5hcHByb3hJdGVtSGVpZ2h0LCAwLCAwLCB0aGlzLmxhc3RJdGVtTGVuKTtcbiAgICAgICAgdGhpcy5pbmRleERpcnR5ID0gMDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0SW5kZXgoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4RGlydHkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGNIZWlnaHRJbmRleCh0aGlzLmluZGV4RGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodEluZGV4O1xuICAgIH1cbiAgICBjYWxjSGVpZ2h0SW5kZXgoaW5kZXggPSAwKSB7XG4gICAgICAgIC8vIFRPRE86IG9wdGltaXplLCB3ZSBkb24ndCBuZWVkIHRvIGNhbGN1bGF0ZSBhbGwgdGhlIGNlbGxzXG4gICAgICAgIHRoaXMuaGVpZ2h0SW5kZXggPSByZXNpemVCdWZmZXIodGhpcy5oZWlnaHRJbmRleCwgdGhpcy5jZWxscy5sZW5ndGgpO1xuICAgICAgICB0aGlzLnRvdGFsSGVpZ2h0ID0gY2FsY0hlaWdodEluZGV4KHRoaXMuaGVpZ2h0SW5kZXgsIHRoaXMuY2VsbHMsIGluZGV4KTtcbiAgICAgICAgdGhpcy5pbmRleERpcnR5ID0gSW5maW5pdHk7XG4gICAgfVxuICAgIGVuYWJsZVNjcm9sbEV2ZW50cyhzaG91bGRMaXN0ZW4pIHtcbiAgICAgICAgaWYgKHRoaXMucm1FdmVudCkge1xuICAgICAgICAgICAgdGhpcy5ybUV2ZW50KCk7XG4gICAgICAgICAgICB0aGlzLnJtRXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgICAgICBpZiAoc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbmFibGVkID0gc2hvdWxkTGlzdGVuO1xuICAgICAgICAgICAgc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICB0aGlzLnJtRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlclZpcnR1YWxOb2RlKG5vZGUpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCB2YWx1ZSwgaW5kZXggfSA9IG5vZGUuY2VsbDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENFTExfVFlQRV9JVEVNOiByZXR1cm4gdGhpcy5yZW5kZXJJdGVtKHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjYXNlIENFTExfVFlQRV9IRUFERVI6IHJldHVybiB0aGlzLnJlbmRlckhlYWRlcih2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgY2FzZSBDRUxMX1RZUEVfRk9PVEVSOiByZXR1cm4gdGhpcy5yZW5kZXJGb290ZXIodmFsdWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLnRvdGFsSGVpZ2h0fXB4YFxuICAgICAgICAgICAgfSB9LCB0aGlzLnJlbmRlckl0ZW0gJiYgKGgoVmlydHVhbFByb3h5LCB7IGRvbTogdGhpcy52aXJ0dWFsRG9tIH0sIHRoaXMudmlydHVhbERvbS5tYXAobm9kZSA9PiB0aGlzLnJlbmRlclZpcnR1YWxOb2RlKG5vZGUpKSkpKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcIml0ZW1IZWlnaHRcIjogW1wiaXRlbXNDaGFuZ2VkXCJdLFxuICAgICAgICBcImhlYWRlckhlaWdodFwiOiBbXCJpdGVtc0NoYW5nZWRcIl0sXG4gICAgICAgIFwiZm9vdGVySGVpZ2h0XCI6IFtcIml0ZW1zQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJpdGVtc1wiOiBbXCJpdGVtc0NoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiaW9uLXZpcnR1YWwtc2Nyb2xse2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtjb250YWluOnN0cmljdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9aW9uLXZpcnR1YWwtc2Nyb2xsPi52aXJ0dWFsLWxvYWRpbmd7b3BhY2l0eTowfWlvbi12aXJ0dWFsLXNjcm9sbD4udmlydHVhbC1pdGVte3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDt0b3A6MCFpbXBvcnRhbnQ7cmlnaHQ6MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MG1zO3RyYW5zaXRpb24tZHVyYXRpb246MG1zO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX1cIjsgfVxufTtcbmNvbnN0IFZpcnR1YWxQcm94eSA9ICh7IGRvbSB9LCBjaGlsZHJlbiwgdXRpbHMpID0+IHtcbiAgICByZXR1cm4gdXRpbHMubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvbVtpXTtcbiAgICAgICAgY29uc3QgdmF0dHJzID0gY2hpbGQudmF0dHJzIHx8IHt9O1xuICAgICAgICBsZXQgY2xhc3NlcyA9IHZhdHRycy5jbGFzcyB8fCAnJztcbiAgICAgICAgY2xhc3NlcyArPSAndmlydHVhbC1pdGVtICc7XG4gICAgICAgIGlmICghbm9kZS52aXNpYmxlKSB7XG4gICAgICAgICAgICBjbGFzc2VzICs9ICd2aXJ0dWFsLWxvYWRpbmcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNoaWxkKSwgeyB2YXR0cnM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmF0dHJzKSwgeyBjbGFzczogY2xhc3Nlcywgc3R5bGU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmF0dHJzLnN0eWxlKSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCR7bm9kZS50b3B9cHgsMClgIH0pIH0pIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgVmlydHVhbFNjcm9sbCBhcyBpb25fdmlydHVhbF9zY3JvbGwgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=