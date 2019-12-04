(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "../node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \*********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_menu, ion_menu_button, ion_menu_controller, ion_menu_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_button", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_controller", function() { return MenuController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function() { return MenuToggle; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js");
/* harmony import */ var _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-1e5940d5.js */ "../node_modules/@ionic/core/dist/esm/index-1e5940d5.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "../node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");









const Menu = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastOnEnd = 0;
        this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_4__["GESTURE_CONTROLLER"].createBlocker({ disableScroll: true });
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        /**
         * If `true`, the menu is disabled.
         */
        this.disabled = false;
        /**
         * Which side of the view the menu should be placed.
         */
        this.side = 'start';
        /**
         * If `true`, swiping the menu is enabled.
         */
        this.swipeGesture = true;
        /**
         * The edge threshold for dragging the menu open.
         * If a drag/swipe happens over this value, the menu is not triggered.
         */
        this.maxEdgeStart = 50;
        this.ionWillOpen = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionWillOpen", 7);
        this.ionWillClose = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionWillClose", 7);
        this.ionDidOpen = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDidOpen", 7);
        this.ionDidClose = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDidClose", 7);
        this.ionMenuChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionMenuChange", 7);
    }
    typeChanged(type, oldType) {
        const contentEl = this.contentEl;
        if (contentEl) {
            if (oldType !== undefined) {
                contentEl.classList.remove(`menu-content-${oldType}`);
            }
            contentEl.classList.add(`menu-content-${type}`);
            contentEl.removeAttribute('style');
        }
        if (this.menuInnerEl) {
            // Remove effects of previous animations
            this.menuInnerEl.removeAttribute('style');
        }
        this.animation = undefined;
    }
    disabledChanged() {
        this.updateState();
        this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
        });
    }
    sideChanged() {
        this.isEndSide = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
    }
    swipeGestureChanged() {
        this.updateState();
    }
    async connectedCallback() {
        if (this.type === undefined) {
            this.type = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
        }
        const el = this.el;
        const parent = el.parentNode;
        if (this.contentId === undefined) {
            console.warn(`[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:
BEFORE:
  <ion-menu>...</ion-menu>
  <div main>...</div>

AFTER:
  <ion-menu contentId="my-content"></ion-menu>
  <div id="my-content">...</div>
`);
        }
        const content = this.contentId !== undefined
            ? document.getElementById(this.contentId)
            : parent && parent.querySelector && parent.querySelector('[main]');
        if (!content || !content.tagName) {
            // requires content element
            console.error('Menu: must have a "content" element to listen for drag events on.');
            return;
        }
        this.contentEl = content;
        // add menu's content classes
        content.classList.add('menu-content');
        this.typeChanged(this.type, undefined);
        this.sideChanged();
        // register this menu with the app's menu controller
        _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._register(this);
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: document,
            gestureName: 'menu-swipe',
            gesturePriority: 30,
            threshold: 10,
            canStart: ev => this.canStart(ev),
            onWillStart: () => this.onWillStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.updateState();
    }
    async componentDidLoad() {
        this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
        this.updateState();
    }
    disconnectedCallback() {
        this.blocker.destroy();
        _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._unregister(this);
        if (this.animation) {
            this.animation.destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.animation = undefined;
        this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
    }
    onSplitPaneChanged(ev) {
        this.isPaneVisible = ev.detail.isPane(this.el);
        this.updateState();
    }
    onBackdropClick(ev) {
        if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
            const shouldClose = (ev.composedPath)
                ? !ev.composedPath().includes(this.menuInnerEl)
                : false;
            if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
            }
        }
    }
    /**
     * Returns `true` is the menu is open.
     */
    isOpen() {
        return Promise.resolve(this._isOpen);
    }
    /**
     * Returns `true` is the menu is active.
     *
     * A menu is active when it can be opened or closed, meaning it's enabled
     * and it's not part of a `ion-split-pane`.
     */
    isActive() {
        return Promise.resolve(this._isActive());
    }
    /**
     * Opens the menu. If the menu is already open or it can't be opened,
     * it returns `false`.
     */
    open(animated = true) {
        return this.setOpen(true, animated);
    }
    /**
     * Closes the menu. If the menu is already closed or it can't be closed,
     * it returns `false`.
     */
    close(animated = true) {
        return this.setOpen(false, animated);
    }
    /**
     * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
     * If the operation can't be completed successfully, it returns `false`.
     */
    toggle(animated = true) {
        return this.setOpen(!this._isOpen, animated);
    }
    /**
     * Opens or closes the button.
     * If the operation can't be completed successfully, it returns `false`.
     */
    setOpen(shouldOpen, animated = true) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setOpen(this, shouldOpen, animated);
    }
    async _setOpen(shouldOpen, animated = true) {
        // If the menu is disabled or it is currently being animated, let's do nothing
        if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
            return false;
        }
        this.beforeAnimation(shouldOpen);
        await this.loadAnimation();
        await this.startAnimation(shouldOpen, animated);
        this.afterAnimation(shouldOpen);
        return true;
    }
    async loadAnimation() {
        // Menu swipe animation takes the menu's inner width as parameter,
        // If `offsetWidth` changes, we need to create a new animation.
        const width = this.menuInnerEl.offsetWidth;
        if (width === this.width && this.animation !== undefined) {
            return;
        }
        this.width = width;
        // Destroy existing animation
        if (this.animation) {
            this.animation.destroy();
            this.animation = undefined;
        }
        // Create new animation
        this.animation = await _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._createAnimation(this.type, this);
        if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true)) {
            this.animation.duration(0);
        }
        this.animation.fill('both');
    }
    async startAnimation(shouldOpen, animated) {
        const isReversed = !shouldOpen;
        const ani = this.animation
            .direction((isReversed) ? 'reverse' : 'normal')
            .easing((isReversed) ? 'cubic-bezier(0.4, 0.0, 0.6, 1)' : 'cubic-bezier(0.0, 0.0, 0.2, 1)');
        if (animated) {
            await ani.playAsync();
        }
        else {
            ani.playSync();
        }
    }
    _isActive() {
        return !this.disabled && !this.isPaneVisible;
    }
    canSwipe() {
        return this.swipeGesture && !this.isAnimating && this._isActive();
    }
    canStart(detail) {
        if (!this.canSwipe()) {
            return false;
        }
        if (this._isOpen) {
            return true;
            // TODO error
        }
        else if (_index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._getOpenSync()) {
            return false;
        }
        return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
    }
    onWillStart() {
        this.beforeAnimation(!this._isOpen);
        return this.loadAnimation();
    }
    onStart() {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
        }
        // the cloned animation should not use an easing curve during seek
        this.animation
            .direction((this._isOpen) ? 'reverse' : 'normal')
            .progressStart(true);
    }
    onMove(detail) {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
        }
        const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
        const stepValue = delta / this.width;
        this.animation.progressStep(stepValue);
    }
    onEnd(detail) {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
        }
        const isOpen = this._isOpen;
        const isEndSide = this.isEndSide;
        const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
        const width = this.width;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
        const shouldComplete = isOpen
            ? isEndSide ? shouldCompleteRight : shouldCompleteLeft
            : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
        let shouldOpen = !isOpen && shouldComplete;
        if (isOpen && !shouldComplete) {
            shouldOpen = true;
        }
        this.lastOnEnd = detail.timeStamp;
        // Account for rounding errors in JS
        let newStepValue = (shouldComplete) ? 0.001 : -0.001;
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */
        const adjustedStepValue = (stepValue <= 0) ? 0.01 : stepValue;
        /**
         * Animation will be reversed here, so need to
         * reverse the easing curve as well
         *
         * Additionally, we need to account for the time relative
         * to the new easing curve, as `stepValue` is going to be given
         * in terms of a linear curve.
         */
        newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.4, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.6, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, adjustedStepValue, 1));
        this.animation
            .easing('cubic-bezier(0.4, 0.0, 0.6, 1)')
            .onFinish(() => this.afterAnimation(shouldOpen), { oneTimeCallback: true })
            .progressEnd(shouldComplete ? 1 : 0, newStepValue, 300);
    }
    beforeAnimation(shouldOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, '_before() should not be called while animating');
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.el.classList.add(SHOW_MENU);
        if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
        }
        this.blocker.block();
        this.isAnimating = true;
        if (shouldOpen) {
            this.ionWillOpen.emit();
        }
        else {
            this.ionWillClose.emit();
        }
    }
    afterAnimation(isOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.isAnimating, '_before() should be called while animating');
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        this._isOpen = isOpen;
        this.isAnimating = false;
        if (!this._isOpen) {
            this.blocker.unblock();
        }
        if (isOpen) {
            // add css class
            if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
            }
            // emit open event
            this.ionDidOpen.emit();
        }
        else {
            // remove css classes
            this.el.classList.remove(SHOW_MENU);
            if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }
            if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
            }
            if (this.animation) {
                this.animation.stop();
            }
            // emit close event
            this.ionDidClose.emit();
        }
    }
    updateState() {
        const isActive = this._isActive();
        if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
        }
        // Close menu immediately
        if (!isActive && this._isOpen) {
            // close if this menu is open, and should not be enabled
            this.forceClosing();
        }
        if (!this.disabled) {
            _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setActiveMenu(this);
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, 'can not be animating');
    }
    forceClosing() {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        const ani = this.animation.direction('reverse');
        ani.playSync();
        this.afterAnimation(false);
    }
    render() {
        const { isEndSide, type, disabled, mode, isPaneVisible } = this;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "navigation", class: {
                [mode]: true,
                [`menu-type-${type}`]: true,
                'menu-enabled': !disabled,
                'menu-side-end': isEndSide,
                'menu-side-start': !isEndSide,
                'menu-pane-visible': isPaneVisible
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-inner", ref: el => this.menuInnerEl = el }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { ref: el => this.backdropEl = el, class: "menu-backdrop", tappable: false, stopPropagation: false })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "type": ["typeChanged"],
        "disabled": ["disabledChanged"],
        "side": ["sideChanged"],
        "swipeGesture": ["swipeGestureChanged"]
    }; }
    static get style() { return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"; }
};
const computeDelta = (deltaX, isOpen, isEndSide) => {
    return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
    if (isEndSide) {
        return posX >= win.innerWidth - maxEdgeStart;
    }
    else {
        return posX <= maxEdgeStart;
    }
};
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
    const menuEl = await _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu);
    return !!(menuEl && await menuEl.isActive());
};

