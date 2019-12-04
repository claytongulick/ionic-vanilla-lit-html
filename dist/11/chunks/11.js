(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal", function() { return Modal; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
/* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-6826f2f6.js */ "../node_modules/@ionic/core/dist/esm/index-6826f2f6.js");










/**
 * iOS Modal Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.4);
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Animations for modals
 */
// export function modalSlideIn(rootEl: HTMLElement) {
// }
// export class ModalSlideOut {
//   constructor(el: HTMLElement) {
//     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
//     let wrapperEleRect = wrapperEle.getBoundingClientRect();
//     let wrapper = new Animation(this.plt, wrapperEle);
//     // height of the screen - top of the container tells us how much to scoot it down
//     // so it's off-screen
//     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     this
//       .element(this.leavingView.pageRef())
//       .easing('ease-out')
//       .duration(250)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideIn {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.01, 0.4);
//     wrapper.fromTo('translateY', '40px', '0px');
//     wrapper.fromTo('opacity', 0.01, 1);
//     const DURATION = 280;
//     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
//     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideOut {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     wrapper.fromTo('translateY', '0px', '40px');
//     wrapper.fromTo('opacity', 0.99, 0);
//     this
//       .element(this.leavingView.pageRef())
//       .duration(200)
//       .easing('cubic-bezier(0.47,0,0.745,0.715)')
//       .add(wrapper)
//       .add(backdrop);
//   }
// }

