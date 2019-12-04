(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_app, ion_buttons, ion_content, ion_footer, ion_header, ion_router_outlet, ion_title, ion_toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_app", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_outlet", function() { return RouterOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_title", function() { return ToolbarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toolbar", function() { return Toolbar; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
/* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-6826f2f6.js */ "../node_modules/@ionic/core/dist/esm/index-6826f2f6.js");
/* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "../node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");









const App = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentDidLoad() {
        {
            rIC(() => {
                const isHybrid = Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'hybrid');
                if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing')) {
                    __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./tap-click-ca00ce7f.js */ "../node_modules/@ionic/core/dist/esm/tap-click-ca00ce7f.js")).then(module => module.startTapClick(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"]));
                }
                if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('statusTap', isHybrid)) {
                    __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./status-tap-a0df8284.js */ "../node_modules/@ionic/core/dist/esm/status-tap-a0df8284.js")).then(module => module.startStatusTap());
                }
                if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('inputShims', needInputShims())) {
                    __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./input-shims-a4fc53ac.js */ "../node_modules/@ionic/core/dist/esm/input-shims-a4fc53ac.js")).then(module => module.startInputShims(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"]));
                }
                if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('hardwareBackButton', isHybrid)) {
                    __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./hardware-back-button-5afe3cb0.js */ "../node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js")).then(module => module.startHardwareBackButton());
                }
                __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./focus-visible-70713a0c.js */ "../node_modules/@ionic/core/dist/esm/focus-visible-70713a0c.js")).then(module => module.startFocusVisible());
            });
        }
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_forceStatusbarPadding')
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"; }
};
const needInputShims = () => {
    return Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'ios') && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])(window, 'mobile');
};
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};

const Buttons = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If true, buttons will disappear when its
         * parent toolbar has fully collapsed if the toolbar
         * is not the first toolbar. If the toolbar is the
         * first toolbar, the buttons will be hidden and will
         * only be shown once all toolbars have fully collapsed.
         *
         * Only applies in `ios` mode with `collapse` set to
         * `true` on `ion-header`.
         *
         * Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)
         */
        this.collapse = false;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                ['buttons-collapse']: this.collapse
            } }));
    }
    static get style() { return ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"; }
};

const Content = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1;
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        // Detail is used in a hot loop in the scroll event, by allocating it here
        // V8 will be able to inline any read/write to it since it's a monomorphic class.
        // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
        this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: 'scroll',
            event: undefined,
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            data: undefined,
            isScrolling: true,
        };
        /**
         * If `true`, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
        /**
         * If you want to enable the content scrolling in the X axis, set this property to `true`.
         */
        this.scrollX = false;
        /**
         * If you want to disable the content scrolling in the Y axis, set this property to `false`.
         */
        this.scrollY = true;
        /**
         * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
         * and start listening from (ionScroll), set this property to `true`.
         */
        this.scrollEvents = false;
        this.ionScrollStart = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScrollStart", 7);
        this.ionScroll = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScroll", 7);
        this.ionScrollEnd = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionScrollEnd", 7);
    }
    disconnectedCallback() {
        this.onScrollEnd();
    }
    componentDidLoad() {
        this.resize();
    }
    onClick(ev) {
        if (this.isScrolling) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    shouldForceOverscroll() {
        const { forceOverscroll, mode } = this;
        return forceOverscroll === undefined
            ? mode === 'ios' && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])('ios')
            : forceOverscroll;
    }
    resize() {
        if (this.fullscreen) {
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.readDimensions.bind(this));
        }
        else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
        }
    }
    readDimensions() {
        const page = getPageElement(this.el);
        const top = Math.max(this.el.offsetTop, 0);
        const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        const dirty = top !== this.cTop || bottom !== this.cBottom;
        if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
        }
    }
    onScroll(ev) {
        const timeStamp = Date.now();
        const shouldStart = !this.isScrolling;
        this.lastScroll = timeStamp;
        if (shouldStart) {
            this.onScrollStart();
        }
        if (!this.queued && this.scrollEvents) {
            this.queued = true;
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(ts => {
                this.queued = false;
                this.detail.event = ev;
                updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
                this.ionScroll.emit(this.detail);
            });
        }
    }
    /**
     * Get the element where the actual scrolling takes place.
     * This element can be used to subscribe to `scroll` events or manually modify
     * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
     *
     * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
     * and `scrollToPoint()` to scroll the content into a certain point.
     */
    getScrollElement() {
        return Promise.resolve(this.scrollEl);
    }
    /**
     * Scroll to the top of the component.
     *
     * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
     */
    scrollToTop(duration = 0) {
        return this.scrollToPoint(undefined, 0, duration);
    }
    /**
     * Scroll to the bottom of the component.
     *
     * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
     */
    scrollToBottom(duration = 0) {
        const y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        return this.scrollToPoint(undefined, y, duration);
    }
    /**
     * Scroll by a specified X/Y distance in the component.
     *
     * @param x The amount to scroll by on the horizontal axis.
     * @param y The amount to scroll by on the vertical axis.
     * @param duration The amount of time to take scrolling by that amount.
     */
    scrollByPoint(x, y, duration) {
        return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
    }
    /**
     * Scroll to a specified X/Y location in the component.
     *
     * @param x The point to scroll to on the horizontal axis.
     * @param y The point to scroll to on the vertical axis.
     * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
     */
    async scrollToPoint(x, y, duration = 0) {
        const el = this.scrollEl;
        if (duration < 32) {
            if (y != null) {
                el.scrollTop = y;
            }
            if (x != null) {
                el.scrollLeft = x;
            }
            return;
        }
        let resolve;
        let startTime = 0;
        const promise = new Promise(r => resolve = r);
        const fromY = el.scrollTop;
        const fromX = el.scrollLeft;
        const deltaY = y != null ? y - fromY : 0;
        const deltaX = x != null ? x - fromX : 0;
        // scroll loop
        const step = (timeStamp) => {
            const linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
            const easedT = Math.pow(linearTime, 3) + 1;
            if (deltaY !== 0) {
                el.scrollTop = Math.floor((easedT * deltaY) + fromY);
            }
            if (deltaX !== 0) {
                el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
            }
            if (easedT < 1) {
                // do not use DomController here
                // must use nativeRaf in order to fire in the next frame
                // TODO: remove as any
                requestAnimationFrame(step);
            }
            else {
                resolve();
            }
        };
        // chill out for a frame first
        requestAnimationFrame(ts => {
            startTime = ts;
            step(ts);
        });
        return promise;
    }
    onScrollStart() {
        this.isScrolling = true;
        this.ionScrollStart.emit({
            isScrolling: true
        });
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
        // watchdog
        this.watchDog = setInterval(() => {
            if (this.lastScroll < Date.now() - 120) {
                this.onScrollEnd();
            }
        }, 100);
    }
    onScrollEnd() {
        clearInterval(this.watchDog);
        this.watchDog = null;
        if (this.isScrolling) {
            this.isScrolling = false;
            this.ionScrollEnd.emit({
                isScrolling: false
            });
        }
    }
    render() {
        const { scrollX, scrollY } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const forceOverscroll = this.shouldForceOverscroll();
        const transitionShadow = (mode === 'ios' && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('experimentalTransitionShadow', true));
        this.resize();
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), { [mode]: true, 'content-sizing': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-popover', this.el), 'overscroll': forceOverscroll }), style: {
                '--offset-top': `${this.cTop}px`,
                '--offset-bottom': `${this.cBottom}px`,
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", { class: {
                'inner-scroll': true,
                'scroll-x': scrollX,
                'scroll-y': scrollY,
                'overscroll': (scrollX || scrollY) && forceOverscroll
            }, ref: el => this.scrollEl = el, onScroll: ev => this.onScroll(ev) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), transitionShadow ? (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "transition-effect" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "transition-cover" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "transition-shadow" }))) : null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "fixed" })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}"; }
};
const getParentElement = (el) => {
    if (el.parentElement) {
        // normal element with a parent element
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        // shadow dom's document fragment
        return el.parentNode.host;
    }
    return null;
};
const getPageElement = (el) => {
    const tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    const page = el.closest('ion-app,ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
};
// ******** DOM READ ****************
const updateScrollDetail = (detail, el, timestamp, shouldStart) => {
    const prevX = detail.currentX;
    const prevY = detail.currentY;
    const prevT = detail.timeStamp;
    const currentX = el.scrollLeft;
    const currentY = el.scrollTop;
    const timeDelta = timestamp - prevT;
    if (shouldStart) {
        // remember the start positions
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
    }
    detail.timeStamp = timestamp;
    detail.currentX = detail.scrollLeft = currentX;
    detail.currentY = detail.scrollTop = currentY;
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    if (timeDelta > 0 && timeDelta < 100) {
        const velocityX = (currentX - prevX) / timeDelta;
        const velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
};

const Footer = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the footer will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const translucent = this.translucent;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "contentinfo", class: {
                [mode]: true,
                // Used internally for styling
                [`footer-${mode}`]: true,
                [`footer-translucent`]: translucent,
                [`footer-translucent-${mode}`]: translucent,
            } }));
    }
    static get style() { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"; }
};

const TRANSITION = 'all 0.2s ease-in-out';
const cloneElement = (tagName) => {
    const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
    if (getCachedEl !== null) {
        return getCachedEl;
    }
    const clonedEl = document.createElement(tagName);
    clonedEl.classList.add('ion-cloned-element');
    clonedEl.style.setProperty('display', 'none');
    document.body.appendChild(clonedEl);
    return clonedEl;
};
const createHeaderIndex = (headerEl) => {
    if (!headerEl) {
        return;
    }
    const toolbars = headerEl.querySelectorAll('ion-toolbar');
    return {
        el: headerEl,
        toolbars: Array.from(toolbars).map((toolbar) => {
            const ionTitleEl = toolbar.querySelector('ion-title');
            return {
                el: toolbar,
                background: toolbar.shadowRoot.querySelector('.toolbar-background'),
                ionTitleEl,
                innerTitleEl: (ionTitleEl) ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
                ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')) || []
            };
        }) || [[]]
    };
};
const handleContentScroll = (scrollEl, scrollHeaderIndex) => {
    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
        const scrollTop = scrollEl.scrollTop;
        const scale = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(1, 1 + (-scrollTop / 500), 1.1);
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
        });
    });
};
const setToolbarBackgroundOpacity = (toolbar, opacity) => {
    if (opacity === undefined) {
        toolbar.background.style.removeProperty('--opacity');
    }
    else {
        toolbar.background.style.setProperty('--opacity', opacity.toString());
    }
};
const handleToolbarBorderIntersection = (ev, mainHeaderIndex) => {
    if (!ev[0].isIntersecting) {
        return;
    }
    const scale = ((1 - ev[0].intersectionRatio) * 100) / 75;
    setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], (scale === 1) ? undefined : scale);
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */
const handleToolbarIntersection = (ev, mainHeaderIndex, scrollHeaderIndex) => {
    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
        handleToolbarBorderIntersection(ev, mainHeaderIndex);
        const event = ev[0];
        const intersection = event.intersectionRect;
        const intersectionArea = intersection.width * intersection.height;
        const rootArea = event.rootBounds.width * event.rootBounds.height;
        const isPageHidden = intersectionArea === 0 && rootArea === 0;
        const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
        const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
        const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
        if (isPageHidden || isPageTransitioning) {
            return;
        }
        if (event.isIntersecting) {
            setHeaderActive(mainHeaderIndex, false);
            setHeaderActive(scrollHeaderIndex);
        }
        else {
            /**
             * There is a bug with IntersectionObserver on Safari
             * where `event.isIntersecting === false` when cancelling
             * a swipe to go back gesture. Checking the intersection
             * x, y, width, and height provides a workaround. This bug
             * does not happen when using Safari + Web Animations,
             * only Safari + CSS Animations.
             */
            const hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
            if (hasValidIntersection) {
                setHeaderActive(mainHeaderIndex);
                setHeaderActive(scrollHeaderIndex, false);
                setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], 1);
            }
        }
    });
};
const setHeaderActive = (headerIndex, active = true) => {
    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
        if (active) {
            headerIndex.el.classList.remove('header-collapse-condense-inactive');
        }
        else {
            headerIndex.el.classList.add('header-collapse-condense-inactive');
        }
    });
};
const scaleLargeTitles = (toolbars = [], scale = 1, transition = false) => {
    toolbars.forEach(toolbar => {
        const ionTitle = toolbar.ionTitleEl;
        const titleDiv = toolbar.innerTitleEl;
        if (!ionTitle || ionTitle.size !== 'large') {
            return;
        }
        titleDiv.style.transformOrigin = 'left center';
        titleDiv.style.transition = (transition) ? TRANSITION : '';
        titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
    });
};

