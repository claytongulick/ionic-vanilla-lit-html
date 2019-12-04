(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../node_modules/@ionic/core/dist/esm/status-tap-a0df8284.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/status-tap-a0df8284.js ***!
  \*******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");



const startStatusTap = () => {
    const win = window;
    win.addEventListener('statusTap', () => {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
            const width = win.innerWidth;
            const height = win.innerHeight;
            const el = document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            const contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(() => {
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => contentEl.scrollToTop(300));
                });
            }
        });
    });
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3N0YXR1cy10YXAtYTBkZjgyODQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1FO0FBQ3JDOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBUztBQUM3QixpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUUwQiIsImZpbGUiOiI1XFxjaHVua3NcXDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmIGFzIHJlYWRUYXNrLCB3IGFzIHdyaXRlVGFzayB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcblxuY29uc3Qgc3RhcnRTdGF0dXNUYXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignc3RhdHVzVGFwJywgKCkgPT4ge1xyXG4gICAgICAgIHJlYWRUYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IGVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50RWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5jb21wb25lbnRPblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVUYXNrKCgpID0+IGNvbnRlbnRFbC5zY3JvbGxUb1RvcCgzMDApKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcblxuZXhwb3J0IHsgc3RhcnRTdGF0dXNUYXAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=