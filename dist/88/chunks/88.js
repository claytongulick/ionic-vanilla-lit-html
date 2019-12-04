(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "../node_modules/@ionic/core/dist/esm/ios.transition-071bd421.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ios.transition-071bd421.js ***!
  \***********************************************************************/
/*! exports provided: iosTransitionAnimation, shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
/* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-6826f2f6.js */ "../node_modules/@ionic/core/dist/esm/index-6826f2f6.js");







const DURATION = 540;
const addSafeArea = (val, side = 'top') => {
    return `calc(${val}px + var(--ion-safe-area-${side}))`;
};
const getClonedElement = (tagName) => {
    return document.querySelector(`${tagName}.ion-cloned-element`);
};
const shadow = (el) => {
    return el.shadowRoot || el;
};
const getLargeTitle = (refEl) => {
    return refEl.querySelector('ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]');
};
const getBackButton = (refEl, backDirection) => {
    const buttonsList = refEl.querySelectorAll('ion-buttons');
    for (const buttons of buttonsList) {
        const parentHeader = buttons.closest('ion-header');
        const activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
        const backButton = buttons.querySelector('ion-back-button');
        const buttonsCollapse = buttons.classList.contains('buttons-collapse');
        if (backButton !== null && ((buttonsCollapse && activeHeader && backDirection) || !buttonsCollapse)) {
            return backButton;
        }
    }
    return null;
};
const createLargeTitleTransition = (rootAnimation, rtl, backDirection, enteringEl, leavingEl) => {
    const enteringBackButton = getBackButton(enteringEl, backDirection);
    const leavingLargeTitle = getLargeTitle(leavingEl);
    const enteringLargeTitle = getLargeTitle(enteringEl);
    const leavingBackButton = getBackButton(leavingEl, backDirection);
    const shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
    const shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
    if (shouldAnimationForward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton);
    }
    else if (shouldAnimationBackward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton);
    }
    return {
        forward: shouldAnimationForward,
        backward: shouldAnimationBackward
    };
};
const animateBackButton = (rootAnimation, rtl, backDirection, backButtonEl) => {
    const backButtonBounds = backButtonEl.getBoundingClientRect();
    const BACK_BUTTON_START_OFFSET = (rtl) ? `calc(100% - ${backButtonBounds.right + 4}px)` : `${backButtonBounds.left - 4}px`;
    const START_TEXT_TRANSLATE = (rtl) ? '7px' : '-7px';
    const END_TEXT_TRANSLATE = (rtl) ? '-4px' : '4px';
    const ICON_TRANSLATE = (rtl) ? '-4px' : '4px';
    const TEXT_ORIGIN_X = (rtl) ? 'right' : 'left';
    const ICON_ORIGIN_X = (rtl) ? 'left' : 'right';
    const FORWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: `translate(${START_TEXT_TRANSLATE}, ${addSafeArea(8)}) scale(2.1)` },
        { offset: 1, opacity: 1, transform: `translate(${END_TEXT_TRANSLATE}, ${addSafeArea(-40)}) scale(1)` }
    ];
    const BACKWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: `translate(${END_TEXT_TRANSLATE}, ${addSafeArea(-40)}) scale(1)` },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: `translate(${START_TEXT_TRANSLATE}, ${addSafeArea(8)}) scale(2.1)` }
    ];
    const TEXT_KEYFRAMES = (backDirection) ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
    const FORWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: `translate3d(${ICON_TRANSLATE}, ${addSafeArea(-35)}, 0) scale(0.6)` },
        { offset: 1, opacity: 1, transform: `translate3d(${ICON_TRANSLATE}, ${addSafeArea(-40)}, 0) scale(1)` }
    ];
    const BACKWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: `translate(${ICON_TRANSLATE}, ${addSafeArea(-40)}) scale(1)` },
        { offset: 0.2, opacity: 0, transform: `translate(${ICON_TRANSLATE}, ${addSafeArea(-35)}) scale(0.6)` },
        { offset: 1, opacity: 0, transform: `translate(${ICON_TRANSLATE}, ${addSafeArea(-35)}) scale(0.6)` }
    ];
    const ICON_KEYFRAMES = (backDirection) ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
    const enteringBackButtonTextAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const enteringBackButtonIconAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const clonedBackButtonEl = getClonedElement('ion-back-button');
    const backButtonTextEl = clonedBackButtonEl.querySelector('.button-text');
    const backButtonIconEl = clonedBackButtonEl.querySelector('ion-icon');
    clonedBackButtonEl.text = backButtonEl.text;
    clonedBackButtonEl.mode = backButtonEl.mode;
    clonedBackButtonEl.icon = backButtonEl.icon;
    clonedBackButtonEl.color = backButtonEl.color;
    clonedBackButtonEl.disabled = backButtonEl.disabled;
    clonedBackButtonEl.style.setProperty('display', 'block');
    clonedBackButtonEl.style.setProperty('position', 'fixed');
    enteringBackButtonIconAnimation.addElement(backButtonIconEl);
    enteringBackButtonTextAnimation.addElement(backButtonTextEl);
    enteringBackButtonTextAnimation
        .beforeStyles({
        'transform-origin': `${TEXT_ORIGIN_X} center`
    })
        .beforeAddWrite(() => {
        backButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
    })
        .afterAddWrite(() => {
        backButtonEl.style.setProperty('display', '');
        clonedBackButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
    })
        .keyframes(TEXT_KEYFRAMES);
    enteringBackButtonIconAnimation
        .beforeStyles({
        'transform-origin': `${ICON_ORIGIN_X} center`
    })
        .keyframes(ICON_KEYFRAMES);
    rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
};
const animateLargeTitle = (rootAnimation, rtl, backDirection, largeTitleEl) => {
    const largeTitleBounds = largeTitleEl.getBoundingClientRect();
    const TITLE_START_OFFSET = (rtl) ? `calc(100% - ${largeTitleBounds.right}px)` : `${largeTitleBounds.left}px`;
    const START_TRANSLATE = (rtl) ? '-18px' : '18px';
    const ORIGIN_X = (rtl) ? 'right' : 'left';
    const BACKWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: `translate(${START_TRANSLATE}, ${addSafeArea(0)}) scale(0.49)` },
        { offset: 0.1, opacity: 0 },
        { offset: 1, opacity: 1, transform: `translate(0, ${addSafeArea(49)}) scale(1)` }
    ];
    const FORWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0.99, transform: `translate(0, ${addSafeArea(49)}) scale(1)` },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: `translate(${START_TRANSLATE}, ${addSafeArea(0)}) scale(0.5)` }
    ];
    const KEYFRAMES = (backDirection) ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
    const clonedTitleEl = getClonedElement('ion-title');
    const clonedLargeTitleAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    clonedTitleEl.innerText = largeTitleEl.innerText;
    clonedTitleEl.size = largeTitleEl.size;
    clonedTitleEl.color = largeTitleEl.color;
    clonedLargeTitleAnimation.addElement(clonedTitleEl);
    clonedLargeTitleAnimation
        .beforeStyles({
        'transform-origin': `${ORIGIN_X} center`,
        'height': '46px',
        'display': '',
        'position': 'relative',
        [ORIGIN_X]: TITLE_START_OFFSET
    })
        .beforeAddWrite(() => {
        largeTitleEl.style.setProperty('display', 'none');
    })
        .afterAddWrite(() => {
        largeTitleEl.style.setProperty('display', '');
        clonedTitleEl.style.setProperty('display', 'none');
    })
        .keyframes(KEYFRAMES);
    rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
