(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js ***!
  \*********************************************************************/
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
    static get style() { return ".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY4MjZmMmY2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW9uLXBvcG92ZXItaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNEOzs7Ozs7Ozs7Ozs7O0FDakN0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQytGOztBQUVuSixxQ0FBcUMscUxBQXNDO0FBQzNFLG9DQUFvQyxtTEFBcUM7QUFDekU7QUFDQTtBQUNBLFFBQVEsMkRBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrS0FBNkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBb0I7QUFDN0MsMEJBQTBCLHdEQUFvQjtBQUM5QztBQUNBO0FBQ0EsMEJBQTBCLHdEQUFtQjtBQUM3Qyx5QkFBeUIsd0RBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1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NkJBQTZCLDZCQUE2Qiw2QkFBNkIscUNBQXFDLDZCQUE2QixjQUFjLFdBQVcscUNBQXFDLHdCQUF3QiwwQkFBMEIsMkJBQTJCLHlCQUF5QixzQkFBc0IsY0FBYyxpQkFBaUIsa0JBQWtCLG9DQUFvQyxtQkFBbUIsa0NBQWtDLGNBQWMsa0JBQWtCLFdBQVcsWUFBWSxnQkFBZ0Isd0NBQXdDLFNBQVMsUUFBUSxrQkFBa0Isa0JBQWtCLFdBQVcsWUFBWSxnQ0FBZ0Msd0JBQXdCLDZCQUE2QixhQUFhLFdBQVcsc05BQXNOLFdBQVcsWUFBWSxVQUFVLHVFQUF1RSxTQUFTLGFBQWEsNkVBQTZFLFNBQVMsNEVBQTRFLGlLQUFpSyxnRUFBZ0Usa0RBQWtELDJDQUEyQyxFQUFFO0FBQzd2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7QUN4VmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiMTNcXGNodW5rc1xcMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdHRhY2hDb21wb25lbnQgPSBhc3luYyAoZGVsZWdhdGUsIGNvbnRhaW5lciwgY29tcG9uZW50LCBjc3NDbGFzc2VzLCBjb21wb25lbnRQcm9wcykgPT4ge1xyXG4gICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmF0dGFjaFZpZXdUb0RvbShjb250YWluZXIsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIGNzc0NsYXNzZXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnQgIT09ICdzdHJpbmcnICYmICEoY29tcG9uZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmcmFtZXdvcmsgZGVsZWdhdGUgaXMgbWlzc2luZycpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWwgPSAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgPyBjb250YWluZXIub3duZXJEb2N1bWVudCAmJiBjb250YWluZXIub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudClcclxuICAgICAgICA6IGNvbXBvbmVudDtcclxuICAgIGlmIChjc3NDbGFzc2VzKSB7XHJcbiAgICAgICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcG9uZW50UHJvcHMpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsLCBjb21wb25lbnRQcm9wcyk7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgaWYgKGVsLmNvbXBvbmVudE9uUmVhZHkpIHtcclxuICAgICAgICBhd2FpdCBlbC5jb21wb25lbnRPblJlYWR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbmNvbnN0IGRldGFjaENvbXBvbmVudCA9IChkZWxlZ2F0ZSwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUucmVtb3ZlVmlld0Zyb21Eb20oY29udGFpbmVyLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufTtcblxuZXhwb3J0IHsgYXR0YWNoQ29tcG9uZW50IGFzIGEsIGRldGFjaENvbXBvbmVudCBhcyBkIH07XG4iLCJpbXBvcnQgeyB3IGFzIHdyaXRlVGFzayB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgeyBiIGFzIExJRkVDWUNMRV9XSUxMX0xFQVZFLCBMIGFzIExJRkVDWUNMRV9XSUxMX0VOVEVSLCBhIGFzIExJRkVDWUNMRV9ESURfRU5URVIsIGMgYXMgTElGRUNZQ0xFX0RJRF9MRUFWRSB9IGZyb20gJy4vY29uc3RhbnRzLTNjM2UxMDk5LmpzJztcblxuY29uc3QgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiA9ICgpID0+IGltcG9ydCgnLi9pb3MudHJhbnNpdGlvbi0wNzFiZDQyMS5qcycpO1xyXG5jb25zdCBtZFRyYW5zaXRpb25BbmltYXRpb24gPSAoKSA9PiBpbXBvcnQoJy4vbWQudHJhbnNpdGlvbi0xNWE4MWIwOC5qcycpO1xyXG5jb25zdCB0cmFuc2l0aW9uID0gKG9wdHMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd3JpdGVUYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgYmVmb3JlVHJhbnNpdGlvbihvcHRzKTtcclxuICAgICAgICAgICAgcnVuVHJhbnNpdGlvbihvcHRzKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zaXRpb24ob3B0cyk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBiZWZvcmVUcmFuc2l0aW9uID0gKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XHJcbiAgICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcclxuICAgIHNldFpJbmRleChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMuZGlyZWN0aW9uKTtcclxuICAgIGlmIChvcHRzLnNob3dHb0JhY2spIHtcclxuICAgICAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5hZGQoJ2Nhbi1nby1iYWNrJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhbi1nby1iYWNrJyk7XHJcbiAgICB9XHJcbiAgICBzZXRQYWdlSGlkZGVuKGVudGVyaW5nRWwsIGZhbHNlKTtcclxuICAgIGlmIChsZWF2aW5nRWwpIHtcclxuICAgICAgICBzZXRQYWdlSGlkZGVuKGxlYXZpbmdFbCwgZmFsc2UpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBydW5UcmFuc2l0aW9uID0gYXN5bmMgKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSBhd2FpdCBnZXRBbmltYXRpb25CdWlsZGVyKG9wdHMpO1xyXG4gICAgY29uc3QgYW5pID0gKGFuaW1hdGlvbkJ1aWxkZXIpXHJcbiAgICAgICAgPyBhbmltYXRpb24oYW5pbWF0aW9uQnVpbGRlciwgb3B0cylcclxuICAgICAgICA6IG5vQW5pbWF0aW9uKG9wdHMpOyAvLyBmYXN0IHBhdGggZm9yIG5vIGFuaW1hdGlvblxyXG4gICAgcmV0dXJuIGFuaTtcclxufTtcclxuY29uc3QgYWZ0ZXJUcmFuc2l0aW9uID0gKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XHJcbiAgICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcclxuICAgIGVudGVyaW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XHJcbiAgICBpZiAobGVhdmluZ0VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZWF2aW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGdldEFuaW1hdGlvbkJ1aWxkZXIgPSBhc3luYyAob3B0cykgPT4ge1xyXG4gICAgaWYgKCFvcHRzLmxlYXZpbmdFbCB8fCAhb3B0cy5hbmltYXRlZCB8fCBvcHRzLmR1cmF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChvcHRzLmFuaW1hdGlvbkJ1aWxkZXIpIHtcclxuICAgICAgICByZXR1cm4gb3B0cy5hbmltYXRpb25CdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0QW5pbWF0aW9uID0gKG9wdHMubW9kZSA9PT0gJ2lvcycpXHJcbiAgICAgICAgPyAoYXdhaXQgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5pb3NUcmFuc2l0aW9uQW5pbWF0aW9uXHJcbiAgICAgICAgOiAoYXdhaXQgbWRUcmFuc2l0aW9uQW5pbWF0aW9uKCkpLm1kVHJhbnNpdGlvbkFuaW1hdGlvbjtcclxuICAgIHJldHVybiBnZXRBbmltYXRpb247XHJcbn07XHJcbmNvbnN0IGFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb25CdWlsZGVyLCBvcHRzKSA9PiB7XHJcbiAgICBhd2FpdCB3YWl0Rm9yUmVhZHkob3B0cywgdHJ1ZSk7XHJcbiAgICBsZXQgdHJhbnM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydCgnLi9pbmRleC02OWMzNzg4NS5qcycpO1xyXG4gICAgICAgIHRyYW5zID0gYXdhaXQgbW9kLmNyZWF0ZShhbmltYXRpb25CdWlsZGVyLCBvcHRzLmJhc2VFbCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdHJhbnMgPSBhbmltYXRpb25CdWlsZGVyKG9wdHMuYmFzZUVsLCBvcHRzKTtcclxuICAgIH1cclxuICAgIGZpcmVXaWxsRXZlbnRzKG9wdHMuZW50ZXJpbmdFbCwgb3B0cy5sZWF2aW5nRWwpO1xyXG4gICAgY29uc3QgZGlkQ29tcGxldGUgPSBhd2FpdCBwbGF5VHJhbnNpdGlvbih0cmFucywgb3B0cyk7XHJcbiAgICBpZiAob3B0cy5wcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgb3B0cy5wcm9ncmVzc0NhbGxiYWNrKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlkQ29tcGxldGUpIHtcclxuICAgICAgICBmaXJlRGlkRXZlbnRzKG9wdHMuZW50ZXJpbmdFbCwgb3B0cy5sZWF2aW5nRWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYXNDb21wbGV0ZWQ6IGRpZENvbXBsZXRlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogdHJhbnNcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IG5vQW5pbWF0aW9uID0gYXN5bmMgKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XHJcbiAgICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcclxuICAgIGF3YWl0IHdhaXRGb3JSZWFkeShvcHRzLCBmYWxzZSk7XHJcbiAgICBmaXJlV2lsbEV2ZW50cyhlbnRlcmluZ0VsLCBsZWF2aW5nRWwpO1xyXG4gICAgZmlyZURpZEV2ZW50cyhlbnRlcmluZ0VsLCBsZWF2aW5nRWwpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoYXNDb21wbGV0ZWQ6IHRydWVcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IHdhaXRGb3JSZWFkeSA9IGFzeW5jIChvcHRzLCBkZWZhdWx0RGVlcCkgPT4ge1xyXG4gICAgY29uc3QgZGVlcCA9IG9wdHMuZGVlcFdhaXQgIT09IHVuZGVmaW5lZCA/IG9wdHMuZGVlcFdhaXQgOiBkZWZhdWx0RGVlcDtcclxuICAgIGNvbnN0IHByb21pc2VzID0gZGVlcCA/IFtcclxuICAgICAgICBkZWVwUmVhZHkob3B0cy5lbnRlcmluZ0VsKSxcclxuICAgICAgICBkZWVwUmVhZHkob3B0cy5sZWF2aW5nRWwpLFxyXG4gICAgXSA6IFtcclxuICAgICAgICBzaGFsbG93UmVhZHkob3B0cy5lbnRlcmluZ0VsKSxcclxuICAgICAgICBzaGFsbG93UmVhZHkob3B0cy5sZWF2aW5nRWwpLFxyXG4gICAgXTtcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIGF3YWl0IG5vdGlmeVZpZXdSZWFkeShvcHRzLnZpZXdJc1JlYWR5LCBvcHRzLmVudGVyaW5nRWwpO1xyXG59O1xyXG5jb25zdCBub3RpZnlWaWV3UmVhZHkgPSBhc3luYyAodmlld0lzUmVhZHksIGVudGVyaW5nRWwpID0+IHtcclxuICAgIGlmICh2aWV3SXNSZWFkeSkge1xyXG4gICAgICAgIGF3YWl0IHZpZXdJc1JlYWR5KGVudGVyaW5nRWwpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBwbGF5VHJhbnNpdGlvbiA9ICh0cmFucywgb3B0cykgPT4ge1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NDYWxsYmFjayA9IG9wdHMucHJvZ3Jlc3NDYWxsYmFjaztcclxuICAgIC8vIFRPRE86IFJlbW92ZSBBbmltYXRpb25CdWlsZGVyXHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgdHJhbnMub25GaW5pc2goKGN1cnJlbnRTdGVwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFN0ZXAgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnJlbnRTdGVwID09PSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0cmFucy5oYXNDb21wbGV0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cmFucy5oYXNDb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvb2wsIGxldCdzIGRvIHRoaXMsIHN0YXJ0IHRoZSB0cmFuc2l0aW9uXHJcbiAgICBpZiAocHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSBzd2lwZSB0byBnbyBiYWNrLCBqdXN0IGdldCB0aGUgdHJhbnNpdGlvbiBwcm9ncmVzcyByZWFkeVxyXG4gICAgICAgIC8vIGtpY2sgb2ZmIHRoZSBzd2lwZSBhbmltYXRpb24gc3RhcnRcclxuICAgICAgICB0cmFucy5wcm9ncmVzc1N0YXJ0KHRydWUpO1xyXG4gICAgICAgIHByb2dyZXNzQ2FsbGJhY2sodHJhbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gb25seSB0aGUgdG9wIGxldmVsIHRyYW5zaXRpb24gc2hvdWxkIGFjdHVhbGx5IHN0YXJ0IFwicGxheVwiXHJcbiAgICAgICAgLy8ga2ljayBpdCBvZmYgYW5kIGxldCBpdCBwbGF5IHRocm91Z2hcclxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIHRyYW5zLnBsYXkoKTtcclxuICAgIH1cclxuICAgIC8vIGNyZWF0ZSBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBhbmltYXRpb24gaXMgZG9uZVxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbn07XHJcbmNvbnN0IGZpcmVXaWxsRXZlbnRzID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCkgPT4ge1xyXG4gICAgbGlmZWN5Y2xlKGxlYXZpbmdFbCwgTElGRUNZQ0xFX1dJTExfTEVBVkUpO1xyXG4gICAgbGlmZWN5Y2xlKGVudGVyaW5nRWwsIExJRkVDWUNMRV9XSUxMX0VOVEVSKTtcclxufTtcclxuY29uc3QgZmlyZURpZEV2ZW50cyA9IChlbnRlcmluZ0VsLCBsZWF2aW5nRWwpID0+IHtcclxuICAgIGxpZmVjeWNsZShlbnRlcmluZ0VsLCBMSUZFQ1lDTEVfRElEX0VOVEVSKTtcclxuICAgIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9ESURfTEVBVkUpO1xyXG59O1xyXG5jb25zdCBsaWZlY3ljbGUgPSAoZWwsIGV2ZW50TmFtZSkgPT4ge1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgICAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc2hhbGxvd1JlYWR5ID0gKGVsKSA9PiB7XHJcbiAgICBpZiAoZWwgJiYgZWwuY29tcG9uZW50T25SZWFkeSkge1xyXG4gICAgICAgIHJldHVybiBlbC5jb21wb25lbnRPblJlYWR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn07XHJcbmNvbnN0IGRlZXBSZWFkeSA9IGFzeW5jIChlbCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGVsO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5jb21wb25lbnRPblJlYWR5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlbmNpbEVsID0gYXdhaXQgZWxlbWVudC5jb21wb25lbnRPblJlYWR5KCk7XHJcbiAgICAgICAgICAgIGlmIChzdGVuY2lsRWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikubWFwKGRlZXBSZWFkeSkpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBzZXRQYWdlSGlkZGVuID0gKGVsLCBoaWRkZW4pID0+IHtcclxuICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdpb24tcGFnZS1oaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVsLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1oaWRkZW4nKTtcclxuICAgIH1cclxufTtcclxuY29uc3Qgc2V0WkluZGV4ID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoZW50ZXJpbmdFbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZW50ZXJpbmdFbC5zdHlsZS56SW5kZXggPSAoZGlyZWN0aW9uID09PSAnYmFjaycpXHJcbiAgICAgICAgICAgID8gJzk5J1xyXG4gICAgICAgICAgICA6ICcxMDEnO1xyXG4gICAgfVxyXG4gICAgaWYgKGxlYXZpbmdFbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGVhdmluZ0VsLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBnZXRJb25QYWdlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1wYWdlJykpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IGlvblBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcclxuICAgIGlmIChpb25QYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlvblBhZ2U7XHJcbiAgICB9XHJcbiAgICAvLyBpZGssIHJldHVybiB0aGUgb3JpZ2luYWwgZWxlbWVudCBzbyBhdCBsZWFzdCBzb21ldGhpbmcgYW5pbWF0ZXMgYW5kIHdlIGRvbid0IGhhdmUgYSBudWxsIHBvaW50ZXJcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59O1xuXG5leHBvcnQgeyBkZWVwUmVhZHkgYXMgZCwgZ2V0SW9uUGFnZUVsZW1lbnQgYXMgZywgbGlmZWN5Y2xlIGFzIGwsIHNldFBhZ2VIaWRkZW4gYXMgcywgdHJhbnNpdGlvbiBhcyB0IH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUCwgZCBhcyBwcmVwYXJlT3ZlcmxheSwgZSBhcyBwcmVzZW50LCBmIGFzIGRpc21pc3MsIGcgYXMgZXZlbnRNZXRob2QgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50LCBkIGFzIGRldGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLWMyZTJlMWY0LmpzJztcbmltcG9ydCB7IGQgYXMgZGVlcFJlYWR5IH0gZnJvbSAnLi9pbmRleC02ODI2ZjJmNi5qcyc7XG5cbi8qKlxyXG4gKiBpT1MgUG9wb3ZlciBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gKGJhc2VFbCwgZXYpID0+IHtcclxuICAgIGxldCBvcmlnaW5ZID0gJ3RvcCc7XHJcbiAgICBsZXQgb3JpZ2luWCA9ICdsZWZ0JztcclxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBjb250ZW50RGltZW50aW9ucyA9IGNvbnRlbnRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGNvbnRlbnREaW1lbnRpb25zLndpZHRoO1xyXG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnREaW1lbnRpb25zLmhlaWdodDtcclxuICAgIGNvbnN0IGJvZHlXaWR0aCA9IGJhc2VFbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVyV2lkdGg7XHJcbiAgICBjb25zdCBib2R5SGVpZ2h0ID0gYmFzZUVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQ7XHJcbiAgICAvLyBJZiBldiB3YXMgcGFzc2VkLCB1c2UgdGhhdCBmb3IgdGFyZ2V0IGVsZW1lbnRcclxuICAgIGNvbnN0IHRhcmdldERpbSA9IGV2ICYmIGV2LnRhcmdldCAmJiBldi50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0YXJnZXRUb3AgPSB0YXJnZXREaW0gIT0gbnVsbCAmJiAndG9wJyBpbiB0YXJnZXREaW0gPyB0YXJnZXREaW0udG9wIDogYm9keUhlaWdodCAvIDIgLSBjb250ZW50SGVpZ2h0IC8gMjtcclxuICAgIGNvbnN0IHRhcmdldExlZnQgPSB0YXJnZXREaW0gIT0gbnVsbCAmJiAnbGVmdCcgaW4gdGFyZ2V0RGltID8gdGFyZ2V0RGltLmxlZnQgOiBib2R5V2lkdGggLyAyO1xyXG4gICAgY29uc3QgdGFyZ2V0V2lkdGggPSAodGFyZ2V0RGltICYmIHRhcmdldERpbS53aWR0aCkgfHwgMDtcclxuICAgIGNvbnN0IHRhcmdldEhlaWdodCA9ICh0YXJnZXREaW0gJiYgdGFyZ2V0RGltLmhlaWdodCkgfHwgMDtcclxuICAgIGNvbnN0IGFycm93RWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItYXJyb3cnKTtcclxuICAgIGNvbnN0IGFycm93RGltID0gYXJyb3dFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGFycm93V2lkdGggPSBhcnJvd0RpbS53aWR0aDtcclxuICAgIGNvbnN0IGFycm93SGVpZ2h0ID0gYXJyb3dEaW0uaGVpZ2h0O1xyXG4gICAgaWYgKHRhcmdldERpbSA9PSBudWxsKSB7XHJcbiAgICAgICAgYXJyb3dFbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyb3dDU1MgPSB7XHJcbiAgICAgICAgdG9wOiB0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQsXHJcbiAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCArIHRhcmdldFdpZHRoIC8gMiAtIGFycm93V2lkdGggLyAyXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcG9wb3ZlckNTUyA9IHtcclxuICAgICAgICB0b3A6IHRhcmdldFRvcCArIHRhcmdldEhlaWdodCArIChhcnJvd0hlaWdodCAtIDEpLFxyXG4gICAgICAgIGxlZnQ6IHRhcmdldExlZnQgKyB0YXJnZXRXaWR0aCAvIDIgLSBjb250ZW50V2lkdGggLyAyXHJcbiAgICB9O1xyXG4gICAgLy8gSWYgdGhlIHBvcG92ZXIgbGVmdCBpcyBsZXNzIHRoYW4gdGhlIHBhZGRpbmcgaXQgaXMgb2ZmIHNjcmVlblxyXG4gICAgLy8gdG8gdGhlIGxlZnQgc28gYWRqdXN0IGl0LCBlbHNlIGlmIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlclxyXG4gICAgLy8gZXhjZWVkcyB0aGUgYm9keSB3aWR0aCBpdCBpcyBvZmYgc2NyZWVuIHRvIHRoZSByaWdodCBzbyBhZGp1c3RcclxuICAgIC8vXHJcbiAgICBsZXQgY2hlY2tTYWZlQXJlYUxlZnQgPSBmYWxzZTtcclxuICAgIGxldCBjaGVja1NhZmVBcmVhUmlnaHQgPSBmYWxzZTtcclxuICAgIC8vIElmIHRoZSBwb3BvdmVyIGxlZnQgaXMgbGVzcyB0aGFuIHRoZSBwYWRkaW5nIGl0IGlzIG9mZiBzY3JlZW5cclxuICAgIC8vIHRvIHRoZSBsZWZ0IHNvIGFkanVzdCBpdCwgZWxzZSBpZiB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXJcclxuICAgIC8vIGV4Y2VlZHMgdGhlIGJvZHkgd2lkdGggaXQgaXMgb2ZmIHNjcmVlbiB0byB0aGUgcmlnaHQgc28gYWRqdXN0XHJcbiAgICAvLyAyNSBpcyBhIHJhbmRvbS9hcmJpdHJhcnkgbnVtYmVyLiBJdCBzZWVtcyB0byB3b3JrIGZpbmUgZm9yIGlvczExXHJcbiAgICAvLyBhbmQgaVBob25lWC4gSXMgaXQgcGVyZmVjdD8gTm8uIERvZXMgaXQgd29yaz8gWWVzLlxyXG4gICAgaWYgKHBvcG92ZXJDU1MubGVmdCA8IFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyArIDI1KSB7XHJcbiAgICAgICAgY2hlY2tTYWZlQXJlYUxlZnQgPSB0cnVlO1xyXG4gICAgICAgIHBvcG92ZXJDU1MubGVmdCA9IFBPUE9WRVJfSU9TX0JPRFlfUEFERElORztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbnRlbnRXaWR0aCArIFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyArIHBvcG92ZXJDU1MubGVmdCArIDI1ID4gYm9keVdpZHRoKSB7XHJcbiAgICAgICAgLy8gT2ssIHNvIHdlJ3JlIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW4sXHJcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSdyZSBzdGlsbCBhIGJpdCBmdXJ0aGVyIHJpZ2h0XHJcbiAgICAgICAgLy8gY3VzLi4uLm5vdGNodXJhbGx5Li4uIEFnYWluLCAyNSBpcyByYW5kb20uIEl0IHdvcmtzIHRob1xyXG4gICAgICAgIGNoZWNrU2FmZUFyZWFSaWdodCA9IHRydWU7XHJcbiAgICAgICAgcG9wb3ZlckNTUy5sZWZ0ID0gYm9keVdpZHRoIC0gY29udGVudFdpZHRoIC0gUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HO1xyXG4gICAgICAgIG9yaWdpblggPSAncmlnaHQnO1xyXG4gICAgfVxyXG4gICAgLy8gbWFrZSBpdCBwb3AgdXAgaWYgdGhlcmUncyByb29tIGFib3ZlXHJcbiAgICBpZiAodGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0ICsgY29udGVudEhlaWdodCA+IGJvZHlIZWlnaHQgJiYgdGFyZ2V0VG9wIC0gY29udGVudEhlaWdodCA+IDApIHtcclxuICAgICAgICBhcnJvd0NTUy50b3AgPSB0YXJnZXRUb3AgLSAoYXJyb3dIZWlnaHQgKyAxKTtcclxuICAgICAgICBwb3BvdmVyQ1NTLnRvcCA9IHRhcmdldFRvcCAtIGNvbnRlbnRIZWlnaHQgLSAoYXJyb3dIZWlnaHQgLSAxKTtcclxuICAgICAgICBiYXNlRWwuY2xhc3NOYW1lID0gYmFzZUVsLmNsYXNzTmFtZSArICcgcG9wb3Zlci1ib3R0b20nO1xyXG4gICAgICAgIG9yaWdpblkgPSAnYm90dG9tJztcclxuICAgICAgICAvLyBJZiB0aGVyZSBpc24ndCByb29tIGZvciBpdCB0byBwb3AgdXAgYWJvdmUgdGhlIHRhcmdldCBjdXQgaXQgb2ZmXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQgKyBjb250ZW50SGVpZ2h0ID4gYm9keUhlaWdodCkge1xyXG4gICAgICAgIGNvbnRlbnRFbC5zdHlsZS5ib3R0b20gPSBQT1BPVkVSX0lPU19CT0RZX1BBRERJTkcgKyAnJSc7XHJcbiAgICB9XHJcbiAgICBhcnJvd0VsLnN0eWxlLnRvcCA9IGFycm93Q1NTLnRvcCArICdweCc7XHJcbiAgICBhcnJvd0VsLnN0eWxlLmxlZnQgPSBhcnJvd0NTUy5sZWZ0ICsgJ3B4JztcclxuICAgIGNvbnRlbnRFbC5zdHlsZS50b3AgPSBwb3BvdmVyQ1NTLnRvcCArICdweCc7XHJcbiAgICBjb250ZW50RWwuc3R5bGUubGVmdCA9IHBvcG92ZXJDU1MubGVmdCArICdweCc7XHJcbiAgICBpZiAoY2hlY2tTYWZlQXJlYUxlZnQpIHtcclxuICAgICAgICBjb250ZW50RWwuc3R5bGUubGVmdCA9IGBjYWxjKCR7cG9wb3ZlckNTUy5sZWZ0fXB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpKWA7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hlY2tTYWZlQXJlYVJpZ2h0KSB7XHJcbiAgICAgICAgY29udGVudEVsLnN0eWxlLmxlZnQgPSBgY2FsYygke3BvcG92ZXJDU1MubGVmdH1weCAtIHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkpYDtcclxuICAgIH1cclxuICAgIGNvbnRlbnRFbC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBvcmlnaW5ZICsgJyAnICsgb3JpZ2luWDtcclxuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4wOCk7XHJcbiAgICB3cmFwcGVyQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLXdyYXBwZXInKSlcclxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XHJcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcclxuICAgICAgICAuZWFzaW5nKCdlYXNlJylcclxuICAgICAgICAuZHVyYXRpb24oMTAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XHJcbmNvbnN0IFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyA9IDU7XG5cbi8qKlxyXG4gKiBpT1MgUG9wb3ZlciBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjA4LCAwKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UnKVxyXG4gICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1kIFBvcG92ZXIgRW50ZXIgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZEVudGVyQW5pbWF0aW9uID0gKGJhc2VFbCwgZXYpID0+IHtcclxuICAgIGNvbnN0IFBPUE9WRVJfTURfQk9EWV9QQURESU5HID0gMTI7XHJcbiAgICBjb25zdCBkb2MgPSBiYXNlRWwub3duZXJEb2N1bWVudDtcclxuICAgIGNvbnN0IGlzUlRMID0gZG9jLmRpciA9PT0gJ3J0bCc7XHJcbiAgICBsZXQgb3JpZ2luWSA9ICd0b3AnO1xyXG4gICAgbGV0IG9yaWdpblggPSBpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICBjb25zdCBjb250ZW50RWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItY29udGVudCcpO1xyXG4gICAgY29uc3QgY29udGVudERpbWVudGlvbnMgPSBjb250ZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSBjb250ZW50RGltZW50aW9ucy53aWR0aDtcclxuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50RGltZW50aW9ucy5oZWlnaHQ7XHJcbiAgICBjb25zdCBib2R5V2lkdGggPSBkb2MuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aDtcclxuICAgIGNvbnN0IGJvZHlIZWlnaHQgPSBkb2MuZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQ7XHJcbiAgICAvLyBJZiBldiB3YXMgcGFzc2VkLCB1c2UgdGhhdCBmb3IgdGFyZ2V0IGVsZW1lbnRcclxuICAgIGNvbnN0IHRhcmdldERpbSA9IGV2ICYmIGV2LnRhcmdldCAmJiBldi50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAvLyBBcyBwZXIgTUQgc3BlYywgYnkgZGVmYXVsdCBwb3NpdGlvbiB0aGUgcG9wb3ZlciBiZWxvdyB0aGUgdGFyZ2V0ICh0cmlnZ2VyKSBlbGVtZW50XHJcbiAgICBjb25zdCB0YXJnZXRUb3AgPSB0YXJnZXREaW0gIT0gbnVsbCAmJiAnYm90dG9tJyBpbiB0YXJnZXREaW1cclxuICAgICAgICA/IHRhcmdldERpbS5ib3R0b21cclxuICAgICAgICA6IGJvZHlIZWlnaHQgLyAyIC0gY29udGVudEhlaWdodCAvIDI7XHJcbiAgICBjb25zdCB0YXJnZXRMZWZ0ID0gdGFyZ2V0RGltICE9IG51bGwgJiYgJ2xlZnQnIGluIHRhcmdldERpbVxyXG4gICAgICAgID8gaXNSVExcclxuICAgICAgICAgICAgPyB0YXJnZXREaW0ubGVmdCAtIGNvbnRlbnRXaWR0aCArIHRhcmdldERpbS53aWR0aFxyXG4gICAgICAgICAgICA6IHRhcmdldERpbS5sZWZ0XHJcbiAgICAgICAgOiBib2R5V2lkdGggLyAyIC0gY29udGVudFdpZHRoIC8gMjtcclxuICAgIGNvbnN0IHRhcmdldEhlaWdodCA9ICh0YXJnZXREaW0gJiYgdGFyZ2V0RGltLmhlaWdodCkgfHwgMDtcclxuICAgIGNvbnN0IHBvcG92ZXJDU1MgPSB7XHJcbiAgICAgICAgdG9wOiB0YXJnZXRUb3AsXHJcbiAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxyXG4gICAgfTtcclxuICAgIC8vIElmIHRoZSBwb3BvdmVyIGxlZnQgaXMgbGVzcyB0aGFuIHRoZSBwYWRkaW5nIGl0IGlzIG9mZiBzY3JlZW5cclxuICAgIC8vIHRvIHRoZSBsZWZ0IHNvIGFkanVzdCBpdCwgZWxzZSBpZiB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXJcclxuICAgIC8vIGV4Y2VlZHMgdGhlIGJvZHkgd2lkdGggaXQgaXMgb2ZmIHNjcmVlbiB0byB0aGUgcmlnaHQgc28gYWRqdXN0XHJcbiAgICBpZiAocG9wb3ZlckNTUy5sZWZ0IDwgUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkcpIHtcclxuICAgICAgICBwb3BvdmVyQ1NTLmxlZnQgPSBQT1BPVkVSX01EX0JPRFlfUEFERElORztcclxuICAgICAgICAvLyBTYW1lIG9yaWdpbiBpbiB0aGlzIGNhc2UgZm9yIGJvdGggTFRSICYgUlRMXHJcbiAgICAgICAgLy8gTm90ZTogaW4gTFRSLCBvcmlnaW5YIGlzIGFscmVhZHkgJ2xlZnQnXHJcbiAgICAgICAgb3JpZ2luWCA9ICdsZWZ0JztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbnRlbnRXaWR0aCArIFBPUE9WRVJfTURfQk9EWV9QQURESU5HICsgcG9wb3ZlckNTUy5sZWZ0ID5cclxuICAgICAgICBib2R5V2lkdGgpIHtcclxuICAgICAgICBwb3BvdmVyQ1NTLmxlZnQgPSBib2R5V2lkdGggLSBjb250ZW50V2lkdGggLSBQT1BPVkVSX01EX0JPRFlfUEFERElORztcclxuICAgICAgICAvLyBTYW1lIG9yaWdpbiBpbiB0aGlzIGNhc2UgZm9yIGJvdGggTFRSICYgUlRMXHJcbiAgICAgICAgLy8gTm90ZTogaW4gUlRMLCBvcmlnaW5YIGlzIGFscmVhZHkgJ3JpZ2h0J1xyXG4gICAgICAgIG9yaWdpblggPSAncmlnaHQnO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHBvcG92ZXIgd2hlbiBwb3BwZWQgZG93biBzdHJldGNoZXMgcGFzdCBib3R0b20gb2Ygc2NyZWVuLFxyXG4gICAgLy8gbWFrZSBpdCBwb3AgdXAgaWYgdGhlcmUncyByb29tIGFib3ZlXHJcbiAgICBpZiAodGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0ICsgY29udGVudEhlaWdodCA+IGJvZHlIZWlnaHQgJiZcclxuICAgICAgICB0YXJnZXRUb3AgLSBjb250ZW50SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgIHBvcG92ZXJDU1MudG9wID0gdGFyZ2V0VG9wIC0gY29udGVudEhlaWdodCAtIHRhcmdldEhlaWdodDtcclxuICAgICAgICBiYXNlRWwuY2xhc3NOYW1lID0gYmFzZUVsLmNsYXNzTmFtZSArICcgcG9wb3Zlci1ib3R0b20nO1xyXG4gICAgICAgIG9yaWdpblkgPSAnYm90dG9tJztcclxuICAgICAgICAvLyBJZiB0aGVyZSBpc24ndCByb29tIGZvciBpdCB0byBwb3AgdXAgYWJvdmUgdGhlIHRhcmdldCBjdXQgaXQgb2ZmXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQgKyBjb250ZW50SGVpZ2h0ID4gYm9keUhlaWdodCkge1xyXG4gICAgICAgIGNvbnRlbnRFbC5zdHlsZS5ib3R0b20gPSBQT1BPVkVSX01EX0JPRFlfUEFERElORyArICdweCc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgY29udGVudEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgdmlld3BvcnRBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMyKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcclxuICAgIGNvbnRlbnRBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChjb250ZW50RWwpXHJcbiAgICAgICAgLmJlZm9yZVN0eWxlcyh7XHJcbiAgICAgICAgJ3RvcCc6IGAke3BvcG92ZXJDU1MudG9wfXB4YCxcclxuICAgICAgICAnbGVmdCc6IGAke3BvcG92ZXJDU1MubGVmdH1weGAsXHJcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBgJHtvcmlnaW5ZfSAke29yaWdpblh9YFxyXG4gICAgfSlcclxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMC4wMDEpJywgJ3NjYWxlKDEpJyk7XHJcbiAgICB2aWV3cG9ydEFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci12aWV3cG9ydCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbiwgY29udGVudEFuaW1hdGlvbiwgdmlld3BvcnRBbmltYXRpb25dKTtcclxufTtcblxuLyoqXHJcbiAqIE1kIFBvcG92ZXIgTGVhdmUgQW5pbWF0aW9uXHJcbiAqL1xyXG5jb25zdCBtZExlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMyLCAwKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UnKVxyXG4gICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcclxufTtcblxuY29uc3QgUG9wb3ZlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgYSBiYWNrZHJvcCB3aWxsIGJlIGRpc3BsYXllZCBiZWhpbmQgdGhlIHBvcG92ZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3BvdmVyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgd2lsbCBhbmltYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uTGlmZWN5Y2xlID0gKG1vZGFsRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy51c2Vyc0VsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gTElGRUNZQ0xFX01BUFttb2RhbEV2ZW50LnR5cGVdO1xuICAgICAgICAgICAgaWYgKGVsICYmIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBtb2RhbEV2ZW50LmRldGFpbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyRGlkUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUG9wb3ZlcldpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyV2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUG9wb3ZlckRpZERpc21pc3NcIiwgNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIHBvcG92ZXIgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIGFzeW5jIHByZXNlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItY29udGVudCcpO1xuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250YWluZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb21wb25lbnRQcm9wcyksIHsgcG9wb3ZlcjogdGhpcy5lbCB9KTtcbiAgICAgICAgdGhpcy51c2Vyc0VsZW1lbnQgPSBhd2FpdCBhdHRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgY29udGFpbmVyLCB0aGlzLmNvbXBvbmVudCwgWydwb3BvdmVyLXZpZXdwb3J0JywgdGhpcy5lbFsncy1zYyddXSwgZGF0YSk7XG4gICAgICAgIGF3YWl0IGRlZXBSZWFkeSh0aGlzLnVzZXJzRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBwcmVzZW50KHRoaXMsICdwb3BvdmVyRW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbiwgdGhpcy5ldmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIHBvcG92ZXIgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIHBvcG92ZXIuIEZvciBleGFtcGxlLCAnY2FuY2VsJyBvciAnYmFja2Ryb3AnLlxuICAgICAqL1xuICAgIGFzeW5jIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgICAgICBjb25zdCBzaG91bGREaXNtaXNzID0gYXdhaXQgZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAncG9wb3ZlckxlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24sIHRoaXMuZXZlbnQpO1xuICAgICAgICBpZiAoc2hvdWxkRGlzbWlzcykge1xuICAgICAgICAgICAgYXdhaXQgZGV0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMudXNlcnNFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hvdWxkRGlzbWlzcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwb3BvdmVyIGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uRGlkRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Qb3BvdmVyRGlkRGlzbWlzcycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBvcG92ZXIgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uV2lsbERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uUG9wb3ZlcldpbGxEaXNtaXNzJyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHsgb25MaWZlY3ljbGUgfSA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgXCJuby1yb3V0ZXJcIjogdHJ1ZSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IGAkezIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YCxcbiAgICAgICAgICAgIH0sIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgeyBbbW9kZV06IHRydWUsICdwb3BvdmVyLXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCB9KSwgb25Jb25Qb3BvdmVyRGlkUHJlc2VudDogb25MaWZlY3ljbGUsIG9uSW9uUG9wb3ZlcldpbGxQcmVzZW50OiBvbkxpZmVjeWNsZSwgb25Jb25Qb3BvdmVyV2lsbERpc21pc3M6IG9uTGlmZWN5Y2xlLCBvbklvblBvcG92ZXJEaWREaXNtaXNzOiBvbkxpZmVjeWNsZSwgb25Jb25EaXNtaXNzOiB0aGlzLm9uRGlzbWlzcywgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MsIHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicG9wb3Zlci13cmFwcGVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBvcG92ZXItYXJyb3dcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBvcG92ZXItY29udGVudFwiIH0pKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiLnNjLWlvbi1wb3BvdmVyLWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTstLW1pbi13aWR0aDowOy0tbWluLWhlaWdodDowOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6YXV0bztsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tcG9wb3Zlci1pb3MtaHtkaXNwbGF5Om5vbmV9LnBvcG92ZXItd3JhcHBlci5zYy1pb24tcG9wb3Zlci1pb3N7b3BhY2l0eTowO3otaW5kZXg6MTB9LnBvcG92ZXItY29udGVudC5zYy1pb24tcG9wb3Zlci1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO292ZXJmbG93OmF1dG87ei1pbmRleDoxMH0ucG9wb3Zlci12aWV3cG9ydC5zYy1pb24tcG9wb3Zlci1pb3N7LS1pb24tc2FmZS1hcmVhLXRvcDowcHg7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDstLWlvbi1zYWZlLWFyZWEtYm90dG9tOjBweDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9LnNjLWlvbi1wb3BvdmVyLWlvcy1oey0td2lkdGg6MjAwcHg7LS1tYXgtaGVpZ2h0OjkwJTstLWJveC1zaGFkb3c6bm9uZX0ucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLWlvc3tib3JkZXItcmFkaXVzOjEwcHh9LnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9ze2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjBweDtoZWlnaHQ6MTBweDtvdmVyZmxvdzpoaWRkZW59LnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVye2xlZnQ6M3B4O3RvcDozcHg7Ym9yZGVyLXJhZGl1czozcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGVudDpcXFwiXFxcIjt6LWluZGV4OjEwfVtkaXI9cnRsXS5zYy1pb24tcG9wb3Zlci1pb3MtaCAucG9wb3Zlci1hcnJvdy5zYy1pb24tcG9wb3Zlci1pb3M6YWZ0ZXIsIFtkaXI9cnRsXSAuc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVyLCBbZGlyPXJ0bF0uc2MtaW9uLXBvcG92ZXItaW9zIC5wb3BvdmVyLWFycm93LnNjLWlvbi1wb3BvdmVyLWlvczphZnRlcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjNweH0ucG9wb3Zlci1ib3R0b20uc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9ze3RvcDphdXRvO2JvdHRvbTotMTBweH0ucG9wb3Zlci1ib3R0b20uc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVye3RvcDotNnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7LnBvcG92ZXItdHJhbnNsdWNlbnQuc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVyLCAucG9wb3Zlci10cmFuc2x1Y2VudC5zYy1pb24tcG9wb3Zlci1pb3MtaCAucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLWlvc3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX19XCI7IH1cbn07XG5jb25zdCBMSUZFQ1lDTEVfTUFQID0ge1xuICAgICdpb25Qb3BvdmVyRGlkUHJlc2VudCc6ICdpb25WaWV3RGlkRW50ZXInLFxuICAgICdpb25Qb3BvdmVyV2lsbFByZXNlbnQnOiAnaW9uVmlld1dpbGxFbnRlcicsXG4gICAgJ2lvblBvcG92ZXJXaWxsRGlzbWlzcyc6ICdpb25WaWV3V2lsbExlYXZlJyxcbiAgICAnaW9uUG9wb3ZlckRpZERpc21pc3MnOiAnaW9uVmlld0RpZExlYXZlJyxcbn07XG5cbmV4cG9ydCB7IFBvcG92ZXIgYXMgaW9uX3BvcG92ZXIgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=