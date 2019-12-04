(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "../node_modules/@ionic/core/dist/esm/md.transition-15a81b08.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/md.transition-15a81b08.js ***!
  \**********************************************************************/
/*! exports provided: mdTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return mdTransitionAnimation; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "../node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
/* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-6826f2f6.js */ "../node_modules/@ionic/core/dist/esm/index-6826f2f6.js");







const mdTransitionAnimation = (_, opts) => {
    const OFF_BOTTOM = '40px';
    const CENTER = '0px';
    const backDirection = (opts.direction === 'back');
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const ionPageElement = Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["g"])(enteringEl);
    const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    const rootTransition = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    rootTransition
        .addElement(ionPageElement)
        .fill('both')
        .beforeRemoveClass('ion-page-invisible');
    // animate the component itself
    if (backDirection) {
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition
            .duration(opts.duration || 280)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`)
            .fromTo('opacity', 0.01, 1);
    }
    // Animate toolbar if it's there
    if (enteringToolbarEle) {
        const enteringToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.addAnimation(enteringToolBar);
    }
    // setup leaving view
    if (leavingEl && backDirection) {
        // leaving content
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
        const leavingPage = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        leavingPage
            .addElement(Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["g"])(leavingEl))
            .afterStyles({ 'display': 'none' })
            .fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`)
            .fromTo('opacity', 1, 0);
        rootTransition.addAnimation(leavingPage);
    }
    return rootTransition;
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL21kLnRyYW5zaXRpb24tMTVhODFiMDguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRTtBQUNDO0FBQ2dDO0FBQzlCO0FBQzRCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWlCO0FBQzVDO0FBQ0EsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsV0FBVyxrQkFBa0IsT0FBTztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnRUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQWU7QUFDM0M7QUFDQSx3QkFBd0IsNERBQWlCO0FBQ3pDLDBCQUEwQixvQkFBb0I7QUFDOUMsK0NBQStDLE9BQU8sa0JBQWtCLFdBQVc7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUMiLCJmaWxlIjoiODlcXGNodW5rc1xcODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldElvblBhZ2VFbGVtZW50IH0gZnJvbSAnLi9pbmRleC02ODI2ZjJmNi5qcyc7XG5cbmNvbnN0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbiA9IChfLCBvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBPRkZfQk9UVE9NID0gJzQwcHgnO1xyXG4gICAgY29uc3QgQ0VOVEVSID0gJzBweCc7XHJcbiAgICBjb25zdCBiYWNrRGlyZWN0aW9uID0gKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpO1xyXG4gICAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcclxuICAgIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xyXG4gICAgY29uc3QgaW9uUGFnZUVsZW1lbnQgPSBnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKTtcclxuICAgIGNvbnN0IGVudGVyaW5nVG9vbGJhckVsZSA9IGlvblBhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi10b29sYmFyJyk7XHJcbiAgICBjb25zdCByb290VHJhbnNpdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgcm9vdFRyYW5zaXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChpb25QYWdlRWxlbWVudClcclxuICAgICAgICAuZmlsbCgnYm90aCcpXHJcbiAgICAgICAgLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcclxuICAgIC8vIGFuaW1hdGUgdGhlIGNvbXBvbmVudCBpdHNlbGZcclxuICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgcm9vdFRyYW5zaXRpb25cclxuICAgICAgICAgICAgLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjAwKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcm9vdFRyYW5zaXRpb25cclxuICAgICAgICAgICAgLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjgwKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKVxyXG4gICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke09GRl9CT1RUT019KWAsIGB0cmFuc2xhdGVZKCR7Q0VOVEVSfSlgKVxyXG4gICAgICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XHJcbiAgICB9XHJcbiAgICAvLyBBbmltYXRlIHRvb2xiYXIgaWYgaXQncyB0aGVyZVxyXG4gICAgaWYgKGVudGVyaW5nVG9vbGJhckVsZSkge1xyXG4gICAgICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRFbGVtZW50KGVudGVyaW5nVG9vbGJhckVsZSk7XHJcbiAgICAgICAgcm9vdFRyYW5zaXRpb24uYWRkQW5pbWF0aW9uKGVudGVyaW5nVG9vbEJhcik7XHJcbiAgICB9XHJcbiAgICAvLyBzZXR1cCBsZWF2aW5nIHZpZXdcclxuICAgIGlmIChsZWF2aW5nRWwgJiYgYmFja0RpcmVjdGlvbikge1xyXG4gICAgICAgIC8vIGxlYXZpbmcgY29udGVudFxyXG4gICAgICAgIHJvb3RUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgIC5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDIwMClcclxuICAgICAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcclxuICAgICAgICBjb25zdCBsZWF2aW5nUGFnZSA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgICAgIGxlYXZpbmdQYWdlXHJcbiAgICAgICAgICAgIC5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpXHJcbiAgICAgICAgICAgIC5hZnRlclN0eWxlcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pXHJcbiAgICAgICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7Q0VOVEVSfSlgLCBgdHJhbnNsYXRlWSgke09GRl9CT1RUT019KWApXHJcbiAgICAgICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAxLCAwKTtcclxuICAgICAgICByb290VHJhbnNpdGlvbi5hZGRBbmltYXRpb24obGVhdmluZ1BhZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3RUcmFuc2l0aW9uO1xyXG59O1xuXG5leHBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=