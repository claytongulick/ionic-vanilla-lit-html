(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "../node_modules/@ionic/core/dist/esm/css-shim-206ea950-3169f23e.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/css-shim-206ea950-3169f23e.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Extremely simple css parser. Intended to be not more than what we need
and definitely not necessarily correct =).
*/
/** @unrestricted */
var StyleNode = /** @class */ (function () {
    function StyleNode() {
        this.start = 0;
        this.end = 0;
        this.previous = null;
        this.parent = null;
        this.rules = null;
        this.parsedCssText = '';
        this.cssText = '';
        this.atRule = false;
        this.type = 0;
        this.keyframesName = '';
        this.selector = '';
        this.parsedSelector = '';
    }
    return StyleNode;
}());
// given a string of css, return a simple rule tree
/**
 * @param {string} text
 * @return {StyleNode}
 */
function parse(text) {
    text = clean(text);
    return parseCss(lex(text), text);
}
// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */
function clean(cssText) {
    return cssText.replace(RX.comments, '').replace(RX.port, '');
}
// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */
function lex(text) {
    var root = new StyleNode();
    root['start'] = 0;
    root['end'] = text.length;
    var n = root;
    for (var i = 0, l = text.length; i < l; i++) {
        if (text[i] === OPEN_BRACE) {
            if (!n['rules']) {
                n['rules'] = [];
            }
            var p = n;
            var previous = p['rules'][p['rules'].length - 1] || null;
            n = new StyleNode();
            n['start'] = i + 1;
            n['parent'] = p;
            n['previous'] = previous;
            p['rules'].push(n);
        }
        else if (text[i] === CLOSE_BRACE) {
            n['end'] = i + 1;
            n = n['parent'] || root;
        }
    }
    return root;
}
// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */
function parseCss(node, text) {
    var t = text.substring(node['start'], node['end'] - 1);
    node['parsedCssText'] = node['cssText'] = t.trim();
    if (node.parent) {
        var ss = node.previous ? node.previous['end'] : node.parent['start'];
        t = text.substring(ss, node['start'] - 1);
        t = _expandUnicodeEscapes(t);
        t = t.replace(RX.multipleSpaces, ' ');
        // TODO(sorvell): ad hoc; make selector include only after last ;
        // helps with mixin syntax
        t = t.substring(t.lastIndexOf(';') + 1);
        var s = node['parsedSelector'] = node['selector'] = t.trim();
        node['atRule'] = (s.indexOf(AT_START) === 0);
        // note, support a subset of rule types...
        if (node['atRule']) {
            if (s.indexOf(MEDIA_START) === 0) {
                node['type'] = types.MEDIA_RULE;
            }
            else if (s.match(RX.keyframesRule)) {
                node['type'] = types.KEYFRAMES_RULE;
                node['keyframesName'] = node['selector'].split(RX.multipleSpaces).pop();
            }
        }
        else {
            if (s.indexOf(VAR_START) === 0) {
                node['type'] = types.MIXIN_RULE;
            }
            else {
                node['type'] = types.STYLE_RULE;
            }
        }
    }
    var r$ = node['rules'];
    if (r$) {
        for (var i = 0, l = r$.length, r = void 0; (i < l) && (r = r$[i]); i++) {
            parseCss(r, text);
        }
    }
    return node;
}
/**
 * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
 * expanded form that doesn't require trailing space `\000033`
 * @param {string} s
 * @return {string}
 */
