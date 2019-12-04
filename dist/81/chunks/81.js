(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-img.entry.js":
/*!*************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
  \*************************************************************/
/*! exports provided: ion_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_img", function() { return Img; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");



const Img = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.onLoad = () => {
            this.ionImgDidLoad.emit();
        };
        this.onError = () => {
            this.ionError.emit();
        };
        this.ionImgWillLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionImgWillLoad", 7);
        this.ionImgDidLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionImgDidLoad", 7);
        this.ionError = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionError", 7);
    }
    srcChanged() {
        this.addIO();
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIO();
            this.io = new IntersectionObserver(data => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.load();
                    this.removeIO();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.load(), 200);
        }
    }
    load() {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "src": ["srcChanged"]
    }; }
    static get style() { return ":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"; }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1pbWcuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GOztBQUU5QjtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDLDZCQUE2QiwyREFBVztBQUN4Qyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxRQUFRLDJEQUFVLFFBQVEsRUFBRSwyREFBQyxTQUFTLG9HQUFvRztBQUNuSztBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBLE1BQU07QUFDTix3QkFBd0IsZUFBZSxzQkFBc0IsbUJBQW1CLFVBQVUsY0FBYyxJQUFJLFdBQVcsWUFBWSxzQkFBc0IsbUJBQW1CLDJCQUEyQix3QkFBd0IsRUFBRTtBQUNqTzs7QUFFMEIiLCJmaWxlIjoiODFcXGNodW5rc1xcODEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGQgYXMgZ2V0SW9uTW9kZSwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5cbmNvbnN0IEltZyA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMub25Mb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25JbWdEaWRMb2FkLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25FcnJvci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uSW1nV2lsbExvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkltZ1dpbGxMb2FkXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkltZ0RpZExvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkltZ0RpZExvYWRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRXJyb3IgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkVycm9yXCIsIDcpO1xuICAgIH1cbiAgICBzcmNDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmFkZElPKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkSU8oKTtcbiAgICB9XG4gICAgYWRkSU8oKSB7XG4gICAgICAgIGlmICh0aGlzLnNyYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUlPKCk7XG4gICAgICAgICAgICB0aGlzLmlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBvbmx5IGV2ZXIgYmUgb25lIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIGVsZW1lbnQgd2UgYXJlIG9ic2VydmluZ1xuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBqdXN0IHVzZSBkYXRhWzBdXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSU8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaW8ub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayB0byBzZXRUaW1lb3V0IGZvciBTYWZhcmkgYW5kIElFXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZCgpLCAyMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZEVycm9yID0gdGhpcy5vbkVycm9yO1xuICAgICAgICB0aGlzLmxvYWRTcmMgPSB0aGlzLnNyYztcbiAgICAgICAgdGhpcy5pb25JbWdXaWxsTG9hZC5lbWl0KCk7XG4gICAgfVxuICAgIHJlbW92ZUlPKCkge1xuICAgICAgICBpZiAodGhpcy5pbykge1xuICAgICAgICAgICAgdGhpcy5pby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlvID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IGdldElvbk1vZGUodGhpcykgfSwgaChcImltZ1wiLCB7IGRlY29kaW5nOiBcImFzeW5jXCIsIHNyYzogdGhpcy5sb2FkU3JjLCBhbHQ6IHRoaXMuYWx0LCBvbkxvYWQ6IHRoaXMub25Mb2FkLCBvbkVycm9yOiB0aGlzLmxvYWRFcnJvciB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJzcmNcIjogW1wic3JjQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWlufTpob3N0LGltZ3tkaXNwbGF5OmJsb2NrfWltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6aW5oZXJpdDtvYmplY3QtZml0OmluaGVyaXQ7LW8tb2JqZWN0LXBvc2l0aW9uOmluaGVyaXQ7b2JqZWN0LXBvc2l0aW9uOmluaGVyaXR9XCI7IH1cbn07XG5cbmV4cG9ydCB7IEltZyBhcyBpb25faW1nIH07XG4iXSwic291cmNlUm9vdCI6IiJ9