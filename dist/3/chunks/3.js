(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../node_modules/@ionic/core/dist/esm/index-69c37885.js":
/*!**************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/index-69c37885.js ***!
  \**************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
const transitionEnd = (el, callback) => {
    let unRegTrans;
    const opts = { passive: true };
    const unregister = () => {
        if (unRegTrans) {
            unRegTrans();
        }
    };
    const onTransitionEnd = (ev) => {
        if (el === ev.target) {
            unregister();
            callback(ev);
        }
    };
    if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);
        unRegTrans = () => {
            el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
            el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
    }
    return unregister;
};

const CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
const DURATION_MIN = 32;
const TRANSITION_END_FALLBACK_PADDING_MS = 400;
const TRANSFORM_PROPS = {
    'translateX': 1,
    'translateY': 1,
    'translateZ': 1,
    'scale': 1,
    'scaleX': 1,
    'scaleY': 1,
    'scaleZ': 1,
    'rotate': 1,
    'rotateX': 1,
    'rotateY': 1,
    'rotateZ': 1,
    'skewX': 1,
    'skewY': 1,
    'perspective': 1
};
const win = typeof window !== 'undefined' ? window : {};
const raf = win.requestAnimationFrame
    ? win.requestAnimationFrame.bind(win)
    : (f) => f(Date.now());
class Animator {
    constructor() {
        this._hasDur = false;
        this._hasTweenEffect = false;
        this._isAsync = false;
        this._isReverse = false;
        this._destroyed = false;
        this.hasChildren = false;
        this.isPlaying = false;
        this.hasCompleted = false;
    }
    addElement(el) {
        if (el != null) {
            if (el.length > 0) {
                for (let i = 0; i < el.length; i++) {
                    this._addEl(el[i]);
                }
            }
            else {
                this._addEl(el);
            }
        }
        return this;
    }
    /**
     * NO DOM
     */
    _addEl(el) {
        if (el.nodeType === 1) {
            (this._elements = this._elements || []).push(el);
        }
    }
    /**
     * Add a child animation to this animation.
     */
    add(childAnimation) {
        childAnimation.parent = this;
        this.hasChildren = true;
        (this._childAnimations = this._childAnimations || []).push(childAnimation);
        return this;
    }
    /**
     * Get the duration of this animation. If this animation does
     * not have a duration, then it'll get the duration from its parent.
     */
    getDuration(opts) {
        if (opts && opts.duration !== undefined) {
            return opts.duration;
        }
        else if (this._duration !== undefined) {
            return this._duration;
        }
        else if (this.parent) {
            return this.parent.getDuration();
        }
        return 0;
    }
    /**
     * Returns if the animation is a root one.
     */
    isRoot() {
        return !this.parent;
    }
    /**
     * Set the duration for this animation.
     */
    duration(milliseconds) {
        this._duration = milliseconds;
        return this;
    }
    /**
     * Get the easing of this animation. If this animation does
     * not have an easing, then it'll get the easing from its parent.
     */
    getEasing() {
        if (this._isReverse && this._reversedEasingName !== undefined) {
            return this._reversedEasingName;
        }
        return this._easingName !== undefined ? this._easingName : (this.parent && this.parent.getEasing()) || null;
    }
    /**
     * Set the easing for this animation.
     */
    easing(name) {
        this._easingName = name;
        return this;
    }
    /**
     * Set the easing for this reversed animation.
     */
    easingReverse(name) {
        this._reversedEasingName = name;
        return this;
    }
    /**
     * Add the "from" value for a specific property.
     */
    from(prop, val) {
        this._addProp('from', prop, val);
        return this;
    }
    /**
     * Add the "to" value for a specific property.
     */
    to(prop, val, clearProperyAfterTransition = false) {
        const fx = this._addProp('to', prop, val);
        if (clearProperyAfterTransition) {
            // if this effect is a transform then clear the transform effect
            // otherwise just clear the actual property
            this.afterClearStyles(fx.trans ? ['transform', '-webkit-transform'] : [prop]);
        }
        return this;
    }
    /**
     * Shortcut to add both the "from" and "to" for the same property.
     */
    fromTo(prop, fromVal, toVal, clearProperyAfterTransition) {
        return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
    }
    /**
     * NO DOM
     */
    _getProp(name) {
        if (this._fxProperties) {
            return this._fxProperties.find(prop => prop.effectName === name);
        }
        return undefined;
    }
    _addProp(state, prop, val) {
        let fxProp = this._getProp(prop);
        if (!fxProp) {
            // first time we've see this EffectProperty
            const shouldTrans = (TRANSFORM_PROPS[prop] === 1);
            fxProp = {
                effectName: prop,
                trans: shouldTrans,
                // add the will-change property for transforms or opacity
                wc: (shouldTrans ? 'transform' : prop)
            };
            (this._fxProperties = this._fxProperties || []).push(fxProp);
        }
        // add from/to EffectState to the EffectProperty
        const fxState = {
            val,
            num: 0,
            effectUnit: '',
        };
        fxProp[state] = fxState;
        if (typeof val === 'string' && val.indexOf(' ') < 0) {
            const r = val.match(CSS_VALUE_REGEX);
            if (r) {
                const num = parseFloat(r[1]);
                if (!isNaN(num)) {
                    fxState.num = num;
                }
                fxState.effectUnit = (r[0] !== r[2] ? r[2] : '');
            }
        }
        else if (typeof val === 'number') {
            fxState.num = val;
        }
        return fxProp;
    }
    /**
     * Add CSS class to this animation's elements
     * before the animation begins.
     */
    beforeAddClass(className) {
        (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
        return this;
    }
    /**
     * Remove CSS class from this animation's elements
     * before the animation begins.
     */
    beforeRemoveClass(className) {
        (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
        return this;
    }
    /**
     * Set CSS inline styles to this animation's elements
     * before the animation begins.
     */
    beforeStyles(styles) {
        this._beforeStyles = styles;
        return this;
    }
    /**
     * Clear CSS inline styles from this animation's elements
     * before the animation begins.
     */
    beforeClearStyles(propertyNames) {
        this._beforeStyles = this._beforeStyles || {};
        for (const prop of propertyNames) {
            this._beforeStyles[prop] = '';
        }
        return this;
    }
    /**
     * Add a function which contains DOM reads, which will run
     * before the animation begins.
     */
    beforeAddRead(domReadFn) {
        (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
        return this;
    }
    /**
     * Add a function which contains DOM writes, which will run
     * before the animation begins.
     */
    beforeAddWrite(domWriteFn) {
        (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
        return this;
    }
    /**
     * Add CSS class to this animation's elements
     * after the animation finishes.
     */
    afterAddClass(className) {
        (this._afterAddClasses = this._afterAddClasses || []).push(className);
        return this;
    }
    /**
     * Remove CSS class from this animation's elements
     * after the animation finishes.
     */
    afterRemoveClass(className) {
        (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
        return this;
    }
    /**
     * Set CSS inline styles to this animation's elements
     * after the animation finishes.
     */
    afterStyles(styles) {
        this._afterStyles = styles;
        return this;
    }
    /**
     * Clear CSS inline styles from this animation's elements
     * after the animation finishes.
     */
    afterClearStyles(propertyNames) {
        this._afterStyles = this._afterStyles || {};
        for (const prop of propertyNames) {
            this._afterStyles[prop] = '';
        }
        return this;
    }
    /**
     * Play the animation.
     */
    play(opts) {
        // If the animation was already invalidated (it did finish), do nothing
        if (this._destroyed) {
            return;
        }
        // this is the top level animation and is in full control
        // of when the async play() should actually kick off
        // if there is no duration then it'll set the TO property immediately
        // if there is a duration, then it'll stage all animations at the
        // FROM property and transition duration, wait a few frames, then
        // kick off the animation by setting the TO property for each animation
        this._isAsync = this._hasDuration(opts);
        // ensure all past transition end events have been cleared
        this._clearAsync();
        // recursively kicks off the correct progress step for each child animation
        // ******** DOM WRITE ****************
        this._playInit(opts);
        // doubling up RAFs since this animation was probably triggered
        // from an input event, and just having one RAF would have this code
        // run within the same frame as the triggering input event, and the
        // input event probably already did way too much work for one frame
        raf(() => {
            raf(() => {
                this._playDomInspect(opts);
            });
        });
    }
    playAsync(opts) {
        return new Promise(resolve => {
            this.onFinish(resolve, { oneTimeCallback: true, clearExistingCallbacks: true });
            this.play(opts);
            return this;
        });
    }
    playSync() {
        // If the animation was already invalidated (it did finish), do nothing
        if (!this._destroyed) {
            const opts = { duration: 0 };
            this._isAsync = false;
            this._clearAsync();
            this._playInit(opts);
            this._playDomInspect(opts);
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playInit(opts) {
        // always default that an animation does not tween
        // a tween requires that an Animation class has an element
        // and that it has at least one FROM/TO effect
        // and that the FROM/TO effect can tween numeric values
        this._hasTweenEffect = false;
        this.isPlaying = true;
        this.hasCompleted = false;
        this._hasDur = (this.getDuration(opts) > DURATION_MIN);
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM WRITE ****************
                child._playInit(opts);
            }
        }
        if (this._hasDur) {
            // if there is a duration then we want to start at step 0
            // ******** DOM WRITE ****************
            this._progress(0);
            // add the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(true);
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    _playDomInspect(opts) {
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        // ******** DOM WRITE ****************
        this._beforeAnimation();
        // for the root animation only
        // set the async TRANSITION END event
        // and run onFinishes when the transition ends
        const dur = this.getDuration(opts);
        if (this._isAsync) {
            this._asyncEnd(dur, true);
        }
        // ******** DOM WRITE ****************
        this._playProgress(opts);
        if (this._isAsync && !this._destroyed) {
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            raf(() => {
                this._playToStep(1);
            });
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playProgress(opts) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM WRITE ****************
                child._playProgress(opts);
            }
        }
        if (this._hasDur) {
            // set the CSS TRANSITION duration/easing
            // ******** DOM WRITE ****************
            this._setTrans(this.getDuration(opts), false);
        }
        else {
            // this animation does not have a duration, so it should not animate
            // just go straight to the TO properties and call it done
            // ******** DOM WRITE ****************
            this._progress(1);
            // since there was no animation, immediately run the after
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // this animation has no duration, so it has finished
            // other animations could still be running
            this._didFinish(true);
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playToStep(stepValue) {
        if (!this._destroyed) {
            const children = this._childAnimations;
            if (children) {
                for (const child of children) {
                    // ******** DOM WRITE ****************
                    child._playToStep(stepValue);
                }
            }
            if (this._hasDur) {
                // browser had some time to render everything in place
                // and the transition duration/easing is set
                // now set the TO properties which will trigger the transition to begin
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    _asyncEnd(dur, shouldComplete) {
        const self = this;
        const onTransitionEnd = () => {
            // congrats! a successful transition completed!
            // ensure transition end events and timeouts have been cleared
            self._clearAsync();
            // ******** DOM WRITE ****************
            self._playEnd();
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        };
        const onTransitionFallback = () => {
            // oh noz! the transition end event didn't fire in time!
            // instead the fallback timer when first
            // if all goes well this fallback should never fire
            // clear the other async end events from firing
            self._timerId = undefined;
            self._clearAsync();
            // set the after styles
            // ******** DOM WRITE ****************
            self._playEnd(shouldComplete ? 1 : 0);
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        };
        // set the TRANSITION END event on one of the transition elements
        self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd);
        // set a fallback timeout if the transition end event never fires, or is too slow
        // transition end fallback: (animation duration + XXms)
        self._timerId = setTimeout(onTransitionFallback, (dur + TRANSITION_END_FALLBACK_PADDING_MS));
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playEnd(stepValue) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM WRITE ****************
                child._playEnd(stepValue);
            }
        }
        if (this._hasDur) {
            if (stepValue !== undefined) {
                // too late to have a smooth animation, just finish it
                // ******** DOM WRITE ****************
                this._setTrans(0, true);
                // ensure the ending progress step gets rendered
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
            // set the after styles
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // remove the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(false);
        }
    }
    /**
     * NO DOM
     * RECURSION
     */
    _hasDuration(opts) {
        if (this.getDuration(opts) > DURATION_MIN) {
            return true;
        }
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                if (child._hasDuration(opts)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * NO DOM
     * RECURSION
     */
    _hasDomReads() {
        if (this._readCallbacks && this._readCallbacks.length > 0) {
            return true;
        }
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                if (child._hasDomReads()) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Immediately stop at the end of the animation.
     */
    stop(stepValue = 1) {
        // ensure all past transition end events have been cleared
        this._clearAsync();
        this._hasDur = true;
        this._playEnd(stepValue);
    }
    /**
     * NO DOM
     * NO RECURSION
     */
    _clearAsync() {
        if (this._unregisterTrnsEnd) {
            this._unregisterTrnsEnd();
        }
        if (this._timerId) {
            clearTimeout(this._timerId);
        }
        this._timerId = this._unregisterTrnsEnd = undefined;
    }
    /**
     * DOM WRITE
     * NO RECURSION
     */
    _progress(stepValue) {
        // bread 'n butter
        let val;
        const elements = this._elements;
        const effects = this._fxProperties;
        if (!elements || elements.length === 0 || !effects || this._destroyed) {
            return;
        }
        // flip the number if we're going in reverse
        if (this._isReverse) {
            stepValue = 1 - stepValue;
        }
        let i = 0;
        let j = 0;
        let finalTransform = '';
        let fx;
        for (i = 0; i < effects.length; i++) {
            fx = effects[i];
            if (fx.from && fx.to) {
                const fromNum = fx.from.num;
                const toNum = fx.to.num;
                const tweenEffect = (fromNum !== toNum);
                if (tweenEffect) {
                    this._hasTweenEffect = true;
                }
                if (stepValue === 0) {
                    // FROM
                    val = fx.from.val;
                }
                else if (stepValue === 1) {
                    // TO
                    val = fx.to.val;
                }
                else if (tweenEffect) {
                    // EVERYTHING IN BETWEEN
                    const valNum = (((toNum - fromNum) * stepValue) + fromNum);
                    const unit = fx.to.effectUnit;
                    val = valNum + unit;
                }
                if (val !== null) {
                    const prop = fx.effectName;
                    if (fx.trans) {
                        finalTransform += prop + '(' + val + ') ';
                    }
                    else {
                        for (j = 0; j < elements.length; j++) {
                            // ******** DOM WRITE ****************
                            elements[j].style.setProperty(prop, val);
                        }
                    }
                }
            }
        }
        // place all transforms on the same property
        if (finalTransform.length > 0) {
            if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
                finalTransform += 'translateZ(0px)';
            }
            for (i = 0; i < elements.length; i++) {
                // ******** DOM WRITE ****************
                elements[i].style.setProperty('transform', finalTransform);
                elements[i].style.setProperty('-webkit-transform', finalTransform);
            }
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     */
    _setTrans(dur, forcedLinearEasing) {
        // Transition is not enabled if there are not effects
        const elements = this._elements;
        if (!elements || elements.length === 0 || !this._fxProperties) {
            return;
        }
        // set the TRANSITION properties inline on the element
        const easing = (forcedLinearEasing ? 'linear' : this.getEasing());
        const durString = dur + 'ms';
        for (const { style } of elements) {
            if (dur > 0) {
                // ******** DOM WRITE ****************
                style.transitionDuration = durString;
                // each animation can have a different easing
                if (easing !== null) {
                    // ******** DOM WRITE ****************
                    style.transitionTimingFunction = easing;
                }
            }
            else {
                style.transitionDuration = '0';
            }
        }
    }
    /**
     * DOM READ
     * DOM WRITE
     * RECURSION
     */
    _beforeAnimation() {
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        this._fireBeforeReadFunc();
        // ******** DOM READS ABOVE / DOM WRITES BELOW ****************
        // fire off all the "before" function that have DOM WRITES in them
        // ******** DOM WRITE ****************
        this._fireBeforeWriteFunc();
        // stage all of the before css classes and inline styles
        // ******** DOM WRITE ****************
        this._setBeforeStyles();
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _setBeforeStyles() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._setBeforeStyles();
            }
        }
        const elements = this._elements;
        // before the animations have started
        // only set before styles if animation is not reversed
        if (!elements || elements.length === 0 || this._isReverse) {
            return;
        }
        const addClasses = this._beforeAddClasses;
        const removeClasses = this._beforeRemoveClasses;
        for (const el of elements) {
            const elementClassList = el.classList;
            // css classes to add before the animation
            if (addClasses) {
                for (const c of addClasses) {
                    // ******** DOM WRITE ****************
                    elementClassList.add(c);
                }
            }
            // css classes to remove before the animation
            if (removeClasses) {
                for (const c of removeClasses) {
                    // ******** DOM WRITE ****************
                    elementClassList.remove(c);
                }
            }
            // inline styles to add before the animation
            if (this._beforeStyles) {
                for (const [key, value] of Object.entries(this._beforeStyles)) {
                    // ******** DOM WRITE ****************
                    el.style.setProperty(key, value);
                }
            }
        }
    }
    /**
     * DOM READ
     * RECURSION
     */
    _fireBeforeReadFunc() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM READ ****************
                child._fireBeforeReadFunc();
            }
        }
        const readFunctions = this._readCallbacks;
        if (readFunctions) {
            for (const callback of readFunctions) {
                // ******** DOM READ ****************
                callback();
            }
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _fireBeforeWriteFunc() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM WRITE ****************
                child._fireBeforeWriteFunc();
            }
        }
        const writeFunctions = this._writeCallbacks;
        if (writeFunctions) {
            for (const callback of writeFunctions) {
                // ******** DOM WRITE ****************
                callback();
            }
        }
    }
    /**
     * DOM WRITE
     */
    _setAfterStyles() {
        const elements = this._elements;
        if (!elements) {
            return;
        }
        for (const el of elements) {
            const elementClassList = el.classList;
            // remove the transition duration/easing
            // ******** DOM WRITE ****************
            el.style.transitionDuration = el.style.transitionTimingFunction = '';
            if (this._isReverse) {
                // finished in reverse direction
                // css classes that were added before the animation should be removed
                const beforeAddClasses = this._beforeAddClasses;
                if (beforeAddClasses) {
                    for (const c of beforeAddClasses) {
                        elementClassList.remove(c);
                    }
                }
                // css classes that were removed before the animation should be added
                const beforeRemoveClasses = this._beforeRemoveClasses;
                if (beforeRemoveClasses) {
                    for (const c of beforeRemoveClasses) {
                        elementClassList.add(c);
                    }
                }
                // inline styles that were added before the animation should be removed
                const beforeStyles = this._beforeStyles;
                if (beforeStyles) {
                    for (const propName of Object.keys(beforeStyles)) {
                        // ******** DOM WRITE ****************
                        el.style.removeProperty(propName);
                    }
                }
            }
            else {
                // finished in forward direction
                // css classes to add after the animation
                const afterAddClasses = this._afterAddClasses;
                if (afterAddClasses) {
                    for (const c of afterAddClasses) {
                        // ******** DOM WRITE ****************
                        elementClassList.add(c);
                    }
                }
                // css classes to remove after the animation
                const afterRemoveClasses = this._afterRemoveClasses;
                if (afterRemoveClasses) {
                    for (const c of afterRemoveClasses) {
                        // ******** DOM WRITE ****************
                        elementClassList.remove(c);
                    }
                }
                // inline styles to add after the animation
                const afterStyles = this._afterStyles;
                if (afterStyles) {
                    for (const [key, value] of Object.entries(afterStyles)) {
                        el.style.setProperty(key, value);
                    }
                }
            }
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     */
    _willChange(addWillChange) {
        let wc;
        const effects = this._fxProperties;
        let willChange;
        if (addWillChange && effects) {
            wc = [];
            for (const effect of effects) {
                const propWC = effect.wc;
                if (propWC === 'webkitTransform') {
                    wc.push('transform', '-webkit-transform');
                }
                else if (propWC !== undefined) {
                    wc.push(propWC);
                }
            }
            willChange = wc.join(',');
        }
        else {
            willChange = '';
        }
        const elements = this._elements;
        if (elements) {
            for (const el of elements) {
                // ******** DOM WRITE ****************
                el.style.setProperty('will-change', willChange);
            }
        }
    }
    /**
     * Start the animation with a user controlled progress.
     */
    progressStart() {
        // ensure all past transition end events have been cleared
        this._clearAsync();
        // ******** DOM READ/WRITE ****************
        this._beforeAnimation();
        // ******** DOM WRITE ****************
        this._progressStart();
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _progressStart() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM WRITE ****************
                child._progressStart();
            }
        }
        // force no duration, linear easing
        // ******** DOM WRITE ****************
        this._setTrans(0, true);
        // ******** DOM WRITE ****************
        this._willChange(true);
    }
    /**
     * Set the progress step for this animation.
     * progressStep() is not debounced, so it should not be called faster than 60FPS.
     */
    progressStep(stepValue) {
        // only update if the last update was more than 16ms ago
        stepValue = Math.min(1, Math.max(0, stepValue));
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM WRITE ****************
                child.progressStep(stepValue);
            }
        }
        // ******** DOM WRITE ****************
        this._progress(stepValue);
    }
    /**
     * End the progress animation.
     */
    progressEnd(shouldComplete, currentStepValue, dur = -1) {
        if (this._isReverse) {
            // if the animation is going in reverse then
            // flip the step value: 0 becomes 1, 1 becomes 0
            currentStepValue = 1 - currentStepValue;
        }
        const stepValue = shouldComplete ? 1 : 0;
        const diff = Math.abs(currentStepValue - stepValue);
        if (dur < 0) {
            dur = this._duration || 0;
        }
        else if (diff < 0.05) {
            dur = 0;
        }
        this._isAsync = (dur > 30);
        this._progressEnd(shouldComplete, stepValue, dur, this._isAsync);
        if (this._isAsync) {
            // for the root animation only
            // set the async TRANSITION END event
            // and run onFinishes when the transition ends
            // ******** DOM WRITE ****************
            this._asyncEnd(dur, shouldComplete);
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            if (!this._destroyed) {
                raf(() => {
                    this._playToStep(stepValue);
                });
            }
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _progressEnd(shouldComplete, stepValue, dur, isAsync) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                // ******** DOM WRITE ****************
                child._progressEnd(shouldComplete, stepValue, dur, isAsync);
            }
        }
        if (!isAsync) {
            // stop immediately
            // set all the animations to their final position
            // ******** DOM WRITE ****************
            this._progress(stepValue);
            this._willChange(false);
            this._setAfterStyles();
            this._didFinish(shouldComplete);
        }
        else {
            // animate it back to it's ending position
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true;
            // ******** DOM WRITE ****************
            this._willChange(true);
            this._setTrans(dur, false);
        }
    }
    /**
     * Add a callback to fire when the animation has finished.
     */
    onFinish(callback, opts) {
        if (opts && opts.clearExistingCallbacks) {
            this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
        }
        if (opts && opts.oneTimeCallback) {
            this._onFinishOneTimeCallbacks = this._onFinishOneTimeCallbacks || [];
            this._onFinishOneTimeCallbacks.push(callback);
        }
        else {
            this._onFinishCallbacks = this._onFinishCallbacks || [];
            this._onFinishCallbacks.push(callback);
        }
        return this;
    }
    /**
     * NO DOM
     * RECURSION
     */
    _didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
            }
        }
        if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
            this._didFinish(hasCompleted);
        }
    }
    /**
     * NO RECURSION
     */
    _didFinish(hasCompleted) {
        this.isPlaying = false;
        this.hasCompleted = hasCompleted;
        if (this._onFinishCallbacks) {
            // run all finish callbacks
            for (const callback of this._onFinishCallbacks) {
                callback(this);
            }
        }
        if (this._onFinishOneTimeCallbacks) {
            // run all "onetime" finish callbacks
            for (const callback of this._onFinishOneTimeCallbacks) {
                callback(this);
            }
            this._onFinishOneTimeCallbacks.length = 0;
        }
    }
    /**
     * Reverse the animation.
     */
    reverse(shouldReverse = true) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child.reverse(shouldReverse);
            }
        }
        this._isReverse = !!shouldReverse;
        return this;
    }
    /**
     * Recursively destroy this animation and all child animations.
     */
    destroy() {
        this._didFinish(false);
        this._destroyed = true;
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child.destroy();
            }
        }
        this._clearAsync();
        if (this._elements) {
            this._elements.length = 0;
        }
        if (this._readCallbacks) {
            this._readCallbacks.length = 0;
        }
        if (this._writeCallbacks) {
            this._writeCallbacks.length = 0;
        }
        this.parent = undefined;
        if (this._childAnimations) {
            this._childAnimations.length = 0;
        }
        if (this._onFinishCallbacks) {
            this._onFinishCallbacks.length = 0;
        }
        if (this._onFinishOneTimeCallbacks) {
            this._onFinishOneTimeCallbacks.length = 0;
        }
    }
    /**
     * NO DOM
     */
    _transEl() {
        // get the lowest level element that has an Animator
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                const targetEl = child._transEl();
                if (targetEl) {
                    return targetEl;
                }
            }
        }
        return (this._hasTweenEffect &&
            this._hasDur &&
            this._elements !== undefined &&
            this._elements.length > 0 ?
            this._elements[0] : null);
    }
}

