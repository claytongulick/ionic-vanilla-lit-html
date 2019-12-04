(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \***************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/index-6826f2f6.js":
/*!**************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/index-6826f2f6.js ***!
  \**************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() */ 88).then(__webpack_require__.bind(null, /*! ./ios.transition-071bd421.js */ "../node_modules/@ionic/core/dist/esm/ios.transition-071bd421.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() */ 89).then(__webpack_require__.bind(null, /*! ./md.transition-15a81b08.js */ "../node_modules/@ionic/core/dist/esm/md.transition-15a81b08.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    let trans;
    try {
        const mod = await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "../node_modules/@ionic/core/dist/esm/index-69c37885.js"));
        trans = await mod.create(animationBuilder, opts.baseEl, opts);
    }
    catch (err) {
        trans = animationBuilder(opts.baseEl, opts);
    }
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js":
/*!***************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js ***!
  \***************************************************************/
/*! exports provided: ion_nav, ion_nav_link, ion_nav_pop, ion_nav_push, ion_nav_set_root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_link", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_pop", function() { return NavPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_push", function() { return NavPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_set_root", function() { return NavSetRoot; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
/* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-6826f2f6.js */ "../node_modules/@ionic/core/dist/esm/index-6826f2f6.js");
/* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "../node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");








const VIEW_STATE_NEW = 1;
const VIEW_STATE_ATTACHED = 2;
const VIEW_STATE_DESTROYED = 3;
class ViewController {
    constructor(component, params) {
        this.component = component;
        this.params = params;
        this.state = VIEW_STATE_NEW;
    }
    async init(container) {
        this.state = VIEW_STATE_ATTACHED;
        if (!this.element) {
            const component = this.component;
            this.element = await Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);
        }
    }
    /**
     * DOM WRITE
     */
    _destroy() {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
        const element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = VIEW_STATE_DESTROYED;
    }
}
const matches = (view, id, params) => {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    const currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    const keysA = Object.keys(currentParams);
    const keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for (const key of keysA) {
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
};
const convertToView = (page, params) => {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
};
const convertToViews = (pages) => {
    return pages.map(page => {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(v => v !== null);
};

const Nav = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.transInstr = [];
        this.animationEnabled = true;
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        /**
         * If `true`, the nav should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavDidChange", 3);
    }
    swipeGestureChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    }
    rootChanged() {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
        }
    }
    componentWillLoad() {
        this.useRouter =
            !!document.querySelector('ion-router') &&
                !this.el.closest('[no-router]');
        if (this.swipeGesture === undefined) {
            const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            this.swipeGesture = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('swipeBackEnabled', mode === 'ios');
        }
        this.ionNavWillLoad.emit();
    }
    async componentDidLoad() {
        this.rootChanged();
        this.gesture = (await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./swipe-back-35ad8e37.js */ "../node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js"))).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
        this.swipeGestureChanged();
    }
    componentDidUnload() {
        for (const view of this.views) {
            Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        // release swipe back gesture and transition
        this.transInstr.length = this.views.length = 0;
        this.destroyed = true;
    }
    /**
     * Push a new component onto the current navigation stack. Pass any additional
     * information along as an object. This additional information is accessible
     * through NavParams.
     *
     * @param component The component to push onto the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    push(component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    /**
     * Inserts a component into the navigation stack at the specified index.
     * This is useful to add a component at any point in the navigation stack.
     *
     * @param insertIndex The index to insert the component at in the stack.
     * @param component The component to insert into the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    insert(insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    /**
     * Inserts an array of components into the navigation stack at the specified index.
     * The last component in the array will become instantiated as a view, and animate
     * in to become the active view.
     *
     * @param insertIndex The index to insert the components at in the stack.
     * @param insertComponents The components to insert into the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    insertPages(insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts
        }, done);
    }
    /**
     * Pop a component off of the navigation stack. Navigates back from the current
     * component.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    pop(opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts
        }, done);
    }
    /**
     * Pop to a specific index in the navigation stack.
     *
     * @param indexOrViewCtrl The index or view controller to pop to.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    popTo(indexOrViewCtrl, opts, done) {
        const tiConfig = {
            removeStart: -1,
            removeCount: -1,
            opts
        };
        if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
            tiConfig.removeView = indexOrViewCtrl;
            tiConfig.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === 'number') {
            tiConfig.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(tiConfig, done);
    }
    /**
     * Navigate back to the root of the stack, no matter how far back that is.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    popToRoot(opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts
        }, done);
    }
    /**
     * Removes a component from the navigation stack at the specified index.
     *
     * @param startIndex The number to begin removal at.
     * @param removeCount The number of components to remove.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    removeIndex(startIndex, removeCount = 1, opts, done) {
        return this.queueTrns({
            removeStart: startIndex,
            removeCount,
            opts
        }, done);
    }
    /**
     * Set the root for the current navigation stack to a component.
     *
     * @param component The component to set as the root of the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    setRoot(component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    }
    /**
     * Set the views of the current navigation stack and navigate to the last view.
     * By default animations are disabled, but they can be enabled by passing options
     * to the navigation controller. Navigation parameters can also be passed to the
     * individual pages in the array.
     *
     * @param views The list of views to set as the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    setPages(views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        // if animation wasn't set to true then default it to NOT animate
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts
        }, done);
    }
    /** @internal */
    setRouteId(id, params, direction) {
        const active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        let resolve;
        const promise = new Promise(r => (resolve = r));
        let finish;
        const commonOpts = {
            updateURL: false,
            viewIsReady: enteringEl => {
                let mark;
                const p = new Promise(r => (mark = r));
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: async () => {
                        mark();
                        await finish;
                    }
                });
                return p;
            }
        };
        if (direction === 'root') {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            const viewController = this.views.find(v => matches(v, id, params));
            if (viewController) {
                finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: 'back' }));
            }
            else if (direction === 'forward') {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === 'back') {
                finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: 'back', animated: true }));
            }
        }
        return promise;
    }
    /** @internal */
    async getRouteId() {
        const active = this.getActiveSync();
        return active
            ? {
                id: active.element.tagName,
                params: active.params,
                element: active.element
            }
            : undefined;
    }
    /**
     * Get the active view.
     */
    getActive() {
        return Promise.resolve(this.getActiveSync());
    }
    /**
     * Get the view at the specified index.
     *
     * @param index The index of the view.
     */
    getByIndex(index) {
        return Promise.resolve(this.views[index]);
    }
    /**
     * Returns `true` if the current view can go back.
     *
     * @param view The view to check.
     */
    canGoBack(view) {
        return Promise.resolve(this.canGoBackSync(view));
    }
    /**
     * Get the previous view.
     *
     * @param view The view to get.
     */
    getPrevious(view) {
        return Promise.resolve(this.getPreviousSync(view));
    }
    getLength() {
        return this.views.length;
    }
    getActiveSync() {
        return this.views[this.views.length - 1];
    }
    canGoBackSync(view = this.getActiveSync()) {
        return !!(view && this.getPreviousSync(view));
    }
    getPreviousSync(view = this.getActiveSync()) {
        if (!view) {
            return undefined;
        }
        const views = this.views;
        const index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    }
    // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
    // 1. _nextTrns(): consumes the next transition in the queue
    // 2. _viewInit(): initializes enteringView if required
    // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
    // 4. _postViewInit(): add/remove the views from the navigation stack
    // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
    // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
    // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
    // 8. _transitionFinish(): called once the transition finishes
    // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.
    queueTrns(ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        const promise = new Promise((resolve, reject) => {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        // Normalize empty
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        // Enqueue transition instruction
        this.transInstr.push(ti);
        // if there isn't a transition already happening
        // then this will kick off this transition
        this.nextTrns();
        return promise;
    }
    success(result, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            const router = document.querySelector('ion-router');
            if (router) {
                const direction = result.direction === 'back' ? 'back' : 'forward';
                router.navChanged(direction);
            }
        }
    }
    failed(rejectReason, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    }
    fireError(rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    }
    nextTrns() {
        // this is the framework's bread 'n butta function
        // only one transition is allowed at any given time
        if (this.isTransitioning) {
            return false;
        }
        // there is no transition happening right now
        // get the next instruction
        const ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    }
    async runTransition(ti) {
        try {
            // set that this nav is actively transitioning
            this.ionNavWillChange.emit();
            this.isTransitioning = true;
            this.prepareTI(ti);
            const leavingView = this.getActiveSync();
            const enteringView = this.getEnteringView(ti, leavingView);
            if (!leavingView && !enteringView) {
                throw new Error('no views in the stack to be removed');
            }
            if (enteringView && enteringView.state === VIEW_STATE_NEW) {
                await enteringView.init(this.el);
            }
            this.postViewInit(enteringView, leavingView, ti);
            // Needs transition?
            const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                enteringView !== leavingView;
            const result = requiresTransition
                ? await this.transition(enteringView, leavingView, ti)
                : {
                    // transition is not required, so we are already done!
                    // they're inserting/removing the views somewhere in the middle or
                    // beginning, so visually nothing needs to animate/transition
                    // resolve immediately because there's no animation that's happening
                    hasCompleted: true,
                    requiresTransition: false
                };
            this.success(result, ti);
            this.ionNavDidChange.emit();
        }
        catch (rejectReason) {
            this.failed(rejectReason, ti);
        }
        this.isTransitioning = false;
        this.nextTrns();
    }
    prepareTI(ti) {
        const viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeStart !== undefined, 'removeView needs removeStart');
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeCount !== undefined, 'removeView needs removeCount');
            const index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error('removeView was not found');
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            // allow -1 to be passed in to auto push it on the end
            // and clean up the index if it's larger then the size of the stack
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        const insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(insertViews.length > 0, 'length can not be zero');
        const viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
        }
        // Check all the inserted view are correct
        for (const view of viewControllers) {
            view.delegate = ti.opts.delegate;
            const nav = view.nav;
            if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
            }
            if (view.state === VIEW_STATE_DESTROYED) {
                throw new Error('inserted view was already destroyed');
            }
        }
        ti.insertViews = viewControllers;
    }
    getEnteringView(ti, leavingView) {
        const insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            // grab the very last view of the views to be inserted
            // and initialize it as the new entering view
            return insertViews[insertViews.length - 1];
        }
        const removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            const views = this.views;
            const removeEnd = removeStart + ti.removeCount;
            for (let i = views.length - 1; i >= 0; i--) {
                const view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    }
    postViewInit(enteringView, leavingView, ti) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.resolve, 'resolve must be valid');
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.reject, 'reject must be valid');
        const opts = ti.opts;
        const insertViews = ti.insertViews;
        const removeStart = ti.removeStart;
        const removeCount = ti.removeCount;
        let destroyQueue;
        // there are views to remove
        if (removeStart !== undefined && removeCount !== undefined) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeStart >= 0, 'removeStart can not be negative');
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (let i = 0; i < removeCount; i++) {
                const view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            // default the direction to "back"
            opts.direction = opts.direction || 'back';
        }
        const finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0) {
            console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
            throw new Error('navigation stack needs at least one root page');
        }
        // At this point the transition can not be rejected, any throw should be an error
        // there are views to insert
        if (insertViews) {
            // add the views to the
            let insertIndex = ti.insertStart;
            for (const view of insertViews) {
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || 'forward';
            }
        }
        // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        // let's make sure, callbacks are zoned
        if (destroyQueue && destroyQueue.length > 0) {
            for (const view of destroyQueue) {
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["b"]);
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["c"]);
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
            }
            // once all lifecycle events has been delivered, we can safely detroy the views
            for (const view of destroyQueue) {
                this.destroyView(view);
            }
        }
    }
    async transition(enteringView, leavingView, ti) {
        // we should animate (duration > 0) if the pushed page is not the first one (startup)
        // or if it is a portal (modal, actionsheet, etc.)
        const opts = ti.opts;
        const progressCallback = opts.progressAnimation
            ? (ani) => this.sbAni = ani
            : undefined;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const enteringEl = enteringView.element;
        const leavingEl = leavingView && leavingView.element;
        const animationOpts = Object.assign({ mode, showGoBack: this.canGoBackSync(enteringView), baseEl: this.el, animationBuilder: this.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('navAnimation'), progressCallback, animated: this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true), enteringEl,
            leavingEl }, opts);
        const { hasCompleted } = await Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["t"])(animationOpts);
        return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
    }
    transitionFinish(hasCompleted, enteringView, leavingView, opts) {
        const cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted,
            requiresTransition: true,
            enteringView,
            leavingView,
            direction: opts.direction
        };
    }
    insertViewAt(view, index) {
        const views = this.views;
        const existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            // this view is already in the stack!!
            // move it to its new location
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!view.nav, 'nav is used');
            // this is a new view to add to the stack
            // create the new entering view
            view.nav = this;
            // insert the entering view into the correct index in the stack
            views.splice(index, 0, view);
        }
    }
    removeView(view) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
        const views = this.views;
        const index = views.indexOf(view);
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    }
    destroyView(view) {
        view._destroy();
        this.removeView(view);
    }
    /**
     * DOM WRITE
     */
    cleanup(activeView) {
        // ok, cleanup time!! Destroy all of the views that are
        // INACTIVE and come after the active view
        // only do this if the views exist, though
        if (this.destroyed) {
            return;
        }
        const views = this.views;
        const activeViewIndex = views.indexOf(activeView);
        for (let i = views.length - 1; i >= 0; i--) {
            const view = views[i];
            const element = view.element;
            if (i > activeViewIndex) {
                // this view comes after the active view
                // let's unload it
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["l"])(element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                // this view comes before the active view
                // and it is not a portal then ensure it is hidden
                Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["s"])(element, true);
            }
        }
    }
    canStart() {
        return (!!this.swipeGesture &&
            !this.isTransitioning &&
            this.transInstr.length === 0 &&
            this.animationEnabled &&
            this.canGoBackSync());
    }
    onStart() {
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: {
                direction: 'back',
                progressAnimation: true
            }
        }, undefined);
    }
    onMove(stepValue) {
        if (this.sbAni) {
            this.sbAni.progressStep(stepValue);
        }
    }
    onEnd(shouldComplete, stepValue, dur) {
        if (this.sbAni) {
            this.animationEnabled = false;
            this.sbAni.onFinish(() => {
                this.animationEnabled = true;
            }, { oneTimeCallback: true });
            // Account for rounding errors in JS
            let newStepValue = (shouldComplete) ? -0.001 : 0.001;
            /**
             * Animation will be reversed here, so need to
             * reverse the easing curve as well
             *
             * Additionally, we need to account for the time relative
             * to the new easing curve, as `stepValue` is going to be given
             * in terms of a linear curve.
             */
            if (!shouldComplete) {
                this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0.68, 0.28), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 1), stepValue);
            }
            else {
                newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0.32, 0.72), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 1), stepValue);
            }
            this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
        }
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "swipeGesture": ["swipeGestureChanged"],
        "root": ["rootChanged"]
    }; }
    static get style() { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; }
};

