(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-route_4.entry.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route_redirect", function() { return RouteRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_link", function() { return RouterLink; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const Route = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Relative path that needs to match in order for this route to apply.
         *
         * Accepts paths similar to expressjs so that you can define parameters
         * in the url /foo/:bar where bar would be available in incoming props.
         */
        this.url = '';
        this.ionRouteDataChanged = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteDataChanged", 7);
    }
    onUpdate(newValue) {
        this.ionRouteDataChanged.emit(newValue);
    }
    onComponentProps(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        const keys1 = newValue ? Object.keys(newValue) : [];
        const keys2 = oldValue ? Object.keys(oldValue) : [];
        if (keys1.length !== keys2.length) {
            this.onUpdate(newValue);
            return;
        }
        for (const key of keys1) {
            if (newValue[key] !== oldValue[key]) {
                this.onUpdate(newValue);
                return;
            }
        }
    }
    connectedCallback() {
        this.ionRouteDataChanged.emit();
    }
    static get watchers() { return {
        "url": ["onUpdate"],
        "component": ["onUpdate"],
        "componentProps": ["onComponentProps"]
    }; }
};

const RouteRedirect = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionRouteRedirectChanged = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteRedirectChanged", 7);
    }
    propDidChange() {
        this.ionRouteRedirectChanged.emit();
    }
    connectedCallback() {
        this.ionRouteRedirectChanged.emit();
    }
    static get watchers() { return {
        "from": ["propDidChange"],
        "to": ["propDidChange"]
    }; }
};

const ROUTER_INTENT_NONE = 'root';
const ROUTER_INTENT_FORWARD = 'forward';
const ROUTER_INTENT_BACK = 'back';

const generatePath = (segments) => {
    const path = segments
        .filter(s => s.length > 0)
        .join('/');
    return '/' + path;
};
const chainToPath = (chain) => {
    const path = [];
    for (const route of chain) {
        for (const segment of route.path) {
            if (segment[0] === ':') {
                const param = route.params && route.params[segment.slice(1)];
                if (!param) {
                    return null;
                }
                path.push(param);
            }
            else if (segment !== '') {
                path.push(segment);
            }
        }
    }
    return path;
};
const writePath = (history, root, useHash, path, direction, state) => {
    let url = generatePath([
        ...parsePath(root),
        ...path
    ]);
    if (useHash) {
        url = '#' + url;
    }
    if (direction === ROUTER_INTENT_FORWARD) {
        history.pushState(state, '', url);
    }
    else {
        history.replaceState(state, '', url);
    }
};
const removePrefix = (prefix, path) => {
    if (prefix.length > path.length) {
        return null;
    }
    if (prefix.length <= 1 && prefix[0] === '') {
        return path;
    }
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i].length > 0 && prefix[i] !== path[i]) {
            return null;
        }
    }
    if (path.length === prefix.length) {
        return [''];
    }
    return path.slice(prefix.length);
};
const readPath = (loc, root, useHash) => {
    let pathname = loc.pathname;
    if (useHash) {
        const hash = loc.hash;
        pathname = (hash[0] === '#')
            ? hash.slice(1)
            : '';
    }
    const prefix = parsePath(root);
    const path = parsePath(pathname);
    return removePrefix(prefix, path);
};
const parsePath = (path) => {
    if (path == null) {
        return [''];
    }
    const segments = path.split('/')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (segments.length === 0) {
        return [''];
    }
    else {
        return segments;
    }
};

const printRoutes = (routes) => {
    console.group(`[ion-core] ROUTES[${routes.length}]`);
    for (const chain of routes) {
        const path = [];
        chain.forEach(r => path.push(...r.path));
        const ids = chain.map(r => r.id);
        console.debug(`%c ${generatePath(path)}`, 'font-weight: bold; padding-left: 20px', '=>\t', `(${ids.join(', ')})`);
    }
    console.groupEnd();
};
const printRedirects = (redirects) => {
    console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
    for (const redirect of redirects) {
        if (redirect.to) {
            console.debug('FROM: ', `$c ${generatePath(redirect.from)}`, 'font-weight: bold', ' TO: ', `$c ${generatePath(redirect.to)}`, 'font-weight: bold');
        }
    }
    console.groupEnd();
};

const writeNavState = async (root, chain, direction, index, changed = false) => {
    try {
        // find next navigation outlet in the DOM
        const outlet = searchNavNode(root);
        // make sure we can continue interacting the DOM, otherwise abort
        if (index >= chain.length || !outlet) {
            return changed;
        }
        await outlet.componentOnReady();
        const route = chain[index];
        const result = await outlet.setRouteId(route.id, route.params, direction);
        // if the outlet changed the page, reset navigation to neutral (no direction)
        // this means nested outlets will not animate
        if (result.changed) {
            direction = ROUTER_INTENT_NONE;
            changed = true;
        }
        // recursively set nested outlets
        changed = await writeNavState(result.element, chain, direction, index + 1, changed);
        // once all nested outlets are visible let's make the parent visible too,
        // using markVisible prevents flickering
        if (result.markVisible) {
            await result.markVisible();
        }
        return changed;
    }
    catch (e) {
        console.error(e);
        return false;
    }
};
const readNavState = async (root) => {
    const ids = [];
    let outlet;
    let node = root;
    // tslint:disable-next-line:no-constant-condition
    while (true) {
        outlet = searchNavNode(node);
        if (outlet) {
            const id = await outlet.getRouteId();
            if (id) {
                node = id.element;
                id.element = undefined;
                ids.push(id);
            }
            else {
                break;
            }
        }
        else {
            break;
        }
    }
    return { ids, outlet };
};
const waitUntilNavNode = () => {
    if (searchNavNode(document.body)) {
        return Promise.resolve();
    }
    return new Promise(resolve => {
        window.addEventListener('ionNavWillLoad', resolve, { once: true });
    });
};
const QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
const searchNavNode = (root) => {
    if (!root) {
        return undefined;
    }
    if (root.matches(QUERY)) {
        return root;
    }
    const outlet = root.querySelector(QUERY);
    return outlet ? outlet : undefined;
};

