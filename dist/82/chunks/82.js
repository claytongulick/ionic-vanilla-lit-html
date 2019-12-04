(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_ripple_effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_ripple_effect", function() { return RippleEffect; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");



const RippleEffect = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Sets the type of ripple-effect:
         *
         * - `bounded`: the ripple effect expands from the user's click position
         * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
         *
         * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
         * while surfaces for unbounded ripples should have it set to visible.
         */
        this.type = 'bounded';
    }
    /**
     * Adds the ripple effect to the parent element.
     *
     * @param x The horizontal coordinate of where the ripple should start.
     * @param y The vertical coordinate of where the ripple should start.
     */
    async addRipple(x, y) {
        return new Promise(resolve => {
            Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
                const rect = this.el.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                const hypotenuse = Math.sqrt(width * width + height * height);
                const maxDim = Math.max(height, width);
                const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
                const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                const finalScale = maxRadius / initialSize;
                let posX = x - rect.left;
                let posY = y - rect.top;
                if (this.unbounded) {
                    posX = width * 0.5;
                    posY = height * 0.5;
                }
                const styleX = posX - initialSize * 0.5;
                const styleY = posY - initialSize * 0.5;
                const moveX = width * 0.5 - posX;
                const moveY = height * 0.5 - posY;
                Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
                    const div = document.createElement('div');
                    div.classList.add('ripple-effect');
                    const style = div.style;
                    style.top = styleY + 'px';
                    style.left = styleX + 'px';
                    style.width = style.height = initialSize + 'px';
                    style.setProperty('--final-scale', `${finalScale}`);
                    style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
                    const container = this.el.shadowRoot || this.el;
                    container.appendChild(div);
                    setTimeout(() => {
                        resolve(() => {
                            removeRipple(div);
                        });
                    }, 225 + 100);
                });
            });
        });
    }
    get unbounded() {
        return this.type === 'unbounded';
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "presentation", class: {
                [mode]: true,
                'unbounded': this.unbounded
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"; }
};
const removeRipple = (ripple) => {
    ripple.classList.add('fade-out');
    setTimeout(() => {
        ripple.remove();
    }, 200);
};
const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yaXBwbGUtZWZmZWN0LmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwSTtBQUM1Rzs7QUFFOUI7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFdBQVc7QUFDckUsNERBQTRELE1BQU0sTUFBTSxNQUFNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQSxjQUFjLFFBQVEsMkRBQVUsT0FBTztBQUN2Qyx3QkFBd0IsZUFBZSxPQUFPLFFBQVEsTUFBTSxTQUFTLGtCQUFrQixlQUFlLG9CQUFvQixrQkFBa0IsMEJBQTBCLGVBQWUsa0JBQWtCLGtCQUFrQiw4QkFBOEIsY0FBYyxlQUFlLFVBQVUsK0VBQStFLHVFQUF1RSw4QkFBOEIsb0JBQW9CLFVBQVUsOEVBQThFLHNFQUFzRSxpREFBaUQseUNBQXlDLG9DQUFvQyxHQUFHLDBEQUEwRCxrREFBa0QsMkJBQTJCLG1CQUFtQixHQUFHLDhFQUE4RSx1RUFBdUUsNEJBQTRCLEdBQUcsMERBQTBELGtEQUFrRCwyQkFBMkIsbUJBQW1CLEdBQUcsOEVBQThFLHVFQUF1RSxvQ0FBb0MsR0FBRyx5Q0FBeUMsaUNBQWlDLFVBQVUsR0FBRyxhQUFhLDRCQUE0QixHQUFHLHlDQUF5QyxpQ0FBaUMsVUFBVSxHQUFHLGFBQWEscUNBQXFDLEdBQUcseUNBQXlDLGlDQUFpQyxZQUFZLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyx5Q0FBeUMsaUNBQWlDLFlBQVksR0FBRyxXQUFXLEVBQUU7QUFDeDZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUU2QyIsImZpbGUiOiI4MlxcY2h1bmtzXFw4Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZiBhcyByZWFkVGFzaywgdyBhcyB3cml0ZVRhc2ssIGQgYXMgZ2V0SW9uTW9kZSwgaCwgZSBhcyBnZXRFbGVtZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5cbmNvbnN0IFJpcHBsZUVmZmVjdCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSB0eXBlIG9mIHJpcHBsZS1lZmZlY3Q6XG4gICAgICAgICAqXG4gICAgICAgICAqIC0gYGJvdW5kZWRgOiB0aGUgcmlwcGxlIGVmZmVjdCBleHBhbmRzIGZyb20gdGhlIHVzZXIncyBjbGljayBwb3NpdGlvblxuICAgICAgICAgKiAtIGB1bmJvdW5kZWRgOiB0aGUgcmlwcGxlIGVmZmVjdCBleHBhbmRzIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgYnV0dG9uIGFuZCBvdmVyZmxvd3MgdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogTk9URTogU3VyZmFjZXMgZm9yIGJvdW5kZWQgcmlwcGxlcyBzaG91bGQgaGF2ZSB0aGUgb3ZlcmZsb3cgcHJvcGVydHkgc2V0IHRvIGhpZGRlbixcbiAgICAgICAgICogd2hpbGUgc3VyZmFjZXMgZm9yIHVuYm91bmRlZCByaXBwbGVzIHNob3VsZCBoYXZlIGl0IHNldCB0byB2aXNpYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2JvdW5kZWQnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSByaXBwbGUgZWZmZWN0IHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IFRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgb2Ygd2hlcmUgdGhlIHJpcHBsZSBzaG91bGQgc3RhcnQuXG4gICAgICogQHBhcmFtIHkgVGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgb2Ygd2hlcmUgdGhlIHJpcHBsZSBzaG91bGQgc3RhcnQuXG4gICAgICovXG4gICAgYXN5bmMgYWRkUmlwcGxlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgcmVhZFRhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KGhlaWdodCwgd2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFJhZGl1cyA9IHRoaXMudW5ib3VuZGVkID8gbWF4RGltIDogaHlwb3RlbnVzZSArIFBBRERJTkc7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFNpemUgPSBNYXRoLmZsb29yKG1heERpbSAqIElOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5hbFNjYWxlID0gbWF4UmFkaXVzIC8gaW5pdGlhbFNpemU7XG4gICAgICAgICAgICAgICAgbGV0IHBvc1ggPSB4IC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgIGxldCBwb3NZID0geSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuYm91bmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NYID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgIHBvc1kgPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlWCA9IHBvc1ggLSBpbml0aWFsU2l6ZSAqIDAuNTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZVkgPSBwb3NZIC0gaW5pdGlhbFNpemUgKiAwLjU7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVggPSB3aWR0aCAqIDAuNSAtIHBvc1g7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVkgPSBoZWlnaHQgKiAwLjUgLSBwb3NZO1xuICAgICAgICAgICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncmlwcGxlLWVmZmVjdCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRpdi5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUudG9wID0gc3R5bGVZICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUubGVmdCA9IHN0eWxlWCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLndpZHRoID0gc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbFNpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eSgnLS1maW5hbC1zY2FsZScsIGAke2ZpbmFsU2NhbGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbGF0ZS1lbmQnLCBgJHttb3ZlWH1weCwgJHttb3ZlWX1weGApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsLnNoYWRvd1Jvb3QgfHwgdGhpcy5lbDtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmlwcGxlKGRpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjI1ICsgMTAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ3VuYm91bmRlZCc7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwicHJlc2VudGF0aW9uXCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICd1bmJvdW5kZWQnOiB0aGlzLnVuYm91bmRlZFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250YWluOnN0cmljdDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC51bmJvdW5kZWQpe2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGV9LnJpcHBsZS1lZmZlY3R7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Y29sb3I6aW5oZXJpdDtjb250YWluOnN0cmljdDtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246cmlwcGxlQW5pbWF0aW9uIDIyNW1zIGZvcndhcmRzLGZhZGVJbkFuaW1hdGlvbiA3NW1zIGZvcndhcmRzO2FuaW1hdGlvbjpyaXBwbGVBbmltYXRpb24gMjI1bXMgZm9yd2FyZHMsZmFkZUluQW5pbWF0aW9uIDc1bXMgZm9yd2FyZHM7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHk7cG9pbnRlci1ldmVudHM6bm9uZX0uZmFkZS1vdXR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwxKSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS10cmFuc2xhdGUtZW5kKSkgc2NhbGUodmFyKC0tZmluYWwtc2NhbGUsMSkpOy13ZWJraXQtYW5pbWF0aW9uOmZhZGVPdXRBbmltYXRpb24gLjE1cyBmb3J3YXJkczthbmltYXRpb246ZmFkZU91dEFuaW1hdGlvbiAuMTVzIGZvcndhcmRzfVxcQC13ZWJraXQta2V5ZnJhbWVzIHJpcHBsZUFuaW1hdGlvbnswJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwxKSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS10cmFuc2xhdGUtZW5kKSkgc2NhbGUodmFyKC0tZmluYWwtc2NhbGUsMSkpfX1cXEBrZXlmcmFtZXMgcmlwcGxlQW5pbWF0aW9uezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNCwwLC4yLDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLDEpKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwxKSl9fVxcQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbnswJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5Oi4xNn19XFxAa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbnswJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5Oi4xNn19XFxALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEFuaW1hdGlvbnswJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6LjE2fXRve29wYWNpdHk6MH19XFxAa2V5ZnJhbWVzIGZhZGVPdXRBbmltYXRpb257MCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5Oi4xNn10b3tvcGFjaXR5OjB9fVwiOyB9XG59O1xuY29uc3QgcmVtb3ZlUmlwcGxlID0gKHJpcHBsZSkgPT4ge1xuICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByaXBwbGUucmVtb3ZlKCk7XG4gICAgfSwgMjAwKTtcbn07XG5jb25zdCBQQURESU5HID0gMTA7XG5jb25zdCBJTklUSUFMX09SSUdJTl9TQ0FMRSA9IDAuNTtcblxuZXhwb3J0IHsgUmlwcGxlRWZmZWN0IGFzIGlvbl9yaXBwbGVfZWZmZWN0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9