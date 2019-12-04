(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js":
/*!********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_popover", function() { return Popover; });
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
 * iOS Popover Enter Animation
 */
const iosEnterAnimation = (baseEl, ev) => {
    let originY = 'top';
    let originX = 'left';
    const contentEl = baseEl.querySelector('.popover-content');
    const contentDimentions = contentEl.getBoundingClientRect();
    const contentWidth = contentDimentions.width;
    const contentHeight = contentDimentions.height;
    const bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
    const bodyHeight = baseEl.ownerDocument.defaultView.innerHeight;
    // If ev was passed, use that for target element
    const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    const targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
    const targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    const targetWidth = (targetDim && targetDim.width) || 0;
    const targetHeight = (targetDim && targetDim.height) || 0;
    const arrowEl = baseEl.querySelector('.popover-arrow');
    const arrowDim = arrowEl.getBoundingClientRect();
    const arrowWidth = arrowDim.width;
    const arrowHeight = arrowDim.height;
    if (targetDim == null) {
        arrowEl.style.display = 'none';
    }
    const arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    const popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    //
    let checkSafeAreaLeft = false;
    let checkSafeAreaRight = false;
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    // 25 is a random/arbitrary number. It seems to work fine for ios11
    // and iPhoneX. Is it perfect? No. Does it work? Yes.
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
        // Ok, so we're on the right side of the screen,
        // but now we need to make sure we're still a bit further right
        // cus....notchurally... Again, 25 is random. It works tho
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        contentEl.style.left = `calc(${popoverCSS.left}px + var(--ion-safe-area-left, 0px))`;
    }
    if (checkSafeAreaRight) {
        contentEl.style.left = `calc(${popoverCSS.left}px - var(--ion-safe-area-right, 0px))`;
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.08);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
const POPOVER_IOS_BODY_PADDING = 5;

/**
 * iOS Popover Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.08, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Popover Enter Animation
 */
const mdEnterAnimation = (baseEl, ev) => {
    const POPOVER_MD_BODY_PADDING = 12;
    const doc = baseEl.ownerDocument;
    const isRTL = doc.dir === 'rtl';
    let originY = 'top';
    let originX = isRTL ? 'right' : 'left';
    const contentEl = baseEl.querySelector('.popover-content');
    const contentDimentions = contentEl.getBoundingClientRect();
    const contentWidth = contentDimentions.width;
    const contentHeight = contentDimentions.height;
    const bodyWidth = doc.defaultView.innerWidth;
    const bodyHeight = doc.defaultView.innerHeight;
    // If ev was passed, use that for target element
    const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    // As per MD spec, by default position the popover below the target (trigger) element
    const targetTop = targetDim != null && 'bottom' in targetDim
        ? targetDim.bottom
        : bodyHeight / 2 - contentHeight / 2;
    const targetLeft = targetDim != null && 'left' in targetDim
        ? isRTL
            ? targetDim.left - contentWidth + targetDim.width
            : targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    const targetHeight = (targetDim && targetDim.height) || 0;
    const popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
        // Same origin in this case for both LTR & RTL
        // Note: in LTR, originX is already 'left'
        originX = 'left';
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        // Same origin in this case for both LTR & RTL
        // Note: in RTL, originX is already 'right'
        originX = 'right';
    }
    // If the popover when popped down stretches past bottom of screen,
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight - targetHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const contentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const viewportAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.01, 1);
    contentAnimation
        .addElement(contentEl)
        .beforeStyles({
        'top': `${popoverCSS.top}px`,
        'left': `${popoverCSS.left}px`,
        'transform-origin': `${originY} ${originX}`
    })
        .fromTo('transform', 'scale(0.001)', 'scale(1)');
    viewportAnimation
        .addElement(baseEl.querySelector('.popover-viewport'))
        .fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
};