const MenuButton = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */
        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */
        this.autoHide = true;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = async () => {
            return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(this.menu);
        };
    }
    componentDidLoad() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const { color, disabled } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const menuIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuIcon', 'menu');
        const hidden = this.autoHide && !this.visible;
        const attrs = {
            type: this.type
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: Object.assign(Object.assign({ [mode]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["c"])(color)), { 'button': true, 'menu-button-hidden': hidden, 'menu-button-disabled': disabled, 'ion-activatable': true, 'ion-focusable': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", Object.assign({}, attrs, { disabled: disabled, class: "button-native" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: menuIcon, mode: mode, lazy: false })), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: "unbounded" }))));
    }
    static get style() { return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}\@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"; }
};

const MenuController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Open the menu. If a menu is not provided then it will open the first
     * menu found. If the specified menu is `start` or `end`, then it will open
     * the enabled menu on that side. Otherwise, it will try to find the menu
     * using the menu's `id` property. If a menu is not found then it will
     * return `false`.
     *
     * @param menu The menuId or side of the menu to open.
     */
    open(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].open(menu);
    }
    /**
     * Close the menu. If a menu is specified, it will close that menu.
     * If no menu is specified, then it will close any menu that is open.
     * If it does not find any open menus, it will return `false`.
     *
     * @param menu The menuId or side of the menu to close.
     */
    close(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].close(menu);
    }
    /**
     * Toggle the menu open or closed. If the menu is already open, it will try to
     * close the menu, otherwise it will try to open it. Returns `false` if
     * a menu is not found.
     *
     * @param menu The menuId or side of the menu to toggle.
     */
    toggle(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(menu);
    }
    /**
     * Enable or disable a menu. Disabling a menu will not allow gestures
     * for that menu or any calls to open it. This is useful when there are
     * multiple menus on the same side and only one of them should be allowed
     * to open. Enabling a menu will automatically disable all other menus
     * on that side.
     *
     * @param enable If `true`, the menu should be enabled.
     * @param menu The menuId or side of the menu to enable or disable.
     */
    enable(enable, menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].enable(enable, menu);
    }
    /**
     * Enable or disable the ability to swipe open the menu.
     *
     * @param enable If `true`, the menu swipe gesture should be enabled.
     * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
     */
    swipeGesture(enable, menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].swipeGesture(enable, menu);
    }
    /**
     * Get whether or not the menu is open. Returns `true` if the specified
     * menu is open. If a menu is not specified, it will return `true` if
     * any menu is currently open.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    isOpen(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isOpen(menu);
    }
    /**
     * Get whether or not the menu is enabled. Returns `true` if the
     * specified menu is enabled. Returns `false` if a menu is disabled
     * or not found.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    isEnabled(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isEnabled(menu);
    }
    /**
     * Get a menu instance. If a menu is not provided then it will return the first
     * menu found. If the specified menu is `start` or `end`, then it will return the
     * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
     * `id` property. If a menu is not found then it will return `null`.
     *
     * @param menu The menuId or side of the menu.
     */
    get(menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu);
    }
    /**
     * Get the instance of the opened menu. Returns `null` if a menu is not found.
     */
    getOpen() {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].getOpen();
    }
    /**
     * Get all menu instances.
     */
    getMenus() {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].getMenus();
    }
    /**
     * Get whether or not a menu is animating. Returns `true` if any
     * menu is currently animating.
     */
    isAnimating() {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isAnimating();
    }
    /**
     * Registers a new animation that can be used with any `ion-menu` by
     * passing the name of the animation in its `type` property.
     *
     * @param name The name of the animation to register.
     * @param animation The animation function to register.
     */
    async registerAnimation(name, animation) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].registerAnimation(name, animation);
    }
};

