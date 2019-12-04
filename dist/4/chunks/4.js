(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../node_modules/@ionic/core/dist/esm/input-shims-a4fc53ac.js":
/*!********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/input-shims-a4fc53ac.js ***!
  \********************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");


const cloneMap = new WeakMap();
const relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0) => {
    if (cloneMap.has(componentEl) === shouldRelocate) {
        return;
    }
    if (shouldRelocate) {
        addClone(componentEl, inputEl, inputRelativeY);
    }
    else {
        removeClone(componentEl, inputEl);
    }
};
const isFocused = (input) => {
    return input === input.getRootNode().activeElement;
};
const addClone = (componentEl, inputEl, inputRelativeY) => {
    // this allows for the actual input to receive the focus from
    // the user's touch event, but before it receives focus, it
    // moves the actual input to a location that will not screw
    // up the app's layout, and does not allow the native browser
    // to attempt to scroll the input into place (messing up headers/footers)
    // the cloned input fills the area of where native input should be
    // while the native input fakes out the browser by relocating itself
    // before it receives the actual focus event
    // We hide the focused input (with the visible caret) invisible by making it scale(0),
    const parentEl = inputEl.parentNode;
    // DOM WRITES
    const clonedEl = inputEl.cloneNode(false);
    clonedEl.classList.add('cloned-input');
    clonedEl.tabIndex = -1;
    parentEl.appendChild(clonedEl);
    cloneMap.set(componentEl, clonedEl);
    const doc = componentEl.ownerDocument;
    const tx = doc.dir === 'rtl' ? 9999 : -9999;
    componentEl.style.pointerEvents = 'none';
    inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
const removeClone = (componentEl, inputEl) => {
    const clone = cloneMap.get(componentEl);
    if (clone) {
        cloneMap.delete(componentEl);
        clone.remove();
    }
    componentEl.style.pointerEvents = '';
    inputEl.style.transform = '';
};

const enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
    if (!scrollEl || !inputEl) {
        return () => { return; };
    }
    const scrollHideCaret = (shouldHideCaret) => {
        if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
        }
    };
    const onBlur = () => relocateInput(componentEl, inputEl, false);
    const hideCaret = () => scrollHideCaret(true);
    const showCaret = () => scrollHideCaret(false);
    scrollEl.addEventListener('ionScrollStart', hideCaret);
    scrollEl.addEventListener('ionScrollEnd', showCaret);
    inputEl.addEventListener('blur', onBlur);
    return () => {
        scrollEl.removeEventListener('ionScrollStart', hideCaret);
        scrollEl.removeEventListener('ionScrollEnd', showCaret);
        inputEl.addEventListener('ionBlur', onBlur);
    };
};

const SKIP_SELECTOR = 'input, textarea, [no-blur]';
const enableInputBlurring = () => {
    let focused = true;
    let didScroll = false;
    const doc = document;
    const onScroll = () => {
        didScroll = true;
    };
    const onFocusin = () => {
        focused = true;
    };
    const onTouchend = (ev) => {
        // if app did scroll return early
        if (didScroll) {
            didScroll = false;
            return;
        }
        const active = doc.activeElement;
        if (!active) {
            return;
        }
        // only blur if the active element is a text-input or a textarea
        if (active.matches(SKIP_SELECTOR)) {
            return;
        }
        // if the selected target is the active element, do not blur
        const tapped = ev.target;
        if (tapped === active) {
            return;
        }
        if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
            return;
        }
        focused = false;
        // TODO: find a better way, why 50ms?
        setTimeout(() => {
            if (!focused) {
                active.blur();
            }
        }, 50);
    };
    doc.addEventListener('ionScrollStart', onScroll);
    doc.addEventListener('focusin', onFocusin, true);
    doc.addEventListener('touchend', onTouchend, false);
    return () => {
        doc.removeEventListener('ionScrollStart', onScroll, true);
        doc.removeEventListener('focusin', onFocusin, true);
        doc.removeEventListener('touchend', onTouchend, false);
    };
};

const SCROLL_ASSIST_SPEED = 0.3;
const getScrollData = (componentEl, contentEl, keyboardHeight) => {
    const itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
    return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);
};
const calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
    // compute input's Y values relative to the body
    const inputTop = inputRect.top;
    const inputBottom = inputRect.bottom;
    // compute visible area
    const visibleAreaTop = contentRect.top;
    const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
    // compute safe area
    const safeAreaTop = visibleAreaTop + 15;
    const safeAreaBottom = visibleAreaBottom * 0.5;
    // figure out if each edge of the input is within the safe area
    const distanceToBottom = safeAreaBottom - inputBottom;
    const distanceToTop = safeAreaTop - inputTop;
    // desiredScrollAmount is the negated distance to the safe area according to our calculations.
    const desiredScrollAmount = Math.round((distanceToBottom < 0)
        ? -distanceToBottom
        : (distanceToTop > 0)
            ? -distanceToTop
            : 0);
    // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
    // gets focus, so make sure we don't scroll the input above the visible area
    const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
    const distance = Math.abs(scrollAmount);
    const duration = distance / SCROLL_ASSIST_SPEED;
    const scrollDuration = Math.min(400, Math.max(150, duration));
    return {
        scrollAmount,
        scrollDuration,
        scrollPadding: keyboardHeight,
        inputSafeY: -(inputTop - safeAreaTop) + 4
    };
};

const enableScrollAssist = (componentEl, inputEl, contentEl, keyboardHeight) => {
    let coord;
    const touchStart = (ev) => {
        coord = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
    };
    const touchEnd = (ev) => {
        // input cover touchend/mouseup
        if (!coord) {
            return;
        }
        // get where the touchend/mouseup ended
        const endCoord = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
        // focus this input if the pointer hasn't moved XX pixels
        // and the input doesn't already have focus
        if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.preventDefault();
            ev.stopPropagation();
            // begin the input focus process
            jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight);
        }
    };
    componentEl.addEventListener('touchstart', touchStart, true);
    componentEl.addEventListener('touchend', touchEnd, true);
    return () => {
        componentEl.removeEventListener('touchstart', touchStart, true);
        componentEl.removeEventListener('touchend', touchEnd, true);
    };
};
const jsSetFocus = (componentEl, inputEl, contentEl, keyboardHeight) => {
    const scrollData = getScrollData(componentEl, contentEl, keyboardHeight);
    if (Math.abs(scrollData.scrollAmount) < 4) {
        // the text input is in a safe position that doesn't
        // require it to be scrolled into view, just set focus now
        inputEl.focus();
        return;
    }
    // temporarily move the focus to the focus holder so the browser
    // doesn't freak out while it's trying to get the input in place
    // at this point the native text input still does not have focus
    relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
    inputEl.focus();
    // scroll the input into place
    contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration).then(() => {
        // the scroll view is in the correct position now
        // give the native text input focus
        relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
        // ensure this is the focused input
        inputEl.focus();
    });
};
const hasPointerMoved = (threshold, startCoord, endCoord) => {
    if (startCoord && endCoord) {
        const deltaX = (startCoord.x - endCoord.x);
        const deltaY = (startCoord.y - endCoord.y);
        const distance = deltaX * deltaX + deltaY * deltaY;
        return distance > (threshold * threshold);
    }
    return false;
};

const PADDING_TIMER_KEY = '$ionPaddingTimer';
const enableScrollPadding = (keyboardHeight) => {
    const doc = document;
    const onFocusin = (ev) => {
        setScrollPadding(ev.target, keyboardHeight);
    };
    const onFocusout = (ev) => {
        setScrollPadding(ev.target, 0);
    };
    doc.addEventListener('focusin', onFocusin);
    doc.addEventListener('focusout', onFocusout);
    return () => {
        doc.removeEventListener('focusin', onFocusin);
        doc.removeEventListener('focusout', onFocusout);
    };
};
const setScrollPadding = (input, keyboardHeight) => {
    if (input.tagName !== 'INPUT') {
        return;
    }
    if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
        return;
    }
    if (input.parentElement &&
        input.parentElement.parentElement &&
        input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {
        return;
    }
    const el = input.closest('ion-content');
    if (el === null) {
        return;
    }
    const timer = el[PADDING_TIMER_KEY];
    if (timer) {
        clearTimeout(timer);
    }
    if (keyboardHeight > 0) {
        el.style.setProperty('--keyboard-offset', `${keyboardHeight}px`);
    }
    else {
        el[PADDING_TIMER_KEY] = setTimeout(() => {
            el.style.setProperty('--keyboard-offset', '0px');
        }, 120);
    }
};

const INPUT_BLURRING = true;
const SCROLL_PADDING = true;
const startInputShims = (config) => {
    const doc = document;
    const keyboardHeight = config.getNumber('keyboardHeight', 290);
    const scrollAssist = config.getBoolean('scrollAssist', true);
    const hideCaret = config.getBoolean('hideCaretOnScroll', true);
    const inputBlurring = config.getBoolean('inputBlurring', true);
    const scrollPadding = config.getBoolean('scrollPadding', true);
    const inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
    const hideCaretMap = new WeakMap();
    const scrollAssistMap = new WeakMap();
    const registerInput = (componentEl) => {
        const inputEl = (componentEl.shadowRoot || componentEl).querySelector('input') || (componentEl.shadowRoot || componentEl).querySelector('textarea');
        const scrollEl = componentEl.closest('ion-content');
        if (!inputEl) {
            return;
        }
        if ( !!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
            const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
            hideCaretMap.set(componentEl, rmFn);
        }
        if ( !!scrollEl && scrollAssist && !scrollAssistMap.has(componentEl)) {
            const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, keyboardHeight);
            scrollAssistMap.set(componentEl, rmFn);
        }
    };
    const unregisterInput = (componentEl) => {
        if ( hideCaret) {
            const fn = hideCaretMap.get(componentEl);
            if (fn) {
                fn();
            }
            hideCaretMap.delete(componentEl);
        }
        if ( scrollAssist) {
            const fn = scrollAssistMap.get(componentEl);
            if (fn) {
                fn();
            }
            scrollAssistMap.delete(componentEl);
        }
    };
    if (inputBlurring && INPUT_BLURRING) {
        enableInputBlurring();
    }
    if (scrollPadding && SCROLL_PADDING) {
        enableScrollPadding(keyboardHeight);
    }
    // Input might be already loaded in the DOM before ion-device-hacks did.
    // At this point we need to look for all of the inputs not registered yet
    // and register them.
    for (const input of inputs) {
        registerInput(input);
    }
    doc.addEventListener('ionInputDidLoad', ((ev) => {
        registerInput(ev.detail);
    }));
    doc.addEventListener('ionInputDidUnload', ((ev) => {
        unregisterInput(ev.detail);
    }));
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lucHV0LXNoaW1zLWE0ZmM1M2FjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsR0FBRyxLQUFLLGVBQWU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRTJCIiwiZmlsZSI6IjRcXGNodW5rc1xcNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHAgYXMgcG9pbnRlckNvb3JkIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcblxuY29uc3QgY2xvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xyXG5jb25zdCByZWxvY2F0ZUlucHV0ID0gKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzaG91bGRSZWxvY2F0ZSwgaW5wdXRSZWxhdGl2ZVkgPSAwKSA9PiB7XHJcbiAgICBpZiAoY2xvbmVNYXAuaGFzKGNvbXBvbmVudEVsKSA9PT0gc2hvdWxkUmVsb2NhdGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc2hvdWxkUmVsb2NhdGUpIHtcclxuICAgICAgICBhZGRDbG9uZShjb21wb25lbnRFbCwgaW5wdXRFbCwgaW5wdXRSZWxhdGl2ZVkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xvbmUoY29tcG9uZW50RWwsIGlucHV0RWwpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBpc0ZvY3VzZWQgPSAoaW5wdXQpID0+IHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gaW5wdXQuZ2V0Um9vdE5vZGUoKS5hY3RpdmVFbGVtZW50O1xyXG59O1xyXG5jb25zdCBhZGRDbG9uZSA9IChjb21wb25lbnRFbCwgaW5wdXRFbCwgaW5wdXRSZWxhdGl2ZVkpID0+IHtcclxuICAgIC8vIHRoaXMgYWxsb3dzIGZvciB0aGUgYWN0dWFsIGlucHV0IHRvIHJlY2VpdmUgdGhlIGZvY3VzIGZyb21cclxuICAgIC8vIHRoZSB1c2VyJ3MgdG91Y2ggZXZlbnQsIGJ1dCBiZWZvcmUgaXQgcmVjZWl2ZXMgZm9jdXMsIGl0XHJcbiAgICAvLyBtb3ZlcyB0aGUgYWN0dWFsIGlucHV0IHRvIGEgbG9jYXRpb24gdGhhdCB3aWxsIG5vdCBzY3Jld1xyXG4gICAgLy8gdXAgdGhlIGFwcCdzIGxheW91dCwgYW5kIGRvZXMgbm90IGFsbG93IHRoZSBuYXRpdmUgYnJvd3NlclxyXG4gICAgLy8gdG8gYXR0ZW1wdCB0byBzY3JvbGwgdGhlIGlucHV0IGludG8gcGxhY2UgKG1lc3NpbmcgdXAgaGVhZGVycy9mb290ZXJzKVxyXG4gICAgLy8gdGhlIGNsb25lZCBpbnB1dCBmaWxscyB0aGUgYXJlYSBvZiB3aGVyZSBuYXRpdmUgaW5wdXQgc2hvdWxkIGJlXHJcbiAgICAvLyB3aGlsZSB0aGUgbmF0aXZlIGlucHV0IGZha2VzIG91dCB0aGUgYnJvd3NlciBieSByZWxvY2F0aW5nIGl0c2VsZlxyXG4gICAgLy8gYmVmb3JlIGl0IHJlY2VpdmVzIHRoZSBhY3R1YWwgZm9jdXMgZXZlbnRcclxuICAgIC8vIFdlIGhpZGUgdGhlIGZvY3VzZWQgaW5wdXQgKHdpdGggdGhlIHZpc2libGUgY2FyZXQpIGludmlzaWJsZSBieSBtYWtpbmcgaXQgc2NhbGUoMCksXHJcbiAgICBjb25zdCBwYXJlbnRFbCA9IGlucHV0RWwucGFyZW50Tm9kZTtcclxuICAgIC8vIERPTSBXUklURVNcclxuICAgIGNvbnN0IGNsb25lZEVsID0gaW5wdXRFbC5jbG9uZU5vZGUoZmFsc2UpO1xyXG4gICAgY2xvbmVkRWwuY2xhc3NMaXN0LmFkZCgnY2xvbmVkLWlucHV0Jyk7XHJcbiAgICBjbG9uZWRFbC50YWJJbmRleCA9IC0xO1xyXG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoY2xvbmVkRWwpO1xyXG4gICAgY2xvbmVNYXAuc2V0KGNvbXBvbmVudEVsLCBjbG9uZWRFbCk7XHJcbiAgICBjb25zdCBkb2MgPSBjb21wb25lbnRFbC5vd25lckRvY3VtZW50O1xyXG4gICAgY29uc3QgdHggPSBkb2MuZGlyID09PSAncnRsJyA/IDk5OTkgOiAtOTk5OTtcclxuICAgIGNvbXBvbmVudEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICBpbnB1dEVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3R4fXB4LCR7aW5wdXRSZWxhdGl2ZVl9cHgsMCkgc2NhbGUoMClgO1xyXG59O1xyXG5jb25zdCByZW1vdmVDbG9uZSA9IChjb21wb25lbnRFbCwgaW5wdXRFbCkgPT4ge1xyXG4gICAgY29uc3QgY2xvbmUgPSBjbG9uZU1hcC5nZXQoY29tcG9uZW50RWwpO1xyXG4gICAgaWYgKGNsb25lKSB7XHJcbiAgICAgICAgY2xvbmVNYXAuZGVsZXRlKGNvbXBvbmVudEVsKTtcclxuICAgICAgICBjbG9uZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcclxuICAgIGlucHV0RWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbn07XG5cbmNvbnN0IGVuYWJsZUhpZGVDYXJldE9uU2Nyb2xsID0gKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzY3JvbGxFbCkgPT4ge1xyXG4gICAgaWYgKCFzY3JvbGxFbCB8fCAhaW5wdXRFbCkge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IHJldHVybjsgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNjcm9sbEhpZGVDYXJldCA9IChzaG91bGRIaWRlQ2FyZXQpID0+IHtcclxuICAgICAgICBpZiAoaXNGb2N1c2VkKGlucHV0RWwpKSB7XHJcbiAgICAgICAgICAgIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIHNob3VsZEhpZGVDYXJldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uQmx1ciA9ICgpID0+IHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIGZhbHNlKTtcclxuICAgIGNvbnN0IGhpZGVDYXJldCA9ICgpID0+IHNjcm9sbEhpZGVDYXJldCh0cnVlKTtcclxuICAgIGNvbnN0IHNob3dDYXJldCA9ICgpID0+IHNjcm9sbEhpZGVDYXJldChmYWxzZSk7XHJcbiAgICBzY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdpb25TY3JvbGxTdGFydCcsIGhpZGVDYXJldCk7XHJcbiAgICBzY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdpb25TY3JvbGxFbmQnLCBzaG93Q2FyZXQpO1xyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsU3RhcnQnLCBoaWRlQ2FyZXQpO1xyXG4gICAgICAgIHNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvblNjcm9sbEVuZCcsIHNob3dDYXJldCk7XHJcbiAgICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpb25CbHVyJywgb25CbHVyKTtcclxuICAgIH07XHJcbn07XG5cbmNvbnN0IFNLSVBfU0VMRUNUT1IgPSAnaW5wdXQsIHRleHRhcmVhLCBbbm8tYmx1cl0nO1xyXG5jb25zdCBlbmFibGVJbnB1dEJsdXJyaW5nID0gKCkgPT4ge1xyXG4gICAgbGV0IGZvY3VzZWQgPSB0cnVlO1xyXG4gICAgbGV0IGRpZFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XHJcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBkaWRTY3JvbGwgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRm9jdXNpbiA9ICgpID0+IHtcclxuICAgICAgICBmb2N1c2VkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvblRvdWNoZW5kID0gKGV2KSA9PiB7XHJcbiAgICAgICAgLy8gaWYgYXBwIGRpZCBzY3JvbGwgcmV0dXJuIGVhcmx5XHJcbiAgICAgICAgaWYgKGRpZFNjcm9sbCkge1xyXG4gICAgICAgICAgICBkaWRTY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhY3RpdmUgPSBkb2MuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG9ubHkgYmx1ciBpZiB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgYSB0ZXh0LWlucHV0IG9yIGEgdGV4dGFyZWFcclxuICAgICAgICBpZiAoYWN0aXZlLm1hdGNoZXMoU0tJUF9TRUxFQ1RPUikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgdGFyZ2V0IGlzIHRoZSBhY3RpdmUgZWxlbWVudCwgZG8gbm90IGJsdXJcclxuICAgICAgICBjb25zdCB0YXBwZWQgPSBldi50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcHBlZCA9PT0gYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhcHBlZC5tYXRjaGVzKFNLSVBfU0VMRUNUT1IpIHx8IHRhcHBlZC5jbG9zZXN0KFNLSVBfU0VMRUNUT1IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5LCB3aHkgNTBtcz9cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFmb2N1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUuYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgfTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25TY3JvbGxTdGFydCcsIG9uU2Nyb2xsKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luLCB0cnVlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hlbmQsIGZhbHNlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvblNjcm9sbFN0YXJ0Jywgb25TY3JvbGwsIHRydWUpO1xyXG4gICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luLCB0cnVlKTtcclxuICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoZW5kLCBmYWxzZSk7XHJcbiAgICB9O1xyXG59O1xuXG5jb25zdCBTQ1JPTExfQVNTSVNUX1NQRUVEID0gMC4zO1xyXG5jb25zdCBnZXRTY3JvbGxEYXRhID0gKGNvbXBvbmVudEVsLCBjb250ZW50RWwsIGtleWJvYXJkSGVpZ2h0KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtRWwgPSBjb21wb25lbnRFbC5jbG9zZXN0KCdpb24taXRlbSxbaW9uLWl0ZW1dJykgfHwgY29tcG9uZW50RWw7XHJcbiAgICByZXR1cm4gY2FsY1Njcm9sbERhdGEoaXRlbUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBjb250ZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGtleWJvYXJkSGVpZ2h0LCBjb21wb25lbnRFbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVySGVpZ2h0KTtcclxufTtcclxuY29uc3QgY2FsY1Njcm9sbERhdGEgPSAoaW5wdXRSZWN0LCBjb250ZW50UmVjdCwga2V5Ym9hcmRIZWlnaHQsIHBsYXRmb3JtSGVpZ2h0KSA9PiB7XHJcbiAgICAvLyBjb21wdXRlIGlucHV0J3MgWSB2YWx1ZXMgcmVsYXRpdmUgdG8gdGhlIGJvZHlcclxuICAgIGNvbnN0IGlucHV0VG9wID0gaW5wdXRSZWN0LnRvcDtcclxuICAgIGNvbnN0IGlucHV0Qm90dG9tID0gaW5wdXRSZWN0LmJvdHRvbTtcclxuICAgIC8vIGNvbXB1dGUgdmlzaWJsZSBhcmVhXHJcbiAgICBjb25zdCB2aXNpYmxlQXJlYVRvcCA9IGNvbnRlbnRSZWN0LnRvcDtcclxuICAgIGNvbnN0IHZpc2libGVBcmVhQm90dG9tID0gTWF0aC5taW4oY29udGVudFJlY3QuYm90dG9tLCBwbGF0Zm9ybUhlaWdodCAtIGtleWJvYXJkSGVpZ2h0KTtcclxuICAgIC8vIGNvbXB1dGUgc2FmZSBhcmVhXHJcbiAgICBjb25zdCBzYWZlQXJlYVRvcCA9IHZpc2libGVBcmVhVG9wICsgMTU7XHJcbiAgICBjb25zdCBzYWZlQXJlYUJvdHRvbSA9IHZpc2libGVBcmVhQm90dG9tICogMC41O1xyXG4gICAgLy8gZmlndXJlIG91dCBpZiBlYWNoIGVkZ2Ugb2YgdGhlIGlucHV0IGlzIHdpdGhpbiB0aGUgc2FmZSBhcmVhXHJcbiAgICBjb25zdCBkaXN0YW5jZVRvQm90dG9tID0gc2FmZUFyZWFCb3R0b20gLSBpbnB1dEJvdHRvbTtcclxuICAgIGNvbnN0IGRpc3RhbmNlVG9Ub3AgPSBzYWZlQXJlYVRvcCAtIGlucHV0VG9wO1xyXG4gICAgLy8gZGVzaXJlZFNjcm9sbEFtb3VudCBpcyB0aGUgbmVnYXRlZCBkaXN0YW5jZSB0byB0aGUgc2FmZSBhcmVhIGFjY29yZGluZyB0byBvdXIgY2FsY3VsYXRpb25zLlxyXG4gICAgY29uc3QgZGVzaXJlZFNjcm9sbEFtb3VudCA9IE1hdGgucm91bmQoKGRpc3RhbmNlVG9Cb3R0b20gPCAwKVxyXG4gICAgICAgID8gLWRpc3RhbmNlVG9Cb3R0b21cclxuICAgICAgICA6IChkaXN0YW5jZVRvVG9wID4gMClcclxuICAgICAgICAgICAgPyAtZGlzdGFuY2VUb1RvcFxyXG4gICAgICAgICAgICA6IDApO1xyXG4gICAgLy8gb3VyIGNhbGN1bGF0aW9ucyBtYWtlIHNvbWUgYXNzdW1wdGlvbnMgdGhhdCBhcmVuJ3QgYWx3YXlzIHRydWUsIGxpa2UgdGhlIGtleWJvYXJkIGJlaW5nIGNsb3NlZCB3aGVuIGFuIGlucHV0XHJcbiAgICAvLyBnZXRzIGZvY3VzLCBzbyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2Nyb2xsIHRoZSBpbnB1dCBhYm92ZSB0aGUgdmlzaWJsZSBhcmVhXHJcbiAgICBjb25zdCBzY3JvbGxBbW91bnQgPSBNYXRoLm1pbihkZXNpcmVkU2Nyb2xsQW1vdW50LCBpbnB1dFRvcCAtIHZpc2libGVBcmVhVG9wKTtcclxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoc2Nyb2xsQW1vdW50KTtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyBTQ1JPTExfQVNTSVNUX1NQRUVEO1xyXG4gICAgY29uc3Qgc2Nyb2xsRHVyYXRpb24gPSBNYXRoLm1pbig0MDAsIE1hdGgubWF4KDE1MCwgZHVyYXRpb24pKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2Nyb2xsQW1vdW50LFxyXG4gICAgICAgIHNjcm9sbER1cmF0aW9uLFxyXG4gICAgICAgIHNjcm9sbFBhZGRpbmc6IGtleWJvYXJkSGVpZ2h0LFxyXG4gICAgICAgIGlucHV0U2FmZVk6IC0oaW5wdXRUb3AgLSBzYWZlQXJlYVRvcCkgKyA0XHJcbiAgICB9O1xyXG59O1xuXG5jb25zdCBlbmFibGVTY3JvbGxBc3Npc3QgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIGNvbnRlbnRFbCwga2V5Ym9hcmRIZWlnaHQpID0+IHtcclxuICAgIGxldCBjb29yZDtcclxuICAgIGNvbnN0IHRvdWNoU3RhcnQgPSAoZXYpID0+IHtcclxuICAgICAgICBjb29yZCA9IHBvaW50ZXJDb29yZChldik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG91Y2hFbmQgPSAoZXYpID0+IHtcclxuICAgICAgICAvLyBpbnB1dCBjb3ZlciB0b3VjaGVuZC9tb3VzZXVwXHJcbiAgICAgICAgaWYgKCFjb29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGdldCB3aGVyZSB0aGUgdG91Y2hlbmQvbW91c2V1cCBlbmRlZFxyXG4gICAgICAgIGNvbnN0IGVuZENvb3JkID0gcG9pbnRlckNvb3JkKGV2KTtcclxuICAgICAgICAvLyBmb2N1cyB0aGlzIGlucHV0IGlmIHRoZSBwb2ludGVyIGhhc24ndCBtb3ZlZCBYWCBwaXhlbHNcclxuICAgICAgICAvLyBhbmQgdGhlIGlucHV0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGZvY3VzXHJcbiAgICAgICAgaWYgKCFoYXNQb2ludGVyTW92ZWQoNiwgY29vcmQsIGVuZENvb3JkKSAmJiAhaXNGb2N1c2VkKGlucHV0RWwpKSB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBiZWdpbiB0aGUgaW5wdXQgZm9jdXMgcHJvY2Vzc1xyXG4gICAgICAgICAgICBqc1NldEZvY3VzKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBjb250ZW50RWwsIGtleWJvYXJkSGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQsIHRydWUpO1xyXG4gICAgY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNvbXBvbmVudEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0LCB0cnVlKTtcclxuICAgICAgICBjb21wb25lbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kLCB0cnVlKTtcclxuICAgIH07XHJcbn07XHJcbmNvbnN0IGpzU2V0Rm9jdXMgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIGNvbnRlbnRFbCwga2V5Ym9hcmRIZWlnaHQpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbERhdGEgPSBnZXRTY3JvbGxEYXRhKGNvbXBvbmVudEVsLCBjb250ZW50RWwsIGtleWJvYXJkSGVpZ2h0KTtcclxuICAgIGlmIChNYXRoLmFicyhzY3JvbGxEYXRhLnNjcm9sbEFtb3VudCkgPCA0KSB7XHJcbiAgICAgICAgLy8gdGhlIHRleHQgaW5wdXQgaXMgaW4gYSBzYWZlIHBvc2l0aW9uIHRoYXQgZG9lc24ndFxyXG4gICAgICAgIC8vIHJlcXVpcmUgaXQgdG8gYmUgc2Nyb2xsZWQgaW50byB2aWV3LCBqdXN0IHNldCBmb2N1cyBub3dcclxuICAgICAgICBpbnB1dEVsLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdGVtcG9yYXJpbHkgbW92ZSB0aGUgZm9jdXMgdG8gdGhlIGZvY3VzIGhvbGRlciBzbyB0aGUgYnJvd3NlclxyXG4gICAgLy8gZG9lc24ndCBmcmVhayBvdXQgd2hpbGUgaXQncyB0cnlpbmcgdG8gZ2V0IHRoZSBpbnB1dCBpbiBwbGFjZVxyXG4gICAgLy8gYXQgdGhpcyBwb2ludCB0aGUgbmF0aXZlIHRleHQgaW5wdXQgc3RpbGwgZG9lcyBub3QgaGF2ZSBmb2N1c1xyXG4gICAgcmVsb2NhdGVJbnB1dChjb21wb25lbnRFbCwgaW5wdXRFbCwgdHJ1ZSwgc2Nyb2xsRGF0YS5pbnB1dFNhZmVZKTtcclxuICAgIGlucHV0RWwuZm9jdXMoKTtcclxuICAgIC8vIHNjcm9sbCB0aGUgaW5wdXQgaW50byBwbGFjZVxyXG4gICAgY29udGVudEVsLnNjcm9sbEJ5UG9pbnQoMCwgc2Nyb2xsRGF0YS5zY3JvbGxBbW91bnQsIHNjcm9sbERhdGEuc2Nyb2xsRHVyYXRpb24pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIHRoZSBzY3JvbGwgdmlldyBpcyBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiBub3dcclxuICAgICAgICAvLyBnaXZlIHRoZSBuYXRpdmUgdGV4dCBpbnB1dCBmb2N1c1xyXG4gICAgICAgIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIGZhbHNlLCBzY3JvbGxEYXRhLmlucHV0U2FmZVkpO1xyXG4gICAgICAgIC8vIGVuc3VyZSB0aGlzIGlzIHRoZSBmb2N1c2VkIGlucHV0XHJcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGhhc1BvaW50ZXJNb3ZlZCA9ICh0aHJlc2hvbGQsIHN0YXJ0Q29vcmQsIGVuZENvb3JkKSA9PiB7XHJcbiAgICBpZiAoc3RhcnRDb29yZCAmJiBlbmRDb29yZCkge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IChzdGFydENvb3JkLnggLSBlbmRDb29yZC54KTtcclxuICAgICAgICBjb25zdCBkZWx0YVkgPSAoc3RhcnRDb29yZC55IC0gZW5kQ29vcmQueSk7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlID4gKHRocmVzaG9sZCAqIHRocmVzaG9sZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmNvbnN0IFBBRERJTkdfVElNRVJfS0VZID0gJyRpb25QYWRkaW5nVGltZXInO1xyXG5jb25zdCBlbmFibGVTY3JvbGxQYWRkaW5nID0gKGtleWJvYXJkSGVpZ2h0KSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcclxuICAgIGNvbnN0IG9uRm9jdXNpbiA9IChldikgPT4ge1xyXG4gICAgICAgIHNldFNjcm9sbFBhZGRpbmcoZXYudGFyZ2V0LCBrZXlib2FyZEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25Gb2N1c291dCA9IChldikgPT4ge1xyXG4gICAgICAgIHNldFNjcm9sbFBhZGRpbmcoZXYudGFyZ2V0LCAwKTtcclxuICAgIH07XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xyXG4gICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xyXG4gICAgfTtcclxufTtcclxuY29uc3Qgc2V0U2Nyb2xsUGFkZGluZyA9IChpbnB1dCwga2V5Ym9hcmRIZWlnaHQpID0+IHtcclxuICAgIGlmIChpbnB1dC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQgJiYgaW5wdXQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSAnSU9OLUlOUFVUJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpbnB1dC5wYXJlbnRFbGVtZW50ICYmXHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdJT04tU0VBUkNIQkFSJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gaW5wdXQuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcclxuICAgIGlmIChlbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVyID0gZWxbUEFERElOR19USU1FUl9LRVldO1xyXG4gICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH1cclxuICAgIGlmIChrZXlib2FyZEhlaWdodCA+IDApIHtcclxuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1rZXlib2FyZC1vZmZzZXQnLCBgJHtrZXlib2FyZEhlaWdodH1weGApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWxbUEFERElOR19USU1FUl9LRVldID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWtleWJvYXJkLW9mZnNldCcsICcwcHgnKTtcclxuICAgICAgICB9LCAxMjApO1xyXG4gICAgfVxyXG59O1xuXG5jb25zdCBJTlBVVF9CTFVSUklORyA9IHRydWU7XHJcbmNvbnN0IFNDUk9MTF9QQURESU5HID0gdHJ1ZTtcclxuY29uc3Qgc3RhcnRJbnB1dFNoaW1zID0gKGNvbmZpZykgPT4ge1xyXG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XHJcbiAgICBjb25zdCBrZXlib2FyZEhlaWdodCA9IGNvbmZpZy5nZXROdW1iZXIoJ2tleWJvYXJkSGVpZ2h0JywgMjkwKTtcclxuICAgIGNvbnN0IHNjcm9sbEFzc2lzdCA9IGNvbmZpZy5nZXRCb29sZWFuKCdzY3JvbGxBc3Npc3QnLCB0cnVlKTtcclxuICAgIGNvbnN0IGhpZGVDYXJldCA9IGNvbmZpZy5nZXRCb29sZWFuKCdoaWRlQ2FyZXRPblNjcm9sbCcsIHRydWUpO1xyXG4gICAgY29uc3QgaW5wdXRCbHVycmluZyA9IGNvbmZpZy5nZXRCb29sZWFuKCdpbnB1dEJsdXJyaW5nJywgdHJ1ZSk7XHJcbiAgICBjb25zdCBzY3JvbGxQYWRkaW5nID0gY29uZmlnLmdldEJvb2xlYW4oJ3Njcm9sbFBhZGRpbmcnLCB0cnVlKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1pbnB1dCwgaW9uLXRleHRhcmVhJykpO1xyXG4gICAgY29uc3QgaGlkZUNhcmV0TWFwID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGNvbnN0IHNjcm9sbEFzc2lzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBjb25zdCByZWdpc3RlcklucHV0ID0gKGNvbXBvbmVudEVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRFbCA9IChjb21wb25lbnRFbC5zaGFkb3dSb290IHx8IGNvbXBvbmVudEVsKS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIHx8IChjb21wb25lbnRFbC5zaGFkb3dSb290IHx8IGNvbXBvbmVudEVsKS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEVsID0gY29tcG9uZW50RWwuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcclxuICAgICAgICBpZiAoIWlucHV0RWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoICEhc2Nyb2xsRWwgJiYgaGlkZUNhcmV0ICYmICFoaWRlQ2FyZXRNYXAuaGFzKGNvbXBvbmVudEVsKSkge1xyXG4gICAgICAgICAgICBjb25zdCBybUZuID0gZW5hYmxlSGlkZUNhcmV0T25TY3JvbGwoY29tcG9uZW50RWwsIGlucHV0RWwsIHNjcm9sbEVsKTtcclxuICAgICAgICAgICAgaGlkZUNhcmV0TWFwLnNldChjb21wb25lbnRFbCwgcm1Gbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggISFzY3JvbGxFbCAmJiBzY3JvbGxBc3Npc3QgJiYgIXNjcm9sbEFzc2lzdE1hcC5oYXMoY29tcG9uZW50RWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJtRm4gPSBlbmFibGVTY3JvbGxBc3Npc3QoY29tcG9uZW50RWwsIGlucHV0RWwsIHNjcm9sbEVsLCBrZXlib2FyZEhlaWdodCk7XHJcbiAgICAgICAgICAgIHNjcm9sbEFzc2lzdE1hcC5zZXQoY29tcG9uZW50RWwsIHJtRm4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCB1bnJlZ2lzdGVySW5wdXQgPSAoY29tcG9uZW50RWwpID0+IHtcclxuICAgICAgICBpZiAoIGhpZGVDYXJldCkge1xyXG4gICAgICAgICAgICBjb25zdCBmbiA9IGhpZGVDYXJldE1hcC5nZXQoY29tcG9uZW50RWwpO1xyXG4gICAgICAgICAgICBpZiAoZm4pIHtcclxuICAgICAgICAgICAgICAgIGZuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGlkZUNhcmV0TWFwLmRlbGV0ZShjb21wb25lbnRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggc2Nyb2xsQXNzaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZuID0gc2Nyb2xsQXNzaXN0TWFwLmdldChjb21wb25lbnRFbCk7XHJcbiAgICAgICAgICAgIGlmIChmbikge1xyXG4gICAgICAgICAgICAgICAgZm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzY3JvbGxBc3Npc3RNYXAuZGVsZXRlKGNvbXBvbmVudEVsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKGlucHV0Qmx1cnJpbmcgJiYgSU5QVVRfQkxVUlJJTkcpIHtcclxuICAgICAgICBlbmFibGVJbnB1dEJsdXJyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Nyb2xsUGFkZGluZyAmJiBTQ1JPTExfUEFERElORykge1xyXG4gICAgICAgIGVuYWJsZVNjcm9sbFBhZGRpbmcoa2V5Ym9hcmRIZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgLy8gSW5wdXQgbWlnaHQgYmUgYWxyZWFkeSBsb2FkZWQgaW4gdGhlIERPTSBiZWZvcmUgaW9uLWRldmljZS1oYWNrcyBkaWQuXHJcbiAgICAvLyBBdCB0aGlzIHBvaW50IHdlIG5lZWQgdG8gbG9vayBmb3IgYWxsIG9mIHRoZSBpbnB1dHMgbm90IHJlZ2lzdGVyZWQgeWV0XHJcbiAgICAvLyBhbmQgcmVnaXN0ZXIgdGhlbS5cclxuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKSB7XHJcbiAgICAgICAgcmVnaXN0ZXJJbnB1dChpbnB1dCk7XHJcbiAgICB9XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uSW5wdXREaWRMb2FkJywgKChldikgPT4ge1xyXG4gICAgICAgIHJlZ2lzdGVySW5wdXQoZXYuZGV0YWlsKTtcclxuICAgIH0pKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25JbnB1dERpZFVubG9hZCcsICgoZXYpID0+IHtcclxuICAgICAgICB1bnJlZ2lzdGVySW5wdXQoZXYuZGV0YWlsKTtcclxuICAgIH0pKTtcclxufTtcblxuZXhwb3J0IHsgc3RhcnRJbnB1dFNoaW1zIH07XG4iXSwic291cmNlUm9vdCI6IiJ9