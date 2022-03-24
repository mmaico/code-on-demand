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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mask_formatter_1 = __webpack_require__(2);
var mask_processor_1 = __webpack_require__(4);
String.prototype.includes = function (value) {
    return value.indexOf(this) > 0;
};
//https://github.com/JSONPath-Plus/JSONPath/issues/163
var Homer = /** @class */ (function () {
    function Homer() {
    }
    Homer.prototype.name = function () {
        var json = {
            store: {
                book: [
                    {
                        category: "reference",
                        author: "Nigel Rees",
                        title: "Sayings of the Century",
                        price: 8.95
                    },
                    {
                        category: "fiction",
                        author: "Evelyn Waugh"
                    }
                ]
            }
        };
        // const json = {
        //     name: "Marcelo Maico"
        // }
        //    let result = jsonpath.JSONPath({json, path: '$.store.book[*].category', resultType: 'all'})
        //let result = jsonpath.JSONPath({json, path: '$.name', resultType: 'all'})
        //let result = "{}"
        //  let teste = JSON.parse(JSON.stringify(result)) as Array<any>
        //
        //
        // teste.forEach(value => {
        //     let match = value.path.match(/\[[^\]]*]/g);
        //     let name = match[match.length - 1].replace(/\[|\]|'/g, "")
        //     value.parent[name] = 20
        //     //console.log(JSON.stringify(value.parent))
        // })
        // console.log("############################################################################")
        // return typeof result + " teste" + JSON.stringify(result);
        return new mask_formatter_1.GenericFormatter().apply("11987638763", "(##)*****-####") + new mask_formatter_1.EmailFormatter().apply("tyrion.lannister@yahoo.com.br", "##*****@#***.###.##");
    };
    return Homer;
}());
exports.Homer = Homer;
//console.log(new Homer().name())
function show() {
    var homer = new Homer();
    return homer.name();
}
exports.default = show;
var instance = new Homer();
//console.log(new GenericFormatter().apply("11987638763", "(##)*****-####"))
var json = {
    store: {
        book: [
            {
                phone: "11987638765",
                email: "mmaico@gmail.com",
            },
            {
                phone: "11956194823",
                email: "geisa.lima@hotmail.com"
            }
        ]
    }
};
var result = new mask_processor_1.MaskProcessor().process(json, [new mask_processor_1.Setting("GENERIC", "$.store.book[*].phone", "(##)*****-####"),
    new mask_processor_1.Setting("EMAIL", "$.store.book[*].email", "##*****@#***.###.##")]);
