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
var jsonpath = __webpack_require__(1);
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
        var result = jsonpath.JSONPath({ json: json, path: '$.store.book[*].category', resultType: 'all' });
        //console.log(`${result}`)
        var teste = JSON.parse(JSON.stringify(result));
        teste.forEach(function (value) {
            value.parent['category'] = 20;
            console.log(value.path);
            console.log(JSON.stringify(value.parent));
        });
        // console.log(JSON.parse(JSON.stringify(result)))
        return typeof result + " teste" + JSON.stringify(result);
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
console.log(instance.name());


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
     * @param {string|JSONPathOptions} opts If a string, will be treated as `expr`
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWNlZGM2MzRiMGZlZjc2YzU2NTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9qc29ucGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUMxREEsc0NBQXlDO0FBUXpDO0lBQUE7SUErQkEsQ0FBQztJQTlCRyxvQkFBSSxHQUFKO1FBRUksSUFBTSxJQUFJLEdBQUc7WUFDVCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFO29CQUNGO3dCQUNJLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixNQUFNLEVBQUUsWUFBWTt3QkFDcEIsS0FBSyxFQUFFLHdCQUF3Qjt3QkFDL0IsS0FBSyxFQUFFLElBQUk7cUJBQ2Q7b0JBQ0Q7d0JBQ0ksUUFBUSxFQUFFLFNBQVM7d0JBQ25CLE1BQU0sRUFBRSxjQUFjO3FCQUN6QjtpQkFDSjthQUNKO1NBQ0osQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLFFBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUMzRiwwQkFBMEI7UUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFlO1FBQzVELEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBSztZQUNmLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFDSCxrREFBa0Q7UUFDakQsTUFBTSxDQUFDLE9BQU8sTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQS9CWSxzQkFBSztBQWlDbEIsaUNBQWlDO0FBRWpDO0lBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFIRCx1QkFHQztBQUVELElBQU0sUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7OztBQ3BEN0I7QUFDQTtBQUNBO0FBQ0EsbUhBQW1IO0FBQ25ILENBQUMsNEJBQTRCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxTQUFTOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFvRDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsSUFBSTtBQUNuQixpQkFBaUIsYUFBYTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQixlQUFlLGFBQWE7QUFDNUIsaUJBQWlCLGFBQWE7QUFDOUI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixJQUFJO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QixrQkFBa0IsT0FBTztBQUN6QixrQkFBa0IsV0FBVztBQUM3QixrQkFBa0IseUJBQXlCO0FBQzNDLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxlQUFlLG1CQUFtQjtBQUNsQyxlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUseUJBQXlCO0FBQ3hDLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QixrQkFBa0IsS0FBSztBQUN2QixrQkFBa0IsZ0JBQWdCO0FBQ2xDLGtCQUFrQix5REFBeUQ7QUFDM0Usa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFlBQVksWUFBWTtBQUMxQyxrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsOEJBQThCO0FBQ2hELGtCQUFrQixZQUFZO0FBQzlCLGtCQUFrQixpQkFBaUI7QUFDbkMsa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBLGtCQUFrQixRQUFRO0FBQzFCOztBQUVBOztBQUVBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEMsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsS0FBSztBQUNwQixlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsTUFBTTs7O0FBR047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkhBQTZIOztBQUU3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsV0FBVztBQUMxQixlQUFlLE9BQU87QUFDdEIsZUFBZSx5QkFBeUI7QUFDeEMsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQyxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhOztBQUViLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQywrQkFBK0I7QUFDbEU7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakIsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFNBQVM7QUFDcEMsdUdBQXVHO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTs7O0FBRy9FO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEhBQThILEdBQUc7QUFDakk7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCLEVBQUU7QUFDL0IsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQyx5QkFBeUIseUJBQXlCLE9BQU87QUFDekQsYUFBYTtBQUNiLHlCQUF5QixHQUFHLE1BQU0sR0FBRztBQUNyQyx1QkFBdUI7QUFDdkIsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxhQUFhO0FBQzVCLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLFFBQVE7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQsYUFBYTtBQUNiLHFDQUFxQzs7QUFFckM7QUFDQSxrREFBa0Q7QUFDbEQsYUFBYTtBQUNiO0FBQ0E7OztBQUdBLGtDQUFrQyw0RUFBNEU7O0FBRTlHLHNEQUFzRDtBQUN0RCx1SkFBdUo7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0QsY0FBYzs7QUFFaEUsQ0FBQyxJIiwiZmlsZSI6ImNvZGUtb24tZGVtYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWNlZGM2MzRiMGZlZjc2YzU2NTgiLCJcblxuXG5pbXBvcnQgIGpzb25wYXRoICA9IHJlcXVpcmUoJy4vanNvbnBhdGgnKVxuXG5cbmludGVyZmFjZSBJSG9tZXIge1xuICAgIG5hbWUoKTogU3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBIb21lciBpbXBsZW1lbnRzIElIb21lciB7XG4gICAgbmFtZSgpe1xuXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgIGJvb2s6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwicmVmZXJlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IFwiTmlnZWwgUmVlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2F5aW5ncyBvZiB0aGUgQ2VudHVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDguOTVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiZmljdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBcIkV2ZWx5biBXYXVnaFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGpzb25wYXRoLkpTT05QYXRoKHtqc29uLCBwYXRoOiAnJC5zdG9yZS5ib29rWypdLmNhdGVnb3J5JywgcmVzdWx0VHlwZTogJ2FsbCd9KVxuICAgICAgICAvL2NvbnNvbGUubG9nKGAke3Jlc3VsdH1gKVxuICAgICAgICBsZXQgdGVzdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpIGFzIEFycmF5PGFueT5cbiAgICAgICAgdGVzdGUuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5wYXJlbnRbJ2NhdGVnb3J5J10gPSAyMFxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUucGF0aClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlLnBhcmVudCkpXG4gICAgICAgIH0pXG4gICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKSlcbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXN1bHQgKyBcIiB0ZXN0ZVwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICB9XG59XG5cbi8vY29uc29sZS5sb2cobmV3IEhvbWVyKCkubmFtZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93KCkge1xuICAgIGxldCBob21lciA9IG5ldyBIb21lcigpO1xuICAgIHJldHVybiBob21lci5uYW1lKCk7XG59XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IEhvbWVyKCk7XG5jb25zb2xlLmxvZyhpbnN0YW5jZS5uYW1lKCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAgICAgICAgICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuSlNPTlBhdGggPSB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgICAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgICAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgICAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgICAgICAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICAgICAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICAgICAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgICAgICAgICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICAgICAgICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgICAgICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICAgICAgICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgICAgICAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgICAgICAgICAgcmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgICAgICBpZiAoIW8pIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgICAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgICAgICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgICByZXR1cm4gYXJyMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gICAgICAgIHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdO1xuXG4gICAgICAgIGlmICghaXQpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICB2YXIgRiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgczogRixcbiAgICAgICAgICAgICAgICAgICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGY6IEZcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsXG4gICAgICAgICAgICBkaWRFcnIgPSBmYWxzZSxcbiAgICAgICAgICAgIGVycjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpdCA9IGl0LmNhbGwobyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xuICAgICAgICAgICAgICAgIG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBkaWRFcnIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVyciA9IGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZEVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge251bGx8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfFBsYWluT2JqZWN0fEdlbmVyaWNBcnJheX0gSlNPTk9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGFycmF5IGFuZCB0aGVuIHB1c2hlcyBpdGVtIGludG8gaXQuXG4gICAgICogQHBhcmFtIHtHZW5lcmljQXJyYXl9IGFyciBBcnJheSB0byBjb3B5IGFuZCBpbnRvIHdoaWNoIHRvIHB1c2hcbiAgICAgKiBAcGFyYW0ge2FueX0gaXRlbSBBcnJheSBpdGVtIHRvIGFkZCAodG8gZW5kKVxuICAgICAqIEByZXR1cm5zIHtHZW5lcmljQXJyYXl9IENvcHkgb2YgdGhlIG9yaWdpbmFsIGFycmF5XG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBwdXNoKGFyciwgaXRlbSkge1xuICAgICAgICBhcnIgPSBhcnIuc2xpY2UoKTtcbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvcGllcyBhcnJheSBhbmQgdGhlbiB1bnNoaWZ0cyBpdGVtIGludG8gaXQuXG4gICAgICogQHBhcmFtIHthbnl9IGl0ZW0gQXJyYXkgaXRlbSB0byBhZGQgKHRvIGJlZ2lubmluZylcbiAgICAgKiBAcGFyYW0ge0dlbmVyaWNBcnJheX0gYXJyIEFycmF5IHRvIGNvcHkgYW5kIGludG8gd2hpY2ggdG8gdW5zaGlmdFxuICAgICAqIEByZXR1cm5zIHtHZW5lcmljQXJyYXl9IENvcHkgb2YgdGhlIG9yaWdpbmFsIGFycmF5XG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIHVuc2hpZnQoaXRlbSwgYXJyKSB7XG4gICAgICAgIGFyciA9IGFyci5zbGljZSgpO1xuICAgICAgICBhcnIudW5zaGlmdChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2F1Z2h0IHdoZW4gSlNPTlBhdGggaXMgdXNlZCB3aXRob3V0IGBuZXdgIGJ1dCByZXRocm93biBpZiB3aXRoIGBuZXdgXG4gICAgICogQGV4dGVuZHMgRXJyb3JcbiAgICAgKi9cblxuXG4gICAgdmFyIE5ld0Vycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgICAgICAgX2luaGVyaXRzKE5ld0Vycm9yLCBfRXJyb3IpO1xuXG4gICAgICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTmV3RXJyb3IpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGV2YWx1YXRlZCBzY2FsYXIgdmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5ld0Vycm9yKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOZXdFcnJvcik7XG5cbiAgICAgICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ0pTT05QYXRoIHNob3VsZCBub3QgYmUgY2FsbGVkIHdpdGggXCJuZXdcIiAoaXQgcHJldmVudHMgcmV0dXJuICcgKyAnb2YgKHVud3JhcHBlZCkgc2NhbGFyIHZhbHVlcyknKTtcbiAgICAgICAgICAgIF90aGlzLmF2b2lkTmV3ID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5uYW1lID0gJ05ld0Vycm9yJztcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZXdFcnJvcjtcbiAgICB9KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtQbGFpbk9iamVjdH0gUmV0dXJuT2JqZWN0XG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGhcbiAgICAgKiBAcHJvcGVydHkge0pTT05PYmplY3R9IHZhbHVlXG4gICAgICogQHByb3BlcnR5IHtQbGFpbk9iamVjdHxHZW5lcmljQXJyYXl9IHBhcmVudFxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwYXJlbnRQcm9wZXJ0eVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQGNhbGxiYWNrIEpTT05QYXRoQ2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xQbGFpbk9iamVjdH0gcHJlZmVycmVkT3V0cHV0XG4gICAgICogQHBhcmFtIHtcInZhbHVlXCJ8XCJwcm9wZXJ0eVwifSB0eXBlXG4gICAgICogQHBhcmFtIHtSZXR1cm5PYmplY3R9IGZ1bGxSZXRPYmpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBjYWxsYmFjayBPdGhlclR5cGVDYWxsYmFja1xuICAgICAqIEBwYXJhbSB7SlNPTk9iamVjdH0gdmFsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge1BsYWluT2JqZWN0fEdlbmVyaWNBcnJheX0gcGFyZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudFByb3BOYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tIENhbiBtYWtlIG11bHRpbGluZSB0eXBlIGFmdGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9zeWF2b3Jza3kvY29tbWVudC1wYXJzZXIvaXNzdWVzLzEwOSAqL1xuXG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge1BsYWluT2JqZWN0fSBKU09OUGF0aE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0pTT059IGpzb25cbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xzdHJpbmdbXX0gcGF0aFxuICAgICAqIEBwcm9wZXJ0eSB7XCJ2YWx1ZVwifFwicGF0aFwifFwicG9pbnRlclwifFwicGFyZW50XCJ8XCJwYXJlbnRQcm9wZXJ0eVwifFwiYWxsXCJ9IFtyZXN1bHRUeXBlPVwidmFsdWVcIl1cbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtmbGF0dGVuPWZhbHNlXVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3dyYXA9dHJ1ZV1cbiAgICAgKiBAcHJvcGVydHkge1BsYWluT2JqZWN0fSBbc2FuZGJveD17fV1cbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtwcmV2ZW50RXZhbD1mYWxzZV1cbiAgICAgKiBAcHJvcGVydHkge1BsYWluT2JqZWN0fEdlbmVyaWNBcnJheXxudWxsfSBbcGFyZW50PW51bGxdXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW3BhcmVudFByb3BlcnR5PW51bGxdXG4gICAgICogQHByb3BlcnR5IHtKU09OUGF0aENhbGxiYWNrfSBbY2FsbGJhY2tdXG4gICAgICogQHByb3BlcnR5IHtPdGhlclR5cGVDYWxsYmFja30gW290aGVyVHlwZUNhbGxiYWNrXSBEZWZhdWx0cyB0b1xuICAgICAqICAgZnVuY3Rpb24gd2hpY2ggdGhyb3dzIG9uIGVuY291bnRlcmluZyBgQG90aGVyYFxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2F1dG9zdGFydD10cnVlXVxuICAgICAqL1xuXG4gICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuIC0tIENhbiBtYWtlIG11bHRpbGluZSB0eXBlIGFmdGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9zeWF2b3Jza3kvY29tbWVudC1wYXJzZXIvaXNzdWVzLzEwOSAqL1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8SlNPTlBhdGhPcHRpb25zfSBvcHRzIElmIGEgc3RyaW5nLCB3aWxsIGJlIHRyZWF0ZWQgYXMgYGV4cHJgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtleHByXSBKU09OIHBhdGggdG8gZXZhbHVhdGVcbiAgICAgKiBAcGFyYW0ge0pTT059IFtvYmpdIEpTT04gb2JqZWN0IHRvIGV2YWx1YXRlIGFnYWluc3RcbiAgICAgKiBAcGFyYW0ge0pTT05QYXRoQ2FsbGJhY2t9IFtjYWxsYmFja10gUGFzc2VkIDMgYXJndW1lbnRzOiAxKSBkZXNpcmVkIHBheWxvYWRcbiAgICAgKiAgICAgcGVyIGByZXN1bHRUeXBlYCwgMikgYFwidmFsdWVcInxcInByb3BlcnR5XCJgLCAzKSBGdWxsIHJldHVybmVkIG9iamVjdCB3aXRoXG4gICAgICogICAgIGFsbCBwYXlsb2Fkc1xuICAgICAqIEBwYXJhbSB7T3RoZXJUeXBlQ2FsbGJhY2t9IFtvdGhlclR5cGVDYWxsYmFja10gSWYgYEBvdGhlcigpYCBpcyBhdCB0aGUgZW5kXG4gICAgICogICBvZiBvbmUncyBxdWVyeSwgdGhpcyB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0sIGl0c1xuICAgICAqICAgcGF0aCwgaXRzIHBhcmVudCwgYW5kIGl0cyBwYXJlbnQncyBwcm9wZXJ0eSBuYW1lLCBhbmQgaXQgc2hvdWxkIHJldHVyblxuICAgICAqICAgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3VwcGxpZWQgdmFsdWUgYmVsb25ncyB0byB0aGUgXCJvdGhlclwiXG4gICAgICogICB0eXBlIG9yIG5vdCAob3IgaXQgbWF5IGhhbmRsZSB0cmFuc2Zvcm1hdGlvbnMgYW5kIHJldHVybiBgZmFsc2VgKS5cbiAgICAgKiBAcmV0dXJucyB7SlNPTlBhdGh9XG4gICAgICogQGNsYXNzXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIEpTT05QYXRoKG9wdHMsIGV4cHIsIG9iaiwgY2FsbGJhY2ssIG90aGVyVHlwZUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSlNPTlBhdGgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSlNPTlBhdGgob3B0cywgZXhwciwgb2JqLCBjYWxsYmFjaywgb3RoZXJUeXBlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghZS5hdm9pZE5ldykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3RoZXJUeXBlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGNhbGxiYWNrID0gb2JqO1xuICAgICAgICAgICAgb2JqID0gZXhwcjtcbiAgICAgICAgICAgIGV4cHIgPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0T2JqID0gb3B0cyAmJiBfdHlwZW9mKG9wdHMpID09PSAnb2JqZWN0JztcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIHRoaXMuanNvbiA9IG9wdHMuanNvbiB8fCBvYmo7XG4gICAgICAgIHRoaXMucGF0aCA9IG9wdHMucGF0aCB8fCBleHByO1xuICAgICAgICB0aGlzLnJlc3VsdFR5cGUgPSBvcHRzLnJlc3VsdFR5cGUgfHwgJ3ZhbHVlJztcbiAgICAgICAgdGhpcy5mbGF0dGVuID0gb3B0cy5mbGF0dGVuIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLndyYXAgPSBoYXNPd25Qcm9wLmNhbGwob3B0cywgJ3dyYXAnKSA/IG9wdHMud3JhcCA6IHRydWU7XG4gICAgICAgIHRoaXMuc2FuZGJveCA9IG9wdHMuc2FuZGJveCB8fCB7fTtcbiAgICAgICAgdGhpcy5wcmV2ZW50RXZhbCA9IG9wdHMucHJldmVudEV2YWwgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMucGFyZW50ID0gb3B0cy5wYXJlbnQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnRQcm9wZXJ0eSA9IG9wdHMucGFyZW50UHJvcGVydHkgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG9wdHMuY2FsbGJhY2sgfHwgY2FsbGJhY2sgfHwgbnVsbDtcblxuICAgICAgICB0aGlzLm90aGVyVHlwZUNhbGxiYWNrID0gb3B0cy5vdGhlclR5cGVDYWxsYmFjayB8fCBvdGhlclR5cGVDYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBzdXBwbHkgYW4gb3RoZXJUeXBlQ2FsbGJhY2sgY2FsbGJhY2sgb3B0aW9uICcgKyAnd2l0aCB0aGUgQG90aGVyKCkgb3BlcmF0b3IuJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdHMuYXV0b3N0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgcGF0aDogb3B0T2JqID8gb3B0cy5wYXRoIDogZXhwclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKCFvcHRPYmopIHtcbiAgICAgICAgICAgICAgICBhcmdzLmpzb24gPSBvYmo7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCdqc29uJyBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgYXJncy5qc29uID0gb3B0cy5qc29uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmV0ID0gdGhpcy5ldmFsdWF0ZShhcmdzKTtcblxuICAgICAgICAgICAgaWYgKCFyZXQgfHwgX3R5cGVvZihyZXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOZXdFcnJvcihyZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgfSAvLyBQVUJMSUMgTUVUSE9EU1xuXG5cbiAgICBKU09OUGF0aC5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoZXhwciwganNvbiwgY2FsbGJhY2ssIG90aGVyVHlwZUNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjdXJyUGFyZW50ID0gdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICBjdXJyUGFyZW50UHJvcGVydHkgPSB0aGlzLnBhcmVudFByb3BlcnR5O1xuICAgICAgICB2YXIgZmxhdHRlbiA9IHRoaXMuZmxhdHRlbixcbiAgICAgICAgICAgIHdyYXAgPSB0aGlzLndyYXA7XG4gICAgICAgIHRoaXMuY3VyclJlc3VsdFR5cGUgPSB0aGlzLnJlc3VsdFR5cGU7XG4gICAgICAgIHRoaXMuY3VyclByZXZlbnRFdmFsID0gdGhpcy5wcmV2ZW50RXZhbDtcbiAgICAgICAgdGhpcy5jdXJyU2FuZGJveCA9IHRoaXMuc2FuZGJveDtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB0aGlzLmNhbGxiYWNrO1xuICAgICAgICB0aGlzLmN1cnJPdGhlclR5cGVDYWxsYmFjayA9IG90aGVyVHlwZUNhbGxiYWNrIHx8IHRoaXMub3RoZXJUeXBlQ2FsbGJhY2s7XG4gICAgICAgIGpzb24gPSBqc29uIHx8IHRoaXMuanNvbjtcbiAgICAgICAgZXhwciA9IGV4cHIgfHwgdGhpcy5wYXRoO1xuXG4gICAgICAgIGlmIChleHByICYmIF90eXBlb2YoZXhwcikgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGV4cHIpKSB7XG4gICAgICAgICAgICBpZiAoIWV4cHIucGF0aCAmJiBleHByLnBhdGggIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3Qgc3VwcGx5IGEgXCJwYXRoXCIgcHJvcGVydHkgd2hlbiBwcm92aWRpbmcgYW4gb2JqZWN0ICcgKyAnYXJndW1lbnQgdG8gSlNPTlBhdGguZXZhbHVhdGUoKS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ2pzb24nKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHN1cHBseSBhIFwianNvblwiIHByb3BlcnR5IHdoZW4gcHJvdmlkaW5nIGFuIG9iamVjdCAnICsgJ2FyZ3VtZW50IHRvIEpTT05QYXRoLmV2YWx1YXRlKCkuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfZXhwciA9IGV4cHI7XG4gICAgICAgICAgICBqc29uID0gX2V4cHIuanNvbjtcbiAgICAgICAgICAgIGZsYXR0ZW4gPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ2ZsYXR0ZW4nKSA/IGV4cHIuZmxhdHRlbiA6IGZsYXR0ZW47XG4gICAgICAgICAgICB0aGlzLmN1cnJSZXN1bHRUeXBlID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdyZXN1bHRUeXBlJykgPyBleHByLnJlc3VsdFR5cGUgOiB0aGlzLmN1cnJSZXN1bHRUeXBlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2FuZGJveCA9IGhhc093blByb3AuY2FsbChleHByLCAnc2FuZGJveCcpID8gZXhwci5zYW5kYm94IDogdGhpcy5jdXJyU2FuZGJveDtcbiAgICAgICAgICAgIHdyYXAgPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ3dyYXAnKSA/IGV4cHIud3JhcCA6IHdyYXA7XG4gICAgICAgICAgICB0aGlzLmN1cnJQcmV2ZW50RXZhbCA9IGhhc093blByb3AuY2FsbChleHByLCAncHJldmVudEV2YWwnKSA/IGV4cHIucHJldmVudEV2YWwgOiB0aGlzLmN1cnJQcmV2ZW50RXZhbDtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdjYWxsYmFjaycpID8gZXhwci5jYWxsYmFjayA6IGNhbGxiYWNrO1xuICAgICAgICAgICAgdGhpcy5jdXJyT3RoZXJUeXBlQ2FsbGJhY2sgPSBoYXNPd25Qcm9wLmNhbGwoZXhwciwgJ290aGVyVHlwZUNhbGxiYWNrJykgPyBleHByLm90aGVyVHlwZUNhbGxiYWNrIDogdGhpcy5jdXJyT3RoZXJUeXBlQ2FsbGJhY2s7XG4gICAgICAgICAgICBjdXJyUGFyZW50ID0gaGFzT3duUHJvcC5jYWxsKGV4cHIsICdwYXJlbnQnKSA/IGV4cHIucGFyZW50IDogY3VyclBhcmVudDtcbiAgICAgICAgICAgIGN1cnJQYXJlbnRQcm9wZXJ0eSA9IGhhc093blByb3AuY2FsbChleHByLCAncGFyZW50UHJvcGVydHknKSA/IGV4cHIucGFyZW50UHJvcGVydHkgOiBjdXJyUGFyZW50UHJvcGVydHk7XG4gICAgICAgICAgICBleHByID0gZXhwci5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyclBhcmVudCA9IGN1cnJQYXJlbnQgfHwgbnVsbDtcbiAgICAgICAgY3VyclBhcmVudFByb3BlcnR5ID0gY3VyclBhcmVudFByb3BlcnR5IHx8IG51bGw7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXhwcikpIHtcbiAgICAgICAgICAgIGV4cHIgPSBKU09OUGF0aC50b1BhdGhTdHJpbmcoZXhwcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWV4cHIgJiYgZXhwciAhPT0gJycgfHwgIWpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwckxpc3QgPSBKU09OUGF0aC50b1BhdGhBcnJheShleHByKTtcblxuICAgICAgICBpZiAoZXhwckxpc3RbMF0gPT09ICckJyAmJiBleHByTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBleHByTGlzdC5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGFzUGFyZW50U2VsZWN0b3IgPSBudWxsO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl90cmFjZShleHByTGlzdCwganNvbiwgWyckJ10sIGN1cnJQYXJlbnQsIGN1cnJQYXJlbnRQcm9wZXJ0eSwgY2FsbGJhY2spLmZpbHRlcihmdW5jdGlvbiAoZWEpIHtcbiAgICAgICAgICAgIHJldHVybiBlYSAmJiAhZWEuaXNQYXJlbnRTZWxlY3RvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCA/IFtdIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF3cmFwICYmIHJlc3VsdC5sZW5ndGggPT09IDEgJiYgIXJlc3VsdFswXS5oYXNBcnJFeHByKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UHJlZmVycmVkT3V0cHV0KHJlc3VsdFswXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LnJlZHVjZShmdW5jdGlvbiAocnNsdCwgZWEpIHtcbiAgICAgICAgICAgIHZhciB2YWxPclBhdGggPSBfdGhpczIuX2dldFByZWZlcnJlZE91dHB1dChlYSk7XG5cbiAgICAgICAgICAgIGlmIChmbGF0dGVuICYmIEFycmF5LmlzQXJyYXkodmFsT3JQYXRoKSkge1xuICAgICAgICAgICAgICAgIHJzbHQgPSByc2x0LmNvbmNhdCh2YWxPclBhdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByc2x0LnB1c2godmFsT3JQYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJzbHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9OyAvLyBQUklWQVRFIE1FVEhPRFNcblxuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9nZXRQcmVmZXJyZWRPdXRwdXQgPSBmdW5jdGlvbiAoZWEpIHtcbiAgICAgICAgdmFyIHJlc3VsdFR5cGUgPSB0aGlzLmN1cnJSZXN1bHRUeXBlO1xuXG4gICAgICAgIHN3aXRjaCAocmVzdWx0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IEFycmF5LmlzQXJyYXkoZWEucGF0aCkgPyBlYS5wYXRoIDogSlNPTlBhdGgudG9QYXRoQXJyYXkoZWEucGF0aCk7XG4gICAgICAgICAgICAgICAgZWEucG9pbnRlciA9IEpTT05QYXRoLnRvUG9pbnRlcihwYXRoKTtcbiAgICAgICAgICAgICAgICBlYS5wYXRoID0gdHlwZW9mIGVhLnBhdGggPT09ICdzdHJpbmcnID8gZWEucGF0aCA6IEpTT05QYXRoLnRvUGF0aFN0cmluZyhlYS5wYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgIGNhc2UgJ3BhcmVudCc6XG4gICAgICAgICAgICBjYXNlICdwYXJlbnRQcm9wZXJ0eSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVhW3Jlc3VsdFR5cGVdO1xuXG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTlBhdGgudG9QYXRoU3RyaW5nKGVhW3Jlc3VsdFR5cGVdKTtcblxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT05QYXRoLnRvUG9pbnRlcihlYS5wYXRoKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIHJlc3VsdCB0eXBlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9oYW5kbGVDYWxsYmFjayA9IGZ1bmN0aW9uIChmdWxsUmV0T2JqLCBjYWxsYmFjaywgdHlwZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcmVmZXJyZWRPdXRwdXQgPSB0aGlzLl9nZXRQcmVmZXJyZWRPdXRwdXQoZnVsbFJldE9iaik7XG5cbiAgICAgICAgICAgIGZ1bGxSZXRPYmoucGF0aCA9IHR5cGVvZiBmdWxsUmV0T2JqLnBhdGggPT09ICdzdHJpbmcnID8gZnVsbFJldE9iai5wYXRoIDogSlNPTlBhdGgudG9QYXRoU3RyaW5nKGZ1bGxSZXRPYmoucGF0aCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL2NhbGxiYWNrLXJldHVyblxuXG4gICAgICAgICAgICBjYWxsYmFjayhwcmVmZXJyZWRPdXRwdXQsIHR5cGUsIGZ1bGxSZXRPYmopO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHByXG4gICAgICogQHBhcmFtIHtKU09OT2JqZWN0fSB2YWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7UGxhaW5PYmplY3R8R2VuZXJpY0FycmF5fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50UHJvcE5hbWVcbiAgICAgKiBAcGFyYW0ge0pTT05QYXRoQ2FsbGJhY2t9IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtib29sZWFufSBoYXNBcnJFeHByXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXRlcmFsUHJpb3JpdHlcbiAgICAgKiBAcmV0dXJucyB7UmV0dXJuT2JqZWN0fFJldHVybk9iamVjdFtdfVxuICAgICAqL1xuXG5cbiAgICBKU09OUGF0aC5wcm90b3R5cGUuX3RyYWNlID0gZnVuY3Rpb24gKGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGhhc0FyckV4cHIsIGxpdGVyYWxQcmlvcml0eSkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAvLyBObyBleHByIHRvIGZvbGxvdz8gcmV0dXJuIHBhdGggYW5kIHZhbHVlIGFzIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gIHRoaXMgdHJhY2UgYnJhbmNoXG4gICAgICAgIHZhciByZXRPYmo7XG5cbiAgICAgICAgaWYgKCFleHByLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0T2JqID0ge1xuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICBwYXJlbnRQcm9wZXJ0eTogcGFyZW50UHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgaGFzQXJyRXhwcjogaGFzQXJyRXhwclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2FsbGJhY2socmV0T2JqLCBjYWxsYmFjaywgJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXRPYmo7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9jID0gZXhwclswXSxcbiAgICAgICAgICAgIHggPSBleHByLnNsaWNlKDEpOyAvLyBXZSBuZWVkIHRvIGdhdGhlciB0aGUgcmV0dXJuIHZhbHVlIG9mIHJlY3Vyc2l2ZSB0cmFjZSBjYWxscyBpbiBvcmRlciB0b1xuICAgICAgICAvLyBkbyB0aGUgcGFyZW50IHNlbCBjb21wdXRhdGlvbi5cblxuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1JldHVybk9iamVjdHxSZXR1cm5PYmplY3RbXX0gZWxlbXNcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFJldChlbGVtcykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyB3YXMgY2F1c2luZyBleGNlc3NpdmUgc3RhY2sgc2l6ZSBpbiBOb2RlICh3aXRoIG9yXG4gICAgICAgICAgICAgICAgLy8gIHdpdGhvdXQgQmFiZWwpIGFnYWluc3Qgb3VyIHBlcmZvcm1hbmNlIHRlc3Q6XG4gICAgICAgICAgICAgICAgLy8gIGByZXQucHVzaCguLi5lbGVtcyk7YFxuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2godCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGVsZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodHlwZW9mIGxvYyAhPT0gJ3N0cmluZycgfHwgbGl0ZXJhbFByaW9yaXR5KSAmJiB2YWwgJiYgaGFzT3duUHJvcC5jYWxsKHZhbCwgbG9jKSkge1xuICAgICAgICAgICAgLy8gc2ltcGxlIGNhc2UtLWRpcmVjdGx5IGZvbGxvdyBwcm9wZXJ0eVxuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHgsIHZhbFtsb2NdLCBwdXNoKHBhdGgsIGxvYyksIHZhbCwgbG9jLCBjYWxsYmFjaywgaGFzQXJyRXhwcikpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItc3dpdGNoIC0tIFBhcnQgb2YgbGFyZ2VyIGBpZmBcbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICcqJykge1xuICAgICAgICAgICAgLy8gYWxsIGNoaWxkIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHRoaXMuX3dhbGsobG9jLCB4LCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBmdW5jdGlvbiAobSwgbCwgX3gsIHYsIHAsIHBhciwgcHIsIGNiKSB7XG4gICAgICAgICAgICAgICAgYWRkUmV0KF90aGlzMy5fdHJhY2UodW5zaGlmdChtLCBfeCksIHYsIHAsIHBhciwgcHIsIGNiLCB0cnVlLCB0cnVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICcuLicpIHtcbiAgICAgICAgICAgIC8vIGFsbCBkZXNjZW5kZW50IHBhcmVudCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBDaGVjayByZW1haW5pbmcgZXhwcmVzc2lvbiB3aXRoIHZhbCdzIGltbWVkaWF0ZSBjaGlsZHJlblxuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHgsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGhhc0FyckV4cHIpKTtcblxuICAgICAgICAgICAgdGhpcy5fd2Fsayhsb2MsIHgsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGZ1bmN0aW9uIChtLCBsLCBfeCwgdiwgcCwgcGFyLCBwciwgY2IpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBqb2luIG0gYW5kIHggaGVyZSBiZWNhdXNlIHdlIG9ubHkgd2FudCBwYXJlbnRzLFxuICAgICAgICAgICAgICAgIC8vICAgbm90IHNjYWxhciB2YWx1ZXNcbiAgICAgICAgICAgICAgICBpZiAoX3R5cGVvZih2W21dKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCBnb2luZyB3aXRoIHJlY3Vyc2l2ZSBkZXNjZW50IG9uIHZhbCdzXG4gICAgICAgICAgICAgICAgICAgIC8vICAgb2JqZWN0IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIGFkZFJldChfdGhpczMuX3RyYWNlKHVuc2hpZnQobCwgX3gpLCB2W21dLCBwdXNoKHAsIG0pLCB2LCBtLCBjYiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAvLyBUaGUgcGFyZW50IHNlbCBjb21wdXRhdGlvbiBpcyBoYW5kbGVkIGluIHRoZSBmcmFtZSBhYm92ZSB1c2luZyB0aGVcbiAgICAgICAgICAgIC8vIGFuY2VzdG9yIG9iamVjdCBvZiB2YWxcblxuICAgICAgICB9IGVsc2UgaWYgKGxvYyA9PT0gJ14nKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBhIGZpbmFsIGVuZHBvaW50LCBzbyB3ZSBkbyBub3QgaW52b2tlIHRoZSBjYWxsYmFjayBoZXJlXG4gICAgICAgICAgICB0aGlzLl9oYXNQYXJlbnRTZWxlY3RvciA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGguc2xpY2UoMCwgLTEpLFxuICAgICAgICAgICAgICAgIGV4cHI6IHgsXG4gICAgICAgICAgICAgICAgaXNQYXJlbnRTZWxlY3RvcjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MgPT09ICd+Jykge1xuICAgICAgICAgICAgLy8gcHJvcGVydHkgbmFtZVxuICAgICAgICAgICAgcmV0T2JqID0ge1xuICAgICAgICAgICAgICAgIHBhdGg6IHB1c2gocGF0aCwgbG9jKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFyZW50UHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgcGFyZW50UHJvcGVydHk6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNhbGxiYWNrKHJldE9iaiwgY2FsbGJhY2ssICdwcm9wZXJ0eScpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0T2JqO1xuICAgICAgICB9IGVsc2UgaWYgKGxvYyA9PT0gJyQnKSB7XG4gICAgICAgICAgICAvLyByb290IG9ubHlcbiAgICAgICAgICAgIGFkZFJldCh0aGlzLl90cmFjZSh4LCB2YWwsIHBhdGgsIG51bGwsIG51bGwsIGNhbGxiYWNrLCBoYXNBcnJFeHByKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoL14oXFx4MkQ/WzAtOV0qKTooXFx4MkQ/WzAtOV0qKTo/KFswLTldKikkLy50ZXN0KGxvYykpIHtcbiAgICAgICAgICAgIC8vIFtzdGFydDplbmQ6c3RlcF0gIFB5dGhvbiBzbGljZSBzeW50YXhcbiAgICAgICAgICAgIGFkZFJldCh0aGlzLl9zbGljZShsb2MsIHgsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2spKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2MuaW5kZXhPZignPygnKSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gWz8oZXhwcildIChmaWx0ZXJpbmcpXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyUHJldmVudEV2YWwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2YWwgWz8oZXhwcildIHByZXZlbnRlZCBpbiBKU09OUGF0aCBleHByZXNzaW9uLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl93YWxrKGxvYywgeCwgdmFsLCBwYXRoLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lLCBjYWxsYmFjaywgZnVuY3Rpb24gKG0sIGwsIF94LCB2LCBwLCBwYXIsIHByLCBjYikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczMuX2V2YWwobC5yZXBsYWNlKC9eXFw/XFwoKCg/OltcXDAtXFx0XFx4MEJcXGZcXHgwRS1cXHUyMDI3XFx1MjAyQS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSo/KVxcKSQvLCAnJDEnKSwgdlttXSwgbSwgcCwgcGFyLCBwcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkUmV0KF90aGlzMy5fdHJhY2UodW5zaGlmdChtLCBfeCksIHYsIHAsIHBhciwgcHIsIGNiLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jWzBdID09PSAnKCcpIHtcbiAgICAgICAgICAgIC8vIFsoZXhwcildIChkeW5hbWljIHByb3BlcnR5L2luZGV4KVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyclByZXZlbnRFdmFsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmFsIFsoZXhwcildIHByZXZlbnRlZCBpbiBKU09OUGF0aCBleHByZXNzaW9uLicpO1xuICAgICAgICAgICAgfSAvLyBBcyB0aGlzIHdpbGwgcmVzb2x2ZSB0byBhIHByb3BlcnR5IG5hbWUgKGJ1dCB3ZSBkb24ndCBrbm93IGl0XG4gICAgICAgICAgICAvLyAgeWV0KSwgcHJvcGVydHkgYW5kIHBhcmVudCBpbmZvcm1hdGlvbiBpcyByZWxhdGl2ZSB0byB0aGVcbiAgICAgICAgICAgIC8vICBwYXJlbnQgb2YgdGhlIHByb3BlcnR5IHRvIHdoaWNoIHRoaXMgZXhwcmVzc2lvbiB3aWxsIHJlc29sdmVcblxuXG4gICAgICAgICAgICBhZGRSZXQodGhpcy5fdHJhY2UodW5zaGlmdCh0aGlzLl9ldmFsKGxvYywgdmFsLCBwYXRoW3BhdGgubGVuZ3RoIC0gMV0sIHBhdGguc2xpY2UoMCwgLTEpLCBwYXJlbnQsIHBhcmVudFByb3BOYW1lKSwgeCksIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGhhc0FyckV4cHIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2NbMF0gPT09ICdAJykge1xuICAgICAgICAgICAgLy8gdmFsdWUgdHlwZTogQGJvb2xlYW4oKSwgZXRjLlxuICAgICAgICAgICAgdmFyIGFkZFR5cGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSBsb2Muc2xpY2UoMSwgLTIpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsIHx8ICFbJ29iamVjdCcsICdmdW5jdGlvbiddLmluY2x1ZGVzKF90eXBlb2YodmFsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdHlwZW9mKHZhbCkgPT09IHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHZhbCkgJiYgISh2YWwgJSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ25vbkZpbml0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzRmluaXRlKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgX3R5cGVvZih2YWwpID09PSB2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdvdGhlcic6XG4gICAgICAgICAgICAgICAgICAgIGFkZFR5cGUgPSB0aGlzLmN1cnJPdGhlclR5cGVDYWxsYmFjayh2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ251bGwnOlxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLyogYzggaWdub3JlIG5leHQgMiAqL1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biB2YWx1ZSB0eXBlICcgKyB2YWx1ZVR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWRkVHlwZSkge1xuICAgICAgICAgICAgICAgIHJldE9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFByb3BlcnR5OiBwYXJlbnRQcm9wTmFtZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDYWxsYmFjayhyZXRPYmosIGNhbGxiYWNrLCAndmFsdWUnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRPYmo7XG4gICAgICAgICAgICB9IC8vIGAtZXNjYXBlZCBwcm9wZXJ0eVxuXG4gICAgICAgIH0gZWxzZSBpZiAobG9jWzBdID09PSAnYCcgJiYgdmFsICYmIGhhc093blByb3AuY2FsbCh2YWwsIGxvYy5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHZhciBsb2NQcm9wID0gbG9jLnNsaWNlKDEpO1xuICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHgsIHZhbFtsb2NQcm9wXSwgcHVzaChwYXRoLCBsb2NQcm9wKSwgdmFsLCBsb2NQcm9wLCBjYWxsYmFjaywgaGFzQXJyRXhwciwgdHJ1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGxvYy5pbmNsdWRlcygnLCcpKSB7XG4gICAgICAgICAgICAvLyBbbmFtZTEsbmFtZTIsLi4uXVxuICAgICAgICAgICAgdmFyIHBhcnRzID0gbG9jLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihwYXJ0cyksXG4gICAgICAgICAgICAgICAgX3N0ZXA7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUmV0KHRoaXMuX3RyYWNlKHVuc2hpZnQocGFydCwgeCksIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIHRydWUpKTtcbiAgICAgICAgICAgICAgICB9IC8vIHNpbXBsZSBjYXNlLS1kaXJlY3RseSBmb2xsb3cgcHJvcGVydHlcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghbGl0ZXJhbFByaW9yaXR5ICYmIHZhbCAmJiBoYXNPd25Qcm9wLmNhbGwodmFsLCBsb2MpKSB7XG4gICAgICAgICAgICBhZGRSZXQodGhpcy5fdHJhY2UoeCwgdmFsW2xvY10sIHB1c2gocGF0aCwgbG9jKSwgdmFsLCBsb2MsIGNhbGxiYWNrLCBoYXNBcnJFeHByLCB0cnVlKSk7XG4gICAgICAgIH0gLy8gV2UgY2hlY2sgdGhlIHJlc3VsdGluZyB2YWx1ZXMgZm9yIHBhcmVudCBzZWxlY3Rpb25zLiBGb3IgcGFyZW50XG4gICAgICAgIC8vIHNlbGVjdGlvbnMgd2UgZGlzY2FyZCB0aGUgdmFsdWUgb2JqZWN0IGFuZCBjb250aW51ZSB0aGUgdHJhY2Ugd2l0aCB0aGVcbiAgICAgICAgLy8gY3VycmVudCB2YWwgb2JqZWN0XG5cblxuICAgICAgICBpZiAodGhpcy5faGFzUGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgcmV0Lmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHQgPSByZXRbdF07XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0dCAmJiByZXR0LmlzUGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX3RyYWNlKHJldHQuZXhwciwgdmFsLCByZXR0LnBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrLCBoYXNBcnJFeHByKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0bXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbdF0gPSB0bXBbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGwgPSB0bXAubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0dCA9IDE7IHR0IDwgdGw7IHR0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnNwbGljZSh0LCAwLCB0bXBbdHRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFt0XSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIEpTT05QYXRoLnByb3RvdHlwZS5fd2FsayA9IGZ1bmN0aW9uIChsb2MsIGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIGYpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgdmFyIG4gPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGYoaSwgbG9jLCBleHByLCB2YWwsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWwgJiYgX3R5cGVvZih2YWwpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsKS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgZihtLCBsb2MsIGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9zbGljZSA9IGZ1bmN0aW9uIChsb2MsIGV4cHIsIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aCxcbiAgICAgICAgICAgIHBhcnRzID0gbG9jLnNwbGl0KCc6JyksXG4gICAgICAgICAgICBzdGVwID0gcGFydHNbMl0gJiYgTnVtYmVyLnBhcnNlSW50KHBhcnRzWzJdKSB8fCAxO1xuICAgICAgICB2YXIgc3RhcnQgPSBwYXJ0c1swXSAmJiBOdW1iZXIucGFyc2VJbnQocGFydHNbMF0pIHx8IDAsXG4gICAgICAgICAgICBlbmQgPSBwYXJ0c1sxXSAmJiBOdW1iZXIucGFyc2VJbnQocGFydHNbMV0pIHx8IGxlbjtcbiAgICAgICAgc3RhcnQgPSBzdGFydCA8IDAgPyBNYXRoLm1heCgwLCBzdGFydCArIGxlbikgOiBNYXRoLm1pbihsZW4sIHN0YXJ0KTtcbiAgICAgICAgZW5kID0gZW5kIDwgMCA/IE1hdGgubWF4KDAsIGVuZCArIGxlbikgOiBNYXRoLm1pbihsZW4sIGVuZCk7XG4gICAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX3RyYWNlKHVuc2hpZnQoaSwgZXhwciksIHZhbCwgcGF0aCwgcGFyZW50LCBwYXJlbnRQcm9wTmFtZSwgY2FsbGJhY2ssIHRydWUpOyAvLyBTaG91bGQgb25seSBiZSBwb3NzaWJsZSB0byBiZSBhbiBhcnJheSBoZXJlIHNpbmNlIGZpcnN0IHBhcnQgb2ZcbiAgICAgICAgICAgIC8vICAgYGB1bnNoaWZ0KGksIGV4cHIpYCBwYXNzZWQgaW4gYWJvdmUgd291bGQgbm90IGJlIGVtcHR5LCBub3IgYH5gLFxuICAgICAgICAgICAgLy8gICAgIG5vciBiZWdpbiB3aXRoIGBAYCAoYXMgY291bGQgcmV0dXJuIG9iamVjdHMpXG4gICAgICAgICAgICAvLyBUaGlzIHdhcyBjYXVzaW5nIGV4Y2Vzc2l2ZSBzdGFjayBzaXplIGluIE5vZGUgKHdpdGggb3JcbiAgICAgICAgICAgIC8vICB3aXRob3V0IEJhYmVsKSBhZ2FpbnN0IG91ciBwZXJmb3JtYW5jZSB0ZXN0OiBgcmV0LnB1c2goLi4udG1wKTtgXG5cblxuICAgICAgICAgICAgdG1wLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgSlNPTlBhdGgucHJvdG90eXBlLl9ldmFsID0gZnVuY3Rpb24gKGNvZGUsIF92LCBfdm5hbWUsIHBhdGgsIHBhcmVudCwgcGFyZW50UHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKGNvZGUuaW5jbHVkZXMoJ0BwYXJlbnRQcm9wZXJ0eScpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3BhcmVudFByb3BlcnR5ID0gcGFyZW50UHJvcE5hbWU7XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9AcGFyZW50UHJvcGVydHkvZywgJ18kX3BhcmVudFByb3BlcnR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZS5pbmNsdWRlcygnQHBhcmVudCcpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL0BwYXJlbnQvZywgJ18kX3BhcmVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUuaW5jbHVkZXMoJ0Bwcm9wZXJ0eScpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3Byb3BlcnR5ID0gX3ZuYW1lO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvQHByb3BlcnR5L2csICdfJF9wcm9wZXJ0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUuaW5jbHVkZXMoJ0BwYXRoJykpIHtcbiAgICAgICAgICAgIHRoaXMuY3VyclNhbmRib3guXyRfcGF0aCA9IEpTT05QYXRoLnRvUGF0aFN0cmluZyhwYXRoLmNvbmNhdChbX3ZuYW1lXSkpO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvQHBhdGgvZywgJ18kX3BhdGgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlLmluY2x1ZGVzKCdAcm9vdCcpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3Jvb3QgPSB0aGlzLmpzb247XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9Acm9vdC9nLCAnXyRfcm9vdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC9AKFtcXHQtXFxyIFxcKVxcLlxcW1xceEEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1RkVGRl0pLy50ZXN0KGNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJTYW5kYm94Ll8kX3YgPSBfdjtcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL0AoW1xcdC1cXHIgXFwpXFwuXFxbXFx4QTBcXHUxNjgwXFx1MjAwMC1cXHUyMDBBXFx1MjAyOFxcdTIwMjlcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHVGRUZGXSkvZywgJ18kX3YkMScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZtLnJ1bkluTmV3Q29udGV4dChjb2RlLCB0aGlzLmN1cnJTYW5kYm94KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdqc29uUGF0aDogJyArIGUubWVzc2FnZSArICc6ICcgKyBjb2RlKTtcbiAgICAgICAgfVxuICAgIH07IC8vIFBVQkxJQyBDTEFTUyBQUk9QRVJUSUVTIEFORCBNRVRIT0RTXG4gICAgLy8gQ291bGQgc3RvcmUgdGhlIGNhY2hlIG9iamVjdCBpdHNlbGZcblxuXG4gICAgSlNPTlBhdGguY2FjaGUgPSB7fTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQXJyIEFycmF5IHRvIGNvbnZlcnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCBzdHJpbmdcbiAgICAgKi9cblxuICAgIEpTT05QYXRoLnRvUGF0aFN0cmluZyA9IGZ1bmN0aW9uIChwYXRoQXJyKSB7XG4gICAgICAgIHZhciB4ID0gcGF0aEFycixcbiAgICAgICAgICAgIG4gPSB4Lmxlbmd0aDtcbiAgICAgICAgdmFyIHAgPSAnJCc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghL14ofnxcXF58QCg/OltcXDAtXFx0XFx4MEJcXGZcXHgwRS1cXHUyMDI3XFx1MjAyQS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSo/XFwoXFwpKSQvLnRlc3QoeFtpXSkpIHtcbiAgICAgICAgICAgICAgICBwICs9IC9eW1xcKjAtOV0rJC8udGVzdCh4W2ldKSA/ICdbJyArIHhbaV0gKyAnXScgOiBcIlsnXCIgKyB4W2ldICsgXCInXVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9pbnRlciBKU09OIFBhdGhcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBKU09OIFBvaW50ZXJcbiAgICAgKi9cblxuXG4gICAgSlNPTlBhdGgudG9Qb2ludGVyID0gZnVuY3Rpb24gKHBvaW50ZXIpIHtcbiAgICAgICAgdmFyIHggPSBwb2ludGVyLFxuICAgICAgICAgICAgbiA9IHgubGVuZ3RoO1xuICAgICAgICB2YXIgcCA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIS9eKH58XFxefEAoPzpbXFwwLVxcdFxceDBCXFxmXFx4MEUtXFx1MjAyN1xcdTIwMkEtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkqP1xcKFxcKSkkLy50ZXN0KHhbaV0pKSB7XG4gICAgICAgICAgICAgICAgcCArPSAnLycgKyB4W2ldLnRvU3RyaW5nKCkucmVwbGFjZSgvfi9nLCAnfjAnKS5yZXBsYWNlKC9cXC8vZywgJ34xJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHByIEV4cHJlc3Npb24gdG8gY29udmVydFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cblxuXG4gICAgSlNPTlBhdGgudG9QYXRoQXJyYXkgPSBmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICB2YXIgY2FjaGUgPSBKU09OUGF0aC5jYWNoZTtcblxuICAgICAgICBpZiAoY2FjaGVbZXhwcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtleHByXS5jb25jYXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJ4ID0gW107XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gZXhwciAvLyBQcm9wZXJ0aWVzXG4gICAgICAgICAgICAucmVwbGFjZSgvQCg/Om51bGx8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfGludGVnZXJ8dW5kZWZpbmVkfG5vbkZpbml0ZXxzY2FsYXJ8YXJyYXl8b2JqZWN0fGZ1bmN0aW9ufG90aGVyKVxcKFxcKS9nLCAnOyQmOycpIC8vIFBhcmVudGhldGljYWwgZXZhbHVhdGlvbnMgKGZpbHRlcmluZyBhbmQgb3RoZXJ3aXNlKSwgZGlyZWN0bHlcbiAgICAgICAgICAgIC8vICAgd2l0aGluIGJyYWNrZXRzIG9yIHNpbmdsZSBxdW90ZXNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bJ1xcW10oXFw/P1xcKCg/OltcXDAtXFx0XFx4MEJcXGZcXHgwRS1cXHUyMDI3XFx1MjAyQS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSo/XFwpKVsnXFxdXS9nLCBmdW5jdGlvbiAoJDAsICQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdbIycgKyAoc3VieC5wdXNoKCQxKSAtIDEpICsgJ10nO1xuICAgICAgICAgICAgfSkgLy8gRXNjYXBlIHBlcmlvZHMgYW5kIHRpbGRlcyB3aXRoaW4gcHJvcGVydGllc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW1tcIiddKCg/Oig/IVsnXFxdXSlbXFxzXFxTXSkqKVtcIiddXFxdL2csIGZ1bmN0aW9uICgkMCwgcHJvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlsnXCIgKyBwcm9wLnJlcGxhY2UoL1xcLi9nLCAnJUAlJykucmVwbGFjZSgvfi9nLCAnJSVAQCUlJykgKyBcIiddXCI7XG4gICAgICAgICAgICB9KSAvLyBQcm9wZXJ0aWVzIG9wZXJhdG9yXG4gICAgICAgICAgICAucmVwbGFjZSgvfi9nLCAnO347JykgLy8gU3BsaXQgYnkgcHJvcGVydHkgYm91bmRhcmllc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1tcIiddP1xcLltcIiddPyg/ISg/Oig/IVxcWylbXFxzXFxTXSkqXFxdKXxcXFtbXCInXT8vZywgJzsnKSAvLyBSZWluc2VydCBwZXJpb2RzIHdpdGhpbiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAucmVwbGFjZSgvJUAlL2csICcuJykgLy8gUmVpbnNlcnQgdGlsZGVzIHdpdGhpbiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAucmVwbGFjZSgvJSVAQCUlL2csICd+JykgLy8gUGFyZW50XG4gICAgICAgICAgICAucmVwbGFjZSgvKD86Oyk/KFxcXispKD86Oyk/L2csIGZ1bmN0aW9uICgkMCwgdXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc7JyArIHVwcy5zcGxpdCgnJykuam9pbignOycpICsgJzsnO1xuICAgICAgICAgICAgfSkgLy8gRGVzY2VuZGVudHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC87Ozt8OzsvZywgJzsuLjsnKSAvLyBSZW1vdmUgdHJhaWxpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC87JHwnP1xcXXwnJC9nLCAnJyk7XG4gICAgICAgIHZhciBleHByTGlzdCA9IG5vcm1hbGl6ZWQuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gZXhwLm1hdGNoKC8jKFswLTldKykvKTtcbiAgICAgICAgICAgIHJldHVybiAhbWF0Y2ggfHwgIW1hdGNoWzFdID8gZXhwIDogc3VieFttYXRjaFsxXV07XG4gICAgICAgIH0pO1xuICAgICAgICBjYWNoZVtleHByXSA9IGV4cHJMaXN0O1xuICAgICAgICByZXR1cm4gY2FjaGVbZXhwcl0uY29uY2F0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBjYWxsYmFjayBDb25kaXRpb25DYWxsYmFja1xuICAgICAqIEBwYXJhbSB7YW55fSBpdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDb3B5IGl0ZW1zIG91dCBvZiBvbmUgYXJyYXkgaW50byBhbm90aGVyLlxuICAgICAqIEBwYXJhbSB7R2VuZXJpY0FycmF5fSBzb3VyY2UgQXJyYXkgd2l0aCBpdGVtcyB0byBjb3B5XG4gICAgICogQHBhcmFtIHtHZW5lcmljQXJyYXl9IHRhcmdldCBBcnJheSB0byB3aGljaCB0byBjb3B5XG4gICAgICogQHBhcmFtIHtDb25kaXRpb25DYWxsYmFja30gY29uZGl0aW9uQ2IgQ2FsbGJhY2sgcGFzc2VkIHRoZSBjdXJyZW50IGl0ZW07XG4gICAgICogICAgIHdpbGwgbW92ZSBpdGVtIGlmIGV2YWx1YXRlcyB0byBgdHJ1ZWBcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cblxuICAgIHZhciBtb3ZlVG9Bbm90aGVyQXJyYXkgPSBmdW5jdGlvbiBtb3ZlVG9Bbm90aGVyQXJyYXkoc291cmNlLCB0YXJnZXQsIGNvbmRpdGlvbkNiKSB7XG4gICAgICAgIHZhciBpbCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHNvdXJjZVtpXTtcblxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbkNiKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlLnNwbGljZShpLS0sIDEpWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBKU09OUGF0aC5wcm90b3R5cGUudm0gPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwciBFeHByZXNzaW9uIHRvIGV2YWx1YXRlXG4gICAgICAgICAqIEBwYXJhbSB7UGxhaW5PYmplY3R9IGNvbnRleHQgT2JqZWN0IHdob3NlIGl0ZW1zIHdpbGwgYmUgYWRkZWRcbiAgICAgICAgICogICB0byBldmFsdWF0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHthbnl9IFJlc3VsdCBvZiBldmFsdWF0ZWQgY29kZVxuICAgICAgICAgKi9cbiAgICAgICAgcnVuSW5OZXdDb250ZXh0OiBmdW5jdGlvbiBydW5Jbk5ld0NvbnRleHQoZXhwciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb250ZXh0KTtcbiAgICAgICAgICAgIHZhciBmdW5jcyA9IFtdO1xuICAgICAgICAgICAgbW92ZVRvQW5vdGhlckFycmF5KGtleXMsIGZ1bmNzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjb250ZXh0W2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAodnIsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dFt2cl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBmdW5jU3RyaW5nID0gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChzLCBmdW5jKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZTdHJpbmcgPSBjb250ZXh0W2Z1bmNdLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIS9mdW5jdGlvbi8udGVzdChmU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBmU3RyaW5nID0gJ2Z1bmN0aW9uICcgKyBmU3RyaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAndmFyICcgKyBmdW5jICsgJz0nICsgZlN0cmluZyArICc7JyArIHM7XG4gICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICBleHByID0gZnVuY1N0cmluZyArIGV4cHI7IC8vIE1pdGlnYXRlIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2dsb2JhbC1ldmFsLXdoYXQtYXJlLXRoZS1vcHRpb25zLyNuZXdfZnVuY3Rpb25cblxuICAgICAgICAgICAgaWYgKCEvKFtcIiddKXVzZSBzdHJpY3RcXDEvLnRlc3QoZXhwcikgJiYgIWtleXMuaW5jbHVkZXMoJ2FyZ3VtZW50cycpKSB7XG4gICAgICAgICAgICAgICAgZXhwciA9ICd2YXIgYXJndW1lbnRzID0gdW5kZWZpbmVkOycgKyBleHByO1xuICAgICAgICAgICAgfSAvLyBSZW1vdmUgbGFzdCBzZW1pIHNvIGByZXR1cm5gIHdpbGwgYmUgaW5zZXJ0ZWQgYmVmb3JlXG4gICAgICAgICAgICAvLyAgdGhlIHByZXZpb3VzIG9uZSBpbnN0ZWFkLCBhbGxvd2luZyBmb3IgdGhlIHJldHVyblxuICAgICAgICAgICAgLy8gIG9mIGEgYmFyZSBlbmRpbmcgZXhwcmVzc2lvblxuXG5cbiAgICAgICAgICAgIGV4cHIgPSBleHByLnJlcGxhY2UoLztbXFx0LVxcciBcXHhBMFxcdTE2ODBcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdUZFRkZdKiQvLCAnJyk7IC8vIEluc2VydCBgcmV0dXJuYFxuXG4gICAgICAgICAgICB2YXIgbGFzdFN0YXRlbWVudEVuZCA9IGV4cHIubGFzdEluZGV4T2YoJzsnKTtcbiAgICAgICAgICAgIHZhciBjb2RlID0gbGFzdFN0YXRlbWVudEVuZCA+IC0xID8gZXhwci5zbGljZSgwLCBsYXN0U3RhdGVtZW50RW5kICsgMSkgKyAnIHJldHVybiAnICsgZXhwci5zbGljZShsYXN0U3RhdGVtZW50RW5kICsgMSkgOiAnIHJldHVybiAnICsgZXhwcjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG5cbiAgICAgICAgICAgIHJldHVybiBfY29uc3RydWN0KEZ1bmN0aW9uLCBfdG9Db25zdW1hYmxlQXJyYXkoa2V5cykuY29uY2F0KFtjb2RlXSkpLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlcykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGV4cG9ydHMuSlNPTlBhdGggPSBKU09OUGF0aDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanNvbnBhdGguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==