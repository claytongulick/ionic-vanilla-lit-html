(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../node_modules/@ionic/core/dist/esm/focus-visible-70713a0c.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/focus-visible-70713a0c.js ***!
  \**********************************************************************/
/*! exports provided: startFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFocusVisible", function() { return startFocusVisible; });
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];
const startFocusVisible = () => {
    let currentFocus = [];
    let keyboardMode = true;
    const doc = document;
    const setFocus = (elements) => {
        currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
        elements.forEach(el => el.classList.add(ION_FOCUSED));
        currentFocus = elements;
    };
    const pointerDown = () => {
        keyboardMode = false;
        setFocus([]);
    };
    doc.addEventListener('keydown', ev => {
        keyboardMode = FOCUS_KEYS.includes(ev.key);
        if (!keyboardMode) {
            setFocus([]);
        }
    });
    doc.addEventListener('focusin', ev => {
        if (keyboardMode && ev.composedPath) {
            const toFocus = ev.composedPath().filter((el) => {
                if (el.classList) {
                    return el.classList.contains(ION_FOCUSABLE);
                }
                return false;
            });
            setFocus(toFocus);
        }
    });
    doc.addEventListener('focusout', () => {
        if (doc.activeElement === doc.body) {
            setFocus([]);
        }
    });
    doc.addEventListener('touchstart', pointerDown);
    doc.addEventListener('mousedown', pointerDown);
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZvY3VzLXZpc2libGUtNzA3MTNhMGMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRTZCIiwiZmlsZSI6IjFcXGNodW5rc1xcMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElPTl9GT0NVU0VEID0gJ2lvbi1mb2N1c2VkJztcclxuY29uc3QgSU9OX0ZPQ1VTQUJMRSA9ICdpb24tZm9jdXNhYmxlJztcclxuY29uc3QgRk9DVVNfS0VZUyA9IFsnVGFiJywgJ0Fycm93RG93bicsICdTcGFjZScsICdFc2NhcGUnLCAnICcsICdTaGlmdCcsICdFbnRlcicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJ107XHJcbmNvbnN0IHN0YXJ0Rm9jdXNWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRGb2N1cyA9IFtdO1xyXG4gICAgbGV0IGtleWJvYXJkTW9kZSA9IHRydWU7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcclxuICAgIGNvbnN0IHNldEZvY3VzID0gKGVsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgY3VycmVudEZvY3VzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShJT05fRk9DVVNFRCkpO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChJT05fRk9DVVNFRCkpO1xyXG4gICAgICAgIGN1cnJlbnRGb2N1cyA9IGVsZW1lbnRzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHBvaW50ZXJEb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGtleWJvYXJkTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIHNldEZvY3VzKFtdKTtcclxuICAgIH07XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ID0+IHtcclxuICAgICAgICBrZXlib2FyZE1vZGUgPSBGT0NVU19LRVlTLmluY2x1ZGVzKGV2LmtleSk7XHJcbiAgICAgICAgaWYgKCFrZXlib2FyZE1vZGUpIHtcclxuICAgICAgICAgICAgc2V0Rm9jdXMoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBldiA9PiB7XHJcbiAgICAgICAgaWYgKGtleWJvYXJkTW9kZSAmJiBldi5jb21wb3NlZFBhdGgpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9Gb2N1cyA9IGV2LmNvbXBvc2VkUGF0aCgpLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKElPTl9GT0NVU0FCTEUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvYy5hY3RpdmVFbGVtZW50ID09PSBkb2MuYm9keSkge1xyXG4gICAgICAgICAgICBzZXRGb2N1cyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XHJcbn07XG5cbmV4cG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9