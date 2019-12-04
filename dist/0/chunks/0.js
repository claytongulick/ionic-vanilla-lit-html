(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js ***!
  \*******************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js");


const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
    const win = el.ownerDocument.defaultView;
    const canStart = (detail) => {
        return detail.startX <= 50 && canStartHandler();
    };
    const onMove = (detail) => {
        // set the transition animation's progress
        const delta = detail.deltaX;
        const stepValue = delta / win.innerWidth;
        onMoveHandler(stepValue);
    };
    const onEnd = (detail) => {
        // the swipe back gesture has ended
        const delta = detail.deltaX;
        const width = win.innerWidth;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        const missing = shouldComplete ? 1 - stepValue : stepValue;
        const missingDistance = missing * width;
        let realDur = 0;
        if (missingDistance > 5) {
            const dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 540);
        }
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */
        onEndHandler(shouldComplete, (stepValue <= 0) ? 0.01 : stepValue, realDur);
    };
    return Object(_index_624eea58_js__WEBPACK_IMPORTED_MODULE_0__["createGesture"])({
        el,
        gestureName: 'goback-swipe',
        gesturePriority: 40,
        threshold: 10,
        canStart,
        onStart: onStartHandler,
        onMove,
        onEnd
    });
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3N3aXBlLWJhY2stMzVhZDhlMzcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdFQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRWtDIiwiZmlsZSI6IjBcXGNodW5rc1xcMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTYyNGVlYTU4LmpzJztcblxuY29uc3QgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSA9IChlbCwgY2FuU3RhcnRIYW5kbGVyLCBvblN0YXJ0SGFuZGxlciwgb25Nb3ZlSGFuZGxlciwgb25FbmRIYW5kbGVyKSA9PiB7XHJcbiAgICBjb25zdCB3aW4gPSBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgY29uc3QgY2FuU3RhcnQgPSAoZGV0YWlsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRldGFpbC5zdGFydFggPD0gNTAgJiYgY2FuU3RhcnRIYW5kbGVyKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25Nb3ZlID0gKGRldGFpbCkgPT4ge1xyXG4gICAgICAgIC8vIHNldCB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24ncyBwcm9ncmVzc1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZGV0YWlsLmRlbHRhWDtcclxuICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpbi5pbm5lcldpZHRoO1xyXG4gICAgICAgIG9uTW92ZUhhbmRsZXIoc3RlcFZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkVuZCA9IChkZXRhaWwpID0+IHtcclxuICAgICAgICAvLyB0aGUgc3dpcGUgYmFjayBnZXN0dXJlIGhhcyBlbmRlZFxyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZGV0YWlsLmRlbHRhWDtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2lkdGg7XHJcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBkZXRhaWwudmVsb2NpdHlYO1xyXG4gICAgICAgIGNvbnN0IHogPSB3aWR0aCAvIDIuMDtcclxuICAgICAgICBjb25zdCBzaG91bGRDb21wbGV0ZSA9IHZlbG9jaXR5ID49IDAgJiYgKHZlbG9jaXR5ID4gMC4yIHx8IGRldGFpbC5kZWx0YVggPiB6KTtcclxuICAgICAgICBjb25zdCBtaXNzaW5nID0gc2hvdWxkQ29tcGxldGUgPyAxIC0gc3RlcFZhbHVlIDogc3RlcFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG1pc3NpbmdEaXN0YW5jZSA9IG1pc3NpbmcgKiB3aWR0aDtcclxuICAgICAgICBsZXQgcmVhbER1ciA9IDA7XHJcbiAgICAgICAgaWYgKG1pc3NpbmdEaXN0YW5jZSA+IDUpIHtcclxuICAgICAgICAgICAgY29uc3QgZHVyID0gbWlzc2luZ0Rpc3RhbmNlIC8gTWF0aC5hYnModmVsb2NpdHkpO1xyXG4gICAgICAgICAgICByZWFsRHVyID0gTWF0aC5taW4oZHVyLCA1NDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUT0RPOiBzdGVwVmFsdWUgY2FuIHNvbWV0aW1lcyByZXR1cm4gYSBuZWdhdGl2ZVxyXG4gICAgICAgICAqIHZhbHVlLCBidXQgeW91IGNhbid0IGhhdmUgYSBuZWdhdGl2ZSB0aW1lIHZhbHVlXHJcbiAgICAgICAgICogZm9yIHRoZSBjdWJpYyBiZXppZXIgY3VydmUgKGF0IGxlYXN0IHdpdGggd2ViIGFuaW1hdGlvbnMpXHJcbiAgICAgICAgICogTm90IHN1cmUgaWYgdGhlIG5lZ2F0aXZlIHN0ZXAgdmFsdWUgaXMgYW4gZXJyb3Igb3Igbm90XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb25FbmRIYW5kbGVyKHNob3VsZENvbXBsZXRlLCAoc3RlcFZhbHVlIDw9IDApID8gMC4wMSA6IHN0ZXBWYWx1ZSwgcmVhbER1cik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xyXG4gICAgICAgIGVsLFxyXG4gICAgICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcclxuICAgICAgICBnZXN0dXJlUHJpb3JpdHk6IDQwLFxyXG4gICAgICAgIHRocmVzaG9sZDogMTAsXHJcbiAgICAgICAgY2FuU3RhcnQsXHJcbiAgICAgICAgb25TdGFydDogb25TdGFydEhhbmRsZXIsXHJcbiAgICAgICAgb25Nb3ZlLFxyXG4gICAgICAgIG9uRW5kXHJcbiAgICB9KTtcclxufTtcblxuZXhwb3J0IHsgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==