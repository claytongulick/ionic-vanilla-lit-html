(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js ***!
  \*********************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1iYWNrZHJvcC1tZC5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRHO0FBQzlFO0FBQ21CO0FBQ1E7O0FBRXpEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBLHVCQUF1QixxRUFBa0I7QUFDekM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFHO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBVTtBQUMvQixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTyxRQUFRLE1BQU0sU0FBUyxjQUFjLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLGVBQWUsZUFBZSxZQUFZLHNCQUFzQixrQkFBa0IsVUFBVSxzQkFBc0IsdUJBQXVCLDZCQUE2QixZQUFZLE1BQU0sZ0RBQWdELEVBQUU7QUFDdlk7O0FBRW9DIiwiZmlsZSI6Ijc5XFxjaHVua3NcXDc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IG4gYXMgbm93IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IEdFU1RVUkVfQ09OVFJPTExFUiB9IGZyb20gJy4vaW5kZXgtNjI0ZWVhNTguanMnO1xuXG5jb25zdCBCYWNrZHJvcCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubGFzdENsaWNrID0gLTEwMDAwO1xuICAgICAgICB0aGlzLmJsb2NrZXIgPSBHRVNUVVJFX0NPTlRST0xMRVIuY3JlYXRlQmxvY2tlcih7XG4gICAgICAgICAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3Agd2lsbCBiZSB2aXNpYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgY2FuIGJlIGNsaWNrZWQgYW5kIHdpbGwgZW1pdCB0aGUgYGlvbkJhY2tkcm9wVGFwYCBldmVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFwcGFibGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3Agd2lsbCBzdG9wIHByb3BhZ2F0aW9uIG9uIHRhcC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pb25CYWNrZHJvcFRhcCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmFja2Ryb3BUYXBcIiwgNyk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlci5ibG9jaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmJsb2NrZXIudW5ibG9jaygpO1xuICAgIH1cbiAgICBvblRvdWNoU3RhcnQoZXYpIHtcbiAgICAgICAgdGhpcy5sYXN0Q2xpY2sgPSBub3coZXYpO1xuICAgICAgICB0aGlzLmVtaXRUYXAoZXYpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bihldikge1xuICAgICAgICBpZiAodGhpcy5sYXN0Q2xpY2sgPCBub3coZXYpIC0gMjUwMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0VGFwKGV2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0VGFwKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRhcHBhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlvbkJhY2tkcm9wVGFwLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyB0YWJpbmRleDogXCItMVwiLCBjbGFzczoge1xuICAgICAgICAgICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYmFja2Ryb3AtaGlkZSc6ICF0aGlzLnZpc2libGUsXG4gICAgICAgICAgICAgICAgJ2JhY2tkcm9wLW5vLXRhcHBhYmxlJzogIXRoaXMudGFwcGFibGUsXG4gICAgICAgICAgICB9IH0pKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiOmhvc3R7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbnRhaW46c3RyaWN0O2N1cnNvcjpwb2ludGVyO29wYWNpdHk6LjAxOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTt6LWluZGV4OjJ9Omhvc3QoLmJhY2tkcm9wLWhpZGUpe2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoLmJhY2tkcm9wLW5vLXRhcHBhYmxlKXtjdXJzb3I6YXV0b306aG9zdHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1iYWNrZHJvcC1jb2xvciwjMDAwKX1cIjsgfVxufTtcblxuZXhwb3J0IHsgQmFja2Ryb3AgYXMgaW9uX2JhY2tkcm9wIH07XG4iXSwic291cmNlUm9vdCI6IiJ9