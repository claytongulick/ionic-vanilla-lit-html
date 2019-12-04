(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js");





const Backdrop = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastClick = -10000;
        this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__["GESTURE_CONTROLLER"].createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBackdropTap", 7);
    }
    connectedCallback() {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    }
    disconnectedCallback() {
        this.blocker.unblock();
    }
    onTouchStart(ev) {
        this.lastClick = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev);
        this.emitTap(ev);
    }
    onMouseDown(ev) {
        if (this.lastClick < Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev) - 2500) {
            this.emitTap(ev);
        }
    }
    emitTap(ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { tabindex: "-1", class: {
                [mode]: true,
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            } }));
    }
    static get style() { return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"; }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1iYWNrZHJvcC1pb3MuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RztBQUM5RTtBQUNtQjtBQUNROztBQUV6RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQSx1QkFBdUIscUVBQWtCO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyREFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4REFBRztBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOERBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBLHdCQUF3QixlQUFlLE9BQU8sUUFBUSxNQUFNLFNBQVMsY0FBYyxrQkFBa0IsZ0NBQWdDLHdCQUF3QixlQUFlLGVBQWUsWUFBWSxzQkFBc0Isa0JBQWtCLFVBQVUsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsWUFBWSxNQUFNLGdEQUFnRCxFQUFFO0FBQ3ZZOztBQUVvQyIsImZpbGUiOiI3OFxcY2h1bmtzXFw3OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZCBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBuIGFzIG5vdyB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBHRVNUVVJFX0NPTlRST0xMRVIgfSBmcm9tICcuL2luZGV4LTYyNGVlYTU4LmpzJztcblxuY29uc3QgQmFja2Ryb3AgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmxhc3RDbGljayA9IC0xMDAwMDtcbiAgICAgICAgdGhpcy5ibG9ja2VyID0gR0VTVFVSRV9DT05UUk9MTEVSLmNyZWF0ZUJsb2NrZXIoe1xuICAgICAgICAgICAgZGlzYWJsZVNjcm9sbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgYmUgdmlzaWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCB3aWxsIGNhbiBiZSBjbGlja2VkIGFuZCB3aWxsIGVtaXQgdGhlIGBpb25CYWNrZHJvcFRhcGAgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcHBhYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgc3RvcCBwcm9wYWdhdGlvbiBvbiB0YXAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uQmFja2Ryb3BUYXAgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJhY2tkcm9wVGFwXCIsIDcpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrZXIuYmxvY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5ibG9ja2VyLnVuYmxvY2soKTtcbiAgICB9XG4gICAgb25Ub3VjaFN0YXJ0KGV2KSB7XG4gICAgICAgIHRoaXMubGFzdENsaWNrID0gbm93KGV2KTtcbiAgICAgICAgdGhpcy5lbWl0VGFwKGV2KTtcbiAgICB9XG4gICAgb25Nb3VzZURvd24oZXYpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdENsaWNrIDwgbm93KGV2KSAtIDI1MDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFRhcChldik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdFRhcChldikge1xuICAgICAgICBpZiAodGhpcy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YXBwYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pb25CYWNrZHJvcFRhcC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgdGFiaW5kZXg6IFwiLTFcIiwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgJ2JhY2tkcm9wLWhpZGUnOiAhdGhpcy52aXNpYmxlLFxuICAgICAgICAgICAgICAgICdiYWNrZHJvcC1uby10YXBwYWJsZSc6ICF0aGlzLnRhcHBhYmxlLFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtjb250YWluOnN0cmljdDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5Oi4wMTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7ei1pbmRleDoyfTpob3N0KC5iYWNrZHJvcC1oaWRlKXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KC5iYWNrZHJvcC1uby10YXBwYWJsZSl7Y3Vyc29yOmF1dG99Omhvc3R7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tYmFja2Ryb3AtY29sb3IsIzAwMCl9XCI7IH1cbn07XG5cbmV4cG9ydCB7IEJhY2tkcm9wIGFzIGlvbl9iYWNrZHJvcCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==