/**
 * Md Popover Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Popover = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * If `true`, the popover will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the popover.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the popover will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the popover will animate.
         */
        this.animated = true;
        this.onDismiss = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.dismiss();
        };
        this.onBackdropTap = () => {
            this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["B"]);
        };
        this.onLifecycle = (modalEvent) => {
            const el = this.usersElement;
            const name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                const event = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(event);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
        this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverDidPresent", 7);
        this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverWillPresent", 7);
        this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverWillDismiss", 7);
        this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverDidDismiss", 7);
    }
    /**
     * Present the popover overlay after it has been created.
     */
    async present() {
        if (this.presented) {
            return;
        }
        const container = this.el.querySelector('.popover-content');
        if (!container) {
            throw new Error('container is undefined');
        }
        const data = Object.assign(Object.assign({}, this.componentProps), { popover: this.el });
        this.usersElement = await Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__["a"])(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data);
        await Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_8__["d"])(this.usersElement);
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event);
    }
    /**
     * Dismiss the popover overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
     */
    async dismiss(data, role) {
        const shouldDismiss = await Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event);
        if (shouldDismiss) {
            await Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this.delegate, this.usersElement);
        }
        return shouldDismiss;
    }
    /**
     * Returns a promise that resolves when the popover did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionPopoverDidDismiss');
    }
    /**
     * Returns a promise that resolves when the popover will dismiss.
     */
    onWillDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionPopoverWillDismiss');
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const { onLifecycle } = this;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-modal": "true", "no-router": true, style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), { [mode]: true, 'popover-translucent': this.translucent }), onIonPopoverDidPresent: onLifecycle, onIonPopoverWillPresent: onLifecycle, onIonPopoverWillDismiss: onLifecycle, onIonPopoverDidDismiss: onLifecycle, onIonDismiss: this.onDismiss, onIonBackdropTap: this.onBackdropTap }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { tappable: this.backdropDismiss, visible: this.showBackdrop }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "popover-wrapper" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "popover-arrow" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "popover-content" }))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"; }
};
const LIFECYCLE_MAP = {
    'ionPopoverDidPresent': 'ionViewDidEnter',
    'ionPopoverWillPresent': 'ionViewWillEnter',
    'ionPopoverWillDismiss': 'ionViewWillLeave',
    'ionPopoverDidDismiss': 'ionViewDidLeave',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY4MjZmMmY2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXBvcG92ZXItbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7QUNqQ3REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDK0Y7O0FBRW5KLHFDQUFxQyxxTEFBc0M7QUFDM0Usb0NBQW9DLG1MQUFxQztBQUN6RTtBQUNBO0FBQ0EsUUFBUSwyREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QkFBNkIsNkJBQTZCLDZCQUE2QixxQ0FBcUMsNkJBQTZCLGNBQWMsV0FBVyxvQ0FBb0Msd0JBQXdCLDBCQUEwQiwyQkFBMkIseUJBQXlCLHFCQUFxQixjQUFjLGlCQUFpQiw0R0FBNEcsbUNBQW1DLGtCQUFrQixrQ0FBa0MsMEJBQTBCLG9NQUFvTSxtQ0FBbUMsMkJBQTJCLG9DQUFvQyw2QkFBNkIscUJBQXFCLEVBQUU7QUFDcm1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQzs7Ozs7Ozs7Ozs7OztBQ3hWbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiIxNFxcY2h1bmtzXFwxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF0dGFjaENvbXBvbmVudCA9IGFzeW5jIChkZWxlZ2F0ZSwgY29udGFpbmVyLCBjb21wb25lbnQsIGNzc0NsYXNzZXMsIGNvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgICBpZiAoZGVsZWdhdGUpIHtcclxuICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXR0YWNoVmlld1RvRG9tKGNvbnRhaW5lciwgY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgY3NzQ2xhc3Nlcyk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudCAhPT0gJ3N0cmluZycgJiYgIShjb21wb25lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZyYW1ld29yayBkZWxlZ2F0ZSBpcyBtaXNzaW5nJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbCA9ICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJylcclxuICAgICAgICA/IGNvbnRhaW5lci5vd25lckRvY3VtZW50ICYmIGNvbnRhaW5lci5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KVxyXG4gICAgICAgIDogY29tcG9uZW50O1xyXG4gICAgaWYgKGNzc0NsYXNzZXMpIHtcclxuICAgICAgICBjc3NDbGFzc2VzLmZvckVhY2goYyA9PiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcclxuICAgIH1cclxuICAgIGlmIChjb21wb25lbnRQcm9wcykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWwsIGNvbXBvbmVudFByb3BzKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICBpZiAoZWwuY29tcG9uZW50T25SZWFkeSkge1xyXG4gICAgICAgIGF3YWl0IGVsLmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxufTtcclxuY29uc3QgZGV0YWNoQ29tcG9uZW50ID0gKGRlbGVnYXRlLCBlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5yZW1vdmVWaWV3RnJvbURvbShjb250YWluZXIsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59O1xuXG5leHBvcnQgeyBhdHRhY2hDb21wb25lbnQgYXMgYSwgZGV0YWNoQ29tcG9uZW50IGFzIGQgfTtcbiIsImltcG9ydCB7IHcgYXMgd3JpdGVUYXNrIH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCB7IGIgYXMgTElGRUNZQ0xFX1dJTExfTEVBVkUsIEwgYXMgTElGRUNZQ0xFX1dJTExfRU5URVIsIGEgYXMgTElGRUNZQ0xFX0RJRF9FTlRFUiwgYyBhcyBMSUZFQ1lDTEVfRElEX0xFQVZFIH0gZnJvbSAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xuXG5jb25zdCBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uID0gKCkgPT4gaW1wb3J0KCcuL2lvcy50cmFuc2l0aW9uLTA3MWJkNDIxLmpzJyk7XHJcbmNvbnN0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbiA9ICgpID0+IGltcG9ydCgnLi9tZC50cmFuc2l0aW9uLTE1YTgxYjA4LmpzJyk7XHJcbmNvbnN0IHRyYW5zaXRpb24gPSAob3B0cykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3cml0ZVRhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBiZWZvcmVUcmFuc2l0aW9uKG9wdHMpO1xyXG4gICAgICAgICAgICBydW5UcmFuc2l0aW9uKG9wdHMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFuaW1hdGlvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zaXRpb24ob3B0cyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGJlZm9yZVRyYW5zaXRpb24gPSAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcclxuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xyXG4gICAgc2V0WkluZGV4KGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cy5kaXJlY3Rpb24pO1xyXG4gICAgaWYgKG9wdHMuc2hvd0dvQmFjaykge1xyXG4gICAgICAgIGVudGVyaW5nRWwuY2xhc3NMaXN0LmFkZCgnY2FuLWdvLWJhY2snKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVudGVyaW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnY2FuLWdvLWJhY2snKTtcclxuICAgIH1cclxuICAgIHNldFBhZ2VIaWRkZW4oZW50ZXJpbmdFbCwgZmFsc2UpO1xyXG4gICAgaWYgKGxlYXZpbmdFbCkge1xyXG4gICAgICAgIHNldFBhZ2VIaWRkZW4obGVhdmluZ0VsLCBmYWxzZSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHJ1blRyYW5zaXRpb24gPSBhc3luYyAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IGF3YWl0IGdldEFuaW1hdGlvbkJ1aWxkZXIob3B0cyk7XHJcbiAgICBjb25zdCBhbmkgPSAoYW5pbWF0aW9uQnVpbGRlcilcclxuICAgICAgICA/IGFuaW1hdGlvbihhbmltYXRpb25CdWlsZGVyLCBvcHRzKVxyXG4gICAgICAgIDogbm9BbmltYXRpb24ob3B0cyk7IC8vIGZhc3QgcGF0aCBmb3Igbm8gYW5pbWF0aW9uXHJcbiAgICByZXR1cm4gYW5pO1xyXG59O1xyXG5jb25zdCBhZnRlclRyYW5zaXRpb24gPSAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcclxuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xyXG4gICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1pbnZpc2libGUnKTtcclxuICAgIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxlYXZpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1pbnZpc2libGUnKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgZ2V0QW5pbWF0aW9uQnVpbGRlciA9IGFzeW5jIChvcHRzKSA9PiB7XHJcbiAgICBpZiAoIW9wdHMubGVhdmluZ0VsIHx8ICFvcHRzLmFuaW1hdGVkIHx8IG9wdHMuZHVyYXRpb24gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdHMuYW5pbWF0aW9uQnVpbGRlcikge1xyXG4gICAgICAgIHJldHVybiBvcHRzLmFuaW1hdGlvbkJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRBbmltYXRpb24gPSAob3B0cy5tb2RlID09PSAnaW9zJylcclxuICAgICAgICA/IChhd2FpdCBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uKCkpLmlvc1RyYW5zaXRpb25BbmltYXRpb25cclxuICAgICAgICA6IChhd2FpdCBtZFRyYW5zaXRpb25BbmltYXRpb24oKSkubWRUcmFuc2l0aW9uQW5pbWF0aW9uO1xyXG4gICAgcmV0dXJuIGdldEFuaW1hdGlvbjtcclxufTtcclxuY29uc3QgYW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpID0+IHtcclxuICAgIGF3YWl0IHdhaXRGb3JSZWFkeShvcHRzLCB0cnVlKTtcclxuICAgIGxldCB0cmFucztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbW9kID0gYXdhaXQgaW1wb3J0KCcuL2luZGV4LTY5YzM3ODg1LmpzJyk7XHJcbiAgICAgICAgdHJhbnMgPSBhd2FpdCBtb2QuY3JlYXRlKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMuYmFzZUVsLCBvcHRzKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICB0cmFucyA9IGFuaW1hdGlvbkJ1aWxkZXIob3B0cy5iYXNlRWwsIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgZmlyZVdpbGxFdmVudHMob3B0cy5lbnRlcmluZ0VsLCBvcHRzLmxlYXZpbmdFbCk7XHJcbiAgICBjb25zdCBkaWRDb21wbGV0ZSA9IGF3YWl0IHBsYXlUcmFuc2l0aW9uKHRyYW5zLCBvcHRzKTtcclxuICAgIGlmIChvcHRzLnByb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICBvcHRzLnByb2dyZXNzQ2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGlmIChkaWRDb21wbGV0ZSkge1xyXG4gICAgICAgIGZpcmVEaWRFdmVudHMob3B0cy5lbnRlcmluZ0VsLCBvcHRzLmxlYXZpbmdFbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhc0NvbXBsZXRlZDogZGlkQ29tcGxldGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiB0cmFuc1xyXG4gICAgfTtcclxufTtcclxuY29uc3Qgbm9BbmltYXRpb24gPSBhc3luYyAob3B0cykgPT4ge1xyXG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcclxuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xyXG4gICAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIGZhbHNlKTtcclxuICAgIGZpcmVXaWxsRXZlbnRzKGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XHJcbiAgICBmaXJlRGlkRXZlbnRzKGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhc0NvbXBsZXRlZDogdHJ1ZVxyXG4gICAgfTtcclxufTtcclxuY29uc3Qgd2FpdEZvclJlYWR5ID0gYXN5bmMgKG9wdHMsIGRlZmF1bHREZWVwKSA9PiB7XHJcbiAgICBjb25zdCBkZWVwID0gb3B0cy5kZWVwV2FpdCAhPT0gdW5kZWZpbmVkID8gb3B0cy5kZWVwV2FpdCA6IGRlZmF1bHREZWVwO1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBkZWVwID8gW1xyXG4gICAgICAgIGRlZXBSZWFkeShvcHRzLmVudGVyaW5nRWwpLFxyXG4gICAgICAgIGRlZXBSZWFkeShvcHRzLmxlYXZpbmdFbCksXHJcbiAgICBdIDogW1xyXG4gICAgICAgIHNoYWxsb3dSZWFkeShvcHRzLmVudGVyaW5nRWwpLFxyXG4gICAgICAgIHNoYWxsb3dSZWFkeShvcHRzLmxlYXZpbmdFbCksXHJcbiAgICBdO1xyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgYXdhaXQgbm90aWZ5Vmlld1JlYWR5KG9wdHMudmlld0lzUmVhZHksIG9wdHMuZW50ZXJpbmdFbCk7XHJcbn07XHJcbmNvbnN0IG5vdGlmeVZpZXdSZWFkeSA9IGFzeW5jICh2aWV3SXNSZWFkeSwgZW50ZXJpbmdFbCkgPT4ge1xyXG4gICAgaWYgKHZpZXdJc1JlYWR5KSB7XHJcbiAgICAgICAgYXdhaXQgdmlld0lzUmVhZHkoZW50ZXJpbmdFbCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHBsYXlUcmFuc2l0aW9uID0gKHRyYW5zLCBvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBwcm9ncmVzc0NhbGxiYWNrID0gb3B0cy5wcm9ncmVzc0NhbGxiYWNrO1xyXG4gICAgLy8gVE9ETzogUmVtb3ZlIEFuaW1hdGlvbkJ1aWxkZXJcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICB0cmFucy5vbkZpbmlzaCgoY3VycmVudFN0ZXApID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoY3VycmVudFN0ZXAgPT09IDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRyYW5zLmhhc0NvbXBsZXRlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRyYW5zLmhhc0NvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gY29vbCwgbGV0J3MgZG8gdGhpcywgc3RhcnQgdGhlIHRyYW5zaXRpb25cclxuICAgIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBhIHN3aXBlIHRvIGdvIGJhY2ssIGp1c3QgZ2V0IHRoZSB0cmFuc2l0aW9uIHByb2dyZXNzIHJlYWR5XHJcbiAgICAgICAgLy8ga2ljayBvZmYgdGhlIHN3aXBlIGFuaW1hdGlvbiBzdGFydFxyXG4gICAgICAgIHRyYW5zLnByb2dyZXNzU3RhcnQodHJ1ZSk7XHJcbiAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjayh0cmFucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBvbmx5IHRoZSB0b3AgbGV2ZWwgdHJhbnNpdGlvbiBzaG91bGQgYWN0dWFsbHkgc3RhcnQgXCJwbGF5XCJcclxuICAgICAgICAvLyBraWNrIGl0IG9mZiBhbmQgbGV0IGl0IHBsYXkgdGhyb3VnaFxyXG4gICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgdHJhbnMucGxheSgpO1xyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIGEgY2FsbGJhY2sgZm9yIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBkb25lXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxufTtcclxuY29uc3QgZmlyZVdpbGxFdmVudHMgPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XHJcbiAgICBsaWZlY3ljbGUobGVhdmluZ0VsLCBMSUZFQ1lDTEVfV0lMTF9MRUFWRSk7XHJcbiAgICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX1dJTExfRU5URVIpO1xyXG59O1xyXG5jb25zdCBmaXJlRGlkRXZlbnRzID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCkgPT4ge1xyXG4gICAgbGlmZWN5Y2xlKGVudGVyaW5nRWwsIExJRkVDWUNMRV9ESURfRU5URVIpO1xyXG4gICAgbGlmZWN5Y2xlKGxlYXZpbmdFbCwgTElGRUNZQ0xFX0RJRF9MRUFWRSk7XHJcbn07XHJcbmNvbnN0IGxpZmVjeWNsZSA9IChlbCwgZXZlbnROYW1lKSA9PiB7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcclxuICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzaGFsbG93UmVhZHkgPSAoZWwpID0+IHtcclxuICAgIGlmIChlbCAmJiBlbC5jb21wb25lbnRPblJlYWR5KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufTtcclxuY29uc3QgZGVlcFJlYWR5ID0gYXN5bmMgKGVsKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWw7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNvbXBvbmVudE9uUmVhZHkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVuY2lsRWwgPSBhd2FpdCBlbGVtZW50LmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgICAgICAgICAgaWYgKHN0ZW5jaWxFbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5tYXAoZGVlcFJlYWR5KSk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHNldFBhZ2VIaWRkZW4gPSAoZWwsIGhpZGRlbikgPT4ge1xyXG4gICAgaWYgKGhpZGRlbikge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2lvbi1wYWdlLWhpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWwuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWhpZGRlbicpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzZXRaSW5kZXggPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmIChlbnRlcmluZ0VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbnRlcmluZ0VsLnN0eWxlLnpJbmRleCA9IChkaXJlY3Rpb24gPT09ICdiYWNrJylcclxuICAgICAgICAgICAgPyAnOTknXHJcbiAgICAgICAgICAgIDogJzEwMSc7XHJcbiAgICB9XHJcbiAgICBpZiAobGVhdmluZ0VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZWF2aW5nRWwuc3R5bGUuekluZGV4ID0gJzEwMCc7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW9uUGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xyXG4gICAgaWYgKGlvblBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gaW9uUGFnZTtcclxuICAgIH1cclxuICAgIC8vIGlkaywgcmV0dXJuIHRoZSBvcmlnaW5hbCBlbGVtZW50IHNvIGF0IGxlYXN0IHNvbWV0aGluZyBhbmltYXRlcyBhbmQgd2UgZG9uJ3QgaGF2ZSBhIG51bGwgcG9pbnRlclxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XG5cbmV4cG9ydCB7IGRlZXBSZWFkeSBhcyBkLCBnZXRJb25QYWdlRWxlbWVudCBhcyBnLCBsaWZlY3ljbGUgYXMgbCwgc2V0UGFnZUhpZGRlbiBhcyBzLCB0cmFuc2l0aW9uIGFzIHQgfTtcbiIsImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBnZXRJb25Nb2RlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBCIGFzIEJBQ0tEUk9QLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQsIGQgYXMgZGV0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtYzJlMmUxZjQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWVwUmVhZHkgfSBmcm9tICcuL2luZGV4LTY4MjZmMmY2LmpzJztcblxuLyoqXHJcbiAqIGlPUyBQb3BvdmVyIEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsLCBldikgPT4ge1xyXG4gICAgbGV0IG9yaWdpblkgPSAndG9wJztcclxuICAgIGxldCBvcmlnaW5YID0gJ2xlZnQnO1xyXG4gICAgY29uc3QgY29udGVudEVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGNvbnRlbnREaW1lbnRpb25zID0gY29udGVudEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgY29udGVudFdpZHRoID0gY29udGVudERpbWVudGlvbnMud2lkdGg7XHJcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gY29udGVudERpbWVudGlvbnMuaGVpZ2h0O1xyXG4gICAgY29uc3QgYm9keVdpZHRoID0gYmFzZUVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aDtcclxuICAgIGNvbnN0IGJvZHlIZWlnaHQgPSBiYXNlRWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lckhlaWdodDtcclxuICAgIC8vIElmIGV2IHdhcyBwYXNzZWQsIHVzZSB0aGF0IGZvciB0YXJnZXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGFyZ2V0RGltID0gZXYgJiYgZXYudGFyZ2V0ICYmIGV2LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRhcmdldFRvcCA9IHRhcmdldERpbSAhPSBudWxsICYmICd0b3AnIGluIHRhcmdldERpbSA/IHRhcmdldERpbS50b3AgOiBib2R5SGVpZ2h0IC8gMiAtIGNvbnRlbnRIZWlnaHQgLyAyO1xyXG4gICAgY29uc3QgdGFyZ2V0TGVmdCA9IHRhcmdldERpbSAhPSBudWxsICYmICdsZWZ0JyBpbiB0YXJnZXREaW0gPyB0YXJnZXREaW0ubGVmdCA6IGJvZHlXaWR0aCAvIDI7XHJcbiAgICBjb25zdCB0YXJnZXRXaWR0aCA9ICh0YXJnZXREaW0gJiYgdGFyZ2V0RGltLndpZHRoKSB8fCAwO1xyXG4gICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gKHRhcmdldERpbSAmJiB0YXJnZXREaW0uaGVpZ2h0KSB8fCAwO1xyXG4gICAgY29uc3QgYXJyb3dFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1hcnJvdycpO1xyXG4gICAgY29uc3QgYXJyb3dEaW0gPSBhcnJvd0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgYXJyb3dXaWR0aCA9IGFycm93RGltLndpZHRoO1xyXG4gICAgY29uc3QgYXJyb3dIZWlnaHQgPSBhcnJvd0RpbS5oZWlnaHQ7XHJcbiAgICBpZiAodGFyZ2V0RGltID09IG51bGwpIHtcclxuICAgICAgICBhcnJvd0VsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcnJvd0NTUyA9IHtcclxuICAgICAgICB0b3A6IHRhcmdldFRvcCArIHRhcmdldEhlaWdodCxcclxuICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0ICsgdGFyZ2V0V2lkdGggLyAyIC0gYXJyb3dXaWR0aCAvIDJcclxuICAgIH07XHJcbiAgICBjb25zdCBwb3BvdmVyQ1NTID0ge1xyXG4gICAgICAgIHRvcDogdGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0ICsgKGFycm93SGVpZ2h0IC0gMSksXHJcbiAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCArIHRhcmdldFdpZHRoIC8gMiAtIGNvbnRlbnRXaWR0aCAvIDJcclxuICAgIH07XHJcbiAgICAvLyBJZiB0aGUgcG9wb3ZlciBsZWZ0IGlzIGxlc3MgdGhhbiB0aGUgcGFkZGluZyBpdCBpcyBvZmYgc2NyZWVuXHJcbiAgICAvLyB0byB0aGUgbGVmdCBzbyBhZGp1c3QgaXQsIGVsc2UgaWYgdGhlIHdpZHRoIG9mIHRoZSBwb3BvdmVyXHJcbiAgICAvLyBleGNlZWRzIHRoZSBib2R5IHdpZHRoIGl0IGlzIG9mZiBzY3JlZW4gdG8gdGhlIHJpZ2h0IHNvIGFkanVzdFxyXG4gICAgLy9cclxuICAgIGxldCBjaGVja1NhZmVBcmVhTGVmdCA9IGZhbHNlO1xyXG4gICAgbGV0IGNoZWNrU2FmZUFyZWFSaWdodCA9IGZhbHNlO1xyXG4gICAgLy8gSWYgdGhlIHBvcG92ZXIgbGVmdCBpcyBsZXNzIHRoYW4gdGhlIHBhZGRpbmcgaXQgaXMgb2ZmIHNjcmVlblxyXG4gICAgLy8gdG8gdGhlIGxlZnQgc28gYWRqdXN0IGl0LCBlbHNlIGlmIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlclxyXG4gICAgLy8gZXhjZWVkcyB0aGUgYm9keSB3aWR0aCBpdCBpcyBvZmYgc2NyZWVuIHRvIHRoZSByaWdodCBzbyBhZGp1c3RcclxuICAgIC8vIDI1IGlzIGEgcmFuZG9tL2FyYml0cmFyeSBudW1iZXIuIEl0IHNlZW1zIHRvIHdvcmsgZmluZSBmb3IgaW9zMTFcclxuICAgIC8vIGFuZCBpUGhvbmVYLiBJcyBpdCBwZXJmZWN0PyBOby4gRG9lcyBpdCB3b3JrPyBZZXMuXHJcbiAgICBpZiAocG9wb3ZlckNTUy5sZWZ0IDwgUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HICsgMjUpIHtcclxuICAgICAgICBjaGVja1NhZmVBcmVhTGVmdCA9IHRydWU7XHJcbiAgICAgICAgcG9wb3ZlckNTUy5sZWZ0ID0gUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29udGVudFdpZHRoICsgUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HICsgcG9wb3ZlckNTUy5sZWZ0ICsgMjUgPiBib2R5V2lkdGgpIHtcclxuICAgICAgICAvLyBPaywgc28gd2UncmUgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbixcclxuICAgICAgICAvLyBidXQgbm93IHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlJ3JlIHN0aWxsIGEgYml0IGZ1cnRoZXIgcmlnaHRcclxuICAgICAgICAvLyBjdXMuLi4ubm90Y2h1cmFsbHkuLi4gQWdhaW4sIDI1IGlzIHJhbmRvbS4gSXQgd29ya3MgdGhvXHJcbiAgICAgICAgY2hlY2tTYWZlQXJlYVJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBwb3BvdmVyQ1NTLmxlZnQgPSBib2R5V2lkdGggLSBjb250ZW50V2lkdGggLSBQT1BPVkVSX0lPU19CT0RZX1BBRERJTkc7XHJcbiAgICAgICAgb3JpZ2luWCA9ICdyaWdodCc7XHJcbiAgICB9XHJcbiAgICAvLyBtYWtlIGl0IHBvcCB1cCBpZiB0aGVyZSdzIHJvb20gYWJvdmVcclxuICAgIGlmICh0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQgKyBjb250ZW50SGVpZ2h0ID4gYm9keUhlaWdodCAmJiB0YXJnZXRUb3AgLSBjb250ZW50SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgIGFycm93Q1NTLnRvcCA9IHRhcmdldFRvcCAtIChhcnJvd0hlaWdodCArIDEpO1xyXG4gICAgICAgIHBvcG92ZXJDU1MudG9wID0gdGFyZ2V0VG9wIC0gY29udGVudEhlaWdodCAtIChhcnJvd0hlaWdodCAtIDEpO1xyXG4gICAgICAgIGJhc2VFbC5jbGFzc05hbWUgPSBiYXNlRWwuY2xhc3NOYW1lICsgJyBwb3BvdmVyLWJvdHRvbSc7XHJcbiAgICAgICAgb3JpZ2luWSA9ICdib3R0b20nO1xyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzbid0IHJvb20gZm9yIGl0IHRvIHBvcCB1cCBhYm92ZSB0aGUgdGFyZ2V0IGN1dCBpdCBvZmZcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldFRvcCArIHRhcmdldEhlaWdodCArIGNvbnRlbnRIZWlnaHQgPiBib2R5SGVpZ2h0KSB7XHJcbiAgICAgICAgY29udGVudEVsLnN0eWxlLmJvdHRvbSA9IFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyArICclJztcclxuICAgIH1cclxuICAgIGFycm93RWwuc3R5bGUudG9wID0gYXJyb3dDU1MudG9wICsgJ3B4JztcclxuICAgIGFycm93RWwuc3R5bGUubGVmdCA9IGFycm93Q1NTLmxlZnQgKyAncHgnO1xyXG4gICAgY29udGVudEVsLnN0eWxlLnRvcCA9IHBvcG92ZXJDU1MudG9wICsgJ3B4JztcclxuICAgIGNvbnRlbnRFbC5zdHlsZS5sZWZ0ID0gcG9wb3ZlckNTUy5sZWZ0ICsgJ3B4JztcclxuICAgIGlmIChjaGVja1NhZmVBcmVhTGVmdCkge1xyXG4gICAgICAgIGNvbnRlbnRFbC5zdHlsZS5sZWZ0ID0gYGNhbGMoJHtwb3BvdmVyQ1NTLmxlZnR9cHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkpYDtcclxuICAgIH1cclxuICAgIGlmIChjaGVja1NhZmVBcmVhUmlnaHQpIHtcclxuICAgICAgICBjb250ZW50RWwuc3R5bGUubGVmdCA9IGBjYWxjKCR7cG9wb3ZlckNTUy5sZWZ0fXB4IC0gdmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSlgO1xyXG4gICAgfVxyXG4gICAgY29udGVudEVsLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IG9yaWdpblkgKyAnICcgKyBvcmlnaW5YO1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjA4KTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UnKVxyXG4gICAgICAgIC5kdXJhdGlvbigxMDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcclxuY29uc3QgUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HID0gNTtcblxuLyoqXHJcbiAqIGlPUyBQb3BvdmVyIExlYXZlIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDgsIDApO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnZWFzZScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogTWQgUG9wb3ZlciBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsLCBldikgPT4ge1xyXG4gICAgY29uc3QgUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkcgPSAxMjtcclxuICAgIGNvbnN0IGRvYyA9IGJhc2VFbC5vd25lckRvY3VtZW50O1xyXG4gICAgY29uc3QgaXNSVEwgPSBkb2MuZGlyID09PSAncnRsJztcclxuICAgIGxldCBvcmlnaW5ZID0gJ3RvcCc7XHJcbiAgICBsZXQgb3JpZ2luWCA9IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBjb250ZW50RGltZW50aW9ucyA9IGNvbnRlbnRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGNvbnRlbnREaW1lbnRpb25zLndpZHRoO1xyXG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnREaW1lbnRpb25zLmhlaWdodDtcclxuICAgIGNvbnN0IGJvZHlXaWR0aCA9IGRvYy5kZWZhdWx0Vmlldy5pbm5lcldpZHRoO1xyXG4gICAgY29uc3QgYm9keUhlaWdodCA9IGRvYy5kZWZhdWx0Vmlldy5pbm5lckhlaWdodDtcclxuICAgIC8vIElmIGV2IHdhcyBwYXNzZWQsIHVzZSB0aGF0IGZvciB0YXJnZXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGFyZ2V0RGltID0gZXYgJiYgZXYudGFyZ2V0ICYmIGV2LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIC8vIEFzIHBlciBNRCBzcGVjLCBieSBkZWZhdWx0IHBvc2l0aW9uIHRoZSBwb3BvdmVyIGJlbG93IHRoZSB0YXJnZXQgKHRyaWdnZXIpIGVsZW1lbnRcclxuICAgIGNvbnN0IHRhcmdldFRvcCA9IHRhcmdldERpbSAhPSBudWxsICYmICdib3R0b20nIGluIHRhcmdldERpbVxyXG4gICAgICAgID8gdGFyZ2V0RGltLmJvdHRvbVxyXG4gICAgICAgIDogYm9keUhlaWdodCAvIDIgLSBjb250ZW50SGVpZ2h0IC8gMjtcclxuICAgIGNvbnN0IHRhcmdldExlZnQgPSB0YXJnZXREaW0gIT0gbnVsbCAmJiAnbGVmdCcgaW4gdGFyZ2V0RGltXHJcbiAgICAgICAgPyBpc1JUTFxyXG4gICAgICAgICAgICA/IHRhcmdldERpbS5sZWZ0IC0gY29udGVudFdpZHRoICsgdGFyZ2V0RGltLndpZHRoXHJcbiAgICAgICAgICAgIDogdGFyZ2V0RGltLmxlZnRcclxuICAgICAgICA6IGJvZHlXaWR0aCAvIDIgLSBjb250ZW50V2lkdGggLyAyO1xyXG4gICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gKHRhcmdldERpbSAmJiB0YXJnZXREaW0uaGVpZ2h0KSB8fCAwO1xyXG4gICAgY29uc3QgcG9wb3ZlckNTUyA9IHtcclxuICAgICAgICB0b3A6IHRhcmdldFRvcCxcclxuICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XHJcbiAgICB9O1xyXG4gICAgLy8gSWYgdGhlIHBvcG92ZXIgbGVmdCBpcyBsZXNzIHRoYW4gdGhlIHBhZGRpbmcgaXQgaXMgb2ZmIHNjcmVlblxyXG4gICAgLy8gdG8gdGhlIGxlZnQgc28gYWRqdXN0IGl0LCBlbHNlIGlmIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlclxyXG4gICAgLy8gZXhjZWVkcyB0aGUgYm9keSB3aWR0aCBpdCBpcyBvZmYgc2NyZWVuIHRvIHRoZSByaWdodCBzbyBhZGp1c3RcclxuICAgIGlmIChwb3BvdmVyQ1NTLmxlZnQgPCBQT1BPVkVSX01EX0JPRFlfUEFERElORykge1xyXG4gICAgICAgIHBvcG92ZXJDU1MubGVmdCA9IFBPUE9WRVJfTURfQk9EWV9QQURESU5HO1xyXG4gICAgICAgIC8vIFNhbWUgb3JpZ2luIGluIHRoaXMgY2FzZSBmb3IgYm90aCBMVFIgJiBSVExcclxuICAgICAgICAvLyBOb3RlOiBpbiBMVFIsIG9yaWdpblggaXMgYWxyZWFkeSAnbGVmdCdcclxuICAgICAgICBvcmlnaW5YID0gJ2xlZnQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29udGVudFdpZHRoICsgUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkcgKyBwb3BvdmVyQ1NTLmxlZnQgPlxyXG4gICAgICAgIGJvZHlXaWR0aCkge1xyXG4gICAgICAgIHBvcG92ZXJDU1MubGVmdCA9IGJvZHlXaWR0aCAtIGNvbnRlbnRXaWR0aCAtIFBPUE9WRVJfTURfQk9EWV9QQURESU5HO1xyXG4gICAgICAgIC8vIFNhbWUgb3JpZ2luIGluIHRoaXMgY2FzZSBmb3IgYm90aCBMVFIgJiBSVExcclxuICAgICAgICAvLyBOb3RlOiBpbiBSVEwsIG9yaWdpblggaXMgYWxyZWFkeSAncmlnaHQnXHJcbiAgICAgICAgb3JpZ2luWCA9ICdyaWdodCc7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgcG9wb3ZlciB3aGVuIHBvcHBlZCBkb3duIHN0cmV0Y2hlcyBwYXN0IGJvdHRvbSBvZiBzY3JlZW4sXHJcbiAgICAvLyBtYWtlIGl0IHBvcCB1cCBpZiB0aGVyZSdzIHJvb20gYWJvdmVcclxuICAgIGlmICh0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQgKyBjb250ZW50SGVpZ2h0ID4gYm9keUhlaWdodCAmJlxyXG4gICAgICAgIHRhcmdldFRvcCAtIGNvbnRlbnRIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgcG9wb3ZlckNTUy50b3AgPSB0YXJnZXRUb3AgLSBjb250ZW50SGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0O1xyXG4gICAgICAgIGJhc2VFbC5jbGFzc05hbWUgPSBiYXNlRWwuY2xhc3NOYW1lICsgJyBwb3BvdmVyLWJvdHRvbSc7XHJcbiAgICAgICAgb3JpZ2luWSA9ICdib3R0b20nO1xyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzbid0IHJvb20gZm9yIGl0IHRvIHBvcCB1cCBhYm92ZSB0aGUgdGFyZ2V0IGN1dCBpdCBvZmZcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldFRvcCArIHRhcmdldEhlaWdodCArIGNvbnRlbnRIZWlnaHQgPiBib2R5SGVpZ2h0KSB7XHJcbiAgICAgICAgY29udGVudEVsLnN0eWxlLmJvdHRvbSA9IFBPUE9WRVJfTURfQk9EWV9QQURESU5HICsgJ3B4JztcclxuICAgIH1cclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB2aWV3cG9ydEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMzIpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xyXG4gICAgY29udGVudEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGNvbnRlbnRFbClcclxuICAgICAgICAuYmVmb3JlU3R5bGVzKHtcclxuICAgICAgICAndG9wJzogYCR7cG9wb3ZlckNTUy50b3B9cHhgLFxyXG4gICAgICAgICdsZWZ0JzogYCR7cG9wb3ZlckNTUy5sZWZ0fXB4YCxcclxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6IGAke29yaWdpbll9ICR7b3JpZ2luWH1gXHJcbiAgICB9KVxyXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICdzY2FsZSgwLjAwMSknLCAnc2NhbGUoMSknKTtcclxuICAgIHZpZXdwb3J0QW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLXZpZXdwb3J0JykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uLCBjb250ZW50QW5pbWF0aW9uLCB2aWV3cG9ydEFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogTWQgUG9wb3ZlciBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IG1kTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMzIsIDApO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnZWFzZScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG5jb25zdCBQb3BvdmVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcG9wb3ZlciB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGJhY2tkcm9wIHdpbGwgYmUgZGlzcGxheWVkIGJlaGluZCB0aGUgcG9wb3Zlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcG9wb3ZlciB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25MaWZlY3ljbGUgPSAobW9kYWxFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLnVzZXJzRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBMSUZFQ1lDTEVfTUFQW21vZGFsRXZlbnQudHlwZV07XG4gICAgICAgICAgICBpZiAoZWwgJiYgbmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IG1vZGFsRXZlbnQuZGV0YWlsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByZXBhcmVPdmVybGF5KHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBvcG92ZXJEaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBvcG92ZXJXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICAgICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgcG9wb3ZlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJlc2VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1jb250ZW50Jyk7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRhaW5lciBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbXBvbmVudFByb3BzKSwgeyBwb3BvdmVyOiB0aGlzLmVsIH0pO1xuICAgICAgICB0aGlzLnVzZXJzRWxlbWVudCA9IGF3YWl0IGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBjb250YWluZXIsIHRoaXMuY29tcG9uZW50LCBbJ3BvcG92ZXItdmlld3BvcnQnLCB0aGlzLmVsWydzLXNjJ11dLCBkYXRhKTtcbiAgICAgICAgYXdhaXQgZGVlcFJlYWR5KHRoaXMudXNlcnNFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHByZXNlbnQodGhpcywgJ3BvcG92ZXJFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uLCB0aGlzLmV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgcG9wb3ZlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgcG9wb3Zlci4gRm9yIGV4YW1wbGUsICdjYW5jZWwnIG9yICdiYWNrZHJvcCcuXG4gICAgICovXG4gICAgYXN5bmMgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZERpc21pc3MgPSBhd2FpdCBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdwb3BvdmVyTGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbiwgdGhpcy5ldmVudCk7XG4gICAgICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICAgICAgICBhd2FpdCBkZXRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgdGhpcy51c2Vyc0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaG91bGREaXNtaXNzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBvcG92ZXIgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgb25EaWREaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblBvcG92ZXJEaWREaXNtaXNzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcG9wb3ZlciB3aWxsIGRpc21pc3MuXG4gICAgICovXG4gICAgb25XaWxsRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Qb3BvdmVyV2lsbERpc21pc3MnKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgeyBvbkxpZmVjeWNsZSB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBcIm5vLXJvdXRlclwiOiB0cnVlLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7MjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gLFxuICAgICAgICAgICAgfSwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCB7IFttb2RlXTogdHJ1ZSwgJ3BvcG92ZXItdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50IH0pLCBvbklvblBvcG92ZXJEaWRQcmVzZW50OiBvbkxpZmVjeWNsZSwgb25Jb25Qb3BvdmVyV2lsbFByZXNlbnQ6IG9uTGlmZWN5Y2xlLCBvbklvblBvcG92ZXJXaWxsRGlzbWlzczogb25MaWZlY3ljbGUsIG9uSW9uUG9wb3ZlckRpZERpc21pc3M6IG9uTGlmZWN5Y2xlLCBvbklvbkRpc21pc3M6IHRoaXMub25EaXNtaXNzLCBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHRhcHBhYmxlOiB0aGlzLmJhY2tkcm9wRGlzbWlzcywgdmlzaWJsZTogdGhpcy5zaG93QmFja2Ryb3AgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwb3BvdmVyLXdyYXBwZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicG9wb3Zlci1hcnJvd1wiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicG9wb3Zlci1jb250ZW50XCIgfSkpKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIuc2MtaW9uLXBvcG92ZXItbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7LS1taW4td2lkdGg6MDstLW1pbi1oZWlnaHQ6MDstLW1heC13aWR0aDphdXRvOy0taGVpZ2h0OmF1dG87bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO3otaW5kZXg6MTAwMX0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLXBvcG92ZXItbWQtaHtkaXNwbGF5Om5vbmV9LnBvcG92ZXItd3JhcHBlci5zYy1pb24tcG9wb3Zlci1tZHtvcGFjaXR5OjA7ei1pbmRleDoxMH0ucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtvdmVyZmxvdzphdXRvO3otaW5kZXg6MTB9LnBvcG92ZXItdmlld3BvcnQuc2MtaW9uLXBvcG92ZXItbWR7LS1pb24tc2FmZS1hcmVhLXRvcDowcHg7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDstLWlvbi1zYWZlLWFyZWEtYm90dG9tOjBweDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9LnNjLWlvbi1wb3BvdmVyLW1kLWh7LS13aWR0aDoyNTBweDstLW1heC1oZWlnaHQ6OTAlOy0tYm94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLDAuMTIpfS5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWR7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9W2Rpcj1ydGxdLnNjLWlvbi1wb3BvdmVyLW1kLWggLnBvcG92ZXItY29udGVudC5zYy1pb24tcG9wb3Zlci1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tcG9wb3Zlci1tZC1oIC5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWQsIFtkaXI9cnRsXS5zYy1pb24tcG9wb3Zlci1tZCAucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLW1key13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9LnBvcG92ZXItdmlld3BvcnQuc2MtaW9uLXBvcG92ZXItbWR7LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5Oi4xczt0cmFuc2l0aW9uLWRlbGF5Oi4xc31cIjsgfVxufTtcbmNvbnN0IExJRkVDWUNMRV9NQVAgPSB7XG4gICAgJ2lvblBvcG92ZXJEaWRQcmVzZW50JzogJ2lvblZpZXdEaWRFbnRlcicsXG4gICAgJ2lvblBvcG92ZXJXaWxsUHJlc2VudCc6ICdpb25WaWV3V2lsbEVudGVyJyxcbiAgICAnaW9uUG9wb3ZlcldpbGxEaXNtaXNzJzogJ2lvblZpZXdXaWxsTGVhdmUnLFxuICAgICdpb25Qb3BvdmVyRGlkRGlzbWlzcyc6ICdpb25WaWV3RGlkTGVhdmUnLFxufTtcblxuZXhwb3J0IHsgUG9wb3ZlciBhcyBpb25fcG9wb3ZlciB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==