function _expandUnicodeEscapes(s) {
    return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
        var code = arguments[1], repeat = 6 - code.length;
        while (repeat--) {
            code = '0' + code;
        }
        return '\\' + code;
    });
}
/** @enum {number} */
var types = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7,
    MEDIA_RULE: 4,
    MIXIN_RULE: 1000
};
var OPEN_BRACE = '{';
var CLOSE_BRACE = '}';
// helper regexp's
var RX = {
    comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    port: /@import[^;]*;/gim,
    customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    keyframesRule: /^@[^\s]*keyframes/,
    multipleSpaces: /\s+/g
};
var VAR_START = '--';
var MEDIA_START = '@media';
var AT_START = '@';
function findRegex(regex, cssText, offset) {
    regex['lastIndex'] = 0;
    var r = cssText.substring(offset).match(regex);
    if (r) {
        var start = offset + r['index'];
        return {
            start: start,
            end: start + r[0].length
        };
    }
    return null;
}
var VAR_USAGE_START = /\bvar\(/;
var VAR_ASSIGN_START = /\B--[\w-]+\s*:/;
var COMMENTS = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim;
var TRAILING_LINES = /^[\t ]+\n/gm;
function resolveVar(props, prop, fallback) {
    if (props[prop]) {
        return props[prop];
    }
    if (fallback) {
        return executeTemplate(fallback, props);
    }
    return '';
}
function findVarEndIndex(cssText, offset) {
    var count = 0;
    var i = offset;
    for (; i < cssText.length; i++) {
        var c = cssText[i];
        if (c === '(') {
            count++;
        }
        else if (c === ')') {
            count--;
            if (count <= 0) {
                return i + 1;
            }
        }
    }
    return i;
}
function parseVar(cssText, offset) {
    var varPos = findRegex(VAR_USAGE_START, cssText, offset);
    if (!varPos) {
        return null;
    }
    var endVar = findVarEndIndex(cssText, varPos.start);
    var varContent = cssText.substring(varPos.end, endVar - 1);
    var _a = varContent.split(','), propName = _a[0], fallback = _a.slice(1);
    return {
        start: varPos.start,
        end: endVar,
        propName: propName.trim(),
        fallback: fallback.length > 0 ? fallback.join(',').trim() : undefined
    };
}
function compileVar(cssText, template, offset) {
    var varMeta = parseVar(cssText, offset);
    if (!varMeta) {
        template.push(cssText.substring(offset, cssText.length));
        return cssText.length;
    }
    var propName = varMeta.propName;
    var fallback = varMeta.fallback != null ? compileTemplate(varMeta.fallback) : undefined;
    template.push(cssText.substring(offset, varMeta.start), function (params) { return resolveVar(params, propName, fallback); });
    return varMeta.end;
}
function executeTemplate(template, props) {
    var final = '';
    for (var i = 0; i < template.length; i++) {
        var s = template[i];
        final += (typeof s === 'string')
            ? s
            : s(props);
    }
    return final;
}
function findEndValue(cssText, offset) {
    var onStr = false;
    var double = false;
    var i = offset;
    for (; i < cssText.length; i++) {
        var c = cssText[i];
        if (onStr) {
            if (double && c === '"') {
                onStr = false;
            }
            if (!double && c === '\'') {
                onStr = false;
            }
        }
        else {
            if (c === '"') {
                onStr = true;
                double = true;
            }
            else if (c === '\'') {
                onStr = true;
                double = false;
            }
            else if (c === ';') {
                return i + 1;
            }
            else if (c === '}') {
                return i;
            }
        }
    }
    return i;
}
function removeCustomAssigns(cssText) {
    var final = '';
    var offset = 0;
    while (true) {
        var assignPos = findRegex(VAR_ASSIGN_START, cssText, offset);
        var start = assignPos ? assignPos.start : cssText.length;
        final += cssText.substring(offset, start);
        if (assignPos) {
            offset = findEndValue(cssText, start);
        }
        else {
            break;
        }
    }
    return final;
}
function compileTemplate(cssText) {
    var index = 0;
    cssText = cssText.replace(COMMENTS, '');
    cssText = removeCustomAssigns(cssText)
        .replace(TRAILING_LINES, '');
    var segments = [];
    while (index < cssText.length) {
        index = compileVar(cssText, segments, index);
    }
    return segments;
}
function resolveValues(selectors) {
    var props = {};
    selectors.forEach(function (selector) {
        selector.declarations.forEach(function (dec) {
            props[dec.prop] = dec.value;
        });
    });
    var propsValues = {};
    var entries = Object.entries(props);
    var _loop_1 = function (i) {
        var dirty = false;
        entries.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var propValue = executeTemplate(value, propsValues);
            if (propValue !== propsValues[key]) {
                propsValues[key] = propValue;
                dirty = true;
            }
        });
        if (!dirty) {
            return "break";
        }
    };
    for (var i = 0; i < 10; i++) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    return propsValues;
}
function getSelectors(root, index) {
    if (index === void 0) { index = 0; }
    if (!root.rules) {
        return [];
    }
    var selectors = [];
    root.rules
        .filter(function (rule) { return rule.type === types.STYLE_RULE; })
        .forEach(function (rule) {
        var declarations = getDeclarations(rule.cssText);
        if (declarations.length > 0) {
            rule.parsedSelector.split(',').forEach(function (selector) {
                selector = selector.trim();
                selectors.push({
                    selector: selector,
                    declarations: declarations,
                    specificity: computeSpecificity(),
                    nu: index
                });
            });
        }
        index++;
    });
    return selectors;
}
function computeSpecificity(_selector) {
    return 1;
}
var IMPORTANT = '!important';
var FIND_DECLARATIONS = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
function getDeclarations(cssText) {
    var declarations = [];
    var xArray;
    while (xArray = FIND_DECLARATIONS.exec(cssText.trim())) {
        var _a = normalizeValue(xArray[2]), value = _a.value, important = _a.important;
        declarations.push({
            prop: xArray[1].trim(),
            value: compileTemplate(value),
            important: important,
        });
    }
    return declarations;
}
function normalizeValue(value) {
    var regex = /\s+/gim;
    value = value.replace(regex, ' ').trim();
    var important = value.endsWith(IMPORTANT);
    if (important) {
        value = value.substr(0, value.length - IMPORTANT.length).trim();
    }
    return {
        value: value,
        important: important
    };
}
function getActiveSelectors(hostEl, hostScopeMap, globalScopes) {
    // computes the css scopes that might affect this particular element
    // avoiding using spread arrays to avoid ts helper fns when in es5
    var scopes = [];
    var scopesForElement = getScopesForElement(hostScopeMap, hostEl);
    // globalScopes are always took into account
    globalScopes.forEach(function (s) { return scopes.push(s); });
    // the parent scopes are computed by walking parent dom until <html> is reached
    scopesForElement.forEach(function (s) { return scopes.push(s); });
    // each scope might have an array of associated selectors
    // let's flatten the complete array of selectors from all the scopes
    var selectorSet = getSelectorsForScopes(scopes);
    // we filter to only the selectors that matches the hostEl
    var activeSelectors = selectorSet.filter(function (selector) { return matches(hostEl, selector.selector); });
    // sort selectors by specifity
    return sortSelectors(activeSelectors);
}
function getScopesForElement(hostTemplateMap, node) {
    var scopes = [];
    while (node) {
        var scope = hostTemplateMap.get(node);
        if (scope) {
            scopes.push(scope);
        }
        node = node.parentElement;
    }
    return scopes;
}
function getSelectorsForScopes(scopes) {
    var selectors = [];
    scopes.forEach(function (scope) {
        selectors.push.apply(selectors, scope.selectors);
    });
    return selectors;
}
function sortSelectors(selectors) {
    selectors.sort(function (a, b) {
        if (a.specificity === b.specificity) {
            return a.nu - b.nu;
        }
        return a.specificity - b.specificity;
    });
    return selectors;
}
function matches(el, selector) {
    return selector === ':root' || selector === 'html' || el.matches(selector);
}
function parseCSS(original) {
    var ast = parse(original);
    var template = compileTemplate(original);
    var selectors = getSelectors(ast);
    return {
        original: original,
        template: template,
        selectors: selectors,
        usesCssVars: template.length > 1
    };
}
function addGlobalStyle(globalScopes, styleEl) {
    if (globalScopes.some(function (css) { return css.styleEl === styleEl; })) {
        return false;
    }
    var css = parseCSS(styleEl.textContent);
    css.styleEl = styleEl;
    globalScopes.push(css);
    return true;
}
function updateGlobalScopes(scopes) {
    var selectors = getSelectorsForScopes(scopes);
    var props = resolveValues(selectors);
    scopes.forEach(function (scope) {
        if (scope.usesCssVars) {
            scope.styleEl.textContent = executeTemplate(scope.template, props);
        }
    });
}
function reScope(scope, scopeId) {
    var template = scope.template.map(function (segment) {
        return (typeof segment === 'string')
            ? replaceScope(segment, scope.scopeId, scopeId)
            : segment;
    });
    var selectors = scope.selectors.map(function (sel) {
        return Object.assign(Object.assign({}, sel), { selector: replaceScope(sel.selector, scope.scopeId, scopeId) });
    });
    return Object.assign(Object.assign({}, scope), { template: template,
        selectors: selectors,
        scopeId: scopeId });
}
function replaceScope(original, oldScopeId, newScopeId) {
    original = replaceAll(original, "\\." + oldScopeId, "." + newScopeId);
    return original;
}
function replaceAll(input, find, replace) {
    return input.replace(new RegExp(find, 'g'), replace);
}
function loadDocument(doc, globalScopes) {
    loadDocumentStyles(doc, globalScopes);
    return loadDocumentLinks(doc, globalScopes);
}
function startWatcher(doc, globalScopes) {
    var mutation = new MutationObserver(function () {
        if (loadDocumentStyles(doc, globalScopes)) {
            updateGlobalScopes(globalScopes);
        }
    });
    mutation.observe(document.head, { childList: true });
}
function loadDocumentLinks(doc, globalScopes) {
    var promises = [];
    var linkElms = doc.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])');
    for (var i = 0; i < linkElms.length; i++) {
        promises.push(addGlobalLink(doc, globalScopes, linkElms[i]));
    }
    return Promise.all(promises);
}
function loadDocumentStyles(doc, globalScopes) {
    var styleElms = Array.from(doc.querySelectorAll('style:not([data-styles]):not([data-no-shim])'));
    return styleElms
        .map(function (style) { return addGlobalStyle(globalScopes, style); })
        .some(Boolean);
}
function addGlobalLink(doc, globalScopes, linkElm) {
    var url = linkElm.href;
    return fetch(url).then(function (rsp) { return rsp.text(); }).then(function (text) {
        if (hasCssVariables(text) && linkElm.parentNode) {
            if (hasRelativeUrls(text)) {
                text = fixRelativeUrls(text, url);
            }
            var styleEl = doc.createElement('style');
            styleEl.setAttribute('data-styles', '');
            styleEl.textContent = text;
            addGlobalStyle(globalScopes, styleEl);
            linkElm.parentNode.insertBefore(styleEl, linkElm);
            linkElm.remove();
        }
    }).catch(function (err) {
        console.error(err);
    });
}
// This regexp tries to determine when a variable is declared, for example:
//
// .my-el { --highlight-color: green; }
//
// but we don't want to trigger when a classname uses "--" or a pseudo-class is
// used. We assume that the only characters that can preceed a variable
// declaration are "{", from an opening block, ";" from a preceeding rule, or a
// space. This prevents the regexp from matching a word in a selector, since
// they would need to start with a "." or "#". (We assume element names don't
// start with "--").
var CSS_VARIABLE_REGEXP = /[\s;{]--[-a-zA-Z0-9]+\s*:/m;
function hasCssVariables(css) {
    return css.indexOf('var(') > -1 || CSS_VARIABLE_REGEXP.test(css);
}
// This regexp find all url() usages with relative urls
var CSS_URL_REGEXP = /url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;
function hasRelativeUrls(css) {
    CSS_URL_REGEXP.lastIndex = 0;
    return CSS_URL_REGEXP.test(css);
}
function fixRelativeUrls(css, originalUrl) {
    // get the basepath from the original import url
    var basePath = originalUrl.replace(/[^/]*$/, '');
    // replace the relative url, with the new relative url
    return css.replace(CSS_URL_REGEXP, function (fullMatch, url) {
        // rhe new relative path is the base path + uri
        // TODO: normalize relative URL
        var relativeUrl = basePath + url;
        return fullMatch.replace(url, relativeUrl);
    });
}
var CustomStyle = /** @class */ (function () {
    function CustomStyle(win, doc) {
        this.win = win;
        this.doc = doc;
        this.count = 0;
        this.hostStyleMap = new WeakMap();
        this.hostScopeMap = new WeakMap();
        this.globalScopes = [];
        this.scopesMap = new Map();
        this.didInit = false;
    }
    CustomStyle.prototype.initShim = function () {
        var _this = this;
        if (this.didInit) {
            return Promise.resolve();
        }
        else {
            this.didInit = true;
            return new Promise(function (resolve) {
                _this.win.requestAnimationFrame(function () {
                    startWatcher(_this.doc, _this.globalScopes);
                    loadDocument(_this.doc, _this.globalScopes).then(function () { return resolve(); });
                });
            });
        }
    };
    CustomStyle.prototype.addLink = function (linkEl) {
        var _this = this;
        return addGlobalLink(this.doc, this.globalScopes, linkEl).then(function () {
            _this.updateGlobal();
        });
    };
    CustomStyle.prototype.addGlobalStyle = function (styleEl) {
        if (addGlobalStyle(this.globalScopes, styleEl)) {
            this.updateGlobal();
        }
    };
    CustomStyle.prototype.createHostStyle = function (hostEl, cssScopeId, cssText, isScoped) {
        if (this.hostScopeMap.has(hostEl)) {
            throw new Error('host style already created');
        }
        var baseScope = this.registerHostTemplate(cssText, cssScopeId, isScoped);
        var styleEl = this.doc.createElement('style');
        styleEl.setAttribute('data-styles', '');
        if (!baseScope.usesCssVars) {
            // This component does not use (read) css variables
            styleEl.textContent = cssText;
        }
        else if (isScoped) {
            // This component is dynamic: uses css var and is scoped
            styleEl['s-sc'] = cssScopeId = baseScope.scopeId + "-" + this.count;
            styleEl.textContent = '/*needs update*/';
            this.hostStyleMap.set(hostEl, styleEl);
            this.hostScopeMap.set(hostEl, reScope(baseScope, cssScopeId));
            this.count++;
        }
        else {
            // This component uses css vars, but it's no-encapsulation (global static)
            baseScope.styleEl = styleEl;
            if (!baseScope.usesCssVars) {
                styleEl.textContent = executeTemplate(baseScope.template, {});
            }
            this.globalScopes.push(baseScope);
            this.updateGlobal();
            this.hostScopeMap.set(hostEl, baseScope);
        }
        return styleEl;
    };
    CustomStyle.prototype.removeHost = function (hostEl) {
        var css = this.hostStyleMap.get(hostEl);
        if (css) {
            css.remove();
        }
        this.hostStyleMap.delete(hostEl);
        this.hostScopeMap.delete(hostEl);
    };
    CustomStyle.prototype.updateHost = function (hostEl) {
        var scope = this.hostScopeMap.get(hostEl);
        if (scope && scope.usesCssVars && scope.isScoped) {
            var styleEl = this.hostStyleMap.get(hostEl);
            if (styleEl) {
                var selectors = getActiveSelectors(hostEl, this.hostScopeMap, this.globalScopes);
                var props = resolveValues(selectors);
                styleEl.textContent = executeTemplate(scope.template, props);
            }
        }
    };
    CustomStyle.prototype.updateGlobal = function () {
        updateGlobalScopes(this.globalScopes);
    };
    CustomStyle.prototype.registerHostTemplate = function (cssText, scopeId, isScoped) {
        var scope = this.scopesMap.get(scopeId);
        if (!scope) {
            scope = parseCSS(cssText);
            scope.scopeId = scopeId;
            scope.isScoped = isScoped;
            this.scopesMap.set(scopeId, scope);
        }
        return scope;
    };
    return CustomStyle;
}());
var win = window;
function needsShim() {
    return !(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}
if (!win.__stencil_cssshim && needsShim()) {
    win.__stencil_cssshim = new CustomStyle(win, document);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2Nzcy1zaGltLTIwNmVhOTUwLTMxNjlmMjNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQjtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0JBQXdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixrQkFBa0IsRUFBRTtBQUN0RyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ijc2XFxjaHVua3NcXDc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkV4dHJlbWVseSBzaW1wbGUgY3NzIHBhcnNlci4gSW50ZW5kZWQgdG8gYmUgbm90IG1vcmUgdGhhbiB3aGF0IHdlIG5lZWRcbmFuZCBkZWZpbml0ZWx5IG5vdCBuZWNlc3NhcmlseSBjb3JyZWN0ID0pLlxuKi9cbi8qKiBAdW5yZXN0cmljdGVkICovXG52YXIgU3R5bGVOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0eWxlTm9kZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IDA7XG4gICAgICAgIHRoaXMuZW5kID0gMDtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ydWxlcyA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyc2VkQ3NzVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmNzc1RleHQgPSAnJztcbiAgICAgICAgdGhpcy5hdFJ1bGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50eXBlID0gMDtcbiAgICAgICAgdGhpcy5rZXlmcmFtZXNOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAnJztcbiAgICAgICAgdGhpcy5wYXJzZWRTZWxlY3RvciA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gU3R5bGVOb2RlO1xufSgpKTtcbi8vIGdpdmVuIGEgc3RyaW5nIG9mIGNzcywgcmV0dXJuIGEgc2ltcGxlIHJ1bGUgdHJlZVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHJldHVybiB7U3R5bGVOb2RlfVxuICovXG5mdW5jdGlvbiBwYXJzZSh0ZXh0KSB7XG4gICAgdGV4dCA9IGNsZWFuKHRleHQpO1xuICAgIHJldHVybiBwYXJzZUNzcyhsZXgodGV4dCksIHRleHQpO1xufVxuLy8gcmVtb3ZlIHN0dWZmIHdlIGRvbid0IGNhcmUgYWJvdXQgdGhhdCBtYXkgaGluZGVyIHBhcnNpbmdcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNzc1RleHRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2xlYW4oY3NzVGV4dCkge1xuICAgIHJldHVybiBjc3NUZXh0LnJlcGxhY2UoUlguY29tbWVudHMsICcnKS5yZXBsYWNlKFJYLnBvcnQsICcnKTtcbn1cbi8vIHN1cGVyIHNpbXBsZSB7Li4ufSBsZXhlciB0aGF0IHJldHVybnMgYSBub2RlIHRyZWVcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqIEByZXR1cm4ge1N0eWxlTm9kZX1cbiAqL1xuZnVuY3Rpb24gbGV4KHRleHQpIHtcbiAgICB2YXIgcm9vdCA9IG5ldyBTdHlsZU5vZGUoKTtcbiAgICByb290WydzdGFydCddID0gMDtcbiAgICByb290WydlbmQnXSA9IHRleHQubGVuZ3RoO1xuICAgIHZhciBuID0gcm9vdDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRleHQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXh0W2ldID09PSBPUEVOX0JSQUNFKSB7XG4gICAgICAgICAgICBpZiAoIW5bJ3J1bGVzJ10pIHtcbiAgICAgICAgICAgICAgICBuWydydWxlcyddID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcCA9IG47XG4gICAgICAgICAgICB2YXIgcHJldmlvdXMgPSBwWydydWxlcyddW3BbJ3J1bGVzJ10ubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgICAgIG4gPSBuZXcgU3R5bGVOb2RlKCk7XG4gICAgICAgICAgICBuWydzdGFydCddID0gaSArIDE7XG4gICAgICAgICAgICBuWydwYXJlbnQnXSA9IHA7XG4gICAgICAgICAgICBuWydwcmV2aW91cyddID0gcHJldmlvdXM7XG4gICAgICAgICAgICBwWydydWxlcyddLnB1c2gobik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGV4dFtpXSA9PT0gQ0xPU0VfQlJBQ0UpIHtcbiAgICAgICAgICAgIG5bJ2VuZCddID0gaSArIDE7XG4gICAgICAgICAgICBuID0gblsncGFyZW50J10gfHwgcm9vdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbn1cbi8vIGFkZCBzZWxlY3RvcnMvY3NzVGV4dCB0byBub2RlIHRyZWVcbi8qKlxuICogQHBhcmFtIHtTdHlsZU5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJuIHtTdHlsZU5vZGV9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlQ3NzKG5vZGUsIHRleHQpIHtcbiAgICB2YXIgdCA9IHRleHQuc3Vic3RyaW5nKG5vZGVbJ3N0YXJ0J10sIG5vZGVbJ2VuZCddIC0gMSk7XG4gICAgbm9kZVsncGFyc2VkQ3NzVGV4dCddID0gbm9kZVsnY3NzVGV4dCddID0gdC50cmltKCk7XG4gICAgaWYgKG5vZGUucGFyZW50KSB7XG4gICAgICAgIHZhciBzcyA9IG5vZGUucHJldmlvdXMgPyBub2RlLnByZXZpb3VzWydlbmQnXSA6IG5vZGUucGFyZW50WydzdGFydCddO1xuICAgICAgICB0ID0gdGV4dC5zdWJzdHJpbmcoc3MsIG5vZGVbJ3N0YXJ0J10gLSAxKTtcbiAgICAgICAgdCA9IF9leHBhbmRVbmljb2RlRXNjYXBlcyh0KTtcbiAgICAgICAgdCA9IHQucmVwbGFjZShSWC5tdWx0aXBsZVNwYWNlcywgJyAnKTtcbiAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogYWQgaG9jOyBtYWtlIHNlbGVjdG9yIGluY2x1ZGUgb25seSBhZnRlciBsYXN0IDtcbiAgICAgICAgLy8gaGVscHMgd2l0aCBtaXhpbiBzeW50YXhcbiAgICAgICAgdCA9IHQuc3Vic3RyaW5nKHQubGFzdEluZGV4T2YoJzsnKSArIDEpO1xuICAgICAgICB2YXIgcyA9IG5vZGVbJ3BhcnNlZFNlbGVjdG9yJ10gPSBub2RlWydzZWxlY3RvciddID0gdC50cmltKCk7XG4gICAgICAgIG5vZGVbJ2F0UnVsZSddID0gKHMuaW5kZXhPZihBVF9TVEFSVCkgPT09IDApO1xuICAgICAgICAvLyBub3RlLCBzdXBwb3J0IGEgc3Vic2V0IG9mIHJ1bGUgdHlwZXMuLi5cbiAgICAgICAgaWYgKG5vZGVbJ2F0UnVsZSddKSB7XG4gICAgICAgICAgICBpZiAocy5pbmRleE9mKE1FRElBX1NUQVJUKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGVbJ3R5cGUnXSA9IHR5cGVzLk1FRElBX1JVTEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzLm1hdGNoKFJYLmtleWZyYW1lc1J1bGUpKSB7XG4gICAgICAgICAgICAgICAgbm9kZVsndHlwZSddID0gdHlwZXMuS0VZRlJBTUVTX1JVTEU7XG4gICAgICAgICAgICAgICAgbm9kZVsna2V5ZnJhbWVzTmFtZSddID0gbm9kZVsnc2VsZWN0b3InXS5zcGxpdChSWC5tdWx0aXBsZVNwYWNlcykucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocy5pbmRleE9mKFZBUl9TVEFSVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBub2RlWyd0eXBlJ10gPSB0eXBlcy5NSVhJTl9SVUxFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZVsndHlwZSddID0gdHlwZXMuU1RZTEVfUlVMRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgciQgPSBub2RlWydydWxlcyddO1xuICAgIGlmIChyJCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHIkLmxlbmd0aCwgciA9IHZvaWQgMDsgKGkgPCBsKSAmJiAociA9IHIkW2ldKTsgaSsrKSB7XG4gICAgICAgICAgICBwYXJzZUNzcyhyLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbn1cbi8qKlxuICogY29udmVyc2lvbiBvZiBzb3J0IHVuaWNvZGUgZXNjYXBlcyB3aXRoIHNwYWNlcyBsaWtlIGBcXDMzIGAgKGFuZCBsb25nZXIpIGludG9cbiAqIGV4cGFuZGVkIGZvcm0gdGhhdCBkb2Vzbid0IHJlcXVpcmUgdHJhaWxpbmcgc3BhY2UgYFxcMDAwMDMzYFxuICogQHBhcmFtIHtzdHJpbmd9IHNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gX2V4cGFuZFVuaWNvZGVFc2NhcGVzKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb2RlID0gYXJndW1lbnRzWzFdLCByZXBlYXQgPSA2IC0gY29kZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChyZXBlYXQtLSkge1xuICAgICAgICAgICAgY29kZSA9ICcwJyArIGNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdcXFxcJyArIGNvZGU7XG4gICAgfSk7XG59XG4vKiogQGVudW0ge251bWJlcn0gKi9cbnZhciB0eXBlcyA9IHtcbiAgICBTVFlMRV9SVUxFOiAxLFxuICAgIEtFWUZSQU1FU19SVUxFOiA3LFxuICAgIE1FRElBX1JVTEU6IDQsXG4gICAgTUlYSU5fUlVMRTogMTAwMFxufTtcbnZhciBPUEVOX0JSQUNFID0gJ3snO1xudmFyIENMT1NFX0JSQUNFID0gJ30nO1xuLy8gaGVscGVyIHJlZ2V4cCdzXG52YXIgUlggPSB7XG4gICAgY29tbWVudHM6IC9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9naW0sXG4gICAgcG9ydDogL0BpbXBvcnRbXjtdKjsvZ2ltLFxuICAgIGN1c3RvbVByb3A6IC8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/KD86WztcXG5dfCQpL2dpbSxcbiAgICBtaXhpblByb3A6IC8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/e1tefV0qP30oPzpbO1xcbl18JCk/L2dpbSxcbiAgICBtaXhpbkFwcGx5OiAvQGFwcGx5XFxzKlxcKD9bXik7XSpcXCk/XFxzKig/Ols7XFxuXXwkKT8vZ2ltLFxuICAgIHZhckFwcGx5OiAvW147Ol0qPzpbXjtdKj92YXJcXChbXjtdKlxcKSg/Ols7XFxuXXwkKT8vZ2ltLFxuICAgIGtleWZyYW1lc1J1bGU6IC9eQFteXFxzXSprZXlmcmFtZXMvLFxuICAgIG11bHRpcGxlU3BhY2VzOiAvXFxzKy9nXG59O1xudmFyIFZBUl9TVEFSVCA9ICctLSc7XG52YXIgTUVESUFfU1RBUlQgPSAnQG1lZGlhJztcbnZhciBBVF9TVEFSVCA9ICdAJztcbmZ1bmN0aW9uIGZpbmRSZWdleChyZWdleCwgY3NzVGV4dCwgb2Zmc2V0KSB7XG4gICAgcmVnZXhbJ2xhc3RJbmRleCddID0gMDtcbiAgICB2YXIgciA9IGNzc1RleHQuc3Vic3RyaW5nKG9mZnNldCkubWF0Y2gocmVnZXgpO1xuICAgIGlmIChyKSB7XG4gICAgICAgIHZhciBzdGFydCA9IG9mZnNldCArIHJbJ2luZGV4J107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHN0YXJ0ICsgclswXS5sZW5ndGhcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG52YXIgVkFSX1VTQUdFX1NUQVJUID0gL1xcYnZhclxcKC87XG52YXIgVkFSX0FTU0lHTl9TVEFSVCA9IC9cXEItLVtcXHctXStcXHMqOi87XG52YXIgQ09NTUVOVFMgPSAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltO1xudmFyIFRSQUlMSU5HX0xJTkVTID0gL15bXFx0IF0rXFxuL2dtO1xuZnVuY3Rpb24gcmVzb2x2ZVZhcihwcm9wcywgcHJvcCwgZmFsbGJhY2spIHtcbiAgICBpZiAocHJvcHNbcHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIHByb3BzW3Byb3BdO1xuICAgIH1cbiAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVUZW1wbGF0ZShmYWxsYmFjaywgcHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5mdW5jdGlvbiBmaW5kVmFyRW5kSW5kZXgoY3NzVGV4dCwgb2Zmc2V0KSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgaSA9IG9mZnNldDtcbiAgICBmb3IgKDsgaSA8IGNzc1RleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSBjc3NUZXh0W2ldO1xuICAgICAgICBpZiAoYyA9PT0gJygnKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09ICcpJykge1xuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuZnVuY3Rpb24gcGFyc2VWYXIoY3NzVGV4dCwgb2Zmc2V0KSB7XG4gICAgdmFyIHZhclBvcyA9IGZpbmRSZWdleChWQVJfVVNBR0VfU1RBUlQsIGNzc1RleHQsIG9mZnNldCk7XG4gICAgaWYgKCF2YXJQb3MpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBlbmRWYXIgPSBmaW5kVmFyRW5kSW5kZXgoY3NzVGV4dCwgdmFyUG9zLnN0YXJ0KTtcbiAgICB2YXIgdmFyQ29udGVudCA9IGNzc1RleHQuc3Vic3RyaW5nKHZhclBvcy5lbmQsIGVuZFZhciAtIDEpO1xuICAgIHZhciBfYSA9IHZhckNvbnRlbnQuc3BsaXQoJywnKSwgcHJvcE5hbWUgPSBfYVswXSwgZmFsbGJhY2sgPSBfYS5zbGljZSgxKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogdmFyUG9zLnN0YXJ0LFxuICAgICAgICBlbmQ6IGVuZFZhcixcbiAgICAgICAgcHJvcE5hbWU6IHByb3BOYW1lLnRyaW0oKSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbGxiYWNrLmxlbmd0aCA+IDAgPyBmYWxsYmFjay5qb2luKCcsJykudHJpbSgpIDogdW5kZWZpbmVkXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVWYXIoY3NzVGV4dCwgdGVtcGxhdGUsIG9mZnNldCkge1xuICAgIHZhciB2YXJNZXRhID0gcGFyc2VWYXIoY3NzVGV4dCwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhck1ldGEpIHtcbiAgICAgICAgdGVtcGxhdGUucHVzaChjc3NUZXh0LnN1YnN0cmluZyhvZmZzZXQsIGNzc1RleHQubGVuZ3RoKSk7XG4gICAgICAgIHJldHVybiBjc3NUZXh0Lmxlbmd0aDtcbiAgICB9XG4gICAgdmFyIHByb3BOYW1lID0gdmFyTWV0YS5wcm9wTmFtZTtcbiAgICB2YXIgZmFsbGJhY2sgPSB2YXJNZXRhLmZhbGxiYWNrICE9IG51bGwgPyBjb21waWxlVGVtcGxhdGUodmFyTWV0YS5mYWxsYmFjaykgOiB1bmRlZmluZWQ7XG4gICAgdGVtcGxhdGUucHVzaChjc3NUZXh0LnN1YnN0cmluZyhvZmZzZXQsIHZhck1ldGEuc3RhcnQpLCBmdW5jdGlvbiAocGFyYW1zKSB7IHJldHVybiByZXNvbHZlVmFyKHBhcmFtcywgcHJvcE5hbWUsIGZhbGxiYWNrKTsgfSk7XG4gICAgcmV0dXJuIHZhck1ldGEuZW5kO1xufVxuZnVuY3Rpb24gZXhlY3V0ZVRlbXBsYXRlKHRlbXBsYXRlLCBwcm9wcykge1xuICAgIHZhciBmaW5hbCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcGxhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHMgPSB0ZW1wbGF0ZVtpXTtcbiAgICAgICAgZmluYWwgKz0gKHR5cGVvZiBzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgID8gc1xuICAgICAgICAgICAgOiBzKHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsO1xufVxuZnVuY3Rpb24gZmluZEVuZFZhbHVlKGNzc1RleHQsIG9mZnNldCkge1xuICAgIHZhciBvblN0ciA9IGZhbHNlO1xuICAgIHZhciBkb3VibGUgPSBmYWxzZTtcbiAgICB2YXIgaSA9IG9mZnNldDtcbiAgICBmb3IgKDsgaSA8IGNzc1RleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGMgPSBjc3NUZXh0W2ldO1xuICAgICAgICBpZiAob25TdHIpIHtcbiAgICAgICAgICAgIGlmIChkb3VibGUgJiYgYyA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIG9uU3RyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWRvdWJsZSAmJiBjID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIG9uU3RyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgIG9uU3RyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkb3VibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICBvblN0ciA9IHRydWU7XG4gICAgICAgICAgICAgICAgZG91YmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjID09PSAnOycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUN1c3RvbUFzc2lnbnMoY3NzVGV4dCkge1xuICAgIHZhciBmaW5hbCA9ICcnO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBhc3NpZ25Qb3MgPSBmaW5kUmVnZXgoVkFSX0FTU0lHTl9TVEFSVCwgY3NzVGV4dCwgb2Zmc2V0KTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gYXNzaWduUG9zID8gYXNzaWduUG9zLnN0YXJ0IDogY3NzVGV4dC5sZW5ndGg7XG4gICAgICAgIGZpbmFsICs9IGNzc1RleHQuc3Vic3RyaW5nKG9mZnNldCwgc3RhcnQpO1xuICAgICAgICBpZiAoYXNzaWduUG9zKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBmaW5kRW5kVmFsdWUoY3NzVGV4dCwgc3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsO1xufVxuZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlKGNzc1RleHQpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoQ09NTUVOVFMsICcnKTtcbiAgICBjc3NUZXh0ID0gcmVtb3ZlQ3VzdG9tQXNzaWducyhjc3NUZXh0KVxuICAgICAgICAucmVwbGFjZShUUkFJTElOR19MSU5FUywgJycpO1xuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHdoaWxlIChpbmRleCA8IGNzc1RleHQubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gY29tcGlsZVZhcihjc3NUZXh0LCBzZWdtZW50cywgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudHM7XG59XG5mdW5jdGlvbiByZXNvbHZlVmFsdWVzKHNlbGVjdG9ycykge1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3Rvci5kZWNsYXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVjKSB7XG4gICAgICAgICAgICBwcm9wc1tkZWMucHJvcF0gPSBkZWMudmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBwcm9wc1ZhbHVlcyA9IHt9O1xuICAgIHZhciBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocHJvcHMpO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRpcnR5ID0gZmFsc2U7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBleGVjdXRlVGVtcGxhdGUodmFsdWUsIHByb3BzVmFsdWVzKTtcbiAgICAgICAgICAgIGlmIChwcm9wVmFsdWUgIT09IHByb3BzVmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBwcm9wc1ZhbHVlc1trZXldID0gcHJvcFZhbHVlO1xuICAgICAgICAgICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZGlydHkpIHtcbiAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoKTtcbiAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIilcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcHNWYWx1ZXM7XG59XG5mdW5jdGlvbiBnZXRTZWxlY3RvcnMocm9vdCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICBpZiAoIXJvb3QucnVsZXMpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgc2VsZWN0b3JzID0gW107XG4gICAgcm9vdC5ydWxlc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7IHJldHVybiBydWxlLnR5cGUgPT09IHR5cGVzLlNUWUxFX1JVTEU7IH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBnZXREZWNsYXJhdGlvbnMocnVsZS5jc3NUZXh0KTtcbiAgICAgICAgaWYgKGRlY2xhcmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBydWxlLnBhcnNlZFNlbGVjdG9yLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmljaXR5OiBjb21wdXRlU3BlY2lmaWNpdHkoKSxcbiAgICAgICAgICAgICAgICAgICAgbnU6IGluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RvcnM7XG59XG5mdW5jdGlvbiBjb21wdXRlU3BlY2lmaWNpdHkoX3NlbGVjdG9yKSB7XG4gICAgcmV0dXJuIDE7XG59XG52YXIgSU1QT1JUQU5UID0gJyFpbXBvcnRhbnQnO1xudmFyIEZJTkRfREVDTEFSQVRJT05TID0gLyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dtO1xuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25zKGNzc1RleHQpIHtcbiAgICB2YXIgZGVjbGFyYXRpb25zID0gW107XG4gICAgdmFyIHhBcnJheTtcbiAgICB3aGlsZSAoeEFycmF5ID0gRklORF9ERUNMQVJBVElPTlMuZXhlYyhjc3NUZXh0LnRyaW0oKSkpIHtcbiAgICAgICAgdmFyIF9hID0gbm9ybWFsaXplVmFsdWUoeEFycmF5WzJdKSwgdmFsdWUgPSBfYS52YWx1ZSwgaW1wb3J0YW50ID0gX2EuaW1wb3J0YW50O1xuICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBwcm9wOiB4QXJyYXlbMV0udHJpbSgpLFxuICAgICAgICAgICAgdmFsdWU6IGNvbXBpbGVUZW1wbGF0ZSh2YWx1ZSksXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciByZWdleCA9IC9cXHMrL2dpbTtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnZXgsICcgJykudHJpbSgpO1xuICAgIHZhciBpbXBvcnRhbnQgPSB2YWx1ZS5lbmRzV2l0aChJTVBPUlRBTlQpO1xuICAgIGlmIChpbXBvcnRhbnQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gSU1QT1JUQU5ULmxlbmd0aCkudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEFjdGl2ZVNlbGVjdG9ycyhob3N0RWwsIGhvc3RTY29wZU1hcCwgZ2xvYmFsU2NvcGVzKSB7XG4gICAgLy8gY29tcHV0ZXMgdGhlIGNzcyBzY29wZXMgdGhhdCBtaWdodCBhZmZlY3QgdGhpcyBwYXJ0aWN1bGFyIGVsZW1lbnRcbiAgICAvLyBhdm9pZGluZyB1c2luZyBzcHJlYWQgYXJyYXlzIHRvIGF2b2lkIHRzIGhlbHBlciBmbnMgd2hlbiBpbiBlczVcbiAgICB2YXIgc2NvcGVzID0gW107XG4gICAgdmFyIHNjb3Blc0ZvckVsZW1lbnQgPSBnZXRTY29wZXNGb3JFbGVtZW50KGhvc3RTY29wZU1hcCwgaG9zdEVsKTtcbiAgICAvLyBnbG9iYWxTY29wZXMgYXJlIGFsd2F5cyB0b29rIGludG8gYWNjb3VudFxuICAgIGdsb2JhbFNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzY29wZXMucHVzaChzKTsgfSk7XG4gICAgLy8gdGhlIHBhcmVudCBzY29wZXMgYXJlIGNvbXB1dGVkIGJ5IHdhbGtpbmcgcGFyZW50IGRvbSB1bnRpbCA8aHRtbD4gaXMgcmVhY2hlZFxuICAgIHNjb3Blc0ZvckVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gc2NvcGVzLnB1c2gocyk7IH0pO1xuICAgIC8vIGVhY2ggc2NvcGUgbWlnaHQgaGF2ZSBhbiBhcnJheSBvZiBhc3NvY2lhdGVkIHNlbGVjdG9yc1xuICAgIC8vIGxldCdzIGZsYXR0ZW4gdGhlIGNvbXBsZXRlIGFycmF5IG9mIHNlbGVjdG9ycyBmcm9tIGFsbCB0aGUgc2NvcGVzXG4gICAgdmFyIHNlbGVjdG9yU2V0ID0gZ2V0U2VsZWN0b3JzRm9yU2NvcGVzKHNjb3Blcyk7XG4gICAgLy8gd2UgZmlsdGVyIHRvIG9ubHkgdGhlIHNlbGVjdG9ycyB0aGF0IG1hdGNoZXMgdGhlIGhvc3RFbFxuICAgIHZhciBhY3RpdmVTZWxlY3RvcnMgPSBzZWxlY3RvclNldC5maWx0ZXIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7IHJldHVybiBtYXRjaGVzKGhvc3RFbCwgc2VsZWN0b3Iuc2VsZWN0b3IpOyB9KTtcbiAgICAvLyBzb3J0IHNlbGVjdG9ycyBieSBzcGVjaWZpdHlcbiAgICByZXR1cm4gc29ydFNlbGVjdG9ycyhhY3RpdmVTZWxlY3RvcnMpO1xufVxuZnVuY3Rpb24gZ2V0U2NvcGVzRm9yRWxlbWVudChob3N0VGVtcGxhdGVNYXAsIG5vZGUpIHtcbiAgICB2YXIgc2NvcGVzID0gW107XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gaG9zdFRlbXBsYXRlTWFwLmdldChub2RlKTtcbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICBzY29wZXMucHVzaChzY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3Blcztcbn1cbmZ1bmN0aW9uIGdldFNlbGVjdG9yc0ZvclNjb3BlcyhzY29wZXMpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gW107XG4gICAgc2NvcGVzLmZvckVhY2goZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgIHNlbGVjdG9ycy5wdXNoLmFwcGx5KHNlbGVjdG9ycywgc2NvcGUuc2VsZWN0b3JzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3JzO1xufVxuZnVuY3Rpb24gc29ydFNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgICBzZWxlY3RvcnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5zcGVjaWZpY2l0eSA9PT0gYi5zcGVjaWZpY2l0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGEubnUgLSBiLm51O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLnNwZWNpZmljaXR5IC0gYi5zcGVjaWZpY2l0eTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3JzO1xufVxuZnVuY3Rpb24gbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgPT09ICc6cm9vdCcgfHwgc2VsZWN0b3IgPT09ICdodG1sJyB8fCBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ1NTKG9yaWdpbmFsKSB7XG4gICAgdmFyIGFzdCA9IHBhcnNlKG9yaWdpbmFsKTtcbiAgICB2YXIgdGVtcGxhdGUgPSBjb21waWxlVGVtcGxhdGUob3JpZ2luYWwpO1xuICAgIHZhciBzZWxlY3RvcnMgPSBnZXRTZWxlY3RvcnMoYXN0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcmlnaW5hbDogb3JpZ2luYWwsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgc2VsZWN0b3JzOiBzZWxlY3RvcnMsXG4gICAgICAgIHVzZXNDc3NWYXJzOiB0ZW1wbGF0ZS5sZW5ndGggPiAxXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZEdsb2JhbFN0eWxlKGdsb2JhbFNjb3Blcywgc3R5bGVFbCkge1xuICAgIGlmIChnbG9iYWxTY29wZXMuc29tZShmdW5jdGlvbiAoY3NzKSB7IHJldHVybiBjc3Muc3R5bGVFbCA9PT0gc3R5bGVFbDsgfSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY3NzID0gcGFyc2VDU1Moc3R5bGVFbC50ZXh0Q29udGVudCk7XG4gICAgY3NzLnN0eWxlRWwgPSBzdHlsZUVsO1xuICAgIGdsb2JhbFNjb3Blcy5wdXNoKGNzcyk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB1cGRhdGVHbG9iYWxTY29wZXMoc2NvcGVzKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGdldFNlbGVjdG9yc0ZvclNjb3BlcyhzY29wZXMpO1xuICAgIHZhciBwcm9wcyA9IHJlc29sdmVWYWx1ZXMoc2VsZWN0b3JzKTtcbiAgICBzY29wZXMuZm9yRWFjaChmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgaWYgKHNjb3BlLnVzZXNDc3NWYXJzKSB7XG4gICAgICAgICAgICBzY29wZS5zdHlsZUVsLnRleHRDb250ZW50ID0gZXhlY3V0ZVRlbXBsYXRlKHNjb3BlLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlU2NvcGUoc2NvcGUsIHNjb3BlSWQpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBzY29wZS50ZW1wbGF0ZS5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc2VnbWVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICA/IHJlcGxhY2VTY29wZShzZWdtZW50LCBzY29wZS5zY29wZUlkLCBzY29wZUlkKVxuICAgICAgICAgICAgOiBzZWdtZW50O1xuICAgIH0pO1xuICAgIHZhciBzZWxlY3RvcnMgPSBzY29wZS5zZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWwpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2VsKSwgeyBzZWxlY3RvcjogcmVwbGFjZVNjb3BlKHNlbC5zZWxlY3Rvciwgc2NvcGUuc2NvcGVJZCwgc2NvcGVJZCkgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2NvcGUpLCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgc2VsZWN0b3JzOiBzZWxlY3RvcnMsXG4gICAgICAgIHNjb3BlSWQ6IHNjb3BlSWQgfSk7XG59XG5mdW5jdGlvbiByZXBsYWNlU2NvcGUob3JpZ2luYWwsIG9sZFNjb3BlSWQsIG5ld1Njb3BlSWQpIHtcbiAgICBvcmlnaW5hbCA9IHJlcGxhY2VBbGwob3JpZ2luYWwsIFwiXFxcXC5cIiArIG9sZFNjb3BlSWQsIFwiLlwiICsgbmV3U2NvcGVJZCk7XG4gICAgcmV0dXJuIG9yaWdpbmFsO1xufVxuZnVuY3Rpb24gcmVwbGFjZUFsbChpbnB1dCwgZmluZCwgcmVwbGFjZSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoZmluZCwgJ2cnKSwgcmVwbGFjZSk7XG59XG5mdW5jdGlvbiBsb2FkRG9jdW1lbnQoZG9jLCBnbG9iYWxTY29wZXMpIHtcbiAgICBsb2FkRG9jdW1lbnRTdHlsZXMoZG9jLCBnbG9iYWxTY29wZXMpO1xuICAgIHJldHVybiBsb2FkRG9jdW1lbnRMaW5rcyhkb2MsIGdsb2JhbFNjb3Blcyk7XG59XG5mdW5jdGlvbiBzdGFydFdhdGNoZXIoZG9jLCBnbG9iYWxTY29wZXMpIHtcbiAgICB2YXIgbXV0YXRpb24gPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2FkRG9jdW1lbnRTdHlsZXMoZG9jLCBnbG9iYWxTY29wZXMpKSB7XG4gICAgICAgICAgICB1cGRhdGVHbG9iYWxTY29wZXMoZ2xvYmFsU2NvcGVzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG11dGF0aW9uLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG59XG5mdW5jdGlvbiBsb2FkRG9jdW1lbnRMaW5rcyhkb2MsIGdsb2JhbFNjb3Blcykge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHZhciBsaW5rRWxtcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1baHJlZl06bm90KFtkYXRhLW5vLXNoaW1dKScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua0VsbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaChhZGRHbG9iYWxMaW5rKGRvYywgZ2xvYmFsU2NvcGVzLCBsaW5rRWxtc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufVxuZnVuY3Rpb24gbG9hZERvY3VtZW50U3R5bGVzKGRvYywgZ2xvYmFsU2NvcGVzKSB7XG4gICAgdmFyIHN0eWxlRWxtcyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlOm5vdChbZGF0YS1zdHlsZXNdKTpub3QoW2RhdGEtbm8tc2hpbV0pJykpO1xuICAgIHJldHVybiBzdHlsZUVsbXNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc3R5bGUpIHsgcmV0dXJuIGFkZEdsb2JhbFN0eWxlKGdsb2JhbFNjb3Blcywgc3R5bGUpOyB9KVxuICAgICAgICAuc29tZShCb29sZWFuKTtcbn1cbmZ1bmN0aW9uIGFkZEdsb2JhbExpbmsoZG9jLCBnbG9iYWxTY29wZXMsIGxpbmtFbG0pIHtcbiAgICB2YXIgdXJsID0gbGlua0VsbS5ocmVmO1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJzcCkgeyByZXR1cm4gcnNwLnRleHQoKTsgfSkudGhlbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBpZiAoaGFzQ3NzVmFyaWFibGVzKHRleHQpICYmIGxpbmtFbG0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKGhhc1JlbGF0aXZlVXJscyh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIHRleHQgPSBmaXhSZWxhdGl2ZVVybHModGV4dCwgdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZUVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdHlsZUVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIGFkZEdsb2JhbFN0eWxlKGdsb2JhbFNjb3Blcywgc3R5bGVFbCk7XG4gICAgICAgICAgICBsaW5rRWxtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWwsIGxpbmtFbG0pO1xuICAgICAgICAgICAgbGlua0VsbS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xufVxuLy8gVGhpcyByZWdleHAgdHJpZXMgdG8gZGV0ZXJtaW5lIHdoZW4gYSB2YXJpYWJsZSBpcyBkZWNsYXJlZCwgZm9yIGV4YW1wbGU6XG4vL1xuLy8gLm15LWVsIHsgLS1oaWdobGlnaHQtY29sb3I6IGdyZWVuOyB9XG4vL1xuLy8gYnV0IHdlIGRvbid0IHdhbnQgdG8gdHJpZ2dlciB3aGVuIGEgY2xhc3NuYW1lIHVzZXMgXCItLVwiIG9yIGEgcHNldWRvLWNsYXNzIGlzXG4vLyB1c2VkLiBXZSBhc3N1bWUgdGhhdCB0aGUgb25seSBjaGFyYWN0ZXJzIHRoYXQgY2FuIHByZWNlZWQgYSB2YXJpYWJsZVxuLy8gZGVjbGFyYXRpb24gYXJlIFwie1wiLCBmcm9tIGFuIG9wZW5pbmcgYmxvY2ssIFwiO1wiIGZyb20gYSBwcmVjZWVkaW5nIHJ1bGUsIG9yIGFcbi8vIHNwYWNlLiBUaGlzIHByZXZlbnRzIHRoZSByZWdleHAgZnJvbSBtYXRjaGluZyBhIHdvcmQgaW4gYSBzZWxlY3Rvciwgc2luY2Vcbi8vIHRoZXkgd291bGQgbmVlZCB0byBzdGFydCB3aXRoIGEgXCIuXCIgb3IgXCIjXCIuIChXZSBhc3N1bWUgZWxlbWVudCBuYW1lcyBkb24ndFxuLy8gc3RhcnQgd2l0aCBcIi0tXCIpLlxudmFyIENTU19WQVJJQUJMRV9SRUdFWFAgPSAvW1xcczt7XS0tWy1hLXpBLVowLTldK1xccyo6L207XG5mdW5jdGlvbiBoYXNDc3NWYXJpYWJsZXMoY3NzKSB7XG4gICAgcmV0dXJuIGNzcy5pbmRleE9mKCd2YXIoJykgPiAtMSB8fCBDU1NfVkFSSUFCTEVfUkVHRVhQLnRlc3QoY3NzKTtcbn1cbi8vIFRoaXMgcmVnZXhwIGZpbmQgYWxsIHVybCgpIHVzYWdlcyB3aXRoIHJlbGF0aXZlIHVybHNcbnZhciBDU1NfVVJMX1JFR0VYUCA9IC91cmxbXFxzXSpcXChbXFxzXSpbJ1wiXT8oPyEoPzpodHRwcz98ZGF0YSlcXDp8XFwvKShbXlxcJ1xcXCJcXCldKilbXFxzXSpbJ1wiXT9cXClbXFxzXSovZ2ltO1xuZnVuY3Rpb24gaGFzUmVsYXRpdmVVcmxzKGNzcykge1xuICAgIENTU19VUkxfUkVHRVhQLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIENTU19VUkxfUkVHRVhQLnRlc3QoY3NzKTtcbn1cbmZ1bmN0aW9uIGZpeFJlbGF0aXZlVXJscyhjc3MsIG9yaWdpbmFsVXJsKSB7XG4gICAgLy8gZ2V0IHRoZSBiYXNlcGF0aCBmcm9tIHRoZSBvcmlnaW5hbCBpbXBvcnQgdXJsXG4gICAgdmFyIGJhc2VQYXRoID0gb3JpZ2luYWxVcmwucmVwbGFjZSgvW14vXSokLywgJycpO1xuICAgIC8vIHJlcGxhY2UgdGhlIHJlbGF0aXZlIHVybCwgd2l0aCB0aGUgbmV3IHJlbGF0aXZlIHVybFxuICAgIHJldHVybiBjc3MucmVwbGFjZShDU1NfVVJMX1JFR0VYUCwgZnVuY3Rpb24gKGZ1bGxNYXRjaCwgdXJsKSB7XG4gICAgICAgIC8vIHJoZSBuZXcgcmVsYXRpdmUgcGF0aCBpcyB0aGUgYmFzZSBwYXRoICsgdXJpXG4gICAgICAgIC8vIFRPRE86IG5vcm1hbGl6ZSByZWxhdGl2ZSBVUkxcbiAgICAgICAgdmFyIHJlbGF0aXZlVXJsID0gYmFzZVBhdGggKyB1cmw7XG4gICAgICAgIHJldHVybiBmdWxsTWF0Y2gucmVwbGFjZSh1cmwsIHJlbGF0aXZlVXJsKTtcbiAgICB9KTtcbn1cbnZhciBDdXN0b21TdHlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDdXN0b21TdHlsZSh3aW4sIGRvYykge1xuICAgICAgICB0aGlzLndpbiA9IHdpbjtcbiAgICAgICAgdGhpcy5kb2MgPSBkb2M7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLmhvc3RTdHlsZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTY29wZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zY29wZXNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZGlkSW5pdCA9IGZhbHNlO1xuICAgIH1cbiAgICBDdXN0b21TdHlsZS5wcm90b3R5cGUuaW5pdFNoaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmRpZEluaXQpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlkSW5pdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy53aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRXYXRjaGVyKF90aGlzLmRvYywgX3RoaXMuZ2xvYmFsU2NvcGVzKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZERvY3VtZW50KF90aGlzLmRvYywgX3RoaXMuZ2xvYmFsU2NvcGVzKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLmFkZExpbmsgPSBmdW5jdGlvbiAobGlua0VsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBhZGRHbG9iYWxMaW5rKHRoaXMuZG9jLCB0aGlzLmdsb2JhbFNjb3BlcywgbGlua0VsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUdsb2JhbCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS5hZGRHbG9iYWxTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZUVsKSB7XG4gICAgICAgIGlmIChhZGRHbG9iYWxTdHlsZSh0aGlzLmdsb2JhbFNjb3Blcywgc3R5bGVFbCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2xvYmFsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS5jcmVhdGVIb3N0U3R5bGUgPSBmdW5jdGlvbiAoaG9zdEVsLCBjc3NTY29wZUlkLCBjc3NUZXh0LCBpc1Njb3BlZCkge1xuICAgICAgICBpZiAodGhpcy5ob3N0U2NvcGVNYXAuaGFzKGhvc3RFbCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaG9zdCBzdHlsZSBhbHJlYWR5IGNyZWF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZVNjb3BlID0gdGhpcy5yZWdpc3Rlckhvc3RUZW1wbGF0ZShjc3NUZXh0LCBjc3NTY29wZUlkLCBpc1Njb3BlZCk7XG4gICAgICAgIHZhciBzdHlsZUVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGVFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3R5bGVzJywgJycpO1xuICAgICAgICBpZiAoIWJhc2VTY29wZS51c2VzQ3NzVmFycykge1xuICAgICAgICAgICAgLy8gVGhpcyBjb21wb25lbnQgZG9lcyBub3QgdXNlIChyZWFkKSBjc3MgdmFyaWFibGVzXG4gICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gY3NzVGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1Njb3BlZCkge1xuICAgICAgICAgICAgLy8gVGhpcyBjb21wb25lbnQgaXMgZHluYW1pYzogdXNlcyBjc3MgdmFyIGFuZCBpcyBzY29wZWRcbiAgICAgICAgICAgIHN0eWxlRWxbJ3Mtc2MnXSA9IGNzc1Njb3BlSWQgPSBiYXNlU2NvcGUuc2NvcGVJZCArIFwiLVwiICsgdGhpcy5jb3VudDtcbiAgICAgICAgICAgIHN0eWxlRWwudGV4dENvbnRlbnQgPSAnLypuZWVkcyB1cGRhdGUqLyc7XG4gICAgICAgICAgICB0aGlzLmhvc3RTdHlsZU1hcC5zZXQoaG9zdEVsLCBzdHlsZUVsKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwLnNldChob3N0RWwsIHJlU2NvcGUoYmFzZVNjb3BlLCBjc3NTY29wZUlkKSk7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCB1c2VzIGNzcyB2YXJzLCBidXQgaXQncyBuby1lbmNhcHN1bGF0aW9uIChnbG9iYWwgc3RhdGljKVxuICAgICAgICAgICAgYmFzZVNjb3BlLnN0eWxlRWwgPSBzdHlsZUVsO1xuICAgICAgICAgICAgaWYgKCFiYXNlU2NvcGUudXNlc0Nzc1ZhcnMpIHtcbiAgICAgICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gZXhlY3V0ZVRlbXBsYXRlKGJhc2VTY29wZS50ZW1wbGF0ZSwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxTY29wZXMucHVzaChiYXNlU2NvcGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVHbG9iYWwoKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwLnNldChob3N0RWwsIGJhc2VTY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlRWw7XG4gICAgfTtcbiAgICBDdXN0b21TdHlsZS5wcm90b3R5cGUucmVtb3ZlSG9zdCA9IGZ1bmN0aW9uIChob3N0RWwpIHtcbiAgICAgICAgdmFyIGNzcyA9IHRoaXMuaG9zdFN0eWxlTWFwLmdldChob3N0RWwpO1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBjc3MucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob3N0U3R5bGVNYXAuZGVsZXRlKGhvc3RFbCk7XG4gICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwLmRlbGV0ZShob3N0RWwpO1xuICAgIH07XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLnVwZGF0ZUhvc3QgPSBmdW5jdGlvbiAoaG9zdEVsKSB7XG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuaG9zdFNjb3BlTWFwLmdldChob3N0RWwpO1xuICAgICAgICBpZiAoc2NvcGUgJiYgc2NvcGUudXNlc0Nzc1ZhcnMgJiYgc2NvcGUuaXNTY29wZWQpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZUVsID0gdGhpcy5ob3N0U3R5bGVNYXAuZ2V0KGhvc3RFbCk7XG4gICAgICAgICAgICBpZiAoc3R5bGVFbCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvcnMgPSBnZXRBY3RpdmVTZWxlY3RvcnMoaG9zdEVsLCB0aGlzLmhvc3RTY29wZU1hcCwgdGhpcy5nbG9iYWxTY29wZXMpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHJlc29sdmVWYWx1ZXMoc2VsZWN0b3JzKTtcbiAgICAgICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gZXhlY3V0ZVRlbXBsYXRlKHNjb3BlLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS51cGRhdGVHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZUdsb2JhbFNjb3Blcyh0aGlzLmdsb2JhbFNjb3Blcyk7XG4gICAgfTtcbiAgICBDdXN0b21TdHlsZS5wcm90b3R5cGUucmVnaXN0ZXJIb3N0VGVtcGxhdGUgPSBmdW5jdGlvbiAoY3NzVGV4dCwgc2NvcGVJZCwgaXNTY29wZWQpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcy5zY29wZXNNYXAuZ2V0KHNjb3BlSWQpO1xuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBzY29wZSA9IHBhcnNlQ1NTKGNzc1RleHQpO1xuICAgICAgICAgICAgc2NvcGUuc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgICAgICAgICBzY29wZS5pc1Njb3BlZCA9IGlzU2NvcGVkO1xuICAgICAgICAgICAgdGhpcy5zY29wZXNNYXAuc2V0KHNjb3BlSWQsIHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgfTtcbiAgICByZXR1cm4gQ3VzdG9tU3R5bGU7XG59KCkpO1xudmFyIHdpbiA9IHdpbmRvdztcbmZ1bmN0aW9uIG5lZWRzU2hpbSgpIHtcbiAgICByZXR1cm4gISh3aW4uQ1NTICYmIHdpbi5DU1Muc3VwcG9ydHMgJiYgd2luLkNTUy5zdXBwb3J0cygnY29sb3InLCAndmFyKC0tYyknKSk7XG59XG5pZiAoIXdpbi5fX3N0ZW5jaWxfY3Nzc2hpbSAmJiBuZWVkc1NoaW0oKSkge1xuICAgIHdpbi5fX3N0ZW5jaWxfY3Nzc2hpbSA9IG5ldyBDdXN0b21TdHlsZSh3aW4sIGRvY3VtZW50KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=