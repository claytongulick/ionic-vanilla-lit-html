(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js":
/*!************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_split_pane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_split_pane", function() { return SplitPane; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");



const SPLIT_PANE_MAIN = 'split-pane-main';
const SPLIT_PANE_SIDE = 'split-pane-side';
const QUERY = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
    'never': ''
};
const SplitPane = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the split pane will be hidden.
         */
        this.disabled = false;
        /**
         * When the split-pane should be shown.
         * Can be a CSS media query expression, or a shortcut expression.
         * Can also be a boolean expression.
         */
        this.when = QUERY['lg'];
        this.ionSplitPaneVisible = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSplitPaneVisible", 7);
    }
    visibleChanged(visible) {
        const detail = { visible, isPane: this.isPane.bind(this) };
        this.ionSplitPaneVisible.emit(detail);
    }
    connectedCallback() {
        this.styleChildren();
        this.updateState();
    }
    disconnectedCallback() {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
    }
    componentWillLoad() {
        if (this.contentId === undefined) {
            console.warn(`[DEPRECATED][ion-split-pane] Using the [main] attribute is deprecated, please use the "contentId" property instead:
BEFORE:
  <ion-split-pane>
    ...
    <div main>...</div>
  </ion-split-pane>

AFTER:
  <ion-split-pane contentId="main-content">
    ...
    <div id="main-content">...</div>
  </ion-split-pane>
`);
        }
    }
    updateState() {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
        // Check if the split-pane is disabled
        if (this.disabled) {
            this.visible = false;
            return;
        }
        // When query is a boolean
        const query = this.when;
        if (typeof query === 'boolean') {
            this.visible = query;
            return;
        }
        // When query is a string, let's find first if it is a shortcut
        const mediaQuery = QUERY[query] || query;
        // Media query is empty or null, we hide it
        if (mediaQuery.length === 0) {
            this.visible = false;
            return;
        }
        if (window.matchMedia) {
            // Listen on media query
            const callback = (q) => {
                this.visible = q.matches;
            };
            const mediaList = window.matchMedia(mediaQuery);
            mediaList.addListener(callback);
            this.rmL = () => mediaList.removeListener(callback);
            this.visible = mediaList.matches;
        }
    }
    isPane(element) {
        if (!this.visible) {
            return false;
        }
        return element.parentElement === this.el
            && element.classList.contains(SPLIT_PANE_SIDE);
    }
    styleChildren() {
        const contentId = this.contentId;
        const children = this.el.children;
        const nu = this.el.childElementCount;
        let foundMain = false;
        for (let i = 0; i < nu; i++) {
            const child = children[i];
            const isMain = contentId !== undefined ? child.id === contentId : child.hasAttribute('main');
            if (isMain) {
                if (foundMain) {
                    console.warn('split pane cannot have more than one main node');
                    return;
                }
                foundMain = true;
            }
            setPaneClass(child, isMain);
        }
        if (!foundMain) {
            console.warn('split pane does not have a specified main node');
        }
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                // Used internally for styling
                [`split-pane-${mode}`]: true,
                'split-pane-visible': this.visible
            } }));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "visible": ["visibleChanged"],
        "disabled": ["updateState"],
        "when": ["updateState"]
    }; }
    static get style() { return "ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-ios{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"; }
};
const setPaneClass = (el, isMain) => {
    let toAdd;
    let toRemove;
    if (isMain) {
        toAdd = SPLIT_PANE_MAIN;
        toRemove = SPLIT_PANE_SIDE;
    }
    else {
        toAdd = SPLIT_PANE_SIDE;
        toRemove = SPLIT_PANE_MAIN;
    }
    const classList = el.classList;
    classList.add(toAdd);
    classList.remove(toRemove);
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1zcGxpdC1wYW5lLWlvcy5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkRBQVc7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekI7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQSxjQUFjLFFBQVEsMkRBQVUsT0FBTztBQUN2QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3Qix3QkFBd0IsT0FBTyxRQUFRLE1BQU0sU0FBUyxvQkFBb0IsYUFBYSxrQkFBa0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsaUJBQWlCLGVBQWUsMEVBQTBFLE9BQU8sUUFBUSxNQUFNLFNBQVMsa0JBQWtCLFdBQVcsT0FBTyxrQ0FBa0MsMEJBQTBCLFVBQVUsNkdBQTZHLG9CQUFvQixhQUFhLG9CQUFvQixjQUFjLCtCQUErQixhQUFhLHFDQUFxQyxrQkFBa0IsU0FBUywrQ0FBK0MsaUJBQWlCLFFBQVEsZ0JBQWdCLDZHQUE2RyxvREFBb0QsZ0JBQWdCLGNBQWMsMkJBQTJCLGNBQWMsOERBQThELGdCQUFnQixjQUFjLGVBQWUsMEJBQTBCLEVBQUU7QUFDcnBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1QyIsImZpbGUiOiI4NVxcY2h1bmtzXFw4NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZCBhcyBnZXRJb25Nb2RlLCBoLCBlIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcblxuY29uc3QgU1BMSVRfUEFORV9NQUlOID0gJ3NwbGl0LXBhbmUtbWFpbic7XG5jb25zdCBTUExJVF9QQU5FX1NJREUgPSAnc3BsaXQtcGFuZS1zaWRlJztcbmNvbnN0IFFVRVJZID0ge1xuICAgICd4cyc6ICcobWluLXdpZHRoOiAwcHgpJyxcbiAgICAnc20nOiAnKG1pbi13aWR0aDogNTc2cHgpJyxcbiAgICAnbWQnOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgICAnbGcnOiAnKG1pbi13aWR0aDogOTkycHgpJyxcbiAgICAneGwnOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gICAgJ25ldmVyJzogJydcbn07XG5jb25zdCBTcGxpdFBhbmUgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHNwbGl0IHBhbmUgd2lsbCBiZSBoaWRkZW4uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRoZSBzcGxpdC1wYW5lIHNob3VsZCBiZSBzaG93bi5cbiAgICAgICAgICogQ2FuIGJlIGEgQ1NTIG1lZGlhIHF1ZXJ5IGV4cHJlc3Npb24sIG9yIGEgc2hvcnRjdXQgZXhwcmVzc2lvbi5cbiAgICAgICAgICogQ2FuIGFsc28gYmUgYSBib29sZWFuIGV4cHJlc3Npb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLndoZW4gPSBRVUVSWVsnbGcnXTtcbiAgICAgICAgdGhpcy5pb25TcGxpdFBhbmVWaXNpYmxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TcGxpdFBhbmVWaXNpYmxlXCIsIDcpO1xuICAgIH1cbiAgICB2aXNpYmxlQ2hhbmdlZCh2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHsgdmlzaWJsZSwgaXNQYW5lOiB0aGlzLmlzUGFuZS5iaW5kKHRoaXMpIH07XG4gICAgICAgIHRoaXMuaW9uU3BsaXRQYW5lVmlzaWJsZS5lbWl0KGRldGFpbCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnN0eWxlQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMucm1MKSB7XG4gICAgICAgICAgICB0aGlzLnJtTCgpO1xuICAgICAgICAgICAgdGhpcy5ybUwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtERVBSRUNBVEVEXVtpb24tc3BsaXQtcGFuZV0gVXNpbmcgdGhlIFttYWluXSBhdHRyaWJ1dGUgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0aGUgXCJjb250ZW50SWRcIiBwcm9wZXJ0eSBpbnN0ZWFkOlxuQkVGT1JFOlxuICA8aW9uLXNwbGl0LXBhbmU+XG4gICAgLi4uXG4gICAgPGRpdiBtYWluPi4uLjwvZGl2PlxuICA8L2lvbi1zcGxpdC1wYW5lPlxuXG5BRlRFUjpcbiAgPGlvbi1zcGxpdC1wYW5lIGNvbnRlbnRJZD1cIm1haW4tY29udGVudFwiPlxuICAgIC4uLlxuICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj4uLi48L2Rpdj5cbiAgPC9pb24tc3BsaXQtcGFuZT5cbmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5ybUwpIHtcbiAgICAgICAgICAgIHRoaXMucm1MKCk7XG4gICAgICAgICAgICB0aGlzLnJtTCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgc3BsaXQtcGFuZSBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiBxdWVyeSBpcyBhIGJvb2xlYW5cbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLndoZW47XG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gcXVlcnk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiBxdWVyeSBpcyBhIHN0cmluZywgbGV0J3MgZmluZCBmaXJzdCBpZiBpdCBpcyBhIHNob3J0Y3V0XG4gICAgICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBRVUVSWVtxdWVyeV0gfHwgcXVlcnk7XG4gICAgICAgIC8vIE1lZGlhIHF1ZXJ5IGlzIGVtcHR5IG9yIG51bGwsIHdlIGhpZGUgaXRcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgICAgIC8vIExpc3RlbiBvbiBtZWRpYSBxdWVyeVxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAocSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHEubWF0Y2hlcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBtZWRpYUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcbiAgICAgICAgICAgIG1lZGlhTGlzdC5hZGRMaXN0ZW5lcihjYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLnJtTCA9ICgpID0+IG1lZGlhTGlzdC5yZW1vdmVMaXN0ZW5lcihjYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBtZWRpYUxpc3QubWF0Y2hlcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1BhbmUoZWxlbWVudCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IHRoaXMuZWxcbiAgICAgICAgICAgICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFNQTElUX1BBTkVfU0lERSk7XG4gICAgfVxuICAgIHN0eWxlQ2hpbGRyZW4oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRJZCA9IHRoaXMuY29udGVudElkO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IG51ID0gdGhpcy5lbC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgICAgbGV0IGZvdW5kTWFpbiA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjb25zdCBpc01haW4gPSBjb250ZW50SWQgIT09IHVuZGVmaW5lZCA/IGNoaWxkLmlkID09PSBjb250ZW50SWQgOiBjaGlsZC5oYXNBdHRyaWJ1dGUoJ21haW4nKTtcbiAgICAgICAgICAgIGlmIChpc01haW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRNYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc3BsaXQgcGFuZSBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG1haW4gbm9kZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvdW5kTWFpbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRQYW5lQ2xhc3MoY2hpbGQsIGlzTWFpbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3VuZE1haW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc3BsaXQgcGFuZSBkb2VzIG5vdCBoYXZlIGEgc3BlY2lmaWVkIG1haW4gbm9kZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIFtgc3BsaXQtcGFuZS0ke21vZGV9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgJ3NwbGl0LXBhbmUtdmlzaWJsZSc6IHRoaXMudmlzaWJsZVxuICAgICAgICAgICAgfSB9KSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcInZpc2libGVcIjogW1widmlzaWJsZUNoYW5nZWRcIl0sXG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1widXBkYXRlU3RhdGVcIl0sXG4gICAgICAgIFwid2hlblwiOiBbXCJ1cGRhdGVTdGF0ZVwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCJpb24tc3BsaXQtcGFuZXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwO2NvbnRhaW46c3RyaWN0fS5zcGxpdC1wYW5lLXZpc2libGU+LnNwbGl0LXBhbmUtbWFpbiwuc3BsaXQtcGFuZS12aXNpYmxlPi5zcGxpdC1wYW5lLXNpZGV7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7ei1pbmRleDowfS5zcGxpdC1wYW5lLXZpc2libGU+LnNwbGl0LXBhbmUtc2lkZTpub3QoaW9uLW1lbnUpLC5zcGxpdC1wYW5lLXZpc2libGU+aW9uLW1lbnUuc3BsaXQtcGFuZS1zaWRlLm1lbnUtZW5hYmxlZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9LnNwbGl0LXBhbmUtc2lkZTpub3QoaW9uLW1lbnUpe2Rpc3BsYXk6bm9uZX0uc3BsaXQtcGFuZS12aXNpYmxlPi5zcGxpdC1wYW5lLXNpZGV7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9LnNwbGl0LXBhbmUtdmlzaWJsZT4uc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXXstbXMtZmxleC1vcmRlcjoxO29yZGVyOjF9LnNwbGl0LXBhbmUtaW9zey0tYm9yZGVyOjAuNTVweCBzb2xpZCB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsI2M4YzdjYykpKX0uc3BsaXQtcGFuZS1pb3Muc3BsaXQtcGFuZS12aXNpYmxlPi5zcGxpdC1wYW5lLXNpZGV7bWluLXdpZHRoOjI3MHB4O21heC13aWR0aDoyOCU7Ym9yZGVyLXJpZ2h0OnZhcigtLWJvcmRlcik7Ym9yZGVyLWxlZnQ6MH0uc3BsaXQtcGFuZS1pb3Muc3BsaXQtcGFuZS12aXNpYmxlPi5zcGxpdC1wYW5lLXNpZGVbc2lkZT1lbmRde21pbi13aWR0aDoyNzBweDttYXgtd2lkdGg6MjglO2JvcmRlci1yaWdodDowO2JvcmRlci1sZWZ0OnZhcigtLWJvcmRlcil9XCI7IH1cbn07XG5jb25zdCBzZXRQYW5lQ2xhc3MgPSAoZWwsIGlzTWFpbikgPT4ge1xuICAgIGxldCB0b0FkZDtcbiAgICBsZXQgdG9SZW1vdmU7XG4gICAgaWYgKGlzTWFpbikge1xuICAgICAgICB0b0FkZCA9IFNQTElUX1BBTkVfTUFJTjtcbiAgICAgICAgdG9SZW1vdmUgPSBTUExJVF9QQU5FX1NJREU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0b0FkZCA9IFNQTElUX1BBTkVfU0lERTtcbiAgICAgICAgdG9SZW1vdmUgPSBTUExJVF9QQU5FX01BSU47XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKHRvQWRkKTtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKHRvUmVtb3ZlKTtcbn07XG5cbmV4cG9ydCB7IFNwbGl0UGFuZSBhcyBpb25fc3BsaXRfcGFuZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==