/**
 * iOS Modal Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperEl = baseEl.querySelector('.modal-wrapper');
    const wrapperElRect = wrapperEl.getBoundingClientRect();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.4, 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0%)', `translateY(${baseEl.ownerDocument.defaultView.innerHeight - wrapperElRect.top}px)`);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-out')
        .duration(250)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Modal Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperEl = baseEl.querySelector('.modal-wrapper');
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
        { offset: 1, opacity: 0, transform: 'translateY(40px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Modal = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["B"]);
        };
        this.onDismiss = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.dismiss();
        };
        this.onLifecycle = (modalEvent) => {
            const el = this.usersElement;
            const name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                const ev = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(ev);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
        this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalDidPresent", 7);
        this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalWillPresent", 7);
        this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalWillDismiss", 7);
        this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalDidDismiss", 7);
    }
    /**
     * Present the modal overlay after it has been created.
     */
    async present() {
        if (this.presented) {
            return;
        }
        const container = this.el.querySelector(`.modal-wrapper`);
        if (!container) {
            throw new Error('container is undefined');
        }
        const componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
        this.usersElement = await Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps);
        await Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_8__["d"])(this.usersElement);
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation);
    }
    /**
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     */
    async dismiss(data, role) {
        const dismissed = await Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation);
        if (dismissed) {
            await Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this.delegate, this.usersElement);
        }
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionModalDidDismiss');
    }
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */
    onWillDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionModalWillDismiss');
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "no-router": true, "aria-modal": "true", class: Object.assign({ [mode]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "dialog", class: {
                [`modal-wrapper`]: true,
                [mode]: true,
            } })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"; }
};
const LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillLeave',
    'ionModalDidDismiss': 'ionViewDidLeave',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY4MjZmMmY2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLW1vZGFsLWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRDs7Ozs7Ozs7Ozs7OztBQ2pDdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUMrRjs7QUFFbkoscUNBQXFDLHFMQUFzQztBQUMzRSxvQ0FBb0MsbUxBQXFDO0FBQ3pFO0FBQ0E7QUFDQSxRQUFRLDJEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjExXFxjaHVua3NcXDExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXR0YWNoQ29tcG9uZW50ID0gYXN5bmMgKGRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgY3NzQ2xhc3NlcywgY29tcG9uZW50UHJvcHMpID0+IHtcclxuICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBjc3NDbGFzc2VzKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJyAmJiAhKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgID8gY29udGFpbmVyLm93bmVyRG9jdW1lbnQgJiYgY29udGFpbmVyLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wb25lbnQpXHJcbiAgICAgICAgOiBjb21wb25lbnQ7XHJcbiAgICBpZiAoY3NzQ2xhc3Nlcykge1xyXG4gICAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudFByb3BzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbCwgY29tcG9uZW50UHJvcHMpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGlmIChlbC5jb21wb25lbnRPblJlYWR5KSB7XHJcbiAgICAgICAgYXdhaXQgZWwuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG5jb25zdCBkZXRhY2hDb21wb25lbnQgPSAoZGVsZWdhdGUsIGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGNvbnRhaW5lciwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn07XG5cbmV4cG9ydCB7IGF0dGFjaENvbXBvbmVudCBhcyBhLCBkZXRhY2hDb21wb25lbnQgYXMgZCB9O1xuIiwiaW1wb3J0IHsgdyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0IHsgYiBhcyBMSUZFQ1lDTEVfV0lMTF9MRUFWRSwgTCBhcyBMSUZFQ1lDTEVfV0lMTF9FTlRFUiwgYSBhcyBMSUZFQ1lDTEVfRElEX0VOVEVSLCBjIGFzIExJRkVDWUNMRV9ESURfTEVBVkUgfSBmcm9tICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5cbmNvbnN0IGlvc1RyYW5zaXRpb25BbmltYXRpb24gPSAoKSA9PiBpbXBvcnQoJy4vaW9zLnRyYW5zaXRpb24tMDcxYmQ0MjEuanMnKTtcclxuY29uc3QgbWRUcmFuc2l0aW9uQW5pbWF0aW9uID0gKCkgPT4gaW1wb3J0KCcuL21kLnRyYW5zaXRpb24tMTVhODFiMDguanMnKTtcclxuY29uc3QgdHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRyYW5zaXRpb24ob3B0cyk7XHJcbiAgICAgICAgICAgIHJ1blRyYW5zaXRpb24ob3B0cykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYW5pbWF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgYmVmb3JlVHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBzZXRaSW5kZXgoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzLmRpcmVjdGlvbik7XHJcbiAgICBpZiAob3B0cy5zaG93R29CYWNrKSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QuYWRkKCdjYW4tZ28tYmFjaycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZ28tYmFjaycpO1xyXG4gICAgfVxyXG4gICAgc2V0UGFnZUhpZGRlbihlbnRlcmluZ0VsLCBmYWxzZSk7XHJcbiAgICBpZiAobGVhdmluZ0VsKSB7XHJcbiAgICAgICAgc2V0UGFnZUhpZGRlbihsZWF2aW5nRWwsIGZhbHNlKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgcnVuVHJhbnNpdGlvbiA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gYXdhaXQgZ2V0QW5pbWF0aW9uQnVpbGRlcihvcHRzKTtcclxuICAgIGNvbnN0IGFuaSA9IChhbmltYXRpb25CdWlsZGVyKVxyXG4gICAgICAgID8gYW5pbWF0aW9uKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpXHJcbiAgICAgICAgOiBub0FuaW1hdGlvbihvcHRzKTsgLy8gZmFzdCBwYXRoIGZvciBubyBhbmltYXRpb25cclxuICAgIHJldHVybiBhbmk7XHJcbn07XHJcbmNvbnN0IGFmdGVyVHJhbnNpdGlvbiA9IChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xyXG4gICAgaWYgKGxlYXZpbmdFbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGVhdmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXRBbmltYXRpb25CdWlsZGVyID0gYXN5bmMgKG9wdHMpID0+IHtcclxuICAgIGlmICghb3B0cy5sZWF2aW5nRWwgfHwgIW9wdHMuYW5pbWF0ZWQgfHwgb3B0cy5kdXJhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0cy5hbmltYXRpb25CdWlsZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdHMuYW5pbWF0aW9uQnVpbGRlcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldEFuaW1hdGlvbiA9IChvcHRzLm1vZGUgPT09ICdpb3MnKVxyXG4gICAgICAgID8gKGF3YWl0IGlvc1RyYW5zaXRpb25BbmltYXRpb24oKSkuaW9zVHJhbnNpdGlvbkFuaW1hdGlvblxyXG4gICAgICAgIDogKGF3YWl0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5tZFRyYW5zaXRpb25BbmltYXRpb247XHJcbiAgICByZXR1cm4gZ2V0QW5pbWF0aW9uO1xyXG59O1xyXG5jb25zdCBhbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uQnVpbGRlciwgb3B0cykgPT4ge1xyXG4gICAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIHRydWUpO1xyXG4gICAgbGV0IHRyYW5zO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtb2QgPSBhd2FpdCBpbXBvcnQoJy4vaW5kZXgtNjljMzc4ODUuanMnKTtcclxuICAgICAgICB0cmFucyA9IGF3YWl0IG1vZC5jcmVhdGUoYW5pbWF0aW9uQnVpbGRlciwgb3B0cy5iYXNlRWwsIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRyYW5zID0gYW5pbWF0aW9uQnVpbGRlcihvcHRzLmJhc2VFbCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICBmaXJlV2lsbEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcclxuICAgIGNvbnN0IGRpZENvbXBsZXRlID0gYXdhaXQgcGxheVRyYW5zaXRpb24odHJhbnMsIG9wdHMpO1xyXG4gICAgaWYgKG9wdHMucHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIG9wdHMucHJvZ3Jlc3NDYWxsYmFjayh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpZENvbXBsZXRlKSB7XHJcbiAgICAgICAgZmlyZURpZEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFzQ29tcGxldGVkOiBkaWRDb21wbGV0ZSxcclxuICAgICAgICBhbmltYXRpb246IHRyYW5zXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCBub0FuaW1hdGlvbiA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xyXG4gICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICBhd2FpdCB3YWl0Rm9yUmVhZHkob3B0cywgZmFsc2UpO1xyXG4gICAgZmlyZVdpbGxFdmVudHMoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKTtcclxuICAgIGZpcmVEaWRFdmVudHMoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFzQ29tcGxldGVkOiB0cnVlXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCB3YWl0Rm9yUmVhZHkgPSBhc3luYyAob3B0cywgZGVmYXVsdERlZXApID0+IHtcclxuICAgIGNvbnN0IGRlZXAgPSBvcHRzLmRlZXBXYWl0ICE9PSB1bmRlZmluZWQgPyBvcHRzLmRlZXBXYWl0IDogZGVmYXVsdERlZXA7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IGRlZXAgPyBbXHJcbiAgICAgICAgZGVlcFJlYWR5KG9wdHMuZW50ZXJpbmdFbCksXHJcbiAgICAgICAgZGVlcFJlYWR5KG9wdHMubGVhdmluZ0VsKSxcclxuICAgIF0gOiBbXHJcbiAgICAgICAgc2hhbGxvd1JlYWR5KG9wdHMuZW50ZXJpbmdFbCksXHJcbiAgICAgICAgc2hhbGxvd1JlYWR5KG9wdHMubGVhdmluZ0VsKSxcclxuICAgIF07XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICBhd2FpdCBub3RpZnlWaWV3UmVhZHkob3B0cy52aWV3SXNSZWFkeSwgb3B0cy5lbnRlcmluZ0VsKTtcclxufTtcclxuY29uc3Qgbm90aWZ5Vmlld1JlYWR5ID0gYXN5bmMgKHZpZXdJc1JlYWR5LCBlbnRlcmluZ0VsKSA9PiB7XHJcbiAgICBpZiAodmlld0lzUmVhZHkpIHtcclxuICAgICAgICBhd2FpdCB2aWV3SXNSZWFkeShlbnRlcmluZ0VsKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgcGxheVRyYW5zaXRpb24gPSAodHJhbnMsIG9wdHMpID0+IHtcclxuICAgIGNvbnN0IHByb2dyZXNzQ2FsbGJhY2sgPSBvcHRzLnByb2dyZXNzQ2FsbGJhY2s7XHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgQW5pbWF0aW9uQnVpbGRlclxyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHRyYW5zLm9uRmluaXNoKChjdXJyZW50U3RlcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50U3RlcCA9PT0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHJhbnMuaGFzQ29tcGxldGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJhbnMuaGFzQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb29sLCBsZXQncyBkbyB0aGlzLCBzdGFydCB0aGUgdHJhbnNpdGlvblxyXG4gICAgaWYgKHByb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAvLyB0aGlzIGlzIGEgc3dpcGUgdG8gZ28gYmFjaywganVzdCBnZXQgdGhlIHRyYW5zaXRpb24gcHJvZ3Jlc3MgcmVhZHlcclxuICAgICAgICAvLyBraWNrIG9mZiB0aGUgc3dpcGUgYW5pbWF0aW9uIHN0YXJ0XHJcbiAgICAgICAgdHJhbnMucHJvZ3Jlc3NTdGFydCh0cnVlKTtcclxuICAgICAgICBwcm9ncmVzc0NhbGxiYWNrKHRyYW5zKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG9ubHkgdGhlIHRvcCBsZXZlbCB0cmFuc2l0aW9uIHNob3VsZCBhY3R1YWxseSBzdGFydCBcInBsYXlcIlxyXG4gICAgICAgIC8vIGtpY2sgaXQgb2ZmIGFuZCBsZXQgaXQgcGxheSB0aHJvdWdoXHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICB0cmFucy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGRvbmVcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG59O1xyXG5jb25zdCBmaXJlV2lsbEV2ZW50cyA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwpID0+IHtcclxuICAgIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9XSUxMX0xFQVZFKTtcclxuICAgIGxpZmVjeWNsZShlbnRlcmluZ0VsLCBMSUZFQ1lDTEVfV0lMTF9FTlRFUik7XHJcbn07XHJcbmNvbnN0IGZpcmVEaWRFdmVudHMgPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XHJcbiAgICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX0RJRF9FTlRFUik7XHJcbiAgICBsaWZlY3ljbGUobGVhdmluZ0VsLCBMSUZFQ1lDTEVfRElEX0xFQVZFKTtcclxufTtcclxuY29uc3QgbGlmZWN5Y2xlID0gKGVsLCBldmVudE5hbWUpID0+IHtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xyXG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldik7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNoYWxsb3dSZWFkeSA9IChlbCkgPT4ge1xyXG4gICAgaWYgKGVsICYmIGVsLmNvbXBvbmVudE9uUmVhZHkpIHtcclxuICAgICAgICByZXR1cm4gZWwuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59O1xyXG5jb25zdCBkZWVwUmVhZHkgPSBhc3luYyAoZWwpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY29tcG9uZW50T25SZWFkeSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZW5jaWxFbCA9IGF3YWl0IGVsZW1lbnQuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgICAgICAgICBpZiAoc3RlbmNpbEVsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLm1hcChkZWVwUmVhZHkpKTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc2V0UGFnZUhpZGRlbiA9IChlbCwgaGlkZGVuKSA9PiB7XHJcbiAgICBpZiAoaGlkZGVuKSB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaW9uLXBhZ2UtaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaGlkZGVuJyk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNldFpJbmRleCA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKGVudGVyaW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVudGVyaW5nRWwuc3R5bGUuekluZGV4ID0gKGRpcmVjdGlvbiA9PT0gJ2JhY2snKVxyXG4gICAgICAgICAgICA/ICc5OSdcclxuICAgICAgICAgICAgOiAnMTAxJztcclxuICAgIH1cclxuICAgIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxlYXZpbmdFbC5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuICAgIH1cclxufTtcclxuY29uc3QgZ2V0SW9uUGFnZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpb25QYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJyk7XHJcbiAgICBpZiAoaW9uUGFnZSkge1xyXG4gICAgICAgIHJldHVybiBpb25QYWdlO1xyXG4gICAgfVxyXG4gICAgLy8gaWRrLCByZXR1cm4gdGhlIG9yaWdpbmFsIGVsZW1lbnQgc28gYXQgbGVhc3Qgc29tZXRoaW5nIGFuaW1hdGVzIGFuZCB3ZSBkb24ndCBoYXZlIGEgbnVsbCBwb2ludGVyXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcblxuZXhwb3J0IHsgZGVlcFJlYWR5IGFzIGQsIGdldElvblBhZ2VFbGVtZW50IGFzIGcsIGxpZmVjeWNsZSBhcyBsLCBzZXRQYWdlSGlkZGVuIGFzIHMsIHRyYW5zaXRpb24gYXMgdCB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGdldElvbk1vZGUsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgJy4vY29uc3RhbnRzLTNjM2UxMDk5LmpzJztcbmltcG9ydCB7IEIgYXMgQkFDS0RST1AsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBhIGFzIGF0dGFjaENvbXBvbmVudCwgZCBhcyBkZXRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlZXBSZWFkeSB9IGZyb20gJy4vaW5kZXgtNjgyNmYyZjYuanMnO1xuXG4vKipcclxuICogaU9TIE1vZGFsIEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuNCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJykpXHJcbiAgICAgICAgLmJlZm9yZVN0eWxlcyh7ICdvcGFjaXR5JzogMSB9KVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDEwMCUpJywgJ3RyYW5zbGF0ZVkoMCUpJyk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKVxyXG4gICAgICAgIC5kdXJhdGlvbig0MDApXHJcbiAgICAgICAgLmJlZm9yZUFkZENsYXNzKCdzaG93LW1vZGFsJylcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xyXG4vKipcclxuICogQW5pbWF0aW9ucyBmb3IgbW9kYWxzXHJcbiAqL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gbW9kYWxTbGlkZUluKHJvb3RFbDogSFRNTEVsZW1lbnQpIHtcclxuLy8gfVxyXG4vLyBleHBvcnQgY2xhc3MgTW9kYWxTbGlkZU91dCB7XHJcbi8vICAgY29uc3RydWN0b3IoZWw6IEhUTUxFbGVtZW50KSB7XHJcbi8vICAgICBsZXQgYmFja2Ryb3AgPSBuZXcgQW5pbWF0aW9uKHRoaXMucGx0LCBlbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSk7XHJcbi8vICAgICBsZXQgd3JhcHBlckVsZSA9IDxIVE1MRWxlbWVudD5lbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xyXG4vLyAgICAgbGV0IHdyYXBwZXJFbGVSZWN0ID0gd3JhcHBlckVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuLy8gICAgIGxldCB3cmFwcGVyID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgd3JhcHBlckVsZSk7XHJcbi8vICAgICAvLyBoZWlnaHQgb2YgdGhlIHNjcmVlbiAtIHRvcCBvZiB0aGUgY29udGFpbmVyIHRlbGxzIHVzIGhvdyBtdWNoIHRvIHNjb290IGl0IGRvd25cclxuLy8gICAgIC8vIHNvIGl0J3Mgb2ZmLXNjcmVlblxyXG4vLyAgICAgd3JhcHBlci5mcm9tVG8oJ3RyYW5zbGF0ZVknLCAnMHB4JywgYCR7dGhpcy5wbHQuaGVpZ2h0KCkgLSB3cmFwcGVyRWxlUmVjdC50b3B9cHhgKTtcclxuLy8gICAgIGJhY2tkcm9wLmZyb21Ubygnb3BhY2l0eScsIDAuNCwgMC4wKTtcclxuLy8gICAgIHRoaXNcclxuLy8gICAgICAgLmVsZW1lbnQodGhpcy5sZWF2aW5nVmlldy5wYWdlUmVmKCkpXHJcbi8vICAgICAgIC5lYXNpbmcoJ2Vhc2Utb3V0JylcclxuLy8gICAgICAgLmR1cmF0aW9uKDI1MClcclxuLy8gICAgICAgLmFkZChiYWNrZHJvcClcclxuLy8gICAgICAgLmFkZCh3cmFwcGVyKTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gZXhwb3J0IGNsYXNzIE1vZGFsTURTbGlkZUluIHtcclxuLy8gICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuLy8gICAgIGNvbnN0IGJhY2tkcm9wID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xyXG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJykpO1xyXG4vLyAgICAgYmFja2Ryb3AuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC40KTtcclxuLy8gICAgIHdyYXBwZXIuZnJvbVRvKCd0cmFuc2xhdGVZJywgJzQwcHgnLCAnMHB4Jyk7XHJcbi8vICAgICB3cmFwcGVyLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xyXG4vLyAgICAgY29uc3QgRFVSQVRJT04gPSAyODA7XHJcbi8vICAgICBjb25zdCBFQVNJTkcgPSAnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJztcclxuLy8gICAgIHRoaXMuZWxlbWVudCh0aGlzLmVudGVyaW5nVmlldy5wYWdlUmVmKCkpLmVhc2luZyhFQVNJTkcpLmR1cmF0aW9uKERVUkFUSU9OKVxyXG4vLyAgICAgICAuYWRkKGJhY2tkcm9wKVxyXG4vLyAgICAgICAuYWRkKHdyYXBwZXIpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBleHBvcnQgY2xhc3MgTW9kYWxNRFNsaWRlT3V0IHtcclxuLy8gICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuLy8gICAgIGNvbnN0IGJhY2tkcm9wID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xyXG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJykpO1xyXG4vLyAgICAgYmFja2Ryb3AuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwLjApO1xyXG4vLyAgICAgd3JhcHBlci5mcm9tVG8oJ3RyYW5zbGF0ZVknLCAnMHB4JywgJzQwcHgnKTtcclxuLy8gICAgIHdyYXBwZXIuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XHJcbi8vICAgICB0aGlzXHJcbi8vICAgICAgIC5lbGVtZW50KHRoaXMubGVhdmluZ1ZpZXcucGFnZVJlZigpKVxyXG4vLyAgICAgICAuZHVyYXRpb24oMjAwKVxyXG4vLyAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpXHJcbi8vICAgICAgIC5hZGQod3JhcHBlcilcclxuLy8gICAgICAgLmFkZChiYWNrZHJvcCk7XHJcbi8vICAgfVxyXG4vLyB9XG5cbi8qKlxyXG4gKiBpT1MgTW9kYWwgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyRWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IHdyYXBwZXJFbFJlY3QgPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwLjApO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KHdyYXBwZXJFbClcclxuICAgICAgICAuYmVmb3JlU3R5bGVzKHsgJ29wYWNpdHknOiAxIH0pXHJcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJywgYHRyYW5zbGF0ZVkoJHtiYXNlRWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lckhlaWdodCAtIHdyYXBwZXJFbFJlY3QudG9wfXB4KWApO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnZWFzZS1vdXQnKVxyXG4gICAgICAgIC5kdXJhdGlvbigyNTApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1kIE1vZGFsIEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJykpXHJcbiAgICAgICAgLmtleWZyYW1lcyhbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDAuMDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNDBweCknIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KScgfVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKVxyXG4gICAgICAgIC5kdXJhdGlvbigyODApXHJcbiAgICAgICAgLmJlZm9yZUFkZENsYXNzKCdzaG93LW1vZGFsJylcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogTWQgTW9kYWwgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZExlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMzIsIDAuMCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQod3JhcHBlckVsKVxyXG4gICAgICAgIC5rZXlmcmFtZXMoW1xyXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLjk5LCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCknIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNDBweCknIH1cclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKVxyXG4gICAgICAgIC5kdXJhdGlvbigyMDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuY29uc3QgTW9kYWwgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUga2V5Ym9hcmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSBvdmVybGF5IGlzIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGJhY2tkcm9wIHdpbGwgYmUgZGlzcGxheWVkIGJlaGluZCB0aGUgbW9kYWwuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IChldikgPT4ge1xuICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25MaWZlY3ljbGUgPSAobW9kYWxFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLnVzZXJzRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBMSUZFQ1lDTEVfTUFQW21vZGFsRXZlbnQudHlwZV07XG4gICAgICAgICAgICBpZiAoZWwgJiYgbmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IG1vZGFsRXZlbnQuZGV0YWlsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByZXBhcmVPdmVybGF5KHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsRGlkUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxXaWxsUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICAgICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb2RhbERpZERpc21pc3NcIiwgNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIG1vZGFsIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBhc3luYyBwcmVzZW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcmVzZW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoYC5tb2RhbC13cmFwcGVyYCk7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRhaW5lciBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRQcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb21wb25lbnRQcm9wcyksIHsgbW9kYWw6IHRoaXMuZWwgfSk7XG4gICAgICAgIHRoaXMudXNlcnNFbGVtZW50ID0gYXdhaXQgYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIGNvbnRhaW5lciwgdGhpcy5jb21wb25lbnQsIFsnaW9uLXBhZ2UnXSwgY29tcG9uZW50UHJvcHMpO1xuICAgICAgICBhd2FpdCBkZWVwUmVhZHkodGhpcy51c2Vyc0VsZW1lbnQpO1xuICAgICAgICByZXR1cm4gcHJlc2VudCh0aGlzLCAnbW9kYWxFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgbW9kYWwgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIG1vZGFsLiBGb3IgZXhhbXBsZSwgJ2NhbmNlbCcgb3IgJ2JhY2tkcm9wJy5cbiAgICAgKi9cbiAgICBhc3luYyBkaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICAgICAgY29uc3QgZGlzbWlzc2VkID0gYXdhaXQgZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAnbW9kYWxMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKTtcbiAgICAgICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgICAgICAgYXdhaXQgZGV0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMudXNlcnNFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlzbWlzc2VkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1vZGFsIGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uRGlkRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Nb2RhbERpZERpc21pc3MnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBtb2RhbCB3aWxsIGRpc21pc3MuXG4gICAgICovXG4gICAgb25XaWxsRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Nb2RhbFdpbGxEaXNtaXNzJyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IFwibm8tcm91dGVyXCI6IHRydWUsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3M6IE9iamVjdC5hc3NpZ24oeyBbbW9kZV06IHRydWUgfSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7MjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gLFxuICAgICAgICAgICAgfSwgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwLCBvbklvbkRpc21pc3M6IHRoaXMub25EaXNtaXNzLCBvbklvbk1vZGFsRGlkUHJlc2VudDogdGhpcy5vbkxpZmVjeWNsZSwgb25Jb25Nb2RhbFdpbGxQcmVzZW50OiB0aGlzLm9uTGlmZWN5Y2xlLCBvbklvbk1vZGFsV2lsbERpc21pc3M6IHRoaXMub25MaWZlY3ljbGUsIG9uSW9uTW9kYWxEaWREaXNtaXNzOiB0aGlzLm9uTGlmZWN5Y2xlIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB2aXNpYmxlOiB0aGlzLnNob3dCYWNrZHJvcCwgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzIH0pLCBoKFwiZGl2XCIsIHsgcm9sZTogXCJkaWFsb2dcIiwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbYG1vZGFsLXdyYXBwZXJgXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICB9IH0pKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLW1vZGFsLWlvcy1oey0td2lkdGg6MTAwJTstLW1pbi13aWR0aDphdXRvOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6MTAwJTstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLW92ZXJmbG93OmhpZGRlbjstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpOy0tYm94LXNoYWRvdzpub25lO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjb250YWluOnN0cmljdH0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLW1vZGFsLWlvcy1oe2Rpc3BsYXk6bm9uZX0ubW9kYWwtd3JhcHBlci5zYy1pb24tbW9kYWwtaW9ze2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO292ZXJmbG93OnZhcigtLW92ZXJmbG93KTt6LWluZGV4OjEwfVxcQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjAwcHgpey5zYy1pb24tbW9kYWwtaW9zLWh7LS13aWR0aDo2MDBweDstLWhlaWdodDo1MDBweDstLWlvbi1zYWZlLWFyZWEtdG9wOjBweDstLWlvbi1zYWZlLWFyZWEtYm90dG9tOjBweDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4Oy0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweH19XFxAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWluLWhlaWdodDo3NjhweCl7LnNjLWlvbi1tb2RhbC1pb3MtaHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjYwMHB4fX1cXEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtaW4taGVpZ2h0OjYwMHB4KXsuc2MtaW9uLW1vZGFsLWlvcy1oey0tYm9yZGVyLXJhZGl1czoxMHB4fX0ubW9kYWwtd3JhcHBlci5zYy1pb24tbW9kYWwtaW9zey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfVwiOyB9XG59O1xuY29uc3QgTElGRUNZQ0xFX01BUCA9IHtcbiAgICAnaW9uTW9kYWxEaWRQcmVzZW50JzogJ2lvblZpZXdEaWRFbnRlcicsXG4gICAgJ2lvbk1vZGFsV2lsbFByZXNlbnQnOiAnaW9uVmlld1dpbGxFbnRlcicsXG4gICAgJ2lvbk1vZGFsV2lsbERpc21pc3MnOiAnaW9uVmlld1dpbGxMZWF2ZScsXG4gICAgJ2lvbk1vZGFsRGlkRGlzbWlzcyc6ICdpb25WaWV3RGlkTGVhdmUnLFxufTtcblxuZXhwb3J0IHsgTW9kYWwgYXMgaW9uX21vZGFsIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9