const Header = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.collapsibleHeaderInitialized = false;
        /**
         * If `true`, the header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    async componentDidLoad() {
        await this.checkCollapsibleHeader();
    }
    async componentDidUpdate() {
        await this.checkCollapsibleHeader();
    }
    componentDidUnload() {
        this.destroyCollapsibleHeader();
    }
    async checkCollapsibleHeader() {
        // Determine if the header can collapse
        const hasCollapse = this.collapse === 'condense';
        const canCollapse = (hasCollapse && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) === 'ios') ? hasCollapse : false;
        if (!canCollapse && this.collapsibleHeaderInitialized) {
            this.destroyCollapsibleHeader();
        }
        else if (canCollapse && !this.collapsibleHeaderInitialized) {
            const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
            const contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
            await this.setupCollapsibleHeader(contentEl, pageEl);
        }
    }
    destroyCollapsibleHeader() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = undefined;
        }
        if (this.scrollEl && this.contentScrollCallback) {
            this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
            this.contentScrollCallback = undefined;
        }
    }
    async setupCollapsibleHeader(contentEl, pageEl) {
        if (!contentEl || !pageEl) {
            console.error('ion-header requires a content to collapse, make sure there is an ion-content.');
            return;
        }
        this.scrollEl = await contentEl.getScrollElement();
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
            const headers = pageEl.querySelectorAll('ion-header');
            const mainHeader = Array.from(headers).find((header) => header.collapse !== 'condense');
            if (!mainHeader || !this.scrollEl) {
                return;
            }
            const mainHeaderIndex = createHeaderIndex(mainHeader);
            const scrollHeaderIndex = createHeaderIndex(this.el);
            if (!mainHeaderIndex || !scrollHeaderIndex) {
                return;
            }
            setHeaderActive(mainHeaderIndex, false);
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
                const mainHeaderHeight = mainHeaderIndex.el.clientHeight;
                /**
                 * Handle interaction between toolbar collapse and
                 * showing/hiding content in the primary ion-header
                 * as well as progressively showing/hiding the main header
                 * border as the top-most toolbar collapses or expands.
                 */
                const toolbarIntersection = (ev) => { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex); };
                this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], rootMargin: `-${mainHeaderHeight}px 0px 0px 0px` });
                this.intersectionObserver.observe(scrollHeaderIndex.toolbars[0].el);
            });
            /**
             * Handle scaling of large iOS titles and
             * showing/hiding border on last toolbar
             * in primary header
             */
            this.contentScrollCallback = () => { handleContentScroll(this.scrollEl, scrollHeaderIndex); };
            this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
        });
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            cloneElement('ion-title');
            cloneElement('ion-back-button');
        });
        this.collapsibleHeaderInitialized = true;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const collapse = this.collapse || 'none';
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "banner", class: {
                [mode]: true,
                // Used internally for styling
                [`header-${mode}`]: true,
                [`header-translucent`]: this.translucent,
                [`header-collapse-${collapse}`]: true,
                [`header-translucent-${mode}`]: this.translucent,
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"; }
};

const RouterOutlet = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.animationEnabled = true;
        /**
         * The mode determines which platform styles to use.
         */
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the router-outlet should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavDidChange", 3);
    }
    swipeHandlerChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeHandler === undefined);
        }
    }
    async connectedCallback() {
        this.gesture = (await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./swipe-back-35ad8e37.js */ "../node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js"))).createSwipeBackGesture(this.el, () => !!this.swipeHandler && this.swipeHandler.canStart() && this.animationEnabled, () => this.swipeHandler && this.swipeHandler.onStart(), step => this.ani && this.ani.progressStep(step), (shouldComplete, step, dur) => {
            if (this.ani) {
                this.animationEnabled = false;
                this.ani.onFinish(() => {
                    this.animationEnabled = true;
                    if (this.swipeHandler) {
                        this.swipeHandler.onEnd(shouldComplete);
                    }
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
                    this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                    newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.68, 0.28), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), step);
                }
                else {
                    newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.32, 0.72), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), step);
                }
                this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
            }
        });
        this.swipeHandlerChanged();
    }
    componentWillLoad() {
        this.ionNavWillLoad.emit();
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    /** @internal */
    async commit(enteringEl, leavingEl, opts) {
        const unlock = await this.lock();
        let changed = false;
        try {
            changed = await this.transition(enteringEl, leavingEl, opts);
        }
        catch (e) {
            console.error(e);
        }
        unlock();
        return changed;
    }
    /** @internal */
    async setRouteId(id, params, direction) {
        const changed = await this.setRoot(id, params, {
            duration: direction === 'root' ? 0 : undefined,
            direction: direction === 'back' ? 'back' : 'forward',
        });
        return {
            changed,
            element: this.activeEl
        };
    }
    /** @internal */
    async getRouteId() {
        const active = this.activeEl;
        return active ? {
            id: active.tagName,
            element: active,
        } : undefined;
    }
    async setRoot(component, params, opts) {
        if (this.activeComponent === component) {
            return false;
        }
        // attach entering view to DOM
        const leavingEl = this.activeEl;
        const enteringEl = await Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params);
        this.activeComponent = component;
        this.activeEl = enteringEl;
        // commit animation
        await this.commit(enteringEl, leavingEl, opts);
        await Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.delegate, leavingEl);
        return true;
    }
    async transition(enteringEl, leavingEl, opts = {}) {
        if (leavingEl === enteringEl) {
            return false;
        }
        // emit nav will change event
        this.ionNavWillChange.emit();
        const { el, mode } = this;
        const animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true);
        const animationBuilder = this.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('navAnimation');
        await Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_6__["t"])(Object.assign({ mode,
            animated,
            animationBuilder,
            enteringEl,
            leavingEl, baseEl: el, progressCallback: (opts.progressAnimation
                ? ani => this.ani = ani
                : undefined) }, opts));
        // emit nav changed event
        this.ionNavDidChange.emit();
        return true;
    }
    async lock() {
        const p = this.waitPromise;
        let resolve;
        this.waitPromise = new Promise(r => resolve = r);
        if (p !== undefined) {
            await p;
        }
        return resolve;
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "swipeHandler": ["swipeHandlerChanged"]
    }; }
    static get style() { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; }
};

