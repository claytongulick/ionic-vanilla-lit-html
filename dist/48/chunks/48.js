(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "../node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js ***!
  \*********************************************************************/
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
    static get style() { return ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-hover:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){--opacity:.5;pointer-events:none}:host(.button-disabled) .button-native{cursor:default;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:transparent}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--background);--box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}:host(.button-solid.activated){--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--color-activated:var(--ion-color-primary,#3880ff)}:host(.button-outline.activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:700}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\@media (any-hover:hover){:host(.button-solid.ion-color:hover) .button-native{background:var(--ion-color-tint)}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.04)}}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1idXR0b25fMi1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnSztBQUNsSTtBQUM0QjtBQUNvQjs7QUFFOUU7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFPO0FBQ3ZCO0FBQ0EscUJBQXFCLDhEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBVztBQUNuQyx1QkFBdUIsMkRBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFZO0FBQ2pDLGVBQWUsaUdBQWlHO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsNEdBQTRHLEVBQUUsNERBQW9CLFdBQVcsdUNBQXVDLFdBQVcsR0FBRyxPQUFPLDhCQUE4QixXQUFXLEdBQUcs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QixjQUFjLFlBQVksV0FBVyw2QkFBNkIsNkJBQTZCLHFCQUFxQixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsa0JBQWtCLHNDQUFzQywwQkFBMEIsa0RBQWtELDRCQUE0QixvREFBb0QsMkJBQTJCLG1EQUFtRCwwQkFBMEIsa0RBQWtELDBCQUEwQixrREFBa0QseUJBQXlCLGlEQUFpRCx3QkFBd0IsZ0RBQWdELHlCQUF5QixpREFBaUQsdUJBQXVCLCtDQUErQyxFQUFFO0FBQ3RuQztBQUNBO0FBQ0EsV0FBVywyREFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDs7QUFFa0Q7Ozs7Ozs7Ozs7Ozs7QUMvVWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUYiLCJmaWxlIjoiNDhcXGNodW5rc1xcNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgZ2V0SW9uTW9kZSQxLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCwgaSBhcyBnZXRBc3NldFBhdGgsIGogYXMgZ2V0TW9kZSB9IGZyb20gJy4vY29yZS1jYTA0ODhmYy5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGggYXMgaGFzU2hhZG93RG9tIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMkMSB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuXG5jb25zdCBCdXR0b24gPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmluVG9vbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluSXRlbSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5idXR0b25UeXBlID0gJ2J1dHRvbic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzaW5nIGEgcm91dGVyLCBpdCBzcGVjaWZpZXMgdGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0b1xuICAgICAgICAgKiBhbm90aGVyIHBhZ2UgdXNpbmcgYGhyZWZgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGFjdGl2YXRlcyBhIGJ1dHRvbiB3aXRoIGEgaGVhdmllciBmb250IHdlaWdodC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3Ryb25nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgb3BlblVSTCh0aGlzLmhyZWYsIGV2LCB0aGlzLnJvdXRlckRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNTaGFkb3dEb20odGhpcy5lbCkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGJ1dHRvbiB3YW50cyB0byBzcGVjaWZpY2FsbHkgc3VibWl0IGEgZm9ybVxuICAgICAgICAgICAgICAgIC8vIGNsaW1iIHVwIHRoZSBkb20gdG8gc2VlIGlmIHdlJ3JlIGluIGEgPGZvcm0+XG4gICAgICAgICAgICAgICAgLy8gYW5kIGlmIHNvLCB0aGVuIHVzZSBKUyB0byBzdWJtaXQgaXRcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5lbC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFrZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGZha2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmYWtlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5Ub29sYmFyID0gISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1idXR0b25zJyk7XG4gICAgICAgIHRoaXMuaW5JdGVtID0gISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1pdGVtJykgfHwgISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1pdGVtLWRpdmlkZXInKTtcbiAgICB9XG4gICAgZ2V0IGhhc0ljb25Pbmx5KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uW3Nsb3Q9XCJpY29uLW9ubHlcIl0nKTtcbiAgICB9XG4gICAgZ2V0IHJpcHBsZVR5cGUoKSB7XG4gICAgICAgIGNvbnN0IGhhc0NsZWFyRmlsbCA9IHRoaXMuZmlsbCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbCA9PT0gJ2NsZWFyJztcbiAgICAgICAgLy8gSWYgdGhlIGJ1dHRvbiBpcyBpbiBhIHRvb2xiYXIsIGhhcyBhIGNsZWFyIGZpbGwgKHdoaWNoIGlzIHRoZSBkZWZhdWx0KVxuICAgICAgICAvLyBhbmQgb25seSBoYXMgYW4gaWNvbiB3ZSB1c2UgdGhlIHVuYm91bmRlZCBcImNpcmN1bGFyXCIgcmlwcGxlIGVmZmVjdFxuICAgICAgICBpZiAoaGFzQ2xlYXJGaWxsICYmIHRoaXMuaGFzSWNvbk9ubHkgJiYgdGhpcy5pblRvb2xiYXIpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5ib3VuZGVkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2JvdW5kZWQnO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlJDEodGhpcyk7XG4gICAgICAgIGNvbnN0IHsgYnV0dG9uVHlwZSwgdHlwZSwgZGlzYWJsZWQsIHJlbCwgdGFyZ2V0LCBzaXplLCBocmVmLCBjb2xvciwgZXhwYW5kLCBoYXNJY29uT25seSwgc2hhcGUsIHN0cm9uZyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgZmluYWxTaXplID0gc2l6ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuaW5JdGVtID8gJ3NtYWxsJyA6IHNpemU7XG4gICAgICAgIGNvbnN0IFRhZ1R5cGUgPSBocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJztcbiAgICAgICAgY29uc3QgYXR0cnMgPSAoVGFnVHlwZSA9PT0gJ2J1dHRvbicpXG4gICAgICAgICAgICA/IHsgdHlwZSB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgICAgICAgICAgICBocmVmLFxuICAgICAgICAgICAgICAgIHJlbCxcbiAgICAgICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5maWxsO1xuICAgICAgICBpZiAoZmlsbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmaWxsID0gdGhpcy5pblRvb2xiYXIgPyAnY2xlYXInIDogJ3NvbGlkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXMkMShjb2xvcikpLCB7IFttb2RlXTogdHJ1ZSwgW2J1dHRvblR5cGVdOiB0cnVlLCBbYCR7YnV0dG9uVHlwZX0tJHtleHBhbmR9YF06IGV4cGFuZCAhPT0gdW5kZWZpbmVkLCBbYCR7YnV0dG9uVHlwZX0tJHtmaW5hbFNpemV9YF06IGZpbmFsU2l6ZSAhPT0gdW5kZWZpbmVkLCBbYCR7YnV0dG9uVHlwZX0tJHtzaGFwZX1gXTogc2hhcGUgIT09IHVuZGVmaW5lZCwgW2Ake2J1dHRvblR5cGV9LSR7ZmlsbH1gXTogdHJ1ZSwgW2Ake2J1dHRvblR5cGV9LXN0cm9uZ2BdOiBzdHJvbmcsICdidXR0b24taGFzLWljb24tb25seSc6IGhhc0ljb25Pbmx5LCAnYnV0dG9uLWRpc2FibGVkJzogZGlzYWJsZWQsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLCAnaW9uLWZvY3VzYWJsZSc6IHRydWUgfSkgfSwgaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjbGFzczogXCJidXR0b24tbmF0aXZlXCIsIGRpc2FibGVkOiBkaXNhYmxlZCwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbkJsdXI6IHRoaXMub25CbHVyIH0pLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImJ1dHRvbi1pbm5lclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJpY29uLW9ubHlcIiB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInN0YXJ0XCIgfSksIGgoXCJzbG90XCIsIG51bGwpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZW5kXCIgfSkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IHRoaXMucmlwcGxlVHlwZSB9KSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0ey0tb3ZlcmZsb3c6aGlkZGVuOy0tcmlwcGxlLWNvbG9yOmN1cnJlbnRDb2xvcjstLWJvcmRlci13aWR0aDppbml0aWFsOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1ib3JkZXItc3R5bGU6aW5pdGlhbDstLWNvbG9yLWhvdmVyOmluaXRpYWw7LS1ib3gtc2hhZG93Om5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0bztjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt2ZXJ0aWNhbC1hbGlnbjp0b3A7dmVydGljYWwtYWxpZ246LXdlYmtpdC1iYXNlbGluZS1taWRkbGU7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfTpob3N0KC5idXR0b24tZGlzYWJsZWQpey0tb3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5idXR0b24tZGlzYWJsZWQpIC5idXR0b24tbmF0aXZle2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCMzMTcxZTApOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCM0YzhkZmYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWZvY3VzZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tY2xlYXIpey0tYm9yZGVyLXdpZHRoOjA7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWZvY3VzZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tY2xlYXIuYWN0aXZhdGVkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYnV0dG9uLWJsb2NrKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5idXR0b24tYmxvY2spIC5idXR0b24tbmF0aXZle21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2NsZWFyOmJvdGg7Y29udGFpbjpjb250ZW50fTpob3N0KC5idXR0b24tYmxvY2spIC5idXR0b24tbmF0aXZlOmFmdGVye2NsZWFyOmJvdGh9Omhvc3QoLmJ1dHRvbi1mdWxsKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5idXR0b24tZnVsbCkgLmJ1dHRvbi1uYXRpdmV7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7Y29udGFpbjpjb250ZW50fTpob3N0KC5idXR0b24tZnVsbDpub3QoLmJ1dHRvbi1yb3VuZCkpIC5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6MDtib3JkZXItcmlnaHQtd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowfS5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDoxOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2NvbnRhaW46bGF5b3V0IHN0eWxlO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6dmFyKC0tb3BhY2l0eSk7b3ZlcmZsb3c6dmFyKC0tb3ZlcmZsb3cpO3otaW5kZXg6MDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYnV0dG9uLW5hdGl2ZXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LmJ1dHRvbi1uYXRpdmU6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LmJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjEuNGVtO3BvaW50ZXItZXZlbnRzOm5vbmV9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDotLjNlbTttYXJnaW4tcmlnaHQ6LjNlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDotLjNlbTttYXJnaW4taW5saW5lLXN0YXJ0Oi0uM2VtOy13ZWJraXQtbWFyZ2luLWVuZDouM2VtO21hcmdpbi1pbmxpbmUtZW5kOi4zZW19fTo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pe21hcmdpbi1sZWZ0Oi4zZW07bWFyZ2luLXJpZ2h0Oi0uMmVtO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDouM2VtO21hcmdpbi1pbmxpbmUtc3RhcnQ6LjNlbTstd2Via2l0LW1hcmdpbi1lbmQ6LS4yZW07bWFyZ2luLWlubGluZS1lbmQ6LS4yZW19fTo6c2xvdHRlZChpb24taWNvbltzbG90PWljb24tb25seV0pe2ZvbnQtc2l6ZToxLjhlbX1pb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IpfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5hY3RpdmF0ZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpO2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2YXRlZCl9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX19Omhvc3R7LS1ib3JkZXItcmFkaXVzOjRweDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDoxLjFlbTstLXBhZGRpbmctZW5kOjEuMWVtOy0tdHJhbnNpdGlvbjpib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsY29sb3IgMTVtcyBsaW5lYXI7bWFyZ2luLWxlZnQ6MnB4O21hcmdpbi1yaWdodDoycHg7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTo0cHg7aGVpZ2h0OjM2cHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wNmVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweH19Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1iYWNrZ3JvdW5kKTstLWJveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKX06aG9zdCguYnV0dG9uLXNvbGlkLmFjdGl2YXRlZCl7LS1ib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsMC4xMil9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci13aWR0aDoycHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3gtc2hhZG93Om5vbmU7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjEpOy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjA0KTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX06aG9zdCguYnV0dG9uLW91dGxpbmUuYWN0aXZhdGVkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYnV0dG9uLWNsZWFyKXstLWJhY2tncm91bmQtYWN0aXZhdGVkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMSk7LS1iYWNrZ3JvdW5kLWhvdmVyOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMDQpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX06aG9zdCguYnV0dG9uLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6NjRweDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLXN0YXJ0OjI2cHg7LS1wYWRkaW5nLWVuZDoyNnB4Oy0tcGFkZGluZy1ib3R0b206MH06aG9zdCguYnV0dG9uLWxhcmdlKXstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLXN0YXJ0OjFlbTstLXBhZGRpbmctZW5kOjFlbTstLXBhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjIuOGVtO2ZvbnQtc2l6ZToyMHB4fTpob3N0KC5idXR0b24tc21hbGwpey0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctc3RhcnQ6MC45ZW07LS1wYWRkaW5nLWVuZDowLjllbTstLXBhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjIuMWVtO2ZvbnQtc2l6ZToxM3B4fTpob3N0KC5idXR0b24tc3Ryb25nKXtmb250LXdlaWdodDo3MDB9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXs6aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvcjpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItdGludCl9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlLDpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4wNCl9fVwiOyB9XG59O1xuXG5sZXQgQ0FDSEVEX01BUDtcclxuY29uc3QgZ2V0SWNvbk1hcCA9ICgpID0+IHtcclxuICAgIGlmICghQ0FDSEVEX01BUCkge1xyXG4gICAgICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICAgICAgICB3aW4uSW9uaWNvbnMgPSB3aW4uSW9uaWNvbnMgfHwge307XHJcbiAgICAgICAgQ0FDSEVEX01BUCA9IHdpbi5Jb25pY29ucy5tYXAgPSB3aW4uSW9uaWNvbnMubWFwIHx8IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBDQUNIRURfTUFQO1xyXG59O1xyXG5jb25zdCBnZXRVcmwgPSAoaSkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGdldFNyYyhpLnNyYyk7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIHVybCA9IGdldE5hbWUoaS5uYW1lLCBpLmljb24sIGkubW9kZSwgaS5pb3MsIGkubWQpO1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICAgIHJldHVybiBnZXROYW1lZFVybCh1cmwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGkuaWNvbikge1xyXG4gICAgICAgIHVybCA9IGdldFNyYyhpLmljb24pO1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXJsID0gZ2V0U3JjKGkuaWNvbltpLm1vZGVdKTtcclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmNvbnN0IGdldE5hbWVkVXJsID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGdldEljb25NYXAoKS5nZXQobmFtZSk7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRBc3NldFBhdGgoYHN2Zy8ke25hbWV9LnN2Z2ApO1xyXG59O1xyXG5jb25zdCBnZXROYW1lID0gKG5hbWUsIGljb24sIG1vZGUsIGlvcywgbWQpID0+IHtcclxuICAgIC8vIGRlZmF1bHQgdG8gXCJtZFwiIGlmIHNvbWVob3cgdGhlIG1vZGUgd2Fzbid0IHNldFxyXG4gICAgbW9kZSA9IChtb2RlICYmIG1vZGUudG9Mb3dlckNhc2UoKSkgPT09ICdpb3MnID8gJ2lvcycgOiAnbWQnO1xyXG4gICAgLy8gaWYgYW4gaWNvbiB3YXMgcGFzc2VkIGluIHVzaW5nIHRoZSBpb3Mgb3IgbWQgYXR0cmlidXRlc1xyXG4gICAgLy8gc2V0IHRoZSBpY29uTmFtZSB0byB3aGF0ZXZlciB3YXMgcGFzc2VkIGluXHJcbiAgICBpZiAoaW9zICYmIG1vZGUgPT09ICdpb3MnKSB7XHJcbiAgICAgICAgbmFtZSA9IGlvcy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWQgJiYgbW9kZSA9PT0gJ21kJykge1xyXG4gICAgICAgIG5hbWUgPSBtZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCFuYW1lICYmIGljb24gJiYgIWlzU3JjKGljb24pKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBpY29uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTdHIobmFtZSkpIHtcclxuICAgICAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKCEvXm1kLXxeaW9zLXxebG9nby0vLnRlc3QobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgaGF2ZSBvbmUgb2YgdGhlIGRlZmF1bHRzXHJcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXRzIGF1dG8gYWRkIGluIHRoZSBtb2RlIHByZWZpeCBmb3IgdGhlbVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IG1vZGUgKyAnLScgKyBuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1N0cihuYW1lKSB8fCBuYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIG9ubHkgYWxsb3cgYWxwaGEgY2hhcmFjdGVycyBhbmQgZGFzaFxyXG4gICAgY29uc3QgaW52YWxpZENoYXJzID0gbmFtZS5yZXBsYWNlKC9bYS16XXwtfFxcZC9naSwgJycpO1xyXG4gICAgaWYgKGludmFsaWRDaGFycyAhPT0gJycpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBuYW1lO1xyXG59O1xyXG5jb25zdCBnZXRTcmMgPSAoc3JjKSA9PiB7XHJcbiAgICBpZiAoaXNTdHIoc3JjKSkge1xyXG4gICAgICAgIHNyYyA9IHNyYy50cmltKCk7XHJcbiAgICAgICAgaWYgKGlzU3JjKHNyYykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNyYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuY29uc3QgaXNTcmMgPSAoc3RyKSA9PiB7XHJcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA+IDAgJiYgLyhcXC98XFwuKS8udGVzdChzdHIpO1xyXG59O1xyXG5jb25zdCBpc1N0ciA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xuXG5jb25zdCB2YWxpZGF0ZUNvbnRlbnQgPSAoc3ZnQ29udGVudCkgPT4ge1xyXG4gICAgaWYgKHN2Z0NvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcclxuICAgICAgICAvLyBzZXR1cCB0aGlzIHdheSB0byBlbnN1cmUgaXQgd29ya3Mgb24gb3VyIGJ1ZGR5IElFXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGRpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXYuY2hpbGROb2Rlc1tpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJykge1xyXG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5jaGlsZE5vZGVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtdXN0IG9ubHkgaGF2ZSAxIHJvb3QgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IHN2Z0VsbSA9IGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBpZiAoc3ZnRWxtICYmIHN2Z0VsbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xyXG4gICAgICAgICAgICBzdmdFbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzLWlvbi1pY29uJyk7XHJcbiAgICAgICAgICAgIC8vIHJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIHN2Z1xyXG4gICAgICAgICAgICAvLyBsZXRzIGRvdWJsZSBjaGVjayB3ZSd2ZSBnb3QgdmFsaWQgZWxlbWVudHNcclxuICAgICAgICAgICAgLy8gZG8gbm90IGFsbG93IHNjcmlwdHNcclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQoc3ZnRWxtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdi5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn07XHJcbmNvbnN0IGlzVmFsaWQgPSAoZWxtKSA9PiB7XHJcbiAgICBpZiAoZWxtLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgaWYgKGVsbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2NyaXB0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxtLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gZWxtLmF0dHJpYnV0ZXNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cih2YWwpICYmIHZhbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ29uJykgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZChlbG0uY2hpbGROb2Rlc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xuXG5jb25zdCByZXF1ZXN0cyA9IG5ldyBNYXAoKTtcclxuY29uc3QgZ2V0U3ZnQ29udGVudCA9ICh1cmwpID0+IHtcclxuICAgIC8vIHNlZSBpZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXF1ZXN0IGZvciB0aGlzIHVybFxyXG4gICAgbGV0IHJlcSA9IHJlcXVlc3RzLmdldCh1cmwpO1xyXG4gICAgaWYgKCFyZXEpIHtcclxuICAgICAgICAvLyB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgYSByZXF1ZXN0XHJcbiAgICAgICAgcmVxID0gZmV0Y2godXJsKS50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyc3Auc3RhdHVzIDw9IDI5OSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJzcC50ZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9KS50aGVuKHN2Z0NvbnRlbnQgPT4gdmFsaWRhdGVDb250ZW50KHN2Z0NvbnRlbnQpKTtcclxuICAgICAgICAvLyBjYWNoZSBmb3IgdGhlIHNhbWUgcmVxdWVzdHNcclxuICAgICAgICByZXF1ZXN0cy5zZXQodXJsLCByZXEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcTtcclxufTtcblxuY29uc3QgSWNvbiA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBlbmFibGVkLCBpb24taWNvbiB3aWxsIGJlIGxvYWRlZCBsYXppbHkgd2hlbiBpdCdzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0LlxuICAgICAgICAgKiBEZWZhdWx0LCBgZmFsc2VgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAvLyBwdXJwb3NlbHkgZG8gbm90IHJldHVybiB0aGUgcHJvbWlzZSBoZXJlIGJlY2F1c2UgbG9hZGluZ1xuICAgICAgICAvLyB0aGUgc3ZnIGZpbGUgc2hvdWxkIG5vdCBob2xkIHVwIGxvYWRpbmcgdGhlIGFwcFxuICAgICAgICAvLyBvbmx5IGxvYWQgdGhlIHN2ZyBpZiBpdCdzIHZpc2libGVcbiAgICAgICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKHRoaXMuZWwsICc1MHB4JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkSWNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlvKSB7XG4gICAgICAgICAgICB0aGlzLmlvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2FpdFVudGlsVmlzaWJsZShlbCwgcm9vdE1hcmdpbiwgY2IpIHtcbiAgICAgICAgaWYgKCB0aGlzLmxhenkgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBjb25zdCBpbyA9IHRoaXMuaW8gPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlvID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHsgcm9vdE1hcmdpbiB9KTtcbiAgICAgICAgICAgIGlvLm9ic2VydmUoZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZmFsbGJhY2sgdG8gYWx3YXlzIHNob3cgaXRcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZEljb24oKSB7XG4gICAgICAgIGlmICggdGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGdldFVybCh0aGlzKTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICBnZXRTdmdDb250ZW50KHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3ZnQ29udGVudCA9PiB0aGlzLnN2Z0NvbnRlbnQgPSBzdmdDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXJpYUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGdldE5hbWUodGhpcy5uYW1lLCB0aGlzLmljb24sIHRoaXMubW9kZSwgdGhpcy5pb3MsIHRoaXMubWQpO1xuICAgICAgICAgICAgLy8gdXNlciBkaWQgbm90IHByb3ZpZGUgYSBsYWJlbFxuICAgICAgICAgICAgLy8gY29tZSB1cCB3aXRoIHRoZSBsYWJlbCBiYXNlZCBvbiB0aGUgaWNvbiBuYW1lXG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFyaWFMYWJlbCA9IGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdpb3MtJywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdtZC0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLS9nLCAnICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHRoaXMubW9kZSB8fCAnbWQnO1xuICAgICAgICBjb25zdCBmbGlwUnRsID0gdGhpcy5mbGlwUnRsIHx8ICh0aGlzLmFyaWFMYWJlbCAmJiB0aGlzLmFyaWFMYWJlbC5pbmRleE9mKCdhcnJvdycpID4gLTEgJiYgdGhpcy5mbGlwUnRsICE9PSBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwiaW1nXCIsIGNsYXNzOiBPYmplY3QuYXNzaWduKHsgW21vZGVdOiB0cnVlIH0sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSwgeyBbYGljb24tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLCAnZmxpcC1ydGwnOiAhIWZsaXBSdGwgJiYgdGhpcy5lbC5vd25lckRvY3VtZW50LmRpciA9PT0gJ3J0bCcgfSkgfSwgKCggdGhpcy5zdmdDb250ZW50KVxuICAgICAgICAgICAgPyBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaWNvbi1pbm5lclwiLCBpbm5lckhUTUw6IHRoaXMuc3ZnQ29udGVudCB9KVxuICAgICAgICAgICAgOiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaWNvbi1pbm5lclwiIH0pKSkpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJzdmdcIl07IH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJuYW1lXCI6IFtcImxvYWRJY29uXCJdLFxuICAgICAgICBcInNyY1wiOiBbXCJsb2FkSWNvblwiXSxcbiAgICAgICAgXCJpY29uXCI6IFtcImxvYWRJY29uXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjFlbTtoZWlnaHQ6MWVtO2NvbnRhaW46c3RyaWN0O2ZpbGw6Y3VycmVudENvbG9yOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnR9Lmljb24taW5uZXIsc3Zne2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX06aG9zdCguZmxpcC1ydGwpIC5pY29uLWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgtMSk7dHJhbnNmb3JtOnNjYWxlWCgtMSl9Omhvc3QoLmljb24tc21hbGwpe2ZvbnQtc2l6ZToxOHB4IWltcG9ydGFudH06aG9zdCguaWNvbi1sYXJnZSl7Zm9udC1zaXplOjMycHghaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKSFpbXBvcnRhbnR9Omhvc3QoLmlvbi1jb2xvci1wcmltYXJ5KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfTpob3N0KC5pb24tY29sb3Itc2Vjb25kYXJ5KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIzBjZDFlOCl9Omhvc3QoLmlvbi1jb2xvci10ZXJ0aWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItdGVydGlhcnksI2Y0YTk0Mil9Omhvc3QoLmlvbi1jb2xvci1zdWNjZXNzKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCMxMGRjNjApfTpob3N0KC5pb24tY29sb3Itd2FybmluZyl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itd2FybmluZywjZmZjZTAwKX06aG9zdCguaW9uLWNvbG9yLWRhbmdlcil7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCNmMTQxNDEpfTpob3N0KC5pb24tY29sb3ItbGlnaHQpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLWxpZ2h0LCNmNGY1ZjgpfTpob3N0KC5pb24tY29sb3ItbWVkaXVtKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1tZWRpdW0sIzk4OWFhMil9Omhvc3QoLmlvbi1jb2xvci1kYXJrKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1kYXJrLCMyMjI0MjgpfVwiOyB9XG59O1xuY29uc3QgZ2V0SW9uTW9kZSA9IChyZWYpID0+IHtcbiAgICByZXR1cm4gZ2V0TW9kZShyZWYpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21vZGUnKSB8fCAnbWQnO1xufTtcbmNvbnN0IGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IChjb2xvcikgPT4ge1xuICAgIHJldHVybiAoY29sb3IpID8ge1xuICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxuICAgIH0gOiBudWxsO1xufTtcblxuZXhwb3J0IHsgQnV0dG9uIGFzIGlvbl9idXR0b24sIEljb24gYXMgaW9uX2ljb24gfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=