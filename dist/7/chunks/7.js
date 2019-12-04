(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "../node_modules/@ionic/core/dist/esm/tap-click-ca00ce7f.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/tap-click-ca00ce7f.js ***!
  \******************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");


const startTapClick = (config) => {
    let lastTouch = -MOUSE_WAIT * 10;
    let lastActivated = 0;
    let scrollingEl;
    let activatableEle;
    let activeRipple;
    let activeDefer;
    const useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
    const clearDefers = new WeakMap();
    const isScrolling = () => {
        return scrollingEl !== undefined && scrollingEl.parentElement !== null;
    };
    // Touch Events
    const onTouchStart = (ev) => {
        lastTouch = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev);
        pointerDown(ev);
    };
    const onTouchEnd = (ev) => {
        lastTouch = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev);
        pointerUp(ev);
    };
    const onMouseDown = (ev) => {
        const t = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerDown(ev);
        }
    };
    const onMouseUp = (ev) => {
        const t = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerUp(ev);
        }
    };
    const cancelActive = () => {
        clearTimeout(activeDefer);
        activeDefer = undefined;
        if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
        }
    };
    const pointerDown = (ev) => {
        if (activatableEle || isScrolling()) {
            return;
        }
        scrollingEl = undefined;
        setActivatedElement(getActivatableTarget(ev), ev);
    };
    const pointerUp = (ev) => {
        setActivatedElement(undefined, ev);
    };
    const setActivatedElement = (el, ev) => {
        // do nothing
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(activeDefer);
        activeDefer = undefined;
        const { x, y } = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
        // deactivate selected
        if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                addActivated(activatableEle, x, y);
            }
            removeActivated(true);
        }
        // activate
        if (el) {
            const deferId = clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                clearDefers.delete(el);
            }
            const delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(() => {
                addActivated(el, x, y);
                activeDefer = undefined;
            }, delay);
        }
        activatableEle = el;
    };
    const addActivated = (el, x, y) => {
        lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        const rippleEffect = useRippleEffect && getRippleEffect(el);
        if (rippleEffect && rippleEffect.addRipple) {
            removeRipple();
            activeRipple = rippleEffect.addRipple(x, y);
        }
    };
    const removeRipple = () => {
        if (activeRipple !== undefined) {
            activeRipple.then(remove => remove());
            activeRipple = undefined;
        }
    };
    const removeActivated = (smooth) => {
        removeRipple();
        const active = activatableEle;
        if (!active) {
            return;
        }
        const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
        if (smooth && time > 0 && !isInstant(active)) {
            const deferId = setTimeout(() => {
                active.classList.remove(ACTIVATED);
                clearDefers.delete(active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
        }
        else {
            active.classList.remove(ACTIVATED);
        }
    };
    const doc = document;
    doc.addEventListener('ionScrollStart', ev => {
        scrollingEl = ev.target;
        cancelActive();
    });
    doc.addEventListener('ionScrollEnd', () => {
        scrollingEl = undefined;
    });
    doc.addEventListener('ionGestureCaptured', cancelActive);
    doc.addEventListener('touchstart', onTouchStart, true);
    doc.addEventListener('touchcancel', onTouchEnd, true);
    doc.addEventListener('touchend', onTouchEnd, true);
    doc.addEventListener('mousedown', onMouseDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
};
const getActivatableTarget = (ev) => {
    if (ev.composedPath) {
        const path = ev.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            const el = path[i];
            if (el.classList && el.classList.contains('ion-activatable')) {
                return el;
            }
        }
    }
    else {
        return ev.target.closest('.ion-activatable');
    }
};
const isInstant = (el) => {
    return el.classList.contains('ion-activatable-instant');
};
const getRippleEffect = (el) => {
    if (el.shadowRoot) {
        const ripple = el.shadowRoot.querySelector('ion-ripple-effect');
        if (ripple) {
            return ripple;
        }
    }
    return el.querySelector('ion-ripple-effect');
};
const ACTIVATED = 'activated';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RhcC1jbGljay1jYTAwY2U3Zi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQW9FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4REFBRztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOERBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPLEdBQUcsOERBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5QiIsImZpbGUiOiI3XFxjaHVua3NcXDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuIGFzIG5vdywgcCBhcyBwb2ludGVyQ29vcmQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuXG5jb25zdCBzdGFydFRhcENsaWNrID0gKGNvbmZpZykgPT4ge1xyXG4gICAgbGV0IGxhc3RUb3VjaCA9IC1NT1VTRV9XQUlUICogMTA7XHJcbiAgICBsZXQgbGFzdEFjdGl2YXRlZCA9IDA7XHJcbiAgICBsZXQgc2Nyb2xsaW5nRWw7XHJcbiAgICBsZXQgYWN0aXZhdGFibGVFbGU7XHJcbiAgICBsZXQgYWN0aXZlUmlwcGxlO1xyXG4gICAgbGV0IGFjdGl2ZURlZmVyO1xyXG4gICAgY29uc3QgdXNlUmlwcGxlRWZmZWN0ID0gY29uZmlnLmdldEJvb2xlYW4oJ2FuaW1hdGVkJywgdHJ1ZSkgJiYgY29uZmlnLmdldEJvb2xlYW4oJ3JpcHBsZUVmZmVjdCcsIHRydWUpO1xyXG4gICAgY29uc3QgY2xlYXJEZWZlcnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgY29uc3QgaXNTY3JvbGxpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNjcm9sbGluZ0VsICE9PSB1bmRlZmluZWQgJiYgc2Nyb2xsaW5nRWwucGFyZW50RWxlbWVudCAhPT0gbnVsbDtcclxuICAgIH07XHJcbiAgICAvLyBUb3VjaCBFdmVudHNcclxuICAgIGNvbnN0IG9uVG91Y2hTdGFydCA9IChldikgPT4ge1xyXG4gICAgICAgIGxhc3RUb3VjaCA9IG5vdyhldik7XHJcbiAgICAgICAgcG9pbnRlckRvd24oZXYpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uVG91Y2hFbmQgPSAoZXYpID0+IHtcclxuICAgICAgICBsYXN0VG91Y2ggPSBub3coZXYpO1xyXG4gICAgICAgIHBvaW50ZXJVcChldik7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSAoZXYpID0+IHtcclxuICAgICAgICBjb25zdCB0ID0gbm93KGV2KSAtIE1PVVNFX1dBSVQ7XHJcbiAgICAgICAgaWYgKGxhc3RUb3VjaCA8IHQpIHtcclxuICAgICAgICAgICAgcG9pbnRlckRvd24oZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAoZXYpID0+IHtcclxuICAgICAgICBjb25zdCB0ID0gbm93KGV2KSAtIE1PVVNFX1dBSVQ7XHJcbiAgICAgICAgaWYgKGxhc3RUb3VjaCA8IHQpIHtcclxuICAgICAgICAgICAgcG9pbnRlclVwKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2FuY2VsQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChhY3RpdmVEZWZlcik7XHJcbiAgICAgICAgYWN0aXZlRGVmZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGFjdGl2YXRhYmxlRWxlKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUFjdGl2YXRlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIGFjdGl2YXRhYmxlRWxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBwb2ludGVyRG93biA9IChldikgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmF0YWJsZUVsZSB8fCBpc1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Nyb2xsaW5nRWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgc2V0QWN0aXZhdGVkRWxlbWVudChnZXRBY3RpdmF0YWJsZVRhcmdldChldiksIGV2KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwb2ludGVyVXAgPSAoZXYpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmF0ZWRFbGVtZW50KHVuZGVmaW5lZCwgZXYpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldEFjdGl2YXRlZEVsZW1lbnQgPSAoZWwsIGV2KSA9PiB7XHJcbiAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgIGlmIChlbCAmJiBlbCA9PT0gYWN0aXZhdGFibGVFbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclRpbWVvdXQoYWN0aXZlRGVmZXIpO1xyXG4gICAgICAgIGFjdGl2ZURlZmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnRlckNvb3JkKGV2KTtcclxuICAgICAgICAvLyBkZWFjdGl2YXRlIHNlbGVjdGVkXHJcbiAgICAgICAgaWYgKGFjdGl2YXRhYmxlRWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChjbGVhckRlZmVycy5oYXMoYWN0aXZhdGFibGVFbGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludGVybmFsIGVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0YWJsZUVsZS5jbGFzc0xpc3QuY29udGFpbnMoQUNUSVZBVEVEKSkge1xyXG4gICAgICAgICAgICAgICAgYWRkQWN0aXZhdGVkKGFjdGl2YXRhYmxlRWxlLCB4LCB5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW1vdmVBY3RpdmF0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFjdGl2YXRlXHJcbiAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmVySWQgPSBjbGVhckRlZmVycy5nZXQoZWwpO1xyXG4gICAgICAgICAgICBpZiAoZGVmZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlZmVySWQpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJEZWZlcnMuZGVsZXRlKGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IGlzSW5zdGFudChlbCkgPyAwIDogQUREX0FDVElWQVRFRF9ERUZFUlM7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoQUNUSVZBVEVEKTtcclxuICAgICAgICAgICAgYWN0aXZlRGVmZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZEFjdGl2YXRlZChlbCwgeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVEZWZlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY3RpdmF0YWJsZUVsZSA9IGVsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFkZEFjdGl2YXRlZCA9IChlbCwgeCwgeSkgPT4ge1xyXG4gICAgICAgIGxhc3RBY3RpdmF0ZWQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoQUNUSVZBVEVEKTtcclxuICAgICAgICBjb25zdCByaXBwbGVFZmZlY3QgPSB1c2VSaXBwbGVFZmZlY3QgJiYgZ2V0UmlwcGxlRWZmZWN0KGVsKTtcclxuICAgICAgICBpZiAocmlwcGxlRWZmZWN0ICYmIHJpcHBsZUVmZmVjdC5hZGRSaXBwbGUpIHtcclxuICAgICAgICAgICAgcmVtb3ZlUmlwcGxlKCk7XHJcbiAgICAgICAgICAgIGFjdGl2ZVJpcHBsZSA9IHJpcHBsZUVmZmVjdC5hZGRSaXBwbGUoeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZVJpcHBsZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlUmlwcGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYWN0aXZlUmlwcGxlLnRoZW4ocmVtb3ZlID0+IHJlbW92ZSgpKTtcclxuICAgICAgICAgICAgYWN0aXZlUmlwcGxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmVBY3RpdmF0ZWQgPSAoc21vb3RoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlUmlwcGxlKCk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gYWN0aXZhdGFibGVFbGU7XHJcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aW1lID0gQ0xFQVJfU1RBVEVfREVGRVJTIC0gRGF0ZS5ub3coKSArIGxhc3RBY3RpdmF0ZWQ7XHJcbiAgICAgICAgaWYgKHNtb290aCAmJiB0aW1lID4gMCAmJiAhaXNJbnN0YW50KGFjdGl2ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVmZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQUNUSVZBVEVEKTtcclxuICAgICAgICAgICAgICAgIGNsZWFyRGVmZXJzLmRlbGV0ZShhY3RpdmUpO1xyXG4gICAgICAgICAgICB9LCBDTEVBUl9TVEFURV9ERUZFUlMpO1xyXG4gICAgICAgICAgICBjbGVhckRlZmVycy5zZXQoYWN0aXZlLCBkZWZlcklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKEFDVElWQVRFRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2lvblNjcm9sbFN0YXJ0JywgZXYgPT4ge1xyXG4gICAgICAgIHNjcm9sbGluZ0VsID0gZXYudGFyZ2V0O1xyXG4gICAgICAgIGNhbmNlbEFjdGl2ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsRW5kJywgKCkgPT4ge1xyXG4gICAgICAgIHNjcm9sbGluZ0VsID0gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uR2VzdHVyZUNhcHR1cmVkJywgY2FuY2VsQWN0aXZlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCB0cnVlKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG9uVG91Y2hFbmQsIHRydWUpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgdHJ1ZSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24sIHRydWUpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXAsIHRydWUpO1xyXG59O1xyXG5jb25zdCBnZXRBY3RpdmF0YWJsZVRhcmdldCA9IChldikgPT4ge1xyXG4gICAgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gcGF0aFtpXTtcclxuICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1hY3RpdmF0YWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZXYudGFyZ2V0LmNsb3Nlc3QoJy5pb24tYWN0aXZhdGFibGUnKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgaXNJbnN0YW50ID0gKGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tYWN0aXZhdGFibGUtaW5zdGFudCcpO1xyXG59O1xyXG5jb25zdCBnZXRSaXBwbGVFZmZlY3QgPSAoZWwpID0+IHtcclxuICAgIGlmIChlbC5zaGFkb3dSb290KSB7XHJcbiAgICAgICAgY29uc3QgcmlwcGxlID0gZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpb24tcmlwcGxlLWVmZmVjdCcpO1xyXG4gICAgICAgIGlmIChyaXBwbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJpcHBsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWwucXVlcnlTZWxlY3RvcignaW9uLXJpcHBsZS1lZmZlY3QnKTtcclxufTtcclxuY29uc3QgQUNUSVZBVEVEID0gJ2FjdGl2YXRlZCc7XHJcbmNvbnN0IEFERF9BQ1RJVkFURURfREVGRVJTID0gMjAwO1xyXG5jb25zdCBDTEVBUl9TVEFURV9ERUZFUlMgPSAyMDA7XHJcbmNvbnN0IE1PVVNFX1dBSVQgPSAyNTAwO1xuXG5leHBvcnQgeyBzdGFydFRhcENsaWNrIH07XG4iXSwic291cmNlUm9vdCI6IiJ9