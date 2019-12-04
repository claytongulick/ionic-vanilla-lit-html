(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js ***!
  \******************************************************************/
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
    static get style() { return ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY4MjZmMmY2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLW1vZGFsLW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNEOzs7Ozs7Ozs7Ozs7O0FDakN0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQytGOztBQUVuSixxQ0FBcUMscUxBQXNDO0FBQzNFLG9DQUFvQyxtTEFBcUM7QUFDekU7QUFDQTtBQUNBLFFBQVEsMkRBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrS0FBNkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBb0I7QUFDN0MsMEJBQTBCLHdEQUFvQjtBQUM5QztBQUNBO0FBQ0EsMEJBQTBCLHdEQUFtQjtBQUM3Qyx5QkFBeUIsd0RBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Rzs7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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiMTJcXGNodW5rc1xcMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdHRhY2hDb21wb25lbnQgPSBhc3luYyAoZGVsZWdhdGUsIGNvbnRhaW5lciwgY29tcG9uZW50LCBjc3NDbGFzc2VzLCBjb21wb25lbnRQcm9wcykgPT4ge1xyXG4gICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmF0dGFjaFZpZXdUb0RvbShjb250YWluZXIsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIGNzc0NsYXNzZXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnQgIT09ICdzdHJpbmcnICYmICEoY29tcG9uZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmcmFtZXdvcmsgZGVsZWdhdGUgaXMgbWlzc2luZycpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWwgPSAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgPyBjb250YWluZXIub3duZXJEb2N1bWVudCAmJiBjb250YWluZXIub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudClcclxuICAgICAgICA6IGNvbXBvbmVudDtcclxuICAgIGlmIChjc3NDbGFzc2VzKSB7XHJcbiAgICAgICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcG9uZW50UHJvcHMpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsLCBjb21wb25lbnRQcm9wcyk7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgaWYgKGVsLmNvbXBvbmVudE9uUmVhZHkpIHtcclxuICAgICAgICBhd2FpdCBlbC5jb21wb25lbnRPblJlYWR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbmNvbnN0IGRldGFjaENvbXBvbmVudCA9IChkZWxlZ2F0ZSwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUucmVtb3ZlVmlld0Zyb21Eb20oY29udGFpbmVyLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufTtcblxuZXhwb3J0IHsgYXR0YWNoQ29tcG9uZW50IGFzIGEsIGRldGFjaENvbXBvbmVudCBhcyBkIH07XG4iLCJpbXBvcnQgeyB3IGFzIHdyaXRlVGFzayB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgeyBiIGFzIExJRkVDWUNMRV9XSUxMX0xFQVZFLCBMIGFzIExJRkVDWUNMRV9XSUxMX0VOVEVSLCBhIGFzIExJRkVDWUNMRV9ESURfRU5URVIsIGMgYXMgTElGRUNZQ0xFX0RJRF9MRUFWRSB9IGZyb20gJy4vY29uc3RhbnRzLTNjM2UxMDk5LmpzJztcblxuY29uc3QgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiA9ICgpID0+IGltcG9ydCgnLi9pb3MudHJhbnNpdGlvbi0wNzFiZDQyMS5qcycpO1xyXG5jb25zdCBtZFRyYW5zaXRpb25BbmltYXRpb24gPSAoKSA9PiBpbXBvcnQoJy4vbWQudHJhbnNpdGlvbi0xNWE4MWIwOC5qcycpO1xyXG5jb25zdCB0cmFuc2l0aW9uID0gKG9wdHMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd3JpdGVUYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgYmVmb3JlVHJhbnNpdGlvbihvcHRzKTtcclxuICAgICAgICAgICAgcnVuVHJhbnNpdGlvbihvcHRzKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zaXRpb24ob3B0cyk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBiZWZvcmVUcmFuc2l0aW9uID0gKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XHJcbiAgICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcclxuICAgIHNldFpJbmRleChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMuZGlyZWN0aW9uKTtcclxuICAgIGlmIChvcHRzLnNob3dHb0JhY2spIHtcclxuICAgICAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5hZGQoJ2Nhbi1nby1iYWNrJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhbi1nby1iYWNrJyk7XHJcbiAgICB9XHJcbiAgICBzZXRQYWdlSGlkZGVuKGVudGVyaW5nRWwsIGZhbHNlKTtcclxuICAgIGlmIChsZWF2aW5nRWwpIHtcclxuICAgICAgICBzZXRQYWdlSGlkZGVuKGxlYXZpbmdFbCwgZmFsc2UpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBydW5UcmFuc2l0aW9uID0gYXN5bmMgKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSBhd2FpdCBnZXRBbmltYXRpb25CdWlsZGVyKG9wdHMpO1xyXG4gICAgY29uc3QgYW5pID0gKGFuaW1hdGlvbkJ1aWxkZXIpXHJcbiAgICAgICAgPyBhbmltYXRpb24oYW5pbWF0aW9uQnVpbGRlciwgb3B0cylcclxuICAgICAgICA6IG5vQW5pbWF0aW9uKG9wdHMpOyAvLyBmYXN0IHBhdGggZm9yIG5vIGFuaW1hdGlvblxyXG4gICAgcmV0dXJuIGFuaTtcclxufTtcclxuY29uc3QgYWZ0ZXJUcmFuc2l0aW9uID0gKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XHJcbiAgICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcclxuICAgIGVudGVyaW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XHJcbiAgICBpZiAobGVhdmluZ0VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZWF2aW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGdldEFuaW1hdGlvbkJ1aWxkZXIgPSBhc3luYyAob3B0cykgPT4ge1xyXG4gICAgaWYgKCFvcHRzLmxlYXZpbmdFbCB8fCAhb3B0cy5hbmltYXRlZCB8fCBvcHRzLmR1cmF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChvcHRzLmFuaW1hdGlvbkJ1aWxkZXIpIHtcclxuICAgICAgICByZXR1cm4gb3B0cy5hbmltYXRpb25CdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0QW5pbWF0aW9uID0gKG9wdHMubW9kZSA9PT0gJ2lvcycpXHJcbiAgICAgICAgPyAoYXdhaXQgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5pb3NUcmFuc2l0aW9uQW5pbWF0aW9uXHJcbiAgICAgICAgOiAoYXdhaXQgbWRUcmFuc2l0aW9uQW5pbWF0aW9uKCkpLm1kVHJhbnNpdGlvbkFuaW1hdGlvbjtcclxuICAgIHJldHVybiBnZXRBbmltYXRpb247XHJcbn07XHJcbmNvbnN0IGFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb25CdWlsZGVyLCBvcHRzKSA9PiB7XHJcbiAgICBhd2FpdCB3YWl0Rm9yUmVhZHkob3B0cywgdHJ1ZSk7XHJcbiAgICBsZXQgdHJhbnM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydCgnLi9pbmRleC02OWMzNzg4NS5qcycpO1xyXG4gICAgICAgIHRyYW5zID0gYXdhaXQgbW9kLmNyZWF0ZShhbmltYXRpb25CdWlsZGVyLCBvcHRzLmJhc2VFbCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdHJhbnMgPSBhbmltYXRpb25CdWlsZGVyKG9wdHMuYmFzZUVsLCBvcHRzKTtcclxuICAgIH1cclxuICAgIGZpcmVXaWxsRXZlbnRzKG9wdHMuZW50ZXJpbmdFbCwgb3B0cy5sZWF2aW5nRWwpO1xyXG4gICAgY29uc3QgZGlkQ29tcGxldGUgPSBhd2FpdCBwbGF5VHJhbnNpdGlvbih0cmFucywgb3B0cyk7XHJcbiAgICBpZiAob3B0cy5wcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgb3B0cy5wcm9ncmVzc0NhbGxiYWNrKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlkQ29tcGxldGUpIHtcclxuICAgICAgICBmaXJlRGlkRXZlbnRzKG9wdHMuZW50ZXJpbmdFbCwgb3B0cy5sZWF2aW5nRWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYXNDb21wbGV0ZWQ6IGRpZENvbXBsZXRlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogdHJhbnNcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IG5vQW5pbWF0aW9uID0gYXN5bmMgKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XHJcbiAgICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcclxuICAgIGF3YWl0IHdhaXRGb3JSZWFkeShvcHRzLCBmYWxzZSk7XHJcbiAgICBmaXJlV2lsbEV2ZW50cyhlbnRlcmluZ0VsLCBsZWF2aW5nRWwpO1xyXG4gICAgZmlyZURpZEV2ZW50cyhlbnRlcmluZ0VsLCBsZWF2aW5nRWwpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYXNDb21wbGV0ZWQ6IHRydWVcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IHdhaXRGb3JSZWFkeSA9IGFzeW5jIChvcHRzLCBkZWZhdWx0RGVlcCkgPT4ge1xyXG4gICAgY29uc3QgZGVlcCA9IG9wdHMuZGVlcFdhaXQgIT09IHVuZGVmaW5lZCA/IG9wdHMuZGVlcFdhaXQgOiBkZWZhdWx0RGVlcDtcclxuICAgIGNvbnN0IHByb21pc2VzID0gZGVlcCA/IFtcclxuICAgICAgICBkZWVwUmVhZHkob3B0cy5lbnRlcmluZ0VsKSxcclxuICAgICAgICBkZWVwUmVhZHkob3B0cy5sZWF2aW5nRWwpLFxyXG4gICAgXSA6IFtcclxuICAgICAgICBzaGFsbG93UmVhZHkob3B0cy5lbnRlcmluZ0VsKSxcclxuICAgICAgICBzaGFsbG93UmVhZHkob3B0cy5sZWF2aW5nRWwpLFxyXG4gICAgXTtcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIGF3YWl0IG5vdGlmeVZpZXdSZWFkeShvcHRzLnZpZXdJc1JlYWR5LCBvcHRzLmVudGVyaW5nRWwpO1xyXG59O1xyXG5jb25zdCBub3RpZnlWaWV3UmVhZHkgPSBhc3luYyAodmlld0lzUmVhZHksIGVudGVyaW5nRWwpID0+IHtcclxuICAgIGlmICh2aWV3SXNSZWFkeSkge1xyXG4gICAgICAgIGF3YWl0IHZpZXdJc1JlYWR5KGVudGVyaW5nRWwpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBwbGF5VHJhbnNpdGlvbiA9ICh0cmFucywgb3B0cykgPT4ge1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NDYWxsYmFjayA9IG9wdHMucHJvZ3Jlc3NDYWxsYmFjaztcclxuICAgIC8vIFRPRE86IFJlbW92ZSBBbmltYXRpb25CdWlsZGVyXHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgdHJhbnMub25GaW5pc2goKGN1cnJlbnRTdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFN0ZXAgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnJlbnRTdGVwID09PSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0cmFucy5oYXNDb21wbGV0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cmFucy5oYXNDb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvb2wsIGxldCdzIGRvIHRoaXMsIHN0YXJ0IHRoZSB0cmFuc2l0aW9uXHJcbiAgICBpZiAocHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSBzd2lwZSB0byBnbyBiYWNrLCBqdXN0IGdldCB0aGUgdHJhbnNpdGlvbiBwcm9ncmVzcyByZWFkeVxyXG4gICAgICAgIC8vIGtpY2sgb2ZmIHRoZSBzd2lwZSBhbmltYXRpb24gc3RhcnRcclxuICAgICAgICB0cmFucy5wcm9ncmVzc1N0YXJ0KHRydWUpO1xyXG4gICAgICAgIHByb2dyZXNzQ2FsbGJhY2sodHJhbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gb25seSB0aGUgdG9wIGxldmVsIHRyYW5zaXRpb24gc2hvdWxkIGFjdHVhbGx5IHN0YXJ0IFwicGxheVwiXHJcbiAgICAgICAgLy8ga2ljayBpdCBvZmYgYW5kIGxldCBpdCBwbGF5IHRocm91Z2hcclxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIHRyYW5zLnBsYXkoKTtcclxuICAgIH1cclxuICAgIC8vIGNyZWF0ZSBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBhbmltYXRpb24gaXMgZG9uZVxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbn07XHJcbmNvbnN0IGZpcmVXaWxsRXZlbnRzID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCkgPT4ge1xyXG4gICAgbGlmZWN5Y2xlKGxlYXZpbmdFbCwgTElGRUNZQ0xFX1dJTExfTEVBVkUpO1xyXG4gICAgbGlmZWN5Y2xlKGVudGVyaW5nRWwsIExJRkVDWUNMRV9XSUxMX0VOVEVSKTtcclxufTtcclxuY29uc3QgZmlyZURpZEV2ZW50cyA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwpID0+IHtcclxuICAgIGxpZmVjeWNsZShlbnRlcmluZ0VsLCBMSUZFQ1lDTEVfRElEX0VOVEVSKTtcclxuICAgIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9ESURfTEVBVkUpO1xyXG59O1xyXG5jb25zdCBsaWZlY3ljbGUgPSAoZWwsIGV2ZW50TmFtZSkgPT4ge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgICAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc2hhbGxvd1JlYWR5ID0gKGVsKSA9PiB7XHJcbiAgICBpZiAoZWwgJiYgZWwuY29tcG9uZW50T25SZWFkeSkge1xyXG4gICAgICAgIHJldHVybiBlbC5jb21wb25lbnRPblJlYWR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn07XHJcbmNvbnN0IGRlZXBSZWFkeSA9IGFzeW5jIChlbCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGVsO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5jb21wb25lbnRPblJlYWR5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlbmNpbEVsID0gYXdhaXQgZWxlbWVudC5jb21wb25lbnRPblJlYWR5KCk7XHJcbiAgICAgICAgICAgIGlmIChzdGVuY2lsRWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikubWFwKGRlZXBSZWFkeSkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzZXRQYWdlSGlkZGVuID0gKGVsLCBoaWRkZW4pID0+IHtcclxuICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdpb24tcGFnZS1oaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVsLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1oaWRkZW4nKTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc2V0WkluZGV4ID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoZW50ZXJpbmdFbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5zdHlsZS56SW5kZXggPSAoZGlyZWN0aW9uID09PSAnYmFjaycpXHJcbiAgICAgICAgICAgID8gJzk5J1xyXG4gICAgICAgICAgICA6ICcxMDEnO1xyXG4gICAgfVxyXG4gICAgaWYgKGxlYXZpbmdFbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGVhdmluZ0VsLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXRJb25QYWdlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1wYWdlJykpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IGlvblBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcclxuICAgIGlmIChpb25QYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlvblBhZ2U7XHJcbiAgICB9XHJcbiAgICAvLyBpZGssIHJldHVybiB0aGUgb3JpZ2luYWwgZWxlbWVudCBzbyBhdCBsZWFzdCBzb21ldGhpbmcgYW5pbWF0ZXMgYW5kIHdlIGRvbid0IGhhdmUgYSBudWxsIHBvaW50ZXJcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59O1xuXG5leHBvcnQgeyBkZWVwUmVhZHkgYXMgZCwgZ2V0SW9uUGFnZUVsZW1lbnQgYXMgZywgbGlmZWN5Y2xlIGFzIGwsIHNldFBhZ2VIaWRkZW4gYXMgcywgdHJhbnNpdGlvbiBhcyB0IH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUCwgZCBhcyBwcmVwYXJlT3ZlcmxheSwgZSBhcyBwcmVzZW50LCBmIGFzIGRpc21pc3MsIGcgYXMgZXZlbnRNZXRob2QgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50LCBkIGFzIGRldGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLWMyZTJlMWY0LmpzJztcbmltcG9ydCB7IGQgYXMgZGVlcFJlYWR5IH0gZnJvbSAnLi9pbmRleC02ODI2ZjJmNi5qcyc7XG5cbi8qKlxyXG4gKiBpT1MgTW9kYWwgRW50ZXIgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBpb3NFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwpID0+IHtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC40KTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSlcclxuICAgICAgICAuYmVmb3JlU3R5bGVzKHsgJ29wYWNpdHknOiAxIH0pXHJcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcclxuICAgICAgICAuYmVmb3JlQWRkQ2xhc3MoJ3Nob3ctbW9kYWwnKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XHJcbi8qKlxyXG4gKiBBbmltYXRpb25zIGZvciBtb2RhbHNcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBtb2RhbFNsaWRlSW4ocm9vdEVsOiBIVE1MRWxlbWVudCkge1xyXG4vLyB9XHJcbi8vIGV4cG9ydCBjbGFzcyBNb2RhbFNsaWRlT3V0IHtcclxuLy8gICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuLy8gICAgIGxldCBiYWNrZHJvcCA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIGVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKTtcclxuLy8gICAgIGxldCB3cmFwcGVyRWxlID0gPEhUTUxFbGVtZW50PmVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XHJcbi8vICAgICBsZXQgd3JhcHBlckVsZVJlY3QgPSB3cmFwcGVyRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4vLyAgICAgbGV0IHdyYXBwZXIgPSBuZXcgQW5pbWF0aW9uKHRoaXMucGx0LCB3cmFwcGVyRWxlKTtcclxuLy8gICAgIC8vIGhlaWdodCBvZiB0aGUgc2NyZWVuIC0gdG9wIG9mIHRoZSBjb250YWluZXIgdGVsbHMgdXMgaG93IG11Y2ggdG8gc2Nvb3QgaXQgZG93blxyXG4vLyAgICAgLy8gc28gaXQncyBvZmYtc2NyZWVuXHJcbi8vICAgICB3cmFwcGVyLmZyb21UbygndHJhbnNsYXRlWScsICcwcHgnLCBgJHt0aGlzLnBsdC5oZWlnaHQoKSAtIHdyYXBwZXJFbGVSZWN0LnRvcH1weGApO1xyXG4vLyAgICAgYmFja2Ryb3AuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwLjApO1xyXG4vLyAgICAgdGhpc1xyXG4vLyAgICAgICAuZWxlbWVudCh0aGlzLmxlYXZpbmdWaWV3LnBhZ2VSZWYoKSlcclxuLy8gICAgICAgLmVhc2luZygnZWFzZS1vdXQnKVxyXG4vLyAgICAgICAuZHVyYXRpb24oMjUwKVxyXG4vLyAgICAgICAuYWRkKGJhY2tkcm9wKVxyXG4vLyAgICAgICAuYWRkKHdyYXBwZXIpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBleHBvcnQgY2xhc3MgTW9kYWxNRFNsaWRlSW4ge1xyXG4vLyAgIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xyXG4vLyAgICAgY29uc3QgYmFja2Ryb3AgPSBuZXcgQW5pbWF0aW9uKHRoaXMucGx0LCBlbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSk7XHJcbi8vICAgICBjb25zdCB3cmFwcGVyID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSk7XHJcbi8vICAgICBiYWNrZHJvcC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjQpO1xyXG4vLyAgICAgd3JhcHBlci5mcm9tVG8oJ3RyYW5zbGF0ZVknLCAnNDBweCcsICcwcHgnKTtcclxuLy8gICAgIHdyYXBwZXIuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XHJcbi8vICAgICBjb25zdCBEVVJBVElPTiA9IDI4MDtcclxuLy8gICAgIGNvbnN0IEVBU0lORyA9ICdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknO1xyXG4vLyAgICAgdGhpcy5lbGVtZW50KHRoaXMuZW50ZXJpbmdWaWV3LnBhZ2VSZWYoKSkuZWFzaW5nKEVBU0lORykuZHVyYXRpb24oRFVSQVRJT04pXHJcbi8vICAgICAgIC5hZGQoYmFja2Ryb3ApXHJcbi8vICAgICAgIC5hZGQod3JhcHBlcik7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIGV4cG9ydCBjbGFzcyBNb2RhbE1EU2xpZGVPdXQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xyXG4vLyAgICAgY29uc3QgYmFja2Ryb3AgPSBuZXcgQW5pbWF0aW9uKHRoaXMucGx0LCBlbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSk7XHJcbi8vICAgICBjb25zdCB3cmFwcGVyID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSk7XHJcbi8vICAgICBiYWNrZHJvcC5mcm9tVG8oJ29wYWNpdHknLCAwLjQsIDAuMCk7XHJcbi8vICAgICB3cmFwcGVyLmZyb21UbygndHJhbnNsYXRlWScsICcwcHgnLCAnNDBweCcpO1xyXG4vLyAgICAgd3JhcHBlci5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcclxuLy8gICAgIHRoaXNcclxuLy8gICAgICAgLmVsZW1lbnQodGhpcy5sZWF2aW5nVmlldy5wYWdlUmVmKCkpXHJcbi8vICAgICAgIC5kdXJhdGlvbigyMDApXHJcbi8vICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJylcclxuLy8gICAgICAgLmFkZCh3cmFwcGVyKVxyXG4vLyAgICAgICAuYWRkKGJhY2tkcm9wKTtcclxuLy8gICB9XHJcbi8vIH1cblxuLyoqXHJcbiAqIGlPUyBNb2RhbCBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xyXG4gICAgY29uc3Qgd3JhcHBlckVsUmVjdCA9IHdyYXBwZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjQsIDAuMCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQod3JhcHBlckVsKVxyXG4gICAgICAgIC5iZWZvcmVTdHlsZXMoeyAnb3BhY2l0eSc6IDEgfSlcclxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCBgdHJhbnNsYXRlWSgke2Jhc2VFbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVySGVpZ2h0IC0gd3JhcHBlckVsUmVjdC50b3B9cHgpYCk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdlYXNlLW91dCcpXHJcbiAgICAgICAgLmR1cmF0aW9uKDI1MClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogTWQgTW9kYWwgRW50ZXIgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZEVudGVyQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMyKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSlcclxuICAgICAgICAua2V5ZnJhbWVzKFtcclxuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMC4wMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg0MHB4KScgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpJyB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDI4MClcclxuICAgICAgICAuYmVmb3JlQWRkQ2xhc3MoJ3Nob3ctbW9kYWwnKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBNZCBNb2RhbCBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4zMiwgMC4wKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudCh3cmFwcGVyRWwpXHJcbiAgICAgICAgLmtleWZyYW1lcyhbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDAuOTksIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KScgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg0MHB4KScgfVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG5jb25zdCBNb2RhbCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgYmFja2Ryb3Agd2lsbCBiZSBkaXNwbGF5ZWQgYmVoaW5kIHRoZSBtb2RhbC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkxpZmVjeWNsZSA9IChtb2RhbEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMudXNlcnNFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IExJRkVDWUNMRV9NQVBbbW9kYWxFdmVudC50eXBlXTtcbiAgICAgICAgICAgIGlmIChlbCAmJiBuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogbW9kYWxFdmVudC5kZXRhaWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxEaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb2RhbFdpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb2RhbFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgbW9kYWwgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIGFzeW5jIHByZXNlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihgLm1vZGFsLXdyYXBwZXJgKTtcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29udGFpbmVyIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbXBvbmVudFByb3BzKSwgeyBtb2RhbDogdGhpcy5lbCB9KTtcbiAgICAgICAgdGhpcy51c2Vyc0VsZW1lbnQgPSBhd2FpdCBhdHRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgY29udGFpbmVyLCB0aGlzLmNvbXBvbmVudCwgWydpb24tcGFnZSddLCBjb21wb25lbnRQcm9wcyk7XG4gICAgICAgIGF3YWl0IGRlZXBSZWFkeSh0aGlzLnVzZXJzRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBwcmVzZW50KHRoaXMsICdtb2RhbEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBtb2RhbCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgbW9kYWwuIEZvciBleGFtcGxlLCAnY2FuY2VsJyBvciAnYmFja2Ryb3AnLlxuICAgICAqL1xuICAgIGFzeW5jIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgICAgICBjb25zdCBkaXNtaXNzZWQgPSBhd2FpdCBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdtb2RhbExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24pO1xuICAgICAgICBpZiAoZGlzbWlzc2VkKSB7XG4gICAgICAgICAgICBhd2FpdCBkZXRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgdGhpcy51c2Vyc0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXNtaXNzZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbW9kYWwgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgb25EaWREaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbk1vZGFsRGlkRGlzbWlzcycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1vZGFsIHdpbGwgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBvbldpbGxEaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbk1vZGFsV2lsbERpc21pc3MnKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJuby1yb3V0ZXJcIjogdHJ1ZSwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBjbGFzczogT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSB9LCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgekluZGV4OiBgJHsyMDAwMCArIHRoaXMub3ZlcmxheUluZGV4fWAsXG4gICAgICAgICAgICB9LCBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAsIG9uSW9uRGlzbWlzczogdGhpcy5vbkRpc21pc3MsIG9uSW9uTW9kYWxEaWRQcmVzZW50OiB0aGlzLm9uTGlmZWN5Y2xlLCBvbklvbk1vZGFsV2lsbFByZXNlbnQ6IHRoaXMub25MaWZlY3ljbGUsIG9uSW9uTW9kYWxXaWxsRGlzbWlzczogdGhpcy5vbkxpZmVjeWNsZSwgb25Jb25Nb2RhbERpZERpc21pc3M6IHRoaXMub25MaWZlY3ljbGUgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLCB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyByb2xlOiBcImRpYWxvZ1wiLCBjbGFzczoge1xuICAgICAgICAgICAgICAgIFtgbW9kYWwtd3JhcHBlcmBdOiB0cnVlLFxuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgIH0gfSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tbW9kYWwtbWQtaHstLXdpZHRoOjEwMCU7LS1taW4td2lkdGg6YXV0bzstLW1heC13aWR0aDphdXRvOy0taGVpZ2h0OjEwMCU7LS1taW4taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LS1vdmVyZmxvdzpoaWRkZW47LS1ib3JkZXItcmFkaXVzOjA7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1zdHlsZTpub25lOy0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTstLWJveC1zaGFkb3c6bm9uZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y29udGFpbjpzdHJpY3R9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1tb2RhbC1tZC1oe2Rpc3BsYXk6bm9uZX0ubW9kYWwtd3JhcHBlci5zYy1pb24tbW9kYWwtbWR7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7b3ZlcmZsb3c6dmFyKC0tb3ZlcmZsb3cpO3otaW5kZXg6MTB9XFxAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWluLWhlaWdodDo2MDBweCl7LnNjLWlvbi1tb2RhbC1tZC1oey0td2lkdGg6NjAwcHg7LS1oZWlnaHQ6NTAwcHg7LS1pb24tc2FmZS1hcmVhLXRvcDowcHg7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTowcHg7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9fVxcQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6NzY4cHgpey5zYy1pb24tbW9kYWwtbWQtaHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjYwMHB4fX1cXEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtaW4taGVpZ2h0OjYwMHB4KXsuc2MtaW9uLW1vZGFsLW1kLWh7LS1ib3JkZXItcmFkaXVzOjJweDstLWJveC1zaGFkb3c6MCAyOHB4IDQ4cHggcmdiYSgwLDAsMCwwLjQpfX0ubW9kYWwtd3JhcHBlci5zYy1pb24tbW9kYWwtbWR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw0MHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDQwcHgsMCk7b3BhY2l0eTouMDF9XCI7IH1cbn07XG5jb25zdCBMSUZFQ1lDTEVfTUFQID0ge1xuICAgICdpb25Nb2RhbERpZFByZXNlbnQnOiAnaW9uVmlld0RpZEVudGVyJyxcbiAgICAnaW9uTW9kYWxXaWxsUHJlc2VudCc6ICdpb25WaWV3V2lsbEVudGVyJyxcbiAgICAnaW9uTW9kYWxXaWxsRGlzbWlzcyc6ICdpb25WaWV3V2lsbExlYXZlJyxcbiAgICAnaW9uTW9kYWxEaWREaXNtaXNzJzogJ2lvblZpZXdEaWRMZWF2ZScsXG59O1xuXG5leHBvcnQgeyBNb2RhbCBhcyBpb25fbW9kYWwgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=