console.log(result);


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mask_holder_1 = __webpack_require__(3);
var Type;
(function (Type) {
    Type[Type["GENERIC"] = 0] = "GENERIC";
    Type[Type["EMAIL"] = 1] = "EMAIL";
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jsonpath = __webpack_require__(1);
var mask_formatter_1 = __webpack_require__(2);
var MaskProcessor = /** @class */ (function () {
    function MaskProcessor() {
        this.formatters = new Map([
            [mask_formatter_1.Type.GENERIC, new mask_formatter_1.GenericFormatter()],
            [mask_formatter_1.Type.EMAIL, new mask_formatter_1.EmailFormatter()]
        ]);
    }
    MaskProcessor.prototype.process = function (json, settings) {
        var _this = this;
        settings.forEach(function (setting) {
            var result = jsonpath.JSONPath({ json: json, path: setting.path, resultType: 'all' });
            result.forEach(function (field) {
                var type = mask_formatter_1.Type[setting.type];
                field.parent[field.parentProperty] = _this.formatters.get(type).apply(field.value, setting.mask);
            });
        });
        return JSON.stringify(json);
    };
    return MaskProcessor;
}());
exports.MaskProcessor = MaskProcessor;
var Setting = /** @class */ (function () {
    function Setting(type, path, mask) {
        this.type = type;
        this.path = path;
        this.mask = mask;
    }
    return Setting;
}());
exports.Setting = Setting;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWIwNThjZTE2ODgyNGMyNWU0ZGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9qc29ucGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFzay9tYXNrLmZvcm1hdHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFzay9tYXNrLmhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFzay9tYXNrLnByb2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1REEsOENBQXVFO0FBQ3ZFLDhDQUE2RDtBQUU3RCxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLEtBQUs7SUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNsQyxDQUFDO0FBT0Qsc0RBQXNEO0FBQ3REO0lBQUE7SUF3Q0EsQ0FBQztJQXZDRyxvQkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUc7WUFDVCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFO29CQUNGO3dCQUNJLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixNQUFNLEVBQUUsWUFBWTt3QkFDcEIs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O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7OztBQUdBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsK0JBQStCO0FBQ2xFO0FBQ0E7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QyxJQUFJLENBQUM7Z0JBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDbkcsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUM7QUFuQlksc0NBQWE7QUFxQjFCO0lBQ0ksaUJBQW1CLElBQVksRUFBUyxJQUFZLEVBQVMsSUFBWTtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7SUFFekUsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBSlksMEJBQU8iLCJmaWxlIjoiY29kZS1vbi1kZW1hbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YjA1OGNlMTY4ODI0YzI1ZTRkYSIsIlxuaW1wb3J0IHtFbWFpbEZvcm1hdHRlciwgR2VuZXJpY0Zvcm1hdHRlcn0gZnJvbSBcIi4vbWFzay9tYXNrLmZvcm1hdHRlclwiO1xuaW1wb3J0IHtNYXNrUHJvY2Vzc29yLCBTZXR0aW5nfSBmcm9tIFwiLi9tYXNrL21hc2sucHJvY2Vzc29yXCI7XG5cblN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKHRoaXMpID4gMFxufVxuXG5cbmludGVyZmFjZSBJSG9tZXIge1xuICAgIG5hbWUoKTogU3RyaW5nO1xufVxuXG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9KU09OUGF0aC1QbHVzL0pTT05QYXRoL2lzc3Vlcy8xNjNcbmV4cG9ydCBjbGFzcyBIb21lciBpbXBsZW1lbnRzIElIb21lciB7XG4gICAgbmFtZSgpe1xuXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgIGJvb2s6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwicmVmZXJlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IFwiTmlnZWwgUmVlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2F5aW5ncyBvZiB0aGUgQ2VudHVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDguOTVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiZmljdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBcIkV2ZWx5biBXYXVnaFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3QganNvbiA9IHtcbiAgICAgICAgLy8gICAgIG5hbWU6IFwiTWFyY2VsbyBNYWljb1wiXG4gICAgICAgIC8vIH1cblxuICAgIC8vICAgIGxldCByZXN1bHQgPSBqc29ucGF0aC5KU09OUGF0aCh7anNvbiwgcGF0aDogJyQuc3RvcmUuYm9va1sqXS5jYXRlZ29yeScsIHJlc3VsdFR5cGU6ICdhbGwnfSlcbiAgICAgICAgLy9sZXQgcmVzdWx0ID0ganNvbnBhdGguSlNPTlBhdGgoe2pzb24sIHBhdGg6ICckLm5hbWUnLCByZXN1bHRUeXBlOiAnYWxsJ30pXG4gICAgICAgICAvL2xldCByZXN1bHQgPSBcInt9XCJcbiAgICAgICAgLy8gIGxldCB0ZXN0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkgYXMgQXJyYXk8YW55PlxuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvLyB0ZXN0ZS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBtYXRjaCA9IHZhbHVlLnBhdGgubWF0Y2goL1xcW1teXFxdXSpdL2cpO1xuICAgICAgICAvLyAgICAgbGV0IG5hbWUgPSBtYXRjaFttYXRjaC5sZW5ndGggLSAxXS5yZXBsYWNlKC9cXFt8XFxdfCcvZywgXCJcIilcbiAgICAgICAgLy8gICAgIHZhbHVlLnBhcmVudFtuYW1lXSA9IDIwXG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlLnBhcmVudCkpXG4gICAgICAgIC8vIH0pXG4gICAgICAgLy8gY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpXG4gICAgICAgLy8gcmV0dXJuIHR5cGVvZiByZXN1bHQgKyBcIiB0ZXN0ZVwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmljRm9ybWF0dGVyKCkuYXBwbHkoXCIxMTk4NzYzODc2M1wiLCBcIigjIykqKioqKi0jIyMjXCIpICsgbmV3IEVtYWlsRm9ybWF0dGVyKCkuYXBwbHkoXCJ0eXJpb24ubGFubmlzdGVyQHlhaG9vLmNvbS5iclwiLCBcIiMjKioqKipAIyoqKi4jIyMuIyNcIilcbiAgICB9XG59XG5cbi8vY29uc29sZS5sb2cobmV3IEhvbWVyKCkubmFtZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93KCkge1xuICAgIGxldCBob21lciA9IG5ldyBIb21lcigpO1xuICAgIHJldHVybiBob21lci5uYW1lKCk7XG59XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IEhvbWVyKCk7XG4vL2NvbnNvbGUubG9nKG5ldyBHZW5lcmljRm9ybWF0dGVyKCkuYXBwbHkoXCIxMTk4NzYzODc2M1wiLCBcIigjIykqKioqKi0jIyMjXCIpKVxuXG5jb25zdCBqc29uID0ge1xuICAgIHN0b3JlOiB7XG4gICAgICAgIGJvb2s6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaG9uZTogXCIxMTk4NzYzODc2NVwiLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIm1tYWljb0BnbWFpbC5jb21cIixcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaG9uZTogXCIxMTk1NjE5NDgyM1wiLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBcImdlaXNhLmxpbWFAaG90bWFpbC5jb21cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufTtcblxubGV0IHJlc3VsdCA9IG5ldyBNYXNrUHJvY2Vzc29yKCkucHJvY2Vzcyhqc29uLCBbbmV3IFNldHRpbmcoXCJHRU5FUklDXCIsIFwiJC5zdG9yZS5ib29rWypdLnBob25lXCIsIFwiKCMjKSoqKioqLSMjIyNcIiksXG4gICAgbmV3IFNldHRpbmcoXCJFTUFJTFwiLCBcIiQuc3RvcmUuYm9va1sqXS5lbWFpbFwiLCBcIiMjKioqKipAIyoqKi4jIyMuIyNcIildKVxuY29uc29sZS5sb2cocmVzdWx0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICAgICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgICAgICAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5KU09OUGF0aCA9IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgICAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICAgIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICAgICAgICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgICAgICAgICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICAgICAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgICAgICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgICAgICAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgICAgICAgICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gICAgICAgIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICAgICAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gICAgICAgIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICAgICAgICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgICAgICAgICByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgICAgICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgICAgIGlmICghbykgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgICAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgICAgICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHtcbiAgICAgICAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG5cbiAgICAgICAgaWYgKCFpdCkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChpdCkgbyA9IGl0O1xuICAgICAgICAgICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICAgICAgICAgIHZhciBGID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzOiBGLFxuICAgICAgICAgICAgICAgICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZjogRlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSxcbiAgICAgICAgICAgIGRpZEVyciA9IGZhbHNlLFxuICAgICAgICAgICAgZXJyO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGl0ID0gaXQuY2FsbChvKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGRpZEVyciA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXJyID0gZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBoYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7bnVsbHxib29sZWFufG51bWJlcnxzdHJpbmd8UGxhaW5PYmplY3R8R2VuZXJpY0FycmF5fSBKU09OT2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYXJyYXkgYW5kIHRoZW4gcHVzaGVzIGl0ZW0gaW50byBpdC5cbiAgICAgKiBAcGFyYW0ge0dlbmVyaWNBcnJheX0gYXJyIEFycmF5IHRvIGNvcHkgYW5kIGludG8gd2hpY2ggdG8gcHVzaFxuICAgICAqIEBwYXJhbSB7YW55fSBpdGVtIEFycmF5IGl0ZW0gdG8gYWRkICh0byBlbmQpXG4gICAgICogQHJldHVybnMge0dlbmVyaWNBcnJheX0gQ29weSBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIHB1c2goYXJyLCBpdGVtKSB7XG4gICAgICAgIGFyciA9IGFyci5zbGljZSgpO1xuICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29waWVzIGFycmF5IGFuZCB0aGVuIHVuc2hpZnRzIGl0ZW0gaW50byBpdC5cbiAgICAgKiBAcGFyYW0ge2FueX0gaXRlbSBBcnJheSBpdGVtIHRvIGFkZCAodG8gYmVnaW5uaW5nKVxuICAgICAqIEBwYXJhbSB7R2VuZXJpY0FycmF5fSBhcnIgQXJyYXkgdG8gY29weSBhbmQgaW50byB3aGljaCB0byB1bnNoaWZ0XG4gICAgICogQHJldHVybnMge0dlbmVyaWNBcnJheX0gQ29weSBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gdW5zaGlmdChpdGVtLCBhcnIpIHtcbiAgICAgICAgYXJyID0gYXJyLnNsaWNlKCk7XG4gICAgICAgIGFyci51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYXVnaHQgd2hlbiBKU09OUGF0aCBpcyB1c2VkIHdpdGhvdXQgYG5ld2AgYnV0IHJldGhyb3duIGlmIHdpdGggYG5ld2BcbiAgICAgKiBAZXh0ZW5kcyBFcnJvclxuICAgICAqL1xuXG5cbiAgICB2YXIgTmV3RXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICAgICAgICBfaW5oZXJpdHMoTmV3RXJyb3IsIF9FcnJvcik7XG5cbiAgICAgICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOZXdFcnJvcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgZXZhbHVhdGVkIHNjYWxhciB2YWx1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmV3RXJyb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5ld0Vycm9yKTtcblxuICAgICAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnSlNPTlBhdGggc2hvdWxkIG5vdCBiZSBjYWxsZWQgd2l0aCBcIm5ld1wiIChpdCBwcmV2ZW50cyByZXR1cm4gJyArICdvZiAodW53cmFwcGVkKSBzY2FsYXIgdmFsdWVzKScpO1xuICAgICAgICAgICAgX3RoaXMuYXZvaWROZXcgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLm5hbWUgPSAnTmV3RXJyb3InO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE5ld0Vycm9yO1xuICAgIH0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge1BsYWluT2JqZWN0fSBSZXR1cm5PYmplY3RcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aFxuICAgICAqIEBwcm9wZXJ0eSB7SlNPTk9iamVjdH0gdmFsdWVcbiAgICAgKiBAcHJvcGVydHkge1BsYWluT2JqZWN0fEdlbmVyaWNBcnJheX0gcGFyZW50XG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHBhcmVudFByb3BlcnR5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAY2FsbGJhY2sgSlNPTlBhdGhDYWxsYmFja1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfFBsYWluT2JqZWN0fSBwcmVmZXJyZWRPdXRwdXRcbiAgICAgKiBAcGFyYW0ge1widmFsdWVcInxcInByb3BlcnR5XCJ9IHR5cGVcbiAgICAgKiBAcGFyYW0ge1JldHVybk9iamVjdH0gZnVsbFJldE9ialxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGNhbGxiYWNrIE90aGVyVHlwZUNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtKU09OT2JqZWN0fSB2YWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7UGxhaW5PYmplY3R8R2VuZXJpY0FycmF5fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50UHJvcE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gLS0gQ2FuIG1ha2UgbXVsdGlsaW5lIHR5cGUgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL3N5YXZvcnNreS9jb21tZW50LXBhcnNlci9pc3N1ZXMvMTA5ICovXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7UGxhaW5PYmplY3R9IEpTT05QYXRoT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7SlNPTn0ganNvblxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfHN0cmluZ1tdfSBwYXRoXG4gICAgICogQHByb3BlcnR5IHtcInZhbHVlXCJ8XCJwYXRoXCJ8XCJwb2ludGVyXCJ8XCJwYXJlbnRcInxcInBhcmVudFByb3BlcnR5XCJ8XCJhbGxcIn0gW3Jlc3VsdFR5cGU9XCJ2YWx1ZVwiXVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2ZsYXR0ZW49ZmFsc2VdXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBbd3JhcD10cnVlXVxuICAgICAqIEBwcm9wZXJ0eSB7UGxhaW5PYmplY3R9IFtzYW5kYm94PXt9XVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3ByZXZlbnRFdmFsPWZhbHNlXVxuICAgICAqIEBwcm9wZXJ0eSB7UGxhaW5PYmplY3R8R2VuZXJpY0FycmF5fG51bGx9IFtwYXJlbnQ9bnVsbF1cbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbcGFyZW50UHJvcGVydHk9bnVsbF1cbiAgICAgKiBAcHJvcGVydHkge0pTT05QYXRoQ2FsbGJhY2t9IFtjYWxsYmFja11cbiAgICAgKiBAcHJvcGVydHkge090aGVyVHlwZUNhbGxiYWNrfSBbb3RoZXJUeXBlQ2FsbGJhY2tdIERlZmF1bHRzIHRvXG4gICAgICogICBmdW5jdGlvbiB3aGljaCB0aHJvd3Mgb24gZW5jb3VudGVyaW5nIGBAb3RoZXJgXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBbYXV0b3N0YXJ0PXRydWVdXG4gICAgICovXG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gLS0gQ2FuIG1ha2UgbXVsdGlsaW5lIHR5cGUgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL3N5YXZvcnNreS9jb21tZW50LXBhcnNlci9pc3N1ZXMvMTA5ICovXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3twYXRoOiBzdHJpbmc7IGpzb246IHN0cmluZzsgcmVzdWx0VHlwZTogc3RyaW5nfX0gb3B0cyBJZiBhIHN0cmluZywgd2lsbCBiZSB0cmVhdGVkIGFzIGBleHByYFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwcl0gSlNPTiBwYXRoIHRvIGV2YWx1YXRlXG4gICAgICogQHBhcmFtIHtKU09OfSBbb2JqXSBKU09OIG9iamVjdCB0byBldmFsdWF0ZSBhZ2FpbnN0XG4gICAgICogQHBhcmFtIHtKU09OUGF0aENhbGxiYWNrfSBbY2FsbGJhY2tdIFBhc3NlZCAzIGFyZ3VtZW50czogMSkgZGVzaXJlZCBwYXlsb2FkXG4gICAgICogICAgIHBlciBgcmVzdWx0VHlwZWAsIDIpIGBcInZhbHVlXCJ8XCJwcm9wZXJ0eVwiYCwgMykgRnVsbCByZXR1cm5lZCBvYmplY3Qgd2l0aFxuICAgICAqICAgICBhbGwgcGF5bG9hZHNcbiAgICAgKiBAcGFyYW0ge090aGVyVHlwZUNhbGxiYWNrfSBbb3RoZXJUeXBlQ2FsbGJhY2tdIElmIGBAb3RoZXIoKWAgaXMgYXQgdGhlIGVuZFxuICAgICAqICAgb2Ygb25lJ3MgcXVlcnksIHRoaXMgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBpdGVtLCBpdHNcbiAgICAgKiAgIHBhdGgsIGl0cyBwYXJlbnQsIGFuZCBpdHMgcGFyZW50J3MgcHJvcGVydHkgbmFtZSwgYW5kIGl0IHNob3VsZCByZXR1cm5cbiAgICAgKiAgIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN1cHBsaWVkIHZhbHVlIGJlbG9uZ3MgdG8gdGhlIFwib3RoZXJcIlxuICAgICAqICAgdHlwZSBvciBub3QgKG9yIGl0IG1heSBoYW5kbGUgdHJhbnNmb3JtYXRpb25zIGFuZCByZXR1cm4gYGZhbHNlYCkuXG4gICAgICogQHJldHVybnMge0pTT05QYXRofVxuICAgICAqIEBjbGFzc1xuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBKU09OUGF0aChvcHRzLCBleHByLCBvYmosIGNhbGxiYWNrLCBvdGhlclR5cGVDYWxsYmFjaykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEpTT05QYXRoKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpTT05QYXRoKG9wdHMsIGV4cHIsIG9iaiwgY2FsbGJhY2ssIG90aGVyVHlwZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUuYXZvaWROZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG90aGVyVHlwZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjYWxsYmFjayA9IG9iajtcbiAgICAgICAgICAgIG9iaiA9IGV4cHI7XG4gICAgICAgICAgICBleHByID0gb3B0cztcbiAgICAgICAgICAgIG9wdHMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdE9iaiA9IG9wdHMgJiYgX3R5cGVvZihvcHRzKSA9PT0gJ29iamVjdCc7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB0aGlzLmpzb24gPSBvcHRzLmpzb24gfHwgb2JqO1xuICAgICAgICB0aGlzLnBhdGggPSBvcHRzLnBhdGggfHwgZXhwcjtcbiAgICAgICAgdGhpcy5yZXN1bHRUeXBlID0gb3B0cy5yZXN1bHRUeXBlIHx8ICd2YWx1ZSc7XG4gICAgICAgIHRoaXMuZmxhdHRlbiA9IG9wdHMuZmxhdHRlbiB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy53cmFwID0gaGFzT3duUHJvcC5jYWxsKG9wdHMsICd3cmFwJykgPyBvcHRzLndyYXAgOiB0cnVlO1xuICAgICAgICB0aGlzLnNhbmRib3ggPSBvcHRzLnNhbmRib3ggfHwge307XG4gICAgICAgIHRoaXMucHJldmVudEV2YWwgPSBvcHRzLnByZXZlbnRFdmFsIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG9wdHMucGFyZW50IHx8IG51bGw7XG4gICAgICAgIHRoaXMucGFyZW50UHJvcGVydHkgPSBvcHRzLnBhcmVudFByb3BlcnR5IHx8IG51bGw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBvcHRzLmNhbGxiYWNrIHx8IGNhbGxiYWNrIHx8IG51bGw7XG5cbiAgICAgICAgdGhpcy5vdGhlclR5cGVDYWxsYmFjayA9IG9wdHMub3RoZXJUeXBlQ2FsbGJhY2sgfHwgb3RoZXJUeXBlQ2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3Qgc3VwcGx5IGFuIG90aGVyVHlwZUNhbGxiYWNrIGNhbGxiYWNrIG9wdGlvbiAnICsgJ3dpdGggdGhlIEBvdGhlcigpIG9wZXJhdG9yLicpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRzLmF1dG9zdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0ge1xuICAgICAgICAgICAgICAgIHBhdGg6IG9wdE9iaiA/IG9wdHMucGF0aCA6IGV4cHJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghb3B0T2JqKSB7XG4gICAgICAgICAgICAgICAgYXJncy5qc29uID0gb2JqO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgnanNvbicgaW4gb3B0cykge1xuICAgICAgICAgICAgICAgIGFyZ3MuanNvbiA9IG9wdHMuanNvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJldCA9IHRoaXMuZXZhbHVhdGUoYXJncyk7XG5cbiAgICAgICAgICAgIGlmICghcmV0IHx8IF90eXBlb2YocmV0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTmV3RXJyb3IocmV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH0gLy8gUFVCTElDIE1FVEhPRFNcblxuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gKGV4cHIsIGpzb24sIGNhbGxiYWNrLCBvdGhlclR5cGVDYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgY3VyclBhcmVudCA9IHRoaXMucGFyZW50LFxuICAgICAgICAgICAgY3VyclBhcmVudFByb3BlcnR5ID0gdGhpcy5wYXJlbnRQcm9wZXJ0eTtcbiAgICAgICAgdmFyIGZsYXR0ZW4gPSB0aGlzLmZsYXR0ZW4sXG4gICAgICAgICAgICB3cmFwID0gdGhpcy53cmFwO1xuICAgICAgICB0aGlzLmN1cnJSZXN1bHRUeXBlID0gdGhpcy5yZXN1bHRUeXBlO1xuICAgICAgICB0aGlzLmN1cnJQcmV2ZW50RXZhbCA9IHRoaXMucHJldmVudEV2YWw7XG4gICAgICAgIHRoaXMuY3VyclNhbmRib3ggPSB0aGlzLnNhbmRib3g7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdGhpcy5jYWxsYmFjaztcbiAgICAgICAgdGhpcy5jdXJyT3RoZXJUeXBlQ2FsbGJhY2sgPSBvdGhlclR5cGVDYWxsYmFjayB8fCB0aGlzLm90aGVyVHlwZUNhbGxiYWNrO1xuICAgICAgICBqc29uID0ganNvbiB8fCB0aGlzLmpzb247XG4gICAgICAgIGV4cHIgPSBleHByIHx8IHRoaXMucGF0aDtcblxuICAgICAgICBpZiAoZXhwciAmJiBfdHlwZW9mKGV4cHIpID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShleHByKSkge1xuICAgICAgICAgICAgaWYgKCFleHByLnBhdGggJiYgZXhwci5wYXRoICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHN1cHBseSBhIFwicGF0aFwiIHByb3BlcnR5IHdoZW4gcHJvdmlkaW5nIGFuIG9iamVjdCAnICsgJ2FyZ3VtZW50IHRvIEpTT05QYXRoLmV2YWx1YXRlKCkuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcC5jYWxsKGV4cHIsICdqc29uJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBzdXBwbHkgYSBcImpzb25cIiBwcm9wZXJ0eSB3aGVuIHByb3ZpZGluZyBhbiBvYmplY3QgJyArICdhcmd1bWVudCB0byBKU09OUGF0aC5ldmFsdWF0ZSgpLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2V4cHIgPSBleHByO1xuICAgICAgICAgICAganNvbiA9IF9leHByLmpzb247XG4gICAgICAgICAgICBmbGF0dGVuID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdmbGF0dGVuJykgPyBleHByLmZsYXR0ZW4gOiBmbGF0dGVuO1xuICAgICAgICAgICAgdGhpcy5jdXJyUmVzdWx0VHlwZSA9IGhhc093blByb3AuY2FsbChleHByLCAncmVzdWx0VHlwZScpID8gZXhwci5yZXN1bHRUeXBlIDogdGhpcy5jdXJyUmVzdWx0VHlwZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNhbmRib3ggPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ3NhbmRib3gnKSA/IGV4cHIuc2FuZGJveCA6IHRoaXMuY3VyclNhbmRib3g7XG4gICAgICAgICAgICB3cmFwID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICd3cmFwJykgPyBleHByLndyYXAgOiB3cmFwO1xuICAgICAgICAgICAgdGhpcy5jdXJyUHJldmVudEV2YWwgPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ3ByZXZlbnRFdmFsJykgPyBleHByLnByZXZlbnRFdmFsIDogdGhpcy5jdXJyUHJldmVudEV2YWw7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGhhc093blByb3AuY2FsbChleHByLCAnY2FsbGJhY2snKSA/IGV4cHIuY2FsbGJhY2sgOiBjYWxsYmFjaztcbiAgICAgICAgICAgIHRoaXMuY3Vyck90aGVyVHlwZUNhbGxiYWNrID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdvdGhlclR5cGVDYWxsYmFjaycpID8gZXhwci5vdGhlclR5cGVDYWxsYmFjayA6IHRoaXMuY3Vyck90aGVyVHlwZUNhbGxiYWNrO1xuICAgICAgICAgICAgY3VyclBhcmVudCA9IGhhc093blByb3AuY2FsbChleHByLCAncGFyZW50JykgPyBleHByLnBhcmVudCA6IGN1cnJQYXJlbnQ7XG4gICAgICAgICAgICBjdXJyUGFyZW50UHJvcGVydHkgPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ3BhcmVudFByb3BlcnR5JykgPyBleHByLnBhcmVudFByb3BlcnR5IDogY3VyclBhcmVudFByb3BlcnR5O1xuICAgICAgICAgICAgZXhwciA9IGV4cHIucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJQYXJlbnQgPSBjdXJyUGFyZW50IHx8IG51bGw7XG4gICAgICAgIGN1cnJQYXJlbnRQcm9wZXJ0eSA9IGN1cnJQYXJlbnRQcm9wZXJ0eSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4cHIpKSB7XG4gICAgICAgICAgICBleHByID0gSlNPTlBhdGgudG9QYXRoU3RyaW5nKGV4cHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFleHByICYmIGV4cHIgIT09ICcnIHx8ICFqc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cHJMaXN0ID0gSlNPTlBhdGgudG9QYXRoQXJyYXkoZXhwcik7XG5cbiAgICAgICAgaWYgKGV4cHJMaXN0WzBdID09PSAnJCcgJiYgZXhwckxpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZXhwckxpc3Quc2hpZnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hhc1BhcmVudFNlbGVjdG9yID0gbnVsbDtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fdHJhY2UoZXhwckxpc3QsIGpzb24sIFsnJCddLCBjdXJyUGFyZW50LCBjdXJyUGFyZW50UHJvcGVydHksIGNhbGxiYWNrKS5maWx0ZXIoZnVuY3Rpb24gKGVhKSB7XG4gICAgICAgICAgICByZXR1cm4gZWEgJiYgIWVhLmlzUGFyZW50U2VsZWN0b3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd3JhcCAmJiByZXN1bHQubGVuZ3RoID09PSAxICYmICFyZXN1bHRbMF0uaGFzQXJyRXhwcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFByZWZlcnJlZE91dHB1dChyZXN1bHRbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5yZWR1Y2UoZnVuY3Rpb24gKHJzbHQsIGVhKSB7XG4gICAgICAgICAgICB2YXIgdmFsT3JQYXRoID0gX3RoaXMyLl9nZXRQcmVmZXJyZWRPdXRwdXQoZWEpO1xuXG4gICAgICAgICAgICBpZiAoZmxhdHRlbiAmJiBBcnJheS5pc0FycmF5KHZhbE9yUGF0aCkpIHtcbiAgICAgICAgICAgICAgICByc2x0ID0gcnNsdC5jb25jYXQodmFsT3JQYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcnNsdC5wdXNoKHZhbE9yUGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByc2x0O1xuICAgICAgICB9LCBbXSk7XG4gICAgfTsgLy8gUFJJVkFURSBNRVRIT0RTXG5cblxuICAgIEpTT05QYXRoLnByb3RvdHlwZS5fZ2V0UHJlZmVycmVkT3V0cHV0ID0gZnVuY3Rpb24gKGVhKSB7XG4gICAgICAgIHZhciByZXN1bHRUeXBlID0gdGhpcy5jdXJyUmVzdWx0VHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHJlc3VsdFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGggPSBBcnJheS5pc0FycmF5KGVhLnBhdGgpID8gZWEucGF0aCA6IEpTT05QYXRoLnRvUGF0aEFycmF5KGVhLnBhdGgpO1xuICAgICAgICAgICAgICAgIGVhLnBvaW50ZXIgPSBKU09OUGF0aC50b1BvaW50ZXIocGF0aCk7XG4gICAgICAgICAgICAgICAgZWEucGF0aCA9IHR5cGVvZiBlYS5wYXRoID09PSAnc3RyaW5nJyA/IGVhLnBhdGggOiBKU09OUGF0aC50b1BhdGhTdHJpbmcoZWEucGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICBjYXNlICdwYXJlbnQnOlxuICAgICAgICAgICAgY2FzZSAncGFyZW50UHJvcGVydHknOlxuICAgICAgICAgICAgICAgIHJldHVybiBlYVtyZXN1bHRUeXBlXTtcblxuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT05QYXRoLnRvUGF0aFN0cmluZyhlYVtyZXN1bHRUeXBlXSk7XG5cbiAgICAgICAgICAgIGNhc2UgJ3BvaW50ZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OUGF0aC50b1BvaW50ZXIoZWEucGF0aCk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biByZXN1bHQgdHlwZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEpTT05QYXRoLnByb3RvdHlwZS5faGFuZGxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZnVsbFJldE9iaiwgY2FsbGJhY2ssIHR5cGUpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZmVycmVkT3V0cHV0ID0gdGhpcy5fZ2V0UHJlZmVycmVkT3V0cHV0KGZ1bGxSZXRPYmopO1xuXG4gICAgICAgICAgICBmdWxsUmV0T2JqLnBhdGggPSB0eXBlb2YgZnVsbFJldE9iai5wYXRoID09PSAnc3RyaW5nJyA/IGZ1bGxSZXRPYmoucGF0aCA6IEpTT05QYXRoLnRvUGF0aFN0cmluZyhmdWxsUmV0T2JqLnBhdGgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9jYWxsYmFjay1yZXR1cm5cblxuICAgICAgICAgICAgY2FsbGJhY2socHJlZmVycmVkT3V0cHV0LCB0eXBlLCBmdWxsUmV0T2JqKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwclxuICAgICAqIEBwYXJhbSB7SlNPTk9iamVjdH0gdmFsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge1BsYWluT2JqZWN0fEdlbmVyaWNBcnJheX0gcGFyZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudFByb3BOYW1lXG4gICAgICogQHBhcmFtIHtKU09OUGF0aENhbGxiYWNrfSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFzQXJyRXhwclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0ZXJhbFByaW9yaXR5XG4gICAgICogQHJldHVybnMge1JldHVybk9iamVjdHxSZXR1cm5PYmplY3RbXX1cbiAgICAgKi9cblxuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl90cmFjZSA9IGZ1bmN0aW9uIChleHByLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBoYXNBcnJFeHByLCBsaXRlcmFsUHJpb3JpdHkpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgLy8gTm8gZXhwciB0byBmb2xsb3c/IHJldHVybiBwYXRoIGFuZCB2YWx1ZSBhcyB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vICB0aGlzIHRyYWNlIGJyYW5jaFxuICAgICAgICB2YXIgcmV0T2JqO1xuXG4gICAgICAgIGlmICghZXhwci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldE9iaiA9IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgcGFyZW50UHJvcGVydHk6IHBhcmVudFByb3BOYW1lLFxuICAgICAgICAgICAgICAgIGhhc0FyckV4cHI6IGhhc0FyckV4cHJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNhbGxiYWNrKHJldE9iaiwgY2FsbGJhY2ssICd2YWx1ZScpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0T2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvYyA9IGV4cHJbMF0sXG4gICAgICAgICAgICB4ID0gZXhwci5zbGljZSgxKTsgLy8gV2UgbmVlZCB0byBnYXRoZXIgdGhlIHJldHVybiB2YWx1ZSBvZiByZWN1cnNpdmUgdHJhY2UgY2FsbHMgaW4gb3JkZXIgdG9cbiAgICAgICAgLy8gZG8gdGhlIHBhcmVudCBzZWwgY29tcHV0YXRpb24uXG5cbiAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtSZXR1cm5PYmplY3R8UmV0dXJuT2JqZWN0W119IGVsZW1zXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cblxuICAgICAgICBmdW5jdGlvbiBhZGRSZXQoZWxlbXMpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW1zKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FzIGNhdXNpbmcgZXhjZXNzaXZlIHN0YWNrIHNpemUgaW4gTm9kZSAod2l0aCBvclxuICAgICAgICAgICAgICAgIC8vICB3aXRob3V0IEJhYmVsKSBhZ2FpbnN0IG91ciBwZXJmb3JtYW5jZSB0ZXN0OlxuICAgICAgICAgICAgICAgIC8vICBgcmV0LnB1c2goLi4uZWxlbXMpO2BcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChlbGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHR5cGVvZiBsb2MgIT09ICdzdHJpbmcnIHx8IGxpdGVyYWxQcmlvcml0eSkgJiYgdmFsICYmIGhhc093blByb3AuY2FsbCh2YWwsIGxvYykpIHtcbiAgICAgICAgICAgIC8vIHNpbXBsZSBjYXNlLS1kaXJlY3RseSBmb2xsb3cgcHJvcGVydHlcbiAgICAgICAgICAgIGFkZFJldCh0aGlzLl90cmFjZSh4LCB2YWxbbG9jXSwgcHVzaChwYXRoLCBsb2MpLCB2YWwsIGxvYywgY2FsbGJhY2ssIGhhc0FyckV4cHIpKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXN3aXRjaCAtLSBQYXJ0IG9mIGxhcmdlciBgaWZgXG4gICAgICAgIH0gZWxzZSBpZiAobG9jID09PSAnKicpIHtcbiAgICAgICAgICAgIC8vIGFsbCBjaGlsZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB0aGlzLl93YWxrKGxvYywgeCwgdmFsLCBwYXRoLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lLCBjYWxsYmFjaywgZnVuY3Rpb24gKG0sIGwsIF94LCB2LCBwLCBwYXIsIHByLCBjYikge1xuICAgICAgICAgICAgICAgIGFkZFJldChfdGhpczMuX3RyYWNlKHVuc2hpZnQobSwgX3gpLCB2LCBwLCBwYXIsIHByLCBjYiwgdHJ1ZSwgdHJ1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jID09PSAnLi4nKSB7XG4gICAgICAgICAgICAvLyBhbGwgZGVzY2VuZGVudCBwYXJlbnQgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gQ2hlY2sgcmVtYWluaW5nIGV4cHJlc3Npb24gd2l0aCB2YWwncyBpbW1lZGlhdGUgY2hpbGRyZW5cbiAgICAgICAgICAgIGFkZFJldCh0aGlzLl90cmFjZSh4LCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBoYXNBcnJFeHByKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3dhbGsobG9jLCB4LCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBmdW5jdGlvbiAobSwgbCwgX3gsIHYsIHAsIHBhciwgcHIsIGNiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgam9pbiBtIGFuZCB4IGhlcmUgYmVjYXVzZSB3ZSBvbmx5IHdhbnQgcGFyZW50cyxcbiAgICAgICAgICAgICAgICAvLyAgIG5vdCBzY2FsYXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgaWYgKF90eXBlb2YodlttXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEtlZXAgZ29pbmcgd2l0aCByZWN1cnNpdmUgZGVzY2VudCBvbiB2YWwnc1xuICAgICAgICAgICAgICAgICAgICAvLyAgIG9iamVjdCBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICBhZGRSZXQoX3RoaXMzLl90cmFjZSh1bnNoaWZ0KGwsIF94KSwgdlttXSwgcHVzaChwLCBtKSwgdiwgbSwgY2IsIHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgLy8gVGhlIHBhcmVudCBzZWwgY29tcHV0YXRpb24gaXMgaGFuZGxlZCBpbiB0aGUgZnJhbWUgYWJvdmUgdXNpbmcgdGhlXG4gICAgICAgICAgICAvLyBhbmNlc3RvciBvYmplY3Qgb2YgdmFsXG5cbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICdeJykge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBub3QgYSBmaW5hbCBlbmRwb2ludCwgc28gd2UgZG8gbm90IGludm9rZSB0aGUgY2FsbGJhY2sgaGVyZVxuICAgICAgICAgICAgdGhpcy5faGFzUGFyZW50U2VsZWN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLnNsaWNlKDAsIC0xKSxcbiAgICAgICAgICAgICAgICBleHByOiB4LFxuICAgICAgICAgICAgICAgIGlzUGFyZW50U2VsZWN0b3I6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobG9jID09PSAnficpIHtcbiAgICAgICAgICAgIC8vIHByb3BlcnR5IG5hbWVcbiAgICAgICAgICAgIHJldE9iaiA9IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBwdXNoKHBhdGgsIGxvYyksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmVudFByb3BOYW1lLFxuICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgIHBhcmVudFByb3BlcnR5OiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVDYWxsYmFjayhyZXRPYmosIGNhbGxiYWNrLCAncHJvcGVydHknKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJldE9iajtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICckJykge1xuICAgICAgICAgICAgLy8gcm9vdCBvbmx5XG4gICAgICAgICAgICBhZGRSZXQodGhpcy5fdHJhY2UoeCwgdmFsLCBwYXRoLCBudWxsLCBudWxsLCBjYWxsYmFjaywgaGFzQXJyRXhwcikpO1xuICAgICAgICB9IGVsc2UgaWYgKC9eKFxceDJEP1swLTldKik6KFxceDJEP1swLTldKik6PyhbMC05XSopJC8udGVzdChsb2MpKSB7XG4gICAgICAgICAgICAvLyBbc3RhcnQ6ZW5kOnN0ZXBdICBQeXRob24gc2xpY2Ugc3ludGF4XG4gICAgICAgICAgICBhZGRSZXQodGhpcy5fc2xpY2UobG9jLCB4LCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jLmluZGV4T2YoJz8oJykgPT09IDApIHtcbiAgICAgICAgICAgIC8vIFs/KGV4cHIpXSAoZmlsdGVyaW5nKVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyclByZXZlbnRFdmFsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmFsIFs/KGV4cHIpXSBwcmV2ZW50ZWQgaW4gSlNPTlBhdGggZXhwcmVzc2lvbi4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fd2Fsayhsb2MsIHgsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGZ1bmN0aW9uIChtLCBsLCBfeCwgdiwgcCwgcGFyLCBwciwgY2IpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLl9ldmFsKGwucmVwbGFjZSgvXlxcP1xcKCgoPzpbXFwwLVxcdFxceDBCXFxmXFx4MEUtXFx1MjAyN1xcdTIwMkEtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkqPylcXCkkLywgJyQxJyksIHZbbV0sIG0sIHAsIHBhciwgcHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFJldChfdGhpczMuX3RyYWNlKHVuc2hpZnQobSwgX3gpLCB2LCBwLCBwYXIsIHByLCBjYiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGxvY1swXSA9PT0gJygnKSB7XG4gICAgICAgICAgICAvLyBbKGV4cHIpXSAoZHluYW1pYyBwcm9wZXJ0eS9pbmRleClcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJQcmV2ZW50RXZhbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXZhbCBbKGV4cHIpXSBwcmV2ZW50ZWQgaW4gSlNPTlBhdGggZXhwcmVzc2lvbi4nKTtcbiAgICAgICAgICAgIH0gLy8gQXMgdGhpcyB3aWxsIHJlc29sdmUgdG8gYSBwcm9wZXJ0eSBuYW1lIChidXQgd2UgZG9uJ3Qga25vdyBpdFxuICAgICAgICAgICAgLy8gIHlldCksIHByb3BlcnR5IGFuZCBwYXJlbnQgaW5mb3JtYXRpb24gaXMgcmVsYXRpdmUgdG8gdGhlXG4gICAgICAgICAgICAvLyAgcGFyZW50IG9mIHRoZSBwcm9wZXJ0eSB0byB3aGljaCB0aGlzIGV4cHJlc3Npb24gd2lsbCByZXNvbHZlXG5cblxuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHVuc2hpZnQodGhpcy5fZXZhbChsb2MsIHZhbCwgcGF0aFtwYXRoLmxlbmd0aCAtIDFdLCBwYXRoLnNsaWNlKDAsIC0xKSwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSksIHgpLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBoYXNBcnJFeHByKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jWzBdID09PSAnQCcpIHtcbiAgICAgICAgICAgIC8vIHZhbHVlIHR5cGU6IEBib29sZWFuKCksIGV0Yy5cbiAgICAgICAgICAgIHZhciBhZGRUeXBlID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgdmFsdWVUeXBlID0gbG9jLnNsaWNlKDEsIC0yKTtcblxuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbCB8fCAhWydvYmplY3QnLCAnZnVuY3Rpb24nXS5pbmNsdWRlcyhfdHlwZW9mKHZhbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZhbGlkLXR5cGVvZlxuICAgICAgICAgICAgICAgICAgICBpZiAoX3R5cGVvZih2YWwpID09PSB2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh2YWwpICYmICEodmFsICUgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdub25GaW5pdGUnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgIU51bWJlci5pc0Zpbml0ZSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZhbGlkLXR5cGVvZlxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsICYmIF90eXBlb2YodmFsKSA9PT0gdmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnb3RoZXInOlxuICAgICAgICAgICAgICAgICAgICBhZGRUeXBlID0gdGhpcy5jdXJyT3RoZXJUeXBlQ2FsbGJhY2sodmFsLCBwYXRoLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8qIGM4IGlnbm9yZSBuZXh0IDIgKi9cblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gdmFsdWUgdHlwZSAnICsgdmFsdWVUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFkZFR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXRPYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRQcm9wZXJ0eTogcGFyZW50UHJvcE5hbWVcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2FsbGJhY2socmV0T2JqLCBjYWxsYmFjaywgJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0T2JqO1xuICAgICAgICAgICAgfSAvLyBgLWVzY2FwZWQgcHJvcGVydHlcblxuICAgICAgICB9IGVsc2UgaWYgKGxvY1swXSA9PT0gJ2AnICYmIHZhbCAmJiBoYXNPd25Qcm9wLmNhbGwodmFsLCBsb2Muc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB2YXIgbG9jUHJvcCA9IGxvYy5zbGljZSgxKTtcbiAgICAgICAgICAgIGFkZFJldCh0aGlzLl90cmFjZSh4LCB2YWxbbG9jUHJvcF0sIHB1c2gocGF0aCwgbG9jUHJvcCksIHZhbCwgbG9jUHJvcCwgY2FsbGJhY2ssIGhhc0FyckV4cHIsIHRydWUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MuaW5jbHVkZXMoJywnKSkge1xuICAgICAgICAgICAgLy8gW25hbWUxLG5hbWUyLC4uLl1cbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGxvYy5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIocGFydHMpLFxuICAgICAgICAgICAgICAgIF9zdGVwO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGFkZFJldCh0aGlzLl90cmFjZSh1bnNoaWZ0KHBhcnQsIHgpLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgfSAvLyBzaW1wbGUgY2FzZS0tZGlyZWN0bHkgZm9sbG93IHByb3BlcnR5XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWxpdGVyYWxQcmlvcml0eSAmJiB2YWwgJiYgaGFzT3duUHJvcC5jYWxsKHZhbCwgbG9jKSkge1xuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHgsIHZhbFtsb2NdLCBwdXNoKHBhdGgsIGxvYyksIHZhbCwgbG9jLCBjYWxsYmFjaywgaGFzQXJyRXhwciwgdHJ1ZSkpO1xuICAgICAgICB9IC8vIFdlIGNoZWNrIHRoZSByZXN1bHRpbmcgdmFsdWVzIGZvciBwYXJlbnQgc2VsZWN0aW9ucy4gRm9yIHBhcmVudFxuICAgICAgICAvLyBzZWxlY3Rpb25zIHdlIGRpc2NhcmQgdGhlIHZhbHVlIG9iamVjdCBhbmQgY29udGludWUgdGhlIHRyYWNlIHdpdGggdGhlXG4gICAgICAgIC8vIGN1cnJlbnQgdmFsIG9iamVjdFxuXG5cbiAgICAgICAgaWYgKHRoaXMuX2hhc1BhcmVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHJldC5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgIHZhciByZXR0ID0gcmV0W3RdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJldHQgJiYgcmV0dC5pc1BhcmVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLl90cmFjZShyZXR0LmV4cHIsIHZhbCwgcmV0dC5wYXRoLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lLCBjYWxsYmFjaywgaGFzQXJyRXhwcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodG1wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3RdID0gdG1wWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRsID0gdG1wLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdHQgPSAxOyB0dCA8IHRsOyB0dCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5zcGxpY2UodCwgMCwgdG1wW3R0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbdF0gPSB0bXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICBKU09OUGF0aC5wcm90b3R5cGUuX3dhbGsgPSBmdW5jdGlvbiAobG9jLCBleHByLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBmKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHZhciBuID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmKGksIGxvYywgZXhwciwgdmFsLCBwYXRoLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsICYmIF90eXBlb2YodmFsKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIGYobSwgbG9jLCBleHByLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEpTT05QYXRoLnByb3RvdHlwZS5fc2xpY2UgPSBmdW5jdGlvbiAobG9jLCBleHByLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGgsXG4gICAgICAgICAgICBwYXJ0cyA9IGxvYy5zcGxpdCgnOicpLFxuICAgICAgICAgICAgc3RlcCA9IHBhcnRzWzJdICYmIE51bWJlci5wYXJzZUludChwYXJ0c1syXSkgfHwgMTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcGFydHNbMF0gJiYgTnVtYmVyLnBhcnNlSW50KHBhcnRzWzBdKSB8fCAwLFxuICAgICAgICAgICAgZW5kID0gcGFydHNbMV0gJiYgTnVtYmVyLnBhcnNlSW50KHBhcnRzWzFdKSB8fCBsZW47XG4gICAgICAgIHN0YXJ0ID0gc3RhcnQgPCAwID8gTWF0aC5tYXgoMCwgc3RhcnQgKyBsZW4pIDogTWF0aC5taW4obGVuLCBzdGFydCk7XG4gICAgICAgIGVuZCA9IGVuZCA8IDAgPyBNYXRoLm1heCgwLCBlbmQgKyBsZW4pIDogTWF0aC5taW4obGVuLCBlbmQpO1xuICAgICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSB0aGlzLl90cmFjZSh1bnNoaWZ0KGksIGV4cHIpLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCB0cnVlKTsgLy8gU2hvdWxkIG9ubHkgYmUgcG9zc2libGUgdG8gYmUgYW4gYXJyYXkgaGVyZSBzaW5jZSBmaXJzdCBwYXJ0IG9mXG4gICAgICAgICAgICAvLyAgIGBgdW5zaGlmdChpLCBleHByKWAgcGFzc2VkIGluIGFib3ZlIHdvdWxkIG5vdCBiZSBlbXB0eSwgbm9yIGB+YCxcbiAgICAgICAgICAgIC8vICAgICBub3IgYmVnaW4gd2l0aCBgQGAgKGFzIGNvdWxkIHJldHVybiBvYmplY3RzKVxuICAgICAgICAgICAgLy8gVGhpcyB3YXMgY2F1c2luZyBleGNlc3NpdmUgc3RhY2sgc2l6ZSBpbiBOb2RlICh3aXRoIG9yXG4gICAgICAgICAgICAvLyAgd2l0aG91dCBCYWJlbCkgYWdhaW5zdCBvdXIgcGVyZm9ybWFuY2UgdGVzdDogYHJldC5wdXNoKC4uLnRtcCk7YFxuXG5cbiAgICAgICAgICAgIHRtcC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2godCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIEpTT05QYXRoLnByb3RvdHlwZS5fZXZhbCA9IGZ1bmN0aW9uIChjb2RlLCBfdiwgX3ZuYW1lLCBwYXRoLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lKSB7XG4gICAgICAgIGlmIChjb2RlLmluY2x1ZGVzKCdAcGFyZW50UHJvcGVydHknKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyU2FuZGJveC5fJF9wYXJlbnRQcm9wZXJ0eSA9IHBhcmVudFByb3BOYW1lO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvQHBhcmVudFByb3BlcnR5L2csICdfJF9wYXJlbnRQcm9wZXJ0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUuaW5jbHVkZXMoJ0BwYXJlbnQnKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyU2FuZGJveC5fJF9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9AcGFyZW50L2csICdfJF9wYXJlbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlLmluY2x1ZGVzKCdAcHJvcGVydHknKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyU2FuZGJveC5fJF9wcm9wZXJ0eSA9IF92bmFtZTtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL0Bwcm9wZXJ0eS9nLCAnXyRfcHJvcGVydHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlLmluY2x1ZGVzKCdAcGF0aCcpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3BhdGggPSBKU09OUGF0aC50b1BhdGhTdHJpbmcocGF0aC5jb25jYXQoW192bmFtZV0pKTtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL0BwYXRoL2csICdfJF9wYXRoJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZS5pbmNsdWRlcygnQHJvb3QnKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyU2FuZGJveC5fJF9yb290ID0gdGhpcy5qc29uO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvQHJvb3QvZywgJ18kX3Jvb3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgvQChbXFx0LVxcciBcXClcXC5cXFtcXHhBMFxcdTE2ODBcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdUZFRkZdKS8udGVzdChjb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyU2FuZGJveC5fJF92ID0gX3Y7XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9AKFtcXHQtXFxyIFxcKVxcLlxcW1xceEEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1RkVGRl0pL2csICdfJF92JDEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52bS5ydW5Jbk5ld0NvbnRleHQoY29kZSwgdGhpcy5jdXJyU2FuZGJveCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignanNvblBhdGg6ICcgKyBlLm1lc3NhZ2UgKyAnOiAnICsgY29kZSk7XG4gICAgICAgIH1cbiAgICB9OyAvLyBQVUJMSUMgQ0xBU1MgUFJPUEVSVElFUyBBTkQgTUVUSE9EU1xuICAgIC8vIENvdWxkIHN0b3JlIHRoZSBjYWNoZSBvYmplY3QgaXRzZWxmXG5cblxuICAgIEpTT05QYXRoLmNhY2hlID0ge307XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aEFyciBBcnJheSB0byBjb252ZXJ0XG4gICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggc3RyaW5nXG4gICAgICovXG5cbiAgICBKU09OUGF0aC50b1BhdGhTdHJpbmcgPSBmdW5jdGlvbiAocGF0aEFycikge1xuICAgICAgICB2YXIgeCA9IHBhdGhBcnIsXG4gICAgICAgICAgICBuID0geC5sZW5ndGg7XG4gICAgICAgIHZhciBwID0gJyQnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIS9eKH58XFxefEAoPzpbXFwwLVxcdFxceDBCXFxmXFx4MEUtXFx1MjAyN1xcdTIwMkEtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkqP1xcKFxcKSkkLy50ZXN0KHhbaV0pKSB7XG4gICAgICAgICAgICAgICAgcCArPSAvXltcXCowLTldKyQvLnRlc3QoeFtpXSkgPyAnWycgKyB4W2ldICsgJ10nIDogXCJbJ1wiICsgeFtpXSArIFwiJ11cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBvaW50ZXIgSlNPTiBQYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ30gSlNPTiBQb2ludGVyXG4gICAgICovXG5cblxuICAgIEpTT05QYXRoLnRvUG9pbnRlciA9IGZ1bmN0aW9uIChwb2ludGVyKSB7XG4gICAgICAgIHZhciB4ID0gcG9pbnRlcixcbiAgICAgICAgICAgIG4gPSB4Lmxlbmd0aDtcbiAgICAgICAgdmFyIHAgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYgKCEvXih+fFxcXnxAKD86W1xcMC1cXHRcXHgwQlxcZlxceDBFLVxcdTIwMjdcXHUyMDJBLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pKj9cXChcXCkpJC8udGVzdCh4W2ldKSkge1xuICAgICAgICAgICAgICAgIHAgKz0gJy8nICsgeFtpXS50b1N0cmluZygpLnJlcGxhY2UoL34vZywgJ34wJykucmVwbGFjZSgvXFwvL2csICd+MScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwciBFeHByZXNzaW9uIHRvIGNvbnZlcnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG5cblxuICAgIEpTT05QYXRoLnRvUGF0aEFycmF5ID0gZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gSlNPTlBhdGguY2FjaGU7XG5cbiAgICAgICAgaWYgKGNhY2hlW2V4cHJdKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbZXhwcl0uY29uY2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VieCA9IFtdO1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IGV4cHIgLy8gUHJvcGVydGllc1xuICAgICAgICAgICAgLnJlcGxhY2UoL0AoPzpudWxsfGJvb2xlYW58bnVtYmVyfHN0cmluZ3xpbnRlZ2VyfHVuZGVmaW5lZHxub25GaW5pdGV8c2NhbGFyfGFycmF5fG9iamVjdHxmdW5jdGlvbnxvdGhlcilcXChcXCkvZywgJzskJjsnKSAvLyBQYXJlbnRoZXRpY2FsIGV2YWx1YXRpb25zIChmaWx0ZXJpbmcgYW5kIG90aGVyd2lzZSksIGRpcmVjdGx5XG4gICAgICAgICAgICAvLyAgIHdpdGhpbiBicmFja2V0cyBvciBzaW5nbGUgcXVvdGVzXG4gICAgICAgICAgICAucmVwbGFjZSgvWydcXFtdKFxcPz9cXCgoPzpbXFwwLVxcdFxceDBCXFxmXFx4MEUtXFx1MjAyN1xcdTIwMkEtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkqP1xcKSlbJ1xcXV0vZywgZnVuY3Rpb24gKCQwLCAkMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnWyMnICsgKHN1YngucHVzaCgkMSkgLSAxKSArICddJztcbiAgICAgICAgICAgIH0pIC8vIEVzY2FwZSBwZXJpb2RzIGFuZCB0aWxkZXMgd2l0aGluIHByb3BlcnRpZXNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFtbXCInXSgoPzooPyFbJ1xcXV0pW1xcc1xcU10pKilbXCInXVxcXS9nLCBmdW5jdGlvbiAoJDAsIHByb3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbJ1wiICsgcHJvcC5yZXBsYWNlKC9cXC4vZywgJyVAJScpLnJlcGxhY2UoL34vZywgJyUlQEAlJScpICsgXCInXVwiO1xuICAgICAgICAgICAgfSkgLy8gUHJvcGVydGllcyBvcGVyYXRvclxuICAgICAgICAgICAgLnJlcGxhY2UoL34vZywgJzt+OycpIC8vIFNwbGl0IGJ5IHByb3BlcnR5IGJvdW5kYXJpZXNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXCInXT9cXC5bXCInXT8oPyEoPzooPyFcXFspW1xcc1xcU10pKlxcXSl8XFxbW1wiJ10/L2csICc7JykgLy8gUmVpbnNlcnQgcGVyaW9kcyB3aXRoaW4gcHJvcGVydGllc1xuICAgICAgICAgICAgLnJlcGxhY2UoLyVAJS9nLCAnLicpIC8vIFJlaW5zZXJ0IHRpbGRlcyB3aXRoaW4gcHJvcGVydGllc1xuICAgICAgICAgICAgLnJlcGxhY2UoLyUlQEAlJS9nLCAnficpIC8vIFBhcmVudFxuICAgICAgICAgICAgLnJlcGxhY2UoLyg/OjspPyhcXF4rKSg/OjspPy9nLCBmdW5jdGlvbiAoJDAsIHVwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnOycgKyB1cHMuc3BsaXQoJycpLmpvaW4oJzsnKSArICc7JztcbiAgICAgICAgICAgIH0pIC8vIERlc2NlbmRlbnRzXG4gICAgICAgICAgICAucmVwbGFjZSgvOzs7fDs7L2csICc7Li47JykgLy8gUmVtb3ZlIHRyYWlsaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvOyR8Jz9cXF18JyQvZywgJycpO1xuICAgICAgICB2YXIgZXhwckxpc3QgPSBub3JtYWxpemVkLnNwbGl0KCc7JykubWFwKGZ1bmN0aW9uIChleHApIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGV4cC5tYXRjaCgvIyhbMC05XSspLyk7XG4gICAgICAgICAgICByZXR1cm4gIW1hdGNoIHx8ICFtYXRjaFsxXSA/IGV4cCA6IHN1YnhbbWF0Y2hbMV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgY2FjaGVbZXhwcl0gPSBleHByTGlzdDtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2V4cHJdLmNvbmNhdCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAY2FsbGJhY2sgQ29uZGl0aW9uQ2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge2FueX0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ29weSBpdGVtcyBvdXQgb2Ygb25lIGFycmF5IGludG8gYW5vdGhlci5cbiAgICAgKiBAcGFyYW0ge0dlbmVyaWNBcnJheX0gc291cmNlIEFycmF5IHdpdGggaXRlbXMgdG8gY29weVxuICAgICAqIEBwYXJhbSB7R2VuZXJpY0FycmF5fSB0YXJnZXQgQXJyYXkgdG8gd2hpY2ggdG8gY29weVxuICAgICAqIEBwYXJhbSB7Q29uZGl0aW9uQ2FsbGJhY2t9IGNvbmRpdGlvbkNiIENhbGxiYWNrIHBhc3NlZCB0aGUgY3VycmVudCBpdGVtO1xuICAgICAqICAgICB3aWxsIG1vdmUgaXRlbSBpZiBldmFsdWF0ZXMgdG8gYHRydWVgXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG5cbiAgICB2YXIgbW92ZVRvQW5vdGhlckFycmF5ID0gZnVuY3Rpb24gbW92ZVRvQW5vdGhlckFycmF5KHNvdXJjZSwgdGFyZ2V0LCBjb25kaXRpb25DYikge1xuICAgICAgICB2YXIgaWwgPSBzb3VyY2UubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzb3VyY2VbaV07XG5cbiAgICAgICAgICAgIGlmIChjb25kaXRpb25DYihpdGVtKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZS5zcGxpY2UoaS0tLCAxKVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLnZtID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHIgRXhwcmVzc2lvbiB0byBldmFsdWF0ZVxuICAgICAgICAgKiBAcGFyYW0ge1BsYWluT2JqZWN0fSBjb250ZXh0IE9iamVjdCB3aG9zZSBpdGVtcyB3aWxsIGJlIGFkZGVkXG4gICAgICAgICAqICAgdG8gZXZhbHVhdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB7YW55fSBSZXN1bHQgb2YgZXZhbHVhdGVkIGNvZGVcbiAgICAgICAgICovXG4gICAgICAgIHJ1bkluTmV3Q29udGV4dDogZnVuY3Rpb24gcnVuSW5OZXdDb250ZXh0KGV4cHIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29udGV4dCk7XG4gICAgICAgICAgICB2YXIgZnVuY3MgPSBbXTtcbiAgICAgICAgICAgIG1vdmVUb0Fub3RoZXJBcnJheShrZXlzLCBmdW5jcywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgY29udGV4dFtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKHZyLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHRbdnJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZnVuY1N0cmluZyA9IGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAocywgZnVuYykge1xuICAgICAgICAgICAgICAgIHZhciBmU3RyaW5nID0gY29udGV4dFtmdW5jXS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEvZnVuY3Rpb24vLnRlc3QoZlN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgZlN0cmluZyA9ICdmdW5jdGlvbiAnICsgZlN0cmluZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ZhciAnICsgZnVuYyArICc9JyArIGZTdHJpbmcgKyAnOycgKyBzO1xuICAgICAgICAgICAgfSwgJycpO1xuICAgICAgICAgICAgZXhwciA9IGZ1bmNTdHJpbmcgKyBleHByOyAvLyBNaXRpZ2F0ZSBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9nbG9iYWwtZXZhbC13aGF0LWFyZS10aGUtb3B0aW9ucy8jbmV3X2Z1bmN0aW9uXG5cbiAgICAgICAgICAgIGlmICghLyhbXCInXSl1c2Ugc3RyaWN0XFwxLy50ZXN0KGV4cHIpICYmICFrZXlzLmluY2x1ZGVzKCdhcmd1bWVudHMnKSkge1xuICAgICAgICAgICAgICAgIGV4cHIgPSAndmFyIGFyZ3VtZW50cyA9IHVuZGVmaW5lZDsnICsgZXhwcjtcbiAgICAgICAgICAgIH0gLy8gUmVtb3ZlIGxhc3Qgc2VtaSBzbyBgcmV0dXJuYCB3aWxsIGJlIGluc2VydGVkIGJlZm9yZVxuICAgICAgICAgICAgLy8gIHRoZSBwcmV2aW91cyBvbmUgaW5zdGVhZCwgYWxsb3dpbmcgZm9yIHRoZSByZXR1cm5cbiAgICAgICAgICAgIC8vICBvZiBhIGJhcmUgZW5kaW5nIGV4cHJlc3Npb25cblxuXG4gICAgICAgICAgICBleHByID0gZXhwci5yZXBsYWNlKC87W1xcdC1cXHIgXFx4QTBcXHUxNjgwXFx1MjAwMC1cXHUyMDBBXFx1MjAyOFxcdTIwMjlcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHVGRUZGXSokLywgJycpOyAvLyBJbnNlcnQgYHJldHVybmBcblxuICAgICAgICAgICAgdmFyIGxhc3RTdGF0ZW1lbnRFbmQgPSBleHByLmxhc3RJbmRleE9mKCc7Jyk7XG4gICAgICAgICAgICB2YXIgY29kZSA9IGxhc3RTdGF0ZW1lbnRFbmQgPiAtMSA/IGV4cHIuc2xpY2UoMCwgbGFzdFN0YXRlbWVudEVuZCArIDEpICsgJyByZXR1cm4gJyArIGV4cHIuc2xpY2UobGFzdFN0YXRlbWVudEVuZCArIDEpIDogJyByZXR1cm4gJyArIGV4cHI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnN0cnVjdChGdW5jdGlvbiwgX3RvQ29uc3VtYWJsZUFycmF5KGtleXMpLmNvbmNhdChbY29kZV0pKS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZXMpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBleHBvcnRzLkpTT05QYXRoID0gSlNPTlBhdGg7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzb25wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWFza0hvbGRlcn0gZnJvbSBcIi4vbWFzay5ob2xkZXJcIjtcblxuZXhwb3J0IGVudW0gVHlwZSB7IEdFTkVSSUMsIEVNQUlMIH1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXR0ZXIge1xuICAgIGFwcGx5KGRhdGE6IHN0cmluZywgbWFzazogc3RyaW5nKTogc3RyaW5nXG59XG5cblxuZXhwb3J0IGNsYXNzIEdlbmVyaWNGb3JtYXR0ZXIgaW1wbGVtZW50cyBGb3JtYXR0ZXIge1xuICAgIGFwcGx5KGRhdGE6IHN0cmluZywgbWFzazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRyZWF0ZWREYXRhID0gZGF0YS5yZXBsYWNlKC9cXCovZywgXCIwXCIpLnRyaW0oKVxuICAgICAgICBsZXQgbWFza2VkID0gW11cblxuICAgICAgICBmb3IgKGxldCBjb250cm9sbGVyID0gMCwgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVyID0gbWFzay5jaGFyQXQoaSlcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IE1hc2tIb2xkZXIuSEFTSCkge1xuICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKE1hc2tIb2xkZXIuZ2V0Q2hhcih0cmVhdGVkRGF0YSwgY29udHJvbGxlcikpXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcisrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKGNoYXJhY3RlcilcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyID0gY2hhcmFjdGVyID09PSBNYXNrSG9sZGVyLlNUQVIgPyBjb250cm9sbGVyICsgMTogY29udHJvbGxlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hc2tlZC5qb2luKFwiXCIpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFbWFpbEZvcm1hdHRlciBpbXBsZW1lbnRzIEZvcm1hdHRlciB7XG5cbiAgICBhcHBseShlbWFpbDogc3RyaW5nLCBtYXNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbWFza2VkID0gW11cbiAgICAgICAgbGV0IG1hc2tUcmVhdGVkID0gTWFza0hvbGRlci50cmVhdEVtYWlsTWFzayhtYXNrKVxuXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2xsZXIgPSAwLCAgaSA9IDA7IGkgPCBlbWFpbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG1hc2tDaGFyYWN0ZXIgPSBNYXNrSG9sZGVyLmdldENoYXIobWFza1RyZWF0ZWQsIGNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICBpZiAobWFza0NoYXJhY3RlciA9PSBNYXNrSG9sZGVyLkhBU0ggfHwgZW1haWwuY2hhckF0KGkpID09IE1hc2tIb2xkZXIuQVQgfHwgTWFza0hvbGRlci5nZXRDaGFyKG1hc2tUcmVhdGVkLCBjb250cm9sbGVyKSA9PSBlbWFpbC5jaGFyQXQoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFza2VkLmxlbmd0aCA8IDQgJiYgZW1haWwuY2hhckF0KGkpID09IE1hc2tIb2xkZXIuQVQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFza2VkLnB1c2goXCIqKioqKipcIiArIGVtYWlsLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKE1hc2tIb2xkZXIuZ2V0Q2hhcihtYXNrVHJlYXRlZCwgY29udHJvbGxlcikgIT0gTWFza0hvbGRlci5BVCkgY29udHJvbGxlcisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKGVtYWlsLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFza2VkLnB1c2goTWFza0hvbGRlci5TVEFSKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyID0gbWFza0NoYXJhY3RlciA9PSBNYXNrSG9sZGVyLlNUQVIgPyBjb250cm9sbGVyICsgMSA6IGNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFza2VkLmpvaW4oXCJcIikudHJpbSgpXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hc2svbWFzay5mb3JtYXR0ZXIudHMiLCJleHBvcnQgY2xhc3MgTWFza0hvbGRlciB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBIQVNIOiBzdHJpbmcgPSBcIiNcIlxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RBUjogc3RyaW5nID0gXCIqXCJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFUOiBzdHJpbmcgPSBcIkBcIlxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDaGFyKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaW5kZXggPiAodmFsdWUubGVuZ3RoIC0gMSkgPyBNYXNrSG9sZGVyLlNUQVIgOiB2YWx1ZS5jaGFyQXQoaW5kZXgpXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0cmVhdEVtYWlsTWFzayhtYXNrOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG1hc2tlZCA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYzEgPSBtYXNrLmNoYXJBdChpKTtcblxuICAgICAgICAgICAgaWYgKGMxID09IE1hc2tIb2xkZXIuSEFTSCkge1xuICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKG1hc2suY2hhckF0KGkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYzEgPT0gTWFza0hvbGRlci5TVEFSICYmIG1hc2suY2hhckF0KGkgLTEpID09IE1hc2tIb2xkZXIuSEFTSCkge1xuICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKE1hc2tIb2xkZXIuU1RBUik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMxICE9IE1hc2tIb2xkZXIuU1RBUikge1xuICAgICAgICAgICAgICAgIG1hc2tlZC5wdXNoKG1hc2suY2hhckF0KGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFza2VkLmpvaW4oXCJcIilcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hc2svbWFzay5ob2xkZXIudHMiLCJpbXBvcnQganNvbnBhdGggPSByZXF1aXJlKCcuLi9qc29ucGF0aCcpO1xuaW1wb3J0IHtFbWFpbEZvcm1hdHRlciwgRm9ybWF0dGVyLCBHZW5lcmljRm9ybWF0dGVyLCBUeXBlfSBmcm9tIFwiLi9tYXNrLmZvcm1hdHRlclwiO1xuXG5leHBvcnQgY2xhc3MgTWFza1Byb2Nlc3NvciB7XG5cbiAgICBwcml2YXRlIGZvcm1hdHRlcnM6IE1hcDxUeXBlLCBGb3JtYXR0ZXI+ID0gbmV3IE1hcDxUeXBlLCBGb3JtYXR0ZXI+KFtcbiAgICAgICAgW1R5cGUuR0VORVJJQywgbmV3IEdlbmVyaWNGb3JtYXR0ZXIoKV0sXG4gICAgICAgIFtUeXBlLkVNQUlMLCBuZXcgRW1haWxGb3JtYXR0ZXIoKV1cbiAgICBdKVxuXG4gICAgcHJvY2Vzcyhqc29uOiBhbnksIHNldHRpbmdzOiBTZXR0aW5nW10pOiBzdHJpbmcge1xuICAgICAgICBzZXR0aW5ncy5mb3JFYWNoKHNldHRpbmcgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IChqc29ucGF0aC5KU09OUGF0aCh7anNvbiwgcGF0aDogc2V0dGluZy5wYXRoLCByZXN1bHRUeXBlOiAnYWxsJ30pIGFzIEFycmF5PGFueT4pXG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGU6IFR5cGUgPSBUeXBlW3NldHRpbmcudHlwZV1cbiAgICAgICAgICAgICAgICBmaWVsZC5wYXJlbnRbZmllbGQucGFyZW50UHJvcGVydHldID0gdGhpcy5mb3JtYXR0ZXJzLmdldCh0eXBlKS5hcHBseShmaWVsZC52YWx1ZSwgc2V0dGluZy5tYXNrKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbilcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBwYXRoOiBzdHJpbmcsIHB1YmxpYyBtYXNrOiBzdHJpbmcpIHtcblxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFzay9tYXNrLnByb2Nlc3Nvci50cyJdLCJzb3VyY2VSb290IjoiIn0=