const MenuToggle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.onClick = () => {
            return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(this.menu);
        };
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const hidden = this.autoHide && !this.visible;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host(.menu-toggle-hidden){display:none}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1tZW51XzQtbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0Q7Ozs7Ozs7Ozs7Ozs7QUM1RnBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQzFFO0FBQzZCO0FBQy9DO0FBQ3dCO0FBQ0M7QUFDSTtBQUN3Qjs7QUFFdEY7QUFDQTtBQUNB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QUFJLEdBQUc7QUFDekI7QUFDQTtBQUNBLGFBQWEsRUFBRSxFQUFFLDJEQUFDO0FBQ2xCO0FBQ0Esd0JBQXdCLG9DQUFvQyxhQUFhLEVBQUU7QUFDM0U7O0FBRWlJOzs7Ozs7Ozs7Ozs7O0FDbm5Cakk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiIxNlxcY2h1bmtzXFwxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCYXNlZCBvbjpcclxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzM0ODAwOS95LWNvb3JkaW5hdGUtZm9yLWEtZ2l2ZW4teC1jdWJpYy1iZXppZXJcclxuICogaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8yNjg0Ni9pcy10aGVyZS1hbi1leHBsaWNpdC1mb3JtLWZvci1jdWJpYy1iJUMzJUE5emllci1jdXJ2ZXNcclxuICogVE9ETzogUmVkdWNlIHJvdW5kaW5nIGVycm9yXHJcbiAqL1xyXG5jbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiBhIGN1YmljLWJlemllciBjdXJ2ZSwgZ2V0IHRoZSB4IHZhbHVlICh0aW1lKSBnaXZlblxyXG4gKiB0aGUgeSB2YWx1ZSAocHJvZ3Jlc3Npb24pLlxyXG4gKiBFeDogY3ViaWMtYmV6aWVyKDAuMzIsIDAuNzIsIDAsIDEpO1xyXG4gKiBQMDogKDAsIDApXHJcbiAqIFAxOiAoMC4zMiwgMC43MilcclxuICogUDI6ICgwLCAxKVxyXG4gKiBQMzogKDEsIDEpXHJcbiAqXHJcbiAqIElmIHlvdSBnaXZlIGEgY3ViaWMgYmV6aWVyIGN1cnZlIHRoYXQgbmV2ZXIgcmVhY2hlcyB0aGVcclxuICogcHJvdmlkZWQgcHJvZ3Jlc3Npb24sIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gTmFOLlxyXG4gKi9cclxuY29uc3QgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gPSAocDAsIHAxLCBwMiwgcDMsIHByb2dyZXNzaW9uKSA9PiB7XHJcbiAgICBjb25zdCB0VmFsdWVzID0gc29sdmVDdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCBwMy55LCBwcm9ncmVzc2lvbik7XHJcbiAgICByZXR1cm4gc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbihwMC54LCBwMS54LCBwMi54LCBwMy54LCB0VmFsdWVzWzBdKTsgLy8gVE9ETzogQWRkIGJldHRlciBzdHJhdGVneSBmb3IgZGVhbGluZyB3aXRoIG11bHRpcGxlIHNvbHV0aW9uc1xyXG59O1xyXG4vKipcclxuICogU29sdmUgYSBjdWJpYyBlcXVhdGlvbiBpbiBvbmUgZGltZW5zaW9uICh0aW1lKVxyXG4gKi9cclxuY29uc3Qgc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbiA9IChwMCwgcDEsIHAyLCBwMywgdCkgPT4ge1xyXG4gICAgY29uc3QgcGFydEEgPSAoMyAqIHAxKSAqIE1hdGgucG93KHQgLSAxLCAyKTtcclxuICAgIGNvbnN0IHBhcnRCID0gKC0zICogcDIgKiB0KSArICgzICogcDIpICsgKHAzICogdCk7XHJcbiAgICBjb25zdCBwYXJ0QyA9IHAwICogTWF0aC5wb3codCAtIDEsIDMpO1xyXG4gICAgcmV0dXJuIHQgKiAocGFydEEgKyAodCAqIHBhcnRCKSkgLSBwYXJ0QztcclxufTtcclxuLyoqXHJcbiAqIEZpbmQgdGhlIGB0YCB2YWx1ZSBmb3IgYSBjdWJpYyBiZXppZXIgdXNpbmcgQ2FyZGFubydzIGZvcm11bGFcclxuICovXHJcbmNvbnN0IHNvbHZlQ3ViaWNCZXppZXIgPSAocDAsIHAxLCBwMiwgcDMsIHJlZlBvaW50KSA9PiB7XHJcbiAgICBwMCAtPSByZWZQb2ludDtcclxuICAgIHAxIC09IHJlZlBvaW50O1xyXG4gICAgcDIgLT0gcmVmUG9pbnQ7XHJcbiAgICBwMyAtPSByZWZQb2ludDtcclxuICAgIGNvbnN0IHJvb3RzID0gc29sdmVDdWJpY0VxdWF0aW9uKHAzIC0gMyAqIHAyICsgMyAqIHAxIC0gcDAsIDMgKiBwMiAtIDYgKiBwMSArIDMgKiBwMCwgMyAqIHAxIC0gMyAqIHAwLCBwMCk7XHJcbiAgICByZXR1cm4gcm9vdHMuZmlsdGVyKHJvb3QgPT4gcm9vdCA+PSAwICYmIHJvb3QgPD0gMSk7XHJcbn07XHJcbmNvbnN0IHNvbHZlUXVhZHJhdGljRXF1YXRpb24gPSAoYSwgYiwgYykgPT4ge1xyXG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0ICogYSAqIGM7XHJcbiAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICgtYiArIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSksXHJcbiAgICAgICAgICAgICgtYiAtIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzb2x2ZUN1YmljRXF1YXRpb24gPSAoYSwgYiwgYywgZCkgPT4ge1xyXG4gICAgaWYgKGEgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gc29sdmVRdWFkcmF0aWNFcXVhdGlvbihiLCBjLCBkKTtcclxuICAgIH1cclxuICAgIGIgLz0gYTtcclxuICAgIGMgLz0gYTtcclxuICAgIGQgLz0gYTtcclxuICAgIGNvbnN0IHAgPSAoMyAqIGMgLSBiICogYikgLyAzO1xyXG4gICAgY29uc3QgcSA9ICgyICogYiAqIGIgKiBiIC0gOSAqIGIgKiBjICsgMjcgKiBkKSAvIDI3O1xyXG4gICAgaWYgKHAgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucG93KC1xLCAxIC8gMyldO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5zcXJ0KC1wKSwgLU1hdGguc3FydCgtcCldO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gTWF0aC5wb3cocSAvIDIsIDIpICsgTWF0aC5wb3cocCAvIDMsIDMpO1xyXG4gICAgaWYgKGRpc2NyaW1pbmFudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5wb3cocSAvIDIsIDEgLyAyKSAtIGIgLyAzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRpc2NyaW1pbmFudCA+IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucG93KC0ocSAvIDIpICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCksIDEgLyAzKSAtIE1hdGgucG93KChxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gYiAvIDNdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgciA9IE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpO1xyXG4gICAgY29uc3QgcGhpID0gTWF0aC5hY29zKC0ocSAvICgyICogTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSkpKSk7XHJcbiAgICBjb25zdCBzID0gMiAqIE1hdGgucG93KHIsIDEgLyAzKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgcyAqIE1hdGguY29zKHBoaSAvIDMpIC0gYiAvIDMsXHJcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyAyICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzLFxyXG4gICAgICAgIHMgKiBNYXRoLmNvcygocGhpICsgNCAqIE1hdGguUEkpIC8gMykgLSBiIC8gM1xyXG4gICAgXTtcclxufTtcblxuZXhwb3J0IHsgUG9pbnQgYXMgUCwgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gYXMgZyB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGdldElvbk1vZGUsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCB7IGIgYXMgY29uZmlnIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0VuZFNpZGUsIGIgYXMgYXNzZXJ0LCBjIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0IHsgR0VTVFVSRV9DT05UUk9MTEVSIH0gZnJvbSAnLi9pbmRleC02MjRlZWE1OC5qcyc7XG5pbXBvcnQgeyBtIGFzIG1lbnVDb250cm9sbGVyIH0gZnJvbSAnLi9pbmRleC0xZTU5NDBkNS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiwgUCBhcyBQb2ludCB9IGZyb20gJy4vY3ViaWMtYmV6aWVyLTI4MTJmZGEzLmpzJztcblxuY29uc3QgTWVudSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubGFzdE9uRW5kID0gMDtcbiAgICAgICAgdGhpcy5ibG9ja2VyID0gR0VTVFVSRV9DT05UUk9MTEVSLmNyZWF0ZUJsb2NrZXIoeyBkaXNhYmxlU2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGFuZVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0VuZFNpZGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG1lbnUgaXMgZGlzYWJsZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGljaCBzaWRlIG9mIHRoZSB2aWV3IHRoZSBtZW51IHNob3VsZCBiZSBwbGFjZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpZGUgPSAnc3RhcnQnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBzd2lwaW5nIHRoZSBtZW51IGlzIGVuYWJsZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN3aXBlR2VzdHVyZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZWRnZSB0aHJlc2hvbGQgZm9yIGRyYWdnaW5nIHRoZSBtZW51IG9wZW4uXG4gICAgICAgICAqIElmIGEgZHJhZy9zd2lwZSBoYXBwZW5zIG92ZXIgdGhpcyB2YWx1ZSwgdGhlIG1lbnUgaXMgbm90IHRyaWdnZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWF4RWRnZVN0YXJ0ID0gNTA7XG4gICAgICAgIHRoaXMuaW9uV2lsbE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbldpbGxPcGVuXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbldpbGxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uV2lsbENsb3NlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkRpZE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkRpZE9wZW5cIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRGlkQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkRpZENsb3NlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbk1lbnVDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1lbnVDaGFuZ2VcIiwgNyk7XG4gICAgfVxuICAgIHR5cGVDaGFuZ2VkKHR5cGUsIG9sZFR5cGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudEVsID0gdGhpcy5jb250ZW50RWw7XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICAgIGlmIChvbGRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWwuY2xhc3NMaXN0LnJlbW92ZShgbWVudS1jb250ZW50LSR7b2xkVHlwZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRFbC5jbGFzc0xpc3QuYWRkKGBtZW51LWNvbnRlbnQtJHt0eXBlfWApO1xuICAgICAgICAgICAgY29udGVudEVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tZW51SW5uZXJFbCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGVmZmVjdHMgb2YgcHJldmlvdXMgYW5pbWF0aW9uc1xuICAgICAgICAgICAgdGhpcy5tZW51SW5uZXJFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB0aGlzLmlvbk1lbnVDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgIG9wZW46IHRoaXMuX2lzT3BlblxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lkZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuaXNFbmRTaWRlID0gaXNFbmRTaWRlKHRoaXMuc2lkZSk7XG4gICAgfVxuICAgIHN3aXBlR2VzdHVyZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gY29uZmlnLmdldCgnbWVudVR5cGUnLCB0aGlzLm1vZGUgPT09ICdpb3MnID8gJ3JldmVhbCcgOiAnb3ZlcmxheScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW0RFUFJFQ0FURURdW2lvbi1tZW51XSBVc2luZyB0aGUgW21haW5dIGF0dHJpYnV0ZSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHRoZSBcImNvbnRlbnRJZFwiIHByb3BlcnR5IGluc3RlYWQ6XG5CRUZPUkU6XG4gIDxpb24tbWVudT4uLi48L2lvbi1tZW51PlxuICA8ZGl2IG1haW4+Li4uPC9kaXY+XG5cbkFGVEVSOlxuICA8aW9uLW1lbnUgY29udGVudElkPVwibXktY29udGVudFwiPjwvaW9uLW1lbnU+XG4gIDxkaXYgaWQ9XCJteS1jb250ZW50XCI+Li4uPC9kaXY+XG5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50SWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRlbnRJZClcbiAgICAgICAgICAgIDogcGFyZW50ICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbbWFpbl0nKTtcbiAgICAgICAgaWYgKCFjb250ZW50IHx8ICFjb250ZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICAgIC8vIHJlcXVpcmVzIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVudTogbXVzdCBoYXZlIGEgXCJjb250ZW50XCIgZWxlbWVudCB0byBsaXN0ZW4gZm9yIGRyYWcgZXZlbnRzIG9uLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGVudEVsID0gY29udGVudDtcbiAgICAgICAgLy8gYWRkIG1lbnUncyBjb250ZW50IGNsYXNzZXNcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRlbnQnKTtcbiAgICAgICAgdGhpcy50eXBlQ2hhbmdlZCh0aGlzLnR5cGUsIHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuc2lkZUNoYW5nZWQoKTtcbiAgICAgICAgLy8gcmVnaXN0ZXIgdGhpcyBtZW51IHdpdGggdGhlIGFwcCdzIG1lbnUgY29udHJvbGxlclxuICAgICAgICBtZW51Q29udHJvbGxlci5fcmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgICBlbDogZG9jdW1lbnQsXG4gICAgICAgICAgICBnZXN0dXJlTmFtZTogJ21lbnUtc3dpcGUnLFxuICAgICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAzMCxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMTAsXG4gICAgICAgICAgICBjYW5TdGFydDogZXYgPT4gdGhpcy5jYW5TdGFydChldiksXG4gICAgICAgICAgICBvbldpbGxTdGFydDogKCkgPT4gdGhpcy5vbldpbGxTdGFydCgpLFxuICAgICAgICAgICAgb25TdGFydDogKCkgPT4gdGhpcy5vblN0YXJ0KCksXG4gICAgICAgICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgICAgICAgIG9uRW5kOiBldiA9PiB0aGlzLm9uRW5kKGV2KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gICAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgdGhpcy5pb25NZW51Q2hhbmdlLmVtaXQoeyBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgb3BlbjogdGhpcy5faXNPcGVuIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmJsb2NrZXIuZGVzdHJveSgpO1xuICAgICAgICBtZW51Q29udHJvbGxlci5fdW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb250ZW50RWwgPSB0aGlzLmJhY2tkcm9wRWwgPSB0aGlzLm1lbnVJbm5lckVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvblNwbGl0UGFuZUNoYW5nZWQoZXYpIHtcbiAgICAgICAgdGhpcy5pc1BhbmVWaXNpYmxlID0gZXYuZGV0YWlsLmlzUGFuZSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgICBvbkJhY2tkcm9wQ2xpY2soZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbiAmJiB0aGlzLmxhc3RPbkVuZCA8IGV2LnRpbWVTdGFtcCAtIDEwMCkge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ2xvc2UgPSAoZXYuY29tcG9zZWRQYXRoKVxuICAgICAgICAgICAgICAgID8gIWV2LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMubWVudUlubmVyRWwpXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzaG91bGRDbG9zZSkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlzIHRoZSBtZW51IGlzIG9wZW4uXG4gICAgICovXG4gICAgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2lzT3Blbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlzIHRoZSBtZW51IGlzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEEgbWVudSBpcyBhY3RpdmUgd2hlbiBpdCBjYW4gYmUgb3BlbmVkIG9yIGNsb3NlZCwgbWVhbmluZyBpdCdzIGVuYWJsZWRcbiAgICAgKiBhbmQgaXQncyBub3QgcGFydCBvZiBhIGBpb24tc3BsaXQtcGFuZWAuXG4gICAgICovXG4gICAgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faXNBY3RpdmUoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBtZW51LiBJZiB0aGUgbWVudSBpcyBhbHJlYWR5IG9wZW4gb3IgaXQgY2FuJ3QgYmUgb3BlbmVkLFxuICAgICAqIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBvcGVuKGFuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRPcGVuKHRydWUsIGFuaW1hdGVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBtZW51LiBJZiB0aGUgbWVudSBpcyBhbHJlYWR5IGNsb3NlZCBvciBpdCBjYW4ndCBiZSBjbG9zZWQsXG4gICAgICogaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIGNsb3NlKGFuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRPcGVuKGZhbHNlLCBhbmltYXRlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIG1lbnUuIElmIHRoZSBtZW51IGlzIGFscmVhZHkgb3BlbiwgaXQgd2lsbCB0cnkgdG8gY2xvc2UsIG90aGVyd2lzZSBpdCB3aWxsIHRyeSB0byBvcGVuIGl0LlxuICAgICAqIElmIHRoZSBvcGVyYXRpb24gY2FuJ3QgYmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIHRvZ2dsZShhbmltYXRlZCA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3BlbighdGhpcy5faXNPcGVuLCBhbmltYXRlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW5zIG9yIGNsb3NlcyB0aGUgYnV0dG9uLlxuICAgICAqIElmIHRoZSBvcGVyYXRpb24gY2FuJ3QgYmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIHNldE9wZW4oc2hvdWxkT3BlbiwgYW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5fc2V0T3Blbih0aGlzLCBzaG91bGRPcGVuLCBhbmltYXRlZCk7XG4gICAgfVxuICAgIGFzeW5jIF9zZXRPcGVuKHNob3VsZE9wZW4sIGFuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgICAvLyBJZiB0aGUgbWVudSBpcyBkaXNhYmxlZCBvciBpdCBpcyBjdXJyZW50bHkgYmVpbmcgYW5pbWF0ZWQsIGxldCdzIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSgpIHx8IHRoaXMuaXNBbmltYXRpbmcgfHwgc2hvdWxkT3BlbiA9PT0gdGhpcy5faXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZWZvcmVBbmltYXRpb24oc2hvdWxkT3Blbik7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEFuaW1hdGlvbigpO1xuICAgICAgICBhd2FpdCB0aGlzLnN0YXJ0QW5pbWF0aW9uKHNob3VsZE9wZW4sIGFuaW1hdGVkKTtcbiAgICAgICAgdGhpcy5hZnRlckFuaW1hdGlvbihzaG91bGRPcGVuKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRBbmltYXRpb24oKSB7XG4gICAgICAgIC8vIE1lbnUgc3dpcGUgYW5pbWF0aW9uIHRha2VzIHRoZSBtZW51J3MgaW5uZXIgd2lkdGggYXMgcGFyYW1ldGVyLFxuICAgICAgICAvLyBJZiBgb2Zmc2V0V2lkdGhgIGNoYW5nZXMsIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGFuaW1hdGlvbi5cbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLm1lbnVJbm5lckVsLm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAod2lkdGggPT09IHRoaXMud2lkdGggJiYgdGhpcy5hbmltYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgLy8gRGVzdHJveSBleGlzdGluZyBhbmltYXRpb25cbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgbmV3IGFuaW1hdGlvblxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGF3YWl0IG1lbnVDb250cm9sbGVyLl9jcmVhdGVBbmltYXRpb24odGhpcy50eXBlLCB0aGlzKTtcbiAgICAgICAgaWYgKCFjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uZHVyYXRpb24oMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRpb24uZmlsbCgnYm90aCcpO1xuICAgIH1cbiAgICBhc3luYyBzdGFydEFuaW1hdGlvbihzaG91bGRPcGVuLCBhbmltYXRlZCkge1xuICAgICAgICBjb25zdCBpc1JldmVyc2VkID0gIXNob3VsZE9wZW47XG4gICAgICAgIGNvbnN0IGFuaSA9IHRoaXMuYW5pbWF0aW9uXG4gICAgICAgICAgICAuZGlyZWN0aW9uKChpc1JldmVyc2VkKSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnKVxuICAgICAgICAgICAgLmVhc2luZygoaXNSZXZlcnNlZCkgPyAnY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpJyA6ICdjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSknKTtcbiAgICAgICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCBhbmkucGxheUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbmkucGxheVN5bmMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc1BhbmVWaXNpYmxlO1xuICAgIH1cbiAgICBjYW5Td2lwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3dpcGVHZXN0dXJlICYmICF0aGlzLmlzQW5pbWF0aW5nICYmIHRoaXMuX2lzQWN0aXZlKCk7XG4gICAgfVxuICAgIGNhblN0YXJ0KGRldGFpbCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU3dpcGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgLy8gVE9ETyBlcnJvclxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lbnVDb250cm9sbGVyLl9nZXRPcGVuU3luYygpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrRWRnZVNpZGUod2luZG93LCBkZXRhaWwuY3VycmVudFgsIHRoaXMuaXNFbmRTaWRlLCB0aGlzLm1heEVkZ2VTdGFydCk7XG4gICAgfVxuICAgIG9uV2lsbFN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJlZm9yZUFuaW1hdGlvbighdGhpcy5faXNPcGVuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEFuaW1hdGlvbigpO1xuICAgIH1cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmcgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhc3NlcnQoZmFsc2UsICdpc0FuaW1hdGluZyBoYXMgdG8gYmUgdHJ1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoZSBjbG9uZWQgYW5pbWF0aW9uIHNob3VsZCBub3QgdXNlIGFuIGVhc2luZyBjdXJ2ZSBkdXJpbmcgc2Vla1xuICAgICAgICB0aGlzLmFuaW1hdGlvblxuICAgICAgICAgICAgLmRpcmVjdGlvbigodGhpcy5faXNPcGVuKSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnKVxuICAgICAgICAgICAgLnByb2dyZXNzU3RhcnQodHJ1ZSk7XG4gICAgfVxuICAgIG9uTW92ZShkZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nIHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgYXNzZXJ0KGZhbHNlLCAnaXNBbmltYXRpbmcgaGFzIHRvIGJlIHRydWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWx0YSA9IGNvbXB1dGVEZWx0YShkZXRhaWwuZGVsdGFYLCB0aGlzLl9pc09wZW4sIHRoaXMuaXNFbmRTaWRlKTtcbiAgICAgICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAoc3RlcFZhbHVlKTtcbiAgICB9XG4gICAgb25FbmQoZGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FuaW1hdGluZyB8fCAhdGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGFzc2VydChmYWxzZSwgJ2lzQW5pbWF0aW5nIGhhcyB0byBiZSB0cnVlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNPcGVuID0gdGhpcy5faXNPcGVuO1xuICAgICAgICBjb25zdCBpc0VuZFNpZGUgPSB0aGlzLmlzRW5kU2lkZTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjb21wdXRlRGVsdGEoZGV0YWlsLmRlbHRhWCwgaXNPcGVuLCBpc0VuZFNpZGUpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2lkdGg7XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gZGV0YWlsLnZlbG9jaXR5WDtcbiAgICAgICAgY29uc3QgeiA9IHdpZHRoIC8gMi4wO1xuICAgICAgICBjb25zdCBzaG91bGRDb21wbGV0ZVJpZ2h0ID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGV0YWlsLmRlbHRhWCA+IHopO1xuICAgICAgICBjb25zdCBzaG91bGRDb21wbGV0ZUxlZnQgPSB2ZWxvY2l0eSA8PSAwICYmICh2ZWxvY2l0eSA8IC0wLjIgfHwgZGV0YWlsLmRlbHRhWCA8IC16KTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ29tcGxldGUgPSBpc09wZW5cbiAgICAgICAgICAgID8gaXNFbmRTaWRlID8gc2hvdWxkQ29tcGxldGVSaWdodCA6IHNob3VsZENvbXBsZXRlTGVmdFxuICAgICAgICAgICAgOiBpc0VuZFNpZGUgPyBzaG91bGRDb21wbGV0ZUxlZnQgOiBzaG91bGRDb21wbGV0ZVJpZ2h0O1xuICAgICAgICBsZXQgc2hvdWxkT3BlbiA9ICFpc09wZW4gJiYgc2hvdWxkQ29tcGxldGU7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIXNob3VsZENvbXBsZXRlKSB7XG4gICAgICAgICAgICBzaG91bGRPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RPbkVuZCA9IGRldGFpbC50aW1lU3RhbXA7XG4gICAgICAgIC8vIEFjY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycyBpbiBKU1xuICAgICAgICBsZXQgbmV3U3RlcFZhbHVlID0gKHNob3VsZENvbXBsZXRlKSA/IDAuMDAxIDogLTAuMDAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogc3RlcFZhbHVlIGNhbiBzb21ldGltZXMgcmV0dXJuIGEgbmVnYXRpdmVcbiAgICAgICAgICogdmFsdWUsIGJ1dCB5b3UgY2FuJ3QgaGF2ZSBhIG5lZ2F0aXZlIHRpbWUgdmFsdWVcbiAgICAgICAgICogZm9yIHRoZSBjdWJpYyBiZXppZXIgY3VydmUgKGF0IGxlYXN0IHdpdGggd2ViIGFuaW1hdGlvbnMpXG4gICAgICAgICAqIE5vdCBzdXJlIGlmIHRoZSBuZWdhdGl2ZSBzdGVwIHZhbHVlIGlzIGFuIGVycm9yIG9yIG5vdFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYWRqdXN0ZWRTdGVwVmFsdWUgPSAoc3RlcFZhbHVlIDw9IDApID8gMC4wMSA6IHN0ZXBWYWx1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuaW1hdGlvbiB3aWxsIGJlIHJldmVyc2VkIGhlcmUsIHNvIG5lZWQgdG9cbiAgICAgICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQWRkaXRpb25hbGx5LCB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoZSB0aW1lIHJlbGF0aXZlXG4gICAgICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAgICAgKiBpbiB0ZXJtcyBvZiBhIGxpbmVhciBjdXJ2ZS5cbiAgICAgICAgICovXG4gICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihuZXcgUG9pbnQoMCwgMCksIG5ldyBQb2ludCgwLjQsIDApLCBuZXcgUG9pbnQoMC42LCAxKSwgbmV3IFBvaW50KDEsIDEpLCBjbGFtcCgwLCBhZGp1c3RlZFN0ZXBWYWx1ZSwgMSkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblxuICAgICAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpJylcbiAgICAgICAgICAgIC5vbkZpbmlzaCgoKSA9PiB0aGlzLmFmdGVyQW5pbWF0aW9uKHNob3VsZE9wZW4pLCB7IG9uZVRpbWVDYWxsYmFjazogdHJ1ZSB9KVxuICAgICAgICAgICAgLnByb2dyZXNzRW5kKHNob3VsZENvbXBsZXRlID8gMSA6IDAsIG5ld1N0ZXBWYWx1ZSwgMzAwKTtcbiAgICB9XG4gICAgYmVmb3JlQW5pbWF0aW9uKHNob3VsZE9wZW4pIHtcbiAgICAgICAgYXNzZXJ0KCF0aGlzLmlzQW5pbWF0aW5nLCAnX2JlZm9yZSgpIHNob3VsZCBub3QgYmUgY2FsbGVkIHdoaWxlIGFuaW1hdGluZycpO1xuICAgICAgICAvLyB0aGlzIHBsYWNlcyB0aGUgbWVudSBpbnRvIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGJlZm9yZSBpdCBhbmltYXRlcyBpblxuICAgICAgICAvLyB0aGlzIGNzcyBjbGFzcyBkb2Vzbid0IGFjdHVhbGx5IGtpY2sgb2ZmIGFueSBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChTSE9XX01FTlUpO1xuICAgICAgICBpZiAodGhpcy5iYWNrZHJvcEVsKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tkcm9wRWwuY2xhc3NMaXN0LmFkZChTSE9XX0JBQ0tEUk9QKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrZXIuYmxvY2soKTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGlmIChzaG91bGRPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmlvbldpbGxPcGVuLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW9uV2lsbENsb3NlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZnRlckFuaW1hdGlvbihpc09wZW4pIHtcbiAgICAgICAgYXNzZXJ0KHRoaXMuaXNBbmltYXRpbmcsICdfYmVmb3JlKCkgc2hvdWxkIGJlIGNhbGxlZCB3aGlsZSBhbmltYXRpbmcnKTtcbiAgICAgICAgLy8ga2VlcCBvcGVuaW5nL2Nsb3NpbmcgdGhlIG1lbnUgZGlzYWJsZWQgZm9yIGEgdG91Y2ggbW9yZSB5ZXRcbiAgICAgICAgLy8gb25seSBhZGQgbGlzdGVuZXJzL2NzcyBpZiBpdCdzIGVuYWJsZWQgYW5kIGlzT3BlblxuICAgICAgICAvLyBhbmQgb25seSByZW1vdmUgbGlzdGVuZXJzL2NzcyBpZiBpdCdzIG5vdCBvcGVuXG4gICAgICAgIC8vIGVtaXQgb3BlbmVkL2Nsb3NlZCBldmVudHNcbiAgICAgICAgdGhpcy5faXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrZXIudW5ibG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgIC8vIGFkZCBjc3MgY2xhc3NcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5hZGQoTUVOVV9DT05URU5UX09QRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZW1pdCBvcGVuIGV2ZW50XG4gICAgICAgICAgICB0aGlzLmlvbkRpZE9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGNzcyBjbGFzc2VzXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoU0hPV19NRU5VKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5yZW1vdmUoTUVOVV9DT05URU5UX09QRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYmFja2Ryb3BFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BFbC5jbGFzc0xpc3QucmVtb3ZlKFNIT1dfQkFDS0RST1ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgICAgICAgdGhpcy5pb25EaWRDbG9zZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5faXNBY3RpdmUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKCFpc0FjdGl2ZSB8fCAhdGhpcy5zd2lwZUdlc3R1cmUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsb3NlIG1lbnUgaW1tZWRpYXRlbHlcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSAmJiB0aGlzLl9pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIGNsb3NlIGlmIHRoaXMgbWVudSBpcyBvcGVuLCBhbmQgc2hvdWxkIG5vdCBiZSBlbmFibGVkXG4gICAgICAgICAgICB0aGlzLmZvcmNlQ2xvc2luZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgbWVudUNvbnRyb2xsZXIuX3NldEFjdGl2ZU1lbnUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXJ0KCF0aGlzLmlzQW5pbWF0aW5nLCAnY2FuIG5vdCBiZSBhbmltYXRpbmcnKTtcbiAgICB9XG4gICAgZm9yY2VDbG9zaW5nKCkge1xuICAgICAgICBhc3NlcnQodGhpcy5faXNPcGVuLCAnbWVudSBjYW5ub3QgYmUgY2xvc2VkJyk7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBhbmkgPSB0aGlzLmFuaW1hdGlvbi5kaXJlY3Rpb24oJ3JldmVyc2UnKTtcbiAgICAgICAgYW5pLnBsYXlTeW5jKCk7XG4gICAgICAgIHRoaXMuYWZ0ZXJBbmltYXRpb24oZmFsc2UpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNFbmRTaWRlLCB0eXBlLCBkaXNhYmxlZCwgbW9kZSwgaXNQYW5lVmlzaWJsZSB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJuYXZpZ2F0aW9uXCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgIFtgbWVudS10eXBlLSR7dHlwZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnbWVudS1lbmFibGVkJzogIWRpc2FibGVkLFxuICAgICAgICAgICAgICAgICdtZW51LXNpZGUtZW5kJzogaXNFbmRTaWRlLFxuICAgICAgICAgICAgICAgICdtZW51LXNpZGUtc3RhcnQnOiAhaXNFbmRTaWRlLFxuICAgICAgICAgICAgICAgICdtZW51LXBhbmUtdmlzaWJsZSc6IGlzUGFuZVZpc2libGVcbiAgICAgICAgICAgIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcIm1lbnUtaW5uZXJcIiwgcmVmOiBlbCA9PiB0aGlzLm1lbnVJbm5lckVsID0gZWwgfSwgaChcInNsb3RcIiwgbnVsbCkpLCBoKFwiaW9uLWJhY2tkcm9wXCIsIHsgcmVmOiBlbCA9PiB0aGlzLmJhY2tkcm9wRWwgPSBlbCwgY2xhc3M6IFwibWVudS1iYWNrZHJvcFwiLCB0YXBwYWJsZTogZmFsc2UsIHN0b3BQcm9wYWdhdGlvbjogZmFsc2UgfSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwidHlwZVwiOiBbXCJ0eXBlQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICAgIFwic2lkZVwiOiBbXCJzaWRlQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJzd2lwZUdlc3R1cmVcIjogW1wic3dpcGVHZXN0dXJlQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLXdpZHRoOjMwNHB4Oy0tbWluLXdpZHRoOmF1dG87LS1tYXgtd2lkdGg6YXV0bzstLWhlaWdodDoxMDAlOy0tbWluLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7Y29udGFpbjpzdHJpY3R9Omhvc3QoLnNob3ctbWVudSl7ZGlzcGxheTpibG9ja30ubWVudS1pbm5lcntsZWZ0OjA7cmlnaHQ6YXV0bzt0b3A6MDtib3R0b206MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtOTk5OXB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC05OTk5cHgsMCwwKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAubWVudS1pbm5lcixbZGlyPXJ0bF0gLm1lbnUtaW5uZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtsZWZ0OmF1dG87cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xICogLTk5OTlweCksMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoY2FsYygtMSAqIC05OTk5cHgpLDAsMCl9Omhvc3QoLm1lbnUtc2lkZS1zdGFydCkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDtyaWdodDphdXRvO2xlZnQ6MH06aG9zdCgubWVudS1zaWRlLWVuZCkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4O3JpZ2h0OjA7bGVmdDphdXRvfWlvbi1iYWNrZHJvcHtkaXNwbGF5Om5vbmU7b3BhY2l0eTouMDE7ei1pbmRleDotMX1cXEBtZWRpYSAobWF4LXdpZHRoOjM0MHB4KXsubWVudS1pbm5lcnstLXdpZHRoOjI2NHB4fX06aG9zdCgubWVudS10eXBlLXJldmVhbCl7ei1pbmRleDowfTpob3N0KC5tZW51LXR5cGUtcmV2ZWFsLnNob3ctbWVudSkgLm1lbnUtaW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX06aG9zdCgubWVudS10eXBlLW92ZXJsYXkpe3otaW5kZXg6MTAwMH06aG9zdCgubWVudS10eXBlLW92ZXJsYXkpIC5zaG93LWJhY2tkcm9we2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlKSAubWVudS1pbm5lcntsZWZ0OjA7cmlnaHQ6MDt3aWR0aDphdXRvOy13ZWJraXQtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lIWltcG9ydGFudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudH06aG9zdCgubWVudS1wYW5lLXZpc2libGUpIGlvbi1iYWNrZHJvcHtkaXNwbGF5OmhpZGRlbiFpbXBvcnRhbnR9Omhvc3QoLm1lbnUtdHlwZS1vdmVybGF5KSAubWVudS1pbm5lcnstd2Via2l0LWJveC1zaGFkb3c6MCAycHggMjJweCAwIHJnYmEoMCwwLDAsLjA5KSw0cHggMCAxNnB4IDAgcmdiYSgwLDAsMCwuMTgpO2JveC1zaGFkb3c6MCAycHggMjJweCAwIHJnYmEoMCwwLDAsLjA5KSw0cHggMCAxNnB4IDAgcmdiYSgwLDAsMCwuMTgpfVwiOyB9XG59O1xuY29uc3QgY29tcHV0ZURlbHRhID0gKGRlbHRhWCwgaXNPcGVuLCBpc0VuZFNpZGUpID0+IHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgaXNPcGVuICE9PSBpc0VuZFNpZGUgPyAtZGVsdGFYIDogZGVsdGFYKTtcbn07XG5jb25zdCBjaGVja0VkZ2VTaWRlID0gKHdpbiwgcG9zWCwgaXNFbmRTaWRlLCBtYXhFZGdlU3RhcnQpID0+IHtcbiAgICBpZiAoaXNFbmRTaWRlKSB7XG4gICAgICAgIHJldHVybiBwb3NYID49IHdpbi5pbm5lcldpZHRoIC0gbWF4RWRnZVN0YXJ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBvc1ggPD0gbWF4RWRnZVN0YXJ0O1xuICAgIH1cbn07XG5jb25zdCBTSE9XX01FTlUgPSAnc2hvdy1tZW51JztcbmNvbnN0IFNIT1dfQkFDS0RST1AgPSAnc2hvdy1iYWNrZHJvcCc7XG5jb25zdCBNRU5VX0NPTlRFTlRfT1BFTiA9ICdtZW51LWNvbnRlbnQtb3Blbic7XG5cbi8vIEdpdmVuIGEgbWVudSwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHRvZ2dsZSBzaG91bGQgYmUgdmlzaWJsZVxyXG5jb25zdCB1cGRhdGVWaXNpYmlsaXR5ID0gYXN5bmMgKG1lbnUpID0+IHtcclxuICAgIGNvbnN0IG1lbnVFbCA9IGF3YWl0IG1lbnVDb250cm9sbGVyLmdldChtZW51KTtcclxuICAgIHJldHVybiAhIShtZW51RWwgJiYgYXdhaXQgbWVudUVsLmlzQWN0aXZlKCkpO1xyXG59O1xuXG5jb25zdCBNZW51QnV0dG9uID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBtZW51IGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEF1dG9tYXRpY2FsbHkgaGlkZXMgdGhlIG1lbnUgYnV0dG9uIHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgbWVudSBpcyBub3QgYWN0aXZlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9IaWRlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIHRoZSBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZSh0aGlzLm1lbnUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGFzeW5jIHZpc2liaWxpdHlDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBhd2FpdCB1cGRhdGVWaXNpYmlsaXR5KHRoaXMubWVudSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvciwgZGlzYWJsZWQgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBtZW51SWNvbiA9IGNvbmZpZy5nZXQoJ21lbnVJY29uJywgJ21lbnUnKTtcbiAgICAgICAgY29uc3QgaGlkZGVuID0gdGhpcy5hdXRvSGlkZSAmJiAhdGhpcy52aXNpYmxlO1xuICAgICAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1oaWRkZW5cIjogaGlkZGVuID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSB9LCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IpKSwgeyAnYnV0dG9uJzogdHJ1ZSwgJ21lbnUtYnV0dG9uLWhpZGRlbic6IGhpZGRlbiwgJ21lbnUtYnV0dG9uLWRpc2FibGVkJzogZGlzYWJsZWQsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLCAnaW9uLWZvY3VzYWJsZSc6IHRydWUgfSkgfSwgaChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBkaXNhYmxlZDogZGlzYWJsZWQsIGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIiB9KSwgaChcInNsb3RcIiwgbnVsbCwgaChcImlvbi1pY29uXCIsIHsgaWNvbjogbWVudUljb24sIG1vZGU6IG1vZGUsIGxhenk6IGZhbHNlIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgeyB0eXBlOiBcInVuYm91bmRlZFwiIH0pKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvci1mb2N1c2VkOnZhcigtLWNvbG9yKTstLWJvcmRlci1yYWRpdXM6aW5pdGlhbDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtZm9udC1rZXJuaW5nOm5vbmU7Zm9udC1rZXJuaW5nOm5vbmV9LmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDoxO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYnV0dG9uLW5hdGl2ZXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19aW9uLWljb257bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCgubWVudS1idXR0b24taGlkZGVuKXtkaXNwbGF5Om5vbmV9Omhvc3QoLm1lbnUtYnV0dG9uLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX19Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCk7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9Omhvc3QoLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0LWNvbnRleHQoaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpKXtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1jb2xvcikpfTpob3N0ey0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEoNjYsNjYsNjYsMC4yNCk7LS1iYWNrZ3JvdW5kLWhvdmVyOnJnYmEoNjYsNjYsNjYsMC4wOCk7LS1ib3JkZXItcmFkaXVzOjUwJTstLWNvbG9yOmluaXRpYWw7LS1wYWRkaW5nLXN0YXJ0OjhweDstLXBhZGRpbmctZW5kOjhweDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4O2ZvbnQtc2l6ZToyNHB4fVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KC5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4wOCl9fTpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4yNCk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfVwiOyB9XG59O1xuXG5jb25zdCBNZW51Q29udHJvbGxlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIG1lbnUuIElmIGEgbWVudSBpcyBub3QgcHJvdmlkZWQgdGhlbiBpdCB3aWxsIG9wZW4gdGhlIGZpcnN0XG4gICAgICogbWVudSBmb3VuZC4gSWYgdGhlIHNwZWNpZmllZCBtZW51IGlzIGBzdGFydGAgb3IgYGVuZGAsIHRoZW4gaXQgd2lsbCBvcGVuXG4gICAgICogdGhlIGVuYWJsZWQgbWVudSBvbiB0aGF0IHNpZGUuIE90aGVyd2lzZSwgaXQgd2lsbCB0cnkgdG8gZmluZCB0aGUgbWVudVxuICAgICAqIHVzaW5nIHRoZSBtZW51J3MgYGlkYCBwcm9wZXJ0eS4gSWYgYSBtZW51IGlzIG5vdCBmb3VuZCB0aGVuIGl0IHdpbGxcbiAgICAgKiByZXR1cm4gYGZhbHNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byBvcGVuLlxuICAgICAqL1xuICAgIG9wZW4obWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIub3BlbihtZW51KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIG1lbnUuIElmIGEgbWVudSBpcyBzcGVjaWZpZWQsIGl0IHdpbGwgY2xvc2UgdGhhdCBtZW51LlxuICAgICAqIElmIG5vIG1lbnUgaXMgc3BlY2lmaWVkLCB0aGVuIGl0IHdpbGwgY2xvc2UgYW55IG1lbnUgdGhhdCBpcyBvcGVuLlxuICAgICAqIElmIGl0IGRvZXMgbm90IGZpbmQgYW55IG9wZW4gbWVudXMsIGl0IHdpbGwgcmV0dXJuIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gY2xvc2UuXG4gICAgICovXG4gICAgY2xvc2UobWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuY2xvc2UobWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgbWVudSBvcGVuIG9yIGNsb3NlZC4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBpdCB3aWxsIHRyeSB0b1xuICAgICAqIGNsb3NlIHRoZSBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCB0cnkgdG8gb3BlbiBpdC4gUmV0dXJucyBgZmFsc2VgIGlmXG4gICAgICogYSBtZW51IGlzIG5vdCBmb3VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byB0b2dnbGUuXG4gICAgICovXG4gICAgdG9nZ2xlKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZShtZW51KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51LiBEaXNhYmxpbmcgYSBtZW51IHdpbGwgbm90IGFsbG93IGdlc3R1cmVzXG4gICAgICogZm9yIHRoYXQgbWVudSBvciBhbnkgY2FsbHMgdG8gb3BlbiBpdC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB0aGVyZSBhcmVcbiAgICAgKiBtdWx0aXBsZSBtZW51cyBvbiB0aGUgc2FtZSBzaWRlIGFuZCBvbmx5IG9uZSBvZiB0aGVtIHNob3VsZCBiZSBhbGxvd2VkXG4gICAgICogdG8gb3Blbi4gRW5hYmxpbmcgYSBtZW51IHdpbGwgYXV0b21hdGljYWxseSBkaXNhYmxlIGFsbCBvdGhlciBtZW51c1xuICAgICAqIG9uIHRoYXQgc2lkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbmFibGUgSWYgYHRydWVgLCB0aGUgbWVudSBzaG91bGQgYmUgZW5hYmxlZC5cbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gZW5hYmxlIG9yIGRpc2FibGUuXG4gICAgICovXG4gICAgZW5hYmxlKGVuYWJsZSwgbWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuZW5hYmxlKGVuYWJsZSwgbWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBhYmlsaXR5IHRvIHN3aXBlIG9wZW4gdGhlIG1lbnUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlIElmIGB0cnVlYCwgdGhlIG1lbnUgc3dpcGUgZ2VzdHVyZSBzaG91bGQgYmUgZW5hYmxlZC5cbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHN3aXBlIGdlc3R1cmUgb24uXG4gICAgICovXG4gICAgc3dpcGVHZXN0dXJlKGVuYWJsZSwgbWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuc3dpcGVHZXN0dXJlKGVuYWJsZSwgbWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBvcGVuLiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkXG4gICAgICogbWVudSBpcyBvcGVuLiBJZiBhIG1lbnUgaXMgbm90IHNwZWNpZmllZCwgaXQgd2lsbCByZXR1cm4gYHRydWVgIGlmXG4gICAgICogYW55IG1lbnUgaXMgY3VycmVudGx5IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdGhhdCBpcyBiZWluZyBjaGVja2VkLlxuICAgICAqL1xuICAgIGlzT3BlbihtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5pc09wZW4obWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBlbmFibGVkLiBSZXR1cm5zIGB0cnVlYCBpZiB0aGVcbiAgICAgKiBzcGVjaWZpZWQgbWVudSBpcyBlbmFibGVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgYSBtZW51IGlzIGRpc2FibGVkXG4gICAgICogb3Igbm90IGZvdW5kLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lbnUgVGhlIG1lbnVJZCBvciBzaWRlIG9mIHRoZSBtZW51IHRoYXQgaXMgYmVpbmcgY2hlY2tlZC5cbiAgICAgKi9cbiAgICBpc0VuYWJsZWQobWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuaXNFbmFibGVkKG1lbnUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBtZW51IGluc3RhbmNlLiBJZiBhIG1lbnUgaXMgbm90IHByb3ZpZGVkIHRoZW4gaXQgd2lsbCByZXR1cm4gdGhlIGZpcnN0XG4gICAgICogbWVudSBmb3VuZC4gSWYgdGhlIHNwZWNpZmllZCBtZW51IGlzIGBzdGFydGAgb3IgYGVuZGAsIHRoZW4gaXQgd2lsbCByZXR1cm4gdGhlXG4gICAgICogZW5hYmxlZCBtZW51IG9uIHRoYXQgc2lkZS4gT3RoZXJ3aXNlLCBpdCB3aWxsIHRyeSB0byBmaW5kIHRoZSBtZW51IHVzaW5nIHRoZSBtZW51J3NcbiAgICAgKiBgaWRgIHByb3BlcnR5LiBJZiBhIG1lbnUgaXMgbm90IGZvdW5kIHRoZW4gaXQgd2lsbCByZXR1cm4gYG51bGxgLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lbnUgVGhlIG1lbnVJZCBvciBzaWRlIG9mIHRoZSBtZW51LlxuICAgICAqL1xuICAgIGdldChtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXQobWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIG9wZW5lZCBtZW51LiBSZXR1cm5zIGBudWxsYCBpZiBhIG1lbnUgaXMgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGdldE9wZW4oKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXRPcGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgbWVudSBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgZ2V0TWVudXMoKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXRNZW51cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBvciBub3QgYSBtZW51IGlzIGFuaW1hdGluZy4gUmV0dXJucyBgdHJ1ZWAgaWYgYW55XG4gICAgICogbWVudSBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLlxuICAgICAqL1xuICAgIGlzQW5pbWF0aW5nKCkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuaXNBbmltYXRpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGFuaW1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYW55IGBpb24tbWVudWAgYnlcbiAgICAgKiBwYXNzaW5nIHRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gaW4gaXRzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gdG8gcmVnaXN0ZXIuXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgYW5pbWF0aW9uIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyLlxuICAgICAqL1xuICAgIGFzeW5jIHJlZ2lzdGVyQW5pbWF0aW9uKG5hbWUsIGFuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIucmVnaXN0ZXJBbmltYXRpb24obmFtZSwgYW5pbWF0aW9uKTtcbiAgICB9XG59O1xuXG5jb25zdCBNZW51VG9nZ2xlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSBjb250ZW50IHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgbWVudSBpcyBub3QgYWN0aXZlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBpdCdzIGB0cnVlYC4gQ2hhbmdlIGl0IHRvIGBmYWxzZWAgaW4gb3JkZXIgdG9cbiAgICAgICAgICoga2VlcCBgaW9uLW1lbnUtdG9nZ2xlYCBhbHdheXMgdmlzaWJsZSByZWdhcmRsZXNzIHRoZSBzdGF0ZSBvZiB0aGUgbWVudS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b0hpZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIudG9nZ2xlKHRoaXMubWVudSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGFzeW5jIHZpc2liaWxpdHlDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBhd2FpdCB1cGRhdGVWaXNpYmlsaXR5KHRoaXMubWVudSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuYXV0b0hpZGUgJiYgIXRoaXMudmlzaWJsZTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBcImFyaWEtaGlkZGVuXCI6IGhpZGRlbiA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdtZW51LXRvZ2dsZS1oaWRkZW4nOiBoaWRkZW4sXG4gICAgICAgICAgICB9IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0KC5tZW51LXRvZ2dsZS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX1cIjsgfVxufTtcblxuZXhwb3J0IHsgTWVudSBhcyBpb25fbWVudSwgTWVudUJ1dHRvbiBhcyBpb25fbWVudV9idXR0b24sIE1lbnVDb250cm9sbGVyIGFzIGlvbl9tZW51X2NvbnRyb2xsZXIsIE1lbnVUb2dnbGUgYXMgaW9uX21lbnVfdG9nZ2xlIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9