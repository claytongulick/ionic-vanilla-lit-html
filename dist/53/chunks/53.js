(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js":
/*!******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_chip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_chip", function() { return Chip; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");




const Chip = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Display an outline style button.
         */
        this.outline = false;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true, 'chip-outline': this.outline, 'ion-activatable': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
    }
    static get style() { return ":host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.12);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb),.12)}:host(.ion-color.activated){background:rgba(var(--ion-color-base-rgb),.16)}:host(.chip-outline){border-width:1px;border-style:solid;border-color:rgba(0,0,0,.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb),.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0,0,0,.04)}:host(.chip-outline.activated:not(.ion-color)){background:rgba(0,0,0,.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0,0,0,.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none;--background:rgba(var(--ion-text-color-rgb,0,0,0),0.16)}:host(.activated){--background:rgba(var(--ion-text-color-rgb,0,0,0),0.2)}\@media (any-hover:hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb,0,0,0),0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb),.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb,0,0,0),.04)}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1jaGlwLWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQzVEO0FBQ2dDOztBQUU5RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsc0NBQXNDLEVBQUUsNERBQWtCLGdCQUFnQixzRUFBc0UsR0FBRyxFQUFFLDJEQUFDLGlDQUFpQywyREFBQztBQUNqTjtBQUNBLHdCQUF3QixlQUFlLHdEQUF3RCxtREFBbUQsbUJBQW1CLGtDQUFrQyxtQ0FBbUMsZ0JBQWdCLGlCQUFpQixlQUFlLGtCQUFrQixrQkFBa0IsbUJBQW1CLGdCQUFnQixtQkFBbUIsMkJBQTJCLG9CQUFvQixrQkFBa0Isc0JBQXNCLG1CQUFtQixZQUFZLDZCQUE2QixtQkFBbUIsMkNBQTJDLGVBQWUsY0FBYyxlQUFlLGdCQUFnQixzQkFBc0IsOEJBQThCLHNCQUFzQiw2RkFBNkYsTUFBTSxrQkFBa0IsbUJBQW1CLHlCQUF5Qix3QkFBd0IsdUJBQXVCLHNCQUFzQixtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5QixrQkFBa0IsK0NBQStDLDZCQUE2Qix3QkFBd0IsK0NBQStDLDRCQUE0QiwrQ0FBK0MscUJBQXFCLGlCQUFpQixtQkFBbUIsNkJBQTZCLHVCQUF1QiwrQkFBK0IsaURBQWlELDJDQUEyQywyQkFBMkIsK0NBQStDLDJCQUEyQixvQkFBb0IsZUFBZSw0Q0FBNEMsc0JBQXNCLGdDQUFnQyxpQkFBaUIsaUJBQWlCLGdCQUFnQixtQkFBbUIsNkZBQTZGLGdDQUFnQyxrQkFBa0IsbUJBQW1CLDBCQUEwQix5QkFBeUIsdUJBQXVCLHVCQUF1QiwrQkFBK0IsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLDZGQUE2RiwrQkFBK0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isc0JBQXNCLFdBQVcsWUFBWSxrQ0FBa0MsaUJBQWlCLGlCQUFpQixnQkFBZ0IsbUJBQW1CLDZGQUE2RixrQ0FBa0Msa0JBQWtCLG1CQUFtQiwwQkFBMEIseUJBQXlCLHVCQUF1Qix1QkFBdUIsaUNBQWlDLGdCQUFnQixrQkFBa0IsZ0JBQWdCLG1CQUFtQiw2RkFBNkYsaUNBQWlDLGtCQUFrQixtQkFBbUIseUJBQXlCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLGNBQWMsYUFBYSx3REFBd0Qsa0JBQWtCLHVEQUF1RCwwQkFBMEIsY0FBYyx3REFBd0Qsd0JBQXdCLCtDQUErQywyQ0FBMkMsc0RBQXNELEVBQUU7QUFDeGxIOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ25CNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiI1M1xcY2h1bmtzXFw1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBDaGlwID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgYW4gb3V0bGluZSBzdHlsZSBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm91dGxpbmUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUsICdjaGlwLW91dGxpbmUnOiB0aGlzLm91dGxpbmUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlIH0pIH0sIGgoXCJzbG90XCIsIG51bGwpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMTIpOy0tY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuODcpO2JvcmRlci1yYWRpdXM6MTZweDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDttYXJnaW4tbGVmdDo0cHg7bWFyZ2luLXJpZ2h0OjRweDttYXJnaW4tdG9wOjRweDttYXJnaW4tYm90dG9tOjRweDtwYWRkaW5nLWxlZnQ6MTJweDtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy10b3A6N3B4O3BhZGRpbmctYm90dG9tOjdweDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjMycHg7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjE7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo0cHg7bWFyZ2luLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjRweDttYXJnaW4taW5saW5lLWVuZDo0cHg7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHh9fTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4wOCk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXNoYWRlKX06aG9zdCguaW9uLWNvbG9yOmZvY3VzKXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMTIpfTpob3N0KC5pb24tY29sb3IuYWN0aXZhdGVkKXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMTYpfTpob3N0KC5jaGlwLW91dGxpbmUpe2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zMik7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguY2hpcC1vdXRsaW5lLmlvbi1jb2xvcil7Ym9yZGVyLWNvbG9yOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMzIpfTpob3N0KC5jaGlwLW91dGxpbmU6bm90KC5pb24tY29sb3IpOmZvY3VzKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX06aG9zdCguY2hpcC1vdXRsaW5lLmFjdGl2YXRlZDpub3QoLmlvbi1jb2xvcikpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDgpfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjIwcHh9Omhvc3QoOm5vdCguaW9uLWNvbG9yKSkgOjpzbG90dGVkKGlvbi1pY29uKXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9OjpzbG90dGVkKGlvbi1pY29uOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDotNHB4O21hcmdpbi1yaWdodDo4cHg7bWFyZ2luLXRvcDotNHB4O21hcmdpbi1ib3R0b206LTRweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKGlvbi1pY29uOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LTRweDttYXJnaW4taW5saW5lLXN0YXJ0Oi00cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHh9fTo6c2xvdHRlZChpb24taWNvbjpsYXN0LWNoaWxkKXttYXJnaW4tbGVmdDo4cHg7bWFyZ2luLXJpZ2h0Oi00cHg7bWFyZ2luLXRvcDotNHB4O21hcmdpbi1ib3R0b206LTRweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKGlvbi1pY29uOmxhc3QtY2hpbGQpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo4cHg7bWFyZ2luLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1tYXJnaW4tZW5kOi00cHg7bWFyZ2luLWlubGluZS1lbmQ6LTRweH19OjpzbG90dGVkKGlvbi1hdmF0YXIpe3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9OjpzbG90dGVkKGlvbi1hdmF0YXI6Zmlyc3QtY2hpbGQpe21hcmdpbi1sZWZ0Oi04cHg7bWFyZ2luLXJpZ2h0OjhweDttYXJnaW4tdG9wOi00cHg7bWFyZ2luLWJvdHRvbTotNHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoaW9uLWF2YXRhcjpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0Oi04cHg7bWFyZ2luLWlubGluZS1zdGFydDotOHB4Oy13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4fX06OnNsb3R0ZWQoaW9uLWF2YXRhcjpsYXN0LWNoaWxkKXttYXJnaW4tbGVmdDo4cHg7bWFyZ2luLXJpZ2h0Oi04cHg7bWFyZ2luLXRvcDotNHB4O21hcmdpbi1ib3R0b206LTRweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKGlvbi1hdmF0YXI6bGFzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjhweDttYXJnaW4taW5saW5lLXN0YXJ0OjhweDstd2Via2l0LW1hcmdpbi1lbmQ6LThweDttYXJnaW4taW5saW5lLWVuZDotOHB4fX06aG9zdCg6Zm9jdXMpe291dGxpbmU6bm9uZTstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMTYpfTpob3N0KC5hY3RpdmF0ZWQpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC4yKX1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXs6aG9zdCg6aG92ZXIpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC4xNil9Omhvc3QoLmlvbi1jb2xvcjpob3Zlcil7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjEyKX06aG9zdCguY2hpcC1vdXRsaW5lOm5vdCguaW9uLWNvbG9yKTpob3Zlcil7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjA0KX19XCI7IH1cbn07XG5cbmV4cG9ydCB7IENoaXAgYXMgaW9uX2NoaXAgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=