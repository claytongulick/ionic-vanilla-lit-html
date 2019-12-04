(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js ***!
  \***********************************************************************************/
/*! exports provided: ion_action_sheet_controller, ion_alert_controller, ion_anchor, ion_loading_controller, ion_modal_controller, ion_picker_controller, ion_popover_controller, ion_toast_controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_action_sheet_controller", function() { return ActionSheetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert_controller", function() { return AlertController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading_controller", function() { return LoadingController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal_controller", function() { return ModalController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_controller", function() { return PickerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_popover_controller", function() { return PopoverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast_controller", function() { return ToastController; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const ActionSheetController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create an action sheet overlay with action sheet options.
     *
     * @param options The options to use to create the action sheet.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-action-sheet', options);
    }
    /**
     * Dismiss the open action sheet overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-action-sheet', id);
    }
    /**
     * Get the most recently opened action sheet overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-action-sheet');
    }
};

const AlertController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create an alert overlay with alert options.
     *
     * @param options The options to use to create the alert.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-alert', options);
    }
    /**
     * Dismiss the open alert overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the alert to dismiss. If an id is not provided, it will dismiss the most recently opened alert.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-alert', id);
    }
    /**
     * Get the most recently opened alert overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-alert');
    }
};

const Anchor = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = (ev) => {
            Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(this.href, ev, this.routerDirection);
        };
    }
    componentDidLoad() {
        console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const attrs = {
            href: this.href,
            rel: this.rel
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true, 'ion-activatable': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    }
    static get style() { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; }
};

const LoadingController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a loading overlay with loading options.
     *
     * @param options The options to use to create the loading.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-loading', options);
    }
    /**
     * Dismiss the open loading overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the loading to dismiss. If an id is not provided, it will dismiss the most recently opened loading.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-loading', id);
    }
    /**
     * Get the most recently opened loading overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-loading');
    }
};

const ModalController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a modal overlay with modal options.
     *
     * @param options The options to use to create the modal.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-modal', options);
    }
    /**
     * Dismiss the open modal overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the modal.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the modal to dismiss. If an id is not provided, it will dismiss the most recently opened modal.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-modal', id);
    }
    /**
     * Get the most recently opened modal overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-modal');
    }
};

const PickerController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a picker overlay with picker options.
     *
     * @param options The options to use to create the picker.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-picker', options);
    }
    /**
     * Dismiss the open picker overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the picker to dismiss. If an id is not provided, it will dismiss the most recently opened picker.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-picker', id);
    }
    /**
     * Get the most recently opened picker overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-picker');
    }
};

const PopoverController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a popover overlay with popover options.
     *
     * @param options The options to use to create the popover.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-popover', options);
    }
    /**
     * Dismiss the open popover overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the popover.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-popover', id);
    }
    /**
     * Get the most recently opened popover overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-popover');
    }
};

const ToastController = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a toast overlay with toast options.
     *
     * @param options The options to use to create the toast.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-toast', options);
    }
    /**
     * Dismiss the open toast overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
     * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-toast', id);
    }
    /**
     * Get the most recently opened toast overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-toast');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcl84LmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQzVEO0FBQ29FO0FBQ3RCOztBQUU1RTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLDZEQUE2RCxFQUFFLDREQUFrQixnQkFBZ0Isd0NBQXdDLEdBQUcsRUFBRSwyREFBQyxzQkFBc0IsVUFBVSwyREFBQztBQUN6TTtBQUNBLHdCQUF3QixlQUFlLHlCQUF5Qix5Q0FBeUMsNkJBQTZCLG1CQUFtQixrQkFBa0IsNEJBQTRCLEVBQUUsb0JBQW9CLGtCQUFrQixtQkFBbUIsb0JBQW9CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsb0JBQW9CLGNBQWMsRUFBRTtBQUN6YTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFc1Y7Ozs7Ozs7Ozs7Ozs7QUNuUXRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiNDBcXGNodW5rc1xcNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgaCBhcyBjcmVhdGVPdmVybGF5LCBqIGFzIGRpc21pc3NPdmVybGF5LCBrIGFzIGdldE92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcblxuY29uc3QgQWN0aW9uU2hlZXRDb250cm9sbGVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIGFjdGlvbiBzaGVldCBvdmVybGF5IHdpdGggYWN0aW9uIHNoZWV0IG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2UgdG8gY3JlYXRlIHRoZSBhY3Rpb24gc2hlZXQuXG4gICAgICovXG4gICAgY3JlYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU92ZXJsYXkoJ2lvbi1hY3Rpb24tc2hlZXQnLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgb3BlbiBhY3Rpb24gc2hlZXQgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgYWN0aW9uIHNoZWV0LlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBhY3Rpb24gc2hlZXQuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqIEBwYXJhbSBpZCBUaGUgaWQgb2YgdGhlIGFjdGlvbiBzaGVldCB0byBkaXNtaXNzLiBJZiBhbiBpZCBpcyBub3QgcHJvdmlkZWQsIGl0IHdpbGwgZGlzbWlzcyB0aGUgbW9zdCByZWNlbnRseSBvcGVuZWQgYWN0aW9uIHNoZWV0LlxuICAgICAqL1xuICAgIGRpc21pc3MoZGF0YSwgcm9sZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGRpc21pc3NPdmVybGF5KGRvY3VtZW50LCBkYXRhLCByb2xlLCAnaW9uLWFjdGlvbi1zaGVldCcsIGlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBhY3Rpb24gc2hlZXQgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRUb3AoKSB7XG4gICAgICAgIHJldHVybiBnZXRPdmVybGF5KGRvY3VtZW50LCAnaW9uLWFjdGlvbi1zaGVldCcpO1xuICAgIH1cbn07XG5cbmNvbnN0IEFsZXJ0Q29udHJvbGxlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBhbGVydCBvdmVybGF5IHdpdGggYWxlcnQgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIHVzZSB0byBjcmVhdGUgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVPdmVybGF5KCdpb24tYWxlcnQnLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgb3BlbiBhbGVydCBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBhbGVydC5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgYWxlcnQuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqIEBwYXJhbSBpZCBUaGUgaWQgb2YgdGhlIGFsZXJ0IHRvIGRpc21pc3MuIElmIGFuIGlkIGlzIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBkaXNtaXNzIHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBhbGVydC5cbiAgICAgKi9cbiAgICBkaXNtaXNzKGRhdGEsIHJvbGUsIGlkKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzT3ZlcmxheShkb2N1bWVudCwgZGF0YSwgcm9sZSwgJ2lvbi1hbGVydCcsIGlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBhbGVydCBvdmVybGF5LlxuICAgICAqL1xuICAgIGFzeW5jIGdldFRvcCgpIHtcbiAgICAgICAgcmV0dXJuIGdldE92ZXJsYXkoZG9jdW1lbnQsICdpb24tYWxlcnQnKTtcbiAgICB9XG59O1xuXG5jb25zdCBBbmNob3IgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB1c2luZyBhIHJvdXRlciwgaXQgc3BlY2lmaWVzIHRoZSB0cmFuc2l0aW9uIGRpcmVjdGlvbiB3aGVuIG5hdmlnYXRpbmcgdG9cbiAgICAgICAgICogYW5vdGhlciBwYWdlIHVzaW5nIGBocmVmYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucm91dGVyRGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIG9wZW5VUkwodGhpcy5ocmVmLCBldiwgdGhpcy5yb3V0ZXJEaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tERVBSRUNBVEVEXVtpb24tYW5jaG9yXSBUaGUgPGlvbi1hbmNob3I+IGNvbXBvbmVudCBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGFuIDxpb24tcm91dGVyLWxpbms+IGlmIHlvdSBhcmUgdXNpbmcgYSB2YW5pbGxhIEpTIG9yIFN0ZW5jaWwgcHJvamVjdCBvciBhbiA8YT4gd2l0aCB0aGUgQW5ndWxhciByb3V0ZXIuJyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgICAgaHJlZjogdGhpcy5ocmVmLFxuICAgICAgICAgICAgcmVsOiB0aGlzLnJlbFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIHsgW21vZGVdOiB0cnVlLCAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSB9KSB9LCBoKFwiYVwiLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycyksIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9YXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdH1cIjsgfVxufTtcblxuY29uc3QgTG9hZGluZ0NvbnRyb2xsZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBsb2FkaW5nIG92ZXJsYXkgd2l0aCBsb2FkaW5nIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2UgdG8gY3JlYXRlIHRoZSBsb2FkaW5nLlxuICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVPdmVybGF5KCdpb24tbG9hZGluZycsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBvcGVuIGxvYWRpbmcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgbG9hZGluZy5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgbG9hZGluZy5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICogQHBhcmFtIGlkIFRoZSBpZCBvZiB0aGUgbG9hZGluZyB0byBkaXNtaXNzLiBJZiBhbiBpZCBpcyBub3QgcHJvdmlkZWQsIGl0IHdpbGwgZGlzbWlzcyB0aGUgbW9zdCByZWNlbnRseSBvcGVuZWQgbG9hZGluZy5cbiAgICAgKi9cbiAgICBkaXNtaXNzKGRhdGEsIHJvbGUsIGlkKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzT3ZlcmxheShkb2N1bWVudCwgZGF0YSwgcm9sZSwgJ2lvbi1sb2FkaW5nJywgaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vc3QgcmVjZW50bHkgb3BlbmVkIGxvYWRpbmcgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRUb3AoKSB7XG4gICAgICAgIHJldHVybiBnZXRPdmVybGF5KGRvY3VtZW50LCAnaW9uLWxvYWRpbmcnKTtcbiAgICB9XG59O1xuXG5jb25zdCBNb2RhbENvbnRyb2xsZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBtb2RhbCBvdmVybGF5IHdpdGggbW9kYWwgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIHVzZSB0byBjcmVhdGUgdGhlIG1vZGFsLlxuICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVPdmVybGF5KCdpb24tbW9kYWwnLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgb3BlbiBtb2RhbCBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBtb2RhbC5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgbW9kYWwuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqIEBwYXJhbSBpZCBUaGUgaWQgb2YgdGhlIG1vZGFsIHRvIGRpc21pc3MuIElmIGFuIGlkIGlzIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBkaXNtaXNzIHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBtb2RhbC5cbiAgICAgKi9cbiAgICBkaXNtaXNzKGRhdGEsIHJvbGUsIGlkKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzT3ZlcmxheShkb2N1bWVudCwgZGF0YSwgcm9sZSwgJ2lvbi1tb2RhbCcsIGlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBtb2RhbCBvdmVybGF5LlxuICAgICAqL1xuICAgIGFzeW5jIGdldFRvcCgpIHtcbiAgICAgICAgcmV0dXJuIGdldE92ZXJsYXkoZG9jdW1lbnQsICdpb24tbW9kYWwnKTtcbiAgICB9XG59O1xuXG5jb25zdCBQaWNrZXJDb250cm9sbGVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGlja2VyIG92ZXJsYXkgd2l0aCBwaWNrZXIgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIHVzZSB0byBjcmVhdGUgdGhlIHBpY2tlci5cbiAgICAgKi9cbiAgICBjcmVhdGUob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gY3JlYXRlT3ZlcmxheSgnaW9uLXBpY2tlcicsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBvcGVuIHBpY2tlciBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBwaWNrZXIuXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIHBpY2tlci5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICogQHBhcmFtIGlkIFRoZSBpZCBvZiB0aGUgcGlja2VyIHRvIGRpc21pc3MuIElmIGFuIGlkIGlzIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBkaXNtaXNzIHRoZSBtb3N0IHJlY2VudGx5IG9wZW5lZCBwaWNrZXIuXG4gICAgICovXG4gICAgZGlzbWlzcyhkYXRhLCByb2xlLCBpZCkge1xuICAgICAgICByZXR1cm4gZGlzbWlzc092ZXJsYXkoZG9jdW1lbnQsIGRhdGEsIHJvbGUsICdpb24tcGlja2VyJywgaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vc3QgcmVjZW50bHkgb3BlbmVkIHBpY2tlciBvdmVybGF5LlxuICAgICAqL1xuICAgIGFzeW5jIGdldFRvcCgpIHtcbiAgICAgICAgcmV0dXJuIGdldE92ZXJsYXkoZG9jdW1lbnQsICdpb24tcGlja2VyJyk7XG4gICAgfVxufTtcblxuY29uc3QgUG9wb3ZlckNvbnRyb2xsZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBwb3BvdmVyIG92ZXJsYXkgd2l0aCBwb3BvdmVyIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2UgdG8gY3JlYXRlIHRoZSBwb3BvdmVyLlxuICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVPdmVybGF5KCdpb24tcG9wb3ZlcicsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBvcGVuIHBvcG92ZXIgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgcG9wb3Zlci5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgcG9wb3Zlci5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICogQHBhcmFtIGlkIFRoZSBpZCBvZiB0aGUgcG9wb3ZlciB0byBkaXNtaXNzLiBJZiBhbiBpZCBpcyBub3QgcHJvdmlkZWQsIGl0IHdpbGwgZGlzbWlzcyB0aGUgbW9zdCByZWNlbnRseSBvcGVuZWQgcG9wb3Zlci5cbiAgICAgKi9cbiAgICBkaXNtaXNzKGRhdGEsIHJvbGUsIGlkKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzT3ZlcmxheShkb2N1bWVudCwgZGF0YSwgcm9sZSwgJ2lvbi1wb3BvdmVyJywgaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vc3QgcmVjZW50bHkgb3BlbmVkIHBvcG92ZXIgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRUb3AoKSB7XG4gICAgICAgIHJldHVybiBnZXRPdmVybGF5KGRvY3VtZW50LCAnaW9uLXBvcG92ZXInKTtcbiAgICB9XG59O1xuXG5jb25zdCBUb2FzdENvbnRyb2xsZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSB0b2FzdCBvdmVybGF5IHdpdGggdG9hc3Qgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIHVzZSB0byBjcmVhdGUgdGhlIHRvYXN0LlxuICAgICAqL1xuICAgIGNyZWF0ZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVPdmVybGF5KCdpb24tdG9hc3QnLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgb3BlbiB0b2FzdCBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSB0b2FzdC4gRm9yIGV4YW1wbGUsICdjYW5jZWwnIG9yICdiYWNrZHJvcCcuXG4gICAgICogQHBhcmFtIGlkIFRoZSBpZCBvZiB0aGUgdG9hc3QgdG8gZGlzbWlzcy4gSWYgYW4gaWQgaXMgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGRpc21pc3MgdGhlIG1vc3QgcmVjZW50bHkgb3BlbmVkIHRvYXN0LlxuICAgICAqL1xuICAgIGRpc21pc3MoZGF0YSwgcm9sZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGRpc21pc3NPdmVybGF5KGRvY3VtZW50LCBkYXRhLCByb2xlLCAnaW9uLXRvYXN0JywgaWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vc3QgcmVjZW50bHkgb3BlbmVkIHRvYXN0IG92ZXJsYXkuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VG9wKCkge1xuICAgICAgICByZXR1cm4gZ2V0T3ZlcmxheShkb2N1bWVudCwgJ2lvbi10b2FzdCcpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IEFjdGlvblNoZWV0Q29udHJvbGxlciBhcyBpb25fYWN0aW9uX3NoZWV0X2NvbnRyb2xsZXIsIEFsZXJ0Q29udHJvbGxlciBhcyBpb25fYWxlcnRfY29udHJvbGxlciwgQW5jaG9yIGFzIGlvbl9hbmNob3IsIExvYWRpbmdDb250cm9sbGVyIGFzIGlvbl9sb2FkaW5nX2NvbnRyb2xsZXIsIE1vZGFsQ29udHJvbGxlciBhcyBpb25fbW9kYWxfY29udHJvbGxlciwgUGlja2VyQ29udHJvbGxlciBhcyBpb25fcGlja2VyX2NvbnRyb2xsZXIsIFBvcG92ZXJDb250cm9sbGVyIGFzIGlvbl9wb3BvdmVyX2NvbnRyb2xsZXIsIFRvYXN0Q29udHJvbGxlciBhcyBpb25fdG9hc3RfY29udHJvbGxlciB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==