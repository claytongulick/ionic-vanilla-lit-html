(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js ***!
  \*****************************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
const startHardwareBackButton = () => {
    const doc = document;
    let busy = false;
    doc.addEventListener('backbutton', () => {
        if (busy) {
            return;
        }
        const handlers = [];
        const ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register(priority, handler) {
                    handlers.push({ priority, handler });
                }
            }
        });
        doc.dispatchEvent(ev);
        if (handlers.length > 0) {
            let selectedPriority = Number.MIN_SAFE_INTEGER;
            let selectedHandler;
            handlers.forEach(({ priority, handler }) => {
                if (priority >= selectedPriority) {
                    selectedPriority = priority;
                    selectedHandler = handler;
                }
            });
            busy = true;
            executeAction(selectedHandler).then(() => busy = false);
        }
    });
};
const executeAction = async (handler) => {
    try {
        if (handler) {
            const result = handler();
            if (result != null) {
                await result;
            }
        }
    }
    catch (e) {
        console.error(e);
    }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcmR3YXJlLWJhY2stYnV0dG9uLTVhZmUzY2IwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUMiLCJmaWxlIjoiMlxcY2h1bmtzXFwyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcclxuICAgIGxldCBidXN5ID0gZmFsc2U7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignYmFja2J1dHRvbicsICgpID0+IHtcclxuICAgICAgICBpZiAoYnVzeSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gW107XHJcbiAgICAgICAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoJ2lvbkJhY2tCdXR0b24nLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyKHByaW9yaXR5LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMucHVzaCh7IHByaW9yaXR5LCBoYW5kbGVyIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmRpc3BhdGNoRXZlbnQoZXYpO1xyXG4gICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFByaW9yaXR5ID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEhhbmRsZXI7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goKHsgcHJpb3JpdHksIGhhbmRsZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5ID49IHNlbGVjdGVkUHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRIYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJ1c3kgPSB0cnVlO1xyXG4gICAgICAgICAgICBleGVjdXRlQWN0aW9uKHNlbGVjdGVkSGFuZGxlcikudGhlbigoKSA9PiBidXN5ID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBleGVjdXRlQWN0aW9uID0gYXN5bmMgKGhhbmRsZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcigpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxufTtcblxuZXhwb3J0IHsgc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=