const matchesRedirect = (input, route) => {
    const { from, to } = route;
    if (to === undefined) {
        return false;
    }
    if (from.length > input.length) {
        return false;
    }
    for (let i = 0; i < from.length; i++) {
        const expected = from[i];
        if (expected === '*') {
            return true;
        }
        if (expected !== input[i]) {
            return false;
        }
    }
    return from.length === input.length;
};
const routeRedirect = (path, routes) => {
    return routes.find(route => matchesRedirect(path, route));
};
const matchesIDs = (ids, chain) => {
    const len = Math.min(ids.length, chain.length);
    let i = 0;
    for (; i < len; i++) {
        if (ids[i].toLowerCase() !== chain[i].id) {
            break;
        }
    }
    return i;
};
const matchesPath = (inputPath, chain) => {
    const segments = new RouterSegments(inputPath);
    let matchesDefault = false;
    let allparams;
    for (let i = 0; i < chain.length; i++) {
        const path = chain[i].path;
        if (path[0] === '') {
            matchesDefault = true;
        }
        else {
            for (const segment of path) {
                const data = segments.next();
                // data param
                if (segment[0] === ':') {
                    if (data === '') {
                        return null;
                    }
                    allparams = allparams || [];
                    const params = allparams[i] || (allparams[i] = {});
                    params[segment.slice(1)] = data;
                }
                else if (data !== segment) {
                    return null;
                }
            }
            matchesDefault = false;
        }
    }
    const matches = (matchesDefault)
        ? matchesDefault === (segments.next() === '')
        : true;
    if (!matches) {
        return null;
    }
    if (allparams) {
        return chain.map((route, i) => ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, allparams[i])
        }));
    }
    return chain;
};
const mergeParams = (a, b) => {
    if (!a && b) {
        return b;
    }
    else if (a && !b) {
        return a;
    }
    else if (a && b) {
        return Object.assign(Object.assign({}, a), b);
    }
    return undefined;
};
const routerIDsToChain = (ids, chains) => {
    let match = null;
    let maxMatches = 0;
    const plainIDs = ids.map(i => i.id);
    for (const chain of chains) {
        const score = matchesIDs(plainIDs, chain);
        if (score > maxMatches) {
            match = chain;
            maxMatches = score;
        }
    }
    if (match) {
        return match.map((route, i) => ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, ids[i] && ids[i].params)
        }));
    }
    return null;
};
const routerPathToChain = (path, chains) => {
    let match = null;
    let matches = 0;
    for (const chain of chains) {
        const matchedChain = matchesPath(path, chain);
        if (matchedChain !== null) {
            const score = computePriority(matchedChain);
            if (score > matches) {
                matches = score;
                match = matchedChain;
            }
        }
    }
    return match;
};
const computePriority = (chain) => {
    let score = 1;
    let level = 1;
    for (const route of chain) {
        for (const path of route.path) {
            if (path[0] === ':') {
                score += Math.pow(1, level);
            }
            else if (path !== '') {
                score += Math.pow(2, level);
            }
            level++;
        }
    }
    return score;
};
class RouterSegments {
    constructor(path) {
        this.path = path.slice();
    }
    next() {
        if (this.path.length > 0) {
            return this.path.shift();
        }
        return '';
    }
}

const readRedirects = (root) => {
    return Array.from(root.children)
        .filter(el => el.tagName === 'ION-ROUTE-REDIRECT')
        .map(el => {
        const to = readProp(el, 'to');
        return {
            from: parsePath(readProp(el, 'from')),
            to: to == null ? undefined : parsePath(to),
        };
    });
};
const readRoutes = (root) => {
    return flattenRouterTree(readRouteNodes(root));
};
const readRouteNodes = (root, node = root) => {
    return Array.from(node.children)
        .filter(el => el.tagName === 'ION-ROUTE' && el.component)
        .map(el => {
        const component = readProp(el, 'component');
        if (component == null) {
            throw new Error('component missing in ion-route');
        }
        return {
            path: parsePath(readProp(el, 'url')),
            id: component.toLowerCase(),
            params: el.componentProps,
            children: readRouteNodes(root, el)
        };
    });
};
const readProp = (el, prop) => {
    if (prop in el) {
        return el[prop];
    }
    if (el.hasAttribute(prop)) {
        return el.getAttribute(prop);
    }
    return null;
};
const flattenRouterTree = (nodes) => {
    const routes = [];
    for (const node of nodes) {
        flattenNode([], routes, node);
    }
    return routes;
};
const flattenNode = (chain, routes, node) => {
    const s = chain.slice();
    s.push({
        id: node.id,
        path: node.path,
        params: node.params
    });
    if (node.children.length === 0) {
        routes.push(s);
        return;
    }
    for (const sub of node.children) {
        flattenNode(s, routes, sub);
    }
};

