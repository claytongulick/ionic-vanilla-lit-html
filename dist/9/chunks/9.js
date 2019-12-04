(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js ***!
  \******************************************************************/
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
    static get style() { return ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"; }
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
    static get style() { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}"; }
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
    static get style() { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md[no-border]:after{display:none}"; }
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
    static get style() { return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY4MjZmMmY2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLWFwcF84LW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZUFBZSx3QkFBd0I7QUFDdkM7QUFDQSxnQ0FBZ0MsNkRBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxxQkFBcUIsMkRBQVU7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiI5XFxjaHVua3NcXDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQmFzZWQgb246XHJcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzczNDgwMDkveS1jb29yZGluYXRlLWZvci1hLWdpdmVuLXgtY3ViaWMtYmV6aWVyXHJcbiAqIGh0dHBzOi8vbWF0aC5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMjY4NDYvaXMtdGhlcmUtYW4tZXhwbGljaXQtZm9ybS1mb3ItY3ViaWMtYiVDMyVBOXppZXItY3VydmVzXHJcbiAqIFRPRE86IFJlZHVjZSByb3VuZGluZyBlcnJvclxyXG4gKi9cclxuY2xhc3MgUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogR2l2ZW4gYSBjdWJpYy1iZXppZXIgY3VydmUsIGdldCB0aGUgeCB2YWx1ZSAodGltZSkgZ2l2ZW5cclxuICogdGhlIHkgdmFsdWUgKHByb2dyZXNzaW9uKS5cclxuICogRXg6IGN1YmljLWJlemllcigwLjMyLCAwLjcyLCAwLCAxKTtcclxuICogUDA6ICgwLCAwKVxyXG4gKiBQMTogKDAuMzIsIDAuNzIpXHJcbiAqIFAyOiAoMCwgMSlcclxuICogUDM6ICgxLCAxKVxyXG4gKlxyXG4gKiBJZiB5b3UgZ2l2ZSBhIGN1YmljIGJlemllciBjdXJ2ZSB0aGF0IG5ldmVyIHJlYWNoZXMgdGhlXHJcbiAqIHByb3ZpZGVkIHByb2dyZXNzaW9uLCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIE5hTi5cclxuICovXHJcbmNvbnN0IGdldFRpbWVHaXZlblByb2dyZXNzaW9uID0gKHAwLCBwMSwgcDIsIHAzLCBwcm9ncmVzc2lvbikgPT4ge1xyXG4gICAgY29uc3QgdFZhbHVlcyA9IHNvbHZlQ3ViaWNCZXppZXIocDAueSwgcDEueSwgcDIueSwgcDMueSwgcHJvZ3Jlc3Npb24pO1xyXG4gICAgcmV0dXJuIHNvbHZlQ3ViaWNQYXJhbWV0cmljRXF1YXRpb24ocDAueCwgcDEueCwgcDIueCwgcDMueCwgdFZhbHVlc1swXSk7IC8vIFRPRE86IEFkZCBiZXR0ZXIgc3RyYXRlZ3kgZm9yIGRlYWxpbmcgd2l0aCBtdWx0aXBsZSBzb2x1dGlvbnNcclxufTtcclxuLyoqXHJcbiAqIFNvbHZlIGEgY3ViaWMgZXF1YXRpb24gaW4gb25lIGRpbWVuc2lvbiAodGltZSlcclxuICovXHJcbmNvbnN0IHNvbHZlQ3ViaWNQYXJhbWV0cmljRXF1YXRpb24gPSAocDAsIHAxLCBwMiwgcDMsIHQpID0+IHtcclxuICAgIGNvbnN0IHBhcnRBID0gKDMgKiBwMSkgKiBNYXRoLnBvdyh0IC0gMSwgMik7XHJcbiAgICBjb25zdCBwYXJ0QiA9ICgtMyAqIHAyICogdCkgKyAoMyAqIHAyKSArIChwMyAqIHQpO1xyXG4gICAgY29uc3QgcGFydEMgPSBwMCAqIE1hdGgucG93KHQgLSAxLCAzKTtcclxuICAgIHJldHVybiB0ICogKHBhcnRBICsgKHQgKiBwYXJ0QikpIC0gcGFydEM7XHJcbn07XHJcbi8qKlxyXG4gKiBGaW5kIHRoZSBgdGAgdmFsdWUgZm9yIGEgY3ViaWMgYmV6aWVyIHVzaW5nIENhcmRhbm8ncyBmb3JtdWxhXHJcbiAqL1xyXG5jb25zdCBzb2x2ZUN1YmljQmV6aWVyID0gKHAwLCBwMSwgcDIsIHAzLCByZWZQb2ludCkgPT4ge1xyXG4gICAgcDAgLT0gcmVmUG9pbnQ7XHJcbiAgICBwMSAtPSByZWZQb2ludDtcclxuICAgIHAyIC09IHJlZlBvaW50O1xyXG4gICAgcDMgLT0gcmVmUG9pbnQ7XHJcbiAgICBjb25zdCByb290cyA9IHNvbHZlQ3ViaWNFcXVhdGlvbihwMyAtIDMgKiBwMiArIDMgKiBwMSAtIHAwLCAzICogcDIgLSA2ICogcDEgKyAzICogcDAsIDMgKiBwMSAtIDMgKiBwMCwgcDApO1xyXG4gICAgcmV0dXJuIHJvb3RzLmZpbHRlcihyb290ID0+IHJvb3QgPj0gMCAmJiByb290IDw9IDEpO1xyXG59O1xyXG5jb25zdCBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uID0gKGEsIGIsIGMpID0+IHtcclxuICAgIGNvbnN0IGRpc2NyaW1pbmFudCA9IGIgKiBiIC0gNCAqIGEgKiBjO1xyXG4gICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAoLWIgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSkgLyAoMiAqIGEpLFxyXG4gICAgICAgICAgICAoLWIgLSBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSkgLyAoMiAqIGEpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc29sdmVDdWJpY0VxdWF0aW9uID0gKGEsIGIsIGMsIGQpID0+IHtcclxuICAgIGlmIChhID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvbHZlUXVhZHJhdGljRXF1YXRpb24oYiwgYywgZCk7XHJcbiAgICB9XHJcbiAgICBiIC89IGE7XHJcbiAgICBjIC89IGE7XHJcbiAgICBkIC89IGE7XHJcbiAgICBjb25zdCBwID0gKDMgKiBjIC0gYiAqIGIpIC8gMztcclxuICAgIGNvbnN0IHEgPSAoMiAqIGIgKiBiICogYiAtIDkgKiBiICogYyArIDI3ICogZCkgLyAyNztcclxuICAgIGlmIChwID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdygtcSwgMSAvIDMpXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHEgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGguc3FydCgtcCksIC1NYXRoLnNxcnQoLXApXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc2NyaW1pbmFudCA9IE1hdGgucG93KHEgLyAyLCAyKSArIE1hdGgucG93KHAgLyAzLCAzKTtcclxuICAgIGlmIChkaXNjcmltaW5hbnQgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucG93KHEgLyAyLCAxIC8gMikgLSBiIC8gM107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkaXNjcmltaW5hbnQgPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdygtKHEgLyAyKSArIE1hdGguc3FydChkaXNjcmltaW5hbnQpLCAxIC8gMykgLSBNYXRoLnBvdygocSAvIDIpICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCksIDEgLyAzKSAtIGIgLyAzXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHIgPSBNYXRoLnNxcnQoTWF0aC5wb3coLShwIC8gMyksIDMpKTtcclxuICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygtKHEgLyAoMiAqIE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpKSkpO1xyXG4gICAgY29uc3QgcyA9IDIgKiBNYXRoLnBvdyhyLCAxIC8gMyk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHMgKiBNYXRoLmNvcyhwaGkgLyAzKSAtIGIgLyAzLFxyXG4gICAgICAgIHMgKiBNYXRoLmNvcygocGhpICsgMiAqIE1hdGguUEkpIC8gMykgLSBiIC8gMyxcclxuICAgICAgICBzICogTWF0aC5jb3MoKHBoaSArIDQgKiBNYXRoLlBJKSAvIDMpIC0gYiAvIDNcclxuICAgIF07XHJcbn07XG5cbmV4cG9ydCB7IFBvaW50IGFzIFAsIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIGFzIGcgfTtcbiIsImNvbnN0IGF0dGFjaENvbXBvbmVudCA9IGFzeW5jIChkZWxlZ2F0ZSwgY29udGFpbmVyLCBjb21wb25lbnQsIGNzc0NsYXNzZXMsIGNvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgICBpZiAoZGVsZWdhdGUpIHtcclxuICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXR0YWNoVmlld1RvRG9tKGNvbnRhaW5lciwgY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgY3NzQ2xhc3Nlcyk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudCAhPT0gJ3N0cmluZycgJiYgIShjb21wb25lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZyYW1ld29yayBkZWxlZ2F0ZSBpcyBtaXNzaW5nJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbCA9ICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJylcclxuICAgICAgICA/IGNvbnRhaW5lci5vd25lckRvY3VtZW50ICYmIGNvbnRhaW5lci5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KVxyXG4gICAgICAgIDogY29tcG9uZW50O1xyXG4gICAgaWYgKGNzc0NsYXNzZXMpIHtcclxuICAgICAgICBjc3NDbGFzc2VzLmZvckVhY2goYyA9PiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnRQcm9wcykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWwsIGNvbXBvbmVudFByb3BzKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICBpZiAoZWwuY29tcG9uZW50T25SZWFkeSkge1xyXG4gICAgICAgIGF3YWl0IGVsLmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxufTtcclxuY29uc3QgZGV0YWNoQ29tcG9uZW50ID0gKGRlbGVnYXRlLCBlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5yZW1vdmVWaWV3RnJvbURvbShjb250YWluZXIsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59O1xuXG5leHBvcnQgeyBhdHRhY2hDb21wb25lbnQgYXMgYSwgZGV0YWNoQ29tcG9uZW50IGFzIGQgfTtcbiIsImltcG9ydCB7IHcgYXMgd3JpdGVUYXNrIH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCB7IGIgYXMgTElGRUNZQ0xFX1dJTExfTEVBVkUsIEwgYXMgTElGRUNZQ0xFX1dJTExfRU5URVIsIGEgYXMgTElGRUNZQ0xFX0RJRF9FTlRFUiwgYyBhcyBMSUZFQ1lDTEVfRElEX0xFQVZFIH0gZnJvbSAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xuXG5jb25zdCBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uID0gKCkgPT4gaW1wb3J0KCcuL2lvcy50cmFuc2l0aW9uLTA3MWJkNDIxLmpzJyk7XHJcbmNvbnN0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbiA9ICgpID0+IGltcG9ydCgnLi9tZC50cmFuc2l0aW9uLTE1YTgxYjA4LmpzJyk7XHJcbmNvbnN0IHRyYW5zaXRpb24gPSAob3B0cykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3cml0ZVRhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBiZWZvcmVUcmFuc2l0aW9uKG9wdHMpO1xyXG4gICAgICAgICAgICBydW5UcmFuc2l0aW9uKG9wdHMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zaXRpb24ob3B0cyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGJlZm9yZVRyYW5zaXRpb24gPSAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcclxuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xyXG4gICAgc2V0WkluZGV4KGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cy5kaXJlY3Rpb24pO1xyXG4gICAgaWYgKG9wdHMuc2hvd0dvQmFjaykge1xyXG4gICAgICAgIGVudGVyaW5nRWwuY2xhc3NMaXN0LmFkZCgnY2FuLWdvLWJhY2snKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVudGVyaW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnY2FuLWdvLWJhY2snKTtcclxuICAgIH1cclxuICAgIHNldFBhZ2VIaWRkZW4oZW50ZXJpbmdFbCwgZmFsc2UpO1xyXG4gICAgaWYgKGxlYXZpbmdFbCkge1xyXG4gICAgICAgIHNldFBhZ2VIaWRkZW4obGVhdmluZ0VsLCBmYWxzZSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHJ1blRyYW5zaXRpb24gPSBhc3luYyAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IGF3YWl0IGdldEFuaW1hdGlvbkJ1aWxkZXIob3B0cyk7XHJcbiAgICBjb25zdCBhbmkgPSAoYW5pbWF0aW9uQnVpbGRlcilcclxuICAgICAgICA/IGFuaW1hdGlvbihhbmltYXRpb25CdWlsZGVyLCBvcHRzKVxyXG4gICAgICAgIDogbm9BbmltYXRpb24ob3B0cyk7IC8vIGZhc3QgcGF0aCBmb3Igbm8gYW5pbWF0aW9uXHJcbiAgICByZXR1cm4gYW5pO1xyXG59O1xyXG5jb25zdCBhZnRlclRyYW5zaXRpb24gPSAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcclxuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xyXG4gICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1pbnZpc2libGUnKTtcclxuICAgIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxlYXZpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1pbnZpc2libGUnKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgZ2V0QW5pbWF0aW9uQnVpbGRlciA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBpZiAoIW9wdHMubGVhdmluZ0VsIHx8ICFvcHRzLmFuaW1hdGVkIHx8IG9wdHMuZHVyYXRpb24gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdHMuYW5pbWF0aW9uQnVpbGRlcikge1xyXG4gICAgICAgIHJldHVybiBvcHRzLmFuaW1hdGlvbkJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRBbmltYXRpb24gPSAob3B0cy5tb2RlID09PSAnaW9zJylcclxuICAgICAgICA/IChhd2FpdCBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uKCkpLmlvc1RyYW5zaXRpb25BbmltYXRpb25cclxuICAgICAgICA6IChhd2FpdCBtZFRyYW5zaXRpb25BbmltYXRpb24oKSkubWRUcmFuc2l0aW9uQW5pbWF0aW9uO1xyXG4gICAgcmV0dXJuIGdldEFuaW1hdGlvbjtcclxufTtcclxuY29uc3QgYW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpID0+IHtcclxuICAgIGF3YWl0IHdhaXRGb3JSZWFkeShvcHRzLCB0cnVlKTtcclxuICAgIGxldCB0cmFucztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbW9kID0gYXdhaXQgaW1wb3J0KCcuL2luZGV4LTY5YzM3ODg1LmpzJyk7XHJcbiAgICAgICAgdHJhbnMgPSBhd2FpdCBtb2QuY3JlYXRlKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMuYmFzZUVsLCBvcHRzKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICB0cmFucyA9IGFuaW1hdGlvbkJ1aWxkZXIob3B0cy5iYXNlRWwsIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgZmlyZVdpbGxFdmVudHMob3B0cy5lbnRlcmluZ0VsLCBvcHRzLmxlYXZpbmdFbCk7XHJcbiAgICBjb25zdCBkaWRDb21wbGV0ZSA9IGF3YWl0IHBsYXlUcmFuc2l0aW9uKHRyYW5zLCBvcHRzKTtcclxuICAgIGlmIChvcHRzLnByb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICBvcHRzLnByb2dyZXNzQ2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGlmIChkaWRDb21wbGV0ZSkge1xyXG4gICAgICAgIGZpcmVEaWRFdmVudHMob3B0cy5lbnRlcmluZ0VsLCBvcHRzLmxlYXZpbmdFbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhc0NvbXBsZXRlZDogZGlkQ29tcGxldGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiB0cmFuc1xyXG4gICAgfTtcclxufTtcclxuY29uc3Qgbm9BbmltYXRpb24gPSBhc3luYyAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcclxuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xyXG4gICAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIGZhbHNlKTtcclxuICAgIGZpcmVXaWxsRXZlbnRzKGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XHJcbiAgICBmaXJlRGlkRXZlbnRzKGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhc0NvbXBsZXRlZDogdHJ1ZVxyXG4gICAgfTtcclxufTtcclxuY29uc3Qgd2FpdEZvclJlYWR5ID0gYXN5bmMgKG9wdHMsIGRlZmF1bHREZWVwKSA9PiB7XHJcbiAgICBjb25zdCBkZWVwID0gb3B0cy5kZWVwV2FpdCAhPT0gdW5kZWZpbmVkID8gb3B0cy5kZWVwV2FpdCA6IGRlZmF1bHREZWVwO1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBkZWVwID8gW1xyXG4gICAgICAgIGRlZXBSZWFkeShvcHRzLmVudGVyaW5nRWwpLFxyXG4gICAgICAgIGRlZXBSZWFkeShvcHRzLmxlYXZpbmdFbCksXHJcbiAgICBdIDogW1xyXG4gICAgICAgIHNoYWxsb3dSZWFkeShvcHRzLmVudGVyaW5nRWwpLFxyXG4gICAgICAgIHNoYWxsb3dSZWFkeShvcHRzLmxlYXZpbmdFbCksXHJcbiAgICBdO1xyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgYXdhaXQgbm90aWZ5Vmlld1JlYWR5KG9wdHMudmlld0lzUmVhZHksIG9wdHMuZW50ZXJpbmdFbCk7XHJcbn07XHJcbmNvbnN0IG5vdGlmeVZpZXdSZWFkeSA9IGFzeW5jICh2aWV3SXNSZWFkeSwgZW50ZXJpbmdFbCkgPT4ge1xyXG4gICAgaWYgKHZpZXdJc1JlYWR5KSB7XHJcbiAgICAgICAgYXdhaXQgdmlld0lzUmVhZHkoZW50ZXJpbmdFbCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHBsYXlUcmFuc2l0aW9uID0gKHRyYW5zLCBvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBwcm9ncmVzc0NhbGxiYWNrID0gb3B0cy5wcm9ncmVzc0NhbGxiYWNrO1xyXG4gICAgLy8gVE9ETzogUmVtb3ZlIEFuaW1hdGlvbkJ1aWxkZXJcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICB0cmFucy5vbkZpbmlzaCgoY3VycmVudFN0ZXApID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoY3VycmVudFN0ZXAgPT09IDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRyYW5zLmhhc0NvbXBsZXRlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRyYW5zLmhhc0NvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gY29vbCwgbGV0J3MgZG8gdGhpcywgc3RhcnQgdGhlIHRyYW5zaXRpb25cclxuICAgIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBhIHN3aXBlIHRvIGdvIGJhY2ssIGp1c3QgZ2V0IHRoZSB0cmFuc2l0aW9uIHByb2dyZXNzIHJlYWR5XHJcbiAgICAgICAgLy8ga2ljayBvZmYgdGhlIHN3aXBlIGFuaW1hdGlvbiBzdGFydFxyXG4gICAgICAgIHRyYW5zLnByb2dyZXNzU3RhcnQodHJ1ZSk7XHJcbiAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjayh0cmFucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBvbmx5IHRoZSB0b3AgbGV2ZWwgdHJhbnNpdGlvbiBzaG91bGQgYWN0dWFsbHkgc3RhcnQgXCJwbGF5XCJcclxuICAgICAgICAvLyBraWNrIGl0IG9mZiBhbmQgbGV0IGl0IHBsYXkgdGhyb3VnaFxyXG4gICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgdHJhbnMucGxheSgpO1xyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIGEgY2FsbGJhY2sgZm9yIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBkb25lXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxufTtcclxuY29uc3QgZmlyZVdpbGxFdmVudHMgPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XHJcbiAgICBsaWZlY3ljbGUobGVhdmluZ0VsLCBMSUZFQ1lDTEVfV0lMTF9MRUFWRSk7XHJcbiAgICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX1dJTExfRU5URVIpO1xyXG59O1xyXG5jb25zdCBmaXJlRGlkRXZlbnRzID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCkgPT4ge1xyXG4gICAgbGlmZWN5Y2xlKGVudGVyaW5nRWwsIExJRkVDWUNMRV9ESURfRU5URVIpO1xyXG4gICAgbGlmZWN5Y2xlKGxlYXZpbmdFbCwgTElGRUNZQ0xFX0RJRF9MRUFWRSk7XHJcbn07XHJcbmNvbnN0IGxpZmVjeWNsZSA9IChlbCwgZXZlbnROYW1lKSA9PiB7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcclxuICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzaGFsbG93UmVhZHkgPSAoZWwpID0+IHtcclxuICAgIGlmIChlbCAmJiBlbC5jb21wb25lbnRPblJlYWR5KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufTtcclxuY29uc3QgZGVlcFJlYWR5ID0gYXN5bmMgKGVsKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWw7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNvbXBvbmVudE9uUmVhZHkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVuY2lsRWwgPSBhd2FpdCBlbGVtZW50LmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgICAgICAgICAgaWYgKHN0ZW5jaWxFbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5tYXAoZGVlcFJlYWR5KSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNldFBhZ2VIaWRkZW4gPSAoZWwsIGhpZGRlbikgPT4ge1xyXG4gICAgaWYgKGhpZGRlbikge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2lvbi1wYWdlLWhpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWwuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWhpZGRlbicpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzZXRaSW5kZXggPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChlbnRlcmluZ0VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbnRlcmluZ0VsLnN0eWxlLnpJbmRleCA9IChkaXJlY3Rpb24gPT09ICdiYWNrJylcclxuICAgICAgICAgICAgPyAnOTknXHJcbiAgICAgICAgICAgIDogJzEwMSc7XHJcbiAgICB9XHJcbiAgICBpZiAobGVhdmluZ0VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZWF2aW5nRWwuc3R5bGUuekluZGV4ID0gJzEwMCc7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW9uUGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xyXG4gICAgaWYgKGlvblBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gaW9uUGFnZTtcclxuICAgIH1cclxuICAgIC8vIGlkaywgcmV0dXJuIHRoZSBvcmlnaW5hbCBlbGVtZW50IHNvIGF0IGxlYXN0IHNvbWV0aGluZyBhbmltYXRlcyBhbmQgd2UgZG9uJ3QgaGF2ZSBhIG51bGwgcG9pbnRlclxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XG5cbmV4cG9ydCB7IGRlZXBSZWFkeSBhcyBkLCBnZXRJb25QYWdlRWxlbWVudCBhcyBnLCBsaWZlY3ljbGUgYXMgbCwgc2V0UGFnZUhpZGRlbiBhcyBzLCB0cmFuc2l0aW9uIGFzIHQgfTtcbiIsImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCwgYyBhcyBjcmVhdGVFdmVudCwgZiBhcyByZWFkVGFzaywgdyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcsIGkgYXMgaXNQbGF0Zm9ybSB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQsIGQgYXMgZGV0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtYzJlMmUxZjQuanMnO1xuaW1wb3J0IHsgdCBhcyB0cmFuc2l0aW9uIH0gZnJvbSAnLi9pbmRleC02ODI2ZjJmNi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uLCBQIGFzIFBvaW50IH0gZnJvbSAnLi9jdWJpYy1iZXppZXItMjgxMmZkYTMuanMnO1xuXG5jb25zdCBBcHAgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICB7XG4gICAgICAgICAgICBySUMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzSHlicmlkID0gaXNQbGF0Zm9ybSh3aW5kb3csICdoeWJyaWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5nZXRCb29sZWFuKCdfdGVzdGluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi90YXAtY2xpY2stY2EwMGNlN2YuanMnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuc3RhcnRUYXBDbGljayhjb25maWcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdzdGF0dXNUYXAnLCBpc0h5YnJpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL3N0YXR1cy10YXAtYTBkZjgyODQuanMnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuc3RhcnRTdGF0dXNUYXAoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2V0Qm9vbGVhbignaW5wdXRTaGltcycsIG5lZWRJbnB1dFNoaW1zKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9pbnB1dC1zaGltcy1hNGZjNTNhYy5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydElucHV0U2hpbXMoY29uZmlnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2V0Qm9vbGVhbignaGFyZHdhcmVCYWNrQnV0dG9uJywgaXNIeWJyaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi01YWZlM2NiMC5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydEhhcmR3YXJlQmFja0J1dHRvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1wb3J0KCcuL2ZvY3VzLXZpc2libGUtNzA3MTNhMGMuanMnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuc3RhcnRGb2N1c1Zpc2libGUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnaW9uLXBhZ2UnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdmb3JjZS1zdGF0dXNiYXItcGFkZGluZyc6IGNvbmZpZy5nZXRCb29sZWFuKCdfZm9yY2VTdGF0dXNiYXJQYWRkaW5nJylcbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiaHRtbC5wbHQtbW9iaWxlIGlvbi1hcHB7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfWlvbi1hcHAuZm9yY2Utc3RhdHVzYmFyLXBhZGRpbmd7LS1pb24tc2FmZS1hcmVhLXRvcDoyMHB4fVwiOyB9XG59O1xuY29uc3QgbmVlZElucHV0U2hpbXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlzUGxhdGZvcm0od2luZG93LCAnaW9zJykgJiYgaXNQbGF0Zm9ybSh3aW5kb3csICdtb2JpbGUnKTtcbn07XG5jb25zdCBySUMgPSAoY2FsbGJhY2spID0+IHtcbiAgICBpZiAoJ3JlcXVlc3RJZGxlQ2FsbGJhY2snIGluIHdpbmRvdykge1xuICAgICAgICB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAzMik7XG4gICAgfVxufTtcblxuY29uc3QgQnV0dG9ucyA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0cnVlLCBidXR0b25zIHdpbGwgZGlzYXBwZWFyIHdoZW4gaXRzXG4gICAgICAgICAqIHBhcmVudCB0b29sYmFyIGhhcyBmdWxseSBjb2xsYXBzZWQgaWYgdGhlIHRvb2xiYXJcbiAgICAgICAgICogaXMgbm90IHRoZSBmaXJzdCB0b29sYmFyLiBJZiB0aGUgdG9vbGJhciBpcyB0aGVcbiAgICAgICAgICogZmlyc3QgdG9vbGJhciwgdGhlIGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gYW5kIHdpbGxcbiAgICAgICAgICogb25seSBiZSBzaG93biBvbmNlIGFsbCB0b29sYmFycyBoYXZlIGZ1bGx5IGNvbGxhcHNlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogT25seSBhcHBsaWVzIGluIGBpb3NgIG1vZGUgd2l0aCBgY29sbGFwc2VgIHNldCB0b1xuICAgICAgICAgKiBgdHJ1ZWAgb24gYGlvbi1oZWFkZXJgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUeXBpY2FsbHkgdXNlZCBmb3IgW0NvbGxhcHNpYmxlIExhcmdlIFRpdGxlc10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvdGl0bGUjY29sbGFwc2libGUtbGFyZ2UtdGl0bGVzKVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb2xsYXBzZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBbJ2J1dHRvbnMtY29sbGFwc2UnXTogdGhpcy5jb2xsYXBzZVxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tYnV0dG9ucy1tZC1oe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt6LWluZGV4Ojk5fS5zYy1pb24tYnV0dG9ucy1tZC1zICBpb24tYnV0dG9uIHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6OHB4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tYm94LXNoYWRvdzpub25lO21hcmdpbi1sZWZ0OjJweDttYXJnaW4tcmlnaHQ6MnB4O2hlaWdodDozMnB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1idXR0b24ge21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHh9fS5zYy1pb24tYnV0dG9ucy1tZC1zICBpb24tYnV0dG9uOm5vdCguYnV0dG9uLXJvdW5kKSB7LS1ib3JkZXItcmFkaXVzOjJweH0uc2MtaW9uLWJ1dHRvbnMtbWQtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbiAsIC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLW1kLWguc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbiB7LS1jb2xvcjppbml0aWFsOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tY29sb3ItaG92ZXI6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWJhY2tncm91bmQtaG92ZXI6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwwLjA4KTstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLDAuMjQpfS5zYy1pb24tYnV0dG9ucy1tZC1oLmlvbi1jb2xvci5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLXNvbGlkICwgLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtbWQtaC5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLXNvbGlkIHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXRpbnQpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvci1ob3Zlcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnNjLWlvbi1idXR0b25zLW1kLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLW1kLXMgIC5idXR0b24tb3V0bGluZSAsIC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLW1kLWguc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbi1vdXRsaW5lIHstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLWhhcy1pY29uLW9ubHkuYnV0dG9uLWNsZWFyIHstLXBhZGRpbmctdG9wOjEycHg7LS1wYWRkaW5nLWVuZDoxMnB4Oy0tcGFkZGluZy1ib3R0b206MTJweDstLXBhZGRpbmctc3RhcnQ6MTJweDstLWJvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uIHstLWJhY2tncm91bmQtaG92ZXI6cmdiYSg2Niw2Niw2NiwwLjA4KX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbi1zb2xpZCB7LS1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLWJhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzQyNDI0MikpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzQyNDI0MikpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLWFjdGl2YXRlZCwjNGE0YTRhKTstLWJhY2tncm91bmQtaG92ZXI6cmdiYSg2Niw2Niw2NiwwLjkyKX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbi1vdXRsaW5lIHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1pb24tdGV4dC1jb2xvciwjNDI0MjQyKSk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSg2Niw2Niw2NiwwLjEpfS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLWNsZWFyICwgLnNjLWlvbi1idXR0b25zLW1kLXMgIC5idXR0b24tb3V0bGluZSB7LS1jb2xvcjppbml0aWFsOy0tY29sb3ItYWN0aXZhdGVkOmN1cnJlbnRDb2xvcjstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzQyNDI0MikpfS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLWNsZWFyIHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSg2Niw2Niw2NiwwLjEpfS5zYy1pb24tYnV0dG9ucy1tZC1zICBpb24taWNvbltzbG90PXN0YXJ0XSB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1yaWdodDouM2VtO2ZvbnQtc2l6ZToxLjRlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1pY29uW3Nsb3Q9c3RhcnRdIHttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tZW5kOi4zZW07bWFyZ2luLWlubGluZS1lbmQ6LjNlbX19LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1pY29uW3Nsb3Q9ZW5kXSB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1sZWZ0Oi40ZW07Zm9udC1zaXplOjEuNGVtfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2MtaW9uLWJ1dHRvbnMtbWQtcyAgaW9uLWljb25bc2xvdD1lbmRdIHttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDouNGVtO21hcmdpbi1pbmxpbmUtc3RhcnQ6LjRlbX19LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSB7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Zm9udC1zaXplOjEuOGVtfVwiOyB9XG59O1xuXG5jb25zdCBDb250ZW50ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RTY3JvbGwgPSAwO1xuICAgICAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNUb3AgPSAtMTtcbiAgICAgICAgdGhpcy5jQm90dG9tID0gLTE7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8vIERldGFpbCBpcyB1c2VkIGluIGEgaG90IGxvb3AgaW4gdGhlIHNjcm9sbCBldmVudCwgYnkgYWxsb2NhdGluZyBpdCBoZXJlXG4gICAgICAgIC8vIFY4IHdpbGwgYmUgYWJsZSB0byBpbmxpbmUgYW55IHJlYWQvd3JpdGUgdG8gaXQgc2luY2UgaXQncyBhIG1vbm9tb3JwaGljIGNsYXNzLlxuICAgICAgICAvLyBodHRwczovL21yYWxlLnBoL2Jsb2cvMjAxNS8wMS8xMS93aGF0cy11cC13aXRoLW1vbm9tb3JwaGlzbS5odG1sXG4gICAgICAgIHRoaXMuZGV0YWlsID0ge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgICAgICAgIHR5cGU6ICdzY3JvbGwnLFxuICAgICAgICAgICAgZXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgIHN0YXJ0VGltZVN0YW1wOiAwLFxuICAgICAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5WDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5WTogMCxcbiAgICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICAgIGRlbHRhWTogMCxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogMCxcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgY29udGVudCB3aWxsIHNjcm9sbCBiZWhpbmQgdGhlIGhlYWRlcnNcbiAgICAgICAgICogYW5kIGZvb3RlcnMuIFRoaXMgZWZmZWN0IGNhbiBlYXNpbHkgYmUgc2VlbiBieSBzZXR0aW5nIHRoZSB0b29sYmFyXG4gICAgICAgICAqIHRvIHRyYW5zcGFyZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBlbmFibGUgdGhlIGNvbnRlbnQgc2Nyb2xsaW5nIGluIHRoZSBYIGF4aXMsIHNldCB0aGlzIHByb3BlcnR5IHRvIGB0cnVlYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB0aGUgY29udGVudCBzY3JvbGxpbmcgaW4gdGhlIFkgYXhpcywgc2V0IHRoaXMgcHJvcGVydHkgdG8gYGZhbHNlYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMsIGlvblNjcm9sbCBldmVudHMgYXJlIGRpc2FibGVkIGJ5IGRlZmF1bHQsIGluIG9yZGVyIHRvIGVuYWJsZSB0aGVtXG4gICAgICAgICAqIGFuZCBzdGFydCBsaXN0ZW5pbmcgZnJvbSAoaW9uU2Nyb2xsKSwgc2V0IHRoaXMgcHJvcGVydHkgdG8gYHRydWVgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY3JvbGxFdmVudHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pb25TY3JvbGxTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2Nyb2xsU3RhcnRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2Nyb2xsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TY3JvbGxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2Nyb2xsRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TY3JvbGxFbmRcIiwgNyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICAgIG9uQ2xpY2soZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG91bGRGb3JjZU92ZXJzY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHsgZm9yY2VPdmVyc2Nyb2xsLCBtb2RlIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gZm9yY2VPdmVyc2Nyb2xsID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbW9kZSA9PT0gJ2lvcycgJiYgaXNQbGF0Zm9ybSgnaW9zJylcbiAgICAgICAgICAgIDogZm9yY2VPdmVyc2Nyb2xsO1xuICAgIH1cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHJlYWRUYXNrKHRoaXMucmVhZERpbWVuc2lvbnMuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jVG9wICE9PSAwIHx8IHRoaXMuY0JvdHRvbSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jVG9wID0gdGhpcy5jQm90dG9tID0gMDtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWFkRGltZW5zaW9ucygpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IGdldFBhZ2VFbGVtZW50KHRoaXMuZWwpO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLm1heCh0aGlzLmVsLm9mZnNldFRvcCwgMCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWF4KHBhZ2Uub2Zmc2V0SGVpZ2h0IC0gdG9wIC0gdGhpcy5lbC5vZmZzZXRIZWlnaHQsIDApO1xuICAgICAgICBjb25zdCBkaXJ0eSA9IHRvcCAhPT0gdGhpcy5jVG9wIHx8IGJvdHRvbSAhPT0gdGhpcy5jQm90dG9tO1xuICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuY1RvcCA9IHRvcDtcbiAgICAgICAgICAgIHRoaXMuY0JvdHRvbSA9IGJvdHRvbTtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblNjcm9sbChldikge1xuICAgICAgICBjb25zdCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBzaG91bGRTdGFydCA9ICF0aGlzLmlzU2Nyb2xsaW5nO1xuICAgICAgICB0aGlzLmxhc3RTY3JvbGwgPSB0aW1lU3RhbXA7XG4gICAgICAgIGlmIChzaG91bGRTdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblNjcm9sbFN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnF1ZXVlZCAmJiB0aGlzLnNjcm9sbEV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVhZFRhc2sodHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWwuZXZlbnQgPSBldjtcbiAgICAgICAgICAgICAgICB1cGRhdGVTY3JvbGxEZXRhaWwodGhpcy5kZXRhaWwsIHRoaXMuc2Nyb2xsRWwsIHRzLCBzaG91bGRTdGFydCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25TY3JvbGwuZW1pdCh0aGlzLmRldGFpbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVsZW1lbnQgd2hlcmUgdGhlIGFjdHVhbCBzY3JvbGxpbmcgdGFrZXMgcGxhY2UuXG4gICAgICogVGhpcyBlbGVtZW50IGNhbiBiZSB1c2VkIHRvIHN1YnNjcmliZSB0byBgc2Nyb2xsYCBldmVudHMgb3IgbWFudWFsbHkgbW9kaWZ5XG4gICAgICogYHNjcm9sbFRvcGAuIEhvd2V2ZXIsIGl0J3MgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBBUEkgcHJvdmlkZWQgYnkgYGlvbi1jb250ZW50YDpcbiAgICAgKlxuICAgICAqIGkuZS4gVXNpbmcgYGlvblNjcm9sbGAsIGBpb25TY3JvbGxTdGFydGAsIGBpb25TY3JvbGxFbmRgIGZvciBzY3JvbGxpbmcgZXZlbnRzXG4gICAgICogYW5kIGBzY3JvbGxUb1BvaW50KClgIHRvIHNjcm9sbCB0aGUgY29udGVudCBpbnRvIGEgY2VydGFpbiBwb2ludC5cbiAgICAgKi9cbiAgICBnZXRTY3JvbGxFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2Nyb2xsRWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB0byB0YWtlIHNjcm9sbGluZyB0byB0aGUgdG9wLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgc2Nyb2xsVG9Ub3AoZHVyYXRpb24gPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCAwLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIHRvIHRoZSBib3R0b20uIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbShkdXJhdGlvbiA9IDApIHtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5zY3JvbGxFbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCB5LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBieSBhIHNwZWNpZmllZCBYL1kgZGlzdGFuY2UgaW4gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IFRoZSBhbW91bnQgdG8gc2Nyb2xsIGJ5IG9uIHRoZSBob3Jpem9udGFsIGF4aXMuXG4gICAgICogQHBhcmFtIHkgVGhlIGFtb3VudCB0byBzY3JvbGwgYnkgb24gdGhlIHZlcnRpY2FsIGF4aXMuXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB0byB0YWtlIHNjcm9sbGluZyBieSB0aGF0IGFtb3VudC5cbiAgICAgKi9cbiAgICBzY3JvbGxCeVBvaW50KHgsIHksIGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQoeCArIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsTGVmdCwgeSArIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIHNwZWNpZmllZCBYL1kgbG9jYXRpb24gaW4gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IFRoZSBwb2ludCB0byBzY3JvbGwgdG8gb24gdGhlIGhvcml6b250YWwgYXhpcy5cbiAgICAgKiBAcGFyYW0geSBUaGUgcG9pbnQgdG8gc2Nyb2xsIHRvIG9uIHRoZSB2ZXJ0aWNhbCBheGlzLlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgdG8gdGhhdCBwb2ludC4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIGFzeW5jIHNjcm9sbFRvUG9pbnQoeCwgeSwgZHVyYXRpb24gPSAwKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5zY3JvbGxFbDtcbiAgICAgICAgaWYgKGR1cmF0aW9uIDwgMzIpIHtcbiAgICAgICAgICAgIGlmICh5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHZlO1xuICAgICAgICBsZXQgc3RhcnRUaW1lID0gMDtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHIgPT4gcmVzb2x2ZSA9IHIpO1xuICAgICAgICBjb25zdCBmcm9tWSA9IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgY29uc3QgZnJvbVggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBjb25zdCBkZWx0YVkgPSB5ICE9IG51bGwgPyB5IC0gZnJvbVkgOiAwO1xuICAgICAgICBjb25zdCBkZWx0YVggPSB4ICE9IG51bGwgPyB4IC0gZnJvbVggOiAwO1xuICAgICAgICAvLyBzY3JvbGwgbG9vcFxuICAgICAgICBjb25zdCBzdGVwID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluZWFyVGltZSA9IE1hdGgubWluKDEsICgodGltZVN0YW1wIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKSkgLSAxO1xuICAgICAgICAgICAgY29uc3QgZWFzZWRUID0gTWF0aC5wb3cobGluZWFyVGltZSwgMykgKyAxO1xuICAgICAgICAgICAgaWYgKGRlbHRhWSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IE1hdGguZmxvb3IoKGVhc2VkVCAqIGRlbHRhWSkgKyBmcm9tWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVsdGFYICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoKGVhc2VkVCAqIGRlbHRhWCkgKyBmcm9tWCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWFzZWRUIDwgMSkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdCB1c2UgRG9tQ29udHJvbGxlciBoZXJlXG4gICAgICAgICAgICAgICAgLy8gbXVzdCB1c2UgbmF0aXZlUmFmIGluIG9yZGVyIHRvIGZpcmUgaW4gdGhlIG5leHQgZnJhbWVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgYXMgYW55XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBjaGlsbCBvdXQgZm9yIGEgZnJhbWUgZmlyc3RcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRzID0+IHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IHRzO1xuICAgICAgICAgICAgc3RlcCh0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgb25TY3JvbGxTdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uU2Nyb2xsU3RhcnQuZW1pdCh7XG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hEb2cpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaERvZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2F0Y2hkb2dcbiAgICAgICAgdGhpcy53YXRjaERvZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RTY3JvbGwgPCBEYXRlLm5vdygpIC0gMTIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblNjcm9sbEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cbiAgICBvblNjcm9sbEVuZCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoRG9nKTtcbiAgICAgICAgdGhpcy53YXRjaERvZyA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlvblNjcm9sbEVuZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgZm9yY2VPdmVyc2Nyb2xsID0gdGhpcy5zaG91bGRGb3JjZU92ZXJzY3JvbGwoKTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvblNoYWRvdyA9IChtb2RlID09PSAnaW9zJyAmJiBjb25maWcuZ2V0Qm9vbGVhbignZXhwZXJpbWVudGFsVHJhbnNpdGlvblNoYWRvdycsIHRydWUpKTtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUsICdjb250ZW50LXNpemluZyc6IGhvc3RDb250ZXh0KCdpb24tcG9wb3ZlcicsIHRoaXMuZWwpLCAnb3ZlcnNjcm9sbCc6IGZvcmNlT3ZlcnNjcm9sbCB9KSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAnLS1vZmZzZXQtdG9wJzogYCR7dGhpcy5jVG9wfXB4YCxcbiAgICAgICAgICAgICAgICAnLS1vZmZzZXQtYm90dG9tJzogYCR7dGhpcy5jQm90dG9tfXB4YCxcbiAgICAgICAgICAgIH0gfSwgaChcIm1haW5cIiwgeyBjbGFzczoge1xuICAgICAgICAgICAgICAgICdpbm5lci1zY3JvbGwnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzY3JvbGwteCc6IHNjcm9sbFgsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbC15Jzogc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICAnb3ZlcnNjcm9sbCc6IChzY3JvbGxYIHx8IHNjcm9sbFkpICYmIGZvcmNlT3ZlcnNjcm9sbFxuICAgICAgICAgICAgfSwgcmVmOiBlbCA9PiB0aGlzLnNjcm9sbEVsID0gZWwsIG9uU2Nyb2xsOiBldiA9PiB0aGlzLm9uU2Nyb2xsKGV2KSB9LCBoKFwic2xvdFwiLCBudWxsKSksIHRyYW5zaXRpb25TaGFkb3cgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBcInRyYW5zaXRpb24tZWZmZWN0XCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRyYW5zaXRpb24tY292ZXJcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRyYW5zaXRpb24tc2hhZG93XCIgfSkpKSA6IG51bGwsIGgoXCJzbG90XCIsIHsgbmFtZTogXCJmaXhlZFwiIH0pKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7LS1jb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTstLXBhZGRpbmctdG9wOjBweDstLXBhZGRpbmctYm90dG9tOjBweDstLXBhZGRpbmctc3RhcnQ6MHB4Oy0tcGFkZGluZy1lbmQ6MHB4Oy0ta2V5Ym9hcmQtb2Zmc2V0OjBweDstLW9mZnNldC10b3A6MHB4Oy0tb2Zmc2V0LWJvdHRvbTowcHg7LS1vdmVyZmxvdzphdXRvO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Y29udGFpbjpzaXplIHN0eWxlfTpob3N0KC5pb24tY29sb3IpIC5pbm5lci1zY3JvbGx7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCgub3V0ZXItY29udGVudCl7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCNmMmYyZjIpfS5pbm5lci1zY3JvbGx7bGVmdDowO3JpZ2h0OjA7dG9wOmNhbGModmFyKC0tb2Zmc2V0LXRvcCkgKiAtMSk7Ym90dG9tOmNhbGModmFyKC0tb2Zmc2V0LWJvdHRvbSkgKiAtMSk7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOmNhbGModmFyKC0tcGFkZGluZy10b3ApICsgdmFyKC0tb2Zmc2V0LXRvcCkpO3BhZGRpbmctYm90dG9tOmNhbGModmFyKC0tcGFkZGluZy1ib3R0b20pICsgdmFyKC0ta2V5Ym9hcmQtb2Zmc2V0KSArIHZhcigtLW9mZnNldC1ib3R0b20pKTtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuaW5uZXItc2Nyb2xse3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0uc2Nyb2xsLXgsLnNjcm9sbC15ey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3dpbGwtY2hhbmdlOnNjcm9sbC1wb3NpdGlvbjstbXMtc2Nyb2xsLWNoYWluaW5nOm5vbmU7b3ZlcnNjcm9sbC1iZWhhdmlvcjpjb250YWlufS5zY3JvbGwteXstbXMtdG91Y2gtYWN0aW9uOnBhbi15O3RvdWNoLWFjdGlvbjpwYW4teTtvdmVyZmxvdy15OnZhcigtLW92ZXJmbG93KX0uc2Nyb2xsLXh7LW1zLXRvdWNoLWFjdGlvbjpwYW4teDt0b3VjaC1hY3Rpb246cGFuLXg7b3ZlcmZsb3cteDp2YXIoLS1vdmVyZmxvdyl9LnNjcm9sbC14LnNjcm9sbC15ey1tcy10b3VjaC1hY3Rpb246YXV0bzt0b3VjaC1hY3Rpb246YXV0b30ub3ZlcnNjcm9sbDphZnRlciwub3ZlcnNjcm9sbDpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7Y29udGVudDpcXFwiXFxcIn0ub3ZlcnNjcm9sbDpiZWZvcmV7Ym90dG9tOi0xcHh9Lm92ZXJzY3JvbGw6YWZ0ZXJ7dG9wOi0xcHh9Omhvc3QoLmNvbnRlbnQtc2l6aW5nKXtjb250YWluOm5vbmV9Omhvc3QoLmNvbnRlbnQtc2l6aW5nKSAuaW5uZXItc2Nyb2xse3Bvc2l0aW9uOnJlbGF0aXZlfS50cmFuc2l0aW9uLWVmZmVjdHtsZWZ0Oi0xMDAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS50cmFuc2l0aW9uLWNvdmVyLC50cmFuc2l0aW9uLWVmZmVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS50cmFuc2l0aW9uLWNvdmVye3JpZ2h0OjA7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6LjF9LnRyYW5zaXRpb24tc2hhZG93e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt3aWR0aDoxMHB4O2hlaWdodDoxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBZ0NBWUFBQUFJWHJnNEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeWhwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRRMUlEYzVMakUyTXpRNU9Td2dNakF4T0M4d09DOHhNeTB4TmpvME1Eb3lNaUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRTFoWTJsdWRHOXphQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TVRFM01EZ3pSa1E1UVRreU1URkZPVUV3TnpRNU1rSkZSRUUxTlVZMk1qUWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNVEUzTURnelJrVTVRVGt5TVRGRk9VRXdOelE1TWtKRlJFRTFOVVkyTWpRaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3hNVGN3T0ROR1FqbEJPVEl4TVVVNVFUQTNORGt5UWtWRVFUVTFSall5TkNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveE1UY3dPRE5HUXpsQk9USXhNVVU1UVRBM05Ea3lRa1ZFUVRVMVJqWXlOQ0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUG1lUEV1UUFBQUJOU1VSQlZIamFZdnovL3o4REl4QXdNREF3QVRHTWhtRm1QRFF1T1Naa3MwQU1tb0pCYVFIamtQZkIwTGZnLzJnUWpWb3crSFB5L3lIdmc5R2lZalFmak1iQnFBV2pGZ3kvNGhvZ3dBRFlxd2R6eHk1QnV3QUFBQUJKUlU1RXJrSmdnZz09KTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteTtiYWNrZ3JvdW5kLXNpemU6MTBweCAxNnB4fVwiOyB9XG59O1xuY29uc3QgZ2V0UGFyZW50RWxlbWVudCA9IChlbCkgPT4ge1xuICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIC8vIG5vcm1hbCBlbGVtZW50IHdpdGggYSBwYXJlbnQgZWxlbWVudFxuICAgICAgICByZXR1cm4gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5ob3N0KSB7XG4gICAgICAgIC8vIHNoYWRvdyBkb20ncyBkb2N1bWVudCBmcmFnbWVudFxuICAgICAgICByZXR1cm4gZWwucGFyZW50Tm9kZS5ob3N0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRQYWdlRWxlbWVudCA9IChlbCkgPT4ge1xuICAgIGNvbnN0IHRhYnMgPSBlbC5jbG9zZXN0KCdpb24tdGFicycpO1xuICAgIGlmICh0YWJzKSB7XG4gICAgICAgIHJldHVybiB0YWJzO1xuICAgIH1cbiAgICBjb25zdCBwYWdlID0gZWwuY2xvc2VzdCgnaW9uLWFwcCxpb24tcGFnZSwuaW9uLXBhZ2UscGFnZS1pbm5lcicpO1xuICAgIGlmIChwYWdlKSB7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UGFyZW50RWxlbWVudChlbCk7XG59O1xuLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxuY29uc3QgdXBkYXRlU2Nyb2xsRGV0YWlsID0gKGRldGFpbCwgZWwsIHRpbWVzdGFtcCwgc2hvdWxkU3RhcnQpID0+IHtcbiAgICBjb25zdCBwcmV2WCA9IGRldGFpbC5jdXJyZW50WDtcbiAgICBjb25zdCBwcmV2WSA9IGRldGFpbC5jdXJyZW50WTtcbiAgICBjb25zdCBwcmV2VCA9IGRldGFpbC50aW1lU3RhbXA7XG4gICAgY29uc3QgY3VycmVudFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IGN1cnJlbnRZID0gZWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHRpbWVEZWx0YSA9IHRpbWVzdGFtcCAtIHByZXZUO1xuICAgIGlmIChzaG91bGRTdGFydCkge1xuICAgICAgICAvLyByZW1lbWJlciB0aGUgc3RhcnQgcG9zaXRpb25zXG4gICAgICAgIGRldGFpbC5zdGFydFRpbWVTdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgZGV0YWlsLnN0YXJ0WCA9IGN1cnJlbnRYO1xuICAgICAgICBkZXRhaWwuc3RhcnRZID0gY3VycmVudFk7XG4gICAgICAgIGRldGFpbC52ZWxvY2l0eVggPSBkZXRhaWwudmVsb2NpdHlZID0gMDtcbiAgICB9XG4gICAgZGV0YWlsLnRpbWVTdGFtcCA9IHRpbWVzdGFtcDtcbiAgICBkZXRhaWwuY3VycmVudFggPSBkZXRhaWwuc2Nyb2xsTGVmdCA9IGN1cnJlbnRYO1xuICAgIGRldGFpbC5jdXJyZW50WSA9IGRldGFpbC5zY3JvbGxUb3AgPSBjdXJyZW50WTtcbiAgICBkZXRhaWwuZGVsdGFYID0gY3VycmVudFggLSBkZXRhaWwuc3RhcnRYO1xuICAgIGRldGFpbC5kZWx0YVkgPSBjdXJyZW50WSAtIGRldGFpbC5zdGFydFk7XG4gICAgaWYgKHRpbWVEZWx0YSA+IDAgJiYgdGltZURlbHRhIDwgMTAwKSB7XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChjdXJyZW50WCAtIHByZXZYKSAvIHRpbWVEZWx0YTtcbiAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKGN1cnJlbnRZIC0gcHJldlkpIC8gdGltZURlbHRhO1xuICAgICAgICBkZXRhaWwudmVsb2NpdHlYID0gdmVsb2NpdHlYICogMC43ICsgZGV0YWlsLnZlbG9jaXR5WCAqIDAuMztcbiAgICAgICAgZGV0YWlsLnZlbG9jaXR5WSA9IHZlbG9jaXR5WSAqIDAuNyArIGRldGFpbC52ZWxvY2l0eVkgKiAwLjM7XG4gICAgfVxufTtcblxuY29uc3QgRm9vdGVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGZvb3RlciB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IEluIG9yZGVyIHRvIHNjcm9sbCBjb250ZW50IGJlaGluZCB0aGUgZm9vdGVyLCB0aGUgYGZ1bGxzY3JlZW5gXG4gICAgICAgICAqIGF0dHJpYnV0ZSBuZWVkcyB0byBiZSBzZXQgb24gdGhlIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zbHVjZW50ID0gdGhpcy50cmFuc2x1Y2VudDtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJjb250ZW50aW5mb1wiLCBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBbYGZvb3Rlci0ke21vZGV9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgW2Bmb290ZXItdHJhbnNsdWNlbnRgXTogdHJhbnNsdWNlbnQsXG4gICAgICAgICAgICAgICAgW2Bmb290ZXItdHJhbnNsdWNlbnQtJHttb2RlfWBdOiB0cmFuc2x1Y2VudCxcbiAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJpb24tZm9vdGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO3dpZHRoOjEwMCU7ei1pbmRleDoxMH1pb24tZm9vdGVyIGlvbi10b29sYmFyOmxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sMCl9LmZvb3Rlci1tZDpiZWZvcmV7bGVmdDowO3RvcDotMnB4O2JvdHRvbTphdXRvO2JhY2tncm91bmQtcG9zaXRpb246bGVmdCAwIHRvcCAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kLWltYWdlOnVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQlBEdWVOQUFBQUJYUlNUbE1VQ1MwZ0JJaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT1cXFwiKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteDtjb250ZW50OlxcXCJcXFwifTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuZm9vdGVyLW1kOmJlZm9yZSxbZGlyPXJ0bF0gLmZvb3Rlci1tZDpiZWZvcmV7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowO2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgMCB0b3AgMH0uZm9vdGVyLW1kW25vLWJvcmRlcl06YmVmb3Jle2Rpc3BsYXk6bm9uZX1cIjsgfVxufTtcblxuY29uc3QgVFJBTlNJVElPTiA9ICdhbGwgMC4ycyBlYXNlLWluLW91dCc7XHJcbmNvbnN0IGNsb25lRWxlbWVudCA9ICh0YWdOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBnZXRDYWNoZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dGFnTmFtZX0uaW9uLWNsb25lZC1lbGVtZW50YCk7XHJcbiAgICBpZiAoZ2V0Q2FjaGVkRWwgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q2FjaGVkRWw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbG9uZWRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICBjbG9uZWRFbC5jbGFzc0xpc3QuYWRkKCdpb24tY2xvbmVkLWVsZW1lbnQnKTtcclxuICAgIGNsb25lZEVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWwpO1xyXG4gICAgcmV0dXJuIGNsb25lZEVsO1xyXG59O1xyXG5jb25zdCBjcmVhdGVIZWFkZXJJbmRleCA9IChoZWFkZXJFbCkgPT4ge1xyXG4gICAgaWYgKCFoZWFkZXJFbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvb2xiYXJzID0gaGVhZGVyRWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLXRvb2xiYXInKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZWw6IGhlYWRlckVsLFxyXG4gICAgICAgIHRvb2xiYXJzOiBBcnJheS5mcm9tKHRvb2xiYXJzKS5tYXAoKHRvb2xiYXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW9uVGl0bGVFbCA9IHRvb2xiYXIucXVlcnlTZWxlY3RvcignaW9uLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbDogdG9vbGJhcixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRvb2xiYXIuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci1iYWNrZ3JvdW5kJyksXHJcbiAgICAgICAgICAgICAgICBpb25UaXRsZUVsLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJUaXRsZUVsOiAoaW9uVGl0bGVFbCkgPyBpb25UaXRsZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2xiYXItdGl0bGUnKSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpb25CdXR0b25zRWw6IEFycmF5LmZyb20odG9vbGJhci5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucycpKSB8fCBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pIHx8IFtbXV1cclxuICAgIH07XHJcbn07XHJcbmNvbnN0IGhhbmRsZUNvbnRlbnRTY3JvbGwgPSAoc2Nyb2xsRWwsIHNjcm9sbEhlYWRlckluZGV4KSA9PiB7XHJcbiAgICByZWFkVGFzaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gY2xhbXAoMSwgMSArICgtc2Nyb2xsVG9wIC8gNTAwKSwgMS4xKTtcclxuICAgICAgICB3cml0ZVRhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBzY2FsZUxhcmdlVGl0bGVzKHNjcm9sbEhlYWRlckluZGV4LnRvb2xiYXJzLCBzY2FsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3Qgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5ID0gKHRvb2xiYXIsIG9wYWNpdHkpID0+IHtcclxuICAgIGlmIChvcGFjaXR5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0b29sYmFyLmJhY2tncm91bmQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tb3BhY2l0eScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdG9vbGJhci5iYWNrZ3JvdW5kLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHknLCBvcGFjaXR5LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBoYW5kbGVUb29sYmFyQm9yZGVySW50ZXJzZWN0aW9uID0gKGV2LCBtYWluSGVhZGVySW5kZXgpID0+IHtcclxuICAgIGlmICghZXZbMF0uaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzY2FsZSA9ICgoMSAtIGV2WzBdLmludGVyc2VjdGlvblJhdGlvKSAqIDEwMCkgLyA3NTtcclxuICAgIHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eShtYWluSGVhZGVySW5kZXgudG9vbGJhcnNbMF0sIChzY2FsZSA9PT0gMSkgPyB1bmRlZmluZWQgOiBzY2FsZSk7XHJcbn07XHJcbi8qKlxyXG4gKiBJZiB0b29sYmFycyBhcmUgaW50ZXJzZWN0aW5nLCBoaWRlIHRoZSBzY3JvbGxhYmxlIHRvb2xiYXIgY29udGVudFxyXG4gKiBhbmQgc2hvdyB0aGUgcHJpbWFyeSB0b29sYmFyIGNvbnRlbnQuIElmIHRoZSB0b29sYmFycyBhcmUgbm90IGludGVyc2VjdGluZyxcclxuICogaGlkZSB0aGUgcHJpbWFyeSB0b29sYmFyIGNvbnRlbnQgYW5kIHNob3cgdGhlIHNjcm9sbGFibGUgdG9vbGJhciBjb250ZW50XHJcbiAqL1xyXG5jb25zdCBoYW5kbGVUb29sYmFySW50ZXJzZWN0aW9uID0gKGV2LCBtYWluSGVhZGVySW5kZXgsIHNjcm9sbEhlYWRlckluZGV4KSA9PiB7XHJcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZVRvb2xiYXJCb3JkZXJJbnRlcnNlY3Rpb24oZXYsIG1haW5IZWFkZXJJbmRleCk7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldlswXTtcclxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBldmVudC5pbnRlcnNlY3Rpb25SZWN0O1xyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbkFyZWEgPSBpbnRlcnNlY3Rpb24ud2lkdGggKiBpbnRlcnNlY3Rpb24uaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHJvb3RBcmVhID0gZXZlbnQucm9vdEJvdW5kcy53aWR0aCAqIGV2ZW50LnJvb3RCb3VuZHMuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGlzUGFnZUhpZGRlbiA9IGludGVyc2VjdGlvbkFyZWEgPT09IDAgJiYgcm9vdEFyZWEgPT09IDA7XHJcbiAgICAgICAgY29uc3QgbGVmdERpZmYgPSBNYXRoLmFicyhpbnRlcnNlY3Rpb24ubGVmdCAtIGV2ZW50LmJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0KTtcclxuICAgICAgICBjb25zdCByaWdodERpZmYgPSBNYXRoLmFicyhpbnRlcnNlY3Rpb24ucmlnaHQgLSBldmVudC5ib3VuZGluZ0NsaWVudFJlY3QucmlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGlzUGFnZVRyYW5zaXRpb25pbmcgPSBpbnRlcnNlY3Rpb25BcmVhID4gMCAmJiAobGVmdERpZmYgPj0gNSB8fCByaWdodERpZmYgPj0gNSk7XHJcbiAgICAgICAgaWYgKGlzUGFnZUhpZGRlbiB8fCBpc1BhZ2VUcmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHNldEhlYWRlckFjdGl2ZShtYWluSGVhZGVySW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKHNjcm9sbEhlYWRlckluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGVyZSBpcyBhIGJ1ZyB3aXRoIEludGVyc2VjdGlvbk9ic2VydmVyIG9uIFNhZmFyaVxyXG4gICAgICAgICAgICAgKiB3aGVyZSBgZXZlbnQuaXNJbnRlcnNlY3RpbmcgPT09IGZhbHNlYCB3aGVuIGNhbmNlbGxpbmdcclxuICAgICAgICAgICAgICogYSBzd2lwZSB0byBnbyBiYWNrIGdlc3R1cmUuIENoZWNraW5nIHRoZSBpbnRlcnNlY3Rpb25cclxuICAgICAgICAgICAgICogeCwgeSwgd2lkdGgsIGFuZCBoZWlnaHQgcHJvdmlkZXMgYSB3b3JrYXJvdW5kLiBUaGlzIGJ1Z1xyXG4gICAgICAgICAgICAgKiBkb2VzIG5vdCBoYXBwZW4gd2hlbiB1c2luZyBTYWZhcmkgKyBXZWIgQW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICogb25seSBTYWZhcmkgKyBDU1MgQW5pbWF0aW9ucy5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1ZhbGlkSW50ZXJzZWN0aW9uID0gKGludGVyc2VjdGlvbi54ID09PSAwICYmIGludGVyc2VjdGlvbi55ID09PSAwKSB8fCAoaW50ZXJzZWN0aW9uLndpZHRoICE9PSAwICYmIGludGVyc2VjdGlvbi5oZWlnaHQgIT09IDApO1xyXG4gICAgICAgICAgICBpZiAoaGFzVmFsaWRJbnRlcnNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHNldEhlYWRlckFjdGl2ZShtYWluSGVhZGVySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKHNjcm9sbEhlYWRlckluZGV4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb29sYmFyQmFja2dyb3VuZE9wYWNpdHkobWFpbkhlYWRlckluZGV4LnRvb2xiYXJzWzBdLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBzZXRIZWFkZXJBY3RpdmUgPSAoaGVhZGVySW5kZXgsIGFjdGl2ZSA9IHRydWUpID0+IHtcclxuICAgIHdyaXRlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICBoZWFkZXJJbmRleC5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlckluZGV4LmVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBzY2FsZUxhcmdlVGl0bGVzID0gKHRvb2xiYXJzID0gW10sIHNjYWxlID0gMSwgdHJhbnNpdGlvbiA9IGZhbHNlKSA9PiB7XHJcbiAgICB0b29sYmFycy5mb3JFYWNoKHRvb2xiYXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlvblRpdGxlID0gdG9vbGJhci5pb25UaXRsZUVsO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gdG9vbGJhci5pbm5lclRpdGxlRWw7XHJcbiAgICAgICAgaWYgKCFpb25UaXRsZSB8fCBpb25UaXRsZS5zaXplICE9PSAnbGFyZ2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGl0bGVEaXYuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ2xlZnQgY2VudGVyJztcclxuICAgICAgICB0aXRsZURpdi5zdHlsZS50cmFuc2l0aW9uID0gKHRyYW5zaXRpb24pID8gVFJBTlNJVElPTiA6ICcnO1xyXG4gICAgICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZTNkKCR7c2NhbGV9LCAke3NjYWxlfSwgMSlgO1xyXG4gICAgfSk7XHJcbn07XG5cbmNvbnN0IEhlYWRlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuY29sbGFwc2libGVIZWFkZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgaGVhZGVyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogSW4gb3JkZXIgdG8gc2Nyb2xsIGNvbnRlbnQgYmVoaW5kIHRoZSBoZWFkZXIsIHRoZSBgZnVsbHNjcmVlbmBcbiAgICAgICAgICogYXR0cmlidXRlIG5lZWRzIHRvIGJlIHNldCBvbiB0aGUgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja0NvbGxhcHNpYmxlSGVhZGVyKCk7XG4gICAgfVxuICAgIGFzeW5jIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja0NvbGxhcHNpYmxlSGVhZGVyKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVubG9hZCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgICB9XG4gICAgYXN5bmMgY2hlY2tDb2xsYXBzaWJsZUhlYWRlcigpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBoZWFkZXIgY2FuIGNvbGxhcHNlXG4gICAgICAgIGNvbnN0IGhhc0NvbGxhcHNlID0gdGhpcy5jb2xsYXBzZSA9PT0gJ2NvbmRlbnNlJztcbiAgICAgICAgY29uc3QgY2FuQ29sbGFwc2UgPSAoaGFzQ29sbGFwc2UgJiYgZ2V0SW9uTW9kZSh0aGlzKSA9PT0gJ2lvcycpID8gaGFzQ29sbGFwc2UgOiBmYWxzZTtcbiAgICAgICAgaWYgKCFjYW5Db2xsYXBzZSAmJiB0aGlzLmNvbGxhcHNpYmxlSGVhZGVySW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUNvbGxhcHNpYmxlSGVhZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FuQ29sbGFwc2UgJiYgIXRoaXMuY29sbGFwc2libGVIZWFkZXJJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZUVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tYXBwLGlvbi1wYWdlLC5pb24tcGFnZSxwYWdlLWlubmVyJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWwgPSAocGFnZUVsKSA/IHBhZ2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tY29udGVudCcpIDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dXBDb2xsYXBzaWJsZUhlYWRlcihjb250ZW50RWwsIHBhZ2VFbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVzdHJveUNvbGxhcHNpYmxlSGVhZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsICYmIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHNldHVwQ29sbGFwc2libGVIZWFkZXIoY29udGVudEVsLCBwYWdlRWwpIHtcbiAgICAgICAgaWYgKCFjb250ZW50RWwgfHwgIXBhZ2VFbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignaW9uLWhlYWRlciByZXF1aXJlcyBhIGNvbnRlbnQgdG8gY29sbGFwc2UsIG1ha2Ugc3VyZSB0aGVyZSBpcyBhbiBpb24tY29udGVudC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbEVsID0gYXdhaXQgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICAgICAgcmVhZFRhc2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHBhZ2VFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24taGVhZGVyJyk7XG4gICAgICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gQXJyYXkuZnJvbShoZWFkZXJzKS5maW5kKChoZWFkZXIpID0+IGhlYWRlci5jb2xsYXBzZSAhPT0gJ2NvbmRlbnNlJyk7XG4gICAgICAgICAgICBpZiAoIW1haW5IZWFkZXIgfHwgIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtYWluSGVhZGVySW5kZXggPSBjcmVhdGVIZWFkZXJJbmRleChtYWluSGVhZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlYWRlckluZGV4ID0gY3JlYXRlSGVhZGVySW5kZXgodGhpcy5lbCk7XG4gICAgICAgICAgICBpZiAoIW1haW5IZWFkZXJJbmRleCB8fCAhc2Nyb2xsSGVhZGVySW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgICAgICAgICByZWFkVGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbkhlYWRlckhlaWdodCA9IG1haW5IZWFkZXJJbmRleC5lbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSGFuZGxlIGludGVyYWN0aW9uIGJldHdlZW4gdG9vbGJhciBjb2xsYXBzZSBhbmRcbiAgICAgICAgICAgICAgICAgKiBzaG93aW5nL2hpZGluZyBjb250ZW50IGluIHRoZSBwcmltYXJ5IGlvbi1oZWFkZXJcbiAgICAgICAgICAgICAgICAgKiBhcyB3ZWxsIGFzIHByb2dyZXNzaXZlbHkgc2hvd2luZy9oaWRpbmcgdGhlIG1haW4gaGVhZGVyXG4gICAgICAgICAgICAgICAgICogYm9yZGVyIGFzIHRoZSB0b3AtbW9zdCB0b29sYmFyIGNvbGxhcHNlcyBvciBleHBhbmRzLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJJbnRlcnNlY3Rpb24gPSAoZXYpID0+IHsgaGFuZGxlVG9vbGJhckludGVyc2VjdGlvbihldiwgbWFpbkhlYWRlckluZGV4LCBzY3JvbGxIZWFkZXJJbmRleCk7IH07XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0b29sYmFySW50ZXJzZWN0aW9uLCB7IHRocmVzaG9sZDogWzAuMjUsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOSwgMV0sIHJvb3RNYXJnaW46IGAtJHttYWluSGVhZGVySGVpZ2h0fXB4IDBweCAwcHggMHB4YCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUoc2Nyb2xsSGVhZGVySW5kZXgudG9vbGJhcnNbMF0uZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEhhbmRsZSBzY2FsaW5nIG9mIGxhcmdlIGlPUyB0aXRsZXMgYW5kXG4gICAgICAgICAgICAgKiBzaG93aW5nL2hpZGluZyBib3JkZXIgb24gbGFzdCB0b29sYmFyXG4gICAgICAgICAgICAgKiBpbiBwcmltYXJ5IGhlYWRlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9ICgpID0+IHsgaGFuZGxlQ29udGVudFNjcm9sbCh0aGlzLnNjcm9sbEVsLCBzY3JvbGxIZWFkZXJJbmRleCk7IH07XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgICAgICBjbG9uZUVsZW1lbnQoJ2lvbi10aXRsZScpO1xuICAgICAgICAgICAgY2xvbmVFbGVtZW50KCdpb24tYmFjay1idXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29sbGFwc2libGVIZWFkZXJJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZSB8fCAnbm9uZSc7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwiYmFubmVyXCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIFtgaGVhZGVyLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBbYGhlYWRlci10cmFuc2x1Y2VudGBdOiB0aGlzLnRyYW5zbHVjZW50LFxuICAgICAgICAgICAgICAgIFtgaGVhZGVyLWNvbGxhcHNlLSR7Y29sbGFwc2V9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgW2BoZWFkZXItdHJhbnNsdWNlbnQtJHttb2RlfWBdOiB0aGlzLnRyYW5zbHVjZW50LFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJpb24taGVhZGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTE7d2lkdGg6MTAwJTt6LWluZGV4OjEwfWlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6dmFyKC0taW9uLXNhZmUtYXJlYS10b3AsMCl9LmhlYWRlci1tZDphZnRlcntsZWZ0OjA7Ym90dG9tOi01cHg7YmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IDAgdG9wIC0ycHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6NXB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBSEJBTUFBQUR6RHRCeEFBQUFEMUJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUJQRHVlTkFBQUFCWFJTVGxNVUNTMGdCSWgvVFhFQUFBQWFTVVJCVkFqWFl4Q0VBZ1k0VUlJQ0JtTW9nTXNnRkx0QUFRQ05Td1haS09kUHhnQUFBQUJKUlU1RXJrSmdnZz09KTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteDtjb250ZW50OlxcXCJcXFwifTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaGVhZGVyLW1kOmFmdGVyLFtkaXI9cnRsXSAuaGVhZGVyLW1kOmFmdGVye2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MDtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IDAgdG9wIC0ycHh9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSwuaGVhZGVyLW1kW25vLWJvcmRlcl06YWZ0ZXJ7ZGlzcGxheTpub25lfVwiOyB9XG59O1xuXG5jb25zdCBSb3V0ZXJPdXRsZXQgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vZGUgZGV0ZXJtaW5lcyB3aGljaCBwbGF0Zm9ybSBzdHlsZXMgdG8gdXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHJvdXRlci1vdXRsZXQgc2hvdWxkIGFuaW1hdGUgdGhlIHRyYW5zaXRpb24gb2YgY29tcG9uZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsQ2hhbmdlXCIsIDMpO1xuICAgICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTmF2RGlkQ2hhbmdlXCIsIDMpO1xuICAgIH1cbiAgICBzd2lwZUhhbmRsZXJDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5zd2lwZUhhbmRsZXIgPT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vc3dpcGUtYmFjay0zNWFkOGUzNy5qcycpKS5jcmVhdGVTd2lwZUJhY2tHZXN0dXJlKHRoaXMuZWwsICgpID0+ICEhdGhpcy5zd2lwZUhhbmRsZXIgJiYgdGhpcy5zd2lwZUhhbmRsZXIuY2FuU3RhcnQoKSAmJiB0aGlzLmFuaW1hdGlvbkVuYWJsZWQsICgpID0+IHRoaXMuc3dpcGVIYW5kbGVyICYmIHRoaXMuc3dpcGVIYW5kbGVyLm9uU3RhcnQoKSwgc3RlcCA9PiB0aGlzLmFuaSAmJiB0aGlzLmFuaS5wcm9ncmVzc1N0ZXAoc3RlcCksIChzaG91bGRDb21wbGV0ZSwgc3RlcCwgZHVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaS5vbkZpbmlzaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN3aXBlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwZUhhbmRsZXIub25FbmQoc2hvdWxkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgeyBvbmVUaW1lQ2FsbGJhY2s6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8gQWNjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzIGluIEpTXG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0ZXBWYWx1ZSA9IChzaG91bGRDb21wbGV0ZSkgPyAtMC4wMDEgOiAwLjAwMTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBbmltYXRpb24gd2lsbCBiZSByZXZlcnNlZCBoZXJlLCBzbyBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgdGltZSByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAgICAgICAgICAgICAqIGluIHRlcm1zIG9mIGEgbGluZWFyIGN1cnZlLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMSwgMCwgMC42OCwgMC4yOCknKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKG5ldyBQb2ludCgwLCAwKSwgbmV3IFBvaW50KDEsIDApLCBuZXcgUG9pbnQoMC42OCwgMC4yOCksIG5ldyBQb2ludCgxLCAxKSwgc3RlcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24obmV3IFBvaW50KDAsIDApLCBuZXcgUG9pbnQoMC4zMiwgMC43MiksIG5ldyBQb2ludCgwLCAxKSwgbmV3IFBvaW50KDEsIDEpLCBzdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hbmkucHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCwgbmV3U3RlcFZhbHVlLCBkdXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zd2lwZUhhbmRsZXJDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkLmVtaXQoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIGNvbW1pdChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMpIHtcbiAgICAgICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrKCk7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gYXdhaXQgdGhpcy50cmFuc2l0aW9uKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdW5sb2NrKCk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgc2V0Um91dGVJZChpZCwgcGFyYW1zLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgY2hhbmdlZCA9IGF3YWl0IHRoaXMuc2V0Um9vdChpZCwgcGFyYW1zLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZGlyZWN0aW9uID09PSAncm9vdCcgPyAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24gPT09ICdiYWNrJyA/ICdiYWNrJyA6ICdmb3J3YXJkJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGFuZ2VkLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5hY3RpdmVFbFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgZ2V0Um91dGVJZCgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVFbDtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZSA/IHtcbiAgICAgICAgICAgIGlkOiBhY3RpdmUudGFnTmFtZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IGFjdGl2ZSxcbiAgICAgICAgfSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYXN5bmMgc2V0Um9vdChjb21wb25lbnQsIHBhcmFtcywgb3B0cykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF0dGFjaCBlbnRlcmluZyB2aWV3IHRvIERPTVxuICAgICAgICBjb25zdCBsZWF2aW5nRWwgPSB0aGlzLmFjdGl2ZUVsO1xuICAgICAgICBjb25zdCBlbnRlcmluZ0VsID0gYXdhaXQgYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMuZWwsIGNvbXBvbmVudCwgWydpb24tcGFnZScsICdpb24tcGFnZS1pbnZpc2libGUnXSwgcGFyYW1zKTtcbiAgICAgICAgdGhpcy5hY3RpdmVDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZlRWwgPSBlbnRlcmluZ0VsO1xuICAgICAgICAvLyBjb21taXQgYW5pbWF0aW9uXG4gICAgICAgIGF3YWl0IHRoaXMuY29tbWl0KGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cyk7XG4gICAgICAgIGF3YWl0IGRldGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBsZWF2aW5nRWwpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgdHJhbnNpdGlvbihlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMgPSB7fSkge1xuICAgICAgICBpZiAobGVhdmluZ0VsID09PSBlbnRlcmluZ0VsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW1pdCBuYXYgd2lsbCBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgY29uc3QgeyBlbCwgbW9kZSB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgYW5pbWF0ZWQgPSB0aGlzLmFuaW1hdGVkICYmIGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpO1xuICAgICAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gdGhpcy5hbmltYXRpb24gfHwgb3B0cy5hbmltYXRpb25CdWlsZGVyIHx8IGNvbmZpZy5nZXQoJ25hdkFuaW1hdGlvbicpO1xuICAgICAgICBhd2FpdCB0cmFuc2l0aW9uKE9iamVjdC5hc3NpZ24oeyBtb2RlLFxuICAgICAgICAgICAgYW5pbWF0ZWQsXG4gICAgICAgICAgICBhbmltYXRpb25CdWlsZGVyLFxuICAgICAgICAgICAgZW50ZXJpbmdFbCxcbiAgICAgICAgICAgIGxlYXZpbmdFbCwgYmFzZUVsOiBlbCwgcHJvZ3Jlc3NDYWxsYmFjazogKG9wdHMucHJvZ3Jlc3NBbmltYXRpb25cbiAgICAgICAgICAgICAgICA/IGFuaSA9PiB0aGlzLmFuaSA9IGFuaVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKSB9LCBvcHRzKSk7XG4gICAgICAgIC8vIGVtaXQgbmF2IGNoYW5nZWQgZXZlbnRcbiAgICAgICAgdGhpcy5pb25OYXZEaWRDaGFuZ2UuZW1pdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgbG9jaygpIHtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMud2FpdFByb21pc2U7XG4gICAgICAgIGxldCByZXNvbHZlO1xuICAgICAgICB0aGlzLndhaXRQcm9taXNlID0gbmV3IFByb21pc2UociA9PiByZXNvbHZlID0gcik7XG4gICAgICAgIGlmIChwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmU7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCBudWxsKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcInN3aXBlSGFuZGxlclwiOiBbXCJzd2lwZUhhbmRsZXJDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MH1cIjsgfVxufTtcblxuY29uc3QgVG9vbGJhclRpdGxlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIHNpemVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICBbYHRpdGxlLSR7c2l6ZX1gXTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNpemUgIT09IHVuZGVmaW5lZCkgPyB0aGlzLnNpemUgOiAnZGVmYXVsdCc7XG4gICAgfVxuICAgIGdldE1vZGUoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCB0b29sYmFyID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tdG9vbGJhcicpO1xuICAgICAgICByZXR1cm4gKHRvb2xiYXIgJiYgdG9vbGJhci5tb2RlKSB8fCBtb2RlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSB0aGlzLmdldE1vZGUoKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSwgW2B0aXRsZS0ke21vZGV9YF06IHRydWUsIFtgdGl0bGUtJHtzaXplfWBdOiB0cnVlIH0sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvb2xiYXItdGl0bGVcIiB9LCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwic2l6ZVwiOiBbXCJzaXplQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWNvbG9yOmluaXRpYWw7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCgudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQpLDpob3N0KC50aXRsZS1pb3MudGl0bGUtbGFyZ2Upe2xlZnQ6MDt0b3A6MDtwYWRkaW5nLWxlZnQ6OTBweDtwYWRkaW5nLXJpZ2h0OjkwcHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0LDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50aXRsZS1pb3MudGl0bGUtbGFyZ2UsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0KSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWxhcmdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50aXRsZS1pb3MudGl0bGUtZGVmYXVsdCksOmhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjkwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OTBweDstd2Via2l0LXBhZGRpbmctZW5kOjkwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjkwcHh9fTpob3N0KC50aXRsZS1tZCl7cGFkZGluZy1sZWZ0OjIwcHg7cGFkZGluZy1yaWdodDoyMHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6LjAxMjVlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLnRpdGxlLW1kKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MjBweDtwYWRkaW5nLWlubGluZS1zdGFydDoyMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MjBweH19Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS50b29sYmFyLXRpdGxle2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0b306aG9zdCgudGl0bGUtc21hbGwpIC50b29sYmFyLXRpdGxle3doaXRlLXNwYWNlOm5vcm1hbH06aG9zdCgudGl0bGUtaW9zLnRpdGxlLXNtYWxsKXtwYWRkaW5nLWxlZnQ6OXB4O3BhZGRpbmctcmlnaHQ6OXB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbToxNnB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjEzcHg7dGV4dC1hbGlnbjpjZW50ZXJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50aXRsZS1pb3MudGl0bGUtc21hbGwpe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo5cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OXB4O3BhZGRpbmctaW5saW5lLWVuZDo5cHh9fTpob3N0KC50aXRsZS1tZC50aXRsZS1zbWFsbCl7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Omhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtib3R0b206MDstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7bWluLXdpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206NnB4O2ZvbnQtc2l6ZTozNHB4O2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWFsaWduOnN0YXJ0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWxhcmdlKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19XCI7IH1cbn07XG5cbmNvbnN0IFRvb2xiYXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuU3R5bGVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucycpKTtcbiAgICAgICAgY29uc3QgZmlyc3RCdXR0b25zID0gYnV0dG9ucy5maW5kKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uLnNsb3QgPT09ICdzdGFydCc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlyc3RCdXR0b25zKSB7XG4gICAgICAgICAgICBmaXJzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1maXJzdC1zbG90Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnV0dG9uc1JldmVyc2VkID0gYnV0dG9ucy5yZXZlcnNlKCk7XG4gICAgICAgIGNvbnN0IGxhc3RCdXR0b25zID0gYnV0dG9uc1JldmVyc2VkLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5zbG90ID09PSAnZW5kJykgfHxcbiAgICAgICAgICAgIGJ1dHRvbnNSZXZlcnNlZC5maW5kKGJ1dHRvbiA9PiBidXR0b24uc2xvdCA9PT0gJ3ByaW1hcnknKSB8fFxuICAgICAgICAgICAgYnV0dG9uc1JldmVyc2VkLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5zbG90ID09PSAnc2Vjb25kYXJ5Jyk7XG4gICAgICAgIGlmIChsYXN0QnV0dG9ucykge1xuICAgICAgICAgICAgbGFzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1sYXN0LXNsb3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGlsZHJlblN0eWxlKGV2KSB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZXYudGFyZ2V0LnRhZ05hbWU7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTdHlsZXMgPSBldi5kZXRhaWw7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHt9O1xuICAgICAgICBjb25zdCBjaGlsZFN0eWxlcyA9IHRoaXMuY2hpbGRyZW5TdHlsZXMuZ2V0KHRhZ05hbWUpIHx8IHt9O1xuICAgICAgICBsZXQgaGFzU3R5bGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LmtleXModXBkYXRlZFN0eWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRLZXkgPSBgdG9vbGJhci0ke2tleX1gO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB1cGRhdGVkU3R5bGVzW2tleV07XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGNoaWxkU3R5bGVzW2NoaWxkS2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1N0eWxlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld1N0eWxlc1tjaGlsZEtleV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc1N0eWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuU3R5bGVzLnNldCh0YWdOYW1lLCBuZXdTdHlsZXMpO1xuICAgICAgICAgICAgdGhpcy5lbC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNoaWxkU3R5bGVzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TdHlsZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNoaWxkU3R5bGVzLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSwgW21vZGVdOiB0cnVlIH0sIGNoaWxkU3R5bGVzKSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9vbGJhci1iYWNrZ3JvdW5kXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b29sYmFyLWNvbnRhaW5lclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdGFydFwiIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic2Vjb25kYXJ5XCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b29sYmFyLWNvbnRlbnRcIiB9LCBoKFwic2xvdFwiLCBudWxsKSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJwcmltYXJ5XCIgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJlbmRcIiB9KSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tYm9yZGVyLXdpZHRoOjA7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1vcGFjaXR5OjE7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOmNvbnRlbnQ7ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgLnRvb2xiYXItYmFja2dyb3VuZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci1jb250YWluZXJ7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey50b29sYmFyLWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LnRvb2xiYXItYmFja2dyb3VuZHt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTp2YXIoLS1vcGFjaXR5KTt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmV9LnRvb2xiYXItYmFja2dyb3VuZCw6OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcil7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGV9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpOy0tY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzQyNDI0MikpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjYzFjNGNkKSkpOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7LS1wYWRkaW5nLXN0YXJ0OjA7LS1wYWRkaW5nLWVuZDowOy0tbWluLWhlaWdodDo1NnB4fS50b29sYmFyLWNvbnRlbnR7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozO21pbi13aWR0aDowO21heC13aWR0aDoxMDAlfTo6c2xvdHRlZChpb24tc2VnbWVudCl7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KX06OnNsb3R0ZWQoLmJ1dHRvbnMtZmlyc3Qtc2xvdCl7bWFyZ2luLWxlZnQ6NHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoLmJ1dHRvbnMtZmlyc3Qtc2xvdCl7bWFyZ2luLWxlZnQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6NHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NHB4fX06OnNsb3R0ZWQoLmJ1dHRvbnMtbGFzdC1zbG90KXttYXJnaW4tcmlnaHQ6NHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoLmJ1dHRvbnMtbGFzdC1zbG90KXttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tZW5kOjRweDttYXJnaW4taW5saW5lLWVuZDo0cHh9fTo6c2xvdHRlZChbc2xvdD1zdGFydF0pey1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mn06OnNsb3R0ZWQoW3Nsb3Q9c2Vjb25kYXJ5XSl7LW1zLWZsZXgtb3JkZXI6NDtvcmRlcjo0fTo6c2xvdHRlZChbc2xvdD1wcmltYXJ5XSl7LW1zLWZsZXgtb3JkZXI6NTtvcmRlcjo1O3RleHQtYWxpZ246ZW5kfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1vcmRlcjo2O29yZGVyOjY7dGV4dC1hbGlnbjplbmR9XCI7IH1cbn07XG5cbmV4cG9ydCB7IEFwcCBhcyBpb25fYXBwLCBCdXR0b25zIGFzIGlvbl9idXR0b25zLCBDb250ZW50IGFzIGlvbl9jb250ZW50LCBGb290ZXIgYXMgaW9uX2Zvb3RlciwgSGVhZGVyIGFzIGlvbl9oZWFkZXIsIFJvdXRlck91dGxldCBhcyBpb25fcm91dGVyX291dGxldCwgVG9vbGJhclRpdGxlIGFzIGlvbl90aXRsZSwgVG9vbGJhciBhcyBpb25fdG9vbGJhciB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==