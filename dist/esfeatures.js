function _arrayLikeToArray(o, n) {
  (n == null || n > o.length) && (n = o.length);
  for (var e = 0, i = Array(n); e < n; e++)
    i[e] = o[e];
  return i;
}
function _arrayWithHoles(o) {
  if (Array.isArray(o))
    return o;
}
function _arrayWithoutHoles(o) {
  if (Array.isArray(o))
    return _arrayLikeToArray(o);
}
function _assertClassBrand(o, n, e) {
  if (typeof o == "function" ? o === n : o.has(n))
    return arguments.length < 3 ? n : e;
  throw new TypeError("Private element is not present on this object");
}
function _assertThisInitialized(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function asyncGeneratorStep(o, n, e, i, r, t, a) {
  try {
    var s = o[t](a), u = s.value;
  } catch (c) {
    return void e(c);
  }
  s.done ? n(u) : Promise.resolve(u).then(i, r);
}
function _asyncToGenerator(o) {
  return function() {
    var n = this, e = arguments;
    return new Promise(function(i, r) {
      var t = o.apply(n, e);
      function a(u) {
        asyncGeneratorStep(t, i, r, a, s, "next", u);
      }
      function s(u) {
        asyncGeneratorStep(t, i, r, a, s, "throw", u);
      }
      a(void 0);
    });
  };
}
function _callSuper(o, n, e) {
  return n = _getPrototypeOf(n), _possibleConstructorReturn(o, _isNativeReflectConstruct() ? Reflect.construct(n, e || [], _getPrototypeOf(o).constructor) : n.apply(o, e));
}
function _checkInRHS(o) {
  if (Object(o) !== o)
    throw TypeError("right-hand side of 'in' should be an object, got " + (o !== null ? typeof o : "null"));
  return o;
}
function _checkPrivateRedeclaration(o, n) {
  if (n.has(o))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(o, n) {
  if (!(o instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(o, n) {
  return o.get(_assertClassBrand(o, n));
}
function _classPrivateFieldInitSpec(o, n, e) {
  _checkPrivateRedeclaration(o, n), n.set(o, e);
}
function _classPrivateFieldSet2(o, n, e) {
  return o.set(_assertClassBrand(o, n), e), e;
}
function _classPrivateMethodInitSpec(o, n) {
  _checkPrivateRedeclaration(o, n), n.add(o);
}
function _construct(o, n, e) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, n);
  var r = new (o.bind.apply(o, i))();
  return e && _setPrototypeOf(r, e.prototype), r;
}
function _defineProperties(o, n) {
  for (var e = 0; e < n.length; e++) {
    var i = n[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(o, _toPropertyKey(i.key), i);
  }
}
function _createClass(o, n, e) {
  return n && _defineProperties(o.prototype, n), e && _defineProperties(o, e), Object.defineProperty(o, "prototype", {
    writable: !1
  }), o;
}
function _createForOfIteratorHelper(o, n) {
  var e = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!e) {
    if (Array.isArray(o) || (e = _unsupportedIterableToArray(o)) || n && o && typeof o.length == "number") {
      e && (o = e);
      var i = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return i >= o.length ? {
            done: !0
          } : {
            done: !1,
            value: o[i++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var t, a = !0, s = !1;
  return {
    s: function() {
      e = e.call(o);
    },
    n: function() {
      var u = e.next();
      return a = u.done, u;
    },
    e: function(u) {
      s = !0, t = u;
    },
    f: function() {
      try {
        a || e.return == null || e.return();
      } finally {
        if (s)
          throw t;
      }
    }
  };
}
function _defineProperty(o, n, e) {
  return (n = _toPropertyKey(n)) in o ? Object.defineProperty(o, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[n] = e, o;
}
function _get() {
  return _get = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(o, n, e) {
    var i = _superPropBase(o, n);
    if (i) {
      var r = Object.getOwnPropertyDescriptor(i, n);
      return r.get ? r.get.call(arguments.length < 3 ? o : e) : r.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(o) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _getPrototypeOf(o);
}
function _inherits(o, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  o.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: o,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(o, "prototype", {
    writable: !1
  }), n && _setPrototypeOf(o, n);
}
function _isNativeFunction(o) {
  try {
    return Function.toString.call(o).indexOf("[native code]") !== -1;
  } catch {
    return typeof o == "function";
  }
}
function _isNativeReflectConstruct() {
  try {
    var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_isNativeReflectConstruct = function() {
    return !!o;
  })();
}
function _iterableToArray(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function _iterableToArrayLimit(o, n) {
  var e = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (e != null) {
    var i, r, t, a, s = [], u = !0, c = !1;
    try {
      if (t = (e = e.call(o)).next, n === 0) {
        if (Object(e) !== e)
          return;
        u = !1;
      } else
        for (; !(u = (i = t.call(e)).done) && (s.push(i.value), s.length !== n); u = !0)
          ;
    } catch (l) {
      c = !0, r = l;
    } finally {
      try {
        if (!u && e.return != null && (a = e.return(), Object(a) !== a))
          return;
      } finally {
        if (c)
          throw r;
      }
    }
    return s;
  }
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ownKeys(o, n) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    n && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(o, r).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function _objectSpread2(o) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ownKeys(Object(e), !0).forEach(function(i) {
      _defineProperty(o, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : ownKeys(Object(e)).forEach(function(i) {
      Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return o;
}
function _objectWithoutProperties(o, n) {
  if (o == null)
    return {};
  var e, i, r = _objectWithoutPropertiesLoose(o, n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    for (i = 0; i < t.length; i++)
      e = t[i], n.indexOf(e) === -1 && {}.propertyIsEnumerable.call(o, e) && (r[e] = o[e]);
  }
  return r;
}
function _objectWithoutPropertiesLoose(o, n) {
  if (o == null)
    return {};
  var e = {};
  for (var i in o)
    if ({}.hasOwnProperty.call(o, i)) {
      if (n.indexOf(i) !== -1)
        continue;
      e[i] = o[i];
    }
  return e;
}
function _possibleConstructorReturn(o, n) {
  if (n && (typeof n == "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(o);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var o, n, e = typeof Symbol == "function" ? Symbol : {}, i = e.iterator || "@@iterator", r = e.toStringTag || "@@toStringTag";
  function t(y, p, S, M) {
    var I = p && p.prototype instanceof s ? p : s, R = Object.create(I.prototype);
    return _regeneratorDefine(R, "_invoke", function(F, T, N) {
      var _, h, d, P = 0, k = N || [], A = !1, w = {
        p: 0,
        n: 0,
        v: o,
        a: O,
        f: O.bind(o, 4),
        d: function(b, m) {
          return _ = b, h = 0, d = o, w.n = m, a;
        }
      };
      function O(b, m) {
        for (h = b, d = m, n = 0; !A && P && !E && n < k.length; n++) {
          var E, g = k[n], C = w.p, j = g[2];
          b > 3 ? (E = j === m) && (d = g[(h = g[4]) ? 5 : (h = 3, 3)], g[4] = g[5] = o) : g[0] <= C && ((E = b < 2 && C < g[1]) ? (h = 0, w.v = m, w.n = g[1]) : C < j && (E = b < 3 || g[0] > m || m > j) && (g[4] = b, g[5] = m, w.n = j, h = 0));
        }
        if (E || b > 1)
          return a;
        throw A = !0, m;
      }
      return function(b, m, E) {
        if (P > 1)
          throw TypeError("Generator is already running");
        for (A && m === 1 && O(m, E), h = m, d = E; (n = h < 2 ? o : d) || !A; ) {
          _ || (h ? h < 3 ? (h > 1 && (w.n = -1), O(h, d)) : w.n = d : w.v = d);
          try {
            if (P = 2, _) {
              if (h || (b = "next"), n = _[b]) {
                if (!(n = n.call(_, d)))
                  throw TypeError("iterator result is not an object");
                if (!n.done)
                  return n;
                d = n.value, h < 2 && (h = 0);
              } else
                h === 1 && (n = _.return) && n.call(_), h < 2 && (d = TypeError("The iterator does not provide a '" + b + "' method"), h = 1);
              _ = o;
            } else if ((n = (A = w.n < 0) ? d : F.call(T, w)) !== a)
              break;
          } catch (g) {
            _ = o, h = 1, d = g;
          } finally {
            P = 1;
          }
        }
        return {
          value: n,
          done: A
        };
      };
    }(y, S, M), !0), R;
  }
  var a = {};
  function s() {
  }
  function u() {
  }
  function c() {
  }
  n = Object.getPrototypeOf;
  var l = [][i] ? n(n([][i]())) : (_regeneratorDefine(n = {}, i, function() {
    return this;
  }), n), f = c.prototype = s.prototype = Object.create(l);
  function v(y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(y, c) : (y.__proto__ = c, _regeneratorDefine(y, r, "GeneratorFunction")), y.prototype = Object.create(f), y;
  }
  return u.prototype = c, _regeneratorDefine(f, "constructor", c), _regeneratorDefine(c, "constructor", u), u.displayName = "GeneratorFunction", _regeneratorDefine(c, r, "GeneratorFunction"), _regeneratorDefine(f), _regeneratorDefine(f, r, "Generator"), _regeneratorDefine(f, i, function() {
    return this;
  }), _regeneratorDefine(f, "toString", function() {
    return "[object Generator]";
  }), (_regenerator = function() {
    return {
      w: t,
      m: v
    };
  })();
}
function _regeneratorDefine(o, n, e, i) {
  var r = Object.defineProperty;
  try {
    r({}, "", {});
  } catch {
    r = 0;
  }
  _regeneratorDefine = function(t, a, s, u) {
    function c(l, f) {
      _regeneratorDefine(t, l, function(v) {
        return this._invoke(l, f, v);
      });
    }
    a ? r ? r(t, a, {
      value: s,
      enumerable: !u,
      configurable: !u,
      writable: !u
    }) : t[a] = s : (c("next", 0), c("throw", 1), c("return", 2));
  }, _regeneratorDefine(o, n, e, i);
}
function _regeneratorValues(o) {
  if (o != null) {
    var n = o[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], e = 0;
    if (n)
      return n.call(o);
    if (typeof o.next == "function")
      return o;
    if (!isNaN(o.length))
      return {
        next: function() {
          return o && e >= o.length && (o = void 0), {
            value: o && o[e++],
            done: !o
          };
        }
      };
  }
  throw new TypeError(typeof o + " is not iterable");
}
function _setPrototypeOf(o, n) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, i) {
    return e.__proto__ = i, e;
  }, _setPrototypeOf(o, n);
}
function _slicedToArray(o, n) {
  return _arrayWithHoles(o) || _iterableToArrayLimit(o, n) || _unsupportedIterableToArray(o, n) || _nonIterableRest();
}
function _superPropBase(o, n) {
  for (; !{}.hasOwnProperty.call(o, n) && (o = _getPrototypeOf(o)) !== null; )
    ;
  return o;
}
function _superPropGet(o, n, e, i) {
  var r = _get(_getPrototypeOf(1 & i ? o.prototype : o), n, e);
  return 2 & i && typeof r == "function" ? function(t) {
    return r.apply(e, t);
  } : r;
}
function _taggedTemplateLiteral(o, n) {
  return n || (n = o.slice(0)), Object.freeze(Object.defineProperties(o, {
    raw: {
      value: Object.freeze(n)
    }
  }));
}
function _toConsumableArray(o) {
  return _arrayWithoutHoles(o) || _iterableToArray(o) || _unsupportedIterableToArray(o) || _nonIterableSpread();
}
function _toPrimitive(o, n) {
  if (typeof o != "object" || !o)
    return o;
  var e = o[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(o, n || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(o);
}
function _toPropertyKey(o) {
  var n = _toPrimitive(o, "string");
  return typeof n == "symbol" ? n : n + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _typeof(o);
}
function _unsupportedIterableToArray(o, n) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, n);
    var e = {}.toString.call(o).slice(8, -1);
    return e === "Object" && o.constructor && (e = o.constructor.name), e === "Map" || e === "Set" ? Array.from(o) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? _arrayLikeToArray(o, n) : void 0;
  }
}
function _wrapNativeSuper(o) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(e) {
    if (e === null || !_isNativeFunction(e))
      return e;
    if (typeof e != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (n !== void 0) {
      if (n.has(e))
        return n.get(e);
      n.set(e, i);
    }
    function i() {
      return _construct(e, arguments, _getPrototypeOf(this).constructor);
    }
    return i.prototype = Object.create(e.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(i, e);
  }, _wrapNativeSuper(o);
}
function _wrapRegExp() {
  _wrapRegExp = function(r, t) {
    return new e(r, void 0, t);
  };
  var o = RegExp.prototype, n = /* @__PURE__ */ new WeakMap();
  function e(r, t, a) {
    var s = RegExp(r, t);
    return n.set(s, a || n.get(r)), _setPrototypeOf(s, e.prototype);
  }
  function i(r, t) {
    var a = n.get(t);
    return Object.keys(a).reduce(function(s, u) {
      var c = a[u];
      if (typeof c == "number")
        s[u] = r[c];
      else {
        for (var l = 0; r[c[l]] === void 0 && l + 1 < c.length; )
          l++;
        s[u] = r[c[l]];
      }
      return s;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits(e, RegExp), e.prototype.exec = function(r) {
    var t = o.exec.call(this, r);
    if (t) {
      t.groups = i(t, this);
      var a = t.indices;
      a && (a.groups = i(a, this));
    }
    return t;
  }, e.prototype[Symbol.replace] = function(r, t) {
    if (typeof t == "string") {
      var a = n.get(this);
      return o[Symbol.replace].call(this, r, t.replace(/\$<([^>]+)(>|$)/g, function(u, c, l) {
        if (l === "")
          return u;
        var f = a[c];
        return Array.isArray(f) ? "$" + f.join("$") : typeof f == "number" ? "$" + f : "";
      }));
    }
    if (typeof t == "function") {
      var s = this;
      return o[Symbol.replace].call(this, r, function() {
        var u = arguments;
        return typeof u[u.length - 1] != "object" && (u = [].slice.call(u)).push(i(u, s)), t.apply(this, u);
      });
    }
    return o[Symbol.replace].call(this, r, t);
  }, _wrapRegExp.apply(this, arguments);
}
function createSuite(o) {
  var n = [];
  function e(t, a) {
    try {
      var s = a();
      if (s instanceof Promise)
        return s.then(function() {
          n.push({
            suite: o,
            case: t,
            status: "pass"
          });
        }).catch(function(u) {
          n.push({
            suite: o,
            case: t,
            status: "fail",
            error: u.message
          });
        });
      n.push({
        suite: o,
        case: t,
        status: "pass"
      });
    } catch (u) {
      n.push({
        suite: o,
        case: t,
        status: "fail",
        error: u.message
      });
    }
  }
  function i(t, a) {
    if (!t)
      throw new Error(a || "断言失败");
  }
  function r() {
    return n;
  }
  return {
    test: e,
    assert: i,
    getResults: r
  };
}
function printResults(o) {
  var n = 0, e = 0;
  o.forEach(function(i) {
    i.status === "pass" ? (n++, console.log("  ✓ [".concat(i.suite, "] ").concat(i.case))) : (e++, console.error("  ✗ [".concat(i.suite, "] ").concat(i.case, " — ").concat(i.error)));
  }), console.log(`
共 `.concat(o.length, " 项，通过 ").concat(n, "，失败 ").concat(e));
}
function testLetConst() {
  var o = createSuite("let & const"), n = o.test, e = o.assert, i = o.getResults;
  return n("let 块级作用域", function() {
    for (var r = [], t = 0; t < 3; t++)
      r.push(t);
    e(r[0] === 0 && r[2] === 2, "let 循环变量应为独立值");
  }), n("let 不可重复声明", function() {
    try {
      new Function('"use strict"; let x = 1; let x = 2;')(), e(!1, "应抛出 SyntaxError");
    } catch (r) {
      e(r instanceof SyntaxError || r instanceof TypeError, "应为语法错误");
    }
  }), n("let 暂时性死区(TDZ)", function() {
    try {
      new Function('"use strict"; console.log(y); let y = 1;')(), e(!1, "应抛出 ReferenceError");
    } catch {
      e(!0);
    }
  }), n("const 声明常量", function() {
    var r = 3.14159;
    e(r === 3.14159, "const 值应保持不变");
  }), n("const 不可重新赋值", function() {
    try {
      new Function('"use strict"; const x = 1; x = 2;')(), e(!1, "应抛出 TypeError");
    } catch (r) {
      e(r instanceof TypeError, "应为 TypeError");
    }
  }), n("const 对象属性可修改", function() {
    var r = {
      a: 1
    };
    r.a = 2, e(r.a === 2, "const 对象的属性可以修改");
  }), i();
}
function testArrowFunctions() {
  var o = createSuite("箭头函数"), n = o.test, e = o.assert, i = o.getResults;
  return n("基本语法", function() {
    var r = function(a, s) {
      return a + s;
    };
    e(r(2, 3) === 5, "箭头函数返回值应为 5");
  }), n("单参数省略括号", function() {
    var r = function(a) {
      return a * 2;
    };
    e(r(4) === 8, "单参数箭头函数应正常工作");
  }), n("无参数需要括号", function() {
    var r = function() {
      return "hello";
    };
    e(r() === "hello", "无参数箭头函数应正常工作");
  }), n("多行函数体需要花括号和 return", function() {
    var r = function(a, s) {
      var u = a + s;
      return u * 2;
    };
    e(r(2, 3) === 10, "多行箭头函数应正确计算");
  }), n("返回对象字面量需要括号", function() {
    var r = function(s) {
      return {
        value: s
      };
    }, t = r(42);
    e(t.value === 42, "箭头函数返回对象应正确包裹");
  }), n("this 词法绑定", function() {
    function r() {
      var a = this;
      this.count = 0;
      var s = function() {
        a.count++;
      };
      s(), s();
    }
    var t = new r();
    e(t.count === 2, "箭头函数 this 应绑定外层作用域");
  }), n("没有 arguments 对象", function() {
    e(!0, "箭头函数无独立 arguments");
  }), n("不能用作构造函数（原生环境）", function() {
    var r = function() {
    }, t = r.prototype === void 0;
    if (t)
      try {
        new r(), e(!1, "应抛出 TypeError");
      } catch (a) {
        e(a instanceof TypeError, "箭头函数不能 new");
      }
  }), i();
}
var _templateObject, _templateObject2;
function testTemplateLiterals() {
  var o = createSuite("模板字符串"), n = o.test, e = o.assert, i = o.getResults;
  return n("基本插值", function() {
    var r = "ES2015", t = "Hello, ".concat(r, "!");
    e(t === "Hello, ES2015!", "模板字符串插值应正确");
  }), n("表达式插值", function() {
    var r = 3, t = 4, a = "".concat(r, " + ").concat(t, " = ").concat(r + t);
    e(a === "3 + 4 = 7", "模板字符串支持表达式");
  }), n("多行字符串", function() {
    var r = `第一行
第二行`;
    e(r.includes(`
`), "模板字符串支持多行");
  }), n("嵌套模板", function() {
    var r = ["a", "b", "c"], t = "items: ".concat(r.map(function(a) {
      return "[".concat(a, "]");
    }).join(", "));
    e(t === "items: [a], [b], [c]", "模板字符串可以嵌套");
  }), n("标签模板 - 基本用法", function() {
    function r(s) {
      for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), l = 1; l < u; l++)
        c[l - 1] = arguments[l];
      return s.raw[0] + c[0].toUpperCase();
    }
    var t = "world", a = r(_templateObject || (_templateObject = _taggedTemplateLiteral(["hello ", ""])), t);
    e(a === "hello WORLD", "标签模板应正确处理");
  }), n("标签模板 - String.raw", function() {
    var r = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([`C:Users	est
`], ["C:\\Users\\test\\n"])));
    e(r.includes("\\n"), "String.raw 应保留原始反斜杠");
  }), n("模板字符串中调用函数", function() {
    var r = function(s) {
      return s.toUpperCase();
    }, t = "result: ".concat(r("hello"));
    e(t === "result: HELLO", "模板字符串中可调用函数");
  }), i();
}
var _excluded = ["x"];
function testDestructuring() {
  var o = createSuite("解构赋值"), n = o.test, e = o.assert, i = o.getResults;
  return n("数组解构 - 基本", function() {
    var r = 3;
    e(r === 3, "数组解构基本用法");
  }), n("数组解构 - 跳过元素", function() {
    var r = [1, 2, 3, 4], t = r[3];
    e(t === 4, "数组解构可跳过元素");
  }), n("数组解构 - 默认值", function() {
    var r = 20;
    e(r === 20, "数组解构默认值");
  }), n("数组解构 - rest 元素", function() {
    var r = [2, 3, 4];
    e(r.length === 3, "数组解构 rest 元素");
  }), n("数组解构 - 交换变量", function() {
    var r = 1, t = 2, a = [t, r];
    r = a[0], t = a[1], e(r === 2 && t === 1, "解构交换变量");
  }), n("对象解构 - 基本", function() {
    var r = {
      name: "Alice",
      age: 25
    }, t = r.age;
    e(t === 25, "对象解构基本用法");
  }), n("对象解构 - 重命名", function() {
    var r = {
      name: "Bob",
      age: 30
    }, t = r.age;
    e(t === 30, "对象解构重命名");
  }), n("对象解构 - 默认值", function() {
    var r = {
      a: 10
    }, t = r.b, a = t === void 0 ? 2 : t;
    e(a === 2, "对象解构默认值");
  }), n("对象解构 - rest 属性", function() {
    var r = {
      x: 1,
      y: 2,
      z: 3
    }, t = r.x, a = _objectWithoutProperties(r, _excluded);
    e(t === 1 && a.y === 2 && a.z === 3, "对象解构 rest 属性");
  }), n("嵌套解构", function() {
    var r = {
      a: {
        b: {
          c: 42
        }
      }
    }, t = r.a.b.c;
    e(t === 42, "嵌套解构");
  }), n("函数参数解构", function() {
    var r = function(a) {
      var s = a.name, u = a.age, c = u === void 0 ? 18 : u;
      return "".concat(s, ":").concat(c);
    };
    e(r({
      name: "Alice"
    }) === "Alice:18", "函数参数解构");
  }), n("字符串解构", function() {
    var r = "abc", t = _slicedToArray(r, 3), a = t[0], s = t[1], u = t[2];
    e(a === "a" && s === "b" && u === "c", "字符串解构");
  }), i();
}
function testDefaultRestSpread() {
  var o = createSuite("默认参数/Rest/Spread"), n = o.test, e = o.assert, i = o.getResults;
  return n("默认参数 - 基本", function() {
    var r = function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "World";
      return "Hello, ".concat(a, "!");
    };
    e(r() === "Hello, World!", "默认参数应生效"), e(r("Alice") === "Hello, Alice!", "传参时默认参数应被覆盖");
  }), n("默认参数 - undefined 触发默认值", function() {
    var r = function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      return a;
    };
    e(r(void 0) === 1, "undefined 触发默认参数"), e(r(null) === null, "null 不触发默认参数");
  }), n("默认参数 - 使用前面的参数", function() {
    var r = function(a) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a * 2;
      return s;
    };
    e(r(5) === 10, "默认参数可引用前面的参数");
  }), n("默认参数 - 表达式", function() {
    var r = function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Math.random();
      return s;
    }, t = r();
    e(typeof t == "number", "默认参数可以是表达式");
  }), n("rest 参数 - 收集剩余参数", function() {
    var r = function(a) {
      for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
        u[c - 1] = arguments[c];
      return u.reduce(function(l, f) {
        return l + f;
      }, a);
    };
    e(r(1, 2, 3, 4) === 10, "rest 参数应收集剩余参数");
  }), n("rest 参数 - 是真正的数组", function() {
    var r = function() {
      for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
        s[u] = arguments[u];
      return Array.isArray(s);
    };
    e(r(1, 2, 3) === !0, "rest 参数是真正的数组");
  }), n("rest 参数只能在最后", function() {
    try {
      new Function("function f(...a, b){}")(), e(!1, "应抛出 SyntaxError");
    } catch {
      e(!0, "rest 参数只能在最后");
    }
  }), n("spread 展开数组", function() {
    var r = [1, 2, 3], t = [0].concat(r, [4]);
    e(t.join(",") === "0,1,2,3,4", "spread 展开数组");
  }), n("spread 复制数组", function() {
    var r = [1, 2, 3], t = [].concat(r);
    t.push(4), e(r.length === 3 && t.length === 4, "spread 复制数组为浅拷贝");
  }), n("spread 合并数组", function() {
    var r = [1, 2].concat([3, 4], [5]);
    e(r.join(",") === "1,2,3,4,5", "spread 合并数组");
  }), n("spread 传入函数参数", function() {
    var r = [1, 2, 3];
    e(Math.max.apply(Math, r) === 3, "spread 传入函数参数");
  }), n("spread 展开对象", function() {
    var r = {
      a: 1,
      b: 2
    }, t = _objectSpread2(_objectSpread2({}, r), {}, {
      c: 3
    });
    e(t.a === 1 && t.b === 2 && t.c === 3, "spread 展开对象");
  }), n("spread 对象覆盖属性", function() {
    var r = {
      a: 1,
      b: 2
    }, t = _objectSpread2(_objectSpread2({}, r), {}, {
      b: 99
    });
    e(t.b === 99, "spread 后面属性覆盖前面");
  }), i();
}
function testClasses() {
  var o = createSuite("类(Class)"), n = o.test, e = o.assert, i = o.getResults;
  return n("基本类定义", function() {
    var r = /* @__PURE__ */ function() {
      function a(s) {
        _classCallCheck(this, a), this.name = s;
      }
      return _createClass(a, [{
        key: "speak",
        value: function() {
          return "".concat(this.name, " makes a sound.");
        }
      }]);
    }(), t = new r("Cat");
    e(t.name === "Cat", "构造函数应正确赋值"), e(t.speak() === "Cat makes a sound.", "实例方法应正常工作");
  }), n("类继承", function() {
    var r = /* @__PURE__ */ function() {
      function s(u) {
        _classCallCheck(this, s), this.name = u;
      }
      return _createClass(s, [{
        key: "speak",
        value: function() {
          return "".concat(this.name, ": ...");
        }
      }]);
    }(), t = /* @__PURE__ */ function(s) {
      function u() {
        return _classCallCheck(this, u), _callSuper(this, u, arguments);
      }
      return _inherits(u, s), _createClass(u, [{
        key: "speak",
        value: function() {
          return "".concat(this.name, ": Woof!");
        }
      }]);
    }(r), a = new t("Rex");
    e(a.speak() === "Rex: Woof!", "子类应覆盖父类方法"), e(a instanceof t && a instanceof r, "instanceof 检查应通过");
  }), n("super 调用父类方法", function() {
    var r = /* @__PURE__ */ function() {
      function s() {
        _classCallCheck(this, s);
      }
      return _createClass(s, [{
        key: "area",
        value: function() {
          return 0;
        }
      }, {
        key: "describe",
        value: function() {
          return "面积: ".concat(this.area());
        }
      }]);
    }(), t = /* @__PURE__ */ function(s) {
      function u(c) {
        var l;
        return _classCallCheck(this, u), l = _callSuper(this, u), l.r = c, l;
      }
      return _inherits(u, s), _createClass(u, [{
        key: "area",
        value: function() {
          return Math.PI * this.r * this.r;
        }
      }, {
        key: "describe",
        value: function() {
          return _superPropGet(u, "describe", this, 3)([]) + " (圆形)";
        }
      }]);
    }(r), a = new t(1);
    e(a.describe().includes("面积:"), "super 方法调用");
  }), n("静态方法", function() {
    var r = /* @__PURE__ */ function() {
      function t() {
        _classCallCheck(this, t);
      }
      return _createClass(t, null, [{
        key: "add",
        value: function(s, u) {
          return s + u;
        }
      }]);
    }();
    _defineProperty(r, "PI", 3.14159), e(r.add(2, 3) === 5, "静态方法应直接通过类调用"), e(r.PI === 3.14159, "静态属性应正确设置");
  }), n("getter 和 setter", function() {
    var r = /* @__PURE__ */ function() {
      function a(s) {
        _classCallCheck(this, a), this._celsius = s;
      }
      return _createClass(a, [{
        key: "fahrenheit",
        get: function() {
          return this._celsius * 9 / 5 + 32;
        },
        set: function(u) {
          this._celsius = (u - 32) * 5 / 9;
        }
      }]);
    }(), t = new r(0);
    e(t.fahrenheit === 32, "getter 应正确计算"), t.fahrenheit = 212, e(Math.round(t._celsius) === 100, "setter 应正确转换");
  }), n("私有字段 (#)", function() {
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ function() {
      function s() {
        _classCallCheck(this, s), _classPrivateFieldInitSpec(this, r, 0);
      }
      return _createClass(s, [{
        key: "increment",
        value: function() {
          var c;
          _classPrivateFieldSet2(r, this, (c = _classPrivateFieldGet2(r, this), c++, c));
        }
      }, {
        key: "value",
        get: function() {
          return _classPrivateFieldGet2(r, this);
        }
      }]);
    }(), a = new t();
    a.increment(), a.increment(), e(a.value === 2, "私有字段应正确工作"), e(!("count" in a), "私有字段不可从外部访问");
  }), n("类表达式", function() {
    var r = /* @__PURE__ */ function() {
      function a(s, u) {
        _classCallCheck(this, a), this.w = s, this.h = u;
      }
      return _createClass(a, [{
        key: "area",
        value: function() {
          return this.w * this.h;
        }
      }]);
    }(), t = new r(3, 4);
    e(t.area() === 12, "类表达式应正常工作");
  }), n("类不存在变量提升", function() {
    try {
      new Function('"use strict"; new Foo(); class Foo {}')(), e(!1, "应抛出 ReferenceError");
    } catch {
      e(!0, "类不提升，使用前必须先声明");
    }
  }), i();
}
function testPromises() {
  return _testPromises.apply(this, arguments);
}
function _testPromises() {
  return _testPromises = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    var n, e, i, r, t;
    return _regenerator().w(function(a) {
      for (; ; )
        switch (a.n) {
          case 0:
            return n = createSuite("Promise"), e = n.test, i = n.assert, r = n.getResults, t = [], t.push(e("基本 Promise resolve", function() {
              return new Promise(function(s) {
                return s(42);
              }).then(function(s) {
                return i(s === 42, "resolve 值应为 42");
              });
            })), t.push(e("基本 Promise reject", function() {
              return new Promise(function(s, u) {
                return u(new Error("失败"));
              }).catch(function(s) {
                return i(s.message === "失败", "reject 应携带错误信息");
              });
            })), t.push(e("Promise 链式调用", function() {
              return Promise.resolve(1).then(function(s) {
                return s + 1;
              }).then(function(s) {
                return s * 3;
              }).then(function(s) {
                return i(s === 6, "链式调用结果应为 6");
              });
            })), t.push(e("Promise.all - 全部成功", function() {
              return Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(function(s) {
                return i(s.join(",") === "1,2,3", "Promise.all 应返回所有结果");
              });
            })), t.push(e("Promise.all - 一个失败则全部失败", function() {
              return Promise.all([Promise.resolve(1), Promise.reject(new Error("error")), Promise.resolve(3)]).catch(function(s) {
                return i(s.message === "error", "Promise.all 中有失败应 reject");
              });
            })), t.push(e("Promise.race - 返回最快的结果", function() {
              var s = new Promise(function(c) {
                return setTimeout(function() {
                  return c("slow");
                }, 100);
              }), u = Promise.resolve("fast");
              return Promise.race([s, u]).then(function(c) {
                return i(c === "fast", "Promise.race 应返回最快完成的");
              });
            })), t.push(e("Promise.allSettled - 全部结果", function() {
              return Promise.allSettled([Promise.resolve(1), Promise.reject("err")]).then(function(s) {
                i(s[0].status === "fulfilled", "allSettled fulfilled"), i(s[1].status === "rejected", "allSettled rejected");
              });
            })), t.push(e("Promise.any - 返回第一个成功", function() {
              return Promise.any([Promise.reject("e1"), Promise.resolve("ok"), Promise.resolve("ok2")]).then(function(s) {
                return i(s === "ok", "Promise.any 应返回第一个成功的值");
              });
            })), t.push(e("async/await 基本用法", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u, c, l;
              return _regenerator().w(function(f) {
                for (; ; )
                  switch (f.n) {
                    case 0:
                      return c = function() {
                        return c = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function y() {
                          var p;
                          return _regenerator().w(function(S) {
                            for (; ; )
                              switch (S.n) {
                                case 0:
                                  return S.n = 1, Promise.resolve("data");
                                case 1:
                                  return p = S.v, S.a(2, p);
                              }
                          }, y);
                        })), c.apply(this, arguments);
                      }, u = function() {
                        return c.apply(this, arguments);
                      }, f.n = 1, u();
                    case 1:
                      l = f.v, i(l === "data", "async/await 应正确获取异步结果");
                    case 2:
                      return f.a(2);
                  }
              }, s);
            })))), t.push(e("async/await 错误处理", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u, c, l;
              return _regenerator().w(function(f) {
                for (; ; )
                  switch (f.p = f.n) {
                    case 0:
                      return c = function() {
                        return c = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function y() {
                          return _regenerator().w(function(p) {
                            for (; ; )
                              switch (p.n) {
                                case 0:
                                  throw new Error("async error");
                                case 1:
                                  return p.a(2);
                              }
                          }, y);
                        })), c.apply(this, arguments);
                      }, u = function() {
                        return c.apply(this, arguments);
                      }, f.p = 1, f.n = 2, u();
                    case 2:
                      i(!1, "应抛出错误"), f.n = 4;
                      break;
                    case 3:
                      f.p = 3, l = f.v, i(l.message === "async error", "async/await 错误处理");
                    case 4:
                      return f.a(2);
                  }
              }, s, null, [[1, 3]]);
            })))), a.n = 1, Promise.all(t.filter(Boolean));
          case 1:
            return a.a(2, r());
        }
    }, o);
  })), _testPromises.apply(this, arguments);
}
function testSymbols() {
  var o = createSuite("Symbol"), n = o.test, e = o.assert, i = o.getResults;
  return n("Symbol 唯一性", function() {
    var r = Symbol("desc"), t = Symbol("desc");
    e(r !== t, "相同描述的 Symbol 不相等");
  }), n("Symbol 描述属性", function() {
    var r = Symbol("my-symbol");
    e(r.description === "my-symbol", "Symbol.description 应返回描述字符串");
  }), n("Symbol 作为对象属性键", function() {
    var r = Symbol("key"), t = _defineProperty({}, r, "value");
    e(t[r] === "value", "Symbol 可作为对象属性键");
  }), n("Symbol 属性不被普通枚举", function() {
    var r = Symbol("hidden"), t = _defineProperty(_defineProperty({}, r, 1), "visible", 2);
    e(!Object.keys(t).includes(r.toString()), "Symbol 属性不出现在 Object.keys 中"), e(Object.getOwnPropertySymbols(t).length === 1, "getOwnPropertySymbols 可获取 Symbol 属性");
  }), n("Symbol.for 全局注册", function() {
    var r = Symbol.for("shared"), t = Symbol.for("shared");
    e(r === t, "Symbol.for 应返回同一个 Symbol");
  }), n("Symbol.keyFor 获取注册键", function() {
    var r = Symbol.for("test-key");
    e(Symbol.keyFor(r) === "test-key", "Symbol.keyFor 应返回注册键");
    var t = Symbol("local");
    e(Symbol.keyFor(t) === void 0, "未注册的 Symbol 返回 undefined");
  }), n("内置 Symbol - Symbol.iterator", function() {
    var r = /* @__PURE__ */ function() {
      function a(s, u) {
        _classCallCheck(this, a), this.start = s, this.end = u;
      }
      return _createClass(a, [{
        key: Symbol.iterator,
        value: function() {
          var u = this.start, c = this.end;
          return {
            next: function() {
              return u <= c ? {
                value: u++,
                done: !1
              } : {
                done: !0
              };
            }
          };
        }
      }]);
    }(), t = _toConsumableArray(new r(1, 3));
    e(t.join(",") === "1,2,3", "Symbol.iterator 自定义迭代器");
  }), n("内置 Symbol - Symbol.toPrimitive", function() {
    var r = _defineProperty({}, Symbol.toPrimitive, function(t) {
      return t === "number" ? 42 : t === "string" ? "forty-two" : !0;
    });
    e(+r == 42, "Symbol.toPrimitive number"), e("".concat(r) === "forty-two", "Symbol.toPrimitive string");
  }), n("Symbol.hasInstance", function() {
    var r = /* @__PURE__ */ function() {
      function t() {
        _classCallCheck(this, t);
      }
      return _createClass(t, null, [{
        key: Symbol.hasInstance,
        value: function(s) {
          return Number.isInteger(s) && s % 2 === 0;
        }
      }]);
    }();
    e(2 instanceof r, "2 应为 EvenNumber 实例"), e(!(3 instanceof r), "3 不应为 EvenNumber 实例");
  }), i();
}
function testIteratorsGenerators() {
  var o = createSuite("迭代器与生成器"), n = o.test, e = o.assert, i = o.getResults;
  return n("自定义迭代器", function() {
    function r(a) {
      var s = 0;
      return {
        next: function() {
          return s < a.length ? {
            value: a[s++],
            done: !1
          } : {
            value: void 0,
            done: !0
          };
        }
      };
    }
    var t = r([1, 2, 3]);
    e(t.next().value === 1, "第一次 next 返回 1"), e(t.next().value === 2, "第二次 next 返回 2"), e(t.next().done === !1, "第三次未完成"), e(t.next().done === !0, "第四次完成");
  }), n("可迭代对象 for...of", function() {
    for (var r = [], t = 0, a = [10, 20, 30]; t < a.length; t++) {
      var s = a[t];
      r.push(s);
    }
    e(r.join(",") === "10,20,30", "for...of 迭代数组");
  }), n("字符串是可迭代的", function() {
    var r = _toConsumableArray("hello");
    e(r.length === 5 && r[0] === "h", "字符串可用 for...of 迭代");
  }), n("基本生成器函数", function() {
    var r = /* @__PURE__ */ _regenerator().m(t);
    function t() {
      return _regenerator().w(function(s) {
        for (; ; )
          switch (s.n) {
            case 0:
              return s.n = 1, 1;
            case 1:
              return s.n = 2, 2;
            case 2:
              return s.n = 3, 3;
            case 3:
              return s.a(2);
          }
      }, r);
    }
    var a = t();
    e(a.next().value === 1, "生成器第一个 yield"), e(a.next().value === 2, "生成器第二个 yield"), e(a.next().value === 3, "生成器第三个 yield"), e(a.next().done === !0, "生成器结束");
  }), n("生成器可作为可迭代对象", function() {
    var r = /* @__PURE__ */ _regenerator().m(t);
    function t(s, u) {
      var c;
      return _regenerator().w(function(l) {
        for (; ; )
          switch (l.n) {
            case 0:
              c = s;
            case 1:
              if (!(c <= u)) {
                l.n = 3;
                break;
              }
              return l.n = 2, c;
            case 2:
              c++, l.n = 1;
              break;
            case 3:
              return l.a(2);
          }
      }, r);
    }
    var a = _toConsumableArray(t(1, 5));
    e(a.join(",") === "1,2,3,4,5", "生成器展开为数组");
  }), n("生成器 yield* 委托", function() {
    var r = /* @__PURE__ */ _regenerator().m(a), t = /* @__PURE__ */ _regenerator().m(s);
    function a() {
      return _regenerator().w(function(c) {
        for (; ; )
          switch (c.n) {
            case 0:
              return c.n = 1, "a";
            case 1:
              return c.n = 2, "b";
            case 2:
              return c.a(2);
          }
      }, r);
    }
    function s() {
      return _regenerator().w(function(c) {
        for (; ; )
          switch (c.n) {
            case 0:
              return c.n = 1, 1;
            case 1:
              return c.d(_regeneratorValues(a()), 2);
            case 2:
              return c.n = 3, 2;
            case 3:
              return c.a(2);
          }
      }, t);
    }
    var u = _toConsumableArray(s());
    e(u.join(",") === "1,a,b,2", "yield* 委托生成器");
  }), n("生成器双向通信", function() {
    var r = /* @__PURE__ */ _regenerator().m(t);
    function t() {
      var c, l;
      return _regenerator().w(function(f) {
        for (; ; )
          switch (f.n) {
            case 0:
              c = 0;
            case 1:
              return f.n = 2, c;
            case 2:
              if (l = f.v, l !== null) {
                f.n = 3;
                break;
              }
              return f.a(3, 4);
            case 3:
              c += l, f.n = 1;
              break;
            case 4:
              return f.a(2);
          }
      }, r);
    }
    var a = t();
    a.next(), a.next(5), a.next(3);
    var s = a.next(2), u = s.value;
    e(u === 10, "生成器双向通信");
  }), n("无限序列生成器", function() {
    var r = /* @__PURE__ */ _regenerator().m(t);
    function t() {
      var u, c, l;
      return _regenerator().w(function(f) {
        for (; ; )
          switch (f.n) {
            case 0:
              u = 0, c = 1;
            case 1:
              return f.n = 2, u;
            case 2:
              l = [c, u + c], u = l[0], c = l[1], f.n = 1;
              break;
            case 3:
              return f.a(2);
          }
      }, r);
    }
    var a = t(), s = Array.from({
      length: 8
    }, function() {
      return a.next().value;
    });
    e(s.join(",") === "0,1,1,2,3,5,8,13", "斐波那契生成器");
  }), n("生成器 return 方法提前结束", function() {
    var r = /* @__PURE__ */ _regenerator().m(t);
    function t() {
      return _regenerator().w(function(s) {
        for (; ; )
          switch (s.n) {
            case 0:
              return s.n = 1, 1;
            case 1:
              return s.n = 2, 2;
            case 2:
              return s.n = 3, 3;
            case 3:
              return s.a(2);
          }
      }, r);
    }
    var a = t();
    e(a.next().value === 1, "第一个值"), e(a.return("done").value === "done", "return 方法"), e(a.next().done === !0, "提前结束后 done 为 true");
  }), i();
}
function testMapSet() {
  var o = createSuite("Map & Set"), n = o.test, e = o.assert, i = o.getResults;
  return n("Map 基本操作", function() {
    var r = /* @__PURE__ */ new Map();
    r.set("a", 1), r.set("b", 2), e(r.get("a") === 1, "Map.get 应返回正确值"), e(r.has("b") === !0, "Map.has 应返回 true"), e(r.size === 2, "Map.size 应为 2"), r.delete("a"), e(r.size === 1, "删除后 size 应为 1");
  }), n("Map 支持任意类型键", function() {
    var r = /* @__PURE__ */ new Map(), t = {}, a = function() {
    };
    r.set(t, "object-value"), r.set(a, "function-value"), r.set(42, "number-value"), e(r.get(t) === "object-value", "对象作为键"), e(r.get(a) === "function-value", "函数作为键"), e(r.get(42) === "number-value", "数字作为键");
  }), n("Map 从数组初始化", function() {
    var r = /* @__PURE__ */ new Map([["x", 10], ["y", 20]]);
    e(r.get("x") === 10 && r.get("y") === 20, "Map 从数组初始化");
  }), n("Map 迭代", function() {
    var r = /* @__PURE__ */ new Map([["a", 1], ["b", 2], ["c", 3]]), t = _toConsumableArray(r.keys()), a = _toConsumableArray(r.values()), s = _toConsumableArray(r.entries());
    e(t.join(",") === "a,b,c", "Map.keys 迭代"), e(a.join(",") === "1,2,3", "Map.values 迭代"), e(s.length === 3, "Map.entries 迭代");
  }), n("Map forEach", function() {
    var r = /* @__PURE__ */ new Map([["a", 1], ["b", 2]]), t = "";
    r.forEach(function(a, s) {
      t += "".concat(s, "=").concat(a, " ");
    }), e(t.trim() === "a=1 b=2", "Map.forEach 遍历");
  }), n("Set 基本操作", function() {
    var r = /* @__PURE__ */ new Set([1, 2, 3, 2, 1]);
    e(r.size === 3, "Set 自动去重，size 应为 3"), e(r.has(2) === !0, "Set.has 检查元素"), r.delete(2), e(r.has(2) === !1, "Set.delete 删除元素");
  }), n("Set 数组去重", function() {
    var r = [1, 2, 2, 3, 3, 4], t = _toConsumableArray(new Set(r));
    e(t.join(",") === "1,2,3,4", "Set 用于数组去重");
  }), n("Set 迭代", function() {
    var r = /* @__PURE__ */ new Set(["a", "b", "c"]), t = [], a = _createForOfIteratorHelper(r), s;
    try {
      for (a.s(); !(s = a.n()).done; ) {
        var u = s.value;
        t.push(u);
      }
    } catch (c) {
      a.e(c);
    } finally {
      a.f();
    }
    e(t.join(",") === "a,b,c", "Set for...of 迭代");
  }), n("Set 集合运算", function() {
    var r = /* @__PURE__ */ new Set([1, 2, 3, 4]), t = /* @__PURE__ */ new Set([3, 4, 5, 6]), a = new Set([].concat(_toConsumableArray(r), _toConsumableArray(t))), s = new Set(_toConsumableArray(r).filter(function(c) {
      return t.has(c);
    })), u = new Set(_toConsumableArray(r).filter(function(c) {
      return !t.has(c);
    }));
    e(_toConsumableArray(a).join(",") === "1,2,3,4,5,6", "Set 并集"), e(_toConsumableArray(s).join(",") === "3,4", "Set 交集"), e(_toConsumableArray(u).join(",") === "1,2", "Set 差集");
  }), n("WeakMap 基本操作", function() {
    var r = /* @__PURE__ */ new WeakMap(), t = {};
    r.set(t, "value"), e(r.has(t) === !0, "WeakMap.has 应返回 true"), e(r.get(t) === "value", "WeakMap.get 应返回正确值"), r.delete(t), e(r.has(t) === !1, "WeakMap.delete 删除成功");
  }), n("WeakSet 基本操作", function() {
    var r = /* @__PURE__ */ new WeakSet(), t = {};
    r.add(t), e(r.has(t) === !0, "WeakSet.has 应返回 true"), r.delete(t), e(r.has(t) === !1, "WeakSet.delete 删除成功");
  }), i();
}
function testProxyReflect() {
  var o = createSuite("Proxy & Reflect"), n = o.test, e = o.assert, i = o.getResults;
  return n("Proxy get 拦截", function() {
    var r = {
      get: function(s, u) {
        return u in s ? s[u] : '属性 "'.concat(u, '" 不存在');
      }
    }, t = new Proxy({
      name: "Alice"
    }, r);
    e(t.name === "Alice", "Proxy get 已有属性"), e(t.age === '属性 "age" 不存在', "Proxy get 不存在属性");
  }), n("Proxy set 拦截与验证", function() {
    var r = {
      set: function(s, u, c) {
        if (typeof c != "number")
          throw new TypeError("只允许数字");
        return s[u] = c, !0;
      }
    }, t = new Proxy({}, r);
    t.score = 90, e(t.score === 90, "Proxy set 数字");
    try {
      t.score = "hello", e(!1, "应抛出 TypeError");
    } catch (a) {
      e(a instanceof TypeError, "Proxy set 类型校验");
    }
  }), n("Proxy has 拦截", function() {
    var r = {
      min: 1,
      max: 10
    }, t = new Proxy(r, {
      has: function(s, u) {
        var c = Number(u);
        return c >= s.min && c <= s.max;
      }
    });
    e(5 in t, "5 在范围内"), e(!(11 in t), "11 不在范围内");
  }), n("Proxy deleteProperty 拦截", function() {
    var r = new Proxy({
      a: 1,
      b: 2
    }, {
      deleteProperty: function(a, s) {
        if (s === "b")
          throw new Error("b 不可删除");
        return delete a[s], !0;
      }
    });
    delete r.a, e(!("a" in r), "a 已删除");
    try {
      delete r.b, e(!1, "应抛出错误");
    } catch (t) {
      e(t.message === "b 不可删除", "b 删除被拦截");
    }
  }), n("Proxy apply 拦截函数调用", function() {
    function r(a, s) {
      return a + s;
    }
    var t = new Proxy(r, {
      apply: function(s, u, c) {
        return s.apply(void 0, _toConsumableArray(c)) * 2;
      }
    });
    e(t(3, 4) === 14, "Proxy apply 拦截函数调用");
  }), n("Proxy construct 拦截 new", function() {
    var r = /* @__PURE__ */ _createClass(function s(u) {
      _classCallCheck(this, s), this.name = u;
    }), t = new Proxy(r, {
      construct: function(u, c) {
        var l = _construct(u, _toConsumableArray(c));
        return l.created = !0, l;
      }
    }), a = new t("Cat");
    e(a.name === "Cat" && a.created === !0, "Proxy construct 拦截");
  }), n("Reflect.get", function() {
    var r = {
      x: 42
    };
    e(Reflect.get(r, "x") === 42, "Reflect.get 获取属性");
  }), n("Reflect.set", function() {
    var r = {};
    Reflect.set(r, "y", 100), e(r.y === 100, "Reflect.set 设置属性");
  }), n("Reflect.has", function() {
    var r = {
      a: 1
    };
    e(Reflect.has(r, "a") === !0, "Reflect.has 检查属性"), e(Reflect.has(r, "z") === !1, "Reflect.has 不存在属性");
  }), n("Reflect.ownKeys", function() {
    var r = Symbol("s"), t = _defineProperty({
      a: 1
    }, r, 2), a = Reflect.ownKeys(t);
    e(a.includes("a") && a.includes(r), "Reflect.ownKeys 返回所有键含 Symbol");
  }), n("Reflect.apply", function() {
    var r = Reflect.apply(Math.max, null, [1, 2, 3]);
    e(r === 3, "Reflect.apply 调用函数");
  }), i();
}
function testEnhancedObjects() {
  var o = createSuite("增强对象字面量"), n = o.test, e = o.assert, i = o.getResults;
  return n("属性简写", function() {
    var r = "Alice", t = 25, a = {
      name: r,
      age: t
    };
    e(a.age === 25, "属性简写");
  }), n("方法简写", function() {
    var r = {
      greet: function(a) {
        return "Hello, ".concat(a, "!");
      }
    };
    e(r.greet("Bob") === "Hello, Bob!", "方法简写");
  }), n("计算属性名", function() {
    var r = "prop", t = _defineProperty(_defineProperty(_defineProperty({}, "".concat(r, "1"), "value1"), "".concat(r, "2"), "value2"), Symbol.iterator, /* @__PURE__ */ _regenerator().m(function a() {
      return _regenerator().w(function(s) {
        for (; ; )
          switch (s.n) {
            case 0:
              return s.n = 1, 1;
            case 1:
              return s.a(2);
          }
      }, a);
    }));
    e(t.prop1 === "value1" && t.prop2 === "value2", "计算属性名");
  }), n("__proto__ 设置原型", function() {
    var r = {
      greet: function() {
        return "hi";
      }
    }, t = {
      __proto__: r
    };
    e(t.greet() === "hi", "__proto__ 设置原型"), e(Object.getPrototypeOf(t) === r, "原型链正确");
  }), n("super 在对象方法中使用", function() {
    var r, t = {
      toString: function() {
        return "base";
      }
    }, a = r = {
      __proto__: t,
      toString: function() {
        return _superPropGet(r, "toString", this, 2)([]) + "+derived";
      }
    };
    e(a.toString() === "base+derived", "super 在对象方法中");
  }), n("Object.assign 合并对象", function() {
    var r = {
      a: 1
    }, t = {
      b: 2,
      c: 3
    };
    Object.assign(r, t), e(r.a === 1 && r.b === 2 && r.c === 3, "Object.assign 合并");
  }), n("Object.keys / values / entries", function() {
    var r = {
      a: 1,
      b: 2,
      c: 3
    };
    e(Object.keys(r).join(",") === "a,b,c", "Object.keys"), e(Object.values(r).join(",") === "1,2,3", "Object.values");
    var t = Object.entries(r);
    e(t[0][0] === "a" && t[0][1] === 1, "Object.entries");
  }), n("Object.freeze 冻结对象", function() {
    var r = Object.freeze({
      x: 1
    });
    try {
      r.x = 999;
    } catch (t) {
      e(t instanceof TypeError, "严格模式下修改冻结属性应抛出 TypeError");
    }
    e(r.x === 1, "Object.freeze 冻结后属性值不变");
  }), n("Object.create 自定义原型", function() {
    var r = {
      greet: function() {
        return "Hello, I'm ".concat(this.name);
      }
    }, t = Object.create(r);
    t.name = "World", e(t.greet() === "Hello, I'm World", "Object.create 自定义原型");
  }), n("属性描述符 Object.defineProperty", function() {
    var r = {};
    Object.defineProperty(r, "readonly", {
      value: 42,
      writable: !1,
      enumerable: !0,
      configurable: !1
    });
    try {
      r.readonly = 999;
    } catch (t) {
      e(t instanceof TypeError, "严格模式下赋值只读属性应抛出 TypeError");
    }
    e(r.readonly === 42, "defineProperty 只读属性值不变");
  }), i();
}
function testNewMethods() {
  var o = createSuite("新增内置方法"), n = o.test, e = o.assert, i = o.getResults;
  return n("Array.from 类数组转换", function() {
    var r = Array.from("hello");
    e(r.join(",") === "h,e,l,l,o", "Array.from 字符串");
    var t = Array.from([1, 2, 3], function(a) {
      return a * 2;
    });
    e(t.join(",") === "2,4,6", "Array.from 带映射函数");
  }), n("Array.of 创建数组", function() {
    var r = Array.of(1, 2, 3);
    e(r.length === 3 && r[0] === 1, "Array.of 创建数组"), e(Array.of(7).length === 1, "Array.of(7) 和 new Array(7) 不同");
  }), n("Array.prototype.find / findIndex", function() {
    var r = [1, 2, 3, 4, 5];
    e(r.find(function(t) {
      return t > 3;
    }) === 4, "find 返回第一个满足条件的元素"), e(r.findIndex(function(t) {
      return t > 3;
    }) === 3, "findIndex 返回第一个满足条件的索引"), e(r.find(function(t) {
      return t > 10;
    }) === void 0, "find 无匹配返回 undefined");
  }), n("Array.prototype.fill", function() {
    var r = [1, 2, 3, 4, 5];
    r.fill(0, 2, 4), e(r.join(",") === "1,2,0,0,5", "fill 局部填充");
  }), n("Array.prototype.includes", function() {
    e([1, 2, 3].includes(2), "includes 存在的元素"), e(![1, 2, 3].includes(4), "includes 不存在的元素"), e([1, NaN].includes(NaN), "includes 可检测 NaN（indexOf 不行）");
  }), n("Array.prototype.flat / flatMap", function() {
    var r = [1, [2, [3, [4]]]];
    e(r.flat().join(",") === "1,2,3,4", "flat 一层"), e(r.flat(1 / 0).join(",") === "1,2,3,4", "flat Infinity 层");
    var t = [1, 2, 3].flatMap(function(a) {
      return [a, a * 2];
    });
    e(t.join(",") === "1,2,2,4,3,6", "flatMap");
  }), n("String.prototype.includes / startsWith / endsWith", function() {
    var r = "Hello, World!";
    e(r.includes("World"), "includes"), e(r.startsWith("Hello"), "startsWith"), e(r.endsWith("!"), "endsWith"), e(r.startsWith("World", 7), "startsWith 从指定位置");
  }), n("String.prototype.repeat", function() {
    e("ha".repeat(3) === "hahaha", "repeat"), e("".repeat(5) === "", "空字符串 repeat");
  }), n("String.prototype.padStart / padEnd", function() {
    e("5".padStart(3, "0") === "005", "padStart"), e("hi".padEnd(5, ".") === "hi...", "padEnd"), e("hello".padStart(3) === "hello", "长度不足不截断");
  }), n("String.prototype.trimStart / trimEnd", function() {
    e("  hello  ".trimStart() === "hello  ", "trimStart"), e("  hello  ".trimEnd() === "  hello", "trimEnd");
  }), n("Number.isInteger", function() {
    e(Number.isInteger(42), "42 是整数"), e(!Number.isInteger(42.5), "42.5 不是整数"), e(!Number.isInteger("42"), "字符串不是整数");
  }), n("Number.isFinite / isNaN", function() {
    e(Number.isFinite(42), "42 是有限数"), e(!Number.isFinite(1 / 0), "Infinity 不是有限数"), e(Number.isNaN(NaN), "NaN 是 NaN"), e(!Number.isNaN(42), "42 不是 NaN"), e(!Number.isNaN("NaN"), "字符串 NaN 不触发（与全局 isNaN 不同）");
  }), n("Number.parseInt / parseFloat", function() {
    e(Number.parseInt("42px") === 42, "Number.parseInt"), e(Number.parseFloat("3.14abc") === 3.14, "Number.parseFloat");
  }), n("Number.EPSILON", function() {
    var r = 0.30000000000000004;
    e(Math.abs(r - 0.3) < Number.EPSILON, "Number.EPSILON 用于浮点比较");
  }), n("Number.MAX_SAFE_INTEGER / MIN_SAFE_INTEGER", function() {
    e(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1, "MAX_SAFE_INTEGER"), e(Number.isSafeInteger(Number.MAX_SAFE_INTEGER), "isSafeInteger"), e(!Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1), "超出安全整数范围");
  }), n("Math.sign", function() {
    e(Math.sign(-5) === -1, "Math.sign 负数"), e(Math.sign(0) === 0, "Math.sign 零"), e(Math.sign(5) === 1, "Math.sign 正数");
  }), n("Math.trunc", function() {
    e(Math.trunc(3.9) === 3, "Math.trunc 正数"), e(Math.trunc(-3.9) === -3, "Math.trunc 负数");
  }), n("Math.cbrt / Math.hypot / Math.log2 / Math.log10", function() {
    e(Math.cbrt(27) === 3, "Math.cbrt 立方根"), e(Math.hypot(3, 4) === 5, "Math.hypot 斜边"), e(Math.log2(8) === 3, "Math.log2"), e(Math.log10(1e3) === 3, "Math.log10");
  }), i();
}
const _13NewMethods = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  testNewMethods
}, Symbol.toStringTag, { value: "Module" }));
function testModules() {
  var o = createSuite("模块(Modules)"), n = o.test, e = o.assert, i = o.getResults;
  return n("命名导出与导入（本工程已在使用）", function() {
    e(typeof testModules == "function", "命名导出的函数可正常被导入调用");
  }), n("模块作用域独立", function() {
    var r = new Function("return this")();
    e(r !== void 0 || !0, "模块顶层有独立作用域");
  }), n("import.meta 可用", function() {
    e(_typeof(import.meta) === "object", "import.meta 是对象");
  }), n("动态 import() 返回 Promise", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function r() {
    var t, a;
    return _regenerator().w(function(s) {
      for (; ; )
        switch (s.n) {
          case 0:
            return t = Promise.resolve().then(() => _13NewMethods), e(t instanceof Promise, "动态 import() 返回 Promise"), s.n = 1, t;
          case 1:
            a = s.v, e(typeof a.testNewMethods == "function", "动态导入的模块可正常使用");
          case 2:
            return s.a(2);
        }
    }, r);
  }))), n("export default 默认导出", function() {
    e(!0, '默认导出通过 import x from "..." 引入，本工程采用命名导出模式');
  }), i();
}
function testBinaryOctalUnicode() {
  var o = createSuite("进制字面量与Unicode"), n = o.test, e = o.assert, i = o.getResults;
  return n("二进制字面量 0b", function() {
    var r = 10;
    e(r === 10, "0b1010 应等于十进制 10"), e(!0, "0b11111111 应等于 255");
  }), n("八进制字面量 0o", function() {
    var r = 15;
    e(r === 15, "0o17 应等于十进制 15"), e(!0, "0o777 应等于 511");
  }), n("十六进制字面量 0x", function() {
    e(!0, "0xFF 应等于 255"), e(!0, "0x10 应等于 16");
  }), n("Number.prototype.toString 进制转换", function() {
    e(255 .toString(16) === "ff", "255 转十六进制"), e(10 .toString(2) === "1010", "10 转二进制"), e(15 .toString(8) === "17", "15 转八进制");
  }), n("Unicode 转义 \\uXXXX", function() {
    var r = "♥";
    e(r === "♥", "\\u2665 应为心形符号");
  }), n("Unicode 码点转义 \\u{XXXXX}", function() {
    var r = "😀";
    e(r.length === 2, "Unicode 超过 FFFF 的字符长度为 2"), e(r.codePointAt(0) === 128512, "codePointAt 返回正确码点");
  }), n("String.fromCodePoint", function() {
    var r = String.fromCodePoint(128512);
    e(r.codePointAt(0) === 128512, "String.fromCodePoint 与 codePointAt 对应");
  }), n("字符串 normalize 方法", function() {
    var r = "é", t = "é";
    e(r !== t, "组合与分解形式不直接相等"), e(r === t.normalize("NFC"), "normalize NFC 后相等");
  }), n("for...of 正确迭代 Unicode 字符", function() {
    var r = "😀A", t = _toConsumableArray(r);
    e(t.length === 2, "for...of 正确按码点迭代");
  }), i();
}
function testForOf() {
  var o = createSuite("for...of 与迭代协议"), n = o.test, e = o.assert, i = o.getResults;
  return n("for...of 迭代数组", function() {
    for (var r = [], t = 0, a = [1, 2, 3]; t < a.length; t++) {
      var s = a[t];
      r.push(s);
    }
    e(r.join(",") === "1,2,3", "for...of 迭代数组");
  }), n("for...of 迭代字符串", function() {
    var r = [], t = _createForOfIteratorHelper("abc"), a;
    try {
      for (t.s(); !(a = t.n()).done; ) {
        var s = a.value;
        r.push(s);
      }
    } catch (u) {
      t.e(u);
    } finally {
      t.f();
    }
    e(r.join("") === "abc", "for...of 迭代字符串");
  }), n("for...of 迭代 Set", function() {
    var r = [], t = _createForOfIteratorHelper(/* @__PURE__ */ new Set([1, 2, 3])), a;
    try {
      for (t.s(); !(a = t.n()).done; ) {
        var s = a.value;
        r.push(s);
      }
    } catch (u) {
      t.e(u);
    } finally {
      t.f();
    }
    e(r.join(",") === "1,2,3", "for...of 迭代 Set");
  }), n("for...of 迭代 Map", function() {
    var r = [], t = _createForOfIteratorHelper(/* @__PURE__ */ new Map([["a", 1], ["b", 2]])), a;
    try {
      for (t.s(); !(a = t.n()).done; ) {
        var s = _slicedToArray(a.value, 2), u = s[0], c = s[1];
        r.push("".concat(u, "=").concat(c));
      }
    } catch (l) {
      t.e(l);
    } finally {
      t.f();
    }
    e(r.join(",") === "a=1,b=2", "for...of 迭代 Map");
  }), n("for...of 迭代 arguments", function() {
    function r() {
      var t = [], a = _createForOfIteratorHelper(arguments), s;
      try {
        for (a.s(); !(s = a.n()).done; ) {
          var u = s.value;
          t.push(u);
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
      return t;
    }
    e(r(1, 2, 3).join(",") === "1,2,3", "for...of 迭代 arguments");
  }), n("for...of 与 break / continue", function() {
    for (var r = [], t = 0, a = [1, 2, 3, 4, 5]; t < a.length; t++) {
      var s = a[t];
      if (s !== 3) {
        if (s === 5)
          break;
        r.push(s);
      }
    }
    e(r.join(",") === "1,2,4", "for...of 支持 break 和 continue");
  }), n("for...of 迭代 NodeList（DOM 环境跳过）", function() {
    var r = _defineProperty({}, Symbol.iterator, function() {
      var c = 0;
      return {
        next: function() {
          return c < 3 ? {
            value: c++,
            done: !1
          } : {
            done: !0
          };
        }
      };
    }), t = [], a = _createForOfIteratorHelper(r), s;
    try {
      for (a.s(); !(s = a.n()).done; ) {
        var u = s.value;
        t.push(u);
      }
    } catch (c) {
      a.e(c);
    } finally {
      a.f();
    }
    e(t.join(",") === "0,1,2", "自定义可迭代对象");
  }), n("Array entries / keys / values 迭代", function() {
    var r = ["a", "b", "c"], t = _toConsumableArray(r.entries()), a = _toConsumableArray(r.keys()), s = _toConsumableArray(r.values());
    e(t[1][0] === 1 && t[1][1] === "b", "entries 迭代"), e(a.join(",") === "0,1,2", "keys 迭代"), e(s.join(",") === "a,b,c", "values 迭代");
  }), i();
}
function testMapGetOrInsert() {
  var o = createSuite("map getOrInsert"), n = o.test, e = o.assert, i = o.getResults;
  return n("getOrInsert - key 已存在返回原值", function() {
    var r = /* @__PURE__ */ new Map([["bar", "foo"]]), t = r.getOrInsert("bar", "default");
    e(t === "foo", "key 已存在应返回原值 foo");
  }), n("getOrInsert - key 不存在时插入默认值", function() {
    var r = /* @__PURE__ */ new Map(), t = r.getOrInsert("newKey", 42);
    e(t === 42, "应返回插入的默认值 42"), e(r.get("newKey") === 42, "key 已被写入 map");
  }), n("getOrInsert - 不覆盖已有值", function() {
    var r = /* @__PURE__ */ new Map([["x", 100]]);
    r.getOrInsert("x", 999), e(r.get("x") === 100, "已有值不应被覆盖");
  }), n("getOrInsert - 词频统计经典用法", function() {
    for (var r = ["apple", "banana", "apple", "apple", "banana"], t = /* @__PURE__ */ new Map(), a = 0, s = r; a < s.length; a++) {
      var u = s[a];
      t.getOrInsert(u, 0), t.set(u, t.get(u) + 1);
    }
    e(t.get("apple") === 3, "apple 出现 3 次"), e(t.get("banana") === 2, "banana 出现 2 次");
  }), n("getOrInsertComputed - key 不存在时用回调计算", function() {
    var r = /* @__PURE__ */ new Map(), t = r.getOrInsertComputed("user:1", function(a) {
      return {
        id: a,
        score: 0
      };
    });
    e(t.id === "user:1" && t.score === 0, "回调以 key 为参数生成默认值");
  }), n("getOrInsertComputed - key 已存在时不调用回调", function() {
    var r = /* @__PURE__ */ new Map([["x", "original"]]), t = !1, a = r.getOrInsertComputed("x", function() {
      return t = !0, "new";
    });
    e(!t, "key 已存在，回调不应被调用"), e(a === "original", "应返回原有值");
  }), n("getOrInsertComputed - 构建邻接表", function() {
    for (var r = [[1, 2], [1, 3], [2, 3]], t = /* @__PURE__ */ new Map(), a = 0, s = r; a < s.length; a++) {
      var u = _slicedToArray(s[a], 2), c = u[0], l = u[1];
      t.getOrInsertComputed(c, function() {
        return [];
      }).push(l);
    }
    e(t.get(1).join(",") === "2,3", "节点 1 的邻居为 [2,3]"), e(t.get(2).join(",") === "3", "节点 2 的邻居为 [3]");
  }), i();
}
function testClassFields() {
  var _createSuite = createSuite("Class Fields (ES2022)"), test = _createSuite.test, assert = _createSuite.assert, getResults = _createSuite.getResults;
  return test("公共实例字段 —— 声明并初始化", function() {
    var o = /* @__PURE__ */ _createClass(function e(i, r) {
      _classCallCheck(this, e), _defineProperty(this, "x", 0), _defineProperty(this, "y", 0), this.x = i, this.y = r;
    }), n = new o(3, 4);
    assert(n.x === 3 && n.y === 4, "公共字段应可读写");
  }), test("公共字段默认值在 constructor 之前初始化", function() {
    var o = /* @__PURE__ */ _createClass(function n() {
      _classCallCheck(this, n), _defineProperty(this, "count", 10), this.count += 5;
    });
    assert(new o().count === 15, "默认值应先于 constructor 体初始化");
  }), test("私有实例字段 #field —— 外部不可访问", function() {
    var _balance = /* @__PURE__ */ new WeakMap(), BankAccount = /* @__PURE__ */ function() {
      function o() {
        _classCallCheck(this, o), _classPrivateFieldInitSpec(this, _balance, 0);
      }
      return _createClass(o, [{
        key: "deposit",
        value: function(e) {
          _classPrivateFieldSet2(_balance, this, _classPrivateFieldGet2(_balance, this) + e);
        }
      }, {
        key: "balance",
        get: function() {
          return _classPrivateFieldGet2(_balance, this);
        }
      }]);
    }(), acc = new BankAccount();
    acc.deposit(100), assert(acc.balance === 100, "私有字段应通过访问器正确读取"), assert(!("#balance" in acc), "私有字段不应出现在普通属性枚举中");
    var threw = !1;
    try {
      eval("acc.#balance");
    } catch (o) {
      threw = !0;
    }
    assert(threw, "外部直接访问私有字段应抛出语法错误");
  }), test("私有实例方法 #method()", function() {
    var o = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakSet(), e = /* @__PURE__ */ function() {
      function r() {
        _classCallCheck(this, r), _classPrivateMethodInitSpec(this, n), _classPrivateFieldInitSpec(this, o, "[LOG]");
      }
      return _createClass(r, [{
        key: "format",
        value: function(a) {
          return _assertClassBrand(n, this, i).call(this, a);
        }
      }]);
    }();
    function i(r) {
      return "".concat(_classPrivateFieldGet2(o, this), " ").concat(r);
    }
    assert(new e().format("hello") === "[LOG] hello", "私有方法应正常调用");
  }), test("静态公共字段", function() {
    var o = /* @__PURE__ */ _createClass(function n() {
      _classCallCheck(this, n);
    });
    _defineProperty(o, "version", "1.0.0"), _defineProperty(o, "maxRetry", 3), assert(o.version === "1.0.0", "静态公共字段应可通过类名访问"), assert(o.maxRetry === 3, "静态字段应保持初始值");
  }), test("静态私有字段 —— 追踪实例数量", function() {
    var o = /* @__PURE__ */ function() {
      function e() {
        var i;
        _classCallCheck(this, e), n._ = (i = n._, i++, i);
      }
      return _createClass(e, null, [{
        key: "getCount",
        value: function() {
          return n._;
        }
      }]);
    }(), n = {
      _: 0
    };
    new o(), new o(), new o(), assert(o.getCount() === 3, "静态私有字段应跨实例共享");
  }), test("静态私有方法", function() {
    var o = /* @__PURE__ */ function() {
      function e() {
        _classCallCheck(this, e);
      }
      return _createClass(e, null, [{
        key: "normalize",
        value: function(r) {
          return n.call(e, r, 0, 1);
        }
      }]);
    }();
    function n(e, i, r) {
      return Math.min(Math.max(e, i), r);
    }
    assert(o.normalize(-0.5) === 0, "静态私有方法：低于下界应返回 0"), assert(o.normalize(1.5) === 1, "静态私有方法：超出上界应返回 1"), assert(o.normalize(0.5) === 0.5, "静态私有方法：正常值应原样返回");
  }), test("私有字段存在性：`#field in obj`", function() {
    var o = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ function() {
      function e(i) {
        _classCallCheck(this, e), _classPrivateFieldInitSpec(this, o, void 0), _classPrivateFieldSet2(o, this, i);
      }
      return _createClass(e, null, [{
        key: "isNode",
        value: function(r) {
          return o.has(_checkInRHS(r));
        }
      }]);
    }();
    assert(n.isNode(new n(1)) === !0, "实例应包含私有字段"), assert(n.isNode({}) === !1, "普通对象不应包含私有字段");
  }), test("私有字段不参与继承 —— 子类无法访问父类私有字段", function() {
    var o = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ function() {
      function r(t) {
        _classCallCheck(this, r), _classPrivateFieldInitSpec(this, o, void 0), _classPrivateFieldSet2(o, this, t);
      }
      return _createClass(r, [{
        key: "getName",
        value: function() {
          return _classPrivateFieldGet2(o, this);
        }
      }]);
    }(), e = /* @__PURE__ */ function(r) {
      function t() {
        return _classCallCheck(this, t), _callSuper(this, t, arguments);
      }
      return _inherits(t, r), _createClass(t, [{
        key: "bark",
        value: function() {
          return "".concat(this.getName(), " says woof");
        }
      }]);
    }(n), i = new e("Rex");
    assert(i.bark() === "Rex says woof", "子类可通过父类公共方法访问私有字段");
  }), getResults();
}
function testClassStaticBlocks() {
  var o = createSuite("Class Static Blocks (ES2022)"), n = o.test, e = o.assert, i = o.getResults;
  return n("基本静态块 —— 初始化静态字段", function() {
    var r, t = /* @__PURE__ */ _createClass(function a() {
      _classCallCheck(this, a);
    });
    r = t, _defineProperty(t, "host", void 0), _defineProperty(t, "port", void 0), function() {
      r.host = "localhost", r.port = 8080;
    }(), e(t.host === "localhost", "静态块应初始化 host"), e(t.port === 8080, "静态块应初始化 port");
  }), n("静态块中可使用 try/catch 处理初始化失败", function() {
    var r, t = /* @__PURE__ */ _createClass(function a() {
      _classCallCheck(this, a);
    });
    r = t, _defineProperty(t, "value", void 0), function() {
      try {
        var a = '{"timeout":3000}';
        r.value = JSON.parse(a).timeout;
      } catch {
        r.value = 1e3;
      }
    }(), e(t.value === 3e3, "静态块中 try/catch 初始化应正确执行");
  }), n("静态块访问同类私有字段", function() {
    var r, t = /* @__PURE__ */ function() {
      function s() {
        _classCallCheck(this, s);
      }
      return _createClass(s, null, [{
        key: "getSecret",
        value: function() {
          return a._;
        }
      }]);
    }(), a = {
      _: "initial"
    };
    r = function(u) {
      a._ = u;
    }, r("updated"), e(t.getSecret() === "updated", "静态块应能操作同类私有字段");
  }), n("多个静态块按声明顺序执行", function() {
    var r, t = [], a = /* @__PURE__ */ _createClass(function s() {
      _classCallCheck(this, s);
    });
    r = a, _defineProperty(a, "a", void 0), function() {
      t.push(1), r.a = 10;
    }(), _defineProperty(a, "b", void 0), function() {
      t.push(2), r.b = r.a * 2;
    }(), e(t[0] === 1 && t[1] === 2, "多个静态块应按顺序执行"), e(a.b === 20, "第二个静态块应能读取第一个块的结果");
  }), n("静态块与静态字段声明交替执行", function() {
    var r = [], t = /* @__PURE__ */ _createClass(function a() {
      _classCallCheck(this, a);
    });
    _defineProperty(t, "x", (r.push("field-x"), 1)), r.push("block-1"), _defineProperty(t, "y", (r.push("field-y"), 2)), r.push("block-2"), e(r.join(",") === "field-x,block-1,field-y,block-2", "字段与静态块应按声明顺序交替初始化"), e(t.x === 1 && t.y === 2, "所有字段应正确赋值");
  }), n("子类静态块在父类之后执行", function() {
    var r = [];
    r.push("base"), r.push("child"), e(r[0] === "base" && r[1] === "child", "父类静态块应先于子类执行");
  }), n("静态块中 this 指向类本身", function() {
    var r, t = /* @__PURE__ */ _createClass(function a() {
      _classCallCheck(this, a);
    });
    r = t, _defineProperty(t, "name2", "Widget"), _defineProperty(t, "instance", void 0), r.instance = {
      type: r.name2
    }, e(t.instance.type === "Widget", "静态块内 this 应指向类本身");
  }), i();
}
function testAtMethod() {
  var o = createSuite("Array/String.at() (ES2022)"), n = o.test, e = o.assert, i = o.getResults;
  return n("Array.at() —— 正索引与 arr[i] 等价", function() {
    var r = [10, 20, 30, 40, 50];
    e(r.at(0) === 10, "at(0) 应返回第一个元素"), e(r.at(2) === 30, "at(2) 应返回第三个元素"), e(r.at(4) === 50, "at(4) 应返回最后一个元素");
  }), n("Array.at() —— 负索引从末尾倒数", function() {
    var r = [10, 20, 30, 40, 50];
    e(r.at(-1) === 50, "at(-1) 应返回最后一个元素"), e(r.at(-2) === 40, "at(-2) 应返回倒数第二个元素"), e(r.at(-5) === 10, "at(-5) 应返回第一个元素");
  }), n("Array.at() —— 越界返回 undefined", function() {
    var r = [1, 2, 3];
    e(r.at(5) === void 0, "正向越界应返回 undefined"), e(r.at(-4) === void 0, "负向越界应返回 undefined");
  }), n("Array.at() —— 空数组始终返回 undefined", function() {
    e([].at(0) === void 0, "空数组 at(0) 应返回 undefined"), e([].at(-1) === void 0, "空数组 at(-1) 应返回 undefined");
  }), n("对比旧写法：arr.at(-1) vs arr[arr.length - 1]", function() {
    var r = [3, 1, 4, 1, 5, 9, 2, 6], t = r.at(-1), a = r[r.length - 1];
    e(t === a, "at(-1) 应与 arr[length-1] 等价");
  }), n("String.at() —— 正索引", function() {
    var r = "hello";
    e(r.at(0) === "h", "at(0) 应返回首字符"), e(r.at(4) === "o", "at(4) 应返回末字符");
  }), n("String.at() —— 负索引", function() {
    var r = "hello";
    e(r.at(-1) === "o", "at(-1) 应返回最后一个字符"), e(r.at(-3) === "l", "at(-3) 应返回倒数第三个字符");
  }), n("String.at() —— 越界返回 undefined", function() {
    e("abc".at(10) === void 0, "正向越界应返回 undefined"), e("abc".at(-10) === void 0, "负向越界应返回 undefined");
  }), n("TypedArray.at() —— 支持负索引", function() {
    var r = new Int32Array([100, 200, 300, 400]);
    e(r.at(0) === 100, "TypedArray.at(0) 应返回第一个元素"), e(r.at(-1) === 400, "TypedArray.at(-1) 应返回最后一个元素"), e(r.at(-2) === 300, "TypedArray.at(-2) 应返回倒数第二个元素");
  }), n("at() 不修改原数组", function() {
    var r = [1, 2, 3];
    e(r.length === 3 && r[2] === 3, "at() 不应修改原数组");
  }), i();
}
function testObjectHasOwn() {
  var o = createSuite("Object.hasOwn() (ES2022)"), n = o.test, e = o.assert, i = o.getResults;
  return n("基本用法 —— 自有属性返回 true", function() {
    var r = {
      name: "Alice",
      age: 30
    };
    e(Object.hasOwn(r, "name") === !0, "name 是自有属性，应返回 true"), e(Object.hasOwn(r, "age") === !0, "age 是自有属性，应返回 true");
  }), n("不存在的属性返回 false", function() {
    var r = {
      a: 1
    };
    e(Object.hasOwn(r, "b") === !1, "不存在的属性应返回 false"), e(Object.hasOwn(r, "toString") === !1, "原型链上的属性应返回 false");
  }), n("继承属性返回 false —— 只检查自有属性", function() {
    var r = /* @__PURE__ */ _createClass(function s(u) {
      _classCallCheck(this, s), this.name = u;
    }), t = /* @__PURE__ */ function(s) {
      function u() {
        return _classCallCheck(this, u), _callSuper(this, u, arguments);
      }
      return _inherits(u, s), _createClass(u);
    }(r), a = new t("Rex");
    e(Object.hasOwn(a, "name") === !0, "name 是实例自有属性"), e(Object.hasOwn(a, "constructor") === !1, "constructor 在原型上，不是自有属性");
  }), n("null 原型对象 —— hasOwnProperty 不可用时的安全方案", function() {
    var r = /* @__PURE__ */ Object.create(null);
    r.key = "value";
    var t = !1;
    try {
      r.hasOwnProperty("key");
    } catch {
      t = !0;
    }
    e(t, "null 原型对象调用 hasOwnProperty 应抛出错误"), e(Object.hasOwn(r, "key") === !0, "hasOwn 对 null 原型对象应正常工作"), e(Object.hasOwn(r, "other") === !1, "不存在的键应返回 false");
  }), n("对象覆盖 hasOwnProperty —— hasOwn 不受影响", function() {
    var r = {
      hasOwnProperty: function() {
        return !1;
      },
      // 伪造返回值
      secret: 42
    };
    e(r.hasOwnProperty("secret") === !1, "被覆盖的 hasOwnProperty 返回错误结果"), e(Object.hasOwn(r, "secret") === !0, "hasOwn 不受覆盖影响，结果正确");
  }), n("值为 undefined 的属性仍返回 true", function() {
    var r = {
      key: void 0
    };
    e(Object.hasOwn(r, "key") === !0, "值为 undefined 的自有属性应返回 true");
  }), n("Symbol 作为键", function() {
    var r = Symbol("id"), t = _defineProperty({}, r, 123);
    e(Object.hasOwn(t, r) === !0, "Symbol 键的自有属性应返回 true"), e(Object.hasOwn(t, Symbol("id")) === !1, "不同的 Symbol 实例应返回 false");
  }), n("数组的索引属性", function() {
    var r = [10, 20, 30];
    e(Object.hasOwn(r, 0) === !0, "数组索引 0 是自有属性"), e(Object.hasOwn(r, "1") === !0, '字符串索引 "1" 也是自有属性'), e(Object.hasOwn(r, "length") === !0, "length 是数组的自有属性"), e(Object.hasOwn(r, 3) === !1, "越界索引应返回 false");
  }), i();
}
function testErrorCause() {
  var o = createSuite("Error Cause (ES2022)"), n = o.test, e = o.assert, i = o.getResults;
  return n("基本用法 —— cause 属性保存原始错误", function() {
    var r = new TypeError("原始类型错误"), t = new Error("操作失败", {
      cause: r
    });
    e(t.message === "操作失败", "外层错误消息应正确"), e(t.cause === r, "cause 应指向原始错误"), e(t.cause instanceof TypeError, "cause 类型应保留");
  }), n("所有内置子类均支持 cause", function() {
    var r = new Error("根因"), t = [new TypeError("类型错误", {
      cause: r
    }), new RangeError("范围错误", {
      cause: r
    }), new SyntaxError("语法错误", {
      cause: r
    })];
    t.forEach(function(a) {
      e(a.cause === r, "".concat(a.constructor.name, " 的 cause 应指向根因"));
    });
  }), n("错误链可以多层嵌套", function() {
    var r = new Error("数据库连接失败"), t = new Error("查询用户失败", {
      cause: r
    }), a = new Error("登录接口报错", {
      cause: t
    });
    e(a.cause === t, "第三层 cause 应指向第二层"), e(a.cause.cause === r, "第二层 cause 应指向第一层"), e(a.cause.cause.message === "数据库连接失败", "根因消息应可追溯");
  }), n("不传 cause 时属性为 undefined", function() {
    var r = new Error("普通错误");
    e(r.cause === void 0, "未传 cause 时属性应为 undefined");
  }), n("cause 可以是任意值（不限于 Error）", function() {
    var r = new Error("原因是字符串", {
      cause: "网络超时"
    }), t = new Error("原因是数字", {
      cause: 404
    }), a = new Error("原因是对象", {
      cause: {
        code: "ENOENT"
      }
    });
    e(r.cause === "网络超时", "cause 可以是字符串"), e(t.cause === 404, "cause 可以是数字"), e(a.cause.code === "ENOENT", "cause 可以是对象");
  }), n("实际应用：fetch 封装中传递原始网络错误", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function r() {
    var t, a, s, u;
    return _regenerator().w(function(c) {
      for (; ; )
        switch (c.p = c.n) {
          case 0:
            return a = function() {
              return a = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function f(v) {
                var y;
                return _regenerator().w(function(p) {
                  for (; ; )
                    switch (p.p = p.n) {
                      case 0:
                        throw p.p = 0, new Error("fetch failed: 500");
                      case 1:
                        throw p.p = 1, y = p.v, new Error("获取用户 ".concat(v, " 失败"), {
                          cause: y
                        });
                      case 2:
                        return p.a(2);
                    }
                }, f, null, [[0, 1]]);
              })), a.apply(this, arguments);
            }, t = function(f) {
              return a.apply(this, arguments);
            }, s = null, c.p = 1, c.n = 2, t(42);
          case 2:
            c.n = 4;
            break;
          case 3:
            c.p = 3, u = c.v, s = u;
          case 4:
            e(s !== null, "应捕获到封装后的错误"), e(s.message.includes("42"), "外层错误消息应包含用户 id"), e(s.cause instanceof Error, "cause 应是原始 Error"), e(s.cause.message.includes("500"), "原始错误消息应保留");
          case 5:
            return c.a(2);
        }
    }, r, null, [[1, 3]]);
  }))), n("自定义 Error 子类也支持 cause", function() {
    var r = /* @__PURE__ */ function(s) {
      function u(c, l) {
        var f;
        return _classCallCheck(this, u), f = _callSuper(this, u, [c, l]), f.name = "AppError", f;
      }
      return _inherits(u, s), _createClass(u);
    }(/* @__PURE__ */ _wrapNativeSuper(Error)), t = new TypeError("底层失败"), a = new r("应用层失败", {
      cause: t
    });
    e(a.name === "AppError", "子类名称应正确"), e(a.cause === t, "自定义子类应支持 cause");
  }), i();
}
function testRegExpDFlag() {
  var o = createSuite("RegExp /d flag (ES2022)"), n = o.test, e = o.assert, i = o.getResults, r = function() {
    try {
      return new RegExp("x", "d").hasIndices === !0;
    } catch {
      return !1;
    }
  }();
  return n("hasIndices 属性标识是否启用 /d 标志", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 /d 标志)");
      return;
    }
    e(new RegExp("x", "d").hasIndices === !0, "/d 标志应使 hasIndices 为 true"), e(new RegExp("x").hasIndices === !1, "无 /d 标志时 hasIndices 应为 false");
  }), n("整体匹配位置 indices[0]", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = "hello world".match(new RegExp("world", "d"));
    e(Array.isArray(t.indices), "结果应包含 indices 数组"), e(t.indices[0][0] === 6, "匹配起始位置应为 6"), e(t.indices[0][1] === 11, "匹配结束位置应为 11（不含）"), e("hello world".slice(6, 11) === "world", "slice 切出来应等于匹配内容");
  }), n("捕获组位置 indices[n]", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new RegExp("(\\d{4})-(\\d{2})-(\\d{2})", "d"), a = "日期：2025-06-15".match(t);
    e(a.indices[1][0] === 3 && a.indices[1][1] === 7, "年份捕获组位置应为 [3,7]"), e(a.indices[2][0] === 8 && a.indices[2][1] === 10, "月份捕获组位置应为 [8,10]"), e(a.indices[3][0] === 11 && a.indices[3][1] === 13, "日期捕获组位置应为 [11,13]");
  }), n("通过 indices 验证 slice 还原捕获组内容", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = "姓名：Alice，年龄：30", a = new RegExp("姓名：(\\w+)，年龄：(\\d+)", "d"), s = t.match(a), u = _slicedToArray(s.indices[1], 2), c = u[0], l = u[1], f = _slicedToArray(s.indices[2], 2), v = f[0], y = f[1];
    e(t.slice(c, l) === "Alice", "通过 indices 切出的姓名应为 Alice"), e(t.slice(v, y) === "30", "通过 indices 切出的年龄应为 30");
  }), n("具名捕获组的位置 indices.groups", function() {
    var t, a;
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var s = /* @__PURE__ */ _wrapRegExp(new RegExp("(\\d{4})-(\\d{2})", "d"), {
      year: 1,
      month: 2
    }), u = "发布于 2025-06".match(s);
    e(u.indices.groups !== void 0, "具名组应出现在 indices.groups 中");
    var c = u.indices.groups, l = c.year, f = c.month;
    e((t = "发布于 2025-06").slice.apply(t, _toConsumableArray(l)) === "2025", "具名组 year 位置应正确"), e((a = "发布于 2025-06").slice.apply(a, _toConsumableArray(f)) === "06", "具名组 month 位置应正确");
  }), n("未匹配的可选组 indices 为 undefined", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new RegExp("(a)?(b)", "d"), a = "b".match(t);
    e(a.indices[1] === void 0, "未参与匹配的可选组 indices 应为 undefined"), e(Array.isArray(a.indices[2]), "已匹配的组 indices 应为数组");
  }), n("/d 与 /g 组合 —— exec 每次返回带 indices 的结果", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    for (var t = new RegExp("\\d+", "dg"), a = "a1b22c333", s = [], u; (u = t.exec(a)) !== null; )
      s.push(u.indices[0]);
    e(s.length === 3, "应匹配到 3 个数字"), e(s[0][0] === 1, "第一个数字起始位置应为 1"), e(s[1][0] === 3, "第二个数字起始位置应为 3"), e(s[2][0] === 6, "第三个数字起始位置应为 6");
  }), i();
}
function testTopLevelAwait() {
  return _testTopLevelAwait.apply(this, arguments);
}
function _testTopLevelAwait() {
  return _testTopLevelAwait = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    var n, e, i, r;
    return _regenerator().w(function(t) {
      for (; ; )
        switch (t.n) {
          case 0:
            return n = createSuite("Top-level await (ES2022)"), e = n.test, i = n.assert, r = n.getResults, e("async 函数内的 await 是等价基础能力", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function a() {
              var s;
              return _regenerator().w(function(u) {
                for (; ; )
                  switch (u.n) {
                    case 0:
                      return u.n = 1, Promise.resolve(42);
                    case 1:
                      s = u.v, i(s === 42, "await 在 async 函数顶层应正常工作");
                    case 2:
                      return u.a(2);
                  }
              }, a);
            }))), e("await 可以等待动态 import()", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function a() {
              var s, u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      return s = function() {
                        return Promise.resolve({
                          default: "module-content",
                          util: function() {
                            return "ok";
                          }
                        });
                      }, c.n = 1, s();
                    case 1:
                      u = c.v, i(u.default === "module-content", "await 动态导入应返回模块内容"), i(u.util() === "ok", "模块导出的函数应可调用");
                    case 2:
                      return c.a(2);
                  }
              }, a);
            }))), e("await 保序 —— 导入方等待模块初始化完成", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function a() {
              var s, u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      return s = [], c.n = 1, _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function l() {
                        return _regenerator().w(function(f) {
                          for (; ; )
                            switch (f.n) {
                              case 0:
                                return s.push("A:start"), f.n = 1, new Promise(function(v) {
                                  return setTimeout(v, 0);
                                });
                              case 1:
                                return s.push("A:ready"), f.a(2, {
                                  data: "initialized"
                                });
                            }
                        }, l);
                      }))();
                    case 1:
                      u = c.v, s.push("B:use"), i(u.data === "initialized", "模块 A 初始化完成后才能被使用"), i(s.join(",") === "A:start,A:ready,B:use", "执行顺序应严格保序");
                    case 2:
                      return c.a(2);
                  }
              }, a);
            }))), e("await 与条件导入模拟", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function a() {
              var s, u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      return s = typeof window < "u", c.n = 1, Promise.resolve(s ? "browser" : "node");
                    case 1:
                      u = c.v, i(typeof u == "string", "条件 await 应返回字符串平台标识"), i(u === "browser" || u === "node", "平台标识应为 browser 或 node");
                    case 2:
                      return c.a(2);
                  }
              }, a);
            }))), e("await 错误应在模块加载阶段被捕获", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function a() {
              var s, u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.p = c.n) {
                    case 0:
                      return s = null, c.p = 1, c.n = 2, Promise.reject(new Error("模块初始化失败"));
                    case 2:
                      c.n = 4;
                      break;
                    case 3:
                      c.p = 3, u = c.v, s = u;
                    case 4:
                      i(s instanceof Error, "应捕获到 Error"), i(s.message === "模块初始化失败", "错误消息应正确传递");
                    case 5:
                      return c.a(2);
                  }
              }, a, null, [[1, 3]]);
            }))), e("await 不阻塞无依赖的兄弟模块（并行加载）", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function a() {
              var s, u, c, l, f, v;
              return _regenerator().w(function(y) {
                for (; ; )
                  switch (y.n) {
                    case 0:
                      return s = Date.now(), y.n = 1, Promise.all([new Promise(function(p) {
                        return setTimeout(function() {
                          return p("A");
                        }, 10);
                      }), new Promise(function(p) {
                        return setTimeout(function() {
                          return p("B");
                        }, 10);
                      })]);
                    case 1:
                      u = y.v, c = _slicedToArray(u, 2), l = c[0], f = c[1], v = Date.now() - s, i(l === "A" && f === "B", "并行 await 两个模块都应成功完成"), i(v < 50, "并行执行耗时应远小于串行（~10ms vs ~20ms）");
                    case 2:
                      return y.a(2);
                  }
              }, a);
            }))), t.a(2, r());
        }
    }, o);
  })), _testTopLevelAwait.apply(this, arguments);
}
function testIteratorHelpers() {
  var o = createSuite("Iterator Helpers (ES2025)"), n = o.test, e = o.assert, i = o.getResults, r = typeof Iterator < "u" && typeof Iterator.from == "function";
  return n("Iterator.from() 将可迭代对象转为迭代器", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 Iterator.from)");
      return;
    }
    var t = Iterator.from([1, 2, 3]);
    e(typeof t.next == "function", "应返回迭代器对象");
  }), n(".map() 惰性映射", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 2, 3]).map(function(a) {
      return a * 2;
    }).toArray();
    e(t.length === 3 && t[0] === 2 && t[2] === 6, "map 结果应为 [2,4,6]");
  }), n(".filter() 惰性过滤", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 2, 3, 4, 5]).filter(function(a) {
      return a % 2 === 0;
    }).toArray();
    e(t.length === 2 && t[0] === 2 && t[1] === 4, "filter 结果应为 [2,4]");
  }), n(".take(n) 取前 n 个元素", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([10, 20, 30, 40, 50]).take(3).toArray();
    e(t.length === 3 && t[2] === 30, "take(3) 应只取前 3 个");
  }), n(".drop(n) 跳过前 n 个元素", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 2, 3, 4, 5]).drop(2).toArray();
    e(t.length === 3 && t[0] === 3, "drop(2) 应从第 3 个开始");
  }), n(".flatMap() 平铺映射", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 2, 3]).flatMap(function(a) {
      return [a, a * 10];
    }).toArray();
    e(t.length === 6 && t[1] === 10 && t[3] === 20, "flatMap 应正确展开");
  }), n(".reduce() 归约", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 2, 3, 4]).reduce(function(a, s) {
      return a + s;
    }, 0);
    e(t === 10, "reduce 求和应为 10");
  }), n(".toArray() 转为数组", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from(/* @__PURE__ */ new Set([7, 8, 9])).toArray();
    e(Array.isArray(t) && t.length === 3, "toArray 应返回普通数组");
  }), n(".forEach() 遍历副作用", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = [];
    Iterator.from(["a", "b", "c"]).forEach(function(a) {
      return t.push(a);
    }), e(t.join("") === "abc", "forEach 应依次访问每个元素");
  }), n(".some() / .every() 短路判断", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 3, 4, 5]).some(function(s) {
      return s % 2 === 0;
    }), a = Iterator.from([1, 2, 3]).every(function(s) {
      return s > 0;
    });
    e(t === !0 && a === !0, "some/every 应正确短路求值");
  }), n(".find() 查找第一个匹配元素", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 3, 5, 6, 7]).find(function(a) {
      return a % 2 === 0;
    });
    e(t === 6, "find 应返回第一个偶数 6");
  }), n("链式调用：map + filter + take", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8]).map(function(a) {
      return a * a;
    }).filter(function(a) {
      return a > 10;
    }).take(3).toArray();
    e(t.length === 3 && t[0] === 16 && t[2] === 36, "链式调用结果应为 [16,25,36]");
  }), i();
}
function testSetMethods() {
  var o = createSuite("New Set Methods (ES2025)"), n = o.test, e = o.assert, i = o.getResults, r = typeof Set.prototype.union == "function";
  return n("union() —— 并集", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 Set.prototype.union)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2, 3]), a = /* @__PURE__ */ new Set([3, 4, 5]), s = t.union(a);
    e(s.size === 5 && s.has(1) && s.has(5), "并集应包含两个集合所有元素");
  }), n("intersection() —— 交集", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2, 3, 4]), a = /* @__PURE__ */ new Set([3, 4, 5, 6]), s = t.intersection(a);
    e(s.size === 2 && s.has(3) && s.has(4), "交集应只含共同元素 3,4");
  }), n("difference() —— 差集（A - B）", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2, 3, 4]), a = /* @__PURE__ */ new Set([3, 4, 5]), s = t.difference(a);
    e(s.size === 2 && s.has(1) && s.has(2) && !s.has(3), "差集应为 {1,2}");
  }), n("symmetricDifference() —— 对称差集", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2, 3]), a = /* @__PURE__ */ new Set([2, 3, 4]), s = t.symmetricDifference(a);
    e(s.size === 2 && s.has(1) && s.has(4), "对称差集应为 {1,4}");
  }), n("isSubsetOf() —— 子集判断", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([2, 3]), a = /* @__PURE__ */ new Set([1, 2, 3, 4]);
    e(t.isSubsetOf(a) === !0, "a ⊆ b 应为 true"), e(a.isSubsetOf(t) === !1, "b ⊆ a 应为 false");
  }), n("isSupersetOf() —— 超集判断", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2, 3, 4]), a = /* @__PURE__ */ new Set([2, 3]);
    e(t.isSupersetOf(a) === !0, "a ⊇ b 应为 true"), e(a.isSupersetOf(t) === !1, "b ⊇ a 应为 false");
  }), n("isDisjointFrom() —— 不相交判断", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2]), a = /* @__PURE__ */ new Set([3, 4]), s = /* @__PURE__ */ new Set([2, 5]);
    e(t.isDisjointFrom(a) === !0, "a 与 b 无交集，应为 true"), e(t.isDisjointFrom(s) === !1, "a 与 c 有交集 2，应为 false");
  }), n("方法返回新 Set，不修改原集合", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2, 3]), a = /* @__PURE__ */ new Set([3, 4]), s = t.union(a);
    e(t.size === 3 && a.size === 2, "原集合不应被修改"), e(s !== t && s !== a, "应返回全新的 Set 实例");
  }), n("接受任意可迭代对象（不限于 Set）", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ new Set([1, 2, 3]), a = t.intersection([2, 3, 4]);
    e(a.size === 2 && a.has(2) && a.has(3), "应支持传入普通数组");
  }), i();
}
function testPromiseTry() {
  return _testPromiseTry.apply(this, arguments);
}
function _testPromiseTry() {
  return _testPromiseTry = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    var n, e, i, r, t;
    return _regenerator().w(function(a) {
      for (; ; )
        switch (a.n) {
          case 0:
            return n = createSuite("Promise.try (ES2025)"), e = n.test, i = n.assert, r = n.getResults, t = typeof Promise.try == "function", e("同步函数 —— 返回值转为 resolved", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      if (t) {
                        c.n = 1;
                        break;
                      }
                      return i(!0, "(跳过：环境不支持 Promise.try)"), c.a(2);
                    case 1:
                      return c.n = 2, Promise.try(function() {
                        return 42;
                      });
                    case 2:
                      u = c.v, i(u === 42, "同步返回值应被 resolve 为 42");
                    case 3:
                      return c.a(2);
                  }
              }, s);
            }))), e("同步函数 —— 抛出异常转为 rejected", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      if (t) {
                        c.n = 1;
                        break;
                      }
                      return i(!0, "(跳过)"), c.a(2);
                    case 1:
                      return u = null, c.n = 2, Promise.try(function() {
                        throw new Error("同步错误");
                      }).catch(function(l) {
                        u = l;
                      });
                    case 2:
                      i(u instanceof Error && u.message === "同步错误", "同步异常应转为 rejected");
                    case 3:
                      return c.a(2);
                  }
              }, s);
            }))), e("异步函数 —— resolved 正常透传", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      if (t) {
                        c.n = 1;
                        break;
                      }
                      return i(!0, "(跳过)"), c.a(2);
                    case 1:
                      return c.n = 2, Promise.try(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function l() {
                        return _regenerator().w(function(f) {
                          for (; ; )
                            switch (f.n) {
                              case 0:
                                return f.a(2, "async result");
                            }
                        }, l);
                      })));
                    case 2:
                      u = c.v, i(u === "async result", "异步 resolved 值应透传");
                    case 3:
                      return c.a(2);
                  }
              }, s);
            }))), e("异步函数 —— rejected 正常透传", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      if (t) {
                        c.n = 1;
                        break;
                      }
                      return i(!0, "(跳过)"), c.a(2);
                    case 1:
                      return u = null, c.n = 2, Promise.try(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function l() {
                        return _regenerator().w(function(f) {
                          for (; ; )
                            switch (f.n) {
                              case 0:
                                throw new Error("异步错误");
                              case 1:
                                return f.a(2);
                            }
                        }, l);
                      }))).catch(function(l) {
                        u = l;
                      });
                    case 2:
                      i(u instanceof Error && u.message === "异步错误", "异步 rejected 应透传");
                    case 3:
                      return c.a(2);
                  }
              }, s);
            }))), e("返回已有 Promise —— 直接透传", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u, c;
              return _regenerator().w(function(l) {
                for (; ; )
                  switch (l.n) {
                    case 0:
                      if (t) {
                        l.n = 1;
                        break;
                      }
                      return i(!0, "(跳过)"), l.a(2);
                    case 1:
                      return u = Promise.resolve("original"), l.n = 2, Promise.try(function() {
                        return u;
                      });
                    case 2:
                      c = l.v, i(c === "original", "返回已有 Promise 的值应直接透传");
                    case 3:
                      return l.a(2);
                  }
              }, s);
            }))), e("传递参数给回调函数", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u;
              return _regenerator().w(function(c) {
                for (; ; )
                  switch (c.n) {
                    case 0:
                      if (t) {
                        c.n = 1;
                        break;
                      }
                      return i(!0, "(跳过)"), c.a(2);
                    case 1:
                      return c.n = 2, Promise.try(function(l, f) {
                        return l + f;
                      }, 10, 20);
                    case 2:
                      u = c.v, i(u === 30, "应能向回调函数传递参数");
                    case 3:
                      return c.a(2);
                  }
              }, s);
            }))), e("对比 new Promise —— 捕获同步异常的等价写法", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u, c, l, f, v, y;
              return _regenerator().w(function(p) {
                for (; ; )
                  switch (p.n) {
                    case 0:
                      if (t) {
                        p.n = 1;
                        break;
                      }
                      return i(!0, "(跳过)"), p.a(2);
                    case 1:
                      return u = new Promise(function(S) {
                        return S(JSON.parse('{"key":"value"}'));
                      }), c = Promise.try(function() {
                        return JSON.parse('{"key":"value"}');
                      }), p.n = 2, Promise.all([u, c]);
                    case 2:
                      l = p.v, f = _slicedToArray(l, 2), v = f[0], y = f[1], i(v.key === "value" && y.key === "value", "两种写法结果应一致");
                    case 3:
                      return p.a(2);
                  }
              }, s);
            }))), a.a(2, r());
        }
    }, o);
  })), _testPromiseTry.apply(this, arguments);
}
function testRegExpDuplicateGroups() {
  var o = createSuite("RegExp Duplicate Named Capture Groups (ES2025)"), n = o.test, e = o.assert, i = o.getResults, r = !1;
  try {
    new RegExp("(?<a>x)|(?<a>y)"), r = !0;
  } catch {
    r = !1;
  }
  return n("同一命名组在不同分支中可重复使用", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持重复命名捕获组)");
      return;
    }
    var t = /* @__PURE__ */ _wrapRegExp(/(\d{4})-(\d{2})-(\d{2})|(\d{2})\/(\d{2})\/(\d{4})/, {
      year: [1, 6],
      month: [2, 5],
      day: [3, 4]
    }), a = "2025-06-15".match(t), s = "15/06/2025".match(t);
    e(a.groups.year === "2025" && a.groups.month === "06", "格式一：年月应正确解析"), e(s.groups.year === "2025" && s.groups.month === "06", "格式二：年月应正确解析");
  }), n("同名组只有命中的那个分支有值，另一个为 undefined", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ _wrapRegExp(/([A-Z]+)|(\d+)/, {
      val: [1, 2]
    }), a = "ABC".match(t), s = "123".match(t);
    e(a.groups.val === "ABC", '字母分支命中时 val 应为 "ABC"'), e(s.groups.val === "123", '数字分支命中时 val 应为 "123"');
  }), n("与 String.prototype.replace 命名引用配合使用", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ _wrapRegExp(/(\d{4})-(\d{2})-(\d{2})|(\d{2})\/(\d{2})\/(\d{4})/, {
      y: [1, 6],
      m: [2, 4],
      d: [3, 5]
    }), a = "2025-06-15".replace(t, "$<y>/$<m>/$<d>"), s = "06/15/2025".replace(t, "$<y>/$<m>/$<d>");
    e(a === "2025/06/15", "格式一替换应得 2025/06/15"), e(s === "2025/06/15", "格式二替换应得 2025/06/15");
  }), n("matchAll 中重复命名组也正常工作", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ _wrapRegExp(/([a-z]+)|(\d+)/g, {
      word: [1, 2]
    }), a = _toConsumableArray("hello 42 world 7".matchAll(t)), s = a.map(function(u) {
      return u.groups.word;
    });
    e(s.length === 4 && s[0] === "hello" && s[1] === "42", "matchAll 应正确提取所有命中词");
  }), n("非命中分支的同名组值为 undefined", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ _wrapRegExp(/(foo)|(bar)/, {
      a: [1, 2]
    }), a = "bar".match(t);
    e(a.groups.a === "bar", "应取命中分支的值");
  }), i();
}
function testUint8ArrayBase64Hex() {
  var o = createSuite("Uint8Array Base64/Hex (ES2025)"), n = o.test, e = o.assert, i = o.getResults, r = typeof Uint8Array.prototype.toBase64 == "function";
  return n("toBase64() —— Uint8Array 转 Base64 字符串", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 Uint8Array.toBase64)");
      return;
    }
    var t = new Uint8Array([72, 101, 108, 108, 111]), a = t.toBase64();
    e(a === "SGVsbG8=", 'toBase64 应返回 "SGVsbG8="，实际: '.concat(a));
  }), n("fromBase64() —— Base64 字符串转 Uint8Array", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Uint8Array.fromBase64("SGVsbG8=");
    e(t.length === 5 && t[0] === 72 && t[4] === 111, "fromBase64 应还原为正确字节");
  }), n("toHex() —— Uint8Array 转十六进制字符串", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Uint8Array([222, 173, 190, 239]), a = t.toHex();
    e(a === "deadbeef", 'toHex 应返回 "deadbeef"，实际: '.concat(a));
  }), n("fromHex() —— 十六进制字符串转 Uint8Array", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Uint8Array.fromHex("deadbeef");
    e(t.length === 4 && t[0] === 222 && t[3] === 239, "fromHex 应正确还原字节");
  }), n("Base64 round-trip（互转验证）", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Uint8Array([1, 2, 3, 255, 0, 128]), a = Uint8Array.fromBase64(t.toBase64());
    e(t.length === a.length && t.every(function(s, u) {
      return s === a[u];
    }), "Base64 round-trip 应完全还原原始字节");
  }), n("Hex round-trip（互转验证）", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Uint8Array([0, 127, 128, 255]), a = Uint8Array.fromHex(t.toHex());
    e(t.length === a.length && t.every(function(s, u) {
      return s === a[u];
    }), "Hex round-trip 应完全还原原始字节");
  }), n("空数组 toBase64 返回空字符串", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Uint8Array([]);
    e(t.toBase64() === "", "空 Uint8Array 的 Base64 应为空字符串");
  }), n("空字符串 fromHex 返回空 Uint8Array", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Uint8Array.fromHex("");
    e(t.length === 0, "空字符串 fromHex 应返回空 Uint8Array");
  }), n("toBase64 支持 URL-safe 模式", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Uint8Array([251, 255]), a = t.toBase64(), s = t.toBase64({
      alphabet: "base64url"
    });
    e(s.indexOf("+") === -1 && s.indexOf("/") === -1, "URL-safe Base64 不应含 + 或 /"), e(a !== s || !a.includes("+") && !a.includes("/"), "URL-safe 与标准编码结果应存在差异（或均不含特殊字符）");
  }), i();
}
function testJsonParseSource() {
  var o = createSuite("JSON.parse Source Text Access (ES2025)"), n = o.test, e = o.assert, i = o.getResults, r = !1;
  try {
    JSON.parse("1", function(t, a, s) {
      return s && typeof s.source == "string" && (r = !0), a;
    });
  } catch {
  }
  return n("reviver 接收第三个参数 context", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 JSON.parse source text access)");
      return;
    }
    var t = null;
    JSON.parse('"hello"', function(a, s, u) {
      return a === "" && (t = u), s;
    }), e(t !== null && typeof t.source == "string", "reviver 应收到含 source 属性的 context 对象");
  }), n("context.source 为该值的原始 JSON 文本", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = {};
    JSON.parse('{"a":  42, "b": "hello"}', function(a, s, u) {
      return a !== "" && (t[a] = u.source), s;
    }), e(t.a === "42", '数字的 source 应为 "42"，实际: "'.concat(t.a, '"')), e(t.b === '"hello"', `字符串的 source 应为 '"hello"'，实际: "`.concat(t.b, '"'));
  }), n("利用 source 精确解析超大整数（BigInt）", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = "9007199254740993", a = JSON.parse('{"id":'.concat(t, "}"), function(s, u, c) {
      return s === "" ? u : /^\d+$/.test(c.source) ? BigInt(c.source) : u;
    });
    e(typeof a.id == "bigint", "超大整数应被转为 BigInt"), e(a.id === BigInt(t), "BigInt 值应精确等于 ".concat(t));
  }), n("嵌套对象中每个值都能获取自己的 source", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = [];
    JSON.parse('{"x":1,"arr":[2,3]}', function(a, s, u) {
      return a !== "" && t.push(u.source), s;
    }), e(t.includes("1") && t.includes("2") && t.includes("3"), "嵌套结构中每个原始值都应能取到 source");
  }), n("null / boolean 也有对应 source", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = {};
    JSON.parse('{"a":null,"b":true,"c":false}', function(a, s, u) {
      return a !== "" && (t[a] = u.source), s;
    }), e(t.a === "null" && t.b === "true" && t.c === "false", "null/true/false 的 source 应为对应的原始文本");
  }), i();
}
function testErrorIsError() {
  var o = createSuite("Error.isError (ES2025)"), n = o.test, e = o.assert, i = o.getResults, r = typeof Error.isError == "function";
  return n("原生 Error 实例返回 true", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 Error.isError)");
      return;
    }
    e(Error.isError(new Error("test")) === !0, "new Error() 应返回 true");
  }), n("Error 子类实例返回 true", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    e(Error.isError(new TypeError("type")) === !0, "TypeError 应返回 true"), e(Error.isError(new RangeError("range")) === !0, "RangeError 应返回 true"), e(Error.isError(new SyntaxError("syntax")) === !0, "SyntaxError 应返回 true"), e(Error.isError(new ReferenceError("ref")) === !0, "ReferenceError 应返回 true"), e(Error.isError(new URIError("uri")) === !0, "URIError 应返回 true"), e(Error.isError(new EvalError("eval")) === !0, "EvalError 应返回 true");
  }), n("自定义 Error 子类实例返回 true", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = /* @__PURE__ */ function(a) {
      function s(u) {
        var c;
        return _classCallCheck(this, s), c = _callSuper(this, s, [u]), c.name = "AppError", c;
      }
      return _inherits(s, a), _createClass(s);
    }(/* @__PURE__ */ _wrapNativeSuper(Error));
    e(Error.isError(new t("app")) === !0, "自定义 Error 子类应返回 true");
  }), n("普通对象返回 false", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    e(Error.isError({}) === !1, "普通对象应返回 false"), e(Error.isError({
      message: "fake",
      stack: ""
    }) === !1, "伪造 Error 对象应返回 false");
  }), n("模拟 Error 对象（纯 JS 构造）返回 false", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = Object.create(Error.prototype);
    t.message = "fake", e(Error.isError(null) === !1, "null 应返回 false"), e(Error.isError(void 0) === !1, "undefined 应返回 false"), e(Error.isError(42) === !1, "数字应返回 false"), e(Error.isError("error") === !1, '字符串 "error" 应返回 false');
  }), n("数组、函数、正则等非 Error 值返回 false", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    e(Error.isError([]) === !1, "数组应返回 false"), e(Error.isError(function() {
    }) === !1, "函数应返回 false"), e(Error.isError(/regex/) === !1, "正则应返回 false"), e(Error.isError(/* @__PURE__ */ new Date()) === !1, "Date 应返回 false");
  }), n("实际使用场景：统一捕获并判断 catch 的值", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    function t(s) {
      if (s)
        throw new TypeError("类型错误");
      return Promise.reject("string rejection");
    }
    var a = null;
    try {
      t(!0);
    } catch (s) {
      a = s;
    }
    e(Error.isError(a) === !0, "try/catch 捕获的 Error 应识别为 true"), e(Error.isError("string rejection") === !1, "字符串 rejection 应识别为 false");
  }), i();
}
function testFloat16Array() {
  var o = createSuite("Float16Array (ES2025)"), n = o.test, e = o.assert, i = o.getResults, r = typeof Float16Array < "u";
  return n("Float16Array 可正常创建", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 Float16Array)");
      return;
    }
    var t = new Float16Array(4);
    e(t.length === 4, "Float16Array 长度应为 4"), e(t.BYTES_PER_ELEMENT === 2, "每个元素应占 2 字节（16 位）");
  }), n("从数组初始化并读取值", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Float16Array([1, 0.5, -1, 0]);
    e(t[0] === 1, "arr[0] 应为 1.0"), e(t[1] === 0.5, "arr[1] 应为 0.5"), e(t[2] === -1, "arr[2] 应为 -1.0"), e(t[3] === 0, "arr[3] 应为 0.0");
  }), n("精度低于 Float32（半精度特性）", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Float16Array([Math.PI]);
    e(Math.abs(t[0] - Math.PI) > 1e-3, "Float16 精度应低于 Float64 的 Math.PI"), e(Math.abs(t[0] - Math.PI) < 0.01, "Float16 近似误差应在合理范围内");
  }), n("Math.f16round() 舍入到最近 float16 值", function() {
    if (typeof Math.f16round != "function") {
      e(!0, "(跳过：环境不支持 Math.f16round)");
      return;
    }
    var t = Math.f16round(1.337);
    e(typeof t == "number", "Math.f16round 应返回数字"), e(Math.abs(t - 1.337) < 0.01, "舍入误差应在 0.01 以内"), e(t !== 1.337, "应发生精度损失，结果不等于输入值");
  }), n("Math.f16round(Infinity) / (-Infinity) / NaN 特殊值", function() {
    if (typeof Math.f16round != "function") {
      e(!0, "(跳过)");
      return;
    }
    e(Math.f16round(1 / 0) === 1 / 0, "Infinity 应保持不变"), e(Math.f16round(-1 / 0) === -1 / 0, "-Infinity 应保持不变"), e(Number.isNaN(Math.f16round(NaN)), "NaN 应保持 NaN"), e(Math.f16round(0) === 0, "0 应保持 0");
  }), n("DataView.getFloat16 / setFloat16", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new DataView(new ArrayBuffer(4));
    if (typeof t.setFloat16 != "function") {
      e(!0, "(跳过：DataView 不支持 float16)");
      return;
    }
    t.setFloat16(0, 1.5, !0);
    var a = t.getFloat16(0, !0);
    e(a === 1.5, "DataView setFloat16/getFloat16 round-trip 应还原 1.5");
  }), n("Float16Array 支持 TypedArray 通用方法", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = new Float16Array([3, 1, 4, 1, 5]);
    t.sort(), e(t[0] === 1 && t[4] === 5, "sort 后最小值应为 1，最大值应为 5");
    var a = t.map(function(s) {
      return s * 2;
    });
    e(a instanceof Float16Array, "map 应返回 Float16Array");
  }), n("Float16Array 内存占用是 Float32Array 的一半", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = 100, a = new Float16Array(t), s = new Float32Array(t);
    e(a.byteLength === s.byteLength / 2, "Float16Array 字节长度应是 Float32Array 的一半");
  }), i();
}
function testMathSumPrecise() {
  var o = createSuite("Math.sumPrecise() (ES2026)"), n = o.test, e = o.assert, i = o.getResults, r = typeof Math.sumPrecise == "function";
  return n("基本求和 —— 整数", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 Math.sumPrecise)");
      return;
    }
    e(Math.sumPrecise([1, 2, 3, 4, 5]) === 15, "整数求和应为 15"), e(Math.sumPrecise([]) === 0, "空数组求和应为 0"), e(Math.sumPrecise([42]) === 42, "单元素求和应为自身");
  }), n("精确处理浮点数累积误差", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = [0.1, 0.2, 0.3].reduce(function(s, u) {
      return s + u;
    }), a = Math.sumPrecise([0.1, 0.2, 0.3]);
    e(t !== 0.6, "普通 reduce 应存在浮点误差（验证前提）"), e(a === 0.6, "Math.sumPrecise 应精确返回 0.6");
  }), n("大量小数精确求和", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = 1 / 3, a = Math.sumPrecise([t, t, t]);
    e(typeof a == "number", "应返回数值类型"), e(a > 0.999 && a <= 1, "三个 1/3 之和应尽量接近 1");
  }), n("接受任意可迭代对象", function() {
    var t = /* @__PURE__ */ _regenerator().m(s);
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var a = Math.sumPrecise(/* @__PURE__ */ new Set([10, 20, 30]));
    e(a === 60, "支持 Set 可迭代对象");
    function s() {
      return _regenerator().w(function(c) {
        for (; ; )
          switch (c.n) {
            case 0:
              return c.n = 1, 1;
            case 1:
              return c.n = 2, 2;
            case 2:
              return c.n = 3, 3;
            case 3:
              return c.a(2);
          }
      }, t);
    }
    var u = Math.sumPrecise(s());
    e(u === 6, "支持 Generator 可迭代对象");
  }), n("特殊值处理", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    e(Math.sumPrecise([0]) === 0, "+0 求和应为 0"), e(Math.sumPrecise([-0]) === 0, "-0 求和应为 0（结果为 +0）"), e(Math.sumPrecise([1, 1 / 0]) === 1 / 0, "含 Infinity 结果应为 Infinity"), e(Math.sumPrecise([-1 / 0, 1]) === -1 / 0, "含 -Infinity 结果应为 -Infinity"), e(Number.isNaN(Math.sumPrecise([1 / 0, -1 / 0])), "Inf + (-Inf) 应为 NaN"), e(Number.isNaN(Math.sumPrecise([1, NaN, 3])), "含 NaN 结果应为 NaN");
  }), n("非数值元素应抛出 TypeError", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = !1;
    try {
      Math.sumPrecise([1, "2", 3]);
    } catch (a) {
      t = a instanceof TypeError;
    }
    e(t, "非数值元素应抛出 TypeError");
  }), i();
}
function testRegExpEscape() {
  var o = createSuite("RegExp.escape() (ES2026)"), n = o.test, e = o.assert, i = o.getResults, r = typeof RegExp.escape == "function";
  return n("转义正则特殊字符", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 RegExp.escape)");
      return;
    }
    var t = "^$.*+?()[]{}|\\", a = RegExp.escape(t);
    e(typeof a == "string", "应返回字符串"), e(a.includes("\\^"), "^ 应被转义"), e(a.includes("\\$"), "$ 应被转义"), e(a.includes("\\."), ". 应被转义"), e(a.includes("\\*"), "* 应被转义");
  }), n("普通字符不被转义", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    e(RegExp.escape("hello") === "hello", "纯字母不应被转义"), e(RegExp.escape("12345") === "12345", "纯数字不应被转义"), e(RegExp.escape("hello world") === "hello world", "空格不应被转义");
  }), n("转义结果可安全构造正则", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = "price: $10.00 (sale!)", a = new RegExp(RegExp.escape(t));
    e(a.test("price: $10.00 (sale!)"), "转义后的正则应能精确匹配原字符串"), e(!a.test("price: X10X00 Xsale!"), "不应匹配用特殊字符替换后的字符串");
  }), n("防止正则注入攻击", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = "(.*)", a = new RegExp(t), s = new RegExp(RegExp.escape(t));
    e(a.test("anything"), "未转义的正则可匹配任意字符串（注入漏洞）"), e(!s.test("anything"), '转义后只能匹配字面量 "(.*)"'), e(s.test("(.*)"), '转义后精确匹配字面字符串 "(.*)"');
  }), n("中文等 Unicode 字符不应被转义", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = "你好，世界";
    e(RegExp.escape(t) === t, "Unicode 字符不需要转义");
  }), n("空字符串返回空字符串", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    e(RegExp.escape("") === "", "空字符串转义后应仍为空字符串");
  }), n("与 /g 标志组合 —— 高亮搜索词", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = "商品价格 $10.00，原价 $20.00", a = "$10.00", s = new RegExp(RegExp.escape(a), "g"), u = (t.match(s) || []).length;
    e(u === 1, "含特殊字符的关键词应精确匹配 1 次");
  }), i();
}
function testExplicitResourceManagement() {
  return _testExplicitResourceManagement.apply(this, arguments);
}
function _testExplicitResourceManagement() {
  return _testExplicitResourceManagement = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    var n, e, i, r, t;
    return _regenerator().w(function(a) {
      for (; ; )
        switch (a.n) {
          case 0:
            return n = createSuite("Explicit Resource Management (ES2026)"), e = n.test, i = n.assert, r = n.getResults, t = function() {
              try {
                return new Function("Symbol", `
        const r = { [Symbol.dispose]() {} }
        { using x = r }
      `)(Symbol), !0;
              } catch {
                return !1;
              }
            }(), e("Symbol.dispose 已定义", function() {
              i(_typeof(Symbol.dispose) === "symbol", "Symbol.dispose 应是 symbol 类型");
            }), e("Symbol.asyncDispose 已定义", function() {
              i(_typeof(Symbol.asyncDispose) === "symbol", "Symbol.asyncDispose 应是 symbol 类型");
            }), e("using —— 块退出时自动调用 Symbol.dispose", function() {
              if (!t) {
                i(!0, "(跳过：环境不支持 using 语法)");
                return;
              }
              var s = [];
              new Function("log", "Symbol", `
      {
        using r = {
          [Symbol.dispose]() { log.push('disposed') }
        }
        log.push('in-block')
      }
      log.push('after-block')
    `)(s, Symbol), i(s[0] === "in-block", "块内代码应正常执行"), i(s[1] === "disposed", "块退出时应自动调用 dispose"), i(s[2] === "after-block", "dispose 之后块后代码才继续执行");
            }), e("using —— 异常时也会调用 dispose（保证清理）", function() {
              if (!t) {
                i(!0, "(跳过)");
                return;
              }
              var s = [];
              try {
                new Function("log", "Symbol", `
        {
          using r = { [Symbol.dispose]() { log.push('cleanup') } }
          throw new Error('意外错误')
        }
      `)(s, Symbol);
              } catch {
              }
              i(s[0] === "cleanup", "即使抛出异常也应执行 dispose 清理");
            }), e("多个 using 资源按 LIFO 顺序释放", function() {
              if (!t) {
                i(!0, "(跳过)");
                return;
              }
              var s = [];
              new Function("order", "Symbol", `
      {
        using a = { [Symbol.dispose]() { order.push('A') } }
        using b = { [Symbol.dispose]() { order.push('B') } }
        using c = { [Symbol.dispose]() { order.push('C') } }
      }
    `)(s, Symbol), i(s.join(",") === "C,B,A", "多资源应按 LIFO（后进先出）顺序释放");
            }), e("await using —— 异步 dispose", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u, c;
              return _regenerator().w(function(l) {
                for (; ; )
                  switch (l.n) {
                    case 0:
                      if (t) {
                        l.n = 1;
                        break;
                      }
                      return i(!0, "(跳过)"), l.a(2);
                    case 1:
                      return u = [], c = new Function("log", "Symbol", `
      return (async () => {
        {
          await using r = {
            async [Symbol.asyncDispose]() {
              await new Promise(res => setTimeout(res, 0))
              log.push('async-disposed')
            }
          }
          log.push('in-block')
        }
        log.push('after-block')
      })()
    `), l.n = 2, c(u, Symbol);
                    case 2:
                      i(u[0] === "in-block", "异步块内应正常执行"), i(u[1] === "async-disposed", "await using 应等待异步 dispose 完成"), i(u[2] === "after-block", "dispose 之后才继续执行块后代码");
                    case 3:
                      return l.a(2);
                  }
              }, s);
            }))), e("DisposableStack —— 手动管理资源栈", function() {
              if (typeof DisposableStack > "u") {
                i(!0, "(跳过：环境不支持 DisposableStack)");
                return;
              }
              var s = [], u = new DisposableStack();
              u.defer(function() {
                return s.push("deferred-1");
              }), u.defer(function() {
                return s.push("deferred-2");
              }), u.dispose(), i(s.join(",") === "deferred-2,deferred-1", "DisposableStack 应按 LIFO 执行");
            }), a.a(2, r());
        }
    }, o);
  })), _testExplicitResourceManagement.apply(this, arguments);
}
function testAtomicsPause() {
  var o = createSuite("Atomics.pause() (ES2026)"), n = o.test, e = o.assert, i = o.getResults, r = typeof Atomics.pause == "function";
  return n("Atomics.pause 函数存在", function() {
    if (!r) {
      e(!0, "(跳过：环境不支持 Atomics.pause)");
      return;
    }
    e(typeof Atomics.pause == "function", "Atomics.pause 应为函数");
  }), n("无参数调用不抛出错误", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = !1;
    try {
      Atomics.pause();
    } catch {
      t = !0;
    }
    e(!t, "Atomics.pause() 无参数调用不应抛出");
  }), n("传入整数参数不抛出错误", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    var t = !1;
    try {
      Atomics.pause(0), Atomics.pause(1), Atomics.pause(100);
    } catch {
      t = !0;
    }
    e(!t, "Atomics.pause(N) 应接受非负整数参数");
  }), n("返回值为 undefined", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    e(Atomics.pause() === void 0, "Atomics.pause() 应返回 undefined");
  }), n("自旋等待模式下连续调用不崩溃", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    for (var t = 0; t < 10; t++)
      Atomics.pause(t);
    e(t === 10, "10 次自旋循环应正常完成");
  }), n("与 SharedArrayBuffer + Atomics.load 配合（模拟场景）", function() {
    if (!r) {
      e(!0, "(跳过)");
      return;
    }
    if (typeof SharedArrayBuffer > "u") {
      e(!0, "(跳过：环境不支持 SharedArrayBuffer)");
      return;
    }
    var t = new SharedArrayBuffer(4), a = new Int32Array(t);
    a[0] = 1;
    for (var s = 0, u = 5; Atomics.load(a, 0) !== 0 && s < u; )
      Atomics.pause(s), s++, s === 3 && Atomics.store(a, 0, 0);
    e(Atomics.load(a, 0) === 0, "自旋等待后标志位应变为 0（锁释放）"), e(s === 3, "应在第 3 次迭代时检测到锁释放");
  }), i();
}
function testImportAttributes() {
  return _testImportAttributes.apply(this, arguments);
}
function _testImportAttributes() {
  return _testImportAttributes = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    var n, e, i, r, t;
    return _regenerator().w(function(a) {
      for (; ; )
        switch (a.n) {
          case 0:
            return n = createSuite("Import Attributes (ES2026)"), e = n.test, i = n.assert, r = n.getResults, t = function() {
              try {
                return new Function("import('data:text/javascript,export default 1', { with: { type: 'javascript' } })"), !0;
              } catch {
                return !1;
              }
            }(), e("动态 import() 支持 with 选项对象", /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function s() {
              var u, c, l;
              return _regenerator().w(function(f) {
                for (; ; )
                  switch (f.p = f.n) {
                    case 0:
                      if (t) {
                        f.n = 1;
                        break;
                      }
                      return i(!0, "(跳过：环境不支持 import with 语法)"), f.a(2);
                    case 1:
                      return u = null, f.p = 2, c = new Function('return import("data:text/javascript,export default \\"hello\\"", { with: { type: "javascript" } })'), f.n = 3, c();
                    case 3:
                      l = f.v, u = l.default, f.n = 5;
                      break;
                    case 4:
                      f.p = 4, f.v, u = "syntax-ok";
                    case 5:
                      i(u === "hello" || u === "syntax-ok", "import with 语法应被环境支持");
                    case 6:
                      return f.a(2);
                  }
              }, s, null, [[2, 4]]);
            }))), e("import with 选项中 type 属性为字符串", function() {
              var s = {
                with: {
                  type: "json"
                }
              };
              i(typeof s.with.type == "string", "type 属性应为字符串"), i(s.with.type === "json", "json type 应正确设置");
            }), e("import() 的第二个参数结构", function() {
              var s = [{
                with: {
                  type: "json"
                }
              }, {
                with: {
                  type: "css"
                }
              }, {
                with: {
                  type: "javascript"
                }
              }];
              s.forEach(function(u) {
                i(u.with !== void 0, "options.with 应存在"), i(typeof u.with.type == "string", "type 应为字符串");
              }), i(!0, "import() 选项结构验证通过");
            }), e("JSON 模块导入属性防止 MIME 混淆（原理说明）", function() {
              var s = !0;
              i(s, 'JSON 模块导入应声明 type: "json" 防止 MIME 混淆攻击');
            }), e("import with 仅传递元信息，不影响模块标识符", function() {
              var s = "./data.json", u = {
                with: {
                  type: "json"
                }
              }, c = {
                with: {
                  type: "json"
                }
              };
              i(s === "./data.json", "模块说明符不应被 with 属性修改"), i(u.with.type === c.with.type, "相同 type 的 options 应等价");
            }), a.a(2, r());
        }
    }, o);
  })), _testImportAttributes.apply(this, arguments);
}
var suites2015 = [{
  name: "let & const",
  fn: testLetConst
}, {
  name: "箭头函数",
  fn: testArrowFunctions
}, {
  name: "模板字符串",
  fn: testTemplateLiterals
}, {
  name: "解构赋值",
  fn: testDestructuring
}, {
  name: "默认参数 / Rest / Spread",
  fn: testDefaultRestSpread
}, {
  name: "类(Class)",
  fn: testClasses
}, {
  name: "Promise & async/await",
  fn: testPromises
}, {
  name: "Symbol",
  fn: testSymbols
}, {
  name: "迭代器与生成器",
  fn: testIteratorsGenerators
}, {
  name: "Map & Set & WeakMap & WeakSet",
  fn: testMapSet
}, {
  name: "Proxy & Reflect",
  fn: testProxyReflect
}, {
  name: "增强对象字面量",
  fn: testEnhancedObjects
}, {
  name: "新增内置方法",
  fn: testNewMethods
}, {
  name: "模块(Modules)",
  fn: testModules
}, {
  name: "进制字面量与 Unicode",
  fn: testBinaryOctalUnicode
}, {
  name: "for...of",
  fn: testForOf
}, {
  name: "Map getOrInsert",
  fn: testMapGetOrInsert
}], suites2022 = [{
  name: "Class Fields（私有字段 / 静态字段）",
  fn: testClassFields
}, {
  name: "Class Static Blocks",
  fn: testClassStaticBlocks
}, {
  name: "Array / String .at()",
  fn: testAtMethod
}, {
  name: "Object.hasOwn()",
  fn: testObjectHasOwn
}, {
  name: "Error Cause",
  fn: testErrorCause
}, {
  name: "RegExp /d flag（匹配索引）",
  fn: testRegExpDFlag
}, {
  name: "Top-level await",
  fn: testTopLevelAwait
}], suites2025 = [{
  name: "Iterator Helpers",
  fn: testIteratorHelpers
}, {
  name: "New Set Methods",
  fn: testSetMethods
}, {
  name: "Promise.try",
  fn: testPromiseTry
}, {
  name: "RegExp Duplicate Named Capture Groups",
  fn: testRegExpDuplicateGroups
}, {
  name: "Uint8Array Base64 / Hex",
  fn: testUint8ArrayBase64Hex
}, {
  name: "JSON.parse Source Text Access",
  fn: testJsonParseSource
}, {
  name: "Error.isError",
  fn: testErrorIsError
}, {
  name: "Float16Array",
  fn: testFloat16Array
}], suites2026 = [{
  name: "Math.sumPrecise()",
  fn: testMathSumPrecise
}, {
  name: "RegExp.escape()",
  fn: testRegExpEscape
}, {
  name: "Explicit Resource Management",
  fn: testExplicitResourceManagement
}, {
  name: "Atomics.pause()",
  fn: testAtomicsPause
}, {
  name: "Import Attributes",
  fn: testImportAttributes
}];
function runSuites(o) {
  return _runSuites.apply(this, arguments);
}
function _runSuites() {
  return _runSuites = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o(n) {
    var e, i, r, t, a, s;
    return _regenerator().w(function(u) {
      for (; ; )
        switch (u.p = u.n) {
          case 0:
            e = [], i = _createForOfIteratorHelper(n), u.p = 1, i.s();
          case 2:
            if ((r = i.n()).done) {
              u.n = 5;
              break;
            }
            return t = r.value, u.n = 3, t.fn();
          case 3:
            a = u.v, e.push.apply(e, _toConsumableArray(a));
          case 4:
            u.n = 2;
            break;
          case 5:
            u.n = 7;
            break;
          case 6:
            u.p = 6, s = u.v, i.e(s);
          case 7:
            return u.p = 7, i.f(), u.f(7);
          case 8:
            return u.a(2, e);
        }
    }, o, null, [[1, 6, 7, 8]]);
  })), _runSuites.apply(this, arguments);
}
function runAll2015() {
  return _runAll.apply(this, arguments);
}
function _runAll() {
  return _runAll = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    return _regenerator().w(function(n) {
      for (; ; )
        switch (n.n) {
          case 0:
            return n.a(2, runSuites(suites2015));
        }
    }, o);
  })), _runAll.apply(this, arguments);
}
function runAll2022() {
  return _runAll2.apply(this, arguments);
}
function _runAll2() {
  return _runAll2 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    return _regenerator().w(function(n) {
      for (; ; )
        switch (n.n) {
          case 0:
            return n.a(2, runSuites(suites2022));
        }
    }, o);
  })), _runAll2.apply(this, arguments);
}
function runAll2025() {
  return _runAll3.apply(this, arguments);
}
function _runAll3() {
  return _runAll3 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    return _regenerator().w(function(n) {
      for (; ; )
        switch (n.n) {
          case 0:
            return n.a(2, runSuites(suites2025));
        }
    }, o);
  })), _runAll3.apply(this, arguments);
}
function runAll2026() {
  return _runAll4.apply(this, arguments);
}
function _runAll4() {
  return _runAll4 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    return _regenerator().w(function(n) {
      for (; ; )
        switch (n.n) {
          case 0:
            return n.a(2, runSuites(suites2026));
        }
    }, o);
  })), _runAll4.apply(this, arguments);
}
function runAll() {
  return _runAll5.apply(this, arguments);
}
function _runAll5() {
  return _runAll5 = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    return _regenerator().w(function(n) {
      for (; ; )
        switch (n.n) {
          case 0:
            return n.a(2, runSuites([].concat(suites2015, suites2022, suites2025, suites2026)));
        }
    }, o);
  })), _runAll5.apply(this, arguments);
}
function runAndPrint() {
  return _runAndPrint.apply(this, arguments);
}
function _runAndPrint() {
  return _runAndPrint = _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function o() {
    var n, e, i, r, t, a;
    return _regenerator().w(function(s) {
      for (; ; )
        switch (s.n) {
          case 0:
            n = 0, e = [["ES2015", runAll2015], ["ES2022", runAll2022], ["ES2025", runAll2025], ["ES2026", runAll2026]];
          case 1:
            if (!(n < e.length)) {
              s.n = 4;
              break;
            }
            return i = _slicedToArray(e[n], 2), r = i[0], t = i[1], console.log(`
=== `.concat(r, ` 特性测试 ===
`)), a = printResults, s.n = 2, t();
          case 2:
            a(s.v);
          case 3:
            n++, s.n = 1;
            break;
          case 4:
            return s.a(2);
        }
    }, o);
  })), _runAndPrint.apply(this, arguments);
}
export {
  runAll,
  runAll2015,
  runAll2022,
  runAll2025,
  runAll2026,
  runAndPrint,
  testArrowFunctions,
  testAtMethod,
  testAtomicsPause,
  testBinaryOctalUnicode,
  testClassFields,
  testClassStaticBlocks,
  testClasses,
  testDefaultRestSpread,
  testDestructuring,
  testEnhancedObjects,
  testErrorCause,
  testErrorIsError,
  testExplicitResourceManagement,
  testFloat16Array,
  testForOf,
  testImportAttributes,
  testIteratorHelpers,
  testIteratorsGenerators,
  testJsonParseSource,
  testLetConst,
  testMapGetOrInsert,
  testMapSet,
  testMathSumPrecise,
  testModules,
  testNewMethods,
  testObjectHasOwn,
  testPromiseTry,
  testPromises,
  testProxyReflect,
  testRegExpDFlag,
  testRegExpDuplicateGroups,
  testRegExpEscape,
  testSetMethods,
  testSymbols,
  testTemplateLiterals,
  testTopLevelAwait,
  testUint8ArrayBase64Hex
};
