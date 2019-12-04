(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_button, ion_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_icon", function() { return Icon; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const Button = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inToolbar = false;
        this.inItem = false;
        /**
         * The type of button.
         */
        this.buttonType = 'button';
        /**
         * If `true`, the user cannot interact with the button.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        /**
         * If `true`, activates a button with a heavier font weight.
         */
        this.strong = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.handleClick = (ev) => {
            if (this.type === 'button') {
                Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(this.href, ev, this.routerDirection);
            }
            else if (Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.el)) {
                // this button wants to specifically submit a form
                // climb up the dom to see if we're in a <form>
                // and if so, then use JS to submit it
                const form = this.el.closest('form');
                if (form) {
                    ev.preventDefault();
                    const fakeButton = document.createElement('button');
                    fakeButton.type = this.type;
                    fakeButton.style.display = 'none';
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
    }
    componentWillLoad() {
        this.inToolbar = !!this.el.closest('ion-buttons');
        this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    }
    get hasIconOnly() {
        return !!this.el.querySelector('ion-icon[slot="icon-only"]');
    }
    get rippleType() {
        const hasClearFill = this.fill === undefined || this.fill === 'clear';
        // If the button is in a toolbar, has a clear fill (which is the default)
        // and only has an icon we use the unbounded "circular" ripple effect
        if (hasClearFill && this.hasIconOnly && this.inToolbar) {
            return 'unbounded';
        }
        return 'bounded';
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const { buttonType, type, disabled, rel, target, size, href, color, expand, hasIconOnly, shape, strong } = this;
        const finalSize = size === undefined && this.inItem ? 'small' : size;
        const TagType = href === undefined ? 'button' : 'a';
        const attrs = (TagType === 'button')
            ? { type }
            : {
                download: this.download,
                href,
                rel,
                target
            };
        let fill = this.fill;
        if (fill === undefined) {
            fill = this.inToolbar ? 'clear' : 'solid';
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), { [mode]: true, [buttonType]: true, [`${buttonType}-${expand}`]: expand !== undefined, [`${buttonType}-${finalSize}`]: finalSize !== undefined, [`${buttonType}-${shape}`]: shape !== undefined, [`${buttonType}-${fill}`]: true, [`${buttonType}-strong`]: strong, 'button-has-icon-only': hasIconOnly, 'button-disabled': disabled, 'ion-activatable': true, 'ion-focusable': true }) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon-only" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: this.rippleType }))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-hover:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){--opacity:.5;pointer-events:none}:host(.button-disabled) .button-native{cursor:default;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:transparent}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0)}:host(.button-solid.activated){--opacity:1}:host(.button-solid.activated.ion-color) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-outline.activated.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-clear.activated){--opacity:0.4}:host(.button-clear){--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}\@media (any-hover:hover){:host(.button-solid:hover){--opacity:0.8}:host(.button-clear:hover),:host(.button-outline:hover){--opacity:0.6}:host(.ion-focused:hover){--background-hover:var(--background-focused);--color-hover:var(--color-focused)}:host(.activated:hover){--background-hover:var(--background-activated);--color-hover:var(--color-activated)}}"; }
};