const iosTransitionAnimation = (navEl, opts) => {
    try {
        const EASING = 'cubic-bezier(0.32,0.72,0,1)';
        const OPACITY = 'opacity';
        const TRANSFORM = 'transform';
        const CENTER = '0%';
        const OFF_OPACITY = 0.8;
        const isRTL = navEl.ownerDocument.dir === 'rtl';
        const OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
        const OFF_LEFT = isRTL ? '33%' : '-33%';
        const enteringEl = opts.enteringEl;
        const leavingEl = opts.leavingEl;
        const backDirection = (opts.direction === 'back');
        const contentEl = enteringEl.querySelector(':scope > ion-content');
        const headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
        const enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        const rootAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        const enteringContentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        rootAnimation
            .addElement(enteringEl)
            .duration(opts.duration || DURATION)
            .easing(opts.easing || EASING)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible');
        if (leavingEl && navEl) {
            const navDecorAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            navDecorAnimation.addElement(navEl);
            rootAnimation.addAnimation(navDecorAnimation);
        }
        if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
            enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
        }
        else {
            enteringContentAnimation.addElement(contentEl); // REVIEW
            enteringContentAnimation.addElement(headerEls);
        }
        rootAnimation.addAnimation(enteringContentAnimation);
        if (backDirection) {
            enteringContentAnimation
                .beforeClearStyles([OPACITY])
                .fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`)
                .fromTo(OPACITY, OFF_OPACITY, 1);
        }
        else {
            // entering content, forward direction
            enteringContentAnimation
                .beforeClearStyles([OPACITY])
                .fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
        }
        if (contentEl) {
            const enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
            if (enteringTransitionEffectEl) {
                const enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
                const enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
                const enteringTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const enteringTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const enteringTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                enteringTransitionEffect
                    .addElement(enteringTransitionEffectEl)
                    .beforeStyles({ opacity: '1' })
                    .afterStyles({ opacity: '' });
                enteringTransitionCover
                    .addElement(enteringTransitionCoverEl) // REVIEW
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 0, 0.1);
                enteringTransitionShadow
                    .addElement(enteringTransitionShadowEl) // REVIEW
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 0.03, 0.70);
                enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
                enteringContentAnimation.addAnimation([enteringTransitionEffect]);
            }
        }
        const enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');
        const { forward, backward } = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl);
        enteringToolBarEls.forEach(enteringToolBarEl => {
            const enteringToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBar.addElement(enteringToolBarEl);
            rootAnimation.addAnimation(enteringToolBar);
            const enteringTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
            const enteringToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            const buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
            const parentHeader = enteringToolBarEl.closest('ion-header');
            const inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
            let buttonsToAnimate;
            if (backDirection) {
                buttonsToAnimate = buttons.filter(button => {
                    const isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
            }
            else {
                buttonsToAnimate = buttons.filter(button => !button.classList.contains('buttons-collapse'));
            }
            enteringToolBarButtons.addElement(buttonsToAnimate);
            const enteringToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
            const enteringToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
            const enteringBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            const backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
            if (backButtonEl) {
                enteringBackButton.addElement(backButtonEl);
            }
            enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
            enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
            enteringToolBarItems.fromTo(OPACITY, 0.01, 1);
            if (backDirection) {
                if (!inactiveHeader) {
                    enteringTitle
                        .fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`)
                        .fromTo(OPACITY, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`);
                // back direction, entering page has a back button
                enteringBackButton.fromTo(OPACITY, 0.01, 1);
            }
            else {
                // entering toolbar, forward direction
                if (!enteringContentHasLargeTitle) {
                    enteringTitle
                        .fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`)
                        .fromTo(OPACITY, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
                enteringToolBarBg
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 0.01, 1);
                // forward direction, entering page has a back button
                if (!forward) {
                    enteringBackButton.fromTo(OPACITY, 0.01, 1);
                }
                if (backButtonEl && !forward) {
                    const enteringBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    enteringBackBtnText
                        .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                        .fromTo(`transform`, (isRTL ? 'translateX(-100px)' : 'translateX(100px)'), 'translateX(0px)');
                    enteringToolBar.addAnimation(enteringBackBtnText);
                }
            }
        });
        // setup leaving view
        if (leavingEl) {
            const leavingContent = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            const leavingContentEl = leavingEl.querySelector(':scope > ion-content');
            leavingContent.addElement(leavingContentEl); // REVIEW
            leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
            rootAnimation.addAnimation(leavingContent);
            if (backDirection) {
                // leaving content, back direction
                leavingContent
                    .beforeClearStyles([OPACITY])
                    .fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'));
                const leavingPage = Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["g"])(leavingEl);
                rootAnimation.afterAddWrite(() => {
                    if (rootAnimation.getDirection() === 'normal') {
                        leavingPage.style.setProperty('display', 'none');
                    }
                });
            }
            else {
                // leaving content, forward direction
                leavingContent
                    .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
                    .fromTo(OPACITY, 1, OFF_OPACITY);
            }
            if (leavingContentEl) {
                const leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
                if (leavingTransitionEffectEl) {
                    const leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
                    const leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
                    const leavingTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    const leavingTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    const leavingTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    leavingTransitionEffect
                        .addElement(leavingTransitionEffectEl)
                        .beforeStyles({ opacity: '1' })
                        .afterStyles({ opacity: '' });
                    leavingTransitionCover
                        .addElement(leavingTransitionCoverEl) // REVIEW
                        .beforeClearStyles([OPACITY])
                        .fromTo(OPACITY, 0.1, 0);
                    leavingTransitionShadow
                        .addElement(leavingTransitionShadowEl) // REVIEW
                        .beforeClearStyles([OPACITY])
                        .fromTo(OPACITY, 0.70, 0.03);
                    leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
                    leavingContent.addAnimation([leavingTransitionEffect]);
                }
            }
            const leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
            leavingToolBarEls.forEach(leavingToolBarEl => {
                const leavingToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBar.addElement(leavingToolBarEl);
                const leavingTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
                const leavingToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
                const parentHeader = leavingToolBarEl.closest('ion-header');
                const inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
                const buttonsToAnimate = Array.from(buttons).filter(button => {
                    const isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
                leavingToolBarButtons.addElement(buttonsToAnimate);
                const leavingToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
                if (leavingToolBarItemEls.length > 0) {
                    leavingToolBarItems.addElement(leavingToolBarItemEls);
                }
                const leavingToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
                const leavingBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                const backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
                if (backButtonEl) {
                    leavingBackButton.addElement(backButtonEl);
                }
                leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
                rootAnimation.addAnimation(leavingToolBar);
                // fade out leaving toolbar items
                leavingBackButton.fromTo(OPACITY, 0.99, 0);
                leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
                leavingToolBarItems.fromTo(OPACITY, 0.99, 0);
                if (backDirection) {
                    if (!inactiveHeader) {
                        // leaving toolbar, back direction
                        leavingTitle
                            .fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'))
                            .fromTo(OPACITY, 0.99, 0);
                    }
                    leavingToolBarItems.fromTo('transform', `translateX(${CENTER})`, (isRTL ? 'translateX(-100%)' : 'translateX(100%)'));
                    // leaving toolbar, back direction, and there's no entering toolbar
                    // should just slide out, no fading out
                    leavingToolBarBg
                        .beforeClearStyles([OPACITY])
                        .fromTo(OPACITY, 1, 0.01);
                    if (backButtonEl && !backward) {
                        const leavingBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                        leavingBackBtnText
                            .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                            .fromTo('transform', `translateX(${CENTER})`, `translateX(${(isRTL ? -124 : 124) + 'px'})`);
                        leavingToolBar.addAnimation(leavingBackBtnText);
                    }
                }
                else {
                    // leaving toolbar, forward direction
                    if (!inactiveHeader) {
                        leavingTitle
                            .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
                            .fromTo(OPACITY, 0.99, 0)
                            .afterClearStyles([TRANSFORM, OPACITY]);
                    }
                    leavingToolBarItems
                        .fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`)
                        .afterClearStyles([TRANSFORM, OPACITY]);
                    leavingBackButton.afterClearStyles([OPACITY]);
                    leavingTitle.afterClearStyles([OPACITY]);
                    leavingToolBarButtons.afterClearStyles([OPACITY]);
                }
            });
        }
        return rootAnimation;
    }
    catch (err) {
        throw err;
    }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvcy50cmFuc2l0aW9uLTA3MWJkNDIxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRTtBQUNDO0FBQ2dDO0FBQzlCO0FBQzRCOztBQUU3RDtBQUNBO0FBQ0EsbUJBQW1CLElBQUksMkJBQTJCLEtBQUs7QUFDdkQ7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwyQkFBMkIsVUFBVSwwQkFBMEI7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnREFBZ0QscUJBQXFCLElBQUksZUFBZSxlQUFlO0FBQ2hILFNBQVMsZ0RBQWdELG1CQUFtQixJQUFJLGlCQUFpQjtBQUNqRztBQUNBO0FBQ0EsU0FBUyxnREFBZ0QsbUJBQW1CLElBQUksaUJBQWlCLGFBQWE7QUFDOUcsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxnREFBZ0QscUJBQXFCLElBQUksZUFBZTtBQUNqRztBQUNBO0FBQ0E7QUFDQSxTQUFTLGtEQUFrRCxlQUFlLElBQUksaUJBQWlCLGtCQUFrQjtBQUNqSCxTQUFTLGtEQUFrRCxlQUFlLElBQUksaUJBQWlCO0FBQy9GO0FBQ0E7QUFDQSxTQUFTLGdEQUFnRCxlQUFlLElBQUksaUJBQWlCLGFBQWE7QUFDMUcsU0FBUyxrREFBa0QsZUFB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Q0E7QUFDQTtBQUNBLCtEQUErRCxPQUFPLGtCQUFrQixTQUFTO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELE9BQU8sa0JBQWtCLFNBQVM7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEMiLCJmaWxlIjoiODhcXGNodW5rc1xcODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldElvblBhZ2VFbGVtZW50IH0gZnJvbSAnLi9pbmRleC02ODI2ZjJmNi5qcyc7XG5cbmNvbnN0IERVUkFUSU9OID0gNTQwO1xyXG5jb25zdCBhZGRTYWZlQXJlYSA9ICh2YWwsIHNpZGUgPSAndG9wJykgPT4ge1xyXG4gICAgcmV0dXJuIGBjYWxjKCR7dmFsfXB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS0ke3NpZGV9KSlgO1xyXG59O1xyXG5jb25zdCBnZXRDbG9uZWRFbGVtZW50ID0gKHRhZ05hbWUpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RhZ05hbWV9Lmlvbi1jbG9uZWQtZWxlbWVudGApO1xyXG59O1xyXG5jb25zdCBzaGFkb3cgPSAoZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5zaGFkb3dSb290IHx8IGVsO1xyXG59O1xyXG5jb25zdCBnZXRMYXJnZVRpdGxlID0gKHJlZkVsKSA9PiB7XHJcbiAgICByZXR1cm4gcmVmRWwucXVlcnlTZWxlY3RvcignaW9uLWhlYWRlcjpub3QoLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZSkgaW9uLXRpdGxlW3NpemU9bGFyZ2VdJyk7XHJcbn07XHJcbmNvbnN0IGdldEJhY2tCdXR0b24gPSAocmVmRWwsIGJhY2tEaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbnNMaXN0ID0gcmVmRWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJ1dHRvbnMnKTtcclxuICAgIGZvciAoY29uc3QgYnV0dG9ucyBvZiBidXR0b25zTGlzdCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEhlYWRlciA9IGJ1dHRvbnMuY2xvc2VzdCgnaW9uLWhlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUhlYWRlciA9IHBhcmVudEhlYWRlciAmJiAhcGFyZW50SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGJ1dHRvbnMucXVlcnlTZWxlY3RvcignaW9uLWJhY2stYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uc0NvbGxhcHNlID0gYnV0dG9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbnMtY29sbGFwc2UnKTtcclxuICAgICAgICBpZiAoYmFja0J1dHRvbiAhPT0gbnVsbCAmJiAoKGJ1dHRvbnNDb2xsYXBzZSAmJiBhY3RpdmVIZWFkZXIgJiYgYmFja0RpcmVjdGlvbikgfHwgIWJ1dHRvbnNDb2xsYXBzZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhY2tCdXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUxhcmdlVGl0bGVUcmFuc2l0aW9uID0gKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XHJcbiAgICBjb25zdCBlbnRlcmluZ0JhY2tCdXR0b24gPSBnZXRCYWNrQnV0dG9uKGVudGVyaW5nRWwsIGJhY2tEaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgbGVhdmluZ0xhcmdlVGl0bGUgPSBnZXRMYXJnZVRpdGxlKGxlYXZpbmdFbCk7XHJcbiAgICBjb25zdCBlbnRlcmluZ0xhcmdlVGl0bGUgPSBnZXRMYXJnZVRpdGxlKGVudGVyaW5nRWwpO1xyXG4gICAgY29uc3QgbGVhdmluZ0JhY2tCdXR0b24gPSBnZXRCYWNrQnV0dG9uKGxlYXZpbmdFbCwgYmFja0RpcmVjdGlvbik7XHJcbiAgICBjb25zdCBzaG91bGRBbmltYXRpb25Gb3J3YXJkID0gZW50ZXJpbmdCYWNrQnV0dG9uICE9PSBudWxsICYmIGxlYXZpbmdMYXJnZVRpdGxlICE9PSBudWxsICYmICFiYWNrRGlyZWN0aW9uO1xyXG4gICAgY29uc3Qgc2hvdWxkQW5pbWF0aW9uQmFja3dhcmQgPSBlbnRlcmluZ0xhcmdlVGl0bGUgIT09IG51bGwgJiYgbGVhdmluZ0JhY2tCdXR0b24gIT09IG51bGwgJiYgYmFja0RpcmVjdGlvbjtcclxuICAgIGlmIChzaG91bGRBbmltYXRpb25Gb3J3YXJkKSB7XHJcbiAgICAgICAgYW5pbWF0ZUxhcmdlVGl0bGUocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBsZWF2aW5nTGFyZ2VUaXRsZSk7XHJcbiAgICAgICAgYW5pbWF0ZUJhY2tCdXR0b24ocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBlbnRlcmluZ0JhY2tCdXR0b24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2hvdWxkQW5pbWF0aW9uQmFja3dhcmQpIHtcclxuICAgICAgICBhbmltYXRlTGFyZ2VUaXRsZShyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGVudGVyaW5nTGFyZ2VUaXRsZSk7XHJcbiAgICAgICAgYW5pbWF0ZUJhY2tCdXR0b24ocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBsZWF2aW5nQmFja0J1dHRvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZvcndhcmQ6IHNob3VsZEFuaW1hdGlvbkZvcndhcmQsXHJcbiAgICAgICAgYmFja3dhcmQ6IHNob3VsZEFuaW1hdGlvbkJhY2t3YXJkXHJcbiAgICB9O1xyXG59O1xyXG5jb25zdCBhbmltYXRlQmFja0J1dHRvbiA9IChyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGJhY2tCdXR0b25FbCkgPT4ge1xyXG4gICAgY29uc3QgYmFja0J1dHRvbkJvdW5kcyA9IGJhY2tCdXR0b25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IEJBQ0tfQlVUVE9OX1NUQVJUX09GRlNFVCA9IChydGwpID8gYGNhbGMoMTAwJSAtICR7YmFja0J1dHRvbkJvdW5kcy5yaWdodCArIDR9cHgpYCA6IGAke2JhY2tCdXR0b25Cb3VuZHMubGVmdCAtIDR9cHhgO1xyXG4gICAgY29uc3QgU1RBUlRfVEVYVF9UUkFOU0xBVEUgPSAocnRsKSA/ICc3cHgnIDogJy03cHgnO1xyXG4gICAgY29uc3QgRU5EX1RFWFRfVFJBTlNMQVRFID0gKHJ0bCkgPyAnLTRweCcgOiAnNHB4JztcclxuICAgIGNvbnN0IElDT05fVFJBTlNMQVRFID0gKHJ0bCkgPyAnLTRweCcgOiAnNHB4JztcclxuICAgIGNvbnN0IFRFWFRfT1JJR0lOX1ggPSAocnRsKSA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICBjb25zdCBJQ09OX09SSUdJTl9YID0gKHJ0bCkgPyAnbGVmdCcgOiAncmlnaHQnO1xyXG4gICAgY29uc3QgRk9SV0FSRF9URVhUX0tFWUZSQU1FUyA9IFtcclxuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7U1RBUlRfVEVYVF9UUkFOU0xBVEV9LCAke2FkZFNhZmVBcmVhKDgpfSkgc2NhbGUoMi4xKWAgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7RU5EX1RFWFRfVFJBTlNMQVRFfSwgJHthZGRTYWZlQXJlYSgtNDApfSkgc2NhbGUoMSlgIH1cclxuICAgIF07XHJcbiAgICBjb25zdCBCQUNLV0FSRF9URVhUX0tFWUZSQU1FUyA9IFtcclxuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7RU5EX1RFWFRfVFJBTlNMQVRFfSwgJHthZGRTYWZlQXJlYSgtNDApfSkgc2NhbGUoMSlgIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAuNiwgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtTVEFSVF9URVhUX1RSQU5TTEFURX0sICR7YWRkU2FmZUFyZWEoOCl9KSBzY2FsZSgyLjEpYCB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgVEVYVF9LRVlGUkFNRVMgPSAoYmFja0RpcmVjdGlvbikgPyBCQUNLV0FSRF9URVhUX0tFWUZSQU1FUyA6IEZPUldBUkRfVEVYVF9LRVlGUkFNRVM7XHJcbiAgICBjb25zdCBGT1JXQVJEX0lDT05fS0VZRlJBTUVTID0gW1xyXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke0lDT05fVFJBTlNMQVRFfSwgJHthZGRTYWZlQXJlYSgtMzUpfSwgMCkgc2NhbGUoMC42KWAgfSxcclxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtJQ09OX1RSQU5TTEFURX0sICR7YWRkU2FmZUFyZWEoLTQwKX0sIDApIHNjYWxlKDEpYCB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgQkFDS1dBUkRfSUNPTl9LRVlGUkFNRVMgPSBbXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke0lDT05fVFJBTlNMQVRFfSwgJHthZGRTYWZlQXJlYSgtNDApfSkgc2NhbGUoMSlgIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAuMiwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7SUNPTl9UUkFOU0xBVEV9LCAke2FkZFNhZmVBcmVhKC0zNSl9KSBzY2FsZSgwLjYpYCB9LFxyXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtJQ09OX1RSQU5TTEFURX0sICR7YWRkU2FmZUFyZWEoLTM1KX0pIHNjYWxlKDAuNilgIH1cclxuICAgIF07XHJcbiAgICBjb25zdCBJQ09OX0tFWUZSQU1FUyA9IChiYWNrRGlyZWN0aW9uKSA/IEJBQ0tXQVJEX0lDT05fS0VZRlJBTUVTIDogRk9SV0FSRF9JQ09OX0tFWUZSQU1FUztcclxuICAgIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvblRleHRBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IGNsb25lZEJhY2tCdXR0b25FbCA9IGdldENsb25lZEVsZW1lbnQoJ2lvbi1iYWNrLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgYmFja0J1dHRvblRleHRFbCA9IGNsb25lZEJhY2tCdXR0b25FbC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXRleHQnKTtcclxuICAgIGNvbnN0IGJhY2tCdXR0b25JY29uRWwgPSBjbG9uZWRCYWNrQnV0dG9uRWwucXVlcnlTZWxlY3RvcignaW9uLWljb24nKTtcclxuICAgIGNsb25lZEJhY2tCdXR0b25FbC50ZXh0ID0gYmFja0J1dHRvbkVsLnRleHQ7XHJcbiAgICBjbG9uZWRCYWNrQnV0dG9uRWwubW9kZSA9IGJhY2tCdXR0b25FbC5tb2RlO1xyXG4gICAgY2xvbmVkQmFja0J1dHRvbkVsLmljb24gPSBiYWNrQnV0dG9uRWwuaWNvbjtcclxuICAgIGNsb25lZEJhY2tCdXR0b25FbC5jb2xvciA9IGJhY2tCdXR0b25FbC5jb2xvcjtcclxuICAgIGNsb25lZEJhY2tCdXR0b25FbC5kaXNhYmxlZCA9IGJhY2tCdXR0b25FbC5kaXNhYmxlZDtcclxuICAgIGNsb25lZEJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcpO1xyXG4gICAgZW50ZXJpbmdCYWNrQnV0dG9uSWNvbkFuaW1hdGlvbi5hZGRFbGVtZW50KGJhY2tCdXR0b25JY29uRWwpO1xyXG4gICAgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhY2tCdXR0b25UZXh0RWwpO1xyXG4gICAgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEFuaW1hdGlvblxyXG4gICAgICAgIC5iZWZvcmVTdHlsZXMoe1xyXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogYCR7VEVYVF9PUklHSU5fWH0gY2VudGVyYFxyXG4gICAgfSlcclxuICAgICAgICAuYmVmb3JlQWRkV3JpdGUoKCkgPT4ge1xyXG4gICAgICAgIGJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KFRFWFRfT1JJR0lOX1gsIEJBQ0tfQlVUVE9OX1NUQVJUX09GRlNFVCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5hZnRlckFkZFdyaXRlKCgpID0+IHtcclxuICAgICAgICBiYWNrQnV0dG9uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICAgICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICBjbG9uZWRCYWNrQnV0dG9uRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoVEVYVF9PUklHSU5fWCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5rZXlmcmFtZXMoVEVYVF9LRVlGUkFNRVMpO1xyXG4gICAgZW50ZXJpbmdCYWNrQnV0dG9uSWNvbkFuaW1hdGlvblxyXG4gICAgICAgIC5iZWZvcmVTdHlsZXMoe1xyXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogYCR7SUNPTl9PUklHSU5fWH0gY2VudGVyYFxyXG4gICAgfSlcclxuICAgICAgICAua2V5ZnJhbWVzKElDT05fS0VZRlJBTUVTKTtcclxuICAgIHJvb3RBbmltYXRpb24uYWRkQW5pbWF0aW9uKFtlbnRlcmluZ0JhY2tCdXR0b25UZXh0QW5pbWF0aW9uLCBlbnRlcmluZ0JhY2tCdXR0b25JY29uQW5pbWF0aW9uXSk7XHJcbn07XHJcbmNvbnN0IGFuaW1hdGVMYXJnZVRpdGxlID0gKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgbGFyZ2VUaXRsZUVsKSA9PiB7XHJcbiAgICBjb25zdCBsYXJnZVRpdGxlQm91bmRzID0gbGFyZ2VUaXRsZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgVElUTEVfU1RBUlRfT0ZGU0VUID0gKHJ0bCkgPyBgY2FsYygxMDAlIC0gJHtsYXJnZVRpdGxlQm91bmRzLnJpZ2h0fXB4KWAgOiBgJHtsYXJnZVRpdGxlQm91bmRzLmxlZnR9cHhgO1xyXG4gICAgY29uc3QgU1RBUlRfVFJBTlNMQVRFID0gKHJ0bCkgPyAnLTE4cHgnIDogJzE4cHgnO1xyXG4gICAgY29uc3QgT1JJR0lOX1ggPSAocnRsKSA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICBjb25zdCBCQUNLV0FSRFNfS0VZRlJBTUVTID0gW1xyXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtTVEFSVF9UUkFOU0xBVEV9LCAke2FkZFNhZmVBcmVhKDApfSkgc2NhbGUoMC40OSlgIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAuMSwgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoMCwgJHthZGRTYWZlQXJlYSg0OSl9KSBzY2FsZSgxKWAgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IEZPUldBUkRTX0tFWUZSQU1FUyA9IFtcclxuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMC45OSwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKDAsICR7YWRkU2FmZUFyZWEoNDkpfSkgc2NhbGUoMSlgIH0sXHJcbiAgICAgICAgeyBvZmZzZXQ6IDAuNiwgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtTVEFSVF9UUkFOU0xBVEV9LCAke2FkZFNhZmVBcmVhKDApfSkgc2NhbGUoMC41KWAgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IEtFWUZSQU1FUyA9IChiYWNrRGlyZWN0aW9uKSA/IEJBQ0tXQVJEU19LRVlGUkFNRVMgOiBGT1JXQVJEU19LRVlGUkFNRVM7XHJcbiAgICBjb25zdCBjbG9uZWRUaXRsZUVsID0gZ2V0Q2xvbmVkRWxlbWVudCgnaW9uLXRpdGxlJyk7XHJcbiAgICBjb25zdCBjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjbG9uZWRUaXRsZUVsLmlubmVyVGV4dCA9IGxhcmdlVGl0bGVFbC5pbm5lclRleHQ7XHJcbiAgICBjbG9uZWRUaXRsZUVsLnNpemUgPSBsYXJnZVRpdGxlRWwuc2l6ZTtcclxuICAgIGNsb25lZFRpdGxlRWwuY29sb3IgPSBsYXJnZVRpdGxlRWwuY29sb3I7XHJcbiAgICBjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uLmFkZEVsZW1lbnQoY2xvbmVkVGl0bGVFbCk7XHJcbiAgICBjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uXHJcbiAgICAgICAgLmJlZm9yZVN0eWxlcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBgJHtPUklHSU5fWH0gY2VudGVyYCxcclxuICAgICAgICAnaGVpZ2h0JzogJzQ2cHgnLFxyXG4gICAgICAgICdkaXNwbGF5JzogJycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcclxuICAgICAgICBbT1JJR0lOX1hdOiBUSVRMRV9TVEFSVF9PRkZTRVRcclxuICAgIH0pXHJcbiAgICAgICAgLmJlZm9yZUFkZFdyaXRlKCgpID0+IHtcclxuICAgICAgICBsYXJnZVRpdGxlRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSlcclxuICAgICAgICAuYWZ0ZXJBZGRXcml0ZSgoKSA9PiB7XHJcbiAgICAgICAgbGFyZ2VUaXRsZUVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJycpO1xyXG4gICAgICAgIGNsb25lZFRpdGxlRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSlcclxuICAgICAgICAua2V5ZnJhbWVzKEtFWUZSQU1FUyk7XHJcbiAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uKTtcclxufTtcclxuY29uc3QgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiA9IChuYXZFbCwgb3B0cykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBFQVNJTkcgPSAnY3ViaWMtYmV6aWVyKDAuMzIsMC43MiwwLDEpJztcclxuICAgICAgICBjb25zdCBPUEFDSVRZID0gJ29wYWNpdHknO1xyXG4gICAgICAgIGNvbnN0IFRSQU5TRk9STSA9ICd0cmFuc2Zvcm0nO1xyXG4gICAgICAgIGNvbnN0IENFTlRFUiA9ICcwJSc7XHJcbiAgICAgICAgY29uc3QgT0ZGX09QQUNJVFkgPSAwLjg7XHJcbiAgICAgICAgY29uc3QgaXNSVEwgPSBuYXZFbC5vd25lckRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XHJcbiAgICAgICAgY29uc3QgT0ZGX1JJR0hUID0gaXNSVEwgPyAnLTk5LjUlJyA6ICc5OS41JSc7XHJcbiAgICAgICAgY29uc3QgT0ZGX0xFRlQgPSBpc1JUTCA/ICczMyUnIDogJy0zMyUnO1xyXG4gICAgICAgIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XHJcbiAgICAgICAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XHJcbiAgICAgICAgY29uc3QgYmFja0RpcmVjdGlvbiA9IChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKTtcclxuICAgICAgICBjb25zdCBjb250ZW50RWwgPSBlbnRlcmluZ0VsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IGlvbi1jb250ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRWxzID0gZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24taGVhZGVyID4gKjpub3QoaW9uLXRvb2xiYXIpLCA6c2NvcGUgPiBpb24tZm9vdGVyID4gKicpO1xyXG4gICAgICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhckVscyA9IGVudGVyaW5nRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gaW9uLWhlYWRlciA+IGlvbi10b29sYmFyJyk7XHJcbiAgICAgICAgY29uc3Qgcm9vdEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGVudGVyaW5nQ29udGVudEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIHJvb3RBbmltYXRpb25cclxuICAgICAgICAgICAgLmFkZEVsZW1lbnQoZW50ZXJpbmdFbClcclxuICAgICAgICAgICAgLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgRFVSQVRJT04pXHJcbiAgICAgICAgICAgIC5lYXNpbmcob3B0cy5lYXNpbmcgfHwgRUFTSU5HKVxyXG4gICAgICAgICAgICAuZmlsbCgnYm90aCcpXHJcbiAgICAgICAgICAgIC5iZWZvcmVSZW1vdmVDbGFzcygnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XHJcbiAgICAgICAgaWYgKGxlYXZpbmdFbCAmJiBuYXZFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBuYXZEZWNvckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICBuYXZEZWNvckFuaW1hdGlvbi5hZGRFbGVtZW50KG5hdkVsKTtcclxuICAgICAgICAgICAgcm9vdEFuaW1hdGlvbi5hZGRBbmltYXRpb24obmF2RGVjb3JBbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRlbnRFbCAmJiBlbnRlcmluZ1Rvb2xCYXJFbHMubGVuZ3RoID09PSAwICYmIGhlYWRlckVscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uLmFkZEVsZW1lbnQoZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJykpOyAvLyBSRVZJRVdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5hZGRFbGVtZW50KGNvbnRlbnRFbCk7IC8vIFJFVklFV1xyXG4gICAgICAgICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24uYWRkRWxlbWVudChoZWFkZXJFbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24pO1xyXG4gICAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXSlcclxuICAgICAgICAgICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7T0ZGX0xFRlR9KWAsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgKVxyXG4gICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCBPRkZfT1BBQ0lUWSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBlbnRlcmluZyBjb250ZW50LCBmb3J3YXJkIGRpcmVjdGlvblxyXG4gICAgICAgICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb25cclxuICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pXHJcbiAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke09GRl9SSUdIVH0pYCwgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29udGVudEVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdEVsID0gc2hhZG93KGNvbnRlbnRFbCkucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tZWZmZWN0Jyk7XHJcbiAgICAgICAgICAgIGlmIChlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW50ZXJpbmdUcmFuc2l0aW9uQ292ZXJFbCA9IGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdEVsLnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRlcmluZ1RyYW5zaXRpb25TaGFkb3dFbCA9IGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdEVsLnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLXNoYWRvdycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0ID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRlcmluZ1RyYW5zaXRpb25Db3ZlciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93ID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RcclxuICAgICAgICAgICAgICAgICAgICAuYWRkRWxlbWVudChlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbClcclxuICAgICAgICAgICAgICAgICAgICAuYmVmb3JlU3R5bGVzKHsgb3BhY2l0eTogJzEnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFmdGVyU3R5bGVzKHsgb3BhY2l0eTogJycgfSk7XHJcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25Db3ZlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRFbGVtZW50KGVudGVyaW5nVHJhbnNpdGlvbkNvdmVyRWwpIC8vIFJFVklFV1xyXG4gICAgICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93XHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEVsZW1lbnQoZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93RWwpIC8vIFJFVklFV1xyXG4gICAgICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAwLjAzLCAwLjcwKTtcclxuICAgICAgICAgICAgICAgIGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdC5hZGRBbmltYXRpb24oW2VudGVyaW5nVHJhbnNpdGlvbkNvdmVyLCBlbnRlcmluZ1RyYW5zaXRpb25TaGFkb3ddKTtcclxuICAgICAgICAgICAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvbi5hZGRBbmltYXRpb24oW2VudGVyaW5nVHJhbnNpdGlvbkVmZmVjdF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVudGVyaW5nQ29udGVudEhhc0xhcmdlVGl0bGUgPSBlbnRlcmluZ0VsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1oZWFkZXIuaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlJyk7XHJcbiAgICAgICAgY29uc3QgeyBmb3J3YXJkLCBiYWNrd2FyZCB9ID0gY3JlYXRlTGFyZ2VUaXRsZVRyYW5zaXRpb24ocm9vdEFuaW1hdGlvbiwgaXNSVEwsIGJhY2tEaXJlY3Rpb24sIGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XHJcbiAgICAgICAgZW50ZXJpbmdUb29sQmFyRWxzLmZvckVhY2goZW50ZXJpbmdUb29sQmFyRWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXIgPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgZW50ZXJpbmdUb29sQmFyLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sQmFyRWwpO1xyXG4gICAgICAgICAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihlbnRlcmluZ1Rvb2xCYXIpO1xyXG4gICAgICAgICAgICBjb25zdCBlbnRlcmluZ1RpdGxlID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIGVudGVyaW5nVGl0bGUuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yKCdpb24tdGl0bGUnKSk7IC8vIFJFVklFV1xyXG4gICAgICAgICAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXJCdXR0b25zID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGVudGVyaW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zLFttZW51VG9nZ2xlXScpKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50SGVhZGVyID0gZW50ZXJpbmdUb29sQmFyRWwuY2xvc2VzdCgnaW9uLWhlYWRlcicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmFjdGl2ZUhlYWRlciA9IHBhcmVudEhlYWRlciAmJiBwYXJlbnRIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnNUb0FuaW1hdGU7XHJcbiAgICAgICAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zVG9BbmltYXRlID0gYnV0dG9ucy5maWx0ZXIoYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NvbGxhcHNlQnV0dG9uID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9ucy1jb2xsYXBzZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXNDb2xsYXBzZUJ1dHRvbiAmJiAhaW5hY3RpdmVIZWFkZXIpIHx8ICFpc0NvbGxhcHNlQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zVG9BbmltYXRlID0gYnV0dG9ucy5maWx0ZXIoYnV0dG9uID0+ICFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25zLWNvbGxhcHNlJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhckJ1dHRvbnMuYWRkRWxlbWVudChidXR0b25zVG9BbmltYXRlKTtcclxuICAgICAgICAgICAgY29uc3QgZW50ZXJpbmdUb29sQmFySXRlbXMgPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgZW50ZXJpbmdUb29sQmFySXRlbXMuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAqOm5vdChpb24tdGl0bGUpOm5vdChpb24tYnV0dG9ucyk6bm90KFttZW51VG9nZ2xlXSknKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhckJnID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhckJnLmFkZEVsZW1lbnQoc2hhZG93KGVudGVyaW5nVG9vbEJhckVsKS5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci1iYWNrZ3JvdW5kJykpOyAvLyBSRVZJRVdcclxuICAgICAgICAgICAgY29uc3QgZW50ZXJpbmdCYWNrQnV0dG9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tCdXR0b25FbCA9IGVudGVyaW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBpZiAoYmFja0J1dHRvbkVsKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRlcmluZ0JhY2tCdXR0b24uYWRkRWxlbWVudChiYWNrQnV0dG9uRWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRBbmltYXRpb24oW2VudGVyaW5nVGl0bGUsIGVudGVyaW5nVG9vbEJhckJ1dHRvbnMsIGVudGVyaW5nVG9vbEJhckl0ZW1zLCBlbnRlcmluZ1Rvb2xCYXJCZywgZW50ZXJpbmdCYWNrQnV0dG9uXSk7XHJcbiAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhckJ1dHRvbnMuZnJvbVRvKE9QQUNJVFksIDAuMDEsIDEpO1xyXG4gICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XHJcbiAgICAgICAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluYWN0aXZlSGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50ZXJpbmdUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke09GRl9MRUZUfSlgLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhckl0ZW1zLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtPRkZfTEVGVH0pYCwgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWApO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFjayBkaXJlY3Rpb24sIGVudGVyaW5nIHBhZ2UgaGFzIGEgYmFjayBidXR0b25cclxuICAgICAgICAgICAgICAgIGVudGVyaW5nQmFja0J1dHRvbi5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbnRlcmluZyB0b29sYmFyLCBmb3J3YXJkIGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRlcmluZ0NvbnRlbnRIYXNMYXJnZVRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50ZXJpbmdUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke09GRl9SSUdIVH0pYCwgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWSwgMC4wMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7T0ZGX1JJR0hUfSlgLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCk7XHJcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCZ1xyXG4gICAgICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAwLjAxLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGZvcndhcmQgZGlyZWN0aW9uLCBlbnRlcmluZyBwYWdlIGhhcyBhIGJhY2sgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRlcmluZ0JhY2tCdXR0b24uZnJvbVRvKE9QQUNJVFksIDAuMDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhY2tCdXR0b25FbCAmJiAhZm9yd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGVyaW5nQmFja0J0blRleHQgPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRlcmluZ0JhY2tCdG5UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRFbGVtZW50KHNoYWRvdyhiYWNrQnV0dG9uRWwpLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGV4dCcpKSAvLyBSRVZJRVdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhgdHJhbnNmb3JtYCwgKGlzUlRMID8gJ3RyYW5zbGF0ZVgoLTEwMHB4KScgOiAndHJhbnNsYXRlWCgxMDBweCknKSwgJ3RyYW5zbGF0ZVgoMHB4KScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRBbmltYXRpb24oZW50ZXJpbmdCYWNrQnRuVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBzZXR1cCBsZWF2aW5nIHZpZXdcclxuICAgICAgICBpZiAobGVhdmluZ0VsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdDb250ZW50ID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdDb250ZW50RWwgPSBsZWF2aW5nRWwucXVlcnlTZWxlY3RvcignOnNjb3BlID4gaW9uLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgbGVhdmluZ0NvbnRlbnQuYWRkRWxlbWVudChsZWF2aW5nQ29udGVudEVsKTsgLy8gUkVWSUVXXHJcbiAgICAgICAgICAgIGxlYXZpbmdDb250ZW50LmFkZEVsZW1lbnQobGVhdmluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IGlvbi1oZWFkZXIgPiAqOm5vdChpb24tdG9vbGJhciksIDpzY29wZSA+IGlvbi1mb290ZXIgPiAqJykpO1xyXG4gICAgICAgICAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihsZWF2aW5nQ29udGVudCk7XHJcbiAgICAgICAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZWF2aW5nIGNvbnRlbnQsIGJhY2sgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBsZWF2aW5nQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIChpc1JUTCA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdQYWdlID0gZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKTtcclxuICAgICAgICAgICAgICAgIHJvb3RBbmltYXRpb24uYWZ0ZXJBZGRXcml0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3RBbmltYXRpb24uZ2V0RGlyZWN0aW9uKCkgPT09ICdub3JtYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZpbmdQYWdlLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGxlYXZpbmcgY29udGVudCwgZm9yd2FyZCBkaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgIGxlYXZpbmdDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIGB0cmFuc2xhdGVYKCR7T0ZGX0xFRlR9KWApXHJcbiAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAxLCBPRkZfT1BBQ0lUWSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxlYXZpbmdDb250ZW50RWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0RWwgPSBzaGFkb3cobGVhdmluZ0NvbnRlbnRFbCkucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tZWZmZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uQ292ZXJFbCA9IGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0RWwucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY292ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWF2aW5nVHJhbnNpdGlvblNoYWRvd0VsID0gbGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1zaGFkb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdCA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdUcmFuc2l0aW9uQ292ZXIgPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWF2aW5nVHJhbnNpdGlvblNoYWRvdyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRFbGVtZW50KGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0RWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iZWZvcmVTdHlsZXMoeyBvcGFjaXR5OiAnMScgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFmdGVyU3R5bGVzKHsgb3BhY2l0eTogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1RyYW5zaXRpb25Db3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkRWxlbWVudChsZWF2aW5nVHJhbnNpdGlvbkNvdmVyRWwpIC8vIFJFVklFV1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKE9QQUNJVFksIDAuMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1RyYW5zaXRpb25TaGFkb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEVsZW1lbnQobGVhdmluZ1RyYW5zaXRpb25TaGFkb3dFbCkgLy8gUkVWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWSwgMC43MCwgMC4wMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1RyYW5zaXRpb25FZmZlY3QuYWRkQW5pbWF0aW9uKFtsZWF2aW5nVHJhbnNpdGlvbkNvdmVyLCBsZWF2aW5nVHJhbnNpdGlvblNoYWRvd10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdDb250ZW50LmFkZEFuaW1hdGlvbihbbGVhdmluZ1RyYW5zaXRpb25FZmZlY3RdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsZWF2aW5nVG9vbEJhckVscyA9IGxlYXZpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24taGVhZGVyID4gaW9uLXRvb2xiYXInKTtcclxuICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJFbHMuZm9yRWFjaChsZWF2aW5nVG9vbEJhckVsID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdUb29sQmFyID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhci5hZGRFbGVtZW50KGxlYXZpbmdUb29sQmFyRWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVhdmluZ1RpdGxlID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZWF2aW5nVGl0bGUuYWRkRWxlbWVudChsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10aXRsZScpKTsgLy8gUkVWSUVXXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWF2aW5nVG9vbEJhckJ1dHRvbnMgPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zLFttZW51VG9nZ2xlXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50SGVhZGVyID0gbGVhdmluZ1Rvb2xCYXJFbC5jbG9zZXN0KCdpb24taGVhZGVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmFjdGl2ZUhlYWRlciA9IHBhcmVudEhlYWRlciAmJiBwYXJlbnRIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNUb0FuaW1hdGUgPSBBcnJheS5mcm9tKGJ1dHRvbnMpLmZpbHRlcihidXR0b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ29sbGFwc2VCdXR0b24gPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25zLWNvbGxhcHNlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpc0NvbGxhcHNlQnV0dG9uICYmICFpbmFjdGl2ZUhlYWRlcikgfHwgIWlzQ29sbGFwc2VCdXR0b247XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyQnV0dG9ucy5hZGRFbGVtZW50KGJ1dHRvbnNUb0FuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVhdmluZ1Rvb2xCYXJJdGVtcyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVhdmluZ1Rvb2xCYXJJdGVtRWxzID0gbGVhdmluZ1Rvb2xCYXJFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAqOm5vdChpb24tdGl0bGUpOm5vdChpb24tYnV0dG9ucyk6bm90KFttZW51VG9nZ2xlXSknKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZWF2aW5nVG9vbEJhckl0ZW1FbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdUb29sQmFySXRlbXMuYWRkRWxlbWVudChsZWF2aW5nVG9vbEJhckl0ZW1FbHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVhdmluZ1Rvb2xCYXJCZyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJCZy5hZGRFbGVtZW50KHNoYWRvdyhsZWF2aW5nVG9vbEJhckVsKS5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci1iYWNrZ3JvdW5kJykpOyAvLyBSRVZJRVdcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdCYWNrQnV0dG9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWNrQnV0dG9uRWwgPSBsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhY2tCdXR0b25FbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdCYWNrQnV0dG9uLmFkZEVsZW1lbnQoYmFja0J1dHRvbkVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyLmFkZEFuaW1hdGlvbihbbGVhdmluZ1RpdGxlLCBsZWF2aW5nVG9vbEJhckJ1dHRvbnMsIGxlYXZpbmdUb29sQmFySXRlbXMsIGxlYXZpbmdCYWNrQnV0dG9uLCBsZWF2aW5nVG9vbEJhckJnXSk7XHJcbiAgICAgICAgICAgICAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihsZWF2aW5nVG9vbEJhcik7XHJcbiAgICAgICAgICAgICAgICAvLyBmYWRlIG91dCBsZWF2aW5nIHRvb2xiYXIgaXRlbXNcclxuICAgICAgICAgICAgICAgIGxlYXZpbmdCYWNrQnV0dG9uLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKTtcclxuICAgICAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyQnV0dG9ucy5mcm9tVG8oT1BBQ0lUWSwgMC45OSwgMCk7XHJcbiAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhckl0ZW1zLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmFjdGl2ZUhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZWF2aW5nIHRvb2xiYXIsIGJhY2sgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZpbmdUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHtDRU5URVJ9KWAsIChpc1JUTCA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCAoaXNSVEwgPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ3RyYW5zbGF0ZVgoMTAwJSknKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhdmluZyB0b29sYmFyLCBiYWNrIGRpcmVjdGlvbiwgYW5kIHRoZXJlJ3Mgbm8gZW50ZXJpbmcgdG9vbGJhclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBqdXN0IHNsaWRlIG91dCwgbm8gZmFkaW5nIG91dFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyQmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAxLCAwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFja0J1dHRvbkVsICYmICFiYWNrd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWF2aW5nQmFja0J0blRleHQgPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ0JhY2tCdG5UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkRWxlbWVudChzaGFkb3coYmFja0J1dHRvbkVsKS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXRleHQnKSkgLy8gUkVWSUVXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke0NFTlRFUn0pYCwgYHRyYW5zbGF0ZVgoJHsoaXNSVEwgPyAtMTI0IDogMTI0KSArICdweCd9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhci5hZGRBbmltYXRpb24obGVhdmluZ0JhY2tCdG5UZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWF2aW5nIHRvb2xiYXIsIGZvcndhcmQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmFjdGl2ZUhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBgdHJhbnNsYXRlWCgke09GRl9MRUZUfSlgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZLCAwLjk5LCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFmdGVyQ2xlYXJTdHlsZXMoW1RSQU5TRk9STSwgT1BBQ0lUWV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhckl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7Q0VOVEVSfSlgLCBgdHJhbnNsYXRlWCgke09GRl9MRUZUfSlgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWZ0ZXJDbGVhclN0eWxlcyhbVFJBTlNGT1JNLCBPUEFDSVRZXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ0JhY2tCdXR0b24uYWZ0ZXJDbGVhclN0eWxlcyhbT1BBQ0lUWV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdUaXRsZS5hZnRlckNsZWFyU3R5bGVzKFtPUEFDSVRZXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJCdXR0b25zLmFmdGVyQ2xlYXJTdHlsZXMoW09QQUNJVFldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb290QW5pbWF0aW9uO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxufTtcblxuZXhwb3J0IHsgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiwgc2hhZG93IH07XG4iXSwic291cmNlUm9vdCI6IiJ9