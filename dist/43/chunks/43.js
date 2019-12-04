(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");




const Avatar = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}"; }
};

const Badge = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { [mode]: true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}"; }
};

const Thumbnail = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    static get style() { return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1hdmF0YXJfMy1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDNUQ7QUFDZ0M7O0FBRTlEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxRQUFRLDJEQUFVLFFBQVEsRUFBRSwyREFBQztBQUN0RDtBQUNBLHdCQUF3QixlQUFlLG1DQUFtQyxjQUFjLGtDQUFrQyxtQ0FBbUMsV0FBVyxZQUFZLG9CQUFvQixpQkFBaUIsZ0JBQWdCLE1BQU0sb0JBQW9CLFdBQVcsWUFBWSxFQUFFO0FBQzVSOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsc0NBQXNDLEVBQUUsNERBQWtCLGdCQUFnQixlQUFlLEdBQUcsRUFBRSwyREFBQztBQUN4SDtBQUNBLHdCQUF3QixlQUFlLDhDQUE4QywrQ0FBK0Msa0JBQWtCLGtCQUFrQixxQkFBcUIsb0JBQW9CLGtDQUFrQyxtQ0FBbUMsa0NBQWtDLGlDQUFpQywrQkFBK0IscUNBQXFDLHFCQUFxQixlQUFlLDZCQUE2QixtQkFBbUIsMkNBQTJDLGVBQWUsZ0JBQWdCLGNBQWMsa0JBQWtCLG1CQUFtQixnQkFBZ0Isd0JBQXdCLDZGQUE2RixNQUFNLG1CQUFtQixvQkFBb0IsMkNBQTJDLDBDQUEwQyx1Q0FBdUMsdUNBQXVDLGtCQUFrQixpQ0FBaUMsZ0NBQWdDLGNBQWMsYUFBYSxNQUFNLG1CQUFtQixFQUFFO0FBQzVrQzs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsUUFBUSwyREFBVSxRQUFRLEVBQUUsMkRBQUM7QUFDdEQ7QUFDQSx3QkFBd0IsZUFBZSxZQUFZLGtCQUFrQixtQ0FBbUMsY0FBYyxrQkFBa0IsbUJBQW1CLGtDQUFrQyxtQ0FBbUMsV0FBVyxZQUFZLG9CQUFvQixpQkFBaUIsZ0JBQWdCLEVBQUU7QUFDOVM7O0FBRWdGOzs7Ozs7Ozs7Ozs7O0FDbkNoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjQzXFxjaHVua3NcXDQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBkIGFzIGdldElvbk1vZGUsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5cbmNvbnN0IEF2YXRhciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IGdldElvbk1vZGUodGhpcykgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmJsb2NrfTo6c2xvdHRlZChpbWcpLDo6c2xvdHRlZChpb24taW1nKXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW8tb2JqZWN0LWZpdDpjb3ZlcjtvYmplY3QtZml0OmNvdmVyO292ZXJmbG93OmhpZGRlbn06aG9zdHstLWJvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9XCI7IH1cbn07XG5cbmNvbnN0IEJhZGdlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUgfSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWVuZDo4cHg7LS1wYWRkaW5nLWJvdHRvbTozcHg7LS1wYWRkaW5nLXN0YXJ0OjhweDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MTBweDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjE7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO2NvbnRhaW46Y29udGVudDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoOmVtcHR5KXtkaXNwbGF5Om5vbmV9Omhvc3R7Ym9yZGVyLXJhZGl1czoxMHB4fVwiOyB9XG59O1xuXG5jb25zdCBUaHVtYm5haWwgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tc2l6ZTo0OHB4Oy0tYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpibG9jazt3aWR0aDp2YXIoLS1zaXplKTtoZWlnaHQ6dmFyKC0tc2l6ZSl9OjpzbG90dGVkKGltZyksOjpzbG90dGVkKGlvbi1pbWcpe2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstby1vYmplY3QtZml0OmNvdmVyO29iamVjdC1maXQ6Y292ZXI7b3ZlcmZsb3c6aGlkZGVufVwiOyB9XG59O1xuXG5leHBvcnQgeyBBdmF0YXIgYXMgaW9uX2F2YXRhciwgQmFkZ2UgYXMgaW9uX2JhZGdlLCBUaHVtYm5haWwgYXMgaW9uX3RodW1ibmFpbCB9O1xuIiwiY29uc3QgaG9zdENvbnRleHQgPSAoc2VsZWN0b3IsIGVsKSA9PiB7XHJcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IHtcclxuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcclxuICAgICAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXHJcbiAgICB9IDogdW5kZWZpbmVkO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT09ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NNYXAgPSAoY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChjID0+IG1hcFtjXSA9IHRydWUpO1xyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuY29uc3QgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XHJcbmNvbnN0IG9wZW5VUkwgPSBhc3luYyAodXJsLCBldiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XHJcbiAgICAgICAgaWYgKHJvdXRlcikge1xyXG4gICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==