let CACHED_MAP;
const getIconMap = () => {
    if (!CACHED_MAP) {
        const win = window;
        win.Ionicons = win.Ionicons || {};
        CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
};
const getUrl = (i) => {
    let url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon, i.mode, i.ios, i.md);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon[i.mode]);
        if (url) {
            return url;
        }
    }
    return null;
};
const getNamedUrl = (name) => {
    const url = getIconMap().get(name);
    if (url) {
        return url;
    }
    return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["i"])(`svg/${name}.svg`);
};
const getName = (name, icon, mode, ios, md) => {
    // default to "md" if somehow the mode wasn't set
    mode = (mode && mode.toLowerCase()) === 'ios' ? 'ios' : 'md';
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else {
        if (!name && icon && !isSrc(icon)) {
            name = icon;
        }
        if (isStr(name)) {
            name = name.toLowerCase();
            if (!/^md-|^ios-|^logo-/.test(name)) {
                // this does not have one of the defaults
                // so lets auto add in the mode prefix for them
                name = mode + '-' + name;
            }
        }
    }
    if (!isStr(name) || name.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    const invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
};
const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
const isSrc = (str) => {
    return str.length > 0 && /(\/|\.)/.test(str);
};
const isStr = (val) => typeof val === 'string';

const validateContent = (svgContent) => {
    if (svgContent) {
        const div = document.createElement('div');
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            svgElm.setAttribute('class', 's-ion-icon');
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};
const isValid = (elm) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};

const requests = new Map();
const getSvgContent = (url) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url).then(rsp => {
            if (rsp.status <= 299) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(svgContent => validateContent(svgContent));
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
};

const Icon = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.mode = getIonMode(this);
        this.isVisible = false;
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
    }
    connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if ( this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            const io = this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }, { rootMargin });
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if ( this.isVisible) {
            const url = getUrl(this);
            if (url) {
                getSvgContent(url)
                    .then(svgContent => this.svgContent = svgContent);
            }
        }
        if (!this.ariaLabel) {
            const label = getName(this.name, this.icon, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (label) {
                this.ariaLabel = label
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    }
    render() {
        const mode = this.mode || 'md';
        const flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "img", class: Object.assign({ [mode]: true }, createColorClasses(this.color), { [`icon-${this.size}`]: !!this.size, 'flip-rtl': !!flipRtl && this.el.ownerDocument.dir === 'rtl' }) }, (( this.svgContent)
            ? Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner", innerHTML: this.svgContent })
            : Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner" }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"]
    }; }
    static get style() { return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"; }
};
const getIonMode = (ref) => {
    return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["j"])(ref) || document.documentElement.getAttribute('mode') || 'md';
};
const createColorClasses = (color) => {
    return (color) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1idXR0b25fMi1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0s7QUFDbEk7QUFDNEI7QUFDb0I7O0FBRTlFO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBTztBQUN2QjtBQUNBLHFCQUFxQiw4REFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBWTtBQUNqQyxlQUFlLGlHQUFpRztBQUNoSDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLDRHQUE0RyxFQUFFLDREQUFvQixXQUFXLHVDQUF1QyxXQUFXLEdBQUcsT0FBTyw4QkFBOEIsV0FBVyxHQUFH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QkFBa0IseUNBQXlDLGlDQUFpQyxnQkFBZ0IsY0FBYyxZQUFZLFdBQVcsNkJBQTZCLDZCQUE2QixxQkFBcUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLGtCQUFrQixzQ0FBc0MsMEJBQTBCLGtEQUFrRCw0QkFBNEIsb0RBQW9ELDJCQUEyQixtREFBbUQsMEJBQTBCLGtEQUFrRCwwQkFBMEIsa0RBQWtELHlCQUF5QixpREFBaUQsd0JBQXdCLGdEQUFnRCx5QkFBeUIsaURBQWlELHVCQUF1QiwrQ0FBK0MsRUFBRTtBQUN0bkM7QUFDQTtBQUNBLFdBQVcsMkRBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7O0FBRWtEOzs7Ozs7Ozs7Ozs7O0FDL1VsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjQ3XFxjaHVua3NcXDQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUkMSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQsIGkgYXMgZ2V0QXNzZXRQYXRoLCBqIGFzIGdldE1vZGUgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBoIGFzIGhhc1NoYWRvd0RvbSB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBvIGFzIG9wZW5VUkwsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzJDEgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcblxuY29uc3QgQnV0dG9uID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pblRvb2xiYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbkl0ZW0gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9uVHlwZSA9ICdidXR0b24nO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB1c2luZyBhIHJvdXRlciwgaXQgc3BlY2lmaWVzIHRoZSB0cmFuc2l0aW9uIGRpcmVjdGlvbiB3aGVuIG5hdmlnYXRpbmcgdG9cbiAgICAgICAgICogYW5vdGhlciBwYWdlIHVzaW5nIGBocmVmYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucm91dGVyRGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhY3RpdmF0ZXMgYSBidXR0b24gd2l0aCBhIGhlYXZpZXIgZm9udCB3ZWlnaHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0cm9uZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIG9wZW5VUkwodGhpcy5ocmVmLCBldiwgdGhpcy5yb3V0ZXJEaXJlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzU2hhZG93RG9tKHRoaXMuZWwpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBidXR0b24gd2FudHMgdG8gc3BlY2lmaWNhbGx5IHN1Ym1pdCBhIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgZG9tIHRvIHNlZSBpZiB3ZSdyZSBpbiBhIDxmb3JtPlxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBzbywgdGhlbiB1c2UgSlMgdG8gc3VibWl0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZWwuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZha2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi50eXBlID0gdGhpcy50eXBlO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmFrZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIGZha2VCdXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgICAgICB0aGlzLmluVG9vbGJhciA9ICEhdGhpcy5lbC5jbG9zZXN0KCdpb24tYnV0dG9ucycpO1xuICAgICAgICB0aGlzLmluSXRlbSA9ICEhdGhpcy5lbC5jbG9zZXN0KCdpb24taXRlbScpIHx8ICEhdGhpcy5lbC5jbG9zZXN0KCdpb24taXRlbS1kaXZpZGVyJyk7XG4gICAgfVxuICAgIGdldCBoYXNJY29uT25seSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24taWNvbltzbG90PVwiaWNvbi1vbmx5XCJdJyk7XG4gICAgfVxuICAgIGdldCByaXBwbGVUeXBlKCkge1xuICAgICAgICBjb25zdCBoYXNDbGVhckZpbGwgPSB0aGlzLmZpbGwgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmZpbGwgPT09ICdjbGVhcic7XG4gICAgICAgIC8vIElmIHRoZSBidXR0b24gaXMgaW4gYSB0b29sYmFyLCBoYXMgYSBjbGVhciBmaWxsICh3aGljaCBpcyB0aGUgZGVmYXVsdClcbiAgICAgICAgLy8gYW5kIG9ubHkgaGFzIGFuIGljb24gd2UgdXNlIHRoZSB1bmJvdW5kZWQgXCJjaXJjdWxhclwiIHJpcHBsZSBlZmZlY3RcbiAgICAgICAgaWYgKGhhc0NsZWFyRmlsbCAmJiB0aGlzLmhhc0ljb25Pbmx5ICYmIHRoaXMuaW5Ub29sYmFyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3VuYm91bmRlZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdib3VuZGVkJztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSQxKHRoaXMpO1xuICAgICAgICBjb25zdCB7IGJ1dHRvblR5cGUsIHR5cGUsIGRpc2FibGVkLCByZWwsIHRhcmdldCwgc2l6ZSwgaHJlZiwgY29sb3IsIGV4cGFuZCwgaGFzSWNvbk9ubHksIHNoYXBlLCBzdHJvbmcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGZpbmFsU2l6ZSA9IHNpemUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmluSXRlbSA/ICdzbWFsbCcgOiBzaXplO1xuICAgICAgICBjb25zdCBUYWdUeXBlID0gaHJlZiA9PT0gdW5kZWZpbmVkID8gJ2J1dHRvbicgOiAnYSc7XG4gICAgICAgIGNvbnN0IGF0dHJzID0gKFRhZ1R5cGUgPT09ICdidXR0b24nKVxuICAgICAgICAgICAgPyB7IHR5cGUgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6IHRoaXMuZG93bmxvYWQsXG4gICAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgICByZWwsXG4gICAgICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgICB9O1xuICAgICAgICBsZXQgZmlsbCA9IHRoaXMuZmlsbDtcbiAgICAgICAgaWYgKGZpbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmlsbCA9IHRoaXMuaW5Ub29sYmFyID8gJ2NsZWFyJyA6ICdzb2xpZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzJDEoY29sb3IpKSwgeyBbbW9kZV06IHRydWUsIFtidXR0b25UeXBlXTogdHJ1ZSwgW2Ake2J1dHRvblR5cGV9LSR7ZXhwYW5kfWBdOiBleHBhbmQgIT09IHVuZGVmaW5lZCwgW2Ake2J1dHRvblR5cGV9LSR7ZmluYWxTaXplfWBdOiBmaW5hbFNpemUgIT09IHVuZGVmaW5lZCwgW2Ake2J1dHRvblR5cGV9LSR7c2hhcGV9YF06IHNoYXBlICE9PSB1bmRlZmluZWQsIFtgJHtidXR0b25UeXBlfS0ke2ZpbGx9YF06IHRydWUsIFtgJHtidXR0b25UeXBlfS1zdHJvbmdgXTogc3Ryb25nLCAnYnV0dG9uLWhhcy1pY29uLW9ubHknOiBoYXNJY29uT25seSwgJ2J1dHRvbi1kaXNhYmxlZCc6IGRpc2FibGVkLCAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSwgJ2lvbi1mb2N1c2FibGUnOiB0cnVlIH0pIH0sIGgoVGFnVHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHsgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiLCBkaXNhYmxlZDogZGlzYWJsZWQsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgb25CbHVyOiB0aGlzLm9uQmx1ciB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJidXR0b24taW5uZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiaWNvbi1vbmx5XCIgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdGFydFwiIH0pLCBoKFwic2xvdFwiLCBudWxsKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImVuZFwiIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgeyB0eXBlOiB0aGlzLnJpcHBsZVR5cGUgfSkpKSk7XG4gICAgfVxuICAgIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHstLW92ZXJmbG93OmhpZGRlbjstLXJpcHBsZS1jb2xvcjpjdXJyZW50Q29sb3I7LS1ib3JkZXItd2lkdGg6aW5pdGlhbDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYm9yZGVyLXN0eWxlOmluaXRpYWw7LS1jb2xvci1ob3Zlcjppbml0aWFsOy0tYm94LXNoYWRvdzpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG87Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dmVydGljYWwtYWxpZ246dG9wO3ZlcnRpY2FsLWFsaWduOi13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX06aG9zdCguYnV0dG9uLWRpc2FibGVkKXstLW9wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguYnV0dG9uLWRpc2FibGVkKSAuYnV0dG9uLW5hdGl2ZXtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5idXR0b24tc29saWQpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwjMzE3MWUwKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwjNGM4ZGZmKTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpfTpob3N0KC5idXR0b24tb3V0bGluZSl7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSk7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1mb2N1c2VkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjEpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyKXstLWJvcmRlci13aWR0aDowOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1mb2N1c2VkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjEpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyLmFjdGl2YXRlZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoLmJ1dHRvbi1ibG9jayl7ZGlzcGxheTpibG9ja306aG9zdCguYnV0dG9uLWJsb2NrKSAuYnV0dG9uLW5hdGl2ZXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtjbGVhcjpib3RoO2NvbnRhaW46Y29udGVudH06aG9zdCguYnV0dG9uLWJsb2NrKSAuYnV0dG9uLW5hdGl2ZTphZnRlcntjbGVhcjpib3RofTpob3N0KC5idXR0b24tZnVsbCl7ZGlzcGxheTpibG9ja306aG9zdCguYnV0dG9uLWZ1bGwpIC5idXR0b24tbmF0aXZle21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2NvbnRhaW46Y29udGVudH06aG9zdCguYnV0dG9uLWZ1bGw6bm90KC5idXR0b24tcm91bmQpKSAuYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MH0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7bGluZS1oZWlnaHQ6MTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtjb250YWluOmxheW91dCBzdHlsZTtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OnZhcigtLW9wYWNpdHkpO292ZXJmbG93OnZhcigtLW92ZXJmbG93KTt6LWluZGV4OjA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmJ1dHRvbi1uYXRpdmV7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fS5idXR0b24tbmF0aXZlOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX06OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZToxLjRlbTtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24taWNvbltzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6LS4zZW07bWFyZ2luLXJpZ2h0Oi4zZW07bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LS4zZW07bWFyZ2luLWlubGluZS1zdGFydDotLjNlbTstd2Via2l0LW1hcmdpbi1lbmQ6LjNlbTttYXJnaW4taW5saW5lLWVuZDouM2VtfX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1lbmRdKXttYXJnaW4tbGVmdDouM2VtO21hcmdpbi1yaWdodDotLjJlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1lbmRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LjNlbTttYXJnaW4taW5saW5lLXN0YXJ0Oi4zZW07LXdlYmtpdC1tYXJnaW4tZW5kOi0uMmVtO21hcmdpbi1pbmxpbmUtZW5kOi0uMmVtfX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1pY29uLW9ubHldKXtmb250LXNpemU6MS44ZW19aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguYWN0aXZhdGVkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtYWN0aXZhdGVkKTtjb2xvcjp2YXIoLS1jb2xvci1hY3RpdmF0ZWQpfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9fTpob3N0ey0tYm9yZGVyLXJhZGl1czoxMHB4Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7LS1wYWRkaW5nLXN0YXJ0OjFlbTstLXBhZGRpbmctZW5kOjFlbTstLXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvcixvcGFjaXR5IDEwMG1zIGxpbmVhcjttYXJnaW4tbGVmdDoycHg7bWFyZ2luLXJpZ2h0OjJweDttYXJnaW4tdG9wOjRweDttYXJnaW4tYm90dG9tOjRweDtoZWlnaHQ6Mi44ZW07Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi0uMDNlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweH19Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwjMzE3MWUwKX06aG9zdCguYnV0dG9uLXNvbGlkLmFjdGl2YXRlZCl7LS1vcGFjaXR5OjF9Omhvc3QoLmJ1dHRvbi1zb2xpZC5hY3RpdmF0ZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci1yYWRpdXM6MTBweDstLWJvcmRlci13aWR0aDoxcHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjEpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpfTpob3N0KC5idXR0b24tb3V0bGluZS5hY3RpdmF0ZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tY2xlYXIuYWN0aXZhdGVkKXstLW9wYWNpdHk6MC40fTpob3N0KC5idXR0b24tY2xlYXIpey0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9Omhvc3QoLmJ1dHRvbi1sYXJnZSl7LS1ib3JkZXItcmFkaXVzOjEycHg7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1zdGFydDoxZW07LS1wYWRkaW5nLWVuZDoxZW07LS1wYWRkaW5nLWJvdHRvbTowO2hlaWdodDoyLjhlbTtmb250LXNpemU6MjBweH06aG9zdCguYnV0dG9uLXNtYWxsKXstLWJvcmRlci1yYWRpdXM6NnB4Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctc3RhcnQ6MC45ZW07LS1wYWRkaW5nLWVuZDowLjllbTstLXBhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjIuMWVtO2ZvbnQtc2l6ZToxM3B4fTpob3N0KC5idXR0b24tcm91bmQpey0tYm9yZGVyLXJhZGl1czo2NHB4Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctc3RhcnQ6MjZweDstLXBhZGRpbmctZW5kOjI2cHg7LS1wYWRkaW5nLWJvdHRvbTowfTpob3N0KC5idXR0b24tc3Ryb25nKXtmb250LXdlaWdodDo2MDB9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoLmJ1dHRvbi1zb2xpZDpob3Zlcil7LS1vcGFjaXR5OjAuOH06aG9zdCguYnV0dG9uLWNsZWFyOmhvdmVyKSw6aG9zdCguYnV0dG9uLW91dGxpbmU6aG92ZXIpey0tb3BhY2l0eTowLjZ9Omhvc3QoLmlvbi1mb2N1c2VkOmhvdmVyKXstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTstLWNvbG9yLWhvdmVyOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5hY3RpdmF0ZWQ6aG92ZXIpey0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCk7LS1jb2xvci1ob3Zlcjp2YXIoLS1jb2xvci1hY3RpdmF0ZWQpfX1cIjsgfVxufTtcblxubGV0IENBQ0hFRF9NQVA7XHJcbmNvbnN0IGdldEljb25NYXAgPSAoKSA9PiB7XHJcbiAgICBpZiAoIUNBQ0hFRF9NQVApIHtcclxuICAgICAgICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgICAgICAgd2luLklvbmljb25zID0gd2luLklvbmljb25zIHx8IHt9O1xyXG4gICAgICAgIENBQ0hFRF9NQVAgPSB3aW4uSW9uaWNvbnMubWFwID0gd2luLklvbmljb25zLm1hcCB8fCBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ0FDSEVEX01BUDtcclxufTtcclxuY29uc3QgZ2V0VXJsID0gKGkpID0+IHtcclxuICAgIGxldCB1cmwgPSBnZXRTcmMoaS5zcmMpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICB1cmwgPSBnZXROYW1lKGkubmFtZSwgaS5pY29uLCBpLm1vZGUsIGkuaW9zLCBpLm1kKTtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gZ2V0TmFtZWRVcmwodXJsKTtcclxuICAgIH1cclxuICAgIGlmIChpLmljb24pIHtcclxuICAgICAgICB1cmwgPSBnZXRTcmMoaS5pY29uKTtcclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVybCA9IGdldFNyYyhpLmljb25baS5tb2RlXSk7XHJcbiAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5jb25zdCBnZXROYW1lZFVybCA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBnZXRJY29uTWFwKCkuZ2V0KG5hbWUpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0QXNzZXRQYXRoKGBzdmcvJHtuYW1lfS5zdmdgKTtcclxufTtcclxuY29uc3QgZ2V0TmFtZSA9IChuYW1lLCBpY29uLCBtb2RlLCBpb3MsIG1kKSA9PiB7XHJcbiAgICAvLyBkZWZhdWx0IHRvIFwibWRcIiBpZiBzb21laG93IHRoZSBtb2RlIHdhc24ndCBzZXRcclxuICAgIG1vZGUgPSAobW9kZSAmJiBtb2RlLnRvTG93ZXJDYXNlKCkpID09PSAnaW9zJyA/ICdpb3MnIDogJ21kJztcclxuICAgIC8vIGlmIGFuIGljb24gd2FzIHBhc3NlZCBpbiB1c2luZyB0aGUgaW9zIG9yIG1kIGF0dHJpYnV0ZXNcclxuICAgIC8vIHNldCB0aGUgaWNvbk5hbWUgdG8gd2hhdGV2ZXIgd2FzIHBhc3NlZCBpblxyXG4gICAgaWYgKGlvcyAmJiBtb2RlID09PSAnaW9zJykge1xyXG4gICAgICAgIG5hbWUgPSBpb3MudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1kICYmIG1vZGUgPT09ICdtZCcpIHtcclxuICAgICAgICBuYW1lID0gbWQudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICghbmFtZSAmJiBpY29uICYmICFpc1NyYyhpY29uKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gaWNvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU3RyKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmICghL15tZC18Xmlvcy18XmxvZ28tLy50ZXN0KG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGRvZXMgbm90IGhhdmUgb25lIG9mIHRoZSBkZWZhdWx0c1xyXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0cyBhdXRvIGFkZCBpbiB0aGUgbW9kZSBwcmVmaXggZm9yIHRoZW1cclxuICAgICAgICAgICAgICAgIG5hbWUgPSBtb2RlICsgJy0nICsgbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNTdHIobmFtZSkgfHwgbmFtZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBvbmx5IGFsbG93IGFscGhhIGNoYXJhY3RlcnMgYW5kIGRhc2hcclxuICAgIGNvbnN0IGludmFsaWRDaGFycyA9IG5hbWUucmVwbGFjZSgvW2Etel18LXxcXGQvZ2ksICcnKTtcclxuICAgIGlmIChpbnZhbGlkQ2hhcnMgIT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmFtZTtcclxufTtcclxuY29uc3QgZ2V0U3JjID0gKHNyYykgPT4ge1xyXG4gICAgaWYgKGlzU3RyKHNyYykpIHtcclxuICAgICAgICBzcmMgPSBzcmMudHJpbSgpO1xyXG4gICAgICAgIGlmIChpc1NyYyhzcmMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzcmM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmNvbnN0IGlzU3JjID0gKHN0cikgPT4ge1xyXG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPiAwICYmIC8oXFwvfFxcLikvLnRlc3Qoc3RyKTtcclxufTtcclxuY29uc3QgaXNTdHIgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcblxuY29uc3QgdmFsaWRhdGVDb250ZW50ID0gKHN2Z0NvbnRlbnQpID0+IHtcclxuICAgIGlmIChzdmdDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XHJcbiAgICAgICAgLy8gc2V0dXAgdGhpcyB3YXkgdG8gZW5zdXJlIGl0IHdvcmtzIG9uIG91ciBidWRkeSBJRVxyXG4gICAgICAgIGZvciAobGV0IGkgPSBkaXYuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoZGl2LmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3N2ZycpIHtcclxuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuY2hpbGROb2Rlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbXVzdCBvbmx5IGhhdmUgMSByb290IGVsZW1lbnRcclxuICAgICAgICBjb25zdCBzdmdFbG0gPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgaWYgKHN2Z0VsbSAmJiBzdmdFbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcclxuICAgICAgICAgICAgc3ZnRWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncy1pb24taWNvbicpO1xyXG4gICAgICAgICAgICAvLyByb290IGVsZW1lbnQgbXVzdCBiZSBhbiBzdmdcclxuICAgICAgICAgICAgLy8gbGV0cyBkb3VibGUgY2hlY2sgd2UndmUgZ290IHZhbGlkIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhbGxvdyBzY3JpcHRzXHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHN2Z0VsbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXYuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59O1xyXG5jb25zdCBpc1ZhbGlkID0gKGVsbSkgPT4ge1xyXG4gICAgaWYgKGVsbS5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgIGlmIChlbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGVsbS5hdHRyaWJ1dGVzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoaXNTdHIodmFsKSAmJiB2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvbicpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbG0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQoZWxtLmNoaWxkTm9kZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcblxuY29uc3QgcmVxdWVzdHMgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IGdldFN2Z0NvbnRlbnQgPSAodXJsKSA9PiB7XHJcbiAgICAvLyBzZWUgaWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVxdWVzdCBmb3IgdGhpcyB1cmxcclxuICAgIGxldCByZXEgPSByZXF1ZXN0cy5nZXQodXJsKTtcclxuICAgIGlmICghcmVxKSB7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIGEgcmVxdWVzdFxyXG4gICAgICAgIHJlcSA9IGZldGNoKHVybCkudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAocnNwLnN0YXR1cyA8PSAyOTkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByc3AudGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfSkudGhlbihzdmdDb250ZW50ID0+IHZhbGlkYXRlQ29udGVudChzdmdDb250ZW50KSk7XHJcbiAgICAgICAgLy8gY2FjaGUgZm9yIHRoZSBzYW1lIHJlcXVlc3RzXHJcbiAgICAgICAgcmVxdWVzdHMuc2V0KHVybCwgcmVxKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXE7XHJcbn07XG5cbmNvbnN0IEljb24gPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZW5hYmxlZCwgaW9uLWljb24gd2lsbCBiZSBsb2FkZWQgbGF6aWx5IHdoZW4gaXQncyB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydC5cbiAgICAgICAgICogRGVmYXVsdCwgYGZhbHNlYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgLy8gcHVycG9zZWx5IGRvIG5vdCByZXR1cm4gdGhlIHByb21pc2UgaGVyZSBiZWNhdXNlIGxvYWRpbmdcbiAgICAgICAgLy8gdGhlIHN2ZyBmaWxlIHNob3VsZCBub3QgaG9sZCB1cCBsb2FkaW5nIHRoZSBhcHBcbiAgICAgICAgLy8gb25seSBsb2FkIHRoZSBzdmcgaWYgaXQncyB2aXNpYmxlXG4gICAgICAgIHRoaXMud2FpdFVudGlsVmlzaWJsZSh0aGlzLmVsLCAnNTBweCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9hZEljb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pbykge1xuICAgICAgICAgICAgdGhpcy5pby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlvID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdhaXRVbnRpbFZpc2libGUoZWwsIHJvb3RNYXJnaW4sIGNiKSB7XG4gICAgICAgIGlmICggdGhpcy5sYXp5ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgY29uc3QgaW8gPSB0aGlzLmlvID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7IHJvb3RNYXJnaW4gfSk7XG4gICAgICAgICAgICBpby5vYnNlcnZlKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZhbGxiYWNrIHRvIGFsd2F5cyBzaG93IGl0XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRJY29uKCkge1xuICAgICAgICBpZiAoIHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBnZXRVcmwodGhpcyk7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3ZnQ29udGVudCh1cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN2Z0NvbnRlbnQgPT4gdGhpcy5zdmdDb250ZW50ID0gc3ZnQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFyaWFMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBnZXROYW1lKHRoaXMubmFtZSwgdGhpcy5pY29uLCB0aGlzLm1vZGUsIHRoaXMuaW9zLCB0aGlzLm1kKTtcbiAgICAgICAgICAgIC8vIHVzZXIgZGlkIG5vdCBwcm92aWRlIGEgbGFiZWxcbiAgICAgICAgICAgIC8vIGNvbWUgdXAgd2l0aCB0aGUgbGFiZWwgYmFzZWQgb24gdGhlIGljb24gbmFtZVxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmlhTGFiZWwgPSBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnaW9zLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnbWQtJywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSB0aGlzLm1vZGUgfHwgJ21kJztcbiAgICAgICAgY29uc3QgZmxpcFJ0bCA9IHRoaXMuZmxpcFJ0bCB8fCAodGhpcy5hcmlhTGFiZWwgJiYgdGhpcy5hcmlhTGFiZWwuaW5kZXhPZignYXJyb3cnKSA+IC0xICYmIHRoaXMuZmxpcFJ0bCAhPT0gZmFsc2UpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImltZ1wiLCBjbGFzczogT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSB9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciksIHsgW2BpY29uLSR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSwgJ2ZsaXAtcnRsJzogISFmbGlwUnRsICYmIHRoaXMuZWwub3duZXJEb2N1bWVudC5kaXIgPT09ICdydGwnIH0pIH0sICgoIHRoaXMuc3ZnQ29udGVudClcbiAgICAgICAgICAgID8gaChcImRpdlwiLCB7IGNsYXNzOiBcImljb24taW5uZXJcIiwgaW5uZXJIVE1MOiB0aGlzLnN2Z0NvbnRlbnQgfSlcbiAgICAgICAgICAgIDogaChcImRpdlwiLCB7IGNsYXNzOiBcImljb24taW5uZXJcIiB9KSkpKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wic3ZnXCJdOyB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwibmFtZVwiOiBbXCJsb2FkSWNvblwiXSxcbiAgICAgICAgXCJzcmNcIjogW1wibG9hZEljb25cIl0sXG4gICAgICAgIFwiaWNvblwiOiBbXCJsb2FkSWNvblwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxZW07aGVpZ2h0OjFlbTtjb250YWluOnN0cmljdDtmaWxsOmN1cnJlbnRDb2xvcjstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fS5pY29uLWlubmVyLHN2Z3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Omhvc3QoLmZsaXAtcnRsKSAuaWNvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoLTEpO3RyYW5zZm9ybTpzY2FsZVgoLTEpfTpob3N0KC5pY29uLXNtYWxsKXtmb250LXNpemU6MThweCFpbXBvcnRhbnR9Omhvc3QoLmljb24tbGFyZ2Upe2ZvbnQtc2l6ZTozMnB4IWltcG9ydGFudH06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSkhaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3ItcHJpbWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX06aG9zdCguaW9uLWNvbG9yLXNlY29uZGFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCMwY2QxZTgpfTpob3N0KC5pb24tY29sb3ItdGVydGlhcnkpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCNmNGE5NDIpfTpob3N0KC5pb24tY29sb3Itc3VjY2Vzcyl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc3VjY2VzcywjMTBkYzYwKX06aG9zdCguaW9uLWNvbG9yLXdhcm5pbmcpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsI2ZmY2UwMCl9Omhvc3QoLmlvbi1jb2xvci1kYW5nZXIpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwjZjE0MTQxKX06aG9zdCguaW9uLWNvbG9yLWxpZ2h0KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1saWdodCwjZjRmNWY4KX06aG9zdCguaW9uLWNvbG9yLW1lZGl1bSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItbWVkaXVtLCM5ODlhYTIpfTpob3N0KC5pb24tY29sb3ItZGFyayl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItZGFyaywjMjIyNDI4KX1cIjsgfVxufTtcbmNvbnN0IGdldElvbk1vZGUgPSAocmVmKSA9PiB7XG4gICAgcmV0dXJuIGdldE1vZGUocmVmKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ21kJztcbn07XG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSAoY29sb3IpID0+IHtcbiAgICByZXR1cm4gKGNvbG9yKSA/IHtcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcbiAgICB9IDogbnVsbDtcbn07XG5cbmV4cG9ydCB7IEJ1dHRvbiBhcyBpb25fYnV0dG9uLCBJY29uIGFzIGlvbl9pY29uIH07XG4iLCJjb25zdCBob3N0Q29udGV4dCA9IChzZWxlY3RvciwgZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cclxuICovXHJcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8ge1xyXG4gICAgICAgICdpb24tY29sb3InOiB0cnVlLFxyXG4gICAgICAgIFtgaW9uLWNvbG9yLSR7Y29sb3J9YF06IHRydWVcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTGlzdCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbClcclxuICAgICAgICAgICAgLm1hcChjID0+IGMudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPT0gJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5jb25zdCBnZXRDbGFzc01hcCA9IChjbGFzc2VzKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGMgPT4gbWFwW2NdID0gdHJ1ZSk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG59O1xyXG5jb25zdCBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcclxuY29uc3Qgb3BlblVSTCA9IGFzeW5jICh1cmwsIGV2LCBkaXJlY3Rpb24pID0+IHtcclxuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcclxuICAgICAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9