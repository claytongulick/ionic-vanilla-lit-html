(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "../node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js":
/*!************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js ***!
  \************************************************************************/
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
    static get style() { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host-context([dir=rtl]) .datetime-text,[dir=rtl] .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400,#999);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}"; }
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
    static get style() { return ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h, [dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active, .picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios, .picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color,#fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:400;text-align:start}.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(180deg,var(--background,var(--ion-background-color,#fff)) 20%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:10}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(0deg,var(--background,var(--ion-background-color,#fff)) 30%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:11}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}"; }
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
    static get style() { return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;pointer-events:none}.picker-opt,.picker-opts,.picker-prefix,.picker-suffix{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}"; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lvbi1kYXRldGltZV8zLWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpSDs7Ozs7Ozs7Ozs7OztBQzNDakg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMvRjtBQUNpRTtBQUNoQztBQUNrRjtBQUN4RTtBQUNOOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRTtBQUNuSiwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0IsR0FBRyxzQkFBc0IsR0FBRyxzQkFBc0I7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHdCQUF3QjtBQUM3QixLQUFLLHlCQUF5QjtBQUM5QixLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLHlCQUF5QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QixpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyREFBVztBQUNwQyx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdURBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLDJEQUEyRCxPQUFPLHdCQUF3QixrQ0FBa0M7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxFQUFFLG9CQUFvQixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxFQUFFO0FBQzVDO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw4REFBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQWlFO0FBQ2hGLHFCQUFxQiwyREFBVTtBQUMvQjtBQUNBLHNCQUFzQiw4REFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFpQjtBQUN6QixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHlHQUF5RyxXQUFXO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFXO0FBQ3RDLGFBQWEsRUFBRSxFQUFFLDJEQUFDLFNBQVMseUJBQXlCLGlCQUFpQiwyREFBQyxZQUFZLDJIQUEySDtBQUM3TTtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixlQUFlLGtDQUFrQyxpQ0FBaUMsK0JBQStCLHFDQUFxQyxvQkFBb0IsYUFBYSxrQkFBa0IsZUFBZSxpQkFBaUIsMkNBQTJDLHVCQUF1QixtQkFBbUIsZ0JBQWdCLFVBQVUsNkZBQTZGLE1BQU0sbUJBQW1CLG9CQUFvQiwyQ0FBMkMsMENBQTBDLHVDQUF1Qyx1Q0FBdUMsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsK0JBQStCLDBCQUEwQixXQUFXLG9CQUFvQiwwQkFBMEIsb0JBQW9CLE9BQU8sT0FBTyxNQUFNLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixrQkFBa0IsV0FBVyxZQUFZLFNBQVMsdUJBQXVCLGVBQWUsd0JBQXdCLHFCQUFxQixnQkFBZ0IsYUFBYSxpREFBaUQsV0FBVyxZQUFZLFFBQVEseUJBQXlCLFNBQVMsZUFBZSxvQkFBb0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHdCQUF3QixzQkFBc0IsdUJBQXVCLG1CQUFtQixvQkFBb0IsY0FBYyxXQUFXLE9BQU8sbUJBQW1CLGNBQWMsaUJBQWlCLGlFQUFpRSxjQUFjLE1BQU0sbURBQW1ELG1CQUFtQixrQkFBa0Isc0JBQXNCLHFCQUFxQixFQUFFO0FBQzdzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxXQUFXO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RCwrREFBK0QsV0FBVztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekMsOEJBQThCLGdFQUFlO0FBQzdDLDZCQUE2QixnRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekMsOEJBQThCLGdFQUFlO0FBQzdDLDZCQUE2QixnRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLG9CQUFvQiwyREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBYztBQUN0QiwwQkFBMEIsMkRBQVc7QUFDckMsMkJBQTJCLDJEQUFXO0FBQ3RDLDJCQUEyQiwyREFBVztBQUN0QywwQkFBMEIsMkRBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0RBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0RBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsNkNBQTZDO0FBQ3RFO0FBQ0EsMkJBQTJCLEtBQUssVUFBVSxFQUFFLDREQUFXO0FBQ3ZELDJCQUEyQiwwQkFBMEI7QUFDckQsYUFBYSx3Q0FBd0MsRUFBRSwyREFBQyxrQkFBa0IsNkRBQTZELEdBQUcsMkRBQUMsU0FBUywwQ0FBMEMsRUFBRSwyREFBQyxTQUFTLDBCQUEwQix5QkFBeUIsMkRBQUMsU0FBUywrQkFBK0IsRUFBRSwyREFBQyxZQUFZLDRFQUE0RSxlQUFlLDJEQUFDLFNBQVMsMEJBQTBCLEVBQUUsMkRBQUMsU0FBUyxrQ0FBa0MsMkNBQTJDLDJEQUFDLHVCQUF1QixTQUFTLElBQUksMkRBQUMsU0FBUyxrQ0FBa0M7QUFDOWxCO0FBQ0EsY0FBYyxRQUFRLDJEQUFVLE9BQU87QUFDdkMsd0JBQXdCLDhCQUE4QixrQkFBa0IscUJBQXFCLGlCQUFpQixhQUFhLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtDQUFrQyxtQ0FBbUMsT0FBTyxNQUFNLGNBQWMsa0JBQWtCLFdBQVcsWUFBWSwyQ0FBMkMsZUFBZSx5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsYUFBYSw4REFBOEQsV0FBVyxZQUFZLFFBQVEsb0NBQW9DLGFBQWEsa0NBQWtDLG1DQUFtQyxPQUFPLFFBQVEsU0FBUyxpQkFBaUIsa0JBQWtCLGdCQUFnQixtQkFBbUIsd0NBQXdDLGdDQUFnQyxvQkFBb0IsYUFBYSxrQkFBa0IsMEJBQTBCLHNCQUFzQixtQkFBbUIsMkJBQTJCLDJCQUEyQixxQkFBcUIsNkJBQTZCLDZCQUE2QixpQ0FBaUMsaUNBQWlDLGlDQUFpQyw2QkFBNkIsZUFBZSxnQkFBZ0IsV0FBVyw2RkFBNkYsa0NBQWtDLGtCQUFrQixtQkFBbUIsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLGtDQUFrQyxXQUFXLHVCQUF1QixlQUFlLFVBQVUsaUNBQWlDLFNBQVMsb0JBQW9CLGdGQUFnRixhQUFhLGtDQUFrQyxvQkFBb0IsYUFBYSxrQkFBa0IscUJBQXFCLHVCQUF1Qiw0Q0FBNEMsZUFBZSxjQUFjLGdCQUFnQixxRkFBcUYsYUFBYSxvQkFBb0IscUJBQXFCLDhDQUE4Qyx1QkFBdUIsc0dBQXNHLGVBQWUsdURBQXVELGtDQUFrQyxvQkFBb0IsYUFBYSxZQUFZLDhDQUE4Qyx5Q0FBeUMsV0FBVyxPQUFPLGVBQWUscUZBQXFGLGdCQUFnQixxREFBcUQsZ0JBQWdCLGlCQUFpQiw2RUFBNkUsY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLGlCQUFpQixrQkFBa0IsY0FBYyxpQkFBaUIsWUFBWSx1QkFBdUIsdUNBQXVDLGVBQWUsNkZBQTZGLDZFQUE2RSxtQkFBbUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsd0JBQXdCLHdCQUF3QixrQ0FBa0MsYUFBYSwyQkFBMkIsbUJBQW1CLDBDQUEwQyxPQUFPLE1BQU0sbUNBQW1DLDJCQUEyQixjQUFjLGtCQUFrQixXQUFXLFlBQVksNENBQTRDLDJNQUEyTSxxS0FBcUssV0FBVyx5TkFBeU4sV0FBVyxZQUFZLFFBQVEsMENBQTBDLE9BQU8sVUFBVSxtQ0FBbUMsMkJBQTJCLGNBQWMsa0JBQWtCLFdBQVcsYUFBYSx5Q0FBeUMsMk1BQTJNLG1LQUFtSyxXQUFXLHlOQUF5TixXQUFXLFlBQVksUUFBUSxFQUFFO0FBQ3RoSztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBaUQsRUFBRSw0REFBVztBQUN4Rjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJEQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwSkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxXQUFXLEtBQUssV0FBVztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOERBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhLEVBQUUsaUJBQWlCLDJEQUFDLFNBQVMsaUNBQWlDLHlCQUF5QixFQUFFLGdCQUFnQiwyREFBQyxTQUFTLCtCQUErQiw2QkFBNkIsK0JBQStCLGdDQUFnQywyREFBQyxVQUFVLHlCQUF5QiwwREFBMEQsc0JBQXNCLDRCQUE0QiwyREFBQyxTQUFTLGlDQUFpQyx5QkFBeUIsRUFBRTtBQUNqZDtBQUNBLGNBQWMsUUFBUSwyREFBVSxPQUFPO0FBQ3ZDLDJCQUEyQjtBQUMzQjtBQUNBLE1BQU07QUFDTix3QkFBd0IscUJBQXFCLG9CQUFvQixhQUFhLGtCQUFrQixXQUFXLE9BQU8scUJBQXFCLHVCQUF1QixZQUFZLCtCQUErQix1QkFBdUIsZ0JBQWdCLGFBQWEsa0JBQWtCLFdBQVcsT0FBTyxlQUFlLFlBQVksT0FBTyxNQUFNLGNBQWMsa0JBQWtCLFdBQVcsU0FBUyxrQkFBa0IsdUJBQXVCLG1CQUFtQixlQUFlLGdCQUFnQixzQkFBc0IsMkRBQTJELFdBQVcsWUFBWSxRQUFRLGdDQUFnQyxvQkFBb0IscUJBQXFCLFVBQVUsa0JBQWtCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLGtCQUFrQix5QkFBeUIscUNBQXFDLGFBQWEsZUFBZSxlQUFlLDhCQUE4QixrQkFBa0IsV0FBVyxPQUFPLG1CQUFtQixlQUFlLGlCQUFpQixZQUFZLGlCQUFpQixrQkFBa0IsY0FBYyxpQkFBaUIsb0NBQW9DLDRCQUE0Qiw2RkFBNkYsWUFBWSxtQkFBbUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsd0JBQXdCLHdCQUF3QiwyQ0FBMkMsU0FBUyxvQkFBb0IsdURBQXVELG9DQUFvQyw0QkFBNEIsY0FBYyxlQUFlLGlCQUFpQixZQUFZLGVBQWUsZ0JBQWdCLGNBQWMsaUJBQWlCLGNBQWMsZUFBZSxhQUFhLGdCQUFnQix1Q0FBdUMsK0JBQStCLFlBQVksNENBQTRDLG9DQUFvQyx1QkFBdUIsbUNBQW1DLDJCQUEyQixvQkFBb0IsMkRBQTJELG9EQUFvRCw0Q0FBNEMsRUFBRTtBQUN6bkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0c7Ozs7Ozs7Ozs7Ozs7QUNoNUNoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFGIiwiZmlsZSI6IjE3XFxjaHVua3NcXDE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcclxuICogQHJldHVybiBSZXR1cm5zIGB0cnVlYCBvciBmYWxzZSBpZiB0aGUgcGx1Z2luIGlzIGF2YWlsYWJsZVxyXG4gKi9cclxuLyoqXHJcbiAqIFRyaWdnZXIgYSBzZWxlY3Rpb24gY2hhbmdlZCBoYXB0aWMgZXZlbnQuIEdvb2QgZm9yIG9uZS10aW1lIGV2ZW50c1xyXG4gKiAobm90IGZvciBnZXN0dXJlcylcclxuICovXHJcbmNvbnN0IGhhcHRpY1NlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XHJcbiAgICBpZiAoZW5naW5lKSB7XHJcbiAgICAgICAgZW5naW5lLnNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxyXG4gKi9cclxuY29uc3QgaGFwdGljU2VsZWN0aW9uU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xyXG4gICAgaWYgKGVuZ2luZSkge1xyXG4gICAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uU3RhcnQoKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXHJcbiAqL1xyXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcclxuICAgIGlmIChlbmdpbmUpIHtcclxuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgd2UgYXJlIGRvbmUgd2l0aCBhIGdlc3R1cmUuIFRoaXMgbmVlZHMgdG8gYmVcclxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXHJcbiAqL1xyXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25FbmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xyXG4gICAgaWYgKGVuZ2luZSkge1xyXG4gICAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uRW5kKCk7XHJcbiAgICB9XHJcbn07XG5cbmV4cG9ydCB7IGhhcHRpY1NlbGVjdGlvblN0YXJ0IGFzIGEsIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYiwgaGFwdGljU2VsZWN0aW9uRW5kIGFzIGMsIGhhcHRpY1NlbGVjdGlvbiBhcyBoIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGQgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtY2EwNDg4ZmMuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYW1wLCBmIGFzIGZpbmRJdGVtTGFiZWwsIGEgYXMgcmVuZGVySGlkZGVuSW5wdXQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBwIGFzIHBpY2tlckNvbnRyb2xsZXIsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBoIGFzIGhvc3RDb250ZXh0LCBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgfSBmcm9tICcuL2hhcHRpYy1jOGYxNDczZS5qcyc7XG5cbi8qKlxyXG4gKiBHZXRzIGEgZGF0ZSB2YWx1ZSBnaXZlbiBhIGZvcm1hdFxyXG4gKiBEZWZhdWx0cyB0byB0aGUgY3VycmVudCBkYXRlIGlmXHJcbiAqIG5vIGRhdGUgZ2l2ZW5cclxuICovXHJcbmNvbnN0IGdldERhdGVWYWx1ZSA9IChkYXRlLCBmb3JtYXQpID0+IHtcclxuICAgIGNvbnN0IGdldFZhbHVlID0gZ2V0VmFsdWVGcm9tRm9ybWF0KGRhdGUsIGZvcm1hdCk7XHJcbiAgICBpZiAoZ2V0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBnZXRWYWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRlZmF1bHREYXRlID0gcGFyc2VEYXRlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tRm9ybWF0KGRlZmF1bHREYXRlLCBmb3JtYXQpO1xyXG59O1xyXG5jb25zdCByZW5kZXJEYXRldGltZSA9ICh0ZW1wbGF0ZSwgdmFsdWUsIGxvY2FsZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW5zID0gW107XHJcbiAgICBsZXQgaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgRk9STUFUX0tFWVMuZm9yRWFjaCgoZm9ybWF0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZS5pbmRleE9mKGZvcm1hdC5mKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gJ3snICsgaW5kZXggKyAnfSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSByZW5kZXJUZXh0Rm9ybWF0KGZvcm1hdC5mLCB2YWx1ZVtmb3JtYXQua10sIHZhbHVlLCBsb2NhbGUpO1xyXG4gICAgICAgICAgICBpZiAoIWhhc1RleHQgJiYgdGV4dCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlW2Zvcm1hdC5rXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbiwgdGV4dCB8fCAnJyk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShmb3JtYXQuZiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCFoYXNUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKHRva2Vuc1tpXSwgdG9rZW5zW2kgKyAxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn07XHJcbmNvbnN0IHJlbmRlclRleHRGb3JtYXQgPSAoZm9ybWF0LCB2YWx1ZSwgZGF0ZSwgbG9jYWxlKSA9PiB7XHJcbiAgICBpZiAoKGZvcm1hdCA9PT0gRk9STUFUX0REREQgfHwgZm9ybWF0ID09PSBGT1JNQVRfREREKSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KSkuZ2V0RGF5KCk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9EREREKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxvY2FsZS5kYXlOYW1lcyA/IGxvY2FsZS5kYXlOYW1lcyA6IERBWV9OQU1FUylbdmFsdWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAobG9jYWxlLmRheVNob3J0TmFtZXMgPyBsb2NhbGUuZGF5U2hvcnROYW1lcyA6IERBWV9TSE9SVF9OQU1FUylbdmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBpZ25vcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9BKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmhvdXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IChkYXRlLmhvdXIgPCAxMiA/ICdBTScgOiAnUE0nKVxyXG4gICAgICAgICAgICA6IHZhbHVlID8gdmFsdWUudG9VcHBlckNhc2UoKSA6ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX2EpIHtcclxuICAgICAgICByZXR1cm4gZGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGUuaG91ciAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gKGRhdGUuaG91ciA8IDEyID8gJ2FtJyA6ICdwbScpXHJcbiAgICAgICAgICAgIDogdmFsdWUgfHwgJyc7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ZWSB8fCBmb3JtYXQgPT09IEZPUk1BVF9NTSB8fFxyXG4gICAgICAgIGZvcm1hdCA9PT0gRk9STUFUX0REIHx8IGZvcm1hdCA9PT0gRk9STUFUX0hIIHx8XHJcbiAgICAgICAgZm9ybWF0ID09PSBGT1JNQVRfbW0gfHwgZm9ybWF0ID09PSBGT1JNQVRfc3MpIHtcclxuICAgICAgICByZXR1cm4gdHdvRGlnaXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX1lZWVkpIHtcclxuICAgICAgICByZXR1cm4gZm91ckRpZ2l0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9NTU1NKSB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhbGUubW9udGhOYW1lcyA/IGxvY2FsZS5tb250aE5hbWVzIDogTU9OVEhfTkFNRVMpW3ZhbHVlIC0gMV07XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfTU1NKSB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhbGUubW9udGhTaG9ydE5hbWVzID8gbG9jYWxlLm1vbnRoU2hvcnROYW1lcyA6IE1PTlRIX1NIT1JUX05BTUVTKVt2YWx1ZSAtIDFdO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX2hoIHx8IGZvcm1hdCA9PT0gRk9STUFUX2gpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICcxMic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA+IDEyKSB7XHJcbiAgICAgICAgICAgIHZhbHVlIC09IDEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfaGggJiYgdmFsdWUgPCAxMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKCcwJyArIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufTtcclxuY29uc3QgZGF0ZVZhbHVlUmFuZ2UgPSAoZm9ybWF0LCBtaW4sIG1heCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0cyA9IFtdO1xyXG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX1lZWVkgfHwgZm9ybWF0ID09PSBGT1JNQVRfWVkpIHtcclxuICAgICAgICAvLyB5ZWFyXHJcbiAgICAgICAgaWYgKG1heC55ZWFyID09PSB1bmRlZmluZWQgfHwgbWluLnllYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbiBhbmQgbWF4IHllYXIgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSBtYXgueWVhcjsgaSA+PSBtaW4ueWVhcjsgaS0tKSB7XHJcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9NTU1NIHx8IGZvcm1hdCA9PT0gRk9STUFUX01NTSB8fFxyXG4gICAgICAgIGZvcm1hdCA9PT0gRk9STUFUX01NIHx8IGZvcm1hdCA9PT0gRk9STUFUX00gfHxcclxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9oaCB8fCBmb3JtYXQgPT09IEZPUk1BVF9oKSB7XHJcbiAgICAgICAgLy8gbW9udGggb3IgMTItaG91clxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfRERERCB8fCBmb3JtYXQgPT09IEZPUk1BVF9EREQgfHxcclxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9ERCB8fCBmb3JtYXQgPT09IEZPUk1BVF9EKSB7XHJcbiAgICAgICAgLy8gZGF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ISCB8fCBmb3JtYXQgPT09IEZPUk1BVF9IKSB7XHJcbiAgICAgICAgLy8gMjQtaG91clxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xyXG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfbW0gfHwgZm9ybWF0ID09PSBGT1JNQVRfbSkge1xyXG4gICAgICAgIC8vIG1pbnV0ZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcclxuICAgICAgICAgICAgb3B0cy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZvcm1hdCA9PT0gRk9STUFUX3NzIHx8IGZvcm1hdCA9PT0gRk9STUFUX3MpIHtcclxuICAgICAgICAvLyBzZWNvbmRzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9BIHx8IGZvcm1hdCA9PT0gRk9STUFUX2EpIHtcclxuICAgICAgICAvLyBBTS9QTVxyXG4gICAgICAgIG9wdHMucHVzaCgnYW0nLCAncG0nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRzO1xyXG59O1xyXG5jb25zdCBkYXRlU29ydFZhbHVlID0gKHllYXIsIG1vbnRoLCBkYXksIGhvdXIgPSAwLCBtaW51dGUgPSAwKSA9PiB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoYDEke2ZvdXJEaWdpdCh5ZWFyKX0ke3R3b0RpZ2l0KG1vbnRoKX0ke3R3b0RpZ2l0KGRheSl9JHt0d29EaWdpdChob3VyKX0ke3R3b0RpZ2l0KG1pbnV0ZSl9YCwgMTApO1xyXG59O1xyXG5jb25zdCBkYXRlRGF0YVNvcnRWYWx1ZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0ZVNvcnRWYWx1ZShkYXRhLnllYXIsIGRhdGEubW9udGgsIGRhdGEuZGF5LCBkYXRhLmhvdXIsIGRhdGEubWludXRlKTtcclxufTtcclxuY29uc3QgZGF5c0luTW9udGggPSAobW9udGgsIHllYXIpID0+IHtcclxuICAgIHJldHVybiAobW9udGggPT09IDQgfHwgbW9udGggPT09IDYgfHwgbW9udGggPT09IDkgfHwgbW9udGggPT09IDExKSA/IDMwIDogKG1vbnRoID09PSAyKSA/IGlzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4IDogMzE7XHJcbn07XHJcbmNvbnN0IGlzTGVhcFllYXIgPSAoeWVhcikgPT4ge1xyXG4gICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCAoeWVhciAlIDQwMCA9PT0gMCk7XHJcbn07XHJcbmNvbnN0IElTT184NjAxX1JFR0VYUCA9IC9eKFxcZHs0fXxbK1xcLV1cXGR7Nn0pKD86LShcXGR7Mn0pKD86LShcXGR7Mn0pKT8pPyg/OlQoXFxkezJ9KTooXFxkezJ9KSg/OjooXFxkezJ9KSg/OlxcLihcXGR7M30pKT8pPyg/OihaKXwoWytcXC1dKShcXGR7Mn0pKD86OihcXGR7Mn0pKT8pPyk/JC87XHJcbmNvbnN0IFRJTUVfUkVHRVhQID0gL14oKFxcZHsyfSk6KFxcZHsyfSkoPzo6KFxcZHsyfSkoPzpcXC4oXFxkezN9KSk/KT8oPzooWil8KFsrXFwtXSkoXFxkezJ9KSg/OjooXFxkezJ9KSk/KT8pPyQvO1xyXG5jb25zdCBwYXJzZURhdGUgPSAodmFsKSA9PiB7XHJcbiAgICAvLyBtYW51YWxseSBwYXJzZSBJUzAgY3V6IERhdGUucGFyc2UgY2Fubm90IGJlIHRydXN0ZWRcclxuICAgIC8vIElTTyA4NjAxIGZvcm1hdDogMTk5NC0xMi0xNVQxMzo0NzoyMFpcclxuICAgIGxldCBwYXJzZSA9IG51bGw7XHJcbiAgICBpZiAodmFsICE9IG51bGwgJiYgdmFsICE9PSAnJykge1xyXG4gICAgICAgIC8vIHRyeSBwYXJzaW5nIGZvciBqdXN0IHRpbWUgZmlyc3QsIEhIOk1NXHJcbiAgICAgICAgcGFyc2UgPSBUSU1FX1JFR0VYUC5leGVjKHZhbCk7XHJcbiAgICAgICAgaWYgKHBhcnNlKSB7XHJcbiAgICAgICAgICAgIC8vIGFkanVzdCB0aGUgYXJyYXkgc28gaXQgZml0cyBuaWNlbHkgd2l0aCB0aGUgZGF0ZXRpbWUgcGFyc2VcclxuICAgICAgICAgICAgcGFyc2UudW5zaGlmdCh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIHBhcnNlWzJdID0gcGFyc2VbM10gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0cnkgcGFyc2luZyBmb3IgZnVsbCBJU08gZGF0ZXRpbWVcclxuICAgICAgICAgICAgcGFyc2UgPSBJU09fODYwMV9SRUdFWFAuZXhlYyh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYXJzZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vIHdhc24ndCBhYmxlIHRvIHBhcnNlIHRoZSBJU08gZGF0ZXRpbWVcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gZW5zdXJlIGFsbCB0aGUgcGFyc2UgdmFsdWVzIGV4aXN0IHdpdGggYXQgbGVhc3QgMFxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICBwYXJzZVtpXSA9IHBhcnNlW2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChwYXJzZVtpXSwgMTApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgbGV0IHR6T2Zmc2V0ID0gMDtcclxuICAgIGlmIChwYXJzZVs5XSAmJiBwYXJzZVsxMF0pIHtcclxuICAgICAgICAvLyBob3Vyc1xyXG4gICAgICAgIHR6T2Zmc2V0ID0gcGFyc2VJbnQocGFyc2VbMTBdLCAxMCkgKiA2MDtcclxuICAgICAgICBpZiAocGFyc2VbMTFdKSB7XHJcbiAgICAgICAgICAgIC8vIG1pbnV0ZXNcclxuICAgICAgICAgICAgdHpPZmZzZXQgKz0gcGFyc2VJbnQocGFyc2VbMTFdLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJzZVs5XSA9PT0gJy0nKSB7XHJcbiAgICAgICAgICAgIC8vICsgb3IgLVxyXG4gICAgICAgICAgICB0ek9mZnNldCAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHllYXI6IHBhcnNlWzFdLFxyXG4gICAgICAgIG1vbnRoOiBwYXJzZVsyXSxcclxuICAgICAgICBkYXk6IHBhcnNlWzNdLFxyXG4gICAgICAgIGhvdXI6IHBhcnNlWzRdLFxyXG4gICAgICAgIG1pbnV0ZTogcGFyc2VbNV0sXHJcbiAgICAgICAgc2Vjb25kOiBwYXJzZVs2XSxcclxuICAgICAgICBtaWxsaXNlY29uZDogcGFyc2VbN10sXHJcbiAgICAgICAgdHpPZmZzZXQsXHJcbiAgICB9O1xyXG59O1xyXG4vKipcclxuICogQ29udmVydHMgYSB2YWxpZCBVVEMgZGF0ZXRpbWUgc3RyaW5nXHJcbiAqIFRvIHRoZSB1c2VyJ3MgbG9jYWwgdGltZXpvbmVcclxuICogTm90ZTogVGhpcyBpcyBub3QgbWVhbnQgZm9yIHRpbWUgc3RyaW5nc1xyXG4gKiBzdWNoIGFzIFwiMDE6NDdcIlxyXG4gKi9cclxuY29uc3QgZ2V0TG9jYWxEYXRlVGltZSA9IChkYXRlU3RyaW5nID0gJycpID0+IHtcclxuICAgIC8qKlxyXG4gICAgICogSWYgdXNlciBwYXNzZWQgaW4gdW5kZWZpbmVkXHJcbiAgICAgKiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIHRoZVxyXG4gICAgICogZW1wdHkgc3RyaW5nIHNpbmNlIHRoZSByZXN0XHJcbiAgICAgKiBvZiB0aGlzIGZ1bmN0aW9ucyBleHBlY3RzXHJcbiAgICAgKiBhIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBpZiAoZGF0ZVN0cmluZyA9PT0gdW5kZWZpbmVkIHx8IGRhdGVTdHJpbmcgPT09IG51bGwpIHtcclxuICAgICAgICBkYXRlU3RyaW5nID0gJyc7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZXMgdGhhdCBZWVlZLU1NLURELCBZWVlZLU1NLFxyXG4gICAgICogWVlZWS1ERCwgZXRjIGRvZXMgbm90IGdldCBhZmZlY3RlZFxyXG4gICAgICogYnkgdGltZXpvbmVzIGFuZCBzdGF5cyBvbiB0aGUgZGF5L21vbnRoXHJcbiAgICAgKiB0aGF0IHRoZSB1c2VyIHByb3ZpZGVkXHJcbiAgICAgKi9cclxuICAgIGlmIChkYXRlU3RyaW5nLmxlbmd0aCA9PT0gMTAgfHxcclxuICAgICAgICBkYXRlU3RyaW5nLmxlbmd0aCA9PT0gNykge1xyXG4gICAgICAgIGRhdGVTdHJpbmcgKz0gJyAnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0ZSA9ICh0eXBlb2YgZGF0ZVN0cmluZyA9PT0gJ3N0cmluZycgJiYgZGF0ZVN0cmluZy5sZW5ndGggPiAwKSA/IG5ldyBEYXRlKGRhdGVTdHJpbmcpIDogbmV3IERhdGUoKTtcclxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XHJcbn07XHJcbmNvbnN0IHVwZGF0ZURhdGUgPSAoZXhpc3RpbmdEYXRhLCBuZXdEYXRhKSA9PiB7XHJcbiAgICBpZiAoIW5ld0RhdGEgfHwgdHlwZW9mIG5ld0RhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxEYXRlVGltZSA9IGdldExvY2FsRGF0ZVRpbWUobmV3RGF0YSk7XHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obG9jYWxEYXRlVGltZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgICAgIG5ld0RhdGEgPSBsb2NhbERhdGVUaW1lLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5ld0RhdGEgJiYgbmV3RGF0YSAhPT0gJycpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0RhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIC8vIG5ldyBkYXRlIGlzIGEgc3RyaW5nLCBhbmQgaG9wZWZ1bGx5IGluIHRoZSBJU08gZm9ybWF0XHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgaXQgdG8gb3VyIERhdGV0aW1lRGF0YSBpZiBhIHZhbGlkIElTT1xyXG4gICAgICAgICAgICBuZXdEYXRhID0gcGFyc2VEYXRlKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICBpZiAobmV3RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc3VjY2Vzc2Z1bGx5IHBhcnNlZCB0aGUgSVNPIHN0cmluZyB0byBvdXIgRGF0ZXRpbWVEYXRhXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGV4aXN0aW5nRGF0YSwgbmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgobmV3RGF0YS55ZWFyIHx8IG5ld0RhdGEuaG91ciB8fCBuZXdEYXRhLm1vbnRoIHx8IG5ld0RhdGEuZGF5IHx8IG5ld0RhdGEubWludXRlIHx8IG5ld0RhdGEuc2Vjb25kKSkge1xyXG4gICAgICAgICAgICAvLyBuZXdEYXRhIGlzIGZyb20gb2YgYSBkYXRldGltZSBwaWNrZXIncyBzZWxlY3RlZCB2YWx1ZXNcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBleGlzdGluZyBEYXRldGltZURhdGEgZGF0YSB3aXRoIHRoZSBuZXcgdmFsdWVzXHJcbiAgICAgICAgICAgIC8vIGRvIHNvbWUgbWFnaWMgZm9yIDEyLWhvdXIgdmFsdWVzXHJcbiAgICAgICAgICAgIGlmIChuZXdEYXRhLmFtcG0gJiYgbmV3RGF0YS5ob3VyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhLmhvdXIudmFsdWUgPSAobmV3RGF0YS5hbXBtLnZhbHVlID09PSAncG0nKVxyXG4gICAgICAgICAgICAgICAgICAgID8gKG5ld0RhdGEuaG91ci52YWx1ZSA9PT0gMTIgPyAxMiA6IG5ld0RhdGEuaG91ci52YWx1ZSArIDEyKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKG5ld0RhdGEuaG91ci52YWx1ZSA9PT0gMTIgPyAwIDogbmV3RGF0YS5ob3VyLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBtZXJnZSBuZXcgdmFsdWVzIGZyb20gdGhlIHBpY2tlcidzIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAvLyB0byB0aGUgZXhpc3RpbmcgRGF0ZXRpbWVEYXRhIHZhbHVlc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdEYXRhW2tleV0gPSBuZXdEYXRhW2tleV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5ld0RhdGEuYW1wbSkge1xyXG4gICAgICAgICAgICAvLyBFdmVuIHRob3VnaCBpbiB0aGUgcGlja2VyIGNvbHVtbiBob3VyIHZhbHVlcyBhcmUgYmV0d2VlbiAxIGFuZCAxMiwgdGhlIGhvdXIgdmFsdWUgaXMgYWN0dWFsbHkgbm9ybWFsaXplZFxyXG4gICAgICAgICAgICAvLyB0byBbMCwgMjNdIGludGVydmFsLiBCZWNhdXNlIG9mIHRoaXMgd2hlbiBjaGFuZ2luZyBiZXR3ZWVuIEFNIGFuZCBQTSB3ZSBoYXZlIHRvIHVwZGF0ZSB0aGUgaG91ciBzbyBpdCBwb2ludHNcclxuICAgICAgICAgICAgLy8gdG8gdGhlIGNvcnJlY3QgSEggaG91clxyXG4gICAgICAgICAgICBuZXdEYXRhLmhvdXIgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3RGF0YS5ob3VyXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdEYXRhLmhvdXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA6IChuZXdEYXRhLmFtcG0udmFsdWUgPT09ICdwbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoZXhpc3RpbmdEYXRhLmhvdXIgPCAxMiA/IGV4aXN0aW5nRGF0YS5ob3VyICsgMTIgOiBleGlzdGluZ0RhdGEuaG91cilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoZXhpc3RpbmdEYXRhLmhvdXIgPj0gMTIgPyBleGlzdGluZ0RhdGEuaG91ciAtIDEyIDogZXhpc3RpbmdEYXRhLmhvdXIpKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBleGlzdGluZ0RhdGFbJ2hvdXInXSA9IG5ld0RhdGFbJ2hvdXInXS52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGV3dywgaW52YWxpZCBkYXRhXHJcbiAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBwYXJzaW5nIGRhdGU6IFwiJHtuZXdEYXRhfVwiLiBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIElTTyA4NjAxIGRhdGV0aW1lIGZvcm1hdDogaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVgKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIGJsYW5rIGRhdGEsIGNsZWFyIGV2ZXJ5dGhpbmcgb3V0XHJcbiAgICAgICAgZm9yIChjb25zdCBrIGluIGV4aXN0aW5nRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdEYXRhLmhhc093blByb3BlcnR5KGspKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZXhpc3RpbmdEYXRhW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5jb25zdCBwYXJzZVRlbXBsYXRlID0gKHRlbXBsYXRlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXRzID0gW107XHJcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJyAnKTtcclxuICAgIEZPUk1BVF9LRVlTLmZvckVhY2goZm9ybWF0ID0+IHtcclxuICAgICAgICBpZiAoZm9ybWF0LmYubGVuZ3RoID4gMSAmJiB0ZW1wbGF0ZS5pbmRleE9mKGZvcm1hdC5mKSA+IC0xICYmIHRlbXBsYXRlLmluZGV4T2YoZm9ybWF0LmYgKyBmb3JtYXQuZi5jaGFyQXQoMCkpIDwgMCkge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZm9ybWF0LmYsICcgJyArIGZvcm1hdC5mICsgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHdvcmRzID0gdGVtcGxhdGUuc3BsaXQoJyAnKS5maWx0ZXIodyA9PiB3Lmxlbmd0aCA+IDApO1xyXG4gICAgd29yZHMuZm9yRWFjaCgod29yZCwgaSkgPT4ge1xyXG4gICAgICAgIEZPUk1BVF9LRVlTLmZvckVhY2goZm9ybWF0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHdvcmQgPT09IGZvcm1hdC5mKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod29yZCA9PT0gRk9STUFUX0EgfHwgd29yZCA9PT0gRk9STUFUX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGZvcm1hdCBpcyBhbiBhbS9wbSBmb3JtYXQsIHNvIGl0J3MgYW4gXCJhXCIgb3IgXCJBXCJcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGZvcm1hdHMuaW5kZXhPZihGT1JNQVRfaCkgPCAwICYmIGZvcm1hdHMuaW5kZXhPZihGT1JNQVRfaGgpIDwgMCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFMSURfQU1QTV9QUkVGSVguaW5kZXhPZih3b3Jkc1tpIC0gMV0pID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZW1wbGF0ZSBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSAxMi1ob3VyIGZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvciB0aGlzIGFtL3BtIGZvcm1hdCBkb2Vzbid0IGhhdmUgYSBob3VyLCBtaW51dGUsIG9yIHNlY29uZCBmb3JtYXQgaW1tZWRpYXRlbHkgYmVmb3JlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIGRvIG5vdCB0cmVhdCB0aGlzIHdvcmQgXCJhXCIgb3IgXCJBXCIgYXMgdGhlIGFtL3BtIGZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9ybWF0cy5wdXNoKHdvcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3JtYXRzO1xyXG59O1xyXG5jb25zdCBnZXRWYWx1ZUZyb21Gb3JtYXQgPSAoZGF0ZSwgZm9ybWF0KSA9PiB7XHJcbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfQSB8fCBmb3JtYXQgPT09IEZPUk1BVF9hKSB7XHJcbiAgICAgICAgcmV0dXJuIChkYXRlLmhvdXIgPCAxMiA/ICdhbScgOiAncG0nKTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9oaCB8fCBmb3JtYXQgPT09IEZPUk1BVF9oKSB7XHJcbiAgICAgICAgcmV0dXJuIChkYXRlLmhvdXIgPiAxMiA/IGRhdGUuaG91ciAtIDEyIDogKGRhdGUuaG91ciA9PT0gMCA/IDEyIDogZGF0ZS5ob3VyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZVtjb252ZXJ0Rm9ybWF0VG9LZXkoZm9ybWF0KV07XHJcbn07XHJcbmNvbnN0IGNvbnZlcnRGb3JtYXRUb0tleSA9IChmb3JtYXQpID0+IHtcclxuICAgIGZvciAoY29uc3QgayBpbiBGT1JNQVRfS0VZUykge1xyXG4gICAgICAgIGlmIChGT1JNQVRfS0VZU1trXS5mID09PSBmb3JtYXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZPUk1BVF9LRVlTW2tdLms7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgY29udmVydERhdGFUb0lTTyA9IChkYXRhKSA9PiB7XHJcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxyXG4gICAgbGV0IHJ0biA9ICcnO1xyXG4gICAgaWYgKGRhdGEueWVhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gWVlZWVxyXG4gICAgICAgIHJ0biA9IGZvdXJEaWdpdChkYXRhLnllYXIpO1xyXG4gICAgICAgIGlmIChkYXRhLm1vbnRoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gWVlZWS1NTVxyXG4gICAgICAgICAgICBydG4gKz0gJy0nICsgdHdvRGlnaXQoZGF0YS5tb250aCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBZWVlZLU1NLUREXHJcbiAgICAgICAgICAgICAgICBydG4gKz0gJy0nICsgdHdvRGlnaXQoZGF0YS5kYXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaG91ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFRISDptbTpTU1xyXG4gICAgICAgICAgICAgICAgICAgIHJ0biArPSBgVCR7dHdvRGlnaXQoZGF0YS5ob3VyKX06JHt0d29EaWdpdChkYXRhLm1pbnV0ZSl9OiR7dHdvRGlnaXQoZGF0YS5zZWNvbmQpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWlsbGlzZWNvbmQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlZWVktTU0tRERUSEg6bW06U1MuU1NTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0biArPSAnLicgKyB0aHJlZURpZ2l0KGRhdGEubWlsbGlzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50ek9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlZWVktTU0tRERUSEg6bW06U1NaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0biArPSAnWic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBZWVlZLU1NLUREVEhIOm1tOlNTKy8tSEg6bW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRuICs9IChkYXRhLnR6T2Zmc2V0ID4gMCA/ICcrJyA6ICctJykgKyB0d29EaWdpdChNYXRoLmZsb29yKE1hdGguYWJzKGRhdGEudHpPZmZzZXQgLyA2MCkpKSArICc6JyArIHR3b0RpZ2l0KGRhdGEudHpPZmZzZXQgJSA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGF0YS5ob3VyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBISDptbVxyXG4gICAgICAgIHJ0biA9IHR3b0RpZ2l0KGRhdGEuaG91cikgKyAnOicgKyB0d29EaWdpdChkYXRhLm1pbnV0ZSk7XHJcbiAgICAgICAgaWYgKGRhdGEuc2Vjb25kICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gSEg6bW06U1NcclxuICAgICAgICAgICAgcnRuICs9ICc6JyArIHR3b0RpZ2l0KGRhdGEuc2Vjb25kKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEubWlsbGlzZWNvbmQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSEg6bW06U1MuU1NTXHJcbiAgICAgICAgICAgICAgICBydG4gKz0gJy4nICsgdGhyZWVEaWdpdChkYXRhLm1pbGxpc2Vjb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBydG47XHJcbn07XHJcbi8qKlxyXG4gKiBVc2UgdG8gY29udmVydCBhIHN0cmluZyBvZiBjb21tYSBzZXBhcmF0ZWQgc3RyaW5ncyBvclxyXG4gKiBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgY2xlYW4gdXAgYW55IHVzZXIgaW5wdXRcclxuICovXHJcbmNvbnN0IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzID0gKGlucHV0LCB0eXBlKSA9PiB7XHJcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIHN0cmluZyB0byBhbiBhcnJheSBvZiBzdHJpbmdzXHJcbiAgICAgICAgLy8gYXV0byByZW1vdmUgYW55IFtdIGNoYXJhY3RlcnNcclxuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xcW3xcXF0vZywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVzO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgICAgLy8gdHJpbSB1cCBlYWNoIHN0cmluZyB2YWx1ZVxyXG4gICAgICAgIHZhbHVlcyA9IGlucHV0Lm1hcCh2YWwgPT4gdmFsLnRvU3RyaW5nKCkudHJpbSgpKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZXMgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIFwiJHt0eXBlfU5hbWVzXCIuIE11c3QgYmUgYW4gYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSBjb21tYSBzZXBhcmF0ZWQgc3RyaW5nLmApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufTtcclxuLyoqXHJcbiAqIFVzZSB0byBjb252ZXJ0IGEgc3RyaW5nIG9mIGNvbW1hIHNlcGFyYXRlZCBudW1iZXJzIG9yXHJcbiAqIGFuIGFycmF5IG9mIG51bWJlcnMsIGFuZCBjbGVhbiB1cCBhbnkgdXNlciBpbnB1dFxyXG4gKi9cclxuY29uc3QgY29udmVydFRvQXJyYXlPZk51bWJlcnMgPSAoaW5wdXQsIHR5cGUpID0+IHtcclxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gY29udmVydCB0aGUgc3RyaW5nIHRvIGFuIGFycmF5IG9mIHN0cmluZ3NcclxuICAgICAgICAvLyBhdXRvIHJlbW92ZSBhbnkgd2hpdGVzcGFjZSBhbmQgW10gY2hhcmFjdGVyc1xyXG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXFxbfFxcXXxcXHMvZywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVzO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgICAgLy8gZW5zdXJlIGVhY2ggdmFsdWUgaXMgYW4gYWN0dWFsIG51bWJlciBpbiB0aGUgcmV0dXJuZWQgYXJyYXlcclxuICAgICAgICB2YWx1ZXMgPSBpbnB1dFxyXG4gICAgICAgICAgICAubWFwKChudW0pID0+IHBhcnNlSW50KG51bSwgMTApKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGlzRmluaXRlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhbHVlcyA9IFtpbnB1dF07XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBcIiR7dHlwZX1WYWx1ZXNcIi4gTXVzdCBiZSBhbiBhcnJheSBvZiBudW1iZXJzLCBvciBhIGNvbW1hIHNlcGFyYXRlZCBzdHJpbmcgb2YgbnVtYmVycy5gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbn07XHJcbmNvbnN0IHR3b0RpZ2l0ID0gKHZhbCkgPT4ge1xyXG4gICAgcmV0dXJuICgnMCcgKyAodmFsICE9PSB1bmRlZmluZWQgPyBNYXRoLmFicyh2YWwpIDogJzAnKSkuc2xpY2UoLTIpO1xyXG59O1xyXG5jb25zdCB0aHJlZURpZ2l0ID0gKHZhbCkgPT4ge1xyXG4gICAgcmV0dXJuICgnMDAnICsgKHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5hYnModmFsKSA6ICcwJykpLnNsaWNlKC0zKTtcclxufTtcclxuY29uc3QgZm91ckRpZ2l0ID0gKHZhbCkgPT4ge1xyXG4gICAgcmV0dXJuICgnMDAwJyArICh2YWwgIT09IHVuZGVmaW5lZCA/IE1hdGguYWJzKHZhbCkgOiAnMCcpKS5zbGljZSgtNCk7XHJcbn07XHJcbmNvbnN0IEZPUk1BVF9ZWVlZID0gJ1lZWVknO1xyXG5jb25zdCBGT1JNQVRfWVkgPSAnWVknO1xyXG5jb25zdCBGT1JNQVRfTU1NTSA9ICdNTU1NJztcclxuY29uc3QgRk9STUFUX01NTSA9ICdNTU0nO1xyXG5jb25zdCBGT1JNQVRfTU0gPSAnTU0nO1xyXG5jb25zdCBGT1JNQVRfTSA9ICdNJztcclxuY29uc3QgRk9STUFUX0REREQgPSAnRERERCc7XHJcbmNvbnN0IEZPUk1BVF9EREQgPSAnREREJztcclxuY29uc3QgRk9STUFUX0REID0gJ0REJztcclxuY29uc3QgRk9STUFUX0QgPSAnRCc7XHJcbmNvbnN0IEZPUk1BVF9ISCA9ICdISCc7XHJcbmNvbnN0IEZPUk1BVF9IID0gJ0gnO1xyXG5jb25zdCBGT1JNQVRfaGggPSAnaGgnO1xyXG5jb25zdCBGT1JNQVRfaCA9ICdoJztcclxuY29uc3QgRk9STUFUX21tID0gJ21tJztcclxuY29uc3QgRk9STUFUX20gPSAnbSc7XHJcbmNvbnN0IEZPUk1BVF9zcyA9ICdzcyc7XHJcbmNvbnN0IEZPUk1BVF9zID0gJ3MnO1xyXG5jb25zdCBGT1JNQVRfQSA9ICdBJztcclxuY29uc3QgRk9STUFUX2EgPSAnYSc7XHJcbmNvbnN0IEZPUk1BVF9LRVlTID0gW1xyXG4gICAgeyBmOiBGT1JNQVRfWVlZWSwgazogJ3llYXInIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9NTU1NLCBrOiAnbW9udGgnIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9ERERELCBrOiAnZGF5JyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfTU1NLCBrOiAnbW9udGgnIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9EREQsIGs6ICdkYXknIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9ZWSwgazogJ3llYXInIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9NTSwgazogJ21vbnRoJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfREQsIGs6ICdkYXknIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9ISCwgazogJ2hvdXInIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9oaCwgazogJ2hvdXInIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9tbSwgazogJ21pbnV0ZScgfSxcclxuICAgIHsgZjogRk9STUFUX3NzLCBrOiAnc2Vjb25kJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfTSwgazogJ21vbnRoJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfRCwgazogJ2RheScgfSxcclxuICAgIHsgZjogRk9STUFUX0gsIGs6ICdob3VyJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfaCwgazogJ2hvdXInIH0sXHJcbiAgICB7IGY6IEZPUk1BVF9tLCBrOiAnbWludXRlJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfcywgazogJ3NlY29uZCcgfSxcclxuICAgIHsgZjogRk9STUFUX0EsIGs6ICdhbXBtJyB9LFxyXG4gICAgeyBmOiBGT1JNQVRfYSwgazogJ2FtcG0nIH0sXHJcbl07XHJcbmNvbnN0IERBWV9OQU1FUyA9IFtcclxuICAgICdTdW5kYXknLFxyXG4gICAgJ01vbmRheScsXHJcbiAgICAnVHVlc2RheScsXHJcbiAgICAnV2VkbmVzZGF5JyxcclxuICAgICdUaHVyc2RheScsXHJcbiAgICAnRnJpZGF5JyxcclxuICAgICdTYXR1cmRheScsXHJcbl07XHJcbmNvbnN0IERBWV9TSE9SVF9OQU1FUyA9IFtcclxuICAgICdTdW4nLFxyXG4gICAgJ01vbicsXHJcbiAgICAnVHVlJyxcclxuICAgICdXZWQnLFxyXG4gICAgJ1RodScsXHJcbiAgICAnRnJpJyxcclxuICAgICdTYXQnLFxyXG5dO1xyXG5jb25zdCBNT05USF9OQU1FUyA9IFtcclxuICAgICdKYW51YXJ5JyxcclxuICAgICdGZWJydWFyeScsXHJcbiAgICAnTWFyY2gnLFxyXG4gICAgJ0FwcmlsJyxcclxuICAgICdNYXknLFxyXG4gICAgJ0p1bmUnLFxyXG4gICAgJ0p1bHknLFxyXG4gICAgJ0F1Z3VzdCcsXHJcbiAgICAnU2VwdGVtYmVyJyxcclxuICAgICdPY3RvYmVyJyxcclxuICAgICdOb3ZlbWJlcicsXHJcbiAgICAnRGVjZW1iZXInLFxyXG5dO1xyXG5jb25zdCBNT05USF9TSE9SVF9OQU1FUyA9IFtcclxuICAgICdKYW4nLFxyXG4gICAgJ0ZlYicsXHJcbiAgICAnTWFyJyxcclxuICAgICdBcHInLFxyXG4gICAgJ01heScsXHJcbiAgICAnSnVuJyxcclxuICAgICdKdWwnLFxyXG4gICAgJ0F1ZycsXHJcbiAgICAnU2VwJyxcclxuICAgICdPY3QnLFxyXG4gICAgJ05vdicsXHJcbiAgICAnRGVjJyxcclxuXTtcclxuY29uc3QgVkFMSURfQU1QTV9QUkVGSVggPSBbXHJcbiAgICBGT1JNQVRfaGgsIEZPUk1BVF9oLCBGT1JNQVRfbW0sIEZPUk1BVF9tLCBGT1JNQVRfc3MsIEZPUk1BVF9zXHJcbl07XG5cbmNvbnN0IERhdGV0aW1lID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gYGlvbi1kdC0ke2RhdGV0aW1lSWRzKyt9YDtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRldGltZU1pbiA9IHt9O1xuICAgICAgICB0aGlzLmRhdGV0aW1lTWF4ID0ge307XG4gICAgICAgIHRoaXMuZGF0ZXRpbWVWYWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgZGF0ZXRpbWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBkYXRldGltZSBhcHBlYXJzIG5vcm1hbCBidXQgaXMgbm90IGludGVyYWN0aXZlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRpc3BsYXkgZm9ybWF0IG9mIHRoZSBkYXRlIGFuZCB0aW1lIGFzIHRleHQgdGhhdCBzaG93c1xuICAgICAgICAgKiB3aXRoaW4gdGhlIGl0ZW0uIFdoZW4gdGhlIGBwaWNrZXJGb3JtYXRgIGlucHV0IGlzIG5vdCB1c2VkLCB0aGVuIHRoZVxuICAgICAgICAgKiBgZGlzcGxheUZvcm1hdGAgaXMgdXNlZCBmb3IgYm90aCBkaXNwbGF5IHRoZSBmb3JtYXR0ZWQgdGV4dCwgYW5kIGRldGVybWluaW5nXG4gICAgICAgICAqIHRoZSBkYXRldGltZSBwaWNrZXIncyBjb2x1bW5zLiBTZWUgdGhlIGBwaWNrZXJGb3JtYXRgIGlucHV0IGRlc2NyaXB0aW9uIGZvclxuICAgICAgICAgKiBtb3JlIGluZm8uIERlZmF1bHRzIHRvIGBNTU0gRCwgWVlZWWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSAnTU1NIEQsIFlZWVknO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgdG8gZGlzcGxheSBvbiB0aGUgcGlja2VyJ3MgY2FuY2VsIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FuY2VsVGV4dCA9ICdDYW5jZWwnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgdG8gZGlzcGxheSBvbiB0aGUgcGlja2VyJ3MgXCJEb25lXCIgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kb25lVGV4dCA9ICdEb25lJztcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZGF0ZXRpbWUgdmFsdWUgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuICAgICAqL1xuICAgIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRldGltZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICAgICAgLy8gZmlyc3Qgc2VlIGlmIGxvY2FsZSBuYW1lcyB3ZXJlIHByb3ZpZGVkIGluIHRoZSBpbnB1dHNcbiAgICAgICAgLy8gdGhlbiBjaGVjayB0byBzZWUgaWYgdGhleSdyZSBpbiB0aGUgY29uZmlnXG4gICAgICAgIC8vIGlmIG5laXRoZXIgd2VyZSBwcm92aWRlZCB0aGVuIGl0IHdpbGwgdXNlIGRlZmF1bHQgRW5nbGlzaCBuYW1lc1xuICAgICAgICB0aGlzLmxvY2FsZSA9IHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9jYWxlW3R5cGVdID0gY29udmVydFRvQXJyYXlPZlN0cmluZ3MoKHRoaXNbdHlwZV0gPyB0aGlzW3R5cGVdIDogdGhpcy5jb25maWcuZ2V0KHR5cGUpLCB0eXBlKTtcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzKHRoaXMubW9udGhOYW1lcywgJ21vbnRoTmFtZXMnKSxcbiAgICAgICAgICAgIG1vbnRoU2hvcnROYW1lczogY29udmVydFRvQXJyYXlPZlN0cmluZ3ModGhpcy5tb250aFNob3J0TmFtZXMsICdtb250aFNob3J0TmFtZXMnKSxcbiAgICAgICAgICAgIGRheU5hbWVzOiBjb252ZXJ0VG9BcnJheU9mU3RyaW5ncyh0aGlzLmRheU5hbWVzLCAnZGF5TmFtZXMnKSxcbiAgICAgICAgICAgIGRheVNob3J0TmFtZXM6IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzKHRoaXMuZGF5U2hvcnROYW1lcywgJ2RheVNob3J0TmFtZXMnKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGV0aW1lVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBkYXRldGltZSBvdmVybGF5LlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBpY2tlck9wdGlvbnMgPSB0aGlzLmdlbmVyYXRlUGlja2VyT3B0aW9ucygpO1xuICAgICAgICBjb25zdCBwaWNrZXIgPSBhd2FpdCBwaWNrZXJDb250cm9sbGVyLmNyZWF0ZShwaWNrZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgcGlja2VyLm9uRGlkRGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignaW9uUGlja2VyQ29sQ2hhbmdlJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgY29uc3QgY29sU2VsZWN0ZWRJbmRleCA9IGRhdGEuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGNvbE9wdGlvbnMgPSBkYXRhLm9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VEYXRhID0ge307XG4gICAgICAgICAgICBjaGFuZ2VEYXRhW2RhdGEubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbE9wdGlvbnNbY29sU2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGV0aW1lVmFsdWUoY2hhbmdlRGF0YSk7XG4gICAgICAgICAgICBwaWNrZXIuY29sdW1ucyA9IHRoaXMuZ2VuZXJhdGVDb2x1bW5zKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBwaWNrZXIucHJlc2VudCgpO1xuICAgIH1cbiAgICBlbWl0U3R5bGUoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ2RhdGV0aW1lJzogdHJ1ZSxcbiAgICAgICAgICAgICdoYXMtcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyICE9IG51bGwsXG4gICAgICAgICAgICAnaGFzLXZhbHVlJzogdGhpcy5oYXNWYWx1ZSgpLFxuICAgICAgICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZURhdGV0aW1lVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdXBkYXRlRGF0ZSh0aGlzLmRhdGV0aW1lVmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVQaWNrZXJPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgcGlja2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG1vZGUgfSwgdGhpcy5waWNrZXJPcHRpb25zKSwgeyBjb2x1bW5zOiB0aGlzLmdlbmVyYXRlQ29sdW1ucygpIH0pO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXMgbm90IHBhc3NlZCBpbiBwaWNrZXIgYnV0dG9ucyxcbiAgICAgICAgLy8gYWRkIGEgY2FuY2VsIGFuZCBvayBidXR0b24gdG8gdGhlIHBpY2tlclxuICAgICAgICBjb25zdCBidXR0b25zID0gcGlja2VyT3B0aW9ucy5idXR0b25zO1xuICAgICAgICBpZiAoIWJ1dHRvbnMgfHwgYnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBpY2tlck9wdGlvbnMuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY2FuY2VsVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0ZXRpbWVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmRvbmVUZXh0LFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRldGltZVZhbHVlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBQcmV2ZW50IGNvbnZlcnREYXRhVG9JU08gZnJvbSBkb2luZyBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIGtpbmQgb2YgdHJhbnNmb3JtYXRpb24gYmFzZWQgb24gdGltZXpvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFRoaXMgY2FuY2VscyBvdXQgYW55IGNoYW5nZSBpdCBhdHRlbXB0cyB0byBtYWtlXG4gICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogSW1wb3J0YW50OiBUYWtlIHRoZSB0aW1lem9uZSBvZmZzZXQgYmFzZWQgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIHRoZSBkYXRlIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLCBvdGhlcndpc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIHRoZXJlIGNhbiBiZSAxIGhyIGRpZmZlcmVuY2Ugd2hlbiBkZWFsaW5nIHcvIERTVFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY29udmVydERhdGFUb0lTTyh0aGlzLmRhdGV0aW1lVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZXRpbWVWYWx1ZS50ek9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGNvbnZlcnREYXRhVG9JU08odGhpcy5kYXRldGltZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpY2tlck9wdGlvbnM7XG4gICAgfVxuICAgIGdlbmVyYXRlQ29sdW1ucygpIHtcbiAgICAgICAgLy8gaWYgYSBwaWNrZXIgZm9ybWF0IHdhc24ndCBwcm92aWRlZCwgdGhlbiBmYWxsYmFja1xuICAgICAgICAvLyB0byB1c2UgdGhlIGRpc3BsYXkgZm9ybWF0XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMucGlja2VyRm9ybWF0IHx8IHRoaXMuZGlzcGxheUZvcm1hdCB8fCBERUZBVUxUX0ZPUk1BVDtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSd2ZSBnb3QgdXAgdG8gZGF0ZSBzaXppbmcgaW5mb3JtYXRpb25cbiAgICAgICAgdGhpcy5jYWxjTWluTWF4KCk7XG4gICAgICAgIC8vIGRvZXMgbm90IHN1cHBvcnQgc2VsZWN0aW5nIGJ5IGRheSBuYW1lXG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIGFueSBkYXkgbmFtZSBmb3JtYXRzXG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgnRERERCcsICd7fn0nKS5yZXBsYWNlKCdEREQnLCAne359Jyk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS5pbmRleE9mKCdEJykgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBub3QgYSBkYXkgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBkYXkgbmFtZSB3aXRoIGEgbnVtZXJpYyBvbmUgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoJ3t+fScsICdEJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBzdXJlIG5vIGRheSBuYW1lIHJlcGxhY2VyIGlzIGxlZnQgaW4gdGhlIHN0cmluZ1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL3t+fS9nLCAnJyk7XG4gICAgICAgIC8vIHBhcnNlIGFwYXJ0IHRoZSBnaXZlbiB0ZW1wbGF0ZSBpbnRvIGFuIGFycmF5IG9mIFwiZm9ybWF0c1wiXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlKS5tYXAoKGZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggZm9ybWF0IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHBpY2tlciBjb2x1bW4gdG8gYnVpbGQgdXAgd2l0aCBkYXRhXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjb252ZXJ0Rm9ybWF0VG9LZXkoZm9ybWF0KTtcbiAgICAgICAgICAgIGxldCB2YWx1ZXM7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGV5IGhhdmUgZXhhY3QgdmFsdWVzIHRvIHVzZSBmb3IgdGhpcyBkYXRlIHBhcnRcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSB1c2UgdGhlIGRlZmF1bHQgZGF0ZSBwYXJ0IHZhbHVlc1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB2YWx1ZXMgPSBzZWxmW2tleSArICdWYWx1ZXMnXVxuICAgICAgICAgICAgICAgID8gY29udmVydFRvQXJyYXlPZk51bWJlcnMoc2VsZltrZXkgKyAnVmFsdWVzJ10sIGtleSlcbiAgICAgICAgICAgICAgICA6IGRhdGVWYWx1ZVJhbmdlKGZvcm1hdCwgdGhpcy5kYXRldGltZU1pbiwgdGhpcy5kYXRldGltZU1heCk7XG4gICAgICAgICAgICBjb25zdCBjb2xPcHRpb25zID0gdmFsdWVzLm1hcCh2YWwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlbmRlclRleHRGb3JtYXQoZm9ybWF0LCB2YWwsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvb2wsIHdlJ3ZlIGxvYWRlZCB1cCB0aGUgY29sdW1ucyB3aXRoIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIHByZXNlbGVjdCB0aGUgb3B0aW9uIGZvciB0aGlzIGNvbHVtblxuICAgICAgICAgICAgY29uc3Qgb3B0VmFsdWUgPSBnZXREYXRlVmFsdWUodGhpcy5kYXRldGltZVZhbHVlLCBmb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGNvbE9wdGlvbnMuZmluZEluZGV4KG9wdCA9PiBvcHQudmFsdWUgPT09IG9wdFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXggPj0gMCA/IHNlbGVjdGVkSW5kZXggOiAwLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGNvbE9wdGlvbnNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBOb3JtYWxpemUgbWluL21heFxuICAgICAgICBjb25zdCBtaW4gPSB0aGlzLmRhdGV0aW1lTWluO1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLmRhdGV0aW1lTWF4O1xuICAgICAgICBbJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZSddXG4gICAgICAgICAgICAuZmlsdGVyKG5hbWUgPT4gIWNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IG5hbWUpKVxuICAgICAgICAgICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBtaW5bbmFtZV0gPSAwO1xuICAgICAgICAgICAgbWF4W25hbWVdID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQ29sdW1ucyhkaXZ5Q29sdW1ucyhjb2x1bW5zKSk7XG4gICAgfVxuICAgIHZhbGlkYXRlQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgbWluQ29tcGFyZVZhbCA9IGRhdGVEYXRhU29ydFZhbHVlKHRoaXMuZGF0ZXRpbWVNaW4pO1xuICAgICAgICBjb25zdCBtYXhDb21wYXJlVmFsID0gZGF0ZURhdGFTb3J0VmFsdWUodGhpcy5kYXRldGltZU1heCk7XG4gICAgICAgIGNvbnN0IHllYXJDb2wgPSBjb2x1bW5zLmZpbmQoYyA9PiBjLm5hbWUgPT09ICd5ZWFyJyk7XG4gICAgICAgIGxldCBzZWxlY3RlZFllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZiAoeWVhckNvbCkge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCB0byB0aGUgZmlyc3QgdmFsdWUgaWYgdGhlIGN1cnJlbnQgeWVhciBkb2Vzbid0IGV4aXN0IGluIHRoZSBvcHRpb25zXG4gICAgICAgICAgICBpZiAoIXllYXJDb2wub3B0aW9ucy5maW5kKGNvbCA9PiBjb2wudmFsdWUgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFyID0geWVhckNvbC5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHllYXJDb2wuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyT3B0ID0geWVhckNvbC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICh5ZWFyT3B0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXkgaGF2ZSBhIHNlbGVjdGVkIHllYXIgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFyID0geWVhck9wdC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNb250aCA9IHRoaXMudmFsaWRhdGVDb2x1bW4oY29sdW1ucywgJ21vbnRoJywgMSwgbWluQ29tcGFyZVZhbCwgbWF4Q29tcGFyZVZhbCwgW3NlbGVjdGVkWWVhciwgMCwgMCwgMCwgMF0sIFtzZWxlY3RlZFllYXIsIDEyLCAzMSwgMjMsIDU5XSk7XG4gICAgICAgIGNvbnN0IG51bURheXNJbk1vbnRoID0gZGF5c0luTW9udGgoc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWRZZWFyKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXkgPSB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdkYXknLCAyLCBtaW5Db21wYXJlVmFsLCBtYXhDb21wYXJlVmFsLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCAwLCAwLCAwXSwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgbnVtRGF5c0luTW9udGgsIDIzLCA1OV0pO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEhvdXIgPSB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdob3VyJywgMywgbWluQ29tcGFyZVZhbCwgbWF4Q29tcGFyZVZhbCwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWREYXksIDAsIDBdLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCBzZWxlY3RlZERheSwgMjMsIDU5XSk7XG4gICAgICAgIHRoaXMudmFsaWRhdGVDb2x1bW4oY29sdW1ucywgJ21pbnV0ZScsIDQsIG1pbkNvbXBhcmVWYWwsIG1heENvbXBhcmVWYWwsIFtzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIHNlbGVjdGVkRGF5LCBzZWxlY3RlZEhvdXIsIDBdLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCBzZWxlY3RlZERheSwgc2VsZWN0ZWRIb3VyLCA1OV0pO1xuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG4gICAgY2FsY01pbk1heCgpIHtcbiAgICAgICAgY29uc3QgdG9kYXlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKHRoaXMueWVhclZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFycyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMueWVhclZhbHVlcywgJ3llYXInKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbiguLi55ZWFycykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXggPSBNYXRoLm1heCguLi55ZWFycykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW4gPSAodG9kYXlzWWVhciAtIDEwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXggPSB0b2RheXNZZWFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5kYXRldGltZU1pbiA9IHBhcnNlRGF0ZSh0aGlzLm1pbik7XG4gICAgICAgIGNvbnN0IG1heCA9IHRoaXMuZGF0ZXRpbWVNYXggPSBwYXJzZURhdGUodGhpcy5tYXgpO1xuICAgICAgICBtaW4ueWVhciA9IG1pbi55ZWFyIHx8IHRvZGF5c1llYXI7XG4gICAgICAgIG1heC55ZWFyID0gbWF4LnllYXIgfHwgdG9kYXlzWWVhcjtcbiAgICAgICAgbWluLm1vbnRoID0gbWluLm1vbnRoIHx8IDE7XG4gICAgICAgIG1heC5tb250aCA9IG1heC5tb250aCB8fCAxMjtcbiAgICAgICAgbWluLmRheSA9IG1pbi5kYXkgfHwgMTtcbiAgICAgICAgbWF4LmRheSA9IG1heC5kYXkgfHwgMzE7XG4gICAgICAgIG1pbi5ob3VyID0gbWluLmhvdXIgfHwgMDtcbiAgICAgICAgbWF4LmhvdXIgPSBtYXguaG91ciB8fCAyMztcbiAgICAgICAgbWluLm1pbnV0ZSA9IG1pbi5taW51dGUgfHwgMDtcbiAgICAgICAgbWF4Lm1pbnV0ZSA9IG1heC5taW51dGUgfHwgNTk7XG4gICAgICAgIG1pbi5zZWNvbmQgPSBtaW4uc2Vjb25kIHx8IDA7XG4gICAgICAgIG1heC5zZWNvbmQgPSBtYXguc2Vjb25kIHx8IDU5O1xuICAgICAgICAvLyBFbnN1cmUgbWluL21heCBjb25zdHJhaW50c1xuICAgICAgICBpZiAobWluLnllYXIgPiBtYXgueWVhcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWluLnllYXIgPiBtYXgueWVhcicpO1xuICAgICAgICAgICAgbWluLnllYXIgPSBtYXgueWVhciAtIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWluLnllYXIgPT09IG1heC55ZWFyKSB7XG4gICAgICAgICAgICBpZiAobWluLm1vbnRoID4gbWF4Lm1vbnRoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWluLm1vbnRoID4gbWF4Lm1vbnRoJyk7XG4gICAgICAgICAgICAgICAgbWluLm1vbnRoID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1pbi5tb250aCA9PT0gbWF4Lm1vbnRoICYmIG1pbi5kYXkgPiBtYXguZGF5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWluLmRheSA+IG1heC5kYXknKTtcbiAgICAgICAgICAgICAgICBtaW4uZGF5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2YWxpZGF0ZUNvbHVtbihjb2x1bW5zLCBuYW1lLCBpbmRleCwgbWluLCBtYXgsIGxvd2VyQm91bmRzLCB1cHBlckJvdW5kcykge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zLmZpbmQoYyA9PiBjLm5hbWUgPT09IG5hbWUpO1xuICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGIgPSBsb3dlckJvdW5kcy5zbGljZSgpO1xuICAgICAgICBjb25zdCB1YiA9IHVwcGVyQm91bmRzLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb2x1bW4ub3B0aW9ucztcbiAgICAgICAgbGV0IGluZGV4TWluID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaW5kZXhNYXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdHMgPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvcHRzLnZhbHVlO1xuICAgICAgICAgICAgbGJbaW5kZXhdID0gb3B0cy52YWx1ZTtcbiAgICAgICAgICAgIHViW2luZGV4XSA9IG9wdHMudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IG9wdHMuZGlzYWJsZWQgPSAodmFsdWUgPCBsb3dlckJvdW5kc1tpbmRleF0gfHxcbiAgICAgICAgICAgICAgICB2YWx1ZSA+IHVwcGVyQm91bmRzW2luZGV4XSB8fFxuICAgICAgICAgICAgICAgIGRhdGVTb3J0VmFsdWUodWJbMF0sIHViWzFdLCB1YlsyXSwgdWJbM10sIHViWzRdKSA8IG1pbiB8fFxuICAgICAgICAgICAgICAgIGRhdGVTb3J0VmFsdWUobGJbMF0sIGxiWzFdLCBsYlsyXSwgbGJbM10sIGxiWzRdKSA+IG1heCk7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhNaW4gPSBNYXRoLm1pbihpbmRleE1pbiwgaSk7XG4gICAgICAgICAgICAgICAgaW5kZXhNYXggPSBNYXRoLm1heChpbmRleE1heCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGNvbHVtbi5zZWxlY3RlZEluZGV4ID0gY2xhbXAoaW5kZXhNaW4sIGNvbHVtbi5zZWxlY3RlZEluZGV4LCBpbmRleE1heCk7XG4gICAgICAgIGNvbnN0IG9wdCA9IGNvbHVtbi5vcHRpb25zW3NlbGVjdGVkSW5kZXhdO1xuICAgICAgICBpZiAob3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0IG9mIHRoZSBmb3JtYXR0ZWQgZGF0YVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZGlzcGxheUZvcm1hdCB8fCB0aGlzLnBpY2tlckZvcm1hdCB8fCBERUZBVUxUX0ZPUk1BVDtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgdGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVuZGVyRGF0ZXRpbWUodGVtcGxhdGUsIHRoaXMuZGF0ZXRpbWVWYWx1ZSwgdGhpcy5sb2NhbGUpO1xuICAgIH1cbiAgICBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXRGb2N1cygpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRWwpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXRJZCwgdGV4dCwgZGlzYWJsZWQsIHJlYWRvbmx5LCBpc0V4cGFuZGVkLCBlbCwgcGxhY2Vob2xkZXIgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBsYWJlbElkID0gaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgY29uc3QgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKGVsKTtcbiAgICAgICAgY29uc3QgYWRkUGxhY2Vob2xkZXJDbGFzcyA9ICh0ZXh0ID09PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXIgIT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIC8vIElmIHNlbGVjdGVkIHRleHQgaGFzIGJlZW4gcGFzc2VkIGluLCB1c2UgdGhhdCBmaXJzdFxuICAgICAgICAvLyBvdGhlcndpc2UgdXNlIHRoZSBwbGFjZWhvbGRlclxuICAgICAgICBjb25zdCBkYXRldGltZVRleHQgPSB0ZXh0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gKHBsYWNlaG9sZGVyICE9IG51bGwgPyBwbGFjZWhvbGRlciA6ICcnKVxuICAgICAgICAgICAgOiB0ZXh0O1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gbGFiZWxJZDtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgdGhpcy5uYW1lLCB0aGlzLnZhbHVlLCB0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCByb2xlOiBcImNvbWJvYm94XCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1leHBhbmRlZFwiOiBgJHtpc0V4cGFuZGVkfWAsIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgJ2RhdGV0aW1lLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgJ2RhdGV0aW1lLXJlYWRvbmx5JzogcmVhZG9ubHksXG4gICAgICAgICAgICAgICAgJ2RhdGV0aW1lLXBsYWNlaG9sZGVyJzogYWRkUGxhY2Vob2xkZXJDbGFzcyxcbiAgICAgICAgICAgICAgICAnaW4taXRlbSc6IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKVxuICAgICAgICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGF0ZXRpbWUtdGV4dFwiIH0sIGRhdGV0aW1lVGV4dCksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCByZWY6IGJ0bkVsID0+IHRoaXMuYnV0dG9uRWwgPSBidG5FbCB9KSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgfTsgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiBcIjpob3N0e3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO21pbi13aWR0aDoxNnB4O21pbi1oZWlnaHQ6MS4yZW07Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX06aG9zdCguaW4taXRlbSl7cG9zaXRpb246c3RhdGljfTpob3N0KC5kYXRldGltZS1wbGFjZWhvbGRlcil7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpfTpob3N0KC5kYXRldGltZS1kaXNhYmxlZCl7b3BhY2l0eTouMztwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1yZWFkb25seSl7cG9pbnRlci1ldmVudHM6bm9uZX1idXR0b257bGVmdDowO3RvcDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO291dGxpbmU6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgYnV0dG9uLFtkaXI9cnRsXSBidXR0b257bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uZGF0ZXRpbWUtdGV4dHtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDstbXMtZmxleDoxO2ZsZXg6MTttaW4taGVpZ2h0OmluaGVyaXQ7ZGlyZWN0aW9uOmx0cjtvdmVyZmxvdzppbmhlcml0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuZGF0ZXRpbWUtdGV4dCxbZGlyPXJ0bF0gLmRhdGV0aW1lLXRleHR7ZGlyZWN0aW9uOnJ0bH06aG9zdHstLXBsYWNlaG9sZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KTstLXBhZGRpbmctdG9wOjEwcHg7LS1wYWRkaW5nLWVuZDo4cHg7LS1wYWRkaW5nLWJvdHRvbToxMHB4Oy0tcGFkZGluZy1zdGFydDoxNnB4fVwiOyB9XG59O1xuY29uc3QgZGl2eUNvbHVtbnMgPSAoY29sdW1ucykgPT4ge1xuICAgIGNvbnN0IGNvbHVtbnNXaWR0aCA9IFtdO1xuICAgIGxldCBjb2w7XG4gICAgbGV0IHdpZHRoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb2wgPSBjb2x1bW5zW2ldO1xuICAgICAgICBjb2x1bW5zV2lkdGgucHVzaCgwKTtcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgY29sLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHdpZHRoID0gb3B0aW9uLnRleHQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHdpZHRoID4gY29sdW1uc1dpZHRoW2ldKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uc1dpZHRoW2ldID0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbHVtbnNXaWR0aC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heChjb2x1bW5zV2lkdGhbMF0sIGNvbHVtbnNXaWR0aFsxXSk7XG4gICAgICAgIGNvbHVtbnNbMF0uYWxpZ24gPSAncmlnaHQnO1xuICAgICAgICBjb2x1bW5zWzFdLmFsaWduID0gJ2xlZnQnO1xuICAgICAgICBjb2x1bW5zWzBdLm9wdGlvbnNXaWR0aCA9IGNvbHVtbnNbMV0ub3B0aW9uc1dpZHRoID0gYCR7d2lkdGggKiAxN31weGA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbHVtbnNXaWR0aC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heChjb2x1bW5zV2lkdGhbMF0sIGNvbHVtbnNXaWR0aFsyXSk7XG4gICAgICAgIGNvbHVtbnNbMF0uYWxpZ24gPSAncmlnaHQnO1xuICAgICAgICBjb2x1bW5zWzFdLmNvbHVtbldpZHRoID0gYCR7Y29sdW1uc1dpZHRoWzFdICogMTd9cHhgO1xuICAgICAgICBjb2x1bW5zWzBdLm9wdGlvbnNXaWR0aCA9IGNvbHVtbnNbMl0ub3B0aW9uc1dpZHRoID0gYCR7d2lkdGggKiAxN31weGA7XG4gICAgICAgIGNvbHVtbnNbMl0uYWxpZ24gPSAnbGVmdCc7XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW5zO1xufTtcbmNvbnN0IERFRkFVTFRfRk9STUFUID0gJ01NTSBELCBZWVlZJztcbmxldCBkYXRldGltZUlkcyA9IDA7XG5cbi8qKlxyXG4gKiBpT1MgUGlja2VyIEVudGVyIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMjYpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLXdyYXBwZXInKSlcclxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsICd0cmFuc2xhdGVZKDAlKScpO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oNDAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbi8qKlxyXG4gKiBpT1MgUGlja2VyIExlYXZlIEFuaW1hdGlvblxyXG4gKi9cclxuY29uc3QgaW9zTGVhdmVBbmltYXRpb24gPSAoYmFzZUVsKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XHJcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xyXG4gICAgYmFja2Ryb3BBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXHJcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMjYsIDAuMDEpO1xyXG4gICAgd3JhcHBlckFuaW1hdGlvblxyXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLXdyYXBwZXInKSlcclxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCAndHJhbnNsYXRlWSgxMDAlKScpO1xyXG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cclxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXHJcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcclxuICAgICAgICAuZHVyYXRpb24oNDAwKVxyXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XHJcbn07XG5cbmNvbnN0IFBpY2tlciA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGJ1dHRvbnMgdG8gYmUgZGlzcGxheWVkIGF0IHRoZSB0b3Agb2YgdGhlIHBpY2tlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHBpY2tlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBkaXNtaXNzaW5nIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgYSBiYWNrZHJvcCB3aWxsIGJlIGRpc3BsYXllZCBiZWhpbmQgdGhlIHBpY2tlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBpY2tlciB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcGlja2VyIHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSB0aGlzLmJ1dHRvbnMuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgICAgICAgICAgaWYgKGNhbmNlbEJ0bikge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2soY2FuY2VsQnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QaWNrZXJEaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QaWNrZXJXaWxsUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyV2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgcGlja2VyIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBhc3luYyBwcmVzZW50KCkge1xuICAgICAgICBhd2FpdCBwcmVzZW50KHRoaXMsICdwaWNrZXJFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBpb3NFbnRlckFuaW1hdGlvbiwgdW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNtaXNzKCksIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIHBpY2tlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgcGlja2VyLlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBwaWNrZXIuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqL1xuICAgIGRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgICAgICBpZiAodGhpcy5kdXJhdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR1cmF0aW9uVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ3BpY2tlckxlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIGlvc0xlYXZlQW5pbWF0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwaWNrZXIgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgb25EaWREaXNtaXNzKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblBpY2tlckRpZERpc21pc3MnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwaWNrZXIgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIG9uV2lsbERpc21pc3MoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uUGlja2VyV2lsbERpc21pc3MnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb2x1bW4gdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4uXG4gICAgICovXG4gICAgZ2V0Q29sdW1uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLm5hbWUgPT09IG5hbWUpKTtcbiAgICB9XG4gICAgYnV0dG9uQ2xpY2soYnV0dG9uKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGtlZXAgdGhlIHRpbWUgb2YgdGhlIG1vc3QgcmVjZW50IGJ1dHRvbiBjbGlja1xuICAgICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgICAgLy8gcGFzcyB0aGUgaGFuZGxlciB0aGUgdmFsdWVzIGZyb20gdGhlIGlucHV0c1xuICAgICAgICBjb25zdCBzaG91bGREaXNtaXNzID0gc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIsIHRoaXMuZ2V0U2VsZWN0ZWQoKSkgIT09IGZhbHNlO1xuICAgICAgICBpZiAoc2hvdWxkRGlzbWlzcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgICBnZXRTZWxlY3RlZCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gY29sLnNlbGVjdGVkSW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gY29sLm9wdGlvbnNbY29sLnNlbGVjdGVkSW5kZXhdXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzZWxlY3RlZFtjb2wubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdGV4dDogc2VsZWN0ZWRDb2x1bW4gPyBzZWxlY3RlZENvbHVtbi50ZXh0IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3RlZENvbHVtbiA/IHNlbGVjdGVkQ29sdW1uLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBpbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBjbGFzczogT2JqZWN0LmFzc2lnbih7IFttb2RlXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBbYHBpY2tlci0ke21vZGV9YF06IHRydWUgfSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7MjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gXG4gICAgICAgICAgICB9LCBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLCB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItd3JhcHBlclwiLCByb2xlOiBcImRpYWxvZ1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItdG9vbGJhclwiIH0sIHRoaXMuYnV0dG9ucy5tYXAoYiA9PiAoaChcImRpdlwiLCB7IGNsYXNzOiBidXR0b25XcmFwcGVyQ2xhc3MoYikgfSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMuYnV0dG9uQ2xpY2soYiksIGNsYXNzOiBidXR0b25DbGFzcyhiKSB9LCBiLnRleHQpKSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1jb2x1bW5zXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1hYm92ZS1oaWdobGlnaHRcIiB9KSwgdGhpcy5wcmVzZW50ZWQgJiYgdGhpcy5jb2x1bW5zLm1hcChjID0+IGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7IGNvbDogYyB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItYmVsb3ctaGlnaGxpZ2h0XCIgfSkpKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIFwiLnNjLWlvbi1waWNrZXItaW9zLWh7LS1ib3JkZXItcmFkaXVzOjA7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOjEwMCU7LS1tYXgtd2lkdGg6NTAwcHg7LS1taW4taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bGVmdDowO3RvcDowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX1bZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1pb3MtaCwgW2Rpcj1ydGxdIC5zYy1pb24tcGlja2VyLWlvcy1oe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLXBpY2tlci1pb3MtaHtkaXNwbGF5Om5vbmV9LnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItaW9ze2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOnN0cmljdDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItaW9ze21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvfX0ucGlja2VyLXRvb2xiYXIuc2MtaW9uLXBpY2tlci1pb3N7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbnRhaW46c3RyaWN0O3otaW5kZXg6MX0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvc3tib3JkZXI6MDtmb250LWZhbWlseTppbmhlcml0fS5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9zOmFjdGl2ZSwgLnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3M6Zm9jdXN7b3V0bGluZTpub25lfS5waWNrZXItY29sdW1ucy5zYy1pb24tcGlja2VyLWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sMCk7Y29udGFpbjpzdHJpY3Q7ZGlyZWN0aW9uOmx0cjtvdmVyZmxvdzpoaWRkZW59LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1pb3MsIC5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9ze2Rpc3BsYXk6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5zYy1pb24tcGlja2VyLWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTstLWJvcmRlci13aWR0aDoxcHggMCAwOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwjYzhjN2NjKSkpOy0taGVpZ2h0OjI2MHB4O2NvbG9yOnZhcigtLWlvbi1pdGVtLWNvbG9yLHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApKX0ucGlja2VyLXRvb2xiYXIuc2MtaW9uLXBpY2tlci1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjQ0cHg7Ym9yZGVyLWJvdHRvbTouNTVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpfS5waWNrZXItdG9vbGJhci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3N7LW1zLWZsZXg6MTtmbGV4OjE7dGV4dC1hbGlnbjplbmR9LnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvczpsYXN0LWNoaWxkIC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9ze2ZvbnQtd2VpZ2h0OjYwMH0ucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9zOmZpcnN0LWNoaWxke2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOnN0YXJ0fS5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9zLCAucGlja2VyLWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDoxZW07cGFkZGluZy1yaWdodDoxZW07cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2hlaWdodDo0NHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7Zm9udC1zaXplOjE2cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9zLCAucGlja2VyLWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjFlbTtwYWRkaW5nLWlubGluZS1zdGFydDoxZW07LXdlYmtpdC1wYWRkaW5nLWVuZDoxZW07cGFkZGluZy1pbmxpbmUtZW5kOjFlbX19LnBpY2tlci1jb2x1bW5zLnNjLWlvbi1waWNrZXItaW9ze2hlaWdodDoyMTVweDstd2Via2l0LXBlcnNwZWN0aXZlOjEwMDBweDtwZXJzcGVjdGl2ZToxMDAwcHh9LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1pb3N7bGVmdDowO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooOTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooOTBweCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo4MXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxjb2xvci1zdG9wKDIwJSx2YXIoLS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKSksdG8ocmdiYSh2YXIoLS1iYWNrZ3JvdW5kLXJnYix2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpKSwuOCkpKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsdmFyKC0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSkgMjAlLHJnYmEodmFyKC0tYmFja2dyb3VuZC1yZ2IsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSksLjgpKTt6LWluZGV4OjEwfVtkaXI9cnRsXS5zYy1pb24tcGlja2VyLWlvcy1oIC5waWNrZXItYWJvdmUtaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9zLCBbZGlyPXJ0bF0gLnNjLWlvbi1waWNrZXItaW9zLWggLnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1pb3MsIFtkaXI9cnRsXS5zYy1pb24tcGlja2VyLWlvcyAucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWlvc3tsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9LnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1pb3N7bGVmdDowO3RvcDoxMTVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTE5cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgYm90dG9tLGxlZnQgdG9wLGNvbG9yLXN0b3AoMzAlLHZhcigtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpKSx0byhyZ2JhKHZhcigtLWJhY2tncm91bmQtcmdiLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSkpLC44KSkpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcsdmFyKC0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSkgMzAlLHJnYmEodmFyKC0tYmFja2dyb3VuZC1yZ2IsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSksLjgpKTt6LWluZGV4OjExfVtkaXI9cnRsXS5zYy1pb24tcGlja2VyLWlvcy1oIC5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9zLCBbZGlyPXJ0bF0gLnNjLWlvbi1waWNrZXItaW9zLWggLnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1pb3MsIFtkaXI9cnRsXS5zYy1pb24tcGlja2VyLWlvcyAucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWlvc3tsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9XCI7IH1cbn07XG5jb25zdCBidXR0b25XcmFwcGVyQ2xhc3MgPSAoYnV0dG9uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW2BwaWNrZXItdG9vbGJhci0ke2J1dHRvbi5yb2xlfWBdOiBidXR0b24ucm9sZSAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAncGlja2VyLXRvb2xiYXItYnV0dG9uJzogdHJ1ZVxuICAgIH07XG59O1xuY29uc3QgYnV0dG9uQ2xhc3MgPSAoYnV0dG9uKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAncGlja2VyLWJ1dHRvbic6IHRydWUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlIH0sIGdldENsYXNzTWFwKGJ1dHRvbi5jc3NDbGFzcykpO1xufTtcblxuY29uc3QgUGlja2VyQ29sdW1uQ21wID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5vcHRIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLnJvdGF0ZUZhY3RvciA9IDA7XG4gICAgICAgIHRoaXMuc2NhbGVGYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5ub0FuaW1hdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvblBpY2tlckNvbENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyQ29sQ2hhbmdlXCIsIDcpO1xuICAgIH1cbiAgICBjb2xDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGxldCBwaWNrZXJSb3RhdGVGYWN0b3IgPSAwO1xuICAgICAgICBsZXQgcGlja2VyU2NhbGVGYWN0b3IgPSAwLjgxO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdpb3MnKSB7XG4gICAgICAgICAgICBwaWNrZXJSb3RhdGVGYWN0b3IgPSAtMC40NjtcbiAgICAgICAgICAgIHBpY2tlclNjYWxlRmFjdG9yID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdGF0ZUZhY3RvciA9IHBpY2tlclJvdGF0ZUZhY3RvcjtcbiAgICAgICAgdGhpcy5zY2FsZUZhY3RvciA9IHBpY2tlclNjYWxlRmFjdG9yO1xuICAgICAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LTYyNGVlYTU4LmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICAgICAgICBnZXN0dXJlTmFtZTogJ3BpY2tlci1zd2lwZScsXG4gICAgICAgICAgICBnZXN0dXJlUHJpb3JpdHk6IDEwMCxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgIG9uU3RhcnQ6IGV2ID0+IHRoaXMub25TdGFydChldiksXG4gICAgICAgICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgICAgICAgIG9uRW5kOiBldiA9PiB0aGlzLm9uRW5kKGV2KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2VzdHVyZS5zZXREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIHRoaXMudG1ySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9BbmltYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2godHJ1ZSk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgICAgIGNvbnN0IGNvbEVsID0gdGhpcy5vcHRzRWw7XG4gICAgICAgIGlmIChjb2xFbCkge1xuICAgICAgICAgICAgLy8gRE9NIFJFQURcbiAgICAgICAgICAgIC8vIFdlIHBlcmZvbSBhIERPTSByZWFkIG92ZXIgYSByZW5kZXJlZCBpdGVtLCB0aGlzIG5lZWRzIHRvIGhhcHBlbiBhZnRlciB0aGUgZmlyc3QgcmVuZGVyXG4gICAgICAgICAgICB0aGlzLm9wdEhlaWdodCA9IChjb2xFbC5maXJzdEVsZW1lbnRDaGlsZCA/IGNvbEVsLmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodCA6IDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRtcklkKTtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0Q29sQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmlvblBpY2tlckNvbENoYW5nZS5lbWl0KHRoaXMuY29sKTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWRJbmRleCwgZHVyYXRpb24pIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzZWxlY3RlZCBpbmRleCwgdGhlbiBmaWd1cmUgb3V0IGl0J3MgeSBwb3NpdGlvblxuICAgICAgICAvLyBpZiB0aGVyZSBpc24ndCBhIHNlbGVjdGVkIGluZGV4LCB0aGVuIGp1c3QgdXNlIHRoZSB0b3AgeSBwb3NpdGlvblxuICAgICAgICBjb25zdCB5ID0gKHNlbGVjdGVkSW5kZXggPiAtMSkgPyAtKHNlbGVjdGVkSW5kZXggKiB0aGlzLm9wdEhlaWdodCkgOiAwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgLy8gc2V0IHdoYXQgeSBwb3NpdGlvbiB3ZSdyZSBhdFxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcbiAgICAgICAgdGhpcy51cGRhdGUoeSwgZHVyYXRpb24sIHRydWUpO1xuICAgICAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgICB9XG4gICAgdXBkYXRlKHksIGR1cmF0aW9uLCBzYXZlWSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0c0VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5zdXJlIHdlJ3ZlIGdvdCBhIGdvb2Qgcm91bmQgbnVtYmVyIDopXG4gICAgICAgIGxldCB0cmFuc2xhdGVZID0gMDtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVogPSAwO1xuICAgICAgICBjb25zdCB7IGNvbCwgcm90YXRlRmFjdG9yIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gY29sLnNlbGVjdGVkSW5kZXggPSB0aGlzLmluZGV4Rm9yWSgteSk7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uU3RyID0gKGR1cmF0aW9uID09PSAwKSA/ICcnIDogZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICBjb25zdCBzY2FsZVN0ciA9IGBzY2FsZSgke3RoaXMuc2NhbGVGYWN0b3J9KWA7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5vcHRzRWwuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY29uc3Qgb3B0ID0gY29sLm9wdGlvbnNbaV07XG4gICAgICAgICAgICBjb25zdCBvcHRPZmZzZXQgPSAoaSAqIHRoaXMub3B0SGVpZ2h0KSArIHk7XG4gICAgICAgICAgICBsZXQgdHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICBpZiAocm90YXRlRmFjdG9yICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRlWCA9IG9wdE9mZnNldCAqIHJvdGF0ZUZhY3RvcjtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlWCkgPD0gOTApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVogPSA5MDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gYHJvdGF0ZVgoJHtyb3RhdGVYfWRlZykgYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAtOTk5OTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVaID0gMDtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gb3B0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZEluZGV4ID09PSBpO1xuICAgICAgICAgICAgdHJhbnNmb3JtICs9IGB0cmFuc2xhdGUzZCgwcHgsJHt0cmFuc2xhdGVZfXB4LCR7dHJhbnNsYXRlWn1weCkgYDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjYWxlRmFjdG9yICE9PSAxICYmICFzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSArPSBzY2FsZVN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5ub0FuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICBvcHQuZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGR1cmF0aW9uICE9PSBvcHQuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBvcHQuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb25TdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdHJhbnNmb3JtXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtICE9PSBvcHQudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgb3B0LnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkIGl0ZW1cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCAhPT0gb3B0LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgb3B0LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFBJQ0tFUl9PUFRfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoUElDS0VSX09QVF9TRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sLnByZXZTZWxlY3RlZCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChzYXZlWSkge1xuICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXN0SW5kZXggIT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGhhdmUgbm90IHNldCBhIGxhc3QgaW5kZXggeWV0XG4gICAgICAgICAgICBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVjZWxlcmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICAgIC8vIHN0aWxsIGRlY2VsZXJhdGluZ1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSAqPSBERUNFTEVSQVRJT05fRlJJQ1RJT047XG4gICAgICAgICAgICAvLyBkbyBub3QgbGV0IGl0IGdvIHNsb3dlciB0aGFuIGEgdmVsb2NpdHkgb2YgMVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9ICh0aGlzLnZlbG9jaXR5ID4gMClcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KHRoaXMudmVsb2NpdHksIDEpXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1pbih0aGlzLnZlbG9jaXR5LCAtMSk7XG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMueSArIHRoaXMudmVsb2NpdHk7XG4gICAgICAgICAgICBpZiAoeSA+IHRoaXMubWluWSkge1xuICAgICAgICAgICAgICAgIC8vIHdob29wcywgaXQncyB0cnlpbmcgdG8gc2Nyb2xsIHVwIGZhcnRoZXIgdGhhbiB0aGUgb3B0aW9ucyB3ZSBoYXZlIVxuICAgICAgICAgICAgICAgIHkgPSB0aGlzLm1pblk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh5IDwgdGhpcy5tYXhZKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2FoaCwgaXQncyB0cnlpbmcgdG8gc2Nyb2xsIGRvd24gZmFydGhlciB0aGFuIHdlIGNhbiFcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5tYXhZO1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGUoeSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBub3RMb2NrZWRJbiA9IChNYXRoLnJvdW5kKHkpICUgdGhpcy5vcHRIZWlnaHQgIT09IDApIHx8IChNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA+IDEpO1xuICAgICAgICAgICAgaWYgKG5vdExvY2tlZEluKSB7XG4gICAgICAgICAgICAgICAgLy8gaXNuJ3QgbG9ja2VkIGluIHlldCwga2VlcCBkZWNlbGVyYXRpbmcgdW50aWwgaXQgaXNcbiAgICAgICAgICAgICAgICB0aGlzLnJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZGVjZWxlcmF0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSAlIHRoaXMub3B0SGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBuZWVkcyB0byBzdGlsbCBnZXQgbG9ja2VkIGludG8gYSBwb3NpdGlvbiBzbyBvcHRpb25zIGxpbmUgdXBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSBNYXRoLmFicyh0aGlzLnkgJSB0aGlzLm9wdEhlaWdodCk7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSB2ZWxvY2l0eSBpbiB0aGUgZGlyZWN0aW9uIGl0IG5lZWRzIHRvIHNjcm9sbFxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IChjdXJyZW50UG9zID4gKHRoaXMub3B0SGVpZ2h0IC8gMikgPyAxIDogLTEpO1xuICAgICAgICAgICAgdGhpcy5kZWNlbGVyYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5kZXhGb3JZKHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguYWJzKE1hdGgucm91bmQoeSAvIHRoaXMub3B0SGVpZ2h0KSksIDApLCB0aGlzLmNvbC5vcHRpb25zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGNoZWNrIGRpc2FibGVkP1xuICAgIG9uU3RhcnQoZGV0YWlsKSB7XG4gICAgICAgIC8vIFdlIGhhdmUgdG8gcHJldmVudCBkZWZhdWx0IGluIG9yZGVyIHRvIGJsb2NrIHNjcm9sbGluZyB1bmRlciB0aGUgcGlja2VyXG4gICAgICAgIC8vIGJ1dCB3ZSBETyBOT1QgaGF2ZSB0byBzdG9wIHByb3BhZ2F0aW9uLCBzaW5jZSB3ZSBzdGlsbCB3YW50XG4gICAgICAgIC8vIHNvbWUgXCJjbGlja1wiIGV2ZW50cyB0byBjYXB0dXJlXG4gICAgICAgIGRldGFpbC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZXRhaWwuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIHJlc2V0IGV2ZXJ5dGhpbmdcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbC5vcHRpb25zO1xuICAgICAgICBsZXQgbWluWSA9IChvcHRpb25zLmxlbmd0aCAtIDEpO1xuICAgICAgICBsZXQgbWF4WSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zW2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgbWluWSA9IE1hdGgubWluKG1pblksIGkpO1xuICAgICAgICAgICAgICAgIG1heFkgPSBNYXRoLm1heChtYXhZLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pblkgPSAtKG1pblkgKiB0aGlzLm9wdEhlaWdodCk7XG4gICAgICAgIHRoaXMubWF4WSA9IC0obWF4WSAqIHRoaXMub3B0SGVpZ2h0KTtcbiAgICB9XG4gICAgb25Nb3ZlKGRldGFpbCkge1xuICAgICAgICBkZXRhaWwuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGV0YWlsLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHNjcm9sbCBwb3NpdGlvbiByZWxhdGl2ZSB0byBwb2ludGVyIHN0YXJ0IHBvc2l0aW9uXG4gICAgICAgIGxldCB5ID0gdGhpcy55ICsgZGV0YWlsLmRlbHRhWTtcbiAgICAgICAgaWYgKHkgPiB0aGlzLm1pblkpIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbGluZyB1cCBoaWdoZXIgdGhhbiBzY3JvbGwgYXJlYVxuICAgICAgICAgICAgeSA9IE1hdGgucG93KHksIDAuOCk7XG4gICAgICAgICAgICB0aGlzLmJvdW5jZUZyb20gPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHkgPCB0aGlzLm1heFkpIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbGluZyBkb3duIGJlbG93IHNjcm9sbCBhcmVhXG4gICAgICAgICAgICB5ICs9IE1hdGgucG93KHRoaXMubWF4WSAtIHksIDAuOSk7XG4gICAgICAgICAgICB0aGlzLmJvdW5jZUZyb20gPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3VuY2VGcm9tID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZSh5LCAwLCBmYWxzZSk7XG4gICAgfVxuICAgIG9uRW5kKGRldGFpbCkge1xuICAgICAgICBpZiAodGhpcy5ib3VuY2VGcm9tID4gMCkge1xuICAgICAgICAgICAgLy8gYm91bmNlIGJhY2sgdXBcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMubWluWSwgMTAwLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmNlRnJvbSA8IDApIHtcbiAgICAgICAgICAgIC8vIGJvdW5jZSBiYWNrIGRvd25cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMubWF4WSwgMTAwLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBjbGFtcCgtTUFYX1BJQ0tFUl9TUEVFRCwgZGV0YWlsLnZlbG9jaXR5WSAqIDIzLCBNQVhfUElDS0VSX1NQRUVEKTtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkgPT09IDAgJiYgZGV0YWlsLmRlbHRhWSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0ID0gZGV0YWlsLmV2ZW50LnRhcmdldC5jbG9zZXN0KCcucGlja2VyLW9wdCcpO1xuICAgICAgICAgICAgaWYgKG9wdCAmJiBvcHQuaGFzQXR0cmlidXRlKCdvcHQtaW5kZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQocGFyc2VJbnQob3B0LmdldEF0dHJpYnV0ZSgnb3B0LWluZGV4JyksIDEwKSwgVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gZGV0YWlsLmRlbHRhWTtcbiAgICAgICAgICAgIHRoaXMuZGVjZWxlcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZnJlc2goZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIGxldCBtaW4gPSB0aGlzLmNvbC5vcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBtYXggPSAwO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb2wub3B0aW9ucztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnNbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIGkpO1xuICAgICAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgdXBkYXRlIHNlbGVjdGVkIHZhbHVlIGlmIGNvbHVtbiBoYXMgYVxuICAgICAgICAgKiB2ZWxvY2l0eSBvZiAwLiBJZiBpdCBkb2VzIG5vdCwgdGhlbiB0aGVcbiAgICAgICAgICogY29sdW1uIGlzIGFuaW1hdGluZyBtaWdodCBsYW5kIG9uXG4gICAgICAgICAqIGEgdmFsdWUgZGlmZmVyZW50IHRoYW4gdGhlIHZhbHVlIGF0XG4gICAgICAgICAqIHNlbGVjdGVkSW5kZXhcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGNsYW1wKG1pbiwgdGhpcy5jb2wuc2VsZWN0ZWRJbmRleCB8fCAwLCBtYXgpO1xuICAgICAgICBpZiAodGhpcy5jb2wucHJldlNlbGVjdGVkICE9PSBzZWxlY3RlZEluZGV4IHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgY29uc3QgeSA9IChzZWxlY3RlZEluZGV4ICogdGhpcy5vcHRIZWlnaHQpICogLTE7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHksIFRSQU5TSVRJT05fRFVSQVRJT04sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5jb2w7XG4gICAgICAgIGNvbnN0IEJ1dHRvbiA9ICdidXR0b24nO1xuICAgICAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICAgICAgICAgJ3BpY2tlci1jb2wnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdwaWNrZXItb3B0cy1sZWZ0JzogdGhpcy5jb2wuYWxpZ24gPT09ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAncGlja2VyLW9wdHMtcmlnaHQnOiB0aGlzLmNvbC5hbGlnbiA9PT0gJ3JpZ2h0J1xuICAgICAgICAgICAgfSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAnbWF4LXdpZHRoJzogdGhpcy5jb2wuY29sdW1uV2lkdGhcbiAgICAgICAgICAgIH0gfSwgY29sLnByZWZpeCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1wcmVmaXhcIiwgc3R5bGU6IHsgd2lkdGg6IGNvbC5wcmVmaXhXaWR0aCB9IH0sIGNvbC5wcmVmaXgpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1vcHRzXCIsIHN0eWxlOiB7IG1heFdpZHRoOiBjb2wub3B0aW9uc1dpZHRoIH0sIHJlZjogZWwgPT4gdGhpcy5vcHRzRWwgPSBlbCB9LCBjb2wub3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PiBoKEJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzczogeyAncGlja2VyLW9wdCc6IHRydWUsICdwaWNrZXItb3B0LWRpc2FibGVkJzogISFvLmRpc2FibGVkIH0sIFwib3B0LWluZGV4XCI6IGluZGV4IH0sIG8udGV4dCkpKSwgY29sLnN1ZmZpeCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1zdWZmaXhcIiwgc3R5bGU6IHsgd2lkdGg6IGNvbC5zdWZmaXhXaWR0aCB9IH0sIGNvbC5zdWZmaXgpKSkpO1xuICAgIH1cbiAgICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gICAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICAgICAgXCJjb2xcIjogW1wiY29sQ2hhbmdlZFwiXVxuICAgIH07IH1cbiAgICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gXCIucGlja2VyLWNvbHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbnRhaW46Y29udGVudH0ucGlja2VyLW9wdHN7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7bWF4LXdpZHRoOjEwMCV9LnBpY2tlci1vcHR7bGVmdDowO3RvcDowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtib3JkZXI6MDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtjb250YWluOnN0cmljdDtvdmVyZmxvdzpoaWRkZW47d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucGlja2VyLW9wdCxbZGlyPXJ0bF0gLnBpY2tlci1vcHR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfS5waWNrZXItb3B0LnBpY2tlci1vcHQtZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZX0ucGlja2VyLW9wdC1kaXNhYmxlZHtvcGFjaXR5OjB9LnBpY2tlci1vcHRzLWxlZnR7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0ucGlja2VyLW9wdHMtcmlnaHR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5waWNrZXItb3B0OmFjdGl2ZSwucGlja2VyLW9wdDpmb2N1c3tvdXRsaW5lOm5vbmV9LnBpY2tlci1wcmVmaXh7dGV4dC1hbGlnbjplbmR9LnBpY2tlci1wcmVmaXgsLnBpY2tlci1zdWZmaXh7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7d2hpdGUtc3BhY2U6bm93cmFwfS5waWNrZXItc3VmZml4e3RleHQtYWxpZ246c3RhcnR9LnBpY2tlci1jb2x7cGFkZGluZy1sZWZ0OjRweDtwYWRkaW5nLXJpZ2h0OjRweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucGlja2VyLWNvbHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6NHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjRweDstd2Via2l0LXBhZGRpbmctZW5kOjRweDtwYWRkaW5nLWlubGluZS1lbmQ6NHB4fX0ucGlja2VyLW9wdHMsLnBpY2tlci1wcmVmaXgsLnBpY2tlci1zdWZmaXh7dG9wOjc3cHg7cG9pbnRlci1ldmVudHM6bm9uZX0ucGlja2VyLW9wdCwucGlja2VyLW9wdHMsLnBpY2tlci1wcmVmaXgsLnBpY2tlci1zdWZmaXh7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjIwcHg7bGluZS1oZWlnaHQ6NDJweH0ucGlja2VyLW9wdHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7aGVpZ2h0OjQ2cHg7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0b306aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnBpY2tlci1vcHQsW2Rpcj1ydGxdIC5waWNrZXItb3B0ey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgY2VudGVyfVwiOyB9XG59O1xuY29uc3QgUElDS0VSX09QVF9TRUxFQ1RFRCA9ICdwaWNrZXItb3B0LXNlbGVjdGVkJztcbmNvbnN0IERFQ0VMRVJBVElPTl9GUklDVElPTiA9IDAuOTc7XG5jb25zdCBNQVhfUElDS0VSX1NQRUVEID0gOTA7XG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuXG5leHBvcnQgeyBEYXRldGltZSBhcyBpb25fZGF0ZXRpbWUsIFBpY2tlciBhcyBpb25fcGlja2VyLCBQaWNrZXJDb2x1bW5DbXAgYXMgaW9uX3BpY2tlcl9jb2x1bW4gfTtcbiIsImNvbnN0IGhvc3RDb250ZXh0ID0gKHNlbGVjdG9yLCBlbCkgPT4ge1xyXG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29sb3JDbGFzc2VzID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyB7XHJcbiAgICAgICAgJ2lvbi1jb2xvcic6IHRydWUsXHJcbiAgICAgICAgW2Bpb24tY29sb3ItJHtjb2xvcn1gXTogdHJ1ZVxyXG4gICAgfSA6IHVuZGVmaW5lZDtcclxufTtcclxuY29uc3QgZ2V0Q2xhc3NMaXN0ID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYyAhPSBudWxsKVxyXG4gICAgICAgICAgICAubWFwKGMgPT4gYy50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYyA9PiBjICE9PSAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcbmNvbnN0IGdldENsYXNzTWFwID0gKGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goYyA9PiBtYXBbY10gPSB0cnVlKTtcclxuICAgIHJldHVybiBtYXA7XHJcbn07XHJcbmNvbnN0IFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xyXG5jb25zdCBvcGVuVVJMID0gYXN5bmMgKHVybCwgZXYsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xyXG4gICAgICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=