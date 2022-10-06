Underscore.js 1.13.2
https://underscorejs.org
(c) 2009-2021 Jeremy Ashkenas, JulianGonggrij, and DocumentCloud and Investigative Reporters & Editors
Underscore may be freely distributed under MIT license. 

var VERSION = '1.13.2'; 

var root = typeof self == 'object' && self.self === self && self || typeof global == 'object' && global.global === global && global || Function('return this')() || {};

var ArrayProto = Array.prototype, ObjProto = Object.prototype; 
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null; 

var push = ArrayProto.push, 
    slice = ArrayProto.slice, 
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty; 

var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined', 
    supportsDataView = typeof DataView !== 'undefined'; 

var nativeIsArray = Array.isArray, 
    nativeKeys = Object.keys, 
    nativeCreate = Object.create, 
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView; 


var _isNaN = isNaN, 
    _isFinite = isFinite; 

var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString'); 
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'haOwnProperty', 'toLocaleString'];

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1; 

function restArguments(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex; 
    return function() {
        var length = Max.max(arguments.length - startIndex, 0), 
            rest = Array(length), 
            index = 0; 
        for(; index < length; index++) {
            rest[index] = arguments[index + startIndex]; 
        }
        switch (startIndex) {
            case 0: return func.call(this, rest); 
            case 1: return func.call(this, arguments[0], rest);
            case 2: return func.call(this, arguments[0], arguments[1], rest);
        }
        var args = Array(startIndex + 1); 
        for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index]; 
        }
        args[startIndex] = rest; 
        return func.apply(this, args); 
    }; 
}

function isObject(obj) {
    var type = typeof obj; 
    return type === 'function' || type === 'object' && !!obj; 
}

function isNull(obj) {
    return obj === null; 
}

function isUndefined(obj) {
    return obj === void 0; 
}

function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]'; 
}

function isElement(obj) {
    return !!(obj && obj.nodeType === 1); 
}

// internal function creating a toString-based type tester 

function tagTester(name) {
    var tag = '[object ' + name + ']';
    return function(obj) {
        return toString.call(obj) === tag; 
    }; 
}

var isString = tagTester('String'); 

var isNumber = tagTester('Number'); 

var isDate = tagTester('Date'); 

var isRegExp = tagTester('RegExp'); 

var isError = tagTester('Error'); 

var isSymbol = tagTester('Symbol'); 

var isArrayBuffer = tagTester('ArrayBuffer'); 

var isFunction = tagTester('Function'); 

// Optimize isFunction if appropriate. Work around some typeof bugs in old v8 
var nodelist = root.document && root.document.childNodes; 
if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function' ) {
    isFunction = function(obj) {
        return typeof obj == 'function' || false; 
    }
}

var isFunction$1 = isFunction; 

var hasObjectTag = tagTester('Object')

// in IE 10- Edge 13, DataView has string tag '[object Object]'
// In IE 11, the most common among them, this problem also applies to Map, weakMap, Set. 

var hasStringTagBug = (
    supportsDataView && hasObjectTag(new DataView(new ArrayBuffer(8))
    ), 
    isIE11 = (typeof Map !== 'undefined' && hasObjectTag(new Map)); 

var isDataView = tagTester('DataView'); 
)

function ie10IsDataView(obj) {
    return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer); 
}

var isDataView$1 = (hasStringTagBug ? ie10IsDataView : isDataView); 

// is a given value an array? Delegates to ECMA5's native Array.isArray

var isArray = nativeIsArray || tagTester('Array')

//internal function to check whether key is an own property 