const navLink = (el, routerDirection, component, componentProps) => {
    const nav = el.closest('ion-nav');
    if (nav) {
        if (routerDirection === 'forward') {
            if (component !== undefined) {
                return nav.push(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'root') {
            if (component !== undefined) {
                return nav.setRoot(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'back') {
            return nav.pop({ skipIfBusy: true });
        }
    }
    return Promise.resolve(false);
};

const NavLink = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * The transition direction when navigating to another page.
         */
        this.routerDirection = 'forward';
        this.onClick = () => {
            return navLink(this.el, this.routerDirection, this.component, this.componentProps);
        };
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
};

const NavPop = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.pop = () => {
            return navLink(this.el, 'back');
        };
    }
    componentDidLoad() {
        console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.');
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.pop }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
};

const NavPush = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.push = () => {
            return navLink(this.el, 'forward', this.component, this.componentProps);
        };
    }
    componentDidLoad() {
        console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.');
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.push }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
};

const NavSetRoot = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.setRoot = () => {
            return navLink(this.el, 'root', this.component, this.componentProps);
        };
    }
    componentDidLoad() {
        console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.');
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.setRoot }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY4MjZmMmY2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLW5hdl81LmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvRDs7Ozs7Ozs7Ozs7OztBQzVGcEQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBTTtBQUNsQixZQUFZLDhEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Y2h1bmtzXFwxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCYXNlZCBvbjpcclxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzM0ODAwOS95LWNvb3JkaW5hdGUtZm9yLWEtZ2l2ZW4teC1jdWJpYy1iZXppZXJcclxuICogaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8yNjg0Ni9pcy10aGVyZS1hbi1leHBsaWNpdC1mb3JtLWZvci1jdWJpYy1iJUMzJUE5emllci1jdXJ2ZXNcclxuICogVE9ETzogUmVkdWNlIHJvdW5kaW5nIGVycm9yXHJcbiAqL1xyXG5jbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiBhIGN1YmljLWJlemllciBjdXJ2ZSwgZ2V0IHRoZSB4IHZhbHVlICh0aW1lKSBnaXZlblxyXG4gKiB0aGUgeSB2YWx1ZSAocHJvZ3Jlc3Npb24pLlxyXG4gKiBFeDogY3ViaWMtYmV6aWVyKDAuMzIsIDAuNzIsIDAsIDEpO1xyXG4gKiBQMDogKDAsIDApXHJcbiAqIFAxOiAoMC4zMiwgMC43MilcclxuICogUDI6ICgwLCAxKVxyXG4gKiBQMzogKDEsIDEpXHJcbiAqXHJcbiAqIElmIHlvdSBnaXZlIGEgY3ViaWMgYmV6aWVyIGN1cnZlIHRoYXQgbmV2ZXIgcmVhY2hlcyB0aGVcclxuICogcHJvdmlkZWQgcHJvZ3Jlc3Npb24sIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gTmFOLlxyXG4gKi9cclxuY29uc3QgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gPSAocDAsIHAxLCBwMiwgcDMsIHByb2dyZXNzaW9uKSA9PiB7XHJcbiAgICBjb25zdCB0VmFsdWVzID0gc29sdmVDdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCBwMy55LCBwcm9ncmVzc2lvbik7XHJcbiAgICByZXR1cm4gc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbihwMC54LCBwMS54LCBwMi54LCBwMy54LCB0VmFsdWVzWzBdKTsgLy8gVE9ETzogQWRkIGJldHRlciBzdHJhdGVneSBmb3IgZGVhbGluZyB3aXRoIG11bHRpcGxlIHNvbHV0aW9uc1xyXG59O1xyXG4vKipcclxuICogU29sdmUgYSBjdWJpYyBlcXVhdGlvbiBpbiBvbmUgZGltZW5zaW9uICh0aW1lKVxyXG4gKi9cclxuY29uc3Qgc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbiA9IChwMCwgcDEsIHAyLCBwMywgdCkgPT4ge1xyXG4gICAgY29uc3QgcGFydEEgPSAoMyAqIHAxKSAqIE1hdGgucG93KHQgLSAxLCAyKTtcclxuICAgIGNvbnN0IHBhcnRCID0gKC0zICogcDIgKiB0KSArICgzICogcDIpICsgKHAzICogdCk7XHJcbiAgICBjb25zdCBwYXJ0QyA9IHAwICogTWF0aC5wb3codCAtIDEsIDMpO1xyXG4gICAgcmV0dXJuIHQgKiAocGFydEEgKyAodCAqIHBhcnRCKSkgLSBwYXJ0QztcclxufTtcclxuLyoqXHJcbiAqIEZpbmQgdGhlIGB0YCB2YWx1ZSBmb3IgYSBjdWJpYyBiZXppZXIgdXNpbmcgQ2FyZGFubydzIGZvcm11bGFcclxuICovXHJcbmNvbnN0IHNvbHZlQ3ViaWNCZXppZXIgPSAocDAsIHAxLCBwMiwgcDMsIHJlZlBvaW50KSA9PiB7XHJcbiAgICBwMCAtPSByZWZQb2ludDtcclxuICAgIHAxIC09IHJlZlBvaW50O1xyXG4gICAgcDIgLT0gcmVmUG9pbnQ7XHJcbiAgICBwMyAtPSByZWZQb2ludDtcclxuICAgIGNvbnN0IHJvb3RzID0gc29sdmVDdWJpY0VxdWF0aW9uKHAzIC0gMyAqIHAyICsgMyAqIHAxIC0gcDAsIDMgKiBwMiAtIDYgKiBwMSArIDMgKiBwMCwgMyAqIHAxIC0gMyAqIHAwLCBwMCk7XHJcbiAgICByZXR1cm4gcm9vdHMuZmlsdGVyKHJvb3QgPT4gcm9vdCA+PSAwICYmIHJvb3QgPD0gMSk7XHJcbn07XHJcbmNvbnN0IHNvbHZlUXVhZHJhdGljRXF1YXRpb24gPSAoYSwgYiwgYykgPT4ge1xyXG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0ICogYSAqIGM7XHJcbiAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICgtYiArIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSksXHJcbiAgICAgICAgICAgICgtYiAtIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzb2x2ZUN1YmljRXF1YXRpb24gPSAoYSwgYiwgYywgZCkgPT4ge1xyXG4gICAgaWYgKGEgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gc29sdmVRdWFkcmF0aWNFcXVhdGlvbihiLCBjLCBkKTtcclxuICAgIH1cclxuICAgIGIgLz0gYTtcclxuICAgIGMgLz0gYTtcclxuICAgIGQgLz0gYTtcclxuICAgIGNvbnN0IHAgPSAoMyAqIGMgLSBiICogYikgLyAzO1xyXG4gICAgY29uc3QgcSA9ICgyICogYiAqIGIgKiBiIC0gOSAqIGIgKiBjICsgMjcgKiBkKSAvIDI3O1xyXG4gICAgaWYgKHAgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucG93KC1xLCAxIC8gMyldO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5zcXJ0KC1wKSwgLU1hdGguc3FydCgtcCldO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gTWF0aC5wb3cocSAvIDIsIDIpICsgTWF0aC5wb3cocCAvIDMsIDMpO1xyXG4gICAgaWYgKGRpc2NyaW1pbmFudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5wb3cocSAvIDIsIDEgLyAyKSAtIGIgLyAzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRpc2NyaW1pbmFudCA+IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucG93KC0ocSAvIDIpICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCksIDEgLyAzKSAtIE1hdGgucG93KChxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gYiAvIDNdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgciA9IE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpO1xyXG4gICAgY29uc3QgcGhpID0gTWF0aC5hY29zKC0ocSAvICgyICogTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSkpKSk7XHJcbiAgICBjb25zdCBzID0gMiAqIE1hdGgucG93KHIsIDEgLyAzKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgcyAqIE1hdGguY29zKHBoaSAvIDMpIC0gYiAvIDMsXHJcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyAyICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzLFxyXG4gICAgICAgIHMgKiBNYXRoLmNvcygocGhpICsgNCAqIE1hdGguUEkpIC8gMykgLSBiIC8gM1xyXG4gICAgXTtcclxufTtcblxuZXhwb3J0IHsgUG9pbnQgYXMgUCwgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gYXMgZyB9O1xuIiwiY29uc3QgYXR0YWNoQ29tcG9uZW50ID0gYXN5bmMgKGRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgY3NzQ2xhc3NlcywgY29tcG9uZW50UHJvcHMpID0+IHtcclxuICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBjc3NDbGFzc2VzKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJyAmJiAhKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgID8gY29udGFpbmVyLm93bmVyRG9jdW1lbnQgJiYgY29udGFpbmVyLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wb25lbnQpXHJcbiAgICAgICAgOiBjb21wb25lbnQ7XHJcbiAgICBpZiAoY3NzQ2xhc3Nlcykge1xyXG4gICAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudFByb3BzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbCwgY29tcG9uZW50UHJvcHMpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGlmIChlbC5jb21wb25lbnRPblJlYWR5KSB7XHJcbiAgICAgICAgYXdhaXQgZWwuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG5jb25zdCBkZXRhY2hDb21wb25lbnQgPSAoZGVsZWdhdGUsIGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGNvbnRhaW5lciwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn07XG5cbmV4cG9ydCB7IGF0dGFjaENvbXBvbmVudCBhcyBhLCBkZXRhY2hDb21wb25lbnQgYXMgZCB9O1xuIiwiaW1wb3J0IHsgdyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBMSUZFQ1lDTEVfV0lMTF9MRUFWRSwgTCBhcyBMSUZFQ1lDTEVfV0lMTF9FTlRFUiwgYSBhcyBMSUZFQ1lDTEVfRElEX0VOVEVSLCBjIGFzIExJRkVDWUNMRV9ESURfTEVBVkUgfSBmcm9tICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5cbmNvbnN0IGlvc1RyYW5zaXRpb25BbmltYXRpb24gPSAoKSA9PiBpbXBvcnQoJy4vaW9zLnRyYW5zaXRpb24tMDcxYmQ0MjEuanMnKTtcclxuY29uc3QgbWRUcmFuc2l0aW9uQW5pbWF0aW9uID0gKCkgPT4gaW1wb3J0KCcuL21kLnRyYW5zaXRpb24tMTVhODFiMDguanMnKTtcclxuY29uc3QgdHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRyYW5zaXRpb24ob3B0cyk7XHJcbiAgICAgICAgICAgIHJ1blRyYW5zaXRpb24ob3B0cykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgYmVmb3JlVHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBzZXRaSW5kZXgoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzLmRpcmVjdGlvbik7XHJcbiAgICBpZiAob3B0cy5zaG93R29CYWNrKSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QuYWRkKCdjYW4tZ28tYmFjaycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZ28tYmFjaycpO1xyXG4gICAgfVxyXG4gICAgc2V0UGFnZUhpZGRlbihlbnRlcmluZ0VsLCBmYWxzZSk7XHJcbiAgICBpZiAobGVhdmluZ0VsKSB7XHJcbiAgICAgICAgc2V0UGFnZUhpZGRlbihsZWF2aW5nRWwsIGZhbHNlKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgcnVuVHJhbnNpdGlvbiA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gYXdhaXQgZ2V0QW5pbWF0aW9uQnVpbGRlcihvcHRzKTtcclxuICAgIGNvbnN0IGFuaSA9IChhbmltYXRpb25CdWlsZGVyKVxyXG4gICAgICAgID8gYW5pbWF0aW9uKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpXHJcbiAgICAgICAgOiBub0FuaW1hdGlvbihvcHRzKTsgLy8gZmFzdCBwYXRoIGZvciBubyBhbmltYXRpb25cclxuICAgIHJldHVybiBhbmk7XHJcbn07XHJcbmNvbnN0IGFmdGVyVHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xyXG4gICAgaWYgKGxlYXZpbmdFbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGVhdmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXRBbmltYXRpb25CdWlsZGVyID0gYXN5bmMgKG9wdHMpID0+IHtcclxuICAgIGlmICghb3B0cy5sZWF2aW5nRWwgfHwgIW9wdHMuYW5pbWF0ZWQgfHwgb3B0cy5kdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0cy5hbmltYXRpb25CdWlsZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdHMuYW5pbWF0aW9uQnVpbGRlcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldEFuaW1hdGlvbiA9IChvcHRzLm1vZGUgPT09ICdpb3MnKVxyXG4gICAgICAgID8gKGF3YWl0IGlvc1RyYW5zaXRpb25BbmltYXRpb24oKSkuaW9zVHJhbnNpdGlvbkFuaW1hdGlvblxyXG4gICAgICAgIDogKGF3YWl0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5tZFRyYW5zaXRpb25BbmltYXRpb247XHJcbiAgICByZXR1cm4gZ2V0QW5pbWF0aW9uO1xyXG59O1xyXG5jb25zdCBhbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uQnVpbGRlciwgb3B0cykgPT4ge1xyXG4gICAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIHRydWUpO1xyXG4gICAgbGV0IHRyYW5zO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtb2QgPSBhd2FpdCBpbXBvcnQoJy4vaW5kZXgtNjljMzc4ODUuanMnKTtcclxuICAgICAgICB0cmFucyA9IGF3YWl0IG1vZC5jcmVhdGUoYW5pbWF0aW9uQnVpbGRlciwgb3B0cy5iYXNlRWwsIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRyYW5zID0gYW5pbWF0aW9uQnVpbGRlcihvcHRzLmJhc2VFbCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICBmaXJlV2lsbEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcclxuICAgIGNvbnN0IGRpZENvbXBsZXRlID0gYXdhaXQgcGxheVRyYW5zaXRpb24odHJhbnMsIG9wdHMpO1xyXG4gICAgaWYgKG9wdHMucHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIG9wdHMucHJvZ3Jlc3NDYWxsYmFjayh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpZENvbXBsZXRlKSB7XHJcbiAgICAgICAgZmlyZURpZEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFzQ29tcGxldGVkOiBkaWRDb21wbGV0ZSxcclxuICAgICAgICBhbmltYXRpb246IHRyYW5zXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCBub0FuaW1hdGlvbiA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBhd2FpdCB3YWl0Rm9yUmVhZHkob3B0cywgZmFsc2UpO1xyXG4gICAgZmlyZVdpbGxFdmVudHMoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKTtcclxuICAgIGZpcmVEaWRFdmVudHMoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFzQ29tcGxldGVkOiB0cnVlXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCB3YWl0Rm9yUmVhZHkgPSBhc3luYyAob3B0cywgZGVmYXVsdERlZXApID0+IHtcclxuICAgIGNvbnN0IGRlZXAgPSBvcHRzLmRlZXBXYWl0ICE9PSB1bmRlZmluZWQgPyBvcHRzLmRlZXBXYWl0IDogZGVmYXVsdERlZXA7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IGRlZXAgPyBbXHJcbiAgICAgICAgZGVlcFJlYWR5KG9wdHMuZW50ZXJpbmdFbCksXHJcbiAgICAgICAgZGVlcFJlYWR5KG9wdHMubGVhdmluZ0VsKSxcclxuICAgIF0gOiBbXHJcbiAgICAgICAgc2hhbGxvd1JlYWR5KG9wdHMuZW50ZXJpbmdFbCksXHJcbiAgICAgICAgc2hhbGxvd1JlYWR5KG9wdHMubGVhdmluZ0VsKSxcclxuICAgIF07XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICBhd2FpdCBub3RpZnlWaWV3UmVhZHkob3B0cy52aWV3SXNSZWFkeSwgb3B0cy5lbnRlcmluZ0VsKTtcclxufTtcclxuY29uc3Qgbm90aWZ5Vmlld1JlYWR5ID0gYXN5bmMgKHZpZXdJc1JlYWR5LCBlbnRlcmluZ0VsKSA9PiB7XHJcbiAgICBpZiAodmlld0lzUmVhZHkpIHtcclxuICAgICAgICBhd2FpdCB2aWV3SXNSZWFkeShlbnRlcmluZ0VsKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgcGxheVRyYW5zaXRpb24gPSAodHJhbnMsIG9wdHMpID0+IHtcclxuICAgIGNvbnN0IHByb2dyZXNzQ2FsbGJhY2sgPSBvcHRzLnByb2dyZXNzQ2FsbGJhY2s7XHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgQW5pbWF0aW9uQnVpbGRlclxyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHRyYW5zLm9uRmluaXNoKChjdXJyZW50U3RlcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50U3RlcCA9PT0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHJhbnMuaGFzQ29tcGxldGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJhbnMuaGFzQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb29sLCBsZXQncyBkbyB0aGlzLCBzdGFydCB0aGUgdHJhbnNpdGlvblxyXG4gICAgaWYgKHByb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAvLyB0aGlzIGlzIGEgc3dpcGUgdG8gZ28gYmFjaywganVzdCBnZXQgdGhlIHRyYW5zaXRpb24gcHJvZ3Jlc3MgcmVhZHlcclxuICAgICAgICAvLyBraWNrIG9mZiB0aGUgc3dpcGUgYW5pbWF0aW9uIHN0YXJ0XHJcbiAgICAgICAgdHJhbnMucHJvZ3Jlc3NTdGFydCh0cnVlKTtcclxuICAgICAgICBwcm9ncmVzc0NhbGxiYWNrKHRyYW5zKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG9ubHkgdGhlIHRvcCBsZXZlbCB0cmFuc2l0aW9uIHNob3VsZCBhY3R1YWxseSBzdGFydCBcInBsYXlcIlxyXG4gICAgICAgIC8vIGtpY2sgaXQgb2ZmIGFuZCBsZXQgaXQgcGxheSB0aHJvdWdoXHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICB0cmFucy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGRvbmVcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG59O1xyXG5jb25zdCBmaXJlV2lsbEV2ZW50cyA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwpID0+IHtcclxuICAgIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9XSUxMX0xFQVZFKTtcclxuICAgIGxpZmVjeWNsZShlbnRlcmluZ0VsLCBMSUZFQ1lDTEVfV0lMTF9FTlRFUik7XHJcbn07XHJcbmNvbnN0IGZpcmVEaWRFdmVudHMgPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XHJcbiAgICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX0RJRF9FTlRFUik7XHJcbiAgICBsaWZlY3ljbGUobGVhdmluZ0VsLCBMSUZFQ1lDTEVfRElEX0xFQVZFKTtcclxufTtcclxuY29uc3QgbGlmZWN5Y2xlID0gKGVsLCBldmVudE5hbWUpID0+IHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xyXG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldik7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNoYWxsb3dSZWFkeSA9IChlbCkgPT4ge1xyXG4gICAgaWYgKGVsICYmIGVsLmNvbXBvbmVudE9uUmVhZHkpIHtcclxuICAgICAgICByZXR1cm4gZWwuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59O1xyXG5jb25zdCBkZWVwUmVhZHkgPSBhc3luYyAoZWwpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY29tcG9uZW50T25SZWFkeSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZW5jaWxFbCA9IGF3YWl0IGVsZW1lbnQuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgICAgICAgICBpZiAoc3RlbmNpbEVsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLm1hcChkZWVwUmVhZHkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc2V0UGFnZUhpZGRlbiA9IChlbCwgaGlkZGVuKSA9PiB7XHJcbiAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaW9uLXBhZ2UtaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaGlkZGVuJyk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNldFpJbmRleCA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGVudGVyaW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVudGVyaW5nRWwuc3R5bGUuekluZGV4ID0gKGRpcmVjdGlvbiA9PT0gJ2JhY2snKVxyXG4gICAgICAgICAgICA/ICc5OSdcclxuICAgICAgICAgICAgOiAnMTAxJztcclxuICAgIH1cclxuICAgIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxlYXZpbmdFbC5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgIH1cclxufTtcclxuY29uc3QgZ2V0SW9uUGFnZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpb25QYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJyk7XHJcbiAgICBpZiAoaW9uUGFnZSkge1xyXG4gICAgICAgIHJldHVybiBpb25QYWdlO1xyXG4gICAgfVxyXG4gICAgLy8gaWRrLCByZXR1cm4gdGhlIG9yaWdpbmFsIGVsZW1lbnQgc28gYXQgbGVhc3Qgc29tZXRoaW5nIGFuaW1hdGVzIGFuZCB3ZSBkb24ndCBoYXZlIGEgbnVsbCBwb2ludGVyXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcblxuZXhwb3J0IHsgZGVlcFJlYWR5IGFzIGQsIGdldElvblBhZ2VFbGVtZW50IGFzIGcsIGxpZmVjeWNsZSBhcyBsLCBzZXRQYWdlSGlkZGVuIGFzIHMsIHRyYW5zaXRpb24gYXMgdCB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIGUgYXMgZ2V0RWxlbWVudCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCB7IGIgYXMgY29uZmlnIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYiBhcyBhc3NlcnQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgZCBhcyBMSUZFQ1lDTEVfV0lMTF9VTkxPQUQsIGIgYXMgTElGRUNZQ0xFX1dJTExfTEVBVkUsIGMgYXMgTElGRUNZQ0xFX0RJRF9MRUFWRSB9IGZyb20gJy4vY29uc3RhbnRzLTNjM2UxMDk5LmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtYzJlMmUxZjQuanMnO1xuaW1wb3J0IHsgbCBhcyBsaWZlY3ljbGUsIHQgYXMgdHJhbnNpdGlvbiwgcyBhcyBzZXRQYWdlSGlkZGVuIH0gZnJvbSAnLi9pbmRleC02ODI2ZjJmNi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uLCBQIGFzIFBvaW50IH0gZnJvbSAnLi9jdWJpYy1iZXppZXItMjgxMmZkYTMuanMnO1xuXG5jb25zdCBWSUVXX1NUQVRFX05FVyA9IDE7XHJcbmNvbnN0IFZJRVdfU1RBVEVfQVRUQUNIRUQgPSAyO1xyXG5jb25zdCBWSUVXX1NUQVRFX0RFU1RST1lFRCA9IDM7XHJcbmNsYXNzIFZpZXdDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgcGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZJRVdfU1RBVEVfTkVXO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgaW5pdChjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gVklFV19TVEFURV9BVFRBQ0hFRDtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gYXdhaXQgYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIGNvbnRhaW5lciwgY29tcG9uZW50LCBbJ2lvbi1wYWdlJywgJ2lvbi1wYWdlLWludmlzaWJsZSddLCB0aGlzLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqL1xyXG4gICAgX2Rlc3Ryb3koKSB7XHJcbiAgICAgICAgYXNzZXJ0KHRoaXMuc3RhdGUgIT09IFZJRVdfU1RBVEVfREVTVFJPWUVELCAndmlldyBzdGF0ZSBtdXN0IGJlIEFUVEFDSEVEJyk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5yZW1vdmVWaWV3RnJvbURvbShlbGVtZW50LnBhcmVudEVsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5hdiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gVklFV19TVEFURV9ERVNUUk9ZRUQ7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgbWF0Y2hlcyA9ICh2aWV3LCBpZCwgcGFyYW1zKSA9PiB7XHJcbiAgICBpZiAoIXZpZXcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmlldy5jb21wb25lbnQgIT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3VycmVudFBhcmFtcyA9IHZpZXcucGFyYW1zO1xyXG4gICAgaWYgKGN1cnJlbnRQYXJhbXMgPT09IHBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjdXJyZW50UGFyYW1zICYmICFwYXJhbXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghY3VycmVudFBhcmFtcyB8fCAhcGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhjdXJyZW50UGFyYW1zKTtcclxuICAgIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMocGFyYW1zKTtcclxuICAgIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzQSkge1xyXG4gICAgICAgIGlmIChjdXJyZW50UGFyYW1zW2tleV0gIT09IHBhcmFtc1trZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuY29uc3QgY29udmVydFRvVmlldyA9IChwYWdlLCBwYXJhbXMpID0+IHtcclxuICAgIGlmICghcGFnZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2UgaW5zdGFuY2VvZiBWaWV3Q29udHJvbGxlcikge1xyXG4gICAgICAgIHJldHVybiBwYWdlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBWaWV3Q29udHJvbGxlcihwYWdlLCBwYXJhbXMpO1xyXG59O1xyXG5jb25zdCBjb252ZXJ0VG9WaWV3cyA9IChwYWdlcykgPT4ge1xyXG4gICAgcmV0dXJuIHBhZ2VzLm1hcChwYWdlID0+IHtcclxuICAgICAgICBpZiAocGFnZSBpbnN0YW5jZW9mIFZpZXdDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJ3BhZ2UnIGluIHBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb1ZpZXcocGFnZS5wYWdlLCBwYWdlLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0VG9WaWV3KHBhZ2UsIHVuZGVmaW5lZCk7XHJcbiAgICB9KS5maWx0ZXIodiA9PiB2ICE9PSBudWxsKTtcclxufTtcblxuY29uc3QgTmF2ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy50cmFuc0luc3RyID0gW107XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlUm91dGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlld3MgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG5hdiBzaG91bGQgYW5pbWF0ZSB0aGUgdHJhbnNpdGlvbiBvZiBjb21wb25lbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uTmF2V2lsbExvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdldpbGxMb2FkXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdldpbGxDaGFuZ2VcIiwgMyk7XG4gICAgICAgIHRoaXMuaW9uTmF2RGlkQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZEaWRDaGFuZ2VcIiwgMyk7XG4gICAgfVxuICAgIHN3aXBlR2VzdHVyZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5zZXREaXNhYmxlZCh0aGlzLnN3aXBlR2VzdHVyZSAhPT0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcm9vdENoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVzZVJvdXRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9vdCh0aGlzLnJvb3QsIHRoaXMucm9vdFBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIHRoaXMudXNlUm91dGVyID1cbiAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuZWwuY2xvc2VzdCgnW25vLXJvdXRlcl0nKTtcbiAgICAgICAgaWYgKHRoaXMuc3dpcGVHZXN0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zd2lwZUdlc3R1cmUgPSBjb25maWcuZ2V0Qm9vbGVhbignc3dpcGVCYWNrRW5hYmxlZCcsIG1vZGUgPT09ICdpb3MnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkLmVtaXQoKTtcbiAgICB9XG4gICAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yb290Q2hhbmdlZCgpO1xuICAgICAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL3N3aXBlLWJhY2stMzVhZDhlMzcuanMnKSkuY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSh0aGlzLmVsLCB0aGlzLmNhblN0YXJ0LmJpbmQodGhpcyksIHRoaXMub25TdGFydC5iaW5kKHRoaXMpLCB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpLCB0aGlzLm9uRW5kLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnN3aXBlR2VzdHVyZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVW5sb2FkKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHZpZXcgb2YgdGhpcy52aWV3cykge1xuICAgICAgICAgICAgbGlmZWN5Y2xlKHZpZXcuZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfVU5MT0FEKTtcbiAgICAgICAgICAgIHZpZXcuX2Rlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbGVhc2Ugc3dpcGUgYmFjayBnZXN0dXJlIGFuZCB0cmFuc2l0aW9uXG4gICAgICAgIHRoaXMudHJhbnNJbnN0ci5sZW5ndGggPSB0aGlzLnZpZXdzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVzaCBhIG5ldyBjb21wb25lbnQgb250byB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHN0YWNrLiBQYXNzIGFueSBhZGRpdGlvbmFsXG4gICAgICogaW5mb3JtYXRpb24gYWxvbmcgYXMgYW4gb2JqZWN0LiBUaGlzIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gaXMgYWNjZXNzaWJsZVxuICAgICAqIHRocm91Z2ggTmF2UGFyYW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHB1c2ggb250byB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50UHJvcHMgQW55IHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1c2goY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgb3B0cywgZG9uZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZVRybnMoe1xuICAgICAgICAgICAgaW5zZXJ0U3RhcnQ6IC0xLFxuICAgICAgICAgICAgaW5zZXJ0Vmlld3M6IFt7IHBhZ2U6IGNvbXBvbmVudCwgcGFyYW1zOiBjb21wb25lbnRQcm9wcyB9XSxcbiAgICAgICAgICAgIG9wdHNcbiAgICAgICAgfSwgZG9uZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYSBjb21wb25lbnQgaW50byB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGFkZCBhIGNvbXBvbmVudCBhdCBhbnkgcG9pbnQgaW4gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5zZXJ0SW5kZXggVGhlIGluZGV4IHRvIGluc2VydCB0aGUgY29tcG9uZW50IGF0IGluIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gaW5zZXJ0IGludG8gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICogQHBhcmFtIGNvbXBvbmVudFByb3BzIEFueSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBpbnNlcnQoaW5zZXJ0SW5kZXgsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIG9wdHMsIGRvbmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHtcbiAgICAgICAgICAgIGluc2VydFN0YXJ0OiBpbnNlcnRJbmRleCxcbiAgICAgICAgICAgIGluc2VydFZpZXdzOiBbeyBwYWdlOiBjb21wb25lbnQsIHBhcmFtczogY29tcG9uZW50UHJvcHMgfV0sXG4gICAgICAgICAgICBvcHRzXG4gICAgICAgIH0sIGRvbmUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGFycmF5IG9mIGNvbXBvbmVudHMgaW50byB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqIFRoZSBsYXN0IGNvbXBvbmVudCBpbiB0aGUgYXJyYXkgd2lsbCBiZWNvbWUgaW5zdGFudGlhdGVkIGFzIGEgdmlldywgYW5kIGFuaW1hdGVcbiAgICAgKiBpbiB0byBiZWNvbWUgdGhlIGFjdGl2ZSB2aWV3LlxuICAgICAqXG4gICAgICogQHBhcmFtIGluc2VydEluZGV4IFRoZSBpbmRleCB0byBpbnNlcnQgdGhlIGNvbXBvbmVudHMgYXQgaW4gdGhlIHN0YWNrLlxuICAgICAqIEBwYXJhbSBpbnNlcnRDb21wb25lbnRzIFRoZSBjb21wb25lbnRzIHRvIGluc2VydCBpbnRvIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgaW5zZXJ0UGFnZXMoaW5zZXJ0SW5kZXgsIGluc2VydENvbXBvbmVudHMsIG9wdHMsIGRvbmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHtcbiAgICAgICAgICAgIGluc2VydFN0YXJ0OiBpbnNlcnRJbmRleCxcbiAgICAgICAgICAgIGluc2VydFZpZXdzOiBpbnNlcnRDb21wb25lbnRzLFxuICAgICAgICAgICAgb3B0c1xuICAgICAgICB9LCBkb25lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUG9wIGEgY29tcG9uZW50IG9mZiBvZiB0aGUgbmF2aWdhdGlvbiBzdGFjay4gTmF2aWdhdGVzIGJhY2sgZnJvbSB0aGUgY3VycmVudFxuICAgICAqIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcG9wKG9wdHMsIGRvbmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHtcbiAgICAgICAgICAgIHJlbW92ZVN0YXJ0OiAtMSxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50OiAxLFxuICAgICAgICAgICAgb3B0c1xuICAgICAgICB9LCBkb25lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUG9wIHRvIGEgc3BlY2lmaWMgaW5kZXggaW4gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXhPclZpZXdDdHJsIFRoZSBpbmRleCBvciB2aWV3IGNvbnRyb2xsZXIgdG8gcG9wIHRvLlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcG9wVG8oaW5kZXhPclZpZXdDdHJsLCBvcHRzLCBkb25lKSB7XG4gICAgICAgIGNvbnN0IHRpQ29uZmlnID0ge1xuICAgICAgICAgICAgcmVtb3ZlU3RhcnQ6IC0xLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnQ6IC0xLFxuICAgICAgICAgICAgb3B0c1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4T3JWaWV3Q3RybCA9PT0gJ29iamVjdCcgJiYgaW5kZXhPclZpZXdDdHJsLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGlDb25maWcucmVtb3ZlVmlldyA9IGluZGV4T3JWaWV3Q3RybDtcbiAgICAgICAgICAgIHRpQ29uZmlnLnJlbW92ZVN0YXJ0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5kZXhPclZpZXdDdHJsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGlDb25maWcucmVtb3ZlU3RhcnQgPSBpbmRleE9yVmlld0N0cmwgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh0aUNvbmZpZywgZG9uZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIGJhY2sgdG8gdGhlIHJvb3Qgb2YgdGhlIHN0YWNrLCBubyBtYXR0ZXIgaG93IGZhciBiYWNrIHRoYXQgaXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHBvcFRvUm9vdChvcHRzLCBkb25lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh7XG4gICAgICAgICAgICByZW1vdmVTdGFydDogMSxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50OiAtMSxcbiAgICAgICAgICAgIG9wdHNcbiAgICAgICAgfSwgZG9uZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb25lbnQgZnJvbSB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0SW5kZXggVGhlIG51bWJlciB0byBiZWdpbiByZW1vdmFsIGF0LlxuICAgICAqIEBwYXJhbSByZW1vdmVDb3VudCBUaGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVtb3ZlSW5kZXgoc3RhcnRJbmRleCwgcmVtb3ZlQ291bnQgPSAxLCBvcHRzLCBkb25lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh7XG4gICAgICAgICAgICByZW1vdmVTdGFydDogc3RhcnRJbmRleCxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50LFxuICAgICAgICAgICAgb3B0c1xuICAgICAgICB9LCBkb25lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByb290IGZvciB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHN0YWNrIHRvIGEgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHNldCBhcyB0aGUgcm9vdCBvZiB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50UHJvcHMgQW55IHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHNldFJvb3QoY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgb3B0cywgZG9uZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRQYWdlcyhbeyBwYWdlOiBjb21wb25lbnQsIHBhcmFtczogY29tcG9uZW50UHJvcHMgfV0sIG9wdHMsIGRvbmUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZpZXdzIG9mIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhY2sgYW5kIG5hdmlnYXRlIHRvIHRoZSBsYXN0IHZpZXcuXG4gICAgICogQnkgZGVmYXVsdCBhbmltYXRpb25zIGFyZSBkaXNhYmxlZCwgYnV0IHRoZXkgY2FuIGJlIGVuYWJsZWQgYnkgcGFzc2luZyBvcHRpb25zXG4gICAgICogdG8gdGhlIG5hdmlnYXRpb24gY29udHJvbGxlci4gTmF2aWdhdGlvbiBwYXJhbWV0ZXJzIGNhbiBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiBpbmRpdmlkdWFsIHBhZ2VzIGluIHRoZSBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2aWV3cyBUaGUgbGlzdCBvZiB2aWV3cyB0byBzZXQgYXMgdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBzZXRQYWdlcyh2aWV3cywgb3B0cywgZG9uZSkge1xuICAgICAgICBpZiAob3B0cyA9PSBudWxsKSB7XG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYW5pbWF0aW9uIHdhc24ndCBzZXQgdG8gdHJ1ZSB0aGVuIGRlZmF1bHQgaXQgdG8gTk9UIGFuaW1hdGVcbiAgICAgICAgaWYgKG9wdHMuYW5pbWF0ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIG9wdHMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZVRybnMoe1xuICAgICAgICAgICAgaW5zZXJ0U3RhcnQ6IDAsXG4gICAgICAgICAgICBpbnNlcnRWaWV3czogdmlld3MsXG4gICAgICAgICAgICByZW1vdmVTdGFydDogMCxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50OiAtMSxcbiAgICAgICAgICAgIG9wdHNcbiAgICAgICAgfSwgZG9uZSk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBzZXRSb3V0ZUlkKGlkLCBwYXJhbXMsIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZVN5bmMoKTtcbiAgICAgICAgaWYgKG1hdGNoZXMoYWN0aXZlLCBpZCwgcGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgY2hhbmdlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogYWN0aXZlLmVsZW1lbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHZlO1xuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UociA9PiAocmVzb2x2ZSA9IHIpKTtcbiAgICAgICAgbGV0IGZpbmlzaDtcbiAgICAgICAgY29uc3QgY29tbW9uT3B0cyA9IHtcbiAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXG4gICAgICAgICAgICB2aWV3SXNSZWFkeTogZW50ZXJpbmdFbCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1hcms7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKHIgPT4gKG1hcmsgPSByKSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVudGVyaW5nRWwsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtWaXNpYmxlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBmaW5pc2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgICAgICBmaW5pc2ggPSB0aGlzLnNldFJvb3QoaWQsIHBhcmFtcywgY29tbW9uT3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3Q29udHJvbGxlciA9IHRoaXMudmlld3MuZmluZCh2ID0+IG1hdGNoZXModiwgaWQsIHBhcmFtcykpO1xuICAgICAgICAgICAgaWYgKHZpZXdDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoID0gdGhpcy5wb3BUbyh2aWV3Q29udHJvbGxlciwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25PcHRzKSwgeyBkaXJlY3Rpb246ICdiYWNrJyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdmb3J3YXJkJykge1xuICAgICAgICAgICAgICAgIGZpbmlzaCA9IHRoaXMucHVzaChpZCwgcGFyYW1zLCBjb21tb25PcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoID0gdGhpcy5zZXRSb290KGlkLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uT3B0cyksIHsgZGlyZWN0aW9uOiAnYmFjaycsIGFuaW1hdGVkOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIGdldFJvdXRlSWQoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICAgICAgICByZXR1cm4gYWN0aXZlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBpZDogYWN0aXZlLmVsZW1lbnQudGFnTmFtZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFjdGl2ZS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogYWN0aXZlLmVsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFjdGl2ZSB2aWV3LlxuICAgICAqL1xuICAgIGdldEFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldEFjdGl2ZVN5bmMoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmlldyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdmlldy5cbiAgICAgKi9cbiAgICBnZXRCeUluZGV4KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy52aWV3c1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY3VycmVudCB2aWV3IGNhbiBnbyBiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZpZXcgVGhlIHZpZXcgdG8gY2hlY2suXG4gICAgICovXG4gICAgY2FuR29CYWNrKHZpZXcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhbkdvQmFja1N5bmModmlldykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHByZXZpb3VzIHZpZXcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmlldyBUaGUgdmlldyB0byBnZXQuXG4gICAgICovXG4gICAgZ2V0UHJldmlvdXModmlldykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0UHJldmlvdXNTeW5jKHZpZXcpKTtcbiAgICB9XG4gICAgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3cy5sZW5ndGg7XG4gICAgfVxuICAgIGdldEFjdGl2ZVN5bmMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdzW3RoaXMudmlld3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIGNhbkdvQmFja1N5bmModmlldyA9IHRoaXMuZ2V0QWN0aXZlU3luYygpKSB7XG4gICAgICAgIHJldHVybiAhISh2aWV3ICYmIHRoaXMuZ2V0UHJldmlvdXNTeW5jKHZpZXcpKTtcbiAgICB9XG4gICAgZ2V0UHJldmlvdXNTeW5jKHZpZXcgPSB0aGlzLmdldEFjdGl2ZVN5bmMoKSkge1xuICAgICAgICBpZiAoIXZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgICBjb25zdCBpbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICAgIHJldHVybiBpbmRleCA+IDAgPyB2aWV3c1tpbmRleCAtIDFdIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBfcXVldWVUcm5zKCkgYWRkcyBhIG5hdmlnYXRpb24gc3RhY2sgY2hhbmdlIHRvIHRoZSBxdWV1ZSBhbmQgc2NoZWR1bGVzIGl0IHRvIHJ1bjpcbiAgICAvLyAxLiBfbmV4dFRybnMoKTogY29uc3VtZXMgdGhlIG5leHQgdHJhbnNpdGlvbiBpbiB0aGUgcXVldWVcbiAgICAvLyAyLiBfdmlld0luaXQoKTogaW5pdGlhbGl6ZXMgZW50ZXJpbmdWaWV3IGlmIHJlcXVpcmVkXG4gICAgLy8gMy4gX3ZpZXdUZXN0KCk6IGVuc3VyZXMgY2FuTGVhdmUvY2FuRW50ZXIgUmV0dXJucyBgdHJ1ZWAsIHNvIHRoZSBvcGVyYXRpb24gY2FuIGNvbnRpbnVlXG4gICAgLy8gNC4gX3Bvc3RWaWV3SW5pdCgpOiBhZGQvcmVtb3ZlIHRoZSB2aWV3cyBmcm9tIHRoZSBuYXZpZ2F0aW9uIHN0YWNrXG4gICAgLy8gNS4gX3RyYW5zaXRpb25Jbml0KCk6IGluaXRpYWxpemVzIHRoZSB2aXN1YWwgdHJhbnNpdGlvbiBpZiByZXF1aXJlZCBhbmQgc2NoZWR1bGVzIGl0IHRvIHJ1blxuICAgIC8vIDYuIF92aWV3QXR0YWNoVG9ET00oKTogYXR0YWNoZXMgdGhlIGVudGVyaW5nVmlldyB0byB0aGUgRE9NXG4gICAgLy8gNy4gX3RyYW5zaXRpb25TdGFydCgpOiBjYWxsZWQgb25jZSB0aGUgdHJhbnNpdGlvbiBhY3R1YWxseSBzdGFydHMsIGl0IGluaXRpYWxpemVzIHRoZSBBbmltYXRpb24gdW5kZXJuZWF0aC5cbiAgICAvLyA4LiBfdHJhbnNpdGlvbkZpbmlzaCgpOiBjYWxsZWQgb25jZSB0aGUgdHJhbnNpdGlvbiBmaW5pc2hlc1xuICAgIC8vIDkuIF9jbGVhbnVwKCk6IHN5bmNzIHRoZSBuYXZpZ2F0aW9uIGludGVybmFsIHN0YXRlIHdpdGggdGhlIERPTS4gRm9yIGV4YW1wbGUgaXQgcmVtb3ZlcyB0aGUgcGFnZXMgZnJvbSB0aGUgRE9NIG9yIGhpZGVzL3Nob3cgdGhlbS5cbiAgICBxdWV1ZVRybnModGksIGRvbmUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFuc2l0aW9uaW5nICYmIHRpLm9wdHMgIT0gbnVsbCAmJiB0aS5vcHRzLnNraXBJZkJ1c3kpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRpLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpLmRvbmUgPSBkb25lO1xuICAgICAgICAvLyBOb3JtYWxpemUgZW1wdHlcbiAgICAgICAgaWYgKHRpLmluc2VydFZpZXdzICYmIHRpLmluc2VydFZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGkuaW5zZXJ0Vmlld3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5xdWV1ZSB0cmFuc2l0aW9uIGluc3RydWN0aW9uXG4gICAgICAgIHRoaXMudHJhbnNJbnN0ci5wdXNoKHRpKTtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXNuJ3QgYSB0cmFuc2l0aW9uIGFscmVhZHkgaGFwcGVuaW5nXG4gICAgICAgIC8vIHRoZW4gdGhpcyB3aWxsIGtpY2sgb2ZmIHRoaXMgdHJhbnNpdGlvblxuICAgICAgICB0aGlzLm5leHRUcm5zKCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBzdWNjZXNzKHJlc3VsdCwgdGkpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVFcnJvcignbmF2IGNvbnRyb2xsZXIgd2FzIGRlc3Ryb3llZCcsIHRpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGkuZG9uZSkge1xuICAgICAgICAgICAgdGkuZG9uZShyZXN1bHQuaGFzQ29tcGxldGVkLCByZXN1bHQucmVxdWlyZXNUcmFuc2l0aW9uLCByZXN1bHQuZW50ZXJpbmdWaWV3LCByZXN1bHQubGVhdmluZ1ZpZXcsIHJlc3VsdC5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRpLnJlc29sdmUocmVzdWx0Lmhhc0NvbXBsZXRlZCk7XG4gICAgICAgIGlmICh0aS5vcHRzLnVwZGF0ZVVSTCAhPT0gZmFsc2UgJiYgdGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSByZXN1bHQuZGlyZWN0aW9uID09PSAnYmFjaycgPyAnYmFjaycgOiAnZm9yd2FyZCc7XG4gICAgICAgICAgICAgICAgcm91dGVyLm5hdkNoYW5nZWQoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmYWlsZWQocmVqZWN0UmVhc29uLCB0aSkge1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUVycm9yKCduYXYgY29udHJvbGxlciB3YXMgZGVzdHJveWVkJywgdGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNJbnN0ci5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmZpcmVFcnJvcihyZWplY3RSZWFzb24sIHRpKTtcbiAgICB9XG4gICAgZmlyZUVycm9yKHJlamVjdFJlYXNvbiwgdGkpIHtcbiAgICAgICAgaWYgKHRpLmRvbmUpIHtcbiAgICAgICAgICAgIHRpLmRvbmUoZmFsc2UsIGZhbHNlLCByZWplY3RSZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aS5yZWplY3QgJiYgIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aS5yZWplY3QocmVqZWN0UmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRpLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5leHRUcm5zKCkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSBmcmFtZXdvcmsncyBicmVhZCAnbiBidXR0YSBmdW5jdGlvblxuICAgICAgICAvLyBvbmx5IG9uZSB0cmFuc2l0aW9uIGlzIGFsbG93ZWQgYXQgYW55IGdpdmVuIHRpbWVcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gdHJhbnNpdGlvbiBoYXBwZW5pbmcgcmlnaHQgbm93XG4gICAgICAgIC8vIGdldCB0aGUgbmV4dCBpbnN0cnVjdGlvblxuICAgICAgICBjb25zdCB0aSA9IHRoaXMudHJhbnNJbnN0ci5zaGlmdCgpO1xuICAgICAgICBpZiAoIXRpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW5UcmFuc2l0aW9uKHRpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFzeW5jIHJ1blRyYW5zaXRpb24odGkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHNldCB0aGF0IHRoaXMgbmF2IGlzIGFjdGl2ZWx5IHRyYW5zaXRpb25pbmdcbiAgICAgICAgICAgIHRoaXMuaW9uTmF2V2lsbENoYW5nZS5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVUSSh0aSk7XG4gICAgICAgICAgICBjb25zdCBsZWF2aW5nVmlldyA9IHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICAgICAgICAgICAgY29uc3QgZW50ZXJpbmdWaWV3ID0gdGhpcy5nZXRFbnRlcmluZ1ZpZXcodGksIGxlYXZpbmdWaWV3KTtcbiAgICAgICAgICAgIGlmICghbGVhdmluZ1ZpZXcgJiYgIWVudGVyaW5nVmlldykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdmlld3MgaW4gdGhlIHN0YWNrIHRvIGJlIHJlbW92ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRlcmluZ1ZpZXcgJiYgZW50ZXJpbmdWaWV3LnN0YXRlID09PSBWSUVXX1NUQVRFX05FVykge1xuICAgICAgICAgICAgICAgIGF3YWl0IGVudGVyaW5nVmlldy5pbml0KHRoaXMuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3N0Vmlld0luaXQoZW50ZXJpbmdWaWV3LCBsZWF2aW5nVmlldywgdGkpO1xuICAgICAgICAgICAgLy8gTmVlZHMgdHJhbnNpdGlvbj9cbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVzVHJhbnNpdGlvbiA9ICh0aS5lbnRlcmluZ1JlcXVpcmVzVHJhbnNpdGlvbiB8fCB0aS5sZWF2aW5nUmVxdWlyZXNUcmFuc2l0aW9uKSAmJlxuICAgICAgICAgICAgICAgIGVudGVyaW5nVmlldyAhPT0gbGVhdmluZ1ZpZXc7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXF1aXJlc1RyYW5zaXRpb25cbiAgICAgICAgICAgICAgICA/IGF3YWl0IHRoaXMudHJhbnNpdGlvbihlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCB0aSlcbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbiBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGFyZSBhbHJlYWR5IGRvbmUhXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXkncmUgaW5zZXJ0aW5nL3JlbW92aW5nIHRoZSB2aWV3cyBzb21ld2hlcmUgaW4gdGhlIG1pZGRsZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBiZWdpbm5pbmcsIHNvIHZpc3VhbGx5IG5vdGhpbmcgbmVlZHMgdG8gYW5pbWF0ZS90cmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUgaW1tZWRpYXRlbHkgYmVjYXVzZSB0aGVyZSdzIG5vIGFuaW1hdGlvbiB0aGF0J3MgaGFwcGVuaW5nXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZXNUcmFuc2l0aW9uOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MocmVzdWx0LCB0aSk7XG4gICAgICAgICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHJlamVjdFJlYXNvbikge1xuICAgICAgICAgICAgdGhpcy5mYWlsZWQocmVqZWN0UmVhc29uLCB0aSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZXh0VHJucygpO1xuICAgIH1cbiAgICBwcmVwYXJlVEkodGkpIHtcbiAgICAgICAgY29uc3Qgdmlld3NMZW5ndGggPSB0aGlzLnZpZXdzLmxlbmd0aDtcbiAgICAgICAgdGkub3B0cyA9IHRpLm9wdHMgfHwge307XG4gICAgICAgIGlmICh0aS5vcHRzLmRlbGVnYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRpLm9wdHMuZGVsZWdhdGUgPSB0aGlzLmRlbGVnYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aS5yZW1vdmVWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFzc2VydCh0aS5yZW1vdmVTdGFydCAhPT0gdW5kZWZpbmVkLCAncmVtb3ZlVmlldyBuZWVkcyByZW1vdmVTdGFydCcpO1xuICAgICAgICAgICAgYXNzZXJ0KHRpLnJlbW92ZUNvdW50ICE9PSB1bmRlZmluZWQsICdyZW1vdmVWaWV3IG5lZWRzIHJlbW92ZUNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudmlld3MuaW5kZXhPZih0aS5yZW1vdmVWaWV3KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZVZpZXcgd2FzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGkucmVtb3ZlU3RhcnQgKz0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpLnJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aS5yZW1vdmVTdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aS5yZW1vdmVTdGFydCA9IHZpZXdzTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aS5yZW1vdmVDb3VudCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aS5yZW1vdmVDb3VudCA9IHZpZXdzTGVuZ3RoIC0gdGkucmVtb3ZlU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aS5sZWF2aW5nUmVxdWlyZXNUcmFuc2l0aW9uID1cbiAgICAgICAgICAgICAgICB0aS5yZW1vdmVDb3VudCA+IDAgJiYgdGkucmVtb3ZlU3RhcnQgKyB0aS5yZW1vdmVDb3VudCA9PT0gdmlld3NMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpLmluc2VydFZpZXdzKSB7XG4gICAgICAgICAgICAvLyBhbGxvdyAtMSB0byBiZSBwYXNzZWQgaW4gdG8gYXV0byBwdXNoIGl0IG9uIHRoZSBlbmRcbiAgICAgICAgICAgIC8vIGFuZCBjbGVhbiB1cCB0aGUgaW5kZXggaWYgaXQncyBsYXJnZXIgdGhlbiB0aGUgc2l6ZSBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGlmICh0aS5pbnNlcnRTdGFydCA8IDAgfHwgdGkuaW5zZXJ0U3RhcnQgPiB2aWV3c0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRpLmluc2VydFN0YXJ0ID0gdmlld3NMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aS5lbnRlcmluZ1JlcXVpcmVzVHJhbnNpdGlvbiA9IHRpLmluc2VydFN0YXJ0ID09PSB2aWV3c0xlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnNlcnRWaWV3cyA9IHRpLmluc2VydFZpZXdzO1xuICAgICAgICBpZiAoIWluc2VydFZpZXdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXJ0KGluc2VydFZpZXdzLmxlbmd0aCA+IDAsICdsZW5ndGggY2FuIG5vdCBiZSB6ZXJvJyk7XG4gICAgICAgIGNvbnN0IHZpZXdDb250cm9sbGVycyA9IGNvbnZlcnRUb1ZpZXdzKGluc2VydFZpZXdzKTtcbiAgICAgICAgaWYgKHZpZXdDb250cm9sbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB2aWV3cyB0byBpbnNlcnQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBhbGwgdGhlIGluc2VydGVkIHZpZXcgYXJlIGNvcnJlY3RcbiAgICAgICAgZm9yIChjb25zdCB2aWV3IG9mIHZpZXdDb250cm9sbGVycykge1xuICAgICAgICAgICAgdmlldy5kZWxlZ2F0ZSA9IHRpLm9wdHMuZGVsZWdhdGU7XG4gICAgICAgICAgICBjb25zdCBuYXYgPSB2aWV3Lm5hdjtcbiAgICAgICAgICAgIGlmIChuYXYgJiYgbmF2ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNlcnRlZCB2aWV3IHdhcyBhbHJlYWR5IGluc2VydGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlldy5zdGF0ZSA9PT0gVklFV19TVEFURV9ERVNUUk9ZRUQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc2VydGVkIHZpZXcgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGkuaW5zZXJ0Vmlld3MgPSB2aWV3Q29udHJvbGxlcnM7XG4gICAgfVxuICAgIGdldEVudGVyaW5nVmlldyh0aSwgbGVhdmluZ1ZpZXcpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0Vmlld3MgPSB0aS5pbnNlcnRWaWV3cztcbiAgICAgICAgaWYgKGluc2VydFZpZXdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHZlcnkgbGFzdCB2aWV3IG9mIHRoZSB2aWV3cyB0byBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gYW5kIGluaXRpYWxpemUgaXQgYXMgdGhlIG5ldyBlbnRlcmluZyB2aWV3XG4gICAgICAgICAgICByZXR1cm4gaW5zZXJ0Vmlld3NbaW5zZXJ0Vmlld3MubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlU3RhcnQgPSB0aS5yZW1vdmVTdGFydDtcbiAgICAgICAgaWYgKHJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUVuZCA9IHJlbW92ZVN0YXJ0ICsgdGkucmVtb3ZlQ291bnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdmlld3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gdmlld3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKChpIDwgcmVtb3ZlU3RhcnQgfHwgaSA+PSByZW1vdmVFbmQpICYmIHZpZXcgIT09IGxlYXZpbmdWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBwb3N0Vmlld0luaXQoZW50ZXJpbmdWaWV3LCBsZWF2aW5nVmlldywgdGkpIHtcbiAgICAgICAgYXNzZXJ0KGxlYXZpbmdWaWV3IHx8IGVudGVyaW5nVmlldywgJ0JvdGggbGVhdmluZ1ZpZXcgYW5kIGVudGVyaW5nVmlldyBhcmUgbnVsbCcpO1xuICAgICAgICBhc3NlcnQodGkucmVzb2x2ZSwgJ3Jlc29sdmUgbXVzdCBiZSB2YWxpZCcpO1xuICAgICAgICBhc3NlcnQodGkucmVqZWN0LCAncmVqZWN0IG11c3QgYmUgdmFsaWQnKTtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRpLm9wdHM7XG4gICAgICAgIGNvbnN0IGluc2VydFZpZXdzID0gdGkuaW5zZXJ0Vmlld3M7XG4gICAgICAgIGNvbnN0IHJlbW92ZVN0YXJ0ID0gdGkucmVtb3ZlU3RhcnQ7XG4gICAgICAgIGNvbnN0IHJlbW92ZUNvdW50ID0gdGkucmVtb3ZlQ291bnQ7XG4gICAgICAgIGxldCBkZXN0cm95UXVldWU7XG4gICAgICAgIC8vIHRoZXJlIGFyZSB2aWV3cyB0byByZW1vdmVcbiAgICAgICAgaWYgKHJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQgJiYgcmVtb3ZlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXNzZXJ0KHJlbW92ZVN0YXJ0ID49IDAsICdyZW1vdmVTdGFydCBjYW4gbm90IGJlIG5lZ2F0aXZlJyk7XG4gICAgICAgICAgICBhc3NlcnQocmVtb3ZlQ291bnQgPj0gMCwgJ3JlbW92ZUNvdW50IGNhbiBub3QgYmUgbmVnYXRpdmUnKTtcbiAgICAgICAgICAgIGRlc3Ryb3lRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudmlld3NbaSArIHJlbW92ZVN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAodmlldyAmJiB2aWV3ICE9PSBlbnRlcmluZ1ZpZXcgJiYgdmlldyAhPT0gbGVhdmluZ1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveVF1ZXVlLnB1c2godmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVmYXVsdCB0aGUgZGlyZWN0aW9uIHRvIFwiYmFja1wiXG4gICAgICAgICAgICBvcHRzLmRpcmVjdGlvbiA9IG9wdHMuZGlyZWN0aW9uIHx8ICdiYWNrJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbEJhbGFuY2UgPSB0aGlzLnZpZXdzLmxlbmd0aCArXG4gICAgICAgICAgICAoaW5zZXJ0Vmlld3MgIT09IHVuZGVmaW5lZCA/IGluc2VydFZpZXdzLmxlbmd0aCA6IDApIC1cbiAgICAgICAgICAgIChyZW1vdmVDb3VudCAhPT0gdW5kZWZpbmVkID8gcmVtb3ZlQ291bnQgOiAwKTtcbiAgICAgICAgYXNzZXJ0KGZpbmFsQmFsYW5jZSA+PSAwLCAnZmluYWwgYmFsYW5jZSBjYW4gbm90IGJlIG5lZ2F0aXZlJyk7XG4gICAgICAgIGlmIChmaW5hbEJhbGFuY2UgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgWW91IGNhbid0IHJlbW92ZSBhbGwgdGhlIHBhZ2VzIGluIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLiBuYXYucG9wKCkgaXMgcHJvYmFibHkgY2FsbGVkIHRvbyBtYW55IHRpbWVzLmAsIHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0aW9uIHN0YWNrIG5lZWRzIGF0IGxlYXN0IG9uZSByb290IHBhZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdCB0aGlzIHBvaW50IHRoZSB0cmFuc2l0aW9uIGNhbiBub3QgYmUgcmVqZWN0ZWQsIGFueSB0aHJvdyBzaG91bGQgYmUgYW4gZXJyb3JcbiAgICAgICAgLy8gdGhlcmUgYXJlIHZpZXdzIHRvIGluc2VydFxuICAgICAgICBpZiAoaW5zZXJ0Vmlld3MpIHtcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgdmlld3MgdG8gdGhlXG4gICAgICAgICAgICBsZXQgaW5zZXJ0SW5kZXggPSB0aS5pbnNlcnRTdGFydDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmlldyBvZiBpbnNlcnRWaWV3cykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0Vmlld0F0KHZpZXcsIGluc2VydEluZGV4KTtcbiAgICAgICAgICAgICAgICBpbnNlcnRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpLmVudGVyaW5nUmVxdWlyZXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBmb3J3YXJkIGlmIG5vdCBhbHJlYWR5IHNldFxuICAgICAgICAgICAgICAgIG9wdHMuZGlyZWN0aW9uID0gb3B0cy5kaXJlY3Rpb24gfHwgJ2ZvcndhcmQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSB2aWV3cyB0byBiZSByZW1vdmVkIGFyZSBpbiB0aGUgYmVnaW5uaW5nIG9yIG1pZGRsZVxuICAgICAgICAvLyBhbmQgdGhlcmUgaXMgbm90IGEgdmlldyB0aGF0IG5lZWRzIHRvIHZpc3VhbGx5IHRyYW5zaXRpb24gb3V0XG4gICAgICAgIC8vIHRoZW4ganVzdCBkZXN0cm95IHRoZW0gYW5kIGRvbid0IHRyYW5zaXRpb24gYW55dGhpbmdcbiAgICAgICAgLy8gYmF0Y2ggYWxsIG9mIGxpZmVjeWNsZXMgdG9nZXRoZXJcbiAgICAgICAgLy8gbGV0J3MgbWFrZSBzdXJlLCBjYWxsYmFja3MgYXJlIHpvbmVkXG4gICAgICAgIGlmIChkZXN0cm95UXVldWUgJiYgZGVzdHJveVF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmlldyBvZiBkZXN0cm95UXVldWUpIHtcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGUodmlldy5lbGVtZW50LCBMSUZFQ1lDTEVfV0lMTF9MRUFWRSk7XG4gICAgICAgICAgICAgICAgbGlmZWN5Y2xlKHZpZXcuZWxlbWVudCwgTElGRUNZQ0xFX0RJRF9MRUFWRSk7XG4gICAgICAgICAgICAgICAgbGlmZWN5Y2xlKHZpZXcuZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfVU5MT0FEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9uY2UgYWxsIGxpZmVjeWNsZSBldmVudHMgaGFzIGJlZW4gZGVsaXZlcmVkLCB3ZSBjYW4gc2FmZWx5IGRldHJveSB0aGUgdmlld3NcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmlldyBvZiBkZXN0cm95UXVldWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWV3KHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHRyYW5zaXRpb24oZW50ZXJpbmdWaWV3LCBsZWF2aW5nVmlldywgdGkpIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIGFuaW1hdGUgKGR1cmF0aW9uID4gMCkgaWYgdGhlIHB1c2hlZCBwYWdlIGlzIG5vdCB0aGUgZmlyc3Qgb25lIChzdGFydHVwKVxuICAgICAgICAvLyBvciBpZiBpdCBpcyBhIHBvcnRhbCAobW9kYWwsIGFjdGlvbnNoZWV0LCBldGMuKVxuICAgICAgICBjb25zdCBvcHRzID0gdGkub3B0cztcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NDYWxsYmFjayA9IG9wdHMucHJvZ3Jlc3NBbmltYXRpb25cbiAgICAgICAgICAgID8gKGFuaSkgPT4gdGhpcy5zYkFuaSA9IGFuaVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBlbnRlcmluZ0VsID0gZW50ZXJpbmdWaWV3LmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxlYXZpbmdFbCA9IGxlYXZpbmdWaWV3ICYmIGxlYXZpbmdWaWV3LmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbk9wdHMgPSBPYmplY3QuYXNzaWduKHsgbW9kZSwgc2hvd0dvQmFjazogdGhpcy5jYW5Hb0JhY2tTeW5jKGVudGVyaW5nVmlldyksIGJhc2VFbDogdGhpcy5lbCwgYW5pbWF0aW9uQnVpbGRlcjogdGhpcy5hbmltYXRpb24gfHwgb3B0cy5hbmltYXRpb25CdWlsZGVyIHx8IGNvbmZpZy5nZXQoJ25hdkFuaW1hdGlvbicpLCBwcm9ncmVzc0NhbGxiYWNrLCBhbmltYXRlZDogdGhpcy5hbmltYXRlZCAmJiBjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKSwgZW50ZXJpbmdFbCxcbiAgICAgICAgICAgIGxlYXZpbmdFbCB9LCBvcHRzKTtcbiAgICAgICAgY29uc3QgeyBoYXNDb21wbGV0ZWQgfSA9IGF3YWl0IHRyYW5zaXRpb24oYW5pbWF0aW9uT3B0cyk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb25GaW5pc2goaGFzQ29tcGxldGVkLCBlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCBvcHRzKTtcbiAgICB9XG4gICAgdHJhbnNpdGlvbkZpbmlzaChoYXNDb21wbGV0ZWQsIGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIG9wdHMpIHtcbiAgICAgICAgY29uc3QgY2xlYW51cFZpZXcgPSBoYXNDb21wbGV0ZWQgPyBlbnRlcmluZ1ZpZXcgOiBsZWF2aW5nVmlldztcbiAgICAgICAgaWYgKGNsZWFudXBWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoY2xlYW51cFZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYXNDb21wbGV0ZWQsXG4gICAgICAgICAgICByZXF1aXJlc1RyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgICBlbnRlcmluZ1ZpZXcsXG4gICAgICAgICAgICBsZWF2aW5nVmlldyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogb3B0cy5kaXJlY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG4gICAgaW5zZXJ0Vmlld0F0KHZpZXcsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgdmlldyBpcyBhbHJlYWR5IGluIHRoZSBzdGFjayEhXG4gICAgICAgICAgICAvLyBtb3ZlIGl0IHRvIGl0cyBuZXcgbG9jYXRpb25cbiAgICAgICAgICAgIGFzc2VydCh2aWV3Lm5hdiA9PT0gdGhpcywgJ3ZpZXcgaXMgbm90IHBhcnQgb2YgdGhlIG5hdicpO1xuICAgICAgICAgICAgdmlld3Muc3BsaWNlKGluZGV4LCAwLCB2aWV3cy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSlbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXNzZXJ0KCF2aWV3Lm5hdiwgJ25hdiBpcyB1c2VkJyk7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgbmV3IHZpZXcgdG8gYWRkIHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBuZXcgZW50ZXJpbmcgdmlld1xuICAgICAgICAgICAgdmlldy5uYXYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBlbnRlcmluZyB2aWV3IGludG8gdGhlIGNvcnJlY3QgaW5kZXggaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICB2aWV3cy5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVZpZXcodmlldykge1xuICAgICAgICBhc3NlcnQodmlldy5zdGF0ZSA9PT0gVklFV19TVEFURV9BVFRBQ0hFRCB8fCB2aWV3LnN0YXRlID09PSBWSUVXX1NUQVRFX0RFU1RST1lFRCwgJ3ZpZXcgc3RhdGUgc2hvdWxkIGJlIGxvYWRlZCBvciBkZXN0cm95ZWQnKTtcbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgICBjb25zdCBpbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xLCAndmlldyBtdXN0IGJlIHBhcnQgb2YgdGhlIHN0YWNrJyk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2aWV3cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlc3Ryb3lWaWV3KHZpZXcpIHtcbiAgICAgICAgdmlldy5fZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnJlbW92ZVZpZXcodmlldyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERPTSBXUklURVxuICAgICAqL1xuICAgIGNsZWFudXAoYWN0aXZlVmlldykge1xuICAgICAgICAvLyBvaywgY2xlYW51cCB0aW1lISEgRGVzdHJveSBhbGwgb2YgdGhlIHZpZXdzIHRoYXQgYXJlXG4gICAgICAgIC8vIElOQUNUSVZFIGFuZCBjb21lIGFmdGVyIHRoZSBhY3RpdmUgdmlld1xuICAgICAgICAvLyBvbmx5IGRvIHRoaXMgaWYgdGhlIHZpZXdzIGV4aXN0LCB0aG91Z2hcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgICBjb25zdCBhY3RpdmVWaWV3SW5kZXggPSB2aWV3cy5pbmRleE9mKGFjdGl2ZVZpZXcpO1xuICAgICAgICBmb3IgKGxldCBpID0gdmlld3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB2aWV3LmVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoaSA+IGFjdGl2ZVZpZXdJbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgdmlldyBjb21lcyBhZnRlciB0aGUgYWN0aXZlIHZpZXdcbiAgICAgICAgICAgICAgICAvLyBsZXQncyB1bmxvYWQgaXRcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGUoZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfVU5MT0FEKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWV3KHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IGFjdGl2ZVZpZXdJbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgdmlldyBjb21lcyBiZWZvcmUgdGhlIGFjdGl2ZSB2aWV3XG4gICAgICAgICAgICAgICAgLy8gYW5kIGl0IGlzIG5vdCBhIHBvcnRhbCB0aGVuIGVuc3VyZSBpdCBpcyBoaWRkZW5cbiAgICAgICAgICAgICAgICBzZXRQYWdlSGlkZGVuKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhblN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gKCEhdGhpcy5zd2lwZUdlc3R1cmUgJiZcbiAgICAgICAgICAgICF0aGlzLmlzVHJhbnNpdGlvbmluZyAmJlxuICAgICAgICAgICAgdGhpcy50cmFuc0luc3RyLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25FbmFibGVkICYmXG4gICAgICAgICAgICB0aGlzLmNhbkdvQmFja1N5bmMoKSk7XG4gICAgfVxuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIHRoaXMucXVldWVUcm5zKHtcbiAgICAgICAgICAgIHJlbW92ZVN0YXJ0OiAtMSxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50OiAxLFxuICAgICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2JhY2snLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzQW5pbWF0aW9uOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIG9uTW92ZShzdGVwVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2JBbmkpIHtcbiAgICAgICAgICAgIHRoaXMuc2JBbmkucHJvZ3Jlc3NTdGVwKHN0ZXBWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25FbmQoc2hvdWxkQ29tcGxldGUsIHN0ZXBWYWx1ZSwgZHVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNiQW5pKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2JBbmkub25GaW5pc2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9LCB7IG9uZVRpbWVDYWxsYmFjazogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIEFjY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycyBpbiBKU1xuICAgICAgICAgICAgbGV0IG5ld1N0ZXBWYWx1ZSA9IChzaG91bGRDb21wbGV0ZSkgPyAtMC4wMDEgOiAwLjAwMTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQW5pbWF0aW9uIHdpbGwgYmUgcmV2ZXJzZWQgaGVyZSwgc28gbmVlZCB0b1xuICAgICAgICAgICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHRpbWUgcmVsYXRpdmVcbiAgICAgICAgICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAgICAgICAgICogaW4gdGVybXMgb2YgYSBsaW5lYXIgY3VydmUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNiQW5pLmVhc2luZygnY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjgsIDAuMjgpJyk7XG4gICAgICAgICAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKG5ldyBQb2ludCgwLCAwKSwgbmV3IFBvaW50KDEsIDApLCBuZXcgUG9pbnQoMC42OCwgMC4yOCksIG5ldyBQb2ludCgxLCAxKSwgc3RlcFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihuZXcgUG9pbnQoMCwgMCksIG5ldyBQb2ludCgwLjMyLCAwLjcyKSwgbmV3IFBvaW50KDAsIDEpLCBuZXcgUG9pbnQoMSwgMSksIHN0ZXBWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNiQW5pLnByb2dyZXNzRW5kKHNob3VsZENvbXBsZXRlID8gMSA6IDAsIG5ld1N0ZXBWYWx1ZSwgZHVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoaChcInNsb3RcIiwgbnVsbCkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJzd2lwZUdlc3R1cmVcIjogW1wic3dpcGVHZXN0dXJlQ2hhbmdlZFwiXSxcbiAgICAgICAgXCJyb290XCI6IFtcInJvb3RDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MH1cIjsgfVxufTtcblxuY29uc3QgbmF2TGluayA9IChlbCwgcm91dGVyRGlyZWN0aW9uLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBlbC5jbG9zZXN0KCdpb24tbmF2Jyk7XHJcbiAgICBpZiAobmF2KSB7XHJcbiAgICAgICAgaWYgKHJvdXRlckRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdi5wdXNoKGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIHsgc2tpcElmQnVzeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyb3V0ZXJEaXJlY3Rpb24gPT09ICdyb290Jykge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYXYuc2V0Um9vdChjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCB7IHNraXBJZkJ1c3k6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm91dGVyRGlyZWN0aW9uID09PSAnYmFjaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hdi5wb3AoeyBza2lwSWZCdXN5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG59O1xuXG5jb25zdCBOYXZMaW5rID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2l0aW9uIGRpcmVjdGlvbiB3aGVuIG5hdmlnYXRpbmcgdG8gYW5vdGhlciBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuYXZMaW5rKHRoaXMuZWwsIHRoaXMucm91dGVyRGlyZWN0aW9uLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5jb21wb25lbnRQcm9wcyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrIH0pKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcblxuY29uc3QgTmF2UG9wID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmF2TGluayh0aGlzLmVsLCAnYmFjaycpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tERVBSRUNBVEVEXVtpb24tbmF2LXBvcF0gPGlvbi1uYXYtcG9wPiBpcyBkZXByZWNhdGVkLiBVc2UgYDxpb24tbmF2LWxpbmsgcm91dGVyRGlyZWN0aW9uPVwiYmFja1wiPmAgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLnBvcCB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5cbmNvbnN0IE5hdlB1c2ggPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnB1c2ggPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmF2TGluayh0aGlzLmVsLCAnZm9yd2FyZCcsIHRoaXMuY29tcG9uZW50LCB0aGlzLmNvbXBvbmVudFByb3BzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbREVQUkVDQVRFRF1baW9uLW5hdi1wdXNoXSBgPGlvbi1uYXYtcHVzaCBjb21wb25lbnQ9XCJNeUNvbXBvbmVudFwiPmAgaXMgZGVwcmVjYXRlZC4gVXNlIGA8aW9uLW5hdi1saW5rIGNvbXBvbmVudD1cIk15Q29tcG9uZW50XCI+YCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMucHVzaCB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5cbmNvbnN0IE5hdlNldFJvb3QgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnNldFJvb3QgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmF2TGluayh0aGlzLmVsLCAncm9vdCcsIHRoaXMuY29tcG9uZW50LCB0aGlzLmNvbXBvbmVudFByb3BzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbREVQUkVDQVRFRF1baW9uLW5hdi1zZXQtcm9vdF0gYDxpb24tbmF2LXNldC1yb290IGNvbXBvbmVudD1cIk15Q29tcG9uZW50XCI+YCBpcyBkZXByZWNhdGVkLiBVc2UgYDxpb24tbmF2LWxpbmsgY29tcG9uZW50PVwiTXlDb21wb25lbnRcIiByb3V0ZXJEaXJlY3Rpb249XCJyb290XCI+YCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuc2V0Um9vdCB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5cbmV4cG9ydCB7IE5hdiBhcyBpb25fbmF2LCBOYXZMaW5rIGFzIGlvbl9uYXZfbGluaywgTmF2UG9wIGFzIGlvbl9uYXZfcG9wLCBOYXZQdXNoIGFzIGlvbl9uYXZfcHVzaCwgTmF2U2V0Um9vdCBhcyBpb25fbmF2X3NldF9yb290IH07XG4iXSwic291cmNlUm9vdCI6IiJ9