const Router = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        /**
         * By default `ion-router` will match the routes at the root path ("/").
         * That can be changed when
         *
         */
        this.root = '/';
        /**
         * The router can work in two "modes":
         * - With hash: `/index.html#/path/to/page`
         * - Without hash: `/path/to/page`
         *
         * Using one or another might depend in the requirements of your app and/or where it's deployed.
         *
         * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
         * requires additional server-side configuration in order to properly work.
         *
         * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
         *
         * By default, this property is `true`, change to `false` to allow hash-less URLs.
         */
        this.useHash = true;
        this.ionRouteWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteWillChange", 7);
        this.ionRouteDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteDidChange", 7);
    }
    async componentWillLoad() {
        console.debug('[ion-router] router will load');
        await waitUntilNavNode();
        console.debug('[ion-router] found nav');
        await this.onRoutesChanged();
    }
    componentDidLoad() {
        window.addEventListener('ionRouteRedirectChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.onRedirectChanged.bind(this), 10));
        window.addEventListener('ionRouteDataChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.onRoutesChanged.bind(this), 100));
    }
    onPopState() {
        const direction = this.historyDirection();
        const path = this.getPath();
        console.debug('[ion-router] URL changed -> update nav', path, direction);
        return this.writeNavStateRoot(path, direction);
    }
    onBackButton(ev) {
        ev.detail.register(0, () => this.back());
    }
    /**
     * Navigate to the specified URL.
     *
     * @param url The url to navigate to.
     * @param direction The direction of the animation. Defaults to `"forward"`.
     */
    push(url, direction = 'forward') {
        if (url.startsWith('.')) {
            url = (new URL(url, window.location.href)).pathname;
        }
        console.debug('[ion-router] URL pushed -> updating nav', url, direction);
        const path = parsePath(url);
        this.setPath(path, direction);
        return this.writeNavStateRoot(path, direction);
    }
    /**
     * Go back to previous page in the window.history.
     */
    back() {
        window.history.back();
        return Promise.resolve(this.waitPromise);
    }
    /** @internal */
    async printDebug() {
        console.debug('CURRENT PATH', this.getPath());
        console.debug('PREVIOUS PATH', this.previousPath);
        printRoutes(readRoutes(this.el));
        printRedirects(readRedirects(this.el));
    }
    /** @internal */
    async navChanged(direction) {
        if (this.busy) {
            console.warn('[ion-router] router is busy, navChanged was cancelled');
            return false;
        }
        const { ids, outlet } = await readNavState(window.document.body);
        const routes = readRoutes(this.el);
        const chain = routerIDsToChain(ids, routes);
        if (!chain) {
            console.warn('[ion-router] no matching URL for ', ids.map(i => i.id));
            return false;
        }
        const path = chainToPath(chain);
        if (!path) {
            console.warn('[ion-router] router could not match path because some required param is missing');
            return false;
        }
        console.debug('[ion-router] nav changed -> update URL', ids, path);
        this.setPath(path, direction);
        await this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length);
        return true;
    }
    onRedirectChanged() {
        const path = this.getPath();
        if (path && routeRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
        }
    }
    onRoutesChanged() {
        return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
    }
    historyDirection() {
        const win = window;
        if (win.history.state === null) {
            this.state++;
            win.history.replaceState(this.state, win.document.title, win.document.location && win.document.location.href);
        }
        const state = win.history.state;
        const lastState = this.lastState;
        this.lastState = state;
        if (state > lastState) {
            return ROUTER_INTENT_FORWARD;
        }
        else if (state < lastState) {
            return ROUTER_INTENT_BACK;
        }
        else {
            return ROUTER_INTENT_NONE;
        }
    }
    async writeNavStateRoot(path, direction) {
        if (!path) {
            console.error('[ion-router] URL is not part of the routing set');
            return false;
        }
        // lookup redirect rule
        const redirects = readRedirects(this.el);
        const redirect = routeRedirect(path, redirects);
        let redirectFrom = null;
        if (redirect) {
            this.setPath(redirect.to, direction);
            redirectFrom = redirect.from;
            path = redirect.to;
        }
        // lookup route chain
        const routes = readRoutes(this.el);
        const chain = routerPathToChain(path, routes);
        if (!chain) {
            console.error('[ion-router] the path does not match any route');
            return false;
        }
        // write DOM give
        return this.safeWriteNavState(document.body, chain, direction, path, redirectFrom);
    }
    async safeWriteNavState(node, chain, direction, path, redirectFrom, index = 0) {
        const unlock = await this.lock();
        let changed = false;
        try {
            changed = await this.writeNavState(node, chain, direction, path, redirectFrom, index);
        }
        catch (e) {
            console.error(e);
        }
        unlock();
        return changed;
    }
    async lock() {
        const p = this.waitPromise;
        let resolve;
        this.waitPromise = new Promise(r => resolve = r);
        if (p !== undefined) {
            await p;
        }
        return resolve;
    }
    async writeNavState(node, chain, direction, path, redirectFrom, index = 0) {
        if (this.busy) {
            console.warn('[ion-router] router is busy, transition was cancelled');
            return false;
        }
        this.busy = true;
        // generate route event and emit will change
        const routeEvent = this.routeChangeEvent(path, redirectFrom);
        if (routeEvent) {
            this.ionRouteWillChange.emit(routeEvent);
        }
        const changed = await writeNavState(node, chain, direction, index);
        this.busy = false;
        if (changed) {
            console.debug('[ion-router] route changed', path);
        }
        // emit did change
        if (routeEvent) {
            this.ionRouteDidChange.emit(routeEvent);
        }
        return changed;
    }
    setPath(path, direction) {
        this.state++;
        writePath(window.history, this.root, this.useHash, path, direction, this.state);
    }
    getPath() {
        return readPath(window.location, this.root, this.useHash);
    }
    routeChangeEvent(path, redirectFromPath) {
        const from = this.previousPath;
        const to = generatePath(path);
        this.previousPath = to;
        if (to === from) {
            return null;
        }
        const redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
        return {
            from,
            redirectedFrom,
            to,
        };
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
};

const RouterLink = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = (ev) => {
            Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(this.href, ev, this.routerDirection);
        };
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const attrs = {
            href: this.href,
            rel: this.rel,
            target: this.target
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true, 'ion-activatable': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    }
    static get style() { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; }
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!**************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \**************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1yb3V0ZV80LmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMvRjtBQUN3QjtBQUNzQjs7QUFFNUU7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJEQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLHVDQUF1QywyREFBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQixzQkFBc0Isa0NBQWtDLGVBQWU7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsaUJBQWlCO0FBQzNEO0FBQ0E7QUFDQSwwQ0FBMEMsNEJBQTRCLHVDQUF1QywwQkFBMEI7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsYUFBYTtBQUN6RSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJEQUFXO0FBQzdDLGlDQUFpQywyREFBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDhEQUFRO0FBQ25FLHVEQUF1RCw4REFBUTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkM7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLDZEQUE2RCxFQUFFLDREQUFrQixnQkFBZ0Isd0NBQXdDLEdBQUcsRUFBRSwyREFBQyxzQkFBc0IsVUFBVSwyREFBQztBQUN6TTtBQUNBLHdCQUF3QixlQUFlLHlCQUF5Qix5Q0FBeUMsNkJBQTZCLG1CQUFtQixrQkFBa0IsNEJBQTRCLEVBQUUsb0JBQW9CLGtCQUFrQixtQkFBbUIsb0JBQW9CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsb0JBQW9CLGNBQWMsRUFBRTtBQUN6YTs7QUFFd0g7Ozs7Ozs7Ozs7Ozs7QUMvckJ4SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjY3XFxjaHVua3NcXDY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBlIGFzIGdldEVsZW1lbnQsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZSBhcyBkZWJvdW5jZSB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBvIGFzIG9wZW5VUkwsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5cbmNvbnN0IFJvdXRlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbGF0aXZlIHBhdGggdGhhdCBuZWVkcyB0byBtYXRjaCBpbiBvcmRlciBmb3IgdGhpcyByb3V0ZSB0byBhcHBseS5cbiAgICAgICAgICpcbiAgICAgICAgICogQWNjZXB0cyBwYXRocyBzaW1pbGFyIHRvIGV4cHJlc3NqcyBzbyB0aGF0IHlvdSBjYW4gZGVmaW5lIHBhcmFtZXRlcnNcbiAgICAgICAgICogaW4gdGhlIHVybCAvZm9vLzpiYXIgd2hlcmUgYmFyIHdvdWxkIGJlIGF2YWlsYWJsZSBpbiBpbmNvbWluZyBwcm9wcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXJsID0gJyc7XG4gICAgICAgIHRoaXMuaW9uUm91dGVEYXRhQ2hhbmdlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUm91dGVEYXRhQ2hhbmdlZFwiLCA3KTtcbiAgICB9XG4gICAgb25VcGRhdGUobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5pb25Sb3V0ZURhdGFDaGFuZ2VkLmVtaXQobmV3VmFsdWUpO1xuICAgIH1cbiAgICBvbkNvbXBvbmVudFByb3BzKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5czEgPSBuZXdWYWx1ZSA/IE9iamVjdC5rZXlzKG5ld1ZhbHVlKSA6IFtdO1xuICAgICAgICBjb25zdCBrZXlzMiA9IG9sZFZhbHVlID8gT2JqZWN0LmtleXMob2xkVmFsdWUpIDogW107XG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5czEpIHtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZVtrZXldICE9PSBvbGRWYWx1ZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmlvblJvdXRlRGF0YUNoYW5nZWQuZW1pdCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgICAgICBcInVybFwiOiBbXCJvblVwZGF0ZVwiXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogW1wib25VcGRhdGVcIl0sXG4gICAgICAgIFwiY29tcG9uZW50UHJvcHNcIjogW1wib25Db21wb25lbnRQcm9wc1wiXVxuICAgIH07IH1cbn07XG5cbmNvbnN0IFJvdXRlUmVkaXJlY3QgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlvblJvdXRlUmVkaXJlY3RDaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZFwiLCA3KTtcbiAgICB9XG4gICAgcHJvcERpZENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5pb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZC5lbWl0KCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmlvblJvdXRlUmVkaXJlY3RDaGFuZ2VkLmVtaXQoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJmcm9tXCI6IFtcInByb3BEaWRDaGFuZ2VcIl0sXG4gICAgICAgIFwidG9cIjogW1wicHJvcERpZENoYW5nZVwiXVxuICAgIH07IH1cbn07XG5cbmNvbnN0IFJPVVRFUl9JTlRFTlRfTk9ORSA9ICdyb290JztcclxuY29uc3QgUk9VVEVSX0lOVEVOVF9GT1JXQVJEID0gJ2ZvcndhcmQnO1xyXG5jb25zdCBST1VURVJfSU5URU5UX0JBQ0sgPSAnYmFjayc7XG5cbmNvbnN0IGdlbmVyYXRlUGF0aCA9IChzZWdtZW50cykgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IHNlZ21lbnRzXHJcbiAgICAgICAgLmZpbHRlcihzID0+IHMubGVuZ3RoID4gMClcclxuICAgICAgICAuam9pbignLycpO1xyXG4gICAgcmV0dXJuICcvJyArIHBhdGg7XHJcbn07XHJcbmNvbnN0IGNoYWluVG9QYXRoID0gKGNoYWluKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIGNoYWluKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzZWdtZW50IG9mIHJvdXRlLnBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnRbMF0gPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSByb3V0ZS5wYXJhbXMgJiYgcm91dGUucGFyYW1zW3NlZ21lbnQuc2xpY2UoMSldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHBhcmFtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWdtZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHNlZ21lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn07XHJcbmNvbnN0IHdyaXRlUGF0aCA9IChoaXN0b3J5LCByb290LCB1c2VIYXNoLCBwYXRoLCBkaXJlY3Rpb24sIHN0YXRlKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gZ2VuZXJhdGVQYXRoKFtcclxuICAgICAgICAuLi5wYXJzZVBhdGgocm9vdCksXHJcbiAgICAgICAgLi4ucGF0aFxyXG4gICAgXSk7XHJcbiAgICBpZiAodXNlSGFzaCkge1xyXG4gICAgICAgIHVybCA9ICcjJyArIHVybDtcclxuICAgIH1cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IFJPVVRFUl9JTlRFTlRfRk9SV0FSRCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCAnJywgdXJsKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCAnJywgdXJsKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgcmVtb3ZlUHJlZml4ID0gKHByZWZpeCwgcGF0aCkgPT4ge1xyXG4gICAgaWYgKHByZWZpeC5sZW5ndGggPiBwYXRoLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHByZWZpeC5sZW5ndGggPD0gMSAmJiBwcmVmaXhbMF0gPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwcmVmaXhbaV0ubGVuZ3RoID4gMCAmJiBwcmVmaXhbaV0gIT09IHBhdGhbaV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSBwcmVmaXgubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsnJ107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aC5zbGljZShwcmVmaXgubGVuZ3RoKTtcclxufTtcclxuY29uc3QgcmVhZFBhdGggPSAobG9jLCByb290LCB1c2VIYXNoKSA9PiB7XHJcbiAgICBsZXQgcGF0aG5hbWUgPSBsb2MucGF0aG5hbWU7XHJcbiAgICBpZiAodXNlSGFzaCkge1xyXG4gICAgICAgIGNvbnN0IGhhc2ggPSBsb2MuaGFzaDtcclxuICAgICAgICBwYXRobmFtZSA9IChoYXNoWzBdID09PSAnIycpXHJcbiAgICAgICAgICAgID8gaGFzaC5zbGljZSgxKVxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJlZml4ID0gcGFyc2VQYXRoKHJvb3QpO1xyXG4gICAgY29uc3QgcGF0aCA9IHBhcnNlUGF0aChwYXRobmFtZSk7XHJcbiAgICByZXR1cm4gcmVtb3ZlUHJlZml4KHByZWZpeCwgcGF0aCk7XHJcbn07XHJcbmNvbnN0IHBhcnNlUGF0aCA9IChwYXRoKSA9PiB7XHJcbiAgICBpZiAocGF0aCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFsnJ107XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKVxyXG4gICAgICAgIC5tYXAocyA9PiBzLnRyaW0oKSlcclxuICAgICAgICAuZmlsdGVyKHMgPT4gcy5sZW5ndGggPiAwKTtcclxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gWycnXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50cztcclxuICAgIH1cclxufTtcblxuY29uc3QgcHJpbnRSb3V0ZXMgPSAocm91dGVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmdyb3VwKGBbaW9uLWNvcmVdIFJPVVRFU1ske3JvdXRlcy5sZW5ndGh9XWApO1xyXG4gICAgZm9yIChjb25zdCBjaGFpbiBvZiByb3V0ZXMpIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gW107XHJcbiAgICAgICAgY2hhaW4uZm9yRWFjaChyID0+IHBhdGgucHVzaCguLi5yLnBhdGgpKTtcclxuICAgICAgICBjb25zdCBpZHMgPSBjaGFpbi5tYXAociA9PiByLmlkKTtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKGAlYyAke2dlbmVyYXRlUGF0aChwYXRoKX1gLCAnZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmctbGVmdDogMjBweCcsICc9PlxcdCcsIGAoJHtpZHMuam9pbignLCAnKX0pYCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn07XHJcbmNvbnN0IHByaW50UmVkaXJlY3RzID0gKHJlZGlyZWN0cykgPT4ge1xyXG4gICAgY29uc29sZS5ncm91cChgW2lvbi1jb3JlXSBSRURJUkVDVFNbJHtyZWRpcmVjdHMubGVuZ3RofV1gKTtcclxuICAgIGZvciAoY29uc3QgcmVkaXJlY3Qgb2YgcmVkaXJlY3RzKSB7XHJcbiAgICAgICAgaWYgKHJlZGlyZWN0LnRvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0ZST006ICcsIGAkYyAke2dlbmVyYXRlUGF0aChyZWRpcmVjdC5mcm9tKX1gLCAnZm9udC13ZWlnaHQ6IGJvbGQnLCAnIFRPOiAnLCBgJGMgJHtnZW5lcmF0ZVBhdGgocmVkaXJlY3QudG8pfWAsICdmb250LXdlaWdodDogYm9sZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufTtcblxuY29uc3Qgd3JpdGVOYXZTdGF0ZSA9IGFzeW5jIChyb290LCBjaGFpbiwgZGlyZWN0aW9uLCBpbmRleCwgY2hhbmdlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGZpbmQgbmV4dCBuYXZpZ2F0aW9uIG91dGxldCBpbiB0aGUgRE9NXHJcbiAgICAgICAgY29uc3Qgb3V0bGV0ID0gc2VhcmNoTmF2Tm9kZShyb290KTtcclxuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgY2FuIGNvbnRpbnVlIGludGVyYWN0aW5nIHRoZSBET00sIG90aGVyd2lzZSBhYm9ydFxyXG4gICAgICAgIGlmIChpbmRleCA+PSBjaGFpbi5sZW5ndGggfHwgIW91dGxldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgb3V0bGV0LmNvbXBvbmVudE9uUmVhZHkoKTtcclxuICAgICAgICBjb25zdCByb3V0ZSA9IGNoYWluW2luZGV4XTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvdXRsZXQuc2V0Um91dGVJZChyb3V0ZS5pZCwgcm91dGUucGFyYW1zLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIC8vIGlmIHRoZSBvdXRsZXQgY2hhbmdlZCB0aGUgcGFnZSwgcmVzZXQgbmF2aWdhdGlvbiB0byBuZXV0cmFsIChubyBkaXJlY3Rpb24pXHJcbiAgICAgICAgLy8gdGhpcyBtZWFucyBuZXN0ZWQgb3V0bGV0cyB3aWxsIG5vdCBhbmltYXRlXHJcbiAgICAgICAgaWYgKHJlc3VsdC5jaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFJPVVRFUl9JTlRFTlRfTk9ORTtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IHNldCBuZXN0ZWQgb3V0bGV0c1xyXG4gICAgICAgIGNoYW5nZWQgPSBhd2FpdCB3cml0ZU5hdlN0YXRlKHJlc3VsdC5lbGVtZW50LCBjaGFpbiwgZGlyZWN0aW9uLCBpbmRleCArIDEsIGNoYW5nZWQpO1xyXG4gICAgICAgIC8vIG9uY2UgYWxsIG5lc3RlZCBvdXRsZXRzIGFyZSB2aXNpYmxlIGxldCdzIG1ha2UgdGhlIHBhcmVudCB2aXNpYmxlIHRvbyxcclxuICAgICAgICAvLyB1c2luZyBtYXJrVmlzaWJsZSBwcmV2ZW50cyBmbGlja2VyaW5nXHJcbiAgICAgICAgaWYgKHJlc3VsdC5tYXJrVmlzaWJsZSkge1xyXG4gICAgICAgICAgICBhd2FpdCByZXN1bHQubWFya1Zpc2libGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCByZWFkTmF2U3RhdGUgPSBhc3luYyAocm9vdCkgPT4ge1xyXG4gICAgY29uc3QgaWRzID0gW107XHJcbiAgICBsZXQgb3V0bGV0O1xyXG4gICAgbGV0IG5vZGUgPSByb290O1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnN0YW50LWNvbmRpdGlvblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBvdXRsZXQgPSBzZWFyY2hOYXZOb2RlKG5vZGUpO1xyXG4gICAgICAgIGlmIChvdXRsZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBhd2FpdCBvdXRsZXQuZ2V0Um91dGVJZCgpO1xyXG4gICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBpZC5lbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWQuZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGlkcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpZHMsIG91dGxldCB9O1xyXG59O1xyXG5jb25zdCB3YWl0VW50aWxOYXZOb2RlID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaE5hdk5vZGUoZG9jdW1lbnQuYm9keSkpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbk5hdldpbGxMb2FkJywgcmVzb2x2ZSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IFFVRVJZID0gJzpub3QoW25vLXJvdXRlcl0pIGlvbi1uYXYsIDpub3QoW25vLXJvdXRlcl0pIGlvbi10YWJzLCA6bm90KFtuby1yb3V0ZXJdKSBpb24tcm91dGVyLW91dGxldCc7XHJcbmNvbnN0IHNlYXJjaE5hdk5vZGUgPSAocm9vdCkgPT4ge1xyXG4gICAgaWYgKCFyb290KSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChyb290Lm1hdGNoZXMoUVVFUlkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRsZXQgPSByb290LnF1ZXJ5U2VsZWN0b3IoUVVFUlkpO1xyXG4gICAgcmV0dXJuIG91dGxldCA/IG91dGxldCA6IHVuZGVmaW5lZDtcclxufTtcblxuY29uc3QgbWF0Y2hlc1JlZGlyZWN0ID0gKGlucHV0LCByb3V0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gcm91dGU7XHJcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChmcm9tLmxlbmd0aCA+IGlucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gZnJvbVtpXTtcclxuICAgICAgICBpZiAoZXhwZWN0ZWQgPT09ICcqJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4cGVjdGVkICE9PSBpbnB1dFtpXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyb20ubGVuZ3RoID09PSBpbnB1dC5sZW5ndGg7XHJcbn07XHJcbmNvbnN0IHJvdXRlUmVkaXJlY3QgPSAocGF0aCwgcm91dGVzKSA9PiB7XHJcbiAgICByZXR1cm4gcm91dGVzLmZpbmQocm91dGUgPT4gbWF0Y2hlc1JlZGlyZWN0KHBhdGgsIHJvdXRlKSk7XHJcbn07XHJcbmNvbnN0IG1hdGNoZXNJRHMgPSAoaWRzLCBjaGFpbikgPT4ge1xyXG4gICAgY29uc3QgbGVuID0gTWF0aC5taW4oaWRzLmxlbmd0aCwgY2hhaW4ubGVuZ3RoKTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoaWRzW2ldLnRvTG93ZXJDYXNlKCkgIT09IGNoYWluW2ldLmlkKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpO1xyXG59O1xyXG5jb25zdCBtYXRjaGVzUGF0aCA9IChpbnB1dFBhdGgsIGNoYWluKSA9PiB7XHJcbiAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBSb3V0ZXJTZWdtZW50cyhpbnB1dFBhdGgpO1xyXG4gICAgbGV0IG1hdGNoZXNEZWZhdWx0ID0gZmFsc2U7XHJcbiAgICBsZXQgYWxscGFyYW1zO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSBjaGFpbltpXS5wYXRoO1xyXG4gICAgICAgIGlmIChwYXRoWzBdID09PSAnJykge1xyXG4gICAgICAgICAgICBtYXRjaGVzRGVmYXVsdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNlZ21lbnRzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEgcGFyYW1cclxuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50WzBdID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbHBhcmFtcyA9IGFsbHBhcmFtcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBhbGxwYXJhbXNbaV0gfHwgKGFsbHBhcmFtc1tpXSA9IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbc2VnbWVudC5zbGljZSgxKV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YSAhPT0gc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hdGNoZXNEZWZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2hlcyA9IChtYXRjaGVzRGVmYXVsdClcclxuICAgICAgICA/IG1hdGNoZXNEZWZhdWx0ID09PSAoc2VnbWVudHMubmV4dCgpID09PSAnJylcclxuICAgICAgICA6IHRydWU7XHJcbiAgICBpZiAoIW1hdGNoZXMpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChhbGxwYXJhbXMpIHtcclxuICAgICAgICByZXR1cm4gY2hhaW4ubWFwKChyb3V0ZSwgaSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IHJvdXRlLmlkLFxyXG4gICAgICAgICAgICBwYXRoOiByb3V0ZS5wYXRoLFxyXG4gICAgICAgICAgICBwYXJhbXM6IG1lcmdlUGFyYW1zKHJvdXRlLnBhcmFtcywgYWxscGFyYW1zW2ldKVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGFpbjtcclxufTtcclxuY29uc3QgbWVyZ2VQYXJhbXMgPSAoYSwgYikgPT4ge1xyXG4gICAgaWYgKCFhICYmIGIpIHtcclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGEgJiYgIWIpIHtcclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGEgJiYgYikge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGEpLCBiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IHJvdXRlcklEc1RvQ2hhaW4gPSAoaWRzLCBjaGFpbnMpID0+IHtcclxuICAgIGxldCBtYXRjaCA9IG51bGw7XHJcbiAgICBsZXQgbWF4TWF0Y2hlcyA9IDA7XHJcbiAgICBjb25zdCBwbGFpbklEcyA9IGlkcy5tYXAoaSA9PiBpLmlkKTtcclxuICAgIGZvciAoY29uc3QgY2hhaW4gb2YgY2hhaW5zKSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBtYXRjaGVzSURzKHBsYWluSURzLCBjaGFpbik7XHJcbiAgICAgICAgaWYgKHNjb3JlID4gbWF4TWF0Y2hlcykge1xyXG4gICAgICAgICAgICBtYXRjaCA9IGNoYWluO1xyXG4gICAgICAgICAgICBtYXhNYXRjaGVzID0gc2NvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoLm1hcCgocm91dGUsIGkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiByb3V0ZS5pZCxcclxuICAgICAgICAgICAgcGF0aDogcm91dGUucGF0aCxcclxuICAgICAgICAgICAgcGFyYW1zOiBtZXJnZVBhcmFtcyhyb3V0ZS5wYXJhbXMsIGlkc1tpXSAmJiBpZHNbaV0ucGFyYW1zKVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5jb25zdCByb3V0ZXJQYXRoVG9DaGFpbiA9IChwYXRoLCBjaGFpbnMpID0+IHtcclxuICAgIGxldCBtYXRjaCA9IG51bGw7XHJcbiAgICBsZXQgbWF0Y2hlcyA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZWRDaGFpbiA9IG1hdGNoZXNQYXRoKHBhdGgsIGNoYWluKTtcclxuICAgICAgICBpZiAobWF0Y2hlZENoYWluICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVByaW9yaXR5KG1hdGNoZWRDaGFpbik7XHJcbiAgICAgICAgICAgIGlmIChzY29yZSA+IG1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBzY29yZTtcclxuICAgICAgICAgICAgICAgIG1hdGNoID0gbWF0Y2hlZENoYWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoO1xyXG59O1xyXG5jb25zdCBjb21wdXRlUHJpb3JpdHkgPSAoY2hhaW4pID0+IHtcclxuICAgIGxldCBzY29yZSA9IDE7XHJcbiAgICBsZXQgbGV2ZWwgPSAxO1xyXG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiBjaGFpbikge1xyXG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiByb3V0ZS5wYXRoKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoWzBdID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIHNjb3JlICs9IE1hdGgucG93KDEsIGxldmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwYXRoICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgc2NvcmUgKz0gTWF0aC5wb3coMiwgbGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldmVsKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjb3JlO1xyXG59O1xyXG5jbGFzcyBSb3V0ZXJTZWdtZW50cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aC5zbGljZSgpO1xyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGF0aC5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cblxuY29uc3QgcmVhZFJlZGlyZWN0cyA9IChyb290KSA9PiB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShyb290LmNoaWxkcmVuKVxyXG4gICAgICAgIC5maWx0ZXIoZWwgPT4gZWwudGFnTmFtZSA9PT0gJ0lPTi1ST1VURS1SRURJUkVDVCcpXHJcbiAgICAgICAgLm1hcChlbCA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSByZWFkUHJvcChlbCwgJ3RvJyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZnJvbTogcGFyc2VQYXRoKHJlYWRQcm9wKGVsLCAnZnJvbScpKSxcclxuICAgICAgICAgICAgdG86IHRvID09IG51bGwgPyB1bmRlZmluZWQgOiBwYXJzZVBhdGgodG8pLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgcmVhZFJvdXRlcyA9IChyb290KSA9PiB7XHJcbiAgICByZXR1cm4gZmxhdHRlblJvdXRlclRyZWUocmVhZFJvdXRlTm9kZXMocm9vdCkpO1xyXG59O1xyXG5jb25zdCByZWFkUm91dGVOb2RlcyA9IChyb290LCBub2RlID0gcm9vdCkgPT4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obm9kZS5jaGlsZHJlbilcclxuICAgICAgICAuZmlsdGVyKGVsID0+IGVsLnRhZ05hbWUgPT09ICdJT04tUk9VVEUnICYmIGVsLmNvbXBvbmVudClcclxuICAgICAgICAubWFwKGVsID0+IHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFkUHJvcChlbCwgJ2NvbXBvbmVudCcpO1xyXG4gICAgICAgIGlmIChjb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXBvbmVudCBtaXNzaW5nIGluIGlvbi1yb3V0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXRoOiBwYXJzZVBhdGgocmVhZFByb3AoZWwsICd1cmwnKSksXHJcbiAgICAgICAgICAgIGlkOiBjb21wb25lbnQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgcGFyYW1zOiBlbC5jb21wb25lbnRQcm9wcyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IHJlYWRSb3V0ZU5vZGVzKHJvb3QsIGVsKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgcmVhZFByb3AgPSAoZWwsIHByb3ApID0+IHtcclxuICAgIGlmIChwcm9wIGluIGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShwcm9wKSkge1xyXG4gICAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuY29uc3QgZmxhdHRlblJvdXRlclRyZWUgPSAobm9kZXMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcbiAgICAgICAgZmxhdHRlbk5vZGUoW10sIHJvdXRlcywgbm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcm91dGVzO1xyXG59O1xyXG5jb25zdCBmbGF0dGVuTm9kZSA9IChjaGFpbiwgcm91dGVzLCBub2RlKSA9PiB7XHJcbiAgICBjb25zdCBzID0gY2hhaW4uc2xpY2UoKTtcclxuICAgIHMucHVzaCh7XHJcbiAgICAgICAgaWQ6IG5vZGUuaWQsXHJcbiAgICAgICAgcGF0aDogbm9kZS5wYXRoLFxyXG4gICAgICAgIHBhcmFtczogbm9kZS5wYXJhbXNcclxuICAgIH0pO1xyXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcm91dGVzLnB1c2gocyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBzdWIgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZsYXR0ZW5Ob2RlKHMsIHJvdXRlcywgc3ViKTtcclxuICAgIH1cclxufTtcblxuY29uc3QgUm91dGVyID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhdGggPSBudWxsO1xuICAgICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdFN0YXRlID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQgYGlvbi1yb3V0ZXJgIHdpbGwgbWF0Y2ggdGhlIHJvdXRlcyBhdCB0aGUgcm9vdCBwYXRoIChcIi9cIikuXG4gICAgICAgICAqIFRoYXQgY2FuIGJlIGNoYW5nZWQgd2hlblxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb290ID0gJy8nO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJvdXRlciBjYW4gd29yayBpbiB0d28gXCJtb2Rlc1wiOlxuICAgICAgICAgKiAtIFdpdGggaGFzaDogYC9pbmRleC5odG1sIy9wYXRoL3RvL3BhZ2VgXG4gICAgICAgICAqIC0gV2l0aG91dCBoYXNoOiBgL3BhdGgvdG8vcGFnZWBcbiAgICAgICAgICpcbiAgICAgICAgICogVXNpbmcgb25lIG9yIGFub3RoZXIgbWlnaHQgZGVwZW5kIGluIHRoZSByZXF1aXJlbWVudHMgb2YgeW91ciBhcHAgYW5kL29yIHdoZXJlIGl0J3MgZGVwbG95ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFVzdWFsbHkgXCJoYXNoLWxlc3NcIiBuYXZpZ2F0aW9uIHdvcmtzIGJldHRlciBmb3IgU0VPIGFuZCBpdCdzIG1vcmUgdXNlciBmcmllbmRseSB0b28sIGJ1dCBpdCBtaWdodFxuICAgICAgICAgKiByZXF1aXJlcyBhZGRpdGlvbmFsIHNlcnZlci1zaWRlIGNvbmZpZ3VyYXRpb24gaW4gb3JkZXIgdG8gcHJvcGVybHkgd29yay5cbiAgICAgICAgICpcbiAgICAgICAgICogT24gdGhlIG90aGVyc2lkZSBoYXNoLW5hdmlnYXRpb24gaXMgbXVjaCBlYXNpZXIgdG8gZGVwbG95LCBpdCBldmVuIHdvcmtzIG92ZXIgdGhlIGZpbGUgcHJvdG9jb2wuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvcGVydHkgaXMgYHRydWVgLCBjaGFuZ2UgdG8gYGZhbHNlYCB0byBhbGxvdyBoYXNoLWxlc3MgVVJMcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXNlSGFzaCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uUm91dGVXaWxsQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Sb3V0ZVdpbGxDaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uUm91dGVEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJvdXRlRGlkQ2hhbmdlXCIsIDcpO1xuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnW2lvbi1yb3V0ZXJdIHJvdXRlciB3aWxsIGxvYWQnKTtcbiAgICAgICAgYXdhaXQgd2FpdFVudGlsTmF2Tm9kZSgpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdbaW9uLXJvdXRlcl0gZm91bmQgbmF2Jyk7XG4gICAgICAgIGF3YWl0IHRoaXMub25Sb3V0ZXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZCcsIGRlYm91bmNlKHRoaXMub25SZWRpcmVjdENoYW5nZWQuYmluZCh0aGlzKSwgMTApKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvblJvdXRlRGF0YUNoYW5nZWQnLCBkZWJvdW5jZSh0aGlzLm9uUm91dGVzQ2hhbmdlZC5iaW5kKHRoaXMpLCAxMDApKTtcbiAgICB9XG4gICAgb25Qb3BTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5oaXN0b3J5RGlyZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnW2lvbi1yb3V0ZXJdIFVSTCBjaGFuZ2VkIC0+IHVwZGF0ZSBuYXYnLCBwYXRoLCBkaXJlY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZU5hdlN0YXRlUm9vdChwYXRoLCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICBvbkJhY2tCdXR0b24oZXYpIHtcbiAgICAgICAgZXYuZGV0YWlsLnJlZ2lzdGVyKDAsICgpID0+IHRoaXMuYmFjaygpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGUgdG8gdGhlIHNwZWNpZmllZCBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSB1cmwgdG8gbmF2aWdhdGUgdG8uXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIG9mIHRoZSBhbmltYXRpb24uIERlZmF1bHRzIHRvIGBcImZvcndhcmRcImAuXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGRpcmVjdGlvbiA9ICdmb3J3YXJkJykge1xuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICAgICAgdXJsID0gKG5ldyBVUkwodXJsLCB3aW5kb3cubG9jYXRpb24uaHJlZikpLnBhdGhuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tpb24tcm91dGVyXSBVUkwgcHVzaGVkIC0+IHVwZGF0aW5nIG5hdicsIHVybCwgZGlyZWN0aW9uKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHBhcnNlUGF0aCh1cmwpO1xuICAgICAgICB0aGlzLnNldFBhdGgocGF0aCwgZGlyZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVOYXZTdGF0ZVJvb3QocGF0aCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayB0byBwcmV2aW91cyBwYWdlIGluIHRoZSB3aW5kb3cuaGlzdG9yeS5cbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy53YWl0UHJvbWlzZSk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhc3luYyBwcmludERlYnVnKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdDVVJSRU5UIFBBVEgnLCB0aGlzLmdldFBhdGgoKSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1BSRVZJT1VTIFBBVEgnLCB0aGlzLnByZXZpb3VzUGF0aCk7XG4gICAgICAgIHByaW50Um91dGVzKHJlYWRSb3V0ZXModGhpcy5lbCkpO1xuICAgICAgICBwcmludFJlZGlyZWN0cyhyZWFkUmVkaXJlY3RzKHRoaXMuZWwpKTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIG5hdkNoYW5nZWQoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1c3kpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignW2lvbi1yb3V0ZXJdIHJvdXRlciBpcyBidXN5LCBuYXZDaGFuZ2VkIHdhcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlkcywgb3V0bGV0IH0gPSBhd2FpdCByZWFkTmF2U3RhdGUod2luZG93LmRvY3VtZW50LmJvZHkpO1xuICAgICAgICBjb25zdCByb3V0ZXMgPSByZWFkUm91dGVzKHRoaXMuZWwpO1xuICAgICAgICBjb25zdCBjaGFpbiA9IHJvdXRlcklEc1RvQ2hhaW4oaWRzLCByb3V0ZXMpO1xuICAgICAgICBpZiAoIWNoYWluKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tpb24tcm91dGVyXSBubyBtYXRjaGluZyBVUkwgZm9yICcsIGlkcy5tYXAoaSA9PiBpLmlkKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IGNoYWluVG9QYXRoKGNoYWluKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tpb24tcm91dGVyXSByb3V0ZXIgY291bGQgbm90IG1hdGNoIHBhdGggYmVjYXVzZSBzb21lIHJlcXVpcmVkIHBhcmFtIGlzIG1pc3NpbmcnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKCdbaW9uLXJvdXRlcl0gbmF2IGNoYW5nZWQgLT4gdXBkYXRlIFVSTCcsIGlkcywgcGF0aCk7XG4gICAgICAgIHRoaXMuc2V0UGF0aChwYXRoLCBkaXJlY3Rpb24pO1xuICAgICAgICBhd2FpdCB0aGlzLnNhZmVXcml0ZU5hdlN0YXRlKG91dGxldCwgY2hhaW4sIFJPVVRFUl9JTlRFTlRfTk9ORSwgcGF0aCwgbnVsbCwgaWRzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblJlZGlyZWN0Q2hhbmdlZCgpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAocGF0aCAmJiByb3V0ZVJlZGlyZWN0KHBhdGgsIHJlYWRSZWRpcmVjdHModGhpcy5lbCkpKSB7XG4gICAgICAgICAgICB0aGlzLndyaXRlTmF2U3RhdGVSb290KHBhdGgsIFJPVVRFUl9JTlRFTlRfTk9ORSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Sb3V0ZXNDaGFuZ2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZU5hdlN0YXRlUm9vdCh0aGlzLmdldFBhdGgoKSwgUk9VVEVSX0lOVEVOVF9OT05FKTtcbiAgICB9XG4gICAgaGlzdG9yeURpcmVjdGlvbigpIHtcbiAgICAgICAgY29uc3Qgd2luID0gd2luZG93O1xuICAgICAgICBpZiAod2luLmhpc3Rvcnkuc3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUrKztcbiAgICAgICAgICAgIHdpbi5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh0aGlzLnN0YXRlLCB3aW4uZG9jdW1lbnQudGl0bGUsIHdpbi5kb2N1bWVudC5sb2NhdGlvbiAmJiB3aW4uZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW4uaGlzdG9yeS5zdGF0ZTtcbiAgICAgICAgY29uc3QgbGFzdFN0YXRlID0gdGhpcy5sYXN0U3RhdGU7XG4gICAgICAgIHRoaXMubGFzdFN0YXRlID0gc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA+IGxhc3RTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJPVVRFUl9JTlRFTlRfRk9SV0FSRDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA8IGxhc3RTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJPVVRFUl9JTlRFTlRfQkFDSztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBST1VURVJfSU5URU5UX05PTkU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgd3JpdGVOYXZTdGF0ZVJvb3QocGF0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW2lvbi1yb3V0ZXJdIFVSTCBpcyBub3QgcGFydCBvZiB0aGUgcm91dGluZyBzZXQnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rdXAgcmVkaXJlY3QgcnVsZVxuICAgICAgICBjb25zdCByZWRpcmVjdHMgPSByZWFkUmVkaXJlY3RzKHRoaXMuZWwpO1xuICAgICAgICBjb25zdCByZWRpcmVjdCA9IHJvdXRlUmVkaXJlY3QocGF0aCwgcmVkaXJlY3RzKTtcbiAgICAgICAgbGV0IHJlZGlyZWN0RnJvbSA9IG51bGw7XG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQYXRoKHJlZGlyZWN0LnRvLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgcmVkaXJlY3RGcm9tID0gcmVkaXJlY3QuZnJvbTtcbiAgICAgICAgICAgIHBhdGggPSByZWRpcmVjdC50bztcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rdXAgcm91dGUgY2hhaW5cbiAgICAgICAgY29uc3Qgcm91dGVzID0gcmVhZFJvdXRlcyh0aGlzLmVsKTtcbiAgICAgICAgY29uc3QgY2hhaW4gPSByb3V0ZXJQYXRoVG9DaGFpbihwYXRoLCByb3V0ZXMpO1xuICAgICAgICBpZiAoIWNoYWluKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbaW9uLXJvdXRlcl0gdGhlIHBhdGggZG9lcyBub3QgbWF0Y2ggYW55IHJvdXRlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd3JpdGUgRE9NIGdpdmVcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVdyaXRlTmF2U3RhdGUoZG9jdW1lbnQuYm9keSwgY2hhaW4sIGRpcmVjdGlvbiwgcGF0aCwgcmVkaXJlY3RGcm9tKTtcbiAgICB9XG4gICAgYXN5bmMgc2FmZVdyaXRlTmF2U3RhdGUobm9kZSwgY2hhaW4sIGRpcmVjdGlvbiwgcGF0aCwgcmVkaXJlY3RGcm9tLCBpbmRleCA9IDApIHtcbiAgICAgICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrKCk7XG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gYXdhaXQgdGhpcy53cml0ZU5hdlN0YXRlKG5vZGUsIGNoYWluLCBkaXJlY3Rpb24sIHBhdGgsIHJlZGlyZWN0RnJvbSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICAgIHVubG9jaygpO1xuICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG4gICAgYXN5bmMgbG9jaygpIHtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMud2FpdFByb21pc2U7XG4gICAgICAgIGxldCByZXNvbHZlO1xuICAgICAgICB0aGlzLndhaXRQcm9taXNlID0gbmV3IFByb21pc2UociA9PiByZXNvbHZlID0gcik7XG4gICAgICAgIGlmIChwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmU7XG4gICAgfVxuICAgIGFzeW5jIHdyaXRlTmF2U3RhdGUobm9kZSwgY2hhaW4sIGRpcmVjdGlvbiwgcGF0aCwgcmVkaXJlY3RGcm9tLCBpbmRleCA9IDApIHtcbiAgICAgICAgaWYgKHRoaXMuYnVzeSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbaW9uLXJvdXRlcl0gcm91dGVyIGlzIGJ1c3ksIHRyYW5zaXRpb24gd2FzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgICAgIC8vIGdlbmVyYXRlIHJvdXRlIGV2ZW50IGFuZCBlbWl0IHdpbGwgY2hhbmdlXG4gICAgICAgIGNvbnN0IHJvdXRlRXZlbnQgPSB0aGlzLnJvdXRlQ2hhbmdlRXZlbnQocGF0aCwgcmVkaXJlY3RGcm9tKTtcbiAgICAgICAgaWYgKHJvdXRlRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW9uUm91dGVXaWxsQ2hhbmdlLmVtaXQocm91dGVFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZCA9IGF3YWl0IHdyaXRlTmF2U3RhdGUobm9kZSwgY2hhaW4sIGRpcmVjdGlvbiwgaW5kZXgpO1xuICAgICAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tpb24tcm91dGVyXSByb3V0ZSBjaGFuZ2VkJywgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW1pdCBkaWQgY2hhbmdlXG4gICAgICAgIGlmIChyb3V0ZUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlvblJvdXRlRGlkQ2hhbmdlLmVtaXQocm91dGVFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc3RhdGUrKztcbiAgICAgICAgd3JpdGVQYXRoKHdpbmRvdy5oaXN0b3J5LCB0aGlzLnJvb3QsIHRoaXMudXNlSGFzaCwgcGF0aCwgZGlyZWN0aW9uLCB0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRQYXRoKHdpbmRvdy5sb2NhdGlvbiwgdGhpcy5yb290LCB0aGlzLnVzZUhhc2gpO1xuICAgIH1cbiAgICByb3V0ZUNoYW5nZUV2ZW50KHBhdGgsIHJlZGlyZWN0RnJvbVBhdGgpIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IHRoaXMucHJldmlvdXNQYXRoO1xuICAgICAgICBjb25zdCB0byA9IGdlbmVyYXRlUGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhdGggPSB0bztcbiAgICAgICAgaWYgKHRvID09PSBmcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWRpcmVjdGVkRnJvbSA9IHJlZGlyZWN0RnJvbVBhdGggPyBnZW5lcmF0ZVBhdGgocmVkaXJlY3RGcm9tUGF0aCkgOiBudWxsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgIHJlZGlyZWN0ZWRGcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5cbmNvbnN0IFJvdXRlckxpbmsgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB1c2luZyBhIHJvdXRlciwgaXQgc3BlY2lmaWVzIHRoZSB0cmFuc2l0aW9uIGRpcmVjdGlvbiB3aGVuIG5hdmlnYXRpbmcgdG9cbiAgICAgICAgICogYW5vdGhlciBwYWdlIHVzaW5nIGBocmVmYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucm91dGVyRGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIG9wZW5VUkwodGhpcy5ocmVmLCBldiwgdGhpcy5yb3V0ZXJEaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgIHJlbDogdGhpcy5yZWwsXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyBbbW9kZV06IHRydWUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlIH0pIH0sIGgoXCJhXCIsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzKSwgaChcInNsb3RcIiwgbnVsbCkpKSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX1he2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0fVwiOyB9XG59O1xuXG5leHBvcnQgeyBSb3V0ZSBhcyBpb25fcm91dGUsIFJvdXRlUmVkaXJlY3QgYXMgaW9uX3JvdXRlX3JlZGlyZWN0LCBSb3V0ZXIgYXMgaW9uX3JvdXRlciwgUm91dGVyTGluayBhcyBpb25fcm91dGVyX2xpbmsgfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=