const create = (animationBuilder, baseEl, opts) => {
    if (animationBuilder) {
        return animationBuilder(Animator, baseEl, opts);
    }
    return Promise.resolve(new Animator());
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTY5YzM3ODg1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzREFBc0Q7QUFDMUY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0IiLCJmaWxlIjoiM1xcY2h1bmtzXFwzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdHJhbnNpdGlvbkVuZCA9IChlbCwgY2FsbGJhY2spID0+IHtcclxuICAgIGxldCB1blJlZ1RyYW5zO1xyXG4gICAgY29uc3Qgb3B0cyA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xyXG4gICAgY29uc3QgdW5yZWdpc3RlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAodW5SZWdUcmFucykge1xyXG4gICAgICAgICAgICB1blJlZ1RyYW5zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uVHJhbnNpdGlvbkVuZCA9IChldikgPT4ge1xyXG4gICAgICAgIGlmIChlbCA9PT0gZXYudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHVucmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgb25UcmFuc2l0aW9uRW5kLCBvcHRzKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kLCBvcHRzKTtcclxuICAgICAgICB1blJlZ1RyYW5zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgb25UcmFuc2l0aW9uRW5kLCBvcHRzKTtcclxuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgb3B0cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bnJlZ2lzdGVyO1xyXG59O1xuXG5jb25zdCBDU1NfVkFMVUVfUkVHRVggPSAvKF4tP1xcZCpcXC4/XFxkKikoLiopLztcclxuY29uc3QgRFVSQVRJT05fTUlOID0gMzI7XHJcbmNvbnN0IFRSQU5TSVRJT05fRU5EX0ZBTExCQUNLX1BBRERJTkdfTVMgPSA0MDA7XHJcbmNvbnN0IFRSQU5TRk9STV9QUk9QUyA9IHtcclxuICAgICd0cmFuc2xhdGVYJzogMSxcclxuICAgICd0cmFuc2xhdGVZJzogMSxcclxuICAgICd0cmFuc2xhdGVaJzogMSxcclxuICAgICdzY2FsZSc6IDEsXHJcbiAgICAnc2NhbGVYJzogMSxcclxuICAgICdzY2FsZVknOiAxLFxyXG4gICAgJ3NjYWxlWic6IDEsXHJcbiAgICAncm90YXRlJzogMSxcclxuICAgICdyb3RhdGVYJzogMSxcclxuICAgICdyb3RhdGVZJzogMSxcclxuICAgICdyb3RhdGVaJzogMSxcclxuICAgICdza2V3WCc6IDEsXHJcbiAgICAnc2tld1knOiAxLFxyXG4gICAgJ3BlcnNwZWN0aXZlJzogMVxyXG59O1xyXG5jb25zdCB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xyXG5jb25zdCByYWYgPSB3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICA/IHdpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW4pXHJcbiAgICA6IChmKSA9PiBmKERhdGUubm93KCkpO1xyXG5jbGFzcyBBbmltYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9oYXNEdXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9oYXNUd2VlbkVmZmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzQXN5bmMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc1JldmVyc2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0NoaWxkcmVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYWRkRWxlbWVudChlbCkge1xyXG4gICAgICAgIGlmIChlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkRWwoZWxbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkRWwoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBOTyBET01cclxuICAgICAqL1xyXG4gICAgX2FkZEVsKGVsKSB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICh0aGlzLl9lbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzIHx8IFtdKS5wdXNoKGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGNoaWxkIGFuaW1hdGlvbiB0byB0aGlzIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgYWRkKGNoaWxkQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgY2hpbGRBbmltYXRpb24ucGFyZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLmhhc0NoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5fY2hpbGRBbmltYXRpb25zID0gdGhpcy5fY2hpbGRBbmltYXRpb25zIHx8IFtdKS5wdXNoKGNoaWxkQW5pbWF0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiB0aGlzIGFuaW1hdGlvbi4gSWYgdGhpcyBhbmltYXRpb24gZG9lc1xyXG4gICAgICogbm90IGhhdmUgYSBkdXJhdGlvbiwgdGhlbiBpdCdsbCBnZXQgdGhlIGR1cmF0aW9uIGZyb20gaXRzIHBhcmVudC5cclxuICAgICAqL1xyXG4gICAgZ2V0RHVyYXRpb24ob3B0cykge1xyXG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0cy5kdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXREdXJhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpZiB0aGUgYW5pbWF0aW9uIGlzIGEgcm9vdCBvbmUuXHJcbiAgICAgKi9cclxuICAgIGlzUm9vdCgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMucGFyZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGR1cmF0aW9uIGZvciB0aGlzIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgZHVyYXRpb24obWlsbGlzZWNvbmRzKSB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBtaWxsaXNlY29uZHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZWFzaW5nIG9mIHRoaXMgYW5pbWF0aW9uLiBJZiB0aGlzIGFuaW1hdGlvbiBkb2VzXHJcbiAgICAgKiBub3QgaGF2ZSBhbiBlYXNpbmcsIHRoZW4gaXQnbGwgZ2V0IHRoZSBlYXNpbmcgZnJvbSBpdHMgcGFyZW50LlxyXG4gICAgICovXHJcbiAgICBnZXRFYXNpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmV2ZXJzZSAmJiB0aGlzLl9yZXZlcnNlZEVhc2luZ05hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZWRFYXNpbmdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fZWFzaW5nTmFtZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5fZWFzaW5nTmFtZSA6ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5nZXRFYXNpbmcoKSkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBlYXNpbmcgZm9yIHRoaXMgYW5pbWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBlYXNpbmcobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX2Vhc2luZ05hbWUgPSBuYW1lO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGVhc2luZyBmb3IgdGhpcyByZXZlcnNlZCBhbmltYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGVhc2luZ1JldmVyc2UobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX3JldmVyc2VkRWFzaW5nTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0aGUgXCJmcm9tXCIgdmFsdWUgZm9yIGEgc3BlY2lmaWMgcHJvcGVydHkuXHJcbiAgICAgKi9cclxuICAgIGZyb20ocHJvcCwgdmFsKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkUHJvcCgnZnJvbScsIHByb3AsIHZhbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0aGUgXCJ0b1wiIHZhbHVlIGZvciBhIHNwZWNpZmljIHByb3BlcnR5LlxyXG4gICAgICovXHJcbiAgICB0byhwcm9wLCB2YWwsIGNsZWFyUHJvcGVyeUFmdGVyVHJhbnNpdGlvbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgZnggPSB0aGlzLl9hZGRQcm9wKCd0bycsIHByb3AsIHZhbCk7XHJcbiAgICAgICAgaWYgKGNsZWFyUHJvcGVyeUFmdGVyVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGVmZmVjdCBpcyBhIHRyYW5zZm9ybSB0aGVuIGNsZWFyIHRoZSB0cmFuc2Zvcm0gZWZmZWN0XHJcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBqdXN0IGNsZWFyIHRoZSBhY3R1YWwgcHJvcGVydHlcclxuICAgICAgICAgICAgdGhpcy5hZnRlckNsZWFyU3R5bGVzKGZ4LnRyYW5zID8gWyd0cmFuc2Zvcm0nLCAnLXdlYmtpdC10cmFuc2Zvcm0nXSA6IFtwcm9wXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG9ydGN1dCB0byBhZGQgYm90aCB0aGUgXCJmcm9tXCIgYW5kIFwidG9cIiBmb3IgdGhlIHNhbWUgcHJvcGVydHkuXHJcbiAgICAgKi9cclxuICAgIGZyb21Ubyhwcm9wLCBmcm9tVmFsLCB0b1ZhbCwgY2xlYXJQcm9wZXJ5QWZ0ZXJUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbShwcm9wLCBmcm9tVmFsKS50byhwcm9wLCB0b1ZhbCwgY2xlYXJQcm9wZXJ5QWZ0ZXJUcmFuc2l0aW9uKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTk8gRE9NXHJcbiAgICAgKi9cclxuICAgIF9nZXRQcm9wKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fZnhQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9meFByb3BlcnRpZXMuZmluZChwcm9wID0+IHByb3AuZWZmZWN0TmFtZSA9PT0gbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBfYWRkUHJvcChzdGF0ZSwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgbGV0IGZ4UHJvcCA9IHRoaXMuX2dldFByb3AocHJvcCk7XHJcbiAgICAgICAgaWYgKCFmeFByb3ApIHtcclxuICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB3ZSd2ZSBzZWUgdGhpcyBFZmZlY3RQcm9wZXJ0eVxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRUcmFucyA9IChUUkFOU0ZPUk1fUFJPUFNbcHJvcF0gPT09IDEpO1xyXG4gICAgICAgICAgICBmeFByb3AgPSB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3ROYW1lOiBwcm9wLFxyXG4gICAgICAgICAgICAgICAgdHJhbnM6IHNob3VsZFRyYW5zLFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRoZSB3aWxsLWNoYW5nZSBwcm9wZXJ0eSBmb3IgdHJhbnNmb3JtcyBvciBvcGFjaXR5XHJcbiAgICAgICAgICAgICAgICB3YzogKHNob3VsZFRyYW5zID8gJ3RyYW5zZm9ybScgOiBwcm9wKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAodGhpcy5fZnhQcm9wZXJ0aWVzID0gdGhpcy5fZnhQcm9wZXJ0aWVzIHx8IFtdKS5wdXNoKGZ4UHJvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFkZCBmcm9tL3RvIEVmZmVjdFN0YXRlIHRvIHRoZSBFZmZlY3RQcm9wZXJ0eVxyXG4gICAgICAgIGNvbnN0IGZ4U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgbnVtOiAwLFxyXG4gICAgICAgICAgICBlZmZlY3RVbml0OiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ4UHJvcFtzdGF0ZV0gPSBmeFN0YXRlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwuaW5kZXhPZignICcpIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdmFsLm1hdGNoKENTU19WQUxVRV9SRUdFWCk7XHJcbiAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHJbMV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihudW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnhTdGF0ZS5udW0gPSBudW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmeFN0YXRlLmVmZmVjdFVuaXQgPSAoclswXSAhPT0gclsyXSA/IHJbMl0gOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgZnhTdGF0ZS5udW0gPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmeFByb3A7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBDU1MgY2xhc3MgdG8gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xyXG4gICAgICogYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxyXG4gICAgICovXHJcbiAgICBiZWZvcmVBZGRDbGFzcyhjbGFzc05hbWUpIHtcclxuICAgICAgICAodGhpcy5fYmVmb3JlQWRkQ2xhc3NlcyA9IHRoaXMuX2JlZm9yZUFkZENsYXNzZXMgfHwgW10pLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIENTUyBjbGFzcyBmcm9tIHRoaXMgYW5pbWF0aW9uJ3MgZWxlbWVudHNcclxuICAgICAqIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGJlZ2lucy5cclxuICAgICAqL1xyXG4gICAgYmVmb3JlUmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgKHRoaXMuX2JlZm9yZVJlbW92ZUNsYXNzZXMgPSB0aGlzLl9iZWZvcmVSZW1vdmVDbGFzc2VzIHx8IFtdKS5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldCBDU1MgaW5saW5lIHN0eWxlcyB0byB0aGlzIGFuaW1hdGlvbidzIGVsZW1lbnRzXHJcbiAgICAgKiBiZWZvcmUgdGhlIGFuaW1hdGlvbiBiZWdpbnMuXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZVN0eWxlcyhzdHlsZXMpIHtcclxuICAgICAgICB0aGlzLl9iZWZvcmVTdHlsZXMgPSBzdHlsZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIENTUyBpbmxpbmUgc3R5bGVzIGZyb20gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xyXG4gICAgICogYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxyXG4gICAgICovXHJcbiAgICBiZWZvcmVDbGVhclN0eWxlcyhwcm9wZXJ0eU5hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5fYmVmb3JlU3R5bGVzID0gdGhpcy5fYmVmb3JlU3R5bGVzIHx8IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0eU5hbWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZVN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgZnVuY3Rpb24gd2hpY2ggY29udGFpbnMgRE9NIHJlYWRzLCB3aGljaCB3aWxsIHJ1blxyXG4gICAgICogYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxyXG4gICAgICovXHJcbiAgICBiZWZvcmVBZGRSZWFkKGRvbVJlYWRGbikge1xyXG4gICAgICAgICh0aGlzLl9yZWFkQ2FsbGJhY2tzID0gdGhpcy5fcmVhZENhbGxiYWNrcyB8fCBbXSkucHVzaChkb21SZWFkRm4pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBmdW5jdGlvbiB3aGljaCBjb250YWlucyBET00gd3JpdGVzLCB3aGljaCB3aWxsIHJ1blxyXG4gICAgICogYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxyXG4gICAgICovXHJcbiAgICBiZWZvcmVBZGRXcml0ZShkb21Xcml0ZUZuKSB7XHJcbiAgICAgICAgKHRoaXMuX3dyaXRlQ2FsbGJhY2tzID0gdGhpcy5fd3JpdGVDYWxsYmFja3MgfHwgW10pLnB1c2goZG9tV3JpdGVGbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBDU1MgY2xhc3MgdG8gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xyXG4gICAgICogYWZ0ZXIgdGhlIGFuaW1hdGlvbiBmaW5pc2hlcy5cclxuICAgICAqL1xyXG4gICAgYWZ0ZXJBZGRDbGFzcyhjbGFzc05hbWUpIHtcclxuICAgICAgICAodGhpcy5fYWZ0ZXJBZGRDbGFzc2VzID0gdGhpcy5fYWZ0ZXJBZGRDbGFzc2VzIHx8IFtdKS5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBDU1MgY2xhc3MgZnJvbSB0aGlzIGFuaW1hdGlvbidzIGVsZW1lbnRzXHJcbiAgICAgKiBhZnRlciB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzLlxyXG4gICAgICovXHJcbiAgICBhZnRlclJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xyXG4gICAgICAgICh0aGlzLl9hZnRlclJlbW92ZUNsYXNzZXMgPSB0aGlzLl9hZnRlclJlbW92ZUNsYXNzZXMgfHwgW10pLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IENTUyBpbmxpbmUgc3R5bGVzIHRvIHRoaXMgYW5pbWF0aW9uJ3MgZWxlbWVudHNcclxuICAgICAqIGFmdGVyIHRoZSBhbmltYXRpb24gZmluaXNoZXMuXHJcbiAgICAgKi9cclxuICAgIGFmdGVyU3R5bGVzKHN0eWxlcykge1xyXG4gICAgICAgIHRoaXMuX2FmdGVyU3R5bGVzID0gc3R5bGVzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBDU1MgaW5saW5lIHN0eWxlcyBmcm9tIHRoaXMgYW5pbWF0aW9uJ3MgZWxlbWVudHNcclxuICAgICAqIGFmdGVyIHRoZSBhbmltYXRpb24gZmluaXNoZXMuXHJcbiAgICAgKi9cclxuICAgIGFmdGVyQ2xlYXJTdHlsZXMocHJvcGVydHlOYW1lcykge1xyXG4gICAgICAgIHRoaXMuX2FmdGVyU3R5bGVzID0gdGhpcy5fYWZ0ZXJTdHlsZXMgfHwge307XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BlcnR5TmFtZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWZ0ZXJTdHlsZXNbcHJvcF0gPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBsYXkgdGhlIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgcGxheShvcHRzKSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGFuaW1hdGlvbiB3YXMgYWxyZWFkeSBpbnZhbGlkYXRlZCAoaXQgZGlkIGZpbmlzaCksIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdG9wIGxldmVsIGFuaW1hdGlvbiBhbmQgaXMgaW4gZnVsbCBjb250cm9sXHJcbiAgICAgICAgLy8gb2Ygd2hlbiB0aGUgYXN5bmMgcGxheSgpIHNob3VsZCBhY3R1YWxseSBraWNrIG9mZlxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGR1cmF0aW9uIHRoZW4gaXQnbGwgc2V0IHRoZSBUTyBwcm9wZXJ0eSBpbW1lZGlhdGVseVxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgZHVyYXRpb24sIHRoZW4gaXQnbGwgc3RhZ2UgYWxsIGFuaW1hdGlvbnMgYXQgdGhlXHJcbiAgICAgICAgLy8gRlJPTSBwcm9wZXJ0eSBhbmQgdHJhbnNpdGlvbiBkdXJhdGlvbiwgd2FpdCBhIGZldyBmcmFtZXMsIHRoZW5cclxuICAgICAgICAvLyBraWNrIG9mZiB0aGUgYW5pbWF0aW9uIGJ5IHNldHRpbmcgdGhlIFRPIHByb3BlcnR5IGZvciBlYWNoIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuX2lzQXN5bmMgPSB0aGlzLl9oYXNEdXJhdGlvbihvcHRzKTtcclxuICAgICAgICAvLyBlbnN1cmUgYWxsIHBhc3QgdHJhbnNpdGlvbiBlbmQgZXZlbnRzIGhhdmUgYmVlbiBjbGVhcmVkXHJcbiAgICAgICAgdGhpcy5fY2xlYXJBc3luYygpO1xyXG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGtpY2tzIG9mZiB0aGUgY29ycmVjdCBwcm9ncmVzcyBzdGVwIGZvciBlYWNoIGNoaWxkIGFuaW1hdGlvblxyXG4gICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgdGhpcy5fcGxheUluaXQob3B0cyk7XHJcbiAgICAgICAgLy8gZG91YmxpbmcgdXAgUkFGcyBzaW5jZSB0aGlzIGFuaW1hdGlvbiB3YXMgcHJvYmFibHkgdHJpZ2dlcmVkXHJcbiAgICAgICAgLy8gZnJvbSBhbiBpbnB1dCBldmVudCwgYW5kIGp1c3QgaGF2aW5nIG9uZSBSQUYgd291bGQgaGF2ZSB0aGlzIGNvZGVcclxuICAgICAgICAvLyBydW4gd2l0aGluIHRoZSBzYW1lIGZyYW1lIGFzIHRoZSB0cmlnZ2VyaW5nIGlucHV0IGV2ZW50LCBhbmQgdGhlXHJcbiAgICAgICAgLy8gaW5wdXQgZXZlbnQgcHJvYmFibHkgYWxyZWFkeSBkaWQgd2F5IHRvbyBtdWNoIHdvcmsgZm9yIG9uZSBmcmFtZVxyXG4gICAgICAgIHJhZigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJhZigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5RG9tSW5zcGVjdChvcHRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwbGF5QXN5bmMob3B0cykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkZpbmlzaChyZXNvbHZlLCB7IG9uZVRpbWVDYWxsYmFjazogdHJ1ZSwgY2xlYXJFeGlzdGluZ0NhbGxiYWNrczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KG9wdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHBsYXlTeW5jKCkge1xyXG4gICAgICAgIC8vIElmIHRoZSBhbmltYXRpb24gd2FzIGFscmVhZHkgaW52YWxpZGF0ZWQgKGl0IGRpZCBmaW5pc2gpLCBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IHsgZHVyYXRpb246IDAgfTtcclxuICAgICAgICAgICAgdGhpcy5faXNBc3luYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckFzeW5jKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXlJbml0KG9wdHMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5RG9tSW5zcGVjdChvcHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERPTSBXUklURVxyXG4gICAgICogUkVDVVJTSU9OXHJcbiAgICAgKi9cclxuICAgIF9wbGF5SW5pdChvcHRzKSB7XHJcbiAgICAgICAgLy8gYWx3YXlzIGRlZmF1bHQgdGhhdCBhbiBhbmltYXRpb24gZG9lcyBub3QgdHdlZW5cclxuICAgICAgICAvLyBhIHR3ZWVuIHJlcXVpcmVzIHRoYXQgYW4gQW5pbWF0aW9uIGNsYXNzIGhhcyBhbiBlbGVtZW50XHJcbiAgICAgICAgLy8gYW5kIHRoYXQgaXQgaGFzIGF0IGxlYXN0IG9uZSBGUk9NL1RPIGVmZmVjdFxyXG4gICAgICAgIC8vIGFuZCB0aGF0IHRoZSBGUk9NL1RPIGVmZmVjdCBjYW4gdHdlZW4gbnVtZXJpYyB2YWx1ZXNcclxuICAgICAgICB0aGlzLl9oYXNUd2VlbkVmZmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2hhc0R1ciA9ICh0aGlzLmdldER1cmF0aW9uKG9wdHMpID4gRFVSQVRJT05fTUlOKTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgIGNoaWxkLl9wbGF5SW5pdChvcHRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faGFzRHVyKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgZHVyYXRpb24gdGhlbiB3ZSB3YW50IHRvIHN0YXJ0IGF0IHN0ZXAgMFxyXG4gICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICB0aGlzLl9wcm9ncmVzcygwKTtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSB3aWxsLWNoYW5nZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgIHRoaXMuX3dpbGxDaGFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqIE5PIFJFQ1VSU0lPTlxyXG4gICAgICogUk9PVCBBTklNQVRJT05cclxuICAgICAqL1xyXG4gICAgX3BsYXlEb21JbnNwZWN0KG9wdHMpIHtcclxuICAgICAgICAvLyBmaXJlIG9mZiBhbGwgdGhlIFwiYmVmb3JlXCIgZnVuY3Rpb24gdGhhdCBoYXZlIERPTSBSRUFEUyBpbiB0aGVtXHJcbiAgICAgICAgLy8gZWxlbWVudHMgd2lsbCBiZSBpbiB0aGUgRE9NLCBob3dldmVyIHZpc2liaWx5IGhpZGRlblxyXG4gICAgICAgIC8vIHNvIHdlIGNhbiByZWFkIHRoZWlyIGRpbWVuc2lvbnMgaWYgbmVlZCBiZVxyXG4gICAgICAgIC8vICoqKioqKioqIERPTSBSRUFEICoqKioqKioqKioqKioqKipcclxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIHRoaXMuX2JlZm9yZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIC8vIGZvciB0aGUgcm9vdCBhbmltYXRpb24gb25seVxyXG4gICAgICAgIC8vIHNldCB0aGUgYXN5bmMgVFJBTlNJVElPTiBFTkQgZXZlbnRcclxuICAgICAgICAvLyBhbmQgcnVuIG9uRmluaXNoZXMgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzXHJcbiAgICAgICAgY29uc3QgZHVyID0gdGhpcy5nZXREdXJhdGlvbihvcHRzKTtcclxuICAgICAgICBpZiAodGhpcy5faXNBc3luYykge1xyXG4gICAgICAgICAgICB0aGlzLl9hc3luY0VuZChkdXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIHRoaXMuX3BsYXlQcm9ncmVzcyhvcHRzKTtcclxuICAgICAgICBpZiAodGhpcy5faXNBc3luYyAmJiAhdGhpcy5fZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uIGhhcyBhIGR1cmF0aW9uIHNvIHdlIG5lZWQgYW5vdGhlciBSQUZcclxuICAgICAgICAgICAgLy8gZm9yIHRoZSBDU1MgVFJBTlNJVElPTiBwcm9wZXJ0aWVzIHRvIGtpY2sgaW5cclxuICAgICAgICAgICAgcmFmKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlUb1N0ZXAoMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRE9NIFdSSVRFXHJcbiAgICAgKiBSRUNVUlNJT05cclxuICAgICAqL1xyXG4gICAgX3BsYXlQcm9ncmVzcyhvcHRzKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9jaGlsZEFuaW1hdGlvbnM7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5fcGxheVByb2dyZXNzKG9wdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9oYXNEdXIpIHtcclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBDU1MgVFJBTlNJVElPTiBkdXJhdGlvbi9lYXNpbmdcclxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgdGhpcy5fc2V0VHJhbnModGhpcy5nZXREdXJhdGlvbihvcHRzKSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcyBhbmltYXRpb24gZG9lcyBub3QgaGF2ZSBhIGR1cmF0aW9uLCBzbyBpdCBzaG91bGQgbm90IGFuaW1hdGVcclxuICAgICAgICAgICAgLy8ganVzdCBnbyBzdHJhaWdodCB0byB0aGUgVE8gcHJvcGVydGllcyBhbmQgY2FsbCBpdCBkb25lXHJcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzKDEpO1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVyZSB3YXMgbm8gYW5pbWF0aW9uLCBpbW1lZGlhdGVseSBydW4gdGhlIGFmdGVyXHJcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgIHRoaXMuX3NldEFmdGVyU3R5bGVzKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uIGhhcyBubyBkdXJhdGlvbiwgc28gaXQgaGFzIGZpbmlzaGVkXHJcbiAgICAgICAgICAgIC8vIG90aGVyIGFuaW1hdGlvbnMgY291bGQgc3RpbGwgYmUgcnVubmluZ1xyXG4gICAgICAgICAgICB0aGlzLl9kaWRGaW5pc2godHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfcGxheVRvU3RlcChzdGVwVmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fcGxheVRvU3RlcChzdGVwVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNEdXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGJyb3dzZXIgaGFkIHNvbWUgdGltZSB0byByZW5kZXIgZXZlcnl0aGluZyBpbiBwbGFjZVxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uL2Vhc2luZyBpcyBzZXRcclxuICAgICAgICAgICAgICAgIC8vIG5vdyBzZXQgdGhlIFRPIHByb3BlcnRpZXMgd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSB0cmFuc2l0aW9uIHRvIGJlZ2luXHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3Moc3RlcFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRE9NIFdSSVRFXHJcbiAgICAgKiBOTyBSRUNVUlNJT05cclxuICAgICAqIFJPT1QgQU5JTUFUSU9OXHJcbiAgICAgKi9cclxuICAgIF9hc3luY0VuZChkdXIsIHNob3VsZENvbXBsZXRlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgb25UcmFuc2l0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25ncmF0cyEgYSBzdWNjZXNzZnVsIHRyYW5zaXRpb24gY29tcGxldGVkIVxyXG4gICAgICAgICAgICAvLyBlbnN1cmUgdHJhbnNpdGlvbiBlbmQgZXZlbnRzIGFuZCB0aW1lb3V0cyBoYXZlIGJlZW4gY2xlYXJlZFxyXG4gICAgICAgICAgICBzZWxmLl9jbGVhckFzeW5jKCk7XHJcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgIHNlbGYuX3BsYXlFbmQoKTtcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbiBmaW5pc2hlZFxyXG4gICAgICAgICAgICBzZWxmLl9kaWRGaW5pc2hBbGwoc2hvdWxkQ29tcGxldGUsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uVHJhbnNpdGlvbkZhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBvaCBub3ohIHRoZSB0cmFuc2l0aW9uIGVuZCBldmVudCBkaWRuJ3QgZmlyZSBpbiB0aW1lIVxyXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIHRoZSBmYWxsYmFjayB0aW1lciB3aGVuIGZpcnN0XHJcbiAgICAgICAgICAgIC8vIGlmIGFsbCBnb2VzIHdlbGwgdGhpcyBmYWxsYmFjayBzaG91bGQgbmV2ZXIgZmlyZVxyXG4gICAgICAgICAgICAvLyBjbGVhciB0aGUgb3RoZXIgYXN5bmMgZW5kIGV2ZW50cyBmcm9tIGZpcmluZ1xyXG4gICAgICAgICAgICBzZWxmLl90aW1lcklkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzZWxmLl9jbGVhckFzeW5jKCk7XHJcbiAgICAgICAgICAgIC8vIHNldCB0aGUgYWZ0ZXIgc3R5bGVzXHJcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgIHNlbGYuX3BsYXlFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCk7XHJcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb24gZmluaXNoZWRcclxuICAgICAgICAgICAgc2VsZi5fZGlkRmluaXNoQWxsKHNob3VsZENvbXBsZXRlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzZXQgdGhlIFRSQU5TSVRJT04gRU5EIGV2ZW50IG9uIG9uZSBvZiB0aGUgdHJhbnNpdGlvbiBlbGVtZW50c1xyXG4gICAgICAgIHNlbGYuX3VucmVnaXN0ZXJUcm5zRW5kID0gdHJhbnNpdGlvbkVuZChzZWxmLl90cmFuc0VsKCksIG9uVHJhbnNpdGlvbkVuZCk7XHJcbiAgICAgICAgLy8gc2V0IGEgZmFsbGJhY2sgdGltZW91dCBpZiB0aGUgdHJhbnNpdGlvbiBlbmQgZXZlbnQgbmV2ZXIgZmlyZXMsIG9yIGlzIHRvbyBzbG93XHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbiBlbmQgZmFsbGJhY2s6IChhbmltYXRpb24gZHVyYXRpb24gKyBYWG1zKVxyXG4gICAgICAgIHNlbGYuX3RpbWVySWQgPSBzZXRUaW1lb3V0KG9uVHJhbnNpdGlvbkZhbGxiYWNrLCAoZHVyICsgVFJBTlNJVElPTl9FTkRfRkFMTEJBQ0tfUEFERElOR19NUykpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfcGxheUVuZChzdGVwVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgIGNoaWxkLl9wbGF5RW5kKHN0ZXBWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0R1cikge1xyXG4gICAgICAgICAgICBpZiAoc3RlcFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRvbyBsYXRlIHRvIGhhdmUgYSBzbW9vdGggYW5pbWF0aW9uLCBqdXN0IGZpbmlzaCBpdFxyXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFRyYW5zKDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBlbmRpbmcgcHJvZ3Jlc3Mgc3RlcCBnZXRzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3Moc3RlcFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGFmdGVyIHN0eWxlc1xyXG4gICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICB0aGlzLl9zZXRBZnRlclN0eWxlcygpO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIHdpbGwtY2hhbmdlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgdGhpcy5fd2lsbENoYW5nZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBOTyBET01cclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfaGFzRHVyYXRpb24ob3B0cykge1xyXG4gICAgICAgIGlmICh0aGlzLmdldER1cmF0aW9uKG9wdHMpID4gRFVSQVRJT05fTUlOKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLl9oYXNEdXJhdGlvbihvcHRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTk8gRE9NXHJcbiAgICAgKiBSRUNVUlNJT05cclxuICAgICAqL1xyXG4gICAgX2hhc0RvbVJlYWRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZWFkQ2FsbGJhY2tzICYmIHRoaXMuX3JlYWRDYWxsYmFja3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9jaGlsZEFuaW1hdGlvbnM7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5faGFzRG9tUmVhZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW1tZWRpYXRlbHkgc3RvcCBhdCB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHN0b3Aoc3RlcFZhbHVlID0gMSkge1xyXG4gICAgICAgIC8vIGVuc3VyZSBhbGwgcGFzdCB0cmFuc2l0aW9uIGVuZCBldmVudHMgaGF2ZSBiZWVuIGNsZWFyZWRcclxuICAgICAgICB0aGlzLl9jbGVhckFzeW5jKCk7XHJcbiAgICAgICAgdGhpcy5faGFzRHVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9wbGF5RW5kKHN0ZXBWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE5PIERPTVxyXG4gICAgICogTk8gUkVDVVJTSU9OXHJcbiAgICAgKi9cclxuICAgIF9jbGVhckFzeW5jKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl91bnJlZ2lzdGVyVHJuc0VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl91bnJlZ2lzdGVyVHJuc0VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdGltZXJJZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RpbWVySWQgPSB0aGlzLl91bnJlZ2lzdGVyVHJuc0VuZCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRE9NIFdSSVRFXHJcbiAgICAgKiBOTyBSRUNVUlNJT05cclxuICAgICAqL1xyXG4gICAgX3Byb2dyZXNzKHN0ZXBWYWx1ZSkge1xyXG4gICAgICAgIC8vIGJyZWFkICduIGJ1dHRlclxyXG4gICAgICAgIGxldCB2YWw7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcclxuICAgICAgICBjb25zdCBlZmZlY3RzID0gdGhpcy5fZnhQcm9wZXJ0aWVzO1xyXG4gICAgICAgIGlmICghZWxlbWVudHMgfHwgZWxlbWVudHMubGVuZ3RoID09PSAwIHx8ICFlZmZlY3RzIHx8IHRoaXMuX2Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZsaXAgdGhlIG51bWJlciBpZiB3ZSdyZSBnb2luZyBpbiByZXZlcnNlXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmV2ZXJzZSkge1xyXG4gICAgICAgICAgICBzdGVwVmFsdWUgPSAxIC0gc3RlcFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGxldCBmaW5hbFRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIGxldCBmeDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWZmZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmeCA9IGVmZmVjdHNbaV07XHJcbiAgICAgICAgICAgIGlmIChmeC5mcm9tICYmIGZ4LnRvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tTnVtID0gZnguZnJvbS5udW07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b051bSA9IGZ4LnRvLm51bTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR3ZWVuRWZmZWN0ID0gKGZyb21OdW0gIT09IHRvTnVtKTtcclxuICAgICAgICAgICAgICAgIGlmICh0d2VlbkVmZmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhc1R3ZWVuRWZmZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGVwVmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGUk9NXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gZnguZnJvbS52YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGVwVmFsdWUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUT1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IGZ4LnRvLnZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR3ZWVuRWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRVZFUllUSElORyBJTiBCRVRXRUVOXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsTnVtID0gKCgodG9OdW0gLSBmcm9tTnVtKSAqIHN0ZXBWYWx1ZSkgKyBmcm9tTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0ID0gZngudG8uZWZmZWN0VW5pdDtcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWxOdW0gKyB1bml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmeC5lZmZlY3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmeC50cmFucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRyYW5zZm9ybSArPSBwcm9wICsgJygnICsgdmFsICsgJykgJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBlbGVtZW50cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2pdLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcGxhY2UgYWxsIHRyYW5zZm9ybXMgb24gdGhlIHNhbWUgcHJvcGVydHlcclxuICAgICAgICBpZiAoZmluYWxUcmFuc2Zvcm0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzUmV2ZXJzZSAmJiBzdGVwVmFsdWUgIT09IDEgfHwgdGhpcy5faXNSZXZlcnNlICYmIHN0ZXBWYWx1ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxUcmFuc2Zvcm0gKz0gJ3RyYW5zbGF0ZVooMHB4KSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGZpbmFsVHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLnNldFByb3BlcnR5KCctd2Via2l0LXRyYW5zZm9ybScsIGZpbmFsVHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRE9NIFdSSVRFXHJcbiAgICAgKiBOTyBSRUNVUlNJT05cclxuICAgICAqL1xyXG4gICAgX3NldFRyYW5zKGR1ciwgZm9yY2VkTGluZWFyRWFzaW5nKSB7XHJcbiAgICAgICAgLy8gVHJhbnNpdGlvbiBpcyBub3QgZW5hYmxlZCBpZiB0aGVyZSBhcmUgbm90IGVmZmVjdHNcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzO1xyXG4gICAgICAgIGlmICghZWxlbWVudHMgfHwgZWxlbWVudHMubGVuZ3RoID09PSAwIHx8ICF0aGlzLl9meFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgdGhlIFRSQU5TSVRJT04gcHJvcGVydGllcyBpbmxpbmUgb24gdGhlIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBlYXNpbmcgPSAoZm9yY2VkTGluZWFyRWFzaW5nID8gJ2xpbmVhcicgOiB0aGlzLmdldEVhc2luZygpKTtcclxuICAgICAgICBjb25zdCBkdXJTdHJpbmcgPSBkdXIgKyAnbXMnO1xyXG4gICAgICAgIGZvciAoY29uc3QgeyBzdHlsZSB9IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChkdXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgLy8gZWFjaCBhbmltYXRpb24gY2FuIGhhdmUgYSBkaWZmZXJlbnQgZWFzaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoZWFzaW5nICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERPTSBSRUFEXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfYmVmb3JlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIC8vIGZpcmUgb2ZmIGFsbCB0aGUgXCJiZWZvcmVcIiBmdW5jdGlvbiB0aGF0IGhhdmUgRE9NIFJFQURTIGluIHRoZW1cclxuICAgICAgICAvLyBlbGVtZW50cyB3aWxsIGJlIGluIHRoZSBET00sIGhvd2V2ZXIgdmlzaWJpbHkgaGlkZGVuXHJcbiAgICAgICAgLy8gc28gd2UgY2FuIHJlYWQgdGhlaXIgZGltZW5zaW9ucyBpZiBuZWVkIGJlXHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIHRoaXMuX2ZpcmVCZWZvcmVSZWFkRnVuYygpO1xyXG4gICAgICAgIC8vICoqKioqKioqIERPTSBSRUFEUyBBQk9WRSAvIERPTSBXUklURVMgQkVMT1cgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vIGZpcmUgb2ZmIGFsbCB0aGUgXCJiZWZvcmVcIiBmdW5jdGlvbiB0aGF0IGhhdmUgRE9NIFdSSVRFUyBpbiB0aGVtXHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICB0aGlzLl9maXJlQmVmb3JlV3JpdGVGdW5jKCk7XHJcbiAgICAgICAgLy8gc3RhZ2UgYWxsIG9mIHRoZSBiZWZvcmUgY3NzIGNsYXNzZXMgYW5kIGlubGluZSBzdHlsZXNcclxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIHRoaXMuX3NldEJlZm9yZVN0eWxlcygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfc2V0QmVmb3JlU3R5bGVzKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5fc2V0QmVmb3JlU3R5bGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcclxuICAgICAgICAvLyBiZWZvcmUgdGhlIGFuaW1hdGlvbnMgaGF2ZSBzdGFydGVkXHJcbiAgICAgICAgLy8gb25seSBzZXQgYmVmb3JlIHN0eWxlcyBpZiBhbmltYXRpb24gaXMgbm90IHJldmVyc2VkXHJcbiAgICAgICAgaWYgKCFlbGVtZW50cyB8fCBlbGVtZW50cy5sZW5ndGggPT09IDAgfHwgdGhpcy5faXNSZXZlcnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWRkQ2xhc3NlcyA9IHRoaXMuX2JlZm9yZUFkZENsYXNzZXM7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IHRoaXMuX2JlZm9yZVJlbW92ZUNsYXNzZXM7XHJcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50Q2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xyXG4gICAgICAgICAgICAvLyBjc3MgY2xhc3NlcyB0byBhZGQgYmVmb3JlIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgaWYgKGFkZENsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBhZGRDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3NMaXN0LmFkZChjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjc3MgY2xhc3NlcyB0byByZW1vdmUgYmVmb3JlIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgaWYgKHJlbW92ZUNsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiByZW1vdmVDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3NMaXN0LnJlbW92ZShjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpbmxpbmUgc3R5bGVzIHRvIGFkZCBiZWZvcmUgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYmVmb3JlU3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9iZWZvcmVTdHlsZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRE9NIFJFQURcclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfZmlyZUJlZm9yZVJlYWRGdW5jKCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gUkVBRCAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5fZmlyZUJlZm9yZVJlYWRGdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVhZEZ1bmN0aW9ucyA9IHRoaXMuX3JlYWRDYWxsYmFja3M7XHJcbiAgICAgICAgaWYgKHJlYWRGdW5jdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiByZWFkRnVuY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gUkVBRCAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfZmlyZUJlZm9yZVdyaXRlRnVuYygpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgIGNoaWxkLl9maXJlQmVmb3JlV3JpdGVGdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgd3JpdGVGdW5jdGlvbnMgPSB0aGlzLl93cml0ZUNhbGxiYWNrcztcclxuICAgICAgICBpZiAod3JpdGVGdW5jdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB3cml0ZUZ1bmN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERPTSBXUklURVxyXG4gICAgICovXHJcbiAgICBfc2V0QWZ0ZXJTdHlsZXMoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcclxuICAgICAgICBpZiAoIWVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50Q2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24vZWFzaW5nXHJcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGVsLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNSZXZlcnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaW5pc2hlZCBpbiByZXZlcnNlIGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gY3NzIGNsYXNzZXMgdGhhdCB3ZXJlIGFkZGVkIGJlZm9yZSB0aGUgYW5pbWF0aW9uIHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiZWZvcmVBZGRDbGFzc2VzID0gdGhpcy5fYmVmb3JlQWRkQ2xhc3NlcztcclxuICAgICAgICAgICAgICAgIGlmIChiZWZvcmVBZGRDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGJlZm9yZUFkZENsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzTGlzdC5yZW1vdmUoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY3NzIGNsYXNzZXMgdGhhdCB3ZXJlIHJlbW92ZWQgYmVmb3JlIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIGFkZGVkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiZWZvcmVSZW1vdmVDbGFzc2VzID0gdGhpcy5fYmVmb3JlUmVtb3ZlQ2xhc3NlcztcclxuICAgICAgICAgICAgICAgIGlmIChiZWZvcmVSZW1vdmVDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGJlZm9yZVJlbW92ZUNsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzTGlzdC5hZGQoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaW5saW5lIHN0eWxlcyB0aGF0IHdlcmUgYWRkZWQgYmVmb3JlIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZVN0eWxlcyA9IHRoaXMuX2JlZm9yZVN0eWxlcztcclxuICAgICAgICAgICAgICAgIGlmIChiZWZvcmVTdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKGJlZm9yZVN0eWxlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGZpbmlzaGVkIGluIGZvcndhcmQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyBjc3MgY2xhc3NlcyB0byBhZGQgYWZ0ZXIgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXJBZGRDbGFzc2VzID0gdGhpcy5fYWZ0ZXJBZGRDbGFzc2VzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyQWRkQ2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBhZnRlckFkZENsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzTGlzdC5hZGQoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY3NzIGNsYXNzZXMgdG8gcmVtb3ZlIGFmdGVyIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyUmVtb3ZlQ2xhc3NlcyA9IHRoaXMuX2FmdGVyUmVtb3ZlQ2xhc3NlcztcclxuICAgICAgICAgICAgICAgIGlmIChhZnRlclJlbW92ZUNsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgYWZ0ZXJSZW1vdmVDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGFzc0xpc3QucmVtb3ZlKGMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlubGluZSBzdHlsZXMgdG8gYWRkIGFmdGVyIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyU3R5bGVzID0gdGhpcy5fYWZ0ZXJTdHlsZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXJTdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhZnRlclN0eWxlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBET00gV1JJVEVcclxuICAgICAqIE5PIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfd2lsbENoYW5nZShhZGRXaWxsQ2hhbmdlKSB7XHJcbiAgICAgICAgbGV0IHdjO1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdHMgPSB0aGlzLl9meFByb3BlcnRpZXM7XHJcbiAgICAgICAgbGV0IHdpbGxDaGFuZ2U7XHJcbiAgICAgICAgaWYgKGFkZFdpbGxDaGFuZ2UgJiYgZWZmZWN0cykge1xyXG4gICAgICAgICAgICB3YyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVmZmVjdCBvZiBlZmZlY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wV0MgPSBlZmZlY3Qud2M7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcFdDID09PSAnd2Via2l0VHJhbnNmb3JtJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdjLnB1c2goJ3RyYW5zZm9ybScsICctd2Via2l0LXRyYW5zZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcFdDICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3Yy5wdXNoKHByb3BXQyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2lsbENoYW5nZSA9IHdjLmpvaW4oJywnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbGxDaGFuZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50cztcclxuICAgICAgICBpZiAoZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWxsLWNoYW5nZScsIHdpbGxDaGFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgYW5pbWF0aW9uIHdpdGggYSB1c2VyIGNvbnRyb2xsZWQgcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHByb2dyZXNzU3RhcnQoKSB7XHJcbiAgICAgICAgLy8gZW5zdXJlIGFsbCBwYXN0IHRyYW5zaXRpb24gZW5kIGV2ZW50cyBoYXZlIGJlZW4gY2xlYXJlZFxyXG4gICAgICAgIHRoaXMuX2NsZWFyQXN5bmMoKTtcclxuICAgICAgICAvLyAqKioqKioqKiBET00gUkVBRC9XUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgdGhpcy5fYmVmb3JlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERPTSBXUklURVxyXG4gICAgICogUkVDVVJTSU9OXHJcbiAgICAgKi9cclxuICAgIF9wcm9ncmVzc1N0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgY2hpbGQuX3Byb2dyZXNzU3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3JjZSBubyBkdXJhdGlvbiwgbGluZWFyIGVhc2luZ1xyXG4gICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgdGhpcy5fc2V0VHJhbnMoMCwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICB0aGlzLl93aWxsQ2hhbmdlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHByb2dyZXNzIHN0ZXAgZm9yIHRoaXMgYW5pbWF0aW9uLlxyXG4gICAgICogcHJvZ3Jlc3NTdGVwKCkgaXMgbm90IGRlYm91bmNlZCwgc28gaXQgc2hvdWxkIG5vdCBiZSBjYWxsZWQgZmFzdGVyIHRoYW4gNjBGUFMuXHJcbiAgICAgKi9cclxuICAgIHByb2dyZXNzU3RlcChzdGVwVmFsdWUpIHtcclxuICAgICAgICAvLyBvbmx5IHVwZGF0ZSBpZiB0aGUgbGFzdCB1cGRhdGUgd2FzIG1vcmUgdGhhbiAxNm1zIGFnb1xyXG4gICAgICAgIHN0ZXBWYWx1ZSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHN0ZXBWYWx1ZSkpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJvZ3Jlc3NTdGVwKHN0ZXBWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICB0aGlzLl9wcm9ncmVzcyhzdGVwVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmQgdGhlIHByb2dyZXNzIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUsIGN1cnJlbnRTdGVwVmFsdWUsIGR1ciA9IC0xKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmV2ZXJzZSkge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgYW5pbWF0aW9uIGlzIGdvaW5nIGluIHJldmVyc2UgdGhlblxyXG4gICAgICAgICAgICAvLyBmbGlwIHRoZSBzdGVwIHZhbHVlOiAwIGJlY29tZXMgMSwgMSBiZWNvbWVzIDBcclxuICAgICAgICAgICAgY3VycmVudFN0ZXBWYWx1ZSA9IDEgLSBjdXJyZW50U3RlcFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBzaG91bGRDb21wbGV0ZSA/IDEgOiAwO1xyXG4gICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhjdXJyZW50U3RlcFZhbHVlIC0gc3RlcFZhbHVlKTtcclxuICAgICAgICBpZiAoZHVyIDwgMCkge1xyXG4gICAgICAgICAgICBkdXIgPSB0aGlzLl9kdXJhdGlvbiB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkaWZmIDwgMC4wNSkge1xyXG4gICAgICAgICAgICBkdXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc0FzeW5jID0gKGR1ciA+IDMwKTtcclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlLCBkdXIsIHRoaXMuX2lzQXN5bmMpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0FzeW5jKSB7XHJcbiAgICAgICAgICAgIC8vIGZvciB0aGUgcm9vdCBhbmltYXRpb24gb25seVxyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGFzeW5jIFRSQU5TSVRJT04gRU5EIGV2ZW50XHJcbiAgICAgICAgICAgIC8vIGFuZCBydW4gb25GaW5pc2hlcyB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHNcclxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgdGhpcy5fYXN5bmNFbmQoZHVyLCBzaG91bGRDb21wbGV0ZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uIGhhcyBhIGR1cmF0aW9uIHNvIHdlIG5lZWQgYW5vdGhlciBSQUZcclxuICAgICAgICAgICAgLy8gZm9yIHRoZSBDU1MgVFJBTlNJVElPTiBwcm9wZXJ0aWVzIHRvIGtpY2sgaW5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJhZigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheVRvU3RlcChzdGVwVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERPTSBXUklURVxyXG4gICAgICogUkVDVVJTSU9OXHJcbiAgICAgKi9cclxuICAgIF9wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlLCBkdXIsIGlzQXN5bmMpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgIGNoaWxkLl9wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlLCBkdXIsIGlzQXN5bmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNBc3luYykge1xyXG4gICAgICAgICAgICAvLyBzdG9wIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIC8vIHNldCBhbGwgdGhlIGFuaW1hdGlvbnMgdG8gdGhlaXIgZmluYWwgcG9zaXRpb25cclxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3Moc3RlcFZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5fd2lsbENoYW5nZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEFmdGVyU3R5bGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpZEZpbmlzaChzaG91bGRDb21wbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBhbmltYXRlIGl0IGJhY2sgdG8gaXQncyBlbmRpbmcgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9oYXNEdXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICB0aGlzLl93aWxsQ2hhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRUcmFucyhkdXIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGNhbGxiYWNrIHRvIGZpcmUgd2hlbiB0aGUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZC5cclxuICAgICAqL1xyXG4gICAgb25GaW5pc2goY2FsbGJhY2ssIG9wdHMpIHtcclxuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmNsZWFyRXhpc3RpbmdDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hDYWxsYmFja3MgPSB0aGlzLl9vbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMub25lVGltZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRmluaXNoT25lVGltZUNhbGxiYWNrcyA9IHRoaXMuX29uRmluaXNoT25lVGltZUNhbGxiYWNrcyB8fCBbXTtcclxuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hDYWxsYmFja3MgPSB0aGlzLl9vbkZpbmlzaENhbGxiYWNrcyB8fCBbXTtcclxuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBOTyBET01cclxuICAgICAqIFJFQ1VSU0lPTlxyXG4gICAgICovXHJcbiAgICBfZGlkRmluaXNoQWxsKGhhc0NvbXBsZXRlZCwgZmluaXNoQXN5bmNBbmltYXRpb25zLCBmaW5pc2hOb0R1cmF0aW9uQW5pbWF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5fZGlkRmluaXNoQWxsKGhhc0NvbXBsZXRlZCwgZmluaXNoQXN5bmNBbmltYXRpb25zLCBmaW5pc2hOb0R1cmF0aW9uQW5pbWF0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbmlzaEFzeW5jQW5pbWF0aW9ucyAmJiB0aGlzLl9pc0FzeW5jIHx8IGZpbmlzaE5vRHVyYXRpb25BbmltYXRpb25zICYmICF0aGlzLl9pc0FzeW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpZEZpbmlzaChoYXNDb21wbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTk8gUkVDVVJTSU9OXHJcbiAgICAgKi9cclxuICAgIF9kaWRGaW5pc2goaGFzQ29tcGxldGVkKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGhhc0NvbXBsZXRlZDtcclxuICAgICAgICBpZiAodGhpcy5fb25GaW5pc2hDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgLy8gcnVuIGFsbCBmaW5pc2ggY2FsbGJhY2tzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5fb25GaW5pc2hDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgLy8gcnVuIGFsbCBcIm9uZXRpbWVcIiBmaW5pc2ggY2FsbGJhY2tzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5fb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldmVyc2UgdGhlIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmV2ZXJzZShzaG91bGRSZXZlcnNlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZXZlcnNlKHNob3VsZFJldmVyc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzUmV2ZXJzZSA9ICEhc2hvdWxkUmV2ZXJzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVjdXJzaXZlbHkgZGVzdHJveSB0aGlzIGFuaW1hdGlvbiBhbmQgYWxsIGNoaWxkIGFuaW1hdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGlkRmluaXNoKGZhbHNlKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2xlYXJBc3luYygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50cykge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcmVhZENhbGxiYWNrcykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWFkQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl93cml0ZUNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICB0aGlzLl93cml0ZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5fY2hpbGRBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkQW5pbWF0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb25GaW5pc2hDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hDYWxsYmFja3MubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRmluaXNoT25lVGltZUNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE5PIERPTVxyXG4gICAgICovXHJcbiAgICBfdHJhbnNFbCgpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIGxvd2VzdCBsZXZlbCBlbGVtZW50IHRoYXQgaGFzIGFuIEFuaW1hdG9yXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9jaGlsZEFuaW1hdGlvbnM7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsID0gY2hpbGQuX3RyYW5zRWwoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRFbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoaXMuX2hhc1R3ZWVuRWZmZWN0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2hhc0R1ciAmJlxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50c1swXSA6IG51bGwpO1xyXG4gICAgfVxyXG59XG5cbmNvbnN0IGNyZWF0ZSA9IChhbmltYXRpb25CdWlsZGVyLCBiYXNlRWwsIG9wdHMpID0+IHtcclxuICAgIGlmIChhbmltYXRpb25CdWlsZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbkJ1aWxkZXIoQW5pbWF0b3IsIGJhc2VFbCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBBbmltYXRvcigpKTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9