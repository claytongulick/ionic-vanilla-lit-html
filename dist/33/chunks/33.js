(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \***************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js":
/*!***************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
  \***************************************************************/
/*! exports provided: ion_tab, ion_tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tabs", function() { return Tabs; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "../node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");




const Tab = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.loaded = false;
        /** @internal */
        this.active = false;
    }
    componentWillLoad() {
    }
    /** Set the active component for the tab */
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            try {
                return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, this.el, this.component, ['ion-page']);
            }
            catch (e) {
                console.error(e);
            }
        }
        return Promise.resolve(undefined);
    }
    render() {
        const { tab, active, component } = this;
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
                'ion-page': component === undefined,
                'tab-hidden': !active
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host(.tab-hidden){display:none!important}"; }
};

const Tabs = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.transitioning = false;
        /** @internal */
        this.useRouter = false;
        this.onTabClicked = (ev) => {
            const { href, tab } = ev.detail;
            if (this.useRouter && href !== undefined) {
                const router = document.querySelector('ion-router');
                if (router) {
                    router.push(href);
                }
            }
            else {
                this.select(tab);
            }
        };
        this.ionNavWillLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabsDidChange", 3);
    }
    async componentWillLoad() {
        if (!this.useRouter) {
            this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
        }
        if (!this.useRouter) {
            const tabs = this.tabs;
            await this.select(tabs[0]);
        }
        this.ionNavWillLoad.emit();
    }
    componentWillRender() {
        const tabBar = this.el.querySelector('ion-tab-bar');
        if (tabBar) {
            const tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabBar.selectedTab = tab;
        }
    }
    /**
     * Select a tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    async select(tab) {
        const selectedTab = getTab(this.tabs, tab);
        if (!this.shouldSwitch(selectedTab)) {
            return false;
        }
        await this.setActive(selectedTab);
        await this.notifyRouter();
        this.tabSwitch();
        return true;
    }
    /**
     * Get a specific tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    async getTab(tab) {
        return getTab(this.tabs, tab);
    }
    /**
     * Get the currently selected tab.
     */
    getSelected() {
        return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
    }
    /** @internal */
    async setRouteId(id) {
        const selectedTab = getTab(this.tabs, id);
        if (!this.shouldSwitch(selectedTab)) {
            return { changed: false, element: this.selectedTab };
        }
        await this.setActive(selectedTab);
        return {
            changed: true,
            element: this.selectedTab,
            markVisible: () => this.tabSwitch(),
        };
    }
    /** @internal */
    async getRouteId() {
        const tabId = this.selectedTab && this.selectedTab.tab;
        return tabId !== undefined ? { id: tabId, element: this.selectedTab } : undefined;
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionTabsWillChange.emit({ tab: selectedTab.tab });
        return selectedTab.setActive();
    }
    tabSwitch() {
        const selectedTab = this.selectedTab;
        const leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionTabsDidChange.emit({ tab: selectedTab.tab });
        }
    }
    notifyRouter() {
        if (this.useRouter) {
            const router = document.querySelector('ion-router');
            if (router) {
                return router.navChanged('forward');
            }
        }
        return Promise.resolve(false);
    }
    shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    }
    get tabs() {
        return Array.from(this.el.querySelectorAll('ion-tab'));
    }
    render() {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onIonTabButtonClick: this.onTabClicked }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "top" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "bottom" })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"; }
};
const getTab = (tabs, tab) => {
    const tabEl = (typeof tab === 'string')
        ? tabs.find(t => t.tab === tab)
        : tab;
    if (!tabEl) {
        console.error(`tab with id: "${tabEl}" does not exist`);
    }
    return tabEl;
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi10YWJfMi5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7QUNqQ3REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RztBQUM5RTtBQUMwQzs7QUFFeEU7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5RUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEMsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyw0RkFBNEYsSUFBSTtBQUN6SDtBQUNBO0FBQ0EsYUFBYSxFQUFFLEVBQUUsMkRBQUM7QUFDbEI7QUFDQSxjQUFjLFFBQVEsMkRBQVUsT0FBTztBQUN2Qyx3QkFBd0IsNEJBQTRCLHVCQUF1QixFQUFFO0FBQzdFOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDLGlDQUFpQywyREFBVztBQUM1QyxnQ0FBZ0MsMkRBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdUNBQXVDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsdUJBQXVCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyx5Q0FBeUMsRUFBRSwyREFBQyxVQUFVLGNBQWMsR0FBRywyREFBQyxTQUFTLHNCQUFzQixFQUFFLDJEQUFDLGlCQUFpQiwyREFBQyxVQUFVLGlCQUFpQjtBQUNoTDtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLHdCQUF3QixlQUFlLE9BQU8sUUFBUSxNQUFNLFNBQVMsb0JBQW9CLGFBQWEsa0JBQWtCLDBCQUEwQixzQkFBc0IsV0FBVyxZQUFZLFVBQVUsa0JBQWtCLDBCQUEwQixZQUFZLGtCQUFrQixXQUFXLE9BQU8sRUFBRTtBQUN2UztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTTtBQUM3QztBQUNBO0FBQ0E7O0FBRTRDIiwiZmlsZSI6IjMzXFxjaHVua3NcXDMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXR0YWNoQ29tcG9uZW50ID0gYXN5bmMgKGRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgY3NzQ2xhc3NlcywgY29tcG9uZW50UHJvcHMpID0+IHtcclxuICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBjc3NDbGFzc2VzKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJyAmJiAhKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgID8gY29udGFpbmVyLm93bmVyRG9jdW1lbnQgJiYgY29udGFpbmVyLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wb25lbnQpXHJcbiAgICAgICAgOiBjb21wb25lbnQ7XHJcbiAgICBpZiAoY3NzQ2xhc3Nlcykge1xyXG4gICAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaChjID0+IGVsLmNsYXNzTGlzdC5hZGQoYykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBvbmVudFByb3BzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbCwgY29tcG9uZW50UHJvcHMpO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGlmIChlbC5jb21wb25lbnRPblJlYWR5KSB7XHJcbiAgICAgICAgYXdhaXQgZWwuY29tcG9uZW50T25SZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG5jb25zdCBkZXRhY2hDb21wb25lbnQgPSAoZGVsZWdhdGUsIGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGNvbnRhaW5lciwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn07XG5cbmV4cG9ydCB7IGF0dGFjaENvbXBvbmVudCBhcyBhLCBkZXRhY2hDb21wb25lbnQgYXMgZCB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCwgYyBhcyBjcmVhdGVFdmVudCB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtYzJlMmUxZjQuanMnO1xuXG5jb25zdCBUYWIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIH1cbiAgICAvKiogU2V0IHRoZSBhY3RpdmUgY29tcG9uZW50IGZvciB0aGUgdGFiICovXG4gICAgYXN5bmMgc2V0QWN0aXZlKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByZXBhcmVMYXp5TG9hZGVkKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJlcGFyZUxhenlMb2FkZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZWQgJiYgdGhpcy5jb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMuZWwsIHRoaXMuY29tcG9uZW50LCBbJ2lvbi1wYWdlJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRhYiwgYWN0aXZlLCBjb21wb25lbnQgfSA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwidGFicGFuZWxcIiwgXCJhcmlhLWhpZGRlblwiOiAhYWN0aXZlID8gJ3RydWUnIDogbnVsbCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogYHRhYi1idXR0b24tJHt0YWJ9YCwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnaW9uLXBhZ2UnOiBjb21wb25lbnQgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAndGFiLWhpZGRlbic6ICFhY3RpdmVcbiAgICAgICAgICAgIH0gfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0KC50YWItaGlkZGVuKXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVwiOyB9XG59O1xuXG5jb25zdCBUYWJzID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy51c2VSb3V0ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblRhYkNsaWNrZWQgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaHJlZiwgdGFiIH0gPSBldi5kZXRhaWw7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VSb3V0ZXIgJiYgaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goaHJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QodGFiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsTG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTmF2V2lsbExvYWRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uVGFic1dpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRhYnNXaWxsQ2hhbmdlXCIsIDMpO1xuICAgICAgICB0aGlzLmlvblRhYnNEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRhYnNEaWRDaGFuZ2VcIiwgMyk7XG4gICAgfVxuICAgIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlUm91dGVyKSB7XG4gICAgICAgICAgICB0aGlzLnVzZVJvdXRlciA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpICYmICF0aGlzLmVsLmNsb3Nlc3QoJ1tuby1yb3V0ZXJdJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnVzZVJvdXRlcikge1xuICAgICAgICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFicztcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VsZWN0KHRhYnNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW9uTmF2V2lsbExvYWQuZW1pdCgpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgICAgICBjb25zdCB0YWJCYXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10YWItYmFyJyk7XG4gICAgICAgIGlmICh0YWJCYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMuc2VsZWN0ZWRUYWIgPyB0aGlzLnNlbGVjdGVkVGFiLnRhYiA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRhYkJhci5zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYSB0YWIgYnkgdGhlIHZhbHVlIG9mIGl0cyBgdGFiYCBwcm9wZXJ0eSBvciBhbiBlbGVtZW50IHJlZmVyZW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YWIgVGhlIHRhYiBpbnN0YW5jZSB0byBzZWxlY3QuIElmIHBhc3NlZCBhIHN0cmluZywgaXQgc2hvdWxkIGJlIHRoZSB2YWx1ZSBvZiB0aGUgdGFiJ3MgYHRhYmAgcHJvcGVydHkuXG4gICAgICovXG4gICAgYXN5bmMgc2VsZWN0KHRhYikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRhYiA9IGdldFRhYih0aGlzLnRhYnMsIHRhYik7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRTd2l0Y2goc2VsZWN0ZWRUYWIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zZXRBY3RpdmUoc2VsZWN0ZWRUYWIpO1xuICAgICAgICBhd2FpdCB0aGlzLm5vdGlmeVJvdXRlcigpO1xuICAgICAgICB0aGlzLnRhYlN3aXRjaCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgc3BlY2lmaWMgdGFiIGJ5IHRoZSB2YWx1ZSBvZiBpdHMgYHRhYmAgcHJvcGVydHkgb3IgYW4gZWxlbWVudCByZWZlcmVuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFiIFRoZSB0YWIgaW5zdGFuY2UgdG8gc2VsZWN0LiBJZiBwYXNzZWQgYSBzdHJpbmcsIGl0IHNob3VsZCBiZSB0aGUgdmFsdWUgb2YgdGhlIHRhYidzIGB0YWJgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFzeW5jIGdldFRhYih0YWIpIHtcbiAgICAgICAgcmV0dXJuIGdldFRhYih0aGlzLnRhYnMsIHRhYik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYi5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNlbGVjdGVkVGFiID8gdGhpcy5zZWxlY3RlZFRhYi50YWIgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgc2V0Um91dGVJZChpZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRhYiA9IGdldFRhYih0aGlzLnRhYnMsIGlkKTtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFN3aXRjaChzZWxlY3RlZFRhYikpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGNoYW5nZWQ6IGZhbHNlLCBlbGVtZW50OiB0aGlzLnNlbGVjdGVkVGFiIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zZXRBY3RpdmUoc2VsZWN0ZWRUYWIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hhbmdlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgICAgICBtYXJrVmlzaWJsZTogKCkgPT4gdGhpcy50YWJTd2l0Y2goKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIGdldFJvdXRlSWQoKSB7XG4gICAgICAgIGNvbnN0IHRhYklkID0gdGhpcy5zZWxlY3RlZFRhYiAmJiB0aGlzLnNlbGVjdGVkVGFiLnRhYjtcbiAgICAgICAgcmV0dXJuIHRhYklkICE9PSB1bmRlZmluZWQgPyB7IGlkOiB0YWJJZCwgZWxlbWVudDogdGhpcy5zZWxlY3RlZFRhYiB9IDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXRBY3RpdmUoc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCd0cmFuc2l0aW9uaW5nIGFscmVhZHkgaGFwcGVuaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWF2aW5nVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHNlbGVjdGVkVGFiO1xuICAgICAgICB0aGlzLmlvblRhYnNXaWxsQ2hhbmdlLmVtaXQoeyB0YWI6IHNlbGVjdGVkVGFiLnRhYiB9KTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGFiLnNldEFjdGl2ZSgpO1xuICAgIH1cbiAgICB0YWJTd2l0Y2goKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICAgICAgY29uc3QgbGVhdmluZ1RhYiA9IHRoaXMubGVhdmluZ1RhYjtcbiAgICAgICAgdGhpcy5sZWF2aW5nVGFiID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFRhYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWF2aW5nVGFiICE9PSBzZWxlY3RlZFRhYikge1xuICAgICAgICAgICAgaWYgKGxlYXZpbmdUYWIpIHtcbiAgICAgICAgICAgICAgICBsZWF2aW5nVGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pb25UYWJzRGlkQ2hhbmdlLmVtaXQoeyB0YWI6IHNlbGVjdGVkVGFiLnRhYiB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnlSb3V0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZVJvdXRlcikge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXIubmF2Q2hhbmdlZCgnZm9yd2FyZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgICBzaG91bGRTd2l0Y2goc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgY29uc3QgbGVhdmluZ1RhYiA9IHRoaXMuc2VsZWN0ZWRUYWI7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRhYiAhPT0gdW5kZWZpbmVkICYmIHNlbGVjdGVkVGFiICE9PSBsZWF2aW5nVGFiICYmICF0aGlzLnRyYW5zaXRpb25pbmc7XG4gICAgfVxuICAgIGdldCB0YWJzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi10YWInKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25Jb25UYWJCdXR0b25DbGljazogdGhpcy5vblRhYkNsaWNrZWQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInRvcFwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGFicy1pbm5lclwiIH0sIGgoXCJzbG90XCIsIG51bGwpKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImJvdHRvbVwiIH0pKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MH0udGFicy1pbm5lciw6aG9zdHtjb250YWluOmxheW91dCBzaXplIHN0eWxlfS50YWJzLWlubmVye3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxfVwiOyB9XG59O1xuY29uc3QgZ2V0VGFiID0gKHRhYnMsIHRhYikgPT4ge1xuICAgIGNvbnN0IHRhYkVsID0gKHR5cGVvZiB0YWIgPT09ICdzdHJpbmcnKVxuICAgICAgICA/IHRhYnMuZmluZCh0ID0+IHQudGFiID09PSB0YWIpXG4gICAgICAgIDogdGFiO1xuICAgIGlmICghdGFiRWwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgdGFiIHdpdGggaWQ6IFwiJHt0YWJFbH1cIiBkb2VzIG5vdCBleGlzdGApO1xuICAgIH1cbiAgICByZXR1cm4gdGFiRWw7XG59O1xuXG5leHBvcnQgeyBUYWIgYXMgaW9uX3RhYiwgVGFicyBhcyBpb25fdGFicyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==