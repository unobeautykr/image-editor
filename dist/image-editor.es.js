var uo = Object.defineProperty;
var fo = (e, t, r) => t in e ? uo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ge = (e, t, r) => (fo(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as _ from "react";
import sn, { useState as se, useEffect as ze, useRef as an, useCallback as cn, createContext as ho, forwardRef as po, useMemo as wr, useImperativeHandle as mo, useContext as go } from "react";
import { fabric as Oe } from "fabric";
import { Popover as yo, IconButton as it, Box as Ee, SvgIcon as Ve, Menu as ln, MenuItem as un, ListItemText as fn, Switch as vo, Dialog as bo, DialogTitle as xo, List as Eo, ListItem as To, Stack as Co, Slider as So, Paper as wo } from "@mui/material";
import Ro from "@emotion/styled";
import "@emotion/react";
function _o(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var u = {}, Oo = {
  get exports() {
    return u;
  },
  set exports(e) {
    u = e;
  }
}, lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function Ao() {
  if (Rr)
    return lt;
  Rr = 1;
  var e = sn, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, f) {
    var h, p = {}, d = null, T = null;
    f !== void 0 && (d = "" + f), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (h in l)
      n.call(l, h) && !i.hasOwnProperty(h) && (p[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        p[h] === void 0 && (p[h] = l[h]);
    return { $$typeof: t, type: c, key: d, ref: T, props: p, _owner: o.current };
  }
  return lt.Fragment = r, lt.jsx = a, lt.jsxs = a, lt;
}
var ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function jo() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var e = sn, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function m(s) {
      if (s === null || typeof s != "object")
        return null;
      var y = S && s[S] || s[g];
      return typeof y == "function" ? y : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(s) {
      {
        for (var y = arguments.length, E = new Array(y > 1 ? y - 1 : 0), A = 1; A < y; A++)
          E[A - 1] = arguments[A];
        k("error", s, E);
      }
    }
    function k(s, y, E) {
      {
        var A = O.ReactDebugCurrentFrame, W = A.getStackAddendum();
        W !== "" && (y += "%s", E = E.concat([W]));
        var Z = E.map(function(Y) {
          return String(Y);
        });
        Z.unshift("Warning: " + y), Function.prototype.apply.call(console[s], console, Z);
      }
    }
    var H = !1, b = !1, ue = !1, je = !1, Pe = !1, V;
    V = Symbol.for("react.module.reference");
    function ae(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || Pe || s === o || s === f || s === h || je || s === T || H || b || ue || typeof s == "object" && s !== null && (s.$$typeof === d || s.$$typeof === p || s.$$typeof === a || s.$$typeof === c || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === V || s.getModuleId !== void 0));
    }
    function fe(s, y, E) {
      var A = s.displayName;
      if (A)
        return A;
      var W = y.displayName || y.name || "";
      return W !== "" ? E + "(" + W + ")" : E;
    }
    function me(s) {
      return s.displayName || "Context";
    }
    function le(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var y = s;
            return me(y) + ".Consumer";
          case a:
            var E = s;
            return me(E._context) + ".Provider";
          case l:
            return fe(s, s.render, "ForwardRef");
          case p:
            var A = s.displayName || null;
            return A !== null ? A : le(s.type) || "Memo";
          case d: {
            var W = s, Z = W._payload, Y = W._init;
            try {
              return le(Y(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, Re = 0, de, Te, $e, Me, v, C, M;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function j() {
      {
        if (Re === 0) {
          de = console.log, Te = console.info, $e = console.warn, Me = console.error, v = console.group, C = console.groupCollapsed, M = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        Re++;
      }
    }
    function F() {
      {
        if (Re--, Re === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, s, {
              value: de
            }),
            info: oe({}, s, {
              value: Te
            }),
            warn: oe({}, s, {
              value: $e
            }),
            error: oe({}, s, {
              value: Me
            }),
            group: oe({}, s, {
              value: v
            }),
            groupCollapsed: oe({}, s, {
              value: C
            }),
            groupEnd: oe({}, s, {
              value: M
            })
          });
        }
        Re < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = O.ReactCurrentDispatcher, $;
    function B(s, y, E) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (W) {
            var A = W.stack.trim().match(/\n( *(at )?)/);
            $ = A && A[1] || "";
          }
        return `
` + $ + s;
      }
    }
    var L = !1, N;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      N = new ce();
    }
    function x(s, y) {
      if (!s || L)
        return "";
      {
        var E = N.get(s);
        if (E !== void 0)
          return E;
      }
      var A;
      L = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = P.current, P.current = null, j();
      try {
        if (y) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (Be) {
              A = Be;
            }
            Reflect.construct(s, [], Y);
          } else {
            try {
              Y.call();
            } catch (Be) {
              A = Be;
            }
            s.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Be) {
            A = Be;
          }
          s();
        }
      } catch (Be) {
        if (Be && A && typeof Be.stack == "string") {
          for (var z = Be.stack.split(`
`), he = A.stack.split(`
`), ne = z.length - 1, ie = he.length - 1; ne >= 1 && ie >= 0 && z[ne] !== he[ie]; )
            ie--;
          for (; ne >= 1 && ie >= 0; ne--, ie--)
            if (z[ne] !== he[ie]) {
              if (ne !== 1 || ie !== 1)
                do
                  if (ne--, ie--, ie < 0 || z[ne] !== he[ie]) {
                    var Ce = `
` + z[ne].replace(" at new ", " at ");
                    return s.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", s.displayName)), typeof s == "function" && N.set(s, Ce), Ce;
                  }
                while (ne >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        L = !1, P.current = Z, F(), Error.prepareStackTrace = W;
      }
      var Ze = s ? s.displayName || s.name : "", Sr = Ze ? B(Ze) : "";
      return typeof s == "function" && N.set(s, Sr), Sr;
    }
    function pe(s, y, E) {
      return x(s, !1);
    }
    function w(s) {
      var y = s.prototype;
      return !!(y && y.isReactComponent);
    }
    function _e(s, y, E) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return x(s, w(s));
      if (typeof s == "string")
        return B(s);
      switch (s) {
        case f:
          return B("Suspense");
        case h:
          return B("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return pe(s.render);
          case p:
            return _e(s.type, y, E);
          case d: {
            var A = s, W = A._payload, Z = A._init;
            try {
              return _e(Z(W), y, E);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, at = {}, hr = O.ReactDebugCurrentFrame;
    function yt(s) {
      if (s) {
        var y = s._owner, E = _e(s.type, s._source, y ? y.type : null);
        hr.setExtraStackFrame(E);
      } else
        hr.setExtraStackFrame(null);
    }
    function Yn(s, y, E, A, W) {
      {
        var Z = Function.call.bind(De);
        for (var Y in s)
          if (Z(s, Y)) {
            var z = void 0;
            try {
              if (typeof s[Y] != "function") {
                var he = Error((A || "React class") + ": " + E + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              z = s[Y](y, Y, A, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              z = ne;
            }
            z && !(z instanceof Error) && (yt(W), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", E, Y, typeof z), yt(null)), z instanceof Error && !(z.message in at) && (at[z.message] = !0, yt(W), R("Failed %s type: %s", E, z.message), yt(null));
          }
      }
    }
    var Hn = Array.isArray;
    function Mt(s) {
      return Hn(s);
    }
    function Wn(s) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, E = y && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E;
      }
    }
    function Kn(s) {
      try {
        return pr(s), !1;
      } catch {
        return !0;
      }
    }
    function pr(s) {
      return "" + s;
    }
    function mr(s) {
      if (Kn(s))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wn(s)), pr(s);
    }
    var ct = O.ReactCurrentOwner, qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gr, yr, Dt;
    Dt = {};
    function Gn(s) {
      if (De.call(s, "ref")) {
        var y = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Xn(s) {
      if (De.call(s, "key")) {
        var y = Object.getOwnPropertyDescriptor(s, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Qn(s, y) {
      if (typeof s.ref == "string" && ct.current && y && ct.current.stateNode !== y) {
        var E = le(ct.current.type);
        Dt[E] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(ct.current.type), s.ref), Dt[E] = !0);
      }
    }
    function Jn(s, y) {
      {
        var E = function() {
          gr || (gr = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        E.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Zn(s, y) {
      {
        var E = function() {
          yr || (yr = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        E.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var eo = function(s, y, E, A, W, Z, Y) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: y,
        ref: E,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function to(s, y, E, A, W) {
      {
        var Z, Y = {}, z = null, he = null;
        E !== void 0 && (mr(E), z = "" + E), Xn(y) && (mr(y.key), z = "" + y.key), Gn(y) && (he = y.ref, Qn(y, W));
        for (Z in y)
          De.call(y, Z) && !qn.hasOwnProperty(Z) && (Y[Z] = y[Z]);
        if (s && s.defaultProps) {
          var ne = s.defaultProps;
          for (Z in ne)
            Y[Z] === void 0 && (Y[Z] = ne[Z]);
        }
        if (z || he) {
          var ie = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          z && Jn(Y, ie), he && Zn(Y, ie);
        }
        return eo(s, z, he, W, A, ct.current, Y);
      }
    }
    var Bt = O.ReactCurrentOwner, vr = O.ReactDebugCurrentFrame;
    function Je(s) {
      if (s) {
        var y = s._owner, E = _e(s.type, s._source, y ? y.type : null);
        vr.setExtraStackFrame(E);
      } else
        vr.setExtraStackFrame(null);
    }
    var Nt;
    Nt = !1;
    function Ft(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function br() {
      {
        if (Bt.current) {
          var s = le(Bt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function ro(s) {
      {
        if (s !== void 0) {
          var y = s.fileName.replace(/^.*[\\\/]/, ""), E = s.lineNumber;
          return `

Check your code at ` + y + ":" + E + ".";
        }
        return "";
      }
    }
    var xr = {};
    function no(s) {
      {
        var y = br();
        if (!y) {
          var E = typeof s == "string" ? s : s.displayName || s.name;
          E && (y = `

Check the top-level render call using <` + E + ">.");
        }
        return y;
      }
    }
    function Er(s, y) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var E = no(y);
        if (xr[E])
          return;
        xr[E] = !0;
        var A = "";
        s && s._owner && s._owner !== Bt.current && (A = " It was passed a child from " + le(s._owner.type) + "."), Je(s), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, A), Je(null);
      }
    }
    function Tr(s, y) {
      {
        if (typeof s != "object")
          return;
        if (Mt(s))
          for (var E = 0; E < s.length; E++) {
            var A = s[E];
            Ft(A) && Er(A, y);
          }
        else if (Ft(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var W = m(s);
          if (typeof W == "function" && W !== s.entries)
            for (var Z = W.call(s), Y; !(Y = Z.next()).done; )
              Ft(Y.value) && Er(Y.value, y);
        }
      }
    }
    function oo(s) {
      {
        var y = s.type;
        if (y == null || typeof y == "string")
          return;
        var E;
        if (typeof y == "function")
          E = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === p))
          E = y.propTypes;
        else
          return;
        if (E) {
          var A = le(y);
          Yn(E, s.props, "prop", A, s);
        } else if (y.PropTypes !== void 0 && !Nt) {
          Nt = !0;
          var W = le(y);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function io(s) {
      {
        for (var y = Object.keys(s.props), E = 0; E < y.length; E++) {
          var A = y[E];
          if (A !== "children" && A !== "key") {
            Je(s), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Je(null);
            break;
          }
        }
        s.ref !== null && (Je(s), R("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
      }
    }
    function Cr(s, y, E, A, W, Z) {
      {
        var Y = ae(s);
        if (!Y) {
          var z = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = ro(W);
          he ? z += he : z += br();
          var ne;
          s === null ? ne = "null" : Mt(s) ? ne = "array" : s !== void 0 && s.$$typeof === t ? (ne = "<" + (le(s.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof s, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, z);
        }
        var ie = to(s, y, E, W, Z);
        if (ie == null)
          return ie;
        if (Y) {
          var Ce = y.children;
          if (Ce !== void 0)
            if (A)
              if (Mt(Ce)) {
                for (var Ze = 0; Ze < Ce.length; Ze++)
                  Tr(Ce[Ze], s);
                Object.freeze && Object.freeze(Ce);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tr(Ce, s);
        }
        return s === n ? io(ie) : oo(ie), ie;
      }
    }
    function so(s, y, E) {
      return Cr(s, y, E, !0);
    }
    function ao(s, y, E) {
      return Cr(s, y, E, !1);
    }
    var co = ao, lo = so;
    ut.Fragment = n, ut.jsx = co, ut.jsxs = lo;
  }()), ut;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ao() : e.exports = jo();
})(Oo);
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, U.apply(this, arguments);
}
function Xe(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function dn(e) {
  if (!Xe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = dn(e[r]);
  }), t;
}
function Le(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? U({}, e) : e;
  return Xe(e) && Xe(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Xe(t[o]) && o in e && Xe(e[o]) ? n[o] = Le(e[o], t[o], r) : r.clone ? n[o] = Xe(t[o]) ? dn(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
var D = {}, Or = {
  get exports() {
    return D;
  },
  set exports(e) {
    D = e;
  }
}, xt = {}, Po = {
  get exports() {
    return xt;
  },
  set exports(e) {
    xt = e;
  }
}, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function $o() {
  if (Ar)
    return q;
  Ar = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function k(b) {
    if (typeof b == "object" && b !== null) {
      var ue = b.$$typeof;
      switch (ue) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case h:
                case S:
                case T:
                case a:
                  return b;
                default:
                  return ue;
              }
          }
        case r:
          return ue;
      }
    }
  }
  function H(b) {
    return k(b) === f;
  }
  return q.AsyncMode = l, q.ConcurrentMode = f, q.ContextConsumer = c, q.ContextProvider = a, q.Element = t, q.ForwardRef = h, q.Fragment = n, q.Lazy = S, q.Memo = T, q.Portal = r, q.Profiler = i, q.StrictMode = o, q.Suspense = p, q.isAsyncMode = function(b) {
    return H(b) || k(b) === l;
  }, q.isConcurrentMode = H, q.isContextConsumer = function(b) {
    return k(b) === c;
  }, q.isContextProvider = function(b) {
    return k(b) === a;
  }, q.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, q.isForwardRef = function(b) {
    return k(b) === h;
  }, q.isFragment = function(b) {
    return k(b) === n;
  }, q.isLazy = function(b) {
    return k(b) === S;
  }, q.isMemo = function(b) {
    return k(b) === T;
  }, q.isPortal = function(b) {
    return k(b) === r;
  }, q.isProfiler = function(b) {
    return k(b) === i;
  }, q.isStrictMode = function(b) {
    return k(b) === o;
  }, q.isSuspense = function(b) {
    return k(b) === p;
  }, q.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === p || b === d || typeof b == "object" && b !== null && (b.$$typeof === S || b.$$typeof === T || b.$$typeof === a || b.$$typeof === c || b.$$typeof === h || b.$$typeof === m || b.$$typeof === O || b.$$typeof === R || b.$$typeof === g);
  }, q.typeOf = k, q;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function Io() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function k(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === f || x === i || x === o || x === p || x === d || typeof x == "object" && x !== null && (x.$$typeof === S || x.$$typeof === T || x.$$typeof === a || x.$$typeof === c || x.$$typeof === h || x.$$typeof === m || x.$$typeof === O || x.$$typeof === R || x.$$typeof === g);
    }
    function H(x) {
      if (typeof x == "object" && x !== null) {
        var pe = x.$$typeof;
        switch (pe) {
          case t:
            var w = x.type;
            switch (w) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case p:
                return w;
              default:
                var _e = w && w.$$typeof;
                switch (_e) {
                  case c:
                  case h:
                  case S:
                  case T:
                  case a:
                    return _e;
                  default:
                    return pe;
                }
            }
          case r:
            return pe;
        }
      }
    }
    var b = l, ue = f, je = c, Pe = a, V = t, ae = h, fe = n, me = S, le = T, oe = r, Re = i, de = o, Te = p, $e = !1;
    function Me(x) {
      return $e || ($e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(x) || H(x) === l;
    }
    function v(x) {
      return H(x) === f;
    }
    function C(x) {
      return H(x) === c;
    }
    function M(x) {
      return H(x) === a;
    }
    function I(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function j(x) {
      return H(x) === h;
    }
    function F(x) {
      return H(x) === n;
    }
    function P(x) {
      return H(x) === S;
    }
    function $(x) {
      return H(x) === T;
    }
    function B(x) {
      return H(x) === r;
    }
    function L(x) {
      return H(x) === i;
    }
    function N(x) {
      return H(x) === o;
    }
    function ce(x) {
      return H(x) === p;
    }
    G.AsyncMode = b, G.ConcurrentMode = ue, G.ContextConsumer = je, G.ContextProvider = Pe, G.Element = V, G.ForwardRef = ae, G.Fragment = fe, G.Lazy = me, G.Memo = le, G.Portal = oe, G.Profiler = Re, G.StrictMode = de, G.Suspense = Te, G.isAsyncMode = Me, G.isConcurrentMode = v, G.isContextConsumer = C, G.isContextProvider = M, G.isElement = I, G.isForwardRef = j, G.isFragment = F, G.isLazy = P, G.isMemo = $, G.isPortal = B, G.isProfiler = L, G.isStrictMode = N, G.isSuspense = ce, G.isValidElementType = k, G.typeOf = H;
  }()), G;
}
var Pr;
function hn() {
  return Pr || (Pr = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = $o() : e.exports = Io();
  }(Po)), xt;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zt, $r;
function ko() {
  if ($r)
    return zt;
  $r = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(h) {
        return a[h];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        f[h] = h;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zt = o() ? Object.assign : function(i, a) {
    for (var c, l = n(i), f, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var p in c)
        t.call(c, p) && (l[p] = c[p]);
      if (e) {
        f = e(c);
        for (var d = 0; d < f.length; d++)
          r.call(c, f[d]) && (l[f[d]] = c[f[d]]);
      }
    }
    return l;
  }, zt;
}
var Lt, Ir;
function Qt() {
  if (Ir)
    return Lt;
  Ir = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Lt = e, Lt;
}
var Ut, kr;
function pn() {
  return kr || (kr = 1, Ut = Function.call.bind(Object.prototype.hasOwnProperty)), Ut;
}
var Vt, Mr;
function Mo() {
  if (Mr)
    return Vt;
  Mr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qt(), r = {}, n = pn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (n(i, h)) {
          var p;
          try {
            if (typeof i[h] != "function") {
              var d = Error(
                (l || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = i[h](a, h, l, c, null, t);
          } catch (S) {
            p = S;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var T = f ? f() : "";
            e(
              "Failed " + c + " type: " + p.message + (T ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Vt = o, Vt;
}
var Yt, Dr;
function Do() {
  if (Dr)
    return Yt;
  Dr = 1;
  var e = hn(), t = ko(), r = Qt(), n = pn(), o = Mo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Yt = function(c, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function p(v) {
      var C = v && (f && v[f] || v[h]);
      if (typeof C == "function")
        return C;
    }
    var d = "<<anonymous>>", T = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: R(),
      arrayOf: k,
      element: H(),
      elementType: b(),
      instanceOf: ue,
      node: ae(),
      objectOf: Pe,
      oneOf: je,
      oneOfType: V,
      shape: me,
      exact: le
    };
    function S(v, C) {
      return v === C ? v !== 0 || 1 / v === 1 / C : v !== v && C !== C;
    }
    function g(v, C) {
      this.message = v, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(v) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, M = 0;
      function I(F, P, $, B, L, N, ce) {
        if (B = B || d, N = N || $, ce !== r) {
          if (l) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = B + ":" + $;
            !C[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[pe] = !0, M++);
          }
        }
        return P[$] == null ? F ? P[$] === null ? new g("The " + L + " `" + N + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new g("The " + L + " `" + N + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : v(P, $, B, L, N);
      }
      var j = I.bind(null, !1);
      return j.isRequired = I.bind(null, !0), j;
    }
    function O(v) {
      function C(M, I, j, F, P, $) {
        var B = M[I], L = de(B);
        if (L !== v) {
          var N = Te(B);
          return new g(
            "Invalid " + F + " `" + P + "` of type " + ("`" + N + "` supplied to `" + j + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return m(C);
    }
    function R() {
      return m(a);
    }
    function k(v) {
      function C(M, I, j, F, P) {
        if (typeof v != "function")
          return new g("Property `" + P + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var $ = M[I];
        if (!Array.isArray($)) {
          var B = de($);
          return new g("Invalid " + F + " `" + P + "` of type " + ("`" + B + "` supplied to `" + j + "`, expected an array."));
        }
        for (var L = 0; L < $.length; L++) {
          var N = v($, L, j, F, P + "[" + L + "]", r);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return m(C);
    }
    function H() {
      function v(C, M, I, j, F) {
        var P = C[M];
        if (!c(P)) {
          var $ = de(P);
          return new g("Invalid " + j + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(v);
    }
    function b() {
      function v(C, M, I, j, F) {
        var P = C[M];
        if (!e.isValidElementType(P)) {
          var $ = de(P);
          return new g("Invalid " + j + " `" + F + "` of type " + ("`" + $ + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(v);
    }
    function ue(v) {
      function C(M, I, j, F, P) {
        if (!(M[I] instanceof v)) {
          var $ = v.name || d, B = Me(M[I]);
          return new g("Invalid " + F + " `" + P + "` of type " + ("`" + B + "` supplied to `" + j + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return m(C);
    }
    function je(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function C(M, I, j, F, P) {
        for (var $ = M[I], B = 0; B < v.length; B++)
          if (S($, v[B]))
            return null;
        var L = JSON.stringify(v, function(ce, x) {
          var pe = Te(x);
          return pe === "symbol" ? String(x) : x;
        });
        return new g("Invalid " + F + " `" + P + "` of value `" + String($) + "` " + ("supplied to `" + j + "`, expected one of " + L + "."));
      }
      return m(C);
    }
    function Pe(v) {
      function C(M, I, j, F, P) {
        if (typeof v != "function")
          return new g("Property `" + P + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var $ = M[I], B = de($);
        if (B !== "object")
          return new g("Invalid " + F + " `" + P + "` of type " + ("`" + B + "` supplied to `" + j + "`, expected an object."));
        for (var L in $)
          if (n($, L)) {
            var N = v($, L, j, F, P + "." + L, r);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return m(C);
    }
    function V(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var C = 0; C < v.length; C++) {
        var M = v[C];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $e(M) + " at index " + C + "."
          ), a;
      }
      function I(j, F, P, $, B) {
        for (var L = [], N = 0; N < v.length; N++) {
          var ce = v[N], x = ce(j, F, P, $, B, r);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && L.push(x.data.expectedType);
        }
        var pe = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new g("Invalid " + $ + " `" + B + "` supplied to " + ("`" + P + "`" + pe + "."));
      }
      return m(I);
    }
    function ae() {
      function v(C, M, I, j, F) {
        return oe(C[M]) ? null : new g("Invalid " + j + " `" + F + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return m(v);
    }
    function fe(v, C, M, I, j) {
      return new g(
        (v || "React class") + ": " + C + " type `" + M + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function me(v) {
      function C(M, I, j, F, P) {
        var $ = M[I], B = de($);
        if (B !== "object")
          return new g("Invalid " + F + " `" + P + "` of type `" + B + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var L in v) {
          var N = v[L];
          if (typeof N != "function")
            return fe(j, F, P, L, Te(N));
          var ce = N($, L, j, F, P + "." + L, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return m(C);
    }
    function le(v) {
      function C(M, I, j, F, P) {
        var $ = M[I], B = de($);
        if (B !== "object")
          return new g("Invalid " + F + " `" + P + "` of type `" + B + "` " + ("supplied to `" + j + "`, expected `object`."));
        var L = t({}, M[I], v);
        for (var N in L) {
          var ce = v[N];
          if (n(v, N) && typeof ce != "function")
            return fe(j, F, P, N, Te(ce));
          if (!ce)
            return new g(
              "Invalid " + F + " `" + P + "` key `" + N + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(M[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var x = ce($, N, j, F, P + "." + N, r);
          if (x)
            return x;
        }
        return null;
      }
      return m(C);
    }
    function oe(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(oe);
          if (v === null || c(v))
            return !0;
          var C = p(v);
          if (C) {
            var M = C.call(v), I;
            if (C !== v.entries) {
              for (; !(I = M.next()).done; )
                if (!oe(I.value))
                  return !1;
            } else
              for (; !(I = M.next()).done; ) {
                var j = I.value;
                if (j && !oe(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Re(v, C) {
      return v === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function de(v) {
      var C = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : Re(C, v) ? "symbol" : C;
    }
    function Te(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var C = de(v);
      if (C === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function $e(v) {
      var C = Te(v);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function Me(v) {
      return !v.constructor || !v.constructor.name ? d : v.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, Yt;
}
var Ht, Br;
function Bo() {
  if (Br)
    return Ht;
  Br = 1;
  var e = Qt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ht = function() {
    function n(a, c, l, f, h, p) {
      if (p !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ht;
}
if (process.env.NODE_ENV !== "production") {
  var No = hn(), Fo = !0;
  Or.exports = Do()(No.isElement, Fo);
} else
  Or.exports = Bo()();
function nt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Et = {}, zo = {
  get exports() {
    return Et;
  },
  set exports(e) {
    Et = e;
  }
}, X = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Lo() {
  if (Nr)
    return X;
  Nr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case f:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case a:
                case l:
                case d:
                case p:
                case i:
                  return m;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return X.ContextConsumer = a, X.ContextProvider = i, X.Element = e, X.ForwardRef = l, X.Fragment = r, X.Lazy = d, X.Memo = p, X.Portal = t, X.Profiler = o, X.StrictMode = n, X.Suspense = f, X.SuspenseList = h, X.isAsyncMode = function() {
    return !1;
  }, X.isConcurrentMode = function() {
    return !1;
  }, X.isContextConsumer = function(m) {
    return g(m) === a;
  }, X.isContextProvider = function(m) {
    return g(m) === i;
  }, X.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, X.isForwardRef = function(m) {
    return g(m) === l;
  }, X.isFragment = function(m) {
    return g(m) === r;
  }, X.isLazy = function(m) {
    return g(m) === d;
  }, X.isMemo = function(m) {
    return g(m) === p;
  }, X.isPortal = function(m) {
    return g(m) === t;
  }, X.isProfiler = function(m) {
    return g(m) === o;
  }, X.isStrictMode = function(m) {
    return g(m) === n;
  }, X.isSuspense = function(m) {
    return g(m) === f;
  }, X.isSuspenseList = function(m) {
    return g(m) === h;
  }, X.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === f || m === h || m === T || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === p || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === S || m.getModuleId !== void 0);
  }, X.typeOf = g, X;
}
var Q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function Uo() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), S = !1, g = !1, m = !1, O = !1, R = !1, k;
    k = Symbol.for("react.module.reference");
    function H(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === r || w === o || R || w === n || w === f || w === h || O || w === T || S || g || m || typeof w == "object" && w !== null && (w.$$typeof === d || w.$$typeof === p || w.$$typeof === i || w.$$typeof === a || w.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === k || w.getModuleId !== void 0));
    }
    function b(w) {
      if (typeof w == "object" && w !== null) {
        var _e = w.$$typeof;
        switch (_e) {
          case e:
            var De = w.type;
            switch (De) {
              case r:
              case o:
              case n:
              case f:
              case h:
                return De;
              default:
                var at = De && De.$$typeof;
                switch (at) {
                  case c:
                  case a:
                  case l:
                  case d:
                  case p:
                  case i:
                    return at;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var ue = a, je = i, Pe = e, V = l, ae = r, fe = d, me = p, le = t, oe = o, Re = n, de = f, Te = h, $e = !1, Me = !1;
    function v(w) {
      return $e || ($e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(w) {
      return Me || (Me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(w) {
      return b(w) === a;
    }
    function I(w) {
      return b(w) === i;
    }
    function j(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }
    function F(w) {
      return b(w) === l;
    }
    function P(w) {
      return b(w) === r;
    }
    function $(w) {
      return b(w) === d;
    }
    function B(w) {
      return b(w) === p;
    }
    function L(w) {
      return b(w) === t;
    }
    function N(w) {
      return b(w) === o;
    }
    function ce(w) {
      return b(w) === n;
    }
    function x(w) {
      return b(w) === f;
    }
    function pe(w) {
      return b(w) === h;
    }
    Q.ContextConsumer = ue, Q.ContextProvider = je, Q.Element = Pe, Q.ForwardRef = V, Q.Fragment = ae, Q.Lazy = fe, Q.Memo = me, Q.Portal = le, Q.Profiler = oe, Q.StrictMode = Re, Q.Suspense = de, Q.SuspenseList = Te, Q.isAsyncMode = v, Q.isConcurrentMode = C, Q.isContextConsumer = M, Q.isContextProvider = I, Q.isElement = j, Q.isForwardRef = F, Q.isFragment = P, Q.isLazy = $, Q.isMemo = B, Q.isPortal = L, Q.isProfiler = N, Q.isStrictMode = ce, Q.isSuspense = x, Q.isSuspenseList = pe, Q.isValidElementType = H, Q.typeOf = b;
  }()), Q;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Lo() : e.exports = Uo();
})(zo);
const Vo = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Yo(e) {
  const t = `${e}`.match(Vo);
  return t && t[1] || "";
}
function mn(e, t = "") {
  return e.displayName || e.name || Yo(e) || t;
}
function zr(e, t, r) {
  const n = mn(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ho(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return mn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Et.ForwardRef:
          return zr(e, e.render, "ForwardRef");
        case Et.Memo:
          return zr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ae(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Wo(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Ko(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(i, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function qo(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, a) => {
    const c = o || "<<anonymous>>", l = a || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${l}\` of \`${c}\` is deprecated. ${t}`) : null;
  };
}
function Go(e, t) {
  return /* @__PURE__ */ _.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function gn(e) {
  return e && e.ownerDocument || document;
}
function Xo(e) {
  return gn(e).defaultView || window;
}
function Qo(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? U({}, t.propTypes) : null;
  return (o) => (i, a, c, l, f, ...h) => {
    const p = f || a, d = r == null ? void 0 : r[p];
    if (d) {
      const T = d(i, a, c, l, f, ...h);
      if (T)
        return T;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function yn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Jo = typeof window < "u" ? _.useLayoutEffect : _.useEffect, vn = Jo;
let Lr = 0;
function Zo(e) {
  const [t, r] = _.useState(e), n = e || t;
  return _.useEffect(() => {
    t == null && (Lr += 1, r(`mui-${Lr}`));
  }, [t]), n;
}
const Ur = _["useId"];
function ei(e) {
  if (Ur !== void 0) {
    const t = Ur();
    return e ?? t;
  }
  return Zo(e);
}
function ti(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function ri({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = _.useRef(e !== void 0), [i, a] = _.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    _.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: f
    } = _.useRef(t);
    _.useEffect(() => {
      !o && f !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = _.useCallback((f) => {
    o || a(f);
  }, []);
  return [c, l];
}
function ni(e) {
  const t = _.useRef(e);
  return vn(() => {
    t.current = e;
  }), _.useCallback((...r) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...r)
  ), []);
}
function oi(...e) {
  return _.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      yn(r, t);
    });
  }, e);
}
let Ct = !0, Xt = !1, Vr;
const ii = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function si(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && ii[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function ai(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ct = !0);
}
function Wt() {
  Ct = !1;
}
function ci() {
  this.visibilityState === "hidden" && Xt && (Ct = !0);
}
function li(e) {
  e.addEventListener("keydown", ai, !0), e.addEventListener("mousedown", Wt, !0), e.addEventListener("pointerdown", Wt, !0), e.addEventListener("touchstart", Wt, !0), e.addEventListener("visibilitychange", ci, !0);
}
function ui(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ct || si(t);
}
function fi() {
  const e = _.useCallback((o) => {
    o != null && li(o.ownerDocument);
  }, []), t = _.useRef(!1);
  function r() {
    return t.current ? (Xt = !0, window.clearTimeout(Vr), Vr = window.setTimeout(() => {
      Xt = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return ui(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function bn(e, t) {
  const r = U({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = U({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = U({}, i), Object.keys(o).forEach((a) => {
        r[n][a] = bn(o[a], i[a]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function di(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => {
        if (a) {
          const c = t(a);
          c !== "" && i.push(c), r && r[a] && i.push(r[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Yr = (e) => e, hi = () => {
  let e = Yr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Yr;
    }
  };
}, pi = hi(), xn = pi, mi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  readOnly: "readOnly",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function Jt(e, t, r = "Mui") {
  const n = mi[t];
  return n ? `${r}-${n}` : `${xn.generate(e)}-${t}`;
}
function gi(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Jt(e, o, r);
  }), n;
}
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function En(e, t) {
  const r = Ro(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const yi = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, vi = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.string, D.object, D.array]) : {}, He = vi;
function dt(e, t) {
  return t ? Le(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Zt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Hr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Zt[e]}px)`
};
function ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Hr;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Hr;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(i.values || Zt).indexOf(c) !== -1) {
        const l = i.up(c);
        a[l] = r(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function bi(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function xi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function St(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Tt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = St(e, r) || n, t && (o = t(o, n, e)), o;
}
function J(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, f = St(l, n) || {};
    return ke(a, c, (p) => {
      let d = Tt(f, o, p);
      return p === d && typeof p == "string" && (d = Tt(f, o, `${t}${p === "default" ? "" : Ae(p)}`, p)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: He
  } : {}, i.filterProps = [t], i;
}
function wt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? dt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ei(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ti = {
  m: "margin",
  p: "padding"
}, Ci = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Si = Ei((e) => {
  if (e.length > 2)
    if (Wr[e])
      e = Wr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ti[t], o = Ci[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Rt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _t = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], wi = [...Rt, ..._t];
function pt(e, t, r, n) {
  var o;
  const i = (o = St(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Tn(e) {
  return pt(e, "spacing", 8, "spacing");
}
function mt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Ri(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = mt(t, r), n), {});
}
function _i(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Si(r), i = Ri(o, n), a = e[r];
  return ke(e, a, i);
}
function Cn(e, t) {
  const r = Tn(e.theme);
  return Object.keys(e).map((n) => _i(e, t, n, r)).reduce(dt, {});
}
function te(e) {
  return Cn(e, Rt);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Rt.reduce((e, t) => (e[t] = He, e), {}) : {};
te.filterProps = Rt;
function re(e) {
  return Cn(e, _t);
}
re.propTypes = process.env.NODE_ENV !== "production" ? _t.reduce((e, t) => (e[t] = He, e), {}) : {};
re.filterProps = _t;
process.env.NODE_ENV !== "production" && wi.reduce((e, t) => (e[t] = He, e), {});
function Ie(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Oi = J({
  prop: "border",
  themeKey: "borders",
  transform: Ie
}), Ai = J({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ie
}), ji = J({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ie
}), Pi = J({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ie
}), $i = J({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ie
}), Ii = J({
  prop: "borderColor",
  themeKey: "palette"
}), ki = J({
  prop: "borderTopColor",
  themeKey: "palette"
}), Mi = J({
  prop: "borderRightColor",
  themeKey: "palette"
}), Di = J({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Bi = J({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Ot = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = pt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: mt(t, n)
    });
    return ke(e, e.borderRadius, r);
  }
  return null;
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: He
} : {};
Ot.filterProps = ["borderRadius"];
wt(Oi, Ai, ji, Pi, $i, Ii, ki, Mi, Di, Bi, Ot);
const At = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = pt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: mt(t, n)
    });
    return ke(e, e.gap, r);
  }
  return null;
};
At.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: He
} : {};
At.filterProps = ["gap"];
const jt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = pt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: mt(t, n)
    });
    return ke(e, e.columnGap, r);
  }
  return null;
};
jt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: He
} : {};
jt.filterProps = ["columnGap"];
const Pt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = pt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: mt(t, n)
    });
    return ke(e, e.rowGap, r);
  }
  return null;
};
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: He
} : {};
Pt.filterProps = ["rowGap"];
const Ni = J({
  prop: "gridColumn"
}), Fi = J({
  prop: "gridRow"
}), zi = J({
  prop: "gridAutoFlow"
}), Li = J({
  prop: "gridAutoColumns"
}), Ui = J({
  prop: "gridAutoRows"
}), Vi = J({
  prop: "gridTemplateColumns"
}), Yi = J({
  prop: "gridTemplateRows"
}), Hi = J({
  prop: "gridTemplateAreas"
}), Wi = J({
  prop: "gridArea"
});
wt(At, jt, Pt, Ni, Fi, zi, Li, Ui, Vi, Yi, Hi, Wi);
function rt(e, t) {
  return t === "grey" ? t : e;
}
const Ki = J({
  prop: "color",
  themeKey: "palette",
  transform: rt
}), qi = J({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: rt
}), Gi = J({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: rt
});
wt(Ki, qi, Gi);
function ye(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Xi = J({
  prop: "width",
  transform: ye
}), er = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o, i;
      return {
        maxWidth: ((n = e.theme) == null || (o = n.breakpoints) == null || (i = o.values) == null ? void 0 : i[r]) || Zt[r] || ye(r)
      };
    };
    return ke(e, e.maxWidth, t);
  }
  return null;
};
er.filterProps = ["maxWidth"];
const Qi = J({
  prop: "minWidth",
  transform: ye
}), Ji = J({
  prop: "height",
  transform: ye
}), Zi = J({
  prop: "maxHeight",
  transform: ye
}), es = J({
  prop: "minHeight",
  transform: ye
});
J({
  prop: "size",
  cssProperty: "width",
  transform: ye
});
J({
  prop: "size",
  cssProperty: "height",
  transform: ye
});
const ts = J({
  prop: "boxSizing"
});
wt(Xi, er, Qi, Ji, Zi, es, ts);
const Kt = (e) => (t) => {
  if (t[e] !== void 0 && t[e] !== null) {
    const r = (n) => {
      var o;
      let i = (o = t.theme.typography) == null ? void 0 : o[n];
      if (typeof i == "object" && (i = null), !i) {
        var a, c;
        i = (a = t.theme.typography) == null ? void 0 : a[`${e}${t[e] === "default" || t[e] === e ? "" : Ae((c = t[e]) == null ? void 0 : c.toString())}`];
      }
      if (!i) {
        var l, f, h;
        i = (l = (f = t.theme.typography) == null || (h = f[n]) == null ? void 0 : h[e]) != null ? l : n;
      }
      return {
        [e]: i
      };
    };
    return ke(t, t[e], r);
  }
  return null;
}, rs = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ie
  },
  borderTop: {
    themeKey: "borders",
    transform: Ie
  },
  borderRight: {
    themeKey: "borders",
    transform: Ie
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ie
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ie
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ot
  },
  // palette
  color: {
    themeKey: "palette",
    transform: rt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: rt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: rt
  },
  // spacing
  p: {
    style: re
  },
  pt: {
    style: re
  },
  pr: {
    style: re
  },
  pb: {
    style: re
  },
  pl: {
    style: re
  },
  px: {
    style: re
  },
  py: {
    style: re
  },
  padding: {
    style: re
  },
  paddingTop: {
    style: re
  },
  paddingRight: {
    style: re
  },
  paddingBottom: {
    style: re
  },
  paddingLeft: {
    style: re
  },
  paddingX: {
    style: re
  },
  paddingY: {
    style: re
  },
  paddingInline: {
    style: re
  },
  paddingInlineStart: {
    style: re
  },
  paddingInlineEnd: {
    style: re
  },
  paddingBlock: {
    style: re
  },
  paddingBlockStart: {
    style: re
  },
  paddingBlockEnd: {
    style: re
  },
  m: {
    style: te
  },
  mt: {
    style: te
  },
  mr: {
    style: te
  },
  mb: {
    style: te
  },
  ml: {
    style: te
  },
  mx: {
    style: te
  },
  my: {
    style: te
  },
  margin: {
    style: te
  },
  marginTop: {
    style: te
  },
  marginRight: {
    style: te
  },
  marginBottom: {
    style: te
  },
  marginLeft: {
    style: te
  },
  marginX: {
    style: te
  },
  marginY: {
    style: te
  },
  marginInline: {
    style: te
  },
  marginInlineStart: {
    style: te
  },
  marginInlineEnd: {
    style: te
  },
  marginBlock: {
    style: te
  },
  marginBlockStart: {
    style: te
  },
  marginBlockEnd: {
    style: te
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: At
  },
  rowGap: {
    style: Pt
  },
  columnGap: {
    style: jt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ye
  },
  maxWidth: {
    style: er
  },
  minWidth: {
    transform: ye
  },
  height: {
    transform: ye
  },
  maxHeight: {
    transform: ye
  },
  minHeight: {
    transform: ye
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography",
    style: Kt("fontFamily")
  },
  fontSize: {
    themeKey: "typography",
    style: Kt("fontSize")
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography",
    style: Kt("fontWeight")
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, $t = rs;
function ns(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function os(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function is() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: f,
      transform: h,
      style: p
    } = c;
    if (n == null)
      return null;
    const d = St(o, f) || {};
    return p ? p(a) : ke(a, n, (S) => {
      let g = Tt(d, h, S);
      return S === g && typeof S == "string" && (g = Tt(d, h, `${r}${S === "default" ? "" : Ae(S)}`, S)), l === !1 ? g : {
        [l]: g
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : $t;
    function c(l) {
      let f = l;
      if (typeof l == "function")
        f = l(i);
      else if (typeof l != "object")
        return l;
      if (!f)
        return null;
      const h = bi(i.breakpoints), p = Object.keys(h);
      let d = h;
      return Object.keys(f).forEach((T) => {
        const S = os(f[T], i);
        if (S != null)
          if (typeof S == "object")
            if (a[T])
              d = dt(d, e(T, S, i, a));
            else {
              const g = ke({
                theme: i
              }, S, (m) => ({
                [T]: m
              }));
              ns(g, S) ? d[T] = t({
                sx: S,
                theme: i
              }) : d = dt(d, g);
            }
          else
            d = dt(d, e(T, S, i, a));
      }), xi(p, d);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Sn = is();
Sn.filterProps = ["sx"];
const It = Sn;
function be(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const ss = ["sx"], as = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : $t;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function cs(e) {
  const {
    sx: t
  } = e, r = be(e, ss), {
    systemProps: n,
    otherProps: o
  } = as(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const c = t(...a);
    return Xe(c) ? U({}, n, c) : n;
  } : i = U({}, n, t), U({}, o, {
    sx: i
  });
}
function wn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = wn(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Rn() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = wn(e)) && (n && (n += " "), n += t);
  return n;
}
const ls = ["values", "unit", "step"], us = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => U({}, r, {
    [n.key]: n.val
  }), {});
};
function fs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = be(e, ls), i = us(t), a = Object.keys(i);
  function c(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function f(d, T) {
    const S = a.indexOf(T);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : T) - n / 100}${r})`;
  }
  function h(d) {
    return a.indexOf(d) + 1 < a.length ? f(d, a[a.indexOf(d) + 1]) : c(d);
  }
  function p(d) {
    const T = a.indexOf(d);
    return T === 0 ? c(a[1]) : T === a.length - 1 ? l(a[T]) : f(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return U({
    keys: a,
    values: i,
    up: c,
    down: l,
    between: f,
    only: h,
    not: p,
    unit: r
  }, o);
}
const ds = {
  borderRadius: 4
}, hs = ds;
function ps(e = 8) {
  if (e.mui)
    return e;
  const t = Tn({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
const ms = ["breakpoints", "palette", "spacing", "shape"];
function tr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = be(e, ms), c = fs(r), l = ps(o);
  let f = Le({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: U({
      mode: "light"
    }, n),
    spacing: l,
    shape: U({}, hs, i)
  }, a);
  return f = t.reduce((h, p) => Le(h, p), f), f.unstable_sxConfig = U({}, $t, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return It({
      sx: p,
      theme: this
    });
  }, f;
}
const _n = /* @__PURE__ */ _.createContext(null);
process.env.NODE_ENV !== "production" && (_n.displayName = "ThemeContext");
const gs = _n;
function ys() {
  const e = _.useContext(gs);
  return process.env.NODE_ENV !== "production" && _.useDebugValue(e), e;
}
function vs(e) {
  return Object.keys(e).length === 0;
}
function bs(e = null) {
  const t = ys();
  return !t || vs(t) ? e : t;
}
const xs = tr();
function On(e = xs) {
  return bs(e);
}
const Es = ["className", "component"];
function Ts(e = {}) {
  const {
    defaultTheme: t,
    defaultClassName: r = "MuiBox-root",
    generateClassName: n
  } = e, o = En("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(It);
  return /* @__PURE__ */ _.forwardRef(function(c, l) {
    const f = On(t), h = cs(c), {
      className: p,
      component: d = "div"
    } = h, T = be(h, Es);
    return /* @__PURE__ */ u.jsx(o, U({
      as: d,
      ref: l,
      className: Rn(p, n ? n(r) : r),
      theme: f
    }, T));
  });
}
const An = Ts();
process.env.NODE_ENV !== "production" && (An.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: D.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object])
});
const Ye = An, Cs = ["variant"];
function Kr(e) {
  return e.length === 0;
}
function jn(e) {
  const {
    variant: t
  } = e, r = be(e, Cs);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += Kr(n) ? e[o] : Ae(e[o]) : n += `${Kr(n) ? o : Ae(o)}${Ae(e[o].toString())}`;
  }), n;
}
const Ss = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], ws = ["theme"], Rs = ["theme"];
function ft(e) {
  return Object.keys(e).length === 0;
}
function _s(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Os = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, As = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((o) => {
    const i = jn(o.props);
    n[i] = o.style;
  }), n;
}, js = (e, t, r, n) => {
  var o, i;
  const {
    ownerState: a = {}
  } = e, c = [], l = r == null || (o = r.components) == null || (i = o[n]) == null ? void 0 : i.variants;
  return l && l.forEach((f) => {
    let h = !0;
    Object.keys(f.props).forEach((p) => {
      a[p] !== f.props[p] && e[p] !== f.props[p] && (h = !1);
    }), h && c.push(t[jn(f.props)]);
  }), c;
};
function bt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ps = tr(), $s = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Pn(e = {}) {
  const {
    defaultTheme: t = Ps,
    rootShouldForwardProp: r = bt,
    slotShouldForwardProp: n = bt
  } = e, o = (i) => {
    const a = ft(i.theme) ? t : i.theme;
    return It(U({}, i, {
      theme: a
    }));
  };
  return o.__mui_systemSx = !0, (i, a = {}) => {
    yi(i, (k) => k.filter((H) => !(H != null && H.__mui_systemSx)));
    const {
      name: c,
      slot: l,
      skipVariantsResolver: f,
      skipSx: h,
      overridesResolver: p
    } = a, d = be(a, Ss), T = f !== void 0 ? f : l && l !== "Root" || !1, S = h || !1;
    let g;
    process.env.NODE_ENV !== "production" && c && (g = `${c}-${$s(l || "Root")}`);
    let m = bt;
    l === "Root" ? m = r : l ? m = n : _s(i) && (m = void 0);
    const O = En(i, U({
      shouldForwardProp: m,
      label: g
    }, d)), R = (k, ...H) => {
      const b = H ? H.map((V) => typeof V == "function" && V.__emotion_real !== V ? (ae) => {
        let {
          theme: fe
        } = ae, me = be(ae, ws);
        return V(U({
          theme: ft(fe) ? t : fe
        }, me));
      } : V) : [];
      let ue = k;
      c && p && b.push((V) => {
        const ae = ft(V.theme) ? t : V.theme, fe = Os(c, ae);
        if (fe) {
          const me = {};
          return Object.entries(fe).forEach(([le, oe]) => {
            me[le] = typeof oe == "function" ? oe(U({}, V, {
              theme: ae
            })) : oe;
          }), p(V, me);
        }
        return null;
      }), c && !T && b.push((V) => {
        const ae = ft(V.theme) ? t : V.theme;
        return js(V, As(c, ae), ae, c);
      }), S || b.push(o);
      const je = b.length - H.length;
      if (Array.isArray(k) && je > 0) {
        const V = new Array(je).fill("");
        ue = [...k, ...V], ue.raw = [...k.raw, ...V];
      } else
        typeof k == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        k.__emotion_real !== k && (ue = (V) => {
          let {
            theme: ae
          } = V, fe = be(V, Rs);
          return k(U({
            theme: ft(ae) ? t : ae
          }, fe));
        });
      const Pe = O(ue, ...b);
      if (process.env.NODE_ENV !== "production") {
        let V;
        c && (V = `${c}${l || ""}`), V === void 0 && (V = `Styled(${Ho(i)})`), Pe.displayName = V;
      }
      return Pe;
    };
    return O.withConfig && (R.withConfig = O.withConfig), R;
  };
}
const Is = Pn(), $n = Is;
function ks(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : bn(t.components[r].defaultProps, n);
}
function Ms({
  props: e,
  name: t,
  defaultTheme: r
}) {
  const n = On(r);
  return ks({
    theme: n,
    name: t,
    props: e
  });
}
function In(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function Ds(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ot(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ot(Ds(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : nt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : nt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
function rr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Bs(e) {
  e = ot(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, h = (f + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), rr({
    type: c,
    values: l
  });
}
function qr(e) {
  e = ot(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ot(Bs(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Gr(e, t) {
  const r = qr(e), n = qr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ns(e, t) {
  if (e = ot(e), t = In(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return rr(e);
}
function Fs(e, t) {
  if (e = ot(e), t = In(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return rr(e);
}
function zs(e) {
  const [t, r] = se(null);
  return ze(() => {
    if (!e.current)
      throw Error("ref must be initialized in intial render");
    const n = new ResizeObserver((i) => {
      const c = i[0].target.getBoundingClientRect();
      r((l) => l && l.width === c.width && l.height === c.height ? l : {
        width: c.width,
        height: c.height
      });
    }), o = e.current;
    return n.observe(o), () => {
      n.unobserve(o);
    };
  }, [e]), t;
}
function Ls({ containerSize: e }) {
  const t = an(null), { core: r } = we();
  return ze(() => (r.setCanvas(t.current), () => {
    r.detach();
  }), [r]), ze(() => {
    r.setContainerSize(e);
  }, [e, r]), /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("canvas", { ref: t }) });
}
class gt {
  /**
   *
   * @param {EditorCore} core
   */
  constructor(t, r) {
    this.core = t, this.config = r, this.c = t.c, this.name = "unknown";
  }
}
class Us extends gt {
  constructor(t, r) {
    super(t, r), this.onPathCreated = (n) => {
      const o = n.path;
      o.selectable = !1, o.hoverCursor = "default";
    };
  }
  onSelect() {
    this.c.isDrawingMode = !0, this.c.freeDrawingBrush = new Oe.EraserBrush(this.c), this.c.freeDrawingBrush.width = this.config.thickness * 4 / this.core.zoomMin, this.c.on("path:created", this.onPathCreated);
  }
  onDeselect() {
    this.c.isDrawingMode = !1, this.c.off("path:created", this.onPathCreated);
  }
}
class Vs extends gt {
  onSelect() {
    this.c.isDrawingMode = !0, this.c.freeDrawingBrush = new Oe.PencilBrush(this.c), this.c.freeDrawingBrush.width = this.config.thickness * 1 / this.core.zoomMin, this.c.freeDrawingBrush.color = this.config.color.code;
  }
  onDeselect() {
    this.c.isDrawingMode = !1;
  }
}
function Ys(e, t) {
  var r = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16);
  return t ? "rgba(" + r + ", " + n + ", " + o + ", " + t + ")" : "rgb(" + r + ", " + n + ", " + o + ")";
}
class Hs extends gt {
  onSelect() {
    this.c.isDrawingMode = !0, this.c.freeDrawingBrush = new Oe.PencilBrush(this.c), this.c.freeDrawingBrush.width = this.config.thickness * 8 / this.core.zoomMin, this.c.freeDrawingBrush.color = Ys(this.config.color.code, 0.4), this.c.isDrawingMode = !0;
  }
  onDeselect() {
    this.c.isDrawingMode = !1;
  }
}
class Ws extends gt {
  constructor(t, r = null) {
    super(t, r), this.touchPositions = {}, this.onMouseDown = (n) => {
      const o = n.e;
      if (o.type === "touchstart") {
        this.isDragging = o.touches.length === 1;
        for (const i of o.changedTouches)
          this.touchPositions[i.identifier] = {
            x: i.clientX,
            y: i.clientY
          };
      } else
        this.isDragging = !0, this.lastPosX = o.clientX, this.lastPosY = o.clientY;
    }, this.onMouseUp = (n) => {
      const o = n.e;
      if (o.type === "touchend")
        for (const i of o.changedTouches)
          delete this.touchPositions[i.identifier];
      this.c.setViewportTransform(this.c.viewportTransform), this.isDragging = !1;
    }, this.onMouseMove = (n) => {
      if (n.e.type === "mousemove" && this.isDragging) {
        const o = n.e;
        this.core.pan(o.clientX - this.lastPosX, o.clientY - this.lastPosY), this.lastPosX = o.clientX, this.lastPosY = o.clientY;
      }
    }, this.onObjectSelected = (n) => {
      this.pausePanning = !0;
    }, this.onSelectionCleared = (n) => {
      this.pausePanning = !1;
    }, this.onTouchDrag = (n) => {
      const o = n.e;
      if (o.type === "touchmove" && this.isDragging) {
        if (o.touches.length > 1)
          return;
        for (const i of o.changedTouches) {
          const a = this.touchPositions[i.identifier];
          if (!a)
            return;
          this.core.pan(i.clientX - a.x, i.clientY - a.y), this.touchPositions[i.identifier] = {
            x: i.clientX,
            y: i.clientY
          };
        }
      }
    };
  }
  onSelect() {
    this.c.on("mouse:down", this.onMouseDown), this.c.on("mouse:move", this.onMouseMove), this.c.on("mouse:up", this.onMouseUp), this.c.on("object:selected", this.onObjectSelected), this.c.on("selection:cleared", this.onSelectionCleared), this.c.on("touch:drag", this.onTouchDrag);
  }
  onDeselect() {
    this.c.off("mouse:down", this.onMouseDown), this.c.off("mouse:move", this.onMouseMove), this.c.off("mouse:up", this.onMouseUp), this.c.off("object:selected", this.onObjectSelected), this.c.off("selection:cleared", this.onSelectionCleared), this.c.off("touch:drag", this.onTouchDrag);
  }
}
class Ks extends gt {
  constructor(t, r = null) {
    super(t, r);
  }
  onDeselect() {
    this.c.discardActiveObject().renderAll();
  }
}
const K = {
  FREEDRAW: "FREEDRAW",
  SELECT: "SELECT",
  PAN: "PAN",
  TEXT: "TEXT",
  MARKER: "MARKER",
  ERASER: "ERASER"
}, Ne = {
  BLACK: "#000000",
  RED: "#d82735",
  YELLOW: "#ffcb35",
  GREEN: "#009e47",
  BLUE: "#0052a5"
}, vt = 6, Xr = 60, qs = {
  HISTORY_CHANGE: "history.change",
  AVAILABILITY_CHANGE: "availability.change",
  TOOL_CHANGE: "tool.change",
  MODE_CHANGE: "mode.change",
  TEXT_CHANGE: "text.change"
}, Gs = {
  BRUSH: "BRUSH",
  TEXT: "TEXT",
  IMAGE: "IMAGE"
}, Xs = {
  FREEDRAW: "FREEBRUSH",
  MARKER: "MARKER",
  ERASER: "ERASER",
  TEXT: "TEXT"
}, Se = class extends EventTarget {
  constructor({
    imageUrl: r,
    touchEnabled: n
  }) {
    super();
    ge(this, "mode", Se.Mode.BRUSH);
    ge(this, "imageUrl");
    ge(this, "_busy");
    ge(this, "zoomMin", 1);
    ge(this, "zoomMax", 2);
    ge(this, "history", {
      index: -1,
      records: []
    });
    ge(this, "_isTraversingHistory", !1);
    ge(this, "touchEnabled");
    ge(this, "c", null);
    this.config = this.fetchConfig(), this._busy = !0, this.imageUrl = r, this.tools = {
      [K.FREEDRAW]: {
        class: Vs
      },
      [K.MARKER]: {
        class: Hs
      },
      [K.ERASER]: {
        class: Us
      },
      [K.PAN]: {
        class: Ws
      },
      [K.SELECT]: {
        class: Ks
      }
    }, this.touchEnabled = n;
  }
  setCanvas(r) {
    this.c = new Oe.Canvas(r, {
      selection: !1
    });
    const n = this.c;
    this.c.usePencil = this.touchEnabled ? this.config.usePencil : !1, Oe.Image.fromURL(
      this.imageUrl,
      (o) => {
        n.getElement() && (o.erasable = !1, this.busy = !1, n.setBackgroundImage(o, null), this.fitCanvas(), this.pushHistory(), this.selectTool(this.fetchTool()), this.c.on("touch:gesture", this.onGesture), this.c.on("mouse:up", this.onMouseUp), this.c.on("object:added", this.onObjectAdded), this.c.on("object:modified", this.onObjectModified), this.c.on("object:removed", this.onObjectRemoved), this.c.on("selection:created", this.onObjectSelected), this.c.on("selection:cleared", this.onObjectDeselected));
      },
      {
        crossOrigin: "anonymous"
      }
    ), this.c.on("mouse:wheel", (o) => {
      o.e.preventDefault(), o.e.stopPropagation();
      const i = o.e.deltaY;
      this.zoom(
        { x: o.e.offsetX, y: o.e.offsetY },
        this.c.getZoom() * 0.999 ** i
      );
    }), this.onGesture = (o) => {
      const i = o.e;
      if (i.touches && i.touches.length === 2) {
        this.isDragging = !1;
        const a = new Oe.Point(o.self.x, o.self.y), c = [];
        for (const f of i.touches)
          c.push({
            identifier: f.identifier,
            clientX: f.clientX,
            clientY: f.clientY
          });
        if (o.self.state === "start") {
          this.zoomStartScale = this.c.getZoom(), this.touches = c;
          return;
        }
        this.lastPoint && this.pan(a.x - this.lastPoint.x, a.y - this.lastPoint.y);
        const l = this.zoomStartScale * (i.scale ?? o.self.scale);
        this.zoom(a, l), this.lastPoint = a, this.touches = c;
      }
    }, this.onMouseUp = (o) => {
      o.e.type === "touchend" && (this.lastPoint = null, this.touches = null);
    }, this.onObjectAdded = (o) => {
      if (o.target.type === "path") {
        const i = o.target;
        i.selectable = !1, i.hoverCursor = "default";
      }
      this.c.getObjects("image").forEach((i) => {
        this.c.bringToFront(i);
      }), this.c.getObjects("path").forEach((i) => {
        this.c.bringToFront(i);
      }), this.c.getObjects("i-text").forEach((i) => {
        this.c.bringToFront(i);
      }), !this.isTraversingHistory && this.pushHistory();
    }, this.onObjectModified = (o) => {
      if (!this.isTraversingHistory) {
        if (o.target.type === "i-text" && o.target.text.trim() === "") {
          const i = this.isTraversingHistory;
          this.isTraversingHistory = !0, this.c.remove(o.target), this.isTraversingHistory = i;
        }
        this.pushHistory();
      }
    }, this.onObjectRemoved = (o) => {
      this.isTraversingHistory || this.pushHistory();
    }, this.onObjectSelected = (o) => {
      const i = o.selected[0];
      switch (i.type) {
        case "i-text":
          this._dispatch(Se.Event.MODE_CHANGE, Se.Mode.TEXT);
          return;
        case "image":
          this._dispatch(Se.Event.MODE_CHANGE, Se.Mode.IMAGE);
          return;
        default:
          throw new Error(`object type ${i.type} selected`);
      }
    }, this.onObjectDeselected = (o) => {
      this._dispatch(Se.Event.MODE_CHANGE, Se.Mode.BRUSH);
    };
  }
  zoom(r, n) {
    const o = Math.max(this.zoomMin, Math.min(this.zoomMax, n));
    this.c.zoomToPoint(r, o), this.adjustPan();
  }
  pan(r, n) {
    this.c.relativePan({ x: r, y: n }), this.adjustPan();
  }
  clamp(r, n, o) {
    return Math.min(Math.max(r, n), o);
  }
  adjustPan() {
    const r = this.c.viewportTransform, n = this.c.getZoom(), o = {
      x: this.c.getWidth() * (1 / this.zoomMin - 1) / 2,
      y: this.c.getHeight() * (1 / this.zoomMin - 1) / 2
    }, i = {
      width: (o.x + this.c.backgroundImage.left) * 2 + this.c.backgroundImage.width,
      height: (o.y + this.c.backgroundImage.top) * 2 + this.c.backgroundImage.height
    }, a = {
      x: {
        min: this.c.getWidth() + (o.x - i.width) * n,
        max: o.x * n
      },
      y: {
        min: this.c.getHeight() + (o.y - i.height) * n,
        max: o.y * n
      }
    };
    r[4] = this.clamp(r[4], a.x.min, a.x.max), r[5] = this.clamp(r[5], a.y.min, a.y.max), this.c.setViewportTransform(r);
  }
  detach() {
    this.c && (this.c.dispose(), this.tool = null);
  }
  getToolConfig(r) {
    switch (r) {
      case K.FREEDRAW:
        return this.config.freedraw;
      case K.MARKER:
        return this.config.marker;
      case K.ERASER:
        return this.config.eraser;
      default:
        return null;
    }
  }
  selectTool(r) {
    var a, c, l;
    if (!this.available)
      return;
    const n = this.getToolConfig(r), o = new this.tools[r].class(this, n), i = this.tool;
    (c = i == null ? void 0 : (a = i.instance).onDeselect) == null || c.call(a), this.tool = { name: r, instance: o }, (l = o.onSelect) == null || l.call(o), (i == null ? void 0 : i.type) !== o && this._dispatch(Se.Event.TOOL_CHANGE, r), this.cacheTool();
  }
  updateToolConfig(r, n) {
    const o = this.getToolConfig(r), i = Object.assign({}, o, n);
    switch (r) {
      case K.FREEDRAW:
        this.config.freedraw = i;
        break;
      case K.MARKER:
        this.config.marker = i;
        break;
      case K.ERASER:
        this.config.eraser = i;
        break;
      default:
        throw new Error(`Invalid toolId ${r}`);
    }
    return this.tool.name === r && this.selectTool(r), this.cacheConfig(), i;
  }
  setContainerSize(r) {
    this.containerSize = r, this.fitCanvas();
  }
  addImage(r) {
    this.available && (this.busy = !0, this.selectTool(K.SELECT), Oe.Image.fromURL(
      r,
      (n) => {
        this.c.add(n), this.c.centerObject(n), this.c.setActiveObject(n), n.erasable = !1, this.busy = !1;
      },
      {
        crossOrigin: "anonymous"
      }
    ));
  }
  calcTextSize(r) {
    return (vt + r / 100 * (Xr - vt)) / this.zoomMin;
  }
  calcFontSize(r) {
    return (r * this.zoomMin - vt) / (Xr - vt) * 100;
  }
  addText(r) {
    if (!this.available)
      return;
    this.selectTool(K.SELECT);
    const n = new Oe.IText(r);
    n.set("fill", this.config.text.color.code), n.set("fontSize", this.calcTextSize(this.config.text.fontSize)), this.c.viewportCenterObject(n), n.erasable = !1, this.c.add(n), this.c.setActiveObject(n), n.selectAll(), n.enterEditing();
  }
  async undo() {
    if (!this.available || this.history.index === 0)
      return;
    this.history.index -= 1;
    const r = this.history.records[this.history.index];
    await this.loadFromHistory(r), this._dispatchHistoryChange();
  }
  async redo() {
    if (!this.available || this.history.index >= this.history.records.length - 1)
      return;
    this.history.index += 1;
    const r = this.history.records[this.history.index];
    await this.loadFromHistory(r), this._dispatchHistoryChange();
  }
  async loadFromHistory(r) {
    this.isTraversingHistory = !0, await new Promise((n, o) => {
      try {
        Oe.util.enlivenObjects(
          r,
          (i) => {
            this.c.remove(...this.c.getObjects()), i.forEach((a) => {
              this.c.add(a);
            }), this.c.renderAll(), n();
          },
          null
        );
      } catch (i) {
        o(i);
      }
    }), this.isTraversingHistory = !1;
  }
  get isTraversingHistory() {
    return this._isTraversingHistory;
  }
  set isTraversingHistory(r) {
    this._isTraversingHistory = r, this._dispatchAvailbilityChange();
  }
  get busy() {
    return this._busy;
  }
  set busy(r) {
    this._busy = r, this._dispatchAvailbilityChange();
  }
  get available() {
    return !this._isTraversingHistory && !this.busy;
  }
  pushHistory() {
    const r = this.history.records.slice(0, this.history.index + 1);
    this.history.records = [...r, this.c.toObject().objects], this.history.index = this.history.records.length - 1, this._dispatchHistoryChange();
  }
  onHistoryChange(r) {
    this.onHistoryChangeListener = r;
  }
  onAvailabilityChange(r) {
    this.onAvailabilityChangeListener = r;
  }
  on(r, n) {
    const o = (i) => {
      n(i.detail);
    };
    return this.addEventListener(r, o), () => {
      this.removeEventListener(r, o);
    };
  }
  getHistoryInfo() {
    return {
      index: this.history.index,
      histories: this.history.records.length
    };
  }
  _dispatch(r, n) {
    this.dispatchEvent(
      new CustomEvent(r, {
        detail: n
      })
    );
  }
  _dispatchHistoryChange() {
    this._dispatch(Se.Event.HISTORY_CHANGE, this.getHistoryInfo());
  }
  _dispatchAvailbilityChange() {
    this._dispatch(Se.Event.AVAILABILITY_CHANGE, this.available);
  }
  fitCanvas() {
    if (!this.c.backgroundImage || !this.containerSize)
      return;
    const r = Math.min(
      1,
      Math.min(
        this.containerSize.width / this.c.backgroundImage.width,
        this.containerSize.height / this.c.backgroundImage.height
      )
    );
    this.c.setWidth(this.containerSize.width), this.c.setHeight(this.containerSize.height), this.c.backgroundImage.center();
    const n = new Oe.Rect({
      width: this.c.backgroundImage.width,
      height: this.c.backgroundImage.height,
      top: this.c.backgroundImage.top,
      left: this.c.backgroundImage.left
    });
    this.c.clipPath = n, this.zoomMin = r, this.zoom(
      { x: this.containerSize.width / 2, y: this.containerSize.height / 2 },
      r
    );
  }
  getDataUrl(r) {
    const n = this.c.viewportTransform;
    this.c.viewportTransform = Oe.iMatrix.slice(0);
    const o = this.c.toDataURL({
      format: r.toLowerCase() === "png" ? "png" : "jpeg",
      width: this.c.clipPath.width,
      height: this.c.clipPath.height,
      left: this.c.clipPath.left,
      top: this.c.clipPath.top
    });
    return this.c.viewportTransform = n, o;
  }
  deleteSelectedObject() {
    this.c.remove(this.c.getActiveObject());
  }
  changeSelectedTextSize(r) {
    this.c.getActiveObject().set("fontSize", this.calcTextSize(r)), this.config.text.fontSize = r, this.cacheConfig(), this.c.requestRenderAll();
  }
  changeSelectedTextColor(r) {
    this.c.getActiveObject().set("fill", r.code), this.config.text.color = r, this.cacheConfig(), this.c.requestRenderAll();
  }
  changeSelectedTextMessage(r) {
    this.c.getActiveObject().set("text", r), this.c.requestRenderAll();
  }
  getSelectedTextSize() {
    const r = this.c.getActiveObject();
    return this.calcFontSize(r.fontSize);
  }
  getSelectedTextColor() {
    const r = this.c.getActiveObject();
    return Object.values(Ne).includes(r.fill) ? {
      type: "preset",
      code: r.fill
    } : {
      type: "custom",
      code: r.fill
    };
  }
  getSelectedTextContents() {
    return this.c.getActiveObject().text;
  }
  setUsePencil(r) {
    this.config.usePencil = r, this.c.usePencil = r, this.cacheConfig();
  }
  fetchConfig() {
    const r = localStorage.getItem("editorConfig"), n = r ? JSON.parse(r) : null;
    return {
      freedraw: (n == null ? void 0 : n.freedraw) ?? {
        thickness: 3,
        color: {
          type: "preset",
          code: Ne.BLACK
        }
      },
      marker: (n == null ? void 0 : n.marker) ?? {
        thickness: 3,
        color: {
          type: "preset",
          code: Ne.BLACK
        }
      },
      eraser: (n == null ? void 0 : n.eraser) ?? {
        thickness: 3
      },
      text: (n == null ? void 0 : n.text) ?? {
        color: {
          type: "preset",
          code: Ne.BLACK
        },
        fontSize: 40
      },
      usePencil: (n == null ? void 0 : n.usePencil) ?? !0
    };
  }
  fetchTool() {
    return localStorage.getItem("editorTool") ?? K.PAN;
  }
  cacheConfig() {
    localStorage.setItem("editorConfig", JSON.stringify(this.config));
  }
  cacheTool() {
    localStorage.setItem("editorTool", this.tool.name);
  }
  isDirty() {
    return this.history.index > 0;
  }
};
let ve = Se;
ge(ve, "Event", qs), ge(ve, "Mode", Gs), ge(ve, "ConfigName", Xs);
const Qs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABgpJREFUWEeVl7uPG1UYxc+1x563X7uERwUtDVIoIlIgIhQBUoRWSFAihSIgKFKCqOiSAkSEBCI0adOQCCUNKChQkCD+BUoQCo+APU/P+HHRuQ971uvNwkqf7npm7fP7zvnu3bHA//iRv+CEnLffE3XrFOpWD7UQqAHUUqKSCerl96jnF8UruPtfP1Yc9YdSwpVp+6qYdfZQd4CZA9QOMGsBtYACqCRQL4FqAUznQFUD1fwmlvNXxVlMH6TxQIDZwrnkLDrnMXOhqwMN0QZqlgGoJVARgOJzYFqbqoCi+kycX7xzGMRWgJ8l3C4694bwB/HSN+IE6BoAutDSLlQqAt29qtlavJwC+RTIyhR/1g+Lj1FughwAuDnGsN93748QiBECjOCju/CA2tMAygVGQAcYAyNY6giU/QSodFE8L4GsYElMp8fER/irCbEP4BMJdwduOUIodhBipMrHQPoQc0KYGBSEjYAxmPyb9hf7xIEsB9Jcoj0Nm07sA7goO/8MEQ12EGGECBpCuxDYKOqmC40hbNpP6wmQ2e4pntlKxZW6Z11YAby1cC6NWsH5HcTQRQjrgoZw6AKHUUE0IlD22/w5eJviFiAFUlb2hfhy8SYhFMBLEu4Q/nQHPeyuAGLjAkEIEKAvOZBmFuxWVENodgCnv2T2q9wbnadAYisBFkUobqBQACeX7esjEe/tKoAeCNJ0Yu1GAI8DqbYkdwJdMENoh88OXpoDmbF9JUyABJhM6MTX4rv5iwrgSenJXfSV+HptQtCNUM3EEAFaCoBb0gIY+5m9yl0NnLa72bUSNwCE+KFsCV/ixBDxjw+hD5YGsDDaDe2KHkxGsT4bGgC031rPgUvYPcUIMdHCdh3z9RgoiudEe9m/3hPe3lB9eLyC2ITRsXBn6OHUZwNjYARzM3hFo3PTrRVlx1bY/p6k34iOfHw8QNjvI8QAIfqI1Eog3b11pjkfEQYygFAxQJ987F51zk43rLbCB9dMuPLp5QChaIrz983XBGrGQyfU2UAAbjtabges2e1KdKwdGI+1/VzHYyk8eVpawYHp3rqgr2tHNoEYFx1yCMBBU6L8cLNqAVMm833X9D3hydcMwFqIojqSbdf0dd7vSR9+AbTT8nBx1e02KO2EcOW55QCRimCzy6YTFLTVQ4h44cLPgW4BBCXgZku0Joxhw4kmwNp6O5BSdOW74z7Cvha3EOsu18IBKMyKagdBAXQzwMmAaAblhJcB3WQOsZoFE4mF2Leqe7lw5IWveghebopvdquFA8QyQDRtIaRYATipLgIEFZQjhPDV9UrPg9qGFsTOglmTyS0B+fkzPXh39osGOmNTsTp8PESl0OI54OZavJUA0RwIKx2FdYIQbirRTgoNsQ0kT59XR7Enr8lmvn0KNsXnXSXMovUUp/3tBBATICYAXZgaCDrBSrUbbrqEUEcyO191DxRnWgrAkd/eiBGcsVarIVMVIKraiBritvtOprsXY+0AYwhrA1BqAD9bR0KYbjIzBxX/GU1uidnx0/p5QN72AhwrKajFTd6lUOLsmqXsNd1z+FoT7QCFFQQBmlHwPRsQBHESPi1NIoFH8tUDSVv++mkE/23V9cJDzK7Lte0cMALQejX9KSCMA0G9jkHNgomCg6re1xhOAng5roQz8cbqgcQ+HnVlnUR1J45K7LOdwvwQZs/qpDx8dAQYA/4UiBeNGKwLZigVhHUiQ/FEJcIDj2Q6Cul7fyMPCwg7dFac3djhY/cKYKIB3BLoLQ664BOAZVzwc0i/RPwURL4dgFd/k7veGH8EBYTN3XbftfkTgPYbB3gaWoDVMDKGqQHQ8yP7JR47BXHv0Mfy1Y070u/W+N3PEdvBW3Vv8rdbkA50cgPQiEHNwjqKIqhw7PVG54c70MBrX5WX3RznbPb26LUHEHcAAfi6t9QRqDOhNluyUuuVD8zAbft6duSXU1yWgXMf1zopXuDeZ7F7dQYYAM6DisDMgYphhluPzrD34Zauj45g6zdJKZyzeLaV4H2R4KRIEIoJBA8iMYHsLVH0l7jbk7jw0xy3ASGP+ubN+/8CCrP4h3UWm6AAAAAASUVORK5CYII=";
function kt({ children: e, ...t }) {
  return /* @__PURE__ */ u.jsx(
    yo,
    {
      sx: {
        "& .MuiPaper-root": {
          overflowX: "unset",
          overflowY: "unset",
          backgroundColor: "grey.background",
          "::before": {
            content: '""',
            position: "absolute",
            marginRight: "-0.71em",
            bottom: 0,
            left: "50%",
            width: 16,
            height: 16,
            backgroundColor: "grey.background",
            boxShadow: 1,
            transform: "translate(-50%, 50%) rotate(135deg)",
            clipPath: `polygon(
              -8px -8px,
              calc(100% + 8px) -8px,
              calc(100% + 8px) calc(100% + 8px)
            )`
          }
        }
      },
      anchorOrigin: {
        vertical: -16,
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      ...t,
      children: e
    }
  );
}
const Js = {
  black: "#000",
  white: "#fff"
}, ht = Js, Zs = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, We = Zs, ea = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162"
}, ta = ea, ra = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ke = ra, na = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
  A100: "#b388ff",
  A200: "#7c4dff",
  A400: "#651fff",
  A700: "#6200ea"
}, oa = na, ia = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe"
}, sa = ia, aa = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, et = aa, ca = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, qe = ca, la = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ge = la, ua = {
  50: "#f9fbe7",
  100: "#f0f4c3",
  200: "#e6ee9c",
  300: "#dce775",
  400: "#d4e157",
  500: "#cddc39",
  600: "#c0ca33",
  700: "#afb42b",
  800: "#9e9d24",
  900: "#827717",
  A100: "#f4ff81",
  A200: "#eeff41",
  A400: "#c6ff00",
  A700: "#aeea00"
}, fa = ua, da = {
  50: "#fffde7",
  100: "#fff9c4",
  200: "#fff59d",
  300: "#fff176",
  400: "#ffee58",
  500: "#ffeb3b",
  600: "#fdd835",
  700: "#fbc02d",
  800: "#f9a825",
  900: "#f57f17",
  A100: "#ffff8d",
  A200: "#ffff00",
  A400: "#ffea00",
  A700: "#ffd600"
}, ha = da, pa = {
  50: "#fff8e1",
  100: "#ffecb3",
  200: "#ffe082",
  300: "#ffd54f",
  400: "#ffca28",
  500: "#ffc107",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00",
  A100: "#ffe57f",
  A200: "#ffd740",
  A400: "#ffc400",
  A700: "#ffab00"
}, ma = pa, ga = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, tt = ga, ya = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Fe = ya, va = [
  Ne.BLACK,
  Ne.RED,
  Ne.YELLOW,
  Ne.GREEN,
  Ne.BLUE
];
function Qr({ type: e, color: t, selected: r, onClick: n }) {
  return /* @__PURE__ */ u.jsx(it, { sx: { p: 0 }, onClick: n, children: /* @__PURE__ */ u.jsxs("svg", { width: "24", height: "24", children: [
    /* @__PURE__ */ u.jsxs("mask", { id: "mask", children: [
      /* @__PURE__ */ u.jsx(
        "circle",
        {
          cx: "50%",
          cy: "50%",
          r: "50%",
          stroke: "white",
          strokeWidth: "4",
          fill: "none"
        }
      ),
      /* @__PURE__ */ u.jsx("circle", { cx: "50%", cy: "50%", r: "8", fill: "white" })
    ] }),
    e === "preset" ? /* @__PURE__ */ u.jsx(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: "50%",
        fill: t,
        mask: r ? "url(#mask)" : ""
      }
    ) : /* @__PURE__ */ u.jsx(
      "image",
      {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        href: Qs,
        mask: r ? "url(#mask)" : ""
      }
    ),
    t && /* @__PURE__ */ u.jsx("circle", { cx: "50%", cy: "50%", r: "8", fill: t })
  ] }) });
}
const kn = [100, 200, 300, 400, 500, 600, 700, 800, 900], ba = ["#ffffff", ...kn.map((e) => Fe[e]), "#000000"], xa = [
  qe,
  sa,
  oa,
  Ke,
  ta,
  We,
  tt,
  ma,
  ha,
  fa,
  Ge
], Ea = ba.concat(
  ...kn.map((e) => xa.map((t) => t[e]))
);
function Ta({ color: e, onClick: t }) {
  return /* @__PURE__ */ u.jsx(
    Ye,
    {
      sx: {
        width: 24,
        height: 24,
        borderRadius: 0,
        p: 0,
        backgroundColor: e
      },
      onClick: t
    }
  );
}
function Ca({ onChange: e }) {
  return /* @__PURE__ */ u.jsx(
    Ye,
    {
      sx: {
        p: 2,
        display: "grid",
        gridTemplateColumns: "repeat(11, 1fr)"
      },
      children: Ea.map((t) => /* @__PURE__ */ u.jsx(Ta, { color: t, onClick: () => e(t) }, t))
    }
  );
}
function Mn({ value: e, onChange: t }) {
  const [r, n] = se(null), o = (l) => {
    e && t({
      type: "preset",
      code: l
    });
  }, i = (l) => {
    e && n(l.currentTarget);
  }, a = cn(() => {
    n(null);
  }, []), c = (l) => {
    t({
      type: "custom",
      code: l
    }), a();
  };
  return /* @__PURE__ */ u.jsxs(
    Ye,
    {
      sx: {
        display: "grid",
        gridTemplateRows: "repeat(2, minmax(0, 1fr))",
        gridTemplateColumns: "repeat(3, minmax(0, min-content))",
        gap: 1
      },
      children: [
        va.map((l, f) => /* @__PURE__ */ u.jsx(
          Qr,
          {
            selected: (e == null ? void 0 : e.type) === "preset" && (e == null ? void 0 : e.code) === l,
            type: "preset",
            color: l,
            onClick: () => o(l)
          },
          f
        )),
        /* @__PURE__ */ u.jsx(
          Qr,
          {
            selected: (e == null ? void 0 : e.type) === "custom",
            type: "custom",
            color: (e == null ? void 0 : e.type) === "custom" ? e == null ? void 0 : e.code : null,
            onClick: i
          }
        ),
        /* @__PURE__ */ u.jsx(
          kt,
          {
            open: !!r,
            anchorEl: r,
            onClose: a,
            anchorOrigin: {
              vertical: -16,
              horizontal: "center"
            },
            children: /* @__PURE__ */ u.jsx(Ca, { onChange: c })
          }
        )
      ]
    }
  );
}
function nr({
  leadingItems: e = null,
  palette: t = null,
  trailingItems: r
}) {
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      Ye,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 2
        },
        children: e
      }
    ),
    /* @__PURE__ */ u.jsx(Ye, { children: t }),
    /* @__PURE__ */ u.jsx(
      Ye,
      {
        sx: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2
        },
        children: r
      }
    )
  ] });
}
const xe = ({
  Icon: e,
  selected: t = !1,
  small: r = !1,
  ...n
}) => /* @__PURE__ */ u.jsx(
  it,
  {
    color: "inherit",
    sx: {
      ":disabled": {
        backgroundColor: Fe[200],
        color: Fe[400]
      },
      ":hover": {
        backgroundColor: t ? "black" : Fe[200]
      },
      p: r ? 1 : 1.5,
      borderRadius: "50%",
      backgroundColor: t ? "black" : Fe[200],
      color: t ? "white" : "black"
    },
    ...n,
    children: /* @__PURE__ */ u.jsx(e, { sx: { fontSize: r ? 16 : 20 } })
  }
), Sa = ({ thickness: e, selected: t }) => /* @__PURE__ */ u.jsx(
  Ee,
  {
    sx: {
      p: 1,
      backgroundColor: t ? "black" : "transparent",
      borderRadius: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40
    },
    children: /* @__PURE__ */ u.jsx(
      Ee,
      {
        sx: {
          width: e * 4,
          height: e * 4,
          borderRadius: "50%",
          backgroundColor: t ? "white" : "black"
        }
      }
    )
  }
), wa = [1, 2, 3, 4, 5], Ra = ({ value: e, onChange: t }) => {
  const r = (n) => {
    t({
      thickness: n
    });
  };
  return /* @__PURE__ */ u.jsx(Ee, { children: /* @__PURE__ */ u.jsx(
    Ee,
    {
      sx: {
        display: "flex",
        gap: 1
      },
      children: wa.map((n) => /* @__PURE__ */ u.jsx(it, { onClick: () => r(n), children: /* @__PURE__ */ u.jsx(Sa, { thickness: n, selected: e.thickness === n }) }, n))
    }
  ) });
}, _a = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("g", { fill: "currentColor", fillRule: "evenodd" }, /* @__PURE__ */ _.createElement("path", { d: "M11.892 22.287c-.08.082-.15.168-.208.26.414.192 1.513.784 3.097 2.272 1.545 1.455 2.086 2.41 2.256 2.787.031-.026.066-.049.096-.076l12.081-12.082-5.241-5.24-12.08 12.079zM27.12 7.06l-1.797 1.797 5.241 5.24 1.798-1.795a1.592 1.592 0 0 0-.003-2.243l-2.997-2.998a1.593 1.593 0 0 0-2.243-.001M13.333 26.221c-1.901-1.784-3.061-2.19-3.061-2.19s-1.045 2.44-1.73 4.588c.602.348 1.633 1.105 2.425 2.494 2.096-.844 4.538-2.121 4.538-2.121s-.272-.984-2.172-2.77M7.45 30.087c-.41 1.278-.665 2.434-.357 2.655.292.209 1.291-.095 2.41-.545-.669-1.176-1.541-1.816-2.052-2.11M26.763 33.484H10.26l2.797-1.304H29z" })));
function Oa(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: _a, ...e });
}
function Aa() {
  const [e, t] = se(null), { core: r } = we(), { tool: n, setTool: o } = st(), [i, a] = se(r.getToolConfig(K.FREEDRAW)), c = n === K.FREEDRAW, l = (p) => {
    c ? t(p.currentTarget) : o(K.FREEDRAW);
  }, f = () => {
    t(null);
  }, h = (p) => {
    const d = r.updateToolConfig(K.FREEDRAW, p);
    a(d), f();
  };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(xe, { selected: c, Icon: Oa, onClick: l }),
    /* @__PURE__ */ u.jsx(
      kt,
      {
        open: !!e,
        anchorEl: e,
        onClose: f,
        children: /* @__PURE__ */ u.jsx(Ra, { value: i, onChange: h })
      }
    )
  ] });
}
const ja = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("path", { d: "m20 6.957-5.07 5.07h4.146v7.049h-7.05v-4.147L6.957 20l5.07 5.07v-4.147h7.05v7.05H14.93l5.07 5.07 5.07-5.07h-4.146v-7.05h7.05v4.147l5.07-5.07-5.07-5.07v4.146h-7.05v-7.05h4.147z", fill: "currentColor", fillRule: "evenodd" }));
function Pa(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: ja, ...e });
}
function $a() {
  const { tool: e, setTool: t } = st(), r = e === K.PAN, n = (o) => {
    t(K.PAN);
  };
  return /* @__PURE__ */ u.jsx(xe, { selected: r, Icon: Pa, onClick: n });
}
const Ia = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("path", { d: "M27.232 16.057c-.678 0-1.261.395-1.538.967v-.065c0-.948-.751-1.752-1.7-1.757a1.707 1.707 0 0 0-1.546.968v-.065c0-.92-.707-1.712-1.626-1.755a1.709 1.709 0 0 0-1.792 1.707v-7.3c0-.92-.707-1.712-1.626-1.755a1.709 1.709 0 0 0-1.791 1.707v14.246l-1.113-4.01c-.261-.94-1.272-1.708-2.248-1.708a1.709 1.709 0 0 0-1.19 2.103l1.964 6.909a14.75 14.75 0 0 0 1.317 3.17l.953 1.704a3.023 3.023 0 0 0 2.638 1.546h6.797c1.156 0 2.21-.658 2.717-1.697a14.746 14.746 0 0 0 1.493-6.466v-6.74c0-.944-.765-1.71-1.709-1.71", fill: "currentColor", fillRule: "evenodd" }));
function ka(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: Ia, ...e });
}
function Ma() {
  const { tool: e, setTool: t } = st(), r = e === K.SELECT, n = (o) => {
    t(K.SELECT);
  };
  return /* @__PURE__ */ u.jsx(
    xe,
    {
      selected: r,
      Icon: ka,
      onClick: n
    }
  );
}
const Da = ({ thickness: e, selected: t }) => /* @__PURE__ */ u.jsx(
  Ee,
  {
    sx: {
      p: 1,
      backgroundColor: t ? "black" : "transparent",
      borderRadius: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40
    },
    children: /* @__PURE__ */ u.jsx(
      Ee,
      {
        sx: {
          width: e * 4,
          height: e * 4,
          borderRadius: "50%",
          backgroundColor: t ? "white" : "black"
        }
      }
    )
  }
), Ba = [1, 2, 3, 4, 5], Na = ({ value: e, onChange: t }) => {
  const r = (n) => {
    t({
      thickness: n
    });
  };
  return /* @__PURE__ */ u.jsx(Ee, { children: /* @__PURE__ */ u.jsx(
    Ee,
    {
      sx: {
        display: "flex",
        gap: 1
      },
      children: Ba.map((n) => /* @__PURE__ */ u.jsx(it, { onClick: () => r(n), children: /* @__PURE__ */ u.jsx(Da, { thickness: n, selected: e.thickness === n }) }, n))
    }
  ) });
}, Fa = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("g", { fill: "currentColor", fillRule: "evenodd" }, /* @__PURE__ */ _.createElement("path", { d: "m30.429 10.774-10.607 9.793 4.958 4.736 9.565-10.592c.054.072.064.03.066-.015v-.046l.002-.01c.01-.01.389.052-.326-.277l-3.651-3.582-.007-.007z", stroke: "currentColor", strokeWidth: 4 }), /* @__PURE__ */ _.createElement("path", { d: "m16.451 21.895 6.837 6.523s-3.62-.739-6.193 2.297l-2.763-2.617s3.552-2.475 2.12-6.203M12.406 30.55l2.38 2.217 1.545-1.658-2.381-2.218zM5.903 33.254h7.748L11.33 31.22l-7.406-.016z" })));
function za(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: Fa, ...e });
}
function La() {
  const [e, t] = se(null), { core: r } = we(), { tool: n, setTool: o } = st(), [i, a] = se(r.getToolConfig(K.MARKER)), c = n === K.MARKER, l = (p) => {
    c ? t(p.currentTarget) : o(K.MARKER);
  }, f = () => {
    t(null);
  }, h = (p) => {
    const d = r.updateToolConfig(K.MARKER, p);
    a(d), f();
  };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      xe,
      {
        selected: c,
        Icon: za,
        onClick: l
      }
    ),
    /* @__PURE__ */ u.jsx(
      kt,
      {
        open: !!e,
        anchorEl: e,
        onClose: f,
        children: /* @__PURE__ */ u.jsx(Na, { value: i, onChange: h })
      }
    )
  ] });
}
const Ua = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("g", { fill: "currentColor", fillRule: "nonzero", stroke: "currentColor", strokeWidth: 0.6 }, /* @__PURE__ */ _.createElement("path", { d: "M29.134 9.63H10.866a3.044 3.044 0 0 0-3.04 3.039v14.365l.002.013a3.043 3.043 0 0 0 3.038 3.015h18.267a3.043 3.043 0 0 0 3.04-3.03V12.669a3.043 3.043 0 0 0-3.04-3.04zm2.179 16.307-3.617-3.836a2.868 2.868 0 0 0-4.207 0l-2.437 2.584-3.538-3.86a2.802 2.802 0 0 0-2.08-.932c-.791 0-1.53.331-2.081.933l-4.666 5.09V12.668c0-1.201.978-2.18 2.18-2.18h18.267c1.201 0 2.179.979 2.179 2.18v13.268z" }), /* @__PURE__ */ _.createElement("path", { d: "M25.22 17.718a2.181 2.181 0 0 1-2.18-2.178c0-1.202.977-2.18 2.18-2.18 1.2 0 2.178.978 2.178 2.18a2.181 2.181 0 0 1-2.179 2.178z" })));
function Va(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: Ua, ...e });
}
const Ya = $n("label")``, Ha = $n("input")`
  display: none;
`, Wa = ({ ...e }) => {
  const { core: t } = we(), r = (o) => {
    o.target.value = null;
  }, n = async (o) => {
    await Promise.all(
      [...o.target.files].map(
        (i) => new Promise((a, c) => {
          const l = new FileReader();
          l.onload = function(f) {
            t.addImage(f.target.result), a();
          }, l.readAsDataURL(i);
        })
      )
    ), t.selectTool(K.SELECT);
  };
  return /* @__PURE__ */ u.jsxs(
    Ya,
    {
      htmlFor: "file-upload",
      sx: {
        display: "flex",
        ":hover": {
          backgroundColor: Fe[200]
        },
        p: 1.5,
        borderRadius: "50%",
        backgroundColor: Fe[200],
        color: "black"
      },
      children: [
        /* @__PURE__ */ u.jsx(
          Va,
          {
            sx: {
              fontSize: 20,
              color: "inherit"
            }
          }
        ),
        /* @__PURE__ */ u.jsx(
          Ha,
          {
            id: "file-upload",
            type: "file",
            ...e,
            accept: "image/*",
            onClick: r,
            onChange: n
          }
        )
      ]
    }
  );
}, Ka = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("path", { d: "M10.435 8.696v6.117h2.607v-2.515h5.403v16.4h-2.607v2.606h8.817v-2.607h-2.608V12.298h5.404v2.515h2.607V8.696z", fill: "currentColor", fillRule: "evenodd" }));
function qa(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: Ka, ...e });
}
function Ga() {
  const { core: e } = we(), t = (r) => {
    e.addText("text");
  };
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(xe, { Icon: qa, onClick: t }) });
}
const Xa = ({ thickness: e, selected: t }) => /* @__PURE__ */ u.jsx(
  Ee,
  {
    sx: {
      p: 1,
      backgroundColor: t ? "black" : "transparent",
      borderRadius: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 24,
      height: 24
    },
    children: /* @__PURE__ */ u.jsx(
      Ee,
      {
        sx: {
          width: e * 4,
          height: e * 4,
          borderRadius: "50%",
          backgroundColor: t ? "white" : "black"
        }
      }
    )
  }
), Qa = [1, 2, 3, 4, 5], Ja = ({ value: e, onChange: t }) => {
  const r = (n) => {
    t({
      thickness: n
    });
  };
  return /* @__PURE__ */ u.jsx(Ee, { children: /* @__PURE__ */ u.jsx(
    Ee,
    {
      sx: {
        display: "flex",
        gap: 1
      },
      children: Qa.map((n) => /* @__PURE__ */ u.jsx(it, { onClick: () => r(n), children: /* @__PURE__ */ u.jsx(Xa, { thickness: n, selected: e.thickness === n }) }, n))
    }
  ) });
}, Za = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("path", { d: "M25.09 5.217 6.086 24.22l6.637 6.635h21.189v-1.72h-15.2l15.146-15.147-8.77-8.77zM8.52 24.22l6.965-6.967 6.338 6.34-5.544 5.542h-2.843L8.52 24.22z", fill: "currentColor", fillRule: "evenodd" }));
function ec(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: Za, ...e });
}
function tc() {
  const [e, t] = se(null), { core: r } = we(), { tool: n, setTool: o } = st(), [i, a] = se(r.getToolConfig(K.ERASER)), c = n === K.ERASER, l = (p) => {
    c ? t(p.currentTarget) : o(K.ERASER);
  }, f = () => {
    t(null);
  }, h = (p) => {
    const d = r.updateToolConfig(K.ERASER, p);
    a(d), f();
  };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      xe,
      {
        selected: c,
        Icon: ec,
        onClick: l
      }
    ),
    /* @__PURE__ */ u.jsx(
      kt,
      {
        open: !!e,
        anchorEl: e,
        onClose: f,
        children: /* @__PURE__ */ u.jsx(Ja, { value: i, onChange: h })
      }
    )
  ] });
}
var or = {}, Ue = {}, rc = {
  get exports() {
    return Ue;
  },
  set exports(e) {
    Ue = e;
  }
};
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(rc);
var qt = {};
function nc(e, t) {
  return U({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const oc = ["mode", "contrastThreshold", "tonalOffset"], Jr = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: ht.white,
    default: ht.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Gt = {
  text: {
    primary: ht.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: ht.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Zr(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Fs(e.main, o) : t === "dark" && (e.dark = Ns(e.main, i)));
}
function ic(e = "light") {
  return e === "dark" ? {
    main: et[200],
    light: et[50],
    dark: et[400]
  } : {
    main: et[700],
    light: et[400],
    dark: et[800]
  };
}
function sc(e = "light") {
  return e === "dark" ? {
    main: Ke[200],
    light: Ke[50],
    dark: Ke[400]
  } : {
    main: Ke[500],
    light: Ke[300],
    dark: Ke[700]
  };
}
function ac(e = "light") {
  return e === "dark" ? {
    main: We[500],
    light: We[300],
    dark: We[700]
  } : {
    main: We[700],
    light: We[400],
    dark: We[800]
  };
}
function cc(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[700],
    light: qe[500],
    dark: qe[900]
  };
}
function lc(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: Ge[800],
    light: Ge[500],
    dark: Ge[900]
  };
}
function uc(e = "light") {
  return e === "dark" ? {
    main: tt[400],
    light: tt[300],
    dark: tt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: tt[500],
    dark: tt[900]
  };
}
function fc(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = be(e, oc), i = e.primary || ic(t), a = e.secondary || sc(t), c = e.error || ac(t), l = e.info || cc(t), f = e.success || lc(t), h = e.warning || uc(t);
  function p(g) {
    const m = Gr(g, Gt.text.primary) >= r ? Gt.text.primary : Jr.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = Gr(g, m);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const d = ({
    color: g,
    name: m,
    mainShade: O = 500,
    lightShade: R = 300,
    darkShade: k = 700
  }) => {
    if (g = U({}, g), !g.main && g[O] && (g.main = g[O]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : nt(11, m ? ` (${m})` : "", O));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : nt(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return Zr(g, "light", R, n), Zr(g, "dark", k, n), g.contrastText || (g.contrastText = p(g.main)), g;
  }, T = {
    dark: Gt,
    light: Jr
  };
  return process.env.NODE_ENV !== "production" && (T[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Le(U({
    // A collection of common colors.
    common: U({}, ht),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Fe,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, T[t]), o);
}
const dc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function hc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const en = {
  textTransform: "uppercase"
}, tn = '"Roboto", "Helvetica", "Arial", sans-serif';
function pc(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = tn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: p
  } = r, d = be(r, dc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const T = o / 14, S = p || ((O) => `${O / f * T}rem`), g = (O, R, k, H, b) => U({
    fontFamily: n,
    fontWeight: O,
    fontSize: S(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k
  }, n === tn ? {
    letterSpacing: `${hc(H / R)}em`
  } : {}, b, h), m = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(a, 48, 1.167, 0),
    h4: g(a, 34, 1.235, 0.25),
    h5: g(a, 24, 1.334, 0),
    h6: g(c, 20, 1.6, 0.15),
    subtitle1: g(a, 16, 1.75, 0.15),
    subtitle2: g(c, 14, 1.57, 0.1),
    body1: g(a, 16, 1.5, 0.15),
    body2: g(a, 14, 1.43, 0.15),
    button: g(c, 14, 1.75, 0.4, en),
    caption: g(a, 12, 1.66, 0.4),
    overline: g(a, 12, 2.66, 1, en),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Le(U({
    htmlFontSize: f,
    pxToRem: S,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: l
  }, m), d, {
    clone: !1
    // No need to clone deep
  });
}
const mc = 0.2, gc = 0.14, yc = 0.12;
function ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${mc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${gc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yc})`].join(",");
}
const vc = ["none", ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bc = vc, xc = ["duration", "easing", "delay"], Ec = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Tc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function rn(e) {
  return `${Math.round(e)}ms`;
}
function Cc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Sc(e) {
  const t = U({}, Ec, e.easing), r = U({}, Tc, e.duration);
  return U({
    getAutoHeightDuration: Cc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = i, f = be(i, xc);
      if (process.env.NODE_ENV !== "production") {
        const h = (d) => typeof d == "string", p = (d) => !isNaN(parseFloat(d));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !h(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), h(c) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !h(l) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof a == "string" ? a : rn(a)} ${c} ${typeof l == "string" ? l : rn(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const wc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Rc = wc, _c = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Oc(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = be(e, _c);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : nt(18));
  const c = fc(n), l = tr(e);
  let f = Le(l, {
    mixins: nc(l.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: bc.slice(),
    typography: pc(c, i),
    transitions: Sc(o),
    zIndex: U({}, Rc)
  });
  if (f = Le(f, a), f = t.reduce((h, p) => Le(h, p), f), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (d, T) => {
      let S;
      for (S in d) {
        const g = d[S];
        if (h.indexOf(S) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Jt("", S);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${S}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[S] = {};
        }
      }
    };
    Object.keys(f.components).forEach((d) => {
      const T = f.components[d].styleOverrides;
      T && d.indexOf("Mui") === 0 && p(T, d);
    });
  }
  return f.unstable_sxConfig = U({}, $t, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return It({
      sx: p,
      theme: this
    });
  }, f;
}
const Ac = Oc(), Dn = Ac;
function jc({
  props: e,
  name: t
}) {
  return Ms({
    props: e,
    name: t,
    defaultTheme: Dn
  });
}
const Pc = (e) => bt(e) && e !== "classes", $c = Pn({
  defaultTheme: Dn,
  rootShouldForwardProp: Pc
}), Ic = $c;
function kc(e) {
  return Jt("MuiSvgIcon", e);
}
gi("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Mc = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Dc = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ae(t)}`, `fontSize${Ae(r)}`]
  };
  return di(o, kc, n);
}, Bc = Ic("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Ae(r.color)}`], t[`fontSize${Ae(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, a, c, l, f, h, p, d, T, S, g, m, O, R;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (i = o.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (c = a.pxToRem) == null ? void 0 : c.call(a, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (f = l.pxToRem) == null ? void 0 : f.call(l, 24)) || "1.5rem",
      large: ((h = e.typography) == null || (p = h.pxToRem) == null ? void 0 : p.call(h, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (d = (T = (e.vars || e).palette) == null || (S = T[t.color]) == null ? void 0 : S.main) != null ? d : {
      action: (g = (e.vars || e).palette) == null || (m = g.action) == null ? void 0 : m.active,
      disabled: (O = (e.vars || e).palette) == null || (R = O.action) == null ? void 0 : R.disabled,
      inherit: void 0
    }[t.color]
  };
}), ir = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = jc({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: f,
    inheritViewBox: h = !1,
    titleAccess: p,
    viewBox: d = "0 0 24 24"
  } = n, T = be(n, Mc), S = U({}, n, {
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: h,
    viewBox: d
  }), g = {};
  h || (g.viewBox = d);
  const m = Dc(S);
  return /* @__PURE__ */ u.jsxs(Bc, U({
    as: c,
    className: Rn(m.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, g, T, {
    ownerState: S,
    children: [o, p ? /* @__PURE__ */ u.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ir.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: D.oneOfType([D.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), D.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: D.oneOfType([D.oneOf(["inherit", "large", "medium", "small"]), D.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: D.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: D.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: D.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: D.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: D.string
});
ir.muiName = "SvgIcon";
const nn = ir;
function Nc(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ u.jsx(nn, U({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = nn.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(r));
}
const Fc = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), xn.configure(e);
  }
}, zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Ae,
  createChainedFunction: Wo,
  createSvgIcon: Nc,
  debounce: Ko,
  deprecatedPropType: qo,
  isMuiElement: Go,
  ownerDocument: gn,
  ownerWindow: Xo,
  requirePropFactory: Qo,
  setRef: yn,
  unstable_ClassNameGenerator: Fc,
  unstable_useEnhancedEffect: vn,
  unstable_useId: ei,
  unsupportedProp: ti,
  useControlled: ri,
  useEventCallback: ni,
  useForkRef: oi,
  useIsFocusVisible: fi
}, Symbol.toStringTag, { value: "Module" })), Lc = /* @__PURE__ */ _o(zc);
var on;
function Qe() {
  return on || (on = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Lc;
  }(qt)), qt;
}
var Uc = Ue;
Object.defineProperty(or, "__esModule", {
  value: !0
});
var Bn = or.default = void 0, Vc = Uc(Qe()), Yc = u, Hc = (0, Vc.default)(/* @__PURE__ */ (0, Yc.jsx)("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz");
Bn = or.default = Hc;
function Wc() {
  const { core: e } = we(), [t, r] = se(null), [n, o] = se(e.config.usePencil), i = (l) => {
    r((f) => f ? null : l.currentTarget);
  }, a = () => {
    r(null);
  }, c = (l) => {
    o(!l.target.checked), e.setUsePencil(!l.target.checked);
  };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(xe, { small: !0, Icon: Bn, onClick: i }),
    /* @__PURE__ */ u.jsx(
      ln,
      {
        anchorEl: t,
        open: !!t,
        onClose: a,
        MenuListProps: {
          "aria-labelledby": "basic-button"
        },
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        children: /* @__PURE__ */ u.jsxs(un, { onClick: c, children: [
          /* @__PURE__ */ u.jsx(fn, { children: "손가락으로 그리기" }),
          /* @__PURE__ */ u.jsx(vo, { checked: !n, onChange: c })
        ] })
      }
    )
  ] });
}
const Kc = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("path", { d: "M20.051 10.332V7.57a.614.614 0 0 0-.981-.492l-4.911 3.683a.616.616 0 0 0 0 .983l4.91 3.683a.617.617 0 0 0 .643.058.614.614 0 0 0 .34-.55v-2.762c5.246 0 9.514 4.268 9.514 9.515 0 5.246-4.268 9.514-9.515 9.514-5.246 0-9.514-4.268-9.514-9.514v-.614a.921.921 0 0 0-1.841 0v.614c0 6.261 5.094 11.355 11.355 11.355 6.262 0 11.356-5.094 11.356-11.355 0-6.262-5.094-11.356-11.356-11.356", fill: "currentColor", stroke: "currentColor", fillRule: "evenodd" }));
function qc(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: Kc, ...e });
}
const Gc = (e) => /* @__PURE__ */ _.createElement("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ _.createElement("path", { d: "M20.051 10.332V7.57a.614.614 0 0 1 .982-.492l4.91 3.683a.616.616 0 0 1 0 .983l-4.91 3.683a.617.617 0 0 1-.642.058.614.614 0 0 1-.34-.55v-2.762c-5.246 0-9.514 4.268-9.514 9.515 0 5.246 4.268 9.514 9.514 9.514 5.247 0 9.515-4.268 9.515-9.514v-.614a.921.921 0 0 1 1.841 0v.614c0 6.261-5.094 11.355-11.356 11.355-6.261 0-11.355-5.094-11.355-11.355 0-6.262 5.094-11.356 11.355-11.356", fill: "currentColor", stroke: "currentColor", fillRule: "evenodd" }));
function Xc(e) {
  return /* @__PURE__ */ u.jsx(Ve, { inheritViewBox: !0, component: Gc, ...e });
}
function Qc() {
  const { core: e, touch: t } = we(), { tool: r } = st(), [n, o] = se(r ? e.getToolConfig(r) : null), [i, a] = se(e.getHistoryInfo()), [c, l] = se(e.available), f = (d) => {
    e.undo();
  }, h = (d) => {
    e.redo();
  };
  ze(() => {
    r && o(e.getToolConfig(r));
  }, [e, r]), ze(() => e.on(ve.Event.AVAILABILITY_CHANGE, l), [e]), ze(() => e.on(ve.Event.HISTORY_CHANGE, a), [e]);
  const p = (d) => {
    const T = e.updateToolConfig(r, {
      color: d
    });
    o(T);
  };
  return /* @__PURE__ */ u.jsx(
    nr,
    {
      leadingItems: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx($a, {}),
        /* @__PURE__ */ u.jsx(Ma, {}),
        /* @__PURE__ */ u.jsx(Aa, {}),
        /* @__PURE__ */ u.jsx(La, {}),
        /* @__PURE__ */ u.jsx(tc, {}),
        /* @__PURE__ */ u.jsx(Ga, {}),
        /* @__PURE__ */ u.jsx(Wa, {})
      ] }),
      palette: /* @__PURE__ */ u.jsx(Mn, { value: n == null ? void 0 : n.color, onChange: p }),
      trailingItems: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(
          xe,
          {
            small: !0,
            disabled: !c || i.index <= 0,
            Icon: qc,
            onClick: f
          }
        ),
        /* @__PURE__ */ u.jsx(
          xe,
          {
            small: !0,
            disabled: !c || i.index >= i.histories - 1,
            Icon: Xc,
            onClick: h
          }
        ),
        t && /* @__PURE__ */ u.jsx(Wc, {})
      ] })
    }
  );
}
var sr = {}, Jc = Ue;
Object.defineProperty(sr, "__esModule", {
  value: !0
});
var Nn = sr.default = void 0, Zc = Jc(Qe()), el = u, tl = (0, Zc.default)(/* @__PURE__ */ (0, el.jsx)("path", {
  d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM23 11v2h-8v-2h8z"
}), "TextDecrease");
Nn = sr.default = tl;
var ar = {}, rl = Ue;
Object.defineProperty(ar, "__esModule", {
  value: !0
});
var Fn = ar.default = void 0, nl = rl(Qe()), ol = u, il = (0, nl.default)(/* @__PURE__ */ (0, ol.jsx)("path", {
  d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z"
}), "TextIncrease");
Fn = ar.default = il;
var cr = {}, sl = Ue;
Object.defineProperty(cr, "__esModule", {
  value: !0
});
var zn = cr.default = void 0, al = sl(Qe()), cl = u, ll = (0, al.default)(/* @__PURE__ */ (0, cl.jsx)("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"
}), "Textsms");
zn = cr.default = ll;
var lr = {}, ul = Ue;
Object.defineProperty(lr, "__esModule", {
  value: !0
});
var Ln = lr.default = void 0, fl = ul(Qe()), dl = u, hl = (0, fl.default)(/* @__PURE__ */ (0, dl.jsx)("path", {
  d: "M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z"
}), "BookmarkAdd");
Ln = lr.default = hl;
var ur = {}, pl = Ue;
Object.defineProperty(ur, "__esModule", {
  value: !0
});
var fr = ur.default = void 0, ml = pl(Qe()), gl = u, yl = (0, ml.default)(/* @__PURE__ */ (0, gl.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), "DeleteForever");
fr = ur.default = yl;
var dr = {}, vl = Ue;
Object.defineProperty(dr, "__esModule", {
  value: !0
});
var Un = dr.default = void 0, bl = vl(Qe()), xl = u, El = (0, bl.default)(/* @__PURE__ */ (0, xl.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreVert");
Un = dr.default = El;
function Tl({ bp: e, onSelect: t, onDelete: r }) {
  const [n, o] = se(null), i = (l) => {
    l.stopPropagation(), o(l.currentTarget);
  }, a = async (l) => {
    l.stopPropagation(), r(e.id);
  }, c = () => {
    o(null);
  };
  return /* @__PURE__ */ u.jsxs(To, { button: !0, onClick: () => t(e.contents), children: [
    /* @__PURE__ */ u.jsx(fn, { primary: e.contents }),
    /* @__PURE__ */ u.jsx(it, { onClick: i, children: /* @__PURE__ */ u.jsx(Un, {}) }),
    /* @__PURE__ */ u.jsx(ln, { anchorEl: n, open: !!n, onClose: c, children: /* @__PURE__ */ u.jsx(un, { onClick: a, children: "삭제" }) })
  ] });
}
function Cl({
  open: e,
  boilerplates: t,
  onSelect: r,
  onClose: n,
  onDelete: o
}) {
  const i = (c) => {
    r(c), n();
  }, a = async (c) => {
    o(c);
  };
  return /* @__PURE__ */ u.jsxs(bo, { fullWidth: !0, maxWidth: "xs", onClose: n, open: e, children: [
    /* @__PURE__ */ u.jsx(xo, { children: "상용구를 선택하세요" }),
    /* @__PURE__ */ u.jsx(Eo, { sx: { pt: 0 }, children: t.map((c) => /* @__PURE__ */ u.jsx(
      Tl,
      {
        bp: c,
        onSelect: i,
        onDelete: a
      },
      c.id
    )) })
  ] });
}
const Sl = ({ value: e, onChange: t }) => /* @__PURE__ */ u.jsxs(
  Co,
  {
    spacing: 2,
    direction: "row",
    sx: { mb: 1, width: 200 },
    alignItems: "center",
    children: [
      /* @__PURE__ */ u.jsx(Nn, {}),
      /* @__PURE__ */ u.jsx(So, { "aria-label": "Volume", value: e, onChange: t }),
      /* @__PURE__ */ u.jsx(Fn, {})
    ]
  }
);
function wl() {
  const { core: e, boilerplate: t } = we();
  if (!t)
    throw new Error(
      "ImageEditor boilerplate attr must be provided in the edit mode"
    );
  const [r, n] = se(e.getSelectedTextSize()), [o, i] = se(e.getSelectedTextColor()), [a, c] = se(!1), [l, f] = se([]), h = cn(async () => {
    const R = await t.onLoadBoilerplate();
    f(R);
  }, [t]);
  ze(() => {
    h();
  }, [h]);
  const p = () => {
    e.deleteSelectedObject();
  }, d = (R) => {
    const k = R.target.value;
    e.changeSelectedTextSize(k), n(k);
  }, T = (R) => {
    e.changeSelectedTextColor(R), i(R);
  }, S = () => {
    c((R) => !R);
  }, g = async () => {
    await t.onSaveBoilerplate(e.getSelectedTextContents()), h();
  }, m = (R) => {
    e.changeSelectedTextMessage(R), c(!1);
  }, O = async (R) => {
    await t.onDeleteBoilerplate(R), h();
  };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      nr,
      {
        leadingItems: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(Sl, { value: r, onChange: d }),
          /* @__PURE__ */ u.jsx(xe, { Icon: zn, onClick: S }),
          /* @__PURE__ */ u.jsx(xe, { Icon: Ln, onClick: g })
        ] }),
        palette: /* @__PURE__ */ u.jsx(Mn, { value: o, onChange: T }),
        trailingItems: /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
          xe,
          {
            small: !0,
            Icon: fr,
            onClick: p
          }
        ) })
      }
    ),
    /* @__PURE__ */ u.jsx(
      Cl,
      {
        open: a,
        onClose: () => c(!1),
        onSelect: m,
        onDelete: O,
        boilerplates: l
      }
    )
  ] });
}
function Rl() {
  const { core: e } = we(), t = () => {
    e.deleteSelectedObject();
  };
  return /* @__PURE__ */ u.jsx(
    nr,
    {
      trailingItems: /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(
        xe,
        {
          small: !0,
          Icon: fr,
          onClick: t
        }
      ) })
    }
  );
}
function _l() {
  const { core: e, touch: t } = we(), [r, n] = se(e.mode);
  return ze(() => e.on(ve.Event.MODE_CHANGE, n), [e]), /* @__PURE__ */ u.jsx(
    Ee,
    {
      sx: {
        display: "flex",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ u.jsxs(
        wo,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: "404px 88px 128px",
            backgroundColor: Fe[50],
            py: 2,
            px: 4,
            overflow: "auto",
            color: "black",
            gap: 3
          },
          children: [
            r === ve.Mode.BRUSH && /* @__PURE__ */ u.jsx(Qc, {}),
            r === ve.Mode.TEXT && /* @__PURE__ */ u.jsx(wl, {}),
            r === ve.Mode.IMAGE && /* @__PURE__ */ u.jsx(Rl, {})
          ]
        }
      )
    }
  );
}
const Vn = ho(null), Ol = ({
  editorRef: e,
  imageUrl: t,
  children: r,
  touch: n = !0,
  boilerplate: o
}) => {
  const i = wr(() => new ve({
    imageUrl: t,
    touchEnabled: n
  }), [t, n]);
  mo(
    e,
    () => ({
      getDataUrl(c) {
        return i.getDataUrl(c);
      },
      isDirty() {
        return i.isDirty();
      },
      isBusy() {
        return i.busy;
      }
    }),
    [i]
  );
  const a = wr(
    () => ({
      core: i,
      boilerplate: o,
      touch: n
    }),
    [o, i, n]
  );
  return /* @__PURE__ */ u.jsx(Vn.Provider, { value: a, children: r });
};
function we() {
  return go(Vn);
}
function st() {
  var o;
  const { core: e } = we(), [t, r] = se((o = e.tool) == null ? void 0 : o.name);
  return ze(() => e.on(ve.Event.TOOL_CHANGE, (i) => r(i)), [e]), { tool: t, setTool: (i) => {
    e.selectTool(i);
  } };
}
const Ml = po(
  function({ viewOnly: t = !1, imageUrl: r, boilerplate: n, touch: o }, i) {
    const a = an(null), c = zs(a);
    return /* @__PURE__ */ u.jsx(
      Ol,
      {
        editorRef: i,
        imageUrl: r,
        boilerplate: n,
        touch: o,
        children: /* @__PURE__ */ u.jsxs(Ye, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ u.jsx(
            Ye,
            {
              ref: a,
              sx: {
                overflow: "hidden",
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: c && /* @__PURE__ */ u.jsx(Ls, { containerSize: c })
            }
          ),
          !t && /* @__PURE__ */ u.jsx(_l, {})
        ] })
      }
    );
  }
);
export {
  Ml as ImageEditor
};
