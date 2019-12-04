(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!***************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "../node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_datetime, ion_picker, ion_picker_column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_datetime", function() { return Datetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_column", function() { return PickerColumnCmp; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "../node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "../node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "../node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "../node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "../node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "../node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "../node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js");








/**
 * Gets a date value given a format
 * Defaults to the current date if
 * no date given
 */
const getDateValue = (date, format) => {
    const getValue = getValueFromFormat(date, format);
    if (getValue !== undefined) {
        return getValue;
    }
    const defaultDate = parseDate(new Date().toISOString());
    return getValueFromFormat(defaultDate, format);
};
const renderDatetime = (template, value, locale) => {
    if (value === undefined) {
        return undefined;
    }
    const tokens = [];
    let hasText = false;
    FORMAT_KEYS.forEach((format, index) => {
        if (template.indexOf(format.f) > -1) {
            const token = '{' + index + '}';
            const text = renderTextFormat(format.f, value[format.k], value, locale);
            if (!hasText && text !== undefined && value[format.k] != null) {
                hasText = true;
            }
            tokens.push(token, text || '');
            template = template.replace(format.f, token);
        }
    });
    if (!hasText) {
        return undefined;
    }
    for (let i = 0; i < tokens.length; i += 2) {
        template = template.replace(tokens[i], tokens[i + 1]);
    }
    return template;
};
const renderTextFormat = (format, value, date, locale) => {
    if ((format === FORMAT_DDDD || format === FORMAT_DDD)) {
        try {
            value = (new Date(date.year, date.month - 1, date.day)).getDay();
            if (format === FORMAT_DDDD) {
                return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
            }
            return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
        }
        catch (e) {
            // ignore
        }
        return undefined;
    }
    if (format === FORMAT_A) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'AM' : 'PM')
            : value ? value.toUpperCase() : '';
    }
    if (format === FORMAT_a) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'am' : 'pm')
            : value || '';
    }
    if (value == null) {
        return '';
    }
    if (format === FORMAT_YY || format === FORMAT_MM ||
        format === FORMAT_DD || format === FORMAT_HH ||
        format === FORMAT_mm || format === FORMAT_ss) {
        return twoDigit(value);
    }
    if (format === FORMAT_YYYY) {
        return fourDigit(value);
    }
    if (format === FORMAT_MMMM) {
        return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
    }
    if (format === FORMAT_MMM) {
        return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        if (value === 0) {
            return '12';
        }
        if (value > 12) {
            value -= 12;
        }
        if (format === FORMAT_hh && value < 10) {
            return ('0' + value);
        }
    }
    return value.toString();
};
const dateValueRange = (format, min, max) => {
    const opts = [];
    if (format === FORMAT_YYYY || format === FORMAT_YY) {
        // year
        if (max.year === undefined || min.year === undefined) {
            throw new Error('min and max year is undefined');
        }
        for (let i = max.year; i >= min.year; i--) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_MMMM || format === FORMAT_MMM ||
        format === FORMAT_MM || format === FORMAT_M ||
        format === FORMAT_hh || format === FORMAT_h) {
        // month or 12-hour
        for (let i = 1; i < 13; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_DDDD || format === FORMAT_DDD ||
        format === FORMAT_DD || format === FORMAT_D) {
        // day
        for (let i = 1; i < 32; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_HH || format === FORMAT_H) {
        // 24-hour
        for (let i = 0; i < 24; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_mm || format === FORMAT_m) {
        // minutes
        for (let i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_ss || format === FORMAT_s) {
        // seconds
        for (let i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_A || format === FORMAT_a) {
        // AM/PM
        opts.push('am', 'pm');
    }
    return opts;
};
const dateSortValue = (year, month, day, hour = 0, minute = 0) => {
    return parseInt(`1${fourDigit(year)}${twoDigit(month)}${twoDigit(day)}${twoDigit(hour)}${twoDigit(minute)}`, 10);
};
const dateDataSortValue = (data) => {
    return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
};
const daysInMonth = (month, year) => {
    return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
};
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
const ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
const TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
const parseDate = (val) => {
    // manually parse IS0 cuz Date.parse cannot be trusted
    // ISO 8601 format: 1994-12-15T13:47:20Z
    let parse = null;
    if (val != null && val !== '') {
        // try parsing for just time first, HH:MM
        parse = TIME_REGEXP.exec(val);
        if (parse) {
            // adjust the array so it fits nicely with the datetime parse
            parse.unshift(undefined, undefined);
            parse[2] = parse[3] = undefined;
        }
        else {
            // try parsing for full ISO datetime
            parse = ISO_8601_REGEXP.exec(val);
        }
    }
    if (parse === null) {
        // wasn't able to parse the ISO datetime
        return undefined;
    }
    // ensure all the parse values exist with at least 0
    for (let i = 1; i < 8; i++) {
        parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
    }
    let tzOffset = 0;
    if (parse[9] && parse[10]) {
        // hours
        tzOffset = parseInt(parse[10], 10) * 60;
        if (parse[11]) {
            // minutes
            tzOffset += parseInt(parse[11], 10);
        }
        if (parse[9] === '-') {
            // + or -
            tzOffset *= -1;
        }
    }
    return {
        year: parse[1],
        month: parse[2],
        day: parse[3],
        hour: parse[4],
        minute: parse[5],
        second: parse[6],
        millisecond: parse[7],
        tzOffset,
    };
};
/**
 * Converts a valid UTC datetime string
 * To the user's local timezone
 * Note: This is not meant for time strings
 * such as "01:47"
 */
const getLocalDateTime = (dateString = '') => {
    /**
     * If user passed in undefined
     * or null, convert it to the
     * empty string since the rest
     * of this functions expects
     * a string
     */
    if (dateString === undefined || dateString === null) {
        dateString = '';
    }
    /**
     * Ensures that YYYY-MM-DD, YYYY-MM,
     * YYYY-DD, etc does not get affected
     * by timezones and stays on the day/month
     * that the user provided
     */
    if (dateString.length === 10 ||
        dateString.length === 7) {
        dateString += ' ';
    }
    const date = (typeof dateString === 'string' && dateString.length > 0) ? new Date(dateString) : new Date();
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
};
const updateDate = (existingData, newData) => {
    if (!newData || typeof newData === 'string') {
        const localDateTime = getLocalDateTime(newData);
        if (!Number.isNaN(localDateTime.getTime())) {
            newData = localDateTime.toISOString();
        }
    }
    if (newData && newData !== '') {
        if (typeof newData === 'string') {
            // new date is a string, and hopefully in the ISO format
            // convert it to our DatetimeData if a valid ISO
            newData = parseDate(newData);
            if (newData) {
                // successfully parsed the ISO string to our DatetimeData
                Object.assign(existingData, newData);
                return true;
            }
        }
        else if ((newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second)) {
            // newData is from of a datetime picker's selected values
            // update the existing DatetimeData data with the new values
            // do some magic for 12-hour values
            if (newData.ampm && newData.hour) {
                newData.hour.value = (newData.ampm.value === 'pm')
                    ? (newData.hour.value === 12 ? 12 : newData.hour.value + 12)
                    : (newData.hour.value === 12 ? 0 : newData.hour.value);
            }
            // merge new values from the picker's selection
            // to the existing DatetimeData values
            for (const key of Object.keys(newData)) {
                existingData[key] = newData[key].value;
            }
            return true;
        }
        else if (newData.ampm) {
            // Even though in the picker column hour values are between 1 and 12, the hour value is actually normalized
            // to [0, 23] interval. Because of this when changing between AM and PM we have to update the hour so it points
            // to the correct HH hour
            newData.hour = {
                value: newData.hour
                    ? newData.hour.value
                    : (newData.ampm.value === 'pm'
                        ? (existingData.hour < 12 ? existingData.hour + 12 : existingData.hour)
                        : (existingData.hour >= 12 ? existingData.hour - 12 : existingData.hour))
            };
            existingData['hour'] = newData['hour'].value;
            return true;
        }
        // eww, invalid data
        console.warn(`Error parsing date: "${newData}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`);
    }
    else {
        // blank data, clear everything out
        for (const k in existingData) {
            if (existingData.hasOwnProperty(k)) {
                delete existingData[k];
            }
        }
    }
    return false;
};
const parseTemplate = (template) => {
    const formats = [];
    template = template.replace(/[^\w\s]/gi, ' ');
    FORMAT_KEYS.forEach(format => {
        if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
            template = template.replace(format.f, ' ' + format.f + ' ');
        }
    });
    const words = template.split(' ').filter(w => w.length > 0);
    words.forEach((word, i) => {
        FORMAT_KEYS.forEach(format => {
            if (word === format.f) {
                if (word === FORMAT_A || word === FORMAT_a) {
                    // this format is an am/pm format, so it's an "a" or "A"
                    if ((formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0) ||
                        VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
                        // template does not already have a 12-hour format
                        // or this am/pm format doesn't have a hour, minute, or second format immediately before it
                        // so do not treat this word "a" or "A" as the am/pm format
                        return;
                    }
                }
                formats.push(word);
            }
        });
    });
    return formats;
};
const getValueFromFormat = (date, format) => {
    if (format === FORMAT_A || format === FORMAT_a) {
        return (date.hour < 12 ? 'am' : 'pm');
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        return (date.hour > 12 ? date.hour - 12 : (date.hour === 0 ? 12 : date.hour));
    }
    return date[convertFormatToKey(format)];
};
const convertFormatToKey = (format) => {
    for (const k in FORMAT_KEYS) {
        if (FORMAT_KEYS[k].f === format) {
            return FORMAT_KEYS[k].k;
        }
    }
    return undefined;
};
const convertDataToISO = (data) => {
    // https://www.w3.org/TR/NOTE-datetime
    let rtn = '';
    if (data.year !== undefined) {
        // YYYY
        rtn = fourDigit(data.year);
        if (data.month !== undefined) {
            // YYYY-MM
            rtn += '-' + twoDigit(data.month);
            if (data.day !== undefined) {
                // YYYY-MM-DD
                rtn += '-' + twoDigit(data.day);
                if (data.hour !== undefined) {
                    // YYYY-MM-DDTHH:mm:SS
                    rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:${twoDigit(data.second)}`;
                    if (data.millisecond > 0) {
                        // YYYY-MM-DDTHH:mm:SS.SSS
                        rtn += '.' + threeDigit(data.millisecond);
                    }
                    if (data.tzOffset === undefined) {
                        // YYYY-MM-DDTHH:mm:SSZ
                        rtn += 'Z';
                    }
                    else {
                        // YYYY-MM-DDTHH:mm:SS+/-HH:mm
                        rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
                    }
                }
            }
        }
    }
    else if (data.hour !== undefined) {
        // HH:mm
        rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
        if (data.second !== undefined) {
            // HH:mm:SS
            rtn += ':' + twoDigit(data.second);
            if (data.millisecond !== undefined) {
                // HH:mm:SS.SSS
                rtn += '.' + threeDigit(data.millisecond);
            }
        }
    }
    return rtn;
};
/**
 * Use to convert a string of comma separated strings or
 * an array of strings, and clean up any user input
 */
const convertToArrayOfStrings = (input, type) => {
    if (input == null) {
        return undefined;
    }
    if (typeof input === 'string') {
        // convert the string to an array of strings
        // auto remove any [] characters
        input = input.replace(/\[|\]/g, '').split(',');
    }
    let values;
    if (Array.isArray(input)) {
        // trim up each string value
        values = input.map(val => val.toString().trim());
    }
    if (values === undefined || values.length === 0) {
        console.warn(`Invalid "${type}Names". Must be an array of strings, or a comma separated string.`);
    }
    return values;
};
/**
 * Use to convert a string of comma separated numbers or
 * an array of numbers, and clean up any user input
 */
const convertToArrayOfNumbers = (input, type) => {
    if (typeof input === 'string') {
        // convert the string to an array of strings
        // auto remove any whitespace and [] characters
        input = input.replace(/\[|\]|\s/g, '').split(',');
    }
    let values;
    if (Array.isArray(input)) {
        // ensure each value is an actual number in the returned array
        values = input
            .map((num) => parseInt(num, 10))
            .filter(isFinite);
    }
    else {
        values = [input];
    }
    if (values.length === 0) {
        console.warn(`Invalid "${type}Values". Must be an array of numbers, or a comma separated string of numbers.`);
    }
    return values;
};
const twoDigit = (val) => {
    return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
};
const threeDigit = (val) => {
    return ('00' + (val !== undefined ? Math.abs(val) : '0')).slice(-3);
};
const fourDigit = (val) => {
    return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
};
const FORMAT_YYYY = 'YYYY';
const FORMAT_YY = 'YY';
const FORMAT_MMMM = 'MMMM';
const FORMAT_MMM = 'MMM';
const FORMAT_MM = 'MM';
const FORMAT_M = 'M';
const FORMAT_DDDD = 'DDDD';
const FORMAT_DDD = 'DDD';
const FORMAT_DD = 'DD';
const FORMAT_D = 'D';
const FORMAT_HH = 'HH';
const FORMAT_H = 'H';
const FORMAT_hh = 'hh';
const FORMAT_h = 'h';
const FORMAT_mm = 'mm';
const FORMAT_m = 'm';
const FORMAT_ss = 'ss';
const FORMAT_s = 's';
const FORMAT_A = 'A';
const FORMAT_a = 'a';
const FORMAT_KEYS = [
    { f: FORMAT_YYYY, k: 'year' },
    { f: FORMAT_MMMM, k: 'month' },
    { f: FORMAT_DDDD, k: 'day' },
    { f: FORMAT_MMM, k: 'month' },
    { f: FORMAT_DDD, k: 'day' },
    { f: FORMAT_YY, k: 'year' },
    { f: FORMAT_MM, k: 'month' },
    { f: FORMAT_DD, k: 'day' },
    { f: FORMAT_HH, k: 'hour' },
    { f: FORMAT_hh, k: 'hour' },
    { f: FORMAT_mm, k: 'minute' },
    { f: FORMAT_ss, k: 'second' },
    { f: FORMAT_M, k: 'month' },
    { f: FORMAT_D, k: 'day' },
    { f: FORMAT_H, k: 'hour' },
    { f: FORMAT_h, k: 'hour' },
    { f: FORMAT_m, k: 'minute' },
    { f: FORMAT_s, k: 'second' },
    { f: FORMAT_A, k: 'ampm' },
    { f: FORMAT_a, k: 'ampm' },
];
const DAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const DAY_SHORT_NAMES = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const MONTH_SHORT_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const VALID_AMPM_PREFIX = [
    FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s
];

const Datetime = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = `ion-dt-${datetimeIds++}`;
        this.locale = {};
        this.datetimeMin = {};
        this.datetimeMax = {};
        this.datetimeValue = {};
        this.isExpanded = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot interact with the datetime.
         */
        this.disabled = false;
        /**
         * If `true`, the datetime appears normal but is not interactive.
         */
        this.readonly = false;
        /**
         * The display format of the date and time as text that shows
         * within the item. When the `pickerFormat` input is not used, then the
         * `displayFormat` is used for both display the formatted text, and determining
         * the datetime picker's columns. See the `pickerFormat` input description for
         * more info. Defaults to `MMM D, YYYY`.
         */
        this.displayFormat = 'MMM D, YYYY';
        /**
         * The text to display on the picker's cancel button.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display on the picker's "Done" button.
         */
        this.doneText = 'Done';
        this.onClick = () => {
            this.setFocus();
            this.open();
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionCancel = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
    }
    disabledChanged() {
        this.emitStyle();
    }
    /**
     * Update the datetime value when the value changes
     */
    valueChanged() {
        this.updateDatetimeValue(this.value);
        this.emitStyle();
        this.ionChange.emit({
            value: this.value
        });
    }
    componentWillLoad() {
        // first see if locale names were provided in the inputs
        // then check to see if they're in the config
        // if neither were provided then it will use default English names
        this.locale = {
            // this.locale[type] = convertToArrayOfStrings((this[type] ? this[type] : this.config.get(type), type);
            monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
            monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
            dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
            dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
        };
        this.updateDatetimeValue(this.value);
        this.emitStyle();
    }
    /**
     * Opens the datetime overlay.
     */
    async open() {
        if (this.disabled || this.isExpanded) {
            return;
        }
        const pickerOptions = this.generatePickerOptions();
        const picker = await _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["p"].create(pickerOptions);
        this.isExpanded = true;
        picker.onDidDismiss().then(() => {
            this.isExpanded = false;
            this.setFocus();
        });
        picker.addEventListener('ionPickerColChange', async (event) => {
            const data = event.detail;
            const colSelectedIndex = data.selectedIndex;
            const colOptions = data.options;
            const changeData = {};
            changeData[data.name] = {
                value: colOptions[colSelectedIndex].value
            };
            this.updateDatetimeValue(changeData);
            picker.columns = this.generateColumns();
        });
        await picker.present();
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'datetime': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
        });
    }
    updateDatetimeValue(value) {
        updateDate(this.datetimeValue, value);
    }
    generatePickerOptions() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const pickerOptions = Object.assign(Object.assign({ mode }, this.pickerOptions), { columns: this.generateColumns() });
        // If the user has not passed in picker buttons,
        // add a cancel and ok button to the picker
        const buttons = pickerOptions.buttons;
        if (!buttons || buttons.length === 0) {
            pickerOptions.buttons = [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: () => {
                        this.updateDatetimeValue(this.value);
                        this.ionCancel.emit();
                    }
                },
                {
                    text: this.doneText,
                    handler: (data) => {
                        this.updateDatetimeValue(data);
                        /**
                         * Prevent convertDataToISO from doing any
                         * kind of transformation based on timezone
                         * This cancels out any change it attempts to make
                         *
                         * Important: Take the timezone offset based on
                         * the date that is currently selected, otherwise
                         * there can be 1 hr difference when dealing w/ DST
                         */
                        const date = new Date(convertDataToISO(this.datetimeValue));
                        this.datetimeValue.tzOffset = date.getTimezoneOffset() * -1;
                        this.value = convertDataToISO(this.datetimeValue);
                    }
                }
            ];
        }
        return pickerOptions;
    }
    generateColumns() {
        // if a picker format wasn't provided, then fallback
        // to use the display format
        let template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;
        if (template.length === 0) {
            return [];
        }
        // make sure we've got up to date sizing information
        this.calcMinMax();
        // does not support selecting by day name
        // automatically remove any day name formats
        template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
        if (template.indexOf('D') === -1) {
            // there is not a day in the template
            // replace the day name with a numeric one if it exists
            template = template.replace('{~}', 'D');
        }
        // make sure no day name replacer is left in the string
        template = template.replace(/{~}/g, '');
        // parse apart the given template into an array of "formats"
        const columns = parseTemplate(template).map((format) => {
            // loop through each format in the template
            // create a new picker column to build up with data
            const key = convertFormatToKey(format);
            let values;
            // check if they have exact values to use for this date part
            // otherwise use the default date part values
            const self = this;
            values = self[key + 'Values']
                ? convertToArrayOfNumbers(self[key + 'Values'], key)
                : dateValueRange(format, this.datetimeMin, this.datetimeMax);
            const colOptions = values.map(val => {
                return {
                    value: val,
                    text: renderTextFormat(format, val, undefined, this.locale),
                };
            });
            // cool, we've loaded up the columns with options
            // preselect the option for this column
            const optValue = getDateValue(this.datetimeValue, format);
            const selectedIndex = colOptions.findIndex(opt => opt.value === optValue);
            return {
                name: key,
                selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
                options: colOptions
            };
        });
        // Normalize min/max
        const min = this.datetimeMin;
        const max = this.datetimeMax;
        ['month', 'day', 'hour', 'minute']
            .filter(name => !columns.find(column => column.name === name))
            .forEach(name => {
            min[name] = 0;
            max[name] = 0;
        });
        return this.validateColumns(divyColumns(columns));
    }
    validateColumns(columns) {
        const today = new Date();
        const minCompareVal = dateDataSortValue(this.datetimeMin);
        const maxCompareVal = dateDataSortValue(this.datetimeMax);
        const yearCol = columns.find(c => c.name === 'year');
        let selectedYear = today.getFullYear();
        if (yearCol) {
            // default to the first value if the current year doesn't exist in the options
            if (!yearCol.options.find(col => col.value === today.getFullYear())) {
                selectedYear = yearCol.options[0].value;
            }
            const selectedIndex = yearCol.selectedIndex;
            if (selectedIndex !== undefined) {
                const yearOpt = yearCol.options[selectedIndex];
                if (yearOpt) {
                    // they have a selected year value
                    selectedYear = yearOpt.value;
                }
            }
        }
        const selectedMonth = this.validateColumn(columns, 'month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59]);
        const numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
        const selectedDay = this.validateColumn(columns, 'day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59]);
        const selectedHour = this.validateColumn(columns, 'hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59]);
        this.validateColumn(columns, 'minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59]);
        return columns;
    }
    calcMinMax() {
        const todaysYear = new Date().getFullYear();
        if (this.yearValues !== undefined) {
            const years = convertToArrayOfNumbers(this.yearValues, 'year');
            if (this.min === undefined) {
                this.min = Math.min(...years).toString();
            }
            if (this.max === undefined) {
                this.max = Math.max(...years).toString();
            }
        }
        else {
            if (this.min === undefined) {
                this.min = (todaysYear - 100).toString();
            }
            if (this.max === undefined) {
                this.max = todaysYear.toString();
            }
        }
        const min = this.datetimeMin = parseDate(this.min);
        const max = this.datetimeMax = parseDate(this.max);
        min.year = min.year || todaysYear;
        max.year = max.year || todaysYear;
        min.month = min.month || 1;
        max.month = max.month || 12;
        min.day = min.day || 1;
        max.day = max.day || 31;
        min.hour = min.hour || 0;
        max.hour = max.hour || 23;
        min.minute = min.minute || 0;
        max.minute = max.minute || 59;
        min.second = min.second || 0;
        max.second = max.second || 59;
        // Ensure min/max constraints
        if (min.year > max.year) {
            console.error('min.year > max.year');
            min.year = max.year - 100;
        }
        if (min.year === max.year) {
            if (min.month > max.month) {
                console.error('min.month > max.month');
                min.month = 1;
            }
            else if (min.month === max.month && min.day > max.day) {
                console.error('min.day > max.day');
                min.day = 1;
            }
        }
    }
    validateColumn(columns, name, index, min, max, lowerBounds, upperBounds) {
        const column = columns.find(c => c.name === name);
        if (!column) {
            return 0;
        }
        const lb = lowerBounds.slice();
        const ub = upperBounds.slice();
        const options = column.options;
        let indexMin = options.length - 1;
        let indexMax = 0;
        for (let i = 0; i < options.length; i++) {
            const opts = options[i];
            const value = opts.value;
            lb[index] = opts.value;
            ub[index] = opts.value;
            const disabled = opts.disabled = (value < lowerBounds[index] ||
                value > upperBounds[index] ||
                dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
                dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max);
            if (!disabled) {
                indexMin = Math.min(indexMin, i);
                indexMax = Math.max(indexMax, i);
            }
        }
        const selectedIndex = column.selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(indexMin, column.selectedIndex, indexMax);
        const opt = column.options[selectedIndex];
        if (opt) {
            return opt.value;
        }
        return 0;
    }
    get text() {
        // create the text of the formatted data
        const template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;
        if (this.value === undefined ||
            this.value === null ||
            this.value.length === 0) {
            return;
        }
        return renderDatetime(template, this.datetimeValue, this.locale);
    }
    hasValue() {
        return this.text !== undefined;
    }
    setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }
    render() {
        const { inputId, text, disabled, readonly, isExpanded, el, placeholder } = this;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const labelId = inputId + '-lbl';
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
        const addPlaceholderClass = (text === undefined && placeholder != null) ? true : false;
        // If selected text has been passed in, use that first
        // otherwise use the placeholder
        const datetimeText = text === undefined
            ? (placeholder != null ? placeholder : '')
            : text;
        if (label) {
            label.id = labelId;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, this.value, this.disabled);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "combobox", "aria-disabled": disabled ? 'true' : null, "aria-expanded": `${isExpanded}`, "aria-haspopup": "true", "aria-labelledby": labelId, class: {
                [mode]: true,
                'datetime-disabled': disabled,
                'datetime-readonly': readonly,
                'datetime-placeholder': addPlaceholderClass,
                'in-item': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["h"])('ion-item', el)
            } }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "datetime-text" }, datetimeText), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: btnEl => this.buttonEl = btnEl })));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
    }; }
    static get style() { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host-context([dir=rtl]) .datetime-text,[dir=rtl] .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"; }
};
const divyColumns = (columns) => {
    const columnsWidth = [];
    let col;
    let width;
    for (let i = 0; i < columns.length; i++) {
        col = columns[i];
        columnsWidth.push(0);
        for (const option of col.options) {
            width = option.text.length;
            if (width > columnsWidth[i]) {
                columnsWidth[i] = width;
            }
        }
    }
    if (columnsWidth.length === 2) {
        width = Math.max(columnsWidth[0], columnsWidth[1]);
        columns[0].align = 'right';
        columns[1].align = 'left';
        columns[0].optionsWidth = columns[1].optionsWidth = `${width * 17}px`;
    }
    else if (columnsWidth.length === 3) {
        width = Math.max(columnsWidth[0], columnsWidth[2]);
        columns[0].align = 'right';
        columns[1].columnWidth = `${columnsWidth[1] * 17}px`;
        columns[0].optionsWidth = columns[2].optionsWidth = `${width * 17}px`;
        columns[2].align = 'left';
    }
    return columns;
};
const DEFAULT_FORMAT = 'MMM D, YYYY';
let datetimeIds = 0;

/**
 * iOS Picker Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.26);
    wrapperAnimation
        .addElement(baseEl.querySelector('.picker-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Picker Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    const wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.26, 0.01);
    wrapperAnimation
        .addElement(baseEl.querySelector('.picker-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Picker = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Array of buttons to be displayed at the top of the picker.
         */
        this.buttons = [];
        /**
         * Array of columns to be displayed in the picker.
         */
        this.columns = [];
        /**
         * Number of milliseconds to wait before dismissing the picker.
         */
        this.duration = 0;
        /**
         * If `true`, a backdrop will be displayed behind the picker.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the picker will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the picker will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            const cancelBtn = this.buttons.find(b => b.role === 'cancel');
            if (cancelBtn) {
                this.buttonClick(cancelBtn);
            }
            else {
                this.dismiss();
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerDidPresent", 7);
        this.willPresent = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerWillPresent", 7);
        this.willDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerWillDismiss", 7);
        this.didDismiss = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerDidDismiss", 7);
    }
    /**
     * Present the picker overlay after it has been created.
     */
    async present() {
        await Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
        }
    }
    /**
     * Dismiss the picker overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the picker did dismiss.
     */
    onDidDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionPickerDidDismiss');
    }
    /**
     * Returns a promise that resolves when the picker will dismiss.
     */
    onWillDismiss() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionPickerWillDismiss');
    }
    /**
     * Get the column that matches the specified name.
     *
     * @param name The name of the column.
     */
    getColumn(name) {
        return Promise.resolve(this.columns.find(column => column.name === name));
    }
    buttonClick(button) {
        // if (this.disabled) {
        //   return;
        // }
        // keep the time of the most recent button click
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        const shouldDismiss = Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler, this.getSelected()) !== false;
        if (shouldDismiss) {
            return this.dismiss();
        }
        return Promise.resolve(false);
    }
    getSelected() {
        const selected = {};
        this.columns.forEach((col, index) => {
            const selectedColumn = col.selectedIndex !== undefined
                ? col.options[col.selectedIndex]
                : undefined;
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : undefined,
                value: selectedColumn ? selectedColumn.value : undefined,
                columnIndex: index
            };
        });
        return selected;
    }
    render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "aria-modal": "true", class: Object.assign({ [mode]: true,
                // Used internally for styling
                [`picker-${mode}`]: true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), style: {
                zIndex: `${20000 + this.overlayIndex}`
            }, onIonBackdropTap: this.onBackdropTap }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-wrapper", role: "dialog" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-toolbar" }, this.buttons.map(b => (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: buttonWrapperClass(b) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: () => this.buttonClick(b), class: buttonClass(b) }, b.text))))), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-columns" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-above-highlight" }), this.presented && this.columns.map(c => Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-picker-column", { col: c })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-below-highlight" })))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get style() { return ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h, [dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active, .picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md, .picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color,#fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}"; }
};
const buttonWrapperClass = (button) => {
    return {
        [`picker-toolbar-${button.role}`]: button.role !== undefined,
        'picker-toolbar-button': true
    };
};
const buttonClass = (button) => {
    return Object.assign({ 'picker-button': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
};

const PickerColumnCmp = class {
    constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.optHeight = 0;
        this.rotateFactor = 0;
        this.scaleFactor = 1;
        this.velocity = 0;
        this.y = 0;
        this.noAnimate = true;
        this.ionPickerColChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPickerColChange", 7);
    }
    colChanged() {
        this.refresh();
    }
    async connectedCallback() {
        let pickerRotateFactor = 0;
        let pickerScaleFactor = 0.81;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        if (mode === 'ios') {
            pickerRotateFactor = -0.46;
            pickerScaleFactor = 1;
        }
        this.rotateFactor = pickerRotateFactor;
        this.scaleFactor = pickerScaleFactor;
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "../node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: this.el,
            gestureName: 'picker-swipe',
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.gesture.setDisabled(false);
        this.tmrId = setTimeout(() => {
            this.noAnimate = false;
            this.refresh(true);
        }, 250);
    }
    componentDidLoad() {
        const colEl = this.optsEl;
        if (colEl) {
            // DOM READ
            // We perfom a DOM read over a rendered item, this needs to happen after the first render
            this.optHeight = (colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0);
        }
        this.refresh();
    }
    disconnectedCallback() {
        cancelAnimationFrame(this.rafId);
        clearTimeout(this.tmrId);
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    emitColChange() {
        this.ionPickerColChange.emit(this.col);
    }
    setSelected(selectedIndex, duration) {
        // if there is a selected index, then figure out it's y position
        // if there isn't a selected index, then just use the top y position
        const y = (selectedIndex > -1) ? -(selectedIndex * this.optHeight) : 0;
        this.velocity = 0;
        // set what y position we're at
        cancelAnimationFrame(this.rafId);
        this.update(y, duration, true);
        this.emitColChange();
    }
    update(y, duration, saveY) {
        if (!this.optsEl) {
            return;
        }
        // ensure we've got a good round number :)
        let translateY = 0;
        let translateZ = 0;
        const { col, rotateFactor } = this;
        const selectedIndex = col.selectedIndex = this.indexForY(-y);
        const durationStr = (duration === 0) ? '' : duration + 'ms';
        const scaleStr = `scale(${this.scaleFactor})`;
        const children = this.optsEl.children;
        for (let i = 0; i < children.length; i++) {
            const button = children[i];
            const opt = col.options[i];
            const optOffset = (i * this.optHeight) + y;
            let transform = '';
            if (rotateFactor !== 0) {
                const rotateX = optOffset * rotateFactor;
                if (Math.abs(rotateX) <= 90) {
                    translateY = 0;
                    translateZ = 90;
                    transform = `rotateX(${rotateX}deg) `;
                }
                else {
                    translateY = -9999;
                }
            }
            else {
                translateZ = 0;
                translateY = optOffset;
            }
            const selected = selectedIndex === i;
            transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
            if (this.scaleFactor !== 1 && !selected) {
                transform += scaleStr;
            }
            // Update transition duration
            if (this.noAnimate) {
                opt.duration = 0;
                button.style.transitionDuration = '';
            }
            else if (duration !== opt.duration) {
                opt.duration = duration;
                button.style.transitionDuration = durationStr;
            }
            // Update transform
            if (transform !== opt.transform) {
                opt.transform = transform;
                button.style.transform = transform;
            }
            // Update selected item
            if (selected !== opt.selected) {
                opt.selected = selected;
                if (selected) {
                    button.classList.add(PICKER_OPT_SELECTED);
                }
                else {
                    button.classList.remove(PICKER_OPT_SELECTED);
                }
            }
        }
        this.col.prevSelected = selectedIndex;
        if (saveY) {
            this.y = y;
        }
        if (this.lastIndex !== selectedIndex) {
            // have not set a last index yet
            Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_6__["b"])();
            this.lastIndex = selectedIndex;
        }
    }
    decelerate() {
        if (this.velocity !== 0) {
            // still decelerating
            this.velocity *= DECELERATION_FRICTION;
            // do not let it go slower than a velocity of 1
            this.velocity = (this.velocity > 0)
                ? Math.max(this.velocity, 1)
                : Math.min(this.velocity, -1);
            let y = this.y + this.velocity;
            if (y > this.minY) {
                // whoops, it's trying to scroll up farther than the options we have!
                y = this.minY;
                this.velocity = 0;
            }
            else if (y < this.maxY) {
                // gahh, it's trying to scroll down farther than we can!
                y = this.maxY;
                this.velocity = 0;
            }
            this.update(y, 0, true);
            const notLockedIn = (Math.round(y) % this.optHeight !== 0) || (Math.abs(this.velocity) > 1);
            if (notLockedIn) {
                // isn't locked in yet, keep decelerating until it is
                this.rafId = requestAnimationFrame(() => this.decelerate());
            }
            else {
                this.velocity = 0;
                this.emitColChange();
            }
        }
        else if (this.y % this.optHeight !== 0) {
            // needs to still get locked into a position so options line up
            const currentPos = Math.abs(this.y % this.optHeight);
            // create a velocity in the direction it needs to scroll
            this.velocity = (currentPos > (this.optHeight / 2) ? 1 : -1);
            this.decelerate();
        }
    }
    indexForY(y) {
        return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
    }
    // TODO should this check disabled?
    onStart(detail) {
        // We have to prevent default in order to block scrolling under the picker
        // but we DO NOT have to stop propagation, since we still want
        // some "click" events to capture
        detail.event.preventDefault();
        detail.event.stopPropagation();
        // reset everything
        cancelAnimationFrame(this.rafId);
        const options = this.col.options;
        let minY = (options.length - 1);
        let maxY = 0;
        for (let i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                minY = Math.min(minY, i);
                maxY = Math.max(maxY, i);
            }
        }
        this.minY = -(minY * this.optHeight);
        this.maxY = -(maxY * this.optHeight);
    }
    onMove(detail) {
        detail.event.preventDefault();
        detail.event.stopPropagation();
        // update the scroll position relative to pointer start position
        let y = this.y + detail.deltaY;
        if (y > this.minY) {
            // scrolling up higher than scroll area
            y = Math.pow(y, 0.8);
            this.bounceFrom = y;
        }
        else if (y < this.maxY) {
            // scrolling down below scroll area
            y += Math.pow(this.maxY - y, 0.9);
            this.bounceFrom = y;
        }
        else {
            this.bounceFrom = 0;
        }
        this.update(y, 0, false);
    }
    onEnd(detail) {
        if (this.bounceFrom > 0) {
            // bounce back up
            this.update(this.minY, 100, true);
            this.emitColChange();
            return;
        }
        else if (this.bounceFrom < 0) {
            // bounce back down
            this.update(this.maxY, 100, true);
            this.emitColChange();
            return;
        }
        this.velocity = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
        if (this.velocity === 0 && detail.deltaY === 0) {
            const opt = detail.event.target.closest('.picker-opt');
            if (opt && opt.hasAttribute('opt-index')) {
                this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
            }
        }
        else {
            this.y += detail.deltaY;
            this.decelerate();
        }
    }
    refresh(forceRefresh) {
        let min = this.col.options.length - 1;
        let max = 0;
        const options = this.col.options;
        for (let i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                min = Math.min(min, i);
                max = Math.max(max, i);
            }
        }
        /**
         * Only update selected value if column has a
         * velocity of 0. If it does not, then the
         * column is animating might land on
         * a value different than the value at
         * selectedIndex
         */
        if (this.velocity !== 0) {
            return;
        }
        const selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(min, this.col.selectedIndex || 0, max);
        if (this.col.prevSelected !== selectedIndex || forceRefresh) {
            const y = (selectedIndex * this.optHeight) * -1;
            this.velocity = 0;
            this.update(y, TRANSITION_DURATION, true);
        }
    }
    render() {
        const col = this.col;
        const Button = 'button';
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
                [mode]: true,
                'picker-col': true,
                'picker-opts-left': this.col.align === 'left',
                'picker-opts-right': this.col.align === 'right'
            }, style: {
                'max-width': this.col.columnWidth
            } }, col.prefix && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: el => this.optsEl = el }, col.options.map((o, index) => Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Button, { type: "button", class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text))), col.suffix && (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))));
    }
    get el() { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "col": ["colChanged"]
    }; }
    static get style() { return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-opt.picker-opt-selected,.picker-prefix,.picker-suffix{color:var(--ion-color-primary,#3880ff)}"; }
};
const PICKER_OPT_SELECTED = 'picker-opt-selected';
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1kYXRldGltZV8zLW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlIOzs7Ozs7Ozs7Ozs7O0FDM0NqSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ2lFO0FBQ2hDO0FBQ2tGO0FBQ3hFO0FBQ047O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxpQkFBaUI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFO0FBQ25KLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQixHQUFHLHNCQUFzQixHQUFHLHNCQUFzQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssd0JBQXdCO0FBQzdCLEtBQUsseUJBQXlCO0FBQzlCLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUsseUJBQXlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHlCQUF5QiwyREFBVztBQUNwQyx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1REFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsMkRBQTJELE9BQU8sd0JBQXdCLGtDQUFrQztBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEVBQUUsb0JBQW9CLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLEVBQUU7QUFDNUM7QUFDQTtBQUNBLHNDQUFzQyxFQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDhEQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBaUU7QUFDaEYscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0Esc0JBQXNCLDhEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWlCO0FBQ3pCLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcseUdBQXlHLFdBQVc7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQVc7QUFDdEMsYUFBYSxFQUFFLEVBQUUsMkRBQUMsU0FBUyx5QkFBeUIsaUJBQWlCLDJEQUFDLFlBQVksMkhBQTJIO0FBQzdNO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLGVBQWUsa0NBQWtDLGlDQUFpQywrQkFBK0IscUNBQXFDLG9CQUFvQixhQUFhLGtCQUFrQixlQUFlLGlCQUFpQiwyQ0FBMkMsdUJBQXVCLG1CQUFtQixnQkFBZ0IsVUFBVSw2RkFBNkYsTUFBTSxtQkFBbUIsb0JBQW9CLDJDQUEyQywwQ0FBMEMsdUNBQXVDLHVDQUF1QyxnQkFBZ0IsZ0JBQWdCLDZCQUE2QiwrQkFBK0IsMEJBQTBCLFdBQVcsb0JBQW9CLDBCQUEwQixvQkFBb0IsT0FBTyxPQUFPLE1BQU0sY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLGtCQUFrQixXQUFXLFlBQVksU0FBUyx1QkFBdUIsZUFBZSx3QkFBd0IscUJBQXFCLGdCQUFnQixhQUFhLGlEQUFpRCxXQUFXLFlBQVksUUFBUSx5QkFBeUIsU0FBUyxlQUFlLG9CQUFvQixrQkFBa0IsbUJBQW1CLG9CQUFvQix1QkFBdUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLG9CQUFvQixjQUFjLFdBQVcsT0FBTyxtQkFBbUIsY0FBYyxpQkFBaUIsaUVBQWlFLGNBQWMsTUFBTSxnRkFBZ0YsbUJBQW1CLGdCQUFnQixzQkFBc0IscUJBQXFCLEVBQUU7QUFDeHVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFdBQVc7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pELCtEQUErRCxXQUFXO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6Qyw4QkFBOEIsZ0VBQWU7QUFDN0MsNkJBQTZCLGdFQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBZTtBQUN6Qyw4QkFBOEIsZ0VBQWU7QUFDN0MsNkJBQTZCLGdFQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsb0JBQW9CLDJEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFjO0FBQ3RCLDBCQUEwQiwyREFBVztBQUNyQywyQkFBMkIsMkRBQVc7QUFDdEMsMkJBQTJCLDJEQUFXO0FBQ3RDLDBCQUEwQiwyREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywrREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVU7QUFDL0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyw2Q0FBNkM7QUFDdEU7QUFDQSwyQkFBMkIsS0FBSyxVQUFVLEVBQUUsNERBQVc7QUFDdkQsMkJBQTJCLDBCQUEwQjtBQUNyRCxhQUFhLHdDQUF3QyxFQUFFLDJEQUFDLGtCQUFrQiw2REFBNkQsR0FBRywyREFBQyxTQUFTLDBDQUEwQyxFQUFFLDJEQUFDLFNBQVMsMEJBQTBCLHlCQUF5QiwyREFBQyxTQUFTLCtCQUErQixFQUFFLDJEQUFDLFlBQVksNEVBQTRFLGVBQWUsMkRBQUMsU0FBUywwQkFBMEIsRUFBRSwyREFBQyxTQUFTLGtDQUFrQywyQ0FBMkMsMkRBQUMsdUJBQXVCLFNBQVMsSUFBSSwyREFBQyxTQUFTLGtDQUFrQztBQUM5bEI7QUFDQSxjQUFjLFFBQVEsMkRBQVUsT0FBTztBQUN2Qyx3QkFBd0IsNkJBQTZCLGtCQUFrQixxQkFBcUIsaUJBQWlCLGFBQWEsa0JBQWtCLGtCQUFrQixrQkFBa0Isa0NBQWtDLG1DQUFtQyxPQUFPLE1BQU0sY0FBYyxrQkFBa0IsV0FBVyxZQUFZLDJDQUEyQyxlQUFlLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixhQUFhLDREQUE0RCxXQUFXLFlBQVksUUFBUSxtQ0FBbUMsYUFBYSxpQ0FBaUMsbUNBQW1DLE9BQU8sUUFBUSxTQUFTLGlCQUFpQixrQkFBa0IsZ0JBQWdCLG1CQUFtQix3Q0FBd0MsZ0NBQWdDLG9CQUFvQixhQUFhLGtCQUFrQiwwQkFBMEIsc0JBQXNCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLHFCQUFxQiw2QkFBNkIsNkJBQTZCLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLDZCQUE2QixlQUFlLGdCQUFnQixXQUFXLDZGQUE2RixpQ0FBaUMsa0JBQWtCLG1CQUFtQiwwQkFBMEIseUJBQXlCLHdCQUF3Qix3QkFBd0IsaUNBQWlDLFdBQVcsdUJBQXVCLGVBQWUsVUFBVSxnQ0FBZ0MsU0FBUyxvQkFBb0IsOEVBQThFLGFBQWEsaUNBQWlDLG9CQUFvQixhQUFhLGtCQUFrQixxQkFBcUIsdUJBQXVCLDRDQUE0QyxlQUFlLGNBQWMsZ0JBQWdCLG1GQUFtRixhQUFhLG9CQUFvQixvQkFBb0IsOENBQThDLDBCQUEwQiwrR0FBK0csZUFBZSx1REFBdUQsaUNBQWlDLG9CQUFvQixhQUFhLGtCQUFrQix5QkFBeUIsWUFBWSwyRUFBMkUsY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLG1CQUFtQixvQkFBb0IsY0FBYyxpQkFBaUIsWUFBWSx1QkFBdUIsdUNBQXVDLGVBQWUsZ0JBQWdCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLDZGQUE2RiwyRUFBMkUsbUJBQW1CLG9CQUFvQiw0QkFBNEIsMkJBQTJCLDBCQUEwQiwwQkFBMEIsaUNBQWlDLGFBQWEsMkJBQTJCLG1CQUFtQix5Q0FBeUMsT0FBTyxNQUFNLG1DQUFtQywyQkFBMkIsa0JBQWtCLFdBQVcsWUFBWSx1SEFBdUgsbUtBQW1LLDZIQUE2SCxXQUFXLG1OQUFtTixXQUFXLFlBQVksUUFBUSx5Q0FBeUMsT0FBTyxVQUFVLG1DQUFtQywyQkFBMkIsa0JBQWtCLFdBQVcsYUFBYSxvSEFBb0gsbUtBQW1LLDJIQUEySCxXQUFXLG1OQUFtTixXQUFXLFlBQVksUUFBUSxFQUFFO0FBQy95SjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBaUQsRUFBRSw0REFBVztBQUN4Rjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJEQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwSkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxXQUFXLEtBQUssV0FBVztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOERBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhLEVBQUUsaUJBQWlCLDJEQUFDLFNBQVMsaUNBQWlDLHlCQUF5QixFQUFFLGdCQUFnQiwyREFBQyxTQUFTLCtCQUErQiw2QkFBNkIsK0JBQStCLGdDQUFnQywyREFBQyxVQUFVLHlCQUF5QiwwREFBMEQsc0JBQXNCLDRCQUE0QiwyREFBQyxTQUFTLGlDQUFpQyx5QkFBeUIsRUFBRTtBQUNqZDtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBLE1BQU07QUFDTix3QkFBd0IscUJBQXFCLG9CQUFvQixhQUFhLGtCQUFrQixXQUFXLE9BQU8scUJBQXFCLHVCQUF1QixZQUFZLCtCQUErQix1QkFBdUIsZ0JBQWdCLGFBQWEsa0JBQWtCLFdBQVcsT0FBTyxlQUFlLFlBQVksT0FBTyxNQUFNLGNBQWMsa0JBQWtCLFdBQVcsU0FBUyxrQkFBa0IsdUJBQXVCLG1CQUFtQixlQUFlLGdCQUFnQixzQkFBc0IsMkRBQTJELFdBQVcsWUFBWSxRQUFRLGdDQUFnQyxvQkFBb0IscUJBQXFCLFVBQVUsa0JBQWtCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLGtCQUFrQix5QkFBeUIscUNBQXFDLGFBQWEsZUFBZSxlQUFlLDhCQUE4QixrQkFBa0IsV0FBVyxPQUFPLG1CQUFtQixlQUFlLGlCQUFpQixZQUFZLGlCQUFpQixrQkFBa0IsY0FBYyxpQkFBaUIsb0NBQW9DLDRCQUE0Qiw2RkFBNkYsWUFBWSxtQkFBbUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsd0JBQXdCLHdCQUF3QiwyQ0FBMkMsU0FBUyxvQ0FBb0MsNEJBQTRCLGNBQWMsZUFBZSxpQkFBaUIsb0JBQW9CLFlBQVksY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLGVBQWUsZ0JBQWdCLGNBQWMsaUJBQWlCLFlBQVksNENBQTRDLG9DQUFvQyx1QkFBdUIsY0FBYyxlQUFlLGlCQUFpQixtQ0FBbUMsMkJBQTJCLG9CQUFvQiw4REFBOEQsdUNBQXVDLEVBQUU7QUFDcC9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdHOzs7Ozs7Ozs7Ozs7O0FDaDVDaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRiIsImZpbGUiOiIxOFxcY2h1bmtzXFwxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDaGVjayB0byBzZWUgaWYgdGhlIEhhcHRpYyBQbHVnaW4gaXMgYXZhaWxhYmxlXHJcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcclxuICovXHJcbi8qKlxyXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcclxuICogKG5vdCBmb3IgZ2VzdHVyZXMpXHJcbiAqL1xyXG5jb25zdCBoYXB0aWNTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xyXG4gICAgaWYgKGVuZ2luZSkge1xyXG4gICAgICAgIGVuZ2luZS5zZWxlY3Rpb24oKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cclxuICovXHJcbmNvbnN0IGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XHJcbiAgICBpZiAoZW5naW5lKSB7XHJcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXHJcbiAqIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xyXG4gICAgfVxyXG59O1xuXG5leHBvcnQgeyBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBjLCBoYXB0aWNTZWxlY3Rpb24gYXMgaCB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBkIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWNhMDQ4OGZjLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYyBhcyBjbGFtcCwgZiBhcyBmaW5kSXRlbUxhYmVsLCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0IHsgcCBhcyBwaWNrZXJDb250cm9sbGVyLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCwgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgYiBhcyBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIH0gZnJvbSAnLi9oYXB0aWMtYzhmMTQ3M2UuanMnO1xuXG4vKipcclxuICogR2V0cyBhIGRhdGUgdmFsdWUgZ2l2ZW4gYSBmb3JtYXRcclxuICogRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgZGF0ZSBpZlxyXG4gKiBubyBkYXRlIGdpdmVuXHJcbiAqL1xyXG5jb25zdCBnZXREYXRlVmFsdWUgPSAoZGF0ZSwgZm9ybWF0KSA9PiB7XHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9IGdldFZhbHVlRnJvbUZvcm1hdChkYXRlLCBmb3JtYXQpO1xyXG4gICAgaWYgKGdldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gZ2V0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWZhdWx0RGF0ZSA9IHBhcnNlRGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpO1xyXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbUZvcm1hdChkZWZhdWx0RGF0ZSwgZm9ybWF0KTtcclxufTtcclxuY29uc3QgcmVuZGVyRGF0ZXRpbWUgPSAodGVtcGxhdGUsIHZhbHVlLCBsb2NhbGUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VucyA9IFtdO1xyXG4gICAgbGV0IGhhc1RleHQgPSBmYWxzZTtcclxuICAgIEZPUk1BVF9LRVlTLmZvckVhY2goKGZvcm1hdCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAodGVtcGxhdGUuaW5kZXhPZihmb3JtYXQuZikgPiAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9ICd7JyArIGluZGV4ICsgJ30nO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gcmVuZGVyVGV4dEZvcm1hdChmb3JtYXQuZiwgdmFsdWVbZm9ybWF0LmtdLCB2YWx1ZSwgbG9jYWxlKTtcclxuICAgICAgICAgICAgaWYgKCFoYXNUZXh0ICYmIHRleHQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZVtmb3JtYXQua10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4sIHRleHQgfHwgJycpO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZm9ybWF0LmYsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghaGFzVGV4dCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSh0b2tlbnNbaV0sIHRva2Vuc1tpICsgMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG59O1xyXG5jb25zdCByZW5kZXJUZXh0Rm9ybWF0ID0gKGZvcm1hdCwgdmFsdWUsIGRhdGUsIGxvY2FsZSkgPT4ge1xyXG4gICAgaWYgKChmb3JtYXQgPT09IEZPUk1BVF9EREREIHx8IGZvcm1hdCA9PT0gRk9STUFUX0RERCkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IChuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSkpLmdldERheSgpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfRERERCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsb2NhbGUuZGF5TmFtZXMgPyBsb2NhbGUuZGF5TmFtZXMgOiBEQVlfTkFNRVMpW3ZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKGxvY2FsZS5kYXlTaG9ydE5hbWVzID8gbG9jYWxlLmRheVNob3J0TmFtZXMgOiBEQVlfU0hPUlRfTkFNRVMpW3ZhbHVlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfQSkge1xyXG4gICAgICAgIHJldHVybiBkYXRlICE9PSB1bmRlZmluZWQgJiYgZGF0ZS5ob3VyICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAoZGF0ZS5ob3VyIDwgMTIgPyAnQU0nIDogJ1BNJylcclxuICAgICAgICAgICAgOiB2YWx1ZSA/IHZhbHVlLnRvVXBwZXJDYXNlKCkgOiAnJztcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmhvdXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IChkYXRlLmhvdXIgPCAxMiA/ICdhbScgOiAncG0nKVxyXG4gICAgICAgICAgICA6IHZhbHVlIHx8ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfWVkgfHwgZm9ybWF0ID09PSBGT1JNQVRfTU0gfHxcclxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9ERCB8fCBmb3JtYXQgPT09IEZPUk1BVF9ISCB8fFxyXG4gICAgICAgIGZvcm1hdCA9PT0gRk9STUFUX21tIHx8IGZvcm1hdCA9PT0gRk9STUFUX3NzKSB7XHJcbiAgICAgICAgcmV0dXJuIHR3b0RpZ2l0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ZWVlZKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvdXJEaWdpdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfTU1NTSkge1xyXG4gICAgICAgIHJldHVybiAobG9jYWxlLm1vbnRoTmFtZXMgPyBsb2NhbGUubW9udGhOYW1lcyA6IE1PTlRIX05BTUVTKVt2YWx1ZSAtIDFdO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX01NTSkge1xyXG4gICAgICAgIHJldHVybiAobG9jYWxlLm1vbnRoU2hvcnROYW1lcyA/IGxvY2FsZS5tb250aFNob3J0TmFtZXMgOiBNT05USF9TSE9SVF9OQU1FUylbdmFsdWUgLSAxXTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9oaCB8fCBmb3JtYXQgPT09IEZPUk1BVF9oKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMTInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPiAxMikge1xyXG4gICAgICAgICAgICB2YWx1ZSAtPSAxMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX2hoICYmIHZhbHVlIDwgMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuICgnMCcgKyB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbn07XHJcbmNvbnN0IGRhdGVWYWx1ZVJhbmdlID0gKGZvcm1hdCwgbWluLCBtYXgpID0+IHtcclxuICAgIGNvbnN0IG9wdHMgPSBbXTtcclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ZWVlZIHx8IGZvcm1hdCA9PT0gRk9STUFUX1lZKSB7XHJcbiAgICAgICAgLy8geWVhclxyXG4gICAgICAgIGlmIChtYXgueWVhciA9PT0gdW5kZWZpbmVkIHx8IG1pbi55ZWFyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW4gYW5kIG1heCB5ZWFyIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gbWF4LnllYXI7IGkgPj0gbWluLnllYXI7IGktLSkge1xyXG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfTU1NTSB8fCBmb3JtYXQgPT09IEZPUk1BVF9NTU0gfHxcclxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9NTSB8fCBmb3JtYXQgPT09IEZPUk1BVF9NIHx8XHJcbiAgICAgICAgZm9ybWF0ID09PSBGT1JNQVRfaGggfHwgZm9ybWF0ID09PSBGT1JNQVRfaCkge1xyXG4gICAgICAgIC8vIG1vbnRoIG9yIDEyLWhvdXJcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICAgICAgb3B0cy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZvcm1hdCA9PT0gRk9STUFUX0REREQgfHwgZm9ybWF0ID09PSBGT1JNQVRfREREIHx8XHJcbiAgICAgICAgZm9ybWF0ID09PSBGT1JNQVRfREQgfHwgZm9ybWF0ID09PSBGT1JNQVRfRCkge1xyXG4gICAgICAgIC8vIGRheVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzI7IGkrKykge1xyXG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfSEggfHwgZm9ybWF0ID09PSBGT1JNQVRfSCkge1xyXG4gICAgICAgIC8vIDI0LWhvdXJcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICAgICAgb3B0cy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZvcm1hdCA9PT0gRk9STUFUX21tIHx8IGZvcm1hdCA9PT0gRk9STUFUX20pIHtcclxuICAgICAgICAvLyBtaW51dGVzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9zcyB8fCBmb3JtYXQgPT09IEZPUk1BVF9zKSB7XHJcbiAgICAgICAgLy8gc2Vjb25kc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xyXG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfQSB8fCBmb3JtYXQgPT09IEZPUk1BVF9hKSB7XHJcbiAgICAgICAgLy8gQU0vUE1cclxuICAgICAgICBvcHRzLnB1c2goJ2FtJywgJ3BtJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0cztcclxufTtcclxuY29uc3QgZGF0ZVNvcnRWYWx1ZSA9ICh5ZWFyLCBtb250aCwgZGF5LCBob3VyID0gMCwgbWludXRlID0gMCkgPT4ge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KGAxJHtmb3VyRGlnaXQoeWVhcil9JHt0d29EaWdpdChtb250aCl9JHt0d29EaWdpdChkYXkpfSR7dHdvRGlnaXQoaG91cil9JHt0d29EaWdpdChtaW51dGUpfWAsIDEwKTtcclxufTtcclxuY29uc3QgZGF0ZURhdGFTb3J0VmFsdWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGVTb3J0VmFsdWUoZGF0YS55ZWFyLCBkYXRhLm1vbnRoLCBkYXRhLmRheSwgZGF0YS5ob3VyLCBkYXRhLm1pbnV0ZSk7XHJcbn07XHJcbmNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgICByZXR1cm4gKG1vbnRoID09PSA0IHx8IG1vbnRoID09PSA2IHx8IG1vbnRoID09PSA5IHx8IG1vbnRoID09PSAxMSkgPyAzMCA6IChtb250aCA9PT0gMikgPyBpc0xlYXBZZWFyKHllYXIpID8gMjkgOiAyOCA6IDMxO1xyXG59O1xyXG5jb25zdCBpc0xlYXBZZWFyID0gKHllYXIpID0+IHtcclxuICAgIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgKHllYXIgJSA0MDAgPT09IDApO1xyXG59O1xyXG5jb25zdCBJU09fODYwMV9SRUdFWFAgPSAvXihcXGR7NH18WytcXC1dXFxkezZ9KSg/Oi0oXFxkezJ9KSg/Oi0oXFxkezJ9KSk/KT8oPzpUKFxcZHsyfSk6KFxcZHsyfSkoPzo6KFxcZHsyfSkoPzpcXC4oXFxkezN9KSk/KT8oPzooWil8KFsrXFwtXSkoXFxkezJ9KSg/OjooXFxkezJ9KSk/KT8pPyQvO1xyXG5jb25zdCBUSU1FX1JFR0VYUCA9IC9eKChcXGR7Mn0pOihcXGR7Mn0pKD86OihcXGR7Mn0pKD86XFwuKFxcZHszfSkpPyk/KD86KFopfChbK1xcLV0pKFxcZHsyfSkoPzo6KFxcZHsyfSkpPyk/KT8kLztcclxuY29uc3QgcGFyc2VEYXRlID0gKHZhbCkgPT4ge1xyXG4gICAgLy8gbWFudWFsbHkgcGFyc2UgSVMwIGN1eiBEYXRlLnBhcnNlIGNhbm5vdCBiZSB0cnVzdGVkXHJcbiAgICAvLyBJU08gODYwMSBmb3JtYXQ6IDE5OTQtMTItMTVUMTM6NDc6MjBaXHJcbiAgICBsZXQgcGFyc2UgPSBudWxsO1xyXG4gICAgaWYgKHZhbCAhPSBudWxsICYmIHZhbCAhPT0gJycpIHtcclxuICAgICAgICAvLyB0cnkgcGFyc2luZyBmb3IganVzdCB0aW1lIGZpcnN0LCBISDpNTVxyXG4gICAgICAgIHBhcnNlID0gVElNRV9SRUdFWFAuZXhlYyh2YWwpO1xyXG4gICAgICAgIGlmIChwYXJzZSkge1xyXG4gICAgICAgICAgICAvLyBhZGp1c3QgdGhlIGFycmF5IHNvIGl0IGZpdHMgbmljZWx5IHdpdGggdGhlIGRhdGV0aW1lIHBhcnNlXHJcbiAgICAgICAgICAgIHBhcnNlLnVuc2hpZnQodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBwYXJzZVsyXSA9IHBhcnNlWzNdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdHJ5IHBhcnNpbmcgZm9yIGZ1bGwgSVNPIGRhdGV0aW1lXHJcbiAgICAgICAgICAgIHBhcnNlID0gSVNPXzg2MDFfUkVHRVhQLmV4ZWModmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFyc2UgPT09IG51bGwpIHtcclxuICAgICAgICAvLyB3YXNuJ3QgYWJsZSB0byBwYXJzZSB0aGUgSVNPIGRhdGV0aW1lXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIGVuc3VyZSBhbGwgdGhlIHBhcnNlIHZhbHVlcyBleGlzdCB3aXRoIGF0IGxlYXN0IDBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgcGFyc2VbaV0gPSBwYXJzZVtpXSAhPT0gdW5kZWZpbmVkID8gcGFyc2VJbnQocGFyc2VbaV0sIDEwKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGxldCB0ek9mZnNldCA9IDA7XHJcbiAgICBpZiAocGFyc2VbOV0gJiYgcGFyc2VbMTBdKSB7XHJcbiAgICAgICAgLy8gaG91cnNcclxuICAgICAgICB0ek9mZnNldCA9IHBhcnNlSW50KHBhcnNlWzEwXSwgMTApICogNjA7XHJcbiAgICAgICAgaWYgKHBhcnNlWzExXSkge1xyXG4gICAgICAgICAgICAvLyBtaW51dGVzXHJcbiAgICAgICAgICAgIHR6T2Zmc2V0ICs9IHBhcnNlSW50KHBhcnNlWzExXSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyc2VbOV0gPT09ICctJykge1xyXG4gICAgICAgICAgICAvLyArIG9yIC1cclxuICAgICAgICAgICAgdHpPZmZzZXQgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB5ZWFyOiBwYXJzZVsxXSxcclxuICAgICAgICBtb250aDogcGFyc2VbMl0sXHJcbiAgICAgICAgZGF5OiBwYXJzZVszXSxcclxuICAgICAgICBob3VyOiBwYXJzZVs0XSxcclxuICAgICAgICBtaW51dGU6IHBhcnNlWzVdLFxyXG4gICAgICAgIHNlY29uZDogcGFyc2VbNl0sXHJcbiAgICAgICAgbWlsbGlzZWNvbmQ6IHBhcnNlWzddLFxyXG4gICAgICAgIHR6T2Zmc2V0LFxyXG4gICAgfTtcclxufTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgdmFsaWQgVVRDIGRhdGV0aW1lIHN0cmluZ1xyXG4gKiBUbyB0aGUgdXNlcidzIGxvY2FsIHRpbWV6b25lXHJcbiAqIE5vdGU6IFRoaXMgaXMgbm90IG1lYW50IGZvciB0aW1lIHN0cmluZ3NcclxuICogc3VjaCBhcyBcIjAxOjQ3XCJcclxuICovXHJcbmNvbnN0IGdldExvY2FsRGF0ZVRpbWUgPSAoZGF0ZVN0cmluZyA9ICcnKSA9PiB7XHJcbiAgICAvKipcclxuICAgICAqIElmIHVzZXIgcGFzc2VkIGluIHVuZGVmaW5lZFxyXG4gICAgICogb3IgbnVsbCwgY29udmVydCBpdCB0byB0aGVcclxuICAgICAqIGVtcHR5IHN0cmluZyBzaW5jZSB0aGUgcmVzdFxyXG4gICAgICogb2YgdGhpcyBmdW5jdGlvbnMgZXhwZWN0c1xyXG4gICAgICogYSBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgaWYgKGRhdGVTdHJpbmcgPT09IHVuZGVmaW5lZCB8fCBkYXRlU3RyaW5nID09PSBudWxsKSB7XHJcbiAgICAgICAgZGF0ZVN0cmluZyA9ICcnO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmVzIHRoYXQgWVlZWS1NTS1ERCwgWVlZWS1NTSxcclxuICAgICAqIFlZWVktREQsIGV0YyBkb2VzIG5vdCBnZXQgYWZmZWN0ZWRcclxuICAgICAqIGJ5IHRpbWV6b25lcyBhbmQgc3RheXMgb24gdGhlIGRheS9tb250aFxyXG4gICAgICogdGhhdCB0aGUgdXNlciBwcm92aWRlZFxyXG4gICAgICovXHJcbiAgICBpZiAoZGF0ZVN0cmluZy5sZW5ndGggPT09IDEwIHx8XHJcbiAgICAgICAgZGF0ZVN0cmluZy5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICBkYXRlU3RyaW5nICs9ICcgJztcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGUgPSAodHlwZW9mIGRhdGVTdHJpbmcgPT09ICdzdHJpbmcnICYmIGRhdGVTdHJpbmcubGVuZ3RoID4gMCkgPyBuZXcgRGF0ZShkYXRlU3RyaW5nKSA6IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xyXG59O1xyXG5jb25zdCB1cGRhdGVEYXRlID0gKGV4aXN0aW5nRGF0YSwgbmV3RGF0YSkgPT4ge1xyXG4gICAgaWYgKCFuZXdEYXRhIHx8IHR5cGVvZiBuZXdEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsRGF0ZVRpbWUgPSBnZXRMb2NhbERhdGVUaW1lKG5ld0RhdGEpO1xyXG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKGxvY2FsRGF0ZVRpbWUuZ2V0VGltZSgpKSkge1xyXG4gICAgICAgICAgICBuZXdEYXRhID0gbG9jYWxEYXRlVGltZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuZXdEYXRhICYmIG5ld0RhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAvLyBuZXcgZGF0ZSBpcyBhIHN0cmluZywgYW5kIGhvcGVmdWxseSBpbiB0aGUgSVNPIGZvcm1hdFxyXG4gICAgICAgICAgICAvLyBjb252ZXJ0IGl0IHRvIG91ciBEYXRldGltZURhdGEgaWYgYSB2YWxpZCBJU09cclxuICAgICAgICAgICAgbmV3RGF0YSA9IHBhcnNlRGF0ZShuZXdEYXRhKTtcclxuICAgICAgICAgICAgaWYgKG5ld0RhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWxseSBwYXJzZWQgdGhlIElTTyBzdHJpbmcgdG8gb3VyIERhdGV0aW1lRGF0YVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihleGlzdGluZ0RhdGEsIG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG5ld0RhdGEueWVhciB8fCBuZXdEYXRhLmhvdXIgfHwgbmV3RGF0YS5tb250aCB8fCBuZXdEYXRhLmRheSB8fCBuZXdEYXRhLm1pbnV0ZSB8fCBuZXdEYXRhLnNlY29uZCkpIHtcclxuICAgICAgICAgICAgLy8gbmV3RGF0YSBpcyBmcm9tIG9mIGEgZGF0ZXRpbWUgcGlja2VyJ3Mgc2VsZWN0ZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZXhpc3RpbmcgRGF0ZXRpbWVEYXRhIGRhdGEgd2l0aCB0aGUgbmV3IHZhbHVlc1xyXG4gICAgICAgICAgICAvLyBkbyBzb21lIG1hZ2ljIGZvciAxMi1ob3VyIHZhbHVlc1xyXG4gICAgICAgICAgICBpZiAobmV3RGF0YS5hbXBtICYmIG5ld0RhdGEuaG91cikge1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YS5ob3VyLnZhbHVlID0gKG5ld0RhdGEuYW1wbS52YWx1ZSA9PT0gJ3BtJylcclxuICAgICAgICAgICAgICAgICAgICA/IChuZXdEYXRhLmhvdXIudmFsdWUgPT09IDEyID8gMTIgOiBuZXdEYXRhLmhvdXIudmFsdWUgKyAxMilcclxuICAgICAgICAgICAgICAgICAgICA6IChuZXdEYXRhLmhvdXIudmFsdWUgPT09IDEyID8gMCA6IG5ld0RhdGEuaG91ci52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbWVyZ2UgbmV3IHZhbHVlcyBmcm9tIHRoZSBwaWNrZXIncyBzZWxlY3Rpb25cclxuICAgICAgICAgICAgLy8gdG8gdGhlIGV4aXN0aW5nIERhdGV0aW1lRGF0YSB2YWx1ZXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobmV3RGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRGF0YVtrZXldID0gbmV3RGF0YVtrZXldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXdEYXRhLmFtcG0pIHtcclxuICAgICAgICAgICAgLy8gRXZlbiB0aG91Z2ggaW4gdGhlIHBpY2tlciBjb2x1bW4gaG91ciB2YWx1ZXMgYXJlIGJldHdlZW4gMSBhbmQgMTIsIHRoZSBob3VyIHZhbHVlIGlzIGFjdHVhbGx5IG5vcm1hbGl6ZWRcclxuICAgICAgICAgICAgLy8gdG8gWzAsIDIzXSBpbnRlcnZhbC4gQmVjYXVzZSBvZiB0aGlzIHdoZW4gY2hhbmdpbmcgYmV0d2VlbiBBTSBhbmQgUE0gd2UgaGF2ZSB0byB1cGRhdGUgdGhlIGhvdXIgc28gaXQgcG9pbnRzXHJcbiAgICAgICAgICAgIC8vIHRvIHRoZSBjb3JyZWN0IEhIIGhvdXJcclxuICAgICAgICAgICAgbmV3RGF0YS5ob3VyID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ld0RhdGEuaG91clxyXG4gICAgICAgICAgICAgICAgICAgID8gbmV3RGF0YS5ob3VyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiAobmV3RGF0YS5hbXBtLnZhbHVlID09PSAncG0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKGV4aXN0aW5nRGF0YS5ob3VyIDwgMTIgPyBleGlzdGluZ0RhdGEuaG91ciArIDEyIDogZXhpc3RpbmdEYXRhLmhvdXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGV4aXN0aW5nRGF0YS5ob3VyID49IDEyID8gZXhpc3RpbmdEYXRhLmhvdXIgLSAxMiA6IGV4aXN0aW5nRGF0YS5ob3VyKSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZXhpc3RpbmdEYXRhWydob3VyJ10gPSBuZXdEYXRhWydob3VyJ10udmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBld3csIGludmFsaWQgZGF0YVxyXG4gICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgcGFyc2luZyBkYXRlOiBcIiR7bmV3RGF0YX1cIi4gUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBJU08gODYwMSBkYXRldGltZSBmb3JtYXQ6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lYCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBibGFuayBkYXRhLCBjbGVhciBldmVyeXRoaW5nIG91dFxyXG4gICAgICAgIGZvciAoY29uc3QgayBpbiBleGlzdGluZ0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nRGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGV4aXN0aW5nRGF0YVtrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuY29uc3QgcGFyc2VUZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgZm9ybWF0cyA9IFtdO1xyXG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcgJyk7XHJcbiAgICBGT1JNQVRfS0VZUy5mb3JFYWNoKGZvcm1hdCA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1hdC5mLmxlbmd0aCA+IDEgJiYgdGVtcGxhdGUuaW5kZXhPZihmb3JtYXQuZikgPiAtMSAmJiB0ZW1wbGF0ZS5pbmRleE9mKGZvcm1hdC5mICsgZm9ybWF0LmYuY2hhckF0KDApKSA8IDApIHtcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGZvcm1hdC5mLCAnICcgKyBmb3JtYXQuZiArICcgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB3b3JkcyA9IHRlbXBsYXRlLnNwbGl0KCcgJykuZmlsdGVyKHcgPT4gdy5sZW5ndGggPiAwKTtcclxuICAgIHdvcmRzLmZvckVhY2goKHdvcmQsIGkpID0+IHtcclxuICAgICAgICBGT1JNQVRfS0VZUy5mb3JFYWNoKGZvcm1hdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3b3JkID09PSBmb3JtYXQuZikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmQgPT09IEZPUk1BVF9BIHx8IHdvcmQgPT09IEZPUk1BVF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBmb3JtYXQgaXMgYW4gYW0vcG0gZm9ybWF0LCBzbyBpdCdzIGFuIFwiYVwiIG9yIFwiQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChmb3JtYXRzLmluZGV4T2YoRk9STUFUX2gpIDwgMCAmJiBmb3JtYXRzLmluZGV4T2YoRk9STUFUX2hoKSA8IDApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBTElEX0FNUE1fUFJFRklYLmluZGV4T2Yod29yZHNbaSAtIDFdKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGVtcGxhdGUgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgMTItaG91ciBmb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3IgdGhpcyBhbS9wbSBmb3JtYXQgZG9lc24ndCBoYXZlIGEgaG91ciwgbWludXRlLCBvciBzZWNvbmQgZm9ybWF0IGltbWVkaWF0ZWx5IGJlZm9yZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBkbyBub3QgdHJlYXQgdGhpcyB3b3JkIFwiYVwiIG9yIFwiQVwiIGFzIHRoZSBhbS9wbSBmb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcm1hdHMucHVzaCh3b3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybWF0cztcclxufTtcclxuY29uc3QgZ2V0VmFsdWVGcm9tRm9ybWF0ID0gKGRhdGUsIGZvcm1hdCkgPT4ge1xyXG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX0EgfHwgZm9ybWF0ID09PSBGT1JNQVRfYSkge1xyXG4gICAgICAgIHJldHVybiAoZGF0ZS5ob3VyIDwgMTIgPyAnYW0nIDogJ3BtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfaGggfHwgZm9ybWF0ID09PSBGT1JNQVRfaCkge1xyXG4gICAgICAgIHJldHVybiAoZGF0ZS5ob3VyID4gMTIgPyBkYXRlLmhvdXIgLSAxMiA6IChkYXRlLmhvdXIgPT09IDAgPyAxMiA6IGRhdGUuaG91cikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGVbY29udmVydEZvcm1hdFRvS2V5KGZvcm1hdCldO1xyXG59O1xyXG5jb25zdCBjb252ZXJ0Rm9ybWF0VG9LZXkgPSAoZm9ybWF0KSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGsgaW4gRk9STUFUX0tFWVMpIHtcclxuICAgICAgICBpZiAoRk9STUFUX0tFWVNba10uZiA9PT0gZm9ybWF0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBGT1JNQVRfS0VZU1trXS5rO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcbmNvbnN0IGNvbnZlcnREYXRhVG9JU08gPSAoZGF0YSkgPT4ge1xyXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcclxuICAgIGxldCBydG4gPSAnJztcclxuICAgIGlmIChkYXRhLnllYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vIFlZWVlcclxuICAgICAgICBydG4gPSBmb3VyRGlnaXQoZGF0YS55ZWFyKTtcclxuICAgICAgICBpZiAoZGF0YS5tb250aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIFlZWVktTU1cclxuICAgICAgICAgICAgcnRuICs9ICctJyArIHR3b0RpZ2l0KGRhdGEubW9udGgpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFxyXG4gICAgICAgICAgICAgICAgcnRuICs9ICctJyArIHR3b0RpZ2l0KGRhdGEuZGF5KTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhvdXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFlZWVktTU0tRERUSEg6bW06U1NcclxuICAgICAgICAgICAgICAgICAgICBydG4gKz0gYFQke3R3b0RpZ2l0KGRhdGEuaG91cil9OiR7dHdvRGlnaXQoZGF0YS5taW51dGUpfToke3R3b0RpZ2l0KGRhdGEuc2Vjb25kKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1pbGxpc2Vjb25kID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBZWVlZLU1NLUREVEhIOm1tOlNTLlNTU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydG4gKz0gJy4nICsgdGhyZWVEaWdpdChkYXRhLm1pbGxpc2Vjb25kKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudHpPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBZWVlZLU1NLUREVEhIOm1tOlNTWlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydG4gKz0gJ1onO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFRISDptbTpTUysvLUhIOm1tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0biArPSAoZGF0YS50ek9mZnNldCA+IDAgPyAnKycgOiAnLScpICsgdHdvRGlnaXQoTWF0aC5mbG9vcihNYXRoLmFicyhkYXRhLnR6T2Zmc2V0IC8gNjApKSkgKyAnOicgKyB0d29EaWdpdChkYXRhLnR6T2Zmc2V0ICUgNjApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRhdGEuaG91ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gSEg6bW1cclxuICAgICAgICBydG4gPSB0d29EaWdpdChkYXRhLmhvdXIpICsgJzonICsgdHdvRGlnaXQoZGF0YS5taW51dGUpO1xyXG4gICAgICAgIGlmIChkYXRhLnNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIEhIOm1tOlNTXHJcbiAgICAgICAgICAgIHJ0biArPSAnOicgKyB0d29EaWdpdChkYXRhLnNlY29uZCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLm1pbGxpc2Vjb25kICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhIOm1tOlNTLlNTU1xyXG4gICAgICAgICAgICAgICAgcnRuICs9ICcuJyArIHRocmVlRGlnaXQoZGF0YS5taWxsaXNlY29uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcnRuO1xyXG59O1xyXG4vKipcclxuICogVXNlIHRvIGNvbnZlcnQgYSBzdHJpbmcgb2YgY29tbWEgc2VwYXJhdGVkIHN0cmluZ3Mgb3JcclxuICogYW4gYXJyYXkgb2Ygc3RyaW5ncywgYW5kIGNsZWFuIHVwIGFueSB1c2VyIGlucHV0XHJcbiAqL1xyXG5jb25zdCBjb252ZXJ0VG9BcnJheU9mU3RyaW5ncyA9IChpbnB1dCwgdHlwZSkgPT4ge1xyXG4gICAgaWYgKGlucHV0ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xyXG4gICAgICAgIC8vIGF1dG8gcmVtb3ZlIGFueSBbXSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9cXFt8XFxdL2csICcnKS5zcGxpdCgnLCcpO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlcztcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICAgIC8vIHRyaW0gdXAgZWFjaCBzdHJpbmcgdmFsdWVcclxuICAgICAgICB2YWx1ZXMgPSBpbnB1dC5tYXAodmFsID0+IHZhbC50b1N0cmluZygpLnRyaW0oKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWVzID09PSB1bmRlZmluZWQgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBcIiR7dHlwZX1OYW1lc1wiLiBNdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgY29tbWEgc2VwYXJhdGVkIHN0cmluZy5gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbn07XHJcbi8qKlxyXG4gKiBVc2UgdG8gY29udmVydCBhIHN0cmluZyBvZiBjb21tYSBzZXBhcmF0ZWQgbnVtYmVycyBvclxyXG4gKiBhbiBhcnJheSBvZiBudW1iZXJzLCBhbmQgY2xlYW4gdXAgYW55IHVzZXIgaW5wdXRcclxuICovXHJcbmNvbnN0IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzID0gKGlucHV0LCB0eXBlKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIHN0cmluZyB0byBhbiBhcnJheSBvZiBzdHJpbmdzXHJcbiAgICAgICAgLy8gYXV0byByZW1vdmUgYW55IHdoaXRlc3BhY2UgYW5kIFtdIGNoYXJhY3RlcnNcclxuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xcW3xcXF18XFxzL2csICcnKS5zcGxpdCgnLCcpO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlcztcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICAgIC8vIGVuc3VyZSBlYWNoIHZhbHVlIGlzIGFuIGFjdHVhbCBudW1iZXIgaW4gdGhlIHJldHVybmVkIGFycmF5XHJcbiAgICAgICAgdmFsdWVzID0gaW5wdXRcclxuICAgICAgICAgICAgLm1hcCgobnVtKSA9PiBwYXJzZUludChudW0sIDEwKSlcclxuICAgICAgICAgICAgLmZpbHRlcihpc0Zpbml0ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YWx1ZXMgPSBbaW5wdXRdO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgXCIke3R5cGV9VmFsdWVzXCIuIE11c3QgYmUgYW4gYXJyYXkgb2YgbnVtYmVycywgb3IgYSBjb21tYSBzZXBhcmF0ZWQgc3RyaW5nIG9mIG51bWJlcnMuYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG59O1xyXG5jb25zdCB0d29EaWdpdCA9ICh2YWwpID0+IHtcclxuICAgIHJldHVybiAoJzAnICsgKHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5hYnModmFsKSA6ICcwJykpLnNsaWNlKC0yKTtcclxufTtcclxuY29uc3QgdGhyZWVEaWdpdCA9ICh2YWwpID0+IHtcclxuICAgIHJldHVybiAoJzAwJyArICh2YWwgIT09IHVuZGVmaW5lZCA/IE1hdGguYWJzKHZhbCkgOiAnMCcpKS5zbGljZSgtMyk7XHJcbn07XHJcbmNvbnN0IGZvdXJEaWdpdCA9ICh2YWwpID0+IHtcclxuICAgIHJldHVybiAoJzAwMCcgKyAodmFsICE9PSB1bmRlZmluZWQgPyBNYXRoLmFicyh2YWwpIDogJzAnKSkuc2xpY2UoLTQpO1xyXG59O1xyXG5jb25zdCBGT1JNQVRfWVlZWSA9ICdZWVlZJztcclxuY29uc3QgRk9STUFUX1lZID0gJ1lZJztcclxuY29uc3QgRk9STUFUX01NTU0gPSAnTU1NTSc7XHJcbmNvbnN0IEZPUk1BVF9NTU0gPSAnTU1NJztcclxuY29uc3QgRk9STUFUX01NID0gJ01NJztcclxuY29uc3QgRk9STUFUX00gPSAnTSc7XHJcbmNvbnN0IEZPUk1BVF9EREREID0gJ0REREQnO1xyXG5jb25zdCBGT1JNQVRfREREID0gJ0RERCc7XHJcbmNvbnN0IEZPUk1BVF9ERCA9ICdERCc7XHJcbmNvbnN0IEZPUk1BVF9EID0gJ0QnO1xyXG5jb25zdCBGT1JNQVRfSEggPSAnSEgnO1xyXG5jb25zdCBGT1JNQVRfSCA9ICdIJztcclxuY29uc3QgRk9STUFUX2hoID0gJ2hoJztcclxuY29uc3QgRk9STUFUX2ggPSAnaCc7XHJcbmNvbnN0IEZPUk1BVF9tbSA9ICdtbSc7XHJcbmNvbnN0IEZPUk1BVF9tID0gJ20nO1xyXG5jb25zdCBGT1JNQVRfc3MgPSAnc3MnO1xyXG5jb25zdCBGT1JNQVRfcyA9ICdzJztcclxuY29uc3QgRk9STUFUX0EgPSAnQSc7XHJcbmNvbnN0IEZPUk1BVF9hID0gJ2EnO1xyXG5jb25zdCBGT1JNQVRfS0VZUyA9IFtcclxuICAgIHsgZjogRk9STUFUX1lZWVksIGs6ICd5ZWFyJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfTU1NTSwgazogJ21vbnRoJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfRERERCwgazogJ2RheScgfSxcclxuICAgIHsgZjogRk9STUFUX01NTSwgazogJ21vbnRoJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfRERELCBrOiAnZGF5JyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfWVksIGs6ICd5ZWFyJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfTU0sIGs6ICdtb250aCcgfSxcclxuICAgIHsgZjogRk9STUFUX0RELCBrOiAnZGF5JyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfSEgsIGs6ICdob3VyJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfaGgsIGs6ICdob3VyJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfbW0sIGs6ICdtaW51dGUnIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9zcywgazogJ3NlY29uZCcgfSxcclxuICAgIHsgZjogRk9STUFUX00sIGs6ICdtb250aCcgfSxcclxuICAgIHsgZjogRk9STUFUX0QsIGs6ICdkYXknIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9ILCBrOiAnaG91cicgfSxcclxuICAgIHsgZjogRk9STUFUX2gsIGs6ICdob3VyJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfbSwgazogJ21pbnV0ZScgfSxcclxuICAgIHsgZjogRk9STUFUX3MsIGs6ICdzZWNvbmQnIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9BLCBrOiAnYW1wbScgfSxcclxuICAgIHsgZjogRk9STUFUX2EsIGs6ICdhbXBtJyB9LFxyXG5dO1xyXG5jb25zdCBEQVlfTkFNRVMgPSBbXHJcbiAgICAnU3VuZGF5JyxcclxuICAgICdNb25kYXknLFxyXG4gICAgJ1R1ZXNkYXknLFxyXG4gICAgJ1dlZG5lc2RheScsXHJcbiAgICAnVGh1cnNkYXknLFxyXG4gICAgJ0ZyaWRheScsXHJcbiAgICAnU2F0dXJkYXknLFxyXG5dO1xyXG5jb25zdCBEQVlfU0hPUlRfTkFNRVMgPSBbXHJcbiAgICAnU3VuJyxcclxuICAgICdNb24nLFxyXG4gICAgJ1R1ZScsXHJcbiAgICAnV2VkJyxcclxuICAgICdUaHUnLFxyXG4gICAgJ0ZyaScsXHJcbiAgICAnU2F0JyxcclxuXTtcclxuY29uc3QgTU9OVEhfTkFNRVMgPSBbXHJcbiAgICAnSmFudWFyeScsXHJcbiAgICAnRmVicnVhcnknLFxyXG4gICAgJ01hcmNoJyxcclxuICAgICdBcHJpbCcsXHJcbiAgICAnTWF5JyxcclxuICAgICdKdW5lJyxcclxuICAgICdKdWx5JyxcclxuICAgICdBdWd1c3QnLFxyXG4gICAgJ1NlcHRlbWJlcicsXHJcbiAgICAnT2N0b2JlcicsXHJcbiAgICAnTm92ZW1iZXInLFxyXG4gICAgJ0RlY2VtYmVyJyxcclxuXTtcclxuY29uc3QgTU9OVEhfU0hPUlRfTkFNRVMgPSBbXHJcbiAgICAnSmFuJyxcclxuICAgICdGZWInLFxyXG4gICAgJ01hcicsXHJcbiAgICAnQXByJyxcclxuICAgICdNYXknLFxyXG4gICAgJ0p1bicsXHJcbiAgICAnSnVsJyxcclxuICAgICdBdWcnLFxyXG4gICAgJ1NlcCcsXHJcbiAgICAnT2N0JyxcclxuICAgICdOb3YnLFxyXG4gICAgJ0RlYycsXHJcbl07XHJcbmNvbnN0IFZBTElEX0FNUE1fUFJFRklYID0gW1xyXG4gICAgRk9STUFUX2hoLCBGT1JNQVRfaCwgRk9STUFUX21tLCBGT1JNQVRfbSwgRk9STUFUX3NzLCBGT1JNQVRfc1xyXG5dO1xuXG5jb25zdCBEYXRldGltZSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IGBpb24tZHQtJHtkYXRldGltZUlkcysrfWA7XG4gICAgICAgIHRoaXMubG9jYWxlID0ge307XG4gICAgICAgIHRoaXMuZGF0ZXRpbWVNaW4gPSB7fTtcbiAgICAgICAgdGhpcy5kYXRldGltZU1heCA9IHt9O1xuICAgICAgICB0aGlzLmRhdGV0aW1lVmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGRhdGV0aW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZGF0ZXRpbWUgYXBwZWFycyBub3JtYWwgYnV0IGlzIG5vdCBpbnRlcmFjdGl2ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkaXNwbGF5IGZvcm1hdCBvZiB0aGUgZGF0ZSBhbmQgdGltZSBhcyB0ZXh0IHRoYXQgc2hvd3NcbiAgICAgICAgICogd2l0aGluIHRoZSBpdGVtLiBXaGVuIHRoZSBgcGlja2VyRm9ybWF0YCBpbnB1dCBpcyBub3QgdXNlZCwgdGhlbiB0aGVcbiAgICAgICAgICogYGRpc3BsYXlGb3JtYXRgIGlzIHVzZWQgZm9yIGJvdGggZGlzcGxheSB0aGUgZm9ybWF0dGVkIHRleHQsIGFuZCBkZXRlcm1pbmluZ1xuICAgICAgICAgKiB0aGUgZGF0ZXRpbWUgcGlja2VyJ3MgY29sdW1ucy4gU2VlIHRoZSBgcGlja2VyRm9ybWF0YCBpbnB1dCBkZXNjcmlwdGlvbiBmb3JcbiAgICAgICAgICogbW9yZSBpbmZvLiBEZWZhdWx0cyB0byBgTU1NIEQsIFlZWVlgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gJ01NTSBELCBZWVlZJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIHBpY2tlcidzIGNhbmNlbCBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbmNlbFRleHQgPSAnQ2FuY2VsJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIHBpY2tlcidzIFwiRG9uZVwiIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZG9uZVRleHQgPSAnRG9uZSc7XG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbkNhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2FuY2VsXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRhdGV0aW1lIHZhbHVlIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcbiAgICAgKi9cbiAgICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZXRpbWVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgICAgIC8vIGZpcnN0IHNlZSBpZiBsb2NhbGUgbmFtZXMgd2VyZSBwcm92aWRlZCBpbiB0aGUgaW5wdXRzXG4gICAgICAgIC8vIHRoZW4gY2hlY2sgdG8gc2VlIGlmIHRoZXkncmUgaW4gdGhlIGNvbmZpZ1xuICAgICAgICAvLyBpZiBuZWl0aGVyIHdlcmUgcHJvdmlkZWQgdGhlbiBpdCB3aWxsIHVzZSBkZWZhdWx0IEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgdGhpcy5sb2NhbGUgPSB7XG4gICAgICAgICAgICAvLyB0aGlzLmxvY2FsZVt0eXBlXSA9IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzKCh0aGlzW3R5cGVdID8gdGhpc1t0eXBlXSA6IHRoaXMuY29uZmlnLmdldCh0eXBlKSwgdHlwZSk7XG4gICAgICAgICAgICBtb250aE5hbWVzOiBjb252ZXJ0VG9BcnJheU9mU3RyaW5ncyh0aGlzLm1vbnRoTmFtZXMsICdtb250aE5hbWVzJyksXG4gICAgICAgICAgICBtb250aFNob3J0TmFtZXM6IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzKHRoaXMubW9udGhTaG9ydE5hbWVzLCAnbW9udGhTaG9ydE5hbWVzJyksXG4gICAgICAgICAgICBkYXlOYW1lczogY29udmVydFRvQXJyYXlPZlN0cmluZ3ModGhpcy5kYXlOYW1lcywgJ2RheU5hbWVzJyksXG4gICAgICAgICAgICBkYXlTaG9ydE5hbWVzOiBjb252ZXJ0VG9BcnJheU9mU3RyaW5ncyh0aGlzLmRheVNob3J0TmFtZXMsICdkYXlTaG9ydE5hbWVzJylcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRldGltZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgZGF0ZXRpbWUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBhc3luYyBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaWNrZXJPcHRpb25zID0gdGhpcy5nZW5lcmF0ZVBpY2tlck9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgcGlja2VyID0gYXdhaXQgcGlja2VyQ29udHJvbGxlci5jcmVhdGUocGlja2VyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgIHBpY2tlci5vbkRpZERpc21pc3MoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2lvblBpY2tlckNvbENoYW5nZScsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgICAgIGNvbnN0IGNvbFNlbGVjdGVkSW5kZXggPSBkYXRhLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICBjb25zdCBjb2xPcHRpb25zID0gZGF0YS5vcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlRGF0YSA9IHt9O1xuICAgICAgICAgICAgY2hhbmdlRGF0YVtkYXRhLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBjb2xPcHRpb25zW2NvbFNlbGVjdGVkSW5kZXhdLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRldGltZVZhbHVlKGNoYW5nZURhdGEpO1xuICAgICAgICAgICAgcGlja2VyLmNvbHVtbnMgPSB0aGlzLmdlbmVyYXRlQ29sdW1ucygpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcGlja2VyLnByZXNlbnQoKTtcbiAgICB9XG4gICAgZW1pdFN0eWxlKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ2ludGVyYWN0aXZlJzogdHJ1ZSxcbiAgICAgICAgICAgICdkYXRldGltZSc6IHRydWUsXG4gICAgICAgICAgICAnaGFzLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlciAhPSBudWxsLFxuICAgICAgICAgICAgJ2hhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVEYXRldGltZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHVwZGF0ZURhdGUodGhpcy5kYXRldGltZVZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGdlbmVyYXRlUGlja2VyT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHBpY2tlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBtb2RlIH0sIHRoaXMucGlja2VyT3B0aW9ucyksIHsgY29sdW1uczogdGhpcy5nZW5lcmF0ZUNvbHVtbnMoKSB9KTtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzIG5vdCBwYXNzZWQgaW4gcGlja2VyIGJ1dHRvbnMsXG4gICAgICAgIC8vIGFkZCBhIGNhbmNlbCBhbmQgb2sgYnV0dG9uIHRvIHRoZSBwaWNrZXJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IHBpY2tlck9wdGlvbnMuYnV0dG9ucztcbiAgICAgICAgaWYgKCFidXR0b25zIHx8IGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBwaWNrZXJPcHRpb25zLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNhbmNlbFRleHQsXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGV0aW1lVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5kb25lVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0ZXRpbWVWYWx1ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogUHJldmVudCBjb252ZXJ0RGF0YVRvSVNPIGZyb20gZG9pbmcgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBraW5kIG9mIHRyYW5zZm9ybWF0aW9uIGJhc2VkIG9uIHRpbWV6b25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIGNhbmNlbHMgb3V0IGFueSBjaGFuZ2UgaXQgYXR0ZW1wdHMgdG8gbWFrZVxuICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEltcG9ydGFudDogVGFrZSB0aGUgdGltZXpvbmUgb2Zmc2V0IGJhc2VkIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiB0aGUgZGF0ZSB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZCwgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiB0aGVyZSBjYW4gYmUgMSBociBkaWZmZXJlbmNlIHdoZW4gZGVhbGluZyB3LyBEU1RcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGNvbnZlcnREYXRhVG9JU08odGhpcy5kYXRldGltZVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGV0aW1lVmFsdWUudHpPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBjb252ZXJ0RGF0YVRvSVNPKHRoaXMuZGF0ZXRpbWVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaWNrZXJPcHRpb25zO1xuICAgIH1cbiAgICBnZW5lcmF0ZUNvbHVtbnMoKSB7XG4gICAgICAgIC8vIGlmIGEgcGlja2VyIGZvcm1hdCB3YXNuJ3QgcHJvdmlkZWQsIHRoZW4gZmFsbGJhY2tcbiAgICAgICAgLy8gdG8gdXNlIHRoZSBkaXNwbGF5IGZvcm1hdFxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnBpY2tlckZvcm1hdCB8fCB0aGlzLmRpc3BsYXlGb3JtYXQgfHwgREVGQVVMVF9GT1JNQVQ7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2UndmUgZ290IHVwIHRvIGRhdGUgc2l6aW5nIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuY2FsY01pbk1heCgpO1xuICAgICAgICAvLyBkb2VzIG5vdCBzdXBwb3J0IHNlbGVjdGluZyBieSBkYXkgbmFtZVxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IHJlbW92ZSBhbnkgZGF5IG5hbWUgZm9ybWF0c1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoJ0REREQnLCAne359JykucmVwbGFjZSgnREREJywgJ3t+fScpO1xuICAgICAgICBpZiAodGVtcGxhdGUuaW5kZXhPZignRCcpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm90IGEgZGF5IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZGF5IG5hbWUgd2l0aCBhIG51bWVyaWMgb25lIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7fn0nLCAnRCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2Ugc3VyZSBubyBkYXkgbmFtZSByZXBsYWNlciBpcyBsZWZ0IGluIHRoZSBzdHJpbmdcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC97fn0vZywgJycpO1xuICAgICAgICAvLyBwYXJzZSBhcGFydCB0aGUgZ2l2ZW4gdGVtcGxhdGUgaW50byBhbiBhcnJheSBvZiBcImZvcm1hdHNcIlxuICAgICAgICBjb25zdCBjb2x1bW5zID0gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSkubWFwKChmb3JtYXQpID0+IHtcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGZvcm1hdCBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBwaWNrZXIgY29sdW1uIHRvIGJ1aWxkIHVwIHdpdGggZGF0YVxuICAgICAgICAgICAgY29uc3Qga2V5ID0gY29udmVydEZvcm1hdFRvS2V5KGZvcm1hdCk7XG4gICAgICAgICAgICBsZXQgdmFsdWVzO1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhleSBoYXZlIGV4YWN0IHZhbHVlcyB0byB1c2UgZm9yIHRoaXMgZGF0ZSBwYXJ0XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgdXNlIHRoZSBkZWZhdWx0IGRhdGUgcGFydCB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFsdWVzID0gc2VsZltrZXkgKyAnVmFsdWVzJ11cbiAgICAgICAgICAgICAgICA/IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHNlbGZba2V5ICsgJ1ZhbHVlcyddLCBrZXkpXG4gICAgICAgICAgICAgICAgOiBkYXRlVmFsdWVSYW5nZShmb3JtYXQsIHRoaXMuZGF0ZXRpbWVNaW4sIHRoaXMuZGF0ZXRpbWVNYXgpO1xuICAgICAgICAgICAgY29uc3QgY29sT3B0aW9ucyA9IHZhbHVlcy5tYXAodmFsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZW5kZXJUZXh0Rm9ybWF0KGZvcm1hdCwgdmFsLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb29sLCB3ZSd2ZSBsb2FkZWQgdXAgdGhlIGNvbHVtbnMgd2l0aCBvcHRpb25zXG4gICAgICAgICAgICAvLyBwcmVzZWxlY3QgdGhlIG9wdGlvbiBmb3IgdGhpcyBjb2x1bW5cbiAgICAgICAgICAgIGNvbnN0IG9wdFZhbHVlID0gZ2V0RGF0ZVZhbHVlKHRoaXMuZGF0ZXRpbWVWYWx1ZSwgZm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBjb2xPcHRpb25zLmZpbmRJbmRleChvcHQgPT4gb3B0LnZhbHVlID09PSBvcHRWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBzZWxlY3RlZEluZGV4ID49IDAgPyBzZWxlY3RlZEluZGV4IDogMCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBjb2xPcHRpb25zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gTm9ybWFsaXplIG1pbi9tYXhcbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5kYXRldGltZU1pbjtcbiAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5kYXRldGltZU1heDtcbiAgICAgICAgWydtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnXVxuICAgICAgICAgICAgLmZpbHRlcihuYW1lID0+ICFjb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSBuYW1lKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgbWluW25hbWVdID0gMDtcbiAgICAgICAgICAgIG1heFtuYW1lXSA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUNvbHVtbnMoZGl2eUNvbHVtbnMoY29sdW1ucykpO1xuICAgIH1cbiAgICB2YWxpZGF0ZUNvbHVtbnMoY29sdW1ucykge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IG1pbkNvbXBhcmVWYWwgPSBkYXRlRGF0YVNvcnRWYWx1ZSh0aGlzLmRhdGV0aW1lTWluKTtcbiAgICAgICAgY29uc3QgbWF4Q29tcGFyZVZhbCA9IGRhdGVEYXRhU29ydFZhbHVlKHRoaXMuZGF0ZXRpbWVNYXgpO1xuICAgICAgICBjb25zdCB5ZWFyQ29sID0gY29sdW1ucy5maW5kKGMgPT4gYy5uYW1lID09PSAneWVhcicpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKHllYXJDb2wpIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gdGhlIGZpcnN0IHZhbHVlIGlmIHRoZSBjdXJyZW50IHllYXIgZG9lc24ndCBleGlzdCBpbiB0aGUgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKCF5ZWFyQ29sLm9wdGlvbnMuZmluZChjb2wgPT4gY29sLnZhbHVlID09PSB0b2RheS5nZXRGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkWWVhciA9IHllYXJDb2wub3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB5ZWFyQ29sLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhck9wdCA9IHllYXJDb2wub3B0aW9uc1tzZWxlY3RlZEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoeWVhck9wdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGV5IGhhdmUgYSBzZWxlY3RlZCB5ZWFyIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkWWVhciA9IHllYXJPcHQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdtb250aCcsIDEsIG1pbkNvbXBhcmVWYWwsIG1heENvbXBhcmVWYWwsIFtzZWxlY3RlZFllYXIsIDAsIDAsIDAsIDBdLCBbc2VsZWN0ZWRZZWFyLCAxMiwgMzEsIDIzLCA1OV0pO1xuICAgICAgICBjb25zdCBudW1EYXlzSW5Nb250aCA9IGRheXNJbk1vbnRoKHNlbGVjdGVkTW9udGgsIHNlbGVjdGVkWWVhcik7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gdGhpcy52YWxpZGF0ZUNvbHVtbihjb2x1bW5zLCAnZGF5JywgMiwgbWluQ29tcGFyZVZhbCwgbWF4Q29tcGFyZVZhbCwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgMCwgMCwgMF0sIFtzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIG51bURheXNJbk1vbnRoLCAyMywgNTldKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRIb3VyID0gdGhpcy52YWxpZGF0ZUNvbHVtbihjb2x1bW5zLCAnaG91cicsIDMsIG1pbkNvbXBhcmVWYWwsIG1heENvbXBhcmVWYWwsIFtzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIHNlbGVjdGVkRGF5LCAwLCAwXSwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWREYXksIDIzLCA1OV0pO1xuICAgICAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdtaW51dGUnLCA0LCBtaW5Db21wYXJlVmFsLCBtYXhDb21wYXJlVmFsLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCBzZWxlY3RlZERheSwgc2VsZWN0ZWRIb3VyLCAwXSwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWREYXksIHNlbGVjdGVkSG91ciwgNTldKTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuICAgIGNhbGNNaW5NYXgoKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5c1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmICh0aGlzLnllYXJWYWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgeWVhcnMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLnllYXJWYWx1ZXMsICd5ZWFyJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5taW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluID0gTWF0aC5taW4oLi4ueWVhcnMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gTWF0aC5tYXgoLi4ueWVhcnMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluID0gKHRvZGF5c1llYXIgLSAxMDApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gdG9kYXlzWWVhci50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuZGF0ZXRpbWVNaW4gPSBwYXJzZURhdGUodGhpcy5taW4pO1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLmRhdGV0aW1lTWF4ID0gcGFyc2VEYXRlKHRoaXMubWF4KTtcbiAgICAgICAgbWluLnllYXIgPSBtaW4ueWVhciB8fCB0b2RheXNZZWFyO1xuICAgICAgICBtYXgueWVhciA9IG1heC55ZWFyIHx8IHRvZGF5c1llYXI7XG4gICAgICAgIG1pbi5tb250aCA9IG1pbi5tb250aCB8fCAxO1xuICAgICAgICBtYXgubW9udGggPSBtYXgubW9udGggfHwgMTI7XG4gICAgICAgIG1pbi5kYXkgPSBtaW4uZGF5IHx8IDE7XG4gICAgICAgIG1heC5kYXkgPSBtYXguZGF5IHx8IDMxO1xuICAgICAgICBtaW4uaG91ciA9IG1pbi5ob3VyIHx8IDA7XG4gICAgICAgIG1heC5ob3VyID0gbWF4LmhvdXIgfHwgMjM7XG4gICAgICAgIG1pbi5taW51dGUgPSBtaW4ubWludXRlIHx8IDA7XG4gICAgICAgIG1heC5taW51dGUgPSBtYXgubWludXRlIHx8IDU5O1xuICAgICAgICBtaW4uc2Vjb25kID0gbWluLnNlY29uZCB8fCAwO1xuICAgICAgICBtYXguc2Vjb25kID0gbWF4LnNlY29uZCB8fCA1OTtcbiAgICAgICAgLy8gRW5zdXJlIG1pbi9tYXggY29uc3RyYWludHNcbiAgICAgICAgaWYgKG1pbi55ZWFyID4gbWF4LnllYXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ21pbi55ZWFyID4gbWF4LnllYXInKTtcbiAgICAgICAgICAgIG1pbi55ZWFyID0gbWF4LnllYXIgLSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbi55ZWFyID09PSBtYXgueWVhcikge1xuICAgICAgICAgICAgaWYgKG1pbi5tb250aCA+IG1heC5tb250aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ21pbi5tb250aCA+IG1heC5tb250aCcpO1xuICAgICAgICAgICAgICAgIG1pbi5tb250aCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtaW4ubW9udGggPT09IG1heC5tb250aCAmJiBtaW4uZGF5ID4gbWF4LmRheSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ21pbi5kYXkgPiBtYXguZGF5Jyk7XG4gICAgICAgICAgICAgICAgbWluLmRheSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsaWRhdGVDb2x1bW4oY29sdW1ucywgbmFtZSwgaW5kZXgsIG1pbiwgbWF4LCBsb3dlckJvdW5kcywgdXBwZXJCb3VuZHMpIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1ucy5maW5kKGMgPT4gYy5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxiID0gbG93ZXJCb3VuZHMuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgdWIgPSB1cHBlckJvdW5kcy5zbGljZSgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29sdW1uLm9wdGlvbnM7XG4gICAgICAgIGxldCBpbmRleE1pbiA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGluZGV4TWF4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRzID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3B0cy52YWx1ZTtcbiAgICAgICAgICAgIGxiW2luZGV4XSA9IG9wdHMudmFsdWU7XG4gICAgICAgICAgICB1YltpbmRleF0gPSBvcHRzLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBvcHRzLmRpc2FibGVkID0gKHZhbHVlIDwgbG93ZXJCb3VuZHNbaW5kZXhdIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUgPiB1cHBlckJvdW5kc1tpbmRleF0gfHxcbiAgICAgICAgICAgICAgICBkYXRlU29ydFZhbHVlKHViWzBdLCB1YlsxXSwgdWJbMl0sIHViWzNdLCB1Yls0XSkgPCBtaW4gfHxcbiAgICAgICAgICAgICAgICBkYXRlU29ydFZhbHVlKGxiWzBdLCBsYlsxXSwgbGJbMl0sIGxiWzNdLCBsYls0XSkgPiBtYXgpO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGluZGV4TWluID0gTWF0aC5taW4oaW5kZXhNaW4sIGkpO1xuICAgICAgICAgICAgICAgIGluZGV4TWF4ID0gTWF0aC5tYXgoaW5kZXhNYXgsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBjb2x1bW4uc2VsZWN0ZWRJbmRleCA9IGNsYW1wKGluZGV4TWluLCBjb2x1bW4uc2VsZWN0ZWRJbmRleCwgaW5kZXhNYXgpO1xuICAgICAgICBjb25zdCBvcHQgPSBjb2x1bW4ub3B0aW9uc1tzZWxlY3RlZEluZGV4XTtcbiAgICAgICAgaWYgKG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZ2V0IHRleHQoKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdGV4dCBvZiB0aGUgZm9ybWF0dGVkIGRhdGFcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmRpc3BsYXlGb3JtYXQgfHwgdGhpcy5waWNrZXJGb3JtYXQgfHwgREVGQVVMVF9GT1JNQVQ7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgIHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlckRhdGV0aW1lKHRlbXBsYXRlLCB0aGlzLmRhdGV0aW1lVmFsdWUsIHRoaXMubG9jYWxlKTtcbiAgICB9XG4gICAgaGFzVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0Rm9jdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVsKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlucHV0SWQsIHRleHQsIGRpc2FibGVkLCByZWFkb25seSwgaXNFeHBhbmRlZCwgZWwsIHBsYWNlaG9sZGVyIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgbGFiZWxJZCA9IGlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZmluZEl0ZW1MYWJlbChlbCk7XG4gICAgICAgIGNvbnN0IGFkZFBsYWNlaG9sZGVyQ2xhc3MgPSAodGV4dCA9PT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyICE9IG51bGwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAvLyBJZiBzZWxlY3RlZCB0ZXh0IGhhcyBiZWVuIHBhc3NlZCBpbiwgdXNlIHRoYXQgZmlyc3RcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHVzZSB0aGUgcGxhY2Vob2xkZXJcbiAgICAgICAgY29uc3QgZGF0ZXRpbWVUZXh0ID0gdGV4dCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IChwbGFjZWhvbGRlciAhPSBudWxsID8gcGxhY2Vob2xkZXIgOiAnJylcbiAgICAgICAgICAgIDogdGV4dDtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIHRoaXMubmFtZSwgdGhpcy52YWx1ZSwgdGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgcm9sZTogXCJjb21ib2JveFwiLCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtZXhwYW5kZWRcIjogYCR7aXNFeHBhbmRlZH1gLCBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdkYXRldGltZS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICdkYXRldGltZS1yZWFkb25seSc6IHJlYWRvbmx5LFxuICAgICAgICAgICAgICAgICdkYXRldGltZS1wbGFjZWhvbGRlcic6IGFkZFBsYWNlaG9sZGVyQ2xhc3MsXG4gICAgICAgICAgICAgICAgJ2luLWl0ZW0nOiBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbClcbiAgICAgICAgICAgIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImRhdGV0aW1lLXRleHRcIiB9LCBkYXRldGltZVRleHQpLCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbkJsdXI6IHRoaXMub25CbHVyLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgcmVmOiBidG5FbCA9PiB0aGlzLmJ1dHRvbkVsID0gYnRuRWwgfSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCI6aG9zdHtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6MTZweDttaW4taGVpZ2h0OjEuMmVtO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoyfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19Omhvc3QoLmluLWl0ZW0pe3Bvc2l0aW9uOnN0YXRpY306aG9zdCguZGF0ZXRpbWUtcGxhY2Vob2xkZXIpe2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKX06aG9zdCguZGF0ZXRpbWUtZGlzYWJsZWQpe29wYWNpdHk6LjM7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpe3BvaW50ZXItZXZlbnRzOm5vbmV9YnV0dG9ue2xlZnQ6MDt0b3A6MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtvdXRsaW5lOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGJ1dHRvbixbZGlyPXJ0bF0gYnV0dG9ue2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LmRhdGV0aW1lLXRleHR7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7LW1zLWZsZXg6MTtmbGV4OjE7bWluLWhlaWdodDppbmhlcml0O2RpcmVjdGlvbjpsdHI7b3ZlcmZsb3c6aW5oZXJpdH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmRhdGV0aW1lLXRleHQsW2Rpcj1ydGxdIC5kYXRldGltZS10ZXh0e2RpcmVjdGlvbjpydGx9Omhvc3R7LS1wbGFjZWhvbGRlci1jb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTstLXBhZGRpbmctdG9wOjEwcHg7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MTFweDstLXBhZGRpbmctc3RhcnQ6MTZweH1cIjsgfVxufTtcbmNvbnN0IGRpdnlDb2x1bW5zID0gKGNvbHVtbnMpID0+IHtcbiAgICBjb25zdCBjb2x1bW5zV2lkdGggPSBbXTtcbiAgICBsZXQgY29sO1xuICAgIGxldCB3aWR0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sID0gY29sdW1uc1tpXTtcbiAgICAgICAgY29sdW1uc1dpZHRoLnB1c2goMCk7XG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGNvbC5vcHRpb25zKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG9wdGlvbi50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh3aWR0aCA+IGNvbHVtbnNXaWR0aFtpXSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbnNXaWR0aFtpXSA9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb2x1bW5zV2lkdGgubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgoY29sdW1uc1dpZHRoWzBdLCBjb2x1bW5zV2lkdGhbMV0pO1xuICAgICAgICBjb2x1bW5zWzBdLmFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgY29sdW1uc1sxXS5hbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgY29sdW1uc1swXS5vcHRpb25zV2lkdGggPSBjb2x1bW5zWzFdLm9wdGlvbnNXaWR0aCA9IGAke3dpZHRoICogMTd9cHhgO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb2x1bW5zV2lkdGgubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgoY29sdW1uc1dpZHRoWzBdLCBjb2x1bW5zV2lkdGhbMl0pO1xuICAgICAgICBjb2x1bW5zWzBdLmFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgY29sdW1uc1sxXS5jb2x1bW5XaWR0aCA9IGAke2NvbHVtbnNXaWR0aFsxXSAqIDE3fXB4YDtcbiAgICAgICAgY29sdW1uc1swXS5vcHRpb25zV2lkdGggPSBjb2x1bW5zWzJdLm9wdGlvbnNXaWR0aCA9IGAke3dpZHRoICogMTd9cHhgO1xuICAgICAgICBjb2x1bW5zWzJdLmFsaWduID0gJ2xlZnQnO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbn07XG5jb25zdCBERUZBVUxUX0ZPUk1BVCA9ICdNTU0gRCwgWVlZWSc7XG5sZXQgZGF0ZXRpbWVJZHMgPSAwO1xuXG4vKipcclxuICogaU9TIFBpY2tlciBFbnRlciBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjI2KTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBpY2tlci13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG4vKipcclxuICogaU9TIFBpY2tlciBMZWF2ZSBBbmltYXRpb25cclxuICovXHJcbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gKGJhc2VFbCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcclxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxyXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjI2LCAwLjAxKTtcclxuICAgIHdyYXBwZXJBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBpY2tlci13cmFwcGVyJykpXHJcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJywgJ3RyYW5zbGF0ZVkoMTAwJSknKTtcclxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXHJcbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxyXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXHJcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcclxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xyXG59O1xuXG5jb25zdCBQaWNrZXIgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUga2V5Ym9hcmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSBvdmVybGF5IGlzIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBidXR0b25zIHRvIGJlIGRpc3BsYXllZCBhdCB0aGUgdG9wIG9mIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgZGlzbWlzc2luZyB0aGUgcGlja2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgYmFja2Ryb3Agd2lsbCBiZSBkaXNwbGF5ZWQgYmVoaW5kIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBwaWNrZXIgd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBpY2tlciB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gdGhpcy5idXR0b25zLmZpbmQoYiA9PiBiLnJvbGUgPT09ICdjYW5jZWwnKTtcbiAgICAgICAgICAgIGlmIChjYW5jZWxCdG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrKGNhbmNlbEJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyRGlkUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlcldpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlckRpZERpc21pc3NcIiwgNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIHBpY2tlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICAgICAgYXdhaXQgcHJlc2VudCh0aGlzLCAncGlja2VyRW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgaW9zRW50ZXJBbmltYXRpb24sIHVuZGVmaW5lZCk7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzbWlzcygpLCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBwaWNrZXIgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIHBpY2tlci5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgcGlja2VyLlxuICAgICAqIFNvbWUgZXhhbXBsZXMgaW5jbHVkZTogYGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIFwic2VsZWN0ZWRcImAsIGFuZCBgXCJiYWNrZHJvcFwiYC5cbiAgICAgKi9cbiAgICBkaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb25UaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kdXJhdGlvblRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdwaWNrZXJMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBpb3NMZWF2ZUFuaW1hdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcGlja2VyIGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uRGlkRGlzbWlzcygpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25QaWNrZXJEaWREaXNtaXNzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcGlja2VyIHdpbGwgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBvbldpbGxEaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblBpY2tlcldpbGxEaXNtaXNzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29sdW1uIHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIG5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uLlxuICAgICAqL1xuICAgIGdldENvbHVtbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSBuYW1lKSk7XG4gICAgfVxuICAgIGJ1dHRvbkNsaWNrKGJ1dHRvbikge1xuICAgICAgICAvLyBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBrZWVwIHRoZSB0aW1lIG9mIHRoZSBtb3N0IHJlY2VudCBidXR0b24gY2xpY2tcbiAgICAgICAgLy8gYSBoYW5kbGVyIGhhcyBiZWVuIHByb3ZpZGVkLCBleGVjdXRlIGl0XG4gICAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgICAgY29uc3Qgc2hvdWxkRGlzbWlzcyA9IHNhZmVDYWxsKGJ1dHRvbi5oYW5kbGVyLCB0aGlzLmdldFNlbGVjdGVkKCkpICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKHNob3VsZERpc21pc3MpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0ge307XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGNvbC5zZWxlY3RlZEluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IGNvbC5vcHRpb25zW2NvbC5zZWxlY3RlZEluZGV4XVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgc2VsZWN0ZWRbY29sLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHNlbGVjdGVkQ29sdW1uID8gc2VsZWN0ZWRDb2x1bW4udGV4dCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWRDb2x1bW4gPyBzZWxlY3RlZENvbHVtbi52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogaW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3M6IE9iamVjdC5hc3NpZ24oeyBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgW2BwaWNrZXItJHttb2RlfWBdOiB0cnVlIH0sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IGAkezIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YFxuICAgICAgICAgICAgfSwgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB2aXNpYmxlOiB0aGlzLnNob3dCYWNrZHJvcCwgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLXdyYXBwZXJcIiwgcm9sZTogXCJkaWFsb2dcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLXRvb2xiYXJcIiB9LCB0aGlzLmJ1dHRvbnMubWFwKGIgPT4gKGgoXCJkaXZcIiwgeyBjbGFzczogYnV0dG9uV3JhcHBlckNsYXNzKGIpIH0sIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmJ1dHRvbkNsaWNrKGIpLCBjbGFzczogYnV0dG9uQ2xhc3MoYikgfSwgYi50ZXh0KSkpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItY29sdW1uc1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItYWJvdmUtaGlnaGxpZ2h0XCIgfSksIHRoaXMucHJlc2VudGVkICYmIHRoaXMuY29sdW1ucy5tYXAoYyA9PiBoKFwiaW9uLXBpY2tlci1jb2x1bW5cIiwgeyBjb2w6IGMgfSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLWJlbG93LWhpZ2hsaWdodFwiIH0pKSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIi5zYy1pb24tcGlja2VyLW1kLWh7LS1ib3JkZXItcmFkaXVzOjA7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOjEwMCU7LS1tYXgtd2lkdGg6NTAwcHg7LS1taW4taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bGVmdDowO3RvcDowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX1bZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1tZC1oLCBbZGlyPXJ0bF0gLnNjLWlvbi1waWNrZXItbWQtaHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1waWNrZXItbWQtaHtkaXNwbGF5Om5vbmV9LnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItbWR7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjEwfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucGlja2VyLXdyYXBwZXIuc2MtaW9uLXBpY2tlci1tZHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0b319LnBpY2tlci10b29sYmFyLnNjLWlvbi1waWNrZXItbWR7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbnRhaW46c3RyaWN0O3otaW5kZXg6MX0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLW1ke2JvcmRlcjowO2ZvbnQtZmFtaWx5OmluaGVyaXR9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1tZDphY3RpdmUsIC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbWQ6Zm9jdXN7b3V0bGluZTpub25lfS5waWNrZXItY29sdW1ucy5zYy1pb24tcGlja2VyLW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwwKTtjb250YWluOnN0cmljdDtkaXJlY3Rpb246bHRyO292ZXJmbG93OmhpZGRlbn0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLW1kLCAucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLW1ke2Rpc3BsYXk6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5zYy1pb24tcGlja2VyLW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpOy0tYm9yZGVyLXdpZHRoOjAuNTVweCAwIDA7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMCwwLDAsMC4xMykpKSk7LS1oZWlnaHQ6MjYwcHg7Y29sb3I6dmFyKC0taW9uLWl0ZW0tY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCkpfS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtoZWlnaHQ6NDRweH0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLW1kLCAucGlja2VyLWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjEuMWVtO3BhZGRpbmctcmlnaHQ6MS4xZW07cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2hlaWdodDo0NHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbWQsIC5waWNrZXItYnV0dG9uLmFjdGl2YXRlZC5zYy1pb24tcGlja2VyLW1ke3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxLjFlbTtwYWRkaW5nLWlubGluZS1zdGFydDoxLjFlbTstd2Via2l0LXBhZGRpbmctZW5kOjEuMWVtO3BhZGRpbmctaW5saW5lLWVuZDoxLjFlbX19LnBpY2tlci1jb2x1bW5zLnNjLWlvbi1waWNrZXItbWR7aGVpZ2h0OjIxNnB4Oy13ZWJraXQtcGVyc3BlY3RpdmU6MTgwMHB4O3BlcnNwZWN0aXZlOjE4MDBweH0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLW1ke2xlZnQ6MDt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjgxcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMCwwLDAsLjEzKSkpKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLGxlZnQgYm90dG9tLGNvbG9yLXN0b3AoMjAlLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKSx0byhyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpIDIwJSxyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpKTt6LWluZGV4OjEwfVtkaXI9cnRsXS5zYy1pb24tcGlja2VyLW1kLWggLnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tcGlja2VyLW1kLWggLnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1tZCwgW2Rpcj1ydGxdLnNjLWlvbi1waWNrZXItbWQgLnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9LnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1tZHtsZWZ0OjA7dG9wOjExNXB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooOTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooOTBweCk7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTE5cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMCwwLDAsLjEzKSkpKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgYm90dG9tLGxlZnQgdG9wLGNvbG9yLXN0b3AoMzAlLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKSx0byhyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMGRlZyx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSAzMCUscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSk7ei1pbmRleDoxMX1bZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1tZC1oIC5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbWQsIFtkaXI9cnRsXSAuc2MtaW9uLXBpY2tlci1tZC1oIC5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbWQsIFtkaXI9cnRsXS5zYy1pb24tcGlja2VyLW1kIC5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfVwiOyB9XG59O1xuY29uc3QgYnV0dG9uV3JhcHBlckNsYXNzID0gKGJ1dHRvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFtgcGlja2VyLXRvb2xiYXItJHtidXR0b24ucm9sZX1gXTogYnV0dG9uLnJvbGUgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgJ3BpY2tlci10b29sYmFyLWJ1dHRvbic6IHRydWVcbiAgICB9O1xufTtcbmNvbnN0IGJ1dHRvbkNsYXNzID0gKGJ1dHRvbikgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgJ3BpY2tlci1idXR0b24nOiB0cnVlLCAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSB9LCBnZXRDbGFzc01hcChidXR0b24uY3NzQ2xhc3MpKTtcbn07XG5cbmNvbnN0IFBpY2tlckNvbHVtbkNtcCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMub3B0SGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5yb3RhdGVGYWN0b3IgPSAwO1xuICAgICAgICB0aGlzLnNjYWxlRmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMubm9BbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pb25QaWNrZXJDb2xDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlckNvbENoYW5nZVwiLCA3KTtcbiAgICB9XG4gICAgY29sQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBsZXQgcGlja2VyUm90YXRlRmFjdG9yID0gMDtcbiAgICAgICAgbGV0IHBpY2tlclNjYWxlRmFjdG9yID0gMC44MTtcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGlmIChtb2RlID09PSAnaW9zJykge1xuICAgICAgICAgICAgcGlja2VyUm90YXRlRmFjdG9yID0gLTAuNDY7XG4gICAgICAgICAgICBwaWNrZXJTY2FsZUZhY3RvciA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3RhdGVGYWN0b3IgPSBwaWNrZXJSb3RhdGVGYWN0b3I7XG4gICAgICAgIHRoaXMuc2NhbGVGYWN0b3IgPSBwaWNrZXJTY2FsZUZhY3RvcjtcbiAgICAgICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgIGVsOiB0aGlzLmVsLFxuICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdwaWNrZXItc3dpcGUnLFxuICAgICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICBvblN0YXJ0OiBldiA9PiB0aGlzLm9uU3RhcnQoZXYpLFxuICAgICAgICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICAgICAgICBvbkVuZDogZXYgPT4gdGhpcy5vbkVuZChldiksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB0aGlzLnRtcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgICAgICB9LCAyNTApO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgICAgICBjb25zdCBjb2xFbCA9IHRoaXMub3B0c0VsO1xuICAgICAgICBpZiAoY29sRWwpIHtcbiAgICAgICAgICAgIC8vIERPTSBSRUFEXG4gICAgICAgICAgICAvLyBXZSBwZXJmb20gYSBET00gcmVhZCBvdmVyIGEgcmVuZGVyZWQgaXRlbSwgdGhpcyBuZWVkcyB0byBoYXBwZW4gYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlclxuICAgICAgICAgICAgdGhpcy5vcHRIZWlnaHQgPSAoY29sRWwuZmlyc3RFbGVtZW50Q2hpbGQgPyBjb2xFbC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmSWQpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50bXJJZCk7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdENvbENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5pb25QaWNrZXJDb2xDaGFuZ2UuZW1pdCh0aGlzLmNvbCk7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkKHNlbGVjdGVkSW5kZXgsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc2VsZWN0ZWQgaW5kZXgsIHRoZW4gZmlndXJlIG91dCBpdCdzIHkgcG9zaXRpb25cbiAgICAgICAgLy8gaWYgdGhlcmUgaXNuJ3QgYSBzZWxlY3RlZCBpbmRleCwgdGhlbiBqdXN0IHVzZSB0aGUgdG9wIHkgcG9zaXRpb25cbiAgICAgICAgY29uc3QgeSA9IChzZWxlY3RlZEluZGV4ID4gLTEpID8gLShzZWxlY3RlZEluZGV4ICogdGhpcy5vcHRIZWlnaHQpIDogMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIC8vIHNldCB3aGF0IHkgcG9zaXRpb24gd2UncmUgYXRcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgICAgIHRoaXMudXBkYXRlKHksIGR1cmF0aW9uLCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbWl0Q29sQ2hhbmdlKCk7XG4gICAgfVxuICAgIHVwZGF0ZSh5LCBkdXJhdGlvbiwgc2F2ZVkpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdHNFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuc3VyZSB3ZSd2ZSBnb3QgYSBnb29kIHJvdW5kIG51bWJlciA6KVxuICAgICAgICBsZXQgdHJhbnNsYXRlWSA9IDA7XG4gICAgICAgIGxldCB0cmFuc2xhdGVaID0gMDtcbiAgICAgICAgY29uc3QgeyBjb2wsIHJvdGF0ZUZhY3RvciB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGNvbC5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbmRleEZvclkoLXkpO1xuICAgICAgICBjb25zdCBkdXJhdGlvblN0ciA9IChkdXJhdGlvbiA9PT0gMCkgPyAnJyA6IGR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgY29uc3Qgc2NhbGVTdHIgPSBgc2NhbGUoJHt0aGlzLnNjYWxlRmFjdG9yfSlgO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMub3B0c0VsLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGNvbC5vcHRpb25zW2ldO1xuICAgICAgICAgICAgY29uc3Qgb3B0T2Zmc2V0ID0gKGkgKiB0aGlzLm9wdEhlaWdodCkgKyB5O1xuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgaWYgKHJvdGF0ZUZhY3RvciAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0ZVggPSBvcHRPZmZzZXQgKiByb3RhdGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDw9IDkwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVaID0gOTA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IGByb3RhdGVYKCR7cm90YXRlWH1kZWcpIGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gLTk5OTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWiA9IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWSA9IG9wdE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRJbmRleCA9PT0gaTtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSBgdHJhbnNsYXRlM2QoMHB4LCR7dHJhbnNsYXRlWX1weCwke3RyYW5zbGF0ZVp9cHgpIGA7XG4gICAgICAgICAgICBpZiAodGhpcy5zY2FsZUZhY3RvciAhPT0gMSAmJiAhc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gKz0gc2NhbGVTdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMubm9BbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgb3B0LmR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkdXJhdGlvbiAhPT0gb3B0LmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3B0LmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uU3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRyYW5zZm9ybVxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybSAhPT0gb3B0LnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIG9wdC50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBpdGVtXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IG9wdC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIG9wdC5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChQSUNLRVJfT1BUX1NFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFBJQ0tFUl9PUFRfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbC5wcmV2U2VsZWN0ZWQgPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAoc2F2ZVkpIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdEluZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgICAvLyBoYXZlIG5vdCBzZXQgYSBsYXN0IGluZGV4IHlldFxuICAgICAgICAgICAgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5sYXN0SW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlY2VsZXJhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBzdGlsbCBkZWNlbGVyYXRpbmdcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgKj0gREVDRUxFUkFUSU9OX0ZSSUNUSU9OO1xuICAgICAgICAgICAgLy8gZG8gbm90IGxldCBpdCBnbyBzbG93ZXIgdGhhbiBhIHZlbG9jaXR5IG9mIDFcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAodGhpcy52ZWxvY2l0eSA+IDApXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heCh0aGlzLnZlbG9jaXR5LCAxKVxuICAgICAgICAgICAgICAgIDogTWF0aC5taW4odGhpcy52ZWxvY2l0eSwgLTEpO1xuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnkgKyB0aGlzLnZlbG9jaXR5O1xuICAgICAgICAgICAgaWYgKHkgPiB0aGlzLm1pblkpIHtcbiAgICAgICAgICAgICAgICAvLyB3aG9vcHMsIGl0J3MgdHJ5aW5nIHRvIHNjcm9sbCB1cCBmYXJ0aGVyIHRoYW4gdGhlIG9wdGlvbnMgd2UgaGF2ZSFcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5taW5ZO1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeSA8IHRoaXMubWF4WSkge1xuICAgICAgICAgICAgICAgIC8vIGdhaGgsIGl0J3MgdHJ5aW5nIHRvIHNjcm9sbCBkb3duIGZhcnRoZXIgdGhhbiB3ZSBjYW4hXG4gICAgICAgICAgICAgICAgeSA9IHRoaXMubWF4WTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHksIDAsIHRydWUpO1xuICAgICAgICAgICAgY29uc3Qgbm90TG9ja2VkSW4gPSAoTWF0aC5yb3VuZCh5KSAlIHRoaXMub3B0SGVpZ2h0ICE9PSAwKSB8fCAoTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgPiAxKTtcbiAgICAgICAgICAgIGlmIChub3RMb2NrZWRJbikge1xuICAgICAgICAgICAgICAgIC8vIGlzbid0IGxvY2tlZCBpbiB5ZXQsIGtlZXAgZGVjZWxlcmF0aW5nIHVudGlsIGl0IGlzXG4gICAgICAgICAgICAgICAgdGhpcy5yYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmRlY2VsZXJhdGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnkgJSB0aGlzLm9wdEhlaWdodCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3RpbGwgZ2V0IGxvY2tlZCBpbnRvIGEgcG9zaXRpb24gc28gb3B0aW9ucyBsaW5lIHVwXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gTWF0aC5hYnModGhpcy55ICUgdGhpcy5vcHRIZWlnaHQpO1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgdmVsb2NpdHkgaW4gdGhlIGRpcmVjdGlvbiBpdCBuZWVkcyB0byBzY3JvbGxcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAoY3VycmVudFBvcyA+ICh0aGlzLm9wdEhlaWdodCAvIDIpID8gMSA6IC0xKTtcbiAgICAgICAgICAgIHRoaXMuZGVjZWxlcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluZGV4Rm9yWSh5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyhNYXRoLnJvdW5kKHkgLyB0aGlzLm9wdEhlaWdodCkpLCAwKSwgdGhpcy5jb2wub3B0aW9ucy5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgLy8gVE9ETyBzaG91bGQgdGhpcyBjaGVjayBkaXNhYmxlZD9cbiAgICBvblN0YXJ0KGRldGFpbCkge1xuICAgICAgICAvLyBXZSBoYXZlIHRvIHByZXZlbnQgZGVmYXVsdCBpbiBvcmRlciB0byBibG9jayBzY3JvbGxpbmcgdW5kZXIgdGhlIHBpY2tlclxuICAgICAgICAvLyBidXQgd2UgRE8gTk9UIGhhdmUgdG8gc3RvcCBwcm9wYWdhdGlvbiwgc2luY2Ugd2Ugc3RpbGwgd2FudFxuICAgICAgICAvLyBzb21lIFwiY2xpY2tcIiBldmVudHMgdG8gY2FwdHVyZVxuICAgICAgICBkZXRhaWwuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGV0YWlsLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyByZXNldCBldmVyeXRoaW5nXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmSWQpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb2wub3B0aW9ucztcbiAgICAgICAgbGV0IG1pblkgPSAob3B0aW9ucy5sZW5ndGggLSAxKTtcbiAgICAgICAgbGV0IG1heFkgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9uc1tpXS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCBpKTtcbiAgICAgICAgICAgICAgICBtYXhZID0gTWF0aC5tYXgobWF4WSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taW5ZID0gLShtaW5ZICogdGhpcy5vcHRIZWlnaHQpO1xuICAgICAgICB0aGlzLm1heFkgPSAtKG1heFkgKiB0aGlzLm9wdEhlaWdodCk7XG4gICAgfVxuICAgIG9uTW92ZShkZXRhaWwpIHtcbiAgICAgICAgZGV0YWlsLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRldGFpbC5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzY3JvbGwgcG9zaXRpb24gcmVsYXRpdmUgdG8gcG9pbnRlciBzdGFydCBwb3NpdGlvblxuICAgICAgICBsZXQgeSA9IHRoaXMueSArIGRldGFpbC5kZWx0YVk7XG4gICAgICAgIGlmICh5ID4gdGhpcy5taW5ZKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGxpbmcgdXAgaGlnaGVyIHRoYW4gc2Nyb2xsIGFyZWFcbiAgICAgICAgICAgIHkgPSBNYXRoLnBvdyh5LCAwLjgpO1xuICAgICAgICAgICAgdGhpcy5ib3VuY2VGcm9tID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh5IDwgdGhpcy5tYXhZKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGxpbmcgZG93biBiZWxvdyBzY3JvbGwgYXJlYVxuICAgICAgICAgICAgeSArPSBNYXRoLnBvdyh0aGlzLm1heFkgLSB5LCAwLjkpO1xuICAgICAgICAgICAgdGhpcy5ib3VuY2VGcm9tID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmNlRnJvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoeSwgMCwgZmFsc2UpO1xuICAgIH1cbiAgICBvbkVuZChkZXRhaWwpIHtcbiAgICAgICAgaWYgKHRoaXMuYm91bmNlRnJvbSA+IDApIHtcbiAgICAgICAgICAgIC8vIGJvdW5jZSBiYWNrIHVwXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLm1pblksIDEwMCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmJvdW5jZUZyb20gPCAwKSB7XG4gICAgICAgICAgICAvLyBib3VuY2UgYmFjayBkb3duXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLm1heFksIDEwMCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2xhbXAoLU1BWF9QSUNLRVJfU1BFRUQsIGRldGFpbC52ZWxvY2l0eVkgKiAyMywgTUFYX1BJQ0tFUl9TUEVFRCk7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5ID09PSAwICYmIGRldGFpbC5kZWx0YVkgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRldGFpbC5ldmVudC50YXJnZXQuY2xvc2VzdCgnLnBpY2tlci1vcHQnKTtcbiAgICAgICAgICAgIGlmIChvcHQgJiYgb3B0Lmhhc0F0dHJpYnV0ZSgnb3B0LWluZGV4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHBhcnNlSW50KG9wdC5nZXRBdHRyaWJ1dGUoJ29wdC1pbmRleCcpLCAxMCksIFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ICs9IGRldGFpbC5kZWx0YVk7XG4gICAgICAgICAgICB0aGlzLmRlY2VsZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWZyZXNoKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICBsZXQgbWluID0gdGhpcy5jb2wub3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbWF4ID0gMDtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29sLm9wdGlvbnM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zW2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgbWluID0gTWF0aC5taW4obWluLCBpKTtcbiAgICAgICAgICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IHVwZGF0ZSBzZWxlY3RlZCB2YWx1ZSBpZiBjb2x1bW4gaGFzIGFcbiAgICAgICAgICogdmVsb2NpdHkgb2YgMC4gSWYgaXQgZG9lcyBub3QsIHRoZW4gdGhlXG4gICAgICAgICAqIGNvbHVtbiBpcyBhbmltYXRpbmcgbWlnaHQgbGFuZCBvblxuICAgICAgICAgKiBhIHZhbHVlIGRpZmZlcmVudCB0aGFuIHRoZSB2YWx1ZSBhdFxuICAgICAgICAgKiBzZWxlY3RlZEluZGV4XG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBjbGFtcChtaW4sIHRoaXMuY29sLnNlbGVjdGVkSW5kZXggfHwgMCwgbWF4KTtcbiAgICAgICAgaWYgKHRoaXMuY29sLnByZXZTZWxlY3RlZCAhPT0gc2VsZWN0ZWRJbmRleCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoc2VsZWN0ZWRJbmRleCAqIHRoaXMub3B0SGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh5LCBUUkFOU0lUSU9OX0RVUkFUSU9OLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuY29sO1xuICAgICAgICBjb25zdCBCdXR0b24gPSAnYnV0dG9uJztcbiAgICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAgICAgICAgICdwaWNrZXItY29sJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAncGlja2VyLW9wdHMtbGVmdCc6IHRoaXMuY29sLmFsaWduID09PSAnbGVmdCcsXG4gICAgICAgICAgICAgICAgJ3BpY2tlci1vcHRzLXJpZ2h0JzogdGhpcy5jb2wuYWxpZ24gPT09ICdyaWdodCdcbiAgICAgICAgICAgIH0sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgJ21heC13aWR0aCc6IHRoaXMuY29sLmNvbHVtbldpZHRoXG4gICAgICAgICAgICB9IH0sIGNvbC5wcmVmaXggJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItcHJlZml4XCIsIHN0eWxlOiB7IHdpZHRoOiBjb2wucHJlZml4V2lkdGggfSB9LCBjb2wucHJlZml4KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItb3B0c1wiLCBzdHlsZTogeyBtYXhXaWR0aDogY29sLm9wdGlvbnNXaWR0aCB9LCByZWY6IGVsID0+IHRoaXMub3B0c0VsID0gZWwgfSwgY29sLm9wdGlvbnMubWFwKChvLCBpbmRleCkgPT4gaChCdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3M6IHsgJ3BpY2tlci1vcHQnOiB0cnVlLCAncGlja2VyLW9wdC1kaXNhYmxlZCc6ICEhby5kaXNhYmxlZCB9LCBcIm9wdC1pbmRleFwiOiBpbmRleCB9LCBvLnRleHQpKSksIGNvbC5zdWZmaXggJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItc3VmZml4XCIsIHN0eWxlOiB7IHdpZHRoOiBjb2wuc3VmZml4V2lkdGggfSB9LCBjb2wuc3VmZml4KSkpKTtcbiAgICB9XG4gICAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICAgIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgICAgIFwiY29sXCI6IFtcImNvbENoYW5nZWRcIl1cbiAgICB9OyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiLnBpY2tlci1jb2x7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJTstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250YWluOmNvbnRlbnR9LnBpY2tlci1vcHRze3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO21heC13aWR0aDoxMDAlfS5waWNrZXItb3B0e2xlZnQ6MDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7Ym9yZGVyOjA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y29udGFpbjpzdHJpY3Q7b3ZlcmZsb3c6aGlkZGVuO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnBpY2tlci1vcHQsW2Rpcj1ydGxdIC5waWNrZXItb3B0e2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH0ucGlja2VyLW9wdC5waWNrZXItb3B0LWRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHQtZGlzYWJsZWR7b3BhY2l0eTowfS5waWNrZXItb3B0cy1sZWZ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnBpY2tlci1vcHRzLXJpZ2h0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucGlja2VyLW9wdDphY3RpdmUsLnBpY2tlci1vcHQ6Zm9jdXN7b3V0bGluZTpub25lfS5waWNrZXItcHJlZml4e3RleHQtYWxpZ246ZW5kfS5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4e3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3doaXRlLXNwYWNlOm5vd3JhcH0ucGlja2VyLXN1ZmZpeHt0ZXh0LWFsaWduOnN0YXJ0fS5waWNrZXItY29se3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnBpY2tlci1jb2x7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweH19LnBpY2tlci1vcHRzLC5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4e3RvcDo3N3B4Oy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToyMnB4O2xpbmUtaGVpZ2h0OjQycHg7cG9pbnRlci1ldmVudHM6bm9uZX0ucGlja2VyLW9wdHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtoZWlnaHQ6NDNweDstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MjJweDtsaW5lLWhlaWdodDo0MnB4Oy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0b30ucGlja2VyLW9wdC5waWNrZXItb3B0LXNlbGVjdGVkLC5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4e2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfVwiOyB9XG59O1xuY29uc3QgUElDS0VSX09QVF9TRUxFQ1RFRCA9ICdwaWNrZXItb3B0LXNlbGVjdGVkJztcbmNvbnN0IERFQ0VMRVJBVElPTl9GUklDVElPTiA9IDAuOTc7XG5jb25zdCBNQVhfUElDS0VSX1NQRUVEID0gOTA7XG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuXG5leHBvcnQgeyBEYXRldGltZSBhcyBpb25fZGF0ZXRpbWUsIFBpY2tlciBhcyBpb25fcGlja2VyLCBQaWNrZXJDb2x1bW5DbXAgYXMgaW9uX3BpY2tlcl9jb2x1bW4gfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=