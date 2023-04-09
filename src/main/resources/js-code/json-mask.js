var EntryPoint =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFormatter = exports.GenericFormatter = exports.Type = void 0;
var mask_holder_1 = __webpack_require__(5);
var Type;
(function (Type) {
    Type[Type["CPF"] = 0] = "CPF";
    Type[Type["CNPJ"] = 1] = "CNPJ";
    Type[Type["MOBILE"] = 2] = "MOBILE";
    Type[Type["EMAIL"] = 3] = "EMAIL";
})(Type = exports.Type || (exports.Type = {}));
var GenericFormatter = /** @class */ (function () {
    function GenericFormatter() {
    }
    GenericFormatter.prototype.apply = function (data, mask) {
        var treatedData = data.replace(/\*/g, "0").trim();
        var masked = [];
        for (var controller = 0, i = 0; i < mask.length; i++) {
            var character = mask.charAt(i);
            if (character === mask_holder_1.MaskHolder.HASH) {
                masked.push(mask_holder_1.MaskHolder.getChar(treatedData, controller));
                controller++;
            }
            else {
                masked.push(character);
                controller = character === mask_holder_1.MaskHolder.STAR ? controller + 1 : controller;
            }
        }
        return masked.join("");
    };
    return GenericFormatter;
}());
exports.GenericFormatter = GenericFormatter;
var EmailFormatter = /** @class */ (function () {
    function EmailFormatter() {
    }
    EmailFormatter.prototype.apply = function (email, mask) {
        var masked = [];
        var maskTreated = mask_holder_1.MaskHolder.treatEmailMask(mask);
        for (var controller = 0, i = 0; i < email.length; i++) {
            var maskCharacter = mask_holder_1.MaskHolder.getChar(maskTreated, controller);
            if (maskCharacter == mask_holder_1.MaskHolder.HASH || email.charAt(i) == mask_holder_1.MaskHolder.AT || mask_holder_1.MaskHolder.getChar(maskTreated, controller) == email.charAt(i)) {
                if (masked.length < 4 && email.charAt(i) == mask_holder_1.MaskHolder.AT) {
                    masked.push("******" + email.charAt(i));
                    while (mask_holder_1.MaskHolder.getChar(maskTreated, controller) != mask_holder_1.MaskHolder.AT)
                        controller++;
                }
                else {
                    masked.push(email.charAt(i));
                }
                controller++;
            }
            else {
                masked.push(mask_holder_1.MaskHolder.STAR);
                controller = maskCharacter == mask_holder_1.MaskHolder.STAR ? controller + 1 : controller;
            }
        }
        return masked.join("").trim();
    };
    return EmailFormatter;
}());
exports.EmailFormatter = EmailFormatter;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.maskObj = void 0;
var mask_processor_1 = __webpack_require__(2);
String.prototype.includes = function (value) {
    return value.indexOf(this) > 0;
};
function mask(json, settings) {
    var result = new mask_processor_1.MaskProcessor().process(JSON.parse(JSON.stringify(json)), JSON.parse(JSON.stringify(settings)));
    return JSON.parse(result).value;
}
exports.default = mask;
function maskObj(json, settings) {
    var result = new mask_processor_1.MaskProcessor().process(JSON.parse(json), JSON.parse(settings));
    return JSON.parse(result).value;
}
exports.maskObj = maskObj;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = exports.MaskProcessor = void 0;
var jsonpath = __webpack_require__(3);
var mask_default_1 = __webpack_require__(4);
var mask_formatter_1 = __webpack_require__(0);
var MaskProcessor = /** @class */ (function () {
    function MaskProcessor() {
        this.formatters = new Map([
            [mask_formatter_1.Type.CPF, new mask_formatter_1.GenericFormatter()],
            [mask_formatter_1.Type.CNPJ, new mask_formatter_1.GenericFormatter()],
            [mask_formatter_1.Type.MOBILE, new mask_formatter_1.GenericFormatter()],
            [mask_formatter_1.Type.EMAIL, new mask_formatter_1.EmailFormatter()]
        ]);
    }
    MaskProcessor.prototype.process = function (json, settings) {
        var _this = this;
        settings.forEach(function (setting) {
            var result = (new jsonpath.JSONPath({ json: json, path: setting.path, resultType: 'all' }));
            result.forEach(function (field) {
                var type = mask_formatter_1.Type[setting.type];
                field.parent[field.parentProperty] = _this.formatters.get(type).apply(field.value, mask_default_1.MaskDefault.masks.get(type));
            });
        });
        return JSON.stringify(json);
    };
    return MaskProcessor;
}());
exports.MaskProcessor = MaskProcessor;
var Setting = /** @class */ (function () {
    function Setting(type, path) {
        this.type = type;
        this.path = path;
    }
    return Setting;
}());
exports.Setting = Setting;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JSONPath = {}));
}(this, (function (exports) { 'use strict';

    function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function (obj) {
                return typeof obj;
            };
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }

        return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }

        return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;

            if (typeof Class !== "function") {
                throw new TypeError("Super expression must either be null or a function");
            }

            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);

                _cache.set(Class, Wrapper);
            }

            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        }

        return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
        };
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

        if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;

                var F = function () {};

                return {
                    s: F,
                    n: function () {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: F
                };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var normalCompletion = true,
            didErr = false,
            err;
        return {
            s: function () {
                it = it.call(o);
            },
            n: function () {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function (e) {
                didErr = true;
                err = e;
            },
            f: function () {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally {
                    if (didErr) throw err;
                }
            }
        };
    }

    var hasOwnProp = Object.prototype.hasOwnProperty;
    /**
     * @typedef {null|boolean|number|string|PlainObject|GenericArray} JSONObject
     */

    /**
     * Copies array and then pushes item into it.
     * @param {GenericArray} arr Array to copy and into which to push
     * @param {any} item Array item to add (to end)
     * @returns {GenericArray} Copy of the original array
     */

    function push(arr, item) {
        arr = arr.slice();
        arr.push(item);
        return arr;
    }
    /**
     * Copies array and then unshifts item into it.
     * @param {any} item Array item to add (to beginning)
     * @param {GenericArray} arr Array to copy and into which to unshift
     * @returns {GenericArray} Copy of the original array
     */


    function unshift(item, arr) {
        arr = arr.slice();
        arr.unshift(item);
        return arr;
    }
    /**
     * Caught when JSONPath is used without `new` but rethrown if with `new`
     * @extends Error
     */


    var NewError = /*#__PURE__*/function (_Error) {
        _inherits(NewError, _Error);

        var _super = _createSuper(NewError);

        /**
         * @param {any} value The evaluated scalar value
         */
        function NewError(value) {
            var _this;

            _classCallCheck(this, NewError);

            _this = _super.call(this, 'JSONPath should not be called with "new" (it prevents return ' + 'of (unwrapped) scalar values)');
            _this.avoidNew = true;
            _this.value = value;
            _this.name = 'NewError';
            return _this;
        }

        return NewError;
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    /**
     * @typedef {PlainObject} ReturnObject
     * @property {string} path
     * @property {JSONObject} value
     * @property {PlainObject|GenericArray} parent
     * @property {string} parentProperty
     */

    /**
     * @callback JSONPathCallback
     * @param {string|PlainObject} preferredOutput
     * @param {"value"|"property"} type
     * @param {ReturnObject} fullRetObj
     * @returns {void}
     */

    /**
     * @callback OtherTypeCallback
     * @param {JSONObject} val
     * @param {string} path
     * @param {PlainObject|GenericArray} parent
     * @param {string} parentPropName
     * @returns {boolean}
     */

    /* eslint-disable max-len -- Can make multiline type after https://github.com/syavorsky/comment-parser/issues/109 */

    /**
     * @typedef {PlainObject} JSONPathOptions
     * @property {JSON} json
     * @property {string|string[]} path
     * @property {"value"|"path"|"pointer"|"parent"|"parentProperty"|"all"} [resultType="value"]
     * @property {boolean} [flatten=false]
     * @property {boolean} [wrap=true]
     * @property {PlainObject} [sandbox={}]
     * @property {boolean} [preventEval=false]
     * @property {PlainObject|GenericArray|null} [parent=null]
     * @property {string|null} [parentProperty=null]
     * @property {JSONPathCallback} [callback]
     * @property {OtherTypeCallback} [otherTypeCallback] Defaults to
     *   function which throws on encountering `@other`
     * @property {boolean} [autostart=true]
     */

    /* eslint-enable max-len -- Can make multiline type after https://github.com/syavorsky/comment-parser/issues/109 */

    /**
     * @param {{path: string; json: string; resultType: string}} opts If a string, will be treated as `expr`
     * @param {string} [expr] JSON path to evaluate
     * @param {JSON} [obj] JSON object to evaluate against
     * @param {JSONPathCallback} [callback] Passed 3 arguments: 1) desired payload
     *     per `resultType`, 2) `"value"|"property"`, 3) Full returned object with
     *     all payloads
     * @param {OtherTypeCallback} [otherTypeCallback] If `@other()` is at the end
     *   of one's query, this will be invoked with the value of the item, its
     *   path, its parent, and its parent's property name, and it should return
     *   a boolean indicating whether the supplied value belongs to the "other"
     *   type or not (or it may handle transformations and return `false`).
     * @returns {JSONPath}
     * @class
     */


    function JSONPath(opts, expr, obj, callback, otherTypeCallback) {
        // eslint-disable-next-line no-restricted-syntax
        if (!(this instanceof JSONPath)) {
            try {
                return new JSONPath(opts, expr, obj, callback, otherTypeCallback);
            } catch (e) {
                if (!e.avoidNew) {
                    throw e;
                }

                return e.value;
            }
        }

        if (typeof opts === 'string') {
            otherTypeCallback = callback;
            callback = obj;
            obj = expr;
            expr = opts;
            opts = null;
        }

        var optObj = opts && _typeof(opts) === 'object';
        opts = opts || {};
        this.json = opts.json || obj;
        this.path = opts.path || expr;
        this.resultType = opts.resultType || 'value';
        this.flatten = opts.flatten || false;
        this.wrap = hasOwnProp.call(opts, 'wrap') ? opts.wrap : true;
        this.sandbox = opts.sandbox || {};
        this.preventEval = opts.preventEval || false;
        this.parent = opts.parent || null;
        this.parentProperty = opts.parentProperty || null;
        this.callback = opts.callback || callback || null;

        this.otherTypeCallback = opts.otherTypeCallback || otherTypeCallback || function () {
            throw new TypeError('You must supply an otherTypeCallback callback option ' + 'with the @other() operator.');
        };

        if (opts.autostart !== false) {
            var args = {
                path: optObj ? opts.path : expr
            };

            if (!optObj) {
                args.json = obj;
            } else if ('json' in opts) {
                args.json = opts.json;
            }

            var ret = this.evaluate(args);

            if (!ret || _typeof(ret) !== 'object') {
                throw new NewError(ret);
            }

            return ret;
        }
    } // PUBLIC METHODS


    JSONPath.prototype.evaluate = function (expr, json, callback, otherTypeCallback) {
        var _this2 = this;

        var currParent = this.parent,
            currParentProperty = this.parentProperty;
        var flatten = this.flatten,
            wrap = this.wrap;
        this.currResultType = this.resultType;
        this.currPreventEval = this.preventEval;
        this.currSandbox = this.sandbox;
        callback = callback || this.callback;
        this.currOtherTypeCallback = otherTypeCallback || this.otherTypeCallback;
        json = json || this.json;
        expr = expr || this.path;

        if (expr && _typeof(expr) === 'object' && !Array.isArray(expr)) {
            if (!expr.path && expr.path !== '') {
                throw new TypeError('You must supply a "path" property when providing an object ' + 'argument to JSONPath.evaluate().');
            }

            if (!hasOwnProp.call(expr, 'json')) {
                throw new TypeError('You must supply a "json" property when providing an object ' + 'argument to JSONPath.evaluate().');
            }

            var _expr = expr;
            json = _expr.json;
            flatten = hasOwnProp.call(expr, 'flatten') ? expr.flatten : flatten;
            this.currResultType = hasOwnProp.call(expr, 'resultType') ? expr.resultType : this.currResultType;
            this.currSandbox = hasOwnProp.call(expr, 'sandbox') ? expr.sandbox : this.currSandbox;
            wrap = hasOwnProp.call(expr, 'wrap') ? expr.wrap : wrap;
            this.currPreventEval = hasOwnProp.call(expr, 'preventEval') ? expr.preventEval : this.currPreventEval;
            callback = hasOwnProp.call(expr, 'callback') ? expr.callback : callback;
            this.currOtherTypeCallback = hasOwnProp.call(expr, 'otherTypeCallback') ? expr.otherTypeCallback : this.currOtherTypeCallback;
            currParent = hasOwnProp.call(expr, 'parent') ? expr.parent : currParent;
            currParentProperty = hasOwnProp.call(expr, 'parentProperty') ? expr.parentProperty : currParentProperty;
            expr = expr.path;
        }

        currParent = currParent || null;
        currParentProperty = currParentProperty || null;

        if (Array.isArray(expr)) {
            expr = JSONPath.toPathString(expr);
        }

        if (!expr && expr !== '' || !json) {
            return undefined;
        }

        var exprList = JSONPath.toPathArray(expr);

        if (exprList[0] === '$' && exprList.length > 1) {
            exprList.shift();
        }

        this._hasParentSelector = null;

        var result = this._trace(exprList, json, ['$'], currParent, currParentProperty, callback).filter(function (ea) {
            return ea && !ea.isParentSelector;
        });

        if (!result.length) {
            return wrap ? [] : undefined;
        }

        if (!wrap && result.length === 1 && !result[0].hasArrExpr) {
            return this._getPreferredOutput(result[0]);
        }

        return result.reduce(function (rslt, ea) {
            var valOrPath = _this2._getPreferredOutput(ea);

            if (flatten && Array.isArray(valOrPath)) {
                rslt = rslt.concat(valOrPath);
            } else {
                rslt.push(valOrPath);
            }

            return rslt;
        }, []);
    }; // PRIVATE METHODS


    JSONPath.prototype._getPreferredOutput = function (ea) {
        var resultType = this.currResultType;

        switch (resultType) {
            case 'all':
            {
                var path = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
                ea.pointer = JSONPath.toPointer(path);
                ea.path = typeof ea.path === 'string' ? ea.path : JSONPath.toPathString(ea.path);
                return ea;
            }

            case 'value':
            case 'parent':
            case 'parentProperty':
                return ea[resultType];

            case 'path':
                return JSONPath.toPathString(ea[resultType]);

            case 'pointer':
                return JSONPath.toPointer(ea.path);

            default:
                throw new TypeError('Unknown result type');
        }
    };

    JSONPath.prototype._handleCallback = function (fullRetObj, callback, type) {
        if (callback) {
            var preferredOutput = this._getPreferredOutput(fullRetObj);

            fullRetObj.path = typeof fullRetObj.path === 'string' ? fullRetObj.path : JSONPath.toPathString(fullRetObj.path); // eslint-disable-next-line node/callback-return

            callback(preferredOutput, type, fullRetObj);
        }
    };
    /**
     *
     * @param {string} expr
     * @param {JSONObject} val
     * @param {string} path
     * @param {PlainObject|GenericArray} parent
     * @param {string} parentPropName
     * @param {JSONPathCallback} callback
     * @param {boolean} hasArrExpr
     * @param {boolean} literalPriority
     * @returns {ReturnObject|ReturnObject[]}
     */


    JSONPath.prototype._trace = function (expr, val, path, parent, parentPropName, callback, hasArrExpr, literalPriority) {
        var _this3 = this;

        // No expr to follow? return path and value as the result of
        //  this trace branch
        var retObj;

        if (!expr.length) {
            retObj = {
                path: path,
                value: val,
                parent: parent,
                parentProperty: parentPropName,
                hasArrExpr: hasArrExpr
            };

            this._handleCallback(retObj, callback, 'value');

            return retObj;
        }

        var loc = expr[0],
            x = expr.slice(1); // We need to gather the return value of recursive trace calls in order to
        // do the parent sel computation.

        var ret = [];
        /**
         *
         * @param {ReturnObject|ReturnObject[]} elems
         * @returns {void}
         */

        function addRet(elems) {
            if (Array.isArray(elems)) {
                // This was causing excessive stack size in Node (with or
                //  without Babel) against our performance test:
                //  `ret.push(...elems);`
                elems.forEach(function (t) {
                    ret.push(t);
                });
            } else {
                ret.push(elems);
            }
        }

        if ((typeof loc !== 'string' || literalPriority) && val && hasOwnProp.call(val, loc)) {
            // simple case--directly follow property
            addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr)); // eslint-disable-next-line unicorn/prefer-switch -- Part of larger `if`
        } else if (loc === '*') {
            // all child properties
            this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
                addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true, true));
            });
        } else if (loc === '..') {
            // all descendent parent properties
            // Check remaining expression with val's immediate children
            addRet(this._trace(x, val, path, parent, parentPropName, callback, hasArrExpr));

            this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
                // We don't join m and x here because we only want parents,
                //   not scalar values
                if (_typeof(v[m]) === 'object') {
                    // Keep going with recursive descent on val's
                    //   object children
                    addRet(_this3._trace(unshift(l, _x), v[m], push(p, m), v, m, cb, true));
                }
            }); // The parent sel computation is handled in the frame above using the
            // ancestor object of val

        } else if (loc === '^') {
            // This is not a final endpoint, so we do not invoke the callback here
            this._hasParentSelector = true;
            return {
                path: path.slice(0, -1),
                expr: x,
                isParentSelector: true
            };
        } else if (loc === '~') {
            // property name
            retObj = {
                path: push(path, loc),
                value: parentPropName,
                parent: parent,
                parentProperty: null
            };

            this._handleCallback(retObj, callback, 'property');

            return retObj;
        } else if (loc === '$') {
            // root only
            addRet(this._trace(x, val, path, null, null, callback, hasArrExpr));
        } else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(loc)) {
            // [start:end:step]  Python slice syntax
            addRet(this._slice(loc, x, val, path, parent, parentPropName, callback));
        } else if (loc.indexOf('?(') === 0) {
            // [?(expr)] (filtering)
            if (this.currPreventEval) {
                throw new Error('Eval [?(expr)] prevented in JSONPath expression.');
            }

            this._walk(loc, x, val, path, parent, parentPropName, callback, function (m, l, _x, v, p, par, pr, cb) {
                if (_this3._eval(l.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, '$1'), v[m], m, p, par, pr)) {
                    addRet(_this3._trace(unshift(m, _x), v, p, par, pr, cb, true));
                }
            });
        } else if (loc[0] === '(') {
            // [(expr)] (dynamic property/index)
            if (this.currPreventEval) {
                throw new Error('Eval [(expr)] prevented in JSONPath expression.');
            } // As this will resolve to a property name (but we don't know it
            //  yet), property and parent information is relative to the
            //  parent of the property to which this expression will resolve


            addRet(this._trace(unshift(this._eval(loc, val, path[path.length - 1], path.slice(0, -1), parent, parentPropName), x), val, path, parent, parentPropName, callback, hasArrExpr));
        } else if (loc[0] === '@') {
            // value type: @boolean(), etc.
            var addType = false;
            var valueType = loc.slice(1, -2);

            switch (valueType) {
                case 'scalar':
                    if (!val || !['object', 'function'].includes(_typeof(val))) {
                        addType = true;
                    }

                    break;

                case 'boolean':
                case 'string':
                case 'undefined':
                case 'function':
                    // eslint-disable-next-line valid-typeof
                    if (_typeof(val) === valueType) {
                        addType = true;
                    }

                    break;

                case 'integer':
                    if (Number.isFinite(val) && !(val % 1)) {
                        addType = true;
                    }

                    break;

                case 'number':
                    if (Number.isFinite(val)) {
                        addType = true;
                    }

                    break;

                case 'nonFinite':
                    if (typeof val === 'number' && !Number.isFinite(val)) {
                        addType = true;
                    }

                    break;

                case 'object':
                    // eslint-disable-next-line valid-typeof
                    if (val && _typeof(val) === valueType) {
                        addType = true;
                    }

                    break;

                case 'array':
                    if (Array.isArray(val)) {
                        addType = true;
                    }

                    break;

                case 'other':
                    addType = this.currOtherTypeCallback(val, path, parent, parentPropName);
                    break;

                case 'null':
                    if (val === null) {
                        addType = true;
                    }

                    break;

                /* c8 ignore next 2 */

                default:
                    throw new TypeError('Unknown value type ' + valueType);
            }

            if (addType) {
                retObj = {
                    path: path,
                    value: val,
                    parent: parent,
                    parentProperty: parentPropName
                };

                this._handleCallback(retObj, callback, 'value');

                return retObj;
            } // `-escaped property

        } else if (loc[0] === '`' && val && hasOwnProp.call(val, loc.slice(1))) {
            var locProp = loc.slice(1);
            addRet(this._trace(x, val[locProp], push(path, locProp), val, locProp, callback, hasArrExpr, true));
        } else if (loc.includes(',')) {
            // [name1,name2,...]
            var parts = loc.split(',');

            var _iterator = _createForOfIteratorHelper(parts),
                _step;

            try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var part = _step.value;
                    addRet(this._trace(unshift(part, x), val, path, parent, parentPropName, callback, true));
                } // simple case--directly follow property

            } catch (err) {
                _iterator.e(err);
            } finally {
                _iterator.f();
            }
        } else if (!literalPriority && val && hasOwnProp.call(val, loc)) {
            addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr, true));
        } // We check the resulting values for parent selections. For parent
        // selections we discard the value object and continue the trace with the
        // current val object


        if (this._hasParentSelector) {
            for (var t = 0; t < ret.length; t++) {
                var rett = ret[t];

                if (rett && rett.isParentSelector) {
                    var tmp = this._trace(rett.expr, val, rett.path, parent, parentPropName, callback, hasArrExpr);

                    if (Array.isArray(tmp)) {
                        ret[t] = tmp[0];
                        var tl = tmp.length;

                        for (var tt = 1; tt < tl; tt++) {
                            t++;
                            ret.splice(t, 0, tmp[tt]);
                        }
                    } else {
                        ret[t] = tmp;
                    }
                }
            }
        }

        return ret;
    };

    JSONPath.prototype._walk = function (loc, expr, val, path, parent, parentPropName, callback, f) {
        if (Array.isArray(val)) {
            var n = val.length;

            for (var i = 0; i < n; i++) {
                f(i, loc, expr, val, path, parent, parentPropName, callback);
            }
        } else if (val && _typeof(val) === 'object') {
            Object.keys(val).forEach(function (m) {
                f(m, loc, expr, val, path, parent, parentPropName, callback);
            });
        }
    };

    JSONPath.prototype._slice = function (loc, expr, val, path, parent, parentPropName, callback) {
        if (!Array.isArray(val)) {
            return undefined;
        }

        var len = val.length,
            parts = loc.split(':'),
            step = parts[2] && Number.parseInt(parts[2]) || 1;
        var start = parts[0] && Number.parseInt(parts[0]) || 0,
            end = parts[1] && Number.parseInt(parts[1]) || len;
        start = start < 0 ? Math.max(0, start + len) : Math.min(len, start);
        end = end < 0 ? Math.max(0, end + len) : Math.min(len, end);
        var ret = [];

        for (var i = start; i < end; i += step) {
            var tmp = this._trace(unshift(i, expr), val, path, parent, parentPropName, callback, true); // Should only be possible to be an array here since first part of
            //   ``unshift(i, expr)` passed in above would not be empty, nor `~`,
            //     nor begin with `@` (as could return objects)
            // This was causing excessive stack size in Node (with or
            //  without Babel) against our performance test: `ret.push(...tmp);`


            tmp.forEach(function (t) {
                ret.push(t);
            });
        }

        return ret;
    };

    JSONPath.prototype._eval = function (code, _v, _vname, path, parent, parentPropName) {
        if (code.includes('@parentProperty')) {
            this.currSandbox._$_parentProperty = parentPropName;
            code = code.replace(/@parentProperty/g, '_$_parentProperty');
        }

        if (code.includes('@parent')) {
            this.currSandbox._$_parent = parent;
            code = code.replace(/@parent/g, '_$_parent');
        }

        if (code.includes('@property')) {
            this.currSandbox._$_property = _vname;
            code = code.replace(/@property/g, '_$_property');
        }

        if (code.includes('@path')) {
            this.currSandbox._$_path = JSONPath.toPathString(path.concat([_vname]));
            code = code.replace(/@path/g, '_$_path');
        }

        if (code.includes('@root')) {
            this.currSandbox._$_root = this.json;
            code = code.replace(/@root/g, '_$_root');
        }

        if (/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(code)) {
            this.currSandbox._$_v = _v;
            code = code.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, '_$_v$1');
        }

        try {
            return this.vm.runInNewContext(code, this.currSandbox);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            throw new Error('jsonPath: ' + e.message + ': ' + code);
        }
    }; // PUBLIC CLASS PROPERTIES AND METHODS
    // Could store the cache object itself


    JSONPath.cache = {};
    /**
     * @param {string[]} pathArr Array to convert
     * @returns {string} The path string
     */

    JSONPath.toPathString = function (pathArr) {
        var x = pathArr,
            n = x.length;
        var p = '$';

        for (var i = 1; i < n; i++) {
            if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
                p += /^[\*0-9]+$/.test(x[i]) ? '[' + x[i] + ']' : "['" + x[i] + "']";
            }
        }

        return p;
    };
    /**
     * @param {string} pointer JSON Path
     * @returns {string} JSON Pointer
     */


    JSONPath.toPointer = function (pointer) {
        var x = pointer,
            n = x.length;
        var p = '';

        for (var i = 1; i < n; i++) {
            if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
                p += '/' + x[i].toString().replace(/~/g, '~0').replace(/\//g, '~1');
            }
        }

        return p;
    };
    /**
     * @param {string} expr Expression to convert
     * @returns {string[]}
     */


    JSONPath.toPathArray = function (expr) {
        var cache = JSONPath.cache;

        if (cache[expr]) {
            return cache[expr].concat();
        }

        var subx = [];
        var normalized = expr // Properties
            .replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ';$&;') // Parenthetical evaluations (filtering and otherwise), directly
            //   within brackets or single quotes
            .replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function ($0, $1) {
                return '[#' + (subx.push($1) - 1) + ']';
            }) // Escape periods and tildes within properties
            .replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function ($0, prop) {
                return "['" + prop.replace(/\./g, '%@%').replace(/~/g, '%%@@%%') + "']";
            }) // Properties operator
            .replace(/~/g, ';~;') // Split by property boundaries
            .replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ';') // Reinsert periods within properties
            .replace(/%@%/g, '.') // Reinsert tildes within properties
            .replace(/%%@@%%/g, '~') // Parent
            .replace(/(?:;)?(\^+)(?:;)?/g, function ($0, ups) {
                return ';' + ups.split('').join(';') + ';';
            }) // Descendents
            .replace(/;;;|;;/g, ';..;') // Remove trailing
            .replace(/;$|'?\]|'$/g, '');
        var exprList = normalized.split(';').map(function (exp) {
            var match = exp.match(/#([0-9]+)/);
            return !match || !match[1] ? exp : subx[match[1]];
        });
        cache[expr] = exprList;
        return cache[expr].concat();
    };

    /**
     * @callback ConditionCallback
     * @param {any} item
     * @returns {boolean}
     */

    /**
     * Copy items out of one array into another.
     * @param {GenericArray} source Array with items to copy
     * @param {GenericArray} target Array to which to copy
     * @param {ConditionCallback} conditionCb Callback passed the current item;
     *     will move item if evaluates to `true`
     * @returns {void}
     */

    var moveToAnotherArray = function moveToAnotherArray(source, target, conditionCb) {
        var il = source.length;

        for (var i = 0; i < il; i++) {
            var item = source[i];

            if (conditionCb(item)) {
                target.push(source.splice(i--, 1)[0]);
            }
        }
    };

    JSONPath.prototype.vm = {
        /**
         * @param {string} expr Expression to evaluate
         * @param {PlainObject} context Object whose items will be added
         *   to evaluation
         * @returns {any} Result of evaluated code
         */
        runInNewContext: function runInNewContext(expr, context) {
            var keys = Object.keys(context);
            var funcs = [];
            moveToAnotherArray(keys, funcs, function (key) {
                return typeof context[key] === 'function';
            });
            var values = keys.map(function (vr, i) {
                return context[vr];
            });
            var funcString = funcs.reduce(function (s, func) {
                var fString = context[func].toString();

                if (!/function/.test(fString)) {
                    fString = 'function ' + fString;
                }

                return 'var ' + func + '=' + fString + ';' + s;
            }, '');
            expr = funcString + expr; // Mitigate http://perfectionkills.com/global-eval-what-are-the-options/#new_function

            if (!/(["'])use strict\1/.test(expr) && !keys.includes('arguments')) {
                expr = 'var arguments = undefined;' + expr;
            } // Remove last semi so `return` will be inserted before
            //  the previous one instead, allowing for the return
            //  of a bare ending expression


            expr = expr.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, ''); // Insert `return`

            var lastStatementEnd = expr.lastIndexOf(';');
            var code = lastStatementEnd > -1 ? expr.slice(0, lastStatementEnd + 1) + ' return ' + expr.slice(lastStatementEnd + 1) : ' return ' + expr; // eslint-disable-next-line no-new-func

            return _construct(Function, _toConsumableArray(keys).concat([code])).apply(void 0, _toConsumableArray(values));
        }
    };

    exports.JSONPath = JSONPath;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskDefault = void 0;
var mask_formatter_1 = __webpack_require__(0);
var MaskDefault = /** @class */ (function () {
    function MaskDefault() {
    }
    MaskDefault.masks = new Map([
        [mask_formatter_1.Type.CPF, "###.***.***-**"],
        [mask_formatter_1.Type.CNPJ, "**.***.***/****-##"],
        [mask_formatter_1.Type.MOBILE, "(##)*****-####"],
        [mask_formatter_1.Type.EMAIL, "##*****@#***.###.##"]
    ]);
    return MaskDefault;
}());
exports.MaskDefault = MaskDefault;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskHolder = void 0;
var MaskHolder = /** @class */ (function () {
    function MaskHolder() {
    }
    MaskHolder.getChar = function (value, index) {
        return index > (value.length - 1) ? MaskHolder.STAR : value.charAt(index);
    };
    MaskHolder.treatEmailMask = function (mask) {
        var masked = [];
        for (var i = 0; i < mask.length; i++) {
            var c1 = mask.charAt(i);
            if (c1 == MaskHolder.HASH) {
                masked.push(mask.charAt(i));
            }
            else if (c1 == MaskHolder.STAR && mask.charAt(i - 1) == MaskHolder.HASH) {
                masked.push(MaskHolder.STAR);
            }
            else if (c1 != MaskHolder.STAR) {
                masked.push(mask.charAt(i));
            }
        }
        return masked.join("");
    };
    MaskHolder.HASH = "#";
    MaskHolder.STAR = "*";
    MaskHolder.AT = "@";
    return MaskHolder;
}());
exports.MaskHolder = MaskHolder;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTgyMWYzMDIyYzk4NjNiMWE2MjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hc2svZm9ybWF0dGVyL21hc2suZm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFzay9wcm9jZXNzb3IvbWFzay5wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2pzb25wYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXNrL21hc2suZGVmYXVsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFzay9mb3JtYXR0ZXIvbWFzay5ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REEsMkNBQXlDO0FBRXpDLElBQVksSUFBZ0M7QUFBNUMsV0FBWSxJQUFJO0lBQUcsNkJBQUc7SUFBRSwrQkFBSTtJQUFFLG1DQUFNO0lBQUUsaUNBQUs7QUFBQSxDQUFDLEVBQWhDLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQUE0QjtBQU81QztJQUFBO0lBbUJBLENBQUM7SUFsQkcsZ0NBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO1FBQzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsU0FBUzs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixvREFBb0Q7QUFDckU7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLElBQUk7QUFDbkIsaUJBQWlCLGFBQWE7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkIsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQixhQUFhO0FBQzlCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsSUFBSTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0Isa0JBQWtCLE9BQU87QUFDekIsa0JBQWtCLFdBQVc7QUFDN0Isa0JBQWtCLHlCQUF5QjtBQUMzQyxrQkFBa0IsT0FBTztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsT0FBTztBQUN0QixlQUFlLHlCQUF5QjtBQUN4QyxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0Isa0JBQWtCLEtBQUs7QUFDdkIsa0JBQWtCLGdCQUFnQjtBQUNsQyxrQkFBa0IseURBQXlEO0FBQzNFLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixZQUFZLFlBQVk7QUFDMUMsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLDhCQUE4QjtBQUNoRCxrQkFBa0IsWUFBWTtBQUM5QixrQkFBa0IsaUJBQWlCO0FBQ25DLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixhQUFhLGNBQWMscUJBQXFCO0FBQ2hFLGVBQWUsT0FBTztBQUN0QixlQUFlLEtBQUs7QUFDcEIsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZIQUE2SDs7QUFFN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFdBQVc7QUFDMUIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUseUJBQXlCO0FBQ3hDLGVBQWUsT0FBTztBQUN0QixlQUFlLGlCQUFpQjtBQUNoQyxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0MscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7OztBQUdBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsK0JBQStCO0FBQ2xFO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixTQUFTO0FBQ3BDLHVHQUF1RztBQUN2RztBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7OztBQUcvRTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhIQUE4SCxHQUFHO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLDZCQUE2QixFQUFFO0FBQy9CLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVc7QUFDckMseUJBQXlCLHlCQUF5QixPQUFPO0FBQ3pELGFBQWE7QUFDYix5QkFBeUIsR0FBRyxNQUFNLEdBQUc7QUFDckMsdUJBQXVCO0FBQ3ZCLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxJQUFJO0FBQ25CLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsYUFBYTtBQUM1QixlQUFlLGtCQUFrQjtBQUNqQztBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QixRQUFRO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0EscUJBQXFCLElBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pELGFBQWE7QUFDYixxQ0FBcUM7O0FBRXJDO0FBQ0Esa0RBQWtEO0FBQ2xELGFBQWE7QUFDYjtBQUNBOzs7QUFHQSxrQ0FBa0MsNEVBQTRFOztBQUU5RyxzREFBc0Q7QUFDdEQsdUpBQXVKOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0RBQWtELGNBQWM7O0FBRWhFLENBQUMsSTs7Ozs7Ozs7OztBQ3ppQ0QsOENBQWdEO0FBR2hEO0lBQUE7SUFRQSxDQUFDO0lBTmlCLGlCQUFLLEdBQUcsSUFBSSxHQUFHLENBQWU7UUFDeEMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQztRQUM1QixDQUFDLHFCQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDO1FBQ2pDLENBQUMscUJBQUksQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQyxxQkFBSSxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQztLQUN0QyxDQUFDO0lBQ04sa0JBQUM7Q0FBQTtBQVJZLGtDQUFXOzs7Ozs7Ozs7OztBQ0h4QjtJQUFBO0lBeUJBLENBQUM7SUFwQmlCLGtCQUFPLEdBQXJCLFVBQXNCLEtBQWEsRUFBRSxLQUFhO1FBQzlDLE9BQU8sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDN0UsQ0FBQztJQUVhLHlCQUFjLEdBQTVCLFVBQTZCLElBQVk7UUFDckMsSUFBSSxNQUFNLEdBQUcsRUFBRTtRQUVmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEIsSUFBSSxFQUFFLElBQUksVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxFQUFFLElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO2dCQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztpQkFBTSxJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBdkJzQixlQUFJLEdBQVcsR0FBRztJQUNsQixlQUFJLEdBQVcsR0FBRztJQUNsQixhQUFFLEdBQVcsR0FBRztJQXNCM0MsaUJBQUM7Q0FBQTtBQXpCWSxnQ0FBVSIsImZpbGUiOiJqc29uLW1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ODIxZjMwMjJjOTg2M2IxYTYyNSIsImltcG9ydCB7TWFza0hvbGRlcn0gZnJvbSBcIi4vbWFzay5ob2xkZXJcIjtcblxuZXhwb3J0IGVudW0gVHlwZSB7IENQRiwgQ05QSiwgTU9CSUxFLCBFTUFJTH1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXR0ZXIge1xuICAgIGFwcGx5KGRhdGE6IHN0cmluZywgbWFzazogc3RyaW5nKTogc3RyaW5nXG59XG5cblxuZXhwb3J0IGNsYXNzIEdlbmVyaWNGb3JtYXR0ZXIgaW1wbGVtZW50cyBGb3JtYXR0ZXIge1xuICAgIGFwcGx5KGRhdGE6IHN0cmluZywgbWFzazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRyZWF0ZWREYXRhID0gZGF0YS5yZXBsYWNlKC9cXCovZywgXCIwXCIpLnRyaW0oKVxuICAgICAgICBsZXQgbWFza2VkID0gW11cblxuICAgICAgICBmb3IgKGxldCBjb250cm9sbGVyID0gMCwgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVyID0gbWFzay5jaGFyQXQoaSlcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IE1hc2tIb2xkZXIuSEFTSCkge1xuICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKE1hc2tIb2xkZXIuZ2V0Q2hhcih0cmVhdGVkRGF0YSwgY29udHJvbGxlcikpXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcisrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKGNoYXJhY3RlcilcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyID0gY2hhcmFjdGVyID09PSBNYXNrSG9sZGVyLlNUQVIgPyBjb250cm9sbGVyICsgMTogY29udHJvbGxlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hc2tlZC5qb2luKFwiXCIpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFbWFpbEZvcm1hdHRlciBpbXBsZW1lbnRzIEZvcm1hdHRlciB7XG5cbiAgICBhcHBseShlbWFpbDogc3RyaW5nLCBtYXNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbWFza2VkID0gW11cbiAgICAgICAgbGV0IG1hc2tUcmVhdGVkID0gTWFza0hvbGRlci50cmVhdEVtYWlsTWFzayhtYXNrKVxuXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2xsZXIgPSAwLCAgaSA9IDA7IGkgPCBlbWFpbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG1hc2tDaGFyYWN0ZXIgPSBNYXNrSG9sZGVyLmdldENoYXIobWFza1RyZWF0ZWQsIGNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICBpZiAobWFza0NoYXJhY3RlciA9PSBNYXNrSG9sZGVyLkhBU0ggfHwgZW1haWwuY2hhckF0KGkpID09IE1hc2tIb2xkZXIuQVQgfHwgTWFza0hvbGRlci5nZXRDaGFyKG1hc2tUcmVhdGVkLCBjb250cm9sbGVyKSA9PSBlbWFpbC5jaGFyQXQoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFza2VkLmxlbmd0aCA8IDQgJiYgZW1haWwuY2hhckF0KGkpID09IE1hc2tIb2xkZXIuQVQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFza2VkLnB1c2goXCIqKioqKipcIiArIGVtYWlsLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKE1hc2tIb2xkZXIuZ2V0Q2hhcihtYXNrVHJlYXRlZCwgY29udHJvbGxlcikgIT0gTWFza0hvbGRlci5BVCkgY29udHJvbGxlcisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKGVtYWlsLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFza2VkLnB1c2goTWFza0hvbGRlci5TVEFSKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyID0gbWFza0NoYXJhY3RlciA9PSBNYXNrSG9sZGVyLlNUQVIgPyBjb250cm9sbGVyICsgMSA6IGNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFza2VkLmpvaW4oXCJcIikudHJpbSgpXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hc2svZm9ybWF0dGVyL21hc2suZm9ybWF0dGVyLnRzIiwiaW1wb3J0IHtNYXNrUHJvY2Vzc29yfSBmcm9tIFwiLi9tYXNrL3Byb2Nlc3Nvci9tYXNrLnByb2Nlc3NvclwiO1xuXG5TdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZih0aGlzKSA+IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFzayhqc29uOiBzdHJpbmcsIHNldHRpbmdzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSBuZXcgTWFza1Byb2Nlc3NvcigpLnByb2Nlc3MoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShqc29uKSksIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKSlcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXN1bHQpLnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFza09iaihqc29uOiBhbnksIHNldHRpbmdzOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSBuZXcgTWFza1Byb2Nlc3NvcigpLnByb2Nlc3MoSlNPTi5wYXJzZShqc29uKSwgSlNPTi5wYXJzZShzZXR0aW5ncykpXG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmVzdWx0KS52YWx1ZTtcbn1cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCAqIGFzIGpzb25wYXRoIGZyb20gJy4uLy4uLy4uL2xpYi9qc29ucGF0aCc7XG5cbmltcG9ydCB7TWFza0RlZmF1bHR9IGZyb20gXCIuLi9tYXNrLmRlZmF1bHRcIjtcbmltcG9ydCB7RW1haWxGb3JtYXR0ZXIsIEZvcm1hdHRlciwgR2VuZXJpY0Zvcm1hdHRlciwgVHlwZX0gZnJvbSBcIi4uL2Zvcm1hdHRlci9tYXNrLmZvcm1hdHRlclwiO1xuXG5leHBvcnQgY2xhc3MgTWFza1Byb2Nlc3NvciB7XG5cbiAgICBwcml2YXRlIGZvcm1hdHRlcnM6IE1hcDxUeXBlLCBGb3JtYXR0ZXI+ID0gbmV3IE1hcDxUeXBlLCBGb3JtYXR0ZXI+KFtcbiAgICAgICAgW1R5cGUuQ1BGLCBuZXcgR2VuZXJpY0Zvcm1hdHRlcigpXSxcbiAgICAgICAgW1R5cGUuQ05QSiwgbmV3IEdlbmVyaWNGb3JtYXR0ZXIoKV0sXG4gICAgICAgIFtUeXBlLk1PQklMRSwgbmV3IEdlbmVyaWNGb3JtYXR0ZXIoKV0sXG4gICAgICAgIFtUeXBlLkVNQUlMLCBuZXcgRW1haWxGb3JtYXR0ZXIoKV1cbiAgICBdKVxuXG4gICAgcHJvY2Vzcyhqc29uOiBhbnksIHNldHRpbmdzOiBTZXR0aW5nW10pOiBzdHJpbmcge1xuICAgICAgICBzZXR0aW5ncy5mb3JFYWNoKHNldHRpbmcgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IChuZXcganNvbnBhdGguSlNPTlBhdGgoe2pzb24sIHBhdGg6IHNldHRpbmcucGF0aCwgcmVzdWx0VHlwZTogJ2FsbCd9KSkgYXMgdW5rbm93biBhcyBBcnJheTxhbnk+XG5cbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogVHlwZSA9IFR5cGVbc2V0dGluZy50eXBlXVxuICAgICAgICAgICAgICAgIGZpZWxkLnBhcmVudFtmaWVsZC5wYXJlbnRQcm9wZXJ0eV0gPSB0aGlzLmZvcm1hdHRlcnMuZ2V0KHR5cGUpLmFwcGx5KGZpZWxkLnZhbHVlLCBNYXNrRGVmYXVsdC5tYXNrcy5nZXQodHlwZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbilcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBwYXRoOiBzdHJpbmcpIHtcblxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFzay9wcm9jZXNzb3IvbWFzay5wcm9jZXNzb3IudHMiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgICAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAgICAgICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLkpTT05QYXRoID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgICAgIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgICAgICAgICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgICAgICAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgICAgICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgICAgIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgICAgICAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgICAgICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgICAgICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgICAgICAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgICAgICAgICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICAgICAgICAgIHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgICAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICAgICAgaWYgKCFvKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgICAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgICAgcmV0dXJuIGFycjI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkge1xuICAgICAgICB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTtcblxuICAgICAgICBpZiAoIWl0KSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0KSBvID0gaXQ7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHM6IEYsXG4gICAgICAgICAgICAgICAgICAgIG46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmOiBGXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLFxuICAgICAgICAgICAgZGlkRXJyID0gZmFsc2UsXG4gICAgICAgICAgICBlcnI7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaXQgPSBpdC5jYWxsKG8pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9IGl0Lm5leHQoKTtcbiAgICAgICAgICAgICAgICBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZGlkRXJyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlcnIgPSBlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWRFcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGhhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtudWxsfGJvb2xlYW58bnVtYmVyfHN0cmluZ3xQbGFpbk9iamVjdHxHZW5lcmljQXJyYXl9IEpTT05PYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhcnJheSBhbmQgdGhlbiBwdXNoZXMgaXRlbSBpbnRvIGl0LlxuICAgICAqIEBwYXJhbSB7R2VuZXJpY0FycmF5fSBhcnIgQXJyYXkgdG8gY29weSBhbmQgaW50byB3aGljaCB0byBwdXNoXG4gICAgICogQHBhcmFtIHthbnl9IGl0ZW0gQXJyYXkgaXRlbSB0byBhZGQgKHRvIGVuZClcbiAgICAgKiBAcmV0dXJucyB7R2VuZXJpY0FycmF5fSBDb3B5IG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gcHVzaChhcnIsIGl0ZW0pIHtcbiAgICAgICAgYXJyID0gYXJyLnNsaWNlKCk7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYXJyYXkgYW5kIHRoZW4gdW5zaGlmdHMgaXRlbSBpbnRvIGl0LlxuICAgICAqIEBwYXJhbSB7YW55fSBpdGVtIEFycmF5IGl0ZW0gdG8gYWRkICh0byBiZWdpbm5pbmcpXG4gICAgICogQHBhcmFtIHtHZW5lcmljQXJyYXl9IGFyciBBcnJheSB0byBjb3B5IGFuZCBpbnRvIHdoaWNoIHRvIHVuc2hpZnRcbiAgICAgKiBAcmV0dXJucyB7R2VuZXJpY0FycmF5fSBDb3B5IG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiB1bnNoaWZ0KGl0ZW0sIGFycikge1xuICAgICAgICBhcnIgPSBhcnIuc2xpY2UoKTtcbiAgICAgICAgYXJyLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhdWdodCB3aGVuIEpTT05QYXRoIGlzIHVzZWQgd2l0aG91dCBgbmV3YCBidXQgcmV0aHJvd24gaWYgd2l0aCBgbmV3YFxuICAgICAqIEBleHRlbmRzIEVycm9yXG4gICAgICovXG5cblxuICAgIHZhciBOZXdFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gICAgICAgIF9pbmhlcml0cyhOZXdFcnJvciwgX0Vycm9yKTtcblxuICAgICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE5ld0Vycm9yKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBldmFsdWF0ZWQgc2NhbGFyIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZXdFcnJvcih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmV3RXJyb3IpO1xuXG4gICAgICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdKU09OUGF0aCBzaG91bGQgbm90IGJlIGNhbGxlZCB3aXRoIFwibmV3XCIgKGl0IHByZXZlbnRzIHJldHVybiAnICsgJ29mICh1bndyYXBwZWQpIHNjYWxhciB2YWx1ZXMpJyk7XG4gICAgICAgICAgICBfdGhpcy5hdm9pZE5ldyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMubmFtZSA9ICdOZXdFcnJvcic7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmV3RXJyb3I7XG4gICAgfSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7UGxhaW5PYmplY3R9IFJldHVybk9iamVjdFxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwYXRoXG4gICAgICogQHByb3BlcnR5IHtKU09OT2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwcm9wZXJ0eSB7UGxhaW5PYmplY3R8R2VuZXJpY0FycmF5fSBwYXJlbnRcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gcGFyZW50UHJvcGVydHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBjYWxsYmFjayBKU09OUGF0aENhbGxiYWNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd8UGxhaW5PYmplY3R9IHByZWZlcnJlZE91dHB1dFxuICAgICAqIEBwYXJhbSB7XCJ2YWx1ZVwifFwicHJvcGVydHlcIn0gdHlwZVxuICAgICAqIEBwYXJhbSB7UmV0dXJuT2JqZWN0fSBmdWxsUmV0T2JqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAY2FsbGJhY2sgT3RoZXJUeXBlQ2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge0pTT05PYmplY3R9IHZhbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtQbGFpbk9iamVjdHxHZW5lcmljQXJyYXl9IHBhcmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRQcm9wTmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAtLSBDYW4gbWFrZSBtdWx0aWxpbmUgdHlwZSBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vc3lhdm9yc2t5L2NvbW1lbnQtcGFyc2VyL2lzc3Vlcy8xMDkgKi9cblxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtQbGFpbk9iamVjdH0gSlNPTlBhdGhPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtKU09OfSBqc29uXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd8c3RyaW5nW119IHBhdGhcbiAgICAgKiBAcHJvcGVydHkge1widmFsdWVcInxcInBhdGhcInxcInBvaW50ZXJcInxcInBhcmVudFwifFwicGFyZW50UHJvcGVydHlcInxcImFsbFwifSBbcmVzdWx0VHlwZT1cInZhbHVlXCJdXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBbZmxhdHRlbj1mYWxzZV1cbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFt3cmFwPXRydWVdXG4gICAgICogQHByb3BlcnR5IHtQbGFpbk9iamVjdH0gW3NhbmRib3g9e31dXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBbcHJldmVudEV2YWw9ZmFsc2VdXG4gICAgICogQHByb3BlcnR5IHtQbGFpbk9iamVjdHxHZW5lcmljQXJyYXl8bnVsbH0gW3BhcmVudD1udWxsXVxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtwYXJlbnRQcm9wZXJ0eT1udWxsXVxuICAgICAqIEBwcm9wZXJ0eSB7SlNPTlBhdGhDYWxsYmFja30gW2NhbGxiYWNrXVxuICAgICAqIEBwcm9wZXJ0eSB7T3RoZXJUeXBlQ2FsbGJhY2t9IFtvdGhlclR5cGVDYWxsYmFja10gRGVmYXVsdHMgdG9cbiAgICAgKiAgIGZ1bmN0aW9uIHdoaWNoIHRocm93cyBvbiBlbmNvdW50ZXJpbmcgYEBvdGhlcmBcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFthdXRvc3RhcnQ9dHJ1ZV1cbiAgICAgKi9cblxuICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAtLSBDYW4gbWFrZSBtdWx0aWxpbmUgdHlwZSBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vc3lhdm9yc2t5L2NvbW1lbnQtcGFyc2VyL2lzc3Vlcy8xMDkgKi9cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7e3BhdGg6IHN0cmluZzsganNvbjogc3RyaW5nOyByZXN1bHRUeXBlOiBzdHJpbmd9fSBvcHRzIElmIGEgc3RyaW5nLCB3aWxsIGJlIHRyZWF0ZWQgYXMgYGV4cHJgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtleHByXSBKU09OIHBhdGggdG8gZXZhbHVhdGVcbiAgICAgKiBAcGFyYW0ge0pTT059IFtvYmpdIEpTT04gb2JqZWN0IHRvIGV2YWx1YXRlIGFnYWluc3RcbiAgICAgKiBAcGFyYW0ge0pTT05QYXRoQ2FsbGJhY2t9IFtjYWxsYmFja10gUGFzc2VkIDMgYXJndW1lbnRzOiAxKSBkZXNpcmVkIHBheWxvYWRcbiAgICAgKiAgICAgcGVyIGByZXN1bHRUeXBlYCwgMikgYFwidmFsdWVcInxcInByb3BlcnR5XCJgLCAzKSBGdWxsIHJldHVybmVkIG9iamVjdCB3aXRoXG4gICAgICogICAgIGFsbCBwYXlsb2Fkc1xuICAgICAqIEBwYXJhbSB7T3RoZXJUeXBlQ2FsbGJhY2t9IFtvdGhlclR5cGVDYWxsYmFja10gSWYgYEBvdGhlcigpYCBpcyBhdCB0aGUgZW5kXG4gICAgICogICBvZiBvbmUncyBxdWVyeSwgdGhpcyB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0sIGl0c1xuICAgICAqICAgcGF0aCwgaXRzIHBhcmVudCwgYW5kIGl0cyBwYXJlbnQncyBwcm9wZXJ0eSBuYW1lLCBhbmQgaXQgc2hvdWxkIHJldHVyblxuICAgICAqICAgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3VwcGxpZWQgdmFsdWUgYmVsb25ncyB0byB0aGUgXCJvdGhlclwiXG4gICAgICogICB0eXBlIG9yIG5vdCAob3IgaXQgbWF5IGhhbmRsZSB0cmFuc2Zvcm1hdGlvbnMgYW5kIHJldHVybiBgZmFsc2VgKS5cbiAgICAgKiBAcmV0dXJucyB7SlNPTlBhdGh9XG4gICAgICogQGNsYXNzXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIEpTT05QYXRoKG9wdHMsIGV4cHIsIG9iaiwgY2FsbGJhY2ssIG90aGVyVHlwZUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSlNPTlBhdGgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSlNPTlBhdGgob3B0cywgZXhwciwgb2JqLCBjYWxsYmFjaywgb3RoZXJUeXBlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghZS5hdm9pZE5ldykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3RoZXJUeXBlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGNhbGxiYWNrID0gb2JqO1xuICAgICAgICAgICAgb2JqID0gZXhwcjtcbiAgICAgICAgICAgIGV4cHIgPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0T2JqID0gb3B0cyAmJiBfdHlwZW9mKG9wdHMpID09PSAnb2JqZWN0JztcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIHRoaXMuanNvbiA9IG9wdHMuanNvbiB8fCBvYmo7XG4gICAgICAgIHRoaXMucGF0aCA9IG9wdHMucGF0aCB8fCBleHByO1xuICAgICAgICB0aGlzLnJlc3VsdFR5cGUgPSBvcHRzLnJlc3VsdFR5cGUgfHwgJ3ZhbHVlJztcbiAgICAgICAgdGhpcy5mbGF0dGVuID0gb3B0cy5mbGF0dGVuIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLndyYXAgPSBoYXNPd25Qcm9wLmNhbGwob3B0cywgJ3dyYXAnKSA/IG9wdHMud3JhcCA6IHRydWU7XG4gICAgICAgIHRoaXMuc2FuZGJveCA9IG9wdHMuc2FuZGJveCB8fCB7fTtcbiAgICAgICAgdGhpcy5wcmV2ZW50RXZhbCA9IG9wdHMucHJldmVudEV2YWwgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMucGFyZW50ID0gb3B0cy5wYXJlbnQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnRQcm9wZXJ0eSA9IG9wdHMucGFyZW50UHJvcGVydHkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG9wdHMuY2FsbGJhY2sgfHwgY2FsbGJhY2sgfHwgbnVsbDtcblxuICAgICAgICB0aGlzLm90aGVyVHlwZUNhbGxiYWNrID0gb3B0cy5vdGhlclR5cGVDYWxsYmFjayB8fCBvdGhlclR5cGVDYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBzdXBwbHkgYW4gb3RoZXJUeXBlQ2FsbGJhY2sgY2FsbGJhY2sgb3B0aW9uICcgKyAnd2l0aCB0aGUgQG90aGVyKCkgb3BlcmF0b3IuJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdHMuYXV0b3N0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgcGF0aDogb3B0T2JqID8gb3B0cy5wYXRoIDogZXhwclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKCFvcHRPYmopIHtcbiAgICAgICAgICAgICAgICBhcmdzLmpzb24gPSBvYmo7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCdqc29uJyBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgYXJncy5qc29uID0gb3B0cy5qc29uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmV0ID0gdGhpcy5ldmFsdWF0ZShhcmdzKTtcblxuICAgICAgICAgICAgaWYgKCFyZXQgfHwgX3R5cGVvZihyZXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOZXdFcnJvcihyZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgfSAvLyBQVUJMSUMgTUVUSE9EU1xuXG5cbiAgICBKU09OUGF0aC5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoZXhwciwganNvbiwgY2FsbGJhY2ssIG90aGVyVHlwZUNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjdXJyUGFyZW50ID0gdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICBjdXJyUGFyZW50UHJvcGVydHkgPSB0aGlzLnBhcmVudFByb3BlcnR5O1xuICAgICAgICB2YXIgZmxhdHRlbiA9IHRoaXMuZmxhdHRlbixcbiAgICAgICAgICAgIHdyYXAgPSB0aGlzLndyYXA7XG4gICAgICAgIHRoaXMuY3VyclJlc3VsdFR5cGUgPSB0aGlzLnJlc3VsdFR5cGU7XG4gICAgICAgIHRoaXMuY3VyclByZXZlbnRFdmFsID0gdGhpcy5wcmV2ZW50RXZhbDtcbiAgICAgICAgdGhpcy5jdXJyU2FuZGJveCA9IHRoaXMuc2FuZGJveDtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB0aGlzLmNhbGxiYWNrO1xuICAgICAgICB0aGlzLmN1cnJPdGhlclR5cGVDYWxsYmFjayA9IG90aGVyVHlwZUNhbGxiYWNrIHx8IHRoaXMub3RoZXJUeXBlQ2FsbGJhY2s7XG4gICAgICAgIGpzb24gPSBqc29uIHx8IHRoaXMuanNvbjtcbiAgICAgICAgZXhwciA9IGV4cHIgfHwgdGhpcy5wYXRoO1xuXG4gICAgICAgIGlmIChleHByICYmIF90eXBlb2YoZXhwcikgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGV4cHIpKSB7XG4gICAgICAgICAgICBpZiAoIWV4cHIucGF0aCAmJiBleHByLnBhdGggIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3Qgc3VwcGx5IGEgXCJwYXRoXCIgcHJvcGVydHkgd2hlbiBwcm92aWRpbmcgYW4gb2JqZWN0ICcgKyAnYXJndW1lbnQgdG8gSlNPTlBhdGguZXZhbHVhdGUoKS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ2pzb24nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHN1cHBseSBhIFwianNvblwiIHByb3BlcnR5IHdoZW4gcHJvdmlkaW5nIGFuIG9iamVjdCAnICsgJ2FyZ3VtZW50IHRvIEpTT05QYXRoLmV2YWx1YXRlKCkuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfZXhwciA9IGV4cHI7XG4gICAgICAgICAgICBqc29uID0gX2V4cHIuanNvbjtcbiAgICAgICAgICAgIGZsYXR0ZW4gPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ2ZsYXR0ZW4nKSA/IGV4cHIuZmxhdHRlbiA6IGZsYXR0ZW47XG4gICAgICAgICAgICB0aGlzLmN1cnJSZXN1bHRUeXBlID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdyZXN1bHRUeXBlJykgPyBleHByLnJlc3VsdFR5cGUgOiB0aGlzLmN1cnJSZXN1bHRUeXBlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2FuZGJveCA9IGhhc093blByb3AuY2FsbChleHByLCAnc2FuZGJveCcpID8gZXhwci5zYW5kYm94IDogdGhpcy5jdXJyU2FuZGJveDtcbiAgICAgICAgICAgIHdyYXAgPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ3dyYXAnKSA/IGV4cHIud3JhcCA6IHdyYXA7XG4gICAgICAgICAgICB0aGlzLmN1cnJQcmV2ZW50RXZhbCA9IGhhc093blByb3AuY2FsbChleHByLCAncHJldmVudEV2YWwnKSA/IGV4cHIucHJldmVudEV2YWwgOiB0aGlzLmN1cnJQcmV2ZW50RXZhbDtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdjYWxsYmFjaycpID8gZXhwci5jYWxsYmFjayA6IGNhbGxiYWNrO1xuICAgICAgICAgICAgdGhpcy5jdXJyT3RoZXJUeXBlQ2FsbGJhY2sgPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ290aGVyVHlwZUNhbGxiYWNrJykgPyBleHByLm90aGVyVHlwZUNhbGxiYWNrIDogdGhpcy5jdXJyT3RoZXJUeXBlQ2FsbGJhY2s7XG4gICAgICAgICAgICBjdXJyUGFyZW50ID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdwYXJlbnQnKSA/IGV4cHIucGFyZW50IDogY3VyclBhcmVudDtcbiAgICAgICAgICAgIGN1cnJQYXJlbnRQcm9wZXJ0eSA9IGhhc093blByb3AuY2FsbChleHByLCAncGFyZW50UHJvcGVydHknKSA/IGV4cHIucGFyZW50UHJvcGVydHkgOiBjdXJyUGFyZW50UHJvcGVydHk7XG4gICAgICAgICAgICBleHByID0gZXhwci5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyclBhcmVudCA9IGN1cnJQYXJlbnQgfHwgbnVsbDtcbiAgICAgICAgY3VyclBhcmVudFByb3BlcnR5ID0gY3VyclBhcmVudFByb3BlcnR5IHx8IG51bGw7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXhwcikpIHtcbiAgICAgICAgICAgIGV4cHIgPSBKU09OUGF0aC50b1BhdGhTdHJpbmcoZXhwcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWV4cHIgJiYgZXhwciAhPT0gJycgfHwgIWpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwckxpc3QgPSBKU09OUGF0aC50b1BhdGhBcnJheShleHByKTtcblxuICAgICAgICBpZiAoZXhwckxpc3RbMF0gPT09ICckJyAmJiBleHByTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBleHByTGlzdC5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGFzUGFyZW50U2VsZWN0b3IgPSBudWxsO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl90cmFjZShleHByTGlzdCwganNvbiwgWyckJ10sIGN1cnJQYXJlbnQsIGN1cnJQYXJlbnRQcm9wZXJ0eSwgY2FsbGJhY2spLmZpbHRlcihmdW5jdGlvbiAoZWEpIHtcbiAgICAgICAgICAgIHJldHVybiBlYSAmJiAhZWEuaXNQYXJlbnRTZWxlY3RvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCA/IFtdIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF3cmFwICYmIHJlc3VsdC5sZW5ndGggPT09IDEgJiYgIXJlc3VsdFswXS5oYXNBcnJFeHByKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJlZmVycmVkT3V0cHV0KHJlc3VsdFswXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LnJlZHVjZShmdW5jdGlvbiAocnNsdCwgZWEpIHtcbiAgICAgICAgICAgIHZhciB2YWxPclBhdGggPSBfdGhpczIuX2dldFByZWZlcnJlZE91dHB1dChlYSk7XG5cbiAgICAgICAgICAgIGlmIChmbGF0dGVuICYmIEFycmF5LmlzQXJyYXkodmFsT3JQYXRoKSkge1xuICAgICAgICAgICAgICAgIHJzbHQgPSByc2x0LmNvbmNhdCh2YWxPclBhdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByc2x0LnB1c2godmFsT3JQYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJzbHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9OyAvLyBQUklWQVRFIE1FVEhPRFNcblxuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9nZXRQcmVmZXJyZWRPdXRwdXQgPSBmdW5jdGlvbiAoZWEpIHtcbiAgICAgICAgdmFyIHJlc3VsdFR5cGUgPSB0aGlzLmN1cnJSZXN1bHRUeXBlO1xuXG4gICAgICAgIHN3aXRjaCAocmVzdWx0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IEFycmF5LmlzQXJyYXkoZWEucGF0aCkgPyBlYS5wYXRoIDogSlNPTlBhdGgudG9QYXRoQXJyYXkoZWEucGF0aCk7XG4gICAgICAgICAgICAgICAgZWEucG9pbnRlciA9IEpTT05QYXRoLnRvUG9pbnRlcihwYXRoKTtcbiAgICAgICAgICAgICAgICBlYS5wYXRoID0gdHlwZW9mIGVhLnBhdGggPT09ICdzdHJpbmcnID8gZWEucGF0aCA6IEpTT05QYXRoLnRvUGF0aFN0cmluZyhlYS5wYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgIGNhc2UgJ3BhcmVudCc6XG4gICAgICAgICAgICBjYXNlICdwYXJlbnRQcm9wZXJ0eSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVhW3Jlc3VsdFR5cGVdO1xuXG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTlBhdGgudG9QYXRoU3RyaW5nKGVhW3Jlc3VsdFR5cGVdKTtcblxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT05QYXRoLnRvUG9pbnRlcihlYS5wYXRoKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIHJlc3VsdCB0eXBlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9oYW5kbGVDYWxsYmFjayA9IGZ1bmN0aW9uIChmdWxsUmV0T2JqLCBjYWxsYmFjaywgdHlwZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcmVmZXJyZWRPdXRwdXQgPSB0aGlzLl9nZXRQcmVmZXJyZWRPdXRwdXQoZnVsbFJldE9iaik7XG5cbiAgICAgICAgICAgIGZ1bGxSZXRPYmoucGF0aCA9IHR5cGVvZiBmdWxsUmV0T2JqLnBhdGggPT09ICdzdHJpbmcnID8gZnVsbFJldE9iai5wYXRoIDogSlNPTlBhdGgudG9QYXRoU3RyaW5nKGZ1bGxSZXRPYmoucGF0aCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL2NhbGxiYWNrLXJldHVyblxuXG4gICAgICAgICAgICBjYWxsYmFjayhwcmVmZXJyZWRPdXRwdXQsIHR5cGUsIGZ1bGxSZXRPYmopO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHByXG4gICAgICogQHBhcmFtIHtKU09OT2JqZWN0fSB2YWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7UGxhaW5PYmplY3R8R2VuZXJpY0FycmF5fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50UHJvcE5hbWVcbiAgICAgKiBAcGFyYW0ge0pTT05QYXRoQ2FsbGJhY2t9IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtib29sZWFufSBoYXNBcnJFeHByXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXRlcmFsUHJpb3JpdHlcbiAgICAgKiBAcmV0dXJucyB7UmV0dXJuT2JqZWN0fFJldHVybk9iamVjdFtdfVxuICAgICAqL1xuXG5cbiAgICBKU09OUGF0aC5wcm90b3R5cGUuX3RyYWNlID0gZnVuY3Rpb24gKGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGhhc0FyckV4cHIsIGxpdGVyYWxQcmlvcml0eSkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAvLyBObyBleHByIHRvIGZvbGxvdz8gcmV0dXJuIHBhdGggYW5kIHZhbHVlIGFzIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gIHRoaXMgdHJhY2UgYnJhbmNoXG4gICAgICAgIHZhciByZXRPYmo7XG5cbiAgICAgICAgaWYgKCFleHByLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0T2JqID0ge1xuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBwYXJlbnRQcm9wZXJ0eTogcGFyZW50UHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgaGFzQXJyRXhwcjogaGFzQXJyRXhwclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2FsbGJhY2socmV0T2JqLCBjYWxsYmFjaywgJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXRPYmo7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9jID0gZXhwclswXSxcbiAgICAgICAgICAgIHggPSBleHByLnNsaWNlKDEpOyAvLyBXZSBuZWVkIHRvIGdhdGhlciB0aGUgcmV0dXJuIHZhbHVlIG9mIHJlY3Vyc2l2ZSB0cmFjZSBjYWxscyBpbiBvcmRlciB0b1xuICAgICAgICAvLyBkbyB0aGUgcGFyZW50IHNlbCBjb21wdXRhdGlvbi5cblxuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1JldHVybk9iamVjdHxSZXR1cm5PYmplY3RbXX0gZWxlbXNcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFJldChlbGVtcykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyB3YXMgY2F1c2luZyBleGNlc3NpdmUgc3RhY2sgc2l6ZSBpbiBOb2RlICh3aXRoIG9yXG4gICAgICAgICAgICAgICAgLy8gIHdpdGhvdXQgQmFiZWwpIGFnYWluc3Qgb3VyIHBlcmZvcm1hbmNlIHRlc3Q6XG4gICAgICAgICAgICAgICAgLy8gIGByZXQucHVzaCguLi5lbGVtcyk7YFxuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2godCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGVsZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodHlwZW9mIGxvYyAhPT0gJ3N0cmluZycgfHwgbGl0ZXJhbFByaW9yaXR5KSAmJiB2YWwgJiYgaGFzT3duUHJvcC5jYWxsKHZhbCwgbG9jKSkge1xuICAgICAgICAgICAgLy8gc2ltcGxlIGNhc2UtLWRpcmVjdGx5IGZvbGxvdyBwcm9wZXJ0eVxuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHgsIHZhbFtsb2NdLCBwdXNoKHBhdGgsIGxvYyksIHZhbCwgbG9jLCBjYWxsYmFjaywgaGFzQXJyRXhwcikpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItc3dpdGNoIC0tIFBhcnQgb2YgbGFyZ2VyIGBpZmBcbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICcqJykge1xuICAgICAgICAgICAgLy8gYWxsIGNoaWxkIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHRoaXMuX3dhbGsobG9jLCB4LCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBmdW5jdGlvbiAobSwgbCwgX3gsIHYsIHAsIHBhciwgcHIsIGNiKSB7XG4gICAgICAgICAgICAgICAgYWRkUmV0KF90aGlzMy5fdHJhY2UodW5zaGlmdChtLCBfeCksIHYsIHAsIHBhciwgcHIsIGNiLCB0cnVlLCB0cnVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICcuLicpIHtcbiAgICAgICAgICAgIC8vIGFsbCBkZXNjZW5kZW50IHBhcmVudCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBDaGVjayByZW1haW5pbmcgZXhwcmVzc2lvbiB3aXRoIHZhbCdzIGltbWVkaWF0ZSBjaGlsZHJlblxuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHgsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGhhc0FyckV4cHIpKTtcblxuICAgICAgICAgICAgdGhpcy5fd2Fsayhsb2MsIHgsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGZ1bmN0aW9uIChtLCBsLCBfeCwgdiwgcCwgcGFyLCBwciwgY2IpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBqb2luIG0gYW5kIHggaGVyZSBiZWNhdXNlIHdlIG9ubHkgd2FudCBwYXJlbnRzLFxuICAgICAgICAgICAgICAgIC8vICAgbm90IHNjYWxhciB2YWx1ZXNcbiAgICAgICAgICAgICAgICBpZiAoX3R5cGVvZih2W21dKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCBnb2luZyB3aXRoIHJlY3Vyc2l2ZSBkZXNjZW50IG9uIHZhbCdzXG4gICAgICAgICAgICAgICAgICAgIC8vICAgb2JqZWN0IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIGFkZFJldChfdGhpczMuX3RyYWNlKHVuc2hpZnQobCwgX3gpLCB2W21dLCBwdXNoKHAsIG0pLCB2LCBtLCBjYiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAvLyBUaGUgcGFyZW50IHNlbCBjb21wdXRhdGlvbiBpcyBoYW5kbGVkIGluIHRoZSBmcmFtZSBhYm92ZSB1c2luZyB0aGVcbiAgICAgICAgICAgIC8vIGFuY2VzdG9yIG9iamVjdCBvZiB2YWxcblxuICAgICAgICB9IGVsc2UgaWYgKGxvYyA9PT0gJ14nKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBhIGZpbmFsIGVuZHBvaW50LCBzbyB3ZSBkbyBub3QgaW52b2tlIHRoZSBjYWxsYmFjayBoZXJlXG4gICAgICAgICAgICB0aGlzLl9oYXNQYXJlbnRTZWxlY3RvciA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGguc2xpY2UoMCwgLTEpLFxuICAgICAgICAgICAgICAgIGV4cHI6IHgsXG4gICAgICAgICAgICAgICAgaXNQYXJlbnRTZWxlY3RvcjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICd+Jykge1xuICAgICAgICAgICAgLy8gcHJvcGVydHkgbmFtZVxuICAgICAgICAgICAgcmV0T2JqID0ge1xuICAgICAgICAgICAgICAgIHBhdGg6IHB1c2gocGF0aCwgbG9jKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFyZW50UHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgcGFyZW50UHJvcGVydHk6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNhbGxiYWNrKHJldE9iaiwgY2FsbGJhY2ssICdwcm9wZXJ0eScpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0T2JqO1xuICAgICAgICB9IGVsc2UgaWYgKGxvYyA9PT0gJyQnKSB7XG4gICAgICAgICAgICAvLyByb290IG9ubHlcbiAgICAgICAgICAgIGFkZFJldCh0aGlzLl90cmFjZSh4LCB2YWwsIHBhdGgsIG51bGwsIG51bGwsIGNhbGxiYWNrLCBoYXNBcnJFeHByKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoL14oXFx4MkQ/WzAtOV0qKTooXFx4MkQ/WzAtOV0qKTo/KFswLTldKikkLy50ZXN0KGxvYykpIHtcbiAgICAgICAgICAgIC8vIFtzdGFydDplbmQ6c3RlcF0gIFB5dGhvbiBzbGljZSBzeW50YXhcbiAgICAgICAgICAgIGFkZFJldCh0aGlzLl9zbGljZShsb2MsIHgsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2spKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MuaW5kZXhPZignPygnKSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gWz8oZXhwcildIChmaWx0ZXJpbmcpXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyUHJldmVudEV2YWwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2YWwgWz8oZXhwcildIHByZXZlbnRlZCBpbiBKU09OUGF0aCBleHByZXNzaW9uLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl93YWxrKGxvYywgeCwgdmFsLCBwYXRoLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lLCBjYWxsYmFjaywgZnVuY3Rpb24gKG0sIGwsIF94LCB2LCBwLCBwYXIsIHByLCBjYikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczMuX2V2YWwobC5yZXBsYWNlKC9eXFw/XFwoKCg/OltcXDAtXFx0XFx4MEJcXGZcXHgwRS1cXHUyMDI3XFx1MjAyQS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSo/KVxcKSQvLCAnJDEnKSwgdlttXSwgbSwgcCwgcGFyLCBwcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkUmV0KF90aGlzMy5fdHJhY2UodW5zaGlmdChtLCBfeCksIHYsIHAsIHBhciwgcHIsIGNiLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jWzBdID09PSAnKCcpIHtcbiAgICAgICAgICAgIC8vIFsoZXhwcildIChkeW5hbWljIHByb3BlcnR5L2luZGV4KVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyclByZXZlbnRFdmFsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmFsIFsoZXhwcildIHByZXZlbnRlZCBpbiBKU09OUGF0aCBleHByZXNzaW9uLicpO1xuICAgICAgICAgICAgfSAvLyBBcyB0aGlzIHdpbGwgcmVzb2x2ZSB0byBhIHByb3BlcnR5IG5hbWUgKGJ1dCB3ZSBkb24ndCBrbm93IGl0XG4gICAgICAgICAgICAvLyAgeWV0KSwgcHJvcGVydHkgYW5kIHBhcmVudCBpbmZvcm1hdGlvbiBpcyByZWxhdGl2ZSB0byB0aGVcbiAgICAgICAgICAgIC8vICBwYXJlbnQgb2YgdGhlIHByb3BlcnR5IHRvIHdoaWNoIHRoaXMgZXhwcmVzc2lvbiB3aWxsIHJlc29sdmVcblxuXG4gICAgICAgICAgICBhZGRSZXQodGhpcy5fdHJhY2UodW5zaGlmdCh0aGlzLl9ldmFsKGxvYywgdmFsLCBwYXRoW3BhdGgubGVuZ3RoIC0gMV0sIHBhdGguc2xpY2UoMCwgLTEpLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lKSwgeCksIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGhhc0FyckV4cHIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2NbMF0gPT09ICdAJykge1xuICAgICAgICAgICAgLy8gdmFsdWUgdHlwZTogQGJvb2xlYW4oKSwgZXRjLlxuICAgICAgICAgICAgdmFyIGFkZFR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSBsb2Muc2xpY2UoMSwgLTIpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsIHx8ICFbJ29iamVjdCcsICdmdW5jdGlvbiddLmluY2x1ZGVzKF90eXBlb2YodmFsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdHlwZW9mKHZhbCkgPT09IHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHZhbCkgJiYgISh2YWwgJSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ25vbkZpbml0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzRmluaXRlKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgX3R5cGVvZih2YWwpID09PSB2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdvdGhlcic6XG4gICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0aGlzLmN1cnJPdGhlclR5cGVDYWxsYmFjayh2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ251bGwnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLyogYzggaWdub3JlIG5leHQgMiAqL1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biB2YWx1ZSB0eXBlICcgKyB2YWx1ZVR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWRkVHlwZSkge1xuICAgICAgICAgICAgICAgIHJldE9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFByb3BlcnR5OiBwYXJlbnRQcm9wTmFtZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDYWxsYmFjayhyZXRPYmosIGNhbGxiYWNrLCAndmFsdWUnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRPYmo7XG4gICAgICAgICAgICB9IC8vIGAtZXNjYXBlZCBwcm9wZXJ0eVxuXG4gICAgICAgIH0gZWxzZSBpZiAobG9jWzBdID09PSAnYCcgJiYgdmFsICYmIGhhc093blByb3AuY2FsbCh2YWwsIGxvYy5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHZhciBsb2NQcm9wID0gbG9jLnNsaWNlKDEpO1xuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHgsIHZhbFtsb2NQcm9wXSwgcHVzaChwYXRoLCBsb2NQcm9wKSwgdmFsLCBsb2NQcm9wLCBjYWxsYmFjaywgaGFzQXJyRXhwciwgdHJ1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGxvYy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICAgICAgICAvLyBbbmFtZTEsbmFtZTIsLi4uXVxuICAgICAgICAgICAgdmFyIHBhcnRzID0gbG9jLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihwYXJ0cyksXG4gICAgICAgICAgICAgICAgX3N0ZXA7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHVuc2hpZnQocGFydCwgeCksIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIHRydWUpKTtcbiAgICAgICAgICAgICAgICB9IC8vIHNpbXBsZSBjYXNlLS1kaXJlY3RseSBmb2xsb3cgcHJvcGVydHlcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghbGl0ZXJhbFByaW9yaXR5ICYmIHZhbCAmJiBoYXNPd25Qcm9wLmNhbGwodmFsLCBsb2MpKSB7XG4gICAgICAgICAgICBhZGRSZXQodGhpcy5fdHJhY2UoeCwgdmFsW2xvY10sIHB1c2gocGF0aCwgbG9jKSwgdmFsLCBsb2MsIGNhbGxiYWNrLCBoYXNBcnJFeHByLCB0cnVlKSk7XG4gICAgICAgIH0gLy8gV2UgY2hlY2sgdGhlIHJlc3VsdGluZyB2YWx1ZXMgZm9yIHBhcmVudCBzZWxlY3Rpb25zLiBGb3IgcGFyZW50XG4gICAgICAgIC8vIHNlbGVjdGlvbnMgd2UgZGlzY2FyZCB0aGUgdmFsdWUgb2JqZWN0IGFuZCBjb250aW51ZSB0aGUgdHJhY2Ugd2l0aCB0aGVcbiAgICAgICAgLy8gY3VycmVudCB2YWwgb2JqZWN0XG5cblxuICAgICAgICBpZiAodGhpcy5faGFzUGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgcmV0Lmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHQgPSByZXRbdF07XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0dCAmJiByZXR0LmlzUGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX3RyYWNlKHJldHQuZXhwciwgdmFsLCByZXR0LnBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBoYXNBcnJFeHByKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0bXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbdF0gPSB0bXBbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGwgPSB0bXAubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0dCA9IDE7IHR0IDwgdGw7IHR0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnNwbGljZSh0LCAwLCB0bXBbdHRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFt0XSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIEpTT05QYXRoLnByb3RvdHlwZS5fd2FsayA9IGZ1bmN0aW9uIChsb2MsIGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGYpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgdmFyIG4gPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGYoaSwgbG9jLCBleHByLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgX3R5cGVvZih2YWwpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsKS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgZihtLCBsb2MsIGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9zbGljZSA9IGZ1bmN0aW9uIChsb2MsIGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aCxcbiAgICAgICAgICAgIHBhcnRzID0gbG9jLnNwbGl0KCc6JyksXG4gICAgICAgICAgICBzdGVwID0gcGFydHNbMl0gJiYgTnVtYmVyLnBhcnNlSW50KHBhcnRzWzJdKSB8fCAxO1xuICAgICAgICB2YXIgc3RhcnQgPSBwYXJ0c1swXSAmJiBOdW1iZXIucGFyc2VJbnQocGFydHNbMF0pIHx8IDAsXG4gICAgICAgICAgICBlbmQgPSBwYXJ0c1sxXSAmJiBOdW1iZXIucGFyc2VJbnQocGFydHNbMV0pIHx8IGxlbjtcbiAgICAgICAgc3RhcnQgPSBzdGFydCA8IDAgPyBNYXRoLm1heCgwLCBzdGFydCArIGxlbikgOiBNYXRoLm1pbihsZW4sIHN0YXJ0KTtcbiAgICAgICAgZW5kID0gZW5kIDwgMCA/IE1hdGgubWF4KDAsIGVuZCArIGxlbikgOiBNYXRoLm1pbihsZW4sIGVuZCk7XG4gICAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX3RyYWNlKHVuc2hpZnQoaSwgZXhwciksIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIHRydWUpOyAvLyBTaG91bGQgb25seSBiZSBwb3NzaWJsZSB0byBiZSBhbiBhcnJheSBoZXJlIHNpbmNlIGZpcnN0IHBhcnQgb2ZcbiAgICAgICAgICAgIC8vICAgYGB1bnNoaWZ0KGksIGV4cHIpYCBwYXNzZWQgaW4gYWJvdmUgd291bGQgbm90IGJlIGVtcHR5LCBub3IgYH5gLFxuICAgICAgICAgICAgLy8gICAgIG5vciBiZWdpbiB3aXRoIGBAYCAoYXMgY291bGQgcmV0dXJuIG9iamVjdHMpXG4gICAgICAgICAgICAvLyBUaGlzIHdhcyBjYXVzaW5nIGV4Y2Vzc2l2ZSBzdGFjayBzaXplIGluIE5vZGUgKHdpdGggb3JcbiAgICAgICAgICAgIC8vICB3aXRob3V0IEJhYmVsKSBhZ2FpbnN0IG91ciBwZXJmb3JtYW5jZSB0ZXN0OiBgcmV0LnB1c2goLi4udG1wKTtgXG5cblxuICAgICAgICAgICAgdG1wLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9ldmFsID0gZnVuY3Rpb24gKGNvZGUsIF92LCBfdm5hbWUsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKGNvZGUuaW5jbHVkZXMoJ0BwYXJlbnRQcm9wZXJ0eScpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3BhcmVudFByb3BlcnR5ID0gcGFyZW50UHJvcE5hbWU7XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9AcGFyZW50UHJvcGVydHkvZywgJ18kX3BhcmVudFByb3BlcnR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZS5pbmNsdWRlcygnQHBhcmVudCcpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL0BwYXJlbnQvZywgJ18kX3BhcmVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUuaW5jbHVkZXMoJ0Bwcm9wZXJ0eScpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3Byb3BlcnR5ID0gX3ZuYW1lO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvQHByb3BlcnR5L2csICdfJF9wcm9wZXJ0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUuaW5jbHVkZXMoJ0BwYXRoJykpIHtcbiAgICAgICAgICAgIHRoaXMuY3VyclNhbmRib3guXyRfcGF0aCA9IEpTT05QYXRoLnRvUGF0aFN0cmluZyhwYXRoLmNvbmNhdChbX3ZuYW1lXSkpO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvQHBhdGgvZywgJ18kX3BhdGgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlLmluY2x1ZGVzKCdAcm9vdCcpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3Jvb3QgPSB0aGlzLmpzb247XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9Acm9vdC9nLCAnXyRfcm9vdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC9AKFtcXHQtXFxyIFxcKVxcLlxcW1xceEEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1RkVGRl0pLy50ZXN0KGNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3YgPSBfdjtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL0AoW1xcdC1cXHIgXFwpXFwuXFxbXFx4QTBcXHUxNjgwXFx1MjAwMC1cXHUyMDBBXFx1MjAyOFxcdTIwMjlcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHVGRUZGXSkvZywgJ18kX3YkMScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZtLnJ1bkluTmV3Q29udGV4dChjb2RlLCB0aGlzLmN1cnJTYW5kYm94KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdqc29uUGF0aDogJyArIGUubWVzc2FnZSArICc6ICcgKyBjb2RlKTtcbiAgICAgICAgfVxuICAgIH07IC8vIFBVQkxJQyBDTEFTUyBQUk9QRVJUSUVTIEFORCBNRVRIT0RTXG4gICAgLy8gQ291bGQgc3RvcmUgdGhlIGNhY2hlIG9iamVjdCBpdHNlbGZcblxuXG4gICAgSlNPTlBhdGguY2FjaGUgPSB7fTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQXJyIEFycmF5IHRvIGNvbnZlcnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCBzdHJpbmdcbiAgICAgKi9cblxuICAgIEpTT05QYXRoLnRvUGF0aFN0cmluZyA9IGZ1bmN0aW9uIChwYXRoQXJyKSB7XG4gICAgICAgIHZhciB4ID0gcGF0aEFycixcbiAgICAgICAgICAgIG4gPSB4Lmxlbmd0aDtcbiAgICAgICAgdmFyIHAgPSAnJCc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghL14ofnxcXF58QCg/OltcXDAtXFx0XFx4MEJcXGZcXHgwRS1cXHUyMDI3XFx1MjAyQS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSo/XFwoXFwpKSQvLnRlc3QoeFtpXSkpIHtcbiAgICAgICAgICAgICAgICBwICs9IC9eW1xcKjAtOV0rJC8udGVzdCh4W2ldKSA/ICdbJyArIHhbaV0gKyAnXScgOiBcIlsnXCIgKyB4W2ldICsgXCInXVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9pbnRlciBKU09OIFBhdGhcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBKU09OIFBvaW50ZXJcbiAgICAgKi9cblxuXG4gICAgSlNPTlBhdGgudG9Qb2ludGVyID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgICAgICAgdmFyIHggPSBwb2ludGVyLFxuICAgICAgICAgICAgbiA9IHgubGVuZ3RoO1xuICAgICAgICB2YXIgcCA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIS9eKH58XFxefEAoPzpbXFwwLVxcdFxceDBCXFxmXFx4MEUtXFx1MjAyN1xcdTIwMkEtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkqP1xcKFxcKSkkLy50ZXN0KHhbaV0pKSB7XG4gICAgICAgICAgICAgICAgcCArPSAnLycgKyB4W2ldLnRvU3RyaW5nKCkucmVwbGFjZSgvfi9nLCAnfjAnKS5yZXBsYWNlKC9cXC8vZywgJ34xJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHByIEV4cHJlc3Npb24gdG8gY29udmVydFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cblxuXG4gICAgSlNPTlBhdGgudG9QYXRoQXJyYXkgPSBmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBKU09OUGF0aC5jYWNoZTtcblxuICAgICAgICBpZiAoY2FjaGVbZXhwcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtleHByXS5jb25jYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJ4ID0gW107XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gZXhwciAvLyBQcm9wZXJ0aWVzXG4gICAgICAgICAgICAucmVwbGFjZSgvQCg/Om51bGx8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfGludGVnZXJ8dW5kZWZpbmVkfG5vbkZpbml0ZXxzY2FsYXJ8YXJyYXl8b2JqZWN0fGZ1bmN0aW9ufG90aGVyKVxcKFxcKS9nLCAnOyQmOycpIC8vIFBhcmVudGhldGljYWwgZXZhbHVhdGlvbnMgKGZpbHRlcmluZyBhbmQgb3RoZXJ3aXNlKSwgZGlyZWN0bHlcbiAgICAgICAgICAgIC8vICAgd2l0aGluIGJyYWNrZXRzIG9yIHNpbmdsZSBxdW90ZXNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bJ1xcW10oXFw/P1xcKCg/OltcXDAtXFx0XFx4MEJcXGZcXHgwRS1cXHUyMDI3XFx1MjAyQS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSo/XFwpKVsnXFxdXS9nLCBmdW5jdGlvbiAoJDAsICQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdbIycgKyAoc3VieC5wdXNoKCQxKSAtIDEpICsgJ10nO1xuICAgICAgICAgICAgfSkgLy8gRXNjYXBlIHBlcmlvZHMgYW5kIHRpbGRlcyB3aXRoaW4gcHJvcGVydGllc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW1tcIiddKCg/Oig/IVsnXFxdXSlbXFxzXFxTXSkqKVtcIiddXFxdL2csIGZ1bmN0aW9uICgkMCwgcHJvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlsnXCIgKyBwcm9wLnJlcGxhY2UoL1xcLi9nLCAnJUAlJykucmVwbGFjZSgvfi9nLCAnJSVAQCUlJykgKyBcIiddXCI7XG4gICAgICAgICAgICB9KSAvLyBQcm9wZXJ0aWVzIG9wZXJhdG9yXG4gICAgICAgICAgICAucmVwbGFjZSgvfi9nLCAnO347JykgLy8gU3BsaXQgYnkgcHJvcGVydHkgYm91bmRhcmllc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1tcIiddP1xcLltcIiddPyg/ISg/Oig/IVxcWylbXFxzXFxTXSkqXFxdKXxcXFtbXCInXT8vZywgJzsnKSAvLyBSZWluc2VydCBwZXJpb2RzIHdpdGhpbiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAucmVwbGFjZSgvJUAlL2csICcuJykgLy8gUmVpbnNlcnQgdGlsZGVzIHdpdGhpbiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAucmVwbGFjZSgvJSVAQCUlL2csICd+JykgLy8gUGFyZW50XG4gICAgICAgICAgICAucmVwbGFjZSgvKD86Oyk/KFxcXispKD86Oyk/L2csIGZ1bmN0aW9uICgkMCwgdXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc7JyArIHVwcy5zcGxpdCgnJykuam9pbignOycpICsgJzsnO1xuICAgICAgICAgICAgfSkgLy8gRGVzY2VuZGVudHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC87Ozt8OzsvZywgJzsuLjsnKSAvLyBSZW1vdmUgdHJhaWxpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC87JHwnP1xcXXwnJC9nLCAnJyk7XG4gICAgICAgIHZhciBleHByTGlzdCA9IG5vcm1hbGl6ZWQuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gZXhwLm1hdGNoKC8jKFswLTldKykvKTtcbiAgICAgICAgICAgIHJldHVybiAhbWF0Y2ggfHwgIW1hdGNoWzFdID8gZXhwIDogc3VieFttYXRjaFsxXV07XG4gICAgICAgIH0pO1xuICAgICAgICBjYWNoZVtleHByXSA9IGV4cHJMaXN0O1xuICAgICAgICByZXR1cm4gY2FjaGVbZXhwcl0uY29uY2F0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBjYWxsYmFjayBDb25kaXRpb25DYWxsYmFja1xuICAgICAqIEBwYXJhbSB7YW55fSBpdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDb3B5IGl0ZW1zIG91dCBvZiBvbmUgYXJyYXkgaW50byBhbm90aGVyLlxuICAgICAqIEBwYXJhbSB7R2VuZXJpY0FycmF5fSBzb3VyY2UgQXJyYXkgd2l0aCBpdGVtcyB0byBjb3B5XG4gICAgICogQHBhcmFtIHtHZW5lcmljQXJyYXl9IHRhcmdldCBBcnJheSB0byB3aGljaCB0byBjb3B5XG4gICAgICogQHBhcmFtIHtDb25kaXRpb25DYWxsYmFja30gY29uZGl0aW9uQ2IgQ2FsbGJhY2sgcGFzc2VkIHRoZSBjdXJyZW50IGl0ZW07XG4gICAgICogICAgIHdpbGwgbW92ZSBpdGVtIGlmIGV2YWx1YXRlcyB0byBgdHJ1ZWBcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cblxuICAgIHZhciBtb3ZlVG9Bbm90aGVyQXJyYXkgPSBmdW5jdGlvbiBtb3ZlVG9Bbm90aGVyQXJyYXkoc291cmNlLCB0YXJnZXQsIGNvbmRpdGlvbkNiKSB7XG4gICAgICAgIHZhciBpbCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHNvdXJjZVtpXTtcblxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbkNiKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlLnNwbGljZShpLS0sIDEpWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBKU09OUGF0aC5wcm90b3R5cGUudm0gPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwciBFeHByZXNzaW9uIHRvIGV2YWx1YXRlXG4gICAgICAgICAqIEBwYXJhbSB7UGxhaW5PYmplY3R9IGNvbnRleHQgT2JqZWN0IHdob3NlIGl0ZW1zIHdpbGwgYmUgYWRkZWRcbiAgICAgICAgICogICB0byBldmFsdWF0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHthbnl9IFJlc3VsdCBvZiBldmFsdWF0ZWQgY29kZVxuICAgICAgICAgKi9cbiAgICAgICAgcnVuSW5OZXdDb250ZXh0OiBmdW5jdGlvbiBydW5Jbk5ld0NvbnRleHQoZXhwciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb250ZXh0KTtcbiAgICAgICAgICAgIHZhciBmdW5jcyA9IFtdO1xuICAgICAgICAgICAgbW92ZVRvQW5vdGhlckFycmF5KGtleXMsIGZ1bmNzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjb250ZXh0W2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAodnIsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dFt2cl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBmdW5jU3RyaW5nID0gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChzLCBmdW5jKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZTdHJpbmcgPSBjb250ZXh0W2Z1bmNdLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIS9mdW5jdGlvbi8udGVzdChmU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBmU3RyaW5nID0gJ2Z1bmN0aW9uICcgKyBmU3RyaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAndmFyICcgKyBmdW5jICsgJz0nICsgZlN0cmluZyArICc7JyArIHM7XG4gICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICBleHByID0gZnVuY1N0cmluZyArIGV4cHI7IC8vIE1pdGlnYXRlIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2dsb2JhbC1ldmFsLXdoYXQtYXJlLXRoZS1vcHRpb25zLyNuZXdfZnVuY3Rpb25cblxuICAgICAgICAgICAgaWYgKCEvKFtcIiddKXVzZSBzdHJpY3RcXDEvLnRlc3QoZXhwcikgJiYgIWtleXMuaW5jbHVkZXMoJ2FyZ3VtZW50cycpKSB7XG4gICAgICAgICAgICAgICAgZXhwciA9ICd2YXIgYXJndW1lbnRzID0gdW5kZWZpbmVkOycgKyBleHByO1xuICAgICAgICAgICAgfSAvLyBSZW1vdmUgbGFzdCBzZW1pIHNvIGByZXR1cm5gIHdpbGwgYmUgaW5zZXJ0ZWQgYmVmb3JlXG4gICAgICAgICAgICAvLyAgdGhlIHByZXZpb3VzIG9uZSBpbnN0ZWFkLCBhbGxvd2luZyBmb3IgdGhlIHJldHVyblxuICAgICAgICAgICAgLy8gIG9mIGEgYmFyZSBlbmRpbmcgZXhwcmVzc2lvblxuXG5cbiAgICAgICAgICAgIGV4cHIgPSBleHByLnJlcGxhY2UoLztbXFx0LVxcciBcXHhBMFxcdTE2ODBcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdUZFRkZdKiQvLCAnJyk7IC8vIEluc2VydCBgcmV0dXJuYFxuXG4gICAgICAgICAgICB2YXIgbGFzdFN0YXRlbWVudEVuZCA9IGV4cHIubGFzdEluZGV4T2YoJzsnKTtcbiAgICAgICAgICAgIHZhciBjb2RlID0gbGFzdFN0YXRlbWVudEVuZCA+IC0xID8gZXhwci5zbGljZSgwLCBsYXN0U3RhdGVtZW50RW5kICsgMSkgKyAnIHJldHVybiAnICsgZXhwci5zbGljZShsYXN0U3RhdGVtZW50RW5kICsgMSkgOiAnIHJldHVybiAnICsgZXhwcjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG5cbiAgICAgICAgICAgIHJldHVybiBfY29uc3RydWN0KEZ1bmN0aW9uLCBfdG9Db25zdW1hYmxlQXJyYXkoa2V5cykuY29uY2F0KFtjb2RlXSkpLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlcykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGV4cG9ydHMuSlNPTlBhdGggPSBKU09OUGF0aDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvanNvbnBhdGguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtUeXBlfSBmcm9tIFwiLi9mb3JtYXR0ZXIvbWFzay5mb3JtYXR0ZXJcIjtcblxuXG5leHBvcnQgY2xhc3MgTWFza0RlZmF1bHQge1xuXG4gICAgcHVibGljIHN0YXRpYyBtYXNrcyA9IG5ldyBNYXA8VHlwZSwgc3RyaW5nPihbXG4gICAgICAgIFtUeXBlLkNQRiwgXCIjIyMuKioqLioqKi0qKlwiXSxcbiAgICAgICAgW1R5cGUuQ05QSiwgXCIqKi4qKiouKioqLyoqKiotIyNcIl0sXG4gICAgICAgIFtUeXBlLk1PQklMRSwgXCIoIyMpKioqKiotIyMjI1wiXSxcbiAgICAgICAgW1R5cGUuRU1BSUwsIFwiIyMqKioqKkAjKioqLiMjIy4jI1wiXVxuICAgIF0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hc2svbWFzay5kZWZhdWx0LnRzIiwiZXhwb3J0IGNsYXNzIE1hc2tIb2xkZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSEFTSDogc3RyaW5nID0gXCIjXCJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQVI6IHN0cmluZyA9IFwiKlwiXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBVDogc3RyaW5nID0gXCJAXCJcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q2hhcih2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ID4gKHZhbHVlLmxlbmd0aCAtIDEpID8gTWFza0hvbGRlci5TVEFSIDogdmFsdWUuY2hhckF0KGluZGV4KVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdHJlYXRFbWFpbE1hc2sobWFzazogc3RyaW5nKSB7XG4gICAgICAgIGxldCBtYXNrZWQgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGMxID0gbWFzay5jaGFyQXQoaSk7XG5cbiAgICAgICAgICAgIGlmIChjMSA9PSBNYXNrSG9sZGVyLkhBU0gpIHtcbiAgICAgICAgICAgICAgICBtYXNrZWQucHVzaChtYXNrLmNoYXJBdChpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMxID09IE1hc2tIb2xkZXIuU1RBUiAmJiBtYXNrLmNoYXJBdChpIC0xKSA9PSBNYXNrSG9sZGVyLkhBU0gpIHtcbiAgICAgICAgICAgICAgICBtYXNrZWQucHVzaChNYXNrSG9sZGVyLlNUQVIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjMSAhPSBNYXNrSG9sZGVyLlNUQVIpIHtcbiAgICAgICAgICAgICAgICBtYXNrZWQucHVzaChtYXNrLmNoYXJBdChpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hc2tlZC5qb2luKFwiXCIpXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXNrL2Zvcm1hdHRlci9tYXNrLmhvbGRlci50cyJdLCJzb3VyY2VSb290IjoiIn0=