(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js":
/*!********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js ***!
  \********************************************************************/
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
    static get style() { return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"; }
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
    static get style() { return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1tZW51XzQtaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9EOzs7Ozs7Ozs7Ozs7O0FDNUZwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMxRTtBQUM2QjtBQUMvQztBQUN3QjtBQUNDO0FBQ0k7QUFDd0I7O0FBRXRGO0FBQ0E7QUFD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RztBQUN6QjtBQUNBO0FBQ0EsYUFBYSxFQUFFLEVBQUUsMkRBQUM7QUFDbEI7QUFDQSx3QkFBd0Isb0NBQW9DLGFBQWEsRUFBRTtBQUMzRTs7QUFFaUk7Ozs7Ozs7Ozs7Ozs7QUNubkJqSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjE1XFxjaHVua3NcXDE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEJhc2VkIG9uOlxyXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MzQ4MDA5L3ktY29vcmRpbmF0ZS1mb3ItYS1naXZlbi14LWN1YmljLWJlemllclxyXG4gKiBodHRwczovL21hdGguc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzI2ODQ2L2lzLXRoZXJlLWFuLWV4cGxpY2l0LWZvcm0tZm9yLWN1YmljLWIlQzMlQTl6aWVyLWN1cnZlc1xyXG4gKiBUT0RPOiBSZWR1Y2Ugcm91bmRpbmcgZXJyb3JcclxuICovXHJcbmNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEdpdmVuIGEgY3ViaWMtYmV6aWVyIGN1cnZlLCBnZXQgdGhlIHggdmFsdWUgKHRpbWUpIGdpdmVuXHJcbiAqIHRoZSB5IHZhbHVlIChwcm9ncmVzc2lvbikuXHJcbiAqIEV4OiBjdWJpYy1iZXppZXIoMC4zMiwgMC43MiwgMCwgMSk7XHJcbiAqIFAwOiAoMCwgMClcclxuICogUDE6ICgwLjMyLCAwLjcyKVxyXG4gKiBQMjogKDAsIDEpXHJcbiAqIFAzOiAoMSwgMSlcclxuICpcclxuICogSWYgeW91IGdpdmUgYSBjdWJpYyBiZXppZXIgY3VydmUgdGhhdCBuZXZlciByZWFjaGVzIHRoZVxyXG4gKiBwcm92aWRlZCBwcm9ncmVzc2lvbiwgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBOYU4uXHJcbiAqL1xyXG5jb25zdCBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiA9IChwMCwgcDEsIHAyLCBwMywgcHJvZ3Jlc3Npb24pID0+IHtcclxuICAgIGNvbnN0IHRWYWx1ZXMgPSBzb2x2ZUN1YmljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHAzLnksIHByb2dyZXNzaW9uKTtcclxuICAgIHJldHVybiBzb2x2ZUN1YmljUGFyYW1ldHJpY0VxdWF0aW9uKHAwLngsIHAxLngsIHAyLngsIHAzLngsIHRWYWx1ZXNbMF0pOyAvLyBUT0RPOiBBZGQgYmV0dGVyIHN0cmF0ZWd5IGZvciBkZWFsaW5nIHdpdGggbXVsdGlwbGUgc29sdXRpb25zXHJcbn07XHJcbi8qKlxyXG4gKiBTb2x2ZSBhIGN1YmljIGVxdWF0aW9uIGluIG9uZSBkaW1lbnNpb24gKHRpbWUpXHJcbiAqL1xyXG5jb25zdCBzb2x2ZUN1YmljUGFyYW1ldHJpY0VxdWF0aW9uID0gKHAwLCBwMSwgcDIsIHAzLCB0KSA9PiB7XHJcbiAgICBjb25zdCBwYXJ0QSA9ICgzICogcDEpICogTWF0aC5wb3codCAtIDEsIDIpO1xyXG4gICAgY29uc3QgcGFydEIgPSAoLTMgKiBwMiAqIHQpICsgKDMgKiBwMikgKyAocDMgKiB0KTtcclxuICAgIGNvbnN0IHBhcnRDID0gcDAgKiBNYXRoLnBvdyh0IC0gMSwgMyk7XHJcbiAgICByZXR1cm4gdCAqIChwYXJ0QSArICh0ICogcGFydEIpKSAtIHBhcnRDO1xyXG59O1xyXG4vKipcclxuICogRmluZCB0aGUgYHRgIHZhbHVlIGZvciBhIGN1YmljIGJlemllciB1c2luZyBDYXJkYW5vJ3MgZm9ybXVsYVxyXG4gKi9cclxuY29uc3Qgc29sdmVDdWJpY0JlemllciA9IChwMCwgcDEsIHAyLCBwMywgcmVmUG9pbnQpID0+IHtcclxuICAgIHAwIC09IHJlZlBvaW50O1xyXG4gICAgcDEgLT0gcmVmUG9pbnQ7XHJcbiAgICBwMiAtPSByZWZQb2ludDtcclxuICAgIHAzIC09IHJlZlBvaW50O1xyXG4gICAgY29uc3Qgcm9vdHMgPSBzb2x2ZUN1YmljRXF1YXRpb24ocDMgLSAzICogcDIgKyAzICogcDEgLSBwMCwgMyAqIHAyIC0gNiAqIHAxICsgMyAqIHAwLCAzICogcDEgLSAzICogcDAsIHAwKTtcclxuICAgIHJldHVybiByb290cy5maWx0ZXIocm9vdCA9PiByb290ID49IDAgJiYgcm9vdCA8PSAxKTtcclxufTtcclxuY29uc3Qgc29sdmVRdWFkcmF0aWNFcXVhdGlvbiA9IChhLCBiLCBjKSA9PiB7XHJcbiAgICBjb25zdCBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQgKiBhICogYztcclxuICAgIGlmIChkaXNjcmltaW5hbnQgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgKC1iICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIgKiBhKSxcclxuICAgICAgICAgICAgKC1iIC0gTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIgKiBhKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNvbHZlQ3ViaWNFcXVhdGlvbiA9IChhLCBiLCBjLCBkKSA9PiB7XHJcbiAgICBpZiAoYSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uKGIsIGMsIGQpO1xyXG4gICAgfVxyXG4gICAgYiAvPSBhO1xyXG4gICAgYyAvPSBhO1xyXG4gICAgZCAvPSBhO1xyXG4gICAgY29uc3QgcCA9ICgzICogYyAtIGIgKiBiKSAvIDM7XHJcbiAgICBjb25zdCBxID0gKDIgKiBiICogYiAqIGIgLSA5ICogYiAqIGMgKyAyNyAqIGQpIC8gMjc7XHJcbiAgICBpZiAocCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5wb3coLXEsIDEgLyAzKV07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLnNxcnQoLXApLCAtTWF0aC5zcXJ0KC1wKV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNjcmltaW5hbnQgPSBNYXRoLnBvdyhxIC8gMiwgMikgKyBNYXRoLnBvdyhwIC8gMywgMyk7XHJcbiAgICBpZiAoZGlzY3JpbWluYW50ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdyhxIC8gMiwgMSAvIDIpIC0gYiAvIDNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGlzY3JpbWluYW50ID4gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5wb3coLShxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gTWF0aC5wb3coKHEgLyAyKSArIE1hdGguc3FydChkaXNjcmltaW5hbnQpLCAxIC8gMykgLSBiIC8gM107XHJcbiAgICB9XHJcbiAgICBjb25zdCByID0gTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSk7XHJcbiAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoLShxIC8gKDIgKiBNYXRoLnNxcnQoTWF0aC5wb3coLShwIC8gMyksIDMpKSkpKTtcclxuICAgIGNvbnN0IHMgPSAyICogTWF0aC5wb3cociwgMSAvIDMpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBzICogTWF0aC5jb3MocGhpIC8gMykgLSBiIC8gMyxcclxuICAgICAgICBzICogTWF0aC5jb3MoKHBoaSArIDIgKiBNYXRoLlBJKSAvIDMpIC0gYiAvIDMsXHJcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyA0ICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzXHJcbiAgICBdO1xyXG59O1xuXG5leHBvcnQgeyBQb2ludCBhcyBQLCBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiBhcyBnIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzRW5kU2lkZSwgYiBhcyBhc3NlcnQsIGMgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0ICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBHRVNUVVJFX0NPTlRST0xMRVIgfSBmcm9tICcuL2luZGV4LTYyNGVlYTU4LmpzJztcbmltcG9ydCB7IG0gYXMgbWVudUNvbnRyb2xsZXIgfSBmcm9tICcuL2luZGV4LTFlNTk0MGQ1LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uLCBQIGFzIFBvaW50IH0gZnJvbSAnLi9jdWJpYy1iZXppZXItMjgxMmZkYTMuanMnO1xuXG5jb25zdCBNZW51ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5sYXN0T25FbmQgPSAwO1xuICAgICAgICB0aGlzLmJsb2NrZXIgPSBHRVNUVVJFX0NPTlRST0xMRVIuY3JlYXRlQmxvY2tlcih7IGRpc2FibGVTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQYW5lVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRW5kU2lkZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgbWVudSBpcyBkaXNhYmxlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoaWNoIHNpZGUgb2YgdGhlIHZpZXcgdGhlIG1lbnUgc2hvdWxkIGJlIHBsYWNlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2lkZSA9ICdzdGFydCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHN3aXBpbmcgdGhlIG1lbnUgaXMgZW5hYmxlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3dpcGVHZXN0dXJlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlZGdlIHRocmVzaG9sZCBmb3IgZHJhZ2dpbmcgdGhlIG1lbnUgb3Blbi5cbiAgICAgICAgICogSWYgYSBkcmFnL3N3aXBlIGhhcHBlbnMgb3ZlciB0aGlzIHZhbHVlLCB0aGUgbWVudSBpcyBub3QgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXhFZGdlU3RhcnQgPSA1MDtcbiAgICAgICAgdGhpcy5pb25XaWxsT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uV2lsbE9wZW5cIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uV2lsbENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25XaWxsQ2xvc2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRGlkT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGlkT3BlblwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25EaWRDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGlkQ2xvc2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uTWVudUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTWVudUNoYW5nZVwiLCA3KTtcbiAgICB9XG4gICAgdHlwZUNoYW5nZWQodHlwZSwgb2xkVHlwZSkge1xuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICAgICAgaWYgKG9sZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5jbGFzc0xpc3QucmVtb3ZlKGBtZW51LWNvbnRlbnQtJHtvbGRUeXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudEVsLmNsYXNzTGlzdC5hZGQoYG1lbnUtY29udGVudC0ke3R5cGV9YCk7XG4gICAgICAgICAgICBjb250ZW50RWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1lbnVJbm5lckVsKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZWZmZWN0cyBvZiBwcmV2aW91cyBhbmltYXRpb25zXG4gICAgICAgICAgICB0aGlzLm1lbnVJbm5lckVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuaW9uTWVudUNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgb3BlbjogdGhpcy5faXNPcGVuXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWRlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5pc0VuZFNpZGUgPSBpc0VuZFNpZGUodGhpcy5zaWRlKTtcbiAgICB9XG4gICAgc3dpcGVHZXN0dXJlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBjb25maWcuZ2V0KCdtZW51VHlwZScsIHRoaXMubW9kZSA9PT0gJ2lvcycgPyAncmV2ZWFsJyA6ICdvdmVybGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAodGhpcy5jb250ZW50SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbREVQUkVDQVRFRF1baW9uLW1lbnVdIFVzaW5nIHRoZSBbbWFpbl0gYXR0cmlidXRlIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdGhlIFwiY29udGVudElkXCIgcHJvcGVydHkgaW5zdGVhZDpcbkJFRk9SRTpcbiAgPGlvbi1tZW51Pi4uLjwvaW9uLW1lbnU+XG4gIDxkaXYgbWFpbj4uLi48L2Rpdj5cblxuQUZURVI6XG4gIDxpb24tbWVudSBjb250ZW50SWQ9XCJteS1jb250ZW50XCI+PC9pb24tbWVudT5cbiAgPGRpdiBpZD1cIm15LWNvbnRlbnRcIj4uLi48L2Rpdj5cbmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnRJZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGVudElkKVxuICAgICAgICAgICAgOiBwYXJlbnQgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1ttYWluXScpO1xuICAgICAgICBpZiAoIWNvbnRlbnQgfHwgIWNvbnRlbnQudGFnTmFtZSkge1xuICAgICAgICAgICAgLy8gcmVxdWlyZXMgY29udGVudCBlbGVtZW50XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZW51OiBtdXN0IGhhdmUgYSBcImNvbnRlbnRcIiBlbGVtZW50IHRvIGxpc3RlbiBmb3IgZHJhZyBldmVudHMgb24uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZW50RWwgPSBjb250ZW50O1xuICAgICAgICAvLyBhZGQgbWVudSdzIGNvbnRlbnQgY2xhc3Nlc1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGVudCcpO1xuICAgICAgICB0aGlzLnR5cGVDaGFuZ2VkKHRoaXMudHlwZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5zaWRlQ2hhbmdlZCgpO1xuICAgICAgICAvLyByZWdpc3RlciB0aGlzIG1lbnUgd2l0aCB0aGUgYXBwJ3MgbWVudSBjb250cm9sbGVyXG4gICAgICAgIG1lbnVDb250cm9sbGVyLl9yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgIGVsOiBkb2N1bWVudCxcbiAgICAgICAgICAgIGdlc3R1cmVOYW1lOiAnbWVudS1zd2lwZScsXG4gICAgICAgICAgICBnZXN0dXJlUHJpb3JpdHk6IDMwLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgICAgIGNhblN0YXJ0OiBldiA9PiB0aGlzLmNhblN0YXJ0KGV2KSxcbiAgICAgICAgICAgIG9uV2lsbFN0YXJ0OiAoKSA9PiB0aGlzLm9uV2lsbFN0YXJ0KCksXG4gICAgICAgICAgICBvblN0YXJ0OiAoKSA9PiB0aGlzLm9uU3RhcnQoKSxcbiAgICAgICAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgICAgICAgb25FbmQ6IGV2ID0+IHRoaXMub25FbmQoZXYpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICB0aGlzLmlvbk1lbnVDaGFuZ2UuZW1pdCh7IGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBvcGVuOiB0aGlzLl9pc09wZW4gfSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYmxvY2tlci5kZXN0cm95KCk7XG4gICAgICAgIG1lbnVDb250cm9sbGVyLl91bnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNvbnRlbnRFbCA9IHRoaXMuYmFja2Ryb3BFbCA9IHRoaXMubWVudUlubmVyRWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9uU3BsaXRQYW5lQ2hhbmdlZChldikge1xuICAgICAgICB0aGlzLmlzUGFuZVZpc2libGUgPSBldi5kZXRhaWwuaXNQYW5lKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICAgIG9uQmFja2Ryb3BDbGljayhldikge1xuICAgICAgICBpZiAodGhpcy5faXNPcGVuICYmIHRoaXMubGFzdE9uRW5kIDwgZXYudGltZVN0YW1wIC0gMTAwKSB7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDbG9zZSA9IChldi5jb21wb3NlZFBhdGgpXG4gICAgICAgICAgICAgICAgPyAhZXYuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5tZW51SW5uZXJFbClcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNob3VsZENsb3NlKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaXMgdGhlIG1lbnUgaXMgb3Blbi5cbiAgICAgKi9cbiAgICBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faXNPcGVuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaXMgdGhlIG1lbnUgaXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQSBtZW51IGlzIGFjdGl2ZSB3aGVuIGl0IGNhbiBiZSBvcGVuZWQgb3IgY2xvc2VkLCBtZWFuaW5nIGl0J3MgZW5hYmxlZFxuICAgICAqIGFuZCBpdCdzIG5vdCBwYXJ0IG9mIGEgYGlvbi1zcGxpdC1wYW5lYC5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9pc0FjdGl2ZSgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIG1lbnUuIElmIHRoZSBtZW51IGlzIGFscmVhZHkgb3BlbiBvciBpdCBjYW4ndCBiZSBvcGVuZWQsXG4gICAgICogaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIG9wZW4oYW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldE9wZW4odHJ1ZSwgYW5pbWF0ZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIG1lbnUuIElmIHRoZSBtZW51IGlzIGFscmVhZHkgY2xvc2VkIG9yIGl0IGNhbid0IGJlIGNsb3NlZCxcbiAgICAgKiBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICovXG4gICAgY2xvc2UoYW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldE9wZW4oZmFsc2UsIGFuaW1hdGVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgbWVudS4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBpdCB3aWxsIHRyeSB0byBjbG9zZSwgb3RoZXJ3aXNlIGl0IHdpbGwgdHJ5IHRvIG9wZW4gaXQuXG4gICAgICogSWYgdGhlIG9wZXJhdGlvbiBjYW4ndCBiZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICovXG4gICAgdG9nZ2xlKGFuaW1hdGVkID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRPcGVuKCF0aGlzLl9pc09wZW4sIGFuaW1hdGVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbnMgb3IgY2xvc2VzIHRoZSBidXR0b24uXG4gICAgICogSWYgdGhlIG9wZXJhdGlvbiBjYW4ndCBiZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICovXG4gICAgc2V0T3BlbihzaG91bGRPcGVuLCBhbmltYXRlZCA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLl9zZXRPcGVuKHRoaXMsIHNob3VsZE9wZW4sIGFuaW1hdGVkKTtcbiAgICB9XG4gICAgYXN5bmMgX3NldE9wZW4oc2hvdWxkT3BlbiwgYW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgICAgIC8vIElmIHRoZSBtZW51IGlzIGRpc2FibGVkIG9yIGl0IGlzIGN1cnJlbnRseSBiZWluZyBhbmltYXRlZCwgbGV0J3MgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKCkgfHwgdGhpcy5pc0FuaW1hdGluZyB8fCBzaG91bGRPcGVuID09PSB0aGlzLl9pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlZm9yZUFuaW1hdGlvbihzaG91bGRPcGVuKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkQW5pbWF0aW9uKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RhcnRBbmltYXRpb24oc2hvdWxkT3BlbiwgYW5pbWF0ZWQpO1xuICAgICAgICB0aGlzLmFmdGVyQW5pbWF0aW9uKHNob3VsZE9wZW4pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZEFuaW1hdGlvbigpIHtcbiAgICAgICAgLy8gTWVudSBzd2lwZSBhbmltYXRpb24gdGFrZXMgdGhlIG1lbnUncyBpbm5lciB3aWR0aCBhcyBwYXJhbWV0ZXIsXG4gICAgICAgIC8vIElmIGBvZmZzZXRXaWR0aGAgY2hhbmdlcywgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgYW5pbWF0aW9uLlxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMubWVudUlubmVyRWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh3aWR0aCA9PT0gdGhpcy53aWR0aCAmJiB0aGlzLmFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAvLyBEZXN0cm95IGV4aXN0aW5nIGFuaW1hdGlvblxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBuZXcgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYXdhaXQgbWVudUNvbnRyb2xsZXIuX2NyZWF0ZUFuaW1hdGlvbih0aGlzLnR5cGUsIHRoaXMpO1xuICAgICAgICBpZiAoIWNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5kdXJhdGlvbigwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5maWxsKCdib3RoJyk7XG4gICAgfVxuICAgIGFzeW5jIHN0YXJ0QW5pbWF0aW9uKHNob3VsZE9wZW4sIGFuaW1hdGVkKSB7XG4gICAgICAgIGNvbnN0IGlzUmV2ZXJzZWQgPSAhc2hvdWxkT3BlbjtcbiAgICAgICAgY29uc3QgYW5pID0gdGhpcy5hbmltYXRpb25cbiAgICAgICAgICAgIC5kaXJlY3Rpb24oKGlzUmV2ZXJzZWQpID8gJ3JldmVyc2UnIDogJ25vcm1hbCcpXG4gICAgICAgICAgICAuZWFzaW5nKChpc1JldmVyc2VkKSA/ICdjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuNiwgMSknIDogJ2N1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKScpO1xuICAgICAgICBpZiAoYW5pbWF0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGFuaS5wbGF5QXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFuaS5wbGF5U3luYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzUGFuZVZpc2libGU7XG4gICAgfVxuICAgIGNhblN3aXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zd2lwZUdlc3R1cmUgJiYgIXRoaXMuaXNBbmltYXRpbmcgJiYgdGhpcy5faXNBY3RpdmUoKTtcbiAgICB9XG4gICAgY2FuU3RhcnQoZGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2lwZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvLyBUT0RPIGVycm9yXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVudUNvbnRyb2xsZXIuX2dldE9wZW5TeW5jKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tFZGdlU2lkZSh3aW5kb3csIGRldGFpbC5jdXJyZW50WCwgdGhpcy5pc0VuZFNpZGUsIHRoaXMubWF4RWRnZVN0YXJ0KTtcbiAgICB9XG4gICAgb25XaWxsU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYmVmb3JlQW5pbWF0aW9uKCF0aGlzLl9pc09wZW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQW5pbWF0aW9uKCk7XG4gICAgfVxuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FuaW1hdGluZyB8fCAhdGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGFzc2VydChmYWxzZSwgJ2lzQW5pbWF0aW5nIGhhcyB0byBiZSB0cnVlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIGNsb25lZCBhbmltYXRpb24gc2hvdWxkIG5vdCB1c2UgYW4gZWFzaW5nIGN1cnZlIGR1cmluZyBzZWVrXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uXG4gICAgICAgICAgICAuZGlyZWN0aW9uKCh0aGlzLl9pc09wZW4pID8gJ3JldmVyc2UnIDogJ25vcm1hbCcpXG4gICAgICAgICAgICAucHJvZ3Jlc3NTdGFydCh0cnVlKTtcbiAgICB9XG4gICAgb25Nb3ZlKGRldGFpbCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmcgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhc3NlcnQoZmFsc2UsICdpc0FuaW1hdGluZyBoYXMgdG8gYmUgdHJ1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbHRhID0gY29tcHV0ZURlbHRhKGRldGFpbC5kZWx0YVgsIHRoaXMuX2lzT3BlbiwgdGhpcy5pc0VuZFNpZGUpO1xuICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnByb2dyZXNzU3RlcChzdGVwVmFsdWUpO1xuICAgIH1cbiAgICBvbkVuZChkZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nIHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgYXNzZXJ0KGZhbHNlLCAnaXNBbmltYXRpbmcgaGFzIHRvIGJlIHRydWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc09wZW4gPSB0aGlzLl9pc09wZW47XG4gICAgICAgIGNvbnN0IGlzRW5kU2lkZSA9IHRoaXMuaXNFbmRTaWRlO1xuICAgICAgICBjb25zdCBkZWx0YSA9IGNvbXB1dGVEZWx0YShkZXRhaWwuZGVsdGFYLCBpc09wZW4sIGlzRW5kU2lkZSk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aWR0aDtcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBkZXRhaWwudmVsb2NpdHlYO1xuICAgICAgICBjb25zdCB6ID0gd2lkdGggLyAyLjA7XG4gICAgICAgIGNvbnN0IHNob3VsZENvbXBsZXRlUmlnaHQgPSB2ZWxvY2l0eSA+PSAwICYmICh2ZWxvY2l0eSA+IDAuMiB8fCBkZXRhaWwuZGVsdGFYID4geik7XG4gICAgICAgIGNvbnN0IHNob3VsZENvbXBsZXRlTGVmdCA9IHZlbG9jaXR5IDw9IDAgJiYgKHZlbG9jaXR5IDwgLTAuMiB8fCBkZXRhaWwuZGVsdGFYIDwgLXopO1xuICAgICAgICBjb25zdCBzaG91bGRDb21wbGV0ZSA9IGlzT3BlblxuICAgICAgICAgICAgPyBpc0VuZFNpZGUgPyBzaG91bGRDb21wbGV0ZVJpZ2h0IDogc2hvdWxkQ29tcGxldGVMZWZ0XG4gICAgICAgICAgICA6IGlzRW5kU2lkZSA/IHNob3VsZENvbXBsZXRlTGVmdCA6IHNob3VsZENvbXBsZXRlUmlnaHQ7XG4gICAgICAgIGxldCBzaG91bGRPcGVuID0gIWlzT3BlbiAmJiBzaG91bGRDb21wbGV0ZTtcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHNob3VsZE9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdE9uRW5kID0gZGV0YWlsLnRpbWVTdGFtcDtcbiAgICAgICAgLy8gQWNjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzIGluIEpTXG4gICAgICAgIGxldCBuZXdTdGVwVmFsdWUgPSAoc2hvdWxkQ29tcGxldGUpID8gMC4wMDEgOiAtMC4wMDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUT0RPOiBzdGVwVmFsdWUgY2FuIHNvbWV0aW1lcyByZXR1cm4gYSBuZWdhdGl2ZVxuICAgICAgICAgKiB2YWx1ZSwgYnV0IHlvdSBjYW4ndCBoYXZlIGEgbmVnYXRpdmUgdGltZSB2YWx1ZVxuICAgICAgICAgKiBmb3IgdGhlIGN1YmljIGJlemllciBjdXJ2ZSAoYXQgbGVhc3Qgd2l0aCB3ZWIgYW5pbWF0aW9ucylcbiAgICAgICAgICogTm90IHN1cmUgaWYgdGhlIG5lZ2F0aXZlIHN0ZXAgdmFsdWUgaXMgYW4gZXJyb3Igb3Igbm90XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBhZGp1c3RlZFN0ZXBWYWx1ZSA9IChzdGVwVmFsdWUgPD0gMCkgPyAwLjAxIDogc3RlcFZhbHVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW5pbWF0aW9uIHdpbGwgYmUgcmV2ZXJzZWQgaGVyZSwgc28gbmVlZCB0b1xuICAgICAgICAgKiByZXZlcnNlIHRoZSBlYXNpbmcgY3VydmUgYXMgd2VsbFxuICAgICAgICAgKlxuICAgICAgICAgKiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHRpbWUgcmVsYXRpdmVcbiAgICAgICAgICogdG8gdGhlIG5ldyBlYXNpbmcgY3VydmUsIGFzIGBzdGVwVmFsdWVgIGlzIGdvaW5nIHRvIGJlIGdpdmVuXG4gICAgICAgICAqIGluIHRlcm1zIG9mIGEgbGluZWFyIGN1cnZlLlxuICAgICAgICAgKi9cbiAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKG5ldyBQb2ludCgwLCAwKSwgbmV3IFBvaW50KDAuNCwgMCksIG5ldyBQb2ludCgwLjYsIDEpLCBuZXcgUG9pbnQoMSwgMSksIGNsYW1wKDAsIGFkanVzdGVkU3RlcFZhbHVlLCAxKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uXG4gICAgICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuNiwgMSknKVxuICAgICAgICAgICAgLm9uRmluaXNoKCgpID0+IHRoaXMuYWZ0ZXJBbmltYXRpb24oc2hvdWxkT3BlbiksIHsgb25lVGltZUNhbGxiYWNrOiB0cnVlIH0pXG4gICAgICAgICAgICAucHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCwgbmV3U3RlcFZhbHVlLCAzMDApO1xuICAgIH1cbiAgICBiZWZvcmVBbmltYXRpb24oc2hvdWxkT3Blbikge1xuICAgICAgICBhc3NlcnQoIXRoaXMuaXNBbmltYXRpbmcsICdfYmVmb3JlKCkgc2hvdWxkIG5vdCBiZSBjYWxsZWQgd2hpbGUgYW5pbWF0aW5nJyk7XG4gICAgICAgIC8vIHRoaXMgcGxhY2VzIHRoZSBtZW51IGludG8gdGhlIGNvcnJlY3QgbG9jYXRpb24gYmVmb3JlIGl0IGFuaW1hdGVzIGluXG4gICAgICAgIC8vIHRoaXMgY3NzIGNsYXNzIGRvZXNuJ3QgYWN0dWFsbHkga2ljayBvZmYgYW55IGFuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFNIT1dfTUVOVSk7XG4gICAgICAgIGlmICh0aGlzLmJhY2tkcm9wRWwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BFbC5jbGFzc0xpc3QuYWRkKFNIT1dfQkFDS0RST1ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tlci5ibG9jaygpO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNob3VsZE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaW9uV2lsbE9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pb25XaWxsQ2xvc2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFmdGVyQW5pbWF0aW9uKGlzT3Blbikge1xuICAgICAgICBhc3NlcnQodGhpcy5pc0FuaW1hdGluZywgJ19iZWZvcmUoKSBzaG91bGQgYmUgY2FsbGVkIHdoaWxlIGFuaW1hdGluZycpO1xuICAgICAgICAvLyBrZWVwIG9wZW5pbmcvY2xvc2luZyB0aGUgbWVudSBkaXNhYmxlZCBmb3IgYSB0b3VjaCBtb3JlIHlldFxuICAgICAgICAvLyBvbmx5IGFkZCBsaXN0ZW5lcnMvY3NzIGlmIGl0J3MgZW5hYmxlZCBhbmQgaXNPcGVuXG4gICAgICAgIC8vIGFuZCBvbmx5IHJlbW92ZSBsaXN0ZW5lcnMvY3NzIGlmIGl0J3Mgbm90IG9wZW5cbiAgICAgICAgLy8gZW1pdCBvcGVuZWQvY2xvc2VkIGV2ZW50c1xuICAgICAgICB0aGlzLl9pc09wZW4gPSBpc09wZW47XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlci51bmJsb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgLy8gYWRkIGNzcyBjbGFzc1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudEVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50RWwuY2xhc3NMaXN0LmFkZChNRU5VX0NPTlRFTlRfT1BFTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbWl0IG9wZW4gZXZlbnRcbiAgICAgICAgICAgIHRoaXMuaW9uRGlkT3Blbi5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgY3NzIGNsYXNzZXNcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShTSE9XX01FTlUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudEVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50RWwuY2xhc3NMaXN0LnJlbW92ZShNRU5VX0NPTlRFTlRfT1BFTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5iYWNrZHJvcEVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZHJvcEVsLmNsYXNzTGlzdC5yZW1vdmUoU0hPV19CQUNLRFJPUCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgICAgICAgICB0aGlzLmlvbkRpZENsb3NlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZSgpO1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQoIWlzQWN0aXZlIHx8ICF0aGlzLnN3aXBlR2VzdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xvc2UgbWVudSBpbW1lZGlhdGVseVxuICAgICAgICBpZiAoIWlzQWN0aXZlICYmIHRoaXMuX2lzT3Blbikge1xuICAgICAgICAgICAgLy8gY2xvc2UgaWYgdGhpcyBtZW51IGlzIG9wZW4sIGFuZCBzaG91bGQgbm90IGJlIGVuYWJsZWRcbiAgICAgICAgICAgIHRoaXMuZm9yY2VDbG9zaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBtZW51Q29udHJvbGxlci5fc2V0QWN0aXZlTWVudSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBhc3NlcnQoIXRoaXMuaXNBbmltYXRpbmcsICdjYW4gbm90IGJlIGFuaW1hdGluZycpO1xuICAgIH1cbiAgICBmb3JjZUNsb3NpbmcoKSB7XG4gICAgICAgIGFzc2VydCh0aGlzLl9pc09wZW4sICdtZW51IGNhbm5vdCBiZSBjbG9zZWQnKTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGFuaSA9IHRoaXMuYW5pbWF0aW9uLmRpcmVjdGlvbigncmV2ZXJzZScpO1xuICAgICAgICBhbmkucGxheVN5bmMoKTtcbiAgICAgICAgdGhpcy5hZnRlckFuaW1hdGlvbihmYWxzZSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0VuZFNpZGUsIHR5cGUsIGRpc2FibGVkLCBtb2RlLCBpc1BhbmVWaXNpYmxlIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcIm5hdmlnYXRpb25cIiwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgW2BtZW51LXR5cGUtJHt0eXBlfWBdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdtZW51LWVuYWJsZWQnOiAhZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgJ21lbnUtc2lkZS1lbmQnOiBpc0VuZFNpZGUsXG4gICAgICAgICAgICAgICAgJ21lbnUtc2lkZS1zdGFydCc6ICFpc0VuZFNpZGUsXG4gICAgICAgICAgICAgICAgJ21lbnUtcGFuZS12aXNpYmxlJzogaXNQYW5lVmlzaWJsZVxuICAgICAgICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibWVudS1pbm5lclwiLCByZWY6IGVsID0+IHRoaXMubWVudUlubmVyRWwgPSBlbCB9LCBoKFwic2xvdFwiLCBudWxsKSksIGgoXCJpb24tYmFja2Ryb3BcIiwgeyByZWY6IGVsID0+IHRoaXMuYmFja2Ryb3BFbCA9IGVsLCBjbGFzczogXCJtZW51LWJhY2tkcm9wXCIsIHRhcHBhYmxlOiBmYWxzZSwgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZSB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJ0eXBlXCI6IFtcInR5cGVDaGFuZ2VkXCJdLFxuICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJzaWRlXCI6IFtcInNpZGVDaGFuZ2VkXCJdLFxuICAgICAgICBcInN3aXBlR2VzdHVyZVwiOiBbXCJzd2lwZUdlc3R1cmVDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0td2lkdGg6MzA0cHg7LS1taW4td2lkdGg6YXV0bzstLW1heC13aWR0aDphdXRvOy0taGVpZ2h0OjEwMCU7LS1taW4taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtjb250YWluOnN0cmljdH06aG9zdCguc2hvdy1tZW51KXtkaXNwbGF5OmJsb2NrfS5tZW51LWlubmVye2xlZnQ6MDtyaWdodDphdXRvO3RvcDowO2JvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC05OTk5cHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTk5OTlweCwwLDApO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3R9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5tZW51LWlubmVyLFtkaXI9cnRsXSAubWVudS1pbm5lcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O2xlZnQ6YXV0bztyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAtOTk5OXB4KSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xICogLTk5OTlweCksMCwwKX06aG9zdCgubWVudS1zaWRlLXN0YXJ0KSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4O3JpZ2h0OmF1dG87bGVmdDowfTpob3N0KC5tZW51LXNpZGUtZW5kKSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHg7cmlnaHQ6MDtsZWZ0OmF1dG99aW9uLWJhY2tkcm9we2Rpc3BsYXk6bm9uZTtvcGFjaXR5Oi4wMTt6LWluZGV4Oi0xfVxcQG1lZGlhIChtYXgtd2lkdGg6MzQwcHgpey5tZW51LWlubmVyey0td2lkdGg6MjY0cHh9fTpob3N0KC5tZW51LXR5cGUtcmV2ZWFsKXt6LWluZGV4OjB9Omhvc3QoLm1lbnUtdHlwZS1yZXZlYWwuc2hvdy1tZW51KSAubWVudS1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTpob3N0KC5tZW51LXR5cGUtb3ZlcmxheSl7ei1pbmRleDoxMDAwfTpob3N0KC5tZW51LXR5cGUtb3ZlcmxheSkgLnNob3ctYmFja2Ryb3B7ZGlzcGxheTpibG9jaztjdXJzb3I6cG9pbnRlcn06aG9zdCgubWVudS1wYW5lLXZpc2libGUpIC5tZW51LWlubmVye2xlZnQ6MDtyaWdodDowO3dpZHRoOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50fTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZSkgaW9uLWJhY2tkcm9we2Rpc3BsYXk6aGlkZGVuIWltcG9ydGFudH06aG9zdCgubWVudS10eXBlLXB1c2gpe3otaW5kZXg6MTAwMH06aG9zdCgubWVudS10eXBlLXB1c2gpIC5zaG93LWJhY2tkcm9we2Rpc3BsYXk6YmxvY2t9XCI7IH1cbn07XG5jb25zdCBjb21wdXRlRGVsdGEgPSAoZGVsdGFYLCBpc09wZW4sIGlzRW5kU2lkZSkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBpc09wZW4gIT09IGlzRW5kU2lkZSA/IC1kZWx0YVggOiBkZWx0YVgpO1xufTtcbmNvbnN0IGNoZWNrRWRnZVNpZGUgPSAod2luLCBwb3NYLCBpc0VuZFNpZGUsIG1heEVkZ2VTdGFydCkgPT4ge1xuICAgIGlmIChpc0VuZFNpZGUpIHtcbiAgICAgICAgcmV0dXJuIHBvc1ggPj0gd2luLmlubmVyV2lkdGggLSBtYXhFZGdlU3RhcnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcG9zWCA8PSBtYXhFZGdlU3RhcnQ7XG4gICAgfVxufTtcbmNvbnN0IFNIT1dfTUVOVSA9ICdzaG93LW1lbnUnO1xuY29uc3QgU0hPV19CQUNLRFJPUCA9ICdzaG93LWJhY2tkcm9wJztcbmNvbnN0IE1FTlVfQ09OVEVOVF9PUEVOID0gJ21lbnUtY29udGVudC1vcGVuJztcblxuLy8gR2l2ZW4gYSBtZW51LCByZXR1cm4gd2hldGhlciBvciBub3QgdGhlIG1lbnUgdG9nZ2xlIHNob3VsZCBiZSB2aXNpYmxlXHJcbmNvbnN0IHVwZGF0ZVZpc2liaWxpdHkgPSBhc3luYyAobWVudSkgPT4ge1xyXG4gICAgY29uc3QgbWVudUVsID0gYXdhaXQgbWVudUNvbnRyb2xsZXIuZ2V0KG1lbnUpO1xyXG4gICAgcmV0dXJuICEhKG1lbnVFbCAmJiBhd2FpdCBtZW51RWwuaXNBY3RpdmUoKSk7XHJcbn07XG5cbmNvbnN0IE1lbnVCdXR0b24gPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIG1lbnUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXV0b21hdGljYWxseSBoaWRlcyB0aGUgbWVudSBidXR0b24gd2hlbiB0aGUgY29ycmVzcG9uZGluZyBtZW51IGlzIG5vdCBhY3RpdmVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b0hpZGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIudG9nZ2xlKHRoaXMubWVudSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZWQoKTtcbiAgICB9XG4gICAgYXN5bmMgdmlzaWJpbGl0eUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGF3YWl0IHVwZGF0ZVZpc2liaWxpdHkodGhpcy5tZW51KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yLCBkaXNhYmxlZCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IG1lbnVJY29uID0gY29uZmlnLmdldCgnbWVudUljb24nLCAnbWVudScpO1xuICAgICAgICBjb25zdCBoaWRkZW4gPSB0aGlzLmF1dG9IaWRlICYmICF0aGlzLnZpc2libGU7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgXCJhcmlhLWhpZGRlblwiOiBoaWRkZW4gPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgW21vZGVdOiB0cnVlIH0sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvcikpLCB7ICdidXR0b24nOiB0cnVlLCAnbWVudS1idXR0b24taGlkZGVuJzogaGlkZGVuLCAnbWVudS1idXR0b24tZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUsICdpb24tZm9jdXNhYmxlJzogdHJ1ZSB9KSB9LCBoKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB7IGRpc2FibGVkOiBkaXNhYmxlZCwgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiIH0pLCBoKFwic2xvdFwiLCBudWxsLCBoKFwiaW9uLWljb25cIiwgeyBpY29uOiBtZW51SWNvbiwgbW9kZTogbW9kZSwgbGF6eTogZmFsc2UgfSkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IFwidW5ib3VuZGVkXCIgfSkpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3IpOy0tYm9yZGVyLXJhZGl1czppbml0aWFsOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7Y29sb3I6dmFyKC0tY29sb3IpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2xpbmUtaGVpZ2h0OjE7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5idXR0b24tbmF0aXZle3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX1pb24taWNvbnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5tZW51LWJ1dHRvbi1oaWRkZW4pe2Rpc3BsYXk6bm9uZX06aG9zdCgubWVudS1idXR0b24tZGlzYWJsZWQpe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXs6aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7Y29sb3I6dmFyKC0tY29sb3ItaG92ZXIpfX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QtY29udGV4dChpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikpe2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLHZhcigtLWNvbG9yKSl9Omhvc3R7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xKTstLWJvcmRlci1yYWRpdXM6NHB4Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1wYWRkaW5nLXN0YXJ0OjVweDstLXBhZGRpbmctZW5kOjVweDtoZWlnaHQ6MzJweDtmb250LXNpemU6MzFweH06aG9zdCguYWN0aXZhdGVkKXtvcGFjaXR5Oi40fVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KDpob3Zlcil7b3BhY2l0eTouNn19Omhvc3QoLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjEpfVwiOyB9XG59O1xuXG5jb25zdCBNZW51Q29udHJvbGxlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIG1lbnUuIElmIGEgbWVudSBpcyBub3QgcHJvdmlkZWQgdGhlbiBpdCB3aWxsIG9wZW4gdGhlIGZpcnN0XG4gICAgICogbWVudSBmb3VuZC4gSWYgdGhlIHNwZWNpZmllZCBtZW51IGlzIGBzdGFydGAgb3IgYGVuZGAsIHRoZW4gaXQgd2lsbCBvcGVuXG4gICAgICogdGhlIGVuYWJsZWQgbWVudSBvbiB0aGF0IHNpZGUuIE90aGVyd2lzZSwgaXQgd2lsbCB0cnkgdG8gZmluZCB0aGUgbWVudVxuICAgICAqIHVzaW5nIHRoZSBtZW51J3MgYGlkYCBwcm9wZXJ0eS4gSWYgYSBtZW51IGlzIG5vdCBmb3VuZCB0aGVuIGl0IHdpbGxcbiAgICAgKiByZXR1cm4gYGZhbHNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byBvcGVuLlxuICAgICAqL1xuICAgIG9wZW4obWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIub3BlbihtZW51KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIG1lbnUuIElmIGEgbWVudSBpcyBzcGVjaWZpZWQsIGl0IHdpbGwgY2xvc2UgdGhhdCBtZW51LlxuICAgICAqIElmIG5vIG1lbnUgaXMgc3BlY2lmaWVkLCB0aGVuIGl0IHdpbGwgY2xvc2UgYW55IG1lbnUgdGhhdCBpcyBvcGVuLlxuICAgICAqIElmIGl0IGRvZXMgbm90IGZpbmQgYW55IG9wZW4gbWVudXMsIGl0IHdpbGwgcmV0dXJuIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gY2xvc2UuXG4gICAgICovXG4gICAgY2xvc2UobWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuY2xvc2UobWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgbWVudSBvcGVuIG9yIGNsb3NlZC4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBpdCB3aWxsIHRyeSB0b1xuICAgICAqIGNsb3NlIHRoZSBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCB0cnkgdG8gb3BlbiBpdC4gUmV0dXJucyBgZmFsc2VgIGlmXG4gICAgICogYSBtZW51IGlzIG5vdCBmb3VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byB0b2dnbGUuXG4gICAgICovXG4gICAgdG9nZ2xlKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZShtZW51KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgYSBtZW51LiBEaXNhYmxpbmcgYSBtZW51IHdpbGwgbm90IGFsbG93IGdlc3R1cmVzXG4gICAgICogZm9yIHRoYXQgbWVudSBvciBhbnkgY2FsbHMgdG8gb3BlbiBpdC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB0aGVyZSBhcmVcbiAgICAgKiBtdWx0aXBsZSBtZW51cyBvbiB0aGUgc2FtZSBzaWRlIGFuZCBvbmx5IG9uZSBvZiB0aGVtIHNob3VsZCBiZSBhbGxvd2VkXG4gICAgICogdG8gb3Blbi4gRW5hYmxpbmcgYSBtZW51IHdpbGwgYXV0b21hdGljYWxseSBkaXNhYmxlIGFsbCBvdGhlciBtZW51c1xuICAgICAqIG9uIHRoYXQgc2lkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbmFibGUgSWYgYHRydWVgLCB0aGUgbWVudSBzaG91bGQgYmUgZW5hYmxlZC5cbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gZW5hYmxlIG9yIGRpc2FibGUuXG4gICAgICovXG4gICAgZW5hYmxlKGVuYWJsZSwgbWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuZW5hYmxlKGVuYWJsZSwgbWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBhYmlsaXR5IHRvIHN3aXBlIG9wZW4gdGhlIG1lbnUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlIElmIGB0cnVlYCwgdGhlIG1lbnUgc3dpcGUgZ2VzdHVyZSBzaG91bGQgYmUgZW5hYmxlZC5cbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHN3aXBlIGdlc3R1cmUgb24uXG4gICAgICovXG4gICAgc3dpcGVHZXN0dXJlKGVuYWJsZSwgbWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuc3dpcGVHZXN0dXJlKGVuYWJsZSwgbWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBvcGVuLiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkXG4gICAgICogbWVudSBpcyBvcGVuLiBJZiBhIG1lbnUgaXMgbm90IHNwZWNpZmllZCwgaXQgd2lsbCByZXR1cm4gYHRydWVgIGlmXG4gICAgICogYW55IG1lbnUgaXMgY3VycmVudGx5IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdGhhdCBpcyBiZWluZyBjaGVja2VkLlxuICAgICAqL1xuICAgIGlzT3BlbihtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5pc09wZW4obWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBlbmFibGVkLiBSZXR1cm5zIGB0cnVlYCBpZiB0aGVcbiAgICAgKiBzcGVjaWZpZWQgbWVudSBpcyBlbmFibGVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgYSBtZW51IGlzIGRpc2FibGVkXG4gICAgICogb3Igbm90IGZvdW5kLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lbnUgVGhlIG1lbnVJZCBvciBzaWRlIG9mIHRoZSBtZW51IHRoYXQgaXMgYmVpbmcgY2hlY2tlZC5cbiAgICAgKi9cbiAgICBpc0VuYWJsZWQobWVudSkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuaXNFbmFibGVkKG1lbnUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBtZW51IGluc3RhbmNlLiBJZiBhIG1lbnUgaXMgbm90IHByb3ZpZGVkIHRoZW4gaXQgd2lsbCByZXR1cm4gdGhlIGZpcnN0XG4gICAgICogbWVudSBmb3VuZC4gSWYgdGhlIHNwZWNpZmllZCBtZW51IGlzIGBzdGFydGAgb3IgYGVuZGAsIHRoZW4gaXQgd2lsbCByZXR1cm4gdGhlXG4gICAgICogZW5hYmxlZCBtZW51IG9uIHRoYXQgc2lkZS4gT3RoZXJ3aXNlLCBpdCB3aWxsIHRyeSB0byBmaW5kIHRoZSBtZW51IHVzaW5nIHRoZSBtZW51J3NcbiAgICAgKiBgaWRgIHByb3BlcnR5LiBJZiBhIG1lbnUgaXMgbm90IGZvdW5kIHRoZW4gaXQgd2lsbCByZXR1cm4gYG51bGxgLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lbnUgVGhlIG1lbnVJZCBvciBzaWRlIG9mIHRoZSBtZW51LlxuICAgICAqL1xuICAgIGdldChtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXQobWVudSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIG9wZW5lZCBtZW51LiBSZXR1cm5zIGBudWxsYCBpZiBhIG1lbnUgaXMgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGdldE9wZW4oKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXRPcGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgbWVudSBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgZ2V0TWVudXMoKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXRNZW51cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBvciBub3QgYSBtZW51IGlzIGFuaW1hdGluZy4gUmV0dXJucyBgdHJ1ZWAgaWYgYW55XG4gICAgICogbWVudSBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLlxuICAgICAqL1xuICAgIGlzQW5pbWF0aW5nKCkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuaXNBbmltYXRpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGFuaW1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYW55IGBpb24tbWVudWAgYnlcbiAgICAgKiBwYXNzaW5nIHRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gaW4gaXRzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gdG8gcmVnaXN0ZXIuXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgYW5pbWF0aW9uIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyLlxuICAgICAqL1xuICAgIGFzeW5jIHJlZ2lzdGVyQW5pbWF0aW9uKG5hbWUsIGFuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIucmVnaXN0ZXJBbmltYXRpb24obmFtZSwgYW5pbWF0aW9uKTtcbiAgICB9XG59O1xuXG5jb25zdCBNZW51VG9nZ2xlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSBjb250ZW50IHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgbWVudSBpcyBub3QgYWN0aXZlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZhdWx0LCBpdCdzIGB0cnVlYC4gQ2hhbmdlIGl0IHRvIGBmYWxzZWAgaW4gb3JkZXIgdG9cbiAgICAgICAgICoga2VlcCBgaW9uLW1lbnUtdG9nZ2xlYCBhbHdheXMgdmlzaWJsZSByZWdhcmRsZXNzIHRoZSBzdGF0ZSBvZiB0aGUgbWVudS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b0hpZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIudG9nZ2xlKHRoaXMubWVudSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGFzeW5jIHZpc2liaWxpdHlDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBhd2FpdCB1cGRhdGVWaXNpYmlsaXR5KHRoaXMubWVudSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuYXV0b0hpZGUgJiYgIXRoaXMudmlzaWJsZTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBcImFyaWEtaGlkZGVuXCI6IGhpZGRlbiA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdtZW51LXRvZ2dsZS1oaWRkZW4nOiBoaWRkZW4sXG4gICAgICAgICAgICB9IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0KC5tZW51LXRvZ2dsZS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX1cIjsgfVxufTtcblxuZXhwb3J0IHsgTWVudSBhcyBpb25fbWVudSwgTWVudUJ1dHRvbiBhcyBpb25fbWVudV9idXR0b24sIE1lbnVDb250cm9sbGVyIGFzIGlvbl9tZW51X2NvbnRyb2xsZXIsIE1lbnVUb2dnbGUgYXMgaW9uX21lbnVfdG9nZ2xlIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9