const ToolbarTitle = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
    }
    sizeChanged() {
        this.emitStyle();
    }
    connectedCallback() {
        this.emitStyle();
    }
    emitStyle() {
        const size = this.getSize();
        this.ionStyle.emit({
            [`title-${size}`]: true
        });
    }
    getSize() {
        return (this.size !== undefined) ? this.size : 'default';
    }
    getMode() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const toolbar = this.el.closest('ion-toolbar');
        return (toolbar && toolbar.mode) || mode;
    }
    render() {
        const mode = this.getMode();
        const size = this.getSize();
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign({ [mode]: true, [`title-${mode}`]: true, [`title-${size}`]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-title" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "size": ["sizeChanged"]
    }; }
    static get style() { return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"; }
};

const Toolbar = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.childrenStyles = new Map();
    }
    componentWillLoad() {
        const buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
        const firstButtons = buttons.find(button => {
            return button.slot === 'start';
        });
        if (firstButtons) {
            firstButtons.classList.add('buttons-first-slot');
        }
        const buttonsReversed = buttons.reverse();
        const lastButtons = buttonsReversed.find(button => button.slot === 'end') ||
            buttonsReversed.find(button => button.slot === 'primary') ||
            buttonsReversed.find(button => button.slot === 'secondary');
        if (lastButtons) {
            lastButtons.classList.add('buttons-last-slot');
        }
    }
    childrenStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const newStyles = {};
        const childStyles = this.childrenStyles.get(tagName) || {};
        let hasStyleChange = false;
        Object.keys(updatedStyles).forEach(key => {
            const childKey = `toolbar-${key}`;
            const newValue = updatedStyles[key];
            if (newValue !== childStyles[childKey]) {
                hasStyleChange = true;
            }
            if (newValue) {
                newStyles[childKey] = true;
            }
        });
        if (hasStyleChange) {
            this.childrenStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const childStyles = {};
        this.childrenStyles.forEach(value => {
            Object.assign(childStyles, value);
        });
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({ 'in-toolbar': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-toolbar', this.el), [mode]: true }, childStyles), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-background" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-container" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-content" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY4MjZmMmY2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWFwcF84LWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxxQkFBcUIsMkRBQVU7QUFDL0I7QUFDQSxvREFBb0QscURBQU07QUFDMUQ7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHNDQUFzQyxFQUFF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akI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksMkRBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTSxJQUFJLE1BQU07QUFDOUQsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJEQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFx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O0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjhcXGNodW5rc1xcOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCYXNlZCBvbjpcclxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzM0ODAwOS95LWNvb3JkaW5hdGUtZm9yLWEtZ2l2ZW4teC1jdWJpYy1iZXppZXJcclxuICogaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8yNjg0Ni9pcy10aGVyZS1hbi1leHBsaWNpdC1mb3JtLWZvci1jdWJpYy1iJUMzJUE5emllci1jdXJ2ZXNcclxuICogVE9ETzogUmVkdWNlIHJvdW5kaW5nIGVycm9yXHJcbiAqL1xyXG5jbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBHaXZlbiBhIGN1YmljLWJlemllciBjdXJ2ZSwgZ2V0IHRoZSB4IHZhbHVlICh0aW1lKSBnaXZlblxyXG4gKiB0aGUgeSB2YWx1ZSAocHJvZ3Jlc3Npb24pLlxyXG4gKiBFeDogY3ViaWMtYmV6aWVyKDAuMzIsIDAuNzIsIDAsIDEpO1xyXG4gKiBQMDogKDAsIDApXHJcbiAqIFAxOiAoMC4zMiwgMC43MilcclxuICogUDI6ICgwLCAxKVxyXG4gKiBQMzogKDEsIDEpXHJcbiAqXHJcbiAqIElmIHlvdSBnaXZlIGEgY3ViaWMgYmV6aWVyIGN1cnZlIHRoYXQgbmV2ZXIgcmVhY2hlcyB0aGVcclxuICogcHJvdmlkZWQgcHJvZ3Jlc3Npb24sIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gTmFOLlxyXG4gKi9cclxuY29uc3QgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gPSAocDAsIHAxLCBwMiwgcDMsIHByb2dyZXNzaW9uKSA9PiB7XHJcbiAgICBjb25zdCB0VmFsdWVzID0gc29sdmVDdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCBwMy55LCBwcm9ncmVzc2lvbik7XHJcbiAgICByZXR1cm4gc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbihwMC54LCBwMS54LCBwMi54LCBwMy54LCB0VmFsdWVzWzBdKTsgLy8gVE9ETzogQWRkIGJldHRlciBzdHJhdGVneSBmb3IgZGVhbGluZyB3aXRoIG11bHRpcGxlIHNvbHV0aW9uc1xyXG59O1xyXG4vKipcclxuICogU29sdmUgYSBjdWJpYyBlcXVhdGlvbiBpbiBvbmUgZGltZW5zaW9uICh0aW1lKVxyXG4gKi9cclxuY29uc3Qgc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbiA9IChwMCwgcDEsIHAyLCBwMywgdCkgPT4ge1xyXG4gICAgY29uc3QgcGFydEEgPSAoMyAqIHAxKSAqIE1hdGgucG93KHQgLSAxLCAyKTtcclxuICAgIGNvbnN0IHBhcnRCID0gKC0zICogcDIgKiB0KSArICgzICogcDIpICsgKHAzICogdCk7XHJcbiAgICBjb25zdCBwYXJ0QyA9IHAwICogTWF0aC5wb3codCAtIDEsIDMpO1xyXG4gICAgcmV0dXJuIHQgKiAocGFydEEgKyAodCAqIHBhcnRCKSkgLSBwYXJ0QztcclxufTtcclxuLyoqXHJcbiAqIEZpbmQgdGhlIGB0YCB2YWx1ZSBmb3IgYSBjdWJpYyBiZXppZXIgdXNpbmcgQ2FyZGFubydzIGZvcm11bGFcclxuICovXHJcbmNvbnN0IHNvbHZlQ3ViaWNCZXppZXIgPSAocDAsIHAxLCBwMiwgcDMsIHJlZlBvaW50KSA9PiB7XHJcbiAgICBwMCAtPSByZWZQb2ludDtcclxuICAgIHAxIC09IHJlZlBvaW50O1xyXG4gICAgcDIgLT0gcmVmUG9pbnQ7XHJcbiAgICBwMyAtPSByZWZQb2ludDtcclxuICAgIGNvbnN0IHJvb3RzID0gc29sdmVDdWJpY0VxdWF0aW9uKHAzIC0gMyAqIHAyICsgMyAqIHAxIC0gcDAsIDMgKiBwMiAtIDYgKiBwMSArIDMgKiBwMCwgMyAqIHAxIC0gMyAqIHAwLCBwMCk7XHJcbiAgICByZXR1cm4gcm9vdHMuZmlsdGVyKHJvb3QgPT4gcm9vdCA+PSAwICYmIHJvb3QgPD0gMSk7XHJcbn07XHJcbmNvbnN0IHNvbHZlUXVhZHJhdGljRXF1YXRpb24gPSAoYSwgYiwgYykgPT4ge1xyXG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0ICogYSAqIGM7XHJcbiAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICgtYiArIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSksXHJcbiAgICAgICAgICAgICgtYiAtIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzb2x2ZUN1YmljRXF1YXRpb24gPSAoYSwgYiwgYywgZCkgPT4ge1xyXG4gICAgaWYgKGEgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gc29sdmVRdWFkcmF0aWNFcXVhdGlvbihiLCBjLCBkKTtcclxuICAgIH1cclxuICAgIGIgLz0gYTtcclxuICAgIGMgLz0gYTtcclxuICAgIGQgLz0gYTtcclxuICAgIGNvbnN0IHAgPSAoMyAqIGMgLSBiICogYikgLyAzO1xyXG4gICAgY29uc3QgcSA9ICgyICogYiAqIGIgKiBiIC0gOSAqIGIgKiBjICsgMjcgKiBkKSAvIDI3O1xyXG4gICAgaWYgKHAgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucG93KC1xLCAxIC8gMyldO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5zcXJ0KC1wKSwgLU1hdGguc3FydCgtcCldO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gTWF0aC5wb3cocSAvIDIsIDIpICsgTWF0aC5wb3cocCAvIDMsIDMpO1xyXG4gICAgaWYgKGRpc2NyaW1pbmFudCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5wb3cocSAvIDIsIDEgLyAyKSAtIGIgLyAzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRpc2NyaW1pbmFudCA+IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucG93KC0ocSAvIDIpICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCksIDEgLyAzKSAtIE1hdGgucG93KChxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gYiAvIDNdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgciA9IE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpO1xyXG4gICAgY29uc3QgcGhpID0gTWF0aC5hY29zKC0ocSAvICgyICogTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSkpKSk7XHJcbiAgICBjb25zdCBzID0gMiAqIE1hdGgucG93KHIsIDEgLyAzKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgcyAqIE1hdGguY29zKHBoaSAvIDMpIC0gYiAvIDMsXHJcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyAyICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzLFxyXG4gICAgICAgIHMgKiBNYXRoLmNvcygocGhpICsgNCAqIE1hdGguUEkpIC8gMykgLSBiIC8gM1xyXG4gICAgXTtcclxufTtcblxuZXhwb3J0IHsgUG9pbnQgYXMgUCwgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gYXMgZyB9O1xuIiwiY29uc3QgYXR0YWNoQ29tcG9uZW50ID0gYXN5bmMgKGRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgY3NzQ2xhc3NlcywgY29tcG9uZW50UHJvcHMpID0+IHtcclxuICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBjc3NDbGFzc2VzKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJyAmJiAhKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgID8gY29udGFpbmVyLm93bmVyRG9jdW1lbnQgJiYgY29udGFpbmVyLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wb25lbnQpXHJcbiAgICAgICAgOiBjb21wb25lbnQ7XHJcbiAgICBpZiAoY3NzQ2xhc3Nlcykge1xyXG4gICAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudFByb3BzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbCwgY29tcG9uZW50UHJvcHMpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGlmIChlbC5jb21wb25lbnRPblJlYWR5KSB7XHJcbiAgICAgICAgYXdhaXQgZWwuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG5jb25zdCBkZXRhY2hDb21wb25lbnQgPSAoZGVsZWdhdGUsIGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGNvbnRhaW5lciwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn07XG5cbmV4cG9ydCB7IGF0dGFjaENvbXBvbmVudCBhcyBhLCBkZXRhY2hDb21wb25lbnQgYXMgZCB9O1xuIiwiaW1wb3J0IHsgdyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBMSUZFQ1lDTEVfV0lMTF9MRUFWRSwgTCBhcyBMSUZFQ1lDTEVfV0lMTF9FTlRFUiwgYSBhcyBMSUZFQ1lDTEVfRElEX0VOVEVSLCBjIGFzIExJRkVDWUNMRV9ESURfTEVBVkUgfSBmcm9tICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5cbmNvbnN0IGlvc1RyYW5zaXRpb25BbmltYXRpb24gPSAoKSA9PiBpbXBvcnQoJy4vaW9zLnRyYW5zaXRpb24tMDcxYmQ0MjEuanMnKTtcclxuY29uc3QgbWRUcmFuc2l0aW9uQW5pbWF0aW9uID0gKCkgPT4gaW1wb3J0KCcuL21kLnRyYW5zaXRpb24tMTVhODFiMDguanMnKTtcclxuY29uc3QgdHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRyYW5zaXRpb24ob3B0cyk7XHJcbiAgICAgICAgICAgIHJ1blRyYW5zaXRpb24ob3B0cykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgYmVmb3JlVHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBzZXRaSW5kZXgoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzLmRpcmVjdGlvbik7XHJcbiAgICBpZiAob3B0cy5zaG93R29CYWNrKSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QuYWRkKCdjYW4tZ28tYmFjaycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZ28tYmFjaycpO1xyXG4gICAgfVxyXG4gICAgc2V0UGFnZUhpZGRlbihlbnRlcmluZ0VsLCBmYWxzZSk7XHJcbiAgICBpZiAobGVhdmluZ0VsKSB7XHJcbiAgICAgICAgc2V0UGFnZUhpZGRlbihsZWF2aW5nRWwsIGZhbHNlKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgcnVuVHJhbnNpdGlvbiA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gYXdhaXQgZ2V0QW5pbWF0aW9uQnVpbGRlcihvcHRzKTtcclxuICAgIGNvbnN0IGFuaSA9IChhbmltYXRpb25CdWlsZGVyKVxyXG4gICAgICAgID8gYW5pbWF0aW9uKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpXHJcbiAgICAgICAgOiBub0FuaW1hdGlvbihvcHRzKTsgLy8gZmFzdCBwYXRoIGZvciBubyBhbmltYXRpb25cclxuICAgIHJldHVybiBhbmk7XHJcbn07XHJcbmNvbnN0IGFmdGVyVHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xyXG4gICAgaWYgKGxlYXZpbmdFbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGVhdmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXRBbmltYXRpb25CdWlsZGVyID0gYXN5bmMgKG9wdHMpID0+IHtcclxuICAgIGlmICghb3B0cy5sZWF2aW5nRWwgfHwgIW9wdHMuYW5pbWF0ZWQgfHwgb3B0cy5kdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0cy5hbmltYXRpb25CdWlsZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdHMuYW5pbWF0aW9uQnVpbGRlcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldEFuaW1hdGlvbiA9IChvcHRzLm1vZGUgPT09ICdpb3MnKVxyXG4gICAgICAgID8gKGF3YWl0IGlvc1RyYW5zaXRpb25BbmltYXRpb24oKSkuaW9zVHJhbnNpdGlvbkFuaW1hdGlvblxyXG4gICAgICAgIDogKGF3YWl0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5tZFRyYW5zaXRpb25BbmltYXRpb247XHJcbiAgICByZXR1cm4gZ2V0QW5pbWF0aW9uO1xyXG59O1xyXG5jb25zdCBhbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uQnVpbGRlciwgb3B0cykgPT4ge1xyXG4gICAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIHRydWUpO1xyXG4gICAgbGV0IHRyYW5zO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtb2QgPSBhd2FpdCBpbXBvcnQoJy4vaW5kZXgtNjljMzc4ODUuanMnKTtcclxuICAgICAgICB0cmFucyA9IGF3YWl0IG1vZC5jcmVhdGUoYW5pbWF0aW9uQnVpbGRlciwgb3B0cy5iYXNlRWwsIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRyYW5zID0gYW5pbWF0aW9uQnVpbGRlcihvcHRzLmJhc2VFbCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICBmaXJlV2lsbEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcclxuICAgIGNvbnN0IGRpZENvbXBsZXRlID0gYXdhaXQgcGxheVRyYW5zaXRpb24odHJhbnMsIG9wdHMpO1xyXG4gICAgaWYgKG9wdHMucHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIG9wdHMucHJvZ3Jlc3NDYWxsYmFjayh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpZENvbXBsZXRlKSB7XHJcbiAgICAgICAgZmlyZURpZEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFzQ29tcGxldGVkOiBkaWRDb21wbGV0ZSxcclxuICAgICAgICBhbmltYXRpb246IHRyYW5zXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCBub0FuaW1hdGlvbiA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBhd2FpdCB3YWl0Rm9yUmVhZHkob3B0cywgZmFsc2UpO1xyXG4gICAgZmlyZVdpbGxFdmVudHMoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKTtcclxuICAgIGZpcmVEaWRFdmVudHMoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFzQ29tcGxldGVkOiB0cnVlXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCB3YWl0Rm9yUmVhZHkgPSBhc3luYyAob3B0cywgZGVmYXVsdERlZXApID0+IHtcclxuICAgIGNvbnN0IGRlZXAgPSBvcHRzLmRlZXBXYWl0ICE9PSB1bmRlZmluZWQgPyBvcHRzLmRlZXBXYWl0IDogZGVmYXVsdERlZXA7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IGRlZXAgPyBbXHJcbiAgICAgICAgZGVlcFJlYWR5KG9wdHMuZW50ZXJpbmdFbCksXHJcbiAgICAgICAgZGVlcFJlYWR5KG9wdHMubGVhdmluZ0VsKSxcclxuICAgIF0gOiBbXHJcbiAgICAgICAgc2hhbGxvd1JlYWR5KG9wdHMuZW50ZXJpbmdFbCksXHJcbiAgICAgICAgc2hhbGxvd1JlYWR5KG9wdHMubGVhdmluZ0VsKSxcclxuICAgIF07XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICBhd2FpdCBub3RpZnlWaWV3UmVhZHkob3B0cy52aWV3SXNSZWFkeSwgb3B0cy5lbnRlcmluZ0VsKTtcclxufTtcclxuY29uc3Qgbm90aWZ5Vmlld1JlYWR5ID0gYXN5bmMgKHZpZXdJc1JlYWR5LCBlbnRlcmluZ0VsKSA9PiB7XHJcbiAgICBpZiAodmlld0lzUmVhZHkpIHtcclxuICAgICAgICBhd2FpdCB2aWV3SXNSZWFkeShlbnRlcmluZ0VsKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgcGxheVRyYW5zaXRpb24gPSAodHJhbnMsIG9wdHMpID0+IHtcclxuICAgIGNvbnN0IHByb2dyZXNzQ2FsbGJhY2sgPSBvcHRzLnByb2dyZXNzQ2FsbGJhY2s7XHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgQW5pbWF0aW9uQnVpbGRlclxyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHRyYW5zLm9uRmluaXNoKChjdXJyZW50U3RlcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50U3RlcCA9PT0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHJhbnMuaGFzQ29tcGxldGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJhbnMuaGFzQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb29sLCBsZXQncyBkbyB0aGlzLCBzdGFydCB0aGUgdHJhbnNpdGlvblxyXG4gICAgaWYgKHByb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAvLyB0aGlzIGlzIGEgc3dpcGUgdG8gZ28gYmFjaywganVzdCBnZXQgdGhlIHRyYW5zaXRpb24gcHJvZ3Jlc3MgcmVhZHlcclxuICAgICAgICAvLyBraWNrIG9mZiB0aGUgc3dpcGUgYW5pbWF0aW9uIHN0YXJ0XHJcbiAgICAgICAgdHJhbnMucHJvZ3Jlc3NTdGFydCh0cnVlKTtcclxuICAgICAgICBwcm9ncmVzc0NhbGxiYWNrKHRyYW5zKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG9ubHkgdGhlIHRvcCBsZXZlbCB0cmFuc2l0aW9uIHNob3VsZCBhY3R1YWxseSBzdGFydCBcInBsYXlcIlxyXG4gICAgICAgIC8vIGtpY2sgaXQgb2ZmIGFuZCBsZXQgaXQgcGxheSB0aHJvdWdoXHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICB0cmFucy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGRvbmVcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG59O1xyXG5jb25zdCBmaXJlV2lsbEV2ZW50cyA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwpID0+IHtcclxuICAgIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9XSUxMX0xFQVZFKTtcclxuICAgIGxpZmVjeWNsZShlbnRlcmluZ0VsLCBMSUZFQ1lDTEVfV0lMTF9FTlRFUik7XHJcbn07XHJcbmNvbnN0IGZpcmVEaWRFdmVudHMgPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XHJcbiAgICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX0RJRF9FTlRFUik7XHJcbiAgICBsaWZlY3ljbGUobGVhdmluZ0VsLCBMSUZFQ1lDTEVfRElEX0xFQVZFKTtcclxufTtcclxuY29uc3QgbGlmZWN5Y2xlID0gKGVsLCBldmVudE5hbWUpID0+IHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xyXG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldik7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNoYWxsb3dSZWFkeSA9IChlbCkgPT4ge1xyXG4gICAgaWYgKGVsICYmIGVsLmNvbXBvbmVudE9uUmVhZHkpIHtcclxuICAgICAgICByZXR1cm4gZWwuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59O1xyXG5jb25zdCBkZWVwUmVhZHkgPSBhc3luYyAoZWwpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY29tcG9uZW50T25SZWFkeSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZW5jaWxFbCA9IGF3YWl0IGVsZW1lbnQuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgICAgICAgICBpZiAoc3RlbmNpbEVsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLm1hcChkZWVwUmVhZHkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc2V0UGFnZUhpZGRlbiA9IChlbCwgaGlkZGVuKSA9PiB7XHJcbiAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaW9uLXBhZ2UtaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaGlkZGVuJyk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNldFpJbmRleCA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGVudGVyaW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVudGVyaW5nRWwuc3R5bGUuekluZGV4ID0gKGRpcmVjdGlvbiA9PT0gJ2JhY2snKVxyXG4gICAgICAgICAgICA/ICc5OSdcclxuICAgICAgICAgICAgOiAnMTAxJztcclxuICAgIH1cclxuICAgIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxlYXZpbmdFbC5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgIH1cclxufTtcclxuY29uc3QgZ2V0SW9uUGFnZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpb25QYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJyk7XHJcbiAgICBpZiAoaW9uUGFnZSkge1xyXG4gICAgICAgIHJldHVybiBpb25QYWdlO1xyXG4gICAgfVxyXG4gICAgLy8gaWRrLCByZXR1cm4gdGhlIG9yaWdpbmFsIGVsZW1lbnQgc28gYXQgbGVhc3Qgc29tZXRoaW5nIGFuaW1hdGVzIGFuZCB3ZSBkb24ndCBoYXZlIGEgbnVsbCBwb2ludGVyXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcblxuZXhwb3J0IHsgZGVlcFJlYWR5IGFzIGQsIGdldElvblBhZ2VFbGVtZW50IGFzIGcsIGxpZmVjeWNsZSBhcyBsLCBzZXRQYWdlSGlkZGVuIGFzIHMsIHRyYW5zaXRpb24gYXMgdCB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50LCBjIGFzIGNyZWF0ZUV2ZW50LCBmIGFzIHJlYWRUYXNrLCB3IGFzIHdyaXRlVGFzayB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZywgaSBhcyBpc1BsYXRmb3JtIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYyBhcyBjbGFtcCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgJy4vY29uc3RhbnRzLTNjM2UxMDk5LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBhIGFzIGF0dGFjaENvbXBvbmVudCwgZCBhcyBkZXRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyc7XG5pbXBvcnQgeyB0IGFzIHRyYW5zaXRpb24gfSBmcm9tICcuL2luZGV4LTY4MjZmMmY2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24sIFAgYXMgUG9pbnQgfSBmcm9tICcuL2N1YmljLWJlemllci0yODEyZmRhMy5qcyc7XG5cbmNvbnN0IEFwcCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJJQygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNIeWJyaWQgPSBpc1BsYXRmb3JtKHdpbmRvdywgJ2h5YnJpZCcpO1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmdldEJvb2xlYW4oJ190ZXN0aW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL3RhcC1jbGljay1jYTAwY2U3Zi5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydFRhcENsaWNrKGNvbmZpZykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ3N0YXR1c1RhcCcsIGlzSHlicmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vc3RhdHVzLXRhcC1hMGRmODI4NC5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydFN0YXR1c1RhcCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdpbnB1dFNoaW1zJywgbmVlZElucHV0U2hpbXMoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL2lucHV0LXNoaW1zLWE0ZmM1M2FjLmpzJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLnN0YXJ0SW5wdXRTaGltcyhjb25maWcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdoYXJkd2FyZUJhY2tCdXR0b24nLCBpc0h5YnJpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTVhZmUzY2IwLmpzJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLnN0YXJ0SGFyZHdhcmVCYWNrQnV0dG9uKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZm9jdXMtdmlzaWJsZS03MDcxM2EwYy5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydEZvY3VzVmlzaWJsZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tcGFnZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2ZvcmNlLXN0YXR1c2Jhci1wYWRkaW5nJzogY29uZmlnLmdldEJvb2xlYW4oJ19mb3JjZVN0YXR1c2JhclBhZGRpbmcnKVxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJodG1sLnBsdC1tb2JpbGUgaW9uLWFwcHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9aW9uLWFwcC5mb3JjZS1zdGF0dXNiYXItcGFkZGluZ3stLWlvbi1zYWZlLWFyZWEtdG9wOjIwcHh9XCI7IH1cbn07XG5jb25zdCBuZWVkSW5wdXRTaGltcyA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNQbGF0Zm9ybSh3aW5kb3csICdpb3MnKSAmJiBpc1BsYXRmb3JtKHdpbmRvdywgJ21vYmlsZScpO1xufTtcbmNvbnN0IHJJQyA9IChjYWxsYmFjaykgPT4ge1xuICAgIGlmICgncmVxdWVzdElkbGVDYWxsYmFjaycgaW4gd2luZG93KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDMyKTtcbiAgICB9XG59O1xuXG5jb25zdCBCdXR0b25zID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRydWUsIGJ1dHRvbnMgd2lsbCBkaXNhcHBlYXIgd2hlbiBpdHNcbiAgICAgICAgICogcGFyZW50IHRvb2xiYXIgaGFzIGZ1bGx5IGNvbGxhcHNlZCBpZiB0aGUgdG9vbGJhclxuICAgICAgICAgKiBpcyBub3QgdGhlIGZpcnN0IHRvb2xiYXIuIElmIHRoZSB0b29sYmFyIGlzIHRoZVxuICAgICAgICAgKiBmaXJzdCB0b29sYmFyLCB0aGUgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiBhbmQgd2lsbFxuICAgICAgICAgKiBvbmx5IGJlIHNob3duIG9uY2UgYWxsIHRvb2xiYXJzIGhhdmUgZnVsbHkgY29sbGFwc2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgaW4gYGlvc2AgbW9kZSB3aXRoIGBjb2xsYXBzZWAgc2V0IHRvXG4gICAgICAgICAqIGB0cnVlYCBvbiBgaW9uLWhlYWRlcmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFR5cGljYWxseSB1c2VkIGZvciBbQ29sbGFwc2libGUgTGFyZ2UgVGl0bGVzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS90aXRsZSNjb2xsYXBzaWJsZS1sYXJnZS10aXRsZXMpXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbGxhcHNlID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgIFsnYnV0dG9ucy1jb2xsYXBzZSddOiB0aGlzLmNvbGxhcHNlXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiLnNjLWlvbi1idXR0b25zLWlvcy1oe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt6LWluZGV4Ojk5fS5zYy1pb24tYnV0dG9ucy1pb3MtcyAgaW9uLWJ1dHRvbiB7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LS1wYWRkaW5nLXN0YXJ0OjVweDstLXBhZGRpbmctZW5kOjVweDttYXJnaW4tbGVmdDoycHg7bWFyZ2luLXJpZ2h0OjJweDtoZWlnaHQ6MzJweDtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo0MDB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zYy1pb24tYnV0dG9ucy1pb3MtcyAgaW9uLWJ1dHRvbiB7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweH19LnNjLWlvbi1idXR0b25zLWlvcy1zICBpb24tYnV0dG9uOm5vdCguYnV0dG9uLXJvdW5kKSB7LS1ib3JkZXItcmFkaXVzOjRweH0uc2MtaW9uLWJ1dHRvbnMtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uICwgLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtaW9zLWguc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24gey0tY29sb3I6aW5pdGlhbDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC4xKX0uc2MtaW9uLWJ1dHRvbnMtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLXNvbGlkICwgLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtaW9zLWguc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24tc29saWQgey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwwLjgpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC42KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5zYy1pb24tYnV0dG9ucy1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24tY2xlYXIgLCAuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1jbGVhciB7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwwLjEpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LnNjLWlvbi1idXR0b25zLWlvcy1oLmlvbi1jb2xvci5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1vdXRsaW5lICwgLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtaW9zLWguc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24tb3V0bGluZSB7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC4xKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LnNjLWlvbi1idXR0b25zLWlvcy1oaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLWNsZWFyICwgaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1jbGVhciB7LS1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSk7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3ItYWN0aXZhdGVkLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpfS5zYy1pb24tYnV0dG9ucy1pb3MtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1vdXRsaW5lICwgaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1vdXRsaW5lIHstLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpKTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpKX0uc2MtaW9uLWJ1dHRvbnMtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24tc29saWQgLCBpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikgLnNjLWlvbi1idXR0b25zLWlvcy1oLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLXNvbGlkIHstLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2ZmZikpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2ZmZikpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCNmZmYpKTstLWJhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3ItYWN0aXZhdGVkLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCMzMTcxZTApKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvci1hY3RpdmF0ZWQsdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsIzMxNzFlMCkpfS5zYy1pb24tYnV0dG9ucy1pb3MtcyAgaW9uLWljb25bc2xvdD1zdGFydF0ge21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDttYXJnaW4tcmlnaHQ6LjNlbTtmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDouNjd9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zYy1pb24tYnV0dG9ucy1pb3MtcyAgaW9uLWljb25bc2xvdD1zdGFydF0ge21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1lbmQ6LjNlbTttYXJnaW4taW5saW5lLWVuZDouM2VtfX0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIGlvbi1pY29uW3Nsb3Q9ZW5kXSB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1sZWZ0Oi40ZW07Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6LjY3fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIGlvbi1pY29uW3Nsb3Q9ZW5kXSB7bWFyZ2luLWxlZnQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LjRlbTttYXJnaW4taW5saW5lLXN0YXJ0Oi40ZW19fS5zYy1pb24tYnV0dG9ucy1pb3MtcyAgaW9uLWljb25bc2xvdD1pY29uLW9ubHldIHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6MzFweDtsaW5lLWhlaWdodDouNjd9XCI7IH1cbn07XG5cbmNvbnN0IENvbnRlbnQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFNjcm9sbCA9IDA7XG4gICAgICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY1RvcCA9IC0xO1xuICAgICAgICB0aGlzLmNCb3R0b20gPSAtMTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLy8gRGV0YWlsIGlzIHVzZWQgaW4gYSBob3QgbG9vcCBpbiB0aGUgc2Nyb2xsIGV2ZW50LCBieSBhbGxvY2F0aW5nIGl0IGhlcmVcbiAgICAgICAgLy8gVjggd2lsbCBiZSBhYmxlIHRvIGlubGluZSBhbnkgcmVhZC93cml0ZSB0byBpdCBzaW5jZSBpdCdzIGEgbW9ub21vcnBoaWMgY2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vbXJhbGUucGgvYmxvZy8yMDE1LzAxLzExL3doYXRzLXVwLXdpdGgtbW9ub21vcnBoaXNtLmh0bWxcbiAgICAgICAgdGhpcy5kZXRhaWwgPSB7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgICAgICAgdHlwZTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBldmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICAgICAgc3RhcnRUaW1lU3RhbXA6IDAsXG4gICAgICAgICAgICBjdXJyZW50WDogMCxcbiAgICAgICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICAgICAgdmVsb2NpdHlYOiAwLFxuICAgICAgICAgICAgdmVsb2NpdHlZOiAwLFxuICAgICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgICAgZGVsdGFZOiAwLFxuICAgICAgICAgICAgdGltZVN0YW1wOiAwLFxuICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb250ZW50IHdpbGwgc2Nyb2xsIGJlaGluZCB0aGUgaGVhZGVyc1xuICAgICAgICAgKiBhbmQgZm9vdGVycy4gVGhpcyBlZmZlY3QgY2FuIGVhc2lseSBiZSBzZWVuIGJ5IHNldHRpbmcgdGhlIHRvb2xiYXJcbiAgICAgICAgICogdG8gdHJhbnNwYXJlbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHlvdSB3YW50IHRvIGVuYWJsZSB0aGUgY29udGVudCBzY3JvbGxpbmcgaW4gdGhlIFggYXhpcywgc2V0IHRoaXMgcHJvcGVydHkgdG8gYHRydWVgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY3JvbGxYID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHRoZSBjb250ZW50IHNjcm9sbGluZyBpbiB0aGUgWSBheGlzLCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY3JvbGxZID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucywgaW9uU2Nyb2xsIGV2ZW50cyBhcmUgZGlzYWJsZWQgYnkgZGVmYXVsdCwgaW4gb3JkZXIgdG8gZW5hYmxlIHRoZW1cbiAgICAgICAgICogYW5kIHN0YXJ0IGxpc3RlbmluZyBmcm9tIChpb25TY3JvbGwpLCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgdHJ1ZWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjcm9sbEV2ZW50cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvblNjcm9sbFN0YXJ0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TY3JvbGxTdGFydFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TY3JvbGwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNjcm9sbFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TY3JvbGxFbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNjcm9sbEVuZFwiLCA3KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMub25TY3JvbGxFbmQoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9XG4gICAgb25DbGljayhldikge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZEZvcmNlT3ZlcnNjcm9sbCgpIHtcbiAgICAgICAgY29uc3QgeyBmb3JjZU92ZXJzY3JvbGwsIG1vZGUgfSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmb3JjZU92ZXJzY3JvbGwgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBtb2RlID09PSAnaW9zJyAmJiBpc1BsYXRmb3JtKCdpb3MnKVxuICAgICAgICAgICAgOiBmb3JjZU92ZXJzY3JvbGw7XG4gICAgfVxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xuICAgICAgICAgICAgcmVhZFRhc2sodGhpcy5yZWFkRGltZW5zaW9ucy5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNUb3AgIT09IDAgfHwgdGhpcy5jQm90dG9tICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNUb3AgPSB0aGlzLmNCb3R0b20gPSAwO1xuICAgICAgICAgICAgdGhpcy5lbC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlYWREaW1lbnNpb25zKCkge1xuICAgICAgICBjb25zdCBwYWdlID0gZ2V0UGFnZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMuZWwub2Zmc2V0VG9wLCAwKTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gTWF0aC5tYXgocGFnZS5vZmZzZXRIZWlnaHQgLSB0b3AgLSB0aGlzLmVsLm9mZnNldEhlaWdodCwgMCk7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gdG9wICE9PSB0aGlzLmNUb3AgfHwgYm90dG9tICE9PSB0aGlzLmNCb3R0b207XG4gICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5jVG9wID0gdG9wO1xuICAgICAgICAgICAgdGhpcy5jQm90dG9tID0gYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5lbC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uU2Nyb2xsKGV2KSB7XG4gICAgICAgIGNvbnN0IHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHNob3VsZFN0YXJ0ID0gIXRoaXMuaXNTY3JvbGxpbmc7XG4gICAgICAgIHRoaXMubGFzdFNjcm9sbCA9IHRpbWVTdGFtcDtcbiAgICAgICAgaWYgKHNob3VsZFN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU2Nyb2xsU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucXVldWVkICYmIHRoaXMuc2Nyb2xsRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICByZWFkVGFzayh0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbC5ldmVudCA9IGV2O1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcm9sbERldGFpbCh0aGlzLmRldGFpbCwgdGhpcy5zY3JvbGxFbCwgdHMsIHNob3VsZFN0YXJ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlvblNjcm9sbC5lbWl0KHRoaXMuZGV0YWlsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgYWN0dWFsIHNjcm9sbGluZyB0YWtlcyBwbGFjZS5cbiAgICAgKiBUaGlzIGVsZW1lbnQgY2FuIGJlIHVzZWQgdG8gc3Vic2NyaWJlIHRvIGBzY3JvbGxgIGV2ZW50cyBvciBtYW51YWxseSBtb2RpZnlcbiAgICAgKiBgc2Nyb2xsVG9wYC4gSG93ZXZlciwgaXQncyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIEFQSSBwcm92aWRlZCBieSBgaW9uLWNvbnRlbnRgOlxuICAgICAqXG4gICAgICogaS5lLiBVc2luZyBgaW9uU2Nyb2xsYCwgYGlvblNjcm9sbFN0YXJ0YCwgYGlvblNjcm9sbEVuZGAgZm9yIHNjcm9sbGluZyBldmVudHNcbiAgICAgKiBhbmQgYHNjcm9sbFRvUG9pbnQoKWAgdG8gc2Nyb2xsIHRoZSBjb250ZW50IGludG8gYSBjZXJ0YWluIHBvaW50LlxuICAgICAqL1xuICAgIGdldFNjcm9sbEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zY3JvbGxFbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIHRvIHRoZSB0b3AuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICBzY3JvbGxUb1RvcChkdXJhdGlvbiA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9Qb2ludCh1bmRlZmluZWQsIDAsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbS4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKGR1cmF0aW9uID0gMCkge1xuICAgICAgICBjb25zdCB5ID0gdGhpcy5zY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB0aGlzLnNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9Qb2ludCh1bmRlZmluZWQsIHksIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGJ5IGEgc3BlY2lmaWVkIFgvWSBkaXN0YW5jZSBpbiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHggVGhlIGFtb3VudCB0byBzY3JvbGwgYnkgb24gdGhlIGhvcml6b250YWwgYXhpcy5cbiAgICAgKiBAcGFyYW0geSBUaGUgYW1vdW50IHRvIHNjcm9sbCBieSBvbiB0aGUgdmVydGljYWwgYXhpcy5cbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIGJ5IHRoYXQgYW1vdW50LlxuICAgICAqL1xuICAgIHNjcm9sbEJ5UG9pbnQoeCwgeSwgZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9Qb2ludCh4ICsgdGhpcy5zY3JvbGxFbC5zY3JvbGxMZWZ0LCB5ICsgdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgc3BlY2lmaWVkIFgvWSBsb2NhdGlvbiBpbiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHggVGhlIHBvaW50IHRvIHNjcm9sbCB0byBvbiB0aGUgaG9yaXpvbnRhbCBheGlzLlxuICAgICAqIEBwYXJhbSB5IFRoZSBwb2ludCB0byBzY3JvbGwgdG8gb24gdGhlIHZlcnRpY2FsIGF4aXMuXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB0byB0YWtlIHNjcm9sbGluZyB0byB0aGF0IHBvaW50LiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgYXN5bmMgc2Nyb2xsVG9Qb2ludCh4LCB5LCBkdXJhdGlvbiA9IDApIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgICAgICBpZiAoZHVyYXRpb24gPCAzMikge1xuICAgICAgICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc29sdmU7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSAwO1xuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UociA9PiByZXNvbHZlID0gcik7XG4gICAgICAgIGNvbnN0IGZyb21ZID0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBmcm9tWCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IHkgIT0gbnVsbCA/IHkgLSBmcm9tWSA6IDA7XG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IHggIT0gbnVsbCA/IHggLSBmcm9tWCA6IDA7XG4gICAgICAgIC8vIHNjcm9sbCBsb29wXG4gICAgICAgIGNvbnN0IHN0ZXAgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5lYXJUaW1lID0gTWF0aC5taW4oMSwgKCh0aW1lU3RhbXAgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pKSAtIDE7XG4gICAgICAgICAgICBjb25zdCBlYXNlZFQgPSBNYXRoLnBvdyhsaW5lYXJUaW1lLCAzKSArIDE7XG4gICAgICAgICAgICBpZiAoZGVsdGFZICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZWwuc2Nyb2xsVG9wID0gTWF0aC5mbG9vcigoZWFzZWRUICogZGVsdGFZKSArIGZyb21ZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWx0YVggIT09IDApIHtcbiAgICAgICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcigoZWFzZWRUICogZGVsdGFYKSArIGZyb21YKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlYXNlZFQgPCAxKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IHVzZSBEb21Db250cm9sbGVyIGhlcmVcbiAgICAgICAgICAgICAgICAvLyBtdXN0IHVzZSBuYXRpdmVSYWYgaW4gb3JkZXIgdG8gZmlyZSBpbiB0aGUgbmV4dCBmcmFtZVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBhcyBhbnlcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNoaWxsIG91dCBmb3IgYSBmcmFtZSBmaXJzdFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodHMgPT4ge1xuICAgICAgICAgICAgc3RhcnRUaW1lID0gdHM7XG4gICAgICAgICAgICBzdGVwKHRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBvblNjcm9sbFN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pb25TY3JvbGxTdGFydC5lbWl0KHtcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy53YXRjaERvZykge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoRG9nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3YXRjaGRvZ1xuICAgICAgICB0aGlzLndhdGNoRG9nID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFNjcm9sbCA8IERhdGUubm93KCkgLSAxMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuICAgIG9uU2Nyb2xsRW5kKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMud2F0Y2hEb2cpO1xuICAgICAgICB0aGlzLndhdGNoRG9nID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW9uU2Nyb2xsRW5kLmVtaXQoe1xuICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBmb3JjZU92ZXJzY3JvbGwgPSB0aGlzLnNob3VsZEZvcmNlT3ZlcnNjcm9sbCgpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uU2hhZG93ID0gKG1vZGUgPT09ICdpb3MnICYmIGNvbmZpZy5nZXRCb29sZWFuKCdleHBlcmltZW50YWxUcmFuc2l0aW9uU2hhZG93JywgdHJ1ZSkpO1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCB7IFttb2RlXTogdHJ1ZSwgJ2NvbnRlbnQtc2l6aW5nJzogaG9zdENvbnRleHQoJ2lvbi1wb3BvdmVyJywgdGhpcy5lbCksICdvdmVyc2Nyb2xsJzogZm9yY2VPdmVyc2Nyb2xsIH0pLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICctLW9mZnNldC10b3AnOiBgJHt0aGlzLmNUb3B9cHhgLFxuICAgICAgICAgICAgICAgICctLW9mZnNldC1ib3R0b20nOiBgJHt0aGlzLmNCb3R0b219cHhgLFxuICAgICAgICAgICAgfSB9LCBoKFwibWFpblwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2lubmVyLXNjcm9sbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbC14Jzogc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsLXknOiBzY3JvbGxZLFxuICAgICAgICAgICAgICAgICdvdmVyc2Nyb2xsJzogKHNjcm9sbFggfHwgc2Nyb2xsWSkgJiYgZm9yY2VPdmVyc2Nyb2xsXG4gICAgICAgICAgICB9LCByZWY6IGVsID0+IHRoaXMuc2Nyb2xsRWwgPSBlbCwgb25TY3JvbGw6IGV2ID0+IHRoaXMub25TY3JvbGwoZXYpIH0sIGgoXCJzbG90XCIsIG51bGwpKSwgdHJhbnNpdGlvblNoYWRvdyA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhbnNpdGlvbi1lZmZlY3RcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhbnNpdGlvbi1jb3ZlclwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhbnNpdGlvbi1zaGFkb3dcIiB9KSkpIDogbnVsbCwgaChcInNsb3RcIiwgeyBuYW1lOiBcImZpeGVkXCIgfSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTstLWNvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApOy0tcGFkZGluZy10b3A6MHB4Oy0tcGFkZGluZy1ib3R0b206MHB4Oy0tcGFkZGluZy1zdGFydDowcHg7LS1wYWRkaW5nLWVuZDowcHg7LS1rZXlib2FyZC1vZmZzZXQ6MHB4Oy0tb2Zmc2V0LXRvcDowcHg7LS1vZmZzZXQtYm90dG9tOjBweDstLW92ZXJmbG93OmF1dG87ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOnNpemUgc3R5bGV9Omhvc3QoLmlvbi1jb2xvcikgLmlubmVyLXNjcm9sbHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5vdXRlci1jb250ZW50KXstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2YyZjJmMil9LmlubmVyLXNjcm9sbHtsZWZ0OjA7cmlnaHQ6MDt0b3A6Y2FsYyh2YXIoLS1vZmZzZXQtdG9wKSAqIC0xKTtib3R0b206Y2FsYyh2YXIoLS1vZmZzZXQtYm90dG9tKSAqIC0xKTtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6Y2FsYyh2YXIoLS1wYWRkaW5nLXRvcCkgKyB2YXIoLS1vZmZzZXQtdG9wKSk7cGFkZGluZy1ib3R0b206Y2FsYyh2YXIoLS1wYWRkaW5nLWJvdHRvbSkgKyB2YXIoLS1rZXlib2FyZC1vZmZzZXQpICsgdmFyKC0tb2Zmc2V0LWJvdHRvbSkpO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW59XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5pbm5lci1zY3JvbGx7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fS5zY3JvbGwteCwuc2Nyb2xsLXl7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7d2lsbC1jaGFuZ2U6c2Nyb2xsLXBvc2l0aW9uOy1tcy1zY3JvbGwtY2hhaW5pbmc6bm9uZTtvdmVyc2Nyb2xsLWJlaGF2aW9yOmNvbnRhaW59LnNjcm9sbC15ey1tcy10b3VjaC1hY3Rpb246cGFuLXk7dG91Y2gtYWN0aW9uOnBhbi15O292ZXJmbG93LXk6dmFyKC0tb3ZlcmZsb3cpfS5zY3JvbGwteHstbXMtdG91Y2gtYWN0aW9uOnBhbi14O3RvdWNoLWFjdGlvbjpwYW4teDtvdmVyZmxvdy14OnZhcigtLW92ZXJmbG93KX0uc2Nyb2xsLXguc2Nyb2xsLXl7LW1zLXRvdWNoLWFjdGlvbjphdXRvO3RvdWNoLWFjdGlvbjphdXRvfS5vdmVyc2Nyb2xsOmFmdGVyLC5vdmVyc2Nyb2xsOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7aGVpZ2h0OjFweDtjb250ZW50OlxcXCJcXFwifS5vdmVyc2Nyb2xsOmJlZm9yZXtib3R0b206LTFweH0ub3ZlcnNjcm9sbDphZnRlcnt0b3A6LTFweH06aG9zdCguY29udGVudC1zaXppbmcpe2NvbnRhaW46bm9uZX06aG9zdCguY29udGVudC1zaXppbmcpIC5pbm5lci1zY3JvbGx7cG9zaXRpb246cmVsYXRpdmV9LnRyYW5zaXRpb24tZWZmZWN0e2xlZnQ6LTEwMCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LnRyYW5zaXRpb24tY292ZXIsLnRyYW5zaXRpb24tZWZmZWN0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnRyYW5zaXRpb24tY292ZXJ7cmlnaHQ6MDtiYWNrZ3JvdW5kOiMwMDA7b3BhY2l0eTouMX0udHJhbnNpdGlvbi1zaGFkb3d7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3dpZHRoOjEwcHg7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFnQ0FZQUFBQUlYcmc0QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5aHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFExSURjNUxqRTJNelE1T1N3Z01qQXhPQzh3T0M4eE15MHhOam8wTURveU1pQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tFMWhZMmx1ZEc5emFDa2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNVEUzTURnelJrUTVRVGt5TVRGRk9VRXdOelE1TWtKRlJFRTFOVVkyTWpRaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk1URTNNRGd6UmtVNVFUa3lNVEZGT1VFd056UTVNa0pGUkVFMU5VWTJNalFpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRveE1UY3dPRE5HUWpsQk9USXhNVVU1UVRBM05Ea3lRa1ZFUVRVMVJqWXlOQ0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG94TVRjd09ETkdRemxCT1RJeE1VVTVRVEEzTkRreVFrVkVRVFUxUmpZeU5DSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbWVQRXVRQUFBQk5TVVJCVkhqYVl2ei8vejhESXhBd01EQXdBVEdNaG1GbVBEUXVPU1prczBBTW1vSkJhUUhqa1BmQjBMZmcvMmdRalZvdytIUHkveUh2ZzlHaVlqUWZqTWJCcUFXakZneS80aG9nd0FEWXF3ZHp4eTVCdXdBQUFBQkpSVTVFcmtKZ2dnPT0pO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC15O2JhY2tncm91bmQtc2l6ZToxMHB4IDE2cHh9XCI7IH1cbn07XG5jb25zdCBnZXRQYXJlbnRFbGVtZW50ID0gKGVsKSA9PiB7XG4gICAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgLy8gbm9ybWFsIGVsZW1lbnQgd2l0aCBhIHBhcmVudCBlbGVtZW50XG4gICAgICAgIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLmhvc3QpIHtcbiAgICAgICAgLy8gc2hhZG93IGRvbSdzIGRvY3VtZW50IGZyYWdtZW50XG4gICAgICAgIHJldHVybiBlbC5wYXJlbnROb2RlLmhvc3Q7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldFBhZ2VFbGVtZW50ID0gKGVsKSA9PiB7XG4gICAgY29uc3QgdGFicyA9IGVsLmNsb3Nlc3QoJ2lvbi10YWJzJyk7XG4gICAgaWYgKHRhYnMpIHtcbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfVxuICAgIGNvbnN0IHBhZ2UgPSBlbC5jbG9zZXN0KCdpb24tYXBwLGlvbi1wYWdlLC5pb24tcGFnZSxwYWdlLWlubmVyJyk7XG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICAgIHJldHVybiBnZXRQYXJlbnRFbGVtZW50KGVsKTtcbn07XG4vLyAqKioqKioqKiBET00gUkVBRCAqKioqKioqKioqKioqKioqXG5jb25zdCB1cGRhdGVTY3JvbGxEZXRhaWwgPSAoZGV0YWlsLCBlbCwgdGltZXN0YW1wLCBzaG91bGRTdGFydCkgPT4ge1xuICAgIGNvbnN0IHByZXZYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgIGNvbnN0IHByZXZZID0gZGV0YWlsLmN1cnJlbnRZO1xuICAgIGNvbnN0IHByZXZUID0gZGV0YWlsLnRpbWVTdGFtcDtcbiAgICBjb25zdCBjdXJyZW50WCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgY29uc3QgY3VycmVudFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgY29uc3QgdGltZURlbHRhID0gdGltZXN0YW1wIC0gcHJldlQ7XG4gICAgaWYgKHNob3VsZFN0YXJ0KSB7XG4gICAgICAgIC8vIHJlbWVtYmVyIHRoZSBzdGFydCBwb3NpdGlvbnNcbiAgICAgICAgZGV0YWlsLnN0YXJ0VGltZVN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICBkZXRhaWwuc3RhcnRYID0gY3VycmVudFg7XG4gICAgICAgIGRldGFpbC5zdGFydFkgPSBjdXJyZW50WTtcbiAgICAgICAgZGV0YWlsLnZlbG9jaXR5WCA9IGRldGFpbC52ZWxvY2l0eVkgPSAwO1xuICAgIH1cbiAgICBkZXRhaWwudGltZVN0YW1wID0gdGltZXN0YW1wO1xuICAgIGRldGFpbC5jdXJyZW50WCA9IGRldGFpbC5zY3JvbGxMZWZ0ID0gY3VycmVudFg7XG4gICAgZGV0YWlsLmN1cnJlbnRZID0gZGV0YWlsLnNjcm9sbFRvcCA9IGN1cnJlbnRZO1xuICAgIGRldGFpbC5kZWx0YVggPSBjdXJyZW50WCAtIGRldGFpbC5zdGFydFg7XG4gICAgZGV0YWlsLmRlbHRhWSA9IGN1cnJlbnRZIC0gZGV0YWlsLnN0YXJ0WTtcbiAgICBpZiAodGltZURlbHRhID4gMCAmJiB0aW1lRGVsdGEgPCAxMDApIHtcbiAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKGN1cnJlbnRYIC0gcHJldlgpIC8gdGltZURlbHRhO1xuICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoY3VycmVudFkgLSBwcmV2WSkgLyB0aW1lRGVsdGE7XG4gICAgICAgIGRldGFpbC52ZWxvY2l0eVggPSB2ZWxvY2l0eVggKiAwLjcgKyBkZXRhaWwudmVsb2NpdHlYICogMC4zO1xuICAgICAgICBkZXRhaWwudmVsb2NpdHlZID0gdmVsb2NpdHlZICogMC43ICsgZGV0YWlsLnZlbG9jaXR5WSAqIDAuMztcbiAgICB9XG59O1xuXG5jb25zdCBGb290ZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZm9vdGVyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogSW4gb3JkZXIgdG8gc2Nyb2xsIGNvbnRlbnQgYmVoaW5kIHRoZSBmb290ZXIsIHRoZSBgZnVsbHNjcmVlbmBcbiAgICAgICAgICogYXR0cmlidXRlIG5lZWRzIHRvIGJlIHNldCBvbiB0aGUgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgdHJhbnNsdWNlbnQgPSB0aGlzLnRyYW5zbHVjZW50O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImNvbnRlbnRpbmZvXCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIFtgZm9vdGVyLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBbYGZvb3Rlci10cmFuc2x1Y2VudGBdOiB0cmFuc2x1Y2VudCxcbiAgICAgICAgICAgICAgICBbYGZvb3Rlci10cmFuc2x1Y2VudC0ke21vZGV9YF06IHRyYW5zbHVjZW50LFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcImlvbi1mb290ZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1vcmRlcjoxO29yZGVyOjE7d2lkdGg6MTAwJTt6LWluZGV4OjEwfWlvbi1mb290ZXIgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwwKX0uZm9vdGVyLWlvcyBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZHstLWJvcmRlci13aWR0aDowLjU1cHggMCAwfS5mb290ZXItaW9zW25vLWJvcmRlcl0gaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGR7LS1ib3JkZXItd2lkdGg6MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkpey5mb290ZXItdHJhbnNsdWNlbnQtaW9zey13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7YmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCl9LmZvb3Rlci10cmFuc2x1Y2VudC1pb3MgaW9uLXRvb2xiYXJ7LS1vcGFjaXR5Oi44Oy0tYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCl9fVwiOyB9XG59O1xuXG5jb25zdCBUUkFOU0lUSU9OID0gJ2FsbCAwLjJzIGVhc2UtaW4tb3V0JztcclxuY29uc3QgY2xvbmVFbGVtZW50ID0gKHRhZ05hbWUpID0+IHtcclxuICAgIGNvbnN0IGdldENhY2hlZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0YWdOYW1lfS5pb24tY2xvbmVkLWVsZW1lbnRgKTtcclxuICAgIGlmIChnZXRDYWNoZWRFbCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBnZXRDYWNoZWRFbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsb25lZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgIGNsb25lZEVsLmNsYXNzTGlzdC5hZGQoJ2lvbi1jbG9uZWQtZWxlbWVudCcpO1xyXG4gICAgY2xvbmVkRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbCk7XHJcbiAgICByZXR1cm4gY2xvbmVkRWw7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUhlYWRlckluZGV4ID0gKGhlYWRlckVsKSA9PiB7XHJcbiAgICBpZiAoIWhlYWRlckVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9vbGJhcnMgPSBoZWFkZXJFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tdG9vbGJhcicpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbDogaGVhZGVyRWwsXHJcbiAgICAgICAgdG9vbGJhcnM6IEFycmF5LmZyb20odG9vbGJhcnMpLm1hcCgodG9vbGJhcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpb25UaXRsZUVsID0gdG9vbGJhci5xdWVyeVNlbGVjdG9yKCdpb24tdGl0bGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVsOiB0b29sYmFyLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdG9vbGJhci5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy50b29sYmFyLWJhY2tncm91bmQnKSxcclxuICAgICAgICAgICAgICAgIGlvblRpdGxlRWwsXHJcbiAgICAgICAgICAgICAgICBpbm5lclRpdGxlRWw6IChpb25UaXRsZUVsKSA/IGlvblRpdGxlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci10aXRsZScpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGlvbkJ1dHRvbnNFbDogQXJyYXkuZnJvbSh0b29sYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zJykpIHx8IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkgfHwgW1tdXVxyXG4gICAgfTtcclxufTtcclxuY29uc3QgaGFuZGxlQ29udGVudFNjcm9sbCA9IChzY3JvbGxFbCwgc2Nyb2xsSGVhZGVySW5kZXgpID0+IHtcclxuICAgIHJlYWRUYXNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxFbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBjbGFtcCgxLCAxICsgKC1zY3JvbGxUb3AgLyA1MDApLCAxLjEpO1xyXG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHNjYWxlTGFyZ2VUaXRsZXMoc2Nyb2xsSGVhZGVySW5kZXgudG9vbGJhcnMsIHNjYWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBzZXRUb29sYmFyQmFja2dyb3VuZE9wYWNpdHkgPSAodG9vbGJhciwgb3BhY2l0eSkgPT4ge1xyXG4gICAgaWYgKG9wYWNpdHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRvb2xiYXIuYmFja2dyb3VuZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS1vcGFjaXR5Jyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b29sYmFyLmJhY2tncm91bmQuc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eScsIG9wYWNpdHkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGhhbmRsZVRvb2xiYXJCb3JkZXJJbnRlcnNlY3Rpb24gPSAoZXYsIG1haW5IZWFkZXJJbmRleCkgPT4ge1xyXG4gICAgaWYgKCFldlswXS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNjYWxlID0gKCgxIC0gZXZbMF0uaW50ZXJzZWN0aW9uUmF0aW8pICogMTAwKSAvIDc1O1xyXG4gICAgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5KG1haW5IZWFkZXJJbmRleC50b29sYmFyc1swXSwgKHNjYWxlID09PSAxKSA/IHVuZGVmaW5lZCA6IHNjYWxlKTtcclxufTtcclxuLyoqXHJcbiAqIElmIHRvb2xiYXJzIGFyZSBpbnRlcnNlY3RpbmcsIGhpZGUgdGhlIHNjcm9sbGFibGUgdG9vbGJhciBjb250ZW50XHJcbiAqIGFuZCBzaG93IHRoZSBwcmltYXJ5IHRvb2xiYXIgY29udGVudC4gSWYgdGhlIHRvb2xiYXJzIGFyZSBub3QgaW50ZXJzZWN0aW5nLFxyXG4gKiBoaWRlIHRoZSBwcmltYXJ5IHRvb2xiYXIgY29udGVudCBhbmQgc2hvdyB0aGUgc2Nyb2xsYWJsZSB0b29sYmFyIGNvbnRlbnRcclxuICovXHJcbmNvbnN0IGhhbmRsZVRvb2xiYXJJbnRlcnNlY3Rpb24gPSAoZXYsIG1haW5IZWFkZXJJbmRleCwgc2Nyb2xsSGVhZGVySW5kZXgpID0+IHtcclxuICAgIHdyaXRlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlVG9vbGJhckJvcmRlckludGVyc2VjdGlvbihldiwgbWFpbkhlYWRlckluZGV4KTtcclxuICAgICAgICBjb25zdCBldmVudCA9IGV2WzBdO1xyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGV2ZW50LmludGVyc2VjdGlvblJlY3Q7XHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvbi53aWR0aCAqIGludGVyc2VjdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgcm9vdEFyZWEgPSBldmVudC5yb290Qm91bmRzLndpZHRoICogZXZlbnQucm9vdEJvdW5kcy5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgaXNQYWdlSGlkZGVuID0gaW50ZXJzZWN0aW9uQXJlYSA9PT0gMCAmJiByb290QXJlYSA9PT0gMDtcclxuICAgICAgICBjb25zdCBsZWZ0RGlmZiA9IE1hdGguYWJzKGludGVyc2VjdGlvbi5sZWZ0IC0gZXZlbnQuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0RGlmZiA9IE1hdGguYWJzKGludGVyc2VjdGlvbi5yaWdodCAtIGV2ZW50LmJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCk7XHJcbiAgICAgICAgY29uc3QgaXNQYWdlVHJhbnNpdGlvbmluZyA9IGludGVyc2VjdGlvbkFyZWEgPiAwICYmIChsZWZ0RGlmZiA+PSA1IHx8IHJpZ2h0RGlmZiA+PSA1KTtcclxuICAgICAgICBpZiAoaXNQYWdlSGlkZGVuIHx8IGlzUGFnZVRyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKG1haW5IZWFkZXJJbmRleCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRIZWFkZXJBY3RpdmUoc2Nyb2xsSGVhZGVySW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZXJlIGlzIGEgYnVnIHdpdGggSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb24gU2FmYXJpXHJcbiAgICAgICAgICAgICAqIHdoZXJlIGBldmVudC5pc0ludGVyc2VjdGluZyA9PT0gZmFsc2VgIHdoZW4gY2FuY2VsbGluZ1xyXG4gICAgICAgICAgICAgKiBhIHN3aXBlIHRvIGdvIGJhY2sgZ2VzdHVyZS4gQ2hlY2tpbmcgdGhlIGludGVyc2VjdGlvblxyXG4gICAgICAgICAgICAgKiB4LCB5LCB3aWR0aCwgYW5kIGhlaWdodCBwcm92aWRlcyBhIHdvcmthcm91bmQuIFRoaXMgYnVnXHJcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGhhcHBlbiB3aGVuIHVzaW5nIFNhZmFyaSArIFdlYiBBbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgKiBvbmx5IFNhZmFyaSArIENTUyBBbmltYXRpb25zLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3QgaGFzVmFsaWRJbnRlcnNlY3Rpb24gPSAoaW50ZXJzZWN0aW9uLnggPT09IDAgJiYgaW50ZXJzZWN0aW9uLnkgPT09IDApIHx8IChpbnRlcnNlY3Rpb24ud2lkdGggIT09IDAgJiYgaW50ZXJzZWN0aW9uLmhlaWdodCAhPT0gMCk7XHJcbiAgICAgICAgICAgIGlmIChoYXNWYWxpZEludGVyc2VjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKG1haW5IZWFkZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJBY3RpdmUoc2Nyb2xsSGVhZGVySW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eShtYWluSGVhZGVySW5kZXgudG9vbGJhcnNbMF0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IHNldEhlYWRlckFjdGl2ZSA9IChoZWFkZXJJbmRleCwgYWN0aXZlID0gdHJ1ZSkgPT4ge1xyXG4gICAgd3JpdGVUYXNrKCgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGhlYWRlckluZGV4LmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVySW5kZXguZWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IHNjYWxlTGFyZ2VUaXRsZXMgPSAodG9vbGJhcnMgPSBbXSwgc2NhbGUgPSAxLCB0cmFuc2l0aW9uID0gZmFsc2UpID0+IHtcclxuICAgIHRvb2xiYXJzLmZvckVhY2godG9vbGJhciA9PiB7XHJcbiAgICAgICAgY29uc3QgaW9uVGl0bGUgPSB0b29sYmFyLmlvblRpdGxlRWw7XHJcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSB0b29sYmFyLmlubmVyVGl0bGVFbDtcclxuICAgICAgICBpZiAoIWlvblRpdGxlIHx8IGlvblRpdGxlLnNpemUgIT09ICdsYXJnZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aXRsZURpdi5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnbGVmdCBjZW50ZXInO1xyXG4gICAgICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zaXRpb24gPSAodHJhbnNpdGlvbikgPyBUUkFOU0lUSU9OIDogJyc7XHJcbiAgICAgICAgdGl0bGVEaXYuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlM2QoJHtzY2FsZX0sICR7c2NhbGV9LCAxKWA7XHJcbiAgICB9KTtcclxufTtcblxuY29uc3QgSGVhZGVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzaWJsZUhlYWRlckluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWFkZXIgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBJbiBvcmRlciB0byBzY3JvbGwgY29udGVudCBiZWhpbmQgdGhlIGhlYWRlciwgdGhlIGBmdWxsc2NyZWVuYFxuICAgICAgICAgKiBhdHRyaWJ1dGUgbmVlZHMgdG8gYmUgc2V0IG9uIHRoZSBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrQ29sbGFwc2libGVIZWFkZXIoKTtcbiAgICB9XG4gICAgYXN5bmMgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrQ29sbGFwc2libGVIZWFkZXIoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVW5sb2FkKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lDb2xsYXBzaWJsZUhlYWRlcigpO1xuICAgIH1cbiAgICBhc3luYyBjaGVja0NvbGxhcHNpYmxlSGVhZGVyKCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGhlYWRlciBjYW4gY29sbGFwc2VcbiAgICAgICAgY29uc3QgaGFzQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlID09PSAnY29uZGVuc2UnO1xuICAgICAgICBjb25zdCBjYW5Db2xsYXBzZSA9IChoYXNDb2xsYXBzZSAmJiBnZXRJb25Nb2RlKHRoaXMpID09PSAnaW9zJykgPyBoYXNDb2xsYXBzZSA6IGZhbHNlO1xuICAgICAgICBpZiAoIWNhbkNvbGxhcHNlICYmIHRoaXMuY29sbGFwc2libGVIZWFkZXJJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYW5Db2xsYXBzZSAmJiAhdGhpcy5jb2xsYXBzaWJsZUhlYWRlckluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1hcHAsaW9uLXBhZ2UsLmlvbi1wYWdlLHBhZ2UtaW5uZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IChwYWdlRWwpID8gcGFnZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1jb250ZW50JykgOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXR1cENvbGxhcHNpYmxlSGVhZGVyKGNvbnRlbnRFbCwgcGFnZUVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRWwgJiYgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2V0dXBDb2xsYXBzaWJsZUhlYWRlcihjb250ZW50RWwsIHBhZ2VFbCkge1xuICAgICAgICBpZiAoIWNvbnRlbnRFbCB8fCAhcGFnZUVsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdpb24taGVhZGVyIHJlcXVpcmVzIGEgY29udGVudCB0byBjb2xsYXBzZSwgbWFrZSBzdXJlIHRoZXJlIGlzIGFuIGlvbi1jb250ZW50LicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwgPSBhd2FpdCBjb250ZW50RWwuZ2V0U2Nyb2xsRWxlbWVudCgpO1xuICAgICAgICByZWFkVGFzaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcGFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IG1haW5IZWFkZXIgPSBBcnJheS5mcm9tKGhlYWRlcnMpLmZpbmQoKGhlYWRlcikgPT4gaGVhZGVyLmNvbGxhcHNlICE9PSAnY29uZGVuc2UnKTtcbiAgICAgICAgICAgIGlmICghbWFpbkhlYWRlciB8fCAhdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1haW5IZWFkZXJJbmRleCA9IGNyZWF0ZUhlYWRlckluZGV4KG1haW5IZWFkZXIpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVhZGVySW5kZXggPSBjcmVhdGVIZWFkZXJJbmRleCh0aGlzLmVsKTtcbiAgICAgICAgICAgIGlmICghbWFpbkhlYWRlckluZGV4IHx8ICFzY3JvbGxIZWFkZXJJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEhlYWRlckFjdGl2ZShtYWluSGVhZGVySW5kZXgsIGZhbHNlKTtcbiAgICAgICAgICAgIHJlYWRUYXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluSGVhZGVySGVpZ2h0ID0gbWFpbkhlYWRlckluZGV4LmVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBIYW5kbGUgaW50ZXJhY3Rpb24gYmV0d2VlbiB0b29sYmFyIGNvbGxhcHNlIGFuZFxuICAgICAgICAgICAgICAgICAqIHNob3dpbmcvaGlkaW5nIGNvbnRlbnQgaW4gdGhlIHByaW1hcnkgaW9uLWhlYWRlclxuICAgICAgICAgICAgICAgICAqIGFzIHdlbGwgYXMgcHJvZ3Jlc3NpdmVseSBzaG93aW5nL2hpZGluZyB0aGUgbWFpbiBoZWFkZXJcbiAgICAgICAgICAgICAgICAgKiBib3JkZXIgYXMgdGhlIHRvcC1tb3N0IHRvb2xiYXIgY29sbGFwc2VzIG9yIGV4cGFuZHMuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbGJhckludGVyc2VjdGlvbiA9IChldikgPT4geyBoYW5kbGVUb29sYmFySW50ZXJzZWN0aW9uKGV2LCBtYWluSGVhZGVySW5kZXgsIHNjcm9sbEhlYWRlckluZGV4KTsgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRvb2xiYXJJbnRlcnNlY3Rpb24sIHsgdGhyZXNob2xkOiBbMC4yNSwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuOCwgMC45LCAxXSwgcm9vdE1hcmdpbjogYC0ke21haW5IZWFkZXJIZWlnaHR9cHggMHB4IDBweCAwcHhgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzY3JvbGxIZWFkZXJJbmRleC50b29sYmFyc1swXS5lbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSGFuZGxlIHNjYWxpbmcgb2YgbGFyZ2UgaU9TIHRpdGxlcyBhbmRcbiAgICAgICAgICAgICAqIHNob3dpbmcvaGlkaW5nIGJvcmRlciBvbiBsYXN0IHRvb2xiYXJcbiAgICAgICAgICAgICAqIGluIHByaW1hcnkgaGVhZGVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrID0gKCkgPT4geyBoYW5kbGVDb250ZW50U2Nyb2xsKHRoaXMuc2Nyb2xsRWwsIHNjcm9sbEhlYWRlckluZGV4KTsgfTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAgICAgICAgIGNsb25lRWxlbWVudCgnaW9uLXRpdGxlJyk7XG4gICAgICAgICAgICBjbG9uZUVsZW1lbnQoJ2lvbi1iYWNrLWJ1dHRvbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2xsYXBzaWJsZUhlYWRlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlIHx8ICdub25lJztcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJiYW5uZXJcIiwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgW2BoZWFkZXItJHttb2RlfWBdOiB0cnVlLFxuICAgICAgICAgICAgICAgIFtgaGVhZGVyLXRyYW5zbHVjZW50YF06IHRoaXMudHJhbnNsdWNlbnQsXG4gICAgICAgICAgICAgICAgW2BoZWFkZXItY29sbGFwc2UtJHtjb2xsYXBzZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBbYGhlYWRlci10cmFuc2x1Y2VudC0ke21vZGV9YF06IHRoaXMudHJhbnNsdWNlbnQsXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcImlvbi1oZWFkZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTt3aWR0aDoxMDAlO3otaW5kZXg6MTB9aW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDp2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwwKX0uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkey0tYm9yZGVyLXdpZHRoOjAgMCAwLjU1cHh9LmhlYWRlci1pb3Nbbm8tYm9yZGVyXSBpb24tdG9vbGJhcjpsYXN0LWNoaWxkey0tYm9yZGVyLXdpZHRoOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpKXsuaGVhZGVyLXRyYW5zbHVjZW50LWlvc3std2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfS5oZWFkZXItdHJhbnNsdWNlbnQtaW9zIGlvbi10b29sYmFyey0tb3BhY2l0eTouODstLWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNle3otaW5kZXg6OX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFye3Bvc2l0aW9uOi13ZWJraXQtc3RpY2t5O3Bvc2l0aW9uOnN0aWNreTt0b3A6MH0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFyOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjdweDt6LWluZGV4OjF9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcnt6LWluZGV4OjB9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhciBpb24tc2VhcmNoYmFye2hlaWdodDo0OHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MTNweH1pb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi1idXR0b25zLGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxley13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dH0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFyIGlvbi1idXR0b25zLC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UgaW9uLXRvb2xiYXIgaW9uLXRpdGxley13ZWJraXQtdHJhbnNpdGlvbjpub25lO3RyYW5zaXRpb246bm9uZX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLWJ1dHRvbnMuYnV0dG9ucy1jb2xsYXBzZSwuaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfVwiOyB9XG59O1xuXG5jb25zdCBSb3V0ZXJPdXRsZXQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vZGUgZGV0ZXJtaW5lcyB3aGljaCBwbGF0Zm9ybSBzdHlsZXMgdG8gdXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHJvdXRlci1vdXRsZXQgc2hvdWxkIGFuaW1hdGUgdGhlIHRyYW5zaXRpb24gb2YgY29tcG9uZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsQ2hhbmdlXCIsIDMpO1xuICAgICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTmF2RGlkQ2hhbmdlXCIsIDMpO1xuICAgIH1cbiAgICBzd2lwZUhhbmRsZXJDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5zd2lwZUhhbmRsZXIgPT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vc3dpcGUtYmFjay0zNWFkOGUzNy5qcycpKS5jcmVhdGVTd2lwZUJhY2tHZXN0dXJlKHRoaXMuZWwsICgpID0+ICEhdGhpcy5zd2lwZUhhbmRsZXIgJiYgdGhpcy5zd2lwZUhhbmRsZXIuY2FuU3RhcnQoKSAmJiB0aGlzLmFuaW1hdGlvbkVuYWJsZWQsICgpID0+IHRoaXMuc3dpcGVIYW5kbGVyICYmIHRoaXMuc3dpcGVIYW5kbGVyLm9uU3RhcnQoKSwgc3RlcCA9PiB0aGlzLmFuaSAmJiB0aGlzLmFuaS5wcm9ncmVzc1N0ZXAoc3RlcCksIChzaG91bGRDb21wbGV0ZSwgc3RlcCwgZHVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaS5vbkZpbmlzaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN3aXBlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwZUhhbmRsZXIub25FbmQoc2hvdWxkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgeyBvbmVUaW1lQ2FsbGJhY2s6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gQWNjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzIGluIEpTXG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0ZXBWYWx1ZSA9IChzaG91bGRDb21wbGV0ZSkgPyAtMC4wMDEgOiAwLjAwMTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBbmltYXRpb24gd2lsbCBiZSByZXZlcnNlZCBoZXJlLCBzbyBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgdGltZSByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAgICAgICAgICAgICAqIGluIHRlcm1zIG9mIGEgbGluZWFyIGN1cnZlLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMSwgMCwgMC42OCwgMC4yOCknKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKG5ldyBQb2ludCgwLCAwKSwgbmV3IFBvaW50KDEsIDApLCBuZXcgUG9pbnQoMC42OCwgMC4yOCksIG5ldyBQb2ludCgxLCAxKSwgc3RlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24obmV3IFBvaW50KDAsIDApLCBuZXcgUG9pbnQoMC4zMiwgMC43MiksIG5ldyBQb2ludCgwLCAxKSwgbmV3IFBvaW50KDEsIDEpLCBzdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hbmkucHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCwgbmV3U3RlcFZhbHVlLCBkdXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zd2lwZUhhbmRsZXJDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkLmVtaXQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIGNvbW1pdChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMpIHtcbiAgICAgICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrKCk7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gYXdhaXQgdGhpcy50cmFuc2l0aW9uKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdW5sb2NrKCk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgc2V0Um91dGVJZChpZCwgcGFyYW1zLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgY2hhbmdlZCA9IGF3YWl0IHRoaXMuc2V0Um9vdChpZCwgcGFyYW1zLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZGlyZWN0aW9uID09PSAncm9vdCcgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24gPT09ICdiYWNrJyA/ICdiYWNrJyA6ICdmb3J3YXJkJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGFuZ2VkLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5hY3RpdmVFbFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgZ2V0Um91dGVJZCgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVFbDtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZSA/IHtcbiAgICAgICAgICAgIGlkOiBhY3RpdmUudGFnTmFtZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IGFjdGl2ZSxcbiAgICAgICAgfSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYXN5bmMgc2V0Um9vdChjb21wb25lbnQsIHBhcmFtcywgb3B0cykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF0dGFjaCBlbnRlcmluZyB2aWV3IHRvIERPTVxuICAgICAgICBjb25zdCBsZWF2aW5nRWwgPSB0aGlzLmFjdGl2ZUVsO1xuICAgICAgICBjb25zdCBlbnRlcmluZ0VsID0gYXdhaXQgYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMuZWwsIGNvbXBvbmVudCwgWydpb24tcGFnZScsICdpb24tcGFnZS1pbnZpc2libGUnXSwgcGFyYW1zKTtcbiAgICAgICAgdGhpcy5hY3RpdmVDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZlRWwgPSBlbnRlcmluZ0VsO1xuICAgICAgICAvLyBjb21taXQgYW5pbWF0aW9uXG4gICAgICAgIGF3YWl0IHRoaXMuY29tbWl0KGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cyk7XG4gICAgICAgIGF3YWl0IGRldGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBsZWF2aW5nRWwpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgdHJhbnNpdGlvbihlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMgPSB7fSkge1xuICAgICAgICBpZiAobGVhdmluZ0VsID09PSBlbnRlcmluZ0VsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW1pdCBuYXYgd2lsbCBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgY29uc3QgeyBlbCwgbW9kZSB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgYW5pbWF0ZWQgPSB0aGlzLmFuaW1hdGVkICYmIGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpO1xuICAgICAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gdGhpcy5hbmltYXRpb24gfHwgb3B0cy5hbmltYXRpb25CdWlsZGVyIHx8IGNvbmZpZy5nZXQoJ25hdkFuaW1hdGlvbicpO1xuICAgICAgICBhd2FpdCB0cmFuc2l0aW9uKE9iamVjdC5hc3NpZ24oeyBtb2RlLFxuICAgICAgICAgICAgYW5pbWF0ZWQsXG4gICAgICAgICAgICBhbmltYXRpb25CdWlsZGVyLFxuICAgICAgICAgICAgZW50ZXJpbmdFbCxcbiAgICAgICAgICAgIGxlYXZpbmdFbCwgYmFzZUVsOiBlbCwgcHJvZ3Jlc3NDYWxsYmFjazogKG9wdHMucHJvZ3Jlc3NBbmltYXRpb25cbiAgICAgICAgICAgICAgICA/IGFuaSA9PiB0aGlzLmFuaSA9IGFuaVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKSB9LCBvcHRzKSk7XG4gICAgICAgIC8vIGVtaXQgbmF2IGNoYW5nZWQgZXZlbnRcbiAgICAgICAgdGhpcy5pb25OYXZEaWRDaGFuZ2UuZW1pdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgbG9jaygpIHtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMud2FpdFByb21pc2U7XG4gICAgICAgIGxldCByZXNvbHZlO1xuICAgICAgICB0aGlzLndhaXRQcm9taXNlID0gbmV3IFByb21pc2UociA9PiByZXNvbHZlID0gcik7XG4gICAgICAgIGlmIChwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmU7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCBudWxsKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcInN3aXBlSGFuZGxlclwiOiBbXCJzd2lwZUhhbmRsZXJDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MH1cIjsgfVxufTtcblxuY29uc3QgVG9vbGJhclRpdGxlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIHNpemVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICBbYHRpdGxlLSR7c2l6ZX1gXTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNpemUgIT09IHVuZGVmaW5lZCkgPyB0aGlzLnNpemUgOiAnZGVmYXVsdCc7XG4gICAgfVxuICAgIGdldE1vZGUoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCB0b29sYmFyID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tdG9vbGJhcicpO1xuICAgICAgICByZXR1cm4gKHRvb2xiYXIgJiYgdG9vbGJhci5tb2RlKSB8fCBtb2RlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSB0aGlzLmdldE1vZGUoKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSwgW2B0aXRsZS0ke21vZGV9YF06IHRydWUsIFtgdGl0bGUtJHtzaXplfWBdOiB0cnVlIH0sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvb2xiYXItdGl0bGVcIiB9LCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwic2l6ZVwiOiBbXCJzaXplQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWNvbG9yOmluaXRpYWw7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCgudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQpLDpob3N0KC50aXRsZS1pb3MudGl0bGUtbGFyZ2Upe2xlZnQ6MDt0b3A6MDtwYWRkaW5nLWxlZnQ6OTBweDtwYWRkaW5nLXJpZ2h0OjkwcHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0LDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50aXRsZS1pb3MudGl0bGUtbGFyZ2UsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0KSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWxhcmdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50aXRsZS1pb3MudGl0bGUtZGVmYXVsdCksOmhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjkwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OTBweDstd2Via2l0LXBhZGRpbmctZW5kOjkwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjkwcHh9fTpob3N0KC50aXRsZS1tZCl7cGFkZGluZy1sZWZ0OjIwcHg7cGFkZGluZy1yaWdodDoyMHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6LjAxMjVlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLnRpdGxlLW1kKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MjBweDtwYWRkaW5nLWlubGluZS1zdGFydDoyMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MjBweH19Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS50b29sYmFyLXRpdGxle2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0b306aG9zdCgudGl0bGUtc21hbGwpIC50b29sYmFyLXRpdGxle3doaXRlLXNwYWNlOm5vcm1hbH06aG9zdCgudGl0bGUtaW9zLnRpdGxlLXNtYWxsKXtwYWRkaW5nLWxlZnQ6OXB4O3BhZGRpbmctcmlnaHQ6OXB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbToxNnB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjEzcHg7dGV4dC1hbGlnbjpjZW50ZXJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50aXRsZS1pb3MudGl0bGUtc21hbGwpe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo5cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OXB4O3BhZGRpbmctaW5saW5lLWVuZDo5cHh9fTpob3N0KC50aXRsZS1tZC50aXRsZS1zbWFsbCl7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Omhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtib3R0b206MDstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7bWluLXdpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206NnB4O2ZvbnQtc2l6ZTozNHB4O2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWFsaWduOnN0YXJ0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWxhcmdlKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19XCI7IH1cbn07XG5cbmNvbnN0IFRvb2xiYXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuU3R5bGVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucycpKTtcbiAgICAgICAgY29uc3QgZmlyc3RCdXR0b25zID0gYnV0dG9ucy5maW5kKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uLnNsb3QgPT09ICdzdGFydCc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlyc3RCdXR0b25zKSB7XG4gICAgICAgICAgICBmaXJzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1maXJzdC1zbG90Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uc1JldmVyc2VkID0gYnV0dG9ucy5yZXZlcnNlKCk7XG4gICAgICAgIGNvbnN0IGxhc3RCdXR0b25zID0gYnV0dG9uc1JldmVyc2VkLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5zbG90ID09PSAnZW5kJykgfHxcbiAgICAgICAgICAgIGJ1dHRvbnNSZXZlcnNlZC5maW5kKGJ1dHRvbiA9PiBidXR0b24uc2xvdCA9PT0gJ3ByaW1hcnknKSB8fFxuICAgICAgICAgICAgYnV0dG9uc1JldmVyc2VkLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5zbG90ID09PSAnc2Vjb25kYXJ5Jyk7XG4gICAgICAgIGlmIChsYXN0QnV0dG9ucykge1xuICAgICAgICAgICAgbGFzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1sYXN0LXNsb3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGlsZHJlblN0eWxlKGV2KSB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZXYudGFyZ2V0LnRhZ05hbWU7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTdHlsZXMgPSBldi5kZXRhaWw7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHt9O1xuICAgICAgICBjb25zdCBjaGlsZFN0eWxlcyA9IHRoaXMuY2hpbGRyZW5TdHlsZXMuZ2V0KHRhZ05hbWUpIHx8IHt9O1xuICAgICAgICBsZXQgaGFzU3R5bGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LmtleXModXBkYXRlZFN0eWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRLZXkgPSBgdG9vbGJhci0ke2tleX1gO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB1cGRhdGVkU3R5bGVzW2tleV07XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGNoaWxkU3R5bGVzW2NoaWxkS2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1N0eWxlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld1N0eWxlc1tjaGlsZEtleV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc1N0eWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuU3R5bGVzLnNldCh0YWdOYW1lLCBuZXdTdHlsZXMpO1xuICAgICAgICAgICAgdGhpcy5lbC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNoaWxkU3R5bGVzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TdHlsZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNoaWxkU3R5bGVzLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSwgW21vZGVdOiB0cnVlIH0sIGNoaWxkU3R5bGVzKSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9vbGJhci1iYWNrZ3JvdW5kXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b29sYmFyLWNvbnRhaW5lclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdGFydFwiIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic2Vjb25kYXJ5XCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b29sYmFyLWNvbnRlbnRcIiB9LCBoKFwic2xvdFwiLCBudWxsKSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJwcmltYXJ5XCIgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJlbmRcIiB9KSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tYm9yZGVyLXdpZHRoOjA7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1vcGFjaXR5OjE7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOmNvbnRlbnQ7ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgLnRvb2xiYXItYmFja2dyb3VuZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci1jb250YWluZXJ7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey50b29sYmFyLWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LnRvb2xiYXItYmFja2dyb3VuZHt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTp2YXIoLS1vcGFjaXR5KTt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmV9LnRvb2xiYXItYmFja2dyb3VuZCw6OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcil7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGV9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2ZmZikpOy0tY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCkpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDAsMCwwLDAuMikpKSk7LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWJvdHRvbTozcHg7LS1wYWRkaW5nLXN0YXJ0OjRweDstLXBhZGRpbmctZW5kOjRweDstLW1pbi1oZWlnaHQ6NDRweH0udG9vbGJhci1jb250ZW50ey1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LW9yZGVyOjQ7b3JkZXI6NDttaW4td2lkdGg6MH06aG9zdCgudG9vbGJhci1zZWdtZW50KXstLW1pbi1oZWlnaHQ6YXV0b306aG9zdCgudG9vbGJhci1zZWFyY2hiYXIpIC50b29sYmFyLWNvbnRhaW5lcntwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9Omhvc3QoLnRvb2xiYXItc2VhcmNoYmFyKSA6OnNsb3R0ZWQoKil7LW1zLWZsZXgtaXRlbS1hbGlnbjpzdGFydDthbGlnbi1zZWxmOnN0YXJ0fTpob3N0KC50b29sYmFyLXNlYXJjaGJhcikgOjpzbG90dGVkKGlvbi1jaGlwKXttYXJnaW4tdG9wOjNweH06aG9zdCgudG9vbGJhci1zZWFyY2hiYXIpIDo6c2xvdHRlZChpb24tYmFjay1idXR0b24pe2hlaWdodDozOHB4fTo6c2xvdHRlZChpb24tYnV0dG9ucyl7bWluLWhlaWdodDozOHB4fTo6c2xvdHRlZChbc2xvdD1zdGFydF0pey1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mn06OnNsb3R0ZWQoW3Nsb3Q9c2Vjb25kYXJ5XSl7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozfTo6c2xvdHRlZChbc2xvdD1wcmltYXJ5XSl7LW1zLWZsZXgtb3JkZXI6NTtvcmRlcjo1O3RleHQtYWxpZ246ZW5kfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1vcmRlcjo2O29yZGVyOjY7dGV4dC1hbGlnbjplbmR9Omhvc3QoLnRvb2xiYXItdGl0bGUtbGFyZ2UpIC50b29sYmFyLWNvbnRhaW5lcnstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH06aG9zdCgudG9vbGJhci10aXRsZS1sYXJnZSkgLnRvb2xiYXItY29udGVudCBpb24tdGl0bGV7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtb3JkZXI6ODtvcmRlcjo4O21pbi13aWR0aDoxMDAlfVwiOyB9XG59O1xuXG5leHBvcnQgeyBBcHAgYXMgaW9uX2FwcCwgQnV0dG9ucyBhcyBpb25fYnV0dG9ucywgQ29udGVudCBhcyBpb25fY29udGVudCwgRm9vdGVyIGFzIGlvbl9mb290ZXIsIEhlYWRlciBhcyBpb25faGVhZGVyLCBSb3V0ZXJPdXRsZXQgYXMgaW9uX3JvdXRlcl9vdXRsZXQsIFRvb2xiYXJUaXRsZSBhcyBpb25fdGl0bGUsIFRvb2xiYXIgYXMgaW9uX3Rvb2xiYXIgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=